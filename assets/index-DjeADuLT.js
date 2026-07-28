var hl=Object.defineProperty;var dl=(s,t,e)=>t in s?hl(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var O=(s,t,e)=>dl(s,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerPolicy&&(a.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?a.credentials="include":n.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(n){if(n.ep)return;n.ep=!0;const a=e(n);fetch(n.href,a)}})();function an(){}function _o(s){return s()}function Fa(){return Object.create(null)}function ms(s){s.forEach(_o)}function yo(s){return typeof s=="function"}function ul(s,t){return s!=s?t==t:s!==t||s&&typeof s=="object"||typeof s=="function"}function fl(s){return Object.keys(s).length===0}function Re(s,t,e){s.insertBefore(t,e||null)}function Ae(s){s.parentNode&&s.parentNode.removeChild(s)}function xi(s){return document.createElement(s)}function pl(s){return document.createTextNode(s)}function Ni(){return pl(" ")}function Ne(s,t,e){e==null?s.removeAttribute(t):s.getAttribute(t)!==e&&s.setAttribute(t,e)}function ml(s){return Array.from(s.childNodes)}let Sn;function Mn(s){Sn=s}function gl(){if(!Sn)throw new Error("Function called outside component initialization");return Sn}function vl(s){gl().$$.on_mount.push(s)}const en=[],Ba=[];let rn=[];const Ga=[],_l=Promise.resolve();let sa=!1;function yl(){sa||(sa=!0,_l.then(xo))}function aa(s){rn.push(s)}const Ss=new Set;let Ui=0;function xo(){if(Ui!==0)return;const s=Sn;do{try{for(;Ui<en.length;){const t=en[Ui];Ui++,Mn(t),xl(t.$$)}}catch(t){throw en.length=0,Ui=0,t}for(Mn(null),en.length=0,Ui=0;Ba.length;)Ba.pop()();for(let t=0;t<rn.length;t+=1){const e=rn[t];Ss.has(e)||(Ss.add(e),e())}rn.length=0}while(en.length);for(;Ga.length;)Ga.pop()();sa=!1,Ss.clear(),Mn(s)}function xl(s){if(s.fragment!==null){s.update(),ms(s.before_update);const t=s.dirty;s.dirty=[-1],s.fragment&&s.fragment.p(s.ctx,t),s.after_update.forEach(aa)}}function Ml(s){const t=[],e=[];rn.forEach(i=>s.indexOf(i)===-1?t.push(i):e.push(i)),e.forEach(i=>i()),rn=t}const Tl=new Set;function El(s,t){s&&s.i&&(Tl.delete(s),s.i(t))}function Sl(s,t,e){const{fragment:i,after_update:n}=s.$$;i&&i.m(t,e),aa(()=>{const a=s.$$.on_mount.map(_o).filter(yo);s.$$.on_destroy?s.$$.on_destroy.push(...a):ms(a),s.$$.on_mount=[]}),n.forEach(aa)}function bl(s,t){const e=s.$$;e.fragment!==null&&(Ml(e.after_update),ms(e.on_destroy),e.fragment&&e.fragment.d(t),e.on_destroy=e.fragment=null,e.ctx=[])}function Al(s,t){s.$$.dirty[0]===-1&&(en.push(s),yl(),s.$$.dirty.fill(0)),s.$$.dirty[t/31|0]|=1<<t%31}function wl(s,t,e,i,n,a,o=null,r=[-1]){const c=Sn;Mn(s);const l=s.$$={fragment:null,ctx:[],props:a,update:an,not_equal:n,bound:Fa(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(c?c.$$.context:[])),callbacks:Fa(),dirty:r,skip_bound:!1,root:t.target||c.$$.root};o&&o(l.root);let u=!1;if(l.ctx=e?e(s,t.props||{},(f,p,...g)=>{const m=g.length?g[0]:p;return l.ctx&&n(l.ctx[f],l.ctx[f]=m)&&(!l.skip_bound&&l.bound[f]&&l.bound[f](m),u&&Al(s,f)),p}):[],l.update(),u=!0,ms(l.before_update),l.fragment=i?i(l.ctx):!1,t.target){if(t.hydrate){const f=ml(t.target);l.fragment&&l.fragment.l(f),f.forEach(Ae)}else l.fragment&&l.fragment.c();t.intro&&El(s.$$.fragment),Sl(s,t.target,t.anchor),xo()}Mn(c)}class Pl{constructor(){O(this,"$$");O(this,"$$set")}$destroy(){bl(this,1),this.$destroy=an}$on(t,e){if(!yo(e))return an;const i=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return i.push(e),()=>{const n=i.indexOf(e);n!==-1&&i.splice(n,1)}}$set(t){this.$$set&&!fl(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const Cl="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Cl);/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ya="160",zi={ROTATE:0,DOLLY:1,PAN:2},Fi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Rl=0,ka=1,Ll=2,Mo=1,Il=2,ii=3,vi=0,Pe=1,ni=2,pi=0,on=1,Ha=2,Va=3,Wa=4,Dl=5,Ai=100,Ol=101,Nl=102,Ya=103,Xa=104,Ul=200,zl=201,Fl=202,Bl=203,ra=204,oa=205,Gl=206,kl=207,Hl=208,Vl=209,Wl=210,Yl=211,Xl=212,$l=213,Kl=214,ql=0,Zl=1,jl=2,rs=3,Jl=4,Ql=5,tc=6,ec=7,xa=0,ic=1,nc=2,mi=0,sc=1,ac=2,rc=3,oc=4,lc=5,cc=6,To=300,cn=301,hn=302,la=303,ca=304,gs=306,ha=1e3,We=1001,da=1002,Ee=1003,$a=1004,bs=1005,ze=1006,hc=1007,bn=1008,gi=1009,dc=1010,uc=1011,Ma=1012,Eo=1013,ui=1014,fi=1015,An=1016,So=1017,bo=1018,Pi=1020,fc=1021,Ye=1023,pc=1024,mc=1025,Ci=1026,dn=1027,gc=1028,Ao=1029,vc=1030,wo=1031,Po=1033,As=33776,ws=33777,Ps=33778,Cs=33779,Ka=35840,qa=35841,Za=35842,ja=35843,Co=36196,Ja=37492,Qa=37496,tr=37808,er=37809,ir=37810,nr=37811,sr=37812,ar=37813,rr=37814,or=37815,lr=37816,cr=37817,hr=37818,dr=37819,ur=37820,fr=37821,Rs=36492,pr=36494,mr=36495,_c=36283,gr=36284,vr=36285,_r=36286,Ro=3e3,Ri=3001,yc=3200,xc=3201,Lo=0,Mc=1,Be="",ge="srgb",ai="srgb-linear",Ta="display-p3",vs="display-p3-linear",os="linear",ee="srgb",ls="rec709",cs="p3",Bi=7680,yr=519,Tc=512,Ec=513,Sc=514,Io=515,bc=516,Ac=517,wc=518,Pc=519,xr=35044,Mr="300 es",ua=1035,si=2e3,hs=2001;class Oi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const n=this._listeners[t];if(n!==void 0){const a=n.indexOf(e);a!==-1&&n.splice(a,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const n=i.slice(0);for(let a=0,o=n.length;a<o;a++)n[a].call(this,t);t.target=null}}}const _e=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ss=Math.PI/180,fa=180/Math.PI;function Pn(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(_e[s&255]+_e[s>>8&255]+_e[s>>16&255]+_e[s>>24&255]+"-"+_e[t&255]+_e[t>>8&255]+"-"+_e[t>>16&15|64]+_e[t>>24&255]+"-"+_e[e&63|128]+_e[e>>8&255]+"-"+_e[e>>16&255]+_e[e>>24&255]+_e[i&255]+_e[i>>8&255]+_e[i>>16&255]+_e[i>>24&255]).toLowerCase()}function Se(s,t,e){return Math.max(t,Math.min(e,s))}function Cc(s,t){return(s%t+t)%t}function Ls(s,t,e){return(1-e)*s+e*t}function Tr(s){return(s&s-1)===0&&s!==0}function pa(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function mn(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function be(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Rc={DEG2RAD:ss};class Ut{constructor(t=0,e=0){Ut.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,n=t.elements;return this.x=n[0]*e+n[3]*i+n[6],this.y=n[1]*e+n[4]*i+n[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Se(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),n=Math.sin(e),a=this.x-t.x,o=this.y-t.y;return this.x=a*i-o*n+t.x,this.y=a*n+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Kt{constructor(t,e,i,n,a,o,r,c,l){Kt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,n,a,o,r,c,l)}set(t,e,i,n,a,o,r,c,l){const u=this.elements;return u[0]=t,u[1]=n,u[2]=r,u[3]=e,u[4]=a,u[5]=c,u[6]=i,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,n=e.elements,a=this.elements,o=i[0],r=i[3],c=i[6],l=i[1],u=i[4],f=i[7],p=i[2],g=i[5],m=i[8],_=n[0],d=n[3],h=n[6],x=n[1],v=n[4],y=n[7],T=n[2],A=n[5],S=n[8];return a[0]=o*_+r*x+c*T,a[3]=o*d+r*v+c*A,a[6]=o*h+r*y+c*S,a[1]=l*_+u*x+f*T,a[4]=l*d+u*v+f*A,a[7]=l*h+u*y+f*S,a[2]=p*_+g*x+m*T,a[5]=p*d+g*v+m*A,a[8]=p*h+g*y+m*S,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],n=t[2],a=t[3],o=t[4],r=t[5],c=t[6],l=t[7],u=t[8];return e*o*u-e*r*l-i*a*u+i*r*c+n*a*l-n*o*c}invert(){const t=this.elements,e=t[0],i=t[1],n=t[2],a=t[3],o=t[4],r=t[5],c=t[6],l=t[7],u=t[8],f=u*o-r*l,p=r*c-u*a,g=l*a-o*c,m=e*f+i*p+n*g;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/m;return t[0]=f*_,t[1]=(n*l-u*i)*_,t[2]=(r*i-n*o)*_,t[3]=p*_,t[4]=(u*e-n*c)*_,t[5]=(n*a-r*e)*_,t[6]=g*_,t[7]=(i*c-l*e)*_,t[8]=(o*e-i*a)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,n,a,o,r){const c=Math.cos(a),l=Math.sin(a);return this.set(i*c,i*l,-i*(c*o+l*r)+o+t,-n*l,n*c,-n*(-l*o+c*r)+r+e,0,0,1),this}scale(t,e){return this.premultiply(Is.makeScale(t,e)),this}rotate(t){return this.premultiply(Is.makeRotation(-t)),this}translate(t,e){return this.premultiply(Is.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let n=0;n<9;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Is=new Kt;function Do(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function ds(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Lc(){const s=ds("canvas");return s.style.display="block",s}const Er={};function Tn(s){s in Er||(Er[s]=!0,console.warn(s))}const Sr=new Kt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),br=new Kt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Dn={[ai]:{transfer:os,primaries:ls,toReference:s=>s,fromReference:s=>s},[ge]:{transfer:ee,primaries:ls,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[vs]:{transfer:os,primaries:cs,toReference:s=>s.applyMatrix3(br),fromReference:s=>s.applyMatrix3(Sr)},[Ta]:{transfer:ee,primaries:cs,toReference:s=>s.convertSRGBToLinear().applyMatrix3(br),fromReference:s=>s.applyMatrix3(Sr).convertLinearToSRGB()}},Ic=new Set([ai,vs]),Qt={enabled:!0,_workingColorSpace:ai,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!Ic.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,t,e){if(this.enabled===!1||t===e||!t||!e)return s;const i=Dn[t].toReference,n=Dn[e].fromReference;return n(i(s))},fromWorkingColorSpace:function(s,t){return this.convert(s,this._workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this._workingColorSpace)},getPrimaries:function(s){return Dn[s].primaries},getTransfer:function(s){return s===Be?os:Dn[s].transfer}};function ln(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Ds(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Gi;class Oo{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Gi===void 0&&(Gi=ds("canvas")),Gi.width=t.width,Gi.height=t.height;const i=Gi.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=Gi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=ds("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const n=i.getImageData(0,0,t.width,t.height),a=n.data;for(let o=0;o<a.length;o++)a[o]=ln(a[o]/255)*255;return i.putImageData(n,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(ln(e[i]/255)*255):e[i]=ln(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Dc=0;class No{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Dc++}),this.uuid=Pn(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let a;if(Array.isArray(n)){a=[];for(let o=0,r=n.length;o<r;o++)n[o].isDataTexture?a.push(Os(n[o].image)):a.push(Os(n[o]))}else a=Os(n);i.url=a}return e||(t.images[this.uuid]=i),i}}function Os(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Oo.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Oc=0;class De extends Oi{constructor(t=De.DEFAULT_IMAGE,e=De.DEFAULT_MAPPING,i=We,n=We,a=ze,o=bn,r=Ye,c=gi,l=De.DEFAULT_ANISOTROPY,u=Be){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Oc++}),this.uuid=Pn(),this.name="",this.source=new No(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=a,this.minFilter=o,this.anisotropy=l,this.format=r,this.internalFormat=null,this.type=c,this.offset=new Ut(0,0),this.repeat=new Ut(1,1),this.center=new Ut(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Kt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(Tn("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===Ri?ge:Be),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==To)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ha:t.x=t.x-Math.floor(t.x);break;case We:t.x=t.x<0?0:1;break;case da:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ha:t.y=t.y-Math.floor(t.y);break;case We:t.y=t.y<0?0:1;break;case da:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Tn("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===ge?Ri:Ro}set encoding(t){Tn("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===Ri?ge:Be}}De.DEFAULT_IMAGE=null;De.DEFAULT_MAPPING=To;De.DEFAULT_ANISOTROPY=1;class me{constructor(t=0,e=0,i=0,n=1){me.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=n}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,n){return this.x=t,this.y=e,this.z=i,this.w=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,n=this.z,a=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*n+o[12]*a,this.y=o[1]*e+o[5]*i+o[9]*n+o[13]*a,this.z=o[2]*e+o[6]*i+o[10]*n+o[14]*a,this.w=o[3]*e+o[7]*i+o[11]*n+o[15]*a,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,n,a;const c=t.elements,l=c[0],u=c[4],f=c[8],p=c[1],g=c[5],m=c[9],_=c[2],d=c[6],h=c[10];if(Math.abs(u-p)<.01&&Math.abs(f-_)<.01&&Math.abs(m-d)<.01){if(Math.abs(u+p)<.1&&Math.abs(f+_)<.1&&Math.abs(m+d)<.1&&Math.abs(l+g+h-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const v=(l+1)/2,y=(g+1)/2,T=(h+1)/2,A=(u+p)/4,S=(f+_)/4,I=(m+d)/4;return v>y&&v>T?v<.01?(i=0,n=.707106781,a=.707106781):(i=Math.sqrt(v),n=A/i,a=S/i):y>T?y<.01?(i=.707106781,n=0,a=.707106781):(n=Math.sqrt(y),i=A/n,a=I/n):T<.01?(i=.707106781,n=.707106781,a=0):(a=Math.sqrt(T),i=S/a,n=I/a),this.set(i,n,a,e),this}let x=Math.sqrt((d-m)*(d-m)+(f-_)*(f-_)+(p-u)*(p-u));return Math.abs(x)<.001&&(x=1),this.x=(d-m)/x,this.y=(f-_)/x,this.z=(p-u)/x,this.w=Math.acos((l+g+h-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Nc extends Oi{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new me(0,0,t,e),this.scissorTest=!1,this.viewport=new me(0,0,t,e);const n={width:t,height:e,depth:1};i.encoding!==void 0&&(Tn("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Ri?ge:Be),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ze,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new De(n,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(t,e,i=1){(this.width!==t||this.height!==e||this.depth!==i)&&(this.width=t,this.height=e,this.depth=i,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new No(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Li extends Nc{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class Uo extends De{constructor(t=null,e=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=Ee,this.minFilter=Ee,this.wrapR=We,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Uc extends De{constructor(t=null,e=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=Ee,this.minFilter=Ee,this.wrapR=We,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ii{constructor(t=0,e=0,i=0,n=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=n}static slerpFlat(t,e,i,n,a,o,r){let c=i[n+0],l=i[n+1],u=i[n+2],f=i[n+3];const p=a[o+0],g=a[o+1],m=a[o+2],_=a[o+3];if(r===0){t[e+0]=c,t[e+1]=l,t[e+2]=u,t[e+3]=f;return}if(r===1){t[e+0]=p,t[e+1]=g,t[e+2]=m,t[e+3]=_;return}if(f!==_||c!==p||l!==g||u!==m){let d=1-r;const h=c*p+l*g+u*m+f*_,x=h>=0?1:-1,v=1-h*h;if(v>Number.EPSILON){const T=Math.sqrt(v),A=Math.atan2(T,h*x);d=Math.sin(d*A)/T,r=Math.sin(r*A)/T}const y=r*x;if(c=c*d+p*y,l=l*d+g*y,u=u*d+m*y,f=f*d+_*y,d===1-r){const T=1/Math.sqrt(c*c+l*l+u*u+f*f);c*=T,l*=T,u*=T,f*=T}}t[e]=c,t[e+1]=l,t[e+2]=u,t[e+3]=f}static multiplyQuaternionsFlat(t,e,i,n,a,o){const r=i[n],c=i[n+1],l=i[n+2],u=i[n+3],f=a[o],p=a[o+1],g=a[o+2],m=a[o+3];return t[e]=r*m+u*f+c*g-l*p,t[e+1]=c*m+u*p+l*f-r*g,t[e+2]=l*m+u*g+r*p-c*f,t[e+3]=u*m-r*f-c*p-l*g,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,n){return this._x=t,this._y=e,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,n=t._y,a=t._z,o=t._order,r=Math.cos,c=Math.sin,l=r(i/2),u=r(n/2),f=r(a/2),p=c(i/2),g=c(n/2),m=c(a/2);switch(o){case"XYZ":this._x=p*u*f+l*g*m,this._y=l*g*f-p*u*m,this._z=l*u*m+p*g*f,this._w=l*u*f-p*g*m;break;case"YXZ":this._x=p*u*f+l*g*m,this._y=l*g*f-p*u*m,this._z=l*u*m-p*g*f,this._w=l*u*f+p*g*m;break;case"ZXY":this._x=p*u*f-l*g*m,this._y=l*g*f+p*u*m,this._z=l*u*m+p*g*f,this._w=l*u*f-p*g*m;break;case"ZYX":this._x=p*u*f-l*g*m,this._y=l*g*f+p*u*m,this._z=l*u*m-p*g*f,this._w=l*u*f+p*g*m;break;case"YZX":this._x=p*u*f+l*g*m,this._y=l*g*f+p*u*m,this._z=l*u*m-p*g*f,this._w=l*u*f-p*g*m;break;case"XZY":this._x=p*u*f-l*g*m,this._y=l*g*f-p*u*m,this._z=l*u*m+p*g*f,this._w=l*u*f+p*g*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,n=Math.sin(i);return this._x=t.x*n,this._y=t.y*n,this._z=t.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],n=e[4],a=e[8],o=e[1],r=e[5],c=e[9],l=e[2],u=e[6],f=e[10],p=i+r+f;if(p>0){const g=.5/Math.sqrt(p+1);this._w=.25/g,this._x=(u-c)*g,this._y=(a-l)*g,this._z=(o-n)*g}else if(i>r&&i>f){const g=2*Math.sqrt(1+i-r-f);this._w=(u-c)/g,this._x=.25*g,this._y=(n+o)/g,this._z=(a+l)/g}else if(r>f){const g=2*Math.sqrt(1+r-i-f);this._w=(a-l)/g,this._x=(n+o)/g,this._y=.25*g,this._z=(c+u)/g}else{const g=2*Math.sqrt(1+f-i-r);this._w=(o-n)/g,this._x=(a+l)/g,this._y=(c+u)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Se(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const n=Math.min(1,e/i);return this.slerp(t,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,n=t._y,a=t._z,o=t._w,r=e._x,c=e._y,l=e._z,u=e._w;return this._x=i*u+o*r+n*l-a*c,this._y=n*u+o*c+a*r-i*l,this._z=a*u+o*l+i*c-n*r,this._w=o*u-i*r-n*c-a*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,n=this._y,a=this._z,o=this._w;let r=o*t._w+i*t._x+n*t._y+a*t._z;if(r<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,r=-r):this.copy(t),r>=1)return this._w=o,this._x=i,this._y=n,this._z=a,this;const c=1-r*r;if(c<=Number.EPSILON){const g=1-e;return this._w=g*o+e*this._w,this._x=g*i+e*this._x,this._y=g*n+e*this._y,this._z=g*a+e*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,r),f=Math.sin((1-e)*u)/l,p=Math.sin(e*u)/l;return this._w=o*f+this._w*p,this._x=i*f+this._x*p,this._y=n*f+this._y*p,this._z=a*f+this._z*p,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=Math.random(),e=Math.sqrt(1-t),i=Math.sqrt(t),n=2*Math.PI*Math.random(),a=2*Math.PI*Math.random();return this.set(e*Math.cos(n),i*Math.sin(a),i*Math.cos(a),e*Math.sin(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ${constructor(t=0,e=0,i=0){$.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ar.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ar.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,n=this.z,a=t.elements;return this.x=a[0]*e+a[3]*i+a[6]*n,this.y=a[1]*e+a[4]*i+a[7]*n,this.z=a[2]*e+a[5]*i+a[8]*n,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,n=this.z,a=t.elements,o=1/(a[3]*e+a[7]*i+a[11]*n+a[15]);return this.x=(a[0]*e+a[4]*i+a[8]*n+a[12])*o,this.y=(a[1]*e+a[5]*i+a[9]*n+a[13])*o,this.z=(a[2]*e+a[6]*i+a[10]*n+a[14])*o,this}applyQuaternion(t){const e=this.x,i=this.y,n=this.z,a=t.x,o=t.y,r=t.z,c=t.w,l=2*(o*n-r*i),u=2*(r*e-a*n),f=2*(a*i-o*e);return this.x=e+c*l+o*f-r*u,this.y=i+c*u+r*l-a*f,this.z=n+c*f+a*u-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,n=this.z,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*n,this.y=a[1]*e+a[5]*i+a[9]*n,this.z=a[2]*e+a[6]*i+a[10]*n,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,n=t.y,a=t.z,o=e.x,r=e.y,c=e.z;return this.x=n*c-a*r,this.y=a*o-i*c,this.z=i*r-n*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Ns.copy(this).projectOnVector(t),this.sub(Ns)}reflect(t){return this.sub(Ns.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Se(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,n=this.z-t.z;return e*e+i*i+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const n=Math.sin(e)*t;return this.x=n*Math.sin(i),this.y=Math.cos(e)*t,this.z=n*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),n=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=n,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,i=Math.sqrt(1-t**2);return this.x=i*Math.cos(e),this.y=i*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ns=new $,Ar=new Ii;class Cn{constructor(t=new $(1/0,1/0,1/0),e=new $(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Ge.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Ge.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=Ge.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const a=i.getAttribute("position");if(e===!0&&a!==void 0&&t.isInstancedMesh!==!0)for(let o=0,r=a.count;o<r;o++)t.isMesh===!0?t.getVertexPosition(o,Ge):Ge.fromBufferAttribute(a,o),Ge.applyMatrix4(t.matrixWorld),this.expandByPoint(Ge);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),On.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),On.copy(i.boundingBox)),On.applyMatrix4(t.matrixWorld),this.union(On)}const n=t.children;for(let a=0,o=n.length;a<o;a++)this.expandByObject(n[a],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,Ge),Ge.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(gn),Nn.subVectors(this.max,gn),ki.subVectors(t.a,gn),Hi.subVectors(t.b,gn),Vi.subVectors(t.c,gn),ri.subVectors(Hi,ki),oi.subVectors(Vi,Hi),Mi.subVectors(ki,Vi);let e=[0,-ri.z,ri.y,0,-oi.z,oi.y,0,-Mi.z,Mi.y,ri.z,0,-ri.x,oi.z,0,-oi.x,Mi.z,0,-Mi.x,-ri.y,ri.x,0,-oi.y,oi.x,0,-Mi.y,Mi.x,0];return!Us(e,ki,Hi,Vi,Nn)||(e=[1,0,0,0,1,0,0,0,1],!Us(e,ki,Hi,Vi,Nn))?!1:(Un.crossVectors(ri,oi),e=[Un.x,Un.y,Un.z],Us(e,ki,Hi,Vi,Nn))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ge).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ge).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(je[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),je[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),je[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),je[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),je[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),je[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),je[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),je[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(je),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const je=[new $,new $,new $,new $,new $,new $,new $,new $],Ge=new $,On=new Cn,ki=new $,Hi=new $,Vi=new $,ri=new $,oi=new $,Mi=new $,gn=new $,Nn=new $,Un=new $,Ti=new $;function Us(s,t,e,i,n){for(let a=0,o=s.length-3;a<=o;a+=3){Ti.fromArray(s,a);const r=n.x*Math.abs(Ti.x)+n.y*Math.abs(Ti.y)+n.z*Math.abs(Ti.z),c=t.dot(Ti),l=e.dot(Ti),u=i.dot(Ti);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>r)return!1}return!0}const zc=new Cn,vn=new $,zs=new $;class Ea{constructor(t=new $,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):zc.setFromPoints(t).getCenter(i);let n=0;for(let a=0,o=t.length;a<o;a++)n=Math.max(n,i.distanceToSquared(t[a]));return this.radius=Math.sqrt(n),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;vn.subVectors(t,this.center);const e=vn.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),n=(i-this.radius)*.5;this.center.addScaledVector(vn,n/i),this.radius+=n}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(zs.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(vn.copy(t.center).add(zs)),this.expandByPoint(vn.copy(t.center).sub(zs))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Je=new $,Fs=new $,zn=new $,li=new $,Bs=new $,Fn=new $,Gs=new $;class Sa{constructor(t=new $,e=new $(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Je)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Je.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Je.copy(this.origin).addScaledVector(this.direction,e),Je.distanceToSquared(t))}distanceSqToSegment(t,e,i,n){Fs.copy(t).add(e).multiplyScalar(.5),zn.copy(e).sub(t).normalize(),li.copy(this.origin).sub(Fs);const a=t.distanceTo(e)*.5,o=-this.direction.dot(zn),r=li.dot(this.direction),c=-li.dot(zn),l=li.lengthSq(),u=Math.abs(1-o*o);let f,p,g,m;if(u>0)if(f=o*c-r,p=o*r-c,m=a*u,f>=0)if(p>=-m)if(p<=m){const _=1/u;f*=_,p*=_,g=f*(f+o*p+2*r)+p*(o*f+p+2*c)+l}else p=a,f=Math.max(0,-(o*p+r)),g=-f*f+p*(p+2*c)+l;else p=-a,f=Math.max(0,-(o*p+r)),g=-f*f+p*(p+2*c)+l;else p<=-m?(f=Math.max(0,-(-o*a+r)),p=f>0?-a:Math.min(Math.max(-a,-c),a),g=-f*f+p*(p+2*c)+l):p<=m?(f=0,p=Math.min(Math.max(-a,-c),a),g=p*(p+2*c)+l):(f=Math.max(0,-(o*a+r)),p=f>0?a:Math.min(Math.max(-a,-c),a),g=-f*f+p*(p+2*c)+l);else p=o>0?-a:a,f=Math.max(0,-(o*p+r)),g=-f*f+p*(p+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,f),n&&n.copy(Fs).addScaledVector(zn,p),g}intersectSphere(t,e){Je.subVectors(t.center,this.origin);const i=Je.dot(this.direction),n=Je.dot(Je)-i*i,a=t.radius*t.radius;if(n>a)return null;const o=Math.sqrt(a-n),r=i-o,c=i+o;return c<0?null:r<0?this.at(c,e):this.at(r,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,n,a,o,r,c;const l=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,p=this.origin;return l>=0?(i=(t.min.x-p.x)*l,n=(t.max.x-p.x)*l):(i=(t.max.x-p.x)*l,n=(t.min.x-p.x)*l),u>=0?(a=(t.min.y-p.y)*u,o=(t.max.y-p.y)*u):(a=(t.max.y-p.y)*u,o=(t.min.y-p.y)*u),i>o||a>n||((a>i||isNaN(i))&&(i=a),(o<n||isNaN(n))&&(n=o),f>=0?(r=(t.min.z-p.z)*f,c=(t.max.z-p.z)*f):(r=(t.max.z-p.z)*f,c=(t.min.z-p.z)*f),i>c||r>n)||((r>i||i!==i)&&(i=r),(c<n||n!==n)&&(n=c),n<0)?null:this.at(i>=0?i:n,e)}intersectsBox(t){return this.intersectBox(t,Je)!==null}intersectTriangle(t,e,i,n,a){Bs.subVectors(e,t),Fn.subVectors(i,t),Gs.crossVectors(Bs,Fn);let o=this.direction.dot(Gs),r;if(o>0){if(n)return null;r=1}else if(o<0)r=-1,o=-o;else return null;li.subVectors(this.origin,t);const c=r*this.direction.dot(Fn.crossVectors(li,Fn));if(c<0)return null;const l=r*this.direction.dot(Bs.cross(li));if(l<0||c+l>o)return null;const u=-r*li.dot(Gs);return u<0?null:this.at(u/o,a)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class he{constructor(t,e,i,n,a,o,r,c,l,u,f,p,g,m,_,d){he.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,n,a,o,r,c,l,u,f,p,g,m,_,d)}set(t,e,i,n,a,o,r,c,l,u,f,p,g,m,_,d){const h=this.elements;return h[0]=t,h[4]=e,h[8]=i,h[12]=n,h[1]=a,h[5]=o,h[9]=r,h[13]=c,h[2]=l,h[6]=u,h[10]=f,h[14]=p,h[3]=g,h[7]=m,h[11]=_,h[15]=d,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new he().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,n=1/Wi.setFromMatrixColumn(t,0).length(),a=1/Wi.setFromMatrixColumn(t,1).length(),o=1/Wi.setFromMatrixColumn(t,2).length();return e[0]=i[0]*n,e[1]=i[1]*n,e[2]=i[2]*n,e[3]=0,e[4]=i[4]*a,e[5]=i[5]*a,e[6]=i[6]*a,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,n=t.y,a=t.z,o=Math.cos(i),r=Math.sin(i),c=Math.cos(n),l=Math.sin(n),u=Math.cos(a),f=Math.sin(a);if(t.order==="XYZ"){const p=o*u,g=o*f,m=r*u,_=r*f;e[0]=c*u,e[4]=-c*f,e[8]=l,e[1]=g+m*l,e[5]=p-_*l,e[9]=-r*c,e[2]=_-p*l,e[6]=m+g*l,e[10]=o*c}else if(t.order==="YXZ"){const p=c*u,g=c*f,m=l*u,_=l*f;e[0]=p+_*r,e[4]=m*r-g,e[8]=o*l,e[1]=o*f,e[5]=o*u,e[9]=-r,e[2]=g*r-m,e[6]=_+p*r,e[10]=o*c}else if(t.order==="ZXY"){const p=c*u,g=c*f,m=l*u,_=l*f;e[0]=p-_*r,e[4]=-o*f,e[8]=m+g*r,e[1]=g+m*r,e[5]=o*u,e[9]=_-p*r,e[2]=-o*l,e[6]=r,e[10]=o*c}else if(t.order==="ZYX"){const p=o*u,g=o*f,m=r*u,_=r*f;e[0]=c*u,e[4]=m*l-g,e[8]=p*l+_,e[1]=c*f,e[5]=_*l+p,e[9]=g*l-m,e[2]=-l,e[6]=r*c,e[10]=o*c}else if(t.order==="YZX"){const p=o*c,g=o*l,m=r*c,_=r*l;e[0]=c*u,e[4]=_-p*f,e[8]=m*f+g,e[1]=f,e[5]=o*u,e[9]=-r*u,e[2]=-l*u,e[6]=g*f+m,e[10]=p-_*f}else if(t.order==="XZY"){const p=o*c,g=o*l,m=r*c,_=r*l;e[0]=c*u,e[4]=-f,e[8]=l*u,e[1]=p*f+_,e[5]=o*u,e[9]=g*f-m,e[2]=m*f-g,e[6]=r*u,e[10]=_*f+p}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Fc,t,Bc)}lookAt(t,e,i){const n=this.elements;return Le.subVectors(t,e),Le.lengthSq()===0&&(Le.z=1),Le.normalize(),ci.crossVectors(i,Le),ci.lengthSq()===0&&(Math.abs(i.z)===1?Le.x+=1e-4:Le.z+=1e-4,Le.normalize(),ci.crossVectors(i,Le)),ci.normalize(),Bn.crossVectors(Le,ci),n[0]=ci.x,n[4]=Bn.x,n[8]=Le.x,n[1]=ci.y,n[5]=Bn.y,n[9]=Le.y,n[2]=ci.z,n[6]=Bn.z,n[10]=Le.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,n=e.elements,a=this.elements,o=i[0],r=i[4],c=i[8],l=i[12],u=i[1],f=i[5],p=i[9],g=i[13],m=i[2],_=i[6],d=i[10],h=i[14],x=i[3],v=i[7],y=i[11],T=i[15],A=n[0],S=n[4],I=n[8],M=n[12],b=n[1],F=n[5],D=n[9],Y=n[13],R=n[2],U=n[6],G=n[10],Z=n[14],V=n[3],W=n[7],J=n[11],it=n[15];return a[0]=o*A+r*b+c*R+l*V,a[4]=o*S+r*F+c*U+l*W,a[8]=o*I+r*D+c*G+l*J,a[12]=o*M+r*Y+c*Z+l*it,a[1]=u*A+f*b+p*R+g*V,a[5]=u*S+f*F+p*U+g*W,a[9]=u*I+f*D+p*G+g*J,a[13]=u*M+f*Y+p*Z+g*it,a[2]=m*A+_*b+d*R+h*V,a[6]=m*S+_*F+d*U+h*W,a[10]=m*I+_*D+d*G+h*J,a[14]=m*M+_*Y+d*Z+h*it,a[3]=x*A+v*b+y*R+T*V,a[7]=x*S+v*F+y*U+T*W,a[11]=x*I+v*D+y*G+T*J,a[15]=x*M+v*Y+y*Z+T*it,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],n=t[8],a=t[12],o=t[1],r=t[5],c=t[9],l=t[13],u=t[2],f=t[6],p=t[10],g=t[14],m=t[3],_=t[7],d=t[11],h=t[15];return m*(+a*c*f-n*l*f-a*r*p+i*l*p+n*r*g-i*c*g)+_*(+e*c*g-e*l*p+a*o*p-n*o*g+n*l*u-a*c*u)+d*(+e*l*f-e*r*g-a*o*f+i*o*g+a*r*u-i*l*u)+h*(-n*r*u-e*c*f+e*r*p+n*o*f-i*o*p+i*c*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const n=this.elements;return t.isVector3?(n[12]=t.x,n[13]=t.y,n[14]=t.z):(n[12]=t,n[13]=e,n[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],n=t[2],a=t[3],o=t[4],r=t[5],c=t[6],l=t[7],u=t[8],f=t[9],p=t[10],g=t[11],m=t[12],_=t[13],d=t[14],h=t[15],x=f*d*l-_*p*l+_*c*g-r*d*g-f*c*h+r*p*h,v=m*p*l-u*d*l-m*c*g+o*d*g+u*c*h-o*p*h,y=u*_*l-m*f*l+m*r*g-o*_*g-u*r*h+o*f*h,T=m*f*c-u*_*c-m*r*p+o*_*p+u*r*d-o*f*d,A=e*x+i*v+n*y+a*T;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const S=1/A;return t[0]=x*S,t[1]=(_*p*a-f*d*a-_*n*g+i*d*g+f*n*h-i*p*h)*S,t[2]=(r*d*a-_*c*a+_*n*l-i*d*l-r*n*h+i*c*h)*S,t[3]=(f*c*a-r*p*a-f*n*l+i*p*l+r*n*g-i*c*g)*S,t[4]=v*S,t[5]=(u*d*a-m*p*a+m*n*g-e*d*g-u*n*h+e*p*h)*S,t[6]=(m*c*a-o*d*a-m*n*l+e*d*l+o*n*h-e*c*h)*S,t[7]=(o*p*a-u*c*a+u*n*l-e*p*l-o*n*g+e*c*g)*S,t[8]=y*S,t[9]=(m*f*a-u*_*a-m*i*g+e*_*g+u*i*h-e*f*h)*S,t[10]=(o*_*a-m*r*a+m*i*l-e*_*l-o*i*h+e*r*h)*S,t[11]=(u*r*a-o*f*a-u*i*l+e*f*l+o*i*g-e*r*g)*S,t[12]=T*S,t[13]=(u*_*n-m*f*n+m*i*p-e*_*p-u*i*d+e*f*d)*S,t[14]=(m*r*n-o*_*n-m*i*c+e*_*c+o*i*d-e*r*d)*S,t[15]=(o*f*n-u*r*n+u*i*c-e*f*c-o*i*p+e*r*p)*S,this}scale(t){const e=this.elements,i=t.x,n=t.y,a=t.z;return e[0]*=i,e[4]*=n,e[8]*=a,e[1]*=i,e[5]*=n,e[9]*=a,e[2]*=i,e[6]*=n,e[10]*=a,e[3]*=i,e[7]*=n,e[11]*=a,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],n=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,n))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),n=Math.sin(e),a=1-i,o=t.x,r=t.y,c=t.z,l=a*o,u=a*r;return this.set(l*o+i,l*r-n*c,l*c+n*r,0,l*r+n*c,u*r+i,u*c-n*o,0,l*c-n*r,u*c+n*o,a*c*c+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,n,a,o){return this.set(1,i,a,0,t,1,o,0,e,n,1,0,0,0,0,1),this}compose(t,e,i){const n=this.elements,a=e._x,o=e._y,r=e._z,c=e._w,l=a+a,u=o+o,f=r+r,p=a*l,g=a*u,m=a*f,_=o*u,d=o*f,h=r*f,x=c*l,v=c*u,y=c*f,T=i.x,A=i.y,S=i.z;return n[0]=(1-(_+h))*T,n[1]=(g+y)*T,n[2]=(m-v)*T,n[3]=0,n[4]=(g-y)*A,n[5]=(1-(p+h))*A,n[6]=(d+x)*A,n[7]=0,n[8]=(m+v)*S,n[9]=(d-x)*S,n[10]=(1-(p+_))*S,n[11]=0,n[12]=t.x,n[13]=t.y,n[14]=t.z,n[15]=1,this}decompose(t,e,i){const n=this.elements;let a=Wi.set(n[0],n[1],n[2]).length();const o=Wi.set(n[4],n[5],n[6]).length(),r=Wi.set(n[8],n[9],n[10]).length();this.determinant()<0&&(a=-a),t.x=n[12],t.y=n[13],t.z=n[14],ke.copy(this);const l=1/a,u=1/o,f=1/r;return ke.elements[0]*=l,ke.elements[1]*=l,ke.elements[2]*=l,ke.elements[4]*=u,ke.elements[5]*=u,ke.elements[6]*=u,ke.elements[8]*=f,ke.elements[9]*=f,ke.elements[10]*=f,e.setFromRotationMatrix(ke),i.x=a,i.y=o,i.z=r,this}makePerspective(t,e,i,n,a,o,r=si){const c=this.elements,l=2*a/(e-t),u=2*a/(i-n),f=(e+t)/(e-t),p=(i+n)/(i-n);let g,m;if(r===si)g=-(o+a)/(o-a),m=-2*o*a/(o-a);else if(r===hs)g=-o/(o-a),m=-o*a/(o-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+r);return c[0]=l,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,n,a,o,r=si){const c=this.elements,l=1/(e-t),u=1/(i-n),f=1/(o-a),p=(e+t)*l,g=(i+n)*u;let m,_;if(r===si)m=(o+a)*f,_=-2*f;else if(r===hs)m=a*f,_=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+r);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-p,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-g,c[2]=0,c[6]=0,c[10]=_,c[14]=-m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let n=0;n<16;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const Wi=new $,ke=new he,Fc=new $(0,0,0),Bc=new $(1,1,1),ci=new $,Bn=new $,Le=new $,wr=new he,Pr=new Ii;class _s{constructor(t=0,e=0,i=0,n=_s.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=n}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,n=this._order){return this._x=t,this._y=e,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const n=t.elements,a=n[0],o=n[4],r=n[8],c=n[1],l=n[5],u=n[9],f=n[2],p=n[6],g=n[10];switch(e){case"XYZ":this._y=Math.asin(Se(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(-u,g),this._z=Math.atan2(-o,a)):(this._x=Math.atan2(p,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Se(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(r,g),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,a),this._z=0);break;case"ZXY":this._x=Math.asin(Se(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-f,g),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,a));break;case"ZYX":this._y=Math.asin(-Se(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(p,g),this._z=Math.atan2(c,a)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Se(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-f,a)):(this._x=0,this._y=Math.atan2(r,g));break;case"XZY":this._z=Math.asin(-Se(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(p,l),this._y=Math.atan2(r,a)):(this._x=Math.atan2(-u,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return wr.makeRotationFromQuaternion(t),this.setFromRotationMatrix(wr,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Pr.setFromEuler(this),this.setFromQuaternion(Pr,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}_s.DEFAULT_ORDER="XYZ";class ba{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Gc=0;const Cr=new $,Yi=new Ii,Qe=new he,Gn=new $,_n=new $,kc=new $,Hc=new Ii,Rr=new $(1,0,0),Lr=new $(0,1,0),Ir=new $(0,0,1),Vc={type:"added"},Wc={type:"removed"};class xe extends Oi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Gc++}),this.uuid=Pn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=xe.DEFAULT_UP.clone();const t=new $,e=new _s,i=new Ii,n=new $(1,1,1);function a(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(a),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new he},normalMatrix:{value:new Kt}}),this.matrix=new he,this.matrixWorld=new he,this.matrixAutoUpdate=xe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=xe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ba,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Yi.setFromAxisAngle(t,e),this.quaternion.multiply(Yi),this}rotateOnWorldAxis(t,e){return Yi.setFromAxisAngle(t,e),this.quaternion.premultiply(Yi),this}rotateX(t){return this.rotateOnAxis(Rr,t)}rotateY(t){return this.rotateOnAxis(Lr,t)}rotateZ(t){return this.rotateOnAxis(Ir,t)}translateOnAxis(t,e){return Cr.copy(t).applyQuaternion(this.quaternion),this.position.add(Cr.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Rr,t)}translateY(t){return this.translateOnAxis(Lr,t)}translateZ(t){return this.translateOnAxis(Ir,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Qe.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Gn.copy(t):Gn.set(t,e,i);const n=this.parent;this.updateWorldMatrix(!0,!1),_n.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Qe.lookAt(_n,Gn,this.up):Qe.lookAt(Gn,_n,this.up),this.quaternion.setFromRotationMatrix(Qe),n&&(Qe.extractRotation(n.matrixWorld),Yi.setFromRotationMatrix(Qe),this.quaternion.premultiply(Yi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Vc)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Wc)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Qe.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Qe.multiply(t.parent.matrixWorld)),t.applyMatrix4(Qe),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,n=this.children.length;i<n;i++){const o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const n=this.children;for(let a=0,o=n.length;a<o;a++)n[a].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_n,t,kc),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_n,Hc,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,n=e.length;i<n;i++){const a=e[i];(a.matrixWorldAutoUpdate===!0||t===!0)&&a.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const n=this.children;for(let a=0,o=n.length;a<o;a++){const r=n[a];r.matrixWorldAutoUpdate===!0&&r.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const n={};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.visibility=this._visibility,n.active=this._active,n.bounds=this._bounds.map(r=>({boxInitialized:r.boxInitialized,boxMin:r.box.min.toArray(),boxMax:r.box.max.toArray(),sphereInitialized:r.sphereInitialized,sphereRadius:r.sphere.radius,sphereCenter:r.sphere.center.toArray()})),n.maxGeometryCount=this._maxGeometryCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.geometryCount=this._geometryCount,n.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(n.boundingSphere={center:n.boundingSphere.center.toArray(),radius:n.boundingSphere.radius}),this.boundingBox!==null&&(n.boundingBox={min:n.boundingBox.min.toArray(),max:n.boundingBox.max.toArray()}));function a(r,c){return r[c.uuid]===void 0&&(r[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=a(t.geometries,this.geometry);const r=this.geometry.parameters;if(r!==void 0&&r.shapes!==void 0){const c=r.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const f=c[l];a(t.shapes,f)}else a(t.shapes,c)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(t.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const r=[];for(let c=0,l=this.material.length;c<l;c++)r.push(a(t.materials,this.material[c]));n.material=r}else n.material=a(t.materials,this.material);if(this.children.length>0){n.children=[];for(let r=0;r<this.children.length;r++)n.children.push(this.children[r].toJSON(t).object)}if(this.animations.length>0){n.animations=[];for(let r=0;r<this.animations.length;r++){const c=this.animations[r];n.animations.push(a(t.animations,c))}}if(e){const r=o(t.geometries),c=o(t.materials),l=o(t.textures),u=o(t.images),f=o(t.shapes),p=o(t.skeletons),g=o(t.animations),m=o(t.nodes);r.length>0&&(i.geometries=r),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),p.length>0&&(i.skeletons=p),g.length>0&&(i.animations=g),m.length>0&&(i.nodes=m)}return i.object=n,i;function o(r){const c=[];for(const l in r){const u=r[l];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const n=t.children[i];this.add(n.clone())}return this}}xe.DEFAULT_UP=new $(0,1,0);xe.DEFAULT_MATRIX_AUTO_UPDATE=!0;xe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const He=new $,ti=new $,ks=new $,ei=new $,Xi=new $,$i=new $,Dr=new $,Hs=new $,Vs=new $,Ws=new $;let kn=!1;class Ve{constructor(t=new $,e=new $,i=new $){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,n){n.subVectors(i,e),He.subVectors(t,e),n.cross(He);const a=n.lengthSq();return a>0?n.multiplyScalar(1/Math.sqrt(a)):n.set(0,0,0)}static getBarycoord(t,e,i,n,a){He.subVectors(n,e),ti.subVectors(i,e),ks.subVectors(t,e);const o=He.dot(He),r=He.dot(ti),c=He.dot(ks),l=ti.dot(ti),u=ti.dot(ks),f=o*l-r*r;if(f===0)return a.set(0,0,0),null;const p=1/f,g=(l*c-r*u)*p,m=(o*u-r*c)*p;return a.set(1-g-m,m,g)}static containsPoint(t,e,i,n){return this.getBarycoord(t,e,i,n,ei)===null?!1:ei.x>=0&&ei.y>=0&&ei.x+ei.y<=1}static getUV(t,e,i,n,a,o,r,c){return kn===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),kn=!0),this.getInterpolation(t,e,i,n,a,o,r,c)}static getInterpolation(t,e,i,n,a,o,r,c){return this.getBarycoord(t,e,i,n,ei)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(a,ei.x),c.addScaledVector(o,ei.y),c.addScaledVector(r,ei.z),c)}static isFrontFacing(t,e,i,n){return He.subVectors(i,e),ti.subVectors(t,e),He.cross(ti).dot(n)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,n){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[n]),this}setFromAttributeAndIndices(t,e,i,n){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,n),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return He.subVectors(this.c,this.b),ti.subVectors(this.a,this.b),He.cross(ti).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ve.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Ve.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,i,n,a){return kn===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),kn=!0),Ve.getInterpolation(t,this.a,this.b,this.c,e,i,n,a)}getInterpolation(t,e,i,n,a){return Ve.getInterpolation(t,this.a,this.b,this.c,e,i,n,a)}containsPoint(t){return Ve.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ve.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,n=this.b,a=this.c;let o,r;Xi.subVectors(n,i),$i.subVectors(a,i),Hs.subVectors(t,i);const c=Xi.dot(Hs),l=$i.dot(Hs);if(c<=0&&l<=0)return e.copy(i);Vs.subVectors(t,n);const u=Xi.dot(Vs),f=$i.dot(Vs);if(u>=0&&f<=u)return e.copy(n);const p=c*f-u*l;if(p<=0&&c>=0&&u<=0)return o=c/(c-u),e.copy(i).addScaledVector(Xi,o);Ws.subVectors(t,a);const g=Xi.dot(Ws),m=$i.dot(Ws);if(m>=0&&g<=m)return e.copy(a);const _=g*l-c*m;if(_<=0&&l>=0&&m<=0)return r=l/(l-m),e.copy(i).addScaledVector($i,r);const d=u*m-g*f;if(d<=0&&f-u>=0&&g-m>=0)return Dr.subVectors(a,n),r=(f-u)/(f-u+(g-m)),e.copy(n).addScaledVector(Dr,r);const h=1/(d+_+p);return o=_*h,r=p*h,e.copy(i).addScaledVector(Xi,o).addScaledVector($i,r)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const zo={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},hi={h:0,s:0,l:0},Hn={h:0,s:0,l:0};function Ys(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class Jt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const n=t;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ge){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Qt.toWorkingColorSpace(this,e),this}setRGB(t,e,i,n=Qt.workingColorSpace){return this.r=t,this.g=e,this.b=i,Qt.toWorkingColorSpace(this,n),this}setHSL(t,e,i,n=Qt.workingColorSpace){if(t=Cc(t,1),e=Se(e,0,1),i=Se(i,0,1),e===0)this.r=this.g=this.b=i;else{const a=i<=.5?i*(1+e):i+e-i*e,o=2*i-a;this.r=Ys(o,a,t+1/3),this.g=Ys(o,a,t),this.b=Ys(o,a,t-1/3)}return Qt.toWorkingColorSpace(this,n),this}setStyle(t,e=ge){function i(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(t)){let a;const o=n[1],r=n[2];switch(o){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,e);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,e);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(t)){const a=n[1],o=a.length;if(o===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(a,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ge){const i=zo[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ln(t.r),this.g=ln(t.g),this.b=ln(t.b),this}copyLinearToSRGB(t){return this.r=Ds(t.r),this.g=Ds(t.g),this.b=Ds(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ge){return Qt.fromWorkingColorSpace(ye.copy(this),t),Math.round(Se(ye.r*255,0,255))*65536+Math.round(Se(ye.g*255,0,255))*256+Math.round(Se(ye.b*255,0,255))}getHexString(t=ge){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Qt.workingColorSpace){Qt.fromWorkingColorSpace(ye.copy(this),e);const i=ye.r,n=ye.g,a=ye.b,o=Math.max(i,n,a),r=Math.min(i,n,a);let c,l;const u=(r+o)/2;if(r===o)c=0,l=0;else{const f=o-r;switch(l=u<=.5?f/(o+r):f/(2-o-r),o){case i:c=(n-a)/f+(n<a?6:0);break;case n:c=(a-i)/f+2;break;case a:c=(i-n)/f+4;break}c/=6}return t.h=c,t.s=l,t.l=u,t}getRGB(t,e=Qt.workingColorSpace){return Qt.fromWorkingColorSpace(ye.copy(this),e),t.r=ye.r,t.g=ye.g,t.b=ye.b,t}getStyle(t=ge){Qt.fromWorkingColorSpace(ye.copy(this),t);const e=ye.r,i=ye.g,n=ye.b;return t!==ge?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(t,e,i){return this.getHSL(hi),this.setHSL(hi.h+t,hi.s+e,hi.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(hi),t.getHSL(Hn);const i=Ls(hi.h,Hn.h,e),n=Ls(hi.s,Hn.s,e),a=Ls(hi.l,Hn.l,e);return this.setHSL(i,n,a),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,n=this.b,a=t.elements;return this.r=a[0]*e+a[3]*i+a[6]*n,this.g=a[1]*e+a[4]*i+a[7]*n,this.b=a[2]*e+a[5]*i+a[8]*n,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ye=new Jt;Jt.NAMES=zo;let Yc=0;class Rn extends Oi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Yc++}),this.uuid=Pn(),this.name="",this.type="Material",this.blending=on,this.side=vi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ra,this.blendDst=oa,this.blendEquation=Ai,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Jt(0,0,0),this.blendAlpha=0,this.depthFunc=rs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=yr,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Bi,this.stencilZFail=Bi,this.stencilZPass=Bi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const n=this[e];if(n===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==on&&(i.blending=this.blending),this.side!==vi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==ra&&(i.blendSrc=this.blendSrc),this.blendDst!==oa&&(i.blendDst=this.blendDst),this.blendEquation!==Ai&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==rs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==yr&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Bi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Bi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Bi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(a){const o=[];for(const r in a){const c=a[r];delete c.metadata,o.push(c)}return o}if(e){const a=n(t.textures),o=n(t.images);a.length>0&&(i.textures=a),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const n=e.length;i=new Array(n);for(let a=0;a!==n;++a)i[a]=e[a].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class us extends Rn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Jt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=xa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ce=new $,Vn=new Ut;class Ke{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=xr,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=fi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let n=0,a=this.itemSize;n<a;n++)this.array[t+n]=e.array[i+n];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Vn.fromBufferAttribute(this,e),Vn.applyMatrix3(t),this.setXY(e,Vn.x,Vn.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)ce.fromBufferAttribute(this,e),ce.applyMatrix3(t),this.setXYZ(e,ce.x,ce.y,ce.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)ce.fromBufferAttribute(this,e),ce.applyMatrix4(t),this.setXYZ(e,ce.x,ce.y,ce.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)ce.fromBufferAttribute(this,e),ce.applyNormalMatrix(t),this.setXYZ(e,ce.x,ce.y,ce.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)ce.fromBufferAttribute(this,e),ce.transformDirection(t),this.setXYZ(e,ce.x,ce.y,ce.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=mn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=be(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=mn(e,this.array)),e}setX(t,e){return this.normalized&&(e=be(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=mn(e,this.array)),e}setY(t,e){return this.normalized&&(e=be(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=mn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=be(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=mn(e,this.array)),e}setW(t,e){return this.normalized&&(e=be(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=be(e,this.array),i=be(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,n){return t*=this.itemSize,this.normalized&&(e=be(e,this.array),i=be(i,this.array),n=be(n,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this}setXYZW(t,e,i,n,a){return t*=this.itemSize,this.normalized&&(e=be(e,this.array),i=be(i,this.array),n=be(n,this.array),a=be(a,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this.array[t+3]=a,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==xr&&(t.usage=this.usage),t}}class Fo extends Ke{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class Bo extends Ke{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class Me extends Ke{constructor(t,e,i){super(new Float32Array(t),e,i)}}let Xc=0;const Ue=new he,Xs=new xe,Ki=new $,Ie=new Cn,yn=new Cn,pe=new $;class qe extends Oi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Xc++}),this.uuid=Pn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Do(t)?Bo:Fo)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const a=new Kt().getNormalMatrix(t);i.applyNormalMatrix(a),i.needsUpdate=!0}const n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(t),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ue.makeRotationFromQuaternion(t),this.applyMatrix4(Ue),this}rotateX(t){return Ue.makeRotationX(t),this.applyMatrix4(Ue),this}rotateY(t){return Ue.makeRotationY(t),this.applyMatrix4(Ue),this}rotateZ(t){return Ue.makeRotationZ(t),this.applyMatrix4(Ue),this}translate(t,e,i){return Ue.makeTranslation(t,e,i),this.applyMatrix4(Ue),this}scale(t,e,i){return Ue.makeScale(t,e,i),this.applyMatrix4(Ue),this}lookAt(t){return Xs.lookAt(t),Xs.updateMatrix(),this.applyMatrix4(Xs.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ki).negate(),this.translate(Ki.x,Ki.y,Ki.z),this}setFromPoints(t){const e=[];for(let i=0,n=t.length;i<n;i++){const a=t[i];e.push(a.x,a.y,a.z||0)}return this.setAttribute("position",new Me(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Cn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new $(-1/0,-1/0,-1/0),new $(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,n=e.length;i<n;i++){const a=e[i];Ie.setFromBufferAttribute(a),this.morphTargetsRelative?(pe.addVectors(this.boundingBox.min,Ie.min),this.boundingBox.expandByPoint(pe),pe.addVectors(this.boundingBox.max,Ie.max),this.boundingBox.expandByPoint(pe)):(this.boundingBox.expandByPoint(Ie.min),this.boundingBox.expandByPoint(Ie.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ea);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new $,1/0);return}if(t){const i=this.boundingSphere.center;if(Ie.setFromBufferAttribute(t),e)for(let a=0,o=e.length;a<o;a++){const r=e[a];yn.setFromBufferAttribute(r),this.morphTargetsRelative?(pe.addVectors(Ie.min,yn.min),Ie.expandByPoint(pe),pe.addVectors(Ie.max,yn.max),Ie.expandByPoint(pe)):(Ie.expandByPoint(yn.min),Ie.expandByPoint(yn.max))}Ie.getCenter(i);let n=0;for(let a=0,o=t.count;a<o;a++)pe.fromBufferAttribute(t,a),n=Math.max(n,i.distanceToSquared(pe));if(e)for(let a=0,o=e.length;a<o;a++){const r=e[a],c=this.morphTargetsRelative;for(let l=0,u=r.count;l<u;l++)pe.fromBufferAttribute(r,l),c&&(Ki.fromBufferAttribute(t,l),pe.add(Ki)),n=Math.max(n,i.distanceToSquared(pe))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.array,n=e.position.array,a=e.normal.array,o=e.uv.array,r=n.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ke(new Float32Array(4*r),4));const c=this.getAttribute("tangent").array,l=[],u=[];for(let b=0;b<r;b++)l[b]=new $,u[b]=new $;const f=new $,p=new $,g=new $,m=new Ut,_=new Ut,d=new Ut,h=new $,x=new $;function v(b,F,D){f.fromArray(n,b*3),p.fromArray(n,F*3),g.fromArray(n,D*3),m.fromArray(o,b*2),_.fromArray(o,F*2),d.fromArray(o,D*2),p.sub(f),g.sub(f),_.sub(m),d.sub(m);const Y=1/(_.x*d.y-d.x*_.y);isFinite(Y)&&(h.copy(p).multiplyScalar(d.y).addScaledVector(g,-_.y).multiplyScalar(Y),x.copy(g).multiplyScalar(_.x).addScaledVector(p,-d.x).multiplyScalar(Y),l[b].add(h),l[F].add(h),l[D].add(h),u[b].add(x),u[F].add(x),u[D].add(x))}let y=this.groups;y.length===0&&(y=[{start:0,count:i.length}]);for(let b=0,F=y.length;b<F;++b){const D=y[b],Y=D.start,R=D.count;for(let U=Y,G=Y+R;U<G;U+=3)v(i[U+0],i[U+1],i[U+2])}const T=new $,A=new $,S=new $,I=new $;function M(b){S.fromArray(a,b*3),I.copy(S);const F=l[b];T.copy(F),T.sub(S.multiplyScalar(S.dot(F))).normalize(),A.crossVectors(I,F);const Y=A.dot(u[b])<0?-1:1;c[b*4]=T.x,c[b*4+1]=T.y,c[b*4+2]=T.z,c[b*4+3]=Y}for(let b=0,F=y.length;b<F;++b){const D=y[b],Y=D.start,R=D.count;for(let U=Y,G=Y+R;U<G;U+=3)M(i[U+0]),M(i[U+1]),M(i[U+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Ke(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let p=0,g=i.count;p<g;p++)i.setXYZ(p,0,0,0);const n=new $,a=new $,o=new $,r=new $,c=new $,l=new $,u=new $,f=new $;if(t)for(let p=0,g=t.count;p<g;p+=3){const m=t.getX(p+0),_=t.getX(p+1),d=t.getX(p+2);n.fromBufferAttribute(e,m),a.fromBufferAttribute(e,_),o.fromBufferAttribute(e,d),u.subVectors(o,a),f.subVectors(n,a),u.cross(f),r.fromBufferAttribute(i,m),c.fromBufferAttribute(i,_),l.fromBufferAttribute(i,d),r.add(u),c.add(u),l.add(u),i.setXYZ(m,r.x,r.y,r.z),i.setXYZ(_,c.x,c.y,c.z),i.setXYZ(d,l.x,l.y,l.z)}else for(let p=0,g=e.count;p<g;p+=3)n.fromBufferAttribute(e,p+0),a.fromBufferAttribute(e,p+1),o.fromBufferAttribute(e,p+2),u.subVectors(o,a),f.subVectors(n,a),u.cross(f),i.setXYZ(p+0,u.x,u.y,u.z),i.setXYZ(p+1,u.x,u.y,u.z),i.setXYZ(p+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)pe.fromBufferAttribute(t,e),pe.normalize(),t.setXYZ(e,pe.x,pe.y,pe.z)}toNonIndexed(){function t(r,c){const l=r.array,u=r.itemSize,f=r.normalized,p=new l.constructor(c.length*u);let g=0,m=0;for(let _=0,d=c.length;_<d;_++){r.isInterleavedBufferAttribute?g=c[_]*r.data.stride+r.offset:g=c[_]*u;for(let h=0;h<u;h++)p[m++]=l[g++]}return new Ke(p,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new qe,i=this.index.array,n=this.attributes;for(const r in n){const c=n[r],l=t(c,i);e.setAttribute(r,l)}const a=this.morphAttributes;for(const r in a){const c=[],l=a[r];for(let u=0,f=l.length;u<f;u++){const p=l[u],g=t(p,i);c.push(g)}e.morphAttributes[r]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let r=0,c=o.length;r<c;r++){const l=o[r];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const c in i){const l=i[c];t.data.attributes[c]=l.toJSON(t.data)}const n={};let a=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let f=0,p=l.length;f<p;f++){const g=l[f];u.push(g.toJSON(t.data))}u.length>0&&(n[c]=u,a=!0)}a&&(t.data.morphAttributes=n,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const r=this.boundingSphere;return r!==null&&(t.data.boundingSphere={center:r.center.toArray(),radius:r.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const n=t.attributes;for(const l in n){const u=n[l];this.setAttribute(l,u.clone(e))}const a=t.morphAttributes;for(const l in a){const u=[],f=a[l];for(let p=0,g=f.length;p<g;p++)u.push(f[p].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,u=o.length;l<u;l++){const f=o[l];this.addGroup(f.start,f.count,f.materialIndex)}const r=t.boundingBox;r!==null&&(this.boundingBox=r.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Or=new he,Ei=new Sa,Wn=new Ea,Nr=new $,qi=new $,Zi=new $,ji=new $,$s=new $,Yn=new $,Xn=new Ut,$n=new Ut,Kn=new Ut,Ur=new $,zr=new $,Fr=new $,qn=new $,Zn=new $;class te extends xe{constructor(t=new qe,e=new us){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,o=n.length;a<o;a++){const r=n[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[r]=a}}}}getVertexPosition(t,e){const i=this.geometry,n=i.attributes.position,a=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(n,t);const r=this.morphTargetInfluences;if(a&&r){Yn.set(0,0,0);for(let c=0,l=a.length;c<l;c++){const u=r[c],f=a[c];u!==0&&($s.fromBufferAttribute(f,t),o?Yn.addScaledVector($s,u):Yn.addScaledVector($s.sub(e),u))}e.add(Yn)}return e}raycast(t,e){const i=this.geometry,n=this.material,a=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Wn.copy(i.boundingSphere),Wn.applyMatrix4(a),Ei.copy(t.ray).recast(t.near),!(Wn.containsPoint(Ei.origin)===!1&&(Ei.intersectSphere(Wn,Nr)===null||Ei.origin.distanceToSquared(Nr)>(t.far-t.near)**2))&&(Or.copy(a).invert(),Ei.copy(t.ray).applyMatrix4(Or),!(i.boundingBox!==null&&Ei.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Ei)))}_computeIntersections(t,e,i){let n;const a=this.geometry,o=this.material,r=a.index,c=a.attributes.position,l=a.attributes.uv,u=a.attributes.uv1,f=a.attributes.normal,p=a.groups,g=a.drawRange;if(r!==null)if(Array.isArray(o))for(let m=0,_=p.length;m<_;m++){const d=p[m],h=o[d.materialIndex],x=Math.max(d.start,g.start),v=Math.min(r.count,Math.min(d.start+d.count,g.start+g.count));for(let y=x,T=v;y<T;y+=3){const A=r.getX(y),S=r.getX(y+1),I=r.getX(y+2);n=jn(this,h,t,i,l,u,f,A,S,I),n&&(n.faceIndex=Math.floor(y/3),n.face.materialIndex=d.materialIndex,e.push(n))}}else{const m=Math.max(0,g.start),_=Math.min(r.count,g.start+g.count);for(let d=m,h=_;d<h;d+=3){const x=r.getX(d),v=r.getX(d+1),y=r.getX(d+2);n=jn(this,o,t,i,l,u,f,x,v,y),n&&(n.faceIndex=Math.floor(d/3),e.push(n))}}else if(c!==void 0)if(Array.isArray(o))for(let m=0,_=p.length;m<_;m++){const d=p[m],h=o[d.materialIndex],x=Math.max(d.start,g.start),v=Math.min(c.count,Math.min(d.start+d.count,g.start+g.count));for(let y=x,T=v;y<T;y+=3){const A=y,S=y+1,I=y+2;n=jn(this,h,t,i,l,u,f,A,S,I),n&&(n.faceIndex=Math.floor(y/3),n.face.materialIndex=d.materialIndex,e.push(n))}}else{const m=Math.max(0,g.start),_=Math.min(c.count,g.start+g.count);for(let d=m,h=_;d<h;d+=3){const x=d,v=d+1,y=d+2;n=jn(this,o,t,i,l,u,f,x,v,y),n&&(n.faceIndex=Math.floor(d/3),e.push(n))}}}}function $c(s,t,e,i,n,a,o,r){let c;if(t.side===Pe?c=i.intersectTriangle(o,a,n,!0,r):c=i.intersectTriangle(n,a,o,t.side===vi,r),c===null)return null;Zn.copy(r),Zn.applyMatrix4(s.matrixWorld);const l=e.ray.origin.distanceTo(Zn);return l<e.near||l>e.far?null:{distance:l,point:Zn.clone(),object:s}}function jn(s,t,e,i,n,a,o,r,c,l){s.getVertexPosition(r,qi),s.getVertexPosition(c,Zi),s.getVertexPosition(l,ji);const u=$c(s,t,e,i,qi,Zi,ji,qn);if(u){n&&(Xn.fromBufferAttribute(n,r),$n.fromBufferAttribute(n,c),Kn.fromBufferAttribute(n,l),u.uv=Ve.getInterpolation(qn,qi,Zi,ji,Xn,$n,Kn,new Ut)),a&&(Xn.fromBufferAttribute(a,r),$n.fromBufferAttribute(a,c),Kn.fromBufferAttribute(a,l),u.uv1=Ve.getInterpolation(qn,qi,Zi,ji,Xn,$n,Kn,new Ut),u.uv2=u.uv1),o&&(Ur.fromBufferAttribute(o,r),zr.fromBufferAttribute(o,c),Fr.fromBufferAttribute(o,l),u.normal=Ve.getInterpolation(qn,qi,Zi,ji,Ur,zr,Fr,new $),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a:r,b:c,c:l,normal:new $,materialIndex:0};Ve.getNormal(qi,Zi,ji,f.normal),u.face=f}return u}class we extends qe{constructor(t=1,e=1,i=1,n=1,a=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:n,heightSegments:a,depthSegments:o};const r=this;n=Math.floor(n),a=Math.floor(a),o=Math.floor(o);const c=[],l=[],u=[],f=[];let p=0,g=0;m("z","y","x",-1,-1,i,e,t,o,a,0),m("z","y","x",1,-1,i,e,-t,o,a,1),m("x","z","y",1,1,t,i,e,n,o,2),m("x","z","y",1,-1,t,i,-e,n,o,3),m("x","y","z",1,-1,t,e,i,n,a,4),m("x","y","z",-1,-1,t,e,-i,n,a,5),this.setIndex(c),this.setAttribute("position",new Me(l,3)),this.setAttribute("normal",new Me(u,3)),this.setAttribute("uv",new Me(f,2));function m(_,d,h,x,v,y,T,A,S,I,M){const b=y/S,F=T/I,D=y/2,Y=T/2,R=A/2,U=S+1,G=I+1;let Z=0,V=0;const W=new $;for(let J=0;J<G;J++){const it=J*F-Y;for(let nt=0;nt<U;nt++){const X=nt*b-D;W[_]=X*x,W[d]=it*v,W[h]=R,l.push(W.x,W.y,W.z),W[_]=0,W[d]=0,W[h]=A>0?1:-1,u.push(W.x,W.y,W.z),f.push(nt/S),f.push(1-J/I),Z+=1}}for(let J=0;J<I;J++)for(let it=0;it<S;it++){const nt=p+it+U*J,X=p+it+U*(J+1),C=p+(it+1)+U*(J+1),z=p+(it+1)+U*J;c.push(nt,X,z),c.push(X,C,z),V+=6}r.addGroup(g,V,M),g+=V,p+=Z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new we(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function un(s){const t={};for(const e in s){t[e]={};for(const i in s[e]){const n=s[e][i];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?n.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=n.clone():Array.isArray(n)?t[e][i]=n.slice():t[e][i]=n}}return t}function Te(s){const t={};for(let e=0;e<s.length;e++){const i=un(s[e]);for(const n in i)t[n]=i[n]}return t}function Kc(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function Go(s){return s.getRenderTarget()===null?s.outputColorSpace:Qt.workingColorSpace}const qc={clone:un,merge:Te};var Zc=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,jc=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Di extends Rn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Zc,this.fragmentShader=jc,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=un(t.uniforms),this.uniformsGroups=Kc(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const n in this.uniforms){const o=this.uniforms[n].value;o&&o.isTexture?e.uniforms[n]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[n]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[n]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[n]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[n]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[n]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[n]={type:"m4",value:o.toArray()}:e.uniforms[n]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class ko extends xe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new he,this.projectionMatrix=new he,this.projectionMatrixInverse=new he,this.coordinateSystem=si}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Fe extends ko{constructor(t=50,e=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=fa*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ss*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return fa*2*Math.atan(Math.tan(ss*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,i,n,a,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=a,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(ss*.5*this.fov)/this.zoom,i=2*e,n=this.aspect*i,a=-.5*n;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;a+=o.offsetX*n/c,e-=o.offsetY*i/l,n*=o.width/c,i*=o.height/l}const r=this.filmOffset;r!==0&&(a+=t*r/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+n,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Ji=-90,Qi=1;class Jc extends xe{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const n=new Fe(Ji,Qi,t,e);n.layers=this.layers,this.add(n);const a=new Fe(Ji,Qi,t,e);a.layers=this.layers,this.add(a);const o=new Fe(Ji,Qi,t,e);o.layers=this.layers,this.add(o);const r=new Fe(Ji,Qi,t,e);r.layers=this.layers,this.add(r);const c=new Fe(Ji,Qi,t,e);c.layers=this.layers,this.add(c);const l=new Fe(Ji,Qi,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,n,a,o,r,c]=e;for(const l of e)this.remove(l);if(t===si)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),r.up.set(0,1,0),r.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===hs)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),r.up.set(0,-1,0),r.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[a,o,r,c,l,u]=this.children,f=t.getRenderTarget(),p=t.getActiveCubeFace(),g=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,n),t.render(e,a),t.setRenderTarget(i,1,n),t.render(e,o),t.setRenderTarget(i,2,n),t.render(e,r),t.setRenderTarget(i,3,n),t.render(e,c),t.setRenderTarget(i,4,n),t.render(e,l),i.texture.generateMipmaps=_,t.setRenderTarget(i,5,n),t.render(e,u),t.setRenderTarget(f,p,g),t.xr.enabled=m,i.texture.needsPMREMUpdate=!0}}class Ho extends De{constructor(t,e,i,n,a,o,r,c,l,u){t=t!==void 0?t:[],e=e!==void 0?e:cn,super(t,e,i,n,a,o,r,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Qc extends Li{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},n=[i,i,i,i,i,i];e.encoding!==void 0&&(Tn("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===Ri?ge:Be),this.texture=new Ho(n,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:ze}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},n=new we(5,5,5),a=new Di({name:"CubemapFromEquirect",uniforms:un(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Pe,blending:pi});a.uniforms.tEquirect.value=e;const o=new te(n,a),r=e.minFilter;return e.minFilter===bn&&(e.minFilter=ze),new Jc(1,10,this).update(t,o),e.minFilter=r,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,i,n){const a=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,n);t.setRenderTarget(a)}}const Ks=new $,th=new $,eh=new Kt;class di{constructor(t=new $(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,n){return this.normal.set(t,e,i),this.constant=n,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const n=Ks.subVectors(i,e).cross(th.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(n,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(Ks),n=this.normal.dot(i);if(n===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const a=-(t.start.dot(this.normal)+this.constant)/n;return a<0||a>1?null:e.copy(t.start).addScaledVector(i,a)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||eh.getNormalMatrix(t),n=this.coplanarPoint(Ks).applyMatrix4(t),a=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(a),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Si=new Ea,Jn=new $;class Aa{constructor(t=new di,e=new di,i=new di,n=new di,a=new di,o=new di){this.planes=[t,e,i,n,a,o]}set(t,e,i,n,a,o){const r=this.planes;return r[0].copy(t),r[1].copy(e),r[2].copy(i),r[3].copy(n),r[4].copy(a),r[5].copy(o),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=si){const i=this.planes,n=t.elements,a=n[0],o=n[1],r=n[2],c=n[3],l=n[4],u=n[5],f=n[6],p=n[7],g=n[8],m=n[9],_=n[10],d=n[11],h=n[12],x=n[13],v=n[14],y=n[15];if(i[0].setComponents(c-a,p-l,d-g,y-h).normalize(),i[1].setComponents(c+a,p+l,d+g,y+h).normalize(),i[2].setComponents(c+o,p+u,d+m,y+x).normalize(),i[3].setComponents(c-o,p-u,d-m,y-x).normalize(),i[4].setComponents(c-r,p-f,d-_,y-v).normalize(),e===si)i[5].setComponents(c+r,p+f,d+_,y+v).normalize();else if(e===hs)i[5].setComponents(r,f,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Si.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Si.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Si)}intersectsSprite(t){return Si.center.set(0,0,0),Si.radius=.7071067811865476,Si.applyMatrix4(t.matrixWorld),this.intersectsSphere(Si)}intersectsSphere(t){const e=this.planes,i=t.center,n=-t.radius;for(let a=0;a<6;a++)if(e[a].distanceToPoint(i)<n)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const n=e[i];if(Jn.x=n.normal.x>0?t.max.x:t.min.x,Jn.y=n.normal.y>0?t.max.y:t.min.y,Jn.z=n.normal.z>0?t.max.z:t.min.z,n.distanceToPoint(Jn)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Vo(){let s=null,t=!1,e=null,i=null;function n(a,o){e(a,o),i=s.requestAnimationFrame(n)}return{start:function(){t!==!0&&e!==null&&(i=s.requestAnimationFrame(n),t=!0)},stop:function(){s.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(a){e=a},setContext:function(a){s=a}}}function ih(s,t){const e=t.isWebGL2,i=new WeakMap;function n(l,u){const f=l.array,p=l.usage,g=f.byteLength,m=s.createBuffer();s.bindBuffer(u,m),s.bufferData(u,f,p),l.onUploadCallback();let _;if(f instanceof Float32Array)_=s.FLOAT;else if(f instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(e)_=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=s.UNSIGNED_SHORT;else if(f instanceof Int16Array)_=s.SHORT;else if(f instanceof Uint32Array)_=s.UNSIGNED_INT;else if(f instanceof Int32Array)_=s.INT;else if(f instanceof Int8Array)_=s.BYTE;else if(f instanceof Uint8Array)_=s.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)_=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:m,type:_,bytesPerElement:f.BYTES_PER_ELEMENT,version:l.version,size:g}}function a(l,u,f){const p=u.array,g=u._updateRange,m=u.updateRanges;if(s.bindBuffer(f,l),g.count===-1&&m.length===0&&s.bufferSubData(f,0,p),m.length!==0){for(let _=0,d=m.length;_<d;_++){const h=m[_];e?s.bufferSubData(f,h.start*p.BYTES_PER_ELEMENT,p,h.start,h.count):s.bufferSubData(f,h.start*p.BYTES_PER_ELEMENT,p.subarray(h.start,h.start+h.count))}u.clearUpdateRanges()}g.count!==-1&&(e?s.bufferSubData(f,g.offset*p.BYTES_PER_ELEMENT,p,g.offset,g.count):s.bufferSubData(f,g.offset*p.BYTES_PER_ELEMENT,p.subarray(g.offset,g.offset+g.count)),g.count=-1),u.onUploadCallback()}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),i.get(l)}function r(l){l.isInterleavedBufferAttribute&&(l=l.data);const u=i.get(l);u&&(s.deleteBuffer(u.buffer),i.delete(l))}function c(l,u){if(l.isGLBufferAttribute){const p=i.get(l);(!p||p.version<l.version)&&i.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const f=i.get(l);if(f===void 0)i.set(l,n(l,u));else if(f.version<l.version){if(f.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");a(f.buffer,l,u),f.version=l.version}}return{get:o,remove:r,update:c}}class wa extends qe{constructor(t=1,e=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:n};const a=t/2,o=e/2,r=Math.floor(i),c=Math.floor(n),l=r+1,u=c+1,f=t/r,p=e/c,g=[],m=[],_=[],d=[];for(let h=0;h<u;h++){const x=h*p-o;for(let v=0;v<l;v++){const y=v*f-a;m.push(y,-x,0),_.push(0,0,1),d.push(v/r),d.push(1-h/c)}}for(let h=0;h<c;h++)for(let x=0;x<r;x++){const v=x+l*h,y=x+l*(h+1),T=x+1+l*(h+1),A=x+1+l*h;g.push(v,y,A),g.push(y,T,A)}this.setIndex(g),this.setAttribute("position",new Me(m,3)),this.setAttribute("normal",new Me(_,3)),this.setAttribute("uv",new Me(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new wa(t.width,t.height,t.widthSegments,t.heightSegments)}}var nh=`#ifdef USE_ALPHAHASH
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
}`,Yt={alphahash_fragment:nh,alphahash_pars_fragment:sh,alphamap_fragment:ah,alphamap_pars_fragment:rh,alphatest_fragment:oh,alphatest_pars_fragment:lh,aomap_fragment:ch,aomap_pars_fragment:hh,batching_pars_vertex:dh,batching_vertex:uh,begin_vertex:fh,beginnormal_vertex:ph,bsdfs:mh,iridescence_fragment:gh,bumpmap_pars_fragment:vh,clipping_planes_fragment:_h,clipping_planes_pars_fragment:yh,clipping_planes_pars_vertex:xh,clipping_planes_vertex:Mh,color_fragment:Th,color_pars_fragment:Eh,color_pars_vertex:Sh,color_vertex:bh,common:Ah,cube_uv_reflection_fragment:wh,defaultnormal_vertex:Ph,displacementmap_pars_vertex:Ch,displacementmap_vertex:Rh,emissivemap_fragment:Lh,emissivemap_pars_fragment:Ih,colorspace_fragment:Dh,colorspace_pars_fragment:Oh,envmap_fragment:Nh,envmap_common_pars_fragment:Uh,envmap_pars_fragment:zh,envmap_pars_vertex:Fh,envmap_physical_pars_fragment:Zh,envmap_vertex:Bh,fog_vertex:Gh,fog_pars_vertex:kh,fog_fragment:Hh,fog_pars_fragment:Vh,gradientmap_pars_fragment:Wh,lightmap_fragment:Yh,lightmap_pars_fragment:Xh,lights_lambert_fragment:$h,lights_lambert_pars_fragment:Kh,lights_pars_begin:qh,lights_toon_fragment:jh,lights_toon_pars_fragment:Jh,lights_phong_fragment:Qh,lights_phong_pars_fragment:td,lights_physical_fragment:ed,lights_physical_pars_fragment:id,lights_fragment_begin:nd,lights_fragment_maps:sd,lights_fragment_end:ad,logdepthbuf_fragment:rd,logdepthbuf_pars_fragment:od,logdepthbuf_pars_vertex:ld,logdepthbuf_vertex:cd,map_fragment:hd,map_pars_fragment:dd,map_particle_fragment:ud,map_particle_pars_fragment:fd,metalnessmap_fragment:pd,metalnessmap_pars_fragment:md,morphcolor_vertex:gd,morphnormal_vertex:vd,morphtarget_pars_vertex:_d,morphtarget_vertex:yd,normal_fragment_begin:xd,normal_fragment_maps:Md,normal_pars_fragment:Td,normal_pars_vertex:Ed,normal_vertex:Sd,normalmap_pars_fragment:bd,clearcoat_normal_fragment_begin:Ad,clearcoat_normal_fragment_maps:wd,clearcoat_pars_fragment:Pd,iridescence_pars_fragment:Cd,opaque_fragment:Rd,packing:Ld,premultiplied_alpha_fragment:Id,project_vertex:Dd,dithering_fragment:Od,dithering_pars_fragment:Nd,roughnessmap_fragment:Ud,roughnessmap_pars_fragment:zd,shadowmap_pars_fragment:Fd,shadowmap_pars_vertex:Bd,shadowmap_vertex:Gd,shadowmask_pars_fragment:kd,skinbase_vertex:Hd,skinning_pars_vertex:Vd,skinning_vertex:Wd,skinnormal_vertex:Yd,specularmap_fragment:Xd,specularmap_pars_fragment:$d,tonemapping_fragment:Kd,tonemapping_pars_fragment:qd,transmission_fragment:Zd,transmission_pars_fragment:jd,uv_pars_fragment:Jd,uv_pars_vertex:Qd,uv_vertex:tu,worldpos_vertex:eu,background_vert:iu,background_frag:nu,backgroundCube_vert:su,backgroundCube_frag:au,cube_vert:ru,cube_frag:ou,depth_vert:lu,depth_frag:cu,distanceRGBA_vert:hu,distanceRGBA_frag:du,equirect_vert:uu,equirect_frag:fu,linedashed_vert:pu,linedashed_frag:mu,meshbasic_vert:gu,meshbasic_frag:vu,meshlambert_vert:_u,meshlambert_frag:yu,meshmatcap_vert:xu,meshmatcap_frag:Mu,meshnormal_vert:Tu,meshnormal_frag:Eu,meshphong_vert:Su,meshphong_frag:bu,meshphysical_vert:Au,meshphysical_frag:wu,meshtoon_vert:Pu,meshtoon_frag:Cu,points_vert:Ru,points_frag:Lu,shadow_vert:Iu,shadow_frag:Du,sprite_vert:Ou,sprite_frag:Nu},_t={common:{diffuse:{value:new Jt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Kt},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Kt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Kt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Kt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Kt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Kt},normalScale:{value:new Ut(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Kt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Kt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Kt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Kt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Jt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Jt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0},uvTransform:{value:new Kt}},sprite:{diffuse:{value:new Jt(16777215)},opacity:{value:1},center:{value:new Ut(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Kt},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0}}},$e={basic:{uniforms:Te([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.fog]),vertexShader:Yt.meshbasic_vert,fragmentShader:Yt.meshbasic_frag},lambert:{uniforms:Te([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,_t.lights,{emissive:{value:new Jt(0)}}]),vertexShader:Yt.meshlambert_vert,fragmentShader:Yt.meshlambert_frag},phong:{uniforms:Te([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,_t.lights,{emissive:{value:new Jt(0)},specular:{value:new Jt(1118481)},shininess:{value:30}}]),vertexShader:Yt.meshphong_vert,fragmentShader:Yt.meshphong_frag},standard:{uniforms:Te([_t.common,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.roughnessmap,_t.metalnessmap,_t.fog,_t.lights,{emissive:{value:new Jt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Yt.meshphysical_vert,fragmentShader:Yt.meshphysical_frag},toon:{uniforms:Te([_t.common,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.gradientmap,_t.fog,_t.lights,{emissive:{value:new Jt(0)}}]),vertexShader:Yt.meshtoon_vert,fragmentShader:Yt.meshtoon_frag},matcap:{uniforms:Te([_t.common,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,{matcap:{value:null}}]),vertexShader:Yt.meshmatcap_vert,fragmentShader:Yt.meshmatcap_frag},points:{uniforms:Te([_t.points,_t.fog]),vertexShader:Yt.points_vert,fragmentShader:Yt.points_frag},dashed:{uniforms:Te([_t.common,_t.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Yt.linedashed_vert,fragmentShader:Yt.linedashed_frag},depth:{uniforms:Te([_t.common,_t.displacementmap]),vertexShader:Yt.depth_vert,fragmentShader:Yt.depth_frag},normal:{uniforms:Te([_t.common,_t.bumpmap,_t.normalmap,_t.displacementmap,{opacity:{value:1}}]),vertexShader:Yt.meshnormal_vert,fragmentShader:Yt.meshnormal_frag},sprite:{uniforms:Te([_t.sprite,_t.fog]),vertexShader:Yt.sprite_vert,fragmentShader:Yt.sprite_frag},background:{uniforms:{uvTransform:{value:new Kt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Yt.background_vert,fragmentShader:Yt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Yt.backgroundCube_vert,fragmentShader:Yt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Yt.cube_vert,fragmentShader:Yt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Yt.equirect_vert,fragmentShader:Yt.equirect_frag},distanceRGBA:{uniforms:Te([_t.common,_t.displacementmap,{referencePosition:{value:new $},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Yt.distanceRGBA_vert,fragmentShader:Yt.distanceRGBA_frag},shadow:{uniforms:Te([_t.lights,_t.fog,{color:{value:new Jt(0)},opacity:{value:1}}]),vertexShader:Yt.shadow_vert,fragmentShader:Yt.shadow_frag}};$e.physical={uniforms:Te([$e.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Kt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Kt},clearcoatNormalScale:{value:new Ut(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Kt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Kt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Kt},sheen:{value:0},sheenColor:{value:new Jt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Kt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Kt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Kt},transmissionSamplerSize:{value:new Ut},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Kt},attenuationDistance:{value:0},attenuationColor:{value:new Jt(0)},specularColor:{value:new Jt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Kt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Kt},anisotropyVector:{value:new Ut},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Kt}}]),vertexShader:Yt.meshphysical_vert,fragmentShader:Yt.meshphysical_frag};const Qn={r:0,b:0,g:0};function Uu(s,t,e,i,n,a,o){const r=new Jt(0);let c=a===!0?0:1,l,u,f=null,p=0,g=null;function m(d,h){let x=!1,v=h.isScene===!0?h.background:null;v&&v.isTexture&&(v=(h.backgroundBlurriness>0?e:t).get(v)),v===null?_(r,c):v&&v.isColor&&(_(v,1),x=!0);const y=s.xr.getEnvironmentBlendMode();y==="additive"?i.buffers.color.setClear(0,0,0,1,o):y==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(s.autoClear||x)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),v&&(v.isCubeTexture||v.mapping===gs)?(u===void 0&&(u=new te(new we(1,1,1),new Di({name:"BackgroundCubeMaterial",uniforms:un($e.backgroundCube.uniforms),vertexShader:$e.backgroundCube.vertexShader,fragmentShader:$e.backgroundCube.fragmentShader,side:Pe,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(T,A,S){this.matrixWorld.copyPosition(S.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(u)),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=h.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,u.material.toneMapped=Qt.getTransfer(v.colorSpace)!==ee,(f!==v||p!==v.version||g!==s.toneMapping)&&(u.material.needsUpdate=!0,f=v,p=v.version,g=s.toneMapping),u.layers.enableAll(),d.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new te(new wa(2,2),new Di({name:"BackgroundMaterial",uniforms:un($e.background.uniforms),vertexShader:$e.background.vertexShader,fragmentShader:$e.background.fragmentShader,side:vi,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,l.material.toneMapped=Qt.getTransfer(v.colorSpace)!==ee,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(f!==v||p!==v.version||g!==s.toneMapping)&&(l.material.needsUpdate=!0,f=v,p=v.version,g=s.toneMapping),l.layers.enableAll(),d.unshift(l,l.geometry,l.material,0,0,null))}function _(d,h){d.getRGB(Qn,Go(s)),i.buffers.color.setClear(Qn.r,Qn.g,Qn.b,h,o)}return{getClearColor:function(){return r},setClearColor:function(d,h=1){r.set(d),c=h,_(r,c)},getClearAlpha:function(){return c},setClearAlpha:function(d){c=d,_(r,c)},render:m}}function zu(s,t,e,i){const n=s.getParameter(s.MAX_VERTEX_ATTRIBS),a=i.isWebGL2?null:t.get("OES_vertex_array_object"),o=i.isWebGL2||a!==null,r={},c=d(null);let l=c,u=!1;function f(R,U,G,Z,V){let W=!1;if(o){const J=_(Z,G,U);l!==J&&(l=J,g(l.object)),W=h(R,Z,G,V),W&&x(R,Z,G,V)}else{const J=U.wireframe===!0;(l.geometry!==Z.id||l.program!==G.id||l.wireframe!==J)&&(l.geometry=Z.id,l.program=G.id,l.wireframe=J,W=!0)}V!==null&&e.update(V,s.ELEMENT_ARRAY_BUFFER),(W||u)&&(u=!1,I(R,U,G,Z),V!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(V).buffer))}function p(){return i.isWebGL2?s.createVertexArray():a.createVertexArrayOES()}function g(R){return i.isWebGL2?s.bindVertexArray(R):a.bindVertexArrayOES(R)}function m(R){return i.isWebGL2?s.deleteVertexArray(R):a.deleteVertexArrayOES(R)}function _(R,U,G){const Z=G.wireframe===!0;let V=r[R.id];V===void 0&&(V={},r[R.id]=V);let W=V[U.id];W===void 0&&(W={},V[U.id]=W);let J=W[Z];return J===void 0&&(J=d(p()),W[Z]=J),J}function d(R){const U=[],G=[],Z=[];for(let V=0;V<n;V++)U[V]=0,G[V]=0,Z[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:G,attributeDivisors:Z,object:R,attributes:{},index:null}}function h(R,U,G,Z){const V=l.attributes,W=U.attributes;let J=0;const it=G.getAttributes();for(const nt in it)if(it[nt].location>=0){const C=V[nt];let z=W[nt];if(z===void 0&&(nt==="instanceMatrix"&&R.instanceMatrix&&(z=R.instanceMatrix),nt==="instanceColor"&&R.instanceColor&&(z=R.instanceColor)),C===void 0||C.attribute!==z||z&&C.data!==z.data)return!0;J++}return l.attributesNum!==J||l.index!==Z}function x(R,U,G,Z){const V={},W=U.attributes;let J=0;const it=G.getAttributes();for(const nt in it)if(it[nt].location>=0){let C=W[nt];C===void 0&&(nt==="instanceMatrix"&&R.instanceMatrix&&(C=R.instanceMatrix),nt==="instanceColor"&&R.instanceColor&&(C=R.instanceColor));const z={};z.attribute=C,C&&C.data&&(z.data=C.data),V[nt]=z,J++}l.attributes=V,l.attributesNum=J,l.index=Z}function v(){const R=l.newAttributes;for(let U=0,G=R.length;U<G;U++)R[U]=0}function y(R){T(R,0)}function T(R,U){const G=l.newAttributes,Z=l.enabledAttributes,V=l.attributeDivisors;G[R]=1,Z[R]===0&&(s.enableVertexAttribArray(R),Z[R]=1),V[R]!==U&&((i.isWebGL2?s:t.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](R,U),V[R]=U)}function A(){const R=l.newAttributes,U=l.enabledAttributes;for(let G=0,Z=U.length;G<Z;G++)U[G]!==R[G]&&(s.disableVertexAttribArray(G),U[G]=0)}function S(R,U,G,Z,V,W,J){J===!0?s.vertexAttribIPointer(R,U,G,V,W):s.vertexAttribPointer(R,U,G,Z,V,W)}function I(R,U,G,Z){if(i.isWebGL2===!1&&(R.isInstancedMesh||Z.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;v();const V=Z.attributes,W=G.getAttributes(),J=U.defaultAttributeValues;for(const it in W){const nt=W[it];if(nt.location>=0){let X=V[it];if(X===void 0&&(it==="instanceMatrix"&&R.instanceMatrix&&(X=R.instanceMatrix),it==="instanceColor"&&R.instanceColor&&(X=R.instanceColor)),X!==void 0){const C=X.normalized,z=X.itemSize,q=e.get(X);if(q===void 0)continue;const B=q.buffer,j=q.type,ct=q.bytesPerElement,pt=i.isWebGL2===!0&&(j===s.INT||j===s.UNSIGNED_INT||X.gpuType===Eo);if(X.isInterleavedBufferAttribute){const Pt=X.data,H=Pt.stride,Bt=X.offset;if(Pt.isInstancedInterleavedBuffer){for(let gt=0;gt<nt.locationSize;gt++)T(nt.location+gt,Pt.meshPerAttribute);R.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=Pt.meshPerAttribute*Pt.count)}else for(let gt=0;gt<nt.locationSize;gt++)y(nt.location+gt);s.bindBuffer(s.ARRAY_BUFFER,B);for(let gt=0;gt<nt.locationSize;gt++)S(nt.location+gt,z/nt.locationSize,j,C,H*ct,(Bt+z/nt.locationSize*gt)*ct,pt)}else{if(X.isInstancedBufferAttribute){for(let Pt=0;Pt<nt.locationSize;Pt++)T(nt.location+Pt,X.meshPerAttribute);R.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let Pt=0;Pt<nt.locationSize;Pt++)y(nt.location+Pt);s.bindBuffer(s.ARRAY_BUFFER,B);for(let Pt=0;Pt<nt.locationSize;Pt++)S(nt.location+Pt,z/nt.locationSize,j,C,z*ct,z/nt.locationSize*Pt*ct,pt)}}else if(J!==void 0){const C=J[it];if(C!==void 0)switch(C.length){case 2:s.vertexAttrib2fv(nt.location,C);break;case 3:s.vertexAttrib3fv(nt.location,C);break;case 4:s.vertexAttrib4fv(nt.location,C);break;default:s.vertexAttrib1fv(nt.location,C)}}}}A()}function M(){D();for(const R in r){const U=r[R];for(const G in U){const Z=U[G];for(const V in Z)m(Z[V].object),delete Z[V];delete U[G]}delete r[R]}}function b(R){if(r[R.id]===void 0)return;const U=r[R.id];for(const G in U){const Z=U[G];for(const V in Z)m(Z[V].object),delete Z[V];delete U[G]}delete r[R.id]}function F(R){for(const U in r){const G=r[U];if(G[R.id]===void 0)continue;const Z=G[R.id];for(const V in Z)m(Z[V].object),delete Z[V];delete G[R.id]}}function D(){Y(),u=!0,l!==c&&(l=c,g(l.object))}function Y(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:f,reset:D,resetDefaultState:Y,dispose:M,releaseStatesOfGeometry:b,releaseStatesOfProgram:F,initAttributes:v,enableAttribute:y,disableUnusedAttributes:A}}function Fu(s,t,e,i){const n=i.isWebGL2;let a;function o(u){a=u}function r(u,f){s.drawArrays(a,u,f),e.update(f,a,1)}function c(u,f,p){if(p===0)return;let g,m;if(n)g=s,m="drawArraysInstanced";else if(g=t.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",g===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[m](a,u,f,p),e.update(f,a,p)}function l(u,f,p){if(p===0)return;const g=t.get("WEBGL_multi_draw");if(g===null)for(let m=0;m<p;m++)this.render(u[m],f[m]);else{g.multiDrawArraysWEBGL(a,u,0,f,0,p);let m=0;for(let _=0;_<p;_++)m+=f[_];e.update(m,a,1)}}this.setMode=o,this.render=r,this.renderInstances=c,this.renderMultiDraw=l}function Bu(s,t,e){let i;function n(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const S=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(S.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(S){if(S==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";S="mediump"}return S==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&s.constructor.name==="WebGL2RenderingContext";let r=e.precision!==void 0?e.precision:"highp";const c=a(r);c!==r&&(console.warn("THREE.WebGLRenderer:",r,"not supported, using",c,"instead."),r=c);const l=o||t.has("WEBGL_draw_buffers"),u=e.logarithmicDepthBuffer===!0,f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),p=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),_=s.getParameter(s.MAX_VERTEX_ATTRIBS),d=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),h=s.getParameter(s.MAX_VARYING_VECTORS),x=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),v=p>0,y=o||t.has("OES_texture_float"),T=v&&y,A=o?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:n,getMaxPrecision:a,precision:r,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:p,maxTextureSize:g,maxCubemapSize:m,maxAttributes:_,maxVertexUniforms:d,maxVaryings:h,maxFragmentUniforms:x,vertexTextures:v,floatFragmentTextures:y,floatVertexTextures:T,maxSamples:A}}function Gu(s){const t=this;let e=null,i=0,n=!1,a=!1;const o=new di,r=new Kt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,p){const g=f.length!==0||p||i!==0||n;return n=p,i=f.length,g},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(f,p){e=u(f,p,0)},this.setState=function(f,p,g){const m=f.clippingPlanes,_=f.clipIntersection,d=f.clipShadows,h=s.get(f);if(!n||m===null||m.length===0||a&&!d)a?u(null):l();else{const x=a?0:i,v=x*4;let y=h.clippingState||null;c.value=y,y=u(m,p,v,g);for(let T=0;T!==v;++T)y[T]=e[T];h.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=x}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(f,p,g,m){const _=f!==null?f.length:0;let d=null;if(_!==0){if(d=c.value,m!==!0||d===null){const h=g+_*4,x=p.matrixWorldInverse;r.getNormalMatrix(x),(d===null||d.length<h)&&(d=new Float32Array(h));for(let v=0,y=g;v!==_;++v,y+=4)o.copy(f[v]).applyMatrix4(x,r),o.normal.toArray(d,y),d[y+3]=o.constant}c.value=d,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,d}}function ku(s){let t=new WeakMap;function e(o,r){return r===la?o.mapping=cn:r===ca&&(o.mapping=hn),o}function i(o){if(o&&o.isTexture){const r=o.mapping;if(r===la||r===ca)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new Qc(c.height/2);return l.fromEquirectangularTexture(s,o),t.set(o,l),o.addEventListener("dispose",n),e(l.texture,o.mapping)}else return null}}return o}function n(o){const r=o.target;r.removeEventListener("dispose",n);const c=t.get(r);c!==void 0&&(t.delete(r),c.dispose())}function a(){t=new WeakMap}return{get:i,dispose:a}}class Wo extends ko{constructor(t=-1,e=1,i=1,n=-1,a=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=n,this.near=a,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,n,a,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=a,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2;let a=i-t,o=i+t,r=n+e,c=n-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=l*this.view.offsetX,o=a+l*this.view.width,r-=u*this.view.offsetY,c=r-u*this.view.height}this.projectionMatrix.makeOrthographic(a,o,r,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const nn=4,Br=[.125,.215,.35,.446,.526,.582],wi=20,qs=new Wo,Gr=new Jt;let Zs=null,js=0,Js=0;const bi=(1+Math.sqrt(5))/2,tn=1/bi,kr=[new $(1,1,1),new $(-1,1,1),new $(1,1,-1),new $(-1,1,-1),new $(0,bi,tn),new $(0,bi,-tn),new $(tn,0,bi),new $(-tn,0,bi),new $(bi,tn,0),new $(-bi,tn,0)];class Hr{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,n=100){Zs=this._renderer.getRenderTarget(),js=this._renderer.getActiveCubeFace(),Js=this._renderer.getActiveMipmapLevel(),this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(t,i,n,a),e>0&&this._blur(a,0,0,e),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Yr(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Wr(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Zs,js,Js),t.scissorTest=!1,ts(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===cn||t.mapping===hn?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Zs=this._renderer.getRenderTarget(),js=this._renderer.getActiveCubeFace(),Js=this._renderer.getActiveMipmapLevel();const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:ze,minFilter:ze,generateMipmaps:!1,type:An,format:Ye,colorSpace:ai,depthBuffer:!1},n=Vr(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Vr(t,e,i);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Hu(a)),this._blurMaterial=Vu(a,t,e)}return n}_compileMaterial(t){const e=new te(this._lodPlanes[0],t);this._renderer.compile(e,qs)}_sceneToCubeUV(t,e,i,n){const r=new Fe(90,1,e,i),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,p=u.toneMapping;u.getClearColor(Gr),u.toneMapping=mi,u.autoClear=!1;const g=new us({name:"PMREM.Background",side:Pe,depthWrite:!1,depthTest:!1}),m=new te(new we,g);let _=!1;const d=t.background;d?d.isColor&&(g.color.copy(d),t.background=null,_=!0):(g.color.copy(Gr),_=!0);for(let h=0;h<6;h++){const x=h%3;x===0?(r.up.set(0,c[h],0),r.lookAt(l[h],0,0)):x===1?(r.up.set(0,0,c[h]),r.lookAt(0,l[h],0)):(r.up.set(0,c[h],0),r.lookAt(0,0,l[h]));const v=this._cubeSize;ts(n,x*v,h>2?v:0,v,v),u.setRenderTarget(n),_&&u.render(m,r),u.render(t,r)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=p,u.autoClear=f,t.background=d}_textureToCubeUV(t,e){const i=this._renderer,n=t.mapping===cn||t.mapping===hn;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=Yr()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Wr());const a=n?this._cubemapMaterial:this._equirectMaterial,o=new te(this._lodPlanes[0],a),r=a.uniforms;r.envMap.value=t;const c=this._cubeSize;ts(e,0,0,3*c,2*c),i.setRenderTarget(e),i.render(o,qs)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;for(let n=1;n<this._lodPlanes.length;n++){const a=Math.sqrt(this._sigmas[n]*this._sigmas[n]-this._sigmas[n-1]*this._sigmas[n-1]),o=kr[(n-1)%kr.length];this._blur(t,n-1,n,a,o)}e.autoClear=i}_blur(t,e,i,n,a){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,n,"latitudinal",a),this._halfBlur(o,t,i,i,n,"longitudinal",a)}_halfBlur(t,e,i,n,a,o,r){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new te(this._lodPlanes[n],l),p=l.uniforms,g=this._sizeLods[i]-1,m=isFinite(a)?Math.PI/(2*g):2*Math.PI/(2*wi-1),_=a/m,d=isFinite(a)?1+Math.floor(u*_):wi;d>wi&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${d} samples when the maximum is set to ${wi}`);const h=[];let x=0;for(let S=0;S<wi;++S){const I=S/_,M=Math.exp(-I*I/2);h.push(M),S===0?x+=M:S<d&&(x+=2*M)}for(let S=0;S<h.length;S++)h[S]=h[S]/x;p.envMap.value=t.texture,p.samples.value=d,p.weights.value=h,p.latitudinal.value=o==="latitudinal",r&&(p.poleAxis.value=r);const{_lodMax:v}=this;p.dTheta.value=m,p.mipInt.value=v-i;const y=this._sizeLods[n],T=3*y*(n>v-nn?n-v+nn:0),A=4*(this._cubeSize-y);ts(e,T,A,3*y,2*y),c.setRenderTarget(e),c.render(f,qs)}}function Hu(s){const t=[],e=[],i=[];let n=s;const a=s-nn+1+Br.length;for(let o=0;o<a;o++){const r=Math.pow(2,n);e.push(r);let c=1/r;o>s-nn?c=Br[o-s+nn-1]:o===0&&(c=0),i.push(c);const l=1/(r-2),u=-l,f=1+l,p=[u,u,f,u,f,f,u,u,f,f,u,f],g=6,m=6,_=3,d=2,h=1,x=new Float32Array(_*m*g),v=new Float32Array(d*m*g),y=new Float32Array(h*m*g);for(let A=0;A<g;A++){const S=A%3*2/3-1,I=A>2?0:-1,M=[S,I,0,S+2/3,I,0,S+2/3,I+1,0,S,I,0,S+2/3,I+1,0,S,I+1,0];x.set(M,_*m*A),v.set(p,d*m*A);const b=[A,A,A,A,A,A];y.set(b,h*m*A)}const T=new qe;T.setAttribute("position",new Ke(x,_)),T.setAttribute("uv",new Ke(v,d)),T.setAttribute("faceIndex",new Ke(y,h)),t.push(T),n>nn&&n--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function Vr(s,t,e){const i=new Li(s,t,e);return i.texture.mapping=gs,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ts(s,t,e,i,n){s.viewport.set(t,e,i,n),s.scissor.set(t,e,i,n)}function Vu(s,t,e){const i=new Float32Array(wi),n=new $(0,1,0);return new Di({name:"SphericalGaussianBlur",defines:{n:wi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n}},vertexShader:Pa(),fragmentShader:`

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
	`}function Wu(s){let t=new WeakMap,e=null;function i(r){if(r&&r.isTexture){const c=r.mapping,l=c===la||c===ca,u=c===cn||c===hn;if(l||u)if(r.isRenderTargetTexture&&r.needsPMREMUpdate===!0){r.needsPMREMUpdate=!1;let f=t.get(r);return e===null&&(e=new Hr(s)),f=l?e.fromEquirectangular(r,f):e.fromCubemap(r,f),t.set(r,f),f.texture}else{if(t.has(r))return t.get(r).texture;{const f=r.image;if(l&&f&&f.height>0||u&&f&&n(f)){e===null&&(e=new Hr(s));const p=l?e.fromEquirectangular(r):e.fromCubemap(r);return t.set(r,p),r.addEventListener("dispose",a),p.texture}else return null}}}return r}function n(r){let c=0;const l=6;for(let u=0;u<l;u++)r[u]!==void 0&&c++;return c===l}function a(r){const c=r.target;c.removeEventListener("dispose",a);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function Yu(s){const t={};function e(i){if(t[i]!==void 0)return t[i];let n;switch(i){case"WEBGL_depth_texture":n=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":n=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":n=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":n=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:n=s.getExtension(i)}return t[i]=n,n}return{has:function(i){return e(i)!==null},init:function(i){i.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(i){const n=e(i);return n===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),n}}}function Xu(s,t,e,i){const n={},a=new WeakMap;function o(f){const p=f.target;p.index!==null&&t.remove(p.index);for(const m in p.attributes)t.remove(p.attributes[m]);for(const m in p.morphAttributes){const _=p.morphAttributes[m];for(let d=0,h=_.length;d<h;d++)t.remove(_[d])}p.removeEventListener("dispose",o),delete n[p.id];const g=a.get(p);g&&(t.remove(g),a.delete(p)),i.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,e.memory.geometries--}function r(f,p){return n[p.id]===!0||(p.addEventListener("dispose",o),n[p.id]=!0,e.memory.geometries++),p}function c(f){const p=f.attributes;for(const m in p)t.update(p[m],s.ARRAY_BUFFER);const g=f.morphAttributes;for(const m in g){const _=g[m];for(let d=0,h=_.length;d<h;d++)t.update(_[d],s.ARRAY_BUFFER)}}function l(f){const p=[],g=f.index,m=f.attributes.position;let _=0;if(g!==null){const x=g.array;_=g.version;for(let v=0,y=x.length;v<y;v+=3){const T=x[v+0],A=x[v+1],S=x[v+2];p.push(T,A,A,S,S,T)}}else if(m!==void 0){const x=m.array;_=m.version;for(let v=0,y=x.length/3-1;v<y;v+=3){const T=v+0,A=v+1,S=v+2;p.push(T,A,A,S,S,T)}}else return;const d=new(Do(p)?Bo:Fo)(p,1);d.version=_;const h=a.get(f);h&&t.remove(h),a.set(f,d)}function u(f){const p=a.get(f);if(p){const g=f.index;g!==null&&p.version<g.version&&l(f)}else l(f);return a.get(f)}return{get:r,update:c,getWireframeAttribute:u}}function $u(s,t,e,i){const n=i.isWebGL2;let a;function o(g){a=g}let r,c;function l(g){r=g.type,c=g.bytesPerElement}function u(g,m){s.drawElements(a,m,r,g*c),e.update(m,a,1)}function f(g,m,_){if(_===0)return;let d,h;if(n)d=s,h="drawElementsInstanced";else if(d=t.get("ANGLE_instanced_arrays"),h="drawElementsInstancedANGLE",d===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[h](a,m,r,g*c,_),e.update(m,a,_)}function p(g,m,_){if(_===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let h=0;h<_;h++)this.render(g[h]/c,m[h]);else{d.multiDrawElementsWEBGL(a,m,0,r,g,0,_);let h=0;for(let x=0;x<_;x++)h+=m[x];e.update(h,a,1)}}this.setMode=o,this.setIndex=l,this.render=u,this.renderInstances=f,this.renderMultiDraw=p}function Ku(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,o,r){switch(e.calls++,o){case s.TRIANGLES:e.triangles+=r*(a/3);break;case s.LINES:e.lines+=r*(a/2);break;case s.LINE_STRIP:e.lines+=r*(a-1);break;case s.LINE_LOOP:e.lines+=r*a;break;case s.POINTS:e.points+=r*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function n(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:n,update:i}}function qu(s,t){return s[0]-t[0]}function Zu(s,t){return Math.abs(t[1])-Math.abs(s[1])}function ju(s,t,e){const i={},n=new Float32Array(8),a=new WeakMap,o=new me,r=[];for(let l=0;l<8;l++)r[l]=[l,0];function c(l,u,f){const p=l.morphTargetInfluences;if(t.isWebGL2===!0){const m=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,_=m!==void 0?m.length:0;let d=a.get(u);if(d===void 0||d.count!==_){let U=function(){Y.dispose(),a.delete(u),u.removeEventListener("dispose",U)};var g=U;d!==void 0&&d.texture.dispose();const v=u.morphAttributes.position!==void 0,y=u.morphAttributes.normal!==void 0,T=u.morphAttributes.color!==void 0,A=u.morphAttributes.position||[],S=u.morphAttributes.normal||[],I=u.morphAttributes.color||[];let M=0;v===!0&&(M=1),y===!0&&(M=2),T===!0&&(M=3);let b=u.attributes.position.count*M,F=1;b>t.maxTextureSize&&(F=Math.ceil(b/t.maxTextureSize),b=t.maxTextureSize);const D=new Float32Array(b*F*4*_),Y=new Uo(D,b,F,_);Y.type=fi,Y.needsUpdate=!0;const R=M*4;for(let G=0;G<_;G++){const Z=A[G],V=S[G],W=I[G],J=b*F*4*G;for(let it=0;it<Z.count;it++){const nt=it*R;v===!0&&(o.fromBufferAttribute(Z,it),D[J+nt+0]=o.x,D[J+nt+1]=o.y,D[J+nt+2]=o.z,D[J+nt+3]=0),y===!0&&(o.fromBufferAttribute(V,it),D[J+nt+4]=o.x,D[J+nt+5]=o.y,D[J+nt+6]=o.z,D[J+nt+7]=0),T===!0&&(o.fromBufferAttribute(W,it),D[J+nt+8]=o.x,D[J+nt+9]=o.y,D[J+nt+10]=o.z,D[J+nt+11]=W.itemSize===4?o.w:1)}}d={count:_,texture:Y,size:new Ut(b,F)},a.set(u,d),u.addEventListener("dispose",U)}let h=0;for(let v=0;v<p.length;v++)h+=p[v];const x=u.morphTargetsRelative?1:1-h;f.getUniforms().setValue(s,"morphTargetBaseInfluence",x),f.getUniforms().setValue(s,"morphTargetInfluences",p),f.getUniforms().setValue(s,"morphTargetsTexture",d.texture,e),f.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}else{const m=p===void 0?0:p.length;let _=i[u.id];if(_===void 0||_.length!==m){_=[];for(let y=0;y<m;y++)_[y]=[y,0];i[u.id]=_}for(let y=0;y<m;y++){const T=_[y];T[0]=y,T[1]=p[y]}_.sort(Zu);for(let y=0;y<8;y++)y<m&&_[y][1]?(r[y][0]=_[y][0],r[y][1]=_[y][1]):(r[y][0]=Number.MAX_SAFE_INTEGER,r[y][1]=0);r.sort(qu);const d=u.morphAttributes.position,h=u.morphAttributes.normal;let x=0;for(let y=0;y<8;y++){const T=r[y],A=T[0],S=T[1];A!==Number.MAX_SAFE_INTEGER&&S?(d&&u.getAttribute("morphTarget"+y)!==d[A]&&u.setAttribute("morphTarget"+y,d[A]),h&&u.getAttribute("morphNormal"+y)!==h[A]&&u.setAttribute("morphNormal"+y,h[A]),n[y]=S,x+=S):(d&&u.hasAttribute("morphTarget"+y)===!0&&u.deleteAttribute("morphTarget"+y),h&&u.hasAttribute("morphNormal"+y)===!0&&u.deleteAttribute("morphNormal"+y),n[y]=0)}const v=u.morphTargetsRelative?1:1-x;f.getUniforms().setValue(s,"morphTargetBaseInfluence",v),f.getUniforms().setValue(s,"morphTargetInfluences",n)}}return{update:c}}function Ju(s,t,e,i){let n=new WeakMap;function a(c){const l=i.render.frame,u=c.geometry,f=t.get(c,u);if(n.get(f)!==l&&(t.update(f),n.set(f,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",r)===!1&&c.addEventListener("dispose",r),n.get(c)!==l&&(e.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,s.ARRAY_BUFFER),n.set(c,l))),c.isSkinnedMesh){const p=c.skeleton;n.get(p)!==l&&(p.update(),n.set(p,l))}return f}function o(){n=new WeakMap}function r(c){const l=c.target;l.removeEventListener("dispose",r),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:a,dispose:o}}class Yo extends De{constructor(t,e,i,n,a,o,r,c,l,u){if(u=u!==void 0?u:Ci,u!==Ci&&u!==dn)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Ci&&(i=ui),i===void 0&&u===dn&&(i=Pi),super(null,n,a,o,r,c,u,i,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=r!==void 0?r:Ee,this.minFilter=c!==void 0?c:Ee,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Xo=new De,$o=new Yo(1,1);$o.compareFunction=Io;const Ko=new Uo,qo=new Uc,Zo=new Ho,Xr=[],$r=[],Kr=new Float32Array(16),qr=new Float32Array(9),Zr=new Float32Array(4);function fn(s,t,e){const i=s[0];if(i<=0||i>0)return s;const n=t*e;let a=Xr[n];if(a===void 0&&(a=new Float32Array(n),Xr[n]=a),t!==0){i.toArray(a,0);for(let o=1,r=0;o!==t;++o)r+=e,s[o].toArray(a,r)}return a}function de(s,t){if(s.length!==t.length)return!1;for(let e=0,i=s.length;e<i;e++)if(s[e]!==t[e])return!1;return!0}function ue(s,t){for(let e=0,i=t.length;e<i;e++)s[e]=t[e]}function ys(s,t){let e=$r[t];e===void 0&&(e=new Int32Array(t),$r[t]=e);for(let i=0;i!==t;++i)e[i]=s.allocateTextureUnit();return e}function Qu(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function tf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(de(e,t))return;s.uniform2fv(this.addr,t),ue(e,t)}}function ef(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(de(e,t))return;s.uniform3fv(this.addr,t),ue(e,t)}}function nf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(de(e,t))return;s.uniform4fv(this.addr,t),ue(e,t)}}function sf(s,t){const e=this.cache,i=t.elements;if(i===void 0){if(de(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),ue(e,t)}else{if(de(e,i))return;Zr.set(i),s.uniformMatrix2fv(this.addr,!1,Zr),ue(e,i)}}function af(s,t){const e=this.cache,i=t.elements;if(i===void 0){if(de(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),ue(e,t)}else{if(de(e,i))return;qr.set(i),s.uniformMatrix3fv(this.addr,!1,qr),ue(e,i)}}function rf(s,t){const e=this.cache,i=t.elements;if(i===void 0){if(de(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),ue(e,t)}else{if(de(e,i))return;Kr.set(i),s.uniformMatrix4fv(this.addr,!1,Kr),ue(e,i)}}function of(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function lf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(de(e,t))return;s.uniform2iv(this.addr,t),ue(e,t)}}function cf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(de(e,t))return;s.uniform3iv(this.addr,t),ue(e,t)}}function hf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(de(e,t))return;s.uniform4iv(this.addr,t),ue(e,t)}}function df(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function uf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(de(e,t))return;s.uniform2uiv(this.addr,t),ue(e,t)}}function ff(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(de(e,t))return;s.uniform3uiv(this.addr,t),ue(e,t)}}function pf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(de(e,t))return;s.uniform4uiv(this.addr,t),ue(e,t)}}function mf(s,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n);const a=this.type===s.SAMPLER_2D_SHADOW?$o:Xo;e.setTexture2D(t||a,n)}function gf(s,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),e.setTexture3D(t||qo,n)}function vf(s,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),e.setTextureCube(t||Zo,n)}function _f(s,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),e.setTexture2DArray(t||Ko,n)}function yf(s){switch(s){case 5126:return Qu;case 35664:return tf;case 35665:return ef;case 35666:return nf;case 35674:return sf;case 35675:return af;case 35676:return rf;case 5124:case 35670:return of;case 35667:case 35671:return lf;case 35668:case 35672:return cf;case 35669:case 35673:return hf;case 5125:return df;case 36294:return uf;case 36295:return ff;case 36296:return pf;case 35678:case 36198:case 36298:case 36306:case 35682:return mf;case 35679:case 36299:case 36307:return gf;case 35680:case 36300:case 36308:case 36293:return vf;case 36289:case 36303:case 36311:case 36292:return _f}}function xf(s,t){s.uniform1fv(this.addr,t)}function Mf(s,t){const e=fn(t,this.size,2);s.uniform2fv(this.addr,e)}function Tf(s,t){const e=fn(t,this.size,3);s.uniform3fv(this.addr,e)}function Ef(s,t){const e=fn(t,this.size,4);s.uniform4fv(this.addr,e)}function Sf(s,t){const e=fn(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function bf(s,t){const e=fn(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function Af(s,t){const e=fn(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function wf(s,t){s.uniform1iv(this.addr,t)}function Pf(s,t){s.uniform2iv(this.addr,t)}function Cf(s,t){s.uniform3iv(this.addr,t)}function Rf(s,t){s.uniform4iv(this.addr,t)}function Lf(s,t){s.uniform1uiv(this.addr,t)}function If(s,t){s.uniform2uiv(this.addr,t)}function Df(s,t){s.uniform3uiv(this.addr,t)}function Of(s,t){s.uniform4uiv(this.addr,t)}function Nf(s,t,e){const i=this.cache,n=t.length,a=ys(e,n);de(i,a)||(s.uniform1iv(this.addr,a),ue(i,a));for(let o=0;o!==n;++o)e.setTexture2D(t[o]||Xo,a[o])}function Uf(s,t,e){const i=this.cache,n=t.length,a=ys(e,n);de(i,a)||(s.uniform1iv(this.addr,a),ue(i,a));for(let o=0;o!==n;++o)e.setTexture3D(t[o]||qo,a[o])}function zf(s,t,e){const i=this.cache,n=t.length,a=ys(e,n);de(i,a)||(s.uniform1iv(this.addr,a),ue(i,a));for(let o=0;o!==n;++o)e.setTextureCube(t[o]||Zo,a[o])}function Ff(s,t,e){const i=this.cache,n=t.length,a=ys(e,n);de(i,a)||(s.uniform1iv(this.addr,a),ue(i,a));for(let o=0;o!==n;++o)e.setTexture2DArray(t[o]||Ko,a[o])}function Bf(s){switch(s){case 5126:return xf;case 35664:return Mf;case 35665:return Tf;case 35666:return Ef;case 35674:return Sf;case 35675:return bf;case 35676:return Af;case 5124:case 35670:return wf;case 35667:case 35671:return Pf;case 35668:case 35672:return Cf;case 35669:case 35673:return Rf;case 5125:return Lf;case 36294:return If;case 36295:return Df;case 36296:return Of;case 35678:case 36198:case 36298:case 36306:case 35682:return Nf;case 35679:case 36299:case 36307:return Uf;case 35680:case 36300:case 36308:case 36293:return zf;case 36289:case 36303:case 36311:case 36292:return Ff}}class Gf{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=yf(e.type)}}class kf{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Bf(e.type)}}class Hf{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const n=this.seq;for(let a=0,o=n.length;a!==o;++a){const r=n[a];r.setValue(t,e[r.id],i)}}}const Qs=/(\w+)(\])?(\[|\.)?/g;function jr(s,t){s.seq.push(t),s.map[t.id]=t}function Vf(s,t,e){const i=s.name,n=i.length;for(Qs.lastIndex=0;;){const a=Qs.exec(i),o=Qs.lastIndex;let r=a[1];const c=a[2]==="]",l=a[3];if(c&&(r=r|0),l===void 0||l==="["&&o+2===n){jr(e,l===void 0?new Gf(r,s,t):new kf(r,s,t));break}else{let f=e.map[r];f===void 0&&(f=new Hf(r),jr(e,f)),e=f}}}class as{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let n=0;n<i;++n){const a=t.getActiveUniform(e,n),o=t.getUniformLocation(e,a.name);Vf(a,o,this)}}setValue(t,e,i,n){const a=this.map[e];a!==void 0&&a.setValue(t,i,n)}setOptional(t,e,i){const n=e[i];n!==void 0&&this.setValue(t,i,n)}static upload(t,e,i,n){for(let a=0,o=e.length;a!==o;++a){const r=e[a],c=i[r.id];c.needsUpdate!==!1&&r.setValue(t,c.value,n)}}static seqWithValue(t,e){const i=[];for(let n=0,a=t.length;n!==a;++n){const o=t[n];o.id in e&&i.push(o)}return i}}function Jr(s,t,e){const i=s.createShader(t);return s.shaderSource(i,e),s.compileShader(i),i}const Wf=37297;let Yf=0;function Xf(s,t){const e=s.split(`
`),i=[],n=Math.max(t-6,0),a=Math.min(t+6,e.length);for(let o=n;o<a;o++){const r=o+1;i.push(`${r===t?">":" "} ${r}: ${e[o]}`)}return i.join(`
`)}function $f(s){const t=Qt.getPrimaries(Qt.workingColorSpace),e=Qt.getPrimaries(s);let i;switch(t===e?i="":t===cs&&e===ls?i="LinearDisplayP3ToLinearSRGB":t===ls&&e===cs&&(i="LinearSRGBToLinearDisplayP3"),s){case ai:case vs:return[i,"LinearTransferOETF"];case ge:case Ta:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[i,"LinearTransferOETF"]}}function Qr(s,t,e){const i=s.getShaderParameter(t,s.COMPILE_STATUS),n=s.getShaderInfoLog(t).trim();if(i&&n==="")return"";const a=/ERROR: 0:(\d+)/.exec(n);if(a){const o=parseInt(a[1]);return e.toUpperCase()+`

`+n+`

`+Xf(s.getShaderSource(t),o)}else return n}function Kf(s,t){const e=$f(t);return`vec4 ${s}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function qf(s,t){let e;switch(t){case sc:e="Linear";break;case ac:e="Reinhard";break;case rc:e="OptimizedCineon";break;case oc:e="ACESFilmic";break;case cc:e="AgX";break;case lc:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function Zf(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(sn).join(`
`)}function jf(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(sn).join(`
`)}function Jf(s){const t=[];for(const e in s){const i=s[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function Qf(s,t){const e={},i=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){const a=s.getActiveAttrib(t,n),o=a.name;let r=1;a.type===s.FLOAT_MAT2&&(r=2),a.type===s.FLOAT_MAT3&&(r=3),a.type===s.FLOAT_MAT4&&(r=4),e[o]={type:a.type,location:s.getAttribLocation(t,o),locationSize:r}}return e}function sn(s){return s!==""}function to(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function eo(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const tp=/^[ \t]*#include +<([\w\d./]+)>/gm;function ma(s){return s.replace(tp,ip)}const ep=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function ip(s,t){let e=Yt[t];if(e===void 0){const i=ep.get(t);if(i!==void 0)e=Yt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return ma(e)}const np=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function io(s){return s.replace(np,sp)}function sp(s,t,e,i){let n="";for(let a=parseInt(t);a<parseInt(e);a++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return n}function no(s){let t="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function ap(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Mo?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===Il?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===ii&&(t="SHADOWMAP_TYPE_VSM"),t}function rp(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case cn:case hn:t="ENVMAP_TYPE_CUBE";break;case gs:t="ENVMAP_TYPE_CUBE_UV";break}return t}function op(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case hn:t="ENVMAP_MODE_REFRACTION";break}return t}function lp(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case xa:t="ENVMAP_BLENDING_MULTIPLY";break;case ic:t="ENVMAP_BLENDING_MIX";break;case nc:t="ENVMAP_BLENDING_ADD";break}return t}function cp(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function hp(s,t,e,i){const n=s.getContext(),a=e.defines;let o=e.vertexShader,r=e.fragmentShader;const c=ap(e),l=rp(e),u=op(e),f=lp(e),p=cp(e),g=e.isWebGL2?"":Zf(e),m=jf(e),_=Jf(a),d=n.createProgram();let h,x,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(h=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(sn).join(`
`),h.length>0&&(h+=`
`),x=[g,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(sn).join(`
`),x.length>0&&(x+=`
`)):(h=[no(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(sn).join(`
`),x=[g,no(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+f:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==mi?"#define TONE_MAPPING":"",e.toneMapping!==mi?Yt.tonemapping_pars_fragment:"",e.toneMapping!==mi?qf("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Yt.colorspace_pars_fragment,Kf("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(sn).join(`
`)),o=ma(o),o=to(o,e),o=eo(o,e),r=ma(r),r=to(r,e),r=eo(r,e),o=io(o),r=io(r),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,h=[m,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+h,x=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===Mr?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Mr?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const y=v+h+o,T=v+x+r,A=Jr(n,n.VERTEX_SHADER,y),S=Jr(n,n.FRAGMENT_SHADER,T);n.attachShader(d,A),n.attachShader(d,S),e.index0AttributeName!==void 0?n.bindAttribLocation(d,0,e.index0AttributeName):e.morphTargets===!0&&n.bindAttribLocation(d,0,"position"),n.linkProgram(d);function I(D){if(s.debug.checkShaderErrors){const Y=n.getProgramInfoLog(d).trim(),R=n.getShaderInfoLog(A).trim(),U=n.getShaderInfoLog(S).trim();let G=!0,Z=!0;if(n.getProgramParameter(d,n.LINK_STATUS)===!1)if(G=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(n,d,A,S);else{const V=Qr(n,A,"vertex"),W=Qr(n,S,"fragment");console.error("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(d,n.VALIDATE_STATUS)+`

Program Info Log: `+Y+`
`+V+`
`+W)}else Y!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Y):(R===""||U==="")&&(Z=!1);Z&&(D.diagnostics={runnable:G,programLog:Y,vertexShader:{log:R,prefix:h},fragmentShader:{log:U,prefix:x}})}n.deleteShader(A),n.deleteShader(S),M=new as(n,d),b=Qf(n,d)}let M;this.getUniforms=function(){return M===void 0&&I(this),M};let b;this.getAttributes=function(){return b===void 0&&I(this),b};let F=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return F===!1&&(F=n.getProgramParameter(d,Wf)),F},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(d),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Yf++,this.cacheKey=t,this.usedTimes=1,this.program=d,this.vertexShader=A,this.fragmentShader=S,this}let dp=0;class up{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,n=this._getShaderStage(e),a=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(n)===!1&&(o.add(n),n.usedTimes++),o.has(a)===!1&&(o.add(a),a.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new fp(t),e.set(t,i)),i}}class fp{constructor(t){this.id=dp++,this.code=t,this.usedTimes=0}}function pp(s,t,e,i,n,a,o){const r=new ba,c=new up,l=[],u=n.isWebGL2,f=n.logarithmicDepthBuffer,p=n.vertexTextures;let g=n.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return M===0?"uv":`uv${M}`}function d(M,b,F,D,Y){const R=D.fog,U=Y.geometry,G=M.isMeshStandardMaterial?D.environment:null,Z=(M.isMeshStandardMaterial?e:t).get(M.envMap||G),V=Z&&Z.mapping===gs?Z.image.height:null,W=m[M.type];M.precision!==null&&(g=n.getMaxPrecision(M.precision),g!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",g,"instead."));const J=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,it=J!==void 0?J.length:0;let nt=0;U.morphAttributes.position!==void 0&&(nt=1),U.morphAttributes.normal!==void 0&&(nt=2),U.morphAttributes.color!==void 0&&(nt=3);let X,C,z,q;if(W){const re=$e[W];X=re.vertexShader,C=re.fragmentShader}else X=M.vertexShader,C=M.fragmentShader,c.update(M),z=c.getVertexShaderID(M),q=c.getFragmentShaderID(M);const B=s.getRenderTarget(),j=Y.isInstancedMesh===!0,ct=Y.isBatchedMesh===!0,pt=!!M.map,Pt=!!M.matcap,H=!!Z,Bt=!!M.aoMap,gt=!!M.lightMap,yt=!!M.bumpMap,ut=!!M.normalMap,Gt=!!M.displacementMap,xt=!!M.emissiveMap,w=!!M.metalnessMap,E=!!M.roughnessMap,k=M.anisotropy>0,ot=M.clearcoat>0,at=M.iridescence>0,rt=M.sheen>0,vt=M.transmission>0,dt=k&&!!M.anisotropyMap,Tt=ot&&!!M.clearcoatMap,At=ot&&!!M.clearcoatNormalMap,zt=ot&&!!M.clearcoatRoughnessMap,lt=at&&!!M.iridescenceMap,Ht=at&&!!M.iridescenceThicknessMap,Vt=rt&&!!M.sheenColorMap,Nt=rt&&!!M.sheenRoughnessMap,wt=!!M.specularMap,Et=!!M.specularColorMap,L=!!M.specularIntensityMap,ft=vt&&!!M.transmissionMap,Ct=vt&&!!M.thicknessMap,bt=!!M.gradientMap,ht=!!M.alphaMap,N=M.alphaTest>0,mt=!!M.alphaHash,Mt=!!M.extensions,Dt=!!U.attributes.uv1,Lt=!!U.attributes.uv2,qt=!!U.attributes.uv3;let Zt=mi;return M.toneMapped&&(B===null||B.isXRRenderTarget===!0)&&(Zt=s.toneMapping),{isWebGL2:u,shaderID:W,shaderType:M.type,shaderName:M.name,vertexShader:X,fragmentShader:C,defines:M.defines,customVertexShaderID:z,customFragmentShaderID:q,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:g,batching:ct,instancing:j,instancingColor:j&&Y.instanceColor!==null,supportsVertexTextures:p,outputColorSpace:B===null?s.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:ai,map:pt,matcap:Pt,envMap:H,envMapMode:H&&Z.mapping,envMapCubeUVHeight:V,aoMap:Bt,lightMap:gt,bumpMap:yt,normalMap:ut,displacementMap:p&&Gt,emissiveMap:xt,normalMapObjectSpace:ut&&M.normalMapType===Mc,normalMapTangentSpace:ut&&M.normalMapType===Lo,metalnessMap:w,roughnessMap:E,anisotropy:k,anisotropyMap:dt,clearcoat:ot,clearcoatMap:Tt,clearcoatNormalMap:At,clearcoatRoughnessMap:zt,iridescence:at,iridescenceMap:lt,iridescenceThicknessMap:Ht,sheen:rt,sheenColorMap:Vt,sheenRoughnessMap:Nt,specularMap:wt,specularColorMap:Et,specularIntensityMap:L,transmission:vt,transmissionMap:ft,thicknessMap:Ct,gradientMap:bt,opaque:M.transparent===!1&&M.blending===on,alphaMap:ht,alphaTest:N,alphaHash:mt,combine:M.combine,mapUv:pt&&_(M.map.channel),aoMapUv:Bt&&_(M.aoMap.channel),lightMapUv:gt&&_(M.lightMap.channel),bumpMapUv:yt&&_(M.bumpMap.channel),normalMapUv:ut&&_(M.normalMap.channel),displacementMapUv:Gt&&_(M.displacementMap.channel),emissiveMapUv:xt&&_(M.emissiveMap.channel),metalnessMapUv:w&&_(M.metalnessMap.channel),roughnessMapUv:E&&_(M.roughnessMap.channel),anisotropyMapUv:dt&&_(M.anisotropyMap.channel),clearcoatMapUv:Tt&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:At&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:zt&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:lt&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:Ht&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:Vt&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:Nt&&_(M.sheenRoughnessMap.channel),specularMapUv:wt&&_(M.specularMap.channel),specularColorMapUv:Et&&_(M.specularColorMap.channel),specularIntensityMapUv:L&&_(M.specularIntensityMap.channel),transmissionMapUv:ft&&_(M.transmissionMap.channel),thicknessMapUv:Ct&&_(M.thicknessMap.channel),alphaMapUv:ht&&_(M.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(ut||k),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,vertexUv1s:Dt,vertexUv2s:Lt,vertexUv3s:qt,pointsUvs:Y.isPoints===!0&&!!U.attributes.uv&&(pt||ht),fog:!!R,useFog:M.fog===!0,fogExp2:R&&R.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:Y.isSkinnedMesh===!0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:it,morphTextureStride:nt,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:s.shadowMap.enabled&&F.length>0,shadowMapType:s.shadowMap.type,toneMapping:Zt,useLegacyLights:s._useLegacyLights,decodeVideoTexture:pt&&M.map.isVideoTexture===!0&&Qt.getTransfer(M.map.colorSpace)===ee,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===ni,flipSided:M.side===Pe,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:Mt&&M.extensions.derivatives===!0,extensionFragDepth:Mt&&M.extensions.fragDepth===!0,extensionDrawBuffers:Mt&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:Mt&&M.extensions.shaderTextureLOD===!0,extensionClipCullDistance:Mt&&M.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()}}function h(M){const b=[];if(M.shaderID?b.push(M.shaderID):(b.push(M.customVertexShaderID),b.push(M.customFragmentShaderID)),M.defines!==void 0)for(const F in M.defines)b.push(F),b.push(M.defines[F]);return M.isRawShaderMaterial===!1&&(x(b,M),v(b,M),b.push(s.outputColorSpace)),b.push(M.customProgramCacheKey),b.join()}function x(M,b){M.push(b.precision),M.push(b.outputColorSpace),M.push(b.envMapMode),M.push(b.envMapCubeUVHeight),M.push(b.mapUv),M.push(b.alphaMapUv),M.push(b.lightMapUv),M.push(b.aoMapUv),M.push(b.bumpMapUv),M.push(b.normalMapUv),M.push(b.displacementMapUv),M.push(b.emissiveMapUv),M.push(b.metalnessMapUv),M.push(b.roughnessMapUv),M.push(b.anisotropyMapUv),M.push(b.clearcoatMapUv),M.push(b.clearcoatNormalMapUv),M.push(b.clearcoatRoughnessMapUv),M.push(b.iridescenceMapUv),M.push(b.iridescenceThicknessMapUv),M.push(b.sheenColorMapUv),M.push(b.sheenRoughnessMapUv),M.push(b.specularMapUv),M.push(b.specularColorMapUv),M.push(b.specularIntensityMapUv),M.push(b.transmissionMapUv),M.push(b.thicknessMapUv),M.push(b.combine),M.push(b.fogExp2),M.push(b.sizeAttenuation),M.push(b.morphTargetsCount),M.push(b.morphAttributeCount),M.push(b.numDirLights),M.push(b.numPointLights),M.push(b.numSpotLights),M.push(b.numSpotLightMaps),M.push(b.numHemiLights),M.push(b.numRectAreaLights),M.push(b.numDirLightShadows),M.push(b.numPointLightShadows),M.push(b.numSpotLightShadows),M.push(b.numSpotLightShadowsWithMaps),M.push(b.numLightProbes),M.push(b.shadowMapType),M.push(b.toneMapping),M.push(b.numClippingPlanes),M.push(b.numClipIntersection),M.push(b.depthPacking)}function v(M,b){r.disableAll(),b.isWebGL2&&r.enable(0),b.supportsVertexTextures&&r.enable(1),b.instancing&&r.enable(2),b.instancingColor&&r.enable(3),b.matcap&&r.enable(4),b.envMap&&r.enable(5),b.normalMapObjectSpace&&r.enable(6),b.normalMapTangentSpace&&r.enable(7),b.clearcoat&&r.enable(8),b.iridescence&&r.enable(9),b.alphaTest&&r.enable(10),b.vertexColors&&r.enable(11),b.vertexAlphas&&r.enable(12),b.vertexUv1s&&r.enable(13),b.vertexUv2s&&r.enable(14),b.vertexUv3s&&r.enable(15),b.vertexTangents&&r.enable(16),b.anisotropy&&r.enable(17),b.alphaHash&&r.enable(18),b.batching&&r.enable(19),M.push(r.mask),r.disableAll(),b.fog&&r.enable(0),b.useFog&&r.enable(1),b.flatShading&&r.enable(2),b.logarithmicDepthBuffer&&r.enable(3),b.skinning&&r.enable(4),b.morphTargets&&r.enable(5),b.morphNormals&&r.enable(6),b.morphColors&&r.enable(7),b.premultipliedAlpha&&r.enable(8),b.shadowMapEnabled&&r.enable(9),b.useLegacyLights&&r.enable(10),b.doubleSided&&r.enable(11),b.flipSided&&r.enable(12),b.useDepthPacking&&r.enable(13),b.dithering&&r.enable(14),b.transmission&&r.enable(15),b.sheen&&r.enable(16),b.opaque&&r.enable(17),b.pointsUvs&&r.enable(18),b.decodeVideoTexture&&r.enable(19),M.push(r.mask)}function y(M){const b=m[M.type];let F;if(b){const D=$e[b];F=qc.clone(D.uniforms)}else F=M.uniforms;return F}function T(M,b){let F;for(let D=0,Y=l.length;D<Y;D++){const R=l[D];if(R.cacheKey===b){F=R,++F.usedTimes;break}}return F===void 0&&(F=new hp(s,b,M,a),l.push(F)),F}function A(M){if(--M.usedTimes===0){const b=l.indexOf(M);l[b]=l[l.length-1],l.pop(),M.destroy()}}function S(M){c.remove(M)}function I(){c.dispose()}return{getParameters:d,getProgramCacheKey:h,getUniforms:y,acquireProgram:T,releaseProgram:A,releaseShaderCache:S,programs:l,dispose:I}}function mp(){let s=new WeakMap;function t(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function e(a){s.delete(a)}function i(a,o,r){s.get(a)[o]=r}function n(){s=new WeakMap}return{get:t,remove:e,update:i,dispose:n}}function gp(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function so(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function ao(){const s=[];let t=0;const e=[],i=[],n=[];function a(){t=0,e.length=0,i.length=0,n.length=0}function o(f,p,g,m,_,d){let h=s[t];return h===void 0?(h={id:f.id,object:f,geometry:p,material:g,groupOrder:m,renderOrder:f.renderOrder,z:_,group:d},s[t]=h):(h.id=f.id,h.object=f,h.geometry=p,h.material=g,h.groupOrder=m,h.renderOrder=f.renderOrder,h.z=_,h.group=d),t++,h}function r(f,p,g,m,_,d){const h=o(f,p,g,m,_,d);g.transmission>0?i.push(h):g.transparent===!0?n.push(h):e.push(h)}function c(f,p,g,m,_,d){const h=o(f,p,g,m,_,d);g.transmission>0?i.unshift(h):g.transparent===!0?n.unshift(h):e.unshift(h)}function l(f,p){e.length>1&&e.sort(f||gp),i.length>1&&i.sort(p||so),n.length>1&&n.sort(p||so)}function u(){for(let f=t,p=s.length;f<p;f++){const g=s[f];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:i,transparent:n,init:a,push:r,unshift:c,finish:u,sort:l}}function vp(){let s=new WeakMap;function t(i,n){const a=s.get(i);let o;return a===void 0?(o=new ao,s.set(i,[o])):n>=a.length?(o=new ao,a.push(o)):o=a[n],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function _p(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new $,color:new Jt};break;case"SpotLight":e={position:new $,direction:new $,color:new Jt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new $,color:new Jt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new $,skyColor:new Jt,groundColor:new Jt};break;case"RectAreaLight":e={color:new Jt,position:new $,halfWidth:new $,halfHeight:new $};break}return s[t.id]=e,e}}}function yp(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ut};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ut};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ut,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let xp=0;function Mp(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function Tp(s,t){const e=new _p,i=yp(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)n.probe.push(new $);const a=new $,o=new he,r=new he;function c(u,f){let p=0,g=0,m=0;for(let D=0;D<9;D++)n.probe[D].set(0,0,0);let _=0,d=0,h=0,x=0,v=0,y=0,T=0,A=0,S=0,I=0,M=0;u.sort(Mp);const b=f===!0?Math.PI:1;for(let D=0,Y=u.length;D<Y;D++){const R=u[D],U=R.color,G=R.intensity,Z=R.distance,V=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)p+=U.r*G*b,g+=U.g*G*b,m+=U.b*G*b;else if(R.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(R.sh.coefficients[W],G);M++}else if(R.isDirectionalLight){const W=e.get(R);if(W.color.copy(R.color).multiplyScalar(R.intensity*b),R.castShadow){const J=R.shadow,it=i.get(R);it.shadowBias=J.bias,it.shadowNormalBias=J.normalBias,it.shadowRadius=J.radius,it.shadowMapSize=J.mapSize,n.directionalShadow[_]=it,n.directionalShadowMap[_]=V,n.directionalShadowMatrix[_]=R.shadow.matrix,y++}n.directional[_]=W,_++}else if(R.isSpotLight){const W=e.get(R);W.position.setFromMatrixPosition(R.matrixWorld),W.color.copy(U).multiplyScalar(G*b),W.distance=Z,W.coneCos=Math.cos(R.angle),W.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),W.decay=R.decay,n.spot[h]=W;const J=R.shadow;if(R.map&&(n.spotLightMap[S]=R.map,S++,J.updateMatrices(R),R.castShadow&&I++),n.spotLightMatrix[h]=J.matrix,R.castShadow){const it=i.get(R);it.shadowBias=J.bias,it.shadowNormalBias=J.normalBias,it.shadowRadius=J.radius,it.shadowMapSize=J.mapSize,n.spotShadow[h]=it,n.spotShadowMap[h]=V,A++}h++}else if(R.isRectAreaLight){const W=e.get(R);W.color.copy(U).multiplyScalar(G),W.halfWidth.set(R.width*.5,0,0),W.halfHeight.set(0,R.height*.5,0),n.rectArea[x]=W,x++}else if(R.isPointLight){const W=e.get(R);if(W.color.copy(R.color).multiplyScalar(R.intensity*b),W.distance=R.distance,W.decay=R.decay,R.castShadow){const J=R.shadow,it=i.get(R);it.shadowBias=J.bias,it.shadowNormalBias=J.normalBias,it.shadowRadius=J.radius,it.shadowMapSize=J.mapSize,it.shadowCameraNear=J.camera.near,it.shadowCameraFar=J.camera.far,n.pointShadow[d]=it,n.pointShadowMap[d]=V,n.pointShadowMatrix[d]=R.shadow.matrix,T++}n.point[d]=W,d++}else if(R.isHemisphereLight){const W=e.get(R);W.skyColor.copy(R.color).multiplyScalar(G*b),W.groundColor.copy(R.groundColor).multiplyScalar(G*b),n.hemi[v]=W,v++}}x>0&&(t.isWebGL2?s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=_t.LTC_FLOAT_1,n.rectAreaLTC2=_t.LTC_FLOAT_2):(n.rectAreaLTC1=_t.LTC_HALF_1,n.rectAreaLTC2=_t.LTC_HALF_2):s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=_t.LTC_FLOAT_1,n.rectAreaLTC2=_t.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(n.rectAreaLTC1=_t.LTC_HALF_1,n.rectAreaLTC2=_t.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),n.ambient[0]=p,n.ambient[1]=g,n.ambient[2]=m;const F=n.hash;(F.directionalLength!==_||F.pointLength!==d||F.spotLength!==h||F.rectAreaLength!==x||F.hemiLength!==v||F.numDirectionalShadows!==y||F.numPointShadows!==T||F.numSpotShadows!==A||F.numSpotMaps!==S||F.numLightProbes!==M)&&(n.directional.length=_,n.spot.length=h,n.rectArea.length=x,n.point.length=d,n.hemi.length=v,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=T,n.pointShadowMap.length=T,n.spotShadow.length=A,n.spotShadowMap.length=A,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=T,n.spotLightMatrix.length=A+S-I,n.spotLightMap.length=S,n.numSpotLightShadowsWithMaps=I,n.numLightProbes=M,F.directionalLength=_,F.pointLength=d,F.spotLength=h,F.rectAreaLength=x,F.hemiLength=v,F.numDirectionalShadows=y,F.numPointShadows=T,F.numSpotShadows=A,F.numSpotMaps=S,F.numLightProbes=M,n.version=xp++)}function l(u,f){let p=0,g=0,m=0,_=0,d=0;const h=f.matrixWorldInverse;for(let x=0,v=u.length;x<v;x++){const y=u[x];if(y.isDirectionalLight){const T=n.directional[p];T.direction.setFromMatrixPosition(y.matrixWorld),a.setFromMatrixPosition(y.target.matrixWorld),T.direction.sub(a),T.direction.transformDirection(h),p++}else if(y.isSpotLight){const T=n.spot[m];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(h),T.direction.setFromMatrixPosition(y.matrixWorld),a.setFromMatrixPosition(y.target.matrixWorld),T.direction.sub(a),T.direction.transformDirection(h),m++}else if(y.isRectAreaLight){const T=n.rectArea[_];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(h),r.identity(),o.copy(y.matrixWorld),o.premultiply(h),r.extractRotation(o),T.halfWidth.set(y.width*.5,0,0),T.halfHeight.set(0,y.height*.5,0),T.halfWidth.applyMatrix4(r),T.halfHeight.applyMatrix4(r),_++}else if(y.isPointLight){const T=n.point[g];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(h),g++}else if(y.isHemisphereLight){const T=n.hemi[d];T.direction.setFromMatrixPosition(y.matrixWorld),T.direction.transformDirection(h),d++}}}return{setup:c,setupView:l,state:n}}function ro(s,t){const e=new Tp(s,t),i=[],n=[];function a(){i.length=0,n.length=0}function o(f){i.push(f)}function r(f){n.push(f)}function c(f){e.setup(i,f)}function l(f){e.setupView(i,f)}return{init:a,state:{lightsArray:i,shadowsArray:n,lights:e},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:r}}function Ep(s,t){let e=new WeakMap;function i(a,o=0){const r=e.get(a);let c;return r===void 0?(c=new ro(s,t),e.set(a,[c])):o>=r.length?(c=new ro(s,t),r.push(c)):c=r[o],c}function n(){e=new WeakMap}return{get:i,dispose:n}}class Sp extends Rn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=yc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class bp extends Rn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Ap=`void main() {
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
}`;function Pp(s,t,e){let i=new Aa;const n=new Ut,a=new Ut,o=new me,r=new Sp({depthPacking:xc}),c=new bp,l={},u=e.maxTextureSize,f={[vi]:Pe,[Pe]:vi,[ni]:ni},p=new Di({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ut},radius:{value:4}},vertexShader:Ap,fragmentShader:wp}),g=p.clone();g.defines.HORIZONTAL_PASS=1;const m=new qe;m.setAttribute("position",new Ke(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new te(m,p),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Mo;let h=this.type;this.render=function(A,S,I){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||A.length===0)return;const M=s.getRenderTarget(),b=s.getActiveCubeFace(),F=s.getActiveMipmapLevel(),D=s.state;D.setBlending(pi),D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);const Y=h!==ii&&this.type===ii,R=h===ii&&this.type!==ii;for(let U=0,G=A.length;U<G;U++){const Z=A[U],V=Z.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;n.copy(V.mapSize);const W=V.getFrameExtents();if(n.multiply(W),a.copy(V.mapSize),(n.x>u||n.y>u)&&(n.x>u&&(a.x=Math.floor(u/W.x),n.x=a.x*W.x,V.mapSize.x=a.x),n.y>u&&(a.y=Math.floor(u/W.y),n.y=a.y*W.y,V.mapSize.y=a.y)),V.map===null||Y===!0||R===!0){const it=this.type!==ii?{minFilter:Ee,magFilter:Ee}:{};V.map!==null&&V.map.dispose(),V.map=new Li(n.x,n.y,it),V.map.texture.name=Z.name+".shadowMap",V.camera.updateProjectionMatrix()}s.setRenderTarget(V.map),s.clear();const J=V.getViewportCount();for(let it=0;it<J;it++){const nt=V.getViewport(it);o.set(a.x*nt.x,a.y*nt.y,a.x*nt.z,a.y*nt.w),D.viewport(o),V.updateMatrices(Z,it),i=V.getFrustum(),y(S,I,V.camera,Z,this.type)}V.isPointLightShadow!==!0&&this.type===ii&&x(V,I),V.needsUpdate=!1}h=this.type,d.needsUpdate=!1,s.setRenderTarget(M,b,F)};function x(A,S){const I=t.update(_);p.defines.VSM_SAMPLES!==A.blurSamples&&(p.defines.VSM_SAMPLES=A.blurSamples,g.defines.VSM_SAMPLES=A.blurSamples,p.needsUpdate=!0,g.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Li(n.x,n.y)),p.uniforms.shadow_pass.value=A.map.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,s.setRenderTarget(A.mapPass),s.clear(),s.renderBufferDirect(S,null,I,p,_,null),g.uniforms.shadow_pass.value=A.mapPass.texture,g.uniforms.resolution.value=A.mapSize,g.uniforms.radius.value=A.radius,s.setRenderTarget(A.map),s.clear(),s.renderBufferDirect(S,null,I,g,_,null)}function v(A,S,I,M){let b=null;const F=I.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(F!==void 0)b=F;else if(b=I.isPointLight===!0?c:r,s.localClippingEnabled&&S.clipShadows===!0&&Array.isArray(S.clippingPlanes)&&S.clippingPlanes.length!==0||S.displacementMap&&S.displacementScale!==0||S.alphaMap&&S.alphaTest>0||S.map&&S.alphaTest>0){const D=b.uuid,Y=S.uuid;let R=l[D];R===void 0&&(R={},l[D]=R);let U=R[Y];U===void 0&&(U=b.clone(),R[Y]=U,S.addEventListener("dispose",T)),b=U}if(b.visible=S.visible,b.wireframe=S.wireframe,M===ii?b.side=S.shadowSide!==null?S.shadowSide:S.side:b.side=S.shadowSide!==null?S.shadowSide:f[S.side],b.alphaMap=S.alphaMap,b.alphaTest=S.alphaTest,b.map=S.map,b.clipShadows=S.clipShadows,b.clippingPlanes=S.clippingPlanes,b.clipIntersection=S.clipIntersection,b.displacementMap=S.displacementMap,b.displacementScale=S.displacementScale,b.displacementBias=S.displacementBias,b.wireframeLinewidth=S.wireframeLinewidth,b.linewidth=S.linewidth,I.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const D=s.properties.get(b);D.light=I}return b}function y(A,S,I,M,b){if(A.visible===!1)return;if(A.layers.test(S.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&b===ii)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,A.matrixWorld);const Y=t.update(A),R=A.material;if(Array.isArray(R)){const U=Y.groups;for(let G=0,Z=U.length;G<Z;G++){const V=U[G],W=R[V.materialIndex];if(W&&W.visible){const J=v(A,W,M,b);A.onBeforeShadow(s,A,S,I,Y,J,V),s.renderBufferDirect(I,null,Y,J,A,V),A.onAfterShadow(s,A,S,I,Y,J,V)}}}else if(R.visible){const U=v(A,R,M,b);A.onBeforeShadow(s,A,S,I,Y,U,null),s.renderBufferDirect(I,null,Y,U,A,null),A.onAfterShadow(s,A,S,I,Y,U,null)}}const D=A.children;for(let Y=0,R=D.length;Y<R;Y++)y(D[Y],S,I,M,b)}function T(A){A.target.removeEventListener("dispose",T);for(const I in l){const M=l[I],b=A.target.uuid;b in M&&(M[b].dispose(),delete M[b])}}}function Cp(s,t,e){const i=e.isWebGL2;function n(){let N=!1;const mt=new me;let Mt=null;const Dt=new me(0,0,0,0);return{setMask:function(Lt){Mt!==Lt&&!N&&(s.colorMask(Lt,Lt,Lt,Lt),Mt=Lt)},setLocked:function(Lt){N=Lt},setClear:function(Lt,qt,Zt,se,re){re===!0&&(Lt*=se,qt*=se,Zt*=se),mt.set(Lt,qt,Zt,se),Dt.equals(mt)===!1&&(s.clearColor(Lt,qt,Zt,se),Dt.copy(mt))},reset:function(){N=!1,Mt=null,Dt.set(-1,0,0,0)}}}function a(){let N=!1,mt=null,Mt=null,Dt=null;return{setTest:function(Lt){Lt?ct(s.DEPTH_TEST):pt(s.DEPTH_TEST)},setMask:function(Lt){mt!==Lt&&!N&&(s.depthMask(Lt),mt=Lt)},setFunc:function(Lt){if(Mt!==Lt){switch(Lt){case ql:s.depthFunc(s.NEVER);break;case Zl:s.depthFunc(s.ALWAYS);break;case jl:s.depthFunc(s.LESS);break;case rs:s.depthFunc(s.LEQUAL);break;case Jl:s.depthFunc(s.EQUAL);break;case Ql:s.depthFunc(s.GEQUAL);break;case tc:s.depthFunc(s.GREATER);break;case ec:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Mt=Lt}},setLocked:function(Lt){N=Lt},setClear:function(Lt){Dt!==Lt&&(s.clearDepth(Lt),Dt=Lt)},reset:function(){N=!1,mt=null,Mt=null,Dt=null}}}function o(){let N=!1,mt=null,Mt=null,Dt=null,Lt=null,qt=null,Zt=null,se=null,re=null;return{setTest:function(jt){N||(jt?ct(s.STENCIL_TEST):pt(s.STENCIL_TEST))},setMask:function(jt){mt!==jt&&!N&&(s.stencilMask(jt),mt=jt)},setFunc:function(jt,le,Xe){(Mt!==jt||Dt!==le||Lt!==Xe)&&(s.stencilFunc(jt,le,Xe),Mt=jt,Dt=le,Lt=Xe)},setOp:function(jt,le,Xe){(qt!==jt||Zt!==le||se!==Xe)&&(s.stencilOp(jt,le,Xe),qt=jt,Zt=le,se=Xe)},setLocked:function(jt){N=jt},setClear:function(jt){re!==jt&&(s.clearStencil(jt),re=jt)},reset:function(){N=!1,mt=null,Mt=null,Dt=null,Lt=null,qt=null,Zt=null,se=null,re=null}}}const r=new n,c=new a,l=new o,u=new WeakMap,f=new WeakMap;let p={},g={},m=new WeakMap,_=[],d=null,h=!1,x=null,v=null,y=null,T=null,A=null,S=null,I=null,M=new Jt(0,0,0),b=0,F=!1,D=null,Y=null,R=null,U=null,G=null;const Z=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,W=0;const J=s.getParameter(s.VERSION);J.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(J)[1]),V=W>=1):J.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),V=W>=2);let it=null,nt={};const X=s.getParameter(s.SCISSOR_BOX),C=s.getParameter(s.VIEWPORT),z=new me().fromArray(X),q=new me().fromArray(C);function B(N,mt,Mt,Dt){const Lt=new Uint8Array(4),qt=s.createTexture();s.bindTexture(N,qt),s.texParameteri(N,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(N,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Zt=0;Zt<Mt;Zt++)i&&(N===s.TEXTURE_3D||N===s.TEXTURE_2D_ARRAY)?s.texImage3D(mt,0,s.RGBA,1,1,Dt,0,s.RGBA,s.UNSIGNED_BYTE,Lt):s.texImage2D(mt+Zt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Lt);return qt}const j={};j[s.TEXTURE_2D]=B(s.TEXTURE_2D,s.TEXTURE_2D,1),j[s.TEXTURE_CUBE_MAP]=B(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(j[s.TEXTURE_2D_ARRAY]=B(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),j[s.TEXTURE_3D]=B(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),r.setClear(0,0,0,1),c.setClear(1),l.setClear(0),ct(s.DEPTH_TEST),c.setFunc(rs),xt(!1),w(ka),ct(s.CULL_FACE),ut(pi);function ct(N){p[N]!==!0&&(s.enable(N),p[N]=!0)}function pt(N){p[N]!==!1&&(s.disable(N),p[N]=!1)}function Pt(N,mt){return g[N]!==mt?(s.bindFramebuffer(N,mt),g[N]=mt,i&&(N===s.DRAW_FRAMEBUFFER&&(g[s.FRAMEBUFFER]=mt),N===s.FRAMEBUFFER&&(g[s.DRAW_FRAMEBUFFER]=mt)),!0):!1}function H(N,mt){let Mt=_,Dt=!1;if(N)if(Mt=m.get(mt),Mt===void 0&&(Mt=[],m.set(mt,Mt)),N.isWebGLMultipleRenderTargets){const Lt=N.texture;if(Mt.length!==Lt.length||Mt[0]!==s.COLOR_ATTACHMENT0){for(let qt=0,Zt=Lt.length;qt<Zt;qt++)Mt[qt]=s.COLOR_ATTACHMENT0+qt;Mt.length=Lt.length,Dt=!0}}else Mt[0]!==s.COLOR_ATTACHMENT0&&(Mt[0]=s.COLOR_ATTACHMENT0,Dt=!0);else Mt[0]!==s.BACK&&(Mt[0]=s.BACK,Dt=!0);Dt&&(e.isWebGL2?s.drawBuffers(Mt):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(Mt))}function Bt(N){return d!==N?(s.useProgram(N),d=N,!0):!1}const gt={[Ai]:s.FUNC_ADD,[Ol]:s.FUNC_SUBTRACT,[Nl]:s.FUNC_REVERSE_SUBTRACT};if(i)gt[Ya]=s.MIN,gt[Xa]=s.MAX;else{const N=t.get("EXT_blend_minmax");N!==null&&(gt[Ya]=N.MIN_EXT,gt[Xa]=N.MAX_EXT)}const yt={[Ul]:s.ZERO,[zl]:s.ONE,[Fl]:s.SRC_COLOR,[ra]:s.SRC_ALPHA,[Wl]:s.SRC_ALPHA_SATURATE,[Hl]:s.DST_COLOR,[Gl]:s.DST_ALPHA,[Bl]:s.ONE_MINUS_SRC_COLOR,[oa]:s.ONE_MINUS_SRC_ALPHA,[Vl]:s.ONE_MINUS_DST_COLOR,[kl]:s.ONE_MINUS_DST_ALPHA,[Yl]:s.CONSTANT_COLOR,[Xl]:s.ONE_MINUS_CONSTANT_COLOR,[$l]:s.CONSTANT_ALPHA,[Kl]:s.ONE_MINUS_CONSTANT_ALPHA};function ut(N,mt,Mt,Dt,Lt,qt,Zt,se,re,jt){if(N===pi){h===!0&&(pt(s.BLEND),h=!1);return}if(h===!1&&(ct(s.BLEND),h=!0),N!==Dl){if(N!==x||jt!==F){if((v!==Ai||A!==Ai)&&(s.blendEquation(s.FUNC_ADD),v=Ai,A=Ai),jt)switch(N){case on:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ha:s.blendFunc(s.ONE,s.ONE);break;case Va:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Wa:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case on:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ha:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Va:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Wa:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}y=null,T=null,S=null,I=null,M.set(0,0,0),b=0,x=N,F=jt}return}Lt=Lt||mt,qt=qt||Mt,Zt=Zt||Dt,(mt!==v||Lt!==A)&&(s.blendEquationSeparate(gt[mt],gt[Lt]),v=mt,A=Lt),(Mt!==y||Dt!==T||qt!==S||Zt!==I)&&(s.blendFuncSeparate(yt[Mt],yt[Dt],yt[qt],yt[Zt]),y=Mt,T=Dt,S=qt,I=Zt),(se.equals(M)===!1||re!==b)&&(s.blendColor(se.r,se.g,se.b,re),M.copy(se),b=re),x=N,F=!1}function Gt(N,mt){N.side===ni?pt(s.CULL_FACE):ct(s.CULL_FACE);let Mt=N.side===Pe;mt&&(Mt=!Mt),xt(Mt),N.blending===on&&N.transparent===!1?ut(pi):ut(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),c.setFunc(N.depthFunc),c.setTest(N.depthTest),c.setMask(N.depthWrite),r.setMask(N.colorWrite);const Dt=N.stencilWrite;l.setTest(Dt),Dt&&(l.setMask(N.stencilWriteMask),l.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),l.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),k(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?ct(s.SAMPLE_ALPHA_TO_COVERAGE):pt(s.SAMPLE_ALPHA_TO_COVERAGE)}function xt(N){D!==N&&(N?s.frontFace(s.CW):s.frontFace(s.CCW),D=N)}function w(N){N!==Rl?(ct(s.CULL_FACE),N!==Y&&(N===ka?s.cullFace(s.BACK):N===Ll?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):pt(s.CULL_FACE),Y=N}function E(N){N!==R&&(V&&s.lineWidth(N),R=N)}function k(N,mt,Mt){N?(ct(s.POLYGON_OFFSET_FILL),(U!==mt||G!==Mt)&&(s.polygonOffset(mt,Mt),U=mt,G=Mt)):pt(s.POLYGON_OFFSET_FILL)}function ot(N){N?ct(s.SCISSOR_TEST):pt(s.SCISSOR_TEST)}function at(N){N===void 0&&(N=s.TEXTURE0+Z-1),it!==N&&(s.activeTexture(N),it=N)}function rt(N,mt,Mt){Mt===void 0&&(it===null?Mt=s.TEXTURE0+Z-1:Mt=it);let Dt=nt[Mt];Dt===void 0&&(Dt={type:void 0,texture:void 0},nt[Mt]=Dt),(Dt.type!==N||Dt.texture!==mt)&&(it!==Mt&&(s.activeTexture(Mt),it=Mt),s.bindTexture(N,mt||j[N]),Dt.type=N,Dt.texture=mt)}function vt(){const N=nt[it];N!==void 0&&N.type!==void 0&&(s.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function dt(){try{s.compressedTexImage2D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Tt(){try{s.compressedTexImage3D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function At(){try{s.texSubImage2D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function zt(){try{s.texSubImage3D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function lt(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ht(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Vt(){try{s.texStorage2D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Nt(){try{s.texStorage3D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function wt(){try{s.texImage2D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Et(){try{s.texImage3D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function L(N){z.equals(N)===!1&&(s.scissor(N.x,N.y,N.z,N.w),z.copy(N))}function ft(N){q.equals(N)===!1&&(s.viewport(N.x,N.y,N.z,N.w),q.copy(N))}function Ct(N,mt){let Mt=f.get(mt);Mt===void 0&&(Mt=new WeakMap,f.set(mt,Mt));let Dt=Mt.get(N);Dt===void 0&&(Dt=s.getUniformBlockIndex(mt,N.name),Mt.set(N,Dt))}function bt(N,mt){const Dt=f.get(mt).get(N);u.get(mt)!==Dt&&(s.uniformBlockBinding(mt,Dt,N.__bindingPointIndex),u.set(mt,Dt))}function ht(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),i===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),p={},it=null,nt={},g={},m=new WeakMap,_=[],d=null,h=!1,x=null,v=null,y=null,T=null,A=null,S=null,I=null,M=new Jt(0,0,0),b=0,F=!1,D=null,Y=null,R=null,U=null,G=null,z.set(0,0,s.canvas.width,s.canvas.height),q.set(0,0,s.canvas.width,s.canvas.height),r.reset(),c.reset(),l.reset()}return{buffers:{color:r,depth:c,stencil:l},enable:ct,disable:pt,bindFramebuffer:Pt,drawBuffers:H,useProgram:Bt,setBlending:ut,setMaterial:Gt,setFlipSided:xt,setCullFace:w,setLineWidth:E,setPolygonOffset:k,setScissorTest:ot,activeTexture:at,bindTexture:rt,unbindTexture:vt,compressedTexImage2D:dt,compressedTexImage3D:Tt,texImage2D:wt,texImage3D:Et,updateUBOMapping:Ct,uniformBlockBinding:bt,texStorage2D:Vt,texStorage3D:Nt,texSubImage2D:At,texSubImage3D:zt,compressedTexSubImage2D:lt,compressedTexSubImage3D:Ht,scissor:L,viewport:ft,reset:ht}}function Rp(s,t,e,i,n,a,o){const r=n.isWebGL2,c=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new WeakMap;let f;const p=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(w,E){return g?new OffscreenCanvas(w,E):ds("canvas")}function _(w,E,k,ot){let at=1;if((w.width>ot||w.height>ot)&&(at=ot/Math.max(w.width,w.height)),at<1||E===!0)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap){const rt=E?pa:Math.floor,vt=rt(at*w.width),dt=rt(at*w.height);f===void 0&&(f=m(vt,dt));const Tt=k?m(vt,dt):f;return Tt.width=vt,Tt.height=dt,Tt.getContext("2d").drawImage(w,0,0,vt,dt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+w.width+"x"+w.height+") to ("+vt+"x"+dt+")."),Tt}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+w.width+"x"+w.height+")."),w;return w}function d(w){return Tr(w.width)&&Tr(w.height)}function h(w){return r?!1:w.wrapS!==We||w.wrapT!==We||w.minFilter!==Ee&&w.minFilter!==ze}function x(w,E){return w.generateMipmaps&&E&&w.minFilter!==Ee&&w.minFilter!==ze}function v(w){s.generateMipmap(w)}function y(w,E,k,ot,at=!1){if(r===!1)return E;if(w!==null){if(s[w]!==void 0)return s[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let rt=E;if(E===s.RED&&(k===s.FLOAT&&(rt=s.R32F),k===s.HALF_FLOAT&&(rt=s.R16F),k===s.UNSIGNED_BYTE&&(rt=s.R8)),E===s.RED_INTEGER&&(k===s.UNSIGNED_BYTE&&(rt=s.R8UI),k===s.UNSIGNED_SHORT&&(rt=s.R16UI),k===s.UNSIGNED_INT&&(rt=s.R32UI),k===s.BYTE&&(rt=s.R8I),k===s.SHORT&&(rt=s.R16I),k===s.INT&&(rt=s.R32I)),E===s.RG&&(k===s.FLOAT&&(rt=s.RG32F),k===s.HALF_FLOAT&&(rt=s.RG16F),k===s.UNSIGNED_BYTE&&(rt=s.RG8)),E===s.RGBA){const vt=at?os:Qt.getTransfer(ot);k===s.FLOAT&&(rt=s.RGBA32F),k===s.HALF_FLOAT&&(rt=s.RGBA16F),k===s.UNSIGNED_BYTE&&(rt=vt===ee?s.SRGB8_ALPHA8:s.RGBA8),k===s.UNSIGNED_SHORT_4_4_4_4&&(rt=s.RGBA4),k===s.UNSIGNED_SHORT_5_5_5_1&&(rt=s.RGB5_A1)}return(rt===s.R16F||rt===s.R32F||rt===s.RG16F||rt===s.RG32F||rt===s.RGBA16F||rt===s.RGBA32F)&&t.get("EXT_color_buffer_float"),rt}function T(w,E,k){return x(w,k)===!0||w.isFramebufferTexture&&w.minFilter!==Ee&&w.minFilter!==ze?Math.log2(Math.max(E.width,E.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?E.mipmaps.length:1}function A(w){return w===Ee||w===$a||w===bs?s.NEAREST:s.LINEAR}function S(w){const E=w.target;E.removeEventListener("dispose",S),M(E),E.isVideoTexture&&u.delete(E)}function I(w){const E=w.target;E.removeEventListener("dispose",I),F(E)}function M(w){const E=i.get(w);if(E.__webglInit===void 0)return;const k=w.source,ot=p.get(k);if(ot){const at=ot[E.__cacheKey];at.usedTimes--,at.usedTimes===0&&b(w),Object.keys(ot).length===0&&p.delete(k)}i.remove(w)}function b(w){const E=i.get(w);s.deleteTexture(E.__webglTexture);const k=w.source,ot=p.get(k);delete ot[E.__cacheKey],o.memory.textures--}function F(w){const E=w.texture,k=i.get(w),ot=i.get(E);if(ot.__webglTexture!==void 0&&(s.deleteTexture(ot.__webglTexture),o.memory.textures--),w.depthTexture&&w.depthTexture.dispose(),w.isWebGLCubeRenderTarget)for(let at=0;at<6;at++){if(Array.isArray(k.__webglFramebuffer[at]))for(let rt=0;rt<k.__webglFramebuffer[at].length;rt++)s.deleteFramebuffer(k.__webglFramebuffer[at][rt]);else s.deleteFramebuffer(k.__webglFramebuffer[at]);k.__webglDepthbuffer&&s.deleteRenderbuffer(k.__webglDepthbuffer[at])}else{if(Array.isArray(k.__webglFramebuffer))for(let at=0;at<k.__webglFramebuffer.length;at++)s.deleteFramebuffer(k.__webglFramebuffer[at]);else s.deleteFramebuffer(k.__webglFramebuffer);if(k.__webglDepthbuffer&&s.deleteRenderbuffer(k.__webglDepthbuffer),k.__webglMultisampledFramebuffer&&s.deleteFramebuffer(k.__webglMultisampledFramebuffer),k.__webglColorRenderbuffer)for(let at=0;at<k.__webglColorRenderbuffer.length;at++)k.__webglColorRenderbuffer[at]&&s.deleteRenderbuffer(k.__webglColorRenderbuffer[at]);k.__webglDepthRenderbuffer&&s.deleteRenderbuffer(k.__webglDepthRenderbuffer)}if(w.isWebGLMultipleRenderTargets)for(let at=0,rt=E.length;at<rt;at++){const vt=i.get(E[at]);vt.__webglTexture&&(s.deleteTexture(vt.__webglTexture),o.memory.textures--),i.remove(E[at])}i.remove(E),i.remove(w)}let D=0;function Y(){D=0}function R(){const w=D;return w>=n.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+n.maxTextures),D+=1,w}function U(w){const E=[];return E.push(w.wrapS),E.push(w.wrapT),E.push(w.wrapR||0),E.push(w.magFilter),E.push(w.minFilter),E.push(w.anisotropy),E.push(w.internalFormat),E.push(w.format),E.push(w.type),E.push(w.generateMipmaps),E.push(w.premultiplyAlpha),E.push(w.flipY),E.push(w.unpackAlignment),E.push(w.colorSpace),E.join()}function G(w,E){const k=i.get(w);if(w.isVideoTexture&&Gt(w),w.isRenderTargetTexture===!1&&w.version>0&&k.__version!==w.version){const ot=w.image;if(ot===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ot.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{z(k,w,E);return}}e.bindTexture(s.TEXTURE_2D,k.__webglTexture,s.TEXTURE0+E)}function Z(w,E){const k=i.get(w);if(w.version>0&&k.__version!==w.version){z(k,w,E);return}e.bindTexture(s.TEXTURE_2D_ARRAY,k.__webglTexture,s.TEXTURE0+E)}function V(w,E){const k=i.get(w);if(w.version>0&&k.__version!==w.version){z(k,w,E);return}e.bindTexture(s.TEXTURE_3D,k.__webglTexture,s.TEXTURE0+E)}function W(w,E){const k=i.get(w);if(w.version>0&&k.__version!==w.version){q(k,w,E);return}e.bindTexture(s.TEXTURE_CUBE_MAP,k.__webglTexture,s.TEXTURE0+E)}const J={[ha]:s.REPEAT,[We]:s.CLAMP_TO_EDGE,[da]:s.MIRRORED_REPEAT},it={[Ee]:s.NEAREST,[$a]:s.NEAREST_MIPMAP_NEAREST,[bs]:s.NEAREST_MIPMAP_LINEAR,[ze]:s.LINEAR,[hc]:s.LINEAR_MIPMAP_NEAREST,[bn]:s.LINEAR_MIPMAP_LINEAR},nt={[Tc]:s.NEVER,[Pc]:s.ALWAYS,[Ec]:s.LESS,[Io]:s.LEQUAL,[Sc]:s.EQUAL,[wc]:s.GEQUAL,[bc]:s.GREATER,[Ac]:s.NOTEQUAL};function X(w,E,k){if(k?(s.texParameteri(w,s.TEXTURE_WRAP_S,J[E.wrapS]),s.texParameteri(w,s.TEXTURE_WRAP_T,J[E.wrapT]),(w===s.TEXTURE_3D||w===s.TEXTURE_2D_ARRAY)&&s.texParameteri(w,s.TEXTURE_WRAP_R,J[E.wrapR]),s.texParameteri(w,s.TEXTURE_MAG_FILTER,it[E.magFilter]),s.texParameteri(w,s.TEXTURE_MIN_FILTER,it[E.minFilter])):(s.texParameteri(w,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(w,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(w===s.TEXTURE_3D||w===s.TEXTURE_2D_ARRAY)&&s.texParameteri(w,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(E.wrapS!==We||E.wrapT!==We)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(w,s.TEXTURE_MAG_FILTER,A(E.magFilter)),s.texParameteri(w,s.TEXTURE_MIN_FILTER,A(E.minFilter)),E.minFilter!==Ee&&E.minFilter!==ze&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),E.compareFunction&&(s.texParameteri(w,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(w,s.TEXTURE_COMPARE_FUNC,nt[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){const ot=t.get("EXT_texture_filter_anisotropic");if(E.magFilter===Ee||E.minFilter!==bs&&E.minFilter!==bn||E.type===fi&&t.has("OES_texture_float_linear")===!1||r===!1&&E.type===An&&t.has("OES_texture_half_float_linear")===!1)return;(E.anisotropy>1||i.get(E).__currentAnisotropy)&&(s.texParameterf(w,ot.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,n.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy)}}function C(w,E){let k=!1;w.__webglInit===void 0&&(w.__webglInit=!0,E.addEventListener("dispose",S));const ot=E.source;let at=p.get(ot);at===void 0&&(at={},p.set(ot,at));const rt=U(E);if(rt!==w.__cacheKey){at[rt]===void 0&&(at[rt]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,k=!0),at[rt].usedTimes++;const vt=at[w.__cacheKey];vt!==void 0&&(at[w.__cacheKey].usedTimes--,vt.usedTimes===0&&b(E)),w.__cacheKey=rt,w.__webglTexture=at[rt].texture}return k}function z(w,E,k){let ot=s.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ot=s.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ot=s.TEXTURE_3D);const at=C(w,E),rt=E.source;e.bindTexture(ot,w.__webglTexture,s.TEXTURE0+k);const vt=i.get(rt);if(rt.version!==vt.__version||at===!0){e.activeTexture(s.TEXTURE0+k);const dt=Qt.getPrimaries(Qt.workingColorSpace),Tt=E.colorSpace===Be?null:Qt.getPrimaries(E.colorSpace),At=E.colorSpace===Be||dt===Tt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,At);const zt=h(E)&&d(E.image)===!1;let lt=_(E.image,zt,!1,n.maxTextureSize);lt=xt(E,lt);const Ht=d(lt)||r,Vt=a.convert(E.format,E.colorSpace);let Nt=a.convert(E.type),wt=y(E.internalFormat,Vt,Nt,E.colorSpace,E.isVideoTexture);X(ot,E,Ht);let Et;const L=E.mipmaps,ft=r&&E.isVideoTexture!==!0&&wt!==Co,Ct=vt.__version===void 0||at===!0,bt=T(E,lt,Ht);if(E.isDepthTexture)wt=s.DEPTH_COMPONENT,r?E.type===fi?wt=s.DEPTH_COMPONENT32F:E.type===ui?wt=s.DEPTH_COMPONENT24:E.type===Pi?wt=s.DEPTH24_STENCIL8:wt=s.DEPTH_COMPONENT16:E.type===fi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),E.format===Ci&&wt===s.DEPTH_COMPONENT&&E.type!==Ma&&E.type!==ui&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),E.type=ui,Nt=a.convert(E.type)),E.format===dn&&wt===s.DEPTH_COMPONENT&&(wt=s.DEPTH_STENCIL,E.type!==Pi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),E.type=Pi,Nt=a.convert(E.type))),Ct&&(ft?e.texStorage2D(s.TEXTURE_2D,1,wt,lt.width,lt.height):e.texImage2D(s.TEXTURE_2D,0,wt,lt.width,lt.height,0,Vt,Nt,null));else if(E.isDataTexture)if(L.length>0&&Ht){ft&&Ct&&e.texStorage2D(s.TEXTURE_2D,bt,wt,L[0].width,L[0].height);for(let ht=0,N=L.length;ht<N;ht++)Et=L[ht],ft?e.texSubImage2D(s.TEXTURE_2D,ht,0,0,Et.width,Et.height,Vt,Nt,Et.data):e.texImage2D(s.TEXTURE_2D,ht,wt,Et.width,Et.height,0,Vt,Nt,Et.data);E.generateMipmaps=!1}else ft?(Ct&&e.texStorage2D(s.TEXTURE_2D,bt,wt,lt.width,lt.height),e.texSubImage2D(s.TEXTURE_2D,0,0,0,lt.width,lt.height,Vt,Nt,lt.data)):e.texImage2D(s.TEXTURE_2D,0,wt,lt.width,lt.height,0,Vt,Nt,lt.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){ft&&Ct&&e.texStorage3D(s.TEXTURE_2D_ARRAY,bt,wt,L[0].width,L[0].height,lt.depth);for(let ht=0,N=L.length;ht<N;ht++)Et=L[ht],E.format!==Ye?Vt!==null?ft?e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ht,0,0,0,Et.width,Et.height,lt.depth,Vt,Et.data,0,0):e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ht,wt,Et.width,Et.height,lt.depth,0,Et.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ft?e.texSubImage3D(s.TEXTURE_2D_ARRAY,ht,0,0,0,Et.width,Et.height,lt.depth,Vt,Nt,Et.data):e.texImage3D(s.TEXTURE_2D_ARRAY,ht,wt,Et.width,Et.height,lt.depth,0,Vt,Nt,Et.data)}else{ft&&Ct&&e.texStorage2D(s.TEXTURE_2D,bt,wt,L[0].width,L[0].height);for(let ht=0,N=L.length;ht<N;ht++)Et=L[ht],E.format!==Ye?Vt!==null?ft?e.compressedTexSubImage2D(s.TEXTURE_2D,ht,0,0,Et.width,Et.height,Vt,Et.data):e.compressedTexImage2D(s.TEXTURE_2D,ht,wt,Et.width,Et.height,0,Et.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ft?e.texSubImage2D(s.TEXTURE_2D,ht,0,0,Et.width,Et.height,Vt,Nt,Et.data):e.texImage2D(s.TEXTURE_2D,ht,wt,Et.width,Et.height,0,Vt,Nt,Et.data)}else if(E.isDataArrayTexture)ft?(Ct&&e.texStorage3D(s.TEXTURE_2D_ARRAY,bt,wt,lt.width,lt.height,lt.depth),e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,lt.width,lt.height,lt.depth,Vt,Nt,lt.data)):e.texImage3D(s.TEXTURE_2D_ARRAY,0,wt,lt.width,lt.height,lt.depth,0,Vt,Nt,lt.data);else if(E.isData3DTexture)ft?(Ct&&e.texStorage3D(s.TEXTURE_3D,bt,wt,lt.width,lt.height,lt.depth),e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,lt.width,lt.height,lt.depth,Vt,Nt,lt.data)):e.texImage3D(s.TEXTURE_3D,0,wt,lt.width,lt.height,lt.depth,0,Vt,Nt,lt.data);else if(E.isFramebufferTexture){if(Ct)if(ft)e.texStorage2D(s.TEXTURE_2D,bt,wt,lt.width,lt.height);else{let ht=lt.width,N=lt.height;for(let mt=0;mt<bt;mt++)e.texImage2D(s.TEXTURE_2D,mt,wt,ht,N,0,Vt,Nt,null),ht>>=1,N>>=1}}else if(L.length>0&&Ht){ft&&Ct&&e.texStorage2D(s.TEXTURE_2D,bt,wt,L[0].width,L[0].height);for(let ht=0,N=L.length;ht<N;ht++)Et=L[ht],ft?e.texSubImage2D(s.TEXTURE_2D,ht,0,0,Vt,Nt,Et):e.texImage2D(s.TEXTURE_2D,ht,wt,Vt,Nt,Et);E.generateMipmaps=!1}else ft?(Ct&&e.texStorage2D(s.TEXTURE_2D,bt,wt,lt.width,lt.height),e.texSubImage2D(s.TEXTURE_2D,0,0,0,Vt,Nt,lt)):e.texImage2D(s.TEXTURE_2D,0,wt,Vt,Nt,lt);x(E,Ht)&&v(ot),vt.__version=rt.version,E.onUpdate&&E.onUpdate(E)}w.__version=E.version}function q(w,E,k){if(E.image.length!==6)return;const ot=C(w,E),at=E.source;e.bindTexture(s.TEXTURE_CUBE_MAP,w.__webglTexture,s.TEXTURE0+k);const rt=i.get(at);if(at.version!==rt.__version||ot===!0){e.activeTexture(s.TEXTURE0+k);const vt=Qt.getPrimaries(Qt.workingColorSpace),dt=E.colorSpace===Be?null:Qt.getPrimaries(E.colorSpace),Tt=E.colorSpace===Be||vt===dt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Tt);const At=E.isCompressedTexture||E.image[0].isCompressedTexture,zt=E.image[0]&&E.image[0].isDataTexture,lt=[];for(let ht=0;ht<6;ht++)!At&&!zt?lt[ht]=_(E.image[ht],!1,!0,n.maxCubemapSize):lt[ht]=zt?E.image[ht].image:E.image[ht],lt[ht]=xt(E,lt[ht]);const Ht=lt[0],Vt=d(Ht)||r,Nt=a.convert(E.format,E.colorSpace),wt=a.convert(E.type),Et=y(E.internalFormat,Nt,wt,E.colorSpace),L=r&&E.isVideoTexture!==!0,ft=rt.__version===void 0||ot===!0;let Ct=T(E,Ht,Vt);X(s.TEXTURE_CUBE_MAP,E,Vt);let bt;if(At){L&&ft&&e.texStorage2D(s.TEXTURE_CUBE_MAP,Ct,Et,Ht.width,Ht.height);for(let ht=0;ht<6;ht++){bt=lt[ht].mipmaps;for(let N=0;N<bt.length;N++){const mt=bt[N];E.format!==Ye?Nt!==null?L?e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ht,N,0,0,mt.width,mt.height,Nt,mt.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ht,N,Et,mt.width,mt.height,0,mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ht,N,0,0,mt.width,mt.height,Nt,wt,mt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ht,N,Et,mt.width,mt.height,0,Nt,wt,mt.data)}}}else{bt=E.mipmaps,L&&ft&&(bt.length>0&&Ct++,e.texStorage2D(s.TEXTURE_CUBE_MAP,Ct,Et,lt[0].width,lt[0].height));for(let ht=0;ht<6;ht++)if(zt){L?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,0,0,lt[ht].width,lt[ht].height,Nt,wt,lt[ht].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,Et,lt[ht].width,lt[ht].height,0,Nt,wt,lt[ht].data);for(let N=0;N<bt.length;N++){const Mt=bt[N].image[ht].image;L?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ht,N+1,0,0,Mt.width,Mt.height,Nt,wt,Mt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ht,N+1,Et,Mt.width,Mt.height,0,Nt,wt,Mt.data)}}else{L?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,0,0,Nt,wt,lt[ht]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,Et,Nt,wt,lt[ht]);for(let N=0;N<bt.length;N++){const mt=bt[N];L?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ht,N+1,0,0,Nt,wt,mt.image[ht]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ht,N+1,Et,Nt,wt,mt.image[ht])}}}x(E,Vt)&&v(s.TEXTURE_CUBE_MAP),rt.__version=at.version,E.onUpdate&&E.onUpdate(E)}w.__version=E.version}function B(w,E,k,ot,at,rt){const vt=a.convert(k.format,k.colorSpace),dt=a.convert(k.type),Tt=y(k.internalFormat,vt,dt,k.colorSpace);if(!i.get(E).__hasExternalTextures){const zt=Math.max(1,E.width>>rt),lt=Math.max(1,E.height>>rt);at===s.TEXTURE_3D||at===s.TEXTURE_2D_ARRAY?e.texImage3D(at,rt,Tt,zt,lt,E.depth,0,vt,dt,null):e.texImage2D(at,rt,Tt,zt,lt,0,vt,dt,null)}e.bindFramebuffer(s.FRAMEBUFFER,w),ut(E)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ot,at,i.get(k).__webglTexture,0,yt(E)):(at===s.TEXTURE_2D||at>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&at<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ot,at,i.get(k).__webglTexture,rt),e.bindFramebuffer(s.FRAMEBUFFER,null)}function j(w,E,k){if(s.bindRenderbuffer(s.RENDERBUFFER,w),E.depthBuffer&&!E.stencilBuffer){let ot=r===!0?s.DEPTH_COMPONENT24:s.DEPTH_COMPONENT16;if(k||ut(E)){const at=E.depthTexture;at&&at.isDepthTexture&&(at.type===fi?ot=s.DEPTH_COMPONENT32F:at.type===ui&&(ot=s.DEPTH_COMPONENT24));const rt=yt(E);ut(E)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,rt,ot,E.width,E.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,rt,ot,E.width,E.height)}else s.renderbufferStorage(s.RENDERBUFFER,ot,E.width,E.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,w)}else if(E.depthBuffer&&E.stencilBuffer){const ot=yt(E);k&&ut(E)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,ot,s.DEPTH24_STENCIL8,E.width,E.height):ut(E)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ot,s.DEPTH24_STENCIL8,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,w)}else{const ot=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let at=0;at<ot.length;at++){const rt=ot[at],vt=a.convert(rt.format,rt.colorSpace),dt=a.convert(rt.type),Tt=y(rt.internalFormat,vt,dt,rt.colorSpace),At=yt(E);k&&ut(E)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,At,Tt,E.width,E.height):ut(E)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,At,Tt,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,Tt,E.width,E.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function ct(w,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,w),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),G(E.depthTexture,0);const ot=i.get(E.depthTexture).__webglTexture,at=yt(E);if(E.depthTexture.format===Ci)ut(E)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ot,0,at):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ot,0);else if(E.depthTexture.format===dn)ut(E)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ot,0,at):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ot,0);else throw new Error("Unknown depthTexture format")}function pt(w){const E=i.get(w),k=w.isWebGLCubeRenderTarget===!0;if(w.depthTexture&&!E.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");ct(E.__webglFramebuffer,w)}else if(k){E.__webglDepthbuffer=[];for(let ot=0;ot<6;ot++)e.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[ot]),E.__webglDepthbuffer[ot]=s.createRenderbuffer(),j(E.__webglDepthbuffer[ot],w,!1)}else e.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer=s.createRenderbuffer(),j(E.__webglDepthbuffer,w,!1);e.bindFramebuffer(s.FRAMEBUFFER,null)}function Pt(w,E,k){const ot=i.get(w);E!==void 0&&B(ot.__webglFramebuffer,w,w.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),k!==void 0&&pt(w)}function H(w){const E=w.texture,k=i.get(w),ot=i.get(E);w.addEventListener("dispose",I),w.isWebGLMultipleRenderTargets!==!0&&(ot.__webglTexture===void 0&&(ot.__webglTexture=s.createTexture()),ot.__version=E.version,o.memory.textures++);const at=w.isWebGLCubeRenderTarget===!0,rt=w.isWebGLMultipleRenderTargets===!0,vt=d(w)||r;if(at){k.__webglFramebuffer=[];for(let dt=0;dt<6;dt++)if(r&&E.mipmaps&&E.mipmaps.length>0){k.__webglFramebuffer[dt]=[];for(let Tt=0;Tt<E.mipmaps.length;Tt++)k.__webglFramebuffer[dt][Tt]=s.createFramebuffer()}else k.__webglFramebuffer[dt]=s.createFramebuffer()}else{if(r&&E.mipmaps&&E.mipmaps.length>0){k.__webglFramebuffer=[];for(let dt=0;dt<E.mipmaps.length;dt++)k.__webglFramebuffer[dt]=s.createFramebuffer()}else k.__webglFramebuffer=s.createFramebuffer();if(rt)if(n.drawBuffers){const dt=w.texture;for(let Tt=0,At=dt.length;Tt<At;Tt++){const zt=i.get(dt[Tt]);zt.__webglTexture===void 0&&(zt.__webglTexture=s.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(r&&w.samples>0&&ut(w)===!1){const dt=rt?E:[E];k.__webglMultisampledFramebuffer=s.createFramebuffer(),k.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let Tt=0;Tt<dt.length;Tt++){const At=dt[Tt];k.__webglColorRenderbuffer[Tt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,k.__webglColorRenderbuffer[Tt]);const zt=a.convert(At.format,At.colorSpace),lt=a.convert(At.type),Ht=y(At.internalFormat,zt,lt,At.colorSpace,w.isXRRenderTarget===!0),Vt=yt(w);s.renderbufferStorageMultisample(s.RENDERBUFFER,Vt,Ht,w.width,w.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Tt,s.RENDERBUFFER,k.__webglColorRenderbuffer[Tt])}s.bindRenderbuffer(s.RENDERBUFFER,null),w.depthBuffer&&(k.__webglDepthRenderbuffer=s.createRenderbuffer(),j(k.__webglDepthRenderbuffer,w,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(at){e.bindTexture(s.TEXTURE_CUBE_MAP,ot.__webglTexture),X(s.TEXTURE_CUBE_MAP,E,vt);for(let dt=0;dt<6;dt++)if(r&&E.mipmaps&&E.mipmaps.length>0)for(let Tt=0;Tt<E.mipmaps.length;Tt++)B(k.__webglFramebuffer[dt][Tt],w,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Tt);else B(k.__webglFramebuffer[dt],w,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0);x(E,vt)&&v(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(rt){const dt=w.texture;for(let Tt=0,At=dt.length;Tt<At;Tt++){const zt=dt[Tt],lt=i.get(zt);e.bindTexture(s.TEXTURE_2D,lt.__webglTexture),X(s.TEXTURE_2D,zt,vt),B(k.__webglFramebuffer,w,zt,s.COLOR_ATTACHMENT0+Tt,s.TEXTURE_2D,0),x(zt,vt)&&v(s.TEXTURE_2D)}e.unbindTexture()}else{let dt=s.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(r?dt=w.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(dt,ot.__webglTexture),X(dt,E,vt),r&&E.mipmaps&&E.mipmaps.length>0)for(let Tt=0;Tt<E.mipmaps.length;Tt++)B(k.__webglFramebuffer[Tt],w,E,s.COLOR_ATTACHMENT0,dt,Tt);else B(k.__webglFramebuffer,w,E,s.COLOR_ATTACHMENT0,dt,0);x(E,vt)&&v(dt),e.unbindTexture()}w.depthBuffer&&pt(w)}function Bt(w){const E=d(w)||r,k=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let ot=0,at=k.length;ot<at;ot++){const rt=k[ot];if(x(rt,E)){const vt=w.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,dt=i.get(rt).__webglTexture;e.bindTexture(vt,dt),v(vt),e.unbindTexture()}}}function gt(w){if(r&&w.samples>0&&ut(w)===!1){const E=w.isWebGLMultipleRenderTargets?w.texture:[w.texture],k=w.width,ot=w.height;let at=s.COLOR_BUFFER_BIT;const rt=[],vt=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,dt=i.get(w),Tt=w.isWebGLMultipleRenderTargets===!0;if(Tt)for(let At=0;At<E.length;At++)e.bindFramebuffer(s.FRAMEBUFFER,dt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+At,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,dt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+At,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,dt.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,dt.__webglFramebuffer);for(let At=0;At<E.length;At++){rt.push(s.COLOR_ATTACHMENT0+At),w.depthBuffer&&rt.push(vt);const zt=dt.__ignoreDepthValues!==void 0?dt.__ignoreDepthValues:!1;if(zt===!1&&(w.depthBuffer&&(at|=s.DEPTH_BUFFER_BIT),w.stencilBuffer&&(at|=s.STENCIL_BUFFER_BIT)),Tt&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,dt.__webglColorRenderbuffer[At]),zt===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[vt]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[vt])),Tt){const lt=i.get(E[At]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,lt,0)}s.blitFramebuffer(0,0,k,ot,0,0,k,ot,at,s.NEAREST),l&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,rt)}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Tt)for(let At=0;At<E.length;At++){e.bindFramebuffer(s.FRAMEBUFFER,dt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+At,s.RENDERBUFFER,dt.__webglColorRenderbuffer[At]);const zt=i.get(E[At]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,dt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+At,s.TEXTURE_2D,zt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,dt.__webglMultisampledFramebuffer)}}function yt(w){return Math.min(n.maxSamples,w.samples)}function ut(w){const E=i.get(w);return r&&w.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Gt(w){const E=o.render.frame;u.get(w)!==E&&(u.set(w,E),w.update())}function xt(w,E){const k=w.colorSpace,ot=w.format,at=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||w.format===ua||k!==ai&&k!==Be&&(Qt.getTransfer(k)===ee?r===!1?t.has("EXT_sRGB")===!0&&ot===Ye?(w.format=ua,w.minFilter=ze,w.generateMipmaps=!1):E=Oo.sRGBToLinear(E):(ot!==Ye||at!==gi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),E}this.allocateTextureUnit=R,this.resetTextureUnits=Y,this.setTexture2D=G,this.setTexture2DArray=Z,this.setTexture3D=V,this.setTextureCube=W,this.rebindTextures=Pt,this.setupRenderTarget=H,this.updateRenderTargetMipmap=Bt,this.updateMultisampleRenderTarget=gt,this.setupDepthRenderbuffer=pt,this.setupFrameBufferTexture=B,this.useMultisampledRTT=ut}function Lp(s,t,e){const i=e.isWebGL2;function n(a,o=Be){let r;const c=Qt.getTransfer(o);if(a===gi)return s.UNSIGNED_BYTE;if(a===So)return s.UNSIGNED_SHORT_4_4_4_4;if(a===bo)return s.UNSIGNED_SHORT_5_5_5_1;if(a===dc)return s.BYTE;if(a===uc)return s.SHORT;if(a===Ma)return s.UNSIGNED_SHORT;if(a===Eo)return s.INT;if(a===ui)return s.UNSIGNED_INT;if(a===fi)return s.FLOAT;if(a===An)return i?s.HALF_FLOAT:(r=t.get("OES_texture_half_float"),r!==null?r.HALF_FLOAT_OES:null);if(a===fc)return s.ALPHA;if(a===Ye)return s.RGBA;if(a===pc)return s.LUMINANCE;if(a===mc)return s.LUMINANCE_ALPHA;if(a===Ci)return s.DEPTH_COMPONENT;if(a===dn)return s.DEPTH_STENCIL;if(a===ua)return r=t.get("EXT_sRGB"),r!==null?r.SRGB_ALPHA_EXT:null;if(a===gc)return s.RED;if(a===Ao)return s.RED_INTEGER;if(a===vc)return s.RG;if(a===wo)return s.RG_INTEGER;if(a===Po)return s.RGBA_INTEGER;if(a===As||a===ws||a===Ps||a===Cs)if(c===ee)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(a===As)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===ws)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===Ps)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===Cs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(a===As)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===ws)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===Ps)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===Cs)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===Ka||a===qa||a===Za||a===ja)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(a===Ka)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===qa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===Za)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===ja)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===Co)return r=t.get("WEBGL_compressed_texture_etc1"),r!==null?r.COMPRESSED_RGB_ETC1_WEBGL:null;if(a===Ja||a===Qa)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(a===Ja)return c===ee?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(a===Qa)return c===ee?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(a===tr||a===er||a===ir||a===nr||a===sr||a===ar||a===rr||a===or||a===lr||a===cr||a===hr||a===dr||a===ur||a===fr)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(a===tr)return c===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===er)return c===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===ir)return c===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===nr)return c===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===sr)return c===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===ar)return c===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===rr)return c===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===or)return c===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===lr)return c===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===cr)return c===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===hr)return c===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===dr)return c===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===ur)return c===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===fr)return c===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===Rs||a===pr||a===mr)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(a===Rs)return c===ee?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===pr)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===mr)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===_c||a===gr||a===vr||a===_r)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(a===Rs)return r.COMPRESSED_RED_RGTC1_EXT;if(a===gr)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===vr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===_r)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===Pi?i?s.UNSIGNED_INT_24_8:(r=t.get("WEBGL_depth_texture"),r!==null?r.UNSIGNED_INT_24_8_WEBGL:null):s[a]!==void 0?s[a]:null}return{convert:n}}class Ip extends Fe{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class xn extends xe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Dp={type:"move"};class ta{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new xn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new xn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new $,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new $),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new xn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new $,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new $),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let n=null,a=null,o=null;const r=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const _ of t.hand.values()){const d=e.getJointPose(_,i),h=this._getHandJoint(l,_);d!==null&&(h.matrix.fromArray(d.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=d.radius),h.visible=d!==null}const u=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],p=u.position.distanceTo(f.position),g=.02,m=.005;l.inputState.pinching&&p>g+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&p<=g-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(a=e.getPose(t.gripSpace,i),a!==null&&(c.matrix.fromArray(a.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,a.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(a.linearVelocity)):c.hasLinearVelocity=!1,a.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(a.angularVelocity)):c.hasAngularVelocity=!1));r!==null&&(n=e.getPose(t.targetRaySpace,i),n===null&&a!==null&&(n=a),n!==null&&(r.matrix.fromArray(n.transform.matrix),r.matrix.decompose(r.position,r.rotation,r.scale),r.matrixWorldNeedsUpdate=!0,n.linearVelocity?(r.hasLinearVelocity=!0,r.linearVelocity.copy(n.linearVelocity)):r.hasLinearVelocity=!1,n.angularVelocity?(r.hasAngularVelocity=!0,r.angularVelocity.copy(n.angularVelocity)):r.hasAngularVelocity=!1,this.dispatchEvent(Dp)))}return r!==null&&(r.visible=n!==null),c!==null&&(c.visible=a!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new xn;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}class Op extends Oi{constructor(t,e){super();const i=this;let n=null,a=1,o=null,r="local-floor",c=1,l=null,u=null,f=null,p=null,g=null,m=null;const _=e.getContextAttributes();let d=null,h=null;const x=[],v=[],y=new Ut;let T=null;const A=new Fe;A.layers.enable(1),A.viewport=new me;const S=new Fe;S.layers.enable(2),S.viewport=new me;const I=[A,S],M=new Ip;M.layers.enable(1),M.layers.enable(2);let b=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let C=x[X];return C===void 0&&(C=new ta,x[X]=C),C.getTargetRaySpace()},this.getControllerGrip=function(X){let C=x[X];return C===void 0&&(C=new ta,x[X]=C),C.getGripSpace()},this.getHand=function(X){let C=x[X];return C===void 0&&(C=new ta,x[X]=C),C.getHandSpace()};function D(X){const C=v.indexOf(X.inputSource);if(C===-1)return;const z=x[C];z!==void 0&&(z.update(X.inputSource,X.frame,l||o),z.dispatchEvent({type:X.type,data:X.inputSource}))}function Y(){n.removeEventListener("select",D),n.removeEventListener("selectstart",D),n.removeEventListener("selectend",D),n.removeEventListener("squeeze",D),n.removeEventListener("squeezestart",D),n.removeEventListener("squeezeend",D),n.removeEventListener("end",Y),n.removeEventListener("inputsourceschange",R);for(let X=0;X<x.length;X++){const C=v[X];C!==null&&(v[X]=null,x[X].disconnect(C))}b=null,F=null,t.setRenderTarget(d),g=null,p=null,f=null,n=null,h=null,nt.stop(),i.isPresenting=!1,t.setPixelRatio(T),t.setSize(y.width,y.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){a=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){r=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(X){l=X},this.getBaseLayer=function(){return p!==null?p:g},this.getBinding=function(){return f},this.getFrame=function(){return m},this.getSession=function(){return n},this.setSession=async function(X){if(n=X,n!==null){if(d=t.getRenderTarget(),n.addEventListener("select",D),n.addEventListener("selectstart",D),n.addEventListener("selectend",D),n.addEventListener("squeeze",D),n.addEventListener("squeezestart",D),n.addEventListener("squeezeend",D),n.addEventListener("end",Y),n.addEventListener("inputsourceschange",R),_.xrCompatible!==!0&&await e.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(y),n.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const C={antialias:n.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:a};g=new XRWebGLLayer(n,e,C),n.updateRenderState({baseLayer:g}),t.setPixelRatio(1),t.setSize(g.framebufferWidth,g.framebufferHeight,!1),h=new Li(g.framebufferWidth,g.framebufferHeight,{format:Ye,type:gi,colorSpace:t.outputColorSpace,stencilBuffer:_.stencil})}else{let C=null,z=null,q=null;_.depth&&(q=_.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,C=_.stencil?dn:Ci,z=_.stencil?Pi:ui);const B={colorFormat:e.RGBA8,depthFormat:q,scaleFactor:a};f=new XRWebGLBinding(n,e),p=f.createProjectionLayer(B),n.updateRenderState({layers:[p]}),t.setPixelRatio(1),t.setSize(p.textureWidth,p.textureHeight,!1),h=new Li(p.textureWidth,p.textureHeight,{format:Ye,type:gi,depthTexture:new Yo(p.textureWidth,p.textureHeight,z,void 0,void 0,void 0,void 0,void 0,void 0,C),stencilBuffer:_.stencil,colorSpace:t.outputColorSpace,samples:_.antialias?4:0});const j=t.properties.get(h);j.__ignoreDepthValues=p.ignoreDepthValues}h.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await n.requestReferenceSpace(r),nt.setContext(n),nt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode};function R(X){for(let C=0;C<X.removed.length;C++){const z=X.removed[C],q=v.indexOf(z);q>=0&&(v[q]=null,x[q].disconnect(z))}for(let C=0;C<X.added.length;C++){const z=X.added[C];let q=v.indexOf(z);if(q===-1){for(let j=0;j<x.length;j++)if(j>=v.length){v.push(z),q=j;break}else if(v[j]===null){v[j]=z,q=j;break}if(q===-1)break}const B=x[q];B&&B.connect(z)}}const U=new $,G=new $;function Z(X,C,z){U.setFromMatrixPosition(C.matrixWorld),G.setFromMatrixPosition(z.matrixWorld);const q=U.distanceTo(G),B=C.projectionMatrix.elements,j=z.projectionMatrix.elements,ct=B[14]/(B[10]-1),pt=B[14]/(B[10]+1),Pt=(B[9]+1)/B[5],H=(B[9]-1)/B[5],Bt=(B[8]-1)/B[0],gt=(j[8]+1)/j[0],yt=ct*Bt,ut=ct*gt,Gt=q/(-Bt+gt),xt=Gt*-Bt;C.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(xt),X.translateZ(Gt),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert();const w=ct+Gt,E=pt+Gt,k=yt-xt,ot=ut+(q-xt),at=Pt*pt/E*w,rt=H*pt/E*w;X.projectionMatrix.makePerspective(k,ot,at,rt,w,E),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}function V(X,C){C===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(C.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(n===null)return;M.near=S.near=A.near=X.near,M.far=S.far=A.far=X.far,(b!==M.near||F!==M.far)&&(n.updateRenderState({depthNear:M.near,depthFar:M.far}),b=M.near,F=M.far);const C=X.parent,z=M.cameras;V(M,C);for(let q=0;q<z.length;q++)V(z[q],C);z.length===2?Z(M,A,S):M.projectionMatrix.copy(A.projectionMatrix),W(X,M,C)};function W(X,C,z){z===null?X.matrix.copy(C.matrixWorld):(X.matrix.copy(z.matrixWorld),X.matrix.invert(),X.matrix.multiply(C.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(C.projectionMatrix),X.projectionMatrixInverse.copy(C.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=fa*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(p===null&&g===null))return c},this.setFoveation=function(X){c=X,p!==null&&(p.fixedFoveation=X),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=X)};let J=null;function it(X,C){if(u=C.getViewerPose(l||o),m=C,u!==null){const z=u.views;g!==null&&(t.setRenderTargetFramebuffer(h,g.framebuffer),t.setRenderTarget(h));let q=!1;z.length!==M.cameras.length&&(M.cameras.length=0,q=!0);for(let B=0;B<z.length;B++){const j=z[B];let ct=null;if(g!==null)ct=g.getViewport(j);else{const Pt=f.getViewSubImage(p,j);ct=Pt.viewport,B===0&&(t.setRenderTargetTextures(h,Pt.colorTexture,p.ignoreDepthValues?void 0:Pt.depthStencilTexture),t.setRenderTarget(h))}let pt=I[B];pt===void 0&&(pt=new Fe,pt.layers.enable(B),pt.viewport=new me,I[B]=pt),pt.matrix.fromArray(j.transform.matrix),pt.matrix.decompose(pt.position,pt.quaternion,pt.scale),pt.projectionMatrix.fromArray(j.projectionMatrix),pt.projectionMatrixInverse.copy(pt.projectionMatrix).invert(),pt.viewport.set(ct.x,ct.y,ct.width,ct.height),B===0&&(M.matrix.copy(pt.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),q===!0&&M.cameras.push(pt)}}for(let z=0;z<x.length;z++){const q=v[z],B=x[z];q!==null&&B!==void 0&&B.update(q,C,l||o)}J&&J(X,C),C.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:C}),m=null}const nt=new Vo;nt.setAnimationLoop(it),this.setAnimationLoop=function(X){J=X},this.dispose=function(){}}}function Np(s,t){function e(d,h){d.matrixAutoUpdate===!0&&d.updateMatrix(),h.value.copy(d.matrix)}function i(d,h){h.color.getRGB(d.fogColor.value,Go(s)),h.isFog?(d.fogNear.value=h.near,d.fogFar.value=h.far):h.isFogExp2&&(d.fogDensity.value=h.density)}function n(d,h,x,v,y){h.isMeshBasicMaterial||h.isMeshLambertMaterial?a(d,h):h.isMeshToonMaterial?(a(d,h),f(d,h)):h.isMeshPhongMaterial?(a(d,h),u(d,h)):h.isMeshStandardMaterial?(a(d,h),p(d,h),h.isMeshPhysicalMaterial&&g(d,h,y)):h.isMeshMatcapMaterial?(a(d,h),m(d,h)):h.isMeshDepthMaterial?a(d,h):h.isMeshDistanceMaterial?(a(d,h),_(d,h)):h.isMeshNormalMaterial?a(d,h):h.isLineBasicMaterial?(o(d,h),h.isLineDashedMaterial&&r(d,h)):h.isPointsMaterial?c(d,h,x,v):h.isSpriteMaterial?l(d,h):h.isShadowMaterial?(d.color.value.copy(h.color),d.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function a(d,h){d.opacity.value=h.opacity,h.color&&d.diffuse.value.copy(h.color),h.emissive&&d.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(d.map.value=h.map,e(h.map,d.mapTransform)),h.alphaMap&&(d.alphaMap.value=h.alphaMap,e(h.alphaMap,d.alphaMapTransform)),h.bumpMap&&(d.bumpMap.value=h.bumpMap,e(h.bumpMap,d.bumpMapTransform),d.bumpScale.value=h.bumpScale,h.side===Pe&&(d.bumpScale.value*=-1)),h.normalMap&&(d.normalMap.value=h.normalMap,e(h.normalMap,d.normalMapTransform),d.normalScale.value.copy(h.normalScale),h.side===Pe&&d.normalScale.value.negate()),h.displacementMap&&(d.displacementMap.value=h.displacementMap,e(h.displacementMap,d.displacementMapTransform),d.displacementScale.value=h.displacementScale,d.displacementBias.value=h.displacementBias),h.emissiveMap&&(d.emissiveMap.value=h.emissiveMap,e(h.emissiveMap,d.emissiveMapTransform)),h.specularMap&&(d.specularMap.value=h.specularMap,e(h.specularMap,d.specularMapTransform)),h.alphaTest>0&&(d.alphaTest.value=h.alphaTest);const x=t.get(h).envMap;if(x&&(d.envMap.value=x,d.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,d.reflectivity.value=h.reflectivity,d.ior.value=h.ior,d.refractionRatio.value=h.refractionRatio),h.lightMap){d.lightMap.value=h.lightMap;const v=s._useLegacyLights===!0?Math.PI:1;d.lightMapIntensity.value=h.lightMapIntensity*v,e(h.lightMap,d.lightMapTransform)}h.aoMap&&(d.aoMap.value=h.aoMap,d.aoMapIntensity.value=h.aoMapIntensity,e(h.aoMap,d.aoMapTransform))}function o(d,h){d.diffuse.value.copy(h.color),d.opacity.value=h.opacity,h.map&&(d.map.value=h.map,e(h.map,d.mapTransform))}function r(d,h){d.dashSize.value=h.dashSize,d.totalSize.value=h.dashSize+h.gapSize,d.scale.value=h.scale}function c(d,h,x,v){d.diffuse.value.copy(h.color),d.opacity.value=h.opacity,d.size.value=h.size*x,d.scale.value=v*.5,h.map&&(d.map.value=h.map,e(h.map,d.uvTransform)),h.alphaMap&&(d.alphaMap.value=h.alphaMap,e(h.alphaMap,d.alphaMapTransform)),h.alphaTest>0&&(d.alphaTest.value=h.alphaTest)}function l(d,h){d.diffuse.value.copy(h.color),d.opacity.value=h.opacity,d.rotation.value=h.rotation,h.map&&(d.map.value=h.map,e(h.map,d.mapTransform)),h.alphaMap&&(d.alphaMap.value=h.alphaMap,e(h.alphaMap,d.alphaMapTransform)),h.alphaTest>0&&(d.alphaTest.value=h.alphaTest)}function u(d,h){d.specular.value.copy(h.specular),d.shininess.value=Math.max(h.shininess,1e-4)}function f(d,h){h.gradientMap&&(d.gradientMap.value=h.gradientMap)}function p(d,h){d.metalness.value=h.metalness,h.metalnessMap&&(d.metalnessMap.value=h.metalnessMap,e(h.metalnessMap,d.metalnessMapTransform)),d.roughness.value=h.roughness,h.roughnessMap&&(d.roughnessMap.value=h.roughnessMap,e(h.roughnessMap,d.roughnessMapTransform)),t.get(h).envMap&&(d.envMapIntensity.value=h.envMapIntensity)}function g(d,h,x){d.ior.value=h.ior,h.sheen>0&&(d.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),d.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(d.sheenColorMap.value=h.sheenColorMap,e(h.sheenColorMap,d.sheenColorMapTransform)),h.sheenRoughnessMap&&(d.sheenRoughnessMap.value=h.sheenRoughnessMap,e(h.sheenRoughnessMap,d.sheenRoughnessMapTransform))),h.clearcoat>0&&(d.clearcoat.value=h.clearcoat,d.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(d.clearcoatMap.value=h.clearcoatMap,e(h.clearcoatMap,d.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(d.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,e(h.clearcoatRoughnessMap,d.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(d.clearcoatNormalMap.value=h.clearcoatNormalMap,e(h.clearcoatNormalMap,d.clearcoatNormalMapTransform),d.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Pe&&d.clearcoatNormalScale.value.negate())),h.iridescence>0&&(d.iridescence.value=h.iridescence,d.iridescenceIOR.value=h.iridescenceIOR,d.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],d.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(d.iridescenceMap.value=h.iridescenceMap,e(h.iridescenceMap,d.iridescenceMapTransform)),h.iridescenceThicknessMap&&(d.iridescenceThicknessMap.value=h.iridescenceThicknessMap,e(h.iridescenceThicknessMap,d.iridescenceThicknessMapTransform))),h.transmission>0&&(d.transmission.value=h.transmission,d.transmissionSamplerMap.value=x.texture,d.transmissionSamplerSize.value.set(x.width,x.height),h.transmissionMap&&(d.transmissionMap.value=h.transmissionMap,e(h.transmissionMap,d.transmissionMapTransform)),d.thickness.value=h.thickness,h.thicknessMap&&(d.thicknessMap.value=h.thicknessMap,e(h.thicknessMap,d.thicknessMapTransform)),d.attenuationDistance.value=h.attenuationDistance,d.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(d.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(d.anisotropyMap.value=h.anisotropyMap,e(h.anisotropyMap,d.anisotropyMapTransform))),d.specularIntensity.value=h.specularIntensity,d.specularColor.value.copy(h.specularColor),h.specularColorMap&&(d.specularColorMap.value=h.specularColorMap,e(h.specularColorMap,d.specularColorMapTransform)),h.specularIntensityMap&&(d.specularIntensityMap.value=h.specularIntensityMap,e(h.specularIntensityMap,d.specularIntensityMapTransform))}function m(d,h){h.matcap&&(d.matcap.value=h.matcap)}function _(d,h){const x=t.get(h).light;d.referencePosition.value.setFromMatrixPosition(x.matrixWorld),d.nearDistance.value=x.shadow.camera.near,d.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function Up(s,t,e,i){let n={},a={},o=[];const r=e.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(x,v){const y=v.program;i.uniformBlockBinding(x,y)}function l(x,v){let y=n[x.id];y===void 0&&(m(x),y=u(x),n[x.id]=y,x.addEventListener("dispose",d));const T=v.program;i.updateUBOMapping(x,T);const A=t.render.frame;a[x.id]!==A&&(p(x),a[x.id]=A)}function u(x){const v=f();x.__bindingPointIndex=v;const y=s.createBuffer(),T=x.__size,A=x.usage;return s.bindBuffer(s.UNIFORM_BUFFER,y),s.bufferData(s.UNIFORM_BUFFER,T,A),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,v,y),y}function f(){for(let x=0;x<r;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(x){const v=n[x.id],y=x.uniforms,T=x.__cache;s.bindBuffer(s.UNIFORM_BUFFER,v);for(let A=0,S=y.length;A<S;A++){const I=Array.isArray(y[A])?y[A]:[y[A]];for(let M=0,b=I.length;M<b;M++){const F=I[M];if(g(F,A,M,T)===!0){const D=F.__offset,Y=Array.isArray(F.value)?F.value:[F.value];let R=0;for(let U=0;U<Y.length;U++){const G=Y[U],Z=_(G);typeof G=="number"||typeof G=="boolean"?(F.__data[0]=G,s.bufferSubData(s.UNIFORM_BUFFER,D+R,F.__data)):G.isMatrix3?(F.__data[0]=G.elements[0],F.__data[1]=G.elements[1],F.__data[2]=G.elements[2],F.__data[3]=0,F.__data[4]=G.elements[3],F.__data[5]=G.elements[4],F.__data[6]=G.elements[5],F.__data[7]=0,F.__data[8]=G.elements[6],F.__data[9]=G.elements[7],F.__data[10]=G.elements[8],F.__data[11]=0):(G.toArray(F.__data,R),R+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,D,F.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function g(x,v,y,T){const A=x.value,S=v+"_"+y;if(T[S]===void 0)return typeof A=="number"||typeof A=="boolean"?T[S]=A:T[S]=A.clone(),!0;{const I=T[S];if(typeof A=="number"||typeof A=="boolean"){if(I!==A)return T[S]=A,!0}else if(I.equals(A)===!1)return I.copy(A),!0}return!1}function m(x){const v=x.uniforms;let y=0;const T=16;for(let S=0,I=v.length;S<I;S++){const M=Array.isArray(v[S])?v[S]:[v[S]];for(let b=0,F=M.length;b<F;b++){const D=M[b],Y=Array.isArray(D.value)?D.value:[D.value];for(let R=0,U=Y.length;R<U;R++){const G=Y[R],Z=_(G),V=y%T;V!==0&&T-V<Z.boundary&&(y+=T-V),D.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=y,y+=Z.storage}}}const A=y%T;return A>0&&(y+=T-A),x.__size=y,x.__cache={},this}function _(x){const v={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(v.boundary=4,v.storage=4):x.isVector2?(v.boundary=8,v.storage=8):x.isVector3||x.isColor?(v.boundary=16,v.storage=12):x.isVector4?(v.boundary=16,v.storage=16):x.isMatrix3?(v.boundary=48,v.storage=48):x.isMatrix4?(v.boundary=64,v.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),v}function d(x){const v=x.target;v.removeEventListener("dispose",d);const y=o.indexOf(v.__bindingPointIndex);o.splice(y,1),s.deleteBuffer(n[v.id]),delete n[v.id],delete a[v.id]}function h(){for(const x in n)s.deleteBuffer(n[x]);o=[],n={},a={}}return{bind:c,update:l,dispose:h}}class jo{constructor(t={}){const{canvas:e=Lc(),context:i=null,depth:n=!0,stencil:a=!0,alpha:o=!1,antialias:r=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=t;this.isWebGLRenderer=!0;let p;i!==null?p=i.getContextAttributes().alpha:p=o;const g=new Uint32Array(4),m=new Int32Array(4);let _=null,d=null;const h=[],x=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ge,this._useLegacyLights=!1,this.toneMapping=mi,this.toneMappingExposure=1;const v=this;let y=!1,T=0,A=0,S=null,I=-1,M=null;const b=new me,F=new me;let D=null;const Y=new Jt(0);let R=0,U=e.width,G=e.height,Z=1,V=null,W=null;const J=new me(0,0,U,G),it=new me(0,0,U,G);let nt=!1;const X=new Aa;let C=!1,z=!1,q=null;const B=new he,j=new Ut,ct=new $,pt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Pt(){return S===null?Z:1}let H=i;function Bt(P,K){for(let et=0;et<P.length;et++){const st=P[et],tt=e.getContext(st,K);if(tt!==null)return tt}return null}try{const P={alpha:!0,depth:n,stencil:a,antialias:r,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ya}`),e.addEventListener("webglcontextlost",ht,!1),e.addEventListener("webglcontextrestored",N,!1),e.addEventListener("webglcontextcreationerror",mt,!1),H===null){const K=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&K.shift(),H=Bt(K,P),H===null)throw Bt(K)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&H instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),H.getShaderPrecisionFormat===void 0&&(H.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let gt,yt,ut,Gt,xt,w,E,k,ot,at,rt,vt,dt,Tt,At,zt,lt,Ht,Vt,Nt,wt,Et,L,ft;function Ct(){gt=new Yu(H),yt=new Bu(H,gt,t),gt.init(yt),Et=new Lp(H,gt,yt),ut=new Cp(H,gt,yt),Gt=new Ku(H),xt=new mp,w=new Rp(H,gt,ut,xt,yt,Et,Gt),E=new ku(v),k=new Wu(v),ot=new ih(H,yt),L=new zu(H,gt,ot,yt),at=new Xu(H,ot,Gt,L),rt=new Ju(H,at,ot,Gt),Vt=new ju(H,yt,w),zt=new Gu(xt),vt=new pp(v,E,k,gt,yt,L,zt),dt=new Np(v,xt),Tt=new vp,At=new Ep(gt,yt),Ht=new Uu(v,E,k,ut,rt,p,c),lt=new Pp(v,rt,yt),ft=new Up(H,Gt,yt,ut),Nt=new Fu(H,gt,Gt,yt),wt=new $u(H,gt,Gt,yt),Gt.programs=vt.programs,v.capabilities=yt,v.extensions=gt,v.properties=xt,v.renderLists=Tt,v.shadowMap=lt,v.state=ut,v.info=Gt}Ct();const bt=new Op(v,H);this.xr=bt,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const P=gt.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){const P=gt.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(P){P!==void 0&&(Z=P,this.setSize(U,G,!1))},this.getSize=function(P){return P.set(U,G)},this.setSize=function(P,K,et=!0){if(bt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}U=P,G=K,e.width=Math.floor(P*Z),e.height=Math.floor(K*Z),et===!0&&(e.style.width=P+"px",e.style.height=K+"px"),this.setViewport(0,0,P,K)},this.getDrawingBufferSize=function(P){return P.set(U*Z,G*Z).floor()},this.setDrawingBufferSize=function(P,K,et){U=P,G=K,Z=et,e.width=Math.floor(P*et),e.height=Math.floor(K*et),this.setViewport(0,0,P,K)},this.getCurrentViewport=function(P){return P.copy(b)},this.getViewport=function(P){return P.copy(J)},this.setViewport=function(P,K,et,st){P.isVector4?J.set(P.x,P.y,P.z,P.w):J.set(P,K,et,st),ut.viewport(b.copy(J).multiplyScalar(Z).floor())},this.getScissor=function(P){return P.copy(it)},this.setScissor=function(P,K,et,st){P.isVector4?it.set(P.x,P.y,P.z,P.w):it.set(P,K,et,st),ut.scissor(F.copy(it).multiplyScalar(Z).floor())},this.getScissorTest=function(){return nt},this.setScissorTest=function(P){ut.setScissorTest(nt=P)},this.setOpaqueSort=function(P){V=P},this.setTransparentSort=function(P){W=P},this.getClearColor=function(P){return P.copy(Ht.getClearColor())},this.setClearColor=function(){Ht.setClearColor.apply(Ht,arguments)},this.getClearAlpha=function(){return Ht.getClearAlpha()},this.setClearAlpha=function(){Ht.setClearAlpha.apply(Ht,arguments)},this.clear=function(P=!0,K=!0,et=!0){let st=0;if(P){let tt=!1;if(S!==null){const St=S.texture.format;tt=St===Po||St===wo||St===Ao}if(tt){const St=S.texture.type,Rt=St===gi||St===ui||St===Ma||St===Pi||St===So||St===bo,Ot=Ht.getClearColor(),Ft=Ht.getClearAlpha(),Xt=Ot.r,kt=Ot.g,Wt=Ot.b;Rt?(g[0]=Xt,g[1]=kt,g[2]=Wt,g[3]=Ft,H.clearBufferuiv(H.COLOR,0,g)):(m[0]=Xt,m[1]=kt,m[2]=Wt,m[3]=Ft,H.clearBufferiv(H.COLOR,0,m))}else st|=H.COLOR_BUFFER_BIT}K&&(st|=H.DEPTH_BUFFER_BIT),et&&(st|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H.clear(st)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ht,!1),e.removeEventListener("webglcontextrestored",N,!1),e.removeEventListener("webglcontextcreationerror",mt,!1),Tt.dispose(),At.dispose(),xt.dispose(),E.dispose(),k.dispose(),rt.dispose(),L.dispose(),ft.dispose(),vt.dispose(),bt.dispose(),bt.removeEventListener("sessionstart",re),bt.removeEventListener("sessionend",jt),q&&(q.dispose(),q=null),le.stop()};function ht(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function N(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const P=Gt.autoReset,K=lt.enabled,et=lt.autoUpdate,st=lt.needsUpdate,tt=lt.type;Ct(),Gt.autoReset=P,lt.enabled=K,lt.autoUpdate=et,lt.needsUpdate=st,lt.type=tt}function mt(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function Mt(P){const K=P.target;K.removeEventListener("dispose",Mt),Dt(K)}function Dt(P){Lt(P),xt.remove(P)}function Lt(P){const K=xt.get(P).programs;K!==void 0&&(K.forEach(function(et){vt.releaseProgram(et)}),P.isShaderMaterial&&vt.releaseShaderCache(P))}this.renderBufferDirect=function(P,K,et,st,tt,St){K===null&&(K=pt);const Rt=tt.isMesh&&tt.matrixWorld.determinant()<0,Ot=rl(P,K,et,st,tt);ut.setMaterial(st,Rt);let Ft=et.index,Xt=1;if(st.wireframe===!0){if(Ft=at.getWireframeAttribute(et),Ft===void 0)return;Xt=2}const kt=et.drawRange,Wt=et.attributes.position;let oe=kt.start*Xt,Ce=(kt.start+kt.count)*Xt;St!==null&&(oe=Math.max(oe,St.start*Xt),Ce=Math.min(Ce,(St.start+St.count)*Xt)),Ft!==null?(oe=Math.max(oe,0),Ce=Math.min(Ce,Ft.count)):Wt!=null&&(oe=Math.max(oe,0),Ce=Math.min(Ce,Wt.count));const fe=Ce-oe;if(fe<0||fe===1/0)return;L.setup(tt,st,Ot,et,Ft);let Ze,ie=Nt;if(Ft!==null&&(Ze=ot.get(Ft),ie=wt,ie.setIndex(Ze)),tt.isMesh)st.wireframe===!0?(ut.setLineWidth(st.wireframeLinewidth*Pt()),ie.setMode(H.LINES)):ie.setMode(H.TRIANGLES);else if(tt.isLine){let $t=st.linewidth;$t===void 0&&($t=1),ut.setLineWidth($t*Pt()),tt.isLineSegments?ie.setMode(H.LINES):tt.isLineLoop?ie.setMode(H.LINE_LOOP):ie.setMode(H.LINE_STRIP)}else tt.isPoints?ie.setMode(H.POINTS):tt.isSprite&&ie.setMode(H.TRIANGLES);if(tt.isBatchedMesh)ie.renderMultiDraw(tt._multiDrawStarts,tt._multiDrawCounts,tt._multiDrawCount);else if(tt.isInstancedMesh)ie.renderInstances(oe,fe,tt.count);else if(et.isInstancedBufferGeometry){const $t=et._maxInstanceCount!==void 0?et._maxInstanceCount:1/0,xs=Math.min(et.instanceCount,$t);ie.renderInstances(oe,fe,xs)}else ie.render(oe,fe)};function qt(P,K,et){P.transparent===!0&&P.side===ni&&P.forceSinglePass===!1?(P.side=Pe,P.needsUpdate=!0,In(P,K,et),P.side=vi,P.needsUpdate=!0,In(P,K,et),P.side=ni):In(P,K,et)}this.compile=function(P,K,et=null){et===null&&(et=P),d=At.get(et),d.init(),x.push(d),et.traverseVisible(function(tt){tt.isLight&&tt.layers.test(K.layers)&&(d.pushLight(tt),tt.castShadow&&d.pushShadow(tt))}),P!==et&&P.traverseVisible(function(tt){tt.isLight&&tt.layers.test(K.layers)&&(d.pushLight(tt),tt.castShadow&&d.pushShadow(tt))}),d.setupLights(v._useLegacyLights);const st=new Set;return P.traverse(function(tt){const St=tt.material;if(St)if(Array.isArray(St))for(let Rt=0;Rt<St.length;Rt++){const Ot=St[Rt];qt(Ot,et,tt),st.add(Ot)}else qt(St,et,tt),st.add(St)}),x.pop(),d=null,st},this.compileAsync=function(P,K,et=null){const st=this.compile(P,K,et);return new Promise(tt=>{function St(){if(st.forEach(function(Rt){xt.get(Rt).currentProgram.isReady()&&st.delete(Rt)}),st.size===0){tt(P);return}setTimeout(St,10)}gt.get("KHR_parallel_shader_compile")!==null?St():setTimeout(St,10)})};let Zt=null;function se(P){Zt&&Zt(P)}function re(){le.stop()}function jt(){le.start()}const le=new Vo;le.setAnimationLoop(se),typeof self<"u"&&le.setContext(self),this.setAnimationLoop=function(P){Zt=P,bt.setAnimationLoop(P),P===null?le.stop():le.start()},bt.addEventListener("sessionstart",re),bt.addEventListener("sessionend",jt),this.render=function(P,K){if(K!==void 0&&K.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),K.parent===null&&K.matrixWorldAutoUpdate===!0&&K.updateMatrixWorld(),bt.enabled===!0&&bt.isPresenting===!0&&(bt.cameraAutoUpdate===!0&&bt.updateCamera(K),K=bt.getCamera()),P.isScene===!0&&P.onBeforeRender(v,P,K,S),d=At.get(P,x.length),d.init(),x.push(d),B.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),X.setFromProjectionMatrix(B),z=this.localClippingEnabled,C=zt.init(this.clippingPlanes,z),_=Tt.get(P,h.length),_.init(),h.push(_),Xe(P,K,0,v.sortObjects),_.finish(),v.sortObjects===!0&&_.sort(V,W),this.info.render.frame++,C===!0&&zt.beginShadows();const et=d.state.shadowsArray;if(lt.render(et,P,K),C===!0&&zt.endShadows(),this.info.autoReset===!0&&this.info.reset(),Ht.render(_,P),d.setupLights(v._useLegacyLights),K.isArrayCamera){const st=K.cameras;for(let tt=0,St=st.length;tt<St;tt++){const Rt=st[tt];Ia(_,P,Rt,Rt.viewport)}}else Ia(_,P,K);S!==null&&(w.updateMultisampleRenderTarget(S),w.updateRenderTargetMipmap(S)),P.isScene===!0&&P.onAfterRender(v,P,K),L.resetDefaultState(),I=-1,M=null,x.pop(),x.length>0?d=x[x.length-1]:d=null,h.pop(),h.length>0?_=h[h.length-1]:_=null};function Xe(P,K,et,st){if(P.visible===!1)return;if(P.layers.test(K.layers)){if(P.isGroup)et=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(K);else if(P.isLight)d.pushLight(P),P.castShadow&&d.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||X.intersectsSprite(P)){st&&ct.setFromMatrixPosition(P.matrixWorld).applyMatrix4(B);const Rt=rt.update(P),Ot=P.material;Ot.visible&&_.push(P,Rt,Ot,et,ct.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||X.intersectsObject(P))){const Rt=rt.update(P),Ot=P.material;if(st&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),ct.copy(P.boundingSphere.center)):(Rt.boundingSphere===null&&Rt.computeBoundingSphere(),ct.copy(Rt.boundingSphere.center)),ct.applyMatrix4(P.matrixWorld).applyMatrix4(B)),Array.isArray(Ot)){const Ft=Rt.groups;for(let Xt=0,kt=Ft.length;Xt<kt;Xt++){const Wt=Ft[Xt],oe=Ot[Wt.materialIndex];oe&&oe.visible&&_.push(P,Rt,oe,et,ct.z,Wt)}}else Ot.visible&&_.push(P,Rt,Ot,et,ct.z,null)}}const St=P.children;for(let Rt=0,Ot=St.length;Rt<Ot;Rt++)Xe(St[Rt],K,et,st)}function Ia(P,K,et,st){const tt=P.opaque,St=P.transmissive,Rt=P.transparent;d.setupLightsView(et),C===!0&&zt.setGlobalState(v.clippingPlanes,et),St.length>0&&al(tt,St,K,et),st&&ut.viewport(b.copy(st)),tt.length>0&&Ln(tt,K,et),St.length>0&&Ln(St,K,et),Rt.length>0&&Ln(Rt,K,et),ut.buffers.depth.setTest(!0),ut.buffers.depth.setMask(!0),ut.buffers.color.setMask(!0),ut.setPolygonOffset(!1)}function al(P,K,et,st){if((et.isScene===!0?et.overrideMaterial:null)!==null)return;const St=yt.isWebGL2;q===null&&(q=new Li(1,1,{generateMipmaps:!0,type:gt.has("EXT_color_buffer_half_float")?An:gi,minFilter:bn,samples:St?4:0})),v.getDrawingBufferSize(j),St?q.setSize(j.x,j.y):q.setSize(pa(j.x),pa(j.y));const Rt=v.getRenderTarget();v.setRenderTarget(q),v.getClearColor(Y),R=v.getClearAlpha(),R<1&&v.setClearColor(16777215,.5),v.clear();const Ot=v.toneMapping;v.toneMapping=mi,Ln(P,et,st),w.updateMultisampleRenderTarget(q),w.updateRenderTargetMipmap(q);let Ft=!1;for(let Xt=0,kt=K.length;Xt<kt;Xt++){const Wt=K[Xt],oe=Wt.object,Ce=Wt.geometry,fe=Wt.material,Ze=Wt.group;if(fe.side===ni&&oe.layers.test(st.layers)){const ie=fe.side;fe.side=Pe,fe.needsUpdate=!0,Da(oe,et,st,Ce,fe,Ze),fe.side=ie,fe.needsUpdate=!0,Ft=!0}}Ft===!0&&(w.updateMultisampleRenderTarget(q),w.updateRenderTargetMipmap(q)),v.setRenderTarget(Rt),v.setClearColor(Y,R),v.toneMapping=Ot}function Ln(P,K,et){const st=K.isScene===!0?K.overrideMaterial:null;for(let tt=0,St=P.length;tt<St;tt++){const Rt=P[tt],Ot=Rt.object,Ft=Rt.geometry,Xt=st===null?Rt.material:st,kt=Rt.group;Ot.layers.test(et.layers)&&Da(Ot,K,et,Ft,Xt,kt)}}function Da(P,K,et,st,tt,St){P.onBeforeRender(v,K,et,st,tt,St),P.modelViewMatrix.multiplyMatrices(et.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),tt.onBeforeRender(v,K,et,st,P,St),tt.transparent===!0&&tt.side===ni&&tt.forceSinglePass===!1?(tt.side=Pe,tt.needsUpdate=!0,v.renderBufferDirect(et,K,st,tt,P,St),tt.side=vi,tt.needsUpdate=!0,v.renderBufferDirect(et,K,st,tt,P,St),tt.side=ni):v.renderBufferDirect(et,K,st,tt,P,St),P.onAfterRender(v,K,et,st,tt,St)}function In(P,K,et){K.isScene!==!0&&(K=pt);const st=xt.get(P),tt=d.state.lights,St=d.state.shadowsArray,Rt=tt.state.version,Ot=vt.getParameters(P,tt.state,St,K,et),Ft=vt.getProgramCacheKey(Ot);let Xt=st.programs;st.environment=P.isMeshStandardMaterial?K.environment:null,st.fog=K.fog,st.envMap=(P.isMeshStandardMaterial?k:E).get(P.envMap||st.environment),Xt===void 0&&(P.addEventListener("dispose",Mt),Xt=new Map,st.programs=Xt);let kt=Xt.get(Ft);if(kt!==void 0){if(st.currentProgram===kt&&st.lightsStateVersion===Rt)return Na(P,Ot),kt}else Ot.uniforms=vt.getUniforms(P),P.onBuild(et,Ot,v),P.onBeforeCompile(Ot,v),kt=vt.acquireProgram(Ot,Ft),Xt.set(Ft,kt),st.uniforms=Ot.uniforms;const Wt=st.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(Wt.clippingPlanes=zt.uniform),Na(P,Ot),st.needsLights=ll(P),st.lightsStateVersion=Rt,st.needsLights&&(Wt.ambientLightColor.value=tt.state.ambient,Wt.lightProbe.value=tt.state.probe,Wt.directionalLights.value=tt.state.directional,Wt.directionalLightShadows.value=tt.state.directionalShadow,Wt.spotLights.value=tt.state.spot,Wt.spotLightShadows.value=tt.state.spotShadow,Wt.rectAreaLights.value=tt.state.rectArea,Wt.ltc_1.value=tt.state.rectAreaLTC1,Wt.ltc_2.value=tt.state.rectAreaLTC2,Wt.pointLights.value=tt.state.point,Wt.pointLightShadows.value=tt.state.pointShadow,Wt.hemisphereLights.value=tt.state.hemi,Wt.directionalShadowMap.value=tt.state.directionalShadowMap,Wt.directionalShadowMatrix.value=tt.state.directionalShadowMatrix,Wt.spotShadowMap.value=tt.state.spotShadowMap,Wt.spotLightMatrix.value=tt.state.spotLightMatrix,Wt.spotLightMap.value=tt.state.spotLightMap,Wt.pointShadowMap.value=tt.state.pointShadowMap,Wt.pointShadowMatrix.value=tt.state.pointShadowMatrix),st.currentProgram=kt,st.uniformsList=null,kt}function Oa(P){if(P.uniformsList===null){const K=P.currentProgram.getUniforms();P.uniformsList=as.seqWithValue(K.seq,P.uniforms)}return P.uniformsList}function Na(P,K){const et=xt.get(P);et.outputColorSpace=K.outputColorSpace,et.batching=K.batching,et.instancing=K.instancing,et.instancingColor=K.instancingColor,et.skinning=K.skinning,et.morphTargets=K.morphTargets,et.morphNormals=K.morphNormals,et.morphColors=K.morphColors,et.morphTargetsCount=K.morphTargetsCount,et.numClippingPlanes=K.numClippingPlanes,et.numIntersection=K.numClipIntersection,et.vertexAlphas=K.vertexAlphas,et.vertexTangents=K.vertexTangents,et.toneMapping=K.toneMapping}function rl(P,K,et,st,tt){K.isScene!==!0&&(K=pt),w.resetTextureUnits();const St=K.fog,Rt=st.isMeshStandardMaterial?K.environment:null,Ot=S===null?v.outputColorSpace:S.isXRRenderTarget===!0?S.texture.colorSpace:ai,Ft=(st.isMeshStandardMaterial?k:E).get(st.envMap||Rt),Xt=st.vertexColors===!0&&!!et.attributes.color&&et.attributes.color.itemSize===4,kt=!!et.attributes.tangent&&(!!st.normalMap||st.anisotropy>0),Wt=!!et.morphAttributes.position,oe=!!et.morphAttributes.normal,Ce=!!et.morphAttributes.color;let fe=mi;st.toneMapped&&(S===null||S.isXRRenderTarget===!0)&&(fe=v.toneMapping);const Ze=et.morphAttributes.position||et.morphAttributes.normal||et.morphAttributes.color,ie=Ze!==void 0?Ze.length:0,$t=xt.get(st),xs=d.state.lights;if(C===!0&&(z===!0||P!==M)){const Oe=P===M&&st.id===I;zt.setState(st,P,Oe)}let ae=!1;st.version===$t.__version?($t.needsLights&&$t.lightsStateVersion!==xs.state.version||$t.outputColorSpace!==Ot||tt.isBatchedMesh&&$t.batching===!1||!tt.isBatchedMesh&&$t.batching===!0||tt.isInstancedMesh&&$t.instancing===!1||!tt.isInstancedMesh&&$t.instancing===!0||tt.isSkinnedMesh&&$t.skinning===!1||!tt.isSkinnedMesh&&$t.skinning===!0||tt.isInstancedMesh&&$t.instancingColor===!0&&tt.instanceColor===null||tt.isInstancedMesh&&$t.instancingColor===!1&&tt.instanceColor!==null||$t.envMap!==Ft||st.fog===!0&&$t.fog!==St||$t.numClippingPlanes!==void 0&&($t.numClippingPlanes!==zt.numPlanes||$t.numIntersection!==zt.numIntersection)||$t.vertexAlphas!==Xt||$t.vertexTangents!==kt||$t.morphTargets!==Wt||$t.morphNormals!==oe||$t.morphColors!==Ce||$t.toneMapping!==fe||yt.isWebGL2===!0&&$t.morphTargetsCount!==ie)&&(ae=!0):(ae=!0,$t.__version=st.version);let _i=$t.currentProgram;ae===!0&&(_i=In(st,K,tt));let Ua=!1,pn=!1,Ms=!1;const ve=_i.getUniforms(),yi=$t.uniforms;if(ut.useProgram(_i.program)&&(Ua=!0,pn=!0,Ms=!0),st.id!==I&&(I=st.id,pn=!0),Ua||M!==P){ve.setValue(H,"projectionMatrix",P.projectionMatrix),ve.setValue(H,"viewMatrix",P.matrixWorldInverse);const Oe=ve.map.cameraPosition;Oe!==void 0&&Oe.setValue(H,ct.setFromMatrixPosition(P.matrixWorld)),yt.logarithmicDepthBuffer&&ve.setValue(H,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(st.isMeshPhongMaterial||st.isMeshToonMaterial||st.isMeshLambertMaterial||st.isMeshBasicMaterial||st.isMeshStandardMaterial||st.isShaderMaterial)&&ve.setValue(H,"isOrthographic",P.isOrthographicCamera===!0),M!==P&&(M=P,pn=!0,Ms=!0)}if(tt.isSkinnedMesh){ve.setOptional(H,tt,"bindMatrix"),ve.setOptional(H,tt,"bindMatrixInverse");const Oe=tt.skeleton;Oe&&(yt.floatVertexTextures?(Oe.boneTexture===null&&Oe.computeBoneTexture(),ve.setValue(H,"boneTexture",Oe.boneTexture,w)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}tt.isBatchedMesh&&(ve.setOptional(H,tt,"batchingTexture"),ve.setValue(H,"batchingTexture",tt._matricesTexture,w));const Ts=et.morphAttributes;if((Ts.position!==void 0||Ts.normal!==void 0||Ts.color!==void 0&&yt.isWebGL2===!0)&&Vt.update(tt,et,_i),(pn||$t.receiveShadow!==tt.receiveShadow)&&($t.receiveShadow=tt.receiveShadow,ve.setValue(H,"receiveShadow",tt.receiveShadow)),st.isMeshGouraudMaterial&&st.envMap!==null&&(yi.envMap.value=Ft,yi.flipEnvMap.value=Ft.isCubeTexture&&Ft.isRenderTargetTexture===!1?-1:1),pn&&(ve.setValue(H,"toneMappingExposure",v.toneMappingExposure),$t.needsLights&&ol(yi,Ms),St&&st.fog===!0&&dt.refreshFogUniforms(yi,St),dt.refreshMaterialUniforms(yi,st,Z,G,q),as.upload(H,Oa($t),yi,w)),st.isShaderMaterial&&st.uniformsNeedUpdate===!0&&(as.upload(H,Oa($t),yi,w),st.uniformsNeedUpdate=!1),st.isSpriteMaterial&&ve.setValue(H,"center",tt.center),ve.setValue(H,"modelViewMatrix",tt.modelViewMatrix),ve.setValue(H,"normalMatrix",tt.normalMatrix),ve.setValue(H,"modelMatrix",tt.matrixWorld),st.isShaderMaterial||st.isRawShaderMaterial){const Oe=st.uniformsGroups;for(let Es=0,cl=Oe.length;Es<cl;Es++)if(yt.isWebGL2){const za=Oe[Es];ft.update(za,_i),ft.bind(za,_i)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return _i}function ol(P,K){P.ambientLightColor.needsUpdate=K,P.lightProbe.needsUpdate=K,P.directionalLights.needsUpdate=K,P.directionalLightShadows.needsUpdate=K,P.pointLights.needsUpdate=K,P.pointLightShadows.needsUpdate=K,P.spotLights.needsUpdate=K,P.spotLightShadows.needsUpdate=K,P.rectAreaLights.needsUpdate=K,P.hemisphereLights.needsUpdate=K}function ll(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return S},this.setRenderTargetTextures=function(P,K,et){xt.get(P.texture).__webglTexture=K,xt.get(P.depthTexture).__webglTexture=et;const st=xt.get(P);st.__hasExternalTextures=!0,st.__hasExternalTextures&&(st.__autoAllocateDepthBuffer=et===void 0,st.__autoAllocateDepthBuffer||gt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),st.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(P,K){const et=xt.get(P);et.__webglFramebuffer=K,et.__useDefaultFramebuffer=K===void 0},this.setRenderTarget=function(P,K=0,et=0){S=P,T=K,A=et;let st=!0,tt=null,St=!1,Rt=!1;if(P){const Ft=xt.get(P);Ft.__useDefaultFramebuffer!==void 0?(ut.bindFramebuffer(H.FRAMEBUFFER,null),st=!1):Ft.__webglFramebuffer===void 0?w.setupRenderTarget(P):Ft.__hasExternalTextures&&w.rebindTextures(P,xt.get(P.texture).__webglTexture,xt.get(P.depthTexture).__webglTexture);const Xt=P.texture;(Xt.isData3DTexture||Xt.isDataArrayTexture||Xt.isCompressedArrayTexture)&&(Rt=!0);const kt=xt.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(kt[K])?tt=kt[K][et]:tt=kt[K],St=!0):yt.isWebGL2&&P.samples>0&&w.useMultisampledRTT(P)===!1?tt=xt.get(P).__webglMultisampledFramebuffer:Array.isArray(kt)?tt=kt[et]:tt=kt,b.copy(P.viewport),F.copy(P.scissor),D=P.scissorTest}else b.copy(J).multiplyScalar(Z).floor(),F.copy(it).multiplyScalar(Z).floor(),D=nt;if(ut.bindFramebuffer(H.FRAMEBUFFER,tt)&&yt.drawBuffers&&st&&ut.drawBuffers(P,tt),ut.viewport(b),ut.scissor(F),ut.setScissorTest(D),St){const Ft=xt.get(P.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+K,Ft.__webglTexture,et)}else if(Rt){const Ft=xt.get(P.texture),Xt=K||0;H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,Ft.__webglTexture,et||0,Xt)}I=-1},this.readRenderTargetPixels=function(P,K,et,st,tt,St,Rt){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ot=xt.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Rt!==void 0&&(Ot=Ot[Rt]),Ot){ut.bindFramebuffer(H.FRAMEBUFFER,Ot);try{const Ft=P.texture,Xt=Ft.format,kt=Ft.type;if(Xt!==Ye&&Et.convert(Xt)!==H.getParameter(H.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Wt=kt===An&&(gt.has("EXT_color_buffer_half_float")||yt.isWebGL2&&gt.has("EXT_color_buffer_float"));if(kt!==gi&&Et.convert(kt)!==H.getParameter(H.IMPLEMENTATION_COLOR_READ_TYPE)&&!(kt===fi&&(yt.isWebGL2||gt.has("OES_texture_float")||gt.has("WEBGL_color_buffer_float")))&&!Wt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}K>=0&&K<=P.width-st&&et>=0&&et<=P.height-tt&&H.readPixels(K,et,st,tt,Et.convert(Xt),Et.convert(kt),St)}finally{const Ft=S!==null?xt.get(S).__webglFramebuffer:null;ut.bindFramebuffer(H.FRAMEBUFFER,Ft)}}},this.copyFramebufferToTexture=function(P,K,et=0){const st=Math.pow(2,-et),tt=Math.floor(K.image.width*st),St=Math.floor(K.image.height*st);w.setTexture2D(K,0),H.copyTexSubImage2D(H.TEXTURE_2D,et,0,0,P.x,P.y,tt,St),ut.unbindTexture()},this.copyTextureToTexture=function(P,K,et,st=0){const tt=K.image.width,St=K.image.height,Rt=Et.convert(et.format),Ot=Et.convert(et.type);w.setTexture2D(et,0),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,et.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,et.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,et.unpackAlignment),K.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,st,P.x,P.y,tt,St,Rt,Ot,K.image.data):K.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,st,P.x,P.y,K.mipmaps[0].width,K.mipmaps[0].height,Rt,K.mipmaps[0].data):H.texSubImage2D(H.TEXTURE_2D,st,P.x,P.y,Rt,Ot,K.image),st===0&&et.generateMipmaps&&H.generateMipmap(H.TEXTURE_2D),ut.unbindTexture()},this.copyTextureToTexture3D=function(P,K,et,st,tt=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const St=P.max.x-P.min.x+1,Rt=P.max.y-P.min.y+1,Ot=P.max.z-P.min.z+1,Ft=Et.convert(st.format),Xt=Et.convert(st.type);let kt;if(st.isData3DTexture)w.setTexture3D(st,0),kt=H.TEXTURE_3D;else if(st.isDataArrayTexture||st.isCompressedArrayTexture)w.setTexture2DArray(st,0),kt=H.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,st.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,st.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,st.unpackAlignment);const Wt=H.getParameter(H.UNPACK_ROW_LENGTH),oe=H.getParameter(H.UNPACK_IMAGE_HEIGHT),Ce=H.getParameter(H.UNPACK_SKIP_PIXELS),fe=H.getParameter(H.UNPACK_SKIP_ROWS),Ze=H.getParameter(H.UNPACK_SKIP_IMAGES),ie=et.isCompressedTexture?et.mipmaps[tt]:et.image;H.pixelStorei(H.UNPACK_ROW_LENGTH,ie.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,ie.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,P.min.x),H.pixelStorei(H.UNPACK_SKIP_ROWS,P.min.y),H.pixelStorei(H.UNPACK_SKIP_IMAGES,P.min.z),et.isDataTexture||et.isData3DTexture?H.texSubImage3D(kt,tt,K.x,K.y,K.z,St,Rt,Ot,Ft,Xt,ie.data):et.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),H.compressedTexSubImage3D(kt,tt,K.x,K.y,K.z,St,Rt,Ot,Ft,ie.data)):H.texSubImage3D(kt,tt,K.x,K.y,K.z,St,Rt,Ot,Ft,Xt,ie),H.pixelStorei(H.UNPACK_ROW_LENGTH,Wt),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,oe),H.pixelStorei(H.UNPACK_SKIP_PIXELS,Ce),H.pixelStorei(H.UNPACK_SKIP_ROWS,fe),H.pixelStorei(H.UNPACK_SKIP_IMAGES,Ze),tt===0&&st.generateMipmaps&&H.generateMipmap(kt),ut.unbindTexture()},this.initTexture=function(P){P.isCubeTexture?w.setTextureCube(P,0):P.isData3DTexture?w.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?w.setTexture2DArray(P,0):w.setTexture2D(P,0),ut.unbindTexture()},this.resetState=function(){T=0,A=0,S=null,ut.reset(),L.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return si}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===Ta?"display-p3":"srgb",e.unpackColorSpace=Qt.workingColorSpace===vs?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===ge?Ri:Ro}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===Ri?ge:ai}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}}class zp extends jo{}zp.prototype.isWebGL1Renderer=!0;class Fp extends xe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}}class fs extends qe{constructor(t=1,e=1,i=1,n=32,a=1,o=!1,r=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:n,heightSegments:a,openEnded:o,thetaStart:r,thetaLength:c};const l=this;n=Math.floor(n),a=Math.floor(a);const u=[],f=[],p=[],g=[];let m=0;const _=[],d=i/2;let h=0;x(),o===!1&&(t>0&&v(!0),e>0&&v(!1)),this.setIndex(u),this.setAttribute("position",new Me(f,3)),this.setAttribute("normal",new Me(p,3)),this.setAttribute("uv",new Me(g,2));function x(){const y=new $,T=new $;let A=0;const S=(e-t)/i;for(let I=0;I<=a;I++){const M=[],b=I/a,F=b*(e-t)+t;for(let D=0;D<=n;D++){const Y=D/n,R=Y*c+r,U=Math.sin(R),G=Math.cos(R);T.x=F*U,T.y=-b*i+d,T.z=F*G,f.push(T.x,T.y,T.z),y.set(U,S,G).normalize(),p.push(y.x,y.y,y.z),g.push(Y,1-b),M.push(m++)}_.push(M)}for(let I=0;I<n;I++)for(let M=0;M<a;M++){const b=_[M][I],F=_[M+1][I],D=_[M+1][I+1],Y=_[M][I+1];u.push(b,F,Y),u.push(F,D,Y),A+=6}l.addGroup(h,A,0),h+=A}function v(y){const T=m,A=new Ut,S=new $;let I=0;const M=y===!0?t:e,b=y===!0?1:-1;for(let D=1;D<=n;D++)f.push(0,d*b,0),p.push(0,b,0),g.push(.5,.5),m++;const F=m;for(let D=0;D<=n;D++){const R=D/n*c+r,U=Math.cos(R),G=Math.sin(R);S.x=M*G,S.y=d*b,S.z=M*U,f.push(S.x,S.y,S.z),p.push(0,b,0),A.x=U*.5+.5,A.y=G*.5*b+.5,g.push(A.x,A.y),m++}for(let D=0;D<n;D++){const Y=T+D,R=F+D;y===!0?u.push(R,R+1,Y):u.push(R+1,R,Y),I+=3}l.addGroup(h,I,y===!0?1:2),h+=I}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new fs(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Ca extends qe{constructor(t=[],e=[],i=1,n=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:n};const a=[],o=[];r(n),l(i),u(),this.setAttribute("position",new Me(a,3)),this.setAttribute("normal",new Me(a.slice(),3)),this.setAttribute("uv",new Me(o,2)),n===0?this.computeVertexNormals():this.normalizeNormals();function r(x){const v=new $,y=new $,T=new $;for(let A=0;A<e.length;A+=3)g(e[A+0],v),g(e[A+1],y),g(e[A+2],T),c(v,y,T,x)}function c(x,v,y,T){const A=T+1,S=[];for(let I=0;I<=A;I++){S[I]=[];const M=x.clone().lerp(y,I/A),b=v.clone().lerp(y,I/A),F=A-I;for(let D=0;D<=F;D++)D===0&&I===A?S[I][D]=M:S[I][D]=M.clone().lerp(b,D/F)}for(let I=0;I<A;I++)for(let M=0;M<2*(A-I)-1;M++){const b=Math.floor(M/2);M%2===0?(p(S[I][b+1]),p(S[I+1][b]),p(S[I][b])):(p(S[I][b+1]),p(S[I+1][b+1]),p(S[I+1][b]))}}function l(x){const v=new $;for(let y=0;y<a.length;y+=3)v.x=a[y+0],v.y=a[y+1],v.z=a[y+2],v.normalize().multiplyScalar(x),a[y+0]=v.x,a[y+1]=v.y,a[y+2]=v.z}function u(){const x=new $;for(let v=0;v<a.length;v+=3){x.x=a[v+0],x.y=a[v+1],x.z=a[v+2];const y=d(x)/2/Math.PI+.5,T=h(x)/Math.PI+.5;o.push(y,1-T)}m(),f()}function f(){for(let x=0;x<o.length;x+=6){const v=o[x+0],y=o[x+2],T=o[x+4],A=Math.max(v,y,T),S=Math.min(v,y,T);A>.9&&S<.1&&(v<.2&&(o[x+0]+=1),y<.2&&(o[x+2]+=1),T<.2&&(o[x+4]+=1))}}function p(x){a.push(x.x,x.y,x.z)}function g(x,v){const y=x*3;v.x=t[y+0],v.y=t[y+1],v.z=t[y+2]}function m(){const x=new $,v=new $,y=new $,T=new $,A=new Ut,S=new Ut,I=new Ut;for(let M=0,b=0;M<a.length;M+=9,b+=6){x.set(a[M+0],a[M+1],a[M+2]),v.set(a[M+3],a[M+4],a[M+5]),y.set(a[M+6],a[M+7],a[M+8]),A.set(o[b+0],o[b+1]),S.set(o[b+2],o[b+3]),I.set(o[b+4],o[b+5]),T.copy(x).add(v).add(y).divideScalar(3);const F=d(T);_(A,b+0,x,F),_(S,b+2,v,F),_(I,b+4,y,F)}}function _(x,v,y,T){T<0&&x.x===1&&(o[v]=x.x-1),y.x===0&&y.z===0&&(o[v]=T/2/Math.PI+.5)}function d(x){return Math.atan2(x.z,-x.x)}function h(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ca(t.vertices,t.indices,t.radius,t.details)}}class Ra extends Ca{constructor(t=1,e=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],n=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,n,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Ra(t.radius,t.detail)}}class En extends qe{constructor(t=1,e=32,i=16,n=0,a=Math.PI*2,o=0,r=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:n,phiLength:a,thetaStart:o,thetaLength:r},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const c=Math.min(o+r,Math.PI);let l=0;const u=[],f=new $,p=new $,g=[],m=[],_=[],d=[];for(let h=0;h<=i;h++){const x=[],v=h/i;let y=0;h===0&&o===0?y=.5/e:h===i&&c===Math.PI&&(y=-.5/e);for(let T=0;T<=e;T++){const A=T/e;f.x=-t*Math.cos(n+A*a)*Math.sin(o+v*r),f.y=t*Math.cos(o+v*r),f.z=t*Math.sin(n+A*a)*Math.sin(o+v*r),m.push(f.x,f.y,f.z),p.copy(f).normalize(),_.push(p.x,p.y,p.z),d.push(A+y,1-v),x.push(l++)}u.push(x)}for(let h=0;h<i;h++)for(let x=0;x<e;x++){const v=u[h][x+1],y=u[h][x],T=u[h+1][x],A=u[h+1][x+1];(h!==0||o>0)&&g.push(v,y,A),(h!==i-1||c<Math.PI)&&g.push(y,T,A)}this.setIndex(g),this.setAttribute("position",new Me(m,3)),this.setAttribute("normal",new Me(_,3)),this.setAttribute("uv",new Me(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new En(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class ne extends Rn{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Jt(16777215),this.specular=new Jt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Jt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Lo,this.normalScale=new Ut(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=xa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Jo extends xe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Jt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}const ea=new he,oo=new $,lo=new $;class Bp{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ut(512,512),this.map=null,this.mapPass=null,this.matrix=new he,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Aa,this._frameExtents=new Ut(1,1),this._viewportCount=1,this._viewports=[new me(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;oo.setFromMatrixPosition(t.matrixWorld),e.position.copy(oo),lo.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(lo),e.updateMatrixWorld(),ea.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ea),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(ea)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Gp extends Bp{constructor(){super(new Wo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class co extends Jo{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(xe.DEFAULT_UP),this.updateMatrix(),this.target=new xe,this.shadow=new Gp}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class ho extends Jo{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class kp{constructor(t,e,i=0,n=1/0){this.ray=new Sa(t,e),this.near=i,this.far=n,this.camera=null,this.layers=new ba,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}intersectObject(t,e=!0,i=[]){return ga(t,this,i,e),i.sort(uo),i}intersectObjects(t,e=!0,i=[]){for(let n=0,a=t.length;n<a;n++)ga(t[n],this,i,e);return i.sort(uo),i}}function uo(s,t){return s.distance-t.distance}function ga(s,t,e,i){if(s.layers.test(t.layers)&&s.raycast(t,e),i===!0){const n=s.children;for(let a=0,o=n.length;a<o;a++)ga(n[a],t,e,!0)}}class va{constructor(t=1,e=0,i=0){return this.radius=t,this.phi=e,this.theta=i,this}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(Se(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ya}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ya);const fo={type:"change"},ia={type:"start"},po={type:"end"},es=new Sa,mo=new di,Hp=Math.cos(70*Rc.DEG2RAD);class Vp extends Oi{constructor(t,e){super(),this.object=t,this.domElement=e,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new $,this.cursor=new $,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:zi.ROTATE,MIDDLE:zi.DOLLY,RIGHT:zi.PAN},this.touches={ONE:Fi.ROTATE,TWO:Fi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return r.phi},this.getAzimuthalAngle=function(){return r.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(L){L.addEventListener("keydown",At),this._domElementKeyEvents=L},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",At),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(fo),i.update(),a=n.NONE},this.update=function(){const L=new $,ft=new Ii().setFromUnitVectors(t.up,new $(0,1,0)),Ct=ft.clone().invert(),bt=new $,ht=new Ii,N=new $,mt=2*Math.PI;return function(Dt=null){const Lt=i.object.position;L.copy(Lt).sub(i.target),L.applyQuaternion(ft),r.setFromVector3(L),i.autoRotate&&a===n.NONE&&D(b(Dt)),i.enableDamping?(r.theta+=c.theta*i.dampingFactor,r.phi+=c.phi*i.dampingFactor):(r.theta+=c.theta,r.phi+=c.phi);let qt=i.minAzimuthAngle,Zt=i.maxAzimuthAngle;isFinite(qt)&&isFinite(Zt)&&(qt<-Math.PI?qt+=mt:qt>Math.PI&&(qt-=mt),Zt<-Math.PI?Zt+=mt:Zt>Math.PI&&(Zt-=mt),qt<=Zt?r.theta=Math.max(qt,Math.min(Zt,r.theta)):r.theta=r.theta>(qt+Zt)/2?Math.max(qt,r.theta):Math.min(Zt,r.theta)),r.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,r.phi)),r.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(u,i.dampingFactor):i.target.add(u),i.target.sub(i.cursor),i.target.clampLength(i.minTargetRadius,i.maxTargetRadius),i.target.add(i.cursor),i.zoomToCursor&&A||i.object.isOrthographicCamera?r.radius=J(r.radius):r.radius=J(r.radius*l),L.setFromSpherical(r),L.applyQuaternion(Ct),Lt.copy(i.target).add(L),i.object.lookAt(i.target),i.enableDamping===!0?(c.theta*=1-i.dampingFactor,c.phi*=1-i.dampingFactor,u.multiplyScalar(1-i.dampingFactor)):(c.set(0,0,0),u.set(0,0,0));let se=!1;if(i.zoomToCursor&&A){let re=null;if(i.object.isPerspectiveCamera){const jt=L.length();re=J(jt*l);const le=jt-re;i.object.position.addScaledVector(y,le),i.object.updateMatrixWorld()}else if(i.object.isOrthographicCamera){const jt=new $(T.x,T.y,0);jt.unproject(i.object),i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/l)),i.object.updateProjectionMatrix(),se=!0;const le=new $(T.x,T.y,0);le.unproject(i.object),i.object.position.sub(le).add(jt),i.object.updateMatrixWorld(),re=L.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;re!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(re).add(i.object.position):(es.origin.copy(i.object.position),es.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(es.direction))<Hp?t.lookAt(i.target):(mo.setFromNormalAndCoplanarPoint(i.object.up,i.target),es.intersectPlane(mo,i.target))))}else i.object.isOrthographicCamera&&(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/l)),i.object.updateProjectionMatrix(),se=!0);return l=1,A=!1,se||bt.distanceToSquared(i.object.position)>o||8*(1-ht.dot(i.object.quaternion))>o||N.distanceToSquared(i.target)>0?(i.dispatchEvent(fo),bt.copy(i.object.position),ht.copy(i.object.quaternion),N.copy(i.target),!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",Ht),i.domElement.removeEventListener("pointerdown",w),i.domElement.removeEventListener("pointercancel",k),i.domElement.removeEventListener("wheel",rt),i.domElement.removeEventListener("pointermove",E),i.domElement.removeEventListener("pointerup",k),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",At),i._domElementKeyEvents=null)};const i=this,n={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let a=n.NONE;const o=1e-6,r=new va,c=new va;let l=1;const u=new $,f=new Ut,p=new Ut,g=new Ut,m=new Ut,_=new Ut,d=new Ut,h=new Ut,x=new Ut,v=new Ut,y=new $,T=new Ut;let A=!1;const S=[],I={};let M=!1;function b(L){return L!==null?2*Math.PI/60*i.autoRotateSpeed*L:2*Math.PI/60/60*i.autoRotateSpeed}function F(L){const ft=Math.abs(L*.01);return Math.pow(.95,i.zoomSpeed*ft)}function D(L){c.theta-=L}function Y(L){c.phi-=L}const R=function(){const L=new $;return function(Ct,bt){L.setFromMatrixColumn(bt,0),L.multiplyScalar(-Ct),u.add(L)}}(),U=function(){const L=new $;return function(Ct,bt){i.screenSpacePanning===!0?L.setFromMatrixColumn(bt,1):(L.setFromMatrixColumn(bt,0),L.crossVectors(i.object.up,L)),L.multiplyScalar(Ct),u.add(L)}}(),G=function(){const L=new $;return function(Ct,bt){const ht=i.domElement;if(i.object.isPerspectiveCamera){const N=i.object.position;L.copy(N).sub(i.target);let mt=L.length();mt*=Math.tan(i.object.fov/2*Math.PI/180),R(2*Ct*mt/ht.clientHeight,i.object.matrix),U(2*bt*mt/ht.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(R(Ct*(i.object.right-i.object.left)/i.object.zoom/ht.clientWidth,i.object.matrix),U(bt*(i.object.top-i.object.bottom)/i.object.zoom/ht.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function Z(L){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?l/=L:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function V(L){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?l*=L:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function W(L,ft){if(!i.zoomToCursor)return;A=!0;const Ct=i.domElement.getBoundingClientRect(),bt=L-Ct.left,ht=ft-Ct.top,N=Ct.width,mt=Ct.height;T.x=bt/N*2-1,T.y=-(ht/mt)*2+1,y.set(T.x,T.y,1).unproject(i.object).sub(i.object.position).normalize()}function J(L){return Math.max(i.minDistance,Math.min(i.maxDistance,L))}function it(L){f.set(L.clientX,L.clientY)}function nt(L){W(L.clientX,L.clientX),h.set(L.clientX,L.clientY)}function X(L){m.set(L.clientX,L.clientY)}function C(L){p.set(L.clientX,L.clientY),g.subVectors(p,f).multiplyScalar(i.rotateSpeed);const ft=i.domElement;D(2*Math.PI*g.x/ft.clientHeight),Y(2*Math.PI*g.y/ft.clientHeight),f.copy(p),i.update()}function z(L){x.set(L.clientX,L.clientY),v.subVectors(x,h),v.y>0?Z(F(v.y)):v.y<0&&V(F(v.y)),h.copy(x),i.update()}function q(L){_.set(L.clientX,L.clientY),d.subVectors(_,m).multiplyScalar(i.panSpeed),G(d.x,d.y),m.copy(_),i.update()}function B(L){W(L.clientX,L.clientY),L.deltaY<0?V(F(L.deltaY)):L.deltaY>0&&Z(F(L.deltaY)),i.update()}function j(L){let ft=!1;switch(L.code){case i.keys.UP:L.ctrlKey||L.metaKey||L.shiftKey?Y(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):G(0,i.keyPanSpeed),ft=!0;break;case i.keys.BOTTOM:L.ctrlKey||L.metaKey||L.shiftKey?Y(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):G(0,-i.keyPanSpeed),ft=!0;break;case i.keys.LEFT:L.ctrlKey||L.metaKey||L.shiftKey?D(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):G(i.keyPanSpeed,0),ft=!0;break;case i.keys.RIGHT:L.ctrlKey||L.metaKey||L.shiftKey?D(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):G(-i.keyPanSpeed,0),ft=!0;break}ft&&(L.preventDefault(),i.update())}function ct(L){if(S.length===1)f.set(L.pageX,L.pageY);else{const ft=Et(L),Ct=.5*(L.pageX+ft.x),bt=.5*(L.pageY+ft.y);f.set(Ct,bt)}}function pt(L){if(S.length===1)m.set(L.pageX,L.pageY);else{const ft=Et(L),Ct=.5*(L.pageX+ft.x),bt=.5*(L.pageY+ft.y);m.set(Ct,bt)}}function Pt(L){const ft=Et(L),Ct=L.pageX-ft.x,bt=L.pageY-ft.y,ht=Math.sqrt(Ct*Ct+bt*bt);h.set(0,ht)}function H(L){i.enableZoom&&Pt(L),i.enablePan&&pt(L)}function Bt(L){i.enableZoom&&Pt(L),i.enableRotate&&ct(L)}function gt(L){if(S.length==1)p.set(L.pageX,L.pageY);else{const Ct=Et(L),bt=.5*(L.pageX+Ct.x),ht=.5*(L.pageY+Ct.y);p.set(bt,ht)}g.subVectors(p,f).multiplyScalar(i.rotateSpeed);const ft=i.domElement;D(2*Math.PI*g.x/ft.clientHeight),Y(2*Math.PI*g.y/ft.clientHeight),f.copy(p)}function yt(L){if(S.length===1)_.set(L.pageX,L.pageY);else{const ft=Et(L),Ct=.5*(L.pageX+ft.x),bt=.5*(L.pageY+ft.y);_.set(Ct,bt)}d.subVectors(_,m).multiplyScalar(i.panSpeed),G(d.x,d.y),m.copy(_)}function ut(L){const ft=Et(L),Ct=L.pageX-ft.x,bt=L.pageY-ft.y,ht=Math.sqrt(Ct*Ct+bt*bt);x.set(0,ht),v.set(0,Math.pow(x.y/h.y,i.zoomSpeed)),Z(v.y),h.copy(x);const N=(L.pageX+ft.x)*.5,mt=(L.pageY+ft.y)*.5;W(N,mt)}function Gt(L){i.enableZoom&&ut(L),i.enablePan&&yt(L)}function xt(L){i.enableZoom&&ut(L),i.enableRotate&&gt(L)}function w(L){i.enabled!==!1&&(S.length===0&&(i.domElement.setPointerCapture(L.pointerId),i.domElement.addEventListener("pointermove",E),i.domElement.addEventListener("pointerup",k)),Vt(L),L.pointerType==="touch"?zt(L):ot(L))}function E(L){i.enabled!==!1&&(L.pointerType==="touch"?lt(L):at(L))}function k(L){Nt(L),S.length===0&&(i.domElement.releasePointerCapture(L.pointerId),i.domElement.removeEventListener("pointermove",E),i.domElement.removeEventListener("pointerup",k)),i.dispatchEvent(po),a=n.NONE}function ot(L){let ft;switch(L.button){case 0:ft=i.mouseButtons.LEFT;break;case 1:ft=i.mouseButtons.MIDDLE;break;case 2:ft=i.mouseButtons.RIGHT;break;default:ft=-1}switch(ft){case zi.DOLLY:if(i.enableZoom===!1)return;nt(L),a=n.DOLLY;break;case zi.ROTATE:if(L.ctrlKey||L.metaKey||L.shiftKey){if(i.enablePan===!1)return;X(L),a=n.PAN}else{if(i.enableRotate===!1)return;it(L),a=n.ROTATE}break;case zi.PAN:if(L.ctrlKey||L.metaKey||L.shiftKey){if(i.enableRotate===!1)return;it(L),a=n.ROTATE}else{if(i.enablePan===!1)return;X(L),a=n.PAN}break;default:a=n.NONE}a!==n.NONE&&i.dispatchEvent(ia)}function at(L){switch(a){case n.ROTATE:if(i.enableRotate===!1)return;C(L);break;case n.DOLLY:if(i.enableZoom===!1)return;z(L);break;case n.PAN:if(i.enablePan===!1)return;q(L);break}}function rt(L){i.enabled===!1||i.enableZoom===!1||a!==n.NONE||(L.preventDefault(),i.dispatchEvent(ia),B(vt(L)),i.dispatchEvent(po))}function vt(L){const ft=L.deltaMode,Ct={clientX:L.clientX,clientY:L.clientY,deltaY:L.deltaY};switch(ft){case 1:Ct.deltaY*=16;break;case 2:Ct.deltaY*=100;break}return L.ctrlKey&&!M&&(Ct.deltaY*=10),Ct}function dt(L){L.key==="Control"&&(M=!0,document.addEventListener("keyup",Tt,{passive:!0,capture:!0}))}function Tt(L){L.key==="Control"&&(M=!1,document.removeEventListener("keyup",Tt,{passive:!0,capture:!0}))}function At(L){i.enabled===!1||i.enablePan===!1||j(L)}function zt(L){switch(wt(L),S.length){case 1:switch(i.touches.ONE){case Fi.ROTATE:if(i.enableRotate===!1)return;ct(L),a=n.TOUCH_ROTATE;break;case Fi.PAN:if(i.enablePan===!1)return;pt(L),a=n.TOUCH_PAN;break;default:a=n.NONE}break;case 2:switch(i.touches.TWO){case Fi.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;H(L),a=n.TOUCH_DOLLY_PAN;break;case Fi.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;Bt(L),a=n.TOUCH_DOLLY_ROTATE;break;default:a=n.NONE}break;default:a=n.NONE}a!==n.NONE&&i.dispatchEvent(ia)}function lt(L){switch(wt(L),a){case n.TOUCH_ROTATE:if(i.enableRotate===!1)return;gt(L),i.update();break;case n.TOUCH_PAN:if(i.enablePan===!1)return;yt(L),i.update();break;case n.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;Gt(L),i.update();break;case n.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;xt(L),i.update();break;default:a=n.NONE}}function Ht(L){i.enabled!==!1&&L.preventDefault()}function Vt(L){S.push(L.pointerId)}function Nt(L){delete I[L.pointerId];for(let ft=0;ft<S.length;ft++)if(S[ft]==L.pointerId){S.splice(ft,1);return}}function wt(L){let ft=I[L.pointerId];ft===void 0&&(ft=new Ut,I[L.pointerId]=ft),ft.set(L.pageX,L.pageY)}function Et(L){const ft=L.pointerId===S[0]?S[1]:S[0];return I[ft]}i.domElement.addEventListener("contextmenu",Ht),i.domElement.addEventListener("pointerdown",w),i.domElement.addEventListener("pointercancel",k),i.domElement.addEventListener("wheel",rt,{passive:!1}),document.addEventListener("keydown",dt,{passive:!0,capture:!0}),this.update()}}const Q={SEED:null,MAZE_DEGREE:4,MIN_MAZE_DEGREE:4,MAX_MAZE_DEGREE:16,BRANCHING_FACTOR:.1,BRAID_FACTOR:.1,SHADOW_SIZE_FACTOR:.075,TELEPORT_MAP_OPACITY:.25,PLAYER_COLLISION_RADIUS:.275,PLAYER_COLLISION_OFFSET_X:0,PLAYER_COLLISION_OFFSET_Y:-.125,PLAYER_START_X:.5,PLAYER_START_Y:1.7,PLAYER_SHADOW_OFFSET_X:-.28,PLAYER_SHADOW_OFFSET_Y:-.15,PLAYER_SHADOW_WIDTH_FACTOR:.45,PLAYER_SHADOW_HEIGHT_FACTOR:.25,SHOW_COLLISION_DEBUG:!1,MOVE_SPEED_FACTOR:2,ROT_SPEED:3,HUNTER_SPEED:800,getHunterCount(s){return s>=16?3:s>=8?2:1},getTeleportCount(s){if(s<=8)return Math.max(2,Math.floor(s/2));const t=s-8;return Math.floor(.125*t*t+.5*t+4)},getPathfinderCount(s){return this.getTeleportCount(s)},COLORS:{WALL:"#444",PATH_KNOWN:"#88ccff",PATH_VISITED:"#888",NEON_UP:"#00ffff",NEON_DOWN:"#ff00ff",NEON_UP_UNUSED:"#006666",NEON_DOWN_UNUSED:"#660066",START:"#ff0",EXIT:"#0f0",PLAYER:"#f00",PLAYER_OUTLINE:"#ffffff",HUNTER:"#a0f",TELEPORT:"#ff8c00",TELEPORT_INACTIVE:"#555555",REVEALED_PATH:"#ffffff",ELEVATOR_BIDIRECTIONAL:"#ffffff",THREE_PLAYER:16711680,THREE_HUNTER:11141375,THREE_START:16776960,THREE_EXIT:65280,THREE_VISITED:8947848,THREE_KNOWN:8965375,THREE_ELEVATOR_UP:65535,THREE_ELEVATOR_DOWN:16711935,THREE_TELEPORT:16747520,THREE_KEY:16766720,THREE_ELEVATOR_SHAFT:{bottom:16711935,top:65535}}},_a={en:{gameTitle:"VOID ESCAPE",gameCredits:"a game by Bernard Rodrigues",activeHunters:"Active Hunters",activeTeleports:"Active Teleports",activeKeys:"Active Keys",availablePathfinders:"Available Pathfinders",mazeDegree:"Maze Degree",safeMode:"Safe Mode",generateMaze:"NEW GAME",continue:"CONTINUE",degreeHint:"Controls the grid size. Higher values create larger, more complex mazes.",safeModeHint:"When active, no hunters will spawn in the maze.",storyMsg1:"The mystical church of chaos worship!",storyMsg2:"The greatest monument to chaos worship.",storyMsg3:"I am a priestess of the word of the Jelly god.",storyMsg4:"But their word is a lie! The chaos is a lie!",storyMsg5:"So I was condemned to exile...",storyMsg6:"Condemned to the void...",hudKeys:"KEYS",hudPathfinders:"PATHFINDERS",hudFloor:"Floor",hudVisited:"Visited",proximityDetector:"PROXIMITY DETECTOR",mapLegendTitle:"MAP LEGEND",legendVisited:"Visited Path",legendKnown:"Known Path",legendStart:"Starting Point",legendExit:"Maze Exit",legendHunter:"Void Hunter",legendTeleport:"Teleport",legendElevator:"Elevator",controlsHintTitle:"CONTROLS HINT",actionMove:"Move / Rotate",actionElevator:"Elevator Up / Down",actionMap:"3D Holographic Map",actionZoom:"Zoom Minimap",msgVoidHuntersDetected:"Void Hunters Detected",msgKeySecured:"Key secured ({collected}/{total})",msgExitUnlocked:"Exit unlocked",msgKeysRemaining:"{count} key(s) remaining",msgNoOtherActiveTeleport:"No other active teleports",msgExitFound:"Exit found",msgNoPathfindersRemaining:"No pathfinders remaining",msgExitNotFoundYet:"Exit not found yet",msgSafePointTeleport:"Safe point... Teleport?",msgOopsNoisyShit:"Oops... noisy sh*t!",msgWhereAmI:"Where am I?",msgElevatorUp:"Up?",msgElevatorDown:"Down?",msgWhichWay:"Which way?",msgDidYouHearThat:"Did you hear that?",msgIWasDetected:"Damn! I was detected.",msgFoundPathfinder:"Found a pathfinder!",msgWorldSaved:"World saved. What now?",msgKeyDropped:"Oh! Just dropped a key...",msgPlayerRespawn:"Ok.. ok.. guess I'm alive..",statusLabel:"HUNTER STATUS:",statusScanning:"SCANNING",statusActive:"ACTIVE",statusSleeping:"SLEEPING",statusTracking:"TRACKING MODE",statusConverging:"HUNTERS CONVERGING ({ticks} Ticks)",pauseTitle:"PAUSED",resume:"RESUME",victoryTitle:"Mission Accomplished",victoryText:"You have successfully navigated the 3D void.",victoryCompletion:"MAP COMPLETION: {percent}%",mapCompletion:"MAP COMPLETION",playAgain:"PLAY AGAIN",mainMenu:"MAIN MENU",gameOverTitle:"Terminated",gameOverText:"You were caught by the void hunters.",saving:"SAVING...",teleportAnomaly:"TELEPORT ANOMALY",ticks:"TICKS",map3dInstructions:"Drag to rotate | Scroll to zoom | M to return",teleportWarning:"TELEPORT",map:"MAP",teleport:"TELEPORT",teleportationLink:"TELEPORTATION LINK",teleportJumpSector:"Jump to Sector {floor}F?",teleportTargetGrid:"Target Grid: ({x}, {y})",teleportGo:"GO",teleportCancel:"CANCEL"},ptBr:{gameTitle:"VOID ESCAPE",gameCredits:"um jogo de Bernard Rodrigues",activeHunters:"Caçadores Ativos",activeTeleports:"Teleportes Ativos",activeKeys:"Chaves Ativas",availablePathfinders:"Localizadores Disponíveis",mazeDegree:"Grau do Labirinto",safeMode:"Modo Seguro",generateMaze:"NOVO JOGO",continue:"CONTINUAR",degreeHint:"Controla o tamanho da grade. Valores maiores criam labirintos maiores e mais complexos.",safeModeHint:"Quando ativo, nenhum caçador surgirá no labirinto.",storyMsg1:"A igreja mística do culto ao caos!",storyMsg2:"O maior monumento ao culto do caos.",storyMsg3:"Sou uma sacerdotisa da palavra do deus Geleia.",storyMsg4:"Mas sua palavra é uma mentira! O caos é uma mentira!",storyMsg5:"Então fui condenada ao exílio...",storyMsg6:"Condenada ao vazio...",hudKeys:"CHAVES",hudPathfinders:"LOCALIZADORES",hudFloor:"Andar",hudVisited:"Visitado",proximityDetector:"DETECTOR DE PROXIMIDADE",mapLegendTitle:"LEGENDA DO MAPA",legendVisited:"Caminho Visitado",legendKnown:"Caminho Conhecido",legendStart:"Ponto de Partida",legendExit:"Saída do Labirinto",legendHunter:"Caçador do Vazio",legendTeleport:"Teleporte",legendElevator:"Elevador",controlsHintTitle:"DICA DE CONTROLES",actionMove:"Mover / Girar",actionElevator:"Elevador Subir / Descer",actionMap:"Mapa Holográfico 3D",actionZoom:"Zoom do Minimapa",msgVoidHuntersDetected:"Caçadores do Vazio Detectados",msgKeySecured:"Chave obtida ({collected}/{total})",msgExitUnlocked:"Saída destrancada",msgKeysRemaining:"{count} chave(s) restante(s)",msgNoOtherActiveTeleport:"Nenhum outro teleporte ativo",msgExitFound:"Saída encontrada",msgNoPathfindersRemaining:"Nenhum localizador restante",msgExitNotFoundYet:"Saída ainda não encontrada",msgSafePointTeleport:"Ponto seguro... Teleportar?",msgOopsNoisyShit:"Ops... troço barulhento!",msgWhereAmI:"Onde estou?",msgElevatorUp:"Subir?",msgElevatorDown:"Descer?",msgWhichWay:"Que direção?",msgDidYouHearThat:"Ouviu alguma coisa?",msgIWasDetected:"Droga! Fui detectada.",msgFoundPathfinder:"Localizador encontrado!",msgWorldSaved:"Salvei o mundo. E agora?",msgKeyDropped:"Ih... Derrubei uma chave...",msgPlayerRespawn:"Ok.. ok.. sobrevivi..",statusLabel:"STATUS DO CAÇADOR:",statusScanning:"ESCANEANDO",statusActive:"ATIVO",statusSleeping:"DORMINDO",statusTracking:"MODO DE RASTREAMENTO",statusConverging:"CAÇADORES CONVERGINDO ({ticks} Ticks)",pauseTitle:"PAUSA",resume:"RETOMAR",victoryTitle:"Missão Cumprida",victoryText:"Você atravessou o vazio 3D com sucesso.",victoryCompletion:"MAPA COMPLETO: {percent}%",mapCompletion:"MAPA COMPLETO",playAgain:"JOGAR NOVAMENTE",mainMenu:"MENU PRINCIPAL",gameOverTitle:"Eliminado",gameOverText:"Você foi pego pelos caçadores do vazio.",saving:"SALVANDO...",teleportAnomaly:"ANOMALIA DE TELEPORTE",ticks:"TICKS",map3dInstructions:"Arraste para girar | Role para zoom | M para voltar",teleportWarning:"TELEPORTE",map:"MAPA",teleport:"TELEPORTE",teleportationLink:"LINK DE TELEPORTE",teleportJumpSector:"Pular para o Setor {floor}F?",teleportTargetGrid:"Coordenada Alvo: ({x}, {y})",teleportGo:"IR",teleportCancel:"CANCELAR"},ja:{gameTitle:"ヴォイド・エスケープ",gameCredits:"ベルナルド・ホドリゲス制作",activeHunters:"アクティブなハンター",activeTeleports:"アクティブなテレポート",activeKeys:"アクティブな鍵",availablePathfinders:"使用可能なパスファインダー",mazeDegree:"迷路の難易度",safeMode:"セーフモード",generateMaze:"ニューゲーム",continue:"つづきから",degreeHint:"グリッドのサイズを調整します。値が大きいほど、より広く複雑な迷路になります。",safeModeHint:"有効にすると、迷路にハンターが出現しなくなります。",storyMsg1:"混沌崇拝の神秘的な教会!",storyMsg2:"混沌崇拝の最大の記念碑。",storyMsg3:"私はゼリー神の言葉に仕える巫女よ。",storyMsg4:"でも彼らの言葉は嘘!混沌なんて嘘っぱちなんだから!",storyMsg5:"だから追放の刑に処されたの…",storyMsg6:"虚空へと追放されて…",hudKeys:"鍵",hudPathfinders:"パスファインダー",hudFloor:"階層",hudVisited:"訪問済み",proximityDetector:"近接探知機",mapLegendTitle:"マップ凡例",legendVisited:"訪問済みの道",legendKnown:"既知の道",legendStart:"スタート地点",legendExit:"迷路の出口",legendHunter:"虚空のハンター",legendTeleport:"テレポート",legendElevator:"エレベーター",controlsHintTitle:"操作方法",actionMove:"移動 / 回転",actionElevator:"エレベーター 上昇 / 下降",actionMap:"3Dホログラフィックマップ",actionZoom:"ミニマップのズーム",msgVoidHuntersDetected:"虚空のハンターを検知",msgKeySecured:"鍵を入手 ({collected}/{total})",msgExitUnlocked:"出口の鍵が開いた",msgKeysRemaining:"残り{count}個の鍵",msgNoOtherActiveTeleport:"他に有効なテレポートはない",msgExitFound:"出口を発見",msgNoPathfindersRemaining:"パスファインダーが残っていない",msgExitNotFoundYet:"出口はまだ見つかっていない",msgSafePointTeleport:"安全地帯…テレポートする?",msgOopsNoisyShit:"あら…うるさいったらないわね!",msgWhereAmI:"ここどこ?",msgElevatorUp:"上る?",msgElevatorDown:"下る?",msgWhichWay:"どっちの道?",msgDidYouHearThat:"今の聞こえた?",msgIWasDetected:"しまった、見つかっちゃった!",msgFoundPathfinder:"パスファインダー発見!",msgWorldSaved:"世界を救っちゃった。さて、次は?",msgKeyDropped:"あ、鍵落としちゃった…",msgPlayerRespawn:"よしよし…どうやらまだ生きてるな…",statusLabel:"ハンターの状態:",statusScanning:"スキャン中",statusActive:"アクティブ",statusSleeping:"スリープ中",statusTracking:"追跡モード",statusConverging:"ハンターが接近中 ({ticks} ティック)",pauseTitle:"一時停止",resume:"再開",victoryTitle:"任務完了",victoryText:"3Dの虚空を無事に踏破した。",victoryCompletion:"マップ達成度: {percent}%",mapCompletion:"マップ達成度",playAgain:"もう一度プレイ",mainMenu:"メインメニュー",gameOverTitle:"終了",gameOverText:"虚空のハンターに捕まってしまった。",saving:"セーブ中…",teleportAnomaly:"テレポート異常",ticks:"ティック",map3dInstructions:"ドラッグで回転 | スクロールでズーム | Mキーで戻る",teleportWarning:"テレポート",map:"マップ",teleport:"テレポート",teleportationLink:"テレポートリンク",teleportJumpSector:"{floor}階のセクターへ移動する?",teleportTargetGrid:"目標座標: ({x}, {y})",teleportGo:"移動",teleportCancel:"キャンセル"},es:{gameTitle:"ESCAPE DEL VACÍO",gameCredits:"un juego de Bernard Rodrigues",activeHunters:"Cazadores Activos",activeTeleports:"Teletransportes Activos",activeKeys:"Llaves Activas",availablePathfinders:"Localizadores Disponibles",mazeDegree:"Grado del Laberinto",safeMode:"Modo Seguro",generateMaze:"NUEVA PARTIDA",continue:"CONTINUAR",degreeHint:"Controla el tamaño de la cuadrícula. Valores más altos crean laberintos más grandes y complejos.",safeModeHint:"Cuando está activo, no aparecerán cazadores en el laberinto.",storyMsg1:"¡La mística iglesia del culto al caos!",storyMsg2:"El mayor monumento al culto del caos.",storyMsg3:"Soy una sacerdotisa de la palabra del dios Gelatina.",storyMsg4:"¡Pero su palabra es una mentira! ¡El caos es mentira!",storyMsg5:"Así que fui condenada al exilio...",storyMsg6:"Condenada al vacío...",hudKeys:"LLAVES",hudPathfinders:"LOCALIZADORES",hudFloor:"Piso",hudVisited:"Visitado",proximityDetector:"DETECTOR DE PROXIMIDAD",mapLegendTitle:"LEYENDA DEL MAPA",legendVisited:"Camino Visitado",legendKnown:"Camino Conocido",legendStart:"Punto de Partida",legendExit:"Salida del Laberinto",legendHunter:"Cazador del Vacío",legendTeleport:"Teletransporte",legendElevator:"Ascensor",controlsHintTitle:"AYUDA DE CONTROLES",actionMove:"Mover / Girar",actionElevator:"Ascensor Subir / Bajar",actionMap:"Mapa Holográfico 3D",actionZoom:"Zoom del Minimapa",msgVoidHuntersDetected:"Cazadores del Vacío Detectados",msgKeySecured:"Llave obtenida ({collected}/{total})",msgExitUnlocked:"Salida desbloqueada",msgKeysRemaining:"{count} llave(s) restante(s)",msgNoOtherActiveTeleport:"No hay otros teletransportes activos",msgExitFound:"Salida encontrada",msgNoPathfindersRemaining:"No quedan localizadores",msgExitNotFoundYet:"Salida aún no encontrada",msgSafePointTeleport:"Punto seguro... ¿Teletransportarse?",msgOopsNoisyShit:"Ups... ¡qué cosa tan ruidosa!",msgWhereAmI:"¿Dónde estoy?",msgElevatorUp:"¿Subir?",msgElevatorDown:"¿Bajar?",msgWhichWay:"¿Por dónde?",msgDidYouHearThat:"¿Escuchaste eso?",msgIWasDetected:"¡Rayos! Fui detectada.",msgFoundPathfinder:"¡Localizador encontrado!",msgWorldSaved:"Salvé el mundo. ¿Y ahora qué?",msgKeyDropped:"¡Ah! Se me cayó una llave...",msgPlayerRespawn:"Vale.. vale.. parece que sigo viva..",statusLabel:"ESTADO DEL CAZADOR:",statusScanning:"ESCANEANDO",statusActive:"ACTIVO",statusSleeping:"DURMIENDO",statusTracking:"MODO DE RASTREO",statusConverging:"CAZADORES CONVERGIENDO ({ticks} Ticks)",pauseTitle:"PAUSA",resume:"REANUDAR",victoryTitle:"Misión Cumplida",victoryText:"Atravesaste el vacío 3D con éxito.",victoryCompletion:"MAPA COMPLETADO: {percent}%",mapCompletion:"MAPA COMPLETADO",playAgain:"JUGAR DE NUEVO",mainMenu:"MENÚ PRINCIPAL",gameOverTitle:"Eliminada",gameOverText:"Fuiste atrapada por los cazadores del vacío.",saving:"GUARDANDO...",teleportAnomaly:"ANOMALÍA DE TELETRANSPORTE",ticks:"TICKS",map3dInstructions:"Arrastra para girar | Desplázate para zoom | M para volver",teleportWarning:"TELETRANSPORTE",map:"MAPA",teleport:"TELETRANSPORTE",teleportationLink:"ENLACE DE TELETRANSPORTE",teleportJumpSector:"¿Saltar al Sector {floor}F?",teleportTargetGrid:"Coordenada Objetivo: ({x}, {y})",teleportGo:"IR",teleportCancel:"CANCELAR"}};let wn="en";function is(s){_a[s]?wn=s:wn="en"}function Wp(){if(typeof navigator<"u"){const s=navigator.language||navigator.userLanguage;if(s){const t=s.toLowerCase();if(t.startsWith("pt")){is("ptBr");return}if(t.startsWith("ja")){is("ja");return}if(t.startsWith("es")){is("es");return}}}is("en")}Wp();function It(s,t={},e=wn){var n,a;let i=((n=_a[e])==null?void 0:n[s])||((a=_a.en)==null?void 0:a[s])||s;return Object.keys(t).forEach(o=>{i=i.replace(`{${o}}`,t[o])}),i}function Qo(s=wn){typeof document<"u"&&document.querySelectorAll("[data-i18n]").forEach(e=>{const i=e.getAttribute("data-i18n");if(i){const n=It(i,{},s);n!==i&&(e instanceof HTMLInputElement&&e.type==="button"?e.value=n:e.textContent=n)}})}class tl{constructor(){O(this,"_data");this._data=[]}get size(){return this._data.length}push(t){this._data.push(t),this._bubbleUp(this._data.length-1)}pop(){const t=this._data[0],e=this._data.pop();return this._data.length>0&&e!==void 0&&(this._data[0]=e,this._siftDown(0)),t}_bubbleUp(t){for(;t>0;){const e=t-1>>1;if(this._data[e].f<=this._data[t].f)break;[this._data[e],this._data[t]]=[this._data[t],this._data[e]],t=e}}_siftDown(t){const e=this._data.length;for(;;){let i=t;const n=2*t+1,a=2*t+2;if(n<e&&this._data[n].f<this._data[i].f&&(i=n),a<e&&this._data[a].f<this._data[i].f&&(i=a),i===t)break;[this._data[i],this._data[t]]=[this._data[t],this._data[i]],t=i}}}const Yp=[{dx:1,dy:0,dz:0},{dx:-1,dy:0,dz:0},{dx:0,dy:1,dz:0},{dx:0,dy:-1,dz:0},{dx:0,dy:0,dz:1},{dx:0,dy:0,dz:-1}],el=[{dx:1,dy:0,dz:0},{dx:-1,dy:0,dz:0},{dx:0,dy:1,dz:0},{dx:0,dy:-1,dz:0},{dx:0,dy:0,dz:2},{dx:0,dy:0,dz:-2}];function ps(s,t,e,i,n,a){return Math.abs(s-i)+Math.abs(t-n)+Math.abs(e-a)}function il(s,t,e,i,n=0,a=null){if(s.x===t.x&&s.y===t.y&&s.z===t.z)return[];const o=new Map,r=new Map,c=`${s.x},${s.y},${s.z}`;r.set(c,0);const l=new tl;for(l.push({f:ps(s.x,s.y,s.z,t.x,t.y,t.z),node:s});l.size>0;){const u=l.pop();if(!u)continue;const{node:f}=u,p=`${f.x},${f.y},${f.z}`;if(f.x===t.x&&f.y===t.y&&f.z===t.z)return Xp(o,p);const g=r.get(p)??0;for(const{dx:m,dy:_,dz:d}of el){const h=f.x+m,x=f.y+_,v=f.z+d;if(h<0||h>=i||x<0||x>=i||v<0||v>=i||a&&h===a.x&&x===a.y&&v===a.z)continue;const y=e[h*i*i+x*i+v];if(y===n||y===8)continue;if(d!==0){const S=f.z+d/2;if(e[f.x*i*i+f.y*i+S]===n)continue}const T=`${h},${x},${v}`,A=g+1;A<(r.get(T)??1/0)&&(o.set(T,f),r.set(T,A),l.push({f:A+ps(h,x,v,t.x,t.y,t.z),node:{x:h,y:x,z:v}}))}}return null}function Xp(s,t){const e=[];let i=t;for(;s.has(i);){const n=s.get(i);if(!n)break;const[a,o,r]=i.split(",").map(Number);e.push({x:a,y:o,z:r}),i=`${n.x},${n.y},${n.z}`}return e.reverse(),e}function $p(s,t,e,i,n=0,a=1/0,o=null){if(s.x===t.x&&s.y===t.y&&s.z===t.z)return 0;const r=new Map,c=`${s.x},${s.y},${s.z}`;r.set(c,0);const l=new tl;for(l.push({f:ps(s.x,s.y,s.z,t.x,t.y,t.z),node:s});l.size>0;){const u=l.pop();if(!u)continue;const{node:f}=u,p=`${f.x},${f.y},${f.z}`,g=r.get(p)??0;if(g>a)return 1/0;if(f.x===t.x&&f.y===t.y&&f.z===t.z)return g;for(const{dx:m,dy:_,dz:d}of el){const h=f.x+m,x=f.y+_,v=f.z+d;if(h<0||h>=i||x<0||x>=i||v<0||v>=i||o&&h===o.x&&x===o.y&&v===o.z)continue;const y=e[h*i*i+x*i+v];if(y===n||y===8)continue;if(d!==0){const S=f.z+d/2;if(e[f.x*i*i+f.y*i+S]===n)continue}const T=`${h},${x},${v}`,A=g+1;A<(r.get(T)??1/0)&&(r.set(T,A),l.push({f:A+ps(h,x,v,t.x,t.y,t.z),node:{x:h,y:x,z:v}}))}}return 1/0}function Kp(s,t,e,i,n=0,a=10){if(s.x===t.x&&s.y===t.y&&s.z===t.z)return 0;const o=[{x:s.x,y:s.y,z:s.z,dist:0}];let r=0;const c=new Map;for(c.set(`${s.x},${s.y},${s.z}`,0);r<o.length;){const l=o[r++];if(!(l.dist>a))for(const{dx:u,dy:f,dz:p}of Yp){const g=l.x+u,m=l.y+f,_=l.z+p;if(g<0||g>=i||m<0||m>=i||_<0||_>=i)continue;const d=e[g*i*i+m*i+_];if(d===n||d===8)continue;const h=`${g},${m},${_}`,v=_%2===0?0:1,y=l.dist+v;if(y<(c.get(h)??1/0)){if(c.set(h,y),g===t.x&&m===t.y&&_===t.z)return y;v===0?o.splice(r,0,{x:g,y:m,z:_,dist:y}):o.push({x:g,y:m,z:_,dist:y})}}}return 1/0}function qp(s,t,e,i,n,a){const o=[{x:s.x,y:s.y,z:s.z,path:[]}];let r=0;const c=new Uint8Array(i*i*i);for(c[s.x*i*i+s.y*i+s.z]=1;r<o.length;){const l=o[r++],u=`${l.x},${l.y},${l.z}`;if(!t.has(u))return l.path;const f=a(l.x,l.y,l.z,e,n,!1);for(const p of f){const g=p.x*i*i+p.y*i+p.z;c[g]||(c[g]=1,o.push({x:p.x,y:p.y,z:p.z,path:[...l.path,p]}))}}return null}class Zp{constructor(t,e,i){O(this,"maze");O(this,"id");O(this,"history");O(this,"visitedNodes");O(this,"pathToTarget");O(this,"x");O(this,"y");O(this,"z");O(this,"visualX");O(this,"visualY");O(this,"visualZ");O(this,"state");O(this,"lastPos");O(this,"jellyTime");O(this,"lowCanvas");O(this,"lctx");this.maze=t,this.id=i,this.history=[],this.visitedNodes=new Set,this.pathToTarget=[],e?(this.x=e.x,this.y=e.y,this.z=e.z,this.visualX=e.x,this.visualY=e.y,this.visualZ=e.z,this.state="WANDERING",this.lastPos={x:this.x,y:this.y,z:this.z},this.visitedNodes.add(`${this.x},${this.y},${this.z}`)):(this.x=null,this.y=null,this.z=null,this.visualX=null,this.visualY=null,this.visualZ=null,this.state="SLEEP",this.lastPos=null),this.jellyTime=0,typeof document<"u"&&(this.lowCanvas=document.createElement("canvas"),this.lowCanvas.width=64,this.lowCanvas.height=64,this.lctx=this.lowCanvas.getContext("2d"))}generateCloudTexture(t=.016){if(this.state==="SLEEP"||(this.jellyTime+=t,typeof document>"u"||!this.lctx))return;const e=64,i=this.lctx;i.globalCompositeOperation="destination-out",i.fillStyle="rgba(0, 0, 0, 0.22)",i.fillRect(0,0,e,e),i.globalCompositeOperation="source-over";const n=this.jellyTime;try{const a=i.getImageData(0,0,e,e),o=a.data;for(let r=0;r<e;r++)for(let c=0;c<e;c++){const l=c-e/2,u=r-e/2,f=Math.sqrt(l*l+u*u),p=Math.sin(n*1.5+c*.08)*2.5,g=e*.35+p;if(f<g+Math.random()*1.5){const m=90+Math.floor(Math.random()*45),_=10+Math.floor(Math.random()*20),d=140+Math.floor(Math.random()*60),h=(r*e+c)*4;o[h]=m,o[h+1]=_,o[h+2]=d,o[h+3]=255}}i.putImageData(a,0,0)}catch{}if(Math.random()<.04){i.fillStyle=Math.random()<.7?"#ffffff":"#b3ffff";const a=e/2-8+Math.random()*16,o=e/2-8+Math.random()*16;i.fillRect(a,o,2+Math.random()*3,4+Math.random()*10)}if(Math.random()<.12){const a=Math.floor(Math.random()*3)+1,o=["#00ff66","#ff0055","#00ccff","#ffff00","#ffffff"];for(let r=0;r<a;r++){const c=Math.floor(Math.random()*e),l=Math.floor(Math.random()*e),u=c-e/2,f=l-e/2;if(Math.sqrt(u*u+f*f)<e*.32){const g=Math.floor(Math.random()*4)+2,m=Math.floor(Math.random()*2)+1;i.fillStyle=o[Math.floor(Math.random()*o.length)],i.fillRect(c,l,g,m)}}}if(Math.random()<.08){const a=Math.floor(Math.random()*e),o=Math.floor(Math.random()*6)+2,r=Math.floor(Math.random()*6)-3;try{const c=i.getImageData(0,a,e,o);i.clearRect(0,a,e,o),i.putImageData(c,r,a)}catch{}}}move(t,e,i){if(this.state==="SLEEP"||this.x===null||this.y===null||this.z===null)return;const n=this.getValidNeighbors(e,i);if(n.length===0)return;const a=Math.round(Math.cbrt(e.length));(e.get?e.get(this.x,this.y,this.z):e[this.x*a*a+this.y*a+this.z]??0)===i.VISITED&&this.state!=="TELEPORT_TRACKING"&&this.state!=="TRACKING"&&(this.state="TRACKING",this.pathToTarget=[],this.visitedNodes.clear(),this.visitedNodes.add(`${this.x},${this.y},${this.z}`));let r;if(this.pathToTarget.length>0){const c=this.pathToTarget[0],l=e[c.x*a*a+c.y*a+c.z];(this.state==="TRACKING"?l===i.VISITED||l===i.START||l===i.EXIT:l!==i.WALL)?r=this.pathToTarget.shift():this.pathToTarget=[]}if(!r)if(this.state==="TELEPORT_TRACKING")r=void 0;else{let c=this.findPathToNearestUnvisited(e,i);if((!c||c.length===0)&&(this.visitedNodes.clear(),this.visitedNodes.add(`${this.x},${this.y},${this.z}`),c=this.findPathToNearestUnvisited(e,i)),c&&c.length>0)this.pathToTarget=c,r=this.pathToTarget.shift();else{const l=this.lastPos||{x:this.x,y:this.y,z:this.z},u=n.filter(f=>f.x!==l.x||f.y!==l.y||f.z!==l.z);r=u.length>0?u[Math.floor(Math.random()*u.length)]:n[0]}}r&&(this.history.push({x:this.x,y:this.y,z:this.z}),this.history.length>2&&this.history.shift(),this.lastPos={x:this.x,y:this.y,z:this.z},this.x=r.x,this.y=r.y,this.z=r.z,this.visitedNodes.add(`${this.x},${this.y},${this.z}`))}findPathToTarget(t,e,i){const n=Math.round(Math.cbrt(e.length));return il({x:this.x,y:this.y,z:this.z},t,e,n,i.WALL,this.maze.startPos)}findPathToNearestUnvisited(t,e){const i=Math.round(Math.cbrt(t.length));return qp({x:this.x,y:this.y,z:this.z},this.visitedNodes,t,i,e,(n,a,o,r,c)=>this.getValidNeighbors(r,c,n,a,o,this.state==="TRACKING"))}getValidNeighbors(t,e,i=this.x,n=this.y,a=this.z,o=this.state==="TRACKING"){const r=[],c=[{dx:1,dy:0,dz:0},{dx:-1,dy:0,dz:0},{dx:0,dy:1,dz:0},{dx:0,dy:-1,dz:0},{dx:0,dy:0,dz:2},{dx:0,dy:0,dz:-2}],l=Math.round(Math.cbrt(t.length));for(const u of c){const f=i+u.dx,p=n+u.dy,g=a+u.dz;if(f>=0&&f<l&&p>=0&&p<l&&g>=0&&g<l){const m=Math.floor(this.maze.startPos.x),_=Math.floor(this.maze.startPos.y),d=this.maze.startPos.z;if(f===m&&p===_&&g===d)continue;const h=t[f*l*l+p*l+g];if(h===e.EXIT)continue;if(h!==e.WALL&&h!==8){if(u.dz!==0){const x=a+u.dz/2;if(t[i*l*l+n*l+x]===e.WALL)continue}o?(h===e.VISITED||h===e.START||h===e.EXIT||this.maze.visitedCells&&this.maze.visitedCells.has(`${f},${p},${g}`))&&r.push({x:f,y:p,z:g}):r.push({x:f,y:p,z:g})}}}return r}}class jp{constructor(t,e,i=null){O(this,"n");O(this,"branchingFactor");O(this,"size");O(this,"seed");O(this,"random");O(this,"matrix");O(this,"TYPES");O(this,"startPos");const n=t!==void 0?t:Q.MAZE_DEGREE!==void 0?Q.MAZE_DEGREE:8,a=e!==void 0?e:Q.BRANCHING_FACTOR!==void 0?Q.BRANCHING_FACTOR:.2;this.n=Math.max(3,Math.min(16,n)),this.branchingFactor=Math.max(0,Math.min(1,a)),this.size=2*this.n+1,i!=null?(this.seed=i,this.random=this.createSeededRandom(i)):(this.seed=null,this.random=Math.random),this.matrix=this.initMatrix(),this.TYPES={WALL:0,PATH:1,VISITED:2,START:3,EXIT:4,ELEVATOR_VISITED:5,TELEPORT:6,KEY:7,STATUE:8},this.startPos={x:Q.PLAYER_START_X!==void 0?Q.PLAYER_START_X:.5,y:Q.PLAYER_START_Y!==void 0?Q.PLAYER_START_Y:1.5,z:0}}createSeededRandom(t){let e=0;if(typeof t=="string")for(let i=0;i<t.length;i++)e=Math.imul(31,e)+t.charCodeAt(i)|0;else e=t|0;return function(){let i=e+=1831565813;return i=Math.imul(i^i>>>15,i|1),i^=i+Math.imul(i^i>>>7,i|61),((i^i>>>14)>>>0)/4294967296}}initMatrix(){return new Int8Array(this.size*this.size*this.size)}_idx(t,e,i){return t*this.size*this.size+e*this.size+i}generate(){const t=[],e=1+2*Math.floor(this.random()*this.n),i=1+2*Math.floor(this.random()*this.n),n=1+2*Math.floor(this.random()*this.n);for(this.matrix[this._idx(e,i,n)]=this.TYPES.PATH,t.push({x:e,y:i,z:n});t.length>0;){let r=this.random()>this.branchingFactor?t.length-1:Math.floor(this.random()*t.length);const c=t[r],l=this.getUnvisitedNeighbors(c.x,c.y,c.z);if(l.length>0){const u=l[Math.floor(this.random()*l.length)];this.matrix[this._idx(u.x,u.y,u.z)]=this.TYPES.PATH,this.matrix[this._idx((c.x+u.x)/2,(c.y+u.y)/2,(c.z+u.z)/2)]=this.TYPES.PATH,t.push(u)}else t.splice(r,1)}this.setEntryAndExit(),this.placeTeleports(),this.placeKeys(),this.applyBraid(),this.placeStatues();const a=this.size,o=this.matrix;return o.size=a,o.get=(r,c,l)=>o[r*a*a+c*a+l],o.set=(r,c,l,u)=>{o[r*a*a+c*a+l]=u},o}getUnvisitedNeighbors(t,e,i){const n=[],a=[{dx:2,dy:0,dz:0},{dx:-2,dy:0,dz:0},{dx:0,dy:2,dz:0},{dx:0,dy:-2,dz:0},{dx:0,dy:0,dz:2},{dx:0,dy:0,dz:-2}];for(const o of a){const r=t+o.dx,c=e+o.dy,l=i+o.dz;this.isValid(r,c,l)&&this.matrix[this._idx(r,c,l)]===this.TYPES.WALL&&n.push({x:r,y:c,z:l})}return n}isValid(t,e,i){return t>0&&t<this.size-1&&e>0&&e<this.size-1&&i>0&&i<this.size-1}setEntryAndExit(){const t=1+2*Math.floor(this.random()*this.n);this.matrix[this._idx(1,1,t)]=this.TYPES.PATH,this.matrix[this._idx(0,1,t)]=this.TYPES.TELEPORT,this.startPos={x:Q.PLAYER_START_X!==void 0?Q.PLAYER_START_X:.5,y:Q.PLAYER_START_Y!==void 0?Q.PLAYER_START_Y:1.5,z:t};const e=1+2*Math.floor(this.random()*this.n),i=2*this.n-1;this.matrix[this._idx(i,i,e)]=this.TYPES.PATH,this.matrix[this._idx(2*this.n,i,e)]=this.TYPES.EXIT}_findExitPos(){for(let t=0;t<this.size;t++)for(let e=0;e<this.size;e++)for(let i=0;i<this.size;i++)if(this.matrix[this._idx(t,e,i)]===this.TYPES.EXIT)return{x:t,y:e,z:i};return{x:2*this.n,y:2*this.n-1,z:this.startPos.z}}_collectDeadEndsAndPaths(){const t=[],e=[],i=[{dx:1,dy:0,dz:0},{dx:-1,dy:0,dz:0},{dx:0,dy:1,dz:0},{dx:0,dy:-1,dz:0},{dx:0,dy:0,dz:1},{dx:0,dy:0,dz:-1}];for(let n=1;n<this.size-1;n++)for(let a=1;a<this.size-1;a++)for(let o=1;o<this.size-1;o++){if(this.matrix[this._idx(n,a,o)]!==this.TYPES.PATH)continue;const r=o+1<this.size&&this.matrix[this._idx(n,a,o+1)]!==this.TYPES.WALL,c=o-1>=0&&this.matrix[this._idx(n,a,o-1)]!==this.TYPES.WALL;if(r||c)continue;let l=0;for(const u of i){const f=n+u.dx,p=a+u.dy,g=o+u.dz;f>=0&&f<this.size&&p>=0&&p<this.size&&g>=0&&g<this.size&&this.matrix[this._idx(f,p,g)]!==this.TYPES.WALL&&l++}(l===1?t:e).push({x:n,y:a,z:o})}return{deadEnds:t,normalPaths:e}}_greedyFill(t,e,i,n,a){const o={x:0,y:1,z:this.startPos.z},r=this._findExitPos(),c=(f,p)=>Math.abs(f.x-p.x)+Math.abs(f.y-p.y)+Math.abs(f.z-p.z);let l=4,u=4;for(;t.length<i&&l>0;){a&&(t.length=0);const f=e.filter(p=>c(p,o)<l||c(p,r)<l?!1:!n.includes(this.matrix[this._idx(p.x,p.y,p.z)]));for(;t.length<i;){let p=null,g=-1;for(const m of f){if(t.some(d=>d.x===m.x&&d.y===m.y&&d.z===m.z))continue;let _=1/0;for(const d of t){const h=c(m,d);h<_&&(_=h)}if(_>=u){const d=Math.min(c(m,o),c(m,r),_);d>g&&(g=d,p=m)}}if(p)t.push(p);else break}t.length<i&&(u>1?u--:l--)}}placeTeleports(){const t=Q.getTeleportCount(this.n),{deadEnds:e,normalPaths:i}=this._collectDeadEndsAndPaths(),n=[];this._greedyFill(n,e,t,[],!0),n.length<t&&this._greedyFill(n,i,t,[],!1);for(const a of n)this.matrix[this._idx(a.x,a.y,a.z)]=this.TYPES.TELEPORT}placeKeys(){const t=Q.getHunterCount(this.n)*2,{deadEnds:e,normalPaths:i}=this._collectDeadEndsAndPaths(),n=[];this._greedyFill(n,e,t,[this.TYPES.TELEPORT],!0),n.length<t&&this._greedyFill(n,i,t,[this.TYPES.TELEPORT],!1);for(const a of n)this.matrix[this._idx(a.x,a.y,a.z)]=this.TYPES.KEY}applyBraid(){const t=this.size,e=[];for(let o=1;o<t-1;o++)for(let r=1;r<t-1;r++)for(let c=1;c<t-1;c++)if(this.matrix[this._idx(o,r,c)]===this.TYPES.WALL){const l=o%2===0&&r%2!==0&&c%2!==0,u=r%2===0&&o%2!==0&&c%2!==0,f=c%2===0&&o%2!==0&&r%2!==0;if(l){const p=this.matrix[this._idx(o-1,r,c)],g=this.matrix[this._idx(o+1,r,c)];p!==this.TYPES.WALL&&g!==this.TYPES.WALL&&p!==this.TYPES.TELEPORT&&g!==this.TYPES.TELEPORT&&p!==this.TYPES.EXIT&&g!==this.TYPES.EXIT&&p!==this.TYPES.KEY&&g!==this.TYPES.KEY&&e.push({x:o,y:r,z:c,type:"X"})}else if(u){const p=this.matrix[this._idx(o,r-1,c)],g=this.matrix[this._idx(o,r+1,c)];p!==this.TYPES.WALL&&g!==this.TYPES.WALL&&p!==this.TYPES.TELEPORT&&g!==this.TYPES.TELEPORT&&p!==this.TYPES.EXIT&&g!==this.TYPES.EXIT&&p!==this.TYPES.KEY&&g!==this.TYPES.KEY&&e.push({x:o,y:r,z:c,type:"Y"})}else if(f){const p=this.matrix[this._idx(o,r,c-1)],g=this.matrix[this._idx(o,r,c+1)];p!==this.TYPES.WALL&&g!==this.TYPES.WALL&&p!==this.TYPES.TELEPORT&&g!==this.TYPES.TELEPORT&&p!==this.TYPES.EXIT&&g!==this.TYPES.EXIT&&p!==this.TYPES.KEY&&g!==this.TYPES.KEY&&e.push({x:o,y:r,z:c,type:"Z"})}}for(let o=e.length-1;o>0;o--){const r=Math.floor(this.random()*(o+1)),c=e[o];e[o]=e[r],e[r]=c}const i=Q.BRAID_FACTOR||.1,n=Math.floor(e.length*i);let a=0;for(const o of e){if(a>=n)break;this.isWideConnection(o.x,o.y,o.z)||o.type==="Z"&&this.isAdjacentElevator(o.x,o.y,o.z)||(this.matrix[this._idx(o.x,o.y,o.z)]=this.TYPES.PATH,a++)}}isWideConnection(t,e,i){const n=this.size,a=(l,u,f)=>l<0||l>=n||u<0||u>=n||f<0||f>=n?!1:l===t&&u===e&&f===i?!0:this.matrix[this._idx(l,u,f)]!==this.TYPES.WALL;return!!(a(t,e+1,i)&&a(t+1,e,i)&&a(t+1,e+1,i)||a(t-1,e,i)&&a(t-1,e+1,i)&&a(t,e+1,i)||a(t,e-1,i)&&a(t+1,e-1,i)&&a(t+1,e,i)||a(t-1,e-1,i)&&a(t,e-1,i)&&a(t-1,e,i)||a(t,e,i+1)&&a(t+1,e,i)&&a(t+1,e,i+1)||a(t-1,e,i)&&a(t-1,e,i+1)&&a(t,e,i+1)||a(t,e,i-1)&&a(t+1,e,i-1)&&a(t+1,e,i)||a(t-1,e,i-1)&&a(t,e,i-1)&&a(t-1,e,i)||a(t,e,i+1)&&a(t,e+1,i)&&a(t,e+1,i+1)||a(t,e-1,i)&&a(t,e-1,i+1)&&a(t,e,i+1)||a(t,e,i-1)&&a(t,e+1,i-1)&&a(t,e+1,i)||a(t,e-1,i-1)&&a(t,e,i-1)&&a(t,e-1,i))}isAdjacentElevator(t,e,i){const n=this.size,a=[{dx:-1,dy:-1},{dx:-1,dy:0},{dx:-1,dy:1},{dx:0,dy:-1},{dx:0,dy:1},{dx:1,dy:-1},{dx:1,dy:0},{dx:1,dy:1}];for(const o of a){const r=t+o.dx,c=e+o.dy;if(!(r<0||r>=n||c<0||c>=n)&&(this.matrix[this._idx(r,c,i)]!==this.TYPES.WALL||i-2>=0&&this.matrix[this._idx(r,c,i-2)]!==this.TYPES.WALL||i+2<n&&this.matrix[this._idx(r,c,i+2)]!==this.TYPES.WALL))return!0}return!1}isDeadEndZ(t,e,i){if(t%2===0||e%2===0||i%2===0)return!1;const n=this.matrix[this._idx(t,e,i)];if(n===this.TYPES.WALL||n===this.TYPES.START||n===this.TYPES.EXIT||n===this.TYPES.TELEPORT||n===this.TYPES.KEY)return!1;const a=this.size,o=[{dx:1,dy:0},{dx:-1,dy:0},{dx:0,dy:1},{dx:0,dy:-1}];for(const c of o){const l=t+c.dx,u=e+c.dy;if(!(l<0||l>=a||u<0||u>=a)&&this.matrix[this._idx(l,u,i)]!==this.TYPES.WALL)return!1}let r=!1;return i-1>=0&&this.matrix[this._idx(t,e,i-1)]!==this.TYPES.WALL&&(r=!0),i+1<a&&this.matrix[this._idx(t,e,i+1)]!==this.TYPES.WALL&&(r=!0),r}isSolvable(){const t=this.size,e={x:Math.floor(this.startPos.x),y:Math.floor(this.startPos.y),z:this.startPos.z},i=[];let n=null;for(let l=0;l<t;l++)for(let u=0;u<t;u++)for(let f=0;f<t;f++){const p=this.matrix[this._idx(l,u,f)];p===this.TYPES.KEY?i.push(`${l},${u},${f}`):p===this.TYPES.EXIT&&(n=`${l},${u},${f}`)}const a=[e],o=new Set([`${e.x},${e.y},${e.z}`]),r=new Set;let c=!1;for(;a.length>0;){const l=a.shift();if(!l)continue;const u=`${l.x},${l.y},${l.z}`;i.includes(u)&&r.add(u),u===n&&(c=!0);const f=[{dx:1,dy:0},{dx:-1,dy:0},{dx:0,dy:1},{dx:0,dy:-1}];for(const p of f){const g=l.x+p.dx,m=l.y+p.dy,_=l.z;if(g>=0&&g<t&&m>=0&&m<t){const d=`${g},${m},${_}`,h=this.matrix[this._idx(g,m,_)];h!==this.TYPES.WALL&&h!==this.TYPES.STATUE&&!o.has(d)&&(o.add(d),a.push({x:g,y:m,z:_}))}}for(const p of[-2,2]){const g=l.z+p;if(g>=0&&g<t){const m=l.z+p/2,_=this.matrix[this._idx(l.x,l.y,m)],d=this.matrix[this._idx(l.x,l.y,g)];if(_!==this.TYPES.WALL&&_!==this.TYPES.STATUE&&d!==this.TYPES.WALL&&d!==this.TYPES.STATUE){const h=`${l.x},${l.y},${g}`;o.has(h)||(o.add(h),a.push({x:l.x,y:l.y,z:g}))}}}}if(!c||r.size!==i.length)return!1;for(let l=0;l<t;l++)for(let u=0;u<t;u++)for(let f=1;f<t;f+=2){const p=this.matrix[this._idx(l,u,f)];if(p!==this.TYPES.WALL&&p!==this.TYPES.STATUE&&!o.has(`${l},${u},${f}`))return!1}return!0}placeStatues(){const t=this.size,e=[];for(let n=0;n<t;n++)for(let a=0;a<t;a++)for(let o=0;o<t;o++)this.isDeadEndZ(n,a,o)&&e.push({x:n,y:a,z:o});let i=0;for(const n of e){const a=this.matrix[this._idx(n.x,n.y,n.z)],o=n.z-1,r=n.z+1,c=o>=0?this.matrix[this._idx(n.x,n.y,o)]:null,l=r<t?this.matrix[this._idx(n.x,n.y,r)]:null;this.matrix[this._idx(n.x,n.y,n.z)]=this.TYPES.STATUE,o>=0&&(this.matrix[this._idx(n.x,n.y,o)]=this.TYPES.WALL),r<t&&(this.matrix[this._idx(n.x,n.y,r)]=this.TYPES.WALL),this.isSolvable()?i++:(this.matrix[this._idx(n.x,n.y,n.z)]=a,o>=0&&(this.matrix[this._idx(n.x,n.y,o)]=c),r<t&&(this.matrix[this._idx(n.x,n.y,r)]=l))}return i}}class Jp{constructor(){O(this,"uiFloorSpan");O(this,"uiMap3dContainer");O(this,"uiMobileControls");O(this,"uiProximeterContainer");O(this,"uiProximeterCells");O(this,"uiProximeterBar");O(this,"uiVictoryScreen");O(this,"uiGameOverScreen");O(this,"uiMobileUp");O(this,"uiMobileDown");O(this,"uiMobileMap");O(this,"uiSavingIndicator");O(this,"savingIndicatorTimeout");O(this,"uiVisitedPercent");O(this,"uiHunterStatusVal");O(this,"uiStatusLabel");O(this,"uiMarqueeContainer");O(this,"uiLegendHunter");O(this,"uiCanvas");O(this,"uiKeysCollected");O(this,"uiKeysTotal");O(this,"uiKeysList");O(this,"uiPauseScreen");O(this,"uiMobilePauseBtn");O(this,"uiPathfindersRemaining");O(this,"uiPathfindersTotal");O(this,"uiControlsHintContent");O(this,"onInfoBanner");O(this,"bannerMessage","");this.uiFloorSpan=document.getElementById("current-floor"),this.uiMap3dContainer=document.getElementById("map3d-container"),this.uiMobileControls=document.getElementById("mobile-controls"),this.uiProximeterContainer=document.getElementById("proximeter-container"),this.uiProximeterCells=document.querySelectorAll(".proximeter-cell"),this.uiProximeterBar=document.querySelector(".proximeter-bar"),this.uiVictoryScreen=document.getElementById("victory-screen"),this.uiGameOverScreen=document.getElementById("game-over-screen"),this.uiMobileUp=document.getElementById("mobile-up"),this.uiMobileDown=document.getElementById("mobile-down"),this.uiMobileMap=document.getElementById("mobile-map"),this.uiSavingIndicator=document.getElementById("saving-indicator"),this.savingIndicatorTimeout=null,this.uiVisitedPercent=document.getElementById("visited-percent"),this.uiHunterStatusVal=document.getElementById("hunter-status-val"),this.uiStatusLabel=document.querySelector("#hunter-status-panel .status-label"),this.uiMarqueeContainer=document.querySelector(".status-marquee-container"),this.uiLegendHunter=document.getElementById("legend-hunter"),this.uiCanvas=document.getElementById("main-2d-canvas"),this.uiKeysCollected=document.getElementById("keys-collected-count"),this.uiKeysTotal=document.getElementById("keys-total-count"),this.uiKeysList=document.getElementById("keys-list-container"),this.uiPauseScreen=document.getElementById("pause-screen"),this.uiMobilePauseBtn=document.getElementById("mobile-pause-btn"),this.uiPathfindersRemaining=document.getElementById("pathfinders-remaining-count"),this.uiPathfindersTotal=document.getElementById("pathfinders-total-count"),this.uiControlsHintContent=document.getElementById("controls-hint-content"),this.localizeDOM()}localizeDOM(t=wn){Qo(t)}showPause(){this.uiPauseScreen&&this.uiPauseScreen.classList.remove("hidden")}hidePause(){this.uiPauseScreen&&this.uiPauseScreen.classList.add("hidden")}showVictory(t=0){this.hideGameUI(),this.uiVictoryScreen&&this.uiVictoryScreen.classList.remove("hidden");const e=document.getElementById("victory-completion-rate");e&&(e.innerText=`${t}%`)}showDeath(t=!1){this.hideGameUI(),this.uiGameOverScreen&&this.uiGameOverScreen.classList.remove("hidden");const e=document.getElementById("continue-btn-death");e&&(e.style.display=t?"":"none")}hideGameUI(){this.uiMobileControls&&this.uiMobileControls.classList.add("hidden"),this.uiMobilePauseBtn&&this.uiMobilePauseBtn.classList.add("hidden"),this.uiMap3dContainer&&this.uiMap3dContainer.classList.add("hidden"),this.uiProximeterContainer&&this.uiProximeterContainer.classList.add("hidden"),this.uiProximeterBar&&this.uiProximeterBar.classList.remove("critical-alert"),this.uiProximeterCells.forEach(t=>t.classList.remove("active")),this.uiCanvas&&this.uiCanvas.classList.remove("hunted-map-effect","nearby-map-effect")}initGameUI(t=!1){this.uiMobileControls&&this.uiMobileControls.classList.remove("hidden"),this.uiMobilePauseBtn&&this.uiMobilePauseBtn.classList.remove("hidden"),this.uiMobileMap&&(this.uiMobileMap.disabled=!0),t?(this.uiStatusLabel&&(this.uiStatusLabel.innerText="SAFE MODE:"),this.uiHunterStatusVal&&(this.uiHunterStatusVal.innerText="ACTIVE",this.uiHunterStatusVal.className="status-marquee-text status--scanning"),this.uiLegendHunter&&this.uiLegendHunter.classList.add("hidden")):(this.uiStatusLabel&&(this.uiStatusLabel.innerText="HUNTER STATUS:"),this.uiLegendHunter&&this.uiLegendHunter.classList.remove("hidden"))}updateVisitedPercent(t){this.uiVisitedPercent&&(this.uiVisitedPercent.innerText=String(t))}updateFloor(t,e,i){this.uiFloorSpan&&(this.uiFloorSpan.innerText=String(t)),this.uiMobileUp&&(this.uiMobileUp.disabled=!e),this.uiMobileDown&&(this.uiMobileDown.disabled=!i)}updateKeysHUD(t,e){if(this.uiKeysCollected&&(this.uiKeysCollected.innerText=String(t)),this.uiKeysTotal&&(this.uiKeysTotal.innerText=String(e)),this.uiKeysList){this.uiKeysList.innerHTML="";for(let i=0;i<e;i++){const n=document.createElement("span");n.className="key-dot"+(i<t?" key-dot--collected":""),this.uiKeysList.appendChild(n)}}}updatePathfindersHUD(t,e){this.uiPathfindersRemaining&&(this.uiPathfindersRemaining.innerText=String(t)),this.uiPathfindersTotal&&(this.uiPathfindersTotal.innerText=String(e))}showSavingIndicator(){this.uiSavingIndicator&&(this.savingIndicatorTimeout&&clearTimeout(this.savingIndicatorTimeout),this.uiSavingIndicator.classList.remove("hidden"),this.uiSavingIndicator.classList.add("saving-pulse"),this.savingIndicatorTimeout=window.setTimeout(()=>{this.uiSavingIndicator&&(this.uiSavingIndicator.classList.add("hidden"),this.uiSavingIndicator.classList.remove("saving-pulse"))},2e3))}showInfoBanner(t){this.bannerMessage=t,this.onInfoBanner&&this.onInfoBanner(t)}setMap3DVisible(t){this.uiMap3dContainer&&(t?this.uiMap3dContainer.classList.remove("hidden"):this.uiMap3dContainer.classList.add("hidden"))}updateHazardWarning(t,e,i=!1,n=!1){if(!this.uiHunterStatusVal)return;let a=It("statusScanning"),o="status--scanning",r=!1;i?(a=It("statusActive"),o="status--scanning"):n?(a=It("statusSleeping"),o="status--sleeping"):e>0?(a=It("statusConverging",{ticks:e}),o="status--converging",r=!0):t&&(a=It("statusTracking"),o="status--tracking",r=!0),this.uiHunterStatusVal.innerText!==a&&(this.uiHunterStatusVal.innerText=a,this.uiHunterStatusVal.className="status-marquee-text "+o),this.uiCanvas&&(r?this.uiCanvas.classList.add("hunted-map-effect"):this.uiCanvas.classList.remove("hunted-map-effect"))}setNearbyWarning(t){this.uiCanvas&&(t?this.uiCanvas.classList.add("nearby-map-effect"):this.uiCanvas.classList.remove("nearby-map-effect"))}updateProximeter(t,e,i){if(!this.uiProximeterContainer)return;if(e>0&&!i)this.uiProximeterContainer.classList.remove("hidden");else{this.uiProximeterContainer.classList.add("hidden");return}let n=0;t<=10&&(n=11-t),this.uiProximeterCells.forEach(a=>{parseInt(a.getAttribute("data-index")||"0")<=n?a.classList.add("active"):a.classList.remove("active")}),this.uiProximeterBar&&(n===10?this.uiProximeterBar.classList.add("critical-alert"):this.uiProximeterBar.classList.remove("critical-alert"))}updateMobileMapButton(t,e,i){this.uiMobileMap&&i&&(t&&!e?(this.uiMobileMap.innerText=It("teleport"),this.uiMobileMap.style.borderColor="var(--clr-teleport, #ff8c00)",this.uiMobileMap.style.color="var(--clr-teleport, #ff8c00)",this.uiMobileMap.style.background="rgba(255, 140, 0, 0.2)"):(this.uiMobileMap.innerText=It("map"),this.uiMobileMap.style.borderColor="",this.uiMobileMap.style.color="",this.uiMobileMap.style.background=""))}updateControlsHint(t,e=!0){this.uiControlsHintContent&&(t==="gamepad"?this.uiControlsHintContent.innerHTML=`
                <div class="hint-row">
                    <div class="hint-keys">
                        <kbd class="kbd-round kbd-dark">LS</kbd>
                        <span style="color:var(--clr-text-dim);font-size:0.9em;margin:0 2px;">or</span>
                        <kbd class="kbd-dark">D-Pad</kbd>
                    </div>
                    <span class="hint-action">${It("actionMove")}</span>
                </div>
                <div class="hint-row">
                    <div class="hint-keys">
                        <kbd class="kbd-round kbd-a">A</kbd>
                        <span style="color:var(--clr-text-dim);font-size:0.9em;margin:0 2px;">/</span>
                        <kbd class="kbd-round kbd-y">Y</kbd>
                    </div>
                    <span class="hint-action">${It("actionElevator")}</span>
                </div>
                <div class="hint-row">
                    <div class="hint-keys">
                        <kbd class="kbd-dark" style="min-width: calc(var(--h-unit) * 3); min-width: calc(var(--d-h-unit) * 3);">Back</kbd>
                    </div>
                    <span class="hint-action">${It("actionMap")}</span>
                </div>
                <div class="hint-row">
                    <div class="hint-keys">
                        <kbd class="kbd-round kbd-b">B</kbd>
                    </div>
                    <span class="hint-action">${It("actionZoom")}</span>
                </div>
            `:this.uiControlsHintContent.innerHTML=`
                <div class="hint-row">
                    <div class="wasd-container">
                        <div class="wasd-row"><kbd>W</kbd></div>
                        <div class="wasd-row"><kbd>A</kbd><kbd>S</kbd><kbd>D</kbd></div>
                    </div>
                    <span class="hint-action">${It("actionMove")}</span>
                </div>
                <div class="hint-row">
                    <div class="hint-keys">
                        <kbd>Q</kbd>
                        <span style="color:var(--clr-text-dim);font-size:0.9em;margin:0 2px;">/</span>
                        <kbd>E</kbd>
                    </div>
                    <span class="hint-action">${It("actionElevator")}</span>
                </div>
                <div class="hint-row">
                    <div class="hint-keys">
                        <kbd>M</kbd>
                    </div>
                    <span class="hint-action">${It("actionMap")}</span>
                </div>
                <div class="hint-row">
                    <div class="hint-keys">
                        <kbd>Z</kbd>
                    </div>
                    <span class="hint-action">${It("actionZoom")}</span>
                </div>
            `)}destroy(){this.savingIndicatorTimeout&&clearTimeout(this.savingIndicatorTimeout)}}class Qp{constructor(){O(this,"keys");O(this,"touchStart");O(this,"touchMoveVector");O(this,"preventScrollKeys");O(this,"handleKeyDown");O(this,"handleKeyUp");O(this,"handleTouchStart");O(this,"handleTouchMove");O(this,"handleTouchEnd");this.keys={},this.touchStart=null,this.touchMoveVector=null,this.preventScrollKeys=["arrowup","arrowdown","arrowleft","arrowright"," ","pageup","pagedown"],this.handleKeyDown=null,this.handleKeyUp=null,this.handleTouchStart=null,this.handleTouchMove=null,this.handleTouchEnd=null,this.init()}init(){this.handleKeyDown=t=>{const e=t.key.toLowerCase();this.keys[e]=!0,this.preventScrollKeys.includes(e)&&t.preventDefault()},this.handleKeyUp=t=>{this.keys[t.key.toLowerCase()]=!1},window.addEventListener("keydown",this.handleKeyDown),window.addEventListener("keyup",this.handleKeyUp)}setupTouch(t,e){this.handleTouchStart=i=>{const n=i.target;t()||e()||n&&n.closest&&n.closest("button")||(i.cancelable&&i.preventDefault(),this.touchStart={x:i.touches[0].clientX,y:i.touches[0].clientY})},this.handleTouchMove=i=>{if(!this.touchStart||t()||e())return;i.cancelable&&i.preventDefault();const n=i.touches[0].clientX-this.touchStart.x,a=i.touches[0].clientY-this.touchStart.y,o=Math.sqrt(n*n+a*a);o>10&&(this.touchMoveVector={x:n/o,y:a/o})},this.handleTouchEnd=()=>{this.touchStart=null,this.touchMoveVector=null},window.addEventListener("touchstart",this.handleTouchStart,{passive:!1}),window.addEventListener("touchmove",this.handleTouchMove,{passive:!1}),window.addEventListener("touchend",this.handleTouchEnd)}destroy(){this.handleKeyDown&&window.removeEventListener("keydown",this.handleKeyDown),this.handleKeyUp&&window.removeEventListener("keyup",this.handleKeyUp),this.handleTouchStart&&window.removeEventListener("touchstart",this.handleTouchStart),this.handleTouchMove&&window.removeEventListener("touchmove",this.handleTouchMove),this.handleTouchEnd&&window.removeEventListener("touchend",this.handleTouchEnd)}}const La="void-escape-save";function tm(s){const t=new Uint8Array(s.buffer);let e="";for(let i=0;i<t.length;i++)e+=String.fromCharCode(t[i]);return btoa(e)}function em(s){const t=atob(s),e=new Uint8Array(t.length);for(let i=0;i<t.length;i++)e[i]=t.charCodeAt(i);return new Int8Array(e.buffer)}function im(s){return{x:s.x,y:s.y,z:s.z,id:s.id,state:s.state,lastPos:s.lastPos?{...s.lastPos}:null,history:s.history.map(t=>({...t})),visitedNodes:Array.from(s.visitedNodes),pathToTarget:s.pathToTarget.map(t=>({...t}))}}function ns(s){try{const t={version:1,timestamp:Date.now(),degree:s.degree,branchingFactor:s.branchingFactor,isSafeMode:s.isSafeMode,seed:s.seed,mazeSize:s.mazeGen.size,mazeStartPos:{...s.mazeGen.startPos},matrix:tm(s.mazeGen.matrix),player:{...s.player},hunters:s.hunters.map(im),discoveredTeleports:Array.from(s.discoveredTeleports),inactiveTeleportPos:s.inactiveTeleportPos?{...s.inactiveTeleportPos}:null,teleportCooldownTicks:s.teleportCooldownTicks,revealedPathSet:Array.from(s.revealedPathSet),keysCollected:s.keysCollected,totalKeys:s.totalKeys,totalPathfinders:s.totalPathfinders,pathfindersRemaining:s.pathfindersRemaining,pathfinderRewardsGranted:s.pathfinderRewardsGranted!==void 0?s.pathfinderRewardsGranted:0,mapCompletion100Triggered:s.mapCompletion100Triggered||!1,dialogueUpTriggered:s.dialogueUpTriggered||!1,dialogueDownTriggered:s.dialogueDownTriggered||!1,dialogueWhichWayTriggered:s.dialogueWhichWayTriggered||!1,dialogueDetectedTriggered:s.dialogueDetectedTriggered||!1,hunterOnSameFloorDetected:s.hunterOnSameFloorDetected||!1};localStorage.setItem(La,JSON.stringify(t))}catch(t){console.warn("[SaveManager] Could not save game state:",t)}}function nl(){try{const s=localStorage.getItem(La);if(!s)return null;const t=JSON.parse(s);return!t||t.version!==1?null:t}catch(s){return console.warn("[SaveManager] Could not load save data:",s),null}}function sl(){localStorage.removeItem(La)}function go(){return nl()!==null}function nm(s,t){s.x=t.x,s.y=t.y,s.z=t.z,s.visualX=t.x,s.visualY=t.y,s.visualZ=t.z,s.state=t.state,s.lastPos=t.lastPos?{...t.lastPos}:null,s.history=t.history.map(e=>({...e})),s.visitedNodes=new Set(t.visitedNodes),s.pathToTarget=t.pathToTarget.map(e=>({...e}))}function sm(s,t){const e=em(t);for(let i=0;i<e.length;i++)s.matrix[i]=e[i]}function na(s,t,e){return Math.abs(t-s)<=e?t:s+Math.sign(t-s)*e}class vo{constructor(t,e,i=null){O(this,"degree");O(this,"branchingFactor");O(this,"isSafeMode");O(this,"vScale");O(this,"ui");O(this,"input");O(this,"canvas");O(this,"ctx");O(this,"seed");O(this,"mazeGen");O(this,"maze");O(this,"isResumedFromSave");O(this,"mapCompletion100Triggered");O(this,"hunterOnSameFloorDetected");O(this,"dialogueUpTriggered");O(this,"dialogueDownTriggered");O(this,"dialogueWhichWayTriggered");O(this,"dialogueDetectedTriggered");O(this,"wallImage");O(this,"floorImage");O(this,"keyImage");O(this,"statueImage");O(this,"mageImages");O(this,"playerSide");O(this,"playerVertical");O(this,"playerWalkCycle");O(this,"playerSquashTargetX");O(this,"playerSquashTargetY");O(this,"playerSquashX");O(this,"playerSquashY");O(this,"player");O(this,"hunters");O(this,"keyMeshes");O(this,"exitMesh");O(this,"keysCollected");O(this,"totalKeys");O(this,"totalPathfinders");O(this,"pathfindersRemaining");O(this,"activeMapFloor");O(this,"visualActiveFloor");O(this,"mapCursor");O(this,"pathfinderRewardsGranted");O(this,"isometricCanvas");O(this,"isometricCtx");O(this,"floorClickRects");O(this,"teleportModalClickRects");O(this,"mapZoom");O(this,"mapPanOffsetX");O(this,"mapPanOffsetY");O(this,"isZoomTransitionActive");O(this,"zoomTransitionTimer");O(this,"preloadedStoryImages");O(this,"storyImagesLoadedCount");O(this,"storyImagesTotalCount");O(this,"storyImagesPreloadPromise");O(this,"lastFrameTime");O(this,"revealedPathSet");O(this,"activePathReveal");O(this,"revealedPathProgress");O(this,"knownMeshes");O(this,"gridMeshes");O(this,"pathRevealInterval");O(this,"pathfinderBlockedUntil");O(this,"isMap3DActive");O(this,"isGameOver");O(this,"deathAnimation");O(this,"notificationQueue");O(this,"activeNotification");O(this,"isPaused");O(this,"isDestroyed");O(this,"isIntroPlaying");O(this,"isStoryActive");O(this,"pulsatingMaterials");O(this,"hunterMeshes");O(this,"discoveredTeleports");O(this,"visitedCells");O(this,"lastSavePos");O(this,"suppressWakeHuntersBanner");O(this,"allTeleports");O(this,"isTouchDevice");O(this,"isMouseOrTouchDetected");O(this,"teleportGoBtnClickRect");O(this,"staticMapCacheCanvas");O(this,"staticMapCacheCtx");O(this,"staticMapCacheDirty");O(this,"zoomVisibleCells");O(this,"scene");O(this,"camera");O(this,"renderer");O(this,"controls");O(this,"teleportMeshes");O(this,"inactiveTeleportPos");O(this,"teleportCooldownTicks");O(this,"storyImages");O(this,"storyOpacity");O(this,"storyOverlayOpacity");O(this,"storyFrameIndex");O(this,"storyTimer");O(this,"storyTextQueue");O(this,"storyTextIndex");O(this,"storyDisplayedText");O(this,"storyState");O(this,"storyWaitTimer");O(this,"storyTextHeight");O(this,"storyWidthProgress");O(this,"storyCharIndex");O(this,"storyTypeTimer");O(this,"storyMsgIndex");O(this,"storyCloseProgress");O(this,"selectedTeleportIndex");O(this,"teleportConfirmModalActive");O(this,"teleportModalSelection");O(this,"teleportDotsClickRects");O(this,"isTeleportMode");O(this,"floorTransition");O(this,"hasSavePoint");O(this,"lastPlayerCell");O(this,"exitPathfinderUnlocked");O(this,"isZoomActive");O(this,"lastInputDevice");O(this,"fullyRevealedCells");O(this,"revealedCellsAnimation");O(this,"skipCellAnimations");O(this,"activeSkipHandler");O(this,"activeIntroTimer");O(this,"activeContinueTimer");O(this,"raycaster");O(this,"pointer");O(this,"handleKeyDownExtra");O(this,"handleKeyboardDetection");O(this,"handleResize");O(this,"handleStoryKeyDown");O(this,"handleStoryClick");O(this,"handleStoryTouch");O(this,"handleCanvasClick");O(this,"handlePointerDown");O(this,"handlePointerUp");O(this,"lastHunterMove");O(this,"lastLockedWarningTime");O(this,"prevGamepadButtons");O(this,"isPreloadingActive");O(this,"prevGamepadStick");O(this,"gamepadTeleportSelectedIndex");if(this.degree=t!==void 0?t:Q.MAZE_DEGREE!==void 0?Q.MAZE_DEGREE:8,this.branchingFactor=e!==void 0?e:Q.BRANCHING_FACTOR!==void 0?Q.BRANCHING_FACTOR:.2,i)this.isSafeMode=i.isSafeMode??!1;else{const l=document.getElementById("safe-mode");this.isSafeMode=l?l.checked:!1}this.vScale=2,this.ui=new Jp,this.input=new Qp,this.input.setupTouch(()=>this.isMap3DActive,()=>this.isGameOver),this.canvas=document.getElementById("main-2d-canvas"),this.ctx=this.canvas.getContext("2d"),this.seed=i?i.seed:Q.SEED!==null&&Q.SEED!==void 0?Q.SEED:Date.now(),this.mazeGen=new jp(t,e,this.seed),this.maze=this.mazeGen.generate(),this.isResumedFromSave=!!i,this.mapCompletion100Triggered=!1,this.hunterOnSameFloorDetected=!1,this.dialogueUpTriggered=!1,this.dialogueDownTriggered=!1,this.dialogueWhichWayTriggered=!1,this.dialogueDetectedTriggered=!1,this.wallImage=new Image,this.wallImage.onload=()=>{this.staticMapCacheDirty=!0},this.wallImage.src="assets/images/wall.png",this.floorImage=new Image,this.floorImage.onload=()=>{this.staticMapCacheDirty=!0},this.floorImage.src="assets/images/floor.png",this.keyImage=new Image,this.keyImage.onload=()=>{this.staticMapCacheDirty=!0},this.keyImage.src="assets/images/key.svg",this.statueImage=new Image,this.statueImage.onload=()=>{this.staticMapCacheDirty=!0},this.statueImage.src="assets/images/statue.png",this.mageImages={down_left:new Image,down_right:new Image,up_left:new Image,up_right:new Image};for(const l in this.mageImages)this.mageImages[l].onload=()=>{this.staticMapCacheDirty=!0},this.mageImages[l].src=`assets/images/mage_${l}.png`;this.playerSide="right",this.playerVertical="down",this.playerWalkCycle=0,this.playerSquashTargetX=1,this.playerSquashTargetY=1,this.playerSquashX=1,this.playerSquashY=1,this.player={x:this.mazeGen.startPos.x,y:this.mazeGen.startPos.y,z:this.mazeGen.startPos.z,dir:0},this.hunters=[],this.initHunters(t),this.keyMeshes=[],this.exitMesh=null,this.keysCollected=0,this.totalKeys=Q.getHunterCount(t)*2,this.totalPathfinders=Q.getPathfinderCount(t),this.pathfindersRemaining=this.totalPathfinders,this.activeMapFloor=1,this.visualActiveFloor=1,this.mapCursor={x:0,y:0,z:1},this.pathfinderRewardsGranted=0,this.isometricCanvas=null,this.isometricCtx=null,this.floorClickRects=[],this.mapZoom=1,this.mapPanOffsetX=0,this.isZoomTransitionActive=!1,this.zoomTransitionTimer=0,this.preloadedStoryImages=[],this.storyImagesLoadedCount=0,this.storyImagesTotalCount=0,this.storyImagesPreloadPromise=null,this.preloadStoryImages(),this.lastFrameTime=performance.now(),this.revealedPathSet=new Set,this.activePathReveal=[],this.revealedPathProgress=0,this.knownMeshes=[],this.gridMeshes=null,this.pathRevealInterval=null,this.pathfinderBlockedUntil=0,this.ui.initGameUI(this.isSafeMode),this.ui.onInfoBanner=l=>this.queueNotification(l),this.ui.updateKeysHUD(this.keysCollected,this.totalKeys),this.ui.updatePathfindersHUD(this.pathfindersRemaining,this.totalPathfinders),this.isMap3DActive=!1,this.isGameOver=!1,this.deathAnimation=null,this.notificationQueue=[],this.activeNotification=null,this.isPaused=!1,this.isDestroyed=!1,this.isIntroPlaying=!1,this.isStoryActive=!1,this.pulsatingMaterials=[],this.hunterMeshes=[],this.discoveredTeleports=new Set,this.visitedCells=new Set,this.lastSavePos=null,this.suppressWakeHuntersBanner=!1;const n=Math.floor(this.player.x),a=Math.floor(this.player.y),o=this.player.z;this.discoveredTeleports.add(`${n},${a},${o}`),this.allTeleports=[];const r=this.mazeGen.size,c=this.mazeGen.TYPES;for(let l=1;l<r;l+=2)for(let u=0;u<r;u++)for(let f=0;f<r;f++)this.maze.get(f,u,l)===c.TELEPORT&&this.allTeleports.push({x:f,y:u,z:l});this.allTeleports.sort((l,u)=>l.z!==u.z?l.z-u.z:l.y!==u.y?l.y-u.y:l.x-u.x),this.selectedTeleportIndex=this.allTeleports.findIndex(l=>l.x===n&&l.y===a&&l.z===o),this.selectedTeleportIndex===-1&&(this.selectedTeleportIndex=0),this.teleportConfirmModalActive=!1,this.teleportModalSelection="go",this.isMouseOrTouchDetected=!1,this.teleportGoBtnClickRect=null,this.isTouchDevice="ontouchstart"in window||navigator.maxTouchPoints>0,this.teleportMeshes=[],this.isTeleportMode=!1,this.teleportCooldownTicks=0,this.inactiveTeleportPos=null,this.floorTransition=null,this.hasSavePoint=!1,this.lastPlayerCell={x:n,y:a,z:o},this.exitPathfinderUnlocked=!1,this.isZoomActive=!0,this.zoomVisibleCells=11,this.lastInputDevice="keyboard",this.staticMapCacheCanvas=document.createElement("canvas"),this.staticMapCacheCtx=this.staticMapCacheCanvas.getContext("2d"),this.staticMapCacheDirty=!0,this.fullyRevealedCells=new Set,this.revealedCellsAnimation=new Map,this.skipCellAnimations=!0,this.populateFullyRevealedCells(this.player.z),this.activeSkipHandler=null,this.activeIntroTimer=null,this.activeContinueTimer=null,this.raycaster=new kp,this.pointer=new Ut,this.exitPathfinderUnlocked=this.checkExitNeighborVisited(),this.initThree(),this.populateVisitedCells(),this.init(i)}populateVisitedCells(){this.visitedCells.clear();const t=this.mazeGen.size;for(let e=0;e<t;e++)for(let i=0;i<t;i++)for(let n=0;n<t;n++){const a=this.maze.get(e,i,n);(a===2||a===3||a===5)&&this.visitedCells.add(`${e},${i},${n}`)}}destroy(){this.isDestroyed=!0,this.hideGameUI(),this.input.destroy(),this.ui.destroy(),window.removeEventListener("keydown",this.handleKeyDownExtra),this.handleKeyboardDetection&&window.removeEventListener("keydown",this.handleKeyboardDetection),window.removeEventListener("resize",this.handleResize),this.activeSkipHandler&&(window.removeEventListener("keydown",this.activeSkipHandler),window.removeEventListener("touchstart",this.activeSkipHandler),this.activeSkipHandler=null),this.activeIntroTimer&&(clearTimeout(this.activeIntroTimer),this.activeIntroTimer=null),this.activeContinueTimer&&(clearTimeout(this.activeContinueTimer),this.activeContinueTimer=null),this.handleStoryKeyDown&&(window.removeEventListener("keydown",this.handleStoryKeyDown),this.handleStoryKeyDown=null);const t=document.getElementById("story-screen");t&&(this.handleStoryClick&&(t.removeEventListener("click",this.handleStoryClick),this.handleStoryClick=null),this.handleStoryTouch&&(t.removeEventListener("touchstart",this.handleStoryTouch),this.handleStoryTouch=null),t.classList.add("hidden")),this.controls&&this.controls.dispose(),this.renderer&&this.renderer.domElement&&(this.renderer.domElement.removeEventListener("click",this.handleCanvasClick),this.renderer.domElement.removeEventListener("pointerdown",this.handlePointerDown),this.renderer.domElement.removeEventListener("pointerup",this.handlePointerUp)),this.renderer&&(this.renderer.dispose(),this.renderer.domElement.remove()),this.ui.uiMobileUp&&(this.ui.uiMobileUp.onclick=null),this.ui.uiMobileDown&&(this.ui.uiMobileDown.onclick=null),this.ui.uiMobileMap&&(this.ui.uiMobileMap.onclick=null),this.pathRevealInterval&&clearInterval(this.pathRevealInterval)}preloadStoryImages(){const t=["assets/images/presentation/1-mystical-church-of-chaos.jpg","assets/images/presentation/2-mystical-church-of-chaos.jpg","assets/images/presentation/3-the-jelly-god.jpg","assets/images/presentation/4-player-alone.jpg","assets/images/presentation/5-player-thrown.jpg"];this.storyImagesLoadedCount=0,this.storyImagesTotalCount=t.length,this.storyImagesPreloadPromise=Promise.all(t.map((e,i)=>new Promise(n=>{const a=new Image;a.src=e,a.onload=()=>{this.preloadedStoryImages[i]=a,this.storyImagesLoadedCount++,n()},a.onerror=()=>{console.warn(`Failed to preload story image: ${e}`),n()}})))}initHunters(t){const e=this.isSafeMode?0:Q.getHunterCount(t);if(e!==0){for(let i=1;i<=e;i++)this.hunters.push(new Zp(this.mazeGen,null,i));this.lastHunterMove=performance.now()}}wakeHunters(){const t=this.mazeGen.size,e=[],i=Math.floor(this.player.x),n=Math.floor(this.player.y),a=this.player.z,o=Math.floor(this.mazeGen.startPos.x),r=Math.floor(this.mazeGen.startPos.y),c=this.mazeGen.startPos.z;for(let m=0;m<t;m++)for(let _=0;_<t;_++)for(let d=0;d<t;d++){const h=m===o&&_===r&&d===c;this.maze.get(m,_,d)===this.mazeGen.TYPES.PATH&&d%2!==0&&!h&&e.push({x:m,y:_,z:d})}if(e.length===0)for(let m=0;m<t;m++)for(let _=0;_<t;_++)for(let d=0;d<t;d++){const h=this.maze.get(m,_,d),x=m===o&&_===r&&d===c,v=h===this.mazeGen.TYPES.EXIT;h!==this.mazeGen.TYPES.WALL&&!v&&d%2!==0&&(m!==i||_!==n||d!==a)&&!x&&e.push({x:m,y:_,z:d})}for(let m=e.length-1;m>0;m--){const _=Math.floor(Math.random()*(m+1)),d=e[m];e[m]=e[_],e[_]=d}const l=(m,_)=>Math.abs(m.x-_.x)+Math.abs(m.y-_.y)+Math.abs(m.z-_.z),u=[],f=this.hunters.filter(m=>m.state==="SLEEP");let p=Math.max(3,Math.floor(t*.45)),g=4;for(;u.length<f.length&&p>0;){u.length=0;const m=e.filter(_=>l(_,{x:i,y:n,z:a})>=p);for(let _=0;_<f.length;_++){let d=null;for(const h of m){if(u.some(v=>v.x===h.x&&v.y===h.y&&v.z===h.z))continue;let x=!0;for(const v of u)if(l(h,v)<g){x=!1;break}if(x){d=h;break}}if(d)u.push(d);else break}u.length<f.length&&(g>1?g--:p--)}if(u.length<f.length)for(const m of e){if(u.length>=f.length)break;u.some(_=>_.x===m.x&&_.y===m.y&&_.z===m.z)||u.push(m)}for(let m=0;m<f.length&&m<u.length;m++){const _=f[m],d=u[m];_.x=d.x,_.y=d.y,_.z=d.z,_.visualX=d.x,_.visualY=d.y,_.visualZ=d.z,_.lastPos={x:d.x,y:d.y,z:d.z},_.state="WANDERING",_.visitedNodes.clear(),_.visitedNodes.add(`${d.x},${d.y},${d.z}`),_.history=[]}this.suppressWakeHuntersBanner||this.ui.showInfoBanner(It("msgVoidHuntersDetected")),this.suppressWakeHuntersBanner=!1,this.staticMapCacheDirty=!0,this.isMap3DActive&&this.build3DMap()}getExitPos(){for(let t=0;t<this.mazeGen.size;t++)for(let e=0;e<this.mazeGen.size;e++)for(let i=0;i<this.mazeGen.size;i++)if(this.maze.get(t,e,i)===this.mazeGen.TYPES.EXIT)return{x:t,y:e,z:i};return{x:1,y:1,z:1}}triggerSave(){ns(this),this.hasSavePoint=!0,this.lastSavePos={x:this.player.x,y:this.player.y,z:this.player.z},this.ui.showSavingIndicator()}triggerVictory(){this.isGameOver=!0,sl();const t=this.getMapVisitedPercentage();this.ui.showVictory(t)}triggerDeath(){this.isGameOver=!0,this.ui.showDeath(this.hasSavePoint)}collectKey(t,e,i){if(this.maze.set(t,e,i,this.mazeGen.TYPES.VISITED),this.visitedCells.add(`${t},${e},${i}`),this.keysCollected++,this.staticMapCacheDirty=!0,this.ui.updateKeysHUD(this.keysCollected,this.totalKeys),this.ui.showInfoBanner(It("msgKeySecured",{collected:this.keysCollected,total:this.totalKeys})),this.keysCollected===this.totalKeys&&(this.ui.showInfoBanner(It("msgExitUnlocked")),this.exitMesh)){this.exitMesh.material.color.setHex(Q.COLORS.THREE_EXIT),this.exitMesh.material.emissive.setHex(Q.COLORS.THREE_EXIT),this.exitMesh.material.emissiveIntensity=.5;const n=this.exitMesh.children[0];n&&this.exitMesh.remove(n)}}triggerLockedExitWarning(){const t=Date.now();if(!this.lastLockedWarningTime||t-this.lastLockedWarningTime>1500){this.lastLockedWarningTime=t;const e=this.totalKeys-this.keysCollected;this.ui.showInfoBanner(It("msgKeysRemaining",{count:e}))}}restoreFromSave(t){this.seed=t.seed,sm(this.mazeGen,t.matrix),this.player.x=t.player.x,this.player.y=t.player.y,this.player.z=t.player.z,this.player.dir=t.player.dir;for(let n=0;n<this.hunters.length&&n<t.hunters.length;n++)nm(this.hunters[n],t.hunters[n]);this.discoveredTeleports=new Set(t.discoveredTeleports),this.inactiveTeleportPos=t.inactiveTeleportPos,this.teleportCooldownTicks=t.teleportCooldownTicks,this.keysCollected=t.keysCollected!==void 0?t.keysCollected:0,this.totalKeys=t.totalKeys!==void 0?t.totalKeys:Q.getHunterCount(this.degree)*2,this.ui.updateKeysHUD(this.keysCollected,this.totalKeys),this.totalPathfinders=t.totalPathfinders!==void 0?t.totalPathfinders:Q.getPathfinderCount(this.degree),this.pathfindersRemaining=t.pathfindersRemaining!==void 0?t.pathfindersRemaining:this.totalPathfinders,this.ui.updatePathfindersHUD(this.pathfindersRemaining,this.totalPathfinders);const e=this.degree>=12?10:this.degree>=8?20:0,i=this.getMapVisitedPercentage();this.pathfinderRewardsGranted=t.pathfinderRewardsGranted!==void 0?t.pathfinderRewardsGranted:e>0?Math.floor(i/e):0,this.revealedPathSet=new Set(t.revealedPathSet),this.mapCompletion100Triggered=t.mapCompletion100Triggered||!1,this.dialogueUpTriggered=t.dialogueUpTriggered||!1,this.dialogueDownTriggered=t.dialogueDownTriggered||!1,this.dialogueWhichWayTriggered=t.dialogueWhichWayTriggered||!1,this.dialogueDetectedTriggered=t.dialogueDetectedTriggered||!1,this.populateVisitedCells(),this.lastSavePos={x:t.player.x,y:t.player.y,z:t.player.z},this.hunterOnSameFloorDetected=t.hunterOnSameFloorDetected||!1,this.hasSavePoint=!0,this.lastPlayerCell={x:Math.floor(this.player.x),y:Math.floor(this.player.y),z:this.player.z},this.populateFullyRevealedCells(this.player.z),this.exitPathfinderUnlocked=this.checkExitNeighborVisited()}checkHunterCollision(){if(this.deathAnimation&&this.deathAnimation.active)return;const t=Math.floor(this.player.x),e=Math.floor(this.player.y),i=this.player.z,n=Math.floor(this.mazeGen.startPos.x),a=Math.floor(this.mazeGen.startPos.y),o=this.mazeGen.startPos.z;if(!(t===n&&e===a&&i===o)){for(const r of this.hunters)if(r.state!=="SLEEP"&&r.x===t&&r.y===e&&r.z===i){r.visualX=r.x,r.visualY=r.y,r.visualZ=r.z,this.isGameOver=!0,this.hideGameUI(),this.ui.showInfoBanner(It("msgKeyDropped")),this.deathAnimation={active:!0,hunter:r,playerPos:{x:this.player.x,y:this.player.y,z:this.player.z},elapsed:0,duration:1.8,screenFilled:!1,reversing:!1,delayElapsed:0,delayDuration:1.5,glitchElapsed:0,glitchDuration:1.5,uiFade:0,uiTriggered:!1};return}}}hideGameUI(){this.ui.hideGameUI(),this.ui.hidePause(),this.canvas.classList.remove("hunted-map-effect"),this.isMap3DActive=!1}initThree(){this.scene=new Fp,this.camera=new Fe(75,window.innerWidth/window.innerHeight,.1,1e3),this.renderer=new jo({antialias:!0,alpha:!0}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.ui.uiMap3dContainer&&this.ui.uiMap3dContainer.appendChild(this.renderer.domElement),this.controls=new Vp(this.camera,this.renderer.domElement),this.controls.enableDamping=!0}init(t=null){this.handleKeyDownExtra=c=>{const l=c.key.toLowerCase();if(l==="escape"){if(this.isMap3DActive){this.isTeleportMode?this.toggleTeleportMap(!1):this.toggleMap3D(),c.preventDefault();return}this.togglePause();return}if(!this.isPaused&&(l==="m"&&(this.isTeleportMode?this.toggleTeleportMap(!1):this.toggleMap3D()),l==="z"&&this.toggleZoom(),this.isMap3DActive&&!this.isIntroPlaying)){if(this.isTeleportMode){if(this.teleportConfirmModalActive){if((l==="a"||l==="arrowleft"||l==="d"||l==="arrowright")&&(this.teleportModalSelection=this.teleportModalSelection==="go"?"cancel":"go",c.preventDefault()),l==="enter"||l===" "||l==="y"){if(this.teleportModalSelection==="go"&&this.selectedTeleportIndex!==null){const f=this.allTeleports[this.selectedTeleportIndex];this.teleportTo(f.x,f.y,f.z),this.toggleTeleportMap(!1)}else this.teleportConfirmModalActive=!1;c.preventDefault()}(l==="escape"||l==="backspace")&&(this.teleportConfirmModalActive=!1,c.preventDefault());return}const u=this.getSelectableTeleportIndices();if(u.length>0){let f=u.indexOf(this.selectedTeleportIndex);if(l==="a"||l==="arrowleft"){f=(f-1+u.length)%u.length,this.selectedTeleportIndex=u[f];const p=this.allTeleports[this.selectedTeleportIndex];this.activeMapFloor=p.z,this.mapCursor={x:p.x,y:p.y,z:p.z},c.preventDefault()}if(l==="d"||l==="arrowright"){f=(f+1)%u.length,this.selectedTeleportIndex=u[f];const p=this.allTeleports[this.selectedTeleportIndex];this.activeMapFloor=p.z,this.mapCursor={x:p.x,y:p.y,z:p.z},c.preventDefault()}if((l==="enter"||l===" "||l==="y")&&this.selectedTeleportIndex!==null){const p=this.allTeleports[this.selectedTeleportIndex],g=Math.floor(this.player.x),m=Math.floor(this.player.y),_=this.player.z,d=p&&p.x===g&&p.y===m&&p.z===_;p&&!d&&(this.teleportTo(p.x,p.y,p.z),this.toggleTeleportMap(!1)),c.preventDefault()}}(l==="escape"||l==="backspace")&&(this.toggleTeleportMap(!1),c.preventDefault());return}if((l==="q"||l==="pagedown")&&(this.activeMapFloor-2>=1&&(this.activeMapFloor-=2),c.preventDefault()),(l==="e"||l==="pageup")&&(this.activeMapFloor+2<=this.mazeGen.size-2&&(this.activeMapFloor+=2),c.preventDefault()),(l==="a"||l==="arrowleft")&&(this.navigateCursor("left"),c.preventDefault()),(l==="d"||l==="arrowright")&&(this.navigateCursor("right"),c.preventDefault()),(l==="w"||l==="arrowup")&&(this.navigateCursor("up"),c.preventDefault()),(l==="s"||l==="arrowdown")&&(this.navigateCursor("down"),c.preventDefault()),l==="enter"||l===" "||l==="y"){const u=this.mapCursor.x,f=this.mapCursor.y,p=this.mapCursor.z;this.getInteractiveElements(this.activeMapFloor).some(_=>_.x===u&&_.y===f&&_.z===p)&&this.triggerPathReveal(u,f,p),c.preventDefault()}}},this.handleResize=()=>this.resize(),this.handleKeyboardDetection=()=>{this.lastInputDevice!=="keyboard"&&(this.lastInputDevice="keyboard",this.ui.updateControlsHint("keyboard",this.mazeGen.size>11)),this.isMouseOrTouchDetected=!1},window.addEventListener("keydown",this.handleKeyDownExtra),window.addEventListener("keydown",this.handleKeyboardDetection),window.addEventListener("resize",this.handleResize);const e=document.getElementById("mobile-zoom-btn");e&&(e.onclick=c=>{c.stopPropagation(),this.toggleZoom()}),this.ui.uiMobileUp&&(this.ui.uiMobileUp.onclick=()=>this.changeFloor(2)),this.ui.uiMobileDown&&(this.ui.uiMobileDown.onclick=()=>this.changeFloor(-2)),this.ui.uiMobileMap&&(this.ui.uiMobileMap.onclick=()=>{if(this.isMap3DActive){this.isTeleportMode?this.toggleTeleportMap(!1):this.toggleMap3D();return}const c=Math.floor(this.player.x),l=Math.floor(this.player.y),u=this.player.z,f=this.maze.get(c,l,u)===this.mazeGen.TYPES.TELEPORT,p=this.inactiveTeleportPos&&this.inactiveTeleportPos.x===c&&this.inactiveTeleportPos.y===l&&this.inactiveTeleportPos.z===u;f&&!p?this.discoveredTeleports.size>=2?this.toggleTeleportMap(!0):this.ui.showInfoBanner(It("msgNoOtherActiveTeleport")):this.toggleMap3D()});let i=!1,n=0,a=0;this.handlePointerDown=c=>{i=!1,n=c.clientX,a=c.clientY},this.handlePointerUp=c=>{const l=c.clientX-n,u=c.clientY-a;Math.sqrt(l*l+u*u)>5&&(i=!0)},this.handleCanvasClick=c=>{i||this.onCanvasClick(c)},this.renderer.domElement.addEventListener("pointerdown",this.handlePointerDown),this.renderer.domElement.addEventListener("pointerup",this.handlePointerUp),this.renderer.domElement.addEventListener("click",this.handleCanvasClick),this.resize(),this.updateFloorUI(),this.hideCanvasInstant(),t?(this.restoreFromSave(t),this.playContinueAnimation()):this.startStorytelling(),this.loop();const o=this.mazeGen.size,r=document.getElementById("mobile-zoom-btn");o<=11?r&&r.classList.add("hidden"):r&&r.classList.remove("hidden"),this.ui.updateControlsHint(this.lastInputDevice,o>11)}hideCanvasInstant(){const t=document.getElementById("map-area-container"),e=document.getElementById("left-hud-panel"),i=document.getElementById("right-hud-panel"),n=document.getElementById("bottom-hud-container");t&&(t.style.transition="none",t.classList.remove("intro-reveal"),t.classList.add("intro-hidden"),t.offsetHeight,t.style.transition=""),e&&(e.style.transition="none",e.classList.remove("intro-reveal"),e.classList.add("intro-hidden"),e.offsetHeight,e.style.transition=""),i&&(i.style.transition="none",i.classList.remove("intro-reveal"),i.classList.add("intro-hidden"),i.offsetHeight,i.style.transition=""),n&&(n.style.transition="none",n.classList.remove("intro-reveal"),n.classList.add("intro-hidden"),n.offsetHeight,n.style.transition="")}drawElevator2D(t,e,i,n,a,o,r,c,l=!1,u=0){const f=e===Math.floor(r)&&i===Math.floor(c);if(f){const d=.85+.15*Math.sin(Date.now()/150);t.save(),t.globalAlpha=d}const p=a&&this.maze.get(e,i,u+1)===this.mazeGen.TYPES.ELEVATOR_VISITED,g=o&&this.maze.get(e,i,u-1)===this.mazeGen.TYPES.ELEVATOR_VISITED;if(l)if(a&&o){let d=!1,h=!1;if(this.activePathReveal){const y=this.activePathReveal.findIndex(T=>T.x===e&&T.y===i&&T.z===u);if(y!==-1&&y<this.activePathReveal.length-1){const T=this.activePathReveal[y+1];T.z>u&&(d=!0),T.z<u&&(h=!0)}}!d&&!h&&(d=this.revealedPathSet.has(`${e},${i},${u+1}`)||this.revealedPathSet.has(`${e},${i},${u+2}`),h=this.revealedPathSet.has(`${e},${i},${u-1}`)||this.revealedPathSet.has(`${e},${i},${u-2}`));const x=d||!d&&!h,v=h||!d&&!h;t.fillStyle=x?Q.COLORS.REVEALED_PATH:p?Q.COLORS.NEON_UP:Q.COLORS.NEON_UP_UNUSED,t.fillRect(e*n,i*n,n,n/2),t.fillStyle=v?Q.COLORS.REVEALED_PATH:g?Q.COLORS.NEON_DOWN:Q.COLORS.NEON_DOWN_UNUSED,t.fillRect(e*n,i*n+n/2,n,n/2)}else t.fillStyle=Q.COLORS.REVEALED_PATH,t.fillRect(e*n,i*n,n,n);else a&&o?(t.fillStyle=p?Q.COLORS.NEON_UP:Q.COLORS.NEON_UP_UNUSED,t.fillRect(e*n,i*n,n,n/2),t.fillStyle=g?Q.COLORS.NEON_DOWN:Q.COLORS.NEON_DOWN_UNUSED,t.fillRect(e*n,i*n+n/2,n,n/2)):a?(t.fillStyle=p?Q.COLORS.NEON_UP:Q.COLORS.NEON_UP_UNUSED,t.fillRect(e*n,i*n,n,n)):(t.fillStyle=g?Q.COLORS.NEON_DOWN:Q.COLORS.NEON_DOWN_UNUSED,t.fillRect(e*n,i*n,n,n));const m=e*n+n/2,_=i*n+n/2;if(t.fillStyle="#000000",a&&o){const d=n*.28,h=_-n/5,x=_+n/5;t.beginPath(),t.moveTo(m,h-d/2),t.lineTo(m-d*.6,h+d/2),t.lineTo(m+d*.6,h+d/2),t.closePath(),t.fill(),t.beginPath(),t.moveTo(m,x+d/2),t.lineTo(m-d*.6,x-d/2),t.lineTo(m+d*.6,x-d/2),t.closePath(),t.fill()}else if(a){const d=n*.45;t.beginPath(),t.moveTo(m,_-d/2),t.lineTo(m-d*.6,_+d/2),t.lineTo(m+d*.6,_+d/2),t.closePath(),t.fill()}else{const d=n*.45;t.beginPath(),t.moveTo(m,_+d/2),t.lineTo(m-d*.6,_-d/2),t.lineTo(m+d*.6,_-d/2),t.closePath(),t.fill()}f&&t.restore()}drawCellShadow2D(t,e,i,n,a,o,r){if(o===4)return;const c=i+1<a&&this.maze.get(e,i+1,r)===0,l=e+1<a&&this.maze.get(e+1,i,r)===0,u=e+1<a&&i+1<a&&this.maze.get(e+1,i+1,r)===0;if(c||l||u){t.fillStyle="rgba(0, 0, 0, 0.4)";const f=n*Q.SHADOW_SIZE_FACTOR;if(c&&t.fillRect(e*n,(i+1)*n-f,n,f),l){const p=c?n-f:n;t.fillRect((e+1)*n-f,i*n,f,p)}!c&&!l&&u&&t.fillRect((e+1)*n-f,(i+1)*n-f,f,f)}}updateRendererSize(){this.renderer&&(this.renderer.setSize(window.innerWidth,window.innerHeight),this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix())}resize(){const e=window.innerHeight>window.innerWidth?window.innerWidth*.82:window.innerHeight*.75;this.canvas.width=e,this.canvas.height=e,this.staticMapCacheDirty=!0,this.updateRendererSize()}getMapVisitedPercentage(){let t=0,e=0;const i=this.mazeGen.size,n=this.mazeGen.TYPES;for(let a=0;a<i;a++)for(let o=0;o<i;o++)for(let r=0;r<i;r++){const c=this.maze.get(a,o,r);if(c===n.WALL||c===n.EXIT||c===n.STATUE)continue;t++,(c===n.VISITED||c===n.START||c===n.ELEVATOR_VISITED||c===n.TELEPORT&&this.discoveredTeleports.has(`${a},${o},${r}`))&&e++}return t===0?0:Math.floor(e/t*100)}updateFloorUI(){const t=Math.floor(this.player.x),e=Math.floor(this.player.y),i=this.player.z,n=i+1<this.mazeGen.size&&this.maze.get(t,e,i+1)!==this.mazeGen.TYPES.WALL,a=i-1>=0&&this.maze.get(t,e,i-1)!==this.mazeGen.TYPES.WALL;this.ui.updateFloor(i,n,a);const o=this.getMapVisitedPercentage();this.ui.updateVisitedPercent(o),o===100&&!this.mapCompletion100Triggered&&(this.ui.showInfoBanner(It("msgWorldSaved")),this.mapCompletion100Triggered=!0),this.checkPathfinderRewards(o)}checkPathfinderRewards(t){const e=this.degree>=12?10:this.degree>=8?20:0;if(e===0)return;this.pathfinderRewardsGranted===void 0&&(this.pathfinderRewardsGranted=0);const i=Math.floor(t/e);if(i>this.pathfinderRewardsGranted){const n=i-this.pathfinderRewardsGranted;this.pathfindersRemaining+=n,this.totalPathfinders+=n,this.pathfinderRewardsGranted=i,this.ui.updatePathfindersHUD(this.pathfindersRemaining,this.totalPathfinders),this.ui.showInfoBanner(It("msgFoundPathfinder")),ns(this)}}getTeleportCandidates(){const t=Math.floor(this.player.x),e=Math.floor(this.player.y),i=this.player.z;return Array.from(this.discoveredTeleports).map(n=>{const[a,o,r]=n.split(",").map(Number);return{x:a,y:o,z:r}}).filter(n=>!(n.x===t&&n.y===e&&n.z===i||this.inactiveTeleportPos&&this.inactiveTeleportPos.x===n.x&&this.inactiveTeleportPos.y===n.y&&this.inactiveTeleportPos.z===n.z))}getSelectableTeleportIndices(){const t=Math.floor(this.player.x),e=Math.floor(this.player.y),i=this.player.z;return this.allTeleports.map((n,a)=>({t:n,idx:a})).filter(n=>{const a=`${n.t.x},${n.t.y},${n.t.z}`,o=this.discoveredTeleports.has(a),r=this.inactiveTeleportPos&&n.t.x===this.inactiveTeleportPos.x&&n.t.y===this.inactiveTeleportPos.y&&n.t.z===this.inactiveTeleportPos.z,c=n.t.x===t&&n.t.y===e&&n.t.z===i;return o&&!r&&!c}).map(n=>n.idx)}updateGamepad(t){const e=navigator.getGamepads?navigator.getGamepads():[],i=e[0]||e.find(_=>_!==null);if(!i)return;const n=.25;(Math.abs(i.axes[0])>n||Math.abs(i.axes[1])>n||i.axes[2]!==void 0&&Math.abs(i.axes[2])>n||i.axes[3]!==void 0&&Math.abs(i.axes[3])>n||i.buttons.some(_=>_.pressed))&&(this.isMouseOrTouchDetected=!1,this.lastInputDevice!=="gamepad"&&(this.lastInputDevice="gamepad",this.ui.updateControlsHint("gamepad",this.mazeGen.size>11)));const o=i.axes[0],r=i.axes[1];let c=o<-n,l=o>n,u=r<-n,f=r>n;if(i.buttons[12]&&i.buttons[12].pressed&&(u=!0),i.buttons[13]&&i.buttons[13].pressed&&(f=!0),i.buttons[14]&&i.buttons[14].pressed&&(c=!0),i.buttons[15]&&i.buttons[15].pressed&&(l=!0),c?this.input.keys.arrowleft=!0:this.lastInputDevice==="gamepad"&&(this.input.keys.arrowleft=!1),l?this.input.keys.arrowright=!0:this.lastInputDevice==="gamepad"&&(this.input.keys.arrowright=!1),u?this.input.keys.arrowup=!0:this.lastInputDevice==="gamepad"&&(this.input.keys.arrowup=!1),f?this.input.keys.arrowdown=!0:this.lastInputDevice==="gamepad"&&(this.input.keys.arrowdown=!1),!this.prevGamepadButtons){this.prevGamepadButtons=i.buttons.map(_=>_.pressed);return}const p=_=>this.prevGamepadButtons[_],g=_=>i.buttons[_]&&i.buttons[_].pressed,m=_=>g(_)&&!p(_);if(this.isStoryActive){if(m(9))this.skipStory();else if(!this.isPreloadingActive){for(let _=0;_<i.buttons.length;_++)if(_!==9&&m(_)){this.triggerAdvanceStory();break}}this.prevGamepadButtons=i.buttons.map(_=>_.pressed);return}if(m(9)){this.togglePause(),this.prevGamepadButtons=i.buttons.map(_=>_.pressed);return}if(this.isPaused){this.prevGamepadButtons=i.buttons.map(_=>_.pressed);return}if(this.isMap3DActive&&!this.isIntroPlaying){const _=g(7),d=g(6);if(_||d){const T=this.mazeGen.size;let A=window.innerWidth*.7/T;A=Math.max(20,Math.min(48,A));const S=A*this.mapZoom,I=S/2,M=S/4,b=I*5,F=window.innerWidth/2+this.mapPanOffsetX,D=window.innerHeight/2+this.mapPanOffsetY,Y=this.mapCursor.x,R=this.mapCursor.y,U=this.mapCursor.z,G=this.visualActiveFloor,Z=(Y-R)*I+F,V=(Y+R)*M-(U-G)*b+D,W=this.mapZoom,J=1.025;let it=_?W*J:W/J;if(it=Math.max(.5,Math.min(4,it)),it!==W){const nt=it/W;this.mapPanOffsetX=Z-(Z-(window.innerWidth/2+this.mapPanOffsetX))*nt-window.innerWidth/2,this.mapPanOffsetY=V-(V-(window.innerHeight/2+this.mapPanOffsetY))*nt-window.innerHeight/2,this.mapZoom=it}}const h=c&&(!this.prevGamepadStick||!this.prevGamepadStick.left),x=l&&(!this.prevGamepadStick||!this.prevGamepadStick.right),v=u&&(!this.prevGamepadStick||!this.prevGamepadStick.up),y=f&&(!this.prevGamepadStick||!this.prevGamepadStick.down);if(this.prevGamepadStick={left:c,right:l,up:u,down:f},this.isTeleportMode){if(this.teleportConfirmModalActive){if((h||m(14)||x||m(15))&&(this.teleportModalSelection=this.teleportModalSelection==="go"?"cancel":"go"),m(0)||m(3)||m(2))if(this.teleportModalSelection==="go"){const T=this.allTeleports[this.selectedTeleportIndex];this.teleportTo(T.x,T.y,T.z),this.toggleTeleportMap(!1)}else this.teleportConfirmModalActive=!1;m(1)&&(this.teleportConfirmModalActive=!1)}else{const T=this.getSelectableTeleportIndices();if(T.length>0){let A=T.indexOf(this.selectedTeleportIndex);if(h||m(14)){A=(A-1+T.length)%T.length,this.selectedTeleportIndex=T[A];const S=this.allTeleports[this.selectedTeleportIndex];this.activeMapFloor=S.z,this.mapCursor={x:S.x,y:S.y,z:S.z}}if(x||m(15)){A=(A+1)%T.length,this.selectedTeleportIndex=T[A];const S=this.allTeleports[this.selectedTeleportIndex];this.activeMapFloor=S.z,this.mapCursor={x:S.x,y:S.y,z:S.z}}if(m(0)||m(3)||m(2)){const S=this.allTeleports[this.selectedTeleportIndex],I=Math.floor(this.player.x),M=Math.floor(this.player.y),b=this.player.z,F=S&&S.x===I&&S.y===M&&S.z===b;S&&!F&&(this.teleportTo(S.x,S.y,S.z),this.toggleTeleportMap(!1))}}(m(1)||m(8))&&this.toggleTeleportMap(!1)}this.prevGamepadButtons=i.buttons.map(T=>T.pressed);return}if((h||m(14))&&this.navigateCursor("left"),(x||m(15))&&this.navigateCursor("right"),(v||m(12))&&this.navigateCursor("up"),(y||m(13))&&this.navigateCursor("down"),(m(0)||m(4))&&this.activeMapFloor-2>=1&&(this.activeMapFloor-=2),m(5)&&this.activeMapFloor+2<=this.mazeGen.size-2&&(this.activeMapFloor+=2),m(3)||m(2)){const T=this.mapCursor.x,A=this.mapCursor.y,S=this.mapCursor.z;this.getInteractiveElements(this.activeMapFloor).some(b=>b.x===T&&b.y===A&&b.z===S)&&this.triggerPathReveal(T,A,S)}(m(1)||m(8))&&this.toggleMap3D(),this.prevGamepadButtons=i.buttons.map(T=>T.pressed);return}if(m(0)){if(this.isTeleportMode){const d=this.getTeleportCandidates()[this.gamepadTeleportSelectedIndex];d&&this.teleportTo(d.x,d.y,d.z)}else if(!this.isMap3DActive){const _=Math.floor(this.player.x),d=Math.floor(this.player.y),h=this.player.z,x=h>0&&this.maze.get(_,d,h-1)!==0,y=this.maze.get(_,d,h)===this.mazeGen.TYPES.TELEPORT,T=this.inactiveTeleportPos&&this.inactiveTeleportPos.x===_&&this.inactiveTeleportPos.y===d&&this.inactiveTeleportPos.z===h;(!(y&&this.discoveredTeleports.has(`${_},${d},${h}`))||T)&&x&&this.changeFloor(-2)}}if(m(1)&&(this.isTeleportMode?this.toggleTeleportMap(!1):this.toggleZoom()),m(2)&&!this.isTeleportMode&&!this.isMap3DActive){const _=Math.floor(this.player.x),d=Math.floor(this.player.y),h=this.player.z,v=this.maze.get(_,d,h)===this.mazeGen.TYPES.TELEPORT,y=this.inactiveTeleportPos&&this.inactiveTeleportPos.x===_&&this.inactiveTeleportPos.y===d&&this.inactiveTeleportPos.z===h;v&&this.discoveredTeleports.has(`${_},${d},${h}`)&&!y&&(this.discoveredTeleports.size>=2?(this.toggleTeleportMap(!0),this.gamepadTeleportSelectedIndex=0):this.ui.showInfoBanner(It("msgNoOtherActiveTeleport")))}if(m(3)&&!this.isTeleportMode&&!this.isMap3DActive){const _=Math.floor(this.player.x),d=Math.floor(this.player.y),h=this.player.z,x=h<this.mazeGen.size-1&&this.maze.get(_,d,h+1)!==0,y=this.maze.get(_,d,h)===this.mazeGen.TYPES.TELEPORT,T=this.inactiveTeleportPos&&this.inactiveTeleportPos.x===_&&this.inactiveTeleportPos.y===d&&this.inactiveTeleportPos.z===h;(!(y&&this.discoveredTeleports.has(`${_},${d},${h}`))||T)&&x&&this.changeFloor(2)}if(m(8)&&(this.isTeleportMode?this.toggleTeleportMap(!1):this.toggleMap3D()),this.isTeleportMode){const _=m(4)||m(14),d=m(5)||m(15);if(_||d){const h=this.getTeleportCandidates();h.length>0&&(_?this.gamepadTeleportSelectedIndex=(this.gamepadTeleportSelectedIndex-1+h.length)%h.length:this.gamepadTeleportSelectedIndex=(this.gamepadTeleportSelectedIndex+1)%h.length)}}if(this.isMap3DActive&&this.controls){const _=i.axes[2],d=i.axes[3],h=i.buttons[7]?i.buttons[7].value:0,x=i.buttons[6]?i.buttons[6].value:0,v=.15,y=.15,T=(Q.ROT_SPEED!==void 0?Q.ROT_SPEED:2)*t,A=20*t,S=Math.abs(_)>v||Math.abs(d)>v,I=h>y||x>y;if(S||I){const M=new $().copy(this.camera.position).sub(this.controls.target),b=new va().setFromVector3(M);if(Math.abs(_)>v&&(b.theta-=_*T),Math.abs(d)>v){b.phi-=d*T;const Y=this.controls.minPolarAngle||0,R=this.controls.maxPolarAngle||Math.PI;b.phi=Math.max(Y,Math.min(R,b.phi))}h>y&&(b.radius-=h*A),x>y&&(b.radius+=x*A);const F=this.controls.minDistance||2,D=this.controls.maxDistance||100;b.radius=Math.max(F,Math.min(D,b.radius)),b.makeSafe(),M.setFromSpherical(b),this.camera.position.copy(this.controls.target).add(M),this.controls.update()}}this.prevGamepadButtons=i.buttons.map(_=>_.pressed)}queueNotification(t){this.notificationQueue.push(t)}updateNotification(t){if(!this.activeNotification){if(this.notificationQueue.length>0){const i=this.notificationQueue.shift();this.activeNotification={text:i,displayText:"",state:"OPENING",widthProgress:0,typeTimer:0,charIndex:0,waitTimer:0,closeProgress:1}}return}const e=this.activeNotification;e.state==="OPENING"?(e.widthProgress+=t/.15,e.widthProgress>=1&&(e.widthProgress=1,e.state="TYPING")):e.state==="TYPING"?(e.typeTimer+=t,e.typeTimer>=.025&&(e.typeTimer=0,e.charIndex++,e.displayText=e.text.substring(0,e.charIndex),e.charIndex>=e.text.length&&(e.state="WAITING",e.waitTimer=0))):e.state==="WAITING"?(this.isZoomTransitionActive||(e.waitTimer+=t),e.waitTimer>=1&&(e.state="CLOSING",e.closeProgress=1)):e.state==="CLOSING"&&(e.closeProgress-=t/.15,e.closeProgress<=0&&(e.closeProgress=0,this.activeNotification=null))}update(t){if(this.isGameOver||this.isDestroyed||!t)return;if(this.isStoryActive){this.updateGamepad(t),this.updateStory(t);return}if(this.isZoomTransitionActive&&(this.zoomTransitionTimer-=t,this.zoomTransitionTimer<=0&&(this.isZoomTransitionActive=!1,this.zoomTransitionTimer=0)),this.updateNotification(t),this.updateGamepad(t),this.isPaused)return;this.isIntroPlaying||this.hunters.some(o=>o.state!=="SLEEP"&&o.z===this.player.z)&&(this.hunterOnSameFloorDetected||(this.ui.showInfoBanner(It("msgDidYouHearThat")),this.hunterOnSameFloorDetected=!0)),this.hunters.some(a=>a.state==="SLEEP")&&this.getMapVisitedPercentage()>=10&&this.wakeHunters();const i=1e3/Q.HUNTER_SPEED*t;for(const a of this.hunters)a.visualX===null&&(a.visualX=a.x),a.visualY===null&&(a.visualY=a.y),a.visualZ===null&&(a.visualZ=a.z),!(a.x===null||a.y===null||a.z===null)&&(a.visualX=na(a.visualX,a.x,i),a.visualY=na(a.visualY,a.y,i),a.visualZ=na(a.visualZ,a.z,i*2),a.generateCloudTexture(t));if(this.isMap3DActive){this.controls&&this.controls.update();const a=this.mazeGen.size,o=this.isTeleportMode?.25:1;for(const r of this.hunterMeshes){const c=r.hunter,l=r.mesh;if(c.visualX===null||c.visualZ===null||c.visualY===null)continue;l.position.set(c.visualX-a/2,(c.visualZ-a/2)*this.vScale,c.visualY-a/2);const u=c.jellyTime,f=1+Math.sin(u*1.2)*.07,p=1+Math.cos(u*.8)*.07,g=1+Math.sin(u*1.5)*.07;r.coreMesh&&(r.coreMesh.scale.set(f,p,g),r.coreMesh.material&&(r.coreMesh.material.emissiveIntensity=(.8+.2*Math.sin(u*3)+(Math.random()<.1?(Math.random()-.5)*.4:0))*o)),r.particles&&r.particles.forEach(x=>{const v=x.userData;v.angle+=v.speed*t;const y=Math.cos(v.angle)*v.radius,T=Math.sin(v.angle)*v.radius,A=Math.sin(v.angle*2+v.phaseY)*.25;let S=0,I=0,M=0;Math.random()<.15?(S=(Math.random()-.5)*.12,I=(Math.random()-.5)*.12,M=(Math.random()-.5)*.12,x.scale.set(1.4+Math.random()*.4,.6+Math.random()*.3,1.4+Math.random()*.4)):x.scale.set(1,1,1),x.position.set(y+S,A+I,T+M)});const m=c.x-c.visualX,_=c.y-c.visualY,d=Math.sqrt(m*m+_*_),h=Math.max(0,Math.min(1,1-d));if(c.lastPos&&(c.lastPos.x!==c.x||c.lastPos.y!==c.y)){r.trail1.position.set(c.lastPos.x-a/2,(c.lastPos.z-a/2)*this.vScale,c.lastPos.y-a/2),r.trail1.visible=!0;const x=c.jellyTime-.2,v=.95-h*.47,y=v*(1+Math.sin(x*1.2)*.07),T=v*(1+Math.cos(x*.8)*.07),A=v*(1+Math.sin(x*1.5)*.07);r.trail1.scale.set(y,T,A),r.trail1.material&&(r.trail1.material.opacity=(.4-h*.2)*o)}else r.trail1.visible=!1;if(c.history&&c.history.length===2){const x=c.history[0];r.trail2.position.set(x.x-a/2,(x.z-a/2)*this.vScale,x.y-a/2);const v=.48*(1-h);if(v>.02){r.trail2.visible=!0;const y=c.jellyTime-.4,T=v*(1+Math.sin(y*1.2)*.07),A=v*(1+Math.cos(y*.8)*.07),S=v*(1+Math.sin(y*1.5)*.07);r.trail2.scale.set(T,A,S),r.trail2.material&&(r.trail2.material.opacity=.2*(1-h)*o)}else r.trail2.visible=!1}else r.trail2.visible=!1}if(this.keyMeshes)for(const r of this.keyMeshes)r.rotation.y+=1.5*t,r.rotation.x+=.5*t;if(this.isTeleportMode&&this.teleportMeshes&&this.gamepadTeleportSelectedIndex!==void 0){const c=this.getTeleportCandidates()[this.gamepadTeleportSelectedIndex];this.teleportMeshes.forEach(l=>{const{gridX:u,gridY:f,gridZ:p}=l.userData;if(c&&u===c.x&&f===c.y&&p===c.z){const m=1.3+.25*Math.sin(Date.now()/100);l.scale.set(m,m,m),l.material&&l.material.emissive&&(l.material.emissive.setHex(16755200),l.material.emissiveIntensity=3.5)}else{const m=u===Math.floor(this.player.x)&&f===Math.floor(this.player.y)&&p===this.player.z,_=this.inactiveTeleportPos&&this.inactiveTeleportPos.x===u&&this.inactiveTeleportPos.y===f&&this.inactiveTeleportPos.z===p;let d=1;m&&(d=1.4),l.scale.set(d,d,d),l.material&&l.material.emissive&&(_?(l.material.emissive.setHex(4473924),l.material.emissiveIntensity=0):m?(l.material.emissive.setHex(65535),l.material.emissiveIntensity=3):(l.material.emissive.setHex(Q.COLORS.THREE_TELEPORT),l.material.emissiveIntensity=2.5))}})}}if(!this.isMap3DActive&&!this.isZoomTransitionActive){let a=0,o=0;const l=1e3/Q.HUNTER_SPEED*Q.MOVE_SPEED_FACTOR*t;let u=0,f=0;if(this.input.touchMoveVector?(u=this.input.touchMoveVector.x,f=this.input.touchMoveVector.y):((this.input.keys.w||this.input.keys.arrowup)&&(f-=1),(this.input.keys.s||this.input.keys.arrowdown)&&(f+=1),(this.input.keys.a||this.input.keys.arrowleft)&&(u-=1),(this.input.keys.d||this.input.keys.arrowright)&&(u+=1)),u!==0||f!==0){const y=Math.sqrt(u*u+f*f);a=u/y*l,o=f/y*l,this.player.dir=Math.atan2(o,a)}let p=!1;if(a!==0||o!==0){p=!0;const y=.01,T=Math.abs(a)>y,A=Math.abs(o)>y;T&&A?(this.playerSide=a>0?"right":"left",this.playerVertical=o>0?"down":"up"):T?this.playerSide=a>0?"right":"left":A&&(this.playerVertical=o>0?"down":"up")}if(p?(this.playerWalkCycle=(this.playerWalkCycle||0)+t*18,this.playerSquashTargetX=1+Math.sin(this.playerWalkCycle)*.15,this.playerSquashTargetY=1-Math.sin(this.playerWalkCycle)*.15):(this.playerSquashTargetX=1,this.playerSquashTargetY=1),this.playerSquashX=this.playerSquashX||1,this.playerSquashY=this.playerSquashY||1,this.playerSquashX+=(this.playerSquashTargetX-this.playerSquashX)*.25,this.playerSquashY+=(this.playerSquashTargetY-this.playerSquashY)*.25,a!==0||o!==0){const y=Math.floor(this.player.x),T=Math.floor(this.player.y),A=this.player.x+a,S=this.player.y+o,I=(W,J,it)=>{const nt=this.maze.get(W,J,it);return nt===this.mazeGen.TYPES.WALL||nt===this.mazeGen.TYPES.STATUE?!1:nt===this.mazeGen.TYPES.EXIT&&this.keysCollected<this.totalKeys?(this.triggerLockedExitWarning(),!1):!0},M=Q.PLAYER_COLLISION_RADIUS,b=Q.PLAYER_COLLISION_OFFSET_X||0,F=Q.PLAYER_COLLISION_OFFSET_Y||0,D=(W,J,it)=>{const nt=Math.floor(W+b-M),X=Math.floor(W+b+M),C=Math.floor(J+F-M),z=Math.floor(J+F+M);for(let q=nt;q<=X;q++)for(let B=C;B<=z;B++)if(q<0||q>=this.mazeGen.size||B<0||B>=this.mazeGen.size||!I(q,B,it))return!1;return!0};D(A,this.player.y,this.player.z)&&(this.player.x=A),D(this.player.x,S,this.player.z)&&(this.player.y=S);const Y=Math.floor(this.player.x),R=Math.floor(this.player.y),U=this.player.z;if(Y!==y||R!==T){const W=this.maze.get(y,T,U);if(W===this.mazeGen.TYPES.VISITED||W===this.mazeGen.TYPES.START||W===this.mazeGen.TYPES.TELEPORT){const it=U+1<this.mazeGen.size&&this.maze.get(Y,R,U+1)!==this.mazeGen.TYPES.WALL,nt=U-1>=0&&this.maze.get(Y,R,U-1)!==this.mazeGen.TYPES.WALL;it&&nt?this.dialogueWhichWayTriggered||(this.ui.showInfoBanner(It("msgWhichWay")),this.dialogueWhichWayTriggered=!0):it?this.dialogueUpTriggered||(this.ui.showInfoBanner(It("msgElevatorUp")),this.dialogueUpTriggered=!0):nt&&(this.dialogueDownTriggered||(this.ui.showInfoBanner(It("msgElevatorDown")),this.dialogueDownTriggered=!0))}}const Z=(W,J,it)=>{const nt=this.maze.get(W,J,it);(nt===this.mazeGen.TYPES.PATH||nt===this.mazeGen.TYPES.KEY)&&(nt===this.mazeGen.TYPES.KEY?this.collectKey(W,J,it):(this.maze.set(W,J,it,this.mazeGen.TYPES.VISITED),this.visitedCells.add(`${W},${J},${it}`)),this.staticMapCacheDirty=!0)};Z(Y,R,U),Y!==y&&R!==T&&(Z(Y,T,U),Z(y,R,U));const V=this.maze.get(Y,R,U);!this.exitPathfinderUnlocked&&this.checkExitNeighborVisited()&&(this.exitPathfinderUnlocked=!0,this.ui.showInfoBanner(It("msgExitFound"))),V===this.mazeGen.TYPES.EXIT&&this.triggerVictory()}if((a!==0||o!==0)&&(this.skipCellAnimations=!1),this.checkHunterCollision(),this.isGameOver)return;const g=Math.floor(this.player.x),m=Math.floor(this.player.y),_=this.player.z,d=this.maze.get(g,m,_)===this.mazeGen.TYPES.TELEPORT,h=this.inactiveTeleportPos&&this.inactiveTeleportPos.x===g&&this.inactiveTeleportPos.y===m&&this.inactiveTeleportPos.z===_;if(g>=0&&g<this.mazeGen.size&&m>=0&&m<this.mazeGen.size){if(this.maze.get(g,m,_)===this.mazeGen.TYPES.PATH)this.maze.set(g,m,_,this.mazeGen.TYPES.VISITED),this.visitedCells.add(`${g},${m},${_}`),this.staticMapCacheDirty=!0;else if(d){const I=`${g},${m},${_}`;!(this.lastPlayerCell&&this.lastPlayerCell.x===g&&this.lastPlayerCell.y===m&&this.lastPlayerCell.z===_)&&!h&&(this.discoveredTeleports.add(I),this.staticMapCacheDirty=!0,this.triggerSave(),this.ui.showInfoBanner(It("msgSafePointTeleport")))}const y=_<this.mazeGen.size-1&&this.maze.get(g,m,_+1)!==this.mazeGen.TYPES.WALL,T=_>0&&this.maze.get(g,m,_-1)!==this.mazeGen.TYPES.WALL,A=y||T;if(this.lastPlayerCell){const I=this.lastPlayerCell.x,M=this.lastPlayerCell.y,b=this.lastPlayerCell.z,F=b<this.mazeGen.size-1&&this.maze.get(I,M,b+1)!==this.mazeGen.TYPES.WALL,D=b>0&&this.maze.get(I,M,b-1)!==this.mazeGen.TYPES.WALL;if((F||D)&&(I!==g||M!==m||b!==_)){const U=`${I},${M},${b}`;this.revealedPathSet.has(U)&&(this.revealedPathSet.delete(U),this.staticMapCacheDirty=!0)}}const S=`${g},${m},${_}`;!A&&this.revealedPathSet.has(S)&&(this.revealedPathSet.delete(S),this.staticMapCacheDirty=!0)}d&&!h?(this.input.keys.e||this.input.keys.pageup||this.input.keys.q||this.input.keys.pagedown)&&(["e","q","pageup","pagedown"].forEach(y=>this.input.keys[y]=!1),this.discoveredTeleports.size>=2?this.toggleTeleportMap(!0):this.ui.showInfoBanner(It("msgNoOtherActiveTeleport"))):((this.input.keys.e||this.input.keys.pageup)&&this.changeFloor(2),(this.input.keys.q||this.input.keys.pagedown)&&this.changeFloor(-2)),(!this.lastPlayerCell||this.lastPlayerCell.x!==g||this.lastPlayerCell.y!==m||this.lastPlayerCell.z!==_)&&(this.staticMapCacheDirty=!0);const v=window.innerHeight>window.innerWidth;this.ui.updateMobileMapButton(d,!!h,v),this.updateFloorUI(),this.lastPlayerCell={x:g,y:m,z:_}}const n=performance.now();if(n-this.lastHunterMove>Q.HUNTER_SPEED){if(this.lastHunterMove=n,this.teleportCooldownTicks>0&&(this.teleportCooldownTicks--,this.staticMapCacheDirty=!0,this.teleportCooldownTicks===0)){this.inactiveTeleportPos=null;for(const m of this.hunters){const _=this.maze.get(m.x,m.y,m.z);if(_===this.mazeGen.TYPES.VISITED||_===this.mazeGen.TYPES.START||_===this.mazeGen.TYPES.EXIT){const d=m.state;m.state="TRACKING",d!=="TRACKING"&&!this.dialogueDetectedTriggered&&(this.ui.showInfoBanner(It("msgIWasDetected")),this.dialogueDetectedTriggered=!0)}else m.state="WANDERING",m.pathToTarget=[],m.visitedNodes.clear(),m.visitedNodes.add(`${m.x},${m.y},${m.z}`)}}let a=0,o=0;const r=this.hunters.some(m=>m.state==="SLEEP");for(const m of this.hunters){if(m.state==="SLEEP")continue;const _=m.state;m.move(this.player,this.maze,this.mazeGen.TYPES),m.state==="TRACKING"&&_!=="TRACKING"&&!this.dialogueDetectedTriggered&&(this.ui.showInfoBanner(It("msgIWasDetected")),this.dialogueDetectedTriggered=!0),(m.state==="TRACKING"||m.state==="TELEPORT_TRACKING")&&a++;const d=m.z===this.player.z;let h=!1;if(d)h=!0;else{const x=Math.max(5,Math.floor(this.degree*1.2));$p({x:m.x,y:m.y,z:m.z},{x:Math.floor(this.player.x),y:Math.floor(this.player.y),z:this.player.z},this.maze,this.mazeGen.size,this.mazeGen.TYPES.WALL,x,this.mazeGen.startPos)<=x&&(h=!0)}if(h&&o++,this.checkHunterCollision(),this.isGameOver)return}const c=a>0;this.ui.updateHazardWarning(c,this.teleportCooldownTicks,this.isSafeMode,r),c?this.canvas.classList.add("hunted-map-effect"):this.canvas.classList.remove("hunted-map-effect"),this.ui.setNearbyWarning(o>0);let l=1/0;const u=Math.floor(this.player.x),f=Math.floor(this.player.y),p=this.player.z,g=this.hunters.filter(m=>m.state!=="SLEEP");for(const m of g){const _=Kp({x:m.x,y:m.y,z:m.z},{x:u,y:f,z:p},this.maze,this.mazeGen.size,this.mazeGen.TYPES.WALL);_<l&&(l=_)}this.ui.updateProximeter(l,g.length,this.isGameOver)}}changeFloor(t){if(this.isGameOver||this.floorTransition)return;this.skipCellAnimations=!0;const e=Math.floor(this.player.x),i=Math.floor(this.player.y),n=this.player.z,a=n+1<this.mazeGen.size&&this.maze.get(e,i,n+1)!==this.mazeGen.TYPES.WALL&&this.maze.get(e,i,n+1)!==this.mazeGen.TYPES.STATUE,o=n-1>=0&&this.maze.get(e,i,n-1)!==this.mazeGen.TYPES.WALL&&this.maze.get(e,i,n-1)!==this.mazeGen.TYPES.STATUE;if(t>0&&a||t<0&&o){const r=n+t;if(r>=0&&r<this.mazeGen.size&&this.maze.get(e,i,r)!==this.mazeGen.TYPES.WALL&&this.maze.get(e,i,r)!==this.mazeGen.TYPES.STATUE){const c=n+t/2;this.maze.get(e,i,c)!==this.mazeGen.TYPES.ELEVATOR_VISITED&&(this.maze.set(e,i,c,this.mazeGen.TYPES.ELEVATOR_VISITED),this.staticMapCacheDirty=!0);const l=`${e},${i},${c}`;this.revealedPathSet.delete(l);const u=document.createElement("canvas");u.width=this.canvas.width,u.height=this.canvas.height;const f=u.getContext("2d");this.renderMapToContext(f,this.player.z),this.player.x=e+Q.PLAYER_START_X,this.player.y=i+Q.PLAYER_START_Y%1,this.player.z=r,this.staticMapCacheDirty=!0,this.populateFullyRevealedCells(r),this.maze.get(e,i,r)===this.mazeGen.TYPES.PATH&&this.maze.set(e,i,r,this.mazeGen.TYPES.VISITED);const p=document.createElement("canvas");p.width=this.canvas.width,p.height=this.canvas.height;const g=p.getContext("2d");this.renderMapToContext(g,this.player.z),this.floorTransition={canvasOld:u,canvasNew:p,progress:0,duration:.4,delta:t},this.updateFloorUI(),this.draw2DMap(0),this.maze.get(e,i,r)===this.mazeGen.TYPES.EXIT&&this.triggerVictory()}}}toggleMap3D(){this.isMap3DActive=!this.isMap3DActive,this.isTeleportMode=!1;const t=document.getElementById("mobile-teleport-exit-btn");if(t&&t.classList.add("hidden"),this.isMap3DActive){this.ui.setMap3DVisible(!0),this.activeMapFloor=this.player.z,this.visualActiveFloor=this.player.z,this.mapCursor={x:Math.floor(this.player.x),y:Math.floor(this.player.y),z:this.player.z},this.mapZoom=1,this.mapPanOffsetX=0,this.mapPanOffsetY=0,this.renderer&&this.renderer.domElement&&(this.renderer.domElement.style.display="none");const e=document.getElementById("map3d-instructions");e&&(e.style.display="none"),this.isometricCanvas||this.initIsometricCanvas(),this.isometricCanvas.style.display="block"}else this.ui.uiMobileControls&&this.ui.uiMobileControls.classList.remove("hidden"),this.ui.setMap3DVisible(!1),this.isometricCanvas&&(this.isometricCanvas.style.display="none")}build3DMap(t=!1){for(;this.scene.children.length>0;)this.scene.remove(this.scene.children[0]);this.scene.add(new ho(16777215,.6));const e=new co(16777215,.4);e.position.set(10,20,10),this.scene.add(e),this.pulsatingMaterials=[],this.hunterMeshes=[],this.teleportMeshes=[],this.knownMeshes=[],this.keyMeshes=[],this.exitMesh=null;const i=this.mazeGen.size,n=(x,v,y)=>{if(y<0||y>=i)return!1;const T=this.maze.get(x,v,y);return T===2||T===3||T===4||T===this.mazeGen.TYPES.TELEPORT&&this.discoveredTeleports.has(`${x},${v},${y}`)||this.visitedCells.has(`${x},${v},${y}`)};this.gridMeshes=new Array(i*i*i).fill(null);const a=new we(.9,.9,.9),o=this.isTeleportMode?Q.TELEPORT_MAP_OPACITY:1,r=new we(.9,.425,.9),c=new we(.9,.425,.9),l=new fs(.35,.35,2*this.vScale,8);new ne({color:Q.COLORS.THREE_VISITED,transparent:!0,opacity:.8*o});for(let x=0;x<i;x++)for(let v=0;v<i;v++)for(let y=0;y<i;y++){const T=this.maze.get(x,v,y);if(T===this.mazeGen.TYPES.WALL||T===this.mazeGen.TYPES.STATUE)continue;if(y%2===0&&T!==0){const U=`${x},${v},${y}`,G=this.revealedPathSet.has(U),Z=T===this.mazeGen.TYPES.ELEVATOR_VISITED,V=T===1&&(n(x,v,y-1)||n(x,v,y+1));if(Z||V||G||t){let W;if(G)W=new ne({color:16777215,transparent:!0,opacity:.95*o,emissive:16777215,emissiveIntensity:2*o});else if(Z)W=new ne({color:Q.COLORS.THREE_VISITED,transparent:!0,opacity:.8*o});else if(V||t){const it=t?Q.COLORS.THREE_VISITED:Q.COLORS.THREE_KNOWN;W=new ne({color:it,transparent:!0,opacity:t?.72:.6*o,emissive:it,emissiveIntensity:t?0:.5*o}),t||this.pulsatingMaterials.push(W)}const J=new te(l,W);J.position.set(x-i/2,(y-i/2)*this.vScale,v-i/2),this.scene.add(J),this.gridMeshes[x*i*i+v*i+y]=J,V&&!G&&(J.userData={gridX:x,gridY:v,gridZ:y},this.knownMeshes.push(J))}continue}const S=T===this.mazeGen.TYPES.TELEPORT,I=S&&this.discoveredTeleports.has(`${x},${v},${y}`),M=T===2||T===3||T===4||T===5||I,b=(T===1||S&&!I)&&this.isNearVisited(x,v,y);if(I){if(x===Math.floor(this.mazeGen.startPos.x)&&v===Math.floor(this.mazeGen.startPos.y)&&y===this.mazeGen.startPos.z){const z=this.isTeleportMode?2.5:.5,q=new ne({color:Q.COLORS.THREE_START,emissive:Q.COLORS.THREE_START,emissiveIntensity:z*o,transparent:!0,opacity:this.isTeleportMode?.95:.8*o}),B=new te(a,q);B.position.set(x-i/2,(y-i/2)*this.vScale,v-i/2),this.isTeleportMode&&B.scale.set(1.4,1.4,1.4),B.userData={isTeleport:!0,gridX:x,gridY:v,gridZ:y},this.scene.add(B),this.teleportMeshes.push(B);continue}const G=x===Math.floor(this.player.x)&&v===Math.floor(this.player.y)&&y===this.player.z,Z=this.inactiveTeleportPos&&this.inactiveTeleportPos.x===x&&this.inactiveTeleportPos.y===v&&this.inactiveTeleportPos.z===y;let V=this.isTeleportMode?.9:.45,W=this.isTeleportMode?2.5:.8,J=Q.COLORS.THREE_TELEPORT,it=.95;Z?(J=4473924,W=0,it=.4):this.isTeleportMode&&G&&(J=65535,it=.5,W=3);const nt=new En(V,16,16),X=new ne({color:J,emissive:J,emissiveIntensity:W,transparent:!0,opacity:it}),C=new te(nt,X);C.position.set(x-i/2,(y-i/2)*this.vScale,v-i/2),C.userData={isTeleport:!0,gridX:x,gridY:v,gridZ:y},this.scene.add(C),this.teleportMeshes.push(C);continue}if(T===this.mazeGen.TYPES.KEY){const U=new Ra(.3,0),G=new ne({color:Q.COLORS.THREE_KEY,emissive:Q.COLORS.THREE_KEY,emissiveIntensity:.6*o,shininess:100}),Z=new te(U,G);if(Z.position.set(x-i/2,(y-i/2)*this.vScale,v-i/2),Z.userData={isKey:!0,gridX:x,gridY:v,gridZ:y},this.scene.add(Z),this.keyMeshes.push(Z),this.pulsatingMaterials.push(G),!this.visitedCells.has(`${x},${v},${y}`))continue}const D=`${x},${v},${y}`,Y=this.revealedPathSet.has(D);if(t?T!==this.mazeGen.TYPES.WALL:M||b||Y){let U=t?Q.COLORS.THREE_VISITED:Q.COLORS.THREE_KNOWN,G;Y?(U=16777215,G=new ne({color:U,transparent:!0,opacity:.95*o,emissive:U,emissiveIntensity:2*o})):M||t?(U=Q.COLORS.THREE_VISITED,T===3?U=Q.COLORS.THREE_START:T===4&&(U=this.keysCollected===this.totalKeys?Q.COLORS.THREE_EXIT:16724736),G=new ne({color:U,transparent:!0,opacity:t?.72:.8*o})):b&&(G=new ne({color:U,transparent:!0,opacity:.6*o,emissive:U,emissiveIntensity:.5*o}),this.pulsatingMaterials.push(G));const Z=y<i-1&&this.maze.get(x,v,y+1)!==0,V=y>0&&this.maze.get(x,v,y-1)!==0;if(Z||V){const nt=this.pulsatingMaterials.indexOf(G);if(nt>-1&&this.pulsatingMaterials.splice(nt,1),Z&&V){let X=!1,C=!1;if(Y){if(this.activePathReveal){const Pt=this.activePathReveal.findIndex(H=>H.x===x&&H.y===v&&H.z===y);if(Pt!==-1&&Pt<this.activePathReveal.length-1){const H=this.activePathReveal[Pt+1];H.z>y&&(X=!0),H.z<y&&(C=!0)}}!X&&!C&&(X=this.revealedPathSet.has(`${x},${v},${y+1}`)||this.revealedPathSet.has(`${x},${v},${y+2}`),C=this.revealedPathSet.has(`${x},${v},${y-1}`)||this.revealedPathSet.has(`${x},${v},${y-2}`))}const z=Y&&(X||!X&&!C),q=Y&&(C||!X&&!C),B=new ne({color:q?16777215:Q.COLORS.THREE_ELEVATOR_DOWN,transparent:!0,opacity:.9*o,emissive:q?16777215:Q.COLORS.THREE_ELEVATOR_DOWN,emissiveIntensity:(q?2:.4)*o}),j=new ne({color:z?16777215:Q.COLORS.THREE_ELEVATOR_UP,transparent:!0,opacity:.9*o,emissive:z?16777215:Q.COLORS.THREE_ELEVATOR_UP,emissiveIntensity:(z?2:.4)*o}),ct=new te(r,B),pt=new te(c,j);ct.position.set(x-i/2,(y-i/2)*this.vScale-.2125,v-i/2),pt.position.set(x-i/2,(y-i/2)*this.vScale+.2125,v-i/2),this.scene.add(ct),this.scene.add(pt),this.gridMeshes[x*i*i+v*i+y]=pt,b&&!Y&&(ct.userData={gridX:x,gridY:v,gridZ:y},pt.userData={gridX:x,gridY:v,gridZ:y},this.knownMeshes.push(ct),this.knownMeshes.push(pt));continue}else{const X=Y?16777215:Z?Q.COLORS.THREE_ELEVATOR_UP:Q.COLORS.THREE_ELEVATOR_DOWN,C=Y?2:.4;G=new ne({color:X,transparent:!0,opacity:.9*o,emissive:X,emissiveIntensity:C*o})}}const W=x===Math.floor(this.player.x)&&v===Math.floor(this.player.y)&&y===this.player.z,J=this.hunters.some(nt=>nt.x===x&&nt.y===v&&nt.z===y);if(W||J){const nt=new we(.9,.05,.9),X=new te(nt,G);X.position.set(x-i/2,(y-i/2)*this.vScale-.425,v-i/2),this.scene.add(X),this.gridMeshes[x*i*i+v*i+y]=X;continue}const it=new te(a,G);if(it.position.set(x-i/2,(y-i/2)*this.vScale,v-i/2),T===4&&(this.exitMesh=it,this.keysCollected<this.totalKeys)){const nt=new we(.95,.95,.95),X=new us({color:16711680,wireframe:!0}),C=new te(nt,X);it.add(C)}this.scene.add(it),this.gridMeshes[x*i*i+v*i+y]=it,(b||T===this.mazeGen.TYPES.EXIT)&&!Y&&(it.userData={gridX:x,gridY:v,gridZ:y},this.knownMeshes.push(it))}}if(t)return;const u=new En(.42,16,16),f=new ne({color:16711680,emissive:16711680,emissiveIntensity:.8,depthWrite:!1}),p=new te(u,f);p.position.set(Math.floor(this.player.x)-i/2,(this.player.z-i/2)*this.vScale+.05,Math.floor(this.player.y)-i/2),this.scene.add(p);const g=new En(.4),m=new ne({color:Q.COLORS.THREE_HUNTER,emissive:Q.COLORS.THREE_HUNTER,emissiveIntensity:.8,depthWrite:!1}),_=new ne({color:Q.COLORS.THREE_HUNTER,transparent:!0,opacity:.4,emissive:Q.COLORS.THREE_HUNTER,emissiveIntensity:.3,depthWrite:!1}),d=new ne({color:Q.COLORS.THREE_HUNTER,transparent:!0,opacity:.15,emissive:Q.COLORS.THREE_HUNTER,emissiveIntensity:.1,depthWrite:!1}),h=g;for(let x=0;x<this.hunters.length;x++){const v=this.hunters[x];if(v.state==="SLEEP")continue;const y=new te(h,d),T=new te(h,_);y.visible=!1,T.visible=!1,y.renderOrder=99,T.renderOrder=99,this.scene.add(y),this.scene.add(T);const A=new xn;A.renderOrder=99;const S=new te(g,m);A.add(S);const I=4,M=[],b=new we(.18,.18,.18),F=[Q.COLORS.THREE_HUNTER,16711935,65535,16776960];for(let D=0;D<I;D++){const Y=new ne({color:F[D%F.length],transparent:!0,opacity:.8,emissive:F[D%F.length],emissiveIntensity:.8,depthWrite:!1}),R=new te(b,Y);R.userData={angle:D/I*Math.PI*2,radius:.35+Math.random()*.1,speed:1+Math.random()*1.5,phaseY:Math.random()*Math.PI*2},A.add(R),M.push(R)}A.position.set(v.x-i/2,(v.z-i/2)*this.vScale,v.y-i/2),this.scene.add(A),this.hunterMeshes.push({hunter:v,mesh:A,coreMesh:S,particles:M,trail1:T,trail2:y})}this.camera.position.set(i,i*this.vScale,i),this.controls.target.set(0,0,0),this.controls.update()}draw2DMap(t=.016){if(this.deathAnimation&&this.deathAnimation.active){if(this.deathAnimation.delayElapsed<this.deathAnimation.delayDuration)this.deathAnimation.delayElapsed+=t,this.updateNotification(t);else if(this.deathAnimation.screenFilled)this.deathAnimation.reversing&&(this.deathAnimation.elapsed-=t,this.deathAnimation.elapsed<=0&&(this.deathAnimation=null,this.isGameOver=!1,this.ui.initGameUI(this.isSafeMode),this.ui.showInfoBanner(It("msgPlayerRespawn"))));else if(this.deathAnimation.elapsed+=t,this.updateNotification(t),this.deathAnimation.elapsed>=this.deathAnimation.duration){this.deathAnimation.screenFilled=!0,this.activeNotification=null,this.notificationQueue=[];const n=Math.floor(this.deathAnimation.playerPos.x),a=Math.floor(this.deathAnimation.playerPos.y),o=this.deathAnimation.playerPos.z;this.maze.set(n,a,o,this.mazeGen.TYPES.KEY),this.totalKeys++,this.ui.updateKeysHUD(this.keysCollected,this.totalKeys),this.staticMapCacheDirty=!0;let r=this.mazeGen.startPos.x,c=this.mazeGen.startPos.y,l=this.mazeGen.startPos.z;this.lastSavePos&&(r=this.lastSavePos.x,c=this.lastSavePos.y,l=this.lastSavePos.z),this.player.x=r,this.player.y=c,this.player.z=l,this.activeMapFloor=l,this.visualActiveFloor=l,this.lastPlayerCell={x:Math.floor(r),y:Math.floor(c),z:l},this.hunters=[],this.initHunters(this.degree),this.suppressWakeHuntersBanner=!0,ns(this),this.deathAnimation.reversing=!0}}this.floorTransition&&(this.floorTransition.progress+=t/this.floorTransition.duration,this.floorTransition.progress>=1&&(this.floorTransition=null));const e=this.mazeGen.size,i=this.isZoomActive?11:e;if(this.zoomVisibleCells===void 0?this.zoomVisibleCells=i:(this.zoomVisibleCells+=(i-this.zoomVisibleCells)*(1-Math.exp(-12*t)),Math.abs(this.zoomVisibleCells-i)<.01&&(this.zoomVisibleCells=i)),this.floorTransition){const n=this.floorTransition.progress,a=this.canvas.width/2,o=this.canvas.height/2,r=this.floorTransition.delta>0;this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);let c,l;r?(c=1-.2*n,l=1.2-.2*n):(c=1+.2*n,l=.8+.2*n),this.ctx.save(),this.ctx.globalAlpha=1-n,this.ctx.translate(a,o),this.ctx.scale(c,c),this.ctx.drawImage(this.floorTransition.canvasOld,-a,-o),this.ctx.restore(),this.ctx.save(),this.ctx.globalAlpha=n,this.ctx.translate(a,o),this.ctx.scale(l,l),this.ctx.drawImage(this.floorTransition.canvasNew,-a,-o),this.ctx.restore()}else this.renderMapToContext(this.ctx,this.player.z)}renderMapToContext(t,e){t.clearRect(0,0,t.canvas.width,t.canvas.height);const i=this.mazeGen.size,n=i>11,a=n?t.canvas.width/11:t.canvas.width/i,o=this.player.x,r=this.player.y;let c=n||this.isZoomTransitionActive,l=n?this.zoomVisibleCells:i;if(this.isZoomTransitionActive){const x=Math.min(1,(2-this.zoomTransitionTimer)/2),y=(S=>1-Math.pow(1-S,3))(x),T=3;l=T+((n?11:i)-T)*y}if(c){t.save();const h=(n?11:i)/l,x=l/2;let v=o,y=r;v<x&&(v=x),v>i-x&&(v=i-x),y<x&&(y=x),y>i-x&&(y=i-x);const T=t.canvas.width/2,A=t.canvas.height/2;t.translate(T,A),t.scale(h,h),t.translate(-v*a,-y*a)}const u=n?i*a:this.canvas.width,f=n?i*a:this.canvas.height;(this.staticMapCacheDirty||this.staticMapCacheCanvas.width!==u||this.staticMapCacheCanvas.height!==f)&&this.updateStaticMapCache(e),t.drawImage(this.staticMapCacheCanvas,0,0);const p=Math.floor(o),g=Math.floor(r);if(this.maze.get(p,g,e)===this.mazeGen.TYPES.TELEPORT&&this.discoveredTeleports.has(`${p},${g},${e}`)&&!(this.inactiveTeleportPos&&this.inactiveTeleportPos.x===p&&this.inactiveTeleportPos.y===g&&this.inactiveTeleportPos.z===e)){const x=.85+.15*Math.sin(Date.now()/150);t.save(),t.globalAlpha=x,t.fillStyle=Q.COLORS.TELEPORT,t.fillRect(p*a,g*a,a,a),t.restore()}for(const h of this.hunters){if(h.state==="SLEEP")continue;const x=h.visualZ!==null?h.visualZ:h.z,v=h.visualX!==null?h.visualX:h.x,y=h.visualY!==null?h.visualY:h.y;if(x===null||v===null||y===null)continue;const T=Math.abs(x-e),A=Math.max(0,1-T);if(A<=0)continue;const S=h.x!==null?h.x:v,I=h.y!==null?h.y:y,M=S-v,b=I-y,F=Math.sqrt(M*M+b*b),D=Math.max(0,Math.min(1,1-F)),Y=[];if(h.lastPos&&(h.lastPos.x!==S||h.lastPos.y!==I)&&h.lastPos.z===e){const R=.95-D*.47,U=.4-D*.2;Y.push({pos:h.lastPos,sizeFactor:R,opacityFactor:U,age:1})}if(h.history&&h.history.length===2){const R=h.history[0];if(R.z===e){const U=.48*(1-D),G=.2*(1-D);U>.01&&Y.push({pos:R,sizeFactor:U,opacityFactor:G,age:2})}}if(Y.forEach(R=>{if(h.lowCanvas){const U=R.pos.x*a+a/2,G=R.pos.y*a+a/2,Z=a*R.sizeFactor*A,V=h.jellyTime-R.age*.2,W=Math.sin(V)*6,J=Math.cos(V*.7)*4,it=1+Math.sin(V*1.2)*.06,nt=1+Math.cos(V*.8)*.06,X=W*Math.PI/180,C=J*Math.PI/180;t.save(),t.globalAlpha=R.opacityFactor,t.translate(U,G),t.transform(it,Math.tan(C),Math.tan(X),nt,0,0),t.imageSmoothingEnabled=!1,t.drawImage(h.lowCanvas,-Z/2,-Z/2,Z,Z),t.restore()}}),h.lowCanvas){const R=v*a+a/2,U=y*a+a/2,G=a*.95*A,Z=h.jellyTime,V=Math.sin(Z)*6,W=Math.cos(Z*.7)*4,J=1+Math.sin(Z*1.2)*.06,it=1+Math.cos(Z*.8)*.06,nt=V*Math.PI/180,X=W*Math.PI/180;t.save();const C=-a*.12*A,z=-a*.12*A;t.translate(R+C,U+z),t.transform(J,Math.tan(X),Math.tan(nt),it,0,0),t.filter="brightness(0) blur(1px) opacity(0.35)",t.imageSmoothingEnabled=!1,t.drawImage(h.lowCanvas,-G/2,-G/2,G,G),t.restore(),t.save(),t.translate(R,U),t.transform(J,Math.tan(X),Math.tan(nt),it,0,0),t.imageSmoothingEnabled=!1,t.drawImage(h.lowCanvas,-G/2,-G/2,G,G),t.restore()}}if(!this.deathAnimation||!this.deathAnimation.screenFilled){const h=`${this.playerVertical}_${this.playerSide}`,x=this.mageImages[h],v=o*a,y=r*a,T=Q.PLAYER_SHADOW_OFFSET_X!==void 0?Q.PLAYER_SHADOW_OFFSET_X:-.28,A=Q.PLAYER_SHADOW_OFFSET_Y!==void 0?Q.PLAYER_SHADOW_OFFSET_Y:-.28,S=v+a*T,I=y+a*A;t.save(),t.beginPath();const M=Q.PLAYER_SHADOW_WIDTH_FACTOR!==void 0?Q.PLAYER_SHADOW_WIDTH_FACTOR:.45,b=Q.PLAYER_SHADOW_HEIGHT_FACTOR!==void 0?Q.PLAYER_SHADOW_HEIGHT_FACTOR:.3,F=a*M,D=a*b;t.ellipse(S,I,F,D,0,0,Math.PI*2),t.fillStyle="rgba(0, 0, 0, 0.4)",t.fill(),t.restore();const Y=Math.max(0,Math.floor((S-F)/a)),R=Math.min(i-1,Math.floor((S+F)/a)),U=Math.max(0,Math.floor((I-D)/a)),G=Math.min(i-1,Math.floor((I+D)/a));for(let V=Y;V<=R;V++)for(let W=U;W<=G;W++)this.maze.get(V,W,e)===0&&(this.isNearVisited(V,W,e)||this.isAdjacentToStatue(V,W,e))&&(t.save(),this.wallImage.complete&&this.wallImage.naturalWidth!==0?t.drawImage(this.wallImage,V*a,W*a,a,a):(t.fillStyle=Q.COLORS.WALL,t.fillRect(V*a,W*a,a,a)),t.restore());let Z=1;if(this.deathAnimation&&this.deathAnimation.active&&(Math.floor(Date.now()/120)%2===0||(Z=.2)),x&&x.complete){t.save(),t.globalAlpha=Z;const V=a*.9,W=V,J=V*(x.height/x.width);t.translate(v,y),t.scale(this.playerSquashX||1,this.playerSquashY||1);const it=-J*.85;t.drawImage(x,-W/2,it,W,J),t.restore()}else t.save(),t.globalAlpha=Z,t.strokeStyle=Q.COLORS.PLAYER_OUTLINE,t.lineWidth=1,t.strokeRect(p*a+2,g*a+2,a-4,a-4),t.fillStyle=Q.COLORS.PLAYER,t.beginPath(),t.arc(v,y,a*.4,0,Math.PI*2),t.fill(),t.strokeStyle=Q.COLORS.PLAYER,t.lineWidth=2,t.beginPath(),t.moveTo(v,y),t.lineTo(v+Math.cos(this.player.dir)*a*1,y+Math.sin(this.player.dir)*a*1),t.stroke(),t.restore();if(Q.SHOW_COLLISION_DEBUG){t.save(),t.strokeStyle="#ff0000",t.lineWidth=1.5;const V=Q.PLAYER_COLLISION_RADIUS*2*a,W=(Q.PLAYER_COLLISION_OFFSET_X||0)*a,J=(Q.PLAYER_COLLISION_OFFSET_Y||0)*a;t.strokeRect(v+W-V/2,y+J-V/2,V,V),t.restore()}if(this.deathAnimation&&this.deathAnimation.active){const V=Math.min(1,this.deathAnimation.delayElapsed/this.deathAnimation.delayDuration),W=-(x&&x.complete?a*.9*(x.height/x.width)*.85:a*.5),J=a*.7,it=(1-V)*W-4*J*V*(1-V);if(this.keyImage.complete&&this.keyImage.naturalWidth!==0){t.save();const nt=a*.55;t.drawImage(this.keyImage,v-nt/2,y+it-nt/2,nt,nt),t.restore()}else t.save(),t.beginPath(),t.arc(v,y+it,a*.15,0,2*Math.PI),t.fillStyle="#ffd700",t.fill(),t.restore()}}if(this.activeNotification){const h=this.activeNotification;t.save(),t.font=`bold ${a*.22}px monospace`;const x=t.measureText(h.text).width,v=a*.4,y=x+v,T=a*.48,A=o*a,S=r*a-a*1.5;let I=y;h.state==="OPENING"?I=y*h.widthProgress:h.state==="CLOSING"&&(I=y*h.closeProgress);const M=this.mazeGen.size*a,b=this.mazeGen.size*a;let F=A;F-I/2<0?F=I/2:F+I/2>M&&(F=M-I/2);let D=S;D-T/2<0?D=T/2:D+T/2>b&&(D=b-T/2),t.fillStyle="#000000",t.fillRect(F-I/2,D-T/2,I,T),t.strokeStyle="#00ffff",t.lineWidth=Math.max(1.5,a*.04),t.strokeRect(F-I/2,D-T/2,I,T),(h.state==="TYPING"||h.state==="WAITING")&&(t.fillStyle="#ffffff",t.textAlign="center",t.textBaseline="middle",t.fillText(h.displayText,F,D)),t.restore()}if(c&&t.restore(),this.isZoomTransitionActive){const v=1-Math.min(1,(2-this.zoomTransitionTimer)/2);t.save(),t.fillStyle=`rgba(0, 0, 0, ${v})`,t.fillRect(0,0,t.canvas.width,t.canvas.height),t.restore()}if(this.deathAnimation&&this.deathAnimation.active){const h=this.deathAnimation.hunter;let x=h.visualX+.5,v=h.visualY+.5;this.deathAnimation.reversing&&(x=this.player.x,v=this.player.y);let y,T;if(n){const A=11/this.zoomVisibleCells,S=this.zoomVisibleCells/2;let I=o,M=r;I<S&&(I=S),I>i-S&&(I=i-S),M<S&&(M=S),M>i-S&&(M=i-S);const b=t.canvas.width/2,F=t.canvas.height/2;y=b+(x-I)*a*A,T=F+(v-M)*a*A}else y=x*a,T=v*a;if(!this.deathAnimation.screenFilled||this.deathAnimation.reversing){const A=Math.hypot(t.canvas.width,t.canvas.height)*1.1,S=this.deathAnimation.elapsed/this.deathAnimation.duration,M=S*S*(3-2*S)*A;t.save(),t.beginPath(),t.arc(y,T,M,0,Math.PI*2),t.clip(),t.fillStyle="rgba(15, 0, 25, 0.96)",t.fillRect(0,0,t.canvas.width,t.canvas.height);const b=45,F=n?11/this.zoomVisibleCells:1;for(let D=0;D<b;D++){const Y=Math.random()*Math.PI*2,R=Math.pow(Math.random(),.7)*M,U=y+Math.cos(Y)*R,G=T+Math.sin(Y)*R,Z=(15+Math.random()*70)*F,V=(3+Math.random()*12)*F,W=80+Math.floor(Math.random()*50),J=Math.floor(Math.random()*25),it=130+Math.floor(Math.random()*70);t.fillStyle=Math.random()<.12?"#00ff66":Math.random()<.12?"#00ccff":Math.random()<.08?"#ffffff":`rgb(${W},${J},${it})`,t.fillRect(U-Z/2,G-V/2,Z,V)}if(Math.random()<.3){t.fillStyle=Math.random()<.7?"#ffffff":"#b3ffff";const D=y+(Math.random()-.5)*M*.8,Y=T+(Math.random()-.5)*M*.8,R=(2+Math.random()*5)*F,U=(10+Math.random()*30)*F;t.fillRect(D-R/2,Y-U/2,R,U)}t.restore()}else{t.fillStyle="rgba(10, 0, 15, 1.0)",t.fillRect(0,0,t.canvas.width,t.canvas.height),t.fillStyle="rgba(138, 3, 196, 0.08)";for(let I=0;I<t.canvas.height;I+=6)Math.random()<.6&&t.fillRect(0,I+Math.sin(Date.now()*.01+I)*2,t.canvas.width,2);const A=Math.floor(Math.random()*5)+3,S=["#00ff66","#ff0055","#00ccff","#ffff00","#8a03c4","#ffffff"];for(let I=0;I<A;I++){const M=Math.random()*t.canvas.width,b=Math.random()*t.canvas.height,F=80+Math.random()*250,D=8+Math.random()*30;t.fillStyle=S[Math.floor(Math.random()*S.length)],t.globalAlpha=.12+Math.random()*.18,t.fillRect(M,b,F,D)}if(t.globalAlpha=1,Math.random()<.35){const I=Math.floor(Math.random()*t.canvas.height),M=15+Math.floor(Math.random()*80),b=Math.floor(Math.random()*40)-20;t.drawImage(t.canvas,0,I,t.canvas.width,M,b,I,t.canvas.width,M)}Math.random()<.15&&(t.fillStyle="rgba(255, 255, 255, 0.05)",t.fillRect(0,Math.random()*t.canvas.height,t.canvas.width,5+Math.random()*20))}}}updateStaticMapCache(t){const e=this.mazeGen.size,i=e>11,n=i?this.canvas.width/11:this.canvas.width/e,a=i?e*n:this.canvas.width,o=i?e*n:this.canvas.height;(this.staticMapCacheCanvas.width!==a||this.staticMapCacheCanvas.height!==o)&&(this.staticMapCacheCanvas.width=a,this.staticMapCacheCanvas.height=o);const r=this.staticMapCacheCtx;r.clearRect(0,0,a,o);const c=this.player.x,l=this.player.y,u=Math.floor(this.mazeGen.startPos.x),f=Math.floor(this.mazeGen.startPos.y),p=this.mazeGen.startPos.z,g=Date.now();let m=!1;const _=(d,h,x)=>{const v=`${d},${h},${t}`;if(this.skipCellAnimations||this.fullyRevealedCells.has(v))x(),this.skipCellAnimations&&this.fullyRevealedCells.add(v);else{let y=this.revealedCellsAnimation.get(v);y===void 0&&(this.revealedCellsAnimation.set(v,g),y=g);const T=g-y,S=Math.min(1,T/400);S<1?(r.save(),r.globalAlpha=S,x(),r.restore(),m=!0):(x(),this.revealedCellsAnimation.delete(v),this.fullyRevealedCells.add(v))}};for(let d=0;d<e;d++)for(let h=0;h<e;h++){const x=this.maze.get(d,h,t);if(x===this.mazeGen.TYPES.STATUE){_(d,h,()=>{if(this.floorImage.complete&&this.floorImage.naturalWidth!==0?r.drawImage(this.floorImage,d*n,h*n,n,n):(r.fillStyle=Q.COLORS.PATH_VISITED,r.fillRect(d*n,h*n,n,n)),r.fillStyle="rgba(0, 0, 0, 0.4)",r.beginPath(),r.ellipse(d*n+n/2,(h+1)*n-n*.15,n*.35,n*.12,0,0,Math.PI*2),r.fill(),this.statueImage.complete&&this.statueImage.naturalWidth!==0){const D=this.statueImage.width/this.statueImage.height,Y=n*.85,R=Y/D,U=d*n+n/2,G=(h+1)*n-n*.05;r.drawImage(this.statueImage,U-Y/2,G-R,Y,R)}else r.fillStyle="#555555",r.fillRect(d*n+n*.3,h*n+n*.1,n*.4,n*.8)});continue}const v=this.allTeleports.some(D=>D.x===d&&D.y===h&&D.z===t),y=v&&this.discoveredTeleports.has(`${d},${h},${t}`),T=x===2||x===3||x===4||x===5||y,A=x===this.mazeGen.TYPES.KEY,S=(x===1||v&&!y)&&this.isNearVisited(d,h,t),I=this.revealedPathSet.has(`${d},${h},${t}`),M=t<e-1&&this.maze.get(d,h,t+1)!==0,b=t>0&&this.maze.get(d,h,t-1)!==0,F=M||b;I?_(d,h,()=>{F?this.drawElevator2D(r,d,h,n,M,b,c,l,!0,t):(r.fillStyle=Q.COLORS.REVEALED_PATH,r.fillRect(d*n,h*n,n,n))}):T?_(d,h,()=>{if(y){if(d===u&&h===f&&t===p)r.fillStyle=Q.COLORS.START;else{const Y=this.inactiveTeleportPos&&this.inactiveTeleportPos.x===d&&this.inactiveTeleportPos.y===h&&this.inactiveTeleportPos.z===t;r.fillStyle=Y?Q.COLORS.TELEPORT_INACTIVE:Q.COLORS.TELEPORT}r.fillRect(d*n,h*n,n,n)}else if(F)this.drawElevator2D(r,d,h,n,M,b,c,l,!1,t);else if(x===2&&this.floorImage.complete&&this.floorImage.naturalWidth!==0)r.drawImage(this.floorImage,d*n,h*n,n,n);else if(x===this.mazeGen.TYPES.EXIT){if(r.fillStyle=Q.COLORS.EXIT,r.fillRect(d*n,h*n,n,n),this.keysCollected<this.totalKeys){r.strokeStyle="#ff3300",r.lineWidth=Math.max(2,n*.08);const D=d*n+n/2,Y=h*n+n/2,R=n*.2;r.beginPath(),r.arc(D,Y-R*.2,R*.6,Math.PI,0),r.stroke(),r.fillStyle="#111",r.fillRect(D-R,Y-R*.1,R*2,R*1.5),r.strokeRect(D-R,Y-R*.1,R*2,R*1.5),r.fillStyle="#ff3300",r.font=`bold ${Math.max(10,n*.35)}px sans-serif`,r.textAlign="center",r.textBaseline="middle",r.fillText(String(this.totalKeys-this.keysCollected),D,Y+R*.6)}}else r.fillStyle=x===2?Q.COLORS.PATH_VISITED:Q.COLORS.START,r.fillRect(d*n,h*n,n,n);this.drawCellShadow2D(r,d,h,n,e,x,t)}):A?(_(d,h,()=>{if(this.visitedCells.has(`${d},${h},${t}`))if(y){if(d===u&&h===f&&t===p)r.fillStyle=Q.COLORS.START;else{const U=this.inactiveTeleportPos&&this.inactiveTeleportPos.x===d&&this.inactiveTeleportPos.y===h&&this.inactiveTeleportPos.z===t;r.fillStyle=U?Q.COLORS.TELEPORT_INACTIVE:Q.COLORS.TELEPORT}r.fillRect(d*n,h*n,n,n)}else F?this.drawElevator2D(r,d,h,n,M,b,c,l,!1,t):this.floorImage.complete&&this.floorImage.naturalWidth!==0?r.drawImage(this.floorImage,d*n,h*n,n,n):(r.fillStyle=Q.COLORS.PATH_VISITED,r.fillRect(d*n,h*n,n,n));const Y=n*.05*Math.sin(Date.now()/300);this.keyImage.complete&&this.keyImage.naturalWidth!==0?r.drawImage(this.keyImage,d*n+n*.15,h*n+n*.15+Y,n*.7,n*.7):(r.beginPath(),r.arc(d*n+n/2,h*n+n/2+Y,n*.25,0,2*Math.PI),r.fillStyle="#ffd700",r.fill()),this.drawCellShadow2D(r,d,h,n,e,x,t)}),m=!0):S?(_(d,h,()=>{if(this.floorImage.complete&&this.floorImage.naturalWidth!==0){r.save(),r.globalAlpha=.35,r.drawImage(this.floorImage,d*n,h*n,n,n),r.restore();const D=.22+.12*Math.sin(Date.now()/250);r.fillStyle=`rgba(136, 204, 255, ${D})`,r.fillRect(d*n,h*n,n,n)}else r.fillStyle=Q.COLORS.PATH_KNOWN,r.fillRect(d*n,h*n,n,n)}),m=!0):x===0&&(this.isNearVisited(d,h,t)||this.isAdjacentToStatue(d,h,t))&&_(d,h,()=>{this.wallImage.complete&&this.wallImage.naturalWidth!==0?r.drawImage(this.wallImage,d*n,h*n,n,n):(r.fillStyle=Q.COLORS.WALL,r.fillRect(d*n,h*n,n,n))})}m?this.staticMapCacheDirty=!0:this.staticMapCacheDirty=!1}isNearVisited(t,e,i){for(let n=-1;n<=1;n++)for(let a=-1;a<=1;a++){const o=t+n,r=e+a;if(o>=0&&o<this.mazeGen.size&&r>=0&&r<this.mazeGen.size){const c=this.maze.get(o,r,i);if(c===2||c===3||c===this.mazeGen.TYPES.TELEPORT&&this.discoveredTeleports.has(`${o},${r},${i}`))return!0}}return!1}isAdjacentToStatue(t,e,i){const n=this.mazeGen.size,a=[{dx:1,dy:0},{dx:-1,dy:0},{dx:0,dy:1},{dx:0,dy:-1},{dx:1,dy:1},{dx:-1,dy:1},{dx:1,dy:-1},{dx:-1,dy:-1}];for(const o of a){const r=t+o.dx,c=e+o.dy;if(r>=0&&r<n&&c>=0&&c<n&&this.maze.get(r,c,i)===this.mazeGen.TYPES.STATUE)return!0}return!1}populateFullyRevealedCells(t){const e=this.mazeGen.size;for(let i=0;i<e;i++)for(let n=0;n<e;n++){const a=this.maze.get(i,n,t),o=a===this.mazeGen.TYPES.TELEPORT,r=o&&this.discoveredTeleports.has(`${i},${n},${t}`),c=a===2||a===3||a===4||a===5||r,l=(a===1||o&&!r)&&this.isNearVisited(i,n,t),u=this.revealedPathSet.has(`${i},${n},${t}`);(c||l||u||a===0&&this.isNearVisited(i,n,t))&&this.fullyRevealedCells.add(`${i},${n},${t}`)}}updatePulse(){if(!this.isMap3DActive||this.pulsatingMaterials.length===0)return;const t=.2+.5*Math.abs(Math.sin(Date.now()*.003));this.pulsatingMaterials.forEach(e=>{e.emissiveIntensity=t})}loop(){if(this.isDestroyed)return;const t=performance.now(),e=(t-this.lastFrameTime)/1e3;this.lastFrameTime=t;const i=Math.min(e,.1);if(this.isIntroPlaying?this.controls.update():this.update(i),this.isMap3DActive||this.isIntroPlaying)if(this.isIntroPlaying)this.renderer.render(this.scene,this.camera);else{const n=1-Math.exp(-10*i);this.visualActiveFloor+=(this.activeMapFloor-this.visualActiveFloor)*n,Math.abs(this.activeMapFloor-this.visualActiveFloor)<.001&&(this.visualActiveFloor=this.activeMapFloor),this.drawIsometricMap()}else this.draw2DMap(i);requestAnimationFrame(()=>this.loop())}playContinueAnimation(){this.isIntroPlaying=!0;const t=this.mazeGen.size;this.renderer&&this.renderer.domElement&&(this.renderer.domElement.style.display="block");const e=document.getElementById("map3d-instructions");e&&(e.style.display="block"),this.isometricCanvas&&(this.isometricCanvas.style.display="none"),this.ui.setMap3DVisible(!0),this.isMap3DActive=!0,this.updateRendererSize(),this.build3DMap(!1),this.camera.position.set(t*.9,t*this.vScale*.6,t*.9),this.controls.target.set(0,0,0),this.controls.update(),this.hideCanvasInstant(),this.controls.autoRotate=!0,this.controls.autoRotateSpeed=2,this.controls.enableZoom=!1,this.controls.enablePan=!1,this.controls.enableRotate=!1;const i=()=>{this.activeContinueTimer&&(clearTimeout(this.activeContinueTimer),this.activeContinueTimer=null),this.activeSkipHandler&&(window.removeEventListener("keydown",this.activeSkipHandler),window.removeEventListener("touchstart",this.activeSkipHandler),this.activeSkipHandler=null),this.controls.autoRotate=!1,this.animateCameraToPlayer(()=>{this._transitionToGame()})};this.activeSkipHandler=()=>i(),window.addEventListener("keydown",this.activeSkipHandler,{once:!0}),window.addEventListener("touchstart",this.activeSkipHandler,{once:!0}),this.activeContinueTimer=setTimeout(i,2500)}animateCameraToPlayer(t){const e=this.mazeGen.size,i=this.player.x-e/2,n=(this.player.z-e/2)*this.vScale,a=this.player.y-e/2,o=this.controls.target.clone(),r=new $(i,n,a),c=this.camera.position.clone(),l=new $(i+4,n+5,a+4),u=1100,f=performance.now(),p=g=>{if(this.isDestroyed)return;const m=g-f,_=Math.min(m/u,1),d=_<.5?4*_*_*_:1-Math.pow(-2*_+2,3)/2;this.controls.target.lerpVectors(o,r,d),this.camera.position.lerpVectors(c,l,d),this.controls.update(),_<1?requestAnimationFrame(p):t&&t()};requestAnimationFrame(p)}playIntroAnimation(){this.isIntroPlaying=!0;const t=this.mazeGen.size;this.renderer&&this.renderer.domElement&&(this.renderer.domElement.style.display="block");const e=document.getElementById("map3d-instructions");for(e&&(e.style.display="block"),this.isometricCanvas&&(this.isometricCanvas.style.display="none");this.scene.children.length>0;)this.scene.remove(this.scene.children[0]);this.scene.add(new ho(16777215,.7));const i=new co(16777215,.5);i.position.set(10,20,10),this.scene.add(i),this.ui.setMap3DVisible(!0),this.isMap3DActive=!0,this.updateRendererSize(),this.camera.position.set(t*.9,t*this.vScale*.6,t*.9),this.controls.target.set(0,0,0),this.controls.update(),this.hideCanvasInstant();const n=this.mazeGen.startPos,a=this.getExitPos(),o=new we(.92,.92,.92),r=new ne({color:Q.COLORS.THREE_START,emissive:Q.COLORS.THREE_START,emissiveIntensity:.6,transparent:!0,opacity:.95}),c=new te(o,r);c.position.set(Math.floor(n.x)-t/2,(n.z-t/2)*this.vScale,Math.floor(n.y)-t/2),this.scene.add(c);const l=new ne({color:16724736,emissive:16724736,emissiveIntensity:.6,transparent:!0,opacity:.95}),u=new te(o,l);u.position.set(a.x-t/2,(a.z-t/2)*this.vScale,a.y-t/2);const f=new we(.95,.95,.95),p=new us({color:16711680,wireframe:!0}),g=new te(f,p);u.add(g),this.scene.add(u);const m=[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]],_=`${Math.floor(n.x)},${Math.floor(n.y)},${n.z}`,d=`${a.x},${a.y},${a.z}`,h=new Set([_,d]),x=[{x:Math.floor(n.x),y:Math.floor(n.y),z:n.z}],v=[{x:a.x,y:a.y,z:a.z}];let y=0,T=0;const A=[];for(;y<x.length||T<v.length;){if(y<x.length){const{x:Z,y:V,z:W}=x[y++];for(const[J,it,nt]of m){const X=Z+J,C=V+it,z=W+nt,q=`${X},${C},${z}`;X>=0&&X<t&&C>=0&&C<t&&z>=0&&z<t&&!h.has(q)&&this.maze.get(X,C,z)!==this.mazeGen.TYPES.WALL&&(h.add(q),x.push({x:X,y:C,z}),A.push({x:X,y:C,z}))}}if(T<v.length){const{x:Z,y:V,z:W}=v[T++];for(const[J,it,nt]of m){const X=Z+J,C=V+it,z=W+nt,q=`${X},${C},${z}`;X>=0&&X<t&&C>=0&&C<t&&z>=0&&z<t&&!h.has(q)&&this.maze.get(X,C,z)!==this.mazeGen.TYPES.WALL&&(h.add(q),v.push({x:X,y:C,z}),A.push({x:X,y:C,z}))}}}this.controls.autoRotate=!0,this.controls.autoRotateSpeed=1.8,this.controls.enableZoom=!1,this.controls.enablePan=!1,this.controls.enableRotate=!1;const S=new we(.88,.88,.88),I=new ne({color:Q.COLORS.THREE_VISITED,transparent:!0,opacity:.72}),M=20,b=200,F=A.length,D=Math.max(1,Math.ceil(F/b));let Y=0;this.activeIntroTimer=null;const R=[],U=()=>{this.activeIntroTimer&&(clearTimeout(this.activeIntroTimer),this.activeIntroTimer=null),this.activeSkipHandler&&(window.removeEventListener("keydown",this.activeSkipHandler),window.removeEventListener("touchstart",this.activeSkipHandler),this.activeSkipHandler=null),this._playGlitchAndTransition(R)};this.activeSkipHandler=()=>U(),window.addEventListener("keydown",this.activeSkipHandler,{once:!0}),window.addEventListener("touchstart",this.activeSkipHandler,{once:!0});const G=()=>{if(this.isDestroyed)return;const Z=Math.min(Y+D,A.length);for(;Y<Z;Y++){const{x:V,y:W,z:J}=A[Y],it=J%2===0;let nt;it?nt=new fs(.35,.35,2*this.vScale,8):nt=S;const X=new te(nt,I);X.position.set(V-t/2,(J-t/2)*this.vScale,W-t/2),this.scene.add(X),R.push(X)}Y<A.length?this.activeIntroTimer=setTimeout(G,M):(this.activeSkipHandler&&(window.removeEventListener("keydown",this.activeSkipHandler),window.removeEventListener("touchstart",this.activeSkipHandler),this.activeSkipHandler=null),this._playGlitchAndTransition(R))};this.activeIntroTimer=setTimeout(G,M)}_playGlitchAndTransition(t){if(this.isDestroyed)return;const e=5,i=90;let n=0;const a=()=>{if(this.isDestroyed)return;const o=n%2===0;t.forEach(r=>{r&&(r.visible=o)}),n++,n<e*2?setTimeout(a,i):(t.forEach(r=>{r&&(r.visible=!1)}),setTimeout(()=>this._transitionToGame(),400))};a()}_transitionToGame(){this.isDestroyed||(this.controls&&(this.controls.autoRotate=!1,this.controls.enableZoom=!0,this.controls.enablePan=!0,this.controls.enableRotate=!0),this.ui.uiMap3dContainer&&this.ui.uiMap3dContainer.classList.add("intro-fade-out"),setTimeout(()=>{if(this.isDestroyed)return;this.ui.setMap3DVisible(!1),this.ui.uiMap3dContainer&&this.ui.uiMap3dContainer.classList.remove("intro-fade-out"),this.isMap3DActive=!1,this.isIntroPlaying=!1,this.ui.uiMobileMap&&(this.ui.uiMobileMap.disabled=!1);const t=document.getElementById("map-area-container"),e=document.getElementById("left-hud-panel"),i=document.getElementById("right-hud-panel"),n=document.getElementById("bottom-hud-container");t&&(t.classList.remove("intro-hidden"),t.classList.add("intro-reveal"),setTimeout(()=>t.classList.remove("intro-reveal"),700)),e&&(e.classList.remove("intro-hidden"),e.classList.add("intro-reveal"),setTimeout(()=>e.classList.remove("intro-reveal"),700)),i&&(i.classList.remove("intro-hidden"),i.classList.add("intro-reveal"),setTimeout(()=>i.classList.remove("intro-reveal"),700)),n&&(n.classList.remove("intro-hidden"),n.classList.add("intro-reveal"),setTimeout(()=>n.classList.remove("intro-reveal"),700)),this.isZoomTransitionActive=!0,this.zoomTransitionTimer=2,this.isResumedFromSave||this.ui.showInfoBanner(It("msgWhereAmI"))},600))}startStorytelling(){this.isStoryActive=!0,this.storyMsgIndex=0,this.storyState="OPENING",this.storyWidthProgress=0,this.storyCloseProgress=1,this.storyCharIndex=0,this.storyTypeTimer=0;const t=document.getElementById("story-screen");t&&t.classList.remove("hidden");const e=document.getElementById("story-image-loader"),i=document.getElementById("story-dialogue");this.isPreloadingActive=!1;const n=()=>{this.isPreloadingActive=!1,i&&(i.style.transform="scaleX(0)"),this.updateStoryImage(),this.handleStoryKeyDown=o=>{o.key.toLowerCase()==="escape"?this.skipStory():this.isPreloadingActive||this.triggerAdvanceStory(),o.preventDefault()},window.addEventListener("keydown",this.handleStoryKeyDown),this.handleStoryClick=o=>{const r=o.target;r&&r.closest("#story-skip-btn")||this.isPreloadingActive||this.triggerAdvanceStory()},this.handleStoryTouch=o=>{const r=o.target;r&&r.closest("#story-skip-btn")||(this.isPreloadingActive||this.triggerAdvanceStory(),o.preventDefault())},t&&(t.addEventListener("click",this.handleStoryClick),t.addEventListener("touchstart",this.handleStoryTouch,{passive:!1}))},a=document.getElementById("story-skip-btn");if(a&&(a.onclick=o=>{o.stopPropagation(),this.skipStory()}),e&&i&&(i.style.transform="scaleX(0)",this.storyImagesLoadedCount<this.storyImagesTotalCount)){this.isPreloadingActive=!0,e.classList.remove("hidden"),this.storyImagesPreloadPromise.then(()=>{e.classList.add("hidden"),n()});return}n()}endStorytelling(){this.isStoryActive=!1,this.isPreloadingActive=!1;const t=document.getElementById("story-screen");t&&t.classList.add("hidden"),this.handleStoryKeyDown&&(window.removeEventListener("keydown",this.handleStoryKeyDown),this.handleStoryKeyDown=null),this.handleStoryClick&&t&&(t.removeEventListener("click",this.handleStoryClick),this.handleStoryClick=null),this.handleStoryTouch&&t&&(t.removeEventListener("touchstart",this.handleStoryTouch),this.handleStoryTouch=null),this.ui.uiMobileMap&&(this.ui.uiMobileMap.disabled=!1);const e=document.getElementById("map-area-container"),i=document.getElementById("left-hud-panel"),n=document.getElementById("right-hud-panel"),a=document.getElementById("bottom-hud-container");e&&(e.classList.remove("hidden","intro-hidden"),e.classList.add("intro-reveal"),setTimeout(()=>e.classList.remove("intro-reveal"),700)),i&&(i.classList.remove("hidden","intro-hidden"),i.classList.add("intro-reveal"),setTimeout(()=>i.classList.remove("intro-reveal"),700)),n&&(n.classList.remove("hidden","intro-hidden"),n.classList.add("intro-reveal"),setTimeout(()=>n.classList.remove("intro-reveal"),700)),a&&(a.classList.remove("hidden","intro-hidden"),a.classList.add("intro-reveal"),setTimeout(()=>a.classList.remove("intro-reveal"),700)),this.ui.setMap3DVisible(!1),this.isMap3DActive=!1,this.isIntroPlaying=!1,this.staticMapCacheDirty=!0,this.isZoomTransitionActive=!0,this.zoomTransitionTimer=2,this.isResumedFromSave||this.ui.showInfoBanner(It("msgWhereAmI"))}updateStoryImage(){const t=document.getElementById("story-img"),e=document.getElementById("story-image-canvas");if(!(!t||!e))if(e.style.background="#0b0b0b",this.storyMsgIndex===5)t.style.display="none",e.style.background="radial-gradient(circle, #222222 0%, #000000 80%)",e.removeAttribute("data-placeholder");else{const i=this.preloadedStoryImages[this.storyMsgIndex];if(i)t.src=i.src,t.style.display="block",e.removeAttribute("data-placeholder");else{let n="";this.storyMsgIndex===0?n="assets/images/presentation/1-mystical-church-of-chaos.jpg":this.storyMsgIndex===1?n="assets/images/presentation/2-mystical-church-of-chaos.jpg":this.storyMsgIndex===2?n="assets/images/presentation/3-the-jelly-god.jpg":this.storyMsgIndex===3?n="assets/images/presentation/4-player-alone.jpg":this.storyMsgIndex===4&&(n="assets/images/presentation/5-player-thrown.jpg"),t.src=n,t.onerror=()=>{t.style.display="none",e.setAttribute("data-placeholder",`[Image ${this.storyMsgIndex+1}]`)},t.onload=()=>{t.style.display="block",e.removeAttribute("data-placeholder")}}}}updateStory(t){if(!this.isStoryActive||this.isPreloadingActive)return;const e=document.getElementById("story-text"),i=document.getElementById("story-dialogue"),n=document.getElementById("story-arrow");if(!i||!e)return;const a=["storyMsg1","storyMsg2","storyMsg3","storyMsg4","storyMsg5","storyMsg6"];if(this.storyMsgIndex>=a.length){this.endStorytelling();return}const o=It(a[this.storyMsgIndex]),r=c=>c<.5?4*c*c*c:1-Math.pow(-2*c+2,3)/2;this.storyState==="OPENING"?(e.textContent="",n&&n.classList.add("hidden"),this.storyWidthProgress+=t/.45,this.storyWidthProgress>=1&&(this.storyWidthProgress=1,this.storyState="TYPING",this.storyCharIndex=0,this.storyTypeTimer=0),i.style.transform=`scaleX(${r(this.storyWidthProgress)})`):this.storyState==="TYPING"?(i.style.transform="scaleX(1)",n&&n.classList.add("hidden"),this.storyTypeTimer+=t,this.storyTypeTimer>=.025&&(this.storyTypeTimer=0,this.storyCharIndex++,e.textContent=o.substring(0,this.storyCharIndex),this.storyCharIndex>=o.length&&(this.storyState="WAITING"))):this.storyState==="WAITING"?(i.style.transform="scaleX(1)",e.textContent=o,n&&n.classList.remove("hidden")):this.storyState==="CLOSING"&&(e.textContent="",n&&n.classList.add("hidden"),this.storyCloseProgress-=t/.45,this.storyCloseProgress<=0&&(this.storyCloseProgress=0,this.endStorytelling()),i.style.transform=`scaleX(${r(this.storyCloseProgress)})`)}triggerAdvanceStory(){const t=["storyMsg1","storyMsg2","storyMsg3","storyMsg4","storyMsg5","storyMsg6"];if(this.storyMsgIndex>=t.length)return;const e=It(t[this.storyMsgIndex]);if(this.storyState==="CLOSING"){this.skipStory();return}if(this.storyState==="OPENING")this.storyState="TYPING",this.storyWidthProgress=1,this.storyCharIndex=0,this.storyTypeTimer=0;else if(this.storyState==="TYPING"){this.storyState="WAITING",this.storyCharIndex=e.length;const i=document.getElementById("story-text");i&&(i.textContent=e)}else if(this.storyState==="WAITING")if(this.storyMsgIndex+1<t.length){this.storyMsgIndex++,this.storyState="TYPING",this.storyCharIndex=0,this.storyTypeTimer=0,this.updateStoryImage();const i=document.getElementById("story-text");i&&(i.textContent="")}else this.storyState="CLOSING",this.storyCloseProgress=1}skipStory(){this.endStorytelling()}toggleTeleportMap(t){this.isMap3DActive=t,this.isTeleportMode=t;const e=document.getElementById("mobile-teleport-exit-btn");if(t){this.isMouseOrTouchDetected=!1,e&&e.classList.remove("hidden"),this.ui.uiMobileControls&&this.ui.uiMobileControls.classList.add("hidden"),this.ui.setMap3DVisible(!0),this.activeMapFloor=this.player.z,this.visualActiveFloor=this.player.z,this.mapCursor={x:Math.floor(this.player.x),y:Math.floor(this.player.y),z:this.player.z},this.mapZoom=1,this.mapPanOffsetX=0,this.mapPanOffsetY=0;const i=Math.floor(this.player.x),n=Math.floor(this.player.y),a=this.player.z,o=this.allTeleports.findIndex(c=>c.x===i&&c.y===n&&c.z===a);o!==-1&&(this.selectedTeleportIndex=o),this.renderer&&this.renderer.domElement&&(this.renderer.domElement.style.display="none");const r=document.getElementById("map3d-instructions");r&&(r.style.display="none"),this.isometricCanvas?this.isometricCanvas.style.display="block":this.initIsometricCanvas(),this.teleportConfirmModalActive=!1}else e&&e.classList.add("hidden"),this.ui.uiMobileControls&&this.ui.uiMobileControls.classList.remove("hidden"),this.ui.setMap3DVisible(!1),this.isometricCanvas&&(this.isometricCanvas.style.display="none"),this.teleportConfirmModalActive=!1}onCanvasClick(t){if(!this.isMap3DActive)return;const e=this.renderer.domElement.getBoundingClientRect();if(this.pointer.x=(t.clientX-e.left)/e.width*2-1,this.pointer.y=-((t.clientY-e.top)/e.height)*2+1,this.raycaster.setFromCamera(this.pointer,this.camera),this.isTeleportMode){const i=this.raycaster.intersectObjects(this.teleportMeshes);if(i.length>0){const n=i[0].object,{gridX:a,gridY:o,gridZ:r}=n.userData,c=this.inactiveTeleportPos&&this.inactiveTeleportPos.x===a&&this.inactiveTeleportPos.y===o&&this.inactiveTeleportPos.z===r,l=Math.floor(this.player.x),u=Math.floor(this.player.y),f=this.player.z;a===l&&o===u&&r===f?this.toggleTeleportMap(!1):c||this.teleportTo(a,o,r)}}else{const i=this.raycaster.intersectObjects(this.knownMeshes);if(i.length>0){const n=i[0].object,{gridX:a,gridY:o,gridZ:r}=n.userData;this.triggerPathReveal(a,o,r)}}}toggleZoom(){if(this.mazeGen.size<=11)return;this.isZoomActive=!this.isZoomActive,this.staticMapCacheDirty=!0;const t=document.getElementById("zoom-out-icon"),e=document.getElementById("zoom-in-icon");t&&e&&(this.isZoomActive?(t.classList.remove("hidden"),e.classList.add("hidden")):(t.classList.add("hidden"),e.classList.remove("hidden")))}togglePause(){this.isGameOver||this.isDestroyed||this.isIntroPlaying||(this.isPaused=!this.isPaused,this.isPaused?(this.ui.showPause(),this.ui.uiMobilePauseBtn&&this.ui.uiMobilePauseBtn.classList.add("hidden")):(this.ui.hidePause(),this.ui.uiMobilePauseBtn&&!this.ui.uiMobileControls.classList.contains("hidden")&&this.ui.uiMobilePauseBtn.classList.remove("hidden")))}checkExitNeighborVisited(){const t=this.getExitPos(),e=[{dx:1,dy:0,dz:0},{dx:-1,dy:0,dz:0},{dx:0,dy:1,dz:0},{dx:0,dy:-1,dz:0},{dx:0,dy:0,dz:2},{dx:0,dy:0,dz:-2}];for(const i of e){const n=t.x+i.dx,a=t.y+i.dy,o=t.z+i.dz;if(n>=0&&n<this.mazeGen.size&&a>=0&&a<this.mazeGen.size&&o>=0&&o<this.mazeGen.size){const r=this.maze.get(n,a,o);if(r!==this.mazeGen.TYPES.WALL&&(r===this.mazeGen.TYPES.VISITED||r===this.mazeGen.TYPES.START||r===this.mazeGen.TYPES.ELEVATOR_VISITED))return!0}}return!1}findShortestPath(t,e,i=!1){const n=this.mazeGen.size,a=new Int8Array(n*n*n);for(let o=0;o<n;o++)for(let r=0;r<n;r++)for(let c=0;c<n;c++){const l=o*n*n+r*n+c,u=this.maze.get(o,r,c),f=o===t.x&&r===t.y&&c===t.z,p=o===e.x&&r===e.y&&c===e.z,g=o===e.x&&r===e.y&&(c===e.z-1||c===e.z+1)&&c%2===0;if(u===this.mazeGen.TYPES.WALL){a[l]=0;continue}const _=u===this.mazeGen.TYPES.TELEPORT,d=_&&this.discoveredTeleports.has(`${o},${r},${c}`),h=u===this.mazeGen.TYPES.VISITED||u===this.mazeGen.TYPES.START||u===this.mazeGen.TYPES.ELEVATOR_VISITED||d,x=(u===this.mazeGen.TYPES.PATH||_&&!d)&&this.isNearVisited(o,r,c);let v=!1;i?v=h||f||p||g:v=h||x||f||p||g,a[l]=v?1:0}return il(t,e,a,n,0)??[]}triggerPathReveal(t,e,i){if(this.pathRevealInterval||this.pathfinderBlockedUntil&&Date.now()<this.pathfinderBlockedUntil)return;if(this.pathfindersRemaining<=0){this.ui.showInfoBanner(It("msgNoPathfindersRemaining"));return}this.pathRevealInterval&&(clearInterval(this.pathRevealInterval),this.pathRevealInterval=null),this.revealedPathSet.clear();const n=this.maze.get(t,e,i)===this.mazeGen.TYPES.EXIT;if(n&&!this.exitPathfinderUnlocked){this.ui.showInfoBanner(It("msgExitNotFoundYet"));return}let a=i;i%2===0&&(a=this.player.z<i?i+1:i-1,a<1&&(a=1),a>=this.mazeGen.size&&(a=this.mazeGen.size-2));const o={x:Math.floor(this.player.x),y:Math.floor(this.player.y),z:this.player.z},r={x:t,y:e,z:a},c=this.findShortestPath(o,r,n);!c||c.length===0||(this.pathfindersRemaining--,this.ui.updatePathfindersHUD(this.pathfindersRemaining,this.totalPathfinders),ns(this),this.activePathReveal=c,this.revealedPathProgress=0,this.revealedPathSet.add(`${t},${e},${i}`),this.pathRevealInterval=setInterval(()=>{if(this.revealedPathProgress<this.activePathReveal.length){const l=this.activePathReveal[this.revealedPathProgress],u=`${l.x},${l.y},${l.z}`;if(this.revealedPathSet.add(u),this.revealedPathProgress>0){const f=this.activePathReveal[this.revealedPathProgress-1];if(Math.abs(l.z-f.z)===2){const p=(l.z+f.z)/2,g=`${l.x},${l.y},${p}`;if(this.revealedPathSet.add(g),this.isMap3DActive&&this.gridMeshes){const m=this.mazeGen.size,_=this.gridMeshes[l.x*m*m+l.y*m+p];_&&(_.material=new ne({color:16777215,emissive:16777215,emissiveIntensity:2,transparent:!0,opacity:.95*(this.isTeleportMode?.2:1)}))}}}if(this.staticMapCacheDirty=!0,this.isMap3DActive&&this.gridMeshes){const f=this.mazeGen.size,p=this.gridMeshes[l.x*f*f+l.y*f+l.z];p&&(p.material=new ne({color:16777215,emissive:16777215,emissiveIntensity:2,transparent:!0,opacity:.95*(this.isTeleportMode?.2:1)}))}this.revealedPathProgress++}else clearInterval(this.pathRevealInterval),this.pathRevealInterval=null,this.pathfinderBlockedUntil=Date.now()+600},120))}teleportTo(t,e,i){if(this.skipCellAnimations=!0,this.player.x=t+Q.PLAYER_START_X,this.player.y=e+Q.PLAYER_START_Y%1,this.player.z=i,this.staticMapCacheDirty=!0,this.toggleTeleportMap(!1),this.maze.get(t,e,i)===this.mazeGen.TYPES.PATH&&(this.maze.set(t,e,i,this.mazeGen.TYPES.VISITED),this.visitedCells.add(`${t},${e},${i}`)),!this.isSafeMode){const n=Math.floor(this.degree*1.5)+3;this.teleportCooldownTicks=n,this.inactiveTeleportPos={x:t,y:e,z:i},this.ui.showInfoBanner(It("msgOopsNoisyShit"));for(const a of this.hunters){a.state="TELEPORT_TRACKING";const o=a.findPathToTarget({x:t,y:e,z:i},this.maze,this.mazeGen.TYPES);o?a.pathToTarget=o:a.pathToTarget=[]}}this.updateFloorUI(),this.draw2DMap(),this.input.keys={}}initIsometricCanvas(){const t=document.createElement("canvas");this.isometricCanvas=t,t.id="isometric-map-canvas",t.style.position="absolute",t.style.top="0",t.style.left="0",t.style.width="100%",t.style.height="100%",t.style.zIndex="101",this.isometricCtx=t.getContext("2d"),this.ui.uiMap3dContainer.appendChild(t),t.addEventListener("click",d=>this.handleIsometricClick(d));const e=()=>{this.isMouseOrTouchDetected||(this.isMouseOrTouchDetected=!0)};t.addEventListener("mousemove",e),t.addEventListener("pointerdown",e);let i=null,n=null,a=0,o=0,r=0,c=0,l=!1,u=!1,f=!1,p=0;t.addEventListener("touchstart",d=>{if(!(!this.isMap3DActive||this.isIntroPlaying)){if(p=0,f=!1,d.touches.length===1){const h=d.touches[0];a=h.clientX,o=h.clientY,r=this.mapPanOffsetX,c=this.mapPanOffsetY,u=!0,l=!1}else if(d.touches.length===2){l=!0,u=!1;const h=d.touches[0],x=d.touches[1];i=Math.hypot(h.clientX-x.clientX,h.clientY-x.clientY),n=this.mapZoom}}},{passive:!1}),t.addEventListener("touchmove",d=>{if(!(!this.isMap3DActive||this.isIntroPlaying)){if(l&&d.touches.length===2){d.preventDefault();const h=d.touches[0],x=d.touches[1],v=Math.hypot(h.clientX-x.clientX,h.clientY-x.clientY);if(i&&i>0&&n){const y=t.getBoundingClientRect(),T=(h.clientX+x.clientX)/2-y.left,A=(h.clientY+x.clientY)/2-y.top,S=this.mapZoom;let I=n*(v/i);I=Math.max(.5,Math.min(4,I));const M=I/S;this.mapPanOffsetX=T-(T-(y.width/2+this.mapPanOffsetX))*M-y.width/2,this.mapPanOffsetY=A-(A-(y.height/2+this.mapPanOffsetY))*M-y.height/2,this.mapZoom=I,p=100}}else if(u&&d.touches.length===1){const h=d.touches[0],x=h.clientX-a,v=h.clientY-o,y=Math.hypot(x,v);if(p=Math.max(p,y),!f&&Math.abs(v)>40&&Math.abs(v)>Math.abs(x)*1.5){const T=this.mazeGen.size;v<-40?this.activeMapFloor-2>=1&&(this.activeMapFloor-=2,f=!0):v>40&&this.activeMapFloor+2<=T-2&&(this.activeMapFloor+=2,f=!0)}f||(this.mapPanOffsetX=r+x,this.mapPanOffsetY=c+v),d.preventDefault()}}},{passive:!1}),t.addEventListener("touchend",d=>{if(l=!1,u=!1,p<8&&!f){const h=d.changedTouches[0];if(h){const x={clientX:h.clientX,clientY:h.clientY};this.handleIsometricClick(x)}}}),t.addEventListener("wheel",d=>{if(!this.isMap3DActive||this.isIntroPlaying)return;d.preventDefault();const h=t.getBoundingClientRect(),x=d.clientX-h.left,v=d.clientY-h.top,y=this.mapZoom,T=1.15;let A=d.deltaY<0?y*T:y/T;A=Math.max(.5,Math.min(4,A));const S=h.width,I=h.height,M=A/y;this.mapPanOffsetX=x-(x-(S/2+this.mapPanOffsetX))*M-S/2,this.mapPanOffsetY=v-(v-(I/2+this.mapPanOffsetY))*M-I/2,this.mapZoom=A},{passive:!1});let g=!1,m=0,_=0;t.addEventListener("mousedown",d=>{if(!this.isMap3DActive||this.isIntroPlaying)return;const h=t.getBoundingClientRect(),x=d.clientX-h.left,v=d.clientY-h.top;if(!(this.floorClickRects&&this.floorClickRects.some(y=>x>=y.x&&x<=y.x+y.w&&v>=y.y&&v<=y.y+y.h))){if(this.isTeleportMode){if(this.teleportConfirmModalActive&&this.teleportModalClickRects&&this.teleportModalClickRects.some(y=>x>=y.x&&x<=y.x+y.w&&v>=y.y&&v<=y.y+y.h)||!this.teleportConfirmModalActive&&this.teleportDotsClickRects&&this.teleportDotsClickRects.some(y=>x>=y.x&&x<=y.x+y.w&&v>=y.y&&v<=y.y+y.h))return;if(this.isMouseOrTouchDetected&&!this.teleportConfirmModalActive&&this.teleportGoBtnClickRect){const y=this.teleportGoBtnClickRect;if(x>=y.x&&x<=y.x+y.w&&v>=y.y&&v<=y.y+y.h)return}}g=!0,m=d.clientX,_=d.clientY}}),window.addEventListener("mousemove",d=>{if(g){const h=d.clientX-m,x=d.clientY-_;this.mapPanOffsetX+=h,this.mapPanOffsetY+=x,m=d.clientX,_=d.clientY}}),window.addEventListener("mouseup",()=>{g=!1}),t.addEventListener("mousemove",d=>{if(!this.isMap3DActive||this.isIntroPlaying)return;const h=t.getBoundingClientRect(),x=d.clientX-h.left,v=d.clientY-h.top;if(t.style.cursor="default",this.isTeleportMode){if(this.isMouseOrTouchDetected&&!this.teleportConfirmModalActive&&this.teleportGoBtnClickRect){const y=this.teleportGoBtnClickRect;if(x>=y.x&&x<=y.x+y.w&&v>=y.y&&v<=y.y+y.h){t.style.cursor="pointer";return}}if(this.teleportConfirmModalActive&&this.teleportModalClickRects){for(const y of this.teleportModalClickRects)if(x>=y.x&&x<=y.x+y.w&&v>=y.y&&v<=y.y+y.h){this.teleportModalSelection=y.selection,t.style.cursor="pointer";return}}else if(this.teleportDotsClickRects){const y=this.getSelectableTeleportIndices();for(const T of this.teleportDotsClickRects)if(x>=T.x&&x<=T.x+T.w&&v>=T.y&&v<=T.y+T.h&&y.includes(T.index)){this.selectedTeleportIndex=T.index;const A=this.allTeleports[T.index];this.activeMapFloor=A.z,this.mapCursor={x:A.x,y:A.y,z:A.z},t.style.cursor="pointer";return}}}if(!this.isTeleportMode){const y=this.mazeGen.size,T=this.activeMapFloor;let A=h.width*.7/y;A=Math.max(20,Math.min(48,A));const S=A*this.mapZoom,I=S/2,M=S/4,b=I*5,F=h.width/2+this.mapPanOffsetX,D=h.height/2+this.mapPanOffsetY,Y=[];T+2<=y-2&&Y.push(T+2),T+1<y&&Y.push(T+1),Y.push(T),T-1>=0&&Y.push(T-1),T-2>=1&&Y.push(T-2);for(const R of Y){const U=D-(R-T)*b,G=(x-F)/I,Z=(v-U)/M,V=Math.round((G+Z)/2),W=Math.round((Z-G)/2);if(V>=0&&V<y&&W>=0&&W<y&&this.getInteractiveElements(T).some(nt=>nt.x===V&&nt.y===W&&nt.z===R)){this.mapCursor={x:V,y:W,z:R},t.style.cursor="pointer";return}}}})}handleIsometricClick(t){if(!this.isMap3DActive||this.isIntroPlaying)return;const e=this.isometricCanvas.getBoundingClientRect(),i=t.clientX-e.left,n=t.clientY-e.top;if(this.isTeleportMode){if(this.teleportConfirmModalActive){if(this.teleportModalClickRects){for(const v of this.teleportModalClickRects)if(i>=v.x&&i<=v.x+v.w&&n>=v.y&&n<=v.y+v.h){if(v.selection==="go"){const y=this.allTeleports[this.selectedTeleportIndex];this.teleportTo(y.x,y.y,y.z),this.toggleTeleportMap(!1)}else this.teleportConfirmModalActive=!1;return}}this.teleportConfirmModalActive=!1;return}if(this.isMouseOrTouchDetected&&!this.teleportConfirmModalActive&&this.teleportGoBtnClickRect){const v=this.teleportGoBtnClickRect;if(i>=v.x&&i<=v.x+v.w&&n>=v.y&&n<=v.y+v.h){const y=this.allTeleports[this.selectedTeleportIndex],T=Math.floor(this.player.x),A=Math.floor(this.player.y),S=this.player.z,I=y&&y.x===T&&y.y===A&&y.z===S;y&&!I&&(this.teleportTo(y.x,y.y,y.z),this.toggleTeleportMap(!1));return}}if(this.teleportDotsClickRects){const v=this.teleportDotsClickRects.find(y=>i>=y.x&&i<=y.x+y.w&&n>=y.y&&n<=y.y+y.h);if(v){if(this.getSelectableTeleportIndices().includes(v.index)){this.selectedTeleportIndex=v.index;const T=this.allTeleports[v.index];this.activeMapFloor=T.z,this.mapCursor={x:T.x,y:T.y,z:T.z}}return}}}if(this.floorClickRects){for(const v of this.floorClickRects)if(i>=v.x&&i<=v.x+v.w&&n>=v.y&&n<=v.y+v.h){this.activeMapFloor=v.floor;return}}const a=this.mazeGen.size,o=this.activeMapFloor;let r=e.width*.7/a;r=Math.max(20,Math.min(48,r));const c=r*this.mapZoom,l=c/2,u=c/4,f=l*5,p=e.width/2+this.mapPanOffsetX,g=e.height/2+this.mapPanOffsetY,m=(v,y,T)=>{const A=(v-y)*l+p,S=(v+y)*u-(T-o)*f+g;return{x:A,y:S}};if(this.isTeleportMode){const v=this.getInteractiveElements(o);let y=null,T=1/0;const A=this.isTouchDevice?52:35;for(const S of v){if(S.type!=="teleport")continue;const I=m(S.x,S.y,S.z),M=i-I.x,b=n-I.y,F=Math.sqrt(M*M+b*b);F<T&&(T=F,y=S)}if(y&&T<=A){const{x:S,y:I,z:M}=y,b=this.allTeleports.findIndex(D=>D.x===S&&D.y===I&&D.z===M),F=this.getSelectableTeleportIndices();b!==-1&&F.includes(b)&&(this.selectedTeleportIndex=b,this.mapCursor={x:S,y:I,z:M})}return}const _=this.getInteractiveElements(o);let d=null,h=1/0;const x=this.isTouchDevice?52:35;for(const v of _){const y=m(v.x,v.y,v.z),T=i-y.x,A=n-y.y,S=Math.sqrt(T*T+A*A);S<h&&(h=S,d=v)}if(d&&h<=x){this.mapCursor={x:d.x,y:d.y,z:d.z},this.triggerPathReveal(d.x,d.y,d.z);return}}navigateCursor(t){const e=this.activeMapFloor,i=this.getInteractiveElements(e);if(i.length===0)return;const n=this.mapCursor.x,a=this.mapCursor.y,o=this.mapCursor.z,r=this.mazeGen.size;if(t==="left"){if(i.find(l=>l.x===n&&l.y===a&&l.z===e+1&&o===e-1)){this.mapCursor={x:n,y:a,z:e+1};return}for(let l=n-1;l>=0;l--){const u=i.filter(f=>f.x===l&&f.y===a);if(u.length>0){const f=u.find(g=>g.z===e-1),p=u.find(g=>g.z===e+1);f&&p?this.mapCursor={x:l,y:a,z:e-1}:this.mapCursor={x:l,y:a,z:u[0].z};return}}}else if(t==="right"){if(i.find(l=>l.x===n&&l.y===a&&l.z===e-1&&o===e+1)){this.mapCursor={x:n,y:a,z:e-1};return}for(let l=n+1;l<r;l++){const u=i.filter(f=>f.x===l&&f.y===a);if(u.length>0){const f=u.find(g=>g.z===e-1),p=u.find(g=>g.z===e+1);f&&p?this.mapCursor={x:l,y:a,z:e+1}:this.mapCursor={x:l,y:a,z:u[0].z};return}}}else if(t==="up"){if(i.find(l=>l.x===n&&l.y===a&&l.z===e-1&&o===e+1)){this.mapCursor={x:n,y:a,z:e-1};return}for(let l=a-1;l>=0;l--){const u=i.filter(f=>f.y===l);if(u.length>0){let f=-1,p=1/0;for(const d of u){const h=Math.abs(d.x-n);h<p?(p=h,f=d.x):h===p&&d.x<f&&(f=d.x)}const g=u.filter(d=>d.x===f),m=g.find(d=>d.z===e-1),_=g.find(d=>d.z===e+1);m&&_?this.mapCursor={x:f,y:l,z:e+1}:this.mapCursor={x:f,y:l,z:g[0].z};return}}}else if(t==="down"){if(i.find(l=>l.x===n&&l.y===a&&l.z===e+1&&o===e-1)){this.mapCursor={x:n,y:a,z:e+1};return}for(let l=a+1;l<r;l++){const u=i.filter(f=>f.y===l);if(u.length>0){let f=-1,p=1/0;for(const d of u){const h=Math.abs(d.x-n);h<p?(p=h,f=d.x):h===p&&d.x<f&&(f=d.x)}const g=u.filter(d=>d.x===f),m=g.find(d=>d.z===e-1),_=g.find(d=>d.z===e+1);m&&_?this.mapCursor={x:f,y:l,z:e-1}:this.mapCursor={x:f,y:l,z:g[0].z};return}}}}getInteractiveElements(t){const e=[],i=this.mazeGen.size,n=this.mazeGen.TYPES,a=(o,r,c)=>{if(c<0||c>=i)return!1;const l=this.maze.get(o,r,c);return l===n.VISITED||l===n.START||l===n.ELEVATOR_VISITED||l===n.TELEPORT&&this.discoveredTeleports.has(`${o},${r},${c}`)};for(let o=0;o<i;o++)for(let r=0;r<i;r++){const c=this.maze.get(o,r,t);if(c===n.WALL)continue;const l=c===n.TELEPORT,u=l&&this.discoveredTeleports.has(`${o},${r},${t}`);if(u){e.push({x:o,y:r,z:t,type:"teleport"});continue}if(c===n.START){e.push({x:o,y:r,z:t,type:"start"});continue}if(c===n.EXIT){this.keysCollected===this.totalKeys&&this.exitPathfinderUnlocked&&e.push({x:o,y:r,z:t,type:"exit"});continue}(c===n.PATH||l&&!u)&&this.isNearVisited(o,r,t)&&e.push({x:o,y:r,z:t,type:"known"})}for(const o of[t-1,t+1])if(!(o<0||o>=i||o-1<1||o+1>=i))for(let r=0;r<i;r++)for(let c=0;c<i;c++){const l=this.maze.get(r,c,o);if(l===n.WALL)continue;const u=l===n.ELEVATOR_VISITED;l===1&&(a(r,c,o-1)||a(r,c,o+1))&&!u&&a(r,c,t)&&e.push({x:r,y:c,z:o,type:"shaft"})}return e}drawIsometricMap(){if(!this.isMap3DActive||this.isIntroPlaying)return;const t=this.isometricCanvas,e=this.isometricCtx;if(!t||!e)return;const i=t.width=window.innerWidth,n=t.height=window.innerHeight;e.clearRect(0,0,i,n),e.fillStyle="#000000",e.fillRect(0,0,i,n);const a=this.mazeGen.size,o=this.activeMapFloor,r=this.visualActiveFloor;let c=i*.7/a;c=Math.max(20,Math.min(48,c));const l=c*this.mapZoom,u=l/2,f=l/2,p=l/4,g=f*5,m=i/2+this.mapPanOffsetX,_=n/2+this.mapPanOffsetY,d=(C,z,q)=>{const B=C,j=z,ct=(B-j)*f+m,pt=(B+j)*p-(q-r)*g+_;return{x:ct,y:pt}},h=C=>{e.strokeStyle=`rgba(0, 255, 0, ${.15*C})`,e.lineWidth=1;for(let z=0;z<a;z++)for(let q=0;q<a;q++){const B=d(q,z,o);e.beginPath(),e.moveTo(B.x,B.y-p),e.lineTo(B.x+f,B.y),e.lineTo(B.x,B.y+p),e.lineTo(B.x-f,B.y),e.closePath(),e.stroke()}},x=(C,z,q,B,j,ct,pt=1)=>{e.save(),e.globalAlpha=pt,e.beginPath(),e.moveTo(C-q,z),e.lineTo(C,z+B),e.lineTo(C,z+B-j),e.lineTo(C-q,z-j),e.closePath(),e.fillStyle=ct,e.fill(),e.fillStyle="rgba(0, 0, 0, 0.15)",e.fill(),e.beginPath(),e.moveTo(C,z+B),e.lineTo(C+q,z),e.lineTo(C+q,z-j),e.lineTo(C,z+B-j),e.closePath(),e.fillStyle=ct,e.fill(),e.fillStyle="rgba(0, 0, 0, 0.3)",e.fill(),e.beginPath(),e.moveTo(C-q,z-j),e.lineTo(C,z+B-j),e.lineTo(C+q,z-j),e.lineTo(C,z-B-j),e.closePath(),e.fillStyle=ct,e.fill(),e.restore()},v=(C,z,q)=>{if(q<0||q>=a)return!1;const B=this.maze.get(C,z,q);return B===this.mazeGen.TYPES.VISITED||B===this.mazeGen.TYPES.START||B===this.mazeGen.TYPES.ELEVATOR_VISITED||B===this.mazeGen.TYPES.TELEPORT&&this.discoveredTeleports.has(`${C},${z},${q}`)},y=(C,z,q,B,j,ct,pt,Pt,H,Bt)=>{e.save(),e.globalAlpha=Bt;const gt=H?"#ffffff":Pt?Q.COLORS.NEON_UP:Q.COLORS.NEON_UP_UNUSED,yt=H?"#ffffff":Pt?Q.COLORS.NEON_DOWN:Q.COLORS.NEON_DOWN_UNUSED;if(ct&&pt)e.beginPath(),e.moveTo(C,z-j-B),e.lineTo(C-q,z-j),e.lineTo(C,z-j+B),e.lineTo(C,z-j),e.closePath(),e.fillStyle=yt,e.fill(),e.beginPath(),e.moveTo(C,z-j-B),e.lineTo(C,z-j),e.lineTo(C,z-j+B),e.lineTo(C+q,z-j),e.closePath(),e.fillStyle=gt,e.fill(),e.beginPath(),e.moveTo(C-q,z),e.lineTo(C,z+B),e.lineTo(C,z+B-j),e.lineTo(C-q,z-j),e.closePath(),e.fillStyle=yt,e.fill(),e.fillStyle="rgba(0, 0, 0, 0.15)",e.fill(),e.beginPath(),e.moveTo(C,z+B),e.lineTo(C+q,z),e.lineTo(C+q,z-j),e.lineTo(C,z+B-j),e.closePath(),e.fillStyle=gt,e.fill(),e.fillStyle="rgba(0, 0, 0, 0.3)",e.fill();else{const ut=ct?gt:yt;e.beginPath(),e.moveTo(C-q,z-j),e.lineTo(C,z+B-j),e.lineTo(C+q,z-j),e.lineTo(C,z-B-j),e.closePath(),e.fillStyle=ut,e.fill(),e.beginPath(),e.moveTo(C-q,z),e.lineTo(C,z+B),e.lineTo(C,z+B-j),e.lineTo(C-q,z-j),e.closePath(),e.fillStyle=ut,e.fill(),e.fillStyle="rgba(0, 0, 0, 0.15)",e.fill(),e.beginPath(),e.moveTo(C,z+B),e.lineTo(C+q,z),e.lineTo(C+q,z-j),e.lineTo(C,z+B-j),e.closePath(),e.fillStyle=ut,e.fill(),e.fillStyle="rgba(0, 0, 0, 0.3)",e.fill()}e.restore()},T=(C,z)=>{const q=this.mazeGen.TYPES;for(let B=0;B<a;B++)for(let j=0;j<a;j++){const ct=this.maze.get(j,B,C),pt=d(j,B,C),Pt=ct===q.TELEPORT,H=Pt&&this.discoveredTeleports.has(`${j},${B},${C}`),Bt=ct===q.VISITED||ct===q.START||ct===q.ELEVATOR_VISITED||H,gt=(ct===q.PATH||Pt&&!H)&&this.isNearVisited(j,B,C),yt=this.revealedPathSet.has(`${j},${B},${C}`),ut=ct===q.KEY,Gt=ct===q.EXIT;if(ct===q.WALL||ct===q.STATUE){if(this.isNearVisited(j,B,C)){const w=f*.45,E=p*.45,k=u*.25,ot="rgba(0, 255, 0, 0.7)",at=[{dx:-.23,dy:-.23},{dx:.23,dy:-.23},{dx:-.23,dy:.23},{dx:.23,dy:.23}];for(const rt of at){const vt=d(j+rt.dx,B+rt.dy,C);x(vt.x,vt.y,w,E,k,ot,z)}}continue}for(const w of this.hunters){if(w.state==="SLEEP")continue;const E=w.visualZ!==null?w.visualZ:w.z,k=w.visualX!==null?w.visualX:w.x,ot=w.visualY!==null?w.visualY:w.y;if(E===null||k===null||ot===null)continue;const at=Math.round((E-1)/2)*2+1,rt=Math.max(0,Math.min(a-1,Math.floor(k))),vt=Math.max(0,Math.min(a-1,Math.floor(ot)));if(j===rt&&B===vt&&C===at){const dt=d(k,ot,E);b(w,dt.x,dt.y-1.5,z)}}if(Bt||gt||yt||ut||Gt){const E=C<a-1&&this.maze.get(j,B,C+1)!==q.WALL&&this.maze.get(j,B,C+1)!==q.STATUE,k=C>0&&this.maze.get(j,B,C-1)!==q.WALL&&this.maze.get(j,B,C-1)!==q.STATUE,ot=this.mapCursor.x===j&&this.mapCursor.y===B&&this.mapCursor.z===C;if((Bt||yt)&&(E||k))y(pt.x,pt.y,f,p,1.5,E,k,Bt,yt,z);else{let vt="#222222";if(yt)vt="#ffffff";else if(Gt)vt=this.keysCollected===this.totalKeys?Q.COLORS.EXIT:"#ff3300";else if(H)vt="#ffd700";else if(Bt)ct===q.START?vt=Q.COLORS.START:vt="#444444";else if(gt)if(ot){const dt=.5+.5*Math.sin(performance.now()/120);vt=`rgb(${Math.floor(31+224*dt)}, ${Math.floor(58+197*dt)}, ${Math.floor(82+173*dt)})`}else vt="#1f3a52";else ut&&(vt="#111111");x(pt.x,pt.y,f,p,1.5,vt,z)}if(ut&&S(pt.x,pt.y-1.5,z),H){const vt=this.inactiveTeleportPos&&this.inactiveTeleportPos.x===j&&this.inactiveTeleportPos.y===B&&this.inactiveTeleportPos.z===C;let dt=Q.COLORS.TELEPORT;vt&&(dt=Q.COLORS.TELEPORT_INACTIVE),I(pt.x,pt.y-1.5,dt,z,ot)}j===Math.floor(this.player.x)&&B===Math.floor(this.player.y)&&C===this.player.z&&M(pt.x,pt.y-1.5,z)}}},A=(C,z)=>{const q=this.mazeGen.TYPES;for(let B=0;B<a;B++)for(let j=0;j<a;j++){const ct=this.maze.get(j,B,C);if(ct===q.WALL)continue;const pt=this.revealedPathSet.has(`${j},${B},${C}`),Pt=ct===q.ELEVATOR_VISITED;if(ct===1&&(v(j,B,C-1)||v(j,B,C+1)),pt||v(j,B,o)){const H=d(j,B,C-1);H.y-=1.5;const Bt=d(j,B,C+1);let gt=Q.COLORS.PATH_KNOWN;pt?gt="#ffffff":Pt&&(gt=Q.COLORS.PATH_VISITED);const yt=this.mapCursor.x===j&&this.mapCursor.y===B&&this.mapCursor.z===C;let ut=gt,Gt=z;yt&&(Gt=.4+.6*(.5+.5*Math.sin(performance.now()/120)),ut="#ffffff");const w=(ot=>{const at=ot.replace("#",""),rt=parseInt(at,16),vt=rt>>16&255,dt=rt>>8&255,Tt=rt&255;return`${vt}, ${dt}, ${Tt}`})(ut),E=f*.25;e.save(),e.globalAlpha=Gt;const k=e.createLinearGradient(0,H.y,0,Bt.y);k.addColorStop(0,`rgba(${w}, 0.15)`),k.addColorStop(.2,`rgba(${w}, 0.65)`),k.addColorStop(.5,`rgba(${w}, 0.95)`),k.addColorStop(.8,`rgba(${w}, 0.65)`),k.addColorStop(1,`rgba(${w}, 0.15)`),e.beginPath(),e.moveTo(H.x-E,H.y),e.lineTo(H.x,H.y+E/2),e.lineTo(Bt.x,Bt.y+E/2),e.lineTo(Bt.x-E,Bt.y),e.closePath(),e.fillStyle=k,e.fill(),e.fillStyle="rgba(0, 0, 0, 0.15)",e.fill(),e.beginPath(),e.moveTo(H.x,H.y+E/2),e.lineTo(H.x+E,H.y),e.lineTo(Bt.x+E,Bt.y),e.lineTo(Bt.x,Bt.y+E/2),e.closePath(),e.fillStyle=k,e.fill(),e.fillStyle="rgba(0, 0, 0, 0.3)",e.fill(),e.restore()}}},S=(C,z,q)=>{e.save(),e.globalAlpha=q;const B=Math.sin(performance.now()/200)*3-6,j=z+B;e.beginPath(),e.moveTo(C,j-5),e.lineTo(C+4,j),e.lineTo(C,j+5),e.lineTo(C-4,j),e.closePath(),e.fillStyle="#ffd700",e.fill(),e.strokeStyle="#ffffff",e.lineWidth=1,e.stroke(),e.restore()},I=(C,z,q,B,j)=>{e.save(),e.globalAlpha=B;const ct=Math.sin(performance.now()/250)*2-4,pt=z+ct;if(j){e.save();const Pt=1+.35*(.5+.5*Math.sin(performance.now()/100));e.beginPath(),e.arc(C,pt,7*Pt,0,Math.PI*2),e.fillStyle="rgba(255, 255, 255, 0.4)",e.fill(),e.restore()}e.beginPath(),e.arc(C,pt,5,0,Math.PI*2),e.fillStyle=j?"#ffffff":q,e.fill(),e.strokeStyle="#ffffff",e.lineWidth=1.2,e.stroke(),e.restore()},M=(C,z,q)=>{const B=`${this.playerVertical}_${this.playerSide}`,j=this.mageImages[B];let ct=q;this.deathAnimation&&this.deathAnimation.active&&(Math.floor(Date.now()/120)%2===0||(ct=.2));const pt=f*.55,Pt=p*.55,H=C-f*.12,Bt=z-p*.12;if(e.save(),e.beginPath(),e.ellipse(H,Bt,pt,Pt,0,0,Math.PI*2),e.fillStyle=`rgba(0, 0, 0, ${ct*.45})`,e.fill(),e.restore(),j&&j.complete){e.save(),e.globalAlpha=ct;const gt=l*.7,yt=gt,ut=gt*(j.height/j.width),Gt=z-ut;e.drawImage(j,C-yt/2,Gt,yt,ut),e.restore()}else e.save(),e.globalAlpha=ct,e.beginPath(),e.arc(C,z-3,5,0,Math.PI*2),e.fillStyle=Q.COLORS.PLAYER,e.fill(),e.strokeStyle=Q.COLORS.PLAYER_OUTLINE,e.lineWidth=1.5,e.stroke(),e.restore();if(this.deathAnimation&&this.deathAnimation.active){const gt=Math.min(1,this.deathAnimation.delayElapsed/this.deathAnimation.delayDuration),yt=-(j&&j.complete?l*.7*(j.height/j.width):l*.5),ut=l*.7,Gt=(1-gt)*yt-4*ut*gt*(1-gt);if(this.keyImage.complete&&this.keyImage.naturalWidth!==0){e.save();const xt=l*.55;e.drawImage(this.keyImage,C-xt/2,z-xt/2+Gt,xt,xt),e.restore()}else e.save(),e.beginPath(),e.arc(C,z+Gt,l*.15,0,2*Math.PI),e.fillStyle="#ffd700",e.fill(),e.restore()}if(Q.SHOW_COLLISION_DEBUG){e.save();const gt=Q.PLAYER_COLLISION_OFFSET_X||0,yt=Q.PLAYER_COLLISION_OFFSET_Y||0,ut=(gt-yt)*f,Gt=(gt+yt)*p,xt=C+ut,w=z+Gt;e.beginPath(),e.moveTo(xt,w-Q.PLAYER_COLLISION_RADIUS*u),e.lineTo(xt+Q.PLAYER_COLLISION_RADIUS*l,w),e.lineTo(xt,w+Q.PLAYER_COLLISION_RADIUS*u),e.lineTo(xt-Q.PLAYER_COLLISION_RADIUS*l,w),e.closePath(),e.strokeStyle="#ff0000",e.lineWidth=1.5,e.stroke(),e.restore()}},b=(C,z,q,B)=>{if(C&&C.lowCanvas){e.save(),e.globalAlpha=B;const j=l*.9;e.save(),e.beginPath();const ct=f*.6,pt=p*.6;e.ellipse(z,q,ct,pt,0,0,Math.PI*2),e.fillStyle="rgba(0, 0, 0, 0.35)",e.fill(),e.restore();const Pt=Math.sin(C.jellyTime*3)*(l*.06),H=l*.38+Pt,Bt=q-H,gt=C.jellyTime,yt=Math.sin(gt)*6,ut=Math.cos(gt*.7)*4,Gt=1+Math.sin(gt*1.2)*.06,xt=1+Math.cos(gt*.8)*.06,w=yt*Math.PI/180,E=ut*Math.PI/180;e.save(),e.translate(z,Bt),e.transform(Gt,Math.tan(E),Math.tan(w),xt,0,0),e.imageSmoothingEnabled=!1,e.drawImage(C.lowCanvas,-j/2,-j/2,j,j),e.restore(),e.restore()}else{e.save(),e.globalAlpha=B;const j=4+Math.sin(performance.now()/100)*1.5;e.beginPath(),e.arc(z,q-3,j,0,Math.PI*2),e.fillStyle=Q.COLORS.HUNTER||"#ff00ff",e.fill(),e.strokeStyle="#ff0000",e.lineWidth=1,e.stroke(),e.restore()}},F=C=>{const z=Math.abs(C-r);return z<=2?1-z/2*(1-.35):z<4?.35*(1-(z-2)/2):0};for(let C=1;C<a;C+=2){if(C-1>=0&&(C-1===o-1||C-1===o+1)){const q=F(C-2),B=F(C),j=Math.max(q,B)*.8;j>.01&&A(C-1,j)}const z=F(C);z>.01&&(C===o&&h(z),T(C,z))}const D=this.getInteractiveElements(o);if(D.forEach(C=>{if(C.type==="shaft"){const z=d(C.x,C.y,C.z),q=this.mapCursor.x===C.x&&this.mapCursor.y===C.y&&this.mapCursor.z===C.z;e.save();const B=.5+.5*Math.sin(performance.now()/150);e.beginPath(),e.arc(z.x,z.y,7.5+B*2.5,0,Math.PI*2),e.fillStyle=q?"#ffffff":"#00ffff",e.fill(),e.strokeStyle="#ffffff",e.lineWidth=1.5,e.stroke(),e.restore()}}),this.mapCursor.x===Math.floor(this.player.x)&&this.mapCursor.y===Math.floor(this.player.y)&&this.mapCursor.z===this.player.z||D.some(C=>C.x===this.mapCursor.x&&C.y===this.mapCursor.y&&C.z===this.mapCursor.z)){const C=d(this.mapCursor.x,this.mapCursor.y,this.mapCursor.z),z=Math.sin(performance.now()/150)*4;e.save();const q=1-z/16,B=d(this.mapCursor.x,this.mapCursor.y,o);e.translate(B.x,B.y),e.scale(1,.5),e.beginPath(),e.arc(0,0,8*q,0,Math.PI*2),e.fillStyle=`rgba(0, 0, 0, ${.55*q})`,e.fill(),e.restore(),e.save();const j=C.x,ct=C.y-u-12+z;e.beginPath(),e.moveTo(j,ct),e.lineTo(j-6,ct-8),e.lineTo(j-3,ct-8),e.lineTo(j-3,ct-16),e.lineTo(j+3,ct-16),e.lineTo(j+3,ct-8),e.lineTo(j+6,ct-8),e.closePath(),e.fillStyle="#00ffff",e.fill(),e.strokeStyle="#ffffff",e.lineWidth=1.5,e.stroke(),e.restore()}const U=45,G=n/3,Z=n/3*2,V=i-U;e.save(),e.strokeStyle="rgba(0, 255, 255, 0.25)",e.lineWidth=4,e.lineCap="round",e.beginPath(),e.moveTo(V,G),e.lineTo(V,Z),e.stroke(),e.strokeStyle="rgba(0, 255, 255, 0.4)",e.lineWidth=1.5;for(let C=G;C<=Z;C+=(Z-G)/6)e.beginPath(),e.moveTo(V-5,C),e.lineTo(V+5,C),e.stroke();e.restore();const W=(G+Z)/2,J=(Z-G)/2,it=r-o,nt=W-it/2*J;if(e.save(),e.fillStyle="#00ffff",e.beginPath(),e.arc(V,nt,5,0,Math.PI*2),e.fill(),e.restore(),this.floorClickRects=[],[{floor:o+2,y:G,label:`${(o+2+1)/2}F`,valid:o+2<=a-2},{floor:o,y:W,label:`${(o+1)/2}F`,valid:!0},{floor:o-2,y:Z,label:`${(o-2+1)/2}F`,valid:o-2>=1}].forEach(C=>{if(!C.valid)return;const z=60,q=36,B=V-z-15,j=C.y-q/2,ct=C.floor===o;e.save(),e.beginPath(),e.moveTo(B+6,j),e.lineTo(B+z,j),e.lineTo(B+z,j+q-6),e.lineTo(B+z-6,j+q),e.lineTo(B,j+q),e.lineTo(B,j+6),e.closePath(),e.fillStyle=ct?"rgba(0, 255, 255, 0.25)":"rgba(0, 0, 0, 0.6)",e.strokeStyle=ct?"#00ffff":"rgba(0, 255, 255, 0.35)",e.lineWidth=ct?2:1,e.fill(),e.stroke(),e.restore(),e.strokeStyle=ct?"#00ffff":"rgba(0, 255, 255, 0.35)",e.lineWidth=ct?2:1,e.beginPath(),e.moveTo(B+z,C.y),e.lineTo(V-2,C.y),e.stroke(),e.fillStyle=ct?"#00ffff":"rgba(255, 255, 255, 0.5)",e.font="bold 8px Courier New",e.textAlign="center",e.textBaseline="top",e.fillText("LEVEL",B+z/2,j+6),e.fillStyle="#ffffff",e.font="bold 15px Courier New",e.textBaseline="top",e.fillText(C.label,B+z/2,j+16),this.floorClickRects.push({floor:C.floor,x:B,y:j,w:z+15,h:q})}),this.isTeleportMode||(e.save(),e.beginPath(),e.moveTo(31,30),e.lineTo(145,30),e.lineTo(145,60),e.lineTo(139,66),e.lineTo(25,66),e.lineTo(25,36),e.closePath(),e.fillStyle="rgba(0, 0, 0, 0.7)",e.strokeStyle="rgba(0, 255, 255, 0.35)",e.lineWidth=1.5,e.fill(),e.stroke(),e.restore(),e.fillStyle="rgba(0, 255, 255, 0.7)",e.font="bold 8px 'Roboto', sans-serif",e.textAlign="center",e.textBaseline="top",e.fillText(It("hudPathfinders"),25+120/2,35),e.fillStyle="#ffffff",e.font="bold 13px 'Roboto', sans-serif",e.textBaseline="top",e.fillText(`${this.pathfindersRemaining} / ${this.totalPathfinders}`,25+120/2,46)),this.isTeleportMode){const q=i/2-90,B=30;e.save(),e.beginPath(),e.moveTo(q+8,B),e.lineTo(q+180-8,B),e.lineTo(q+180,B+8),e.lineTo(q+180,B+38-8),e.lineTo(q+180-8,B+38),e.lineTo(q+8,B+38),e.lineTo(q,B+38-8),e.lineTo(q,B+8),e.closePath(),e.fillStyle="rgba(255, 140, 0, 0.22)",e.strokeStyle="#ff8c00",e.lineWidth=2.5,e.fill(),e.stroke(),e.restore(),e.fillStyle="#ffffff",e.font="bold 15px 'Roboto', sans-serif",e.textAlign="center",e.textBaseline="middle",e.fillText(It("teleportWarning"),i/2,B+38/2)}if(this.isTeleportMode){const C=this.isTouchDevice?64:56,q=(this.allTeleports.length-1)*C,B=n-60,j=this.isMouseOrTouchDetected&&!this.teleportConfirmModalActive,ct=this.isTouchDevice?82:62,pt=this.isTouchDevice?40:30,Pt=this.isTouchDevice?46:36,H=j?Pt+ct:0,Bt=q+60+H,gt=this.isTouchDevice?74:62,yt=i/2-Bt/2,ut=B-gt/2,Gt=yt+30;if(e.save(),e.beginPath(),e.moveTo(yt+6,ut),e.lineTo(yt+Bt-6,ut),e.lineTo(yt+Bt,ut+6),e.lineTo(yt+Bt,ut+gt-6),e.lineTo(yt+Bt-6,ut+gt),e.lineTo(yt+6,ut+gt),e.lineTo(yt,ut+gt-6),e.lineTo(yt,ut+6),e.closePath(),e.fillStyle="rgba(0, 0, 0, 0.72)",e.strokeStyle="rgba(0, 255, 255, 0.25)",e.lineWidth=1,e.fill(),e.stroke(),e.restore(),this.teleportDotsClickRects=[],this.getSelectableTeleportIndices(),this.allTeleports.forEach((xt,w)=>{const E=Gt+w*C,k=`${xt.x},${xt.y},${xt.z}`,ot=this.discoveredTeleports.has(k),at=w===this.selectedTeleportIndex,rt=xt.x===Math.floor(this.player.x)&&xt.y===Math.floor(this.player.y)&&xt.z===this.player.z,vt=this.inactiveTeleportPos&&xt.x===this.inactiveTeleportPos.x&&xt.y===this.inactiveTeleportPos.y&&xt.z===this.inactiveTeleportPos.z;e.save();const dt=this.isTouchDevice?13:10,Tt=this.isTouchDevice?19:15;if(!ot)e.beginPath(),e.arc(E,B,dt,0,Math.PI*2),e.fillStyle="rgba(100, 100, 100, 0.45)",e.fill(),e.strokeStyle="rgba(255, 255, 255, 0.15)",e.stroke();else if(vt)e.beginPath(),e.arc(E,B,dt,0,Math.PI*2),e.fillStyle="rgba(255, 45, 0, 0.2)",e.fill(),e.strokeStyle="rgba(255, 45, 0, 0.4)",e.lineWidth=1.2,e.stroke();else{if(at){const zt=1+.3*(.5+.5*Math.sin(performance.now()/120)),lt=(this.isTouchDevice?28:22)*zt;e.beginPath(),e.arc(E,B,lt,0,Math.PI*2),e.fillStyle="rgba(0, 255, 255, 0.18)",e.fill()}e.beginPath(),e.arc(E,B,at?Tt:dt,0,Math.PI*2),e.fillStyle=at?"#ffffff":"#00b3ff",e.fill(),e.strokeStyle=at?"#00ffff":"#ffffff",e.lineWidth=at?1.5:1,e.stroke(),rt&&(e.beginPath(),e.arc(E,B,at?this.isTouchDevice?10:8:this.isTouchDevice?6:5,0,Math.PI*2),e.fillStyle="#39ff14",e.fill())}e.restore();const At=this.isTouchDevice?33:25;this.teleportDotsClickRects.push({x:E-At,y:B-At,w:At*2,h:At*2,index:w})}),j){const xt=Gt+q+30,w=B-pt/2;e.save(),e.beginPath(),e.rect(xt,w,ct,pt),e.fillStyle="rgba(0, 255, 255, 0.15)",e.strokeStyle="#00ffff",e.lineWidth=1.5,e.fill(),e.stroke(),e.fillStyle="#ffffff",e.font="bold 12px 'Roboto', sans-serif",e.textAlign="center",e.textBaseline="middle",e.fillText(It("teleportGo"),xt+ct/2,w+pt/2),e.restore(),this.teleportGoBtnClickRect={x:xt,y:w,w:ct,h:pt}}else this.teleportGoBtnClickRect=null;if(this.teleportConfirmModalActive){e.fillStyle="rgba(0, 0, 0, 0.6)",e.fillRect(0,0,i,n);const xt=320,w=160,E=i/2-xt/2,k=n/2-w/2;e.save(),e.beginPath(),e.moveTo(E+10,k),e.lineTo(E+xt-10,k),e.lineTo(E+xt,k+10),e.lineTo(E+xt,k+w-10),e.lineTo(E+xt-10,k+w),e.lineTo(E+10,k+w),e.lineTo(E,k+w-10),e.lineTo(E,k+10),e.closePath(),e.fillStyle="rgba(10, 18, 30, 0.94)",e.strokeStyle="#00ffff",e.lineWidth=2,e.fill(),e.stroke(),e.restore(),e.fillStyle="#00ffff",e.font="bold 15px 'Roboto', sans-serif",e.textAlign="center",e.textBaseline="top",e.fillText(It("teleportationLink"),i/2,k+16),e.strokeStyle="rgba(0, 255, 255, 0.2)",e.lineWidth=1,e.beginPath(),e.moveTo(E+15,k+34),e.lineTo(E+xt-15,k+34),e.stroke();const ot=this.allTeleports[this.selectedTeleportIndex];e.fillStyle="#ffffff",e.font="bold 15px 'Roboto', sans-serif",e.fillText(It("teleportJumpSector",{floor:(ot.z+1)/2}),i/2,k+52),e.fillStyle="rgba(255, 255, 255, 0.7)",e.font="13px 'Roboto', sans-serif",e.fillText(It("teleportTargetGrid",{x:ot.x,y:ot.y}),i/2,k+75);const at=100,rt=30,vt=i/2-at-15,dt=k+105,Tt=i/2+15,At=k+105;this.teleportModalClickRects=[{x:vt,y:dt,w:at,h:rt,selection:"go"},{x:Tt,y:At,w:at,h:rt,selection:"cancel"}];const zt=(lt,Ht,Vt,Nt)=>{const wt=this.teleportModalSelection===Nt;e.save(),e.beginPath(),e.moveTo(lt+4,Ht),e.lineTo(lt+at-4,Ht),e.lineTo(lt+at,Ht+4),e.lineTo(lt+at,Ht+rt-4),e.lineTo(lt+at-4,Ht+rt),e.lineTo(lt+4,Ht+rt),e.lineTo(lt,Ht+rt-4),e.lineTo(lt,Ht+4),e.closePath(),e.fillStyle=wt?"rgba(0, 255, 255, 0.35)":"rgba(0, 0, 0, 0.6)",e.strokeStyle=wt?"#00ffff":"rgba(0, 255, 255, 0.35)",e.lineWidth=wt?2:1,e.fill(),e.stroke(),e.restore(),e.fillStyle=wt?"#ffffff":"#00ffff",e.font="bold 13px 'Roboto', sans-serif",e.textAlign="center",e.textBaseline="middle",e.fillText(Vt,lt+at/2,Ht+rt/2)};zt(vt,dt,It("teleportGo"),"go"),zt(Tt,At,It("teleportCancel"),"cancel")}}}}function am(s){let t,e,i,n,a,o,r,c,l,u,f,p,g;return{c(){t=xi("section"),t.innerHTML='<div class="menu-content"><header><h1 class="game-title" data-i18n="gameTitle">VOID ESCAPE</h1></header> <div class="menu-stats-grid"><div class="stat-container hunter"><div class="stat-label" data-i18n="activeHunters">Active Hunters</div> <div class="stat-value" id="hunter-count">-</div></div> <div class="stat-container teleport"><div class="stat-label" data-i18n="activeTeleports">Active Teleports</div> <div class="stat-value" id="teleport-count">-</div></div> <div class="stat-container keys"><div class="stat-label" data-i18n="activeKeys">Active Keys</div> <div class="stat-value" id="keys-count">-</div></div> <div class="stat-container pathfinder"><div class="stat-label" data-i18n="availablePathfinders">Available Pathfinders</div> <div class="stat-value" id="pathfinder-count">-</div></div></div> <div class="control-group"><div class="degree-full-row"><span class="degree-label" data-i18n="mazeDegree">Maze Degree</span> <span class="degree-value" id="degree-val">-</span></div> <input type="range" id="maze-degree" aria-label="Ajustar Grau do Labirinto"/> <p class="hint" data-i18n="degreeHint">Controls the grid size. Higher values create larger, more complex mazes.</p></div> <div class="control-group switch-group"><div class="switch-container"><span class="switch-label" data-i18n="safeMode">Safe Mode</span> <label class="switch" for="safe-mode"><input type="checkbox" id="safe-mode" aria-label="Safe Mode"/> <span class="slider"></span></label></div> <p class="hint" data-i18n="safeModeHint">When active, no hunters will spawn in the maze.</p></div> <div class="menu-action-btns"><button id="start-btn" data-i18n="generateMaze">NEW GAME</button> <button id="continue-btn-menu" class="continue-btn" style="display:none" data-i18n="continue">CONTINUE</button></div> <p class="game-credits" data-i18n="gameCredits">a game by Bernard Rodrigues</p></div>',e=Ni(),i=xi("section"),i.innerHTML='<div class="story-container"><div id="story-image-canvas" class="story-image-box"><div id="story-image-loader" class="story-loader hidden"><div class="spinner"></div> <span data-i18n="loading">LOADING...</span></div> <img id="story-img" src="" alt="Story Image" style="display: none; max-width: 100%; max-height: 100%;"/></div> <div id="story-dialogue" class="story-dialogue-box"><span id="story-text"></span> <span id="story-arrow" class="story-arrow hidden">▼</span></div> <div class="story-actions"><button id="story-skip-btn">SKIP</button></div></div>',n=Ni(),a=xi("section"),a.innerHTML='<div class="popup-container victory"><h1 data-i18n="victoryTitle">Mission Accomplished</h1> <p data-i18n="victoryText">You have successfully navigated the 3D void.</p> <p class="victory-stats"><span data-i18n="mapCompletion">MAP COMPLETION</span>: <span id="victory-completion-rate">0%</span></p> <div class="end-game-btns"><button id="restart-btn-victory" class="end-btn" data-i18n="playAgain">PLAY AGAIN</button> <button id="menu-btn-victory" class="end-btn" data-i18n="mainMenu">MAIN MENU</button></div></div>',o=Ni(),r=xi("section"),r.innerHTML='<div class="popup-container death"><h1 data-i18n="gameOverTitle">Terminated</h1> <p data-i18n="gameOverText">You were caught by the void hunters.</p> <div class="end-game-btns"><button id="continue-btn-death" class="end-btn continue-highlight" data-i18n="continue">CONTINUE</button> <button id="retry-btn-death" class="end-btn" data-i18n="playAgain">PLAY AGAIN</button> <button id="menu-btn-death" class="end-btn" data-i18n="mainMenu">MAIN MENU</button></div></div>',c=Ni(),l=xi("section"),l.innerHTML='<div class="popup-container pause"><h1 data-i18n="pauseTitle">PAUSED</h1> <div class="end-game-btns"><button id="resume-btn" class="end-btn continue-highlight" data-i18n="resume">RESUME</button> <button id="menu-btn-pause" class="end-btn" data-i18n="mainMenu">MAIN MENU</button></div></div>',u=Ni(),f=xi("div"),f.innerHTML='<span class="saving-icon">💾</span> <span data-i18n="saving">SAVING...</span>',p=Ni(),g=xi("main"),g.innerHTML='<button id="mobile-pause-btn" class="hidden" aria-label="Pause Game">✕</button> <button id="mobile-teleport-exit-btn" class="hidden" aria-label="Exit Teleport Map">✕</button> <div id="left-hud-panel" class="intro-hidden"><div class="hud-item-group"><div class="keys-title" data-i18n="hudKeys">KEYS</div> <div class="keys-counter"><span id="keys-collected-count">0</span> / <span id="keys-total-count">0</span></div> <div id="keys-list-container"></div></div> <div class="hud-item-group" id="pathfinder-hud-group"><div class="pathfinders-title" data-i18n="hudPathfinders">PATHFINDERS</div> <div class="pathfinders-counter"><span id="pathfinders-remaining-count">0</span> / <span id="pathfinders-total-count">0</span></div></div></div> <div id="map-area-container" class="intro-hidden"><div id="hunter-status-panel"><span class="status-label" data-i18n="statusLabel">HUNTER STATUS:</span> <div class="status-marquee-container"><span id="hunter-status-val" class="status-marquee-text status--scanning" data-i18n="statusScanning">SCANNING</span></div></div> <div style="position: relative; display: flex; flex-direction: column; align-items: center; width: 100%; max-width: 90vw; margin-bottom: calc(var(--h-unit) * 2); margin-bottom: calc(var(--d-h-unit) * 2);"><canvas id="main-2d-canvas" aria-label="2D Navigation Map" style="margin-bottom: 0;"></canvas> <button id="mobile-zoom-btn" aria-label="Toggle Zoom"><svg id="zoom-out-icon" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="width: 100%; height: 100%;"><circle cx="11" cy="11" r="6"></circle><line x1="21" y1="21" x2="15.5" y2="15.5"></line><line x1="8" y1="11" x2="14" y2="11"></line></svg> <svg id="zoom-in-icon" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="width: 100%; height: 100%;" class="hidden"><circle cx="11" cy="11" r="6"></circle><line x1="21" y1="21" x2="15.5" y2="15.5"></line><line x1="11" y1="8" x2="11" y2="14"></line><line x1="8" y1="11" x2="14" y2="11"></line></svg></button></div> <div id="proximeter-container" class="hidden"><div class="proximeter-label" data-i18n="proximityDetector">PROXIMITY DETECTOR</div> <div class="proximeter-bar"><span class="proximeter-cell" data-index="1"></span> <span class="proximeter-cell" data-index="2"></span> <span class="proximeter-cell" data-index="3"></span> <span class="proximeter-cell" data-index="4"></span> <span class="proximeter-cell" data-index="5"></span> <span class="proximeter-cell" data-index="6"></span> <span class="proximeter-cell" data-index="7"></span> <span class="proximeter-cell" data-index="8"></span> <span class="proximeter-cell" data-index="9"></span> <span class="proximeter-cell" data-index="10"></span></div></div> <div id="bottom-hud-container" class="intro-hidden"><div id="floor-display" aria-live="polite"><span class="hud-label" data-i18n="hudFloor">Floor</span> <span id="current-floor">0</span></div> <div id="visited-display" aria-live="polite"><span class="hud-label" data-i18n="hudVisited">Visited</span> <span class="visited-value"><span id="visited-percent">0</span>%</span></div></div></div> <div id="right-hud-panel" class="intro-hidden"><aside id="map-legend"><h3 data-i18n="mapLegendTitle">MAP LEGEND</h3> <div class="legend-item"><span class="color-box color-box--visited"></span> <span data-i18n="legendVisited">Visited Path</span></div> <div class="legend-item"><span class="color-box color-box--known"></span> <span data-i18n="legendKnown">Known Path</span></div> <div class="legend-item"><span class="color-box color-box--start"></span> <span data-i18n="legendStart">Starting Point</span></div> <div class="legend-item"><span class="color-box color-box--exit"></span> <span data-i18n="legendExit">Maze Exit</span></div> <div id="legend-hunter" class="legend-item"><span class="color-box color-box--hunter"></span> <span data-i18n="legendHunter">Void Hunter</span></div> <div class="legend-item"><span class="color-box color-box--teleport"></span> <span data-i18n="legendTeleport">Teleport</span></div> <div class="legend-item"><span class="symbol-box"><svg viewBox="0 0 24 24" fill="none" style="width: 100%; height: 100%;"><path d="M12 2L5 9H9V11H15V9H19L12 2Z" fill="#00ffff"></path><path d="M12 22L19 15H15V13H9V15H5L12 22Z" fill="#ff00ff"></path></svg></span> <span data-i18n="legendElevator">Elevator</span></div></aside> <aside id="controls-hint"><h3 data-i18n="controlsHintTitle">CONTROLS HINT</h3> <div id="controls-hint-content"></div></aside></div> <nav id="mobile-controls" class="hidden"><button id="mobile-down" class="mobile-btn" disabled="" aria-label="Go Down">▼</button> <button id="mobile-map" class="mobile-btn" disabled="" aria-label="Open Map" data-i18n="map">MAP</button> <button id="mobile-up" class="mobile-btn" disabled="" aria-label="Go Up">▲</button></nav> <div id="map3d-container" class="hidden"></div>',Ne(t,"id","start-menu"),Ne(i,"id","story-screen"),Ne(i,"class","hidden"),Ne(a,"id","victory-screen"),Ne(a,"class","hidden"),Ne(r,"id","game-over-screen"),Ne(r,"class","hidden"),Ne(l,"id","pause-screen"),Ne(l,"class","hidden"),Ne(f,"id","saving-indicator"),Ne(f,"class","hidden"),Ne(g,"id","game-container")},m(m,_){Re(m,t,_),Re(m,e,_),Re(m,i,_),Re(m,n,_),Re(m,a,_),Re(m,o,_),Re(m,r,_),Re(m,c,_),Re(m,l,_),Re(m,u,_),Re(m,f,_),Re(m,p,_),Re(m,g,_)},p:an,i:an,o:an,d(m){m&&(Ae(t),Ae(e),Ae(i),Ae(n),Ae(a),Ae(o),Ae(r),Ae(c),Ae(l),Ae(u),Ae(f),Ae(p),Ae(g))}}}function rm(s){let t=null;function e(a){var o,r,c;t&&t.destroy(),sl(),(o=document.getElementById("start-menu"))==null||o.classList.add("hidden"),(r=document.getElementById("victory-screen"))==null||r.classList.add("hidden"),(c=document.getElementById("game-over-screen"))==null||c.classList.add("hidden"),t=new vo(a,Q.BRANCHING_FACTOR)}function i(){var o,r,c;const a=nl();a&&(t&&t.destroy(),(o=document.getElementById("start-menu"))==null||o.classList.add("hidden"),(r=document.getElementById("victory-screen"))==null||r.classList.add("hidden"),(c=document.getElementById("game-over-screen"))==null||c.classList.add("hidden"),t=new vo(a.degree,a.branchingFactor,a))}function n(){var o,r,c;t&&t.destroy(),(o=document.getElementById("victory-screen"))==null||o.classList.add("hidden"),(r=document.getElementById("game-over-screen"))==null||r.classList.add("hidden");const a=document.getElementById("continue-btn-menu");a&&(a.style.display=go()?"":"none"),(c=document.getElementById("start-menu"))==null||c.classList.remove("hidden")}return vl(()=>{Qo();const a=document.getElementById("maze-degree"),o=document.getElementById("degree-val"),r=document.getElementById("hunter-count"),c=document.getElementById("teleport-count"),l=document.getElementById("keys-count"),u=document.getElementById("pathfinder-count"),f=document.getElementById("safe-mode"),p=D=>{const R=f&&f.checked?0:Q.getHunterCount(D);r&&(r.innerText=String(R),r.style.color=R>0?"#f00":"#88ccff")};f&&a&&(f.onchange=()=>{p(parseInt(a.value))});const g=D=>{const Y=Q.getTeleportCount(D);c&&(c.innerText=String(Y))},m=D=>{const Y=Q.getHunterCount(D)*2;l&&(l.innerText=String(Y))},_=D=>{const Y=Q.getPathfinderCount(D);u&&(u.innerText=String(Y))};if(a){Q.MIN_MAZE_DEGREE!==void 0&&(a.min=String(Q.MIN_MAZE_DEGREE)),Q.MAX_MAZE_DEGREE!==void 0&&(a.max=String(Q.MAX_MAZE_DEGREE)),Q.MAZE_DEGREE!==void 0&&(a.value=String(Q.MAZE_DEGREE)),a.oninput=()=>{const Y=parseInt(a.value);o&&(o.innerText=String(Y)),p(Y),g(Y),m(Y),_(Y)};const D=parseInt(a.value);o&&(o.innerText=String(D)),p(D),g(D),m(D),_(D)}const d=document.getElementById("continue-btn-menu");d&&(d.style.display=go()?"":"none");const h=document.getElementById("mobile-pause-btn");h&&(h.onclick=D=>{D.stopPropagation(),t&&t.togglePause()});const x=document.getElementById("mobile-teleport-exit-btn");x&&(x.onclick=D=>{D.stopPropagation(),t&&t.isTeleportMode&&t.toggleTeleportMap(!1)});const v=document.getElementById("start-btn");v&&a&&(v.onclick=()=>{e(parseInt(a.value))});const y=document.getElementById("continue-btn-menu");y&&(y.onclick=()=>{i()});const T=document.getElementById("restart-btn-victory");T&&a&&(T.onclick=()=>{e(parseInt(a.value))});const A=document.getElementById("menu-btn-victory");A&&(A.onclick=()=>{n()});const S=document.getElementById("continue-btn-death");S&&(S.onclick=()=>{i()});const I=document.getElementById("retry-btn-death");I&&a&&(I.onclick=()=>{e(parseInt(a.value))});const M=document.getElementById("menu-btn-death");M&&(M.onclick=()=>{n()});const b=document.getElementById("resume-btn");b&&(b.onclick=()=>{t&&t.togglePause()});const F=document.getElementById("menu-btn-pause");F&&(F.onclick=()=>{n()})}),[]}class om extends Pl{constructor(t){super(),wl(this,t,rm,am,ul,{})}}new om({target:document.getElementById("app")});
