var hl=Object.defineProperty;var dl=(s,t,e)=>t in s?hl(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var O=(s,t,e)=>dl(s,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerPolicy&&(a.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?a.credentials="include":n.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(n){if(n.ep)return;n.ep=!0;const a=e(n);fetch(n.href,a)}})();function an(){}function yo(s){return s()}function Ba(){return Object.create(null)}function gs(s){s.forEach(yo)}function xo(s){return typeof s=="function"}function ul(s,t){return s!=s?t==t:s!==t||s&&typeof s=="object"||typeof s=="function"}function fl(s){return Object.keys(s).length===0}function Ee(s,t,e){s.insertBefore(t,e||null)}function xe(s){s.parentNode&&s.parentNode.removeChild(s)}function ri(s){return document.createElement(s)}function pl(s){return document.createTextNode(s)}function Mi(){return pl(" ")}function Pe(s,t,e){e==null?s.removeAttribute(t):s.getAttribute(t)!==e&&s.setAttribute(t,e)}function ml(s){return Array.from(s.childNodes)}let Sn;function Mn(s){Sn=s}function gl(){if(!Sn)throw new Error("Function called outside component initialization");return Sn}function vl(s){gl().$$.on_mount.push(s)}const en=[],Ga=[];let rn=[];const ka=[],_l=Promise.resolve();let aa=!1;function yl(){aa||(aa=!0,_l.then(Mo))}function ra(s){rn.push(s)}const As=new Set;let Ui=0;function Mo(){if(Ui!==0)return;const s=Sn;do{try{for(;Ui<en.length;){const t=en[Ui];Ui++,Mn(t),xl(t.$$)}}catch(t){throw en.length=0,Ui=0,t}for(Mn(null),en.length=0,Ui=0;Ga.length;)Ga.pop()();for(let t=0;t<rn.length;t+=1){const e=rn[t];As.has(e)||(As.add(e),e())}rn.length=0}while(en.length);for(;ka.length;)ka.pop()();aa=!1,As.clear(),Mn(s)}function xl(s){if(s.fragment!==null){s.update(),gs(s.before_update);const t=s.dirty;s.dirty=[-1],s.fragment&&s.fragment.p(s.ctx,t),s.after_update.forEach(ra)}}function Ml(s){const t=[],e=[];rn.forEach(i=>s.indexOf(i)===-1?t.push(i):e.push(i)),e.forEach(i=>i()),rn=t}const Tl=new Set;function El(s,t){s&&s.i&&(Tl.delete(s),s.i(t))}function Sl(s,t,e){const{fragment:i,after_update:n}=s.$$;i&&i.m(t,e),ra(()=>{const a=s.$$.on_mount.map(yo).filter(xo);s.$$.on_destroy?s.$$.on_destroy.push(...a):gs(a),s.$$.on_mount=[]}),n.forEach(ra)}function Al(s,t){const e=s.$$;e.fragment!==null&&(Ml(e.after_update),gs(e.on_destroy),e.fragment&&e.fragment.d(t),e.on_destroy=e.fragment=null,e.ctx=[])}function bl(s,t){s.$$.dirty[0]===-1&&(en.push(s),yl(),s.$$.dirty.fill(0)),s.$$.dirty[t/31|0]|=1<<t%31}function Pl(s,t,e,i,n,a,o=null,r=[-1]){const c=Sn;Mn(s);const l=s.$$={fragment:null,ctx:[],props:a,update:an,not_equal:n,bound:Ba(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(c?c.$$.context:[])),callbacks:Ba(),dirty:r,skip_bound:!1,root:t.target||c.$$.root};o&&o(l.root);let u=!1;if(l.ctx=e?e(s,t.props||{},(f,p,...v)=>{const m=v.length?v[0]:p;return l.ctx&&n(l.ctx[f],l.ctx[f]=m)&&(!l.skip_bound&&l.bound[f]&&l.bound[f](m),u&&bl(s,f)),p}):[],l.update(),u=!0,gs(l.before_update),l.fragment=i?i(l.ctx):!1,t.target){if(t.hydrate){const f=ml(t.target);l.fragment&&l.fragment.l(f),f.forEach(xe)}else l.fragment&&l.fragment.c();t.intro&&El(s.$$.fragment),Sl(s,t.target,t.anchor),Mo()}Mn(c)}class wl{constructor(){O(this,"$$");O(this,"$$set")}$destroy(){Al(this,1),this.$destroy=an}$on(t,e){if(!xo(e))return an;const i=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return i.push(e),()=>{const n=i.indexOf(e);n!==-1&&i.splice(n,1)}}$set(t){this.$$set&&!fl(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const Cl="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Cl);/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const xa="160",zi={ROTATE:0,DOLLY:1,PAN:2},Fi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Rl=0,Ha=1,Ll=2,To=1,Il=2,ii=3,_i=0,Re=1,ni=2,mi=0,on=1,Va=2,Wa=3,Ya=4,Dl=5,Pi=100,Ol=101,Nl=102,Xa=103,$a=104,Ul=200,zl=201,Fl=202,Bl=203,oa=204,la=205,Gl=206,kl=207,Hl=208,Vl=209,Wl=210,Yl=211,Xl=212,$l=213,Kl=214,ql=0,Zl=1,jl=2,os=3,Jl=4,Ql=5,tc=6,ec=7,Ma=0,ic=1,nc=2,gi=0,sc=1,ac=2,rc=3,oc=4,lc=5,cc=6,Eo=300,cn=301,hn=302,ca=303,ha=304,vs=306,da=1e3,We=1001,ua=1002,Ae=1003,Ka=1004,bs=1005,ze=1006,hc=1007,An=1008,vi=1009,dc=1010,uc=1011,Ta=1012,So=1013,fi=1014,pi=1015,bn=1016,Ao=1017,bo=1018,Ci=1020,fc=1021,Ye=1023,pc=1024,mc=1025,Ri=1026,dn=1027,gc=1028,Po=1029,vc=1030,wo=1031,Co=1033,Ps=33776,ws=33777,Cs=33778,Rs=33779,qa=35840,Za=35841,ja=35842,Ja=35843,Ro=36196,Qa=37492,tr=37496,er=37808,ir=37809,nr=37810,sr=37811,ar=37812,rr=37813,or=37814,lr=37815,cr=37816,hr=37817,dr=37818,ur=37819,fr=37820,pr=37821,Ls=36492,mr=36494,gr=36495,_c=36283,vr=36284,_r=36285,yr=36286,Lo=3e3,Li=3001,yc=3200,xc=3201,Io=0,Mc=1,Be="",ge="srgb",ai="srgb-linear",Ea="display-p3",_s="display-p3-linear",ls="linear",ee="srgb",cs="rec709",hs="p3",Bi=7680,xr=519,Tc=512,Ec=513,Sc=514,Do=515,Ac=516,bc=517,Pc=518,wc=519,Mr=35044,Tr="300 es",fa=1035,si=2e3,ds=2001;class Ni{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const n=this._listeners[t];if(n!==void 0){const a=n.indexOf(e);a!==-1&&n.splice(a,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const n=i.slice(0);for(let a=0,o=n.length;a<o;a++)n[a].call(this,t);t.target=null}}}const _e=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ss=Math.PI/180,pa=180/Math.PI;function wn(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(_e[s&255]+_e[s>>8&255]+_e[s>>16&255]+_e[s>>24&255]+"-"+_e[t&255]+_e[t>>8&255]+"-"+_e[t>>16&15|64]+_e[t>>24&255]+"-"+_e[e&63|128]+_e[e>>8&255]+"-"+_e[e>>16&255]+_e[e>>24&255]+_e[i&255]+_e[i>>8&255]+_e[i>>16&255]+_e[i>>24&255]).toLowerCase()}function be(s,t,e){return Math.max(t,Math.min(e,s))}function Cc(s,t){return(s%t+t)%t}function Is(s,t,e){return(1-e)*s+e*t}function Er(s){return(s&s-1)===0&&s!==0}function ma(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function mn(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function we(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Rc={DEG2RAD:ss};class Gt{constructor(t=0,e=0){Gt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,n=t.elements;return this.x=n[0]*e+n[3]*i+n[6],this.y=n[1]*e+n[4]*i+n[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(be(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),n=Math.sin(e),a=this.x-t.x,o=this.y-t.y;return this.x=a*i-o*n+t.x,this.y=a*n+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Kt{constructor(t,e,i,n,a,o,r,c,l){Kt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,n,a,o,r,c,l)}set(t,e,i,n,a,o,r,c,l){const u=this.elements;return u[0]=t,u[1]=n,u[2]=r,u[3]=e,u[4]=a,u[5]=c,u[6]=i,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,n=e.elements,a=this.elements,o=i[0],r=i[3],c=i[6],l=i[1],u=i[4],f=i[7],p=i[2],v=i[5],m=i[8],g=n[0],h=n[3],d=n[6],x=n[1],_=n[4],y=n[7],T=n[2],S=n[5],A=n[8];return a[0]=o*g+r*x+c*T,a[3]=o*h+r*_+c*S,a[6]=o*d+r*y+c*A,a[1]=l*g+u*x+f*T,a[4]=l*h+u*_+f*S,a[7]=l*d+u*y+f*A,a[2]=p*g+v*x+m*T,a[5]=p*h+v*_+m*S,a[8]=p*d+v*y+m*A,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],n=t[2],a=t[3],o=t[4],r=t[5],c=t[6],l=t[7],u=t[8];return e*o*u-e*r*l-i*a*u+i*r*c+n*a*l-n*o*c}invert(){const t=this.elements,e=t[0],i=t[1],n=t[2],a=t[3],o=t[4],r=t[5],c=t[6],l=t[7],u=t[8],f=u*o-r*l,p=r*c-u*a,v=l*a-o*c,m=e*f+i*p+n*v;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/m;return t[0]=f*g,t[1]=(n*l-u*i)*g,t[2]=(r*i-n*o)*g,t[3]=p*g,t[4]=(u*e-n*c)*g,t[5]=(n*a-r*e)*g,t[6]=v*g,t[7]=(i*c-l*e)*g,t[8]=(o*e-i*a)*g,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,n,a,o,r){const c=Math.cos(a),l=Math.sin(a);return this.set(i*c,i*l,-i*(c*o+l*r)+o+t,-n*l,n*c,-n*(-l*o+c*r)+r+e,0,0,1),this}scale(t,e){return this.premultiply(Ds.makeScale(t,e)),this}rotate(t){return this.premultiply(Ds.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ds.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let n=0;n<9;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Ds=new Kt;function Oo(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function us(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Lc(){const s=us("canvas");return s.style.display="block",s}const Sr={};function Tn(s){s in Sr||(Sr[s]=!0,console.warn(s))}const Ar=new Kt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),br=new Kt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Dn={[ai]:{transfer:ls,primaries:cs,toReference:s=>s,fromReference:s=>s},[ge]:{transfer:ee,primaries:cs,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[_s]:{transfer:ls,primaries:hs,toReference:s=>s.applyMatrix3(br),fromReference:s=>s.applyMatrix3(Ar)},[Ea]:{transfer:ee,primaries:hs,toReference:s=>s.convertSRGBToLinear().applyMatrix3(br),fromReference:s=>s.applyMatrix3(Ar).convertLinearToSRGB()}},Ic=new Set([ai,_s]),Qt={enabled:!0,_workingColorSpace:ai,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!Ic.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,t,e){if(this.enabled===!1||t===e||!t||!e)return s;const i=Dn[t].toReference,n=Dn[e].fromReference;return n(i(s))},fromWorkingColorSpace:function(s,t){return this.convert(s,this._workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this._workingColorSpace)},getPrimaries:function(s){return Dn[s].primaries},getTransfer:function(s){return s===Be?ls:Dn[s].transfer}};function ln(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Os(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Gi;class No{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Gi===void 0&&(Gi=us("canvas")),Gi.width=t.width,Gi.height=t.height;const i=Gi.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=Gi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=us("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const n=i.getImageData(0,0,t.width,t.height),a=n.data;for(let o=0;o<a.length;o++)a[o]=ln(a[o]/255)*255;return i.putImageData(n,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(ln(e[i]/255)*255):e[i]=ln(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Dc=0;class Uo{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Dc++}),this.uuid=wn(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let a;if(Array.isArray(n)){a=[];for(let o=0,r=n.length;o<r;o++)n[o].isDataTexture?a.push(Ns(n[o].image)):a.push(Ns(n[o]))}else a=Ns(n);i.url=a}return e||(t.images[this.uuid]=i),i}}function Ns(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?No.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Oc=0;class Oe extends Ni{constructor(t=Oe.DEFAULT_IMAGE,e=Oe.DEFAULT_MAPPING,i=We,n=We,a=ze,o=An,r=Ye,c=vi,l=Oe.DEFAULT_ANISOTROPY,u=Be){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Oc++}),this.uuid=wn(),this.name="",this.source=new Uo(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=a,this.minFilter=o,this.anisotropy=l,this.format=r,this.internalFormat=null,this.type=c,this.offset=new Gt(0,0),this.repeat=new Gt(1,1),this.center=new Gt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Kt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(Tn("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===Li?ge:Be),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Eo)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case da:t.x=t.x-Math.floor(t.x);break;case We:t.x=t.x<0?0:1;break;case ua:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case da:t.y=t.y-Math.floor(t.y);break;case We:t.y=t.y<0?0:1;break;case ua:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Tn("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===ge?Li:Lo}set encoding(t){Tn("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===Li?ge:Be}}Oe.DEFAULT_IMAGE=null;Oe.DEFAULT_MAPPING=Eo;Oe.DEFAULT_ANISOTROPY=1;class me{constructor(t=0,e=0,i=0,n=1){me.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=n}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,n){return this.x=t,this.y=e,this.z=i,this.w=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,n=this.z,a=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*n+o[12]*a,this.y=o[1]*e+o[5]*i+o[9]*n+o[13]*a,this.z=o[2]*e+o[6]*i+o[10]*n+o[14]*a,this.w=o[3]*e+o[7]*i+o[11]*n+o[15]*a,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,n,a;const c=t.elements,l=c[0],u=c[4],f=c[8],p=c[1],v=c[5],m=c[9],g=c[2],h=c[6],d=c[10];if(Math.abs(u-p)<.01&&Math.abs(f-g)<.01&&Math.abs(m-h)<.01){if(Math.abs(u+p)<.1&&Math.abs(f+g)<.1&&Math.abs(m+h)<.1&&Math.abs(l+v+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const _=(l+1)/2,y=(v+1)/2,T=(d+1)/2,S=(u+p)/4,A=(f+g)/4,N=(m+h)/4;return _>y&&_>T?_<.01?(i=0,n=.707106781,a=.707106781):(i=Math.sqrt(_),n=S/i,a=A/i):y>T?y<.01?(i=.707106781,n=0,a=.707106781):(n=Math.sqrt(y),i=S/n,a=N/n):T<.01?(i=.707106781,n=.707106781,a=0):(a=Math.sqrt(T),i=A/a,n=N/a),this.set(i,n,a,e),this}let x=Math.sqrt((h-m)*(h-m)+(f-g)*(f-g)+(p-u)*(p-u));return Math.abs(x)<.001&&(x=1),this.x=(h-m)/x,this.y=(f-g)/x,this.z=(p-u)/x,this.w=Math.acos((l+v+d-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Nc extends Ni{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new me(0,0,t,e),this.scissorTest=!1,this.viewport=new me(0,0,t,e);const n={width:t,height:e,depth:1};i.encoding!==void 0&&(Tn("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Li?ge:Be),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ze,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new Oe(n,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(t,e,i=1){(this.width!==t||this.height!==e||this.depth!==i)&&(this.width=t,this.height=e,this.depth=i,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Uo(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ii extends Nc{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class zo extends Oe{constructor(t=null,e=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=Ae,this.minFilter=Ae,this.wrapR=We,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Uc extends Oe{constructor(t=null,e=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=Ae,this.minFilter=Ae,this.wrapR=We,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Di{constructor(t=0,e=0,i=0,n=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=n}static slerpFlat(t,e,i,n,a,o,r){let c=i[n+0],l=i[n+1],u=i[n+2],f=i[n+3];const p=a[o+0],v=a[o+1],m=a[o+2],g=a[o+3];if(r===0){t[e+0]=c,t[e+1]=l,t[e+2]=u,t[e+3]=f;return}if(r===1){t[e+0]=p,t[e+1]=v,t[e+2]=m,t[e+3]=g;return}if(f!==g||c!==p||l!==v||u!==m){let h=1-r;const d=c*p+l*v+u*m+f*g,x=d>=0?1:-1,_=1-d*d;if(_>Number.EPSILON){const T=Math.sqrt(_),S=Math.atan2(T,d*x);h=Math.sin(h*S)/T,r=Math.sin(r*S)/T}const y=r*x;if(c=c*h+p*y,l=l*h+v*y,u=u*h+m*y,f=f*h+g*y,h===1-r){const T=1/Math.sqrt(c*c+l*l+u*u+f*f);c*=T,l*=T,u*=T,f*=T}}t[e]=c,t[e+1]=l,t[e+2]=u,t[e+3]=f}static multiplyQuaternionsFlat(t,e,i,n,a,o){const r=i[n],c=i[n+1],l=i[n+2],u=i[n+3],f=a[o],p=a[o+1],v=a[o+2],m=a[o+3];return t[e]=r*m+u*f+c*v-l*p,t[e+1]=c*m+u*p+l*f-r*v,t[e+2]=l*m+u*v+r*p-c*f,t[e+3]=u*m-r*f-c*p-l*v,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,n){return this._x=t,this._y=e,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,n=t._y,a=t._z,o=t._order,r=Math.cos,c=Math.sin,l=r(i/2),u=r(n/2),f=r(a/2),p=c(i/2),v=c(n/2),m=c(a/2);switch(o){case"XYZ":this._x=p*u*f+l*v*m,this._y=l*v*f-p*u*m,this._z=l*u*m+p*v*f,this._w=l*u*f-p*v*m;break;case"YXZ":this._x=p*u*f+l*v*m,this._y=l*v*f-p*u*m,this._z=l*u*m-p*v*f,this._w=l*u*f+p*v*m;break;case"ZXY":this._x=p*u*f-l*v*m,this._y=l*v*f+p*u*m,this._z=l*u*m+p*v*f,this._w=l*u*f-p*v*m;break;case"ZYX":this._x=p*u*f-l*v*m,this._y=l*v*f+p*u*m,this._z=l*u*m-p*v*f,this._w=l*u*f+p*v*m;break;case"YZX":this._x=p*u*f+l*v*m,this._y=l*v*f+p*u*m,this._z=l*u*m-p*v*f,this._w=l*u*f-p*v*m;break;case"XZY":this._x=p*u*f-l*v*m,this._y=l*v*f-p*u*m,this._z=l*u*m+p*v*f,this._w=l*u*f+p*v*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,n=Math.sin(i);return this._x=t.x*n,this._y=t.y*n,this._z=t.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],n=e[4],a=e[8],o=e[1],r=e[5],c=e[9],l=e[2],u=e[6],f=e[10],p=i+r+f;if(p>0){const v=.5/Math.sqrt(p+1);this._w=.25/v,this._x=(u-c)*v,this._y=(a-l)*v,this._z=(o-n)*v}else if(i>r&&i>f){const v=2*Math.sqrt(1+i-r-f);this._w=(u-c)/v,this._x=.25*v,this._y=(n+o)/v,this._z=(a+l)/v}else if(r>f){const v=2*Math.sqrt(1+r-i-f);this._w=(a-l)/v,this._x=(n+o)/v,this._y=.25*v,this._z=(c+u)/v}else{const v=2*Math.sqrt(1+f-i-r);this._w=(o-n)/v,this._x=(a+l)/v,this._y=(c+u)/v,this._z=.25*v}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(be(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const n=Math.min(1,e/i);return this.slerp(t,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,n=t._y,a=t._z,o=t._w,r=e._x,c=e._y,l=e._z,u=e._w;return this._x=i*u+o*r+n*l-a*c,this._y=n*u+o*c+a*r-i*l,this._z=a*u+o*l+i*c-n*r,this._w=o*u-i*r-n*c-a*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,n=this._y,a=this._z,o=this._w;let r=o*t._w+i*t._x+n*t._y+a*t._z;if(r<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,r=-r):this.copy(t),r>=1)return this._w=o,this._x=i,this._y=n,this._z=a,this;const c=1-r*r;if(c<=Number.EPSILON){const v=1-e;return this._w=v*o+e*this._w,this._x=v*i+e*this._x,this._y=v*n+e*this._y,this._z=v*a+e*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,r),f=Math.sin((1-e)*u)/l,p=Math.sin(e*u)/l;return this._w=o*f+this._w*p,this._x=i*f+this._x*p,this._y=n*f+this._y*p,this._z=a*f+this._z*p,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=Math.random(),e=Math.sqrt(1-t),i=Math.sqrt(t),n=2*Math.PI*Math.random(),a=2*Math.PI*Math.random();return this.set(e*Math.cos(n),i*Math.sin(a),i*Math.cos(a),e*Math.sin(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class W{constructor(t=0,e=0,i=0){W.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Pr.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Pr.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,n=this.z,a=t.elements;return this.x=a[0]*e+a[3]*i+a[6]*n,this.y=a[1]*e+a[4]*i+a[7]*n,this.z=a[2]*e+a[5]*i+a[8]*n,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,n=this.z,a=t.elements,o=1/(a[3]*e+a[7]*i+a[11]*n+a[15]);return this.x=(a[0]*e+a[4]*i+a[8]*n+a[12])*o,this.y=(a[1]*e+a[5]*i+a[9]*n+a[13])*o,this.z=(a[2]*e+a[6]*i+a[10]*n+a[14])*o,this}applyQuaternion(t){const e=this.x,i=this.y,n=this.z,a=t.x,o=t.y,r=t.z,c=t.w,l=2*(o*n-r*i),u=2*(r*e-a*n),f=2*(a*i-o*e);return this.x=e+c*l+o*f-r*u,this.y=i+c*u+r*l-a*f,this.z=n+c*f+a*u-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,n=this.z,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*n,this.y=a[1]*e+a[5]*i+a[9]*n,this.z=a[2]*e+a[6]*i+a[10]*n,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,n=t.y,a=t.z,o=e.x,r=e.y,c=e.z;return this.x=n*c-a*r,this.y=a*o-i*c,this.z=i*r-n*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Us.copy(this).projectOnVector(t),this.sub(Us)}reflect(t){return this.sub(Us.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(be(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,n=this.z-t.z;return e*e+i*i+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const n=Math.sin(e)*t;return this.x=n*Math.sin(i),this.y=Math.cos(e)*t,this.z=n*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),n=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=n,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,i=Math.sqrt(1-t**2);return this.x=i*Math.cos(e),this.y=i*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Us=new W,Pr=new Di;class Cn{constructor(t=new W(1/0,1/0,1/0),e=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Ge.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Ge.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=Ge.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const a=i.getAttribute("position");if(e===!0&&a!==void 0&&t.isInstancedMesh!==!0)for(let o=0,r=a.count;o<r;o++)t.isMesh===!0?t.getVertexPosition(o,Ge):Ge.fromBufferAttribute(a,o),Ge.applyMatrix4(t.matrixWorld),this.expandByPoint(Ge);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),On.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),On.copy(i.boundingBox)),On.applyMatrix4(t.matrixWorld),this.union(On)}const n=t.children;for(let a=0,o=n.length;a<o;a++)this.expandByObject(n[a],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,Ge),Ge.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(gn),Nn.subVectors(this.max,gn),ki.subVectors(t.a,gn),Hi.subVectors(t.b,gn),Vi.subVectors(t.c,gn),oi.subVectors(Hi,ki),li.subVectors(Vi,Hi),Ti.subVectors(ki,Vi);let e=[0,-oi.z,oi.y,0,-li.z,li.y,0,-Ti.z,Ti.y,oi.z,0,-oi.x,li.z,0,-li.x,Ti.z,0,-Ti.x,-oi.y,oi.x,0,-li.y,li.x,0,-Ti.y,Ti.x,0];return!zs(e,ki,Hi,Vi,Nn)||(e=[1,0,0,0,1,0,0,0,1],!zs(e,ki,Hi,Vi,Nn))?!1:(Un.crossVectors(oi,li),e=[Un.x,Un.y,Un.z],zs(e,ki,Hi,Vi,Nn))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ge).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ge).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(je[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),je[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),je[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),je[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),je[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),je[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),je[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),je[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(je),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const je=[new W,new W,new W,new W,new W,new W,new W,new W],Ge=new W,On=new Cn,ki=new W,Hi=new W,Vi=new W,oi=new W,li=new W,Ti=new W,gn=new W,Nn=new W,Un=new W,Ei=new W;function zs(s,t,e,i,n){for(let a=0,o=s.length-3;a<=o;a+=3){Ei.fromArray(s,a);const r=n.x*Math.abs(Ei.x)+n.y*Math.abs(Ei.y)+n.z*Math.abs(Ei.z),c=t.dot(Ei),l=e.dot(Ei),u=i.dot(Ei);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>r)return!1}return!0}const zc=new Cn,vn=new W,Fs=new W;class Sa{constructor(t=new W,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):zc.setFromPoints(t).getCenter(i);let n=0;for(let a=0,o=t.length;a<o;a++)n=Math.max(n,i.distanceToSquared(t[a]));return this.radius=Math.sqrt(n),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;vn.subVectors(t,this.center);const e=vn.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),n=(i-this.radius)*.5;this.center.addScaledVector(vn,n/i),this.radius+=n}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Fs.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(vn.copy(t.center).add(Fs)),this.expandByPoint(vn.copy(t.center).sub(Fs))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Je=new W,Bs=new W,zn=new W,ci=new W,Gs=new W,Fn=new W,ks=new W;class Aa{constructor(t=new W,e=new W(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Je)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Je.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Je.copy(this.origin).addScaledVector(this.direction,e),Je.distanceToSquared(t))}distanceSqToSegment(t,e,i,n){Bs.copy(t).add(e).multiplyScalar(.5),zn.copy(e).sub(t).normalize(),ci.copy(this.origin).sub(Bs);const a=t.distanceTo(e)*.5,o=-this.direction.dot(zn),r=ci.dot(this.direction),c=-ci.dot(zn),l=ci.lengthSq(),u=Math.abs(1-o*o);let f,p,v,m;if(u>0)if(f=o*c-r,p=o*r-c,m=a*u,f>=0)if(p>=-m)if(p<=m){const g=1/u;f*=g,p*=g,v=f*(f+o*p+2*r)+p*(o*f+p+2*c)+l}else p=a,f=Math.max(0,-(o*p+r)),v=-f*f+p*(p+2*c)+l;else p=-a,f=Math.max(0,-(o*p+r)),v=-f*f+p*(p+2*c)+l;else p<=-m?(f=Math.max(0,-(-o*a+r)),p=f>0?-a:Math.min(Math.max(-a,-c),a),v=-f*f+p*(p+2*c)+l):p<=m?(f=0,p=Math.min(Math.max(-a,-c),a),v=p*(p+2*c)+l):(f=Math.max(0,-(o*a+r)),p=f>0?a:Math.min(Math.max(-a,-c),a),v=-f*f+p*(p+2*c)+l);else p=o>0?-a:a,f=Math.max(0,-(o*p+r)),v=-f*f+p*(p+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,f),n&&n.copy(Bs).addScaledVector(zn,p),v}intersectSphere(t,e){Je.subVectors(t.center,this.origin);const i=Je.dot(this.direction),n=Je.dot(Je)-i*i,a=t.radius*t.radius;if(n>a)return null;const o=Math.sqrt(a-n),r=i-o,c=i+o;return c<0?null:r<0?this.at(c,e):this.at(r,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,n,a,o,r,c;const l=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,p=this.origin;return l>=0?(i=(t.min.x-p.x)*l,n=(t.max.x-p.x)*l):(i=(t.max.x-p.x)*l,n=(t.min.x-p.x)*l),u>=0?(a=(t.min.y-p.y)*u,o=(t.max.y-p.y)*u):(a=(t.max.y-p.y)*u,o=(t.min.y-p.y)*u),i>o||a>n||((a>i||isNaN(i))&&(i=a),(o<n||isNaN(n))&&(n=o),f>=0?(r=(t.min.z-p.z)*f,c=(t.max.z-p.z)*f):(r=(t.max.z-p.z)*f,c=(t.min.z-p.z)*f),i>c||r>n)||((r>i||i!==i)&&(i=r),(c<n||n!==n)&&(n=c),n<0)?null:this.at(i>=0?i:n,e)}intersectsBox(t){return this.intersectBox(t,Je)!==null}intersectTriangle(t,e,i,n,a){Gs.subVectors(e,t),Fn.subVectors(i,t),ks.crossVectors(Gs,Fn);let o=this.direction.dot(ks),r;if(o>0){if(n)return null;r=1}else if(o<0)r=-1,o=-o;else return null;ci.subVectors(this.origin,t);const c=r*this.direction.dot(Fn.crossVectors(ci,Fn));if(c<0)return null;const l=r*this.direction.dot(Gs.cross(ci));if(l<0||c+l>o)return null;const u=-r*ci.dot(ks);return u<0?null:this.at(u/o,a)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class he{constructor(t,e,i,n,a,o,r,c,l,u,f,p,v,m,g,h){he.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,n,a,o,r,c,l,u,f,p,v,m,g,h)}set(t,e,i,n,a,o,r,c,l,u,f,p,v,m,g,h){const d=this.elements;return d[0]=t,d[4]=e,d[8]=i,d[12]=n,d[1]=a,d[5]=o,d[9]=r,d[13]=c,d[2]=l,d[6]=u,d[10]=f,d[14]=p,d[3]=v,d[7]=m,d[11]=g,d[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new he().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,n=1/Wi.setFromMatrixColumn(t,0).length(),a=1/Wi.setFromMatrixColumn(t,1).length(),o=1/Wi.setFromMatrixColumn(t,2).length();return e[0]=i[0]*n,e[1]=i[1]*n,e[2]=i[2]*n,e[3]=0,e[4]=i[4]*a,e[5]=i[5]*a,e[6]=i[6]*a,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,n=t.y,a=t.z,o=Math.cos(i),r=Math.sin(i),c=Math.cos(n),l=Math.sin(n),u=Math.cos(a),f=Math.sin(a);if(t.order==="XYZ"){const p=o*u,v=o*f,m=r*u,g=r*f;e[0]=c*u,e[4]=-c*f,e[8]=l,e[1]=v+m*l,e[5]=p-g*l,e[9]=-r*c,e[2]=g-p*l,e[6]=m+v*l,e[10]=o*c}else if(t.order==="YXZ"){const p=c*u,v=c*f,m=l*u,g=l*f;e[0]=p+g*r,e[4]=m*r-v,e[8]=o*l,e[1]=o*f,e[5]=o*u,e[9]=-r,e[2]=v*r-m,e[6]=g+p*r,e[10]=o*c}else if(t.order==="ZXY"){const p=c*u,v=c*f,m=l*u,g=l*f;e[0]=p-g*r,e[4]=-o*f,e[8]=m+v*r,e[1]=v+m*r,e[5]=o*u,e[9]=g-p*r,e[2]=-o*l,e[6]=r,e[10]=o*c}else if(t.order==="ZYX"){const p=o*u,v=o*f,m=r*u,g=r*f;e[0]=c*u,e[4]=m*l-v,e[8]=p*l+g,e[1]=c*f,e[5]=g*l+p,e[9]=v*l-m,e[2]=-l,e[6]=r*c,e[10]=o*c}else if(t.order==="YZX"){const p=o*c,v=o*l,m=r*c,g=r*l;e[0]=c*u,e[4]=g-p*f,e[8]=m*f+v,e[1]=f,e[5]=o*u,e[9]=-r*u,e[2]=-l*u,e[6]=v*f+m,e[10]=p-g*f}else if(t.order==="XZY"){const p=o*c,v=o*l,m=r*c,g=r*l;e[0]=c*u,e[4]=-f,e[8]=l*u,e[1]=p*f+g,e[5]=o*u,e[9]=v*f-m,e[2]=m*f-v,e[6]=r*u,e[10]=g*f+p}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Fc,t,Bc)}lookAt(t,e,i){const n=this.elements;return Ie.subVectors(t,e),Ie.lengthSq()===0&&(Ie.z=1),Ie.normalize(),hi.crossVectors(i,Ie),hi.lengthSq()===0&&(Math.abs(i.z)===1?Ie.x+=1e-4:Ie.z+=1e-4,Ie.normalize(),hi.crossVectors(i,Ie)),hi.normalize(),Bn.crossVectors(Ie,hi),n[0]=hi.x,n[4]=Bn.x,n[8]=Ie.x,n[1]=hi.y,n[5]=Bn.y,n[9]=Ie.y,n[2]=hi.z,n[6]=Bn.z,n[10]=Ie.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,n=e.elements,a=this.elements,o=i[0],r=i[4],c=i[8],l=i[12],u=i[1],f=i[5],p=i[9],v=i[13],m=i[2],g=i[6],h=i[10],d=i[14],x=i[3],_=i[7],y=i[11],T=i[15],S=n[0],A=n[4],N=n[8],M=n[12],b=n[1],z=n[5],D=n[9],k=n[13],R=n[2],I=n[6],B=n[10],j=n[14],J=n[3],K=n[7],Q=n[11],nt=n[15];return a[0]=o*S+r*b+c*R+l*J,a[4]=o*A+r*z+c*I+l*K,a[8]=o*N+r*D+c*B+l*Q,a[12]=o*M+r*k+c*j+l*nt,a[1]=u*S+f*b+p*R+v*J,a[5]=u*A+f*z+p*I+v*K,a[9]=u*N+f*D+p*B+v*Q,a[13]=u*M+f*k+p*j+v*nt,a[2]=m*S+g*b+h*R+d*J,a[6]=m*A+g*z+h*I+d*K,a[10]=m*N+g*D+h*B+d*Q,a[14]=m*M+g*k+h*j+d*nt,a[3]=x*S+_*b+y*R+T*J,a[7]=x*A+_*z+y*I+T*K,a[11]=x*N+_*D+y*B+T*Q,a[15]=x*M+_*k+y*j+T*nt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],n=t[8],a=t[12],o=t[1],r=t[5],c=t[9],l=t[13],u=t[2],f=t[6],p=t[10],v=t[14],m=t[3],g=t[7],h=t[11],d=t[15];return m*(+a*c*f-n*l*f-a*r*p+i*l*p+n*r*v-i*c*v)+g*(+e*c*v-e*l*p+a*o*p-n*o*v+n*l*u-a*c*u)+h*(+e*l*f-e*r*v-a*o*f+i*o*v+a*r*u-i*l*u)+d*(-n*r*u-e*c*f+e*r*p+n*o*f-i*o*p+i*c*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const n=this.elements;return t.isVector3?(n[12]=t.x,n[13]=t.y,n[14]=t.z):(n[12]=t,n[13]=e,n[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],n=t[2],a=t[3],o=t[4],r=t[5],c=t[6],l=t[7],u=t[8],f=t[9],p=t[10],v=t[11],m=t[12],g=t[13],h=t[14],d=t[15],x=f*h*l-g*p*l+g*c*v-r*h*v-f*c*d+r*p*d,_=m*p*l-u*h*l-m*c*v+o*h*v+u*c*d-o*p*d,y=u*g*l-m*f*l+m*r*v-o*g*v-u*r*d+o*f*d,T=m*f*c-u*g*c-m*r*p+o*g*p+u*r*h-o*f*h,S=e*x+i*_+n*y+a*T;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/S;return t[0]=x*A,t[1]=(g*p*a-f*h*a-g*n*v+i*h*v+f*n*d-i*p*d)*A,t[2]=(r*h*a-g*c*a+g*n*l-i*h*l-r*n*d+i*c*d)*A,t[3]=(f*c*a-r*p*a-f*n*l+i*p*l+r*n*v-i*c*v)*A,t[4]=_*A,t[5]=(u*h*a-m*p*a+m*n*v-e*h*v-u*n*d+e*p*d)*A,t[6]=(m*c*a-o*h*a-m*n*l+e*h*l+o*n*d-e*c*d)*A,t[7]=(o*p*a-u*c*a+u*n*l-e*p*l-o*n*v+e*c*v)*A,t[8]=y*A,t[9]=(m*f*a-u*g*a-m*i*v+e*g*v+u*i*d-e*f*d)*A,t[10]=(o*g*a-m*r*a+m*i*l-e*g*l-o*i*d+e*r*d)*A,t[11]=(u*r*a-o*f*a-u*i*l+e*f*l+o*i*v-e*r*v)*A,t[12]=T*A,t[13]=(u*g*n-m*f*n+m*i*p-e*g*p-u*i*h+e*f*h)*A,t[14]=(m*r*n-o*g*n-m*i*c+e*g*c+o*i*h-e*r*h)*A,t[15]=(o*f*n-u*r*n+u*i*c-e*f*c-o*i*p+e*r*p)*A,this}scale(t){const e=this.elements,i=t.x,n=t.y,a=t.z;return e[0]*=i,e[4]*=n,e[8]*=a,e[1]*=i,e[5]*=n,e[9]*=a,e[2]*=i,e[6]*=n,e[10]*=a,e[3]*=i,e[7]*=n,e[11]*=a,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],n=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,n))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),n=Math.sin(e),a=1-i,o=t.x,r=t.y,c=t.z,l=a*o,u=a*r;return this.set(l*o+i,l*r-n*c,l*c+n*r,0,l*r+n*c,u*r+i,u*c-n*o,0,l*c-n*r,u*c+n*o,a*c*c+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,n,a,o){return this.set(1,i,a,0,t,1,o,0,e,n,1,0,0,0,0,1),this}compose(t,e,i){const n=this.elements,a=e._x,o=e._y,r=e._z,c=e._w,l=a+a,u=o+o,f=r+r,p=a*l,v=a*u,m=a*f,g=o*u,h=o*f,d=r*f,x=c*l,_=c*u,y=c*f,T=i.x,S=i.y,A=i.z;return n[0]=(1-(g+d))*T,n[1]=(v+y)*T,n[2]=(m-_)*T,n[3]=0,n[4]=(v-y)*S,n[5]=(1-(p+d))*S,n[6]=(h+x)*S,n[7]=0,n[8]=(m+_)*A,n[9]=(h-x)*A,n[10]=(1-(p+g))*A,n[11]=0,n[12]=t.x,n[13]=t.y,n[14]=t.z,n[15]=1,this}decompose(t,e,i){const n=this.elements;let a=Wi.set(n[0],n[1],n[2]).length();const o=Wi.set(n[4],n[5],n[6]).length(),r=Wi.set(n[8],n[9],n[10]).length();this.determinant()<0&&(a=-a),t.x=n[12],t.y=n[13],t.z=n[14],ke.copy(this);const l=1/a,u=1/o,f=1/r;return ke.elements[0]*=l,ke.elements[1]*=l,ke.elements[2]*=l,ke.elements[4]*=u,ke.elements[5]*=u,ke.elements[6]*=u,ke.elements[8]*=f,ke.elements[9]*=f,ke.elements[10]*=f,e.setFromRotationMatrix(ke),i.x=a,i.y=o,i.z=r,this}makePerspective(t,e,i,n,a,o,r=si){const c=this.elements,l=2*a/(e-t),u=2*a/(i-n),f=(e+t)/(e-t),p=(i+n)/(i-n);let v,m;if(r===si)v=-(o+a)/(o-a),m=-2*o*a/(o-a);else if(r===ds)v=-o/(o-a),m=-o*a/(o-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+r);return c[0]=l,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=v,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,n,a,o,r=si){const c=this.elements,l=1/(e-t),u=1/(i-n),f=1/(o-a),p=(e+t)*l,v=(i+n)*u;let m,g;if(r===si)m=(o+a)*f,g=-2*f;else if(r===ds)m=a*f,g=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+r);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-p,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-v,c[2]=0,c[6]=0,c[10]=g,c[14]=-m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let n=0;n<16;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const Wi=new W,ke=new he,Fc=new W(0,0,0),Bc=new W(1,1,1),hi=new W,Bn=new W,Ie=new W,wr=new he,Cr=new Di;class ys{constructor(t=0,e=0,i=0,n=ys.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=n}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,n=this._order){return this._x=t,this._y=e,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const n=t.elements,a=n[0],o=n[4],r=n[8],c=n[1],l=n[5],u=n[9],f=n[2],p=n[6],v=n[10];switch(e){case"XYZ":this._y=Math.asin(be(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(-u,v),this._z=Math.atan2(-o,a)):(this._x=Math.atan2(p,l),this._z=0);break;case"YXZ":this._x=Math.asin(-be(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(r,v),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,a),this._z=0);break;case"ZXY":this._x=Math.asin(be(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-f,v),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,a));break;case"ZYX":this._y=Math.asin(-be(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(p,v),this._z=Math.atan2(c,a)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(be(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-f,a)):(this._x=0,this._y=Math.atan2(r,v));break;case"XZY":this._z=Math.asin(-be(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(p,l),this._y=Math.atan2(r,a)):(this._x=Math.atan2(-u,v),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return wr.makeRotationFromQuaternion(t),this.setFromRotationMatrix(wr,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Cr.setFromEuler(this),this.setFromQuaternion(Cr,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ys.DEFAULT_ORDER="XYZ";class ba{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Gc=0;const Rr=new W,Yi=new Di,Qe=new he,Gn=new W,_n=new W,kc=new W,Hc=new Di,Lr=new W(1,0,0),Ir=new W(0,1,0),Dr=new W(0,0,1),Vc={type:"added"},Wc={type:"removed"};class Me extends Ni{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Gc++}),this.uuid=wn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Me.DEFAULT_UP.clone();const t=new W,e=new ys,i=new Di,n=new W(1,1,1);function a(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(a),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new he},normalMatrix:{value:new Kt}}),this.matrix=new he,this.matrixWorld=new he,this.matrixAutoUpdate=Me.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Me.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ba,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Yi.setFromAxisAngle(t,e),this.quaternion.multiply(Yi),this}rotateOnWorldAxis(t,e){return Yi.setFromAxisAngle(t,e),this.quaternion.premultiply(Yi),this}rotateX(t){return this.rotateOnAxis(Lr,t)}rotateY(t){return this.rotateOnAxis(Ir,t)}rotateZ(t){return this.rotateOnAxis(Dr,t)}translateOnAxis(t,e){return Rr.copy(t).applyQuaternion(this.quaternion),this.position.add(Rr.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Lr,t)}translateY(t){return this.translateOnAxis(Ir,t)}translateZ(t){return this.translateOnAxis(Dr,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Qe.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Gn.copy(t):Gn.set(t,e,i);const n=this.parent;this.updateWorldMatrix(!0,!1),_n.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Qe.lookAt(_n,Gn,this.up):Qe.lookAt(Gn,_n,this.up),this.quaternion.setFromRotationMatrix(Qe),n&&(Qe.extractRotation(n.matrixWorld),Yi.setFromRotationMatrix(Qe),this.quaternion.premultiply(Yi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Vc)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Wc)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Qe.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Qe.multiply(t.parent.matrixWorld)),t.applyMatrix4(Qe),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,n=this.children.length;i<n;i++){const o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const n=this.children;for(let a=0,o=n.length;a<o;a++)n[a].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_n,t,kc),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_n,Hc,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,n=e.length;i<n;i++){const a=e[i];(a.matrixWorldAutoUpdate===!0||t===!0)&&a.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const n=this.children;for(let a=0,o=n.length;a<o;a++){const r=n[a];r.matrixWorldAutoUpdate===!0&&r.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const n={};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.visibility=this._visibility,n.active=this._active,n.bounds=this._bounds.map(r=>({boxInitialized:r.boxInitialized,boxMin:r.box.min.toArray(),boxMax:r.box.max.toArray(),sphereInitialized:r.sphereInitialized,sphereRadius:r.sphere.radius,sphereCenter:r.sphere.center.toArray()})),n.maxGeometryCount=this._maxGeometryCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.geometryCount=this._geometryCount,n.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(n.boundingSphere={center:n.boundingSphere.center.toArray(),radius:n.boundingSphere.radius}),this.boundingBox!==null&&(n.boundingBox={min:n.boundingBox.min.toArray(),max:n.boundingBox.max.toArray()}));function a(r,c){return r[c.uuid]===void 0&&(r[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=a(t.geometries,this.geometry);const r=this.geometry.parameters;if(r!==void 0&&r.shapes!==void 0){const c=r.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const f=c[l];a(t.shapes,f)}else a(t.shapes,c)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(t.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const r=[];for(let c=0,l=this.material.length;c<l;c++)r.push(a(t.materials,this.material[c]));n.material=r}else n.material=a(t.materials,this.material);if(this.children.length>0){n.children=[];for(let r=0;r<this.children.length;r++)n.children.push(this.children[r].toJSON(t).object)}if(this.animations.length>0){n.animations=[];for(let r=0;r<this.animations.length;r++){const c=this.animations[r];n.animations.push(a(t.animations,c))}}if(e){const r=o(t.geometries),c=o(t.materials),l=o(t.textures),u=o(t.images),f=o(t.shapes),p=o(t.skeletons),v=o(t.animations),m=o(t.nodes);r.length>0&&(i.geometries=r),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),p.length>0&&(i.skeletons=p),v.length>0&&(i.animations=v),m.length>0&&(i.nodes=m)}return i.object=n,i;function o(r){const c=[];for(const l in r){const u=r[l];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const n=t.children[i];this.add(n.clone())}return this}}Me.DEFAULT_UP=new W(0,1,0);Me.DEFAULT_MATRIX_AUTO_UPDATE=!0;Me.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const He=new W,ti=new W,Hs=new W,ei=new W,Xi=new W,$i=new W,Or=new W,Vs=new W,Ws=new W,Ys=new W;let kn=!1;class Ve{constructor(t=new W,e=new W,i=new W){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,n){n.subVectors(i,e),He.subVectors(t,e),n.cross(He);const a=n.lengthSq();return a>0?n.multiplyScalar(1/Math.sqrt(a)):n.set(0,0,0)}static getBarycoord(t,e,i,n,a){He.subVectors(n,e),ti.subVectors(i,e),Hs.subVectors(t,e);const o=He.dot(He),r=He.dot(ti),c=He.dot(Hs),l=ti.dot(ti),u=ti.dot(Hs),f=o*l-r*r;if(f===0)return a.set(0,0,0),null;const p=1/f,v=(l*c-r*u)*p,m=(o*u-r*c)*p;return a.set(1-v-m,m,v)}static containsPoint(t,e,i,n){return this.getBarycoord(t,e,i,n,ei)===null?!1:ei.x>=0&&ei.y>=0&&ei.x+ei.y<=1}static getUV(t,e,i,n,a,o,r,c){return kn===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),kn=!0),this.getInterpolation(t,e,i,n,a,o,r,c)}static getInterpolation(t,e,i,n,a,o,r,c){return this.getBarycoord(t,e,i,n,ei)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(a,ei.x),c.addScaledVector(o,ei.y),c.addScaledVector(r,ei.z),c)}static isFrontFacing(t,e,i,n){return He.subVectors(i,e),ti.subVectors(t,e),He.cross(ti).dot(n)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,n){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[n]),this}setFromAttributeAndIndices(t,e,i,n){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,n),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return He.subVectors(this.c,this.b),ti.subVectors(this.a,this.b),He.cross(ti).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ve.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Ve.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,i,n,a){return kn===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),kn=!0),Ve.getInterpolation(t,this.a,this.b,this.c,e,i,n,a)}getInterpolation(t,e,i,n,a){return Ve.getInterpolation(t,this.a,this.b,this.c,e,i,n,a)}containsPoint(t){return Ve.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ve.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,n=this.b,a=this.c;let o,r;Xi.subVectors(n,i),$i.subVectors(a,i),Vs.subVectors(t,i);const c=Xi.dot(Vs),l=$i.dot(Vs);if(c<=0&&l<=0)return e.copy(i);Ws.subVectors(t,n);const u=Xi.dot(Ws),f=$i.dot(Ws);if(u>=0&&f<=u)return e.copy(n);const p=c*f-u*l;if(p<=0&&c>=0&&u<=0)return o=c/(c-u),e.copy(i).addScaledVector(Xi,o);Ys.subVectors(t,a);const v=Xi.dot(Ys),m=$i.dot(Ys);if(m>=0&&v<=m)return e.copy(a);const g=v*l-c*m;if(g<=0&&l>=0&&m<=0)return r=l/(l-m),e.copy(i).addScaledVector($i,r);const h=u*m-v*f;if(h<=0&&f-u>=0&&v-m>=0)return Or.subVectors(a,n),r=(f-u)/(f-u+(v-m)),e.copy(n).addScaledVector(Or,r);const d=1/(h+g+p);return o=g*d,r=p*d,e.copy(i).addScaledVector(Xi,o).addScaledVector($i,r)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Fo={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},di={h:0,s:0,l:0},Hn={h:0,s:0,l:0};function Xs(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class Jt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const n=t;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ge){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Qt.toWorkingColorSpace(this,e),this}setRGB(t,e,i,n=Qt.workingColorSpace){return this.r=t,this.g=e,this.b=i,Qt.toWorkingColorSpace(this,n),this}setHSL(t,e,i,n=Qt.workingColorSpace){if(t=Cc(t,1),e=be(e,0,1),i=be(i,0,1),e===0)this.r=this.g=this.b=i;else{const a=i<=.5?i*(1+e):i+e-i*e,o=2*i-a;this.r=Xs(o,a,t+1/3),this.g=Xs(o,a,t),this.b=Xs(o,a,t-1/3)}return Qt.toWorkingColorSpace(this,n),this}setStyle(t,e=ge){function i(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(t)){let a;const o=n[1],r=n[2];switch(o){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,e);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,e);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(t)){const a=n[1],o=a.length;if(o===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(a,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ge){const i=Fo[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ln(t.r),this.g=ln(t.g),this.b=ln(t.b),this}copyLinearToSRGB(t){return this.r=Os(t.r),this.g=Os(t.g),this.b=Os(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ge){return Qt.fromWorkingColorSpace(ye.copy(this),t),Math.round(be(ye.r*255,0,255))*65536+Math.round(be(ye.g*255,0,255))*256+Math.round(be(ye.b*255,0,255))}getHexString(t=ge){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Qt.workingColorSpace){Qt.fromWorkingColorSpace(ye.copy(this),e);const i=ye.r,n=ye.g,a=ye.b,o=Math.max(i,n,a),r=Math.min(i,n,a);let c,l;const u=(r+o)/2;if(r===o)c=0,l=0;else{const f=o-r;switch(l=u<=.5?f/(o+r):f/(2-o-r),o){case i:c=(n-a)/f+(n<a?6:0);break;case n:c=(a-i)/f+2;break;case a:c=(i-n)/f+4;break}c/=6}return t.h=c,t.s=l,t.l=u,t}getRGB(t,e=Qt.workingColorSpace){return Qt.fromWorkingColorSpace(ye.copy(this),e),t.r=ye.r,t.g=ye.g,t.b=ye.b,t}getStyle(t=ge){Qt.fromWorkingColorSpace(ye.copy(this),t);const e=ye.r,i=ye.g,n=ye.b;return t!==ge?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(t,e,i){return this.getHSL(di),this.setHSL(di.h+t,di.s+e,di.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(di),t.getHSL(Hn);const i=Is(di.h,Hn.h,e),n=Is(di.s,Hn.s,e),a=Is(di.l,Hn.l,e);return this.setHSL(i,n,a),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,n=this.b,a=t.elements;return this.r=a[0]*e+a[3]*i+a[6]*n,this.g=a[1]*e+a[4]*i+a[7]*n,this.b=a[2]*e+a[5]*i+a[8]*n,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ye=new Jt;Jt.NAMES=Fo;let Yc=0;class Rn extends Ni{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Yc++}),this.uuid=wn(),this.name="",this.type="Material",this.blending=on,this.side=_i,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=oa,this.blendDst=la,this.blendEquation=Pi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Jt(0,0,0),this.blendAlpha=0,this.depthFunc=os,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=xr,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Bi,this.stencilZFail=Bi,this.stencilZPass=Bi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const n=this[e];if(n===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==on&&(i.blending=this.blending),this.side!==_i&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==oa&&(i.blendSrc=this.blendSrc),this.blendDst!==la&&(i.blendDst=this.blendDst),this.blendEquation!==Pi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==os&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==xr&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Bi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Bi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Bi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(a){const o=[];for(const r in a){const c=a[r];delete c.metadata,o.push(c)}return o}if(e){const a=n(t.textures),o=n(t.images);a.length>0&&(i.textures=a),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const n=e.length;i=new Array(n);for(let a=0;a!==n;++a)i[a]=e[a].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class fs extends Rn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Jt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ma,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ce=new W,Vn=new Gt;class Ke{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Mr,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=pi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let n=0,a=this.itemSize;n<a;n++)this.array[t+n]=e.array[i+n];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Vn.fromBufferAttribute(this,e),Vn.applyMatrix3(t),this.setXY(e,Vn.x,Vn.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)ce.fromBufferAttribute(this,e),ce.applyMatrix3(t),this.setXYZ(e,ce.x,ce.y,ce.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)ce.fromBufferAttribute(this,e),ce.applyMatrix4(t),this.setXYZ(e,ce.x,ce.y,ce.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)ce.fromBufferAttribute(this,e),ce.applyNormalMatrix(t),this.setXYZ(e,ce.x,ce.y,ce.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)ce.fromBufferAttribute(this,e),ce.transformDirection(t),this.setXYZ(e,ce.x,ce.y,ce.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=mn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=we(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=mn(e,this.array)),e}setX(t,e){return this.normalized&&(e=we(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=mn(e,this.array)),e}setY(t,e){return this.normalized&&(e=we(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=mn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=we(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=mn(e,this.array)),e}setW(t,e){return this.normalized&&(e=we(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=we(e,this.array),i=we(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,n){return t*=this.itemSize,this.normalized&&(e=we(e,this.array),i=we(i,this.array),n=we(n,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this}setXYZW(t,e,i,n,a){return t*=this.itemSize,this.normalized&&(e=we(e,this.array),i=we(i,this.array),n=we(n,this.array),a=we(a,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this.array[t+3]=a,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Mr&&(t.usage=this.usage),t}}class Bo extends Ke{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class Go extends Ke{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class Te extends Ke{constructor(t,e,i){super(new Float32Array(t),e,i)}}let Xc=0;const Ue=new he,$s=new Me,Ki=new W,De=new Cn,yn=new Cn,pe=new W;class qe extends Ni{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Xc++}),this.uuid=wn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Oo(t)?Go:Bo)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const a=new Kt().getNormalMatrix(t);i.applyNormalMatrix(a),i.needsUpdate=!0}const n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(t),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ue.makeRotationFromQuaternion(t),this.applyMatrix4(Ue),this}rotateX(t){return Ue.makeRotationX(t),this.applyMatrix4(Ue),this}rotateY(t){return Ue.makeRotationY(t),this.applyMatrix4(Ue),this}rotateZ(t){return Ue.makeRotationZ(t),this.applyMatrix4(Ue),this}translate(t,e,i){return Ue.makeTranslation(t,e,i),this.applyMatrix4(Ue),this}scale(t,e,i){return Ue.makeScale(t,e,i),this.applyMatrix4(Ue),this}lookAt(t){return $s.lookAt(t),$s.updateMatrix(),this.applyMatrix4($s.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ki).negate(),this.translate(Ki.x,Ki.y,Ki.z),this}setFromPoints(t){const e=[];for(let i=0,n=t.length;i<n;i++){const a=t[i];e.push(a.x,a.y,a.z||0)}return this.setAttribute("position",new Te(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Cn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,n=e.length;i<n;i++){const a=e[i];De.setFromBufferAttribute(a),this.morphTargetsRelative?(pe.addVectors(this.boundingBox.min,De.min),this.boundingBox.expandByPoint(pe),pe.addVectors(this.boundingBox.max,De.max),this.boundingBox.expandByPoint(pe)):(this.boundingBox.expandByPoint(De.min),this.boundingBox.expandByPoint(De.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Sa);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new W,1/0);return}if(t){const i=this.boundingSphere.center;if(De.setFromBufferAttribute(t),e)for(let a=0,o=e.length;a<o;a++){const r=e[a];yn.setFromBufferAttribute(r),this.morphTargetsRelative?(pe.addVectors(De.min,yn.min),De.expandByPoint(pe),pe.addVectors(De.max,yn.max),De.expandByPoint(pe)):(De.expandByPoint(yn.min),De.expandByPoint(yn.max))}De.getCenter(i);let n=0;for(let a=0,o=t.count;a<o;a++)pe.fromBufferAttribute(t,a),n=Math.max(n,i.distanceToSquared(pe));if(e)for(let a=0,o=e.length;a<o;a++){const r=e[a],c=this.morphTargetsRelative;for(let l=0,u=r.count;l<u;l++)pe.fromBufferAttribute(r,l),c&&(Ki.fromBufferAttribute(t,l),pe.add(Ki)),n=Math.max(n,i.distanceToSquared(pe))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.array,n=e.position.array,a=e.normal.array,o=e.uv.array,r=n.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ke(new Float32Array(4*r),4));const c=this.getAttribute("tangent").array,l=[],u=[];for(let b=0;b<r;b++)l[b]=new W,u[b]=new W;const f=new W,p=new W,v=new W,m=new Gt,g=new Gt,h=new Gt,d=new W,x=new W;function _(b,z,D){f.fromArray(n,b*3),p.fromArray(n,z*3),v.fromArray(n,D*3),m.fromArray(o,b*2),g.fromArray(o,z*2),h.fromArray(o,D*2),p.sub(f),v.sub(f),g.sub(m),h.sub(m);const k=1/(g.x*h.y-h.x*g.y);isFinite(k)&&(d.copy(p).multiplyScalar(h.y).addScaledVector(v,-g.y).multiplyScalar(k),x.copy(v).multiplyScalar(g.x).addScaledVector(p,-h.x).multiplyScalar(k),l[b].add(d),l[z].add(d),l[D].add(d),u[b].add(x),u[z].add(x),u[D].add(x))}let y=this.groups;y.length===0&&(y=[{start:0,count:i.length}]);for(let b=0,z=y.length;b<z;++b){const D=y[b],k=D.start,R=D.count;for(let I=k,B=k+R;I<B;I+=3)_(i[I+0],i[I+1],i[I+2])}const T=new W,S=new W,A=new W,N=new W;function M(b){A.fromArray(a,b*3),N.copy(A);const z=l[b];T.copy(z),T.sub(A.multiplyScalar(A.dot(z))).normalize(),S.crossVectors(N,z);const k=S.dot(u[b])<0?-1:1;c[b*4]=T.x,c[b*4+1]=T.y,c[b*4+2]=T.z,c[b*4+3]=k}for(let b=0,z=y.length;b<z;++b){const D=y[b],k=D.start,R=D.count;for(let I=k,B=k+R;I<B;I+=3)M(i[I+0]),M(i[I+1]),M(i[I+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Ke(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let p=0,v=i.count;p<v;p++)i.setXYZ(p,0,0,0);const n=new W,a=new W,o=new W,r=new W,c=new W,l=new W,u=new W,f=new W;if(t)for(let p=0,v=t.count;p<v;p+=3){const m=t.getX(p+0),g=t.getX(p+1),h=t.getX(p+2);n.fromBufferAttribute(e,m),a.fromBufferAttribute(e,g),o.fromBufferAttribute(e,h),u.subVectors(o,a),f.subVectors(n,a),u.cross(f),r.fromBufferAttribute(i,m),c.fromBufferAttribute(i,g),l.fromBufferAttribute(i,h),r.add(u),c.add(u),l.add(u),i.setXYZ(m,r.x,r.y,r.z),i.setXYZ(g,c.x,c.y,c.z),i.setXYZ(h,l.x,l.y,l.z)}else for(let p=0,v=e.count;p<v;p+=3)n.fromBufferAttribute(e,p+0),a.fromBufferAttribute(e,p+1),o.fromBufferAttribute(e,p+2),u.subVectors(o,a),f.subVectors(n,a),u.cross(f),i.setXYZ(p+0,u.x,u.y,u.z),i.setXYZ(p+1,u.x,u.y,u.z),i.setXYZ(p+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)pe.fromBufferAttribute(t,e),pe.normalize(),t.setXYZ(e,pe.x,pe.y,pe.z)}toNonIndexed(){function t(r,c){const l=r.array,u=r.itemSize,f=r.normalized,p=new l.constructor(c.length*u);let v=0,m=0;for(let g=0,h=c.length;g<h;g++){r.isInterleavedBufferAttribute?v=c[g]*r.data.stride+r.offset:v=c[g]*u;for(let d=0;d<u;d++)p[m++]=l[v++]}return new Ke(p,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new qe,i=this.index.array,n=this.attributes;for(const r in n){const c=n[r],l=t(c,i);e.setAttribute(r,l)}const a=this.morphAttributes;for(const r in a){const c=[],l=a[r];for(let u=0,f=l.length;u<f;u++){const p=l[u],v=t(p,i);c.push(v)}e.morphAttributes[r]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let r=0,c=o.length;r<c;r++){const l=o[r];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const c in i){const l=i[c];t.data.attributes[c]=l.toJSON(t.data)}const n={};let a=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let f=0,p=l.length;f<p;f++){const v=l[f];u.push(v.toJSON(t.data))}u.length>0&&(n[c]=u,a=!0)}a&&(t.data.morphAttributes=n,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const r=this.boundingSphere;return r!==null&&(t.data.boundingSphere={center:r.center.toArray(),radius:r.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const n=t.attributes;for(const l in n){const u=n[l];this.setAttribute(l,u.clone(e))}const a=t.morphAttributes;for(const l in a){const u=[],f=a[l];for(let p=0,v=f.length;p<v;p++)u.push(f[p].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,u=o.length;l<u;l++){const f=o[l];this.addGroup(f.start,f.count,f.materialIndex)}const r=t.boundingBox;r!==null&&(this.boundingBox=r.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Nr=new he,Si=new Aa,Wn=new Sa,Ur=new W,qi=new W,Zi=new W,ji=new W,Ks=new W,Yn=new W,Xn=new Gt,$n=new Gt,Kn=new Gt,zr=new W,Fr=new W,Br=new W,qn=new W,Zn=new W;class te extends Me{constructor(t=new qe,e=new fs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,o=n.length;a<o;a++){const r=n[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[r]=a}}}}getVertexPosition(t,e){const i=this.geometry,n=i.attributes.position,a=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(n,t);const r=this.morphTargetInfluences;if(a&&r){Yn.set(0,0,0);for(let c=0,l=a.length;c<l;c++){const u=r[c],f=a[c];u!==0&&(Ks.fromBufferAttribute(f,t),o?Yn.addScaledVector(Ks,u):Yn.addScaledVector(Ks.sub(e),u))}e.add(Yn)}return e}raycast(t,e){const i=this.geometry,n=this.material,a=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Wn.copy(i.boundingSphere),Wn.applyMatrix4(a),Si.copy(t.ray).recast(t.near),!(Wn.containsPoint(Si.origin)===!1&&(Si.intersectSphere(Wn,Ur)===null||Si.origin.distanceToSquared(Ur)>(t.far-t.near)**2))&&(Nr.copy(a).invert(),Si.copy(t.ray).applyMatrix4(Nr),!(i.boundingBox!==null&&Si.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Si)))}_computeIntersections(t,e,i){let n;const a=this.geometry,o=this.material,r=a.index,c=a.attributes.position,l=a.attributes.uv,u=a.attributes.uv1,f=a.attributes.normal,p=a.groups,v=a.drawRange;if(r!==null)if(Array.isArray(o))for(let m=0,g=p.length;m<g;m++){const h=p[m],d=o[h.materialIndex],x=Math.max(h.start,v.start),_=Math.min(r.count,Math.min(h.start+h.count,v.start+v.count));for(let y=x,T=_;y<T;y+=3){const S=r.getX(y),A=r.getX(y+1),N=r.getX(y+2);n=jn(this,d,t,i,l,u,f,S,A,N),n&&(n.faceIndex=Math.floor(y/3),n.face.materialIndex=h.materialIndex,e.push(n))}}else{const m=Math.max(0,v.start),g=Math.min(r.count,v.start+v.count);for(let h=m,d=g;h<d;h+=3){const x=r.getX(h),_=r.getX(h+1),y=r.getX(h+2);n=jn(this,o,t,i,l,u,f,x,_,y),n&&(n.faceIndex=Math.floor(h/3),e.push(n))}}else if(c!==void 0)if(Array.isArray(o))for(let m=0,g=p.length;m<g;m++){const h=p[m],d=o[h.materialIndex],x=Math.max(h.start,v.start),_=Math.min(c.count,Math.min(h.start+h.count,v.start+v.count));for(let y=x,T=_;y<T;y+=3){const S=y,A=y+1,N=y+2;n=jn(this,d,t,i,l,u,f,S,A,N),n&&(n.faceIndex=Math.floor(y/3),n.face.materialIndex=h.materialIndex,e.push(n))}}else{const m=Math.max(0,v.start),g=Math.min(c.count,v.start+v.count);for(let h=m,d=g;h<d;h+=3){const x=h,_=h+1,y=h+2;n=jn(this,o,t,i,l,u,f,x,_,y),n&&(n.faceIndex=Math.floor(h/3),e.push(n))}}}}function $c(s,t,e,i,n,a,o,r){let c;if(t.side===Re?c=i.intersectTriangle(o,a,n,!0,r):c=i.intersectTriangle(n,a,o,t.side===_i,r),c===null)return null;Zn.copy(r),Zn.applyMatrix4(s.matrixWorld);const l=e.ray.origin.distanceTo(Zn);return l<e.near||l>e.far?null:{distance:l,point:Zn.clone(),object:s}}function jn(s,t,e,i,n,a,o,r,c,l){s.getVertexPosition(r,qi),s.getVertexPosition(c,Zi),s.getVertexPosition(l,ji);const u=$c(s,t,e,i,qi,Zi,ji,qn);if(u){n&&(Xn.fromBufferAttribute(n,r),$n.fromBufferAttribute(n,c),Kn.fromBufferAttribute(n,l),u.uv=Ve.getInterpolation(qn,qi,Zi,ji,Xn,$n,Kn,new Gt)),a&&(Xn.fromBufferAttribute(a,r),$n.fromBufferAttribute(a,c),Kn.fromBufferAttribute(a,l),u.uv1=Ve.getInterpolation(qn,qi,Zi,ji,Xn,$n,Kn,new Gt),u.uv2=u.uv1),o&&(zr.fromBufferAttribute(o,r),Fr.fromBufferAttribute(o,c),Br.fromBufferAttribute(o,l),u.normal=Ve.getInterpolation(qn,qi,Zi,ji,zr,Fr,Br,new W),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a:r,b:c,c:l,normal:new W,materialIndex:0};Ve.getNormal(qi,Zi,ji,f.normal),u.face=f}return u}class Ce extends qe{constructor(t=1,e=1,i=1,n=1,a=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:n,heightSegments:a,depthSegments:o};const r=this;n=Math.floor(n),a=Math.floor(a),o=Math.floor(o);const c=[],l=[],u=[],f=[];let p=0,v=0;m("z","y","x",-1,-1,i,e,t,o,a,0),m("z","y","x",1,-1,i,e,-t,o,a,1),m("x","z","y",1,1,t,i,e,n,o,2),m("x","z","y",1,-1,t,i,-e,n,o,3),m("x","y","z",1,-1,t,e,i,n,a,4),m("x","y","z",-1,-1,t,e,-i,n,a,5),this.setIndex(c),this.setAttribute("position",new Te(l,3)),this.setAttribute("normal",new Te(u,3)),this.setAttribute("uv",new Te(f,2));function m(g,h,d,x,_,y,T,S,A,N,M){const b=y/A,z=T/N,D=y/2,k=T/2,R=S/2,I=A+1,B=N+1;let j=0,J=0;const K=new W;for(let Q=0;Q<B;Q++){const nt=Q*z-k;for(let rt=0;rt<I;rt++){const X=rt*b-D;K[g]=X*x,K[h]=nt*_,K[d]=R,l.push(K.x,K.y,K.z),K[g]=0,K[h]=0,K[d]=S>0?1:-1,u.push(K.x,K.y,K.z),f.push(rt/A),f.push(1-Q/N),j+=1}}for(let Q=0;Q<N;Q++)for(let nt=0;nt<A;nt++){const rt=p+nt+I*Q,X=p+nt+I*(Q+1),st=p+(nt+1)+I*(Q+1),C=p+(nt+1)+I*Q;c.push(rt,X,C),c.push(X,st,C),J+=6}r.addGroup(v,J,M),v+=J,p+=j}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ce(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function un(s){const t={};for(const e in s){t[e]={};for(const i in s[e]){const n=s[e][i];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?n.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=n.clone():Array.isArray(n)?t[e][i]=n.slice():t[e][i]=n}}return t}function Se(s){const t={};for(let e=0;e<s.length;e++){const i=un(s[e]);for(const n in i)t[n]=i[n]}return t}function Kc(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function ko(s){return s.getRenderTarget()===null?s.outputColorSpace:Qt.workingColorSpace}const qc={clone:un,merge:Se};var Zc=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,jc=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Oi extends Rn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Zc,this.fragmentShader=jc,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=un(t.uniforms),this.uniformsGroups=Kc(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const n in this.uniforms){const o=this.uniforms[n].value;o&&o.isTexture?e.uniforms[n]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[n]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[n]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[n]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[n]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[n]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[n]={type:"m4",value:o.toArray()}:e.uniforms[n]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class Ho extends Me{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new he,this.projectionMatrix=new he,this.projectionMatrixInverse=new he,this.coordinateSystem=si}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Fe extends Ho{constructor(t=50,e=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=pa*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ss*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return pa*2*Math.atan(Math.tan(ss*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,i,n,a,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=a,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(ss*.5*this.fov)/this.zoom,i=2*e,n=this.aspect*i,a=-.5*n;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;a+=o.offsetX*n/c,e-=o.offsetY*i/l,n*=o.width/c,i*=o.height/l}const r=this.filmOffset;r!==0&&(a+=t*r/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+n,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Ji=-90,Qi=1;class Jc extends Me{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const n=new Fe(Ji,Qi,t,e);n.layers=this.layers,this.add(n);const a=new Fe(Ji,Qi,t,e);a.layers=this.layers,this.add(a);const o=new Fe(Ji,Qi,t,e);o.layers=this.layers,this.add(o);const r=new Fe(Ji,Qi,t,e);r.layers=this.layers,this.add(r);const c=new Fe(Ji,Qi,t,e);c.layers=this.layers,this.add(c);const l=new Fe(Ji,Qi,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,n,a,o,r,c]=e;for(const l of e)this.remove(l);if(t===si)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),r.up.set(0,1,0),r.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===ds)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),r.up.set(0,-1,0),r.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[a,o,r,c,l,u]=this.children,f=t.getRenderTarget(),p=t.getActiveCubeFace(),v=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;const g=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,n),t.render(e,a),t.setRenderTarget(i,1,n),t.render(e,o),t.setRenderTarget(i,2,n),t.render(e,r),t.setRenderTarget(i,3,n),t.render(e,c),t.setRenderTarget(i,4,n),t.render(e,l),i.texture.generateMipmaps=g,t.setRenderTarget(i,5,n),t.render(e,u),t.setRenderTarget(f,p,v),t.xr.enabled=m,i.texture.needsPMREMUpdate=!0}}class Vo extends Oe{constructor(t,e,i,n,a,o,r,c,l,u){t=t!==void 0?t:[],e=e!==void 0?e:cn,super(t,e,i,n,a,o,r,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Qc extends Ii{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},n=[i,i,i,i,i,i];e.encoding!==void 0&&(Tn("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===Li?ge:Be),this.texture=new Vo(n,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:ze}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},n=new Ce(5,5,5),a=new Oi({name:"CubemapFromEquirect",uniforms:un(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Re,blending:mi});a.uniforms.tEquirect.value=e;const o=new te(n,a),r=e.minFilter;return e.minFilter===An&&(e.minFilter=ze),new Jc(1,10,this).update(t,o),e.minFilter=r,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,i,n){const a=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,n);t.setRenderTarget(a)}}const qs=new W,th=new W,eh=new Kt;class ui{constructor(t=new W(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,n){return this.normal.set(t,e,i),this.constant=n,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const n=qs.subVectors(i,e).cross(th.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(n,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(qs),n=this.normal.dot(i);if(n===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const a=-(t.start.dot(this.normal)+this.constant)/n;return a<0||a>1?null:e.copy(t.start).addScaledVector(i,a)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||eh.getNormalMatrix(t),n=this.coplanarPoint(qs).applyMatrix4(t),a=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(a),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ai=new Sa,Jn=new W;class Pa{constructor(t=new ui,e=new ui,i=new ui,n=new ui,a=new ui,o=new ui){this.planes=[t,e,i,n,a,o]}set(t,e,i,n,a,o){const r=this.planes;return r[0].copy(t),r[1].copy(e),r[2].copy(i),r[3].copy(n),r[4].copy(a),r[5].copy(o),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=si){const i=this.planes,n=t.elements,a=n[0],o=n[1],r=n[2],c=n[3],l=n[4],u=n[5],f=n[6],p=n[7],v=n[8],m=n[9],g=n[10],h=n[11],d=n[12],x=n[13],_=n[14],y=n[15];if(i[0].setComponents(c-a,p-l,h-v,y-d).normalize(),i[1].setComponents(c+a,p+l,h+v,y+d).normalize(),i[2].setComponents(c+o,p+u,h+m,y+x).normalize(),i[3].setComponents(c-o,p-u,h-m,y-x).normalize(),i[4].setComponents(c-r,p-f,h-g,y-_).normalize(),e===si)i[5].setComponents(c+r,p+f,h+g,y+_).normalize();else if(e===ds)i[5].setComponents(r,f,g,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ai.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ai.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ai)}intersectsSprite(t){return Ai.center.set(0,0,0),Ai.radius=.7071067811865476,Ai.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ai)}intersectsSphere(t){const e=this.planes,i=t.center,n=-t.radius;for(let a=0;a<6;a++)if(e[a].distanceToPoint(i)<n)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const n=e[i];if(Jn.x=n.normal.x>0?t.max.x:t.min.x,Jn.y=n.normal.y>0?t.max.y:t.min.y,Jn.z=n.normal.z>0?t.max.z:t.min.z,n.distanceToPoint(Jn)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Wo(){let s=null,t=!1,e=null,i=null;function n(a,o){e(a,o),i=s.requestAnimationFrame(n)}return{start:function(){t!==!0&&e!==null&&(i=s.requestAnimationFrame(n),t=!0)},stop:function(){s.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(a){e=a},setContext:function(a){s=a}}}function ih(s,t){const e=t.isWebGL2,i=new WeakMap;function n(l,u){const f=l.array,p=l.usage,v=f.byteLength,m=s.createBuffer();s.bindBuffer(u,m),s.bufferData(u,f,p),l.onUploadCallback();let g;if(f instanceof Float32Array)g=s.FLOAT;else if(f instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(e)g=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=s.UNSIGNED_SHORT;else if(f instanceof Int16Array)g=s.SHORT;else if(f instanceof Uint32Array)g=s.UNSIGNED_INT;else if(f instanceof Int32Array)g=s.INT;else if(f instanceof Int8Array)g=s.BYTE;else if(f instanceof Uint8Array)g=s.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)g=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:m,type:g,bytesPerElement:f.BYTES_PER_ELEMENT,version:l.version,size:v}}function a(l,u,f){const p=u.array,v=u._updateRange,m=u.updateRanges;if(s.bindBuffer(f,l),v.count===-1&&m.length===0&&s.bufferSubData(f,0,p),m.length!==0){for(let g=0,h=m.length;g<h;g++){const d=m[g];e?s.bufferSubData(f,d.start*p.BYTES_PER_ELEMENT,p,d.start,d.count):s.bufferSubData(f,d.start*p.BYTES_PER_ELEMENT,p.subarray(d.start,d.start+d.count))}u.clearUpdateRanges()}v.count!==-1&&(e?s.bufferSubData(f,v.offset*p.BYTES_PER_ELEMENT,p,v.offset,v.count):s.bufferSubData(f,v.offset*p.BYTES_PER_ELEMENT,p.subarray(v.offset,v.offset+v.count)),v.count=-1),u.onUploadCallback()}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),i.get(l)}function r(l){l.isInterleavedBufferAttribute&&(l=l.data);const u=i.get(l);u&&(s.deleteBuffer(u.buffer),i.delete(l))}function c(l,u){if(l.isGLBufferAttribute){const p=i.get(l);(!p||p.version<l.version)&&i.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const f=i.get(l);if(f===void 0)i.set(l,n(l,u));else if(f.version<l.version){if(f.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");a(f.buffer,l,u),f.version=l.version}}return{get:o,remove:r,update:c}}class wa extends qe{constructor(t=1,e=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:n};const a=t/2,o=e/2,r=Math.floor(i),c=Math.floor(n),l=r+1,u=c+1,f=t/r,p=e/c,v=[],m=[],g=[],h=[];for(let d=0;d<u;d++){const x=d*p-o;for(let _=0;_<l;_++){const y=_*f-a;m.push(y,-x,0),g.push(0,0,1),h.push(_/r),h.push(1-d/c)}}for(let d=0;d<c;d++)for(let x=0;x<r;x++){const _=x+l*d,y=x+l*(d+1),T=x+1+l*(d+1),S=x+1+l*d;v.push(_,y,S),v.push(y,T,S)}this.setIndex(v),this.setAttribute("position",new Te(m,3)),this.setAttribute("normal",new Te(g,3)),this.setAttribute("uv",new Te(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new wa(t.width,t.height,t.widthSegments,t.heightSegments)}}var nh=`#ifdef USE_ALPHAHASH
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
#endif`,Th=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Eh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Sh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Ah=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,bh=`#define PI 3.141592653589793
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
} // validated`,Ph=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,kh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Hh=`#ifdef USE_FOG
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
material.specularStrength = specularStrength;`,Kh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,qh=`uniform bool receiveShadow;
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
#endif`,Td=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ed=`#ifndef FLAT_SHADED
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
#endif`,Ad=`#ifdef USE_NORMALMAP
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
#endif`,bd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Pd=`#ifdef USE_CLEARCOAT_NORMALMAP
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
#endif`,kd=`float getShadowMask() {
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
}`,Hd=`#ifdef USE_SKINNING
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
#endif`,Kd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,qd=`#ifndef saturate
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
}`,Tu=`#define NORMAL
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
}`,Eu=`#define NORMAL
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
}`,Au=`#define PHONG
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
}`,bu=`#define STANDARD
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
}`,Pu=`#define STANDARD
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
}`,Yt={alphahash_fragment:nh,alphahash_pars_fragment:sh,alphamap_fragment:ah,alphamap_pars_fragment:rh,alphatest_fragment:oh,alphatest_pars_fragment:lh,aomap_fragment:ch,aomap_pars_fragment:hh,batching_pars_vertex:dh,batching_vertex:uh,begin_vertex:fh,beginnormal_vertex:ph,bsdfs:mh,iridescence_fragment:gh,bumpmap_pars_fragment:vh,clipping_planes_fragment:_h,clipping_planes_pars_fragment:yh,clipping_planes_pars_vertex:xh,clipping_planes_vertex:Mh,color_fragment:Th,color_pars_fragment:Eh,color_pars_vertex:Sh,color_vertex:Ah,common:bh,cube_uv_reflection_fragment:Ph,defaultnormal_vertex:wh,displacementmap_pars_vertex:Ch,displacementmap_vertex:Rh,emissivemap_fragment:Lh,emissivemap_pars_fragment:Ih,colorspace_fragment:Dh,colorspace_pars_fragment:Oh,envmap_fragment:Nh,envmap_common_pars_fragment:Uh,envmap_pars_fragment:zh,envmap_pars_vertex:Fh,envmap_physical_pars_fragment:Zh,envmap_vertex:Bh,fog_vertex:Gh,fog_pars_vertex:kh,fog_fragment:Hh,fog_pars_fragment:Vh,gradientmap_pars_fragment:Wh,lightmap_fragment:Yh,lightmap_pars_fragment:Xh,lights_lambert_fragment:$h,lights_lambert_pars_fragment:Kh,lights_pars_begin:qh,lights_toon_fragment:jh,lights_toon_pars_fragment:Jh,lights_phong_fragment:Qh,lights_phong_pars_fragment:td,lights_physical_fragment:ed,lights_physical_pars_fragment:id,lights_fragment_begin:nd,lights_fragment_maps:sd,lights_fragment_end:ad,logdepthbuf_fragment:rd,logdepthbuf_pars_fragment:od,logdepthbuf_pars_vertex:ld,logdepthbuf_vertex:cd,map_fragment:hd,map_pars_fragment:dd,map_particle_fragment:ud,map_particle_pars_fragment:fd,metalnessmap_fragment:pd,metalnessmap_pars_fragment:md,morphcolor_vertex:gd,morphnormal_vertex:vd,morphtarget_pars_vertex:_d,morphtarget_vertex:yd,normal_fragment_begin:xd,normal_fragment_maps:Md,normal_pars_fragment:Td,normal_pars_vertex:Ed,normal_vertex:Sd,normalmap_pars_fragment:Ad,clearcoat_normal_fragment_begin:bd,clearcoat_normal_fragment_maps:Pd,clearcoat_pars_fragment:wd,iridescence_pars_fragment:Cd,opaque_fragment:Rd,packing:Ld,premultiplied_alpha_fragment:Id,project_vertex:Dd,dithering_fragment:Od,dithering_pars_fragment:Nd,roughnessmap_fragment:Ud,roughnessmap_pars_fragment:zd,shadowmap_pars_fragment:Fd,shadowmap_pars_vertex:Bd,shadowmap_vertex:Gd,shadowmask_pars_fragment:kd,skinbase_vertex:Hd,skinning_pars_vertex:Vd,skinning_vertex:Wd,skinnormal_vertex:Yd,specularmap_fragment:Xd,specularmap_pars_fragment:$d,tonemapping_fragment:Kd,tonemapping_pars_fragment:qd,transmission_fragment:Zd,transmission_pars_fragment:jd,uv_pars_fragment:Jd,uv_pars_vertex:Qd,uv_vertex:tu,worldpos_vertex:eu,background_vert:iu,background_frag:nu,backgroundCube_vert:su,backgroundCube_frag:au,cube_vert:ru,cube_frag:ou,depth_vert:lu,depth_frag:cu,distanceRGBA_vert:hu,distanceRGBA_frag:du,equirect_vert:uu,equirect_frag:fu,linedashed_vert:pu,linedashed_frag:mu,meshbasic_vert:gu,meshbasic_frag:vu,meshlambert_vert:_u,meshlambert_frag:yu,meshmatcap_vert:xu,meshmatcap_frag:Mu,meshnormal_vert:Tu,meshnormal_frag:Eu,meshphong_vert:Su,meshphong_frag:Au,meshphysical_vert:bu,meshphysical_frag:Pu,meshtoon_vert:wu,meshtoon_frag:Cu,points_vert:Ru,points_frag:Lu,shadow_vert:Iu,shadow_frag:Du,sprite_vert:Ou,sprite_frag:Nu},xt={common:{diffuse:{value:new Jt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Kt},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Kt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Kt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Kt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Kt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Kt},normalScale:{value:new Gt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Kt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Kt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Kt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Kt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Jt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Jt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0},uvTransform:{value:new Kt}},sprite:{diffuse:{value:new Jt(16777215)},opacity:{value:1},center:{value:new Gt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Kt},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0}}},$e={basic:{uniforms:Se([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.fog]),vertexShader:Yt.meshbasic_vert,fragmentShader:Yt.meshbasic_frag},lambert:{uniforms:Se([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,xt.lights,{emissive:{value:new Jt(0)}}]),vertexShader:Yt.meshlambert_vert,fragmentShader:Yt.meshlambert_frag},phong:{uniforms:Se([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,xt.lights,{emissive:{value:new Jt(0)},specular:{value:new Jt(1118481)},shininess:{value:30}}]),vertexShader:Yt.meshphong_vert,fragmentShader:Yt.meshphong_frag},standard:{uniforms:Se([xt.common,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.roughnessmap,xt.metalnessmap,xt.fog,xt.lights,{emissive:{value:new Jt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Yt.meshphysical_vert,fragmentShader:Yt.meshphysical_frag},toon:{uniforms:Se([xt.common,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.gradientmap,xt.fog,xt.lights,{emissive:{value:new Jt(0)}}]),vertexShader:Yt.meshtoon_vert,fragmentShader:Yt.meshtoon_frag},matcap:{uniforms:Se([xt.common,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,{matcap:{value:null}}]),vertexShader:Yt.meshmatcap_vert,fragmentShader:Yt.meshmatcap_frag},points:{uniforms:Se([xt.points,xt.fog]),vertexShader:Yt.points_vert,fragmentShader:Yt.points_frag},dashed:{uniforms:Se([xt.common,xt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Yt.linedashed_vert,fragmentShader:Yt.linedashed_frag},depth:{uniforms:Se([xt.common,xt.displacementmap]),vertexShader:Yt.depth_vert,fragmentShader:Yt.depth_frag},normal:{uniforms:Se([xt.common,xt.bumpmap,xt.normalmap,xt.displacementmap,{opacity:{value:1}}]),vertexShader:Yt.meshnormal_vert,fragmentShader:Yt.meshnormal_frag},sprite:{uniforms:Se([xt.sprite,xt.fog]),vertexShader:Yt.sprite_vert,fragmentShader:Yt.sprite_frag},background:{uniforms:{uvTransform:{value:new Kt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Yt.background_vert,fragmentShader:Yt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Yt.backgroundCube_vert,fragmentShader:Yt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Yt.cube_vert,fragmentShader:Yt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Yt.equirect_vert,fragmentShader:Yt.equirect_frag},distanceRGBA:{uniforms:Se([xt.common,xt.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Yt.distanceRGBA_vert,fragmentShader:Yt.distanceRGBA_frag},shadow:{uniforms:Se([xt.lights,xt.fog,{color:{value:new Jt(0)},opacity:{value:1}}]),vertexShader:Yt.shadow_vert,fragmentShader:Yt.shadow_frag}};$e.physical={uniforms:Se([$e.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Kt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Kt},clearcoatNormalScale:{value:new Gt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Kt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Kt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Kt},sheen:{value:0},sheenColor:{value:new Jt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Kt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Kt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Kt},transmissionSamplerSize:{value:new Gt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Kt},attenuationDistance:{value:0},attenuationColor:{value:new Jt(0)},specularColor:{value:new Jt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Kt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Kt},anisotropyVector:{value:new Gt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Kt}}]),vertexShader:Yt.meshphysical_vert,fragmentShader:Yt.meshphysical_frag};const Qn={r:0,b:0,g:0};function Uu(s,t,e,i,n,a,o){const r=new Jt(0);let c=a===!0?0:1,l,u,f=null,p=0,v=null;function m(h,d){let x=!1,_=d.isScene===!0?d.background:null;_&&_.isTexture&&(_=(d.backgroundBlurriness>0?e:t).get(_)),_===null?g(r,c):_&&_.isColor&&(g(_,1),x=!0);const y=s.xr.getEnvironmentBlendMode();y==="additive"?i.buffers.color.setClear(0,0,0,1,o):y==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(s.autoClear||x)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),_&&(_.isCubeTexture||_.mapping===vs)?(u===void 0&&(u=new te(new Ce(1,1,1),new Oi({name:"BackgroundCubeMaterial",uniforms:un($e.backgroundCube.uniforms),vertexShader:$e.backgroundCube.vertexShader,fragmentShader:$e.backgroundCube.fragmentShader,side:Re,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(T,S,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(u)),u.material.uniforms.envMap.value=_,u.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,u.material.toneMapped=Qt.getTransfer(_.colorSpace)!==ee,(f!==_||p!==_.version||v!==s.toneMapping)&&(u.material.needsUpdate=!0,f=_,p=_.version,v=s.toneMapping),u.layers.enableAll(),h.unshift(u,u.geometry,u.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new te(new wa(2,2),new Oi({name:"BackgroundMaterial",uniforms:un($e.background.uniforms),vertexShader:$e.background.vertexShader,fragmentShader:$e.background.fragmentShader,side:_i,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,l.material.toneMapped=Qt.getTransfer(_.colorSpace)!==ee,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(f!==_||p!==_.version||v!==s.toneMapping)&&(l.material.needsUpdate=!0,f=_,p=_.version,v=s.toneMapping),l.layers.enableAll(),h.unshift(l,l.geometry,l.material,0,0,null))}function g(h,d){h.getRGB(Qn,ko(s)),i.buffers.color.setClear(Qn.r,Qn.g,Qn.b,d,o)}return{getClearColor:function(){return r},setClearColor:function(h,d=1){r.set(h),c=d,g(r,c)},getClearAlpha:function(){return c},setClearAlpha:function(h){c=h,g(r,c)},render:m}}function zu(s,t,e,i){const n=s.getParameter(s.MAX_VERTEX_ATTRIBS),a=i.isWebGL2?null:t.get("OES_vertex_array_object"),o=i.isWebGL2||a!==null,r={},c=h(null);let l=c,u=!1;function f(R,I,B,j,J){let K=!1;if(o){const Q=g(j,B,I);l!==Q&&(l=Q,v(l.object)),K=d(R,j,B,J),K&&x(R,j,B,J)}else{const Q=I.wireframe===!0;(l.geometry!==j.id||l.program!==B.id||l.wireframe!==Q)&&(l.geometry=j.id,l.program=B.id,l.wireframe=Q,K=!0)}J!==null&&e.update(J,s.ELEMENT_ARRAY_BUFFER),(K||u)&&(u=!1,N(R,I,B,j),J!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(J).buffer))}function p(){return i.isWebGL2?s.createVertexArray():a.createVertexArrayOES()}function v(R){return i.isWebGL2?s.bindVertexArray(R):a.bindVertexArrayOES(R)}function m(R){return i.isWebGL2?s.deleteVertexArray(R):a.deleteVertexArrayOES(R)}function g(R,I,B){const j=B.wireframe===!0;let J=r[R.id];J===void 0&&(J={},r[R.id]=J);let K=J[I.id];K===void 0&&(K={},J[I.id]=K);let Q=K[j];return Q===void 0&&(Q=h(p()),K[j]=Q),Q}function h(R){const I=[],B=[],j=[];for(let J=0;J<n;J++)I[J]=0,B[J]=0,j[J]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:B,attributeDivisors:j,object:R,attributes:{},index:null}}function d(R,I,B,j){const J=l.attributes,K=I.attributes;let Q=0;const nt=B.getAttributes();for(const rt in nt)if(nt[rt].location>=0){const st=J[rt];let C=K[rt];if(C===void 0&&(rt==="instanceMatrix"&&R.instanceMatrix&&(C=R.instanceMatrix),rt==="instanceColor"&&R.instanceColor&&(C=R.instanceColor)),st===void 0||st.attribute!==C||C&&st.data!==C.data)return!0;Q++}return l.attributesNum!==Q||l.index!==j}function x(R,I,B,j){const J={},K=I.attributes;let Q=0;const nt=B.getAttributes();for(const rt in nt)if(nt[rt].location>=0){let st=K[rt];st===void 0&&(rt==="instanceMatrix"&&R.instanceMatrix&&(st=R.instanceMatrix),rt==="instanceColor"&&R.instanceColor&&(st=R.instanceColor));const C={};C.attribute=st,st&&st.data&&(C.data=st.data),J[rt]=C,Q++}l.attributes=J,l.attributesNum=Q,l.index=j}function _(){const R=l.newAttributes;for(let I=0,B=R.length;I<B;I++)R[I]=0}function y(R){T(R,0)}function T(R,I){const B=l.newAttributes,j=l.enabledAttributes,J=l.attributeDivisors;B[R]=1,j[R]===0&&(s.enableVertexAttribArray(R),j[R]=1),J[R]!==I&&((i.isWebGL2?s:t.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](R,I),J[R]=I)}function S(){const R=l.newAttributes,I=l.enabledAttributes;for(let B=0,j=I.length;B<j;B++)I[B]!==R[B]&&(s.disableVertexAttribArray(B),I[B]=0)}function A(R,I,B,j,J,K,Q){Q===!0?s.vertexAttribIPointer(R,I,B,J,K):s.vertexAttribPointer(R,I,B,j,J,K)}function N(R,I,B,j){if(i.isWebGL2===!1&&(R.isInstancedMesh||j.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;_();const J=j.attributes,K=B.getAttributes(),Q=I.defaultAttributeValues;for(const nt in K){const rt=K[nt];if(rt.location>=0){let X=J[nt];if(X===void 0&&(nt==="instanceMatrix"&&R.instanceMatrix&&(X=R.instanceMatrix),nt==="instanceColor"&&R.instanceColor&&(X=R.instanceColor)),X!==void 0){const st=X.normalized,C=X.itemSize,F=e.get(X);if(F===void 0)continue;const $=F.buffer,V=F.type,H=F.bytesPerElement,ct=i.isWebGL2===!0&&(V===s.INT||V===s.UNSIGNED_INT||X.gpuType===So);if(X.isInterleavedBufferAttribute){const Mt=X.data,Y=Mt.stride,kt=X.offset;if(Mt.isInstancedInterleavedBuffer){for(let _t=0;_t<rt.locationSize;_t++)T(rt.location+_t,Mt.meshPerAttribute);R.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=Mt.meshPerAttribute*Mt.count)}else for(let _t=0;_t<rt.locationSize;_t++)y(rt.location+_t);s.bindBuffer(s.ARRAY_BUFFER,$);for(let _t=0;_t<rt.locationSize;_t++)A(rt.location+_t,C/rt.locationSize,V,st,Y*H,(kt+C/rt.locationSize*_t)*H,ct)}else{if(X.isInstancedBufferAttribute){for(let Mt=0;Mt<rt.locationSize;Mt++)T(rt.location+Mt,X.meshPerAttribute);R.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let Mt=0;Mt<rt.locationSize;Mt++)y(rt.location+Mt);s.bindBuffer(s.ARRAY_BUFFER,$);for(let Mt=0;Mt<rt.locationSize;Mt++)A(rt.location+Mt,C/rt.locationSize,V,st,C*H,C/rt.locationSize*Mt*H,ct)}}else if(Q!==void 0){const st=Q[nt];if(st!==void 0)switch(st.length){case 2:s.vertexAttrib2fv(rt.location,st);break;case 3:s.vertexAttrib3fv(rt.location,st);break;case 4:s.vertexAttrib4fv(rt.location,st);break;default:s.vertexAttrib1fv(rt.location,st)}}}}S()}function M(){D();for(const R in r){const I=r[R];for(const B in I){const j=I[B];for(const J in j)m(j[J].object),delete j[J];delete I[B]}delete r[R]}}function b(R){if(r[R.id]===void 0)return;const I=r[R.id];for(const B in I){const j=I[B];for(const J in j)m(j[J].object),delete j[J];delete I[B]}delete r[R.id]}function z(R){for(const I in r){const B=r[I];if(B[R.id]===void 0)continue;const j=B[R.id];for(const J in j)m(j[J].object),delete j[J];delete B[R.id]}}function D(){k(),u=!0,l!==c&&(l=c,v(l.object))}function k(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:f,reset:D,resetDefaultState:k,dispose:M,releaseStatesOfGeometry:b,releaseStatesOfProgram:z,initAttributes:_,enableAttribute:y,disableUnusedAttributes:S}}function Fu(s,t,e,i){const n=i.isWebGL2;let a;function o(u){a=u}function r(u,f){s.drawArrays(a,u,f),e.update(f,a,1)}function c(u,f,p){if(p===0)return;let v,m;if(n)v=s,m="drawArraysInstanced";else if(v=t.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",v===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}v[m](a,u,f,p),e.update(f,a,p)}function l(u,f,p){if(p===0)return;const v=t.get("WEBGL_multi_draw");if(v===null)for(let m=0;m<p;m++)this.render(u[m],f[m]);else{v.multiDrawArraysWEBGL(a,u,0,f,0,p);let m=0;for(let g=0;g<p;g++)m+=f[g];e.update(m,a,1)}}this.setMode=o,this.render=r,this.renderInstances=c,this.renderMultiDraw=l}function Bu(s,t,e){let i;function n(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const A=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(A){if(A==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&s.constructor.name==="WebGL2RenderingContext";let r=e.precision!==void 0?e.precision:"highp";const c=a(r);c!==r&&(console.warn("THREE.WebGLRenderer:",r,"not supported, using",c,"instead."),r=c);const l=o||t.has("WEBGL_draw_buffers"),u=e.logarithmicDepthBuffer===!0,f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),p=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),g=s.getParameter(s.MAX_VERTEX_ATTRIBS),h=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),d=s.getParameter(s.MAX_VARYING_VECTORS),x=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),_=p>0,y=o||t.has("OES_texture_float"),T=_&&y,S=o?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:n,getMaxPrecision:a,precision:r,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:p,maxTextureSize:v,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:h,maxVaryings:d,maxFragmentUniforms:x,vertexTextures:_,floatFragmentTextures:y,floatVertexTextures:T,maxSamples:S}}function Gu(s){const t=this;let e=null,i=0,n=!1,a=!1;const o=new ui,r=new Kt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,p){const v=f.length!==0||p||i!==0||n;return n=p,i=f.length,v},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(f,p){e=u(f,p,0)},this.setState=function(f,p,v){const m=f.clippingPlanes,g=f.clipIntersection,h=f.clipShadows,d=s.get(f);if(!n||m===null||m.length===0||a&&!h)a?u(null):l();else{const x=a?0:i,_=x*4;let y=d.clippingState||null;c.value=y,y=u(m,p,_,v);for(let T=0;T!==_;++T)y[T]=e[T];d.clippingState=y,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=x}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(f,p,v,m){const g=f!==null?f.length:0;let h=null;if(g!==0){if(h=c.value,m!==!0||h===null){const d=v+g*4,x=p.matrixWorldInverse;r.getNormalMatrix(x),(h===null||h.length<d)&&(h=new Float32Array(d));for(let _=0,y=v;_!==g;++_,y+=4)o.copy(f[_]).applyMatrix4(x,r),o.normal.toArray(h,y),h[y+3]=o.constant}c.value=h,c.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,h}}function ku(s){let t=new WeakMap;function e(o,r){return r===ca?o.mapping=cn:r===ha&&(o.mapping=hn),o}function i(o){if(o&&o.isTexture){const r=o.mapping;if(r===ca||r===ha)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new Qc(c.height/2);return l.fromEquirectangularTexture(s,o),t.set(o,l),o.addEventListener("dispose",n),e(l.texture,o.mapping)}else return null}}return o}function n(o){const r=o.target;r.removeEventListener("dispose",n);const c=t.get(r);c!==void 0&&(t.delete(r),c.dispose())}function a(){t=new WeakMap}return{get:i,dispose:a}}class Yo extends Ho{constructor(t=-1,e=1,i=1,n=-1,a=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=n,this.near=a,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,n,a,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=a,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2;let a=i-t,o=i+t,r=n+e,c=n-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=l*this.view.offsetX,o=a+l*this.view.width,r-=u*this.view.offsetY,c=r-u*this.view.height}this.projectionMatrix.makeOrthographic(a,o,r,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const nn=4,Gr=[.125,.215,.35,.446,.526,.582],wi=20,Zs=new Yo,kr=new Jt;let js=null,Js=0,Qs=0;const bi=(1+Math.sqrt(5))/2,tn=1/bi,Hr=[new W(1,1,1),new W(-1,1,1),new W(1,1,-1),new W(-1,1,-1),new W(0,bi,tn),new W(0,bi,-tn),new W(tn,0,bi),new W(-tn,0,bi),new W(bi,tn,0),new W(-bi,tn,0)];class Vr{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,n=100){js=this._renderer.getRenderTarget(),Js=this._renderer.getActiveCubeFace(),Qs=this._renderer.getActiveMipmapLevel(),this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(t,i,n,a),e>0&&this._blur(a,0,0,e),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Xr(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Yr(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(js,Js,Qs),t.scissorTest=!1,ts(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===cn||t.mapping===hn?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),js=this._renderer.getRenderTarget(),Js=this._renderer.getActiveCubeFace(),Qs=this._renderer.getActiveMipmapLevel();const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:ze,minFilter:ze,generateMipmaps:!1,type:bn,format:Ye,colorSpace:ai,depthBuffer:!1},n=Wr(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Wr(t,e,i);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Hu(a)),this._blurMaterial=Vu(a,t,e)}return n}_compileMaterial(t){const e=new te(this._lodPlanes[0],t);this._renderer.compile(e,Zs)}_sceneToCubeUV(t,e,i,n){const r=new Fe(90,1,e,i),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,p=u.toneMapping;u.getClearColor(kr),u.toneMapping=gi,u.autoClear=!1;const v=new fs({name:"PMREM.Background",side:Re,depthWrite:!1,depthTest:!1}),m=new te(new Ce,v);let g=!1;const h=t.background;h?h.isColor&&(v.color.copy(h),t.background=null,g=!0):(v.color.copy(kr),g=!0);for(let d=0;d<6;d++){const x=d%3;x===0?(r.up.set(0,c[d],0),r.lookAt(l[d],0,0)):x===1?(r.up.set(0,0,c[d]),r.lookAt(0,l[d],0)):(r.up.set(0,c[d],0),r.lookAt(0,0,l[d]));const _=this._cubeSize;ts(n,x*_,d>2?_:0,_,_),u.setRenderTarget(n),g&&u.render(m,r),u.render(t,r)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=p,u.autoClear=f,t.background=h}_textureToCubeUV(t,e){const i=this._renderer,n=t.mapping===cn||t.mapping===hn;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=Xr()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Yr());const a=n?this._cubemapMaterial:this._equirectMaterial,o=new te(this._lodPlanes[0],a),r=a.uniforms;r.envMap.value=t;const c=this._cubeSize;ts(e,0,0,3*c,2*c),i.setRenderTarget(e),i.render(o,Zs)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;for(let n=1;n<this._lodPlanes.length;n++){const a=Math.sqrt(this._sigmas[n]*this._sigmas[n]-this._sigmas[n-1]*this._sigmas[n-1]),o=Hr[(n-1)%Hr.length];this._blur(t,n-1,n,a,o)}e.autoClear=i}_blur(t,e,i,n,a){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,n,"latitudinal",a),this._halfBlur(o,t,i,i,n,"longitudinal",a)}_halfBlur(t,e,i,n,a,o,r){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new te(this._lodPlanes[n],l),p=l.uniforms,v=this._sizeLods[i]-1,m=isFinite(a)?Math.PI/(2*v):2*Math.PI/(2*wi-1),g=a/m,h=isFinite(a)?1+Math.floor(u*g):wi;h>wi&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${h} samples when the maximum is set to ${wi}`);const d=[];let x=0;for(let A=0;A<wi;++A){const N=A/g,M=Math.exp(-N*N/2);d.push(M),A===0?x+=M:A<h&&(x+=2*M)}for(let A=0;A<d.length;A++)d[A]=d[A]/x;p.envMap.value=t.texture,p.samples.value=h,p.weights.value=d,p.latitudinal.value=o==="latitudinal",r&&(p.poleAxis.value=r);const{_lodMax:_}=this;p.dTheta.value=m,p.mipInt.value=_-i;const y=this._sizeLods[n],T=3*y*(n>_-nn?n-_+nn:0),S=4*(this._cubeSize-y);ts(e,T,S,3*y,2*y),c.setRenderTarget(e),c.render(f,Zs)}}function Hu(s){const t=[],e=[],i=[];let n=s;const a=s-nn+1+Gr.length;for(let o=0;o<a;o++){const r=Math.pow(2,n);e.push(r);let c=1/r;o>s-nn?c=Gr[o-s+nn-1]:o===0&&(c=0),i.push(c);const l=1/(r-2),u=-l,f=1+l,p=[u,u,f,u,f,f,u,u,f,f,u,f],v=6,m=6,g=3,h=2,d=1,x=new Float32Array(g*m*v),_=new Float32Array(h*m*v),y=new Float32Array(d*m*v);for(let S=0;S<v;S++){const A=S%3*2/3-1,N=S>2?0:-1,M=[A,N,0,A+2/3,N,0,A+2/3,N+1,0,A,N,0,A+2/3,N+1,0,A,N+1,0];x.set(M,g*m*S),_.set(p,h*m*S);const b=[S,S,S,S,S,S];y.set(b,d*m*S)}const T=new qe;T.setAttribute("position",new Ke(x,g)),T.setAttribute("uv",new Ke(_,h)),T.setAttribute("faceIndex",new Ke(y,d)),t.push(T),n>nn&&n--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function Wr(s,t,e){const i=new Ii(s,t,e);return i.texture.mapping=vs,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ts(s,t,e,i,n){s.viewport.set(t,e,i,n),s.scissor.set(t,e,i,n)}function Vu(s,t,e){const i=new Float32Array(wi),n=new W(0,1,0);return new Oi({name:"SphericalGaussianBlur",defines:{n:wi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n}},vertexShader:Ca(),fragmentShader:`

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
		`,blending:mi,depthTest:!1,depthWrite:!1})}function Yr(){return new Oi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ca(),fragmentShader:`

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
		`,blending:mi,depthTest:!1,depthWrite:!1})}function Xr(){return new Oi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ca(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:mi,depthTest:!1,depthWrite:!1})}function Ca(){return`

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
	`}function Wu(s){let t=new WeakMap,e=null;function i(r){if(r&&r.isTexture){const c=r.mapping,l=c===ca||c===ha,u=c===cn||c===hn;if(l||u)if(r.isRenderTargetTexture&&r.needsPMREMUpdate===!0){r.needsPMREMUpdate=!1;let f=t.get(r);return e===null&&(e=new Vr(s)),f=l?e.fromEquirectangular(r,f):e.fromCubemap(r,f),t.set(r,f),f.texture}else{if(t.has(r))return t.get(r).texture;{const f=r.image;if(l&&f&&f.height>0||u&&f&&n(f)){e===null&&(e=new Vr(s));const p=l?e.fromEquirectangular(r):e.fromCubemap(r);return t.set(r,p),r.addEventListener("dispose",a),p.texture}else return null}}}return r}function n(r){let c=0;const l=6;for(let u=0;u<l;u++)r[u]!==void 0&&c++;return c===l}function a(r){const c=r.target;c.removeEventListener("dispose",a);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function Yu(s){const t={};function e(i){if(t[i]!==void 0)return t[i];let n;switch(i){case"WEBGL_depth_texture":n=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":n=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":n=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":n=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:n=s.getExtension(i)}return t[i]=n,n}return{has:function(i){return e(i)!==null},init:function(i){i.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(i){const n=e(i);return n===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),n}}}function Xu(s,t,e,i){const n={},a=new WeakMap;function o(f){const p=f.target;p.index!==null&&t.remove(p.index);for(const m in p.attributes)t.remove(p.attributes[m]);for(const m in p.morphAttributes){const g=p.morphAttributes[m];for(let h=0,d=g.length;h<d;h++)t.remove(g[h])}p.removeEventListener("dispose",o),delete n[p.id];const v=a.get(p);v&&(t.remove(v),a.delete(p)),i.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,e.memory.geometries--}function r(f,p){return n[p.id]===!0||(p.addEventListener("dispose",o),n[p.id]=!0,e.memory.geometries++),p}function c(f){const p=f.attributes;for(const m in p)t.update(p[m],s.ARRAY_BUFFER);const v=f.morphAttributes;for(const m in v){const g=v[m];for(let h=0,d=g.length;h<d;h++)t.update(g[h],s.ARRAY_BUFFER)}}function l(f){const p=[],v=f.index,m=f.attributes.position;let g=0;if(v!==null){const x=v.array;g=v.version;for(let _=0,y=x.length;_<y;_+=3){const T=x[_+0],S=x[_+1],A=x[_+2];p.push(T,S,S,A,A,T)}}else if(m!==void 0){const x=m.array;g=m.version;for(let _=0,y=x.length/3-1;_<y;_+=3){const T=_+0,S=_+1,A=_+2;p.push(T,S,S,A,A,T)}}else return;const h=new(Oo(p)?Go:Bo)(p,1);h.version=g;const d=a.get(f);d&&t.remove(d),a.set(f,h)}function u(f){const p=a.get(f);if(p){const v=f.index;v!==null&&p.version<v.version&&l(f)}else l(f);return a.get(f)}return{get:r,update:c,getWireframeAttribute:u}}function $u(s,t,e,i){const n=i.isWebGL2;let a;function o(v){a=v}let r,c;function l(v){r=v.type,c=v.bytesPerElement}function u(v,m){s.drawElements(a,m,r,v*c),e.update(m,a,1)}function f(v,m,g){if(g===0)return;let h,d;if(n)h=s,d="drawElementsInstanced";else if(h=t.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",h===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[d](a,m,r,v*c,g),e.update(m,a,g)}function p(v,m,g){if(g===0)return;const h=t.get("WEBGL_multi_draw");if(h===null)for(let d=0;d<g;d++)this.render(v[d]/c,m[d]);else{h.multiDrawElementsWEBGL(a,m,0,r,v,0,g);let d=0;for(let x=0;x<g;x++)d+=m[x];e.update(d,a,1)}}this.setMode=o,this.setIndex=l,this.render=u,this.renderInstances=f,this.renderMultiDraw=p}function Ku(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,o,r){switch(e.calls++,o){case s.TRIANGLES:e.triangles+=r*(a/3);break;case s.LINES:e.lines+=r*(a/2);break;case s.LINE_STRIP:e.lines+=r*(a-1);break;case s.LINE_LOOP:e.lines+=r*a;break;case s.POINTS:e.points+=r*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function n(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:n,update:i}}function qu(s,t){return s[0]-t[0]}function Zu(s,t){return Math.abs(t[1])-Math.abs(s[1])}function ju(s,t,e){const i={},n=new Float32Array(8),a=new WeakMap,o=new me,r=[];for(let l=0;l<8;l++)r[l]=[l,0];function c(l,u,f){const p=l.morphTargetInfluences;if(t.isWebGL2===!0){const m=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,g=m!==void 0?m.length:0;let h=a.get(u);if(h===void 0||h.count!==g){let I=function(){k.dispose(),a.delete(u),u.removeEventListener("dispose",I)};var v=I;h!==void 0&&h.texture.dispose();const _=u.morphAttributes.position!==void 0,y=u.morphAttributes.normal!==void 0,T=u.morphAttributes.color!==void 0,S=u.morphAttributes.position||[],A=u.morphAttributes.normal||[],N=u.morphAttributes.color||[];let M=0;_===!0&&(M=1),y===!0&&(M=2),T===!0&&(M=3);let b=u.attributes.position.count*M,z=1;b>t.maxTextureSize&&(z=Math.ceil(b/t.maxTextureSize),b=t.maxTextureSize);const D=new Float32Array(b*z*4*g),k=new zo(D,b,z,g);k.type=pi,k.needsUpdate=!0;const R=M*4;for(let B=0;B<g;B++){const j=S[B],J=A[B],K=N[B],Q=b*z*4*B;for(let nt=0;nt<j.count;nt++){const rt=nt*R;_===!0&&(o.fromBufferAttribute(j,nt),D[Q+rt+0]=o.x,D[Q+rt+1]=o.y,D[Q+rt+2]=o.z,D[Q+rt+3]=0),y===!0&&(o.fromBufferAttribute(J,nt),D[Q+rt+4]=o.x,D[Q+rt+5]=o.y,D[Q+rt+6]=o.z,D[Q+rt+7]=0),T===!0&&(o.fromBufferAttribute(K,nt),D[Q+rt+8]=o.x,D[Q+rt+9]=o.y,D[Q+rt+10]=o.z,D[Q+rt+11]=K.itemSize===4?o.w:1)}}h={count:g,texture:k,size:new Gt(b,z)},a.set(u,h),u.addEventListener("dispose",I)}let d=0;for(let _=0;_<p.length;_++)d+=p[_];const x=u.morphTargetsRelative?1:1-d;f.getUniforms().setValue(s,"morphTargetBaseInfluence",x),f.getUniforms().setValue(s,"morphTargetInfluences",p),f.getUniforms().setValue(s,"morphTargetsTexture",h.texture,e),f.getUniforms().setValue(s,"morphTargetsTextureSize",h.size)}else{const m=p===void 0?0:p.length;let g=i[u.id];if(g===void 0||g.length!==m){g=[];for(let y=0;y<m;y++)g[y]=[y,0];i[u.id]=g}for(let y=0;y<m;y++){const T=g[y];T[0]=y,T[1]=p[y]}g.sort(Zu);for(let y=0;y<8;y++)y<m&&g[y][1]?(r[y][0]=g[y][0],r[y][1]=g[y][1]):(r[y][0]=Number.MAX_SAFE_INTEGER,r[y][1]=0);r.sort(qu);const h=u.morphAttributes.position,d=u.morphAttributes.normal;let x=0;for(let y=0;y<8;y++){const T=r[y],S=T[0],A=T[1];S!==Number.MAX_SAFE_INTEGER&&A?(h&&u.getAttribute("morphTarget"+y)!==h[S]&&u.setAttribute("morphTarget"+y,h[S]),d&&u.getAttribute("morphNormal"+y)!==d[S]&&u.setAttribute("morphNormal"+y,d[S]),n[y]=A,x+=A):(h&&u.hasAttribute("morphTarget"+y)===!0&&u.deleteAttribute("morphTarget"+y),d&&u.hasAttribute("morphNormal"+y)===!0&&u.deleteAttribute("morphNormal"+y),n[y]=0)}const _=u.morphTargetsRelative?1:1-x;f.getUniforms().setValue(s,"morphTargetBaseInfluence",_),f.getUniforms().setValue(s,"morphTargetInfluences",n)}}return{update:c}}function Ju(s,t,e,i){let n=new WeakMap;function a(c){const l=i.render.frame,u=c.geometry,f=t.get(c,u);if(n.get(f)!==l&&(t.update(f),n.set(f,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",r)===!1&&c.addEventListener("dispose",r),n.get(c)!==l&&(e.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,s.ARRAY_BUFFER),n.set(c,l))),c.isSkinnedMesh){const p=c.skeleton;n.get(p)!==l&&(p.update(),n.set(p,l))}return f}function o(){n=new WeakMap}function r(c){const l=c.target;l.removeEventListener("dispose",r),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:a,dispose:o}}class Xo extends Oe{constructor(t,e,i,n,a,o,r,c,l,u){if(u=u!==void 0?u:Ri,u!==Ri&&u!==dn)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Ri&&(i=fi),i===void 0&&u===dn&&(i=Ci),super(null,n,a,o,r,c,u,i,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=r!==void 0?r:Ae,this.minFilter=c!==void 0?c:Ae,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const $o=new Oe,Ko=new Xo(1,1);Ko.compareFunction=Do;const qo=new zo,Zo=new Uc,jo=new Vo,$r=[],Kr=[],qr=new Float32Array(16),Zr=new Float32Array(9),jr=new Float32Array(4);function fn(s,t,e){const i=s[0];if(i<=0||i>0)return s;const n=t*e;let a=$r[n];if(a===void 0&&(a=new Float32Array(n),$r[n]=a),t!==0){i.toArray(a,0);for(let o=1,r=0;o!==t;++o)r+=e,s[o].toArray(a,r)}return a}function de(s,t){if(s.length!==t.length)return!1;for(let e=0,i=s.length;e<i;e++)if(s[e]!==t[e])return!1;return!0}function ue(s,t){for(let e=0,i=t.length;e<i;e++)s[e]=t[e]}function xs(s,t){let e=Kr[t];e===void 0&&(e=new Int32Array(t),Kr[t]=e);for(let i=0;i!==t;++i)e[i]=s.allocateTextureUnit();return e}function Qu(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function tf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(de(e,t))return;s.uniform2fv(this.addr,t),ue(e,t)}}function ef(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(de(e,t))return;s.uniform3fv(this.addr,t),ue(e,t)}}function nf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(de(e,t))return;s.uniform4fv(this.addr,t),ue(e,t)}}function sf(s,t){const e=this.cache,i=t.elements;if(i===void 0){if(de(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),ue(e,t)}else{if(de(e,i))return;jr.set(i),s.uniformMatrix2fv(this.addr,!1,jr),ue(e,i)}}function af(s,t){const e=this.cache,i=t.elements;if(i===void 0){if(de(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),ue(e,t)}else{if(de(e,i))return;Zr.set(i),s.uniformMatrix3fv(this.addr,!1,Zr),ue(e,i)}}function rf(s,t){const e=this.cache,i=t.elements;if(i===void 0){if(de(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),ue(e,t)}else{if(de(e,i))return;qr.set(i),s.uniformMatrix4fv(this.addr,!1,qr),ue(e,i)}}function of(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function lf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(de(e,t))return;s.uniform2iv(this.addr,t),ue(e,t)}}function cf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(de(e,t))return;s.uniform3iv(this.addr,t),ue(e,t)}}function hf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(de(e,t))return;s.uniform4iv(this.addr,t),ue(e,t)}}function df(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function uf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(de(e,t))return;s.uniform2uiv(this.addr,t),ue(e,t)}}function ff(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(de(e,t))return;s.uniform3uiv(this.addr,t),ue(e,t)}}function pf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(de(e,t))return;s.uniform4uiv(this.addr,t),ue(e,t)}}function mf(s,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n);const a=this.type===s.SAMPLER_2D_SHADOW?Ko:$o;e.setTexture2D(t||a,n)}function gf(s,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),e.setTexture3D(t||Zo,n)}function vf(s,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),e.setTextureCube(t||jo,n)}function _f(s,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),e.setTexture2DArray(t||qo,n)}function yf(s){switch(s){case 5126:return Qu;case 35664:return tf;case 35665:return ef;case 35666:return nf;case 35674:return sf;case 35675:return af;case 35676:return rf;case 5124:case 35670:return of;case 35667:case 35671:return lf;case 35668:case 35672:return cf;case 35669:case 35673:return hf;case 5125:return df;case 36294:return uf;case 36295:return ff;case 36296:return pf;case 35678:case 36198:case 36298:case 36306:case 35682:return mf;case 35679:case 36299:case 36307:return gf;case 35680:case 36300:case 36308:case 36293:return vf;case 36289:case 36303:case 36311:case 36292:return _f}}function xf(s,t){s.uniform1fv(this.addr,t)}function Mf(s,t){const e=fn(t,this.size,2);s.uniform2fv(this.addr,e)}function Tf(s,t){const e=fn(t,this.size,3);s.uniform3fv(this.addr,e)}function Ef(s,t){const e=fn(t,this.size,4);s.uniform4fv(this.addr,e)}function Sf(s,t){const e=fn(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function Af(s,t){const e=fn(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function bf(s,t){const e=fn(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function Pf(s,t){s.uniform1iv(this.addr,t)}function wf(s,t){s.uniform2iv(this.addr,t)}function Cf(s,t){s.uniform3iv(this.addr,t)}function Rf(s,t){s.uniform4iv(this.addr,t)}function Lf(s,t){s.uniform1uiv(this.addr,t)}function If(s,t){s.uniform2uiv(this.addr,t)}function Df(s,t){s.uniform3uiv(this.addr,t)}function Of(s,t){s.uniform4uiv(this.addr,t)}function Nf(s,t,e){const i=this.cache,n=t.length,a=xs(e,n);de(i,a)||(s.uniform1iv(this.addr,a),ue(i,a));for(let o=0;o!==n;++o)e.setTexture2D(t[o]||$o,a[o])}function Uf(s,t,e){const i=this.cache,n=t.length,a=xs(e,n);de(i,a)||(s.uniform1iv(this.addr,a),ue(i,a));for(let o=0;o!==n;++o)e.setTexture3D(t[o]||Zo,a[o])}function zf(s,t,e){const i=this.cache,n=t.length,a=xs(e,n);de(i,a)||(s.uniform1iv(this.addr,a),ue(i,a));for(let o=0;o!==n;++o)e.setTextureCube(t[o]||jo,a[o])}function Ff(s,t,e){const i=this.cache,n=t.length,a=xs(e,n);de(i,a)||(s.uniform1iv(this.addr,a),ue(i,a));for(let o=0;o!==n;++o)e.setTexture2DArray(t[o]||qo,a[o])}function Bf(s){switch(s){case 5126:return xf;case 35664:return Mf;case 35665:return Tf;case 35666:return Ef;case 35674:return Sf;case 35675:return Af;case 35676:return bf;case 5124:case 35670:return Pf;case 35667:case 35671:return wf;case 35668:case 35672:return Cf;case 35669:case 35673:return Rf;case 5125:return Lf;case 36294:return If;case 36295:return Df;case 36296:return Of;case 35678:case 36198:case 36298:case 36306:case 35682:return Nf;case 35679:case 36299:case 36307:return Uf;case 35680:case 36300:case 36308:case 36293:return zf;case 36289:case 36303:case 36311:case 36292:return Ff}}class Gf{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=yf(e.type)}}class kf{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Bf(e.type)}}class Hf{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const n=this.seq;for(let a=0,o=n.length;a!==o;++a){const r=n[a];r.setValue(t,e[r.id],i)}}}const ta=/(\w+)(\])?(\[|\.)?/g;function Jr(s,t){s.seq.push(t),s.map[t.id]=t}function Vf(s,t,e){const i=s.name,n=i.length;for(ta.lastIndex=0;;){const a=ta.exec(i),o=ta.lastIndex;let r=a[1];const c=a[2]==="]",l=a[3];if(c&&(r=r|0),l===void 0||l==="["&&o+2===n){Jr(e,l===void 0?new Gf(r,s,t):new kf(r,s,t));break}else{let f=e.map[r];f===void 0&&(f=new Hf(r),Jr(e,f)),e=f}}}class as{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let n=0;n<i;++n){const a=t.getActiveUniform(e,n),o=t.getUniformLocation(e,a.name);Vf(a,o,this)}}setValue(t,e,i,n){const a=this.map[e];a!==void 0&&a.setValue(t,i,n)}setOptional(t,e,i){const n=e[i];n!==void 0&&this.setValue(t,i,n)}static upload(t,e,i,n){for(let a=0,o=e.length;a!==o;++a){const r=e[a],c=i[r.id];c.needsUpdate!==!1&&r.setValue(t,c.value,n)}}static seqWithValue(t,e){const i=[];for(let n=0,a=t.length;n!==a;++n){const o=t[n];o.id in e&&i.push(o)}return i}}function Qr(s,t,e){const i=s.createShader(t);return s.shaderSource(i,e),s.compileShader(i),i}const Wf=37297;let Yf=0;function Xf(s,t){const e=s.split(`
`),i=[],n=Math.max(t-6,0),a=Math.min(t+6,e.length);for(let o=n;o<a;o++){const r=o+1;i.push(`${r===t?">":" "} ${r}: ${e[o]}`)}return i.join(`
`)}function $f(s){const t=Qt.getPrimaries(Qt.workingColorSpace),e=Qt.getPrimaries(s);let i;switch(t===e?i="":t===hs&&e===cs?i="LinearDisplayP3ToLinearSRGB":t===cs&&e===hs&&(i="LinearSRGBToLinearDisplayP3"),s){case ai:case _s:return[i,"LinearTransferOETF"];case ge:case Ea:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[i,"LinearTransferOETF"]}}function to(s,t,e){const i=s.getShaderParameter(t,s.COMPILE_STATUS),n=s.getShaderInfoLog(t).trim();if(i&&n==="")return"";const a=/ERROR: 0:(\d+)/.exec(n);if(a){const o=parseInt(a[1]);return e.toUpperCase()+`

`+n+`

`+Xf(s.getShaderSource(t),o)}else return n}function Kf(s,t){const e=$f(t);return`vec4 ${s}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function qf(s,t){let e;switch(t){case sc:e="Linear";break;case ac:e="Reinhard";break;case rc:e="OptimizedCineon";break;case oc:e="ACESFilmic";break;case cc:e="AgX";break;case lc:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function Zf(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(sn).join(`
`)}function jf(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(sn).join(`
`)}function Jf(s){const t=[];for(const e in s){const i=s[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function Qf(s,t){const e={},i=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){const a=s.getActiveAttrib(t,n),o=a.name;let r=1;a.type===s.FLOAT_MAT2&&(r=2),a.type===s.FLOAT_MAT3&&(r=3),a.type===s.FLOAT_MAT4&&(r=4),e[o]={type:a.type,location:s.getAttribLocation(t,o),locationSize:r}}return e}function sn(s){return s!==""}function eo(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function io(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const tp=/^[ \t]*#include +<([\w\d./]+)>/gm;function ga(s){return s.replace(tp,ip)}const ep=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function ip(s,t){let e=Yt[t];if(e===void 0){const i=ep.get(t);if(i!==void 0)e=Yt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return ga(e)}const np=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function no(s){return s.replace(np,sp)}function sp(s,t,e,i){let n="";for(let a=parseInt(t);a<parseInt(e);a++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return n}function so(s){let t="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function ap(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===To?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===Il?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===ii&&(t="SHADOWMAP_TYPE_VSM"),t}function rp(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case cn:case hn:t="ENVMAP_TYPE_CUBE";break;case vs:t="ENVMAP_TYPE_CUBE_UV";break}return t}function op(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case hn:t="ENVMAP_MODE_REFRACTION";break}return t}function lp(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Ma:t="ENVMAP_BLENDING_MULTIPLY";break;case ic:t="ENVMAP_BLENDING_MIX";break;case nc:t="ENVMAP_BLENDING_ADD";break}return t}function cp(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function hp(s,t,e,i){const n=s.getContext(),a=e.defines;let o=e.vertexShader,r=e.fragmentShader;const c=ap(e),l=rp(e),u=op(e),f=lp(e),p=cp(e),v=e.isWebGL2?"":Zf(e),m=jf(e),g=Jf(a),h=n.createProgram();let d,x,_=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(sn).join(`
`),d.length>0&&(d+=`
`),x=[v,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(sn).join(`
`),x.length>0&&(x+=`
`)):(d=[so(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(sn).join(`
`),x=[v,so(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+f:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==gi?"#define TONE_MAPPING":"",e.toneMapping!==gi?Yt.tonemapping_pars_fragment:"",e.toneMapping!==gi?qf("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Yt.colorspace_pars_fragment,Kf("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(sn).join(`
`)),o=ga(o),o=eo(o,e),o=io(o,e),r=ga(r),r=eo(r,e),r=io(r,e),o=no(o),r=no(r),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,d=[m,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,x=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===Tr?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Tr?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const y=_+d+o,T=_+x+r,S=Qr(n,n.VERTEX_SHADER,y),A=Qr(n,n.FRAGMENT_SHADER,T);n.attachShader(h,S),n.attachShader(h,A),e.index0AttributeName!==void 0?n.bindAttribLocation(h,0,e.index0AttributeName):e.morphTargets===!0&&n.bindAttribLocation(h,0,"position"),n.linkProgram(h);function N(D){if(s.debug.checkShaderErrors){const k=n.getProgramInfoLog(h).trim(),R=n.getShaderInfoLog(S).trim(),I=n.getShaderInfoLog(A).trim();let B=!0,j=!0;if(n.getProgramParameter(h,n.LINK_STATUS)===!1)if(B=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(n,h,S,A);else{const J=to(n,S,"vertex"),K=to(n,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(h,n.VALIDATE_STATUS)+`

Program Info Log: `+k+`
`+J+`
`+K)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):(R===""||I==="")&&(j=!1);j&&(D.diagnostics={runnable:B,programLog:k,vertexShader:{log:R,prefix:d},fragmentShader:{log:I,prefix:x}})}n.deleteShader(S),n.deleteShader(A),M=new as(n,h),b=Qf(n,h)}let M;this.getUniforms=function(){return M===void 0&&N(this),M};let b;this.getAttributes=function(){return b===void 0&&N(this),b};let z=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return z===!1&&(z=n.getProgramParameter(h,Wf)),z},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(h),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Yf++,this.cacheKey=t,this.usedTimes=1,this.program=h,this.vertexShader=S,this.fragmentShader=A,this}let dp=0;class up{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,n=this._getShaderStage(e),a=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(n)===!1&&(o.add(n),n.usedTimes++),o.has(a)===!1&&(o.add(a),a.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new fp(t),e.set(t,i)),i}}class fp{constructor(t){this.id=dp++,this.code=t,this.usedTimes=0}}function pp(s,t,e,i,n,a,o){const r=new ba,c=new up,l=[],u=n.isWebGL2,f=n.logarithmicDepthBuffer,p=n.vertexTextures;let v=n.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(M){return M===0?"uv":`uv${M}`}function h(M,b,z,D,k){const R=D.fog,I=k.geometry,B=M.isMeshStandardMaterial?D.environment:null,j=(M.isMeshStandardMaterial?e:t).get(M.envMap||B),J=j&&j.mapping===vs?j.image.height:null,K=m[M.type];M.precision!==null&&(v=n.getMaxPrecision(M.precision),v!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",v,"instead."));const Q=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,nt=Q!==void 0?Q.length:0;let rt=0;I.morphAttributes.position!==void 0&&(rt=1),I.morphAttributes.normal!==void 0&&(rt=2),I.morphAttributes.color!==void 0&&(rt=3);let X,st,C,F;if(K){const re=$e[K];X=re.vertexShader,st=re.fragmentShader}else X=M.vertexShader,st=M.fragmentShader,c.update(M),C=c.getVertexShaderID(M),F=c.getFragmentShaderID(M);const $=s.getRenderTarget(),V=k.isInstancedMesh===!0,H=k.isBatchedMesh===!0,ct=!!M.map,Mt=!!M.matcap,Y=!!j,kt=!!M.aoMap,_t=!!M.lightMap,yt=!!M.bumpMap,ft=!!M.normalMap,wt=!!M.displacementMap,bt=!!M.emissiveMap,P=!!M.metalnessMap,E=!!M.roughnessMap,G=M.anisotropy>0,at=M.clearcoat>0,ot=M.iridescence>0,lt=M.sheen>0,vt=M.transmission>0,dt=G&&!!M.anisotropyMap,pt=at&&!!M.clearcoatMap,Pt=at&&!!M.clearcoatNormalMap,It=at&&!!M.clearcoatRoughnessMap,ht=ot&&!!M.iridescenceMap,Ut=ot&&!!M.iridescenceThicknessMap,Ot=lt&&!!M.sheenColorMap,Bt=lt&&!!M.sheenRoughnessMap,Ct=!!M.specularMap,Et=!!M.specularColorMap,L=!!M.specularIntensityMap,mt=vt&&!!M.transmissionMap,Rt=vt&&!!M.thicknessMap,At=!!M.gradientMap,ut=!!M.alphaMap,U=M.alphaTest>0,gt=!!M.alphaHash,Tt=!!M.extensions,zt=!!I.attributes.uv1,Dt=!!I.attributes.uv2,qt=!!I.attributes.uv3;let Zt=gi;return M.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(Zt=s.toneMapping),{isWebGL2:u,shaderID:K,shaderType:M.type,shaderName:M.name,vertexShader:X,fragmentShader:st,defines:M.defines,customVertexShaderID:C,customFragmentShaderID:F,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:v,batching:H,instancing:V,instancingColor:V&&k.instanceColor!==null,supportsVertexTextures:p,outputColorSpace:$===null?s.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:ai,map:ct,matcap:Mt,envMap:Y,envMapMode:Y&&j.mapping,envMapCubeUVHeight:J,aoMap:kt,lightMap:_t,bumpMap:yt,normalMap:ft,displacementMap:p&&wt,emissiveMap:bt,normalMapObjectSpace:ft&&M.normalMapType===Mc,normalMapTangentSpace:ft&&M.normalMapType===Io,metalnessMap:P,roughnessMap:E,anisotropy:G,anisotropyMap:dt,clearcoat:at,clearcoatMap:pt,clearcoatNormalMap:Pt,clearcoatRoughnessMap:It,iridescence:ot,iridescenceMap:ht,iridescenceThicknessMap:Ut,sheen:lt,sheenColorMap:Ot,sheenRoughnessMap:Bt,specularMap:Ct,specularColorMap:Et,specularIntensityMap:L,transmission:vt,transmissionMap:mt,thicknessMap:Rt,gradientMap:At,opaque:M.transparent===!1&&M.blending===on,alphaMap:ut,alphaTest:U,alphaHash:gt,combine:M.combine,mapUv:ct&&g(M.map.channel),aoMapUv:kt&&g(M.aoMap.channel),lightMapUv:_t&&g(M.lightMap.channel),bumpMapUv:yt&&g(M.bumpMap.channel),normalMapUv:ft&&g(M.normalMap.channel),displacementMapUv:wt&&g(M.displacementMap.channel),emissiveMapUv:bt&&g(M.emissiveMap.channel),metalnessMapUv:P&&g(M.metalnessMap.channel),roughnessMapUv:E&&g(M.roughnessMap.channel),anisotropyMapUv:dt&&g(M.anisotropyMap.channel),clearcoatMapUv:pt&&g(M.clearcoatMap.channel),clearcoatNormalMapUv:Pt&&g(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:It&&g(M.clearcoatRoughnessMap.channel),iridescenceMapUv:ht&&g(M.iridescenceMap.channel),iridescenceThicknessMapUv:Ut&&g(M.iridescenceThicknessMap.channel),sheenColorMapUv:Ot&&g(M.sheenColorMap.channel),sheenRoughnessMapUv:Bt&&g(M.sheenRoughnessMap.channel),specularMapUv:Ct&&g(M.specularMap.channel),specularColorMapUv:Et&&g(M.specularColorMap.channel),specularIntensityMapUv:L&&g(M.specularIntensityMap.channel),transmissionMapUv:mt&&g(M.transmissionMap.channel),thicknessMapUv:Rt&&g(M.thicknessMap.channel),alphaMapUv:ut&&g(M.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(ft||G),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,vertexUv1s:zt,vertexUv2s:Dt,vertexUv3s:qt,pointsUvs:k.isPoints===!0&&!!I.attributes.uv&&(ct||ut),fog:!!R,useFog:M.fog===!0,fogExp2:R&&R.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:k.isSkinnedMesh===!0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:nt,morphTextureStride:rt,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:s.shadowMap.enabled&&z.length>0,shadowMapType:s.shadowMap.type,toneMapping:Zt,useLegacyLights:s._useLegacyLights,decodeVideoTexture:ct&&M.map.isVideoTexture===!0&&Qt.getTransfer(M.map.colorSpace)===ee,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===ni,flipSided:M.side===Re,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:Tt&&M.extensions.derivatives===!0,extensionFragDepth:Tt&&M.extensions.fragDepth===!0,extensionDrawBuffers:Tt&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:Tt&&M.extensions.shaderTextureLOD===!0,extensionClipCullDistance:Tt&&M.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()}}function d(M){const b=[];if(M.shaderID?b.push(M.shaderID):(b.push(M.customVertexShaderID),b.push(M.customFragmentShaderID)),M.defines!==void 0)for(const z in M.defines)b.push(z),b.push(M.defines[z]);return M.isRawShaderMaterial===!1&&(x(b,M),_(b,M),b.push(s.outputColorSpace)),b.push(M.customProgramCacheKey),b.join()}function x(M,b){M.push(b.precision),M.push(b.outputColorSpace),M.push(b.envMapMode),M.push(b.envMapCubeUVHeight),M.push(b.mapUv),M.push(b.alphaMapUv),M.push(b.lightMapUv),M.push(b.aoMapUv),M.push(b.bumpMapUv),M.push(b.normalMapUv),M.push(b.displacementMapUv),M.push(b.emissiveMapUv),M.push(b.metalnessMapUv),M.push(b.roughnessMapUv),M.push(b.anisotropyMapUv),M.push(b.clearcoatMapUv),M.push(b.clearcoatNormalMapUv),M.push(b.clearcoatRoughnessMapUv),M.push(b.iridescenceMapUv),M.push(b.iridescenceThicknessMapUv),M.push(b.sheenColorMapUv),M.push(b.sheenRoughnessMapUv),M.push(b.specularMapUv),M.push(b.specularColorMapUv),M.push(b.specularIntensityMapUv),M.push(b.transmissionMapUv),M.push(b.thicknessMapUv),M.push(b.combine),M.push(b.fogExp2),M.push(b.sizeAttenuation),M.push(b.morphTargetsCount),M.push(b.morphAttributeCount),M.push(b.numDirLights),M.push(b.numPointLights),M.push(b.numSpotLights),M.push(b.numSpotLightMaps),M.push(b.numHemiLights),M.push(b.numRectAreaLights),M.push(b.numDirLightShadows),M.push(b.numPointLightShadows),M.push(b.numSpotLightShadows),M.push(b.numSpotLightShadowsWithMaps),M.push(b.numLightProbes),M.push(b.shadowMapType),M.push(b.toneMapping),M.push(b.numClippingPlanes),M.push(b.numClipIntersection),M.push(b.depthPacking)}function _(M,b){r.disableAll(),b.isWebGL2&&r.enable(0),b.supportsVertexTextures&&r.enable(1),b.instancing&&r.enable(2),b.instancingColor&&r.enable(3),b.matcap&&r.enable(4),b.envMap&&r.enable(5),b.normalMapObjectSpace&&r.enable(6),b.normalMapTangentSpace&&r.enable(7),b.clearcoat&&r.enable(8),b.iridescence&&r.enable(9),b.alphaTest&&r.enable(10),b.vertexColors&&r.enable(11),b.vertexAlphas&&r.enable(12),b.vertexUv1s&&r.enable(13),b.vertexUv2s&&r.enable(14),b.vertexUv3s&&r.enable(15),b.vertexTangents&&r.enable(16),b.anisotropy&&r.enable(17),b.alphaHash&&r.enable(18),b.batching&&r.enable(19),M.push(r.mask),r.disableAll(),b.fog&&r.enable(0),b.useFog&&r.enable(1),b.flatShading&&r.enable(2),b.logarithmicDepthBuffer&&r.enable(3),b.skinning&&r.enable(4),b.morphTargets&&r.enable(5),b.morphNormals&&r.enable(6),b.morphColors&&r.enable(7),b.premultipliedAlpha&&r.enable(8),b.shadowMapEnabled&&r.enable(9),b.useLegacyLights&&r.enable(10),b.doubleSided&&r.enable(11),b.flipSided&&r.enable(12),b.useDepthPacking&&r.enable(13),b.dithering&&r.enable(14),b.transmission&&r.enable(15),b.sheen&&r.enable(16),b.opaque&&r.enable(17),b.pointsUvs&&r.enable(18),b.decodeVideoTexture&&r.enable(19),M.push(r.mask)}function y(M){const b=m[M.type];let z;if(b){const D=$e[b];z=qc.clone(D.uniforms)}else z=M.uniforms;return z}function T(M,b){let z;for(let D=0,k=l.length;D<k;D++){const R=l[D];if(R.cacheKey===b){z=R,++z.usedTimes;break}}return z===void 0&&(z=new hp(s,b,M,a),l.push(z)),z}function S(M){if(--M.usedTimes===0){const b=l.indexOf(M);l[b]=l[l.length-1],l.pop(),M.destroy()}}function A(M){c.remove(M)}function N(){c.dispose()}return{getParameters:h,getProgramCacheKey:d,getUniforms:y,acquireProgram:T,releaseProgram:S,releaseShaderCache:A,programs:l,dispose:N}}function mp(){let s=new WeakMap;function t(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function e(a){s.delete(a)}function i(a,o,r){s.get(a)[o]=r}function n(){s=new WeakMap}return{get:t,remove:e,update:i,dispose:n}}function gp(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function ao(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function ro(){const s=[];let t=0;const e=[],i=[],n=[];function a(){t=0,e.length=0,i.length=0,n.length=0}function o(f,p,v,m,g,h){let d=s[t];return d===void 0?(d={id:f.id,object:f,geometry:p,material:v,groupOrder:m,renderOrder:f.renderOrder,z:g,group:h},s[t]=d):(d.id=f.id,d.object=f,d.geometry=p,d.material=v,d.groupOrder=m,d.renderOrder=f.renderOrder,d.z=g,d.group=h),t++,d}function r(f,p,v,m,g,h){const d=o(f,p,v,m,g,h);v.transmission>0?i.push(d):v.transparent===!0?n.push(d):e.push(d)}function c(f,p,v,m,g,h){const d=o(f,p,v,m,g,h);v.transmission>0?i.unshift(d):v.transparent===!0?n.unshift(d):e.unshift(d)}function l(f,p){e.length>1&&e.sort(f||gp),i.length>1&&i.sort(p||ao),n.length>1&&n.sort(p||ao)}function u(){for(let f=t,p=s.length;f<p;f++){const v=s[f];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:e,transmissive:i,transparent:n,init:a,push:r,unshift:c,finish:u,sort:l}}function vp(){let s=new WeakMap;function t(i,n){const a=s.get(i);let o;return a===void 0?(o=new ro,s.set(i,[o])):n>=a.length?(o=new ro,a.push(o)):o=a[n],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function _p(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new W,color:new Jt};break;case"SpotLight":e={position:new W,direction:new W,color:new Jt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new W,color:new Jt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new W,skyColor:new Jt,groundColor:new Jt};break;case"RectAreaLight":e={color:new Jt,position:new W,halfWidth:new W,halfHeight:new W};break}return s[t.id]=e,e}}}function yp(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Gt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Gt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Gt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let xp=0;function Mp(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function Tp(s,t){const e=new _p,i=yp(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)n.probe.push(new W);const a=new W,o=new he,r=new he;function c(u,f){let p=0,v=0,m=0;for(let D=0;D<9;D++)n.probe[D].set(0,0,0);let g=0,h=0,d=0,x=0,_=0,y=0,T=0,S=0,A=0,N=0,M=0;u.sort(Mp);const b=f===!0?Math.PI:1;for(let D=0,k=u.length;D<k;D++){const R=u[D],I=R.color,B=R.intensity,j=R.distance,J=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)p+=I.r*B*b,v+=I.g*B*b,m+=I.b*B*b;else if(R.isLightProbe){for(let K=0;K<9;K++)n.probe[K].addScaledVector(R.sh.coefficients[K],B);M++}else if(R.isDirectionalLight){const K=e.get(R);if(K.color.copy(R.color).multiplyScalar(R.intensity*b),R.castShadow){const Q=R.shadow,nt=i.get(R);nt.shadowBias=Q.bias,nt.shadowNormalBias=Q.normalBias,nt.shadowRadius=Q.radius,nt.shadowMapSize=Q.mapSize,n.directionalShadow[g]=nt,n.directionalShadowMap[g]=J,n.directionalShadowMatrix[g]=R.shadow.matrix,y++}n.directional[g]=K,g++}else if(R.isSpotLight){const K=e.get(R);K.position.setFromMatrixPosition(R.matrixWorld),K.color.copy(I).multiplyScalar(B*b),K.distance=j,K.coneCos=Math.cos(R.angle),K.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),K.decay=R.decay,n.spot[d]=K;const Q=R.shadow;if(R.map&&(n.spotLightMap[A]=R.map,A++,Q.updateMatrices(R),R.castShadow&&N++),n.spotLightMatrix[d]=Q.matrix,R.castShadow){const nt=i.get(R);nt.shadowBias=Q.bias,nt.shadowNormalBias=Q.normalBias,nt.shadowRadius=Q.radius,nt.shadowMapSize=Q.mapSize,n.spotShadow[d]=nt,n.spotShadowMap[d]=J,S++}d++}else if(R.isRectAreaLight){const K=e.get(R);K.color.copy(I).multiplyScalar(B),K.halfWidth.set(R.width*.5,0,0),K.halfHeight.set(0,R.height*.5,0),n.rectArea[x]=K,x++}else if(R.isPointLight){const K=e.get(R);if(K.color.copy(R.color).multiplyScalar(R.intensity*b),K.distance=R.distance,K.decay=R.decay,R.castShadow){const Q=R.shadow,nt=i.get(R);nt.shadowBias=Q.bias,nt.shadowNormalBias=Q.normalBias,nt.shadowRadius=Q.radius,nt.shadowMapSize=Q.mapSize,nt.shadowCameraNear=Q.camera.near,nt.shadowCameraFar=Q.camera.far,n.pointShadow[h]=nt,n.pointShadowMap[h]=J,n.pointShadowMatrix[h]=R.shadow.matrix,T++}n.point[h]=K,h++}else if(R.isHemisphereLight){const K=e.get(R);K.skyColor.copy(R.color).multiplyScalar(B*b),K.groundColor.copy(R.groundColor).multiplyScalar(B*b),n.hemi[_]=K,_++}}x>0&&(t.isWebGL2?s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=xt.LTC_FLOAT_1,n.rectAreaLTC2=xt.LTC_FLOAT_2):(n.rectAreaLTC1=xt.LTC_HALF_1,n.rectAreaLTC2=xt.LTC_HALF_2):s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=xt.LTC_FLOAT_1,n.rectAreaLTC2=xt.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(n.rectAreaLTC1=xt.LTC_HALF_1,n.rectAreaLTC2=xt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),n.ambient[0]=p,n.ambient[1]=v,n.ambient[2]=m;const z=n.hash;(z.directionalLength!==g||z.pointLength!==h||z.spotLength!==d||z.rectAreaLength!==x||z.hemiLength!==_||z.numDirectionalShadows!==y||z.numPointShadows!==T||z.numSpotShadows!==S||z.numSpotMaps!==A||z.numLightProbes!==M)&&(n.directional.length=g,n.spot.length=d,n.rectArea.length=x,n.point.length=h,n.hemi.length=_,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=T,n.pointShadowMap.length=T,n.spotShadow.length=S,n.spotShadowMap.length=S,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=T,n.spotLightMatrix.length=S+A-N,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=N,n.numLightProbes=M,z.directionalLength=g,z.pointLength=h,z.spotLength=d,z.rectAreaLength=x,z.hemiLength=_,z.numDirectionalShadows=y,z.numPointShadows=T,z.numSpotShadows=S,z.numSpotMaps=A,z.numLightProbes=M,n.version=xp++)}function l(u,f){let p=0,v=0,m=0,g=0,h=0;const d=f.matrixWorldInverse;for(let x=0,_=u.length;x<_;x++){const y=u[x];if(y.isDirectionalLight){const T=n.directional[p];T.direction.setFromMatrixPosition(y.matrixWorld),a.setFromMatrixPosition(y.target.matrixWorld),T.direction.sub(a),T.direction.transformDirection(d),p++}else if(y.isSpotLight){const T=n.spot[m];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(d),T.direction.setFromMatrixPosition(y.matrixWorld),a.setFromMatrixPosition(y.target.matrixWorld),T.direction.sub(a),T.direction.transformDirection(d),m++}else if(y.isRectAreaLight){const T=n.rectArea[g];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(d),r.identity(),o.copy(y.matrixWorld),o.premultiply(d),r.extractRotation(o),T.halfWidth.set(y.width*.5,0,0),T.halfHeight.set(0,y.height*.5,0),T.halfWidth.applyMatrix4(r),T.halfHeight.applyMatrix4(r),g++}else if(y.isPointLight){const T=n.point[v];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(d),v++}else if(y.isHemisphereLight){const T=n.hemi[h];T.direction.setFromMatrixPosition(y.matrixWorld),T.direction.transformDirection(d),h++}}}return{setup:c,setupView:l,state:n}}function oo(s,t){const e=new Tp(s,t),i=[],n=[];function a(){i.length=0,n.length=0}function o(f){i.push(f)}function r(f){n.push(f)}function c(f){e.setup(i,f)}function l(f){e.setupView(i,f)}return{init:a,state:{lightsArray:i,shadowsArray:n,lights:e},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:r}}function Ep(s,t){let e=new WeakMap;function i(a,o=0){const r=e.get(a);let c;return r===void 0?(c=new oo(s,t),e.set(a,[c])):o>=r.length?(c=new oo(s,t),r.push(c)):c=r[o],c}function n(){e=new WeakMap}return{get:i,dispose:n}}class Sp extends Rn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=yc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Ap extends Rn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const bp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Pp=`uniform sampler2D shadow_pass;
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
}`;function wp(s,t,e){let i=new Pa;const n=new Gt,a=new Gt,o=new me,r=new Sp({depthPacking:xc}),c=new Ap,l={},u=e.maxTextureSize,f={[_i]:Re,[Re]:_i,[ni]:ni},p=new Oi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Gt},radius:{value:4}},vertexShader:bp,fragmentShader:Pp}),v=p.clone();v.defines.HORIZONTAL_PASS=1;const m=new qe;m.setAttribute("position",new Ke(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new te(m,p),h=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=To;let d=this.type;this.render=function(S,A,N){if(h.enabled===!1||h.autoUpdate===!1&&h.needsUpdate===!1||S.length===0)return;const M=s.getRenderTarget(),b=s.getActiveCubeFace(),z=s.getActiveMipmapLevel(),D=s.state;D.setBlending(mi),D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);const k=d!==ii&&this.type===ii,R=d===ii&&this.type!==ii;for(let I=0,B=S.length;I<B;I++){const j=S[I],J=j.shadow;if(J===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(J.autoUpdate===!1&&J.needsUpdate===!1)continue;n.copy(J.mapSize);const K=J.getFrameExtents();if(n.multiply(K),a.copy(J.mapSize),(n.x>u||n.y>u)&&(n.x>u&&(a.x=Math.floor(u/K.x),n.x=a.x*K.x,J.mapSize.x=a.x),n.y>u&&(a.y=Math.floor(u/K.y),n.y=a.y*K.y,J.mapSize.y=a.y)),J.map===null||k===!0||R===!0){const nt=this.type!==ii?{minFilter:Ae,magFilter:Ae}:{};J.map!==null&&J.map.dispose(),J.map=new Ii(n.x,n.y,nt),J.map.texture.name=j.name+".shadowMap",J.camera.updateProjectionMatrix()}s.setRenderTarget(J.map),s.clear();const Q=J.getViewportCount();for(let nt=0;nt<Q;nt++){const rt=J.getViewport(nt);o.set(a.x*rt.x,a.y*rt.y,a.x*rt.z,a.y*rt.w),D.viewport(o),J.updateMatrices(j,nt),i=J.getFrustum(),y(A,N,J.camera,j,this.type)}J.isPointLightShadow!==!0&&this.type===ii&&x(J,N),J.needsUpdate=!1}d=this.type,h.needsUpdate=!1,s.setRenderTarget(M,b,z)};function x(S,A){const N=t.update(g);p.defines.VSM_SAMPLES!==S.blurSamples&&(p.defines.VSM_SAMPLES=S.blurSamples,v.defines.VSM_SAMPLES=S.blurSamples,p.needsUpdate=!0,v.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new Ii(n.x,n.y)),p.uniforms.shadow_pass.value=S.map.texture,p.uniforms.resolution.value=S.mapSize,p.uniforms.radius.value=S.radius,s.setRenderTarget(S.mapPass),s.clear(),s.renderBufferDirect(A,null,N,p,g,null),v.uniforms.shadow_pass.value=S.mapPass.texture,v.uniforms.resolution.value=S.mapSize,v.uniforms.radius.value=S.radius,s.setRenderTarget(S.map),s.clear(),s.renderBufferDirect(A,null,N,v,g,null)}function _(S,A,N,M){let b=null;const z=N.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(z!==void 0)b=z;else if(b=N.isPointLight===!0?c:r,s.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const D=b.uuid,k=A.uuid;let R=l[D];R===void 0&&(R={},l[D]=R);let I=R[k];I===void 0&&(I=b.clone(),R[k]=I,A.addEventListener("dispose",T)),b=I}if(b.visible=A.visible,b.wireframe=A.wireframe,M===ii?b.side=A.shadowSide!==null?A.shadowSide:A.side:b.side=A.shadowSide!==null?A.shadowSide:f[A.side],b.alphaMap=A.alphaMap,b.alphaTest=A.alphaTest,b.map=A.map,b.clipShadows=A.clipShadows,b.clippingPlanes=A.clippingPlanes,b.clipIntersection=A.clipIntersection,b.displacementMap=A.displacementMap,b.displacementScale=A.displacementScale,b.displacementBias=A.displacementBias,b.wireframeLinewidth=A.wireframeLinewidth,b.linewidth=A.linewidth,N.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const D=s.properties.get(b);D.light=N}return b}function y(S,A,N,M,b){if(S.visible===!1)return;if(S.layers.test(A.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&b===ii)&&(!S.frustumCulled||i.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,S.matrixWorld);const k=t.update(S),R=S.material;if(Array.isArray(R)){const I=k.groups;for(let B=0,j=I.length;B<j;B++){const J=I[B],K=R[J.materialIndex];if(K&&K.visible){const Q=_(S,K,M,b);S.onBeforeShadow(s,S,A,N,k,Q,J),s.renderBufferDirect(N,null,k,Q,S,J),S.onAfterShadow(s,S,A,N,k,Q,J)}}}else if(R.visible){const I=_(S,R,M,b);S.onBeforeShadow(s,S,A,N,k,I,null),s.renderBufferDirect(N,null,k,I,S,null),S.onAfterShadow(s,S,A,N,k,I,null)}}const D=S.children;for(let k=0,R=D.length;k<R;k++)y(D[k],A,N,M,b)}function T(S){S.target.removeEventListener("dispose",T);for(const N in l){const M=l[N],b=S.target.uuid;b in M&&(M[b].dispose(),delete M[b])}}}function Cp(s,t,e){const i=e.isWebGL2;function n(){let U=!1;const gt=new me;let Tt=null;const zt=new me(0,0,0,0);return{setMask:function(Dt){Tt!==Dt&&!U&&(s.colorMask(Dt,Dt,Dt,Dt),Tt=Dt)},setLocked:function(Dt){U=Dt},setClear:function(Dt,qt,Zt,se,re){re===!0&&(Dt*=se,qt*=se,Zt*=se),gt.set(Dt,qt,Zt,se),zt.equals(gt)===!1&&(s.clearColor(Dt,qt,Zt,se),zt.copy(gt))},reset:function(){U=!1,Tt=null,zt.set(-1,0,0,0)}}}function a(){let U=!1,gt=null,Tt=null,zt=null;return{setTest:function(Dt){Dt?H(s.DEPTH_TEST):ct(s.DEPTH_TEST)},setMask:function(Dt){gt!==Dt&&!U&&(s.depthMask(Dt),gt=Dt)},setFunc:function(Dt){if(Tt!==Dt){switch(Dt){case ql:s.depthFunc(s.NEVER);break;case Zl:s.depthFunc(s.ALWAYS);break;case jl:s.depthFunc(s.LESS);break;case os:s.depthFunc(s.LEQUAL);break;case Jl:s.depthFunc(s.EQUAL);break;case Ql:s.depthFunc(s.GEQUAL);break;case tc:s.depthFunc(s.GREATER);break;case ec:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Tt=Dt}},setLocked:function(Dt){U=Dt},setClear:function(Dt){zt!==Dt&&(s.clearDepth(Dt),zt=Dt)},reset:function(){U=!1,gt=null,Tt=null,zt=null}}}function o(){let U=!1,gt=null,Tt=null,zt=null,Dt=null,qt=null,Zt=null,se=null,re=null;return{setTest:function(jt){U||(jt?H(s.STENCIL_TEST):ct(s.STENCIL_TEST))},setMask:function(jt){gt!==jt&&!U&&(s.stencilMask(jt),gt=jt)},setFunc:function(jt,le,Xe){(Tt!==jt||zt!==le||Dt!==Xe)&&(s.stencilFunc(jt,le,Xe),Tt=jt,zt=le,Dt=Xe)},setOp:function(jt,le,Xe){(qt!==jt||Zt!==le||se!==Xe)&&(s.stencilOp(jt,le,Xe),qt=jt,Zt=le,se=Xe)},setLocked:function(jt){U=jt},setClear:function(jt){re!==jt&&(s.clearStencil(jt),re=jt)},reset:function(){U=!1,gt=null,Tt=null,zt=null,Dt=null,qt=null,Zt=null,se=null,re=null}}}const r=new n,c=new a,l=new o,u=new WeakMap,f=new WeakMap;let p={},v={},m=new WeakMap,g=[],h=null,d=!1,x=null,_=null,y=null,T=null,S=null,A=null,N=null,M=new Jt(0,0,0),b=0,z=!1,D=null,k=null,R=null,I=null,B=null;const j=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let J=!1,K=0;const Q=s.getParameter(s.VERSION);Q.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(Q)[1]),J=K>=1):Q.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),J=K>=2);let nt=null,rt={};const X=s.getParameter(s.SCISSOR_BOX),st=s.getParameter(s.VIEWPORT),C=new me().fromArray(X),F=new me().fromArray(st);function $(U,gt,Tt,zt){const Dt=new Uint8Array(4),qt=s.createTexture();s.bindTexture(U,qt),s.texParameteri(U,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(U,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Zt=0;Zt<Tt;Zt++)i&&(U===s.TEXTURE_3D||U===s.TEXTURE_2D_ARRAY)?s.texImage3D(gt,0,s.RGBA,1,1,zt,0,s.RGBA,s.UNSIGNED_BYTE,Dt):s.texImage2D(gt+Zt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Dt);return qt}const V={};V[s.TEXTURE_2D]=$(s.TEXTURE_2D,s.TEXTURE_2D,1),V[s.TEXTURE_CUBE_MAP]=$(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(V[s.TEXTURE_2D_ARRAY]=$(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),V[s.TEXTURE_3D]=$(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),r.setClear(0,0,0,1),c.setClear(1),l.setClear(0),H(s.DEPTH_TEST),c.setFunc(os),bt(!1),P(Ha),H(s.CULL_FACE),ft(mi);function H(U){p[U]!==!0&&(s.enable(U),p[U]=!0)}function ct(U){p[U]!==!1&&(s.disable(U),p[U]=!1)}function Mt(U,gt){return v[U]!==gt?(s.bindFramebuffer(U,gt),v[U]=gt,i&&(U===s.DRAW_FRAMEBUFFER&&(v[s.FRAMEBUFFER]=gt),U===s.FRAMEBUFFER&&(v[s.DRAW_FRAMEBUFFER]=gt)),!0):!1}function Y(U,gt){let Tt=g,zt=!1;if(U)if(Tt=m.get(gt),Tt===void 0&&(Tt=[],m.set(gt,Tt)),U.isWebGLMultipleRenderTargets){const Dt=U.texture;if(Tt.length!==Dt.length||Tt[0]!==s.COLOR_ATTACHMENT0){for(let qt=0,Zt=Dt.length;qt<Zt;qt++)Tt[qt]=s.COLOR_ATTACHMENT0+qt;Tt.length=Dt.length,zt=!0}}else Tt[0]!==s.COLOR_ATTACHMENT0&&(Tt[0]=s.COLOR_ATTACHMENT0,zt=!0);else Tt[0]!==s.BACK&&(Tt[0]=s.BACK,zt=!0);zt&&(e.isWebGL2?s.drawBuffers(Tt):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(Tt))}function kt(U){return h!==U?(s.useProgram(U),h=U,!0):!1}const _t={[Pi]:s.FUNC_ADD,[Ol]:s.FUNC_SUBTRACT,[Nl]:s.FUNC_REVERSE_SUBTRACT};if(i)_t[Xa]=s.MIN,_t[$a]=s.MAX;else{const U=t.get("EXT_blend_minmax");U!==null&&(_t[Xa]=U.MIN_EXT,_t[$a]=U.MAX_EXT)}const yt={[Ul]:s.ZERO,[zl]:s.ONE,[Fl]:s.SRC_COLOR,[oa]:s.SRC_ALPHA,[Wl]:s.SRC_ALPHA_SATURATE,[Hl]:s.DST_COLOR,[Gl]:s.DST_ALPHA,[Bl]:s.ONE_MINUS_SRC_COLOR,[la]:s.ONE_MINUS_SRC_ALPHA,[Vl]:s.ONE_MINUS_DST_COLOR,[kl]:s.ONE_MINUS_DST_ALPHA,[Yl]:s.CONSTANT_COLOR,[Xl]:s.ONE_MINUS_CONSTANT_COLOR,[$l]:s.CONSTANT_ALPHA,[Kl]:s.ONE_MINUS_CONSTANT_ALPHA};function ft(U,gt,Tt,zt,Dt,qt,Zt,se,re,jt){if(U===mi){d===!0&&(ct(s.BLEND),d=!1);return}if(d===!1&&(H(s.BLEND),d=!0),U!==Dl){if(U!==x||jt!==z){if((_!==Pi||S!==Pi)&&(s.blendEquation(s.FUNC_ADD),_=Pi,S=Pi),jt)switch(U){case on:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Va:s.blendFunc(s.ONE,s.ONE);break;case Wa:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Ya:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case on:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Va:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Wa:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Ya:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}y=null,T=null,A=null,N=null,M.set(0,0,0),b=0,x=U,z=jt}return}Dt=Dt||gt,qt=qt||Tt,Zt=Zt||zt,(gt!==_||Dt!==S)&&(s.blendEquationSeparate(_t[gt],_t[Dt]),_=gt,S=Dt),(Tt!==y||zt!==T||qt!==A||Zt!==N)&&(s.blendFuncSeparate(yt[Tt],yt[zt],yt[qt],yt[Zt]),y=Tt,T=zt,A=qt,N=Zt),(se.equals(M)===!1||re!==b)&&(s.blendColor(se.r,se.g,se.b,re),M.copy(se),b=re),x=U,z=!1}function wt(U,gt){U.side===ni?ct(s.CULL_FACE):H(s.CULL_FACE);let Tt=U.side===Re;gt&&(Tt=!Tt),bt(Tt),U.blending===on&&U.transparent===!1?ft(mi):ft(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),c.setFunc(U.depthFunc),c.setTest(U.depthTest),c.setMask(U.depthWrite),r.setMask(U.colorWrite);const zt=U.stencilWrite;l.setTest(zt),zt&&(l.setMask(U.stencilWriteMask),l.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),l.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),G(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?H(s.SAMPLE_ALPHA_TO_COVERAGE):ct(s.SAMPLE_ALPHA_TO_COVERAGE)}function bt(U){D!==U&&(U?s.frontFace(s.CW):s.frontFace(s.CCW),D=U)}function P(U){U!==Rl?(H(s.CULL_FACE),U!==k&&(U===Ha?s.cullFace(s.BACK):U===Ll?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):ct(s.CULL_FACE),k=U}function E(U){U!==R&&(J&&s.lineWidth(U),R=U)}function G(U,gt,Tt){U?(H(s.POLYGON_OFFSET_FILL),(I!==gt||B!==Tt)&&(s.polygonOffset(gt,Tt),I=gt,B=Tt)):ct(s.POLYGON_OFFSET_FILL)}function at(U){U?H(s.SCISSOR_TEST):ct(s.SCISSOR_TEST)}function ot(U){U===void 0&&(U=s.TEXTURE0+j-1),nt!==U&&(s.activeTexture(U),nt=U)}function lt(U,gt,Tt){Tt===void 0&&(nt===null?Tt=s.TEXTURE0+j-1:Tt=nt);let zt=rt[Tt];zt===void 0&&(zt={type:void 0,texture:void 0},rt[Tt]=zt),(zt.type!==U||zt.texture!==gt)&&(nt!==Tt&&(s.activeTexture(Tt),nt=Tt),s.bindTexture(U,gt||V[U]),zt.type=U,zt.texture=gt)}function vt(){const U=rt[nt];U!==void 0&&U.type!==void 0&&(s.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function dt(){try{s.compressedTexImage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function pt(){try{s.compressedTexImage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Pt(){try{s.texSubImage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function It(){try{s.texSubImage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ht(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ut(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ot(){try{s.texStorage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Bt(){try{s.texStorage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ct(){try{s.texImage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Et(){try{s.texImage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function L(U){C.equals(U)===!1&&(s.scissor(U.x,U.y,U.z,U.w),C.copy(U))}function mt(U){F.equals(U)===!1&&(s.viewport(U.x,U.y,U.z,U.w),F.copy(U))}function Rt(U,gt){let Tt=f.get(gt);Tt===void 0&&(Tt=new WeakMap,f.set(gt,Tt));let zt=Tt.get(U);zt===void 0&&(zt=s.getUniformBlockIndex(gt,U.name),Tt.set(U,zt))}function At(U,gt){const zt=f.get(gt).get(U);u.get(gt)!==zt&&(s.uniformBlockBinding(gt,zt,U.__bindingPointIndex),u.set(gt,zt))}function ut(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),i===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),p={},nt=null,rt={},v={},m=new WeakMap,g=[],h=null,d=!1,x=null,_=null,y=null,T=null,S=null,A=null,N=null,M=new Jt(0,0,0),b=0,z=!1,D=null,k=null,R=null,I=null,B=null,C.set(0,0,s.canvas.width,s.canvas.height),F.set(0,0,s.canvas.width,s.canvas.height),r.reset(),c.reset(),l.reset()}return{buffers:{color:r,depth:c,stencil:l},enable:H,disable:ct,bindFramebuffer:Mt,drawBuffers:Y,useProgram:kt,setBlending:ft,setMaterial:wt,setFlipSided:bt,setCullFace:P,setLineWidth:E,setPolygonOffset:G,setScissorTest:at,activeTexture:ot,bindTexture:lt,unbindTexture:vt,compressedTexImage2D:dt,compressedTexImage3D:pt,texImage2D:Ct,texImage3D:Et,updateUBOMapping:Rt,uniformBlockBinding:At,texStorage2D:Ot,texStorage3D:Bt,texSubImage2D:Pt,texSubImage3D:It,compressedTexSubImage2D:ht,compressedTexSubImage3D:Ut,scissor:L,viewport:mt,reset:ut}}function Rp(s,t,e,i,n,a,o){const r=n.isWebGL2,c=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new WeakMap;let f;const p=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(P,E){return v?new OffscreenCanvas(P,E):us("canvas")}function g(P,E,G,at){let ot=1;if((P.width>at||P.height>at)&&(ot=at/Math.max(P.width,P.height)),ot<1||E===!0)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap){const lt=E?ma:Math.floor,vt=lt(ot*P.width),dt=lt(ot*P.height);f===void 0&&(f=m(vt,dt));const pt=G?m(vt,dt):f;return pt.width=vt,pt.height=dt,pt.getContext("2d").drawImage(P,0,0,vt,dt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+P.width+"x"+P.height+") to ("+vt+"x"+dt+")."),pt}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+P.width+"x"+P.height+")."),P;return P}function h(P){return Er(P.width)&&Er(P.height)}function d(P){return r?!1:P.wrapS!==We||P.wrapT!==We||P.minFilter!==Ae&&P.minFilter!==ze}function x(P,E){return P.generateMipmaps&&E&&P.minFilter!==Ae&&P.minFilter!==ze}function _(P){s.generateMipmap(P)}function y(P,E,G,at,ot=!1){if(r===!1)return E;if(P!==null){if(s[P]!==void 0)return s[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let lt=E;if(E===s.RED&&(G===s.FLOAT&&(lt=s.R32F),G===s.HALF_FLOAT&&(lt=s.R16F),G===s.UNSIGNED_BYTE&&(lt=s.R8)),E===s.RED_INTEGER&&(G===s.UNSIGNED_BYTE&&(lt=s.R8UI),G===s.UNSIGNED_SHORT&&(lt=s.R16UI),G===s.UNSIGNED_INT&&(lt=s.R32UI),G===s.BYTE&&(lt=s.R8I),G===s.SHORT&&(lt=s.R16I),G===s.INT&&(lt=s.R32I)),E===s.RG&&(G===s.FLOAT&&(lt=s.RG32F),G===s.HALF_FLOAT&&(lt=s.RG16F),G===s.UNSIGNED_BYTE&&(lt=s.RG8)),E===s.RGBA){const vt=ot?ls:Qt.getTransfer(at);G===s.FLOAT&&(lt=s.RGBA32F),G===s.HALF_FLOAT&&(lt=s.RGBA16F),G===s.UNSIGNED_BYTE&&(lt=vt===ee?s.SRGB8_ALPHA8:s.RGBA8),G===s.UNSIGNED_SHORT_4_4_4_4&&(lt=s.RGBA4),G===s.UNSIGNED_SHORT_5_5_5_1&&(lt=s.RGB5_A1)}return(lt===s.R16F||lt===s.R32F||lt===s.RG16F||lt===s.RG32F||lt===s.RGBA16F||lt===s.RGBA32F)&&t.get("EXT_color_buffer_float"),lt}function T(P,E,G){return x(P,G)===!0||P.isFramebufferTexture&&P.minFilter!==Ae&&P.minFilter!==ze?Math.log2(Math.max(E.width,E.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?E.mipmaps.length:1}function S(P){return P===Ae||P===Ka||P===bs?s.NEAREST:s.LINEAR}function A(P){const E=P.target;E.removeEventListener("dispose",A),M(E),E.isVideoTexture&&u.delete(E)}function N(P){const E=P.target;E.removeEventListener("dispose",N),z(E)}function M(P){const E=i.get(P);if(E.__webglInit===void 0)return;const G=P.source,at=p.get(G);if(at){const ot=at[E.__cacheKey];ot.usedTimes--,ot.usedTimes===0&&b(P),Object.keys(at).length===0&&p.delete(G)}i.remove(P)}function b(P){const E=i.get(P);s.deleteTexture(E.__webglTexture);const G=P.source,at=p.get(G);delete at[E.__cacheKey],o.memory.textures--}function z(P){const E=P.texture,G=i.get(P),at=i.get(E);if(at.__webglTexture!==void 0&&(s.deleteTexture(at.__webglTexture),o.memory.textures--),P.depthTexture&&P.depthTexture.dispose(),P.isWebGLCubeRenderTarget)for(let ot=0;ot<6;ot++){if(Array.isArray(G.__webglFramebuffer[ot]))for(let lt=0;lt<G.__webglFramebuffer[ot].length;lt++)s.deleteFramebuffer(G.__webglFramebuffer[ot][lt]);else s.deleteFramebuffer(G.__webglFramebuffer[ot]);G.__webglDepthbuffer&&s.deleteRenderbuffer(G.__webglDepthbuffer[ot])}else{if(Array.isArray(G.__webglFramebuffer))for(let ot=0;ot<G.__webglFramebuffer.length;ot++)s.deleteFramebuffer(G.__webglFramebuffer[ot]);else s.deleteFramebuffer(G.__webglFramebuffer);if(G.__webglDepthbuffer&&s.deleteRenderbuffer(G.__webglDepthbuffer),G.__webglMultisampledFramebuffer&&s.deleteFramebuffer(G.__webglMultisampledFramebuffer),G.__webglColorRenderbuffer)for(let ot=0;ot<G.__webglColorRenderbuffer.length;ot++)G.__webglColorRenderbuffer[ot]&&s.deleteRenderbuffer(G.__webglColorRenderbuffer[ot]);G.__webglDepthRenderbuffer&&s.deleteRenderbuffer(G.__webglDepthRenderbuffer)}if(P.isWebGLMultipleRenderTargets)for(let ot=0,lt=E.length;ot<lt;ot++){const vt=i.get(E[ot]);vt.__webglTexture&&(s.deleteTexture(vt.__webglTexture),o.memory.textures--),i.remove(E[ot])}i.remove(E),i.remove(P)}let D=0;function k(){D=0}function R(){const P=D;return P>=n.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+n.maxTextures),D+=1,P}function I(P){const E=[];return E.push(P.wrapS),E.push(P.wrapT),E.push(P.wrapR||0),E.push(P.magFilter),E.push(P.minFilter),E.push(P.anisotropy),E.push(P.internalFormat),E.push(P.format),E.push(P.type),E.push(P.generateMipmaps),E.push(P.premultiplyAlpha),E.push(P.flipY),E.push(P.unpackAlignment),E.push(P.colorSpace),E.join()}function B(P,E){const G=i.get(P);if(P.isVideoTexture&&wt(P),P.isRenderTargetTexture===!1&&P.version>0&&G.__version!==P.version){const at=P.image;if(at===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(at.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{C(G,P,E);return}}e.bindTexture(s.TEXTURE_2D,G.__webglTexture,s.TEXTURE0+E)}function j(P,E){const G=i.get(P);if(P.version>0&&G.__version!==P.version){C(G,P,E);return}e.bindTexture(s.TEXTURE_2D_ARRAY,G.__webglTexture,s.TEXTURE0+E)}function J(P,E){const G=i.get(P);if(P.version>0&&G.__version!==P.version){C(G,P,E);return}e.bindTexture(s.TEXTURE_3D,G.__webglTexture,s.TEXTURE0+E)}function K(P,E){const G=i.get(P);if(P.version>0&&G.__version!==P.version){F(G,P,E);return}e.bindTexture(s.TEXTURE_CUBE_MAP,G.__webglTexture,s.TEXTURE0+E)}const Q={[da]:s.REPEAT,[We]:s.CLAMP_TO_EDGE,[ua]:s.MIRRORED_REPEAT},nt={[Ae]:s.NEAREST,[Ka]:s.NEAREST_MIPMAP_NEAREST,[bs]:s.NEAREST_MIPMAP_LINEAR,[ze]:s.LINEAR,[hc]:s.LINEAR_MIPMAP_NEAREST,[An]:s.LINEAR_MIPMAP_LINEAR},rt={[Tc]:s.NEVER,[wc]:s.ALWAYS,[Ec]:s.LESS,[Do]:s.LEQUAL,[Sc]:s.EQUAL,[Pc]:s.GEQUAL,[Ac]:s.GREATER,[bc]:s.NOTEQUAL};function X(P,E,G){if(G?(s.texParameteri(P,s.TEXTURE_WRAP_S,Q[E.wrapS]),s.texParameteri(P,s.TEXTURE_WRAP_T,Q[E.wrapT]),(P===s.TEXTURE_3D||P===s.TEXTURE_2D_ARRAY)&&s.texParameteri(P,s.TEXTURE_WRAP_R,Q[E.wrapR]),s.texParameteri(P,s.TEXTURE_MAG_FILTER,nt[E.magFilter]),s.texParameteri(P,s.TEXTURE_MIN_FILTER,nt[E.minFilter])):(s.texParameteri(P,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(P,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(P===s.TEXTURE_3D||P===s.TEXTURE_2D_ARRAY)&&s.texParameteri(P,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(E.wrapS!==We||E.wrapT!==We)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(P,s.TEXTURE_MAG_FILTER,S(E.magFilter)),s.texParameteri(P,s.TEXTURE_MIN_FILTER,S(E.minFilter)),E.minFilter!==Ae&&E.minFilter!==ze&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),E.compareFunction&&(s.texParameteri(P,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(P,s.TEXTURE_COMPARE_FUNC,rt[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){const at=t.get("EXT_texture_filter_anisotropic");if(E.magFilter===Ae||E.minFilter!==bs&&E.minFilter!==An||E.type===pi&&t.has("OES_texture_float_linear")===!1||r===!1&&E.type===bn&&t.has("OES_texture_half_float_linear")===!1)return;(E.anisotropy>1||i.get(E).__currentAnisotropy)&&(s.texParameterf(P,at.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,n.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy)}}function st(P,E){let G=!1;P.__webglInit===void 0&&(P.__webglInit=!0,E.addEventListener("dispose",A));const at=E.source;let ot=p.get(at);ot===void 0&&(ot={},p.set(at,ot));const lt=I(E);if(lt!==P.__cacheKey){ot[lt]===void 0&&(ot[lt]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,G=!0),ot[lt].usedTimes++;const vt=ot[P.__cacheKey];vt!==void 0&&(ot[P.__cacheKey].usedTimes--,vt.usedTimes===0&&b(E)),P.__cacheKey=lt,P.__webglTexture=ot[lt].texture}return G}function C(P,E,G){let at=s.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(at=s.TEXTURE_2D_ARRAY),E.isData3DTexture&&(at=s.TEXTURE_3D);const ot=st(P,E),lt=E.source;e.bindTexture(at,P.__webglTexture,s.TEXTURE0+G);const vt=i.get(lt);if(lt.version!==vt.__version||ot===!0){e.activeTexture(s.TEXTURE0+G);const dt=Qt.getPrimaries(Qt.workingColorSpace),pt=E.colorSpace===Be?null:Qt.getPrimaries(E.colorSpace),Pt=E.colorSpace===Be||dt===pt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pt);const It=d(E)&&h(E.image)===!1;let ht=g(E.image,It,!1,n.maxTextureSize);ht=bt(E,ht);const Ut=h(ht)||r,Ot=a.convert(E.format,E.colorSpace);let Bt=a.convert(E.type),Ct=y(E.internalFormat,Ot,Bt,E.colorSpace,E.isVideoTexture);X(at,E,Ut);let Et;const L=E.mipmaps,mt=r&&E.isVideoTexture!==!0&&Ct!==Ro,Rt=vt.__version===void 0||ot===!0,At=T(E,ht,Ut);if(E.isDepthTexture)Ct=s.DEPTH_COMPONENT,r?E.type===pi?Ct=s.DEPTH_COMPONENT32F:E.type===fi?Ct=s.DEPTH_COMPONENT24:E.type===Ci?Ct=s.DEPTH24_STENCIL8:Ct=s.DEPTH_COMPONENT16:E.type===pi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),E.format===Ri&&Ct===s.DEPTH_COMPONENT&&E.type!==Ta&&E.type!==fi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),E.type=fi,Bt=a.convert(E.type)),E.format===dn&&Ct===s.DEPTH_COMPONENT&&(Ct=s.DEPTH_STENCIL,E.type!==Ci&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),E.type=Ci,Bt=a.convert(E.type))),Rt&&(mt?e.texStorage2D(s.TEXTURE_2D,1,Ct,ht.width,ht.height):e.texImage2D(s.TEXTURE_2D,0,Ct,ht.width,ht.height,0,Ot,Bt,null));else if(E.isDataTexture)if(L.length>0&&Ut){mt&&Rt&&e.texStorage2D(s.TEXTURE_2D,At,Ct,L[0].width,L[0].height);for(let ut=0,U=L.length;ut<U;ut++)Et=L[ut],mt?e.texSubImage2D(s.TEXTURE_2D,ut,0,0,Et.width,Et.height,Ot,Bt,Et.data):e.texImage2D(s.TEXTURE_2D,ut,Ct,Et.width,Et.height,0,Ot,Bt,Et.data);E.generateMipmaps=!1}else mt?(Rt&&e.texStorage2D(s.TEXTURE_2D,At,Ct,ht.width,ht.height),e.texSubImage2D(s.TEXTURE_2D,0,0,0,ht.width,ht.height,Ot,Bt,ht.data)):e.texImage2D(s.TEXTURE_2D,0,Ct,ht.width,ht.height,0,Ot,Bt,ht.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){mt&&Rt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,At,Ct,L[0].width,L[0].height,ht.depth);for(let ut=0,U=L.length;ut<U;ut++)Et=L[ut],E.format!==Ye?Ot!==null?mt?e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ut,0,0,0,Et.width,Et.height,ht.depth,Ot,Et.data,0,0):e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ut,Ct,Et.width,Et.height,ht.depth,0,Et.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):mt?e.texSubImage3D(s.TEXTURE_2D_ARRAY,ut,0,0,0,Et.width,Et.height,ht.depth,Ot,Bt,Et.data):e.texImage3D(s.TEXTURE_2D_ARRAY,ut,Ct,Et.width,Et.height,ht.depth,0,Ot,Bt,Et.data)}else{mt&&Rt&&e.texStorage2D(s.TEXTURE_2D,At,Ct,L[0].width,L[0].height);for(let ut=0,U=L.length;ut<U;ut++)Et=L[ut],E.format!==Ye?Ot!==null?mt?e.compressedTexSubImage2D(s.TEXTURE_2D,ut,0,0,Et.width,Et.height,Ot,Et.data):e.compressedTexImage2D(s.TEXTURE_2D,ut,Ct,Et.width,Et.height,0,Et.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):mt?e.texSubImage2D(s.TEXTURE_2D,ut,0,0,Et.width,Et.height,Ot,Bt,Et.data):e.texImage2D(s.TEXTURE_2D,ut,Ct,Et.width,Et.height,0,Ot,Bt,Et.data)}else if(E.isDataArrayTexture)mt?(Rt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,At,Ct,ht.width,ht.height,ht.depth),e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ht.width,ht.height,ht.depth,Ot,Bt,ht.data)):e.texImage3D(s.TEXTURE_2D_ARRAY,0,Ct,ht.width,ht.height,ht.depth,0,Ot,Bt,ht.data);else if(E.isData3DTexture)mt?(Rt&&e.texStorage3D(s.TEXTURE_3D,At,Ct,ht.width,ht.height,ht.depth),e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ht.width,ht.height,ht.depth,Ot,Bt,ht.data)):e.texImage3D(s.TEXTURE_3D,0,Ct,ht.width,ht.height,ht.depth,0,Ot,Bt,ht.data);else if(E.isFramebufferTexture){if(Rt)if(mt)e.texStorage2D(s.TEXTURE_2D,At,Ct,ht.width,ht.height);else{let ut=ht.width,U=ht.height;for(let gt=0;gt<At;gt++)e.texImage2D(s.TEXTURE_2D,gt,Ct,ut,U,0,Ot,Bt,null),ut>>=1,U>>=1}}else if(L.length>0&&Ut){mt&&Rt&&e.texStorage2D(s.TEXTURE_2D,At,Ct,L[0].width,L[0].height);for(let ut=0,U=L.length;ut<U;ut++)Et=L[ut],mt?e.texSubImage2D(s.TEXTURE_2D,ut,0,0,Ot,Bt,Et):e.texImage2D(s.TEXTURE_2D,ut,Ct,Ot,Bt,Et);E.generateMipmaps=!1}else mt?(Rt&&e.texStorage2D(s.TEXTURE_2D,At,Ct,ht.width,ht.height),e.texSubImage2D(s.TEXTURE_2D,0,0,0,Ot,Bt,ht)):e.texImage2D(s.TEXTURE_2D,0,Ct,Ot,Bt,ht);x(E,Ut)&&_(at),vt.__version=lt.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function F(P,E,G){if(E.image.length!==6)return;const at=st(P,E),ot=E.source;e.bindTexture(s.TEXTURE_CUBE_MAP,P.__webglTexture,s.TEXTURE0+G);const lt=i.get(ot);if(ot.version!==lt.__version||at===!0){e.activeTexture(s.TEXTURE0+G);const vt=Qt.getPrimaries(Qt.workingColorSpace),dt=E.colorSpace===Be?null:Qt.getPrimaries(E.colorSpace),pt=E.colorSpace===Be||vt===dt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,pt);const Pt=E.isCompressedTexture||E.image[0].isCompressedTexture,It=E.image[0]&&E.image[0].isDataTexture,ht=[];for(let ut=0;ut<6;ut++)!Pt&&!It?ht[ut]=g(E.image[ut],!1,!0,n.maxCubemapSize):ht[ut]=It?E.image[ut].image:E.image[ut],ht[ut]=bt(E,ht[ut]);const Ut=ht[0],Ot=h(Ut)||r,Bt=a.convert(E.format,E.colorSpace),Ct=a.convert(E.type),Et=y(E.internalFormat,Bt,Ct,E.colorSpace),L=r&&E.isVideoTexture!==!0,mt=lt.__version===void 0||at===!0;let Rt=T(E,Ut,Ot);X(s.TEXTURE_CUBE_MAP,E,Ot);let At;if(Pt){L&&mt&&e.texStorage2D(s.TEXTURE_CUBE_MAP,Rt,Et,Ut.width,Ut.height);for(let ut=0;ut<6;ut++){At=ht[ut].mipmaps;for(let U=0;U<At.length;U++){const gt=At[U];E.format!==Ye?Bt!==null?L?e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ut,U,0,0,gt.width,gt.height,Bt,gt.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ut,U,Et,gt.width,gt.height,0,gt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ut,U,0,0,gt.width,gt.height,Bt,Ct,gt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ut,U,Et,gt.width,gt.height,0,Bt,Ct,gt.data)}}}else{At=E.mipmaps,L&&mt&&(At.length>0&&Rt++,e.texStorage2D(s.TEXTURE_CUBE_MAP,Rt,Et,ht[0].width,ht[0].height));for(let ut=0;ut<6;ut++)if(It){L?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,0,0,ht[ut].width,ht[ut].height,Bt,Ct,ht[ut].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,Et,ht[ut].width,ht[ut].height,0,Bt,Ct,ht[ut].data);for(let U=0;U<At.length;U++){const Tt=At[U].image[ut].image;L?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ut,U+1,0,0,Tt.width,Tt.height,Bt,Ct,Tt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ut,U+1,Et,Tt.width,Tt.height,0,Bt,Ct,Tt.data)}}else{L?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,0,0,Bt,Ct,ht[ut]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,Et,Bt,Ct,ht[ut]);for(let U=0;U<At.length;U++){const gt=At[U];L?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ut,U+1,0,0,Bt,Ct,gt.image[ut]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ut,U+1,Et,Bt,Ct,gt.image[ut])}}}x(E,Ot)&&_(s.TEXTURE_CUBE_MAP),lt.__version=ot.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function $(P,E,G,at,ot,lt){const vt=a.convert(G.format,G.colorSpace),dt=a.convert(G.type),pt=y(G.internalFormat,vt,dt,G.colorSpace);if(!i.get(E).__hasExternalTextures){const It=Math.max(1,E.width>>lt),ht=Math.max(1,E.height>>lt);ot===s.TEXTURE_3D||ot===s.TEXTURE_2D_ARRAY?e.texImage3D(ot,lt,pt,It,ht,E.depth,0,vt,dt,null):e.texImage2D(ot,lt,pt,It,ht,0,vt,dt,null)}e.bindFramebuffer(s.FRAMEBUFFER,P),ft(E)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,at,ot,i.get(G).__webglTexture,0,yt(E)):(ot===s.TEXTURE_2D||ot>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ot<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,at,ot,i.get(G).__webglTexture,lt),e.bindFramebuffer(s.FRAMEBUFFER,null)}function V(P,E,G){if(s.bindRenderbuffer(s.RENDERBUFFER,P),E.depthBuffer&&!E.stencilBuffer){let at=r===!0?s.DEPTH_COMPONENT24:s.DEPTH_COMPONENT16;if(G||ft(E)){const ot=E.depthTexture;ot&&ot.isDepthTexture&&(ot.type===pi?at=s.DEPTH_COMPONENT32F:ot.type===fi&&(at=s.DEPTH_COMPONENT24));const lt=yt(E);ft(E)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,lt,at,E.width,E.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,lt,at,E.width,E.height)}else s.renderbufferStorage(s.RENDERBUFFER,at,E.width,E.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,P)}else if(E.depthBuffer&&E.stencilBuffer){const at=yt(E);G&&ft(E)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,at,s.DEPTH24_STENCIL8,E.width,E.height):ft(E)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,at,s.DEPTH24_STENCIL8,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,P)}else{const at=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let ot=0;ot<at.length;ot++){const lt=at[ot],vt=a.convert(lt.format,lt.colorSpace),dt=a.convert(lt.type),pt=y(lt.internalFormat,vt,dt,lt.colorSpace),Pt=yt(E);G&&ft(E)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Pt,pt,E.width,E.height):ft(E)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Pt,pt,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,pt,E.width,E.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function H(P,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,P),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),B(E.depthTexture,0);const at=i.get(E.depthTexture).__webglTexture,ot=yt(E);if(E.depthTexture.format===Ri)ft(E)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,at,0,ot):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,at,0);else if(E.depthTexture.format===dn)ft(E)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,at,0,ot):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,at,0);else throw new Error("Unknown depthTexture format")}function ct(P){const E=i.get(P),G=P.isWebGLCubeRenderTarget===!0;if(P.depthTexture&&!E.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");H(E.__webglFramebuffer,P)}else if(G){E.__webglDepthbuffer=[];for(let at=0;at<6;at++)e.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[at]),E.__webglDepthbuffer[at]=s.createRenderbuffer(),V(E.__webglDepthbuffer[at],P,!1)}else e.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer=s.createRenderbuffer(),V(E.__webglDepthbuffer,P,!1);e.bindFramebuffer(s.FRAMEBUFFER,null)}function Mt(P,E,G){const at=i.get(P);E!==void 0&&$(at.__webglFramebuffer,P,P.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),G!==void 0&&ct(P)}function Y(P){const E=P.texture,G=i.get(P),at=i.get(E);P.addEventListener("dispose",N),P.isWebGLMultipleRenderTargets!==!0&&(at.__webglTexture===void 0&&(at.__webglTexture=s.createTexture()),at.__version=E.version,o.memory.textures++);const ot=P.isWebGLCubeRenderTarget===!0,lt=P.isWebGLMultipleRenderTargets===!0,vt=h(P)||r;if(ot){G.__webglFramebuffer=[];for(let dt=0;dt<6;dt++)if(r&&E.mipmaps&&E.mipmaps.length>0){G.__webglFramebuffer[dt]=[];for(let pt=0;pt<E.mipmaps.length;pt++)G.__webglFramebuffer[dt][pt]=s.createFramebuffer()}else G.__webglFramebuffer[dt]=s.createFramebuffer()}else{if(r&&E.mipmaps&&E.mipmaps.length>0){G.__webglFramebuffer=[];for(let dt=0;dt<E.mipmaps.length;dt++)G.__webglFramebuffer[dt]=s.createFramebuffer()}else G.__webglFramebuffer=s.createFramebuffer();if(lt)if(n.drawBuffers){const dt=P.texture;for(let pt=0,Pt=dt.length;pt<Pt;pt++){const It=i.get(dt[pt]);It.__webglTexture===void 0&&(It.__webglTexture=s.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(r&&P.samples>0&&ft(P)===!1){const dt=lt?E:[E];G.__webglMultisampledFramebuffer=s.createFramebuffer(),G.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let pt=0;pt<dt.length;pt++){const Pt=dt[pt];G.__webglColorRenderbuffer[pt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,G.__webglColorRenderbuffer[pt]);const It=a.convert(Pt.format,Pt.colorSpace),ht=a.convert(Pt.type),Ut=y(Pt.internalFormat,It,ht,Pt.colorSpace,P.isXRRenderTarget===!0),Ot=yt(P);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ot,Ut,P.width,P.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+pt,s.RENDERBUFFER,G.__webglColorRenderbuffer[pt])}s.bindRenderbuffer(s.RENDERBUFFER,null),P.depthBuffer&&(G.__webglDepthRenderbuffer=s.createRenderbuffer(),V(G.__webglDepthRenderbuffer,P,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ot){e.bindTexture(s.TEXTURE_CUBE_MAP,at.__webglTexture),X(s.TEXTURE_CUBE_MAP,E,vt);for(let dt=0;dt<6;dt++)if(r&&E.mipmaps&&E.mipmaps.length>0)for(let pt=0;pt<E.mipmaps.length;pt++)$(G.__webglFramebuffer[dt][pt],P,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+dt,pt);else $(G.__webglFramebuffer[dt],P,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0);x(E,vt)&&_(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(lt){const dt=P.texture;for(let pt=0,Pt=dt.length;pt<Pt;pt++){const It=dt[pt],ht=i.get(It);e.bindTexture(s.TEXTURE_2D,ht.__webglTexture),X(s.TEXTURE_2D,It,vt),$(G.__webglFramebuffer,P,It,s.COLOR_ATTACHMENT0+pt,s.TEXTURE_2D,0),x(It,vt)&&_(s.TEXTURE_2D)}e.unbindTexture()}else{let dt=s.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(r?dt=P.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(dt,at.__webglTexture),X(dt,E,vt),r&&E.mipmaps&&E.mipmaps.length>0)for(let pt=0;pt<E.mipmaps.length;pt++)$(G.__webglFramebuffer[pt],P,E,s.COLOR_ATTACHMENT0,dt,pt);else $(G.__webglFramebuffer,P,E,s.COLOR_ATTACHMENT0,dt,0);x(E,vt)&&_(dt),e.unbindTexture()}P.depthBuffer&&ct(P)}function kt(P){const E=h(P)||r,G=P.isWebGLMultipleRenderTargets===!0?P.texture:[P.texture];for(let at=0,ot=G.length;at<ot;at++){const lt=G[at];if(x(lt,E)){const vt=P.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,dt=i.get(lt).__webglTexture;e.bindTexture(vt,dt),_(vt),e.unbindTexture()}}}function _t(P){if(r&&P.samples>0&&ft(P)===!1){const E=P.isWebGLMultipleRenderTargets?P.texture:[P.texture],G=P.width,at=P.height;let ot=s.COLOR_BUFFER_BIT;const lt=[],vt=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,dt=i.get(P),pt=P.isWebGLMultipleRenderTargets===!0;if(pt)for(let Pt=0;Pt<E.length;Pt++)e.bindFramebuffer(s.FRAMEBUFFER,dt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Pt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,dt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Pt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,dt.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,dt.__webglFramebuffer);for(let Pt=0;Pt<E.length;Pt++){lt.push(s.COLOR_ATTACHMENT0+Pt),P.depthBuffer&&lt.push(vt);const It=dt.__ignoreDepthValues!==void 0?dt.__ignoreDepthValues:!1;if(It===!1&&(P.depthBuffer&&(ot|=s.DEPTH_BUFFER_BIT),P.stencilBuffer&&(ot|=s.STENCIL_BUFFER_BIT)),pt&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,dt.__webglColorRenderbuffer[Pt]),It===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[vt]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[vt])),pt){const ht=i.get(E[Pt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,ht,0)}s.blitFramebuffer(0,0,G,at,0,0,G,at,ot,s.NEAREST),l&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,lt)}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),pt)for(let Pt=0;Pt<E.length;Pt++){e.bindFramebuffer(s.FRAMEBUFFER,dt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Pt,s.RENDERBUFFER,dt.__webglColorRenderbuffer[Pt]);const It=i.get(E[Pt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,dt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Pt,s.TEXTURE_2D,It,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,dt.__webglMultisampledFramebuffer)}}function yt(P){return Math.min(n.maxSamples,P.samples)}function ft(P){const E=i.get(P);return r&&P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function wt(P){const E=o.render.frame;u.get(P)!==E&&(u.set(P,E),P.update())}function bt(P,E){const G=P.colorSpace,at=P.format,ot=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||P.format===fa||G!==ai&&G!==Be&&(Qt.getTransfer(G)===ee?r===!1?t.has("EXT_sRGB")===!0&&at===Ye?(P.format=fa,P.minFilter=ze,P.generateMipmaps=!1):E=No.sRGBToLinear(E):(at!==Ye||ot!==vi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),E}this.allocateTextureUnit=R,this.resetTextureUnits=k,this.setTexture2D=B,this.setTexture2DArray=j,this.setTexture3D=J,this.setTextureCube=K,this.rebindTextures=Mt,this.setupRenderTarget=Y,this.updateRenderTargetMipmap=kt,this.updateMultisampleRenderTarget=_t,this.setupDepthRenderbuffer=ct,this.setupFrameBufferTexture=$,this.useMultisampledRTT=ft}function Lp(s,t,e){const i=e.isWebGL2;function n(a,o=Be){let r;const c=Qt.getTransfer(o);if(a===vi)return s.UNSIGNED_BYTE;if(a===Ao)return s.UNSIGNED_SHORT_4_4_4_4;if(a===bo)return s.UNSIGNED_SHORT_5_5_5_1;if(a===dc)return s.BYTE;if(a===uc)return s.SHORT;if(a===Ta)return s.UNSIGNED_SHORT;if(a===So)return s.INT;if(a===fi)return s.UNSIGNED_INT;if(a===pi)return s.FLOAT;if(a===bn)return i?s.HALF_FLOAT:(r=t.get("OES_texture_half_float"),r!==null?r.HALF_FLOAT_OES:null);if(a===fc)return s.ALPHA;if(a===Ye)return s.RGBA;if(a===pc)return s.LUMINANCE;if(a===mc)return s.LUMINANCE_ALPHA;if(a===Ri)return s.DEPTH_COMPONENT;if(a===dn)return s.DEPTH_STENCIL;if(a===fa)return r=t.get("EXT_sRGB"),r!==null?r.SRGB_ALPHA_EXT:null;if(a===gc)return s.RED;if(a===Po)return s.RED_INTEGER;if(a===vc)return s.RG;if(a===wo)return s.RG_INTEGER;if(a===Co)return s.RGBA_INTEGER;if(a===Ps||a===ws||a===Cs||a===Rs)if(c===ee)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(a===Ps)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===ws)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===Cs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===Rs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(a===Ps)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===ws)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===Cs)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===Rs)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===qa||a===Za||a===ja||a===Ja)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(a===qa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===Za)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===ja)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===Ja)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===Ro)return r=t.get("WEBGL_compressed_texture_etc1"),r!==null?r.COMPRESSED_RGB_ETC1_WEBGL:null;if(a===Qa||a===tr)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(a===Qa)return c===ee?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(a===tr)return c===ee?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(a===er||a===ir||a===nr||a===sr||a===ar||a===rr||a===or||a===lr||a===cr||a===hr||a===dr||a===ur||a===fr||a===pr)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(a===er)return c===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===ir)return c===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===nr)return c===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===sr)return c===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===ar)return c===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===rr)return c===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===or)return c===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===lr)return c===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===cr)return c===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===hr)return c===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===dr)return c===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===ur)return c===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===fr)return c===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===pr)return c===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===Ls||a===mr||a===gr)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(a===Ls)return c===ee?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===mr)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===gr)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===_c||a===vr||a===_r||a===yr)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(a===Ls)return r.COMPRESSED_RED_RGTC1_EXT;if(a===vr)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===_r)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===yr)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===Ci?i?s.UNSIGNED_INT_24_8:(r=t.get("WEBGL_depth_texture"),r!==null?r.UNSIGNED_INT_24_8_WEBGL:null):s[a]!==void 0?s[a]:null}return{convert:n}}class Ip extends Fe{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class xn extends Me{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Dp={type:"move"};class ea{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new xn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new xn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new xn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let n=null,a=null,o=null;const r=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const g of t.hand.values()){const h=e.getJointPose(g,i),d=this._getHandJoint(l,g);h!==null&&(d.matrix.fromArray(h.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=h.radius),d.visible=h!==null}const u=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],p=u.position.distanceTo(f.position),v=.02,m=.005;l.inputState.pinching&&p>v+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&p<=v-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(a=e.getPose(t.gripSpace,i),a!==null&&(c.matrix.fromArray(a.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,a.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(a.linearVelocity)):c.hasLinearVelocity=!1,a.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(a.angularVelocity)):c.hasAngularVelocity=!1));r!==null&&(n=e.getPose(t.targetRaySpace,i),n===null&&a!==null&&(n=a),n!==null&&(r.matrix.fromArray(n.transform.matrix),r.matrix.decompose(r.position,r.rotation,r.scale),r.matrixWorldNeedsUpdate=!0,n.linearVelocity?(r.hasLinearVelocity=!0,r.linearVelocity.copy(n.linearVelocity)):r.hasLinearVelocity=!1,n.angularVelocity?(r.hasAngularVelocity=!0,r.angularVelocity.copy(n.angularVelocity)):r.hasAngularVelocity=!1,this.dispatchEvent(Dp)))}return r!==null&&(r.visible=n!==null),c!==null&&(c.visible=a!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new xn;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}class Op extends Ni{constructor(t,e){super();const i=this;let n=null,a=1,o=null,r="local-floor",c=1,l=null,u=null,f=null,p=null,v=null,m=null;const g=e.getContextAttributes();let h=null,d=null;const x=[],_=[],y=new Gt;let T=null;const S=new Fe;S.layers.enable(1),S.viewport=new me;const A=new Fe;A.layers.enable(2),A.viewport=new me;const N=[S,A],M=new Ip;M.layers.enable(1),M.layers.enable(2);let b=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let st=x[X];return st===void 0&&(st=new ea,x[X]=st),st.getTargetRaySpace()},this.getControllerGrip=function(X){let st=x[X];return st===void 0&&(st=new ea,x[X]=st),st.getGripSpace()},this.getHand=function(X){let st=x[X];return st===void 0&&(st=new ea,x[X]=st),st.getHandSpace()};function D(X){const st=_.indexOf(X.inputSource);if(st===-1)return;const C=x[st];C!==void 0&&(C.update(X.inputSource,X.frame,l||o),C.dispatchEvent({type:X.type,data:X.inputSource}))}function k(){n.removeEventListener("select",D),n.removeEventListener("selectstart",D),n.removeEventListener("selectend",D),n.removeEventListener("squeeze",D),n.removeEventListener("squeezestart",D),n.removeEventListener("squeezeend",D),n.removeEventListener("end",k),n.removeEventListener("inputsourceschange",R);for(let X=0;X<x.length;X++){const st=_[X];st!==null&&(_[X]=null,x[X].disconnect(st))}b=null,z=null,t.setRenderTarget(h),v=null,p=null,f=null,n=null,d=null,rt.stop(),i.isPresenting=!1,t.setPixelRatio(T),t.setSize(y.width,y.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){a=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){r=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(X){l=X},this.getBaseLayer=function(){return p!==null?p:v},this.getBinding=function(){return f},this.getFrame=function(){return m},this.getSession=function(){return n},this.setSession=async function(X){if(n=X,n!==null){if(h=t.getRenderTarget(),n.addEventListener("select",D),n.addEventListener("selectstart",D),n.addEventListener("selectend",D),n.addEventListener("squeeze",D),n.addEventListener("squeezestart",D),n.addEventListener("squeezeend",D),n.addEventListener("end",k),n.addEventListener("inputsourceschange",R),g.xrCompatible!==!0&&await e.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(y),n.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const st={antialias:n.renderState.layers===void 0?g.antialias:!0,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:a};v=new XRWebGLLayer(n,e,st),n.updateRenderState({baseLayer:v}),t.setPixelRatio(1),t.setSize(v.framebufferWidth,v.framebufferHeight,!1),d=new Ii(v.framebufferWidth,v.framebufferHeight,{format:Ye,type:vi,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}else{let st=null,C=null,F=null;g.depth&&(F=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,st=g.stencil?dn:Ri,C=g.stencil?Ci:fi);const $={colorFormat:e.RGBA8,depthFormat:F,scaleFactor:a};f=new XRWebGLBinding(n,e),p=f.createProjectionLayer($),n.updateRenderState({layers:[p]}),t.setPixelRatio(1),t.setSize(p.textureWidth,p.textureHeight,!1),d=new Ii(p.textureWidth,p.textureHeight,{format:Ye,type:vi,depthTexture:new Xo(p.textureWidth,p.textureHeight,C,void 0,void 0,void 0,void 0,void 0,void 0,st),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0});const V=t.properties.get(d);V.__ignoreDepthValues=p.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await n.requestReferenceSpace(r),rt.setContext(n),rt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode};function R(X){for(let st=0;st<X.removed.length;st++){const C=X.removed[st],F=_.indexOf(C);F>=0&&(_[F]=null,x[F].disconnect(C))}for(let st=0;st<X.added.length;st++){const C=X.added[st];let F=_.indexOf(C);if(F===-1){for(let V=0;V<x.length;V++)if(V>=_.length){_.push(C),F=V;break}else if(_[V]===null){_[V]=C,F=V;break}if(F===-1)break}const $=x[F];$&&$.connect(C)}}const I=new W,B=new W;function j(X,st,C){I.setFromMatrixPosition(st.matrixWorld),B.setFromMatrixPosition(C.matrixWorld);const F=I.distanceTo(B),$=st.projectionMatrix.elements,V=C.projectionMatrix.elements,H=$[14]/($[10]-1),ct=$[14]/($[10]+1),Mt=($[9]+1)/$[5],Y=($[9]-1)/$[5],kt=($[8]-1)/$[0],_t=(V[8]+1)/V[0],yt=H*kt,ft=H*_t,wt=F/(-kt+_t),bt=wt*-kt;st.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(bt),X.translateZ(wt),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert();const P=H+wt,E=ct+wt,G=yt-bt,at=ft+(F-bt),ot=Mt*ct/E*P,lt=Y*ct/E*P;X.projectionMatrix.makePerspective(G,at,ot,lt,P,E),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}function J(X,st){st===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(st.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(n===null)return;M.near=A.near=S.near=X.near,M.far=A.far=S.far=X.far,(b!==M.near||z!==M.far)&&(n.updateRenderState({depthNear:M.near,depthFar:M.far}),b=M.near,z=M.far);const st=X.parent,C=M.cameras;J(M,st);for(let F=0;F<C.length;F++)J(C[F],st);C.length===2?j(M,S,A):M.projectionMatrix.copy(S.projectionMatrix),K(X,M,st)};function K(X,st,C){C===null?X.matrix.copy(st.matrixWorld):(X.matrix.copy(C.matrixWorld),X.matrix.invert(),X.matrix.multiply(st.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(st.projectionMatrix),X.projectionMatrixInverse.copy(st.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=pa*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(p===null&&v===null))return c},this.setFoveation=function(X){c=X,p!==null&&(p.fixedFoveation=X),v!==null&&v.fixedFoveation!==void 0&&(v.fixedFoveation=X)};let Q=null;function nt(X,st){if(u=st.getViewerPose(l||o),m=st,u!==null){const C=u.views;v!==null&&(t.setRenderTargetFramebuffer(d,v.framebuffer),t.setRenderTarget(d));let F=!1;C.length!==M.cameras.length&&(M.cameras.length=0,F=!0);for(let $=0;$<C.length;$++){const V=C[$];let H=null;if(v!==null)H=v.getViewport(V);else{const Mt=f.getViewSubImage(p,V);H=Mt.viewport,$===0&&(t.setRenderTargetTextures(d,Mt.colorTexture,p.ignoreDepthValues?void 0:Mt.depthStencilTexture),t.setRenderTarget(d))}let ct=N[$];ct===void 0&&(ct=new Fe,ct.layers.enable($),ct.viewport=new me,N[$]=ct),ct.matrix.fromArray(V.transform.matrix),ct.matrix.decompose(ct.position,ct.quaternion,ct.scale),ct.projectionMatrix.fromArray(V.projectionMatrix),ct.projectionMatrixInverse.copy(ct.projectionMatrix).invert(),ct.viewport.set(H.x,H.y,H.width,H.height),$===0&&(M.matrix.copy(ct.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),F===!0&&M.cameras.push(ct)}}for(let C=0;C<x.length;C++){const F=_[C],$=x[C];F!==null&&$!==void 0&&$.update(F,st,l||o)}Q&&Q(X,st),st.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:st}),m=null}const rt=new Wo;rt.setAnimationLoop(nt),this.setAnimationLoop=function(X){Q=X},this.dispose=function(){}}}function Np(s,t){function e(h,d){h.matrixAutoUpdate===!0&&h.updateMatrix(),d.value.copy(h.matrix)}function i(h,d){d.color.getRGB(h.fogColor.value,ko(s)),d.isFog?(h.fogNear.value=d.near,h.fogFar.value=d.far):d.isFogExp2&&(h.fogDensity.value=d.density)}function n(h,d,x,_,y){d.isMeshBasicMaterial||d.isMeshLambertMaterial?a(h,d):d.isMeshToonMaterial?(a(h,d),f(h,d)):d.isMeshPhongMaterial?(a(h,d),u(h,d)):d.isMeshStandardMaterial?(a(h,d),p(h,d),d.isMeshPhysicalMaterial&&v(h,d,y)):d.isMeshMatcapMaterial?(a(h,d),m(h,d)):d.isMeshDepthMaterial?a(h,d):d.isMeshDistanceMaterial?(a(h,d),g(h,d)):d.isMeshNormalMaterial?a(h,d):d.isLineBasicMaterial?(o(h,d),d.isLineDashedMaterial&&r(h,d)):d.isPointsMaterial?c(h,d,x,_):d.isSpriteMaterial?l(h,d):d.isShadowMaterial?(h.color.value.copy(d.color),h.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function a(h,d){h.opacity.value=d.opacity,d.color&&h.diffuse.value.copy(d.color),d.emissive&&h.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(h.map.value=d.map,e(d.map,h.mapTransform)),d.alphaMap&&(h.alphaMap.value=d.alphaMap,e(d.alphaMap,h.alphaMapTransform)),d.bumpMap&&(h.bumpMap.value=d.bumpMap,e(d.bumpMap,h.bumpMapTransform),h.bumpScale.value=d.bumpScale,d.side===Re&&(h.bumpScale.value*=-1)),d.normalMap&&(h.normalMap.value=d.normalMap,e(d.normalMap,h.normalMapTransform),h.normalScale.value.copy(d.normalScale),d.side===Re&&h.normalScale.value.negate()),d.displacementMap&&(h.displacementMap.value=d.displacementMap,e(d.displacementMap,h.displacementMapTransform),h.displacementScale.value=d.displacementScale,h.displacementBias.value=d.displacementBias),d.emissiveMap&&(h.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,h.emissiveMapTransform)),d.specularMap&&(h.specularMap.value=d.specularMap,e(d.specularMap,h.specularMapTransform)),d.alphaTest>0&&(h.alphaTest.value=d.alphaTest);const x=t.get(d).envMap;if(x&&(h.envMap.value=x,h.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.reflectivity.value=d.reflectivity,h.ior.value=d.ior,h.refractionRatio.value=d.refractionRatio),d.lightMap){h.lightMap.value=d.lightMap;const _=s._useLegacyLights===!0?Math.PI:1;h.lightMapIntensity.value=d.lightMapIntensity*_,e(d.lightMap,h.lightMapTransform)}d.aoMap&&(h.aoMap.value=d.aoMap,h.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,h.aoMapTransform))}function o(h,d){h.diffuse.value.copy(d.color),h.opacity.value=d.opacity,d.map&&(h.map.value=d.map,e(d.map,h.mapTransform))}function r(h,d){h.dashSize.value=d.dashSize,h.totalSize.value=d.dashSize+d.gapSize,h.scale.value=d.scale}function c(h,d,x,_){h.diffuse.value.copy(d.color),h.opacity.value=d.opacity,h.size.value=d.size*x,h.scale.value=_*.5,d.map&&(h.map.value=d.map,e(d.map,h.uvTransform)),d.alphaMap&&(h.alphaMap.value=d.alphaMap,e(d.alphaMap,h.alphaMapTransform)),d.alphaTest>0&&(h.alphaTest.value=d.alphaTest)}function l(h,d){h.diffuse.value.copy(d.color),h.opacity.value=d.opacity,h.rotation.value=d.rotation,d.map&&(h.map.value=d.map,e(d.map,h.mapTransform)),d.alphaMap&&(h.alphaMap.value=d.alphaMap,e(d.alphaMap,h.alphaMapTransform)),d.alphaTest>0&&(h.alphaTest.value=d.alphaTest)}function u(h,d){h.specular.value.copy(d.specular),h.shininess.value=Math.max(d.shininess,1e-4)}function f(h,d){d.gradientMap&&(h.gradientMap.value=d.gradientMap)}function p(h,d){h.metalness.value=d.metalness,d.metalnessMap&&(h.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,h.metalnessMapTransform)),h.roughness.value=d.roughness,d.roughnessMap&&(h.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,h.roughnessMapTransform)),t.get(d).envMap&&(h.envMapIntensity.value=d.envMapIntensity)}function v(h,d,x){h.ior.value=d.ior,d.sheen>0&&(h.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),h.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(h.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,h.sheenColorMapTransform)),d.sheenRoughnessMap&&(h.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,h.sheenRoughnessMapTransform))),d.clearcoat>0&&(h.clearcoat.value=d.clearcoat,h.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(h.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,h.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(h.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,h.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(h.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,h.clearcoatNormalMapTransform),h.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Re&&h.clearcoatNormalScale.value.negate())),d.iridescence>0&&(h.iridescence.value=d.iridescence,h.iridescenceIOR.value=d.iridescenceIOR,h.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],h.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(h.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,h.iridescenceMapTransform)),d.iridescenceThicknessMap&&(h.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,h.iridescenceThicknessMapTransform))),d.transmission>0&&(h.transmission.value=d.transmission,h.transmissionSamplerMap.value=x.texture,h.transmissionSamplerSize.value.set(x.width,x.height),d.transmissionMap&&(h.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,h.transmissionMapTransform)),h.thickness.value=d.thickness,d.thicknessMap&&(h.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,h.thicknessMapTransform)),h.attenuationDistance.value=d.attenuationDistance,h.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(h.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(h.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,h.anisotropyMapTransform))),h.specularIntensity.value=d.specularIntensity,h.specularColor.value.copy(d.specularColor),d.specularColorMap&&(h.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,h.specularColorMapTransform)),d.specularIntensityMap&&(h.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,h.specularIntensityMapTransform))}function m(h,d){d.matcap&&(h.matcap.value=d.matcap)}function g(h,d){const x=t.get(d).light;h.referencePosition.value.setFromMatrixPosition(x.matrixWorld),h.nearDistance.value=x.shadow.camera.near,h.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function Up(s,t,e,i){let n={},a={},o=[];const r=e.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(x,_){const y=_.program;i.uniformBlockBinding(x,y)}function l(x,_){let y=n[x.id];y===void 0&&(m(x),y=u(x),n[x.id]=y,x.addEventListener("dispose",h));const T=_.program;i.updateUBOMapping(x,T);const S=t.render.frame;a[x.id]!==S&&(p(x),a[x.id]=S)}function u(x){const _=f();x.__bindingPointIndex=_;const y=s.createBuffer(),T=x.__size,S=x.usage;return s.bindBuffer(s.UNIFORM_BUFFER,y),s.bufferData(s.UNIFORM_BUFFER,T,S),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,_,y),y}function f(){for(let x=0;x<r;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(x){const _=n[x.id],y=x.uniforms,T=x.__cache;s.bindBuffer(s.UNIFORM_BUFFER,_);for(let S=0,A=y.length;S<A;S++){const N=Array.isArray(y[S])?y[S]:[y[S]];for(let M=0,b=N.length;M<b;M++){const z=N[M];if(v(z,S,M,T)===!0){const D=z.__offset,k=Array.isArray(z.value)?z.value:[z.value];let R=0;for(let I=0;I<k.length;I++){const B=k[I],j=g(B);typeof B=="number"||typeof B=="boolean"?(z.__data[0]=B,s.bufferSubData(s.UNIFORM_BUFFER,D+R,z.__data)):B.isMatrix3?(z.__data[0]=B.elements[0],z.__data[1]=B.elements[1],z.__data[2]=B.elements[2],z.__data[3]=0,z.__data[4]=B.elements[3],z.__data[5]=B.elements[4],z.__data[6]=B.elements[5],z.__data[7]=0,z.__data[8]=B.elements[6],z.__data[9]=B.elements[7],z.__data[10]=B.elements[8],z.__data[11]=0):(B.toArray(z.__data,R),R+=j.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,D,z.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function v(x,_,y,T){const S=x.value,A=_+"_"+y;if(T[A]===void 0)return typeof S=="number"||typeof S=="boolean"?T[A]=S:T[A]=S.clone(),!0;{const N=T[A];if(typeof S=="number"||typeof S=="boolean"){if(N!==S)return T[A]=S,!0}else if(N.equals(S)===!1)return N.copy(S),!0}return!1}function m(x){const _=x.uniforms;let y=0;const T=16;for(let A=0,N=_.length;A<N;A++){const M=Array.isArray(_[A])?_[A]:[_[A]];for(let b=0,z=M.length;b<z;b++){const D=M[b],k=Array.isArray(D.value)?D.value:[D.value];for(let R=0,I=k.length;R<I;R++){const B=k[R],j=g(B),J=y%T;J!==0&&T-J<j.boundary&&(y+=T-J),D.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=y,y+=j.storage}}}const S=y%T;return S>0&&(y+=T-S),x.__size=y,x.__cache={},this}function g(x){const _={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(_.boundary=4,_.storage=4):x.isVector2?(_.boundary=8,_.storage=8):x.isVector3||x.isColor?(_.boundary=16,_.storage=12):x.isVector4?(_.boundary=16,_.storage=16):x.isMatrix3?(_.boundary=48,_.storage=48):x.isMatrix4?(_.boundary=64,_.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),_}function h(x){const _=x.target;_.removeEventListener("dispose",h);const y=o.indexOf(_.__bindingPointIndex);o.splice(y,1),s.deleteBuffer(n[_.id]),delete n[_.id],delete a[_.id]}function d(){for(const x in n)s.deleteBuffer(n[x]);o=[],n={},a={}}return{bind:c,update:l,dispose:d}}class Jo{constructor(t={}){const{canvas:e=Lc(),context:i=null,depth:n=!0,stencil:a=!0,alpha:o=!1,antialias:r=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=t;this.isWebGLRenderer=!0;let p;i!==null?p=i.getContextAttributes().alpha:p=o;const v=new Uint32Array(4),m=new Int32Array(4);let g=null,h=null;const d=[],x=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ge,this._useLegacyLights=!1,this.toneMapping=gi,this.toneMappingExposure=1;const _=this;let y=!1,T=0,S=0,A=null,N=-1,M=null;const b=new me,z=new me;let D=null;const k=new Jt(0);let R=0,I=e.width,B=e.height,j=1,J=null,K=null;const Q=new me(0,0,I,B),nt=new me(0,0,I,B);let rt=!1;const X=new Pa;let st=!1,C=!1,F=null;const $=new he,V=new Gt,H=new W,ct={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Mt(){return A===null?j:1}let Y=i;function kt(w,Z){for(let et=0;et<w.length;et++){const it=w[et],tt=e.getContext(it,Z);if(tt!==null)return tt}return null}try{const w={alpha:!0,depth:n,stencil:a,antialias:r,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${xa}`),e.addEventListener("webglcontextlost",ut,!1),e.addEventListener("webglcontextrestored",U,!1),e.addEventListener("webglcontextcreationerror",gt,!1),Y===null){const Z=["webgl2","webgl","experimental-webgl"];if(_.isWebGL1Renderer===!0&&Z.shift(),Y=kt(Z,w),Y===null)throw kt(Z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&Y instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),Y.getShaderPrecisionFormat===void 0&&(Y.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let _t,yt,ft,wt,bt,P,E,G,at,ot,lt,vt,dt,pt,Pt,It,ht,Ut,Ot,Bt,Ct,Et,L,mt;function Rt(){_t=new Yu(Y),yt=new Bu(Y,_t,t),_t.init(yt),Et=new Lp(Y,_t,yt),ft=new Cp(Y,_t,yt),wt=new Ku(Y),bt=new mp,P=new Rp(Y,_t,ft,bt,yt,Et,wt),E=new ku(_),G=new Wu(_),at=new ih(Y,yt),L=new zu(Y,_t,at,yt),ot=new Xu(Y,at,wt,L),lt=new Ju(Y,ot,at,wt),Ot=new ju(Y,yt,P),It=new Gu(bt),vt=new pp(_,E,G,_t,yt,L,It),dt=new Np(_,bt),pt=new vp,Pt=new Ep(_t,yt),Ut=new Uu(_,E,G,ft,lt,p,c),ht=new wp(_,lt,yt),mt=new Up(Y,wt,yt,ft),Bt=new Fu(Y,_t,wt,yt),Ct=new $u(Y,_t,wt,yt),wt.programs=vt.programs,_.capabilities=yt,_.extensions=_t,_.properties=bt,_.renderLists=pt,_.shadowMap=ht,_.state=ft,_.info=wt}Rt();const At=new Op(_,Y);this.xr=At,this.getContext=function(){return Y},this.getContextAttributes=function(){return Y.getContextAttributes()},this.forceContextLoss=function(){const w=_t.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=_t.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(w){w!==void 0&&(j=w,this.setSize(I,B,!1))},this.getSize=function(w){return w.set(I,B)},this.setSize=function(w,Z,et=!0){if(At.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}I=w,B=Z,e.width=Math.floor(w*j),e.height=Math.floor(Z*j),et===!0&&(e.style.width=w+"px",e.style.height=Z+"px"),this.setViewport(0,0,w,Z)},this.getDrawingBufferSize=function(w){return w.set(I*j,B*j).floor()},this.setDrawingBufferSize=function(w,Z,et){I=w,B=Z,j=et,e.width=Math.floor(w*et),e.height=Math.floor(Z*et),this.setViewport(0,0,w,Z)},this.getCurrentViewport=function(w){return w.copy(b)},this.getViewport=function(w){return w.copy(Q)},this.setViewport=function(w,Z,et,it){w.isVector4?Q.set(w.x,w.y,w.z,w.w):Q.set(w,Z,et,it),ft.viewport(b.copy(Q).multiplyScalar(j).floor())},this.getScissor=function(w){return w.copy(nt)},this.setScissor=function(w,Z,et,it){w.isVector4?nt.set(w.x,w.y,w.z,w.w):nt.set(w,Z,et,it),ft.scissor(z.copy(nt).multiplyScalar(j).floor())},this.getScissorTest=function(){return rt},this.setScissorTest=function(w){ft.setScissorTest(rt=w)},this.setOpaqueSort=function(w){J=w},this.setTransparentSort=function(w){K=w},this.getClearColor=function(w){return w.copy(Ut.getClearColor())},this.setClearColor=function(){Ut.setClearColor.apply(Ut,arguments)},this.getClearAlpha=function(){return Ut.getClearAlpha()},this.setClearAlpha=function(){Ut.setClearAlpha.apply(Ut,arguments)},this.clear=function(w=!0,Z=!0,et=!0){let it=0;if(w){let tt=!1;if(A!==null){const St=A.texture.format;tt=St===Co||St===wo||St===Po}if(tt){const St=A.texture.type,Lt=St===vi||St===fi||St===Ta||St===Ci||St===Ao||St===bo,Ft=Ut.getClearColor(),Ht=Ut.getClearAlpha(),Xt=Ft.r,Vt=Ft.g,Wt=Ft.b;Lt?(v[0]=Xt,v[1]=Vt,v[2]=Wt,v[3]=Ht,Y.clearBufferuiv(Y.COLOR,0,v)):(m[0]=Xt,m[1]=Vt,m[2]=Wt,m[3]=Ht,Y.clearBufferiv(Y.COLOR,0,m))}else it|=Y.COLOR_BUFFER_BIT}Z&&(it|=Y.DEPTH_BUFFER_BIT),et&&(it|=Y.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Y.clear(it)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ut,!1),e.removeEventListener("webglcontextrestored",U,!1),e.removeEventListener("webglcontextcreationerror",gt,!1),pt.dispose(),Pt.dispose(),bt.dispose(),E.dispose(),G.dispose(),lt.dispose(),L.dispose(),mt.dispose(),vt.dispose(),At.dispose(),At.removeEventListener("sessionstart",re),At.removeEventListener("sessionend",jt),F&&(F.dispose(),F=null),le.stop()};function ut(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function U(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const w=wt.autoReset,Z=ht.enabled,et=ht.autoUpdate,it=ht.needsUpdate,tt=ht.type;Rt(),wt.autoReset=w,ht.enabled=Z,ht.autoUpdate=et,ht.needsUpdate=it,ht.type=tt}function gt(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Tt(w){const Z=w.target;Z.removeEventListener("dispose",Tt),zt(Z)}function zt(w){Dt(w),bt.remove(w)}function Dt(w){const Z=bt.get(w).programs;Z!==void 0&&(Z.forEach(function(et){vt.releaseProgram(et)}),w.isShaderMaterial&&vt.releaseShaderCache(w))}this.renderBufferDirect=function(w,Z,et,it,tt,St){Z===null&&(Z=ct);const Lt=tt.isMesh&&tt.matrixWorld.determinant()<0,Ft=rl(w,Z,et,it,tt);ft.setMaterial(it,Lt);let Ht=et.index,Xt=1;if(it.wireframe===!0){if(Ht=ot.getWireframeAttribute(et),Ht===void 0)return;Xt=2}const Vt=et.drawRange,Wt=et.attributes.position;let oe=Vt.start*Xt,Le=(Vt.start+Vt.count)*Xt;St!==null&&(oe=Math.max(oe,St.start*Xt),Le=Math.min(Le,(St.start+St.count)*Xt)),Ht!==null?(oe=Math.max(oe,0),Le=Math.min(Le,Ht.count)):Wt!=null&&(oe=Math.max(oe,0),Le=Math.min(Le,Wt.count));const fe=Le-oe;if(fe<0||fe===1/0)return;L.setup(tt,it,Ft,et,Ht);let Ze,ie=Bt;if(Ht!==null&&(Ze=at.get(Ht),ie=Ct,ie.setIndex(Ze)),tt.isMesh)it.wireframe===!0?(ft.setLineWidth(it.wireframeLinewidth*Mt()),ie.setMode(Y.LINES)):ie.setMode(Y.TRIANGLES);else if(tt.isLine){let $t=it.linewidth;$t===void 0&&($t=1),ft.setLineWidth($t*Mt()),tt.isLineSegments?ie.setMode(Y.LINES):tt.isLineLoop?ie.setMode(Y.LINE_LOOP):ie.setMode(Y.LINE_STRIP)}else tt.isPoints?ie.setMode(Y.POINTS):tt.isSprite&&ie.setMode(Y.TRIANGLES);if(tt.isBatchedMesh)ie.renderMultiDraw(tt._multiDrawStarts,tt._multiDrawCounts,tt._multiDrawCount);else if(tt.isInstancedMesh)ie.renderInstances(oe,fe,tt.count);else if(et.isInstancedBufferGeometry){const $t=et._maxInstanceCount!==void 0?et._maxInstanceCount:1/0,Ms=Math.min(et.instanceCount,$t);ie.renderInstances(oe,fe,Ms)}else ie.render(oe,fe)};function qt(w,Z,et){w.transparent===!0&&w.side===ni&&w.forceSinglePass===!1?(w.side=Re,w.needsUpdate=!0,In(w,Z,et),w.side=_i,w.needsUpdate=!0,In(w,Z,et),w.side=ni):In(w,Z,et)}this.compile=function(w,Z,et=null){et===null&&(et=w),h=Pt.get(et),h.init(),x.push(h),et.traverseVisible(function(tt){tt.isLight&&tt.layers.test(Z.layers)&&(h.pushLight(tt),tt.castShadow&&h.pushShadow(tt))}),w!==et&&w.traverseVisible(function(tt){tt.isLight&&tt.layers.test(Z.layers)&&(h.pushLight(tt),tt.castShadow&&h.pushShadow(tt))}),h.setupLights(_._useLegacyLights);const it=new Set;return w.traverse(function(tt){const St=tt.material;if(St)if(Array.isArray(St))for(let Lt=0;Lt<St.length;Lt++){const Ft=St[Lt];qt(Ft,et,tt),it.add(Ft)}else qt(St,et,tt),it.add(St)}),x.pop(),h=null,it},this.compileAsync=function(w,Z,et=null){const it=this.compile(w,Z,et);return new Promise(tt=>{function St(){if(it.forEach(function(Lt){bt.get(Lt).currentProgram.isReady()&&it.delete(Lt)}),it.size===0){tt(w);return}setTimeout(St,10)}_t.get("KHR_parallel_shader_compile")!==null?St():setTimeout(St,10)})};let Zt=null;function se(w){Zt&&Zt(w)}function re(){le.stop()}function jt(){le.start()}const le=new Wo;le.setAnimationLoop(se),typeof self<"u"&&le.setContext(self),this.setAnimationLoop=function(w){Zt=w,At.setAnimationLoop(w),w===null?le.stop():le.start()},At.addEventListener("sessionstart",re),At.addEventListener("sessionend",jt),this.render=function(w,Z){if(Z!==void 0&&Z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),Z.parent===null&&Z.matrixWorldAutoUpdate===!0&&Z.updateMatrixWorld(),At.enabled===!0&&At.isPresenting===!0&&(At.cameraAutoUpdate===!0&&At.updateCamera(Z),Z=At.getCamera()),w.isScene===!0&&w.onBeforeRender(_,w,Z,A),h=Pt.get(w,x.length),h.init(),x.push(h),$.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),X.setFromProjectionMatrix($),C=this.localClippingEnabled,st=It.init(this.clippingPlanes,C),g=pt.get(w,d.length),g.init(),d.push(g),Xe(w,Z,0,_.sortObjects),g.finish(),_.sortObjects===!0&&g.sort(J,K),this.info.render.frame++,st===!0&&It.beginShadows();const et=h.state.shadowsArray;if(ht.render(et,w,Z),st===!0&&It.endShadows(),this.info.autoReset===!0&&this.info.reset(),Ut.render(g,w),h.setupLights(_._useLegacyLights),Z.isArrayCamera){const it=Z.cameras;for(let tt=0,St=it.length;tt<St;tt++){const Lt=it[tt];Da(g,w,Lt,Lt.viewport)}}else Da(g,w,Z);A!==null&&(P.updateMultisampleRenderTarget(A),P.updateRenderTargetMipmap(A)),w.isScene===!0&&w.onAfterRender(_,w,Z),L.resetDefaultState(),N=-1,M=null,x.pop(),x.length>0?h=x[x.length-1]:h=null,d.pop(),d.length>0?g=d[d.length-1]:g=null};function Xe(w,Z,et,it){if(w.visible===!1)return;if(w.layers.test(Z.layers)){if(w.isGroup)et=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(Z);else if(w.isLight)h.pushLight(w),w.castShadow&&h.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||X.intersectsSprite(w)){it&&H.setFromMatrixPosition(w.matrixWorld).applyMatrix4($);const Lt=lt.update(w),Ft=w.material;Ft.visible&&g.push(w,Lt,Ft,et,H.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||X.intersectsObject(w))){const Lt=lt.update(w),Ft=w.material;if(it&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),H.copy(w.boundingSphere.center)):(Lt.boundingSphere===null&&Lt.computeBoundingSphere(),H.copy(Lt.boundingSphere.center)),H.applyMatrix4(w.matrixWorld).applyMatrix4($)),Array.isArray(Ft)){const Ht=Lt.groups;for(let Xt=0,Vt=Ht.length;Xt<Vt;Xt++){const Wt=Ht[Xt],oe=Ft[Wt.materialIndex];oe&&oe.visible&&g.push(w,Lt,oe,et,H.z,Wt)}}else Ft.visible&&g.push(w,Lt,Ft,et,H.z,null)}}const St=w.children;for(let Lt=0,Ft=St.length;Lt<Ft;Lt++)Xe(St[Lt],Z,et,it)}function Da(w,Z,et,it){const tt=w.opaque,St=w.transmissive,Lt=w.transparent;h.setupLightsView(et),st===!0&&It.setGlobalState(_.clippingPlanes,et),St.length>0&&al(tt,St,Z,et),it&&ft.viewport(b.copy(it)),tt.length>0&&Ln(tt,Z,et),St.length>0&&Ln(St,Z,et),Lt.length>0&&Ln(Lt,Z,et),ft.buffers.depth.setTest(!0),ft.buffers.depth.setMask(!0),ft.buffers.color.setMask(!0),ft.setPolygonOffset(!1)}function al(w,Z,et,it){if((et.isScene===!0?et.overrideMaterial:null)!==null)return;const St=yt.isWebGL2;F===null&&(F=new Ii(1,1,{generateMipmaps:!0,type:_t.has("EXT_color_buffer_half_float")?bn:vi,minFilter:An,samples:St?4:0})),_.getDrawingBufferSize(V),St?F.setSize(V.x,V.y):F.setSize(ma(V.x),ma(V.y));const Lt=_.getRenderTarget();_.setRenderTarget(F),_.getClearColor(k),R=_.getClearAlpha(),R<1&&_.setClearColor(16777215,.5),_.clear();const Ft=_.toneMapping;_.toneMapping=gi,Ln(w,et,it),P.updateMultisampleRenderTarget(F),P.updateRenderTargetMipmap(F);let Ht=!1;for(let Xt=0,Vt=Z.length;Xt<Vt;Xt++){const Wt=Z[Xt],oe=Wt.object,Le=Wt.geometry,fe=Wt.material,Ze=Wt.group;if(fe.side===ni&&oe.layers.test(it.layers)){const ie=fe.side;fe.side=Re,fe.needsUpdate=!0,Oa(oe,et,it,Le,fe,Ze),fe.side=ie,fe.needsUpdate=!0,Ht=!0}}Ht===!0&&(P.updateMultisampleRenderTarget(F),P.updateRenderTargetMipmap(F)),_.setRenderTarget(Lt),_.setClearColor(k,R),_.toneMapping=Ft}function Ln(w,Z,et){const it=Z.isScene===!0?Z.overrideMaterial:null;for(let tt=0,St=w.length;tt<St;tt++){const Lt=w[tt],Ft=Lt.object,Ht=Lt.geometry,Xt=it===null?Lt.material:it,Vt=Lt.group;Ft.layers.test(et.layers)&&Oa(Ft,Z,et,Ht,Xt,Vt)}}function Oa(w,Z,et,it,tt,St){w.onBeforeRender(_,Z,et,it,tt,St),w.modelViewMatrix.multiplyMatrices(et.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),tt.onBeforeRender(_,Z,et,it,w,St),tt.transparent===!0&&tt.side===ni&&tt.forceSinglePass===!1?(tt.side=Re,tt.needsUpdate=!0,_.renderBufferDirect(et,Z,it,tt,w,St),tt.side=_i,tt.needsUpdate=!0,_.renderBufferDirect(et,Z,it,tt,w,St),tt.side=ni):_.renderBufferDirect(et,Z,it,tt,w,St),w.onAfterRender(_,Z,et,it,tt,St)}function In(w,Z,et){Z.isScene!==!0&&(Z=ct);const it=bt.get(w),tt=h.state.lights,St=h.state.shadowsArray,Lt=tt.state.version,Ft=vt.getParameters(w,tt.state,St,Z,et),Ht=vt.getProgramCacheKey(Ft);let Xt=it.programs;it.environment=w.isMeshStandardMaterial?Z.environment:null,it.fog=Z.fog,it.envMap=(w.isMeshStandardMaterial?G:E).get(w.envMap||it.environment),Xt===void 0&&(w.addEventListener("dispose",Tt),Xt=new Map,it.programs=Xt);let Vt=Xt.get(Ht);if(Vt!==void 0){if(it.currentProgram===Vt&&it.lightsStateVersion===Lt)return Ua(w,Ft),Vt}else Ft.uniforms=vt.getUniforms(w),w.onBuild(et,Ft,_),w.onBeforeCompile(Ft,_),Vt=vt.acquireProgram(Ft,Ht),Xt.set(Ht,Vt),it.uniforms=Ft.uniforms;const Wt=it.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Wt.clippingPlanes=It.uniform),Ua(w,Ft),it.needsLights=ll(w),it.lightsStateVersion=Lt,it.needsLights&&(Wt.ambientLightColor.value=tt.state.ambient,Wt.lightProbe.value=tt.state.probe,Wt.directionalLights.value=tt.state.directional,Wt.directionalLightShadows.value=tt.state.directionalShadow,Wt.spotLights.value=tt.state.spot,Wt.spotLightShadows.value=tt.state.spotShadow,Wt.rectAreaLights.value=tt.state.rectArea,Wt.ltc_1.value=tt.state.rectAreaLTC1,Wt.ltc_2.value=tt.state.rectAreaLTC2,Wt.pointLights.value=tt.state.point,Wt.pointLightShadows.value=tt.state.pointShadow,Wt.hemisphereLights.value=tt.state.hemi,Wt.directionalShadowMap.value=tt.state.directionalShadowMap,Wt.directionalShadowMatrix.value=tt.state.directionalShadowMatrix,Wt.spotShadowMap.value=tt.state.spotShadowMap,Wt.spotLightMatrix.value=tt.state.spotLightMatrix,Wt.spotLightMap.value=tt.state.spotLightMap,Wt.pointShadowMap.value=tt.state.pointShadowMap,Wt.pointShadowMatrix.value=tt.state.pointShadowMatrix),it.currentProgram=Vt,it.uniformsList=null,Vt}function Na(w){if(w.uniformsList===null){const Z=w.currentProgram.getUniforms();w.uniformsList=as.seqWithValue(Z.seq,w.uniforms)}return w.uniformsList}function Ua(w,Z){const et=bt.get(w);et.outputColorSpace=Z.outputColorSpace,et.batching=Z.batching,et.instancing=Z.instancing,et.instancingColor=Z.instancingColor,et.skinning=Z.skinning,et.morphTargets=Z.morphTargets,et.morphNormals=Z.morphNormals,et.morphColors=Z.morphColors,et.morphTargetsCount=Z.morphTargetsCount,et.numClippingPlanes=Z.numClippingPlanes,et.numIntersection=Z.numClipIntersection,et.vertexAlphas=Z.vertexAlphas,et.vertexTangents=Z.vertexTangents,et.toneMapping=Z.toneMapping}function rl(w,Z,et,it,tt){Z.isScene!==!0&&(Z=ct),P.resetTextureUnits();const St=Z.fog,Lt=it.isMeshStandardMaterial?Z.environment:null,Ft=A===null?_.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:ai,Ht=(it.isMeshStandardMaterial?G:E).get(it.envMap||Lt),Xt=it.vertexColors===!0&&!!et.attributes.color&&et.attributes.color.itemSize===4,Vt=!!et.attributes.tangent&&(!!it.normalMap||it.anisotropy>0),Wt=!!et.morphAttributes.position,oe=!!et.morphAttributes.normal,Le=!!et.morphAttributes.color;let fe=gi;it.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(fe=_.toneMapping);const Ze=et.morphAttributes.position||et.morphAttributes.normal||et.morphAttributes.color,ie=Ze!==void 0?Ze.length:0,$t=bt.get(it),Ms=h.state.lights;if(st===!0&&(C===!0||w!==M)){const Ne=w===M&&it.id===N;It.setState(it,w,Ne)}let ae=!1;it.version===$t.__version?($t.needsLights&&$t.lightsStateVersion!==Ms.state.version||$t.outputColorSpace!==Ft||tt.isBatchedMesh&&$t.batching===!1||!tt.isBatchedMesh&&$t.batching===!0||tt.isInstancedMesh&&$t.instancing===!1||!tt.isInstancedMesh&&$t.instancing===!0||tt.isSkinnedMesh&&$t.skinning===!1||!tt.isSkinnedMesh&&$t.skinning===!0||tt.isInstancedMesh&&$t.instancingColor===!0&&tt.instanceColor===null||tt.isInstancedMesh&&$t.instancingColor===!1&&tt.instanceColor!==null||$t.envMap!==Ht||it.fog===!0&&$t.fog!==St||$t.numClippingPlanes!==void 0&&($t.numClippingPlanes!==It.numPlanes||$t.numIntersection!==It.numIntersection)||$t.vertexAlphas!==Xt||$t.vertexTangents!==Vt||$t.morphTargets!==Wt||$t.morphNormals!==oe||$t.morphColors!==Le||$t.toneMapping!==fe||yt.isWebGL2===!0&&$t.morphTargetsCount!==ie)&&(ae=!0):(ae=!0,$t.__version=it.version);let yi=$t.currentProgram;ae===!0&&(yi=In(it,Z,tt));let za=!1,pn=!1,Ts=!1;const ve=yi.getUniforms(),xi=$t.uniforms;if(ft.useProgram(yi.program)&&(za=!0,pn=!0,Ts=!0),it.id!==N&&(N=it.id,pn=!0),za||M!==w){ve.setValue(Y,"projectionMatrix",w.projectionMatrix),ve.setValue(Y,"viewMatrix",w.matrixWorldInverse);const Ne=ve.map.cameraPosition;Ne!==void 0&&Ne.setValue(Y,H.setFromMatrixPosition(w.matrixWorld)),yt.logarithmicDepthBuffer&&ve.setValue(Y,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(it.isMeshPhongMaterial||it.isMeshToonMaterial||it.isMeshLambertMaterial||it.isMeshBasicMaterial||it.isMeshStandardMaterial||it.isShaderMaterial)&&ve.setValue(Y,"isOrthographic",w.isOrthographicCamera===!0),M!==w&&(M=w,pn=!0,Ts=!0)}if(tt.isSkinnedMesh){ve.setOptional(Y,tt,"bindMatrix"),ve.setOptional(Y,tt,"bindMatrixInverse");const Ne=tt.skeleton;Ne&&(yt.floatVertexTextures?(Ne.boneTexture===null&&Ne.computeBoneTexture(),ve.setValue(Y,"boneTexture",Ne.boneTexture,P)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}tt.isBatchedMesh&&(ve.setOptional(Y,tt,"batchingTexture"),ve.setValue(Y,"batchingTexture",tt._matricesTexture,P));const Es=et.morphAttributes;if((Es.position!==void 0||Es.normal!==void 0||Es.color!==void 0&&yt.isWebGL2===!0)&&Ot.update(tt,et,yi),(pn||$t.receiveShadow!==tt.receiveShadow)&&($t.receiveShadow=tt.receiveShadow,ve.setValue(Y,"receiveShadow",tt.receiveShadow)),it.isMeshGouraudMaterial&&it.envMap!==null&&(xi.envMap.value=Ht,xi.flipEnvMap.value=Ht.isCubeTexture&&Ht.isRenderTargetTexture===!1?-1:1),pn&&(ve.setValue(Y,"toneMappingExposure",_.toneMappingExposure),$t.needsLights&&ol(xi,Ts),St&&it.fog===!0&&dt.refreshFogUniforms(xi,St),dt.refreshMaterialUniforms(xi,it,j,B,F),as.upload(Y,Na($t),xi,P)),it.isShaderMaterial&&it.uniformsNeedUpdate===!0&&(as.upload(Y,Na($t),xi,P),it.uniformsNeedUpdate=!1),it.isSpriteMaterial&&ve.setValue(Y,"center",tt.center),ve.setValue(Y,"modelViewMatrix",tt.modelViewMatrix),ve.setValue(Y,"normalMatrix",tt.normalMatrix),ve.setValue(Y,"modelMatrix",tt.matrixWorld),it.isShaderMaterial||it.isRawShaderMaterial){const Ne=it.uniformsGroups;for(let Ss=0,cl=Ne.length;Ss<cl;Ss++)if(yt.isWebGL2){const Fa=Ne[Ss];mt.update(Fa,yi),mt.bind(Fa,yi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return yi}function ol(w,Z){w.ambientLightColor.needsUpdate=Z,w.lightProbe.needsUpdate=Z,w.directionalLights.needsUpdate=Z,w.directionalLightShadows.needsUpdate=Z,w.pointLights.needsUpdate=Z,w.pointLightShadows.needsUpdate=Z,w.spotLights.needsUpdate=Z,w.spotLightShadows.needsUpdate=Z,w.rectAreaLights.needsUpdate=Z,w.hemisphereLights.needsUpdate=Z}function ll(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return S},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(w,Z,et){bt.get(w.texture).__webglTexture=Z,bt.get(w.depthTexture).__webglTexture=et;const it=bt.get(w);it.__hasExternalTextures=!0,it.__hasExternalTextures&&(it.__autoAllocateDepthBuffer=et===void 0,it.__autoAllocateDepthBuffer||_t.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),it.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(w,Z){const et=bt.get(w);et.__webglFramebuffer=Z,et.__useDefaultFramebuffer=Z===void 0},this.setRenderTarget=function(w,Z=0,et=0){A=w,T=Z,S=et;let it=!0,tt=null,St=!1,Lt=!1;if(w){const Ht=bt.get(w);Ht.__useDefaultFramebuffer!==void 0?(ft.bindFramebuffer(Y.FRAMEBUFFER,null),it=!1):Ht.__webglFramebuffer===void 0?P.setupRenderTarget(w):Ht.__hasExternalTextures&&P.rebindTextures(w,bt.get(w.texture).__webglTexture,bt.get(w.depthTexture).__webglTexture);const Xt=w.texture;(Xt.isData3DTexture||Xt.isDataArrayTexture||Xt.isCompressedArrayTexture)&&(Lt=!0);const Vt=bt.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Vt[Z])?tt=Vt[Z][et]:tt=Vt[Z],St=!0):yt.isWebGL2&&w.samples>0&&P.useMultisampledRTT(w)===!1?tt=bt.get(w).__webglMultisampledFramebuffer:Array.isArray(Vt)?tt=Vt[et]:tt=Vt,b.copy(w.viewport),z.copy(w.scissor),D=w.scissorTest}else b.copy(Q).multiplyScalar(j).floor(),z.copy(nt).multiplyScalar(j).floor(),D=rt;if(ft.bindFramebuffer(Y.FRAMEBUFFER,tt)&&yt.drawBuffers&&it&&ft.drawBuffers(w,tt),ft.viewport(b),ft.scissor(z),ft.setScissorTest(D),St){const Ht=bt.get(w.texture);Y.framebufferTexture2D(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Ht.__webglTexture,et)}else if(Lt){const Ht=bt.get(w.texture),Xt=Z||0;Y.framebufferTextureLayer(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Ht.__webglTexture,et||0,Xt)}N=-1},this.readRenderTargetPixels=function(w,Z,et,it,tt,St,Lt){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ft=bt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Lt!==void 0&&(Ft=Ft[Lt]),Ft){ft.bindFramebuffer(Y.FRAMEBUFFER,Ft);try{const Ht=w.texture,Xt=Ht.format,Vt=Ht.type;if(Xt!==Ye&&Et.convert(Xt)!==Y.getParameter(Y.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Wt=Vt===bn&&(_t.has("EXT_color_buffer_half_float")||yt.isWebGL2&&_t.has("EXT_color_buffer_float"));if(Vt!==vi&&Et.convert(Vt)!==Y.getParameter(Y.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Vt===pi&&(yt.isWebGL2||_t.has("OES_texture_float")||_t.has("WEBGL_color_buffer_float")))&&!Wt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Z>=0&&Z<=w.width-it&&et>=0&&et<=w.height-tt&&Y.readPixels(Z,et,it,tt,Et.convert(Xt),Et.convert(Vt),St)}finally{const Ht=A!==null?bt.get(A).__webglFramebuffer:null;ft.bindFramebuffer(Y.FRAMEBUFFER,Ht)}}},this.copyFramebufferToTexture=function(w,Z,et=0){const it=Math.pow(2,-et),tt=Math.floor(Z.image.width*it),St=Math.floor(Z.image.height*it);P.setTexture2D(Z,0),Y.copyTexSubImage2D(Y.TEXTURE_2D,et,0,0,w.x,w.y,tt,St),ft.unbindTexture()},this.copyTextureToTexture=function(w,Z,et,it=0){const tt=Z.image.width,St=Z.image.height,Lt=Et.convert(et.format),Ft=Et.convert(et.type);P.setTexture2D(et,0),Y.pixelStorei(Y.UNPACK_FLIP_Y_WEBGL,et.flipY),Y.pixelStorei(Y.UNPACK_PREMULTIPLY_ALPHA_WEBGL,et.premultiplyAlpha),Y.pixelStorei(Y.UNPACK_ALIGNMENT,et.unpackAlignment),Z.isDataTexture?Y.texSubImage2D(Y.TEXTURE_2D,it,w.x,w.y,tt,St,Lt,Ft,Z.image.data):Z.isCompressedTexture?Y.compressedTexSubImage2D(Y.TEXTURE_2D,it,w.x,w.y,Z.mipmaps[0].width,Z.mipmaps[0].height,Lt,Z.mipmaps[0].data):Y.texSubImage2D(Y.TEXTURE_2D,it,w.x,w.y,Lt,Ft,Z.image),it===0&&et.generateMipmaps&&Y.generateMipmap(Y.TEXTURE_2D),ft.unbindTexture()},this.copyTextureToTexture3D=function(w,Z,et,it,tt=0){if(_.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const St=w.max.x-w.min.x+1,Lt=w.max.y-w.min.y+1,Ft=w.max.z-w.min.z+1,Ht=Et.convert(it.format),Xt=Et.convert(it.type);let Vt;if(it.isData3DTexture)P.setTexture3D(it,0),Vt=Y.TEXTURE_3D;else if(it.isDataArrayTexture||it.isCompressedArrayTexture)P.setTexture2DArray(it,0),Vt=Y.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}Y.pixelStorei(Y.UNPACK_FLIP_Y_WEBGL,it.flipY),Y.pixelStorei(Y.UNPACK_PREMULTIPLY_ALPHA_WEBGL,it.premultiplyAlpha),Y.pixelStorei(Y.UNPACK_ALIGNMENT,it.unpackAlignment);const Wt=Y.getParameter(Y.UNPACK_ROW_LENGTH),oe=Y.getParameter(Y.UNPACK_IMAGE_HEIGHT),Le=Y.getParameter(Y.UNPACK_SKIP_PIXELS),fe=Y.getParameter(Y.UNPACK_SKIP_ROWS),Ze=Y.getParameter(Y.UNPACK_SKIP_IMAGES),ie=et.isCompressedTexture?et.mipmaps[tt]:et.image;Y.pixelStorei(Y.UNPACK_ROW_LENGTH,ie.width),Y.pixelStorei(Y.UNPACK_IMAGE_HEIGHT,ie.height),Y.pixelStorei(Y.UNPACK_SKIP_PIXELS,w.min.x),Y.pixelStorei(Y.UNPACK_SKIP_ROWS,w.min.y),Y.pixelStorei(Y.UNPACK_SKIP_IMAGES,w.min.z),et.isDataTexture||et.isData3DTexture?Y.texSubImage3D(Vt,tt,Z.x,Z.y,Z.z,St,Lt,Ft,Ht,Xt,ie.data):et.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),Y.compressedTexSubImage3D(Vt,tt,Z.x,Z.y,Z.z,St,Lt,Ft,Ht,ie.data)):Y.texSubImage3D(Vt,tt,Z.x,Z.y,Z.z,St,Lt,Ft,Ht,Xt,ie),Y.pixelStorei(Y.UNPACK_ROW_LENGTH,Wt),Y.pixelStorei(Y.UNPACK_IMAGE_HEIGHT,oe),Y.pixelStorei(Y.UNPACK_SKIP_PIXELS,Le),Y.pixelStorei(Y.UNPACK_SKIP_ROWS,fe),Y.pixelStorei(Y.UNPACK_SKIP_IMAGES,Ze),tt===0&&it.generateMipmaps&&Y.generateMipmap(Vt),ft.unbindTexture()},this.initTexture=function(w){w.isCubeTexture?P.setTextureCube(w,0):w.isData3DTexture?P.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?P.setTexture2DArray(w,0):P.setTexture2D(w,0),ft.unbindTexture()},this.resetState=function(){T=0,S=0,A=null,ft.reset(),L.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return si}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===Ea?"display-p3":"srgb",e.unpackColorSpace=Qt.workingColorSpace===_s?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===ge?Li:Lo}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===Li?ge:ai}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}}class zp extends Jo{}zp.prototype.isWebGL1Renderer=!0;class Fp extends Me{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}}class ps extends qe{constructor(t=1,e=1,i=1,n=32,a=1,o=!1,r=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:n,heightSegments:a,openEnded:o,thetaStart:r,thetaLength:c};const l=this;n=Math.floor(n),a=Math.floor(a);const u=[],f=[],p=[],v=[];let m=0;const g=[],h=i/2;let d=0;x(),o===!1&&(t>0&&_(!0),e>0&&_(!1)),this.setIndex(u),this.setAttribute("position",new Te(f,3)),this.setAttribute("normal",new Te(p,3)),this.setAttribute("uv",new Te(v,2));function x(){const y=new W,T=new W;let S=0;const A=(e-t)/i;for(let N=0;N<=a;N++){const M=[],b=N/a,z=b*(e-t)+t;for(let D=0;D<=n;D++){const k=D/n,R=k*c+r,I=Math.sin(R),B=Math.cos(R);T.x=z*I,T.y=-b*i+h,T.z=z*B,f.push(T.x,T.y,T.z),y.set(I,A,B).normalize(),p.push(y.x,y.y,y.z),v.push(k,1-b),M.push(m++)}g.push(M)}for(let N=0;N<n;N++)for(let M=0;M<a;M++){const b=g[M][N],z=g[M+1][N],D=g[M+1][N+1],k=g[M][N+1];u.push(b,z,k),u.push(z,D,k),S+=6}l.addGroup(d,S,0),d+=S}function _(y){const T=m,S=new Gt,A=new W;let N=0;const M=y===!0?t:e,b=y===!0?1:-1;for(let D=1;D<=n;D++)f.push(0,h*b,0),p.push(0,b,0),v.push(.5,.5),m++;const z=m;for(let D=0;D<=n;D++){const R=D/n*c+r,I=Math.cos(R),B=Math.sin(R);A.x=M*B,A.y=h*b,A.z=M*I,f.push(A.x,A.y,A.z),p.push(0,b,0),S.x=I*.5+.5,S.y=B*.5*b+.5,v.push(S.x,S.y),m++}for(let D=0;D<n;D++){const k=T+D,R=z+D;y===!0?u.push(R,R+1,k):u.push(R+1,R,k),N+=3}l.addGroup(d,N,y===!0?1:2),d+=N}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ps(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Ra extends qe{constructor(t=[],e=[],i=1,n=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:n};const a=[],o=[];r(n),l(i),u(),this.setAttribute("position",new Te(a,3)),this.setAttribute("normal",new Te(a.slice(),3)),this.setAttribute("uv",new Te(o,2)),n===0?this.computeVertexNormals():this.normalizeNormals();function r(x){const _=new W,y=new W,T=new W;for(let S=0;S<e.length;S+=3)v(e[S+0],_),v(e[S+1],y),v(e[S+2],T),c(_,y,T,x)}function c(x,_,y,T){const S=T+1,A=[];for(let N=0;N<=S;N++){A[N]=[];const M=x.clone().lerp(y,N/S),b=_.clone().lerp(y,N/S),z=S-N;for(let D=0;D<=z;D++)D===0&&N===S?A[N][D]=M:A[N][D]=M.clone().lerp(b,D/z)}for(let N=0;N<S;N++)for(let M=0;M<2*(S-N)-1;M++){const b=Math.floor(M/2);M%2===0?(p(A[N][b+1]),p(A[N+1][b]),p(A[N][b])):(p(A[N][b+1]),p(A[N+1][b+1]),p(A[N+1][b]))}}function l(x){const _=new W;for(let y=0;y<a.length;y+=3)_.x=a[y+0],_.y=a[y+1],_.z=a[y+2],_.normalize().multiplyScalar(x),a[y+0]=_.x,a[y+1]=_.y,a[y+2]=_.z}function u(){const x=new W;for(let _=0;_<a.length;_+=3){x.x=a[_+0],x.y=a[_+1],x.z=a[_+2];const y=h(x)/2/Math.PI+.5,T=d(x)/Math.PI+.5;o.push(y,1-T)}m(),f()}function f(){for(let x=0;x<o.length;x+=6){const _=o[x+0],y=o[x+2],T=o[x+4],S=Math.max(_,y,T),A=Math.min(_,y,T);S>.9&&A<.1&&(_<.2&&(o[x+0]+=1),y<.2&&(o[x+2]+=1),T<.2&&(o[x+4]+=1))}}function p(x){a.push(x.x,x.y,x.z)}function v(x,_){const y=x*3;_.x=t[y+0],_.y=t[y+1],_.z=t[y+2]}function m(){const x=new W,_=new W,y=new W,T=new W,S=new Gt,A=new Gt,N=new Gt;for(let M=0,b=0;M<a.length;M+=9,b+=6){x.set(a[M+0],a[M+1],a[M+2]),_.set(a[M+3],a[M+4],a[M+5]),y.set(a[M+6],a[M+7],a[M+8]),S.set(o[b+0],o[b+1]),A.set(o[b+2],o[b+3]),N.set(o[b+4],o[b+5]),T.copy(x).add(_).add(y).divideScalar(3);const z=h(T);g(S,b+0,x,z),g(A,b+2,_,z),g(N,b+4,y,z)}}function g(x,_,y,T){T<0&&x.x===1&&(o[_]=x.x-1),y.x===0&&y.z===0&&(o[_]=T/2/Math.PI+.5)}function h(x){return Math.atan2(x.z,-x.x)}function d(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ra(t.vertices,t.indices,t.radius,t.details)}}class La extends Ra{constructor(t=1,e=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],n=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,n,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new La(t.radius,t.detail)}}class En extends qe{constructor(t=1,e=32,i=16,n=0,a=Math.PI*2,o=0,r=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:n,phiLength:a,thetaStart:o,thetaLength:r},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const c=Math.min(o+r,Math.PI);let l=0;const u=[],f=new W,p=new W,v=[],m=[],g=[],h=[];for(let d=0;d<=i;d++){const x=[],_=d/i;let y=0;d===0&&o===0?y=.5/e:d===i&&c===Math.PI&&(y=-.5/e);for(let T=0;T<=e;T++){const S=T/e;f.x=-t*Math.cos(n+S*a)*Math.sin(o+_*r),f.y=t*Math.cos(o+_*r),f.z=t*Math.sin(n+S*a)*Math.sin(o+_*r),m.push(f.x,f.y,f.z),p.copy(f).normalize(),g.push(p.x,p.y,p.z),h.push(S+y,1-_),x.push(l++)}u.push(x)}for(let d=0;d<i;d++)for(let x=0;x<e;x++){const _=u[d][x+1],y=u[d][x],T=u[d+1][x],S=u[d+1][x+1];(d!==0||o>0)&&v.push(_,y,S),(d!==i-1||c<Math.PI)&&v.push(y,T,S)}this.setIndex(v),this.setAttribute("position",new Te(m,3)),this.setAttribute("normal",new Te(g,3)),this.setAttribute("uv",new Te(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new En(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class ne extends Rn{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Jt(16777215),this.specular=new Jt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Jt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Io,this.normalScale=new Gt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ma,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Qo extends Me{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Jt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}const ia=new he,lo=new W,co=new W;class Bp{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Gt(512,512),this.map=null,this.mapPass=null,this.matrix=new he,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Pa,this._frameExtents=new Gt(1,1),this._viewportCount=1,this._viewports=[new me(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;lo.setFromMatrixPosition(t.matrixWorld),e.position.copy(lo),co.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(co),e.updateMatrixWorld(),ia.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ia),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(ia)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Gp extends Bp{constructor(){super(new Yo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ho extends Qo{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Me.DEFAULT_UP),this.updateMatrix(),this.target=new Me,this.shadow=new Gp}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class uo extends Qo{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class kp{constructor(t,e,i=0,n=1/0){this.ray=new Aa(t,e),this.near=i,this.far=n,this.camera=null,this.layers=new ba,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}intersectObject(t,e=!0,i=[]){return va(t,this,i,e),i.sort(fo),i}intersectObjects(t,e=!0,i=[]){for(let n=0,a=t.length;n<a;n++)va(t[n],this,i,e);return i.sort(fo),i}}function fo(s,t){return s.distance-t.distance}function va(s,t,e,i){if(s.layers.test(t.layers)&&s.raycast(t,e),i===!0){const n=s.children;for(let a=0,o=n.length;a<o;a++)va(n[a],t,e,!0)}}class _a{constructor(t=1,e=0,i=0){return this.radius=t,this.phi=e,this.theta=i,this}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(be(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:xa}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=xa);const po={type:"change"},na={type:"start"},mo={type:"end"},es=new Aa,go=new ui,Hp=Math.cos(70*Rc.DEG2RAD);class Vp extends Ni{constructor(t,e){super(),this.object=t,this.domElement=e,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new W,this.cursor=new W,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:zi.ROTATE,MIDDLE:zi.DOLLY,RIGHT:zi.PAN},this.touches={ONE:Fi.ROTATE,TWO:Fi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return r.phi},this.getAzimuthalAngle=function(){return r.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(L){L.addEventListener("keydown",Pt),this._domElementKeyEvents=L},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Pt),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(po),i.update(),a=n.NONE},this.update=function(){const L=new W,mt=new Di().setFromUnitVectors(t.up,new W(0,1,0)),Rt=mt.clone().invert(),At=new W,ut=new Di,U=new W,gt=2*Math.PI;return function(zt=null){const Dt=i.object.position;L.copy(Dt).sub(i.target),L.applyQuaternion(mt),r.setFromVector3(L),i.autoRotate&&a===n.NONE&&D(b(zt)),i.enableDamping?(r.theta+=c.theta*i.dampingFactor,r.phi+=c.phi*i.dampingFactor):(r.theta+=c.theta,r.phi+=c.phi);let qt=i.minAzimuthAngle,Zt=i.maxAzimuthAngle;isFinite(qt)&&isFinite(Zt)&&(qt<-Math.PI?qt+=gt:qt>Math.PI&&(qt-=gt),Zt<-Math.PI?Zt+=gt:Zt>Math.PI&&(Zt-=gt),qt<=Zt?r.theta=Math.max(qt,Math.min(Zt,r.theta)):r.theta=r.theta>(qt+Zt)/2?Math.max(qt,r.theta):Math.min(Zt,r.theta)),r.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,r.phi)),r.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(u,i.dampingFactor):i.target.add(u),i.target.sub(i.cursor),i.target.clampLength(i.minTargetRadius,i.maxTargetRadius),i.target.add(i.cursor),i.zoomToCursor&&S||i.object.isOrthographicCamera?r.radius=Q(r.radius):r.radius=Q(r.radius*l),L.setFromSpherical(r),L.applyQuaternion(Rt),Dt.copy(i.target).add(L),i.object.lookAt(i.target),i.enableDamping===!0?(c.theta*=1-i.dampingFactor,c.phi*=1-i.dampingFactor,u.multiplyScalar(1-i.dampingFactor)):(c.set(0,0,0),u.set(0,0,0));let se=!1;if(i.zoomToCursor&&S){let re=null;if(i.object.isPerspectiveCamera){const jt=L.length();re=Q(jt*l);const le=jt-re;i.object.position.addScaledVector(y,le),i.object.updateMatrixWorld()}else if(i.object.isOrthographicCamera){const jt=new W(T.x,T.y,0);jt.unproject(i.object),i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/l)),i.object.updateProjectionMatrix(),se=!0;const le=new W(T.x,T.y,0);le.unproject(i.object),i.object.position.sub(le).add(jt),i.object.updateMatrixWorld(),re=L.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;re!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(re).add(i.object.position):(es.origin.copy(i.object.position),es.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(es.direction))<Hp?t.lookAt(i.target):(go.setFromNormalAndCoplanarPoint(i.object.up,i.target),es.intersectPlane(go,i.target))))}else i.object.isOrthographicCamera&&(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/l)),i.object.updateProjectionMatrix(),se=!0);return l=1,S=!1,se||At.distanceToSquared(i.object.position)>o||8*(1-ut.dot(i.object.quaternion))>o||U.distanceToSquared(i.target)>0?(i.dispatchEvent(po),At.copy(i.object.position),ut.copy(i.object.quaternion),U.copy(i.target),!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",Ut),i.domElement.removeEventListener("pointerdown",P),i.domElement.removeEventListener("pointercancel",G),i.domElement.removeEventListener("wheel",lt),i.domElement.removeEventListener("pointermove",E),i.domElement.removeEventListener("pointerup",G),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",Pt),i._domElementKeyEvents=null)};const i=this,n={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let a=n.NONE;const o=1e-6,r=new _a,c=new _a;let l=1;const u=new W,f=new Gt,p=new Gt,v=new Gt,m=new Gt,g=new Gt,h=new Gt,d=new Gt,x=new Gt,_=new Gt,y=new W,T=new Gt;let S=!1;const A=[],N={};let M=!1;function b(L){return L!==null?2*Math.PI/60*i.autoRotateSpeed*L:2*Math.PI/60/60*i.autoRotateSpeed}function z(L){const mt=Math.abs(L*.01);return Math.pow(.95,i.zoomSpeed*mt)}function D(L){c.theta-=L}function k(L){c.phi-=L}const R=function(){const L=new W;return function(Rt,At){L.setFromMatrixColumn(At,0),L.multiplyScalar(-Rt),u.add(L)}}(),I=function(){const L=new W;return function(Rt,At){i.screenSpacePanning===!0?L.setFromMatrixColumn(At,1):(L.setFromMatrixColumn(At,0),L.crossVectors(i.object.up,L)),L.multiplyScalar(Rt),u.add(L)}}(),B=function(){const L=new W;return function(Rt,At){const ut=i.domElement;if(i.object.isPerspectiveCamera){const U=i.object.position;L.copy(U).sub(i.target);let gt=L.length();gt*=Math.tan(i.object.fov/2*Math.PI/180),R(2*Rt*gt/ut.clientHeight,i.object.matrix),I(2*At*gt/ut.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(R(Rt*(i.object.right-i.object.left)/i.object.zoom/ut.clientWidth,i.object.matrix),I(At*(i.object.top-i.object.bottom)/i.object.zoom/ut.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function j(L){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?l/=L:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function J(L){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?l*=L:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function K(L,mt){if(!i.zoomToCursor)return;S=!0;const Rt=i.domElement.getBoundingClientRect(),At=L-Rt.left,ut=mt-Rt.top,U=Rt.width,gt=Rt.height;T.x=At/U*2-1,T.y=-(ut/gt)*2+1,y.set(T.x,T.y,1).unproject(i.object).sub(i.object.position).normalize()}function Q(L){return Math.max(i.minDistance,Math.min(i.maxDistance,L))}function nt(L){f.set(L.clientX,L.clientY)}function rt(L){K(L.clientX,L.clientX),d.set(L.clientX,L.clientY)}function X(L){m.set(L.clientX,L.clientY)}function st(L){p.set(L.clientX,L.clientY),v.subVectors(p,f).multiplyScalar(i.rotateSpeed);const mt=i.domElement;D(2*Math.PI*v.x/mt.clientHeight),k(2*Math.PI*v.y/mt.clientHeight),f.copy(p),i.update()}function C(L){x.set(L.clientX,L.clientY),_.subVectors(x,d),_.y>0?j(z(_.y)):_.y<0&&J(z(_.y)),d.copy(x),i.update()}function F(L){g.set(L.clientX,L.clientY),h.subVectors(g,m).multiplyScalar(i.panSpeed),B(h.x,h.y),m.copy(g),i.update()}function $(L){K(L.clientX,L.clientY),L.deltaY<0?J(z(L.deltaY)):L.deltaY>0&&j(z(L.deltaY)),i.update()}function V(L){let mt=!1;switch(L.code){case i.keys.UP:L.ctrlKey||L.metaKey||L.shiftKey?k(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):B(0,i.keyPanSpeed),mt=!0;break;case i.keys.BOTTOM:L.ctrlKey||L.metaKey||L.shiftKey?k(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):B(0,-i.keyPanSpeed),mt=!0;break;case i.keys.LEFT:L.ctrlKey||L.metaKey||L.shiftKey?D(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):B(i.keyPanSpeed,0),mt=!0;break;case i.keys.RIGHT:L.ctrlKey||L.metaKey||L.shiftKey?D(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):B(-i.keyPanSpeed,0),mt=!0;break}mt&&(L.preventDefault(),i.update())}function H(L){if(A.length===1)f.set(L.pageX,L.pageY);else{const mt=Et(L),Rt=.5*(L.pageX+mt.x),At=.5*(L.pageY+mt.y);f.set(Rt,At)}}function ct(L){if(A.length===1)m.set(L.pageX,L.pageY);else{const mt=Et(L),Rt=.5*(L.pageX+mt.x),At=.5*(L.pageY+mt.y);m.set(Rt,At)}}function Mt(L){const mt=Et(L),Rt=L.pageX-mt.x,At=L.pageY-mt.y,ut=Math.sqrt(Rt*Rt+At*At);d.set(0,ut)}function Y(L){i.enableZoom&&Mt(L),i.enablePan&&ct(L)}function kt(L){i.enableZoom&&Mt(L),i.enableRotate&&H(L)}function _t(L){if(A.length==1)p.set(L.pageX,L.pageY);else{const Rt=Et(L),At=.5*(L.pageX+Rt.x),ut=.5*(L.pageY+Rt.y);p.set(At,ut)}v.subVectors(p,f).multiplyScalar(i.rotateSpeed);const mt=i.domElement;D(2*Math.PI*v.x/mt.clientHeight),k(2*Math.PI*v.y/mt.clientHeight),f.copy(p)}function yt(L){if(A.length===1)g.set(L.pageX,L.pageY);else{const mt=Et(L),Rt=.5*(L.pageX+mt.x),At=.5*(L.pageY+mt.y);g.set(Rt,At)}h.subVectors(g,m).multiplyScalar(i.panSpeed),B(h.x,h.y),m.copy(g)}function ft(L){const mt=Et(L),Rt=L.pageX-mt.x,At=L.pageY-mt.y,ut=Math.sqrt(Rt*Rt+At*At);x.set(0,ut),_.set(0,Math.pow(x.y/d.y,i.zoomSpeed)),j(_.y),d.copy(x);const U=(L.pageX+mt.x)*.5,gt=(L.pageY+mt.y)*.5;K(U,gt)}function wt(L){i.enableZoom&&ft(L),i.enablePan&&yt(L)}function bt(L){i.enableZoom&&ft(L),i.enableRotate&&_t(L)}function P(L){i.enabled!==!1&&(A.length===0&&(i.domElement.setPointerCapture(L.pointerId),i.domElement.addEventListener("pointermove",E),i.domElement.addEventListener("pointerup",G)),Ot(L),L.pointerType==="touch"?It(L):at(L))}function E(L){i.enabled!==!1&&(L.pointerType==="touch"?ht(L):ot(L))}function G(L){Bt(L),A.length===0&&(i.domElement.releasePointerCapture(L.pointerId),i.domElement.removeEventListener("pointermove",E),i.domElement.removeEventListener("pointerup",G)),i.dispatchEvent(mo),a=n.NONE}function at(L){let mt;switch(L.button){case 0:mt=i.mouseButtons.LEFT;break;case 1:mt=i.mouseButtons.MIDDLE;break;case 2:mt=i.mouseButtons.RIGHT;break;default:mt=-1}switch(mt){case zi.DOLLY:if(i.enableZoom===!1)return;rt(L),a=n.DOLLY;break;case zi.ROTATE:if(L.ctrlKey||L.metaKey||L.shiftKey){if(i.enablePan===!1)return;X(L),a=n.PAN}else{if(i.enableRotate===!1)return;nt(L),a=n.ROTATE}break;case zi.PAN:if(L.ctrlKey||L.metaKey||L.shiftKey){if(i.enableRotate===!1)return;nt(L),a=n.ROTATE}else{if(i.enablePan===!1)return;X(L),a=n.PAN}break;default:a=n.NONE}a!==n.NONE&&i.dispatchEvent(na)}function ot(L){switch(a){case n.ROTATE:if(i.enableRotate===!1)return;st(L);break;case n.DOLLY:if(i.enableZoom===!1)return;C(L);break;case n.PAN:if(i.enablePan===!1)return;F(L);break}}function lt(L){i.enabled===!1||i.enableZoom===!1||a!==n.NONE||(L.preventDefault(),i.dispatchEvent(na),$(vt(L)),i.dispatchEvent(mo))}function vt(L){const mt=L.deltaMode,Rt={clientX:L.clientX,clientY:L.clientY,deltaY:L.deltaY};switch(mt){case 1:Rt.deltaY*=16;break;case 2:Rt.deltaY*=100;break}return L.ctrlKey&&!M&&(Rt.deltaY*=10),Rt}function dt(L){L.key==="Control"&&(M=!0,document.addEventListener("keyup",pt,{passive:!0,capture:!0}))}function pt(L){L.key==="Control"&&(M=!1,document.removeEventListener("keyup",pt,{passive:!0,capture:!0}))}function Pt(L){i.enabled===!1||i.enablePan===!1||V(L)}function It(L){switch(Ct(L),A.length){case 1:switch(i.touches.ONE){case Fi.ROTATE:if(i.enableRotate===!1)return;H(L),a=n.TOUCH_ROTATE;break;case Fi.PAN:if(i.enablePan===!1)return;ct(L),a=n.TOUCH_PAN;break;default:a=n.NONE}break;case 2:switch(i.touches.TWO){case Fi.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;Y(L),a=n.TOUCH_DOLLY_PAN;break;case Fi.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;kt(L),a=n.TOUCH_DOLLY_ROTATE;break;default:a=n.NONE}break;default:a=n.NONE}a!==n.NONE&&i.dispatchEvent(na)}function ht(L){switch(Ct(L),a){case n.TOUCH_ROTATE:if(i.enableRotate===!1)return;_t(L),i.update();break;case n.TOUCH_PAN:if(i.enablePan===!1)return;yt(L),i.update();break;case n.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;wt(L),i.update();break;case n.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;bt(L),i.update();break;default:a=n.NONE}}function Ut(L){i.enabled!==!1&&L.preventDefault()}function Ot(L){A.push(L.pointerId)}function Bt(L){delete N[L.pointerId];for(let mt=0;mt<A.length;mt++)if(A[mt]==L.pointerId){A.splice(mt,1);return}}function Ct(L){let mt=N[L.pointerId];mt===void 0&&(mt=new Gt,N[L.pointerId]=mt),mt.set(L.pageX,L.pageY)}function Et(L){const mt=L.pointerId===A[0]?A[1]:A[0];return N[mt]}i.domElement.addEventListener("contextmenu",Ut),i.domElement.addEventListener("pointerdown",P),i.domElement.addEventListener("pointercancel",G),i.domElement.addEventListener("wheel",lt,{passive:!1}),document.addEventListener("keydown",dt,{passive:!0,capture:!0}),this.update()}}const q={SEED:null,MAZE_DEGREE:4,MIN_MAZE_DEGREE:4,MAX_MAZE_DEGREE:16,BRANCHING_FACTOR:.1,BRAID_FACTOR:.1,SHADOW_SIZE_FACTOR:.075,TELEPORT_MAP_OPACITY:.25,PLAYER_COLLISION_RADIUS:.275,PLAYER_COLLISION_OFFSET_X:0,PLAYER_COLLISION_OFFSET_Y:-.125,PLAYER_START_X:.5,PLAYER_START_Y:1.7,PLAYER_SHADOW_OFFSET_X:-.28,PLAYER_SHADOW_OFFSET_Y:-.15,PLAYER_SHADOW_WIDTH_FACTOR:.45,PLAYER_SHADOW_HEIGHT_FACTOR:.25,SHOW_COLLISION_DEBUG:!1,MOVE_SPEED_FACTOR:2,ROT_SPEED:3,HUNTER_SPEED:800,VORTEX_SPEED_NORMAL:1.5,VORTEX_SPEED_FAST:6,getHunterCount(s){return s>=16?3:s>=8?2:1},getTeleportCount(s){if(s<=8)return Math.max(2,Math.floor(s/2));const t=s-8;return Math.floor(.125*t*t+.5*t+4)},getPathfinderCount(s){return this.getTeleportCount(s)},COLORS:{WALL:"#444",PATH_KNOWN:"#88ccff",PATH_VISITED:"#888",NEON_UP:"#00ffff",NEON_DOWN:"#ff00ff",NEON_UP_UNUSED:"#006666",NEON_DOWN_UNUSED:"#660066",START:"#ff0",EXIT:"#0f0",PLAYER:"#f00",PLAYER_OUTLINE:"#ffffff",HUNTER:"#a0f",TELEPORT:"#ff8c00",TELEPORT_INACTIVE:"#555555",REVEALED_PATH:"#ffffff",ELEVATOR_BIDIRECTIONAL:"#ffffff",THREE_PLAYER:16711680,THREE_HUNTER:11141375,THREE_START:16776960,THREE_EXIT:65280,THREE_VISITED:8947848,THREE_KNOWN:8965375,THREE_ELEVATOR_UP:65535,THREE_ELEVATOR_DOWN:16711935,THREE_TELEPORT:16747520,THREE_KEY:16766720,THREE_ELEVATOR_SHAFT:{bottom:16711935,top:65535}}},ya={en:{gameTitle:"VOID ESCAPE",gameCredits:"a game by Bernard Rodrigues",activeHunters:"Active Hunters",activeTeleports:"Active Teleports",activeKeys:"Active Keys",availablePathfinders:"Available Pathfinders",mazeDegree:"Maze Degree",safeMode:"Safe Mode",generateMaze:"NEW GAME",continue:"CONTINUE",degreeHint:"Controls the grid size. Higher values create larger, more complex mazes.",safeModeHint:"When active, no hunters will spawn in the maze.",storyMsg1:"The mystical church of chaos worship!",storyMsg2:"The greatest monument to chaos worship.",storyMsg3:"I am a priestess of the word of the Jelly god.",storyMsg4:"But their word is a lie! The chaos is a lie!",storyMsg5:"So I was condemned to exile...",storyMsg6:"Condemned to the void...",hudKeys:"KEYS",hudPathfinders:"PATHFINDERS",hudFloor:"Floor",hudVisited:"Visited",proximityDetector:"PROXIMITY DETECTOR",mapLegendTitle:"MAP LEGEND",legendVisited:"Visited Path",legendKnown:"Known Path",legendStart:"Starting Point",legendExit:"Maze Exit",legendHunter:"Void Hunter",legendTeleport:"Teleport",legendElevator:"Elevator",controlsHintTitle:"CONTROLS HINT",actionMove:"Move / Rotate",actionElevator:"Elevator Up / Down",actionMap:"3D Holographic Map",actionZoom:"Zoom Minimap",msgVoidHuntersDetected:"Void Hunters Detected",msgKeySecured:"Key secured ({collected}/{total})",msgExitUnlocked:"Exit unlocked",msgKeysRemaining:"{count} key(s) remaining",msgNoOtherActiveTeleport:"No other active teleports",msgExitFound:"Exit found",msgNoPathfindersRemaining:"No pathfinders remaining",msgExitNotFoundYet:"Exit not found yet",msgSafePointTeleport:"Safe point... Teleport?",msgOopsNoisyShit:"Oops... noisy sh*t!",msgWhereAmI:"Where am I?",msgElevatorUp:"Up?",msgElevatorDown:"Down?",msgWhichWay:"Which way?",msgDidYouHearThat:"Did you hear that?",msgIWasDetected:"Damn! I was detected.",msgFoundPathfinder:"Found a pathfinder!",msgWorldSaved:"World saved. What now?",msgKeyDropped:"Oh! Just dropped a key...",msgPlayerRespawn:"Ok.. ok.. guess I'm alive..",statusLabel:"HUNTER STATUS:",statusScanning:"SCANNING",statusActive:"ACTIVE",statusSleeping:"SLEEPING",statusTracking:"TRACKING MODE",statusConverging:"HUNTERS CONVERGING ({ticks} Ticks)",pauseTitle:"PAUSED",resume:"RESUME",victoryTitle:"Mission Accomplished",victoryText:"You have successfully navigated the 3D void.",victoryCompletion:"MAP COMPLETION: {percent}%",mapCompletion:"MAP COMPLETION",victoryDeaths:"DEATHS",victoryDegree:"MAZE DEGREE",victoryTime:"COMPLETION TIME",playAgain:"PLAY AGAIN",mainMenu:"MAIN MENU",gameOverTitle:"Terminated",gameOverText:"You were caught by the void hunters.",saving:"SAVING...",generatingMaze:"GENERATING MAZE...",teleportAnomaly:"TELEPORT ANOMALY",ticks:"TICKS",map3dInstructions:"Drag to rotate | Scroll to zoom | M to return",teleportWarning:"TELEPORT",map:"MAP",teleport:"TELEPORT",teleportationLink:"TELEPORTATION LINK",teleportJumpSector:"Jump to Sector {floor}F?",teleportTargetGrid:"Target Grid: ({x}, {y})",teleportGo:"GO",teleportCancel:"CANCEL"},ptBr:{gameTitle:"VOID ESCAPE",gameCredits:"um jogo de Bernard Rodrigues",activeHunters:"Caçadores Ativos",activeTeleports:"Teleportes Ativos",activeKeys:"Chaves Ativas",availablePathfinders:"Localizadores Disponíveis",mazeDegree:"Grau do Labirinto",safeMode:"Modo Seguro",generateMaze:"NOVO JOGO",continue:"CONTINUAR",degreeHint:"Controla o tamanho da grade. Valores maiores criam labirintos maiores e mais complexos.",safeModeHint:"Quando ativo, nenhum caçador surgirá no labirinto.",storyMsg1:"A igreja mística do culto ao caos!",storyMsg2:"O maior monumento ao culto do caos.",storyMsg3:"Sou uma sacerdotisa da palavra do deus Geleia.",storyMsg4:"Mas sua palavra é uma mentira! O caos é uma mentira!",storyMsg5:"Então fui condenada ao exílio...",storyMsg6:"Condenada ao vazio...",hudKeys:"CHAVES",hudPathfinders:"LOCALIZADORES",hudFloor:"Andar",hudVisited:"Visitado",proximityDetector:"DETECTOR DE PROXIMIDADE",mapLegendTitle:"LEGENDA DO MAPA",legendVisited:"Caminho Visitado",legendKnown:"Caminho Conhecido",legendStart:"Ponto de Partida",legendExit:"Saída do Labirinto",legendHunter:"Caçador do Vazio",legendTeleport:"Teleporte",legendElevator:"Elevador",controlsHintTitle:"DICA DE CONTROLES",actionMove:"Mover / Girar",actionElevator:"Elevador Subir / Descer",actionMap:"Mapa Holográfico 3D",actionZoom:"Zoom do Minimapa",msgVoidHuntersDetected:"Caçadores do Vazio Detectados",msgKeySecured:"Chave obtida ({collected}/{total})",msgExitUnlocked:"Saída destrancada",msgKeysRemaining:"{count} chave(s) restante(s)",msgNoOtherActiveTeleport:"Nenhum outro teleporte ativo",msgExitFound:"Saída encontrada",msgNoPathfindersRemaining:"Nenhum localizador restante",msgExitNotFoundYet:"Saída ainda não encontrada",msgSafePointTeleport:"Ponto seguro... Teleportar?",msgOopsNoisyShit:"Ops... troço barulhento!",msgWhereAmI:"Onde estou?",msgElevatorUp:"Subir?",msgElevatorDown:"Descer?",msgWhichWay:"Que direção?",msgDidYouHearThat:"Ouviu alguma coisa?",msgIWasDetected:"Droga! Fui detectada.",msgFoundPathfinder:"Localizador encontrado!",msgWorldSaved:"Salvei o mundo. E agora?",msgKeyDropped:"Ih... Derrubei uma chave...",msgPlayerRespawn:"Ok.. ok.. sobrevivi..",statusLabel:"STATUS DO CAÇADOR:",statusScanning:"ESCANEANDO",statusActive:"ATIVO",statusSleeping:"DORMINDO",statusTracking:"MODO DE RASTREAMENTO",statusConverging:"CAÇADORES CONVERGINDO ({ticks} Ticks)",pauseTitle:"PAUSA",resume:"RETOMAR",victoryTitle:"Missão Cumprida",victoryText:"Você atravessou o vazio 3D com sucesso.",victoryCompletion:"MAPA COMPLETO: {percent}%",mapCompletion:"MAPA COMPLETO",victoryDeaths:"MORTES",victoryDegree:"GRAU DO LABIRINTO",victoryTime:"TEMPO DE CONCLUSÃO",playAgain:"JOGAR NOVAMENTE",mainMenu:"MENU PRINCIPAL",gameOverTitle:"Eliminado",gameOverText:"Você foi pego pelos caçadores do vazio.",saving:"SALVANDO...",generatingMaze:"GERANDO LABIRINTO...",teleportAnomaly:"ANOMALIA DE TELEPORTE",ticks:"TICKS",map3dInstructions:"Arraste para girar | Role para zoom | M para voltar",teleportWarning:"TELEPORTE",map:"MAPA",teleport:"TELEPORTE",teleportationLink:"LINK DE TELEPORTE",teleportJumpSector:"Pular para o Setor {floor}F?",teleportTargetGrid:"Coordenada Alvo: ({x}, {y})",teleportGo:"IR",teleportCancel:"CANCELAR"},ja:{gameTitle:"ヴォイド・エスケープ",gameCredits:"ベルナルド・ホドリゲス制作",activeHunters:"アクティブなハンター",activeTeleports:"アクティブなテレポート",activeKeys:"アクティブな鍵",availablePathfinders:"使用可能なパスファインダー",mazeDegree:"迷路の難易度",safeMode:"セーフモード",generateMaze:"ニューゲーム",continue:"つづきから",degreeHint:"グリッドのサイズを調整します。値が大きいほど、より広く複雑な迷路になります。",safeModeHint:"有効にすると、迷路にハンターが出現しなくなります。",storyMsg1:"混沌崇拝の神秘的な教会!",storyMsg2:"混沌崇拝の最大の記念碑。",storyMsg3:"私はゼリー神の言葉に仕える巫女よ。",storyMsg4:"でも彼らの言葉は嘘!混沌なんて嘘っぱちなんだから!",storyMsg5:"だから追放の刑に処されたの…",storyMsg6:"虚空へと追放されて…",hudKeys:"鍵",hudPathfinders:"パスファインダー",hudFloor:"階層",hudVisited:"訪問済み",proximityDetector:"近接探知機",mapLegendTitle:"マップ凡例",legendVisited:"訪問済みの道",legendKnown:"既知の道",legendStart:"スタート地点",legendExit:"迷路の出口",legendHunter:"虚空のハンター",legendTeleport:"テレポート",legendElevator:"エレベーター",controlsHintTitle:"操作方法",actionMove:"移動 / 回転",actionElevator:"エレベーター 上昇 / 下降",actionMap:"3Dホログラフィックマップ",actionZoom:"ミニマップのズーム",msgVoidHuntersDetected:"虚空のハンターを検知",msgKeySecured:"鍵を入手 ({collected}/{total})",msgExitUnlocked:"出口の鍵が開いた",msgKeysRemaining:"残り{count}個の鍵",msgNoOtherActiveTeleport:"他に有効なテレポートはない",msgExitFound:"出口を発見",msgNoPathfindersRemaining:"パスファインダーが残っていない",msgExitNotFoundYet:"出口はまだ見つかっていない",msgSafePointTeleport:"安全地帯…テレポートする?",msgOopsNoisyShit:"あら…うるさいったらないわね!",msgWhereAmI:"ここどこ?",msgElevatorUp:"上る?",msgElevatorDown:"下る?",msgWhichWay:"どっちの道?",msgDidYouHearThat:"今の聞こえた?",msgIWasDetected:"しまった、見つかっちゃった!",msgFoundPathfinder:"パスファインダー発見!",msgWorldSaved:"世界を救っちゃった。さて、次は?",msgKeyDropped:"あ、鍵落としちゃった…",msgPlayerRespawn:"よしよし…どうやらまだ生きてるな…",statusLabel:"ハンターの状態:",statusScanning:"スキャン中",statusActive:"アクティブ",statusSleeping:"スリープ中",statusTracking:"追跡モード",statusConverging:"ハンターが接近中 ({ticks} ティック)",pauseTitle:"一時停止",resume:"再開",victoryTitle:"任務完了",victoryText:"3Dの虚空を無事に踏破した。",victoryCompletion:"マップ達成度: {percent}%",mapCompletion:"マップ達成度",victoryDeaths:"死亡数",victoryDegree:"迷路の次数",victoryTime:"クリア時間",playAgain:"もう一度プレイ",mainMenu:"メインメニュー",gameOverTitle:"終了",gameOverText:"虚空のハンターに捕まってしまった。",saving:"セーブ中…",generatingMaze:"迷路生成中...",teleportAnomaly:"テレポート異常",ticks:"ティック",map3dInstructions:"ドラッグで回転 | スクロールでズーム | Mキーで戻る",teleportWarning:"テレポート",map:"マップ",teleport:"テレポート",teleportationLink:"テレポートリンク",teleportJumpSector:"{floor}階のセクターへ移動する?",teleportTargetGrid:"目標座標: ({x}, {y})",teleportGo:"移動",teleportCancel:"キャンセル"},es:{gameTitle:"ESCAPE DEL VACÍO",gameCredits:"un juego de Bernard Rodrigues",activeHunters:"Cazadores Activos",activeTeleports:"Teletransportes Activos",activeKeys:"Llaves Activas",availablePathfinders:"Localizadores Disponibles",mazeDegree:"Grado del Laberinto",safeMode:"Modo Seguro",generateMaze:"NUEVA PARTIDA",continue:"CONTINUAR",degreeHint:"Controla el tamaño de la cuadrícula. Valores más altos crean laberintos más grandes y complejos.",safeModeHint:"Cuando está activo, no aparecerán cazadores en el laberinto.",storyMsg1:"¡La mística iglesia del culto al caos!",storyMsg2:"El mayor monumento al culto del caos.",storyMsg3:"Soy una sacerdotisa de la palabra del dios Gelatina.",storyMsg4:"¡Pero su palabra es una mentira! ¡El caos es mentira!",storyMsg5:"Así que fui condenada al exilio...",storyMsg6:"Condenada al vacío...",hudKeys:"LLAVES",hudPathfinders:"LOCALIZADORES",hudFloor:"Piso",hudVisited:"Visitado",proximityDetector:"DETECTOR DE PROXIMIDAD",mapLegendTitle:"LEYENDA DEL MAPA",legendVisited:"Camino Visitado",legendKnown:"Camino Conocido",legendStart:"Punto de Partida",legendExit:"Salida del Laberinto",legendHunter:"Cazador del Vacío",legendTeleport:"Teletransporte",legendElevator:"Ascensor",controlsHintTitle:"AYUDA DE CONTROLES",actionMove:"Mover / Girar",actionElevator:"Ascensor Subir / Bajar",actionMap:"Mapa Holográfico 3D",actionZoom:"Zoom del Minimapa",msgVoidHuntersDetected:"Cazadores del Vacío Detectados",msgKeySecured:"Llave obtenida ({collected}/{total})",msgExitUnlocked:"Salida desbloqueada",msgKeysRemaining:"{count} llave(s) restante(s)",msgNoOtherActiveTeleport:"No hay otros teletransportes activos",msgExitFound:"Salida encontrada",msgNoPathfindersRemaining:"No quedan localizadores",msgExitNotFoundYet:"Salida aún no encontrada",msgSafePointTeleport:"Punto seguro... ¿Teletransportarse?",msgOopsNoisyShit:"Ups... ¡qué cosa tan ruidosa!",msgWhereAmI:"¿Dónde estoy?",msgElevatorUp:"¿Subir?",msgElevatorDown:"¿Bajar?",msgWhichWay:"¿Por dónde?",msgDidYouHearThat:"¿Escuchaste eso?",msgIWasDetected:"¡Rayos! Fui detectada.",msgFoundPathfinder:"¡Localizador encontrado!",msgWorldSaved:"Salvé el mundo. ¿Y ahora qué?",msgKeyDropped:"¡Ah! Se me cayó una llave...",msgPlayerRespawn:"Vale.. vale.. parece que sigo viva..",statusLabel:"ESTADO DEL CAZADOR:",statusScanning:"ESCANEANDO",statusActive:"ACTIVO",statusSleeping:"DURMIENDO",statusTracking:"MODO DE RASTREO",statusConverging:"CAZADORES CONVERGIENDO ({ticks} Ticks)",pauseTitle:"PAUSA",resume:"REANUDAR",victoryTitle:"Misión Cumplida",victoryText:"Atravesaste el vacío 3D con éxito.",victoryCompletion:"MAPA COMPLETADO: {percent}%",mapCompletion:"MAPA COMPLETADO",victoryDeaths:"MUERTES",victoryDegree:"GRADO DEL LABERINTO",victoryTime:"TIEMPO DE FINALIZACIÓN",playAgain:"JUGAR DE NUEVO",mainMenu:"MENÚ PRINCIPAL",gameOverTitle:"Eliminada",gameOverText:"Fuiste atrapada por los cazadores del vacío.",saving:"GUARDANDO...",generatingMaze:"GENERANDO LABERINTO...",teleportAnomaly:"ANOMALÍA DE TELETRANSPORTE",ticks:"TICKS",map3dInstructions:"Arrastra para girar | Desplázate para zoom | M para volver",teleportWarning:"TELETRANSPORTE",map:"MAPA",teleport:"TELETRANSPORTE",teleportationLink:"ENLACE DE TELETRANSPORTE",teleportJumpSector:"¿Saltar al Sector {floor}F?",teleportTargetGrid:"Coordenada Objetivo: ({x}, {y})",teleportGo:"IR",teleportCancel:"CANCELAR"}};let Pn="en";function is(s){ya[s]?Pn=s:Pn="en"}function Wp(){if(typeof navigator<"u"){const s=navigator.language||navigator.userLanguage;if(s){const t=s.toLowerCase();if(t.startsWith("pt")){is("ptBr");return}if(t.startsWith("ja")){is("ja");return}if(t.startsWith("es")){is("es");return}}}is("en")}Wp();function Nt(s,t={},e=Pn){var n,a;let i=((n=ya[e])==null?void 0:n[s])||((a=ya.en)==null?void 0:a[s])||s;return Object.keys(t).forEach(o=>{i=i.replace(`{${o}}`,t[o])}),i}function rs(s=Pn){typeof document<"u"&&document.querySelectorAll("[data-i18n]").forEach(e=>{const i=e.getAttribute("data-i18n");if(i){const n=Nt(i,{},s);n!==i&&(e instanceof HTMLInputElement&&e.type==="button"?e.value=n:e.textContent=n)}})}class tl{constructor(){O(this,"_data");this._data=[]}get size(){return this._data.length}push(t){this._data.push(t),this._bubbleUp(this._data.length-1)}pop(){const t=this._data[0],e=this._data.pop();return this._data.length>0&&e!==void 0&&(this._data[0]=e,this._siftDown(0)),t}_bubbleUp(t){for(;t>0;){const e=t-1>>1;if(this._data[e].f<=this._data[t].f)break;[this._data[e],this._data[t]]=[this._data[t],this._data[e]],t=e}}_siftDown(t){const e=this._data.length;for(;;){let i=t;const n=2*t+1,a=2*t+2;if(n<e&&this._data[n].f<this._data[i].f&&(i=n),a<e&&this._data[a].f<this._data[i].f&&(i=a),i===t)break;[this._data[i],this._data[t]]=[this._data[t],this._data[i]],t=i}}}const Yp=[{dx:1,dy:0,dz:0},{dx:-1,dy:0,dz:0},{dx:0,dy:1,dz:0},{dx:0,dy:-1,dz:0},{dx:0,dy:0,dz:1},{dx:0,dy:0,dz:-1}],el=[{dx:1,dy:0,dz:0},{dx:-1,dy:0,dz:0},{dx:0,dy:1,dz:0},{dx:0,dy:-1,dz:0},{dx:0,dy:0,dz:2},{dx:0,dy:0,dz:-2}];function ms(s,t,e,i,n,a){return Math.abs(s-i)+Math.abs(t-n)+Math.abs(e-a)}function il(s,t,e,i,n=0,a=null){if(s.x===t.x&&s.y===t.y&&s.z===t.z)return[];const o=new Map,r=new Map,c=`${s.x},${s.y},${s.z}`;r.set(c,0);const l=new tl;for(l.push({f:ms(s.x,s.y,s.z,t.x,t.y,t.z),node:s});l.size>0;){const u=l.pop();if(!u)continue;const{node:f}=u,p=`${f.x},${f.y},${f.z}`;if(f.x===t.x&&f.y===t.y&&f.z===t.z)return Xp(o,p);const v=r.get(p)??0;for(const{dx:m,dy:g,dz:h}of el){const d=f.x+m,x=f.y+g,_=f.z+h;if(d<0||d>=i||x<0||x>=i||_<0||_>=i||a&&d===a.x&&x===a.y&&_===a.z)continue;const y=e[d*i*i+x*i+_];if(y===n||y===8)continue;if(h!==0){const A=f.z+h/2;if(e[f.x*i*i+f.y*i+A]===n)continue}const T=`${d},${x},${_}`,S=v+1;S<(r.get(T)??1/0)&&(o.set(T,f),r.set(T,S),l.push({f:S+ms(d,x,_,t.x,t.y,t.z),node:{x:d,y:x,z:_}}))}}return null}function Xp(s,t){const e=[];let i=t;for(;s.has(i);){const n=s.get(i);if(!n)break;const[a,o,r]=i.split(",").map(Number);e.push({x:a,y:o,z:r}),i=`${n.x},${n.y},${n.z}`}return e.reverse(),e}function $p(s,t,e,i,n=0,a=1/0,o=null){if(s.x===t.x&&s.y===t.y&&s.z===t.z)return 0;const r=new Map,c=`${s.x},${s.y},${s.z}`;r.set(c,0);const l=new tl;for(l.push({f:ms(s.x,s.y,s.z,t.x,t.y,t.z),node:s});l.size>0;){const u=l.pop();if(!u)continue;const{node:f}=u,p=`${f.x},${f.y},${f.z}`,v=r.get(p)??0;if(v>a)return 1/0;if(f.x===t.x&&f.y===t.y&&f.z===t.z)return v;for(const{dx:m,dy:g,dz:h}of el){const d=f.x+m,x=f.y+g,_=f.z+h;if(d<0||d>=i||x<0||x>=i||_<0||_>=i||o&&d===o.x&&x===o.y&&_===o.z)continue;const y=e[d*i*i+x*i+_];if(y===n||y===8)continue;if(h!==0){const A=f.z+h/2;if(e[f.x*i*i+f.y*i+A]===n)continue}const T=`${d},${x},${_}`,S=v+1;S<(r.get(T)??1/0)&&(r.set(T,S),l.push({f:S+ms(d,x,_,t.x,t.y,t.z),node:{x:d,y:x,z:_}}))}}return 1/0}function Kp(s,t,e,i,n=0,a=10){if(s.x===t.x&&s.y===t.y&&s.z===t.z)return 0;const o=[{x:s.x,y:s.y,z:s.z,dist:0}];let r=0;const c=new Map;for(c.set(`${s.x},${s.y},${s.z}`,0);r<o.length;){const l=o[r++];if(!(l.dist>a))for(const{dx:u,dy:f,dz:p}of Yp){const v=l.x+u,m=l.y+f,g=l.z+p;if(v<0||v>=i||m<0||m>=i||g<0||g>=i)continue;const h=e[v*i*i+m*i+g];if(h===n||h===8)continue;const d=`${v},${m},${g}`,_=g%2===0?0:1,y=l.dist+_;if(y<(c.get(d)??1/0)){if(c.set(d,y),v===t.x&&m===t.y&&g===t.z)return y;_===0?o.splice(r,0,{x:v,y:m,z:g,dist:y}):o.push({x:v,y:m,z:g,dist:y})}}}return 1/0}function qp(s,t,e,i,n,a){const o=[{x:s.x,y:s.y,z:s.z,path:[]}];let r=0;const c=new Uint8Array(i*i*i);for(c[s.x*i*i+s.y*i+s.z]=1;r<o.length;){const l=o[r++],u=`${l.x},${l.y},${l.z}`;if(!t.has(u))return l.path;const f=a(l.x,l.y,l.z,e,n,!1);for(const p of f){const v=p.x*i*i+p.y*i+p.z;c[v]||(c[v]=1,o.push({x:p.x,y:p.y,z:p.z,path:[...l.path,p]}))}}return null}class Zp{constructor(t,e,i){O(this,"maze");O(this,"id");O(this,"history");O(this,"visitedNodes");O(this,"pathToTarget");O(this,"x");O(this,"y");O(this,"z");O(this,"visualX");O(this,"visualY");O(this,"visualZ");O(this,"state");O(this,"lastPos");O(this,"jellyTime");O(this,"lowCanvas");O(this,"lctx");this.maze=t,this.id=i,this.history=[],this.visitedNodes=new Set,this.pathToTarget=[],e?(this.x=e.x,this.y=e.y,this.z=e.z,this.visualX=e.x,this.visualY=e.y,this.visualZ=e.z,this.state="WANDERING",this.lastPos={x:this.x,y:this.y,z:this.z},this.visitedNodes.add(`${this.x},${this.y},${this.z}`)):(this.x=null,this.y=null,this.z=null,this.visualX=null,this.visualY=null,this.visualZ=null,this.state="SLEEP",this.lastPos=null),this.jellyTime=0,typeof document<"u"&&(this.lowCanvas=document.createElement("canvas"),this.lowCanvas.width=64,this.lowCanvas.height=64,this.lctx=this.lowCanvas.getContext("2d"))}generateCloudTexture(t=.016){if(this.state==="SLEEP"||(this.jellyTime+=t,typeof document>"u"||!this.lctx))return;const e=64,i=this.lctx;i.globalCompositeOperation="destination-out",i.fillStyle="rgba(0, 0, 0, 0.22)",i.fillRect(0,0,e,e),i.globalCompositeOperation="source-over";const n=this.jellyTime;try{const a=i.getImageData(0,0,e,e),o=a.data;for(let r=0;r<e;r++)for(let c=0;c<e;c++){const l=c-e/2,u=r-e/2,f=Math.sqrt(l*l+u*u),p=Math.sin(n*1.5+c*.08)*2.5,v=e*.35+p;if(f<v+Math.random()*1.5){const m=90+Math.floor(Math.random()*45),g=10+Math.floor(Math.random()*20),h=140+Math.floor(Math.random()*60),d=(r*e+c)*4;o[d]=m,o[d+1]=g,o[d+2]=h,o[d+3]=255}}i.putImageData(a,0,0)}catch{}if(Math.random()<.04){i.fillStyle=Math.random()<.7?"#ffffff":"#b3ffff";const a=e/2-8+Math.random()*16,o=e/2-8+Math.random()*16;i.fillRect(a,o,2+Math.random()*3,4+Math.random()*10)}if(Math.random()<.12){const a=Math.floor(Math.random()*3)+1,o=["#00ff66","#ff0055","#00ccff","#ffff00","#ffffff"];for(let r=0;r<a;r++){const c=Math.floor(Math.random()*e),l=Math.floor(Math.random()*e),u=c-e/2,f=l-e/2;if(Math.sqrt(u*u+f*f)<e*.32){const v=Math.floor(Math.random()*4)+2,m=Math.floor(Math.random()*2)+1;i.fillStyle=o[Math.floor(Math.random()*o.length)],i.fillRect(c,l,v,m)}}}if(Math.random()<.08){const a=Math.floor(Math.random()*e),o=Math.floor(Math.random()*6)+2,r=Math.floor(Math.random()*6)-3;try{const c=i.getImageData(0,a,e,o);i.clearRect(0,a,e,o),i.putImageData(c,r,a)}catch{}}}move(t,e,i){if(this.state==="SLEEP"||this.x===null||this.y===null||this.z===null)return;const n=this.getValidNeighbors(e,i);if(n.length===0)return;const a=Math.round(Math.cbrt(e.length));(e.get?e.get(this.x,this.y,this.z):e[this.x*a*a+this.y*a+this.z]??0)===i.VISITED&&this.state!=="TELEPORT_TRACKING"&&this.state!=="TRACKING"&&(this.state="TRACKING",this.pathToTarget=[],this.visitedNodes.clear(),this.visitedNodes.add(`${this.x},${this.y},${this.z}`));let r;if(this.pathToTarget.length>0){const c=this.pathToTarget[0],l=e[c.x*a*a+c.y*a+c.z];(this.state==="TRACKING"?l===i.VISITED||l===i.START||l===i.EXIT:l!==i.WALL)?r=this.pathToTarget.shift():this.pathToTarget=[]}if(!r)if(this.state==="TELEPORT_TRACKING")r=void 0;else{let c=this.findPathToNearestUnvisited(e,i);if((!c||c.length===0)&&(this.visitedNodes.clear(),this.visitedNodes.add(`${this.x},${this.y},${this.z}`),c=this.findPathToNearestUnvisited(e,i)),c&&c.length>0)this.pathToTarget=c,r=this.pathToTarget.shift();else{const l=this.lastPos||{x:this.x,y:this.y,z:this.z},u=n.filter(f=>f.x!==l.x||f.y!==l.y||f.z!==l.z);r=u.length>0?u[Math.floor(Math.random()*u.length)]:n[0]}}r&&(this.history.push({x:this.x,y:this.y,z:this.z}),this.history.length>2&&this.history.shift(),this.lastPos={x:this.x,y:this.y,z:this.z},this.x=r.x,this.y=r.y,this.z=r.z,this.visitedNodes.add(`${this.x},${this.y},${this.z}`))}findPathToTarget(t,e,i){const n=Math.round(Math.cbrt(e.length));return il({x:this.x,y:this.y,z:this.z},t,e,n,i.WALL,this.maze.startPos)}findPathToNearestUnvisited(t,e){const i=Math.round(Math.cbrt(t.length));return qp({x:this.x,y:this.y,z:this.z},this.visitedNodes,t,i,e,(n,a,o,r,c)=>this.getValidNeighbors(r,c,n,a,o,this.state==="TRACKING"))}getValidNeighbors(t,e,i=this.x,n=this.y,a=this.z,o=this.state==="TRACKING"){const r=[],c=[{dx:1,dy:0,dz:0},{dx:-1,dy:0,dz:0},{dx:0,dy:1,dz:0},{dx:0,dy:-1,dz:0},{dx:0,dy:0,dz:2},{dx:0,dy:0,dz:-2}],l=Math.round(Math.cbrt(t.length));for(const u of c){const f=i+u.dx,p=n+u.dy,v=a+u.dz;if(f>=0&&f<l&&p>=0&&p<l&&v>=0&&v<l){const m=Math.floor(this.maze.startPos.x),g=Math.floor(this.maze.startPos.y),h=this.maze.startPos.z;if(f===m&&p===g&&v===h)continue;const d=t[f*l*l+p*l+v];if(d===e.EXIT)continue;if(d!==e.WALL&&d!==8){if(u.dz!==0){const x=a+u.dz/2;if(t[i*l*l+n*l+x]===e.WALL)continue}o?(d===e.VISITED||d===e.START||d===e.EXIT||this.maze.visitedCells&&this.maze.visitedCells.has(`${f},${p},${v}`))&&r.push({x:f,y:p,z:v}):r.push({x:f,y:p,z:v})}}}return r}}class jp{constructor(t,e,i=null){O(this,"n");O(this,"branchingFactor");O(this,"size");O(this,"seed");O(this,"random");O(this,"matrix");O(this,"TYPES");O(this,"startPos");const n=t!==void 0?t:q.MAZE_DEGREE!==void 0?q.MAZE_DEGREE:8,a=e!==void 0?e:q.BRANCHING_FACTOR!==void 0?q.BRANCHING_FACTOR:.2;this.n=Math.max(3,Math.min(16,n)),this.branchingFactor=Math.max(0,Math.min(1,a)),this.size=2*this.n+1,i!=null?(this.seed=i,this.random=this.createSeededRandom(i)):(this.seed=null,this.random=Math.random),this.matrix=this.initMatrix(),this.TYPES={WALL:0,PATH:1,VISITED:2,START:3,EXIT:4,ELEVATOR_VISITED:5,TELEPORT:6,KEY:7,STATUE:8},this.startPos={x:q.PLAYER_START_X!==void 0?q.PLAYER_START_X:.5,y:q.PLAYER_START_Y!==void 0?q.PLAYER_START_Y:1.5,z:0}}createSeededRandom(t){let e=0;if(typeof t=="string")for(let i=0;i<t.length;i++)e=Math.imul(31,e)+t.charCodeAt(i)|0;else e=t|0;return function(){let i=e+=1831565813;return i=Math.imul(i^i>>>15,i|1),i^=i+Math.imul(i^i>>>7,i|61),((i^i>>>14)>>>0)/4294967296}}initMatrix(){return new Int8Array(this.size*this.size*this.size)}_idx(t,e,i){return t*this.size*this.size+e*this.size+i}generate(){const t=[],e=1+2*Math.floor(this.random()*this.n),i=1+2*Math.floor(this.random()*this.n),n=1+2*Math.floor(this.random()*this.n);for(this.matrix[this._idx(e,i,n)]=this.TYPES.PATH,t.push({x:e,y:i,z:n});t.length>0;){let r=this.random()>this.branchingFactor?t.length-1:Math.floor(this.random()*t.length);const c=t[r],l=this.getUnvisitedNeighbors(c.x,c.y,c.z);if(l.length>0){const u=l[Math.floor(this.random()*l.length)];this.matrix[this._idx(u.x,u.y,u.z)]=this.TYPES.PATH,this.matrix[this._idx((c.x+u.x)/2,(c.y+u.y)/2,(c.z+u.z)/2)]=this.TYPES.PATH,t.push(u)}else t.splice(r,1)}this.setEntryAndExit(),this.placeTeleports(),this.placeKeys(),this.applyBraid(),this.placeStatues();const a=this.size,o=this.matrix;return o.size=a,o.get=(r,c,l)=>o[r*a*a+c*a+l],o.set=(r,c,l,u)=>{o[r*a*a+c*a+l]=u},o}getUnvisitedNeighbors(t,e,i){const n=[],a=[{dx:2,dy:0,dz:0},{dx:-2,dy:0,dz:0},{dx:0,dy:2,dz:0},{dx:0,dy:-2,dz:0},{dx:0,dy:0,dz:2},{dx:0,dy:0,dz:-2}];for(const o of a){const r=t+o.dx,c=e+o.dy,l=i+o.dz;this.isValid(r,c,l)&&this.matrix[this._idx(r,c,l)]===this.TYPES.WALL&&n.push({x:r,y:c,z:l})}return n}isValid(t,e,i){return t>0&&t<this.size-1&&e>0&&e<this.size-1&&i>0&&i<this.size-1}setEntryAndExit(){const t=1+2*Math.floor(this.random()*this.n);this.matrix[this._idx(1,1,t)]=this.TYPES.PATH,this.matrix[this._idx(0,1,t)]=this.TYPES.TELEPORT,this.startPos={x:q.PLAYER_START_X!==void 0?q.PLAYER_START_X:.5,y:q.PLAYER_START_Y!==void 0?q.PLAYER_START_Y:1.5,z:t};const e=1+2*Math.floor(this.random()*this.n),i=2*this.n-1;this.matrix[this._idx(i,i,e)]=this.TYPES.PATH,this.matrix[this._idx(2*this.n,i,e)]=this.TYPES.EXIT}_findExitPos(){for(let t=0;t<this.size;t++)for(let e=0;e<this.size;e++)for(let i=0;i<this.size;i++)if(this.matrix[this._idx(t,e,i)]===this.TYPES.EXIT)return{x:t,y:e,z:i};return{x:2*this.n,y:2*this.n-1,z:this.startPos.z}}_collectDeadEndsAndPaths(){const t=[],e=[],i=[{dx:1,dy:0,dz:0},{dx:-1,dy:0,dz:0},{dx:0,dy:1,dz:0},{dx:0,dy:-1,dz:0},{dx:0,dy:0,dz:1},{dx:0,dy:0,dz:-1}];for(let n=1;n<this.size-1;n++)for(let a=1;a<this.size-1;a++)for(let o=1;o<this.size-1;o++){if(this.matrix[this._idx(n,a,o)]!==this.TYPES.PATH)continue;const r=o+1<this.size&&this.matrix[this._idx(n,a,o+1)]!==this.TYPES.WALL,c=o-1>=0&&this.matrix[this._idx(n,a,o-1)]!==this.TYPES.WALL;if(r||c)continue;let l=0;for(const u of i){const f=n+u.dx,p=a+u.dy,v=o+u.dz;f>=0&&f<this.size&&p>=0&&p<this.size&&v>=0&&v<this.size&&this.matrix[this._idx(f,p,v)]!==this.TYPES.WALL&&l++}(l===1?t:e).push({x:n,y:a,z:o})}return{deadEnds:t,normalPaths:e}}_greedyFill(t,e,i,n,a){const o={x:0,y:1,z:this.startPos.z},r=this._findExitPos(),c=(f,p)=>Math.abs(f.x-p.x)+Math.abs(f.y-p.y)+Math.abs(f.z-p.z);let l=4,u=4;for(;t.length<i&&l>0;){a&&(t.length=0);const f=e.filter(p=>c(p,o)<l||c(p,r)<l?!1:!n.includes(this.matrix[this._idx(p.x,p.y,p.z)]));for(;t.length<i;){let p=null,v=-1;for(const m of f){if(t.some(h=>h.x===m.x&&h.y===m.y&&h.z===m.z))continue;let g=1/0;for(const h of t){const d=c(m,h);d<g&&(g=d)}if(g>=u){const h=Math.min(c(m,o),c(m,r),g);h>v&&(v=h,p=m)}}if(p)t.push(p);else break}t.length<i&&(u>1?u--:l--)}}placeTeleports(){const t=q.getTeleportCount(this.n),{deadEnds:e,normalPaths:i}=this._collectDeadEndsAndPaths(),n=[];this._greedyFill(n,e,t,[],!0),n.length<t&&this._greedyFill(n,i,t,[],!1);for(const a of n)this.matrix[this._idx(a.x,a.y,a.z)]=this.TYPES.TELEPORT}placeKeys(){const t=q.getHunterCount(this.n)*2,{deadEnds:e,normalPaths:i}=this._collectDeadEndsAndPaths(),n=[];this._greedyFill(n,e,t,[this.TYPES.TELEPORT],!0),n.length<t&&this._greedyFill(n,i,t,[this.TYPES.TELEPORT],!1);for(const a of n)this.matrix[this._idx(a.x,a.y,a.z)]=this.TYPES.KEY}applyBraid(){const t=this.size,e=[];for(let o=1;o<t-1;o++)for(let r=1;r<t-1;r++)for(let c=1;c<t-1;c++)if(this.matrix[this._idx(o,r,c)]===this.TYPES.WALL){const l=o%2===0&&r%2!==0&&c%2!==0,u=r%2===0&&o%2!==0&&c%2!==0,f=c%2===0&&o%2!==0&&r%2!==0;if(l){const p=this.matrix[this._idx(o-1,r,c)],v=this.matrix[this._idx(o+1,r,c)];p!==this.TYPES.WALL&&v!==this.TYPES.WALL&&p!==this.TYPES.TELEPORT&&v!==this.TYPES.TELEPORT&&p!==this.TYPES.EXIT&&v!==this.TYPES.EXIT&&p!==this.TYPES.KEY&&v!==this.TYPES.KEY&&e.push({x:o,y:r,z:c,type:"X"})}else if(u){const p=this.matrix[this._idx(o,r-1,c)],v=this.matrix[this._idx(o,r+1,c)];p!==this.TYPES.WALL&&v!==this.TYPES.WALL&&p!==this.TYPES.TELEPORT&&v!==this.TYPES.TELEPORT&&p!==this.TYPES.EXIT&&v!==this.TYPES.EXIT&&p!==this.TYPES.KEY&&v!==this.TYPES.KEY&&e.push({x:o,y:r,z:c,type:"Y"})}else if(f){const p=this.matrix[this._idx(o,r,c-1)],v=this.matrix[this._idx(o,r,c+1)];p!==this.TYPES.WALL&&v!==this.TYPES.WALL&&p!==this.TYPES.TELEPORT&&v!==this.TYPES.TELEPORT&&p!==this.TYPES.EXIT&&v!==this.TYPES.EXIT&&p!==this.TYPES.KEY&&v!==this.TYPES.KEY&&e.push({x:o,y:r,z:c,type:"Z"})}}for(let o=e.length-1;o>0;o--){const r=Math.floor(this.random()*(o+1)),c=e[o];e[o]=e[r],e[r]=c}const i=q.BRAID_FACTOR||.1,n=Math.floor(e.length*i);let a=0;for(const o of e){if(a>=n)break;this.isWideConnection(o.x,o.y,o.z)||o.type==="Z"&&this.isAdjacentElevator(o.x,o.y,o.z)||(this.matrix[this._idx(o.x,o.y,o.z)]=this.TYPES.PATH,a++)}}isWideConnection(t,e,i){const n=this.size,a=(l,u,f)=>l<0||l>=n||u<0||u>=n||f<0||f>=n?!1:l===t&&u===e&&f===i?!0:this.matrix[this._idx(l,u,f)]!==this.TYPES.WALL;return!!(a(t,e+1,i)&&a(t+1,e,i)&&a(t+1,e+1,i)||a(t-1,e,i)&&a(t-1,e+1,i)&&a(t,e+1,i)||a(t,e-1,i)&&a(t+1,e-1,i)&&a(t+1,e,i)||a(t-1,e-1,i)&&a(t,e-1,i)&&a(t-1,e,i)||a(t,e,i+1)&&a(t+1,e,i)&&a(t+1,e,i+1)||a(t-1,e,i)&&a(t-1,e,i+1)&&a(t,e,i+1)||a(t,e,i-1)&&a(t+1,e,i-1)&&a(t+1,e,i)||a(t-1,e,i-1)&&a(t,e,i-1)&&a(t-1,e,i)||a(t,e,i+1)&&a(t,e+1,i)&&a(t,e+1,i+1)||a(t,e-1,i)&&a(t,e-1,i+1)&&a(t,e,i+1)||a(t,e,i-1)&&a(t,e+1,i-1)&&a(t,e+1,i)||a(t,e-1,i-1)&&a(t,e,i-1)&&a(t,e-1,i))}isAdjacentElevator(t,e,i){const n=this.size,a=[{dx:-1,dy:-1},{dx:-1,dy:0},{dx:-1,dy:1},{dx:0,dy:-1},{dx:0,dy:1},{dx:1,dy:-1},{dx:1,dy:0},{dx:1,dy:1}];for(const o of a){const r=t+o.dx,c=e+o.dy;if(!(r<0||r>=n||c<0||c>=n)&&(this.matrix[this._idx(r,c,i)]!==this.TYPES.WALL||i-2>=0&&this.matrix[this._idx(r,c,i-2)]!==this.TYPES.WALL||i+2<n&&this.matrix[this._idx(r,c,i+2)]!==this.TYPES.WALL))return!0}return!1}isDeadEndZ(t,e,i){if(t%2===0||e%2===0||i%2===0)return!1;const n=this.matrix[this._idx(t,e,i)];if(n===this.TYPES.WALL||n===this.TYPES.START||n===this.TYPES.EXIT||n===this.TYPES.TELEPORT||n===this.TYPES.KEY)return!1;const a=this.size,o=[{dx:1,dy:0},{dx:-1,dy:0},{dx:0,dy:1},{dx:0,dy:-1}];for(const c of o){const l=t+c.dx,u=e+c.dy;if(!(l<0||l>=a||u<0||u>=a)&&this.matrix[this._idx(l,u,i)]!==this.TYPES.WALL)return!1}let r=!1;return i-1>=0&&this.matrix[this._idx(t,e,i-1)]!==this.TYPES.WALL&&(r=!0),i+1<a&&this.matrix[this._idx(t,e,i+1)]!==this.TYPES.WALL&&(r=!0),r}isSolvable(){const t=this.size,e={x:Math.floor(this.startPos.x),y:Math.floor(this.startPos.y),z:this.startPos.z},i=[];let n=null;for(let l=0;l<t;l++)for(let u=0;u<t;u++)for(let f=0;f<t;f++){const p=this.matrix[this._idx(l,u,f)];p===this.TYPES.KEY?i.push(`${l},${u},${f}`):p===this.TYPES.EXIT&&(n=`${l},${u},${f}`)}const a=[e],o=new Set([`${e.x},${e.y},${e.z}`]),r=new Set;let c=!1;for(;a.length>0;){const l=a.shift();if(!l)continue;const u=`${l.x},${l.y},${l.z}`;i.includes(u)&&r.add(u),u===n&&(c=!0);const f=[{dx:1,dy:0},{dx:-1,dy:0},{dx:0,dy:1},{dx:0,dy:-1}];for(const p of f){const v=l.x+p.dx,m=l.y+p.dy,g=l.z;if(v>=0&&v<t&&m>=0&&m<t){const h=`${v},${m},${g}`,d=this.matrix[this._idx(v,m,g)];d!==this.TYPES.WALL&&d!==this.TYPES.STATUE&&!o.has(h)&&(o.add(h),a.push({x:v,y:m,z:g}))}}for(const p of[-2,2]){const v=l.z+p;if(v>=0&&v<t){const m=l.z+p/2,g=this.matrix[this._idx(l.x,l.y,m)],h=this.matrix[this._idx(l.x,l.y,v)];if(g!==this.TYPES.WALL&&g!==this.TYPES.STATUE&&h!==this.TYPES.WALL&&h!==this.TYPES.STATUE){const d=`${l.x},${l.y},${v}`;o.has(d)||(o.add(d),a.push({x:l.x,y:l.y,z:v}))}}}}if(!c||r.size!==i.length)return!1;for(let l=0;l<t;l++)for(let u=0;u<t;u++)for(let f=1;f<t;f+=2){const p=this.matrix[this._idx(l,u,f)];if(p!==this.TYPES.WALL&&p!==this.TYPES.STATUE&&!o.has(`${l},${u},${f}`))return!1}return!0}placeStatues(){const t=this.size,e=[];for(let n=0;n<t;n++)for(let a=0;a<t;a++)for(let o=0;o<t;o++)this.isDeadEndZ(n,a,o)&&e.push({x:n,y:a,z:o});let i=0;for(const n of e){const a=this.matrix[this._idx(n.x,n.y,n.z)],o=n.z-1,r=n.z+1,c=o>=0?this.matrix[this._idx(n.x,n.y,o)]:null,l=r<t?this.matrix[this._idx(n.x,n.y,r)]:null;this.matrix[this._idx(n.x,n.y,n.z)]=this.TYPES.STATUE,o>=0&&(this.matrix[this._idx(n.x,n.y,o)]=this.TYPES.WALL),r<t&&(this.matrix[this._idx(n.x,n.y,r)]=this.TYPES.WALL),this.isSolvable()?i++:(this.matrix[this._idx(n.x,n.y,n.z)]=a,o>=0&&(this.matrix[this._idx(n.x,n.y,o)]=c),r<t&&(this.matrix[this._idx(n.x,n.y,r)]=l))}return i}}class Jp{constructor(){O(this,"uiFloorSpan");O(this,"uiMap3dContainer");O(this,"uiMobileControls");O(this,"uiProximeterContainer");O(this,"uiProximeterCells");O(this,"uiProximeterBar");O(this,"uiVictoryScreen");O(this,"uiGameOverScreen");O(this,"uiMobileUp");O(this,"uiMobileDown");O(this,"uiMobileMap");O(this,"uiSavingIndicator");O(this,"savingIndicatorTimeout");O(this,"uiVisitedPercent");O(this,"uiHunterStatusVal");O(this,"uiStatusLabel");O(this,"uiMarqueeContainer");O(this,"uiLegendHunter");O(this,"uiCanvas");O(this,"uiKeysCollected");O(this,"uiKeysTotal");O(this,"uiKeysList");O(this,"uiPauseScreen");O(this,"uiMobilePauseBtn");O(this,"uiPathfindersRemaining");O(this,"uiPathfindersTotal");O(this,"uiControlsHintContent");O(this,"onInfoBanner");O(this,"bannerMessage","");this.uiFloorSpan=document.getElementById("current-floor"),this.uiMap3dContainer=document.getElementById("map3d-container"),this.uiMobileControls=document.getElementById("mobile-controls"),this.uiProximeterContainer=document.getElementById("proximeter-container"),this.uiProximeterCells=document.querySelectorAll(".proximeter-cell"),this.uiProximeterBar=document.querySelector(".proximeter-bar"),this.uiVictoryScreen=document.getElementById("victory-screen"),this.uiGameOverScreen=document.getElementById("game-over-screen"),this.uiMobileUp=document.getElementById("mobile-up"),this.uiMobileDown=document.getElementById("mobile-down"),this.uiMobileMap=document.getElementById("mobile-map"),this.uiSavingIndicator=document.getElementById("saving-indicator"),this.savingIndicatorTimeout=null,this.uiVisitedPercent=document.getElementById("visited-percent"),this.uiHunterStatusVal=document.getElementById("hunter-status-val"),this.uiStatusLabel=document.querySelector("#hunter-status-panel .status-label"),this.uiMarqueeContainer=document.querySelector(".status-marquee-container"),this.uiLegendHunter=document.getElementById("legend-hunter"),this.uiCanvas=document.getElementById("main-2d-canvas"),this.uiKeysCollected=document.getElementById("keys-collected-count"),this.uiKeysTotal=document.getElementById("keys-total-count"),this.uiKeysList=document.getElementById("keys-list-container"),this.uiPauseScreen=document.getElementById("pause-screen"),this.uiMobilePauseBtn=document.getElementById("mobile-pause-btn"),this.uiPathfindersRemaining=document.getElementById("pathfinders-remaining-count"),this.uiPathfindersTotal=document.getElementById("pathfinders-total-count"),this.uiControlsHintContent=document.getElementById("controls-hint-content"),this.localizeDOM()}localizeDOM(t=Pn){rs(t)}showPause(){this.uiPauseScreen&&this.uiPauseScreen.classList.remove("hidden")}hidePause(){this.uiPauseScreen&&this.uiPauseScreen.classList.add("hidden")}showVictory(t=0,e=0,i=8,n=0){this.hideGameUI(),this.uiVictoryScreen&&this.uiVictoryScreen.classList.remove("hidden");const a=document.getElementById("victory-completion-rate");a&&(a.innerText=`${t}%`);const o=document.getElementById("victory-deaths-count");o&&(o.innerText=String(e));const r=document.getElementById("victory-maze-degree");r&&(r.innerText=String(i));const c=document.getElementById("victory-completion-time");if(c){const l=Math.floor(n/3600),u=Math.floor(n%3600/60),f=Math.floor(n%60),p=m=>String(m).padStart(2,"0"),v=l>0?`${p(l)}:${p(u)}:${p(f)}`:`${p(u)}:${p(f)}`;c.innerText=v}}showDeath(t=!1){this.hideGameUI(),this.uiGameOverScreen&&this.uiGameOverScreen.classList.remove("hidden");const e=document.getElementById("continue-btn-death");e&&(e.style.display=t?"":"none")}hideGameUI(){this.uiMobileControls&&this.uiMobileControls.classList.add("hidden"),this.uiMobilePauseBtn&&this.uiMobilePauseBtn.classList.add("hidden"),this.uiMap3dContainer&&this.uiMap3dContainer.classList.add("hidden"),this.uiProximeterContainer&&this.uiProximeterContainer.classList.add("hidden"),this.uiProximeterBar&&this.uiProximeterBar.classList.remove("critical-alert"),this.uiProximeterCells.forEach(t=>t.classList.remove("active")),this.uiCanvas&&this.uiCanvas.classList.remove("hunted-map-effect","nearby-map-effect")}initGameUI(t=!1){this.uiMobileControls&&this.uiMobileControls.classList.remove("hidden"),this.uiMobilePauseBtn&&this.uiMobilePauseBtn.classList.remove("hidden"),this.uiMobileMap&&(this.uiMobileMap.disabled=!0),t?(this.uiStatusLabel&&(this.uiStatusLabel.innerText="SAFE MODE:"),this.uiHunterStatusVal&&(this.uiHunterStatusVal.innerText="ACTIVE",this.uiHunterStatusVal.className="status-marquee-text status--scanning"),this.uiLegendHunter&&this.uiLegendHunter.classList.add("hidden")):(this.uiStatusLabel&&(this.uiStatusLabel.innerText="HUNTER STATUS:"),this.uiLegendHunter&&this.uiLegendHunter.classList.remove("hidden"))}updateVisitedPercent(t){this.uiVisitedPercent&&(this.uiVisitedPercent.innerText=String(t))}updateFloor(t,e,i){if(this.uiFloorSpan){const n=(t+1)/2;this.uiFloorSpan.innerText=String(n)}this.uiMobileUp&&(this.uiMobileUp.disabled=!e),this.uiMobileDown&&(this.uiMobileDown.disabled=!i)}updateKeysHUD(t,e){if(this.uiKeysCollected&&(this.uiKeysCollected.innerText=String(t)),this.uiKeysTotal&&(this.uiKeysTotal.innerText=String(e)),this.uiKeysList){this.uiKeysList.innerHTML="";for(let i=0;i<e;i++){const n=document.createElement("span");n.className="key-dot"+(i<t?" key-dot--collected":""),this.uiKeysList.appendChild(n)}}}updatePathfindersHUD(t,e){this.uiPathfindersRemaining&&(this.uiPathfindersRemaining.innerText=String(t)),this.uiPathfindersTotal&&(this.uiPathfindersTotal.innerText=String(e))}showSavingIndicator(){this.uiSavingIndicator&&(this.savingIndicatorTimeout&&clearTimeout(this.savingIndicatorTimeout),this.uiSavingIndicator.classList.remove("hidden"),this.uiSavingIndicator.classList.add("saving-pulse"),this.savingIndicatorTimeout=window.setTimeout(()=>{this.uiSavingIndicator&&(this.uiSavingIndicator.classList.add("hidden"),this.uiSavingIndicator.classList.remove("saving-pulse"))},2e3))}showInfoBanner(t){this.bannerMessage=t,this.onInfoBanner&&this.onInfoBanner(t)}setMap3DVisible(t){this.uiMap3dContainer&&(t?this.uiMap3dContainer.classList.remove("hidden"):this.uiMap3dContainer.classList.add("hidden"))}updateHazardWarning(t,e,i=!1,n=!1){if(!this.uiHunterStatusVal)return;let a=Nt("statusScanning"),o="status--scanning",r=!1;i?(a=Nt("statusActive"),o="status--scanning"):n?(a=Nt("statusSleeping"),o="status--sleeping"):e>0?(a=Nt("statusConverging",{ticks:e}),o="status--converging",r=!0):t&&(a=Nt("statusTracking"),o="status--tracking",r=!0),this.uiHunterStatusVal.innerText!==a&&(this.uiHunterStatusVal.innerText=a,this.uiHunterStatusVal.className="status-marquee-text "+o),this.uiCanvas&&(r?this.uiCanvas.classList.add("hunted-map-effect"):this.uiCanvas.classList.remove("hunted-map-effect"))}setNearbyWarning(t){this.uiCanvas&&(t?this.uiCanvas.classList.add("nearby-map-effect"):this.uiCanvas.classList.remove("nearby-map-effect"))}updateProximeter(t,e,i){if(!this.uiProximeterContainer)return;if(e>0&&!i)this.uiProximeterContainer.classList.remove("hidden");else{this.uiProximeterContainer.classList.add("hidden");return}let n=0;t<=10&&(n=11-t),this.uiProximeterCells.forEach(a=>{parseInt(a.getAttribute("data-index")||"0")<=n?a.classList.add("active"):a.classList.remove("active")}),this.uiProximeterBar&&(n===10?this.uiProximeterBar.classList.add("critical-alert"):this.uiProximeterBar.classList.remove("critical-alert"))}updateMobileMapButton(t,e,i){this.uiMobileMap&&i&&(t&&!e?(this.uiMobileMap.innerText=Nt("teleport"),this.uiMobileMap.style.borderColor="var(--clr-teleport, #ff8c00)",this.uiMobileMap.style.color="var(--clr-teleport, #ff8c00)",this.uiMobileMap.style.background="rgba(255, 140, 0, 0.2)"):(this.uiMobileMap.innerText=Nt("map"),this.uiMobileMap.style.borderColor="",this.uiMobileMap.style.color="",this.uiMobileMap.style.background=""))}updateControlsHint(t,e=!0){this.uiControlsHintContent&&(t==="gamepad"?this.uiControlsHintContent.innerHTML=`
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
            `)}destroy(){this.savingIndicatorTimeout&&clearTimeout(this.savingIndicatorTimeout)}}class Qp{constructor(){O(this,"keys");O(this,"touchStart");O(this,"touchMoveVector");O(this,"preventScrollKeys");O(this,"handleKeyDown");O(this,"handleKeyUp");O(this,"handleTouchStart");O(this,"handleTouchMove");O(this,"handleTouchEnd");this.keys={},this.touchStart=null,this.touchMoveVector=null,this.preventScrollKeys=["arrowup","arrowdown","arrowleft","arrowright"," ","pageup","pagedown"],this.handleKeyDown=null,this.handleKeyUp=null,this.handleTouchStart=null,this.handleTouchMove=null,this.handleTouchEnd=null,this.init()}init(){this.handleKeyDown=t=>{const e=t.key.toLowerCase();this.keys[e]=!0,this.preventScrollKeys.includes(e)&&t.preventDefault()},this.handleKeyUp=t=>{this.keys[t.key.toLowerCase()]=!1},window.addEventListener("keydown",this.handleKeyDown),window.addEventListener("keyup",this.handleKeyUp)}setupTouch(t,e){this.handleTouchStart=i=>{const n=i.target;t()||e()||n&&n.closest&&n.closest("button")||(i.cancelable&&i.preventDefault(),this.touchStart={x:i.touches[0].clientX,y:i.touches[0].clientY})},this.handleTouchMove=i=>{if(!this.touchStart||t()||e())return;i.cancelable&&i.preventDefault();const n=i.touches[0].clientX-this.touchStart.x,a=i.touches[0].clientY-this.touchStart.y,o=Math.sqrt(n*n+a*a);o>10&&(this.touchMoveVector={x:n/o,y:a/o})},this.handleTouchEnd=()=>{this.touchStart=null,this.touchMoveVector=null},window.addEventListener("touchstart",this.handleTouchStart,{passive:!1}),window.addEventListener("touchmove",this.handleTouchMove,{passive:!1}),window.addEventListener("touchend",this.handleTouchEnd)}destroy(){this.handleKeyDown&&window.removeEventListener("keydown",this.handleKeyDown),this.handleKeyUp&&window.removeEventListener("keyup",this.handleKeyUp),this.handleTouchStart&&window.removeEventListener("touchstart",this.handleTouchStart),this.handleTouchMove&&window.removeEventListener("touchmove",this.handleTouchMove),this.handleTouchEnd&&window.removeEventListener("touchend",this.handleTouchEnd)}}const Ia="void-escape-save";function tm(s){const t=new Uint8Array(s.buffer);let e="";for(let i=0;i<t.length;i++)e+=String.fromCharCode(t[i]);return btoa(e)}function em(s){const t=atob(s),e=new Uint8Array(t.length);for(let i=0;i<t.length;i++)e[i]=t.charCodeAt(i);return new Int8Array(e.buffer)}function im(s){return{x:s.x,y:s.y,z:s.z,id:s.id,state:s.state,lastPos:s.lastPos?{...s.lastPos}:null,history:s.history.map(t=>({...t})),visitedNodes:Array.from(s.visitedNodes),pathToTarget:s.pathToTarget.map(t=>({...t}))}}function ns(s){try{const t={version:1,timestamp:Date.now(),degree:s.degree,branchingFactor:s.branchingFactor,isSafeMode:s.isSafeMode,seed:s.seed,mazeSize:s.mazeGen.size,mazeStartPos:{...s.mazeGen.startPos},matrix:tm(s.mazeGen.matrix),player:{...s.player},hunters:s.hunters.map(im),discoveredTeleports:Array.from(s.discoveredTeleports),inactiveTeleportPos:s.inactiveTeleportPos?{...s.inactiveTeleportPos}:null,teleportCooldownTicks:s.teleportCooldownTicks,revealedPathSet:Array.from(s.revealedPathSet),keysCollected:s.keysCollected,totalKeys:s.totalKeys,totalPathfinders:s.totalPathfinders,pathfindersRemaining:s.pathfindersRemaining,pathfinderRewardsGranted:s.pathfinderRewardsGranted!==void 0?s.pathfinderRewardsGranted:0,mapCompletion100Triggered:s.mapCompletion100Triggered||!1,dialogueUpTriggered:s.dialogueUpTriggered||!1,dialogueDownTriggered:s.dialogueDownTriggered||!1,dialogueWhichWayTriggered:s.dialogueWhichWayTriggered||!1,dialogueDetectedTriggered:s.dialogueDetectedTriggered||!1,hunterOnSameFloorDetected:s.hunterOnSameFloorDetected||!1,deathsCount:s.deathsCount!==void 0?s.deathsCount:0,elapsedTime:s.elapsedTime!==void 0?s.elapsedTime:0};localStorage.setItem(Ia,JSON.stringify(t))}catch(t){console.warn("[SaveManager] Could not save game state:",t)}}function nl(){try{const s=localStorage.getItem(Ia);if(!s)return null;const t=JSON.parse(s);return!t||t.version!==1?null:t}catch(s){return console.warn("[SaveManager] Could not load save data:",s),null}}function sl(){localStorage.removeItem(Ia)}function vo(){return nl()!==null}function nm(s,t){s.x=t.x,s.y=t.y,s.z=t.z,s.visualX=t.x,s.visualY=t.y,s.visualZ=t.z,s.state=t.state,s.lastPos=t.lastPos?{...t.lastPos}:null,s.history=t.history.map(e=>({...e})),s.visitedNodes=new Set(t.visitedNodes),s.pathToTarget=t.pathToTarget.map(e=>({...e}))}function sm(s,t){const e=em(t);for(let i=0;i<e.length;i++)s.matrix[i]=e[i]}function sa(s,t,e){return Math.abs(t-s)<=e?t:s+Math.sign(t-s)*e}class _o{constructor(t,e,i=null){O(this,"degree");O(this,"branchingFactor");O(this,"isSafeMode");O(this,"vScale");O(this,"ui");O(this,"input");O(this,"canvas");O(this,"ctx");O(this,"seed");O(this,"mazeGen");O(this,"maze");O(this,"isResumedFromSave");O(this,"mapCompletion100Triggered");O(this,"hunterOnSameFloorDetected");O(this,"dialogueUpTriggered");O(this,"dialogueDownTriggered");O(this,"dialogueWhichWayTriggered");O(this,"dialogueDetectedTriggered");O(this,"wallImage");O(this,"floorImage");O(this,"keyImage");O(this,"statueImage");O(this,"mageImages");O(this,"playerSide");O(this,"playerVertical");O(this,"playerWalkCycle");O(this,"playerSquashTargetX");O(this,"playerSquashTargetY");O(this,"playerSquashX");O(this,"playerSquashY");O(this,"player");O(this,"hunters");O(this,"keyMeshes");O(this,"exitMesh");O(this,"keysCollected");O(this,"totalKeys");O(this,"totalPathfinders");O(this,"pathfindersRemaining");O(this,"activeMapFloor");O(this,"visualActiveFloor");O(this,"mapCursor");O(this,"pathfinderRewardsGranted");O(this,"isometricCanvas");O(this,"isometricCtx");O(this,"floorClickRects");O(this,"teleportModalClickRects");O(this,"mapZoom");O(this,"mapPanOffsetX");O(this,"mapPanOffsetY");O(this,"isZoomTransitionActive");O(this,"zoomTransitionTimer");O(this,"preloadedStoryImages");O(this,"storyImagesLoadedCount");O(this,"storyImagesTotalCount");O(this,"storyImagesPreloadPromise");O(this,"lastFrameTime");O(this,"revealedPathSet");O(this,"activePathReveal");O(this,"revealedPathProgress");O(this,"knownMeshes");O(this,"gridMeshes");O(this,"pathRevealInterval");O(this,"pathfinderBlockedUntil");O(this,"isMap3DActive");O(this,"isGameOver");O(this,"deathAnimation");O(this,"notificationQueue");O(this,"activeNotification");O(this,"isPaused");O(this,"isDestroyed");O(this,"isIntroPlaying");O(this,"isStoryActive");O(this,"pulsatingMaterials");O(this,"hunterMeshes");O(this,"discoveredTeleports");O(this,"visitedCells");O(this,"lastSavePos");O(this,"suppressWakeHuntersBanner");O(this,"allTeleports");O(this,"vortexAngles");O(this,"isTouchDevice");O(this,"isMouseOrTouchDetected");O(this,"teleportGoBtnClickRect");O(this,"staticMapCacheCanvas");O(this,"staticMapCacheCtx");O(this,"staticMapCacheDirty");O(this,"zoomVisibleCells");O(this,"scene");O(this,"camera");O(this,"renderer");O(this,"controls");O(this,"teleportMeshes");O(this,"inactiveTeleportPos");O(this,"teleportCooldownTicks");O(this,"storyImages");O(this,"storyOpacity");O(this,"storyOverlayOpacity");O(this,"storyFrameIndex");O(this,"storyTimer");O(this,"storyTextQueue");O(this,"storyTextIndex");O(this,"storyDisplayedText");O(this,"storyState");O(this,"storyWaitTimer");O(this,"storyTextHeight");O(this,"storyWidthProgress");O(this,"storyCharIndex");O(this,"storyTypeTimer");O(this,"storyMsgIndex");O(this,"storyCloseProgress");O(this,"selectedTeleportIndex");O(this,"teleportConfirmModalActive");O(this,"teleportModalSelection");O(this,"teleportDotsClickRects");O(this,"isTeleportMode");O(this,"floorTransition");O(this,"hasSavePoint");O(this,"lastPlayerCell");O(this,"exitPathfinderUnlocked");O(this,"isZoomActive");O(this,"lastInputDevice");O(this,"fullyRevealedCells");O(this,"revealedCellsAnimation");O(this,"skipCellAnimations");O(this,"activeSkipHandler");O(this,"activeIntroTimer");O(this,"activeContinueTimer");O(this,"raycaster");O(this,"pointer");O(this,"handleKeyDownExtra");O(this,"handleKeyboardDetection");O(this,"handleResize");O(this,"handleStoryKeyDown");O(this,"handleStoryClick");O(this,"handleStoryTouch");O(this,"handleCanvasClick");O(this,"handlePointerDown");O(this,"handlePointerUp");O(this,"lastHunterMove");O(this,"lastLockedWarningTime");O(this,"prevGamepadButtons");O(this,"isPreloadingActive");O(this,"prevGamepadStick");O(this,"gamepadTeleportSelectedIndex");O(this,"deathsCount");O(this,"elapsedTime");if(this.degree=t!==void 0?t:q.MAZE_DEGREE!==void 0?q.MAZE_DEGREE:8,this.branchingFactor=e!==void 0?e:q.BRANCHING_FACTOR!==void 0?q.BRANCHING_FACTOR:.2,i)this.isSafeMode=i.isSafeMode??!1;else{const l=document.getElementById("safe-mode");this.isSafeMode=l?l.checked:!1}this.vScale=2,this.ui=new Jp,this.input=new Qp,this.input.setupTouch(()=>this.isMap3DActive,()=>this.isGameOver),this.canvas=document.getElementById("main-2d-canvas"),this.ctx=this.canvas.getContext("2d"),this.seed=i?i.seed:q.SEED!==null&&q.SEED!==void 0?q.SEED:Date.now(),this.mazeGen=new jp(t,e,this.seed),this.maze=this.mazeGen.generate(),this.isResumedFromSave=!!i,this.deathsCount=i&&i.deathsCount||0,this.elapsedTime=i&&i.elapsedTime||0,this.mapCompletion100Triggered=!1,this.hunterOnSameFloorDetected=!1,this.dialogueUpTriggered=!1,this.dialogueDownTriggered=!1,this.dialogueWhichWayTriggered=!1,this.dialogueDetectedTriggered=!1,this.wallImage=new Image,this.wallImage.onload=()=>{this.staticMapCacheDirty=!0},this.wallImage.src="assets/images/wall.png",this.floorImage=new Image,this.floorImage.onload=()=>{this.staticMapCacheDirty=!0},this.floorImage.src="assets/images/floor.png",this.keyImage=new Image,this.keyImage.onload=()=>{this.staticMapCacheDirty=!0},this.keyImage.src="assets/images/key.svg",this.statueImage=new Image,this.statueImage.onload=()=>{this.staticMapCacheDirty=!0},this.statueImage.src="assets/images/statue.png",this.mageImages={down_left:new Image,down_right:new Image,up_left:new Image,up_right:new Image};for(const l in this.mageImages)this.mageImages[l].onload=()=>{this.staticMapCacheDirty=!0},this.mageImages[l].src=`assets/images/mage_${l}.png`;this.playerSide="right",this.playerVertical="down",this.playerWalkCycle=0,this.playerSquashTargetX=1,this.playerSquashTargetY=1,this.playerSquashX=1,this.playerSquashY=1,this.player={x:this.mazeGen.startPos.x,y:this.mazeGen.startPos.y,z:this.mazeGen.startPos.z,dir:0},this.hunters=[],this.initHunters(t),this.keyMeshes=[],this.exitMesh=null,this.keysCollected=0,this.totalKeys=q.getHunterCount(t)*2,this.totalPathfinders=q.getPathfinderCount(t),this.pathfindersRemaining=this.totalPathfinders,this.activeMapFloor=1,this.visualActiveFloor=1,this.mapCursor={x:0,y:0,z:1},this.pathfinderRewardsGranted=0,this.isometricCanvas=null,this.isometricCtx=null,this.floorClickRects=[],this.mapZoom=1,this.mapPanOffsetX=0,this.isZoomTransitionActive=!1,this.zoomTransitionTimer=0,this.preloadedStoryImages=[],this.storyImagesLoadedCount=0,this.storyImagesTotalCount=0,this.storyImagesPreloadPromise=null,this.preloadStoryImages(),this.lastFrameTime=performance.now(),this.revealedPathSet=new Set,this.activePathReveal=[],this.revealedPathProgress=0,this.knownMeshes=[],this.gridMeshes=null,this.pathRevealInterval=null,this.pathfinderBlockedUntil=0,this.ui.initGameUI(this.isSafeMode),this.ui.onInfoBanner=l=>this.queueNotification(l),this.ui.updateKeysHUD(this.keysCollected,this.totalKeys),this.ui.updatePathfindersHUD(this.pathfindersRemaining,this.totalPathfinders),this.isMap3DActive=!1,this.isGameOver=!1,this.deathAnimation=null,this.notificationQueue=[],this.activeNotification=null,this.isPaused=!1,this.isDestroyed=!1,this.isIntroPlaying=!1,this.isStoryActive=!1,this.pulsatingMaterials=[],this.hunterMeshes=[],this.discoveredTeleports=new Set,this.visitedCells=new Set,this.lastSavePos=null,this.suppressWakeHuntersBanner=!1;const n=Math.floor(this.player.x),a=Math.floor(this.player.y),o=this.player.z;this.discoveredTeleports.add(`${n},${a},${o}`),this.allTeleports=[];const r=this.mazeGen.size,c=this.mazeGen.TYPES;for(let l=1;l<r;l+=2)for(let u=0;u<r;u++)for(let f=0;f<r;f++)this.maze.get(f,u,l)===c.TELEPORT&&this.allTeleports.push({x:f,y:u,z:l});this.allTeleports.sort((l,u)=>l.z!==u.z?l.z-u.z:l.y!==u.y?l.y-u.y:l.x-u.x),this.selectedTeleportIndex=this.allTeleports.findIndex(l=>l.x===n&&l.y===a&&l.z===o),this.selectedTeleportIndex===-1&&(this.selectedTeleportIndex=0),this.teleportConfirmModalActive=!1,this.teleportModalSelection="go",this.isMouseOrTouchDetected=!1,this.teleportGoBtnClickRect=null,this.isTouchDevice="ontouchstart"in window||navigator.maxTouchPoints>0,this.teleportMeshes=[],this.isTeleportMode=!1,this.teleportCooldownTicks=0,this.inactiveTeleportPos=null,this.floorTransition=null,this.hasSavePoint=!1,this.lastPlayerCell={x:n,y:a,z:o},this.exitPathfinderUnlocked=!1,this.isZoomActive=!0,this.zoomVisibleCells=11,this.lastInputDevice="keyboard",this.staticMapCacheCanvas=document.createElement("canvas"),this.staticMapCacheCtx=this.staticMapCacheCanvas.getContext("2d"),this.staticMapCacheDirty=!0,this.fullyRevealedCells=new Set,this.revealedCellsAnimation=new Map,this.vortexAngles=new Map,this.skipCellAnimations=!0,this.populateFullyRevealedCells(this.player.z),this.activeSkipHandler=null,this.activeIntroTimer=null,this.activeContinueTimer=null,this.raycaster=new kp,this.pointer=new Gt,this.exitPathfinderUnlocked=this.checkExitNeighborVisited(),this.initThree(),this.populateVisitedCells(),this.init(i)}populateVisitedCells(){this.visitedCells.clear();const t=this.mazeGen.size;for(let e=0;e<t;e++)for(let i=0;i<t;i++)for(let n=0;n<t;n++){const a=this.maze.get(e,i,n);(a===2||a===3||a===5)&&this.visitedCells.add(`${e},${i},${n}`)}}destroy(){this.isDestroyed=!0,this.hideGameUI(),this.input.destroy(),this.ui.destroy(),window.removeEventListener("keydown",this.handleKeyDownExtra),this.handleKeyboardDetection&&window.removeEventListener("keydown",this.handleKeyboardDetection),window.removeEventListener("resize",this.handleResize),this.activeSkipHandler&&(window.removeEventListener("keydown",this.activeSkipHandler),window.removeEventListener("touchstart",this.activeSkipHandler),this.activeSkipHandler=null),this.activeIntroTimer&&(clearTimeout(this.activeIntroTimer),this.activeIntroTimer=null),this.activeContinueTimer&&(clearTimeout(this.activeContinueTimer),this.activeContinueTimer=null),this.handleStoryKeyDown&&(window.removeEventListener("keydown",this.handleStoryKeyDown),this.handleStoryKeyDown=null);const t=document.getElementById("story-screen");t&&(this.handleStoryClick&&(t.removeEventListener("click",this.handleStoryClick),this.handleStoryClick=null),this.handleStoryTouch&&(t.removeEventListener("touchstart",this.handleStoryTouch),this.handleStoryTouch=null),t.classList.add("hidden")),this.controls&&this.controls.dispose(),this.renderer&&this.renderer.domElement&&(this.renderer.domElement.removeEventListener("click",this.handleCanvasClick),this.renderer.domElement.removeEventListener("pointerdown",this.handlePointerDown),this.renderer.domElement.removeEventListener("pointerup",this.handlePointerUp)),this.renderer&&(this.renderer.dispose(),this.renderer.domElement.remove()),this.ui.uiMobileUp&&(this.ui.uiMobileUp.onclick=null),this.ui.uiMobileDown&&(this.ui.uiMobileDown.onclick=null),this.ui.uiMobileMap&&(this.ui.uiMobileMap.onclick=null),this.pathRevealInterval&&clearInterval(this.pathRevealInterval)}preloadStoryImages(){const t=["assets/images/presentation/1-mystical-church-of-chaos.jpg","assets/images/presentation/2-mystical-church-of-chaos.jpg","assets/images/presentation/3-the-jelly-god.jpg","assets/images/presentation/4-player-alone.jpg","assets/images/presentation/5-player-thrown.jpg"];this.storyImagesLoadedCount=0,this.storyImagesTotalCount=t.length,this.storyImagesPreloadPromise=Promise.all(t.map((e,i)=>new Promise(n=>{const a=new Image;a.src=e,a.onload=()=>{this.preloadedStoryImages[i]=a,this.storyImagesLoadedCount++,n()},a.onerror=()=>{console.warn(`Failed to preload story image: ${e}`),n()}})))}initHunters(t){const e=this.isSafeMode?0:q.getHunterCount(t);if(e!==0){for(let i=1;i<=e;i++)this.hunters.push(new Zp(this.mazeGen,null,i));this.lastHunterMove=performance.now()}}wakeHunters(){const t=this.mazeGen.size,e=[],i=Math.floor(this.player.x),n=Math.floor(this.player.y),a=this.player.z,o=Math.floor(this.mazeGen.startPos.x),r=Math.floor(this.mazeGen.startPos.y),c=this.mazeGen.startPos.z;for(let m=0;m<t;m++)for(let g=0;g<t;g++)for(let h=0;h<t;h++){const d=m===o&&g===r&&h===c;this.maze.get(m,g,h)===this.mazeGen.TYPES.PATH&&h%2!==0&&!d&&e.push({x:m,y:g,z:h})}if(e.length===0)for(let m=0;m<t;m++)for(let g=0;g<t;g++)for(let h=0;h<t;h++){const d=this.maze.get(m,g,h),x=m===o&&g===r&&h===c,_=d===this.mazeGen.TYPES.EXIT;d!==this.mazeGen.TYPES.WALL&&!_&&h%2!==0&&(m!==i||g!==n||h!==a)&&!x&&e.push({x:m,y:g,z:h})}for(let m=e.length-1;m>0;m--){const g=Math.floor(Math.random()*(m+1)),h=e[m];e[m]=e[g],e[g]=h}const l=(m,g)=>Math.abs(m.x-g.x)+Math.abs(m.y-g.y)+Math.abs(m.z-g.z),u=[],f=this.hunters.filter(m=>m.state==="SLEEP");let p=Math.max(3,Math.floor(t*.45)),v=4;for(;u.length<f.length&&p>0;){u.length=0;const m=e.filter(g=>l(g,{x:i,y:n,z:a})>=p);for(let g=0;g<f.length;g++){let h=null;for(const d of m){if(u.some(_=>_.x===d.x&&_.y===d.y&&_.z===d.z))continue;let x=!0;for(const _ of u)if(l(d,_)<v){x=!1;break}if(x){h=d;break}}if(h)u.push(h);else break}u.length<f.length&&(v>1?v--:p--)}if(u.length<f.length)for(const m of e){if(u.length>=f.length)break;u.some(g=>g.x===m.x&&g.y===m.y&&g.z===m.z)||u.push(m)}for(let m=0;m<f.length&&m<u.length;m++){const g=f[m],h=u[m];g.x=h.x,g.y=h.y,g.z=h.z,g.visualX=h.x,g.visualY=h.y,g.visualZ=h.z,g.lastPos={x:h.x,y:h.y,z:h.z},g.state="WANDERING",g.visitedNodes.clear(),g.visitedNodes.add(`${h.x},${h.y},${h.z}`),g.history=[]}this.suppressWakeHuntersBanner||this.ui.showInfoBanner(Nt("msgVoidHuntersDetected")),this.suppressWakeHuntersBanner=!1,this.staticMapCacheDirty=!0,this.isMap3DActive&&this.build3DMap()}getExitPos(){for(let t=0;t<this.mazeGen.size;t++)for(let e=0;e<this.mazeGen.size;e++)for(let i=0;i<this.mazeGen.size;i++)if(this.maze.get(t,e,i)===this.mazeGen.TYPES.EXIT)return{x:t,y:e,z:i};return{x:1,y:1,z:1}}triggerSave(){ns(this),this.hasSavePoint=!0,this.lastSavePos={x:this.player.x,y:this.player.y,z:this.player.z},this.ui.showSavingIndicator()}triggerVictory(){this.isGameOver=!0,sl();const t=this.getMapVisitedPercentage();this.ui.showVictory(t,this.deathsCount,this.degree,this.elapsedTime)}triggerDeath(){this.isGameOver=!0,this.ui.showDeath(this.hasSavePoint)}collectKey(t,e,i){if(this.maze.set(t,e,i,this.mazeGen.TYPES.VISITED),this.visitedCells.add(`${t},${e},${i}`),this.keysCollected++,this.staticMapCacheDirty=!0,this.ui.updateKeysHUD(this.keysCollected,this.totalKeys),this.ui.showInfoBanner(Nt("msgKeySecured",{collected:this.keysCollected,total:this.totalKeys})),this.keysCollected===this.totalKeys&&(this.ui.showInfoBanner(Nt("msgExitUnlocked")),this.exitMesh)){this.exitMesh.material.color.setHex(q.COLORS.THREE_EXIT),this.exitMesh.material.emissive.setHex(q.COLORS.THREE_EXIT),this.exitMesh.material.emissiveIntensity=.5;const n=this.exitMesh.children[0];n&&this.exitMesh.remove(n)}}triggerLockedExitWarning(){const t=Date.now();if(!this.lastLockedWarningTime||t-this.lastLockedWarningTime>1500){this.lastLockedWarningTime=t;const e=this.totalKeys-this.keysCollected;this.ui.showInfoBanner(Nt("msgKeysRemaining",{count:e}))}}restoreFromSave(t){this.seed=t.seed,sm(this.mazeGen,t.matrix),this.player.x=t.player.x,this.player.y=t.player.y,this.player.z=t.player.z,this.player.dir=t.player.dir;for(let n=0;n<this.hunters.length&&n<t.hunters.length;n++)nm(this.hunters[n],t.hunters[n]);this.discoveredTeleports=new Set(t.discoveredTeleports),this.inactiveTeleportPos=t.inactiveTeleportPos,this.teleportCooldownTicks=t.teleportCooldownTicks,this.keysCollected=t.keysCollected!==void 0?t.keysCollected:0,this.totalKeys=t.totalKeys!==void 0?t.totalKeys:q.getHunterCount(this.degree)*2,this.ui.updateKeysHUD(this.keysCollected,this.totalKeys),this.totalPathfinders=t.totalPathfinders!==void 0?t.totalPathfinders:q.getPathfinderCount(this.degree),this.pathfindersRemaining=t.pathfindersRemaining!==void 0?t.pathfindersRemaining:this.totalPathfinders,this.ui.updatePathfindersHUD(this.pathfindersRemaining,this.totalPathfinders);const e=this.degree>=12?10:this.degree>=8?20:0,i=this.getMapVisitedPercentage();this.pathfinderRewardsGranted=t.pathfinderRewardsGranted!==void 0?t.pathfinderRewardsGranted:e>0?Math.floor(i/e):0,this.revealedPathSet=new Set(t.revealedPathSet),this.mapCompletion100Triggered=t.mapCompletion100Triggered||!1,this.dialogueUpTriggered=t.dialogueUpTriggered||!1,this.dialogueDownTriggered=t.dialogueDownTriggered||!1,this.dialogueWhichWayTriggered=t.dialogueWhichWayTriggered||!1,this.dialogueDetectedTriggered=t.dialogueDetectedTriggered||!1,this.deathsCount=t.deathsCount!==void 0?t.deathsCount:0,this.elapsedTime=t.elapsedTime!==void 0?t.elapsedTime:0,this.populateVisitedCells(),this.lastSavePos={x:t.player.x,y:t.player.y,z:t.player.z},this.hunterOnSameFloorDetected=t.hunterOnSameFloorDetected||!1,this.hasSavePoint=!0,this.lastPlayerCell={x:Math.floor(this.player.x),y:Math.floor(this.player.y),z:this.player.z},this.populateFullyRevealedCells(this.player.z),this.exitPathfinderUnlocked=this.checkExitNeighborVisited()}checkHunterCollision(){if(this.deathAnimation&&this.deathAnimation.active)return;const t=Math.floor(this.player.x),e=Math.floor(this.player.y),i=this.player.z,n=Math.floor(this.mazeGen.startPos.x),a=Math.floor(this.mazeGen.startPos.y),o=this.mazeGen.startPos.z;if(!(t===n&&e===a&&i===o)){for(const r of this.hunters)if(r.state!=="SLEEP"&&r.x===t&&r.y===e&&r.z===i){r.visualX=r.x,r.visualY=r.y,r.visualZ=r.z,this.isGameOver=!0,this.deathsCount++,this.hideGameUI(),this.ui.showInfoBanner(Nt("msgKeyDropped")),this.deathAnimation={active:!0,hunter:r,playerPos:{x:this.player.x,y:this.player.y,z:this.player.z},elapsed:0,duration:1.8,screenFilled:!1,reversing:!1,delayElapsed:0,delayDuration:1.5,glitchElapsed:0,glitchDuration:1.5,uiFade:0,uiTriggered:!1};return}}}hideGameUI(){this.ui.hideGameUI(),this.ui.hidePause(),this.canvas.classList.remove("hunted-map-effect"),this.isMap3DActive=!1}initThree(){this.scene=new Fp,this.camera=new Fe(75,window.innerWidth/window.innerHeight,.1,1e3),this.renderer=new Jo({antialias:!0,alpha:!0}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.ui.uiMap3dContainer&&this.ui.uiMap3dContainer.appendChild(this.renderer.domElement),this.controls=new Vp(this.camera,this.renderer.domElement),this.controls.enableDamping=!0}init(t=null){this.handleKeyDownExtra=c=>{const l=c.key.toLowerCase();if(l==="escape"){if(this.isMap3DActive){this.isTeleportMode?this.toggleTeleportMap(!1):this.toggleMap3D(),c.preventDefault();return}this.togglePause();return}if(!this.isPaused&&(l==="m"&&(this.isTeleportMode?this.toggleTeleportMap(!1):this.toggleMap3D()),l==="z"&&this.toggleZoom(),this.isMap3DActive&&!this.isIntroPlaying)){if(this.isTeleportMode){if(this.teleportConfirmModalActive){if((l==="a"||l==="arrowleft"||l==="d"||l==="arrowright")&&(this.teleportModalSelection=this.teleportModalSelection==="go"?"cancel":"go",c.preventDefault()),l==="enter"||l===" "||l==="y"){if(this.teleportModalSelection==="go"&&this.selectedTeleportIndex!==null){const f=this.allTeleports[this.selectedTeleportIndex];this.teleportTo(f.x,f.y,f.z),this.toggleTeleportMap(!1)}else this.teleportConfirmModalActive=!1;c.preventDefault()}(l==="escape"||l==="backspace")&&(this.teleportConfirmModalActive=!1,c.preventDefault());return}const u=this.getSelectableTeleportIndices();if(u.length>0){let f=u.indexOf(this.selectedTeleportIndex);if(l==="a"||l==="arrowleft"){f=(f-1+u.length)%u.length,this.selectedTeleportIndex=u[f];const p=this.allTeleports[this.selectedTeleportIndex];this.activeMapFloor=p.z,this.mapCursor={x:p.x,y:p.y,z:p.z},c.preventDefault()}if(l==="d"||l==="arrowright"){f=(f+1)%u.length,this.selectedTeleportIndex=u[f];const p=this.allTeleports[this.selectedTeleportIndex];this.activeMapFloor=p.z,this.mapCursor={x:p.x,y:p.y,z:p.z},c.preventDefault()}if((l==="enter"||l===" "||l==="y")&&this.selectedTeleportIndex!==null){const p=this.allTeleports[this.selectedTeleportIndex],v=Math.floor(this.player.x),m=Math.floor(this.player.y),g=this.player.z,h=p&&p.x===v&&p.y===m&&p.z===g;p&&!h&&(this.teleportTo(p.x,p.y,p.z),this.toggleTeleportMap(!1)),c.preventDefault()}}(l==="escape"||l==="backspace")&&(this.toggleTeleportMap(!1),c.preventDefault());return}if((l==="q"||l==="pagedown")&&(this.activeMapFloor-2>=1&&(this.activeMapFloor-=2),c.preventDefault()),(l==="e"||l==="pageup")&&(this.activeMapFloor+2<=this.mazeGen.size-2&&(this.activeMapFloor+=2),c.preventDefault()),(l==="a"||l==="arrowleft")&&(this.navigateCursor("left"),c.preventDefault()),(l==="d"||l==="arrowright")&&(this.navigateCursor("right"),c.preventDefault()),(l==="w"||l==="arrowup")&&(this.navigateCursor("up"),c.preventDefault()),(l==="s"||l==="arrowdown")&&(this.navigateCursor("down"),c.preventDefault()),l==="enter"||l===" "||l==="y"){const u=this.mapCursor.x,f=this.mapCursor.y,p=this.mapCursor.z;this.getInteractiveElements(this.activeMapFloor).some(g=>g.x===u&&g.y===f&&g.z===p)&&this.triggerPathReveal(u,f,p),c.preventDefault()}}},this.handleResize=()=>this.resize(),this.handleKeyboardDetection=()=>{this.lastInputDevice!=="keyboard"&&(this.lastInputDevice="keyboard",this.ui.updateControlsHint("keyboard",this.mazeGen.size>11)),this.isMouseOrTouchDetected=!1},window.addEventListener("keydown",this.handleKeyDownExtra),window.addEventListener("keydown",this.handleKeyboardDetection),window.addEventListener("resize",this.handleResize);const e=document.getElementById("mobile-zoom-btn");e&&(e.onclick=c=>{c.stopPropagation(),this.toggleZoom()}),this.ui.uiMobileUp&&(this.ui.uiMobileUp.onclick=()=>this.changeFloor(2)),this.ui.uiMobileDown&&(this.ui.uiMobileDown.onclick=()=>this.changeFloor(-2)),this.ui.uiMobileMap&&(this.ui.uiMobileMap.onclick=()=>{if(this.isMap3DActive){this.isTeleportMode?this.toggleTeleportMap(!1):this.toggleMap3D();return}const c=Math.floor(this.player.x),l=Math.floor(this.player.y),u=this.player.z,f=this.maze.get(c,l,u)===this.mazeGen.TYPES.TELEPORT,p=this.inactiveTeleportPos&&this.inactiveTeleportPos.x===c&&this.inactiveTeleportPos.y===l&&this.inactiveTeleportPos.z===u;f&&!p?this.discoveredTeleports.size>=2?this.toggleTeleportMap(!0):this.ui.showInfoBanner(Nt("msgNoOtherActiveTeleport")):this.toggleMap3D()});let i=!1,n=0,a=0;this.handlePointerDown=c=>{i=!1,n=c.clientX,a=c.clientY},this.handlePointerUp=c=>{const l=c.clientX-n,u=c.clientY-a;Math.sqrt(l*l+u*u)>5&&(i=!0)},this.handleCanvasClick=c=>{i||this.onCanvasClick(c)},this.renderer.domElement.addEventListener("pointerdown",this.handlePointerDown),this.renderer.domElement.addEventListener("pointerup",this.handlePointerUp),this.renderer.domElement.addEventListener("click",this.handleCanvasClick),this.resize(),this.updateFloorUI(),this.hideCanvasInstant(),t?(this.restoreFromSave(t),this.playContinueAnimation()):this.startStorytelling(),this.loop();const o=this.mazeGen.size,r=document.getElementById("mobile-zoom-btn");o<=11?r&&r.classList.add("hidden"):r&&r.classList.remove("hidden"),this.ui.updateControlsHint(this.lastInputDevice,o>11)}hideCanvasInstant(){const t=document.getElementById("map-area-container"),e=document.getElementById("left-hud-panel"),i=document.getElementById("right-hud-panel"),n=document.getElementById("bottom-hud-container");t&&(t.style.transition="none",t.classList.remove("intro-reveal"),t.classList.add("intro-hidden"),t.offsetHeight,t.style.transition=""),e&&(e.style.transition="none",e.classList.remove("intro-reveal"),e.classList.add("intro-hidden"),e.offsetHeight,e.style.transition=""),i&&(i.style.transition="none",i.classList.remove("intro-reveal"),i.classList.add("intro-hidden"),i.offsetHeight,i.style.transition=""),n&&(n.style.transition="none",n.classList.remove("intro-reveal"),n.classList.add("intro-hidden"),n.offsetHeight,n.style.transition="")}drawElevator2D(t,e,i,n,a,o,r,c,l=!1,u=0){const f=e===Math.floor(r)&&i===Math.floor(c);if(f){const h=.85+.15*Math.sin(Date.now()/150);t.save(),t.globalAlpha=h}const p=a&&this.maze.get(e,i,u+1)===this.mazeGen.TYPES.ELEVATOR_VISITED,v=o&&this.maze.get(e,i,u-1)===this.mazeGen.TYPES.ELEVATOR_VISITED;if(l)if(a&&o){let h=!1,d=!1;if(this.activePathReveal){const y=this.activePathReveal.findIndex(T=>T.x===e&&T.y===i&&T.z===u);if(y!==-1&&y<this.activePathReveal.length-1){const T=this.activePathReveal[y+1];T.z>u&&(h=!0),T.z<u&&(d=!0)}}!h&&!d&&(h=this.revealedPathSet.has(`${e},${i},${u+1}`)||this.revealedPathSet.has(`${e},${i},${u+2}`),d=this.revealedPathSet.has(`${e},${i},${u-1}`)||this.revealedPathSet.has(`${e},${i},${u-2}`));const x=h||!h&&!d,_=d||!h&&!d;t.fillStyle=x?q.COLORS.REVEALED_PATH:p?q.COLORS.NEON_UP:q.COLORS.NEON_UP_UNUSED,t.fillRect(e*n,i*n,n,n/2),t.fillStyle=_?q.COLORS.REVEALED_PATH:v?q.COLORS.NEON_DOWN:q.COLORS.NEON_DOWN_UNUSED,t.fillRect(e*n,i*n+n/2,n,n/2)}else t.fillStyle=q.COLORS.REVEALED_PATH,t.fillRect(e*n,i*n,n,n);else a&&o?(t.fillStyle=p?q.COLORS.NEON_UP:q.COLORS.NEON_UP_UNUSED,t.fillRect(e*n,i*n,n,n/2),t.fillStyle=v?q.COLORS.NEON_DOWN:q.COLORS.NEON_DOWN_UNUSED,t.fillRect(e*n,i*n+n/2,n,n/2)):a?(t.fillStyle=p?q.COLORS.NEON_UP:q.COLORS.NEON_UP_UNUSED,t.fillRect(e*n,i*n,n,n)):(t.fillStyle=v?q.COLORS.NEON_DOWN:q.COLORS.NEON_DOWN_UNUSED,t.fillRect(e*n,i*n,n,n));const m=e*n+n/2,g=i*n+n/2;if(t.fillStyle="#000000",a&&o){const h=n*.28,d=g-n/5,x=g+n/5;t.beginPath(),t.moveTo(m,d-h/2),t.lineTo(m-h*.6,d+h/2),t.lineTo(m+h*.6,d+h/2),t.closePath(),t.fill(),t.beginPath(),t.moveTo(m,x+h/2),t.lineTo(m-h*.6,x-h/2),t.lineTo(m+h*.6,x-h/2),t.closePath(),t.fill()}else if(a){const h=n*.45;t.beginPath(),t.moveTo(m,g-h/2),t.lineTo(m-h*.6,g+h/2),t.lineTo(m+h*.6,g+h/2),t.closePath(),t.fill()}else{const h=n*.45;t.beginPath(),t.moveTo(m,g+h/2),t.lineTo(m-h*.6,g-h/2),t.lineTo(m+h*.6,g-h/2),t.closePath(),t.fill()}f&&t.restore()}drawCellShadow2D(t,e,i,n,a,o,r){if(o===4)return;const c=i+1<a&&this.maze.get(e,i+1,r)===0,l=e+1<a&&this.maze.get(e+1,i,r)===0,u=e+1<a&&i+1<a&&this.maze.get(e+1,i+1,r)===0;if(c||l||u){t.fillStyle="rgba(0, 0, 0, 0.4)";const f=n*q.SHADOW_SIZE_FACTOR;if(c&&t.fillRect(e*n,(i+1)*n-f,n,f),l){const p=c?n-f:n;t.fillRect((e+1)*n-f,i*n,f,p)}!c&&!l&&u&&t.fillRect((e+1)*n-f,(i+1)*n-f,f,f)}}updateRendererSize(){this.renderer&&(this.renderer.setSize(window.innerWidth,window.innerHeight),this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix())}resize(){const e=window.innerHeight>window.innerWidth?window.innerWidth*.82:window.innerHeight*.75;this.canvas.width=e,this.canvas.height=e,this.staticMapCacheDirty=!0,this.updateRendererSize()}getMapVisitedPercentage(){let t=0,e=0;const i=this.mazeGen.size,n=this.mazeGen.TYPES;for(let a=0;a<i;a++)for(let o=0;o<i;o++)for(let r=0;r<i;r++){const c=this.maze.get(a,o,r);if(c===n.WALL||c===n.EXIT||c===n.STATUE)continue;t++,(c===n.VISITED||c===n.START||c===n.ELEVATOR_VISITED||c===n.TELEPORT&&this.discoveredTeleports.has(`${a},${o},${r}`))&&e++}return t===0?0:Math.floor(e/t*100)}updateFloorUI(){const t=Math.floor(this.player.x),e=Math.floor(this.player.y),i=this.player.z,n=i+1<this.mazeGen.size&&this.maze.get(t,e,i+1)!==this.mazeGen.TYPES.WALL,a=i-1>=0&&this.maze.get(t,e,i-1)!==this.mazeGen.TYPES.WALL;this.ui.updateFloor(i,n,a);const o=this.getMapVisitedPercentage();this.ui.updateVisitedPercent(o),o===100&&!this.mapCompletion100Triggered&&(this.ui.showInfoBanner(Nt("msgWorldSaved")),this.mapCompletion100Triggered=!0),this.checkPathfinderRewards(o)}checkPathfinderRewards(t){const e=this.degree>=12?10:this.degree>=8?20:0;if(e===0)return;this.pathfinderRewardsGranted===void 0&&(this.pathfinderRewardsGranted=0);const i=Math.floor(t/e);if(i>this.pathfinderRewardsGranted){const n=i-this.pathfinderRewardsGranted;this.pathfindersRemaining+=n,this.totalPathfinders+=n,this.pathfinderRewardsGranted=i,this.ui.updatePathfindersHUD(this.pathfindersRemaining,this.totalPathfinders),this.ui.showInfoBanner(Nt("msgFoundPathfinder")),ns(this)}}getTeleportCandidates(){const t=Math.floor(this.player.x),e=Math.floor(this.player.y),i=this.player.z;return Array.from(this.discoveredTeleports).map(n=>{const[a,o,r]=n.split(",").map(Number);return{x:a,y:o,z:r}}).filter(n=>!(n.x===t&&n.y===e&&n.z===i||this.inactiveTeleportPos&&this.inactiveTeleportPos.x===n.x&&this.inactiveTeleportPos.y===n.y&&this.inactiveTeleportPos.z===n.z))}getSelectableTeleportIndices(){const t=Math.floor(this.player.x),e=Math.floor(this.player.y),i=this.player.z;return this.allTeleports.map((n,a)=>({t:n,idx:a})).filter(n=>{const a=`${n.t.x},${n.t.y},${n.t.z}`,o=this.discoveredTeleports.has(a),r=this.inactiveTeleportPos&&n.t.x===this.inactiveTeleportPos.x&&n.t.y===this.inactiveTeleportPos.y&&n.t.z===this.inactiveTeleportPos.z,c=n.t.x===t&&n.t.y===e&&n.t.z===i;return o&&!r&&!c}).map(n=>n.idx)}updateGamepad(t){const e=navigator.getGamepads?navigator.getGamepads():[],i=e[0]||e.find(g=>g!==null);if(!i)return;const n=.25;(Math.abs(i.axes[0])>n||Math.abs(i.axes[1])>n||i.axes[2]!==void 0&&Math.abs(i.axes[2])>n||i.axes[3]!==void 0&&Math.abs(i.axes[3])>n||i.buttons.some(g=>g.pressed))&&(this.isMouseOrTouchDetected=!1,this.lastInputDevice!=="gamepad"&&(this.lastInputDevice="gamepad",this.ui.updateControlsHint("gamepad",this.mazeGen.size>11)));const o=i.axes[0],r=i.axes[1];let c=o<-n,l=o>n,u=r<-n,f=r>n;if(i.buttons[12]&&i.buttons[12].pressed&&(u=!0),i.buttons[13]&&i.buttons[13].pressed&&(f=!0),i.buttons[14]&&i.buttons[14].pressed&&(c=!0),i.buttons[15]&&i.buttons[15].pressed&&(l=!0),c?this.input.keys.arrowleft=!0:this.lastInputDevice==="gamepad"&&(this.input.keys.arrowleft=!1),l?this.input.keys.arrowright=!0:this.lastInputDevice==="gamepad"&&(this.input.keys.arrowright=!1),u?this.input.keys.arrowup=!0:this.lastInputDevice==="gamepad"&&(this.input.keys.arrowup=!1),f?this.input.keys.arrowdown=!0:this.lastInputDevice==="gamepad"&&(this.input.keys.arrowdown=!1),!this.prevGamepadButtons){this.prevGamepadButtons=i.buttons.map(g=>g.pressed);return}const p=g=>this.prevGamepadButtons[g],v=g=>i.buttons[g]&&i.buttons[g].pressed,m=g=>v(g)&&!p(g);if(this.isStoryActive){if(m(9))this.skipStory();else if(!this.isPreloadingActive){for(let g=0;g<i.buttons.length;g++)if(g!==9&&m(g)){this.triggerAdvanceStory();break}}this.prevGamepadButtons=i.buttons.map(g=>g.pressed);return}if(m(9)){this.togglePause(),this.prevGamepadButtons=i.buttons.map(g=>g.pressed);return}if(this.isPaused){this.prevGamepadButtons=i.buttons.map(g=>g.pressed);return}if(this.isMap3DActive&&!this.isIntroPlaying){const g=v(7),h=v(6);if(g||h){const T=this.mazeGen.size;let S=window.innerWidth*.7/T;S=Math.max(20,Math.min(48,S));const A=S*this.mapZoom,N=A/2,M=A/4,b=N*5,z=window.innerWidth/2+this.mapPanOffsetX,D=window.innerHeight/2+this.mapPanOffsetY,k=this.mapCursor.x,R=this.mapCursor.y,I=this.mapCursor.z,B=this.visualActiveFloor,j=(k-R)*N+z,J=(k+R)*M-(I-B)*b+D,K=this.mapZoom,Q=1.025;let nt=g?K*Q:K/Q;if(nt=Math.max(.5,Math.min(4,nt)),nt!==K){const rt=nt/K;this.mapPanOffsetX=j-(j-(window.innerWidth/2+this.mapPanOffsetX))*rt-window.innerWidth/2,this.mapPanOffsetY=J-(J-(window.innerHeight/2+this.mapPanOffsetY))*rt-window.innerHeight/2,this.mapZoom=nt}}const d=c&&(!this.prevGamepadStick||!this.prevGamepadStick.left),x=l&&(!this.prevGamepadStick||!this.prevGamepadStick.right),_=u&&(!this.prevGamepadStick||!this.prevGamepadStick.up),y=f&&(!this.prevGamepadStick||!this.prevGamepadStick.down);if(this.prevGamepadStick={left:c,right:l,up:u,down:f},this.isTeleportMode){if(this.teleportConfirmModalActive){if((d||m(14)||x||m(15))&&(this.teleportModalSelection=this.teleportModalSelection==="go"?"cancel":"go"),m(0)||m(3)||m(2))if(this.teleportModalSelection==="go"){const T=this.allTeleports[this.selectedTeleportIndex];this.teleportTo(T.x,T.y,T.z),this.toggleTeleportMap(!1)}else this.teleportConfirmModalActive=!1;m(1)&&(this.teleportConfirmModalActive=!1)}else{const T=this.getSelectableTeleportIndices();if(T.length>0){let S=T.indexOf(this.selectedTeleportIndex);if(d||m(14)){S=(S-1+T.length)%T.length,this.selectedTeleportIndex=T[S];const A=this.allTeleports[this.selectedTeleportIndex];this.activeMapFloor=A.z,this.mapCursor={x:A.x,y:A.y,z:A.z}}if(x||m(15)){S=(S+1)%T.length,this.selectedTeleportIndex=T[S];const A=this.allTeleports[this.selectedTeleportIndex];this.activeMapFloor=A.z,this.mapCursor={x:A.x,y:A.y,z:A.z}}if(m(0)||m(3)||m(2)){const A=this.allTeleports[this.selectedTeleportIndex],N=Math.floor(this.player.x),M=Math.floor(this.player.y),b=this.player.z,z=A&&A.x===N&&A.y===M&&A.z===b;A&&!z&&(this.teleportTo(A.x,A.y,A.z),this.toggleTeleportMap(!1))}}(m(1)||m(8))&&this.toggleTeleportMap(!1)}this.prevGamepadButtons=i.buttons.map(T=>T.pressed);return}if((d||m(14))&&this.navigateCursor("left"),(x||m(15))&&this.navigateCursor("right"),(_||m(12))&&this.navigateCursor("up"),(y||m(13))&&this.navigateCursor("down"),(m(0)||m(4))&&this.activeMapFloor-2>=1&&(this.activeMapFloor-=2),m(5)&&this.activeMapFloor+2<=this.mazeGen.size-2&&(this.activeMapFloor+=2),m(3)||m(2)){const T=this.mapCursor.x,S=this.mapCursor.y,A=this.mapCursor.z;this.getInteractiveElements(this.activeMapFloor).some(b=>b.x===T&&b.y===S&&b.z===A)&&this.triggerPathReveal(T,S,A)}(m(1)||m(8))&&this.toggleMap3D(),this.prevGamepadButtons=i.buttons.map(T=>T.pressed);return}if(m(0)){if(this.isTeleportMode){const h=this.getTeleportCandidates()[this.gamepadTeleportSelectedIndex];h&&this.teleportTo(h.x,h.y,h.z)}else if(!this.isMap3DActive){const g=Math.floor(this.player.x),h=Math.floor(this.player.y),d=this.player.z,x=d>0&&this.maze.get(g,h,d-1)!==0,y=this.maze.get(g,h,d)===this.mazeGen.TYPES.TELEPORT,T=this.inactiveTeleportPos&&this.inactiveTeleportPos.x===g&&this.inactiveTeleportPos.y===h&&this.inactiveTeleportPos.z===d;(!(y&&this.discoveredTeleports.has(`${g},${h},${d}`))||T)&&x&&this.changeFloor(-2)}}if(m(1)&&(this.isTeleportMode?this.toggleTeleportMap(!1):this.toggleZoom()),m(2)&&!this.isTeleportMode&&!this.isMap3DActive){const g=Math.floor(this.player.x),h=Math.floor(this.player.y),d=this.player.z,_=this.maze.get(g,h,d)===this.mazeGen.TYPES.TELEPORT,y=this.inactiveTeleportPos&&this.inactiveTeleportPos.x===g&&this.inactiveTeleportPos.y===h&&this.inactiveTeleportPos.z===d;_&&this.discoveredTeleports.has(`${g},${h},${d}`)&&!y&&(this.discoveredTeleports.size>=2?(this.toggleTeleportMap(!0),this.gamepadTeleportSelectedIndex=0):this.ui.showInfoBanner(Nt("msgNoOtherActiveTeleport")))}if(m(3)&&!this.isTeleportMode&&!this.isMap3DActive){const g=Math.floor(this.player.x),h=Math.floor(this.player.y),d=this.player.z,x=d<this.mazeGen.size-1&&this.maze.get(g,h,d+1)!==0,y=this.maze.get(g,h,d)===this.mazeGen.TYPES.TELEPORT,T=this.inactiveTeleportPos&&this.inactiveTeleportPos.x===g&&this.inactiveTeleportPos.y===h&&this.inactiveTeleportPos.z===d;(!(y&&this.discoveredTeleports.has(`${g},${h},${d}`))||T)&&x&&this.changeFloor(2)}if(m(8)&&(this.isTeleportMode?this.toggleTeleportMap(!1):this.toggleMap3D()),this.isTeleportMode){const g=m(4)||m(14),h=m(5)||m(15);if(g||h){const d=this.getTeleportCandidates();d.length>0&&(g?this.gamepadTeleportSelectedIndex=(this.gamepadTeleportSelectedIndex-1+d.length)%d.length:this.gamepadTeleportSelectedIndex=(this.gamepadTeleportSelectedIndex+1)%d.length)}}if(this.isMap3DActive&&this.controls){const g=i.axes[2],h=i.axes[3],d=i.buttons[7]?i.buttons[7].value:0,x=i.buttons[6]?i.buttons[6].value:0,_=.15,y=.15,T=(q.ROT_SPEED!==void 0?q.ROT_SPEED:2)*t,S=20*t,A=Math.abs(g)>_||Math.abs(h)>_,N=d>y||x>y;if(A||N){const M=new W().copy(this.camera.position).sub(this.controls.target),b=new _a().setFromVector3(M);if(Math.abs(g)>_&&(b.theta-=g*T),Math.abs(h)>_){b.phi-=h*T;const k=this.controls.minPolarAngle||0,R=this.controls.maxPolarAngle||Math.PI;b.phi=Math.max(k,Math.min(R,b.phi))}d>y&&(b.radius-=d*S),x>y&&(b.radius+=x*S);const z=this.controls.minDistance||2,D=this.controls.maxDistance||100;b.radius=Math.max(z,Math.min(D,b.radius)),b.makeSafe(),M.setFromSpherical(b),this.camera.position.copy(this.controls.target).add(M),this.controls.update()}}this.prevGamepadButtons=i.buttons.map(g=>g.pressed)}queueNotification(t){this.notificationQueue.push(t)}updateNotification(t){if(!this.activeNotification){if(this.notificationQueue.length>0){const i=this.notificationQueue.shift();this.activeNotification={text:i,displayText:"",state:"OPENING",widthProgress:0,typeTimer:0,charIndex:0,waitTimer:0,closeProgress:1}}return}const e=this.activeNotification;e.state==="OPENING"?(e.widthProgress+=t/.15,e.widthProgress>=1&&(e.widthProgress=1,e.state="TYPING")):e.state==="TYPING"?(e.typeTimer+=t,e.typeTimer>=.025&&(e.typeTimer=0,e.charIndex++,e.displayText=e.text.substring(0,e.charIndex),e.charIndex>=e.text.length&&(e.state="WAITING",e.waitTimer=0))):e.state==="WAITING"?(this.isZoomTransitionActive||(e.waitTimer+=t),e.waitTimer>=1&&(e.state="CLOSING",e.closeProgress=1)):e.state==="CLOSING"&&(e.closeProgress-=t/.15,e.closeProgress<=0&&(e.closeProgress=0,this.activeNotification=null))}update(t){if(this.isGameOver||this.isDestroyed||!t)return;if(!this.isPaused&&!this.isIntroPlaying&&!this.isStoryActive&&(this.elapsedTime+=t),this.isStoryActive){this.updateGamepad(t),this.updateStory(t);return}if(this.isZoomTransitionActive&&(this.zoomTransitionTimer-=t,this.zoomTransitionTimer<=0&&(this.isZoomTransitionActive=!1,this.zoomTransitionTimer=0)),this.updateNotification(t),this.updateGamepad(t),this.isPaused)return;this.isIntroPlaying||this.hunters.some(o=>o.state!=="SLEEP"&&o.z===this.player.z)&&(this.hunterOnSameFloorDetected||(this.ui.showInfoBanner(Nt("msgDidYouHearThat")),this.hunterOnSameFloorDetected=!0)),this.hunters.some(a=>a.state==="SLEEP")&&this.getMapVisitedPercentage()>=10&&this.wakeHunters();const i=1e3/q.HUNTER_SPEED*t;for(const a of this.hunters)a.visualX===null&&(a.visualX=a.x),a.visualY===null&&(a.visualY=a.y),a.visualZ===null&&(a.visualZ=a.z),!(a.x===null||a.y===null||a.z===null)&&(a.visualX=sa(a.visualX,a.x,i),a.visualY=sa(a.visualY,a.y,i),a.visualZ=sa(a.visualZ,a.z,i*2),a.generateCloudTexture(t));if(this.isMap3DActive){this.controls&&this.controls.update();const a=this.mazeGen.size,o=this.isTeleportMode?.25:1;for(const r of this.hunterMeshes){const c=r.hunter,l=r.mesh;if(c.visualX===null||c.visualZ===null||c.visualY===null)continue;l.position.set(c.visualX-a/2,(c.visualZ-a/2)*this.vScale,c.visualY-a/2);const u=c.jellyTime,f=1+Math.sin(u*1.2)*.07,p=1+Math.cos(u*.8)*.07,v=1+Math.sin(u*1.5)*.07;r.coreMesh&&(r.coreMesh.scale.set(f,p,v),r.coreMesh.material&&(r.coreMesh.material.emissiveIntensity=(.8+.2*Math.sin(u*3)+(Math.random()<.1?(Math.random()-.5)*.4:0))*o)),r.particles&&r.particles.forEach(x=>{const _=x.userData;_.angle+=_.speed*t;const y=Math.cos(_.angle)*_.radius,T=Math.sin(_.angle)*_.radius,S=Math.sin(_.angle*2+_.phaseY)*.25;let A=0,N=0,M=0;Math.random()<.15?(A=(Math.random()-.5)*.12,N=(Math.random()-.5)*.12,M=(Math.random()-.5)*.12,x.scale.set(1.4+Math.random()*.4,.6+Math.random()*.3,1.4+Math.random()*.4)):x.scale.set(1,1,1),x.position.set(y+A,S+N,T+M)});const m=c.x-c.visualX,g=c.y-c.visualY,h=Math.sqrt(m*m+g*g),d=Math.max(0,Math.min(1,1-h));if(c.lastPos&&(c.lastPos.x!==c.x||c.lastPos.y!==c.y)){r.trail1.position.set(c.lastPos.x-a/2,(c.lastPos.z-a/2)*this.vScale,c.lastPos.y-a/2),r.trail1.visible=!0;const x=c.jellyTime-.2,_=.95-d*.47,y=_*(1+Math.sin(x*1.2)*.07),T=_*(1+Math.cos(x*.8)*.07),S=_*(1+Math.sin(x*1.5)*.07);r.trail1.scale.set(y,T,S),r.trail1.material&&(r.trail1.material.opacity=(.4-d*.2)*o)}else r.trail1.visible=!1;if(c.history&&c.history.length===2){const x=c.history[0];r.trail2.position.set(x.x-a/2,(x.z-a/2)*this.vScale,x.y-a/2);const _=.48*(1-d);if(_>.02){r.trail2.visible=!0;const y=c.jellyTime-.4,T=_*(1+Math.sin(y*1.2)*.07),S=_*(1+Math.cos(y*.8)*.07),A=_*(1+Math.sin(y*1.5)*.07);r.trail2.scale.set(T,S,A),r.trail2.material&&(r.trail2.material.opacity=.2*(1-d)*o)}else r.trail2.visible=!1}else r.trail2.visible=!1}if(this.keyMeshes)for(const r of this.keyMeshes)r.rotation.y+=1.5*t,r.rotation.x+=.5*t;if(this.isTeleportMode&&this.teleportMeshes&&this.gamepadTeleportSelectedIndex!==void 0){const c=this.getTeleportCandidates()[this.gamepadTeleportSelectedIndex];this.teleportMeshes.forEach(l=>{const{gridX:u,gridY:f,gridZ:p}=l.userData;if(c&&u===c.x&&f===c.y&&p===c.z){const m=1.3+.25*Math.sin(Date.now()/100);l.scale.set(m,m,m),l.material&&l.material.emissive&&(l.material.emissive.setHex(16755200),l.material.emissiveIntensity=3.5)}else{const m=u===Math.floor(this.player.x)&&f===Math.floor(this.player.y)&&p===this.player.z,g=this.inactiveTeleportPos&&this.inactiveTeleportPos.x===u&&this.inactiveTeleportPos.y===f&&this.inactiveTeleportPos.z===p;let h=1;m&&(h=1.4),l.scale.set(h,h,h),l.material&&l.material.emissive&&(g?(l.material.emissive.setHex(4473924),l.material.emissiveIntensity=0):m?(l.material.emissive.setHex(65535),l.material.emissiveIntensity=3):(l.material.emissive.setHex(q.COLORS.THREE_TELEPORT),l.material.emissiveIntensity=2.5))}})}}if(!this.isMap3DActive&&!this.isZoomTransitionActive){let a=0,o=0;const l=1e3/q.HUNTER_SPEED*q.MOVE_SPEED_FACTOR*t;let u=0,f=0;if(this.input.touchMoveVector?(u=this.input.touchMoveVector.x,f=this.input.touchMoveVector.y):((this.input.keys.w||this.input.keys.arrowup)&&(f-=1),(this.input.keys.s||this.input.keys.arrowdown)&&(f+=1),(this.input.keys.a||this.input.keys.arrowleft)&&(u-=1),(this.input.keys.d||this.input.keys.arrowright)&&(u+=1)),u!==0||f!==0){const y=Math.sqrt(u*u+f*f);a=u/y*l,o=f/y*l,this.player.dir=Math.atan2(o,a)}let p=!1;if(a!==0||o!==0){p=!0;const y=.01,T=Math.abs(a)>y,S=Math.abs(o)>y;T&&S?(this.playerSide=a>0?"right":"left",this.playerVertical=o>0?"down":"up"):T?this.playerSide=a>0?"right":"left":S&&(this.playerVertical=o>0?"down":"up")}if(p?(this.playerWalkCycle=(this.playerWalkCycle||0)+t*18,this.playerSquashTargetX=1+Math.sin(this.playerWalkCycle)*.15,this.playerSquashTargetY=1-Math.sin(this.playerWalkCycle)*.15):(this.playerSquashTargetX=1,this.playerSquashTargetY=1),this.playerSquashX=this.playerSquashX||1,this.playerSquashY=this.playerSquashY||1,this.playerSquashX+=(this.playerSquashTargetX-this.playerSquashX)*.25,this.playerSquashY+=(this.playerSquashTargetY-this.playerSquashY)*.25,a!==0||o!==0){const y=Math.floor(this.player.x),T=Math.floor(this.player.y),S=this.player.x+a,A=this.player.y+o,N=(K,Q,nt)=>{const rt=this.maze.get(K,Q,nt);return rt===this.mazeGen.TYPES.WALL||rt===this.mazeGen.TYPES.STATUE?!1:rt===this.mazeGen.TYPES.EXIT&&this.keysCollected<this.totalKeys?(this.triggerLockedExitWarning(),!1):!0},M=q.PLAYER_COLLISION_RADIUS,b=q.PLAYER_COLLISION_OFFSET_X||0,z=q.PLAYER_COLLISION_OFFSET_Y||0,D=(K,Q,nt)=>{const rt=Math.floor(K+b-M),X=Math.floor(K+b+M),st=Math.floor(Q+z-M),C=Math.floor(Q+z+M);for(let F=rt;F<=X;F++)for(let $=st;$<=C;$++)if(F<0||F>=this.mazeGen.size||$<0||$>=this.mazeGen.size||!N(F,$,nt))return!1;return!0};D(S,this.player.y,this.player.z)&&(this.player.x=S),D(this.player.x,A,this.player.z)&&(this.player.y=A);const k=Math.floor(this.player.x),R=Math.floor(this.player.y),I=this.player.z;if(k!==y||R!==T){const K=this.maze.get(y,T,I);if(K===this.mazeGen.TYPES.VISITED||K===this.mazeGen.TYPES.START||K===this.mazeGen.TYPES.TELEPORT){const nt=I+1<this.mazeGen.size&&this.maze.get(k,R,I+1)!==this.mazeGen.TYPES.WALL,rt=I-1>=0&&this.maze.get(k,R,I-1)!==this.mazeGen.TYPES.WALL;nt&&rt?this.dialogueWhichWayTriggered||(this.ui.showInfoBanner(Nt("msgWhichWay")),this.dialogueWhichWayTriggered=!0):nt?this.dialogueUpTriggered||(this.ui.showInfoBanner(Nt("msgElevatorUp")),this.dialogueUpTriggered=!0):rt&&(this.dialogueDownTriggered||(this.ui.showInfoBanner(Nt("msgElevatorDown")),this.dialogueDownTriggered=!0))}}const j=(K,Q,nt)=>{const rt=this.maze.get(K,Q,nt);(rt===this.mazeGen.TYPES.PATH||rt===this.mazeGen.TYPES.KEY)&&(rt===this.mazeGen.TYPES.KEY?this.collectKey(K,Q,nt):(this.maze.set(K,Q,nt,this.mazeGen.TYPES.VISITED),this.visitedCells.add(`${K},${Q},${nt}`)),this.staticMapCacheDirty=!0)};j(k,R,I),k!==y&&R!==T&&(j(k,T,I),j(y,R,I));const J=this.maze.get(k,R,I);!this.exitPathfinderUnlocked&&this.checkExitNeighborVisited()&&(this.exitPathfinderUnlocked=!0,this.ui.showInfoBanner(Nt("msgExitFound"))),J===this.mazeGen.TYPES.EXIT&&this.triggerVictory()}if((a!==0||o!==0)&&(this.skipCellAnimations=!1),this.checkHunterCollision(),this.isGameOver)return;const v=Math.floor(this.player.x),m=Math.floor(this.player.y),g=this.player.z,h=this.maze.get(v,m,g)===this.mazeGen.TYPES.TELEPORT,d=this.inactiveTeleportPos&&this.inactiveTeleportPos.x===v&&this.inactiveTeleportPos.y===m&&this.inactiveTeleportPos.z===g;if(v>=0&&v<this.mazeGen.size&&m>=0&&m<this.mazeGen.size){if(this.maze.get(v,m,g)===this.mazeGen.TYPES.PATH)this.maze.set(v,m,g,this.mazeGen.TYPES.VISITED),this.visitedCells.add(`${v},${m},${g}`),this.staticMapCacheDirty=!0;else if(h){const N=`${v},${m},${g}`;!(this.lastPlayerCell&&this.lastPlayerCell.x===v&&this.lastPlayerCell.y===m&&this.lastPlayerCell.z===g)&&!d&&(this.discoveredTeleports.add(N),this.staticMapCacheDirty=!0,this.triggerSave(),this.ui.showInfoBanner(Nt("msgSafePointTeleport")))}const y=g<this.mazeGen.size-1&&this.maze.get(v,m,g+1)!==this.mazeGen.TYPES.WALL,T=g>0&&this.maze.get(v,m,g-1)!==this.mazeGen.TYPES.WALL,S=y||T;if(this.lastPlayerCell){const N=this.lastPlayerCell.x,M=this.lastPlayerCell.y,b=this.lastPlayerCell.z,z=b<this.mazeGen.size-1&&this.maze.get(N,M,b+1)!==this.mazeGen.TYPES.WALL,D=b>0&&this.maze.get(N,M,b-1)!==this.mazeGen.TYPES.WALL;if((z||D)&&(N!==v||M!==m||b!==g)){const I=`${N},${M},${b}`;this.revealedPathSet.has(I)&&(this.revealedPathSet.delete(I),this.staticMapCacheDirty=!0)}}const A=`${v},${m},${g}`;!S&&this.revealedPathSet.has(A)&&(this.revealedPathSet.delete(A),this.staticMapCacheDirty=!0)}h&&!d?(this.input.keys.e||this.input.keys.pageup||this.input.keys.q||this.input.keys.pagedown)&&(["e","q","pageup","pagedown"].forEach(y=>this.input.keys[y]=!1),this.discoveredTeleports.size>=2?this.toggleTeleportMap(!0):this.ui.showInfoBanner(Nt("msgNoOtherActiveTeleport"))):((this.input.keys.e||this.input.keys.pageup)&&this.changeFloor(2),(this.input.keys.q||this.input.keys.pagedown)&&this.changeFloor(-2)),(!this.lastPlayerCell||this.lastPlayerCell.x!==v||this.lastPlayerCell.y!==m||this.lastPlayerCell.z!==g)&&(this.staticMapCacheDirty=!0);const _=window.innerHeight>window.innerWidth;this.ui.updateMobileMapButton(h,!!d,_),this.updateFloorUI(),this.lastPlayerCell={x:v,y:m,z:g}}const n=performance.now();if(n-this.lastHunterMove>q.HUNTER_SPEED){if(this.lastHunterMove=n,this.teleportCooldownTicks>0&&(this.teleportCooldownTicks--,this.staticMapCacheDirty=!0,this.teleportCooldownTicks===0)){this.inactiveTeleportPos=null;for(const m of this.hunters){const g=this.maze.get(m.x,m.y,m.z);if(g===this.mazeGen.TYPES.VISITED||g===this.mazeGen.TYPES.START||g===this.mazeGen.TYPES.EXIT){const h=m.state;m.state="TRACKING",h!=="TRACKING"&&!this.dialogueDetectedTriggered&&(this.ui.showInfoBanner(Nt("msgIWasDetected")),this.dialogueDetectedTriggered=!0)}else m.state="WANDERING",m.pathToTarget=[],m.visitedNodes.clear(),m.visitedNodes.add(`${m.x},${m.y},${m.z}`)}}let a=0,o=0;const r=this.hunters.some(m=>m.state==="SLEEP");for(const m of this.hunters){if(m.state==="SLEEP")continue;const g=m.state;m.move(this.player,this.maze,this.mazeGen.TYPES),m.state==="TRACKING"&&g!=="TRACKING"&&!this.dialogueDetectedTriggered&&(this.ui.showInfoBanner(Nt("msgIWasDetected")),this.dialogueDetectedTriggered=!0),(m.state==="TRACKING"||m.state==="TELEPORT_TRACKING")&&a++;const h=m.z===this.player.z;let d=!1;if(h)d=!0;else{const x=Math.max(5,Math.floor(this.degree*1.2));$p({x:m.x,y:m.y,z:m.z},{x:Math.floor(this.player.x),y:Math.floor(this.player.y),z:this.player.z},this.maze,this.mazeGen.size,this.mazeGen.TYPES.WALL,x,this.mazeGen.startPos)<=x&&(d=!0)}if(d&&o++,this.checkHunterCollision(),this.isGameOver)return}const c=a>0;this.ui.updateHazardWarning(c,this.teleportCooldownTicks,this.isSafeMode,r),c?this.canvas.classList.add("hunted-map-effect"):this.canvas.classList.remove("hunted-map-effect"),this.ui.setNearbyWarning(o>0);let l=1/0;const u=Math.floor(this.player.x),f=Math.floor(this.player.y),p=this.player.z,v=this.hunters.filter(m=>m.state!=="SLEEP");for(const m of v){const g=Kp({x:m.x,y:m.y,z:m.z},{x:u,y:f,z:p},this.maze,this.mazeGen.size,this.mazeGen.TYPES.WALL);g<l&&(l=g)}this.ui.updateProximeter(l,v.length,this.isGameOver)}}changeFloor(t){if(this.isGameOver||this.floorTransition)return;this.skipCellAnimations=!0;const e=Math.floor(this.player.x),i=Math.floor(this.player.y),n=this.player.z,a=n+1<this.mazeGen.size&&this.maze.get(e,i,n+1)!==this.mazeGen.TYPES.WALL&&this.maze.get(e,i,n+1)!==this.mazeGen.TYPES.STATUE,o=n-1>=0&&this.maze.get(e,i,n-1)!==this.mazeGen.TYPES.WALL&&this.maze.get(e,i,n-1)!==this.mazeGen.TYPES.STATUE;if(t>0&&a||t<0&&o){const r=n+t;if(r>=0&&r<this.mazeGen.size&&this.maze.get(e,i,r)!==this.mazeGen.TYPES.WALL&&this.maze.get(e,i,r)!==this.mazeGen.TYPES.STATUE){const c=n+t/2;this.maze.get(e,i,c)!==this.mazeGen.TYPES.ELEVATOR_VISITED&&(this.maze.set(e,i,c,this.mazeGen.TYPES.ELEVATOR_VISITED),this.staticMapCacheDirty=!0);const l=`${e},${i},${c}`;this.revealedPathSet.delete(l);const u=document.createElement("canvas");u.width=this.canvas.width,u.height=this.canvas.height;const f=u.getContext("2d");this.renderMapToContext(f,this.player.z),this.player.x=e+q.PLAYER_START_X,this.player.y=i+q.PLAYER_START_Y%1,this.player.z=r,this.staticMapCacheDirty=!0,this.populateFullyRevealedCells(r),this.maze.get(e,i,r)===this.mazeGen.TYPES.PATH&&this.maze.set(e,i,r,this.mazeGen.TYPES.VISITED);const p=document.createElement("canvas");p.width=this.canvas.width,p.height=this.canvas.height;const v=p.getContext("2d");this.renderMapToContext(v,this.player.z),this.floorTransition={canvasOld:u,canvasNew:p,progress:0,duration:.4,delta:t},this.updateFloorUI(),this.draw2DMap(0),this.maze.get(e,i,r)===this.mazeGen.TYPES.EXIT&&this.triggerVictory()}}}toggleMap3D(){this.isMap3DActive=!this.isMap3DActive,this.isTeleportMode=!1;const t=document.getElementById("mobile-teleport-exit-btn");if(t&&t.classList.add("hidden"),this.isMap3DActive){this.ui.setMap3DVisible(!0),this.activeMapFloor=this.player.z,this.visualActiveFloor=this.player.z,this.mapCursor={x:Math.floor(this.player.x),y:Math.floor(this.player.y),z:this.player.z},this.mapZoom=1,this.mapPanOffsetX=0,this.mapPanOffsetY=0,this.renderer&&this.renderer.domElement&&(this.renderer.domElement.style.display="none");const e=document.getElementById("map3d-instructions");e&&(e.style.display="none"),this.isometricCanvas||this.initIsometricCanvas(),this.isometricCanvas.style.display="block"}else this.ui.uiMobileControls&&this.ui.uiMobileControls.classList.remove("hidden"),this.ui.setMap3DVisible(!1),this.isometricCanvas&&(this.isometricCanvas.style.display="none")}build3DMap(t=!1){for(;this.scene.children.length>0;)this.scene.remove(this.scene.children[0]);this.scene.add(new uo(16777215,.6));const e=new ho(16777215,.4);e.position.set(10,20,10),this.scene.add(e),this.pulsatingMaterials=[],this.hunterMeshes=[],this.teleportMeshes=[],this.knownMeshes=[],this.keyMeshes=[],this.exitMesh=null;const i=this.mazeGen.size,n=(x,_,y)=>{if(y<0||y>=i)return!1;const T=this.maze.get(x,_,y);return T===2||T===3||T===4||T===this.mazeGen.TYPES.TELEPORT&&this.discoveredTeleports.has(`${x},${_},${y}`)||this.visitedCells.has(`${x},${_},${y}`)};this.gridMeshes=new Array(i*i*i).fill(null);const a=new Ce(.9,.9,.9),o=this.isTeleportMode?q.TELEPORT_MAP_OPACITY:1,r=new Ce(.9,.425,.9),c=new Ce(.9,.425,.9),l=new ps(.35,.35,2*this.vScale,8);new ne({color:q.COLORS.THREE_VISITED,transparent:!0,opacity:.8*o});for(let x=0;x<i;x++)for(let _=0;_<i;_++)for(let y=0;y<i;y++){const T=this.maze.get(x,_,y);if(T===this.mazeGen.TYPES.WALL||T===this.mazeGen.TYPES.STATUE)continue;if(y%2===0&&T!==0){const I=`${x},${_},${y}`,B=this.revealedPathSet.has(I),j=T===this.mazeGen.TYPES.ELEVATOR_VISITED,J=T===1&&(n(x,_,y-1)||n(x,_,y+1));if(j||J||B||t){let K;if(B)K=new ne({color:16777215,transparent:!0,opacity:.95*o,emissive:16777215,emissiveIntensity:2*o});else if(j)K=new ne({color:q.COLORS.THREE_VISITED,transparent:!0,opacity:.8*o});else if(J||t){const nt=t?q.COLORS.THREE_VISITED:q.COLORS.THREE_KNOWN;K=new ne({color:nt,transparent:!0,opacity:t?.72:.6*o,emissive:nt,emissiveIntensity:t?0:.5*o}),t||this.pulsatingMaterials.push(K)}const Q=new te(l,K);Q.position.set(x-i/2,(y-i/2)*this.vScale,_-i/2),this.scene.add(Q),this.gridMeshes[x*i*i+_*i+y]=Q,J&&!B&&(Q.userData={gridX:x,gridY:_,gridZ:y},this.knownMeshes.push(Q))}continue}const A=T===this.mazeGen.TYPES.TELEPORT,N=A&&this.discoveredTeleports.has(`${x},${_},${y}`),M=T===2||T===3||T===4||T===5||N,b=(T===1||A&&!N)&&this.isNearVisited(x,_,y);if(N){if(x===Math.floor(this.mazeGen.startPos.x)&&_===Math.floor(this.mazeGen.startPos.y)&&y===this.mazeGen.startPos.z){const C=this.isTeleportMode?2.5:.5,F=new ne({color:q.COLORS.THREE_START,emissive:q.COLORS.THREE_START,emissiveIntensity:C*o,transparent:!0,opacity:this.isTeleportMode?.95:.8*o}),$=new te(a,F);$.position.set(x-i/2,(y-i/2)*this.vScale,_-i/2),this.isTeleportMode&&$.scale.set(1.4,1.4,1.4),$.userData={isTeleport:!0,gridX:x,gridY:_,gridZ:y},this.scene.add($),this.teleportMeshes.push($);continue}const B=x===Math.floor(this.player.x)&&_===Math.floor(this.player.y)&&y===this.player.z,j=this.inactiveTeleportPos&&this.inactiveTeleportPos.x===x&&this.inactiveTeleportPos.y===_&&this.inactiveTeleportPos.z===y;let J=this.isTeleportMode?.9:.45,K=this.isTeleportMode?2.5:.8,Q=q.COLORS.THREE_TELEPORT,nt=.95;j?(Q=4473924,K=0,nt=.4):this.isTeleportMode&&B&&(Q=65535,nt=.5,K=3);const rt=new En(J,16,16),X=new ne({color:Q,emissive:Q,emissiveIntensity:K,transparent:!0,opacity:nt}),st=new te(rt,X);st.position.set(x-i/2,(y-i/2)*this.vScale,_-i/2),st.userData={isTeleport:!0,gridX:x,gridY:_,gridZ:y},this.scene.add(st),this.teleportMeshes.push(st);continue}if(T===this.mazeGen.TYPES.KEY){const I=new La(.3,0),B=new ne({color:q.COLORS.THREE_KEY,emissive:q.COLORS.THREE_KEY,emissiveIntensity:.6*o,shininess:100}),j=new te(I,B);if(j.position.set(x-i/2,(y-i/2)*this.vScale,_-i/2),j.userData={isKey:!0,gridX:x,gridY:_,gridZ:y},this.scene.add(j),this.keyMeshes.push(j),this.pulsatingMaterials.push(B),!this.visitedCells.has(`${x},${_},${y}`))continue}const D=`${x},${_},${y}`,k=this.revealedPathSet.has(D);if(t?T!==this.mazeGen.TYPES.WALL:M||b||k){let I=t?q.COLORS.THREE_VISITED:q.COLORS.THREE_KNOWN,B;k?(I=16777215,B=new ne({color:I,transparent:!0,opacity:.95*o,emissive:I,emissiveIntensity:2*o})):M||t?(I=q.COLORS.THREE_VISITED,T===3?I=q.COLORS.THREE_START:T===4&&(I=this.keysCollected===this.totalKeys?q.COLORS.THREE_EXIT:16724736),B=new ne({color:I,transparent:!0,opacity:t?.72:.8*o})):b&&(B=new ne({color:I,transparent:!0,opacity:.6*o,emissive:I,emissiveIntensity:.5*o}),this.pulsatingMaterials.push(B));const j=y<i-1&&this.maze.get(x,_,y+1)!==0,J=y>0&&this.maze.get(x,_,y-1)!==0;if(j||J){const rt=this.pulsatingMaterials.indexOf(B);if(rt>-1&&this.pulsatingMaterials.splice(rt,1),j&&J){let X=!1,st=!1;if(k){if(this.activePathReveal){const Mt=this.activePathReveal.findIndex(Y=>Y.x===x&&Y.y===_&&Y.z===y);if(Mt!==-1&&Mt<this.activePathReveal.length-1){const Y=this.activePathReveal[Mt+1];Y.z>y&&(X=!0),Y.z<y&&(st=!0)}}!X&&!st&&(X=this.revealedPathSet.has(`${x},${_},${y+1}`)||this.revealedPathSet.has(`${x},${_},${y+2}`),st=this.revealedPathSet.has(`${x},${_},${y-1}`)||this.revealedPathSet.has(`${x},${_},${y-2}`))}const C=k&&(X||!X&&!st),F=k&&(st||!X&&!st),$=new ne({color:F?16777215:q.COLORS.THREE_ELEVATOR_DOWN,transparent:!0,opacity:.9*o,emissive:F?16777215:q.COLORS.THREE_ELEVATOR_DOWN,emissiveIntensity:(F?2:.4)*o}),V=new ne({color:C?16777215:q.COLORS.THREE_ELEVATOR_UP,transparent:!0,opacity:.9*o,emissive:C?16777215:q.COLORS.THREE_ELEVATOR_UP,emissiveIntensity:(C?2:.4)*o}),H=new te(r,$),ct=new te(c,V);H.position.set(x-i/2,(y-i/2)*this.vScale-.2125,_-i/2),ct.position.set(x-i/2,(y-i/2)*this.vScale+.2125,_-i/2),this.scene.add(H),this.scene.add(ct),this.gridMeshes[x*i*i+_*i+y]=ct,b&&!k&&(H.userData={gridX:x,gridY:_,gridZ:y},ct.userData={gridX:x,gridY:_,gridZ:y},this.knownMeshes.push(H),this.knownMeshes.push(ct));continue}else{const X=k?16777215:j?q.COLORS.THREE_ELEVATOR_UP:q.COLORS.THREE_ELEVATOR_DOWN,st=k?2:.4;B=new ne({color:X,transparent:!0,opacity:.9*o,emissive:X,emissiveIntensity:st*o})}}const K=x===Math.floor(this.player.x)&&_===Math.floor(this.player.y)&&y===this.player.z,Q=this.hunters.some(rt=>rt.x===x&&rt.y===_&&rt.z===y);if(K||Q){const rt=new Ce(.9,.05,.9),X=new te(rt,B);X.position.set(x-i/2,(y-i/2)*this.vScale-.425,_-i/2),this.scene.add(X),this.gridMeshes[x*i*i+_*i+y]=X;continue}const nt=new te(a,B);if(nt.position.set(x-i/2,(y-i/2)*this.vScale,_-i/2),T===4&&(this.exitMesh=nt,this.keysCollected<this.totalKeys)){const rt=new Ce(.95,.95,.95),X=new fs({color:16711680,wireframe:!0}),st=new te(rt,X);nt.add(st)}this.scene.add(nt),this.gridMeshes[x*i*i+_*i+y]=nt,(b||T===this.mazeGen.TYPES.EXIT)&&!k&&(nt.userData={gridX:x,gridY:_,gridZ:y},this.knownMeshes.push(nt))}}if(t)return;const u=new En(.42,16,16),f=new ne({color:16711680,emissive:16711680,emissiveIntensity:.8,depthWrite:!1}),p=new te(u,f);p.position.set(Math.floor(this.player.x)-i/2,(this.player.z-i/2)*this.vScale+.05,Math.floor(this.player.y)-i/2),this.scene.add(p);const v=new En(.4),m=new ne({color:q.COLORS.THREE_HUNTER,emissive:q.COLORS.THREE_HUNTER,emissiveIntensity:.8,depthWrite:!1}),g=new ne({color:q.COLORS.THREE_HUNTER,transparent:!0,opacity:.4,emissive:q.COLORS.THREE_HUNTER,emissiveIntensity:.3,depthWrite:!1}),h=new ne({color:q.COLORS.THREE_HUNTER,transparent:!0,opacity:.15,emissive:q.COLORS.THREE_HUNTER,emissiveIntensity:.1,depthWrite:!1}),d=v;for(let x=0;x<this.hunters.length;x++){const _=this.hunters[x];if(_.state==="SLEEP")continue;const y=new te(d,h),T=new te(d,g);y.visible=!1,T.visible=!1,y.renderOrder=99,T.renderOrder=99,this.scene.add(y),this.scene.add(T);const S=new xn;S.renderOrder=99;const A=new te(v,m);S.add(A);const N=4,M=[],b=new Ce(.18,.18,.18),z=[q.COLORS.THREE_HUNTER,16711935,65535,16776960];for(let D=0;D<N;D++){const k=new ne({color:z[D%z.length],transparent:!0,opacity:.8,emissive:z[D%z.length],emissiveIntensity:.8,depthWrite:!1}),R=new te(b,k);R.userData={angle:D/N*Math.PI*2,radius:.35+Math.random()*.1,speed:1+Math.random()*1.5,phaseY:Math.random()*Math.PI*2},S.add(R),M.push(R)}S.position.set(_.x-i/2,(_.z-i/2)*this.vScale,_.y-i/2),this.scene.add(S),this.hunterMeshes.push({hunter:_,mesh:S,coreMesh:A,particles:M,trail1:T,trail2:y})}this.camera.position.set(i,i*this.vScale,i),this.controls.target.set(0,0,0),this.controls.update()}draw2DMap(t=.016){if(this.deathAnimation&&this.deathAnimation.active){if(this.deathAnimation.delayElapsed<this.deathAnimation.delayDuration)this.deathAnimation.delayElapsed+=t,this.updateNotification(t);else if(this.deathAnimation.screenFilled)this.deathAnimation.reversing&&(this.deathAnimation.elapsed-=t,this.deathAnimation.elapsed<=0&&(this.deathAnimation=null,this.isGameOver=!1,this.ui.initGameUI(this.isSafeMode),this.ui.uiMobileMap&&(this.ui.uiMobileMap.disabled=!1),this.ui.showInfoBanner(Nt("msgPlayerRespawn"))));else if(this.deathAnimation.elapsed+=t,this.updateNotification(t),this.deathAnimation.elapsed>=this.deathAnimation.duration){this.deathAnimation.screenFilled=!0,this.activeNotification=null,this.notificationQueue=[];const n=Math.floor(this.deathAnimation.playerPos.x),a=Math.floor(this.deathAnimation.playerPos.y),o=this.deathAnimation.playerPos.z;this.maze.set(n,a,o,this.mazeGen.TYPES.KEY),this.totalKeys++,this.ui.updateKeysHUD(this.keysCollected,this.totalKeys),this.staticMapCacheDirty=!0;let r=this.mazeGen.startPos.x,c=this.mazeGen.startPos.y,l=this.mazeGen.startPos.z;this.lastSavePos&&(r=this.lastSavePos.x,c=this.lastSavePos.y,l=this.lastSavePos.z),this.player.x=r,this.player.y=c,this.player.z=l,this.activeMapFloor=l,this.visualActiveFloor=l,this.lastPlayerCell={x:Math.floor(r),y:Math.floor(c),z:l},this.hunters=[],this.initHunters(this.degree),this.suppressWakeHuntersBanner=!0,ns(this),this.deathAnimation.reversing=!0}}this.floorTransition&&(this.floorTransition.progress+=t/this.floorTransition.duration,this.floorTransition.progress>=1&&(this.floorTransition=null));const e=this.mazeGen.size,i=this.isZoomActive?11:e;if(this.zoomVisibleCells===void 0?this.zoomVisibleCells=i:(this.zoomVisibleCells+=(i-this.zoomVisibleCells)*(1-Math.exp(-12*t)),Math.abs(this.zoomVisibleCells-i)<.01&&(this.zoomVisibleCells=i)),this.floorTransition){const n=this.floorTransition.progress,a=this.canvas.width/2,o=this.canvas.height/2,r=this.floorTransition.delta>0;this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);let c,l;r?(c=1-.2*n,l=1.2-.2*n):(c=1+.2*n,l=.8+.2*n),this.ctx.save(),this.ctx.globalAlpha=1-n,this.ctx.translate(a,o),this.ctx.scale(c,c),this.ctx.drawImage(this.floorTransition.canvasOld,-a,-o),this.ctx.restore(),this.ctx.save(),this.ctx.globalAlpha=n,this.ctx.translate(a,o),this.ctx.scale(l,l),this.ctx.drawImage(this.floorTransition.canvasNew,-a,-o),this.ctx.restore()}else this.renderMapToContext(this.ctx,this.player.z)}renderMapToContext(t,e){t.clearRect(0,0,t.canvas.width,t.canvas.height);const i=this.mazeGen.size,n=i>11,a=n?t.canvas.width/11:t.canvas.width/i,o=this.player.x,r=this.player.y,c=Math.floor(o),l=Math.floor(r);let u=n||this.isZoomTransitionActive,f=n?this.zoomVisibleCells:i;if(this.isZoomTransitionActive){const g=Math.min(1,(2-this.zoomTransitionTimer)/2),d=(y=>1-Math.pow(1-y,3))(g),x=3;f=x+((n?11:i)-x)*d}if(u){t.save();const m=(n?11:i)/f,g=f/2;let h=o,d=r;h<g&&(h=g),h>i-g&&(h=i-g),d<g&&(d=g),d>i-g&&(d=i-g);const x=t.canvas.width/2,_=t.canvas.height/2;t.translate(x,_),t.scale(m,m),t.translate(-h*a,-d*a)}const p=n?i*a:this.canvas.width,v=n?i*a:this.canvas.height;(this.staticMapCacheDirty||this.staticMapCacheCanvas.width!==p||this.staticMapCacheCanvas.height!==v)&&this.updateStaticMapCache(e),t.drawImage(this.staticMapCacheCanvas,0,0);for(const m of this.hunters){if(m.state==="SLEEP")continue;const g=m.visualZ!==null?m.visualZ:m.z,h=m.visualX!==null?m.visualX:m.x,d=m.visualY!==null?m.visualY:m.y;if(g===null||h===null||d===null)continue;const x=Math.abs(g-e),_=Math.max(0,1-x);if(_<=0)continue;const y=m.x!==null?m.x:h,T=m.y!==null?m.y:d,S=y-h,A=T-d,N=Math.sqrt(S*S+A*A),M=Math.max(0,Math.min(1,1-N)),b=[];if(m.lastPos&&(m.lastPos.x!==y||m.lastPos.y!==T)&&m.lastPos.z===e){const z=.95-M*.47,D=.4-M*.2;b.push({pos:m.lastPos,sizeFactor:z,opacityFactor:D,age:1})}if(m.history&&m.history.length===2){const z=m.history[0];if(z.z===e){const D=.48*(1-M),k=.2*(1-M);D>.01&&b.push({pos:z,sizeFactor:D,opacityFactor:k,age:2})}}if(b.forEach(z=>{if(m.lowCanvas){const D=z.pos.x*a+a/2,k=z.pos.y*a+a/2,R=a*z.sizeFactor*_,I=m.jellyTime-z.age*.2,B=Math.sin(I)*6,j=Math.cos(I*.7)*4,J=1+Math.sin(I*1.2)*.06,K=1+Math.cos(I*.8)*.06,Q=B*Math.PI/180,nt=j*Math.PI/180;t.save(),t.globalAlpha=z.opacityFactor,t.translate(D,k),t.transform(J,Math.tan(nt),Math.tan(Q),K,0,0),t.imageSmoothingEnabled=!1,t.drawImage(m.lowCanvas,-R/2,-R/2,R,R),t.restore()}}),m.lowCanvas){const z=h*a+a/2,D=d*a+a/2,k=a*.95*_,R=m.jellyTime,I=Math.sin(R)*6,B=Math.cos(R*.7)*4,j=1+Math.sin(R*1.2)*.06,J=1+Math.cos(R*.8)*.06,K=I*Math.PI/180,Q=B*Math.PI/180;t.save();const nt=-a*.12*_,rt=-a*.12*_;t.translate(z+nt,D+rt),t.transform(j,Math.tan(Q),Math.tan(K),J,0,0),t.filter="brightness(0) blur(1px) opacity(0.35)",t.imageSmoothingEnabled=!1,t.drawImage(m.lowCanvas,-k/2,-k/2,k,k),t.restore(),t.save(),t.translate(z,D),t.transform(j,Math.tan(Q),Math.tan(K),J,0,0),t.imageSmoothingEnabled=!1,t.drawImage(m.lowCanvas,-k/2,-k/2,k,k),t.restore()}}if(!this.deathAnimation||!this.deathAnimation.screenFilled){const m=`${this.playerVertical}_${this.playerSide}`,g=this.mageImages[m],h=o*a,d=r*a,x=q.PLAYER_SHADOW_OFFSET_X!==void 0?q.PLAYER_SHADOW_OFFSET_X:-.28,_=q.PLAYER_SHADOW_OFFSET_Y!==void 0?q.PLAYER_SHADOW_OFFSET_Y:-.28,y=h+a*x,T=d+a*_;t.save(),t.beginPath();const S=q.PLAYER_SHADOW_WIDTH_FACTOR!==void 0?q.PLAYER_SHADOW_WIDTH_FACTOR:.45,A=q.PLAYER_SHADOW_HEIGHT_FACTOR!==void 0?q.PLAYER_SHADOW_HEIGHT_FACTOR:.3,N=a*S,M=a*A;t.ellipse(y,T,N,M,0,0,Math.PI*2),t.fillStyle="rgba(0, 0, 0, 0.4)",t.fill(),t.restore();const b=Math.max(0,Math.floor((y-N)/a)),z=Math.min(i-1,Math.floor((y+N)/a)),D=Math.max(0,Math.floor((T-M)/a)),k=Math.min(i-1,Math.floor((T+M)/a));for(let I=b;I<=z;I++)for(let B=D;B<=k;B++)this.maze.get(I,B,e)===0&&(this.isNearVisited(I,B,e)||this.isAdjacentToStatue(I,B,e))&&(t.save(),this.wallImage.complete&&this.wallImage.naturalWidth!==0?t.drawImage(this.wallImage,I*a,B*a,a,a):(t.fillStyle=q.COLORS.WALL,t.fillRect(I*a,B*a,a,a)),t.restore());let R=1;if(this.deathAnimation&&this.deathAnimation.active&&(Math.floor(Date.now()/120)%2===0||(R=.2)),g&&g.complete){t.save(),t.globalAlpha=R;const I=a*.9,B=I,j=I*(g.height/g.width);t.translate(h,d),t.scale(this.playerSquashX||1,this.playerSquashY||1);const J=-j*.85;t.drawImage(g,-B/2,J,B,j),t.restore()}else t.save(),t.globalAlpha=R,t.strokeStyle=q.COLORS.PLAYER_OUTLINE,t.lineWidth=1,t.strokeRect(c*a+2,l*a+2,a-4,a-4),t.fillStyle=q.COLORS.PLAYER,t.beginPath(),t.arc(h,d,a*.4,0,Math.PI*2),t.fill(),t.strokeStyle=q.COLORS.PLAYER,t.lineWidth=2,t.beginPath(),t.moveTo(h,d),t.lineTo(h+Math.cos(this.player.dir)*a*1,d+Math.sin(this.player.dir)*a*1),t.stroke(),t.restore();if(q.SHOW_COLLISION_DEBUG){t.save(),t.strokeStyle="#ff0000",t.lineWidth=1.5;const I=q.PLAYER_COLLISION_RADIUS*2*a,B=(q.PLAYER_COLLISION_OFFSET_X||0)*a,j=(q.PLAYER_COLLISION_OFFSET_Y||0)*a;t.strokeRect(h+B-I/2,d+j-I/2,I,I),t.restore()}if(this.deathAnimation&&this.deathAnimation.active){const I=Math.min(1,this.deathAnimation.delayElapsed/this.deathAnimation.delayDuration),B=-(g&&g.complete?a*.9*(g.height/g.width)*.85:a*.5),j=a*.7,J=(1-I)*B-4*j*I*(1-I);if(this.keyImage.complete&&this.keyImage.naturalWidth!==0){t.save();const K=a*.55;t.drawImage(this.keyImage,h-K/2,d+J-K/2,K,K),t.restore()}else t.save(),t.beginPath(),t.arc(h,d+J,a*.15,0,2*Math.PI),t.fillStyle="#ffd700",t.fill(),t.restore()}}if(this.activeNotification){const m=this.activeNotification;t.save(),t.font=`bold ${a*.22}px monospace`;const g=t.measureText(m.text).width,h=a*.4,d=g+h,x=a*.48,_=o*a,y=r*a-a*1.5;let T=d;m.state==="OPENING"?T=d*m.widthProgress:m.state==="CLOSING"&&(T=d*m.closeProgress);const S=this.mazeGen.size*a,A=this.mazeGen.size*a;let N=_;N-T/2<0?N=T/2:N+T/2>S&&(N=S-T/2);let M=y;M-x/2<0?M=x/2:M+x/2>A&&(M=A-x/2),t.fillStyle="#000000",t.fillRect(N-T/2,M-x/2,T,x),t.strokeStyle="#00ffff",t.lineWidth=Math.max(1.5,a*.04),t.strokeRect(N-T/2,M-x/2,T,x),(m.state==="TYPING"||m.state==="WAITING")&&(t.fillStyle="#ffffff",t.textAlign="center",t.textBaseline="middle",t.fillText(m.displayText,N,M)),t.restore()}if(u&&t.restore(),this.isZoomTransitionActive){const h=1-Math.min(1,(2-this.zoomTransitionTimer)/2);t.save(),t.fillStyle=`rgba(0, 0, 0, ${h})`,t.fillRect(0,0,t.canvas.width,t.canvas.height),t.restore()}if(this.deathAnimation&&this.deathAnimation.active){const m=this.deathAnimation.hunter;let g=m.visualX+.5,h=m.visualY+.5;this.deathAnimation.reversing&&(g=this.player.x,h=this.player.y);let d,x;if(n){const _=11/this.zoomVisibleCells,y=this.zoomVisibleCells/2;let T=o,S=r;T<y&&(T=y),T>i-y&&(T=i-y),S<y&&(S=y),S>i-y&&(S=i-y);const A=t.canvas.width/2,N=t.canvas.height/2;d=A+(g-T)*a*_,x=N+(h-S)*a*_}else d=g*a,x=h*a;if(!this.deathAnimation.screenFilled||this.deathAnimation.reversing){const _=Math.hypot(t.canvas.width,t.canvas.height)*1.1,y=this.deathAnimation.elapsed/this.deathAnimation.duration,S=y*y*(3-2*y)*_;t.save(),t.beginPath(),t.arc(d,x,S,0,Math.PI*2),t.clip(),t.fillStyle="rgba(15, 0, 25, 0.96)",t.fillRect(0,0,t.canvas.width,t.canvas.height);const A=45,N=n?11/this.zoomVisibleCells:1;for(let M=0;M<A;M++){const b=Math.random()*Math.PI*2,z=Math.pow(Math.random(),.7)*S,D=d+Math.cos(b)*z,k=x+Math.sin(b)*z,R=(15+Math.random()*70)*N,I=(3+Math.random()*12)*N,B=80+Math.floor(Math.random()*50),j=Math.floor(Math.random()*25),J=130+Math.floor(Math.random()*70);t.fillStyle=Math.random()<.12?"#00ff66":Math.random()<.12?"#00ccff":Math.random()<.08?"#ffffff":`rgb(${B},${j},${J})`,t.fillRect(D-R/2,k-I/2,R,I)}if(Math.random()<.3){t.fillStyle=Math.random()<.7?"#ffffff":"#b3ffff";const M=d+(Math.random()-.5)*S*.8,b=x+(Math.random()-.5)*S*.8,z=(2+Math.random()*5)*N,D=(10+Math.random()*30)*N;t.fillRect(M-z/2,b-D/2,z,D)}t.restore()}else{t.fillStyle="rgba(10, 0, 15, 1.0)",t.fillRect(0,0,t.canvas.width,t.canvas.height),t.fillStyle="rgba(138, 3, 196, 0.08)";for(let T=0;T<t.canvas.height;T+=6)Math.random()<.6&&t.fillRect(0,T+Math.sin(Date.now()*.01+T)*2,t.canvas.width,2);const _=Math.floor(Math.random()*5)+3,y=["#00ff66","#ff0055","#00ccff","#ffff00","#8a03c4","#ffffff"];for(let T=0;T<_;T++){const S=Math.random()*t.canvas.width,A=Math.random()*t.canvas.height,N=80+Math.random()*250,M=8+Math.random()*30;t.fillStyle=y[Math.floor(Math.random()*y.length)],t.globalAlpha=.12+Math.random()*.18,t.fillRect(S,A,N,M)}if(t.globalAlpha=1,Math.random()<.35){const T=Math.floor(Math.random()*t.canvas.height),S=15+Math.floor(Math.random()*80),A=Math.floor(Math.random()*40)-20;t.drawImage(t.canvas,0,T,t.canvas.width,S,A,T,t.canvas.width,S)}Math.random()<.15&&(t.fillStyle="rgba(255, 255, 255, 0.05)",t.fillRect(0,Math.random()*t.canvas.height,t.canvas.width,5+Math.random()*20))}}}updateStaticMapCache(t){const e=this.mazeGen.size,i=e>11,n=i?this.canvas.width/11:this.canvas.width/e,a=i?e*n:this.canvas.width,o=i?e*n:this.canvas.height;(this.staticMapCacheCanvas.width!==a||this.staticMapCacheCanvas.height!==o)&&(this.staticMapCacheCanvas.width=a,this.staticMapCacheCanvas.height=o);const r=this.staticMapCacheCtx;r.clearRect(0,0,a,o);const c=this.player.x,l=this.player.y,u=Math.floor(this.mazeGen.startPos.x),f=Math.floor(this.mazeGen.startPos.y),p=this.mazeGen.startPos.z,v=Date.now();let m=!1;const g=(h,d,x)=>{const _=`${h},${d},${t}`;if(this.skipCellAnimations||this.fullyRevealedCells.has(_))x(),this.skipCellAnimations&&this.fullyRevealedCells.add(_);else{let y=this.revealedCellsAnimation.get(_);y===void 0&&(this.revealedCellsAnimation.set(_,v),y=v);const T=v-y,A=Math.min(1,T/400);A<1?(r.save(),r.globalAlpha=A,x(),r.restore(),m=!0):(x(),this.revealedCellsAnimation.delete(_),this.fullyRevealedCells.add(_))}};for(let h=0;h<e;h++)for(let d=0;d<e;d++){const x=this.maze.get(h,d,t);if(x===this.mazeGen.TYPES.STATUE){g(h,d,()=>{if(this.floorImage.complete&&this.floorImage.naturalWidth!==0?r.drawImage(this.floorImage,h*n,d*n,n,n):(r.fillStyle=q.COLORS.PATH_VISITED,r.fillRect(h*n,d*n,n,n)),r.fillStyle="rgba(0, 0, 0, 0.4)",r.beginPath(),r.ellipse(h*n+n/2,(d+1)*n-n*.15,n*.35,n*.12,0,0,Math.PI*2),r.fill(),this.statueImage.complete&&this.statueImage.naturalWidth!==0){const D=this.statueImage.width/this.statueImage.height,k=n*.85,R=k/D,I=h*n+n/2,B=(d+1)*n-n*.05;r.drawImage(this.statueImage,I-k/2,B-R,k,R)}else r.fillStyle="#555555",r.fillRect(h*n+n*.3,d*n+n*.1,n*.4,n*.8)});continue}const _=this.allTeleports.some(D=>D.x===h&&D.y===d&&D.z===t),y=_&&this.discoveredTeleports.has(`${h},${d},${t}`),T=x===2||x===3||x===4||x===5||y,S=x===this.mazeGen.TYPES.KEY,A=(x===1||_&&!y)&&this.isNearVisited(h,d,t),N=this.revealedPathSet.has(`${h},${d},${t}`),M=t<e-1&&this.maze.get(h,d,t+1)!==0,b=t>0&&this.maze.get(h,d,t-1)!==0,z=M||b;N?g(h,d,()=>{z?this.drawElevator2D(r,h,d,n,M,b,c,l,!0,t):(r.fillStyle=q.COLORS.REVEALED_PATH,r.fillRect(h*n,d*n,n,n))}):T?g(h,d,()=>{if(y){const D=h===u&&d===f&&t===p,k=`${h},${d},${t}`;if(D){const R=Math.floor(c)===h&&Math.floor(l)===d&&t===this.player.z,I=R?q.COLORS.TELEPORT:q.COLORS.START;this.drawVortex2D(r,h,d,n,I,R,k)}else{const R=this.inactiveTeleportPos&&this.inactiveTeleportPos.x===h&&this.inactiveTeleportPos.y===d&&this.inactiveTeleportPos.z===t,I=R?q.COLORS.TELEPORT_INACTIVE:q.COLORS.TELEPORT,B=Math.floor(c)===h&&Math.floor(l)===d&&t===this.player.z;this.drawVortex2D(r,h,d,n,I,B&&!R,k)}m=!0}else if(z)this.drawElevator2D(r,h,d,n,M,b,c,l,!1,t);else if(x===2&&this.floorImage.complete&&this.floorImage.naturalWidth!==0)r.drawImage(this.floorImage,h*n,d*n,n,n);else if(x===this.mazeGen.TYPES.EXIT){const D=`${h},${d},${t}`;if(this.drawVortex2D(r,h,d,n,q.COLORS.EXIT,!1,D),m=!0,this.keysCollected<this.totalKeys){r.strokeStyle="#ff3300",r.lineWidth=Math.max(2,n*.08);const k=h*n+n/2,R=d*n+n/2,I=n*.2;r.beginPath(),r.arc(k,R-I*.2,I*.6,Math.PI,0),r.stroke(),r.fillStyle="#111",r.fillRect(k-I,R-I*.1,I*2,I*1.5),r.strokeRect(k-I,R-I*.1,I*2,I*1.5),r.fillStyle="#ff3300",r.font=`bold ${Math.max(10,n*.35)}px sans-serif`,r.textAlign="center",r.textBaseline="middle",r.fillText(String(this.totalKeys-this.keysCollected),k,R+I*.6)}}else if(x===2)r.fillStyle=q.COLORS.PATH_VISITED,r.fillRect(h*n,d*n,n,n);else{const D=`${h},${d},${t}`,k=Math.floor(c)===h&&Math.floor(l)===d&&t===this.player.z,R=k?q.COLORS.TELEPORT:q.COLORS.START;this.drawVortex2D(r,h,d,n,R,k,D),m=!0}this.drawCellShadow2D(r,h,d,n,e,x,t)}):S?(g(h,d,()=>{if(this.visitedCells.has(`${h},${d},${t}`))if(y){const R=h===u&&d===f&&t===p,I=`${h},${d},${t}`;if(R){const B=Math.floor(c)===h&&Math.floor(l)===d&&t===this.player.z,j=B?q.COLORS.TELEPORT:q.COLORS.START;this.drawVortex2D(r,h,d,n,j,B,I)}else{const B=this.inactiveTeleportPos&&this.inactiveTeleportPos.x===h&&this.inactiveTeleportPos.y===d&&this.inactiveTeleportPos.z===t,j=B?q.COLORS.TELEPORT_INACTIVE:q.COLORS.TELEPORT,J=Math.floor(c)===h&&Math.floor(l)===d&&t===this.player.z;this.drawVortex2D(r,h,d,n,j,J&&!B,I)}m=!0}else z?this.drawElevator2D(r,h,d,n,M,b,c,l,!1,t):this.floorImage.complete&&this.floorImage.naturalWidth!==0?r.drawImage(this.floorImage,h*n,d*n,n,n):(r.fillStyle=q.COLORS.PATH_VISITED,r.fillRect(h*n,d*n,n,n));const k=n*.05*Math.sin(Date.now()/300);this.keyImage.complete&&this.keyImage.naturalWidth!==0?r.drawImage(this.keyImage,h*n+n*.15,d*n+n*.15+k,n*.7,n*.7):(r.beginPath(),r.arc(h*n+n/2,d*n+n/2+k,n*.25,0,2*Math.PI),r.fillStyle="#ffd700",r.fill()),this.drawCellShadow2D(r,h,d,n,e,x,t)}),m=!0):A?(g(h,d,()=>{if(this.floorImage.complete&&this.floorImage.naturalWidth!==0){r.save(),r.globalAlpha=.35,r.drawImage(this.floorImage,h*n,d*n,n,n),r.restore();const D=.22+.12*Math.sin(Date.now()/250);r.fillStyle=`rgba(136, 204, 255, ${D})`,r.fillRect(h*n,d*n,n,n)}else r.fillStyle=q.COLORS.PATH_KNOWN,r.fillRect(h*n,d*n,n,n)}),m=!0):x===0&&(this.isNearVisited(h,d,t)||this.isAdjacentToStatue(h,d,t))&&g(h,d,()=>{this.wallImage.complete&&this.wallImage.naturalWidth!==0?r.drawImage(this.wallImage,h*n,d*n,n,n):(r.fillStyle=q.COLORS.WALL,r.fillRect(h*n,d*n,n,n))})}m?this.staticMapCacheDirty=!0:this.staticMapCacheDirty=!1}isNearVisited(t,e,i){for(let n=-1;n<=1;n++)for(let a=-1;a<=1;a++){const o=t+n,r=e+a;if(o>=0&&o<this.mazeGen.size&&r>=0&&r<this.mazeGen.size){const c=this.maze.get(o,r,i);if(c===2||c===3||c===this.mazeGen.TYPES.TELEPORT&&this.discoveredTeleports.has(`${o},${r},${i}`))return!0}}return!1}isAdjacentToStatue(t,e,i){const n=this.mazeGen.size,a=[{dx:1,dy:0},{dx:-1,dy:0},{dx:0,dy:1},{dx:0,dy:-1},{dx:1,dy:1},{dx:-1,dy:1},{dx:1,dy:-1},{dx:-1,dy:-1}];for(const o of a){const r=t+o.dx,c=e+o.dy;if(r>=0&&r<n&&c>=0&&c<n&&this.maze.get(r,c,i)===this.mazeGen.TYPES.STATUE)return!0}return!1}populateFullyRevealedCells(t){const e=this.mazeGen.size;for(let i=0;i<e;i++)for(let n=0;n<e;n++){const a=this.maze.get(i,n,t),o=a===this.mazeGen.TYPES.TELEPORT,r=o&&this.discoveredTeleports.has(`${i},${n},${t}`),c=a===2||a===3||a===4||a===5||r,l=(a===1||o&&!r)&&this.isNearVisited(i,n,t),u=this.revealedPathSet.has(`${i},${n},${t}`);(c||l||u||a===0&&this.isNearVisited(i,n,t))&&this.fullyRevealedCells.add(`${i},${n},${t}`)}}updatePulse(){if(!this.isMap3DActive||this.pulsatingMaterials.length===0)return;const t=.2+.5*Math.abs(Math.sin(Date.now()*.003));this.pulsatingMaterials.forEach(e=>{e.emissiveIntensity=t})}loop(){if(this.isDestroyed)return;const t=performance.now(),e=(t-this.lastFrameTime)/1e3;this.lastFrameTime=t;const i=Math.min(e,.1);if(this.isIntroPlaying?this.controls.update():this.update(i),this.updateVortexAngles(i),this.isMap3DActive||this.isIntroPlaying)if(this.isIntroPlaying)this.renderer.render(this.scene,this.camera);else{const n=1-Math.exp(-10*i);this.visualActiveFloor+=(this.activeMapFloor-this.visualActiveFloor)*n,Math.abs(this.activeMapFloor-this.visualActiveFloor)<.001&&(this.visualActiveFloor=this.activeMapFloor),this.drawIsometricMap()}else this.draw2DMap(i);requestAnimationFrame(()=>this.loop())}updateVortexAngles(t){if(!this.vortexAngles)return;const e=Math.floor(this.player.x),i=Math.floor(this.player.y),n=this.player.z,a=Math.floor(this.mazeGen.startPos.x),o=Math.floor(this.mazeGen.startPos.y),r=this.mazeGen.startPos.z,c=`${a},${o},${r}`,u=e===a&&i===o&&n===r?q.VORTEX_SPEED_FAST:q.VORTEX_SPEED_NORMAL;this.vortexAngles.set(c,(this.vortexAngles.get(c)||0)+t*u),this.allTeleports&&this.allTeleports.forEach(p=>{const v=`${p.x},${p.y},${p.z}`,m=e===p.x&&i===p.y&&n===p.z,g=this.inactiveTeleportPos&&this.inactiveTeleportPos.x===p.x&&this.inactiveTeleportPos.y===p.y&&this.inactiveTeleportPos.z===p.z,h=m&&!g?q.VORTEX_SPEED_FAST:q.VORTEX_SPEED_NORMAL;this.vortexAngles.set(v,(this.vortexAngles.get(v)||0)+t*h)});const f=this.getExitPos();if(f){const p=`${f.x},${f.y},${f.z}`,v=q.VORTEX_SPEED_NORMAL;this.vortexAngles.set(p,(this.vortexAngles.get(p)||0)+t*v)}}getHexColorVariation(t,e){let i=t.replace("#","");i.length===3&&(i=i.split("").map(c=>c+c).join(""));let n=parseInt(i,16),a=(n>>16)+e,o=(n>>8&255)+e,r=(n&255)+e;return a=Math.max(0,Math.min(255,a)),o=Math.max(0,Math.min(255,o)),r=Math.max(0,Math.min(255,r)),`#${((1<<24)+(a<<16)+(o<<8)+r).toString(16).slice(1)}`}drawVortex2D(t,e,i,n,a,o,r){const c=e*n+n/2,l=i*n+n/2;t.save(),t.translate(c,l),t.fillStyle=a,t.fillRect(-n/2,-n/2,n,n);const u=this.vortexAngles.get(r)||0;t.rotate(u);const f=this.getHexColorVariation(a,45),p=this.getHexColorVariation(a,-45),v=t.createRadialGradient(0,0,0,0,0,n*.45);v.addColorStop(0,f),v.addColorStop(.4,a),v.addColorStop(1,p);const m=t.createRadialGradient(0,0,0,0,0,n*.45);m.addColorStop(0,"#ffffff"),m.addColorStop(.3,f),m.addColorStop(1,"rgba(255, 255, 255, 0)");const g=3,h=n*.45;for(let d=0;d<g;d++){const x=d*2*Math.PI/g;t.beginPath(),t.strokeStyle=v,t.lineWidth=n*.09,t.lineCap="round";for(let _=0;_<=h;_+=1){const y=5/h,T=x+_*y,S=_*Math.cos(T),A=_*Math.sin(T);_===0?t.moveTo(S,A):t.lineTo(S,A)}t.stroke(),t.beginPath(),t.strokeStyle=m,t.lineWidth=n*.04,t.lineCap="round";for(let _=n*.12;_<=h;_+=1){const y=5/h,T=x+_*y+.15,S=_*Math.cos(T),A=_*Math.sin(T);_===Math.floor(n*.12)?t.moveTo(S,A):t.lineTo(S,A)}t.stroke()}t.restore()}playContinueAnimation(){this.isIntroPlaying=!0;const t=this.mazeGen.size;this.renderer&&this.renderer.domElement&&(this.renderer.domElement.style.display="block");const e=document.getElementById("map3d-instructions");e&&(e.style.display="block"),this.isometricCanvas&&(this.isometricCanvas.style.display="none"),this.ui.setMap3DVisible(!0),this.isMap3DActive=!0,this.updateRendererSize(),this.build3DMap(!1),this.camera.position.set(t*.9,t*this.vScale*.6,t*.9),this.controls.target.set(0,0,0),this.controls.update(),this.hideCanvasInstant(),this.controls.autoRotate=!0,this.controls.autoRotateSpeed=2,this.controls.enableZoom=!1,this.controls.enablePan=!1,this.controls.enableRotate=!1;const i=()=>{this.activeContinueTimer&&(clearTimeout(this.activeContinueTimer),this.activeContinueTimer=null),this.activeSkipHandler&&(window.removeEventListener("keydown",this.activeSkipHandler),window.removeEventListener("touchstart",this.activeSkipHandler),this.activeSkipHandler=null),this.controls.autoRotate=!1,this.animateCameraToPlayer(()=>{this._transitionToGame()})};this.activeSkipHandler=()=>i(),window.addEventListener("keydown",this.activeSkipHandler,{once:!0}),window.addEventListener("touchstart",this.activeSkipHandler,{once:!0}),this.activeContinueTimer=setTimeout(i,2500)}animateCameraToPlayer(t){const e=this.mazeGen.size,i=this.player.x-e/2,n=(this.player.z-e/2)*this.vScale,a=this.player.y-e/2,o=this.controls.target.clone(),r=new W(i,n,a),c=this.camera.position.clone(),l=new W(i+4,n+5,a+4),u=1100,f=performance.now(),p=v=>{if(this.isDestroyed)return;const m=v-f,g=Math.min(m/u,1),h=g<.5?4*g*g*g:1-Math.pow(-2*g+2,3)/2;this.controls.target.lerpVectors(o,r,h),this.camera.position.lerpVectors(c,l,h),this.controls.update(),g<1?requestAnimationFrame(p):t&&t()};requestAnimationFrame(p)}playIntroAnimation(){this.isIntroPlaying=!0;const t=this.mazeGen.size;this.renderer&&this.renderer.domElement&&(this.renderer.domElement.style.display="block");const e=document.getElementById("map3d-instructions");for(e&&(e.style.display="block"),this.isometricCanvas&&(this.isometricCanvas.style.display="none");this.scene.children.length>0;)this.scene.remove(this.scene.children[0]);this.scene.add(new uo(16777215,.7));const i=new ho(16777215,.5);i.position.set(10,20,10),this.scene.add(i),this.ui.setMap3DVisible(!0),this.isMap3DActive=!0,this.updateRendererSize(),this.camera.position.set(t*.9,t*this.vScale*.6,t*.9),this.controls.target.set(0,0,0),this.controls.update(),this.hideCanvasInstant();const n=this.mazeGen.startPos,a=this.getExitPos(),o=new Ce(.92,.92,.92),r=new ne({color:q.COLORS.THREE_START,emissive:q.COLORS.THREE_START,emissiveIntensity:.6,transparent:!0,opacity:.95}),c=new te(o,r);c.position.set(Math.floor(n.x)-t/2,(n.z-t/2)*this.vScale,Math.floor(n.y)-t/2),this.scene.add(c);const l=new ne({color:16724736,emissive:16724736,emissiveIntensity:.6,transparent:!0,opacity:.95}),u=new te(o,l);u.position.set(a.x-t/2,(a.z-t/2)*this.vScale,a.y-t/2);const f=new Ce(.95,.95,.95),p=new fs({color:16711680,wireframe:!0}),v=new te(f,p);u.add(v),this.scene.add(u);const m=[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]],g=`${Math.floor(n.x)},${Math.floor(n.y)},${n.z}`,h=`${a.x},${a.y},${a.z}`,d=new Set([g,h]),x=[{x:Math.floor(n.x),y:Math.floor(n.y),z:n.z}],_=[{x:a.x,y:a.y,z:a.z}];let y=0,T=0;const S=[];for(;y<x.length||T<_.length;){if(y<x.length){const{x:j,y:J,z:K}=x[y++];for(const[Q,nt,rt]of m){const X=j+Q,st=J+nt,C=K+rt,F=`${X},${st},${C}`;X>=0&&X<t&&st>=0&&st<t&&C>=0&&C<t&&!d.has(F)&&this.maze.get(X,st,C)!==this.mazeGen.TYPES.WALL&&(d.add(F),x.push({x:X,y:st,z:C}),S.push({x:X,y:st,z:C}))}}if(T<_.length){const{x:j,y:J,z:K}=_[T++];for(const[Q,nt,rt]of m){const X=j+Q,st=J+nt,C=K+rt,F=`${X},${st},${C}`;X>=0&&X<t&&st>=0&&st<t&&C>=0&&C<t&&!d.has(F)&&this.maze.get(X,st,C)!==this.mazeGen.TYPES.WALL&&(d.add(F),_.push({x:X,y:st,z:C}),S.push({x:X,y:st,z:C}))}}}this.controls.autoRotate=!0,this.controls.autoRotateSpeed=1.8,this.controls.enableZoom=!1,this.controls.enablePan=!1,this.controls.enableRotate=!1;const A=new Ce(.88,.88,.88),N=new ne({color:q.COLORS.THREE_VISITED,transparent:!0,opacity:.72}),M=20,b=200,z=S.length,D=Math.max(1,Math.ceil(z/b));let k=0;this.activeIntroTimer=null;const R=[],I=()=>{this.activeIntroTimer&&(clearTimeout(this.activeIntroTimer),this.activeIntroTimer=null),this.activeSkipHandler&&(window.removeEventListener("keydown",this.activeSkipHandler),window.removeEventListener("touchstart",this.activeSkipHandler),this.activeSkipHandler=null),this._playGlitchAndTransition(R)};this.activeSkipHandler=()=>I(),window.addEventListener("keydown",this.activeSkipHandler,{once:!0}),window.addEventListener("touchstart",this.activeSkipHandler,{once:!0});const B=()=>{if(this.isDestroyed)return;const j=Math.min(k+D,S.length);for(;k<j;k++){const{x:J,y:K,z:Q}=S[k],nt=Q%2===0;let rt;nt?rt=new ps(.35,.35,2*this.vScale,8):rt=A;const X=new te(rt,N);X.position.set(J-t/2,(Q-t/2)*this.vScale,K-t/2),this.scene.add(X),R.push(X)}k<S.length?this.activeIntroTimer=setTimeout(B,M):(this.activeSkipHandler&&(window.removeEventListener("keydown",this.activeSkipHandler),window.removeEventListener("touchstart",this.activeSkipHandler),this.activeSkipHandler=null),this._playGlitchAndTransition(R))};this.activeIntroTimer=setTimeout(B,M)}_playGlitchAndTransition(t){if(this.isDestroyed)return;const e=5,i=90;let n=0;const a=()=>{if(this.isDestroyed)return;const o=n%2===0;t.forEach(r=>{r&&(r.visible=o)}),n++,n<e*2?setTimeout(a,i):(t.forEach(r=>{r&&(r.visible=!1)}),setTimeout(()=>this._transitionToGame(),400))};a()}_transitionToGame(){this.isDestroyed||(this.controls&&(this.controls.autoRotate=!1,this.controls.enableZoom=!0,this.controls.enablePan=!0,this.controls.enableRotate=!0),this.ui.uiMap3dContainer&&this.ui.uiMap3dContainer.classList.add("intro-fade-out"),setTimeout(()=>{if(this.isDestroyed)return;this.ui.setMap3DVisible(!1),this.ui.uiMap3dContainer&&this.ui.uiMap3dContainer.classList.remove("intro-fade-out"),this.isMap3DActive=!1,this.isIntroPlaying=!1,this.ui.uiMobileMap&&(this.ui.uiMobileMap.disabled=!1);const t=document.getElementById("map-area-container"),e=document.getElementById("left-hud-panel"),i=document.getElementById("right-hud-panel"),n=document.getElementById("bottom-hud-container");t&&(t.classList.remove("intro-hidden"),t.classList.add("intro-reveal"),setTimeout(()=>t.classList.remove("intro-reveal"),700)),e&&(e.classList.remove("intro-hidden"),e.classList.add("intro-reveal"),setTimeout(()=>e.classList.remove("intro-reveal"),700)),i&&(i.classList.remove("intro-hidden"),i.classList.add("intro-reveal"),setTimeout(()=>i.classList.remove("intro-reveal"),700)),n&&(n.classList.remove("intro-hidden"),n.classList.add("intro-reveal"),setTimeout(()=>n.classList.remove("intro-reveal"),700)),this.isZoomTransitionActive=!0,this.zoomTransitionTimer=2,this.isResumedFromSave||this.ui.showInfoBanner(Nt("msgWhereAmI"))},600))}startStorytelling(){this.isStoryActive=!0,this.storyMsgIndex=0,this.storyState="OPENING",this.storyWidthProgress=0,this.storyCloseProgress=1,this.storyCharIndex=0,this.storyTypeTimer=0;const t=document.getElementById("story-screen");t&&t.classList.remove("hidden");const e=document.getElementById("story-image-loader"),i=document.getElementById("story-dialogue");this.isPreloadingActive=!1;const n=()=>{this.isPreloadingActive=!1,i&&(i.style.transform="scaleX(0)"),this.updateStoryImage(),this.handleStoryKeyDown=o=>{o.key.toLowerCase()==="escape"?this.skipStory():this.isPreloadingActive||this.triggerAdvanceStory(),o.preventDefault()},window.addEventListener("keydown",this.handleStoryKeyDown),this.handleStoryClick=o=>{const r=o.target;r&&r.closest("#story-skip-btn")||this.isPreloadingActive||this.triggerAdvanceStory()},this.handleStoryTouch=o=>{const r=o.target;r&&r.closest("#story-skip-btn")||(this.isPreloadingActive||this.triggerAdvanceStory(),o.preventDefault())},t&&(t.addEventListener("click",this.handleStoryClick),t.addEventListener("touchstart",this.handleStoryTouch,{passive:!1}))},a=document.getElementById("story-skip-btn");if(a&&(a.onclick=o=>{o.stopPropagation(),this.skipStory()}),e&&i&&(i.style.transform="scaleX(0)",this.storyImagesLoadedCount<this.storyImagesTotalCount)){this.isPreloadingActive=!0,e.classList.remove("hidden"),this.storyImagesPreloadPromise.then(()=>{e.classList.add("hidden"),n()});return}n()}endStorytelling(){this.isStoryActive=!1,this.isPreloadingActive=!1;const t=document.getElementById("story-screen");t&&t.classList.add("hidden"),this.handleStoryKeyDown&&(window.removeEventListener("keydown",this.handleStoryKeyDown),this.handleStoryKeyDown=null),this.handleStoryClick&&t&&(t.removeEventListener("click",this.handleStoryClick),this.handleStoryClick=null),this.handleStoryTouch&&t&&(t.removeEventListener("touchstart",this.handleStoryTouch),this.handleStoryTouch=null),this.ui.uiMobileMap&&(this.ui.uiMobileMap.disabled=!1);const e=document.getElementById("map-area-container"),i=document.getElementById("left-hud-panel"),n=document.getElementById("right-hud-panel"),a=document.getElementById("bottom-hud-container");e&&(e.classList.remove("hidden","intro-hidden"),e.classList.add("intro-reveal"),setTimeout(()=>e.classList.remove("intro-reveal"),700)),i&&(i.classList.remove("hidden","intro-hidden"),i.classList.add("intro-reveal"),setTimeout(()=>i.classList.remove("intro-reveal"),700)),n&&(n.classList.remove("hidden","intro-hidden"),n.classList.add("intro-reveal"),setTimeout(()=>n.classList.remove("intro-reveal"),700)),a&&(a.classList.remove("hidden","intro-hidden"),a.classList.add("intro-reveal"),setTimeout(()=>a.classList.remove("intro-reveal"),700)),this.ui.setMap3DVisible(!1),this.isMap3DActive=!1,this.isIntroPlaying=!1,this.staticMapCacheDirty=!0,this.isZoomTransitionActive=!0,this.zoomTransitionTimer=2,this.isResumedFromSave||this.ui.showInfoBanner(Nt("msgWhereAmI"))}updateStoryImage(){const t=document.getElementById("story-img"),e=document.getElementById("story-image-canvas");if(!(!t||!e))if(e.style.background="#0b0b0b",this.storyMsgIndex===5)t.style.display="none",e.style.background="radial-gradient(circle, #222222 0%, #000000 80%)",e.removeAttribute("data-placeholder");else{const i=this.preloadedStoryImages[this.storyMsgIndex];if(i)t.src=i.src,t.style.display="block",e.removeAttribute("data-placeholder");else{let n="";this.storyMsgIndex===0?n="assets/images/presentation/1-mystical-church-of-chaos.jpg":this.storyMsgIndex===1?n="assets/images/presentation/2-mystical-church-of-chaos.jpg":this.storyMsgIndex===2?n="assets/images/presentation/3-the-jelly-god.jpg":this.storyMsgIndex===3?n="assets/images/presentation/4-player-alone.jpg":this.storyMsgIndex===4&&(n="assets/images/presentation/5-player-thrown.jpg"),t.src=n,t.onerror=()=>{t.style.display="none",e.setAttribute("data-placeholder",`[Image ${this.storyMsgIndex+1}]`)},t.onload=()=>{t.style.display="block",e.removeAttribute("data-placeholder")}}}}updateStory(t){if(!this.isStoryActive||this.isPreloadingActive)return;const e=document.getElementById("story-text"),i=document.getElementById("story-dialogue"),n=document.getElementById("story-arrow");if(!i||!e)return;const a=["storyMsg1","storyMsg2","storyMsg3","storyMsg4","storyMsg5","storyMsg6"];if(this.storyMsgIndex>=a.length){this.endStorytelling();return}const o=Nt(a[this.storyMsgIndex]),r=c=>c<.5?4*c*c*c:1-Math.pow(-2*c+2,3)/2;this.storyState==="OPENING"?(e.textContent="",n&&n.classList.add("hidden"),this.storyWidthProgress+=t/.45,this.storyWidthProgress>=1&&(this.storyWidthProgress=1,this.storyState="TYPING",this.storyCharIndex=0,this.storyTypeTimer=0),i.style.transform=`scaleX(${r(this.storyWidthProgress)})`):this.storyState==="TYPING"?(i.style.transform="scaleX(1)",n&&n.classList.add("hidden"),this.storyTypeTimer+=t,this.storyTypeTimer>=.025&&(this.storyTypeTimer=0,this.storyCharIndex++,e.textContent=o.substring(0,this.storyCharIndex),this.storyCharIndex>=o.length&&(this.storyState="WAITING"))):this.storyState==="WAITING"?(i.style.transform="scaleX(1)",e.textContent=o,n&&n.classList.remove("hidden")):this.storyState==="CLOSING"&&(e.textContent="",n&&n.classList.add("hidden"),this.storyCloseProgress-=t/.45,this.storyCloseProgress<=0&&(this.storyCloseProgress=0,this.endStorytelling()),i.style.transform=`scaleX(${r(this.storyCloseProgress)})`)}triggerAdvanceStory(){const t=["storyMsg1","storyMsg2","storyMsg3","storyMsg4","storyMsg5","storyMsg6"];if(this.storyMsgIndex>=t.length)return;const e=Nt(t[this.storyMsgIndex]);if(this.storyState==="CLOSING"){this.skipStory();return}if(this.storyState==="OPENING")this.storyState="TYPING",this.storyWidthProgress=1,this.storyCharIndex=0,this.storyTypeTimer=0;else if(this.storyState==="TYPING"){this.storyState="WAITING",this.storyCharIndex=e.length;const i=document.getElementById("story-text");i&&(i.textContent=e)}else if(this.storyState==="WAITING")if(this.storyMsgIndex+1<t.length){this.storyMsgIndex++,this.storyState="TYPING",this.storyCharIndex=0,this.storyTypeTimer=0,this.updateStoryImage();const i=document.getElementById("story-text");i&&(i.textContent="")}else this.storyState="CLOSING",this.storyCloseProgress=1}skipStory(){this.endStorytelling()}toggleTeleportMap(t){this.isMap3DActive=t,this.isTeleportMode=t;const e=document.getElementById("mobile-teleport-exit-btn");if(t){this.isMouseOrTouchDetected=!1,e&&e.classList.remove("hidden"),this.ui.uiMobileControls&&this.ui.uiMobileControls.classList.add("hidden"),this.ui.setMap3DVisible(!0),this.activeMapFloor=this.player.z,this.visualActiveFloor=this.player.z,this.mapCursor={x:Math.floor(this.player.x),y:Math.floor(this.player.y),z:this.player.z},this.mapZoom=1,this.mapPanOffsetX=0,this.mapPanOffsetY=0;const i=Math.floor(this.player.x),n=Math.floor(this.player.y),a=this.player.z,o=this.allTeleports.findIndex(c=>c.x===i&&c.y===n&&c.z===a);o!==-1&&(this.selectedTeleportIndex=o),this.renderer&&this.renderer.domElement&&(this.renderer.domElement.style.display="none");const r=document.getElementById("map3d-instructions");r&&(r.style.display="none"),this.isometricCanvas?this.isometricCanvas.style.display="block":this.initIsometricCanvas(),this.teleportConfirmModalActive=!1}else e&&e.classList.add("hidden"),this.ui.uiMobileControls&&this.ui.uiMobileControls.classList.remove("hidden"),this.ui.setMap3DVisible(!1),this.isometricCanvas&&(this.isometricCanvas.style.display="none"),this.teleportConfirmModalActive=!1}onCanvasClick(t){if(!this.isMap3DActive)return;const e=this.renderer.domElement.getBoundingClientRect();if(this.pointer.x=(t.clientX-e.left)/e.width*2-1,this.pointer.y=-((t.clientY-e.top)/e.height)*2+1,this.raycaster.setFromCamera(this.pointer,this.camera),this.isTeleportMode){const i=this.raycaster.intersectObjects(this.teleportMeshes);if(i.length>0){const n=i[0].object,{gridX:a,gridY:o,gridZ:r}=n.userData,c=this.inactiveTeleportPos&&this.inactiveTeleportPos.x===a&&this.inactiveTeleportPos.y===o&&this.inactiveTeleportPos.z===r,l=Math.floor(this.player.x),u=Math.floor(this.player.y),f=this.player.z;a===l&&o===u&&r===f?this.toggleTeleportMap(!1):c||this.teleportTo(a,o,r)}}else{const i=this.raycaster.intersectObjects(this.knownMeshes);if(i.length>0){const n=i[0].object,{gridX:a,gridY:o,gridZ:r}=n.userData;this.triggerPathReveal(a,o,r)}}}toggleZoom(){if(this.mazeGen.size<=11)return;this.isZoomActive=!this.isZoomActive,this.staticMapCacheDirty=!0;const t=document.getElementById("zoom-out-icon"),e=document.getElementById("zoom-in-icon");t&&e&&(this.isZoomActive?(t.classList.remove("hidden"),e.classList.add("hidden")):(t.classList.add("hidden"),e.classList.remove("hidden")))}togglePause(){this.isGameOver||this.isDestroyed||this.isIntroPlaying||(this.isPaused=!this.isPaused,this.isPaused?(this.ui.showPause(),this.ui.uiMobilePauseBtn&&this.ui.uiMobilePauseBtn.classList.add("hidden")):(this.ui.hidePause(),this.ui.uiMobilePauseBtn&&!this.ui.uiMobileControls.classList.contains("hidden")&&this.ui.uiMobilePauseBtn.classList.remove("hidden")))}checkExitNeighborVisited(){const t=this.getExitPos(),e=[{dx:1,dy:0,dz:0},{dx:-1,dy:0,dz:0},{dx:0,dy:1,dz:0},{dx:0,dy:-1,dz:0},{dx:0,dy:0,dz:2},{dx:0,dy:0,dz:-2}];for(const i of e){const n=t.x+i.dx,a=t.y+i.dy,o=t.z+i.dz;if(n>=0&&n<this.mazeGen.size&&a>=0&&a<this.mazeGen.size&&o>=0&&o<this.mazeGen.size){const r=this.maze.get(n,a,o);if(r!==this.mazeGen.TYPES.WALL&&(r===this.mazeGen.TYPES.VISITED||r===this.mazeGen.TYPES.START||r===this.mazeGen.TYPES.ELEVATOR_VISITED))return!0}}return!1}findShortestPath(t,e,i=!1){const n=this.mazeGen.size,a=new Int8Array(n*n*n);for(let o=0;o<n;o++)for(let r=0;r<n;r++)for(let c=0;c<n;c++){const l=o*n*n+r*n+c,u=this.maze.get(o,r,c),f=o===t.x&&r===t.y&&c===t.z,p=o===e.x&&r===e.y&&c===e.z,v=o===e.x&&r===e.y&&(c===e.z-1||c===e.z+1)&&c%2===0;if(u===this.mazeGen.TYPES.WALL){a[l]=0;continue}const g=u===this.mazeGen.TYPES.TELEPORT,h=g&&this.discoveredTeleports.has(`${o},${r},${c}`),d=u===this.mazeGen.TYPES.VISITED||u===this.mazeGen.TYPES.START||u===this.mazeGen.TYPES.ELEVATOR_VISITED||h,x=(u===this.mazeGen.TYPES.PATH||g&&!h)&&this.isNearVisited(o,r,c);let _=!1;i?_=d||f||p||v:_=d||x||f||p||v,a[l]=_?1:0}return il(t,e,a,n,0)??[]}triggerPathReveal(t,e,i){if(this.pathRevealInterval||this.pathfinderBlockedUntil&&Date.now()<this.pathfinderBlockedUntil)return;if(this.pathfindersRemaining<=0){this.ui.showInfoBanner(Nt("msgNoPathfindersRemaining"));return}this.pathRevealInterval&&(clearInterval(this.pathRevealInterval),this.pathRevealInterval=null),this.revealedPathSet.clear();const n=this.maze.get(t,e,i)===this.mazeGen.TYPES.EXIT;if(n&&!this.exitPathfinderUnlocked){this.ui.showInfoBanner(Nt("msgExitNotFoundYet"));return}let a=i;i%2===0&&(a=this.player.z<i?i+1:i-1,a<1&&(a=1),a>=this.mazeGen.size&&(a=this.mazeGen.size-2));const o={x:Math.floor(this.player.x),y:Math.floor(this.player.y),z:this.player.z},r={x:t,y:e,z:a},c=this.findShortestPath(o,r,n);!c||c.length===0||(this.pathfindersRemaining--,this.ui.updatePathfindersHUD(this.pathfindersRemaining,this.totalPathfinders),ns(this),this.activePathReveal=c,this.revealedPathProgress=0,this.revealedPathSet.add(`${t},${e},${i}`),this.pathRevealInterval=setInterval(()=>{if(this.revealedPathProgress<this.activePathReveal.length){const l=this.activePathReveal[this.revealedPathProgress],u=`${l.x},${l.y},${l.z}`;if(this.revealedPathSet.add(u),this.revealedPathProgress>0){const f=this.activePathReveal[this.revealedPathProgress-1];if(Math.abs(l.z-f.z)===2){const p=(l.z+f.z)/2,v=`${l.x},${l.y},${p}`;if(this.revealedPathSet.add(v),this.isMap3DActive&&this.gridMeshes){const m=this.mazeGen.size,g=this.gridMeshes[l.x*m*m+l.y*m+p];g&&(g.material=new ne({color:16777215,emissive:16777215,emissiveIntensity:2,transparent:!0,opacity:.95*(this.isTeleportMode?.2:1)}))}}}if(this.staticMapCacheDirty=!0,this.isMap3DActive&&this.gridMeshes){const f=this.mazeGen.size,p=this.gridMeshes[l.x*f*f+l.y*f+l.z];p&&(p.material=new ne({color:16777215,emissive:16777215,emissiveIntensity:2,transparent:!0,opacity:.95*(this.isTeleportMode?.2:1)}))}this.revealedPathProgress++}else clearInterval(this.pathRevealInterval),this.pathRevealInterval=null,this.pathfinderBlockedUntil=Date.now()+600},120))}teleportTo(t,e,i){if(this.skipCellAnimations=!0,this.player.x=t+q.PLAYER_START_X,this.player.y=e+q.PLAYER_START_Y%1,this.player.z=i,this.staticMapCacheDirty=!0,this.toggleTeleportMap(!1),this.maze.get(t,e,i)===this.mazeGen.TYPES.PATH&&(this.maze.set(t,e,i,this.mazeGen.TYPES.VISITED),this.visitedCells.add(`${t},${e},${i}`)),!this.isSafeMode){const n=Math.floor(this.degree*1.5)+3;this.teleportCooldownTicks=n,this.inactiveTeleportPos={x:t,y:e,z:i},this.ui.showInfoBanner(Nt("msgOopsNoisyShit"));for(const a of this.hunters){a.state="TELEPORT_TRACKING";const o=a.findPathToTarget({x:t,y:e,z:i},this.maze,this.mazeGen.TYPES);o?a.pathToTarget=o:a.pathToTarget=[]}}this.updateFloorUI(),this.draw2DMap(),this.input.keys={}}initIsometricCanvas(){const t=document.createElement("canvas");this.isometricCanvas=t,t.id="isometric-map-canvas",t.style.position="absolute",t.style.top="0",t.style.left="0",t.style.width="100%",t.style.height="100%",t.style.zIndex="101",this.isometricCtx=t.getContext("2d"),this.ui.uiMap3dContainer.appendChild(t),t.addEventListener("click",h=>this.handleIsometricClick(h));const e=()=>{this.isMouseOrTouchDetected||(this.isMouseOrTouchDetected=!0)};t.addEventListener("mousemove",e),t.addEventListener("pointerdown",e);let i=null,n=null,a=0,o=0,r=0,c=0,l=!1,u=!1,f=!1,p=0;t.addEventListener("touchstart",h=>{if(!(!this.isMap3DActive||this.isIntroPlaying)){if(p=0,f=!1,h.touches.length===1){const d=h.touches[0];a=d.clientX,o=d.clientY,r=this.mapPanOffsetX,c=this.mapPanOffsetY,u=!0,l=!1}else if(h.touches.length===2){l=!0,u=!1;const d=h.touches[0],x=h.touches[1];i=Math.hypot(d.clientX-x.clientX,d.clientY-x.clientY),n=this.mapZoom}}},{passive:!1}),t.addEventListener("touchmove",h=>{if(!(!this.isMap3DActive||this.isIntroPlaying)){if(l&&h.touches.length===2){h.preventDefault();const d=h.touches[0],x=h.touches[1],_=Math.hypot(d.clientX-x.clientX,d.clientY-x.clientY);if(i&&i>0&&n){const y=t.getBoundingClientRect(),T=(d.clientX+x.clientX)/2-y.left,S=(d.clientY+x.clientY)/2-y.top,A=this.mapZoom;let N=n*(_/i);N=Math.max(.5,Math.min(4,N));const M=N/A;this.mapPanOffsetX=T-(T-(y.width/2+this.mapPanOffsetX))*M-y.width/2,this.mapPanOffsetY=S-(S-(y.height/2+this.mapPanOffsetY))*M-y.height/2,this.mapZoom=N,p=100}}else if(u&&h.touches.length===1){const d=h.touches[0],x=d.clientX-a,_=d.clientY-o,y=Math.hypot(x,_);if(p=Math.max(p,y),!f&&Math.abs(_)>40&&Math.abs(_)>Math.abs(x)*1.5){const T=this.mazeGen.size;_<-40?this.activeMapFloor-2>=1&&(this.activeMapFloor-=2,f=!0):_>40&&this.activeMapFloor+2<=T-2&&(this.activeMapFloor+=2,f=!0)}f||(this.mapPanOffsetX=r+x,this.mapPanOffsetY=c+_),h.preventDefault()}}},{passive:!1}),t.addEventListener("touchend",h=>{if(l=!1,u=!1,p<8&&!f){const d=h.changedTouches[0];if(d){const x={clientX:d.clientX,clientY:d.clientY};this.handleIsometricClick(x)}}}),t.addEventListener("wheel",h=>{if(!this.isMap3DActive||this.isIntroPlaying)return;h.preventDefault();const d=t.getBoundingClientRect(),x=h.clientX-d.left,_=h.clientY-d.top,y=this.mapZoom,T=1.15;let S=h.deltaY<0?y*T:y/T;S=Math.max(.5,Math.min(4,S));const A=d.width,N=d.height,M=S/y;this.mapPanOffsetX=x-(x-(A/2+this.mapPanOffsetX))*M-A/2,this.mapPanOffsetY=_-(_-(N/2+this.mapPanOffsetY))*M-N/2,this.mapZoom=S},{passive:!1});let v=!1,m=0,g=0;t.addEventListener("mousedown",h=>{if(!this.isMap3DActive||this.isIntroPlaying)return;const d=t.getBoundingClientRect(),x=h.clientX-d.left,_=h.clientY-d.top;if(!(this.floorClickRects&&this.floorClickRects.some(y=>x>=y.x&&x<=y.x+y.w&&_>=y.y&&_<=y.y+y.h))){if(this.isTeleportMode){if(this.teleportConfirmModalActive&&this.teleportModalClickRects&&this.teleportModalClickRects.some(y=>x>=y.x&&x<=y.x+y.w&&_>=y.y&&_<=y.y+y.h)||!this.teleportConfirmModalActive&&this.teleportDotsClickRects&&this.teleportDotsClickRects.some(y=>x>=y.x&&x<=y.x+y.w&&_>=y.y&&_<=y.y+y.h))return;if(this.isMouseOrTouchDetected&&!this.teleportConfirmModalActive&&this.teleportGoBtnClickRect){const y=this.teleportGoBtnClickRect;if(x>=y.x&&x<=y.x+y.w&&_>=y.y&&_<=y.y+y.h)return}}v=!0,m=h.clientX,g=h.clientY}}),window.addEventListener("mousemove",h=>{if(v){const d=h.clientX-m,x=h.clientY-g;this.mapPanOffsetX+=d,this.mapPanOffsetY+=x,m=h.clientX,g=h.clientY}}),window.addEventListener("mouseup",()=>{v=!1}),t.addEventListener("mousemove",h=>{if(!this.isMap3DActive||this.isIntroPlaying)return;const d=t.getBoundingClientRect(),x=h.clientX-d.left,_=h.clientY-d.top;if(t.style.cursor="default",this.isTeleportMode){if(this.isMouseOrTouchDetected&&!this.teleportConfirmModalActive&&this.teleportGoBtnClickRect){const y=this.teleportGoBtnClickRect;if(x>=y.x&&x<=y.x+y.w&&_>=y.y&&_<=y.y+y.h){t.style.cursor="pointer";return}}if(this.teleportConfirmModalActive&&this.teleportModalClickRects){for(const y of this.teleportModalClickRects)if(x>=y.x&&x<=y.x+y.w&&_>=y.y&&_<=y.y+y.h){this.teleportModalSelection=y.selection,t.style.cursor="pointer";return}}else if(this.teleportDotsClickRects){const y=this.getSelectableTeleportIndices();for(const T of this.teleportDotsClickRects)if(x>=T.x&&x<=T.x+T.w&&_>=T.y&&_<=T.y+T.h&&y.includes(T.index)){this.selectedTeleportIndex=T.index;const S=this.allTeleports[T.index];this.activeMapFloor=S.z,this.mapCursor={x:S.x,y:S.y,z:S.z},t.style.cursor="pointer";return}}}if(!this.isTeleportMode){const y=this.mazeGen.size,T=this.activeMapFloor;let S=d.width*.7/y;S=Math.max(20,Math.min(48,S));const A=S*this.mapZoom,N=A/2,M=A/4,b=N*5,z=d.width/2+this.mapPanOffsetX,D=d.height/2+this.mapPanOffsetY,k=[];T+2<=y-2&&k.push(T+2),T+1<y&&k.push(T+1),k.push(T),T-1>=0&&k.push(T-1),T-2>=1&&k.push(T-2);for(const R of k){const I=D-(R-T)*b,B=(x-z)/N,j=(_-I)/M,J=Math.round((B+j)/2),K=Math.round((j-B)/2);if(J>=0&&J<y&&K>=0&&K<y&&this.getInteractiveElements(T).some(rt=>rt.x===J&&rt.y===K&&rt.z===R)){this.mapCursor={x:J,y:K,z:R},t.style.cursor="pointer";return}}}})}handleIsometricClick(t){if(!this.isMap3DActive||this.isIntroPlaying)return;const e=this.isometricCanvas.getBoundingClientRect(),i=t.clientX-e.left,n=t.clientY-e.top;if(this.isTeleportMode){if(this.teleportConfirmModalActive){if(this.teleportModalClickRects){for(const _ of this.teleportModalClickRects)if(i>=_.x&&i<=_.x+_.w&&n>=_.y&&n<=_.y+_.h){if(_.selection==="go"){const y=this.allTeleports[this.selectedTeleportIndex];this.teleportTo(y.x,y.y,y.z),this.toggleTeleportMap(!1)}else this.teleportConfirmModalActive=!1;return}}this.teleportConfirmModalActive=!1;return}if(this.isMouseOrTouchDetected&&!this.teleportConfirmModalActive&&this.teleportGoBtnClickRect){const _=this.teleportGoBtnClickRect;if(i>=_.x&&i<=_.x+_.w&&n>=_.y&&n<=_.y+_.h){const y=this.allTeleports[this.selectedTeleportIndex],T=Math.floor(this.player.x),S=Math.floor(this.player.y),A=this.player.z,N=y&&y.x===T&&y.y===S&&y.z===A;y&&!N&&(this.teleportTo(y.x,y.y,y.z),this.toggleTeleportMap(!1));return}}if(this.teleportDotsClickRects){const _=this.teleportDotsClickRects.find(y=>i>=y.x&&i<=y.x+y.w&&n>=y.y&&n<=y.y+y.h);if(_){if(this.getSelectableTeleportIndices().includes(_.index)){this.selectedTeleportIndex=_.index;const T=this.allTeleports[_.index];this.activeMapFloor=T.z,this.mapCursor={x:T.x,y:T.y,z:T.z}}return}}}if(this.floorClickRects){for(const _ of this.floorClickRects)if(i>=_.x&&i<=_.x+_.w&&n>=_.y&&n<=_.y+_.h){this.activeMapFloor=_.floor;return}}const a=this.mazeGen.size,o=this.activeMapFloor;let r=e.width*.7/a;r=Math.max(20,Math.min(48,r));const c=r*this.mapZoom,l=c/2,u=c/4,f=l*5,p=e.width/2+this.mapPanOffsetX,v=e.height/2+this.mapPanOffsetY,m=(_,y,T)=>{const S=(_-y)*l+p,A=(_+y)*u-(T-o)*f+v;return{x:S,y:A}};if(this.isTeleportMode){const _=this.getInteractiveElements(o);let y=null,T=1/0;const S=this.isTouchDevice?52:35;for(const A of _){if(A.type!=="teleport")continue;const N=m(A.x,A.y,A.z),M=i-N.x,b=n-N.y,z=Math.sqrt(M*M+b*b);z<T&&(T=z,y=A)}if(y&&T<=S){const{x:A,y:N,z:M}=y,b=this.allTeleports.findIndex(D=>D.x===A&&D.y===N&&D.z===M),z=this.getSelectableTeleportIndices();b!==-1&&z.includes(b)&&(this.selectedTeleportIndex=b,this.mapCursor={x:A,y:N,z:M})}return}const g=this.getInteractiveElements(o);let h=null,d=1/0;const x=this.isTouchDevice?52:35;for(const _ of g){const y=m(_.x,_.y,_.z),T=i-y.x,S=n-y.y,A=Math.sqrt(T*T+S*S);A<d&&(d=A,h=_)}if(h&&d<=x){this.mapCursor={x:h.x,y:h.y,z:h.z},this.triggerPathReveal(h.x,h.y,h.z);return}}navigateCursor(t){const e=this.activeMapFloor,i=this.getInteractiveElements(e);if(i.length===0)return;const n=this.mapCursor.x,a=this.mapCursor.y,o=this.mapCursor.z,r=this.mazeGen.size;if(t==="left"){if(i.find(l=>l.x===n&&l.y===a&&l.z===e+1&&o===e-1)){this.mapCursor={x:n,y:a,z:e+1};return}for(let l=n-1;l>=0;l--){const u=i.filter(f=>f.x===l&&f.y===a);if(u.length>0){const f=u.find(v=>v.z===e-1),p=u.find(v=>v.z===e+1);f&&p?this.mapCursor={x:l,y:a,z:e-1}:this.mapCursor={x:l,y:a,z:u[0].z};return}}}else if(t==="right"){if(i.find(l=>l.x===n&&l.y===a&&l.z===e-1&&o===e+1)){this.mapCursor={x:n,y:a,z:e-1};return}for(let l=n+1;l<r;l++){const u=i.filter(f=>f.x===l&&f.y===a);if(u.length>0){const f=u.find(v=>v.z===e-1),p=u.find(v=>v.z===e+1);f&&p?this.mapCursor={x:l,y:a,z:e+1}:this.mapCursor={x:l,y:a,z:u[0].z};return}}}else if(t==="up"){if(i.find(l=>l.x===n&&l.y===a&&l.z===e-1&&o===e+1)){this.mapCursor={x:n,y:a,z:e-1};return}for(let l=a-1;l>=0;l--){const u=i.filter(f=>f.y===l);if(u.length>0){let f=-1,p=1/0;for(const h of u){const d=Math.abs(h.x-n);d<p?(p=d,f=h.x):d===p&&h.x<f&&(f=h.x)}const v=u.filter(h=>h.x===f),m=v.find(h=>h.z===e-1),g=v.find(h=>h.z===e+1);m&&g?this.mapCursor={x:f,y:l,z:e+1}:this.mapCursor={x:f,y:l,z:v[0].z};return}}}else if(t==="down"){if(i.find(l=>l.x===n&&l.y===a&&l.z===e+1&&o===e-1)){this.mapCursor={x:n,y:a,z:e+1};return}for(let l=a+1;l<r;l++){const u=i.filter(f=>f.y===l);if(u.length>0){let f=-1,p=1/0;for(const h of u){const d=Math.abs(h.x-n);d<p?(p=d,f=h.x):d===p&&h.x<f&&(f=h.x)}const v=u.filter(h=>h.x===f),m=v.find(h=>h.z===e-1),g=v.find(h=>h.z===e+1);m&&g?this.mapCursor={x:f,y:l,z:e-1}:this.mapCursor={x:f,y:l,z:v[0].z};return}}}}getInteractiveElements(t){const e=[],i=this.mazeGen.size,n=this.mazeGen.TYPES,a=(o,r,c)=>{if(c<0||c>=i)return!1;const l=this.maze.get(o,r,c);return l===n.VISITED||l===n.START||l===n.ELEVATOR_VISITED||l===n.TELEPORT&&this.discoveredTeleports.has(`${o},${r},${c}`)};for(let o=0;o<i;o++)for(let r=0;r<i;r++){const c=this.maze.get(o,r,t);if(c===n.WALL)continue;const l=c===n.TELEPORT,u=l&&this.discoveredTeleports.has(`${o},${r},${t}`);if(u){e.push({x:o,y:r,z:t,type:"teleport"});continue}if(c===n.START){e.push({x:o,y:r,z:t,type:"start"});continue}if(c===n.EXIT){this.keysCollected===this.totalKeys&&this.exitPathfinderUnlocked&&e.push({x:o,y:r,z:t,type:"exit"});continue}(c===n.PATH||l&&!u)&&this.isNearVisited(o,r,t)&&e.push({x:o,y:r,z:t,type:"known"})}for(const o of[t-1,t+1])if(!(o<0||o>=i||o-1<1||o+1>=i))for(let r=0;r<i;r++)for(let c=0;c<i;c++){const l=this.maze.get(r,c,o);if(l===n.WALL)continue;const u=l===n.ELEVATOR_VISITED;l===1&&(a(r,c,o-1)||a(r,c,o+1))&&!u&&a(r,c,t)&&e.push({x:r,y:c,z:o,type:"shaft"})}return e}drawIsometricMap(){if(!this.isMap3DActive||this.isIntroPlaying)return;const t=this.isometricCanvas,e=this.isometricCtx;if(!t||!e)return;const i=t.width=window.innerWidth,n=t.height=window.innerHeight;e.clearRect(0,0,i,n),e.fillStyle="#000000",e.fillRect(0,0,i,n);const a=this.mazeGen.size,o=this.activeMapFloor,r=this.visualActiveFloor;let c=i*.7/a;c=Math.max(20,Math.min(48,c));const l=c*this.mapZoom,u=l/2,f=l/2,p=l/4,v=f*5,m=i/2+this.mapPanOffsetX,g=n/2+this.mapPanOffsetY,h=(C,F,$)=>{const V=C,H=F,ct=(V-H)*f+m,Mt=(V+H)*p-($-r)*v+g;return{x:ct,y:Mt}},d=C=>{e.strokeStyle=`rgba(0, 255, 0, ${.15*C})`,e.lineWidth=1;for(let F=0;F<a;F++)for(let $=0;$<a;$++){const V=h($,F,o);e.beginPath(),e.moveTo(V.x,V.y-p),e.lineTo(V.x+f,V.y),e.lineTo(V.x,V.y+p),e.lineTo(V.x-f,V.y),e.closePath(),e.stroke()}},x=(C,F,$,V,H,ct,Mt=1)=>{e.save(),e.globalAlpha=Mt,e.beginPath(),e.moveTo(C-$,F),e.lineTo(C,F+V),e.lineTo(C,F+V-H),e.lineTo(C-$,F-H),e.closePath(),e.fillStyle=ct,e.fill(),e.fillStyle="rgba(0, 0, 0, 0.15)",e.fill(),e.beginPath(),e.moveTo(C,F+V),e.lineTo(C+$,F),e.lineTo(C+$,F-H),e.lineTo(C,F+V-H),e.closePath(),e.fillStyle=ct,e.fill(),e.fillStyle="rgba(0, 0, 0, 0.3)",e.fill(),e.beginPath(),e.moveTo(C-$,F-H),e.lineTo(C,F+V-H),e.lineTo(C+$,F-H),e.lineTo(C,F-V-H),e.closePath(),e.fillStyle=ct,e.fill(),e.restore()},_=(C,F,$,V,H,ct,Mt,Y,kt=1)=>{e.save(),e.globalAlpha=kt,e.beginPath(),e.moveTo(C-$,F),e.lineTo(C,F+V),e.lineTo(C,F+V-H),e.lineTo(C-$,F-H),e.closePath(),e.fillStyle=ct,e.fill(),e.fillStyle="rgba(0, 0, 0, 0.15)",e.fill(),e.beginPath(),e.moveTo(C,F+V),e.lineTo(C+$,F),e.lineTo(C+$,F-H),e.lineTo(C,F+V-H),e.closePath(),e.fillStyle=ct,e.fill(),e.fillStyle="rgba(0, 0, 0, 0.3)",e.fill(),e.restore(),e.save(),e.globalAlpha=kt,e.beginPath(),e.moveTo(C-$,F-H),e.lineTo(C,F+V-H),e.lineTo(C+$,F-H),e.lineTo(C,F-V-H),e.closePath(),e.fillStyle=ct,e.fill(),e.clip(),e.translate(C,F-H),e.scale(1,.5);const _t=this.vortexAngles.get(Y)||0;e.rotate(_t);const yt=this.getHexColorVariation(ct,45),ft=this.getHexColorVariation(ct,-45),wt=$,bt=e.createRadialGradient(0,0,0,0,0,wt);bt.addColorStop(0,yt),bt.addColorStop(.4,ct),bt.addColorStop(1,ft);const P=e.createRadialGradient(0,0,0,0,0,wt);P.addColorStop(0,"#ffffff"),P.addColorStop(.3,yt),P.addColorStop(1,"rgba(255, 255, 255, 0)");const E=3;for(let G=0;G<E;G++){const at=G*2*Math.PI/E;e.beginPath(),e.strokeStyle=bt,e.lineWidth=$*.18,e.lineCap="round";for(let ot=0;ot<=wt;ot+=1){const lt=5/wt,vt=at+ot*lt,dt=ot*Math.cos(vt),pt=ot*Math.sin(vt);ot===0?e.moveTo(dt,pt):e.lineTo(dt,pt)}e.stroke(),e.beginPath(),e.strokeStyle=P,e.lineWidth=$*.08,e.lineCap="round";for(let ot=wt*.12;ot<=wt;ot+=1){const lt=5/wt,vt=at+ot*lt+.15,dt=ot*Math.cos(vt),pt=ot*Math.sin(vt);ot===Math.floor(wt*.12)?e.moveTo(dt,pt):e.lineTo(dt,pt)}e.stroke()}e.restore()},y=(C,F,$)=>{if($<0||$>=a)return!1;const V=this.maze.get(C,F,$);return V===this.mazeGen.TYPES.VISITED||V===this.mazeGen.TYPES.START||V===this.mazeGen.TYPES.ELEVATOR_VISITED||V===this.mazeGen.TYPES.TELEPORT&&this.discoveredTeleports.has(`${C},${F},${$}`)},T=(C,F,$,V,H,ct,Mt,Y,kt,_t)=>{e.save(),e.globalAlpha=_t;const yt=kt?"#ffffff":Y?q.COLORS.NEON_UP:q.COLORS.NEON_UP_UNUSED,ft=kt?"#ffffff":Y?q.COLORS.NEON_DOWN:q.COLORS.NEON_DOWN_UNUSED;if(ct&&Mt)e.beginPath(),e.moveTo(C,F-H-V),e.lineTo(C-$,F-H),e.lineTo(C,F-H+V),e.lineTo(C,F-H),e.closePath(),e.fillStyle=ft,e.fill(),e.beginPath(),e.moveTo(C,F-H-V),e.lineTo(C,F-H),e.lineTo(C,F-H+V),e.lineTo(C+$,F-H),e.closePath(),e.fillStyle=yt,e.fill(),e.beginPath(),e.moveTo(C-$,F),e.lineTo(C,F+V),e.lineTo(C,F+V-H),e.lineTo(C-$,F-H),e.closePath(),e.fillStyle=ft,e.fill(),e.fillStyle="rgba(0, 0, 0, 0.15)",e.fill(),e.beginPath(),e.moveTo(C,F+V),e.lineTo(C+$,F),e.lineTo(C+$,F-H),e.lineTo(C,F+V-H),e.closePath(),e.fillStyle=yt,e.fill(),e.fillStyle="rgba(0, 0, 0, 0.3)",e.fill();else{const wt=ct?yt:ft;e.beginPath(),e.moveTo(C-$,F-H),e.lineTo(C,F+V-H),e.lineTo(C+$,F-H),e.lineTo(C,F-V-H),e.closePath(),e.fillStyle=wt,e.fill(),e.beginPath(),e.moveTo(C-$,F),e.lineTo(C,F+V),e.lineTo(C,F+V-H),e.lineTo(C-$,F-H),e.closePath(),e.fillStyle=wt,e.fill(),e.fillStyle="rgba(0, 0, 0, 0.15)",e.fill(),e.beginPath(),e.moveTo(C,F+V),e.lineTo(C+$,F),e.lineTo(C+$,F-H),e.lineTo(C,F+V-H),e.closePath(),e.fillStyle=wt,e.fill(),e.fillStyle="rgba(0, 0, 0, 0.3)",e.fill()}e.restore()},S=(C,F)=>{const $=this.mazeGen.TYPES;for(let V=0;V<a;V++)for(let H=0;H<a;H++){const ct=this.maze.get(H,V,C),Mt=h(H,V,C),Y=ct===$.TELEPORT,kt=Y&&this.discoveredTeleports.has(`${H},${V},${C}`),_t=ct===$.VISITED||ct===$.START||ct===$.ELEVATOR_VISITED||kt,yt=(ct===$.PATH||Y&&!kt)&&this.isNearVisited(H,V,C),ft=this.revealedPathSet.has(`${H},${V},${C}`),wt=ct===$.KEY,bt=ct===$.EXIT;if(ct===$.WALL||ct===$.STATUE){if(this.isNearVisited(H,V,C)){const E=f*.45,G=p*.45,at=u*.25,ot="rgba(90, 20, 160, 0.8)",lt=[{dx:-.23,dy:-.23},{dx:.23,dy:-.23},{dx:-.23,dy:.23},{dx:.23,dy:.23}];for(const vt of lt){const dt=h(H+vt.dx,V+vt.dy,C);x(dt.x,dt.y,E,G,at,ot,F)}}continue}for(const E of this.hunters){if(E.state==="SLEEP")continue;const G=E.visualZ!==null?E.visualZ:E.z,at=E.visualX!==null?E.visualX:E.x,ot=E.visualY!==null?E.visualY:E.y;if(G===null||at===null||ot===null)continue;const lt=Math.round((G-1)/2)*2+1,vt=Math.max(0,Math.min(a-1,Math.floor(at))),dt=Math.max(0,Math.min(a-1,Math.floor(ot)));if(H===vt&&V===dt&&C===lt){const pt=h(at,ot,G);z(E,pt.x,pt.y-1.5,F)}}if(_t||yt||ft||wt||bt){const G=C<a-1&&this.maze.get(H,V,C+1)!==$.WALL&&this.maze.get(H,V,C+1)!==$.STATUE,at=C>0&&this.maze.get(H,V,C-1)!==$.WALL&&this.maze.get(H,V,C-1)!==$.STATUE,ot=this.mapCursor.x===H&&this.mapCursor.y===V&&this.mapCursor.z===C;if((_t||ft)&&(G||at))T(Mt.x,Mt.y,f,p,1.5,G,at,_t,ft,F);else{let dt="#222222",pt=!1,Pt="";const It=Math.floor(this.player.x)===H&&Math.floor(this.player.y)===V&&C===this.player.z,ht=`${H},${V},${C}`;if(ft)dt="#ffffff";else if(bt)Pt=this.keysCollected===this.totalKeys?q.COLORS.EXIT:"#ff3300",pt=!0;else if(kt)H===Math.floor(this.mazeGen.startPos.x)&&V===Math.floor(this.mazeGen.startPos.y)&&C===this.mazeGen.startPos.z?Pt=It?q.COLORS.TELEPORT:q.COLORS.START:Pt=this.inactiveTeleportPos&&this.inactiveTeleportPos.x===H&&this.inactiveTeleportPos.y===V&&this.inactiveTeleportPos.z===C?q.COLORS.TELEPORT_INACTIVE:q.COLORS.TELEPORT,pt=!0;else if(_t)ct===$.START?(Pt=It?q.COLORS.TELEPORT:q.COLORS.START,pt=!0):dt="#444444";else if(yt)if(ot){const Ut=.5+.5*Math.sin(performance.now()/120);dt=`rgb(${Math.floor(31+224*Ut)}, ${Math.floor(58+197*Ut)}, ${Math.floor(82+173*Ut)})`}else dt="#1f3a52";else wt&&(dt="#111111");pt?_(Mt.x,Mt.y,f,p,1.5,Pt,It,ht,F):x(Mt.x,Mt.y,f,p,1.5,dt,F)}if(wt&&N(Mt.x,Mt.y-1.5,F),kt){const dt=this.inactiveTeleportPos&&this.inactiveTeleportPos.x===H&&this.inactiveTeleportPos.y===V&&this.inactiveTeleportPos.z===C;let pt=q.COLORS.TELEPORT;dt&&(pt=q.COLORS.TELEPORT_INACTIVE),M(Mt.x,Mt.y-1.5,pt,F,ot)}H===Math.floor(this.player.x)&&V===Math.floor(this.player.y)&&C===this.player.z&&b(Mt.x,Mt.y-1.5,F)}}},A=(C,F)=>{const $=this.mazeGen.TYPES;for(let V=0;V<a;V++)for(let H=0;H<a;H++){const ct=this.maze.get(H,V,C);if(ct===$.WALL)continue;const Mt=this.revealedPathSet.has(`${H},${V},${C}`),Y=ct===$.ELEVATOR_VISITED;if(ct===1&&(y(H,V,C-1)||y(H,V,C+1)),Mt||y(H,V,o)){const kt=h(H,V,C-1);kt.y-=1.5;const _t=h(H,V,C+1);let yt=q.COLORS.PATH_KNOWN;Mt?yt="#ffffff":Y&&(yt=q.COLORS.PATH_VISITED);const ft=this.mapCursor.x===H&&this.mapCursor.y===V&&this.mapCursor.z===C;let wt=yt,bt=F;ft&&(bt=.4+.6*(.5+.5*Math.sin(performance.now()/120)),wt="#ffffff");const E=(ot=>{const lt=ot.replace("#",""),vt=parseInt(lt,16),dt=vt>>16&255,pt=vt>>8&255,Pt=vt&255;return`${dt}, ${pt}, ${Pt}`})(wt),G=f*.25;e.save(),e.globalAlpha=bt;const at=e.createLinearGradient(0,kt.y,0,_t.y);at.addColorStop(0,`rgba(${E}, 0.15)`),at.addColorStop(.2,`rgba(${E}, 0.65)`),at.addColorStop(.5,`rgba(${E}, 0.95)`),at.addColorStop(.8,`rgba(${E}, 0.65)`),at.addColorStop(1,`rgba(${E}, 0.15)`),e.beginPath(),e.moveTo(kt.x-G,kt.y),e.lineTo(kt.x,kt.y+G/2),e.lineTo(_t.x,_t.y+G/2),e.lineTo(_t.x-G,_t.y),e.closePath(),e.fillStyle=at,e.fill(),e.fillStyle="rgba(0, 0, 0, 0.15)",e.fill(),e.beginPath(),e.moveTo(kt.x,kt.y+G/2),e.lineTo(kt.x+G,kt.y),e.lineTo(_t.x+G,_t.y),e.lineTo(_t.x,_t.y+G/2),e.closePath(),e.fillStyle=at,e.fill(),e.fillStyle="rgba(0, 0, 0, 0.3)",e.fill(),e.restore()}}},N=(C,F,$)=>{e.save(),e.globalAlpha=$;const V=Math.sin(performance.now()/200)*3-6,H=F+V;e.beginPath(),e.moveTo(C,H-5),e.lineTo(C+4,H),e.lineTo(C,H+5),e.lineTo(C-4,H),e.closePath(),e.fillStyle="#ffd700",e.fill(),e.strokeStyle="#ffffff",e.lineWidth=1,e.stroke(),e.restore()},M=(C,F,$,V,H)=>{e.save(),e.globalAlpha=V;const ct=Math.sin(performance.now()/250)*2-4,Mt=F+ct;if(H){e.save();const Y=1+.35*(.5+.5*Math.sin(performance.now()/100));e.beginPath(),e.arc(C,Mt,7*Y,0,Math.PI*2),e.fillStyle="rgba(255, 255, 255, 0.4)",e.fill(),e.restore()}e.beginPath(),e.arc(C,Mt,5,0,Math.PI*2),e.fillStyle=H?"#ffffff":$,e.fill(),e.strokeStyle="#ffffff",e.lineWidth=1.2,e.stroke(),e.restore()},b=(C,F,$)=>{const V=`${this.playerVertical}_${this.playerSide}`,H=this.mageImages[V];let ct=$;this.deathAnimation&&this.deathAnimation.active&&(Math.floor(Date.now()/120)%2===0||(ct=.2));const Mt=f*.55,Y=p*.55,kt=C-f*.12,_t=F-p*.12;if(e.save(),e.beginPath(),e.ellipse(kt,_t,Mt,Y,0,0,Math.PI*2),e.fillStyle=`rgba(0, 0, 0, ${ct*.45})`,e.fill(),e.restore(),H&&H.complete){e.save(),e.globalAlpha=ct;const yt=l*.7,ft=yt,wt=yt*(H.height/H.width),bt=F-wt;e.drawImage(H,C-ft/2,bt,ft,wt),e.restore()}else e.save(),e.globalAlpha=ct,e.beginPath(),e.arc(C,F-3,5,0,Math.PI*2),e.fillStyle=q.COLORS.PLAYER,e.fill(),e.strokeStyle=q.COLORS.PLAYER_OUTLINE,e.lineWidth=1.5,e.stroke(),e.restore();if(this.deathAnimation&&this.deathAnimation.active){const yt=Math.min(1,this.deathAnimation.delayElapsed/this.deathAnimation.delayDuration),ft=-(H&&H.complete?l*.7*(H.height/H.width):l*.5),wt=l*.7,bt=(1-yt)*ft-4*wt*yt*(1-yt);if(this.keyImage.complete&&this.keyImage.naturalWidth!==0){e.save();const P=l*.55;e.drawImage(this.keyImage,C-P/2,F-P/2+bt,P,P),e.restore()}else e.save(),e.beginPath(),e.arc(C,F+bt,l*.15,0,2*Math.PI),e.fillStyle="#ffd700",e.fill(),e.restore()}if(q.SHOW_COLLISION_DEBUG){e.save();const yt=q.PLAYER_COLLISION_OFFSET_X||0,ft=q.PLAYER_COLLISION_OFFSET_Y||0,wt=(yt-ft)*f,bt=(yt+ft)*p,P=C+wt,E=F+bt;e.beginPath(),e.moveTo(P,E-q.PLAYER_COLLISION_RADIUS*u),e.lineTo(P+q.PLAYER_COLLISION_RADIUS*l,E),e.lineTo(P,E+q.PLAYER_COLLISION_RADIUS*u),e.lineTo(P-q.PLAYER_COLLISION_RADIUS*l,E),e.closePath(),e.strokeStyle="#ff0000",e.lineWidth=1.5,e.stroke(),e.restore()}},z=(C,F,$,V)=>{if(C&&C.lowCanvas){e.save(),e.globalAlpha=V;const H=l*.9;e.save(),e.beginPath();const ct=f*.6,Mt=p*.6;e.ellipse(F,$,ct,Mt,0,0,Math.PI*2),e.fillStyle="rgba(0, 0, 0, 0.35)",e.fill(),e.restore();const Y=Math.sin(C.jellyTime*3)*(l*.06),kt=l*.38+Y,_t=$-kt,yt=C.jellyTime,ft=Math.sin(yt)*6,wt=Math.cos(yt*.7)*4,bt=1+Math.sin(yt*1.2)*.06,P=1+Math.cos(yt*.8)*.06,E=ft*Math.PI/180,G=wt*Math.PI/180;e.save(),e.translate(F,_t),e.transform(bt,Math.tan(G),Math.tan(E),P,0,0),e.imageSmoothingEnabled=!1,e.drawImage(C.lowCanvas,-H/2,-H/2,H,H),e.restore(),e.restore()}else{e.save(),e.globalAlpha=V;const H=4+Math.sin(performance.now()/100)*1.5;e.beginPath(),e.arc(F,$-3,H,0,Math.PI*2),e.fillStyle=q.COLORS.HUNTER||"#ff00ff",e.fill(),e.strokeStyle="#ff0000",e.lineWidth=1,e.stroke(),e.restore()}},D=C=>{const F=Math.abs(C-r);return F<=2?1-F/2*(1-.35):F<4?.35*(1-(F-2)/2):0};for(let C=1;C<a;C+=2){if(C-1>=0&&(C-1===o-1||C-1===o+1)){const $=D(C-2),V=D(C),H=Math.max($,V)*.8;H>.01&&A(C-1,H)}const F=D(C);F>.01&&(C===o&&d(F),S(C,F))}const k=this.getInteractiveElements(o);if(k.forEach(C=>{if(C.type==="shaft"){const F=h(C.x,C.y,C.z),$=this.mapCursor.x===C.x&&this.mapCursor.y===C.y&&this.mapCursor.z===C.z;e.save();const V=.5+.5*Math.sin(performance.now()/150);e.beginPath(),e.arc(F.x,F.y,7.5+V*2.5,0,Math.PI*2),e.fillStyle=$?"#ffffff":"#00ffff",e.fill(),e.strokeStyle="#ffffff",e.lineWidth=1.5,e.stroke(),e.restore()}}),this.mapCursor.x===Math.floor(this.player.x)&&this.mapCursor.y===Math.floor(this.player.y)&&this.mapCursor.z===this.player.z||k.some(C=>C.x===this.mapCursor.x&&C.y===this.mapCursor.y&&C.z===this.mapCursor.z)){const C=h(this.mapCursor.x,this.mapCursor.y,this.mapCursor.z),F=Math.sin(performance.now()/150)*4;e.save();const $=1-F/16,V=h(this.mapCursor.x,this.mapCursor.y,o);e.translate(V.x,V.y),e.scale(1,.5),e.beginPath(),e.arc(0,0,8*$,0,Math.PI*2),e.fillStyle=`rgba(0, 0, 0, ${.55*$})`,e.fill(),e.restore(),e.save();const H=C.x,ct=C.y-u-12+F;e.beginPath(),e.moveTo(H,ct),e.lineTo(H-6,ct-8),e.lineTo(H-3,ct-8),e.lineTo(H-3,ct-16),e.lineTo(H+3,ct-16),e.lineTo(H+3,ct-8),e.lineTo(H+6,ct-8),e.closePath(),e.fillStyle="#00ffff",e.fill(),e.strokeStyle="#ffffff",e.lineWidth=1.5,e.stroke(),e.restore()}const B=45,j=n/3,J=n/3*2,K=i-B;e.save(),e.strokeStyle="rgba(0, 255, 255, 0.25)",e.lineWidth=4,e.lineCap="round",e.beginPath(),e.moveTo(K,j),e.lineTo(K,J),e.stroke(),e.strokeStyle="rgba(0, 255, 255, 0.4)",e.lineWidth=1.5;for(let C=j;C<=J;C+=(J-j)/6)e.beginPath(),e.moveTo(K-5,C),e.lineTo(K+5,C),e.stroke();e.restore();const Q=(j+J)/2,nt=(J-j)/2,rt=r-o,X=Q-rt/2*nt;if(e.save(),e.fillStyle="#00ffff",e.beginPath(),e.arc(K,X,5,0,Math.PI*2),e.fill(),e.restore(),this.floorClickRects=[],[{floor:o+2,y:j,label:`${(o+2+1)/2}F`,valid:o+2<=a-2},{floor:o,y:Q,label:`${(o+1)/2}F`,valid:!0},{floor:o-2,y:J,label:`${(o-2+1)/2}F`,valid:o-2>=1}].forEach(C=>{if(!C.valid)return;const F=60,$=36,V=K-F-15,H=C.y-$/2,ct=C.floor===o;e.save(),e.beginPath(),e.moveTo(V+6,H),e.lineTo(V+F,H),e.lineTo(V+F,H+$-6),e.lineTo(V+F-6,H+$),e.lineTo(V,H+$),e.lineTo(V,H+6),e.closePath(),e.fillStyle=ct?"rgba(0, 255, 255, 0.25)":"rgba(0, 0, 0, 0.6)",e.strokeStyle=ct?"#00ffff":"rgba(0, 255, 255, 0.35)",e.lineWidth=ct?2:1,e.fill(),e.stroke(),e.restore(),e.strokeStyle=ct?"#00ffff":"rgba(0, 255, 255, 0.35)",e.lineWidth=ct?2:1,e.beginPath(),e.moveTo(V+F,C.y),e.lineTo(K-2,C.y),e.stroke(),e.fillStyle=ct?"#00ffff":"rgba(255, 255, 255, 0.5)",e.font="bold 8px Courier New",e.textAlign="center",e.textBaseline="top",e.fillText("LEVEL",V+F/2,H+6),e.fillStyle="#ffffff",e.font="bold 15px Courier New",e.textBaseline="top",e.fillText(C.label,V+F/2,H+16),this.floorClickRects.push({floor:C.floor,x:V,y:H,w:F+15,h:$})}),this.isTeleportMode||(e.save(),e.beginPath(),e.moveTo(31,30),e.lineTo(145,30),e.lineTo(145,60),e.lineTo(139,66),e.lineTo(25,66),e.lineTo(25,36),e.closePath(),e.fillStyle="rgba(0, 0, 0, 0.7)",e.strokeStyle="rgba(0, 255, 255, 0.35)",e.lineWidth=1.5,e.fill(),e.stroke(),e.restore(),e.fillStyle="rgba(0, 255, 255, 0.7)",e.font="bold 8px 'Roboto', sans-serif",e.textAlign="center",e.textBaseline="top",e.fillText(Nt("hudPathfinders"),25+120/2,35),e.fillStyle="#ffffff",e.font="bold 13px 'Roboto', sans-serif",e.textBaseline="top",e.fillText(`${this.pathfindersRemaining} / ${this.totalPathfinders}`,25+120/2,46)),this.isTeleportMode){const $=i/2-90,V=30;e.save(),e.beginPath(),e.moveTo($+8,V),e.lineTo($+180-8,V),e.lineTo($+180,V+8),e.lineTo($+180,V+38-8),e.lineTo($+180-8,V+38),e.lineTo($+8,V+38),e.lineTo($,V+38-8),e.lineTo($,V+8),e.closePath(),e.fillStyle="rgba(255, 140, 0, 0.22)",e.strokeStyle="#ff8c00",e.lineWidth=2.5,e.fill(),e.stroke(),e.restore(),e.fillStyle="#ffffff",e.font="bold 15px 'Roboto', sans-serif",e.textAlign="center",e.textBaseline="middle",e.fillText(Nt("teleportWarning"),i/2,V+38/2)}if(this.isTeleportMode){const C=this.isTouchDevice?64:56,$=(this.allTeleports.length-1)*C,V=n-60,H=this.isMouseOrTouchDetected&&!this.teleportConfirmModalActive,ct=this.isTouchDevice?82:62,Mt=this.isTouchDevice?40:30,Y=this.isTouchDevice?46:36,kt=H?Y+ct:0,_t=$+60+kt,yt=this.isTouchDevice?74:62,ft=i/2-_t/2,wt=V-yt/2,bt=ft+30;if(e.save(),e.beginPath(),e.moveTo(ft+6,wt),e.lineTo(ft+_t-6,wt),e.lineTo(ft+_t,wt+6),e.lineTo(ft+_t,wt+yt-6),e.lineTo(ft+_t-6,wt+yt),e.lineTo(ft+6,wt+yt),e.lineTo(ft,wt+yt-6),e.lineTo(ft,wt+6),e.closePath(),e.fillStyle="rgba(0, 0, 0, 0.72)",e.strokeStyle="rgba(0, 255, 255, 0.25)",e.lineWidth=1,e.fill(),e.stroke(),e.restore(),this.teleportDotsClickRects=[],this.getSelectableTeleportIndices(),this.allTeleports.forEach((P,E)=>{const G=bt+E*C,at=`${P.x},${P.y},${P.z}`,ot=this.discoveredTeleports.has(at),lt=E===this.selectedTeleportIndex,vt=P.x===Math.floor(this.player.x)&&P.y===Math.floor(this.player.y)&&P.z===this.player.z,dt=this.inactiveTeleportPos&&P.x===this.inactiveTeleportPos.x&&P.y===this.inactiveTeleportPos.y&&P.z===this.inactiveTeleportPos.z;e.save();const pt=this.isTouchDevice?13:10,Pt=this.isTouchDevice?19:15;if(!ot)e.beginPath(),e.arc(G,V,pt,0,Math.PI*2),e.fillStyle="rgba(100, 100, 100, 0.45)",e.fill(),e.strokeStyle="rgba(255, 255, 255, 0.15)",e.stroke();else if(dt)e.beginPath(),e.arc(G,V,pt,0,Math.PI*2),e.fillStyle="rgba(255, 45, 0, 0.2)",e.fill(),e.strokeStyle="rgba(255, 45, 0, 0.4)",e.lineWidth=1.2,e.stroke();else{if(lt){const ht=1+.3*(.5+.5*Math.sin(performance.now()/120)),Ut=(this.isTouchDevice?28:22)*ht;e.beginPath(),e.arc(G,V,Ut,0,Math.PI*2),e.fillStyle="rgba(0, 255, 255, 0.18)",e.fill()}e.beginPath(),e.arc(G,V,lt?Pt:pt,0,Math.PI*2),e.fillStyle=lt?"#ffffff":"#00b3ff",e.fill(),e.strokeStyle=lt?"#00ffff":"#ffffff",e.lineWidth=lt?1.5:1,e.stroke(),vt&&(e.beginPath(),e.arc(G,V,lt?this.isTouchDevice?10:8:this.isTouchDevice?6:5,0,Math.PI*2),e.fillStyle="#39ff14",e.fill())}e.restore();const It=this.isTouchDevice?33:25;this.teleportDotsClickRects.push({x:G-It,y:V-It,w:It*2,h:It*2,index:E})}),H){const P=bt+$+30,E=V-Mt/2;e.save(),e.beginPath(),e.rect(P,E,ct,Mt),e.fillStyle="rgba(0, 255, 255, 0.15)",e.strokeStyle="#00ffff",e.lineWidth=1.5,e.fill(),e.stroke(),e.fillStyle="#ffffff",e.font="bold 12px 'Roboto', sans-serif",e.textAlign="center",e.textBaseline="middle",e.fillText(Nt("teleportGo"),P+ct/2,E+Mt/2),e.restore(),this.teleportGoBtnClickRect={x:P,y:E,w:ct,h:Mt}}else this.teleportGoBtnClickRect=null;if(this.teleportConfirmModalActive){e.fillStyle="rgba(0, 0, 0, 0.6)",e.fillRect(0,0,i,n);const P=320,E=160,G=i/2-P/2,at=n/2-E/2;e.save(),e.beginPath(),e.moveTo(G+10,at),e.lineTo(G+P-10,at),e.lineTo(G+P,at+10),e.lineTo(G+P,at+E-10),e.lineTo(G+P-10,at+E),e.lineTo(G+10,at+E),e.lineTo(G,at+E-10),e.lineTo(G,at+10),e.closePath(),e.fillStyle="rgba(10, 18, 30, 0.94)",e.strokeStyle="#00ffff",e.lineWidth=2,e.fill(),e.stroke(),e.restore(),e.fillStyle="#00ffff",e.font="bold 15px 'Roboto', sans-serif",e.textAlign="center",e.textBaseline="top",e.fillText(Nt("teleportationLink"),i/2,at+16),e.strokeStyle="rgba(0, 255, 255, 0.2)",e.lineWidth=1,e.beginPath(),e.moveTo(G+15,at+34),e.lineTo(G+P-15,at+34),e.stroke();const ot=this.allTeleports[this.selectedTeleportIndex];e.fillStyle="#ffffff",e.font="bold 15px 'Roboto', sans-serif",e.fillText(Nt("teleportJumpSector",{floor:(ot.z+1)/2}),i/2,at+52),e.fillStyle="rgba(255, 255, 255, 0.7)",e.font="13px 'Roboto', sans-serif",e.fillText(Nt("teleportTargetGrid",{x:ot.x,y:ot.y}),i/2,at+75);const lt=100,vt=30,dt=i/2-lt-15,pt=at+105,Pt=i/2+15,It=at+105;this.teleportModalClickRects=[{x:dt,y:pt,w:lt,h:vt,selection:"go"},{x:Pt,y:It,w:lt,h:vt,selection:"cancel"}];const ht=(Ut,Ot,Bt,Ct)=>{const Et=this.teleportModalSelection===Ct;e.save(),e.beginPath(),e.moveTo(Ut+4,Ot),e.lineTo(Ut+lt-4,Ot),e.lineTo(Ut+lt,Ot+4),e.lineTo(Ut+lt,Ot+vt-4),e.lineTo(Ut+lt-4,Ot+vt),e.lineTo(Ut+4,Ot+vt),e.lineTo(Ut,Ot+vt-4),e.lineTo(Ut,Ot+4),e.closePath(),e.fillStyle=Et?"rgba(0, 255, 255, 0.35)":"rgba(0, 0, 0, 0.6)",e.strokeStyle=Et?"#00ffff":"rgba(0, 255, 255, 0.35)",e.lineWidth=Et?2:1,e.fill(),e.stroke(),e.restore(),e.fillStyle=Et?"#ffffff":"#00ffff",e.font="bold 13px 'Roboto', sans-serif",e.textAlign="center",e.textBaseline="middle",e.fillText(Bt,Ut+lt/2,Ot+vt/2)};ht(dt,pt,Nt("teleportGo"),"go"),ht(Pt,It,Nt("teleportCancel"),"cancel")}}}}function am(s){let t,e,i,n,a,o,r,c,l,u,f,p,v,m,g;return{c(){t=ri("section"),t.innerHTML='<div class="menu-content"><header><h1 class="game-title" data-i18n="gameTitle">VOID ESCAPE</h1></header> <div class="menu-stats-grid"><div class="stat-container hunter"><div class="stat-label" data-i18n="activeHunters">Active Hunters</div> <div class="stat-value" id="hunter-count">-</div></div> <div class="stat-container teleport"><div class="stat-label" data-i18n="activeTeleports">Active Teleports</div> <div class="stat-value" id="teleport-count">-</div></div> <div class="stat-container keys"><div class="stat-label" data-i18n="activeKeys">Active Keys</div> <div class="stat-value" id="keys-count">-</div></div> <div class="stat-container pathfinder"><div class="stat-label" data-i18n="availablePathfinders">Available Pathfinders</div> <div class="stat-value" id="pathfinder-count">-</div></div></div> <div class="control-group"><div class="degree-full-row"><span class="degree-label" data-i18n="mazeDegree">Maze Degree</span> <span class="degree-value" id="degree-val">-</span></div> <input type="range" id="maze-degree" aria-label="Ajustar Grau do Labirinto"/> <p class="hint" data-i18n="degreeHint">Controls the grid size. Higher values create larger, more complex mazes.</p></div> <div class="control-group switch-group"><div class="switch-container"><span class="switch-label" data-i18n="safeMode">Safe Mode</span> <label class="switch" for="safe-mode"><input type="checkbox" id="safe-mode" aria-label="Safe Mode"/> <span class="slider"></span></label></div> <p class="hint" data-i18n="safeModeHint">When active, no hunters will spawn in the maze.</p></div> <div class="menu-action-btns"><button id="start-btn" data-i18n="generateMaze">NEW GAME</button> <button id="continue-btn-menu" class="continue-btn" style="display:none" data-i18n="continue">CONTINUE</button></div> <p class="game-credits" data-i18n="gameCredits">a game by Bernard Rodrigues</p></div>',e=Mi(),i=ri("section"),i.innerHTML='<div class="story-container"><div id="story-image-canvas" class="story-image-box"><div id="story-image-loader" class="story-loader hidden"><div class="spinner"></div> <span data-i18n="loading">LOADING...</span></div> <img id="story-img" src="" alt="Story Image" style="display: none; max-width: 100%; max-height: 100%;"/></div> <div id="story-dialogue" class="story-dialogue-box"><span id="story-text"></span> <span id="story-arrow" class="story-arrow hidden">▼</span></div> <div class="story-actions"><button id="story-skip-btn">SKIP</button></div></div>',n=Mi(),a=ri("section"),a.innerHTML='<div class="popup-container victory"><h1 data-i18n="victoryTitle">Mission Accomplished</h1> <p data-i18n="victoryText">You have successfully navigated the 3D void.</p> <p class="victory-stats"><span data-i18n="mapCompletion">MAP COMPLETION</span>: <span id="victory-completion-rate">0%</span></p> <p class="victory-stats"><span data-i18n="victoryDeaths">DEATHS</span>: <span id="victory-deaths-count">0</span></p> <p class="victory-stats"><span data-i18n="victoryDegree">MAZE DEGREE</span>: <span id="victory-maze-degree">0</span></p> <p class="victory-stats"><span data-i18n="victoryTime">COMPLETION TIME</span>: <span id="victory-completion-time">00:00</span></p> <div class="end-game-btns"><button id="restart-btn-victory" class="end-btn" data-i18n="playAgain">PLAY AGAIN</button> <button id="menu-btn-victory" class="end-btn" data-i18n="mainMenu">MAIN MENU</button></div></div>',o=Mi(),r=ri("section"),r.innerHTML='<div class="popup-container death"><h1 data-i18n="gameOverTitle">Terminated</h1> <p data-i18n="gameOverText">You were caught by the void hunters.</p> <div class="end-game-btns"><button id="continue-btn-death" class="end-btn continue-highlight" data-i18n="continue">CONTINUE</button> <button id="retry-btn-death" class="end-btn" data-i18n="playAgain">PLAY AGAIN</button> <button id="menu-btn-death" class="end-btn" data-i18n="mainMenu">MAIN MENU</button></div></div>',c=Mi(),l=ri("section"),l.innerHTML='<div class="popup-container pause"><h1 data-i18n="pauseTitle">PAUSED</h1> <div class="end-game-btns"><button id="resume-btn" class="end-btn continue-highlight" data-i18n="resume">RESUME</button> <button id="menu-btn-pause" class="end-btn" data-i18n="mainMenu">MAIN MENU</button></div></div>',u=Mi(),f=ri("div"),f.innerHTML='<span class="saving-icon">💾</span> <span data-i18n="saving">SAVING...</span>',p=Mi(),v=ri("main"),v.innerHTML='<button id="mobile-pause-btn" class="hidden" aria-label="Pause Game">✕</button> <button id="mobile-teleport-exit-btn" class="hidden" aria-label="Exit Teleport Map">✕</button> <div id="left-hud-panel" class="intro-hidden"><div class="hud-item-group"><div class="keys-title" data-i18n="hudKeys">KEYS</div> <div class="keys-counter"><span id="keys-collected-count">0</span> / <span id="keys-total-count">0</span></div> <div id="keys-list-container"></div></div> <div class="hud-item-group" id="pathfinder-hud-group"><div class="pathfinders-title" data-i18n="hudPathfinders">PATHFINDERS</div> <div class="pathfinders-counter"><span id="pathfinders-remaining-count">0</span> / <span id="pathfinders-total-count">0</span></div></div></div> <div id="map-area-container" class="intro-hidden"><div id="hunter-status-panel"><span class="status-label" data-i18n="statusLabel">HUNTER STATUS:</span> <div class="status-marquee-container"><span id="hunter-status-val" class="status-marquee-text status--scanning" data-i18n="statusScanning">SCANNING</span></div></div> <div style="position: relative; display: flex; flex-direction: column; align-items: center; width: 100%; max-width: 90vw; margin-bottom: calc(var(--h-unit) * 2); margin-bottom: calc(var(--d-h-unit) * 2);"><canvas id="main-2d-canvas" aria-label="2D Navigation Map" style="margin-bottom: 0;"></canvas> <button id="mobile-zoom-btn" aria-label="Toggle Zoom"><svg id="zoom-out-icon" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="width: 100%; height: 100%;"><circle cx="11" cy="11" r="6"></circle><line x1="21" y1="21" x2="15.5" y2="15.5"></line><line x1="8" y1="11" x2="14" y2="11"></line></svg> <svg id="zoom-in-icon" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="width: 100%; height: 100%;" class="hidden"><circle cx="11" cy="11" r="6"></circle><line x1="21" y1="21" x2="15.5" y2="15.5"></line><line x1="11" y1="8" x2="11" y2="14"></line><line x1="8" y1="11" x2="14" y2="11"></line></svg></button></div> <div id="proximeter-container" class="hidden"><div class="proximeter-label" data-i18n="proximityDetector">PROXIMITY DETECTOR</div> <div class="proximeter-bar"><span class="proximeter-cell" data-index="1"></span> <span class="proximeter-cell" data-index="2"></span> <span class="proximeter-cell" data-index="3"></span> <span class="proximeter-cell" data-index="4"></span> <span class="proximeter-cell" data-index="5"></span> <span class="proximeter-cell" data-index="6"></span> <span class="proximeter-cell" data-index="7"></span> <span class="proximeter-cell" data-index="8"></span> <span class="proximeter-cell" data-index="9"></span> <span class="proximeter-cell" data-index="10"></span></div></div> <div id="bottom-hud-container" class="intro-hidden"><div id="floor-display" aria-live="polite"><span class="hud-label" data-i18n="hudFloor">Floor</span> <span id="current-floor">0</span></div> <div id="visited-display" aria-live="polite"><span class="hud-label" data-i18n="hudVisited">Visited</span> <span class="visited-value"><span id="visited-percent">0</span>%</span></div></div></div> <div id="right-hud-panel" class="intro-hidden"><aside id="map-legend"><h3 data-i18n="mapLegendTitle">MAP LEGEND</h3> <div class="legend-item"><span class="color-box color-box--visited"></span> <span data-i18n="legendVisited">Visited Path</span></div> <div class="legend-item"><span class="color-box color-box--known"></span> <span data-i18n="legendKnown">Known Path</span></div> <div class="legend-item"><span class="color-box color-box--start"></span> <span data-i18n="legendStart">Starting Point</span></div> <div class="legend-item"><span class="color-box color-box--exit"></span> <span data-i18n="legendExit">Maze Exit</span></div> <div id="legend-hunter" class="legend-item"><span class="color-box color-box--hunter"></span> <span data-i18n="legendHunter">Void Hunter</span></div> <div class="legend-item"><span class="color-box color-box--teleport"></span> <span data-i18n="legendTeleport">Teleport</span></div> <div class="legend-item"><span class="symbol-box"><svg viewBox="0 0 24 24" fill="none" style="width: 100%; height: 100%;"><path d="M12 2L5 9H9V11H15V9H19L12 2Z" fill="#00ffff"></path><path d="M12 22L19 15H15V13H9V15H5L12 22Z" fill="#ff00ff"></path></svg></span> <span data-i18n="legendElevator">Elevator</span></div></aside> <aside id="controls-hint"><h3 data-i18n="controlsHintTitle">CONTROLS HINT</h3> <div id="controls-hint-content"></div></aside></div> <nav id="mobile-controls" class="hidden"><button id="mobile-down" class="mobile-btn" disabled="" aria-label="Go Down">▼</button> <button id="mobile-map" class="mobile-btn" disabled="" aria-label="Open Map" data-i18n="map">MAP</button> <button id="mobile-up" class="mobile-btn" disabled="" aria-label="Go Up">▲</button></nav> <div id="map3d-container" class="hidden"></div>',m=Mi(),g=ri("section"),g.innerHTML='<div class="story-loader"><div class="spinner"></div> <span data-i18n="generatingMaze">GENERATING MAZE...</span></div>',Pe(t,"id","start-menu"),Pe(i,"id","story-screen"),Pe(i,"class","hidden"),Pe(a,"id","victory-screen"),Pe(a,"class","hidden"),Pe(r,"id","game-over-screen"),Pe(r,"class","hidden"),Pe(l,"id","pause-screen"),Pe(l,"class","hidden"),Pe(f,"id","saving-indicator"),Pe(f,"class","hidden"),Pe(v,"id","game-container"),Pe(g,"id","loading-screen"),Pe(g,"class","hidden")},m(h,d){Ee(h,t,d),Ee(h,e,d),Ee(h,i,d),Ee(h,n,d),Ee(h,a,d),Ee(h,o,d),Ee(h,r,d),Ee(h,c,d),Ee(h,l,d),Ee(h,u,d),Ee(h,f,d),Ee(h,p,d),Ee(h,v,d),Ee(h,m,d),Ee(h,g,d)},p:an,i:an,o:an,d(h){h&&(xe(t),xe(e),xe(i),xe(n),xe(a),xe(o),xe(r),xe(c),xe(l),xe(u),xe(f),xe(p),xe(v),xe(m),xe(g))}}}function rm(s){let t=null;function e(a){var r,c,l;t&&t.destroy(),sl(),(r=document.getElementById("start-menu"))==null||r.classList.add("hidden"),(c=document.getElementById("victory-screen"))==null||c.classList.add("hidden"),(l=document.getElementById("game-over-screen"))==null||l.classList.add("hidden");const o=document.getElementById("loading-screen");o&&(o.classList.remove("hidden"),rs()),setTimeout(()=>{try{t=new _o(a,q.BRANCHING_FACTOR)}finally{o&&o.classList.add("hidden")}},50)}function i(){var r,c,l;const a=nl();if(!a)return;t&&t.destroy(),(r=document.getElementById("start-menu"))==null||r.classList.add("hidden"),(c=document.getElementById("victory-screen"))==null||c.classList.add("hidden"),(l=document.getElementById("game-over-screen"))==null||l.classList.add("hidden");const o=document.getElementById("loading-screen");o&&(o.classList.remove("hidden"),rs()),setTimeout(()=>{try{t=new _o(a.degree,a.branchingFactor,a)}finally{o&&o.classList.add("hidden")}},50)}function n(){var o,r,c;t&&t.destroy(),(o=document.getElementById("victory-screen"))==null||o.classList.add("hidden"),(r=document.getElementById("game-over-screen"))==null||r.classList.add("hidden");const a=document.getElementById("continue-btn-menu");a&&(a.style.display=vo()?"":"none"),(c=document.getElementById("start-menu"))==null||c.classList.remove("hidden")}return vl(()=>{rs();const a=document.getElementById("maze-degree"),o=document.getElementById("degree-val"),r=document.getElementById("hunter-count"),c=document.getElementById("teleport-count"),l=document.getElementById("keys-count"),u=document.getElementById("pathfinder-count"),f=document.getElementById("safe-mode"),p=D=>{const R=f&&f.checked?0:q.getHunterCount(D);r&&(r.innerText=String(R),r.style.color=R>0?"#f00":"#88ccff")};f&&a&&(f.onchange=()=>{p(parseInt(a.value))});const v=D=>{const k=q.getTeleportCount(D);c&&(c.innerText=String(k))},m=D=>{const k=q.getHunterCount(D)*2;l&&(l.innerText=String(k))},g=D=>{const k=q.getPathfinderCount(D);u&&(u.innerText=String(k))};if(a){q.MIN_MAZE_DEGREE!==void 0&&(a.min=String(q.MIN_MAZE_DEGREE)),q.MAX_MAZE_DEGREE!==void 0&&(a.max=String(q.MAX_MAZE_DEGREE)),q.MAZE_DEGREE!==void 0&&(a.value=String(q.MAZE_DEGREE)),a.oninput=()=>{const k=parseInt(a.value);o&&(o.innerText=String(k)),p(k),v(k),m(k),g(k)};const D=parseInt(a.value);o&&(o.innerText=String(D)),p(D),v(D),m(D),g(D)}const h=document.getElementById("continue-btn-menu");h&&(h.style.display=vo()?"":"none");const d=document.getElementById("mobile-pause-btn");d&&(d.onclick=D=>{D.stopPropagation(),t&&t.togglePause()});const x=document.getElementById("mobile-teleport-exit-btn");x&&(x.onclick=D=>{D.stopPropagation(),t&&t.isTeleportMode&&t.toggleTeleportMap(!1)});const _=document.getElementById("start-btn");_&&a&&(_.onclick=()=>{e(parseInt(a.value))});const y=document.getElementById("continue-btn-menu");y&&(y.onclick=()=>{i()});const T=document.getElementById("restart-btn-victory");T&&a&&(T.onclick=()=>{e(parseInt(a.value))});const S=document.getElementById("menu-btn-victory");S&&(S.onclick=()=>{n()});const A=document.getElementById("continue-btn-death");A&&(A.onclick=()=>{i()});const N=document.getElementById("retry-btn-death");N&&a&&(N.onclick=()=>{e(parseInt(a.value))});const M=document.getElementById("menu-btn-death");M&&(M.onclick=()=>{n()});const b=document.getElementById("resume-btn");b&&(b.onclick=()=>{t&&t.togglePause()});const z=document.getElementById("menu-btn-pause");z&&(z.onclick=()=>{n()})}),[]}class om extends wl{constructor(t){super(),Pl(this,t,rm,am,ul,{})}}new om({target:document.getElementById("app")});
