var hl=Object.defineProperty;var dl=(s,t,e)=>t in s?hl(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var Xt=(s,t,e)=>dl(s,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerPolicy&&(a.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?a.credentials="include":n.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(n){if(n.ep)return;n.ep=!0;const a=e(n);fetch(n.href,a)}})();function an(){}function _o(s){return s()}function Fa(){return Object.create(null)}function ps(s){s.forEach(_o)}function yo(s){return typeof s=="function"}function ul(s,t){return s!=s?t==t:s!==t||s&&typeof s=="object"||typeof s=="function"}function fl(s){return Object.keys(s).length===0}function Re(s,t,e){s.insertBefore(t,e||null)}function Ae(s){s.parentNode&&s.parentNode.removeChild(s)}function xi(s){return document.createElement(s)}function pl(s){return document.createTextNode(s)}function Ni(){return pl(" ")}function Ne(s,t,e){e==null?s.removeAttribute(t):s.getAttribute(t)!==e&&s.setAttribute(t,e)}function ml(s){return Array.from(s.childNodes)}let Sn;function Mn(s){Sn=s}function gl(){if(!Sn)throw new Error("Function called outside component initialization");return Sn}function vl(s){gl().$$.on_mount.push(s)}const en=[],Ba=[];let rn=[];const Ga=[],_l=Promise.resolve();let sa=!1;function yl(){sa||(sa=!0,_l.then(xo))}function aa(s){rn.push(s)}const Ts=new Set;let Ui=0;function xo(){if(Ui!==0)return;const s=Sn;do{try{for(;Ui<en.length;){const t=en[Ui];Ui++,Mn(t),xl(t.$$)}}catch(t){throw en.length=0,Ui=0,t}for(Mn(null),en.length=0,Ui=0;Ba.length;)Ba.pop()();for(let t=0;t<rn.length;t+=1){const e=rn[t];Ts.has(e)||(Ts.add(e),e())}rn.length=0}while(en.length);for(;Ga.length;)Ga.pop()();sa=!1,Ts.clear(),Mn(s)}function xl(s){if(s.fragment!==null){s.update(),ps(s.before_update);const t=s.dirty;s.dirty=[-1],s.fragment&&s.fragment.p(s.ctx,t),s.after_update.forEach(aa)}}function Ml(s){const t=[],e=[];rn.forEach(i=>s.indexOf(i)===-1?t.push(i):e.push(i)),e.forEach(i=>i()),rn=t}const El=new Set;function Tl(s,t){s&&s.i&&(El.delete(s),s.i(t))}function Sl(s,t,e){const{fragment:i,after_update:n}=s.$$;i&&i.m(t,e),aa(()=>{const a=s.$$.on_mount.map(_o).filter(yo);s.$$.on_destroy?s.$$.on_destroy.push(...a):ps(a),s.$$.on_mount=[]}),n.forEach(aa)}function bl(s,t){const e=s.$$;e.fragment!==null&&(Ml(e.after_update),ps(e.on_destroy),e.fragment&&e.fragment.d(t),e.on_destroy=e.fragment=null,e.ctx=[])}function Al(s,t){s.$$.dirty[0]===-1&&(en.push(s),yl(),s.$$.dirty.fill(0)),s.$$.dirty[t/31|0]|=1<<t%31}function wl(s,t,e,i,n,a,o=null,r=[-1]){const c=Sn;Mn(s);const l=s.$$={fragment:null,ctx:[],props:a,update:an,not_equal:n,bound:Fa(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(c?c.$$.context:[])),callbacks:Fa(),dirty:r,skip_bound:!1,root:t.target||c.$$.root};o&&o(l.root);let d=!1;if(l.ctx=e?e(s,t.props||{},(f,p,...v)=>{const m=v.length?v[0]:p;return l.ctx&&n(l.ctx[f],l.ctx[f]=m)&&(!l.skip_bound&&l.bound[f]&&l.bound[f](m),d&&Al(s,f)),p}):[],l.update(),d=!0,ps(l.before_update),l.fragment=i?i(l.ctx):!1,t.target){if(t.hydrate){const f=ml(t.target);l.fragment&&l.fragment.l(f),f.forEach(Ae)}else l.fragment&&l.fragment.c();t.intro&&Tl(s.$$.fragment),Sl(s,t.target,t.anchor),xo()}Mn(c)}class Pl{constructor(){Xt(this,"$$");Xt(this,"$$set")}$destroy(){bl(this,1),this.$destroy=an}$on(t,e){if(!yo(e))return an;const i=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return i.push(e),()=>{const n=i.indexOf(e);n!==-1&&i.splice(n,1)}}$set(t){this.$$set&&!fl(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const Cl="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Cl);/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ya="160",zi={ROTATE:0,DOLLY:1,PAN:2},Fi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Rl=0,Ha=1,Ll=2,Mo=1,Il=2,ii=3,vi=0,Pe=1,ni=2,pi=0,on=1,ka=2,Va=3,Wa=4,Dl=5,Ai=100,Ol=101,Nl=102,Ya=103,Xa=104,Ul=200,zl=201,Fl=202,Bl=203,ra=204,oa=205,Gl=206,Hl=207,kl=208,Vl=209,Wl=210,Yl=211,Xl=212,$l=213,Kl=214,ql=0,Zl=1,jl=2,as=3,Jl=4,Ql=5,tc=6,ec=7,xa=0,ic=1,nc=2,mi=0,sc=1,ac=2,rc=3,oc=4,lc=5,cc=6,Eo=300,cn=301,hn=302,la=303,ca=304,ms=306,ha=1e3,We=1001,da=1002,Te=1003,$a=1004,Ss=1005,ze=1006,hc=1007,bn=1008,gi=1009,dc=1010,uc=1011,Ma=1012,To=1013,ui=1014,fi=1015,An=1016,So=1017,bo=1018,Pi=1020,fc=1021,Ye=1023,pc=1024,mc=1025,Ci=1026,dn=1027,gc=1028,Ao=1029,vc=1030,wo=1031,Po=1033,bs=33776,As=33777,ws=33778,Ps=33779,Ka=35840,qa=35841,Za=35842,ja=35843,Co=36196,Ja=37492,Qa=37496,tr=37808,er=37809,ir=37810,nr=37811,sr=37812,ar=37813,rr=37814,or=37815,lr=37816,cr=37817,hr=37818,dr=37819,ur=37820,fr=37821,Cs=36492,pr=36494,mr=36495,_c=36283,gr=36284,vr=36285,_r=36286,Ro=3e3,Ri=3001,yc=3200,xc=3201,Lo=0,Mc=1,Be="",ge="srgb",ai="srgb-linear",Ea="display-p3",gs="display-p3-linear",rs="linear",ee="srgb",os="rec709",ls="p3",Bi=7680,yr=519,Ec=512,Tc=513,Sc=514,Io=515,bc=516,Ac=517,wc=518,Pc=519,xr=35044,Mr="300 es",ua=1035,si=2e3,cs=2001;class Oi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const n=this._listeners[t];if(n!==void 0){const a=n.indexOf(e);a!==-1&&n.splice(a,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const n=i.slice(0);for(let a=0,o=n.length;a<o;a++)n[a].call(this,t);t.target=null}}}const _e=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ns=Math.PI/180,fa=180/Math.PI;function Pn(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(_e[s&255]+_e[s>>8&255]+_e[s>>16&255]+_e[s>>24&255]+"-"+_e[t&255]+_e[t>>8&255]+"-"+_e[t>>16&15|64]+_e[t>>24&255]+"-"+_e[e&63|128]+_e[e>>8&255]+"-"+_e[e>>16&255]+_e[e>>24&255]+_e[i&255]+_e[i>>8&255]+_e[i>>16&255]+_e[i>>24&255]).toLowerCase()}function Se(s,t,e){return Math.max(t,Math.min(e,s))}function Cc(s,t){return(s%t+t)%t}function Rs(s,t,e){return(1-e)*s+e*t}function Er(s){return(s&s-1)===0&&s!==0}function pa(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function mn(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function be(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Rc={DEG2RAD:ns};class Nt{constructor(t=0,e=0){Nt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,n=t.elements;return this.x=n[0]*e+n[3]*i+n[6],this.y=n[1]*e+n[4]*i+n[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Se(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),n=Math.sin(e),a=this.x-t.x,o=this.y-t.y;return this.x=a*i-o*n+t.x,this.y=a*n+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class $t{constructor(t,e,i,n,a,o,r,c,l){$t.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,n,a,o,r,c,l)}set(t,e,i,n,a,o,r,c,l){const d=this.elements;return d[0]=t,d[1]=n,d[2]=r,d[3]=e,d[4]=a,d[5]=c,d[6]=i,d[7]=o,d[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,n=e.elements,a=this.elements,o=i[0],r=i[3],c=i[6],l=i[1],d=i[4],f=i[7],p=i[2],v=i[5],m=i[8],g=n[0],u=n[3],h=n[6],_=n[1],y=n[4],x=n[7],E=n[2],b=n[5],A=n[8];return a[0]=o*g+r*_+c*E,a[3]=o*u+r*y+c*b,a[6]=o*h+r*x+c*A,a[1]=l*g+d*_+f*E,a[4]=l*u+d*y+f*b,a[7]=l*h+d*x+f*A,a[2]=p*g+v*_+m*E,a[5]=p*u+v*y+m*b,a[8]=p*h+v*x+m*A,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],n=t[2],a=t[3],o=t[4],r=t[5],c=t[6],l=t[7],d=t[8];return e*o*d-e*r*l-i*a*d+i*r*c+n*a*l-n*o*c}invert(){const t=this.elements,e=t[0],i=t[1],n=t[2],a=t[3],o=t[4],r=t[5],c=t[6],l=t[7],d=t[8],f=d*o-r*l,p=r*c-d*a,v=l*a-o*c,m=e*f+i*p+n*v;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/m;return t[0]=f*g,t[1]=(n*l-d*i)*g,t[2]=(r*i-n*o)*g,t[3]=p*g,t[4]=(d*e-n*c)*g,t[5]=(n*a-r*e)*g,t[6]=v*g,t[7]=(i*c-l*e)*g,t[8]=(o*e-i*a)*g,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,n,a,o,r){const c=Math.cos(a),l=Math.sin(a);return this.set(i*c,i*l,-i*(c*o+l*r)+o+t,-n*l,n*c,-n*(-l*o+c*r)+r+e,0,0,1),this}scale(t,e){return this.premultiply(Ls.makeScale(t,e)),this}rotate(t){return this.premultiply(Ls.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ls.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let n=0;n<9;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Ls=new $t;function Do(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function hs(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Lc(){const s=hs("canvas");return s.style.display="block",s}const Tr={};function En(s){s in Tr||(Tr[s]=!0,console.warn(s))}const Sr=new $t().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),br=new $t().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Dn={[ai]:{transfer:rs,primaries:os,toReference:s=>s,fromReference:s=>s},[ge]:{transfer:ee,primaries:os,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[gs]:{transfer:rs,primaries:ls,toReference:s=>s.applyMatrix3(br),fromReference:s=>s.applyMatrix3(Sr)},[Ea]:{transfer:ee,primaries:ls,toReference:s=>s.convertSRGBToLinear().applyMatrix3(br),fromReference:s=>s.applyMatrix3(Sr).convertLinearToSRGB()}},Ic=new Set([ai,gs]),Qt={enabled:!0,_workingColorSpace:ai,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!Ic.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,t,e){if(this.enabled===!1||t===e||!t||!e)return s;const i=Dn[t].toReference,n=Dn[e].fromReference;return n(i(s))},fromWorkingColorSpace:function(s,t){return this.convert(s,this._workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this._workingColorSpace)},getPrimaries:function(s){return Dn[s].primaries},getTransfer:function(s){return s===Be?rs:Dn[s].transfer}};function ln(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Is(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Gi;class Oo{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Gi===void 0&&(Gi=hs("canvas")),Gi.width=t.width,Gi.height=t.height;const i=Gi.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=Gi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=hs("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const n=i.getImageData(0,0,t.width,t.height),a=n.data;for(let o=0;o<a.length;o++)a[o]=ln(a[o]/255)*255;return i.putImageData(n,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(ln(e[i]/255)*255):e[i]=ln(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Dc=0;class No{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Dc++}),this.uuid=Pn(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let a;if(Array.isArray(n)){a=[];for(let o=0,r=n.length;o<r;o++)n[o].isDataTexture?a.push(Ds(n[o].image)):a.push(Ds(n[o]))}else a=Ds(n);i.url=a}return e||(t.images[this.uuid]=i),i}}function Ds(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Oo.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Oc=0;class De extends Oi{constructor(t=De.DEFAULT_IMAGE,e=De.DEFAULT_MAPPING,i=We,n=We,a=ze,o=bn,r=Ye,c=gi,l=De.DEFAULT_ANISOTROPY,d=Be){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Oc++}),this.uuid=Pn(),this.name="",this.source=new No(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=a,this.minFilter=o,this.anisotropy=l,this.format=r,this.internalFormat=null,this.type=c,this.offset=new Nt(0,0),this.repeat=new Nt(1,1),this.center=new Nt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $t,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof d=="string"?this.colorSpace=d:(En("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=d===Ri?ge:Be),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Eo)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ha:t.x=t.x-Math.floor(t.x);break;case We:t.x=t.x<0?0:1;break;case da:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ha:t.y=t.y-Math.floor(t.y);break;case We:t.y=t.y<0?0:1;break;case da:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return En("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===ge?Ri:Ro}set encoding(t){En("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===Ri?ge:Be}}De.DEFAULT_IMAGE=null;De.DEFAULT_MAPPING=Eo;De.DEFAULT_ANISOTROPY=1;class me{constructor(t=0,e=0,i=0,n=1){me.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=n}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,n){return this.x=t,this.y=e,this.z=i,this.w=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,n=this.z,a=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*n+o[12]*a,this.y=o[1]*e+o[5]*i+o[9]*n+o[13]*a,this.z=o[2]*e+o[6]*i+o[10]*n+o[14]*a,this.w=o[3]*e+o[7]*i+o[11]*n+o[15]*a,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,n,a;const c=t.elements,l=c[0],d=c[4],f=c[8],p=c[1],v=c[5],m=c[9],g=c[2],u=c[6],h=c[10];if(Math.abs(d-p)<.01&&Math.abs(f-g)<.01&&Math.abs(m-u)<.01){if(Math.abs(d+p)<.1&&Math.abs(f+g)<.1&&Math.abs(m+u)<.1&&Math.abs(l+v+h-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const y=(l+1)/2,x=(v+1)/2,E=(h+1)/2,b=(d+p)/4,A=(f+g)/4,D=(m+u)/4;return y>x&&y>E?y<.01?(i=0,n=.707106781,a=.707106781):(i=Math.sqrt(y),n=b/i,a=A/i):x>E?x<.01?(i=.707106781,n=0,a=.707106781):(n=Math.sqrt(x),i=b/n,a=D/n):E<.01?(i=.707106781,n=.707106781,a=0):(a=Math.sqrt(E),i=A/a,n=D/a),this.set(i,n,a,e),this}let _=Math.sqrt((u-m)*(u-m)+(f-g)*(f-g)+(p-d)*(p-d));return Math.abs(_)<.001&&(_=1),this.x=(u-m)/_,this.y=(f-g)/_,this.z=(p-d)/_,this.w=Math.acos((l+v+h-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Nc extends Oi{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new me(0,0,t,e),this.scissorTest=!1,this.viewport=new me(0,0,t,e);const n={width:t,height:e,depth:1};i.encoding!==void 0&&(En("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Ri?ge:Be),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ze,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new De(n,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(t,e,i=1){(this.width!==t||this.height!==e||this.depth!==i)&&(this.width=t,this.height=e,this.depth=i,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new No(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Li extends Nc{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class Uo extends De{constructor(t=null,e=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=Te,this.minFilter=Te,this.wrapR=We,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Uc extends De{constructor(t=null,e=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=Te,this.minFilter=Te,this.wrapR=We,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ii{constructor(t=0,e=0,i=0,n=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=n}static slerpFlat(t,e,i,n,a,o,r){let c=i[n+0],l=i[n+1],d=i[n+2],f=i[n+3];const p=a[o+0],v=a[o+1],m=a[o+2],g=a[o+3];if(r===0){t[e+0]=c,t[e+1]=l,t[e+2]=d,t[e+3]=f;return}if(r===1){t[e+0]=p,t[e+1]=v,t[e+2]=m,t[e+3]=g;return}if(f!==g||c!==p||l!==v||d!==m){let u=1-r;const h=c*p+l*v+d*m+f*g,_=h>=0?1:-1,y=1-h*h;if(y>Number.EPSILON){const E=Math.sqrt(y),b=Math.atan2(E,h*_);u=Math.sin(u*b)/E,r=Math.sin(r*b)/E}const x=r*_;if(c=c*u+p*x,l=l*u+v*x,d=d*u+m*x,f=f*u+g*x,u===1-r){const E=1/Math.sqrt(c*c+l*l+d*d+f*f);c*=E,l*=E,d*=E,f*=E}}t[e]=c,t[e+1]=l,t[e+2]=d,t[e+3]=f}static multiplyQuaternionsFlat(t,e,i,n,a,o){const r=i[n],c=i[n+1],l=i[n+2],d=i[n+3],f=a[o],p=a[o+1],v=a[o+2],m=a[o+3];return t[e]=r*m+d*f+c*v-l*p,t[e+1]=c*m+d*p+l*f-r*v,t[e+2]=l*m+d*v+r*p-c*f,t[e+3]=d*m-r*f-c*p-l*v,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,n){return this._x=t,this._y=e,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,n=t._y,a=t._z,o=t._order,r=Math.cos,c=Math.sin,l=r(i/2),d=r(n/2),f=r(a/2),p=c(i/2),v=c(n/2),m=c(a/2);switch(o){case"XYZ":this._x=p*d*f+l*v*m,this._y=l*v*f-p*d*m,this._z=l*d*m+p*v*f,this._w=l*d*f-p*v*m;break;case"YXZ":this._x=p*d*f+l*v*m,this._y=l*v*f-p*d*m,this._z=l*d*m-p*v*f,this._w=l*d*f+p*v*m;break;case"ZXY":this._x=p*d*f-l*v*m,this._y=l*v*f+p*d*m,this._z=l*d*m+p*v*f,this._w=l*d*f-p*v*m;break;case"ZYX":this._x=p*d*f-l*v*m,this._y=l*v*f+p*d*m,this._z=l*d*m-p*v*f,this._w=l*d*f+p*v*m;break;case"YZX":this._x=p*d*f+l*v*m,this._y=l*v*f+p*d*m,this._z=l*d*m-p*v*f,this._w=l*d*f-p*v*m;break;case"XZY":this._x=p*d*f-l*v*m,this._y=l*v*f-p*d*m,this._z=l*d*m+p*v*f,this._w=l*d*f+p*v*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,n=Math.sin(i);return this._x=t.x*n,this._y=t.y*n,this._z=t.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],n=e[4],a=e[8],o=e[1],r=e[5],c=e[9],l=e[2],d=e[6],f=e[10],p=i+r+f;if(p>0){const v=.5/Math.sqrt(p+1);this._w=.25/v,this._x=(d-c)*v,this._y=(a-l)*v,this._z=(o-n)*v}else if(i>r&&i>f){const v=2*Math.sqrt(1+i-r-f);this._w=(d-c)/v,this._x=.25*v,this._y=(n+o)/v,this._z=(a+l)/v}else if(r>f){const v=2*Math.sqrt(1+r-i-f);this._w=(a-l)/v,this._x=(n+o)/v,this._y=.25*v,this._z=(c+d)/v}else{const v=2*Math.sqrt(1+f-i-r);this._w=(o-n)/v,this._x=(a+l)/v,this._y=(c+d)/v,this._z=.25*v}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Se(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const n=Math.min(1,e/i);return this.slerp(t,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,n=t._y,a=t._z,o=t._w,r=e._x,c=e._y,l=e._z,d=e._w;return this._x=i*d+o*r+n*l-a*c,this._y=n*d+o*c+a*r-i*l,this._z=a*d+o*l+i*c-n*r,this._w=o*d-i*r-n*c-a*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,n=this._y,a=this._z,o=this._w;let r=o*t._w+i*t._x+n*t._y+a*t._z;if(r<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,r=-r):this.copy(t),r>=1)return this._w=o,this._x=i,this._y=n,this._z=a,this;const c=1-r*r;if(c<=Number.EPSILON){const v=1-e;return this._w=v*o+e*this._w,this._x=v*i+e*this._x,this._y=v*n+e*this._y,this._z=v*a+e*this._z,this.normalize(),this}const l=Math.sqrt(c),d=Math.atan2(l,r),f=Math.sin((1-e)*d)/l,p=Math.sin(e*d)/l;return this._w=o*f+this._w*p,this._x=i*f+this._x*p,this._y=n*f+this._y*p,this._z=a*f+this._z*p,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=Math.random(),e=Math.sqrt(1-t),i=Math.sqrt(t),n=2*Math.PI*Math.random(),a=2*Math.PI*Math.random();return this.set(e*Math.cos(n),i*Math.sin(a),i*Math.cos(a),e*Math.sin(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class H{constructor(t=0,e=0,i=0){H.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ar.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ar.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,n=this.z,a=t.elements;return this.x=a[0]*e+a[3]*i+a[6]*n,this.y=a[1]*e+a[4]*i+a[7]*n,this.z=a[2]*e+a[5]*i+a[8]*n,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,n=this.z,a=t.elements,o=1/(a[3]*e+a[7]*i+a[11]*n+a[15]);return this.x=(a[0]*e+a[4]*i+a[8]*n+a[12])*o,this.y=(a[1]*e+a[5]*i+a[9]*n+a[13])*o,this.z=(a[2]*e+a[6]*i+a[10]*n+a[14])*o,this}applyQuaternion(t){const e=this.x,i=this.y,n=this.z,a=t.x,o=t.y,r=t.z,c=t.w,l=2*(o*n-r*i),d=2*(r*e-a*n),f=2*(a*i-o*e);return this.x=e+c*l+o*f-r*d,this.y=i+c*d+r*l-a*f,this.z=n+c*f+a*d-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,n=this.z,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*n,this.y=a[1]*e+a[5]*i+a[9]*n,this.z=a[2]*e+a[6]*i+a[10]*n,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,n=t.y,a=t.z,o=e.x,r=e.y,c=e.z;return this.x=n*c-a*r,this.y=a*o-i*c,this.z=i*r-n*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Os.copy(this).projectOnVector(t),this.sub(Os)}reflect(t){return this.sub(Os.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Se(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,n=this.z-t.z;return e*e+i*i+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const n=Math.sin(e)*t;return this.x=n*Math.sin(i),this.y=Math.cos(e)*t,this.z=n*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),n=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=n,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,i=Math.sqrt(1-t**2);return this.x=i*Math.cos(e),this.y=i*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Os=new H,Ar=new Ii;class Cn{constructor(t=new H(1/0,1/0,1/0),e=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Ge.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Ge.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=Ge.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const a=i.getAttribute("position");if(e===!0&&a!==void 0&&t.isInstancedMesh!==!0)for(let o=0,r=a.count;o<r;o++)t.isMesh===!0?t.getVertexPosition(o,Ge):Ge.fromBufferAttribute(a,o),Ge.applyMatrix4(t.matrixWorld),this.expandByPoint(Ge);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),On.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),On.copy(i.boundingBox)),On.applyMatrix4(t.matrixWorld),this.union(On)}const n=t.children;for(let a=0,o=n.length;a<o;a++)this.expandByObject(n[a],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,Ge),Ge.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(gn),Nn.subVectors(this.max,gn),Hi.subVectors(t.a,gn),ki.subVectors(t.b,gn),Vi.subVectors(t.c,gn),ri.subVectors(ki,Hi),oi.subVectors(Vi,ki),Mi.subVectors(Hi,Vi);let e=[0,-ri.z,ri.y,0,-oi.z,oi.y,0,-Mi.z,Mi.y,ri.z,0,-ri.x,oi.z,0,-oi.x,Mi.z,0,-Mi.x,-ri.y,ri.x,0,-oi.y,oi.x,0,-Mi.y,Mi.x,0];return!Ns(e,Hi,ki,Vi,Nn)||(e=[1,0,0,0,1,0,0,0,1],!Ns(e,Hi,ki,Vi,Nn))?!1:(Un.crossVectors(ri,oi),e=[Un.x,Un.y,Un.z],Ns(e,Hi,ki,Vi,Nn))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ge).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ge).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(je[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),je[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),je[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),je[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),je[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),je[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),je[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),je[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(je),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const je=[new H,new H,new H,new H,new H,new H,new H,new H],Ge=new H,On=new Cn,Hi=new H,ki=new H,Vi=new H,ri=new H,oi=new H,Mi=new H,gn=new H,Nn=new H,Un=new H,Ei=new H;function Ns(s,t,e,i,n){for(let a=0,o=s.length-3;a<=o;a+=3){Ei.fromArray(s,a);const r=n.x*Math.abs(Ei.x)+n.y*Math.abs(Ei.y)+n.z*Math.abs(Ei.z),c=t.dot(Ei),l=e.dot(Ei),d=i.dot(Ei);if(Math.max(-Math.max(c,l,d),Math.min(c,l,d))>r)return!1}return!0}const zc=new Cn,vn=new H,Us=new H;class Ta{constructor(t=new H,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):zc.setFromPoints(t).getCenter(i);let n=0;for(let a=0,o=t.length;a<o;a++)n=Math.max(n,i.distanceToSquared(t[a]));return this.radius=Math.sqrt(n),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;vn.subVectors(t,this.center);const e=vn.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),n=(i-this.radius)*.5;this.center.addScaledVector(vn,n/i),this.radius+=n}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Us.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(vn.copy(t.center).add(Us)),this.expandByPoint(vn.copy(t.center).sub(Us))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Je=new H,zs=new H,zn=new H,li=new H,Fs=new H,Fn=new H,Bs=new H;class Sa{constructor(t=new H,e=new H(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Je)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Je.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Je.copy(this.origin).addScaledVector(this.direction,e),Je.distanceToSquared(t))}distanceSqToSegment(t,e,i,n){zs.copy(t).add(e).multiplyScalar(.5),zn.copy(e).sub(t).normalize(),li.copy(this.origin).sub(zs);const a=t.distanceTo(e)*.5,o=-this.direction.dot(zn),r=li.dot(this.direction),c=-li.dot(zn),l=li.lengthSq(),d=Math.abs(1-o*o);let f,p,v,m;if(d>0)if(f=o*c-r,p=o*r-c,m=a*d,f>=0)if(p>=-m)if(p<=m){const g=1/d;f*=g,p*=g,v=f*(f+o*p+2*r)+p*(o*f+p+2*c)+l}else p=a,f=Math.max(0,-(o*p+r)),v=-f*f+p*(p+2*c)+l;else p=-a,f=Math.max(0,-(o*p+r)),v=-f*f+p*(p+2*c)+l;else p<=-m?(f=Math.max(0,-(-o*a+r)),p=f>0?-a:Math.min(Math.max(-a,-c),a),v=-f*f+p*(p+2*c)+l):p<=m?(f=0,p=Math.min(Math.max(-a,-c),a),v=p*(p+2*c)+l):(f=Math.max(0,-(o*a+r)),p=f>0?a:Math.min(Math.max(-a,-c),a),v=-f*f+p*(p+2*c)+l);else p=o>0?-a:a,f=Math.max(0,-(o*p+r)),v=-f*f+p*(p+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,f),n&&n.copy(zs).addScaledVector(zn,p),v}intersectSphere(t,e){Je.subVectors(t.center,this.origin);const i=Je.dot(this.direction),n=Je.dot(Je)-i*i,a=t.radius*t.radius;if(n>a)return null;const o=Math.sqrt(a-n),r=i-o,c=i+o;return c<0?null:r<0?this.at(c,e):this.at(r,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,n,a,o,r,c;const l=1/this.direction.x,d=1/this.direction.y,f=1/this.direction.z,p=this.origin;return l>=0?(i=(t.min.x-p.x)*l,n=(t.max.x-p.x)*l):(i=(t.max.x-p.x)*l,n=(t.min.x-p.x)*l),d>=0?(a=(t.min.y-p.y)*d,o=(t.max.y-p.y)*d):(a=(t.max.y-p.y)*d,o=(t.min.y-p.y)*d),i>o||a>n||((a>i||isNaN(i))&&(i=a),(o<n||isNaN(n))&&(n=o),f>=0?(r=(t.min.z-p.z)*f,c=(t.max.z-p.z)*f):(r=(t.max.z-p.z)*f,c=(t.min.z-p.z)*f),i>c||r>n)||((r>i||i!==i)&&(i=r),(c<n||n!==n)&&(n=c),n<0)?null:this.at(i>=0?i:n,e)}intersectsBox(t){return this.intersectBox(t,Je)!==null}intersectTriangle(t,e,i,n,a){Fs.subVectors(e,t),Fn.subVectors(i,t),Bs.crossVectors(Fs,Fn);let o=this.direction.dot(Bs),r;if(o>0){if(n)return null;r=1}else if(o<0)r=-1,o=-o;else return null;li.subVectors(this.origin,t);const c=r*this.direction.dot(Fn.crossVectors(li,Fn));if(c<0)return null;const l=r*this.direction.dot(Fs.cross(li));if(l<0||c+l>o)return null;const d=-r*li.dot(Bs);return d<0?null:this.at(d/o,a)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class he{constructor(t,e,i,n,a,o,r,c,l,d,f,p,v,m,g,u){he.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,n,a,o,r,c,l,d,f,p,v,m,g,u)}set(t,e,i,n,a,o,r,c,l,d,f,p,v,m,g,u){const h=this.elements;return h[0]=t,h[4]=e,h[8]=i,h[12]=n,h[1]=a,h[5]=o,h[9]=r,h[13]=c,h[2]=l,h[6]=d,h[10]=f,h[14]=p,h[3]=v,h[7]=m,h[11]=g,h[15]=u,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new he().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,n=1/Wi.setFromMatrixColumn(t,0).length(),a=1/Wi.setFromMatrixColumn(t,1).length(),o=1/Wi.setFromMatrixColumn(t,2).length();return e[0]=i[0]*n,e[1]=i[1]*n,e[2]=i[2]*n,e[3]=0,e[4]=i[4]*a,e[5]=i[5]*a,e[6]=i[6]*a,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,n=t.y,a=t.z,o=Math.cos(i),r=Math.sin(i),c=Math.cos(n),l=Math.sin(n),d=Math.cos(a),f=Math.sin(a);if(t.order==="XYZ"){const p=o*d,v=o*f,m=r*d,g=r*f;e[0]=c*d,e[4]=-c*f,e[8]=l,e[1]=v+m*l,e[5]=p-g*l,e[9]=-r*c,e[2]=g-p*l,e[6]=m+v*l,e[10]=o*c}else if(t.order==="YXZ"){const p=c*d,v=c*f,m=l*d,g=l*f;e[0]=p+g*r,e[4]=m*r-v,e[8]=o*l,e[1]=o*f,e[5]=o*d,e[9]=-r,e[2]=v*r-m,e[6]=g+p*r,e[10]=o*c}else if(t.order==="ZXY"){const p=c*d,v=c*f,m=l*d,g=l*f;e[0]=p-g*r,e[4]=-o*f,e[8]=m+v*r,e[1]=v+m*r,e[5]=o*d,e[9]=g-p*r,e[2]=-o*l,e[6]=r,e[10]=o*c}else if(t.order==="ZYX"){const p=o*d,v=o*f,m=r*d,g=r*f;e[0]=c*d,e[4]=m*l-v,e[8]=p*l+g,e[1]=c*f,e[5]=g*l+p,e[9]=v*l-m,e[2]=-l,e[6]=r*c,e[10]=o*c}else if(t.order==="YZX"){const p=o*c,v=o*l,m=r*c,g=r*l;e[0]=c*d,e[4]=g-p*f,e[8]=m*f+v,e[1]=f,e[5]=o*d,e[9]=-r*d,e[2]=-l*d,e[6]=v*f+m,e[10]=p-g*f}else if(t.order==="XZY"){const p=o*c,v=o*l,m=r*c,g=r*l;e[0]=c*d,e[4]=-f,e[8]=l*d,e[1]=p*f+g,e[5]=o*d,e[9]=v*f-m,e[2]=m*f-v,e[6]=r*d,e[10]=g*f+p}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Fc,t,Bc)}lookAt(t,e,i){const n=this.elements;return Le.subVectors(t,e),Le.lengthSq()===0&&(Le.z=1),Le.normalize(),ci.crossVectors(i,Le),ci.lengthSq()===0&&(Math.abs(i.z)===1?Le.x+=1e-4:Le.z+=1e-4,Le.normalize(),ci.crossVectors(i,Le)),ci.normalize(),Bn.crossVectors(Le,ci),n[0]=ci.x,n[4]=Bn.x,n[8]=Le.x,n[1]=ci.y,n[5]=Bn.y,n[9]=Le.y,n[2]=ci.z,n[6]=Bn.z,n[10]=Le.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,n=e.elements,a=this.elements,o=i[0],r=i[4],c=i[8],l=i[12],d=i[1],f=i[5],p=i[9],v=i[13],m=i[2],g=i[6],u=i[10],h=i[14],_=i[3],y=i[7],x=i[11],E=i[15],b=n[0],A=n[4],D=n[8],M=n[12],T=n[1],I=n[5],N=n[9],X=n[13],R=n[2],U=n[6],B=n[10],V=n[14],K=n[3],q=n[7],j=n[11],it=n[15];return a[0]=o*b+r*T+c*R+l*K,a[4]=o*A+r*I+c*U+l*q,a[8]=o*D+r*N+c*B+l*j,a[12]=o*M+r*X+c*V+l*it,a[1]=d*b+f*T+p*R+v*K,a[5]=d*A+f*I+p*U+v*q,a[9]=d*D+f*N+p*B+v*j,a[13]=d*M+f*X+p*V+v*it,a[2]=m*b+g*T+u*R+h*K,a[6]=m*A+g*I+u*U+h*q,a[10]=m*D+g*N+u*B+h*j,a[14]=m*M+g*X+u*V+h*it,a[3]=_*b+y*T+x*R+E*K,a[7]=_*A+y*I+x*U+E*q,a[11]=_*D+y*N+x*B+E*j,a[15]=_*M+y*X+x*V+E*it,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],n=t[8],a=t[12],o=t[1],r=t[5],c=t[9],l=t[13],d=t[2],f=t[6],p=t[10],v=t[14],m=t[3],g=t[7],u=t[11],h=t[15];return m*(+a*c*f-n*l*f-a*r*p+i*l*p+n*r*v-i*c*v)+g*(+e*c*v-e*l*p+a*o*p-n*o*v+n*l*d-a*c*d)+u*(+e*l*f-e*r*v-a*o*f+i*o*v+a*r*d-i*l*d)+h*(-n*r*d-e*c*f+e*r*p+n*o*f-i*o*p+i*c*d)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const n=this.elements;return t.isVector3?(n[12]=t.x,n[13]=t.y,n[14]=t.z):(n[12]=t,n[13]=e,n[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],n=t[2],a=t[3],o=t[4],r=t[5],c=t[6],l=t[7],d=t[8],f=t[9],p=t[10],v=t[11],m=t[12],g=t[13],u=t[14],h=t[15],_=f*u*l-g*p*l+g*c*v-r*u*v-f*c*h+r*p*h,y=m*p*l-d*u*l-m*c*v+o*u*v+d*c*h-o*p*h,x=d*g*l-m*f*l+m*r*v-o*g*v-d*r*h+o*f*h,E=m*f*c-d*g*c-m*r*p+o*g*p+d*r*u-o*f*u,b=e*_+i*y+n*x+a*E;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/b;return t[0]=_*A,t[1]=(g*p*a-f*u*a-g*n*v+i*u*v+f*n*h-i*p*h)*A,t[2]=(r*u*a-g*c*a+g*n*l-i*u*l-r*n*h+i*c*h)*A,t[3]=(f*c*a-r*p*a-f*n*l+i*p*l+r*n*v-i*c*v)*A,t[4]=y*A,t[5]=(d*u*a-m*p*a+m*n*v-e*u*v-d*n*h+e*p*h)*A,t[6]=(m*c*a-o*u*a-m*n*l+e*u*l+o*n*h-e*c*h)*A,t[7]=(o*p*a-d*c*a+d*n*l-e*p*l-o*n*v+e*c*v)*A,t[8]=x*A,t[9]=(m*f*a-d*g*a-m*i*v+e*g*v+d*i*h-e*f*h)*A,t[10]=(o*g*a-m*r*a+m*i*l-e*g*l-o*i*h+e*r*h)*A,t[11]=(d*r*a-o*f*a-d*i*l+e*f*l+o*i*v-e*r*v)*A,t[12]=E*A,t[13]=(d*g*n-m*f*n+m*i*p-e*g*p-d*i*u+e*f*u)*A,t[14]=(m*r*n-o*g*n-m*i*c+e*g*c+o*i*u-e*r*u)*A,t[15]=(o*f*n-d*r*n+d*i*c-e*f*c-o*i*p+e*r*p)*A,this}scale(t){const e=this.elements,i=t.x,n=t.y,a=t.z;return e[0]*=i,e[4]*=n,e[8]*=a,e[1]*=i,e[5]*=n,e[9]*=a,e[2]*=i,e[6]*=n,e[10]*=a,e[3]*=i,e[7]*=n,e[11]*=a,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],n=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,n))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),n=Math.sin(e),a=1-i,o=t.x,r=t.y,c=t.z,l=a*o,d=a*r;return this.set(l*o+i,l*r-n*c,l*c+n*r,0,l*r+n*c,d*r+i,d*c-n*o,0,l*c-n*r,d*c+n*o,a*c*c+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,n,a,o){return this.set(1,i,a,0,t,1,o,0,e,n,1,0,0,0,0,1),this}compose(t,e,i){const n=this.elements,a=e._x,o=e._y,r=e._z,c=e._w,l=a+a,d=o+o,f=r+r,p=a*l,v=a*d,m=a*f,g=o*d,u=o*f,h=r*f,_=c*l,y=c*d,x=c*f,E=i.x,b=i.y,A=i.z;return n[0]=(1-(g+h))*E,n[1]=(v+x)*E,n[2]=(m-y)*E,n[3]=0,n[4]=(v-x)*b,n[5]=(1-(p+h))*b,n[6]=(u+_)*b,n[7]=0,n[8]=(m+y)*A,n[9]=(u-_)*A,n[10]=(1-(p+g))*A,n[11]=0,n[12]=t.x,n[13]=t.y,n[14]=t.z,n[15]=1,this}decompose(t,e,i){const n=this.elements;let a=Wi.set(n[0],n[1],n[2]).length();const o=Wi.set(n[4],n[5],n[6]).length(),r=Wi.set(n[8],n[9],n[10]).length();this.determinant()<0&&(a=-a),t.x=n[12],t.y=n[13],t.z=n[14],He.copy(this);const l=1/a,d=1/o,f=1/r;return He.elements[0]*=l,He.elements[1]*=l,He.elements[2]*=l,He.elements[4]*=d,He.elements[5]*=d,He.elements[6]*=d,He.elements[8]*=f,He.elements[9]*=f,He.elements[10]*=f,e.setFromRotationMatrix(He),i.x=a,i.y=o,i.z=r,this}makePerspective(t,e,i,n,a,o,r=si){const c=this.elements,l=2*a/(e-t),d=2*a/(i-n),f=(e+t)/(e-t),p=(i+n)/(i-n);let v,m;if(r===si)v=-(o+a)/(o-a),m=-2*o*a/(o-a);else if(r===cs)v=-o/(o-a),m=-o*a/(o-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+r);return c[0]=l,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=d,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=v,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,n,a,o,r=si){const c=this.elements,l=1/(e-t),d=1/(i-n),f=1/(o-a),p=(e+t)*l,v=(i+n)*d;let m,g;if(r===si)m=(o+a)*f,g=-2*f;else if(r===cs)m=a*f,g=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+r);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-p,c[1]=0,c[5]=2*d,c[9]=0,c[13]=-v,c[2]=0,c[6]=0,c[10]=g,c[14]=-m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let n=0;n<16;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const Wi=new H,He=new he,Fc=new H(0,0,0),Bc=new H(1,1,1),ci=new H,Bn=new H,Le=new H,wr=new he,Pr=new Ii;class vs{constructor(t=0,e=0,i=0,n=vs.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=n}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,n=this._order){return this._x=t,this._y=e,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const n=t.elements,a=n[0],o=n[4],r=n[8],c=n[1],l=n[5],d=n[9],f=n[2],p=n[6],v=n[10];switch(e){case"XYZ":this._y=Math.asin(Se(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(-d,v),this._z=Math.atan2(-o,a)):(this._x=Math.atan2(p,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Se(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(r,v),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,a),this._z=0);break;case"ZXY":this._x=Math.asin(Se(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-f,v),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,a));break;case"ZYX":this._y=Math.asin(-Se(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(p,v),this._z=Math.atan2(c,a)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Se(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,l),this._y=Math.atan2(-f,a)):(this._x=0,this._y=Math.atan2(r,v));break;case"XZY":this._z=Math.asin(-Se(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(p,l),this._y=Math.atan2(r,a)):(this._x=Math.atan2(-d,v),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return wr.makeRotationFromQuaternion(t),this.setFromRotationMatrix(wr,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Pr.setFromEuler(this),this.setFromQuaternion(Pr,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}vs.DEFAULT_ORDER="XYZ";class ba{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Gc=0;const Cr=new H,Yi=new Ii,Qe=new he,Gn=new H,_n=new H,Hc=new H,kc=new Ii,Rr=new H(1,0,0),Lr=new H(0,1,0),Ir=new H(0,0,1),Vc={type:"added"},Wc={type:"removed"};class xe extends Oi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Gc++}),this.uuid=Pn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=xe.DEFAULT_UP.clone();const t=new H,e=new vs,i=new Ii,n=new H(1,1,1);function a(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(a),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new he},normalMatrix:{value:new $t}}),this.matrix=new he,this.matrixWorld=new he,this.matrixAutoUpdate=xe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=xe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ba,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Yi.setFromAxisAngle(t,e),this.quaternion.multiply(Yi),this}rotateOnWorldAxis(t,e){return Yi.setFromAxisAngle(t,e),this.quaternion.premultiply(Yi),this}rotateX(t){return this.rotateOnAxis(Rr,t)}rotateY(t){return this.rotateOnAxis(Lr,t)}rotateZ(t){return this.rotateOnAxis(Ir,t)}translateOnAxis(t,e){return Cr.copy(t).applyQuaternion(this.quaternion),this.position.add(Cr.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Rr,t)}translateY(t){return this.translateOnAxis(Lr,t)}translateZ(t){return this.translateOnAxis(Ir,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Qe.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Gn.copy(t):Gn.set(t,e,i);const n=this.parent;this.updateWorldMatrix(!0,!1),_n.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Qe.lookAt(_n,Gn,this.up):Qe.lookAt(Gn,_n,this.up),this.quaternion.setFromRotationMatrix(Qe),n&&(Qe.extractRotation(n.matrixWorld),Yi.setFromRotationMatrix(Qe),this.quaternion.premultiply(Yi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Vc)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Wc)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Qe.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Qe.multiply(t.parent.matrixWorld)),t.applyMatrix4(Qe),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,n=this.children.length;i<n;i++){const o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const n=this.children;for(let a=0,o=n.length;a<o;a++)n[a].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_n,t,Hc),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_n,kc,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,n=e.length;i<n;i++){const a=e[i];(a.matrixWorldAutoUpdate===!0||t===!0)&&a.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const n=this.children;for(let a=0,o=n.length;a<o;a++){const r=n[a];r.matrixWorldAutoUpdate===!0&&r.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const n={};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.visibility=this._visibility,n.active=this._active,n.bounds=this._bounds.map(r=>({boxInitialized:r.boxInitialized,boxMin:r.box.min.toArray(),boxMax:r.box.max.toArray(),sphereInitialized:r.sphereInitialized,sphereRadius:r.sphere.radius,sphereCenter:r.sphere.center.toArray()})),n.maxGeometryCount=this._maxGeometryCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.geometryCount=this._geometryCount,n.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(n.boundingSphere={center:n.boundingSphere.center.toArray(),radius:n.boundingSphere.radius}),this.boundingBox!==null&&(n.boundingBox={min:n.boundingBox.min.toArray(),max:n.boundingBox.max.toArray()}));function a(r,c){return r[c.uuid]===void 0&&(r[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=a(t.geometries,this.geometry);const r=this.geometry.parameters;if(r!==void 0&&r.shapes!==void 0){const c=r.shapes;if(Array.isArray(c))for(let l=0,d=c.length;l<d;l++){const f=c[l];a(t.shapes,f)}else a(t.shapes,c)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(t.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const r=[];for(let c=0,l=this.material.length;c<l;c++)r.push(a(t.materials,this.material[c]));n.material=r}else n.material=a(t.materials,this.material);if(this.children.length>0){n.children=[];for(let r=0;r<this.children.length;r++)n.children.push(this.children[r].toJSON(t).object)}if(this.animations.length>0){n.animations=[];for(let r=0;r<this.animations.length;r++){const c=this.animations[r];n.animations.push(a(t.animations,c))}}if(e){const r=o(t.geometries),c=o(t.materials),l=o(t.textures),d=o(t.images),f=o(t.shapes),p=o(t.skeletons),v=o(t.animations),m=o(t.nodes);r.length>0&&(i.geometries=r),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),d.length>0&&(i.images=d),f.length>0&&(i.shapes=f),p.length>0&&(i.skeletons=p),v.length>0&&(i.animations=v),m.length>0&&(i.nodes=m)}return i.object=n,i;function o(r){const c=[];for(const l in r){const d=r[l];delete d.metadata,c.push(d)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const n=t.children[i];this.add(n.clone())}return this}}xe.DEFAULT_UP=new H(0,1,0);xe.DEFAULT_MATRIX_AUTO_UPDATE=!0;xe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ke=new H,ti=new H,Gs=new H,ei=new H,Xi=new H,$i=new H,Dr=new H,Hs=new H,ks=new H,Vs=new H;let Hn=!1;class Ve{constructor(t=new H,e=new H,i=new H){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,n){n.subVectors(i,e),ke.subVectors(t,e),n.cross(ke);const a=n.lengthSq();return a>0?n.multiplyScalar(1/Math.sqrt(a)):n.set(0,0,0)}static getBarycoord(t,e,i,n,a){ke.subVectors(n,e),ti.subVectors(i,e),Gs.subVectors(t,e);const o=ke.dot(ke),r=ke.dot(ti),c=ke.dot(Gs),l=ti.dot(ti),d=ti.dot(Gs),f=o*l-r*r;if(f===0)return a.set(0,0,0),null;const p=1/f,v=(l*c-r*d)*p,m=(o*d-r*c)*p;return a.set(1-v-m,m,v)}static containsPoint(t,e,i,n){return this.getBarycoord(t,e,i,n,ei)===null?!1:ei.x>=0&&ei.y>=0&&ei.x+ei.y<=1}static getUV(t,e,i,n,a,o,r,c){return Hn===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Hn=!0),this.getInterpolation(t,e,i,n,a,o,r,c)}static getInterpolation(t,e,i,n,a,o,r,c){return this.getBarycoord(t,e,i,n,ei)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(a,ei.x),c.addScaledVector(o,ei.y),c.addScaledVector(r,ei.z),c)}static isFrontFacing(t,e,i,n){return ke.subVectors(i,e),ti.subVectors(t,e),ke.cross(ti).dot(n)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,n){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[n]),this}setFromAttributeAndIndices(t,e,i,n){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,n),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ke.subVectors(this.c,this.b),ti.subVectors(this.a,this.b),ke.cross(ti).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ve.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Ve.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,i,n,a){return Hn===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Hn=!0),Ve.getInterpolation(t,this.a,this.b,this.c,e,i,n,a)}getInterpolation(t,e,i,n,a){return Ve.getInterpolation(t,this.a,this.b,this.c,e,i,n,a)}containsPoint(t){return Ve.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ve.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,n=this.b,a=this.c;let o,r;Xi.subVectors(n,i),$i.subVectors(a,i),Hs.subVectors(t,i);const c=Xi.dot(Hs),l=$i.dot(Hs);if(c<=0&&l<=0)return e.copy(i);ks.subVectors(t,n);const d=Xi.dot(ks),f=$i.dot(ks);if(d>=0&&f<=d)return e.copy(n);const p=c*f-d*l;if(p<=0&&c>=0&&d<=0)return o=c/(c-d),e.copy(i).addScaledVector(Xi,o);Vs.subVectors(t,a);const v=Xi.dot(Vs),m=$i.dot(Vs);if(m>=0&&v<=m)return e.copy(a);const g=v*l-c*m;if(g<=0&&l>=0&&m<=0)return r=l/(l-m),e.copy(i).addScaledVector($i,r);const u=d*m-v*f;if(u<=0&&f-d>=0&&v-m>=0)return Dr.subVectors(a,n),r=(f-d)/(f-d+(v-m)),e.copy(n).addScaledVector(Dr,r);const h=1/(u+g+p);return o=g*h,r=p*h,e.copy(i).addScaledVector(Xi,o).addScaledVector($i,r)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const zo={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},hi={h:0,s:0,l:0},kn={h:0,s:0,l:0};function Ws(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class jt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const n=t;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ge){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Qt.toWorkingColorSpace(this,e),this}setRGB(t,e,i,n=Qt.workingColorSpace){return this.r=t,this.g=e,this.b=i,Qt.toWorkingColorSpace(this,n),this}setHSL(t,e,i,n=Qt.workingColorSpace){if(t=Cc(t,1),e=Se(e,0,1),i=Se(i,0,1),e===0)this.r=this.g=this.b=i;else{const a=i<=.5?i*(1+e):i+e-i*e,o=2*i-a;this.r=Ws(o,a,t+1/3),this.g=Ws(o,a,t),this.b=Ws(o,a,t-1/3)}return Qt.toWorkingColorSpace(this,n),this}setStyle(t,e=ge){function i(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(t)){let a;const o=n[1],r=n[2];switch(o){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,e);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,e);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(t)){const a=n[1],o=a.length;if(o===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(a,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ge){const i=zo[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ln(t.r),this.g=ln(t.g),this.b=ln(t.b),this}copyLinearToSRGB(t){return this.r=Is(t.r),this.g=Is(t.g),this.b=Is(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ge){return Qt.fromWorkingColorSpace(ye.copy(this),t),Math.round(Se(ye.r*255,0,255))*65536+Math.round(Se(ye.g*255,0,255))*256+Math.round(Se(ye.b*255,0,255))}getHexString(t=ge){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Qt.workingColorSpace){Qt.fromWorkingColorSpace(ye.copy(this),e);const i=ye.r,n=ye.g,a=ye.b,o=Math.max(i,n,a),r=Math.min(i,n,a);let c,l;const d=(r+o)/2;if(r===o)c=0,l=0;else{const f=o-r;switch(l=d<=.5?f/(o+r):f/(2-o-r),o){case i:c=(n-a)/f+(n<a?6:0);break;case n:c=(a-i)/f+2;break;case a:c=(i-n)/f+4;break}c/=6}return t.h=c,t.s=l,t.l=d,t}getRGB(t,e=Qt.workingColorSpace){return Qt.fromWorkingColorSpace(ye.copy(this),e),t.r=ye.r,t.g=ye.g,t.b=ye.b,t}getStyle(t=ge){Qt.fromWorkingColorSpace(ye.copy(this),t);const e=ye.r,i=ye.g,n=ye.b;return t!==ge?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(t,e,i){return this.getHSL(hi),this.setHSL(hi.h+t,hi.s+e,hi.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(hi),t.getHSL(kn);const i=Rs(hi.h,kn.h,e),n=Rs(hi.s,kn.s,e),a=Rs(hi.l,kn.l,e);return this.setHSL(i,n,a),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,n=this.b,a=t.elements;return this.r=a[0]*e+a[3]*i+a[6]*n,this.g=a[1]*e+a[4]*i+a[7]*n,this.b=a[2]*e+a[5]*i+a[8]*n,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ye=new jt;jt.NAMES=zo;let Yc=0;class Rn extends Oi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Yc++}),this.uuid=Pn(),this.name="",this.type="Material",this.blending=on,this.side=vi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ra,this.blendDst=oa,this.blendEquation=Ai,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new jt(0,0,0),this.blendAlpha=0,this.depthFunc=as,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=yr,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Bi,this.stencilZFail=Bi,this.stencilZPass=Bi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const n=this[e];if(n===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==on&&(i.blending=this.blending),this.side!==vi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==ra&&(i.blendSrc=this.blendSrc),this.blendDst!==oa&&(i.blendDst=this.blendDst),this.blendEquation!==Ai&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==as&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==yr&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Bi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Bi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Bi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(a){const o=[];for(const r in a){const c=a[r];delete c.metadata,o.push(c)}return o}if(e){const a=n(t.textures),o=n(t.images);a.length>0&&(i.textures=a),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const n=e.length;i=new Array(n);for(let a=0;a!==n;++a)i[a]=e[a].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class ds extends Rn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new jt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=xa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ce=new H,Vn=new Nt;class Ke{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=xr,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=fi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let n=0,a=this.itemSize;n<a;n++)this.array[t+n]=e.array[i+n];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Vn.fromBufferAttribute(this,e),Vn.applyMatrix3(t),this.setXY(e,Vn.x,Vn.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)ce.fromBufferAttribute(this,e),ce.applyMatrix3(t),this.setXYZ(e,ce.x,ce.y,ce.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)ce.fromBufferAttribute(this,e),ce.applyMatrix4(t),this.setXYZ(e,ce.x,ce.y,ce.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)ce.fromBufferAttribute(this,e),ce.applyNormalMatrix(t),this.setXYZ(e,ce.x,ce.y,ce.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)ce.fromBufferAttribute(this,e),ce.transformDirection(t),this.setXYZ(e,ce.x,ce.y,ce.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=mn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=be(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=mn(e,this.array)),e}setX(t,e){return this.normalized&&(e=be(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=mn(e,this.array)),e}setY(t,e){return this.normalized&&(e=be(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=mn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=be(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=mn(e,this.array)),e}setW(t,e){return this.normalized&&(e=be(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=be(e,this.array),i=be(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,n){return t*=this.itemSize,this.normalized&&(e=be(e,this.array),i=be(i,this.array),n=be(n,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this}setXYZW(t,e,i,n,a){return t*=this.itemSize,this.normalized&&(e=be(e,this.array),i=be(i,this.array),n=be(n,this.array),a=be(a,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this.array[t+3]=a,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==xr&&(t.usage=this.usage),t}}class Fo extends Ke{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class Bo extends Ke{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class Me extends Ke{constructor(t,e,i){super(new Float32Array(t),e,i)}}let Xc=0;const Ue=new he,Ys=new xe,Ki=new H,Ie=new Cn,yn=new Cn,pe=new H;class qe extends Oi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Xc++}),this.uuid=Pn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Do(t)?Bo:Fo)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const a=new $t().getNormalMatrix(t);i.applyNormalMatrix(a),i.needsUpdate=!0}const n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(t),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ue.makeRotationFromQuaternion(t),this.applyMatrix4(Ue),this}rotateX(t){return Ue.makeRotationX(t),this.applyMatrix4(Ue),this}rotateY(t){return Ue.makeRotationY(t),this.applyMatrix4(Ue),this}rotateZ(t){return Ue.makeRotationZ(t),this.applyMatrix4(Ue),this}translate(t,e,i){return Ue.makeTranslation(t,e,i),this.applyMatrix4(Ue),this}scale(t,e,i){return Ue.makeScale(t,e,i),this.applyMatrix4(Ue),this}lookAt(t){return Ys.lookAt(t),Ys.updateMatrix(),this.applyMatrix4(Ys.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ki).negate(),this.translate(Ki.x,Ki.y,Ki.z),this}setFromPoints(t){const e=[];for(let i=0,n=t.length;i<n;i++){const a=t[i];e.push(a.x,a.y,a.z||0)}return this.setAttribute("position",new Me(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Cn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,n=e.length;i<n;i++){const a=e[i];Ie.setFromBufferAttribute(a),this.morphTargetsRelative?(pe.addVectors(this.boundingBox.min,Ie.min),this.boundingBox.expandByPoint(pe),pe.addVectors(this.boundingBox.max,Ie.max),this.boundingBox.expandByPoint(pe)):(this.boundingBox.expandByPoint(Ie.min),this.boundingBox.expandByPoint(Ie.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ta);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new H,1/0);return}if(t){const i=this.boundingSphere.center;if(Ie.setFromBufferAttribute(t),e)for(let a=0,o=e.length;a<o;a++){const r=e[a];yn.setFromBufferAttribute(r),this.morphTargetsRelative?(pe.addVectors(Ie.min,yn.min),Ie.expandByPoint(pe),pe.addVectors(Ie.max,yn.max),Ie.expandByPoint(pe)):(Ie.expandByPoint(yn.min),Ie.expandByPoint(yn.max))}Ie.getCenter(i);let n=0;for(let a=0,o=t.count;a<o;a++)pe.fromBufferAttribute(t,a),n=Math.max(n,i.distanceToSquared(pe));if(e)for(let a=0,o=e.length;a<o;a++){const r=e[a],c=this.morphTargetsRelative;for(let l=0,d=r.count;l<d;l++)pe.fromBufferAttribute(r,l),c&&(Ki.fromBufferAttribute(t,l),pe.add(Ki)),n=Math.max(n,i.distanceToSquared(pe))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.array,n=e.position.array,a=e.normal.array,o=e.uv.array,r=n.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ke(new Float32Array(4*r),4));const c=this.getAttribute("tangent").array,l=[],d=[];for(let T=0;T<r;T++)l[T]=new H,d[T]=new H;const f=new H,p=new H,v=new H,m=new Nt,g=new Nt,u=new Nt,h=new H,_=new H;function y(T,I,N){f.fromArray(n,T*3),p.fromArray(n,I*3),v.fromArray(n,N*3),m.fromArray(o,T*2),g.fromArray(o,I*2),u.fromArray(o,N*2),p.sub(f),v.sub(f),g.sub(m),u.sub(m);const X=1/(g.x*u.y-u.x*g.y);isFinite(X)&&(h.copy(p).multiplyScalar(u.y).addScaledVector(v,-g.y).multiplyScalar(X),_.copy(v).multiplyScalar(g.x).addScaledVector(p,-u.x).multiplyScalar(X),l[T].add(h),l[I].add(h),l[N].add(h),d[T].add(_),d[I].add(_),d[N].add(_))}let x=this.groups;x.length===0&&(x=[{start:0,count:i.length}]);for(let T=0,I=x.length;T<I;++T){const N=x[T],X=N.start,R=N.count;for(let U=X,B=X+R;U<B;U+=3)y(i[U+0],i[U+1],i[U+2])}const E=new H,b=new H,A=new H,D=new H;function M(T){A.fromArray(a,T*3),D.copy(A);const I=l[T];E.copy(I),E.sub(A.multiplyScalar(A.dot(I))).normalize(),b.crossVectors(D,I);const X=b.dot(d[T])<0?-1:1;c[T*4]=E.x,c[T*4+1]=E.y,c[T*4+2]=E.z,c[T*4+3]=X}for(let T=0,I=x.length;T<I;++T){const N=x[T],X=N.start,R=N.count;for(let U=X,B=X+R;U<B;U+=3)M(i[U+0]),M(i[U+1]),M(i[U+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Ke(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let p=0,v=i.count;p<v;p++)i.setXYZ(p,0,0,0);const n=new H,a=new H,o=new H,r=new H,c=new H,l=new H,d=new H,f=new H;if(t)for(let p=0,v=t.count;p<v;p+=3){const m=t.getX(p+0),g=t.getX(p+1),u=t.getX(p+2);n.fromBufferAttribute(e,m),a.fromBufferAttribute(e,g),o.fromBufferAttribute(e,u),d.subVectors(o,a),f.subVectors(n,a),d.cross(f),r.fromBufferAttribute(i,m),c.fromBufferAttribute(i,g),l.fromBufferAttribute(i,u),r.add(d),c.add(d),l.add(d),i.setXYZ(m,r.x,r.y,r.z),i.setXYZ(g,c.x,c.y,c.z),i.setXYZ(u,l.x,l.y,l.z)}else for(let p=0,v=e.count;p<v;p+=3)n.fromBufferAttribute(e,p+0),a.fromBufferAttribute(e,p+1),o.fromBufferAttribute(e,p+2),d.subVectors(o,a),f.subVectors(n,a),d.cross(f),i.setXYZ(p+0,d.x,d.y,d.z),i.setXYZ(p+1,d.x,d.y,d.z),i.setXYZ(p+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)pe.fromBufferAttribute(t,e),pe.normalize(),t.setXYZ(e,pe.x,pe.y,pe.z)}toNonIndexed(){function t(r,c){const l=r.array,d=r.itemSize,f=r.normalized,p=new l.constructor(c.length*d);let v=0,m=0;for(let g=0,u=c.length;g<u;g++){r.isInterleavedBufferAttribute?v=c[g]*r.data.stride+r.offset:v=c[g]*d;for(let h=0;h<d;h++)p[m++]=l[v++]}return new Ke(p,d,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new qe,i=this.index.array,n=this.attributes;for(const r in n){const c=n[r],l=t(c,i);e.setAttribute(r,l)}const a=this.morphAttributes;for(const r in a){const c=[],l=a[r];for(let d=0,f=l.length;d<f;d++){const p=l[d],v=t(p,i);c.push(v)}e.morphAttributes[r]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let r=0,c=o.length;r<c;r++){const l=o[r];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const c in i){const l=i[c];t.data.attributes[c]=l.toJSON(t.data)}const n={};let a=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],d=[];for(let f=0,p=l.length;f<p;f++){const v=l[f];d.push(v.toJSON(t.data))}d.length>0&&(n[c]=d,a=!0)}a&&(t.data.morphAttributes=n,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const r=this.boundingSphere;return r!==null&&(t.data.boundingSphere={center:r.center.toArray(),radius:r.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const n=t.attributes;for(const l in n){const d=n[l];this.setAttribute(l,d.clone(e))}const a=t.morphAttributes;for(const l in a){const d=[],f=a[l];for(let p=0,v=f.length;p<v;p++)d.push(f[p].clone(e));this.morphAttributes[l]=d}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,d=o.length;l<d;l++){const f=o[l];this.addGroup(f.start,f.count,f.materialIndex)}const r=t.boundingBox;r!==null&&(this.boundingBox=r.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Or=new he,Ti=new Sa,Wn=new Ta,Nr=new H,qi=new H,Zi=new H,ji=new H,Xs=new H,Yn=new H,Xn=new Nt,$n=new Nt,Kn=new Nt,Ur=new H,zr=new H,Fr=new H,qn=new H,Zn=new H;class te extends xe{constructor(t=new qe,e=new ds){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,o=n.length;a<o;a++){const r=n[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[r]=a}}}}getVertexPosition(t,e){const i=this.geometry,n=i.attributes.position,a=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(n,t);const r=this.morphTargetInfluences;if(a&&r){Yn.set(0,0,0);for(let c=0,l=a.length;c<l;c++){const d=r[c],f=a[c];d!==0&&(Xs.fromBufferAttribute(f,t),o?Yn.addScaledVector(Xs,d):Yn.addScaledVector(Xs.sub(e),d))}e.add(Yn)}return e}raycast(t,e){const i=this.geometry,n=this.material,a=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Wn.copy(i.boundingSphere),Wn.applyMatrix4(a),Ti.copy(t.ray).recast(t.near),!(Wn.containsPoint(Ti.origin)===!1&&(Ti.intersectSphere(Wn,Nr)===null||Ti.origin.distanceToSquared(Nr)>(t.far-t.near)**2))&&(Or.copy(a).invert(),Ti.copy(t.ray).applyMatrix4(Or),!(i.boundingBox!==null&&Ti.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Ti)))}_computeIntersections(t,e,i){let n;const a=this.geometry,o=this.material,r=a.index,c=a.attributes.position,l=a.attributes.uv,d=a.attributes.uv1,f=a.attributes.normal,p=a.groups,v=a.drawRange;if(r!==null)if(Array.isArray(o))for(let m=0,g=p.length;m<g;m++){const u=p[m],h=o[u.materialIndex],_=Math.max(u.start,v.start),y=Math.min(r.count,Math.min(u.start+u.count,v.start+v.count));for(let x=_,E=y;x<E;x+=3){const b=r.getX(x),A=r.getX(x+1),D=r.getX(x+2);n=jn(this,h,t,i,l,d,f,b,A,D),n&&(n.faceIndex=Math.floor(x/3),n.face.materialIndex=u.materialIndex,e.push(n))}}else{const m=Math.max(0,v.start),g=Math.min(r.count,v.start+v.count);for(let u=m,h=g;u<h;u+=3){const _=r.getX(u),y=r.getX(u+1),x=r.getX(u+2);n=jn(this,o,t,i,l,d,f,_,y,x),n&&(n.faceIndex=Math.floor(u/3),e.push(n))}}else if(c!==void 0)if(Array.isArray(o))for(let m=0,g=p.length;m<g;m++){const u=p[m],h=o[u.materialIndex],_=Math.max(u.start,v.start),y=Math.min(c.count,Math.min(u.start+u.count,v.start+v.count));for(let x=_,E=y;x<E;x+=3){const b=x,A=x+1,D=x+2;n=jn(this,h,t,i,l,d,f,b,A,D),n&&(n.faceIndex=Math.floor(x/3),n.face.materialIndex=u.materialIndex,e.push(n))}}else{const m=Math.max(0,v.start),g=Math.min(c.count,v.start+v.count);for(let u=m,h=g;u<h;u+=3){const _=u,y=u+1,x=u+2;n=jn(this,o,t,i,l,d,f,_,y,x),n&&(n.faceIndex=Math.floor(u/3),e.push(n))}}}}function $c(s,t,e,i,n,a,o,r){let c;if(t.side===Pe?c=i.intersectTriangle(o,a,n,!0,r):c=i.intersectTriangle(n,a,o,t.side===vi,r),c===null)return null;Zn.copy(r),Zn.applyMatrix4(s.matrixWorld);const l=e.ray.origin.distanceTo(Zn);return l<e.near||l>e.far?null:{distance:l,point:Zn.clone(),object:s}}function jn(s,t,e,i,n,a,o,r,c,l){s.getVertexPosition(r,qi),s.getVertexPosition(c,Zi),s.getVertexPosition(l,ji);const d=$c(s,t,e,i,qi,Zi,ji,qn);if(d){n&&(Xn.fromBufferAttribute(n,r),$n.fromBufferAttribute(n,c),Kn.fromBufferAttribute(n,l),d.uv=Ve.getInterpolation(qn,qi,Zi,ji,Xn,$n,Kn,new Nt)),a&&(Xn.fromBufferAttribute(a,r),$n.fromBufferAttribute(a,c),Kn.fromBufferAttribute(a,l),d.uv1=Ve.getInterpolation(qn,qi,Zi,ji,Xn,$n,Kn,new Nt),d.uv2=d.uv1),o&&(Ur.fromBufferAttribute(o,r),zr.fromBufferAttribute(o,c),Fr.fromBufferAttribute(o,l),d.normal=Ve.getInterpolation(qn,qi,Zi,ji,Ur,zr,Fr,new H),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const f={a:r,b:c,c:l,normal:new H,materialIndex:0};Ve.getNormal(qi,Zi,ji,f.normal),d.face=f}return d}class we extends qe{constructor(t=1,e=1,i=1,n=1,a=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:n,heightSegments:a,depthSegments:o};const r=this;n=Math.floor(n),a=Math.floor(a),o=Math.floor(o);const c=[],l=[],d=[],f=[];let p=0,v=0;m("z","y","x",-1,-1,i,e,t,o,a,0),m("z","y","x",1,-1,i,e,-t,o,a,1),m("x","z","y",1,1,t,i,e,n,o,2),m("x","z","y",1,-1,t,i,-e,n,o,3),m("x","y","z",1,-1,t,e,i,n,a,4),m("x","y","z",-1,-1,t,e,-i,n,a,5),this.setIndex(c),this.setAttribute("position",new Me(l,3)),this.setAttribute("normal",new Me(d,3)),this.setAttribute("uv",new Me(f,2));function m(g,u,h,_,y,x,E,b,A,D,M){const T=x/A,I=E/D,N=x/2,X=E/2,R=b/2,U=A+1,B=D+1;let V=0,K=0;const q=new H;for(let j=0;j<B;j++){const it=j*I-X;for(let nt=0;nt<U;nt++){const Z=nt*T-N;q[g]=Z*_,q[u]=it*y,q[h]=R,l.push(q.x,q.y,q.z),q[g]=0,q[u]=0,q[h]=b>0?1:-1,d.push(q.x,q.y,q.z),f.push(nt/A),f.push(1-j/D),V+=1}}for(let j=0;j<D;j++)for(let it=0;it<A;it++){const nt=p+it+U*j,Z=p+it+U*(j+1),C=p+(it+1)+U*(j+1),G=p+(it+1)+U*j;c.push(nt,Z,G),c.push(Z,C,G),K+=6}r.addGroup(v,K,M),v+=K,p+=V}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new we(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function un(s){const t={};for(const e in s){t[e]={};for(const i in s[e]){const n=s[e][i];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?n.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=n.clone():Array.isArray(n)?t[e][i]=n.slice():t[e][i]=n}}return t}function Ee(s){const t={};for(let e=0;e<s.length;e++){const i=un(s[e]);for(const n in i)t[n]=i[n]}return t}function Kc(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function Go(s){return s.getRenderTarget()===null?s.outputColorSpace:Qt.workingColorSpace}const qc={clone:un,merge:Ee};var Zc=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,jc=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Di extends Rn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Zc,this.fragmentShader=jc,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=un(t.uniforms),this.uniformsGroups=Kc(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const n in this.uniforms){const o=this.uniforms[n].value;o&&o.isTexture?e.uniforms[n]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[n]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[n]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[n]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[n]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[n]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[n]={type:"m4",value:o.toArray()}:e.uniforms[n]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class Ho extends xe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new he,this.projectionMatrix=new he,this.projectionMatrixInverse=new he,this.coordinateSystem=si}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Fe extends Ho{constructor(t=50,e=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=fa*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ns*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return fa*2*Math.atan(Math.tan(ns*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,i,n,a,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=a,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(ns*.5*this.fov)/this.zoom,i=2*e,n=this.aspect*i,a=-.5*n;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;a+=o.offsetX*n/c,e-=o.offsetY*i/l,n*=o.width/c,i*=o.height/l}const r=this.filmOffset;r!==0&&(a+=t*r/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+n,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Ji=-90,Qi=1;class Jc extends xe{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const n=new Fe(Ji,Qi,t,e);n.layers=this.layers,this.add(n);const a=new Fe(Ji,Qi,t,e);a.layers=this.layers,this.add(a);const o=new Fe(Ji,Qi,t,e);o.layers=this.layers,this.add(o);const r=new Fe(Ji,Qi,t,e);r.layers=this.layers,this.add(r);const c=new Fe(Ji,Qi,t,e);c.layers=this.layers,this.add(c);const l=new Fe(Ji,Qi,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,n,a,o,r,c]=e;for(const l of e)this.remove(l);if(t===si)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),r.up.set(0,1,0),r.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===cs)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),r.up.set(0,-1,0),r.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[a,o,r,c,l,d]=this.children,f=t.getRenderTarget(),p=t.getActiveCubeFace(),v=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;const g=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,n),t.render(e,a),t.setRenderTarget(i,1,n),t.render(e,o),t.setRenderTarget(i,2,n),t.render(e,r),t.setRenderTarget(i,3,n),t.render(e,c),t.setRenderTarget(i,4,n),t.render(e,l),i.texture.generateMipmaps=g,t.setRenderTarget(i,5,n),t.render(e,d),t.setRenderTarget(f,p,v),t.xr.enabled=m,i.texture.needsPMREMUpdate=!0}}class ko extends De{constructor(t,e,i,n,a,o,r,c,l,d){t=t!==void 0?t:[],e=e!==void 0?e:cn,super(t,e,i,n,a,o,r,c,l,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Qc extends Li{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},n=[i,i,i,i,i,i];e.encoding!==void 0&&(En("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===Ri?ge:Be),this.texture=new ko(n,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:ze}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},n=new we(5,5,5),a=new Di({name:"CubemapFromEquirect",uniforms:un(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Pe,blending:pi});a.uniforms.tEquirect.value=e;const o=new te(n,a),r=e.minFilter;return e.minFilter===bn&&(e.minFilter=ze),new Jc(1,10,this).update(t,o),e.minFilter=r,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,i,n){const a=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,n);t.setRenderTarget(a)}}const $s=new H,th=new H,eh=new $t;class di{constructor(t=new H(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,n){return this.normal.set(t,e,i),this.constant=n,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const n=$s.subVectors(i,e).cross(th.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(n,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta($s),n=this.normal.dot(i);if(n===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const a=-(t.start.dot(this.normal)+this.constant)/n;return a<0||a>1?null:e.copy(t.start).addScaledVector(i,a)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||eh.getNormalMatrix(t),n=this.coplanarPoint($s).applyMatrix4(t),a=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(a),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Si=new Ta,Jn=new H;class Aa{constructor(t=new di,e=new di,i=new di,n=new di,a=new di,o=new di){this.planes=[t,e,i,n,a,o]}set(t,e,i,n,a,o){const r=this.planes;return r[0].copy(t),r[1].copy(e),r[2].copy(i),r[3].copy(n),r[4].copy(a),r[5].copy(o),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=si){const i=this.planes,n=t.elements,a=n[0],o=n[1],r=n[2],c=n[3],l=n[4],d=n[5],f=n[6],p=n[7],v=n[8],m=n[9],g=n[10],u=n[11],h=n[12],_=n[13],y=n[14],x=n[15];if(i[0].setComponents(c-a,p-l,u-v,x-h).normalize(),i[1].setComponents(c+a,p+l,u+v,x+h).normalize(),i[2].setComponents(c+o,p+d,u+m,x+_).normalize(),i[3].setComponents(c-o,p-d,u-m,x-_).normalize(),i[4].setComponents(c-r,p-f,u-g,x-y).normalize(),e===si)i[5].setComponents(c+r,p+f,u+g,x+y).normalize();else if(e===cs)i[5].setComponents(r,f,g,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Si.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Si.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Si)}intersectsSprite(t){return Si.center.set(0,0,0),Si.radius=.7071067811865476,Si.applyMatrix4(t.matrixWorld),this.intersectsSphere(Si)}intersectsSphere(t){const e=this.planes,i=t.center,n=-t.radius;for(let a=0;a<6;a++)if(e[a].distanceToPoint(i)<n)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const n=e[i];if(Jn.x=n.normal.x>0?t.max.x:t.min.x,Jn.y=n.normal.y>0?t.max.y:t.min.y,Jn.z=n.normal.z>0?t.max.z:t.min.z,n.distanceToPoint(Jn)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Vo(){let s=null,t=!1,e=null,i=null;function n(a,o){e(a,o),i=s.requestAnimationFrame(n)}return{start:function(){t!==!0&&e!==null&&(i=s.requestAnimationFrame(n),t=!0)},stop:function(){s.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(a){e=a},setContext:function(a){s=a}}}function ih(s,t){const e=t.isWebGL2,i=new WeakMap;function n(l,d){const f=l.array,p=l.usage,v=f.byteLength,m=s.createBuffer();s.bindBuffer(d,m),s.bufferData(d,f,p),l.onUploadCallback();let g;if(f instanceof Float32Array)g=s.FLOAT;else if(f instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(e)g=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=s.UNSIGNED_SHORT;else if(f instanceof Int16Array)g=s.SHORT;else if(f instanceof Uint32Array)g=s.UNSIGNED_INT;else if(f instanceof Int32Array)g=s.INT;else if(f instanceof Int8Array)g=s.BYTE;else if(f instanceof Uint8Array)g=s.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)g=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:m,type:g,bytesPerElement:f.BYTES_PER_ELEMENT,version:l.version,size:v}}function a(l,d,f){const p=d.array,v=d._updateRange,m=d.updateRanges;if(s.bindBuffer(f,l),v.count===-1&&m.length===0&&s.bufferSubData(f,0,p),m.length!==0){for(let g=0,u=m.length;g<u;g++){const h=m[g];e?s.bufferSubData(f,h.start*p.BYTES_PER_ELEMENT,p,h.start,h.count):s.bufferSubData(f,h.start*p.BYTES_PER_ELEMENT,p.subarray(h.start,h.start+h.count))}d.clearUpdateRanges()}v.count!==-1&&(e?s.bufferSubData(f,v.offset*p.BYTES_PER_ELEMENT,p,v.offset,v.count):s.bufferSubData(f,v.offset*p.BYTES_PER_ELEMENT,p.subarray(v.offset,v.offset+v.count)),v.count=-1),d.onUploadCallback()}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),i.get(l)}function r(l){l.isInterleavedBufferAttribute&&(l=l.data);const d=i.get(l);d&&(s.deleteBuffer(d.buffer),i.delete(l))}function c(l,d){if(l.isGLBufferAttribute){const p=i.get(l);(!p||p.version<l.version)&&i.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const f=i.get(l);if(f===void 0)i.set(l,n(l,d));else if(f.version<l.version){if(f.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");a(f.buffer,l,d),f.version=l.version}}return{get:o,remove:r,update:c}}class wa extends qe{constructor(t=1,e=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:n};const a=t/2,o=e/2,r=Math.floor(i),c=Math.floor(n),l=r+1,d=c+1,f=t/r,p=e/c,v=[],m=[],g=[],u=[];for(let h=0;h<d;h++){const _=h*p-o;for(let y=0;y<l;y++){const x=y*f-a;m.push(x,-_,0),g.push(0,0,1),u.push(y/r),u.push(1-h/c)}}for(let h=0;h<c;h++)for(let _=0;_<r;_++){const y=_+l*h,x=_+l*(h+1),E=_+1+l*(h+1),b=_+1+l*h;v.push(y,x,b),v.push(x,E,b)}this.setIndex(v),this.setAttribute("position",new Me(m,3)),this.setAttribute("normal",new Me(g,3)),this.setAttribute("uv",new Me(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new wa(t.width,t.height,t.widthSegments,t.heightSegments)}}var nh=`#ifdef USE_ALPHAHASH
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
}`,kt={alphahash_fragment:nh,alphahash_pars_fragment:sh,alphamap_fragment:ah,alphamap_pars_fragment:rh,alphatest_fragment:oh,alphatest_pars_fragment:lh,aomap_fragment:ch,aomap_pars_fragment:hh,batching_pars_vertex:dh,batching_vertex:uh,begin_vertex:fh,beginnormal_vertex:ph,bsdfs:mh,iridescence_fragment:gh,bumpmap_pars_fragment:vh,clipping_planes_fragment:_h,clipping_planes_pars_fragment:yh,clipping_planes_pars_vertex:xh,clipping_planes_vertex:Mh,color_fragment:Eh,color_pars_fragment:Th,color_pars_vertex:Sh,color_vertex:bh,common:Ah,cube_uv_reflection_fragment:wh,defaultnormal_vertex:Ph,displacementmap_pars_vertex:Ch,displacementmap_vertex:Rh,emissivemap_fragment:Lh,emissivemap_pars_fragment:Ih,colorspace_fragment:Dh,colorspace_pars_fragment:Oh,envmap_fragment:Nh,envmap_common_pars_fragment:Uh,envmap_pars_fragment:zh,envmap_pars_vertex:Fh,envmap_physical_pars_fragment:Zh,envmap_vertex:Bh,fog_vertex:Gh,fog_pars_vertex:Hh,fog_fragment:kh,fog_pars_fragment:Vh,gradientmap_pars_fragment:Wh,lightmap_fragment:Yh,lightmap_pars_fragment:Xh,lights_lambert_fragment:$h,lights_lambert_pars_fragment:Kh,lights_pars_begin:qh,lights_toon_fragment:jh,lights_toon_pars_fragment:Jh,lights_phong_fragment:Qh,lights_phong_pars_fragment:td,lights_physical_fragment:ed,lights_physical_pars_fragment:id,lights_fragment_begin:nd,lights_fragment_maps:sd,lights_fragment_end:ad,logdepthbuf_fragment:rd,logdepthbuf_pars_fragment:od,logdepthbuf_pars_vertex:ld,logdepthbuf_vertex:cd,map_fragment:hd,map_pars_fragment:dd,map_particle_fragment:ud,map_particle_pars_fragment:fd,metalnessmap_fragment:pd,metalnessmap_pars_fragment:md,morphcolor_vertex:gd,morphnormal_vertex:vd,morphtarget_pars_vertex:_d,morphtarget_vertex:yd,normal_fragment_begin:xd,normal_fragment_maps:Md,normal_pars_fragment:Ed,normal_pars_vertex:Td,normal_vertex:Sd,normalmap_pars_fragment:bd,clearcoat_normal_fragment_begin:Ad,clearcoat_normal_fragment_maps:wd,clearcoat_pars_fragment:Pd,iridescence_pars_fragment:Cd,opaque_fragment:Rd,packing:Ld,premultiplied_alpha_fragment:Id,project_vertex:Dd,dithering_fragment:Od,dithering_pars_fragment:Nd,roughnessmap_fragment:Ud,roughnessmap_pars_fragment:zd,shadowmap_pars_fragment:Fd,shadowmap_pars_vertex:Bd,shadowmap_vertex:Gd,shadowmask_pars_fragment:Hd,skinbase_vertex:kd,skinning_pars_vertex:Vd,skinning_vertex:Wd,skinnormal_vertex:Yd,specularmap_fragment:Xd,specularmap_pars_fragment:$d,tonemapping_fragment:Kd,tonemapping_pars_fragment:qd,transmission_fragment:Zd,transmission_pars_fragment:jd,uv_pars_fragment:Jd,uv_pars_vertex:Qd,uv_vertex:tu,worldpos_vertex:eu,background_vert:iu,background_frag:nu,backgroundCube_vert:su,backgroundCube_frag:au,cube_vert:ru,cube_frag:ou,depth_vert:lu,depth_frag:cu,distanceRGBA_vert:hu,distanceRGBA_frag:du,equirect_vert:uu,equirect_frag:fu,linedashed_vert:pu,linedashed_frag:mu,meshbasic_vert:gu,meshbasic_frag:vu,meshlambert_vert:_u,meshlambert_frag:yu,meshmatcap_vert:xu,meshmatcap_frag:Mu,meshnormal_vert:Eu,meshnormal_frag:Tu,meshphong_vert:Su,meshphong_frag:bu,meshphysical_vert:Au,meshphysical_frag:wu,meshtoon_vert:Pu,meshtoon_frag:Cu,points_vert:Ru,points_frag:Lu,shadow_vert:Iu,shadow_frag:Du,sprite_vert:Ou,sprite_frag:Nu},_t={common:{diffuse:{value:new jt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $t}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $t}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $t}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $t},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $t},normalScale:{value:new Nt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $t},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $t}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $t}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $t}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new jt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new jt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0},uvTransform:{value:new $t}},sprite:{diffuse:{value:new jt(16777215)},opacity:{value:1},center:{value:new Nt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}}},$e={basic:{uniforms:Ee([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.fog]),vertexShader:kt.meshbasic_vert,fragmentShader:kt.meshbasic_frag},lambert:{uniforms:Ee([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,_t.lights,{emissive:{value:new jt(0)}}]),vertexShader:kt.meshlambert_vert,fragmentShader:kt.meshlambert_frag},phong:{uniforms:Ee([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,_t.lights,{emissive:{value:new jt(0)},specular:{value:new jt(1118481)},shininess:{value:30}}]),vertexShader:kt.meshphong_vert,fragmentShader:kt.meshphong_frag},standard:{uniforms:Ee([_t.common,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.roughnessmap,_t.metalnessmap,_t.fog,_t.lights,{emissive:{value:new jt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:kt.meshphysical_vert,fragmentShader:kt.meshphysical_frag},toon:{uniforms:Ee([_t.common,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.gradientmap,_t.fog,_t.lights,{emissive:{value:new jt(0)}}]),vertexShader:kt.meshtoon_vert,fragmentShader:kt.meshtoon_frag},matcap:{uniforms:Ee([_t.common,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,{matcap:{value:null}}]),vertexShader:kt.meshmatcap_vert,fragmentShader:kt.meshmatcap_frag},points:{uniforms:Ee([_t.points,_t.fog]),vertexShader:kt.points_vert,fragmentShader:kt.points_frag},dashed:{uniforms:Ee([_t.common,_t.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:kt.linedashed_vert,fragmentShader:kt.linedashed_frag},depth:{uniforms:Ee([_t.common,_t.displacementmap]),vertexShader:kt.depth_vert,fragmentShader:kt.depth_frag},normal:{uniforms:Ee([_t.common,_t.bumpmap,_t.normalmap,_t.displacementmap,{opacity:{value:1}}]),vertexShader:kt.meshnormal_vert,fragmentShader:kt.meshnormal_frag},sprite:{uniforms:Ee([_t.sprite,_t.fog]),vertexShader:kt.sprite_vert,fragmentShader:kt.sprite_frag},background:{uniforms:{uvTransform:{value:new $t},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:kt.background_vert,fragmentShader:kt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:kt.backgroundCube_vert,fragmentShader:kt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:kt.cube_vert,fragmentShader:kt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:kt.equirect_vert,fragmentShader:kt.equirect_frag},distanceRGBA:{uniforms:Ee([_t.common,_t.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:kt.distanceRGBA_vert,fragmentShader:kt.distanceRGBA_frag},shadow:{uniforms:Ee([_t.lights,_t.fog,{color:{value:new jt(0)},opacity:{value:1}}]),vertexShader:kt.shadow_vert,fragmentShader:kt.shadow_frag}};$e.physical={uniforms:Ee([$e.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $t},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $t},clearcoatNormalScale:{value:new Nt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $t},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $t},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $t},sheen:{value:0},sheenColor:{value:new jt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $t},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $t},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $t},transmissionSamplerSize:{value:new Nt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $t},attenuationDistance:{value:0},attenuationColor:{value:new jt(0)},specularColor:{value:new jt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $t},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $t},anisotropyVector:{value:new Nt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $t}}]),vertexShader:kt.meshphysical_vert,fragmentShader:kt.meshphysical_frag};const Qn={r:0,b:0,g:0};function Uu(s,t,e,i,n,a,o){const r=new jt(0);let c=a===!0?0:1,l,d,f=null,p=0,v=null;function m(u,h){let _=!1,y=h.isScene===!0?h.background:null;y&&y.isTexture&&(y=(h.backgroundBlurriness>0?e:t).get(y)),y===null?g(r,c):y&&y.isColor&&(g(y,1),_=!0);const x=s.xr.getEnvironmentBlendMode();x==="additive"?i.buffers.color.setClear(0,0,0,1,o):x==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(s.autoClear||_)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),y&&(y.isCubeTexture||y.mapping===ms)?(d===void 0&&(d=new te(new we(1,1,1),new Di({name:"BackgroundCubeMaterial",uniforms:un($e.backgroundCube.uniforms),vertexShader:$e.backgroundCube.vertexShader,fragmentShader:$e.backgroundCube.fragmentShader,side:Pe,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(E,b,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(d)),d.material.uniforms.envMap.value=y,d.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=h.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,d.material.toneMapped=Qt.getTransfer(y.colorSpace)!==ee,(f!==y||p!==y.version||v!==s.toneMapping)&&(d.material.needsUpdate=!0,f=y,p=y.version,v=s.toneMapping),d.layers.enableAll(),u.unshift(d,d.geometry,d.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new te(new wa(2,2),new Di({name:"BackgroundMaterial",uniforms:un($e.background.uniforms),vertexShader:$e.background.vertexShader,fragmentShader:$e.background.fragmentShader,side:vi,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,l.material.toneMapped=Qt.getTransfer(y.colorSpace)!==ee,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(f!==y||p!==y.version||v!==s.toneMapping)&&(l.material.needsUpdate=!0,f=y,p=y.version,v=s.toneMapping),l.layers.enableAll(),u.unshift(l,l.geometry,l.material,0,0,null))}function g(u,h){u.getRGB(Qn,Go(s)),i.buffers.color.setClear(Qn.r,Qn.g,Qn.b,h,o)}return{getClearColor:function(){return r},setClearColor:function(u,h=1){r.set(u),c=h,g(r,c)},getClearAlpha:function(){return c},setClearAlpha:function(u){c=u,g(r,c)},render:m}}function zu(s,t,e,i){const n=s.getParameter(s.MAX_VERTEX_ATTRIBS),a=i.isWebGL2?null:t.get("OES_vertex_array_object"),o=i.isWebGL2||a!==null,r={},c=u(null);let l=c,d=!1;function f(R,U,B,V,K){let q=!1;if(o){const j=g(V,B,U);l!==j&&(l=j,v(l.object)),q=h(R,V,B,K),q&&_(R,V,B,K)}else{const j=U.wireframe===!0;(l.geometry!==V.id||l.program!==B.id||l.wireframe!==j)&&(l.geometry=V.id,l.program=B.id,l.wireframe=j,q=!0)}K!==null&&e.update(K,s.ELEMENT_ARRAY_BUFFER),(q||d)&&(d=!1,D(R,U,B,V),K!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(K).buffer))}function p(){return i.isWebGL2?s.createVertexArray():a.createVertexArrayOES()}function v(R){return i.isWebGL2?s.bindVertexArray(R):a.bindVertexArrayOES(R)}function m(R){return i.isWebGL2?s.deleteVertexArray(R):a.deleteVertexArrayOES(R)}function g(R,U,B){const V=B.wireframe===!0;let K=r[R.id];K===void 0&&(K={},r[R.id]=K);let q=K[U.id];q===void 0&&(q={},K[U.id]=q);let j=q[V];return j===void 0&&(j=u(p()),q[V]=j),j}function u(R){const U=[],B=[],V=[];for(let K=0;K<n;K++)U[K]=0,B[K]=0,V[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:B,attributeDivisors:V,object:R,attributes:{},index:null}}function h(R,U,B,V){const K=l.attributes,q=U.attributes;let j=0;const it=B.getAttributes();for(const nt in it)if(it[nt].location>=0){const C=K[nt];let G=q[nt];if(G===void 0&&(nt==="instanceMatrix"&&R.instanceMatrix&&(G=R.instanceMatrix),nt==="instanceColor"&&R.instanceColor&&(G=R.instanceColor)),C===void 0||C.attribute!==G||G&&C.data!==G.data)return!0;j++}return l.attributesNum!==j||l.index!==V}function _(R,U,B,V){const K={},q=U.attributes;let j=0;const it=B.getAttributes();for(const nt in it)if(it[nt].location>=0){let C=q[nt];C===void 0&&(nt==="instanceMatrix"&&R.instanceMatrix&&(C=R.instanceMatrix),nt==="instanceColor"&&R.instanceColor&&(C=R.instanceColor));const G={};G.attribute=C,C&&C.data&&(G.data=C.data),K[nt]=G,j++}l.attributes=K,l.attributesNum=j,l.index=V}function y(){const R=l.newAttributes;for(let U=0,B=R.length;U<B;U++)R[U]=0}function x(R){E(R,0)}function E(R,U){const B=l.newAttributes,V=l.enabledAttributes,K=l.attributeDivisors;B[R]=1,V[R]===0&&(s.enableVertexAttribArray(R),V[R]=1),K[R]!==U&&((i.isWebGL2?s:t.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](R,U),K[R]=U)}function b(){const R=l.newAttributes,U=l.enabledAttributes;for(let B=0,V=U.length;B<V;B++)U[B]!==R[B]&&(s.disableVertexAttribArray(B),U[B]=0)}function A(R,U,B,V,K,q,j){j===!0?s.vertexAttribIPointer(R,U,B,K,q):s.vertexAttribPointer(R,U,B,V,K,q)}function D(R,U,B,V){if(i.isWebGL2===!1&&(R.isInstancedMesh||V.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;y();const K=V.attributes,q=B.getAttributes(),j=U.defaultAttributeValues;for(const it in q){const nt=q[it];if(nt.location>=0){let Z=K[it];if(Z===void 0&&(it==="instanceMatrix"&&R.instanceMatrix&&(Z=R.instanceMatrix),it==="instanceColor"&&R.instanceColor&&(Z=R.instanceColor)),Z!==void 0){const C=Z.normalized,G=Z.itemSize,$=e.get(Z);if($===void 0)continue;const z=$.buffer,Y=$.type,st=$.bytesPerElement,ut=i.isWebGL2===!0&&(Y===s.INT||Y===s.UNSIGNED_INT||Z.gpuType===To);if(Z.isInterleavedBufferAttribute){const bt=Z.data,F=bt.stride,At=Z.offset;if(bt.isInstancedInterleavedBuffer){for(let mt=0;mt<nt.locationSize;mt++)E(nt.location+mt,bt.meshPerAttribute);R.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=bt.meshPerAttribute*bt.count)}else for(let mt=0;mt<nt.locationSize;mt++)x(nt.location+mt);s.bindBuffer(s.ARRAY_BUFFER,z);for(let mt=0;mt<nt.locationSize;mt++)A(nt.location+mt,G/nt.locationSize,Y,C,F*st,(At+G/nt.locationSize*mt)*st,ut)}else{if(Z.isInstancedBufferAttribute){for(let bt=0;bt<nt.locationSize;bt++)E(nt.location+bt,Z.meshPerAttribute);R.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let bt=0;bt<nt.locationSize;bt++)x(nt.location+bt);s.bindBuffer(s.ARRAY_BUFFER,z);for(let bt=0;bt<nt.locationSize;bt++)A(nt.location+bt,G/nt.locationSize,Y,C,G*st,G/nt.locationSize*bt*st,ut)}}else if(j!==void 0){const C=j[it];if(C!==void 0)switch(C.length){case 2:s.vertexAttrib2fv(nt.location,C);break;case 3:s.vertexAttrib3fv(nt.location,C);break;case 4:s.vertexAttrib4fv(nt.location,C);break;default:s.vertexAttrib1fv(nt.location,C)}}}}b()}function M(){N();for(const R in r){const U=r[R];for(const B in U){const V=U[B];for(const K in V)m(V[K].object),delete V[K];delete U[B]}delete r[R]}}function T(R){if(r[R.id]===void 0)return;const U=r[R.id];for(const B in U){const V=U[B];for(const K in V)m(V[K].object),delete V[K];delete U[B]}delete r[R.id]}function I(R){for(const U in r){const B=r[U];if(B[R.id]===void 0)continue;const V=B[R.id];for(const K in V)m(V[K].object),delete V[K];delete B[R.id]}}function N(){X(),d=!0,l!==c&&(l=c,v(l.object))}function X(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:f,reset:N,resetDefaultState:X,dispose:M,releaseStatesOfGeometry:T,releaseStatesOfProgram:I,initAttributes:y,enableAttribute:x,disableUnusedAttributes:b}}function Fu(s,t,e,i){const n=i.isWebGL2;let a;function o(d){a=d}function r(d,f){s.drawArrays(a,d,f),e.update(f,a,1)}function c(d,f,p){if(p===0)return;let v,m;if(n)v=s,m="drawArraysInstanced";else if(v=t.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",v===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}v[m](a,d,f,p),e.update(f,a,p)}function l(d,f,p){if(p===0)return;const v=t.get("WEBGL_multi_draw");if(v===null)for(let m=0;m<p;m++)this.render(d[m],f[m]);else{v.multiDrawArraysWEBGL(a,d,0,f,0,p);let m=0;for(let g=0;g<p;g++)m+=f[g];e.update(m,a,1)}}this.setMode=o,this.render=r,this.renderInstances=c,this.renderMultiDraw=l}function Bu(s,t,e){let i;function n(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const A=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(A){if(A==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&s.constructor.name==="WebGL2RenderingContext";let r=e.precision!==void 0?e.precision:"highp";const c=a(r);c!==r&&(console.warn("THREE.WebGLRenderer:",r,"not supported, using",c,"instead."),r=c);const l=o||t.has("WEBGL_draw_buffers"),d=e.logarithmicDepthBuffer===!0,f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),p=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),g=s.getParameter(s.MAX_VERTEX_ATTRIBS),u=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),h=s.getParameter(s.MAX_VARYING_VECTORS),_=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),y=p>0,x=o||t.has("OES_texture_float"),E=y&&x,b=o?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:n,getMaxPrecision:a,precision:r,logarithmicDepthBuffer:d,maxTextures:f,maxVertexTextures:p,maxTextureSize:v,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:u,maxVaryings:h,maxFragmentUniforms:_,vertexTextures:y,floatFragmentTextures:x,floatVertexTextures:E,maxSamples:b}}function Gu(s){const t=this;let e=null,i=0,n=!1,a=!1;const o=new di,r=new $t,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,p){const v=f.length!==0||p||i!==0||n;return n=p,i=f.length,v},this.beginShadows=function(){a=!0,d(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(f,p){e=d(f,p,0)},this.setState=function(f,p,v){const m=f.clippingPlanes,g=f.clipIntersection,u=f.clipShadows,h=s.get(f);if(!n||m===null||m.length===0||a&&!u)a?d(null):l();else{const _=a?0:i,y=_*4;let x=h.clippingState||null;c.value=x,x=d(m,p,y,v);for(let E=0;E!==y;++E)x[E]=e[E];h.clippingState=x,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=_}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function d(f,p,v,m){const g=f!==null?f.length:0;let u=null;if(g!==0){if(u=c.value,m!==!0||u===null){const h=v+g*4,_=p.matrixWorldInverse;r.getNormalMatrix(_),(u===null||u.length<h)&&(u=new Float32Array(h));for(let y=0,x=v;y!==g;++y,x+=4)o.copy(f[y]).applyMatrix4(_,r),o.normal.toArray(u,x),u[x+3]=o.constant}c.value=u,c.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,u}}function Hu(s){let t=new WeakMap;function e(o,r){return r===la?o.mapping=cn:r===ca&&(o.mapping=hn),o}function i(o){if(o&&o.isTexture){const r=o.mapping;if(r===la||r===ca)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new Qc(c.height/2);return l.fromEquirectangularTexture(s,o),t.set(o,l),o.addEventListener("dispose",n),e(l.texture,o.mapping)}else return null}}return o}function n(o){const r=o.target;r.removeEventListener("dispose",n);const c=t.get(r);c!==void 0&&(t.delete(r),c.dispose())}function a(){t=new WeakMap}return{get:i,dispose:a}}class Wo extends Ho{constructor(t=-1,e=1,i=1,n=-1,a=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=n,this.near=a,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,n,a,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=a,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2;let a=i-t,o=i+t,r=n+e,c=n-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=l*this.view.offsetX,o=a+l*this.view.width,r-=d*this.view.offsetY,c=r-d*this.view.height}this.projectionMatrix.makeOrthographic(a,o,r,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const nn=4,Br=[.125,.215,.35,.446,.526,.582],wi=20,Ks=new Wo,Gr=new jt;let qs=null,Zs=0,js=0;const bi=(1+Math.sqrt(5))/2,tn=1/bi,Hr=[new H(1,1,1),new H(-1,1,1),new H(1,1,-1),new H(-1,1,-1),new H(0,bi,tn),new H(0,bi,-tn),new H(tn,0,bi),new H(-tn,0,bi),new H(bi,tn,0),new H(-bi,tn,0)];class kr{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,n=100){qs=this._renderer.getRenderTarget(),Zs=this._renderer.getActiveCubeFace(),js=this._renderer.getActiveMipmapLevel(),this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(t,i,n,a),e>0&&this._blur(a,0,0,e),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Yr(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Wr(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(qs,Zs,js),t.scissorTest=!1,ts(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===cn||t.mapping===hn?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),qs=this._renderer.getRenderTarget(),Zs=this._renderer.getActiveCubeFace(),js=this._renderer.getActiveMipmapLevel();const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:ze,minFilter:ze,generateMipmaps:!1,type:An,format:Ye,colorSpace:ai,depthBuffer:!1},n=Vr(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Vr(t,e,i);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ku(a)),this._blurMaterial=Vu(a,t,e)}return n}_compileMaterial(t){const e=new te(this._lodPlanes[0],t);this._renderer.compile(e,Ks)}_sceneToCubeUV(t,e,i,n){const r=new Fe(90,1,e,i),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,p=d.toneMapping;d.getClearColor(Gr),d.toneMapping=mi,d.autoClear=!1;const v=new ds({name:"PMREM.Background",side:Pe,depthWrite:!1,depthTest:!1}),m=new te(new we,v);let g=!1;const u=t.background;u?u.isColor&&(v.color.copy(u),t.background=null,g=!0):(v.color.copy(Gr),g=!0);for(let h=0;h<6;h++){const _=h%3;_===0?(r.up.set(0,c[h],0),r.lookAt(l[h],0,0)):_===1?(r.up.set(0,0,c[h]),r.lookAt(0,l[h],0)):(r.up.set(0,c[h],0),r.lookAt(0,0,l[h]));const y=this._cubeSize;ts(n,_*y,h>2?y:0,y,y),d.setRenderTarget(n),g&&d.render(m,r),d.render(t,r)}m.geometry.dispose(),m.material.dispose(),d.toneMapping=p,d.autoClear=f,t.background=u}_textureToCubeUV(t,e){const i=this._renderer,n=t.mapping===cn||t.mapping===hn;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=Yr()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Wr());const a=n?this._cubemapMaterial:this._equirectMaterial,o=new te(this._lodPlanes[0],a),r=a.uniforms;r.envMap.value=t;const c=this._cubeSize;ts(e,0,0,3*c,2*c),i.setRenderTarget(e),i.render(o,Ks)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;for(let n=1;n<this._lodPlanes.length;n++){const a=Math.sqrt(this._sigmas[n]*this._sigmas[n]-this._sigmas[n-1]*this._sigmas[n-1]),o=Hr[(n-1)%Hr.length];this._blur(t,n-1,n,a,o)}e.autoClear=i}_blur(t,e,i,n,a){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,n,"latitudinal",a),this._halfBlur(o,t,i,i,n,"longitudinal",a)}_halfBlur(t,e,i,n,a,o,r){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,f=new te(this._lodPlanes[n],l),p=l.uniforms,v=this._sizeLods[i]-1,m=isFinite(a)?Math.PI/(2*v):2*Math.PI/(2*wi-1),g=a/m,u=isFinite(a)?1+Math.floor(d*g):wi;u>wi&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${u} samples when the maximum is set to ${wi}`);const h=[];let _=0;for(let A=0;A<wi;++A){const D=A/g,M=Math.exp(-D*D/2);h.push(M),A===0?_+=M:A<u&&(_+=2*M)}for(let A=0;A<h.length;A++)h[A]=h[A]/_;p.envMap.value=t.texture,p.samples.value=u,p.weights.value=h,p.latitudinal.value=o==="latitudinal",r&&(p.poleAxis.value=r);const{_lodMax:y}=this;p.dTheta.value=m,p.mipInt.value=y-i;const x=this._sizeLods[n],E=3*x*(n>y-nn?n-y+nn:0),b=4*(this._cubeSize-x);ts(e,E,b,3*x,2*x),c.setRenderTarget(e),c.render(f,Ks)}}function ku(s){const t=[],e=[],i=[];let n=s;const a=s-nn+1+Br.length;for(let o=0;o<a;o++){const r=Math.pow(2,n);e.push(r);let c=1/r;o>s-nn?c=Br[o-s+nn-1]:o===0&&(c=0),i.push(c);const l=1/(r-2),d=-l,f=1+l,p=[d,d,f,d,f,f,d,d,f,f,d,f],v=6,m=6,g=3,u=2,h=1,_=new Float32Array(g*m*v),y=new Float32Array(u*m*v),x=new Float32Array(h*m*v);for(let b=0;b<v;b++){const A=b%3*2/3-1,D=b>2?0:-1,M=[A,D,0,A+2/3,D,0,A+2/3,D+1,0,A,D,0,A+2/3,D+1,0,A,D+1,0];_.set(M,g*m*b),y.set(p,u*m*b);const T=[b,b,b,b,b,b];x.set(T,h*m*b)}const E=new qe;E.setAttribute("position",new Ke(_,g)),E.setAttribute("uv",new Ke(y,u)),E.setAttribute("faceIndex",new Ke(x,h)),t.push(E),n>nn&&n--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function Vr(s,t,e){const i=new Li(s,t,e);return i.texture.mapping=ms,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ts(s,t,e,i,n){s.viewport.set(t,e,i,n),s.scissor.set(t,e,i,n)}function Vu(s,t,e){const i=new Float32Array(wi),n=new H(0,1,0);return new Di({name:"SphericalGaussianBlur",defines:{n:wi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n}},vertexShader:Pa(),fragmentShader:`

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
	`}function Wu(s){let t=new WeakMap,e=null;function i(r){if(r&&r.isTexture){const c=r.mapping,l=c===la||c===ca,d=c===cn||c===hn;if(l||d)if(r.isRenderTargetTexture&&r.needsPMREMUpdate===!0){r.needsPMREMUpdate=!1;let f=t.get(r);return e===null&&(e=new kr(s)),f=l?e.fromEquirectangular(r,f):e.fromCubemap(r,f),t.set(r,f),f.texture}else{if(t.has(r))return t.get(r).texture;{const f=r.image;if(l&&f&&f.height>0||d&&f&&n(f)){e===null&&(e=new kr(s));const p=l?e.fromEquirectangular(r):e.fromCubemap(r);return t.set(r,p),r.addEventListener("dispose",a),p.texture}else return null}}}return r}function n(r){let c=0;const l=6;for(let d=0;d<l;d++)r[d]!==void 0&&c++;return c===l}function a(r){const c=r.target;c.removeEventListener("dispose",a);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function Yu(s){const t={};function e(i){if(t[i]!==void 0)return t[i];let n;switch(i){case"WEBGL_depth_texture":n=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":n=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":n=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":n=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:n=s.getExtension(i)}return t[i]=n,n}return{has:function(i){return e(i)!==null},init:function(i){i.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(i){const n=e(i);return n===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),n}}}function Xu(s,t,e,i){const n={},a=new WeakMap;function o(f){const p=f.target;p.index!==null&&t.remove(p.index);for(const m in p.attributes)t.remove(p.attributes[m]);for(const m in p.morphAttributes){const g=p.morphAttributes[m];for(let u=0,h=g.length;u<h;u++)t.remove(g[u])}p.removeEventListener("dispose",o),delete n[p.id];const v=a.get(p);v&&(t.remove(v),a.delete(p)),i.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,e.memory.geometries--}function r(f,p){return n[p.id]===!0||(p.addEventListener("dispose",o),n[p.id]=!0,e.memory.geometries++),p}function c(f){const p=f.attributes;for(const m in p)t.update(p[m],s.ARRAY_BUFFER);const v=f.morphAttributes;for(const m in v){const g=v[m];for(let u=0,h=g.length;u<h;u++)t.update(g[u],s.ARRAY_BUFFER)}}function l(f){const p=[],v=f.index,m=f.attributes.position;let g=0;if(v!==null){const _=v.array;g=v.version;for(let y=0,x=_.length;y<x;y+=3){const E=_[y+0],b=_[y+1],A=_[y+2];p.push(E,b,b,A,A,E)}}else if(m!==void 0){const _=m.array;g=m.version;for(let y=0,x=_.length/3-1;y<x;y+=3){const E=y+0,b=y+1,A=y+2;p.push(E,b,b,A,A,E)}}else return;const u=new(Do(p)?Bo:Fo)(p,1);u.version=g;const h=a.get(f);h&&t.remove(h),a.set(f,u)}function d(f){const p=a.get(f);if(p){const v=f.index;v!==null&&p.version<v.version&&l(f)}else l(f);return a.get(f)}return{get:r,update:c,getWireframeAttribute:d}}function $u(s,t,e,i){const n=i.isWebGL2;let a;function o(v){a=v}let r,c;function l(v){r=v.type,c=v.bytesPerElement}function d(v,m){s.drawElements(a,m,r,v*c),e.update(m,a,1)}function f(v,m,g){if(g===0)return;let u,h;if(n)u=s,h="drawElementsInstanced";else if(u=t.get("ANGLE_instanced_arrays"),h="drawElementsInstancedANGLE",u===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}u[h](a,m,r,v*c,g),e.update(m,a,g)}function p(v,m,g){if(g===0)return;const u=t.get("WEBGL_multi_draw");if(u===null)for(let h=0;h<g;h++)this.render(v[h]/c,m[h]);else{u.multiDrawElementsWEBGL(a,m,0,r,v,0,g);let h=0;for(let _=0;_<g;_++)h+=m[_];e.update(h,a,1)}}this.setMode=o,this.setIndex=l,this.render=d,this.renderInstances=f,this.renderMultiDraw=p}function Ku(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,o,r){switch(e.calls++,o){case s.TRIANGLES:e.triangles+=r*(a/3);break;case s.LINES:e.lines+=r*(a/2);break;case s.LINE_STRIP:e.lines+=r*(a-1);break;case s.LINE_LOOP:e.lines+=r*a;break;case s.POINTS:e.points+=r*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function n(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:n,update:i}}function qu(s,t){return s[0]-t[0]}function Zu(s,t){return Math.abs(t[1])-Math.abs(s[1])}function ju(s,t,e){const i={},n=new Float32Array(8),a=new WeakMap,o=new me,r=[];for(let l=0;l<8;l++)r[l]=[l,0];function c(l,d,f){const p=l.morphTargetInfluences;if(t.isWebGL2===!0){const m=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,g=m!==void 0?m.length:0;let u=a.get(d);if(u===void 0||u.count!==g){let U=function(){X.dispose(),a.delete(d),d.removeEventListener("dispose",U)};var v=U;u!==void 0&&u.texture.dispose();const y=d.morphAttributes.position!==void 0,x=d.morphAttributes.normal!==void 0,E=d.morphAttributes.color!==void 0,b=d.morphAttributes.position||[],A=d.morphAttributes.normal||[],D=d.morphAttributes.color||[];let M=0;y===!0&&(M=1),x===!0&&(M=2),E===!0&&(M=3);let T=d.attributes.position.count*M,I=1;T>t.maxTextureSize&&(I=Math.ceil(T/t.maxTextureSize),T=t.maxTextureSize);const N=new Float32Array(T*I*4*g),X=new Uo(N,T,I,g);X.type=fi,X.needsUpdate=!0;const R=M*4;for(let B=0;B<g;B++){const V=b[B],K=A[B],q=D[B],j=T*I*4*B;for(let it=0;it<V.count;it++){const nt=it*R;y===!0&&(o.fromBufferAttribute(V,it),N[j+nt+0]=o.x,N[j+nt+1]=o.y,N[j+nt+2]=o.z,N[j+nt+3]=0),x===!0&&(o.fromBufferAttribute(K,it),N[j+nt+4]=o.x,N[j+nt+5]=o.y,N[j+nt+6]=o.z,N[j+nt+7]=0),E===!0&&(o.fromBufferAttribute(q,it),N[j+nt+8]=o.x,N[j+nt+9]=o.y,N[j+nt+10]=o.z,N[j+nt+11]=q.itemSize===4?o.w:1)}}u={count:g,texture:X,size:new Nt(T,I)},a.set(d,u),d.addEventListener("dispose",U)}let h=0;for(let y=0;y<p.length;y++)h+=p[y];const _=d.morphTargetsRelative?1:1-h;f.getUniforms().setValue(s,"morphTargetBaseInfluence",_),f.getUniforms().setValue(s,"morphTargetInfluences",p),f.getUniforms().setValue(s,"morphTargetsTexture",u.texture,e),f.getUniforms().setValue(s,"morphTargetsTextureSize",u.size)}else{const m=p===void 0?0:p.length;let g=i[d.id];if(g===void 0||g.length!==m){g=[];for(let x=0;x<m;x++)g[x]=[x,0];i[d.id]=g}for(let x=0;x<m;x++){const E=g[x];E[0]=x,E[1]=p[x]}g.sort(Zu);for(let x=0;x<8;x++)x<m&&g[x][1]?(r[x][0]=g[x][0],r[x][1]=g[x][1]):(r[x][0]=Number.MAX_SAFE_INTEGER,r[x][1]=0);r.sort(qu);const u=d.morphAttributes.position,h=d.morphAttributes.normal;let _=0;for(let x=0;x<8;x++){const E=r[x],b=E[0],A=E[1];b!==Number.MAX_SAFE_INTEGER&&A?(u&&d.getAttribute("morphTarget"+x)!==u[b]&&d.setAttribute("morphTarget"+x,u[b]),h&&d.getAttribute("morphNormal"+x)!==h[b]&&d.setAttribute("morphNormal"+x,h[b]),n[x]=A,_+=A):(u&&d.hasAttribute("morphTarget"+x)===!0&&d.deleteAttribute("morphTarget"+x),h&&d.hasAttribute("morphNormal"+x)===!0&&d.deleteAttribute("morphNormal"+x),n[x]=0)}const y=d.morphTargetsRelative?1:1-_;f.getUniforms().setValue(s,"morphTargetBaseInfluence",y),f.getUniforms().setValue(s,"morphTargetInfluences",n)}}return{update:c}}function Ju(s,t,e,i){let n=new WeakMap;function a(c){const l=i.render.frame,d=c.geometry,f=t.get(c,d);if(n.get(f)!==l&&(t.update(f),n.set(f,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",r)===!1&&c.addEventListener("dispose",r),n.get(c)!==l&&(e.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,s.ARRAY_BUFFER),n.set(c,l))),c.isSkinnedMesh){const p=c.skeleton;n.get(p)!==l&&(p.update(),n.set(p,l))}return f}function o(){n=new WeakMap}function r(c){const l=c.target;l.removeEventListener("dispose",r),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:a,dispose:o}}class Yo extends De{constructor(t,e,i,n,a,o,r,c,l,d){if(d=d!==void 0?d:Ci,d!==Ci&&d!==dn)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&d===Ci&&(i=ui),i===void 0&&d===dn&&(i=Pi),super(null,n,a,o,r,c,d,i,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=r!==void 0?r:Te,this.minFilter=c!==void 0?c:Te,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Xo=new De,$o=new Yo(1,1);$o.compareFunction=Io;const Ko=new Uo,qo=new Uc,Zo=new ko,Xr=[],$r=[],Kr=new Float32Array(16),qr=new Float32Array(9),Zr=new Float32Array(4);function fn(s,t,e){const i=s[0];if(i<=0||i>0)return s;const n=t*e;let a=Xr[n];if(a===void 0&&(a=new Float32Array(n),Xr[n]=a),t!==0){i.toArray(a,0);for(let o=1,r=0;o!==t;++o)r+=e,s[o].toArray(a,r)}return a}function de(s,t){if(s.length!==t.length)return!1;for(let e=0,i=s.length;e<i;e++)if(s[e]!==t[e])return!1;return!0}function ue(s,t){for(let e=0,i=t.length;e<i;e++)s[e]=t[e]}function _s(s,t){let e=$r[t];e===void 0&&(e=new Int32Array(t),$r[t]=e);for(let i=0;i!==t;++i)e[i]=s.allocateTextureUnit();return e}function Qu(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function tf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(de(e,t))return;s.uniform2fv(this.addr,t),ue(e,t)}}function ef(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(de(e,t))return;s.uniform3fv(this.addr,t),ue(e,t)}}function nf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(de(e,t))return;s.uniform4fv(this.addr,t),ue(e,t)}}function sf(s,t){const e=this.cache,i=t.elements;if(i===void 0){if(de(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),ue(e,t)}else{if(de(e,i))return;Zr.set(i),s.uniformMatrix2fv(this.addr,!1,Zr),ue(e,i)}}function af(s,t){const e=this.cache,i=t.elements;if(i===void 0){if(de(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),ue(e,t)}else{if(de(e,i))return;qr.set(i),s.uniformMatrix3fv(this.addr,!1,qr),ue(e,i)}}function rf(s,t){const e=this.cache,i=t.elements;if(i===void 0){if(de(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),ue(e,t)}else{if(de(e,i))return;Kr.set(i),s.uniformMatrix4fv(this.addr,!1,Kr),ue(e,i)}}function of(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function lf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(de(e,t))return;s.uniform2iv(this.addr,t),ue(e,t)}}function cf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(de(e,t))return;s.uniform3iv(this.addr,t),ue(e,t)}}function hf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(de(e,t))return;s.uniform4iv(this.addr,t),ue(e,t)}}function df(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function uf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(de(e,t))return;s.uniform2uiv(this.addr,t),ue(e,t)}}function ff(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(de(e,t))return;s.uniform3uiv(this.addr,t),ue(e,t)}}function pf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(de(e,t))return;s.uniform4uiv(this.addr,t),ue(e,t)}}function mf(s,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n);const a=this.type===s.SAMPLER_2D_SHADOW?$o:Xo;e.setTexture2D(t||a,n)}function gf(s,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),e.setTexture3D(t||qo,n)}function vf(s,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),e.setTextureCube(t||Zo,n)}function _f(s,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),e.setTexture2DArray(t||Ko,n)}function yf(s){switch(s){case 5126:return Qu;case 35664:return tf;case 35665:return ef;case 35666:return nf;case 35674:return sf;case 35675:return af;case 35676:return rf;case 5124:case 35670:return of;case 35667:case 35671:return lf;case 35668:case 35672:return cf;case 35669:case 35673:return hf;case 5125:return df;case 36294:return uf;case 36295:return ff;case 36296:return pf;case 35678:case 36198:case 36298:case 36306:case 35682:return mf;case 35679:case 36299:case 36307:return gf;case 35680:case 36300:case 36308:case 36293:return vf;case 36289:case 36303:case 36311:case 36292:return _f}}function xf(s,t){s.uniform1fv(this.addr,t)}function Mf(s,t){const e=fn(t,this.size,2);s.uniform2fv(this.addr,e)}function Ef(s,t){const e=fn(t,this.size,3);s.uniform3fv(this.addr,e)}function Tf(s,t){const e=fn(t,this.size,4);s.uniform4fv(this.addr,e)}function Sf(s,t){const e=fn(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function bf(s,t){const e=fn(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function Af(s,t){const e=fn(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function wf(s,t){s.uniform1iv(this.addr,t)}function Pf(s,t){s.uniform2iv(this.addr,t)}function Cf(s,t){s.uniform3iv(this.addr,t)}function Rf(s,t){s.uniform4iv(this.addr,t)}function Lf(s,t){s.uniform1uiv(this.addr,t)}function If(s,t){s.uniform2uiv(this.addr,t)}function Df(s,t){s.uniform3uiv(this.addr,t)}function Of(s,t){s.uniform4uiv(this.addr,t)}function Nf(s,t,e){const i=this.cache,n=t.length,a=_s(e,n);de(i,a)||(s.uniform1iv(this.addr,a),ue(i,a));for(let o=0;o!==n;++o)e.setTexture2D(t[o]||Xo,a[o])}function Uf(s,t,e){const i=this.cache,n=t.length,a=_s(e,n);de(i,a)||(s.uniform1iv(this.addr,a),ue(i,a));for(let o=0;o!==n;++o)e.setTexture3D(t[o]||qo,a[o])}function zf(s,t,e){const i=this.cache,n=t.length,a=_s(e,n);de(i,a)||(s.uniform1iv(this.addr,a),ue(i,a));for(let o=0;o!==n;++o)e.setTextureCube(t[o]||Zo,a[o])}function Ff(s,t,e){const i=this.cache,n=t.length,a=_s(e,n);de(i,a)||(s.uniform1iv(this.addr,a),ue(i,a));for(let o=0;o!==n;++o)e.setTexture2DArray(t[o]||Ko,a[o])}function Bf(s){switch(s){case 5126:return xf;case 35664:return Mf;case 35665:return Ef;case 35666:return Tf;case 35674:return Sf;case 35675:return bf;case 35676:return Af;case 5124:case 35670:return wf;case 35667:case 35671:return Pf;case 35668:case 35672:return Cf;case 35669:case 35673:return Rf;case 5125:return Lf;case 36294:return If;case 36295:return Df;case 36296:return Of;case 35678:case 36198:case 36298:case 36306:case 35682:return Nf;case 35679:case 36299:case 36307:return Uf;case 35680:case 36300:case 36308:case 36293:return zf;case 36289:case 36303:case 36311:case 36292:return Ff}}class Gf{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=yf(e.type)}}class Hf{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Bf(e.type)}}class kf{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const n=this.seq;for(let a=0,o=n.length;a!==o;++a){const r=n[a];r.setValue(t,e[r.id],i)}}}const Js=/(\w+)(\])?(\[|\.)?/g;function jr(s,t){s.seq.push(t),s.map[t.id]=t}function Vf(s,t,e){const i=s.name,n=i.length;for(Js.lastIndex=0;;){const a=Js.exec(i),o=Js.lastIndex;let r=a[1];const c=a[2]==="]",l=a[3];if(c&&(r=r|0),l===void 0||l==="["&&o+2===n){jr(e,l===void 0?new Gf(r,s,t):new Hf(r,s,t));break}else{let f=e.map[r];f===void 0&&(f=new kf(r),jr(e,f)),e=f}}}class ss{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let n=0;n<i;++n){const a=t.getActiveUniform(e,n),o=t.getUniformLocation(e,a.name);Vf(a,o,this)}}setValue(t,e,i,n){const a=this.map[e];a!==void 0&&a.setValue(t,i,n)}setOptional(t,e,i){const n=e[i];n!==void 0&&this.setValue(t,i,n)}static upload(t,e,i,n){for(let a=0,o=e.length;a!==o;++a){const r=e[a],c=i[r.id];c.needsUpdate!==!1&&r.setValue(t,c.value,n)}}static seqWithValue(t,e){const i=[];for(let n=0,a=t.length;n!==a;++n){const o=t[n];o.id in e&&i.push(o)}return i}}function Jr(s,t,e){const i=s.createShader(t);return s.shaderSource(i,e),s.compileShader(i),i}const Wf=37297;let Yf=0;function Xf(s,t){const e=s.split(`
`),i=[],n=Math.max(t-6,0),a=Math.min(t+6,e.length);for(let o=n;o<a;o++){const r=o+1;i.push(`${r===t?">":" "} ${r}: ${e[o]}`)}return i.join(`
`)}function $f(s){const t=Qt.getPrimaries(Qt.workingColorSpace),e=Qt.getPrimaries(s);let i;switch(t===e?i="":t===ls&&e===os?i="LinearDisplayP3ToLinearSRGB":t===os&&e===ls&&(i="LinearSRGBToLinearDisplayP3"),s){case ai:case gs:return[i,"LinearTransferOETF"];case ge:case Ea:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[i,"LinearTransferOETF"]}}function Qr(s,t,e){const i=s.getShaderParameter(t,s.COMPILE_STATUS),n=s.getShaderInfoLog(t).trim();if(i&&n==="")return"";const a=/ERROR: 0:(\d+)/.exec(n);if(a){const o=parseInt(a[1]);return e.toUpperCase()+`

`+n+`

`+Xf(s.getShaderSource(t),o)}else return n}function Kf(s,t){const e=$f(t);return`vec4 ${s}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function qf(s,t){let e;switch(t){case sc:e="Linear";break;case ac:e="Reinhard";break;case rc:e="OptimizedCineon";break;case oc:e="ACESFilmic";break;case cc:e="AgX";break;case lc:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function Zf(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(sn).join(`
`)}function jf(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(sn).join(`
`)}function Jf(s){const t=[];for(const e in s){const i=s[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function Qf(s,t){const e={},i=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){const a=s.getActiveAttrib(t,n),o=a.name;let r=1;a.type===s.FLOAT_MAT2&&(r=2),a.type===s.FLOAT_MAT3&&(r=3),a.type===s.FLOAT_MAT4&&(r=4),e[o]={type:a.type,location:s.getAttribLocation(t,o),locationSize:r}}return e}function sn(s){return s!==""}function to(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function eo(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const tp=/^[ \t]*#include +<([\w\d./]+)>/gm;function ma(s){return s.replace(tp,ip)}const ep=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function ip(s,t){let e=kt[t];if(e===void 0){const i=ep.get(t);if(i!==void 0)e=kt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return ma(e)}const np=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function io(s){return s.replace(np,sp)}function sp(s,t,e,i){let n="";for(let a=parseInt(t);a<parseInt(e);a++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return n}function no(s){let t="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function ap(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Mo?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===Il?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===ii&&(t="SHADOWMAP_TYPE_VSM"),t}function rp(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case cn:case hn:t="ENVMAP_TYPE_CUBE";break;case ms:t="ENVMAP_TYPE_CUBE_UV";break}return t}function op(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case hn:t="ENVMAP_MODE_REFRACTION";break}return t}function lp(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case xa:t="ENVMAP_BLENDING_MULTIPLY";break;case ic:t="ENVMAP_BLENDING_MIX";break;case nc:t="ENVMAP_BLENDING_ADD";break}return t}function cp(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function hp(s,t,e,i){const n=s.getContext(),a=e.defines;let o=e.vertexShader,r=e.fragmentShader;const c=ap(e),l=rp(e),d=op(e),f=lp(e),p=cp(e),v=e.isWebGL2?"":Zf(e),m=jf(e),g=Jf(a),u=n.createProgram();let h,_,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(h=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(sn).join(`
`),h.length>0&&(h+=`
`),_=[v,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(sn).join(`
`),_.length>0&&(_+=`
`)):(h=[no(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+d:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(sn).join(`
`),_=[v,no(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+d:"",e.envMap?"#define "+f:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==mi?"#define TONE_MAPPING":"",e.toneMapping!==mi?kt.tonemapping_pars_fragment:"",e.toneMapping!==mi?qf("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",kt.colorspace_pars_fragment,Kf("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(sn).join(`
`)),o=ma(o),o=to(o,e),o=eo(o,e),r=ma(r),r=to(r,e),r=eo(r,e),o=io(o),r=io(r),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,h=[m,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+h,_=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===Mr?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Mr?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const x=y+h+o,E=y+_+r,b=Jr(n,n.VERTEX_SHADER,x),A=Jr(n,n.FRAGMENT_SHADER,E);n.attachShader(u,b),n.attachShader(u,A),e.index0AttributeName!==void 0?n.bindAttribLocation(u,0,e.index0AttributeName):e.morphTargets===!0&&n.bindAttribLocation(u,0,"position"),n.linkProgram(u);function D(N){if(s.debug.checkShaderErrors){const X=n.getProgramInfoLog(u).trim(),R=n.getShaderInfoLog(b).trim(),U=n.getShaderInfoLog(A).trim();let B=!0,V=!0;if(n.getProgramParameter(u,n.LINK_STATUS)===!1)if(B=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(n,u,b,A);else{const K=Qr(n,b,"vertex"),q=Qr(n,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(u,n.VALIDATE_STATUS)+`

Program Info Log: `+X+`
`+K+`
`+q)}else X!==""?console.warn("THREE.WebGLProgram: Program Info Log:",X):(R===""||U==="")&&(V=!1);V&&(N.diagnostics={runnable:B,programLog:X,vertexShader:{log:R,prefix:h},fragmentShader:{log:U,prefix:_}})}n.deleteShader(b),n.deleteShader(A),M=new ss(n,u),T=Qf(n,u)}let M;this.getUniforms=function(){return M===void 0&&D(this),M};let T;this.getAttributes=function(){return T===void 0&&D(this),T};let I=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=n.getProgramParameter(u,Wf)),I},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(u),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Yf++,this.cacheKey=t,this.usedTimes=1,this.program=u,this.vertexShader=b,this.fragmentShader=A,this}let dp=0;class up{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,n=this._getShaderStage(e),a=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(n)===!1&&(o.add(n),n.usedTimes++),o.has(a)===!1&&(o.add(a),a.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new fp(t),e.set(t,i)),i}}class fp{constructor(t){this.id=dp++,this.code=t,this.usedTimes=0}}function pp(s,t,e,i,n,a,o){const r=new ba,c=new up,l=[],d=n.isWebGL2,f=n.logarithmicDepthBuffer,p=n.vertexTextures;let v=n.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(M){return M===0?"uv":`uv${M}`}function u(M,T,I,N,X){const R=N.fog,U=X.geometry,B=M.isMeshStandardMaterial?N.environment:null,V=(M.isMeshStandardMaterial?e:t).get(M.envMap||B),K=V&&V.mapping===ms?V.image.height:null,q=m[M.type];M.precision!==null&&(v=n.getMaxPrecision(M.precision),v!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",v,"instead."));const j=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,it=j!==void 0?j.length:0;let nt=0;U.morphAttributes.position!==void 0&&(nt=1),U.morphAttributes.normal!==void 0&&(nt=2),U.morphAttributes.color!==void 0&&(nt=3);let Z,C,G,$;if(q){const re=$e[q];Z=re.vertexShader,C=re.fragmentShader}else Z=M.vertexShader,C=M.fragmentShader,c.update(M),G=c.getVertexShaderID(M),$=c.getFragmentShaderID(M);const z=s.getRenderTarget(),Y=X.isInstancedMesh===!0,st=X.isBatchedMesh===!0,ut=!!M.map,bt=!!M.matcap,F=!!V,At=!!M.aoMap,mt=!!M.lightMap,vt=!!M.bumpMap,ht=!!M.normalMap,Bt=!!M.displacementMap,Tt=!!M.emissiveMap,w=!!M.metalnessMap,S=!!M.roughnessMap,k=M.anisotropy>0,rt=M.clearcoat>0,at=M.iridescence>0,ot=M.sheen>0,gt=M.transmission>0,dt=k&&!!M.anisotropyMap,xt=rt&&!!M.clearcoatMap,Rt=rt&&!!M.clearcoatNormalMap,Ut=rt&&!!M.clearcoatRoughnessMap,lt=at&&!!M.iridescenceMap,Jt=at&&!!M.iridescenceThicknessMap,Vt=ot&&!!M.sheenColorMap,zt=ot&&!!M.sheenRoughnessMap,Ct=!!M.specularMap,Mt=!!M.specularColorMap,L=!!M.specularIntensityMap,ft=gt&&!!M.transmissionMap,wt=gt&&!!M.thicknessMap,St=!!M.gradientMap,ct=!!M.alphaMap,O=M.alphaTest>0,pt=!!M.alphaHash,yt=!!M.extensions,It=!!U.attributes.uv1,Lt=!!U.attributes.uv2,Kt=!!U.attributes.uv3;let qt=mi;return M.toneMapped&&(z===null||z.isXRRenderTarget===!0)&&(qt=s.toneMapping),{isWebGL2:d,shaderID:q,shaderType:M.type,shaderName:M.name,vertexShader:Z,fragmentShader:C,defines:M.defines,customVertexShaderID:G,customFragmentShaderID:$,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:v,batching:st,instancing:Y,instancingColor:Y&&X.instanceColor!==null,supportsVertexTextures:p,outputColorSpace:z===null?s.outputColorSpace:z.isXRRenderTarget===!0?z.texture.colorSpace:ai,map:ut,matcap:bt,envMap:F,envMapMode:F&&V.mapping,envMapCubeUVHeight:K,aoMap:At,lightMap:mt,bumpMap:vt,normalMap:ht,displacementMap:p&&Bt,emissiveMap:Tt,normalMapObjectSpace:ht&&M.normalMapType===Mc,normalMapTangentSpace:ht&&M.normalMapType===Lo,metalnessMap:w,roughnessMap:S,anisotropy:k,anisotropyMap:dt,clearcoat:rt,clearcoatMap:xt,clearcoatNormalMap:Rt,clearcoatRoughnessMap:Ut,iridescence:at,iridescenceMap:lt,iridescenceThicknessMap:Jt,sheen:ot,sheenColorMap:Vt,sheenRoughnessMap:zt,specularMap:Ct,specularColorMap:Mt,specularIntensityMap:L,transmission:gt,transmissionMap:ft,thicknessMap:wt,gradientMap:St,opaque:M.transparent===!1&&M.blending===on,alphaMap:ct,alphaTest:O,alphaHash:pt,combine:M.combine,mapUv:ut&&g(M.map.channel),aoMapUv:At&&g(M.aoMap.channel),lightMapUv:mt&&g(M.lightMap.channel),bumpMapUv:vt&&g(M.bumpMap.channel),normalMapUv:ht&&g(M.normalMap.channel),displacementMapUv:Bt&&g(M.displacementMap.channel),emissiveMapUv:Tt&&g(M.emissiveMap.channel),metalnessMapUv:w&&g(M.metalnessMap.channel),roughnessMapUv:S&&g(M.roughnessMap.channel),anisotropyMapUv:dt&&g(M.anisotropyMap.channel),clearcoatMapUv:xt&&g(M.clearcoatMap.channel),clearcoatNormalMapUv:Rt&&g(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ut&&g(M.clearcoatRoughnessMap.channel),iridescenceMapUv:lt&&g(M.iridescenceMap.channel),iridescenceThicknessMapUv:Jt&&g(M.iridescenceThicknessMap.channel),sheenColorMapUv:Vt&&g(M.sheenColorMap.channel),sheenRoughnessMapUv:zt&&g(M.sheenRoughnessMap.channel),specularMapUv:Ct&&g(M.specularMap.channel),specularColorMapUv:Mt&&g(M.specularColorMap.channel),specularIntensityMapUv:L&&g(M.specularIntensityMap.channel),transmissionMapUv:ft&&g(M.transmissionMap.channel),thicknessMapUv:wt&&g(M.thicknessMap.channel),alphaMapUv:ct&&g(M.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(ht||k),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,vertexUv1s:It,vertexUv2s:Lt,vertexUv3s:Kt,pointsUvs:X.isPoints===!0&&!!U.attributes.uv&&(ut||ct),fog:!!R,useFog:M.fog===!0,fogExp2:R&&R.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:X.isSkinnedMesh===!0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:it,morphTextureStride:nt,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:s.shadowMap.enabled&&I.length>0,shadowMapType:s.shadowMap.type,toneMapping:qt,useLegacyLights:s._useLegacyLights,decodeVideoTexture:ut&&M.map.isVideoTexture===!0&&Qt.getTransfer(M.map.colorSpace)===ee,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===ni,flipSided:M.side===Pe,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:yt&&M.extensions.derivatives===!0,extensionFragDepth:yt&&M.extensions.fragDepth===!0,extensionDrawBuffers:yt&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:yt&&M.extensions.shaderTextureLOD===!0,extensionClipCullDistance:yt&&M.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:d||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:d||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:d||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()}}function h(M){const T=[];if(M.shaderID?T.push(M.shaderID):(T.push(M.customVertexShaderID),T.push(M.customFragmentShaderID)),M.defines!==void 0)for(const I in M.defines)T.push(I),T.push(M.defines[I]);return M.isRawShaderMaterial===!1&&(_(T,M),y(T,M),T.push(s.outputColorSpace)),T.push(M.customProgramCacheKey),T.join()}function _(M,T){M.push(T.precision),M.push(T.outputColorSpace),M.push(T.envMapMode),M.push(T.envMapCubeUVHeight),M.push(T.mapUv),M.push(T.alphaMapUv),M.push(T.lightMapUv),M.push(T.aoMapUv),M.push(T.bumpMapUv),M.push(T.normalMapUv),M.push(T.displacementMapUv),M.push(T.emissiveMapUv),M.push(T.metalnessMapUv),M.push(T.roughnessMapUv),M.push(T.anisotropyMapUv),M.push(T.clearcoatMapUv),M.push(T.clearcoatNormalMapUv),M.push(T.clearcoatRoughnessMapUv),M.push(T.iridescenceMapUv),M.push(T.iridescenceThicknessMapUv),M.push(T.sheenColorMapUv),M.push(T.sheenRoughnessMapUv),M.push(T.specularMapUv),M.push(T.specularColorMapUv),M.push(T.specularIntensityMapUv),M.push(T.transmissionMapUv),M.push(T.thicknessMapUv),M.push(T.combine),M.push(T.fogExp2),M.push(T.sizeAttenuation),M.push(T.morphTargetsCount),M.push(T.morphAttributeCount),M.push(T.numDirLights),M.push(T.numPointLights),M.push(T.numSpotLights),M.push(T.numSpotLightMaps),M.push(T.numHemiLights),M.push(T.numRectAreaLights),M.push(T.numDirLightShadows),M.push(T.numPointLightShadows),M.push(T.numSpotLightShadows),M.push(T.numSpotLightShadowsWithMaps),M.push(T.numLightProbes),M.push(T.shadowMapType),M.push(T.toneMapping),M.push(T.numClippingPlanes),M.push(T.numClipIntersection),M.push(T.depthPacking)}function y(M,T){r.disableAll(),T.isWebGL2&&r.enable(0),T.supportsVertexTextures&&r.enable(1),T.instancing&&r.enable(2),T.instancingColor&&r.enable(3),T.matcap&&r.enable(4),T.envMap&&r.enable(5),T.normalMapObjectSpace&&r.enable(6),T.normalMapTangentSpace&&r.enable(7),T.clearcoat&&r.enable(8),T.iridescence&&r.enable(9),T.alphaTest&&r.enable(10),T.vertexColors&&r.enable(11),T.vertexAlphas&&r.enable(12),T.vertexUv1s&&r.enable(13),T.vertexUv2s&&r.enable(14),T.vertexUv3s&&r.enable(15),T.vertexTangents&&r.enable(16),T.anisotropy&&r.enable(17),T.alphaHash&&r.enable(18),T.batching&&r.enable(19),M.push(r.mask),r.disableAll(),T.fog&&r.enable(0),T.useFog&&r.enable(1),T.flatShading&&r.enable(2),T.logarithmicDepthBuffer&&r.enable(3),T.skinning&&r.enable(4),T.morphTargets&&r.enable(5),T.morphNormals&&r.enable(6),T.morphColors&&r.enable(7),T.premultipliedAlpha&&r.enable(8),T.shadowMapEnabled&&r.enable(9),T.useLegacyLights&&r.enable(10),T.doubleSided&&r.enable(11),T.flipSided&&r.enable(12),T.useDepthPacking&&r.enable(13),T.dithering&&r.enable(14),T.transmission&&r.enable(15),T.sheen&&r.enable(16),T.opaque&&r.enable(17),T.pointsUvs&&r.enable(18),T.decodeVideoTexture&&r.enable(19),M.push(r.mask)}function x(M){const T=m[M.type];let I;if(T){const N=$e[T];I=qc.clone(N.uniforms)}else I=M.uniforms;return I}function E(M,T){let I;for(let N=0,X=l.length;N<X;N++){const R=l[N];if(R.cacheKey===T){I=R,++I.usedTimes;break}}return I===void 0&&(I=new hp(s,T,M,a),l.push(I)),I}function b(M){if(--M.usedTimes===0){const T=l.indexOf(M);l[T]=l[l.length-1],l.pop(),M.destroy()}}function A(M){c.remove(M)}function D(){c.dispose()}return{getParameters:u,getProgramCacheKey:h,getUniforms:x,acquireProgram:E,releaseProgram:b,releaseShaderCache:A,programs:l,dispose:D}}function mp(){let s=new WeakMap;function t(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function e(a){s.delete(a)}function i(a,o,r){s.get(a)[o]=r}function n(){s=new WeakMap}return{get:t,remove:e,update:i,dispose:n}}function gp(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function so(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function ao(){const s=[];let t=0;const e=[],i=[],n=[];function a(){t=0,e.length=0,i.length=0,n.length=0}function o(f,p,v,m,g,u){let h=s[t];return h===void 0?(h={id:f.id,object:f,geometry:p,material:v,groupOrder:m,renderOrder:f.renderOrder,z:g,group:u},s[t]=h):(h.id=f.id,h.object=f,h.geometry=p,h.material=v,h.groupOrder=m,h.renderOrder=f.renderOrder,h.z=g,h.group=u),t++,h}function r(f,p,v,m,g,u){const h=o(f,p,v,m,g,u);v.transmission>0?i.push(h):v.transparent===!0?n.push(h):e.push(h)}function c(f,p,v,m,g,u){const h=o(f,p,v,m,g,u);v.transmission>0?i.unshift(h):v.transparent===!0?n.unshift(h):e.unshift(h)}function l(f,p){e.length>1&&e.sort(f||gp),i.length>1&&i.sort(p||so),n.length>1&&n.sort(p||so)}function d(){for(let f=t,p=s.length;f<p;f++){const v=s[f];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:e,transmissive:i,transparent:n,init:a,push:r,unshift:c,finish:d,sort:l}}function vp(){let s=new WeakMap;function t(i,n){const a=s.get(i);let o;return a===void 0?(o=new ao,s.set(i,[o])):n>=a.length?(o=new ao,a.push(o)):o=a[n],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function _p(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new H,color:new jt};break;case"SpotLight":e={position:new H,direction:new H,color:new jt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new H,color:new jt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new H,skyColor:new jt,groundColor:new jt};break;case"RectAreaLight":e={color:new jt,position:new H,halfWidth:new H,halfHeight:new H};break}return s[t.id]=e,e}}}function yp(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let xp=0;function Mp(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function Ep(s,t){const e=new _p,i=yp(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)n.probe.push(new H);const a=new H,o=new he,r=new he;function c(d,f){let p=0,v=0,m=0;for(let N=0;N<9;N++)n.probe[N].set(0,0,0);let g=0,u=0,h=0,_=0,y=0,x=0,E=0,b=0,A=0,D=0,M=0;d.sort(Mp);const T=f===!0?Math.PI:1;for(let N=0,X=d.length;N<X;N++){const R=d[N],U=R.color,B=R.intensity,V=R.distance,K=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)p+=U.r*B*T,v+=U.g*B*T,m+=U.b*B*T;else if(R.isLightProbe){for(let q=0;q<9;q++)n.probe[q].addScaledVector(R.sh.coefficients[q],B);M++}else if(R.isDirectionalLight){const q=e.get(R);if(q.color.copy(R.color).multiplyScalar(R.intensity*T),R.castShadow){const j=R.shadow,it=i.get(R);it.shadowBias=j.bias,it.shadowNormalBias=j.normalBias,it.shadowRadius=j.radius,it.shadowMapSize=j.mapSize,n.directionalShadow[g]=it,n.directionalShadowMap[g]=K,n.directionalShadowMatrix[g]=R.shadow.matrix,x++}n.directional[g]=q,g++}else if(R.isSpotLight){const q=e.get(R);q.position.setFromMatrixPosition(R.matrixWorld),q.color.copy(U).multiplyScalar(B*T),q.distance=V,q.coneCos=Math.cos(R.angle),q.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),q.decay=R.decay,n.spot[h]=q;const j=R.shadow;if(R.map&&(n.spotLightMap[A]=R.map,A++,j.updateMatrices(R),R.castShadow&&D++),n.spotLightMatrix[h]=j.matrix,R.castShadow){const it=i.get(R);it.shadowBias=j.bias,it.shadowNormalBias=j.normalBias,it.shadowRadius=j.radius,it.shadowMapSize=j.mapSize,n.spotShadow[h]=it,n.spotShadowMap[h]=K,b++}h++}else if(R.isRectAreaLight){const q=e.get(R);q.color.copy(U).multiplyScalar(B),q.halfWidth.set(R.width*.5,0,0),q.halfHeight.set(0,R.height*.5,0),n.rectArea[_]=q,_++}else if(R.isPointLight){const q=e.get(R);if(q.color.copy(R.color).multiplyScalar(R.intensity*T),q.distance=R.distance,q.decay=R.decay,R.castShadow){const j=R.shadow,it=i.get(R);it.shadowBias=j.bias,it.shadowNormalBias=j.normalBias,it.shadowRadius=j.radius,it.shadowMapSize=j.mapSize,it.shadowCameraNear=j.camera.near,it.shadowCameraFar=j.camera.far,n.pointShadow[u]=it,n.pointShadowMap[u]=K,n.pointShadowMatrix[u]=R.shadow.matrix,E++}n.point[u]=q,u++}else if(R.isHemisphereLight){const q=e.get(R);q.skyColor.copy(R.color).multiplyScalar(B*T),q.groundColor.copy(R.groundColor).multiplyScalar(B*T),n.hemi[y]=q,y++}}_>0&&(t.isWebGL2?s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=_t.LTC_FLOAT_1,n.rectAreaLTC2=_t.LTC_FLOAT_2):(n.rectAreaLTC1=_t.LTC_HALF_1,n.rectAreaLTC2=_t.LTC_HALF_2):s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=_t.LTC_FLOAT_1,n.rectAreaLTC2=_t.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(n.rectAreaLTC1=_t.LTC_HALF_1,n.rectAreaLTC2=_t.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),n.ambient[0]=p,n.ambient[1]=v,n.ambient[2]=m;const I=n.hash;(I.directionalLength!==g||I.pointLength!==u||I.spotLength!==h||I.rectAreaLength!==_||I.hemiLength!==y||I.numDirectionalShadows!==x||I.numPointShadows!==E||I.numSpotShadows!==b||I.numSpotMaps!==A||I.numLightProbes!==M)&&(n.directional.length=g,n.spot.length=h,n.rectArea.length=_,n.point.length=u,n.hemi.length=y,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=E,n.pointShadowMap.length=E,n.spotShadow.length=b,n.spotShadowMap.length=b,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=E,n.spotLightMatrix.length=b+A-D,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=D,n.numLightProbes=M,I.directionalLength=g,I.pointLength=u,I.spotLength=h,I.rectAreaLength=_,I.hemiLength=y,I.numDirectionalShadows=x,I.numPointShadows=E,I.numSpotShadows=b,I.numSpotMaps=A,I.numLightProbes=M,n.version=xp++)}function l(d,f){let p=0,v=0,m=0,g=0,u=0;const h=f.matrixWorldInverse;for(let _=0,y=d.length;_<y;_++){const x=d[_];if(x.isDirectionalLight){const E=n.directional[p];E.direction.setFromMatrixPosition(x.matrixWorld),a.setFromMatrixPosition(x.target.matrixWorld),E.direction.sub(a),E.direction.transformDirection(h),p++}else if(x.isSpotLight){const E=n.spot[m];E.position.setFromMatrixPosition(x.matrixWorld),E.position.applyMatrix4(h),E.direction.setFromMatrixPosition(x.matrixWorld),a.setFromMatrixPosition(x.target.matrixWorld),E.direction.sub(a),E.direction.transformDirection(h),m++}else if(x.isRectAreaLight){const E=n.rectArea[g];E.position.setFromMatrixPosition(x.matrixWorld),E.position.applyMatrix4(h),r.identity(),o.copy(x.matrixWorld),o.premultiply(h),r.extractRotation(o),E.halfWidth.set(x.width*.5,0,0),E.halfHeight.set(0,x.height*.5,0),E.halfWidth.applyMatrix4(r),E.halfHeight.applyMatrix4(r),g++}else if(x.isPointLight){const E=n.point[v];E.position.setFromMatrixPosition(x.matrixWorld),E.position.applyMatrix4(h),v++}else if(x.isHemisphereLight){const E=n.hemi[u];E.direction.setFromMatrixPosition(x.matrixWorld),E.direction.transformDirection(h),u++}}}return{setup:c,setupView:l,state:n}}function ro(s,t){const e=new Ep(s,t),i=[],n=[];function a(){i.length=0,n.length=0}function o(f){i.push(f)}function r(f){n.push(f)}function c(f){e.setup(i,f)}function l(f){e.setupView(i,f)}return{init:a,state:{lightsArray:i,shadowsArray:n,lights:e},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:r}}function Tp(s,t){let e=new WeakMap;function i(a,o=0){const r=e.get(a);let c;return r===void 0?(c=new ro(s,t),e.set(a,[c])):o>=r.length?(c=new ro(s,t),r.push(c)):c=r[o],c}function n(){e=new WeakMap}return{get:i,dispose:n}}class Sp extends Rn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=yc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class bp extends Rn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Ap=`void main() {
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
}`;function Pp(s,t,e){let i=new Aa;const n=new Nt,a=new Nt,o=new me,r=new Sp({depthPacking:xc}),c=new bp,l={},d=e.maxTextureSize,f={[vi]:Pe,[Pe]:vi,[ni]:ni},p=new Di({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Nt},radius:{value:4}},vertexShader:Ap,fragmentShader:wp}),v=p.clone();v.defines.HORIZONTAL_PASS=1;const m=new qe;m.setAttribute("position",new Ke(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new te(m,p),u=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Mo;let h=this.type;this.render=function(b,A,D){if(u.enabled===!1||u.autoUpdate===!1&&u.needsUpdate===!1||b.length===0)return;const M=s.getRenderTarget(),T=s.getActiveCubeFace(),I=s.getActiveMipmapLevel(),N=s.state;N.setBlending(pi),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const X=h!==ii&&this.type===ii,R=h===ii&&this.type!==ii;for(let U=0,B=b.length;U<B;U++){const V=b[U],K=V.shadow;if(K===void 0){console.warn("THREE.WebGLShadowMap:",V,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;n.copy(K.mapSize);const q=K.getFrameExtents();if(n.multiply(q),a.copy(K.mapSize),(n.x>d||n.y>d)&&(n.x>d&&(a.x=Math.floor(d/q.x),n.x=a.x*q.x,K.mapSize.x=a.x),n.y>d&&(a.y=Math.floor(d/q.y),n.y=a.y*q.y,K.mapSize.y=a.y)),K.map===null||X===!0||R===!0){const it=this.type!==ii?{minFilter:Te,magFilter:Te}:{};K.map!==null&&K.map.dispose(),K.map=new Li(n.x,n.y,it),K.map.texture.name=V.name+".shadowMap",K.camera.updateProjectionMatrix()}s.setRenderTarget(K.map),s.clear();const j=K.getViewportCount();for(let it=0;it<j;it++){const nt=K.getViewport(it);o.set(a.x*nt.x,a.y*nt.y,a.x*nt.z,a.y*nt.w),N.viewport(o),K.updateMatrices(V,it),i=K.getFrustum(),x(A,D,K.camera,V,this.type)}K.isPointLightShadow!==!0&&this.type===ii&&_(K,D),K.needsUpdate=!1}h=this.type,u.needsUpdate=!1,s.setRenderTarget(M,T,I)};function _(b,A){const D=t.update(g);p.defines.VSM_SAMPLES!==b.blurSamples&&(p.defines.VSM_SAMPLES=b.blurSamples,v.defines.VSM_SAMPLES=b.blurSamples,p.needsUpdate=!0,v.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new Li(n.x,n.y)),p.uniforms.shadow_pass.value=b.map.texture,p.uniforms.resolution.value=b.mapSize,p.uniforms.radius.value=b.radius,s.setRenderTarget(b.mapPass),s.clear(),s.renderBufferDirect(A,null,D,p,g,null),v.uniforms.shadow_pass.value=b.mapPass.texture,v.uniforms.resolution.value=b.mapSize,v.uniforms.radius.value=b.radius,s.setRenderTarget(b.map),s.clear(),s.renderBufferDirect(A,null,D,v,g,null)}function y(b,A,D,M){let T=null;const I=D.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(I!==void 0)T=I;else if(T=D.isPointLight===!0?c:r,s.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const N=T.uuid,X=A.uuid;let R=l[N];R===void 0&&(R={},l[N]=R);let U=R[X];U===void 0&&(U=T.clone(),R[X]=U,A.addEventListener("dispose",E)),T=U}if(T.visible=A.visible,T.wireframe=A.wireframe,M===ii?T.side=A.shadowSide!==null?A.shadowSide:A.side:T.side=A.shadowSide!==null?A.shadowSide:f[A.side],T.alphaMap=A.alphaMap,T.alphaTest=A.alphaTest,T.map=A.map,T.clipShadows=A.clipShadows,T.clippingPlanes=A.clippingPlanes,T.clipIntersection=A.clipIntersection,T.displacementMap=A.displacementMap,T.displacementScale=A.displacementScale,T.displacementBias=A.displacementBias,T.wireframeLinewidth=A.wireframeLinewidth,T.linewidth=A.linewidth,D.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const N=s.properties.get(T);N.light=D}return T}function x(b,A,D,M,T){if(b.visible===!1)return;if(b.layers.test(A.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&T===ii)&&(!b.frustumCulled||i.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,b.matrixWorld);const X=t.update(b),R=b.material;if(Array.isArray(R)){const U=X.groups;for(let B=0,V=U.length;B<V;B++){const K=U[B],q=R[K.materialIndex];if(q&&q.visible){const j=y(b,q,M,T);b.onBeforeShadow(s,b,A,D,X,j,K),s.renderBufferDirect(D,null,X,j,b,K),b.onAfterShadow(s,b,A,D,X,j,K)}}}else if(R.visible){const U=y(b,R,M,T);b.onBeforeShadow(s,b,A,D,X,U,null),s.renderBufferDirect(D,null,X,U,b,null),b.onAfterShadow(s,b,A,D,X,U,null)}}const N=b.children;for(let X=0,R=N.length;X<R;X++)x(N[X],A,D,M,T)}function E(b){b.target.removeEventListener("dispose",E);for(const D in l){const M=l[D],T=b.target.uuid;T in M&&(M[T].dispose(),delete M[T])}}}function Cp(s,t,e){const i=e.isWebGL2;function n(){let O=!1;const pt=new me;let yt=null;const It=new me(0,0,0,0);return{setMask:function(Lt){yt!==Lt&&!O&&(s.colorMask(Lt,Lt,Lt,Lt),yt=Lt)},setLocked:function(Lt){O=Lt},setClear:function(Lt,Kt,qt,se,re){re===!0&&(Lt*=se,Kt*=se,qt*=se),pt.set(Lt,Kt,qt,se),It.equals(pt)===!1&&(s.clearColor(Lt,Kt,qt,se),It.copy(pt))},reset:function(){O=!1,yt=null,It.set(-1,0,0,0)}}}function a(){let O=!1,pt=null,yt=null,It=null;return{setTest:function(Lt){Lt?st(s.DEPTH_TEST):ut(s.DEPTH_TEST)},setMask:function(Lt){pt!==Lt&&!O&&(s.depthMask(Lt),pt=Lt)},setFunc:function(Lt){if(yt!==Lt){switch(Lt){case ql:s.depthFunc(s.NEVER);break;case Zl:s.depthFunc(s.ALWAYS);break;case jl:s.depthFunc(s.LESS);break;case as:s.depthFunc(s.LEQUAL);break;case Jl:s.depthFunc(s.EQUAL);break;case Ql:s.depthFunc(s.GEQUAL);break;case tc:s.depthFunc(s.GREATER);break;case ec:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}yt=Lt}},setLocked:function(Lt){O=Lt},setClear:function(Lt){It!==Lt&&(s.clearDepth(Lt),It=Lt)},reset:function(){O=!1,pt=null,yt=null,It=null}}}function o(){let O=!1,pt=null,yt=null,It=null,Lt=null,Kt=null,qt=null,se=null,re=null;return{setTest:function(Zt){O||(Zt?st(s.STENCIL_TEST):ut(s.STENCIL_TEST))},setMask:function(Zt){pt!==Zt&&!O&&(s.stencilMask(Zt),pt=Zt)},setFunc:function(Zt,le,Xe){(yt!==Zt||It!==le||Lt!==Xe)&&(s.stencilFunc(Zt,le,Xe),yt=Zt,It=le,Lt=Xe)},setOp:function(Zt,le,Xe){(Kt!==Zt||qt!==le||se!==Xe)&&(s.stencilOp(Zt,le,Xe),Kt=Zt,qt=le,se=Xe)},setLocked:function(Zt){O=Zt},setClear:function(Zt){re!==Zt&&(s.clearStencil(Zt),re=Zt)},reset:function(){O=!1,pt=null,yt=null,It=null,Lt=null,Kt=null,qt=null,se=null,re=null}}}const r=new n,c=new a,l=new o,d=new WeakMap,f=new WeakMap;let p={},v={},m=new WeakMap,g=[],u=null,h=!1,_=null,y=null,x=null,E=null,b=null,A=null,D=null,M=new jt(0,0,0),T=0,I=!1,N=null,X=null,R=null,U=null,B=null;const V=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let K=!1,q=0;const j=s.getParameter(s.VERSION);j.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(j)[1]),K=q>=1):j.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),K=q>=2);let it=null,nt={};const Z=s.getParameter(s.SCISSOR_BOX),C=s.getParameter(s.VIEWPORT),G=new me().fromArray(Z),$=new me().fromArray(C);function z(O,pt,yt,It){const Lt=new Uint8Array(4),Kt=s.createTexture();s.bindTexture(O,Kt),s.texParameteri(O,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(O,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let qt=0;qt<yt;qt++)i&&(O===s.TEXTURE_3D||O===s.TEXTURE_2D_ARRAY)?s.texImage3D(pt,0,s.RGBA,1,1,It,0,s.RGBA,s.UNSIGNED_BYTE,Lt):s.texImage2D(pt+qt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Lt);return Kt}const Y={};Y[s.TEXTURE_2D]=z(s.TEXTURE_2D,s.TEXTURE_2D,1),Y[s.TEXTURE_CUBE_MAP]=z(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Y[s.TEXTURE_2D_ARRAY]=z(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Y[s.TEXTURE_3D]=z(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),r.setClear(0,0,0,1),c.setClear(1),l.setClear(0),st(s.DEPTH_TEST),c.setFunc(as),Tt(!1),w(Ha),st(s.CULL_FACE),ht(pi);function st(O){p[O]!==!0&&(s.enable(O),p[O]=!0)}function ut(O){p[O]!==!1&&(s.disable(O),p[O]=!1)}function bt(O,pt){return v[O]!==pt?(s.bindFramebuffer(O,pt),v[O]=pt,i&&(O===s.DRAW_FRAMEBUFFER&&(v[s.FRAMEBUFFER]=pt),O===s.FRAMEBUFFER&&(v[s.DRAW_FRAMEBUFFER]=pt)),!0):!1}function F(O,pt){let yt=g,It=!1;if(O)if(yt=m.get(pt),yt===void 0&&(yt=[],m.set(pt,yt)),O.isWebGLMultipleRenderTargets){const Lt=O.texture;if(yt.length!==Lt.length||yt[0]!==s.COLOR_ATTACHMENT0){for(let Kt=0,qt=Lt.length;Kt<qt;Kt++)yt[Kt]=s.COLOR_ATTACHMENT0+Kt;yt.length=Lt.length,It=!0}}else yt[0]!==s.COLOR_ATTACHMENT0&&(yt[0]=s.COLOR_ATTACHMENT0,It=!0);else yt[0]!==s.BACK&&(yt[0]=s.BACK,It=!0);It&&(e.isWebGL2?s.drawBuffers(yt):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(yt))}function At(O){return u!==O?(s.useProgram(O),u=O,!0):!1}const mt={[Ai]:s.FUNC_ADD,[Ol]:s.FUNC_SUBTRACT,[Nl]:s.FUNC_REVERSE_SUBTRACT};if(i)mt[Ya]=s.MIN,mt[Xa]=s.MAX;else{const O=t.get("EXT_blend_minmax");O!==null&&(mt[Ya]=O.MIN_EXT,mt[Xa]=O.MAX_EXT)}const vt={[Ul]:s.ZERO,[zl]:s.ONE,[Fl]:s.SRC_COLOR,[ra]:s.SRC_ALPHA,[Wl]:s.SRC_ALPHA_SATURATE,[kl]:s.DST_COLOR,[Gl]:s.DST_ALPHA,[Bl]:s.ONE_MINUS_SRC_COLOR,[oa]:s.ONE_MINUS_SRC_ALPHA,[Vl]:s.ONE_MINUS_DST_COLOR,[Hl]:s.ONE_MINUS_DST_ALPHA,[Yl]:s.CONSTANT_COLOR,[Xl]:s.ONE_MINUS_CONSTANT_COLOR,[$l]:s.CONSTANT_ALPHA,[Kl]:s.ONE_MINUS_CONSTANT_ALPHA};function ht(O,pt,yt,It,Lt,Kt,qt,se,re,Zt){if(O===pi){h===!0&&(ut(s.BLEND),h=!1);return}if(h===!1&&(st(s.BLEND),h=!0),O!==Dl){if(O!==_||Zt!==I){if((y!==Ai||b!==Ai)&&(s.blendEquation(s.FUNC_ADD),y=Ai,b=Ai),Zt)switch(O){case on:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case ka:s.blendFunc(s.ONE,s.ONE);break;case Va:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Wa:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case on:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case ka:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Va:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Wa:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}x=null,E=null,A=null,D=null,M.set(0,0,0),T=0,_=O,I=Zt}return}Lt=Lt||pt,Kt=Kt||yt,qt=qt||It,(pt!==y||Lt!==b)&&(s.blendEquationSeparate(mt[pt],mt[Lt]),y=pt,b=Lt),(yt!==x||It!==E||Kt!==A||qt!==D)&&(s.blendFuncSeparate(vt[yt],vt[It],vt[Kt],vt[qt]),x=yt,E=It,A=Kt,D=qt),(se.equals(M)===!1||re!==T)&&(s.blendColor(se.r,se.g,se.b,re),M.copy(se),T=re),_=O,I=!1}function Bt(O,pt){O.side===ni?ut(s.CULL_FACE):st(s.CULL_FACE);let yt=O.side===Pe;pt&&(yt=!yt),Tt(yt),O.blending===on&&O.transparent===!1?ht(pi):ht(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),c.setFunc(O.depthFunc),c.setTest(O.depthTest),c.setMask(O.depthWrite),r.setMask(O.colorWrite);const It=O.stencilWrite;l.setTest(It),It&&(l.setMask(O.stencilWriteMask),l.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),l.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),k(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?st(s.SAMPLE_ALPHA_TO_COVERAGE):ut(s.SAMPLE_ALPHA_TO_COVERAGE)}function Tt(O){N!==O&&(O?s.frontFace(s.CW):s.frontFace(s.CCW),N=O)}function w(O){O!==Rl?(st(s.CULL_FACE),O!==X&&(O===Ha?s.cullFace(s.BACK):O===Ll?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):ut(s.CULL_FACE),X=O}function S(O){O!==R&&(K&&s.lineWidth(O),R=O)}function k(O,pt,yt){O?(st(s.POLYGON_OFFSET_FILL),(U!==pt||B!==yt)&&(s.polygonOffset(pt,yt),U=pt,B=yt)):ut(s.POLYGON_OFFSET_FILL)}function rt(O){O?st(s.SCISSOR_TEST):ut(s.SCISSOR_TEST)}function at(O){O===void 0&&(O=s.TEXTURE0+V-1),it!==O&&(s.activeTexture(O),it=O)}function ot(O,pt,yt){yt===void 0&&(it===null?yt=s.TEXTURE0+V-1:yt=it);let It=nt[yt];It===void 0&&(It={type:void 0,texture:void 0},nt[yt]=It),(It.type!==O||It.texture!==pt)&&(it!==yt&&(s.activeTexture(yt),it=yt),s.bindTexture(O,pt||Y[O]),It.type=O,It.texture=pt)}function gt(){const O=nt[it];O!==void 0&&O.type!==void 0&&(s.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function dt(){try{s.compressedTexImage2D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function xt(){try{s.compressedTexImage3D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Rt(){try{s.texSubImage2D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ut(){try{s.texSubImage3D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function lt(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Jt(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Vt(){try{s.texStorage2D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function zt(){try{s.texStorage3D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ct(){try{s.texImage2D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Mt(){try{s.texImage3D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function L(O){G.equals(O)===!1&&(s.scissor(O.x,O.y,O.z,O.w),G.copy(O))}function ft(O){$.equals(O)===!1&&(s.viewport(O.x,O.y,O.z,O.w),$.copy(O))}function wt(O,pt){let yt=f.get(pt);yt===void 0&&(yt=new WeakMap,f.set(pt,yt));let It=yt.get(O);It===void 0&&(It=s.getUniformBlockIndex(pt,O.name),yt.set(O,It))}function St(O,pt){const It=f.get(pt).get(O);d.get(pt)!==It&&(s.uniformBlockBinding(pt,It,O.__bindingPointIndex),d.set(pt,It))}function ct(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),i===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),p={},it=null,nt={},v={},m=new WeakMap,g=[],u=null,h=!1,_=null,y=null,x=null,E=null,b=null,A=null,D=null,M=new jt(0,0,0),T=0,I=!1,N=null,X=null,R=null,U=null,B=null,G.set(0,0,s.canvas.width,s.canvas.height),$.set(0,0,s.canvas.width,s.canvas.height),r.reset(),c.reset(),l.reset()}return{buffers:{color:r,depth:c,stencil:l},enable:st,disable:ut,bindFramebuffer:bt,drawBuffers:F,useProgram:At,setBlending:ht,setMaterial:Bt,setFlipSided:Tt,setCullFace:w,setLineWidth:S,setPolygonOffset:k,setScissorTest:rt,activeTexture:at,bindTexture:ot,unbindTexture:gt,compressedTexImage2D:dt,compressedTexImage3D:xt,texImage2D:Ct,texImage3D:Mt,updateUBOMapping:wt,uniformBlockBinding:St,texStorage2D:Vt,texStorage3D:zt,texSubImage2D:Rt,texSubImage3D:Ut,compressedTexSubImage2D:lt,compressedTexSubImage3D:Jt,scissor:L,viewport:ft,reset:ct}}function Rp(s,t,e,i,n,a,o){const r=n.isWebGL2,c=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new WeakMap;let f;const p=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(w,S){return v?new OffscreenCanvas(w,S):hs("canvas")}function g(w,S,k,rt){let at=1;if((w.width>rt||w.height>rt)&&(at=rt/Math.max(w.width,w.height)),at<1||S===!0)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap){const ot=S?pa:Math.floor,gt=ot(at*w.width),dt=ot(at*w.height);f===void 0&&(f=m(gt,dt));const xt=k?m(gt,dt):f;return xt.width=gt,xt.height=dt,xt.getContext("2d").drawImage(w,0,0,gt,dt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+w.width+"x"+w.height+") to ("+gt+"x"+dt+")."),xt}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+w.width+"x"+w.height+")."),w;return w}function u(w){return Er(w.width)&&Er(w.height)}function h(w){return r?!1:w.wrapS!==We||w.wrapT!==We||w.minFilter!==Te&&w.minFilter!==ze}function _(w,S){return w.generateMipmaps&&S&&w.minFilter!==Te&&w.minFilter!==ze}function y(w){s.generateMipmap(w)}function x(w,S,k,rt,at=!1){if(r===!1)return S;if(w!==null){if(s[w]!==void 0)return s[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let ot=S;if(S===s.RED&&(k===s.FLOAT&&(ot=s.R32F),k===s.HALF_FLOAT&&(ot=s.R16F),k===s.UNSIGNED_BYTE&&(ot=s.R8)),S===s.RED_INTEGER&&(k===s.UNSIGNED_BYTE&&(ot=s.R8UI),k===s.UNSIGNED_SHORT&&(ot=s.R16UI),k===s.UNSIGNED_INT&&(ot=s.R32UI),k===s.BYTE&&(ot=s.R8I),k===s.SHORT&&(ot=s.R16I),k===s.INT&&(ot=s.R32I)),S===s.RG&&(k===s.FLOAT&&(ot=s.RG32F),k===s.HALF_FLOAT&&(ot=s.RG16F),k===s.UNSIGNED_BYTE&&(ot=s.RG8)),S===s.RGBA){const gt=at?rs:Qt.getTransfer(rt);k===s.FLOAT&&(ot=s.RGBA32F),k===s.HALF_FLOAT&&(ot=s.RGBA16F),k===s.UNSIGNED_BYTE&&(ot=gt===ee?s.SRGB8_ALPHA8:s.RGBA8),k===s.UNSIGNED_SHORT_4_4_4_4&&(ot=s.RGBA4),k===s.UNSIGNED_SHORT_5_5_5_1&&(ot=s.RGB5_A1)}return(ot===s.R16F||ot===s.R32F||ot===s.RG16F||ot===s.RG32F||ot===s.RGBA16F||ot===s.RGBA32F)&&t.get("EXT_color_buffer_float"),ot}function E(w,S,k){return _(w,k)===!0||w.isFramebufferTexture&&w.minFilter!==Te&&w.minFilter!==ze?Math.log2(Math.max(S.width,S.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?S.mipmaps.length:1}function b(w){return w===Te||w===$a||w===Ss?s.NEAREST:s.LINEAR}function A(w){const S=w.target;S.removeEventListener("dispose",A),M(S),S.isVideoTexture&&d.delete(S)}function D(w){const S=w.target;S.removeEventListener("dispose",D),I(S)}function M(w){const S=i.get(w);if(S.__webglInit===void 0)return;const k=w.source,rt=p.get(k);if(rt){const at=rt[S.__cacheKey];at.usedTimes--,at.usedTimes===0&&T(w),Object.keys(rt).length===0&&p.delete(k)}i.remove(w)}function T(w){const S=i.get(w);s.deleteTexture(S.__webglTexture);const k=w.source,rt=p.get(k);delete rt[S.__cacheKey],o.memory.textures--}function I(w){const S=w.texture,k=i.get(w),rt=i.get(S);if(rt.__webglTexture!==void 0&&(s.deleteTexture(rt.__webglTexture),o.memory.textures--),w.depthTexture&&w.depthTexture.dispose(),w.isWebGLCubeRenderTarget)for(let at=0;at<6;at++){if(Array.isArray(k.__webglFramebuffer[at]))for(let ot=0;ot<k.__webglFramebuffer[at].length;ot++)s.deleteFramebuffer(k.__webglFramebuffer[at][ot]);else s.deleteFramebuffer(k.__webglFramebuffer[at]);k.__webglDepthbuffer&&s.deleteRenderbuffer(k.__webglDepthbuffer[at])}else{if(Array.isArray(k.__webglFramebuffer))for(let at=0;at<k.__webglFramebuffer.length;at++)s.deleteFramebuffer(k.__webglFramebuffer[at]);else s.deleteFramebuffer(k.__webglFramebuffer);if(k.__webglDepthbuffer&&s.deleteRenderbuffer(k.__webglDepthbuffer),k.__webglMultisampledFramebuffer&&s.deleteFramebuffer(k.__webglMultisampledFramebuffer),k.__webglColorRenderbuffer)for(let at=0;at<k.__webglColorRenderbuffer.length;at++)k.__webglColorRenderbuffer[at]&&s.deleteRenderbuffer(k.__webglColorRenderbuffer[at]);k.__webglDepthRenderbuffer&&s.deleteRenderbuffer(k.__webglDepthRenderbuffer)}if(w.isWebGLMultipleRenderTargets)for(let at=0,ot=S.length;at<ot;at++){const gt=i.get(S[at]);gt.__webglTexture&&(s.deleteTexture(gt.__webglTexture),o.memory.textures--),i.remove(S[at])}i.remove(S),i.remove(w)}let N=0;function X(){N=0}function R(){const w=N;return w>=n.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+n.maxTextures),N+=1,w}function U(w){const S=[];return S.push(w.wrapS),S.push(w.wrapT),S.push(w.wrapR||0),S.push(w.magFilter),S.push(w.minFilter),S.push(w.anisotropy),S.push(w.internalFormat),S.push(w.format),S.push(w.type),S.push(w.generateMipmaps),S.push(w.premultiplyAlpha),S.push(w.flipY),S.push(w.unpackAlignment),S.push(w.colorSpace),S.join()}function B(w,S){const k=i.get(w);if(w.isVideoTexture&&Bt(w),w.isRenderTargetTexture===!1&&w.version>0&&k.__version!==w.version){const rt=w.image;if(rt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(rt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{G(k,w,S);return}}e.bindTexture(s.TEXTURE_2D,k.__webglTexture,s.TEXTURE0+S)}function V(w,S){const k=i.get(w);if(w.version>0&&k.__version!==w.version){G(k,w,S);return}e.bindTexture(s.TEXTURE_2D_ARRAY,k.__webglTexture,s.TEXTURE0+S)}function K(w,S){const k=i.get(w);if(w.version>0&&k.__version!==w.version){G(k,w,S);return}e.bindTexture(s.TEXTURE_3D,k.__webglTexture,s.TEXTURE0+S)}function q(w,S){const k=i.get(w);if(w.version>0&&k.__version!==w.version){$(k,w,S);return}e.bindTexture(s.TEXTURE_CUBE_MAP,k.__webglTexture,s.TEXTURE0+S)}const j={[ha]:s.REPEAT,[We]:s.CLAMP_TO_EDGE,[da]:s.MIRRORED_REPEAT},it={[Te]:s.NEAREST,[$a]:s.NEAREST_MIPMAP_NEAREST,[Ss]:s.NEAREST_MIPMAP_LINEAR,[ze]:s.LINEAR,[hc]:s.LINEAR_MIPMAP_NEAREST,[bn]:s.LINEAR_MIPMAP_LINEAR},nt={[Ec]:s.NEVER,[Pc]:s.ALWAYS,[Tc]:s.LESS,[Io]:s.LEQUAL,[Sc]:s.EQUAL,[wc]:s.GEQUAL,[bc]:s.GREATER,[Ac]:s.NOTEQUAL};function Z(w,S,k){if(k?(s.texParameteri(w,s.TEXTURE_WRAP_S,j[S.wrapS]),s.texParameteri(w,s.TEXTURE_WRAP_T,j[S.wrapT]),(w===s.TEXTURE_3D||w===s.TEXTURE_2D_ARRAY)&&s.texParameteri(w,s.TEXTURE_WRAP_R,j[S.wrapR]),s.texParameteri(w,s.TEXTURE_MAG_FILTER,it[S.magFilter]),s.texParameteri(w,s.TEXTURE_MIN_FILTER,it[S.minFilter])):(s.texParameteri(w,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(w,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(w===s.TEXTURE_3D||w===s.TEXTURE_2D_ARRAY)&&s.texParameteri(w,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(S.wrapS!==We||S.wrapT!==We)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(w,s.TEXTURE_MAG_FILTER,b(S.magFilter)),s.texParameteri(w,s.TEXTURE_MIN_FILTER,b(S.minFilter)),S.minFilter!==Te&&S.minFilter!==ze&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),S.compareFunction&&(s.texParameteri(w,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(w,s.TEXTURE_COMPARE_FUNC,nt[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){const rt=t.get("EXT_texture_filter_anisotropic");if(S.magFilter===Te||S.minFilter!==Ss&&S.minFilter!==bn||S.type===fi&&t.has("OES_texture_float_linear")===!1||r===!1&&S.type===An&&t.has("OES_texture_half_float_linear")===!1)return;(S.anisotropy>1||i.get(S).__currentAnisotropy)&&(s.texParameterf(w,rt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,n.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy)}}function C(w,S){let k=!1;w.__webglInit===void 0&&(w.__webglInit=!0,S.addEventListener("dispose",A));const rt=S.source;let at=p.get(rt);at===void 0&&(at={},p.set(rt,at));const ot=U(S);if(ot!==w.__cacheKey){at[ot]===void 0&&(at[ot]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,k=!0),at[ot].usedTimes++;const gt=at[w.__cacheKey];gt!==void 0&&(at[w.__cacheKey].usedTimes--,gt.usedTimes===0&&T(S)),w.__cacheKey=ot,w.__webglTexture=at[ot].texture}return k}function G(w,S,k){let rt=s.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(rt=s.TEXTURE_2D_ARRAY),S.isData3DTexture&&(rt=s.TEXTURE_3D);const at=C(w,S),ot=S.source;e.bindTexture(rt,w.__webglTexture,s.TEXTURE0+k);const gt=i.get(ot);if(ot.version!==gt.__version||at===!0){e.activeTexture(s.TEXTURE0+k);const dt=Qt.getPrimaries(Qt.workingColorSpace),xt=S.colorSpace===Be?null:Qt.getPrimaries(S.colorSpace),Rt=S.colorSpace===Be||dt===xt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Rt);const Ut=h(S)&&u(S.image)===!1;let lt=g(S.image,Ut,!1,n.maxTextureSize);lt=Tt(S,lt);const Jt=u(lt)||r,Vt=a.convert(S.format,S.colorSpace);let zt=a.convert(S.type),Ct=x(S.internalFormat,Vt,zt,S.colorSpace,S.isVideoTexture);Z(rt,S,Jt);let Mt;const L=S.mipmaps,ft=r&&S.isVideoTexture!==!0&&Ct!==Co,wt=gt.__version===void 0||at===!0,St=E(S,lt,Jt);if(S.isDepthTexture)Ct=s.DEPTH_COMPONENT,r?S.type===fi?Ct=s.DEPTH_COMPONENT32F:S.type===ui?Ct=s.DEPTH_COMPONENT24:S.type===Pi?Ct=s.DEPTH24_STENCIL8:Ct=s.DEPTH_COMPONENT16:S.type===fi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),S.format===Ci&&Ct===s.DEPTH_COMPONENT&&S.type!==Ma&&S.type!==ui&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),S.type=ui,zt=a.convert(S.type)),S.format===dn&&Ct===s.DEPTH_COMPONENT&&(Ct=s.DEPTH_STENCIL,S.type!==Pi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),S.type=Pi,zt=a.convert(S.type))),wt&&(ft?e.texStorage2D(s.TEXTURE_2D,1,Ct,lt.width,lt.height):e.texImage2D(s.TEXTURE_2D,0,Ct,lt.width,lt.height,0,Vt,zt,null));else if(S.isDataTexture)if(L.length>0&&Jt){ft&&wt&&e.texStorage2D(s.TEXTURE_2D,St,Ct,L[0].width,L[0].height);for(let ct=0,O=L.length;ct<O;ct++)Mt=L[ct],ft?e.texSubImage2D(s.TEXTURE_2D,ct,0,0,Mt.width,Mt.height,Vt,zt,Mt.data):e.texImage2D(s.TEXTURE_2D,ct,Ct,Mt.width,Mt.height,0,Vt,zt,Mt.data);S.generateMipmaps=!1}else ft?(wt&&e.texStorage2D(s.TEXTURE_2D,St,Ct,lt.width,lt.height),e.texSubImage2D(s.TEXTURE_2D,0,0,0,lt.width,lt.height,Vt,zt,lt.data)):e.texImage2D(s.TEXTURE_2D,0,Ct,lt.width,lt.height,0,Vt,zt,lt.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){ft&&wt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,St,Ct,L[0].width,L[0].height,lt.depth);for(let ct=0,O=L.length;ct<O;ct++)Mt=L[ct],S.format!==Ye?Vt!==null?ft?e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ct,0,0,0,Mt.width,Mt.height,lt.depth,Vt,Mt.data,0,0):e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ct,Ct,Mt.width,Mt.height,lt.depth,0,Mt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ft?e.texSubImage3D(s.TEXTURE_2D_ARRAY,ct,0,0,0,Mt.width,Mt.height,lt.depth,Vt,zt,Mt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,ct,Ct,Mt.width,Mt.height,lt.depth,0,Vt,zt,Mt.data)}else{ft&&wt&&e.texStorage2D(s.TEXTURE_2D,St,Ct,L[0].width,L[0].height);for(let ct=0,O=L.length;ct<O;ct++)Mt=L[ct],S.format!==Ye?Vt!==null?ft?e.compressedTexSubImage2D(s.TEXTURE_2D,ct,0,0,Mt.width,Mt.height,Vt,Mt.data):e.compressedTexImage2D(s.TEXTURE_2D,ct,Ct,Mt.width,Mt.height,0,Mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ft?e.texSubImage2D(s.TEXTURE_2D,ct,0,0,Mt.width,Mt.height,Vt,zt,Mt.data):e.texImage2D(s.TEXTURE_2D,ct,Ct,Mt.width,Mt.height,0,Vt,zt,Mt.data)}else if(S.isDataArrayTexture)ft?(wt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,St,Ct,lt.width,lt.height,lt.depth),e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,lt.width,lt.height,lt.depth,Vt,zt,lt.data)):e.texImage3D(s.TEXTURE_2D_ARRAY,0,Ct,lt.width,lt.height,lt.depth,0,Vt,zt,lt.data);else if(S.isData3DTexture)ft?(wt&&e.texStorage3D(s.TEXTURE_3D,St,Ct,lt.width,lt.height,lt.depth),e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,lt.width,lt.height,lt.depth,Vt,zt,lt.data)):e.texImage3D(s.TEXTURE_3D,0,Ct,lt.width,lt.height,lt.depth,0,Vt,zt,lt.data);else if(S.isFramebufferTexture){if(wt)if(ft)e.texStorage2D(s.TEXTURE_2D,St,Ct,lt.width,lt.height);else{let ct=lt.width,O=lt.height;for(let pt=0;pt<St;pt++)e.texImage2D(s.TEXTURE_2D,pt,Ct,ct,O,0,Vt,zt,null),ct>>=1,O>>=1}}else if(L.length>0&&Jt){ft&&wt&&e.texStorage2D(s.TEXTURE_2D,St,Ct,L[0].width,L[0].height);for(let ct=0,O=L.length;ct<O;ct++)Mt=L[ct],ft?e.texSubImage2D(s.TEXTURE_2D,ct,0,0,Vt,zt,Mt):e.texImage2D(s.TEXTURE_2D,ct,Ct,Vt,zt,Mt);S.generateMipmaps=!1}else ft?(wt&&e.texStorage2D(s.TEXTURE_2D,St,Ct,lt.width,lt.height),e.texSubImage2D(s.TEXTURE_2D,0,0,0,Vt,zt,lt)):e.texImage2D(s.TEXTURE_2D,0,Ct,Vt,zt,lt);_(S,Jt)&&y(rt),gt.__version=ot.version,S.onUpdate&&S.onUpdate(S)}w.__version=S.version}function $(w,S,k){if(S.image.length!==6)return;const rt=C(w,S),at=S.source;e.bindTexture(s.TEXTURE_CUBE_MAP,w.__webglTexture,s.TEXTURE0+k);const ot=i.get(at);if(at.version!==ot.__version||rt===!0){e.activeTexture(s.TEXTURE0+k);const gt=Qt.getPrimaries(Qt.workingColorSpace),dt=S.colorSpace===Be?null:Qt.getPrimaries(S.colorSpace),xt=S.colorSpace===Be||gt===dt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,xt);const Rt=S.isCompressedTexture||S.image[0].isCompressedTexture,Ut=S.image[0]&&S.image[0].isDataTexture,lt=[];for(let ct=0;ct<6;ct++)!Rt&&!Ut?lt[ct]=g(S.image[ct],!1,!0,n.maxCubemapSize):lt[ct]=Ut?S.image[ct].image:S.image[ct],lt[ct]=Tt(S,lt[ct]);const Jt=lt[0],Vt=u(Jt)||r,zt=a.convert(S.format,S.colorSpace),Ct=a.convert(S.type),Mt=x(S.internalFormat,zt,Ct,S.colorSpace),L=r&&S.isVideoTexture!==!0,ft=ot.__version===void 0||rt===!0;let wt=E(S,Jt,Vt);Z(s.TEXTURE_CUBE_MAP,S,Vt);let St;if(Rt){L&&ft&&e.texStorage2D(s.TEXTURE_CUBE_MAP,wt,Mt,Jt.width,Jt.height);for(let ct=0;ct<6;ct++){St=lt[ct].mipmaps;for(let O=0;O<St.length;O++){const pt=St[O];S.format!==Ye?zt!==null?L?e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ct,O,0,0,pt.width,pt.height,zt,pt.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ct,O,Mt,pt.width,pt.height,0,pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ct,O,0,0,pt.width,pt.height,zt,Ct,pt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ct,O,Mt,pt.width,pt.height,0,zt,Ct,pt.data)}}}else{St=S.mipmaps,L&&ft&&(St.length>0&&wt++,e.texStorage2D(s.TEXTURE_CUBE_MAP,wt,Mt,lt[0].width,lt[0].height));for(let ct=0;ct<6;ct++)if(Ut){L?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,0,0,lt[ct].width,lt[ct].height,zt,Ct,lt[ct].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,Mt,lt[ct].width,lt[ct].height,0,zt,Ct,lt[ct].data);for(let O=0;O<St.length;O++){const yt=St[O].image[ct].image;L?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ct,O+1,0,0,yt.width,yt.height,zt,Ct,yt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ct,O+1,Mt,yt.width,yt.height,0,zt,Ct,yt.data)}}else{L?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,0,0,zt,Ct,lt[ct]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,Mt,zt,Ct,lt[ct]);for(let O=0;O<St.length;O++){const pt=St[O];L?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ct,O+1,0,0,zt,Ct,pt.image[ct]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ct,O+1,Mt,zt,Ct,pt.image[ct])}}}_(S,Vt)&&y(s.TEXTURE_CUBE_MAP),ot.__version=at.version,S.onUpdate&&S.onUpdate(S)}w.__version=S.version}function z(w,S,k,rt,at,ot){const gt=a.convert(k.format,k.colorSpace),dt=a.convert(k.type),xt=x(k.internalFormat,gt,dt,k.colorSpace);if(!i.get(S).__hasExternalTextures){const Ut=Math.max(1,S.width>>ot),lt=Math.max(1,S.height>>ot);at===s.TEXTURE_3D||at===s.TEXTURE_2D_ARRAY?e.texImage3D(at,ot,xt,Ut,lt,S.depth,0,gt,dt,null):e.texImage2D(at,ot,xt,Ut,lt,0,gt,dt,null)}e.bindFramebuffer(s.FRAMEBUFFER,w),ht(S)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,rt,at,i.get(k).__webglTexture,0,vt(S)):(at===s.TEXTURE_2D||at>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&at<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,rt,at,i.get(k).__webglTexture,ot),e.bindFramebuffer(s.FRAMEBUFFER,null)}function Y(w,S,k){if(s.bindRenderbuffer(s.RENDERBUFFER,w),S.depthBuffer&&!S.stencilBuffer){let rt=r===!0?s.DEPTH_COMPONENT24:s.DEPTH_COMPONENT16;if(k||ht(S)){const at=S.depthTexture;at&&at.isDepthTexture&&(at.type===fi?rt=s.DEPTH_COMPONENT32F:at.type===ui&&(rt=s.DEPTH_COMPONENT24));const ot=vt(S);ht(S)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ot,rt,S.width,S.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,ot,rt,S.width,S.height)}else s.renderbufferStorage(s.RENDERBUFFER,rt,S.width,S.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,w)}else if(S.depthBuffer&&S.stencilBuffer){const rt=vt(S);k&&ht(S)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,rt,s.DEPTH24_STENCIL8,S.width,S.height):ht(S)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,rt,s.DEPTH24_STENCIL8,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,S.width,S.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,w)}else{const rt=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let at=0;at<rt.length;at++){const ot=rt[at],gt=a.convert(ot.format,ot.colorSpace),dt=a.convert(ot.type),xt=x(ot.internalFormat,gt,dt,ot.colorSpace),Rt=vt(S);k&&ht(S)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Rt,xt,S.width,S.height):ht(S)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Rt,xt,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,xt,S.width,S.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function st(w,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,w),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),B(S.depthTexture,0);const rt=i.get(S.depthTexture).__webglTexture,at=vt(S);if(S.depthTexture.format===Ci)ht(S)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,rt,0,at):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,rt,0);else if(S.depthTexture.format===dn)ht(S)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,rt,0,at):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,rt,0);else throw new Error("Unknown depthTexture format")}function ut(w){const S=i.get(w),k=w.isWebGLCubeRenderTarget===!0;if(w.depthTexture&&!S.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");st(S.__webglFramebuffer,w)}else if(k){S.__webglDepthbuffer=[];for(let rt=0;rt<6;rt++)e.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer[rt]),S.__webglDepthbuffer[rt]=s.createRenderbuffer(),Y(S.__webglDepthbuffer[rt],w,!1)}else e.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer=s.createRenderbuffer(),Y(S.__webglDepthbuffer,w,!1);e.bindFramebuffer(s.FRAMEBUFFER,null)}function bt(w,S,k){const rt=i.get(w);S!==void 0&&z(rt.__webglFramebuffer,w,w.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),k!==void 0&&ut(w)}function F(w){const S=w.texture,k=i.get(w),rt=i.get(S);w.addEventListener("dispose",D),w.isWebGLMultipleRenderTargets!==!0&&(rt.__webglTexture===void 0&&(rt.__webglTexture=s.createTexture()),rt.__version=S.version,o.memory.textures++);const at=w.isWebGLCubeRenderTarget===!0,ot=w.isWebGLMultipleRenderTargets===!0,gt=u(w)||r;if(at){k.__webglFramebuffer=[];for(let dt=0;dt<6;dt++)if(r&&S.mipmaps&&S.mipmaps.length>0){k.__webglFramebuffer[dt]=[];for(let xt=0;xt<S.mipmaps.length;xt++)k.__webglFramebuffer[dt][xt]=s.createFramebuffer()}else k.__webglFramebuffer[dt]=s.createFramebuffer()}else{if(r&&S.mipmaps&&S.mipmaps.length>0){k.__webglFramebuffer=[];for(let dt=0;dt<S.mipmaps.length;dt++)k.__webglFramebuffer[dt]=s.createFramebuffer()}else k.__webglFramebuffer=s.createFramebuffer();if(ot)if(n.drawBuffers){const dt=w.texture;for(let xt=0,Rt=dt.length;xt<Rt;xt++){const Ut=i.get(dt[xt]);Ut.__webglTexture===void 0&&(Ut.__webglTexture=s.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(r&&w.samples>0&&ht(w)===!1){const dt=ot?S:[S];k.__webglMultisampledFramebuffer=s.createFramebuffer(),k.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let xt=0;xt<dt.length;xt++){const Rt=dt[xt];k.__webglColorRenderbuffer[xt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,k.__webglColorRenderbuffer[xt]);const Ut=a.convert(Rt.format,Rt.colorSpace),lt=a.convert(Rt.type),Jt=x(Rt.internalFormat,Ut,lt,Rt.colorSpace,w.isXRRenderTarget===!0),Vt=vt(w);s.renderbufferStorageMultisample(s.RENDERBUFFER,Vt,Jt,w.width,w.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+xt,s.RENDERBUFFER,k.__webglColorRenderbuffer[xt])}s.bindRenderbuffer(s.RENDERBUFFER,null),w.depthBuffer&&(k.__webglDepthRenderbuffer=s.createRenderbuffer(),Y(k.__webglDepthRenderbuffer,w,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(at){e.bindTexture(s.TEXTURE_CUBE_MAP,rt.__webglTexture),Z(s.TEXTURE_CUBE_MAP,S,gt);for(let dt=0;dt<6;dt++)if(r&&S.mipmaps&&S.mipmaps.length>0)for(let xt=0;xt<S.mipmaps.length;xt++)z(k.__webglFramebuffer[dt][xt],w,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+dt,xt);else z(k.__webglFramebuffer[dt],w,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0);_(S,gt)&&y(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(ot){const dt=w.texture;for(let xt=0,Rt=dt.length;xt<Rt;xt++){const Ut=dt[xt],lt=i.get(Ut);e.bindTexture(s.TEXTURE_2D,lt.__webglTexture),Z(s.TEXTURE_2D,Ut,gt),z(k.__webglFramebuffer,w,Ut,s.COLOR_ATTACHMENT0+xt,s.TEXTURE_2D,0),_(Ut,gt)&&y(s.TEXTURE_2D)}e.unbindTexture()}else{let dt=s.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(r?dt=w.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(dt,rt.__webglTexture),Z(dt,S,gt),r&&S.mipmaps&&S.mipmaps.length>0)for(let xt=0;xt<S.mipmaps.length;xt++)z(k.__webglFramebuffer[xt],w,S,s.COLOR_ATTACHMENT0,dt,xt);else z(k.__webglFramebuffer,w,S,s.COLOR_ATTACHMENT0,dt,0);_(S,gt)&&y(dt),e.unbindTexture()}w.depthBuffer&&ut(w)}function At(w){const S=u(w)||r,k=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let rt=0,at=k.length;rt<at;rt++){const ot=k[rt];if(_(ot,S)){const gt=w.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,dt=i.get(ot).__webglTexture;e.bindTexture(gt,dt),y(gt),e.unbindTexture()}}}function mt(w){if(r&&w.samples>0&&ht(w)===!1){const S=w.isWebGLMultipleRenderTargets?w.texture:[w.texture],k=w.width,rt=w.height;let at=s.COLOR_BUFFER_BIT;const ot=[],gt=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,dt=i.get(w),xt=w.isWebGLMultipleRenderTargets===!0;if(xt)for(let Rt=0;Rt<S.length;Rt++)e.bindFramebuffer(s.FRAMEBUFFER,dt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Rt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,dt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Rt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,dt.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,dt.__webglFramebuffer);for(let Rt=0;Rt<S.length;Rt++){ot.push(s.COLOR_ATTACHMENT0+Rt),w.depthBuffer&&ot.push(gt);const Ut=dt.__ignoreDepthValues!==void 0?dt.__ignoreDepthValues:!1;if(Ut===!1&&(w.depthBuffer&&(at|=s.DEPTH_BUFFER_BIT),w.stencilBuffer&&(at|=s.STENCIL_BUFFER_BIT)),xt&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,dt.__webglColorRenderbuffer[Rt]),Ut===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[gt]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[gt])),xt){const lt=i.get(S[Rt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,lt,0)}s.blitFramebuffer(0,0,k,rt,0,0,k,rt,at,s.NEAREST),l&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,ot)}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),xt)for(let Rt=0;Rt<S.length;Rt++){e.bindFramebuffer(s.FRAMEBUFFER,dt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Rt,s.RENDERBUFFER,dt.__webglColorRenderbuffer[Rt]);const Ut=i.get(S[Rt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,dt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Rt,s.TEXTURE_2D,Ut,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,dt.__webglMultisampledFramebuffer)}}function vt(w){return Math.min(n.maxSamples,w.samples)}function ht(w){const S=i.get(w);return r&&w.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Bt(w){const S=o.render.frame;d.get(w)!==S&&(d.set(w,S),w.update())}function Tt(w,S){const k=w.colorSpace,rt=w.format,at=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||w.format===ua||k!==ai&&k!==Be&&(Qt.getTransfer(k)===ee?r===!1?t.has("EXT_sRGB")===!0&&rt===Ye?(w.format=ua,w.minFilter=ze,w.generateMipmaps=!1):S=Oo.sRGBToLinear(S):(rt!==Ye||at!==gi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),S}this.allocateTextureUnit=R,this.resetTextureUnits=X,this.setTexture2D=B,this.setTexture2DArray=V,this.setTexture3D=K,this.setTextureCube=q,this.rebindTextures=bt,this.setupRenderTarget=F,this.updateRenderTargetMipmap=At,this.updateMultisampleRenderTarget=mt,this.setupDepthRenderbuffer=ut,this.setupFrameBufferTexture=z,this.useMultisampledRTT=ht}function Lp(s,t,e){const i=e.isWebGL2;function n(a,o=Be){let r;const c=Qt.getTransfer(o);if(a===gi)return s.UNSIGNED_BYTE;if(a===So)return s.UNSIGNED_SHORT_4_4_4_4;if(a===bo)return s.UNSIGNED_SHORT_5_5_5_1;if(a===dc)return s.BYTE;if(a===uc)return s.SHORT;if(a===Ma)return s.UNSIGNED_SHORT;if(a===To)return s.INT;if(a===ui)return s.UNSIGNED_INT;if(a===fi)return s.FLOAT;if(a===An)return i?s.HALF_FLOAT:(r=t.get("OES_texture_half_float"),r!==null?r.HALF_FLOAT_OES:null);if(a===fc)return s.ALPHA;if(a===Ye)return s.RGBA;if(a===pc)return s.LUMINANCE;if(a===mc)return s.LUMINANCE_ALPHA;if(a===Ci)return s.DEPTH_COMPONENT;if(a===dn)return s.DEPTH_STENCIL;if(a===ua)return r=t.get("EXT_sRGB"),r!==null?r.SRGB_ALPHA_EXT:null;if(a===gc)return s.RED;if(a===Ao)return s.RED_INTEGER;if(a===vc)return s.RG;if(a===wo)return s.RG_INTEGER;if(a===Po)return s.RGBA_INTEGER;if(a===bs||a===As||a===ws||a===Ps)if(c===ee)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(a===bs)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===As)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===ws)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===Ps)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(a===bs)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===As)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===ws)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===Ps)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===Ka||a===qa||a===Za||a===ja)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(a===Ka)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===qa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===Za)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===ja)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===Co)return r=t.get("WEBGL_compressed_texture_etc1"),r!==null?r.COMPRESSED_RGB_ETC1_WEBGL:null;if(a===Ja||a===Qa)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(a===Ja)return c===ee?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(a===Qa)return c===ee?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(a===tr||a===er||a===ir||a===nr||a===sr||a===ar||a===rr||a===or||a===lr||a===cr||a===hr||a===dr||a===ur||a===fr)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(a===tr)return c===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===er)return c===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===ir)return c===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===nr)return c===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===sr)return c===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===ar)return c===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===rr)return c===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===or)return c===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===lr)return c===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===cr)return c===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===hr)return c===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===dr)return c===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===ur)return c===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===fr)return c===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===Cs||a===pr||a===mr)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(a===Cs)return c===ee?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===pr)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===mr)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===_c||a===gr||a===vr||a===_r)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(a===Cs)return r.COMPRESSED_RED_RGTC1_EXT;if(a===gr)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===vr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===_r)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===Pi?i?s.UNSIGNED_INT_24_8:(r=t.get("WEBGL_depth_texture"),r!==null?r.UNSIGNED_INT_24_8_WEBGL:null):s[a]!==void 0?s[a]:null}return{convert:n}}class Ip extends Fe{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class xn extends xe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Dp={type:"move"};class Qs{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new xn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new xn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new xn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let n=null,a=null,o=null;const r=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const g of t.hand.values()){const u=e.getJointPose(g,i),h=this._getHandJoint(l,g);u!==null&&(h.matrix.fromArray(u.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=u.radius),h.visible=u!==null}const d=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],p=d.position.distanceTo(f.position),v=.02,m=.005;l.inputState.pinching&&p>v+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&p<=v-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(a=e.getPose(t.gripSpace,i),a!==null&&(c.matrix.fromArray(a.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,a.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(a.linearVelocity)):c.hasLinearVelocity=!1,a.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(a.angularVelocity)):c.hasAngularVelocity=!1));r!==null&&(n=e.getPose(t.targetRaySpace,i),n===null&&a!==null&&(n=a),n!==null&&(r.matrix.fromArray(n.transform.matrix),r.matrix.decompose(r.position,r.rotation,r.scale),r.matrixWorldNeedsUpdate=!0,n.linearVelocity?(r.hasLinearVelocity=!0,r.linearVelocity.copy(n.linearVelocity)):r.hasLinearVelocity=!1,n.angularVelocity?(r.hasAngularVelocity=!0,r.angularVelocity.copy(n.angularVelocity)):r.hasAngularVelocity=!1,this.dispatchEvent(Dp)))}return r!==null&&(r.visible=n!==null),c!==null&&(c.visible=a!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new xn;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}class Op extends Oi{constructor(t,e){super();const i=this;let n=null,a=1,o=null,r="local-floor",c=1,l=null,d=null,f=null,p=null,v=null,m=null;const g=e.getContextAttributes();let u=null,h=null;const _=[],y=[],x=new Nt;let E=null;const b=new Fe;b.layers.enable(1),b.viewport=new me;const A=new Fe;A.layers.enable(2),A.viewport=new me;const D=[b,A],M=new Ip;M.layers.enable(1),M.layers.enable(2);let T=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let C=_[Z];return C===void 0&&(C=new Qs,_[Z]=C),C.getTargetRaySpace()},this.getControllerGrip=function(Z){let C=_[Z];return C===void 0&&(C=new Qs,_[Z]=C),C.getGripSpace()},this.getHand=function(Z){let C=_[Z];return C===void 0&&(C=new Qs,_[Z]=C),C.getHandSpace()};function N(Z){const C=y.indexOf(Z.inputSource);if(C===-1)return;const G=_[C];G!==void 0&&(G.update(Z.inputSource,Z.frame,l||o),G.dispatchEvent({type:Z.type,data:Z.inputSource}))}function X(){n.removeEventListener("select",N),n.removeEventListener("selectstart",N),n.removeEventListener("selectend",N),n.removeEventListener("squeeze",N),n.removeEventListener("squeezestart",N),n.removeEventListener("squeezeend",N),n.removeEventListener("end",X),n.removeEventListener("inputsourceschange",R);for(let Z=0;Z<_.length;Z++){const C=y[Z];C!==null&&(y[Z]=null,_[Z].disconnect(C))}T=null,I=null,t.setRenderTarget(u),v=null,p=null,f=null,n=null,h=null,nt.stop(),i.isPresenting=!1,t.setPixelRatio(E),t.setSize(x.width,x.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){a=Z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){r=Z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(Z){l=Z},this.getBaseLayer=function(){return p!==null?p:v},this.getBinding=function(){return f},this.getFrame=function(){return m},this.getSession=function(){return n},this.setSession=async function(Z){if(n=Z,n!==null){if(u=t.getRenderTarget(),n.addEventListener("select",N),n.addEventListener("selectstart",N),n.addEventListener("selectend",N),n.addEventListener("squeeze",N),n.addEventListener("squeezestart",N),n.addEventListener("squeezeend",N),n.addEventListener("end",X),n.addEventListener("inputsourceschange",R),g.xrCompatible!==!0&&await e.makeXRCompatible(),E=t.getPixelRatio(),t.getSize(x),n.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const C={antialias:n.renderState.layers===void 0?g.antialias:!0,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:a};v=new XRWebGLLayer(n,e,C),n.updateRenderState({baseLayer:v}),t.setPixelRatio(1),t.setSize(v.framebufferWidth,v.framebufferHeight,!1),h=new Li(v.framebufferWidth,v.framebufferHeight,{format:Ye,type:gi,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}else{let C=null,G=null,$=null;g.depth&&($=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,C=g.stencil?dn:Ci,G=g.stencil?Pi:ui);const z={colorFormat:e.RGBA8,depthFormat:$,scaleFactor:a};f=new XRWebGLBinding(n,e),p=f.createProjectionLayer(z),n.updateRenderState({layers:[p]}),t.setPixelRatio(1),t.setSize(p.textureWidth,p.textureHeight,!1),h=new Li(p.textureWidth,p.textureHeight,{format:Ye,type:gi,depthTexture:new Yo(p.textureWidth,p.textureHeight,G,void 0,void 0,void 0,void 0,void 0,void 0,C),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0});const Y=t.properties.get(h);Y.__ignoreDepthValues=p.ignoreDepthValues}h.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await n.requestReferenceSpace(r),nt.setContext(n),nt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode};function R(Z){for(let C=0;C<Z.removed.length;C++){const G=Z.removed[C],$=y.indexOf(G);$>=0&&(y[$]=null,_[$].disconnect(G))}for(let C=0;C<Z.added.length;C++){const G=Z.added[C];let $=y.indexOf(G);if($===-1){for(let Y=0;Y<_.length;Y++)if(Y>=y.length){y.push(G),$=Y;break}else if(y[Y]===null){y[Y]=G,$=Y;break}if($===-1)break}const z=_[$];z&&z.connect(G)}}const U=new H,B=new H;function V(Z,C,G){U.setFromMatrixPosition(C.matrixWorld),B.setFromMatrixPosition(G.matrixWorld);const $=U.distanceTo(B),z=C.projectionMatrix.elements,Y=G.projectionMatrix.elements,st=z[14]/(z[10]-1),ut=z[14]/(z[10]+1),bt=(z[9]+1)/z[5],F=(z[9]-1)/z[5],At=(z[8]-1)/z[0],mt=(Y[8]+1)/Y[0],vt=st*At,ht=st*mt,Bt=$/(-At+mt),Tt=Bt*-At;C.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(Tt),Z.translateZ(Bt),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert();const w=st+Bt,S=ut+Bt,k=vt-Tt,rt=ht+($-Tt),at=bt*ut/S*w,ot=F*ut/S*w;Z.projectionMatrix.makePerspective(k,rt,at,ot,w,S),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}function K(Z,C){C===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(C.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(n===null)return;M.near=A.near=b.near=Z.near,M.far=A.far=b.far=Z.far,(T!==M.near||I!==M.far)&&(n.updateRenderState({depthNear:M.near,depthFar:M.far}),T=M.near,I=M.far);const C=Z.parent,G=M.cameras;K(M,C);for(let $=0;$<G.length;$++)K(G[$],C);G.length===2?V(M,b,A):M.projectionMatrix.copy(b.projectionMatrix),q(Z,M,C)};function q(Z,C,G){G===null?Z.matrix.copy(C.matrixWorld):(Z.matrix.copy(G.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(C.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(C.projectionMatrix),Z.projectionMatrixInverse.copy(C.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=fa*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(p===null&&v===null))return c},this.setFoveation=function(Z){c=Z,p!==null&&(p.fixedFoveation=Z),v!==null&&v.fixedFoveation!==void 0&&(v.fixedFoveation=Z)};let j=null;function it(Z,C){if(d=C.getViewerPose(l||o),m=C,d!==null){const G=d.views;v!==null&&(t.setRenderTargetFramebuffer(h,v.framebuffer),t.setRenderTarget(h));let $=!1;G.length!==M.cameras.length&&(M.cameras.length=0,$=!0);for(let z=0;z<G.length;z++){const Y=G[z];let st=null;if(v!==null)st=v.getViewport(Y);else{const bt=f.getViewSubImage(p,Y);st=bt.viewport,z===0&&(t.setRenderTargetTextures(h,bt.colorTexture,p.ignoreDepthValues?void 0:bt.depthStencilTexture),t.setRenderTarget(h))}let ut=D[z];ut===void 0&&(ut=new Fe,ut.layers.enable(z),ut.viewport=new me,D[z]=ut),ut.matrix.fromArray(Y.transform.matrix),ut.matrix.decompose(ut.position,ut.quaternion,ut.scale),ut.projectionMatrix.fromArray(Y.projectionMatrix),ut.projectionMatrixInverse.copy(ut.projectionMatrix).invert(),ut.viewport.set(st.x,st.y,st.width,st.height),z===0&&(M.matrix.copy(ut.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),$===!0&&M.cameras.push(ut)}}for(let G=0;G<_.length;G++){const $=y[G],z=_[G];$!==null&&z!==void 0&&z.update($,C,l||o)}j&&j(Z,C),C.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:C}),m=null}const nt=new Vo;nt.setAnimationLoop(it),this.setAnimationLoop=function(Z){j=Z},this.dispose=function(){}}}function Np(s,t){function e(u,h){u.matrixAutoUpdate===!0&&u.updateMatrix(),h.value.copy(u.matrix)}function i(u,h){h.color.getRGB(u.fogColor.value,Go(s)),h.isFog?(u.fogNear.value=h.near,u.fogFar.value=h.far):h.isFogExp2&&(u.fogDensity.value=h.density)}function n(u,h,_,y,x){h.isMeshBasicMaterial||h.isMeshLambertMaterial?a(u,h):h.isMeshToonMaterial?(a(u,h),f(u,h)):h.isMeshPhongMaterial?(a(u,h),d(u,h)):h.isMeshStandardMaterial?(a(u,h),p(u,h),h.isMeshPhysicalMaterial&&v(u,h,x)):h.isMeshMatcapMaterial?(a(u,h),m(u,h)):h.isMeshDepthMaterial?a(u,h):h.isMeshDistanceMaterial?(a(u,h),g(u,h)):h.isMeshNormalMaterial?a(u,h):h.isLineBasicMaterial?(o(u,h),h.isLineDashedMaterial&&r(u,h)):h.isPointsMaterial?c(u,h,_,y):h.isSpriteMaterial?l(u,h):h.isShadowMaterial?(u.color.value.copy(h.color),u.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function a(u,h){u.opacity.value=h.opacity,h.color&&u.diffuse.value.copy(h.color),h.emissive&&u.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(u.map.value=h.map,e(h.map,u.mapTransform)),h.alphaMap&&(u.alphaMap.value=h.alphaMap,e(h.alphaMap,u.alphaMapTransform)),h.bumpMap&&(u.bumpMap.value=h.bumpMap,e(h.bumpMap,u.bumpMapTransform),u.bumpScale.value=h.bumpScale,h.side===Pe&&(u.bumpScale.value*=-1)),h.normalMap&&(u.normalMap.value=h.normalMap,e(h.normalMap,u.normalMapTransform),u.normalScale.value.copy(h.normalScale),h.side===Pe&&u.normalScale.value.negate()),h.displacementMap&&(u.displacementMap.value=h.displacementMap,e(h.displacementMap,u.displacementMapTransform),u.displacementScale.value=h.displacementScale,u.displacementBias.value=h.displacementBias),h.emissiveMap&&(u.emissiveMap.value=h.emissiveMap,e(h.emissiveMap,u.emissiveMapTransform)),h.specularMap&&(u.specularMap.value=h.specularMap,e(h.specularMap,u.specularMapTransform)),h.alphaTest>0&&(u.alphaTest.value=h.alphaTest);const _=t.get(h).envMap;if(_&&(u.envMap.value=_,u.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,u.reflectivity.value=h.reflectivity,u.ior.value=h.ior,u.refractionRatio.value=h.refractionRatio),h.lightMap){u.lightMap.value=h.lightMap;const y=s._useLegacyLights===!0?Math.PI:1;u.lightMapIntensity.value=h.lightMapIntensity*y,e(h.lightMap,u.lightMapTransform)}h.aoMap&&(u.aoMap.value=h.aoMap,u.aoMapIntensity.value=h.aoMapIntensity,e(h.aoMap,u.aoMapTransform))}function o(u,h){u.diffuse.value.copy(h.color),u.opacity.value=h.opacity,h.map&&(u.map.value=h.map,e(h.map,u.mapTransform))}function r(u,h){u.dashSize.value=h.dashSize,u.totalSize.value=h.dashSize+h.gapSize,u.scale.value=h.scale}function c(u,h,_,y){u.diffuse.value.copy(h.color),u.opacity.value=h.opacity,u.size.value=h.size*_,u.scale.value=y*.5,h.map&&(u.map.value=h.map,e(h.map,u.uvTransform)),h.alphaMap&&(u.alphaMap.value=h.alphaMap,e(h.alphaMap,u.alphaMapTransform)),h.alphaTest>0&&(u.alphaTest.value=h.alphaTest)}function l(u,h){u.diffuse.value.copy(h.color),u.opacity.value=h.opacity,u.rotation.value=h.rotation,h.map&&(u.map.value=h.map,e(h.map,u.mapTransform)),h.alphaMap&&(u.alphaMap.value=h.alphaMap,e(h.alphaMap,u.alphaMapTransform)),h.alphaTest>0&&(u.alphaTest.value=h.alphaTest)}function d(u,h){u.specular.value.copy(h.specular),u.shininess.value=Math.max(h.shininess,1e-4)}function f(u,h){h.gradientMap&&(u.gradientMap.value=h.gradientMap)}function p(u,h){u.metalness.value=h.metalness,h.metalnessMap&&(u.metalnessMap.value=h.metalnessMap,e(h.metalnessMap,u.metalnessMapTransform)),u.roughness.value=h.roughness,h.roughnessMap&&(u.roughnessMap.value=h.roughnessMap,e(h.roughnessMap,u.roughnessMapTransform)),t.get(h).envMap&&(u.envMapIntensity.value=h.envMapIntensity)}function v(u,h,_){u.ior.value=h.ior,h.sheen>0&&(u.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),u.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(u.sheenColorMap.value=h.sheenColorMap,e(h.sheenColorMap,u.sheenColorMapTransform)),h.sheenRoughnessMap&&(u.sheenRoughnessMap.value=h.sheenRoughnessMap,e(h.sheenRoughnessMap,u.sheenRoughnessMapTransform))),h.clearcoat>0&&(u.clearcoat.value=h.clearcoat,u.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(u.clearcoatMap.value=h.clearcoatMap,e(h.clearcoatMap,u.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(u.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,e(h.clearcoatRoughnessMap,u.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(u.clearcoatNormalMap.value=h.clearcoatNormalMap,e(h.clearcoatNormalMap,u.clearcoatNormalMapTransform),u.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Pe&&u.clearcoatNormalScale.value.negate())),h.iridescence>0&&(u.iridescence.value=h.iridescence,u.iridescenceIOR.value=h.iridescenceIOR,u.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],u.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(u.iridescenceMap.value=h.iridescenceMap,e(h.iridescenceMap,u.iridescenceMapTransform)),h.iridescenceThicknessMap&&(u.iridescenceThicknessMap.value=h.iridescenceThicknessMap,e(h.iridescenceThicknessMap,u.iridescenceThicknessMapTransform))),h.transmission>0&&(u.transmission.value=h.transmission,u.transmissionSamplerMap.value=_.texture,u.transmissionSamplerSize.value.set(_.width,_.height),h.transmissionMap&&(u.transmissionMap.value=h.transmissionMap,e(h.transmissionMap,u.transmissionMapTransform)),u.thickness.value=h.thickness,h.thicknessMap&&(u.thicknessMap.value=h.thicknessMap,e(h.thicknessMap,u.thicknessMapTransform)),u.attenuationDistance.value=h.attenuationDistance,u.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(u.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(u.anisotropyMap.value=h.anisotropyMap,e(h.anisotropyMap,u.anisotropyMapTransform))),u.specularIntensity.value=h.specularIntensity,u.specularColor.value.copy(h.specularColor),h.specularColorMap&&(u.specularColorMap.value=h.specularColorMap,e(h.specularColorMap,u.specularColorMapTransform)),h.specularIntensityMap&&(u.specularIntensityMap.value=h.specularIntensityMap,e(h.specularIntensityMap,u.specularIntensityMapTransform))}function m(u,h){h.matcap&&(u.matcap.value=h.matcap)}function g(u,h){const _=t.get(h).light;u.referencePosition.value.setFromMatrixPosition(_.matrixWorld),u.nearDistance.value=_.shadow.camera.near,u.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function Up(s,t,e,i){let n={},a={},o=[];const r=e.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(_,y){const x=y.program;i.uniformBlockBinding(_,x)}function l(_,y){let x=n[_.id];x===void 0&&(m(_),x=d(_),n[_.id]=x,_.addEventListener("dispose",u));const E=y.program;i.updateUBOMapping(_,E);const b=t.render.frame;a[_.id]!==b&&(p(_),a[_.id]=b)}function d(_){const y=f();_.__bindingPointIndex=y;const x=s.createBuffer(),E=_.__size,b=_.usage;return s.bindBuffer(s.UNIFORM_BUFFER,x),s.bufferData(s.UNIFORM_BUFFER,E,b),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,y,x),x}function f(){for(let _=0;_<r;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(_){const y=n[_.id],x=_.uniforms,E=_.__cache;s.bindBuffer(s.UNIFORM_BUFFER,y);for(let b=0,A=x.length;b<A;b++){const D=Array.isArray(x[b])?x[b]:[x[b]];for(let M=0,T=D.length;M<T;M++){const I=D[M];if(v(I,b,M,E)===!0){const N=I.__offset,X=Array.isArray(I.value)?I.value:[I.value];let R=0;for(let U=0;U<X.length;U++){const B=X[U],V=g(B);typeof B=="number"||typeof B=="boolean"?(I.__data[0]=B,s.bufferSubData(s.UNIFORM_BUFFER,N+R,I.__data)):B.isMatrix3?(I.__data[0]=B.elements[0],I.__data[1]=B.elements[1],I.__data[2]=B.elements[2],I.__data[3]=0,I.__data[4]=B.elements[3],I.__data[5]=B.elements[4],I.__data[6]=B.elements[5],I.__data[7]=0,I.__data[8]=B.elements[6],I.__data[9]=B.elements[7],I.__data[10]=B.elements[8],I.__data[11]=0):(B.toArray(I.__data,R),R+=V.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,N,I.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function v(_,y,x,E){const b=_.value,A=y+"_"+x;if(E[A]===void 0)return typeof b=="number"||typeof b=="boolean"?E[A]=b:E[A]=b.clone(),!0;{const D=E[A];if(typeof b=="number"||typeof b=="boolean"){if(D!==b)return E[A]=b,!0}else if(D.equals(b)===!1)return D.copy(b),!0}return!1}function m(_){const y=_.uniforms;let x=0;const E=16;for(let A=0,D=y.length;A<D;A++){const M=Array.isArray(y[A])?y[A]:[y[A]];for(let T=0,I=M.length;T<I;T++){const N=M[T],X=Array.isArray(N.value)?N.value:[N.value];for(let R=0,U=X.length;R<U;R++){const B=X[R],V=g(B),K=x%E;K!==0&&E-K<V.boundary&&(x+=E-K),N.__data=new Float32Array(V.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=x,x+=V.storage}}}const b=x%E;return b>0&&(x+=E-b),_.__size=x,_.__cache={},this}function g(_){const y={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(y.boundary=4,y.storage=4):_.isVector2?(y.boundary=8,y.storage=8):_.isVector3||_.isColor?(y.boundary=16,y.storage=12):_.isVector4?(y.boundary=16,y.storage=16):_.isMatrix3?(y.boundary=48,y.storage=48):_.isMatrix4?(y.boundary=64,y.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),y}function u(_){const y=_.target;y.removeEventListener("dispose",u);const x=o.indexOf(y.__bindingPointIndex);o.splice(x,1),s.deleteBuffer(n[y.id]),delete n[y.id],delete a[y.id]}function h(){for(const _ in n)s.deleteBuffer(n[_]);o=[],n={},a={}}return{bind:c,update:l,dispose:h}}class jo{constructor(t={}){const{canvas:e=Lc(),context:i=null,depth:n=!0,stencil:a=!0,alpha:o=!1,antialias:r=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:f=!1}=t;this.isWebGLRenderer=!0;let p;i!==null?p=i.getContextAttributes().alpha:p=o;const v=new Uint32Array(4),m=new Int32Array(4);let g=null,u=null;const h=[],_=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ge,this._useLegacyLights=!1,this.toneMapping=mi,this.toneMappingExposure=1;const y=this;let x=!1,E=0,b=0,A=null,D=-1,M=null;const T=new me,I=new me;let N=null;const X=new jt(0);let R=0,U=e.width,B=e.height,V=1,K=null,q=null;const j=new me(0,0,U,B),it=new me(0,0,U,B);let nt=!1;const Z=new Aa;let C=!1,G=!1,$=null;const z=new he,Y=new Nt,st=new H,ut={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function bt(){return A===null?V:1}let F=i;function At(P,W){for(let tt=0;tt<P.length;tt++){const et=P[tt],Q=e.getContext(et,W);if(Q!==null)return Q}return null}try{const P={alpha:!0,depth:n,stencil:a,antialias:r,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:d,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ya}`),e.addEventListener("webglcontextlost",ct,!1),e.addEventListener("webglcontextrestored",O,!1),e.addEventListener("webglcontextcreationerror",pt,!1),F===null){const W=["webgl2","webgl","experimental-webgl"];if(y.isWebGL1Renderer===!0&&W.shift(),F=At(W,P),F===null)throw At(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&F instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),F.getShaderPrecisionFormat===void 0&&(F.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let mt,vt,ht,Bt,Tt,w,S,k,rt,at,ot,gt,dt,xt,Rt,Ut,lt,Jt,Vt,zt,Ct,Mt,L,ft;function wt(){mt=new Yu(F),vt=new Bu(F,mt,t),mt.init(vt),Mt=new Lp(F,mt,vt),ht=new Cp(F,mt,vt),Bt=new Ku(F),Tt=new mp,w=new Rp(F,mt,ht,Tt,vt,Mt,Bt),S=new Hu(y),k=new Wu(y),rt=new ih(F,vt),L=new zu(F,mt,rt,vt),at=new Xu(F,rt,Bt,L),ot=new Ju(F,at,rt,Bt),Vt=new ju(F,vt,w),Ut=new Gu(Tt),gt=new pp(y,S,k,mt,vt,L,Ut),dt=new Np(y,Tt),xt=new vp,Rt=new Tp(mt,vt),Jt=new Uu(y,S,k,ht,ot,p,c),lt=new Pp(y,ot,vt),ft=new Up(F,Bt,vt,ht),zt=new Fu(F,mt,Bt,vt),Ct=new $u(F,mt,Bt,vt),Bt.programs=gt.programs,y.capabilities=vt,y.extensions=mt,y.properties=Tt,y.renderLists=xt,y.shadowMap=lt,y.state=ht,y.info=Bt}wt();const St=new Op(y,F);this.xr=St,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const P=mt.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){const P=mt.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(P){P!==void 0&&(V=P,this.setSize(U,B,!1))},this.getSize=function(P){return P.set(U,B)},this.setSize=function(P,W,tt=!0){if(St.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}U=P,B=W,e.width=Math.floor(P*V),e.height=Math.floor(W*V),tt===!0&&(e.style.width=P+"px",e.style.height=W+"px"),this.setViewport(0,0,P,W)},this.getDrawingBufferSize=function(P){return P.set(U*V,B*V).floor()},this.setDrawingBufferSize=function(P,W,tt){U=P,B=W,V=tt,e.width=Math.floor(P*tt),e.height=Math.floor(W*tt),this.setViewport(0,0,P,W)},this.getCurrentViewport=function(P){return P.copy(T)},this.getViewport=function(P){return P.copy(j)},this.setViewport=function(P,W,tt,et){P.isVector4?j.set(P.x,P.y,P.z,P.w):j.set(P,W,tt,et),ht.viewport(T.copy(j).multiplyScalar(V).floor())},this.getScissor=function(P){return P.copy(it)},this.setScissor=function(P,W,tt,et){P.isVector4?it.set(P.x,P.y,P.z,P.w):it.set(P,W,tt,et),ht.scissor(I.copy(it).multiplyScalar(V).floor())},this.getScissorTest=function(){return nt},this.setScissorTest=function(P){ht.setScissorTest(nt=P)},this.setOpaqueSort=function(P){K=P},this.setTransparentSort=function(P){q=P},this.getClearColor=function(P){return P.copy(Jt.getClearColor())},this.setClearColor=function(){Jt.setClearColor.apply(Jt,arguments)},this.getClearAlpha=function(){return Jt.getClearAlpha()},this.setClearAlpha=function(){Jt.setClearAlpha.apply(Jt,arguments)},this.clear=function(P=!0,W=!0,tt=!0){let et=0;if(P){let Q=!1;if(A!==null){const Et=A.texture.format;Q=Et===Po||Et===wo||Et===Ao}if(Q){const Et=A.texture.type,Pt=Et===gi||Et===ui||Et===Ma||Et===Pi||Et===So||Et===bo,Dt=Jt.getClearColor(),Ft=Jt.getClearAlpha(),Wt=Dt.r,Gt=Dt.g,Ht=Dt.b;Pt?(v[0]=Wt,v[1]=Gt,v[2]=Ht,v[3]=Ft,F.clearBufferuiv(F.COLOR,0,v)):(m[0]=Wt,m[1]=Gt,m[2]=Ht,m[3]=Ft,F.clearBufferiv(F.COLOR,0,m))}else et|=F.COLOR_BUFFER_BIT}W&&(et|=F.DEPTH_BUFFER_BIT),tt&&(et|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(et)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ct,!1),e.removeEventListener("webglcontextrestored",O,!1),e.removeEventListener("webglcontextcreationerror",pt,!1),xt.dispose(),Rt.dispose(),Tt.dispose(),S.dispose(),k.dispose(),ot.dispose(),L.dispose(),ft.dispose(),gt.dispose(),St.dispose(),St.removeEventListener("sessionstart",re),St.removeEventListener("sessionend",Zt),$&&($.dispose(),$=null),le.stop()};function ct(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),x=!0}function O(){console.log("THREE.WebGLRenderer: Context Restored."),x=!1;const P=Bt.autoReset,W=lt.enabled,tt=lt.autoUpdate,et=lt.needsUpdate,Q=lt.type;wt(),Bt.autoReset=P,lt.enabled=W,lt.autoUpdate=tt,lt.needsUpdate=et,lt.type=Q}function pt(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function yt(P){const W=P.target;W.removeEventListener("dispose",yt),It(W)}function It(P){Lt(P),Tt.remove(P)}function Lt(P){const W=Tt.get(P).programs;W!==void 0&&(W.forEach(function(tt){gt.releaseProgram(tt)}),P.isShaderMaterial&&gt.releaseShaderCache(P))}this.renderBufferDirect=function(P,W,tt,et,Q,Et){W===null&&(W=ut);const Pt=Q.isMesh&&Q.matrixWorld.determinant()<0,Dt=rl(P,W,tt,et,Q);ht.setMaterial(et,Pt);let Ft=tt.index,Wt=1;if(et.wireframe===!0){if(Ft=at.getWireframeAttribute(tt),Ft===void 0)return;Wt=2}const Gt=tt.drawRange,Ht=tt.attributes.position;let oe=Gt.start*Wt,Ce=(Gt.start+Gt.count)*Wt;Et!==null&&(oe=Math.max(oe,Et.start*Wt),Ce=Math.min(Ce,(Et.start+Et.count)*Wt)),Ft!==null?(oe=Math.max(oe,0),Ce=Math.min(Ce,Ft.count)):Ht!=null&&(oe=Math.max(oe,0),Ce=Math.min(Ce,Ht.count));const fe=Ce-oe;if(fe<0||fe===1/0)return;L.setup(Q,et,Dt,tt,Ft);let Ze,ie=zt;if(Ft!==null&&(Ze=rt.get(Ft),ie=Ct,ie.setIndex(Ze)),Q.isMesh)et.wireframe===!0?(ht.setLineWidth(et.wireframeLinewidth*bt()),ie.setMode(F.LINES)):ie.setMode(F.TRIANGLES);else if(Q.isLine){let Yt=et.linewidth;Yt===void 0&&(Yt=1),ht.setLineWidth(Yt*bt()),Q.isLineSegments?ie.setMode(F.LINES):Q.isLineLoop?ie.setMode(F.LINE_LOOP):ie.setMode(F.LINE_STRIP)}else Q.isPoints?ie.setMode(F.POINTS):Q.isSprite&&ie.setMode(F.TRIANGLES);if(Q.isBatchedMesh)ie.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else if(Q.isInstancedMesh)ie.renderInstances(oe,fe,Q.count);else if(tt.isInstancedBufferGeometry){const Yt=tt._maxInstanceCount!==void 0?tt._maxInstanceCount:1/0,ys=Math.min(tt.instanceCount,Yt);ie.renderInstances(oe,fe,ys)}else ie.render(oe,fe)};function Kt(P,W,tt){P.transparent===!0&&P.side===ni&&P.forceSinglePass===!1?(P.side=Pe,P.needsUpdate=!0,In(P,W,tt),P.side=vi,P.needsUpdate=!0,In(P,W,tt),P.side=ni):In(P,W,tt)}this.compile=function(P,W,tt=null){tt===null&&(tt=P),u=Rt.get(tt),u.init(),_.push(u),tt.traverseVisible(function(Q){Q.isLight&&Q.layers.test(W.layers)&&(u.pushLight(Q),Q.castShadow&&u.pushShadow(Q))}),P!==tt&&P.traverseVisible(function(Q){Q.isLight&&Q.layers.test(W.layers)&&(u.pushLight(Q),Q.castShadow&&u.pushShadow(Q))}),u.setupLights(y._useLegacyLights);const et=new Set;return P.traverse(function(Q){const Et=Q.material;if(Et)if(Array.isArray(Et))for(let Pt=0;Pt<Et.length;Pt++){const Dt=Et[Pt];Kt(Dt,tt,Q),et.add(Dt)}else Kt(Et,tt,Q),et.add(Et)}),_.pop(),u=null,et},this.compileAsync=function(P,W,tt=null){const et=this.compile(P,W,tt);return new Promise(Q=>{function Et(){if(et.forEach(function(Pt){Tt.get(Pt).currentProgram.isReady()&&et.delete(Pt)}),et.size===0){Q(P);return}setTimeout(Et,10)}mt.get("KHR_parallel_shader_compile")!==null?Et():setTimeout(Et,10)})};let qt=null;function se(P){qt&&qt(P)}function re(){le.stop()}function Zt(){le.start()}const le=new Vo;le.setAnimationLoop(se),typeof self<"u"&&le.setContext(self),this.setAnimationLoop=function(P){qt=P,St.setAnimationLoop(P),P===null?le.stop():le.start()},St.addEventListener("sessionstart",re),St.addEventListener("sessionend",Zt),this.render=function(P,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(x===!0)return;P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),St.enabled===!0&&St.isPresenting===!0&&(St.cameraAutoUpdate===!0&&St.updateCamera(W),W=St.getCamera()),P.isScene===!0&&P.onBeforeRender(y,P,W,A),u=Rt.get(P,_.length),u.init(),_.push(u),z.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),Z.setFromProjectionMatrix(z),G=this.localClippingEnabled,C=Ut.init(this.clippingPlanes,G),g=xt.get(P,h.length),g.init(),h.push(g),Xe(P,W,0,y.sortObjects),g.finish(),y.sortObjects===!0&&g.sort(K,q),this.info.render.frame++,C===!0&&Ut.beginShadows();const tt=u.state.shadowsArray;if(lt.render(tt,P,W),C===!0&&Ut.endShadows(),this.info.autoReset===!0&&this.info.reset(),Jt.render(g,P),u.setupLights(y._useLegacyLights),W.isArrayCamera){const et=W.cameras;for(let Q=0,Et=et.length;Q<Et;Q++){const Pt=et[Q];Ia(g,P,Pt,Pt.viewport)}}else Ia(g,P,W);A!==null&&(w.updateMultisampleRenderTarget(A),w.updateRenderTargetMipmap(A)),P.isScene===!0&&P.onAfterRender(y,P,W),L.resetDefaultState(),D=-1,M=null,_.pop(),_.length>0?u=_[_.length-1]:u=null,h.pop(),h.length>0?g=h[h.length-1]:g=null};function Xe(P,W,tt,et){if(P.visible===!1)return;if(P.layers.test(W.layers)){if(P.isGroup)tt=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(W);else if(P.isLight)u.pushLight(P),P.castShadow&&u.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||Z.intersectsSprite(P)){et&&st.setFromMatrixPosition(P.matrixWorld).applyMatrix4(z);const Pt=ot.update(P),Dt=P.material;Dt.visible&&g.push(P,Pt,Dt,tt,st.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||Z.intersectsObject(P))){const Pt=ot.update(P),Dt=P.material;if(et&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),st.copy(P.boundingSphere.center)):(Pt.boundingSphere===null&&Pt.computeBoundingSphere(),st.copy(Pt.boundingSphere.center)),st.applyMatrix4(P.matrixWorld).applyMatrix4(z)),Array.isArray(Dt)){const Ft=Pt.groups;for(let Wt=0,Gt=Ft.length;Wt<Gt;Wt++){const Ht=Ft[Wt],oe=Dt[Ht.materialIndex];oe&&oe.visible&&g.push(P,Pt,oe,tt,st.z,Ht)}}else Dt.visible&&g.push(P,Pt,Dt,tt,st.z,null)}}const Et=P.children;for(let Pt=0,Dt=Et.length;Pt<Dt;Pt++)Xe(Et[Pt],W,tt,et)}function Ia(P,W,tt,et){const Q=P.opaque,Et=P.transmissive,Pt=P.transparent;u.setupLightsView(tt),C===!0&&Ut.setGlobalState(y.clippingPlanes,tt),Et.length>0&&al(Q,Et,W,tt),et&&ht.viewport(T.copy(et)),Q.length>0&&Ln(Q,W,tt),Et.length>0&&Ln(Et,W,tt),Pt.length>0&&Ln(Pt,W,tt),ht.buffers.depth.setTest(!0),ht.buffers.depth.setMask(!0),ht.buffers.color.setMask(!0),ht.setPolygonOffset(!1)}function al(P,W,tt,et){if((tt.isScene===!0?tt.overrideMaterial:null)!==null)return;const Et=vt.isWebGL2;$===null&&($=new Li(1,1,{generateMipmaps:!0,type:mt.has("EXT_color_buffer_half_float")?An:gi,minFilter:bn,samples:Et?4:0})),y.getDrawingBufferSize(Y),Et?$.setSize(Y.x,Y.y):$.setSize(pa(Y.x),pa(Y.y));const Pt=y.getRenderTarget();y.setRenderTarget($),y.getClearColor(X),R=y.getClearAlpha(),R<1&&y.setClearColor(16777215,.5),y.clear();const Dt=y.toneMapping;y.toneMapping=mi,Ln(P,tt,et),w.updateMultisampleRenderTarget($),w.updateRenderTargetMipmap($);let Ft=!1;for(let Wt=0,Gt=W.length;Wt<Gt;Wt++){const Ht=W[Wt],oe=Ht.object,Ce=Ht.geometry,fe=Ht.material,Ze=Ht.group;if(fe.side===ni&&oe.layers.test(et.layers)){const ie=fe.side;fe.side=Pe,fe.needsUpdate=!0,Da(oe,tt,et,Ce,fe,Ze),fe.side=ie,fe.needsUpdate=!0,Ft=!0}}Ft===!0&&(w.updateMultisampleRenderTarget($),w.updateRenderTargetMipmap($)),y.setRenderTarget(Pt),y.setClearColor(X,R),y.toneMapping=Dt}function Ln(P,W,tt){const et=W.isScene===!0?W.overrideMaterial:null;for(let Q=0,Et=P.length;Q<Et;Q++){const Pt=P[Q],Dt=Pt.object,Ft=Pt.geometry,Wt=et===null?Pt.material:et,Gt=Pt.group;Dt.layers.test(tt.layers)&&Da(Dt,W,tt,Ft,Wt,Gt)}}function Da(P,W,tt,et,Q,Et){P.onBeforeRender(y,W,tt,et,Q,Et),P.modelViewMatrix.multiplyMatrices(tt.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),Q.onBeforeRender(y,W,tt,et,P,Et),Q.transparent===!0&&Q.side===ni&&Q.forceSinglePass===!1?(Q.side=Pe,Q.needsUpdate=!0,y.renderBufferDirect(tt,W,et,Q,P,Et),Q.side=vi,Q.needsUpdate=!0,y.renderBufferDirect(tt,W,et,Q,P,Et),Q.side=ni):y.renderBufferDirect(tt,W,et,Q,P,Et),P.onAfterRender(y,W,tt,et,Q,Et)}function In(P,W,tt){W.isScene!==!0&&(W=ut);const et=Tt.get(P),Q=u.state.lights,Et=u.state.shadowsArray,Pt=Q.state.version,Dt=gt.getParameters(P,Q.state,Et,W,tt),Ft=gt.getProgramCacheKey(Dt);let Wt=et.programs;et.environment=P.isMeshStandardMaterial?W.environment:null,et.fog=W.fog,et.envMap=(P.isMeshStandardMaterial?k:S).get(P.envMap||et.environment),Wt===void 0&&(P.addEventListener("dispose",yt),Wt=new Map,et.programs=Wt);let Gt=Wt.get(Ft);if(Gt!==void 0){if(et.currentProgram===Gt&&et.lightsStateVersion===Pt)return Na(P,Dt),Gt}else Dt.uniforms=gt.getUniforms(P),P.onBuild(tt,Dt,y),P.onBeforeCompile(Dt,y),Gt=gt.acquireProgram(Dt,Ft),Wt.set(Ft,Gt),et.uniforms=Dt.uniforms;const Ht=et.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(Ht.clippingPlanes=Ut.uniform),Na(P,Dt),et.needsLights=ll(P),et.lightsStateVersion=Pt,et.needsLights&&(Ht.ambientLightColor.value=Q.state.ambient,Ht.lightProbe.value=Q.state.probe,Ht.directionalLights.value=Q.state.directional,Ht.directionalLightShadows.value=Q.state.directionalShadow,Ht.spotLights.value=Q.state.spot,Ht.spotLightShadows.value=Q.state.spotShadow,Ht.rectAreaLights.value=Q.state.rectArea,Ht.ltc_1.value=Q.state.rectAreaLTC1,Ht.ltc_2.value=Q.state.rectAreaLTC2,Ht.pointLights.value=Q.state.point,Ht.pointLightShadows.value=Q.state.pointShadow,Ht.hemisphereLights.value=Q.state.hemi,Ht.directionalShadowMap.value=Q.state.directionalShadowMap,Ht.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,Ht.spotShadowMap.value=Q.state.spotShadowMap,Ht.spotLightMatrix.value=Q.state.spotLightMatrix,Ht.spotLightMap.value=Q.state.spotLightMap,Ht.pointShadowMap.value=Q.state.pointShadowMap,Ht.pointShadowMatrix.value=Q.state.pointShadowMatrix),et.currentProgram=Gt,et.uniformsList=null,Gt}function Oa(P){if(P.uniformsList===null){const W=P.currentProgram.getUniforms();P.uniformsList=ss.seqWithValue(W.seq,P.uniforms)}return P.uniformsList}function Na(P,W){const tt=Tt.get(P);tt.outputColorSpace=W.outputColorSpace,tt.batching=W.batching,tt.instancing=W.instancing,tt.instancingColor=W.instancingColor,tt.skinning=W.skinning,tt.morphTargets=W.morphTargets,tt.morphNormals=W.morphNormals,tt.morphColors=W.morphColors,tt.morphTargetsCount=W.morphTargetsCount,tt.numClippingPlanes=W.numClippingPlanes,tt.numIntersection=W.numClipIntersection,tt.vertexAlphas=W.vertexAlphas,tt.vertexTangents=W.vertexTangents,tt.toneMapping=W.toneMapping}function rl(P,W,tt,et,Q){W.isScene!==!0&&(W=ut),w.resetTextureUnits();const Et=W.fog,Pt=et.isMeshStandardMaterial?W.environment:null,Dt=A===null?y.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:ai,Ft=(et.isMeshStandardMaterial?k:S).get(et.envMap||Pt),Wt=et.vertexColors===!0&&!!tt.attributes.color&&tt.attributes.color.itemSize===4,Gt=!!tt.attributes.tangent&&(!!et.normalMap||et.anisotropy>0),Ht=!!tt.morphAttributes.position,oe=!!tt.morphAttributes.normal,Ce=!!tt.morphAttributes.color;let fe=mi;et.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(fe=y.toneMapping);const Ze=tt.morphAttributes.position||tt.morphAttributes.normal||tt.morphAttributes.color,ie=Ze!==void 0?Ze.length:0,Yt=Tt.get(et),ys=u.state.lights;if(C===!0&&(G===!0||P!==M)){const Oe=P===M&&et.id===D;Ut.setState(et,P,Oe)}let ae=!1;et.version===Yt.__version?(Yt.needsLights&&Yt.lightsStateVersion!==ys.state.version||Yt.outputColorSpace!==Dt||Q.isBatchedMesh&&Yt.batching===!1||!Q.isBatchedMesh&&Yt.batching===!0||Q.isInstancedMesh&&Yt.instancing===!1||!Q.isInstancedMesh&&Yt.instancing===!0||Q.isSkinnedMesh&&Yt.skinning===!1||!Q.isSkinnedMesh&&Yt.skinning===!0||Q.isInstancedMesh&&Yt.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&Yt.instancingColor===!1&&Q.instanceColor!==null||Yt.envMap!==Ft||et.fog===!0&&Yt.fog!==Et||Yt.numClippingPlanes!==void 0&&(Yt.numClippingPlanes!==Ut.numPlanes||Yt.numIntersection!==Ut.numIntersection)||Yt.vertexAlphas!==Wt||Yt.vertexTangents!==Gt||Yt.morphTargets!==Ht||Yt.morphNormals!==oe||Yt.morphColors!==Ce||Yt.toneMapping!==fe||vt.isWebGL2===!0&&Yt.morphTargetsCount!==ie)&&(ae=!0):(ae=!0,Yt.__version=et.version);let _i=Yt.currentProgram;ae===!0&&(_i=In(et,W,Q));let Ua=!1,pn=!1,xs=!1;const ve=_i.getUniforms(),yi=Yt.uniforms;if(ht.useProgram(_i.program)&&(Ua=!0,pn=!0,xs=!0),et.id!==D&&(D=et.id,pn=!0),Ua||M!==P){ve.setValue(F,"projectionMatrix",P.projectionMatrix),ve.setValue(F,"viewMatrix",P.matrixWorldInverse);const Oe=ve.map.cameraPosition;Oe!==void 0&&Oe.setValue(F,st.setFromMatrixPosition(P.matrixWorld)),vt.logarithmicDepthBuffer&&ve.setValue(F,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(et.isMeshPhongMaterial||et.isMeshToonMaterial||et.isMeshLambertMaterial||et.isMeshBasicMaterial||et.isMeshStandardMaterial||et.isShaderMaterial)&&ve.setValue(F,"isOrthographic",P.isOrthographicCamera===!0),M!==P&&(M=P,pn=!0,xs=!0)}if(Q.isSkinnedMesh){ve.setOptional(F,Q,"bindMatrix"),ve.setOptional(F,Q,"bindMatrixInverse");const Oe=Q.skeleton;Oe&&(vt.floatVertexTextures?(Oe.boneTexture===null&&Oe.computeBoneTexture(),ve.setValue(F,"boneTexture",Oe.boneTexture,w)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}Q.isBatchedMesh&&(ve.setOptional(F,Q,"batchingTexture"),ve.setValue(F,"batchingTexture",Q._matricesTexture,w));const Ms=tt.morphAttributes;if((Ms.position!==void 0||Ms.normal!==void 0||Ms.color!==void 0&&vt.isWebGL2===!0)&&Vt.update(Q,tt,_i),(pn||Yt.receiveShadow!==Q.receiveShadow)&&(Yt.receiveShadow=Q.receiveShadow,ve.setValue(F,"receiveShadow",Q.receiveShadow)),et.isMeshGouraudMaterial&&et.envMap!==null&&(yi.envMap.value=Ft,yi.flipEnvMap.value=Ft.isCubeTexture&&Ft.isRenderTargetTexture===!1?-1:1),pn&&(ve.setValue(F,"toneMappingExposure",y.toneMappingExposure),Yt.needsLights&&ol(yi,xs),Et&&et.fog===!0&&dt.refreshFogUniforms(yi,Et),dt.refreshMaterialUniforms(yi,et,V,B,$),ss.upload(F,Oa(Yt),yi,w)),et.isShaderMaterial&&et.uniformsNeedUpdate===!0&&(ss.upload(F,Oa(Yt),yi,w),et.uniformsNeedUpdate=!1),et.isSpriteMaterial&&ve.setValue(F,"center",Q.center),ve.setValue(F,"modelViewMatrix",Q.modelViewMatrix),ve.setValue(F,"normalMatrix",Q.normalMatrix),ve.setValue(F,"modelMatrix",Q.matrixWorld),et.isShaderMaterial||et.isRawShaderMaterial){const Oe=et.uniformsGroups;for(let Es=0,cl=Oe.length;Es<cl;Es++)if(vt.isWebGL2){const za=Oe[Es];ft.update(za,_i),ft.bind(za,_i)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return _i}function ol(P,W){P.ambientLightColor.needsUpdate=W,P.lightProbe.needsUpdate=W,P.directionalLights.needsUpdate=W,P.directionalLightShadows.needsUpdate=W,P.pointLights.needsUpdate=W,P.pointLightShadows.needsUpdate=W,P.spotLights.needsUpdate=W,P.spotLightShadows.needsUpdate=W,P.rectAreaLights.needsUpdate=W,P.hemisphereLights.needsUpdate=W}function ll(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(P,W,tt){Tt.get(P.texture).__webglTexture=W,Tt.get(P.depthTexture).__webglTexture=tt;const et=Tt.get(P);et.__hasExternalTextures=!0,et.__hasExternalTextures&&(et.__autoAllocateDepthBuffer=tt===void 0,et.__autoAllocateDepthBuffer||mt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),et.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(P,W){const tt=Tt.get(P);tt.__webglFramebuffer=W,tt.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(P,W=0,tt=0){A=P,E=W,b=tt;let et=!0,Q=null,Et=!1,Pt=!1;if(P){const Ft=Tt.get(P);Ft.__useDefaultFramebuffer!==void 0?(ht.bindFramebuffer(F.FRAMEBUFFER,null),et=!1):Ft.__webglFramebuffer===void 0?w.setupRenderTarget(P):Ft.__hasExternalTextures&&w.rebindTextures(P,Tt.get(P.texture).__webglTexture,Tt.get(P.depthTexture).__webglTexture);const Wt=P.texture;(Wt.isData3DTexture||Wt.isDataArrayTexture||Wt.isCompressedArrayTexture)&&(Pt=!0);const Gt=Tt.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(Gt[W])?Q=Gt[W][tt]:Q=Gt[W],Et=!0):vt.isWebGL2&&P.samples>0&&w.useMultisampledRTT(P)===!1?Q=Tt.get(P).__webglMultisampledFramebuffer:Array.isArray(Gt)?Q=Gt[tt]:Q=Gt,T.copy(P.viewport),I.copy(P.scissor),N=P.scissorTest}else T.copy(j).multiplyScalar(V).floor(),I.copy(it).multiplyScalar(V).floor(),N=nt;if(ht.bindFramebuffer(F.FRAMEBUFFER,Q)&&vt.drawBuffers&&et&&ht.drawBuffers(P,Q),ht.viewport(T),ht.scissor(I),ht.setScissorTest(N),Et){const Ft=Tt.get(P.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+W,Ft.__webglTexture,tt)}else if(Pt){const Ft=Tt.get(P.texture),Wt=W||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ft.__webglTexture,tt||0,Wt)}D=-1},this.readRenderTargetPixels=function(P,W,tt,et,Q,Et,Pt){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Dt=Tt.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Pt!==void 0&&(Dt=Dt[Pt]),Dt){ht.bindFramebuffer(F.FRAMEBUFFER,Dt);try{const Ft=P.texture,Wt=Ft.format,Gt=Ft.type;if(Wt!==Ye&&Mt.convert(Wt)!==F.getParameter(F.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ht=Gt===An&&(mt.has("EXT_color_buffer_half_float")||vt.isWebGL2&&mt.has("EXT_color_buffer_float"));if(Gt!==gi&&Mt.convert(Gt)!==F.getParameter(F.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Gt===fi&&(vt.isWebGL2||mt.has("OES_texture_float")||mt.has("WEBGL_color_buffer_float")))&&!Ht){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=P.width-et&&tt>=0&&tt<=P.height-Q&&F.readPixels(W,tt,et,Q,Mt.convert(Wt),Mt.convert(Gt),Et)}finally{const Ft=A!==null?Tt.get(A).__webglFramebuffer:null;ht.bindFramebuffer(F.FRAMEBUFFER,Ft)}}},this.copyFramebufferToTexture=function(P,W,tt=0){const et=Math.pow(2,-tt),Q=Math.floor(W.image.width*et),Et=Math.floor(W.image.height*et);w.setTexture2D(W,0),F.copyTexSubImage2D(F.TEXTURE_2D,tt,0,0,P.x,P.y,Q,Et),ht.unbindTexture()},this.copyTextureToTexture=function(P,W,tt,et=0){const Q=W.image.width,Et=W.image.height,Pt=Mt.convert(tt.format),Dt=Mt.convert(tt.type);w.setTexture2D(tt,0),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,tt.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,tt.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,tt.unpackAlignment),W.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,et,P.x,P.y,Q,Et,Pt,Dt,W.image.data):W.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,et,P.x,P.y,W.mipmaps[0].width,W.mipmaps[0].height,Pt,W.mipmaps[0].data):F.texSubImage2D(F.TEXTURE_2D,et,P.x,P.y,Pt,Dt,W.image),et===0&&tt.generateMipmaps&&F.generateMipmap(F.TEXTURE_2D),ht.unbindTexture()},this.copyTextureToTexture3D=function(P,W,tt,et,Q=0){if(y.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Et=P.max.x-P.min.x+1,Pt=P.max.y-P.min.y+1,Dt=P.max.z-P.min.z+1,Ft=Mt.convert(et.format),Wt=Mt.convert(et.type);let Gt;if(et.isData3DTexture)w.setTexture3D(et,0),Gt=F.TEXTURE_3D;else if(et.isDataArrayTexture||et.isCompressedArrayTexture)w.setTexture2DArray(et,0),Gt=F.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,et.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,et.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,et.unpackAlignment);const Ht=F.getParameter(F.UNPACK_ROW_LENGTH),oe=F.getParameter(F.UNPACK_IMAGE_HEIGHT),Ce=F.getParameter(F.UNPACK_SKIP_PIXELS),fe=F.getParameter(F.UNPACK_SKIP_ROWS),Ze=F.getParameter(F.UNPACK_SKIP_IMAGES),ie=tt.isCompressedTexture?tt.mipmaps[Q]:tt.image;F.pixelStorei(F.UNPACK_ROW_LENGTH,ie.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,ie.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,P.min.x),F.pixelStorei(F.UNPACK_SKIP_ROWS,P.min.y),F.pixelStorei(F.UNPACK_SKIP_IMAGES,P.min.z),tt.isDataTexture||tt.isData3DTexture?F.texSubImage3D(Gt,Q,W.x,W.y,W.z,Et,Pt,Dt,Ft,Wt,ie.data):tt.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),F.compressedTexSubImage3D(Gt,Q,W.x,W.y,W.z,Et,Pt,Dt,Ft,ie.data)):F.texSubImage3D(Gt,Q,W.x,W.y,W.z,Et,Pt,Dt,Ft,Wt,ie),F.pixelStorei(F.UNPACK_ROW_LENGTH,Ht),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,oe),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Ce),F.pixelStorei(F.UNPACK_SKIP_ROWS,fe),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Ze),Q===0&&et.generateMipmaps&&F.generateMipmap(Gt),ht.unbindTexture()},this.initTexture=function(P){P.isCubeTexture?w.setTextureCube(P,0):P.isData3DTexture?w.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?w.setTexture2DArray(P,0):w.setTexture2D(P,0),ht.unbindTexture()},this.resetState=function(){E=0,b=0,A=null,ht.reset(),L.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return si}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===Ea?"display-p3":"srgb",e.unpackColorSpace=Qt.workingColorSpace===gs?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===ge?Ri:Ro}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===Ri?ge:ai}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}}class zp extends jo{}zp.prototype.isWebGL1Renderer=!0;class Fp extends xe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}}class us extends qe{constructor(t=1,e=1,i=1,n=32,a=1,o=!1,r=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:n,heightSegments:a,openEnded:o,thetaStart:r,thetaLength:c};const l=this;n=Math.floor(n),a=Math.floor(a);const d=[],f=[],p=[],v=[];let m=0;const g=[],u=i/2;let h=0;_(),o===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(d),this.setAttribute("position",new Me(f,3)),this.setAttribute("normal",new Me(p,3)),this.setAttribute("uv",new Me(v,2));function _(){const x=new H,E=new H;let b=0;const A=(e-t)/i;for(let D=0;D<=a;D++){const M=[],T=D/a,I=T*(e-t)+t;for(let N=0;N<=n;N++){const X=N/n,R=X*c+r,U=Math.sin(R),B=Math.cos(R);E.x=I*U,E.y=-T*i+u,E.z=I*B,f.push(E.x,E.y,E.z),x.set(U,A,B).normalize(),p.push(x.x,x.y,x.z),v.push(X,1-T),M.push(m++)}g.push(M)}for(let D=0;D<n;D++)for(let M=0;M<a;M++){const T=g[M][D],I=g[M+1][D],N=g[M+1][D+1],X=g[M][D+1];d.push(T,I,X),d.push(I,N,X),b+=6}l.addGroup(h,b,0),h+=b}function y(x){const E=m,b=new Nt,A=new H;let D=0;const M=x===!0?t:e,T=x===!0?1:-1;for(let N=1;N<=n;N++)f.push(0,u*T,0),p.push(0,T,0),v.push(.5,.5),m++;const I=m;for(let N=0;N<=n;N++){const R=N/n*c+r,U=Math.cos(R),B=Math.sin(R);A.x=M*B,A.y=u*T,A.z=M*U,f.push(A.x,A.y,A.z),p.push(0,T,0),b.x=U*.5+.5,b.y=B*.5*T+.5,v.push(b.x,b.y),m++}for(let N=0;N<n;N++){const X=E+N,R=I+N;x===!0?d.push(R,R+1,X):d.push(R+1,R,X),D+=3}l.addGroup(h,D,x===!0?1:2),h+=D}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new us(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Ca extends qe{constructor(t=[],e=[],i=1,n=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:n};const a=[],o=[];r(n),l(i),d(),this.setAttribute("position",new Me(a,3)),this.setAttribute("normal",new Me(a.slice(),3)),this.setAttribute("uv",new Me(o,2)),n===0?this.computeVertexNormals():this.normalizeNormals();function r(_){const y=new H,x=new H,E=new H;for(let b=0;b<e.length;b+=3)v(e[b+0],y),v(e[b+1],x),v(e[b+2],E),c(y,x,E,_)}function c(_,y,x,E){const b=E+1,A=[];for(let D=0;D<=b;D++){A[D]=[];const M=_.clone().lerp(x,D/b),T=y.clone().lerp(x,D/b),I=b-D;for(let N=0;N<=I;N++)N===0&&D===b?A[D][N]=M:A[D][N]=M.clone().lerp(T,N/I)}for(let D=0;D<b;D++)for(let M=0;M<2*(b-D)-1;M++){const T=Math.floor(M/2);M%2===0?(p(A[D][T+1]),p(A[D+1][T]),p(A[D][T])):(p(A[D][T+1]),p(A[D+1][T+1]),p(A[D+1][T]))}}function l(_){const y=new H;for(let x=0;x<a.length;x+=3)y.x=a[x+0],y.y=a[x+1],y.z=a[x+2],y.normalize().multiplyScalar(_),a[x+0]=y.x,a[x+1]=y.y,a[x+2]=y.z}function d(){const _=new H;for(let y=0;y<a.length;y+=3){_.x=a[y+0],_.y=a[y+1],_.z=a[y+2];const x=u(_)/2/Math.PI+.5,E=h(_)/Math.PI+.5;o.push(x,1-E)}m(),f()}function f(){for(let _=0;_<o.length;_+=6){const y=o[_+0],x=o[_+2],E=o[_+4],b=Math.max(y,x,E),A=Math.min(y,x,E);b>.9&&A<.1&&(y<.2&&(o[_+0]+=1),x<.2&&(o[_+2]+=1),E<.2&&(o[_+4]+=1))}}function p(_){a.push(_.x,_.y,_.z)}function v(_,y){const x=_*3;y.x=t[x+0],y.y=t[x+1],y.z=t[x+2]}function m(){const _=new H,y=new H,x=new H,E=new H,b=new Nt,A=new Nt,D=new Nt;for(let M=0,T=0;M<a.length;M+=9,T+=6){_.set(a[M+0],a[M+1],a[M+2]),y.set(a[M+3],a[M+4],a[M+5]),x.set(a[M+6],a[M+7],a[M+8]),b.set(o[T+0],o[T+1]),A.set(o[T+2],o[T+3]),D.set(o[T+4],o[T+5]),E.copy(_).add(y).add(x).divideScalar(3);const I=u(E);g(b,T+0,_,I),g(A,T+2,y,I),g(D,T+4,x,I)}}function g(_,y,x,E){E<0&&_.x===1&&(o[y]=_.x-1),x.x===0&&x.z===0&&(o[y]=E/2/Math.PI+.5)}function u(_){return Math.atan2(_.z,-_.x)}function h(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ca(t.vertices,t.indices,t.radius,t.details)}}class Ra extends Ca{constructor(t=1,e=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],n=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,n,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Ra(t.radius,t.detail)}}class Tn extends qe{constructor(t=1,e=32,i=16,n=0,a=Math.PI*2,o=0,r=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:n,phiLength:a,thetaStart:o,thetaLength:r},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const c=Math.min(o+r,Math.PI);let l=0;const d=[],f=new H,p=new H,v=[],m=[],g=[],u=[];for(let h=0;h<=i;h++){const _=[],y=h/i;let x=0;h===0&&o===0?x=.5/e:h===i&&c===Math.PI&&(x=-.5/e);for(let E=0;E<=e;E++){const b=E/e;f.x=-t*Math.cos(n+b*a)*Math.sin(o+y*r),f.y=t*Math.cos(o+y*r),f.z=t*Math.sin(n+b*a)*Math.sin(o+y*r),m.push(f.x,f.y,f.z),p.copy(f).normalize(),g.push(p.x,p.y,p.z),u.push(b+x,1-y),_.push(l++)}d.push(_)}for(let h=0;h<i;h++)for(let _=0;_<e;_++){const y=d[h][_+1],x=d[h][_],E=d[h+1][_],b=d[h+1][_+1];(h!==0||o>0)&&v.push(y,x,b),(h!==i-1||c<Math.PI)&&v.push(x,E,b)}this.setIndex(v),this.setAttribute("position",new Me(m,3)),this.setAttribute("normal",new Me(g,3)),this.setAttribute("uv",new Me(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Tn(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class ne extends Rn{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new jt(16777215),this.specular=new jt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new jt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Lo,this.normalScale=new Nt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=xa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Jo extends xe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new jt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}const ta=new he,oo=new H,lo=new H;class Bp{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Nt(512,512),this.map=null,this.mapPass=null,this.matrix=new he,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Aa,this._frameExtents=new Nt(1,1),this._viewportCount=1,this._viewports=[new me(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;oo.setFromMatrixPosition(t.matrixWorld),e.position.copy(oo),lo.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(lo),e.updateMatrixWorld(),ta.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ta),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(ta)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Gp extends Bp{constructor(){super(new Wo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class co extends Jo{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(xe.DEFAULT_UP),this.updateMatrix(),this.target=new xe,this.shadow=new Gp}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class ho extends Jo{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Hp{constructor(t,e,i=0,n=1/0){this.ray=new Sa(t,e),this.near=i,this.far=n,this.camera=null,this.layers=new ba,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}intersectObject(t,e=!0,i=[]){return ga(t,this,i,e),i.sort(uo),i}intersectObjects(t,e=!0,i=[]){for(let n=0,a=t.length;n<a;n++)ga(t[n],this,i,e);return i.sort(uo),i}}function uo(s,t){return s.distance-t.distance}function ga(s,t,e,i){if(s.layers.test(t.layers)&&s.raycast(t,e),i===!0){const n=s.children;for(let a=0,o=n.length;a<o;a++)ga(n[a],t,e,!0)}}class va{constructor(t=1,e=0,i=0){return this.radius=t,this.phi=e,this.theta=i,this}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(Se(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ya}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ya);const fo={type:"change"},ea={type:"start"},po={type:"end"},es=new Sa,mo=new di,kp=Math.cos(70*Rc.DEG2RAD);class Vp extends Oi{constructor(t,e){super(),this.object=t,this.domElement=e,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new H,this.cursor=new H,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:zi.ROTATE,MIDDLE:zi.DOLLY,RIGHT:zi.PAN},this.touches={ONE:Fi.ROTATE,TWO:Fi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return r.phi},this.getAzimuthalAngle=function(){return r.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(L){L.addEventListener("keydown",Rt),this._domElementKeyEvents=L},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Rt),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(fo),i.update(),a=n.NONE},this.update=function(){const L=new H,ft=new Ii().setFromUnitVectors(t.up,new H(0,1,0)),wt=ft.clone().invert(),St=new H,ct=new Ii,O=new H,pt=2*Math.PI;return function(It=null){const Lt=i.object.position;L.copy(Lt).sub(i.target),L.applyQuaternion(ft),r.setFromVector3(L),i.autoRotate&&a===n.NONE&&N(T(It)),i.enableDamping?(r.theta+=c.theta*i.dampingFactor,r.phi+=c.phi*i.dampingFactor):(r.theta+=c.theta,r.phi+=c.phi);let Kt=i.minAzimuthAngle,qt=i.maxAzimuthAngle;isFinite(Kt)&&isFinite(qt)&&(Kt<-Math.PI?Kt+=pt:Kt>Math.PI&&(Kt-=pt),qt<-Math.PI?qt+=pt:qt>Math.PI&&(qt-=pt),Kt<=qt?r.theta=Math.max(Kt,Math.min(qt,r.theta)):r.theta=r.theta>(Kt+qt)/2?Math.max(Kt,r.theta):Math.min(qt,r.theta)),r.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,r.phi)),r.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(d,i.dampingFactor):i.target.add(d),i.target.sub(i.cursor),i.target.clampLength(i.minTargetRadius,i.maxTargetRadius),i.target.add(i.cursor),i.zoomToCursor&&b||i.object.isOrthographicCamera?r.radius=j(r.radius):r.radius=j(r.radius*l),L.setFromSpherical(r),L.applyQuaternion(wt),Lt.copy(i.target).add(L),i.object.lookAt(i.target),i.enableDamping===!0?(c.theta*=1-i.dampingFactor,c.phi*=1-i.dampingFactor,d.multiplyScalar(1-i.dampingFactor)):(c.set(0,0,0),d.set(0,0,0));let se=!1;if(i.zoomToCursor&&b){let re=null;if(i.object.isPerspectiveCamera){const Zt=L.length();re=j(Zt*l);const le=Zt-re;i.object.position.addScaledVector(x,le),i.object.updateMatrixWorld()}else if(i.object.isOrthographicCamera){const Zt=new H(E.x,E.y,0);Zt.unproject(i.object),i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/l)),i.object.updateProjectionMatrix(),se=!0;const le=new H(E.x,E.y,0);le.unproject(i.object),i.object.position.sub(le).add(Zt),i.object.updateMatrixWorld(),re=L.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;re!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(re).add(i.object.position):(es.origin.copy(i.object.position),es.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(es.direction))<kp?t.lookAt(i.target):(mo.setFromNormalAndCoplanarPoint(i.object.up,i.target),es.intersectPlane(mo,i.target))))}else i.object.isOrthographicCamera&&(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/l)),i.object.updateProjectionMatrix(),se=!0);return l=1,b=!1,se||St.distanceToSquared(i.object.position)>o||8*(1-ct.dot(i.object.quaternion))>o||O.distanceToSquared(i.target)>0?(i.dispatchEvent(fo),St.copy(i.object.position),ct.copy(i.object.quaternion),O.copy(i.target),!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",Jt),i.domElement.removeEventListener("pointerdown",w),i.domElement.removeEventListener("pointercancel",k),i.domElement.removeEventListener("wheel",ot),i.domElement.removeEventListener("pointermove",S),i.domElement.removeEventListener("pointerup",k),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",Rt),i._domElementKeyEvents=null)};const i=this,n={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let a=n.NONE;const o=1e-6,r=new va,c=new va;let l=1;const d=new H,f=new Nt,p=new Nt,v=new Nt,m=new Nt,g=new Nt,u=new Nt,h=new Nt,_=new Nt,y=new Nt,x=new H,E=new Nt;let b=!1;const A=[],D={};let M=!1;function T(L){return L!==null?2*Math.PI/60*i.autoRotateSpeed*L:2*Math.PI/60/60*i.autoRotateSpeed}function I(L){const ft=Math.abs(L*.01);return Math.pow(.95,i.zoomSpeed*ft)}function N(L){c.theta-=L}function X(L){c.phi-=L}const R=function(){const L=new H;return function(wt,St){L.setFromMatrixColumn(St,0),L.multiplyScalar(-wt),d.add(L)}}(),U=function(){const L=new H;return function(wt,St){i.screenSpacePanning===!0?L.setFromMatrixColumn(St,1):(L.setFromMatrixColumn(St,0),L.crossVectors(i.object.up,L)),L.multiplyScalar(wt),d.add(L)}}(),B=function(){const L=new H;return function(wt,St){const ct=i.domElement;if(i.object.isPerspectiveCamera){const O=i.object.position;L.copy(O).sub(i.target);let pt=L.length();pt*=Math.tan(i.object.fov/2*Math.PI/180),R(2*wt*pt/ct.clientHeight,i.object.matrix),U(2*St*pt/ct.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(R(wt*(i.object.right-i.object.left)/i.object.zoom/ct.clientWidth,i.object.matrix),U(St*(i.object.top-i.object.bottom)/i.object.zoom/ct.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function V(L){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?l/=L:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function K(L){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?l*=L:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function q(L,ft){if(!i.zoomToCursor)return;b=!0;const wt=i.domElement.getBoundingClientRect(),St=L-wt.left,ct=ft-wt.top,O=wt.width,pt=wt.height;E.x=St/O*2-1,E.y=-(ct/pt)*2+1,x.set(E.x,E.y,1).unproject(i.object).sub(i.object.position).normalize()}function j(L){return Math.max(i.minDistance,Math.min(i.maxDistance,L))}function it(L){f.set(L.clientX,L.clientY)}function nt(L){q(L.clientX,L.clientX),h.set(L.clientX,L.clientY)}function Z(L){m.set(L.clientX,L.clientY)}function C(L){p.set(L.clientX,L.clientY),v.subVectors(p,f).multiplyScalar(i.rotateSpeed);const ft=i.domElement;N(2*Math.PI*v.x/ft.clientHeight),X(2*Math.PI*v.y/ft.clientHeight),f.copy(p),i.update()}function G(L){_.set(L.clientX,L.clientY),y.subVectors(_,h),y.y>0?V(I(y.y)):y.y<0&&K(I(y.y)),h.copy(_),i.update()}function $(L){g.set(L.clientX,L.clientY),u.subVectors(g,m).multiplyScalar(i.panSpeed),B(u.x,u.y),m.copy(g),i.update()}function z(L){q(L.clientX,L.clientY),L.deltaY<0?K(I(L.deltaY)):L.deltaY>0&&V(I(L.deltaY)),i.update()}function Y(L){let ft=!1;switch(L.code){case i.keys.UP:L.ctrlKey||L.metaKey||L.shiftKey?X(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):B(0,i.keyPanSpeed),ft=!0;break;case i.keys.BOTTOM:L.ctrlKey||L.metaKey||L.shiftKey?X(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):B(0,-i.keyPanSpeed),ft=!0;break;case i.keys.LEFT:L.ctrlKey||L.metaKey||L.shiftKey?N(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):B(i.keyPanSpeed,0),ft=!0;break;case i.keys.RIGHT:L.ctrlKey||L.metaKey||L.shiftKey?N(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):B(-i.keyPanSpeed,0),ft=!0;break}ft&&(L.preventDefault(),i.update())}function st(L){if(A.length===1)f.set(L.pageX,L.pageY);else{const ft=Mt(L),wt=.5*(L.pageX+ft.x),St=.5*(L.pageY+ft.y);f.set(wt,St)}}function ut(L){if(A.length===1)m.set(L.pageX,L.pageY);else{const ft=Mt(L),wt=.5*(L.pageX+ft.x),St=.5*(L.pageY+ft.y);m.set(wt,St)}}function bt(L){const ft=Mt(L),wt=L.pageX-ft.x,St=L.pageY-ft.y,ct=Math.sqrt(wt*wt+St*St);h.set(0,ct)}function F(L){i.enableZoom&&bt(L),i.enablePan&&ut(L)}function At(L){i.enableZoom&&bt(L),i.enableRotate&&st(L)}function mt(L){if(A.length==1)p.set(L.pageX,L.pageY);else{const wt=Mt(L),St=.5*(L.pageX+wt.x),ct=.5*(L.pageY+wt.y);p.set(St,ct)}v.subVectors(p,f).multiplyScalar(i.rotateSpeed);const ft=i.domElement;N(2*Math.PI*v.x/ft.clientHeight),X(2*Math.PI*v.y/ft.clientHeight),f.copy(p)}function vt(L){if(A.length===1)g.set(L.pageX,L.pageY);else{const ft=Mt(L),wt=.5*(L.pageX+ft.x),St=.5*(L.pageY+ft.y);g.set(wt,St)}u.subVectors(g,m).multiplyScalar(i.panSpeed),B(u.x,u.y),m.copy(g)}function ht(L){const ft=Mt(L),wt=L.pageX-ft.x,St=L.pageY-ft.y,ct=Math.sqrt(wt*wt+St*St);_.set(0,ct),y.set(0,Math.pow(_.y/h.y,i.zoomSpeed)),V(y.y),h.copy(_);const O=(L.pageX+ft.x)*.5,pt=(L.pageY+ft.y)*.5;q(O,pt)}function Bt(L){i.enableZoom&&ht(L),i.enablePan&&vt(L)}function Tt(L){i.enableZoom&&ht(L),i.enableRotate&&mt(L)}function w(L){i.enabled!==!1&&(A.length===0&&(i.domElement.setPointerCapture(L.pointerId),i.domElement.addEventListener("pointermove",S),i.domElement.addEventListener("pointerup",k)),Vt(L),L.pointerType==="touch"?Ut(L):rt(L))}function S(L){i.enabled!==!1&&(L.pointerType==="touch"?lt(L):at(L))}function k(L){zt(L),A.length===0&&(i.domElement.releasePointerCapture(L.pointerId),i.domElement.removeEventListener("pointermove",S),i.domElement.removeEventListener("pointerup",k)),i.dispatchEvent(po),a=n.NONE}function rt(L){let ft;switch(L.button){case 0:ft=i.mouseButtons.LEFT;break;case 1:ft=i.mouseButtons.MIDDLE;break;case 2:ft=i.mouseButtons.RIGHT;break;default:ft=-1}switch(ft){case zi.DOLLY:if(i.enableZoom===!1)return;nt(L),a=n.DOLLY;break;case zi.ROTATE:if(L.ctrlKey||L.metaKey||L.shiftKey){if(i.enablePan===!1)return;Z(L),a=n.PAN}else{if(i.enableRotate===!1)return;it(L),a=n.ROTATE}break;case zi.PAN:if(L.ctrlKey||L.metaKey||L.shiftKey){if(i.enableRotate===!1)return;it(L),a=n.ROTATE}else{if(i.enablePan===!1)return;Z(L),a=n.PAN}break;default:a=n.NONE}a!==n.NONE&&i.dispatchEvent(ea)}function at(L){switch(a){case n.ROTATE:if(i.enableRotate===!1)return;C(L);break;case n.DOLLY:if(i.enableZoom===!1)return;G(L);break;case n.PAN:if(i.enablePan===!1)return;$(L);break}}function ot(L){i.enabled===!1||i.enableZoom===!1||a!==n.NONE||(L.preventDefault(),i.dispatchEvent(ea),z(gt(L)),i.dispatchEvent(po))}function gt(L){const ft=L.deltaMode,wt={clientX:L.clientX,clientY:L.clientY,deltaY:L.deltaY};switch(ft){case 1:wt.deltaY*=16;break;case 2:wt.deltaY*=100;break}return L.ctrlKey&&!M&&(wt.deltaY*=10),wt}function dt(L){L.key==="Control"&&(M=!0,document.addEventListener("keyup",xt,{passive:!0,capture:!0}))}function xt(L){L.key==="Control"&&(M=!1,document.removeEventListener("keyup",xt,{passive:!0,capture:!0}))}function Rt(L){i.enabled===!1||i.enablePan===!1||Y(L)}function Ut(L){switch(Ct(L),A.length){case 1:switch(i.touches.ONE){case Fi.ROTATE:if(i.enableRotate===!1)return;st(L),a=n.TOUCH_ROTATE;break;case Fi.PAN:if(i.enablePan===!1)return;ut(L),a=n.TOUCH_PAN;break;default:a=n.NONE}break;case 2:switch(i.touches.TWO){case Fi.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;F(L),a=n.TOUCH_DOLLY_PAN;break;case Fi.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;At(L),a=n.TOUCH_DOLLY_ROTATE;break;default:a=n.NONE}break;default:a=n.NONE}a!==n.NONE&&i.dispatchEvent(ea)}function lt(L){switch(Ct(L),a){case n.TOUCH_ROTATE:if(i.enableRotate===!1)return;mt(L),i.update();break;case n.TOUCH_PAN:if(i.enablePan===!1)return;vt(L),i.update();break;case n.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;Bt(L),i.update();break;case n.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;Tt(L),i.update();break;default:a=n.NONE}}function Jt(L){i.enabled!==!1&&L.preventDefault()}function Vt(L){A.push(L.pointerId)}function zt(L){delete D[L.pointerId];for(let ft=0;ft<A.length;ft++)if(A[ft]==L.pointerId){A.splice(ft,1);return}}function Ct(L){let ft=D[L.pointerId];ft===void 0&&(ft=new Nt,D[L.pointerId]=ft),ft.set(L.pageX,L.pageY)}function Mt(L){const ft=L.pointerId===A[0]?A[1]:A[0];return D[ft]}i.domElement.addEventListener("contextmenu",Jt),i.domElement.addEventListener("pointerdown",w),i.domElement.addEventListener("pointercancel",k),i.domElement.addEventListener("wheel",ot,{passive:!1}),document.addEventListener("keydown",dt,{passive:!0,capture:!0}),this.update()}}const J={SEED:null,MAZE_DEGREE:4,MIN_MAZE_DEGREE:4,MAX_MAZE_DEGREE:16,BRANCHING_FACTOR:.1,BRAID_FACTOR:.1,SHADOW_SIZE_FACTOR:.075,TELEPORT_MAP_OPACITY:.25,PLAYER_COLLISION_RADIUS:.275,PLAYER_COLLISION_OFFSET_X:0,PLAYER_COLLISION_OFFSET_Y:-.125,PLAYER_START_X:.5,PLAYER_START_Y:1.7,PLAYER_SHADOW_OFFSET_X:-.28,PLAYER_SHADOW_OFFSET_Y:-.15,PLAYER_SHADOW_WIDTH_FACTOR:.45,PLAYER_SHADOW_HEIGHT_FACTOR:.25,SHOW_COLLISION_DEBUG:!1,MOVE_SPEED_FACTOR:2,ROT_SPEED:3,HUNTER_SPEED:800,getHunterCount(s){return s>=16?3:s>=8?2:1},getTeleportCount(s){if(s<=8)return Math.max(2,Math.floor(s/2));const t=s-8;return Math.floor(.125*t*t+.5*t+4)},getPathfinderCount(s){return this.getTeleportCount(s)},COLORS:{WALL:"#444",PATH_KNOWN:"#88ccff",PATH_VISITED:"#888",NEON_UP:"#00ffff",NEON_DOWN:"#ff00ff",NEON_UP_UNUSED:"#006666",NEON_DOWN_UNUSED:"#660066",START:"#ff0",EXIT:"#0f0",PLAYER:"#f00",PLAYER_OUTLINE:"#ffffff",HUNTER:"#a0f",TELEPORT:"#ff8c00",TELEPORT_INACTIVE:"#555555",REVEALED_PATH:"#ffffff",ELEVATOR_BIDIRECTIONAL:"#ffffff",THREE_PLAYER:16711680,THREE_HUNTER:11141375,THREE_START:16776960,THREE_EXIT:65280,THREE_VISITED:8947848,THREE_KNOWN:8965375,THREE_ELEVATOR_UP:65535,THREE_ELEVATOR_DOWN:16711935,THREE_TELEPORT:16747520,THREE_KEY:16766720,THREE_ELEVATOR_SHAFT:{bottom:16711935,top:65535}}},_a={en:{gameTitle:"VOID ESCAPE",gameCredits:"a game by Bernard Rodrigues",activeHunters:"Active Hunters",activeTeleports:"Active Teleports",activeKeys:"Active Keys",availablePathfinders:"Available Pathfinders",mazeDegree:"Maze Degree",safeMode:"Safe Mode",generateMaze:"NEW GAME",continue:"CONTINUE",degreeHint:"Controls the grid size. Higher values create larger, more complex mazes.",safeModeHint:"When active, no hunters will spawn in the maze.",storyMsg1:"The mystical church of chaos worship!",storyMsg2:"The greatest monument to chaos worship.",storyMsg3:"I am a priestess of the word of the Jelly god.",storyMsg4:"But their word is a lie! The chaos is a lie!",storyMsg5:"So I was condemned to exile...",storyMsg6:"Condemned to the void...",hudKeys:"KEYS",hudPathfinders:"PATHFINDERS",hudFloor:"Floor",hudVisited:"Visited",proximityDetector:"PROXIMITY DETECTOR",mapLegendTitle:"MAP LEGEND",legendVisited:"Visited Path",legendKnown:"Known Path",legendStart:"Starting Point",legendExit:"Maze Exit",legendHunter:"Void Hunter",legendTeleport:"Teleport",legendElevator:"Elevator",controlsHintTitle:"CONTROLS HINT",actionMove:"Move / Rotate",actionElevator:"Elevator Up / Down",actionMap:"3D Holographic Map",actionZoom:"Zoom Minimap",msgVoidHuntersDetected:"Void Hunters Detected",msgKeySecured:"Key secured ({collected}/{total})",msgExitUnlocked:"Exit unlocked",msgKeysRemaining:"{count} key(s) remaining",msgNoOtherActiveTeleport:"No other active teleports",msgExitFound:"Exit found",msgNoPathfindersRemaining:"No pathfinders remaining",msgExitNotFoundYet:"Exit not found yet",msgSafePointTeleport:"Safe point... Teleport?",msgOopsNoisyShit:"Oops... noisy sh*t!",msgWhereAmI:"Where am I?",msgElevatorUp:"Up?",msgElevatorDown:"Down?",msgWhichWay:"Which way?",msgDidYouHearThat:"Did you hear that?",msgIWasDetected:"Damn! I was detected.",msgFoundPathfinder:"Found a pathfinder!",msgWorldSaved:"World saved. What now?",statusLabel:"HUNTER STATUS:",statusScanning:"SCANNING",statusActive:"ACTIVE",statusSleeping:"SLEEPING",statusTracking:"TRACKING MODE",statusConverging:"HUNTERS CONVERGING ({ticks} Ticks)",pauseTitle:"PAUSED",resume:"RESUME",victoryTitle:"Mission Accomplished",victoryText:"You have successfully navigated the 3D void.",victoryCompletion:"MAP COMPLETION: {percent}%",mapCompletion:"MAP COMPLETION",playAgain:"PLAY AGAIN",mainMenu:"MAIN MENU",gameOverTitle:"Terminated",gameOverText:"You were caught by the void hunters.",saving:"SAVING...",teleportAnomaly:"TELEPORT ANOMALY",ticks:"TICKS",map3dInstructions:"Drag to rotate | Scroll to zoom | M to return",teleportWarning:"TELEPORT",map:"MAP",teleport:"TELEPORT",teleportationLink:"TELEPORTATION LINK",teleportJumpSector:"Jump to Sector {floor}F?",teleportTargetGrid:"Target Grid: ({x}, {y})",teleportGo:"GO",teleportCancel:"CANCEL"},ptBr:{gameTitle:"VOID ESCAPE",gameCredits:"um jogo de Bernard Rodrigues",activeHunters:"Caçadores Ativos",activeTeleports:"Teletransportes Ativos",activeKeys:"Chaves Ativas",availablePathfinders:"Localizadores Disponíveis",mazeDegree:"Grau do Labirinto",safeMode:"Modo Seguro",generateMaze:"NOVO JOGO",continue:"CONTINUAR",degreeHint:"Controla o tamanho da grade. Valores maiores criam labirintos maiores e mais complexos.",safeModeHint:"Quando ativo, nenhum caçador surgirá no labirinto.",storyMsg1:"A igreja mística do culto ao caos!",storyMsg2:"O maior monumento ao culto do caos.",storyMsg3:"Sou uma sacerdotisa da palavra do deus Geleia.",storyMsg4:"Mas sua palavra é uma mentira! O caos é uma mentira!",storyMsg5:"Então fui condenada ao exílio...",storyMsg6:"Condenada ao vazio...",hudKeys:"CHAVES",hudPathfinders:"LOCALIZADORES",hudFloor:"Andar",hudVisited:"Visitado",proximityDetector:"DETECTOR DE PROXIMIDADE",mapLegendTitle:"LEGENDA DO MAPA",legendVisited:"Caminho Visitado",legendKnown:"Caminho Conhecido",legendStart:"Ponto de Partida",legendExit:"Saída do Labirinto",legendHunter:"Caçador do Vazio",legendTeleport:"Teletransporte",legendElevator:"Elevador",controlsHintTitle:"DICA DE CONTROLES",actionMove:"Mover / Girar",actionElevator:"Elevador Subir / Descer",actionMap:"Mapa Holográfico 3D",actionZoom:"Zoom do Minimapa",msgVoidHuntersDetected:"Caçadores do Vazio Detectados",msgKeySecured:"Chave obtida ({collected}/{total})",msgExitUnlocked:"Saída destrancada",msgKeysRemaining:"{count} chave(s) restante(s)",msgNoOtherActiveTeleport:"Nenhum outro teletransporte ativo",msgExitFound:"Saída encontrada",msgNoPathfindersRemaining:"Nenhum localizador restante",msgExitNotFoundYet:"Saída ainda não encontrada",msgSafePointTeleport:"Ponto seguro... Teletransportar?",msgOopsNoisyShit:"Ops... troço barulhento!",msgWhereAmI:"Onde estou?",msgElevatorUp:"Subir?",msgElevatorDown:"Descer?",msgWhichWay:"Que direção?",msgDidYouHearThat:"Ouviu alguma coisa?",msgIWasDetected:"Droga! Fui detectada.",msgFoundPathfinder:"Localizador encontrado!",msgWorldSaved:"Salvei o mundo. E agora?",statusLabel:"STATUS DO CAÇADOR:",statusScanning:"ESCANEANDO",statusActive:"ATIVO",statusSleeping:"DORMINDO",statusTracking:"MODO DE RASTREAMENTO",statusConverging:"CAÇADORES CONVERGINDO ({ticks} Ticks)",pauseTitle:"PAUSA",resume:"RETOMAR",victoryTitle:"Missão Cumprida",victoryText:"Você atravessou o vazio 3D com sucesso.",victoryCompletion:"MAPA COMPLETO: {percent}%",mapCompletion:"MAPA COMPLETO",playAgain:"JOGAR NOVAMENTE",mainMenu:"MENU PRINCIPAL",gameOverTitle:"Eliminado",gameOverText:"Você foi pego pelos caçadores do vazio.",saving:"SALVANDO...",teleportAnomaly:"ANOMALIA DE TELETRANSPORTE",ticks:"TICKS",map3dInstructions:"Arraste para girar | Role para zoom | M para voltar",teleportWarning:"TELETRANSPORTE",map:"MAPA",teleport:"TELETRANSPORTE",teleportationLink:"LINK DE TELETRANSPORTE",teleportJumpSector:"Pular para o Setor {floor}F?",teleportTargetGrid:"Coordenada Alvo: ({x}, {y})",teleportGo:"IR",teleportCancel:"CANCELAR"},ja:{gameTitle:"ヴォイド・エスケープ",gameCredits:"ベルナルド・ホドリゲス制作",activeHunters:"アクティブなハンター",activeTeleports:"アクティブなテレポート",activeKeys:"アクティブな鍵",availablePathfinders:"使用可能なパスファインダー",mazeDegree:"迷路の難易度",safeMode:"セーフモード",generateMaze:"ニューゲーム",continue:"つづきから",degreeHint:"グリッドのサイズを調整します。値が大きいほど、より広く複雑な迷路になります。",safeModeHint:"有効にすると、迷路にハンターが出現しなくなります。",storyMsg1:"混沌崇拝の神秘的な教会!",storyMsg2:"混沌崇拝の最大の記念碑。",storyMsg3:"私はゼリー神の言葉に仕える巫女よ。",storyMsg4:"でも彼らの言葉は嘘!混沌なんて嘘っぱちなんだから!",storyMsg5:"だから追放の刑に処されたの…",storyMsg6:"虚空へと追放されて…",hudKeys:"鍵",hudPathfinders:"パスファインダー",hudFloor:"階層",hudVisited:"訪問済み",proximityDetector:"近接探知機",mapLegendTitle:"マップ凡例",legendVisited:"訪問済みの道",legendKnown:"既知の道",legendStart:"スタート地点",legendExit:"迷路の出口",legendHunter:"虚空のハンター",legendTeleport:"テレポート",legendElevator:"エレベーター",controlsHintTitle:"操作方法",actionMove:"移動 / 回転",actionElevator:"エレベーター 上昇 / 下降",actionMap:"3Dホログラフィックマップ",actionZoom:"ミニマップのズーム",msgVoidHuntersDetected:"虚空のハンターを検知",msgKeySecured:"鍵を入手 ({collected}/{total})",msgExitUnlocked:"出口の鍵が開いた",msgKeysRemaining:"残り{count}個の鍵",msgNoOtherActiveTeleport:"他に有効なテレポートはない",msgExitFound:"出口を発見",msgNoPathfindersRemaining:"パスファインダーが残っていない",msgExitNotFoundYet:"出口はまだ見つかっていない",msgSafePointTeleport:"安全地帯…テレポートする?",msgOopsNoisyShit:"あら…うるさいったらないわね!",msgWhereAmI:"ここどこ?",msgElevatorUp:"上る?",msgElevatorDown:"下る?",msgWhichWay:"どっちの道?",msgDidYouHearThat:"今の聞こえた?",msgIWasDetected:"しまった、見つかっちゃった!",msgFoundPathfinder:"パスファインダー発見!",msgWorldSaved:"世界を救っちゃった。さて、次は?",statusLabel:"ハンターの状態:",statusScanning:"スキャン中",statusActive:"アクティブ",statusSleeping:"スリープ中",statusTracking:"追跡モード",statusConverging:"ハンターが接近中 ({ticks} ティック)",pauseTitle:"一時停止",resume:"再開",victoryTitle:"任務完了",victoryText:"3Dの虚空を無事に踏破した。",victoryCompletion:"マップ達成度: {percent}%",mapCompletion:"マップ達成度",playAgain:"もう一度プレイ",mainMenu:"メインメニュー",gameOverTitle:"終了",gameOverText:"虚空のハンターに捕まってしまった。",saving:"セーブ中…",teleportAnomaly:"テレポート異常",ticks:"ティック",map3dInstructions:"ドラッグで回転 | スクロールでズーム | Mキーで戻る",teleportWarning:"テレポート",map:"マップ",teleport:"テレポート",teleportationLink:"テレポートリンク",teleportJumpSector:"{floor}階のセクターへ移動する?",teleportTargetGrid:"目標座標: ({x}, {y})",teleportGo:"移動",teleportCancel:"キャンセル"},es:{gameTitle:"ESCAPE DEL VACÍO",gameCredits:"un juego de Bernard Rodrigues",activeHunters:"Cazadores Activos",activeTeleports:"Teletransportes Activos",activeKeys:"Llaves Activas",availablePathfinders:"Localizadores Disponibles",mazeDegree:"Grado del Laberinto",safeMode:"Modo Seguro",generateMaze:"NUEVA PARTIDA",continue:"CONTINUAR",degreeHint:"Controla el tamaño de la cuadrícula. Valores más altos crean laberintos más grandes y complejos.",safeModeHint:"Cuando está activo, no aparecerán cazadores en el laberinto.",storyMsg1:"¡La mística iglesia del culto al caos!",storyMsg2:"El mayor monumento al culto del caos.",storyMsg3:"Soy una sacerdotisa de la palabra del dios Gelatina.",storyMsg4:"¡Pero su palabra es una mentira! ¡El caos es mentira!",storyMsg5:"Así que fui condenada al exilio...",storyMsg6:"Condenada al vacío...",hudKeys:"LLAVES",hudPathfinders:"LOCALIZADORES",hudFloor:"Piso",hudVisited:"Visitado",proximityDetector:"DETECTOR DE PROXIMIDAD",mapLegendTitle:"LEYENDA DEL MAPA",legendVisited:"Camino Visitado",legendKnown:"Camino Conocido",legendStart:"Punto de Partida",legendExit:"Salida del Laberinto",legendHunter:"Cazador del Vacío",legendTeleport:"Teletransporte",legendElevator:"Ascensor",controlsHintTitle:"AYUDA DE CONTROLES",actionMove:"Mover / Girar",actionElevator:"Ascensor Subir / Bajar",actionMap:"Mapa Holográfico 3D",actionZoom:"Zoom del Minimapa",msgVoidHuntersDetected:"Cazadores del Vacío Detectados",msgKeySecured:"Llave obtenida ({collected}/{total})",msgExitUnlocked:"Salida desbloqueada",msgKeysRemaining:"{count} llave(s) restante(s)",msgNoOtherActiveTeleport:"No hay otros teletransportes activos",msgExitFound:"Salida encontrada",msgNoPathfindersRemaining:"No quedan localizadores",msgExitNotFoundYet:"Salida aún no encontrada",msgSafePointTeleport:"Punto seguro... ¿Teletransportarse?",msgOopsNoisyShit:"Ups... ¡qué cosa tan ruidosa!",msgWhereAmI:"¿Dónde estoy?",msgElevatorUp:"¿Subir?",msgElevatorDown:"¿Bajar?",msgWhichWay:"¿Por dónde?",msgDidYouHearThat:"¿Escuchaste eso?",msgIWasDetected:"¡Rayos! Fui detectada.",msgFoundPathfinder:"¡Localizador encontrado!",msgWorldSaved:"Salvé el mundo. ¿Y ahora qué?",statusLabel:"ESTADO DEL CAZADOR:",statusScanning:"ESCANEANDO",statusActive:"ACTIVO",statusSleeping:"DURMIENDO",statusTracking:"MODO DE RASTREO",statusConverging:"CAZADORES CONVERGIENDO ({ticks} Ticks)",pauseTitle:"PAUSA",resume:"REANUDAR",victoryTitle:"Misión Cumplida",victoryText:"Atravesaste el vacío 3D con éxito.",victoryCompletion:"MAPA COMPLETADO: {percent}%",mapCompletion:"MAPA COMPLETADO",playAgain:"JUGAR DE NUEVO",mainMenu:"MENÚ PRINCIPAL",gameOverTitle:"Eliminada",gameOverText:"Fuiste atrapada por los cazadores del vacío.",saving:"GUARDANDO...",teleportAnomaly:"ANOMALÍA DE TELETRANSPORTE",ticks:"TICKS",map3dInstructions:"Arrastra para girar | Desplázate para zoom | M para volver",teleportWarning:"TELETRANSPORTE",map:"MAPA",teleport:"TELETRANSPORTE",teleportationLink:"ENLACE DE TELETRANSPORTE",teleportJumpSector:"¿Saltar al Sector {floor}F?",teleportTargetGrid:"Coordenada Objetivo: ({x}, {y})",teleportGo:"IR",teleportCancel:"CANCELAR"}};let wn="en";function is(s){_a[s]?wn=s:wn="en"}function Wp(){if(typeof navigator<"u"){const s=navigator.language||navigator.userLanguage;if(s){const t=s.toLowerCase();if(t.startsWith("pt")){is("ptBr");return}if(t.startsWith("ja")){is("ja");return}if(t.startsWith("es")){is("es");return}}}is("en")}Wp();function Ot(s,t={},e=wn){var n,a;let i=((n=_a[e])==null?void 0:n[s])||((a=_a.en)==null?void 0:a[s])||s;return Object.keys(t).forEach(o=>{i=i.replace(`{${o}}`,t[o])}),i}function Qo(s=wn){typeof document<"u"&&document.querySelectorAll("[data-i18n]").forEach(e=>{const i=e.getAttribute("data-i18n"),n=Ot(i,{},s);n!==i&&(e.tagName==="INPUT"&&e.type==="button"?e.value=n:e.textContent=n)})}class tl{constructor(){this._data=[]}get size(){return this._data.length}push(t){this._data.push(t),this._bubbleUp(this._data.length-1)}pop(){const t=this._data[0],e=this._data.pop();return this._data.length>0&&(this._data[0]=e,this._siftDown(0)),t}_bubbleUp(t){for(;t>0;){const e=t-1>>1;if(this._data[e].f<=this._data[t].f)break;[this._data[e],this._data[t]]=[this._data[t],this._data[e]],t=e}}_siftDown(t){const e=this._data.length;for(;;){let i=t;const n=2*t+1,a=2*t+2;if(n<e&&this._data[n].f<this._data[i].f&&(i=n),a<e&&this._data[a].f<this._data[i].f&&(i=a),i===t)break;[this._data[i],this._data[t]]=[this._data[t],this._data[i]],t=i}}}const Yp=[{dx:1,dy:0,dz:0},{dx:-1,dy:0,dz:0},{dx:0,dy:1,dz:0},{dx:0,dy:-1,dz:0},{dx:0,dy:0,dz:1},{dx:0,dy:0,dz:-1}],el=[{dx:1,dy:0,dz:0},{dx:-1,dy:0,dz:0},{dx:0,dy:1,dz:0},{dx:0,dy:-1,dz:0},{dx:0,dy:0,dz:2},{dx:0,dy:0,dz:-2}];function fs(s,t,e,i,n,a){return Math.abs(s-i)+Math.abs(t-n)+Math.abs(e-a)}function il(s,t,e,i,n=0,a=null){if(s.x===t.x&&s.y===t.y&&s.z===t.z)return[];const o=new Map,r=new Map,c=`${s.x},${s.y},${s.z}`;r.set(c,0);const l=new tl;for(l.push({f:fs(s.x,s.y,s.z,t.x,t.y,t.z),node:s});l.size>0;){const{node:d}=l.pop(),f=`${d.x},${d.y},${d.z}`;if(d.x===t.x&&d.y===t.y&&d.z===t.z)return Xp(o,f);const p=r.get(f);for(const{dx:v,dy:m,dz:g}of el){const u=d.x+v,h=d.y+m,_=d.z+g;if(u<0||u>=i||h<0||h>=i||_<0||_>=i||a&&u===a.x&&h===a.y&&_===a.z)continue;const y=e[u*i*i+h*i+_];if(y===n||y===8)continue;if(g!==0){const b=d.z+g/2;if(e[d.x*i*i+d.y*i+b]===n)continue}const x=`${u},${h},${_}`,E=p+1;E<(r.get(x)??1/0)&&(o.set(x,d),r.set(x,E),l.push({f:E+fs(u,h,_,t.x,t.y,t.z),node:{x:u,y:h,z:_}}))}}return null}function Xp(s,t){const e=[];let i=t;for(;s.has(i);){const n=s.get(i),[a,o,r]=i.split(",").map(Number);e.push({x:a,y:o,z:r}),i=`${n.x},${n.y},${n.z}`}return e.reverse(),e}function $p(s,t,e,i,n=0,a=1/0,o=null){if(s.x===t.x&&s.y===t.y&&s.z===t.z)return 0;const r=new Map,c=`${s.x},${s.y},${s.z}`;r.set(c,0);const l=new tl;for(l.push({f:fs(s.x,s.y,s.z,t.x,t.y,t.z),node:s});l.size>0;){const{node:d}=l.pop(),f=`${d.x},${d.y},${d.z}`,p=r.get(f);if(p>a)return 1/0;if(d.x===t.x&&d.y===t.y&&d.z===t.z)return p;for(const{dx:v,dy:m,dz:g}of el){const u=d.x+v,h=d.y+m,_=d.z+g;if(u<0||u>=i||h<0||h>=i||_<0||_>=i||o&&u===o.x&&h===o.y&&_===o.z)continue;const y=e[u*i*i+h*i+_];if(y===n||y===8)continue;if(g!==0){const b=d.z+g/2;if(e[d.x*i*i+d.y*i+b]===n)continue}const x=`${u},${h},${_}`,E=p+1;E<(r.get(x)??1/0)&&(r.set(x,E),l.push({f:E+fs(u,h,_,t.x,t.y,t.z),node:{x:u,y:h,z:_}}))}}return 1/0}function Kp(s,t,e,i,n=0,a=10){if(s.x===t.x&&s.y===t.y&&s.z===t.z)return 0;const o=[{x:s.x,y:s.y,z:s.z,dist:0}];let r=0;const c=new Map;for(c.set(`${s.x},${s.y},${s.z}`,0);r<o.length;){const l=o[r++];if(!(l.dist>a))for(const{dx:d,dy:f,dz:p}of Yp){const v=l.x+d,m=l.y+f,g=l.z+p;if(v<0||v>=i||m<0||m>=i||g<0||g>=i)continue;const u=e[v*i*i+m*i+g];if(u===n||u===8)continue;const h=`${v},${m},${g}`,y=g%2===0?0:1,x=l.dist+y;if(x<(c.get(h)??1/0)){if(c.set(h,x),v===t.x&&m===t.y&&g===t.z)return x;y===0?o.splice(r,0,{x:v,y:m,z:g,dist:x}):o.push({x:v,y:m,z:g,dist:x})}}}return 1/0}function qp(s,t,e,i,n,a){const o=[{x:s.x,y:s.y,z:s.z,path:[]}];let r=0;const c=new Uint8Array(i*i*i);for(c[s.x*i*i+s.y*i+s.z]=1;r<o.length;){const l=o[r++],d=`${l.x},${l.y},${l.z}`;if(!t.has(d))return l.path;const f=a(l.x,l.y,l.z,e,n,!1);for(const p of f){const v=p.x*i*i+p.y*i+p.z;c[v]||(c[v]=1,o.push({x:p.x,y:p.y,z:p.z,path:[...l.path,p]}))}}return null}class Zp{constructor(t,e,i){this.maze=t,this.id=i,this.history=[],this.visitedNodes=new Set,this.pathToTarget=[],e?(this.x=e.x,this.y=e.y,this.z=e.z,this.visualX=e.x,this.visualY=e.y,this.visualZ=e.z,this.state="WANDERING",this.lastPos={x:this.x,y:this.y,z:this.z},this.visitedNodes.add(`${this.x},${this.y},${this.z}`)):(this.x=null,this.y=null,this.z=null,this.visualX=null,this.visualY=null,this.visualZ=null,this.state="SLEEP",this.lastPos=null),this.jellyTime=0,typeof document<"u"&&(this.lowCanvas=document.createElement("canvas"),this.lowCanvas.width=64,this.lowCanvas.height=64,this.lctx=this.lowCanvas.getContext("2d"))}generateCloudTexture(t=.016){if(this.state==="SLEEP"||(this.jellyTime+=t,typeof document>"u"))return;const e=64,i=this.lctx;i.globalCompositeOperation="destination-out",i.fillStyle="rgba(0, 0, 0, 0.22)",i.fillRect(0,0,e,e),i.globalCompositeOperation="source-over";const n=this.jellyTime;try{const a=i.getImageData(0,0,e,e),o=a.data;for(let r=0;r<e;r++)for(let c=0;c<e;c++){const l=c-e/2,d=r-e/2,f=Math.sqrt(l*l+d*d),p=Math.sin(n*1.5+c*.08)*2.5,v=e*.35+p;if(f<v+Math.random()*1.5){const m=90+Math.floor(Math.random()*45),g=10+Math.floor(Math.random()*20),u=140+Math.floor(Math.random()*60),h=(r*e+c)*4;o[h]=m,o[h+1]=g,o[h+2]=u,o[h+3]=255}}i.putImageData(a,0,0)}catch{}if(Math.random()<.04){i.fillStyle=Math.random()<.7?"#ffffff":"#b3ffff";const a=e/2-8+Math.random()*16,o=e/2-8+Math.random()*16;i.fillRect(a,o,2+Math.random()*3,4+Math.random()*10)}if(Math.random()<.12){const a=Math.floor(Math.random()*3)+1,o=["#00ff66","#ff0055","#00ccff","#ffff00","#ffffff"];for(let r=0;r<a;r++){const c=Math.floor(Math.random()*e),l=Math.floor(Math.random()*e),d=c-e/2,f=l-e/2;if(Math.sqrt(d*d+f*f)<e*.32){const v=Math.floor(Math.random()*4)+2,m=Math.floor(Math.random()*2)+1;i.fillStyle=o[Math.floor(Math.random()*o.length)],i.fillRect(c,l,v,m)}}}if(Math.random()<.08){const a=Math.floor(Math.random()*e),o=Math.floor(Math.random()*6)+2,r=Math.floor(Math.random()*6)-3;try{const c=i.getImageData(0,a,e,o);i.clearRect(0,a,e,o),i.putImageData(c,r,a)}catch{}}}move(t,e,i){if(this.state==="SLEEP")return;const n=this.getValidNeighbors(e,i);if(n.length===0)return;e.get(this.x,this.y,this.z)===i.VISITED&&this.state!=="TELEPORT_TRACKING"&&this.state!=="TRACKING"&&(this.state="TRACKING",this.pathToTarget=[],this.visitedNodes.clear(),this.visitedNodes.add(`${this.x},${this.y},${this.z}`));let o;if(this.pathToTarget.length>0){const r=this.pathToTarget[0],c=e.get(r.x,r.y,r.z);(this.state==="TRACKING"?c===i.VISITED||c===i.START||c===i.EXIT:c!==i.WALL)?o=this.pathToTarget.shift():this.pathToTarget=[]}if(!o)if(this.state==="TELEPORT_TRACKING")o=null;else{let r=this.findPathToNearestUnvisited(e,i);if((!r||r.length===0)&&(this.visitedNodes.clear(),this.visitedNodes.add(`${this.x},${this.y},${this.z}`),r=this.findPathToNearestUnvisited(e,i)),r&&r.length>0)this.pathToTarget=r,o=this.pathToTarget.shift();else{const c=n.filter(l=>l.x!==this.lastPos.x||l.y!==this.lastPos.y||l.z!==this.lastPos.z);o=c.length>0?c[Math.floor(Math.random()*c.length)]:n[0]}}o&&(this.history.push({x:this.x,y:this.y,z:this.z}),this.history.length>2&&this.history.shift(),this.lastPos={x:this.x,y:this.y,z:this.z},this.x=o.x,this.y=o.y,this.z=o.z,this.visitedNodes.add(`${this.x},${this.y},${this.z}`))}findPathToTarget(t,e,i){return il({x:this.x,y:this.y,z:this.z},t,e,e.size,i.WALL,this.maze.startPos)}findPathToNearestUnvisited(t,e){return qp({x:this.x,y:this.y,z:this.z},this.visitedNodes,t,t.size,e,(i,n,a,o,r)=>this.getValidNeighbors(o,r,i,n,a,this.state==="TRACKING"))}getValidNeighbors(t,e,i=this.x,n=this.y,a=this.z,o=this.state==="TRACKING"){const r=[],c=[{dx:1,dy:0,dz:0},{dx:-1,dy:0,dz:0},{dx:0,dy:1,dz:0},{dx:0,dy:-1,dz:0},{dx:0,dy:0,dz:2},{dx:0,dy:0,dz:-2}];for(const l of c){const d=i+l.dx,f=n+l.dy,p=a+l.dz;if(d>=0&&d<t.size&&f>=0&&f<t.size&&p>=0&&p<t.size){const v=Math.floor(this.maze.startPos.x),m=Math.floor(this.maze.startPos.y),g=this.maze.startPos.z;if(d===v&&f===m&&p===g)continue;const u=t.get(d,f,p);if(u===e.EXIT)continue;if(u!==e.WALL&&u!==8){if(l.dz!==0){const h=a+l.dz/2;if(t.get(i,n,h)===e.WALL)continue}o?(u===e.VISITED||u===e.START||u===e.EXIT)&&r.push({x:d,y:f,z:p}):r.push({x:d,y:f,z:p})}}}return r}}class jp{constructor(t,e,i=null){Xt(this,"n");Xt(this,"branchingFactor");Xt(this,"size");Xt(this,"seed");Xt(this,"random");Xt(this,"matrix");Xt(this,"TYPES");Xt(this,"startPos");const n=t!==void 0?t:J.MAZE_DEGREE!==void 0?J.MAZE_DEGREE:8,a=e!==void 0?e:J.BRANCHING_FACTOR!==void 0?J.BRANCHING_FACTOR:.2;this.n=Math.max(3,Math.min(16,n)),this.branchingFactor=Math.max(0,Math.min(1,a)),this.size=2*this.n+1,i!=null?(this.seed=i,this.random=this.createSeededRandom(i)):(this.seed=null,this.random=Math.random),this.matrix=this.initMatrix(),this.TYPES={WALL:0,PATH:1,VISITED:2,START:3,EXIT:4,ELEVATOR_VISITED:5,TELEPORT:6,KEY:7,STATUE:8},this.startPos={x:J.PLAYER_START_X!==void 0?J.PLAYER_START_X:.5,y:J.PLAYER_START_Y!==void 0?J.PLAYER_START_Y:1.5,z:0}}createSeededRandom(t){let e=0;if(typeof t=="string")for(let i=0;i<t.length;i++)e=Math.imul(31,e)+t.charCodeAt(i)|0;else e=t|0;return function(){let i=e+=1831565813;return i=Math.imul(i^i>>>15,i|1),i^=i+Math.imul(i^i>>>7,i|61),((i^i>>>14)>>>0)/4294967296}}initMatrix(){return new Int8Array(this.size*this.size*this.size)}_idx(t,e,i){return t*this.size*this.size+e*this.size+i}generate(){const t=[],e=1+2*Math.floor(this.random()*this.n),i=1+2*Math.floor(this.random()*this.n),n=1+2*Math.floor(this.random()*this.n);for(this.matrix[this._idx(e,i,n)]=this.TYPES.PATH,t.push({x:e,y:i,z:n});t.length>0;){let r=this.random()>this.branchingFactor?t.length-1:Math.floor(this.random()*t.length);const c=t[r],l=this.getUnvisitedNeighbors(c.x,c.y,c.z);if(l.length>0){const d=l[Math.floor(this.random()*l.length)];this.matrix[this._idx(d.x,d.y,d.z)]=this.TYPES.PATH,this.matrix[this._idx((c.x+d.x)/2,(c.y+d.y)/2,(c.z+d.z)/2)]=this.TYPES.PATH,t.push(d)}else t.splice(r,1)}this.setEntryAndExit(),this.placeTeleports(),this.placeKeys(),this.applyBraid(),this.placeStatues();const a=this.size,o=this.matrix;return o.size=a,o.get=(r,c,l)=>o[r*a*a+c*a+l],o.set=(r,c,l,d)=>{o[r*a*a+c*a+l]=d},o}getUnvisitedNeighbors(t,e,i){const n=[],a=[{dx:2,dy:0,dz:0},{dx:-2,dy:0,dz:0},{dx:0,dy:2,dz:0},{dx:0,dy:-2,dz:0},{dx:0,dy:0,dz:2},{dx:0,dy:0,dz:-2}];for(const o of a){const r=t+o.dx,c=e+o.dy,l=i+o.dz;this.isValid(r,c,l)&&this.matrix[this._idx(r,c,l)]===this.TYPES.WALL&&n.push({x:r,y:c,z:l})}return n}isValid(t,e,i){return t>0&&t<this.size-1&&e>0&&e<this.size-1&&i>0&&i<this.size-1}setEntryAndExit(){const t=1+2*Math.floor(this.random()*this.n);this.matrix[this._idx(1,1,t)]=this.TYPES.PATH,this.matrix[this._idx(0,1,t)]=this.TYPES.TELEPORT,this.startPos={x:J.PLAYER_START_X!==void 0?J.PLAYER_START_X:.5,y:J.PLAYER_START_Y!==void 0?J.PLAYER_START_Y:1.5,z:t};const e=1+2*Math.floor(this.random()*this.n),i=2*this.n-1;this.matrix[this._idx(i,i,e)]=this.TYPES.PATH,this.matrix[this._idx(2*this.n,i,e)]=this.TYPES.EXIT}_findExitPos(){for(let t=0;t<this.size;t++)for(let e=0;e<this.size;e++)for(let i=0;i<this.size;i++)if(this.matrix[this._idx(t,e,i)]===this.TYPES.EXIT)return{x:t,y:e,z:i};return{x:2*this.n,y:2*this.n-1,z:this.startPos.z}}_collectDeadEndsAndPaths(){const t=[],e=[],i=[{dx:1,dy:0,dz:0},{dx:-1,dy:0,dz:0},{dx:0,dy:1,dz:0},{dx:0,dy:-1,dz:0},{dx:0,dy:0,dz:1},{dx:0,dy:0,dz:-1}];for(let n=1;n<this.size-1;n++)for(let a=1;a<this.size-1;a++)for(let o=1;o<this.size-1;o++){if(this.matrix[this._idx(n,a,o)]!==this.TYPES.PATH)continue;const r=o+1<this.size&&this.matrix[this._idx(n,a,o+1)]!==this.TYPES.WALL,c=o-1>=0&&this.matrix[this._idx(n,a,o-1)]!==this.TYPES.WALL;if(r||c)continue;let l=0;for(const d of i){const f=n+d.dx,p=a+d.dy,v=o+d.dz;f>=0&&f<this.size&&p>=0&&p<this.size&&v>=0&&v<this.size&&this.matrix[this._idx(f,p,v)]!==this.TYPES.WALL&&l++}(l===1?t:e).push({x:n,y:a,z:o})}return{deadEnds:t,normalPaths:e}}_greedyFill(t,e,i,n,a){const o={x:0,y:1,z:this.startPos.z},r=this._findExitPos(),c=(f,p)=>Math.abs(f.x-p.x)+Math.abs(f.y-p.y)+Math.abs(f.z-p.z);let l=4,d=4;for(;t.length<i&&l>0;){a&&(t.length=0);const f=e.filter(p=>c(p,o)<l||c(p,r)<l?!1:!n.includes(this.matrix[this._idx(p.x,p.y,p.z)]));for(;t.length<i;){let p=null,v=-1;for(const m of f){if(t.some(u=>u.x===m.x&&u.y===m.y&&u.z===m.z))continue;let g=1/0;for(const u of t){const h=c(m,u);h<g&&(g=h)}if(g>=d){const u=Math.min(c(m,o),c(m,r),g);u>v&&(v=u,p=m)}}if(p)t.push(p);else break}t.length<i&&(d>1?d--:l--)}}placeTeleports(){const t=J.getTeleportCount(this.n),{deadEnds:e,normalPaths:i}=this._collectDeadEndsAndPaths(),n=[];this._greedyFill(n,e,t,[],!0),n.length<t&&this._greedyFill(n,i,t,[],!1);for(const a of n)this.matrix[this._idx(a.x,a.y,a.z)]=this.TYPES.TELEPORT}placeKeys(){const t=J.getHunterCount(this.n)*2,{deadEnds:e,normalPaths:i}=this._collectDeadEndsAndPaths(),n=[];this._greedyFill(n,e,t,[this.TYPES.TELEPORT],!0),n.length<t&&this._greedyFill(n,i,t,[this.TYPES.TELEPORT],!1);for(const a of n)this.matrix[this._idx(a.x,a.y,a.z)]=this.TYPES.KEY}applyBraid(){const t=this.size,e=[];for(let o=1;o<t-1;o++)for(let r=1;r<t-1;r++)for(let c=1;c<t-1;c++)if(this.matrix[this._idx(o,r,c)]===this.TYPES.WALL){const l=o%2===0&&r%2!==0&&c%2!==0,d=r%2===0&&o%2!==0&&c%2!==0,f=c%2===0&&o%2!==0&&r%2!==0;if(l){const p=this.matrix[this._idx(o-1,r,c)],v=this.matrix[this._idx(o+1,r,c)];p!==this.TYPES.WALL&&v!==this.TYPES.WALL&&p!==this.TYPES.TELEPORT&&v!==this.TYPES.TELEPORT&&p!==this.TYPES.EXIT&&v!==this.TYPES.EXIT&&p!==this.TYPES.KEY&&v!==this.TYPES.KEY&&e.push({x:o,y:r,z:c,type:"X"})}else if(d){const p=this.matrix[this._idx(o,r-1,c)],v=this.matrix[this._idx(o,r+1,c)];p!==this.TYPES.WALL&&v!==this.TYPES.WALL&&p!==this.TYPES.TELEPORT&&v!==this.TYPES.TELEPORT&&p!==this.TYPES.EXIT&&v!==this.TYPES.EXIT&&p!==this.TYPES.KEY&&v!==this.TYPES.KEY&&e.push({x:o,y:r,z:c,type:"Y"})}else if(f){const p=this.matrix[this._idx(o,r,c-1)],v=this.matrix[this._idx(o,r,c+1)];p!==this.TYPES.WALL&&v!==this.TYPES.WALL&&p!==this.TYPES.TELEPORT&&v!==this.TYPES.TELEPORT&&p!==this.TYPES.EXIT&&v!==this.TYPES.EXIT&&p!==this.TYPES.KEY&&v!==this.TYPES.KEY&&e.push({x:o,y:r,z:c,type:"Z"})}}for(let o=e.length-1;o>0;o--){const r=Math.floor(this.random()*(o+1)),c=e[o];e[o]=e[r],e[r]=c}const i=J.BRAID_FACTOR||.1,n=Math.floor(e.length*i);let a=0;for(const o of e){if(a>=n)break;this.isWideConnection(o.x,o.y,o.z)||o.type==="Z"&&this.isAdjacentElevator(o.x,o.y,o.z)||(this.matrix[this._idx(o.x,o.y,o.z)]=this.TYPES.PATH,a++)}}isWideConnection(t,e,i){const n=this.size,a=(l,d,f)=>l<0||l>=n||d<0||d>=n||f<0||f>=n?!1:l===t&&d===e&&f===i?!0:this.matrix[this._idx(l,d,f)]!==this.TYPES.WALL;return!!(a(t,e+1,i)&&a(t+1,e,i)&&a(t+1,e+1,i)||a(t-1,e,i)&&a(t-1,e+1,i)&&a(t,e+1,i)||a(t,e-1,i)&&a(t+1,e-1,i)&&a(t+1,e,i)||a(t-1,e-1,i)&&a(t,e-1,i)&&a(t-1,e,i)||a(t,e,i+1)&&a(t+1,e,i)&&a(t+1,e,i+1)||a(t-1,e,i)&&a(t-1,e,i+1)&&a(t,e,i+1)||a(t,e,i-1)&&a(t+1,e,i-1)&&a(t+1,e,i)||a(t-1,e,i-1)&&a(t,e,i-1)&&a(t-1,e,i)||a(t,e,i+1)&&a(t,e+1,i)&&a(t,e+1,i+1)||a(t,e-1,i)&&a(t,e-1,i+1)&&a(t,e,i+1)||a(t,e,i-1)&&a(t,e+1,i-1)&&a(t,e+1,i)||a(t,e-1,i-1)&&a(t,e,i-1)&&a(t,e-1,i))}isAdjacentElevator(t,e,i){const n=this.size,a=[{dx:-1,dy:-1},{dx:-1,dy:0},{dx:-1,dy:1},{dx:0,dy:-1},{dx:0,dy:1},{dx:1,dy:-1},{dx:1,dy:0},{dx:1,dy:1}];for(const o of a){const r=t+o.dx,c=e+o.dy;if(!(r<0||r>=n||c<0||c>=n)&&(this.matrix[this._idx(r,c,i)]!==this.TYPES.WALL||i-2>=0&&this.matrix[this._idx(r,c,i-2)]!==this.TYPES.WALL||i+2<n&&this.matrix[this._idx(r,c,i+2)]!==this.TYPES.WALL))return!0}return!1}isDeadEndZ(t,e,i){if(t%2===0||e%2===0||i%2===0)return!1;const n=this.matrix[this._idx(t,e,i)];if(n===this.TYPES.WALL||n===this.TYPES.START||n===this.TYPES.EXIT||n===this.TYPES.TELEPORT||n===this.TYPES.KEY)return!1;const a=this.size,o=[{dx:1,dy:0},{dx:-1,dy:0},{dx:0,dy:1},{dx:0,dy:-1}];for(const c of o){const l=t+c.dx,d=e+c.dy;if(!(l<0||l>=a||d<0||d>=a)&&this.matrix[this._idx(l,d,i)]!==this.TYPES.WALL)return!1}let r=!1;return i-1>=0&&this.matrix[this._idx(t,e,i-1)]!==this.TYPES.WALL&&(r=!0),i+1<a&&this.matrix[this._idx(t,e,i+1)]!==this.TYPES.WALL&&(r=!0),r}isSolvable(){const t=this.size,e={x:Math.floor(this.startPos.x),y:Math.floor(this.startPos.y),z:this.startPos.z},i=[];let n=null;for(let l=0;l<t;l++)for(let d=0;d<t;d++)for(let f=0;f<t;f++){const p=this.matrix[this._idx(l,d,f)];p===this.TYPES.KEY?i.push(`${l},${d},${f}`):p===this.TYPES.EXIT&&(n=`${l},${d},${f}`)}const a=[e],o=new Set([`${e.x},${e.y},${e.z}`]),r=new Set;let c=!1;for(;a.length>0;){const l=a.shift(),d=`${l.x},${l.y},${l.z}`;i.includes(d)&&r.add(d),d===n&&(c=!0);const f=[{dx:1,dy:0},{dx:-1,dy:0},{dx:0,dy:1},{dx:0,dy:-1}];for(const p of f){const v=l.x+p.dx,m=l.y+p.dy,g=l.z;if(v>=0&&v<t&&m>=0&&m<t){const u=`${v},${m},${g}`,h=this.matrix[this._idx(v,m,g)];h!==this.TYPES.WALL&&h!==this.TYPES.STATUE&&!o.has(u)&&(o.add(u),a.push({x:v,y:m,z:g}))}}for(const p of[-2,2]){const v=l.z+p;if(v>=0&&v<t){const m=l.z+p/2,g=this.matrix[this._idx(l.x,l.y,m)],u=this.matrix[this._idx(l.x,l.y,v)];if(g!==this.TYPES.WALL&&g!==this.TYPES.STATUE&&u!==this.TYPES.WALL&&u!==this.TYPES.STATUE){const h=`${l.x},${l.y},${v}`;o.has(h)||(o.add(h),a.push({x:l.x,y:l.y,z:v}))}}}}return c&&r.size===i.length}placeStatues(){const t=this.size,e=[];for(let n=0;n<t;n++)for(let a=0;a<t;a++)for(let o=0;o<t;o++)this.isDeadEndZ(n,a,o)&&e.push({x:n,y:a,z:o});let i=0;for(const n of e){const a=this.matrix[this._idx(n.x,n.y,n.z)],o=n.z-1,r=n.z+1,c=o>=0?this.matrix[this._idx(n.x,n.y,o)]:null,l=r<t?this.matrix[this._idx(n.x,n.y,r)]:null;this.matrix[this._idx(n.x,n.y,n.z)]=this.TYPES.STATUE,o>=0&&(this.matrix[this._idx(n.x,n.y,o)]=this.TYPES.WALL),r<t&&(this.matrix[this._idx(n.x,n.y,r)]=this.TYPES.WALL),this.isSolvable()?i++:(this.matrix[this._idx(n.x,n.y,n.z)]=a,o>=0&&(this.matrix[this._idx(n.x,n.y,o)]=c),r<t&&(this.matrix[this._idx(n.x,n.y,r)]=l))}return i}}class Jp{constructor(){Xt(this,"uiFloorSpan");Xt(this,"uiMap3dContainer");Xt(this,"uiMobileControls");Xt(this,"uiProximeterContainer");Xt(this,"uiProximeterCells");Xt(this,"uiProximeterBar");Xt(this,"uiVictoryScreen");Xt(this,"uiGameOverScreen");Xt(this,"uiMobileUp");Xt(this,"uiMobileDown");Xt(this,"uiMobileMap");Xt(this,"uiSavingIndicator");Xt(this,"savingIndicatorTimeout");Xt(this,"uiVisitedPercent");Xt(this,"uiHunterStatusVal");Xt(this,"uiStatusLabel");Xt(this,"uiMarqueeContainer");Xt(this,"uiLegendHunter");Xt(this,"uiCanvas");Xt(this,"uiKeysCollected");Xt(this,"uiKeysTotal");Xt(this,"uiKeysList");Xt(this,"uiPauseScreen");Xt(this,"uiMobilePauseBtn");Xt(this,"uiPathfindersRemaining");Xt(this,"uiPathfindersTotal");Xt(this,"uiControlsHintContent");this.uiFloorSpan=document.getElementById("current-floor"),this.uiMap3dContainer=document.getElementById("map3d-container"),this.uiMobileControls=document.getElementById("mobile-controls"),this.uiProximeterContainer=document.getElementById("proximeter-container"),this.uiProximeterCells=document.querySelectorAll(".proximeter-cell"),this.uiProximeterBar=document.querySelector(".proximeter-bar"),this.uiVictoryScreen=document.getElementById("victory-screen"),this.uiGameOverScreen=document.getElementById("game-over-screen"),this.uiMobileUp=document.getElementById("mobile-up"),this.uiMobileDown=document.getElementById("mobile-down"),this.uiMobileMap=document.getElementById("mobile-map"),this.uiSavingIndicator=document.getElementById("saving-indicator"),this.savingIndicatorTimeout=null,this.uiVisitedPercent=document.getElementById("visited-percent"),this.uiHunterStatusVal=document.getElementById("hunter-status-val"),this.uiStatusLabel=document.querySelector("#hunter-status-panel .status-label"),this.uiMarqueeContainer=document.querySelector(".status-marquee-container"),this.uiLegendHunter=document.getElementById("legend-hunter"),this.uiCanvas=document.getElementById("main-2d-canvas"),this.uiKeysCollected=document.getElementById("keys-collected-count"),this.uiKeysTotal=document.getElementById("keys-total-count"),this.uiKeysList=document.getElementById("keys-list-container"),this.uiPauseScreen=document.getElementById("pause-screen"),this.uiMobilePauseBtn=document.getElementById("mobile-pause-btn"),this.uiPathfindersRemaining=document.getElementById("pathfinders-remaining-count"),this.uiPathfindersTotal=document.getElementById("pathfinders-total-count"),this.uiControlsHintContent=document.getElementById("controls-hint-content"),this.localizeDOM()}localizeDOM(t=wn){Qo(t)}showPause(){this.uiPauseScreen&&this.uiPauseScreen.classList.remove("hidden")}hidePause(){this.uiPauseScreen&&this.uiPauseScreen.classList.add("hidden")}showVictory(t=0){this.hideGameUI(),this.uiVictoryScreen&&this.uiVictoryScreen.classList.remove("hidden");const e=document.getElementById("victory-completion-rate");e&&(e.innerText=`${t}%`)}showDeath(t=!1){this.hideGameUI(),this.uiGameOverScreen&&this.uiGameOverScreen.classList.remove("hidden");const e=document.getElementById("continue-btn-death");e&&(e.style.display=t?"":"none")}hideGameUI(){this.uiMobileControls&&this.uiMobileControls.classList.add("hidden"),this.uiMobilePauseBtn&&this.uiMobilePauseBtn.classList.add("hidden"),this.uiMap3dContainer&&this.uiMap3dContainer.classList.add("hidden"),this.uiProximeterContainer&&this.uiProximeterContainer.classList.add("hidden"),this.uiProximeterBar&&this.uiProximeterBar.classList.remove("critical-alert"),this.uiProximeterCells.forEach(t=>t.classList.remove("active")),this.uiCanvas&&this.uiCanvas.classList.remove("hunted-map-effect","nearby-map-effect")}initGameUI(t=!1){this.uiMobileControls&&this.uiMobileControls.classList.remove("hidden"),this.uiMobilePauseBtn&&this.uiMobilePauseBtn.classList.remove("hidden"),this.uiMobileMap&&(this.uiMobileMap.disabled=!0),t?(this.uiStatusLabel&&(this.uiStatusLabel.innerText="SAFE MODE:"),this.uiHunterStatusVal&&(this.uiHunterStatusVal.innerText="ACTIVE",this.uiHunterStatusVal.className="status-marquee-text status--scanning"),this.uiLegendHunter&&this.uiLegendHunter.classList.add("hidden")):(this.uiStatusLabel&&(this.uiStatusLabel.innerText="HUNTER STATUS:"),this.uiLegendHunter&&this.uiLegendHunter.classList.remove("hidden"))}updateVisitedPercent(t){this.uiVisitedPercent&&(this.uiVisitedPercent.innerText=String(t))}updateFloor(t,e,i){this.uiFloorSpan&&(this.uiFloorSpan.innerText=String(t)),this.uiMobileUp&&(this.uiMobileUp.disabled=!e),this.uiMobileDown&&(this.uiMobileDown.disabled=!i)}updateKeysHUD(t,e){if(this.uiKeysCollected&&(this.uiKeysCollected.innerText=String(t)),this.uiKeysTotal&&(this.uiKeysTotal.innerText=String(e)),this.uiKeysList){this.uiKeysList.innerHTML="";for(let i=0;i<e;i++){const n=document.createElement("span");n.className="key-dot"+(i<t?" key-dot--collected":""),this.uiKeysList.appendChild(n)}}}updatePathfindersHUD(t,e){this.uiPathfindersRemaining&&(this.uiPathfindersRemaining.innerText=String(t)),this.uiPathfindersTotal&&(this.uiPathfindersTotal.innerText=String(e))}showSavingIndicator(){this.uiSavingIndicator&&(this.savingIndicatorTimeout&&clearTimeout(this.savingIndicatorTimeout),this.uiSavingIndicator.classList.remove("hidden"),this.uiSavingIndicator.classList.add("saving-pulse"),this.savingIndicatorTimeout=window.setTimeout(()=>{this.uiSavingIndicator&&(this.uiSavingIndicator.classList.add("hidden"),this.uiSavingIndicator.classList.remove("saving-pulse"))},2e3))}showInfoBanner(t){let e=document.getElementById("info-banner");e||(e=document.createElement("div"),e.id="info-banner",e.className="info-banner-pulse",document.body.appendChild(e)),e.innerText=t,e.classList.remove("hidden"),setTimeout(()=>{e&&e.classList.add("hidden")},3e3)}setMap3DVisible(t){this.uiMap3dContainer&&(t?this.uiMap3dContainer.classList.remove("hidden"):this.uiMap3dContainer.classList.add("hidden"))}updateHazardWarning(t,e,i=!1,n=!1){if(!this.uiHunterStatusVal)return;let a=Ot("statusScanning"),o="status--scanning",r=!1;i?(a=Ot("statusActive"),o="status--scanning"):n?(a=Ot("statusSleeping"),o="status--sleeping"):e>0?(a=Ot("statusConverging",{ticks:e}),o="status--converging",r=!0):t&&(a=Ot("statusTracking"),o="status--tracking",r=!0),this.uiHunterStatusVal.innerText!==a&&(this.uiHunterStatusVal.innerText=a,this.uiHunterStatusVal.className="status-marquee-text "+o),this.uiCanvas&&(r?this.uiCanvas.classList.add("hunted-map-effect"):this.uiCanvas.classList.remove("hunted-map-effect"))}setNearbyWarning(t){this.uiCanvas&&(t?this.uiCanvas.classList.add("nearby-map-effect"):this.uiCanvas.classList.remove("nearby-map-effect"))}updateProximeter(t,e,i){if(!this.uiProximeterContainer)return;if(e>0&&!i)this.uiProximeterContainer.classList.remove("hidden");else{this.uiProximeterContainer.classList.add("hidden");return}let n=0;t<=10&&(n=11-t),this.uiProximeterCells.forEach(a=>{parseInt(a.getAttribute("data-index")||"0")<=n?a.classList.add("active"):a.classList.remove("active")}),this.uiProximeterBar&&(n===10?this.uiProximeterBar.classList.add("critical-alert"):this.uiProximeterBar.classList.remove("critical-alert"))}updateMobileMapButton(t,e,i){this.uiMobileMap&&i&&(t&&!e?(this.uiMobileMap.innerText=Ot("teleport"),this.uiMobileMap.style.borderColor="var(--clr-teleport, #ff8c00)",this.uiMobileMap.style.color="var(--clr-teleport, #ff8c00)",this.uiMobileMap.style.background="rgba(255, 140, 0, 0.2)"):(this.uiMobileMap.innerText=Ot("map"),this.uiMobileMap.style.borderColor="",this.uiMobileMap.style.color="",this.uiMobileMap.style.background=""))}updateControlsHint(t,e=!0){this.uiControlsHintContent&&(t==="gamepad"?this.uiControlsHintContent.innerHTML=`
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
            `)}destroy(){this.savingIndicatorTimeout&&clearTimeout(this.savingIndicatorTimeout)}}class Qp{constructor(){this.keys={},this.touchStart=null,this.touchMoveVector=null,this.preventScrollKeys=["arrowup","arrowdown","arrowleft","arrowright"," ","pageup","pagedown"],this.handleKeyDown=null,this.handleKeyUp=null,this.handleTouchStart=null,this.handleTouchMove=null,this.handleTouchEnd=null,this.init()}init(){this.handleKeyDown=t=>{const e=t.key.toLowerCase();this.keys[e]=!0,this.preventScrollKeys.includes(e)&&t.preventDefault()},this.handleKeyUp=t=>{this.keys[t.key.toLowerCase()]=!1},window.addEventListener("keydown",this.handleKeyDown),window.addEventListener("keyup",this.handleKeyUp)}setupTouch(t,e){this.handleTouchStart=i=>{t()||e()||i.target.closest("button")||(i.cancelable&&i.preventDefault(),this.touchStart={x:i.touches[0].clientX,y:i.touches[0].clientY})},this.handleTouchMove=i=>{if(!this.touchStart||t()||e())return;i.cancelable&&i.preventDefault();const n=i.touches[0].clientX-this.touchStart.x,a=i.touches[0].clientY-this.touchStart.y,o=Math.sqrt(n*n+a*a);o>10&&(this.touchMoveVector={x:n/o,y:a/o})},this.handleTouchEnd=()=>{this.touchStart=null,this.touchMoveVector=null},window.addEventListener("touchstart",this.handleTouchStart,{passive:!1}),window.addEventListener("touchmove",this.handleTouchMove,{passive:!1}),window.addEventListener("touchend",this.handleTouchEnd)}destroy(){this.handleKeyDown&&window.removeEventListener("keydown",this.handleKeyDown),this.handleKeyUp&&window.removeEventListener("keyup",this.handleKeyUp),this.handleTouchStart&&window.removeEventListener("touchstart",this.handleTouchStart),this.handleTouchMove&&window.removeEventListener("touchmove",this.handleTouchMove),this.handleTouchEnd&&window.removeEventListener("touchend",this.handleTouchEnd)}}const La="void-escape-save";function tm(s){const t=new Uint8Array(s.buffer);let e="";for(let i=0;i<t.length;i++)e+=String.fromCharCode(t[i]);return btoa(e)}function em(s){const t=atob(s),e=new Uint8Array(t.length);for(let i=0;i<t.length;i++)e[i]=t.charCodeAt(i);return new Int8Array(e.buffer)}function im(s){return{x:s.x,y:s.y,z:s.z,id:s.id,state:s.state,lastPos:s.lastPos?{...s.lastPos}:null,history:s.history.map(t=>({...t})),visitedNodes:Array.from(s.visitedNodes),pathToTarget:s.pathToTarget.map(t=>({...t}))}}function ia(s){try{const t={version:1,timestamp:Date.now(),degree:s.degree,branchingFactor:s.branchingFactor,isSafeMode:s.isSafeMode,seed:s.seed,mazeSize:s.mazeGen.size,mazeStartPos:{...s.mazeGen.startPos},matrix:tm(s.mazeGen.matrix),player:{...s.player},hunters:s.hunters.map(im),discoveredTeleports:Array.from(s.discoveredTeleports),inactiveTeleportPos:s.inactiveTeleportPos?{...s.inactiveTeleportPos}:null,teleportCooldownTicks:s.teleportCooldownTicks,revealedPathSet:Array.from(s.revealedPathSet),keysCollected:s.keysCollected,totalKeys:s.totalKeys,totalPathfinders:s.totalPathfinders,pathfindersRemaining:s.pathfindersRemaining,pathfinderRewardsGranted:s.pathfinderRewardsGranted!==void 0?s.pathfinderRewardsGranted:0,mapCompletion100Triggered:s.mapCompletion100Triggered||!1,dialogueUpTriggered:s.dialogueUpTriggered||!1,dialogueDownTriggered:s.dialogueDownTriggered||!1,dialogueWhichWayTriggered:s.dialogueWhichWayTriggered||!1,dialogueDetectedTriggered:s.dialogueDetectedTriggered||!1,hunterOnSameFloorDetected:s.hunterOnSameFloorDetected||!1};localStorage.setItem(La,JSON.stringify(t))}catch(t){console.warn("[SaveManager] Could not save game state:",t)}}function nl(){try{const s=localStorage.getItem(La);if(!s)return null;const t=JSON.parse(s);return!t||t.version!==1?null:t}catch(s){return console.warn("[SaveManager] Could not load save data:",s),null}}function sl(){localStorage.removeItem(La)}function go(){return nl()!==null}function nm(s,t){s.x=t.x,s.y=t.y,s.z=t.z,s.visualX=t.x,s.visualY=t.y,s.visualZ=t.z,s.state=t.state,s.lastPos=t.lastPos?{...t.lastPos}:null,s.history=t.history.map(e=>({...e})),s.visitedNodes=new Set(t.visitedNodes),s.pathToTarget=t.pathToTarget.map(e=>({...e}))}function sm(s,t){const e=em(t);for(let i=0;i<e.length;i++)s.matrix[i]=e[i]}function na(s,t,e){return Math.abs(t-s)<=e?t:s+Math.sign(t-s)*e}class vo{constructor(t,e,i=null){if(this.degree=t!==void 0?t:J.MAZE_DEGREE!==void 0?J.MAZE_DEGREE:8,this.branchingFactor=e!==void 0?e:J.BRANCHING_FACTOR!==void 0?J.BRANCHING_FACTOR:.2,i)this.isSafeMode=i.isSafeMode??!1;else{const l=document.getElementById("safe-mode");this.isSafeMode=l?l.checked:!1}this.vScale=2,this.ui=new Jp,this.input=new Qp,this.input.setupTouch(()=>this.isMap3DActive,()=>this.isGameOver),this.canvas=document.getElementById("main-2d-canvas"),this.ctx=this.canvas.getContext("2d"),this.seed=i?i.seed:J.SEED!==null&&J.SEED!==void 0?J.SEED:Date.now(),this.mazeGen=new jp(t,e,this.seed),this.maze=this.mazeGen.generate(),this.isResumedFromSave=!!i,this.mapCompletion100Triggered=!1,this.hunterOnSameFloorDetected=!1,this.dialogueUpTriggered=!1,this.dialogueDownTriggered=!1,this.dialogueWhichWayTriggered=!1,this.dialogueDetectedTriggered=!1,this.wallImage=new Image,this.wallImage.onload=()=>{this.staticMapCacheDirty=!0},this.wallImage.src="assets/images/wall.png",this.floorImage=new Image,this.floorImage.onload=()=>{this.staticMapCacheDirty=!0},this.floorImage.src="assets/images/floor.png",this.keyImage=new Image,this.keyImage.onload=()=>{this.staticMapCacheDirty=!0},this.keyImage.src="assets/images/key.svg",this.statueImage=new Image,this.statueImage.onload=()=>{this.staticMapCacheDirty=!0},this.statueImage.src="assets/images/statue.png",this.mageImages={down_left:new Image,down_right:new Image,up_left:new Image,up_right:new Image};for(const l in this.mageImages)this.mageImages[l].onload=()=>{this.staticMapCacheDirty=!0},this.mageImages[l].src=`assets/images/mage_${l}.png`;this.playerSide="right",this.playerVertical="down",this.playerWalkCycle=0,this.playerSquashTargetX=1,this.playerSquashTargetY=1,this.playerSquashX=1,this.playerSquashY=1,this.player={x:this.mazeGen.startPos.x,y:this.mazeGen.startPos.y,z:this.mazeGen.startPos.z,dir:0},this.hunters=[],this.initHunters(t),this.keyMeshes=[],this.exitMesh=null,this.keysCollected=0,this.totalKeys=J.getHunterCount(t)*2,this.totalPathfinders=J.getPathfinderCount(t),this.pathfindersRemaining=this.totalPathfinders,this.activeMapFloor=1,this.visualActiveFloor=1,this.mapCursor={x:0,y:0,z:1},this.pathfinderRewardsGranted=0,this.isometricCanvas=null,this.isometricCtx=null,this.floorClickRects=[],this.mapZoom=1,this.mapPanOffsetX=0,this.isZoomTransitionActive=!1,this.zoomTransitionTimer=0,this.preloadedStoryImages=[],this.storyImagesLoadedCount=0,this.storyImagesTotalCount=0,this.storyImagesPreloadPromise=null,this.preloadStoryImages(),this.lastFrameTime=performance.now(),this.revealedPathSet=new Set,this.activePathReveal=[],this.revealedPathProgress=0,this.knownMeshes=[],this.gridMeshes=null,this.pathRevealInterval=null,this.pathfinderBlockedUntil=0,this.ui.initGameUI(this.isSafeMode),this.ui.onInfoBanner=l=>this.queueNotification(l),this.ui.updateKeysHUD(this.keysCollected,this.totalKeys),this.ui.updatePathfindersHUD(this.pathfindersRemaining,this.totalPathfinders),this.isMap3DActive=!1,this.isGameOver=!1,this.deathAnimation=null,this.notificationQueue=[],this.activeNotification=null,this.isPaused=!1,this.isDestroyed=!1,this.isIntroPlaying=!1,this.isStoryActive=!1,this.pulsatingMaterials=[],this.hunterMeshes=[],this.discoveredTeleports=new Set;const n=Math.floor(this.player.x),a=Math.floor(this.player.y),o=this.player.z;this.discoveredTeleports.add(`${n},${a},${o}`),this.allTeleports=[];const r=this.mazeGen.size,c=this.mazeGen.TYPES;for(let l=1;l<r;l+=2)for(let d=0;d<r;d++)for(let f=0;f<r;f++)this.maze.get(f,d,l)===c.TELEPORT&&this.allTeleports.push({x:f,y:d,z:l});this.allTeleports.sort((l,d)=>l.z!==d.z?l.z-d.z:l.y!==d.y?l.y-d.y:l.x-d.x),this.selectedTeleportIndex=this.allTeleports.findIndex(l=>l.x===n&&l.y===a&&l.z===o),this.selectedTeleportIndex===-1&&(this.selectedTeleportIndex=0),this.teleportConfirmModalActive=!1,this.teleportModalSelection="go",this.teleportMeshes=[],this.isTeleportMode=!1,this.teleportCooldownTicks=0,this.inactiveTeleportPos=null,this.floorTransition=null,this.hasSavePoint=!1,this.lastPlayerCell={x:n,y:a,z:o},this.exitPathfinderUnlocked=!1,this.isZoomActive=!0,this.zoomVisibleCells=11,this.lastInputDevice="keyboard",this.staticMapCacheCanvas=document.createElement("canvas"),this.staticMapCacheCtx=this.staticMapCacheCanvas.getContext("2d"),this.staticMapCacheDirty=!0,this.fullyRevealedCells=new Set,this.revealedCellsAnimation=new Map,this.skipCellAnimations=!0,this.populateFullyRevealedCells(this.player.z),this.activeSkipHandler=null,this.activeIntroTimer=null,this.activeContinueTimer=null,this.raycaster=new Hp,this.pointer=new Nt,this.exitPathfinderUnlocked=this.checkExitNeighborVisited(),this.initThree(),this.init(i)}destroy(){this.isDestroyed=!0,this.hideGameUI(),this.input.destroy(),this.ui.destroy(),window.removeEventListener("keydown",this.handleKeyDownExtra),this.handleKeyboardDetection&&window.removeEventListener("keydown",this.handleKeyboardDetection),window.removeEventListener("resize",this.handleResize),this.activeSkipHandler&&(window.removeEventListener("keydown",this.activeSkipHandler),window.removeEventListener("touchstart",this.activeSkipHandler),this.activeSkipHandler=null),this.activeIntroTimer&&(clearTimeout(this.activeIntroTimer),this.activeIntroTimer=null),this.activeContinueTimer&&(clearTimeout(this.activeContinueTimer),this.activeContinueTimer=null),this.handleStoryKeyDown&&(window.removeEventListener("keydown",this.handleStoryKeyDown),this.handleStoryKeyDown=null);const t=document.getElementById("story-screen");t&&(this.handleStoryClick&&(t.removeEventListener("click",this.handleStoryClick),this.handleStoryClick=null),this.handleStoryTouch&&(t.removeEventListener("touchstart",this.handleStoryTouch),this.handleStoryTouch=null),t.classList.add("hidden")),this.controls&&this.controls.dispose(),this.renderer&&this.renderer.domElement&&(this.renderer.domElement.removeEventListener("click",this.handleCanvasClick),this.renderer.domElement.removeEventListener("pointerdown",this.handlePointerDown),this.renderer.domElement.removeEventListener("pointerup",this.handlePointerUp)),this.renderer&&(this.renderer.dispose(),this.renderer.domElement.remove()),this.ui.uiMobileUp&&(this.ui.uiMobileUp.onclick=null),this.ui.uiMobileDown&&(this.ui.uiMobileDown.onclick=null),this.ui.uiMobileMap&&(this.ui.uiMobileMap.onclick=null),this.pathRevealInterval&&clearInterval(this.pathRevealInterval)}preloadStoryImages(){const t=["assets/images/presentation/1-mystical-church-of-chaos.jpg","assets/images/presentation/2-mystical-church-of-chaos.jpg","assets/images/presentation/3-the-jelly-god.jpg","assets/images/presentation/4-player-alone.jpg","assets/images/presentation/5-player-thrown.jpg"];this.storyImagesLoadedCount=0,this.storyImagesTotalCount=t.length,this.storyImagesPreloadPromise=Promise.all(t.map((e,i)=>new Promise(n=>{const a=new Image;a.src=e,a.onload=()=>{this.preloadedStoryImages[i]=a,this.storyImagesLoadedCount++,n()},a.onerror=()=>{console.warn(`Failed to preload story image: ${e}`),n()}})))}initHunters(t){const e=this.isSafeMode?0:J.getHunterCount(t);if(e!==0){for(let i=1;i<=e;i++)this.hunters.push(new Zp(this.mazeGen,null,i));this.lastHunterMove=performance.now()}}wakeHunters(){const t=this.mazeGen.size,e=[],i=Math.floor(this.player.x),n=Math.floor(this.player.y),a=this.player.z,o=Math.floor(this.mazeGen.startPos.x),r=Math.floor(this.mazeGen.startPos.y),c=this.mazeGen.startPos.z;for(let m=0;m<t;m++)for(let g=0;g<t;g++)for(let u=0;u<t;u++){const h=m===o&&g===r&&u===c;this.maze.get(m,g,u)===this.mazeGen.TYPES.PATH&&u%2!==0&&!h&&e.push({x:m,y:g,z:u})}if(e.length===0)for(let m=0;m<t;m++)for(let g=0;g<t;g++)for(let u=0;u<t;u++){const h=this.maze.get(m,g,u),_=m===o&&g===r&&u===c,y=h===this.mazeGen.TYPES.EXIT;h!==this.mazeGen.TYPES.WALL&&!y&&u%2!==0&&(m!==i||g!==n||u!==a)&&!_&&e.push({x:m,y:g,z:u})}for(let m=e.length-1;m>0;m--){const g=Math.floor(Math.random()*(m+1)),u=e[m];e[m]=e[g],e[g]=u}const l=(m,g)=>Math.abs(m.x-g.x)+Math.abs(m.y-g.y)+Math.abs(m.z-g.z),d=[],f=this.hunters.filter(m=>m.state==="SLEEP");let p=Math.max(3,Math.floor(t*.45)),v=4;for(;d.length<f.length&&p>0;){d.length=0;const m=e.filter(g=>l(g,{x:i,y:n,z:a})>=p);for(let g=0;g<f.length;g++){let u=null;for(const h of m){if(d.some(y=>y.x===h.x&&y.y===h.y&&y.z===h.z))continue;let _=!0;for(const y of d)if(l(h,y)<v){_=!1;break}if(_){u=h;break}}if(u)d.push(u);else break}d.length<f.length&&(v>1?v--:p--)}if(d.length<f.length)for(const m of e){if(d.length>=f.length)break;d.some(g=>g.x===m.x&&g.y===m.y&&g.z===m.z)||d.push(m)}for(let m=0;m<f.length&&m<d.length;m++){const g=f[m],u=d[m];g.x=u.x,g.y=u.y,g.z=u.z,g.visualX=u.x,g.visualY=u.y,g.visualZ=u.z,g.lastPos={x:u.x,y:u.y,z:u.z},g.state="WANDERING",g.visitedNodes.clear(),g.visitedNodes.add(`${u.x},${u.y},${u.z}`),g.history=[]}this.ui.showInfoBanner(Ot("msgVoidHuntersDetected")),this.staticMapCacheDirty=!0,this.isMap3DActive&&this.build3DMap()}getExitPos(){for(let t=0;t<this.mazeGen.size;t++)for(let e=0;e<this.mazeGen.size;e++)for(let i=0;i<this.mazeGen.size;i++)if(this.maze.get(t,e,i)===this.mazeGen.TYPES.EXIT)return{x:t,y:e,z:i};return{x:1,y:1,z:1}}triggerSave(){ia(this),this.hasSavePoint=!0,this.ui.showSavingIndicator()}triggerVictory(){this.isGameOver=!0,sl();const t=this.getMapVisitedPercentage();this.ui.showVictory(t)}triggerDeath(){this.isGameOver=!0,this.ui.showDeath(this.hasSavePoint)}collectKey(t,e,i){if(this.maze.set(t,e,i,this.mazeGen.TYPES.VISITED),this.keysCollected++,this.staticMapCacheDirty=!0,this.ui.updateKeysHUD(this.keysCollected,this.totalKeys),this.ui.showInfoBanner(Ot("msgKeySecured",{collected:this.keysCollected,total:this.totalKeys})),this.keysCollected===this.totalKeys&&(this.ui.showInfoBanner(Ot("msgExitUnlocked")),this.exitMesh)){this.exitMesh.material.color.setHex(J.COLORS.THREE_EXIT),this.exitMesh.material.emissive.setHex(J.COLORS.THREE_EXIT),this.exitMesh.material.emissiveIntensity=.5;const n=this.exitMesh.children[0];n&&this.exitMesh.remove(n)}}triggerLockedExitWarning(){const t=Date.now();if(!this.lastLockedWarningTime||t-this.lastLockedWarningTime>1500){this.lastLockedWarningTime=t;const e=this.totalKeys-this.keysCollected;this.ui.showInfoBanner(Ot("msgKeysRemaining",{count:e}))}}restoreFromSave(t){this.seed=t.seed,sm(this.mazeGen,t.matrix),this.player.x=t.player.x,this.player.y=t.player.y,this.player.z=t.player.z,this.player.dir=t.player.dir;for(let n=0;n<this.hunters.length&&n<t.hunters.length;n++)nm(this.hunters[n],t.hunters[n]);this.discoveredTeleports=new Set(t.discoveredTeleports),this.inactiveTeleportPos=t.inactiveTeleportPos,this.teleportCooldownTicks=t.teleportCooldownTicks,this.keysCollected=t.keysCollected!==void 0?t.keysCollected:0,this.totalKeys=t.totalKeys!==void 0?t.totalKeys:J.getHunterCount(this.degree)*2,this.ui.updateKeysHUD(this.keysCollected,this.totalKeys),this.totalPathfinders=t.totalPathfinders!==void 0?t.totalPathfinders:J.getPathfinderCount(this.degree),this.pathfindersRemaining=t.pathfindersRemaining!==void 0?t.pathfindersRemaining:this.totalPathfinders,this.ui.updatePathfindersHUD(this.pathfindersRemaining,this.totalPathfinders);const e=this.degree>=12?10:this.degree>=8?20:0,i=this.getMapVisitedPercentage();this.pathfinderRewardsGranted=t.pathfinderRewardsGranted!==void 0?t.pathfinderRewardsGranted:e>0?Math.floor(i/e):0,this.revealedPathSet=new Set(t.revealedPathSet),this.mapCompletion100Triggered=t.mapCompletion100Triggered||!1,this.dialogueUpTriggered=t.dialogueUpTriggered||!1,this.dialogueDownTriggered=t.dialogueDownTriggered||!1,this.dialogueWhichWayTriggered=t.dialogueWhichWayTriggered||!1,this.dialogueDetectedTriggered=t.dialogueDetectedTriggered||!1,this.hunterOnSameFloorDetected=t.hunterOnSameFloorDetected||!1,this.hasSavePoint=!0,this.lastPlayerCell={x:Math.floor(this.player.x),y:Math.floor(this.player.y),z:this.player.z},this.populateFullyRevealedCells(this.player.z),this.exitPathfinderUnlocked=this.checkExitNeighborVisited()}checkHunterCollision(){if(this.deathAnimation&&this.deathAnimation.active)return;const t=Math.floor(this.player.x),e=Math.floor(this.player.y),i=this.player.z,n=Math.floor(this.mazeGen.startPos.x),a=Math.floor(this.mazeGen.startPos.y),o=this.mazeGen.startPos.z;if(!(t===n&&e===a&&i===o)){for(const r of this.hunters)if(r.state!=="SLEEP"&&r.x===t&&r.y===e&&r.z===i){r.visualX=r.x,r.visualY=r.y,r.visualZ=r.z,this.isGameOver=!0,this.hideGameUI(),this.deathAnimation={active:!0,hunter:r,playerPos:{x:this.player.x,y:this.player.y,z:this.player.z},elapsed:0,duration:1.8,screenFilled:!1,glitchElapsed:0,glitchDuration:1.5,uiFade:0,uiTriggered:!1};return}}}hideGameUI(){this.ui.hideGameUI(),this.ui.hidePause(),this.canvas.classList.remove("hunted-map-effect"),this.isMap3DActive=!1}initThree(){this.scene=new Fp,this.camera=new Fe(75,window.innerWidth/window.innerHeight,.1,1e3),this.renderer=new jo({antialias:!0,alpha:!0}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.ui.uiMap3dContainer.appendChild(this.renderer.domElement),this.controls=new Vp(this.camera,this.renderer.domElement),this.controls.enableDamping=!0}init(t=null){this.handleKeyDownExtra=c=>{const l=c.key.toLowerCase();if(l==="escape"){if(this.isMap3DActive){this.isTeleportMode?this.toggleTeleportMap(!1):this.toggleMap3D(),c.preventDefault();return}this.togglePause();return}if(!this.isPaused&&(l==="m"&&(this.isTeleportMode?this.toggleTeleportMap(!1):this.toggleMap3D()),l==="z"&&this.toggleZoom(),this.isMap3DActive&&!this.isIntroPlaying)){if(this.isTeleportMode){if(this.teleportConfirmModalActive){if((l==="a"||l==="arrowleft"||l==="d"||l==="arrowright")&&(this.teleportModalSelection=this.teleportModalSelection==="go"?"cancel":"go",c.preventDefault()),l==="enter"||l===" "||l==="y"){if(this.teleportModalSelection==="go"){const f=this.allTeleports[this.selectedTeleportIndex];this.teleportTo(f.x,f.y,f.z),this.toggleTeleportMap(!1)}else this.teleportConfirmModalActive=!1;c.preventDefault()}(l==="escape"||l==="backspace")&&(this.teleportConfirmModalActive=!1,c.preventDefault());return}const d=this.getSelectableTeleportIndices();if(d.length>0){let f=d.indexOf(this.selectedTeleportIndex);if(l==="a"||l==="arrowleft"){f=(f-1+d.length)%d.length,this.selectedTeleportIndex=d[f];const p=this.allTeleports[this.selectedTeleportIndex];this.activeMapFloor=p.z,this.mapCursor={x:p.x,y:p.y,z:p.z},c.preventDefault()}if(l==="d"||l==="arrowright"){f=(f+1)%d.length,this.selectedTeleportIndex=d[f];const p=this.allTeleports[this.selectedTeleportIndex];this.activeMapFloor=p.z,this.mapCursor={x:p.x,y:p.y,z:p.z},c.preventDefault()}if(l==="enter"||l===" "||l==="y"){const p=this.allTeleports[this.selectedTeleportIndex],v=Math.floor(this.player.x),m=Math.floor(this.player.y),g=this.player.z;p&&p.x===v&&p.y===m&&p.z===g||(this.teleportConfirmModalActive=!0,this.teleportModalSelection="go"),c.preventDefault()}}(l==="escape"||l==="backspace")&&(this.toggleTeleportMap(!1),c.preventDefault());return}if((l==="q"||l==="pagedown")&&(this.activeMapFloor-2>=1&&(this.activeMapFloor-=2),c.preventDefault()),(l==="e"||l==="pageup")&&(this.activeMapFloor+2<=this.mazeGen.size-2&&(this.activeMapFloor+=2),c.preventDefault()),(l==="a"||l==="arrowleft")&&(this.navigateCursor("left"),c.preventDefault()),(l==="d"||l==="arrowright")&&(this.navigateCursor("right"),c.preventDefault()),(l==="w"||l==="arrowup")&&(this.navigateCursor("up"),c.preventDefault()),(l==="s"||l==="arrowdown")&&(this.navigateCursor("down"),c.preventDefault()),l==="enter"||l===" "||l==="y"){const d=this.mapCursor.x,f=this.mapCursor.y,p=this.mapCursor.z;this.getInteractiveElements(this.activeMapFloor).some(g=>g.x===d&&g.y===f&&g.z===p)&&this.triggerPathReveal(d,f,p),c.preventDefault()}}},this.handleResize=()=>this.resize(),this.handleKeyboardDetection=()=>{this.lastInputDevice!=="keyboard"&&(this.lastInputDevice="keyboard",this.ui.updateControlsHint("keyboard",this.mazeGen.size>11))},window.addEventListener("keydown",this.handleKeyDownExtra),window.addEventListener("keydown",this.handleKeyboardDetection),window.addEventListener("resize",this.handleResize);const e=document.getElementById("mobile-zoom-btn");e&&(e.onclick=c=>{c.stopPropagation(),this.toggleZoom()}),this.ui.uiMobileUp&&(this.ui.uiMobileUp.onclick=()=>this.changeFloor(2)),this.ui.uiMobileDown&&(this.ui.uiMobileDown.onclick=()=>this.changeFloor(-2)),this.ui.uiMobileMap&&(this.ui.uiMobileMap.onclick=()=>{if(this.isMap3DActive){this.isTeleportMode?this.toggleTeleportMap(!1):this.toggleMap3D();return}const c=Math.floor(this.player.x),l=Math.floor(this.player.y),d=this.player.z,f=this.maze.get(c,l,d)===this.mazeGen.TYPES.TELEPORT,p=this.inactiveTeleportPos&&this.inactiveTeleportPos.x===c&&this.inactiveTeleportPos.y===l&&this.inactiveTeleportPos.z===d;f&&!p?this.discoveredTeleports.size>=2?this.toggleTeleportMap(!0):this.ui.showInfoBanner(Ot("msgNoOtherActiveTeleport")):this.toggleMap3D()});let i=!1,n=0,a=0;this.handlePointerDown=c=>{i=!1,n=c.clientX,a=c.clientY},this.handlePointerUp=c=>{const l=c.clientX-n,d=c.clientY-a;Math.sqrt(l*l+d*d)>5&&(i=!0)},this.handleCanvasClick=c=>{i||this.onCanvasClick(c)},this.renderer.domElement.addEventListener("pointerdown",this.handlePointerDown),this.renderer.domElement.addEventListener("pointerup",this.handlePointerUp),this.renderer.domElement.addEventListener("click",this.handleCanvasClick),this.resize(),this.updateFloorUI(),this.hideCanvasInstant(),t?(this.restoreFromSave(t),this.playContinueAnimation()):this.startStorytelling(),this.loop();const o=this.mazeGen.size,r=document.getElementById("mobile-zoom-btn");o<=11?r&&r.classList.add("hidden"):r&&r.classList.remove("hidden"),this.ui.updateControlsHint(this.lastInputDevice,o>11)}hideCanvasInstant(){const t=document.getElementById("map-area-container"),e=document.getElementById("left-hud-panel"),i=document.getElementById("right-hud-panel"),n=document.getElementById("bottom-hud-container");t&&(t.style.transition="none",t.classList.remove("intro-reveal"),t.classList.add("intro-hidden"),t.offsetHeight,t.style.transition=""),e&&(e.style.transition="none",e.classList.remove("intro-reveal"),e.classList.add("intro-hidden"),e.offsetHeight,e.style.transition=""),i&&(i.style.transition="none",i.classList.remove("intro-reveal"),i.classList.add("intro-hidden"),i.offsetHeight,i.style.transition=""),n&&(n.style.transition="none",n.classList.remove("intro-reveal"),n.classList.add("intro-hidden"),n.offsetHeight,n.style.transition="")}drawElevator2D(t,e,i,n,a,o,r,c,l=!1,d=0){const f=e===Math.floor(r)&&i===Math.floor(c);if(f){const u=.85+.15*Math.sin(Date.now()/150);t.save(),t.globalAlpha=u}const p=a&&this.maze.get(e,i,d+1)===this.mazeGen.TYPES.ELEVATOR_VISITED,v=o&&this.maze.get(e,i,d-1)===this.mazeGen.TYPES.ELEVATOR_VISITED;if(l)if(a&&o){let u=!1,h=!1;if(this.activePathReveal){const x=this.activePathReveal.findIndex(E=>E.x===e&&E.y===i&&E.z===d);if(x!==-1&&x<this.activePathReveal.length-1){const E=this.activePathReveal[x+1];E.z>d&&(u=!0),E.z<d&&(h=!0)}}!u&&!h&&(u=this.revealedPathSet.has(`${e},${i},${d+1}`)||this.revealedPathSet.has(`${e},${i},${d+2}`),h=this.revealedPathSet.has(`${e},${i},${d-1}`)||this.revealedPathSet.has(`${e},${i},${d-2}`));const _=u||!u&&!h,y=h||!u&&!h;t.fillStyle=_?J.COLORS.REVEALED_PATH:p?J.COLORS.NEON_UP:J.COLORS.NEON_UP_UNUSED,t.fillRect(e*n,i*n,n,n/2),t.fillStyle=y?J.COLORS.REVEALED_PATH:v?J.COLORS.NEON_DOWN:J.COLORS.NEON_DOWN_UNUSED,t.fillRect(e*n,i*n+n/2,n,n/2)}else t.fillStyle=J.COLORS.REVEALED_PATH,t.fillRect(e*n,i*n,n,n);else a&&o?(t.fillStyle=p?J.COLORS.NEON_UP:J.COLORS.NEON_UP_UNUSED,t.fillRect(e*n,i*n,n,n/2),t.fillStyle=v?J.COLORS.NEON_DOWN:J.COLORS.NEON_DOWN_UNUSED,t.fillRect(e*n,i*n+n/2,n,n/2)):a?(t.fillStyle=p?J.COLORS.NEON_UP:J.COLORS.NEON_UP_UNUSED,t.fillRect(e*n,i*n,n,n)):(t.fillStyle=v?J.COLORS.NEON_DOWN:J.COLORS.NEON_DOWN_UNUSED,t.fillRect(e*n,i*n,n,n));const m=e*n+n/2,g=i*n+n/2;if(t.fillStyle="#000000",a&&o){const u=n*.28,h=g-n/5,_=g+n/5;t.beginPath(),t.moveTo(m,h-u/2),t.lineTo(m-u*.6,h+u/2),t.lineTo(m+u*.6,h+u/2),t.closePath(),t.fill(),t.beginPath(),t.moveTo(m,_+u/2),t.lineTo(m-u*.6,_-u/2),t.lineTo(m+u*.6,_-u/2),t.closePath(),t.fill()}else if(a){const u=n*.45;t.beginPath(),t.moveTo(m,g-u/2),t.lineTo(m-u*.6,g+u/2),t.lineTo(m+u*.6,g+u/2),t.closePath(),t.fill()}else{const u=n*.45;t.beginPath(),t.moveTo(m,g+u/2),t.lineTo(m-u*.6,g-u/2),t.lineTo(m+u*.6,g-u/2),t.closePath(),t.fill()}f&&t.restore()}drawCellShadow2D(t,e,i,n,a,o,r){if(o===4)return;const c=i+1<a&&this.maze.get(e,i+1,r)===0,l=e+1<a&&this.maze.get(e+1,i,r)===0,d=e+1<a&&i+1<a&&this.maze.get(e+1,i+1,r)===0;if(c||l||d){t.fillStyle="rgba(0, 0, 0, 0.4)";const f=n*J.SHADOW_SIZE_FACTOR;if(c&&t.fillRect(e*n,(i+1)*n-f,n,f),l){const p=c?n-f:n;t.fillRect((e+1)*n-f,i*n,f,p)}!c&&!l&&d&&t.fillRect((e+1)*n-f,(i+1)*n-f,f,f)}}updateRendererSize(){this.renderer&&(this.renderer.setSize(window.innerWidth,window.innerHeight),this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix())}resize(){const e=window.innerHeight>window.innerWidth?window.innerWidth*.82:window.innerHeight*.75;this.canvas.width=e,this.canvas.height=e,this.staticMapCacheDirty=!0,this.updateRendererSize()}getMapVisitedPercentage(){let t=0,e=0;const i=this.mazeGen.size,n=this.mazeGen.TYPES;for(let a=0;a<i;a++)for(let o=0;o<i;o++)for(let r=0;r<i;r++){const c=this.maze.get(a,o,r);if(c===n.WALL||c===n.EXIT||c===n.STATUE)continue;t++,(c===n.VISITED||c===n.START||c===n.ELEVATOR_VISITED||c===n.TELEPORT&&this.discoveredTeleports.has(`${a},${o},${r}`))&&e++}return t===0?0:Math.floor(e/t*100)}updateFloorUI(){const t=Math.floor(this.player.x),e=Math.floor(this.player.y),i=this.player.z,n=i+1<this.mazeGen.size&&this.maze.get(t,e,i+1)!==this.mazeGen.TYPES.WALL,a=i-1>=0&&this.maze.get(t,e,i-1)!==this.mazeGen.TYPES.WALL;this.ui.updateFloor(i,n,a);const o=this.getMapVisitedPercentage();this.ui.updateVisitedPercent(o),o===100&&!this.mapCompletion100Triggered&&(this.ui.showInfoBanner(Ot("msgWorldSaved")),this.mapCompletion100Triggered=!0),this.checkPathfinderRewards(o)}checkPathfinderRewards(t){const e=this.degree>=12?10:this.degree>=8?20:0;if(e===0)return;this.pathfinderRewardsGranted===void 0&&(this.pathfinderRewardsGranted=0);const i=Math.floor(t/e);if(i>this.pathfinderRewardsGranted){const n=i-this.pathfinderRewardsGranted;this.pathfindersRemaining+=n,this.totalPathfinders+=n,this.pathfinderRewardsGranted=i,this.ui.updatePathfindersHUD(this.pathfindersRemaining,this.totalPathfinders),this.ui.showInfoBanner(Ot("msgFoundPathfinder")),ia(this)}}getTeleportCandidates(){const t=Math.floor(this.player.x),e=Math.floor(this.player.y),i=this.player.z;return Array.from(this.discoveredTeleports).map(n=>{const[a,o,r]=n.split(",").map(Number);return{x:a,y:o,z:r}}).filter(n=>!(n.x===t&&n.y===e&&n.z===i||this.inactiveTeleportPos&&this.inactiveTeleportPos.x===n.x&&this.inactiveTeleportPos.y===n.y&&this.inactiveTeleportPos.z===n.z))}getSelectableTeleportIndices(){const t=Math.floor(this.player.x),e=Math.floor(this.player.y),i=this.player.z;return this.allTeleports.map((n,a)=>({t:n,idx:a})).filter(n=>{const a=`${n.t.x},${n.t.y},${n.t.z}`,o=this.discoveredTeleports.has(a),r=this.inactiveTeleportPos&&n.t.x===this.inactiveTeleportPos.x&&n.t.y===this.inactiveTeleportPos.y&&n.t.z===this.inactiveTeleportPos.z,c=n.t.x===t&&n.t.y===e&&n.t.z===i;return o&&!r&&!c}).map(n=>n.idx)}updateGamepad(t){const e=navigator.getGamepads?navigator.getGamepads():[],i=e[0]||e.find(g=>g!==null);if(!i)return;const n=.25;(Math.abs(i.axes[0])>n||Math.abs(i.axes[1])>n||i.axes[2]!==void 0&&Math.abs(i.axes[2])>n||i.axes[3]!==void 0&&Math.abs(i.axes[3])>n||i.buttons.some(g=>g.pressed))&&this.lastInputDevice!=="gamepad"&&(this.lastInputDevice="gamepad",this.ui.updateControlsHint("gamepad",this.mazeGen.size>11));const o=i.axes[0],r=i.axes[1];let c=o<-n,l=o>n,d=r<-n,f=r>n;if(i.buttons[12]&&i.buttons[12].pressed&&(d=!0),i.buttons[13]&&i.buttons[13].pressed&&(f=!0),i.buttons[14]&&i.buttons[14].pressed&&(c=!0),i.buttons[15]&&i.buttons[15].pressed&&(l=!0),c?this.input.keys.arrowleft=!0:this.lastInputDevice==="gamepad"&&(this.input.keys.arrowleft=!1),l?this.input.keys.arrowright=!0:this.lastInputDevice==="gamepad"&&(this.input.keys.arrowright=!1),d?this.input.keys.arrowup=!0:this.lastInputDevice==="gamepad"&&(this.input.keys.arrowup=!1),f?this.input.keys.arrowdown=!0:this.lastInputDevice==="gamepad"&&(this.input.keys.arrowdown=!1),!this.prevGamepadButtons){this.prevGamepadButtons=i.buttons.map(g=>g.pressed);return}const p=g=>this.prevGamepadButtons[g],v=g=>i.buttons[g]&&i.buttons[g].pressed,m=g=>v(g)&&!p(g);if(this.isStoryActive){if(m(9))this.skipStory();else if(!this.isPreloadingActive){for(let g=0;g<i.buttons.length;g++)if(g!==9&&m(g)){this.triggerAdvanceStory();break}}this.prevGamepadButtons=i.buttons.map(g=>g.pressed);return}if(m(9)){this.togglePause(),this.prevGamepadButtons=i.buttons.map(g=>g.pressed);return}if(this.isPaused){this.prevGamepadButtons=i.buttons.map(g=>g.pressed);return}if(this.isMap3DActive&&!this.isIntroPlaying){const g=v(7),u=v(6);if(g||u){const E=this.mazeGen.size;let b=window.innerWidth*.7/E;b=Math.max(20,Math.min(48,b));const A=b*this.mapZoom,D=A/2,M=A/4,T=D*5,I=window.innerWidth/2+this.mapPanOffsetX,N=window.innerHeight/2+this.mapPanOffsetY,X=this.mapCursor.x,R=this.mapCursor.y,U=this.mapCursor.z,B=this.visualActiveFloor,V=(X-R)*D+I,K=(X+R)*M-(U-B)*T+N,q=this.mapZoom,j=1.025;let it=g?q*j:q/j;if(it=Math.max(.5,Math.min(4,it)),it!==q){const nt=it/q;this.mapPanOffsetX=V-(V-(window.innerWidth/2+this.mapPanOffsetX))*nt-window.innerWidth/2,this.mapPanOffsetY=K-(K-(window.innerHeight/2+this.mapPanOffsetY))*nt-window.innerHeight/2,this.mapZoom=it}}const h=c&&(!this.prevGamepadStick||!this.prevGamepadStick.left),_=l&&(!this.prevGamepadStick||!this.prevGamepadStick.right),y=d&&(!this.prevGamepadStick||!this.prevGamepadStick.up),x=f&&(!this.prevGamepadStick||!this.prevGamepadStick.down);if(this.prevGamepadStick={left:c,right:l,up:d,down:f},this.isTeleportMode){if(this.teleportConfirmModalActive){if((h||m(14)||_||m(15))&&(this.teleportModalSelection=this.teleportModalSelection==="go"?"cancel":"go"),m(0)||m(3)||m(2))if(this.teleportModalSelection==="go"){const E=this.allTeleports[this.selectedTeleportIndex];this.teleportTo(E.x,E.y,E.z),this.toggleTeleportMap(!1)}else this.teleportConfirmModalActive=!1;m(1)&&(this.teleportConfirmModalActive=!1)}else{const E=this.getSelectableTeleportIndices();if(E.length>0){let b=E.indexOf(this.selectedTeleportIndex);if(h||m(14)){b=(b-1+E.length)%E.length,this.selectedTeleportIndex=E[b];const A=this.allTeleports[this.selectedTeleportIndex];this.activeMapFloor=A.z,this.mapCursor={x:A.x,y:A.y,z:A.z}}if(_||m(15)){b=(b+1)%E.length,this.selectedTeleportIndex=E[b];const A=this.allTeleports[this.selectedTeleportIndex];this.activeMapFloor=A.z,this.mapCursor={x:A.x,y:A.y,z:A.z}}if(m(0)||m(3)||m(2)){const A=this.allTeleports[this.selectedTeleportIndex],D=Math.floor(this.player.x),M=Math.floor(this.player.y),T=this.player.z;A&&A.x===D&&A.y===M&&A.z===T||(this.teleportConfirmModalActive=!0,this.teleportModalSelection="go")}}(m(1)||m(8))&&this.toggleTeleportMap(!1)}this.prevGamepadButtons=i.buttons.map(E=>E.pressed);return}if((h||m(14))&&this.navigateCursor("left"),(_||m(15))&&this.navigateCursor("right"),(y||m(12))&&this.navigateCursor("up"),(x||m(13))&&this.navigateCursor("down"),(m(0)||m(4))&&this.activeMapFloor-2>=1&&(this.activeMapFloor-=2),m(5)&&this.activeMapFloor+2<=this.mazeGen.size-2&&(this.activeMapFloor+=2),m(3)||m(2)){const E=this.mapCursor.x,b=this.mapCursor.y,A=this.mapCursor.z;this.getInteractiveElements(this.activeMapFloor).some(T=>T.x===E&&T.y===b&&T.z===A)&&this.triggerPathReveal(E,b,A)}(m(1)||m(8))&&this.toggleMap3D(),this.prevGamepadButtons=i.buttons.map(E=>E.pressed);return}if(m(0)){if(this.isTeleportMode){const u=this.getTeleportCandidates()[this.gamepadTeleportSelectedIndex];u&&this.teleportTo(u.x,u.y,u.z)}else if(!this.isMap3DActive){const g=Math.floor(this.player.x),u=Math.floor(this.player.y),h=this.player.z,_=h>0&&this.maze.get(g,u,h-1)!==0,x=this.maze.get(g,u,h)===this.mazeGen.TYPES.TELEPORT,E=this.inactiveTeleportPos&&this.inactiveTeleportPos.x===g&&this.inactiveTeleportPos.y===u&&this.inactiveTeleportPos.z===h;(!(x&&this.discoveredTeleports.has(`${g},${u},${h}`))||E)&&_&&this.changeFloor(-2)}}if(m(1)&&(this.isTeleportMode?this.toggleTeleportMap(!1):this.toggleZoom()),m(2)&&!this.isTeleportMode&&!this.isMap3DActive){const g=Math.floor(this.player.x),u=Math.floor(this.player.y),h=this.player.z,y=this.maze.get(g,u,h)===this.mazeGen.TYPES.TELEPORT,x=this.inactiveTeleportPos&&this.inactiveTeleportPos.x===g&&this.inactiveTeleportPos.y===u&&this.inactiveTeleportPos.z===h;y&&this.discoveredTeleports.has(`${g},${u},${h}`)&&!x&&(this.discoveredTeleports.size>=2?(this.toggleTeleportMap(!0),this.gamepadTeleportSelectedIndex=0):this.ui.showInfoBanner(Ot("msgNoOtherActiveTeleport")))}if(m(3)&&!this.isTeleportMode&&!this.isMap3DActive){const g=Math.floor(this.player.x),u=Math.floor(this.player.y),h=this.player.z,_=h<this.mazeGen.size-1&&this.maze.get(g,u,h+1)!==0,x=this.maze.get(g,u,h)===this.mazeGen.TYPES.TELEPORT,E=this.inactiveTeleportPos&&this.inactiveTeleportPos.x===g&&this.inactiveTeleportPos.y===u&&this.inactiveTeleportPos.z===h;(!(x&&this.discoveredTeleports.has(`${g},${u},${h}`))||E)&&_&&this.changeFloor(2)}if(m(8)&&(this.isTeleportMode?this.toggleTeleportMap(!1):this.toggleMap3D()),this.isTeleportMode){const g=m(4)||m(14),u=m(5)||m(15);if(g||u){const h=this.getTeleportCandidates();h.length>0&&(g?this.gamepadTeleportSelectedIndex=(this.gamepadTeleportSelectedIndex-1+h.length)%h.length:this.gamepadTeleportSelectedIndex=(this.gamepadTeleportSelectedIndex+1)%h.length)}}if(this.isMap3DActive&&this.controls){const g=i.axes[2],u=i.axes[3],h=i.buttons[7]?i.buttons[7].value:0,_=i.buttons[6]?i.buttons[6].value:0,y=.15,x=.15,E=(J.ROT_SPEED!==void 0?J.ROT_SPEED:2)*t,b=20*t,A=Math.abs(g)>y||Math.abs(u)>y,D=h>x||_>x;if(A||D){const M=new H().copy(this.camera.position).sub(this.controls.target),T=new va().setFromVector3(M);if(Math.abs(g)>y&&(T.theta-=g*E),Math.abs(u)>y){T.phi-=u*E;const X=this.controls.minPolarAngle||0,R=this.controls.maxPolarAngle||Math.PI;T.phi=Math.max(X,Math.min(R,T.phi))}h>x&&(T.radius-=h*b),_>x&&(T.radius+=_*b);const I=this.controls.minDistance||2,N=this.controls.maxDistance||100;T.radius=Math.max(I,Math.min(N,T.radius)),T.makeSafe(),M.setFromSpherical(T),this.camera.position.copy(this.controls.target).add(M),this.controls.update()}}this.prevGamepadButtons=i.buttons.map(g=>g.pressed)}queueNotification(t){this.notificationQueue.push(t)}updateNotification(t){if(!this.activeNotification){if(this.notificationQueue.length>0){const i=this.notificationQueue.shift();this.activeNotification={text:i,displayText:"",state:"OPENING",widthProgress:0,typeTimer:0,charIndex:0,waitTimer:0,closeProgress:1}}return}const e=this.activeNotification;e.state==="OPENING"?(e.widthProgress+=t/.15,e.widthProgress>=1&&(e.widthProgress=1,e.state="TYPING")):e.state==="TYPING"?(e.typeTimer+=t,e.typeTimer>=.025&&(e.typeTimer=0,e.charIndex++,e.displayText=e.text.substring(0,e.charIndex),e.charIndex>=e.text.length&&(e.state="WAITING",e.waitTimer=0))):e.state==="WAITING"?(this.isZoomTransitionActive||(e.waitTimer+=t),e.waitTimer>=1&&(e.state="CLOSING",e.closeProgress=1)):e.state==="CLOSING"&&(e.closeProgress-=t/.15,e.closeProgress<=0&&(e.closeProgress=0,this.activeNotification=null))}update(t){if(this.isGameOver||this.isDestroyed||!t)return;if(this.isStoryActive){this.updateGamepad(t),this.updateStory(t);return}if(this.isZoomTransitionActive&&(this.zoomTransitionTimer-=t,this.zoomTransitionTimer<=0&&(this.isZoomTransitionActive=!1,this.zoomTransitionTimer=0)),this.updateNotification(t),this.updateGamepad(t),this.isPaused)return;this.isIntroPlaying||this.hunters.some(o=>o.state!=="SLEEP"&&o.z===this.player.z)&&(this.hunterOnSameFloorDetected||(this.ui.showInfoBanner(Ot("msgDidYouHearThat")),this.hunterOnSameFloorDetected=!0)),this.hunters.some(a=>a.state==="SLEEP")&&this.getMapVisitedPercentage()>=10&&this.wakeHunters();const i=1e3/J.HUNTER_SPEED*t;for(const a of this.hunters)a.visualX=na(a.visualX,a.x,i),a.visualY=na(a.visualY,a.y,i),a.visualZ=na(a.visualZ,a.z,i*2),a.generateCloudTexture(t);if(this.isMap3DActive){this.controls.update();const a=this.mazeGen.size,o=this.isTeleportMode?.25:1;for(const r of this.hunterMeshes){const c=r.hunter;r.mesh.position.set(c.visualX-a/2,(c.visualZ-a/2)*this.vScale,c.visualY-a/2);const d=c.jellyTime,f=1+Math.sin(d*1.2)*.07,p=1+Math.cos(d*.8)*.07,v=1+Math.sin(d*1.5)*.07;r.coreMesh&&(r.coreMesh.scale.set(f,p,v),r.coreMesh.material&&(r.coreMesh.material.emissiveIntensity=(.8+.2*Math.sin(d*3)+(Math.random()<.1?(Math.random()-.5)*.4:0))*o)),r.particles&&r.particles.forEach(_=>{const y=_.userData;y.angle+=y.speed*t;const x=Math.cos(y.angle)*y.radius,E=Math.sin(y.angle)*y.radius,b=Math.sin(y.angle*2+y.phaseY)*.25;let A=0,D=0,M=0;Math.random()<.15?(A=(Math.random()-.5)*.12,D=(Math.random()-.5)*.12,M=(Math.random()-.5)*.12,_.scale.set(1.4+Math.random()*.4,.6+Math.random()*.3,1.4+Math.random()*.4)):_.scale.set(1,1,1),_.position.set(x+A,b+D,E+M)});const m=c.x-c.visualX,g=c.y-c.visualY,u=Math.sqrt(m*m+g*g),h=Math.max(0,Math.min(1,1-u));if(c.lastPos&&(c.lastPos.x!==c.x||c.lastPos.y!==c.y)){r.trail1.position.set(c.lastPos.x-a/2,(c.lastPos.z-a/2)*this.vScale,c.lastPos.y-a/2),r.trail1.visible=!0;const _=c.jellyTime-.2,y=.95-h*.47,x=y*(1+Math.sin(_*1.2)*.07),E=y*(1+Math.cos(_*.8)*.07),b=y*(1+Math.sin(_*1.5)*.07);r.trail1.scale.set(x,E,b),r.trail1.material&&(r.trail1.material.opacity=(.4-h*.2)*o)}else r.trail1.visible=!1;if(c.history&&c.history.length===2){const _=c.history[0];r.trail2.position.set(_.x-a/2,(_.z-a/2)*this.vScale,_.y-a/2);const y=.48*(1-h);if(y>.02){r.trail2.visible=!0;const x=c.jellyTime-.4,E=y*(1+Math.sin(x*1.2)*.07),b=y*(1+Math.cos(x*.8)*.07),A=y*(1+Math.sin(x*1.5)*.07);r.trail2.scale.set(E,b,A),r.trail2.material&&(r.trail2.material.opacity=.2*(1-h)*o)}else r.trail2.visible=!1}else r.trail2.visible=!1}if(this.keyMeshes)for(const r of this.keyMeshes)r.rotation.y+=1.5*t,r.rotation.x+=.5*t;if(this.isTeleportMode&&this.teleportMeshes&&this.gamepadTeleportSelectedIndex!==void 0){const c=this.getTeleportCandidates()[this.gamepadTeleportSelectedIndex];this.teleportMeshes.forEach(l=>{const{gridX:d,gridY:f,gridZ:p}=l.userData;if(c&&d===c.x&&f===c.y&&p===c.z){const m=1.3+.25*Math.sin(Date.now()/100);l.scale.set(m,m,m),l.material&&l.material.emissive&&(l.material.emissive.setHex(16755200),l.material.emissiveIntensity=3.5)}else{const m=d===Math.floor(this.player.x)&&f===Math.floor(this.player.y)&&p===this.player.z,g=this.inactiveTeleportPos&&this.inactiveTeleportPos.x===d&&this.inactiveTeleportPos.y===f&&this.inactiveTeleportPos.z===p;let u=1;m&&(u=1.4),l.scale.set(u,u,u),l.material&&l.material.emissive&&(g?(l.material.emissive.setHex(4473924),l.material.emissiveIntensity=0):m?(l.material.emissive.setHex(65535),l.material.emissiveIntensity=3):(l.material.emissive.setHex(J.COLORS.THREE_TELEPORT),l.material.emissiveIntensity=2.5))}})}}if(!this.isMap3DActive&&!this.isZoomTransitionActive){let a=0,o=0;const l=1e3/J.HUNTER_SPEED*J.MOVE_SPEED_FACTOR*t;let d=0,f=0;if(this.input.touchMoveVector?(d=this.input.touchMoveVector.x,f=this.input.touchMoveVector.y):((this.input.keys.w||this.input.keys.arrowup)&&(f-=1),(this.input.keys.s||this.input.keys.arrowdown)&&(f+=1),(this.input.keys.a||this.input.keys.arrowleft)&&(d-=1),(this.input.keys.d||this.input.keys.arrowright)&&(d+=1)),d!==0||f!==0){const x=Math.sqrt(d*d+f*f);a=d/x*l,o=f/x*l,this.player.dir=Math.atan2(o,a)}let p=!1;if(a!==0||o!==0){p=!0;const x=.01,E=Math.abs(a)>x,b=Math.abs(o)>x;E&&b?(this.playerSide=a>0?"right":"left",this.playerVertical=o>0?"down":"up"):E?this.playerSide=a>0?"right":"left":b&&(this.playerVertical=o>0?"down":"up")}if(p?(this.playerWalkCycle=(this.playerWalkCycle||0)+t*18,this.playerSquashTargetX=1+Math.sin(this.playerWalkCycle)*.15,this.playerSquashTargetY=1-Math.sin(this.playerWalkCycle)*.15):(this.playerSquashTargetX=1,this.playerSquashTargetY=1),this.playerSquashX=this.playerSquashX||1,this.playerSquashY=this.playerSquashY||1,this.playerSquashX+=(this.playerSquashTargetX-this.playerSquashX)*.25,this.playerSquashY+=(this.playerSquashTargetY-this.playerSquashY)*.25,a!==0||o!==0){const x=Math.floor(this.player.x),E=Math.floor(this.player.y),b=this.player.x+a,A=this.player.y+o,D=(q,j,it)=>{const nt=this.maze.get(q,j,it);return nt===this.mazeGen.TYPES.WALL||nt===this.mazeGen.TYPES.STATUE?!1:nt===this.mazeGen.TYPES.EXIT&&this.keysCollected<this.totalKeys?(this.triggerLockedExitWarning(),!1):!0},M=J.PLAYER_COLLISION_RADIUS,T=J.PLAYER_COLLISION_OFFSET_X||0,I=J.PLAYER_COLLISION_OFFSET_Y||0,N=(q,j,it)=>{const nt=Math.floor(q+T-M),Z=Math.floor(q+T+M),C=Math.floor(j+I-M),G=Math.floor(j+I+M);for(let $=nt;$<=Z;$++)for(let z=C;z<=G;z++)if($<0||$>=this.mazeGen.size||z<0||z>=this.mazeGen.size||!D($,z,it))return!1;return!0};N(b,this.player.y,this.player.z)&&(this.player.x=b),N(this.player.x,A,this.player.z)&&(this.player.y=A);const X=Math.floor(this.player.x),R=Math.floor(this.player.y),U=this.player.z;if(X!==x||R!==E){const q=this.maze.get(x,E,U);if(q===this.mazeGen.TYPES.VISITED||q===this.mazeGen.TYPES.START||q===this.mazeGen.TYPES.TELEPORT){const it=U+1<this.mazeGen.size&&this.maze.get(X,R,U+1)!==this.mazeGen.TYPES.WALL,nt=U-1>=0&&this.maze.get(X,R,U-1)!==this.mazeGen.TYPES.WALL;it&&nt?this.dialogueWhichWayTriggered||(this.ui.showInfoBanner(Ot("msgWhichWay")),this.dialogueWhichWayTriggered=!0):it?this.dialogueUpTriggered||(this.ui.showInfoBanner(Ot("msgElevatorUp")),this.dialogueUpTriggered=!0):nt&&(this.dialogueDownTriggered||(this.ui.showInfoBanner(Ot("msgElevatorDown")),this.dialogueDownTriggered=!0))}}const V=(q,j,it)=>{const nt=this.maze.get(q,j,it);(nt===this.mazeGen.TYPES.PATH||nt===this.mazeGen.TYPES.KEY)&&(nt===this.mazeGen.TYPES.KEY?this.collectKey(q,j,it):this.maze.set(q,j,it,this.mazeGen.TYPES.VISITED),this.staticMapCacheDirty=!0)};V(X,R,U),X!==x&&R!==E&&(V(X,E,U),V(x,R,U));const K=this.maze.get(X,R,U);!this.exitPathfinderUnlocked&&this.checkExitNeighborVisited()&&(this.exitPathfinderUnlocked=!0,this.ui.showInfoBanner(Ot("msgExitFound"))),K===this.mazeGen.TYPES.EXIT&&this.triggerVictory()}if((a!==0||o!==0)&&(this.skipCellAnimations=!1),this.checkHunterCollision(),this.isGameOver)return;const v=Math.floor(this.player.x),m=Math.floor(this.player.y),g=this.player.z,u=this.maze.get(v,m,g)===this.mazeGen.TYPES.TELEPORT,h=this.inactiveTeleportPos&&this.inactiveTeleportPos.x===v&&this.inactiveTeleportPos.y===m&&this.inactiveTeleportPos.z===g;if(v>=0&&v<this.mazeGen.size&&m>=0&&m<this.mazeGen.size){if(this.maze.get(v,m,g)===this.mazeGen.TYPES.PATH)this.maze.set(v,m,g,this.mazeGen.TYPES.VISITED),this.staticMapCacheDirty=!0;else if(u){const D=`${v},${m},${g}`;!(this.lastPlayerCell&&this.lastPlayerCell.x===v&&this.lastPlayerCell.y===m&&this.lastPlayerCell.z===g)&&!h&&(this.discoveredTeleports.add(D),this.staticMapCacheDirty=!0,this.triggerSave(),this.ui.showInfoBanner(Ot("msgSafePointTeleport")))}const x=g<this.mazeGen.size-1&&this.maze.get(v,m,g+1)!==this.mazeGen.TYPES.WALL,E=g>0&&this.maze.get(v,m,g-1)!==this.mazeGen.TYPES.WALL,b=x||E;if(this.lastPlayerCell){const D=this.lastPlayerCell.x,M=this.lastPlayerCell.y,T=this.lastPlayerCell.z,I=T<this.mazeGen.size-1&&this.maze.get(D,M,T+1)!==this.mazeGen.TYPES.WALL,N=T>0&&this.maze.get(D,M,T-1)!==this.mazeGen.TYPES.WALL;if((I||N)&&(D!==v||M!==m||T!==g)){const U=`${D},${M},${T}`;this.revealedPathSet.has(U)&&(this.revealedPathSet.delete(U),this.staticMapCacheDirty=!0)}}const A=`${v},${m},${g}`;!b&&this.revealedPathSet.has(A)&&(this.revealedPathSet.delete(A),this.staticMapCacheDirty=!0)}u&&!h?(this.input.keys.e||this.input.keys.pageup||this.input.keys.q||this.input.keys.pagedown)&&(["e","q","pageup","pagedown"].forEach(x=>this.input.keys[x]=!1),this.discoveredTeleports.size>=2?this.toggleTeleportMap(!0):this.ui.showInfoBanner(Ot("msgNoOtherActiveTeleport"))):((this.input.keys.e||this.input.keys.pageup)&&this.changeFloor(2),(this.input.keys.q||this.input.keys.pagedown)&&this.changeFloor(-2)),(!this.lastPlayerCell||this.lastPlayerCell.x!==v||this.lastPlayerCell.y!==m||this.lastPlayerCell.z!==g)&&(this.staticMapCacheDirty=!0);const y=window.innerHeight>window.innerWidth;this.ui.updateMobileMapButton(u,h,y),this.updateFloorUI(),this.lastPlayerCell={x:v,y:m,z:g}}const n=performance.now();if(n-this.lastHunterMove>J.HUNTER_SPEED){if(this.lastHunterMove=n,this.teleportCooldownTicks>0&&(this.teleportCooldownTicks--,this.staticMapCacheDirty=!0,this.teleportCooldownTicks===0)){this.inactiveTeleportPos=null;for(const m of this.hunters){const g=this.maze.get(m.x,m.y,m.z);if(g===this.mazeGen.TYPES.VISITED||g===this.mazeGen.TYPES.START||g===this.mazeGen.TYPES.EXIT){const u=m.state;m.state="TRACKING",u!=="TRACKING"&&!this.dialogueDetectedTriggered&&(this.ui.showInfoBanner(Ot("msgIWasDetected")),this.dialogueDetectedTriggered=!0)}else m.state="WANDERING",m.pathToTarget=[],m.visitedNodes.clear(),m.visitedNodes.add(`${m.x},${m.y},${m.z}`)}}let a=0,o=0;const r=this.hunters.some(m=>m.state==="SLEEP");for(const m of this.hunters){if(m.state==="SLEEP")continue;const g=m.state;m.move(this.player,this.maze,this.mazeGen.TYPES),m.state==="TRACKING"&&g!=="TRACKING"&&!this.dialogueDetectedTriggered&&(this.ui.showInfoBanner(Ot("msgIWasDetected")),this.dialogueDetectedTriggered=!0),(m.state==="TRACKING"||m.state==="TELEPORT_TRACKING")&&a++;const u=m.z===this.player.z;let h=!1;if(u)h=!0;else{const _=Math.max(5,Math.floor(this.degree*1.2));$p({x:m.x,y:m.y,z:m.z},{x:Math.floor(this.player.x),y:Math.floor(this.player.y),z:this.player.z},this.maze,this.mazeGen.size,this.mazeGen.TYPES.WALL,_,this.mazeGen.startPos)<=_&&(h=!0)}if(h&&o++,this.checkHunterCollision(),this.isGameOver)return}const c=a>0;this.ui.updateHazardWarning(c,this.teleportCooldownTicks,this.isSafeMode,r),c?this.canvas.classList.add("hunted-map-effect"):this.canvas.classList.remove("hunted-map-effect"),this.ui.setNearbyWarning(o>0);let l=1/0;const d=Math.floor(this.player.x),f=Math.floor(this.player.y),p=this.player.z,v=this.hunters.filter(m=>m.state!=="SLEEP");for(const m of v){const g=Kp({x:m.x,y:m.y,z:m.z},{x:d,y:f,z:p},this.maze,this.mazeGen.size,this.mazeGen.TYPES.WALL);g<l&&(l=g)}this.ui.updateProximeter(l,v.length,this.isGameOver)}}changeFloor(t){if(this.isGameOver||this.floorTransition)return;this.skipCellAnimations=!0;const e=Math.floor(this.player.x),i=Math.floor(this.player.y),n=this.player.z,a=n+1<this.mazeGen.size&&this.maze.get(e,i,n+1)!==this.mazeGen.TYPES.WALL&&this.maze.get(e,i,n+1)!==this.mazeGen.TYPES.STATUE,o=n-1>=0&&this.maze.get(e,i,n-1)!==this.mazeGen.TYPES.WALL&&this.maze.get(e,i,n-1)!==this.mazeGen.TYPES.STATUE;if(t>0&&a||t<0&&o){const r=n+t;if(r>=0&&r<this.mazeGen.size&&this.maze.get(e,i,r)!==this.mazeGen.TYPES.WALL&&this.maze.get(e,i,r)!==this.mazeGen.TYPES.STATUE){const c=n+t/2;this.maze.get(e,i,c)!==this.mazeGen.TYPES.ELEVATOR_VISITED&&(this.maze.set(e,i,c,this.mazeGen.TYPES.ELEVATOR_VISITED),this.staticMapCacheDirty=!0);const l=`${e},${i},${c}`;this.revealedPathSet.delete(l);const d=document.createElement("canvas");d.width=this.canvas.width,d.height=this.canvas.height;const f=d.getContext("2d");this.renderMapToContext(f,this.player.z),this.player.x=e+J.PLAYER_START_X,this.player.y=i+J.PLAYER_START_Y%1,this.player.z=r,this.staticMapCacheDirty=!0,this.populateFullyRevealedCells(r),this.maze.get(e,i,r)===this.mazeGen.TYPES.PATH&&this.maze.set(e,i,r,this.mazeGen.TYPES.VISITED);const p=document.createElement("canvas");p.width=this.canvas.width,p.height=this.canvas.height;const v=p.getContext("2d");this.renderMapToContext(v,this.player.z),this.floorTransition={canvasOld:d,canvasNew:p,progress:0,duration:.4,delta:t},this.updateFloorUI(),this.draw2DMap(0),this.maze.get(e,i,r)===this.mazeGen.TYPES.EXIT&&this.triggerVictory()}}}toggleMap3D(){this.isMap3DActive=!this.isMap3DActive,this.isTeleportMode=!1;const t=document.getElementById("mobile-teleport-exit-btn");if(t&&t.classList.add("hidden"),this.isMap3DActive){this.ui.setMap3DVisible(!0),this.activeMapFloor=this.player.z,this.visualActiveFloor=this.player.z,this.mapCursor={x:Math.floor(this.player.x),y:Math.floor(this.player.y),z:this.player.z},this.mapZoom=1,this.mapPanOffsetX=0,this.mapPanOffsetY=0,this.renderer&&this.renderer.domElement&&(this.renderer.domElement.style.display="none");const e=document.getElementById("map3d-instructions");e&&(e.style.display="none"),this.isometricCanvas||this.initIsometricCanvas(),this.isometricCanvas.style.display="block"}else this.ui.uiMobileControls&&this.ui.uiMobileControls.classList.remove("hidden"),this.ui.setMap3DVisible(!1),this.isometricCanvas&&(this.isometricCanvas.style.display="none")}build3DMap(t=!1){for(;this.scene.children.length>0;)this.scene.remove(this.scene.children[0]);this.scene.add(new ho(16777215,.6));const e=new co(16777215,.4);e.position.set(10,20,10),this.scene.add(e),this.pulsatingMaterials=[],this.hunterMeshes=[],this.teleportMeshes=[],this.knownMeshes=[],this.keyMeshes=[],this.exitMesh=null;const i=this.mazeGen.size,n=(_,y,x)=>{if(x<0||x>=i)return!1;const E=this.maze.get(_,y,x);return E===2||E===3||E===4||E===this.mazeGen.TYPES.TELEPORT&&this.discoveredTeleports.has(`${_},${y},${x}`)};this.gridMeshes=new Array(i*i*i).fill(null);const a=new we(.9,.9,.9),o=this.isTeleportMode?J.TELEPORT_MAP_OPACITY:1,r=new we(.9,.425,.9),c=new we(.9,.425,.9),l=new us(.35,.35,2*this.vScale,8);new ne({color:J.COLORS.THREE_VISITED,transparent:!0,opacity:.8*o});for(let _=0;_<i;_++)for(let y=0;y<i;y++)for(let x=0;x<i;x++){const E=this.maze.get(_,y,x);if(E===this.mazeGen.TYPES.WALL||E===this.mazeGen.TYPES.STATUE)continue;if(x%2===0&&E!==0){const U=`${_},${y},${x}`,B=this.revealedPathSet.has(U),V=E===this.mazeGen.TYPES.ELEVATOR_VISITED,K=E===1&&(n(_,y,x-1)||n(_,y,x+1));if(V||K||B||t){let q;if(B)q=new ne({color:16777215,transparent:!0,opacity:.95*o,emissive:16777215,emissiveIntensity:2*o});else if(V)q=new ne({color:J.COLORS.THREE_VISITED,transparent:!0,opacity:.8*o});else if(K||t){const it=t?J.COLORS.THREE_VISITED:J.COLORS.THREE_KNOWN;q=new ne({color:it,transparent:!0,opacity:t?.72:.6*o,emissive:it,emissiveIntensity:t?0:.5*o}),t||this.pulsatingMaterials.push(q)}const j=new te(l,q);j.position.set(_-i/2,(x-i/2)*this.vScale,y-i/2),this.scene.add(j),this.gridMeshes[_*i*i+y*i+x]=j,K&&!B&&(j.userData={gridX:_,gridY:y,gridZ:x},this.knownMeshes.push(j))}continue}const A=E===this.mazeGen.TYPES.TELEPORT,D=A&&this.discoveredTeleports.has(`${_},${y},${x}`),M=E===2||E===3||E===4||E===5||D,T=(E===1||A&&!D)&&this.isNearVisited(_,y,x);if(D){if(_===Math.floor(this.mazeGen.startPos.x)&&y===Math.floor(this.mazeGen.startPos.y)&&x===this.mazeGen.startPos.z){const G=this.isTeleportMode?2.5:.5,$=new ne({color:J.COLORS.THREE_START,emissive:J.COLORS.THREE_START,emissiveIntensity:G*o,transparent:!0,opacity:this.isTeleportMode?.95:.8*o}),z=new te(a,$);z.position.set(_-i/2,(x-i/2)*this.vScale,y-i/2),this.isTeleportMode&&z.scale.set(1.4,1.4,1.4),z.userData={isTeleport:!0,gridX:_,gridY:y,gridZ:x},this.scene.add(z),this.teleportMeshes.push(z);continue}const B=_===Math.floor(this.player.x)&&y===Math.floor(this.player.y)&&x===this.player.z,V=this.inactiveTeleportPos&&this.inactiveTeleportPos.x===_&&this.inactiveTeleportPos.y===y&&this.inactiveTeleportPos.z===x;let K=this.isTeleportMode?.9:.45,q=this.isTeleportMode?2.5:.8,j=J.COLORS.THREE_TELEPORT,it=.95;V?(j=4473924,q=0,it=.4):this.isTeleportMode&&B&&(j=65535,it=.5,q=3);const nt=new Tn(K,16,16),Z=new ne({color:j,emissive:j,emissiveIntensity:q,transparent:!0,opacity:it}),C=new te(nt,Z);C.position.set(_-i/2,(x-i/2)*this.vScale,y-i/2),C.userData={isTeleport:!0,gridX:_,gridY:y,gridZ:x},this.scene.add(C),this.teleportMeshes.push(C);continue}if(E===this.mazeGen.TYPES.KEY){const U=new Ra(.3,0),B=new ne({color:J.COLORS.THREE_KEY,emissive:J.COLORS.THREE_KEY,emissiveIntensity:.6*o,shininess:100}),V=new te(U,B);V.position.set(_-i/2,(x-i/2)*this.vScale,y-i/2),V.userData={isKey:!0,gridX:_,gridY:y,gridZ:x},this.scene.add(V),this.keyMeshes.push(V),this.pulsatingMaterials.push(B);continue}const N=`${_},${y},${x}`,X=this.revealedPathSet.has(N);if(t?E!==this.mazeGen.TYPES.WALL:M||T||X){let U=t?J.COLORS.THREE_VISITED:J.COLORS.THREE_KNOWN,B;X?(U=16777215,B=new ne({color:U,transparent:!0,opacity:.95*o,emissive:U,emissiveIntensity:2*o})):M||t?(U=J.COLORS.THREE_VISITED,E===3?U=J.COLORS.THREE_START:E===4&&(U=this.keysCollected===this.totalKeys?J.COLORS.THREE_EXIT:16724736),B=new ne({color:U,transparent:!0,opacity:t?.72:.8*o})):T&&(B=new ne({color:U,transparent:!0,opacity:.6*o,emissive:U,emissiveIntensity:.5*o}),this.pulsatingMaterials.push(B));const V=x<i-1&&this.maze.get(_,y,x+1)!==0,K=x>0&&this.maze.get(_,y,x-1)!==0;if(V||K){const nt=this.pulsatingMaterials.indexOf(B);if(nt>-1&&this.pulsatingMaterials.splice(nt,1),V&&K){let Z=!1,C=!1;if(X){if(this.activePathReveal){const bt=this.activePathReveal.findIndex(F=>F.x===_&&F.y===y&&F.z===x);if(bt!==-1&&bt<this.activePathReveal.length-1){const F=this.activePathReveal[bt+1];F.z>x&&(Z=!0),F.z<x&&(C=!0)}}!Z&&!C&&(Z=this.revealedPathSet.has(`${_},${y},${x+1}`)||this.revealedPathSet.has(`${_},${y},${x+2}`),C=this.revealedPathSet.has(`${_},${y},${x-1}`)||this.revealedPathSet.has(`${_},${y},${x-2}`))}const G=X&&(Z||!Z&&!C),$=X&&(C||!Z&&!C),z=new ne({color:$?16777215:J.COLORS.THREE_ELEVATOR_DOWN,transparent:!0,opacity:.9*o,emissive:$?16777215:J.COLORS.THREE_ELEVATOR_DOWN,emissiveIntensity:($?2:.4)*o}),Y=new ne({color:G?16777215:J.COLORS.THREE_ELEVATOR_UP,transparent:!0,opacity:.9*o,emissive:G?16777215:J.COLORS.THREE_ELEVATOR_UP,emissiveIntensity:(G?2:.4)*o}),st=new te(r,z),ut=new te(c,Y);st.position.set(_-i/2,(x-i/2)*this.vScale-.2125,y-i/2),ut.position.set(_-i/2,(x-i/2)*this.vScale+.2125,y-i/2),this.scene.add(st),this.scene.add(ut),this.gridMeshes[_*i*i+y*i+x]=ut,T&&!X&&(st.userData={gridX:_,gridY:y,gridZ:x},ut.userData={gridX:_,gridY:y,gridZ:x},this.knownMeshes.push(st),this.knownMeshes.push(ut));continue}else{const Z=X?16777215:V?J.COLORS.THREE_ELEVATOR_UP:J.COLORS.THREE_ELEVATOR_DOWN,C=X?2:.4;B=new ne({color:Z,transparent:!0,opacity:.9*o,emissive:Z,emissiveIntensity:C*o})}}const q=_===Math.floor(this.player.x)&&y===Math.floor(this.player.y)&&x===this.player.z,j=this.hunters.some(nt=>nt.x===_&&nt.y===y&&nt.z===x);if(q||j){const nt=new we(.9,.05,.9),Z=new te(nt,B);Z.position.set(_-i/2,(x-i/2)*this.vScale-.425,y-i/2),this.scene.add(Z),this.gridMeshes[_*i*i+y*i+x]=Z;continue}const it=new te(a,B);if(it.position.set(_-i/2,(x-i/2)*this.vScale,y-i/2),E===4&&(this.exitMesh=it,this.keysCollected<this.totalKeys)){const nt=new we(.95,.95,.95),Z=new ds({color:16711680,wireframe:!0}),C=new te(nt,Z);it.add(C)}this.scene.add(it),this.gridMeshes[_*i*i+y*i+x]=it,(T||E===this.mazeGen.TYPES.EXIT)&&!X&&(it.userData={gridX:_,gridY:y,gridZ:x},this.knownMeshes.push(it))}}if(t)return;const d=new Tn(.42,16,16),f=new ne({color:16711680,emissive:16711680,emissiveIntensity:.8,depthWrite:!1}),p=new te(d,f);p.position.set(Math.floor(this.player.x)-i/2,(this.player.z-i/2)*this.vScale+.05,Math.floor(this.player.y)-i/2),this.scene.add(p);const v=new Tn(.4),m=new ne({color:J.COLORS.THREE_HUNTER,emissive:J.COLORS.THREE_HUNTER,emissiveIntensity:.8,depthWrite:!1}),g=new ne({color:J.COLORS.THREE_HUNTER,transparent:!0,opacity:.4,emissive:J.COLORS.THREE_HUNTER,emissiveIntensity:.3,depthWrite:!1}),u=new ne({color:J.COLORS.THREE_HUNTER,transparent:!0,opacity:.15,emissive:J.COLORS.THREE_HUNTER,emissiveIntensity:.1,depthWrite:!1}),h=v;for(let _=0;_<this.hunters.length;_++){const y=this.hunters[_];if(y.state==="SLEEP")continue;const x=new te(h,u),E=new te(h,g);x.visible=!1,E.visible=!1,x.renderOrder=99,E.renderOrder=99,this.scene.add(x),this.scene.add(E);const b=new xn;b.renderOrder=99;const A=new te(v,m);b.add(A);const D=4,M=[],T=new we(.18,.18,.18),I=[J.COLORS.THREE_HUNTER,16711935,65535,16776960];for(let N=0;N<D;N++){const X=new ne({color:I[N%I.length],transparent:!0,opacity:.8,emissive:I[N%I.length],emissiveIntensity:.8,depthWrite:!1}),R=new te(T,X);R.userData={angle:N/D*Math.PI*2,radius:.35+Math.random()*.1,speed:1+Math.random()*1.5,phaseY:Math.random()*Math.PI*2},b.add(R),M.push(R)}b.position.set(y.x-i/2,(y.z-i/2)*this.vScale,y.y-i/2),this.scene.add(b),this.hunterMeshes.push({hunter:y,mesh:b,coreMesh:A,particles:M,trail1:E,trail2:x})}this.camera.position.set(i,i*this.vScale,i),this.controls.target.set(0,0,0),this.controls.update()}draw2DMap(t=.016){if(this.deathAnimation&&this.deathAnimation.active)if(!this.deathAnimation.screenFilled)this.deathAnimation.elapsed+=t,this.deathAnimation.elapsed>=this.deathAnimation.duration&&(this.deathAnimation.screenFilled=!0);else{if(this.deathAnimation.glitchElapsed+=t,!this.deathAnimation.uiTriggered){this.deathAnimation.uiTriggered=!0,this.ui.showDeath(this.hasSavePoint);const a=document.getElementById("game-over-screen");a&&(a.style.opacity="0")}this.deathAnimation.uiFade=Math.min(1,this.deathAnimation.glitchElapsed/this.deathAnimation.glitchDuration);const n=document.getElementById("game-over-screen");n&&(n.style.opacity=this.deathAnimation.uiFade)}this.floorTransition&&(this.floorTransition.progress+=t/this.floorTransition.duration,this.floorTransition.progress>=1&&(this.floorTransition=null));const e=this.mazeGen.size,i=this.isZoomActive?11:e;if(this.zoomVisibleCells===void 0?this.zoomVisibleCells=i:(this.zoomVisibleCells+=(i-this.zoomVisibleCells)*(1-Math.exp(-12*t)),Math.abs(this.zoomVisibleCells-i)<.01&&(this.zoomVisibleCells=i)),this.floorTransition){const n=this.floorTransition.progress,a=this.canvas.width/2,o=this.canvas.height/2,r=this.floorTransition.delta>0;this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);let c,l;r?(c=1-.2*n,l=1.2-.2*n):(c=1+.2*n,l=.8+.2*n),this.ctx.save(),this.ctx.globalAlpha=1-n,this.ctx.translate(a,o),this.ctx.scale(c,c),this.ctx.drawImage(this.floorTransition.canvasOld,-a,-o),this.ctx.restore(),this.ctx.save(),this.ctx.globalAlpha=n,this.ctx.translate(a,o),this.ctx.scale(l,l),this.ctx.drawImage(this.floorTransition.canvasNew,-a,-o),this.ctx.restore()}else this.renderMapToContext(this.ctx,this.player.z)}renderMapToContext(t,e){t.clearRect(0,0,t.canvas.width,t.canvas.height);const i=this.mazeGen.size,n=i>11,a=n?t.canvas.width/11:t.canvas.width/i,o=this.player.x,r=this.player.y;let c=n||this.isZoomTransitionActive,l=n?this.zoomVisibleCells:i;if(this.isZoomTransitionActive){const _=Math.min(1,(2-this.zoomTransitionTimer)/2),x=(A=>1-Math.pow(1-A,3))(_),E=3;l=E+((n?11:i)-E)*x}if(c){t.save();const h=(n?11:i)/l,_=l/2;let y=o,x=r;y<_&&(y=_),y>i-_&&(y=i-_),x<_&&(x=_),x>i-_&&(x=i-_);const E=t.canvas.width/2,b=t.canvas.height/2;t.translate(E,b),t.scale(h,h),t.translate(-y*a,-x*a)}const d=n?i*a:this.canvas.width,f=n?i*a:this.canvas.height;(this.staticMapCacheDirty||this.staticMapCacheCanvas.width!==d||this.staticMapCacheCanvas.height!==f)&&this.updateStaticMapCache(e),t.drawImage(this.staticMapCacheCanvas,0,0);const p=Math.floor(o),v=Math.floor(r);if(this.maze.get(p,v,e)===this.mazeGen.TYPES.TELEPORT&&this.discoveredTeleports.has(`${p},${v},${e}`)&&!(this.inactiveTeleportPos&&this.inactiveTeleportPos.x===p&&this.inactiveTeleportPos.y===v&&this.inactiveTeleportPos.z===e)){const _=.85+.15*Math.sin(Date.now()/150);t.save(),t.globalAlpha=_,t.fillStyle=J.COLORS.TELEPORT,t.fillRect(p*a,v*a,a,a),t.restore()}for(const h of this.hunters){if(h.state==="SLEEP")continue;const _=Math.abs(h.visualZ-e),y=Math.max(0,1-_);if(y<=0)continue;const x=h.x-h.visualX,E=h.y-h.visualY,b=Math.sqrt(x*x+E*E),A=Math.max(0,Math.min(1,1-b)),D=[];if(h.lastPos&&(h.lastPos.x!==h.x||h.lastPos.y!==h.y)&&h.lastPos.z===e){const M=.95-A*.47,T=.4-A*.2;D.push({pos:h.lastPos,sizeFactor:M,opacityFactor:T,age:1})}if(h.history&&h.history.length===2){const M=h.history[0];if(M.z===e){const T=.48*(1-A),I=.2*(1-A);T>.01&&D.push({pos:M,sizeFactor:T,opacityFactor:I,age:2})}}if(D.forEach(M=>{if(h.lowCanvas){const T=M.pos.x*a+a/2,I=M.pos.y*a+a/2,N=a*M.sizeFactor*y,X=h.jellyTime-M.age*.2,R=Math.sin(X)*6,U=Math.cos(X*.7)*4,B=1+Math.sin(X*1.2)*.06,V=1+Math.cos(X*.8)*.06,K=R*Math.PI/180,q=U*Math.PI/180;t.save(),t.globalAlpha=M.opacityFactor,t.translate(T,I),t.transform(B,Math.tan(q),Math.tan(K),V,0,0),t.imageSmoothingEnabled=!1,t.drawImage(h.lowCanvas,-N/2,-N/2,N,N),t.restore()}}),h.lowCanvas){const M=h.visualX*a+a/2,T=h.visualY*a+a/2,I=a*.95*y,N=h.jellyTime,X=Math.sin(N)*6,R=Math.cos(N*.7)*4,U=1+Math.sin(N*1.2)*.06,B=1+Math.cos(N*.8)*.06,V=X*Math.PI/180,K=R*Math.PI/180;t.save();const q=-a*.12*y,j=-a*.12*y;t.translate(M+q,T+j),t.transform(U,Math.tan(K),Math.tan(V),B,0,0),t.filter="brightness(0) blur(1px) opacity(0.35)",t.imageSmoothingEnabled=!1,t.drawImage(h.lowCanvas,-I/2,-I/2,I,I),t.restore(),t.save(),t.translate(M,T),t.transform(U,Math.tan(K),Math.tan(V),B,0,0),t.imageSmoothingEnabled=!1,t.drawImage(h.lowCanvas,-I/2,-I/2,I,I),t.restore()}}if(!this.deathAnimation||!this.deathAnimation.active){const h=`${this.playerVertical}_${this.playerSide}`,_=this.mageImages[h],y=o*a,x=r*a,E=J.PLAYER_SHADOW_OFFSET_X!==void 0?J.PLAYER_SHADOW_OFFSET_X:-.28,b=J.PLAYER_SHADOW_OFFSET_Y!==void 0?J.PLAYER_SHADOW_OFFSET_Y:-.28,A=y+a*E,D=x+a*b;t.save(),t.beginPath();const M=J.PLAYER_SHADOW_WIDTH_FACTOR!==void 0?J.PLAYER_SHADOW_WIDTH_FACTOR:.45,T=J.PLAYER_SHADOW_HEIGHT_FACTOR!==void 0?J.PLAYER_SHADOW_HEIGHT_FACTOR:.3,I=a*M,N=a*T;t.ellipse(A,D,I,N,0,0,Math.PI*2),t.fillStyle="rgba(0, 0, 0, 0.4)",t.fill(),t.restore();const X=Math.max(0,Math.floor((A-I)/a)),R=Math.min(i-1,Math.floor((A+I)/a)),U=Math.max(0,Math.floor((D-N)/a)),B=Math.min(i-1,Math.floor((D+N)/a));for(let V=X;V<=R;V++)for(let K=U;K<=B;K++)this.maze.get(V,K,e)===0&&(this.isNearVisited(V,K,e)||this.isAdjacentToStatue(V,K,e))&&(t.save(),this.wallImage.complete&&this.wallImage.naturalWidth!==0?t.drawImage(this.wallImage,V*a,K*a,a,a):(t.fillStyle=J.COLORS.WALL,t.fillRect(V*a,K*a,a,a)),t.restore());if(_&&_.complete){t.save();const V=a*.9,K=V,q=V*(_.height/_.width);t.translate(y,x),t.scale(this.playerSquashX||1,this.playerSquashY||1);const j=-q*.85;t.drawImage(_,-K/2,j,K,q),t.restore()}else t.save(),t.strokeStyle=J.COLORS.PLAYER_OUTLINE,t.lineWidth=1,t.strokeRect(p*a+2,v*a+2,a-4,a-4),t.restore(),t.fillStyle=J.COLORS.PLAYER,t.beginPath(),t.arc(y,x,a*.4,0,Math.PI*2),t.fill(),t.strokeStyle=J.COLORS.PLAYER,t.lineWidth=2,t.beginPath(),t.moveTo(y,x),t.lineTo(y+Math.cos(this.player.dir)*a*1,x+Math.sin(this.player.dir)*a*1),t.stroke();if(J.SHOW_COLLISION_DEBUG){t.save(),t.strokeStyle="#ff0000",t.lineWidth=1.5;const V=J.PLAYER_COLLISION_RADIUS*2*a,K=(J.PLAYER_COLLISION_OFFSET_X||0)*a,q=(J.PLAYER_COLLISION_OFFSET_Y||0)*a;t.strokeRect(y+K-V/2,x+q-V/2,V,V),t.restore()}}if(this.activeNotification){const h=this.activeNotification;t.save(),t.font=`bold ${a*.22}px monospace`;const _=t.measureText(h.text).width,y=a*.4,x=_+y,E=a*.48,b=o*a,A=r*a-a*1.5;let D=x;h.state==="OPENING"?D=x*h.widthProgress:h.state==="CLOSING"&&(D=x*h.closeProgress);const M=this.mazeGen.size*a,T=this.mazeGen.size*a;let I=b;I-D/2<0?I=D/2:I+D/2>M&&(I=M-D/2);let N=A;N-E/2<0?N=E/2:N+E/2>T&&(N=T-E/2),t.fillStyle="#000000",t.fillRect(I-D/2,N-E/2,D,E),t.strokeStyle="#00ffff",t.lineWidth=Math.max(1.5,a*.04),t.strokeRect(I-D/2,N-E/2,D,E),(h.state==="TYPING"||h.state==="WAITING")&&(t.fillStyle="#ffffff",t.textAlign="center",t.textBaseline="middle",t.fillText(h.displayText,I,N)),t.restore()}if(c&&t.restore(),this.isZoomTransitionActive){const y=1-Math.min(1,(2-this.zoomTransitionTimer)/2);t.save(),t.fillStyle=`rgba(0, 0, 0, ${y})`,t.fillRect(0,0,t.canvas.width,t.canvas.height),t.restore()}if(this.deathAnimation&&this.deathAnimation.active){const h=this.deathAnimation.hunter;let _,y;if(n){const x=11/this.zoomVisibleCells,E=this.zoomVisibleCells/2;let b=o,A=r;b<E&&(b=E),b>i-E&&(b=i-E),A<E&&(A=E),A>i-E&&(A=i-E);const D=t.canvas.width/2,M=t.canvas.height/2;_=D+(h.visualX+.5-b)*a*x,y=M+(h.visualY+.5-A)*a*x}else _=(h.visualX+.5)*a,y=(h.visualY+.5)*a;if(this.deathAnimation.screenFilled){t.fillStyle="rgba(10, 0, 15, 1.0)",t.fillRect(0,0,t.canvas.width,t.canvas.height),t.fillStyle="rgba(138, 3, 196, 0.08)";for(let b=0;b<t.canvas.height;b+=6)Math.random()<.6&&t.fillRect(0,b+Math.sin(Date.now()*.01+b)*2,t.canvas.width,2);const x=Math.floor(Math.random()*5)+3,E=["#00ff66","#ff0055","#00ccff","#ffff00","#8a03c4","#ffffff"];for(let b=0;b<x;b++){const A=Math.random()*t.canvas.width,D=Math.random()*t.canvas.height,M=80+Math.random()*250,T=8+Math.random()*30;t.fillStyle=E[Math.floor(Math.random()*E.length)],t.globalAlpha=.12+Math.random()*.18,t.fillRect(A,D,M,T)}if(t.globalAlpha=1,Math.random()<.35){const b=Math.floor(Math.random()*t.canvas.height),A=15+Math.floor(Math.random()*80),D=Math.floor(Math.random()*40)-20;t.drawImage(t.canvas,0,b,t.canvas.width,A,D,b,t.canvas.width,A)}Math.random()<.15&&(t.fillStyle="rgba(255, 255, 255, 0.05)",t.fillRect(0,Math.random()*t.canvas.height,t.canvas.width,5+Math.random()*20))}else{const x=Math.hypot(t.canvas.width,t.canvas.height)*1.1,E=this.deathAnimation.elapsed/this.deathAnimation.duration,A=E*E*(3-2*E)*x;t.save(),t.beginPath(),t.arc(_,y,A,0,Math.PI*2),t.clip(),t.fillStyle="rgba(15, 0, 25, 0.96)",t.fillRect(0,0,t.canvas.width,t.canvas.height);const D=45,M=n?11/this.zoomVisibleCells:1;for(let T=0;T<D;T++){const I=Math.random()*Math.PI*2,N=Math.pow(Math.random(),.7)*A,X=_+Math.cos(I)*N,R=y+Math.sin(I)*N,U=(15+Math.random()*70)*M,B=(3+Math.random()*12)*M,V=80+Math.floor(Math.random()*50),K=Math.floor(Math.random()*25),q=130+Math.floor(Math.random()*70);t.fillStyle=Math.random()<.12?"#00ff66":Math.random()<.12?"#00ccff":Math.random()<.08?"#ffffff":`rgb(${V},${K},${q})`,t.fillRect(X-U/2,R-B/2,U,B)}if(Math.random()<.3){t.fillStyle=Math.random()<.7?"#ffffff":"#b3ffff";const T=_+(Math.random()-.5)*A*.8,I=y+(Math.random()-.5)*A*.8,N=(2+Math.random()*5)*M,X=(10+Math.random()*30)*M;t.fillRect(T-N/2,I-X/2,N,X)}t.restore()}}}updateStaticMapCache(t){const e=this.mazeGen.size,i=e>11,n=i?this.canvas.width/11:this.canvas.width/e,a=i?e*n:this.canvas.width,o=i?e*n:this.canvas.height;(this.staticMapCacheCanvas.width!==a||this.staticMapCacheCanvas.height!==o)&&(this.staticMapCacheCanvas.width=a,this.staticMapCacheCanvas.height=o);const r=this.staticMapCacheCtx;r.clearRect(0,0,a,o);const c=this.player.x,l=this.player.y,d=Math.floor(this.mazeGen.startPos.x),f=Math.floor(this.mazeGen.startPos.y),p=this.mazeGen.startPos.z,v=Date.now();let m=!1;const g=(u,h,_)=>{const y=`${u},${h},${t}`;if(this.skipCellAnimations||this.fullyRevealedCells.has(y))_(),this.skipCellAnimations&&this.fullyRevealedCells.add(y);else{let x=this.revealedCellsAnimation.get(y);x===void 0&&(this.revealedCellsAnimation.set(y,v),x=v);const E=v-x,A=Math.min(1,E/400);A<1?(r.save(),r.globalAlpha=A,_(),r.restore(),m=!0):(_(),this.revealedCellsAnimation.delete(y),this.fullyRevealedCells.add(y))}};for(let u=0;u<e;u++)for(let h=0;h<e;h++){const _=this.maze.get(u,h,t);if(_===this.mazeGen.TYPES.STATUE){g(u,h,()=>{if(this.floorImage.complete&&this.floorImage.naturalWidth!==0?r.drawImage(this.floorImage,u*n,h*n,n,n):(r.fillStyle=J.COLORS.PATH_VISITED,r.fillRect(u*n,h*n,n,n)),r.fillStyle="rgba(0, 0, 0, 0.4)",r.beginPath(),r.ellipse(u*n+n/2,(h+1)*n-n*.15,n*.35,n*.12,0,0,Math.PI*2),r.fill(),this.statueImage.complete&&this.statueImage.naturalWidth!==0){const N=this.statueImage.width/this.statueImage.height,X=n*.85,R=X/N,U=u*n+n/2,B=(h+1)*n-n*.05;r.drawImage(this.statueImage,U-X/2,B-R,X,R)}else r.fillStyle="#555555",r.fillRect(u*n+n*.3,h*n+n*.1,n*.4,n*.8)});continue}const y=_===this.mazeGen.TYPES.TELEPORT,x=y&&this.discoveredTeleports.has(`${u},${h},${t}`),E=_===2||_===3||_===4||_===5||x,b=_===this.mazeGen.TYPES.KEY,A=(_===1||y&&!x)&&this.isNearVisited(u,h,t),D=this.revealedPathSet.has(`${u},${h},${t}`),M=t<e-1&&this.maze.get(u,h,t+1)!==0,T=t>0&&this.maze.get(u,h,t-1)!==0,I=M||T;D?g(u,h,()=>{I?this.drawElevator2D(r,u,h,n,M,T,c,l,!0,t):(r.fillStyle=J.COLORS.REVEALED_PATH,r.fillRect(u*n,h*n,n,n))}):E?g(u,h,()=>{if(x){if(u===d&&h===f&&t===p)r.fillStyle=J.COLORS.START;else{const X=this.inactiveTeleportPos&&this.inactiveTeleportPos.x===u&&this.inactiveTeleportPos.y===h&&this.inactiveTeleportPos.z===t;r.fillStyle=X?J.COLORS.TELEPORT_INACTIVE:J.COLORS.TELEPORT}r.fillRect(u*n,h*n,n,n)}else if(I)this.drawElevator2D(r,u,h,n,M,T,c,l,!1,t);else if(_===2&&this.floorImage.complete&&this.floorImage.naturalWidth!==0)r.drawImage(this.floorImage,u*n,h*n,n,n);else if(_===this.mazeGen.TYPES.EXIT){if(r.fillStyle=J.COLORS.EXIT,r.fillRect(u*n,h*n,n,n),this.keysCollected<this.totalKeys){r.strokeStyle="#ff3300",r.lineWidth=Math.max(2,n*.08);const N=u*n+n/2,X=h*n+n/2,R=n*.2;r.beginPath(),r.arc(N,X-R*.2,R*.6,Math.PI,0),r.stroke(),r.fillStyle="#111",r.fillRect(N-R,X-R*.1,R*2,R*1.5),r.strokeRect(N-R,X-R*.1,R*2,R*1.5),r.fillStyle="#ff3300",r.font=`bold ${Math.max(10,n*.35)}px sans-serif`,r.textAlign="center",r.textBaseline="middle",r.fillText(this.totalKeys-this.keysCollected,N,X+R*.6)}}else r.fillStyle=_===2?J.COLORS.PATH_VISITED:J.COLORS.START,r.fillRect(u*n,h*n,n,n);this.drawCellShadow2D(r,u,h,n,e,_,t)}):b?(g(u,h,()=>{const N=n*.05*Math.sin(Date.now()/300);this.keyImage.complete&&this.keyImage.naturalWidth!==0?r.drawImage(this.keyImage,u*n+n*.15,h*n+n*.15+N,n*.7,n*.7):(r.beginPath(),r.arc(u*n+n/2,h*n+n/2+N,n*.25,0,2*Math.PI),r.fillStyle="#ffd700",r.fill()),this.drawCellShadow2D(r,u,h,n,e,_,t)}),m=!0):A?(g(u,h,()=>{if(this.floorImage.complete&&this.floorImage.naturalWidth!==0){r.save(),r.globalAlpha=.35,r.drawImage(this.floorImage,u*n,h*n,n,n),r.restore();const N=.22+.12*Math.sin(Date.now()/250);r.fillStyle=`rgba(136, 204, 255, ${N})`,r.fillRect(u*n,h*n,n,n)}else r.fillStyle=J.COLORS.PATH_KNOWN,r.fillRect(u*n,h*n,n,n)}),m=!0):_===0&&(this.isNearVisited(u,h,t)||this.isAdjacentToStatue(u,h,t))&&g(u,h,()=>{this.wallImage.complete&&this.wallImage.naturalWidth!==0?r.drawImage(this.wallImage,u*n,h*n,n,n):(r.fillStyle=J.COLORS.WALL,r.fillRect(u*n,h*n,n,n))})}m?this.staticMapCacheDirty=!0:this.staticMapCacheDirty=!1}isNearVisited(t,e,i){for(let n=-1;n<=1;n++)for(let a=-1;a<=1;a++){const o=t+n,r=e+a;if(o>=0&&o<this.mazeGen.size&&r>=0&&r<this.mazeGen.size){const c=this.maze.get(o,r,i);if(c===2||c===3||c===this.mazeGen.TYPES.TELEPORT&&this.discoveredTeleports.has(`${o},${r},${i}`))return!0}}return!1}isAdjacentToStatue(t,e,i){const n=this.mazeGen.size,a=[{dx:1,dy:0},{dx:-1,dy:0},{dx:0,dy:1},{dx:0,dy:-1},{dx:1,dy:1},{dx:-1,dy:1},{dx:1,dy:-1},{dx:-1,dy:-1}];for(const o of a){const r=t+o.dx,c=e+o.dy;if(r>=0&&r<n&&c>=0&&c<n&&this.maze.get(r,c,i)===this.mazeGen.TYPES.STATUE)return!0}return!1}populateFullyRevealedCells(t){const e=this.mazeGen.size;for(let i=0;i<e;i++)for(let n=0;n<e;n++){const a=this.maze.get(i,n,t),o=a===this.mazeGen.TYPES.TELEPORT,r=o&&this.discoveredTeleports.has(`${i},${n},${t}`),c=a===2||a===3||a===4||a===5||r,l=(a===1||o&&!r)&&this.isNearVisited(i,n,t),d=this.revealedPathSet.has(`${i},${n},${t}`);(c||l||d||a===0&&this.isNearVisited(i,n,t))&&this.fullyRevealedCells.add(`${i},${n},${t}`)}}updatePulse(){if(!this.isMap3DActive||this.pulsatingMaterials.length===0)return;const t=.2+.5*Math.abs(Math.sin(Date.now()*.003));this.pulsatingMaterials.forEach(e=>{e.emissiveIntensity=t})}loop(){if(this.isDestroyed)return;const t=performance.now(),e=(t-this.lastFrameTime)/1e3;this.lastFrameTime=t;const i=Math.min(e,.1);if(this.isIntroPlaying?this.controls.update():this.update(i),this.isMap3DActive||this.isIntroPlaying)if(this.isIntroPlaying)this.renderer.render(this.scene,this.camera);else{const n=1-Math.exp(-10*i);this.visualActiveFloor+=(this.activeMapFloor-this.visualActiveFloor)*n,Math.abs(this.activeMapFloor-this.visualActiveFloor)<.001&&(this.visualActiveFloor=this.activeMapFloor),this.drawIsometricMap()}else this.draw2DMap(i);requestAnimationFrame(()=>this.loop())}playContinueAnimation(){this.isIntroPlaying=!0;const t=this.mazeGen.size;this.renderer&&this.renderer.domElement&&(this.renderer.domElement.style.display="block");const e=document.getElementById("map3d-instructions");e&&(e.style.display="block"),this.isometricCanvas&&(this.isometricCanvas.style.display="none"),this.ui.setMap3DVisible(!0),this.isMap3DActive=!0,this.updateRendererSize(),this.build3DMap(!1),this.camera.position.set(t*.9,t*this.vScale*.6,t*.9),this.controls.target.set(0,0,0),this.controls.update(),this.hideCanvasInstant(),this.controls.autoRotate=!0,this.controls.autoRotateSpeed=2,this.controls.enableZoom=!1,this.controls.enablePan=!1,this.controls.enableRotate=!1;const i=()=>{this.activeContinueTimer&&(clearTimeout(this.activeContinueTimer),this.activeContinueTimer=null),this.activeSkipHandler&&(window.removeEventListener("keydown",this.activeSkipHandler),window.removeEventListener("touchstart",this.activeSkipHandler),this.activeSkipHandler=null),this.controls.autoRotate=!1,this.animateCameraToPlayer(()=>{this._transitionToGame()})};this.activeSkipHandler=()=>i(),window.addEventListener("keydown",this.activeSkipHandler,{once:!0}),window.addEventListener("touchstart",this.activeSkipHandler,{once:!0}),this.activeContinueTimer=setTimeout(i,2500)}animateCameraToPlayer(t){const e=this.mazeGen.size,i=this.player.x-e/2,n=(this.player.z-e/2)*this.vScale,a=this.player.y-e/2,o=this.controls.target.clone(),r=new H(i,n,a),c=this.camera.position.clone(),l=new H(i+4,n+5,a+4),d=1100,f=performance.now(),p=v=>{if(this.isDestroyed)return;const m=v-f,g=Math.min(m/d,1),u=g<.5?4*g*g*g:1-Math.pow(-2*g+2,3)/2;this.controls.target.lerpVectors(o,r,u),this.camera.position.lerpVectors(c,l,u),this.controls.update(),g<1?requestAnimationFrame(p):t()};requestAnimationFrame(p)}playIntroAnimation(){this.isIntroPlaying=!0;const t=this.mazeGen.size;this.renderer&&this.renderer.domElement&&(this.renderer.domElement.style.display="block");const e=document.getElementById("map3d-instructions");for(e&&(e.style.display="block"),this.isometricCanvas&&(this.isometricCanvas.style.display="none");this.scene.children.length>0;)this.scene.remove(this.scene.children[0]);this.scene.add(new ho(16777215,.7));const i=new co(16777215,.5);i.position.set(10,20,10),this.scene.add(i),this.ui.setMap3DVisible(!0),this.isMap3DActive=!0,this.updateRendererSize(),this.camera.position.set(t*.9,t*this.vScale*.6,t*.9),this.controls.target.set(0,0,0),this.controls.update(),this.hideCanvasInstant();const n=this.mazeGen.startPos,a=this.getExitPos(),o=new we(.92,.92,.92),r=new ne({color:J.COLORS.THREE_START,emissive:J.COLORS.THREE_START,emissiveIntensity:.6,transparent:!0,opacity:.95}),c=new te(o,r);c.position.set(Math.floor(n.x)-t/2,(n.z-t/2)*this.vScale,Math.floor(n.y)-t/2),this.scene.add(c);const l=new ne({color:16724736,emissive:16724736,emissiveIntensity:.6,transparent:!0,opacity:.95}),d=new te(o,l);d.position.set(a.x-t/2,(a.z-t/2)*this.vScale,a.y-t/2);const f=new we(.95,.95,.95),p=new ds({color:16711680,wireframe:!0}),v=new te(f,p);d.add(v),this.scene.add(d);const m=[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]],g=`${Math.floor(n.x)},${Math.floor(n.y)},${n.z}`,u=`${a.x},${a.y},${a.z}`,h=new Set([g,u]),_=[{x:Math.floor(n.x),y:Math.floor(n.y),z:n.z}],y=[{x:a.x,y:a.y,z:a.z}];let x=0,E=0;const b=[];for(;x<_.length||E<y.length;)for(const[V,K,q]of[[_,()=>x,j=>x=j],[y,()=>E,j=>E=j]]){const j=K();if(j>=V.length)continue;q(j+1);const{x:it,y:nt,z:Z}=V[j];for(const[C,G,$]of m){const z=it+C,Y=nt+G,st=Z+$,ut=`${z},${Y},${st}`;z>=0&&z<t&&Y>=0&&Y<t&&st>=0&&st<t&&!h.has(ut)&&this.maze.get(z,Y,st)!==this.mazeGen.TYPES.WALL&&(h.add(ut),V.push({x:z,y:Y,z:st}),b.push({x:z,y:Y,z:st}))}}this.controls.autoRotate=!0,this.controls.autoRotateSpeed=1.8,this.controls.enableZoom=!1,this.controls.enablePan=!1,this.controls.enableRotate=!1;const A=new we(.88,.88,.88),D=new ne({color:J.COLORS.THREE_VISITED,transparent:!0,opacity:.72}),M=20,T=200,I=b.length,N=Math.max(1,Math.ceil(I/T));let X=0;this.activeIntroTimer=null;const R=[],U=()=>{this.activeIntroTimer&&(clearTimeout(this.activeIntroTimer),this.activeIntroTimer=null),this.activeSkipHandler&&(window.removeEventListener("keydown",this.activeSkipHandler),window.removeEventListener("touchstart",this.activeSkipHandler),this.activeSkipHandler=null),this._playGlitchAndTransition(R)};this.activeSkipHandler=()=>U(),window.addEventListener("keydown",this.activeSkipHandler,{once:!0}),window.addEventListener("touchstart",this.activeSkipHandler,{once:!0});const B=()=>{if(this.isDestroyed)return;const V=Math.min(X+N,b.length);for(;X<V;X++){const{x:K,y:q,z:j}=b[X],it=j%2===0;let nt;it?nt=new us(.35,.35,2*this.vScale,8):nt=A;const Z=new te(nt,D);Z.position.set(K-t/2,(j-t/2)*this.vScale,q-t/2),this.scene.add(Z),R.push(Z)}X<b.length?this.activeIntroTimer=setTimeout(B,M):(this.activeSkipHandler&&(window.removeEventListener("keydown",this.activeSkipHandler),window.removeEventListener("touchstart",this.activeSkipHandler),this.activeSkipHandler=null),this._playGlitchAndTransition(R))};this.activeIntroTimer=setTimeout(B,M)}_playGlitchAndTransition(t){if(this.isDestroyed)return;const e=5,i=90;let n=0;const a=()=>{if(this.isDestroyed)return;const o=n%2===0;t.forEach(r=>{r&&(r.visible=o)}),n++,n<e*2?setTimeout(a,i):(t.forEach(r=>{r&&(r.visible=!1)}),setTimeout(()=>this._transitionToGame(),400))};a()}_transitionToGame(){this.isDestroyed||(this.controls.autoRotate=!1,this.controls.enableZoom=!0,this.controls.enablePan=!0,this.controls.enableRotate=!0,this.ui.uiMap3dContainer.classList.add("intro-fade-out"),setTimeout(()=>{if(this.isDestroyed)return;this.ui.setMap3DVisible(!1),this.ui.uiMap3dContainer.classList.remove("intro-fade-out"),this.isMap3DActive=!1,this.isIntroPlaying=!1,this.ui.uiMobileMap&&(this.ui.uiMobileMap.disabled=!1);const t=document.getElementById("map-area-container"),e=document.getElementById("left-hud-panel"),i=document.getElementById("right-hud-panel"),n=document.getElementById("bottom-hud-container");t&&(t.classList.remove("intro-hidden"),t.classList.add("intro-reveal"),setTimeout(()=>t.classList.remove("intro-reveal"),700)),e&&(e.classList.remove("intro-hidden"),e.classList.add("intro-reveal"),setTimeout(()=>e.classList.remove("intro-reveal"),700)),i&&(i.classList.remove("intro-hidden"),i.classList.add("intro-reveal"),setTimeout(()=>i.classList.remove("intro-reveal"),700)),n&&(n.classList.remove("intro-hidden"),n.classList.add("intro-reveal"),setTimeout(()=>n.classList.remove("intro-reveal"),700)),this.isZoomTransitionActive=!0,this.zoomTransitionTimer=2,this.isResumedFromSave||this.ui.showInfoBanner(Ot("msgWhereAmI"))},600))}startStorytelling(){this.isStoryActive=!0,this.storyMsgIndex=0,this.storyState="OPENING",this.storyWidthProgress=0,this.storyCloseProgress=1,this.storyCharIndex=0,this.storyTypeTimer=0;const t=document.getElementById("story-screen");t&&t.classList.remove("hidden");const e=document.getElementById("story-image-loader"),i=document.getElementById("story-dialogue");this.isPreloadingActive=!1;const n=()=>{this.isPreloadingActive=!1,i&&(i.style.transform="scaleX(0)"),this.updateStoryImage(),this.handleStoryKeyDown=o=>{o.key.toLowerCase()==="escape"?this.skipStory():this.isPreloadingActive||this.triggerAdvanceStory(),o.preventDefault()},window.addEventListener("keydown",this.handleStoryKeyDown),this.handleStoryClick=o=>{o.target.closest("#story-skip-btn")||this.isPreloadingActive||this.triggerAdvanceStory()},this.handleStoryTouch=o=>{o.target.closest("#story-skip-btn")||(this.isPreloadingActive||this.triggerAdvanceStory(),o.preventDefault())},t&&(t.addEventListener("click",this.handleStoryClick),t.addEventListener("touchstart",this.handleStoryTouch,{passive:!1}))},a=document.getElementById("story-skip-btn");if(a&&(a.onclick=o=>{o.stopPropagation(),this.skipStory()}),e&&i&&(i.style.transform="scaleX(0)",this.storyImagesLoadedCount<this.storyImagesTotalCount)){this.isPreloadingActive=!0,e.classList.remove("hidden"),this.storyImagesPreloadPromise.then(()=>{e.classList.add("hidden"),n()});return}n()}endStorytelling(){this.isStoryActive=!1,this.isPreloadingActive=!1;const t=document.getElementById("story-screen");t&&t.classList.add("hidden"),this.handleStoryKeyDown&&(window.removeEventListener("keydown",this.handleStoryKeyDown),this.handleStoryKeyDown=null),this.handleStoryClick&&t&&(t.removeEventListener("click",this.handleStoryClick),this.handleStoryClick=null),this.handleStoryTouch&&t&&(t.removeEventListener("touchstart",this.handleStoryTouch),this.handleStoryTouch=null),this.ui.uiMobileMap&&(this.ui.uiMobileMap.disabled=!1);const e=document.getElementById("map-area-container"),i=document.getElementById("left-hud-panel"),n=document.getElementById("right-hud-panel"),a=document.getElementById("bottom-hud-container");e&&(e.classList.remove("hidden","intro-hidden"),e.classList.add("intro-reveal"),setTimeout(()=>e.classList.remove("intro-reveal"),700)),i&&(i.classList.remove("hidden","intro-hidden"),i.classList.add("intro-reveal"),setTimeout(()=>i.classList.remove("intro-reveal"),700)),n&&(n.classList.remove("hidden","intro-hidden"),n.classList.add("intro-reveal"),setTimeout(()=>n.classList.remove("intro-reveal"),700)),a&&(a.classList.remove("hidden","intro-hidden"),a.classList.add("intro-reveal"),setTimeout(()=>a.classList.remove("intro-reveal"),700)),this.ui.setMap3DVisible(!1),this.isMap3DActive=!1,this.isIntroPlaying=!1,this.staticMapCacheDirty=!0,this.isZoomTransitionActive=!0,this.zoomTransitionTimer=2,this.isResumedFromSave||this.ui.showInfoBanner(Ot("msgWhereAmI"))}updateStoryImage(){const t=document.getElementById("story-img"),e=document.getElementById("story-image-canvas");if(!(!t||!e))if(e.style.background="#0b0b0b",this.storyMsgIndex===5)t.style.display="none",e.style.background="radial-gradient(circle, #222222 0%, #000000 80%)",e.removeAttribute("data-placeholder");else{const i=this.preloadedStoryImages[this.storyMsgIndex];if(i)t.src=i.src,t.style.display="block",e.removeAttribute("data-placeholder");else{let n="";this.storyMsgIndex===0?n="assets/images/presentation/1-mystical-church-of-chaos.jpg":this.storyMsgIndex===1?n="assets/images/presentation/2-mystical-church-of-chaos.jpg":this.storyMsgIndex===2?n="assets/images/presentation/3-the-jelly-god.jpg":this.storyMsgIndex===3?n="assets/images/presentation/4-player-alone.jpg":this.storyMsgIndex===4&&(n="assets/images/presentation/5-player-thrown.jpg"),t.src=n,t.onerror=()=>{t.style.display="none",e.setAttribute("data-placeholder",`[Image ${this.storyMsgIndex+1}]`)},t.onload=()=>{t.style.display="block",e.removeAttribute("data-placeholder")}}}}updateStory(t){if(!this.isStoryActive||this.isPreloadingActive)return;const e=document.getElementById("story-text"),i=document.getElementById("story-dialogue"),n=document.getElementById("story-arrow");if(!i||!e)return;const a=["storyMsg1","storyMsg2","storyMsg3","storyMsg4","storyMsg5","storyMsg6"];if(this.storyMsgIndex>=a.length){this.endStorytelling();return}const o=Ot(a[this.storyMsgIndex]),r=c=>c<.5?4*c*c*c:1-Math.pow(-2*c+2,3)/2;this.storyState==="OPENING"?(e.textContent="",n&&n.classList.add("hidden"),this.storyWidthProgress+=t/.45,this.storyWidthProgress>=1&&(this.storyWidthProgress=1,this.storyState="TYPING",this.storyCharIndex=0,this.storyTypeTimer=0),i.style.transform=`scaleX(${r(this.storyWidthProgress)})`):this.storyState==="TYPING"?(i.style.transform="scaleX(1)",n&&n.classList.add("hidden"),this.storyTypeTimer+=t,this.storyTypeTimer>=.025&&(this.storyTypeTimer=0,this.storyCharIndex++,e.textContent=o.substring(0,this.storyCharIndex),this.storyCharIndex>=o.length&&(this.storyState="WAITING"))):this.storyState==="WAITING"?(i.style.transform="scaleX(1)",e.textContent=o,n&&n.classList.remove("hidden")):this.storyState==="CLOSING"&&(e.textContent="",n&&n.classList.add("hidden"),this.storyCloseProgress-=t/.45,this.storyCloseProgress<=0&&(this.storyCloseProgress=0,this.endStorytelling()),i.style.transform=`scaleX(${r(this.storyCloseProgress)})`)}triggerAdvanceStory(){const t=["storyMsg1","storyMsg2","storyMsg3","storyMsg4","storyMsg5","storyMsg6"];if(this.storyMsgIndex>=t.length)return;const e=Ot(t[this.storyMsgIndex]);if(this.storyState==="CLOSING"){this.skipStory();return}if(this.storyState==="OPENING")this.storyState="TYPING",this.storyWidthProgress=1,this.storyCharIndex=0,this.storyTypeTimer=0;else if(this.storyState==="TYPING"){this.storyState="WAITING",this.storyCharIndex=e.length;const i=document.getElementById("story-text");i&&(i.textContent=e)}else if(this.storyState==="WAITING")if(this.storyMsgIndex+1<t.length){this.storyMsgIndex++,this.storyState="TYPING",this.storyCharIndex=0,this.storyTypeTimer=0,this.updateStoryImage();const i=document.getElementById("story-text");i&&(i.textContent="")}else this.storyState="CLOSING",this.storyCloseProgress=1}skipStory(){this.endStorytelling()}toggleTeleportMap(t){this.isMap3DActive=t,this.isTeleportMode=t;const e=document.getElementById("mobile-teleport-exit-btn");if(t){e&&e.classList.remove("hidden"),this.ui.uiMobileControls&&this.ui.uiMobileControls.classList.add("hidden"),this.ui.setMap3DVisible(!0),this.activeMapFloor=this.player.z,this.visualActiveFloor=this.player.z,this.mapCursor={x:Math.floor(this.player.x),y:Math.floor(this.player.y),z:this.player.z},this.mapZoom=1,this.mapPanOffsetX=0,this.mapPanOffsetY=0;const i=Math.floor(this.player.x),n=Math.floor(this.player.y),a=this.player.z,o=this.allTeleports.findIndex(c=>c.x===i&&c.y===n&&c.z===a);o!==-1&&(this.selectedTeleportIndex=o),this.renderer&&this.renderer.domElement&&(this.renderer.domElement.style.display="none");const r=document.getElementById("map3d-instructions");r&&(r.style.display="none"),this.isometricCanvas?this.isometricCanvas.style.display="block":this.initIsometricCanvas(),this.teleportConfirmModalActive=!1}else e&&e.classList.add("hidden"),this.ui.uiMobileControls&&this.ui.uiMobileControls.classList.remove("hidden"),this.ui.setMap3DVisible(!1),this.isometricCanvas&&(this.isometricCanvas.style.display="none"),this.teleportConfirmModalActive=!1}onCanvasClick(t){if(!this.isMap3DActive)return;const e=this.renderer.domElement.getBoundingClientRect();if(this.pointer.x=(t.clientX-e.left)/e.width*2-1,this.pointer.y=-((t.clientY-e.top)/e.height)*2+1,this.raycaster.setFromCamera(this.pointer,this.camera),this.isTeleportMode){const i=this.raycaster.intersectObjects(this.teleportMeshes);if(i.length>0){const n=i[0].object,{gridX:a,gridY:o,gridZ:r}=n.userData,c=this.inactiveTeleportPos&&this.inactiveTeleportPos.x===a&&this.inactiveTeleportPos.y===o&&this.inactiveTeleportPos.z===r,l=Math.floor(this.player.x),d=Math.floor(this.player.y),f=this.player.z;a===l&&o===d&&r===f?this.toggleTeleportMap(!1):c||this.teleportTo(a,o,r)}}else{const i=this.raycaster.intersectObjects(this.knownMeshes);if(i.length>0){const n=i[0].object,{gridX:a,gridY:o,gridZ:r}=n.userData;this.triggerPathReveal(a,o,r)}}}toggleZoom(){if(this.mazeGen.size<=11)return;this.isZoomActive=!this.isZoomActive,this.staticMapCacheDirty=!0;const t=document.getElementById("zoom-out-icon"),e=document.getElementById("zoom-in-icon");t&&e&&(this.isZoomActive?(t.classList.remove("hidden"),e.classList.add("hidden")):(t.classList.add("hidden"),e.classList.remove("hidden")))}togglePause(){this.isGameOver||this.isDestroyed||this.isIntroPlaying||(this.isPaused=!this.isPaused,this.isPaused?(this.ui.showPause(),this.ui.uiMobilePauseBtn&&this.ui.uiMobilePauseBtn.classList.add("hidden")):(this.ui.hidePause(),this.ui.uiMobilePauseBtn&&!this.ui.uiMobileControls.classList.contains("hidden")&&this.ui.uiMobilePauseBtn.classList.remove("hidden")))}checkExitNeighborVisited(){const t=this.getExitPos(),e=[{dx:1,dy:0,dz:0},{dx:-1,dy:0,dz:0},{dx:0,dy:1,dz:0},{dx:0,dy:-1,dz:0},{dx:0,dy:0,dz:2},{dx:0,dy:0,dz:-2}];for(const i of e){const n=t.x+i.dx,a=t.y+i.dy,o=t.z+i.dz;if(n>=0&&n<this.mazeGen.size&&a>=0&&a<this.mazeGen.size&&o>=0&&o<this.mazeGen.size){const r=this.maze.get(n,a,o);if(r!==this.mazeGen.TYPES.WALL&&(r===this.mazeGen.TYPES.VISITED||r===this.mazeGen.TYPES.START||r===this.mazeGen.TYPES.ELEVATOR_VISITED))return!0}}return!1}findShortestPath(t,e,i=!1){const n=this.mazeGen.size,a=new Int8Array(n*n*n);for(let o=0;o<n;o++)for(let r=0;r<n;r++)for(let c=0;c<n;c++){const l=o*n*n+r*n+c,d=this.maze.get(o,r,c),f=o===t.x&&r===t.y&&c===t.z,p=o===e.x&&r===e.y&&c===e.z,v=o===e.x&&r===e.y&&(c===e.z-1||c===e.z+1)&&c%2===0;if(d===this.mazeGen.TYPES.WALL){a[l]=0;continue}const g=d===this.mazeGen.TYPES.TELEPORT,u=g&&this.discoveredTeleports.has(`${o},${r},${c}`),h=d===this.mazeGen.TYPES.VISITED||d===this.mazeGen.TYPES.START||d===this.mazeGen.TYPES.ELEVATOR_VISITED||u,_=(d===this.mazeGen.TYPES.PATH||g&&!u)&&this.isNearVisited(o,r,c);let y=!1;i?y=h||f||p||v:y=h||_||f||p||v,a[l]=y?1:0}return il(t,e,a,n,0)??[]}triggerPathReveal(t,e,i){if(this.pathRevealInterval||this.pathfinderBlockedUntil&&Date.now()<this.pathfinderBlockedUntil)return;if(this.pathfindersRemaining<=0){this.ui.showInfoBanner(Ot("msgNoPathfindersRemaining"));return}this.pathRevealInterval&&(clearInterval(this.pathRevealInterval),this.pathRevealInterval=null),this.revealedPathSet.clear();const n=this.maze.get(t,e,i)===this.mazeGen.TYPES.EXIT;if(n&&!this.exitPathfinderUnlocked){this.ui.showInfoBanner(Ot("msgExitNotFoundYet"));return}let a=i;i%2===0&&(a=this.player.z<i?i+1:i-1,a<1&&(a=1),a>=this.mazeGen.size&&(a=this.mazeGen.size-2));const o={x:Math.floor(this.player.x),y:Math.floor(this.player.y),z:this.player.z},r={x:t,y:e,z:a},c=this.findShortestPath(o,r,n);!c||c.length===0||(this.pathfindersRemaining--,this.ui.updatePathfindersHUD(this.pathfindersRemaining,this.totalPathfinders),ia(this),this.activePathReveal=c,this.revealedPathProgress=0,this.revealedPathSet.add(`${t},${e},${i}`),this.pathRevealInterval=setInterval(()=>{if(this.revealedPathProgress<this.activePathReveal.length){const l=this.activePathReveal[this.revealedPathProgress],d=`${l.x},${l.y},${l.z}`;if(this.revealedPathSet.add(d),this.revealedPathProgress>0){const f=this.activePathReveal[this.revealedPathProgress-1];if(Math.abs(l.z-f.z)===2){const p=(l.z+f.z)/2,v=`${l.x},${l.y},${p}`;if(this.revealedPathSet.add(v),this.isMap3DActive&&this.gridMeshes){const m=this.mazeGen.size,g=this.gridMeshes[l.x*m*m+l.y*m+p];g&&(g.material=new ne({color:16777215,emissive:16777215,emissiveIntensity:2,transparent:!0,opacity:.95*(this.isTeleportMode?.2:1)}))}}}if(this.staticMapCacheDirty=!0,this.isMap3DActive&&this.gridMeshes){const f=this.mazeGen.size,p=this.gridMeshes[l.x*f*f+l.y*f+l.z];p&&(p.material=new ne({color:16777215,emissive:16777215,emissiveIntensity:2,transparent:!0,opacity:.95*(this.isTeleportMode?.2:1)}))}this.revealedPathProgress++}else clearInterval(this.pathRevealInterval),this.pathRevealInterval=null,this.pathfinderBlockedUntil=Date.now()+600},120))}teleportTo(t,e,i){if(this.skipCellAnimations=!0,this.player.x=t+J.PLAYER_START_X,this.player.y=e+J.PLAYER_START_Y%1,this.player.z=i,this.staticMapCacheDirty=!0,this.toggleTeleportMap(!1),this.maze.get(t,e,i)===this.mazeGen.TYPES.PATH&&this.maze.set(t,e,i,this.mazeGen.TYPES.VISITED),!this.isSafeMode){const n=Math.floor(this.degree*1.5)+3;this.teleportCooldownTicks=n,this.inactiveTeleportPos={x:t,y:e,z:i},this.ui.showInfoBanner(Ot("msgOopsNoisyShit"));for(const a of this.hunters){a.state="TELEPORT_TRACKING";const o=a.findPathToTarget({x:t,y:e,z:i},this.maze,this.mazeGen.TYPES);o?a.pathToTarget=o:a.pathToTarget=[]}}this.updateFloorUI(),this.draw2DMap(),this.input.keys={}}initIsometricCanvas(){this.isometricCanvas=document.createElement("canvas"),this.isometricCanvas.id="isometric-map-canvas",this.isometricCanvas.style.position="absolute",this.isometricCanvas.style.top="0",this.isometricCanvas.style.left="0",this.isometricCanvas.style.width="100%",this.isometricCanvas.style.height="100%",this.isometricCanvas.style.zIndex="101",this.isometricCtx=this.isometricCanvas.getContext("2d"),this.ui.uiMap3dContainer.appendChild(this.isometricCanvas),this.isometricCanvas.addEventListener("click",m=>this.handleIsometricClick(m));let t=null,e=null,i=0,n=0,a=0,o=0,r=!1,c=!1,l=!1,d=0;this.isometricCanvas.addEventListener("touchstart",m=>{if(!(!this.isMap3DActive||this.isIntroPlaying)){if(d=0,l=!1,m.touches.length===1){const g=m.touches[0];i=g.clientX,n=g.clientY,a=this.mapPanOffsetX,o=this.mapPanOffsetY,c=!0,r=!1}else if(m.touches.length===2){r=!0,c=!1;const g=m.touches[0],u=m.touches[1];t=Math.hypot(g.clientX-u.clientX,g.clientY-u.clientY),e=this.mapZoom}}},{passive:!1}),this.isometricCanvas.addEventListener("touchmove",m=>{if(!(!this.isMap3DActive||this.isIntroPlaying)){if(r&&m.touches.length===2){m.preventDefault();const g=m.touches[0],u=m.touches[1],h=Math.hypot(g.clientX-u.clientX,g.clientY-u.clientY);if(t>0){const _=this.isometricCanvas.getBoundingClientRect(),y=(g.clientX+u.clientX)/2-_.left,x=(g.clientY+u.clientY)/2-_.top,E=this.mapZoom;let b=e*(h/t);b=Math.max(.5,Math.min(4,b));const A=b/E;this.mapPanOffsetX=y-(y-(_.width/2+this.mapPanOffsetX))*A-_.width/2,this.mapPanOffsetY=x-(x-(_.height/2+this.mapPanOffsetY))*A-_.height/2,this.mapZoom=b,d=100}}else if(c&&m.touches.length===1){const g=m.touches[0],u=g.clientX-i,h=g.clientY-n,_=Math.hypot(u,h);if(d=Math.max(d,_),!l&&Math.abs(h)>40&&Math.abs(h)>Math.abs(u)*1.5){const y=this.mazeGen.size;h<-40?this.activeMapFloor-2>=1&&(this.activeMapFloor-=2,l=!0):h>40&&this.activeMapFloor+2<=y-2&&(this.activeMapFloor+=2,l=!0)}l||(this.mapPanOffsetX=a+u,this.mapPanOffsetY=o+h),m.preventDefault()}}},{passive:!1}),this.isometricCanvas.addEventListener("touchend",m=>{if(r=!1,c=!1,d<8&&!l){const g=m.changedTouches[0];if(g){const u={clientX:g.clientX,clientY:g.clientY};this.handleIsometricClick(u)}}}),this.isometricCanvas.addEventListener("wheel",m=>{if(!this.isMap3DActive||this.isIntroPlaying)return;m.preventDefault();const g=this.isometricCanvas.getBoundingClientRect(),u=m.clientX-g.left,h=m.clientY-g.top,_=this.mapZoom,y=1.15;let x=m.deltaY<0?_*y:_/y;x=Math.max(.5,Math.min(4,x));const E=g.width,b=g.height,A=x/_;this.mapPanOffsetX=u-(u-(E/2+this.mapPanOffsetX))*A-E/2,this.mapPanOffsetY=h-(h-(b/2+this.mapPanOffsetY))*A-b/2,this.mapZoom=x},{passive:!1});let f=!1,p=0,v=0;this.isometricCanvas.addEventListener("mousedown",m=>{if(!this.isMap3DActive||this.isIntroPlaying)return;const g=this.isometricCanvas.getBoundingClientRect(),u=m.clientX-g.left,h=m.clientY-g.top;this.floorClickRects&&this.floorClickRects.some(_=>u>=_.x&&u<=_.x+_.w&&h>=_.y&&h<=_.y+_.h)||this.isTeleportMode&&(this.teleportConfirmModalActive&&this.teleportModalClickRects&&this.teleportModalClickRects.some(_=>u>=_.x&&u<=_.x+_.w&&h>=_.y&&h<=_.y+_.h)||!this.teleportConfirmModalActive&&this.teleportDotsClickRects&&this.teleportDotsClickRects.some(_=>u>=_.x&&u<=_.x+_.w&&h>=_.y&&h<=_.y+_.h))||(f=!0,p=m.clientX,v=m.clientY)}),window.addEventListener("mousemove",m=>{if(f){const g=m.clientX-p,u=m.clientY-v;this.mapPanOffsetX+=g,this.mapPanOffsetY+=u,p=m.clientX,v=m.clientY}}),window.addEventListener("mouseup",()=>{f=!1}),this.isometricCanvas.addEventListener("mousemove",m=>{if(!this.isMap3DActive||this.isIntroPlaying)return;const g=this.isometricCanvas.getBoundingClientRect(),u=m.clientX-g.left,h=m.clientY-g.top;if(this.isometricCanvas.style.cursor="default",this.isTeleportMode){if(this.teleportConfirmModalActive&&this.teleportModalClickRects){for(const _ of this.teleportModalClickRects)if(u>=_.x&&u<=_.x+_.w&&h>=_.y&&h<=_.y+_.h){this.teleportModalSelection=_.selection,this.isometricCanvas.style.cursor="pointer";return}}else if(this.teleportDotsClickRects){const _=this.getSelectableTeleportIndices();for(const y of this.teleportDotsClickRects)if(u>=y.x&&u<=y.x+y.w&&h>=y.y&&h<=y.y+y.h&&_.includes(y.index)){this.selectedTeleportIndex=y.index;const x=this.allTeleports[y.index];this.activeMapFloor=x.z,this.mapCursor={x:x.x,y:x.y,z:x.z},this.isometricCanvas.style.cursor="pointer";return}}}if(!this.isTeleportMode){const _=this.mazeGen.size,y=this.activeMapFloor;let x=g.width*.7/_;x=Math.max(20,Math.min(48,x));const E=x*this.mapZoom,b=E/2,A=E/4,D=b*5,M=g.width/2+this.mapPanOffsetX,T=g.height/2+this.mapPanOffsetY,I=[];y+2<=_-2&&I.push(y+2),y+1<_&&I.push(y+1),I.push(y),y-1>=0&&I.push(y-1),y-2>=1&&I.push(y-2);for(const N of I){const X=T-(N-y)*D,R=(u-M)/b,U=(h-X)/A,B=Math.round((R+U)/2),V=Math.round((U-R)/2);if(B>=0&&B<_&&V>=0&&V<_&&this.getInteractiveElements(y).some(j=>j.x===B&&j.y===V&&j.z===N)){this.mapCursor={x:B,y:V,z:N},this.isometricCanvas.style.cursor="pointer";return}}}})}handleIsometricClick(t){if(!this.isMap3DActive||this.isIntroPlaying)return;const e=this.isometricCanvas.getBoundingClientRect(),i=t.clientX-e.left,n=t.clientY-e.top;if(this.isTeleportMode){if(this.teleportConfirmModalActive){if(this.teleportModalClickRects){for(const E of this.teleportModalClickRects)if(i>=E.x&&i<=E.x+E.w&&n>=E.y&&n<=E.y+E.h){if(E.selection==="go"){const b=this.allTeleports[this.selectedTeleportIndex];this.teleportTo(b.x,b.y,b.z),this.toggleTeleportMap(!1)}else this.teleportConfirmModalActive=!1;return}}this.teleportConfirmModalActive=!1;return}if(this.teleportDotsClickRects){const E=this.teleportDotsClickRects.find(b=>i>=b.x&&i<=b.x+b.w&&n>=b.y&&n<=b.y+b.h);if(E){if(this.getSelectableTeleportIndices().includes(E.index))if(this.selectedTeleportIndex===E.index)this.teleportConfirmModalActive=!0,this.teleportModalSelection="go";else{this.selectedTeleportIndex=E.index;const A=this.allTeleports[E.index];this.activeMapFloor=A.z,this.mapCursor={x:A.x,y:A.y,z:A.z}}return}}}if(this.floorClickRects){for(const E of this.floorClickRects)if(i>=E.x&&i<=E.x+E.w&&n>=E.y&&n<=E.y+E.h){this.activeMapFloor=E.floor;return}}const a=this.mazeGen.size,o=this.activeMapFloor;let r=e.width*.7/a;r=Math.max(20,Math.min(48,r));const c=r*this.mapZoom,l=c/2,d=c/4,f=l*5,p=e.width/2+this.mapPanOffsetX,v=e.height/2+this.mapPanOffsetY,m=(E,b,A)=>{const D=(E-b)*l+p,M=(E+b)*d-(A-o)*f+v;return{x:D,y:M}};if(this.isTeleportMode)return;const u=this.getInteractiveElements(o).filter(E=>E.type==="shaft");let h=null,_=1/0;const y=35;for(const E of u){const b=m(E.x,E.y,E.z),A=i-b.x,D=n-b.y,M=Math.sqrt(A*A+D*D);M<_&&(_=M,h=E)}if(h&&_<=y){this.mapCursor={x:h.x,y:h.y,z:h.z},this.triggerPathReveal(h.x,h.y,h.z);return}const x=[];o+2<=a-2&&x.push(o+2),o+1<a&&x.push(o+1),x.push(o),o-1>=0&&x.push(o-1),o-2>=1&&x.push(o-2);for(const E of x){const b=v-(E-o)*f,A=(i-p)/l,D=(n-b)/d,M=Math.round((A+D)/2),T=Math.round((D-A)/2);if(M>=0&&M<a&&T>=0&&T<a){const I=this.getInteractiveElements(o);if(I.some(X=>X.x===M&&X.y===T&&X.z===E)){if(this.isTeleportMode){if(I.find(R=>R.x===M&&R.y===T&&R.z===E&&R.type==="teleport")){const R=this.allTeleports.findIndex(B=>B.x===M&&B.y===T&&B.z===E),U=this.getSelectableTeleportIndices();R!==-1&&U.includes(R)&&(this.selectedTeleportIndex===R?(this.teleportConfirmModalActive=!0,this.teleportModalSelection="go"):(this.selectedTeleportIndex=R,this.mapCursor={x:M,y:T,z:E}))}}else this.mapCursor={x:M,y:T,z:E},this.triggerPathReveal(M,T,E);return}}}}navigateCursor(t){const e=this.activeMapFloor,i=this.getInteractiveElements(e);if(i.length===0)return;const n=this.mapCursor.x,a=this.mapCursor.y,o=this.mapCursor.z,r=this.mazeGen.size;if(t==="left"){if(i.find(l=>l.x===n&&l.y===a&&l.z===e+1&&o===e-1)){this.mapCursor={x:n,y:a,z:e+1};return}for(let l=n-1;l>=0;l--){const d=i.filter(f=>f.x===l&&f.y===a);if(d.length>0){const f=d.find(v=>v.z===e-1),p=d.find(v=>v.z===e+1);f&&p?this.mapCursor={x:l,y:a,z:e-1}:this.mapCursor={x:l,y:a,z:d[0].z};return}}}else if(t==="right"){if(i.find(l=>l.x===n&&l.y===a&&l.z===e-1&&o===e+1)){this.mapCursor={x:n,y:a,z:e-1};return}for(let l=n+1;l<r;l++){const d=i.filter(f=>f.x===l&&f.y===a);if(d.length>0){const f=d.find(v=>v.z===e-1),p=d.find(v=>v.z===e+1);f&&p?this.mapCursor={x:l,y:a,z:e+1}:this.mapCursor={x:l,y:a,z:d[0].z};return}}}else if(t==="up"){if(i.find(l=>l.x===n&&l.y===a&&l.z===e-1&&o===e+1)){this.mapCursor={x:n,y:a,z:e-1};return}for(let l=a-1;l>=0;l--){const d=i.filter(f=>f.y===l);if(d.length>0){let f=-1,p=1/0;for(const u of d){const h=Math.abs(u.x-n);h<p?(p=h,f=u.x):h===p&&u.x<f&&(f=u.x)}const v=d.filter(u=>u.x===f),m=v.find(u=>u.z===e-1),g=v.find(u=>u.z===e+1);m&&g?this.mapCursor={x:f,y:l,z:e+1}:this.mapCursor={x:f,y:l,z:v[0].z};return}}}else if(t==="down"){if(i.find(l=>l.x===n&&l.y===a&&l.z===e+1&&o===e-1)){this.mapCursor={x:n,y:a,z:e+1};return}for(let l=a+1;l<r;l++){const d=i.filter(f=>f.y===l);if(d.length>0){let f=-1,p=1/0;for(const u of d){const h=Math.abs(u.x-n);h<p?(p=h,f=u.x):h===p&&u.x<f&&(f=u.x)}const v=d.filter(u=>u.x===f),m=v.find(u=>u.z===e-1),g=v.find(u=>u.z===e+1);m&&g?this.mapCursor={x:f,y:l,z:e-1}:this.mapCursor={x:f,y:l,z:v[0].z};return}}}}getInteractiveElements(t){const e=[],i=this.mazeGen.size,n=this.mazeGen.TYPES,a=(o,r,c)=>{if(c<0||c>=i)return!1;const l=this.maze.get(o,r,c);return l===n.VISITED||l===n.START||l===n.ELEVATOR_VISITED||l===n.TELEPORT&&this.discoveredTeleports.has(`${o},${r},${c}`)};for(let o=0;o<i;o++)for(let r=0;r<i;r++){const c=this.maze.get(o,r,t);if(c===n.WALL)continue;const l=c===n.TELEPORT,d=l&&this.discoveredTeleports.has(`${o},${r},${t}`);if(d){e.push({x:o,y:r,z:t,type:"teleport"});continue}if(c===n.START){e.push({x:o,y:r,z:t,type:"start"});continue}if(c===n.EXIT){this.keysCollected===this.totalKeys&&this.exitPathfinderUnlocked&&e.push({x:o,y:r,z:t,type:"exit"});continue}(c===n.PATH||l&&!d)&&this.isNearVisited(o,r,t)&&e.push({x:o,y:r,z:t,type:"known"})}for(const o of[t-1,t+1])if(!(o<0||o>=i||o-1<1||o+1>=i))for(let r=0;r<i;r++)for(let c=0;c<i;c++){const l=this.maze.get(r,c,o);if(l===n.WALL)continue;const d=l===n.ELEVATOR_VISITED;l===1&&(a(r,c,o-1)||a(r,c,o+1))&&!d&&a(r,c,t)&&e.push({x:r,y:c,z:o,type:"shaft"})}return e}drawIsometricMap(){if(!this.isMap3DActive||this.isIntroPlaying)return;const t=this.isometricCanvas,e=this.isometricCtx,i=t.width=window.innerWidth,n=t.height=window.innerHeight;e.clearRect(0,0,i,n),e.fillStyle="#000000",e.fillRect(0,0,i,n);const a=this.mazeGen.size,o=this.activeMapFloor,r=this.visualActiveFloor;let c=i*.7/a;c=Math.max(20,Math.min(48,c));const l=c*this.mapZoom,d=l/2,f=l/2,p=l/4,v=f*5,m=i/2+this.mapPanOffsetX,g=n/2+this.mapPanOffsetY,u=(C,G,$)=>{const z=C,Y=G,st=(z-Y)*f+m,ut=(z+Y)*p-($-r)*v+g;return{x:st,y:ut}},h=C=>{e.strokeStyle=`rgba(0, 255, 0, ${.15*C})`,e.lineWidth=1;for(let G=0;G<a;G++)for(let $=0;$<a;$++){const z=u($,G,o);e.beginPath(),e.moveTo(z.x,z.y-p),e.lineTo(z.x+f,z.y),e.lineTo(z.x,z.y+p),e.lineTo(z.x-f,z.y),e.closePath(),e.stroke()}},_=(C,G,$,z,Y,st,ut=1)=>{e.save(),e.globalAlpha=ut,e.beginPath(),e.moveTo(C-$,G),e.lineTo(C,G+z),e.lineTo(C,G+z-Y),e.lineTo(C-$,G-Y),e.closePath(),e.fillStyle=st,e.fill(),e.fillStyle="rgba(0, 0, 0, 0.15)",e.fill(),e.beginPath(),e.moveTo(C,G+z),e.lineTo(C+$,G),e.lineTo(C+$,G-Y),e.lineTo(C,G+z-Y),e.closePath(),e.fillStyle=st,e.fill(),e.fillStyle="rgba(0, 0, 0, 0.3)",e.fill(),e.beginPath(),e.moveTo(C-$,G-Y),e.lineTo(C,G+z-Y),e.lineTo(C+$,G-Y),e.lineTo(C,G-z-Y),e.closePath(),e.fillStyle=st,e.fill(),e.restore()},y=(C,G,$)=>{if($<0||$>=a)return!1;const z=this.maze.get(C,G,$);return z===this.mazeGen.TYPES.VISITED||z===this.mazeGen.TYPES.START||z===this.mazeGen.TYPES.ELEVATOR_VISITED||z===this.mazeGen.TYPES.TELEPORT&&this.discoveredTeleports.has(`${C},${G},${$}`)},x=(C,G,$,z,Y,st,ut,bt,F,At)=>{e.save(),e.globalAlpha=At;const mt=F?"#ffffff":bt?J.COLORS.NEON_UP:J.COLORS.NEON_UP_UNUSED,vt=F?"#ffffff":bt?J.COLORS.NEON_DOWN:J.COLORS.NEON_DOWN_UNUSED;if(st&&ut)e.beginPath(),e.moveTo(C,G-Y-z),e.lineTo(C-$,G-Y),e.lineTo(C,G-Y+z),e.lineTo(C,G-Y),e.closePath(),e.fillStyle=vt,e.fill(),e.beginPath(),e.moveTo(C,G-Y-z),e.lineTo(C,G-Y),e.lineTo(C,G-Y+z),e.lineTo(C+$,G-Y),e.closePath(),e.fillStyle=mt,e.fill(),e.beginPath(),e.moveTo(C-$,G),e.lineTo(C,G+z),e.lineTo(C,G+z-Y),e.lineTo(C-$,G-Y),e.closePath(),e.fillStyle=vt,e.fill(),e.fillStyle="rgba(0, 0, 0, 0.15)",e.fill(),e.beginPath(),e.moveTo(C,G+z),e.lineTo(C+$,G),e.lineTo(C+$,G-Y),e.lineTo(C,G+z-Y),e.closePath(),e.fillStyle=mt,e.fill(),e.fillStyle="rgba(0, 0, 0, 0.3)",e.fill();else{const ht=st?mt:vt;e.beginPath(),e.moveTo(C-$,G-Y),e.lineTo(C,G+z-Y),e.lineTo(C+$,G-Y),e.lineTo(C,G-z-Y),e.closePath(),e.fillStyle=ht,e.fill(),e.beginPath(),e.moveTo(C-$,G),e.lineTo(C,G+z),e.lineTo(C,G+z-Y),e.lineTo(C-$,G-Y),e.closePath(),e.fillStyle=ht,e.fill(),e.fillStyle="rgba(0, 0, 0, 0.15)",e.fill(),e.beginPath(),e.moveTo(C,G+z),e.lineTo(C+$,G),e.lineTo(C+$,G-Y),e.lineTo(C,G+z-Y),e.closePath(),e.fillStyle=ht,e.fill(),e.fillStyle="rgba(0, 0, 0, 0.3)",e.fill()}e.restore()},E=(C,G)=>{const $=this.mazeGen.TYPES;for(let z=0;z<a;z++)for(let Y=0;Y<a;Y++){const st=this.maze.get(Y,z,C),ut=u(Y,z,C),bt=st===$.TELEPORT,F=bt&&this.discoveredTeleports.has(`${Y},${z},${C}`),At=st===$.VISITED||st===$.START||st===$.ELEVATOR_VISITED||F,mt=(st===$.PATH||bt&&!F)&&this.isNearVisited(Y,z,C),vt=this.revealedPathSet.has(`${Y},${z},${C}`),ht=st===$.KEY,Bt=st===$.EXIT;if(st===$.WALL||st===$.STATUE){if(this.isNearVisited(Y,z,C)){const w=f*.45,S=p*.45,k=d*.25,rt="rgba(0, 255, 0, 0.7)",at=[{dx:-.23,dy:-.23},{dx:.23,dy:-.23},{dx:-.23,dy:.23},{dx:.23,dy:.23}];for(const ot of at){const gt=u(Y+ot.dx,z+ot.dy,C);_(gt.x,gt.y,w,S,k,rt,G)}}continue}for(const w of this.hunters){if(w.state==="SLEEP")continue;const S=Math.round((w.visualZ-1)/2)*2+1,k=Math.max(0,Math.min(a-1,Math.floor(w.visualX))),rt=Math.max(0,Math.min(a-1,Math.floor(w.visualY)));if(Y===k&&z===rt&&C===S){const at=u(w.visualX,w.visualY,w.visualZ);T(w,at.x,at.y-1.5,G)}}if(At||mt||vt||ht||Bt){const S=C<a-1&&this.maze.get(Y,z,C+1)!==$.WALL&&this.maze.get(Y,z,C+1)!==$.STATUE,k=C>0&&this.maze.get(Y,z,C-1)!==$.WALL&&this.maze.get(Y,z,C-1)!==$.STATUE,rt=this.mapCursor.x===Y&&this.mapCursor.y===z&&this.mapCursor.z===C;if((At||vt)&&(S||k))x(ut.x,ut.y,f,p,1.5,S,k,At,vt,G);else{let gt="#222222";if(vt)gt="#ffffff";else if(Bt)gt=this.keysCollected===this.totalKeys?J.COLORS.EXIT:"#ff3300";else if(F)gt="#ffd700";else if(At)st===$.START?gt=J.COLORS.START:gt="#444444";else if(mt)if(rt){const dt=.5+.5*Math.sin(performance.now()/120);gt=`rgb(${Math.floor(31+224*dt)}, ${Math.floor(58+197*dt)}, ${Math.floor(82+173*dt)})`}else gt="#1f3a52";else ht&&(gt="#111111");_(ut.x,ut.y,f,p,1.5,gt,G)}if(ht&&A(ut.x,ut.y-1.5,G),F){const gt=this.inactiveTeleportPos&&this.inactiveTeleportPos.x===Y&&this.inactiveTeleportPos.y===z&&this.inactiveTeleportPos.z===C;let dt=J.COLORS.TELEPORT;gt&&(dt=J.COLORS.TELEPORT_INACTIVE),D(ut.x,ut.y-1.5,dt,G,rt)}Y===Math.floor(this.player.x)&&z===Math.floor(this.player.y)&&C===this.player.z&&M(ut.x,ut.y-1.5,G)}}},b=(C,G)=>{const $=this.mazeGen.TYPES;for(let z=0;z<a;z++)for(let Y=0;Y<a;Y++){const st=this.maze.get(Y,z,C);if(st===$.WALL)continue;const ut=this.revealedPathSet.has(`${Y},${z},${C}`),bt=st===$.ELEVATOR_VISITED;if(st===1&&(y(Y,z,C-1)||y(Y,z,C+1)),ut||y(Y,z,o)){const F=u(Y,z,C-1);F.y-=1.5;const At=u(Y,z,C+1);let mt=J.COLORS.PATH_KNOWN;ut?mt="#ffffff":bt&&(mt=J.COLORS.PATH_VISITED);const vt=this.mapCursor.x===Y&&this.mapCursor.y===z&&this.mapCursor.z===C;let ht=mt,Bt=G;vt&&(Bt=.4+.6*(.5+.5*Math.sin(performance.now()/120)),ht="#ffffff");const w=(rt=>{const at=rt.replace("#",""),ot=parseInt(at,16),gt=ot>>16&255,dt=ot>>8&255,xt=ot&255;return`${gt}, ${dt}, ${xt}`})(ht),S=f*.25;e.save(),e.globalAlpha=Bt;const k=e.createLinearGradient(0,F.y,0,At.y);k.addColorStop(0,`rgba(${w}, 0.15)`),k.addColorStop(.2,`rgba(${w}, 0.65)`),k.addColorStop(.5,`rgba(${w}, 0.95)`),k.addColorStop(.8,`rgba(${w}, 0.65)`),k.addColorStop(1,`rgba(${w}, 0.15)`),e.beginPath(),e.moveTo(F.x-S,F.y),e.lineTo(F.x,F.y+S/2),e.lineTo(At.x,At.y+S/2),e.lineTo(At.x-S,At.y),e.closePath(),e.fillStyle=k,e.fill(),e.fillStyle="rgba(0, 0, 0, 0.15)",e.fill(),e.beginPath(),e.moveTo(F.x,F.y+S/2),e.lineTo(F.x+S,F.y),e.lineTo(At.x+S,At.y),e.lineTo(At.x,At.y+S/2),e.closePath(),e.fillStyle=k,e.fill(),e.fillStyle="rgba(0, 0, 0, 0.3)",e.fill(),e.restore()}}},A=(C,G,$)=>{e.save(),e.globalAlpha=$;const z=Math.sin(performance.now()/200)*3-6,Y=G+z;e.beginPath(),e.moveTo(C,Y-5),e.lineTo(C+4,Y),e.lineTo(C,Y+5),e.lineTo(C-4,Y),e.closePath(),e.fillStyle="#ffd700",e.fill(),e.strokeStyle="#ffffff",e.lineWidth=1,e.stroke(),e.restore()},D=(C,G,$,z,Y)=>{e.save(),e.globalAlpha=z;const st=Math.sin(performance.now()/250)*2-4,ut=G+st;if(Y){e.save();const bt=1+.35*(.5+.5*Math.sin(performance.now()/100));e.beginPath(),e.arc(C,ut,7*bt,0,Math.PI*2),e.fillStyle="rgba(255, 255, 255, 0.4)",e.fill(),e.restore()}e.beginPath(),e.arc(C,ut,5,0,Math.PI*2),e.fillStyle=Y?"#ffffff":$,e.fill(),e.strokeStyle="#ffffff",e.lineWidth=1.2,e.stroke(),e.restore()},M=(C,G,$)=>{const z=`${this.playerVertical}_${this.playerSide}`,Y=this.mageImages[z],st=f*.55,ut=p*.55,bt=C-f*.12,F=G-p*.12;if(e.save(),e.beginPath(),e.ellipse(bt,F,st,ut,0,0,Math.PI*2),e.fillStyle="rgba(0, 0, 0, 0.45)",e.fill(),e.restore(),Y&&Y.complete){e.save(),e.globalAlpha=$;const At=l*.7,mt=At,vt=At*(Y.height/Y.width),ht=G-vt;e.drawImage(Y,C-mt/2,ht,mt,vt),e.restore()}else e.save(),e.globalAlpha=$,e.beginPath(),e.arc(C,G-3,5,0,Math.PI*2),e.fillStyle=J.COLORS.PLAYER,e.fill(),e.strokeStyle=J.COLORS.PLAYER_OUTLINE,e.lineWidth=1.5,e.stroke(),e.restore();if(J.SHOW_COLLISION_DEBUG){e.save();const At=J.PLAYER_COLLISION_OFFSET_X||0,mt=J.PLAYER_COLLISION_OFFSET_Y||0,vt=(At-mt)*f,ht=(At+mt)*p,Bt=C+vt,Tt=G+ht;e.beginPath(),e.moveTo(Bt,Tt-J.PLAYER_COLLISION_RADIUS*d),e.lineTo(Bt+J.PLAYER_COLLISION_RADIUS*l,Tt),e.lineTo(Bt,Tt+J.PLAYER_COLLISION_RADIUS*d),e.lineTo(Bt-J.PLAYER_COLLISION_RADIUS*l,Tt),e.closePath(),e.strokeStyle="#ff0000",e.lineWidth=1.5,e.stroke(),e.restore()}},T=(C,G,$,z)=>{if(C&&C.lowCanvas){e.save(),e.globalAlpha=z;const Y=l*.9;e.save(),e.beginPath();const st=f*.6,ut=p*.6;e.ellipse(G,$,st,ut,0,0,Math.PI*2),e.fillStyle="rgba(0, 0, 0, 0.35)",e.fill(),e.restore();const bt=Math.sin(C.jellyTime*3)*(l*.06),F=l*.38+bt,At=$-F,mt=C.jellyTime,vt=Math.sin(mt)*6,ht=Math.cos(mt*.7)*4,Bt=1+Math.sin(mt*1.2)*.06,Tt=1+Math.cos(mt*.8)*.06,w=vt*Math.PI/180,S=ht*Math.PI/180;e.save(),e.translate(G,At),e.transform(Bt,Math.tan(S),Math.tan(w),Tt,0,0),e.imageSmoothingEnabled=!1,e.drawImage(C.lowCanvas,-Y/2,-Y/2,Y,Y),e.restore(),e.restore()}else{e.save(),e.globalAlpha=z;const Y=4+Math.sin(performance.now()/100)*1.5;e.beginPath(),e.arc(G,$-3,Y,0,Math.PI*2),e.fillStyle=J.COLORS.HUNTER||"#ff00ff",e.fill(),e.strokeStyle="#ff0000",e.lineWidth=1,e.stroke(),e.restore()}},I=C=>{const G=Math.abs(C-r);return G<=2?1-G/2*(1-.35):G<4?.35*(1-(G-2)/2):0};for(let C=1;C<a;C+=2){if(C-1>=0&&(C-1===o-1||C-1===o+1)){const $=I(C-2),z=I(C),Y=Math.max($,z)*.8;Y>.01&&b(C-1,Y)}const G=I(C);G>.01&&(C===o&&h(G),E(C,G))}const N=this.getInteractiveElements(o);if(N.forEach(C=>{if(C.type==="shaft"){const G=u(C.x,C.y,C.z),$=this.mapCursor.x===C.x&&this.mapCursor.y===C.y&&this.mapCursor.z===C.z;e.save();const z=.5+.5*Math.sin(performance.now()/150);e.beginPath(),e.arc(G.x,G.y,7.5+z*2.5,0,Math.PI*2),e.fillStyle=$?"#ffffff":"#00ffff",e.fill(),e.strokeStyle="#ffffff",e.lineWidth=1.5,e.stroke(),e.restore()}}),this.mapCursor.x===Math.floor(this.player.x)&&this.mapCursor.y===Math.floor(this.player.y)&&this.mapCursor.z===this.player.z||N.some(C=>C.x===this.mapCursor.x&&C.y===this.mapCursor.y&&C.z===this.mapCursor.z)){const C=u(this.mapCursor.x,this.mapCursor.y,this.mapCursor.z),G=Math.sin(performance.now()/150)*4;e.save();const $=1-G/16,z=u(this.mapCursor.x,this.mapCursor.y,o);e.translate(z.x,z.y),e.scale(1,.5),e.beginPath(),e.arc(0,0,8*$,0,Math.PI*2),e.fillStyle=`rgba(0, 0, 0, ${.55*$})`,e.fill(),e.restore(),e.save();const Y=C.x,st=C.y-d-12+G;e.beginPath(),e.moveTo(Y,st),e.lineTo(Y-6,st-8),e.lineTo(Y-3,st-8),e.lineTo(Y-3,st-16),e.lineTo(Y+3,st-16),e.lineTo(Y+3,st-8),e.lineTo(Y+6,st-8),e.closePath(),e.fillStyle="#00ffff",e.fill(),e.strokeStyle="#ffffff",e.lineWidth=1.5,e.stroke(),e.restore()}const U=45,B=n/3,V=n/3*2,K=i-U;e.save(),e.strokeStyle="rgba(0, 255, 255, 0.25)",e.lineWidth=4,e.lineCap="round",e.beginPath(),e.moveTo(K,B),e.lineTo(K,V),e.stroke(),e.strokeStyle="rgba(0, 255, 255, 0.4)",e.lineWidth=1.5;for(let C=B;C<=V;C+=(V-B)/6)e.beginPath(),e.moveTo(K-5,C),e.lineTo(K+5,C),e.stroke();e.restore();const q=(B+V)/2,j=(V-B)/2,it=r-o,nt=q-it/2*j;if(e.save(),e.fillStyle="#00ffff",e.beginPath(),e.arc(K,nt,5,0,Math.PI*2),e.fill(),e.restore(),this.floorClickRects=[],[{floor:o+2,y:B,label:`${(o+2+1)/2}F`,valid:o+2<=a-2},{floor:o,y:q,label:`${(o+1)/2}F`,valid:!0},{floor:o-2,y:V,label:`${(o-2+1)/2}F`,valid:o-2>=1}].forEach(C=>{if(!C.valid)return;const G=60,$=36,z=K-G-15,Y=C.y-$/2,st=C.floor===o;e.save(),e.beginPath(),e.moveTo(z+6,Y),e.lineTo(z+G,Y),e.lineTo(z+G,Y+$-6),e.lineTo(z+G-6,Y+$),e.lineTo(z,Y+$),e.lineTo(z,Y+6),e.closePath(),e.fillStyle=st?"rgba(0, 255, 255, 0.25)":"rgba(0, 0, 0, 0.6)",e.strokeStyle=st?"#00ffff":"rgba(0, 255, 255, 0.35)",e.lineWidth=st?2:1,e.fill(),e.stroke(),e.restore(),e.strokeStyle=st?"#00ffff":"rgba(0, 255, 255, 0.35)",e.lineWidth=st?2:1,e.beginPath(),e.moveTo(z+G,C.y),e.lineTo(K-2,C.y),e.stroke(),e.fillStyle=st?"#00ffff":"rgba(255, 255, 255, 0.5)",e.font="bold 8px Courier New",e.textAlign="center",e.textBaseline="top",e.fillText("LEVEL",z+G/2,Y+6),e.fillStyle="#ffffff",e.font="bold 15px Courier New",e.textBaseline="top",e.fillText(C.label,z+G/2,Y+16),this.floorClickRects.push({floor:C.floor,x:z,y:Y,w:G+15,h:$})}),this.isTeleportMode||(e.save(),e.beginPath(),e.moveTo(31,30),e.lineTo(145,30),e.lineTo(145,60),e.lineTo(139,66),e.lineTo(25,66),e.lineTo(25,36),e.closePath(),e.fillStyle="rgba(0, 0, 0, 0.7)",e.strokeStyle="rgba(0, 255, 255, 0.35)",e.lineWidth=1.5,e.fill(),e.stroke(),e.restore(),e.fillStyle="rgba(0, 255, 255, 0.7)",e.font="bold 8px 'Roboto', sans-serif",e.textAlign="center",e.textBaseline="top",e.fillText(Ot("hudPathfinders"),25+120/2,35),e.fillStyle="#ffffff",e.font="bold 13px 'Roboto', sans-serif",e.textBaseline="top",e.fillText(`${this.pathfindersRemaining} / ${this.totalPathfinders}`,25+120/2,46)),this.isTeleportMode){const $=i/2-90,z=30;e.save(),e.beginPath(),e.moveTo($+8,z),e.lineTo($+180-8,z),e.lineTo($+180,z+8),e.lineTo($+180,z+38-8),e.lineTo($+180-8,z+38),e.lineTo($+8,z+38),e.lineTo($,z+38-8),e.lineTo($,z+8),e.closePath(),e.fillStyle="rgba(255, 140, 0, 0.22)",e.strokeStyle="#ff8c00",e.lineWidth=2.5,e.fill(),e.stroke(),e.restore(),e.fillStyle="#ffffff",e.font="bold 15px 'Roboto', sans-serif",e.textAlign="center",e.textBaseline="middle",e.fillText(Ot("teleportWarning"),i/2,z+38/2)}if(this.isTeleportMode){const $=(this.allTeleports.length-1)*52,z=n-60,Y=i/2-$/2,st=$+60,ut=58,bt=i/2-st/2,F=z-ut/2;if(e.save(),e.beginPath(),e.moveTo(bt+6,F),e.lineTo(bt+st-6,F),e.lineTo(bt+st,F+6),e.lineTo(bt+st,F+ut-6),e.lineTo(bt+st-6,F+ut),e.lineTo(bt+6,F+ut),e.lineTo(bt,F+ut-6),e.lineTo(bt,F+6),e.closePath(),e.fillStyle="rgba(0, 0, 0, 0.72)",e.strokeStyle="rgba(0, 255, 255, 0.25)",e.lineWidth=1,e.fill(),e.stroke(),e.restore(),this.teleportDotsClickRects=[],this.getSelectableTeleportIndices(),this.allTeleports.forEach((At,mt)=>{const vt=Y+mt*52,ht=`${At.x},${At.y},${At.z}`,Bt=this.discoveredTeleports.has(ht),Tt=mt===this.selectedTeleportIndex,w=At.x===Math.floor(this.player.x)&&At.y===Math.floor(this.player.y)&&At.z===this.player.z,S=this.inactiveTeleportPos&&At.x===this.inactiveTeleportPos.x&&At.y===this.inactiveTeleportPos.y&&At.z===this.inactiveTeleportPos.z;if(e.save(),!Bt)e.beginPath(),e.arc(vt,z,9,0,Math.PI*2),e.fillStyle="rgba(100, 100, 100, 0.45)",e.fill(),e.strokeStyle="rgba(255, 255, 255, 0.15)",e.stroke();else if(S)e.beginPath(),e.arc(vt,z,10,0,Math.PI*2),e.fillStyle="rgba(255, 45, 0, 0.2)",e.fill(),e.strokeStyle="rgba(255, 45, 0, 0.4)",e.lineWidth=1.2,e.stroke();else{if(Tt){const k=1+.3*(.5+.5*Math.sin(performance.now()/120));e.beginPath(),e.arc(vt,z,20*k,0,Math.PI*2),e.fillStyle="rgba(0, 255, 255, 0.18)",e.fill()}e.beginPath(),e.arc(vt,z,Tt?14:9,0,Math.PI*2),e.fillStyle=Tt?"#ffffff":"#00b3ff",e.fill(),e.strokeStyle=Tt?"#00ffff":"#ffffff",e.lineWidth=Tt?1.5:1,e.stroke(),w&&(e.beginPath(),e.arc(vt,z,Tt?6:4,0,Math.PI*2),e.fillStyle="#39ff14",e.fill())}e.restore(),this.teleportDotsClickRects.push({x:vt-24,y:z-24,w:48,h:48,index:mt})}),this.teleportConfirmModalActive){e.fillStyle="rgba(0, 0, 0, 0.6)",e.fillRect(0,0,i,n);const At=320,mt=160,vt=i/2-At/2,ht=n/2-mt/2;e.save(),e.beginPath(),e.moveTo(vt+10,ht),e.lineTo(vt+At-10,ht),e.lineTo(vt+At,ht+10),e.lineTo(vt+At,ht+mt-10),e.lineTo(vt+At-10,ht+mt),e.lineTo(vt+10,ht+mt),e.lineTo(vt,ht+mt-10),e.lineTo(vt,ht+10),e.closePath(),e.fillStyle="rgba(10, 18, 30, 0.94)",e.strokeStyle="#00ffff",e.lineWidth=2,e.fill(),e.stroke(),e.restore(),e.fillStyle="#00ffff",e.font="bold 15px 'Roboto', sans-serif",e.textAlign="center",e.textBaseline="top",e.fillText(Ot("teleportationLink"),i/2,ht+16),e.strokeStyle="rgba(0, 255, 255, 0.2)",e.lineWidth=1,e.beginPath(),e.moveTo(vt+15,ht+34),e.lineTo(vt+At-15,ht+34),e.stroke();const Bt=this.allTeleports[this.selectedTeleportIndex];e.fillStyle="#ffffff",e.font="bold 15px 'Roboto', sans-serif",e.fillText(Ot("teleportJumpSector",{floor:(Bt.z+1)/2}),i/2,ht+52),e.fillStyle="rgba(255, 255, 255, 0.7)",e.font="13px 'Roboto', sans-serif",e.fillText(Ot("teleportTargetGrid",{x:Bt.x,y:Bt.y}),i/2,ht+75);const Tt=100,w=30,S=i/2-Tt-15,k=ht+105,rt=i/2+15,at=ht+105;this.teleportModalClickRects=[{x:S,y:k,w:Tt,h:w,selection:"go"},{x:rt,y:at,w:Tt,h:w,selection:"cancel"}];const ot=(gt,dt,xt,Rt)=>{const Ut=this.teleportModalSelection===Rt;e.save(),e.beginPath(),e.moveTo(gt+4,dt),e.lineTo(gt+Tt-4,dt),e.lineTo(gt+Tt,dt+4),e.lineTo(gt+Tt,dt+w-4),e.lineTo(gt+Tt-4,dt+w),e.lineTo(gt+4,dt+w),e.lineTo(gt,dt+w-4),e.lineTo(gt,dt+4),e.closePath(),e.fillStyle=Ut?"rgba(0, 255, 255, 0.35)":"rgba(0, 0, 0, 0.6)",e.strokeStyle=Ut?"#00ffff":"rgba(0, 255, 255, 0.35)",e.lineWidth=Ut?2:1,e.fill(),e.stroke(),e.restore(),e.fillStyle=Ut?"#ffffff":"#00ffff",e.font="bold 13px 'Roboto', sans-serif",e.textAlign="center",e.textBaseline="middle",e.fillText(xt,gt+Tt/2,dt+w/2)};ot(S,k,Ot("teleportGo"),"go"),ot(rt,at,Ot("teleportCancel"),"cancel")}}}}function am(s){let t,e,i,n,a,o,r,c,l,d,f,p,v;return{c(){t=xi("section"),t.innerHTML='<div class="menu-content"><header><h1 class="game-title" data-i18n="gameTitle">VOID ESCAPE</h1></header> <div class="menu-stats-grid"><div class="stat-container hunter"><div class="stat-label" data-i18n="activeHunters">Active Hunters</div> <div class="stat-value" id="hunter-count">-</div></div> <div class="stat-container teleport"><div class="stat-label" data-i18n="activeTeleports">Active Teleports</div> <div class="stat-value" id="teleport-count">-</div></div> <div class="stat-container keys"><div class="stat-label" data-i18n="activeKeys">Active Keys</div> <div class="stat-value" id="keys-count">-</div></div> <div class="stat-container pathfinder"><div class="stat-label" data-i18n="availablePathfinders">Available Pathfinders</div> <div class="stat-value" id="pathfinder-count">-</div></div></div> <div class="control-group"><div class="degree-full-row"><span class="degree-label" data-i18n="mazeDegree">Maze Degree</span> <span class="degree-value" id="degree-val">-</span></div> <input type="range" id="maze-degree" aria-label="Ajustar Grau do Labirinto"/> <p class="hint" data-i18n="degreeHint">Controls the grid size. Higher values create larger, more complex mazes.</p></div> <div class="control-group switch-group"><div class="switch-container"><span class="switch-label" data-i18n="safeMode">Safe Mode</span> <label class="switch" for="safe-mode"><input type="checkbox" id="safe-mode" aria-label="Safe Mode"/> <span class="slider"></span></label></div> <p class="hint" data-i18n="safeModeHint">When active, no hunters will spawn in the maze.</p></div> <div class="menu-action-btns"><button id="start-btn" data-i18n="generateMaze">NEW GAME</button> <button id="continue-btn-menu" class="continue-btn" style="display:none" data-i18n="continue">CONTINUE</button></div> <p class="game-credits" data-i18n="gameCredits">a game by Bernard Rodrigues</p></div>',e=Ni(),i=xi("section"),i.innerHTML='<div class="story-container"><div id="story-image-canvas" class="story-image-box"><div id="story-image-loader" class="story-loader hidden"><div class="spinner"></div> <span data-i18n="loading">LOADING...</span></div> <img id="story-img" src="" alt="Story Image" style="display: none; max-width: 100%; max-height: 100%;"/></div> <div id="story-dialogue" class="story-dialogue-box"><span id="story-text"></span> <span id="story-arrow" class="story-arrow hidden">▼</span></div> <div class="story-actions"><button id="story-skip-btn">SKIP</button></div></div>',n=Ni(),a=xi("section"),a.innerHTML='<div class="popup-container victory"><h1 data-i18n="victoryTitle">Mission Accomplished</h1> <p data-i18n="victoryText">You have successfully navigated the 3D void.</p> <p class="victory-stats"><span data-i18n="mapCompletion">MAP COMPLETION</span>: <span id="victory-completion-rate">0%</span></p> <div class="end-game-btns"><button id="restart-btn-victory" class="end-btn" data-i18n="playAgain">PLAY AGAIN</button> <button id="menu-btn-victory" class="end-btn" data-i18n="mainMenu">MAIN MENU</button></div></div>',o=Ni(),r=xi("section"),r.innerHTML='<div class="popup-container death"><h1 data-i18n="gameOverTitle">Terminated</h1> <p data-i18n="gameOverText">You were caught by the void hunters.</p> <div class="end-game-btns"><button id="continue-btn-death" class="end-btn continue-highlight" data-i18n="continue">CONTINUE</button> <button id="retry-btn-death" class="end-btn" data-i18n="playAgain">PLAY AGAIN</button> <button id="menu-btn-death" class="end-btn" data-i18n="mainMenu">MAIN MENU</button></div></div>',c=Ni(),l=xi("section"),l.innerHTML='<div class="popup-container pause"><h1 data-i18n="pauseTitle">PAUSED</h1> <div class="end-game-btns"><button id="resume-btn" class="end-btn continue-highlight" data-i18n="resume">RESUME</button> <button id="menu-btn-pause" class="end-btn" data-i18n="mainMenu">MAIN MENU</button></div></div>',d=Ni(),f=xi("div"),f.innerHTML='<span class="saving-icon">💾</span> <span data-i18n="saving">SAVING...</span>',p=Ni(),v=xi("main"),v.innerHTML='<button id="mobile-pause-btn" class="hidden" aria-label="Pause Game">✕</button> <button id="mobile-teleport-exit-btn" class="hidden" aria-label="Exit Teleport Map">✕</button> <div id="left-hud-panel" class="intro-hidden"><div class="hud-item-group"><div class="keys-title" data-i18n="hudKeys">KEYS</div> <div class="keys-counter"><span id="keys-collected-count">0</span> / <span id="keys-total-count">0</span></div> <div id="keys-list-container"></div></div> <div class="hud-item-group" id="pathfinder-hud-group"><div class="pathfinders-title" data-i18n="hudPathfinders">PATHFINDERS</div> <div class="pathfinders-counter"><span id="pathfinders-remaining-count">0</span> / <span id="pathfinders-total-count">0</span></div></div></div> <div id="map-area-container" class="intro-hidden"><div id="hunter-status-panel"><span class="status-label" data-i18n="statusLabel">HUNTER STATUS:</span> <div class="status-marquee-container"><span id="hunter-status-val" class="status-marquee-text status--scanning" data-i18n="statusScanning">SCANNING</span></div></div> <div style="position: relative; display: flex; flex-direction: column; align-items: center; width: 100%; max-width: 90vw; margin-bottom: calc(var(--h-unit) * 2); margin-bottom: calc(var(--d-h-unit) * 2);"><canvas id="main-2d-canvas" aria-label="2D Navigation Map" style="margin-bottom: 0;"></canvas> <button id="mobile-zoom-btn" aria-label="Toggle Zoom"><svg id="zoom-out-icon" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="width: 100%; height: 100%;"><circle cx="11" cy="11" r="6"></circle><line x1="21" y1="21" x2="15.5" y2="15.5"></line><line x1="8" y1="11" x2="14" y2="11"></line></svg> <svg id="zoom-in-icon" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="width: 100%; height: 100%;" class="hidden"><circle cx="11" cy="11" r="6"></circle><line x1="21" y1="21" x2="15.5" y2="15.5"></line><line x1="11" y1="8" x2="11" y2="14"></line><line x1="8" y1="11" x2="14" y2="11"></line></svg></button></div> <div id="proximeter-container" class="hidden"><div class="proximeter-label" data-i18n="proximityDetector">PROXIMITY DETECTOR</div> <div class="proximeter-bar"><span class="proximeter-cell" data-index="1"></span> <span class="proximeter-cell" data-index="2"></span> <span class="proximeter-cell" data-index="3"></span> <span class="proximeter-cell" data-index="4"></span> <span class="proximeter-cell" data-index="5"></span> <span class="proximeter-cell" data-index="6"></span> <span class="proximeter-cell" data-index="7"></span> <span class="proximeter-cell" data-index="8"></span> <span class="proximeter-cell" data-index="9"></span> <span class="proximeter-cell" data-index="10"></span></div></div> <div id="bottom-hud-container" class="intro-hidden"><div id="floor-display" aria-live="polite"><span class="hud-label" data-i18n="hudFloor">Floor</span> <span id="current-floor">0</span></div> <div id="visited-display" aria-live="polite"><span class="hud-label" data-i18n="hudVisited">Visited</span> <span class="visited-value"><span id="visited-percent">0</span>%</span></div></div></div> <div id="right-hud-panel" class="intro-hidden"><aside id="map-legend"><h3 data-i18n="mapLegendTitle">MAP LEGEND</h3> <div class="legend-item"><span class="color-box color-box--visited"></span> <span data-i18n="legendVisited">Visited Path</span></div> <div class="legend-item"><span class="color-box color-box--known"></span> <span data-i18n="legendKnown">Known Path</span></div> <div class="legend-item"><span class="color-box color-box--start"></span> <span data-i18n="legendStart">Starting Point</span></div> <div class="legend-item"><span class="color-box color-box--exit"></span> <span data-i18n="legendExit">Maze Exit</span></div> <div id="legend-hunter" class="legend-item"><span class="color-box color-box--hunter"></span> <span data-i18n="legendHunter">Void Hunter</span></div> <div class="legend-item"><span class="color-box color-box--teleport"></span> <span data-i18n="legendTeleport">Teleport</span></div> <div class="legend-item"><span class="symbol-box"><svg viewBox="0 0 24 24" fill="none" style="width: 100%; height: 100%;"><path d="M12 2L5 9H9V11H15V9H19L12 2Z" fill="#00ffff"></path><path d="M12 22L19 15H15V13H9V15H5L12 22Z" fill="#ff00ff"></path></svg></span> <span data-i18n="legendElevator">Elevator</span></div></aside> <aside id="controls-hint"><h3 data-i18n="controlsHintTitle">CONTROLS HINT</h3> <div id="controls-hint-content"></div></aside></div> <nav id="mobile-controls" class="hidden"><button id="mobile-down" class="mobile-btn" disabled="" aria-label="Go Down">▼</button> <button id="mobile-map" class="mobile-btn" disabled="" aria-label="Open Map" data-i18n="map">MAP</button> <button id="mobile-up" class="mobile-btn" disabled="" aria-label="Go Up">▲</button></nav> <div id="map3d-container" class="hidden"></div>',Ne(t,"id","start-menu"),Ne(i,"id","story-screen"),Ne(i,"class","hidden"),Ne(a,"id","victory-screen"),Ne(a,"class","hidden"),Ne(r,"id","game-over-screen"),Ne(r,"class","hidden"),Ne(l,"id","pause-screen"),Ne(l,"class","hidden"),Ne(f,"id","saving-indicator"),Ne(f,"class","hidden"),Ne(v,"id","game-container")},m(m,g){Re(m,t,g),Re(m,e,g),Re(m,i,g),Re(m,n,g),Re(m,a,g),Re(m,o,g),Re(m,r,g),Re(m,c,g),Re(m,l,g),Re(m,d,g),Re(m,f,g),Re(m,p,g),Re(m,v,g)},p:an,i:an,o:an,d(m){m&&(Ae(t),Ae(e),Ae(i),Ae(n),Ae(a),Ae(o),Ae(r),Ae(c),Ae(l),Ae(d),Ae(f),Ae(p),Ae(v))}}}function rm(s){let t=null;function e(a){var o,r,c;t&&t.destroy(),sl(),(o=document.getElementById("start-menu"))==null||o.classList.add("hidden"),(r=document.getElementById("victory-screen"))==null||r.classList.add("hidden"),(c=document.getElementById("game-over-screen"))==null||c.classList.add("hidden"),t=new vo(a,J.BRANCHING_FACTOR)}function i(){var o,r,c;const a=nl();a&&(t&&t.destroy(),(o=document.getElementById("start-menu"))==null||o.classList.add("hidden"),(r=document.getElementById("victory-screen"))==null||r.classList.add("hidden"),(c=document.getElementById("game-over-screen"))==null||c.classList.add("hidden"),t=new vo(a.degree,a.branchingFactor,a))}function n(){var o,r,c;t&&t.destroy(),(o=document.getElementById("victory-screen"))==null||o.classList.add("hidden"),(r=document.getElementById("game-over-screen"))==null||r.classList.add("hidden");const a=document.getElementById("continue-btn-menu");a&&(a.style.display=go()?"":"none"),(c=document.getElementById("start-menu"))==null||c.classList.remove("hidden")}return vl(()=>{Qo();const a=document.getElementById("maze-degree"),o=document.getElementById("degree-val"),r=document.getElementById("hunter-count"),c=document.getElementById("teleport-count"),l=document.getElementById("keys-count"),d=document.getElementById("pathfinder-count"),f=document.getElementById("safe-mode"),p=T=>{const N=f&&f.checked?0:J.getHunterCount(T);r&&(r.innerText=String(N),r.style.color=N>0?"#f00":"#88ccff")};f&&a&&(f.onchange=()=>{p(parseInt(a.value))});const v=T=>{const I=J.getTeleportCount(T);c&&(c.innerText=String(I))},m=T=>{const I=J.getHunterCount(T)*2;l&&(l.innerText=String(I))},g=T=>{const I=J.getPathfinderCount(T);d&&(d.innerText=String(I))};if(a){J.MIN_MAZE_DEGREE!==void 0&&(a.min=String(J.MIN_MAZE_DEGREE)),J.MAX_MAZE_DEGREE!==void 0&&(a.max=String(J.MAX_MAZE_DEGREE)),J.MAZE_DEGREE!==void 0&&(a.value=String(J.MAZE_DEGREE)),a.oninput=()=>{const I=parseInt(a.value);o&&(o.innerText=String(I)),p(I),v(I),m(I),g(I)};const T=parseInt(a.value);o&&(o.innerText=String(T)),p(T),v(T),m(T),g(T)}const u=document.getElementById("continue-btn-menu");u&&(u.style.display=go()?"":"none");const h=document.getElementById("start-btn");h&&a&&(h.onclick=()=>{e(parseInt(a.value))});const _=document.getElementById("continue-btn-menu");_&&(_.onclick=()=>{i()});const y=document.getElementById("restart-btn-victory");y&&a&&(y.onclick=()=>{e(parseInt(a.value))});const x=document.getElementById("menu-btn-victory");x&&(x.onclick=()=>{n()});const E=document.getElementById("continue-btn-death");E&&(E.onclick=()=>{i()});const b=document.getElementById("retry-btn-death");b&&a&&(b.onclick=()=>{e(parseInt(a.value))});const A=document.getElementById("menu-btn-death");A&&(A.onclick=()=>{n()});const D=document.getElementById("resume-btn");D&&(D.onclick=()=>{t&&t.togglePause()});const M=document.getElementById("menu-btn-pause");M&&(M.onclick=()=>{n()})}),[]}class om extends Pl{constructor(t){super(),wl(this,t,rm,am,ul,{})}}new om({target:document.getElementById("app")});
