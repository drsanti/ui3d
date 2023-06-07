var dv=Object.defineProperty;var pv=(s,e,t)=>e in s?dv(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var j=(s,e,t)=>(pv(s,typeof e!="symbol"?e+"":e,t),t);import{o as ap,J as op,S as lp,i as cp,s as up,k as xn,q as Yt,l as yn,m as Mn,r as jt,h as Kt,n as Wt,b as Bo,H as Qe,I as kl,a as _i,c as vi,u as Rr,g as ko,d as Dc,f as mv,y as gv,z as _v,A as vv,B as xv,v as yv}from"../chunks/index.4f2e1f74.js";/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const cu="153",ds={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},ps={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Mv=0,Yh=1,bv=2,hp=1,Sv=2,Hi=3,ji=0,Un=1,yi=2,mr=0,Bs=1,jh=2,Kh=3,Zh=4,Ev=5,Us=100,Tv=101,Av=102,Jh=103,Qh=104,wv=200,Rv=201,Cv=202,Lv=203,fp=204,dp=205,Pv=206,Dv=207,Iv=208,Uv=209,Nv=210,Ov=0,Fv=1,Bv=2,Ic=3,kv=4,zv=5,Hv=6,Gv=7,pp=0,Vv=1,Wv=2,$i=0,Xv=1,qv=2,$v=3,Yv=4,jv=5,mp=300,Ws=301,Xs=302,Uc=303,Nc=304,rl=306,qs=1e3,Jn=1001,Xo=1002,on=1003,Oc=1004,zo=1005,Dn=1006,gp=1007,Yr=1008,gr=1009,Kv=1010,Zv=1011,uu=1012,_p=1013,ur=1014,Wi=1015,Oa=1016,vp=1017,xp=1018,Hr=1020,Jv=1021,Qn=1023,Qv=1024,ex=1025,Gr=1026,$s=1027,tx=1028,yp=1029,nx=1030,Mp=1031,bp=1033,zl=33776,Hl=33777,Gl=33778,Vl=33779,ef=35840,tf=35841,nf=35842,rf=35843,ix=36196,sf=37492,af=37496,of=37808,lf=37809,cf=37810,uf=37811,hf=37812,ff=37813,df=37814,pf=37815,mf=37816,gf=37817,_f=37818,vf=37819,xf=37820,yf=37821,Wl=36492,rx=36283,Mf=36284,bf=36285,Sf=36286,Fa=2300,Ys=2301,Xl=2302,Ef=2400,Tf=2401,Af=2402,sx=2500,ax=0,Sp=1,Fc=2,Ep=3e3,Vr=3001,ox=3200,lx=3201,Tp=0,cx=1,Wr="",qe="srgb",Ei="srgb-linear",Ap="display-p3",ql=7680,ux=519,hx=512,fx=513,dx=514,px=515,mx=516,gx=517,_x=518,vx=519,Bc=35044,wf="300 es",kc=1035,Xi=2e3,qo=2001;class Qr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,e);e.target=null}}}const _n=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Rf=1234567;const Ca=Math.PI/180,js=180/Math.PI;function di(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(_n[s&255]+_n[s>>8&255]+_n[s>>16&255]+_n[s>>24&255]+"-"+_n[e&255]+_n[e>>8&255]+"-"+_n[e>>16&15|64]+_n[e>>24&255]+"-"+_n[t&63|128]+_n[t>>8&255]+"-"+_n[t>>16&255]+_n[t>>24&255]+_n[n&255]+_n[n>>8&255]+_n[n>>16&255]+_n[n>>24&255]).toLowerCase()}function dn(s,e,t){return Math.max(e,Math.min(t,s))}function hu(s,e){return(s%e+e)%e}function xx(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function yx(s,e,t){return s!==e?(t-s)/(e-s):0}function La(s,e,t){return(1-t)*s+t*e}function Mx(s,e,t,n){return La(s,e,1-Math.exp(-t*n))}function bx(s,e=1){return e-Math.abs(hu(s,e*2)-e)}function Sx(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function Ex(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function Tx(s,e){return s+Math.floor(Math.random()*(e-s+1))}function Ax(s,e){return s+Math.random()*(e-s)}function wx(s){return s*(.5-Math.random())}function Rx(s){s!==void 0&&(Rf=s);let e=Rf+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Cx(s){return s*Ca}function Lx(s){return s*js}function zc(s){return(s&s-1)===0&&s!==0}function wp(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function $o(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Px(s,e,t,n,i){const r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),u=a((e+n)/2),h=r((e-n)/2),f=a((e-n)/2),d=r((n-e)/2),v=a((n-e)/2);switch(i){case"XYX":s.set(o*u,l*h,l*f,o*c);break;case"YZY":s.set(l*f,o*u,l*h,o*c);break;case"ZXZ":s.set(l*h,l*f,o*u,o*c);break;case"XZX":s.set(o*u,l*v,l*d,o*c);break;case"YXY":s.set(l*d,o*u,l*v,o*c);break;case"ZYZ":s.set(l*v,l*d,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function qi(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function wt(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Dx={DEG2RAD:Ca,RAD2DEG:js,generateUUID:di,clamp:dn,euclideanModulo:hu,mapLinear:xx,inverseLerp:yx,lerp:La,damp:Mx,pingpong:bx,smoothstep:Sx,smootherstep:Ex,randInt:Tx,randFloat:Ax,randFloatSpread:wx,seededRandom:Rx,degToRad:Cx,radToDeg:Lx,isPowerOfTwo:zc,ceilPowerOfTwo:wp,floorPowerOfTwo:$o,setQuaternionFromProperEuler:Px,normalize:wt,denormalize:qi};class $e{constructor(e=0,t=0){$e.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(dn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*i+e.x,this.y=r*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ot{constructor(e,t,n,i,r,a,o,l,c){ot.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,l,c)}set(e,t,n,i,r,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=o,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],d=n[5],v=n[8],g=i[0],m=i[3],p=i[6],S=i[1],y=i[4],T=i[7],E=i[2],w=i[5],D=i[8];return r[0]=a*g+o*S+l*E,r[3]=a*m+o*y+l*w,r[6]=a*p+o*T+l*D,r[1]=c*g+u*S+h*E,r[4]=c*m+u*y+h*w,r[7]=c*p+u*T+h*D,r[2]=f*g+d*S+v*E,r[5]=f*m+d*y+v*w,r[8]=f*p+d*T+v*D,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*r*u+n*o*l+i*r*c-i*a*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=u*a-o*c,f=o*l-u*r,d=c*r-a*l,v=t*h+n*f+i*d;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/v;return e[0]=h*g,e[1]=(i*c-u*n)*g,e[2]=(o*n-i*a)*g,e[3]=f*g,e[4]=(u*t-i*l)*g,e[5]=(i*r-o*t)*g,e[6]=d*g,e[7]=(n*l-c*t)*g,e[8]=(a*t-n*r)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply($l.makeScale(e,t)),this}rotate(e){return this.premultiply($l.makeRotation(-e)),this}translate(e,t){return this.premultiply($l.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const $l=new ot;function Rp(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Ba(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}const Cf={};function Pa(s){s in Cf||(Cf[s]=!0,console.warn(s))}function ks(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Yl(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const Ix=new ot().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),Ux=new ot().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function Nx(s){return s.convertSRGBToLinear().applyMatrix3(Ux)}function Ox(s){return s.applyMatrix3(Ix).convertLinearToSRGB()}const Fx={[Ei]:s=>s,[qe]:s=>s.convertSRGBToLinear(),[Ap]:Nx},Bx={[Ei]:s=>s,[qe]:s=>s.convertLinearToSRGB(),[Ap]:Ox},li={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(s){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!s},get workingColorSpace(){return Ei},set workingColorSpace(s){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(s,e,t){if(this.enabled===!1||e===t||!e||!t)return s;const n=Fx[e],i=Bx[t];if(n===void 0||i===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return i(n(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this.workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this.workingColorSpace)}};let ms;class Cp{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ms===void 0&&(ms=Ba("canvas")),ms.width=e.width,ms.height=e.height;const n=ms.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=ms}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ba("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=ks(r[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ks(t[n]/255)*255):t[n]=ks(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let kx=0;class Lp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:kx++}),this.uuid=di(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(jl(i[a].image)):r.push(jl(i[a]))}else r=jl(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function jl(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Cp.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let zx=0;class gn extends Qr{constructor(e=gn.DEFAULT_IMAGE,t=gn.DEFAULT_MAPPING,n=Jn,i=Jn,r=Dn,a=Yr,o=Qn,l=gr,c=gn.DEFAULT_ANISOTROPY,u=Wr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:zx++}),this.uuid=di(),this.name="",this.source=new Lp(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new $e(0,0),this.repeat=new $e(1,1),this.center=new $e(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ot,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(Pa("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===Vr?qe:Wr),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==mp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case qs:e.x=e.x-Math.floor(e.x);break;case Jn:e.x=e.x<0?0:1;break;case Xo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case qs:e.y=e.y-Math.floor(e.y);break;case Jn:e.y=e.y<0?0:1;break;case Xo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Pa("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===qe?Vr:Ep}set encoding(e){Pa("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Vr?qe:Wr}}gn.DEFAULT_IMAGE=null;gn.DEFAULT_MAPPING=mp;gn.DEFAULT_ANISOTROPY=1;class Ct{constructor(e=0,t=0,n=0,i=1){Ct.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],v=l[9],g=l[2],m=l[6],p=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-g)<.01&&Math.abs(v-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+g)<.1&&Math.abs(v+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(c+1)/2,T=(d+1)/2,E=(p+1)/2,w=(u+f)/4,D=(h+g)/4,I=(v+m)/4;return y>T&&y>E?y<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(y),i=w/n,r=D/n):T>E?T<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(T),n=w/i,r=I/i):E<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(E),n=D/r,i=I/r),this.set(n,i,r,t),this}let S=Math.sqrt((m-v)*(m-v)+(h-g)*(h-g)+(f-u)*(f-u));return Math.abs(S)<.001&&(S=1),this.x=(m-v)/S,this.y=(h-g)/S,this.z=(f-u)/S,this.w=Math.acos((c+d+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class jr extends Qr{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ct(0,0,e,t),this.scissorTest=!1,this.viewport=new Ct(0,0,e,t);const i={width:e,height:t,depth:1};n.encoding!==void 0&&(Pa("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Vr?qe:Wr),this.texture=new gn(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Dn,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Lp(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Pp extends gn{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=on,this.minFilter=on,this.wrapR=Jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Hx extends gn{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=on,this.minFilter=on,this.wrapR=Jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ti{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,a,o){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3];const f=r[a+0],d=r[a+1],v=r[a+2],g=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(o===1){e[t+0]=f,e[t+1]=d,e[t+2]=v,e[t+3]=g;return}if(h!==g||l!==f||c!==d||u!==v){let m=1-o;const p=l*f+c*d+u*v+h*g,S=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){const E=Math.sqrt(y),w=Math.atan2(E,p*S);m=Math.sin(m*w)/E,o=Math.sin(o*w)/E}const T=o*S;if(l=l*m+f*T,c=c*m+d*T,u=u*m+v*T,h=h*m+g*T,m===1-o){const E=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=E,c*=E,u*=E,h*=E}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,r,a){const o=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=r[a],f=r[a+1],d=r[a+2],v=r[a+3];return e[t]=o*v+u*h+l*d-c*f,e[t+1]=l*v+u*f+c*h-o*d,e[t+2]=c*v+u*d+o*f-l*h,e[t+3]=u*v-o*h-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,i=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(i/2),h=o(r/2),f=l(n/2),d=l(i/2),v=l(r/2);switch(a){case"XYZ":this._x=f*u*h+c*d*v,this._y=c*d*h-f*u*v,this._z=c*u*v+f*d*h,this._w=c*u*h-f*d*v;break;case"YXZ":this._x=f*u*h+c*d*v,this._y=c*d*h-f*u*v,this._z=c*u*v-f*d*h,this._w=c*u*h+f*d*v;break;case"ZXY":this._x=f*u*h-c*d*v,this._y=c*d*h+f*u*v,this._z=c*u*v+f*d*h,this._w=c*u*h-f*d*v;break;case"ZYX":this._x=f*u*h-c*d*v,this._y=c*d*h+f*u*v,this._z=c*u*v-f*d*h,this._w=c*u*h+f*d*v;break;case"YZX":this._x=f*u*h+c*d*v,this._y=c*d*h+f*u*v,this._z=c*u*v-f*d*h,this._w=c*u*h-f*d*v;break;case"XZY":this._x=f*u*h-c*d*v,this._y=c*d*h-f*u*v,this._z=c*u*v+f*d*h,this._w=c*u*h+f*d*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=n+o+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(r-c)*d,this._z=(a-i)*d}else if(n>o&&n>h){const d=2*Math.sqrt(1+n-o-h);this._w=(u-l)/d,this._x=.25*d,this._y=(i+a)/d,this._z=(r+c)/d}else if(o>h){const d=2*Math.sqrt(1+o-n-h);this._w=(r-c)/d,this._x=(i+a)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+h-n-o);this._w=(a-i)/d,this._x=(r+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(dn(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+i*c-r*l,this._y=i*u+a*l+r*o-n*c,this._z=r*u+a*c+n*l-i*o,this._w=a*u-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,a=this._w;let o=a*e._w+n*e._x+i*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const d=1-t;return this._w=d*a+t*this._w,this._x=d*n+t*this._x,this._y=d*i+t*this._y,this._z=d*r+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),h=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=a*h+this._w*f,this._x=n*h+this._x*f,this._y=i*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(r),n*Math.cos(r),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class k{constructor(e=0,t=0,n=0){k.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Lf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Lf.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=l*t+a*i-o*n,u=l*n+o*t-r*i,h=l*i+r*n-a*t,f=-r*t-a*n-o*i;return this.x=c*l+f*-r+u*-o-h*-a,this.y=u*l+f*-a+h*-r-c*-o,this.z=h*l+f*-o+c*-a-u*-r,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-r*o,this.y=r*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Kl.copy(this).projectOnVector(e),this.sub(Kl)}reflect(e){return this.sub(Kl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(dn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Kl=new k,Lf=new Ti;class Ji{constructor(e=new k(1/0,1/0,1/0),t=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Ni.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Ni.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Ni.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),gs.copy(e.boundingBox),gs.applyMatrix4(e.matrixWorld),this.union(gs);else{const i=e.geometry;if(i!==void 0)if(t&&i.attributes!==void 0&&i.attributes.position!==void 0){const r=i.attributes.position;for(let a=0,o=r.count;a<o;a++)Ni.fromBufferAttribute(r,a).applyMatrix4(e.matrixWorld),this.expandByPoint(Ni)}else i.boundingBox===null&&i.computeBoundingBox(),gs.copy(i.boundingBox),gs.applyMatrix4(e.matrixWorld),this.union(gs)}const n=e.children;for(let i=0,r=n.length;i<r;i++)this.expandByObject(n[i],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Ni),Ni.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ma),ho.subVectors(this.max,ma),_s.subVectors(e.a,ma),vs.subVectors(e.b,ma),xs.subVectors(e.c,ma),ir.subVectors(vs,_s),rr.subVectors(xs,vs),Cr.subVectors(_s,xs);let t=[0,-ir.z,ir.y,0,-rr.z,rr.y,0,-Cr.z,Cr.y,ir.z,0,-ir.x,rr.z,0,-rr.x,Cr.z,0,-Cr.x,-ir.y,ir.x,0,-rr.y,rr.x,0,-Cr.y,Cr.x,0];return!Zl(t,_s,vs,xs,ho)||(t=[1,0,0,0,1,0,0,0,1],!Zl(t,_s,vs,xs,ho))?!1:(fo.crossVectors(ir,rr),t=[fo.x,fo.y,fo.z],Zl(t,_s,vs,xs,ho))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ni).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ni).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ui[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ui[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ui[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ui[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ui[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ui[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ui[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ui[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ui),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ui=[new k,new k,new k,new k,new k,new k,new k,new k],Ni=new k,gs=new Ji,_s=new k,vs=new k,xs=new k,ir=new k,rr=new k,Cr=new k,ma=new k,ho=new k,fo=new k,Lr=new k;function Zl(s,e,t,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){Lr.fromArray(s,r);const o=i.x*Math.abs(Lr.x)+i.y*Math.abs(Lr.y)+i.z*Math.abs(Lr.z),l=e.dot(Lr),c=t.dot(Lr),u=n.dot(Lr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const Gx=new Ji,ga=new k,Jl=new k;class wi{constructor(e=new k,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Gx.setFromPoints(e).getCenter(n);let i=0;for(let r=0,a=e.length;r<a;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ga.subVectors(e,this.center);const t=ga.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(ga,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Jl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ga.copy(e.center).add(Jl)),this.expandByPoint(ga.copy(e.center).sub(Jl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Oi=new k,Ql=new k,po=new k,sr=new k,ec=new k,mo=new k,tc=new k;class $a{constructor(e=new k,t=new k(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Oi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Oi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Oi.copy(this.origin).addScaledVector(this.direction,t),Oi.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Ql.copy(e).add(t).multiplyScalar(.5),po.copy(t).sub(e).normalize(),sr.copy(this.origin).sub(Ql);const r=e.distanceTo(t)*.5,a=-this.direction.dot(po),o=sr.dot(this.direction),l=-sr.dot(po),c=sr.lengthSq(),u=Math.abs(1-a*a);let h,f,d,v;if(u>0)if(h=a*l-o,f=a*o-l,v=r*u,h>=0)if(f>=-v)if(f<=v){const g=1/u;h*=g,f*=g,d=h*(h+a*f+2*o)+f*(a*h+f+2*l)+c}else f=r,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*l)+c;else f=-r,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*l)+c;else f<=-v?(h=Math.max(0,-(-a*r+o)),f=h>0?-r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c):f<=v?(h=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(h=Math.max(0,-(a*r+o)),f=h>0?r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c);else f=a>0?-r:r,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(Ql).addScaledVector(po,f),d}intersectSphere(e,t){Oi.subVectors(e.center,this.origin);const n=Oi.dot(this.direction),i=Oi.dot(Oi)-n*n,r=e.radius*e.radius;if(i>r)return null;const a=Math.sqrt(r-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,i=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,i=(e.min.x-f.x)*c),u>=0?(r=(e.min.y-f.y)*u,a=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,a=(e.min.y-f.y)*u),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),h>=0?(o=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(o=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Oi)!==null}intersectTriangle(e,t,n,i,r){ec.subVectors(t,e),mo.subVectors(n,e),tc.crossVectors(ec,mo);let a=this.direction.dot(tc),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;sr.subVectors(this.origin,e);const l=o*this.direction.dot(mo.crossVectors(sr,mo));if(l<0)return null;const c=o*this.direction.dot(ec.cross(sr));if(c<0||l+c>a)return null;const u=-o*sr.dot(tc);return u<0?null:this.at(u/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class lt{constructor(e,t,n,i,r,a,o,l,c,u,h,f,d,v,g,m){lt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,l,c,u,h,f,d,v,g,m)}set(e,t,n,i,r,a,o,l,c,u,h,f,d,v,g,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=f,p[3]=d,p[7]=v,p[11]=g,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new lt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/ys.setFromMatrixColumn(e,0).length(),r=1/ys.setFromMatrixColumn(e,1).length(),a=1/ys.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const f=a*u,d=a*h,v=o*u,g=o*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=d+v*c,t[5]=f-g*c,t[9]=-o*l,t[2]=g-f*c,t[6]=v+d*c,t[10]=a*l}else if(e.order==="YXZ"){const f=l*u,d=l*h,v=c*u,g=c*h;t[0]=f+g*o,t[4]=v*o-d,t[8]=a*c,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=d*o-v,t[6]=g+f*o,t[10]=a*l}else if(e.order==="ZXY"){const f=l*u,d=l*h,v=c*u,g=c*h;t[0]=f-g*o,t[4]=-a*h,t[8]=v+d*o,t[1]=d+v*o,t[5]=a*u,t[9]=g-f*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const f=a*u,d=a*h,v=o*u,g=o*h;t[0]=l*u,t[4]=v*c-d,t[8]=f*c+g,t[1]=l*h,t[5]=g*c+f,t[9]=d*c-v,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const f=a*l,d=a*c,v=o*l,g=o*c;t[0]=l*u,t[4]=g-f*h,t[8]=v*h+d,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=d*h+v,t[10]=f-g*h}else if(e.order==="XZY"){const f=a*l,d=a*c,v=o*l,g=o*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+g,t[5]=a*u,t[9]=d*h-v,t[2]=v*h-d,t[6]=o*u,t[10]=g*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Vx,e,Wx)}lookAt(e,t,n){const i=this.elements;return Hn.subVectors(e,t),Hn.lengthSq()===0&&(Hn.z=1),Hn.normalize(),ar.crossVectors(n,Hn),ar.lengthSq()===0&&(Math.abs(n.z)===1?Hn.x+=1e-4:Hn.z+=1e-4,Hn.normalize(),ar.crossVectors(n,Hn)),ar.normalize(),go.crossVectors(Hn,ar),i[0]=ar.x,i[4]=go.x,i[8]=Hn.x,i[1]=ar.y,i[5]=go.y,i[9]=Hn.y,i[2]=ar.z,i[6]=go.z,i[10]=Hn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],d=n[13],v=n[2],g=n[6],m=n[10],p=n[14],S=n[3],y=n[7],T=n[11],E=n[15],w=i[0],D=i[4],I=i[8],b=i[12],P=i[1],$=i[5],ae=i[9],z=i[13],V=i[2],H=i[6],se=i[10],K=i[14],te=i[3],oe=i[7],ue=i[11],ye=i[15];return r[0]=a*w+o*P+l*V+c*te,r[4]=a*D+o*$+l*H+c*oe,r[8]=a*I+o*ae+l*se+c*ue,r[12]=a*b+o*z+l*K+c*ye,r[1]=u*w+h*P+f*V+d*te,r[5]=u*D+h*$+f*H+d*oe,r[9]=u*I+h*ae+f*se+d*ue,r[13]=u*b+h*z+f*K+d*ye,r[2]=v*w+g*P+m*V+p*te,r[6]=v*D+g*$+m*H+p*oe,r[10]=v*I+g*ae+m*se+p*ue,r[14]=v*b+g*z+m*K+p*ye,r[3]=S*w+y*P+T*V+E*te,r[7]=S*D+y*$+T*H+E*oe,r[11]=S*I+y*ae+T*se+E*ue,r[15]=S*b+y*z+T*K+E*ye,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],d=e[14],v=e[3],g=e[7],m=e[11],p=e[15];return v*(+r*l*h-i*c*h-r*o*f+n*c*f+i*o*d-n*l*d)+g*(+t*l*d-t*c*f+r*a*f-i*a*d+i*c*u-r*l*u)+m*(+t*c*h-t*o*d-r*a*h+n*a*d+r*o*u-n*c*u)+p*(-i*o*u-t*l*h+t*o*f+i*a*h-n*a*f+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],d=e[11],v=e[12],g=e[13],m=e[14],p=e[15],S=h*m*c-g*f*c+g*l*d-o*m*d-h*l*p+o*f*p,y=v*f*c-u*m*c-v*l*d+a*m*d+u*l*p-a*f*p,T=u*g*c-v*h*c+v*o*d-a*g*d-u*o*p+a*h*p,E=v*h*l-u*g*l-v*o*f+a*g*f+u*o*m-a*h*m,w=t*S+n*y+i*T+r*E;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const D=1/w;return e[0]=S*D,e[1]=(g*f*r-h*m*r-g*i*d+n*m*d+h*i*p-n*f*p)*D,e[2]=(o*m*r-g*l*r+g*i*c-n*m*c-o*i*p+n*l*p)*D,e[3]=(h*l*r-o*f*r-h*i*c+n*f*c+o*i*d-n*l*d)*D,e[4]=y*D,e[5]=(u*m*r-v*f*r+v*i*d-t*m*d-u*i*p+t*f*p)*D,e[6]=(v*l*r-a*m*r-v*i*c+t*m*c+a*i*p-t*l*p)*D,e[7]=(a*f*r-u*l*r+u*i*c-t*f*c-a*i*d+t*l*d)*D,e[8]=T*D,e[9]=(v*h*r-u*g*r-v*n*d+t*g*d+u*n*p-t*h*p)*D,e[10]=(a*g*r-v*o*r+v*n*c-t*g*c-a*n*p+t*o*p)*D,e[11]=(u*o*r-a*h*r-u*n*c+t*h*c+a*n*d-t*o*d)*D,e[12]=E*D,e[13]=(u*g*i-v*h*i+v*n*f-t*g*f-u*n*m+t*h*m)*D,e[14]=(v*o*i-a*g*i-v*n*l+t*g*l+a*n*m-t*o*m)*D,e[15]=(a*h*i-u*o*i+u*n*l-t*h*l-a*n*f+t*o*f)*D,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,u=r*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,u*o+n,u*l-i*a,0,c*l-i*o,u*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,a){return this.set(1,n,r,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,u=a+a,h=o+o,f=r*c,d=r*u,v=r*h,g=a*u,m=a*h,p=o*h,S=l*c,y=l*u,T=l*h,E=n.x,w=n.y,D=n.z;return i[0]=(1-(g+p))*E,i[1]=(d+T)*E,i[2]=(v-y)*E,i[3]=0,i[4]=(d-T)*w,i[5]=(1-(f+p))*w,i[6]=(m+S)*w,i[7]=0,i[8]=(v+y)*D,i[9]=(m-S)*D,i[10]=(1-(f+g))*D,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=ys.set(i[0],i[1],i[2]).length();const a=ys.set(i[4],i[5],i[6]).length(),o=ys.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],ci.copy(this);const c=1/r,u=1/a,h=1/o;return ci.elements[0]*=c,ci.elements[1]*=c,ci.elements[2]*=c,ci.elements[4]*=u,ci.elements[5]*=u,ci.elements[6]*=u,ci.elements[8]*=h,ci.elements[9]*=h,ci.elements[10]*=h,t.setFromRotationMatrix(ci),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,i,r,a,o=Xi){const l=this.elements,c=2*r/(t-e),u=2*r/(n-i),h=(t+e)/(t-e),f=(n+i)/(n-i);let d,v;if(o===Xi)d=-(a+r)/(a-r),v=-2*a*r/(a-r);else if(o===qo)d=-a/(a-r),v=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,r,a,o=Xi){const l=this.elements,c=1/(t-e),u=1/(n-i),h=1/(a-r),f=(t+e)*c,d=(n+i)*u;let v,g;if(o===Xi)v=(a+r)*h,g=-2*h;else if(o===qo)v=r*h,g=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=g,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const ys=new k,ci=new lt,Vx=new k(0,0,0),Wx=new k(1,1,1),ar=new k,go=new k,Hn=new k,Pf=new lt,Df=new Ti;class sl{constructor(e=0,t=0,n=0,i=sl.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],a=i[4],o=i[8],l=i[1],c=i[5],u=i[9],h=i[2],f=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(dn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-dn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(dn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-dn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(dn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-dn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Pf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Pf,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Df.setFromEuler(this),this.setFromQuaternion(Df,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}sl.DEFAULT_ORDER="XYZ";class fu{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Xx=0;const If=new k,Ms=new Ti,Fi=new lt,_o=new k,_a=new k,qx=new k,$x=new Ti,Uf=new k(1,0,0),Nf=new k(0,1,0),Of=new k(0,0,1),Yx={type:"added"},Ff={type:"removed"};class Ht extends Qr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Xx++}),this.uuid=di(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ht.DEFAULT_UP.clone();const e=new k,t=new sl,n=new Ti,i=new k(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new lt},normalMatrix:{value:new ot}}),this.matrix=new lt,this.matrixWorld=new lt,this.matrixAutoUpdate=Ht.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new fu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ms.setFromAxisAngle(e,t),this.quaternion.multiply(Ms),this}rotateOnWorldAxis(e,t){return Ms.setFromAxisAngle(e,t),this.quaternion.premultiply(Ms),this}rotateX(e){return this.rotateOnAxis(Uf,e)}rotateY(e){return this.rotateOnAxis(Nf,e)}rotateZ(e){return this.rotateOnAxis(Of,e)}translateOnAxis(e,t){return If.copy(e).applyQuaternion(this.quaternion),this.position.add(If.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Uf,e)}translateY(e){return this.translateOnAxis(Nf,e)}translateZ(e){return this.translateOnAxis(Of,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Fi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?_o.copy(e):_o.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),_a.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Fi.lookAt(_a,_o,this.up):Fi.lookAt(_o,_a,this.up),this.quaternion.setFromRotationMatrix(Fi),i&&(Fi.extractRotation(i.matrixWorld),Ms.setFromRotationMatrix(Fi),this.quaternion.premultiply(Ms.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Yx)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ff)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Ff)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Fi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Fi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Fi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectsByProperty(e,t);a.length>0&&(n=n.concat(a))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_a,e,qx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_a,$x,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let r=0,a=i.length;r<a;r++){const o=i[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));i.material=o}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),h=a(e.shapes),f=a(e.skeletons),d=a(e.animations),v=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),v.length>0&&(n.nodes=v)}return n.object=i,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Ht.DEFAULT_UP=new k(0,1,0);Ht.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ui=new k,Bi=new k,nc=new k,ki=new k,bs=new k,Ss=new k,Bf=new k,ic=new k,rc=new k,sc=new k;let vo=!1;class fi{constructor(e=new k,t=new k,n=new k){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),ui.subVectors(e,t),i.cross(ui);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){ui.subVectors(i,t),Bi.subVectors(n,t),nc.subVectors(e,t);const a=ui.dot(ui),o=ui.dot(Bi),l=ui.dot(nc),c=Bi.dot(Bi),u=Bi.dot(nc),h=a*c-o*o;if(h===0)return r.set(-2,-1,-1);const f=1/h,d=(c*l-o*u)*f,v=(a*u-o*l)*f;return r.set(1-d-v,v,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,ki),ki.x>=0&&ki.y>=0&&ki.x+ki.y<=1}static getUV(e,t,n,i,r,a,o,l){return vo===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),vo=!0),this.getInterpolation(e,t,n,i,r,a,o,l)}static getInterpolation(e,t,n,i,r,a,o,l){return this.getBarycoord(e,t,n,i,ki),l.setScalar(0),l.addScaledVector(r,ki.x),l.addScaledVector(a,ki.y),l.addScaledVector(o,ki.z),l}static isFrontFacing(e,t,n,i){return ui.subVectors(n,t),Bi.subVectors(e,t),ui.cross(Bi).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ui.subVectors(this.c,this.b),Bi.subVectors(this.a,this.b),ui.cross(Bi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return fi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return fi.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,r){return vo===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),vo=!0),fi.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}getInterpolation(e,t,n,i,r){return fi.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return fi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return fi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let a,o;bs.subVectors(i,n),Ss.subVectors(r,n),ic.subVectors(e,n);const l=bs.dot(ic),c=Ss.dot(ic);if(l<=0&&c<=0)return t.copy(n);rc.subVectors(e,i);const u=bs.dot(rc),h=Ss.dot(rc);if(u>=0&&h<=u)return t.copy(i);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(bs,a);sc.subVectors(e,r);const d=bs.dot(sc),v=Ss.dot(sc);if(v>=0&&d<=v)return t.copy(r);const g=d*c-l*v;if(g<=0&&c>=0&&v<=0)return o=c/(c-v),t.copy(n).addScaledVector(Ss,o);const m=u*v-d*h;if(m<=0&&h-u>=0&&d-v>=0)return Bf.subVectors(r,i),o=(h-u)/(h-u+(d-v)),t.copy(i).addScaledVector(Bf,o);const p=1/(m+g+f);return a=g*p,o=f*p,t.copy(n).addScaledVector(bs,a).addScaledVector(Ss,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let jx=0;class pi extends Qr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:jx++}),this.uuid=di(),this.name="",this.type="Material",this.blending=Bs,this.side=ji,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=fp,this.blendDst=dp,this.blendEquation=Us,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Ic,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ux,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ql,this.stencilZFail=ql,this.stencilZPass=ql,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Bs&&(n.blending=this.blending),this.side!==ji&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=i(e.textures),a=i(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Dp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},hi={h:0,s:0,l:0},xo={h:0,s:0,l:0};function ac(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class nt{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=qe){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,li.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=li.workingColorSpace){return this.r=e,this.g=t,this.b=n,li.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=li.workingColorSpace){if(e=hu(e,1),t=dn(t,0,1),n=dn(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=ac(a,r,e+1/3),this.g=ac(a,r,e),this.b=ac(a,r,e-1/3)}return li.toWorkingColorSpace(this,i),this}setStyle(e,t=qe){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=qe){const n=Dp[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ks(e.r),this.g=ks(e.g),this.b=ks(e.b),this}copyLinearToSRGB(e){return this.r=Yl(e.r),this.g=Yl(e.g),this.b=Yl(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=qe){return li.fromWorkingColorSpace(vn.copy(this),e),Math.round(dn(vn.r*255,0,255))*65536+Math.round(dn(vn.g*255,0,255))*256+Math.round(dn(vn.b*255,0,255))}getHexString(e=qe){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=li.workingColorSpace){li.fromWorkingColorSpace(vn.copy(this),t);const n=vn.r,i=vn.g,r=vn.b,a=Math.max(n,i,r),o=Math.min(n,i,r);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case n:l=(i-r)/h+(i<r?6:0);break;case i:l=(r-n)/h+2;break;case r:l=(n-i)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=li.workingColorSpace){return li.fromWorkingColorSpace(vn.copy(this),t),e.r=vn.r,e.g=vn.g,e.b=vn.b,e}getStyle(e=qe){li.fromWorkingColorSpace(vn.copy(this),e);const t=vn.r,n=vn.g,i=vn.b;return e!==qe?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(hi),hi.h+=e,hi.s+=t,hi.l+=n,this.setHSL(hi.h,hi.s,hi.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(hi),e.getHSL(xo);const n=La(hi.h,xo.h,t),i=La(hi.s,xo.s,t),r=La(hi.l,xo.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const vn=new nt;nt.NAMES=Dp;class kr extends pi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new nt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=pp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const $t=new k,yo=new $e;class Ln{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Bc,this.updateRange={offset:0,count:-1},this.gpuType=Wi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)yo.fromBufferAttribute(this,t),yo.applyMatrix3(e),this.setXY(t,yo.x,yo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.applyMatrix3(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.applyMatrix4(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.applyNormalMatrix(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.transformDirection(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=qi(t,this.array)),t}setX(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=qi(t,this.array)),t}setY(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=qi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=qi(t,this.array)),t}setW(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=wt(t,this.array),n=wt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=wt(t,this.array),n=wt(n,this.array),i=wt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=wt(t,this.array),n=wt(n,this.array),i=wt(i,this.array),r=wt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Bc&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class Ip extends Ln{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Up extends Ln{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Yi extends Ln{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Kx=0;const Yn=new lt,oc=new Ht,Es=new k,Gn=new Ji,va=new Ji,an=new k;class Ri extends Qr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Kx++}),this.uuid=di(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Rp(e)?Up:Ip)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new ot().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Yn.makeRotationFromQuaternion(e),this.applyMatrix4(Yn),this}rotateX(e){return Yn.makeRotationX(e),this.applyMatrix4(Yn),this}rotateY(e){return Yn.makeRotationY(e),this.applyMatrix4(Yn),this}rotateZ(e){return Yn.makeRotationZ(e),this.applyMatrix4(Yn),this}translate(e,t,n){return Yn.makeTranslation(e,t,n),this.applyMatrix4(Yn),this}scale(e,t,n){return Yn.makeScale(e,t,n),this.applyMatrix4(Yn),this}lookAt(e){return oc.lookAt(e),oc.updateMatrix(),this.applyMatrix4(oc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Es).negate(),this.translate(Es.x,Es.y,Es.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Yi(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ji);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];Gn.setFromBufferAttribute(r),this.morphTargetsRelative?(an.addVectors(this.boundingBox.min,Gn.min),this.boundingBox.expandByPoint(an),an.addVectors(this.boundingBox.max,Gn.max),this.boundingBox.expandByPoint(an)):(this.boundingBox.expandByPoint(Gn.min),this.boundingBox.expandByPoint(Gn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new wi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new k,1/0);return}if(e){const n=this.boundingSphere.center;if(Gn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];va.setFromBufferAttribute(o),this.morphTargetsRelative?(an.addVectors(Gn.min,va.min),Gn.expandByPoint(an),an.addVectors(Gn.max,va.max),Gn.expandByPoint(an)):(Gn.expandByPoint(va.min),Gn.expandByPoint(va.max))}Gn.getCenter(n);let i=0;for(let r=0,a=e.count;r<a;r++)an.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(an));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)an.fromBufferAttribute(o,c),l&&(Es.fromBufferAttribute(e,c),an.add(Es)),i=Math.max(i,n.distanceToSquared(an))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,r=t.normal.array,a=t.uv.array,o=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ln(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let P=0;P<o;P++)c[P]=new k,u[P]=new k;const h=new k,f=new k,d=new k,v=new $e,g=new $e,m=new $e,p=new k,S=new k;function y(P,$,ae){h.fromArray(i,P*3),f.fromArray(i,$*3),d.fromArray(i,ae*3),v.fromArray(a,P*2),g.fromArray(a,$*2),m.fromArray(a,ae*2),f.sub(h),d.sub(h),g.sub(v),m.sub(v);const z=1/(g.x*m.y-m.x*g.y);isFinite(z)&&(p.copy(f).multiplyScalar(m.y).addScaledVector(d,-g.y).multiplyScalar(z),S.copy(d).multiplyScalar(g.x).addScaledVector(f,-m.x).multiplyScalar(z),c[P].add(p),c[$].add(p),c[ae].add(p),u[P].add(S),u[$].add(S),u[ae].add(S))}let T=this.groups;T.length===0&&(T=[{start:0,count:n.length}]);for(let P=0,$=T.length;P<$;++P){const ae=T[P],z=ae.start,V=ae.count;for(let H=z,se=z+V;H<se;H+=3)y(n[H+0],n[H+1],n[H+2])}const E=new k,w=new k,D=new k,I=new k;function b(P){D.fromArray(r,P*3),I.copy(D);const $=c[P];E.copy($),E.sub(D.multiplyScalar(D.dot($))).normalize(),w.crossVectors(I,$);const z=w.dot(u[P])<0?-1:1;l[P*4]=E.x,l[P*4+1]=E.y,l[P*4+2]=E.z,l[P*4+3]=z}for(let P=0,$=T.length;P<$;++P){const ae=T[P],z=ae.start,V=ae.count;for(let H=z,se=z+V;H<se;H+=3)b(n[H+0]),b(n[H+1]),b(n[H+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ln(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const i=new k,r=new k,a=new k,o=new k,l=new k,c=new k,u=new k,h=new k;if(e)for(let f=0,d=e.count;f<d;f+=3){const v=e.getX(f+0),g=e.getX(f+1),m=e.getX(f+2);i.fromBufferAttribute(t,v),r.fromBufferAttribute(t,g),a.fromBufferAttribute(t,m),u.subVectors(a,r),h.subVectors(i,r),u.cross(h),o.fromBufferAttribute(n,v),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,m),o.add(u),l.add(u),c.add(u),n.setXYZ(v,o.x,o.y,o.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)i.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),u.subVectors(a,r),h.subVectors(i,r),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)an.fromBufferAttribute(e,t),an.normalize(),e.setXYZ(t,an.x,an.y,an.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,h=o.normalized,f=new c.constructor(l.length*u);let d=0,v=0;for(let g=0,m=l.length;g<m;g++){o.isInterleavedBufferAttribute?d=l[g]*o.data.stride+o.offset:d=l[g]*u;for(let p=0;p<u;p++)f[v++]=c[d++]}return new Ln(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ri,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=e(l,n);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let u=0,h=c.length;u<h;u++){const f=c[u],d=e(f,n);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const d=c[h];u.push(d.toJSON(e.data))}u.length>0&&(i[l]=u,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],h=r[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const kf=new lt,Pr=new $a,Mo=new wi,zf=new k,Ts=new k,As=new k,ws=new k,lc=new k,bo=new k,So=new $e,Eo=new $e,To=new $e,Hf=new k,Gf=new k,Vf=new k,Ao=new k,wo=new k;class mn extends Ht{constructor(e=new Ri,t=new kr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(r&&o){bo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=o[l],h=r[l];u!==0&&(lc.fromBufferAttribute(h,e),a?bo.addScaledVector(lc,u):bo.addScaledVector(lc.sub(t),u))}t.add(bo)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Mo.copy(n.boundingSphere),Mo.applyMatrix4(r),Pr.copy(e.ray).recast(e.near),!(Mo.containsPoint(Pr.origin)===!1&&(Pr.intersectSphere(Mo,zf)===null||Pr.origin.distanceToSquared(zf)>(e.far-e.near)**2))&&(kf.copy(r).invert(),Pr.copy(e.ray).applyMatrix4(kf),!(n.boundingBox!==null&&Pr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Pr)))}_computeIntersections(e,t,n){let i;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let v=0,g=f.length;v<g;v++){const m=f[v],p=a[m.materialIndex],S=Math.max(m.start,d.start),y=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let T=S,E=y;T<E;T+=3){const w=o.getX(T),D=o.getX(T+1),I=o.getX(T+2);i=Ro(this,p,e,n,c,u,h,w,D,I),i&&(i.faceIndex=Math.floor(T/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const v=Math.max(0,d.start),g=Math.min(o.count,d.start+d.count);for(let m=v,p=g;m<p;m+=3){const S=o.getX(m),y=o.getX(m+1),T=o.getX(m+2);i=Ro(this,a,e,n,c,u,h,S,y,T),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let v=0,g=f.length;v<g;v++){const m=f[v],p=a[m.materialIndex],S=Math.max(m.start,d.start),y=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let T=S,E=y;T<E;T+=3){const w=T,D=T+1,I=T+2;i=Ro(this,p,e,n,c,u,h,w,D,I),i&&(i.faceIndex=Math.floor(T/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const v=Math.max(0,d.start),g=Math.min(l.count,d.start+d.count);for(let m=v,p=g;m<p;m+=3){const S=m,y=m+1,T=m+2;i=Ro(this,a,e,n,c,u,h,S,y,T),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function Zx(s,e,t,n,i,r,a,o){let l;if(e.side===Un?l=n.intersectTriangle(a,r,i,!0,o):l=n.intersectTriangle(i,r,a,e.side===ji,o),l===null)return null;wo.copy(o),wo.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(wo);return c<t.near||c>t.far?null:{distance:c,point:wo.clone(),object:s}}function Ro(s,e,t,n,i,r,a,o,l,c){s.getVertexPosition(o,Ts),s.getVertexPosition(l,As),s.getVertexPosition(c,ws);const u=Zx(s,e,t,n,Ts,As,ws,Ao);if(u){i&&(So.fromBufferAttribute(i,o),Eo.fromBufferAttribute(i,l),To.fromBufferAttribute(i,c),u.uv=fi.getInterpolation(Ao,Ts,As,ws,So,Eo,To,new $e)),r&&(So.fromBufferAttribute(r,o),Eo.fromBufferAttribute(r,l),To.fromBufferAttribute(r,c),u.uv1=fi.getInterpolation(Ao,Ts,As,ws,So,Eo,To,new $e),u.uv2=u.uv1),a&&(Hf.fromBufferAttribute(a,o),Gf.fromBufferAttribute(a,l),Vf.fromBufferAttribute(a,c),u.normal=fi.getInterpolation(Ao,Ts,As,ws,Hf,Gf,Vf,new k),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new k,materialIndex:0};fi.getNormal(Ts,As,ws,h.normal),u.face=h}return u}class Ya extends Ri{constructor(e=1,t=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],u=[],h=[];let f=0,d=0;v("z","y","x",-1,-1,n,t,e,a,r,0),v("z","y","x",1,-1,n,t,-e,a,r,1),v("x","z","y",1,1,e,n,t,i,a,2),v("x","z","y",1,-1,e,n,-t,i,a,3),v("x","y","z",1,-1,e,t,n,i,r,4),v("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new Yi(c,3)),this.setAttribute("normal",new Yi(u,3)),this.setAttribute("uv",new Yi(h,2));function v(g,m,p,S,y,T,E,w,D,I,b){const P=T/D,$=E/I,ae=T/2,z=E/2,V=w/2,H=D+1,se=I+1;let K=0,te=0;const oe=new k;for(let ue=0;ue<se;ue++){const ye=ue*$-z;for(let Z=0;Z<H;Z++){const he=Z*P-ae;oe[g]=he*S,oe[m]=ye*y,oe[p]=V,c.push(oe.x,oe.y,oe.z),oe[g]=0,oe[m]=0,oe[p]=w>0?1:-1,u.push(oe.x,oe.y,oe.z),h.push(Z/D),h.push(1-ue/I),K+=1}}for(let ue=0;ue<I;ue++)for(let ye=0;ye<D;ye++){const Z=f+ye+H*ue,he=f+ye+H*(ue+1),le=f+(ye+1)+H*(ue+1),ve=f+(ye+1)+H*ue;l.push(Z,he,ve),l.push(he,le,ve),te+=6}o.addGroup(d,te,b),d+=te,f+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ya(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ks(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function wn(s){const e={};for(let t=0;t<s.length;t++){const n=Ks(s[t]);for(const i in n)e[i]=n[i]}return e}function Jx(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Np(s){return s.getRenderTarget()===null?s.outputColorSpace:Ei}const Qx={clone:Ks,merge:wn};var ey=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ty=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Kr extends pi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ey,this.fragmentShader=ty,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ks(e.uniforms),this.uniformsGroups=Jx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Op extends Ht{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new lt,this.projectionMatrix=new lt,this.projectionMatrixInverse=new lt,this.coordinateSystem=Xi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Cn extends Op{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=js*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ca*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return js*2*Math.atan(Math.tan(Ca*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ca*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Rs=-90,Cs=1;class ny extends Ht{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null;const i=new Cn(Rs,Cs,e,t);i.layers=this.layers,this.add(i);const r=new Cn(Rs,Cs,e,t);r.layers=this.layers,this.add(r);const a=new Cn(Rs,Cs,e,t);a.layers=this.layers,this.add(a);const o=new Cn(Rs,Cs,e,t);o.layers=this.layers,this.add(o);const l=new Cn(Rs,Cs,e,t);l.layers=this.layers,this.add(l);const c=new Cn(Rs,Cs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===Xi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===qo)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[i,r,a,o,l,c]=this.children,u=e.getRenderTarget(),h=e.toneMapping,f=e.xr.enabled;e.toneMapping=$i,e.xr.enabled=!1;const d=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,r),e.setRenderTarget(n,2),e.render(t,a),e.setRenderTarget(n,3),e.render(t,o),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=d,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(u),e.toneMapping=h,e.xr.enabled=f,n.texture.needsPMREMUpdate=!0}}class du extends gn{constructor(e,t,n,i,r,a,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Ws,super(e,t,n,i,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class iy extends jr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];t.encoding!==void 0&&(Pa("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Vr?qe:Wr),this.texture=new du(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Dn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Ya(5,5,5),r=new Kr({name:"CubemapFromEquirect",uniforms:Ks(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Un,blending:mr});r.uniforms.tEquirect.value=t;const a=new mn(i,r),o=t.minFilter;return t.minFilter===Yr&&(t.minFilter=Dn),new ny(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(r)}}const cc=new k,ry=new k,sy=new ot;class Nr{constructor(e=new k(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=cc.subVectors(n,t).cross(ry.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(cc),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||sy.getNormalMatrix(e),i=this.coplanarPoint(cc).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Dr=new wi,Co=new k;class pu{constructor(e=new Nr,t=new Nr,n=new Nr,i=new Nr,r=new Nr,a=new Nr){this.planes=[e,t,n,i,r,a]}set(e,t,n,i,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Xi){const n=this.planes,i=e.elements,r=i[0],a=i[1],o=i[2],l=i[3],c=i[4],u=i[5],h=i[6],f=i[7],d=i[8],v=i[9],g=i[10],m=i[11],p=i[12],S=i[13],y=i[14],T=i[15];if(n[0].setComponents(l-r,f-c,m-d,T-p).normalize(),n[1].setComponents(l+r,f+c,m+d,T+p).normalize(),n[2].setComponents(l+a,f+u,m+v,T+S).normalize(),n[3].setComponents(l-a,f-u,m-v,T-S).normalize(),n[4].setComponents(l-o,f-h,m-g,T-y).normalize(),t===Xi)n[5].setComponents(l+o,f+h,m+g,T+y).normalize();else if(t===qo)n[5].setComponents(o,h,g,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Dr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Dr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Dr)}intersectsSprite(e){return Dr.center.set(0,0,0),Dr.radius=.7071067811865476,Dr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Dr)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Co.x=i.normal.x>0?e.max.x:e.min.x,Co.y=i.normal.y>0?e.max.y:e.min.y,Co.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Co)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Fp(){let s=null,e=!1,t=null,n=null;function i(r,a){t(r,a),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function ay(s,e){const t=e.isWebGL2,n=new WeakMap;function i(c,u){const h=c.array,f=c.usage,d=s.createBuffer();s.bindBuffer(u,d),s.bufferData(u,h,f),c.onUploadCallback();let v;if(h instanceof Float32Array)v=s.FLOAT;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)v=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else v=s.UNSIGNED_SHORT;else if(h instanceof Int16Array)v=s.SHORT;else if(h instanceof Uint32Array)v=s.UNSIGNED_INT;else if(h instanceof Int32Array)v=s.INT;else if(h instanceof Int8Array)v=s.BYTE;else if(h instanceof Uint8Array)v=s.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)v=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:d,type:v,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version}}function r(c,u,h){const f=u.array,d=u.updateRange;s.bindBuffer(h,c),d.count===-1?s.bufferSubData(h,0,f):(t?s.bufferSubData(h,d.offset*f.BYTES_PER_ELEMENT,f,d.offset,d.count):s.bufferSubData(h,d.offset*f.BYTES_PER_ELEMENT,f.subarray(d.offset,d.offset+d.count)),d.count=-1),u.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(s.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const f=n.get(c);(!f||f.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h===void 0?n.set(c,i(c,u)):h.version<c.version&&(r(h.buffer,c,u),h.version=c.version)}return{get:a,remove:o,update:l}}class mu extends Ri{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,u=l+1,h=e/o,f=t/l,d=[],v=[],g=[],m=[];for(let p=0;p<u;p++){const S=p*f-a;for(let y=0;y<c;y++){const T=y*h-r;v.push(T,-S,0),g.push(0,0,1),m.push(y/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let S=0;S<o;S++){const y=S+c*p,T=S+c*(p+1),E=S+1+c*(p+1),w=S+1+c*p;d.push(y,T,w),d.push(T,E,w)}this.setIndex(d),this.setAttribute("position",new Yi(v,3)),this.setAttribute("normal",new Yi(g,3)),this.setAttribute("uv",new Yi(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new mu(e.width,e.height,e.widthSegments,e.heightSegments)}}var oy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ly=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,cy=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,uy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,hy=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,fy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,dy="vec3 transformed = vec3( position );",py=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,my=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,gy=`#ifdef USE_IRIDESCENCE
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
		float R21 = R12;
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
#endif`,_y=`#ifdef USE_BUMPMAP
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
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,vy=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,xy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,yy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,My=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,by=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Sy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ey=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Ty=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Ay=`#define PI 3.141592653589793
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
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
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
} // validated`,wy=`#ifdef ENVMAP_TYPE_CUBE_UV
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
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
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
#endif`,Ry=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Cy=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ly=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Py=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Dy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Iy="gl_FragColor = linearToOutputTexel( gl_FragColor );",Uy=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ny=`#ifdef USE_ENVMAP
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
#endif`,Oy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Fy=`#ifdef USE_ENVMAP
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
#endif`,By=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ky=`#ifdef USE_ENVMAP
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
#endif`,zy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Hy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Gy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Vy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Wy=`#ifdef USE_GRADIENTMAP
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
}`,Xy=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,qy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,$y=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Yy=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,jy=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
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
#endif`,Ky=`#ifdef USE_ENVMAP
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
#endif`,Zy=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Jy=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Qy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,eM=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,tM=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
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
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`,nM=`struct PhysicalMaterial {
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
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
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
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
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
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
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
}`,iM=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
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
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getSpotLightInfo( spotLight, geometry, directLight );
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
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,rM=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometry.viewDir, geometry.normal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,sM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,aM=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,oM=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,lM=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,cM=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,uM=`#ifdef USE_MAP
	diffuseColor *= texture2D( map, vMapUv );
#endif`,hM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,fM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,dM=`#if defined( USE_POINTS_UV )
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
#endif`,pM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,mM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,gM=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,_M=`#ifdef USE_MORPHNORMALS
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
#endif`,vM=`#ifdef USE_MORPHTARGETS
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
#endif`,xM=`#ifdef USE_MORPHTARGETS
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
#endif`,yM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
		mat3 tbn = getTangentFrame( - vViewPosition, normal, vNormalMapUv );
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
vec3 geometryNormal = normal;`,MM=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,bM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,SM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,EM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,TM=`#ifdef USE_NORMALMAP
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
#endif`,AM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,wM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,RM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,CM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,LM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,PM=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,DM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,IM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,UM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,NM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,OM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,FM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,BM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,kM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,zM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,HM=`float getShadowMask() {
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
}`,GM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,VM=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,WM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,XM=`#ifdef USE_SKINNING
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
#endif`,qM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,$M=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,YM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,jM=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,KM=`#ifdef USE_TRANSMISSION
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
#endif`,ZM=`#ifdef USE_TRANSMISSION
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
#endif`,JM=`#ifdef USE_UV
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
#endif`,QM=`#ifdef USE_UV
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
#endif`,eb=`#ifdef USE_UV
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
#endif`,tb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const nb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ib=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,rb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sb=`#ifdef ENVMAP_TYPE_CUBE
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
	#include <encodings_fragment>
}`,ab=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ob=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,lb=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
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
}`,cb=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,ub=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
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
}`,hb=`#define DISTANCE
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
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,fb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,db=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,pb=`uniform float scale;
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
}`,mb=`uniform vec3 diffuse;
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,gb=`#include <common>
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
}`,_b=`uniform vec3 diffuse;
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vb=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
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
}`,xb=`#define LAMBERT
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yb=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
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
}`,Mb=`#define MATCAP
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bb=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
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
}`,Sb=`#define NORMAL
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
}`,Eb=`#define PHONG
varying vec3 vViewPosition;
#include <common>
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
}`,Tb=`#define PHONG
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ab=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
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
}`,wb=`#define STANDARD
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
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Rb=`#define TOON
varying vec3 vViewPosition;
#include <common>
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
}`,Cb=`#define TOON
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
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Lb=`uniform float size;
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
}`,Pb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
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
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Db=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
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
}`,Ib=`uniform vec3 color;
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
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Ub=`uniform float rotation;
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
}`,Nb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,st={alphamap_fragment:oy,alphamap_pars_fragment:ly,alphatest_fragment:cy,alphatest_pars_fragment:uy,aomap_fragment:hy,aomap_pars_fragment:fy,begin_vertex:dy,beginnormal_vertex:py,bsdfs:my,iridescence_fragment:gy,bumpmap_pars_fragment:_y,clipping_planes_fragment:vy,clipping_planes_pars_fragment:xy,clipping_planes_pars_vertex:yy,clipping_planes_vertex:My,color_fragment:by,color_pars_fragment:Sy,color_pars_vertex:Ey,color_vertex:Ty,common:Ay,cube_uv_reflection_fragment:wy,defaultnormal_vertex:Ry,displacementmap_pars_vertex:Cy,displacementmap_vertex:Ly,emissivemap_fragment:Py,emissivemap_pars_fragment:Dy,encodings_fragment:Iy,encodings_pars_fragment:Uy,envmap_fragment:Ny,envmap_common_pars_fragment:Oy,envmap_pars_fragment:Fy,envmap_pars_vertex:By,envmap_physical_pars_fragment:Ky,envmap_vertex:ky,fog_vertex:zy,fog_pars_vertex:Hy,fog_fragment:Gy,fog_pars_fragment:Vy,gradientmap_pars_fragment:Wy,lightmap_fragment:Xy,lightmap_pars_fragment:qy,lights_lambert_fragment:$y,lights_lambert_pars_fragment:Yy,lights_pars_begin:jy,lights_toon_fragment:Zy,lights_toon_pars_fragment:Jy,lights_phong_fragment:Qy,lights_phong_pars_fragment:eM,lights_physical_fragment:tM,lights_physical_pars_fragment:nM,lights_fragment_begin:iM,lights_fragment_maps:rM,lights_fragment_end:sM,logdepthbuf_fragment:aM,logdepthbuf_pars_fragment:oM,logdepthbuf_pars_vertex:lM,logdepthbuf_vertex:cM,map_fragment:uM,map_pars_fragment:hM,map_particle_fragment:fM,map_particle_pars_fragment:dM,metalnessmap_fragment:pM,metalnessmap_pars_fragment:mM,morphcolor_vertex:gM,morphnormal_vertex:_M,morphtarget_pars_vertex:vM,morphtarget_vertex:xM,normal_fragment_begin:yM,normal_fragment_maps:MM,normal_pars_fragment:bM,normal_pars_vertex:SM,normal_vertex:EM,normalmap_pars_fragment:TM,clearcoat_normal_fragment_begin:AM,clearcoat_normal_fragment_maps:wM,clearcoat_pars_fragment:RM,iridescence_pars_fragment:CM,output_fragment:LM,packing:PM,premultiplied_alpha_fragment:DM,project_vertex:IM,dithering_fragment:UM,dithering_pars_fragment:NM,roughnessmap_fragment:OM,roughnessmap_pars_fragment:FM,shadowmap_pars_fragment:BM,shadowmap_pars_vertex:kM,shadowmap_vertex:zM,shadowmask_pars_fragment:HM,skinbase_vertex:GM,skinning_pars_vertex:VM,skinning_vertex:WM,skinnormal_vertex:XM,specularmap_fragment:qM,specularmap_pars_fragment:$M,tonemapping_fragment:YM,tonemapping_pars_fragment:jM,transmission_fragment:KM,transmission_pars_fragment:ZM,uv_pars_fragment:JM,uv_pars_vertex:QM,uv_vertex:eb,worldpos_vertex:tb,background_vert:nb,background_frag:ib,backgroundCube_vert:rb,backgroundCube_frag:sb,cube_vert:ab,cube_frag:ob,depth_vert:lb,depth_frag:cb,distanceRGBA_vert:ub,distanceRGBA_frag:hb,equirect_vert:fb,equirect_frag:db,linedashed_vert:pb,linedashed_frag:mb,meshbasic_vert:gb,meshbasic_frag:_b,meshlambert_vert:vb,meshlambert_frag:xb,meshmatcap_vert:yb,meshmatcap_frag:Mb,meshnormal_vert:bb,meshnormal_frag:Sb,meshphong_vert:Eb,meshphong_frag:Tb,meshphysical_vert:Ab,meshphysical_frag:wb,meshtoon_vert:Rb,meshtoon_frag:Cb,points_vert:Lb,points_frag:Pb,shadow_vert:Db,shadow_frag:Ib,sprite_vert:Ub,sprite_frag:Nb},Me={common:{diffuse:{value:new nt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ot}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ot},normalScale:{value:new $e(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new nt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new nt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0},uvTransform:{value:new ot}},sprite:{diffuse:{value:new nt(16777215)},opacity:{value:1},center:{value:new $e(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}}},xi={basic:{uniforms:wn([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.fog]),vertexShader:st.meshbasic_vert,fragmentShader:st.meshbasic_frag},lambert:{uniforms:wn([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new nt(0)}}]),vertexShader:st.meshlambert_vert,fragmentShader:st.meshlambert_frag},phong:{uniforms:wn([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new nt(0)},specular:{value:new nt(1118481)},shininess:{value:30}}]),vertexShader:st.meshphong_vert,fragmentShader:st.meshphong_frag},standard:{uniforms:wn([Me.common,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.roughnessmap,Me.metalnessmap,Me.fog,Me.lights,{emissive:{value:new nt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:st.meshphysical_vert,fragmentShader:st.meshphysical_frag},toon:{uniforms:wn([Me.common,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.gradientmap,Me.fog,Me.lights,{emissive:{value:new nt(0)}}]),vertexShader:st.meshtoon_vert,fragmentShader:st.meshtoon_frag},matcap:{uniforms:wn([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,{matcap:{value:null}}]),vertexShader:st.meshmatcap_vert,fragmentShader:st.meshmatcap_frag},points:{uniforms:wn([Me.points,Me.fog]),vertexShader:st.points_vert,fragmentShader:st.points_frag},dashed:{uniforms:wn([Me.common,Me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:st.linedashed_vert,fragmentShader:st.linedashed_frag},depth:{uniforms:wn([Me.common,Me.displacementmap]),vertexShader:st.depth_vert,fragmentShader:st.depth_frag},normal:{uniforms:wn([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,{opacity:{value:1}}]),vertexShader:st.meshnormal_vert,fragmentShader:st.meshnormal_frag},sprite:{uniforms:wn([Me.sprite,Me.fog]),vertexShader:st.sprite_vert,fragmentShader:st.sprite_frag},background:{uniforms:{uvTransform:{value:new ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:st.background_vert,fragmentShader:st.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:st.backgroundCube_vert,fragmentShader:st.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:st.cube_vert,fragmentShader:st.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:st.equirect_vert,fragmentShader:st.equirect_frag},distanceRGBA:{uniforms:wn([Me.common,Me.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:st.distanceRGBA_vert,fragmentShader:st.distanceRGBA_frag},shadow:{uniforms:wn([Me.lights,Me.fog,{color:{value:new nt(0)},opacity:{value:1}}]),vertexShader:st.shadow_vert,fragmentShader:st.shadow_frag}};xi.physical={uniforms:wn([xi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ot},clearcoatNormalScale:{value:new $e(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ot},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ot},sheen:{value:0},sheenColor:{value:new nt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ot},transmissionSamplerSize:{value:new $e},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ot},attenuationDistance:{value:0},attenuationColor:{value:new nt(0)},specularColor:{value:new nt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ot},anisotropyVector:{value:new $e},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ot}}]),vertexShader:st.meshphysical_vert,fragmentShader:st.meshphysical_frag};const Lo={r:0,b:0,g:0};function Ob(s,e,t,n,i,r,a){const o=new nt(0);let l=r===!0?0:1,c,u,h=null,f=0,d=null;function v(m,p){let S=!1,y=p.isScene===!0?p.background:null;switch(y&&y.isTexture&&(y=(p.backgroundBlurriness>0?t:e).get(y)),y===null?g(o,l):y&&y.isColor&&(g(y,1),S=!0),s.xr.getEnvironmentBlendMode()){case"opaque":S=!0;break;case"additive":n.buffers.color.setClear(0,0,0,1,a),S=!0;break;case"alpha-blend":n.buffers.color.setClear(0,0,0,0,a),S=!0;break}(s.autoClear||S)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),y&&(y.isCubeTexture||y.mapping===rl)?(u===void 0&&(u=new mn(new Ya(1,1,1),new Kr({name:"BackgroundCubeMaterial",uniforms:Ks(xi.backgroundCube.uniforms),vertexShader:xi.backgroundCube.vertexShader,fragmentShader:xi.backgroundCube.fragmentShader,side:Un,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(w,D,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=y,u.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,u.material.toneMapped=y.colorSpace!==qe,(h!==y||f!==y.version||d!==s.toneMapping)&&(u.material.needsUpdate=!0,h=y,f=y.version,d=s.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new mn(new mu(2,2),new Kr({name:"BackgroundMaterial",uniforms:Ks(xi.background.uniforms),vertexShader:xi.background.vertexShader,fragmentShader:xi.background.fragmentShader,side:ji,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,c.material.toneMapped=y.colorSpace!==qe,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||f!==y.version||d!==s.toneMapping)&&(c.material.needsUpdate=!0,h=y,f=y.version,d=s.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function g(m,p){m.getRGB(Lo,Np(s)),n.buffers.color.setClear(Lo.r,Lo.g,Lo.b,p,a)}return{getClearColor:function(){return o},setClearColor:function(m,p=1){o.set(m),l=p,g(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,g(o,l)},render:v}}function Fb(s,e,t,n){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,o={},l=m(null);let c=l,u=!1;function h(V,H,se,K,te){let oe=!1;if(a){const ue=g(K,se,H);c!==ue&&(c=ue,d(c.object)),oe=p(V,K,se,te),oe&&S(V,K,se,te)}else{const ue=H.wireframe===!0;(c.geometry!==K.id||c.program!==se.id||c.wireframe!==ue)&&(c.geometry=K.id,c.program=se.id,c.wireframe=ue,oe=!0)}te!==null&&t.update(te,s.ELEMENT_ARRAY_BUFFER),(oe||u)&&(u=!1,I(V,H,se,K),te!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(te).buffer))}function f(){return n.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function d(V){return n.isWebGL2?s.bindVertexArray(V):r.bindVertexArrayOES(V)}function v(V){return n.isWebGL2?s.deleteVertexArray(V):r.deleteVertexArrayOES(V)}function g(V,H,se){const K=se.wireframe===!0;let te=o[V.id];te===void 0&&(te={},o[V.id]=te);let oe=te[H.id];oe===void 0&&(oe={},te[H.id]=oe);let ue=oe[K];return ue===void 0&&(ue=m(f()),oe[K]=ue),ue}function m(V){const H=[],se=[],K=[];for(let te=0;te<i;te++)H[te]=0,se[te]=0,K[te]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:se,attributeDivisors:K,object:V,attributes:{},index:null}}function p(V,H,se,K){const te=c.attributes,oe=H.attributes;let ue=0;const ye=se.getAttributes();for(const Z in ye)if(ye[Z].location>=0){const le=te[Z];let ve=oe[Z];if(ve===void 0&&(Z==="instanceMatrix"&&V.instanceMatrix&&(ve=V.instanceMatrix),Z==="instanceColor"&&V.instanceColor&&(ve=V.instanceColor)),le===void 0||le.attribute!==ve||ve&&le.data!==ve.data)return!0;ue++}return c.attributesNum!==ue||c.index!==K}function S(V,H,se,K){const te={},oe=H.attributes;let ue=0;const ye=se.getAttributes();for(const Z in ye)if(ye[Z].location>=0){let le=oe[Z];le===void 0&&(Z==="instanceMatrix"&&V.instanceMatrix&&(le=V.instanceMatrix),Z==="instanceColor"&&V.instanceColor&&(le=V.instanceColor));const ve={};ve.attribute=le,le&&le.data&&(ve.data=le.data),te[Z]=ve,ue++}c.attributes=te,c.attributesNum=ue,c.index=K}function y(){const V=c.newAttributes;for(let H=0,se=V.length;H<se;H++)V[H]=0}function T(V){E(V,0)}function E(V,H){const se=c.newAttributes,K=c.enabledAttributes,te=c.attributeDivisors;se[V]=1,K[V]===0&&(s.enableVertexAttribArray(V),K[V]=1),te[V]!==H&&((n.isWebGL2?s:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](V,H),te[V]=H)}function w(){const V=c.newAttributes,H=c.enabledAttributes;for(let se=0,K=H.length;se<K;se++)H[se]!==V[se]&&(s.disableVertexAttribArray(se),H[se]=0)}function D(V,H,se,K,te,oe,ue){ue===!0?s.vertexAttribIPointer(V,H,se,te,oe):s.vertexAttribPointer(V,H,se,K,te,oe)}function I(V,H,se,K){if(n.isWebGL2===!1&&(V.isInstancedMesh||K.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;y();const te=K.attributes,oe=se.getAttributes(),ue=H.defaultAttributeValues;for(const ye in oe){const Z=oe[ye];if(Z.location>=0){let he=te[ye];if(he===void 0&&(ye==="instanceMatrix"&&V.instanceMatrix&&(he=V.instanceMatrix),ye==="instanceColor"&&V.instanceColor&&(he=V.instanceColor)),he!==void 0){const le=he.normalized,ve=he.itemSize,Ae=t.get(he);if(Ae===void 0)continue;const Ne=Ae.buffer,Ye=Ae.type,Be=Ae.bytesPerElement,St=n.isWebGL2===!0&&(Ye===s.INT||Ye===s.UNSIGNED_INT||he.gpuType===_p);if(he.isInterleavedBufferAttribute){const Ke=he.data,q=Ke.stride,Lt=he.offset;if(Ke.isInstancedInterleavedBuffer){for(let Ie=0;Ie<Z.locationSize;Ie++)E(Z.location+Ie,Ke.meshPerAttribute);V.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=Ke.meshPerAttribute*Ke.count)}else for(let Ie=0;Ie<Z.locationSize;Ie++)T(Z.location+Ie);s.bindBuffer(s.ARRAY_BUFFER,Ne);for(let Ie=0;Ie<Z.locationSize;Ie++)D(Z.location+Ie,ve/Z.locationSize,Ye,le,q*Be,(Lt+ve/Z.locationSize*Ie)*Be,St)}else{if(he.isInstancedBufferAttribute){for(let Ke=0;Ke<Z.locationSize;Ke++)E(Z.location+Ke,he.meshPerAttribute);V.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let Ke=0;Ke<Z.locationSize;Ke++)T(Z.location+Ke);s.bindBuffer(s.ARRAY_BUFFER,Ne);for(let Ke=0;Ke<Z.locationSize;Ke++)D(Z.location+Ke,ve/Z.locationSize,Ye,le,ve*Be,ve/Z.locationSize*Ke*Be,St)}}else if(ue!==void 0){const le=ue[ye];if(le!==void 0)switch(le.length){case 2:s.vertexAttrib2fv(Z.location,le);break;case 3:s.vertexAttrib3fv(Z.location,le);break;case 4:s.vertexAttrib4fv(Z.location,le);break;default:s.vertexAttrib1fv(Z.location,le)}}}}w()}function b(){ae();for(const V in o){const H=o[V];for(const se in H){const K=H[se];for(const te in K)v(K[te].object),delete K[te];delete H[se]}delete o[V]}}function P(V){if(o[V.id]===void 0)return;const H=o[V.id];for(const se in H){const K=H[se];for(const te in K)v(K[te].object),delete K[te];delete H[se]}delete o[V.id]}function $(V){for(const H in o){const se=o[H];if(se[V.id]===void 0)continue;const K=se[V.id];for(const te in K)v(K[te].object),delete K[te];delete se[V.id]}}function ae(){z(),u=!0,c!==l&&(c=l,d(c.object))}function z(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:ae,resetDefaultState:z,dispose:b,releaseStatesOfGeometry:P,releaseStatesOfProgram:$,initAttributes:y,enableAttribute:T,disableUnusedAttributes:w}}function Bb(s,e,t,n){const i=n.isWebGL2;let r;function a(c){r=c}function o(c,u){s.drawArrays(r,c,u),t.update(u,r,1)}function l(c,u,h){if(h===0)return;let f,d;if(i)f=s,d="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),d="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[d](r,c,u,h),t.update(u,r,h)}this.setMode=a,this.render=o,this.renderInstances=l}function kb(s,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const D=e.get("EXT_texture_filter_anisotropic");n=s.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(D){if(D==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&s.constructor.name==="WebGL2RenderingContext";let o=t.precision!==void 0?t.precision:"highp";const l=r(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),f=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),d=s.getParameter(s.MAX_TEXTURE_SIZE),v=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),g=s.getParameter(s.MAX_VERTEX_ATTRIBS),m=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),p=s.getParameter(s.MAX_VARYING_VECTORS),S=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),y=f>0,T=a||e.has("OES_texture_float"),E=y&&T,w=a?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:f,maxTextureSize:d,maxCubemapSize:v,maxAttributes:g,maxVertexUniforms:m,maxVaryings:p,maxFragmentUniforms:S,vertexTextures:y,floatFragmentTextures:T,floatVertexTextures:E,maxSamples:w}}function zb(s){const e=this;let t=null,n=0,i=!1,r=!1;const a=new Nr,o=new ot,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const d=h.length!==0||f||n!==0||i;return i=f,n=h.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,d){const v=h.clippingPlanes,g=h.clipIntersection,m=h.clipShadows,p=s.get(h);if(!i||v===null||v.length===0||r&&!m)r?u(null):c();else{const S=r?0:n,y=S*4;let T=p.clippingState||null;l.value=T,T=u(v,f,y,d);for(let E=0;E!==y;++E)T[E]=t[E];p.clippingState=T,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,d,v){const g=h!==null?h.length:0;let m=null;if(g!==0){if(m=l.value,v!==!0||m===null){const p=d+g*4,S=f.matrixWorldInverse;o.getNormalMatrix(S),(m===null||m.length<p)&&(m=new Float32Array(p));for(let y=0,T=d;y!==g;++y,T+=4)a.copy(h[y]).applyMatrix4(S,o),a.normal.toArray(m,T),m[T+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}function Hb(s){let e=new WeakMap;function t(a,o){return o===Uc?a.mapping=Ws:o===Nc&&(a.mapping=Xs),a}function n(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const o=a.mapping;if(o===Uc||o===Nc)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new iy(l.height/2);return c.fromEquirectangularTexture(s,a),e.set(a,c),a.addEventListener("dispose",i),t(c.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class gu extends Op{constructor(e=-1,t=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Ns=4,Wf=[.125,.215,.35,.446,.526,.582],Br=20,uc=new gu,Xf=new nt;let hc=null;const Or=(1+Math.sqrt(5))/2,Ls=1/Or,qf=[new k(1,1,1),new k(-1,1,1),new k(1,1,-1),new k(-1,1,-1),new k(0,Or,Ls),new k(0,Or,-Ls),new k(Ls,0,Or),new k(-Ls,0,Or),new k(Or,Ls,0),new k(-Or,Ls,0)];class $f{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){hc=this._renderer.getRenderTarget(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Kf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=jf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(hc),e.scissorTest=!1,Po(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ws||e.mapping===Xs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),hc=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Dn,minFilter:Dn,generateMipmaps:!1,type:Oa,format:Qn,colorSpace:Ei,depthBuffer:!1},i=Yf(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Yf(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Gb(r)),this._blurMaterial=Vb(r,e,t)}return i}_compileMaterial(e){const t=new mn(this._lodPlanes[0],e);this._renderer.compile(t,uc)}_sceneToCubeUV(e,t,n,i){const o=new Cn(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(Xf),u.toneMapping=$i,u.autoClear=!1;const d=new kr({name:"PMREM.Background",side:Un,depthWrite:!1,depthTest:!1}),v=new mn(new Ya,d);let g=!1;const m=e.background;m?m.isColor&&(d.color.copy(m),e.background=null,g=!0):(d.color.copy(Xf),g=!0);for(let p=0;p<6;p++){const S=p%3;S===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):S===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));const y=this._cubeSize;Po(i,S*y,p>2?y:0,y,y),u.setRenderTarget(i),g&&u.render(v,o),u.render(e,o)}v.geometry.dispose(),v.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Ws||e.mapping===Xs;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Kf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=jf());const r=i?this._cubemapMaterial:this._equirectMaterial,a=new mn(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;Po(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,uc)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),a=qf[(i-1)%qf.length];this._blur(e,i-1,i,r,a)}t.autoClear=n}_blur(e,t,n,i,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",r),this._halfBlur(a,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new mn(this._lodPlanes[i],c),f=c.uniforms,d=this._sizeLods[n]-1,v=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Br-1),g=r/v,m=isFinite(r)?1+Math.floor(u*g):Br;m>Br&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Br}`);const p=[];let S=0;for(let D=0;D<Br;++D){const I=D/g,b=Math.exp(-I*I/2);p.push(b),D===0?S+=b:D<m&&(S+=2*b)}for(let D=0;D<p.length;D++)p[D]=p[D]/S;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:y}=this;f.dTheta.value=v,f.mipInt.value=y-n;const T=this._sizeLods[i],E=3*T*(i>y-Ns?i-y+Ns:0),w=4*(this._cubeSize-T);Po(t,E,w,3*T,2*T),l.setRenderTarget(t),l.render(h,uc)}}function Gb(s){const e=[],t=[],n=[];let i=s;const r=s-Ns+1+Wf.length;for(let a=0;a<r;a++){const o=Math.pow(2,i);t.push(o);let l=1/o;a>s-Ns?l=Wf[a-s+Ns-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,v=6,g=3,m=2,p=1,S=new Float32Array(g*v*d),y=new Float32Array(m*v*d),T=new Float32Array(p*v*d);for(let w=0;w<d;w++){const D=w%3*2/3-1,I=w>2?0:-1,b=[D,I,0,D+2/3,I,0,D+2/3,I+1,0,D,I,0,D+2/3,I+1,0,D,I+1,0];S.set(b,g*v*w),y.set(f,m*v*w);const P=[w,w,w,w,w,w];T.set(P,p*v*w)}const E=new Ri;E.setAttribute("position",new Ln(S,g)),E.setAttribute("uv",new Ln(y,m)),E.setAttribute("faceIndex",new Ln(T,p)),e.push(E),i>Ns&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Yf(s,e,t){const n=new jr(s,e,t);return n.texture.mapping=rl,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Po(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function Vb(s,e,t){const n=new Float32Array(Br),i=new k(0,1,0);return new Kr({name:"SphericalGaussianBlur",defines:{n:Br,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:_u(),fragmentShader:`

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
		`,blending:mr,depthTest:!1,depthWrite:!1})}function jf(){return new Kr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:_u(),fragmentShader:`

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
		`,blending:mr,depthTest:!1,depthWrite:!1})}function Kf(){return new Kr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:_u(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:mr,depthTest:!1,depthWrite:!1})}function _u(){return`

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
	`}function Wb(s){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Uc||l===Nc,u=l===Ws||l===Xs;if(c||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let h=e.get(o);return t===null&&(t=new $f(s)),h=c?t.fromEquirectangular(o,h):t.fromCubemap(o,h),e.set(o,h),h.texture}else{if(e.has(o))return e.get(o).texture;{const h=o.image;if(c&&h&&h.height>0||u&&h&&i(h)){t===null&&(t=new $f(s));const f=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,f),o.addEventListener("dispose",r),f.texture}else return null}}}return o}function i(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Xb(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function qb(s,e,t,n){const i={},r=new WeakMap;function a(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const v in f.attributes)e.remove(f.attributes[v]);for(const v in f.morphAttributes){const g=f.morphAttributes[v];for(let m=0,p=g.length;m<p;m++)e.remove(g[m])}f.removeEventListener("dispose",a),delete i[f.id];const d=r.get(f);d&&(e.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(h,f){return i[f.id]===!0||(f.addEventListener("dispose",a),i[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const v in f)e.update(f[v],s.ARRAY_BUFFER);const d=h.morphAttributes;for(const v in d){const g=d[v];for(let m=0,p=g.length;m<p;m++)e.update(g[m],s.ARRAY_BUFFER)}}function c(h){const f=[],d=h.index,v=h.attributes.position;let g=0;if(d!==null){const S=d.array;g=d.version;for(let y=0,T=S.length;y<T;y+=3){const E=S[y+0],w=S[y+1],D=S[y+2];f.push(E,w,w,D,D,E)}}else{const S=v.array;g=v.version;for(let y=0,T=S.length/3-1;y<T;y+=3){const E=y+0,w=y+1,D=y+2;f.push(E,w,w,D,D,E)}}const m=new(Rp(f)?Up:Ip)(f,1);m.version=g;const p=r.get(h);p&&e.remove(p),r.set(h,m)}function u(h){const f=r.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&c(h)}else c(h);return r.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function $b(s,e,t,n){const i=n.isWebGL2;let r;function a(f){r=f}let o,l;function c(f){o=f.type,l=f.bytesPerElement}function u(f,d){s.drawElements(r,d,o,f*l),t.update(d,r,1)}function h(f,d,v){if(v===0)return;let g,m;if(i)g=s,m="drawElementsInstanced";else if(g=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",g===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[m](r,d,o,f*l,v),t.update(d,r,v)}this.setMode=a,this.setIndex=c,this.render=u,this.renderInstances=h}function Yb(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case s.TRIANGLES:t.triangles+=o*(r/3);break;case s.LINES:t.lines+=o*(r/2);break;case s.LINE_STRIP:t.lines+=o*(r-1);break;case s.LINE_LOOP:t.lines+=o*r;break;case s.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function jb(s,e){return s[0]-e[0]}function Kb(s,e){return Math.abs(e[1])-Math.abs(s[1])}function Zb(s,e,t){const n={},i=new Float32Array(8),r=new WeakMap,a=new Ct,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,u,h){const f=c.morphTargetInfluences;if(e.isWebGL2===!0){const d=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,v=d!==void 0?d.length:0;let g=r.get(u);if(g===void 0||g.count!==v){let V=function(){ae.dispose(),r.delete(u),u.removeEventListener("dispose",V)};g!==void 0&&g.texture.dispose();const S=u.morphAttributes.position!==void 0,y=u.morphAttributes.normal!==void 0,T=u.morphAttributes.color!==void 0,E=u.morphAttributes.position||[],w=u.morphAttributes.normal||[],D=u.morphAttributes.color||[];let I=0;S===!0&&(I=1),y===!0&&(I=2),T===!0&&(I=3);let b=u.attributes.position.count*I,P=1;b>e.maxTextureSize&&(P=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const $=new Float32Array(b*P*4*v),ae=new Pp($,b,P,v);ae.type=Wi,ae.needsUpdate=!0;const z=I*4;for(let H=0;H<v;H++){const se=E[H],K=w[H],te=D[H],oe=b*P*4*H;for(let ue=0;ue<se.count;ue++){const ye=ue*z;S===!0&&(a.fromBufferAttribute(se,ue),$[oe+ye+0]=a.x,$[oe+ye+1]=a.y,$[oe+ye+2]=a.z,$[oe+ye+3]=0),y===!0&&(a.fromBufferAttribute(K,ue),$[oe+ye+4]=a.x,$[oe+ye+5]=a.y,$[oe+ye+6]=a.z,$[oe+ye+7]=0),T===!0&&(a.fromBufferAttribute(te,ue),$[oe+ye+8]=a.x,$[oe+ye+9]=a.y,$[oe+ye+10]=a.z,$[oe+ye+11]=te.itemSize===4?a.w:1)}}g={count:v,texture:ae,size:new $e(b,P)},r.set(u,g),u.addEventListener("dispose",V)}let m=0;for(let S=0;S<f.length;S++)m+=f[S];const p=u.morphTargetsRelative?1:1-m;h.getUniforms().setValue(s,"morphTargetBaseInfluence",p),h.getUniforms().setValue(s,"morphTargetInfluences",f),h.getUniforms().setValue(s,"morphTargetsTexture",g.texture,t),h.getUniforms().setValue(s,"morphTargetsTextureSize",g.size)}else{const d=f===void 0?0:f.length;let v=n[u.id];if(v===void 0||v.length!==d){v=[];for(let y=0;y<d;y++)v[y]=[y,0];n[u.id]=v}for(let y=0;y<d;y++){const T=v[y];T[0]=y,T[1]=f[y]}v.sort(Kb);for(let y=0;y<8;y++)y<d&&v[y][1]?(o[y][0]=v[y][0],o[y][1]=v[y][1]):(o[y][0]=Number.MAX_SAFE_INTEGER,o[y][1]=0);o.sort(jb);const g=u.morphAttributes.position,m=u.morphAttributes.normal;let p=0;for(let y=0;y<8;y++){const T=o[y],E=T[0],w=T[1];E!==Number.MAX_SAFE_INTEGER&&w?(g&&u.getAttribute("morphTarget"+y)!==g[E]&&u.setAttribute("morphTarget"+y,g[E]),m&&u.getAttribute("morphNormal"+y)!==m[E]&&u.setAttribute("morphNormal"+y,m[E]),i[y]=w,p+=w):(g&&u.hasAttribute("morphTarget"+y)===!0&&u.deleteAttribute("morphTarget"+y),m&&u.hasAttribute("morphNormal"+y)===!0&&u.deleteAttribute("morphNormal"+y),i[y]=0)}const S=u.morphTargetsRelative?1:1-p;h.getUniforms().setValue(s,"morphTargetBaseInfluence",S),h.getUniforms().setValue(s,"morphTargetInfluences",i)}}return{update:l}}function Jb(s,e,t,n){let i=new WeakMap;function r(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);return i.get(h)!==c&&(e.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER)),h}function a(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}const Bp=new gn,kp=new Pp,zp=new Hx,Hp=new du,Zf=[],Jf=[],Qf=new Float32Array(16),ed=new Float32Array(9),td=new Float32Array(4);function sa(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=Zf[i];if(r===void 0&&(r=new Float32Array(i),Zf[i]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(r,o)}return r}function tn(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function nn(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function al(s,e){let t=Jf[e];t===void 0&&(t=new Int32Array(e),Jf[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function Qb(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function eS(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tn(t,e))return;s.uniform2fv(this.addr,e),nn(t,e)}}function tS(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(tn(t,e))return;s.uniform3fv(this.addr,e),nn(t,e)}}function nS(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tn(t,e))return;s.uniform4fv(this.addr,e),nn(t,e)}}function iS(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(tn(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),nn(t,e)}else{if(tn(t,n))return;td.set(n),s.uniformMatrix2fv(this.addr,!1,td),nn(t,n)}}function rS(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(tn(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),nn(t,e)}else{if(tn(t,n))return;ed.set(n),s.uniformMatrix3fv(this.addr,!1,ed),nn(t,n)}}function sS(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(tn(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),nn(t,e)}else{if(tn(t,n))return;Qf.set(n),s.uniformMatrix4fv(this.addr,!1,Qf),nn(t,n)}}function aS(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function oS(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tn(t,e))return;s.uniform2iv(this.addr,e),nn(t,e)}}function lS(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(tn(t,e))return;s.uniform3iv(this.addr,e),nn(t,e)}}function cS(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tn(t,e))return;s.uniform4iv(this.addr,e),nn(t,e)}}function uS(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function hS(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tn(t,e))return;s.uniform2uiv(this.addr,e),nn(t,e)}}function fS(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(tn(t,e))return;s.uniform3uiv(this.addr,e),nn(t,e)}}function dS(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tn(t,e))return;s.uniform4uiv(this.addr,e),nn(t,e)}}function pS(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||Bp,i)}function mS(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||zp,i)}function gS(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Hp,i)}function _S(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||kp,i)}function vS(s){switch(s){case 5126:return Qb;case 35664:return eS;case 35665:return tS;case 35666:return nS;case 35674:return iS;case 35675:return rS;case 35676:return sS;case 5124:case 35670:return aS;case 35667:case 35671:return oS;case 35668:case 35672:return lS;case 35669:case 35673:return cS;case 5125:return uS;case 36294:return hS;case 36295:return fS;case 36296:return dS;case 35678:case 36198:case 36298:case 36306:case 35682:return pS;case 35679:case 36299:case 36307:return mS;case 35680:case 36300:case 36308:case 36293:return gS;case 36289:case 36303:case 36311:case 36292:return _S}}function xS(s,e){s.uniform1fv(this.addr,e)}function yS(s,e){const t=sa(e,this.size,2);s.uniform2fv(this.addr,t)}function MS(s,e){const t=sa(e,this.size,3);s.uniform3fv(this.addr,t)}function bS(s,e){const t=sa(e,this.size,4);s.uniform4fv(this.addr,t)}function SS(s,e){const t=sa(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function ES(s,e){const t=sa(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function TS(s,e){const t=sa(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function AS(s,e){s.uniform1iv(this.addr,e)}function wS(s,e){s.uniform2iv(this.addr,e)}function RS(s,e){s.uniform3iv(this.addr,e)}function CS(s,e){s.uniform4iv(this.addr,e)}function LS(s,e){s.uniform1uiv(this.addr,e)}function PS(s,e){s.uniform2uiv(this.addr,e)}function DS(s,e){s.uniform3uiv(this.addr,e)}function IS(s,e){s.uniform4uiv(this.addr,e)}function US(s,e,t){const n=this.cache,i=e.length,r=al(t,i);tn(n,r)||(s.uniform1iv(this.addr,r),nn(n,r));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||Bp,r[a])}function NS(s,e,t){const n=this.cache,i=e.length,r=al(t,i);tn(n,r)||(s.uniform1iv(this.addr,r),nn(n,r));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||zp,r[a])}function OS(s,e,t){const n=this.cache,i=e.length,r=al(t,i);tn(n,r)||(s.uniform1iv(this.addr,r),nn(n,r));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||Hp,r[a])}function FS(s,e,t){const n=this.cache,i=e.length,r=al(t,i);tn(n,r)||(s.uniform1iv(this.addr,r),nn(n,r));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||kp,r[a])}function BS(s){switch(s){case 5126:return xS;case 35664:return yS;case 35665:return MS;case 35666:return bS;case 35674:return SS;case 35675:return ES;case 35676:return TS;case 5124:case 35670:return AS;case 35667:case 35671:return wS;case 35668:case 35672:return RS;case 35669:case 35673:return CS;case 5125:return LS;case 36294:return PS;case 36295:return DS;case 36296:return IS;case 35678:case 36198:case 36298:case 36306:case 35682:return US;case 35679:case 36299:case 36307:return NS;case 35680:case 36300:case 36308:case 36293:return OS;case 36289:case 36303:case 36311:case 36292:return FS}}class kS{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=vS(t.type)}}class zS{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=BS(t.type)}}class HS{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const o=i[r];o.setValue(e,t[o.id],n)}}}const fc=/(\w+)(\])?(\[|\.)?/g;function nd(s,e){s.seq.push(e),s.map[e.id]=e}function GS(s,e,t){const n=s.name,i=n.length;for(fc.lastIndex=0;;){const r=fc.exec(n),a=fc.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){nd(t,c===void 0?new kS(o,s,e):new zS(o,s,e));break}else{let h=t.map[o];h===void 0&&(h=new HS(o),nd(t,h)),t=h}}}class Ho{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),a=e.getUniformLocation(t,r.name);GS(r,a,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function id(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}let VS=0;function WS(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=i;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function XS(s){switch(s){case Ei:return["Linear","( value )"];case qe:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),["Linear","( value )"]}}function rd(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const a=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+WS(s.getShaderSource(e),a)}else return i}function qS(s,e){const t=XS(e);return"vec4 "+s+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function $S(s,e){let t;switch(e){case Xv:t="Linear";break;case qv:t="Reinhard";break;case $v:t="OptimizedCineon";break;case Yv:t="ACESFilmic";break;case jv:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function YS(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ta).join(`
`)}function jS(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function KS(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),a=r.name;let o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:s.getAttribLocation(e,a),locationSize:o}}return t}function Ta(s){return s!==""}function sd(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ad(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const ZS=/^[ \t]*#include +<([\w\d./]+)>/gm;function Hc(s){return s.replace(ZS,JS)}function JS(s,e){const t=st[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Hc(t)}const QS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function od(s){return s.replace(QS,eE)}function eE(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function ld(s){let e="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function tE(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===hp?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===Sv?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Hi&&(e="SHADOWMAP_TYPE_VSM"),e}function nE(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Ws:case Xs:e="ENVMAP_TYPE_CUBE";break;case rl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function iE(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Xs:e="ENVMAP_MODE_REFRACTION";break}return e}function rE(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case pp:e="ENVMAP_BLENDING_MULTIPLY";break;case Vv:e="ENVMAP_BLENDING_MIX";break;case Wv:e="ENVMAP_BLENDING_ADD";break}return e}function sE(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function aE(s,e,t,n){const i=s.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=tE(t),c=nE(t),u=iE(t),h=rE(t),f=sE(t),d=t.isWebGL2?"":YS(t),v=jS(r),g=i.createProgram();let m,p,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Ta).join(`
`),m.length>0&&(m+=`
`),p=[d,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Ta).join(`
`),p.length>0&&(p+=`
`)):(m=[ld(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ta).join(`
`),p=[d,ld(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==$i?"#define TONE_MAPPING":"",t.toneMapping!==$i?st.tonemapping_pars_fragment:"",t.toneMapping!==$i?$S("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",st.encodings_pars_fragment,qS("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ta).join(`
`)),a=Hc(a),a=sd(a,t),a=ad(a,t),o=Hc(o),o=sd(o,t),o=ad(o,t),a=od(a),o=od(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===wf?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===wf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const y=S+m+a,T=S+p+o,E=id(i,i.VERTEX_SHADER,y),w=id(i,i.FRAGMENT_SHADER,T);if(i.attachShader(g,E),i.attachShader(g,w),t.index0AttributeName!==void 0?i.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g),s.debug.checkShaderErrors){const b=i.getProgramInfoLog(g).trim(),P=i.getShaderInfoLog(E).trim(),$=i.getShaderInfoLog(w).trim();let ae=!0,z=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1)if(ae=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,g,E,w);else{const V=rd(i,E,"vertex"),H=rd(i,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Program Info Log: `+b+`
`+V+`
`+H)}else b!==""?console.warn("THREE.WebGLProgram: Program Info Log:",b):(P===""||$==="")&&(z=!1);z&&(this.diagnostics={runnable:ae,programLog:b,vertexShader:{log:P,prefix:m},fragmentShader:{log:$,prefix:p}})}i.deleteShader(E),i.deleteShader(w);let D;this.getUniforms=function(){return D===void 0&&(D=new Ho(i,g)),D};let I;return this.getAttributes=function(){return I===void 0&&(I=KS(i,g)),I},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=VS++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=E,this.fragmentShader=w,this}let oE=0;class lE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new cE(e),t.set(e,n)),n}}class cE{constructor(e){this.id=oE++,this.code=e,this.usedTimes=0}}function uE(s,e,t,n,i,r,a){const o=new fu,l=new lE,c=[],u=i.isWebGL2,h=i.logarithmicDepthBuffer,f=i.vertexTextures;let d=i.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(b){return b===0?"uv":`uv${b}`}function m(b,P,$,ae,z){const V=ae.fog,H=z.geometry,se=b.isMeshStandardMaterial?ae.environment:null,K=(b.isMeshStandardMaterial?t:e).get(b.envMap||se),te=K&&K.mapping===rl?K.image.height:null,oe=v[b.type];b.precision!==null&&(d=i.getMaxPrecision(b.precision),d!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",d,"instead."));const ue=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,ye=ue!==void 0?ue.length:0;let Z=0;H.morphAttributes.position!==void 0&&(Z=1),H.morphAttributes.normal!==void 0&&(Z=2),H.morphAttributes.color!==void 0&&(Z=3);let he,le,ve,Ae;if(oe){const Gt=xi[oe];he=Gt.vertexShader,le=Gt.fragmentShader}else he=b.vertexShader,le=b.fragmentShader,l.update(b),ve=l.getVertexShaderID(b),Ae=l.getFragmentShaderID(b);const Ne=s.getRenderTarget(),Ye=z.isInstancedMesh===!0,Be=!!b.map,St=!!b.matcap,Ke=!!K,q=!!b.aoMap,Lt=!!b.lightMap,Ie=!!b.bumpMap,Ve=!!b.normalMap,Fe=!!b.displacementMap,Ze=!!b.emissiveMap,Ue=!!b.metalnessMap,Ge=!!b.roughnessMap,ct=b.anisotropy>0,Dt=b.clearcoat>0,Ut=b.iridescence>0,R=b.sheen>0,A=b.transmission>0,Q=ct&&!!b.anisotropyMap,fe=Dt&&!!b.clearcoatMap,pe=Dt&&!!b.clearcoatNormalMap,U=Dt&&!!b.clearcoatRoughnessMap,ce=Ut&&!!b.iridescenceMap,me=Ut&&!!b.iridescenceThicknessMap,J=R&&!!b.sheenColorMap,we=R&&!!b.sheenRoughnessMap,Le=!!b.specularMap,Oe=!!b.specularColorMap,Re=!!b.specularIntensityMap,Te=A&&!!b.transmissionMap,He=A&&!!b.thicknessMap,yt=!!b.gradientMap,B=!!b.alphaMap,be=b.alphaTest>0,ee=!!b.extensions,xe=!!H.attributes.uv1,Se=!!H.attributes.uv2,dt=!!H.attributes.uv3;return{isWebGL2:u,shaderID:oe,shaderType:b.type,shaderName:b.name,vertexShader:he,fragmentShader:le,defines:b.defines,customVertexShaderID:ve,customFragmentShaderID:Ae,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:d,instancing:Ye,instancingColor:Ye&&z.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:Ne===null?s.outputColorSpace:Ne.isXRRenderTarget===!0?Ne.texture.colorSpace:Ei,map:Be,matcap:St,envMap:Ke,envMapMode:Ke&&K.mapping,envMapCubeUVHeight:te,aoMap:q,lightMap:Lt,bumpMap:Ie,normalMap:Ve,displacementMap:f&&Fe,emissiveMap:Ze,normalMapObjectSpace:Ve&&b.normalMapType===cx,normalMapTangentSpace:Ve&&b.normalMapType===Tp,metalnessMap:Ue,roughnessMap:Ge,anisotropy:ct,anisotropyMap:Q,clearcoat:Dt,clearcoatMap:fe,clearcoatNormalMap:pe,clearcoatRoughnessMap:U,iridescence:Ut,iridescenceMap:ce,iridescenceThicknessMap:me,sheen:R,sheenColorMap:J,sheenRoughnessMap:we,specularMap:Le,specularColorMap:Oe,specularIntensityMap:Re,transmission:A,transmissionMap:Te,thicknessMap:He,gradientMap:yt,opaque:b.transparent===!1&&b.blending===Bs,alphaMap:B,alphaTest:be,combine:b.combine,mapUv:Be&&g(b.map.channel),aoMapUv:q&&g(b.aoMap.channel),lightMapUv:Lt&&g(b.lightMap.channel),bumpMapUv:Ie&&g(b.bumpMap.channel),normalMapUv:Ve&&g(b.normalMap.channel),displacementMapUv:Fe&&g(b.displacementMap.channel),emissiveMapUv:Ze&&g(b.emissiveMap.channel),metalnessMapUv:Ue&&g(b.metalnessMap.channel),roughnessMapUv:Ge&&g(b.roughnessMap.channel),anisotropyMapUv:Q&&g(b.anisotropyMap.channel),clearcoatMapUv:fe&&g(b.clearcoatMap.channel),clearcoatNormalMapUv:pe&&g(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:U&&g(b.clearcoatRoughnessMap.channel),iridescenceMapUv:ce&&g(b.iridescenceMap.channel),iridescenceThicknessMapUv:me&&g(b.iridescenceThicknessMap.channel),sheenColorMapUv:J&&g(b.sheenColorMap.channel),sheenRoughnessMapUv:we&&g(b.sheenRoughnessMap.channel),specularMapUv:Le&&g(b.specularMap.channel),specularColorMapUv:Oe&&g(b.specularColorMap.channel),specularIntensityMapUv:Re&&g(b.specularIntensityMap.channel),transmissionMapUv:Te&&g(b.transmissionMap.channel),thicknessMapUv:He&&g(b.thicknessMap.channel),alphaMapUv:B&&g(b.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(Ve||ct),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,vertexUv1s:xe,vertexUv2s:Se,vertexUv3s:dt,pointsUvs:z.isPoints===!0&&!!H.attributes.uv&&(Be||B),fog:!!V,useFog:b.fog===!0,fogExp2:V&&V.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:z.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:ye,morphTextureStride:Z,numDirLights:P.directional.length,numPointLights:P.point.length,numSpotLights:P.spot.length,numSpotLightMaps:P.spotLightMap.length,numRectAreaLights:P.rectArea.length,numHemiLights:P.hemi.length,numDirLightShadows:P.directionalShadowMap.length,numPointLightShadows:P.pointShadowMap.length,numSpotLightShadows:P.spotShadowMap.length,numSpotLightShadowsWithMaps:P.numSpotLightShadowsWithMaps,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:b.dithering,shadowMapEnabled:s.shadowMap.enabled&&$.length>0,shadowMapType:s.shadowMap.type,toneMapping:b.toneMapped?s.toneMapping:$i,useLegacyLights:s.useLegacyLights,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===yi,flipSided:b.side===Un,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionDerivatives:ee&&b.extensions.derivatives===!0,extensionFragDepth:ee&&b.extensions.fragDepth===!0,extensionDrawBuffers:ee&&b.extensions.drawBuffers===!0,extensionShaderTextureLOD:ee&&b.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:b.customProgramCacheKey()}}function p(b){const P=[];if(b.shaderID?P.push(b.shaderID):(P.push(b.customVertexShaderID),P.push(b.customFragmentShaderID)),b.defines!==void 0)for(const $ in b.defines)P.push($),P.push(b.defines[$]);return b.isRawShaderMaterial===!1&&(S(P,b),y(P,b),P.push(s.outputColorSpace)),P.push(b.customProgramCacheKey),P.join()}function S(b,P){b.push(P.precision),b.push(P.outputColorSpace),b.push(P.envMapMode),b.push(P.envMapCubeUVHeight),b.push(P.mapUv),b.push(P.alphaMapUv),b.push(P.lightMapUv),b.push(P.aoMapUv),b.push(P.bumpMapUv),b.push(P.normalMapUv),b.push(P.displacementMapUv),b.push(P.emissiveMapUv),b.push(P.metalnessMapUv),b.push(P.roughnessMapUv),b.push(P.anisotropyMapUv),b.push(P.clearcoatMapUv),b.push(P.clearcoatNormalMapUv),b.push(P.clearcoatRoughnessMapUv),b.push(P.iridescenceMapUv),b.push(P.iridescenceThicknessMapUv),b.push(P.sheenColorMapUv),b.push(P.sheenRoughnessMapUv),b.push(P.specularMapUv),b.push(P.specularColorMapUv),b.push(P.specularIntensityMapUv),b.push(P.transmissionMapUv),b.push(P.thicknessMapUv),b.push(P.combine),b.push(P.fogExp2),b.push(P.sizeAttenuation),b.push(P.morphTargetsCount),b.push(P.morphAttributeCount),b.push(P.numDirLights),b.push(P.numPointLights),b.push(P.numSpotLights),b.push(P.numSpotLightMaps),b.push(P.numHemiLights),b.push(P.numRectAreaLights),b.push(P.numDirLightShadows),b.push(P.numPointLightShadows),b.push(P.numSpotLightShadows),b.push(P.numSpotLightShadowsWithMaps),b.push(P.shadowMapType),b.push(P.toneMapping),b.push(P.numClippingPlanes),b.push(P.numClipIntersection),b.push(P.depthPacking)}function y(b,P){o.disableAll(),P.isWebGL2&&o.enable(0),P.supportsVertexTextures&&o.enable(1),P.instancing&&o.enable(2),P.instancingColor&&o.enable(3),P.matcap&&o.enable(4),P.envMap&&o.enable(5),P.normalMapObjectSpace&&o.enable(6),P.normalMapTangentSpace&&o.enable(7),P.clearcoat&&o.enable(8),P.iridescence&&o.enable(9),P.alphaTest&&o.enable(10),P.vertexColors&&o.enable(11),P.vertexAlphas&&o.enable(12),P.vertexUv1s&&o.enable(13),P.vertexUv2s&&o.enable(14),P.vertexUv3s&&o.enable(15),P.vertexTangents&&o.enable(16),P.anisotropy&&o.enable(17),b.push(o.mask),o.disableAll(),P.fog&&o.enable(0),P.useFog&&o.enable(1),P.flatShading&&o.enable(2),P.logarithmicDepthBuffer&&o.enable(3),P.skinning&&o.enable(4),P.morphTargets&&o.enable(5),P.morphNormals&&o.enable(6),P.morphColors&&o.enable(7),P.premultipliedAlpha&&o.enable(8),P.shadowMapEnabled&&o.enable(9),P.useLegacyLights&&o.enable(10),P.doubleSided&&o.enable(11),P.flipSided&&o.enable(12),P.useDepthPacking&&o.enable(13),P.dithering&&o.enable(14),P.transmission&&o.enable(15),P.sheen&&o.enable(16),P.opaque&&o.enable(17),P.pointsUvs&&o.enable(18),b.push(o.mask)}function T(b){const P=v[b.type];let $;if(P){const ae=xi[P];$=Qx.clone(ae.uniforms)}else $=b.uniforms;return $}function E(b,P){let $;for(let ae=0,z=c.length;ae<z;ae++){const V=c[ae];if(V.cacheKey===P){$=V,++$.usedTimes;break}}return $===void 0&&($=new aE(s,P,b,r),c.push($)),$}function w(b){if(--b.usedTimes===0){const P=c.indexOf(b);c[P]=c[c.length-1],c.pop(),b.destroy()}}function D(b){l.remove(b)}function I(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:T,acquireProgram:E,releaseProgram:w,releaseShaderCache:D,programs:c,dispose:I}}function hE(){let s=new WeakMap;function e(r){let a=s.get(r);return a===void 0&&(a={},s.set(r,a)),a}function t(r){s.delete(r)}function n(r,a,o){s.get(r)[a]=o}function i(){s=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function fE(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function cd(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function ud(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function a(h,f,d,v,g,m){let p=s[e];return p===void 0?(p={id:h.id,object:h,geometry:f,material:d,groupOrder:v,renderOrder:h.renderOrder,z:g,group:m},s[e]=p):(p.id=h.id,p.object=h,p.geometry=f,p.material=d,p.groupOrder=v,p.renderOrder=h.renderOrder,p.z=g,p.group=m),e++,p}function o(h,f,d,v,g,m){const p=a(h,f,d,v,g,m);d.transmission>0?n.push(p):d.transparent===!0?i.push(p):t.push(p)}function l(h,f,d,v,g,m){const p=a(h,f,d,v,g,m);d.transmission>0?n.unshift(p):d.transparent===!0?i.unshift(p):t.unshift(p)}function c(h,f){t.length>1&&t.sort(h||fE),n.length>1&&n.sort(f||cd),i.length>1&&i.sort(f||cd)}function u(){for(let h=e,f=s.length;h<f;h++){const d=s[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:o,unshift:l,finish:u,sort:c}}function dE(){let s=new WeakMap;function e(n,i){const r=s.get(n);let a;return r===void 0?(a=new ud,s.set(n,[a])):i>=r.length?(a=new ud,r.push(a)):a=r[i],a}function t(){s=new WeakMap}return{get:e,dispose:t}}function pE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new k,color:new nt};break;case"SpotLight":t={position:new k,direction:new k,color:new nt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new k,color:new nt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new k,skyColor:new nt,groundColor:new nt};break;case"RectAreaLight":t={color:new nt,position:new k,halfWidth:new k,halfHeight:new k};break}return s[e.id]=t,t}}}function mE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let gE=0;function _E(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function vE(s,e){const t=new pE,n=mE(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)i.probe.push(new k);const r=new k,a=new lt,o=new lt;function l(u,h){let f=0,d=0,v=0;for(let $=0;$<9;$++)i.probe[$].set(0,0,0);let g=0,m=0,p=0,S=0,y=0,T=0,E=0,w=0,D=0,I=0;u.sort(_E);const b=h===!0?Math.PI:1;for(let $=0,ae=u.length;$<ae;$++){const z=u[$],V=z.color,H=z.intensity,se=z.distance,K=z.shadow&&z.shadow.map?z.shadow.map.texture:null;if(z.isAmbientLight)f+=V.r*H*b,d+=V.g*H*b,v+=V.b*H*b;else if(z.isLightProbe)for(let te=0;te<9;te++)i.probe[te].addScaledVector(z.sh.coefficients[te],H);else if(z.isDirectionalLight){const te=t.get(z);if(te.color.copy(z.color).multiplyScalar(z.intensity*b),z.castShadow){const oe=z.shadow,ue=n.get(z);ue.shadowBias=oe.bias,ue.shadowNormalBias=oe.normalBias,ue.shadowRadius=oe.radius,ue.shadowMapSize=oe.mapSize,i.directionalShadow[g]=ue,i.directionalShadowMap[g]=K,i.directionalShadowMatrix[g]=z.shadow.matrix,T++}i.directional[g]=te,g++}else if(z.isSpotLight){const te=t.get(z);te.position.setFromMatrixPosition(z.matrixWorld),te.color.copy(V).multiplyScalar(H*b),te.distance=se,te.coneCos=Math.cos(z.angle),te.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),te.decay=z.decay,i.spot[p]=te;const oe=z.shadow;if(z.map&&(i.spotLightMap[D]=z.map,D++,oe.updateMatrices(z),z.castShadow&&I++),i.spotLightMatrix[p]=oe.matrix,z.castShadow){const ue=n.get(z);ue.shadowBias=oe.bias,ue.shadowNormalBias=oe.normalBias,ue.shadowRadius=oe.radius,ue.shadowMapSize=oe.mapSize,i.spotShadow[p]=ue,i.spotShadowMap[p]=K,w++}p++}else if(z.isRectAreaLight){const te=t.get(z);te.color.copy(V).multiplyScalar(H),te.halfWidth.set(z.width*.5,0,0),te.halfHeight.set(0,z.height*.5,0),i.rectArea[S]=te,S++}else if(z.isPointLight){const te=t.get(z);if(te.color.copy(z.color).multiplyScalar(z.intensity*b),te.distance=z.distance,te.decay=z.decay,z.castShadow){const oe=z.shadow,ue=n.get(z);ue.shadowBias=oe.bias,ue.shadowNormalBias=oe.normalBias,ue.shadowRadius=oe.radius,ue.shadowMapSize=oe.mapSize,ue.shadowCameraNear=oe.camera.near,ue.shadowCameraFar=oe.camera.far,i.pointShadow[m]=ue,i.pointShadowMap[m]=K,i.pointShadowMatrix[m]=z.shadow.matrix,E++}i.point[m]=te,m++}else if(z.isHemisphereLight){const te=t.get(z);te.skyColor.copy(z.color).multiplyScalar(H*b),te.groundColor.copy(z.groundColor).multiplyScalar(H*b),i.hemi[y]=te,y++}}S>0&&(e.isWebGL2||s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Me.LTC_FLOAT_1,i.rectAreaLTC2=Me.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=Me.LTC_HALF_1,i.rectAreaLTC2=Me.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=f,i.ambient[1]=d,i.ambient[2]=v;const P=i.hash;(P.directionalLength!==g||P.pointLength!==m||P.spotLength!==p||P.rectAreaLength!==S||P.hemiLength!==y||P.numDirectionalShadows!==T||P.numPointShadows!==E||P.numSpotShadows!==w||P.numSpotMaps!==D)&&(i.directional.length=g,i.spot.length=p,i.rectArea.length=S,i.point.length=m,i.hemi.length=y,i.directionalShadow.length=T,i.directionalShadowMap.length=T,i.pointShadow.length=E,i.pointShadowMap.length=E,i.spotShadow.length=w,i.spotShadowMap.length=w,i.directionalShadowMatrix.length=T,i.pointShadowMatrix.length=E,i.spotLightMatrix.length=w+D-I,i.spotLightMap.length=D,i.numSpotLightShadowsWithMaps=I,P.directionalLength=g,P.pointLength=m,P.spotLength=p,P.rectAreaLength=S,P.hemiLength=y,P.numDirectionalShadows=T,P.numPointShadows=E,P.numSpotShadows=w,P.numSpotMaps=D,i.version=gE++)}function c(u,h){let f=0,d=0,v=0,g=0,m=0;const p=h.matrixWorldInverse;for(let S=0,y=u.length;S<y;S++){const T=u[S];if(T.isDirectionalLight){const E=i.directional[f];E.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(p),f++}else if(T.isSpotLight){const E=i.spot[v];E.position.setFromMatrixPosition(T.matrixWorld),E.position.applyMatrix4(p),E.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(p),v++}else if(T.isRectAreaLight){const E=i.rectArea[g];E.position.setFromMatrixPosition(T.matrixWorld),E.position.applyMatrix4(p),o.identity(),a.copy(T.matrixWorld),a.premultiply(p),o.extractRotation(a),E.halfWidth.set(T.width*.5,0,0),E.halfHeight.set(0,T.height*.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),g++}else if(T.isPointLight){const E=i.point[d];E.position.setFromMatrixPosition(T.matrixWorld),E.position.applyMatrix4(p),d++}else if(T.isHemisphereLight){const E=i.hemi[m];E.direction.setFromMatrixPosition(T.matrixWorld),E.direction.transformDirection(p),m++}}}return{setup:l,setupView:c,state:i}}function hd(s,e){const t=new vE(s,e),n=[],i=[];function r(){n.length=0,i.length=0}function a(h){n.push(h)}function o(h){i.push(h)}function l(h){t.setup(n,h)}function c(h){t.setupView(n,h)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function xE(s,e){let t=new WeakMap;function n(r,a=0){const o=t.get(r);let l;return o===void 0?(l=new hd(s,e),t.set(r,[l])):a>=o.length?(l=new hd(s,e),o.push(l)):l=o[a],l}function i(){t=new WeakMap}return{get:n,dispose:i}}class yE extends pi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ox,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class ME extends pi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const bE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,SE=`uniform sampler2D shadow_pass;
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
}`;function EE(s,e,t){let n=new pu;const i=new $e,r=new $e,a=new Ct,o=new yE({depthPacking:lx}),l=new ME,c={},u=t.maxTextureSize,h={[ji]:Un,[Un]:ji,[yi]:yi},f=new Kr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new $e},radius:{value:4}},vertexShader:bE,fragmentShader:SE}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const v=new Ri;v.setAttribute("position",new Ln(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new mn(v,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=hp;let p=this.type;this.render=function(E,w,D){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;const I=s.getRenderTarget(),b=s.getActiveCubeFace(),P=s.getActiveMipmapLevel(),$=s.state;$.setBlending(mr),$.buffers.color.setClear(1,1,1,1),$.buffers.depth.setTest(!0),$.setScissorTest(!1);const ae=p!==Hi&&this.type===Hi,z=p===Hi&&this.type!==Hi;for(let V=0,H=E.length;V<H;V++){const se=E[V],K=se.shadow;if(K===void 0){console.warn("THREE.WebGLShadowMap:",se,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;i.copy(K.mapSize);const te=K.getFrameExtents();if(i.multiply(te),r.copy(K.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/te.x),i.x=r.x*te.x,K.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/te.y),i.y=r.y*te.y,K.mapSize.y=r.y)),K.map===null||ae===!0||z===!0){const ue=this.type!==Hi?{minFilter:on,magFilter:on}:{};K.map!==null&&K.map.dispose(),K.map=new jr(i.x,i.y,ue),K.map.texture.name=se.name+".shadowMap",K.camera.updateProjectionMatrix()}s.setRenderTarget(K.map),s.clear();const oe=K.getViewportCount();for(let ue=0;ue<oe;ue++){const ye=K.getViewport(ue);a.set(r.x*ye.x,r.y*ye.y,r.x*ye.z,r.y*ye.w),$.viewport(a),K.updateMatrices(se,ue),n=K.getFrustum(),T(w,D,K.camera,se,this.type)}K.isPointLightShadow!==!0&&this.type===Hi&&S(K,D),K.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(I,b,P)};function S(E,w){const D=e.update(g);f.defines.VSM_SAMPLES!==E.blurSamples&&(f.defines.VSM_SAMPLES=E.blurSamples,d.defines.VSM_SAMPLES=E.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new jr(i.x,i.y)),f.uniforms.shadow_pass.value=E.map.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,s.setRenderTarget(E.mapPass),s.clear(),s.renderBufferDirect(w,null,D,f,g,null),d.uniforms.shadow_pass.value=E.mapPass.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,s.setRenderTarget(E.map),s.clear(),s.renderBufferDirect(w,null,D,d,g,null)}function y(E,w,D,I){let b=null;const P=D.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(P!==void 0)b=P;else if(b=D.isPointLight===!0?l:o,s.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const $=b.uuid,ae=w.uuid;let z=c[$];z===void 0&&(z={},c[$]=z);let V=z[ae];V===void 0&&(V=b.clone(),z[ae]=V),b=V}if(b.visible=w.visible,b.wireframe=w.wireframe,I===Hi?b.side=w.shadowSide!==null?w.shadowSide:w.side:b.side=w.shadowSide!==null?w.shadowSide:h[w.side],b.alphaMap=w.alphaMap,b.alphaTest=w.alphaTest,b.map=w.map,b.clipShadows=w.clipShadows,b.clippingPlanes=w.clippingPlanes,b.clipIntersection=w.clipIntersection,b.displacementMap=w.displacementMap,b.displacementScale=w.displacementScale,b.displacementBias=w.displacementBias,b.wireframeLinewidth=w.wireframeLinewidth,b.linewidth=w.linewidth,D.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const $=s.properties.get(b);$.light=D}return b}function T(E,w,D,I,b){if(E.visible===!1)return;if(E.layers.test(w.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&b===Hi)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,E.matrixWorld);const ae=e.update(E),z=E.material;if(Array.isArray(z)){const V=ae.groups;for(let H=0,se=V.length;H<se;H++){const K=V[H],te=z[K.materialIndex];if(te&&te.visible){const oe=y(E,te,I,b);s.renderBufferDirect(D,null,ae,oe,E,K)}}}else if(z.visible){const V=y(E,z,I,b);s.renderBufferDirect(D,null,ae,V,E,null)}}const $=E.children;for(let ae=0,z=$.length;ae<z;ae++)T($[ae],w,D,I,b)}}function TE(s,e,t){const n=t.isWebGL2;function i(){let B=!1;const be=new Ct;let ee=null;const xe=new Ct(0,0,0,0);return{setMask:function(Se){ee!==Se&&!B&&(s.colorMask(Se,Se,Se,Se),ee=Se)},setLocked:function(Se){B=Se},setClear:function(Se,dt,Nt,Gt,Li){Li===!0&&(Se*=Gt,dt*=Gt,Nt*=Gt),be.set(Se,dt,Nt,Gt),xe.equals(be)===!1&&(s.clearColor(Se,dt,Nt,Gt),xe.copy(be))},reset:function(){B=!1,ee=null,xe.set(-1,0,0,0)}}}function r(){let B=!1,be=null,ee=null,xe=null;return{setTest:function(Se){Se?Ne(s.DEPTH_TEST):Ye(s.DEPTH_TEST)},setMask:function(Se){be!==Se&&!B&&(s.depthMask(Se),be=Se)},setFunc:function(Se){if(ee!==Se){switch(Se){case Ov:s.depthFunc(s.NEVER);break;case Fv:s.depthFunc(s.ALWAYS);break;case Bv:s.depthFunc(s.LESS);break;case Ic:s.depthFunc(s.LEQUAL);break;case kv:s.depthFunc(s.EQUAL);break;case zv:s.depthFunc(s.GEQUAL);break;case Hv:s.depthFunc(s.GREATER);break;case Gv:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}ee=Se}},setLocked:function(Se){B=Se},setClear:function(Se){xe!==Se&&(s.clearDepth(Se),xe=Se)},reset:function(){B=!1,be=null,ee=null,xe=null}}}function a(){let B=!1,be=null,ee=null,xe=null,Se=null,dt=null,Nt=null,Gt=null,Li=null;return{setTest:function(Ot){B||(Ot?Ne(s.STENCIL_TEST):Ye(s.STENCIL_TEST))},setMask:function(Ot){be!==Ot&&!B&&(s.stencilMask(Ot),be=Ot)},setFunc:function(Ot,$n,cn){(ee!==Ot||xe!==$n||Se!==cn)&&(s.stencilFunc(Ot,$n,cn),ee=Ot,xe=$n,Se=cn)},setOp:function(Ot,$n,cn){(dt!==Ot||Nt!==$n||Gt!==cn)&&(s.stencilOp(Ot,$n,cn),dt=Ot,Nt=$n,Gt=cn)},setLocked:function(Ot){B=Ot},setClear:function(Ot){Li!==Ot&&(s.clearStencil(Ot),Li=Ot)},reset:function(){B=!1,be=null,ee=null,xe=null,Se=null,dt=null,Nt=null,Gt=null,Li=null}}}const o=new i,l=new r,c=new a,u=new WeakMap,h=new WeakMap;let f={},d={},v=new WeakMap,g=[],m=null,p=!1,S=null,y=null,T=null,E=null,w=null,D=null,I=null,b=!1,P=null,$=null,ae=null,z=null,V=null;const H=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let se=!1,K=0;const te=s.getParameter(s.VERSION);te.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(te)[1]),se=K>=1):te.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(te)[1]),se=K>=2);let oe=null,ue={};const ye=s.getParameter(s.SCISSOR_BOX),Z=s.getParameter(s.VIEWPORT),he=new Ct().fromArray(ye),le=new Ct().fromArray(Z);function ve(B,be,ee,xe){const Se=new Uint8Array(4),dt=s.createTexture();s.bindTexture(B,dt),s.texParameteri(B,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(B,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Nt=0;Nt<ee;Nt++)n&&(B===s.TEXTURE_3D||B===s.TEXTURE_2D_ARRAY)?s.texImage3D(be,0,s.RGBA,1,1,xe,0,s.RGBA,s.UNSIGNED_BYTE,Se):s.texImage2D(be+Nt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Se);return dt}const Ae={};Ae[s.TEXTURE_2D]=ve(s.TEXTURE_2D,s.TEXTURE_2D,1),Ae[s.TEXTURE_CUBE_MAP]=ve(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Ae[s.TEXTURE_2D_ARRAY]=ve(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Ae[s.TEXTURE_3D]=ve(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Ne(s.DEPTH_TEST),l.setFunc(Ic),Fe(!1),Ze(Yh),Ne(s.CULL_FACE),Ie(mr);function Ne(B){f[B]!==!0&&(s.enable(B),f[B]=!0)}function Ye(B){f[B]!==!1&&(s.disable(B),f[B]=!1)}function Be(B,be){return d[B]!==be?(s.bindFramebuffer(B,be),d[B]=be,n&&(B===s.DRAW_FRAMEBUFFER&&(d[s.FRAMEBUFFER]=be),B===s.FRAMEBUFFER&&(d[s.DRAW_FRAMEBUFFER]=be)),!0):!1}function St(B,be){let ee=g,xe=!1;if(B)if(ee=v.get(be),ee===void 0&&(ee=[],v.set(be,ee)),B.isWebGLMultipleRenderTargets){const Se=B.texture;if(ee.length!==Se.length||ee[0]!==s.COLOR_ATTACHMENT0){for(let dt=0,Nt=Se.length;dt<Nt;dt++)ee[dt]=s.COLOR_ATTACHMENT0+dt;ee.length=Se.length,xe=!0}}else ee[0]!==s.COLOR_ATTACHMENT0&&(ee[0]=s.COLOR_ATTACHMENT0,xe=!0);else ee[0]!==s.BACK&&(ee[0]=s.BACK,xe=!0);xe&&(t.isWebGL2?s.drawBuffers(ee):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ee))}function Ke(B){return m!==B?(s.useProgram(B),m=B,!0):!1}const q={[Us]:s.FUNC_ADD,[Tv]:s.FUNC_SUBTRACT,[Av]:s.FUNC_REVERSE_SUBTRACT};if(n)q[Jh]=s.MIN,q[Qh]=s.MAX;else{const B=e.get("EXT_blend_minmax");B!==null&&(q[Jh]=B.MIN_EXT,q[Qh]=B.MAX_EXT)}const Lt={[wv]:s.ZERO,[Rv]:s.ONE,[Cv]:s.SRC_COLOR,[fp]:s.SRC_ALPHA,[Nv]:s.SRC_ALPHA_SATURATE,[Iv]:s.DST_COLOR,[Pv]:s.DST_ALPHA,[Lv]:s.ONE_MINUS_SRC_COLOR,[dp]:s.ONE_MINUS_SRC_ALPHA,[Uv]:s.ONE_MINUS_DST_COLOR,[Dv]:s.ONE_MINUS_DST_ALPHA};function Ie(B,be,ee,xe,Se,dt,Nt,Gt){if(B===mr){p===!0&&(Ye(s.BLEND),p=!1);return}if(p===!1&&(Ne(s.BLEND),p=!0),B!==Ev){if(B!==S||Gt!==b){if((y!==Us||w!==Us)&&(s.blendEquation(s.FUNC_ADD),y=Us,w=Us),Gt)switch(B){case Bs:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case jh:s.blendFunc(s.ONE,s.ONE);break;case Kh:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Zh:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case Bs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case jh:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Kh:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Zh:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}T=null,E=null,D=null,I=null,S=B,b=Gt}return}Se=Se||be,dt=dt||ee,Nt=Nt||xe,(be!==y||Se!==w)&&(s.blendEquationSeparate(q[be],q[Se]),y=be,w=Se),(ee!==T||xe!==E||dt!==D||Nt!==I)&&(s.blendFuncSeparate(Lt[ee],Lt[xe],Lt[dt],Lt[Nt]),T=ee,E=xe,D=dt,I=Nt),S=B,b=!1}function Ve(B,be){B.side===yi?Ye(s.CULL_FACE):Ne(s.CULL_FACE);let ee=B.side===Un;be&&(ee=!ee),Fe(ee),B.blending===Bs&&B.transparent===!1?Ie(mr):Ie(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.premultipliedAlpha),l.setFunc(B.depthFunc),l.setTest(B.depthTest),l.setMask(B.depthWrite),o.setMask(B.colorWrite);const xe=B.stencilWrite;c.setTest(xe),xe&&(c.setMask(B.stencilWriteMask),c.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),c.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),Ge(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?Ne(s.SAMPLE_ALPHA_TO_COVERAGE):Ye(s.SAMPLE_ALPHA_TO_COVERAGE)}function Fe(B){P!==B&&(B?s.frontFace(s.CW):s.frontFace(s.CCW),P=B)}function Ze(B){B!==Mv?(Ne(s.CULL_FACE),B!==$&&(B===Yh?s.cullFace(s.BACK):B===bv?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ye(s.CULL_FACE),$=B}function Ue(B){B!==ae&&(se&&s.lineWidth(B),ae=B)}function Ge(B,be,ee){B?(Ne(s.POLYGON_OFFSET_FILL),(z!==be||V!==ee)&&(s.polygonOffset(be,ee),z=be,V=ee)):Ye(s.POLYGON_OFFSET_FILL)}function ct(B){B?Ne(s.SCISSOR_TEST):Ye(s.SCISSOR_TEST)}function Dt(B){B===void 0&&(B=s.TEXTURE0+H-1),oe!==B&&(s.activeTexture(B),oe=B)}function Ut(B,be,ee){ee===void 0&&(oe===null?ee=s.TEXTURE0+H-1:ee=oe);let xe=ue[ee];xe===void 0&&(xe={type:void 0,texture:void 0},ue[ee]=xe),(xe.type!==B||xe.texture!==be)&&(oe!==ee&&(s.activeTexture(ee),oe=ee),s.bindTexture(B,be||Ae[B]),xe.type=B,xe.texture=be)}function R(){const B=ue[oe];B!==void 0&&B.type!==void 0&&(s.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function A(){try{s.compressedTexImage2D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Q(){try{s.compressedTexImage3D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function fe(){try{s.texSubImage2D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function pe(){try{s.texSubImage3D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function U(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ce(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function me(){try{s.texStorage2D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function J(){try{s.texStorage3D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function we(){try{s.texImage2D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Le(){try{s.texImage3D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Oe(B){he.equals(B)===!1&&(s.scissor(B.x,B.y,B.z,B.w),he.copy(B))}function Re(B){le.equals(B)===!1&&(s.viewport(B.x,B.y,B.z,B.w),le.copy(B))}function Te(B,be){let ee=h.get(be);ee===void 0&&(ee=new WeakMap,h.set(be,ee));let xe=ee.get(B);xe===void 0&&(xe=s.getUniformBlockIndex(be,B.name),ee.set(B,xe))}function He(B,be){const xe=h.get(be).get(B);u.get(be)!==xe&&(s.uniformBlockBinding(be,xe,B.__bindingPointIndex),u.set(be,xe))}function yt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),n===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),f={},oe=null,ue={},d={},v=new WeakMap,g=[],m=null,p=!1,S=null,y=null,T=null,E=null,w=null,D=null,I=null,b=!1,P=null,$=null,ae=null,z=null,V=null,he.set(0,0,s.canvas.width,s.canvas.height),le.set(0,0,s.canvas.width,s.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:Ne,disable:Ye,bindFramebuffer:Be,drawBuffers:St,useProgram:Ke,setBlending:Ie,setMaterial:Ve,setFlipSided:Fe,setCullFace:Ze,setLineWidth:Ue,setPolygonOffset:Ge,setScissorTest:ct,activeTexture:Dt,bindTexture:Ut,unbindTexture:R,compressedTexImage2D:A,compressedTexImage3D:Q,texImage2D:we,texImage3D:Le,updateUBOMapping:Te,uniformBlockBinding:He,texStorage2D:me,texStorage3D:J,texSubImage2D:fe,texSubImage3D:pe,compressedTexSubImage2D:U,compressedTexSubImage3D:ce,scissor:Oe,viewport:Re,reset:yt}}function AE(s,e,t,n,i,r,a){const o=i.isWebGL2,l=i.maxTextures,c=i.maxCubemapSize,u=i.maxTextureSize,h=i.maxSamples,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),v=new WeakMap;let g;const m=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(R,A){return p?new OffscreenCanvas(R,A):Ba("canvas")}function y(R,A,Q,fe){let pe=1;if((R.width>fe||R.height>fe)&&(pe=fe/Math.max(R.width,R.height)),pe<1||A===!0)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap){const U=A?$o:Math.floor,ce=U(pe*R.width),me=U(pe*R.height);g===void 0&&(g=S(ce,me));const J=Q?S(ce,me):g;return J.width=ce,J.height=me,J.getContext("2d").drawImage(R,0,0,ce,me),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+R.width+"x"+R.height+") to ("+ce+"x"+me+")."),J}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+R.width+"x"+R.height+")."),R;return R}function T(R){return zc(R.width)&&zc(R.height)}function E(R){return o?!1:R.wrapS!==Jn||R.wrapT!==Jn||R.minFilter!==on&&R.minFilter!==Dn}function w(R,A){return R.generateMipmaps&&A&&R.minFilter!==on&&R.minFilter!==Dn}function D(R){s.generateMipmap(R)}function I(R,A,Q,fe,pe=!1){if(o===!1)return A;if(R!==null){if(s[R]!==void 0)return s[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let U=A;return A===s.RED&&(Q===s.FLOAT&&(U=s.R32F),Q===s.HALF_FLOAT&&(U=s.R16F),Q===s.UNSIGNED_BYTE&&(U=s.R8)),A===s.RG&&(Q===s.FLOAT&&(U=s.RG32F),Q===s.HALF_FLOAT&&(U=s.RG16F),Q===s.UNSIGNED_BYTE&&(U=s.RG8)),A===s.RGBA&&(Q===s.FLOAT&&(U=s.RGBA32F),Q===s.HALF_FLOAT&&(U=s.RGBA16F),Q===s.UNSIGNED_BYTE&&(U=fe===qe&&pe===!1?s.SRGB8_ALPHA8:s.RGBA8),Q===s.UNSIGNED_SHORT_4_4_4_4&&(U=s.RGBA4),Q===s.UNSIGNED_SHORT_5_5_5_1&&(U=s.RGB5_A1)),(U===s.R16F||U===s.R32F||U===s.RG16F||U===s.RG32F||U===s.RGBA16F||U===s.RGBA32F)&&e.get("EXT_color_buffer_float"),U}function b(R,A,Q){return w(R,Q)===!0||R.isFramebufferTexture&&R.minFilter!==on&&R.minFilter!==Dn?Math.log2(Math.max(A.width,A.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?A.mipmaps.length:1}function P(R){return R===on||R===Oc||R===zo?s.NEAREST:s.LINEAR}function $(R){const A=R.target;A.removeEventListener("dispose",$),z(A),A.isVideoTexture&&v.delete(A)}function ae(R){const A=R.target;A.removeEventListener("dispose",ae),H(A)}function z(R){const A=n.get(R);if(A.__webglInit===void 0)return;const Q=R.source,fe=m.get(Q);if(fe){const pe=fe[A.__cacheKey];pe.usedTimes--,pe.usedTimes===0&&V(R),Object.keys(fe).length===0&&m.delete(Q)}n.remove(R)}function V(R){const A=n.get(R);s.deleteTexture(A.__webglTexture);const Q=R.source,fe=m.get(Q);delete fe[A.__cacheKey],a.memory.textures--}function H(R){const A=R.texture,Q=n.get(R),fe=n.get(A);if(fe.__webglTexture!==void 0&&(s.deleteTexture(fe.__webglTexture),a.memory.textures--),R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let pe=0;pe<6;pe++)s.deleteFramebuffer(Q.__webglFramebuffer[pe]),Q.__webglDepthbuffer&&s.deleteRenderbuffer(Q.__webglDepthbuffer[pe]);else{if(s.deleteFramebuffer(Q.__webglFramebuffer),Q.__webglDepthbuffer&&s.deleteRenderbuffer(Q.__webglDepthbuffer),Q.__webglMultisampledFramebuffer&&s.deleteFramebuffer(Q.__webglMultisampledFramebuffer),Q.__webglColorRenderbuffer)for(let pe=0;pe<Q.__webglColorRenderbuffer.length;pe++)Q.__webglColorRenderbuffer[pe]&&s.deleteRenderbuffer(Q.__webglColorRenderbuffer[pe]);Q.__webglDepthRenderbuffer&&s.deleteRenderbuffer(Q.__webglDepthRenderbuffer)}if(R.isWebGLMultipleRenderTargets)for(let pe=0,U=A.length;pe<U;pe++){const ce=n.get(A[pe]);ce.__webglTexture&&(s.deleteTexture(ce.__webglTexture),a.memory.textures--),n.remove(A[pe])}n.remove(A),n.remove(R)}let se=0;function K(){se=0}function te(){const R=se;return R>=l&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+l),se+=1,R}function oe(R){const A=[];return A.push(R.wrapS),A.push(R.wrapT),A.push(R.wrapR||0),A.push(R.magFilter),A.push(R.minFilter),A.push(R.anisotropy),A.push(R.internalFormat),A.push(R.format),A.push(R.type),A.push(R.generateMipmaps),A.push(R.premultiplyAlpha),A.push(R.flipY),A.push(R.unpackAlignment),A.push(R.colorSpace),A.join()}function ue(R,A){const Q=n.get(R);if(R.isVideoTexture&&Dt(R),R.isRenderTargetTexture===!1&&R.version>0&&Q.__version!==R.version){const fe=R.image;if(fe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(fe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Be(Q,R,A);return}}t.bindTexture(s.TEXTURE_2D,Q.__webglTexture,s.TEXTURE0+A)}function ye(R,A){const Q=n.get(R);if(R.version>0&&Q.__version!==R.version){Be(Q,R,A);return}t.bindTexture(s.TEXTURE_2D_ARRAY,Q.__webglTexture,s.TEXTURE0+A)}function Z(R,A){const Q=n.get(R);if(R.version>0&&Q.__version!==R.version){Be(Q,R,A);return}t.bindTexture(s.TEXTURE_3D,Q.__webglTexture,s.TEXTURE0+A)}function he(R,A){const Q=n.get(R);if(R.version>0&&Q.__version!==R.version){St(Q,R,A);return}t.bindTexture(s.TEXTURE_CUBE_MAP,Q.__webglTexture,s.TEXTURE0+A)}const le={[qs]:s.REPEAT,[Jn]:s.CLAMP_TO_EDGE,[Xo]:s.MIRRORED_REPEAT},ve={[on]:s.NEAREST,[Oc]:s.NEAREST_MIPMAP_NEAREST,[zo]:s.NEAREST_MIPMAP_LINEAR,[Dn]:s.LINEAR,[gp]:s.LINEAR_MIPMAP_NEAREST,[Yr]:s.LINEAR_MIPMAP_LINEAR},Ae={[hx]:s.NEVER,[vx]:s.ALWAYS,[fx]:s.LESS,[px]:s.LEQUAL,[dx]:s.EQUAL,[_x]:s.GEQUAL,[mx]:s.GREATER,[gx]:s.NOTEQUAL};function Ne(R,A,Q){if(Q?(s.texParameteri(R,s.TEXTURE_WRAP_S,le[A.wrapS]),s.texParameteri(R,s.TEXTURE_WRAP_T,le[A.wrapT]),(R===s.TEXTURE_3D||R===s.TEXTURE_2D_ARRAY)&&s.texParameteri(R,s.TEXTURE_WRAP_R,le[A.wrapR]),s.texParameteri(R,s.TEXTURE_MAG_FILTER,ve[A.magFilter]),s.texParameteri(R,s.TEXTURE_MIN_FILTER,ve[A.minFilter])):(s.texParameteri(R,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(R,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(R===s.TEXTURE_3D||R===s.TEXTURE_2D_ARRAY)&&s.texParameteri(R,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(A.wrapS!==Jn||A.wrapT!==Jn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(R,s.TEXTURE_MAG_FILTER,P(A.magFilter)),s.texParameteri(R,s.TEXTURE_MIN_FILTER,P(A.minFilter)),A.minFilter!==on&&A.minFilter!==Dn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),A.compareFunction&&(s.texParameteri(R,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(R,s.TEXTURE_COMPARE_FUNC,Ae[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const fe=e.get("EXT_texture_filter_anisotropic");if(A.magFilter===on||A.minFilter!==zo&&A.minFilter!==Yr||A.type===Wi&&e.has("OES_texture_float_linear")===!1||o===!1&&A.type===Oa&&e.has("OES_texture_half_float_linear")===!1)return;(A.anisotropy>1||n.get(A).__currentAnisotropy)&&(s.texParameterf(R,fe.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,i.getMaxAnisotropy())),n.get(A).__currentAnisotropy=A.anisotropy)}}function Ye(R,A){let Q=!1;R.__webglInit===void 0&&(R.__webglInit=!0,A.addEventListener("dispose",$));const fe=A.source;let pe=m.get(fe);pe===void 0&&(pe={},m.set(fe,pe));const U=oe(A);if(U!==R.__cacheKey){pe[U]===void 0&&(pe[U]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,Q=!0),pe[U].usedTimes++;const ce=pe[R.__cacheKey];ce!==void 0&&(pe[R.__cacheKey].usedTimes--,ce.usedTimes===0&&V(A)),R.__cacheKey=U,R.__webglTexture=pe[U].texture}return Q}function Be(R,A,Q){let fe=s.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(fe=s.TEXTURE_2D_ARRAY),A.isData3DTexture&&(fe=s.TEXTURE_3D);const pe=Ye(R,A),U=A.source;t.bindTexture(fe,R.__webglTexture,s.TEXTURE0+Q);const ce=n.get(U);if(U.version!==ce.__version||pe===!0){t.activeTexture(s.TEXTURE0+Q),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,A.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,A.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.NONE);const me=E(A)&&T(A.image)===!1;let J=y(A.image,me,!1,u);J=Ut(A,J);const we=T(J)||o,Le=r.convert(A.format,A.colorSpace);let Oe=r.convert(A.type),Re=I(A.internalFormat,Le,Oe,A.colorSpace);Ne(fe,A,we);let Te;const He=A.mipmaps,yt=o&&A.isVideoTexture!==!0,B=ce.__version===void 0||pe===!0,be=b(A,J,we);if(A.isDepthTexture)Re=s.DEPTH_COMPONENT,o?A.type===Wi?Re=s.DEPTH_COMPONENT32F:A.type===ur?Re=s.DEPTH_COMPONENT24:A.type===Hr?Re=s.DEPTH24_STENCIL8:Re=s.DEPTH_COMPONENT16:A.type===Wi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),A.format===Gr&&Re===s.DEPTH_COMPONENT&&A.type!==uu&&A.type!==ur&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),A.type=ur,Oe=r.convert(A.type)),A.format===$s&&Re===s.DEPTH_COMPONENT&&(Re=s.DEPTH_STENCIL,A.type!==Hr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),A.type=Hr,Oe=r.convert(A.type))),B&&(yt?t.texStorage2D(s.TEXTURE_2D,1,Re,J.width,J.height):t.texImage2D(s.TEXTURE_2D,0,Re,J.width,J.height,0,Le,Oe,null));else if(A.isDataTexture)if(He.length>0&&we){yt&&B&&t.texStorage2D(s.TEXTURE_2D,be,Re,He[0].width,He[0].height);for(let ee=0,xe=He.length;ee<xe;ee++)Te=He[ee],yt?t.texSubImage2D(s.TEXTURE_2D,ee,0,0,Te.width,Te.height,Le,Oe,Te.data):t.texImage2D(s.TEXTURE_2D,ee,Re,Te.width,Te.height,0,Le,Oe,Te.data);A.generateMipmaps=!1}else yt?(B&&t.texStorage2D(s.TEXTURE_2D,be,Re,J.width,J.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,J.width,J.height,Le,Oe,J.data)):t.texImage2D(s.TEXTURE_2D,0,Re,J.width,J.height,0,Le,Oe,J.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){yt&&B&&t.texStorage3D(s.TEXTURE_2D_ARRAY,be,Re,He[0].width,He[0].height,J.depth);for(let ee=0,xe=He.length;ee<xe;ee++)Te=He[ee],A.format!==Qn?Le!==null?yt?t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ee,0,0,0,Te.width,Te.height,J.depth,Le,Te.data,0,0):t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ee,Re,Te.width,Te.height,J.depth,0,Te.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):yt?t.texSubImage3D(s.TEXTURE_2D_ARRAY,ee,0,0,0,Te.width,Te.height,J.depth,Le,Oe,Te.data):t.texImage3D(s.TEXTURE_2D_ARRAY,ee,Re,Te.width,Te.height,J.depth,0,Le,Oe,Te.data)}else{yt&&B&&t.texStorage2D(s.TEXTURE_2D,be,Re,He[0].width,He[0].height);for(let ee=0,xe=He.length;ee<xe;ee++)Te=He[ee],A.format!==Qn?Le!==null?yt?t.compressedTexSubImage2D(s.TEXTURE_2D,ee,0,0,Te.width,Te.height,Le,Te.data):t.compressedTexImage2D(s.TEXTURE_2D,ee,Re,Te.width,Te.height,0,Te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):yt?t.texSubImage2D(s.TEXTURE_2D,ee,0,0,Te.width,Te.height,Le,Oe,Te.data):t.texImage2D(s.TEXTURE_2D,ee,Re,Te.width,Te.height,0,Le,Oe,Te.data)}else if(A.isDataArrayTexture)yt?(B&&t.texStorage3D(s.TEXTURE_2D_ARRAY,be,Re,J.width,J.height,J.depth),t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,Le,Oe,J.data)):t.texImage3D(s.TEXTURE_2D_ARRAY,0,Re,J.width,J.height,J.depth,0,Le,Oe,J.data);else if(A.isData3DTexture)yt?(B&&t.texStorage3D(s.TEXTURE_3D,be,Re,J.width,J.height,J.depth),t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,Le,Oe,J.data)):t.texImage3D(s.TEXTURE_3D,0,Re,J.width,J.height,J.depth,0,Le,Oe,J.data);else if(A.isFramebufferTexture){if(B)if(yt)t.texStorage2D(s.TEXTURE_2D,be,Re,J.width,J.height);else{let ee=J.width,xe=J.height;for(let Se=0;Se<be;Se++)t.texImage2D(s.TEXTURE_2D,Se,Re,ee,xe,0,Le,Oe,null),ee>>=1,xe>>=1}}else if(He.length>0&&we){yt&&B&&t.texStorage2D(s.TEXTURE_2D,be,Re,He[0].width,He[0].height);for(let ee=0,xe=He.length;ee<xe;ee++)Te=He[ee],yt?t.texSubImage2D(s.TEXTURE_2D,ee,0,0,Le,Oe,Te):t.texImage2D(s.TEXTURE_2D,ee,Re,Le,Oe,Te);A.generateMipmaps=!1}else yt?(B&&t.texStorage2D(s.TEXTURE_2D,be,Re,J.width,J.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,Le,Oe,J)):t.texImage2D(s.TEXTURE_2D,0,Re,Le,Oe,J);w(A,we)&&D(fe),ce.__version=U.version,A.onUpdate&&A.onUpdate(A)}R.__version=A.version}function St(R,A,Q){if(A.image.length!==6)return;const fe=Ye(R,A),pe=A.source;t.bindTexture(s.TEXTURE_CUBE_MAP,R.__webglTexture,s.TEXTURE0+Q);const U=n.get(pe);if(pe.version!==U.__version||fe===!0){t.activeTexture(s.TEXTURE0+Q),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,A.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,A.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.NONE);const ce=A.isCompressedTexture||A.image[0].isCompressedTexture,me=A.image[0]&&A.image[0].isDataTexture,J=[];for(let ee=0;ee<6;ee++)!ce&&!me?J[ee]=y(A.image[ee],!1,!0,c):J[ee]=me?A.image[ee].image:A.image[ee],J[ee]=Ut(A,J[ee]);const we=J[0],Le=T(we)||o,Oe=r.convert(A.format,A.colorSpace),Re=r.convert(A.type),Te=I(A.internalFormat,Oe,Re,A.colorSpace),He=o&&A.isVideoTexture!==!0,yt=U.__version===void 0||fe===!0;let B=b(A,we,Le);Ne(s.TEXTURE_CUBE_MAP,A,Le);let be;if(ce){He&&yt&&t.texStorage2D(s.TEXTURE_CUBE_MAP,B,Te,we.width,we.height);for(let ee=0;ee<6;ee++){be=J[ee].mipmaps;for(let xe=0;xe<be.length;xe++){const Se=be[xe];A.format!==Qn?Oe!==null?He?t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,xe,0,0,Se.width,Se.height,Oe,Se.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,xe,Te,Se.width,Se.height,0,Se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):He?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,xe,0,0,Se.width,Se.height,Oe,Re,Se.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,xe,Te,Se.width,Se.height,0,Oe,Re,Se.data)}}}else{be=A.mipmaps,He&&yt&&(be.length>0&&B++,t.texStorage2D(s.TEXTURE_CUBE_MAP,B,Te,J[0].width,J[0].height));for(let ee=0;ee<6;ee++)if(me){He?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,J[ee].width,J[ee].height,Oe,Re,J[ee].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,Te,J[ee].width,J[ee].height,0,Oe,Re,J[ee].data);for(let xe=0;xe<be.length;xe++){const dt=be[xe].image[ee].image;He?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,xe+1,0,0,dt.width,dt.height,Oe,Re,dt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,xe+1,Te,dt.width,dt.height,0,Oe,Re,dt.data)}}else{He?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,Oe,Re,J[ee]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,Te,Oe,Re,J[ee]);for(let xe=0;xe<be.length;xe++){const Se=be[xe];He?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,xe+1,0,0,Oe,Re,Se.image[ee]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,xe+1,Te,Oe,Re,Se.image[ee])}}}w(A,Le)&&D(s.TEXTURE_CUBE_MAP),U.__version=pe.version,A.onUpdate&&A.onUpdate(A)}R.__version=A.version}function Ke(R,A,Q,fe,pe){const U=r.convert(Q.format,Q.colorSpace),ce=r.convert(Q.type),me=I(Q.internalFormat,U,ce,Q.colorSpace);n.get(A).__hasExternalTextures||(pe===s.TEXTURE_3D||pe===s.TEXTURE_2D_ARRAY?t.texImage3D(pe,0,me,A.width,A.height,A.depth,0,U,ce,null):t.texImage2D(pe,0,me,A.width,A.height,0,U,ce,null)),t.bindFramebuffer(s.FRAMEBUFFER,R),ct(A)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,fe,pe,n.get(Q).__webglTexture,0,Ge(A)):(pe===s.TEXTURE_2D||pe>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&pe<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,fe,pe,n.get(Q).__webglTexture,0),t.bindFramebuffer(s.FRAMEBUFFER,null)}function q(R,A,Q){if(s.bindRenderbuffer(s.RENDERBUFFER,R),A.depthBuffer&&!A.stencilBuffer){let fe=s.DEPTH_COMPONENT16;if(Q||ct(A)){const pe=A.depthTexture;pe&&pe.isDepthTexture&&(pe.type===Wi?fe=s.DEPTH_COMPONENT32F:pe.type===ur&&(fe=s.DEPTH_COMPONENT24));const U=Ge(A);ct(A)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,U,fe,A.width,A.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,U,fe,A.width,A.height)}else s.renderbufferStorage(s.RENDERBUFFER,fe,A.width,A.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,R)}else if(A.depthBuffer&&A.stencilBuffer){const fe=Ge(A);Q&&ct(A)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,fe,s.DEPTH24_STENCIL8,A.width,A.height):ct(A)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,fe,s.DEPTH24_STENCIL8,A.width,A.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,A.width,A.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,R)}else{const fe=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let pe=0;pe<fe.length;pe++){const U=fe[pe],ce=r.convert(U.format,U.colorSpace),me=r.convert(U.type),J=I(U.internalFormat,ce,me,U.colorSpace),we=Ge(A);Q&&ct(A)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,we,J,A.width,A.height):ct(A)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,we,J,A.width,A.height):s.renderbufferStorage(s.RENDERBUFFER,J,A.width,A.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Lt(R,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,R),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(A.depthTexture).__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),ue(A.depthTexture,0);const fe=n.get(A.depthTexture).__webglTexture,pe=Ge(A);if(A.depthTexture.format===Gr)ct(A)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,fe,0,pe):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,fe,0);else if(A.depthTexture.format===$s)ct(A)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,fe,0,pe):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,fe,0);else throw new Error("Unknown depthTexture format")}function Ie(R){const A=n.get(R),Q=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!A.__autoAllocateDepthBuffer){if(Q)throw new Error("target.depthTexture not supported in Cube render targets");Lt(A.__webglFramebuffer,R)}else if(Q){A.__webglDepthbuffer=[];for(let fe=0;fe<6;fe++)t.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer[fe]),A.__webglDepthbuffer[fe]=s.createRenderbuffer(),q(A.__webglDepthbuffer[fe],R,!1)}else t.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer=s.createRenderbuffer(),q(A.__webglDepthbuffer,R,!1);t.bindFramebuffer(s.FRAMEBUFFER,null)}function Ve(R,A,Q){const fe=n.get(R);A!==void 0&&Ke(fe.__webglFramebuffer,R,R.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D),Q!==void 0&&Ie(R)}function Fe(R){const A=R.texture,Q=n.get(R),fe=n.get(A);R.addEventListener("dispose",ae),R.isWebGLMultipleRenderTargets!==!0&&(fe.__webglTexture===void 0&&(fe.__webglTexture=s.createTexture()),fe.__version=A.version,a.memory.textures++);const pe=R.isWebGLCubeRenderTarget===!0,U=R.isWebGLMultipleRenderTargets===!0,ce=T(R)||o;if(pe){Q.__webglFramebuffer=[];for(let me=0;me<6;me++)Q.__webglFramebuffer[me]=s.createFramebuffer()}else{if(Q.__webglFramebuffer=s.createFramebuffer(),U)if(i.drawBuffers){const me=R.texture;for(let J=0,we=me.length;J<we;J++){const Le=n.get(me[J]);Le.__webglTexture===void 0&&(Le.__webglTexture=s.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&R.samples>0&&ct(R)===!1){const me=U?A:[A];Q.__webglMultisampledFramebuffer=s.createFramebuffer(),Q.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,Q.__webglMultisampledFramebuffer);for(let J=0;J<me.length;J++){const we=me[J];Q.__webglColorRenderbuffer[J]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,Q.__webglColorRenderbuffer[J]);const Le=r.convert(we.format,we.colorSpace),Oe=r.convert(we.type),Re=I(we.internalFormat,Le,Oe,we.colorSpace,R.isXRRenderTarget===!0),Te=Ge(R);s.renderbufferStorageMultisample(s.RENDERBUFFER,Te,Re,R.width,R.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+J,s.RENDERBUFFER,Q.__webglColorRenderbuffer[J])}s.bindRenderbuffer(s.RENDERBUFFER,null),R.depthBuffer&&(Q.__webglDepthRenderbuffer=s.createRenderbuffer(),q(Q.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(pe){t.bindTexture(s.TEXTURE_CUBE_MAP,fe.__webglTexture),Ne(s.TEXTURE_CUBE_MAP,A,ce);for(let me=0;me<6;me++)Ke(Q.__webglFramebuffer[me],R,A,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+me);w(A,ce)&&D(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(U){const me=R.texture;for(let J=0,we=me.length;J<we;J++){const Le=me[J],Oe=n.get(Le);t.bindTexture(s.TEXTURE_2D,Oe.__webglTexture),Ne(s.TEXTURE_2D,Le,ce),Ke(Q.__webglFramebuffer,R,Le,s.COLOR_ATTACHMENT0+J,s.TEXTURE_2D),w(Le,ce)&&D(s.TEXTURE_2D)}t.unbindTexture()}else{let me=s.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(o?me=R.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(me,fe.__webglTexture),Ne(me,A,ce),Ke(Q.__webglFramebuffer,R,A,s.COLOR_ATTACHMENT0,me),w(A,ce)&&D(me),t.unbindTexture()}R.depthBuffer&&Ie(R)}function Ze(R){const A=T(R)||o,Q=R.isWebGLMultipleRenderTargets===!0?R.texture:[R.texture];for(let fe=0,pe=Q.length;fe<pe;fe++){const U=Q[fe];if(w(U,A)){const ce=R.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,me=n.get(U).__webglTexture;t.bindTexture(ce,me),D(ce),t.unbindTexture()}}}function Ue(R){if(o&&R.samples>0&&ct(R)===!1){const A=R.isWebGLMultipleRenderTargets?R.texture:[R.texture],Q=R.width,fe=R.height;let pe=s.COLOR_BUFFER_BIT;const U=[],ce=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,me=n.get(R),J=R.isWebGLMultipleRenderTargets===!0;if(J)for(let we=0;we<A.length;we++)t.bindFramebuffer(s.FRAMEBUFFER,me.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+we,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,me.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+we,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,me.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,me.__webglFramebuffer);for(let we=0;we<A.length;we++){U.push(s.COLOR_ATTACHMENT0+we),R.depthBuffer&&U.push(ce);const Le=me.__ignoreDepthValues!==void 0?me.__ignoreDepthValues:!1;if(Le===!1&&(R.depthBuffer&&(pe|=s.DEPTH_BUFFER_BIT),R.stencilBuffer&&(pe|=s.STENCIL_BUFFER_BIT)),J&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,me.__webglColorRenderbuffer[we]),Le===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[ce]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[ce])),J){const Oe=n.get(A[we]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Oe,0)}s.blitFramebuffer(0,0,Q,fe,0,0,Q,fe,pe,s.NEAREST),d&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,U)}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),J)for(let we=0;we<A.length;we++){t.bindFramebuffer(s.FRAMEBUFFER,me.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+we,s.RENDERBUFFER,me.__webglColorRenderbuffer[we]);const Le=n.get(A[we]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,me.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+we,s.TEXTURE_2D,Le,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,me.__webglMultisampledFramebuffer)}}function Ge(R){return Math.min(h,R.samples)}function ct(R){const A=n.get(R);return o&&R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function Dt(R){const A=a.render.frame;v.get(R)!==A&&(v.set(R,A),R.update())}function Ut(R,A){const Q=R.colorSpace,fe=R.format,pe=R.type;return R.isCompressedTexture===!0||R.format===kc||Q!==Ei&&Q!==Wr&&(Q===qe?o===!1?e.has("EXT_sRGB")===!0&&fe===Qn?(R.format=kc,R.minFilter=Dn,R.generateMipmaps=!1):A=Cp.sRGBToLinear(A):(fe!==Qn||pe!==gr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Q)),A}this.allocateTextureUnit=te,this.resetTextureUnits=K,this.setTexture2D=ue,this.setTexture2DArray=ye,this.setTexture3D=Z,this.setTextureCube=he,this.rebindTextures=Ve,this.setupRenderTarget=Fe,this.updateRenderTargetMipmap=Ze,this.updateMultisampleRenderTarget=Ue,this.setupDepthRenderbuffer=Ie,this.setupFrameBufferTexture=Ke,this.useMultisampledRTT=ct}function wE(s,e,t){const n=t.isWebGL2;function i(r,a=Wr){let o;if(r===gr)return s.UNSIGNED_BYTE;if(r===vp)return s.UNSIGNED_SHORT_4_4_4_4;if(r===xp)return s.UNSIGNED_SHORT_5_5_5_1;if(r===Kv)return s.BYTE;if(r===Zv)return s.SHORT;if(r===uu)return s.UNSIGNED_SHORT;if(r===_p)return s.INT;if(r===ur)return s.UNSIGNED_INT;if(r===Wi)return s.FLOAT;if(r===Oa)return n?s.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===Jv)return s.ALPHA;if(r===Qn)return s.RGBA;if(r===Qv)return s.LUMINANCE;if(r===ex)return s.LUMINANCE_ALPHA;if(r===Gr)return s.DEPTH_COMPONENT;if(r===$s)return s.DEPTH_STENCIL;if(r===kc)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===tx)return s.RED;if(r===yp)return s.RED_INTEGER;if(r===nx)return s.RG;if(r===Mp)return s.RG_INTEGER;if(r===bp)return s.RGBA_INTEGER;if(r===zl||r===Hl||r===Gl||r===Vl)if(a===qe)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===zl)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Hl)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Gl)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Vl)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===zl)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Hl)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Gl)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Vl)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===ef||r===tf||r===nf||r===rf)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===ef)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===tf)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===nf)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===rf)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===ix)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===sf||r===af)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(r===sf)return a===qe?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===af)return a===qe?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===of||r===lf||r===cf||r===uf||r===hf||r===ff||r===df||r===pf||r===mf||r===gf||r===_f||r===vf||r===xf||r===yf)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(r===of)return a===qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===lf)return a===qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===cf)return a===qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===uf)return a===qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===hf)return a===qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===ff)return a===qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===df)return a===qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===pf)return a===qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===mf)return a===qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===gf)return a===qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===_f)return a===qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===vf)return a===qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===xf)return a===qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===yf)return a===qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Wl)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(r===Wl)return a===qe?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(r===rx||r===Mf||r===bf||r===Sf)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(r===Wl)return o.COMPRESSED_RED_RGTC1_EXT;if(r===Mf)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===bf)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Sf)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Hr?n?s.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):s[r]!==void 0?s[r]:null}return{convert:i}}class RE extends Cn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class hr extends Ht{constructor(){super(),this.isGroup=!0,this.type="Group"}}const CE={type:"move"};class dc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new hr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new hr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new hr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const g of e.hand.values()){const m=t.getJointPose(g,n),p=this._getHandJoint(c,g);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,v=.005;c.inputState.pinching&&f>d+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(CE)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new hr;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class LE extends gn{constructor(e,t,n,i,r,a,o,l,c,u){if(u=u!==void 0?u:Gr,u!==Gr&&u!==$s)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Gr&&(n=ur),n===void 0&&u===$s&&(n=Hr),super(null,i,r,a,o,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:on,this.minFilter=l!==void 0?l:on,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class PE extends Qr{constructor(e,t){super();const n=this;let i=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,f=null,d=null,v=null;const g=t.getContextAttributes();let m=null,p=null;const S=[],y=[];let T=null;const E=new Cn;E.layers.enable(1),E.viewport=new Ct;const w=new Cn;w.layers.enable(2),w.viewport=new Ct;const D=[E,w],I=new RE;I.layers.enable(1),I.layers.enable(2);let b=null,P=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getCamera=function(){},this.setUserCamera=function(Z){T=Z},this.getController=function(Z){let he=S[Z];return he===void 0&&(he=new dc,S[Z]=he),he.getTargetRaySpace()},this.getControllerGrip=function(Z){let he=S[Z];return he===void 0&&(he=new dc,S[Z]=he),he.getGripSpace()},this.getHand=function(Z){let he=S[Z];return he===void 0&&(he=new dc,S[Z]=he),he.getHandSpace()};function $(Z){const he=y.indexOf(Z.inputSource);if(he===-1)return;const le=S[he];le!==void 0&&(le.update(Z.inputSource,Z.frame,c||a),le.dispatchEvent({type:Z.type,data:Z.inputSource}))}function ae(){i.removeEventListener("select",$),i.removeEventListener("selectstart",$),i.removeEventListener("selectend",$),i.removeEventListener("squeeze",$),i.removeEventListener("squeezestart",$),i.removeEventListener("squeezeend",$),i.removeEventListener("end",ae),i.removeEventListener("inputsourceschange",z);for(let Z=0;Z<S.length;Z++){const he=y[Z];he!==null&&(y[Z]=null,S[Z].disconnect(he))}b=null,P=null,e.setRenderTarget(m),d=null,f=null,h=null,i=null,p=null,ye.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h},this.getFrame=function(){return v},this.getSession=function(){return i},this.setSession=async function(Z){if(i=Z,i!==null){if(m=e.getRenderTarget(),i.addEventListener("select",$),i.addEventListener("selectstart",$),i.addEventListener("selectend",$),i.addEventListener("squeeze",$),i.addEventListener("squeezestart",$),i.addEventListener("squeezeend",$),i.addEventListener("end",ae),i.addEventListener("inputsourceschange",z),g.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const he={antialias:i.renderState.layers===void 0?g.antialias:!0,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(i,t,he),i.updateRenderState({baseLayer:d}),p=new jr(d.framebufferWidth,d.framebufferHeight,{format:Qn,type:gr,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let he=null,le=null,ve=null;g.depth&&(ve=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,he=g.stencil?$s:Gr,le=g.stencil?Hr:ur);const Ae={colorFormat:t.RGBA8,depthFormat:ve,scaleFactor:r};h=new XRWebGLBinding(i,t),f=h.createProjectionLayer(Ae),i.updateRenderState({layers:[f]}),p=new jr(f.textureWidth,f.textureHeight,{format:Qn,type:gr,depthTexture:new LE(f.textureWidth,f.textureHeight,le,void 0,void 0,void 0,void 0,void 0,void 0,he),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0});const Ne=e.properties.get(p);Ne.__ignoreDepthValues=f.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),ye.setContext(i),ye.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function z(Z){for(let he=0;he<Z.removed.length;he++){const le=Z.removed[he],ve=y.indexOf(le);ve>=0&&(y[ve]=null,S[ve].disconnect(le))}for(let he=0;he<Z.added.length;he++){const le=Z.added[he];let ve=y.indexOf(le);if(ve===-1){for(let Ne=0;Ne<S.length;Ne++)if(Ne>=y.length){y.push(le),ve=Ne;break}else if(y[Ne]===null){y[Ne]=le,ve=Ne;break}if(ve===-1)break}const Ae=S[ve];Ae&&Ae.connect(le)}}const V=new k,H=new k;function se(Z,he,le){V.setFromMatrixPosition(he.matrixWorld),H.setFromMatrixPosition(le.matrixWorld);const ve=V.distanceTo(H),Ae=he.projectionMatrix.elements,Ne=le.projectionMatrix.elements,Ye=Ae[14]/(Ae[10]-1),Be=Ae[14]/(Ae[10]+1),St=(Ae[9]+1)/Ae[5],Ke=(Ae[9]-1)/Ae[5],q=(Ae[8]-1)/Ae[0],Lt=(Ne[8]+1)/Ne[0],Ie=Ye*q,Ve=Ye*Lt,Fe=ve/(-q+Lt),Ze=Fe*-q;he.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(Ze),Z.translateZ(Fe),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert();const Ue=Ye+Fe,Ge=Be+Fe,ct=Ie-Ze,Dt=Ve+(ve-Ze),Ut=St*Be/Ge*Ue,R=Ke*Be/Ge*Ue;Z.projectionMatrix.makePerspective(ct,Dt,Ut,R,Ue,Ge),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}function K(Z,he){he===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(he.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCameraXR=function(Z){if(i===null)return Z;T&&(Z=T),I.near=w.near=E.near=Z.near,I.far=w.far=E.far=Z.far,(b!==I.near||P!==I.far)&&(i.updateRenderState({depthNear:I.near,depthFar:I.far}),b=I.near,P=I.far);const he=Z.parent,le=I.cameras;K(I,he);for(let ve=0;ve<le.length;ve++)K(le[ve],he);return le.length===2?se(I,E,w):I.projectionMatrix.copy(E.projectionMatrix),T&&te(I,he),I};function te(Z,he){const le=T;he===null?le.matrix.copy(Z.matrixWorld):(le.matrix.copy(he.matrixWorld),le.matrix.invert(),le.matrix.multiply(Z.matrixWorld)),le.matrix.decompose(le.position,le.quaternion,le.scale),le.updateMatrixWorld(!0);const ve=le.children;for(let Ae=0,Ne=ve.length;Ae<Ne;Ae++)ve[Ae].updateMatrixWorld(!0);le.projectionMatrix.copy(Z.projectionMatrix),le.projectionMatrixInverse.copy(Z.projectionMatrixInverse),le.isPerspectiveCamera&&(le.fov=js*2*Math.atan(1/le.projectionMatrix.elements[5]),le.zoom=1)}this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(Z){l=Z,f!==null&&(f.fixedFoveation=Z),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Z)};let oe=null;function ue(Z,he){if(u=he.getViewerPose(c||a),v=he,u!==null){const le=u.views;d!==null&&(e.setRenderTargetFramebuffer(p,d.framebuffer),e.setRenderTarget(p));let ve=!1;le.length!==I.cameras.length&&(I.cameras.length=0,ve=!0);for(let Ae=0;Ae<le.length;Ae++){const Ne=le[Ae];let Ye=null;if(d!==null)Ye=d.getViewport(Ne);else{const St=h.getViewSubImage(f,Ne);Ye=St.viewport,Ae===0&&(e.setRenderTargetTextures(p,St.colorTexture,f.ignoreDepthValues?void 0:St.depthStencilTexture),e.setRenderTarget(p))}let Be=D[Ae];Be===void 0&&(Be=new Cn,Be.layers.enable(Ae),Be.viewport=new Ct,D[Ae]=Be),Be.matrix.fromArray(Ne.transform.matrix),Be.matrix.decompose(Be.position,Be.quaternion,Be.scale),Be.projectionMatrix.fromArray(Ne.projectionMatrix),Be.projectionMatrixInverse.copy(Be.projectionMatrix).invert(),Be.viewport.set(Ye.x,Ye.y,Ye.width,Ye.height),Ae===0&&(I.matrix.copy(Be.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale)),ve===!0&&I.cameras.push(Be)}}for(let le=0;le<S.length;le++){const ve=y[le],Ae=S[le];ve!==null&&Ae!==void 0&&Ae.update(ve,he,c||a)}oe&&oe(Z,he),he.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:he}),v=null}const ye=new Fp;ye.setAnimationLoop(ue),this.setAnimationLoop=function(Z){oe=Z},this.dispose=function(){}}}function DE(s,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Np(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,S,y,T){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),h(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,T)):p.isMeshMatcapMaterial?(r(m,p),v(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),g(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,S,y):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Un&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Un&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const S=e.get(p).envMap;if(S&&(m.envMap.value=S,m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;const y=s.useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*y,t(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,S,y){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*S,m.scale.value=y*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),e.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,S){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Un&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,p){p.matcap&&(m.matcap.value=p.matcap)}function g(m,p){const S=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function IE(s,e,t,n){let i={},r={},a=[];const o=t.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(S,y){const T=y.program;n.uniformBlockBinding(S,T)}function c(S,y){let T=i[S.id];T===void 0&&(v(S),T=u(S),i[S.id]=T,S.addEventListener("dispose",m));const E=y.program;n.updateUBOMapping(S,E);const w=e.render.frame;r[S.id]!==w&&(f(S),r[S.id]=w)}function u(S){const y=h();S.__bindingPointIndex=y;const T=s.createBuffer(),E=S.__size,w=S.usage;return s.bindBuffer(s.UNIFORM_BUFFER,T),s.bufferData(s.UNIFORM_BUFFER,E,w),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,y,T),T}function h(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(S){const y=i[S.id],T=S.uniforms,E=S.__cache;s.bindBuffer(s.UNIFORM_BUFFER,y);for(let w=0,D=T.length;w<D;w++){const I=T[w];if(d(I,w,E)===!0){const b=I.__offset,P=Array.isArray(I.value)?I.value:[I.value];let $=0;for(let ae=0;ae<P.length;ae++){const z=P[ae],V=g(z);typeof z=="number"?(I.__data[0]=z,s.bufferSubData(s.UNIFORM_BUFFER,b+$,I.__data)):z.isMatrix3?(I.__data[0]=z.elements[0],I.__data[1]=z.elements[1],I.__data[2]=z.elements[2],I.__data[3]=z.elements[0],I.__data[4]=z.elements[3],I.__data[5]=z.elements[4],I.__data[6]=z.elements[5],I.__data[7]=z.elements[0],I.__data[8]=z.elements[6],I.__data[9]=z.elements[7],I.__data[10]=z.elements[8],I.__data[11]=z.elements[0]):(z.toArray(I.__data,$),$+=V.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,b,I.__data)}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function d(S,y,T){const E=S.value;if(T[y]===void 0){if(typeof E=="number")T[y]=E;else{const w=Array.isArray(E)?E:[E],D=[];for(let I=0;I<w.length;I++)D.push(w[I].clone());T[y]=D}return!0}else if(typeof E=="number"){if(T[y]!==E)return T[y]=E,!0}else{const w=Array.isArray(T[y])?T[y]:[T[y]],D=Array.isArray(E)?E:[E];for(let I=0;I<w.length;I++){const b=w[I];if(b.equals(D[I])===!1)return b.copy(D[I]),!0}}return!1}function v(S){const y=S.uniforms;let T=0;const E=16;let w=0;for(let D=0,I=y.length;D<I;D++){const b=y[D],P={boundary:0,storage:0},$=Array.isArray(b.value)?b.value:[b.value];for(let ae=0,z=$.length;ae<z;ae++){const V=$[ae],H=g(V);P.boundary+=H.boundary,P.storage+=H.storage}if(b.__data=new Float32Array(P.storage/Float32Array.BYTES_PER_ELEMENT),b.__offset=T,D>0){w=T%E;const ae=E-w;w!==0&&ae-P.boundary<0&&(T+=E-w,b.__offset=T)}T+=P.storage}return w=T%E,w>0&&(T+=E-w),S.__size=T,S.__cache={},this}function g(S){const y={boundary:0,storage:0};return typeof S=="number"?(y.boundary=4,y.storage=4):S.isVector2?(y.boundary=8,y.storage=8):S.isVector3||S.isColor?(y.boundary=16,y.storage=12):S.isVector4?(y.boundary=16,y.storage=16):S.isMatrix3?(y.boundary=48,y.storage=48):S.isMatrix4?(y.boundary=64,y.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),y}function m(S){const y=S.target;y.removeEventListener("dispose",m);const T=a.indexOf(y.__bindingPointIndex);a.splice(T,1),s.deleteBuffer(i[y.id]),delete i[y.id],delete r[y.id]}function p(){for(const S in i)s.deleteBuffer(i[S]);a=[],i={},r={}}return{bind:l,update:c,dispose:p}}function UE(){const s=Ba("canvas");return s.style.display="block",s}class Gc{constructor(e={}){const{canvas:t=UE(),context:n=null,depth:i=!0,stencil:r=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let f;n!==null?f=n.getContextAttributes().alpha:f=a;const d=new Uint32Array(4),v=new Int32Array(4);let g=null,m=null;const p=[],S=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=qe,this.useLegacyLights=!0,this.toneMapping=$i,this.toneMappingExposure=1;const y=this;let T=!1,E=0,w=0,D=null,I=-1,b=null;const P=new Ct,$=new Ct;let ae=null;const z=new nt(0);let V=0,H=t.width,se=t.height,K=1,te=null,oe=null;const ue=new Ct(0,0,H,se),ye=new Ct(0,0,H,se);let Z=!1;const he=new pu;let le=!1,ve=!1,Ae=null;const Ne=new lt,Ye=new $e,Be=new k,St={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ke(){return D===null?K:1}let q=n;function Lt(C,Y){for(let ne=0;ne<C.length;ne++){const W=C[ne],ie=t.getContext(W,Y);if(ie!==null)return ie}return null}try{const C={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${cu}`),t.addEventListener("webglcontextlost",be,!1),t.addEventListener("webglcontextrestored",ee,!1),t.addEventListener("webglcontextcreationerror",xe,!1),q===null){const Y=["webgl2","webgl","experimental-webgl"];if(y.isWebGL1Renderer===!0&&Y.shift(),q=Lt(Y,C),q===null)throw Lt(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}q instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),q.getShaderPrecisionFormat===void 0&&(q.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let Ie,Ve,Fe,Ze,Ue,Ge,ct,Dt,Ut,R,A,Q,fe,pe,U,ce,me,J,we,Le,Oe,Re,Te,He;function yt(){Ie=new Xb(q),Ve=new kb(q,Ie,e),Ie.init(Ve),Re=new wE(q,Ie,Ve),Fe=new TE(q,Ie,Ve),Ze=new Yb(q),Ue=new hE,Ge=new AE(q,Ie,Fe,Ue,Ve,Re,Ze),ct=new Hb(y),Dt=new Wb(y),Ut=new ay(q,Ve),Te=new Fb(q,Ie,Ut,Ve),R=new qb(q,Ut,Ze,Te),A=new Jb(q,R,Ut,Ze),we=new Zb(q,Ve,Ge),ce=new zb(Ue),Q=new uE(y,ct,Dt,Ie,Ve,Te,ce),fe=new DE(y,Ue),pe=new dE,U=new xE(Ie,Ve),J=new Ob(y,ct,Dt,Fe,A,f,l),me=new EE(y,A,Ve),He=new IE(q,Ze,Ve,Fe),Le=new Bb(q,Ie,Ze,Ve),Oe=new $b(q,Ie,Ze,Ve),Ze.programs=Q.programs,y.capabilities=Ve,y.extensions=Ie,y.properties=Ue,y.renderLists=pe,y.shadowMap=me,y.state=Fe,y.info=Ze}yt();const B=new PE(y,q);this.xr=B,this.getContext=function(){return q},this.getContextAttributes=function(){return q.getContextAttributes()},this.forceContextLoss=function(){const C=Ie.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=Ie.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(C){C!==void 0&&(K=C,this.setSize(H,se,!1))},this.getSize=function(C){return C.set(H,se)},this.setSize=function(C,Y,ne=!0){if(B.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=C,se=Y,t.width=Math.floor(C*K),t.height=Math.floor(Y*K),ne===!0&&(t.style.width=C+"px",t.style.height=Y+"px"),this.setViewport(0,0,C,Y)},this.getDrawingBufferSize=function(C){return C.set(H*K,se*K).floor()},this.setDrawingBufferSize=function(C,Y,ne){H=C,se=Y,K=ne,t.width=Math.floor(C*ne),t.height=Math.floor(Y*ne),this.setViewport(0,0,C,Y)},this.getCurrentViewport=function(C){return C.copy(P)},this.getViewport=function(C){return C.copy(ue)},this.setViewport=function(C,Y,ne,W){C.isVector4?ue.set(C.x,C.y,C.z,C.w):ue.set(C,Y,ne,W),Fe.viewport(P.copy(ue).multiplyScalar(K).floor())},this.getScissor=function(C){return C.copy(ye)},this.setScissor=function(C,Y,ne,W){C.isVector4?ye.set(C.x,C.y,C.z,C.w):ye.set(C,Y,ne,W),Fe.scissor($.copy(ye).multiplyScalar(K).floor())},this.getScissorTest=function(){return Z},this.setScissorTest=function(C){Fe.setScissorTest(Z=C)},this.setOpaqueSort=function(C){te=C},this.setTransparentSort=function(C){oe=C},this.getClearColor=function(C){return C.copy(J.getClearColor())},this.setClearColor=function(){J.setClearColor.apply(J,arguments)},this.getClearAlpha=function(){return J.getClearAlpha()},this.setClearAlpha=function(){J.setClearAlpha.apply(J,arguments)},this.clear=function(C=!0,Y=!0,ne=!0){let W=0;if(C){let ie=!1;if(D!==null){const Pe=D.texture.format;ie=Pe===bp||Pe===Mp||Pe===yp}if(ie){const Pe=D.texture.type,ke=Pe===gr||Pe===ur||Pe===uu||Pe===Hr||Pe===vp||Pe===xp,We=J.getClearColor(),Xe=J.getClearAlpha(),tt=We.r,je=We.g,Je=We.b,Et=Ue.get(D).__webglFramebuffer;ke?(d[0]=tt,d[1]=je,d[2]=Je,d[3]=Xe,q.clearBufferuiv(q.COLOR,Et,d)):(v[0]=tt,v[1]=je,v[2]=Je,v[3]=Xe,q.clearBufferiv(q.COLOR,Et,v))}else W|=q.COLOR_BUFFER_BIT}Y&&(W|=q.DEPTH_BUFFER_BIT),ne&&(W|=q.STENCIL_BUFFER_BIT),q.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",be,!1),t.removeEventListener("webglcontextrestored",ee,!1),t.removeEventListener("webglcontextcreationerror",xe,!1),pe.dispose(),U.dispose(),Ue.dispose(),ct.dispose(),Dt.dispose(),A.dispose(),Te.dispose(),He.dispose(),Q.dispose(),B.dispose(),B.removeEventListener("sessionstart",Ot),B.removeEventListener("sessionend",$n),Ae&&(Ae.dispose(),Ae=null),cn.stop()};function be(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function ee(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const C=Ze.autoReset,Y=me.enabled,ne=me.autoUpdate,W=me.needsUpdate,ie=me.type;yt(),Ze.autoReset=C,me.enabled=Y,me.autoUpdate=ne,me.needsUpdate=W,me.type=ie}function xe(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Se(C){const Y=C.target;Y.removeEventListener("dispose",Se),dt(Y)}function dt(C){Nt(C),Ue.remove(C)}function Nt(C){const Y=Ue.get(C).programs;Y!==void 0&&(Y.forEach(function(ne){Q.releaseProgram(ne)}),C.isShaderMaterial&&Q.releaseShaderCache(C))}this.renderBufferDirect=function(C,Y,ne,W,ie,Pe){Y===null&&(Y=St);const ke=ie.isMesh&&ie.matrixWorld.determinant()<0,We=hl(C,Y,ne,W,ie);Fe.setMaterial(W,ke);let Xe=ne.index,tt=1;W.wireframe===!0&&(Xe=R.getWireframeAttribute(ne),tt=2);const je=ne.drawRange,Je=ne.attributes.position;let Et=je.start*tt,Bt=(je.start+je.count)*tt;Pe!==null&&(Et=Math.max(Et,Pe.start*tt),Bt=Math.min(Bt,(Pe.start+Pe.count)*tt)),Xe!==null?(Et=Math.max(Et,0),Bt=Math.min(Bt,Xe.count)):Je!=null&&(Et=Math.max(Et,0),Bt=Math.min(Bt,Je.count));const kn=Bt-Et;if(kn<0||kn===1/0)return;Te.setup(ie,W,We,ne,Xe);let ri,Ft=Le;if(Xe!==null&&(ri=Ut.get(Xe),Ft=Oe,Ft.setIndex(ri)),ie.isMesh)W.wireframe===!0?(Fe.setLineWidth(W.wireframeLinewidth*Ke()),Ft.setMode(q.LINES)):Ft.setMode(q.TRIANGLES);else if(ie.isLine){let et=W.linewidth;et===void 0&&(et=1),Fe.setLineWidth(et*Ke()),ie.isLineSegments?Ft.setMode(q.LINES):ie.isLineLoop?Ft.setMode(q.LINE_LOOP):Ft.setMode(q.LINE_STRIP)}else ie.isPoints?Ft.setMode(q.POINTS):ie.isSprite&&Ft.setMode(q.TRIANGLES);if(ie.isInstancedMesh)Ft.renderInstances(Et,kn,ie.count);else if(ne.isInstancedBufferGeometry){const et=ne._maxInstanceCount!==void 0?ne._maxInstanceCount:1/0,Sr=Math.min(ne.instanceCount,et);Ft.renderInstances(Et,kn,Sr)}else Ft.render(Et,kn)},this.compile=function(C,Y){function ne(W,ie,Pe){W.transparent===!0&&W.side===yi&&W.forceSinglePass===!1?(W.side=Un,W.needsUpdate=!0,is(W,ie,Pe),W.side=ji,W.needsUpdate=!0,is(W,ie,Pe),W.side=yi):is(W,ie,Pe)}m=U.get(C),m.init(),S.push(m),C.traverseVisible(function(W){W.isLight&&W.layers.test(Y.layers)&&(m.pushLight(W),W.castShadow&&m.pushShadow(W))}),m.setupLights(y.useLegacyLights),C.traverse(function(W){const ie=W.material;if(ie)if(Array.isArray(ie))for(let Pe=0;Pe<ie.length;Pe++){const ke=ie[Pe];ne(ke,C,W)}else ne(ie,C,W)}),S.pop(),m=null};let Gt=null;function Li(C){Gt&&Gt(C)}function Ot(){cn.stop()}function $n(){cn.start()}const cn=new Fp;cn.setAnimationLoop(Li),typeof self<"u"&&cn.setContext(self),this.setAnimationLoop=function(C){Gt=C,B.setAnimationLoop(C),C===null?cn.stop():cn.start()},B.addEventListener("sessionstart",Ot),B.addEventListener("sessionend",$n),this.render=function(C,Y){if(Y!==void 0&&Y.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),B.enabled===!0&&B.isPresenting===!0&&(Y=B.updateCameraXR(Y)),C.isScene===!0&&C.onBeforeRender(y,C,Y,D),m=U.get(C,S.length),m.init(),S.push(m),Ne.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),he.setFromProjectionMatrix(Ne),ve=this.localClippingEnabled,le=ce.init(this.clippingPlanes,ve),g=pe.get(C,p.length),g.init(),p.push(g),Za(C,Y,0,y.sortObjects),g.finish(),y.sortObjects===!0&&g.sort(te,oe),le===!0&&ce.beginShadows();const ne=m.state.shadowsArray;if(me.render(ne,C,Y),le===!0&&ce.endShadows(),this.info.autoReset===!0&&this.info.reset(),this.info.render.frame++,J.render(g,C),m.setupLights(y.useLegacyLights),Y.isArrayCamera){const W=Y.cameras;for(let ie=0,Pe=W.length;ie<Pe;ie++){const ke=W[ie];ca(g,C,ke,ke.viewport)}}else ca(g,C,Y);D!==null&&(Ge.updateMultisampleRenderTarget(D),Ge.updateRenderTargetMipmap(D)),C.isScene===!0&&C.onAfterRender(y,C,Y),Te.resetDefaultState(),I=-1,b=null,S.pop(),S.length>0?m=S[S.length-1]:m=null,p.pop(),p.length>0?g=p[p.length-1]:g=null};function Za(C,Y,ne,W){if(C.visible===!1)return;if(C.layers.test(Y.layers)){if(C.isGroup)ne=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(Y);else if(C.isLight)m.pushLight(C),C.castShadow&&m.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||he.intersectsSprite(C)){W&&Be.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Ne);const ke=A.update(C),We=C.material;We.visible&&g.push(C,ke,We,ne,Be.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||he.intersectsObject(C))){C.isSkinnedMesh&&C.skeleton.frame!==Ze.render.frame&&(C.skeleton.update(),C.skeleton.frame=Ze.render.frame);const ke=A.update(C),We=C.material;if(W&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Be.copy(C.boundingSphere.center)):(ke.boundingSphere===null&&ke.computeBoundingSphere(),Be.copy(ke.boundingSphere.center)),Be.applyMatrix4(C.matrixWorld).applyMatrix4(Ne)),Array.isArray(We)){const Xe=ke.groups;for(let tt=0,je=Xe.length;tt<je;tt++){const Je=Xe[tt],Et=We[Je.materialIndex];Et&&Et.visible&&g.push(C,ke,Et,ne,Be.z,Je)}}else We.visible&&g.push(C,ke,We,ne,Be.z,null)}}const Pe=C.children;for(let ke=0,We=Pe.length;ke<We;ke++)Za(Pe[ke],Y,ne,W)}function ca(C,Y,ne,W){const ie=C.opaque,Pe=C.transmissive,ke=C.transparent;m.setupLightsView(ne),le===!0&&ce.setGlobalState(y.clippingPlanes,ne),Pe.length>0&&Ja(ie,Pe,Y,ne),W&&Fe.viewport(P.copy(W)),ie.length>0&&ns(ie,Y,ne),Pe.length>0&&ns(Pe,Y,ne),ke.length>0&&ns(ke,Y,ne),Fe.buffers.depth.setTest(!0),Fe.buffers.depth.setMask(!0),Fe.buffers.color.setMask(!0),Fe.setPolygonOffset(!1)}function Ja(C,Y,ne,W){const ie=Ve.isWebGL2;Ae===null&&(Ae=new jr(1,1,{generateMipmaps:!0,type:Ie.has("EXT_color_buffer_half_float")?Oa:gr,minFilter:Yr,samples:ie&&o===!0?4:0})),y.getDrawingBufferSize(Ye),ie?Ae.setSize(Ye.x,Ye.y):Ae.setSize($o(Ye.x),$o(Ye.y));const Pe=y.getRenderTarget();y.setRenderTarget(Ae),y.getClearColor(z),V=y.getClearAlpha(),V<1&&y.setClearColor(16777215,.5),y.clear();const ke=y.toneMapping;y.toneMapping=$i,ns(C,ne,W),Ge.updateMultisampleRenderTarget(Ae),Ge.updateRenderTargetMipmap(Ae);let We=!1;for(let Xe=0,tt=Y.length;Xe<tt;Xe++){const je=Y[Xe],Je=je.object,Et=je.geometry,Bt=je.material,kn=je.group;if(Bt.side===yi&&Je.layers.test(W.layers)){const ri=Bt.side;Bt.side=Un,Bt.needsUpdate=!0,Qa(Je,ne,W,Et,Bt,kn),Bt.side=ri,Bt.needsUpdate=!0,We=!0}}We===!0&&(Ge.updateMultisampleRenderTarget(Ae),Ge.updateRenderTargetMipmap(Ae)),y.setRenderTarget(Pe),y.setClearColor(z,V),y.toneMapping=ke}function ns(C,Y,ne){const W=Y.isScene===!0?Y.overrideMaterial:null;for(let ie=0,Pe=C.length;ie<Pe;ie++){const ke=C[ie],We=ke.object,Xe=ke.geometry,tt=W===null?ke.material:W,je=ke.group;We.layers.test(ne.layers)&&Qa(We,Y,ne,Xe,tt,je)}}function Qa(C,Y,ne,W,ie,Pe){C.onBeforeRender(y,Y,ne,W,ie,Pe),C.modelViewMatrix.multiplyMatrices(ne.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),ie.onBeforeRender(y,Y,ne,W,C,Pe),ie.transparent===!0&&ie.side===yi&&ie.forceSinglePass===!1?(ie.side=Un,ie.needsUpdate=!0,y.renderBufferDirect(ne,Y,W,ie,C,Pe),ie.side=ji,ie.needsUpdate=!0,y.renderBufferDirect(ne,Y,W,ie,C,Pe),ie.side=yi):y.renderBufferDirect(ne,Y,W,ie,C,Pe),C.onAfterRender(y,Y,ne,W,ie,Pe)}function is(C,Y,ne){Y.isScene!==!0&&(Y=St);const W=Ue.get(C),ie=m.state.lights,Pe=m.state.shadowsArray,ke=ie.state.version,We=Q.getParameters(C,ie.state,Pe,Y,ne),Xe=Q.getProgramCacheKey(We);let tt=W.programs;W.environment=C.isMeshStandardMaterial?Y.environment:null,W.fog=Y.fog,W.envMap=(C.isMeshStandardMaterial?Dt:ct).get(C.envMap||W.environment),tt===void 0&&(C.addEventListener("dispose",Se),tt=new Map,W.programs=tt);let je=tt.get(Xe);if(je!==void 0){if(W.currentProgram===je&&W.lightsStateVersion===ke)return br(C,We),je}else We.uniforms=Q.getUniforms(C),C.onBuild(ne,We,y),C.onBeforeCompile(We,y),je=Q.acquireProgram(We,Xe),tt.set(Xe,je),W.uniforms=We.uniforms;const Je=W.uniforms;(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Je.clippingPlanes=ce.uniform),br(C,We),W.needsLights=fl(C),W.lightsStateVersion=ke,W.needsLights&&(Je.ambientLightColor.value=ie.state.ambient,Je.lightProbe.value=ie.state.probe,Je.directionalLights.value=ie.state.directional,Je.directionalLightShadows.value=ie.state.directionalShadow,Je.spotLights.value=ie.state.spot,Je.spotLightShadows.value=ie.state.spotShadow,Je.rectAreaLights.value=ie.state.rectArea,Je.ltc_1.value=ie.state.rectAreaLTC1,Je.ltc_2.value=ie.state.rectAreaLTC2,Je.pointLights.value=ie.state.point,Je.pointLightShadows.value=ie.state.pointShadow,Je.hemisphereLights.value=ie.state.hemi,Je.directionalShadowMap.value=ie.state.directionalShadowMap,Je.directionalShadowMatrix.value=ie.state.directionalShadowMatrix,Je.spotShadowMap.value=ie.state.spotShadowMap,Je.spotLightMatrix.value=ie.state.spotLightMatrix,Je.spotLightMap.value=ie.state.spotLightMap,Je.pointShadowMap.value=ie.state.pointShadowMap,Je.pointShadowMatrix.value=ie.state.pointShadowMatrix);const Et=je.getUniforms(),Bt=Ho.seqWithValue(Et.seq,Je);return W.currentProgram=je,W.uniformsList=Bt,je}function br(C,Y){const ne=Ue.get(C);ne.outputColorSpace=Y.outputColorSpace,ne.instancing=Y.instancing,ne.skinning=Y.skinning,ne.morphTargets=Y.morphTargets,ne.morphNormals=Y.morphNormals,ne.morphColors=Y.morphColors,ne.morphTargetsCount=Y.morphTargetsCount,ne.numClippingPlanes=Y.numClippingPlanes,ne.numIntersection=Y.numClipIntersection,ne.vertexAlphas=Y.vertexAlphas,ne.vertexTangents=Y.vertexTangents,ne.toneMapping=Y.toneMapping}function hl(C,Y,ne,W,ie){Y.isScene!==!0&&(Y=St),Ge.resetTextureUnits();const Pe=Y.fog,ke=W.isMeshStandardMaterial?Y.environment:null,We=D===null?y.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:Ei,Xe=(W.isMeshStandardMaterial?Dt:ct).get(W.envMap||ke),tt=W.vertexColors===!0&&!!ne.attributes.color&&ne.attributes.color.itemSize===4,je=!!ne.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Je=!!ne.morphAttributes.position,Et=!!ne.morphAttributes.normal,Bt=!!ne.morphAttributes.color,kn=W.toneMapped?y.toneMapping:$i,ri=ne.morphAttributes.position||ne.morphAttributes.normal||ne.morphAttributes.color,Ft=ri!==void 0?ri.length:0,et=Ue.get(W),Sr=m.state.lights;if(le===!0&&(ve===!0||C!==b)){const Tn=C===b&&W.id===I;ce.setState(W,C,Tn)}let It=!1;W.version===et.__version?(et.needsLights&&et.lightsStateVersion!==Sr.state.version||et.outputColorSpace!==We||ie.isInstancedMesh&&et.instancing===!1||!ie.isInstancedMesh&&et.instancing===!0||ie.isSkinnedMesh&&et.skinning===!1||!ie.isSkinnedMesh&&et.skinning===!0||et.envMap!==Xe||W.fog===!0&&et.fog!==Pe||et.numClippingPlanes!==void 0&&(et.numClippingPlanes!==ce.numPlanes||et.numIntersection!==ce.numIntersection)||et.vertexAlphas!==tt||et.vertexTangents!==je||et.morphTargets!==Je||et.morphNormals!==Et||et.morphColors!==Bt||et.toneMapping!==kn||Ve.isWebGL2===!0&&et.morphTargetsCount!==Ft)&&(It=!0):(It=!0,et.__version=W.version);let Pi=et.currentProgram;It===!0&&(Pi=is(W,Y,ie));let to=!1,Er=!1,ua=!1;const un=Pi.getUniforms(),gi=et.uniforms;if(Fe.useProgram(Pi.program)&&(to=!0,Er=!0,ua=!0),W.id!==I&&(I=W.id,Er=!0),to||b!==C){if(un.setValue(q,"projectionMatrix",C.projectionMatrix),Ve.logarithmicDepthBuffer&&un.setValue(q,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),b!==C&&(b=C,Er=!0,ua=!0),W.isShaderMaterial||W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshStandardMaterial||W.envMap){const Tn=un.map.cameraPosition;Tn!==void 0&&Tn.setValue(q,Be.setFromMatrixPosition(C.matrixWorld))}(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&un.setValue(q,"isOrthographic",C.isOrthographicCamera===!0),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial||W.isShadowMaterial||ie.isSkinnedMesh)&&un.setValue(q,"viewMatrix",C.matrixWorldInverse)}if(ie.isSkinnedMesh){un.setOptional(q,ie,"bindMatrix"),un.setOptional(q,ie,"bindMatrixInverse");const Tn=ie.skeleton;Tn&&(Ve.floatVertexTextures?(Tn.boneTexture===null&&Tn.computeBoneTexture(),un.setValue(q,"boneTexture",Tn.boneTexture,Ge),un.setValue(q,"boneTextureSize",Tn.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const rs=ne.morphAttributes;if((rs.position!==void 0||rs.normal!==void 0||rs.color!==void 0&&Ve.isWebGL2===!0)&&we.update(ie,ne,Pi),(Er||et.receiveShadow!==ie.receiveShadow)&&(et.receiveShadow=ie.receiveShadow,un.setValue(q,"receiveShadow",ie.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(gi.envMap.value=Xe,gi.flipEnvMap.value=Xe.isCubeTexture&&Xe.isRenderTargetTexture===!1?-1:1),Er&&(un.setValue(q,"toneMappingExposure",y.toneMappingExposure),et.needsLights&&eo(gi,ua),Pe&&W.fog===!0&&fe.refreshFogUniforms(gi,Pe),fe.refreshMaterialUniforms(gi,W,K,se,Ae),Ho.upload(q,et.uniformsList,gi,Ge)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Ho.upload(q,et.uniformsList,gi,Ge),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&un.setValue(q,"center",ie.center),un.setValue(q,"modelViewMatrix",ie.modelViewMatrix),un.setValue(q,"normalMatrix",ie.normalMatrix),un.setValue(q,"modelMatrix",ie.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const Tn=W.uniformsGroups;for(let ha=0,dl=Tn.length;ha<dl;ha++)if(Ve.isWebGL2){const no=Tn[ha];He.update(no,Pi),He.bind(no,Pi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Pi}function eo(C,Y){C.ambientLightColor.needsUpdate=Y,C.lightProbe.needsUpdate=Y,C.directionalLights.needsUpdate=Y,C.directionalLightShadows.needsUpdate=Y,C.pointLights.needsUpdate=Y,C.pointLightShadows.needsUpdate=Y,C.spotLights.needsUpdate=Y,C.spotLightShadows.needsUpdate=Y,C.rectAreaLights.needsUpdate=Y,C.hemisphereLights.needsUpdate=Y}function fl(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(C,Y,ne){Ue.get(C.texture).__webglTexture=Y,Ue.get(C.depthTexture).__webglTexture=ne;const W=Ue.get(C);W.__hasExternalTextures=!0,W.__hasExternalTextures&&(W.__autoAllocateDepthBuffer=ne===void 0,W.__autoAllocateDepthBuffer||Ie.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(C,Y){const ne=Ue.get(C);ne.__webglFramebuffer=Y,ne.__useDefaultFramebuffer=Y===void 0},this.setRenderTarget=function(C,Y=0,ne=0){D=C,E=Y,w=ne;let W=!0,ie=null,Pe=!1,ke=!1;if(C){const Xe=Ue.get(C);Xe.__useDefaultFramebuffer!==void 0?(Fe.bindFramebuffer(q.FRAMEBUFFER,null),W=!1):Xe.__webglFramebuffer===void 0?Ge.setupRenderTarget(C):Xe.__hasExternalTextures&&Ge.rebindTextures(C,Ue.get(C.texture).__webglTexture,Ue.get(C.depthTexture).__webglTexture);const tt=C.texture;(tt.isData3DTexture||tt.isDataArrayTexture||tt.isCompressedArrayTexture)&&(ke=!0);const je=Ue.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(ie=je[Y],Pe=!0):Ve.isWebGL2&&C.samples>0&&Ge.useMultisampledRTT(C)===!1?ie=Ue.get(C).__webglMultisampledFramebuffer:ie=je,P.copy(C.viewport),$.copy(C.scissor),ae=C.scissorTest}else P.copy(ue).multiplyScalar(K).floor(),$.copy(ye).multiplyScalar(K).floor(),ae=Z;if(Fe.bindFramebuffer(q.FRAMEBUFFER,ie)&&Ve.drawBuffers&&W&&Fe.drawBuffers(C,ie),Fe.viewport(P),Fe.scissor($),Fe.setScissorTest(ae),Pe){const Xe=Ue.get(C.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Xe.__webglTexture,ne)}else if(ke){const Xe=Ue.get(C.texture),tt=Y||0;q.framebufferTextureLayer(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,Xe.__webglTexture,ne||0,tt)}I=-1},this.readRenderTargetPixels=function(C,Y,ne,W,ie,Pe,ke){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let We=Ue.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&ke!==void 0&&(We=We[ke]),We){Fe.bindFramebuffer(q.FRAMEBUFFER,We);try{const Xe=C.texture,tt=Xe.format,je=Xe.type;if(tt!==Qn&&Re.convert(tt)!==q.getParameter(q.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Je=je===Oa&&(Ie.has("EXT_color_buffer_half_float")||Ve.isWebGL2&&Ie.has("EXT_color_buffer_float"));if(je!==gr&&Re.convert(je)!==q.getParameter(q.IMPLEMENTATION_COLOR_READ_TYPE)&&!(je===Wi&&(Ve.isWebGL2||Ie.has("OES_texture_float")||Ie.has("WEBGL_color_buffer_float")))&&!Je){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=C.width-W&&ne>=0&&ne<=C.height-ie&&q.readPixels(Y,ne,W,ie,Re.convert(tt),Re.convert(je),Pe)}finally{const Xe=D!==null?Ue.get(D).__webglFramebuffer:null;Fe.bindFramebuffer(q.FRAMEBUFFER,Xe)}}},this.copyFramebufferToTexture=function(C,Y,ne=0){const W=Math.pow(2,-ne),ie=Math.floor(Y.image.width*W),Pe=Math.floor(Y.image.height*W);Ge.setTexture2D(Y,0),q.copyTexSubImage2D(q.TEXTURE_2D,ne,0,0,C.x,C.y,ie,Pe),Fe.unbindTexture()},this.copyTextureToTexture=function(C,Y,ne,W=0){const ie=Y.image.width,Pe=Y.image.height,ke=Re.convert(ne.format),We=Re.convert(ne.type);Ge.setTexture2D(ne,0),q.pixelStorei(q.UNPACK_FLIP_Y_WEBGL,ne.flipY),q.pixelStorei(q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ne.premultiplyAlpha),q.pixelStorei(q.UNPACK_ALIGNMENT,ne.unpackAlignment),Y.isDataTexture?q.texSubImage2D(q.TEXTURE_2D,W,C.x,C.y,ie,Pe,ke,We,Y.image.data):Y.isCompressedTexture?q.compressedTexSubImage2D(q.TEXTURE_2D,W,C.x,C.y,Y.mipmaps[0].width,Y.mipmaps[0].height,ke,Y.mipmaps[0].data):q.texSubImage2D(q.TEXTURE_2D,W,C.x,C.y,ke,We,Y.image),W===0&&ne.generateMipmaps&&q.generateMipmap(q.TEXTURE_2D),Fe.unbindTexture()},this.copyTextureToTexture3D=function(C,Y,ne,W,ie=0){if(y.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Pe=C.max.x-C.min.x+1,ke=C.max.y-C.min.y+1,We=C.max.z-C.min.z+1,Xe=Re.convert(W.format),tt=Re.convert(W.type);let je;if(W.isData3DTexture)Ge.setTexture3D(W,0),je=q.TEXTURE_3D;else if(W.isDataArrayTexture)Ge.setTexture2DArray(W,0),je=q.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}q.pixelStorei(q.UNPACK_FLIP_Y_WEBGL,W.flipY),q.pixelStorei(q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),q.pixelStorei(q.UNPACK_ALIGNMENT,W.unpackAlignment);const Je=q.getParameter(q.UNPACK_ROW_LENGTH),Et=q.getParameter(q.UNPACK_IMAGE_HEIGHT),Bt=q.getParameter(q.UNPACK_SKIP_PIXELS),kn=q.getParameter(q.UNPACK_SKIP_ROWS),ri=q.getParameter(q.UNPACK_SKIP_IMAGES),Ft=ne.isCompressedTexture?ne.mipmaps[0]:ne.image;q.pixelStorei(q.UNPACK_ROW_LENGTH,Ft.width),q.pixelStorei(q.UNPACK_IMAGE_HEIGHT,Ft.height),q.pixelStorei(q.UNPACK_SKIP_PIXELS,C.min.x),q.pixelStorei(q.UNPACK_SKIP_ROWS,C.min.y),q.pixelStorei(q.UNPACK_SKIP_IMAGES,C.min.z),ne.isDataTexture||ne.isData3DTexture?q.texSubImage3D(je,ie,Y.x,Y.y,Y.z,Pe,ke,We,Xe,tt,Ft.data):ne.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),q.compressedTexSubImage3D(je,ie,Y.x,Y.y,Y.z,Pe,ke,We,Xe,Ft.data)):q.texSubImage3D(je,ie,Y.x,Y.y,Y.z,Pe,ke,We,Xe,tt,Ft),q.pixelStorei(q.UNPACK_ROW_LENGTH,Je),q.pixelStorei(q.UNPACK_IMAGE_HEIGHT,Et),q.pixelStorei(q.UNPACK_SKIP_PIXELS,Bt),q.pixelStorei(q.UNPACK_SKIP_ROWS,kn),q.pixelStorei(q.UNPACK_SKIP_IMAGES,ri),ie===0&&W.generateMipmaps&&q.generateMipmap(je),Fe.unbindTexture()},this.initTexture=function(C){C.isCubeTexture?Ge.setTextureCube(C,0):C.isData3DTexture?Ge.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?Ge.setTexture2DArray(C,0):Ge.setTexture2D(C,0),Fe.unbindTexture()},this.resetState=function(){E=0,w=0,D=null,Fe.reset(),Te.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Xi}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===qe?Vr:Ep}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Vr?qe:Ei}}class NE extends Gc{}NE.prototype.isWebGL1Renderer=!0;let fd=class extends Ht{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}};class OE{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Bc,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=di()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=di()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=di()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const An=new k;class vu{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)An.fromBufferAttribute(this,t),An.applyMatrix4(e),this.setXYZ(t,An.x,An.y,An.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)An.fromBufferAttribute(this,t),An.applyNormalMatrix(e),this.setXYZ(t,An.x,An.y,An.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)An.fromBufferAttribute(this,t),An.transformDirection(e),this.setXYZ(t,An.x,An.y,An.z);return this}setX(e,t){return this.normalized&&(t=wt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=wt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=wt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=wt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=qi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=qi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=qi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=qi(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=wt(t,this.array),n=wt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=wt(t,this.array),n=wt(n,this.array),i=wt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=wt(t,this.array),n=wt(n,this.array),i=wt(i,this.array),r=wt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new Ln(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new vu(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const dd=new k,pd=new Ct,md=new Ct,FE=new k,gd=new lt,Ps=new k,pc=new wi,_d=new lt,mc=new $a;class BE extends mn{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new lt,this.bindMatrixInverse=new lt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Ji),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)Ps.fromBufferAttribute(t,n),this.applyBoneTransform(n,Ps),this.boundingBox.expandByPoint(Ps)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new wi),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)Ps.fromBufferAttribute(t,n),this.applyBoneTransform(n,Ps),this.boundingSphere.expandByPoint(Ps)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),pc.copy(this.boundingSphere),pc.applyMatrix4(i),e.ray.intersectsSphere(pc)!==!1&&(_d.copy(i).invert(),mc.copy(e.ray).applyMatrix4(_d),!(this.boundingBox!==null&&mc.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,mc)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Ct,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;pd.fromBufferAttribute(i.attributes.skinIndex,e),md.fromBufferAttribute(i.attributes.skinWeight,e),dd.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const a=md.getComponent(r);if(a!==0){const o=pd.getComponent(r);gd.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(FE.copy(dd).applyMatrix4(gd),a)}}return t.applyMatrix4(this.bindMatrixInverse)}boneTransform(e,t){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(e,t)}}class Gp extends Ht{constructor(){super(),this.isBone=!0,this.type="Bone"}}class kE extends gn{constructor(e=null,t=1,n=1,i,r,a,o,l,c=on,u=on,h,f){super(null,a,o,l,c,u,i,r,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const vd=new lt,zE=new lt;class xu{constructor(e=[],t=[]){this.uuid=di(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.frame=-1,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new lt)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new lt;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,a=e.length;r<a;r++){const o=e[r]?e[r].matrixWorld:zE;vd.multiplyMatrices(o,t[r]),vd.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new xu(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=wp(e),e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new kE(t,e,e,Qn,Wi);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this.boneTextureSize=e,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let a=t[r];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),a=new Gp),this.bones.push(a),this.boneInverses.push(new lt().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const a=t[i];e.bones.push(a.uuid);const o=n[i];e.boneInverses.push(o.toArray())}return e}}class xd extends Ln{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Ds=new lt,yd=new lt,Do=[],Md=new Ji,HE=new lt,xa=new mn,ya=new wi;class GE extends mn{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new xd(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,HE)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Ji),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ds),Md.copy(e.boundingBox).applyMatrix4(Ds),this.boundingBox.union(Md)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new wi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ds),ya.copy(e.boundingSphere).applyMatrix4(Ds),this.boundingSphere.union(ya)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const n=this.matrixWorld,i=this.count;if(xa.geometry=this.geometry,xa.material=this.material,xa.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ya.copy(this.boundingSphere),ya.applyMatrix4(n),e.ray.intersectsSphere(ya)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Ds),yd.multiplyMatrices(n,Ds),xa.matrixWorld=yd,xa.raycast(e,Do);for(let a=0,o=Do.length;a<o;a++){const l=Do[a];l.instanceId=r,l.object=this,t.push(l)}Do.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new xd(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class Vp extends pi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new nt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const bd=new k,Sd=new k,Ed=new lt,gc=new $a,Io=new wi;class yu extends Ht{constructor(e=new Ri,t=new Vp){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)bd.fromBufferAttribute(t,i-1),Sd.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=bd.distanceTo(Sd);e.setAttribute("lineDistance",new Yi(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Io.copy(n.boundingSphere),Io.applyMatrix4(i),Io.radius+=r,e.ray.intersectsSphere(Io)===!1)return;Ed.copy(i).invert(),gc.copy(e.ray).applyMatrix4(Ed);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new k,u=new k,h=new k,f=new k,d=this.isLineSegments?2:1,v=n.index,m=n.attributes.position;if(v!==null){const p=Math.max(0,a.start),S=Math.min(v.count,a.start+a.count);for(let y=p,T=S-1;y<T;y+=d){const E=v.getX(y),w=v.getX(y+1);if(c.fromBufferAttribute(m,E),u.fromBufferAttribute(m,w),gc.distanceSqToSegment(c,u,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const I=e.ray.origin.distanceTo(f);I<e.near||I>e.far||t.push({distance:I,point:h.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}else{const p=Math.max(0,a.start),S=Math.min(m.count,a.start+a.count);for(let y=p,T=S-1;y<T;y+=d){if(c.fromBufferAttribute(m,y),u.fromBufferAttribute(m,y+1),gc.distanceSqToSegment(c,u,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const w=e.ray.origin.distanceTo(f);w<e.near||w>e.far||t.push({distance:w,point:h.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}const Td=new k,Ad=new k;class VE extends yu{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)Td.fromBufferAttribute(t,i),Ad.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Td.distanceTo(Ad);e.setAttribute("lineDistance",new Yi(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class WE extends yu{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Wp extends pi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new nt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const wd=new lt,Vc=new $a,Uo=new wi,No=new k;class XE extends Ht{constructor(e=new Ri,t=new Wp){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Uo.copy(n.boundingSphere),Uo.applyMatrix4(i),Uo.radius+=r,e.ray.intersectsSphere(Uo)===!1)return;wd.copy(i).invert(),Vc.copy(e.ray).applyMatrix4(wd);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,h=n.attributes.position;if(c!==null){const f=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);for(let v=f,g=d;v<g;v++){const m=c.getX(v);No.fromBufferAttribute(h,m),Rd(No,m,l,i,e,t,this)}}else{const f=Math.max(0,a.start),d=Math.min(h.count,a.start+a.count);for(let v=f,g=d;v<g;v++)No.fromBufferAttribute(h,v),Rd(No,v,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Rd(s,e,t,n,i,r,a){const o=Vc.distanceSqToPoint(s);if(o<t){const l=new k;Vc.closestPointToPoint(s,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,object:a})}}class Mu extends pi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new nt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new nt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Tp,this.normalScale=new $e(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class es extends Mu{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new $e(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return dn(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new nt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new nt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new nt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function or(s,e,t){return Xp(s)?new s.constructor(s.subarray(e,t!==void 0?t:s.length)):s.slice(e,t)}function Oo(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function Xp(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function qE(s){function e(i,r){return s[i]-s[r]}const t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Cd(s,e,t){const n=s.length,i=new s.constructor(n);for(let r=0,a=0;a!==n;++r){const o=t[r]*e;for(let l=0;l!==e;++l)i[a++]=s[o+l]}return i}function qp(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push.apply(t,a)),r=s[i++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=s[i++];while(r!==void 0)}class ja{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=t[++n],e<i)break e}a=t.length;break t}if(!(e>=r)){const o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){const o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let a=0;a!==i;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class $E extends ja{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ef,endingEnd:Ef}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,a=e+1,o=i[r],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case Tf:r=e,o=2*t-n;break;case Af:r=i.length-2,o=t+i[r]-i[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Tf:a=e,l=2*n-t;break;case Af:a=1,l=n+i[1]-i[0];break;default:a=e-1,l=t}const c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,d=this._weightNext,v=(n-t)/(i-t),g=v*v,m=g*v,p=-f*m+2*f*g-f*v,S=(1+f)*m+(-1.5-2*f)*g+(-.5+f)*v+1,y=(-1-d)*m+(1.5+d)*g+.5*v,T=d*m-d*g;for(let E=0;E!==o;++E)r[E]=p*a[u+E]+S*a[c+E]+y*a[l+E]+T*a[h+E];return r}}class YE extends ja{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=(n-t)/(i-t),h=1-u;for(let f=0;f!==o;++f)r[f]=a[c+f]*h+a[l+f]*u;return r}}class jE extends ja{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Ci{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Oo(t,this.TimeBufferType),this.values=Oo(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Oo(e.times,Array),values:Oo(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new jE(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new YE(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new $E(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Fa:t=this.InterpolantFactoryMethodDiscrete;break;case Ys:t=this.InterpolantFactoryMethodLinear;break;case Xl:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Fa;case this.InterpolantFactoryMethodLinear:return Ys;case this.InterpolantFactoryMethodSmooth:return Xl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let r=0,a=i-1;for(;r!==i&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);const o=this.getValueSize();this.times=or(n,r,a),this.values=or(this.values,r*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){const l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(i!==void 0&&Xp(i))for(let o=0,l=i.length;o!==l;++o){const c=i[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){const e=or(this.times),t=or(this.values),n=this.getValueSize(),i=this.getInterpolation()===Xl,r=e.length-1;let a=1;for(let o=1;o<r;++o){let l=!1;const c=e[o],u=e[o+1];if(c!==u&&(o!==1||c!==e[0]))if(i)l=!0;else{const h=o*n,f=h-n,d=h+n;for(let v=0;v!==n;++v){const g=t[h+v];if(g!==t[f+v]||g!==t[d+v]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];const h=o*n,f=a*n;for(let d=0;d!==n;++d)t[f+d]=t[h+d]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=or(e,0,a),this.values=or(t,0,a*n)):(this.times=e,this.values=t),this}clone(){const e=or(this.times,0),t=or(this.values,0),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}Ci.prototype.TimeBufferType=Float32Array;Ci.prototype.ValueBufferType=Float32Array;Ci.prototype.DefaultInterpolation=Ys;class aa extends Ci{}aa.prototype.ValueTypeName="bool";aa.prototype.ValueBufferType=Array;aa.prototype.DefaultInterpolation=Fa;aa.prototype.InterpolantFactoryMethodLinear=void 0;aa.prototype.InterpolantFactoryMethodSmooth=void 0;class $p extends Ci{}$p.prototype.ValueTypeName="color";class ka extends Ci{}ka.prototype.ValueTypeName="number";class KE extends ja{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(i-t);let c=e*o;for(let u=c+o;c!==u;c+=4)Ti.slerpFlat(r,0,a,c-o,a,c,l);return r}}class Zr extends Ci{InterpolantFactoryMethodLinear(e){return new KE(this.times,this.values,this.getValueSize(),e)}}Zr.prototype.ValueTypeName="quaternion";Zr.prototype.DefaultInterpolation=Ys;Zr.prototype.InterpolantFactoryMethodSmooth=void 0;class oa extends Ci{}oa.prototype.ValueTypeName="string";oa.prototype.ValueBufferType=Array;oa.prototype.DefaultInterpolation=Fa;oa.prototype.InterpolantFactoryMethodLinear=void 0;oa.prototype.InterpolantFactoryMethodSmooth=void 0;class za extends Ci{}za.prototype.ValueTypeName="vector";class ZE{constructor(e,t=-1,n,i=sx){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=di(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(QE(n[a]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,a=n.length;r!==a;++r)t.push(Ci.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,a=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);const u=qE(l);l=Cd(l,1,u),c=Cd(c,1,u),!i&&l[0]===0&&(l.push(r),c.push(c[0])),a.push(new ka(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){const c=e[o],u=c.name.match(r);if(u&&u.length>1){const h=u[1];let f=i[h];f||(i[h]=f=[]),f.push(c)}}const a=[];for(const o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,f,d,v,g){if(d.length!==0){const m=[],p=[];qp(d,m,p,v),m.length!==0&&g.push(new h(f,m,p))}},i=[],r=e.name||"default",a=e.fps||30,o=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let h=0;h<c.length;h++){const f=c[h].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const d={};let v;for(v=0;v<f.length;v++)if(f[v].morphTargets)for(let g=0;g<f[v].morphTargets.length;g++)d[f[v].morphTargets[g]]=-1;for(const g in d){const m=[],p=[];for(let S=0;S!==f[v].morphTargets.length;++S){const y=f[v];m.push(y.time),p.push(y.morphTarget===g?1:0)}i.push(new ka(".morphTargetInfluence["+g+"]",m,p))}l=d.length*a}else{const d=".bones["+t[h].name+"]";n(za,d+".position",f,"pos",i),n(Zr,d+".quaternion",f,"rot",i),n(za,d+".scale",f,"scl",i)}}return i.length===0?null:new this(r,l,i,o)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function JE(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ka;case"vector":case"vector2":case"vector3":case"vector4":return za;case"color":return $p;case"quaternion":return Zr;case"bool":case"boolean":return aa;case"string":return oa}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function QE(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=JE(s.type);if(s.times===void 0){const t=[],n=[];qp(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}const Zs={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class Yp{constructor(e,t,n){const i=this;let r=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){o++,r===!1&&i.onStart!==void 0&&i.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,i.onProgress!==void 0&&i.onProgress(u,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){const d=c[h],v=c[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return v}return null}}}const eT=new Yp;class la{constructor(e){this.manager=e!==void 0?e:eT,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}const zi={};class tT extends Error{constructor(e,t){super(e),this.response=t}}class jp extends la{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Zs.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(zi[e]!==void 0){zi[e].push({onLoad:t,onProgress:n,onError:i});return}zi[e]=[],zi[e].push({onLoad:t,onProgress:n,onError:i});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=zi[e],h=c.body.getReader(),f=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),d=f?parseInt(f):0,v=d!==0;let g=0;const m=new ReadableStream({start(p){S();function S(){h.read().then(({done:y,value:T})=>{if(y)p.close();else{g+=T.byteLength;const E=new ProgressEvent("progress",{lengthComputable:v,loaded:g,total:d});for(let w=0,D=u.length;w<D;w++){const I=u[w];I.onProgress&&I.onProgress(E)}p.enqueue(T),S()}})}}});return new Response(m)}else throw new tT(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return c.json();default:if(o===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(o),f=h&&h[1]?h[1].toLowerCase():void 0,d=new TextDecoder(f);return c.arrayBuffer().then(v=>d.decode(v))}}}).then(c=>{Zs.add(e,c);const u=zi[e];delete zi[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onLoad&&d.onLoad(c)}}).catch(c=>{const u=zi[e];if(u===void 0)throw this.manager.itemError(e),c;delete zi[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Kp extends la{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=Zs.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;const o=Ba("img");function l(){u(),Zs.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(h){u(),i&&i(h),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(e),o.src=e,o}}class nT extends la{constructor(e){super(e)}load(e,t,n,i){const r=new du;r.colorSpace=qe;const a=new Kp(this.manager);a.setCrossOrigin(this.crossOrigin),a.setPath(this.path);let o=0;function l(c){a.load(e[c],function(u){r.images[c]=u,o++,o===6&&(r.needsUpdate=!0,t&&t(r))},void 0,i)}for(let c=0;c<e.length;++c)l(c);return r}}class Zp extends la{constructor(e){super(e)}load(e,t,n,i){const r=new gn,a=new Kp(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class ol extends Ht{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new nt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const _c=new lt,Ld=new k,Pd=new k;class bu{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new $e(512,512),this.map=null,this.mapPass=null,this.matrix=new lt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new pu,this._frameExtents=new $e(1,1),this._viewportCount=1,this._viewports=[new Ct(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Ld.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ld),Pd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Pd),t.updateMatrixWorld(),_c.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(_c),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(_c)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class iT extends bu{constructor(){super(new Cn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=js*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class rT extends ol{constructor(e,t,n=0,i=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ht.DEFAULT_UP),this.updateMatrix(),this.target=new Ht,this.distance=n,this.angle=i,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new iT}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Dd=new lt,Ma=new k,vc=new k;class sT extends bu{constructor(){super(new Cn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new $e(4,2),this._viewportCount=6,this._viewports=[new Ct(2,1,1,1),new Ct(0,1,1,1),new Ct(3,1,1,1),new Ct(1,1,1,1),new Ct(3,0,1,1),new Ct(1,0,1,1)],this._cubeDirections=[new k(1,0,0),new k(-1,0,0),new k(0,0,1),new k(0,0,-1),new k(0,1,0),new k(0,-1,0)],this._cubeUps=[new k(0,1,0),new k(0,1,0),new k(0,1,0),new k(0,1,0),new k(0,0,1),new k(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Ma.setFromMatrixPosition(e.matrixWorld),n.position.copy(Ma),vc.copy(n.position),vc.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(vc),n.updateMatrixWorld(),i.makeTranslation(-Ma.x,-Ma.y,-Ma.z),Dd.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Dd)}}class aT extends ol{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new sT}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class oT extends bu{constructor(){super(new gu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Jp extends ol{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ht.DEFAULT_UP),this.updateMatrix(),this.target=new Ht,this.shadow=new oT}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class lT extends ol{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Wc{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class cT extends la{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=Zs.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){Zs.add(e,l),t&&t(l),r.manager.itemEnd(e)}).catch(function(l){i&&i(l),r.manager.itemError(e),r.manager.itemEnd(e)}),r.manager.itemStart(e)}}const Su="\\[\\]\\.:\\/",uT=new RegExp("["+Su+"]","g"),Eu="[^"+Su+"]",hT="[^"+Su.replace("\\.","")+"]",fT=/((?:WC+[\/:])*)/.source.replace("WC",Eu),dT=/(WCOD+)?/.source.replace("WCOD",hT),pT=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Eu),mT=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Eu),gT=new RegExp("^"+fT+dT+pT+mT+"$"),_T=["material","materials","bones","map"];class vT{constructor(e,t,n){const i=n||bt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class bt{constructor(e,t,n){this.path=t,this.parsedPath=n||bt.parseTrackName(t),this.node=bt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new bt.Composite(e,t,n):new bt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(uT,"")}static parseTrackName(e){const t=gT.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);_T.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let a=0;a<r.length;a++){const o=r[a];if(o.name===t||o.uuid===t)return o;const l=n(o.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=bt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const a=e[i];if(a===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}bt.Composite=vT;bt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};bt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};bt.prototype.GetterByBindingType=[bt.prototype._getValue_direct,bt.prototype._getValue_array,bt.prototype._getValue_arrayElement,bt.prototype._getValue_toArray];bt.prototype.SetterByBindingTypeAndVersioning=[[bt.prototype._setValue_direct,bt.prototype._setValue_direct_setNeedsUpdate,bt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[bt.prototype._setValue_array,bt.prototype._setValue_array_setNeedsUpdate,bt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[bt.prototype._setValue_arrayElement,bt.prototype._setValue_arrayElement_setNeedsUpdate,bt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[bt.prototype._setValue_fromArray,bt.prototype._setValue_fromArray_setNeedsUpdate,bt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class xT{constructor(e,t,n=0,i=1/0){this.ray=new $a(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new fu,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return Xc(e,this,n,t),n.sort(Id),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)Xc(e[i],this,n,t);return n.sort(Id),n}}function Id(s,e){return s.distance-e.distance}function Xc(s,e,t,n){if(s.layers.test(e.layers)&&s.raycast(e,t),n===!0){const i=s.children;for(let r=0,a=i.length;r<a;r++)Xc(i[r],e,t,!0)}}class Ud{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(dn(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:cu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=cu);function Nd(s,e){if(e===ax)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===Fc||e===Sp){let t=s.getIndex();if(t===null){const a=[],o=s.getAttribute("position");if(o!==void 0){for(let l=0;l<o.count;l++)a.push(l);s.setIndex(a),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const n=t.count-2,i=[];if(e===Fc)for(let a=1;a<=n;a++)i.push(t.getX(0)),i.push(t.getX(a)),i.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(i.push(t.getX(a)),i.push(t.getX(a+1)),i.push(t.getX(a+2))):(i.push(t.getX(a+2)),i.push(t.getX(a+1)),i.push(t.getX(a)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}class yT extends la{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new TT(t)}),this.register(function(t){return new DT(t)}),this.register(function(t){return new IT(t)}),this.register(function(t){return new UT(t)}),this.register(function(t){return new wT(t)}),this.register(function(t){return new RT(t)}),this.register(function(t){return new CT(t)}),this.register(function(t){return new LT(t)}),this.register(function(t){return new ET(t)}),this.register(function(t){return new PT(t)}),this.register(function(t){return new AT(t)}),this.register(function(t){return new bT(t)}),this.register(function(t){return new NT(t)}),this.register(function(t){return new OT(t)})}load(e,t,n,i){const r=this;let a;this.resourcePath!==""?a=this.resourcePath:this.path!==""?a=this.path:a=Wc.extractUrlBase(e),this.manager.itemStart(e);const o=function(c){i?i(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new jp(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,a,function(u){t(u),r.manager.itemEnd(e)},o)}catch(u){o(u)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r;const a={},o={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Qp){try{a[gt.KHR_BINARY_GLTF]=new FT(e)}catch(h){i&&i(h);return}r=JSON.parse(a[gt.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new KT(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const h=this.pluginCallbacks[u](c);o[h.name]=h,a[h.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){const h=r.extensionsUsed[u],f=r.extensionsRequired||[];switch(h){case gt.KHR_MATERIALS_UNLIT:a[h]=new ST;break;case gt.KHR_DRACO_MESH_COMPRESSION:a[h]=new BT(r,this.dracoLoader);break;case gt.KHR_TEXTURE_TRANSFORM:a[h]=new kT;break;case gt.KHR_MESH_QUANTIZATION:a[h]=new zT;break;default:f.indexOf(h)>=0&&o[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}}function MT(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}const gt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class bT{constructor(e){this.parser=e,this.name=gt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let c;const u=new nt(16777215);l.color!==void 0&&u.fromArray(l.color);const h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Jp(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new aT(u),c.distance=h;break;case"spot":c=new rT(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,cr(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return n._getNodeRef(t.cache,o,l)})}}class ST{constructor(){this.name=gt.KHR_MATERIALS_UNLIT}getMaterialType(){return kr}extendParams(e,t,n){const i=[];e.color=new nt(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const a=r.baseColorFactor;e.color.fromArray(a),e.opacity=a[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,qe))}return Promise.all(i)}}class ET{constructor(e){this.parser=e,this.name=gt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class TT{constructor(e){this.parser=e,this.name=gt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:es}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){const o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new $e(o,o)}return Promise.all(r)}}class AT{constructor(e){this.parser=e,this.name=gt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:es}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(r)}}class wT{constructor(e){this.parser=e,this.name=gt.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:es}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new nt(0,0,0),t.sheenRoughness=0,t.sheen=1;const a=i.extensions[this.name];return a.sheenColorFactor!==void 0&&t.sheenColor.fromArray(a.sheenColorFactor),a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",a.sheenColorTexture,qe)),a.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(r)}}class RT{constructor(e){this.parser=e,this.name=gt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:es}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(r)}}class CT{constructor(e){this.parser=e,this.name=gt.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:es}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;const o=a.attenuationColor||[1,1,1];return t.attenuationColor=new nt(o[0],o[1],o[2]),Promise.all(r)}}class LT{constructor(e){this.parser=e,this.name=gt.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:es}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class PT{constructor(e){this.parser=e,this.name=gt.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:es}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",a.specularTexture));const o=a.specularColorFactor||[1,1,1];return t.specularColor=new nt(o[0],o[1],o[2]),a.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",a.specularColorTexture,qe)),Promise.all(r)}}class DT{constructor(e){this.parser=e,this.name=gt.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const r=i.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}}class IT{constructor(e){this.parser=e,this.name=gt.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=i.images[a.source];let l=n.textureLoader;if(o.uri){const c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,a.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class UT{constructor(e){this.parser=e,this.name=gt.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=i.images[a.source];let l=n.textureLoader;if(o.uri){const c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,a.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class NT{constructor(e){this.name=gt.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){const l=i.byteOffset||0,c=i.byteLength||0,u=i.count,h=i.byteStride,f=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(u,h,f,i.mode,i.filter).then(function(d){return d.buffer}):a.ready.then(function(){const d=new ArrayBuffer(u*h);return a.decodeGltfBuffer(new Uint8Array(d),u,h,f,i.mode,i.filter),d})})}else return null}}class OT{constructor(e){this.name=gt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const c of i.primitives)if(c.mode!==Kn.TRIANGLES&&c.mode!==Kn.TRIANGLE_STRIP&&c.mode!==Kn.TRIANGLE_FAN&&c.mode!==void 0)return null;const a=n.extensions[this.name].attributes,o=[],l={};for(const c in a)o.push(this.parser.getDependency("accessor",a[c]).then(u=>(l[c]=u,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{const u=c.pop(),h=u.isGroup?u.children:[u],f=c[0].count,d=[];for(const v of h){const g=new lt,m=new k,p=new Ti,S=new k(1,1,1),y=new GE(v.geometry,v.material,f);for(let T=0;T<f;T++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,T),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,T),l.SCALE&&S.fromBufferAttribute(l.SCALE,T),y.setMatrixAt(T,g.compose(m,p,S));for(const T in l)T!=="TRANSLATION"&&T!=="ROTATION"&&T!=="SCALE"&&v.geometry.setAttribute(T,l[T]);Ht.prototype.copy.call(y,v),this.parser.assignFinalMaterial(y),d.push(y)}return u.isGroup?(u.clear(),u.add(...d),u):d[0]}))}}const Qp="glTF",ba=12,Od={JSON:1313821514,BIN:5130562};class FT{constructor(e){this.name=gt.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,ba),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Qp)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-ba,r=new DataView(e,ba);let a=0;for(;a<i;){const o=r.getUint32(a,!0);a+=4;const l=r.getUint32(a,!0);if(a+=4,l===Od.JSON){const c=new Uint8Array(e,ba+a,o);this.content=n.decode(c)}else if(l===Od.BIN){const c=ba+a;this.body=e.slice(c,c+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class BT{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=gt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},c={};for(const u in a){const h=qc[u]||u.toLowerCase();o[h]=a[u]}for(const u in e.attributes){const h=qc[u]||u.toLowerCase();if(a[u]!==void 0){const f=n.accessors[e.attributes[u]],d=zs[f.componentType];c[h]=d.name,l[h]=f.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h){i.decodeDracoFile(u,function(f){for(const d in f.attributes){const v=f.attributes[d],g=l[d];g!==void 0&&(v.normalized=g)}h(f)},o,c)})})}}class kT{constructor(){this.name=gt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class zT{constructor(){this.name=gt.KHR_MESH_QUANTIZATION}}class em extends ja{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let a=0;a!==i;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,u=i-t,h=(n-t)/u,f=h*h,d=f*h,v=e*c,g=v-c,m=-2*d+3*f,p=d-f,S=1-m,y=p-f+h;for(let T=0;T!==o;T++){const E=a[g+T+o],w=a[g+T+l]*u,D=a[v+T+o],I=a[v+T]*u;r[T]=S*E+y*w+m*D+p*I}return r}}const HT=new Ti;class GT extends em{interpolate_(e,t,n,i){const r=super.interpolate_(e,t,n,i);return HT.fromArray(r).normalize().toArray(r),r}}const Kn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},zs={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Fd={9728:on,9729:Dn,9984:Oc,9985:gp,9986:zo,9987:Yr},Bd={33071:Jn,33648:Xo,10497:qs},xc={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},qc={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},lr={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},VT={CUBICSPLINE:void 0,LINEAR:Ys,STEP:Fa},yc={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function WT(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new Mu({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:ji})),s.DefaultMaterial}function Sa(s,e,t){for(const n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function cr(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function XT(s,e,t){let n=!1,i=!1,r=!1;for(let c=0,u=e.length;c<u;c++){const h=e[c];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(i=!0),h.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);const a=[],o=[],l=[];for(let c=0,u=e.length;c<u;c++){const h=e[c];if(n){const f=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):s.attributes.position;a.push(f)}if(i){const f=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):s.attributes.normal;o.push(f)}if(r){const f=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):s.attributes.color;l.push(f)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){const u=c[0],h=c[1],f=c[2];return n&&(s.morphAttributes.position=u),i&&(s.morphAttributes.normal=h),r&&(s.morphAttributes.color=f),s.morphTargetsRelative=!0,s})}function qT(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function $T(s){const e=s.extensions&&s.extensions[gt.KHR_DRACO_MESH_COMPRESSION];let t;return e?t="draco:"+e.bufferView+":"+e.indices+":"+kd(e.attributes):t=s.indices+":"+kd(s.attributes)+":"+s.mode,t}function kd(s){let e="";const t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function $c(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function YT(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const jT=new lt;class KT{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new MT,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=!1,r=-1;typeof navigator<"u"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,i=navigator.userAgent.indexOf("Firefox")>-1,r=i?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||n||i&&r<98?this.textureLoader=new Zp(this.options.manager):this.textureLoader=new cT(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new jp(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){const o={scene:a[0][i.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:i.asset,parser:n,userData:{}};Sa(r,o,i),cr(o,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){const a=t[i].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let i=0,r=e.length;i<r;i++){const a=e[i];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),r=(a,o)=>{const l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(const[c,u]of a.children.entries())r(u,o.children[c])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[gt.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(r,a){n.load(Wc.resolveURL(t.uri,i.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const a=xc[i.type],o=zs[i.componentType],l=i.normalized===!0,c=new o(i.count*a);return Promise.resolve(new Ln(c,a,l))}const r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(a){const o=a[0],l=xc[i.type],c=zs[i.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,f=i.byteOffset||0,d=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,v=i.normalized===!0;let g,m;if(d&&d!==h){const p=Math.floor(f/d),S="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count;let y=t.cache.get(S);y||(g=new c(o,p*d,i.count*d/u),y=new OE(g,d/u),t.cache.add(S,y)),m=new vu(y,l,f%d/u,v)}else o===null?g=new c(i.count*l):g=new c(o,f,i.count*l),m=new Ln(g,l,v);if(i.sparse!==void 0){const p=xc.SCALAR,S=zs[i.sparse.indices.componentType],y=i.sparse.indices.byteOffset||0,T=i.sparse.values.byteOffset||0,E=new S(a[1],y,i.sparse.count*p),w=new c(a[2],T,i.sparse.count*l);o!==null&&(m=new Ln(m.array.slice(),m.itemSize,m.normalized));for(let D=0,I=E.length;D<I;D++){const b=E[D];if(m.setX(b,w[D*l]),l>=2&&m.setY(b,w[D*l+1]),l>=3&&m.setZ(b,w[D*l+2]),l>=4&&m.setW(b,w[D*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return m})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r];let o=this.textureLoader;if(a.uri){const l=n.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){const i=this,r=this.json,a=r.textures[e],o=r.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=a.name||o.name||"",u.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(u.name=o.uri);const f=(r.samplers||{})[a.sampler]||{};return u.magFilter=Fd[f.magFilter]||Dn,u.minFilter=Fd[f.minFilter]||Yr,u.wrapS=Bd[f.wrapS]||qs,u.wrapT=Bd[f.wrapT]||qs,i.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const a=i.images[e],o=self.URL||self.webkitURL;let l=a.uri||"",c=!1;if(a.bufferView!==void 0)l=n.getDependency("bufferView",a.bufferView).then(function(h){c=!0;const f=new Blob([h],{type:a.mimeType});return l=o.createObjectURL(f),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(h){return new Promise(function(f,d){let v=f;t.isImageBitmapLoader===!0&&(v=function(g){const m=new gn(g);m.needsUpdate=!0,f(m)}),t.load(Wc.resolveURL(h,r.path),v,void 0,d)})}).then(function(h){return c===!0&&o.revokeObjectURL(l),h.userData.mimeType=a.mimeType||YT(a.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,i){const r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[gt.KHR_TEXTURE_TRANSFORM]){const o=n.extensions!==void 0?n.extensions[gt.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const l=r.associations.get(a);a=r.extensions[gt.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,l)}}return i!==void 0&&(a.colorSpace=i),e[t]=a,a})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new Wp,pi.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(o,l)),n=l}else if(e.isLine){const o="LineBasicMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new Vp,pi.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(o,l)),n=l}if(i||r||a){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=n.clone(),r&&(l.vertexColors=!0),a&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return Mu}loadMaterial(e){const t=this,n=this.json,i=this.extensions,r=n.materials[e];let a;const o={},l=r.extensions||{},c=[];if(l[gt.KHR_MATERIALS_UNLIT]){const h=i[gt.KHR_MATERIALS_UNLIT];a=h.getMaterialType(),c.push(h.extendParams(o,r,t))}else{const h=r.pbrMetallicRoughness||{};if(o.color=new nt(1,1,1),o.opacity=1,Array.isArray(h.baseColorFactor)){const f=h.baseColorFactor;o.color.fromArray(f),o.opacity=f[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",h.baseColorTexture,qe)),o.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,o.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",h.metallicRoughnessTexture))),a=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=yi);const u=r.alphaMode||yc.OPAQUE;if(u===yc.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,u===yc.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==kr&&(c.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new $e(1,1),r.normalTexture.scale!==void 0)){const h=r.normalTexture.scale;o.normalScale.set(h,h)}return r.occlusionTexture!==void 0&&a!==kr&&(c.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==kr&&(o.emissive=new nt().fromArray(r.emissiveFactor)),r.emissiveTexture!==void 0&&a!==kr&&c.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,qe)),Promise.all(c).then(function(){const h=new a(o);return r.name&&(h.name=r.name),cr(h,r),t.associations.set(h,{materials:e}),r.extensions&&Sa(i,h,r),h})}createUniqueName(e){const t=bt.sanitizeNodeName(e||"");let n=t;for(let i=1;this.nodeNamesUsed[n];++i)n=t+"_"+i;return this.nodeNamesUsed[n]=!0,n}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function r(o){return n[gt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return zd(l,o,t)})}const a=[];for(let o=0,l=e.length;o<l;o++){const c=e[o],u=$T(c),h=i[u];if(h)a.push(h.promise);else{let f;c.extensions&&c.extensions[gt.KHR_DRACO_MESH_COMPRESSION]?f=r(c):f=zd(new Ri,c,t),i[u]={primitive:c,promise:f},a.push(f)}}return Promise.all(a)}loadMesh(e){const t=this,n=this.json,i=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let l=0,c=a.length;l<c;l++){const u=a[l].material===void 0?WT(this.cache):this.getDependency("material",a[l].material);o.push(u)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let d=0,v=u.length;d<v;d++){const g=u[d],m=a[d];let p;const S=c[d];if(m.mode===Kn.TRIANGLES||m.mode===Kn.TRIANGLE_STRIP||m.mode===Kn.TRIANGLE_FAN||m.mode===void 0)p=r.isSkinnedMesh===!0?new BE(g,S):new mn(g,S),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===Kn.TRIANGLE_STRIP?p.geometry=Nd(p.geometry,Sp):m.mode===Kn.TRIANGLE_FAN&&(p.geometry=Nd(p.geometry,Fc));else if(m.mode===Kn.LINES)p=new VE(g,S);else if(m.mode===Kn.LINE_STRIP)p=new yu(g,S);else if(m.mode===Kn.LINE_LOOP)p=new WE(g,S);else if(m.mode===Kn.POINTS)p=new XE(g,S);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&qT(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),cr(p,r),m.extensions&&Sa(i,p,m),t.assignFinalMaterial(p),h.push(p)}for(let d=0,v=h.length;d<v;d++)t.associations.set(h[d],{meshes:e,primitives:d});if(h.length===1)return h[0];const f=new hr;t.associations.set(f,{meshes:e});for(let d=0,v=h.length;d<v;d++)f.add(h[d]);return f})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Cn(Dx.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new gu(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),cr(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const r=i.pop(),a=i,o=[],l=[];for(let c=0,u=a.length;c<u;c++){const h=a[c];if(h){o.push(h);const f=new lt;r!==null&&f.fromArray(r.array,c*16),l.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new xu(o,l)})}loadAnimation(e){const n=this.json.animations[e],i=n.name?n.name:"animation_"+e,r=[],a=[],o=[],l=[],c=[];for(let u=0,h=n.channels.length;u<h;u++){const f=n.channels[u],d=n.samplers[f.sampler],v=f.target,g=v.node,m=n.parameters!==void 0?n.parameters[d.input]:d.input,p=n.parameters!==void 0?n.parameters[d.output]:d.output;v.node!==void 0&&(r.push(this.getDependency("node",g)),a.push(this.getDependency("accessor",m)),o.push(this.getDependency("accessor",p)),l.push(d),c.push(v))}return Promise.all([Promise.all(r),Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(c)]).then(function(u){const h=u[0],f=u[1],d=u[2],v=u[3],g=u[4],m=[];for(let p=0,S=h.length;p<S;p++){const y=h[p],T=f[p],E=d[p],w=v[p],D=g[p];if(y===void 0)continue;y.updateMatrix();let I;switch(lr[D.path]){case lr.weights:I=ka;break;case lr.rotation:I=Zr;break;case lr.position:case lr.scale:default:I=za;break}const b=y.name?y.name:y.uuid,P=w.interpolation!==void 0?VT[w.interpolation]:Ys,$=[];lr[D.path]===lr.weights?y.traverse(function(z){z.morphTargetInfluences&&$.push(z.name?z.name:z.uuid)}):$.push(b);let ae=E.array;if(E.normalized){const z=$c(ae.constructor),V=new Float32Array(ae.length);for(let H=0,se=ae.length;H<se;H++)V[H]=ae[H]*z;ae=V}for(let z=0,V=$.length;z<V;z++){const H=new I($[z]+"."+lr[D.path],T.array,ae,P);w.interpolation==="CUBICSPLINE"&&(H.createInterpolant=function(K){const te=this instanceof Zr?GT:em;return new te(this.times,this.values,this.getValueSize()/3,K)},H.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0),m.push(H)}}return new ZE(i,void 0,m)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){const a=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,c=i.weights.length;l<c;l++)o.morphTargetInfluences[l]=i.weights[l]}),a})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=i.children||[];for(let c=0,u=o.length;c<u;c++)a.push(n.getDependency("node",o[c]));const l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(a),l]).then(function(c){const u=c[0],h=c[1],f=c[2];f!==null&&u.traverse(function(d){d.isSkinnedMesh&&d.bind(f,jT)});for(let d=0,v=h.length;d<v;d++)u.add(h[d]);return u})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],a=r.name?i.createUniqueName(r.name):"",o=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),r.camera!==void 0&&o.push(i.getDependency("camera",r.camera).then(function(c){return i._getNodeRef(i.cameraCache,r.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let u;if(r.isBone===!0?u=new Gp:c.length>1?u=new hr:c.length===1?u=c[0]:u=new Ht,u!==c[0])for(let h=0,f=c.length;h<f;h++)u.add(c[h]);if(r.name&&(u.userData.name=r.name,u.name=a),cr(u,r),r.extensions&&Sa(n,u,r),r.matrix!==void 0){const h=new lt;h.fromArray(r.matrix),u.applyMatrix4(h)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);return i.associations.has(u)||i.associations.set(u,{}),i.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,r=new hr;n.name&&(r.name=i.createUniqueName(n.name)),cr(r,n),n.extensions&&Sa(t,r,n);const a=n.nodes||[],o=[];for(let l=0,c=a.length;l<c;l++)o.push(i.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let u=0,h=l.length;u<h;u++)r.add(l[u]);const c=u=>{const h=new Map;for(const[f,d]of i.associations)(f instanceof pi||f instanceof gn)&&h.set(f,d);return u.traverse(f=>{const d=i.associations.get(f);d!=null&&h.set(f,d)}),h};return i.associations=c(r),r})}}function ZT(s,e,t){const n=e.attributes,i=new Ji;if(n.POSITION!==void 0){const o=t.json.accessors[n.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(i.set(new k(l[0],l[1],l[2]),new k(c[0],c[1],c[2])),o.normalized){const u=$c(zs[o.componentType]);i.min.multiplyScalar(u),i.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const o=new k,l=new k;for(let c=0,u=r.length;c<u;c++){const h=r[c];if(h.POSITION!==void 0){const f=t.json.accessors[h.POSITION],d=f.min,v=f.max;if(d!==void 0&&v!==void 0){if(l.setX(Math.max(Math.abs(d[0]),Math.abs(v[0]))),l.setY(Math.max(Math.abs(d[1]),Math.abs(v[1]))),l.setZ(Math.max(Math.abs(d[2]),Math.abs(v[2]))),f.normalized){const g=$c(zs[f.componentType]);l.multiplyScalar(g)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}s.boundingBox=i;const a=new wi;i.getCenter(a.center),a.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=a}function zd(s,e,t){const n=e.attributes,i=[];function r(a,o){return t.getDependency("accessor",a).then(function(l){s.setAttribute(o,l)})}for(const a in n){const o=qc[a]||a.toLowerCase();o in s.attributes||i.push(r(n[a],o))}if(e.indices!==void 0&&!s.index){const a=t.getDependency("accessor",e.indices).then(function(o){s.setIndex(o)});i.push(a)}return cr(s,e),ZT(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?XT(s,e.targets,t):s})}const Hd={type:"change"},Mc={type:"start"},Gd={type:"end"};class JT extends Qr{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new k,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ds.ROTATE,MIDDLE:ds.DOLLY,RIGHT:ds.PAN},this.touches={ONE:ps.ROTATE,TWO:ps.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(U){U.addEventListener("keydown",ct),this._domElementKeyEvents=U},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",ct),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Hd),n.update(),r=i.NONE},this.update=function(){const U=new k,ce=new Ti().setFromUnitVectors(e.up,new k(0,1,0)),me=ce.clone().invert(),J=new k,we=new Ti,Le=2*Math.PI;return function(){const Re=n.object.position;U.copy(Re).sub(n.target),U.applyQuaternion(ce),o.setFromVector3(U),n.autoRotate&&r===i.NONE&&b(D()),n.enableDamping?(o.theta+=l.theta*n.dampingFactor,o.phi+=l.phi*n.dampingFactor):(o.theta+=l.theta,o.phi+=l.phi);let Te=n.minAzimuthAngle,He=n.maxAzimuthAngle;return isFinite(Te)&&isFinite(He)&&(Te<-Math.PI?Te+=Le:Te>Math.PI&&(Te-=Le),He<-Math.PI?He+=Le:He>Math.PI&&(He-=Le),Te<=He?o.theta=Math.max(Te,Math.min(He,o.theta)):o.theta=o.theta>(Te+He)/2?Math.max(Te,o.theta):Math.min(He,o.theta)),o.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,o.phi)),o.makeSafe(),o.radius*=c,o.radius=Math.max(n.minDistance,Math.min(n.maxDistance,o.radius)),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),U.setFromSpherical(o),U.applyQuaternion(me),Re.copy(n.target).add(U),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),u.set(0,0,0)),c=1,h||J.distanceToSquared(n.object.position)>a||8*(1-we.dot(n.object.quaternion))>a?(n.dispatchEvent(Hd),J.copy(n.object.position),we.copy(n.object.quaternion),h=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",R),n.domElement.removeEventListener("pointerdown",Ie),n.domElement.removeEventListener("pointercancel",Fe),n.domElement.removeEventListener("wheel",Ge),n.domElement.removeEventListener("pointermove",Ve),n.domElement.removeEventListener("pointerup",Fe),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",ct),n._domElementKeyEvents=null)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let r=i.NONE;const a=1e-6,o=new Ud,l=new Ud;let c=1;const u=new k;let h=!1;const f=new $e,d=new $e,v=new $e,g=new $e,m=new $e,p=new $e,S=new $e,y=new $e,T=new $e,E=[],w={};function D(){return 2*Math.PI/60/60*n.autoRotateSpeed}function I(){return Math.pow(.95,n.zoomSpeed)}function b(U){l.theta-=U}function P(U){l.phi-=U}const $=function(){const U=new k;return function(me,J){U.setFromMatrixColumn(J,0),U.multiplyScalar(-me),u.add(U)}}(),ae=function(){const U=new k;return function(me,J){n.screenSpacePanning===!0?U.setFromMatrixColumn(J,1):(U.setFromMatrixColumn(J,0),U.crossVectors(n.object.up,U)),U.multiplyScalar(me),u.add(U)}}(),z=function(){const U=new k;return function(me,J){const we=n.domElement;if(n.object.isPerspectiveCamera){const Le=n.object.position;U.copy(Le).sub(n.target);let Oe=U.length();Oe*=Math.tan(n.object.fov/2*Math.PI/180),$(2*me*Oe/we.clientHeight,n.object.matrix),ae(2*J*Oe/we.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?($(me*(n.object.right-n.object.left)/n.object.zoom/we.clientWidth,n.object.matrix),ae(J*(n.object.top-n.object.bottom)/n.object.zoom/we.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function V(U){n.object.isPerspectiveCamera?c/=U:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*U)),n.object.updateProjectionMatrix(),h=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function H(U){n.object.isPerspectiveCamera?c*=U:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/U)),n.object.updateProjectionMatrix(),h=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function se(U){f.set(U.clientX,U.clientY)}function K(U){S.set(U.clientX,U.clientY)}function te(U){g.set(U.clientX,U.clientY)}function oe(U){d.set(U.clientX,U.clientY),v.subVectors(d,f).multiplyScalar(n.rotateSpeed);const ce=n.domElement;b(2*Math.PI*v.x/ce.clientHeight),P(2*Math.PI*v.y/ce.clientHeight),f.copy(d),n.update()}function ue(U){y.set(U.clientX,U.clientY),T.subVectors(y,S),T.y>0?V(I()):T.y<0&&H(I()),S.copy(y),n.update()}function ye(U){m.set(U.clientX,U.clientY),p.subVectors(m,g).multiplyScalar(n.panSpeed),z(p.x,p.y),g.copy(m),n.update()}function Z(U){U.deltaY<0?H(I()):U.deltaY>0&&V(I()),n.update()}function he(U){let ce=!1;switch(U.code){case n.keys.UP:U.ctrlKey||U.metaKey||U.shiftKey?P(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):z(0,n.keyPanSpeed),ce=!0;break;case n.keys.BOTTOM:U.ctrlKey||U.metaKey||U.shiftKey?P(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):z(0,-n.keyPanSpeed),ce=!0;break;case n.keys.LEFT:U.ctrlKey||U.metaKey||U.shiftKey?b(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):z(n.keyPanSpeed,0),ce=!0;break;case n.keys.RIGHT:U.ctrlKey||U.metaKey||U.shiftKey?b(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):z(-n.keyPanSpeed,0),ce=!0;break}ce&&(U.preventDefault(),n.update())}function le(){if(E.length===1)f.set(E[0].pageX,E[0].pageY);else{const U=.5*(E[0].pageX+E[1].pageX),ce=.5*(E[0].pageY+E[1].pageY);f.set(U,ce)}}function ve(){if(E.length===1)g.set(E[0].pageX,E[0].pageY);else{const U=.5*(E[0].pageX+E[1].pageX),ce=.5*(E[0].pageY+E[1].pageY);g.set(U,ce)}}function Ae(){const U=E[0].pageX-E[1].pageX,ce=E[0].pageY-E[1].pageY,me=Math.sqrt(U*U+ce*ce);S.set(0,me)}function Ne(){n.enableZoom&&Ae(),n.enablePan&&ve()}function Ye(){n.enableZoom&&Ae(),n.enableRotate&&le()}function Be(U){if(E.length==1)d.set(U.pageX,U.pageY);else{const me=pe(U),J=.5*(U.pageX+me.x),we=.5*(U.pageY+me.y);d.set(J,we)}v.subVectors(d,f).multiplyScalar(n.rotateSpeed);const ce=n.domElement;b(2*Math.PI*v.x/ce.clientHeight),P(2*Math.PI*v.y/ce.clientHeight),f.copy(d)}function St(U){if(E.length===1)m.set(U.pageX,U.pageY);else{const ce=pe(U),me=.5*(U.pageX+ce.x),J=.5*(U.pageY+ce.y);m.set(me,J)}p.subVectors(m,g).multiplyScalar(n.panSpeed),z(p.x,p.y),g.copy(m)}function Ke(U){const ce=pe(U),me=U.pageX-ce.x,J=U.pageY-ce.y,we=Math.sqrt(me*me+J*J);y.set(0,we),T.set(0,Math.pow(y.y/S.y,n.zoomSpeed)),V(T.y),S.copy(y)}function q(U){n.enableZoom&&Ke(U),n.enablePan&&St(U)}function Lt(U){n.enableZoom&&Ke(U),n.enableRotate&&Be(U)}function Ie(U){n.enabled!==!1&&(E.length===0&&(n.domElement.setPointerCapture(U.pointerId),n.domElement.addEventListener("pointermove",Ve),n.domElement.addEventListener("pointerup",Fe)),A(U),U.pointerType==="touch"?Dt(U):Ze(U))}function Ve(U){n.enabled!==!1&&(U.pointerType==="touch"?Ut(U):Ue(U))}function Fe(U){Q(U),E.length===0&&(n.domElement.releasePointerCapture(U.pointerId),n.domElement.removeEventListener("pointermove",Ve),n.domElement.removeEventListener("pointerup",Fe)),n.dispatchEvent(Gd),r=i.NONE}function Ze(U){let ce;switch(U.button){case 0:ce=n.mouseButtons.LEFT;break;case 1:ce=n.mouseButtons.MIDDLE;break;case 2:ce=n.mouseButtons.RIGHT;break;default:ce=-1}switch(ce){case ds.DOLLY:if(n.enableZoom===!1)return;K(U),r=i.DOLLY;break;case ds.ROTATE:if(U.ctrlKey||U.metaKey||U.shiftKey){if(n.enablePan===!1)return;te(U),r=i.PAN}else{if(n.enableRotate===!1)return;se(U),r=i.ROTATE}break;case ds.PAN:if(U.ctrlKey||U.metaKey||U.shiftKey){if(n.enableRotate===!1)return;se(U),r=i.ROTATE}else{if(n.enablePan===!1)return;te(U),r=i.PAN}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(Mc)}function Ue(U){switch(r){case i.ROTATE:if(n.enableRotate===!1)return;oe(U);break;case i.DOLLY:if(n.enableZoom===!1)return;ue(U);break;case i.PAN:if(n.enablePan===!1)return;ye(U);break}}function Ge(U){n.enabled===!1||n.enableZoom===!1||r!==i.NONE||(U.preventDefault(),n.dispatchEvent(Mc),Z(U),n.dispatchEvent(Gd))}function ct(U){n.enabled===!1||n.enablePan===!1||he(U)}function Dt(U){switch(fe(U),E.length){case 1:switch(n.touches.ONE){case ps.ROTATE:if(n.enableRotate===!1)return;le(),r=i.TOUCH_ROTATE;break;case ps.PAN:if(n.enablePan===!1)return;ve(),r=i.TOUCH_PAN;break;default:r=i.NONE}break;case 2:switch(n.touches.TWO){case ps.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Ne(),r=i.TOUCH_DOLLY_PAN;break;case ps.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Ye(),r=i.TOUCH_DOLLY_ROTATE;break;default:r=i.NONE}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(Mc)}function Ut(U){switch(fe(U),r){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;Be(U),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;St(U),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;q(U),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Lt(U),n.update();break;default:r=i.NONE}}function R(U){n.enabled!==!1&&U.preventDefault()}function A(U){E.push(U)}function Q(U){delete w[U.pointerId];for(let ce=0;ce<E.length;ce++)if(E[ce].pointerId==U.pointerId){E.splice(ce,1);return}}function fe(U){let ce=w[U.pointerId];ce===void 0&&(ce=new $e,w[U.pointerId]=ce),ce.set(U.pageX,U.pageY)}function pe(U){const ce=U.pointerId===E[0].pointerId?E[1]:E[0];return w[ce.pointerId]}n.domElement.addEventListener("contextmenu",R),n.domElement.addEventListener("pointerdown",Ie),n.domElement.addEventListener("pointercancel",Fe),n.domElement.addEventListener("wheel",Ge,{passive:!1}),this.update()}}const il=class{constructor(){j(this,"subscribers");this.subscribers={}}static getInstance(){return this.instance===void 0&&(this.instance=new il),this.instance}dispatch(e,t){const n=this.subscribers[e];n!==void 0&&Object.keys(n).forEach(i=>n[i](t))}register(e,t){const n=this.getNextId();return this.subscribers[e]||(this.subscribers[e]={}),this.subscribers[e][n]=t,{unregister:()=>{delete this.subscribers[e][n],Object.keys(this.subscribers[e]).length===0&&delete this.subscribers[e]}}}getNextId(){return il.nextId++}};let Aa=il;j(Aa,"nextId",0),j(Aa,"instance");const QT={isChrome:()=>/Chrome/.test(navigator.userAgent)&&/Google Inc/.test(navigator.userAgent),getHeapInfo:()=>{const s=window.performance,e={totalSize:0,usedSize:0,limitSize:0,allocated:0,consumed:0};return s&&s.memory&&(e.limitSize=s.memory.jsHeapSizeLimit,e.totalSize=s.memory.totalJSHeapSize,e.usedSize=s.memory.usedJSHeapSize,e.allocated=100*e.totalSize/e.limitSize,e.consumed=100*e.totalSize/e.usedSize),e}},Wu=class{constructor(){j(this,"subscribers");this.subscribers={}}dispatch(e,t){const n=this.subscribers[e];n!==void 0&&Object.keys(n).forEach(i=>n[i](t))}register(e,t){const n=this.getNextId();return this.subscribers[e]||(this.subscribers[e]={}),this.subscribers[e][n]=t,{unregister:()=>{delete this.subscribers[e][n],Object.keys(this.subscribers[e]).length===0&&delete this.subscribers[e]}}}on(e,t){return this.register(e,t)}getNextId(){return Wu.nextId++}};let Da=Wu;j(Da,"nextId",0);class Yo{static async loadCubeEnvTexture(e,t){return new Promise((n,i)=>{new nT(new Yp(()=>{},(r,a,o)=>{console.log(`%c${a}/${o} - ${r}`,`color: 
                        ${r.includes("park")?"#8f8":r.includes("bridge")?"#88f":"#ff8"}`)},r=>{const a=`Error loading ${r}`;console.error(a),i(a)})).setPath(e).load(t,r=>{n(r),r.dispose()},r=>{console.log(r.loaded)})})}static async loadDefaultCubeEnvTexture(e){const t=["posx.jpg","negx.jpg","posy.jpg","negy.jpg","posz.jpg","negz.jpg"];return this.loadCubeEnvTexture(`textures/cube/${e}/`,t)}static async loadTexture(e){return new Promise((t,n)=>{new Zp().load(e,i=>{t(i)})})}}j(Yo,"loadGLTF",(e,t)=>new Promise((n,i)=>{let r=0;new yT().load(e,a=>{var u;a.scene.traverse(h=>{h instanceof mn&&(h.castShadow=!0,h.receiveShadow=!0)});const o=[];a.scenes.forEach(h=>{o.push(h.name)});const c={glTF:a,info:{path:e,size:r,sceneNames:o}};(u=t==null?void 0:t.loaded)==null||u.call(t,c),n(c)},a=>{var l;r=a.total;const o={path:e,percent:a.loaded/a.total*100,loaded:a.loaded,total:a.total};(l=t==null?void 0:t.loading)==null||l.call(t,o)},a=>{var l;const o=`Error loading GLTF model - ${a}`;(l=t==null?void 0:t.error)==null||l.call(t,o),i(o),console.error()})}));class tm extends Da{constructor(t,n){var i;super();j(this,"_renderingContainer");j(this,"_renderingCanvas");j(this,"_overlayContainer");j(this,"_overlayCanvas");j(this,"_mousePosition",new $e);j(this,"_isMouseDown",!1);j(this,"getRenderingCanvas",()=>this._renderingCanvas);j(this,"getContainer",()=>{if(this._renderingCanvas.parentElement===null)throw new Error(`The canvas "${this._renderingCanvas.id}" has no parent element`);return this._renderingCanvas.parentElement});j(this,"getMousePosition",()=>this._mousePosition);j(this,"getOverlayContainer",()=>this._overlayContainer);j(this,"getOverlayCanvas",()=>this._overlayCanvas);j(this,"addOverlayContainer",t=>{const n=this.getContainer();if(n===null)throw new Error(`The canvas "${this._renderingCanvas.id}" has no parent element`);n.style.position!=="relative"&&(console.warn(`The display property of parent element "${n}" is changed to "relative"`),n.style.position="relative"),n.appendChild(t)});j(this,"createOverlayContainer",(t,n)=>Qt.createOverlayContainer(t||"overlay-container",n));j(this,"createOverlayCanvas",t=>Qt.createCanvas(t||"overlay-canvas"));j(this,"initialCanvas2D",()=>new Promise(t=>{window.requestAnimationFrame(()=>{this._overlayContainer.getBoundingClientRect(),this._renderingContainer.getBoundingClientRect(),t(this._overlayCanvas)})}));j(this,"computeNormalizedMousePosition",(t,n)=>{const i=this._renderingCanvas.getBoundingClientRect(),r=t-i.left,a=n-i.top,o=+(r/i.width)*2-1,l=-(a/i.height)*2+1;return new $e(o,l)});j(this,"getNormalizedMousePosition",()=>this.computeNormalizedMousePosition(this._mousePosition.x,this._mousePosition.y));j(this,"addEvents",()=>{const t=this._overlayContainer;t.addEventListener("mousedown",this.handleCanvasMouseDown),t.addEventListener("mouseup",this.handleCanvasMouseUp),t.addEventListener("mouseenter",this.handleCanvasMouseEnter),t.addEventListener("mousemove",this.handleCanvasMouseMove),t.addEventListener("mouseleave",this.handleCanvasMouseLeave),t.addEventListener("click",this.handleCanvasMouseClick),t.addEventListener("dblclick",this.handleCanvasMouseDblClick),t.addEventListener("keydown",this.handleCanvasKeyDown),t.addEventListener("keyup",this.handleCanvasKeyUp)});j(this,"removeEvents",()=>{const t=this._overlayContainer;t.removeEventListener("mousedown",this.handleCanvasMouseDown),t.removeEventListener("mouseup",this.handleCanvasMouseUp),t.removeEventListener("mouseenter",this.handleCanvasMouseEnter),t.removeEventListener("mousemove",this.handleCanvasMouseMove),t.removeEventListener("mouseleave",this.handleCanvasMouseLeave),t.removeEventListener("click",this.handleCanvasMouseClick),t.removeEventListener("dblclick",this.handleCanvasMouseDblClick),t.removeEventListener("keydown",this.handleCanvasKeyDown),t.removeEventListener("keyup",this.handleCanvasKeyUp)});j(this,"handleCanvasMouseDown",t=>{this._isMouseDown=!0,this.dispatch("mousedown",t)});j(this,"handleCanvasMouseUp",t=>{this._isMouseDown=!1,this.dispatch("mouseup",t)});j(this,"handleCanvasMouseEnter",t=>{this.dispatch("mouseenter",t)});j(this,"handleCanvasMouseMove",t=>{this._mousePosition.x=t.clientX,this._mousePosition.y=t.clientY,this.dispatch("mousemove",t),this._isMouseDown&&this.dispatch("mousedrag",t)});j(this,"handleCanvasMouseLeave",t=>{this.dispatch("mouseleave",t)});j(this,"handleCanvasMouseClick",t=>{this.dispatch("click",t)});j(this,"handleCanvasMouseDblClick",t=>{this.dispatch("dblclick",t)});j(this,"handleCanvasKeyDown",t=>{this.dispatch("keydown",t)});j(this,"handleCanvasKeyUp",t=>{this.dispatch("keyup",t)});j(this,"onMouseDown",t=>{this.on("mousedown",t)});j(this,"onMouseUp",t=>{this.on("mouseup",t)});j(this,"onMouseEnter",t=>{this.on("mouseenter",t)});j(this,"onMouseMove",t=>{this.on("mousemove",t)});j(this,"onMouseLeave",t=>{this.on("mouseleave",t)});j(this,"onMouseClick",t=>{this.on("click",t)});j(this,"onMouseDblClick",t=>{this.on("dblclick",t)});j(this,"onKeyDown",t=>{this.on("keydown",t)});j(this,"onKeyUp",t=>{this.on("keyup",t)});this.graphics=t,this._renderingContainer=Qt.getElementById(n),this._renderingCanvas=Qt.createCanvas(Qt.generateUUID("canvas3d")),this._renderingCanvas.setAttribute("copyright","@drsant"),this._renderingCanvas.style.zIndex="0",(i=this._renderingContainer)==null||i.appendChild(this._renderingCanvas),this._renderingContainer.style.position="relative",this._overlayContainer=this.createOverlayContainer("overlay-container"),this._overlayCanvas=this.createOverlayCanvas("overlay-canvas"),this._renderingCanvas.setAttribute("copyright","@drsant"),this._renderingCanvas.style.zIndex="999",this._renderingContainer.appendChild(this._overlayContainer),this._overlayContainer.appendChild(this._overlayCanvas),this.addEvents()}dispose(){var t;this.removeEvents(),(t=this.getRenderingCanvas().parentElement)==null||t.removeChild(this.getRenderingCanvas()),this._overlayContainer.removeChild(this._overlayCanvas)}}j(tm,"version","v1.0.0");class e1{constructor(e){j(this,"_disMouseEnter",!1);j(this,"_disMouseLeave",!1);j(this,"_target");j(this,"_callbackOptions");j(this,"_raycaster",new xT);j(this,"sense",(e,t)=>{if(e==null){const n=this.graphics.getMeshes();this._target=n[0],console.log(`%cThe target is ${e}, take the first mesh as target.`,"color: yellow")}else typeof e=="string"&&(this._target=this.graphics.getObjectByName(e),console.log(`%cThe target name is ${e}, take it from the main scene.`,"color: yellow"));this._callbackOptions=t});j(this,"getIntersects",e=>{const t=this.graphics,i=t.getGraphicsCanvas().getNormalizedMousePosition();this._raycaster.setFromCamera(i,t.camera);const r=this._raycaster.intersectObjects(t.scene.children,!0);if(r.length>0&&r[0].object.name===(e==null?void 0:e.name))return r});this.graphics=e;let t=!1,n=0,i;const r=this.graphics.getGraphicsCanvas();r.on("mousemove",a=>{var c,u,h,f,d,v,g;const o=r.getNormalizedMousePosition();this._raycaster.setFromCamera(o,this.graphics.camera);const l=this._raycaster.intersectObjects(this.graphics.scene.children,!0);t=l.length>0&&l[0].object.name===((c=this._target)==null?void 0:c.name),t&&(i=l[0],(h=(u=this._callbackOptions)==null?void 0:u.mouseMove)==null||h.call(u,i),r.dispatch("ray-move",i)),t&&this._disMouseEnter===!1?(this._disMouseEnter=!0,this._disMouseLeave=!1,n+=1,(d=(f=this._callbackOptions)==null?void 0:f.mouseEnter)==null||d.call(f,i),r.dispatch("ray-enter",i)):t===!1&&n>0&&this._disMouseLeave===!1&&(this._disMouseEnter=!1,this._disMouseLeave=!0,(g=(v=this._callbackOptions)==null?void 0:v.mouseLeave)==null||g.call(v,i),r.dispatch("ray-leave",this._target))}),r.on("mousedown",a=>{var l,c;const o=this.getIntersects(this._target);o&&((c=(l=this._callbackOptions)==null?void 0:l.mouseDown)==null||c.call(l,o[0]),r.dispatch("ray-mousedown",this._target))}),r.on("mouseup",a=>{var l,c;const o=this.getIntersects(this._target);o&&((c=(l=this._callbackOptions)==null?void 0:l.mouseUp)==null||c.call(l,o[0]),r.dispatch("ray-mouseup",this._target))}),r.on("click",a=>{var l,c;const o=this.getIntersects(this._target);o&&((c=(l=this._callbackOptions)==null?void 0:l.mouseClick)==null||c.call(l,o[0]),r.dispatch("ray-click",this._target))}),r.on("dblclick",a=>{var l,c;const o=this.getIntersects(this._target);o&&((c=(l=this._callbackOptions)==null?void 0:l.mouseDblClick)==null||c.call(l,o[0]),r.dispatch("ray-dblclick",this._target))}),r.on("mousedrag",a=>{var l,c;const o=this.getIntersects(this._target);o&&((c=(l=this._callbackOptions)==null?void 0:l.mouseDrag)==null||c.call(l,o[0]),r.dispatch("ray-drag",this._target))})}}const t1=[{type:"env",name:"park"},{type:"env",name:"bridge"},{type:"env",name:"snow"},{type:"gltf",name:"cube1.glb"}],Tt=class{};let Rn=Tt;j(Rn,"envMaps",[]),j(Rn,"glTFs",[]),j(Rn,"resources"),j(Rn,"resourceList",t1),j(Rn,"inprogress",!1),j(Rn,"waitResource",async e=>new Promise(t=>{let n=0;const i=setInterval(()=>{console.log(`${e} waiting...${++n}`),Tt.resources.loaded===!0&&(clearInterval(i),console.log(`%c${e} resolving...`,"color: lime"),t())},100)})),j(Rn,"dispose",()=>{Tt.resources&&(Tt.resources.loaded=!1,Tt.inprogress=!1,Tt.resources.envMaps.forEach(e=>{e.dispose()}),Tt.resources.glTFs.forEach(e=>{e.scenes.forEach(t=>{t.traverse(n=>{n instanceof mn&&n.geometry.dispose(),n instanceof pi&&(n.dispose(),console.log(`dispose material ${n.uuid}`))})})}),Tt.resources.envMaps=[],Tt.resources.glTFs=[])}),j(Rn,"downloadResources",async(e,t)=>(Tt.resources={envMaps:Tt.envMaps,glTFs:Tt.glTFs,loaded:!1},console.log(`%c${e} is try to download`,"color: cyan"),Tt.inprogress===!0&&(console.log("%creject, the previous caller is in progress...","color: yellow"),await Tt.waitResource(e)),Tt.resources.loaded===!0?new Promise(n=>{n(Tt.resources)}):(Tt.inprogress=!0,new Promise((n,i)=>{let r=0;const a=()=>{r+=1,r>=Tt.resourceList.length&&(Tt.resources.envMaps=Tt.envMaps,Tt.resources.loaded=!0,Tt.inprogress=!1,n(Tt.resources))};Tt.resourceList.forEach(o=>{o.type==="env"?Yo.loadDefaultCubeEnvTexture(o.name).then(l=>{Tt.envMaps.push(l),a()}).catch(()=>i(`error downloading ${o.type}.${o.name}`)):o.type==="gltf"&&Yo.loadGLTF(o.name,t).then(l=>{const c=l.glTF;Tt.glTFs.push(c),console.log(`%c${o.name} contains ${c.scenes.length} scenes:`,"color: lime"),c.scenes.forEach(u=>{console.log(`%c  + ${u.name}`,"color: cyan")}),a()}).catch(()=>i(`error downloading ${o.type}.${o.name}`))})}))));class n1 extends Da{constructor(t,n){super();j(this,"scene",new fd);j(this,"camera",new Cn);j(this,"renderer",new Gc);j(this,"controls");j(this,"isRunning",!0);j(this,"frameCnt",0);j(this,"graphicsCanvas");j(this,"loadGLTF",async(t,n)=>await Yo.loadGLTF(t,n));j(this,"useScene",(t,n)=>{n=n||0,n=n>=t.scenes.length?t.scenes.length-1:n,n=n<0?t.scenes.length-1:n;const i=t.scenes[n].clone();return t.scenes[n].traverse(r=>{i.add(r.clone())}),this.scene.add(i),i});j(this,"clearScene",()=>{this.scene.traverse(t=>{var n,i,r,a,o,l,c;this.scene.remove(t),t instanceof mn&&(t.geometry.dispose(),(n=t.material.map)==null||n.dispose(),(i=t.material.aoMap)==null||i.dispose(),(r=t.material.alphaMap)==null||r.dispose(),(a=t.material.envMap)==null||a.dispose(),(o=t.material.lightMap)==null||o.dispose(),(l=t.material.specularMap)==null||l.dispose(),(c=t.material.normalMap)==null||c.dispose(),t.material.dispose())})});j(this,"update",t=>{var n;this.isRunning===!1&&this.frameCnt>0||(this.frameCnt+=1,(n=this.controls)==null||n.update(),this.renderer.render(this.scene,this.camera))});j(this,"setSize",(t,n)=>{const i=this.getGraphicsCanvas().getRenderingCanvas();i.width=t,i.height=n;const r=this.getGraphicsCanvas().getOverlayCanvas();r.width=t,r.height=n,this.renderer.setSize(i.width,i.height),this.renderer.setPixelRatio(i.width/i.height),this.camera.aspect=i.width/i.height,this.camera.updateProjectionMatrix()});j(this,"getObjectByName",(t,n)=>{const i=n||this.scene;let r;return i.traverse(a=>{a.name==t&&(a instanceof mn||a instanceof hr||a instanceof fd)&&(r=a)}),r});j(this,"getMeshes",t=>{const n=[];return t=t||this.scene,t.traverse(i=>{i instanceof mn&&n.push(i)}),n});j(this,"getCamera",()=>this.camera);j(this,"getRenderer",()=>this.renderer);j(this,"getScene",()=>this.scene);j(this,"getRenderingCanvas",()=>this.renderer.domElement);j(this,"getGraphicsCanvas",()=>this.graphicsCanvas);j(this,"createRaySensor",()=>new e1(this));j(this,"setBackground",t=>{this.scene.background=t});j(this,"clearBackground",()=>{this.scene.background=null});j(this,"setBackgroundBlurriness",t=>{this.scene.backgroundBlurriness=t});j(this,"setBackgroundIntensity",t=>{this.scene.backgroundIntensity=t});j(this,"setEnvironment",t=>{this.scene.environment=t});j(this,"clearEnvironment",()=>{this.scene.environment=null});j(this,"nextEnvironment",(t=!0)=>{const n=Rn.resources.envMaps,i=r=>{this.scene.environment=r,t===!0&&(this.scene.background=r)};if(this.scene.environment==null)i(n[0]);else{const r=n.filter(o=>o==this.scene.environment)[0];let a=n.indexOf(r);a=(a+1)%n.length,i(n[a])}});j(this,"previousEnvironment",(t=!0)=>{const n=Rn.resources.envMaps,i=r=>{this.scene.environment=r,t===!0&&(this.scene.background=r)};if(this.scene.environment==null)i(n[n.length-1]);else{const r=n.filter(o=>o==this.scene.environment)[0];let a=n.indexOf(r);a=a-1<0?n.length-1:a-1,i(n[a])}});this.engine=t,t.onResize(r=>{}),this.createGraphics(n),this.engine.addCallback(this.update),this.camera.position.set(0,0,5),this.camera.lookAt(new k(0));const i=new Jp(16777215,2);i.position.set(2,5,2),this.scene.add(i),this.scene.add(new lT(16777215,1))}start(){this.isRunning=!0}stop(){this.isRunning=!1}createGraphics(t){var i,r;(i=this.graphicsCanvas)==null||i.dispose(),this.graphicsCanvas=new tm(this,t);const n=this.graphicsCanvas.getRenderingCanvas();this.renderer.dispose(),this.renderer=new Gc({canvas:n,antialias:!0}),this.renderer.setClearAlpha(0),this.renderer.setClearColor(0,0),this.renderer.setSize(n.width,n.height),this.renderer.setPixelRatio(n.width/n.height),this.camera.aspect=n.width/n.height,this.camera.updateProjectionMatrix(),(r=this.controls)==null||r.dispose(),this.controls=new JT(this.camera,this.graphicsCanvas.getOverlayContainer())}}var i1=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function r1(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var nm={exports:{}};/**
 * chroma.js - JavaScript library for color conversions
 *
 * Copyright (c) 2011-2019, Gregor Aisch
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice, this
 * list of conditions and the following disclaimer.
 *
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 * this list of conditions and the following disclaimer in the documentation
 * and/or other materials provided with the distribution.
 *
 * 3. The name Gregor Aisch may not be used to endorse or promote products
 * derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL GREGOR AISCH OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT,
 * INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING,
 * BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY
 * OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 * NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
 * EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 * -------------------------------------------------------
 *
 * chroma.js includes colors from colorbrewer2.org, which are released under
 * the following license:
 *
 * Copyright (c) 2002 Cynthia Brewer, Mark Harrower,
 * and The Pennsylvania State University.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND,
 * either express or implied. See the License for the specific
 * language governing permissions and limitations under the License.
 *
 * ------------------------------------------------------
 *
 * Named colors are taken from X11 Color Names.
 * http://www.w3.org/TR/css3-color/#svg-color
 *
 * @preserve
 */(function(s,e){(function(t,n){s.exports=n()})(i1,function(){for(var t=function(_,x,M){return x===void 0&&(x=0),M===void 0&&(M=1),_<x?x:_>M?M:_},n=t,i=function(_){_._clipped=!1,_._unclipped=_.slice(0);for(var x=0;x<=3;x++)x<3?((_[x]<0||_[x]>255)&&(_._clipped=!0),_[x]=n(_[x],0,255)):x===3&&(_[x]=n(_[x],0,1));return _},r={},a=0,o=["Boolean","Number","String","Function","Array","Date","RegExp","Undefined","Null"];a<o.length;a+=1){var l=o[a];r["[object "+l+"]"]=l.toLowerCase()}var c=function(_){return r[Object.prototype.toString.call(_)]||"object"},u=c,h=function(_,x){return x===void 0&&(x=null),_.length>=3?Array.prototype.slice.call(_):u(_[0])=="object"&&x?x.split("").filter(function(M){return _[0][M]!==void 0}).map(function(M){return _[0][M]}):_[0]},f=c,d=function(_){if(_.length<2)return null;var x=_.length-1;return f(_[x])=="string"?_[x].toLowerCase():null},v=Math.PI,g={clip_rgb:i,limit:t,type:c,unpack:h,last:d,PI:v,TWOPI:v*2,PITHIRD:v/3,DEG2RAD:v/180,RAD2DEG:180/v},m={format:{},autodetect:[]},p=g.last,S=g.clip_rgb,y=g.type,T=m,E=function(){for(var x=[],M=arguments.length;M--;)x[M]=arguments[M];var L=this;if(y(x[0])==="object"&&x[0].constructor&&x[0].constructor===this.constructor)return x[0];var O=p(x),F=!1;if(!O){F=!0,T.sorted||(T.autodetect=T.autodetect.sort(function(de,Ee){return Ee.p-de.p}),T.sorted=!0);for(var N=0,G=T.autodetect;N<G.length;N+=1){var X=G[N];if(O=X.test.apply(X,x),O)break}}if(T.format[O]){var re=T.format[O].apply(null,F?x:x.slice(0,-1));L._rgb=S(re)}else throw new Error("unknown format: "+x);L._rgb.length===3&&L._rgb.push(1)};E.prototype.toString=function(){return y(this.hex)=="function"?this.hex():"["+this._rgb.join(",")+"]"};var w=E,D=function(){for(var _=[],x=arguments.length;x--;)_[x]=arguments[x];return new(Function.prototype.bind.apply(D.Color,[null].concat(_)))};D.Color=w,D.version="2.4.2";var I=D,b=g.unpack,P=Math.max,$=function(){for(var _=[],x=arguments.length;x--;)_[x]=arguments[x];var M=b(_,"rgb"),L=M[0],O=M[1],F=M[2];L=L/255,O=O/255,F=F/255;var N=1-P(L,P(O,F)),G=N<1?1/(1-N):0,X=(1-L-N)*G,re=(1-O-N)*G,de=(1-F-N)*G;return[X,re,de,N]},ae=$,z=g.unpack,V=function(){for(var _=[],x=arguments.length;x--;)_[x]=arguments[x];_=z(_,"cmyk");var M=_[0],L=_[1],O=_[2],F=_[3],N=_.length>4?_[4]:1;return F===1?[0,0,0,N]:[M>=1?0:255*(1-M)*(1-F),L>=1?0:255*(1-L)*(1-F),O>=1?0:255*(1-O)*(1-F),N]},H=V,se=I,K=w,te=m,oe=g.unpack,ue=g.type,ye=ae;K.prototype.cmyk=function(){return ye(this._rgb)},se.cmyk=function(){for(var _=[],x=arguments.length;x--;)_[x]=arguments[x];return new(Function.prototype.bind.apply(K,[null].concat(_,["cmyk"])))},te.format.cmyk=H,te.autodetect.push({p:2,test:function(){for(var _=[],x=arguments.length;x--;)_[x]=arguments[x];if(_=oe(_,"cmyk"),ue(_)==="array"&&_.length===4)return"cmyk"}});var Z=g.unpack,he=g.last,le=function(_){return Math.round(_*100)/100},ve=function(){for(var _=[],x=arguments.length;x--;)_[x]=arguments[x];var M=Z(_,"hsla"),L=he(_)||"lsa";return M[0]=le(M[0]||0),M[1]=le(M[1]*100)+"%",M[2]=le(M[2]*100)+"%",L==="hsla"||M.length>3&&M[3]<1?(M[3]=M.length>3?M[3]:1,L="hsla"):M.length=3,L+"("+M.join(",")+")"},Ae=ve,Ne=g.unpack,Ye=function(){for(var _=[],x=arguments.length;x--;)_[x]=arguments[x];_=Ne(_,"rgba");var M=_[0],L=_[1],O=_[2];M/=255,L/=255,O/=255;var F=Math.min(M,L,O),N=Math.max(M,L,O),G=(N+F)/2,X,re;return N===F?(X=0,re=Number.NaN):X=G<.5?(N-F)/(N+F):(N-F)/(2-N-F),M==N?re=(L-O)/(N-F):L==N?re=2+(O-M)/(N-F):O==N&&(re=4+(M-L)/(N-F)),re*=60,re<0&&(re+=360),_.length>3&&_[3]!==void 0?[re,X,G,_[3]]:[re,X,G]},Be=Ye,St=g.unpack,Ke=g.last,q=Ae,Lt=Be,Ie=Math.round,Ve=function(){for(var _=[],x=arguments.length;x--;)_[x]=arguments[x];var M=St(_,"rgba"),L=Ke(_)||"rgb";return L.substr(0,3)=="hsl"?q(Lt(M),L):(M[0]=Ie(M[0]),M[1]=Ie(M[1]),M[2]=Ie(M[2]),(L==="rgba"||M.length>3&&M[3]<1)&&(M[3]=M.length>3?M[3]:1,L="rgba"),L+"("+M.slice(0,L==="rgb"?3:4).join(",")+")")},Fe=Ve,Ze=g.unpack,Ue=Math.round,Ge=function(){for(var _,x=[],M=arguments.length;M--;)x[M]=arguments[M];x=Ze(x,"hsl");var L=x[0],O=x[1],F=x[2],N,G,X;if(O===0)N=G=X=F*255;else{var re=[0,0,0],de=[0,0,0],Ee=F<.5?F*(1+O):F+O-F*O,ge=2*F-Ee,De=L/360;re[0]=De+1/3,re[1]=De,re[2]=De-1/3;for(var Ce=0;Ce<3;Ce++)re[Ce]<0&&(re[Ce]+=1),re[Ce]>1&&(re[Ce]-=1),6*re[Ce]<1?de[Ce]=ge+(Ee-ge)*6*re[Ce]:2*re[Ce]<1?de[Ce]=Ee:3*re[Ce]<2?de[Ce]=ge+(Ee-ge)*(2/3-re[Ce])*6:de[Ce]=ge;_=[Ue(de[0]*255),Ue(de[1]*255),Ue(de[2]*255)],N=_[0],G=_[1],X=_[2]}return x.length>3?[N,G,X,x[3]]:[N,G,X,1]},ct=Ge,Dt=ct,Ut=m,R=/^rgb\(\s*(-?\d+),\s*(-?\d+)\s*,\s*(-?\d+)\s*\)$/,A=/^rgba\(\s*(-?\d+),\s*(-?\d+)\s*,\s*(-?\d+)\s*,\s*([01]|[01]?\.\d+)\)$/,Q=/^rgb\(\s*(-?\d+(?:\.\d+)?)%,\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*\)$/,fe=/^rgba\(\s*(-?\d+(?:\.\d+)?)%,\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/,pe=/^hsl\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*\)$/,U=/^hsla\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/,ce=Math.round,me=function(_){_=_.toLowerCase().trim();var x;if(Ut.format.named)try{return Ut.format.named(_)}catch{}if(x=_.match(R)){for(var M=x.slice(1,4),L=0;L<3;L++)M[L]=+M[L];return M[3]=1,M}if(x=_.match(A)){for(var O=x.slice(1,5),F=0;F<4;F++)O[F]=+O[F];return O}if(x=_.match(Q)){for(var N=x.slice(1,4),G=0;G<3;G++)N[G]=ce(N[G]*2.55);return N[3]=1,N}if(x=_.match(fe)){for(var X=x.slice(1,5),re=0;re<3;re++)X[re]=ce(X[re]*2.55);return X[3]=+X[3],X}if(x=_.match(pe)){var de=x.slice(1,4);de[1]*=.01,de[2]*=.01;var Ee=Dt(de);return Ee[3]=1,Ee}if(x=_.match(U)){var ge=x.slice(1,4);ge[1]*=.01,ge[2]*=.01;var De=Dt(ge);return De[3]=+x[4],De}};me.test=function(_){return R.test(_)||A.test(_)||Q.test(_)||fe.test(_)||pe.test(_)||U.test(_)};var J=me,we=I,Le=w,Oe=m,Re=g.type,Te=Fe,He=J;Le.prototype.css=function(_){return Te(this._rgb,_)},we.css=function(){for(var _=[],x=arguments.length;x--;)_[x]=arguments[x];return new(Function.prototype.bind.apply(Le,[null].concat(_,["css"])))},Oe.format.css=He,Oe.autodetect.push({p:5,test:function(_){for(var x=[],M=arguments.length-1;M-- >0;)x[M]=arguments[M+1];if(!x.length&&Re(_)==="string"&&He.test(_))return"css"}});var yt=w,B=I,be=m,ee=g.unpack;be.format.gl=function(){for(var _=[],x=arguments.length;x--;)_[x]=arguments[x];var M=ee(_,"rgba");return M[0]*=255,M[1]*=255,M[2]*=255,M},B.gl=function(){for(var _=[],x=arguments.length;x--;)_[x]=arguments[x];return new(Function.prototype.bind.apply(yt,[null].concat(_,["gl"])))},yt.prototype.gl=function(){var _=this._rgb;return[_[0]/255,_[1]/255,_[2]/255,_[3]]};var xe=g.unpack,Se=function(){for(var _=[],x=arguments.length;x--;)_[x]=arguments[x];var M=xe(_,"rgb"),L=M[0],O=M[1],F=M[2],N=Math.min(L,O,F),G=Math.max(L,O,F),X=G-N,re=X*100/255,de=N/(255-X)*100,Ee;return X===0?Ee=Number.NaN:(L===G&&(Ee=(O-F)/X),O===G&&(Ee=2+(F-L)/X),F===G&&(Ee=4+(L-O)/X),Ee*=60,Ee<0&&(Ee+=360)),[Ee,re,de]},dt=Se,Nt=g.unpack,Gt=Math.floor,Li=function(){for(var _,x,M,L,O,F,N=[],G=arguments.length;G--;)N[G]=arguments[G];N=Nt(N,"hcg");var X=N[0],re=N[1],de=N[2],Ee,ge,De;de=de*255;var Ce=re*255;if(re===0)Ee=ge=De=de;else{X===360&&(X=0),X>360&&(X-=360),X<0&&(X+=360),X/=60;var it=Gt(X),ut=X-it,pt=de*(1-re),_t=pt+Ce*(1-ut),hn=pt+Ce*ut,sn=pt+Ce;switch(it){case 0:_=[sn,hn,pt],Ee=_[0],ge=_[1],De=_[2];break;case 1:x=[_t,sn,pt],Ee=x[0],ge=x[1],De=x[2];break;case 2:M=[pt,sn,hn],Ee=M[0],ge=M[1],De=M[2];break;case 3:L=[pt,_t,sn],Ee=L[0],ge=L[1],De=L[2];break;case 4:O=[hn,pt,sn],Ee=O[0],ge=O[1],De=O[2];break;case 5:F=[sn,pt,_t],Ee=F[0],ge=F[1],De=F[2];break}}return[Ee,ge,De,N.length>3?N[3]:1]},Ot=Li,$n=g.unpack,cn=g.type,Za=I,ca=w,Ja=m,ns=dt;ca.prototype.hcg=function(){return ns(this._rgb)},Za.hcg=function(){for(var _=[],x=arguments.length;x--;)_[x]=arguments[x];return new(Function.prototype.bind.apply(ca,[null].concat(_,["hcg"])))},Ja.format.hcg=Ot,Ja.autodetect.push({p:1,test:function(){for(var _=[],x=arguments.length;x--;)_[x]=arguments[x];if(_=$n(_,"hcg"),cn(_)==="array"&&_.length===3)return"hcg"}});var Qa=g.unpack,is=g.last,br=Math.round,hl=function(){for(var _=[],x=arguments.length;x--;)_[x]=arguments[x];var M=Qa(_,"rgba"),L=M[0],O=M[1],F=M[2],N=M[3],G=is(_)||"auto";N===void 0&&(N=1),G==="auto"&&(G=N<1?"rgba":"rgb"),L=br(L),O=br(O),F=br(F);var X=L<<16|O<<8|F,re="000000"+X.toString(16);re=re.substr(re.length-6);var de="0"+br(N*255).toString(16);switch(de=de.substr(de.length-2),G.toLowerCase()){case"rgba":return"#"+re+de;case"argb":return"#"+de+re;default:return"#"+re}},eo=hl,fl=/^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/,C=/^#?([A-Fa-f0-9]{8}|[A-Fa-f0-9]{4})$/,Y=function(_){if(_.match(fl)){(_.length===4||_.length===7)&&(_=_.substr(1)),_.length===3&&(_=_.split(""),_=_[0]+_[0]+_[1]+_[1]+_[2]+_[2]);var x=parseInt(_,16),M=x>>16,L=x>>8&255,O=x&255;return[M,L,O,1]}if(_.match(C)){(_.length===5||_.length===9)&&(_=_.substr(1)),_.length===4&&(_=_.split(""),_=_[0]+_[0]+_[1]+_[1]+_[2]+_[2]+_[3]+_[3]);var F=parseInt(_,16),N=F>>24&255,G=F>>16&255,X=F>>8&255,re=Math.round((F&255)/255*100)/100;return[N,G,X,re]}throw new Error("unknown hex color: "+_)},ne=Y,W=I,ie=w,Pe=g.type,ke=m,We=eo;ie.prototype.hex=function(_){return We(this._rgb,_)},W.hex=function(){for(var _=[],x=arguments.length;x--;)_[x]=arguments[x];return new(Function.prototype.bind.apply(ie,[null].concat(_,["hex"])))},ke.format.hex=ne,ke.autodetect.push({p:4,test:function(_){for(var x=[],M=arguments.length-1;M-- >0;)x[M]=arguments[M+1];if(!x.length&&Pe(_)==="string"&&[3,4,5,6,7,8,9].indexOf(_.length)>=0)return"hex"}});var Xe=g.unpack,tt=g.TWOPI,je=Math.min,Je=Math.sqrt,Et=Math.acos,Bt=function(){for(var _=[],x=arguments.length;x--;)_[x]=arguments[x];var M=Xe(_,"rgb"),L=M[0],O=M[1],F=M[2];L/=255,O/=255,F/=255;var N,G=je(L,O,F),X=(L+O+F)/3,re=X>0?1-G/X:0;return re===0?N=NaN:(N=(L-O+(L-F))/2,N/=Je((L-O)*(L-O)+(L-F)*(O-F)),N=Et(N),F>O&&(N=tt-N),N/=tt),[N*360,re,X]},kn=Bt,ri=g.unpack,Ft=g.limit,et=g.TWOPI,Sr=g.PITHIRD,It=Math.cos,Pi=function(){for(var _=[],x=arguments.length;x--;)_[x]=arguments[x];_=ri(_,"hsi");var M=_[0],L=_[1],O=_[2],F,N,G;return isNaN(M)&&(M=0),isNaN(L)&&(L=0),M>360&&(M-=360),M<0&&(M+=360),M/=360,M<1/3?(G=(1-L)/3,F=(1+L*It(et*M)/It(Sr-et*M))/3,N=1-(G+F)):M<2/3?(M-=1/3,F=(1-L)/3,N=(1+L*It(et*M)/It(Sr-et*M))/3,G=1-(F+N)):(M-=2/3,N=(1-L)/3,G=(1+L*It(et*M)/It(Sr-et*M))/3,F=1-(N+G)),F=Ft(O*F*3),N=Ft(O*N*3),G=Ft(O*G*3),[F*255,N*255,G*255,_.length>3?_[3]:1]},to=Pi,Er=g.unpack,ua=g.type,un=I,gi=w,rs=m,Tn=kn;gi.prototype.hsi=function(){return Tn(this._rgb)},un.hsi=function(){for(var _=[],x=arguments.length;x--;)_[x]=arguments[x];return new(Function.prototype.bind.apply(gi,[null].concat(_,["hsi"])))},rs.format.hsi=to,rs.autodetect.push({p:2,test:function(){for(var _=[],x=arguments.length;x--;)_[x]=arguments[x];if(_=Er(_,"hsi"),ua(_)==="array"&&_.length===3)return"hsi"}});var ha=g.unpack,dl=g.type,no=I,Xu=w,qu=m,ng=Be;Xu.prototype.hsl=function(){return ng(this._rgb)},no.hsl=function(){for(var _=[],x=arguments.length;x--;)_[x]=arguments[x];return new(Function.prototype.bind.apply(Xu,[null].concat(_,["hsl"])))},qu.format.hsl=ct,qu.autodetect.push({p:2,test:function(){for(var _=[],x=arguments.length;x--;)_[x]=arguments[x];if(_=ha(_,"hsl"),dl(_)==="array"&&_.length===3)return"hsl"}});var ig=g.unpack,rg=Math.min,sg=Math.max,ag=function(){for(var _=[],x=arguments.length;x--;)_[x]=arguments[x];_=ig(_,"rgb");var M=_[0],L=_[1],O=_[2],F=rg(M,L,O),N=sg(M,L,O),G=N-F,X,re,de;return de=N/255,N===0?(X=Number.NaN,re=0):(re=G/N,M===N&&(X=(L-O)/G),L===N&&(X=2+(O-M)/G),O===N&&(X=4+(M-L)/G),X*=60,X<0&&(X+=360)),[X,re,de]},og=ag,lg=g.unpack,cg=Math.floor,ug=function(){for(var _,x,M,L,O,F,N=[],G=arguments.length;G--;)N[G]=arguments[G];N=lg(N,"hsv");var X=N[0],re=N[1],de=N[2],Ee,ge,De;if(de*=255,re===0)Ee=ge=De=de;else{X===360&&(X=0),X>360&&(X-=360),X<0&&(X+=360),X/=60;var Ce=cg(X),it=X-Ce,ut=de*(1-re),pt=de*(1-re*it),_t=de*(1-re*(1-it));switch(Ce){case 0:_=[de,_t,ut],Ee=_[0],ge=_[1],De=_[2];break;case 1:x=[pt,de,ut],Ee=x[0],ge=x[1],De=x[2];break;case 2:M=[ut,de,_t],Ee=M[0],ge=M[1],De=M[2];break;case 3:L=[ut,pt,de],Ee=L[0],ge=L[1],De=L[2];break;case 4:O=[_t,ut,de],Ee=O[0],ge=O[1],De=O[2];break;case 5:F=[de,ut,pt],Ee=F[0],ge=F[1],De=F[2];break}}return[Ee,ge,De,N.length>3?N[3]:1]},hg=ug,fg=g.unpack,dg=g.type,pg=I,$u=w,Yu=m,mg=og;$u.prototype.hsv=function(){return mg(this._rgb)},pg.hsv=function(){for(var _=[],x=arguments.length;x--;)_[x]=arguments[x];return new(Function.prototype.bind.apply($u,[null].concat(_,["hsv"])))},Yu.format.hsv=hg,Yu.autodetect.push({p:2,test:function(){for(var _=[],x=arguments.length;x--;)_[x]=arguments[x];if(_=fg(_,"hsv"),dg(_)==="array"&&_.length===3)return"hsv"}});var io={Kn:18,Xn:.95047,Yn:1,Zn:1.08883,t0:.137931034,t1:.206896552,t2:.12841855,t3:.008856452},ss=io,gg=g.unpack,ju=Math.pow,_g=function(){for(var _=[],x=arguments.length;x--;)_[x]=arguments[x];var M=gg(_,"rgb"),L=M[0],O=M[1],F=M[2],N=vg(L,O,F),G=N[0],X=N[1],re=N[2],de=116*X-16;return[de<0?0:de,500*(G-X),200*(X-re)]},pl=function(_){return(_/=255)<=.04045?_/12.92:ju((_+.055)/1.055,2.4)},ml=function(_){return _>ss.t3?ju(_,1/3):_/ss.t2+ss.t0},vg=function(_,x,M){_=pl(_),x=pl(x),M=pl(M);var L=ml((.4124564*_+.3575761*x+.1804375*M)/ss.Xn),O=ml((.2126729*_+.7151522*x+.072175*M)/ss.Yn),F=ml((.0193339*_+.119192*x+.9503041*M)/ss.Zn);return[L,O,F]},Ku=_g,as=io,xg=g.unpack,yg=Math.pow,Mg=function(){for(var _=[],x=arguments.length;x--;)_[x]=arguments[x];_=xg(_,"lab");var M=_[0],L=_[1],O=_[2],F,N,G,X,re,de;return N=(M+16)/116,F=isNaN(L)?N:N+L/500,G=isNaN(O)?N:N-O/200,N=as.Yn*_l(N),F=as.Xn*_l(F),G=as.Zn*_l(G),X=gl(3.2404542*F-1.5371385*N-.4985314*G),re=gl(-.969266*F+1.8760108*N+.041556*G),de=gl(.0556434*F-.2040259*N+1.0572252*G),[X,re,de,_.length>3?_[3]:1]},gl=function(_){return 255*(_<=.00304?12.92*_:1.055*yg(_,1/2.4)-.055)},_l=function(_){return _>as.t1?_*_*_:as.t2*(_-as.t0)},Zu=Mg,bg=g.unpack,Sg=g.type,Eg=I,Ju=w,Qu=m,Tg=Ku;Ju.prototype.lab=function(){return Tg(this._rgb)},Eg.lab=function(){for(var _=[],x=arguments.length;x--;)_[x]=arguments[x];return new(Function.prototype.bind.apply(Ju,[null].concat(_,["lab"])))},Qu.format.lab=Zu,Qu.autodetect.push({p:2,test:function(){for(var _=[],x=arguments.length;x--;)_[x]=arguments[x];if(_=bg(_,"lab"),Sg(_)==="array"&&_.length===3)return"lab"}});var Ag=g.unpack,wg=g.RAD2DEG,Rg=Math.sqrt,Cg=Math.atan2,Lg=Math.round,Pg=function(){for(var _=[],x=arguments.length;x--;)_[x]=arguments[x];var M=Ag(_,"lab"),L=M[0],O=M[1],F=M[2],N=Rg(O*O+F*F),G=(Cg(F,O)*wg+360)%360;return Lg(N*1e4)===0&&(G=Number.NaN),[L,N,G]},eh=Pg,Dg=g.unpack,Ig=Ku,Ug=eh,Ng=function(){for(var _=[],x=arguments.length;x--;)_[x]=arguments[x];var M=Dg(_,"rgb"),L=M[0],O=M[1],F=M[2],N=Ig(L,O,F),G=N[0],X=N[1],re=N[2];return Ug(G,X,re)},Og=Ng,Fg=g.unpack,Bg=g.DEG2RAD,kg=Math.sin,zg=Math.cos,Hg=function(){for(var _=[],x=arguments.length;x--;)_[x]=arguments[x];var M=Fg(_,"lch"),L=M[0],O=M[1],F=M[2];return isNaN(F)&&(F=0),F=F*Bg,[L,zg(F)*O,kg(F)*O]},th=Hg,Gg=g.unpack,Vg=th,Wg=Zu,Xg=function(){for(var _=[],x=arguments.length;x--;)_[x]=arguments[x];_=Gg(_,"lch");var M=_[0],L=_[1],O=_[2],F=Vg(M,L,O),N=F[0],G=F[1],X=F[2],re=Wg(N,G,X),de=re[0],Ee=re[1],ge=re[2];return[de,Ee,ge,_.length>3?_[3]:1]},nh=Xg,qg=g.unpack,$g=nh,Yg=function(){for(var _=[],x=arguments.length;x--;)_[x]=arguments[x];var M=qg(_,"hcl").reverse();return $g.apply(void 0,M)},jg=Yg,Kg=g.unpack,Zg=g.type,ih=I,ro=w,vl=m,rh=Og;ro.prototype.lch=function(){return rh(this._rgb)},ro.prototype.hcl=function(){return rh(this._rgb).reverse()},ih.lch=function(){for(var _=[],x=arguments.length;x--;)_[x]=arguments[x];return new(Function.prototype.bind.apply(ro,[null].concat(_,["lch"])))},ih.hcl=function(){for(var _=[],x=arguments.length;x--;)_[x]=arguments[x];return new(Function.prototype.bind.apply(ro,[null].concat(_,["hcl"])))},vl.format.lch=nh,vl.format.hcl=jg,["lch","hcl"].forEach(function(_){return vl.autodetect.push({p:2,test:function(){for(var x=[],M=arguments.length;M--;)x[M]=arguments[M];if(x=Kg(x,_),Zg(x)==="array"&&x.length===3)return _}})});var Jg={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflower:"#6495ed",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",gold:"#ffd700",goldenrod:"#daa520",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",laserlemon:"#ffff54",lavender:"#e6e6fa",lavenderblush:"#fff0f5",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrod:"#fafad2",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",maroon2:"#7f0000",maroon3:"#b03060",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",purple2:"#7f007f",purple3:"#a020f0",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"},sh=Jg,Qg=w,ah=m,e_=g.type,fa=sh,t_=ne,n_=eo;Qg.prototype.name=function(){for(var _=n_(this._rgb,"rgb"),x=0,M=Object.keys(fa);x<M.length;x+=1){var L=M[x];if(fa[L]===_)return L.toLowerCase()}return _},ah.format.named=function(_){if(_=_.toLowerCase(),fa[_])return t_(fa[_]);throw new Error("unknown color name: "+_)},ah.autodetect.push({p:5,test:function(_){for(var x=[],M=arguments.length-1;M-- >0;)x[M]=arguments[M+1];if(!x.length&&e_(_)==="string"&&fa[_.toLowerCase()])return"named"}});var i_=g.unpack,r_=function(){for(var _=[],x=arguments.length;x--;)_[x]=arguments[x];var M=i_(_,"rgb"),L=M[0],O=M[1],F=M[2];return(L<<16)+(O<<8)+F},s_=r_,a_=g.type,o_=function(_){if(a_(_)=="number"&&_>=0&&_<=16777215){var x=_>>16,M=_>>8&255,L=_&255;return[x,M,L,1]}throw new Error("unknown num color: "+_)},l_=o_,c_=I,oh=w,lh=m,u_=g.type,h_=s_;oh.prototype.num=function(){return h_(this._rgb)},c_.num=function(){for(var _=[],x=arguments.length;x--;)_[x]=arguments[x];return new(Function.prototype.bind.apply(oh,[null].concat(_,["num"])))},lh.format.num=l_,lh.autodetect.push({p:5,test:function(){for(var _=[],x=arguments.length;x--;)_[x]=arguments[x];if(_.length===1&&u_(_[0])==="number"&&_[0]>=0&&_[0]<=16777215)return"num"}});var f_=I,xl=w,ch=m,uh=g.unpack,hh=g.type,fh=Math.round;xl.prototype.rgb=function(_){return _===void 0&&(_=!0),_===!1?this._rgb.slice(0,3):this._rgb.slice(0,3).map(fh)},xl.prototype.rgba=function(_){return _===void 0&&(_=!0),this._rgb.slice(0,4).map(function(x,M){return M<3?_===!1?x:fh(x):x})},f_.rgb=function(){for(var _=[],x=arguments.length;x--;)_[x]=arguments[x];return new(Function.prototype.bind.apply(xl,[null].concat(_,["rgb"])))},ch.format.rgb=function(){for(var _=[],x=arguments.length;x--;)_[x]=arguments[x];var M=uh(_,"rgba");return M[3]===void 0&&(M[3]=1),M},ch.autodetect.push({p:3,test:function(){for(var _=[],x=arguments.length;x--;)_[x]=arguments[x];if(_=uh(_,"rgba"),hh(_)==="array"&&(_.length===3||_.length===4&&hh(_[3])=="number"&&_[3]>=0&&_[3]<=1))return"rgb"}});var so=Math.log,d_=function(_){var x=_/100,M,L,O;return x<66?(M=255,L=x<6?0:-155.25485562709179-.44596950469579133*(L=x-2)+104.49216199393888*so(L),O=x<20?0:-254.76935184120902+.8274096064007395*(O=x-10)+115.67994401066147*so(O)):(M=351.97690566805693+.114206453784165*(M=x-55)-40.25366309332127*so(M),L=325.4494125711974+.07943456536662342*(L=x-50)-28.0852963507957*so(L),O=255),[M,L,O,1]},dh=d_,p_=dh,m_=g.unpack,g_=Math.round,__=function(){for(var _=[],x=arguments.length;x--;)_[x]=arguments[x];for(var M=m_(_,"rgb"),L=M[0],O=M[2],F=1e3,N=4e4,G=.4,X;N-F>G;){X=(N+F)*.5;var re=p_(X);re[2]/re[0]>=O/L?N=X:F=X}return g_(X)},v_=__,yl=I,ao=w,Ml=m,x_=v_;ao.prototype.temp=ao.prototype.kelvin=ao.prototype.temperature=function(){return x_(this._rgb)},yl.temp=yl.kelvin=yl.temperature=function(){for(var _=[],x=arguments.length;x--;)_[x]=arguments[x];return new(Function.prototype.bind.apply(ao,[null].concat(_,["temp"])))},Ml.format.temp=Ml.format.kelvin=Ml.format.temperature=dh;var y_=g.unpack,bl=Math.cbrt,M_=Math.pow,b_=Math.sign,S_=function(){for(var _=[],x=arguments.length;x--;)_[x]=arguments[x];var M=y_(_,"rgb"),L=M[0],O=M[1],F=M[2],N=[Sl(L/255),Sl(O/255),Sl(F/255)],G=N[0],X=N[1],re=N[2],de=bl(.4122214708*G+.5363325363*X+.0514459929*re),Ee=bl(.2119034982*G+.6806995451*X+.1073969566*re),ge=bl(.0883024619*G+.2817188376*X+.6299787005*re);return[.2104542553*de+.793617785*Ee-.0040720468*ge,1.9779984951*de-2.428592205*Ee+.4505937099*ge,.0259040371*de+.7827717662*Ee-.808675766*ge]},ph=S_;function Sl(_){var x=Math.abs(_);return x<.04045?_/12.92:(b_(_)||1)*M_((x+.055)/1.055,2.4)}var E_=g.unpack,oo=Math.pow,T_=Math.sign,A_=function(){for(var _=[],x=arguments.length;x--;)_[x]=arguments[x];_=E_(_,"lab");var M=_[0],L=_[1],O=_[2],F=oo(M+.3963377774*L+.2158037573*O,3),N=oo(M-.1055613458*L-.0638541728*O,3),G=oo(M-.0894841775*L-1.291485548*O,3);return[255*El(4.0767416621*F-3.3077115913*N+.2309699292*G),255*El(-1.2684380046*F+2.6097574011*N-.3413193965*G),255*El(-.0041960863*F-.7034186147*N+1.707614701*G),_.length>3?_[3]:1]},mh=A_;function El(_){var x=Math.abs(_);return x>.0031308?(T_(_)||1)*(1.055*oo(x,1/2.4)-.055):_*12.92}var w_=g.unpack,R_=g.type,C_=I,gh=w,_h=m,L_=ph;gh.prototype.oklab=function(){return L_(this._rgb)},C_.oklab=function(){for(var _=[],x=arguments.length;x--;)_[x]=arguments[x];return new(Function.prototype.bind.apply(gh,[null].concat(_,["oklab"])))},_h.format.oklab=mh,_h.autodetect.push({p:3,test:function(){for(var _=[],x=arguments.length;x--;)_[x]=arguments[x];if(_=w_(_,"oklab"),R_(_)==="array"&&_.length===3)return"oklab"}});var P_=g.unpack,D_=ph,I_=eh,U_=function(){for(var _=[],x=arguments.length;x--;)_[x]=arguments[x];var M=P_(_,"rgb"),L=M[0],O=M[1],F=M[2],N=D_(L,O,F),G=N[0],X=N[1],re=N[2];return I_(G,X,re)},N_=U_,O_=g.unpack,F_=th,B_=mh,k_=function(){for(var _=[],x=arguments.length;x--;)_[x]=arguments[x];_=O_(_,"lch");var M=_[0],L=_[1],O=_[2],F=F_(M,L,O),N=F[0],G=F[1],X=F[2],re=B_(N,G,X),de=re[0],Ee=re[1],ge=re[2];return[de,Ee,ge,_.length>3?_[3]:1]},z_=k_,H_=g.unpack,G_=g.type,V_=I,vh=w,xh=m,W_=N_;vh.prototype.oklch=function(){return W_(this._rgb)},V_.oklch=function(){for(var _=[],x=arguments.length;x--;)_[x]=arguments[x];return new(Function.prototype.bind.apply(vh,[null].concat(_,["oklch"])))},xh.format.oklch=z_,xh.autodetect.push({p:3,test:function(){for(var _=[],x=arguments.length;x--;)_[x]=arguments[x];if(_=H_(_,"oklch"),G_(_)==="array"&&_.length===3)return"oklch"}});var yh=w,X_=g.type;yh.prototype.alpha=function(_,x){return x===void 0&&(x=!1),_!==void 0&&X_(_)==="number"?x?(this._rgb[3]=_,this):new yh([this._rgb[0],this._rgb[1],this._rgb[2],_],"rgb"):this._rgb[3]};var q_=w;q_.prototype.clipped=function(){return this._rgb._clipped||!1};var Tr=w,$_=io;Tr.prototype.darken=function(_){_===void 0&&(_=1);var x=this,M=x.lab();return M[0]-=$_.Kn*_,new Tr(M,"lab").alpha(x.alpha(),!0)},Tr.prototype.brighten=function(_){return _===void 0&&(_=1),this.darken(-_)},Tr.prototype.darker=Tr.prototype.darken,Tr.prototype.brighter=Tr.prototype.brighten;var Y_=w;Y_.prototype.get=function(_){var x=_.split("."),M=x[0],L=x[1],O=this[M]();if(L){var F=M.indexOf(L)-(M.substr(0,2)==="ok"?2:0);if(F>-1)return O[F];throw new Error("unknown channel "+L+" in mode "+M)}else return O};var os=w,j_=g.type,K_=Math.pow,Z_=1e-7,J_=20;os.prototype.luminance=function(_){if(_!==void 0&&j_(_)==="number"){if(_===0)return new os([0,0,0,this._rgb[3]],"rgb");if(_===1)return new os([255,255,255,this._rgb[3]],"rgb");var x=this.luminance(),M="rgb",L=J_,O=function(N,G){var X=N.interpolate(G,.5,M),re=X.luminance();return Math.abs(_-re)<Z_||!L--?X:re>_?O(N,X):O(X,G)},F=(x>_?O(new os([0,0,0]),this):O(this,new os([255,255,255]))).rgb();return new os(F.concat([this._rgb[3]]))}return Q_.apply(void 0,this._rgb.slice(0,3))};var Q_=function(_,x,M){return _=Tl(_),x=Tl(x),M=Tl(M),.2126*_+.7152*x+.0722*M},Tl=function(_){return _/=255,_<=.03928?_/12.92:K_((_+.055)/1.055,2.4)},zn={},Mh=w,bh=g.type,lo=zn,Sh=function(_,x,M){M===void 0&&(M=.5);for(var L=[],O=arguments.length-3;O-- >0;)L[O]=arguments[O+3];var F=L[0]||"lrgb";if(!lo[F]&&!L.length&&(F=Object.keys(lo)[0]),!lo[F])throw new Error("interpolation mode "+F+" is not defined");return bh(_)!=="object"&&(_=new Mh(_)),bh(x)!=="object"&&(x=new Mh(x)),lo[F](_,x,M).alpha(_.alpha()+M*(x.alpha()-_.alpha()))},Eh=w,e0=Sh;Eh.prototype.mix=Eh.prototype.interpolate=function(_,x){x===void 0&&(x=.5);for(var M=[],L=arguments.length-2;L-- >0;)M[L]=arguments[L+2];return e0.apply(void 0,[this,_,x].concat(M))};var Th=w;Th.prototype.premultiply=function(_){_===void 0&&(_=!1);var x=this._rgb,M=x[3];return _?(this._rgb=[x[0]*M,x[1]*M,x[2]*M,M],this):new Th([x[0]*M,x[1]*M,x[2]*M,M],"rgb")};var Al=w,t0=io;Al.prototype.saturate=function(_){_===void 0&&(_=1);var x=this,M=x.lch();return M[1]+=t0.Kn*_,M[1]<0&&(M[1]=0),new Al(M,"lch").alpha(x.alpha(),!0)},Al.prototype.desaturate=function(_){return _===void 0&&(_=1),this.saturate(-_)};var Ah=w,wh=g.type;Ah.prototype.set=function(_,x,M){M===void 0&&(M=!1);var L=_.split("."),O=L[0],F=L[1],N=this[O]();if(F){var G=O.indexOf(F)-(O.substr(0,2)==="ok"?2:0);if(G>-1){if(wh(x)=="string")switch(x.charAt(0)){case"+":N[G]+=+x;break;case"-":N[G]+=+x;break;case"*":N[G]*=+x.substr(1);break;case"/":N[G]/=+x.substr(1);break;default:N[G]=+x}else if(wh(x)==="number")N[G]=x;else throw new Error("unsupported value for Color.set");var X=new Ah(N,O);return M?(this._rgb=X._rgb,this):X}throw new Error("unknown channel "+F+" in mode "+O)}else return N};var n0=w,i0=function(_,x,M){var L=_._rgb,O=x._rgb;return new n0(L[0]+M*(O[0]-L[0]),L[1]+M*(O[1]-L[1]),L[2]+M*(O[2]-L[2]),"rgb")};zn.rgb=i0;var r0=w,wl=Math.sqrt,ls=Math.pow,s0=function(_,x,M){var L=_._rgb,O=L[0],F=L[1],N=L[2],G=x._rgb,X=G[0],re=G[1],de=G[2];return new r0(wl(ls(O,2)*(1-M)+ls(X,2)*M),wl(ls(F,2)*(1-M)+ls(re,2)*M),wl(ls(N,2)*(1-M)+ls(de,2)*M),"rgb")};zn.lrgb=s0;var a0=w,o0=function(_,x,M){var L=_.lab(),O=x.lab();return new a0(L[0]+M*(O[0]-L[0]),L[1]+M*(O[1]-L[1]),L[2]+M*(O[2]-L[2]),"lab")};zn.lab=o0;var Rh=w,cs=function(_,x,M,L){var O,F,N,G;L==="hsl"?(N=_.hsl(),G=x.hsl()):L==="hsv"?(N=_.hsv(),G=x.hsv()):L==="hcg"?(N=_.hcg(),G=x.hcg()):L==="hsi"?(N=_.hsi(),G=x.hsi()):L==="lch"||L==="hcl"?(L="hcl",N=_.hcl(),G=x.hcl()):L==="oklch"&&(N=_.oklch().reverse(),G=x.oklch().reverse());var X,re,de,Ee,ge,De;(L.substr(0,1)==="h"||L==="oklch")&&(O=N,X=O[0],de=O[1],ge=O[2],F=G,re=F[0],Ee=F[1],De=F[2]);var Ce,it,ut,pt;return!isNaN(X)&&!isNaN(re)?(re>X&&re-X>180?pt=re-(X+360):re<X&&X-re>180?pt=re+360-X:pt=re-X,it=X+M*pt):isNaN(X)?isNaN(re)?it=Number.NaN:(it=re,(ge==1||ge==0)&&L!="hsv"&&(Ce=Ee)):(it=X,(De==1||De==0)&&L!="hsv"&&(Ce=de)),Ce===void 0&&(Ce=de+M*(Ee-de)),ut=ge+M*(De-ge),L==="oklch"?new Rh([ut,Ce,it],L):new Rh([it,Ce,ut],L)},l0=cs,Ch=function(_,x,M){return l0(_,x,M,"lch")};zn.lch=Ch,zn.hcl=Ch;var c0=w,u0=function(_,x,M){var L=_.num(),O=x.num();return new c0(L+M*(O-L),"num")};zn.num=u0;var h0=cs,f0=function(_,x,M){return h0(_,x,M,"hcg")};zn.hcg=f0;var d0=cs,p0=function(_,x,M){return d0(_,x,M,"hsi")};zn.hsi=p0;var m0=cs,g0=function(_,x,M){return m0(_,x,M,"hsl")};zn.hsl=g0;var _0=cs,v0=function(_,x,M){return _0(_,x,M,"hsv")};zn.hsv=v0;var x0=w,y0=function(_,x,M){var L=_.oklab(),O=x.oklab();return new x0(L[0]+M*(O[0]-L[0]),L[1]+M*(O[1]-L[1]),L[2]+M*(O[2]-L[2]),"oklab")};zn.oklab=y0;var M0=cs,b0=function(_,x,M){return M0(_,x,M,"oklch")};zn.oklch=b0;var Rl=w,S0=g.clip_rgb,Cl=Math.pow,Ll=Math.sqrt,Pl=Math.PI,Lh=Math.cos,Ph=Math.sin,E0=Math.atan2,T0=function(_,x,M){x===void 0&&(x="lrgb"),M===void 0&&(M=null);var L=_.length;M||(M=Array.from(new Array(L)).map(function(){return 1}));var O=L/M.reduce(function(it,ut){return it+ut});if(M.forEach(function(it,ut){M[ut]*=O}),_=_.map(function(it){return new Rl(it)}),x==="lrgb")return A0(_,M);for(var F=_.shift(),N=F.get(x),G=[],X=0,re=0,de=0;de<N.length;de++)if(N[de]=(N[de]||0)*M[0],G.push(isNaN(N[de])?0:M[0]),x.charAt(de)==="h"&&!isNaN(N[de])){var Ee=N[de]/180*Pl;X+=Lh(Ee)*M[0],re+=Ph(Ee)*M[0]}var ge=F.alpha()*M[0];_.forEach(function(it,ut){var pt=it.get(x);ge+=it.alpha()*M[ut+1];for(var _t=0;_t<N.length;_t++)if(!isNaN(pt[_t]))if(G[_t]+=M[ut+1],x.charAt(_t)==="h"){var hn=pt[_t]/180*Pl;X+=Lh(hn)*M[ut+1],re+=Ph(hn)*M[ut+1]}else N[_t]+=pt[_t]*M[ut+1]});for(var De=0;De<N.length;De++)if(x.charAt(De)==="h"){for(var Ce=E0(re/G[De],X/G[De])/Pl*180;Ce<0;)Ce+=360;for(;Ce>=360;)Ce-=360;N[De]=Ce}else N[De]=N[De]/G[De];return ge/=L,new Rl(N,x).alpha(ge>.99999?1:ge,!0)},A0=function(_,x){for(var M=_.length,L=[0,0,0,0],O=0;O<_.length;O++){var F=_[O],N=x[O]/M,G=F._rgb;L[0]+=Cl(G[0],2)*N,L[1]+=Cl(G[1],2)*N,L[2]+=Cl(G[2],2)*N,L[3]+=G[3]*N}return L[0]=Ll(L[0]),L[1]=Ll(L[1]),L[2]=Ll(L[2]),L[3]>.9999999&&(L[3]=1),new Rl(S0(L))},si=I,us=g.type,w0=Math.pow,Dl=function(_){var x="rgb",M=si("#ccc"),L=0,O=[0,1],F=[],N=[0,0],G=!1,X=[],re=!1,de=0,Ee=1,ge=!1,De={},Ce=!0,it=1,ut=function(_e){if(_e=_e||["#fff","#000"],_e&&us(_e)==="string"&&si.brewer&&si.brewer[_e.toLowerCase()]&&(_e=si.brewer[_e.toLowerCase()]),us(_e)==="array"){_e.length===1&&(_e=[_e[0],_e[0]]),_e=_e.slice(0);for(var ze=0;ze<_e.length;ze++)_e[ze]=si(_e[ze]);F.length=0;for(var at=0;at<_e.length;at++)F.push(at/(_e.length-1))}return Pn(),X=_e},pt=function(_e){if(G!=null){for(var ze=G.length-1,at=0;at<ze&&_e>=G[at];)at++;return at-1}return 0},_t=function(_e){return _e},hn=function(_e){return _e},sn=function(_e,ze){var at,rt;if(ze==null&&(ze=!1),isNaN(_e)||_e===null)return M;if(ze)rt=_e;else if(G&&G.length>2){var fn=pt(_e);rt=fn/(G.length-2)}else Ee!==de?rt=(_e-de)/(Ee-de):rt=1;rt=hn(rt),ze||(rt=_t(rt)),it!==1&&(rt=w0(rt,it)),rt=N[0]+rt*(1-N[0]-N[1]),rt=Math.min(1,Math.max(0,rt));var Pt=Math.floor(rt*1e4);if(Ce&&De[Pt])at=De[Pt];else{if(us(X)==="array")for(var mt=0;mt<F.length;mt++){var vt=F[mt];if(rt<=vt){at=X[mt];break}if(rt>=vt&&mt===F.length-1){at=X[mt];break}if(rt>vt&&rt<F[mt+1]){rt=(rt-vt)/(F[mt+1]-vt),at=si.interpolate(X[mt],X[mt+1],rt,x);break}}else us(X)==="function"&&(at=X(rt));Ce&&(De[Pt]=at)}return at},Pn=function(){return De={}};ut(_);var ht=function(_e){var ze=si(sn(_e));return re&&ze[re]?ze[re]():ze};return ht.classes=function(_e){if(_e!=null){if(us(_e)==="array")G=_e,O=[_e[0],_e[_e.length-1]];else{var ze=si.analyze(O);_e===0?G=[ze.min,ze.max]:G=si.limits(ze,"e",_e)}return ht}return G},ht.domain=function(_e){if(!arguments.length)return O;de=_e[0],Ee=_e[_e.length-1],F=[];var ze=X.length;if(_e.length===ze&&de!==Ee)for(var at=0,rt=Array.from(_e);at<rt.length;at+=1){var fn=rt[at];F.push((fn-de)/(Ee-de))}else{for(var Pt=0;Pt<ze;Pt++)F.push(Pt/(ze-1));if(_e.length>2){var mt=_e.map(function(xt,Mt){return Mt/(_e.length-1)}),vt=_e.map(function(xt){return(xt-de)/(Ee-de)});vt.every(function(xt,Mt){return mt[Mt]===xt})||(hn=function(xt){if(xt<=0||xt>=1)return xt;for(var Mt=0;xt>=vt[Mt+1];)Mt++;var oi=(xt-vt[Mt])/(vt[Mt+1]-vt[Mt]),tr=mt[Mt]+oi*(mt[Mt+1]-mt[Mt]);return tr})}}return O=[de,Ee],ht},ht.mode=function(_e){return arguments.length?(x=_e,Pn(),ht):x},ht.range=function(_e,ze){return ut(_e),ht},ht.out=function(_e){return re=_e,ht},ht.spread=function(_e){return arguments.length?(L=_e,ht):L},ht.correctLightness=function(_e){return _e==null&&(_e=!0),ge=_e,Pn(),ge?_t=function(ze){for(var at=sn(0,!0).lab()[0],rt=sn(1,!0).lab()[0],fn=at>rt,Pt=sn(ze,!0).lab()[0],mt=at+(rt-at)*ze,vt=Pt-mt,xt=0,Mt=1,oi=20;Math.abs(vt)>.01&&oi-- >0;)(function(){return fn&&(vt*=-1),vt<0?(xt=ze,ze+=(Mt-ze)*.5):(Mt=ze,ze+=(xt-ze)*.5),Pt=sn(ze,!0).lab()[0],vt=Pt-mt})();return ze}:_t=function(ze){return ze},ht},ht.padding=function(_e){return _e!=null?(us(_e)==="number"&&(_e=[_e,_e]),N=_e,ht):N},ht.colors=function(_e,ze){arguments.length<2&&(ze="hex");var at=[];if(arguments.length===0)at=X.slice(0);else if(_e===1)at=[ht(.5)];else if(_e>1){var rt=O[0],fn=O[1]-rt;at=R0(0,_e,!1).map(function(Mt){return ht(rt+Mt/(_e-1)*fn)})}else{_=[];var Pt=[];if(G&&G.length>2)for(var mt=1,vt=G.length,xt=1<=vt;xt?mt<vt:mt>vt;xt?mt++:mt--)Pt.push((G[mt-1]+G[mt])*.5);else Pt=O;at=Pt.map(function(Mt){return ht(Mt)})}return si[ze]&&(at=at.map(function(Mt){return Mt[ze]()})),at},ht.cache=function(_e){return _e!=null?(Ce=_e,ht):Ce},ht.gamma=function(_e){return _e!=null?(it=_e,ht):it},ht.nodata=function(_e){return _e!=null?(M=si(_e),ht):M},ht};function R0(_,x,M){for(var L=[],O=_<x,F=M?O?x+1:x-1:x,N=_;O?N<F:N>F;O?N++:N--)L.push(N);return L}var da=w,C0=Dl,L0=function(_){for(var x=[1,1],M=1;M<_;M++){for(var L=[1],O=1;O<=x.length;O++)L[O]=(x[O]||0)+x[O-1];x=L}return x},P0=function(_){var x,M,L,O,F,N,G;if(_=_.map(function(ge){return new da(ge)}),_.length===2)x=_.map(function(ge){return ge.lab()}),F=x[0],N=x[1],O=function(ge){var De=[0,1,2].map(function(Ce){return F[Ce]+ge*(N[Ce]-F[Ce])});return new da(De,"lab")};else if(_.length===3)M=_.map(function(ge){return ge.lab()}),F=M[0],N=M[1],G=M[2],O=function(ge){var De=[0,1,2].map(function(Ce){return(1-ge)*(1-ge)*F[Ce]+2*(1-ge)*ge*N[Ce]+ge*ge*G[Ce]});return new da(De,"lab")};else if(_.length===4){var X;L=_.map(function(ge){return ge.lab()}),F=L[0],N=L[1],G=L[2],X=L[3],O=function(ge){var De=[0,1,2].map(function(Ce){return(1-ge)*(1-ge)*(1-ge)*F[Ce]+3*(1-ge)*(1-ge)*ge*N[Ce]+3*(1-ge)*ge*ge*G[Ce]+ge*ge*ge*X[Ce]});return new da(De,"lab")}}else if(_.length>=5){var re,de,Ee;re=_.map(function(ge){return ge.lab()}),Ee=_.length-1,de=L0(Ee),O=function(ge){var De=1-ge,Ce=[0,1,2].map(function(it){return re.reduce(function(ut,pt,_t){return ut+de[_t]*Math.pow(De,Ee-_t)*Math.pow(ge,_t)*pt[it]},0)});return new da(Ce,"lab")}}else throw new RangeError("No point in running bezier with only one color.");return O},D0=function(_){var x=P0(_);return x.scale=function(){return C0(x)},x},Il=I,ai=function(_,x,M){if(!ai[M])throw new Error("unknown blend mode "+M);return ai[M](_,x)},Qi=function(_){return function(x,M){var L=Il(M).rgb(),O=Il(x).rgb();return Il.rgb(_(L,O))}},er=function(_){return function(x,M){var L=[];return L[0]=_(x[0],M[0]),L[1]=_(x[1],M[1]),L[2]=_(x[2],M[2]),L}},I0=function(_){return _},U0=function(_,x){return _*x/255},N0=function(_,x){return _>x?x:_},O0=function(_,x){return _>x?_:x},F0=function(_,x){return 255*(1-(1-_/255)*(1-x/255))},B0=function(_,x){return x<128?2*_*x/255:255*(1-2*(1-_/255)*(1-x/255))},k0=function(_,x){return 255*(1-(1-x/255)/(_/255))},z0=function(_,x){return _===255?255:(_=255*(x/255)/(1-_/255),_>255?255:_)};ai.normal=Qi(er(I0)),ai.multiply=Qi(er(U0)),ai.screen=Qi(er(F0)),ai.overlay=Qi(er(B0)),ai.darken=Qi(er(N0)),ai.lighten=Qi(er(O0)),ai.dodge=Qi(er(z0)),ai.burn=Qi(er(k0));for(var H0=ai,Ul=g.type,G0=g.clip_rgb,V0=g.TWOPI,W0=Math.pow,X0=Math.sin,q0=Math.cos,Dh=I,$0=function(_,x,M,L,O){_===void 0&&(_=300),x===void 0&&(x=-1.5),M===void 0&&(M=1),L===void 0&&(L=1),O===void 0&&(O=[0,1]);var F=0,N;Ul(O)==="array"?N=O[1]-O[0]:(N=0,O=[O,O]);var G=function(X){var re=V0*((_+120)/360+x*X),de=W0(O[0]+N*X,L),Ee=F!==0?M[0]+X*F:M,ge=Ee*de*(1-de)/2,De=q0(re),Ce=X0(re),it=de+ge*(-.14861*De+1.78277*Ce),ut=de+ge*(-.29227*De-.90649*Ce),pt=de+ge*(1.97294*De);return Dh(G0([it*255,ut*255,pt*255,1]))};return G.start=function(X){return X==null?_:(_=X,G)},G.rotations=function(X){return X==null?x:(x=X,G)},G.gamma=function(X){return X==null?L:(L=X,G)},G.hue=function(X){return X==null?M:(M=X,Ul(M)==="array"?(F=M[1]-M[0],F===0&&(M=M[1])):F=0,G)},G.lightness=function(X){return X==null?O:(Ul(X)==="array"?(O=X,N=X[1]-X[0]):(O=[X,X],N=0),G)},G.scale=function(){return Dh.scale(G)},G.hue(M),G},Y0=w,j0="0123456789abcdef",K0=Math.floor,Z0=Math.random,J0=function(){for(var _="#",x=0;x<6;x++)_+=j0.charAt(K0(Z0()*16));return new Y0(_,"hex")},Nl=c,Ih=Math.log,Q0=Math.pow,ev=Math.floor,tv=Math.abs,Uh=function(_,x){x===void 0&&(x=null);var M={min:Number.MAX_VALUE,max:Number.MAX_VALUE*-1,sum:0,values:[],count:0};return Nl(_)==="object"&&(_=Object.values(_)),_.forEach(function(L){x&&Nl(L)==="object"&&(L=L[x]),L!=null&&!isNaN(L)&&(M.values.push(L),M.sum+=L,L<M.min&&(M.min=L),L>M.max&&(M.max=L),M.count+=1)}),M.domain=[M.min,M.max],M.limits=function(L,O){return Nh(M,L,O)},M},Nh=function(_,x,M){x===void 0&&(x="equal"),M===void 0&&(M=7),Nl(_)=="array"&&(_=Uh(_));var L=_.min,O=_.max,F=_.values.sort(function(Fl,Bl){return Fl-Bl});if(M===1)return[L,O];var N=[];if(x.substr(0,1)==="c"&&(N.push(L),N.push(O)),x.substr(0,1)==="e"){N.push(L);for(var G=1;G<M;G++)N.push(L+G/M*(O-L));N.push(O)}else if(x.substr(0,1)==="l"){if(L<=0)throw new Error("Logarithmic scales are only possible for values > 0");var X=Math.LOG10E*Ih(L),re=Math.LOG10E*Ih(O);N.push(L);for(var de=1;de<M;de++)N.push(Q0(10,X+de/M*(re-X)));N.push(O)}else if(x.substr(0,1)==="q"){N.push(L);for(var Ee=1;Ee<M;Ee++){var ge=(F.length-1)*Ee/M,De=ev(ge);if(De===ge)N.push(F[De]);else{var Ce=ge-De;N.push(F[De]*(1-Ce)+F[De+1]*Ce)}}N.push(O)}else if(x.substr(0,1)==="k"){var it,ut=F.length,pt=new Array(ut),_t=new Array(M),hn=!0,sn=0,Pn=null;Pn=[],Pn.push(L);for(var ht=1;ht<M;ht++)Pn.push(L+ht/M*(O-L));for(Pn.push(O);hn;){for(var _e=0;_e<M;_e++)_t[_e]=0;for(var ze=0;ze<ut;ze++)for(var at=F[ze],rt=Number.MAX_VALUE,fn=void 0,Pt=0;Pt<M;Pt++){var mt=tv(Pn[Pt]-at);mt<rt&&(rt=mt,fn=Pt),_t[fn]++,pt[ze]=fn}for(var vt=new Array(M),xt=0;xt<M;xt++)vt[xt]=null;for(var Mt=0;Mt<ut;Mt++)it=pt[Mt],vt[it]===null?vt[it]=F[Mt]:vt[it]+=F[Mt];for(var oi=0;oi<M;oi++)vt[oi]*=1/_t[oi];hn=!1;for(var tr=0;tr<M;tr++)if(vt[tr]!==Pn[tr]){hn=!0;break}Pn=vt,sn++,sn>200&&(hn=!1)}for(var nr={},hs=0;hs<M;hs++)nr[hs]=[];for(var fs=0;fs<ut;fs++)it=pt[fs],nr[it].push(F[fs]);for(var Ii=[],Ar=0;Ar<M;Ar++)Ii.push(nr[Ar][0]),Ii.push(nr[Ar][nr[Ar].length-1]);Ii=Ii.sort(function(Fl,Bl){return Fl-Bl}),N.push(Ii[0]);for(var pa=1;pa<Ii.length;pa+=2){var wr=Ii[pa];!isNaN(wr)&&N.indexOf(wr)===-1&&N.push(wr)}}return N},Oh={analyze:Uh,limits:Nh},Fh=w,nv=function(_,x){_=new Fh(_),x=new Fh(x);var M=_.luminance(),L=x.luminance();return M>L?(M+.05)/(L+.05):(L+.05)/(M+.05)},Bh=w,Di=Math.sqrt,qt=Math.pow,iv=Math.min,rv=Math.max,kh=Math.atan2,zh=Math.abs,co=Math.cos,Hh=Math.sin,sv=Math.exp,Gh=Math.PI,av=function(_,x,M,L,O){M===void 0&&(M=1),L===void 0&&(L=1),O===void 0&&(O=1);var F=function(wr){return 360*wr/(2*Gh)},N=function(wr){return 2*Gh*wr/360};_=new Bh(_),x=new Bh(x);var G=Array.from(_.lab()),X=G[0],re=G[1],de=G[2],Ee=Array.from(x.lab()),ge=Ee[0],De=Ee[1],Ce=Ee[2],it=(X+ge)/2,ut=Di(qt(re,2)+qt(de,2)),pt=Di(qt(De,2)+qt(Ce,2)),_t=(ut+pt)/2,hn=.5*(1-Di(qt(_t,7)/(qt(_t,7)+qt(25,7)))),sn=re*(1+hn),Pn=De*(1+hn),ht=Di(qt(sn,2)+qt(de,2)),_e=Di(qt(Pn,2)+qt(Ce,2)),ze=(ht+_e)/2,at=F(kh(de,sn)),rt=F(kh(Ce,Pn)),fn=at>=0?at:at+360,Pt=rt>=0?rt:rt+360,mt=zh(fn-Pt)>180?(fn+Pt+360)/2:(fn+Pt)/2,vt=1-.17*co(N(mt-30))+.24*co(N(2*mt))+.32*co(N(3*mt+6))-.2*co(N(4*mt-63)),xt=Pt-fn;xt=zh(xt)<=180?xt:Pt<=fn?xt+360:xt-360,xt=2*Di(ht*_e)*Hh(N(xt)/2);var Mt=ge-X,oi=_e-ht,tr=1+.015*qt(it-50,2)/Di(20+qt(it-50,2)),nr=1+.045*ze,hs=1+.015*ze*vt,fs=30*sv(-qt((mt-275)/25,2)),Ii=2*Di(qt(ze,7)/(qt(ze,7)+qt(25,7))),Ar=-Ii*Hh(2*N(fs)),pa=Di(qt(Mt/(M*tr),2)+qt(oi/(L*nr),2)+qt(xt/(O*hs),2)+Ar*(oi/(L*nr))*(xt/(O*hs)));return rv(0,iv(100,pa))},Vh=w,ov=function(_,x,M){M===void 0&&(M="lab"),_=new Vh(_),x=new Vh(x);var L=_.get(M),O=x.get(M),F=0;for(var N in L){var G=(L[N]||0)-(O[N]||0);F+=G*G}return Math.sqrt(F)},lv=w,cv=function(){for(var _=[],x=arguments.length;x--;)_[x]=arguments[x];try{return new(Function.prototype.bind.apply(lv,[null].concat(_))),!0}catch{return!1}},Wh=I,Xh=Dl,uv={cool:function(){return Xh([Wh.hsl(180,1,.9),Wh.hsl(250,.7,.4)])},hot:function(){return Xh(["#000","#f00","#ff0","#fff"]).mode("rgb")}},uo={OrRd:["#fff7ec","#fee8c8","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#b30000","#7f0000"],PuBu:["#fff7fb","#ece7f2","#d0d1e6","#a6bddb","#74a9cf","#3690c0","#0570b0","#045a8d","#023858"],BuPu:["#f7fcfd","#e0ecf4","#bfd3e6","#9ebcda","#8c96c6","#8c6bb1","#88419d","#810f7c","#4d004b"],Oranges:["#fff5eb","#fee6ce","#fdd0a2","#fdae6b","#fd8d3c","#f16913","#d94801","#a63603","#7f2704"],BuGn:["#f7fcfd","#e5f5f9","#ccece6","#99d8c9","#66c2a4","#41ae76","#238b45","#006d2c","#00441b"],YlOrBr:["#ffffe5","#fff7bc","#fee391","#fec44f","#fe9929","#ec7014","#cc4c02","#993404","#662506"],YlGn:["#ffffe5","#f7fcb9","#d9f0a3","#addd8e","#78c679","#41ab5d","#238443","#006837","#004529"],Reds:["#fff5f0","#fee0d2","#fcbba1","#fc9272","#fb6a4a","#ef3b2c","#cb181d","#a50f15","#67000d"],RdPu:["#fff7f3","#fde0dd","#fcc5c0","#fa9fb5","#f768a1","#dd3497","#ae017e","#7a0177","#49006a"],Greens:["#f7fcf5","#e5f5e0","#c7e9c0","#a1d99b","#74c476","#41ab5d","#238b45","#006d2c","#00441b"],YlGnBu:["#ffffd9","#edf8b1","#c7e9b4","#7fcdbb","#41b6c4","#1d91c0","#225ea8","#253494","#081d58"],Purples:["#fcfbfd","#efedf5","#dadaeb","#bcbddc","#9e9ac8","#807dba","#6a51a3","#54278f","#3f007d"],GnBu:["#f7fcf0","#e0f3db","#ccebc5","#a8ddb5","#7bccc4","#4eb3d3","#2b8cbe","#0868ac","#084081"],Greys:["#ffffff","#f0f0f0","#d9d9d9","#bdbdbd","#969696","#737373","#525252","#252525","#000000"],YlOrRd:["#ffffcc","#ffeda0","#fed976","#feb24c","#fd8d3c","#fc4e2a","#e31a1c","#bd0026","#800026"],PuRd:["#f7f4f9","#e7e1ef","#d4b9da","#c994c7","#df65b0","#e7298a","#ce1256","#980043","#67001f"],Blues:["#f7fbff","#deebf7","#c6dbef","#9ecae1","#6baed6","#4292c6","#2171b5","#08519c","#08306b"],PuBuGn:["#fff7fb","#ece2f0","#d0d1e6","#a6bddb","#67a9cf","#3690c0","#02818a","#016c59","#014636"],Viridis:["#440154","#482777","#3f4a8a","#31678e","#26838f","#1f9d8a","#6cce5a","#b6de2b","#fee825"],Spectral:["#9e0142","#d53e4f","#f46d43","#fdae61","#fee08b","#ffffbf","#e6f598","#abdda4","#66c2a5","#3288bd","#5e4fa2"],RdYlGn:["#a50026","#d73027","#f46d43","#fdae61","#fee08b","#ffffbf","#d9ef8b","#a6d96a","#66bd63","#1a9850","#006837"],RdBu:["#67001f","#b2182b","#d6604d","#f4a582","#fddbc7","#f7f7f7","#d1e5f0","#92c5de","#4393c3","#2166ac","#053061"],PiYG:["#8e0152","#c51b7d","#de77ae","#f1b6da","#fde0ef","#f7f7f7","#e6f5d0","#b8e186","#7fbc41","#4d9221","#276419"],PRGn:["#40004b","#762a83","#9970ab","#c2a5cf","#e7d4e8","#f7f7f7","#d9f0d3","#a6dba0","#5aae61","#1b7837","#00441b"],RdYlBu:["#a50026","#d73027","#f46d43","#fdae61","#fee090","#ffffbf","#e0f3f8","#abd9e9","#74add1","#4575b4","#313695"],BrBG:["#543005","#8c510a","#bf812d","#dfc27d","#f6e8c3","#f5f5f5","#c7eae5","#80cdc1","#35978f","#01665e","#003c30"],RdGy:["#67001f","#b2182b","#d6604d","#f4a582","#fddbc7","#ffffff","#e0e0e0","#bababa","#878787","#4d4d4d","#1a1a1a"],PuOr:["#7f3b08","#b35806","#e08214","#fdb863","#fee0b6","#f7f7f7","#d8daeb","#b2abd2","#8073ac","#542788","#2d004b"],Set2:["#66c2a5","#fc8d62","#8da0cb","#e78ac3","#a6d854","#ffd92f","#e5c494","#b3b3b3"],Accent:["#7fc97f","#beaed4","#fdc086","#ffff99","#386cb0","#f0027f","#bf5b17","#666666"],Set1:["#e41a1c","#377eb8","#4daf4a","#984ea3","#ff7f00","#ffff33","#a65628","#f781bf","#999999"],Set3:["#8dd3c7","#ffffb3","#bebada","#fb8072","#80b1d3","#fdb462","#b3de69","#fccde5","#d9d9d9","#bc80bd","#ccebc5","#ffed6f"],Dark2:["#1b9e77","#d95f02","#7570b3","#e7298a","#66a61e","#e6ab02","#a6761d","#666666"],Paired:["#a6cee3","#1f78b4","#b2df8a","#33a02c","#fb9a99","#e31a1c","#fdbf6f","#ff7f00","#cab2d6","#6a3d9a","#ffff99","#b15928"],Pastel2:["#b3e2cd","#fdcdac","#cbd5e8","#f4cae4","#e6f5c9","#fff2ae","#f1e2cc","#cccccc"],Pastel1:["#fbb4ae","#b3cde3","#ccebc5","#decbe4","#fed9a6","#ffffcc","#e5d8bd","#fddaec","#f2f2f2"]},Ol=0,qh=Object.keys(uo);Ol<qh.length;Ol+=1){var $h=qh[Ol];uo[$h.toLowerCase()]=uo[$h]}var hv=uo,rn=I;rn.average=T0,rn.bezier=D0,rn.blend=H0,rn.cubehelix=$0,rn.mix=rn.interpolate=Sh,rn.random=J0,rn.scale=Dl,rn.analyze=Oh.analyze,rn.contrast=nv,rn.deltaE=av,rn.distance=ov,rn.limits=Oh.limits,rn.valid=cv,rn.scales=uv,rn.colors=sh,rn.brewer=hv;var fv=rn;return fv})})(nm);var s1=nm.exports;const bc=r1(s1);function Gi(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function im(s,e){s.prototype=Object.create(e.prototype),s.prototype.constructor=s,s.__proto__=e}/*!
 * GSAP 3.11.5
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Xn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Js={duration:.5,overwrite:!1,delay:0},Tu,Sn,Zt,ei=1e8,Rt=1/ei,Yc=Math.PI*2,a1=Yc/4,o1=0,rm=Math.sqrt,l1=Math.cos,c1=Math.sin,ln=function(e){return typeof e=="string"},Vt=function(e){return typeof e=="function"},Ki=function(e){return typeof e=="number"},Au=function(e){return typeof e>"u"},Ai=function(e){return typeof e=="object"},Nn=function(e){return e!==!1},wu=function(){return typeof window<"u"},Fo=function(e){return Vt(e)||ln(e)},sm=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},En=Array.isArray,jc=/(?:-?\.?\d|\.)+/gi,am=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Os=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Sc=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,om=/[+-]=-?[.\d]+/,lm=/[^,'"\[\]\s]+/gi,u1=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,kt,Zn,Kc,Ru,qn={},jo={},cm,um=function(e){return(jo=Jr(e,qn))&&Bn},Cu=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Ko=function(e,t){return!t&&console.warn(e)},hm=function(e,t){return e&&(qn[e]=t)&&jo&&(jo[e]=t)||qn},Ha=function(){return 0},h1={suppressEvents:!0,isStart:!0,kill:!1},Go={suppressEvents:!0,kill:!1},f1={suppressEvents:!0},Lu={},_r=[],Zc={},fm,Vn={},Ec={},Vd=30,Vo=[],Pu="",Du=function(e){var t=e[0],n,i;if(Ai(t)||Vt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=Vo.length;i--&&!Vo[i].targetTest(t););n=Vo[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new Om(e[i],n)))||e.splice(i,1);return e},Xr=function(e){return e._gsap||Du(ti(e))[0]._gsap},dm=function(e,t,n){return(n=e[t])&&Vt(n)?e[t]():Au(n)&&e.getAttribute&&e.getAttribute(t)||n},On=function(e,t){return(e=e.split(",")).forEach(t)||e},Xt=function(e){return Math.round(e*1e5)/1e5||0},pn=function(e){return Math.round(e*1e7)/1e7||0},Hs=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},d1=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},Zo=function(){var e=_r.length,t=_r.slice(0),n,i;for(Zc={},_r.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},pm=function(e,t,n,i){_r.length&&!Sn&&Zo(),e.render(t,n,i||Sn&&t<0&&(e._initted||e._startAt)),_r.length&&!Sn&&Zo()},mm=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(lm).length<2?t:ln(e)?e.trim():e},gm=function(e){return e},ii=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},p1=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},Jr=function(e,t){for(var n in t)e[n]=t[n];return e},Wd=function s(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=Ai(t[n])?s(e[n]||(e[n]={}),t[n]):t[n]);return e},Jo=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},Ia=function(e){var t=e.parent||kt,n=e.keyframes?p1(En(e.keyframes)):ii;if(Nn(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},m1=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},_m=function(e,t,n,i,r){n===void 0&&(n="_first"),i===void 0&&(i="_last");var a=e[i],o;if(r)for(o=t[r];a&&a[r]>o;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=a,t.parent=t._dp=e,t},ll=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var r=t._prev,a=t._next;r?r._next=a:e[n]===t&&(e[n]=a),a?a._prev=r:e[i]===t&&(e[i]=r),t._next=t._prev=t.parent=null},xr=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove(e),e._act=0},qr=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},g1=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Jc=function(e,t,n,i){return e._startAt&&(Sn?e._startAt.revert(Go):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},_1=function s(e){return!e||e._ts&&s(e.parent)},Xd=function(e){return e._repeat?Qs(e._tTime,e=e.duration()+e._rDelay)*e:0},Qs=function(e,t){var n=Math.floor(e/=t);return e&&n===e?n-1:n},Qo=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},cl=function(e){return e._end=pn(e._start+(e._tDur/Math.abs(e._ts||e._rts||Rt)||0))},ul=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=pn(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),cl(e),n._dirty||qr(n,e)),e},vm=function(e,t){var n;if((t._time||t._initted&&!t._dur)&&(n=Qo(e.rawTime(),t),(!t._dur||Ka(0,t.totalDuration(),n)-t._tTime>Rt)&&t.render(n,!0)),qr(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-Rt}},Mi=function(e,t,n,i){return t.parent&&xr(t),t._start=pn((Ki(n)?n:n||e!==kt?jn(e,n,t):e._time)+t._delay),t._end=pn(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),_m(e,t,"_first","_last",e._sort?"_start":0),Qc(t)||(e._recent=t),i||vm(e,t),e._ts<0&&ul(e,e._tTime),e},xm=function(e,t){return(qn.ScrollTrigger||Cu("scrollTrigger",t))&&qn.ScrollTrigger.create(t,e)},ym=function(e,t,n,i,r){if(Uu(e,t,r),!e._initted)return 1;if(!n&&e._pt&&!Sn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&fm!==Wn.frame)return _r.push(e),e._lazy=[r,i],1},v1=function s(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||s(t))},Qc=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},x1=function(e,t,n,i){var r=e.ratio,a=t<0||!t&&(!e._start&&v1(e)&&!(!e._initted&&Qc(e))||(e._ts<0||e._dp._ts<0)&&!Qc(e))?0:1,o=e._rDelay,l=0,c,u,h;if(o&&e._repeat&&(l=Ka(0,e._tDur,t),u=Qs(l,o),e._yoyo&&u&1&&(a=1-a),u!==Qs(e._tTime,o)&&(r=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==r||Sn||i||e._zTime===Rt||!t&&e._zTime){if(!e._initted&&ym(e,t,i,n,l))return;for(h=e._zTime,e._zTime=t||(n?Rt:0),n||(n=t&&!h),e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=l,c=e._pt;c;)c.r(a,c.d),c=c._next;t<0&&Jc(e,t,n,!0),e._onUpdate&&!n&&ni(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&ni(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&xr(e,1),!n&&!Sn&&(ni(e,a?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},y1=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},ea=function(e,t,n,i){var r=e._repeat,a=pn(t)||0,o=e._tTime/e._tDur;return o&&!i&&(e._time*=a/e._dur),e._dur=a,e._tDur=r?r<0?1e10:pn(a*(r+1)+e._rDelay*r):a,o>0&&!i&&ul(e,e._tTime=e._tDur*o),e.parent&&cl(e),n||qr(e.parent,e),e},qd=function(e){return e instanceof In?qr(e):ea(e,e._dur)},M1={_start:0,endTime:Ha,totalDuration:Ha},jn=function s(e,t,n){var i=e.labels,r=e._recent||M1,a=e.duration()>=ei?r.endTime(!1):e._dur,o,l,c;return ln(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",o=t.indexOf("="),l==="<"||l===">"?(o>=0&&(t=t.replace(/=/,"")),(l==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(o<0?r:n).totalDuration()/100:1)):o<0?(t in i||(i[t]=a),i[t]):(l=parseFloat(t.charAt(o-1)+t.substr(o+1)),c&&n&&(l=l/100*(En(n)?n[0]:n).totalDuration()),o>1?s(e,t.substr(0,o-1),n)+l:a+l)):t==null?a:+t},Ua=function(e,t,n){var i=Ki(t[1]),r=(i?2:1)+(e<2?0:1),a=t[r],o,l;if(i&&(a.duration=t[1]),a.parent=n,e){for(o=a,l=n;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=Nn(l.vars.inherit)&&l.parent;a.immediateRender=Nn(o.immediateRender),e<2?a.runBackwards=1:a.startAt=t[r-1]}return new en(t[0],a,t[r+1])},Mr=function(e,t){return e||e===0?t(e):t},Ka=function(e,t,n){return n<e?e:n>t?t:n},bn=function(e,t){return!ln(e)||!(t=u1.exec(e))?"":t[1]},b1=function(e,t,n){return Mr(n,function(i){return Ka(e,t,i)})},eu=[].slice,Mm=function(e,t){return e&&Ai(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Ai(e[0]))&&!e.nodeType&&e!==Zn},S1=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var r;return ln(i)&&!t||Mm(i,1)?(r=n).push.apply(r,ti(i)):n.push(i)})||n},ti=function(e,t,n){return Zt&&!t&&Zt.selector?Zt.selector(e):ln(e)&&!n&&(Kc||!ta())?eu.call((t||Ru).querySelectorAll(e),0):En(e)?S1(e,n):Mm(e)?eu.call(e,0):e?[e]:[]},tu=function(e){return e=ti(e)[0]||Ko("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return ti(t,n.querySelectorAll?n:n===e?Ko("Invalid scope")||Ru.createElement("div"):e)}},bm=function(e){return e.sort(function(){return .5-Math.random()})},Sm=function(e){if(Vt(e))return e;var t=Ai(e)?e:{each:e},n=$r(t.ease),i=t.from||0,r=parseFloat(t.base)||0,a={},o=i>0&&i<1,l=isNaN(i)||o,c=t.axis,u=i,h=i;return ln(i)?u=h={center:.5,edges:.5,end:1}[i]||0:!o&&l&&(u=i[0],h=i[1]),function(f,d,v){var g=(v||t).length,m=a[g],p,S,y,T,E,w,D,I,b;if(!m){if(b=t.grid==="auto"?0:(t.grid||[1,ei])[1],!b){for(D=-ei;D<(D=v[b++].getBoundingClientRect().left)&&b<g;);b--}for(m=a[g]=[],p=l?Math.min(b,g)*u-.5:i%b,S=b===ei?0:l?g*h/b-.5:i/b|0,D=0,I=ei,w=0;w<g;w++)y=w%b-p,T=S-(w/b|0),m[w]=E=c?Math.abs(c==="y"?T:y):rm(y*y+T*T),E>D&&(D=E),E<I&&(I=E);i==="random"&&bm(m),m.max=D-I,m.min=I,m.v=g=(parseFloat(t.amount)||parseFloat(t.each)*(b>g?g-1:c?c==="y"?g/b:b:Math.max(b,g/b))||0)*(i==="edges"?-1:1),m.b=g<0?r-g:r,m.u=bn(t.amount||t.each)||0,n=n&&g<0?Im(n):n}return g=(m[f]-m.min)/m.max||0,pn(m.b+(n?n(g):g)*m.v)+m.u}},nu=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=pn(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(Ki(n)?0:bn(n))}},Em=function(e,t){var n=En(e),i,r;return!n&&Ai(e)&&(i=n=e.radius||ei,e.values?(e=ti(e.values),(r=!Ki(e[0]))&&(i*=i)):e=nu(e.increment)),Mr(t,n?Vt(e)?function(a){return r=e(a),Math.abs(r-a)<=i?r:a}:function(a){for(var o=parseFloat(r?a.x:a),l=parseFloat(r?a.y:0),c=ei,u=0,h=e.length,f,d;h--;)r?(f=e[h].x-o,d=e[h].y-l,f=f*f+d*d):f=Math.abs(e[h]-o),f<c&&(c=f,u=h);return u=!i||c<=i?e[u]:a,r||u===a||Ki(a)?u:u+bn(a)}:nu(e))},Tm=function(e,t,n,i){return Mr(En(e)?!t:n===!0?!!(n=0):!i,function(){return En(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},E1=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(r,a){return a(r)},i)}},T1=function(e,t){return function(n){return e(parseFloat(n))+(t||bn(n))}},A1=function(e,t,n){return wm(e,t,0,1,n)},Am=function(e,t,n){return Mr(n,function(i){return e[~~t(i)]})},w1=function s(e,t,n){var i=t-e;return En(e)?Am(e,s(0,e.length),t):Mr(n,function(r){return(i+(r-e)%i)%i+e})},R1=function s(e,t,n){var i=t-e,r=i*2;return En(e)?Am(e,s(0,e.length-1),t):Mr(n,function(a){return a=(r+(a-e)%r)%r||0,e+(a>i?r-a:a)})},Ga=function(e){for(var t=0,n="",i,r,a,o;~(i=e.indexOf("random(",t));)a=e.indexOf(")",i),o=e.charAt(i+7)==="[",r=e.substr(i+7,a-i-7).match(o?lm:jc),n+=e.substr(t,i-t)+Tm(o?r:+r[0],o?0:+r[1],+r[2]||1e-5),t=a+1;return n+e.substr(t,e.length-t)},wm=function(e,t,n,i,r){var a=t-e,o=i-n;return Mr(r,function(l){return n+((l-e)/a*o||0)})},C1=function s(e,t,n,i){var r=isNaN(e+t)?0:function(d){return(1-d)*e+d*t};if(!r){var a=ln(e),o={},l,c,u,h,f;if(n===!0&&(i=1)&&(n=null),a)e={p:e},t={p:t};else if(En(e)&&!En(t)){for(u=[],h=e.length,f=h-2,c=1;c<h;c++)u.push(s(e[c-1],e[c]));h--,r=function(v){v*=h;var g=Math.min(f,~~v);return u[g](v-g)},n=t}else i||(e=Jr(En(e)?[]:{},e));if(!u){for(l in t)Iu.call(o,e,l,"get",t[l]);r=function(v){return Fu(v,o)||(a?e.p:e)}}}return Mr(n,r)},$d=function(e,t,n){var i=e.labels,r=ei,a,o,l;for(a in i)o=i[a]-t,o<0==!!n&&o&&r>(o=Math.abs(o))&&(l=a,r=o);return l},ni=function(e,t,n){var i=e.vars,r=i[t],a=Zt,o=e._ctx,l,c,u;if(r)return l=i[t+"Params"],c=i.callbackScope||e,n&&_r.length&&Zo(),o&&(Zt=o),u=l?r.apply(c,l):r.call(c),Zt=a,u},wa=function(e){return xr(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Sn),e.progress()<1&&ni(e,"onInterrupt"),e},Fs,Rm=[],Cm=function(e){if(!wu()){Rm.push(e);return}e=!e.name&&e.default||e;var t=e.name,n=Vt(e),i=t&&!n&&e.init?function(){this._props=[]}:e,r={init:Ha,render:Fu,add:Iu,kill:X1,modifier:W1,rawVars:0},a={targetTest:0,get:0,getSetter:Ou,aliases:{},register:0};if(ta(),e!==i){if(Vn[t])return;ii(i,ii(Jo(e,r),a)),Jr(i.prototype,Jr(r,Jo(e,a))),Vn[i.prop=t]=i,e.targetTest&&(Vo.push(i),Lu[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}hm(t,i),e.register&&e.register(Bn,i,Fn)},At=255,Ra={aqua:[0,At,At],lime:[0,At,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,At],navy:[0,0,128],white:[At,At,At],olive:[128,128,0],yellow:[At,At,0],orange:[At,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[At,0,0],pink:[At,192,203],cyan:[0,At,At],transparent:[At,At,At,0]},Tc=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*At+.5|0},Lm=function(e,t,n){var i=e?Ki(e)?[e>>16,e>>8&At,e&At]:0:Ra.black,r,a,o,l,c,u,h,f,d,v;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Ra[e])i=Ra[e];else if(e.charAt(0)==="#"){if(e.length<6&&(r=e.charAt(1),a=e.charAt(2),o=e.charAt(3),e="#"+r+r+a+a+o+o+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&At,i&At,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&At,e&At]}else if(e.substr(0,3)==="hsl"){if(i=v=e.match(jc),!t)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,a=u<=.5?u*(c+1):u+c-u*c,r=u*2-a,i.length>3&&(i[3]*=1),i[0]=Tc(l+1/3,r,a),i[1]=Tc(l,r,a),i[2]=Tc(l-1/3,r,a);else if(~e.indexOf("="))return i=e.match(am),n&&i.length<4&&(i[3]=1),i}else i=e.match(jc)||Ra.transparent;i=i.map(Number)}return t&&!v&&(r=i[0]/At,a=i[1]/At,o=i[2]/At,h=Math.max(r,a,o),f=Math.min(r,a,o),u=(h+f)/2,h===f?l=c=0:(d=h-f,c=u>.5?d/(2-h-f):d/(h+f),l=h===r?(a-o)/d+(a<o?6:0):h===a?(o-r)/d+2:(r-a)/d+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},Pm=function(e){var t=[],n=[],i=-1;return e.split(vr).forEach(function(r){var a=r.match(Os)||[];t.push.apply(t,a),n.push(i+=a.length+1)}),t.c=n,t},Yd=function(e,t,n){var i="",r=(e+i).match(vr),a=t?"hsla(":"rgba(",o=0,l,c,u,h;if(!r)return e;if(r=r.map(function(f){return(f=Lm(f,t,1))&&a+(t?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(u=Pm(e),l=n.c,l.join(i)!==u.c.join(i)))for(c=e.replace(vr,"1").split(Os),h=c.length-1;o<h;o++)i+=c[o]+(~l.indexOf(o)?r.shift()||a+"0,0,0,0)":(u.length?u:r.length?r:n).shift());if(!c)for(c=e.split(vr),h=c.length-1;o<h;o++)i+=c[o]+r[o];return i+c[h]},vr=function(){var s="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Ra)s+="|"+e+"\\b";return new RegExp(s+")","gi")}(),L1=/hsl[a]?\(/,Dm=function(e){var t=e.join(" "),n;if(vr.lastIndex=0,vr.test(t))return n=L1.test(t),e[1]=Yd(e[1],n),e[0]=Yd(e[0],n,Pm(e[1])),!0},Va,Wn=function(){var s=Date.now,e=500,t=33,n=s(),i=n,r=1e3/240,a=r,o=[],l,c,u,h,f,d,v=function g(m){var p=s()-i,S=m===!0,y,T,E,w;if(p>e&&(n+=p-t),i+=p,E=i-n,y=E-a,(y>0||S)&&(w=++h.frame,f=E-h.time*1e3,h.time=E=E/1e3,a+=y+(y>=r?4:r-y),T=1),S||(l=c(g)),T)for(d=0;d<o.length;d++)o[d](E,f,w,m)};return h={time:0,frame:0,tick:function(){v(!0)},deltaRatio:function(m){return f/(1e3/(m||60))},wake:function(){cm&&(!Kc&&wu()&&(Zn=Kc=window,Ru=Zn.document||{},qn.gsap=Bn,(Zn.gsapVersions||(Zn.gsapVersions=[])).push(Bn.version),um(jo||Zn.GreenSockGlobals||!Zn.gsap&&Zn||{}),u=Zn.requestAnimationFrame,Rm.forEach(Cm)),l&&h.sleep(),c=u||function(m){return setTimeout(m,a-h.time*1e3+1|0)},Va=1,v(2))},sleep:function(){(u?Zn.cancelAnimationFrame:clearTimeout)(l),Va=0,c=Ha},lagSmoothing:function(m,p){e=m||1/0,t=Math.min(p||33,e)},fps:function(m){r=1e3/(m||240),a=h.time*1e3+r},add:function(m,p,S){var y=p?function(T,E,w,D){m(T,E,w,D),h.remove(y)}:m;return h.remove(m),o[S?"unshift":"push"](y),ta(),y},remove:function(m,p){~(p=o.indexOf(m))&&o.splice(p,1)&&d>=p&&d--},_listeners:o},h}(),ta=function(){return!Va&&Wn.wake()},ft={},P1=/^[\d.\-M][\d.\-,\s]/,D1=/["']/g,I1=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],r=1,a=n.length,o,l,c;r<a;r++)l=n[r],o=r!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),t[i]=isNaN(c)?c.replace(D1,"").trim():+c,i=l.substr(o+1).trim();return t},U1=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},N1=function(e){var t=(e+"").split("("),n=ft[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[I1(t[1])]:U1(e).split(",").map(mm)):ft._CE&&P1.test(e)?ft._CE("",e):n},Im=function(e){return function(t){return 1-e(1-t)}},Um=function s(e,t){for(var n=e._first,i;n;)n instanceof In?s(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?s(n.timeline,t):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=t)),n=n._next},$r=function(e,t){return e&&(Vt(e)?e:ft[e]||N1(e))||t},ts=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var r={easeIn:t,easeOut:n,easeInOut:i},a;return On(e,function(o){ft[o]=qn[o]=r,ft[a=o.toLowerCase()]=n;for(var l in r)ft[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=ft[o+"."+l]=r[l]}),r},Nm=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Ac=function s(e,t,n){var i=t>=1?t:1,r=(n||(e?.3:.45))/(t<1?t:1),a=r/Yc*(Math.asin(1/i)||0),o=function(u){return u===1?1:i*Math.pow(2,-10*u)*c1((u-a)*r)+1},l=e==="out"?o:e==="in"?function(c){return 1-o(1-c)}:Nm(o);return r=Yc/r,l.config=function(c,u){return s(e,c,u)},l},wc=function s(e,t){t===void 0&&(t=1.70158);var n=function(a){return a?--a*a*((t+1)*a+t)+1:0},i=e==="out"?n:e==="in"?function(r){return 1-n(1-r)}:Nm(n);return i.config=function(r){return s(e,r)},i};On("Linear,Quad,Cubic,Quart,Quint,Strong",function(s,e){var t=e<5?e+1:e;ts(s+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});ft.Linear.easeNone=ft.none=ft.Linear.easeIn;ts("Elastic",Ac("in"),Ac("out"),Ac());(function(s,e){var t=1/e,n=2*t,i=2.5*t,r=function(o){return o<t?s*o*o:o<n?s*Math.pow(o-1.5/e,2)+.75:o<i?s*(o-=2.25/e)*o+.9375:s*Math.pow(o-2.625/e,2)+.984375};ts("Bounce",function(a){return 1-r(1-a)},r)})(7.5625,2.75);ts("Expo",function(s){return s?Math.pow(2,10*(s-1)):0});ts("Circ",function(s){return-(rm(1-s*s)-1)});ts("Sine",function(s){return s===1?1:-l1(s*a1)+1});ts("Back",wc("in"),wc("out"),wc());ft.SteppedEase=ft.steps=qn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),r=t?1:0,a=1-Rt;return function(o){return((i*Ka(0,a,o)|0)+r)*n}}};Js.ease=ft["quad.out"];On("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(s){return Pu+=s+","+s+"Params,"});var Om=function(e,t){this.id=o1++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:dm,this.set=t?t.getSetter:Ou},na=function(){function s(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,ea(this,+t.duration,1,1),this.data=t.data,Zt&&(this._ctx=Zt,Zt.data.push(this)),Va||Wn.wake()}var e=s.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,ea(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(ta(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(ul(this,n),!r._dp||r.parent||vm(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Mi(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===Rt||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),pm(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Xd(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.ratio},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Xd(this),i):this.duration()?Math.min(1,this._time/this._dur):this.ratio},e.iteration=function(n,i){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*r,i):this._repeat?Qs(this._tTime,r)+1:1},e.timeScale=function(n){if(!arguments.length)return this._rts===-Rt?0:this._rts;if(this._rts===n)return this;var i=this.parent&&this._ts?Qo(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Rt?0:this._rts,this.totalTime(Ka(-Math.abs(this._delay),this._tDur,i),!0),cl(this),g1(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(ta(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Rt&&(this._tTime-=Rt)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Mi(i,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(Nn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Qo(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=f1);var i=Sn;return Sn=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Sn=i,this},e.globalTime=function(n){for(var i=this,r=arguments.length?n:i.rawTime();i;)r=i._start+r/(i._ts||1),i=i._dp;return!this.parent&&this._sat?this._sat.vars.immediateRender?-1:this._sat.globalTime(n):r},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,qd(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,qd(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(jn(this,n),Nn(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Nn(i))},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Rt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-Rt,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,r;return!!(!n||this._ts&&this._initted&&n.isActive()&&(r=n.rawTime(!0))>=i&&r<this.endTime(!0)-Rt)},e.eventCallback=function(n,i,r){var a=this.vars;return arguments.length>1?(i?(a[n]=i,r&&(a[n+"Params"]=r),n==="onUpdate"&&(this._onUpdate=i)):delete a[n],this):a[n]},e.then=function(n){var i=this;return new Promise(function(r){var a=Vt(n)?n:gm,o=function(){var c=i.then;i.then=null,Vt(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=c),r(a),i.then=c};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?o():i._prom=o})},e.kill=function(){wa(this)},s}();ii(na.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Rt,_prom:0,_ps:!1,_rts:1});var In=function(s){im(e,s);function e(n,i){var r;return n===void 0&&(n={}),r=s.call(this,n)||this,r.labels={},r.smoothChildTiming=!!n.smoothChildTiming,r.autoRemoveChildren=!!n.autoRemoveChildren,r._sort=Nn(n.sortChildren),kt&&Mi(n.parent||kt,Gi(r),i),n.reversed&&r.reverse(),n.paused&&r.paused(!0),n.scrollTrigger&&xm(Gi(r),n.scrollTrigger),r}var t=e.prototype;return t.to=function(i,r,a){return Ua(0,arguments,this),this},t.from=function(i,r,a){return Ua(1,arguments,this),this},t.fromTo=function(i,r,a,o){return Ua(2,arguments,this),this},t.set=function(i,r,a){return r.duration=0,r.parent=this,Ia(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new en(i,r,jn(this,a),1),this},t.call=function(i,r,a){return Mi(this,en.delayedCall(0,i,r),a)},t.staggerTo=function(i,r,a,o,l,c,u){return a.duration=r,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=u,a.parent=this,new en(i,a,jn(this,l)),this},t.staggerFrom=function(i,r,a,o,l,c,u){return a.runBackwards=1,Ia(a).immediateRender=Nn(a.immediateRender),this.staggerTo(i,r,a,o,l,c,u)},t.staggerFromTo=function(i,r,a,o,l,c,u,h){return o.startAt=a,Ia(o).immediateRender=Nn(o.immediateRender),this.staggerTo(i,r,o,l,c,u,h)},t.render=function(i,r,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:pn(i),h=this._zTime<0!=i<0&&(this._initted||!c),f,d,v,g,m,p,S,y,T,E,w,D;if(this!==kt&&u>l&&i>=0&&(u=l),u!==this._tTime||a||h){if(o!==this._time&&c&&(u+=this._time-o,i+=this._time-o),f=u,T=this._start,y=this._ts,p=!y,h&&(c||(o=this._zTime),(i||!r)&&(this._zTime=i)),this._repeat){if(w=this._yoyo,m=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,r,a);if(f=pn(u%m),u===l?(g=this._repeat,f=c):(g=~~(u/m),g&&g===u/m&&(f=c,g--),f>c&&(f=c)),E=Qs(this._tTime,m),!o&&this._tTime&&E!==g&&this._tTime-E*m-this._dur<=0&&(E=g),w&&g&1&&(f=c-f,D=1),g!==E&&!this._lock){var I=w&&E&1,b=I===(w&&g&1);if(g<E&&(I=!I),o=I?0:c,this._lock=1,this.render(o||(D?0:pn(g*m)),r,!c)._lock=0,this._tTime=u,!r&&this.parent&&ni(this,"onRepeat"),this.vars.repeatRefresh&&!D&&(this.invalidate()._lock=1),o&&o!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,b&&(this._lock=2,o=I?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!D&&this.invalidate()),this._lock=0,!this._ts&&!p)return this;Um(this,D)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(S=y1(this,pn(o),pn(f)),S&&(u-=f-(f=S._start))),this._tTime=u,this._time=f,this._act=!y,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,o=0),!o&&f&&!r&&!g&&(ni(this,"onStart"),this._tTime!==u))return this;if(f>=o&&i>=0)for(d=this._first;d;){if(v=d._next,(d._act||f>=d._start)&&d._ts&&S!==d){if(d.parent!==this)return this.render(i,r,a);if(d.render(d._ts>0?(f-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(f-d._start)*d._ts,r,a),f!==this._time||!this._ts&&!p){S=0,v&&(u+=this._zTime=-Rt);break}}d=v}else{d=this._last;for(var P=i<0?i:f;d;){if(v=d._prev,(d._act||P<=d._end)&&d._ts&&S!==d){if(d.parent!==this)return this.render(i,r,a);if(d.render(d._ts>0?(P-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(P-d._start)*d._ts,r,a||Sn&&(d._initted||d._startAt)),f!==this._time||!this._ts&&!p){S=0,v&&(u+=this._zTime=P?-Rt:Rt);break}}d=v}}if(S&&!r&&(this.pause(),S.render(f>=o?0:-Rt)._zTime=f>=o?1:-1,this._ts))return this._start=T,cl(this),this.render(i,r,a);this._onUpdate&&!r&&ni(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&o)&&(T===this._start||Math.abs(y)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&xr(this,1),!r&&!(i<0&&!o)&&(u||o||!l)&&(ni(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,r){var a=this;if(Ki(r)||(r=jn(this,r,i)),!(i instanceof na)){if(En(i))return i.forEach(function(o){return a.add(o,r)}),this;if(ln(i))return this.addLabel(i,r);if(Vt(i))i=en.delayedCall(0,i);else return this}return this!==i?Mi(this,i,r):this},t.getChildren=function(i,r,a,o){i===void 0&&(i=!0),r===void 0&&(r=!0),a===void 0&&(a=!0),o===void 0&&(o=-ei);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof en?r&&l.push(c):(a&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,r,a)))),c=c._next;return l},t.getById=function(i){for(var r=this.getChildren(1,1,1),a=r.length;a--;)if(r[a].vars.id===i)return r[a]},t.remove=function(i){return ln(i)?this.removeLabel(i):Vt(i)?this.killTweensOf(i):(ll(this,i),i===this._recent&&(this._recent=this._last),qr(this))},t.totalTime=function(i,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=pn(Wn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),s.prototype.totalTime.call(this,i,r),this._forcing=0,this):this._tTime},t.addLabel=function(i,r){return this.labels[i]=jn(this,r),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,r,a){var o=en.delayedCall(0,r||Ha,a);return o.data="isPause",this._hasPause=1,Mi(this,o,jn(this,i))},t.removePause=function(i){var r=this._first;for(i=jn(this,i);r;)r._start===i&&r.data==="isPause"&&xr(r),r=r._next},t.killTweensOf=function(i,r,a){for(var o=this.getTweensOf(i,a),l=o.length;l--;)fr!==o[l]&&o[l].kill(i,r);return this},t.getTweensOf=function(i,r){for(var a=[],o=ti(i),l=this._first,c=Ki(r),u;l;)l instanceof en?d1(l._targets,o)&&(c?(!fr||l._initted&&l._ts)&&l.globalTime(0)<=r&&l.globalTime(l.totalDuration())>r:!r||l.isActive())&&a.push(l):(u=l.getTweensOf(o,r)).length&&a.push.apply(a,u),l=l._next;return a},t.tweenTo=function(i,r){r=r||{};var a=this,o=jn(a,i),l=r,c=l.startAt,u=l.onStart,h=l.onStartParams,f=l.immediateRender,d,v=en.to(a,ii({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:r.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||Rt,onStart:function(){if(a.pause(),!d){var m=r.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());v._dur!==m&&ea(v,m,0,1).render(v._time,!0,!0),d=1}u&&u.apply(v,h||[])}},r));return f?v.render(0):v},t.tweenFromTo=function(i,r,a){return this.tweenTo(r,ii({startAt:{time:jn(this,i)}},a))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),$d(this,jn(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),$d(this,jn(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+Rt)},t.shiftChildren=function(i,r,a){a===void 0&&(a=0);for(var o=this._first,l=this.labels,c;o;)o._start>=a&&(o._start+=i,o._end+=i),o=o._next;if(r)for(c in l)l[c]>=a&&(l[c]+=i);return qr(this)},t.invalidate=function(i){var r=this._first;for(this._lock=0;r;)r.invalidate(i),r=r._next;return s.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var r=this._first,a;r;)a=r._next,this.remove(r),r=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),qr(this)},t.totalDuration=function(i){var r=0,a=this,o=a._last,l=ei,c,u,h;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(h=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),u=o._start,u>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,Mi(a,o,u-o._delay,1)._lock=0):l=u,u<0&&o._ts&&(r-=u,(!h&&!a._dp||h&&h.smoothChildTiming)&&(a._start+=u/a._ts,a._time-=u,a._tTime-=u),a.shiftChildren(-u,!1,-1/0),l=0),o._end>r&&o._ts&&(r=o._end),o=c;ea(a,a===kt&&a._time>r?a._time:r,1,1),a._dirty=0}return a._tDur},e.updateRoot=function(i){if(kt._ts&&(pm(kt,Qo(i,kt)),fm=Wn.frame),Wn.frame>=Vd){Vd+=Xn.autoSleep||120;var r=kt._first;if((!r||!r._ts)&&Xn.autoSleep&&Wn._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||Wn.sleep()}}},e}(na);ii(In.prototype,{_lock:0,_hasPause:0,_forcing:0});var O1=function(e,t,n,i,r,a,o){var l=new Fn(this._pt,e,t,0,1,Gm,null,r),c=0,u=0,h,f,d,v,g,m,p,S;for(l.b=n,l.e=i,n+="",i+="",(p=~i.indexOf("random("))&&(i=Ga(i)),a&&(S=[n,i],a(S,e,t),n=S[0],i=S[1]),f=n.match(Sc)||[];h=Sc.exec(i);)v=h[0],g=i.substring(c,h.index),d?d=(d+1)%5:g.substr(-5)==="rgba("&&(d=1),v!==f[u++]&&(m=parseFloat(f[u-1])||0,l._pt={_next:l._pt,p:g||u===1?g:",",s:m,c:v.charAt(1)==="="?Hs(m,v)-m:parseFloat(v)-m,m:d&&d<4?Math.round:0},c=Sc.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=o,(om.test(i)||p)&&(l.e=0),this._pt=l,l},Iu=function(e,t,n,i,r,a,o,l,c,u){Vt(i)&&(i=i(r||0,e,a));var h=e[t],f=n!=="get"?n:Vt(h)?c?e[t.indexOf("set")||!Vt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():h,d=Vt(h)?c?H1:zm:Nu,v;if(ln(i)&&(~i.indexOf("random(")&&(i=Ga(i)),i.charAt(1)==="="&&(v=Hs(f,i)+(bn(f)||0),(v||v===0)&&(i=v))),!u||f!==i||iu)return!isNaN(f*i)&&i!==""?(v=new Fn(this._pt,e,t,+f||0,i-(f||0),typeof h=="boolean"?V1:Hm,0,d),c&&(v.fp=c),o&&v.modifier(o,this,e),this._pt=v):(!h&&!(t in e)&&Cu(t,i),O1.call(this,e,t,f,i,d,l||Xn.stringFilter,c))},F1=function(e,t,n,i,r){if(Vt(e)&&(e=Na(e,r,t,n,i)),!Ai(e)||e.style&&e.nodeType||En(e)||sm(e))return ln(e)?Na(e,r,t,n,i):e;var a={},o;for(o in e)a[o]=Na(e[o],r,t,n,i);return a},Fm=function(e,t,n,i,r,a){var o,l,c,u;if(Vn[e]&&(o=new Vn[e]).init(r,o.rawVars?t[e]:F1(t[e],i,r,a,n),n,i,a)!==!1&&(n._pt=l=new Fn(n._pt,r,e,0,1,o.render,o,0,o.priority),n!==Fs))for(c=n._ptLookup[n._targets.indexOf(r)],u=o._props.length;u--;)c[o._props[u]]=l;return o},fr,iu,Uu=function s(e,t,n){var i=e.vars,r=i.ease,a=i.startAt,o=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.onUpdateParams,h=i.callbackScope,f=i.runBackwards,d=i.yoyoEase,v=i.keyframes,g=i.autoRevert,m=e._dur,p=e._startAt,S=e._targets,y=e.parent,T=y&&y.data==="nested"?y.vars.targets:S,E=e._overwrite==="auto"&&!Tu,w=e.timeline,D,I,b,P,$,ae,z,V,H,se,K,te,oe;if(w&&(!v||!r)&&(r="none"),e._ease=$r(r,Js.ease),e._yEase=d?Im($r(d===!0?r:d,Js.ease)):0,d&&e._yoyo&&!e._repeat&&(d=e._yEase,e._yEase=e._ease,e._ease=d),e._from=!w&&!!i.runBackwards,!w||v&&!i.stagger){if(V=S[0]?Xr(S[0]).harness:0,te=V&&i[V.prop],D=Jo(i,Lu),p&&(p._zTime<0&&p.progress(1),t<0&&f&&o&&!g?p.render(-1,!0):p.revert(f&&m?Go:h1),p._lazy=0),a){if(xr(e._startAt=en.set(S,ii({data:"isStart",overwrite:!1,parent:y,immediateRender:!0,lazy:!p&&Nn(l),startAt:null,delay:0,onUpdate:c,onUpdateParams:u,callbackScope:h,stagger:0},a))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Sn||!o&&!g)&&e._startAt.revert(Go),o&&m&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(f&&m&&!p){if(t&&(o=!1),b=ii({overwrite:!1,data:"isFromStart",lazy:o&&!p&&Nn(l),immediateRender:o,stagger:0,parent:y},D),te&&(b[V.prop]=te),xr(e._startAt=en.set(S,b)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Sn?e._startAt.revert(Go):e._startAt.render(-1,!0)),e._zTime=t,!o)s(e._startAt,Rt,Rt);else if(!t)return}for(e._pt=e._ptCache=0,l=m&&Nn(l)||l&&!m,I=0;I<S.length;I++){if($=S[I],z=$._gsap||Du(S)[I]._gsap,e._ptLookup[I]=se={},Zc[z.id]&&_r.length&&Zo(),K=T===S?I:T.indexOf($),V&&(H=new V).init($,te||D,e,K,T)!==!1&&(e._pt=P=new Fn(e._pt,$,H.name,0,1,H.render,H,0,H.priority),H._props.forEach(function(ue){se[ue]=P}),H.priority&&(ae=1)),!V||te)for(b in D)Vn[b]&&(H=Fm(b,D,e,K,$,T))?H.priority&&(ae=1):se[b]=P=Iu.call(e,$,b,"get",D[b],K,T,0,i.stringFilter);e._op&&e._op[I]&&e.kill($,e._op[I]),E&&e._pt&&(fr=e,kt.killTweensOf($,se,e.globalTime(t)),oe=!e.parent,fr=0),e._pt&&l&&(Zc[z.id]=1)}ae&&Vm(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!oe,v&&t<=0&&w.render(ei,!0,!0)},B1=function(e,t,n,i,r,a,o){var l=(e._pt&&e._ptCache||(e._ptCache={}))[t],c,u,h,f;if(!l)for(l=e._ptCache[t]=[],h=e._ptLookup,f=e._targets.length;f--;){if(c=h[f][t],c&&c.d&&c.d._pt)for(c=c.d._pt;c&&c.p!==t&&c.fp!==t;)c=c._next;if(!c)return iu=1,e.vars[t]="+=0",Uu(e,o),iu=0,1;l.push(c)}for(f=l.length;f--;)u=l[f],c=u._pt||u,c.s=(i||i===0)&&!r?i:c.s+(i||0)+a*c.c,c.c=n-c.s,u.e&&(u.e=Xt(n)+bn(u.e)),u.b&&(u.b=c.s+bn(u.b))},k1=function(e,t){var n=e[0]?Xr(e[0]).harness:0,i=n&&n.aliases,r,a,o,l;if(!i)return t;r=Jr({},t);for(a in i)if(a in r)for(l=i[a].split(","),o=l.length;o--;)r[l[o]]=r[a];return r},z1=function(e,t,n,i){var r=t.ease||i||"power1.inOut",a,o;if(En(t))o=n[e]||(n[e]=[]),t.forEach(function(l,c){return o.push({t:c/(t.length-1)*100,v:l,e:r})});else for(a in t)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(e),v:t[a],e:r})},Na=function(e,t,n,i,r){return Vt(e)?e.call(t,n,i,r):ln(e)&&~e.indexOf("random(")?Ga(e):e},Bm=Pu+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",km={};On(Bm+",id,stagger,delay,duration,paused,scrollTrigger",function(s){return km[s]=1});var en=function(s){im(e,s);function e(n,i,r,a){var o;typeof i=="number"&&(r.duration=i,i=r,r=null),o=s.call(this,a?i:Ia(i))||this;var l=o.vars,c=l.duration,u=l.delay,h=l.immediateRender,f=l.stagger,d=l.overwrite,v=l.keyframes,g=l.defaults,m=l.scrollTrigger,p=l.yoyoEase,S=i.parent||kt,y=(En(n)||sm(n)?Ki(n[0]):"length"in i)?[n]:ti(n),T,E,w,D,I,b,P,$;if(o._targets=y.length?Du(y):Ko("GSAP target "+n+" not found. https://greensock.com",!Xn.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=d,v||f||Fo(c)||Fo(u)){if(i=o.vars,T=o.timeline=new In({data:"nested",defaults:g||{},targets:S&&S.data==="nested"?S.vars.targets:y}),T.kill(),T.parent=T._dp=Gi(o),T._start=0,f||Fo(c)||Fo(u)){if(D=y.length,P=f&&Sm(f),Ai(f))for(I in f)~Bm.indexOf(I)&&($||($={}),$[I]=f[I]);for(E=0;E<D;E++)w=Jo(i,km),w.stagger=0,p&&(w.yoyoEase=p),$&&Jr(w,$),b=y[E],w.duration=+Na(c,Gi(o),E,b,y),w.delay=(+Na(u,Gi(o),E,b,y)||0)-o._delay,!f&&D===1&&w.delay&&(o._delay=u=w.delay,o._start+=u,w.delay=0),T.to(b,w,P?P(E,b,y):0),T._ease=ft.none;T.duration()?c=u=0:o.timeline=0}else if(v){Ia(ii(T.vars.defaults,{ease:"none"})),T._ease=$r(v.ease||i.ease||"none");var ae=0,z,V,H;if(En(v))v.forEach(function(se){return T.to(y,se,">")}),T.duration();else{w={};for(I in v)I==="ease"||I==="easeEach"||z1(I,v[I],w,v.easeEach);for(I in w)for(z=w[I].sort(function(se,K){return se.t-K.t}),ae=0,E=0;E<z.length;E++)V=z[E],H={ease:V.e,duration:(V.t-(E?z[E-1].t:0))/100*c},H[I]=V.v,T.to(y,H,ae),ae+=H.duration;T.duration()<c&&T.to({},{duration:c-T.duration()})}}c||o.duration(c=T.duration())}else o.timeline=0;return d===!0&&!Tu&&(fr=Gi(o),kt.killTweensOf(y),fr=0),Mi(S,Gi(o),r),i.reversed&&o.reverse(),i.paused&&o.paused(!0),(h||!c&&!v&&o._start===pn(S._time)&&Nn(h)&&_1(Gi(o))&&S.data!=="nested")&&(o._tTime=-Rt,o.render(Math.max(0,-u)||0)),m&&xm(Gi(o),m),o}var t=e.prototype;return t.render=function(i,r,a){var o=this._time,l=this._tDur,c=this._dur,u=i<0,h=i>l-Rt&&!u?l:i<Rt?0:i,f,d,v,g,m,p,S,y,T;if(!c)x1(this,i,r,a);else if(h!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u){if(f=h,y=this.timeline,this._repeat){if(g=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(g*100+i,r,a);if(f=pn(h%g),h===l?(v=this._repeat,f=c):(v=~~(h/g),v&&v===h/g&&(f=c,v--),f>c&&(f=c)),p=this._yoyo&&v&1,p&&(T=this._yEase,f=c-f),m=Qs(this._tTime,g),f===o&&!a&&this._initted)return this._tTime=h,this;v!==m&&(y&&this._yEase&&Um(y,p),this.vars.repeatRefresh&&!p&&!this._lock&&(this._lock=a=1,this.render(pn(g*v),!0).invalidate()._lock=0))}if(!this._initted){if(ym(this,u?i:f,a,r,h))return this._tTime=0,this;if(o!==this._time)return this;if(c!==this._dur)return this.render(i,r,a)}if(this._tTime=h,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=S=(T||this._ease)(f/c),this._from&&(this.ratio=S=1-S),f&&!o&&!r&&!v&&(ni(this,"onStart"),this._tTime!==h))return this;for(d=this._pt;d;)d.r(S,d.d),d=d._next;y&&y.render(i<0?i:!f&&p?-Rt:y._dur*y._ease(f/this._dur),r,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!r&&(u&&Jc(this,i,r,a),ni(this,"onUpdate")),this._repeat&&v!==m&&this.vars.onRepeat&&!r&&this.parent&&ni(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&Jc(this,i,!0,!0),(i||!c)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&xr(this,1),!r&&!(u&&!o)&&(h||o||p)&&(ni(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),s.prototype.invalidate.call(this,i)},t.resetTo=function(i,r,a,o){Va||Wn.wake(),this._ts||this.play();var l=Math.min(this._dur,(this._dp._time-this._start)*this._ts),c;return this._initted||Uu(this,l),c=this._ease(l/this._dur),B1(this,i,r,a,o,c,l)?this.resetTo(i,r,a,o):(ul(this,0),this.parent||_m(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,r){if(r===void 0&&(r="all"),!i&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?wa(this):this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,r,fr&&fr.vars.overwrite!==!0)._first||wa(this),this.parent&&a!==this.timeline.totalDuration()&&ea(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=i?ti(i):o,c=this._ptLookup,u=this._pt,h,f,d,v,g,m,p;if((!r||r==="all")&&m1(o,l))return r==="all"&&(this._pt=0),wa(this);for(h=this._op=this._op||[],r!=="all"&&(ln(r)&&(g={},On(r,function(S){return g[S]=1}),r=g),r=k1(o,r)),p=o.length;p--;)if(~l.indexOf(o[p])){f=c[p],r==="all"?(h[p]=r,v=f,d={}):(d=h[p]=h[p]||{},v=r);for(g in v)m=f&&f[g],m&&((!("kill"in m.d)||m.d.kill(g)===!0)&&ll(this,m,"_pt"),delete f[g]),d!=="all"&&(d[g]=1)}return this._initted&&!this._pt&&u&&wa(this),this},e.to=function(i,r){return new e(i,r,arguments[2])},e.from=function(i,r){return Ua(1,arguments)},e.delayedCall=function(i,r,a,o){return new e(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:r,onReverseComplete:r,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},e.fromTo=function(i,r,a){return Ua(2,arguments)},e.set=function(i,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new e(i,r)},e.killTweensOf=function(i,r,a){return kt.killTweensOf(i,r,a)},e}(na);ii(en.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});On("staggerTo,staggerFrom,staggerFromTo",function(s){en[s]=function(){var e=new In,t=eu.call(arguments,0);return t.splice(s==="staggerFromTo"?5:4,0,0),e[s].apply(e,t)}});var Nu=function(e,t,n){return e[t]=n},zm=function(e,t,n){return e[t](n)},H1=function(e,t,n,i){return e[t](i.fp,n)},G1=function(e,t,n){return e.setAttribute(t,n)},Ou=function(e,t){return Vt(e[t])?zm:Au(e[t])&&e.setAttribute?G1:Nu},Hm=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},V1=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Gm=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},Fu=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},W1=function(e,t,n,i){for(var r=this._pt,a;r;)a=r._next,r.p===i&&r.modifier(e,t,n),r=a},X1=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?ll(this,t,"_pt"):t.dep||(n=1),t=i;return!n},q1=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},Vm=function(e){for(var t=e._pt,n,i,r,a;t;){for(n=t._next,i=r;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:a)?t._prev._next=t:r=t,(t._next=i)?i._prev=t:a=t,t=n}e._pt=r},Fn=function(){function s(t,n,i,r,a,o,l,c,u){this.t=n,this.s=r,this.c=a,this.p=i,this.r=o||Hm,this.d=l||this,this.set=c||Nu,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=s.prototype;return e.modifier=function(n,i,r){this.mSet=this.mSet||this.set,this.set=q1,this.m=n,this.mt=r,this.tween=i},s}();On(Pu+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(s){return Lu[s]=1});qn.TweenMax=qn.TweenLite=en;qn.TimelineLite=qn.TimelineMax=In;kt=new In({sortChildren:!1,defaults:Js,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Xn.stringFilter=Dm;var ia=[],Wo={},$1=[],jd=0,Rc=function(e){return(Wo[e]||$1).map(function(t){return t()})},ru=function(){var e=Date.now(),t=[];e-jd>2&&(Rc("matchMediaInit"),ia.forEach(function(n){var i=n.queries,r=n.conditions,a,o,l,c;for(o in i)a=Zn.matchMedia(i[o]).matches,a&&(l=1),a!==r[o]&&(r[o]=a,c=1);c&&(n.revert(),l&&t.push(n))}),Rc("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n)}),jd=e,Rc("matchMedia"))},Wm=function(){function s(t,n){this.selector=n&&tu(n),this.data=[],this._r=[],this.isReverted=!1,t&&this.add(t)}var e=s.prototype;return e.add=function(n,i,r){Vt(n)&&(r=i,i=n,n=Vt);var a=this,o=function(){var c=Zt,u=a.selector,h;return c&&c!==a&&c.data.push(a),r&&(a.selector=tu(r)),Zt=a,h=i.apply(a,arguments),Vt(h)&&a._r.push(h),Zt=c,a.selector=u,a.isReverted=!1,h};return a.last=o,n===Vt?o(a):n?a[n]=o:o},e.ignore=function(n){var i=Zt;Zt=null,n(this),Zt=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof s?n.push.apply(n,i.getTweens()):i instanceof en&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var r=this;if(n){var a=this.getTweens();this.data.forEach(function(l){l.data==="isFlip"&&(l.revert(),l.getChildren(!0,!0,!1).forEach(function(c){return a.splice(a.indexOf(c),1)}))}),a.map(function(l){return{g:l.globalTime(0),t:l}}).sort(function(l,c){return c.g-l.g||-1}).forEach(function(l){return l.t.revert(n)}),this.data.forEach(function(l){return!(l instanceof na)&&l.revert&&l.revert(n)}),this._r.forEach(function(l){return l(n,r)}),this.isReverted=!0}else this.data.forEach(function(l){return l.kill&&l.kill()});if(this.clear(),i){var o=ia.indexOf(this);~o&&ia.splice(o,1)}},e.revert=function(n){this.kill(n||{})},s}(),Y1=function(){function s(t){this.contexts=[],this.scope=t}var e=s.prototype;return e.add=function(n,i,r){Ai(n)||(n={matches:n});var a=new Wm(0,r||this.scope),o=a.conditions={},l,c,u;this.contexts.push(a),i=a.add("onMatch",i),a.queries=n;for(c in n)c==="all"?u=1:(l=Zn.matchMedia(n[c]),l&&(ia.indexOf(a)<0&&ia.push(a),(o[c]=l.matches)&&(u=1),l.addListener?l.addListener(ru):l.addEventListener("change",ru)));return u&&i(a),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},s}(),el={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return Cm(i)})},timeline:function(e){return new In(e)},getTweensOf:function(e,t){return kt.getTweensOf(e,t)},getProperty:function(e,t,n,i){ln(e)&&(e=ti(e)[0]);var r=Xr(e||{}).get,a=n?gm:mm;return n==="native"&&(n=""),e&&(t?a((Vn[t]&&Vn[t].get||r)(e,t,n,i)):function(o,l,c){return a((Vn[o]&&Vn[o].get||r)(e,o,l,c))})},quickSetter:function(e,t,n){if(e=ti(e),e.length>1){var i=e.map(function(u){return Bn.quickSetter(u,t,n)}),r=i.length;return function(u){for(var h=r;h--;)i[h](u)}}e=e[0]||{};var a=Vn[t],o=Xr(e),l=o.harness&&(o.harness.aliases||{})[t]||t,c=a?function(u){var h=new a;Fs._pt=0,h.init(e,n?u+n:u,Fs,0,[e]),h.render(1,h),Fs._pt&&Fu(1,Fs)}:o.set(e,l);return a?c:function(u){return c(e,l,n?u+n:u,o,1)}},quickTo:function(e,t,n){var i,r=Bn.to(e,Jr((i={},i[t]="+=0.1",i.paused=!0,i),n||{})),a=function(l,c,u){return r.resetTo(t,l,c,u)};return a.tween=r,a},isTweening:function(e){return kt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=$r(e.ease,Js.ease)),Wd(Js,e||{})},config:function(e){return Wd(Xn,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,r=e.defaults,a=e.extendTimeline;(i||"").split(",").forEach(function(o){return o&&!Vn[o]&&!qn[o]&&Ko(t+" effect requires "+o+" plugin.")}),Ec[t]=function(o,l,c){return n(ti(o),ii(l||{},r),c)},a&&(In.prototype[t]=function(o,l,c){return this.add(Ec[t](o,Ai(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){ft[e]=$r(t)},parseEase:function(e,t){return arguments.length?$r(e,t):ft},getById:function(e){return kt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new In(e),i,r;for(n.smoothChildTiming=Nn(e.smoothChildTiming),kt.remove(n),n._dp=0,n._time=n._tTime=kt._time,i=kt._first;i;)r=i._next,(t||!(!i._dur&&i instanceof en&&i.vars.onComplete===i._targets[0]))&&Mi(n,i,i._start-i._delay),i=r;return Mi(kt,n,0),n},context:function(e,t){return e?new Wm(e,t):Zt},matchMedia:function(e){return new Y1(e)},matchMediaRefresh:function(){return ia.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||ru()},addEventListener:function(e,t){var n=Wo[e]||(Wo[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Wo[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:w1,wrapYoyo:R1,distribute:Sm,random:Tm,snap:Em,normalize:A1,getUnit:bn,clamp:b1,splitColor:Lm,toArray:ti,selector:tu,mapRange:wm,pipe:E1,unitize:T1,interpolate:C1,shuffle:bm},install:um,effects:Ec,ticker:Wn,updateRoot:In.updateRoot,plugins:Vn,globalTimeline:kt,core:{PropTween:Fn,globals:hm,Tween:en,Timeline:In,Animation:na,getCache:Xr,_removeLinkedListItem:ll,reverting:function(){return Sn},context:function(e){return e&&Zt&&(Zt.data.push(e),e._ctx=Zt),Zt},suppressOverwrites:function(e){return Tu=e}}};On("to,from,fromTo,delayedCall,set,killTweensOf",function(s){return el[s]=en[s]});Wn.add(In.updateRoot);Fs=el.to({},{duration:0});var j1=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},K1=function(e,t){var n=e._targets,i,r,a;for(i in t)for(r=n.length;r--;)a=e._ptLookup[r][i],a&&(a=a.d)&&(a._pt&&(a=j1(a,i)),a&&a.modifier&&a.modifier(t[i],e,n[r],i))},Cc=function(e,t){return{name:e,rawVars:1,init:function(i,r,a){a._onInit=function(o){var l,c;if(ln(r)&&(l={},On(r,function(u){return l[u]=1}),r=l),t){l={};for(c in r)l[c]=t(r[c]);r=l}K1(o,r)}}}},Bn=el.registerPlugin({name:"attr",init:function(e,t,n,i,r){var a,o,l;this.tween=n;for(a in t)l=e.getAttribute(a)||"",o=this.add(e,"setAttribute",(l||0)+"",t[a],i,r,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(e,t){for(var n=t._pt;n;)Sn?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},Cc("roundProps",nu),Cc("modifiers"),Cc("snap",Em))||el;en.version=In.version=Bn.version="3.11.5";cm=1;wu()&&ta();ft.Power0;ft.Power1;ft.Power2;ft.Power3;ft.Power4;ft.Linear;ft.Quad;ft.Cubic;ft.Quart;ft.Quint;ft.Strong;var Z1=ft.Elastic,Bu=ft.Back;ft.SteppedEase;ft.Bounce;ft.Sine;ft.Expo;ft.Circ;/*!
 * CSSPlugin 3.11.5
 * https://greensock.com
 *
 * Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Kd,dr,Gs,ku,zr,Zd,zu,J1=function(){return typeof window<"u"},Zi={},Fr=180/Math.PI,Vs=Math.PI/180,Is=Math.atan2,Jd=1e8,Hu=/([A-Z])/g,Q1=/(left|right|width|margin|padding|x)/i,eA=/[\s,\(]\S/,bi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},su=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},tA=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},nA=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},iA=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},Xm=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},qm=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},rA=function(e,t,n){return e.style[t]=n},sA=function(e,t,n){return e.style.setProperty(t,n)},aA=function(e,t,n){return e._gsap[t]=n},oA=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},lA=function(e,t,n,i,r){var a=e._gsap;a.scaleX=a.scaleY=n,a.renderTransform(r,a)},cA=function(e,t,n,i,r){var a=e._gsap;a[t]=n,a.renderTransform(r,a)},zt="transform",mi=zt+"Origin",uA=function s(e,t){var n=this,i=this.target,r=i.style;if(e in Zi){if(this.tfm=this.tfm||{},e!=="transform")e=bi[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return n.tfm[a]=Vi(i,a)}):this.tfm[e]=i._gsap.x?i._gsap[e]:Vi(i,e);else return bi.transform.split(",").forEach(function(a){return s.call(n,a,t)});if(this.props.indexOf(zt)>=0)return;i._gsap.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(mi,t,"")),e=zt}(r||t)&&this.props.push(e,t,r[e])},$m=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},hA=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,r,a;for(r=0;r<e.length;r+=3)e[r+1]?t[e[r]]=e[r+2]:e[r+2]?n[e[r]]=e[r+2]:n.removeProperty(e[r].substr(0,2)==="--"?e[r]:e[r].replace(Hu,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)i[a]=this.tfm[a];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),r=zu(),(!r||!r.isStart)&&!n[zt]&&($m(n),i.uncache=1)}},Ym=function(e,t){var n={target:e,props:[],revert:hA,save:uA};return e._gsap||Bn.core.getCache(e),t&&t.split(",").forEach(function(i){return n.save(i)}),n},jm,au=function(e,t){var n=dr.createElementNS?dr.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):dr.createElement(e);return n.style?n:dr.createElement(e)},Si=function s(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(Hu,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&s(e,ra(t)||t,1)||""},Qd="O,Moz,ms,Ms,Webkit".split(","),ra=function(e,t,n){var i=t||zr,r=i.style,a=5;if(e in r&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);a--&&!(Qd[a]+e in r););return a<0?null:(a===3?"ms":a>=0?Qd[a]:"")+e},ou=function(){J1()&&window.document&&(Kd=window,dr=Kd.document,Gs=dr.documentElement,zr=au("div")||{style:{}},au("div"),zt=ra(zt),mi=zt+"Origin",zr.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",jm=!!ra("perspective"),zu=Bn.core.reverting,ku=1)},Lc=function s(e){var t=au("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,i=this.nextSibling,r=this.style.cssText,a;if(Gs.appendChild(t),t.appendChild(this),this.style.display="block",e)try{a=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=s}catch{}else this._gsapBBox&&(a=this._gsapBBox());return n&&(i?n.insertBefore(this,i):n.appendChild(this)),Gs.removeChild(t),this.style.cssText=r,a},ep=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},Km=function(e){var t;try{t=e.getBBox()}catch{t=Lc.call(e,!0)}return t&&(t.width||t.height)||e.getBBox===Lc||(t=Lc.call(e,!0)),t&&!t.width&&!t.x&&!t.y?{x:+ep(e,["x","cx","x1"])||0,y:+ep(e,["y","cy","y1"])||0,width:0,height:0}:t},Zm=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Km(e))},Wa=function(e,t){if(t){var n=e.style;t in Zi&&t!==mi&&(t=zt),n.removeProperty?((t.substr(0,2)==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(t.replace(Hu,"-$1").toLowerCase())):n.removeAttribute(t)}},pr=function(e,t,n,i,r,a){var o=new Fn(e._pt,t,n,0,1,a?qm:Xm);return e._pt=o,o.b=i,o.e=r,e._props.push(n),o},tp={deg:1,rad:1,turn:1},fA={grid:1,flex:1},yr=function s(e,t,n,i){var r=parseFloat(n)||0,a=(n+"").trim().substr((r+"").length)||"px",o=zr.style,l=Q1.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),h=100,f=i==="px",d=i==="%",v,g,m,p;return i===a||!r||tp[i]||tp[a]?r:(a!=="px"&&!f&&(r=s(e,t,n,"px")),p=e.getCTM&&Zm(e),(d||a==="%")&&(Zi[t]||~t.indexOf("adius"))?(v=p?e.getBBox()[l?"width":"height"]:e[u],Xt(d?r/v*h:r/100*v)):(o[l?"width":"height"]=h+(f?a:i),g=~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,p&&(g=(e.ownerSVGElement||{}).parentNode),(!g||g===dr||!g.appendChild)&&(g=dr.body),m=g._gsap,m&&d&&m.width&&l&&m.time===Wn.time&&!m.uncache?Xt(r/m.width*h):((d||a==="%")&&!fA[Si(g,"display")]&&(o.position=Si(e,"position")),g===e&&(o.position="static"),g.appendChild(zr),v=zr[u],g.removeChild(zr),o.position="absolute",l&&d&&(m=Xr(g),m.time=Wn.time,m.width=g[u]),Xt(f?v*r/h:v&&r?h/v*r:0))))},Vi=function(e,t,n,i){var r;return ku||ou(),t in bi&&t!=="transform"&&(t=bi[t],~t.indexOf(",")&&(t=t.split(",")[0])),Zi[t]&&t!=="transform"?(r=qa(e,i),r=t!=="transformOrigin"?r[t]:r.svg?r.origin:nl(Si(e,mi))+" "+r.zOrigin+"px"):(r=e.style[t],(!r||r==="auto"||i||~(r+"").indexOf("calc("))&&(r=tl[t]&&tl[t](e,t,n)||Si(e,t)||dm(e,t)||(t==="opacity"?1:0))),n&&!~(r+"").trim().indexOf(" ")?yr(e,t,r,n)+n:r},dA=function(e,t,n,i){if(!n||n==="none"){var r=ra(t,e,1),a=r&&Si(e,r,1);a&&a!==n?(t=r,n=a):t==="borderColor"&&(n=Si(e,"borderTopColor"))}var o=new Fn(this._pt,e.style,t,0,1,Gm),l=0,c=0,u,h,f,d,v,g,m,p,S,y,T,E;if(o.b=n,o.e=i,n+="",i+="",i==="auto"&&(e.style[t]=i,i=Si(e,t)||i,e.style[t]=n),u=[n,i],Dm(u),n=u[0],i=u[1],f=n.match(Os)||[],E=i.match(Os)||[],E.length){for(;h=Os.exec(i);)m=h[0],S=i.substring(l,h.index),v?v=(v+1)%5:(S.substr(-5)==="rgba("||S.substr(-5)==="hsla(")&&(v=1),m!==(g=f[c++]||"")&&(d=parseFloat(g)||0,T=g.substr((d+"").length),m.charAt(1)==="="&&(m=Hs(d,m)+T),p=parseFloat(m),y=m.substr((p+"").length),l=Os.lastIndex-y.length,y||(y=y||Xn.units[t]||T,l===i.length&&(i+=y,o.e+=y)),T!==y&&(d=yr(e,t,g,y)||0),o._pt={_next:o._pt,p:S||c===1?S:",",s:d,c:p-d,m:v&&v<4||t==="zIndex"?Math.round:0});o.c=l<i.length?i.substring(l,i.length):""}else o.r=t==="display"&&i==="none"?qm:Xm;return om.test(i)&&(o.e=0),this._pt=o,o},np={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},pA=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=np[n]||n,t[1]=np[i]||i,t.join(" ")},mA=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,r=t.u,a=n._gsap,o,l,c;if(r==="all"||r===!0)i.cssText="",l=1;else for(r=r.split(","),c=r.length;--c>-1;)o=r[c],Zi[o]&&(l=1,o=o==="transformOrigin"?mi:zt),Wa(n,o);l&&(Wa(n,zt),a&&(a.svg&&n.removeAttribute("transform"),qa(n,1),a.uncache=1,$m(i)))}},tl={clearProps:function(e,t,n,i,r){if(r.data!=="isFromStart"){var a=e._pt=new Fn(e._pt,t,n,0,0,mA);return a.u=i,a.pr=-10,a.tween=r,e._props.push(n),1}}},Xa=[1,0,0,1,0,0],Jm={},Qm=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},ip=function(e){var t=Si(e,zt);return Qm(t)?Xa:t.substr(7).match(am).map(Xt)},Gu=function(e,t){var n=e._gsap||Xr(e),i=e.style,r=ip(e),a,o,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,r=[l.a,l.b,l.c,l.d,l.e,l.f],r.join(",")==="1,0,0,1,0,0"?Xa:r):(r===Xa&&!e.offsetParent&&e!==Gs&&!n.svg&&(l=i.display,i.display="block",a=e.parentNode,(!a||!e.offsetParent)&&(c=1,o=e.nextElementSibling,Gs.appendChild(e)),r=ip(e),l?i.display=l:Wa(e,"display"),c&&(o?a.insertBefore(e,o):a?a.appendChild(e):Gs.removeChild(e))),t&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},lu=function(e,t,n,i,r,a){var o=e._gsap,l=r||Gu(e,!0),c=o.xOrigin||0,u=o.yOrigin||0,h=o.xOffset||0,f=o.yOffset||0,d=l[0],v=l[1],g=l[2],m=l[3],p=l[4],S=l[5],y=t.split(" "),T=parseFloat(y[0])||0,E=parseFloat(y[1])||0,w,D,I,b;n?l!==Xa&&(D=d*m-v*g)&&(I=T*(m/D)+E*(-g/D)+(g*S-m*p)/D,b=T*(-v/D)+E*(d/D)-(d*S-v*p)/D,T=I,E=b):(w=Km(e),T=w.x+(~y[0].indexOf("%")?T/100*w.width:T),E=w.y+(~(y[1]||y[0]).indexOf("%")?E/100*w.height:E)),i||i!==!1&&o.smooth?(p=T-c,S=E-u,o.xOffset=h+(p*d+S*g)-p,o.yOffset=f+(p*v+S*m)-S):o.xOffset=o.yOffset=0,o.xOrigin=T,o.yOrigin=E,o.smooth=!!i,o.origin=t,o.originIsAbsolute=!!n,e.style[mi]="0px 0px",a&&(pr(a,o,"xOrigin",c,T),pr(a,o,"yOrigin",u,E),pr(a,o,"xOffset",h,o.xOffset),pr(a,o,"yOffset",f,o.yOffset)),e.setAttribute("data-svg-origin",T+" "+E)},qa=function(e,t){var n=e._gsap||new Om(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,r=n.scaleX<0,a="px",o="deg",l=getComputedStyle(e),c=Si(e,mi)||"0",u,h,f,d,v,g,m,p,S,y,T,E,w,D,I,b,P,$,ae,z,V,H,se,K,te,oe,ue,ye,Z,he,le,ve;return u=h=f=g=m=p=S=y=T=0,d=v=1,n.svg=!!(e.getCTM&&Zm(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[zt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[zt]!=="none"?l[zt]:"")),i.scale=i.rotate=i.translate="none"),D=Gu(e,n.svg),n.svg&&(n.uncache?(te=e.getBBox(),c=n.xOrigin-te.x+"px "+(n.yOrigin-te.y)+"px",K=""):K=!t&&e.getAttribute("data-svg-origin"),lu(e,K||c,!!K||n.originIsAbsolute,n.smooth!==!1,D)),E=n.xOrigin||0,w=n.yOrigin||0,D!==Xa&&($=D[0],ae=D[1],z=D[2],V=D[3],u=H=D[4],h=se=D[5],D.length===6?(d=Math.sqrt($*$+ae*ae),v=Math.sqrt(V*V+z*z),g=$||ae?Is(ae,$)*Fr:0,S=z||V?Is(z,V)*Fr+g:0,S&&(v*=Math.abs(Math.cos(S*Vs))),n.svg&&(u-=E-(E*$+w*z),h-=w-(E*ae+w*V))):(ve=D[6],he=D[7],ue=D[8],ye=D[9],Z=D[10],le=D[11],u=D[12],h=D[13],f=D[14],I=Is(ve,Z),m=I*Fr,I&&(b=Math.cos(-I),P=Math.sin(-I),K=H*b+ue*P,te=se*b+ye*P,oe=ve*b+Z*P,ue=H*-P+ue*b,ye=se*-P+ye*b,Z=ve*-P+Z*b,le=he*-P+le*b,H=K,se=te,ve=oe),I=Is(-z,Z),p=I*Fr,I&&(b=Math.cos(-I),P=Math.sin(-I),K=$*b-ue*P,te=ae*b-ye*P,oe=z*b-Z*P,le=V*P+le*b,$=K,ae=te,z=oe),I=Is(ae,$),g=I*Fr,I&&(b=Math.cos(I),P=Math.sin(I),K=$*b+ae*P,te=H*b+se*P,ae=ae*b-$*P,se=se*b-H*P,$=K,H=te),m&&Math.abs(m)+Math.abs(g)>359.9&&(m=g=0,p=180-p),d=Xt(Math.sqrt($*$+ae*ae+z*z)),v=Xt(Math.sqrt(se*se+ve*ve)),I=Is(H,se),S=Math.abs(I)>2e-4?I*Fr:0,T=le?1/(le<0?-le:le):0),n.svg&&(K=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!Qm(Si(e,zt)),K&&e.setAttribute("transform",K))),Math.abs(S)>90&&Math.abs(S)<270&&(r?(d*=-1,S+=g<=0?180:-180,g+=g<=0?180:-180):(v*=-1,S+=S<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+a,n.y=h-((n.yPercent=h&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-h)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+a,n.z=f+a,n.scaleX=Xt(d),n.scaleY=Xt(v),n.rotation=Xt(g)+o,n.rotationX=Xt(m)+o,n.rotationY=Xt(p)+o,n.skewX=S+o,n.skewY=y+o,n.transformPerspective=T+a,(n.zOrigin=parseFloat(c.split(" ")[2])||0)&&(i[mi]=nl(c)),n.xOffset=n.yOffset=0,n.force3D=Xn.force3D,n.renderTransform=n.svg?_A:jm?eg:gA,n.uncache=0,n},nl=function(e){return(e=e.split(" "))[0]+" "+e[1]},Pc=function(e,t,n){var i=bn(t);return Xt(parseFloat(t)+parseFloat(yr(e,"x",n+"px",i)))+i},gA=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,eg(e,t)},Ir="0deg",Ea="0px",Ur=") ",eg=function(e,t){var n=t||this,i=n.xPercent,r=n.yPercent,a=n.x,o=n.y,l=n.z,c=n.rotation,u=n.rotationY,h=n.rotationX,f=n.skewX,d=n.skewY,v=n.scaleX,g=n.scaleY,m=n.transformPerspective,p=n.force3D,S=n.target,y=n.zOrigin,T="",E=p==="auto"&&e&&e!==1||p===!0;if(y&&(h!==Ir||u!==Ir)){var w=parseFloat(u)*Vs,D=Math.sin(w),I=Math.cos(w),b;w=parseFloat(h)*Vs,b=Math.cos(w),a=Pc(S,a,D*b*-y),o=Pc(S,o,-Math.sin(w)*-y),l=Pc(S,l,I*b*-y+y)}m!==Ea&&(T+="perspective("+m+Ur),(i||r)&&(T+="translate("+i+"%, "+r+"%) "),(E||a!==Ea||o!==Ea||l!==Ea)&&(T+=l!==Ea||E?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+Ur),c!==Ir&&(T+="rotate("+c+Ur),u!==Ir&&(T+="rotateY("+u+Ur),h!==Ir&&(T+="rotateX("+h+Ur),(f!==Ir||d!==Ir)&&(T+="skew("+f+", "+d+Ur),(v!==1||g!==1)&&(T+="scale("+v+", "+g+Ur),S.style[zt]=T||"translate(0, 0)"},_A=function(e,t){var n=t||this,i=n.xPercent,r=n.yPercent,a=n.x,o=n.y,l=n.rotation,c=n.skewX,u=n.skewY,h=n.scaleX,f=n.scaleY,d=n.target,v=n.xOrigin,g=n.yOrigin,m=n.xOffset,p=n.yOffset,S=n.forceCSS,y=parseFloat(a),T=parseFloat(o),E,w,D,I,b;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=Vs,c*=Vs,E=Math.cos(l)*h,w=Math.sin(l)*h,D=Math.sin(l-c)*-f,I=Math.cos(l-c)*f,c&&(u*=Vs,b=Math.tan(c-u),b=Math.sqrt(1+b*b),D*=b,I*=b,u&&(b=Math.tan(u),b=Math.sqrt(1+b*b),E*=b,w*=b)),E=Xt(E),w=Xt(w),D=Xt(D),I=Xt(I)):(E=h,I=f,w=D=0),(y&&!~(a+"").indexOf("px")||T&&!~(o+"").indexOf("px"))&&(y=yr(d,"x",a,"px"),T=yr(d,"y",o,"px")),(v||g||m||p)&&(y=Xt(y+v-(v*E+g*D)+m),T=Xt(T+g-(v*w+g*I)+p)),(i||r)&&(b=d.getBBox(),y=Xt(y+i/100*b.width),T=Xt(T+r/100*b.height)),b="matrix("+E+","+w+","+D+","+I+","+y+","+T+")",d.setAttribute("transform",b),S&&(d.style[zt]=b)},vA=function(e,t,n,i,r){var a=360,o=ln(r),l=parseFloat(r)*(o&&~r.indexOf("rad")?Fr:1),c=l-i,u=i+c+"deg",h,f;return o&&(h=r.split("_")[1],h==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),h==="cw"&&c<0?c=(c+a*Jd)%a-~~(c/a)*a:h==="ccw"&&c>0&&(c=(c-a*Jd)%a-~~(c/a)*a)),e._pt=f=new Fn(e._pt,t,n,i,c,tA),f.e=u,f.u="deg",e._props.push(n),f},rp=function(e,t){for(var n in t)e[n]=t[n];return e},xA=function(e,t,n){var i=rp({},n._gsap),r="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,l,c,u,h,f,d,v;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),a[zt]=t,o=qa(n,1),Wa(n,zt),n.setAttribute("transform",c)):(c=getComputedStyle(n)[zt],a[zt]=t,o=qa(n,1),a[zt]=c);for(l in Zi)c=i[l],u=o[l],c!==u&&r.indexOf(l)<0&&(d=bn(c),v=bn(u),h=d!==v?yr(n,l,c,v):parseFloat(c),f=parseFloat(u),e._pt=new Fn(e._pt,o,l,h,f-h,su),e._pt.u=v||0,e._props.push(l));rp(o,i)};On("padding,margin,Width,Radius",function(s,e){var t="Top",n="Right",i="Bottom",r="Left",a=(e<3?[t,n,i,r]:[t+r,t+n,i+n,i+r]).map(function(o){return e<2?s+o:"border"+o+s});tl[e>1?"border"+s:s]=function(o,l,c,u,h){var f,d;if(arguments.length<4)return f=a.map(function(v){return Vi(o,v,c)}),d=f.join(" "),d.split(f[0]).length===5?f[0]:d;f=(u+"").split(" "),d={},a.forEach(function(v,g){return d[v]=f[g]=f[g]||f[(g-1)/2|0]}),o.init(l,d,h)}});var tg={name:"css",register:ou,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,r){var a=this._props,o=e.style,l=n.vars.startAt,c,u,h,f,d,v,g,m,p,S,y,T,E,w,D,I;ku||ou(),this.styles=this.styles||Ym(e),I=this.styles.props,this.tween=n;for(g in t)if(g!=="autoRound"&&(u=t[g],!(Vn[g]&&Fm(g,t,n,i,e,r)))){if(d=typeof u,v=tl[g],d==="function"&&(u=u.call(n,i,e,r),d=typeof u),d==="string"&&~u.indexOf("random(")&&(u=Ga(u)),v)v(this,e,g,u,n)&&(D=1);else if(g.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(g)+"").trim(),u+="",vr.lastIndex=0,vr.test(c)||(m=bn(c),p=bn(u)),p?m!==p&&(c=yr(e,g,c,p)+p):m&&(u+=m),this.add(o,"setProperty",c,u,i,r,0,0,g),a.push(g),I.push(g,0,o[g]);else if(d!=="undefined"){if(l&&g in l?(c=typeof l[g]=="function"?l[g].call(n,i,e,r):l[g],ln(c)&&~c.indexOf("random(")&&(c=Ga(c)),bn(c+"")||(c+=Xn.units[g]||bn(Vi(e,g))||""),(c+"").charAt(1)==="="&&(c=Vi(e,g))):c=Vi(e,g),f=parseFloat(c),S=d==="string"&&u.charAt(1)==="="&&u.substr(0,2),S&&(u=u.substr(2)),h=parseFloat(u),g in bi&&(g==="autoAlpha"&&(f===1&&Vi(e,"visibility")==="hidden"&&h&&(f=0),I.push("visibility",0,o.visibility),pr(this,o,"visibility",f?"inherit":"hidden",h?"inherit":"hidden",!h)),g!=="scale"&&g!=="transform"&&(g=bi[g],~g.indexOf(",")&&(g=g.split(",")[0]))),y=g in Zi,y){if(this.styles.save(g),T||(E=e._gsap,E.renderTransform&&!t.parseTransform||qa(e,t.parseTransform),w=t.smoothOrigin!==!1&&E.smooth,T=this._pt=new Fn(this._pt,o,zt,0,1,E.renderTransform,E,0,-1),T.dep=1),g==="scale")this._pt=new Fn(this._pt,E,"scaleY",E.scaleY,(S?Hs(E.scaleY,S+h):h)-E.scaleY||0,su),this._pt.u=0,a.push("scaleY",g),g+="X";else if(g==="transformOrigin"){I.push(mi,0,o[mi]),u=pA(u),E.svg?lu(e,u,0,w,0,this):(p=parseFloat(u.split(" ")[2])||0,p!==E.zOrigin&&pr(this,E,"zOrigin",E.zOrigin,p),pr(this,o,g,nl(c),nl(u)));continue}else if(g==="svgOrigin"){lu(e,u,1,w,0,this);continue}else if(g in Jm){vA(this,E,g,f,S?Hs(f,S+u):u);continue}else if(g==="smoothOrigin"){pr(this,E,"smooth",E.smooth,u);continue}else if(g==="force3D"){E[g]=u;continue}else if(g==="transform"){xA(this,u,e);continue}}else g in o||(g=ra(g)||g);if(y||(h||h===0)&&(f||f===0)&&!eA.test(u)&&g in o)m=(c+"").substr((f+"").length),h||(h=0),p=bn(u)||(g in Xn.units?Xn.units[g]:m),m!==p&&(f=yr(e,g,c,p)),this._pt=new Fn(this._pt,y?E:o,g,f,(S?Hs(f,S+h):h)-f,!y&&(p==="px"||g==="zIndex")&&t.autoRound!==!1?iA:su),this._pt.u=p||0,m!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=nA);else if(g in o)dA.call(this,e,g,c,S?S+u:u);else if(g in e)this.add(e,g,c||e[g],S?S+u:u,i,r);else if(g!=="parseTransform"){Cu(g,u);continue}y||(g in o?I.push(g,0,o[g]):I.push(g,1,c||e[g])),a.push(g)}}D&&Vm(this)},render:function(e,t){if(t.tween._time||!zu())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:Vi,aliases:bi,getSetter:function(e,t,n){var i=bi[t];return i&&i.indexOf(",")<0&&(t=i),t in Zi&&t!==mi&&(e._gsap.x||Vi(e,"x"))?n&&Zd===n?t==="scale"?oA:aA:(Zd=n||{})&&(t==="scale"?lA:cA):e.style&&!Au(e.style[t])?rA:~t.indexOf("-")?sA:Ou(e,t)},core:{_removeProperty:Wa,_getMatrix:Gu}};Bn.utils.checkPrefix=ra;Bn.core.getStyleSaver=Ym;(function(s,e,t,n){var i=On(s+","+e+","+t,function(r){Zi[r]=1});On(e,function(r){Xn.units[r]="deg",Jm[r]=1}),bi[i[13]]=s+","+e,On(n,function(r){var a=r.split(":");bi[a[1]]=i[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");On("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(s){Xn.units[s]="px"});Bn.registerPlugin(tg);var Vu=Bn.registerPlugin(tg)||Bn;Vu.core.Tween;const Jt=class{constructor(){j(this,"stats",{frames:0,delta:1/60,fps:60,load:0});j(this,"looper",0);j(this,"callbacks",[]);j(this,"EventBus",Aa.getInstance());j(this,"onResize",e=>{this.EventBus.register("resize",t=>{e(t)})});j(this,"update",()=>{this.stats.frames+=1,this.EventBus.dispatch("update",this.stats)});j(this,"ts",performance.now());j(this,"te",performance.now());j(this,"tf",performance.now());j(this,"nf",0);j(this,"loop",()=>{if(this.nf+=1,this.looper=requestAnimationFrame(this.loop),this.te=performance.now(),this.stats.delta=(this.te-this.ts)/1e3,this.ts=this.te,!document.hidden){this.te-this.tf>=100&&(this.stats.fps=1e3*this.nf/(this.te-this.tf),this.nf=0,this.tf=this.te,this.EventBus.dispatch("engine-stats",this.stats));const e=window.performance.now();this.update(),this.callbacks.map(t=>t(this.stats)),this.stats.load=window.performance.now()-e,this.stats.heap=QT.getHeapInfo()}});j(this,"addCallback",e=>{this.callbacks.indexOf(e)===-1&&this.callbacks.push(e)});j(this,"removeCallback",e=>{this.callbacks=this.callbacks.filter(t=>t!==e)});j(this,"onFrame",e=>{this.addCallback(e)});j(this,"start",()=>{this.loop()});j(this,"stop",()=>{cancelAnimationFrame(this.looper)});j(this,"getHeapLimit",()=>this.stats.heap?this.stats.heap.limitSize:NaN);j(this,"getHeapSize",()=>this.stats.heap?this.stats.heap.totalSize:NaN);j(this,"getHeapUsed",()=>this.stats.heap?this.stats.heap.usedSize:NaN);j(this,"getHeapAllocated",()=>this.stats.heap?this.stats.heap.allocated:NaN);j(this,"getHeapConsumed",()=>this.stats.heap?this.stats.heap.consumed:NaN);j(this,"updateDOMRect",()=>Jt.updateDOMRect());j(this,"getOverlayContainers",()=>Jt.getOverlayContainers());j(this,"getOverlayCanvases",()=>Jt.getOverlayCanvases());j(this,"getResources",()=>Rn.resources);j(this,"downloadResources",async e=>await Rn.downloadResources(e));j(this,"createGraphics",e=>new n1(Jt.getInstance(),e));j(this,"createTween",e=>{const t=e,n={value:t.firstValue};return Vu.to(n,{ease:t.ease?t.ease:Bu.easeInOut,value:t.lastValue,duration:t.duration?t.duration:1,repeat:t.repeat===void 0||t.repeat==0?0:t.repeat,yoyo:t.yoyo===!0?t.yoyo:!1,onUpdate:()=>t.onUpdate(n.value),onComplete:()=>{var i;return(i=t.onComplete)==null?void 0:i.call(t)}})});window.addEventListener("resize",()=>{this.EventBus.dispatch("resize",{width:window.innerWidth,height:window.innerHeight})})}};let Qt=Jt;j(Qt,"instance"),j(Qt,"getInstance",()=>(Jt.instance===void 0&&(Jt.instance=new Jt),Jt.instance)),j(Qt,"generateUUID",(e,t)=>{const n="0123456789abcdefghijklmnopqrstuvwxyz";let i="";for(let r=0;r<7;r++){const a=Math.floor(Math.random()*n.length);if(a<0||a>n.length)throw new Error("The index %{idx} is out of range!!");i+=n[a]}return i=e?`${e}-${i}`:i,i=t?`${i}-${t}`:i,i}),j(Qt,"getElementById",e=>document.getElementById(e)),j(Qt,"getCanvasById",e=>document.getElementById(e)),j(Qt,"createCanvas",e=>{const t=document.createElement("canvas");return t.id=Jt.generateUUID(e||"canvas"),t}),j(Qt,"createOverlayContainer",(e,t)=>{const n=document.createElement("div");return n.id=Jt.generateUUID(e||"overlay-div-container"),n.style.position="absolute",n.style.top="0",n.style.left="0",n.style.bottom="0",n.style.right="0",console.log(`%cOverlay Container "${n.id}" is created`,"color:#a5f"),n.style.backgroundColor=t||"rgba(0, 0, 0, 0.0)",n}),j(Qt,"init",e=>new Promise(t=>{ap(async()=>{var n;await Rn.downloadResources("Engine.init"),Jt.updateDOMRect(),t(Jt.getInstance()),(n=e==null?void 0:e.mountCallback)==null||n.call(e,Jt.getInstance())}),op(()=>{var n;Jt.instance&&((n=e==null?void 0:e.destroyCallback)==null||n.call(e,Jt.getInstance()))})})),j(Qt,"updateDOMRect",()=>{const e=[];return new Promise((t,n)=>{window.requestAnimationFrame(()=>{document.querySelectorAll("canvas").forEach(i=>{const r=i.getBoundingClientRect();e.push({id:i.id,rect:r})}),document.querySelectorAll("div").forEach(i=>{const r=i.getBoundingClientRect();e.push({id:i.id,rect:r})}),t(e)})})}),j(Qt,"getOverlayContainers",async()=>{const e=[];return await Jt.updateDOMRect(),document.querySelectorAll("div").forEach(t=>{t.getBoundingClientRect(),t.id.includes("overlay-container")&&e.push(t)}),e}),j(Qt,"getOverlayCanvases",async()=>{const e=[];return await Jt.updateDOMRect(),document.querySelectorAll("canvas").forEach(t=>{t.getBoundingClientRect(),t.id.includes("overlay-canvas")&&e.push(t)}),e});function yA(s){let e,t,n;return{c(){e=xn("div"),t=xn("span"),n=Yt("Additional Scene"),this.h()},l(i){e=yn(i,"DIV",{id:!0,class:!0});var r=Mn(e);t=yn(r,"SPAN",{class:!0});var a=Mn(t);n=jt(a,"Additional Scene"),a.forEach(Kt),r.forEach(Kt),this.h()},h(){Wt(t,"class","flex bg-black w-fill p-2 opacity-20 z-auto"),Wt(e,"id",s[0]),Wt(e,"class","border border-yellow-400 w-fit")},m(i,r){Bo(i,e,r),Qe(e,t),Qe(t,n)},p:kl,i:kl,o:kl,d(i){i&&Kt(e)}}}function MA(s,e,t){let{engine:n}=e,i=`container3-${Math.random().toFixed(4)}`;return ap(async()=>{const r=n.createGraphics(i),a=r.useScene(n.getResources().glTFs[0],2);r.nextEnvironment();const o=20;r.setSize(o*16,o*9),r.createRaySensor().sense("Ball",{mouseDown:u=>r.previousEnvironment()});let c={value:0};Vu.to(c,{value:Math.PI*2,duration:2,ease:Bu.easeInOut,repeat:-1,yoyo:!0,onUpdate:()=>{a.rotation.y=c.value},onComplete:()=>{}})}),op(()=>{n==null||n.stop()}),s.$$set=r=>{"engine"in r&&t(1,n=r.engine)},[i,n]}class bA extends lp{constructor(e){super(),cp(this,e,MA,yA,up,{engine:1})}}class SA{constructor(e){j(this,"context");j(this,"clear",()=>{this.canvas.width=0+this.canvas.width});j(this,"ngV",6);j(this,"ngH",6);j(this,"drawGrids",e=>{this.ngV=(e==null?void 0:e.ngV)===void 0?this.ngV:e==null?void 0:e.ngV,this.ngH=(e==null?void 0:e.ngH)===void 0?this.ngH:e==null?void 0:e.ngH;const t=this.canvas,n=this.context;n.save();const i=t.width/this.ngV,r=t.height/this.ngH;n.strokeStyle=bc("cyan").alpha(.8).hex(),n.lineWidth=.65,n.setLineDash([5,5]),n.beginPath();for(let o=1;o<=this.ngH;o++){const l=Math.round(o*r);n.moveTo(0,l),n.lineTo(t.width,l)}for(let o=0;o<this.ngV;o++){const l=Math.round(o*i);n.moveTo(l,0),n.lineTo(l,t.height)}n.stroke(),n.strokeStyle=bc("red").alpha(.65).hex(),n.lineWidth=1.8,n.setLineDash([]),n.beginPath(),n.translate(this.cX(),this.cY()),n.rotate(0);const a=7;n.moveTo(-a,0),n.lineTo(a,0),n.moveTo(0,-a),n.lineTo(0,a),n.stroke(),n.restore()});j(this,"gX",()=>Math.round(this.canvas.width/this.ngV));j(this,"gY",()=>Math.round(this.canvas.height/this.ngH));j(this,"cX",()=>Math.round(this.canvas.width/2));j(this,"cY",()=>Math.round(this.canvas.height/2));j(this,"getCanvas",()=>this.canvas);j(this,"getContext",()=>this.context);j(this,"getWidth",()=>this.canvas.width);j(this,"getHeight",()=>this.canvas.height);j(this,"fillBackground",(e,t)=>{this.canvas.width=0+this.canvas.width;const n=this.context;n.fillStyle=bc(e===void 0?"black":e).alpha(t===void 0?1:t).hex(),n.fillRect(0,0,this.canvas.width,this.canvas.height)});j(this,"setSize",(e,t)=>{this.canvas.width=e,this.canvas.height=t});j(this,"getSize",()=>({width:this.canvas.width,height:this.canvas.height}));j(this,"createLinearGradient",(e,t,n,i)=>{let r;return i==="y"?r=this.context.createLinearGradient(0,this.canvas.height/2,0,-this.canvas.height/2):i==="x"?r=this.context.createLinearGradient(0,this.canvas.height/2,this.canvas.width,this.canvas.height/2):r=this.context.createLinearGradient(0,this.canvas.height/2,this.canvas.width,-this.canvas.height/2),r.addColorStop(0,e),r.addColorStop(.5,t),r.addColorStop(1,n),r});if(this.canvas=e,this.context=e.getContext("2d"),this.context===null)throw new Error(`Cannot can 2d context of the canvas "${e.id}".`)}}class EA extends SA{constructor(t){super(t);j(this,"samples");j(this,"buffer",[]);j(this,"add",(t,n)=>{this.buffer.push(t),this.buffer.length>this.samples&&this.buffer.shift(),n!==!0&&this.redraw()});j(this,"redraw",()=>{this.fillBackground("black",0),this.drawGrids();const t=this.cY(),n=this.context;n.beginPath(),n.strokeStyle=this.createLinearGradient("white","yellow","red","y"),n.lineWidth=2.5,n.save(),n.translate(0,t);const i=this.getSize().width/this.samples;for(let r=1;r<this.buffer.length;r++){const a=this.buffer[r]*-1,o=r*i;n.lineTo(o,a)}n.stroke(),n.filter="",n.restore()});this.samples=500}}function sp(s){let e,t;return e=new bA({props:{engine:s[5]}}),{c(){gv(e.$$.fragment)},l(n){_v(e.$$.fragment,n)},m(n,i){vv(e,n,i),t=!0},p(n,i){const r={};i&32&&(r.engine=n[5]),e.$set(r)},i(n){t||(ko(e.$$.fragment,n),t=!0)},o(n){Dc(e.$$.fragment,n),t=!1},d(n){xv(e,n)}}}function TA(s){var Ge,ct,Dt,Ut;let e,t,n,i,r,a=((Ge=s[0])==null?void 0:Ge.frames)+"",o,l,c,u,h=((ct=s[0])==null?void 0:ct.fps.toFixed(3))+"",f,d,v,g,m=((Dt=s[0])==null?void 0:Dt.delta.toFixed(3))+"",p,S,y,T,E=((Ut=s[0])==null?void 0:Ut.load.toFixed(3))+"",w,D,I,b,P,$,ae,z,V,H,se,K=(s[1]/1e6).toFixed(2)+"",te,oe,ue,ye,Z,he=s[2].toFixed(4)+"",le,ve,Ae,Ne,Ye,Be=s[3].toFixed(4)+"",St,Ke,q,Lt,Ie,Ve,Fe,Ze,Ue=s[5]&&sp(s);return{c(){e=xn("div"),t=xn("div"),n=xn("div"),i=xn("span"),r=Yt("frames: "),o=Yt(a),l=_i(),c=xn("span"),u=Yt("fps: "),f=Yt(h),d=_i(),v=xn("span"),g=Yt("delta: "),p=Yt(m),S=_i(),y=xn("span"),T=Yt("load: "),w=Yt(E),D=Yt("%"),I=_i(),b=xn("div"),P=_i(),$=xn("div"),ae=_i(),Ue&&Ue.c(),z=_i(),V=xn("div"),H=xn("span"),se=Yt("Limit: "),te=Yt(K),oe=Yt("MB"),ue=_i(),ye=xn("span"),Z=Yt("Size: "),le=Yt(he),ve=Yt("%"),Ae=_i(),Ne=xn("span"),Ye=Yt("Used: "),St=Yt(Be),Ke=Yt("%"),Lt=_i(),Ie=xn("div"),Ve=Yt("loading... please wait"),this.h()},l(R){e=yn(R,"DIV",{class:!0});var A=Mn(e);t=yn(A,"DIV",{class:!0});var Q=Mn(t);n=yn(Q,"DIV",{class:!0});var fe=Mn(n);i=yn(fe,"SPAN",{class:!0});var pe=Mn(i);r=jt(pe,"frames: "),o=jt(pe,a),pe.forEach(Kt),l=vi(fe),c=yn(fe,"SPAN",{class:!0});var U=Mn(c);u=jt(U,"fps: "),f=jt(U,h),U.forEach(Kt),d=vi(fe),v=yn(fe,"SPAN",{class:!0});var ce=Mn(v);g=jt(ce,"delta: "),p=jt(ce,m),ce.forEach(Kt),S=vi(fe),y=yn(fe,"SPAN",{class:!0});var me=Mn(y);T=jt(me,"load: "),w=jt(me,E),D=jt(me,"%"),me.forEach(Kt),fe.forEach(Kt),I=vi(Q),b=yn(Q,"DIV",{id:!0,class:!0}),Mn(b).forEach(Kt),P=vi(Q),$=yn(Q,"DIV",{id:!0,class:!0}),Mn($).forEach(Kt),ae=vi(Q),Ue&&Ue.l(Q),Q.forEach(Kt),z=vi(A),V=yn(A,"DIV",{class:!0});var J=Mn(V);H=yn(J,"SPAN",{class:!0});var we=Mn(H);se=jt(we,"Limit: "),te=jt(we,K),oe=jt(we,"MB"),we.forEach(Kt),ue=vi(J),ye=yn(J,"SPAN",{class:!0});var Le=Mn(ye);Z=jt(Le,"Size: "),le=jt(Le,he),ve=jt(Le,"%"),Le.forEach(Kt),Ae=vi(J),Ne=yn(J,"SPAN",{class:!0});var Oe=Mn(Ne);Ye=jt(Oe,"Used: "),St=jt(Oe,Be),Ke=jt(Oe,"%"),Oe.forEach(Kt),J.forEach(Kt),A.forEach(Kt),Lt=vi(R),Ie=yn(R,"DIV",{class:!0});var Re=Mn(Ie);Ve=jt(Re,"loading... please wait"),Re.forEach(Kt),this.h()},h(){Wt(i,"class","heap px-1 text-yellow-400 svelte-1917q3v"),Wt(c,"class","heap px-1 text-pink-400 svelte-1917q3v"),Wt(v,"class","heap px-1 text-blue-400 svelte-1917q3v"),Wt(y,"class","heap px-1 text-green-400 svelte-1917q3v"),Wt(n,"class","pt-4"),Wt(b,"id","container0"),Wt(b,"class","border border-blue-700 w-fit"),Wt($,"id","container1"),Wt($,"class","border border-yellow-700 w-fit"),Wt(t,"class","flex flex-col space-y-5"),Wt(H,"class","heap text-yellow-400 px-1 svelte-1917q3v"),Wt(ye,"class","heap text-green-400 px-1 svelte-1917q3v"),Wt(Ne,"class","heap text-pink-400 px-1 svelte-1917q3v"),Wt(V,"class","py-4"),Wt(e,"class",q=`${s[4]?"":"hidden"} container h-screen border border-gray-600 mx-auto flex justify-center items-center flex-col svelte-1917q3v`),Wt(Ie,"class",Fe=`${s[4]?"hidden":""} flex h-screen bg-gray-700 text-center justify-center items-center text-3xl svelte-1917q3v`)},m(R,A){Bo(R,e,A),Qe(e,t),Qe(t,n),Qe(n,i),Qe(i,r),Qe(i,o),Qe(n,l),Qe(n,c),Qe(c,u),Qe(c,f),Qe(n,d),Qe(n,v),Qe(v,g),Qe(v,p),Qe(n,S),Qe(n,y),Qe(y,T),Qe(y,w),Qe(y,D),Qe(t,I),Qe(t,b),Qe(t,P),Qe(t,$),Qe(t,ae),Ue&&Ue.m(t,null),Qe(e,z),Qe(e,V),Qe(V,H),Qe(H,se),Qe(H,te),Qe(H,oe),Qe(V,ue),Qe(V,ye),Qe(ye,Z),Qe(ye,le),Qe(ye,ve),Qe(V,Ae),Qe(V,Ne),Qe(Ne,Ye),Qe(Ne,St),Qe(Ne,Ke),Bo(R,Lt,A),Bo(R,Ie,A),Qe(Ie,Ve),Ze=!0},p(R,[A]){var Q,fe,pe,U;(!Ze||A&1)&&a!==(a=((Q=R[0])==null?void 0:Q.frames)+"")&&Rr(o,a),(!Ze||A&1)&&h!==(h=((fe=R[0])==null?void 0:fe.fps.toFixed(3))+"")&&Rr(f,h),(!Ze||A&1)&&m!==(m=((pe=R[0])==null?void 0:pe.delta.toFixed(3))+"")&&Rr(p,m),(!Ze||A&1)&&E!==(E=((U=R[0])==null?void 0:U.load.toFixed(3))+"")&&Rr(w,E),R[5]?Ue?(Ue.p(R,A),A&32&&ko(Ue,1)):(Ue=sp(R),Ue.c(),ko(Ue,1),Ue.m(t,null)):Ue&&(yv(),Dc(Ue,1,1,()=>{Ue=null}),mv()),(!Ze||A&2)&&K!==(K=(R[1]/1e6).toFixed(2)+"")&&Rr(te,K),(!Ze||A&4)&&he!==(he=R[2].toFixed(4)+"")&&Rr(le,he),(!Ze||A&8)&&Be!==(Be=R[3].toFixed(4)+"")&&Rr(St,Be),(!Ze||A&16&&q!==(q=`${R[4]?"":"hidden"} container h-screen border border-gray-600 mx-auto flex justify-center items-center flex-col svelte-1917q3v`))&&Wt(e,"class",q),(!Ze||A&16&&Fe!==(Fe=`${R[4]?"hidden":""} flex h-screen bg-gray-700 text-center justify-center items-center text-3xl svelte-1917q3v`))&&Wt(Ie,"class",Fe)},i(R){Ze||(ko(Ue),Ze=!0)},o(R){Dc(Ue),Ze=!1},d(R){R&&Kt(e),Ue&&Ue.d(),R&&Kt(Lt),R&&Kt(Ie)}}}function AA(s,e,t){let n,i=0,r=0,a=0,o=!1,l;return Qt.init({}).then(c=>{t(4,o=!0),t(5,l=c),l.start(),l.onFrame(p=>{t(0,n=p),t(1,i=l.getHeapLimit()),t(2,r=l.getHeapAllocated()),t(3,a=l.getHeapConsumed())});let u=l.createGraphics("container0"),h=l.createGraphics("container1");u.nextEnvironment(),h.previousEnvironment();const f=l.getResources().glTFs[0],d=u.useScene(f,2),v=h.useScene(f,2);u.createRaySensor().sense("Ball",{mouseDown:p=>{u.previousEnvironment(),h.previousEnvironment()},mouseDrag:p=>{console.dir(p.object.name)}});const m=20;u.setSize(m*16,m*9),h.setSize(m*16,m*9),u.getGraphicsCanvas().initialCanvas2D().then(p=>{const S=p.getContext("2d"),y=p.width/2,T=p.height/2,E=50;S&&(S.beginPath(),S.arc(y,T,E,0,2*Math.PI,!1),S.closePath(),S.fillStyle="rgba(255, 0, 255, 0.4)",S.fill())}),l.createTween({firstValue:0,lastValue:Math.PI*2,ease:Bu.easeIn,yoyo:!0,repeat:-1,duration:2.5,onUpdate:p=>{}}),l.getOverlayCanvases().then(p=>{const S=new EA(p[0]);l.createTween({firstValue:0,lastValue:Math.PI*2,ease:Z1.easeIn,yoyo:!0,repeat:-1,duration:1.5,onUpdate:y=>{d.rotation.y=y,v.rotation.y=y*1,S.add(y/(Math.PI*2)*S.getHeight()/2)}})})}),[n,i,r,a,o,l]}class LA extends lp{constructor(e){super(),cp(this,e,AA,TA,up,{})}}export{LA as component};
