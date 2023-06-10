var kv=Object.defineProperty;var Bv=(s,e,t)=>e in s?kv(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var V=(s,e,t)=>(Bv(s,typeof e!="symbol"?e+"":e,t),t);import{o as so,J as Mu,K as zv,L as il,M as Ap,S as ca,i as ua,s as ha,e as lf,b as mi,g as gi,v as wp,d as Ei,f as Rp,h as gt,I as Hv,N as cf,k as Zt,l as Jt,m as Qt,n as Et,G as Ge,O as Gv,a as Xn,q as zt,c as qn,r as Ht,P as Cp,u as Yi,Q as Vv,R as Wv,T as Xv,U as qv,V as Yv,W as jv,X as $v,H as Ys,C as Lp,y as Fa,z as ka,A as Ba,D as Pp,E as Dp,F as Ip,B as za}from"../chunks/index.3fce1b33.js";import{w as bu}from"../chunks/index.60961a65.js";/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Su="153",gs={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},_s={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Kv=0,uf=1,Zv=2,Up=1,Jv=2,Wi=3,Qi=0,Un=1,bi=2,xr=0,Hs=1,hf=2,ff=3,df=4,Qv=5,Fs=100,ex=101,tx=102,pf=103,mf=104,nx=200,ix=201,rx=202,sx=203,Np=204,Op=205,ax=206,ox=207,lx=208,cx=209,ux=210,hx=0,fx=1,dx=2,Xc=3,px=4,mx=5,gx=6,_x=7,Fp=0,vx=1,xx=2,Zi=0,yx=1,Mx=2,bx=3,Sx=4,Ex=5,kp=300,js=301,$s=302,qc=303,Yc=304,_l=306,Ks=1e3,ei=1001,rl=1002,un=1003,jc=1004,Zo=1005,Dn=1006,Bp=1007,Zr=1008,yr=1009,Tx=1010,Ax=1011,Eu=1012,zp=1013,pr=1014,ji=1015,ja=1016,Hp=1017,Gp=1018,Wr=1020,wx=1021,ti=1023,Rx=1024,Cx=1025,Xr=1026,Zs=1027,Lx=1028,Vp=1029,Px=1030,Wp=1031,Xp=1033,Ql=33776,ec=33777,tc=33778,nc=33779,gf=35840,_f=35841,vf=35842,xf=35843,Dx=36196,yf=37492,Mf=37496,bf=37808,Sf=37809,Ef=37810,Tf=37811,Af=37812,wf=37813,Rf=37814,Cf=37815,Lf=37816,Pf=37817,Df=37818,If=37819,Uf=37820,Nf=37821,ic=36492,Ix=36283,Of=36284,Ff=36285,kf=36286,$a=2300,Js=2301,rc=2302,Bf=2400,zf=2401,Hf=2402,Ux=2500,Nx=0,qp=1,$c=2,Yp=3e3,qr=3001,Ox=3200,Fx=3201,jp=0,kx=1,Yr="",We="srgb",wi="srgb-linear",$p="display-p3",sc=7680,Bx=519,zx=512,Hx=513,Gx=514,Vx=515,Wx=516,Xx=517,qx=518,Yx=519,Kc=35044,Gf="300 es",Zc=1035,$i=2e3,sl=2001;class ns{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,e);e.target=null}}}const yn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Vf=1234567;const Ha=Math.PI/180,Qs=180/Math.PI;function _i(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(yn[s&255]+yn[s>>8&255]+yn[s>>16&255]+yn[s>>24&255]+"-"+yn[e&255]+yn[e>>8&255]+"-"+yn[e>>16&15|64]+yn[e>>24&255]+"-"+yn[t&63|128]+yn[t>>8&255]+"-"+yn[t>>16&255]+yn[t>>24&255]+yn[n&255]+yn[n>>8&255]+yn[n>>16&255]+yn[n>>24&255]).toLowerCase()}function gn(s,e,t){return Math.max(e,Math.min(t,s))}function Tu(s,e){return(s%e+e)%e}function jx(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function $x(s,e,t){return s!==e?(t-s)/(e-s):0}function Ga(s,e,t){return(1-t)*s+t*e}function Kx(s,e,t,n){return Ga(s,e,1-Math.exp(-t*n))}function Zx(s,e=1){return e-Math.abs(Tu(s,e*2)-e)}function Jx(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function Qx(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function ey(s,e){return s+Math.floor(Math.random()*(e-s+1))}function ty(s,e){return s+Math.random()*(e-s)}function ny(s){return s*(.5-Math.random())}function iy(s){s!==void 0&&(Vf=s);let e=Vf+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function ry(s){return s*Ha}function sy(s){return s*Qs}function Jc(s){return(s&s-1)===0&&s!==0}function Kp(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function al(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function ay(s,e,t,n,i){const r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),u=a((e+n)/2),h=r((e-n)/2),f=a((e-n)/2),d=r((n-e)/2),v=a((n-e)/2);switch(i){case"XYX":s.set(o*u,l*h,l*f,o*c);break;case"YZY":s.set(l*f,o*u,l*h,o*c);break;case"ZXZ":s.set(l*h,l*f,o*u,o*c);break;case"XZX":s.set(o*u,l*v,l*d,o*c);break;case"YXY":s.set(l*d,o*u,l*v,o*c);break;case"ZYZ":s.set(l*v,l*d,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Ki(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Rt(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const oy={DEG2RAD:Ha,RAD2DEG:Qs,generateUUID:_i,clamp:gn,euclideanModulo:Tu,mapLinear:jx,inverseLerp:$x,lerp:Ga,damp:Kx,pingpong:Zx,smoothstep:Jx,smootherstep:Qx,randInt:ey,randFloat:ty,randFloatSpread:ny,seededRandom:iy,degToRad:ry,radToDeg:sy,isPowerOfTwo:Jc,ceilPowerOfTwo:Kp,floorPowerOfTwo:al,setQuaternionFromProperEuler:ay,normalize:Rt,denormalize:Ki};class Xe{constructor(e=0,t=0){Xe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(gn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*i+e.x,this.y=r*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class at{constructor(e,t,n,i,r,a,o,l,c){at.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,l,c)}set(e,t,n,i,r,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=o,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],d=n[5],v=n[8],g=i[0],m=i[3],p=i[6],S=i[1],y=i[4],T=i[7],E=i[2],A=i[5],R=i[8];return r[0]=a*g+o*S+l*E,r[3]=a*m+o*y+l*A,r[6]=a*p+o*T+l*R,r[1]=c*g+u*S+h*E,r[4]=c*m+u*y+h*A,r[7]=c*p+u*T+h*R,r[2]=f*g+d*S+v*E,r[5]=f*m+d*y+v*A,r[8]=f*p+d*T+v*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*r*u+n*o*l+i*r*c-i*a*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=u*a-o*c,f=o*l-u*r,d=c*r-a*l,v=t*h+n*f+i*d;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/v;return e[0]=h*g,e[1]=(i*c-u*n)*g,e[2]=(o*n-i*a)*g,e[3]=f*g,e[4]=(u*t-i*l)*g,e[5]=(i*r-o*t)*g,e[6]=d*g,e[7]=(n*l-c*t)*g,e[8]=(a*t-n*r)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(ac.makeScale(e,t)),this}rotate(e){return this.premultiply(ac.makeRotation(-e)),this}translate(e,t){return this.premultiply(ac.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ac=new at;function Zp(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Ka(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}const Wf={};function Va(s){s in Wf||(Wf[s]=!0,console.warn(s))}function Gs(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function oc(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const ly=new at().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),cy=new at().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function uy(s){return s.convertSRGBToLinear().applyMatrix3(cy)}function hy(s){return s.applyMatrix3(ly).convertLinearToSRGB()}const fy={[wi]:s=>s,[We]:s=>s.convertSRGBToLinear(),[$p]:uy},dy={[wi]:s=>s,[We]:s=>s.convertLinearToSRGB(),[$p]:hy},ui={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(s){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!s},get workingColorSpace(){return wi},set workingColorSpace(s){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(s,e,t){if(this.enabled===!1||e===t||!e||!t)return s;const n=fy[e],i=dy[t];if(n===void 0||i===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return i(n(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this.workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this.workingColorSpace)}};let vs;class Jp{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{vs===void 0&&(vs=Ka("canvas")),vs.width=e.width,vs.height=e.height;const n=vs.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=vs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ka("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=Gs(r[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Gs(t[n]/255)*255):t[n]=Gs(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let py=0;class Qp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:py++}),this.uuid=_i(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(lc(i[a].image)):r.push(lc(i[a]))}else r=lc(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function lc(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Jp.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let my=0;class xn extends ns{constructor(e=xn.DEFAULT_IMAGE,t=xn.DEFAULT_MAPPING,n=ei,i=ei,r=Dn,a=Zr,o=ti,l=yr,c=xn.DEFAULT_ANISOTROPY,u=Yr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:my++}),this.uuid=_i(),this.name="",this.source=new Qp(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Xe(0,0),this.repeat=new Xe(1,1),this.center=new Xe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new at,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(Va("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===qr?We:Yr),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==kp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ks:e.x=e.x-Math.floor(e.x);break;case ei:e.x=e.x<0?0:1;break;case rl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ks:e.y=e.y-Math.floor(e.y);break;case ei:e.y=e.y<0?0:1;break;case rl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Va("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===We?qr:Yp}set encoding(e){Va("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===qr?We:Yr}}xn.DEFAULT_IMAGE=null;xn.DEFAULT_MAPPING=kp;xn.DEFAULT_ANISOTROPY=1;class Lt{constructor(e=0,t=0,n=0,i=1){Lt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],v=l[9],g=l[2],m=l[6],p=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-g)<.01&&Math.abs(v-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+g)<.1&&Math.abs(v+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(c+1)/2,T=(d+1)/2,E=(p+1)/2,A=(u+f)/4,R=(h+g)/4,L=(v+m)/4;return y>T&&y>E?y<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(y),i=A/n,r=R/n):T>E?T<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(T),n=A/i,r=L/i):E<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(E),n=R/r,i=L/r),this.set(n,i,r,t),this}let S=Math.sqrt((m-v)*(m-v)+(h-g)*(h-g)+(f-u)*(f-u));return Math.abs(S)<.001&&(S=1),this.x=(m-v)/S,this.y=(h-g)/S,this.z=(f-u)/S,this.w=Math.acos((c+d+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Jr extends ns{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Lt(0,0,e,t),this.scissorTest=!1,this.viewport=new Lt(0,0,e,t);const i={width:e,height:t,depth:1};n.encoding!==void 0&&(Va("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===qr?We:Yr),this.texture=new xn(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Dn,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Qp(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class em extends xn{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=un,this.minFilter=un,this.wrapR=ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class gy extends xn{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=un,this.minFilter=un,this.wrapR=ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ri{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,a,o){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3];const f=r[a+0],d=r[a+1],v=r[a+2],g=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(o===1){e[t+0]=f,e[t+1]=d,e[t+2]=v,e[t+3]=g;return}if(h!==g||l!==f||c!==d||u!==v){let m=1-o;const p=l*f+c*d+u*v+h*g,S=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){const E=Math.sqrt(y),A=Math.atan2(E,p*S);m=Math.sin(m*A)/E,o=Math.sin(o*A)/E}const T=o*S;if(l=l*m+f*T,c=c*m+d*T,u=u*m+v*T,h=h*m+g*T,m===1-o){const E=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=E,c*=E,u*=E,h*=E}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,r,a){const o=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=r[a],f=r[a+1],d=r[a+2],v=r[a+3];return e[t]=o*v+u*h+l*d-c*f,e[t+1]=l*v+u*f+c*h-o*d,e[t+2]=c*v+u*d+o*f-l*h,e[t+3]=u*v-o*h-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,i=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(i/2),h=o(r/2),f=l(n/2),d=l(i/2),v=l(r/2);switch(a){case"XYZ":this._x=f*u*h+c*d*v,this._y=c*d*h-f*u*v,this._z=c*u*v+f*d*h,this._w=c*u*h-f*d*v;break;case"YXZ":this._x=f*u*h+c*d*v,this._y=c*d*h-f*u*v,this._z=c*u*v-f*d*h,this._w=c*u*h+f*d*v;break;case"ZXY":this._x=f*u*h-c*d*v,this._y=c*d*h+f*u*v,this._z=c*u*v+f*d*h,this._w=c*u*h-f*d*v;break;case"ZYX":this._x=f*u*h-c*d*v,this._y=c*d*h+f*u*v,this._z=c*u*v-f*d*h,this._w=c*u*h+f*d*v;break;case"YZX":this._x=f*u*h+c*d*v,this._y=c*d*h+f*u*v,this._z=c*u*v-f*d*h,this._w=c*u*h-f*d*v;break;case"XZY":this._x=f*u*h-c*d*v,this._y=c*d*h-f*u*v,this._z=c*u*v+f*d*h,this._w=c*u*h+f*d*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=n+o+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(r-c)*d,this._z=(a-i)*d}else if(n>o&&n>h){const d=2*Math.sqrt(1+n-o-h);this._w=(u-l)/d,this._x=.25*d,this._y=(i+a)/d,this._z=(r+c)/d}else if(o>h){const d=2*Math.sqrt(1+o-n-h);this._w=(r-c)/d,this._x=(i+a)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+h-n-o);this._w=(a-i)/d,this._x=(r+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(gn(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+i*c-r*l,this._y=i*u+a*l+r*o-n*c,this._z=r*u+a*c+n*l-i*o,this._w=a*u-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,a=this._w;let o=a*e._w+n*e._x+i*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const d=1-t;return this._w=d*a+t*this._w,this._x=d*n+t*this._x,this._y=d*i+t*this._y,this._z=d*r+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),h=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=a*h+this._w*f,this._x=n*h+this._x*f,this._y=i*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(r),n*Math.cos(r),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class G{constructor(e=0,t=0,n=0){G.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Xf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Xf.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=l*t+a*i-o*n,u=l*n+o*t-r*i,h=l*i+r*n-a*t,f=-r*t-a*n-o*i;return this.x=c*l+f*-r+u*-o-h*-a,this.y=u*l+f*-a+h*-r-c*-o,this.z=h*l+f*-o+c*-a-u*-r,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-r*o,this.y=r*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return cc.copy(this).projectOnVector(e),this.sub(cc)}reflect(e){return this.sub(cc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(gn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const cc=new G,Xf=new Ri;class nr{constructor(e=new G(1/0,1/0,1/0),t=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(ki.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(ki.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=ki.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),xs.copy(e.boundingBox),xs.applyMatrix4(e.matrixWorld),this.union(xs);else{const i=e.geometry;if(i!==void 0)if(t&&i.attributes!==void 0&&i.attributes.position!==void 0){const r=i.attributes.position;for(let a=0,o=r.count;a<o;a++)ki.fromBufferAttribute(r,a).applyMatrix4(e.matrixWorld),this.expandByPoint(ki)}else i.boundingBox===null&&i.computeBoundingBox(),xs.copy(i.boundingBox),xs.applyMatrix4(e.matrixWorld),this.union(xs)}const n=e.children;for(let i=0,r=n.length;i<r;i++)this.expandByObject(n[i],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,ki),ki.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ba),To.subVectors(this.max,ba),ys.subVectors(e.a,ba),Ms.subVectors(e.b,ba),bs.subVectors(e.c,ba),or.subVectors(Ms,ys),lr.subVectors(bs,Ms),Dr.subVectors(ys,bs);let t=[0,-or.z,or.y,0,-lr.z,lr.y,0,-Dr.z,Dr.y,or.z,0,-or.x,lr.z,0,-lr.x,Dr.z,0,-Dr.x,-or.y,or.x,0,-lr.y,lr.x,0,-Dr.y,Dr.x,0];return!uc(t,ys,Ms,bs,To)||(t=[1,0,0,0,1,0,0,0,1],!uc(t,ys,Ms,bs,To))?!1:(Ao.crossVectors(or,lr),t=[Ao.x,Ao.y,Ao.z],uc(t,ys,Ms,bs,To))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ki).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ki).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Fi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Fi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Fi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Fi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Fi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Fi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Fi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Fi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Fi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Fi=[new G,new G,new G,new G,new G,new G,new G,new G],ki=new G,xs=new nr,ys=new G,Ms=new G,bs=new G,or=new G,lr=new G,Dr=new G,ba=new G,To=new G,Ao=new G,Ir=new G;function uc(s,e,t,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){Ir.fromArray(s,r);const o=i.x*Math.abs(Ir.x)+i.y*Math.abs(Ir.y)+i.z*Math.abs(Ir.z),l=e.dot(Ir),c=t.dot(Ir),u=n.dot(Ir);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const _y=new nr,Sa=new G,hc=new G;class Li{constructor(e=new G,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):_y.setFromPoints(e).getCenter(n);let i=0;for(let r=0,a=e.length;r<a;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Sa.subVectors(e,this.center);const t=Sa.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Sa,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(hc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Sa.copy(e.center).add(hc)),this.expandByPoint(Sa.copy(e.center).sub(hc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Bi=new G,fc=new G,wo=new G,cr=new G,dc=new G,Ro=new G,pc=new G;class ao{constructor(e=new G,t=new G(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Bi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Bi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Bi.copy(this.origin).addScaledVector(this.direction,t),Bi.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){fc.copy(e).add(t).multiplyScalar(.5),wo.copy(t).sub(e).normalize(),cr.copy(this.origin).sub(fc);const r=e.distanceTo(t)*.5,a=-this.direction.dot(wo),o=cr.dot(this.direction),l=-cr.dot(wo),c=cr.lengthSq(),u=Math.abs(1-a*a);let h,f,d,v;if(u>0)if(h=a*l-o,f=a*o-l,v=r*u,h>=0)if(f>=-v)if(f<=v){const g=1/u;h*=g,f*=g,d=h*(h+a*f+2*o)+f*(a*h+f+2*l)+c}else f=r,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*l)+c;else f=-r,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*l)+c;else f<=-v?(h=Math.max(0,-(-a*r+o)),f=h>0?-r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c):f<=v?(h=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(h=Math.max(0,-(a*r+o)),f=h>0?r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c);else f=a>0?-r:r,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(fc).addScaledVector(wo,f),d}intersectSphere(e,t){Bi.subVectors(e.center,this.origin);const n=Bi.dot(this.direction),i=Bi.dot(Bi)-n*n,r=e.radius*e.radius;if(i>r)return null;const a=Math.sqrt(r-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,i=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,i=(e.min.x-f.x)*c),u>=0?(r=(e.min.y-f.y)*u,a=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,a=(e.min.y-f.y)*u),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),h>=0?(o=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(o=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Bi)!==null}intersectTriangle(e,t,n,i,r){dc.subVectors(t,e),Ro.subVectors(n,e),pc.crossVectors(dc,Ro);let a=this.direction.dot(pc),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;cr.subVectors(this.origin,e);const l=o*this.direction.dot(Ro.crossVectors(cr,Ro));if(l<0)return null;const c=o*this.direction.dot(dc.cross(cr));if(c<0||l+c>a)return null;const u=-o*cr.dot(pc);return u<0?null:this.at(u/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ot{constructor(e,t,n,i,r,a,o,l,c,u,h,f,d,v,g,m){ot.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,l,c,u,h,f,d,v,g,m)}set(e,t,n,i,r,a,o,l,c,u,h,f,d,v,g,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=f,p[3]=d,p[7]=v,p[11]=g,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ot().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Ss.setFromMatrixColumn(e,0).length(),r=1/Ss.setFromMatrixColumn(e,1).length(),a=1/Ss.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const f=a*u,d=a*h,v=o*u,g=o*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=d+v*c,t[5]=f-g*c,t[9]=-o*l,t[2]=g-f*c,t[6]=v+d*c,t[10]=a*l}else if(e.order==="YXZ"){const f=l*u,d=l*h,v=c*u,g=c*h;t[0]=f+g*o,t[4]=v*o-d,t[8]=a*c,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=d*o-v,t[6]=g+f*o,t[10]=a*l}else if(e.order==="ZXY"){const f=l*u,d=l*h,v=c*u,g=c*h;t[0]=f-g*o,t[4]=-a*h,t[8]=v+d*o,t[1]=d+v*o,t[5]=a*u,t[9]=g-f*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const f=a*u,d=a*h,v=o*u,g=o*h;t[0]=l*u,t[4]=v*c-d,t[8]=f*c+g,t[1]=l*h,t[5]=g*c+f,t[9]=d*c-v,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const f=a*l,d=a*c,v=o*l,g=o*c;t[0]=l*u,t[4]=g-f*h,t[8]=v*h+d,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=d*h+v,t[10]=f-g*h}else if(e.order==="XZY"){const f=a*l,d=a*c,v=o*l,g=o*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+g,t[5]=a*u,t[9]=d*h-v,t[2]=v*h-d,t[6]=o*u,t[10]=g*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(vy,e,xy)}lookAt(e,t,n){const i=this.elements;return Hn.subVectors(e,t),Hn.lengthSq()===0&&(Hn.z=1),Hn.normalize(),ur.crossVectors(n,Hn),ur.lengthSq()===0&&(Math.abs(n.z)===1?Hn.x+=1e-4:Hn.z+=1e-4,Hn.normalize(),ur.crossVectors(n,Hn)),ur.normalize(),Co.crossVectors(Hn,ur),i[0]=ur.x,i[4]=Co.x,i[8]=Hn.x,i[1]=ur.y,i[5]=Co.y,i[9]=Hn.y,i[2]=ur.z,i[6]=Co.z,i[10]=Hn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],d=n[13],v=n[2],g=n[6],m=n[10],p=n[14],S=n[3],y=n[7],T=n[11],E=n[15],A=i[0],R=i[4],L=i[8],M=i[12],D=i[1],W=i[5],ne=i[9],B=i[13],O=i[2],H=i[6],te=i[10],$=i[14],J=i[3],oe=i[7],ue=i[11],Te=i[15];return r[0]=a*A+o*D+l*O+c*J,r[4]=a*R+o*W+l*H+c*oe,r[8]=a*L+o*ne+l*te+c*ue,r[12]=a*M+o*B+l*$+c*Te,r[1]=u*A+h*D+f*O+d*J,r[5]=u*R+h*W+f*H+d*oe,r[9]=u*L+h*ne+f*te+d*ue,r[13]=u*M+h*B+f*$+d*Te,r[2]=v*A+g*D+m*O+p*J,r[6]=v*R+g*W+m*H+p*oe,r[10]=v*L+g*ne+m*te+p*ue,r[14]=v*M+g*B+m*$+p*Te,r[3]=S*A+y*D+T*O+E*J,r[7]=S*R+y*W+T*H+E*oe,r[11]=S*L+y*ne+T*te+E*ue,r[15]=S*M+y*B+T*$+E*Te,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],d=e[14],v=e[3],g=e[7],m=e[11],p=e[15];return v*(+r*l*h-i*c*h-r*o*f+n*c*f+i*o*d-n*l*d)+g*(+t*l*d-t*c*f+r*a*f-i*a*d+i*c*u-r*l*u)+m*(+t*c*h-t*o*d-r*a*h+n*a*d+r*o*u-n*c*u)+p*(-i*o*u-t*l*h+t*o*f+i*a*h-n*a*f+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],d=e[11],v=e[12],g=e[13],m=e[14],p=e[15],S=h*m*c-g*f*c+g*l*d-o*m*d-h*l*p+o*f*p,y=v*f*c-u*m*c-v*l*d+a*m*d+u*l*p-a*f*p,T=u*g*c-v*h*c+v*o*d-a*g*d-u*o*p+a*h*p,E=v*h*l-u*g*l-v*o*f+a*g*f+u*o*m-a*h*m,A=t*S+n*y+i*T+r*E;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/A;return e[0]=S*R,e[1]=(g*f*r-h*m*r-g*i*d+n*m*d+h*i*p-n*f*p)*R,e[2]=(o*m*r-g*l*r+g*i*c-n*m*c-o*i*p+n*l*p)*R,e[3]=(h*l*r-o*f*r-h*i*c+n*f*c+o*i*d-n*l*d)*R,e[4]=y*R,e[5]=(u*m*r-v*f*r+v*i*d-t*m*d-u*i*p+t*f*p)*R,e[6]=(v*l*r-a*m*r-v*i*c+t*m*c+a*i*p-t*l*p)*R,e[7]=(a*f*r-u*l*r+u*i*c-t*f*c-a*i*d+t*l*d)*R,e[8]=T*R,e[9]=(v*h*r-u*g*r-v*n*d+t*g*d+u*n*p-t*h*p)*R,e[10]=(a*g*r-v*o*r+v*n*c-t*g*c-a*n*p+t*o*p)*R,e[11]=(u*o*r-a*h*r-u*n*c+t*h*c+a*n*d-t*o*d)*R,e[12]=E*R,e[13]=(u*g*i-v*h*i+v*n*f-t*g*f-u*n*m+t*h*m)*R,e[14]=(v*o*i-a*g*i-v*n*l+t*g*l+a*n*m-t*o*m)*R,e[15]=(a*h*i-u*o*i+u*n*l-t*h*l-a*n*f+t*o*f)*R,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,u=r*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,u*o+n,u*l-i*a,0,c*l-i*o,u*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,a){return this.set(1,n,r,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,u=a+a,h=o+o,f=r*c,d=r*u,v=r*h,g=a*u,m=a*h,p=o*h,S=l*c,y=l*u,T=l*h,E=n.x,A=n.y,R=n.z;return i[0]=(1-(g+p))*E,i[1]=(d+T)*E,i[2]=(v-y)*E,i[3]=0,i[4]=(d-T)*A,i[5]=(1-(f+p))*A,i[6]=(m+S)*A,i[7]=0,i[8]=(v+y)*R,i[9]=(m-S)*R,i[10]=(1-(f+g))*R,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=Ss.set(i[0],i[1],i[2]).length();const a=Ss.set(i[4],i[5],i[6]).length(),o=Ss.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],hi.copy(this);const c=1/r,u=1/a,h=1/o;return hi.elements[0]*=c,hi.elements[1]*=c,hi.elements[2]*=c,hi.elements[4]*=u,hi.elements[5]*=u,hi.elements[6]*=u,hi.elements[8]*=h,hi.elements[9]*=h,hi.elements[10]*=h,t.setFromRotationMatrix(hi),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,i,r,a,o=$i){const l=this.elements,c=2*r/(t-e),u=2*r/(n-i),h=(t+e)/(t-e),f=(n+i)/(n-i);let d,v;if(o===$i)d=-(a+r)/(a-r),v=-2*a*r/(a-r);else if(o===sl)d=-a/(a-r),v=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,r,a,o=$i){const l=this.elements,c=1/(t-e),u=1/(n-i),h=1/(a-r),f=(t+e)*c,d=(n+i)*u;let v,g;if(o===$i)v=(a+r)*h,g=-2*h;else if(o===sl)v=r*h,g=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=g,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Ss=new G,hi=new ot,vy=new G(0,0,0),xy=new G(1,1,1),ur=new G,Co=new G,Hn=new G,qf=new ot,Yf=new Ri;class vl{constructor(e=0,t=0,n=0,i=vl.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],a=i[4],o=i[8],l=i[1],c=i[5],u=i[9],h=i[2],f=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(gn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-gn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(gn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-gn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(gn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-gn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return qf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(qf,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Yf.setFromEuler(this),this.setFromQuaternion(Yf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}vl.DEFAULT_ORDER="XYZ";class Au{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let yy=0;const jf=new G,Es=new Ri,zi=new ot,Lo=new G,Ea=new G,My=new G,by=new Ri,$f=new G(1,0,0),Kf=new G(0,1,0),Zf=new G(0,0,1),Sy={type:"added"},Jf={type:"removed"};class Wt extends ns{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:yy++}),this.uuid=_i(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Wt.DEFAULT_UP.clone();const e=new G,t=new vl,n=new Ri,i=new G(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ot},normalMatrix:{value:new at}}),this.matrix=new ot,this.matrixWorld=new ot,this.matrixAutoUpdate=Wt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Au,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Es.setFromAxisAngle(e,t),this.quaternion.multiply(Es),this}rotateOnWorldAxis(e,t){return Es.setFromAxisAngle(e,t),this.quaternion.premultiply(Es),this}rotateX(e){return this.rotateOnAxis($f,e)}rotateY(e){return this.rotateOnAxis(Kf,e)}rotateZ(e){return this.rotateOnAxis(Zf,e)}translateOnAxis(e,t){return jf.copy(e).applyQuaternion(this.quaternion),this.position.add(jf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis($f,e)}translateY(e){return this.translateOnAxis(Kf,e)}translateZ(e){return this.translateOnAxis(Zf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(zi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Lo.copy(e):Lo.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Ea.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?zi.lookAt(Ea,Lo,this.up):zi.lookAt(Lo,Ea,this.up),this.quaternion.setFromRotationMatrix(zi),i&&(zi.extractRotation(i.matrixWorld),Es.setFromRotationMatrix(zi),this.quaternion.premultiply(Es.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Sy)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Jf)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Jf)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),zi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),zi.multiply(e.parent.matrixWorld)),e.applyMatrix4(zi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectsByProperty(e,t);a.length>0&&(n=n.concat(a))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ea,e,My),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ea,by,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let r=0,a=i.length;r<a;r++){const o=i[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));i.material=o}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),h=a(e.shapes),f=a(e.skeletons),d=a(e.animations),v=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),v.length>0&&(n.nodes=v)}return n.object=i,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Wt.DEFAULT_UP=new G(0,1,0);Wt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const fi=new G,Hi=new G,mc=new G,Gi=new G,Ts=new G,As=new G,Qf=new G,gc=new G,_c=new G,vc=new G;let Po=!1;class pi{constructor(e=new G,t=new G,n=new G){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),fi.subVectors(e,t),i.cross(fi);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){fi.subVectors(i,t),Hi.subVectors(n,t),mc.subVectors(e,t);const a=fi.dot(fi),o=fi.dot(Hi),l=fi.dot(mc),c=Hi.dot(Hi),u=Hi.dot(mc),h=a*c-o*o;if(h===0)return r.set(-2,-1,-1);const f=1/h,d=(c*l-o*u)*f,v=(a*u-o*l)*f;return r.set(1-d-v,v,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Gi),Gi.x>=0&&Gi.y>=0&&Gi.x+Gi.y<=1}static getUV(e,t,n,i,r,a,o,l){return Po===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Po=!0),this.getInterpolation(e,t,n,i,r,a,o,l)}static getInterpolation(e,t,n,i,r,a,o,l){return this.getBarycoord(e,t,n,i,Gi),l.setScalar(0),l.addScaledVector(r,Gi.x),l.addScaledVector(a,Gi.y),l.addScaledVector(o,Gi.z),l}static isFrontFacing(e,t,n,i){return fi.subVectors(n,t),Hi.subVectors(e,t),fi.cross(Hi).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return fi.subVectors(this.c,this.b),Hi.subVectors(this.a,this.b),fi.cross(Hi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return pi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return pi.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,r){return Po===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Po=!0),pi.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}getInterpolation(e,t,n,i,r){return pi.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return pi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return pi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let a,o;Ts.subVectors(i,n),As.subVectors(r,n),gc.subVectors(e,n);const l=Ts.dot(gc),c=As.dot(gc);if(l<=0&&c<=0)return t.copy(n);_c.subVectors(e,i);const u=Ts.dot(_c),h=As.dot(_c);if(u>=0&&h<=u)return t.copy(i);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(Ts,a);vc.subVectors(e,r);const d=Ts.dot(vc),v=As.dot(vc);if(v>=0&&d<=v)return t.copy(r);const g=d*c-l*v;if(g<=0&&c>=0&&v<=0)return o=c/(c-v),t.copy(n).addScaledVector(As,o);const m=u*v-d*h;if(m<=0&&h-u>=0&&d-v>=0)return Qf.subVectors(r,i),o=(h-u)/(h-u+(d-v)),t.copy(i).addScaledVector(Qf,o);const p=1/(m+g+f);return a=g*p,o=f*p,t.copy(n).addScaledVector(Ts,a).addScaledVector(As,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Ey=0;class vi extends ns{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ey++}),this.uuid=_i(),this.name="",this.type="Material",this.blending=Hs,this.side=Qi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Np,this.blendDst=Op,this.blendEquation=Fs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Xc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Bx,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=sc,this.stencilZFail=sc,this.stencilZPass=sc,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Hs&&(n.blending=this.blending),this.side!==Qi&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=i(e.textures),a=i(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const tm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},di={h:0,s:0,l:0},Do={h:0,s:0,l:0};function xc(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class et{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=We){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ui.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=ui.workingColorSpace){return this.r=e,this.g=t,this.b=n,ui.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=ui.workingColorSpace){if(e=Tu(e,1),t=gn(t,0,1),n=gn(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=xc(a,r,e+1/3),this.g=xc(a,r,e),this.b=xc(a,r,e-1/3)}return ui.toWorkingColorSpace(this,i),this}setStyle(e,t=We){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=We){const n=tm[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Gs(e.r),this.g=Gs(e.g),this.b=Gs(e.b),this}copyLinearToSRGB(e){return this.r=oc(e.r),this.g=oc(e.g),this.b=oc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=We){return ui.fromWorkingColorSpace(Mn.copy(this),e),Math.round(gn(Mn.r*255,0,255))*65536+Math.round(gn(Mn.g*255,0,255))*256+Math.round(gn(Mn.b*255,0,255))}getHexString(e=We){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ui.workingColorSpace){ui.fromWorkingColorSpace(Mn.copy(this),t);const n=Mn.r,i=Mn.g,r=Mn.b,a=Math.max(n,i,r),o=Math.min(n,i,r);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case n:l=(i-r)/h+(i<r?6:0);break;case i:l=(r-n)/h+2;break;case r:l=(n-i)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=ui.workingColorSpace){return ui.fromWorkingColorSpace(Mn.copy(this),t),e.r=Mn.r,e.g=Mn.g,e.b=Mn.b,e}getStyle(e=We){ui.fromWorkingColorSpace(Mn.copy(this),e);const t=Mn.r,n=Mn.g,i=Mn.b;return e!==We?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(di),di.h+=e,di.s+=t,di.l+=n,this.setHSL(di.h,di.s,di.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(di),e.getHSL(Do);const n=Ga(di.h,Do.h,t),i=Ga(di.s,Do.s,t),r=Ga(di.l,Do.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Mn=new et;et.NAMES=tm;class Gr extends vi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Fp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const tn=new G,Io=new Xe;class Ln{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Kc,this.updateRange={offset:0,count:-1},this.gpuType=ji,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Io.fromBufferAttribute(this,t),Io.applyMatrix3(e),this.setXY(t,Io.x,Io.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)tn.fromBufferAttribute(this,t),tn.applyMatrix3(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)tn.fromBufferAttribute(this,t),tn.applyMatrix4(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)tn.fromBufferAttribute(this,t),tn.applyNormalMatrix(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)tn.fromBufferAttribute(this,t),tn.transformDirection(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ki(t,this.array)),t}setX(e,t){return this.normalized&&(t=Rt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ki(t,this.array)),t}setY(e,t){return this.normalized&&(t=Rt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ki(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Rt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ki(t,this.array)),t}setW(e,t){return this.normalized&&(t=Rt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Rt(t,this.array),n=Rt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Rt(t,this.array),n=Rt(n,this.array),i=Rt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=Rt(t,this.array),n=Rt(n,this.array),i=Rt(i,this.array),r=Rt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Kc&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class nm extends Ln{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class im extends Ln{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Ji extends Ln{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Ty=0;const Kn=new ot,yc=new Wt,ws=new G,Gn=new nr,Ta=new nr,cn=new G;class Pi extends ns{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ty++}),this.uuid=_i(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Zp(e)?im:nm)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new at().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Kn.makeRotationFromQuaternion(e),this.applyMatrix4(Kn),this}rotateX(e){return Kn.makeRotationX(e),this.applyMatrix4(Kn),this}rotateY(e){return Kn.makeRotationY(e),this.applyMatrix4(Kn),this}rotateZ(e){return Kn.makeRotationZ(e),this.applyMatrix4(Kn),this}translate(e,t,n){return Kn.makeTranslation(e,t,n),this.applyMatrix4(Kn),this}scale(e,t,n){return Kn.makeScale(e,t,n),this.applyMatrix4(Kn),this}lookAt(e){return yc.lookAt(e),yc.updateMatrix(),this.applyMatrix4(yc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ws).negate(),this.translate(ws.x,ws.y,ws.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Ji(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new nr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];Gn.setFromBufferAttribute(r),this.morphTargetsRelative?(cn.addVectors(this.boundingBox.min,Gn.min),this.boundingBox.expandByPoint(cn),cn.addVectors(this.boundingBox.max,Gn.max),this.boundingBox.expandByPoint(cn)):(this.boundingBox.expandByPoint(Gn.min),this.boundingBox.expandByPoint(Gn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Li);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new G,1/0);return}if(e){const n=this.boundingSphere.center;if(Gn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];Ta.setFromBufferAttribute(o),this.morphTargetsRelative?(cn.addVectors(Gn.min,Ta.min),Gn.expandByPoint(cn),cn.addVectors(Gn.max,Ta.max),Gn.expandByPoint(cn)):(Gn.expandByPoint(Ta.min),Gn.expandByPoint(Ta.max))}Gn.getCenter(n);let i=0;for(let r=0,a=e.count;r<a;r++)cn.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(cn));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)cn.fromBufferAttribute(o,c),l&&(ws.fromBufferAttribute(e,c),cn.add(ws)),i=Math.max(i,n.distanceToSquared(cn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,r=t.normal.array,a=t.uv.array,o=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ln(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let D=0;D<o;D++)c[D]=new G,u[D]=new G;const h=new G,f=new G,d=new G,v=new Xe,g=new Xe,m=new Xe,p=new G,S=new G;function y(D,W,ne){h.fromArray(i,D*3),f.fromArray(i,W*3),d.fromArray(i,ne*3),v.fromArray(a,D*2),g.fromArray(a,W*2),m.fromArray(a,ne*2),f.sub(h),d.sub(h),g.sub(v),m.sub(v);const B=1/(g.x*m.y-m.x*g.y);isFinite(B)&&(p.copy(f).multiplyScalar(m.y).addScaledVector(d,-g.y).multiplyScalar(B),S.copy(d).multiplyScalar(g.x).addScaledVector(f,-m.x).multiplyScalar(B),c[D].add(p),c[W].add(p),c[ne].add(p),u[D].add(S),u[W].add(S),u[ne].add(S))}let T=this.groups;T.length===0&&(T=[{start:0,count:n.length}]);for(let D=0,W=T.length;D<W;++D){const ne=T[D],B=ne.start,O=ne.count;for(let H=B,te=B+O;H<te;H+=3)y(n[H+0],n[H+1],n[H+2])}const E=new G,A=new G,R=new G,L=new G;function M(D){R.fromArray(r,D*3),L.copy(R);const W=c[D];E.copy(W),E.sub(R.multiplyScalar(R.dot(W))).normalize(),A.crossVectors(L,W);const B=A.dot(u[D])<0?-1:1;l[D*4]=E.x,l[D*4+1]=E.y,l[D*4+2]=E.z,l[D*4+3]=B}for(let D=0,W=T.length;D<W;++D){const ne=T[D],B=ne.start,O=ne.count;for(let H=B,te=B+O;H<te;H+=3)M(n[H+0]),M(n[H+1]),M(n[H+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ln(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const i=new G,r=new G,a=new G,o=new G,l=new G,c=new G,u=new G,h=new G;if(e)for(let f=0,d=e.count;f<d;f+=3){const v=e.getX(f+0),g=e.getX(f+1),m=e.getX(f+2);i.fromBufferAttribute(t,v),r.fromBufferAttribute(t,g),a.fromBufferAttribute(t,m),u.subVectors(a,r),h.subVectors(i,r),u.cross(h),o.fromBufferAttribute(n,v),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,m),o.add(u),l.add(u),c.add(u),n.setXYZ(v,o.x,o.y,o.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)i.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),u.subVectors(a,r),h.subVectors(i,r),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)cn.fromBufferAttribute(e,t),cn.normalize(),e.setXYZ(t,cn.x,cn.y,cn.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,h=o.normalized,f=new c.constructor(l.length*u);let d=0,v=0;for(let g=0,m=l.length;g<m;g++){o.isInterleavedBufferAttribute?d=l[g]*o.data.stride+o.offset:d=l[g]*u;for(let p=0;p<u;p++)f[v++]=c[d++]}return new Ln(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Pi,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=e(l,n);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let u=0,h=c.length;u<h;u++){const f=c[u],d=e(f,n);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const d=c[h];u.push(d.toJSON(e.data))}u.length>0&&(i[l]=u,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],h=r[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ed=new ot,Ur=new ao,Uo=new Li,td=new G,Rs=new G,Cs=new G,Ls=new G,Mc=new G,No=new G,Oo=new Xe,Fo=new Xe,ko=new Xe,nd=new G,id=new G,rd=new G,Bo=new G,zo=new G;class vn extends Wt{constructor(e=new Pi,t=new Gr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(r&&o){No.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=o[l],h=r[l];u!==0&&(Mc.fromBufferAttribute(h,e),a?No.addScaledVector(Mc,u):No.addScaledVector(Mc.sub(t),u))}t.add(No)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Uo.copy(n.boundingSphere),Uo.applyMatrix4(r),Ur.copy(e.ray).recast(e.near),!(Uo.containsPoint(Ur.origin)===!1&&(Ur.intersectSphere(Uo,td)===null||Ur.origin.distanceToSquared(td)>(e.far-e.near)**2))&&(ed.copy(r).invert(),Ur.copy(e.ray).applyMatrix4(ed),!(n.boundingBox!==null&&Ur.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ur)))}_computeIntersections(e,t,n){let i;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let v=0,g=f.length;v<g;v++){const m=f[v],p=a[m.materialIndex],S=Math.max(m.start,d.start),y=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let T=S,E=y;T<E;T+=3){const A=o.getX(T),R=o.getX(T+1),L=o.getX(T+2);i=Ho(this,p,e,n,c,u,h,A,R,L),i&&(i.faceIndex=Math.floor(T/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const v=Math.max(0,d.start),g=Math.min(o.count,d.start+d.count);for(let m=v,p=g;m<p;m+=3){const S=o.getX(m),y=o.getX(m+1),T=o.getX(m+2);i=Ho(this,a,e,n,c,u,h,S,y,T),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let v=0,g=f.length;v<g;v++){const m=f[v],p=a[m.materialIndex],S=Math.max(m.start,d.start),y=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let T=S,E=y;T<E;T+=3){const A=T,R=T+1,L=T+2;i=Ho(this,p,e,n,c,u,h,A,R,L),i&&(i.faceIndex=Math.floor(T/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const v=Math.max(0,d.start),g=Math.min(l.count,d.start+d.count);for(let m=v,p=g;m<p;m+=3){const S=m,y=m+1,T=m+2;i=Ho(this,a,e,n,c,u,h,S,y,T),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function Ay(s,e,t,n,i,r,a,o){let l;if(e.side===Un?l=n.intersectTriangle(a,r,i,!0,o):l=n.intersectTriangle(i,r,a,e.side===Qi,o),l===null)return null;zo.copy(o),zo.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(zo);return c<t.near||c>t.far?null:{distance:c,point:zo.clone(),object:s}}function Ho(s,e,t,n,i,r,a,o,l,c){s.getVertexPosition(o,Rs),s.getVertexPosition(l,Cs),s.getVertexPosition(c,Ls);const u=Ay(s,e,t,n,Rs,Cs,Ls,Bo);if(u){i&&(Oo.fromBufferAttribute(i,o),Fo.fromBufferAttribute(i,l),ko.fromBufferAttribute(i,c),u.uv=pi.getInterpolation(Bo,Rs,Cs,Ls,Oo,Fo,ko,new Xe)),r&&(Oo.fromBufferAttribute(r,o),Fo.fromBufferAttribute(r,l),ko.fromBufferAttribute(r,c),u.uv1=pi.getInterpolation(Bo,Rs,Cs,Ls,Oo,Fo,ko,new Xe),u.uv2=u.uv1),a&&(nd.fromBufferAttribute(a,o),id.fromBufferAttribute(a,l),rd.fromBufferAttribute(a,c),u.normal=pi.getInterpolation(Bo,Rs,Cs,Ls,nd,id,rd,new G),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new G,materialIndex:0};pi.getNormal(Rs,Cs,Ls,h.normal),u.face=h}return u}class oo extends Pi{constructor(e=1,t=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],u=[],h=[];let f=0,d=0;v("z","y","x",-1,-1,n,t,e,a,r,0),v("z","y","x",1,-1,n,t,-e,a,r,1),v("x","z","y",1,1,e,n,t,i,a,2),v("x","z","y",1,-1,e,n,-t,i,a,3),v("x","y","z",1,-1,e,t,n,i,r,4),v("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new Ji(c,3)),this.setAttribute("normal",new Ji(u,3)),this.setAttribute("uv",new Ji(h,2));function v(g,m,p,S,y,T,E,A,R,L,M){const D=T/R,W=E/L,ne=T/2,B=E/2,O=A/2,H=R+1,te=L+1;let $=0,J=0;const oe=new G;for(let ue=0;ue<te;ue++){const Te=ue*W-B;for(let Z=0;Z<H;Z++){const fe=Z*D-ne;oe[g]=fe*S,oe[m]=Te*y,oe[p]=O,c.push(oe.x,oe.y,oe.z),oe[g]=0,oe[m]=0,oe[p]=A>0?1:-1,u.push(oe.x,oe.y,oe.z),h.push(Z/R),h.push(1-ue/L),$+=1}}for(let ue=0;ue<L;ue++)for(let Te=0;Te<R;Te++){const Z=f+Te+H*ue,fe=f+Te+H*(ue+1),le=f+(Te+1)+H*(ue+1),ye=f+(Te+1)+H*ue;l.push(Z,fe,ye),l.push(fe,le,ye),J+=6}o.addGroup(d,J,M),d+=J,f+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new oo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ea(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function wn(s){const e={};for(let t=0;t<s.length;t++){const n=ea(s[t]);for(const i in n)e[i]=n[i]}return e}function wy(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function rm(s){return s.getRenderTarget()===null?s.outputColorSpace:wi}const Ry={clone:ea,merge:wn};var Cy=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ly=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Qr extends vi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Cy,this.fragmentShader=Ly,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ea(e.uniforms),this.uniformsGroups=wy(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class sm extends Wt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ot,this.projectionMatrix=new ot,this.projectionMatrixInverse=new ot,this.coordinateSystem=$i}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Cn extends sm{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Qs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ha*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Qs*2*Math.atan(Math.tan(Ha*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ha*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ps=-90,Ds=1;class Py extends Wt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null;const i=new Cn(Ps,Ds,e,t);i.layers=this.layers,this.add(i);const r=new Cn(Ps,Ds,e,t);r.layers=this.layers,this.add(r);const a=new Cn(Ps,Ds,e,t);a.layers=this.layers,this.add(a);const o=new Cn(Ps,Ds,e,t);o.layers=this.layers,this.add(o);const l=new Cn(Ps,Ds,e,t);l.layers=this.layers,this.add(l);const c=new Cn(Ps,Ds,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===$i)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===sl)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[i,r,a,o,l,c]=this.children,u=e.getRenderTarget(),h=e.toneMapping,f=e.xr.enabled;e.toneMapping=Zi,e.xr.enabled=!1;const d=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,r),e.setRenderTarget(n,2),e.render(t,a),e.setRenderTarget(n,3),e.render(t,o),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=d,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(u),e.toneMapping=h,e.xr.enabled=f,n.texture.needsPMREMUpdate=!0}}class wu extends xn{constructor(e,t,n,i,r,a,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:js,super(e,t,n,i,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Dy extends Jr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];t.encoding!==void 0&&(Va("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===qr?We:Yr),this.texture=new wu(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Dn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new oo(5,5,5),r=new Qr({name:"CubemapFromEquirect",uniforms:ea(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Un,blending:xr});r.uniforms.tEquirect.value=t;const a=new vn(i,r),o=t.minFilter;return t.minFilter===Zr&&(t.minFilter=Dn),new Py(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(r)}}const bc=new G,Iy=new G,Uy=new at;class kr{constructor(e=new G(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=bc.subVectors(n,t).cross(Iy.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(bc),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Uy.getNormalMatrix(e),i=this.coplanarPoint(bc).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Nr=new Li,Go=new G;class Ru{constructor(e=new kr,t=new kr,n=new kr,i=new kr,r=new kr,a=new kr){this.planes=[e,t,n,i,r,a]}set(e,t,n,i,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=$i){const n=this.planes,i=e.elements,r=i[0],a=i[1],o=i[2],l=i[3],c=i[4],u=i[5],h=i[6],f=i[7],d=i[8],v=i[9],g=i[10],m=i[11],p=i[12],S=i[13],y=i[14],T=i[15];if(n[0].setComponents(l-r,f-c,m-d,T-p).normalize(),n[1].setComponents(l+r,f+c,m+d,T+p).normalize(),n[2].setComponents(l+a,f+u,m+v,T+S).normalize(),n[3].setComponents(l-a,f-u,m-v,T-S).normalize(),n[4].setComponents(l-o,f-h,m-g,T-y).normalize(),t===$i)n[5].setComponents(l+o,f+h,m+g,T+y).normalize();else if(t===sl)n[5].setComponents(o,h,g,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Nr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Nr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Nr)}intersectsSprite(e){return Nr.center.set(0,0,0),Nr.radius=.7071067811865476,Nr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Nr)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Go.x=i.normal.x>0?e.max.x:e.min.x,Go.y=i.normal.y>0?e.max.y:e.min.y,Go.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Go)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function am(){let s=null,e=!1,t=null,n=null;function i(r,a){t(r,a),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function Ny(s,e){const t=e.isWebGL2,n=new WeakMap;function i(c,u){const h=c.array,f=c.usage,d=s.createBuffer();s.bindBuffer(u,d),s.bufferData(u,h,f),c.onUploadCallback();let v;if(h instanceof Float32Array)v=s.FLOAT;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)v=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else v=s.UNSIGNED_SHORT;else if(h instanceof Int16Array)v=s.SHORT;else if(h instanceof Uint32Array)v=s.UNSIGNED_INT;else if(h instanceof Int32Array)v=s.INT;else if(h instanceof Int8Array)v=s.BYTE;else if(h instanceof Uint8Array)v=s.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)v=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:d,type:v,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version}}function r(c,u,h){const f=u.array,d=u.updateRange;s.bindBuffer(h,c),d.count===-1?s.bufferSubData(h,0,f):(t?s.bufferSubData(h,d.offset*f.BYTES_PER_ELEMENT,f,d.offset,d.count):s.bufferSubData(h,d.offset*f.BYTES_PER_ELEMENT,f.subarray(d.offset,d.offset+d.count)),d.count=-1),u.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(s.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const f=n.get(c);(!f||f.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h===void 0?n.set(c,i(c,u)):h.version<c.version&&(r(h.buffer,c,u),h.version=c.version)}return{get:a,remove:o,update:l}}class Cu extends Pi{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,u=l+1,h=e/o,f=t/l,d=[],v=[],g=[],m=[];for(let p=0;p<u;p++){const S=p*f-a;for(let y=0;y<c;y++){const T=y*h-r;v.push(T,-S,0),g.push(0,0,1),m.push(y/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let S=0;S<o;S++){const y=S+c*p,T=S+c*(p+1),E=S+1+c*(p+1),A=S+1+c*p;d.push(y,T,A),d.push(T,E,A)}this.setIndex(d),this.setAttribute("position",new Ji(v,3)),this.setAttribute("normal",new Ji(g,3)),this.setAttribute("uv",new Ji(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Cu(e.width,e.height,e.widthSegments,e.heightSegments)}}var Oy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Fy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ky=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,By=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,zy=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Hy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Gy="vec3 transformed = vec3( position );",Vy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Wy=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Xy=`#ifdef USE_IRIDESCENCE
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
#endif`,qy=`#ifdef USE_BUMPMAP
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
#endif`,Yy=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,jy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,$y=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ky=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Zy=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Jy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Qy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,eM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,tM=`#define PI 3.141592653589793
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
} // validated`,nM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,iM=`vec3 transformedNormal = objectNormal;
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
#endif`,rM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,sM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,aM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,oM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,lM="gl_FragColor = linearToOutputTexel( gl_FragColor );",cM=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,uM=`#ifdef USE_ENVMAP
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
#endif`,hM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,fM=`#ifdef USE_ENVMAP
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
#endif`,dM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,pM=`#ifdef USE_ENVMAP
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
#endif`,mM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,gM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,_M=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,vM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,xM=`#ifdef USE_GRADIENTMAP
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
}`,yM=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,MM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,bM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,SM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,EM=`uniform bool receiveShadow;
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
#endif`,TM=`#ifdef USE_ENVMAP
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
#endif`,AM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,wM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,RM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,CM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,LM=`PhysicalMaterial material;
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
#endif`,PM=`struct PhysicalMaterial {
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
}`,DM=`
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
#endif`,IM=`#if defined( RE_IndirectDiffuse )
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
#endif`,UM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,NM=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,OM=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,FM=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,kM=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,BM=`#ifdef USE_MAP
	diffuseColor *= texture2D( map, vMapUv );
#endif`,zM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,HM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,GM=`#if defined( USE_POINTS_UV )
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
#endif`,VM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,WM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,XM=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,qM=`#ifdef USE_MORPHNORMALS
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
#endif`,YM=`#ifdef USE_MORPHTARGETS
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
#endif`,jM=`#ifdef USE_MORPHTARGETS
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
#endif`,$M=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,KM=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,ZM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,JM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,QM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,eb=`#ifdef USE_NORMALMAP
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
#endif`,tb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,nb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ib=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,rb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,sb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ab=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,ob=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,lb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,cb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ub=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,hb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,fb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,db=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,pb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,mb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,gb=`float getShadowMask() {
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
}`,_b=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,vb=`#ifdef USE_SKINNING
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
#endif`,xb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,yb=`#ifdef USE_SKINNING
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
#endif`,Mb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,bb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Sb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Eb=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Tb=`#ifdef USE_TRANSMISSION
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
#endif`,Ab=`#ifdef USE_TRANSMISSION
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
#endif`,wb=`#ifdef USE_UV
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
#endif`,Rb=`#ifdef USE_UV
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
#endif`,Cb=`#ifdef USE_UV
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
#endif`,Lb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Pb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Db=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Ib=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ub=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Nb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ob=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Fb=`#include <common>
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
}`,kb=`#if DEPTH_PACKING == 3200
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
}`,Bb=`#define DISTANCE
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
}`,zb=`#define DISTANCE
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
}`,Hb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Gb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Vb=`uniform float scale;
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
}`,Wb=`uniform vec3 diffuse;
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
}`,Xb=`#include <common>
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
}`,qb=`uniform vec3 diffuse;
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
}`,Yb=`#define LAMBERT
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
}`,jb=`#define LAMBERT
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
}`,$b=`#define MATCAP
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
}`,Kb=`#define MATCAP
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
}`,Zb=`#define NORMAL
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
}`,Jb=`#define NORMAL
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
}`,Qb=`#define PHONG
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
}`,eS=`#define PHONG
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
}`,tS=`#define STANDARD
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
}`,nS=`#define STANDARD
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
}`,iS=`#define TOON
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
}`,rS=`#define TOON
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
}`,sS=`uniform float size;
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
}`,aS=`uniform vec3 diffuse;
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
}`,oS=`#include <common>
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
}`,lS=`uniform vec3 color;
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
}`,cS=`uniform float rotation;
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
}`,uS=`uniform vec3 diffuse;
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
}`,rt={alphamap_fragment:Oy,alphamap_pars_fragment:Fy,alphatest_fragment:ky,alphatest_pars_fragment:By,aomap_fragment:zy,aomap_pars_fragment:Hy,begin_vertex:Gy,beginnormal_vertex:Vy,bsdfs:Wy,iridescence_fragment:Xy,bumpmap_pars_fragment:qy,clipping_planes_fragment:Yy,clipping_planes_pars_fragment:jy,clipping_planes_pars_vertex:$y,clipping_planes_vertex:Ky,color_fragment:Zy,color_pars_fragment:Jy,color_pars_vertex:Qy,color_vertex:eM,common:tM,cube_uv_reflection_fragment:nM,defaultnormal_vertex:iM,displacementmap_pars_vertex:rM,displacementmap_vertex:sM,emissivemap_fragment:aM,emissivemap_pars_fragment:oM,encodings_fragment:lM,encodings_pars_fragment:cM,envmap_fragment:uM,envmap_common_pars_fragment:hM,envmap_pars_fragment:fM,envmap_pars_vertex:dM,envmap_physical_pars_fragment:TM,envmap_vertex:pM,fog_vertex:mM,fog_pars_vertex:gM,fog_fragment:_M,fog_pars_fragment:vM,gradientmap_pars_fragment:xM,lightmap_fragment:yM,lightmap_pars_fragment:MM,lights_lambert_fragment:bM,lights_lambert_pars_fragment:SM,lights_pars_begin:EM,lights_toon_fragment:AM,lights_toon_pars_fragment:wM,lights_phong_fragment:RM,lights_phong_pars_fragment:CM,lights_physical_fragment:LM,lights_physical_pars_fragment:PM,lights_fragment_begin:DM,lights_fragment_maps:IM,lights_fragment_end:UM,logdepthbuf_fragment:NM,logdepthbuf_pars_fragment:OM,logdepthbuf_pars_vertex:FM,logdepthbuf_vertex:kM,map_fragment:BM,map_pars_fragment:zM,map_particle_fragment:HM,map_particle_pars_fragment:GM,metalnessmap_fragment:VM,metalnessmap_pars_fragment:WM,morphcolor_vertex:XM,morphnormal_vertex:qM,morphtarget_pars_vertex:YM,morphtarget_vertex:jM,normal_fragment_begin:$M,normal_fragment_maps:KM,normal_pars_fragment:ZM,normal_pars_vertex:JM,normal_vertex:QM,normalmap_pars_fragment:eb,clearcoat_normal_fragment_begin:tb,clearcoat_normal_fragment_maps:nb,clearcoat_pars_fragment:ib,iridescence_pars_fragment:rb,output_fragment:sb,packing:ab,premultiplied_alpha_fragment:ob,project_vertex:lb,dithering_fragment:cb,dithering_pars_fragment:ub,roughnessmap_fragment:hb,roughnessmap_pars_fragment:fb,shadowmap_pars_fragment:db,shadowmap_pars_vertex:pb,shadowmap_vertex:mb,shadowmask_pars_fragment:gb,skinbase_vertex:_b,skinning_pars_vertex:vb,skinning_vertex:xb,skinnormal_vertex:yb,specularmap_fragment:Mb,specularmap_pars_fragment:bb,tonemapping_fragment:Sb,tonemapping_pars_fragment:Eb,transmission_fragment:Tb,transmission_pars_fragment:Ab,uv_pars_fragment:wb,uv_pars_vertex:Rb,uv_vertex:Cb,worldpos_vertex:Lb,background_vert:Pb,background_frag:Db,backgroundCube_vert:Ib,backgroundCube_frag:Ub,cube_vert:Nb,cube_frag:Ob,depth_vert:Fb,depth_frag:kb,distanceRGBA_vert:Bb,distanceRGBA_frag:zb,equirect_vert:Hb,equirect_frag:Gb,linedashed_vert:Vb,linedashed_frag:Wb,meshbasic_vert:Xb,meshbasic_frag:qb,meshlambert_vert:Yb,meshlambert_frag:jb,meshmatcap_vert:$b,meshmatcap_frag:Kb,meshnormal_vert:Zb,meshnormal_frag:Jb,meshphong_vert:Qb,meshphong_frag:eS,meshphysical_vert:tS,meshphysical_frag:nS,meshtoon_vert:iS,meshtoon_frag:rS,points_vert:sS,points_frag:aS,shadow_vert:oS,shadow_frag:lS,sprite_vert:cS,sprite_frag:uS},xe={common:{diffuse:{value:new et(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new at},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new at}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new at}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new at}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new at},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new at},normalScale:{value:new Xe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new at},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new at}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new at}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new at}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0},uvTransform:{value:new at}},sprite:{diffuse:{value:new et(16777215)},opacity:{value:1},center:{value:new Xe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new at},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0}}},Mi={basic:{uniforms:wn([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.fog]),vertexShader:rt.meshbasic_vert,fragmentShader:rt.meshbasic_frag},lambert:{uniforms:wn([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new et(0)}}]),vertexShader:rt.meshlambert_vert,fragmentShader:rt.meshlambert_frag},phong:{uniforms:wn([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new et(0)},specular:{value:new et(1118481)},shininess:{value:30}}]),vertexShader:rt.meshphong_vert,fragmentShader:rt.meshphong_frag},standard:{uniforms:wn([xe.common,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.roughnessmap,xe.metalnessmap,xe.fog,xe.lights,{emissive:{value:new et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag},toon:{uniforms:wn([xe.common,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.gradientmap,xe.fog,xe.lights,{emissive:{value:new et(0)}}]),vertexShader:rt.meshtoon_vert,fragmentShader:rt.meshtoon_frag},matcap:{uniforms:wn([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,{matcap:{value:null}}]),vertexShader:rt.meshmatcap_vert,fragmentShader:rt.meshmatcap_frag},points:{uniforms:wn([xe.points,xe.fog]),vertexShader:rt.points_vert,fragmentShader:rt.points_frag},dashed:{uniforms:wn([xe.common,xe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:rt.linedashed_vert,fragmentShader:rt.linedashed_frag},depth:{uniforms:wn([xe.common,xe.displacementmap]),vertexShader:rt.depth_vert,fragmentShader:rt.depth_frag},normal:{uniforms:wn([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,{opacity:{value:1}}]),vertexShader:rt.meshnormal_vert,fragmentShader:rt.meshnormal_frag},sprite:{uniforms:wn([xe.sprite,xe.fog]),vertexShader:rt.sprite_vert,fragmentShader:rt.sprite_frag},background:{uniforms:{uvTransform:{value:new at},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:rt.background_vert,fragmentShader:rt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:rt.backgroundCube_vert,fragmentShader:rt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:rt.cube_vert,fragmentShader:rt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:rt.equirect_vert,fragmentShader:rt.equirect_frag},distanceRGBA:{uniforms:wn([xe.common,xe.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:rt.distanceRGBA_vert,fragmentShader:rt.distanceRGBA_frag},shadow:{uniforms:wn([xe.lights,xe.fog,{color:{value:new et(0)},opacity:{value:1}}]),vertexShader:rt.shadow_vert,fragmentShader:rt.shadow_frag}};Mi.physical={uniforms:wn([Mi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new at},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new at},clearcoatNormalScale:{value:new Xe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new at},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new at},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new at},sheen:{value:0},sheenColor:{value:new et(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new at},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new at},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new at},transmissionSamplerSize:{value:new Xe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new at},attenuationDistance:{value:0},attenuationColor:{value:new et(0)},specularColor:{value:new et(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new at},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new at},anisotropyVector:{value:new Xe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new at}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag};const Vo={r:0,b:0,g:0};function hS(s,e,t,n,i,r,a){const o=new et(0);let l=r===!0?0:1,c,u,h=null,f=0,d=null;function v(m,p){let S=!1,y=p.isScene===!0?p.background:null;switch(y&&y.isTexture&&(y=(p.backgroundBlurriness>0?t:e).get(y)),y===null?g(o,l):y&&y.isColor&&(g(y,1),S=!0),s.xr.getEnvironmentBlendMode()){case"opaque":S=!0;break;case"additive":n.buffers.color.setClear(0,0,0,1,a),S=!0;break;case"alpha-blend":n.buffers.color.setClear(0,0,0,0,a),S=!0;break}(s.autoClear||S)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),y&&(y.isCubeTexture||y.mapping===_l)?(u===void 0&&(u=new vn(new oo(1,1,1),new Qr({name:"BackgroundCubeMaterial",uniforms:ea(Mi.backgroundCube.uniforms),vertexShader:Mi.backgroundCube.vertexShader,fragmentShader:Mi.backgroundCube.fragmentShader,side:Un,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(A,R,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=y,u.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,u.material.toneMapped=y.colorSpace!==We,(h!==y||f!==y.version||d!==s.toneMapping)&&(u.material.needsUpdate=!0,h=y,f=y.version,d=s.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new vn(new Cu(2,2),new Qr({name:"BackgroundMaterial",uniforms:ea(Mi.background.uniforms),vertexShader:Mi.background.vertexShader,fragmentShader:Mi.background.fragmentShader,side:Qi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,c.material.toneMapped=y.colorSpace!==We,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||f!==y.version||d!==s.toneMapping)&&(c.material.needsUpdate=!0,h=y,f=y.version,d=s.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function g(m,p){m.getRGB(Vo,rm(s)),n.buffers.color.setClear(Vo.r,Vo.g,Vo.b,p,a)}return{getClearColor:function(){return o},setClearColor:function(m,p=1){o.set(m),l=p,g(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,g(o,l)},render:v}}function fS(s,e,t,n){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,o={},l=m(null);let c=l,u=!1;function h(O,H,te,$,J){let oe=!1;if(a){const ue=g($,te,H);c!==ue&&(c=ue,d(c.object)),oe=p(O,$,te,J),oe&&S(O,$,te,J)}else{const ue=H.wireframe===!0;(c.geometry!==$.id||c.program!==te.id||c.wireframe!==ue)&&(c.geometry=$.id,c.program=te.id,c.wireframe=ue,oe=!0)}J!==null&&t.update(J,s.ELEMENT_ARRAY_BUFFER),(oe||u)&&(u=!1,L(O,H,te,$),J!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(J).buffer))}function f(){return n.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function d(O){return n.isWebGL2?s.bindVertexArray(O):r.bindVertexArrayOES(O)}function v(O){return n.isWebGL2?s.deleteVertexArray(O):r.deleteVertexArrayOES(O)}function g(O,H,te){const $=te.wireframe===!0;let J=o[O.id];J===void 0&&(J={},o[O.id]=J);let oe=J[H.id];oe===void 0&&(oe={},J[H.id]=oe);let ue=oe[$];return ue===void 0&&(ue=m(f()),oe[$]=ue),ue}function m(O){const H=[],te=[],$=[];for(let J=0;J<i;J++)H[J]=0,te[J]=0,$[J]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:te,attributeDivisors:$,object:O,attributes:{},index:null}}function p(O,H,te,$){const J=c.attributes,oe=H.attributes;let ue=0;const Te=te.getAttributes();for(const Z in Te)if(Te[Z].location>=0){const le=J[Z];let ye=oe[Z];if(ye===void 0&&(Z==="instanceMatrix"&&O.instanceMatrix&&(ye=O.instanceMatrix),Z==="instanceColor"&&O.instanceColor&&(ye=O.instanceColor)),le===void 0||le.attribute!==ye||ye&&le.data!==ye.data)return!0;ue++}return c.attributesNum!==ue||c.index!==$}function S(O,H,te,$){const J={},oe=H.attributes;let ue=0;const Te=te.getAttributes();for(const Z in Te)if(Te[Z].location>=0){let le=oe[Z];le===void 0&&(Z==="instanceMatrix"&&O.instanceMatrix&&(le=O.instanceMatrix),Z==="instanceColor"&&O.instanceColor&&(le=O.instanceColor));const ye={};ye.attribute=le,le&&le.data&&(ye.data=le.data),J[Z]=ye,ue++}c.attributes=J,c.attributesNum=ue,c.index=$}function y(){const O=c.newAttributes;for(let H=0,te=O.length;H<te;H++)O[H]=0}function T(O){E(O,0)}function E(O,H){const te=c.newAttributes,$=c.enabledAttributes,J=c.attributeDivisors;te[O]=1,$[O]===0&&(s.enableVertexAttribArray(O),$[O]=1),J[O]!==H&&((n.isWebGL2?s:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](O,H),J[O]=H)}function A(){const O=c.newAttributes,H=c.enabledAttributes;for(let te=0,$=H.length;te<$;te++)H[te]!==O[te]&&(s.disableVertexAttribArray(te),H[te]=0)}function R(O,H,te,$,J,oe,ue){ue===!0?s.vertexAttribIPointer(O,H,te,J,oe):s.vertexAttribPointer(O,H,te,$,J,oe)}function L(O,H,te,$){if(n.isWebGL2===!1&&(O.isInstancedMesh||$.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;y();const J=$.attributes,oe=te.getAttributes(),ue=H.defaultAttributeValues;for(const Te in oe){const Z=oe[Te];if(Z.location>=0){let fe=J[Te];if(fe===void 0&&(Te==="instanceMatrix"&&O.instanceMatrix&&(fe=O.instanceMatrix),Te==="instanceColor"&&O.instanceColor&&(fe=O.instanceColor)),fe!==void 0){const le=fe.normalized,ye=fe.itemSize,Ae=t.get(fe);if(Ae===void 0)continue;const Ne=Ae.buffer,Ze=Ae.type,Be=Ae.bytesPerElement,kt=n.isWebGL2===!0&&(Ze===s.INT||Ze===s.UNSIGNED_INT||fe.gpuType===zp);if(fe.isInterleavedBufferAttribute){const tt=fe.data,j=tt.stride,jt=fe.offset;if(tt.isInstancedInterleavedBuffer){for(let Ue=0;Ue<Z.locationSize;Ue++)E(Z.location+Ue,tt.meshPerAttribute);O.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=tt.meshPerAttribute*tt.count)}else for(let Ue=0;Ue<Z.locationSize;Ue++)T(Z.location+Ue);s.bindBuffer(s.ARRAY_BUFFER,Ne);for(let Ue=0;Ue<Z.locationSize;Ue++)R(Z.location+Ue,ye/Z.locationSize,Ze,le,j*Be,(jt+ye/Z.locationSize*Ue)*Be,kt)}else{if(fe.isInstancedBufferAttribute){for(let tt=0;tt<Z.locationSize;tt++)E(Z.location+tt,fe.meshPerAttribute);O.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let tt=0;tt<Z.locationSize;tt++)T(Z.location+tt);s.bindBuffer(s.ARRAY_BUFFER,Ne);for(let tt=0;tt<Z.locationSize;tt++)R(Z.location+tt,ye/Z.locationSize,Ze,le,ye*Be,ye/Z.locationSize*tt*Be,kt)}}else if(ue!==void 0){const le=ue[Te];if(le!==void 0)switch(le.length){case 2:s.vertexAttrib2fv(Z.location,le);break;case 3:s.vertexAttrib3fv(Z.location,le);break;case 4:s.vertexAttrib4fv(Z.location,le);break;default:s.vertexAttrib1fv(Z.location,le)}}}}A()}function M(){ne();for(const O in o){const H=o[O];for(const te in H){const $=H[te];for(const J in $)v($[J].object),delete $[J];delete H[te]}delete o[O]}}function D(O){if(o[O.id]===void 0)return;const H=o[O.id];for(const te in H){const $=H[te];for(const J in $)v($[J].object),delete $[J];delete H[te]}delete o[O.id]}function W(O){for(const H in o){const te=o[H];if(te[O.id]===void 0)continue;const $=te[O.id];for(const J in $)v($[J].object),delete $[J];delete te[O.id]}}function ne(){B(),u=!0,c!==l&&(c=l,d(c.object))}function B(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:ne,resetDefaultState:B,dispose:M,releaseStatesOfGeometry:D,releaseStatesOfProgram:W,initAttributes:y,enableAttribute:T,disableUnusedAttributes:A}}function dS(s,e,t,n){const i=n.isWebGL2;let r;function a(c){r=c}function o(c,u){s.drawArrays(r,c,u),t.update(u,r,1)}function l(c,u,h){if(h===0)return;let f,d;if(i)f=s,d="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),d="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[d](r,c,u,h),t.update(u,r,h)}this.setMode=a,this.render=o,this.renderInstances=l}function pS(s,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");n=s.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(R){if(R==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&s.constructor.name==="WebGL2RenderingContext";let o=t.precision!==void 0?t.precision:"highp";const l=r(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),f=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),d=s.getParameter(s.MAX_TEXTURE_SIZE),v=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),g=s.getParameter(s.MAX_VERTEX_ATTRIBS),m=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),p=s.getParameter(s.MAX_VARYING_VECTORS),S=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),y=f>0,T=a||e.has("OES_texture_float"),E=y&&T,A=a?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:f,maxTextureSize:d,maxCubemapSize:v,maxAttributes:g,maxVertexUniforms:m,maxVaryings:p,maxFragmentUniforms:S,vertexTextures:y,floatFragmentTextures:T,floatVertexTextures:E,maxSamples:A}}function mS(s){const e=this;let t=null,n=0,i=!1,r=!1;const a=new kr,o=new at,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const d=h.length!==0||f||n!==0||i;return i=f,n=h.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,d){const v=h.clippingPlanes,g=h.clipIntersection,m=h.clipShadows,p=s.get(h);if(!i||v===null||v.length===0||r&&!m)r?u(null):c();else{const S=r?0:n,y=S*4;let T=p.clippingState||null;l.value=T,T=u(v,f,y,d);for(let E=0;E!==y;++E)T[E]=t[E];p.clippingState=T,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,d,v){const g=h!==null?h.length:0;let m=null;if(g!==0){if(m=l.value,v!==!0||m===null){const p=d+g*4,S=f.matrixWorldInverse;o.getNormalMatrix(S),(m===null||m.length<p)&&(m=new Float32Array(p));for(let y=0,T=d;y!==g;++y,T+=4)a.copy(h[y]).applyMatrix4(S,o),a.normal.toArray(m,T),m[T+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}function gS(s){let e=new WeakMap;function t(a,o){return o===qc?a.mapping=js:o===Yc&&(a.mapping=$s),a}function n(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const o=a.mapping;if(o===qc||o===Yc)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Dy(l.height/2);return c.fromEquirectangularTexture(s,a),e.set(a,c),a.addEventListener("dispose",i),t(c.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class Lu extends sm{constructor(e=-1,t=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ks=4,sd=[.125,.215,.35,.446,.526,.582],Hr=20,Sc=new Lu,ad=new et;let Ec=null;const Br=(1+Math.sqrt(5))/2,Is=1/Br,od=[new G(1,1,1),new G(-1,1,1),new G(1,1,-1),new G(-1,1,-1),new G(0,Br,Is),new G(0,Br,-Is),new G(Is,0,Br),new G(-Is,0,Br),new G(Br,Is,0),new G(-Br,Is,0)];class ld{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Ec=this._renderer.getRenderTarget(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=hd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ud(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ec),e.scissorTest=!1,Wo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===js||e.mapping===$s?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ec=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Dn,minFilter:Dn,generateMipmaps:!1,type:ja,format:ti,colorSpace:wi,depthBuffer:!1},i=cd(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=cd(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=_S(r)),this._blurMaterial=vS(r,e,t)}return i}_compileMaterial(e){const t=new vn(this._lodPlanes[0],e);this._renderer.compile(t,Sc)}_sceneToCubeUV(e,t,n,i){const o=new Cn(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(ad),u.toneMapping=Zi,u.autoClear=!1;const d=new Gr({name:"PMREM.Background",side:Un,depthWrite:!1,depthTest:!1}),v=new vn(new oo,d);let g=!1;const m=e.background;m?m.isColor&&(d.color.copy(m),e.background=null,g=!0):(d.color.copy(ad),g=!0);for(let p=0;p<6;p++){const S=p%3;S===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):S===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));const y=this._cubeSize;Wo(i,S*y,p>2?y:0,y,y),u.setRenderTarget(i),g&&u.render(v,o),u.render(e,o)}v.geometry.dispose(),v.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===js||e.mapping===$s;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=hd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ud());const r=i?this._cubemapMaterial:this._equirectMaterial,a=new vn(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;Wo(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Sc)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),a=od[(i-1)%od.length];this._blur(e,i-1,i,r,a)}t.autoClear=n}_blur(e,t,n,i,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",r),this._halfBlur(a,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new vn(this._lodPlanes[i],c),f=c.uniforms,d=this._sizeLods[n]-1,v=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Hr-1),g=r/v,m=isFinite(r)?1+Math.floor(u*g):Hr;m>Hr&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Hr}`);const p=[];let S=0;for(let R=0;R<Hr;++R){const L=R/g,M=Math.exp(-L*L/2);p.push(M),R===0?S+=M:R<m&&(S+=2*M)}for(let R=0;R<p.length;R++)p[R]=p[R]/S;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:y}=this;f.dTheta.value=v,f.mipInt.value=y-n;const T=this._sizeLods[i],E=3*T*(i>y-ks?i-y+ks:0),A=4*(this._cubeSize-T);Wo(t,E,A,3*T,2*T),l.setRenderTarget(t),l.render(h,Sc)}}function _S(s){const e=[],t=[],n=[];let i=s;const r=s-ks+1+sd.length;for(let a=0;a<r;a++){const o=Math.pow(2,i);t.push(o);let l=1/o;a>s-ks?l=sd[a-s+ks-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,v=6,g=3,m=2,p=1,S=new Float32Array(g*v*d),y=new Float32Array(m*v*d),T=new Float32Array(p*v*d);for(let A=0;A<d;A++){const R=A%3*2/3-1,L=A>2?0:-1,M=[R,L,0,R+2/3,L,0,R+2/3,L+1,0,R,L,0,R+2/3,L+1,0,R,L+1,0];S.set(M,g*v*A),y.set(f,m*v*A);const D=[A,A,A,A,A,A];T.set(D,p*v*A)}const E=new Pi;E.setAttribute("position",new Ln(S,g)),E.setAttribute("uv",new Ln(y,m)),E.setAttribute("faceIndex",new Ln(T,p)),e.push(E),i>ks&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function cd(s,e,t){const n=new Jr(s,e,t);return n.texture.mapping=_l,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Wo(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function vS(s,e,t){const n=new Float32Array(Hr),i=new G(0,1,0);return new Qr({name:"SphericalGaussianBlur",defines:{n:Hr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Pu(),fragmentShader:`

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
		`,blending:xr,depthTest:!1,depthWrite:!1})}function ud(){return new Qr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Pu(),fragmentShader:`

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
		`,blending:xr,depthTest:!1,depthWrite:!1})}function hd(){return new Qr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Pu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:xr,depthTest:!1,depthWrite:!1})}function Pu(){return`

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
	`}function xS(s){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===qc||l===Yc,u=l===js||l===$s;if(c||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let h=e.get(o);return t===null&&(t=new ld(s)),h=c?t.fromEquirectangular(o,h):t.fromCubemap(o,h),e.set(o,h),h.texture}else{if(e.has(o))return e.get(o).texture;{const h=o.image;if(c&&h&&h.height>0||u&&h&&i(h)){t===null&&(t=new ld(s));const f=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,f),o.addEventListener("dispose",r),f.texture}else return null}}}return o}function i(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function yS(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function MS(s,e,t,n){const i={},r=new WeakMap;function a(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const v in f.attributes)e.remove(f.attributes[v]);for(const v in f.morphAttributes){const g=f.morphAttributes[v];for(let m=0,p=g.length;m<p;m++)e.remove(g[m])}f.removeEventListener("dispose",a),delete i[f.id];const d=r.get(f);d&&(e.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(h,f){return i[f.id]===!0||(f.addEventListener("dispose",a),i[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const v in f)e.update(f[v],s.ARRAY_BUFFER);const d=h.morphAttributes;for(const v in d){const g=d[v];for(let m=0,p=g.length;m<p;m++)e.update(g[m],s.ARRAY_BUFFER)}}function c(h){const f=[],d=h.index,v=h.attributes.position;let g=0;if(d!==null){const S=d.array;g=d.version;for(let y=0,T=S.length;y<T;y+=3){const E=S[y+0],A=S[y+1],R=S[y+2];f.push(E,A,A,R,R,E)}}else{const S=v.array;g=v.version;for(let y=0,T=S.length/3-1;y<T;y+=3){const E=y+0,A=y+1,R=y+2;f.push(E,A,A,R,R,E)}}const m=new(Zp(f)?im:nm)(f,1);m.version=g;const p=r.get(h);p&&e.remove(p),r.set(h,m)}function u(h){const f=r.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&c(h)}else c(h);return r.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function bS(s,e,t,n){const i=n.isWebGL2;let r;function a(f){r=f}let o,l;function c(f){o=f.type,l=f.bytesPerElement}function u(f,d){s.drawElements(r,d,o,f*l),t.update(d,r,1)}function h(f,d,v){if(v===0)return;let g,m;if(i)g=s,m="drawElementsInstanced";else if(g=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",g===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[m](r,d,o,f*l,v),t.update(d,r,v)}this.setMode=a,this.setIndex=c,this.render=u,this.renderInstances=h}function SS(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case s.TRIANGLES:t.triangles+=o*(r/3);break;case s.LINES:t.lines+=o*(r/2);break;case s.LINE_STRIP:t.lines+=o*(r-1);break;case s.LINE_LOOP:t.lines+=o*r;break;case s.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function ES(s,e){return s[0]-e[0]}function TS(s,e){return Math.abs(e[1])-Math.abs(s[1])}function AS(s,e,t){const n={},i=new Float32Array(8),r=new WeakMap,a=new Lt,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,u,h){const f=c.morphTargetInfluences;if(e.isWebGL2===!0){const d=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,v=d!==void 0?d.length:0;let g=r.get(u);if(g===void 0||g.count!==v){let O=function(){ne.dispose(),r.delete(u),u.removeEventListener("dispose",O)};g!==void 0&&g.texture.dispose();const S=u.morphAttributes.position!==void 0,y=u.morphAttributes.normal!==void 0,T=u.morphAttributes.color!==void 0,E=u.morphAttributes.position||[],A=u.morphAttributes.normal||[],R=u.morphAttributes.color||[];let L=0;S===!0&&(L=1),y===!0&&(L=2),T===!0&&(L=3);let M=u.attributes.position.count*L,D=1;M>e.maxTextureSize&&(D=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);const W=new Float32Array(M*D*4*v),ne=new em(W,M,D,v);ne.type=ji,ne.needsUpdate=!0;const B=L*4;for(let H=0;H<v;H++){const te=E[H],$=A[H],J=R[H],oe=M*D*4*H;for(let ue=0;ue<te.count;ue++){const Te=ue*B;S===!0&&(a.fromBufferAttribute(te,ue),W[oe+Te+0]=a.x,W[oe+Te+1]=a.y,W[oe+Te+2]=a.z,W[oe+Te+3]=0),y===!0&&(a.fromBufferAttribute($,ue),W[oe+Te+4]=a.x,W[oe+Te+5]=a.y,W[oe+Te+6]=a.z,W[oe+Te+7]=0),T===!0&&(a.fromBufferAttribute(J,ue),W[oe+Te+8]=a.x,W[oe+Te+9]=a.y,W[oe+Te+10]=a.z,W[oe+Te+11]=J.itemSize===4?a.w:1)}}g={count:v,texture:ne,size:new Xe(M,D)},r.set(u,g),u.addEventListener("dispose",O)}let m=0;for(let S=0;S<f.length;S++)m+=f[S];const p=u.morphTargetsRelative?1:1-m;h.getUniforms().setValue(s,"morphTargetBaseInfluence",p),h.getUniforms().setValue(s,"morphTargetInfluences",f),h.getUniforms().setValue(s,"morphTargetsTexture",g.texture,t),h.getUniforms().setValue(s,"morphTargetsTextureSize",g.size)}else{const d=f===void 0?0:f.length;let v=n[u.id];if(v===void 0||v.length!==d){v=[];for(let y=0;y<d;y++)v[y]=[y,0];n[u.id]=v}for(let y=0;y<d;y++){const T=v[y];T[0]=y,T[1]=f[y]}v.sort(TS);for(let y=0;y<8;y++)y<d&&v[y][1]?(o[y][0]=v[y][0],o[y][1]=v[y][1]):(o[y][0]=Number.MAX_SAFE_INTEGER,o[y][1]=0);o.sort(ES);const g=u.morphAttributes.position,m=u.morphAttributes.normal;let p=0;for(let y=0;y<8;y++){const T=o[y],E=T[0],A=T[1];E!==Number.MAX_SAFE_INTEGER&&A?(g&&u.getAttribute("morphTarget"+y)!==g[E]&&u.setAttribute("morphTarget"+y,g[E]),m&&u.getAttribute("morphNormal"+y)!==m[E]&&u.setAttribute("morphNormal"+y,m[E]),i[y]=A,p+=A):(g&&u.hasAttribute("morphTarget"+y)===!0&&u.deleteAttribute("morphTarget"+y),m&&u.hasAttribute("morphNormal"+y)===!0&&u.deleteAttribute("morphNormal"+y),i[y]=0)}const S=u.morphTargetsRelative?1:1-p;h.getUniforms().setValue(s,"morphTargetBaseInfluence",S),h.getUniforms().setValue(s,"morphTargetInfluences",i)}}return{update:l}}function wS(s,e,t,n){let i=new WeakMap;function r(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);return i.get(h)!==c&&(e.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER)),h}function a(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}const om=new xn,lm=new em,cm=new gy,um=new wu,fd=[],dd=[],pd=new Float32Array(16),md=new Float32Array(9),gd=new Float32Array(4);function fa(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=fd[i];if(r===void 0&&(r=new Float32Array(i),fd[i]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(r,o)}return r}function sn(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function an(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function xl(s,e){let t=dd[e];t===void 0&&(t=new Int32Array(e),dd[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function RS(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function CS(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(sn(t,e))return;s.uniform2fv(this.addr,e),an(t,e)}}function LS(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(sn(t,e))return;s.uniform3fv(this.addr,e),an(t,e)}}function PS(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(sn(t,e))return;s.uniform4fv(this.addr,e),an(t,e)}}function DS(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(sn(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),an(t,e)}else{if(sn(t,n))return;gd.set(n),s.uniformMatrix2fv(this.addr,!1,gd),an(t,n)}}function IS(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(sn(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),an(t,e)}else{if(sn(t,n))return;md.set(n),s.uniformMatrix3fv(this.addr,!1,md),an(t,n)}}function US(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(sn(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),an(t,e)}else{if(sn(t,n))return;pd.set(n),s.uniformMatrix4fv(this.addr,!1,pd),an(t,n)}}function NS(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function OS(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(sn(t,e))return;s.uniform2iv(this.addr,e),an(t,e)}}function FS(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(sn(t,e))return;s.uniform3iv(this.addr,e),an(t,e)}}function kS(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(sn(t,e))return;s.uniform4iv(this.addr,e),an(t,e)}}function BS(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function zS(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(sn(t,e))return;s.uniform2uiv(this.addr,e),an(t,e)}}function HS(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(sn(t,e))return;s.uniform3uiv(this.addr,e),an(t,e)}}function GS(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(sn(t,e))return;s.uniform4uiv(this.addr,e),an(t,e)}}function VS(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||om,i)}function WS(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||cm,i)}function XS(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||um,i)}function qS(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||lm,i)}function YS(s){switch(s){case 5126:return RS;case 35664:return CS;case 35665:return LS;case 35666:return PS;case 35674:return DS;case 35675:return IS;case 35676:return US;case 5124:case 35670:return NS;case 35667:case 35671:return OS;case 35668:case 35672:return FS;case 35669:case 35673:return kS;case 5125:return BS;case 36294:return zS;case 36295:return HS;case 36296:return GS;case 35678:case 36198:case 36298:case 36306:case 35682:return VS;case 35679:case 36299:case 36307:return WS;case 35680:case 36300:case 36308:case 36293:return XS;case 36289:case 36303:case 36311:case 36292:return qS}}function jS(s,e){s.uniform1fv(this.addr,e)}function $S(s,e){const t=fa(e,this.size,2);s.uniform2fv(this.addr,t)}function KS(s,e){const t=fa(e,this.size,3);s.uniform3fv(this.addr,t)}function ZS(s,e){const t=fa(e,this.size,4);s.uniform4fv(this.addr,t)}function JS(s,e){const t=fa(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function QS(s,e){const t=fa(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function eE(s,e){const t=fa(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function tE(s,e){s.uniform1iv(this.addr,e)}function nE(s,e){s.uniform2iv(this.addr,e)}function iE(s,e){s.uniform3iv(this.addr,e)}function rE(s,e){s.uniform4iv(this.addr,e)}function sE(s,e){s.uniform1uiv(this.addr,e)}function aE(s,e){s.uniform2uiv(this.addr,e)}function oE(s,e){s.uniform3uiv(this.addr,e)}function lE(s,e){s.uniform4uiv(this.addr,e)}function cE(s,e,t){const n=this.cache,i=e.length,r=xl(t,i);sn(n,r)||(s.uniform1iv(this.addr,r),an(n,r));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||om,r[a])}function uE(s,e,t){const n=this.cache,i=e.length,r=xl(t,i);sn(n,r)||(s.uniform1iv(this.addr,r),an(n,r));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||cm,r[a])}function hE(s,e,t){const n=this.cache,i=e.length,r=xl(t,i);sn(n,r)||(s.uniform1iv(this.addr,r),an(n,r));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||um,r[a])}function fE(s,e,t){const n=this.cache,i=e.length,r=xl(t,i);sn(n,r)||(s.uniform1iv(this.addr,r),an(n,r));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||lm,r[a])}function dE(s){switch(s){case 5126:return jS;case 35664:return $S;case 35665:return KS;case 35666:return ZS;case 35674:return JS;case 35675:return QS;case 35676:return eE;case 5124:case 35670:return tE;case 35667:case 35671:return nE;case 35668:case 35672:return iE;case 35669:case 35673:return rE;case 5125:return sE;case 36294:return aE;case 36295:return oE;case 36296:return lE;case 35678:case 36198:case 36298:case 36306:case 35682:return cE;case 35679:case 36299:case 36307:return uE;case 35680:case 36300:case 36308:case 36293:return hE;case 36289:case 36303:case 36311:case 36292:return fE}}class pE{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=YS(t.type)}}class mE{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=dE(t.type)}}class gE{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const o=i[r];o.setValue(e,t[o.id],n)}}}const Tc=/(\w+)(\])?(\[|\.)?/g;function _d(s,e){s.seq.push(e),s.map[e.id]=e}function _E(s,e,t){const n=s.name,i=n.length;for(Tc.lastIndex=0;;){const r=Tc.exec(n),a=Tc.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){_d(t,c===void 0?new pE(o,s,e):new mE(o,s,e));break}else{let h=t.map[o];h===void 0&&(h=new gE(o),_d(t,h)),t=h}}}class Jo{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),a=e.getUniformLocation(t,r.name);_E(r,a,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function vd(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}let vE=0;function xE(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=i;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function yE(s){switch(s){case wi:return["Linear","( value )"];case We:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),["Linear","( value )"]}}function xd(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const a=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+xE(s.getShaderSource(e),a)}else return i}function ME(s,e){const t=yE(e);return"vec4 "+s+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function bE(s,e){let t;switch(e){case yx:t="Linear";break;case Mx:t="Reinhard";break;case bx:t="OptimizedCineon";break;case Sx:t="ACESFilmic";break;case Ex:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function SE(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ia).join(`
`)}function EE(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function TE(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),a=r.name;let o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:s.getAttribLocation(e,a),locationSize:o}}return t}function Ia(s){return s!==""}function yd(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Md(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const AE=/^[ \t]*#include +<([\w\d./]+)>/gm;function Qc(s){return s.replace(AE,wE)}function wE(s,e){const t=rt[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Qc(t)}const RE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function bd(s){return s.replace(RE,CE)}function CE(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Sd(s){let e="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function LE(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Up?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===Jv?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Wi&&(e="SHADOWMAP_TYPE_VSM"),e}function PE(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case js:case $s:e="ENVMAP_TYPE_CUBE";break;case _l:e="ENVMAP_TYPE_CUBE_UV";break}return e}function DE(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case $s:e="ENVMAP_MODE_REFRACTION";break}return e}function IE(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Fp:e="ENVMAP_BLENDING_MULTIPLY";break;case vx:e="ENVMAP_BLENDING_MIX";break;case xx:e="ENVMAP_BLENDING_ADD";break}return e}function UE(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function NE(s,e,t,n){const i=s.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=LE(t),c=PE(t),u=DE(t),h=IE(t),f=UE(t),d=t.isWebGL2?"":SE(t),v=EE(r),g=i.createProgram();let m,p,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Ia).join(`
`),m.length>0&&(m+=`
`),p=[d,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Ia).join(`
`),p.length>0&&(p+=`
`)):(m=[Sd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ia).join(`
`),p=[d,Sd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Zi?"#define TONE_MAPPING":"",t.toneMapping!==Zi?rt.tonemapping_pars_fragment:"",t.toneMapping!==Zi?bE("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",rt.encodings_pars_fragment,ME("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ia).join(`
`)),a=Qc(a),a=yd(a,t),a=Md(a,t),o=Qc(o),o=yd(o,t),o=Md(o,t),a=bd(a),o=bd(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Gf?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Gf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const y=S+m+a,T=S+p+o,E=vd(i,i.VERTEX_SHADER,y),A=vd(i,i.FRAGMENT_SHADER,T);if(i.attachShader(g,E),i.attachShader(g,A),t.index0AttributeName!==void 0?i.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g),s.debug.checkShaderErrors){const M=i.getProgramInfoLog(g).trim(),D=i.getShaderInfoLog(E).trim(),W=i.getShaderInfoLog(A).trim();let ne=!0,B=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1)if(ne=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,g,E,A);else{const O=xd(i,E,"vertex"),H=xd(i,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Program Info Log: `+M+`
`+O+`
`+H)}else M!==""?console.warn("THREE.WebGLProgram: Program Info Log:",M):(D===""||W==="")&&(B=!1);B&&(this.diagnostics={runnable:ne,programLog:M,vertexShader:{log:D,prefix:m},fragmentShader:{log:W,prefix:p}})}i.deleteShader(E),i.deleteShader(A);let R;this.getUniforms=function(){return R===void 0&&(R=new Jo(i,g)),R};let L;return this.getAttributes=function(){return L===void 0&&(L=TE(i,g)),L},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=vE++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=E,this.fragmentShader=A,this}let OE=0;class FE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new kE(e),t.set(e,n)),n}}class kE{constructor(e){this.id=OE++,this.code=e,this.usedTimes=0}}function BE(s,e,t,n,i,r,a){const o=new Au,l=new FE,c=[],u=i.isWebGL2,h=i.logarithmicDepthBuffer,f=i.vertexTextures;let d=i.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(M){return M===0?"uv":`uv${M}`}function m(M,D,W,ne,B){const O=ne.fog,H=B.geometry,te=M.isMeshStandardMaterial?ne.environment:null,$=(M.isMeshStandardMaterial?t:e).get(M.envMap||te),J=$&&$.mapping===_l?$.image.height:null,oe=v[M.type];M.precision!==null&&(d=i.getMaxPrecision(M.precision),d!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",d,"instead."));const ue=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,Te=ue!==void 0?ue.length:0;let Z=0;H.morphAttributes.position!==void 0&&(Z=1),H.morphAttributes.normal!==void 0&&(Z=2),H.morphAttributes.color!==void 0&&(Z=3);let fe,le,ye,Ae;if(oe){const qt=Mi[oe];fe=qt.vertexShader,le=qt.fragmentShader}else fe=M.vertexShader,le=M.fragmentShader,l.update(M),ye=l.getVertexShaderID(M),Ae=l.getFragmentShaderID(M);const Ne=s.getRenderTarget(),Ze=B.isInstancedMesh===!0,Be=!!M.map,kt=!!M.matcap,tt=!!$,j=!!M.aoMap,jt=!!M.lightMap,Ue=!!M.bumpMap,je=!!M.normalMap,Fe=!!M.displacementMap,yt=!!M.emissiveMap,$e=!!M.metalnessMap,qe=!!M.roughnessMap,ht=M.anisotropy>0,Xt=M.clearcoat>0,$t=M.iridescence>0,I=M.sheen>0,w=M.transmission>0,ie=ht&&!!M.anisotropyMap,_e=Xt&&!!M.clearcoatMap,ge=Xt&&!!M.clearcoatNormalMap,U=Xt&&!!M.clearcoatRoughnessMap,ce=$t&&!!M.iridescenceMap,me=$t&&!!M.iridescenceThicknessMap,ee=I&&!!M.sheenColorMap,Pe=I&&!!M.sheenRoughnessMap,De=!!M.specularMap,Ie=!!M.specularColorMap,Re=!!M.specularIntensityMap,Ee=w&&!!M.transmissionMap,ze=w&&!!M.thicknessMap,Mt=!!M.gradientMap,z=!!M.alphaMap,Me=M.alphaTest>0,Q=!!M.extensions,ve=!!H.attributes.uv1,be=!!H.attributes.uv2,ft=!!H.attributes.uv3;return{isWebGL2:u,shaderID:oe,shaderType:M.type,shaderName:M.name,vertexShader:fe,fragmentShader:le,defines:M.defines,customVertexShaderID:ye,customFragmentShaderID:Ae,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:d,instancing:Ze,instancingColor:Ze&&B.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:Ne===null?s.outputColorSpace:Ne.isXRRenderTarget===!0?Ne.texture.colorSpace:wi,map:Be,matcap:kt,envMap:tt,envMapMode:tt&&$.mapping,envMapCubeUVHeight:J,aoMap:j,lightMap:jt,bumpMap:Ue,normalMap:je,displacementMap:f&&Fe,emissiveMap:yt,normalMapObjectSpace:je&&M.normalMapType===kx,normalMapTangentSpace:je&&M.normalMapType===jp,metalnessMap:$e,roughnessMap:qe,anisotropy:ht,anisotropyMap:ie,clearcoat:Xt,clearcoatMap:_e,clearcoatNormalMap:ge,clearcoatRoughnessMap:U,iridescence:$t,iridescenceMap:ce,iridescenceThicknessMap:me,sheen:I,sheenColorMap:ee,sheenRoughnessMap:Pe,specularMap:De,specularColorMap:Ie,specularIntensityMap:Re,transmission:w,transmissionMap:Ee,thicknessMap:ze,gradientMap:Mt,opaque:M.transparent===!1&&M.blending===Hs,alphaMap:z,alphaTest:Me,combine:M.combine,mapUv:Be&&g(M.map.channel),aoMapUv:j&&g(M.aoMap.channel),lightMapUv:jt&&g(M.lightMap.channel),bumpMapUv:Ue&&g(M.bumpMap.channel),normalMapUv:je&&g(M.normalMap.channel),displacementMapUv:Fe&&g(M.displacementMap.channel),emissiveMapUv:yt&&g(M.emissiveMap.channel),metalnessMapUv:$e&&g(M.metalnessMap.channel),roughnessMapUv:qe&&g(M.roughnessMap.channel),anisotropyMapUv:ie&&g(M.anisotropyMap.channel),clearcoatMapUv:_e&&g(M.clearcoatMap.channel),clearcoatNormalMapUv:ge&&g(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:U&&g(M.clearcoatRoughnessMap.channel),iridescenceMapUv:ce&&g(M.iridescenceMap.channel),iridescenceThicknessMapUv:me&&g(M.iridescenceThicknessMap.channel),sheenColorMapUv:ee&&g(M.sheenColorMap.channel),sheenRoughnessMapUv:Pe&&g(M.sheenRoughnessMap.channel),specularMapUv:De&&g(M.specularMap.channel),specularColorMapUv:Ie&&g(M.specularColorMap.channel),specularIntensityMapUv:Re&&g(M.specularIntensityMap.channel),transmissionMapUv:Ee&&g(M.transmissionMap.channel),thicknessMapUv:ze&&g(M.thicknessMap.channel),alphaMapUv:z&&g(M.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(je||ht),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,vertexUv1s:ve,vertexUv2s:be,vertexUv3s:ft,pointsUvs:B.isPoints===!0&&!!H.attributes.uv&&(Be||z),fog:!!O,useFog:M.fog===!0,fogExp2:O&&O.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:B.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:Te,morphTextureStride:Z,numDirLights:D.directional.length,numPointLights:D.point.length,numSpotLights:D.spot.length,numSpotLightMaps:D.spotLightMap.length,numRectAreaLights:D.rectArea.length,numHemiLights:D.hemi.length,numDirLightShadows:D.directionalShadowMap.length,numPointLightShadows:D.pointShadowMap.length,numSpotLightShadows:D.spotShadowMap.length,numSpotLightShadowsWithMaps:D.numSpotLightShadowsWithMaps,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:s.shadowMap.enabled&&W.length>0,shadowMapType:s.shadowMap.type,toneMapping:M.toneMapped?s.toneMapping:Zi,useLegacyLights:s.useLegacyLights,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===bi,flipSided:M.side===Un,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:Q&&M.extensions.derivatives===!0,extensionFragDepth:Q&&M.extensions.fragDepth===!0,extensionDrawBuffers:Q&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:Q&&M.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:M.customProgramCacheKey()}}function p(M){const D=[];if(M.shaderID?D.push(M.shaderID):(D.push(M.customVertexShaderID),D.push(M.customFragmentShaderID)),M.defines!==void 0)for(const W in M.defines)D.push(W),D.push(M.defines[W]);return M.isRawShaderMaterial===!1&&(S(D,M),y(D,M),D.push(s.outputColorSpace)),D.push(M.customProgramCacheKey),D.join()}function S(M,D){M.push(D.precision),M.push(D.outputColorSpace),M.push(D.envMapMode),M.push(D.envMapCubeUVHeight),M.push(D.mapUv),M.push(D.alphaMapUv),M.push(D.lightMapUv),M.push(D.aoMapUv),M.push(D.bumpMapUv),M.push(D.normalMapUv),M.push(D.displacementMapUv),M.push(D.emissiveMapUv),M.push(D.metalnessMapUv),M.push(D.roughnessMapUv),M.push(D.anisotropyMapUv),M.push(D.clearcoatMapUv),M.push(D.clearcoatNormalMapUv),M.push(D.clearcoatRoughnessMapUv),M.push(D.iridescenceMapUv),M.push(D.iridescenceThicknessMapUv),M.push(D.sheenColorMapUv),M.push(D.sheenRoughnessMapUv),M.push(D.specularMapUv),M.push(D.specularColorMapUv),M.push(D.specularIntensityMapUv),M.push(D.transmissionMapUv),M.push(D.thicknessMapUv),M.push(D.combine),M.push(D.fogExp2),M.push(D.sizeAttenuation),M.push(D.morphTargetsCount),M.push(D.morphAttributeCount),M.push(D.numDirLights),M.push(D.numPointLights),M.push(D.numSpotLights),M.push(D.numSpotLightMaps),M.push(D.numHemiLights),M.push(D.numRectAreaLights),M.push(D.numDirLightShadows),M.push(D.numPointLightShadows),M.push(D.numSpotLightShadows),M.push(D.numSpotLightShadowsWithMaps),M.push(D.shadowMapType),M.push(D.toneMapping),M.push(D.numClippingPlanes),M.push(D.numClipIntersection),M.push(D.depthPacking)}function y(M,D){o.disableAll(),D.isWebGL2&&o.enable(0),D.supportsVertexTextures&&o.enable(1),D.instancing&&o.enable(2),D.instancingColor&&o.enable(3),D.matcap&&o.enable(4),D.envMap&&o.enable(5),D.normalMapObjectSpace&&o.enable(6),D.normalMapTangentSpace&&o.enable(7),D.clearcoat&&o.enable(8),D.iridescence&&o.enable(9),D.alphaTest&&o.enable(10),D.vertexColors&&o.enable(11),D.vertexAlphas&&o.enable(12),D.vertexUv1s&&o.enable(13),D.vertexUv2s&&o.enable(14),D.vertexUv3s&&o.enable(15),D.vertexTangents&&o.enable(16),D.anisotropy&&o.enable(17),M.push(o.mask),o.disableAll(),D.fog&&o.enable(0),D.useFog&&o.enable(1),D.flatShading&&o.enable(2),D.logarithmicDepthBuffer&&o.enable(3),D.skinning&&o.enable(4),D.morphTargets&&o.enable(5),D.morphNormals&&o.enable(6),D.morphColors&&o.enable(7),D.premultipliedAlpha&&o.enable(8),D.shadowMapEnabled&&o.enable(9),D.useLegacyLights&&o.enable(10),D.doubleSided&&o.enable(11),D.flipSided&&o.enable(12),D.useDepthPacking&&o.enable(13),D.dithering&&o.enable(14),D.transmission&&o.enable(15),D.sheen&&o.enable(16),D.opaque&&o.enable(17),D.pointsUvs&&o.enable(18),M.push(o.mask)}function T(M){const D=v[M.type];let W;if(D){const ne=Mi[D];W=Ry.clone(ne.uniforms)}else W=M.uniforms;return W}function E(M,D){let W;for(let ne=0,B=c.length;ne<B;ne++){const O=c[ne];if(O.cacheKey===D){W=O,++W.usedTimes;break}}return W===void 0&&(W=new NE(s,D,M,r),c.push(W)),W}function A(M){if(--M.usedTimes===0){const D=c.indexOf(M);c[D]=c[c.length-1],c.pop(),M.destroy()}}function R(M){l.remove(M)}function L(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:T,acquireProgram:E,releaseProgram:A,releaseShaderCache:R,programs:c,dispose:L}}function zE(){let s=new WeakMap;function e(r){let a=s.get(r);return a===void 0&&(a={},s.set(r,a)),a}function t(r){s.delete(r)}function n(r,a,o){s.get(r)[a]=o}function i(){s=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function HE(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Ed(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Td(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function a(h,f,d,v,g,m){let p=s[e];return p===void 0?(p={id:h.id,object:h,geometry:f,material:d,groupOrder:v,renderOrder:h.renderOrder,z:g,group:m},s[e]=p):(p.id=h.id,p.object=h,p.geometry=f,p.material=d,p.groupOrder=v,p.renderOrder=h.renderOrder,p.z=g,p.group=m),e++,p}function o(h,f,d,v,g,m){const p=a(h,f,d,v,g,m);d.transmission>0?n.push(p):d.transparent===!0?i.push(p):t.push(p)}function l(h,f,d,v,g,m){const p=a(h,f,d,v,g,m);d.transmission>0?n.unshift(p):d.transparent===!0?i.unshift(p):t.unshift(p)}function c(h,f){t.length>1&&t.sort(h||HE),n.length>1&&n.sort(f||Ed),i.length>1&&i.sort(f||Ed)}function u(){for(let h=e,f=s.length;h<f;h++){const d=s[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:o,unshift:l,finish:u,sort:c}}function GE(){let s=new WeakMap;function e(n,i){const r=s.get(n);let a;return r===void 0?(a=new Td,s.set(n,[a])):i>=r.length?(a=new Td,r.push(a)):a=r[i],a}function t(){s=new WeakMap}return{get:e,dispose:t}}function VE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new G,color:new et};break;case"SpotLight":t={position:new G,direction:new G,color:new et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new G,color:new et,distance:0,decay:0};break;case"HemisphereLight":t={direction:new G,skyColor:new et,groundColor:new et};break;case"RectAreaLight":t={color:new et,position:new G,halfWidth:new G,halfHeight:new G};break}return s[e.id]=t,t}}}function WE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let XE=0;function qE(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function YE(s,e){const t=new VE,n=WE(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)i.probe.push(new G);const r=new G,a=new ot,o=new ot;function l(u,h){let f=0,d=0,v=0;for(let W=0;W<9;W++)i.probe[W].set(0,0,0);let g=0,m=0,p=0,S=0,y=0,T=0,E=0,A=0,R=0,L=0;u.sort(qE);const M=h===!0?Math.PI:1;for(let W=0,ne=u.length;W<ne;W++){const B=u[W],O=B.color,H=B.intensity,te=B.distance,$=B.shadow&&B.shadow.map?B.shadow.map.texture:null;if(B.isAmbientLight)f+=O.r*H*M,d+=O.g*H*M,v+=O.b*H*M;else if(B.isLightProbe)for(let J=0;J<9;J++)i.probe[J].addScaledVector(B.sh.coefficients[J],H);else if(B.isDirectionalLight){const J=t.get(B);if(J.color.copy(B.color).multiplyScalar(B.intensity*M),B.castShadow){const oe=B.shadow,ue=n.get(B);ue.shadowBias=oe.bias,ue.shadowNormalBias=oe.normalBias,ue.shadowRadius=oe.radius,ue.shadowMapSize=oe.mapSize,i.directionalShadow[g]=ue,i.directionalShadowMap[g]=$,i.directionalShadowMatrix[g]=B.shadow.matrix,T++}i.directional[g]=J,g++}else if(B.isSpotLight){const J=t.get(B);J.position.setFromMatrixPosition(B.matrixWorld),J.color.copy(O).multiplyScalar(H*M),J.distance=te,J.coneCos=Math.cos(B.angle),J.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),J.decay=B.decay,i.spot[p]=J;const oe=B.shadow;if(B.map&&(i.spotLightMap[R]=B.map,R++,oe.updateMatrices(B),B.castShadow&&L++),i.spotLightMatrix[p]=oe.matrix,B.castShadow){const ue=n.get(B);ue.shadowBias=oe.bias,ue.shadowNormalBias=oe.normalBias,ue.shadowRadius=oe.radius,ue.shadowMapSize=oe.mapSize,i.spotShadow[p]=ue,i.spotShadowMap[p]=$,A++}p++}else if(B.isRectAreaLight){const J=t.get(B);J.color.copy(O).multiplyScalar(H),J.halfWidth.set(B.width*.5,0,0),J.halfHeight.set(0,B.height*.5,0),i.rectArea[S]=J,S++}else if(B.isPointLight){const J=t.get(B);if(J.color.copy(B.color).multiplyScalar(B.intensity*M),J.distance=B.distance,J.decay=B.decay,B.castShadow){const oe=B.shadow,ue=n.get(B);ue.shadowBias=oe.bias,ue.shadowNormalBias=oe.normalBias,ue.shadowRadius=oe.radius,ue.shadowMapSize=oe.mapSize,ue.shadowCameraNear=oe.camera.near,ue.shadowCameraFar=oe.camera.far,i.pointShadow[m]=ue,i.pointShadowMap[m]=$,i.pointShadowMatrix[m]=B.shadow.matrix,E++}i.point[m]=J,m++}else if(B.isHemisphereLight){const J=t.get(B);J.skyColor.copy(B.color).multiplyScalar(H*M),J.groundColor.copy(B.groundColor).multiplyScalar(H*M),i.hemi[y]=J,y++}}S>0&&(e.isWebGL2||s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=xe.LTC_FLOAT_1,i.rectAreaLTC2=xe.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=xe.LTC_HALF_1,i.rectAreaLTC2=xe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=f,i.ambient[1]=d,i.ambient[2]=v;const D=i.hash;(D.directionalLength!==g||D.pointLength!==m||D.spotLength!==p||D.rectAreaLength!==S||D.hemiLength!==y||D.numDirectionalShadows!==T||D.numPointShadows!==E||D.numSpotShadows!==A||D.numSpotMaps!==R)&&(i.directional.length=g,i.spot.length=p,i.rectArea.length=S,i.point.length=m,i.hemi.length=y,i.directionalShadow.length=T,i.directionalShadowMap.length=T,i.pointShadow.length=E,i.pointShadowMap.length=E,i.spotShadow.length=A,i.spotShadowMap.length=A,i.directionalShadowMatrix.length=T,i.pointShadowMatrix.length=E,i.spotLightMatrix.length=A+R-L,i.spotLightMap.length=R,i.numSpotLightShadowsWithMaps=L,D.directionalLength=g,D.pointLength=m,D.spotLength=p,D.rectAreaLength=S,D.hemiLength=y,D.numDirectionalShadows=T,D.numPointShadows=E,D.numSpotShadows=A,D.numSpotMaps=R,i.version=XE++)}function c(u,h){let f=0,d=0,v=0,g=0,m=0;const p=h.matrixWorldInverse;for(let S=0,y=u.length;S<y;S++){const T=u[S];if(T.isDirectionalLight){const E=i.directional[f];E.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(p),f++}else if(T.isSpotLight){const E=i.spot[v];E.position.setFromMatrixPosition(T.matrixWorld),E.position.applyMatrix4(p),E.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(p),v++}else if(T.isRectAreaLight){const E=i.rectArea[g];E.position.setFromMatrixPosition(T.matrixWorld),E.position.applyMatrix4(p),o.identity(),a.copy(T.matrixWorld),a.premultiply(p),o.extractRotation(a),E.halfWidth.set(T.width*.5,0,0),E.halfHeight.set(0,T.height*.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),g++}else if(T.isPointLight){const E=i.point[d];E.position.setFromMatrixPosition(T.matrixWorld),E.position.applyMatrix4(p),d++}else if(T.isHemisphereLight){const E=i.hemi[m];E.direction.setFromMatrixPosition(T.matrixWorld),E.direction.transformDirection(p),m++}}}return{setup:l,setupView:c,state:i}}function Ad(s,e){const t=new YE(s,e),n=[],i=[];function r(){n.length=0,i.length=0}function a(h){n.push(h)}function o(h){i.push(h)}function l(h){t.setup(n,h)}function c(h){t.setupView(n,h)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function jE(s,e){let t=new WeakMap;function n(r,a=0){const o=t.get(r);let l;return o===void 0?(l=new Ad(s,e),t.set(r,[l])):a>=o.length?(l=new Ad(s,e),o.push(l)):l=o[a],l}function i(){t=new WeakMap}return{get:n,dispose:i}}class $E extends vi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ox,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class KE extends vi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const ZE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,JE=`uniform sampler2D shadow_pass;
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
}`;function QE(s,e,t){let n=new Ru;const i=new Xe,r=new Xe,a=new Lt,o=new $E({depthPacking:Fx}),l=new KE,c={},u=t.maxTextureSize,h={[Qi]:Un,[Un]:Qi,[bi]:bi},f=new Qr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Xe},radius:{value:4}},vertexShader:ZE,fragmentShader:JE}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const v=new Pi;v.setAttribute("position",new Ln(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new vn(v,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Up;let p=this.type;this.render=function(E,A,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;const L=s.getRenderTarget(),M=s.getActiveCubeFace(),D=s.getActiveMipmapLevel(),W=s.state;W.setBlending(xr),W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);const ne=p!==Wi&&this.type===Wi,B=p===Wi&&this.type!==Wi;for(let O=0,H=E.length;O<H;O++){const te=E[O],$=te.shadow;if($===void 0){console.warn("THREE.WebGLShadowMap:",te,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;i.copy($.mapSize);const J=$.getFrameExtents();if(i.multiply(J),r.copy($.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/J.x),i.x=r.x*J.x,$.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/J.y),i.y=r.y*J.y,$.mapSize.y=r.y)),$.map===null||ne===!0||B===!0){const ue=this.type!==Wi?{minFilter:un,magFilter:un}:{};$.map!==null&&$.map.dispose(),$.map=new Jr(i.x,i.y,ue),$.map.texture.name=te.name+".shadowMap",$.camera.updateProjectionMatrix()}s.setRenderTarget($.map),s.clear();const oe=$.getViewportCount();for(let ue=0;ue<oe;ue++){const Te=$.getViewport(ue);a.set(r.x*Te.x,r.y*Te.y,r.x*Te.z,r.y*Te.w),W.viewport(a),$.updateMatrices(te,ue),n=$.getFrustum(),T(A,R,$.camera,te,this.type)}$.isPointLightShadow!==!0&&this.type===Wi&&S($,R),$.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(L,M,D)};function S(E,A){const R=e.update(g);f.defines.VSM_SAMPLES!==E.blurSamples&&(f.defines.VSM_SAMPLES=E.blurSamples,d.defines.VSM_SAMPLES=E.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Jr(i.x,i.y)),f.uniforms.shadow_pass.value=E.map.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,s.setRenderTarget(E.mapPass),s.clear(),s.renderBufferDirect(A,null,R,f,g,null),d.uniforms.shadow_pass.value=E.mapPass.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,s.setRenderTarget(E.map),s.clear(),s.renderBufferDirect(A,null,R,d,g,null)}function y(E,A,R,L){let M=null;const D=R.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(D!==void 0)M=D;else if(M=R.isPointLight===!0?l:o,s.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const W=M.uuid,ne=A.uuid;let B=c[W];B===void 0&&(B={},c[W]=B);let O=B[ne];O===void 0&&(O=M.clone(),B[ne]=O),M=O}if(M.visible=A.visible,M.wireframe=A.wireframe,L===Wi?M.side=A.shadowSide!==null?A.shadowSide:A.side:M.side=A.shadowSide!==null?A.shadowSide:h[A.side],M.alphaMap=A.alphaMap,M.alphaTest=A.alphaTest,M.map=A.map,M.clipShadows=A.clipShadows,M.clippingPlanes=A.clippingPlanes,M.clipIntersection=A.clipIntersection,M.displacementMap=A.displacementMap,M.displacementScale=A.displacementScale,M.displacementBias=A.displacementBias,M.wireframeLinewidth=A.wireframeLinewidth,M.linewidth=A.linewidth,R.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const W=s.properties.get(M);W.light=R}return M}function T(E,A,R,L,M){if(E.visible===!1)return;if(E.layers.test(A.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&M===Wi)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,E.matrixWorld);const ne=e.update(E),B=E.material;if(Array.isArray(B)){const O=ne.groups;for(let H=0,te=O.length;H<te;H++){const $=O[H],J=B[$.materialIndex];if(J&&J.visible){const oe=y(E,J,L,M);s.renderBufferDirect(R,null,ne,oe,E,$)}}}else if(B.visible){const O=y(E,B,L,M);s.renderBufferDirect(R,null,ne,O,E,null)}}const W=E.children;for(let ne=0,B=W.length;ne<B;ne++)T(W[ne],A,R,L,M)}}function eT(s,e,t){const n=t.isWebGL2;function i(){let z=!1;const Me=new Lt;let Q=null;const ve=new Lt(0,0,0,0);return{setMask:function(be){Q!==be&&!z&&(s.colorMask(be,be,be,be),Q=be)},setLocked:function(be){z=be},setClear:function(be,ft,It,qt,Ii){Ii===!0&&(be*=qt,ft*=qt,It*=qt),Me.set(be,ft,It,qt),ve.equals(Me)===!1&&(s.clearColor(be,ft,It,qt),ve.copy(Me))},reset:function(){z=!1,Q=null,ve.set(-1,0,0,0)}}}function r(){let z=!1,Me=null,Q=null,ve=null;return{setTest:function(be){be?Ne(s.DEPTH_TEST):Ze(s.DEPTH_TEST)},setMask:function(be){Me!==be&&!z&&(s.depthMask(be),Me=be)},setFunc:function(be){if(Q!==be){switch(be){case hx:s.depthFunc(s.NEVER);break;case fx:s.depthFunc(s.ALWAYS);break;case dx:s.depthFunc(s.LESS);break;case Xc:s.depthFunc(s.LEQUAL);break;case px:s.depthFunc(s.EQUAL);break;case mx:s.depthFunc(s.GEQUAL);break;case gx:s.depthFunc(s.GREATER);break;case _x:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Q=be}},setLocked:function(be){z=be},setClear:function(be){ve!==be&&(s.clearDepth(be),ve=be)},reset:function(){z=!1,Me=null,Q=null,ve=null}}}function a(){let z=!1,Me=null,Q=null,ve=null,be=null,ft=null,It=null,qt=null,Ii=null;return{setTest:function(Ut){z||(Ut?Ne(s.STENCIL_TEST):Ze(s.STENCIL_TEST))},setMask:function(Ut){Me!==Ut&&!z&&(s.stencilMask(Ut),Me=Ut)},setFunc:function(Ut,$n,fn){(Q!==Ut||ve!==$n||be!==fn)&&(s.stencilFunc(Ut,$n,fn),Q=Ut,ve=$n,be=fn)},setOp:function(Ut,$n,fn){(ft!==Ut||It!==$n||qt!==fn)&&(s.stencilOp(Ut,$n,fn),ft=Ut,It=$n,qt=fn)},setLocked:function(Ut){z=Ut},setClear:function(Ut){Ii!==Ut&&(s.clearStencil(Ut),Ii=Ut)},reset:function(){z=!1,Me=null,Q=null,ve=null,be=null,ft=null,It=null,qt=null,Ii=null}}}const o=new i,l=new r,c=new a,u=new WeakMap,h=new WeakMap;let f={},d={},v=new WeakMap,g=[],m=null,p=!1,S=null,y=null,T=null,E=null,A=null,R=null,L=null,M=!1,D=null,W=null,ne=null,B=null,O=null;const H=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let te=!1,$=0;const J=s.getParameter(s.VERSION);J.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(J)[1]),te=$>=1):J.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),te=$>=2);let oe=null,ue={};const Te=s.getParameter(s.SCISSOR_BOX),Z=s.getParameter(s.VIEWPORT),fe=new Lt().fromArray(Te),le=new Lt().fromArray(Z);function ye(z,Me,Q,ve){const be=new Uint8Array(4),ft=s.createTexture();s.bindTexture(z,ft),s.texParameteri(z,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(z,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let It=0;It<Q;It++)n&&(z===s.TEXTURE_3D||z===s.TEXTURE_2D_ARRAY)?s.texImage3D(Me,0,s.RGBA,1,1,ve,0,s.RGBA,s.UNSIGNED_BYTE,be):s.texImage2D(Me+It,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,be);return ft}const Ae={};Ae[s.TEXTURE_2D]=ye(s.TEXTURE_2D,s.TEXTURE_2D,1),Ae[s.TEXTURE_CUBE_MAP]=ye(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Ae[s.TEXTURE_2D_ARRAY]=ye(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Ae[s.TEXTURE_3D]=ye(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Ne(s.DEPTH_TEST),l.setFunc(Xc),Fe(!1),yt(uf),Ne(s.CULL_FACE),Ue(xr);function Ne(z){f[z]!==!0&&(s.enable(z),f[z]=!0)}function Ze(z){f[z]!==!1&&(s.disable(z),f[z]=!1)}function Be(z,Me){return d[z]!==Me?(s.bindFramebuffer(z,Me),d[z]=Me,n&&(z===s.DRAW_FRAMEBUFFER&&(d[s.FRAMEBUFFER]=Me),z===s.FRAMEBUFFER&&(d[s.DRAW_FRAMEBUFFER]=Me)),!0):!1}function kt(z,Me){let Q=g,ve=!1;if(z)if(Q=v.get(Me),Q===void 0&&(Q=[],v.set(Me,Q)),z.isWebGLMultipleRenderTargets){const be=z.texture;if(Q.length!==be.length||Q[0]!==s.COLOR_ATTACHMENT0){for(let ft=0,It=be.length;ft<It;ft++)Q[ft]=s.COLOR_ATTACHMENT0+ft;Q.length=be.length,ve=!0}}else Q[0]!==s.COLOR_ATTACHMENT0&&(Q[0]=s.COLOR_ATTACHMENT0,ve=!0);else Q[0]!==s.BACK&&(Q[0]=s.BACK,ve=!0);ve&&(t.isWebGL2?s.drawBuffers(Q):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Q))}function tt(z){return m!==z?(s.useProgram(z),m=z,!0):!1}const j={[Fs]:s.FUNC_ADD,[ex]:s.FUNC_SUBTRACT,[tx]:s.FUNC_REVERSE_SUBTRACT};if(n)j[pf]=s.MIN,j[mf]=s.MAX;else{const z=e.get("EXT_blend_minmax");z!==null&&(j[pf]=z.MIN_EXT,j[mf]=z.MAX_EXT)}const jt={[nx]:s.ZERO,[ix]:s.ONE,[rx]:s.SRC_COLOR,[Np]:s.SRC_ALPHA,[ux]:s.SRC_ALPHA_SATURATE,[lx]:s.DST_COLOR,[ax]:s.DST_ALPHA,[sx]:s.ONE_MINUS_SRC_COLOR,[Op]:s.ONE_MINUS_SRC_ALPHA,[cx]:s.ONE_MINUS_DST_COLOR,[ox]:s.ONE_MINUS_DST_ALPHA};function Ue(z,Me,Q,ve,be,ft,It,qt){if(z===xr){p===!0&&(Ze(s.BLEND),p=!1);return}if(p===!1&&(Ne(s.BLEND),p=!0),z!==Qv){if(z!==S||qt!==M){if((y!==Fs||A!==Fs)&&(s.blendEquation(s.FUNC_ADD),y=Fs,A=Fs),qt)switch(z){case Hs:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case hf:s.blendFunc(s.ONE,s.ONE);break;case ff:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case df:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}else switch(z){case Hs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case hf:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case ff:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case df:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}T=null,E=null,R=null,L=null,S=z,M=qt}return}be=be||Me,ft=ft||Q,It=It||ve,(Me!==y||be!==A)&&(s.blendEquationSeparate(j[Me],j[be]),y=Me,A=be),(Q!==T||ve!==E||ft!==R||It!==L)&&(s.blendFuncSeparate(jt[Q],jt[ve],jt[ft],jt[It]),T=Q,E=ve,R=ft,L=It),S=z,M=!1}function je(z,Me){z.side===bi?Ze(s.CULL_FACE):Ne(s.CULL_FACE);let Q=z.side===Un;Me&&(Q=!Q),Fe(Q),z.blending===Hs&&z.transparent===!1?Ue(xr):Ue(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.premultipliedAlpha),l.setFunc(z.depthFunc),l.setTest(z.depthTest),l.setMask(z.depthWrite),o.setMask(z.colorWrite);const ve=z.stencilWrite;c.setTest(ve),ve&&(c.setMask(z.stencilWriteMask),c.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),c.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),qe(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?Ne(s.SAMPLE_ALPHA_TO_COVERAGE):Ze(s.SAMPLE_ALPHA_TO_COVERAGE)}function Fe(z){D!==z&&(z?s.frontFace(s.CW):s.frontFace(s.CCW),D=z)}function yt(z){z!==Kv?(Ne(s.CULL_FACE),z!==W&&(z===uf?s.cullFace(s.BACK):z===Zv?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ze(s.CULL_FACE),W=z}function $e(z){z!==ne&&(te&&s.lineWidth(z),ne=z)}function qe(z,Me,Q){z?(Ne(s.POLYGON_OFFSET_FILL),(B!==Me||O!==Q)&&(s.polygonOffset(Me,Q),B=Me,O=Q)):Ze(s.POLYGON_OFFSET_FILL)}function ht(z){z?Ne(s.SCISSOR_TEST):Ze(s.SCISSOR_TEST)}function Xt(z){z===void 0&&(z=s.TEXTURE0+H-1),oe!==z&&(s.activeTexture(z),oe=z)}function $t(z,Me,Q){Q===void 0&&(oe===null?Q=s.TEXTURE0+H-1:Q=oe);let ve=ue[Q];ve===void 0&&(ve={type:void 0,texture:void 0},ue[Q]=ve),(ve.type!==z||ve.texture!==Me)&&(oe!==Q&&(s.activeTexture(Q),oe=Q),s.bindTexture(z,Me||Ae[z]),ve.type=z,ve.texture=Me)}function I(){const z=ue[oe];z!==void 0&&z.type!==void 0&&(s.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function w(){try{s.compressedTexImage2D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ie(){try{s.compressedTexImage3D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function _e(){try{s.texSubImage2D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ge(){try{s.texSubImage3D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function U(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ce(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function me(){try{s.texStorage2D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ee(){try{s.texStorage3D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Pe(){try{s.texImage2D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function De(){try{s.texImage3D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ie(z){fe.equals(z)===!1&&(s.scissor(z.x,z.y,z.z,z.w),fe.copy(z))}function Re(z){le.equals(z)===!1&&(s.viewport(z.x,z.y,z.z,z.w),le.copy(z))}function Ee(z,Me){let Q=h.get(Me);Q===void 0&&(Q=new WeakMap,h.set(Me,Q));let ve=Q.get(z);ve===void 0&&(ve=s.getUniformBlockIndex(Me,z.name),Q.set(z,ve))}function ze(z,Me){const ve=h.get(Me).get(z);u.get(Me)!==ve&&(s.uniformBlockBinding(Me,ve,z.__bindingPointIndex),u.set(Me,ve))}function Mt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),n===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),f={},oe=null,ue={},d={},v=new WeakMap,g=[],m=null,p=!1,S=null,y=null,T=null,E=null,A=null,R=null,L=null,M=!1,D=null,W=null,ne=null,B=null,O=null,fe.set(0,0,s.canvas.width,s.canvas.height),le.set(0,0,s.canvas.width,s.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:Ne,disable:Ze,bindFramebuffer:Be,drawBuffers:kt,useProgram:tt,setBlending:Ue,setMaterial:je,setFlipSided:Fe,setCullFace:yt,setLineWidth:$e,setPolygonOffset:qe,setScissorTest:ht,activeTexture:Xt,bindTexture:$t,unbindTexture:I,compressedTexImage2D:w,compressedTexImage3D:ie,texImage2D:Pe,texImage3D:De,updateUBOMapping:Ee,uniformBlockBinding:ze,texStorage2D:me,texStorage3D:ee,texSubImage2D:_e,texSubImage3D:ge,compressedTexSubImage2D:U,compressedTexSubImage3D:ce,scissor:Ie,viewport:Re,reset:Mt}}function tT(s,e,t,n,i,r,a){const o=i.isWebGL2,l=i.maxTextures,c=i.maxCubemapSize,u=i.maxTextureSize,h=i.maxSamples,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),v=new WeakMap;let g;const m=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(I,w){return p?new OffscreenCanvas(I,w):Ka("canvas")}function y(I,w,ie,_e){let ge=1;if((I.width>_e||I.height>_e)&&(ge=_e/Math.max(I.width,I.height)),ge<1||w===!0)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap){const U=w?al:Math.floor,ce=U(ge*I.width),me=U(ge*I.height);g===void 0&&(g=S(ce,me));const ee=ie?S(ce,me):g;return ee.width=ce,ee.height=me,ee.getContext("2d").drawImage(I,0,0,ce,me),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+I.width+"x"+I.height+") to ("+ce+"x"+me+")."),ee}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+I.width+"x"+I.height+")."),I;return I}function T(I){return Jc(I.width)&&Jc(I.height)}function E(I){return o?!1:I.wrapS!==ei||I.wrapT!==ei||I.minFilter!==un&&I.minFilter!==Dn}function A(I,w){return I.generateMipmaps&&w&&I.minFilter!==un&&I.minFilter!==Dn}function R(I){s.generateMipmap(I)}function L(I,w,ie,_e,ge=!1){if(o===!1)return w;if(I!==null){if(s[I]!==void 0)return s[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let U=w;return w===s.RED&&(ie===s.FLOAT&&(U=s.R32F),ie===s.HALF_FLOAT&&(U=s.R16F),ie===s.UNSIGNED_BYTE&&(U=s.R8)),w===s.RG&&(ie===s.FLOAT&&(U=s.RG32F),ie===s.HALF_FLOAT&&(U=s.RG16F),ie===s.UNSIGNED_BYTE&&(U=s.RG8)),w===s.RGBA&&(ie===s.FLOAT&&(U=s.RGBA32F),ie===s.HALF_FLOAT&&(U=s.RGBA16F),ie===s.UNSIGNED_BYTE&&(U=_e===We&&ge===!1?s.SRGB8_ALPHA8:s.RGBA8),ie===s.UNSIGNED_SHORT_4_4_4_4&&(U=s.RGBA4),ie===s.UNSIGNED_SHORT_5_5_5_1&&(U=s.RGB5_A1)),(U===s.R16F||U===s.R32F||U===s.RG16F||U===s.RG32F||U===s.RGBA16F||U===s.RGBA32F)&&e.get("EXT_color_buffer_float"),U}function M(I,w,ie){return A(I,ie)===!0||I.isFramebufferTexture&&I.minFilter!==un&&I.minFilter!==Dn?Math.log2(Math.max(w.width,w.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?w.mipmaps.length:1}function D(I){return I===un||I===jc||I===Zo?s.NEAREST:s.LINEAR}function W(I){const w=I.target;w.removeEventListener("dispose",W),B(w),w.isVideoTexture&&v.delete(w)}function ne(I){const w=I.target;w.removeEventListener("dispose",ne),H(w)}function B(I){const w=n.get(I);if(w.__webglInit===void 0)return;const ie=I.source,_e=m.get(ie);if(_e){const ge=_e[w.__cacheKey];ge.usedTimes--,ge.usedTimes===0&&O(I),Object.keys(_e).length===0&&m.delete(ie)}n.remove(I)}function O(I){const w=n.get(I);s.deleteTexture(w.__webglTexture);const ie=I.source,_e=m.get(ie);delete _e[w.__cacheKey],a.memory.textures--}function H(I){const w=I.texture,ie=n.get(I),_e=n.get(w);if(_e.__webglTexture!==void 0&&(s.deleteTexture(_e.__webglTexture),a.memory.textures--),I.depthTexture&&I.depthTexture.dispose(),I.isWebGLCubeRenderTarget)for(let ge=0;ge<6;ge++)s.deleteFramebuffer(ie.__webglFramebuffer[ge]),ie.__webglDepthbuffer&&s.deleteRenderbuffer(ie.__webglDepthbuffer[ge]);else{if(s.deleteFramebuffer(ie.__webglFramebuffer),ie.__webglDepthbuffer&&s.deleteRenderbuffer(ie.__webglDepthbuffer),ie.__webglMultisampledFramebuffer&&s.deleteFramebuffer(ie.__webglMultisampledFramebuffer),ie.__webglColorRenderbuffer)for(let ge=0;ge<ie.__webglColorRenderbuffer.length;ge++)ie.__webglColorRenderbuffer[ge]&&s.deleteRenderbuffer(ie.__webglColorRenderbuffer[ge]);ie.__webglDepthRenderbuffer&&s.deleteRenderbuffer(ie.__webglDepthRenderbuffer)}if(I.isWebGLMultipleRenderTargets)for(let ge=0,U=w.length;ge<U;ge++){const ce=n.get(w[ge]);ce.__webglTexture&&(s.deleteTexture(ce.__webglTexture),a.memory.textures--),n.remove(w[ge])}n.remove(w),n.remove(I)}let te=0;function $(){te=0}function J(){const I=te;return I>=l&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+l),te+=1,I}function oe(I){const w=[];return w.push(I.wrapS),w.push(I.wrapT),w.push(I.wrapR||0),w.push(I.magFilter),w.push(I.minFilter),w.push(I.anisotropy),w.push(I.internalFormat),w.push(I.format),w.push(I.type),w.push(I.generateMipmaps),w.push(I.premultiplyAlpha),w.push(I.flipY),w.push(I.unpackAlignment),w.push(I.colorSpace),w.join()}function ue(I,w){const ie=n.get(I);if(I.isVideoTexture&&Xt(I),I.isRenderTargetTexture===!1&&I.version>0&&ie.__version!==I.version){const _e=I.image;if(_e===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(_e.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Be(ie,I,w);return}}t.bindTexture(s.TEXTURE_2D,ie.__webglTexture,s.TEXTURE0+w)}function Te(I,w){const ie=n.get(I);if(I.version>0&&ie.__version!==I.version){Be(ie,I,w);return}t.bindTexture(s.TEXTURE_2D_ARRAY,ie.__webglTexture,s.TEXTURE0+w)}function Z(I,w){const ie=n.get(I);if(I.version>0&&ie.__version!==I.version){Be(ie,I,w);return}t.bindTexture(s.TEXTURE_3D,ie.__webglTexture,s.TEXTURE0+w)}function fe(I,w){const ie=n.get(I);if(I.version>0&&ie.__version!==I.version){kt(ie,I,w);return}t.bindTexture(s.TEXTURE_CUBE_MAP,ie.__webglTexture,s.TEXTURE0+w)}const le={[Ks]:s.REPEAT,[ei]:s.CLAMP_TO_EDGE,[rl]:s.MIRRORED_REPEAT},ye={[un]:s.NEAREST,[jc]:s.NEAREST_MIPMAP_NEAREST,[Zo]:s.NEAREST_MIPMAP_LINEAR,[Dn]:s.LINEAR,[Bp]:s.LINEAR_MIPMAP_NEAREST,[Zr]:s.LINEAR_MIPMAP_LINEAR},Ae={[zx]:s.NEVER,[Yx]:s.ALWAYS,[Hx]:s.LESS,[Vx]:s.LEQUAL,[Gx]:s.EQUAL,[qx]:s.GEQUAL,[Wx]:s.GREATER,[Xx]:s.NOTEQUAL};function Ne(I,w,ie){if(ie?(s.texParameteri(I,s.TEXTURE_WRAP_S,le[w.wrapS]),s.texParameteri(I,s.TEXTURE_WRAP_T,le[w.wrapT]),(I===s.TEXTURE_3D||I===s.TEXTURE_2D_ARRAY)&&s.texParameteri(I,s.TEXTURE_WRAP_R,le[w.wrapR]),s.texParameteri(I,s.TEXTURE_MAG_FILTER,ye[w.magFilter]),s.texParameteri(I,s.TEXTURE_MIN_FILTER,ye[w.minFilter])):(s.texParameteri(I,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(I,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(I===s.TEXTURE_3D||I===s.TEXTURE_2D_ARRAY)&&s.texParameteri(I,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(w.wrapS!==ei||w.wrapT!==ei)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(I,s.TEXTURE_MAG_FILTER,D(w.magFilter)),s.texParameteri(I,s.TEXTURE_MIN_FILTER,D(w.minFilter)),w.minFilter!==un&&w.minFilter!==Dn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),w.compareFunction&&(s.texParameteri(I,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(I,s.TEXTURE_COMPARE_FUNC,Ae[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const _e=e.get("EXT_texture_filter_anisotropic");if(w.magFilter===un||w.minFilter!==Zo&&w.minFilter!==Zr||w.type===ji&&e.has("OES_texture_float_linear")===!1||o===!1&&w.type===ja&&e.has("OES_texture_half_float_linear")===!1)return;(w.anisotropy>1||n.get(w).__currentAnisotropy)&&(s.texParameterf(I,_e.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,i.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy)}}function Ze(I,w){let ie=!1;I.__webglInit===void 0&&(I.__webglInit=!0,w.addEventListener("dispose",W));const _e=w.source;let ge=m.get(_e);ge===void 0&&(ge={},m.set(_e,ge));const U=oe(w);if(U!==I.__cacheKey){ge[U]===void 0&&(ge[U]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,ie=!0),ge[U].usedTimes++;const ce=ge[I.__cacheKey];ce!==void 0&&(ge[I.__cacheKey].usedTimes--,ce.usedTimes===0&&O(w)),I.__cacheKey=U,I.__webglTexture=ge[U].texture}return ie}function Be(I,w,ie){let _e=s.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(_e=s.TEXTURE_2D_ARRAY),w.isData3DTexture&&(_e=s.TEXTURE_3D);const ge=Ze(I,w),U=w.source;t.bindTexture(_e,I.__webglTexture,s.TEXTURE0+ie);const ce=n.get(U);if(U.version!==ce.__version||ge===!0){t.activeTexture(s.TEXTURE0+ie),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.NONE);const me=E(w)&&T(w.image)===!1;let ee=y(w.image,me,!1,u);ee=$t(w,ee);const Pe=T(ee)||o,De=r.convert(w.format,w.colorSpace);let Ie=r.convert(w.type),Re=L(w.internalFormat,De,Ie,w.colorSpace);Ne(_e,w,Pe);let Ee;const ze=w.mipmaps,Mt=o&&w.isVideoTexture!==!0,z=ce.__version===void 0||ge===!0,Me=M(w,ee,Pe);if(w.isDepthTexture)Re=s.DEPTH_COMPONENT,o?w.type===ji?Re=s.DEPTH_COMPONENT32F:w.type===pr?Re=s.DEPTH_COMPONENT24:w.type===Wr?Re=s.DEPTH24_STENCIL8:Re=s.DEPTH_COMPONENT16:w.type===ji&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),w.format===Xr&&Re===s.DEPTH_COMPONENT&&w.type!==Eu&&w.type!==pr&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),w.type=pr,Ie=r.convert(w.type)),w.format===Zs&&Re===s.DEPTH_COMPONENT&&(Re=s.DEPTH_STENCIL,w.type!==Wr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),w.type=Wr,Ie=r.convert(w.type))),z&&(Mt?t.texStorage2D(s.TEXTURE_2D,1,Re,ee.width,ee.height):t.texImage2D(s.TEXTURE_2D,0,Re,ee.width,ee.height,0,De,Ie,null));else if(w.isDataTexture)if(ze.length>0&&Pe){Mt&&z&&t.texStorage2D(s.TEXTURE_2D,Me,Re,ze[0].width,ze[0].height);for(let Q=0,ve=ze.length;Q<ve;Q++)Ee=ze[Q],Mt?t.texSubImage2D(s.TEXTURE_2D,Q,0,0,Ee.width,Ee.height,De,Ie,Ee.data):t.texImage2D(s.TEXTURE_2D,Q,Re,Ee.width,Ee.height,0,De,Ie,Ee.data);w.generateMipmaps=!1}else Mt?(z&&t.texStorage2D(s.TEXTURE_2D,Me,Re,ee.width,ee.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,ee.width,ee.height,De,Ie,ee.data)):t.texImage2D(s.TEXTURE_2D,0,Re,ee.width,ee.height,0,De,Ie,ee.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){Mt&&z&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Me,Re,ze[0].width,ze[0].height,ee.depth);for(let Q=0,ve=ze.length;Q<ve;Q++)Ee=ze[Q],w.format!==ti?De!==null?Mt?t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Q,0,0,0,Ee.width,Ee.height,ee.depth,De,Ee.data,0,0):t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Q,Re,Ee.width,Ee.height,ee.depth,0,Ee.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Mt?t.texSubImage3D(s.TEXTURE_2D_ARRAY,Q,0,0,0,Ee.width,Ee.height,ee.depth,De,Ie,Ee.data):t.texImage3D(s.TEXTURE_2D_ARRAY,Q,Re,Ee.width,Ee.height,ee.depth,0,De,Ie,Ee.data)}else{Mt&&z&&t.texStorage2D(s.TEXTURE_2D,Me,Re,ze[0].width,ze[0].height);for(let Q=0,ve=ze.length;Q<ve;Q++)Ee=ze[Q],w.format!==ti?De!==null?Mt?t.compressedTexSubImage2D(s.TEXTURE_2D,Q,0,0,Ee.width,Ee.height,De,Ee.data):t.compressedTexImage2D(s.TEXTURE_2D,Q,Re,Ee.width,Ee.height,0,Ee.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Mt?t.texSubImage2D(s.TEXTURE_2D,Q,0,0,Ee.width,Ee.height,De,Ie,Ee.data):t.texImage2D(s.TEXTURE_2D,Q,Re,Ee.width,Ee.height,0,De,Ie,Ee.data)}else if(w.isDataArrayTexture)Mt?(z&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Me,Re,ee.width,ee.height,ee.depth),t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,De,Ie,ee.data)):t.texImage3D(s.TEXTURE_2D_ARRAY,0,Re,ee.width,ee.height,ee.depth,0,De,Ie,ee.data);else if(w.isData3DTexture)Mt?(z&&t.texStorage3D(s.TEXTURE_3D,Me,Re,ee.width,ee.height,ee.depth),t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,De,Ie,ee.data)):t.texImage3D(s.TEXTURE_3D,0,Re,ee.width,ee.height,ee.depth,0,De,Ie,ee.data);else if(w.isFramebufferTexture){if(z)if(Mt)t.texStorage2D(s.TEXTURE_2D,Me,Re,ee.width,ee.height);else{let Q=ee.width,ve=ee.height;for(let be=0;be<Me;be++)t.texImage2D(s.TEXTURE_2D,be,Re,Q,ve,0,De,Ie,null),Q>>=1,ve>>=1}}else if(ze.length>0&&Pe){Mt&&z&&t.texStorage2D(s.TEXTURE_2D,Me,Re,ze[0].width,ze[0].height);for(let Q=0,ve=ze.length;Q<ve;Q++)Ee=ze[Q],Mt?t.texSubImage2D(s.TEXTURE_2D,Q,0,0,De,Ie,Ee):t.texImage2D(s.TEXTURE_2D,Q,Re,De,Ie,Ee);w.generateMipmaps=!1}else Mt?(z&&t.texStorage2D(s.TEXTURE_2D,Me,Re,ee.width,ee.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,De,Ie,ee)):t.texImage2D(s.TEXTURE_2D,0,Re,De,Ie,ee);A(w,Pe)&&R(_e),ce.__version=U.version,w.onUpdate&&w.onUpdate(w)}I.__version=w.version}function kt(I,w,ie){if(w.image.length!==6)return;const _e=Ze(I,w),ge=w.source;t.bindTexture(s.TEXTURE_CUBE_MAP,I.__webglTexture,s.TEXTURE0+ie);const U=n.get(ge);if(ge.version!==U.__version||_e===!0){t.activeTexture(s.TEXTURE0+ie),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.NONE);const ce=w.isCompressedTexture||w.image[0].isCompressedTexture,me=w.image[0]&&w.image[0].isDataTexture,ee=[];for(let Q=0;Q<6;Q++)!ce&&!me?ee[Q]=y(w.image[Q],!1,!0,c):ee[Q]=me?w.image[Q].image:w.image[Q],ee[Q]=$t(w,ee[Q]);const Pe=ee[0],De=T(Pe)||o,Ie=r.convert(w.format,w.colorSpace),Re=r.convert(w.type),Ee=L(w.internalFormat,Ie,Re,w.colorSpace),ze=o&&w.isVideoTexture!==!0,Mt=U.__version===void 0||_e===!0;let z=M(w,Pe,De);Ne(s.TEXTURE_CUBE_MAP,w,De);let Me;if(ce){ze&&Mt&&t.texStorage2D(s.TEXTURE_CUBE_MAP,z,Ee,Pe.width,Pe.height);for(let Q=0;Q<6;Q++){Me=ee[Q].mipmaps;for(let ve=0;ve<Me.length;ve++){const be=Me[ve];w.format!==ti?Ie!==null?ze?t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ve,0,0,be.width,be.height,Ie,be.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ve,Ee,be.width,be.height,0,be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ze?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ve,0,0,be.width,be.height,Ie,Re,be.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ve,Ee,be.width,be.height,0,Ie,Re,be.data)}}}else{Me=w.mipmaps,ze&&Mt&&(Me.length>0&&z++,t.texStorage2D(s.TEXTURE_CUBE_MAP,z,Ee,ee[0].width,ee[0].height));for(let Q=0;Q<6;Q++)if(me){ze?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,ee[Q].width,ee[Q].height,Ie,Re,ee[Q].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Ee,ee[Q].width,ee[Q].height,0,Ie,Re,ee[Q].data);for(let ve=0;ve<Me.length;ve++){const ft=Me[ve].image[Q].image;ze?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ve+1,0,0,ft.width,ft.height,Ie,Re,ft.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ve+1,Ee,ft.width,ft.height,0,Ie,Re,ft.data)}}else{ze?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Ie,Re,ee[Q]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Ee,Ie,Re,ee[Q]);for(let ve=0;ve<Me.length;ve++){const be=Me[ve];ze?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ve+1,0,0,Ie,Re,be.image[Q]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ve+1,Ee,Ie,Re,be.image[Q])}}}A(w,De)&&R(s.TEXTURE_CUBE_MAP),U.__version=ge.version,w.onUpdate&&w.onUpdate(w)}I.__version=w.version}function tt(I,w,ie,_e,ge){const U=r.convert(ie.format,ie.colorSpace),ce=r.convert(ie.type),me=L(ie.internalFormat,U,ce,ie.colorSpace);n.get(w).__hasExternalTextures||(ge===s.TEXTURE_3D||ge===s.TEXTURE_2D_ARRAY?t.texImage3D(ge,0,me,w.width,w.height,w.depth,0,U,ce,null):t.texImage2D(ge,0,me,w.width,w.height,0,U,ce,null)),t.bindFramebuffer(s.FRAMEBUFFER,I),ht(w)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,_e,ge,n.get(ie).__webglTexture,0,qe(w)):(ge===s.TEXTURE_2D||ge>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ge<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,_e,ge,n.get(ie).__webglTexture,0),t.bindFramebuffer(s.FRAMEBUFFER,null)}function j(I,w,ie){if(s.bindRenderbuffer(s.RENDERBUFFER,I),w.depthBuffer&&!w.stencilBuffer){let _e=s.DEPTH_COMPONENT16;if(ie||ht(w)){const ge=w.depthTexture;ge&&ge.isDepthTexture&&(ge.type===ji?_e=s.DEPTH_COMPONENT32F:ge.type===pr&&(_e=s.DEPTH_COMPONENT24));const U=qe(w);ht(w)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,U,_e,w.width,w.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,U,_e,w.width,w.height)}else s.renderbufferStorage(s.RENDERBUFFER,_e,w.width,w.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,I)}else if(w.depthBuffer&&w.stencilBuffer){const _e=qe(w);ie&&ht(w)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,_e,s.DEPTH24_STENCIL8,w.width,w.height):ht(w)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,_e,s.DEPTH24_STENCIL8,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,w.width,w.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,I)}else{const _e=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let ge=0;ge<_e.length;ge++){const U=_e[ge],ce=r.convert(U.format,U.colorSpace),me=r.convert(U.type),ee=L(U.internalFormat,ce,me,U.colorSpace),Pe=qe(w);ie&&ht(w)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Pe,ee,w.width,w.height):ht(w)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Pe,ee,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,ee,w.width,w.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function jt(I,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,I),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),ue(w.depthTexture,0);const _e=n.get(w.depthTexture).__webglTexture,ge=qe(w);if(w.depthTexture.format===Xr)ht(w)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,_e,0,ge):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,_e,0);else if(w.depthTexture.format===Zs)ht(w)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,_e,0,ge):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,_e,0);else throw new Error("Unknown depthTexture format")}function Ue(I){const w=n.get(I),ie=I.isWebGLCubeRenderTarget===!0;if(I.depthTexture&&!w.__autoAllocateDepthBuffer){if(ie)throw new Error("target.depthTexture not supported in Cube render targets");jt(w.__webglFramebuffer,I)}else if(ie){w.__webglDepthbuffer=[];for(let _e=0;_e<6;_e++)t.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer[_e]),w.__webglDepthbuffer[_e]=s.createRenderbuffer(),j(w.__webglDepthbuffer[_e],I,!1)}else t.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer=s.createRenderbuffer(),j(w.__webglDepthbuffer,I,!1);t.bindFramebuffer(s.FRAMEBUFFER,null)}function je(I,w,ie){const _e=n.get(I);w!==void 0&&tt(_e.__webglFramebuffer,I,I.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D),ie!==void 0&&Ue(I)}function Fe(I){const w=I.texture,ie=n.get(I),_e=n.get(w);I.addEventListener("dispose",ne),I.isWebGLMultipleRenderTargets!==!0&&(_e.__webglTexture===void 0&&(_e.__webglTexture=s.createTexture()),_e.__version=w.version,a.memory.textures++);const ge=I.isWebGLCubeRenderTarget===!0,U=I.isWebGLMultipleRenderTargets===!0,ce=T(I)||o;if(ge){ie.__webglFramebuffer=[];for(let me=0;me<6;me++)ie.__webglFramebuffer[me]=s.createFramebuffer()}else{if(ie.__webglFramebuffer=s.createFramebuffer(),U)if(i.drawBuffers){const me=I.texture;for(let ee=0,Pe=me.length;ee<Pe;ee++){const De=n.get(me[ee]);De.__webglTexture===void 0&&(De.__webglTexture=s.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&I.samples>0&&ht(I)===!1){const me=U?w:[w];ie.__webglMultisampledFramebuffer=s.createFramebuffer(),ie.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,ie.__webglMultisampledFramebuffer);for(let ee=0;ee<me.length;ee++){const Pe=me[ee];ie.__webglColorRenderbuffer[ee]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,ie.__webglColorRenderbuffer[ee]);const De=r.convert(Pe.format,Pe.colorSpace),Ie=r.convert(Pe.type),Re=L(Pe.internalFormat,De,Ie,Pe.colorSpace,I.isXRRenderTarget===!0),Ee=qe(I);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ee,Re,I.width,I.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ee,s.RENDERBUFFER,ie.__webglColorRenderbuffer[ee])}s.bindRenderbuffer(s.RENDERBUFFER,null),I.depthBuffer&&(ie.__webglDepthRenderbuffer=s.createRenderbuffer(),j(ie.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ge){t.bindTexture(s.TEXTURE_CUBE_MAP,_e.__webglTexture),Ne(s.TEXTURE_CUBE_MAP,w,ce);for(let me=0;me<6;me++)tt(ie.__webglFramebuffer[me],I,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+me);A(w,ce)&&R(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(U){const me=I.texture;for(let ee=0,Pe=me.length;ee<Pe;ee++){const De=me[ee],Ie=n.get(De);t.bindTexture(s.TEXTURE_2D,Ie.__webglTexture),Ne(s.TEXTURE_2D,De,ce),tt(ie.__webglFramebuffer,I,De,s.COLOR_ATTACHMENT0+ee,s.TEXTURE_2D),A(De,ce)&&R(s.TEXTURE_2D)}t.unbindTexture()}else{let me=s.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(o?me=I.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(me,_e.__webglTexture),Ne(me,w,ce),tt(ie.__webglFramebuffer,I,w,s.COLOR_ATTACHMENT0,me),A(w,ce)&&R(me),t.unbindTexture()}I.depthBuffer&&Ue(I)}function yt(I){const w=T(I)||o,ie=I.isWebGLMultipleRenderTargets===!0?I.texture:[I.texture];for(let _e=0,ge=ie.length;_e<ge;_e++){const U=ie[_e];if(A(U,w)){const ce=I.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,me=n.get(U).__webglTexture;t.bindTexture(ce,me),R(ce),t.unbindTexture()}}}function $e(I){if(o&&I.samples>0&&ht(I)===!1){const w=I.isWebGLMultipleRenderTargets?I.texture:[I.texture],ie=I.width,_e=I.height;let ge=s.COLOR_BUFFER_BIT;const U=[],ce=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,me=n.get(I),ee=I.isWebGLMultipleRenderTargets===!0;if(ee)for(let Pe=0;Pe<w.length;Pe++)t.bindFramebuffer(s.FRAMEBUFFER,me.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Pe,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,me.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Pe,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,me.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,me.__webglFramebuffer);for(let Pe=0;Pe<w.length;Pe++){U.push(s.COLOR_ATTACHMENT0+Pe),I.depthBuffer&&U.push(ce);const De=me.__ignoreDepthValues!==void 0?me.__ignoreDepthValues:!1;if(De===!1&&(I.depthBuffer&&(ge|=s.DEPTH_BUFFER_BIT),I.stencilBuffer&&(ge|=s.STENCIL_BUFFER_BIT)),ee&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,me.__webglColorRenderbuffer[Pe]),De===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[ce]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[ce])),ee){const Ie=n.get(w[Pe]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Ie,0)}s.blitFramebuffer(0,0,ie,_e,0,0,ie,_e,ge,s.NEAREST),d&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,U)}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ee)for(let Pe=0;Pe<w.length;Pe++){t.bindFramebuffer(s.FRAMEBUFFER,me.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Pe,s.RENDERBUFFER,me.__webglColorRenderbuffer[Pe]);const De=n.get(w[Pe]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,me.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Pe,s.TEXTURE_2D,De,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,me.__webglMultisampledFramebuffer)}}function qe(I){return Math.min(h,I.samples)}function ht(I){const w=n.get(I);return o&&I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Xt(I){const w=a.render.frame;v.get(I)!==w&&(v.set(I,w),I.update())}function $t(I,w){const ie=I.colorSpace,_e=I.format,ge=I.type;return I.isCompressedTexture===!0||I.format===Zc||ie!==wi&&ie!==Yr&&(ie===We?o===!1?e.has("EXT_sRGB")===!0&&_e===ti?(I.format=Zc,I.minFilter=Dn,I.generateMipmaps=!1):w=Jp.sRGBToLinear(w):(_e!==ti||ge!==yr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",ie)),w}this.allocateTextureUnit=J,this.resetTextureUnits=$,this.setTexture2D=ue,this.setTexture2DArray=Te,this.setTexture3D=Z,this.setTextureCube=fe,this.rebindTextures=je,this.setupRenderTarget=Fe,this.updateRenderTargetMipmap=yt,this.updateMultisampleRenderTarget=$e,this.setupDepthRenderbuffer=Ue,this.setupFrameBufferTexture=tt,this.useMultisampledRTT=ht}function nT(s,e,t){const n=t.isWebGL2;function i(r,a=Yr){let o;if(r===yr)return s.UNSIGNED_BYTE;if(r===Hp)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Gp)return s.UNSIGNED_SHORT_5_5_5_1;if(r===Tx)return s.BYTE;if(r===Ax)return s.SHORT;if(r===Eu)return s.UNSIGNED_SHORT;if(r===zp)return s.INT;if(r===pr)return s.UNSIGNED_INT;if(r===ji)return s.FLOAT;if(r===ja)return n?s.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===wx)return s.ALPHA;if(r===ti)return s.RGBA;if(r===Rx)return s.LUMINANCE;if(r===Cx)return s.LUMINANCE_ALPHA;if(r===Xr)return s.DEPTH_COMPONENT;if(r===Zs)return s.DEPTH_STENCIL;if(r===Zc)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===Lx)return s.RED;if(r===Vp)return s.RED_INTEGER;if(r===Px)return s.RG;if(r===Wp)return s.RG_INTEGER;if(r===Xp)return s.RGBA_INTEGER;if(r===Ql||r===ec||r===tc||r===nc)if(a===We)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===Ql)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===ec)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===tc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===nc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===Ql)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===ec)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===tc)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===nc)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===gf||r===_f||r===vf||r===xf)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===gf)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===_f)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===vf)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===xf)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Dx)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===yf||r===Mf)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(r===yf)return a===We?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===Mf)return a===We?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===bf||r===Sf||r===Ef||r===Tf||r===Af||r===wf||r===Rf||r===Cf||r===Lf||r===Pf||r===Df||r===If||r===Uf||r===Nf)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(r===bf)return a===We?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Sf)return a===We?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Ef)return a===We?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Tf)return a===We?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Af)return a===We?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===wf)return a===We?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Rf)return a===We?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Cf)return a===We?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Lf)return a===We?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Pf)return a===We?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Df)return a===We?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===If)return a===We?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Uf)return a===We?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Nf)return a===We?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===ic)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(r===ic)return a===We?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(r===Ix||r===Of||r===Ff||r===kf)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(r===ic)return o.COMPRESSED_RED_RGTC1_EXT;if(r===Of)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Ff)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===kf)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Wr?n?s.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):s[r]!==void 0?s[r]:null}return{convert:i}}class iT extends Cn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class mr extends Wt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const rT={type:"move"};class Ac{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new mr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new mr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new mr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const g of e.hand.values()){const m=t.getJointPose(g,n),p=this._getHandJoint(c,g);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,v=.005;c.inputState.pinching&&f>d+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(rT)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new mr;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class sT extends xn{constructor(e,t,n,i,r,a,o,l,c,u){if(u=u!==void 0?u:Xr,u!==Xr&&u!==Zs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Xr&&(n=pr),n===void 0&&u===Zs&&(n=Wr),super(null,i,r,a,o,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:un,this.minFilter=l!==void 0?l:un,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class aT extends ns{constructor(e,t){super();const n=this;let i=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,f=null,d=null,v=null;const g=t.getContextAttributes();let m=null,p=null;const S=[],y=[];let T=null;const E=new Cn;E.layers.enable(1),E.viewport=new Lt;const A=new Cn;A.layers.enable(2),A.viewport=new Lt;const R=[E,A],L=new iT;L.layers.enable(1),L.layers.enable(2);let M=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getCamera=function(){},this.setUserCamera=function(Z){T=Z},this.getController=function(Z){let fe=S[Z];return fe===void 0&&(fe=new Ac,S[Z]=fe),fe.getTargetRaySpace()},this.getControllerGrip=function(Z){let fe=S[Z];return fe===void 0&&(fe=new Ac,S[Z]=fe),fe.getGripSpace()},this.getHand=function(Z){let fe=S[Z];return fe===void 0&&(fe=new Ac,S[Z]=fe),fe.getHandSpace()};function W(Z){const fe=y.indexOf(Z.inputSource);if(fe===-1)return;const le=S[fe];le!==void 0&&(le.update(Z.inputSource,Z.frame,c||a),le.dispatchEvent({type:Z.type,data:Z.inputSource}))}function ne(){i.removeEventListener("select",W),i.removeEventListener("selectstart",W),i.removeEventListener("selectend",W),i.removeEventListener("squeeze",W),i.removeEventListener("squeezestart",W),i.removeEventListener("squeezeend",W),i.removeEventListener("end",ne),i.removeEventListener("inputsourceschange",B);for(let Z=0;Z<S.length;Z++){const fe=y[Z];fe!==null&&(y[Z]=null,S[Z].disconnect(fe))}M=null,D=null,e.setRenderTarget(m),d=null,f=null,h=null,i=null,p=null,Te.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h},this.getFrame=function(){return v},this.getSession=function(){return i},this.setSession=async function(Z){if(i=Z,i!==null){if(m=e.getRenderTarget(),i.addEventListener("select",W),i.addEventListener("selectstart",W),i.addEventListener("selectend",W),i.addEventListener("squeeze",W),i.addEventListener("squeezestart",W),i.addEventListener("squeezeend",W),i.addEventListener("end",ne),i.addEventListener("inputsourceschange",B),g.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const fe={antialias:i.renderState.layers===void 0?g.antialias:!0,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(i,t,fe),i.updateRenderState({baseLayer:d}),p=new Jr(d.framebufferWidth,d.framebufferHeight,{format:ti,type:yr,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let fe=null,le=null,ye=null;g.depth&&(ye=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,fe=g.stencil?Zs:Xr,le=g.stencil?Wr:pr);const Ae={colorFormat:t.RGBA8,depthFormat:ye,scaleFactor:r};h=new XRWebGLBinding(i,t),f=h.createProjectionLayer(Ae),i.updateRenderState({layers:[f]}),p=new Jr(f.textureWidth,f.textureHeight,{format:ti,type:yr,depthTexture:new sT(f.textureWidth,f.textureHeight,le,void 0,void 0,void 0,void 0,void 0,void 0,fe),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0});const Ne=e.properties.get(p);Ne.__ignoreDepthValues=f.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),Te.setContext(i),Te.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function B(Z){for(let fe=0;fe<Z.removed.length;fe++){const le=Z.removed[fe],ye=y.indexOf(le);ye>=0&&(y[ye]=null,S[ye].disconnect(le))}for(let fe=0;fe<Z.added.length;fe++){const le=Z.added[fe];let ye=y.indexOf(le);if(ye===-1){for(let Ne=0;Ne<S.length;Ne++)if(Ne>=y.length){y.push(le),ye=Ne;break}else if(y[Ne]===null){y[Ne]=le,ye=Ne;break}if(ye===-1)break}const Ae=S[ye];Ae&&Ae.connect(le)}}const O=new G,H=new G;function te(Z,fe,le){O.setFromMatrixPosition(fe.matrixWorld),H.setFromMatrixPosition(le.matrixWorld);const ye=O.distanceTo(H),Ae=fe.projectionMatrix.elements,Ne=le.projectionMatrix.elements,Ze=Ae[14]/(Ae[10]-1),Be=Ae[14]/(Ae[10]+1),kt=(Ae[9]+1)/Ae[5],tt=(Ae[9]-1)/Ae[5],j=(Ae[8]-1)/Ae[0],jt=(Ne[8]+1)/Ne[0],Ue=Ze*j,je=Ze*jt,Fe=ye/(-j+jt),yt=Fe*-j;fe.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(yt),Z.translateZ(Fe),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert();const $e=Ze+Fe,qe=Be+Fe,ht=Ue-yt,Xt=je+(ye-yt),$t=kt*Be/qe*$e,I=tt*Be/qe*$e;Z.projectionMatrix.makePerspective(ht,Xt,$t,I,$e,qe),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}function $(Z,fe){fe===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(fe.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCameraXR=function(Z){if(i===null)return Z;T&&(Z=T),L.near=A.near=E.near=Z.near,L.far=A.far=E.far=Z.far,(M!==L.near||D!==L.far)&&(i.updateRenderState({depthNear:L.near,depthFar:L.far}),M=L.near,D=L.far);const fe=Z.parent,le=L.cameras;$(L,fe);for(let ye=0;ye<le.length;ye++)$(le[ye],fe);return le.length===2?te(L,E,A):L.projectionMatrix.copy(E.projectionMatrix),T&&J(L,fe),L};function J(Z,fe){const le=T;fe===null?le.matrix.copy(Z.matrixWorld):(le.matrix.copy(fe.matrixWorld),le.matrix.invert(),le.matrix.multiply(Z.matrixWorld)),le.matrix.decompose(le.position,le.quaternion,le.scale),le.updateMatrixWorld(!0);const ye=le.children;for(let Ae=0,Ne=ye.length;Ae<Ne;Ae++)ye[Ae].updateMatrixWorld(!0);le.projectionMatrix.copy(Z.projectionMatrix),le.projectionMatrixInverse.copy(Z.projectionMatrixInverse),le.isPerspectiveCamera&&(le.fov=Qs*2*Math.atan(1/le.projectionMatrix.elements[5]),le.zoom=1)}this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(Z){l=Z,f!==null&&(f.fixedFoveation=Z),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Z)};let oe=null;function ue(Z,fe){if(u=fe.getViewerPose(c||a),v=fe,u!==null){const le=u.views;d!==null&&(e.setRenderTargetFramebuffer(p,d.framebuffer),e.setRenderTarget(p));let ye=!1;le.length!==L.cameras.length&&(L.cameras.length=0,ye=!0);for(let Ae=0;Ae<le.length;Ae++){const Ne=le[Ae];let Ze=null;if(d!==null)Ze=d.getViewport(Ne);else{const kt=h.getViewSubImage(f,Ne);Ze=kt.viewport,Ae===0&&(e.setRenderTargetTextures(p,kt.colorTexture,f.ignoreDepthValues?void 0:kt.depthStencilTexture),e.setRenderTarget(p))}let Be=R[Ae];Be===void 0&&(Be=new Cn,Be.layers.enable(Ae),Be.viewport=new Lt,R[Ae]=Be),Be.matrix.fromArray(Ne.transform.matrix),Be.matrix.decompose(Be.position,Be.quaternion,Be.scale),Be.projectionMatrix.fromArray(Ne.projectionMatrix),Be.projectionMatrixInverse.copy(Be.projectionMatrix).invert(),Be.viewport.set(Ze.x,Ze.y,Ze.width,Ze.height),Ae===0&&(L.matrix.copy(Be.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale)),ye===!0&&L.cameras.push(Be)}}for(let le=0;le<S.length;le++){const ye=y[le],Ae=S[le];ye!==null&&Ae!==void 0&&Ae.update(ye,fe,c||a)}oe&&oe(Z,fe),fe.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:fe}),v=null}const Te=new am;Te.setAnimationLoop(ue),this.setAnimationLoop=function(Z){oe=Z},this.dispose=function(){}}}function oT(s,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,rm(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,S,y,T){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),h(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,T)):p.isMeshMatcapMaterial?(r(m,p),v(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),g(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,S,y):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Un&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Un&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const S=e.get(p).envMap;if(S&&(m.envMap.value=S,m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;const y=s.useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*y,t(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,S,y){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*S,m.scale.value=y*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),e.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,S){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Un&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,p){p.matcap&&(m.matcap.value=p.matcap)}function g(m,p){const S=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function lT(s,e,t,n){let i={},r={},a=[];const o=t.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(S,y){const T=y.program;n.uniformBlockBinding(S,T)}function c(S,y){let T=i[S.id];T===void 0&&(v(S),T=u(S),i[S.id]=T,S.addEventListener("dispose",m));const E=y.program;n.updateUBOMapping(S,E);const A=e.render.frame;r[S.id]!==A&&(f(S),r[S.id]=A)}function u(S){const y=h();S.__bindingPointIndex=y;const T=s.createBuffer(),E=S.__size,A=S.usage;return s.bindBuffer(s.UNIFORM_BUFFER,T),s.bufferData(s.UNIFORM_BUFFER,E,A),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,y,T),T}function h(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(S){const y=i[S.id],T=S.uniforms,E=S.__cache;s.bindBuffer(s.UNIFORM_BUFFER,y);for(let A=0,R=T.length;A<R;A++){const L=T[A];if(d(L,A,E)===!0){const M=L.__offset,D=Array.isArray(L.value)?L.value:[L.value];let W=0;for(let ne=0;ne<D.length;ne++){const B=D[ne],O=g(B);typeof B=="number"?(L.__data[0]=B,s.bufferSubData(s.UNIFORM_BUFFER,M+W,L.__data)):B.isMatrix3?(L.__data[0]=B.elements[0],L.__data[1]=B.elements[1],L.__data[2]=B.elements[2],L.__data[3]=B.elements[0],L.__data[4]=B.elements[3],L.__data[5]=B.elements[4],L.__data[6]=B.elements[5],L.__data[7]=B.elements[0],L.__data[8]=B.elements[6],L.__data[9]=B.elements[7],L.__data[10]=B.elements[8],L.__data[11]=B.elements[0]):(B.toArray(L.__data,W),W+=O.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,M,L.__data)}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function d(S,y,T){const E=S.value;if(T[y]===void 0){if(typeof E=="number")T[y]=E;else{const A=Array.isArray(E)?E:[E],R=[];for(let L=0;L<A.length;L++)R.push(A[L].clone());T[y]=R}return!0}else if(typeof E=="number"){if(T[y]!==E)return T[y]=E,!0}else{const A=Array.isArray(T[y])?T[y]:[T[y]],R=Array.isArray(E)?E:[E];for(let L=0;L<A.length;L++){const M=A[L];if(M.equals(R[L])===!1)return M.copy(R[L]),!0}}return!1}function v(S){const y=S.uniforms;let T=0;const E=16;let A=0;for(let R=0,L=y.length;R<L;R++){const M=y[R],D={boundary:0,storage:0},W=Array.isArray(M.value)?M.value:[M.value];for(let ne=0,B=W.length;ne<B;ne++){const O=W[ne],H=g(O);D.boundary+=H.boundary,D.storage+=H.storage}if(M.__data=new Float32Array(D.storage/Float32Array.BYTES_PER_ELEMENT),M.__offset=T,R>0){A=T%E;const ne=E-A;A!==0&&ne-D.boundary<0&&(T+=E-A,M.__offset=T)}T+=D.storage}return A=T%E,A>0&&(T+=E-A),S.__size=T,S.__cache={},this}function g(S){const y={boundary:0,storage:0};return typeof S=="number"?(y.boundary=4,y.storage=4):S.isVector2?(y.boundary=8,y.storage=8):S.isVector3||S.isColor?(y.boundary=16,y.storage=12):S.isVector4?(y.boundary=16,y.storage=16):S.isMatrix3?(y.boundary=48,y.storage=48):S.isMatrix4?(y.boundary=64,y.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),y}function m(S){const y=S.target;y.removeEventListener("dispose",m);const T=a.indexOf(y.__bindingPointIndex);a.splice(T,1),s.deleteBuffer(i[y.id]),delete i[y.id],delete r[y.id]}function p(){for(const S in i)s.deleteBuffer(i[S]);a=[],i={},r={}}return{bind:l,update:c,dispose:p}}function cT(){const s=Ka("canvas");return s.style.display="block",s}class eu{constructor(e={}){const{canvas:t=cT(),context:n=null,depth:i=!0,stencil:r=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let f;n!==null?f=n.getContextAttributes().alpha:f=a;const d=new Uint32Array(4),v=new Int32Array(4);let g=null,m=null;const p=[],S=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=We,this.useLegacyLights=!0,this.toneMapping=Zi,this.toneMappingExposure=1;const y=this;let T=!1,E=0,A=0,R=null,L=-1,M=null;const D=new Lt,W=new Lt;let ne=null;const B=new et(0);let O=0,H=t.width,te=t.height,$=1,J=null,oe=null;const ue=new Lt(0,0,H,te),Te=new Lt(0,0,H,te);let Z=!1;const fe=new Ru;let le=!1,ye=!1,Ae=null;const Ne=new ot,Ze=new Xe,Be=new G,kt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function tt(){return R===null?$:1}let j=n;function jt(C,K){for(let re=0;re<C.length;re++){const q=C[re],se=t.getContext(q,K);if(se!==null)return se}return null}try{const C={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Su}`),t.addEventListener("webglcontextlost",Me,!1),t.addEventListener("webglcontextrestored",Q,!1),t.addEventListener("webglcontextcreationerror",ve,!1),j===null){const K=["webgl2","webgl","experimental-webgl"];if(y.isWebGL1Renderer===!0&&K.shift(),j=jt(K,C),j===null)throw jt(K)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}j instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),j.getShaderPrecisionFormat===void 0&&(j.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let Ue,je,Fe,yt,$e,qe,ht,Xt,$t,I,w,ie,_e,ge,U,ce,me,ee,Pe,De,Ie,Re,Ee,ze;function Mt(){Ue=new yS(j),je=new pS(j,Ue,e),Ue.init(je),Re=new nT(j,Ue,je),Fe=new eT(j,Ue,je),yt=new SS(j),$e=new zE,qe=new tT(j,Ue,Fe,$e,je,Re,yt),ht=new gS(y),Xt=new xS(y),$t=new Ny(j,je),Ee=new fS(j,Ue,$t,je),I=new MS(j,$t,yt,Ee),w=new wS(j,I,$t,yt),Pe=new AS(j,je,qe),ce=new mS($e),ie=new BE(y,ht,Xt,Ue,je,Ee,ce),_e=new oT(y,$e),ge=new GE,U=new jE(Ue,je),ee=new hS(y,ht,Xt,Fe,w,f,l),me=new QE(y,w,je),ze=new lT(j,yt,je,Fe),De=new dS(j,Ue,yt,je),Ie=new bS(j,Ue,yt,je),yt.programs=ie.programs,y.capabilities=je,y.extensions=Ue,y.properties=$e,y.renderLists=ge,y.shadowMap=me,y.state=Fe,y.info=yt}Mt();const z=new aT(y,j);this.xr=z,this.getContext=function(){return j},this.getContextAttributes=function(){return j.getContextAttributes()},this.forceContextLoss=function(){const C=Ue.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=Ue.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(C){C!==void 0&&($=C,this.setSize(H,te,!1))},this.getSize=function(C){return C.set(H,te)},this.setSize=function(C,K,re=!0){if(z.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=C,te=K,t.width=Math.floor(C*$),t.height=Math.floor(K*$),re===!0&&(t.style.width=C+"px",t.style.height=K+"px"),this.setViewport(0,0,C,K)},this.getDrawingBufferSize=function(C){return C.set(H*$,te*$).floor()},this.setDrawingBufferSize=function(C,K,re){H=C,te=K,$=re,t.width=Math.floor(C*re),t.height=Math.floor(K*re),this.setViewport(0,0,C,K)},this.getCurrentViewport=function(C){return C.copy(D)},this.getViewport=function(C){return C.copy(ue)},this.setViewport=function(C,K,re,q){C.isVector4?ue.set(C.x,C.y,C.z,C.w):ue.set(C,K,re,q),Fe.viewport(D.copy(ue).multiplyScalar($).floor())},this.getScissor=function(C){return C.copy(Te)},this.setScissor=function(C,K,re,q){C.isVector4?Te.set(C.x,C.y,C.z,C.w):Te.set(C,K,re,q),Fe.scissor(W.copy(Te).multiplyScalar($).floor())},this.getScissorTest=function(){return Z},this.setScissorTest=function(C){Fe.setScissorTest(Z=C)},this.setOpaqueSort=function(C){J=C},this.setTransparentSort=function(C){oe=C},this.getClearColor=function(C){return C.copy(ee.getClearColor())},this.setClearColor=function(){ee.setClearColor.apply(ee,arguments)},this.getClearAlpha=function(){return ee.getClearAlpha()},this.setClearAlpha=function(){ee.setClearAlpha.apply(ee,arguments)},this.clear=function(C=!0,K=!0,re=!0){let q=0;if(C){let se=!1;if(R!==null){const Ce=R.texture.format;se=Ce===Xp||Ce===Wp||Ce===Vp}if(se){const Ce=R.texture.type,Oe=Ce===yr||Ce===pr||Ce===Eu||Ce===Wr||Ce===Hp||Ce===Gp,He=ee.getClearColor(),Ve=ee.getClearAlpha(),Qe=He.r,Ye=He.g,Ke=He.b,Tt=$e.get(R).__webglFramebuffer;Oe?(d[0]=Qe,d[1]=Ye,d[2]=Ke,d[3]=Ve,j.clearBufferuiv(j.COLOR,Tt,d)):(v[0]=Qe,v[1]=Ye,v[2]=Ke,v[3]=Ve,j.clearBufferiv(j.COLOR,Tt,v))}else q|=j.COLOR_BUFFER_BIT}K&&(q|=j.DEPTH_BUFFER_BIT),re&&(q|=j.STENCIL_BUFFER_BIT),j.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Me,!1),t.removeEventListener("webglcontextrestored",Q,!1),t.removeEventListener("webglcontextcreationerror",ve,!1),ge.dispose(),U.dispose(),$e.dispose(),ht.dispose(),Xt.dispose(),w.dispose(),Ee.dispose(),ze.dispose(),ie.dispose(),z.dispose(),z.removeEventListener("sessionstart",Ut),z.removeEventListener("sessionend",$n),Ae&&(Ae.dispose(),Ae=null),fn.stop()};function Me(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function Q(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const C=yt.autoReset,K=me.enabled,re=me.autoUpdate,q=me.needsUpdate,se=me.type;Mt(),yt.autoReset=C,me.enabled=K,me.autoUpdate=re,me.needsUpdate=q,me.type=se}function ve(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function be(C){const K=C.target;K.removeEventListener("dispose",be),ft(K)}function ft(C){It(C),$e.remove(C)}function It(C){const K=$e.get(C).programs;K!==void 0&&(K.forEach(function(re){ie.releaseProgram(re)}),C.isShaderMaterial&&ie.releaseShaderCache(C))}this.renderBufferDirect=function(C,K,re,q,se,Ce){K===null&&(K=kt);const Oe=se.isMesh&&se.matrixWorld.determinant()<0,He=Tl(C,K,re,q,se);Fe.setMaterial(q,Oe);let Ve=re.index,Qe=1;q.wireframe===!0&&(Ve=I.getWireframeAttribute(re),Qe=2);const Ye=re.drawRange,Ke=re.attributes.position;let Tt=Ye.start*Qe,Bt=(Ye.start+Ye.count)*Qe;Ce!==null&&(Tt=Math.max(Tt,Ce.start*Qe),Bt=Math.min(Bt,(Ce.start+Ce.count)*Qe)),Ve!==null?(Tt=Math.max(Tt,0),Bt=Math.min(Bt,Ve.count)):Ke!=null&&(Tt=Math.max(Tt,0),Bt=Math.min(Bt,Ke.count));const Bn=Bt-Tt;if(Bn<0||Bn===1/0)return;Ee.setup(se,q,He,re,Ve);let ai,Nt=De;if(Ve!==null&&(ai=$t.get(Ve),Nt=Ie,Nt.setIndex(ai)),se.isMesh)q.wireframe===!0?(Fe.setLineWidth(q.wireframeLinewidth*tt()),Nt.setMode(j.LINES)):Nt.setMode(j.TRIANGLES);else if(se.isLine){let Je=q.linewidth;Je===void 0&&(Je=1),Fe.setLineWidth(Je*tt()),se.isLineSegments?Nt.setMode(j.LINES):se.isLineLoop?Nt.setMode(j.LINE_LOOP):Nt.setMode(j.LINE_STRIP)}else se.isPoints?Nt.setMode(j.POINTS):se.isSprite&&Nt.setMode(j.TRIANGLES);if(se.isInstancedMesh)Nt.renderInstances(Tt,Bn,se.count);else if(re.isInstancedBufferGeometry){const Je=re._maxInstanceCount!==void 0?re._maxInstanceCount:1/0,wr=Math.min(re.instanceCount,Je);Nt.renderInstances(Tt,Bn,wr)}else Nt.render(Tt,Bn)},this.compile=function(C,K){function re(q,se,Ce){q.transparent===!0&&q.side===bi&&q.forceSinglePass===!1?(q.side=Un,q.needsUpdate=!0,as(q,se,Ce),q.side=Qi,q.needsUpdate=!0,as(q,se,Ce),q.side=bi):as(q,se,Ce)}m=U.get(C),m.init(),S.push(m),C.traverseVisible(function(q){q.isLight&&q.layers.test(K.layers)&&(m.pushLight(q),q.castShadow&&m.pushShadow(q))}),m.setupLights(y.useLegacyLights),C.traverse(function(q){const se=q.material;if(se)if(Array.isArray(se))for(let Ce=0;Ce<se.length;Ce++){const Oe=se[Ce];re(Oe,C,q)}else re(se,C,q)}),S.pop(),m=null};let qt=null;function Ii(C){qt&&qt(C)}function Ut(){fn.stop()}function $n(){fn.start()}const fn=new am;fn.setAnimationLoop(Ii),typeof self<"u"&&fn.setContext(self),this.setAnimationLoop=function(C){qt=C,z.setAnimationLoop(C),C===null?fn.stop():fn.start()},z.addEventListener("sessionstart",Ut),z.addEventListener("sessionend",$n),this.render=function(C,K){if(K!==void 0&&K.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),K.parent===null&&K.matrixWorldAutoUpdate===!0&&K.updateMatrixWorld(),z.enabled===!0&&z.isPresenting===!0&&(K=z.updateCameraXR(K)),C.isScene===!0&&C.onBeforeRender(y,C,K,R),m=U.get(C,S.length),m.init(),S.push(m),Ne.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),fe.setFromProjectionMatrix(Ne),ye=this.localClippingEnabled,le=ce.init(this.clippingPlanes,ye),g=ge.get(C,p.length),g.init(),p.push(g),uo(C,K,0,y.sortObjects),g.finish(),y.sortObjects===!0&&g.sort(J,oe),le===!0&&ce.beginShadows();const re=m.state.shadowsArray;if(me.render(re,C,K),le===!0&&ce.endShadows(),this.info.autoReset===!0&&this.info.reset(),this.info.render.frame++,ee.render(g,C),m.setupLights(y.useLegacyLights),K.isArrayCamera){const q=K.cameras;for(let se=0,Ce=q.length;se<Ce;se++){const Oe=q[se];ga(g,C,Oe,Oe.viewport)}}else ga(g,C,K);R!==null&&(qe.updateMultisampleRenderTarget(R),qe.updateRenderTargetMipmap(R)),C.isScene===!0&&C.onAfterRender(y,C,K),Ee.resetDefaultState(),L=-1,M=null,S.pop(),S.length>0?m=S[S.length-1]:m=null,p.pop(),p.length>0?g=p[p.length-1]:g=null};function uo(C,K,re,q){if(C.visible===!1)return;if(C.layers.test(K.layers)){if(C.isGroup)re=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(K);else if(C.isLight)m.pushLight(C),C.castShadow&&m.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||fe.intersectsSprite(C)){q&&Be.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Ne);const Oe=w.update(C),He=C.material;He.visible&&g.push(C,Oe,He,re,Be.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||fe.intersectsObject(C))){C.isSkinnedMesh&&C.skeleton.frame!==yt.render.frame&&(C.skeleton.update(),C.skeleton.frame=yt.render.frame);const Oe=w.update(C),He=C.material;if(q&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Be.copy(C.boundingSphere.center)):(Oe.boundingSphere===null&&Oe.computeBoundingSphere(),Be.copy(Oe.boundingSphere.center)),Be.applyMatrix4(C.matrixWorld).applyMatrix4(Ne)),Array.isArray(He)){const Ve=Oe.groups;for(let Qe=0,Ye=Ve.length;Qe<Ye;Qe++){const Ke=Ve[Qe],Tt=He[Ke.materialIndex];Tt&&Tt.visible&&g.push(C,Oe,Tt,re,Be.z,Ke)}}else He.visible&&g.push(C,Oe,He,re,Be.z,null)}}const Ce=C.children;for(let Oe=0,He=Ce.length;Oe<He;Oe++)uo(Ce[Oe],K,re,q)}function ga(C,K,re,q){const se=C.opaque,Ce=C.transmissive,Oe=C.transparent;m.setupLightsView(re),le===!0&&ce.setGlobalState(y.clippingPlanes,re),Ce.length>0&&ho(se,Ce,K,re),q&&Fe.viewport(D.copy(q)),se.length>0&&ss(se,K,re),Ce.length>0&&ss(Ce,K,re),Oe.length>0&&ss(Oe,K,re),Fe.buffers.depth.setTest(!0),Fe.buffers.depth.setMask(!0),Fe.buffers.color.setMask(!0),Fe.setPolygonOffset(!1)}function ho(C,K,re,q){const se=je.isWebGL2;Ae===null&&(Ae=new Jr(1,1,{generateMipmaps:!0,type:Ue.has("EXT_color_buffer_half_float")?ja:yr,minFilter:Zr,samples:se&&o===!0?4:0})),y.getDrawingBufferSize(Ze),se?Ae.setSize(Ze.x,Ze.y):Ae.setSize(al(Ze.x),al(Ze.y));const Ce=y.getRenderTarget();y.setRenderTarget(Ae),y.getClearColor(B),O=y.getClearAlpha(),O<1&&y.setClearColor(16777215,.5),y.clear();const Oe=y.toneMapping;y.toneMapping=Zi,ss(C,re,q),qe.updateMultisampleRenderTarget(Ae),qe.updateRenderTargetMipmap(Ae);let He=!1;for(let Ve=0,Qe=K.length;Ve<Qe;Ve++){const Ye=K[Ve],Ke=Ye.object,Tt=Ye.geometry,Bt=Ye.material,Bn=Ye.group;if(Bt.side===bi&&Ke.layers.test(q.layers)){const ai=Bt.side;Bt.side=Un,Bt.needsUpdate=!0,fo(Ke,re,q,Tt,Bt,Bn),Bt.side=ai,Bt.needsUpdate=!0,He=!0}}He===!0&&(qe.updateMultisampleRenderTarget(Ae),qe.updateRenderTargetMipmap(Ae)),y.setRenderTarget(Ce),y.setClearColor(B,O),y.toneMapping=Oe}function ss(C,K,re){const q=K.isScene===!0?K.overrideMaterial:null;for(let se=0,Ce=C.length;se<Ce;se++){const Oe=C[se],He=Oe.object,Ve=Oe.geometry,Qe=q===null?Oe.material:q,Ye=Oe.group;He.layers.test(re.layers)&&fo(He,K,re,Ve,Qe,Ye)}}function fo(C,K,re,q,se,Ce){C.onBeforeRender(y,K,re,q,se,Ce),C.modelViewMatrix.multiplyMatrices(re.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),se.onBeforeRender(y,K,re,q,C,Ce),se.transparent===!0&&se.side===bi&&se.forceSinglePass===!1?(se.side=Un,se.needsUpdate=!0,y.renderBufferDirect(re,K,q,se,C,Ce),se.side=Qi,se.needsUpdate=!0,y.renderBufferDirect(re,K,q,se,C,Ce),se.side=bi):y.renderBufferDirect(re,K,q,se,C,Ce),C.onAfterRender(y,K,re,q,se,Ce)}function as(C,K,re){K.isScene!==!0&&(K=kt);const q=$e.get(C),se=m.state.lights,Ce=m.state.shadowsArray,Oe=se.state.version,He=ie.getParameters(C,se.state,Ce,K,re),Ve=ie.getProgramCacheKey(He);let Qe=q.programs;q.environment=C.isMeshStandardMaterial?K.environment:null,q.fog=K.fog,q.envMap=(C.isMeshStandardMaterial?Xt:ht).get(C.envMap||q.environment),Qe===void 0&&(C.addEventListener("dispose",be),Qe=new Map,q.programs=Qe);let Ye=Qe.get(Ve);if(Ye!==void 0){if(q.currentProgram===Ye&&q.lightsStateVersion===Oe)return Ar(C,He),Ye}else He.uniforms=ie.getUniforms(C),C.onBuild(re,He,y),C.onBeforeCompile(He,y),Ye=ie.acquireProgram(He,Ve),Qe.set(Ve,Ye),q.uniforms=He.uniforms;const Ke=q.uniforms;(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Ke.clippingPlanes=ce.uniform),Ar(C,He),q.needsLights=Al(C),q.lightsStateVersion=Oe,q.needsLights&&(Ke.ambientLightColor.value=se.state.ambient,Ke.lightProbe.value=se.state.probe,Ke.directionalLights.value=se.state.directional,Ke.directionalLightShadows.value=se.state.directionalShadow,Ke.spotLights.value=se.state.spot,Ke.spotLightShadows.value=se.state.spotShadow,Ke.rectAreaLights.value=se.state.rectArea,Ke.ltc_1.value=se.state.rectAreaLTC1,Ke.ltc_2.value=se.state.rectAreaLTC2,Ke.pointLights.value=se.state.point,Ke.pointLightShadows.value=se.state.pointShadow,Ke.hemisphereLights.value=se.state.hemi,Ke.directionalShadowMap.value=se.state.directionalShadowMap,Ke.directionalShadowMatrix.value=se.state.directionalShadowMatrix,Ke.spotShadowMap.value=se.state.spotShadowMap,Ke.spotLightMatrix.value=se.state.spotLightMatrix,Ke.spotLightMap.value=se.state.spotLightMap,Ke.pointShadowMap.value=se.state.pointShadowMap,Ke.pointShadowMatrix.value=se.state.pointShadowMatrix);const Tt=Ye.getUniforms(),Bt=Jo.seqWithValue(Tt.seq,Ke);return q.currentProgram=Ye,q.uniformsList=Bt,Ye}function Ar(C,K){const re=$e.get(C);re.outputColorSpace=K.outputColorSpace,re.instancing=K.instancing,re.skinning=K.skinning,re.morphTargets=K.morphTargets,re.morphNormals=K.morphNormals,re.morphColors=K.morphColors,re.morphTargetsCount=K.morphTargetsCount,re.numClippingPlanes=K.numClippingPlanes,re.numIntersection=K.numClipIntersection,re.vertexAlphas=K.vertexAlphas,re.vertexTangents=K.vertexTangents,re.toneMapping=K.toneMapping}function Tl(C,K,re,q,se){K.isScene!==!0&&(K=kt),qe.resetTextureUnits();const Ce=K.fog,Oe=q.isMeshStandardMaterial?K.environment:null,He=R===null?y.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:wi,Ve=(q.isMeshStandardMaterial?Xt:ht).get(q.envMap||Oe),Qe=q.vertexColors===!0&&!!re.attributes.color&&re.attributes.color.itemSize===4,Ye=!!re.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Ke=!!re.morphAttributes.position,Tt=!!re.morphAttributes.normal,Bt=!!re.morphAttributes.color,Bn=q.toneMapped?y.toneMapping:Zi,ai=re.morphAttributes.position||re.morphAttributes.normal||re.morphAttributes.color,Nt=ai!==void 0?ai.length:0,Je=$e.get(q),wr=m.state.lights;if(le===!0&&(ye===!0||C!==M)){const Tn=C===M&&q.id===L;ce.setState(q,C,Tn)}let Dt=!1;q.version===Je.__version?(Je.needsLights&&Je.lightsStateVersion!==wr.state.version||Je.outputColorSpace!==He||se.isInstancedMesh&&Je.instancing===!1||!se.isInstancedMesh&&Je.instancing===!0||se.isSkinnedMesh&&Je.skinning===!1||!se.isSkinnedMesh&&Je.skinning===!0||Je.envMap!==Ve||q.fog===!0&&Je.fog!==Ce||Je.numClippingPlanes!==void 0&&(Je.numClippingPlanes!==ce.numPlanes||Je.numIntersection!==ce.numIntersection)||Je.vertexAlphas!==Qe||Je.vertexTangents!==Ye||Je.morphTargets!==Ke||Je.morphNormals!==Tt||Je.morphColors!==Bt||Je.toneMapping!==Bn||je.isWebGL2===!0&&Je.morphTargetsCount!==Nt)&&(Dt=!0):(Dt=!0,Je.__version=q.version);let Ui=Je.currentProgram;Dt===!0&&(Ui=as(q,K,se));let mo=!1,Rr=!1,_a=!1;const dn=Ui.getUniforms(),yi=Je.uniforms;if(Fe.useProgram(Ui.program)&&(mo=!0,Rr=!0,_a=!0),q.id!==L&&(L=q.id,Rr=!0),mo||M!==C){if(dn.setValue(j,"projectionMatrix",C.projectionMatrix),je.logarithmicDepthBuffer&&dn.setValue(j,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),M!==C&&(M=C,Rr=!0,_a=!0),q.isShaderMaterial||q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshStandardMaterial||q.envMap){const Tn=dn.map.cameraPosition;Tn!==void 0&&Tn.setValue(j,Be.setFromMatrixPosition(C.matrixWorld))}(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&dn.setValue(j,"isOrthographic",C.isOrthographicCamera===!0),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial||q.isShadowMaterial||se.isSkinnedMesh)&&dn.setValue(j,"viewMatrix",C.matrixWorldInverse)}if(se.isSkinnedMesh){dn.setOptional(j,se,"bindMatrix"),dn.setOptional(j,se,"bindMatrixInverse");const Tn=se.skeleton;Tn&&(je.floatVertexTextures?(Tn.boneTexture===null&&Tn.computeBoneTexture(),dn.setValue(j,"boneTexture",Tn.boneTexture,qe),dn.setValue(j,"boneTextureSize",Tn.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const os=re.morphAttributes;if((os.position!==void 0||os.normal!==void 0||os.color!==void 0&&je.isWebGL2===!0)&&Pe.update(se,re,Ui),(Rr||Je.receiveShadow!==se.receiveShadow)&&(Je.receiveShadow=se.receiveShadow,dn.setValue(j,"receiveShadow",se.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(yi.envMap.value=Ve,yi.flipEnvMap.value=Ve.isCubeTexture&&Ve.isRenderTargetTexture===!1?-1:1),Rr&&(dn.setValue(j,"toneMappingExposure",y.toneMappingExposure),Je.needsLights&&po(yi,_a),Ce&&q.fog===!0&&_e.refreshFogUniforms(yi,Ce),_e.refreshMaterialUniforms(yi,q,$,te,Ae),Jo.upload(j,Je.uniformsList,yi,qe)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(Jo.upload(j,Je.uniformsList,yi,qe),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&dn.setValue(j,"center",se.center),dn.setValue(j,"modelViewMatrix",se.modelViewMatrix),dn.setValue(j,"normalMatrix",se.normalMatrix),dn.setValue(j,"modelMatrix",se.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){const Tn=q.uniformsGroups;for(let va=0,wl=Tn.length;va<wl;va++)if(je.isWebGL2){const go=Tn[va];ze.update(go,Ui),ze.bind(go,Ui)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Ui}function po(C,K){C.ambientLightColor.needsUpdate=K,C.lightProbe.needsUpdate=K,C.directionalLights.needsUpdate=K,C.directionalLightShadows.needsUpdate=K,C.pointLights.needsUpdate=K,C.pointLightShadows.needsUpdate=K,C.spotLights.needsUpdate=K,C.spotLightShadows.needsUpdate=K,C.rectAreaLights.needsUpdate=K,C.hemisphereLights.needsUpdate=K}function Al(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(C,K,re){$e.get(C.texture).__webglTexture=K,$e.get(C.depthTexture).__webglTexture=re;const q=$e.get(C);q.__hasExternalTextures=!0,q.__hasExternalTextures&&(q.__autoAllocateDepthBuffer=re===void 0,q.__autoAllocateDepthBuffer||Ue.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),q.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(C,K){const re=$e.get(C);re.__webglFramebuffer=K,re.__useDefaultFramebuffer=K===void 0},this.setRenderTarget=function(C,K=0,re=0){R=C,E=K,A=re;let q=!0,se=null,Ce=!1,Oe=!1;if(C){const Ve=$e.get(C);Ve.__useDefaultFramebuffer!==void 0?(Fe.bindFramebuffer(j.FRAMEBUFFER,null),q=!1):Ve.__webglFramebuffer===void 0?qe.setupRenderTarget(C):Ve.__hasExternalTextures&&qe.rebindTextures(C,$e.get(C.texture).__webglTexture,$e.get(C.depthTexture).__webglTexture);const Qe=C.texture;(Qe.isData3DTexture||Qe.isDataArrayTexture||Qe.isCompressedArrayTexture)&&(Oe=!0);const Ye=$e.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(se=Ye[K],Ce=!0):je.isWebGL2&&C.samples>0&&qe.useMultisampledRTT(C)===!1?se=$e.get(C).__webglMultisampledFramebuffer:se=Ye,D.copy(C.viewport),W.copy(C.scissor),ne=C.scissorTest}else D.copy(ue).multiplyScalar($).floor(),W.copy(Te).multiplyScalar($).floor(),ne=Z;if(Fe.bindFramebuffer(j.FRAMEBUFFER,se)&&je.drawBuffers&&q&&Fe.drawBuffers(C,se),Fe.viewport(D),Fe.scissor(W),Fe.setScissorTest(ne),Ce){const Ve=$e.get(C.texture);j.framebufferTexture2D(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_CUBE_MAP_POSITIVE_X+K,Ve.__webglTexture,re)}else if(Oe){const Ve=$e.get(C.texture),Qe=K||0;j.framebufferTextureLayer(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,Ve.__webglTexture,re||0,Qe)}L=-1},this.readRenderTargetPixels=function(C,K,re,q,se,Ce,Oe){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let He=$e.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Oe!==void 0&&(He=He[Oe]),He){Fe.bindFramebuffer(j.FRAMEBUFFER,He);try{const Ve=C.texture,Qe=Ve.format,Ye=Ve.type;if(Qe!==ti&&Re.convert(Qe)!==j.getParameter(j.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ke=Ye===ja&&(Ue.has("EXT_color_buffer_half_float")||je.isWebGL2&&Ue.has("EXT_color_buffer_float"));if(Ye!==yr&&Re.convert(Ye)!==j.getParameter(j.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ye===ji&&(je.isWebGL2||Ue.has("OES_texture_float")||Ue.has("WEBGL_color_buffer_float")))&&!Ke){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}K>=0&&K<=C.width-q&&re>=0&&re<=C.height-se&&j.readPixels(K,re,q,se,Re.convert(Qe),Re.convert(Ye),Ce)}finally{const Ve=R!==null?$e.get(R).__webglFramebuffer:null;Fe.bindFramebuffer(j.FRAMEBUFFER,Ve)}}},this.copyFramebufferToTexture=function(C,K,re=0){const q=Math.pow(2,-re),se=Math.floor(K.image.width*q),Ce=Math.floor(K.image.height*q);qe.setTexture2D(K,0),j.copyTexSubImage2D(j.TEXTURE_2D,re,0,0,C.x,C.y,se,Ce),Fe.unbindTexture()},this.copyTextureToTexture=function(C,K,re,q=0){const se=K.image.width,Ce=K.image.height,Oe=Re.convert(re.format),He=Re.convert(re.type);qe.setTexture2D(re,0),j.pixelStorei(j.UNPACK_FLIP_Y_WEBGL,re.flipY),j.pixelStorei(j.UNPACK_PREMULTIPLY_ALPHA_WEBGL,re.premultiplyAlpha),j.pixelStorei(j.UNPACK_ALIGNMENT,re.unpackAlignment),K.isDataTexture?j.texSubImage2D(j.TEXTURE_2D,q,C.x,C.y,se,Ce,Oe,He,K.image.data):K.isCompressedTexture?j.compressedTexSubImage2D(j.TEXTURE_2D,q,C.x,C.y,K.mipmaps[0].width,K.mipmaps[0].height,Oe,K.mipmaps[0].data):j.texSubImage2D(j.TEXTURE_2D,q,C.x,C.y,Oe,He,K.image),q===0&&re.generateMipmaps&&j.generateMipmap(j.TEXTURE_2D),Fe.unbindTexture()},this.copyTextureToTexture3D=function(C,K,re,q,se=0){if(y.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Ce=C.max.x-C.min.x+1,Oe=C.max.y-C.min.y+1,He=C.max.z-C.min.z+1,Ve=Re.convert(q.format),Qe=Re.convert(q.type);let Ye;if(q.isData3DTexture)qe.setTexture3D(q,0),Ye=j.TEXTURE_3D;else if(q.isDataArrayTexture)qe.setTexture2DArray(q,0),Ye=j.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}j.pixelStorei(j.UNPACK_FLIP_Y_WEBGL,q.flipY),j.pixelStorei(j.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),j.pixelStorei(j.UNPACK_ALIGNMENT,q.unpackAlignment);const Ke=j.getParameter(j.UNPACK_ROW_LENGTH),Tt=j.getParameter(j.UNPACK_IMAGE_HEIGHT),Bt=j.getParameter(j.UNPACK_SKIP_PIXELS),Bn=j.getParameter(j.UNPACK_SKIP_ROWS),ai=j.getParameter(j.UNPACK_SKIP_IMAGES),Nt=re.isCompressedTexture?re.mipmaps[0]:re.image;j.pixelStorei(j.UNPACK_ROW_LENGTH,Nt.width),j.pixelStorei(j.UNPACK_IMAGE_HEIGHT,Nt.height),j.pixelStorei(j.UNPACK_SKIP_PIXELS,C.min.x),j.pixelStorei(j.UNPACK_SKIP_ROWS,C.min.y),j.pixelStorei(j.UNPACK_SKIP_IMAGES,C.min.z),re.isDataTexture||re.isData3DTexture?j.texSubImage3D(Ye,se,K.x,K.y,K.z,Ce,Oe,He,Ve,Qe,Nt.data):re.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),j.compressedTexSubImage3D(Ye,se,K.x,K.y,K.z,Ce,Oe,He,Ve,Nt.data)):j.texSubImage3D(Ye,se,K.x,K.y,K.z,Ce,Oe,He,Ve,Qe,Nt),j.pixelStorei(j.UNPACK_ROW_LENGTH,Ke),j.pixelStorei(j.UNPACK_IMAGE_HEIGHT,Tt),j.pixelStorei(j.UNPACK_SKIP_PIXELS,Bt),j.pixelStorei(j.UNPACK_SKIP_ROWS,Bn),j.pixelStorei(j.UNPACK_SKIP_IMAGES,ai),se===0&&q.generateMipmaps&&j.generateMipmap(Ye),Fe.unbindTexture()},this.initTexture=function(C){C.isCubeTexture?qe.setTextureCube(C,0):C.isData3DTexture?qe.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?qe.setTexture2DArray(C,0):qe.setTexture2D(C,0),Fe.unbindTexture()},this.resetState=function(){E=0,A=0,R=null,Fe.reset(),Ee.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return $i}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===We?qr:Yp}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===qr?We:wi}}class uT extends eu{}uT.prototype.isWebGL1Renderer=!0;class wd extends Wt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class hT{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Kc,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=_i()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=_i()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=_i()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const An=new G;class Du{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)An.fromBufferAttribute(this,t),An.applyMatrix4(e),this.setXYZ(t,An.x,An.y,An.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)An.fromBufferAttribute(this,t),An.applyNormalMatrix(e),this.setXYZ(t,An.x,An.y,An.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)An.fromBufferAttribute(this,t),An.transformDirection(e),this.setXYZ(t,An.x,An.y,An.z);return this}setX(e,t){return this.normalized&&(t=Rt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Rt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Rt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Rt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Ki(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Ki(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Ki(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Ki(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Rt(t,this.array),n=Rt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Rt(t,this.array),n=Rt(n,this.array),i=Rt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Rt(t,this.array),n=Rt(n,this.array),i=Rt(i,this.array),r=Rt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new Ln(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Du(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Rd=new G,Cd=new Lt,Ld=new Lt,fT=new G,Pd=new ot,Us=new G,wc=new Li,Dd=new ot,Rc=new ao;class dT extends vn{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new ot,this.bindMatrixInverse=new ot,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new nr),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)Us.fromBufferAttribute(t,n),this.applyBoneTransform(n,Us),this.boundingBox.expandByPoint(Us)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Li),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)Us.fromBufferAttribute(t,n),this.applyBoneTransform(n,Us),this.boundingSphere.expandByPoint(Us)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),wc.copy(this.boundingSphere),wc.applyMatrix4(i),e.ray.intersectsSphere(wc)!==!1&&(Dd.copy(i).invert(),Rc.copy(e.ray).applyMatrix4(Dd),!(this.boundingBox!==null&&Rc.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Rc)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Lt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;Cd.fromBufferAttribute(i.attributes.skinIndex,e),Ld.fromBufferAttribute(i.attributes.skinWeight,e),Rd.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const a=Ld.getComponent(r);if(a!==0){const o=Cd.getComponent(r);Pd.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(fT.copy(Rd).applyMatrix4(Pd),a)}}return t.applyMatrix4(this.bindMatrixInverse)}boneTransform(e,t){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(e,t)}}class hm extends Wt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class pT extends xn{constructor(e=null,t=1,n=1,i,r,a,o,l,c=un,u=un,h,f){super(null,a,o,l,c,u,i,r,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Id=new ot,mT=new ot;class Iu{constructor(e=[],t=[]){this.uuid=_i(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.frame=-1,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new ot)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new ot;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,a=e.length;r<a;r++){const o=e[r]?e[r].matrixWorld:mT;Id.multiplyMatrices(o,t[r]),Id.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new Iu(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Kp(e),e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new pT(t,e,e,ti,ji);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this.boneTextureSize=e,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let a=t[r];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),a=new hm),this.bones.push(a),this.boneInverses.push(new ot().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const a=t[i];e.bones.push(a.uuid);const o=n[i];e.boneInverses.push(o.toArray())}return e}}class Ud extends Ln{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Ns=new ot,Nd=new ot,Xo=[],Od=new nr,gT=new ot,Aa=new vn,wa=new Li;class _T extends vn{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ud(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,gT)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new nr),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ns),Od.copy(e.boundingBox).applyMatrix4(Ns),this.boundingBox.union(Od)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Li),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ns),wa.copy(e.boundingSphere).applyMatrix4(Ns),this.boundingSphere.union(wa)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const n=this.matrixWorld,i=this.count;if(Aa.geometry=this.geometry,Aa.material=this.material,Aa.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),wa.copy(this.boundingSphere),wa.applyMatrix4(n),e.ray.intersectsSphere(wa)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Ns),Nd.multiplyMatrices(n,Ns),Aa.matrixWorld=Nd,Aa.raycast(e,Xo);for(let a=0,o=Xo.length;a<o;a++){const l=Xo[a];l.instanceId=r,l.object=this,t.push(l)}Xo.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Ud(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class fm extends vi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new et(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Fd=new G,kd=new G,Bd=new ot,Cc=new ao,qo=new Li;class Uu extends Wt{constructor(e=new Pi,t=new fm){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)Fd.fromBufferAttribute(t,i-1),kd.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Fd.distanceTo(kd);e.setAttribute("lineDistance",new Ji(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),qo.copy(n.boundingSphere),qo.applyMatrix4(i),qo.radius+=r,e.ray.intersectsSphere(qo)===!1)return;Bd.copy(i).invert(),Cc.copy(e.ray).applyMatrix4(Bd);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new G,u=new G,h=new G,f=new G,d=this.isLineSegments?2:1,v=n.index,m=n.attributes.position;if(v!==null){const p=Math.max(0,a.start),S=Math.min(v.count,a.start+a.count);for(let y=p,T=S-1;y<T;y+=d){const E=v.getX(y),A=v.getX(y+1);if(c.fromBufferAttribute(m,E),u.fromBufferAttribute(m,A),Cc.distanceSqToSegment(c,u,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const L=e.ray.origin.distanceTo(f);L<e.near||L>e.far||t.push({distance:L,point:h.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}else{const p=Math.max(0,a.start),S=Math.min(m.count,a.start+a.count);for(let y=p,T=S-1;y<T;y+=d){if(c.fromBufferAttribute(m,y),u.fromBufferAttribute(m,y+1),Cc.distanceSqToSegment(c,u,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const A=e.ray.origin.distanceTo(f);A<e.near||A>e.far||t.push({distance:A,point:h.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}const zd=new G,Hd=new G;class vT extends Uu{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)zd.fromBufferAttribute(t,i),Hd.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+zd.distanceTo(Hd);e.setAttribute("lineDistance",new Ji(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class xT extends Uu{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class dm extends vi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new et(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Gd=new ot,tu=new ao,Yo=new Li,jo=new G;class yT extends Wt{constructor(e=new Pi,t=new dm){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Yo.copy(n.boundingSphere),Yo.applyMatrix4(i),Yo.radius+=r,e.ray.intersectsSphere(Yo)===!1)return;Gd.copy(i).invert(),tu.copy(e.ray).applyMatrix4(Gd);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,h=n.attributes.position;if(c!==null){const f=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);for(let v=f,g=d;v<g;v++){const m=c.getX(v);jo.fromBufferAttribute(h,m),Vd(jo,m,l,i,e,t,this)}}else{const f=Math.max(0,a.start),d=Math.min(h.count,a.start+a.count);for(let v=f,g=d;v<g;v++)jo.fromBufferAttribute(h,v),Vd(jo,v,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Vd(s,e,t,n,i,r,a){const o=tu.distanceSqToPoint(s);if(o<t){const l=new G;tu.closestPointToPoint(s,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,object:a})}}class Nu extends vi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new et(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new et(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=jp,this.normalScale=new Xe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class is extends Nu{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Xe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return gn(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new et(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new et(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new et(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function hr(s,e,t){return pm(s)?new s.constructor(s.subarray(e,t!==void 0?t:s.length)):s.slice(e,t)}function $o(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function pm(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function MT(s){function e(i,r){return s[i]-s[r]}const t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Wd(s,e,t){const n=s.length,i=new s.constructor(n);for(let r=0,a=0;a!==n;++r){const o=t[r]*e;for(let l=0;l!==e;++l)i[a++]=s[o+l]}return i}function mm(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push.apply(t,a)),r=s[i++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=s[i++];while(r!==void 0)}class lo{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=t[++n],e<i)break e}a=t.length;break t}if(!(e>=r)){const o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){const o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let a=0;a!==i;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class bT extends lo{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Bf,endingEnd:Bf}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,a=e+1,o=i[r],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case zf:r=e,o=2*t-n;break;case Hf:r=i.length-2,o=t+i[r]-i[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case zf:a=e,l=2*n-t;break;case Hf:a=1,l=n+i[1]-i[0];break;default:a=e-1,l=t}const c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,d=this._weightNext,v=(n-t)/(i-t),g=v*v,m=g*v,p=-f*m+2*f*g-f*v,S=(1+f)*m+(-1.5-2*f)*g+(-.5+f)*v+1,y=(-1-d)*m+(1.5+d)*g+.5*v,T=d*m-d*g;for(let E=0;E!==o;++E)r[E]=p*a[u+E]+S*a[c+E]+y*a[l+E]+T*a[h+E];return r}}class ST extends lo{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=(n-t)/(i-t),h=1-u;for(let f=0;f!==o;++f)r[f]=a[c+f]*h+a[l+f]*u;return r}}class ET extends lo{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Di{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=$o(t,this.TimeBufferType),this.values=$o(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:$o(e.times,Array),values:$o(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new ET(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ST(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new bT(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case $a:t=this.InterpolantFactoryMethodDiscrete;break;case Js:t=this.InterpolantFactoryMethodLinear;break;case rc:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return $a;case this.InterpolantFactoryMethodLinear:return Js;case this.InterpolantFactoryMethodSmooth:return rc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let r=0,a=i-1;for(;r!==i&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);const o=this.getValueSize();this.times=hr(n,r,a),this.values=hr(this.values,r*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){const l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(i!==void 0&&pm(i))for(let o=0,l=i.length;o!==l;++o){const c=i[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){const e=hr(this.times),t=hr(this.values),n=this.getValueSize(),i=this.getInterpolation()===rc,r=e.length-1;let a=1;for(let o=1;o<r;++o){let l=!1;const c=e[o],u=e[o+1];if(c!==u&&(o!==1||c!==e[0]))if(i)l=!0;else{const h=o*n,f=h-n,d=h+n;for(let v=0;v!==n;++v){const g=t[h+v];if(g!==t[f+v]||g!==t[d+v]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];const h=o*n,f=a*n;for(let d=0;d!==n;++d)t[f+d]=t[h+d]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=hr(e,0,a),this.values=hr(t,0,a*n)):(this.times=e,this.values=t),this}clone(){const e=hr(this.times,0),t=hr(this.values,0),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}Di.prototype.TimeBufferType=Float32Array;Di.prototype.ValueBufferType=Float32Array;Di.prototype.DefaultInterpolation=Js;class da extends Di{}da.prototype.ValueTypeName="bool";da.prototype.ValueBufferType=Array;da.prototype.DefaultInterpolation=$a;da.prototype.InterpolantFactoryMethodLinear=void 0;da.prototype.InterpolantFactoryMethodSmooth=void 0;class gm extends Di{}gm.prototype.ValueTypeName="color";class Za extends Di{}Za.prototype.ValueTypeName="number";class TT extends lo{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(i-t);let c=e*o;for(let u=c+o;c!==u;c+=4)Ri.slerpFlat(r,0,a,c-o,a,c,l);return r}}class es extends Di{InterpolantFactoryMethodLinear(e){return new TT(this.times,this.values,this.getValueSize(),e)}}es.prototype.ValueTypeName="quaternion";es.prototype.DefaultInterpolation=Js;es.prototype.InterpolantFactoryMethodSmooth=void 0;class pa extends Di{}pa.prototype.ValueTypeName="string";pa.prototype.ValueBufferType=Array;pa.prototype.DefaultInterpolation=$a;pa.prototype.InterpolantFactoryMethodLinear=void 0;pa.prototype.InterpolantFactoryMethodSmooth=void 0;class Ja extends Di{}Ja.prototype.ValueTypeName="vector";class AT{constructor(e,t=-1,n,i=Ux){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=_i(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(RT(n[a]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,a=n.length;r!==a;++r)t.push(Di.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,a=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);const u=MT(l);l=Wd(l,1,u),c=Wd(c,1,u),!i&&l[0]===0&&(l.push(r),c.push(c[0])),a.push(new Za(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){const c=e[o],u=c.name.match(r);if(u&&u.length>1){const h=u[1];let f=i[h];f||(i[h]=f=[]),f.push(c)}}const a=[];for(const o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,f,d,v,g){if(d.length!==0){const m=[],p=[];mm(d,m,p,v),m.length!==0&&g.push(new h(f,m,p))}},i=[],r=e.name||"default",a=e.fps||30,o=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let h=0;h<c.length;h++){const f=c[h].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const d={};let v;for(v=0;v<f.length;v++)if(f[v].morphTargets)for(let g=0;g<f[v].morphTargets.length;g++)d[f[v].morphTargets[g]]=-1;for(const g in d){const m=[],p=[];for(let S=0;S!==f[v].morphTargets.length;++S){const y=f[v];m.push(y.time),p.push(y.morphTarget===g?1:0)}i.push(new Za(".morphTargetInfluence["+g+"]",m,p))}l=d.length*a}else{const d=".bones["+t[h].name+"]";n(Ja,d+".position",f,"pos",i),n(es,d+".quaternion",f,"rot",i),n(Ja,d+".scale",f,"scl",i)}}return i.length===0?null:new this(r,l,i,o)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function wT(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Za;case"vector":case"vector2":case"vector3":case"vector4":return Ja;case"color":return gm;case"quaternion":return es;case"bool":case"boolean":return da;case"string":return pa}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function RT(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=wT(s.type);if(s.times===void 0){const t=[],n=[];mm(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}const ta={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class _m{constructor(e,t,n){const i=this;let r=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){o++,r===!1&&i.onStart!==void 0&&i.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,i.onProgress!==void 0&&i.onProgress(u,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){const d=c[h],v=c[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return v}return null}}}const CT=new _m;class ma{constructor(e){this.manager=e!==void 0?e:CT,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}const Vi={};class LT extends Error{constructor(e,t){super(e),this.response=t}}class vm extends ma{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=ta.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Vi[e]!==void 0){Vi[e].push({onLoad:t,onProgress:n,onError:i});return}Vi[e]=[],Vi[e].push({onLoad:t,onProgress:n,onError:i});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Vi[e],h=c.body.getReader(),f=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),d=f?parseInt(f):0,v=d!==0;let g=0;const m=new ReadableStream({start(p){S();function S(){h.read().then(({done:y,value:T})=>{if(y)p.close();else{g+=T.byteLength;const E=new ProgressEvent("progress",{lengthComputable:v,loaded:g,total:d});for(let A=0,R=u.length;A<R;A++){const L=u[A];L.onProgress&&L.onProgress(E)}p.enqueue(T),S()}})}}});return new Response(m)}else throw new LT(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return c.json();default:if(o===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(o),f=h&&h[1]?h[1].toLowerCase():void 0,d=new TextDecoder(f);return c.arrayBuffer().then(v=>d.decode(v))}}}).then(c=>{ta.add(e,c);const u=Vi[e];delete Vi[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onLoad&&d.onLoad(c)}}).catch(c=>{const u=Vi[e];if(u===void 0)throw this.manager.itemError(e),c;delete Vi[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class xm extends ma{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=ta.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;const o=Ka("img");function l(){u(),ta.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(h){u(),i&&i(h),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(e),o.src=e,o}}class PT extends ma{constructor(e){super(e)}load(e,t,n,i){const r=new wu;r.colorSpace=We;const a=new xm(this.manager);a.setCrossOrigin(this.crossOrigin),a.setPath(this.path);let o=0;function l(c){a.load(e[c],function(u){r.images[c]=u,o++,o===6&&(r.needsUpdate=!0,t&&t(r))},void 0,i)}for(let c=0;c<e.length;++c)l(c);return r}}class ym extends ma{constructor(e){super(e)}load(e,t,n,i){const r=new xn,a=new xm(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class yl extends Wt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new et(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Lc=new ot,Xd=new G,qd=new G;class Ou{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Xe(512,512),this.map=null,this.mapPass=null,this.matrix=new ot,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ru,this._frameExtents=new Xe(1,1),this._viewportCount=1,this._viewports=[new Lt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Xd.setFromMatrixPosition(e.matrixWorld),t.position.copy(Xd),qd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(qd),t.updateMatrixWorld(),Lc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Lc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Lc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class DT extends Ou{constructor(){super(new Cn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Qs*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class IT extends yl{constructor(e,t,n=0,i=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Wt.DEFAULT_UP),this.updateMatrix(),this.target=new Wt,this.distance=n,this.angle=i,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new DT}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Yd=new ot,Ra=new G,Pc=new G;class UT extends Ou{constructor(){super(new Cn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Xe(4,2),this._viewportCount=6,this._viewports=[new Lt(2,1,1,1),new Lt(0,1,1,1),new Lt(3,1,1,1),new Lt(1,1,1,1),new Lt(3,0,1,1),new Lt(1,0,1,1)],this._cubeDirections=[new G(1,0,0),new G(-1,0,0),new G(0,0,1),new G(0,0,-1),new G(0,1,0),new G(0,-1,0)],this._cubeUps=[new G(0,1,0),new G(0,1,0),new G(0,1,0),new G(0,1,0),new G(0,0,1),new G(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Ra.setFromMatrixPosition(e.matrixWorld),n.position.copy(Ra),Pc.copy(n.position),Pc.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Pc),n.updateMatrixWorld(),i.makeTranslation(-Ra.x,-Ra.y,-Ra.z),Yd.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Yd)}}class NT extends yl{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new UT}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class OT extends Ou{constructor(){super(new Lu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Mm extends yl{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Wt.DEFAULT_UP),this.updateMatrix(),this.target=new Wt,this.shadow=new OT}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class FT extends yl{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class nu{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class kT extends ma{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=ta.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){ta.add(e,l),t&&t(l),r.manager.itemEnd(e)}).catch(function(l){i&&i(l),r.manager.itemError(e),r.manager.itemEnd(e)}),r.manager.itemStart(e)}}const Fu="\\[\\]\\.:\\/",BT=new RegExp("["+Fu+"]","g"),ku="[^"+Fu+"]",zT="[^"+Fu.replace("\\.","")+"]",HT=/((?:WC+[\/:])*)/.source.replace("WC",ku),GT=/(WCOD+)?/.source.replace("WCOD",zT),VT=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ku),WT=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ku),XT=new RegExp("^"+HT+GT+VT+WT+"$"),qT=["material","materials","bones","map"];class YT{constructor(e,t,n){const i=n||St.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class St{constructor(e,t,n){this.path=t,this.parsedPath=n||St.parseTrackName(t),this.node=St.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new St.Composite(e,t,n):new St(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(BT,"")}static parseTrackName(e){const t=XT.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);qT.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let a=0;a<r.length;a++){const o=r[a];if(o.name===t||o.uuid===t)return o;const l=n(o.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=St.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const a=e[i];if(a===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}St.Composite=YT;St.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};St.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};St.prototype.GetterByBindingType=[St.prototype._getValue_direct,St.prototype._getValue_array,St.prototype._getValue_arrayElement,St.prototype._getValue_toArray];St.prototype.SetterByBindingTypeAndVersioning=[[St.prototype._setValue_direct,St.prototype._setValue_direct_setNeedsUpdate,St.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[St.prototype._setValue_array,St.prototype._setValue_array_setNeedsUpdate,St.prototype._setValue_array_setMatrixWorldNeedsUpdate],[St.prototype._setValue_arrayElement,St.prototype._setValue_arrayElement_setNeedsUpdate,St.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[St.prototype._setValue_fromArray,St.prototype._setValue_fromArray_setNeedsUpdate,St.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class jT{constructor(e,t,n=0,i=1/0){this.ray=new ao(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new Au,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return iu(e,this,n,t),n.sort(jd),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)iu(e[i],this,n,t);return n.sort(jd),n}}function jd(s,e){return s.distance-e.distance}function iu(s,e,t,n){if(s.layers.test(e.layers)&&s.raycast(e,t),n===!0){const i=s.children;for(let r=0,a=i.length;r<a;r++)iu(i[r],e,t,!0)}}class $d{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(gn(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Su}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Su);function Kd(s,e){if(e===Nx)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===$c||e===qp){let t=s.getIndex();if(t===null){const a=[],o=s.getAttribute("position");if(o!==void 0){for(let l=0;l<o.count;l++)a.push(l);s.setIndex(a),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const n=t.count-2,i=[];if(e===$c)for(let a=1;a<=n;a++)i.push(t.getX(0)),i.push(t.getX(a)),i.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(i.push(t.getX(a)),i.push(t.getX(a+1)),i.push(t.getX(a+2))):(i.push(t.getX(a+2)),i.push(t.getX(a+1)),i.push(t.getX(a)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}class $T extends ma{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new e1(t)}),this.register(function(t){return new o1(t)}),this.register(function(t){return new l1(t)}),this.register(function(t){return new c1(t)}),this.register(function(t){return new n1(t)}),this.register(function(t){return new i1(t)}),this.register(function(t){return new r1(t)}),this.register(function(t){return new s1(t)}),this.register(function(t){return new QT(t)}),this.register(function(t){return new a1(t)}),this.register(function(t){return new t1(t)}),this.register(function(t){return new ZT(t)}),this.register(function(t){return new u1(t)}),this.register(function(t){return new h1(t)})}load(e,t,n,i){const r=this;let a;this.resourcePath!==""?a=this.resourcePath:this.path!==""?a=this.path:a=nu.extractUrlBase(e),this.manager.itemStart(e);const o=function(c){i?i(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new vm(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,a,function(u){t(u),r.manager.itemEnd(e)},o)}catch(u){o(u)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r;const a={},o={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===bm){try{a[mt.KHR_BINARY_GLTF]=new f1(e)}catch(h){i&&i(h);return}r=JSON.parse(a[mt.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new T1(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const h=this.pluginCallbacks[u](c);o[h.name]=h,a[h.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){const h=r.extensionsUsed[u],f=r.extensionsRequired||[];switch(h){case mt.KHR_MATERIALS_UNLIT:a[h]=new JT;break;case mt.KHR_DRACO_MESH_COMPRESSION:a[h]=new d1(r,this.dracoLoader);break;case mt.KHR_TEXTURE_TRANSFORM:a[h]=new p1;break;case mt.KHR_MESH_QUANTIZATION:a[h]=new m1;break;default:f.indexOf(h)>=0&&o[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}}function KT(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}const mt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class ZT{constructor(e){this.parser=e,this.name=mt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let c;const u=new et(16777215);l.color!==void 0&&u.fromArray(l.color);const h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Mm(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new NT(u),c.distance=h;break;case"spot":c=new IT(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,dr(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return n._getNodeRef(t.cache,o,l)})}}class JT{constructor(){this.name=mt.KHR_MATERIALS_UNLIT}getMaterialType(){return Gr}extendParams(e,t,n){const i=[];e.color=new et(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const a=r.baseColorFactor;e.color.fromArray(a),e.opacity=a[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,We))}return Promise.all(i)}}class QT{constructor(e){this.parser=e,this.name=mt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class e1{constructor(e){this.parser=e,this.name=mt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:is}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){const o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Xe(o,o)}return Promise.all(r)}}class t1{constructor(e){this.parser=e,this.name=mt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:is}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(r)}}class n1{constructor(e){this.parser=e,this.name=mt.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:is}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new et(0,0,0),t.sheenRoughness=0,t.sheen=1;const a=i.extensions[this.name];return a.sheenColorFactor!==void 0&&t.sheenColor.fromArray(a.sheenColorFactor),a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",a.sheenColorTexture,We)),a.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(r)}}class i1{constructor(e){this.parser=e,this.name=mt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:is}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(r)}}class r1{constructor(e){this.parser=e,this.name=mt.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:is}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;const o=a.attenuationColor||[1,1,1];return t.attenuationColor=new et(o[0],o[1],o[2]),Promise.all(r)}}class s1{constructor(e){this.parser=e,this.name=mt.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:is}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class a1{constructor(e){this.parser=e,this.name=mt.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:is}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",a.specularTexture));const o=a.specularColorFactor||[1,1,1];return t.specularColor=new et(o[0],o[1],o[2]),a.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",a.specularColorTexture,We)),Promise.all(r)}}class o1{constructor(e){this.parser=e,this.name=mt.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const r=i.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}}class l1{constructor(e){this.parser=e,this.name=mt.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=i.images[a.source];let l=n.textureLoader;if(o.uri){const c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,a.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class c1{constructor(e){this.parser=e,this.name=mt.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=i.images[a.source];let l=n.textureLoader;if(o.uri){const c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,a.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class u1{constructor(e){this.name=mt.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){const l=i.byteOffset||0,c=i.byteLength||0,u=i.count,h=i.byteStride,f=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(u,h,f,i.mode,i.filter).then(function(d){return d.buffer}):a.ready.then(function(){const d=new ArrayBuffer(u*h);return a.decodeGltfBuffer(new Uint8Array(d),u,h,f,i.mode,i.filter),d})})}else return null}}class h1{constructor(e){this.name=mt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const c of i.primitives)if(c.mode!==Jn.TRIANGLES&&c.mode!==Jn.TRIANGLE_STRIP&&c.mode!==Jn.TRIANGLE_FAN&&c.mode!==void 0)return null;const a=n.extensions[this.name].attributes,o=[],l={};for(const c in a)o.push(this.parser.getDependency("accessor",a[c]).then(u=>(l[c]=u,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{const u=c.pop(),h=u.isGroup?u.children:[u],f=c[0].count,d=[];for(const v of h){const g=new ot,m=new G,p=new Ri,S=new G(1,1,1),y=new _T(v.geometry,v.material,f);for(let T=0;T<f;T++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,T),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,T),l.SCALE&&S.fromBufferAttribute(l.SCALE,T),y.setMatrixAt(T,g.compose(m,p,S));for(const T in l)T!=="TRANSLATION"&&T!=="ROTATION"&&T!=="SCALE"&&v.geometry.setAttribute(T,l[T]);Wt.prototype.copy.call(y,v),this.parser.assignFinalMaterial(y),d.push(y)}return u.isGroup?(u.clear(),u.add(...d),u):d[0]}))}}const bm="glTF",Ca=12,Zd={JSON:1313821514,BIN:5130562};class f1{constructor(e){this.name=mt.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Ca),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==bm)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-Ca,r=new DataView(e,Ca);let a=0;for(;a<i;){const o=r.getUint32(a,!0);a+=4;const l=r.getUint32(a,!0);if(a+=4,l===Zd.JSON){const c=new Uint8Array(e,Ca+a,o);this.content=n.decode(c)}else if(l===Zd.BIN){const c=Ca+a;this.body=e.slice(c,c+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class d1{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=mt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},c={};for(const u in a){const h=ru[u]||u.toLowerCase();o[h]=a[u]}for(const u in e.attributes){const h=ru[u]||u.toLowerCase();if(a[u]!==void 0){const f=n.accessors[e.attributes[u]],d=Vs[f.componentType];c[h]=d.name,l[h]=f.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h){i.decodeDracoFile(u,function(f){for(const d in f.attributes){const v=f.attributes[d],g=l[d];g!==void 0&&(v.normalized=g)}h(f)},o,c)})})}}class p1{constructor(){this.name=mt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class m1{constructor(){this.name=mt.KHR_MESH_QUANTIZATION}}class Sm extends lo{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let a=0;a!==i;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,u=i-t,h=(n-t)/u,f=h*h,d=f*h,v=e*c,g=v-c,m=-2*d+3*f,p=d-f,S=1-m,y=p-f+h;for(let T=0;T!==o;T++){const E=a[g+T+o],A=a[g+T+l]*u,R=a[v+T+o],L=a[v+T]*u;r[T]=S*E+y*A+m*R+p*L}return r}}const g1=new Ri;class _1 extends Sm{interpolate_(e,t,n,i){const r=super.interpolate_(e,t,n,i);return g1.fromArray(r).normalize().toArray(r),r}}const Jn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Vs={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Jd={9728:un,9729:Dn,9984:jc,9985:Bp,9986:Zo,9987:Zr},Qd={33071:ei,33648:rl,10497:Ks},Dc={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},ru={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},fr={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},v1={CUBICSPLINE:void 0,LINEAR:Js,STEP:$a},Ic={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function x1(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new Nu({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Qi})),s.DefaultMaterial}function La(s,e,t){for(const n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function dr(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function y1(s,e,t){let n=!1,i=!1,r=!1;for(let c=0,u=e.length;c<u;c++){const h=e[c];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(i=!0),h.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);const a=[],o=[],l=[];for(let c=0,u=e.length;c<u;c++){const h=e[c];if(n){const f=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):s.attributes.position;a.push(f)}if(i){const f=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):s.attributes.normal;o.push(f)}if(r){const f=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):s.attributes.color;l.push(f)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){const u=c[0],h=c[1],f=c[2];return n&&(s.morphAttributes.position=u),i&&(s.morphAttributes.normal=h),r&&(s.morphAttributes.color=f),s.morphTargetsRelative=!0,s})}function M1(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function b1(s){const e=s.extensions&&s.extensions[mt.KHR_DRACO_MESH_COMPRESSION];let t;return e?t="draco:"+e.bufferView+":"+e.indices+":"+ep(e.attributes):t=s.indices+":"+ep(s.attributes)+":"+s.mode,t}function ep(s){let e="";const t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function su(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function S1(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const E1=new ot;class T1{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new KT,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=!1,r=-1;typeof navigator<"u"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,i=navigator.userAgent.indexOf("Firefox")>-1,r=i?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||n||i&&r<98?this.textureLoader=new ym(this.options.manager):this.textureLoader=new kT(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new vm(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){const o={scene:a[0][i.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:i.asset,parser:n,userData:{}};La(r,o,i),dr(o,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){const a=t[i].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let i=0,r=e.length;i<r;i++){const a=e[i];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),r=(a,o)=>{const l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(const[c,u]of a.children.entries())r(u,o.children[c])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[mt.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(r,a){n.load(nu.resolveURL(t.uri,i.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const a=Dc[i.type],o=Vs[i.componentType],l=i.normalized===!0,c=new o(i.count*a);return Promise.resolve(new Ln(c,a,l))}const r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(a){const o=a[0],l=Dc[i.type],c=Vs[i.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,f=i.byteOffset||0,d=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,v=i.normalized===!0;let g,m;if(d&&d!==h){const p=Math.floor(f/d),S="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count;let y=t.cache.get(S);y||(g=new c(o,p*d,i.count*d/u),y=new hT(g,d/u),t.cache.add(S,y)),m=new Du(y,l,f%d/u,v)}else o===null?g=new c(i.count*l):g=new c(o,f,i.count*l),m=new Ln(g,l,v);if(i.sparse!==void 0){const p=Dc.SCALAR,S=Vs[i.sparse.indices.componentType],y=i.sparse.indices.byteOffset||0,T=i.sparse.values.byteOffset||0,E=new S(a[1],y,i.sparse.count*p),A=new c(a[2],T,i.sparse.count*l);o!==null&&(m=new Ln(m.array.slice(),m.itemSize,m.normalized));for(let R=0,L=E.length;R<L;R++){const M=E[R];if(m.setX(M,A[R*l]),l>=2&&m.setY(M,A[R*l+1]),l>=3&&m.setZ(M,A[R*l+2]),l>=4&&m.setW(M,A[R*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return m})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r];let o=this.textureLoader;if(a.uri){const l=n.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){const i=this,r=this.json,a=r.textures[e],o=r.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=a.name||o.name||"",u.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(u.name=o.uri);const f=(r.samplers||{})[a.sampler]||{};return u.magFilter=Jd[f.magFilter]||Dn,u.minFilter=Jd[f.minFilter]||Zr,u.wrapS=Qd[f.wrapS]||Ks,u.wrapT=Qd[f.wrapT]||Ks,i.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const a=i.images[e],o=self.URL||self.webkitURL;let l=a.uri||"",c=!1;if(a.bufferView!==void 0)l=n.getDependency("bufferView",a.bufferView).then(function(h){c=!0;const f=new Blob([h],{type:a.mimeType});return l=o.createObjectURL(f),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(h){return new Promise(function(f,d){let v=f;t.isImageBitmapLoader===!0&&(v=function(g){const m=new xn(g);m.needsUpdate=!0,f(m)}),t.load(nu.resolveURL(h,r.path),v,void 0,d)})}).then(function(h){return c===!0&&o.revokeObjectURL(l),h.userData.mimeType=a.mimeType||S1(a.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,i){const r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[mt.KHR_TEXTURE_TRANSFORM]){const o=n.extensions!==void 0?n.extensions[mt.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const l=r.associations.get(a);a=r.extensions[mt.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,l)}}return i!==void 0&&(a.colorSpace=i),e[t]=a,a})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new dm,vi.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(o,l)),n=l}else if(e.isLine){const o="LineBasicMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new fm,vi.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(o,l)),n=l}if(i||r||a){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=n.clone(),r&&(l.vertexColors=!0),a&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return Nu}loadMaterial(e){const t=this,n=this.json,i=this.extensions,r=n.materials[e];let a;const o={},l=r.extensions||{},c=[];if(l[mt.KHR_MATERIALS_UNLIT]){const h=i[mt.KHR_MATERIALS_UNLIT];a=h.getMaterialType(),c.push(h.extendParams(o,r,t))}else{const h=r.pbrMetallicRoughness||{};if(o.color=new et(1,1,1),o.opacity=1,Array.isArray(h.baseColorFactor)){const f=h.baseColorFactor;o.color.fromArray(f),o.opacity=f[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",h.baseColorTexture,We)),o.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,o.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",h.metallicRoughnessTexture))),a=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=bi);const u=r.alphaMode||Ic.OPAQUE;if(u===Ic.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,u===Ic.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==Gr&&(c.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new Xe(1,1),r.normalTexture.scale!==void 0)){const h=r.normalTexture.scale;o.normalScale.set(h,h)}return r.occlusionTexture!==void 0&&a!==Gr&&(c.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==Gr&&(o.emissive=new et().fromArray(r.emissiveFactor)),r.emissiveTexture!==void 0&&a!==Gr&&c.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,We)),Promise.all(c).then(function(){const h=new a(o);return r.name&&(h.name=r.name),dr(h,r),t.associations.set(h,{materials:e}),r.extensions&&La(i,h,r),h})}createUniqueName(e){const t=St.sanitizeNodeName(e||"");let n=t;for(let i=1;this.nodeNamesUsed[n];++i)n=t+"_"+i;return this.nodeNamesUsed[n]=!0,n}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function r(o){return n[mt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return tp(l,o,t)})}const a=[];for(let o=0,l=e.length;o<l;o++){const c=e[o],u=b1(c),h=i[u];if(h)a.push(h.promise);else{let f;c.extensions&&c.extensions[mt.KHR_DRACO_MESH_COMPRESSION]?f=r(c):f=tp(new Pi,c,t),i[u]={primitive:c,promise:f},a.push(f)}}return Promise.all(a)}loadMesh(e){const t=this,n=this.json,i=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let l=0,c=a.length;l<c;l++){const u=a[l].material===void 0?x1(this.cache):this.getDependency("material",a[l].material);o.push(u)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let d=0,v=u.length;d<v;d++){const g=u[d],m=a[d];let p;const S=c[d];if(m.mode===Jn.TRIANGLES||m.mode===Jn.TRIANGLE_STRIP||m.mode===Jn.TRIANGLE_FAN||m.mode===void 0)p=r.isSkinnedMesh===!0?new dT(g,S):new vn(g,S),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===Jn.TRIANGLE_STRIP?p.geometry=Kd(p.geometry,qp):m.mode===Jn.TRIANGLE_FAN&&(p.geometry=Kd(p.geometry,$c));else if(m.mode===Jn.LINES)p=new vT(g,S);else if(m.mode===Jn.LINE_STRIP)p=new Uu(g,S);else if(m.mode===Jn.LINE_LOOP)p=new xT(g,S);else if(m.mode===Jn.POINTS)p=new yT(g,S);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&M1(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),dr(p,r),m.extensions&&La(i,p,m),t.assignFinalMaterial(p),h.push(p)}for(let d=0,v=h.length;d<v;d++)t.associations.set(h[d],{meshes:e,primitives:d});if(h.length===1)return h[0];const f=new mr;t.associations.set(f,{meshes:e});for(let d=0,v=h.length;d<v;d++)f.add(h[d]);return f})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Cn(oy.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new Lu(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),dr(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const r=i.pop(),a=i,o=[],l=[];for(let c=0,u=a.length;c<u;c++){const h=a[c];if(h){o.push(h);const f=new ot;r!==null&&f.fromArray(r.array,c*16),l.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Iu(o,l)})}loadAnimation(e){const n=this.json.animations[e],i=n.name?n.name:"animation_"+e,r=[],a=[],o=[],l=[],c=[];for(let u=0,h=n.channels.length;u<h;u++){const f=n.channels[u],d=n.samplers[f.sampler],v=f.target,g=v.node,m=n.parameters!==void 0?n.parameters[d.input]:d.input,p=n.parameters!==void 0?n.parameters[d.output]:d.output;v.node!==void 0&&(r.push(this.getDependency("node",g)),a.push(this.getDependency("accessor",m)),o.push(this.getDependency("accessor",p)),l.push(d),c.push(v))}return Promise.all([Promise.all(r),Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(c)]).then(function(u){const h=u[0],f=u[1],d=u[2],v=u[3],g=u[4],m=[];for(let p=0,S=h.length;p<S;p++){const y=h[p],T=f[p],E=d[p],A=v[p],R=g[p];if(y===void 0)continue;y.updateMatrix();let L;switch(fr[R.path]){case fr.weights:L=Za;break;case fr.rotation:L=es;break;case fr.position:case fr.scale:default:L=Ja;break}const M=y.name?y.name:y.uuid,D=A.interpolation!==void 0?v1[A.interpolation]:Js,W=[];fr[R.path]===fr.weights?y.traverse(function(B){B.morphTargetInfluences&&W.push(B.name?B.name:B.uuid)}):W.push(M);let ne=E.array;if(E.normalized){const B=su(ne.constructor),O=new Float32Array(ne.length);for(let H=0,te=ne.length;H<te;H++)O[H]=ne[H]*B;ne=O}for(let B=0,O=W.length;B<O;B++){const H=new L(W[B]+"."+fr[R.path],T.array,ne,D);A.interpolation==="CUBICSPLINE"&&(H.createInterpolant=function($){const J=this instanceof es?_1:Sm;return new J(this.times,this.values,this.getValueSize()/3,$)},H.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0),m.push(H)}}return new AT(i,void 0,m)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){const a=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,c=i.weights.length;l<c;l++)o.morphTargetInfluences[l]=i.weights[l]}),a})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=i.children||[];for(let c=0,u=o.length;c<u;c++)a.push(n.getDependency("node",o[c]));const l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(a),l]).then(function(c){const u=c[0],h=c[1],f=c[2];f!==null&&u.traverse(function(d){d.isSkinnedMesh&&d.bind(f,E1)});for(let d=0,v=h.length;d<v;d++)u.add(h[d]);return u})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],a=r.name?i.createUniqueName(r.name):"",o=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),r.camera!==void 0&&o.push(i.getDependency("camera",r.camera).then(function(c){return i._getNodeRef(i.cameraCache,r.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let u;if(r.isBone===!0?u=new hm:c.length>1?u=new mr:c.length===1?u=c[0]:u=new Wt,u!==c[0])for(let h=0,f=c.length;h<f;h++)u.add(c[h]);if(r.name&&(u.userData.name=r.name,u.name=a),dr(u,r),r.extensions&&La(n,u,r),r.matrix!==void 0){const h=new ot;h.fromArray(r.matrix),u.applyMatrix4(h)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);return i.associations.has(u)||i.associations.set(u,{}),i.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,r=new mr;n.name&&(r.name=i.createUniqueName(n.name)),dr(r,n),n.extensions&&La(t,r,n);const a=n.nodes||[],o=[];for(let l=0,c=a.length;l<c;l++)o.push(i.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let u=0,h=l.length;u<h;u++)r.add(l[u]);const c=u=>{const h=new Map;for(const[f,d]of i.associations)(f instanceof vi||f instanceof xn)&&h.set(f,d);return u.traverse(f=>{const d=i.associations.get(f);d!=null&&h.set(f,d)}),h};return i.associations=c(r),r})}}function A1(s,e,t){const n=e.attributes,i=new nr;if(n.POSITION!==void 0){const o=t.json.accessors[n.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(i.set(new G(l[0],l[1],l[2]),new G(c[0],c[1],c[2])),o.normalized){const u=su(Vs[o.componentType]);i.min.multiplyScalar(u),i.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const o=new G,l=new G;for(let c=0,u=r.length;c<u;c++){const h=r[c];if(h.POSITION!==void 0){const f=t.json.accessors[h.POSITION],d=f.min,v=f.max;if(d!==void 0&&v!==void 0){if(l.setX(Math.max(Math.abs(d[0]),Math.abs(v[0]))),l.setY(Math.max(Math.abs(d[1]),Math.abs(v[1]))),l.setZ(Math.max(Math.abs(d[2]),Math.abs(v[2]))),f.normalized){const g=su(Vs[f.componentType]);l.multiplyScalar(g)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}s.boundingBox=i;const a=new Li;i.getCenter(a.center),a.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=a}function tp(s,e,t){const n=e.attributes,i=[];function r(a,o){return t.getDependency("accessor",a).then(function(l){s.setAttribute(o,l)})}for(const a in n){const o=ru[a]||a.toLowerCase();o in s.attributes||i.push(r(n[a],o))}if(e.indices!==void 0&&!s.index){const a=t.getDependency("accessor",e.indices).then(function(o){s.setIndex(o)});i.push(a)}return dr(s,e),A1(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?y1(s,e.targets,t):s})}const np={type:"change"},Uc={type:"start"},ip={type:"end"};class w1 extends ns{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new G,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:gs.ROTATE,MIDDLE:gs.DOLLY,RIGHT:gs.PAN},this.touches={ONE:_s.ROTATE,TWO:_s.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(U){U.addEventListener("keydown",ht),this._domElementKeyEvents=U},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",ht),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(np),n.update(),r=i.NONE},this.update=function(){const U=new G,ce=new Ri().setFromUnitVectors(e.up,new G(0,1,0)),me=ce.clone().invert(),ee=new G,Pe=new Ri,De=2*Math.PI;return function(){const Re=n.object.position;U.copy(Re).sub(n.target),U.applyQuaternion(ce),o.setFromVector3(U),n.autoRotate&&r===i.NONE&&M(R()),n.enableDamping?(o.theta+=l.theta*n.dampingFactor,o.phi+=l.phi*n.dampingFactor):(o.theta+=l.theta,o.phi+=l.phi);let Ee=n.minAzimuthAngle,ze=n.maxAzimuthAngle;return isFinite(Ee)&&isFinite(ze)&&(Ee<-Math.PI?Ee+=De:Ee>Math.PI&&(Ee-=De),ze<-Math.PI?ze+=De:ze>Math.PI&&(ze-=De),Ee<=ze?o.theta=Math.max(Ee,Math.min(ze,o.theta)):o.theta=o.theta>(Ee+ze)/2?Math.max(Ee,o.theta):Math.min(ze,o.theta)),o.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,o.phi)),o.makeSafe(),o.radius*=c,o.radius=Math.max(n.minDistance,Math.min(n.maxDistance,o.radius)),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),U.setFromSpherical(o),U.applyQuaternion(me),Re.copy(n.target).add(U),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),u.set(0,0,0)),c=1,h||ee.distanceToSquared(n.object.position)>a||8*(1-Pe.dot(n.object.quaternion))>a?(n.dispatchEvent(np),ee.copy(n.object.position),Pe.copy(n.object.quaternion),h=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",I),n.domElement.removeEventListener("pointerdown",Ue),n.domElement.removeEventListener("pointercancel",Fe),n.domElement.removeEventListener("wheel",qe),n.domElement.removeEventListener("pointermove",je),n.domElement.removeEventListener("pointerup",Fe),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",ht),n._domElementKeyEvents=null)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let r=i.NONE;const a=1e-6,o=new $d,l=new $d;let c=1;const u=new G;let h=!1;const f=new Xe,d=new Xe,v=new Xe,g=new Xe,m=new Xe,p=new Xe,S=new Xe,y=new Xe,T=new Xe,E=[],A={};function R(){return 2*Math.PI/60/60*n.autoRotateSpeed}function L(){return Math.pow(.95,n.zoomSpeed)}function M(U){l.theta-=U}function D(U){l.phi-=U}const W=function(){const U=new G;return function(me,ee){U.setFromMatrixColumn(ee,0),U.multiplyScalar(-me),u.add(U)}}(),ne=function(){const U=new G;return function(me,ee){n.screenSpacePanning===!0?U.setFromMatrixColumn(ee,1):(U.setFromMatrixColumn(ee,0),U.crossVectors(n.object.up,U)),U.multiplyScalar(me),u.add(U)}}(),B=function(){const U=new G;return function(me,ee){const Pe=n.domElement;if(n.object.isPerspectiveCamera){const De=n.object.position;U.copy(De).sub(n.target);let Ie=U.length();Ie*=Math.tan(n.object.fov/2*Math.PI/180),W(2*me*Ie/Pe.clientHeight,n.object.matrix),ne(2*ee*Ie/Pe.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(W(me*(n.object.right-n.object.left)/n.object.zoom/Pe.clientWidth,n.object.matrix),ne(ee*(n.object.top-n.object.bottom)/n.object.zoom/Pe.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function O(U){n.object.isPerspectiveCamera?c/=U:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*U)),n.object.updateProjectionMatrix(),h=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function H(U){n.object.isPerspectiveCamera?c*=U:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/U)),n.object.updateProjectionMatrix(),h=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function te(U){f.set(U.clientX,U.clientY)}function $(U){S.set(U.clientX,U.clientY)}function J(U){g.set(U.clientX,U.clientY)}function oe(U){d.set(U.clientX,U.clientY),v.subVectors(d,f).multiplyScalar(n.rotateSpeed);const ce=n.domElement;M(2*Math.PI*v.x/ce.clientHeight),D(2*Math.PI*v.y/ce.clientHeight),f.copy(d),n.update()}function ue(U){y.set(U.clientX,U.clientY),T.subVectors(y,S),T.y>0?O(L()):T.y<0&&H(L()),S.copy(y),n.update()}function Te(U){m.set(U.clientX,U.clientY),p.subVectors(m,g).multiplyScalar(n.panSpeed),B(p.x,p.y),g.copy(m),n.update()}function Z(U){U.deltaY<0?H(L()):U.deltaY>0&&O(L()),n.update()}function fe(U){let ce=!1;switch(U.code){case n.keys.UP:U.ctrlKey||U.metaKey||U.shiftKey?D(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):B(0,n.keyPanSpeed),ce=!0;break;case n.keys.BOTTOM:U.ctrlKey||U.metaKey||U.shiftKey?D(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):B(0,-n.keyPanSpeed),ce=!0;break;case n.keys.LEFT:U.ctrlKey||U.metaKey||U.shiftKey?M(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):B(n.keyPanSpeed,0),ce=!0;break;case n.keys.RIGHT:U.ctrlKey||U.metaKey||U.shiftKey?M(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):B(-n.keyPanSpeed,0),ce=!0;break}ce&&(U.preventDefault(),n.update())}function le(){if(E.length===1)f.set(E[0].pageX,E[0].pageY);else{const U=.5*(E[0].pageX+E[1].pageX),ce=.5*(E[0].pageY+E[1].pageY);f.set(U,ce)}}function ye(){if(E.length===1)g.set(E[0].pageX,E[0].pageY);else{const U=.5*(E[0].pageX+E[1].pageX),ce=.5*(E[0].pageY+E[1].pageY);g.set(U,ce)}}function Ae(){const U=E[0].pageX-E[1].pageX,ce=E[0].pageY-E[1].pageY,me=Math.sqrt(U*U+ce*ce);S.set(0,me)}function Ne(){n.enableZoom&&Ae(),n.enablePan&&ye()}function Ze(){n.enableZoom&&Ae(),n.enableRotate&&le()}function Be(U){if(E.length==1)d.set(U.pageX,U.pageY);else{const me=ge(U),ee=.5*(U.pageX+me.x),Pe=.5*(U.pageY+me.y);d.set(ee,Pe)}v.subVectors(d,f).multiplyScalar(n.rotateSpeed);const ce=n.domElement;M(2*Math.PI*v.x/ce.clientHeight),D(2*Math.PI*v.y/ce.clientHeight),f.copy(d)}function kt(U){if(E.length===1)m.set(U.pageX,U.pageY);else{const ce=ge(U),me=.5*(U.pageX+ce.x),ee=.5*(U.pageY+ce.y);m.set(me,ee)}p.subVectors(m,g).multiplyScalar(n.panSpeed),B(p.x,p.y),g.copy(m)}function tt(U){const ce=ge(U),me=U.pageX-ce.x,ee=U.pageY-ce.y,Pe=Math.sqrt(me*me+ee*ee);y.set(0,Pe),T.set(0,Math.pow(y.y/S.y,n.zoomSpeed)),O(T.y),S.copy(y)}function j(U){n.enableZoom&&tt(U),n.enablePan&&kt(U)}function jt(U){n.enableZoom&&tt(U),n.enableRotate&&Be(U)}function Ue(U){n.enabled!==!1&&(E.length===0&&(n.domElement.setPointerCapture(U.pointerId),n.domElement.addEventListener("pointermove",je),n.domElement.addEventListener("pointerup",Fe)),w(U),U.pointerType==="touch"?Xt(U):yt(U))}function je(U){n.enabled!==!1&&(U.pointerType==="touch"?$t(U):$e(U))}function Fe(U){ie(U),E.length===0&&(n.domElement.releasePointerCapture(U.pointerId),n.domElement.removeEventListener("pointermove",je),n.domElement.removeEventListener("pointerup",Fe)),n.dispatchEvent(ip),r=i.NONE}function yt(U){let ce;switch(U.button){case 0:ce=n.mouseButtons.LEFT;break;case 1:ce=n.mouseButtons.MIDDLE;break;case 2:ce=n.mouseButtons.RIGHT;break;default:ce=-1}switch(ce){case gs.DOLLY:if(n.enableZoom===!1)return;$(U),r=i.DOLLY;break;case gs.ROTATE:if(U.ctrlKey||U.metaKey||U.shiftKey){if(n.enablePan===!1)return;J(U),r=i.PAN}else{if(n.enableRotate===!1)return;te(U),r=i.ROTATE}break;case gs.PAN:if(U.ctrlKey||U.metaKey||U.shiftKey){if(n.enableRotate===!1)return;te(U),r=i.ROTATE}else{if(n.enablePan===!1)return;J(U),r=i.PAN}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(Uc)}function $e(U){switch(r){case i.ROTATE:if(n.enableRotate===!1)return;oe(U);break;case i.DOLLY:if(n.enableZoom===!1)return;ue(U);break;case i.PAN:if(n.enablePan===!1)return;Te(U);break}}function qe(U){n.enabled===!1||n.enableZoom===!1||r!==i.NONE||(U.preventDefault(),n.dispatchEvent(Uc),Z(U),n.dispatchEvent(ip))}function ht(U){n.enabled===!1||n.enablePan===!1||fe(U)}function Xt(U){switch(_e(U),E.length){case 1:switch(n.touches.ONE){case _s.ROTATE:if(n.enableRotate===!1)return;le(),r=i.TOUCH_ROTATE;break;case _s.PAN:if(n.enablePan===!1)return;ye(),r=i.TOUCH_PAN;break;default:r=i.NONE}break;case 2:switch(n.touches.TWO){case _s.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Ne(),r=i.TOUCH_DOLLY_PAN;break;case _s.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Ze(),r=i.TOUCH_DOLLY_ROTATE;break;default:r=i.NONE}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(Uc)}function $t(U){switch(_e(U),r){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;Be(U),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;kt(U),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;j(U),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;jt(U),n.update();break;default:r=i.NONE}}function I(U){n.enabled!==!1&&U.preventDefault()}function w(U){E.push(U)}function ie(U){delete A[U.pointerId];for(let ce=0;ce<E.length;ce++)if(E[ce].pointerId==U.pointerId){E.splice(ce,1);return}}function _e(U){let ce=A[U.pointerId];ce===void 0&&(ce=new Xe,A[U.pointerId]=ce),ce.set(U.pageX,U.pageY)}function ge(U){const ce=U.pointerId===E[0].pointerId?E[1]:E[0];return A[ce.pointerId]}n.domElement.addEventListener("contextmenu",I),n.domElement.addEventListener("pointerdown",Ue),n.domElement.addEventListener("pointercancel",Fe),n.domElement.addEventListener("wheel",qe,{passive:!1}),this.update()}}const gl=class{constructor(){V(this,"subscribers");this.subscribers={}}static getInstance(){return this.instance===void 0&&(this.instance=new gl),this.instance}dispatch(e,t){const n=this.subscribers[e];n!==void 0&&Object.keys(n).forEach(i=>n[i](t))}register(e,t){const n=this.getNextId();return this.subscribers[e]||(this.subscribers[e]={}),this.subscribers[e][n]=t,{unregister:()=>{delete this.subscribers[e][n],Object.keys(this.subscribers[e]).length===0&&delete this.subscribers[e]}}}getNextId(){return gl.nextId++}};let Ua=gl;V(Ua,"nextId",0),V(Ua,"instance");const R1={isChrome:()=>/Chrome/.test(navigator.userAgent)&&/Google Inc/.test(navigator.userAgent),getHeapInfo:()=>{const s=window.performance,e={totalSize:0,usedSize:0,limitSize:0,allocated:0,consumed:0};return s&&s.memory&&(e.limitSize=s.memory.jsHeapSizeLimit,e.totalSize=s.memory.totalJSHeapSize,e.usedSize=s.memory.usedJSHeapSize,e.allocated=100*e.totalSize/e.limitSize,e.consumed=100*e.usedSize/e.limitSize),e}},ih=class{constructor(){V(this,"subscribers");this.subscribers={}}dispatch(e,t){const n=this.subscribers[e];n!==void 0&&Object.keys(n).forEach(i=>n[i](t))}register(e,t){const n=this.getNextId();return this.subscribers[e]||(this.subscribers[e]={}),this.subscribers[e][n]=t,{unregister:()=>{delete this.subscribers[e][n],Object.keys(this.subscribers[e]).length===0&&delete this.subscribers[e]}}}on(e,t){return this.register(e,t)}getNextId(){return ih.nextId++}};let Wa=ih;V(Wa,"nextId",0);class ol{static async loadCubeEnvTexture(e,t,n){const i=r=>r.includes("park")?"park":r.includes("bridge")?"bridge":r.includes("snow")?"snow":"unknown";return new Promise((r,a)=>{new PT(new _m(()=>{var o;(o=n==null?void 0:n.onStart)==null||o.call(n,`start downloading ${t.length} files from "${e}"`)},(o,l,c)=>{var h;const u=i(o);(h=n==null?void 0:n.onProgress)==null||h.call(n,o,l,c,u)},o=>{var c;const l=`Error loading ${o}`;console.error(l),a(l),(c=n==null?void 0:n.onError)==null||c.call(n,l,o)})).setPath(e).load(t,o=>{var l;r(o),(l=n==null?void 0:n.onDownloaded)==null||l.call(n,o),o.dispose()},o=>{console.log(o.loaded)})})}static async loadDefaultCubeEnvTexture(e,t){const n=["posx.jpg","negx.jpg","posy.jpg","negy.jpg","posz.jpg","negz.jpg"];return this.loadCubeEnvTexture(`textures/cube/${e}/`,n,t)}static async loadTexture(e){//! TODO: Add download manager and callbacks to track downloading states and progress.
return new Promise((t,n)=>{new ym().load(e,i=>{t(i)})})}}V(ol,"loadGLTF",(e,t)=>new Promise((n,i)=>{let r=0;new $T().load(e,a=>{var u;a.scene.traverse(h=>{h instanceof vn&&(h.castShadow=!0,h.receiveShadow=!0)});const o=[];a.scenes.forEach(h=>{o.push(h.name)});const c={glTF:a,info:{path:e,size:r,sceneNames:o}};(u=t==null?void 0:t.loaded)==null||u.call(t,c),n(c)},a=>{var l;r=a.total;const o={path:e,percent:a.loaded/a.total*100,loaded:a.loaded,total:a.total};(l=t==null?void 0:t.loading)==null||l.call(t,o)},a=>{var l;const o=`Error loading GLTF model - ${a}`;(l=t==null?void 0:t.error)==null||l.call(t,o),i(o),console.error()})}));class Em extends Wa{constructor(t,n){var i;super();V(this,"_renderingContainer");V(this,"_renderingCanvas");V(this,"_overlayContainer");V(this,"_overlayCanvas");V(this,"_backContainer");V(this,"_backCanvas");V(this,"_mousePosition",new Xe);V(this,"_isMouseDown",!1);V(this,"getRenderingCanvas",()=>this._renderingCanvas);V(this,"getContainer",()=>{if(this._renderingCanvas.parentElement===null)throw new Error(`The canvas "${this._renderingCanvas.id}" has no parent element`);return this._renderingCanvas.parentElement});V(this,"getCanvas",()=>this._renderingCanvas);V(this,"updateClientRects",()=>new Promise(t=>{requestAnimationFrame(()=>{this._renderingContainer.getBoundingClientRect(),this._overlayContainer.getBoundingClientRect(),this._backContainer.getBoundingClientRect(),t(this)})}));V(this,"getOverlayContainer",()=>this._overlayContainer);V(this,"getOverlayCanvas",()=>this._overlayCanvas);V(this,"getBackContainer",()=>this._backContainer);V(this,"getBackCanvas",()=>this._backCanvas);V(this,"getMousePosition",()=>this._mousePosition);V(this,"addOverlayContainer",t=>{const n=this.getContainer();if(n===null)throw new Error(`The canvas "${this._renderingCanvas.id}" has no parent element`);n.style.position!=="relative"&&(console.warn(`The display property of parent element "${n}" is changed to "relative"`),n.style.position="relative"),n.appendChild(t)});V(this,"createOverlayContainer",(t,n)=>Ft.createOverlayContainer(t||"overlay-container",n));V(this,"createOverlayCanvas",t=>Ft.createCanvas(t||"overlay-canvas"));V(this,"createBackContainer",(t,n)=>Ft.createBackContainer(t||"back-container",n));V(this,"createBackCanvas",t=>Ft.createCanvas(t||"back-canvas"));V(this,"initialCanvas2D",()=>new Promise(t=>{window.requestAnimationFrame(()=>{this._overlayContainer.getBoundingClientRect(),this._renderingContainer.getBoundingClientRect(),this._backContainer.getBoundingClientRect(),t(this._overlayCanvas)})}));V(this,"computeNormalizedMousePosition",(t,n)=>{const i=this._renderingCanvas.getBoundingClientRect(),r=t-i.left,a=n-i.top,o=+(r/i.width)*2-1,l=-(a/i.height)*2+1;return new Xe(o,l)});V(this,"getNormalizedMousePosition",()=>this.computeNormalizedMousePosition(this._mousePosition.x,this._mousePosition.y));V(this,"addEvents",()=>{const t=this._overlayContainer;t.addEventListener("mousedown",this.handleCanvasMouseDown),t.addEventListener("mouseup",this.handleCanvasMouseUp),t.addEventListener("mouseenter",this.handleCanvasMouseEnter),t.addEventListener("mousemove",this.handleCanvasMouseMove),t.addEventListener("mouseleave",this.handleCanvasMouseLeave),t.addEventListener("click",this.handleCanvasMouseClick),t.addEventListener("dblclick",this.handleCanvasMouseDblClick),t.addEventListener("keydown",this.handleCanvasKeyDown),t.addEventListener("keyup",this.handleCanvasKeyUp)});V(this,"removeEvents",()=>{const t=this._overlayContainer;t.removeEventListener("mousedown",this.handleCanvasMouseDown),t.removeEventListener("mouseup",this.handleCanvasMouseUp),t.removeEventListener("mouseenter",this.handleCanvasMouseEnter),t.removeEventListener("mousemove",this.handleCanvasMouseMove),t.removeEventListener("mouseleave",this.handleCanvasMouseLeave),t.removeEventListener("click",this.handleCanvasMouseClick),t.removeEventListener("dblclick",this.handleCanvasMouseDblClick),t.removeEventListener("keydown",this.handleCanvasKeyDown),t.removeEventListener("keyup",this.handleCanvasKeyUp)});V(this,"handleCanvasMouseDown",t=>{this._isMouseDown=!0,this.dispatch("mousedown",t)});V(this,"handleCanvasMouseUp",t=>{this._isMouseDown=!1,this.dispatch("mouseup",t)});V(this,"handleCanvasMouseEnter",t=>{this.dispatch("mouseenter",t)});V(this,"handleCanvasMouseMove",t=>{this._mousePosition.x=t.clientX,this._mousePosition.y=t.clientY,this.dispatch("mousemove",t),this._isMouseDown&&this.dispatch("mousedrag",t)});V(this,"handleCanvasMouseLeave",t=>{this.dispatch("mouseleave",t)});V(this,"handleCanvasMouseClick",t=>{this.dispatch("click",t)});V(this,"handleCanvasMouseDblClick",t=>{this.dispatch("dblclick",t)});V(this,"handleCanvasKeyDown",t=>{this.dispatch("keydown",t)});V(this,"handleCanvasKeyUp",t=>{this.dispatch("keyup",t)});V(this,"onMouseDown",t=>{this.on("mousedown",t)});V(this,"onMouseUp",t=>{this.on("mouseup",t)});V(this,"onMouseEnter",t=>{this.on("mouseenter",t)});V(this,"onMouseMove",t=>{this.on("mousemove",t)});V(this,"onMouseLeave",t=>{this.on("mouseleave",t)});V(this,"onMouseClick",t=>{this.on("click",t)});V(this,"onMouseDblClick",t=>{this.on("dblclick",t)});V(this,"onKeyDown",t=>{this.on("keydown",t)});V(this,"onKeyUp",t=>{this.on("keyup",t)});this.graphics=t,this._renderingContainer=Ft.getElementById(n),this._renderingCanvas=Ft.createCanvas(Ft.generateUUID("canvas3d")),this._renderingCanvas.setAttribute("copyright","@drsant"),this._renderingCanvas.style.zIndex="0",(i=this._renderingContainer)==null||i.appendChild(this._renderingCanvas),(this._renderingContainer===void 0||this._renderingContainer===null)&&console.error(`Cannot find the div container with id "${n}".`),this._renderingContainer.style.position="relative",this._overlayContainer=this.createOverlayContainer("overlay-container"),this._overlayCanvas=this.createOverlayCanvas("overlay-canvas"),this._renderingCanvas.setAttribute("copyright","@drsant"),this._backContainer=this.createBackContainer("back-container"),this._backCanvas=this.createBackCanvas("back-canvas"),this._renderingContainer.appendChild(this._overlayContainer),this._renderingContainer.appendChild(this._backContainer),this._overlayContainer.appendChild(this._overlayCanvas),this._backContainer.appendChild(this._backCanvas),this._overlayContainer.style.zIndex=this._overlayCanvas.style.zIndex="999",this._renderingContainer.style.zIndex=this._renderingCanvas.style.zIndex="0",this._backContainer.style.zIndex=this._backCanvas.style.zIndex="-999",this.updateClientRects(),this.addEvents()}dispose(){var t;this.removeEvents(),(t=this.getRenderingCanvas().parentElement)==null||t.removeChild(this.getRenderingCanvas()),this._overlayContainer.removeChild(this._overlayCanvas)}}V(Em,"version","v1.0.0");class C1{constructor(e){V(this,"_disMouseEnter",!1);V(this,"_disMouseLeave",!1);V(this,"_target");V(this,"_callbackOptions");V(this,"_raycaster",new jT);V(this,"sense",(e,t)=>{if(e==null){const n=this.graphics.getMeshes();this._target=n[0],console.log(`%cThe target is ${e}, take the first mesh as target.`,"color: yellow")}else typeof e=="string"&&(this._target=this.graphics.getObjectByName(e),console.log(`%cThe target name is ${e}, take it from the main scene.`,"color: yellow"));this._callbackOptions=t});V(this,"getIntersects",e=>{const t=this.graphics,i=t.getGraphicsCanvas().getNormalizedMousePosition();this._raycaster.setFromCamera(i,t.camera);const r=this._raycaster.intersectObjects(t.scene.children,!0);if(r.length>0&&r[0].object.name===(e==null?void 0:e.name))return r});this.graphics=e;let t=!1,n=0,i;const r=this.graphics.getGraphicsCanvas();r.on("mousemove",a=>{var c,u,h,f,d,v,g;const o=r.getNormalizedMousePosition();this._raycaster.setFromCamera(o,this.graphics.camera);const l=this._raycaster.intersectObjects(this.graphics.scene.children,!0);t=l.length>0&&l[0].object.name===((c=this._target)==null?void 0:c.name),t&&(i=l[0],(h=(u=this._callbackOptions)==null?void 0:u.mouseMove)==null||h.call(u,i),r.dispatch("ray-move",i)),t&&this._disMouseEnter===!1?(this._disMouseEnter=!0,this._disMouseLeave=!1,n+=1,(d=(f=this._callbackOptions)==null?void 0:f.mouseEnter)==null||d.call(f,i),r.dispatch("ray-enter",i)):t===!1&&n>0&&this._disMouseLeave===!1&&(this._disMouseEnter=!1,this._disMouseLeave=!0,(g=(v=this._callbackOptions)==null?void 0:v.mouseLeave)==null||g.call(v,i),r.dispatch("ray-leave",this._target))}),r.on("mousedown",a=>{var l,c;const o=this.getIntersects(this._target);o&&((c=(l=this._callbackOptions)==null?void 0:l.mouseDown)==null||c.call(l,o[0]),r.dispatch("ray-mousedown",this._target))}),r.on("mouseup",a=>{var l,c;const o=this.getIntersects(this._target);o&&((c=(l=this._callbackOptions)==null?void 0:l.mouseUp)==null||c.call(l,o[0]),r.dispatch("ray-mouseup",this._target))}),r.on("click",a=>{var l,c;const o=this.getIntersects(this._target);o&&((c=(l=this._callbackOptions)==null?void 0:l.mouseClick)==null||c.call(l,o[0]),r.dispatch("ray-click",this._target))}),r.on("dblclick",a=>{var l,c;const o=this.getIntersects(this._target);o&&((c=(l=this._callbackOptions)==null?void 0:l.mouseDblClick)==null||c.call(l,o[0]),r.dispatch("ray-dblclick",this._target))}),r.on("mousedrag",a=>{var l,c;const o=this.getIntersects(this._target);o&&((c=(l=this._callbackOptions)==null?void 0:l.mouseDrag)==null||c.call(l,o[0]),r.dispatch("ray-drag",this._target))})}}const L1=[{type:"env",name:"park"},{type:"env",name:"bridge"},{type:"env",name:"snow"},{type:"gltf",name:"cube1.glb"}],At=class{};let Rn=At;V(Rn,"envMaps",[]),V(Rn,"glTFs",[]),V(Rn,"resources"),V(Rn,"resourceList",L1),V(Rn,"inprogress",!1),V(Rn,"dispose",()=>{At.resources&&(At.resources.loaded=!1,At.inprogress=!1,At.resources.envMaps.forEach(e=>{e.dispose()}),At.resources.glTFs.forEach(e=>{e.scenes.forEach(t=>{t.traverse(n=>{n instanceof vn&&n.geometry.dispose(),n instanceof vi&&(n.dispose(),console.log(`dispose material ${n.uuid}`))})})}),At.resources.envMaps=[],At.resources.glTFs=[])}),V(Rn,"waitResource",async e=>new Promise(t=>{let n=0;const i=setInterval(()=>{console.log(`${e} waiting...${++n}`),At.resources.loaded===!0&&(clearInterval(i),console.log(`%c${e} resolving...`,"color: lime"),t())},100)})),V(Rn,"downloadResources",async(e,t,n)=>(At.resources={envMaps:At.envMaps,glTFs:At.glTFs,loaded:!1},console.log(`%c${e} is try to download`,"color: cyan"),At.inprogress===!0&&(console.log("%creject, the previous caller is in progress...","color: yellow"),await At.waitResource(e)),At.resources.loaded===!0?new Promise(i=>{i(At.resources)}):(At.inprogress=!0,new Promise((i,r)=>{let a=0;const o=()=>{a+=1,a>=At.resourceList.length&&(At.resources.envMaps=At.envMaps,At.resources.loaded=!0,At.inprogress=!1,i(At.resources))};At.resourceList.forEach(async l=>{l.type==="env"?ol.loadDefaultCubeEnvTexture(l.name,t).then(c=>{At.envMaps.push(c),o()}).catch(()=>r(`error downloading ${l.type}.${l.name}`)):l.type==="gltf"&&ol.loadGLTF(l.name,n).then(c=>{const u=c.glTF;At.glTFs.push(u),console.log(`%c${l.name} contains ${u.scenes.length} scenes:`,"color: lime"),u.scenes.forEach(h=>{console.log(`%c  + ${h.name}`,"color: cyan")}),o()}).catch(()=>r(`error downloading ${l.type}.${l.name}`))})}))));class P1 extends Wa{constructor(t,n){super();V(this,"scene",new wd);V(this,"camera",new Cn);V(this,"renderer",new eu);V(this,"controls");V(this,"isRunning",!0);V(this,"frameCnt",0);V(this,"graphicsCanvas");V(this,"loadGLTF",async(t,n)=>await ol.loadGLTF(t,n));V(this,"useScene",(t,n)=>{n=n||0,n=n>=t.scenes.length?t.scenes.length-1:n,n=n<0?t.scenes.length-1:n;const i=t.scenes[n].clone();return t.scenes[n].traverse(r=>{i.add(r.clone())}),this.scene.add(i),i});V(this,"clearScene",()=>{this.scene.traverse(t=>{var n,i,r,a,o,l,c;this.scene.remove(t),t instanceof vn&&(t.geometry.dispose(),(n=t.material.map)==null||n.dispose(),(i=t.material.aoMap)==null||i.dispose(),(r=t.material.alphaMap)==null||r.dispose(),(a=t.material.envMap)==null||a.dispose(),(o=t.material.lightMap)==null||o.dispose(),(l=t.material.specularMap)==null||l.dispose(),(c=t.material.normalMap)==null||c.dispose(),t.material.dispose())})});V(this,"update",t=>{var n;this.isRunning===!1&&this.frameCnt>0||(this.frameCnt+=1,(n=this.controls)==null||n.update(),this.renderer.render(this.scene,this.camera))});V(this,"initElements",async t=>{var i,r;if((i=this.graphicsCanvas)==null||i.dispose(),this.graphicsCanvas=new Em(this,t),this.graphicsCanvas===null||this.graphicsCanvas===void 0)throw new Error("Cannot create the GraphicsCanvas!");const n=this.graphicsCanvas.getRenderingCanvas();this.renderer.dispose(),this.renderer=new eu({canvas:n,antialias:!0}),this.renderer.setClearAlpha(0),this.renderer.setClearColor(0,0),this.renderer.setSize(n.width,n.height),this.renderer.setPixelRatio(n.width/n.height),this.camera.aspect=n.width/n.height,this.camera.updateProjectionMatrix(),(r=this.controls)==null||r.dispose(),this.controls=new w1(this.camera,this.graphicsCanvas.getOverlayContainer()),window.addEventListener("resize",()=>{const a={width:window.innerWidth,height:window.innerHeight};this.dispatch("resize",a),console.log({width:window.innerWidth,height:window.innerHeight})})});V(this,"onResize",t=>{this.on("resize",t)});V(this,"setSize",async(t,n)=>{const i=this.getGraphicsCanvas().getRenderingCanvas();i.width=t,i.height=n;const r=await this.getGraphicsCanvas().getOverlayCanvas();r.width=t,r.height=n;const a=await this.getGraphicsCanvas().getBackCanvas();a.width=t,a.height=n,this.renderer.setSize(i.width,i.height),this.renderer.setPixelRatio(i.width/i.height),this.camera.aspect=i.width/i.height,this.camera.updateProjectionMatrix()});V(this,"setSize169",()=>{this.setSize(window.innerWidth,window.innerWidth*9/16)});V(this,"getObjectByName",(t,n)=>{const i=n||this.scene;let r;return i.traverse(a=>{a.name==t&&(a instanceof vn||a instanceof mr||a instanceof wd)&&(r=a)}),r});V(this,"getMeshes",t=>{const n=[];return t=t||this.scene,t.traverse(i=>{i instanceof vn&&n.push(i)}),n});V(this,"getCamera",()=>this.camera);V(this,"getRenderer",()=>this.renderer);V(this,"getScene",()=>this.scene);V(this,"getRenderingCanvas",()=>this.renderer.domElement);V(this,"getGraphicsCanvas",()=>this.graphicsCanvas);V(this,"createRaySensor",()=>new C1(this));V(this,"setBackground",t=>{this.scene.background=t});V(this,"clearBackground",()=>{this.scene.background=null});V(this,"setBackgroundBlurriness",t=>{this.scene.backgroundBlurriness=t});V(this,"setBackgroundIntensity",t=>{this.scene.backgroundIntensity=t});V(this,"setEnvironment",t=>{this.scene.environment=t});V(this,"clearEnvironment",()=>{this.scene.environment=null});V(this,"getOverlayContainer",()=>{var t;return(t=this.graphicsCanvas)==null?void 0:t.getOverlayContainer()});V(this,"getOverlayCanvas",()=>{var t;return(t=this.graphicsCanvas)==null?void 0:t.getOverlayCanvas()});V(this,"getBackContainer",()=>{var t;return(t=this.graphicsCanvas)==null?void 0:t.getBackContainer()});V(this,"getBackCanvas",()=>{var t;return(t=this.graphicsCanvas)==null?void 0:t.getBackCanvas()});V(this,"nextEnvironment",(t=!0)=>{const n=Rn.resources.envMaps,i=r=>{this.scene.environment=r,t===!0&&(this.scene.background=r)};if(this.scene.environment==null)i(n[0]);else{const r=n.filter(o=>o==this.scene.environment)[0];let a=n.indexOf(r);a=(a+1)%n.length,i(n[a])}});V(this,"previousEnvironment",(t=!0)=>{const n=Rn.resources.envMaps,i=r=>{this.scene.environment=r,t===!0&&(this.scene.background=r)};if(this.scene.environment==null)i(n[n.length-1]);else{const r=n.filter(o=>o==this.scene.environment)[0];let a=n.indexOf(r);a=a-1<0?n.length-1:a-1,i(n[a])}});this.engine=t,this.initElements(n),this.engine.addCallback(this.update),this.camera.position.set(0,0,5),this.camera.lookAt(new G(0));const i=new Mm(16777215,2);i.position.set(2,5,2),this.scene.add(i),this.scene.add(new FT(16777215,1))}start(){this.isRunning=!0}stop(){this.isRunning=!1}}var D1=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function I1(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Tm={exports:{}};/**
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
 */(function(s,e){(function(t,n){s.exports=n()})(D1,function(){for(var t=function(_,x,b){return x===void 0&&(x=0),b===void 0&&(b=1),_<x?x:_>b?b:_},n=t,i=function(_){_._clipped=!1,_._unclipped=_.slice(0);for(var x=0;x<=3;x++)x<3?((_[x]<0||_[x]>255)&&(_._clipped=!0),_[x]=n(_[x],0,255)):x===3&&(_[x]=n(_[x],0,1));return _},r={},a=0,o=["Boolean","Number","String","Function","Array","Date","RegExp","Undefined","Null"];a<o.length;a+=1){var l=o[a];r["[object "+l+"]"]=l.toLowerCase()}var c=function(_){return r[Object.prototype.toString.call(_)]||"object"},u=c,h=function(_,x){return x===void 0&&(x=null),_.length>=3?Array.prototype.slice.call(_):u(_[0])=="object"&&x?x.split("").filter(function(b){return _[0][b]!==void 0}).map(function(b){return _[0][b]}):_[0]},f=c,d=function(_){if(_.length<2)return null;var x=_.length-1;return f(_[x])=="string"?_[x].toLowerCase():null},v=Math.PI,g={clip_rgb:i,limit:t,type:c,unpack:h,last:d,PI:v,TWOPI:v*2,PITHIRD:v/3,DEG2RAD:v/180,RAD2DEG:180/v},m={format:{},autodetect:[]},p=g.last,S=g.clip_rgb,y=g.type,T=m,E=function(){for(var x=[],b=arguments.length;b--;)x[b]=arguments[b];var P=this;if(y(x[0])==="object"&&x[0].constructor&&x[0].constructor===this.constructor)return x[0];var F=p(x),k=!1;if(!F){k=!0,T.sorted||(T.autodetect=T.autodetect.sort(function(he,Se){return Se.p-he.p}),T.sorted=!0);for(var N=0,X=T.autodetect;N<X.length;N+=1){var Y=X[N];if(F=Y.test.apply(Y,x),F)break}}if(T.format[F]){var ae=T.format[F].apply(null,k?x:x.slice(0,-1));P._rgb=S(ae)}else throw new Error("unknown format: "+x);P._rgb.length===3&&P._rgb.push(1)};E.prototype.toString=function(){return y(this.hex)=="function"?this.hex():"["+this._rgb.join(",")+"]"};var A=E,R=function(){for(var _=[],x=arguments.length;x--;)_[x]=arguments[x];return new(Function.prototype.bind.apply(R.Color,[null].concat(_)))};R.Color=A,R.version="2.4.2";var L=R,M=g.unpack,D=Math.max,W=function(){for(var _=[],x=arguments.length;x--;)_[x]=arguments[x];var b=M(_,"rgb"),P=b[0],F=b[1],k=b[2];P=P/255,F=F/255,k=k/255;var N=1-D(P,D(F,k)),X=N<1?1/(1-N):0,Y=(1-P-N)*X,ae=(1-F-N)*X,he=(1-k-N)*X;return[Y,ae,he,N]},ne=W,B=g.unpack,O=function(){for(var _=[],x=arguments.length;x--;)_[x]=arguments[x];_=B(_,"cmyk");var b=_[0],P=_[1],F=_[2],k=_[3],N=_.length>4?_[4]:1;return k===1?[0,0,0,N]:[b>=1?0:255*(1-b)*(1-k),P>=1?0:255*(1-P)*(1-k),F>=1?0:255*(1-F)*(1-k),N]},H=O,te=L,$=A,J=m,oe=g.unpack,ue=g.type,Te=ne;$.prototype.cmyk=function(){return Te(this._rgb)},te.cmyk=function(){for(var _=[],x=arguments.length;x--;)_[x]=arguments[x];return new(Function.prototype.bind.apply($,[null].concat(_,["cmyk"])))},J.format.cmyk=H,J.autodetect.push({p:2,test:function(){for(var _=[],x=arguments.length;x--;)_[x]=arguments[x];if(_=oe(_,"cmyk"),ue(_)==="array"&&_.length===4)return"cmyk"}});var Z=g.unpack,fe=g.last,le=function(_){return Math.round(_*100)/100},ye=function(){for(var _=[],x=arguments.length;x--;)_[x]=arguments[x];var b=Z(_,"hsla"),P=fe(_)||"lsa";return b[0]=le(b[0]||0),b[1]=le(b[1]*100)+"%",b[2]=le(b[2]*100)+"%",P==="hsla"||b.length>3&&b[3]<1?(b[3]=b.length>3?b[3]:1,P="hsla"):b.length=3,P+"("+b.join(",")+")"},Ae=ye,Ne=g.unpack,Ze=function(){for(var _=[],x=arguments.length;x--;)_[x]=arguments[x];_=Ne(_,"rgba");var b=_[0],P=_[1],F=_[2];b/=255,P/=255,F/=255;var k=Math.min(b,P,F),N=Math.max(b,P,F),X=(N+k)/2,Y,ae;return N===k?(Y=0,ae=Number.NaN):Y=X<.5?(N-k)/(N+k):(N-k)/(2-N-k),b==N?ae=(P-F)/(N-k):P==N?ae=2+(F-b)/(N-k):F==N&&(ae=4+(b-P)/(N-k)),ae*=60,ae<0&&(ae+=360),_.length>3&&_[3]!==void 0?[ae,Y,X,_[3]]:[ae,Y,X]},Be=Ze,kt=g.unpack,tt=g.last,j=Ae,jt=Be,Ue=Math.round,je=function(){for(var _=[],x=arguments.length;x--;)_[x]=arguments[x];var b=kt(_,"rgba"),P=tt(_)||"rgb";return P.substr(0,3)=="hsl"?j(jt(b),P):(b[0]=Ue(b[0]),b[1]=Ue(b[1]),b[2]=Ue(b[2]),(P==="rgba"||b.length>3&&b[3]<1)&&(b[3]=b.length>3?b[3]:1,P="rgba"),P+"("+b.slice(0,P==="rgb"?3:4).join(",")+")")},Fe=je,yt=g.unpack,$e=Math.round,qe=function(){for(var _,x=[],b=arguments.length;b--;)x[b]=arguments[b];x=yt(x,"hsl");var P=x[0],F=x[1],k=x[2],N,X,Y;if(F===0)N=X=Y=k*255;else{var ae=[0,0,0],he=[0,0,0],Se=k<.5?k*(1+F):k+F-k*F,de=2*k-Se,Le=P/360;ae[0]=Le+1/3,ae[1]=Le,ae[2]=Le-1/3;for(var we=0;we<3;we++)ae[we]<0&&(ae[we]+=1),ae[we]>1&&(ae[we]-=1),6*ae[we]<1?he[we]=de+(Se-de)*6*ae[we]:2*ae[we]<1?he[we]=Se:3*ae[we]<2?he[we]=de+(Se-de)*(2/3-ae[we])*6:he[we]=de;_=[$e(he[0]*255),$e(he[1]*255),$e(he[2]*255)],N=_[0],X=_[1],Y=_[2]}return x.length>3?[N,X,Y,x[3]]:[N,X,Y,1]},ht=qe,Xt=ht,$t=m,I=/^rgb\(\s*(-?\d+),\s*(-?\d+)\s*,\s*(-?\d+)\s*\)$/,w=/^rgba\(\s*(-?\d+),\s*(-?\d+)\s*,\s*(-?\d+)\s*,\s*([01]|[01]?\.\d+)\)$/,ie=/^rgb\(\s*(-?\d+(?:\.\d+)?)%,\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*\)$/,_e=/^rgba\(\s*(-?\d+(?:\.\d+)?)%,\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/,ge=/^hsl\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*\)$/,U=/^hsla\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/,ce=Math.round,me=function(_){_=_.toLowerCase().trim();var x;if($t.format.named)try{return $t.format.named(_)}catch{}if(x=_.match(I)){for(var b=x.slice(1,4),P=0;P<3;P++)b[P]=+b[P];return b[3]=1,b}if(x=_.match(w)){for(var F=x.slice(1,5),k=0;k<4;k++)F[k]=+F[k];return F}if(x=_.match(ie)){for(var N=x.slice(1,4),X=0;X<3;X++)N[X]=ce(N[X]*2.55);return N[3]=1,N}if(x=_.match(_e)){for(var Y=x.slice(1,5),ae=0;ae<3;ae++)Y[ae]=ce(Y[ae]*2.55);return Y[3]=+Y[3],Y}if(x=_.match(ge)){var he=x.slice(1,4);he[1]*=.01,he[2]*=.01;var Se=Xt(he);return Se[3]=1,Se}if(x=_.match(U)){var de=x.slice(1,4);de[1]*=.01,de[2]*=.01;var Le=Xt(de);return Le[3]=+x[4],Le}};me.test=function(_){return I.test(_)||w.test(_)||ie.test(_)||_e.test(_)||ge.test(_)||U.test(_)};var ee=me,Pe=L,De=A,Ie=m,Re=g.type,Ee=Fe,ze=ee;De.prototype.css=function(_){return Ee(this._rgb,_)},Pe.css=function(){for(var _=[],x=arguments.length;x--;)_[x]=arguments[x];return new(Function.prototype.bind.apply(De,[null].concat(_,["css"])))},Ie.format.css=ze,Ie.autodetect.push({p:5,test:function(_){for(var x=[],b=arguments.length-1;b-- >0;)x[b]=arguments[b+1];if(!x.length&&Re(_)==="string"&&ze.test(_))return"css"}});var Mt=A,z=L,Me=m,Q=g.unpack;Me.format.gl=function(){for(var _=[],x=arguments.length;x--;)_[x]=arguments[x];var b=Q(_,"rgba");return b[0]*=255,b[1]*=255,b[2]*=255,b},z.gl=function(){for(var _=[],x=arguments.length;x--;)_[x]=arguments[x];return new(Function.prototype.bind.apply(Mt,[null].concat(_,["gl"])))},Mt.prototype.gl=function(){var _=this._rgb;return[_[0]/255,_[1]/255,_[2]/255,_[3]]};var ve=g.unpack,be=function(){for(var _=[],x=arguments.length;x--;)_[x]=arguments[x];var b=ve(_,"rgb"),P=b[0],F=b[1],k=b[2],N=Math.min(P,F,k),X=Math.max(P,F,k),Y=X-N,ae=Y*100/255,he=N/(255-Y)*100,Se;return Y===0?Se=Number.NaN:(P===X&&(Se=(F-k)/Y),F===X&&(Se=2+(k-P)/Y),k===X&&(Se=4+(P-F)/Y),Se*=60,Se<0&&(Se+=360)),[Se,ae,he]},ft=be,It=g.unpack,qt=Math.floor,Ii=function(){for(var _,x,b,P,F,k,N=[],X=arguments.length;X--;)N[X]=arguments[X];N=It(N,"hcg");var Y=N[0],ae=N[1],he=N[2],Se,de,Le;he=he*255;var we=ae*255;if(ae===0)Se=de=Le=he;else{Y===360&&(Y=0),Y>360&&(Y-=360),Y<0&&(Y+=360),Y/=60;var nt=qt(Y),lt=Y-nt,dt=he*(1-ae),_t=dt+we*(1-lt),pn=dt+we*lt,ln=dt+we;switch(nt){case 0:_=[ln,pn,dt],Se=_[0],de=_[1],Le=_[2];break;case 1:x=[_t,ln,dt],Se=x[0],de=x[1],Le=x[2];break;case 2:b=[dt,ln,pn],Se=b[0],de=b[1],Le=b[2];break;case 3:P=[dt,_t,ln],Se=P[0],de=P[1],Le=P[2];break;case 4:F=[pn,dt,ln],Se=F[0],de=F[1],Le=F[2];break;case 5:k=[ln,dt,_t],Se=k[0],de=k[1],Le=k[2];break}}return[Se,de,Le,N.length>3?N[3]:1]},Ut=Ii,$n=g.unpack,fn=g.type,uo=L,ga=A,ho=m,ss=ft;ga.prototype.hcg=function(){return ss(this._rgb)},uo.hcg=function(){for(var _=[],x=arguments.length;x--;)_[x]=arguments[x];return new(Function.prototype.bind.apply(ga,[null].concat(_,["hcg"])))},ho.format.hcg=Ut,ho.autodetect.push({p:1,test:function(){for(var _=[],x=arguments.length;x--;)_[x]=arguments[x];if(_=$n(_,"hcg"),fn(_)==="array"&&_.length===3)return"hcg"}});var fo=g.unpack,as=g.last,Ar=Math.round,Tl=function(){for(var _=[],x=arguments.length;x--;)_[x]=arguments[x];var b=fo(_,"rgba"),P=b[0],F=b[1],k=b[2],N=b[3],X=as(_)||"auto";N===void 0&&(N=1),X==="auto"&&(X=N<1?"rgba":"rgb"),P=Ar(P),F=Ar(F),k=Ar(k);var Y=P<<16|F<<8|k,ae="000000"+Y.toString(16);ae=ae.substr(ae.length-6);var he="0"+Ar(N*255).toString(16);switch(he=he.substr(he.length-2),X.toLowerCase()){case"rgba":return"#"+ae+he;case"argb":return"#"+he+ae;default:return"#"+ae}},po=Tl,Al=/^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/,C=/^#?([A-Fa-f0-9]{8}|[A-Fa-f0-9]{4})$/,K=function(_){if(_.match(Al)){(_.length===4||_.length===7)&&(_=_.substr(1)),_.length===3&&(_=_.split(""),_=_[0]+_[0]+_[1]+_[1]+_[2]+_[2]);var x=parseInt(_,16),b=x>>16,P=x>>8&255,F=x&255;return[b,P,F,1]}if(_.match(C)){(_.length===5||_.length===9)&&(_=_.substr(1)),_.length===4&&(_=_.split(""),_=_[0]+_[0]+_[1]+_[1]+_[2]+_[2]+_[3]+_[3]);var k=parseInt(_,16),N=k>>24&255,X=k>>16&255,Y=k>>8&255,ae=Math.round((k&255)/255*100)/100;return[N,X,Y,ae]}throw new Error("unknown hex color: "+_)},re=K,q=L,se=A,Ce=g.type,Oe=m,He=po;se.prototype.hex=function(_){return He(this._rgb,_)},q.hex=function(){for(var _=[],x=arguments.length;x--;)_[x]=arguments[x];return new(Function.prototype.bind.apply(se,[null].concat(_,["hex"])))},Oe.format.hex=re,Oe.autodetect.push({p:4,test:function(_){for(var x=[],b=arguments.length-1;b-- >0;)x[b]=arguments[b+1];if(!x.length&&Ce(_)==="string"&&[3,4,5,6,7,8,9].indexOf(_.length)>=0)return"hex"}});var Ve=g.unpack,Qe=g.TWOPI,Ye=Math.min,Ke=Math.sqrt,Tt=Math.acos,Bt=function(){for(var _=[],x=arguments.length;x--;)_[x]=arguments[x];var b=Ve(_,"rgb"),P=b[0],F=b[1],k=b[2];P/=255,F/=255,k/=255;var N,X=Ye(P,F,k),Y=(P+F+k)/3,ae=Y>0?1-X/Y:0;return ae===0?N=NaN:(N=(P-F+(P-k))/2,N/=Ke((P-F)*(P-F)+(P-k)*(F-k)),N=Tt(N),k>F&&(N=Qe-N),N/=Qe),[N*360,ae,Y]},Bn=Bt,ai=g.unpack,Nt=g.limit,Je=g.TWOPI,wr=g.PITHIRD,Dt=Math.cos,Ui=function(){for(var _=[],x=arguments.length;x--;)_[x]=arguments[x];_=ai(_,"hsi");var b=_[0],P=_[1],F=_[2],k,N,X;return isNaN(b)&&(b=0),isNaN(P)&&(P=0),b>360&&(b-=360),b<0&&(b+=360),b/=360,b<1/3?(X=(1-P)/3,k=(1+P*Dt(Je*b)/Dt(wr-Je*b))/3,N=1-(X+k)):b<2/3?(b-=1/3,k=(1-P)/3,N=(1+P*Dt(Je*b)/Dt(wr-Je*b))/3,X=1-(k+N)):(b-=2/3,N=(1-P)/3,X=(1+P*Dt(Je*b)/Dt(wr-Je*b))/3,k=1-(N+X)),k=Nt(F*k*3),N=Nt(F*N*3),X=Nt(F*X*3),[k*255,N*255,X*255,_.length>3?_[3]:1]},mo=Ui,Rr=g.unpack,_a=g.type,dn=L,yi=A,os=m,Tn=Bn;yi.prototype.hsi=function(){return Tn(this._rgb)},dn.hsi=function(){for(var _=[],x=arguments.length;x--;)_[x]=arguments[x];return new(Function.prototype.bind.apply(yi,[null].concat(_,["hsi"])))},os.format.hsi=mo,os.autodetect.push({p:2,test:function(){for(var _=[],x=arguments.length;x--;)_[x]=arguments[x];if(_=Rr(_,"hsi"),_a(_)==="array"&&_.length===3)return"hsi"}});var va=g.unpack,wl=g.type,go=L,rh=A,sh=m,wg=Be;rh.prototype.hsl=function(){return wg(this._rgb)},go.hsl=function(){for(var _=[],x=arguments.length;x--;)_[x]=arguments[x];return new(Function.prototype.bind.apply(rh,[null].concat(_,["hsl"])))},sh.format.hsl=ht,sh.autodetect.push({p:2,test:function(){for(var _=[],x=arguments.length;x--;)_[x]=arguments[x];if(_=va(_,"hsl"),wl(_)==="array"&&_.length===3)return"hsl"}});var Rg=g.unpack,Cg=Math.min,Lg=Math.max,Pg=function(){for(var _=[],x=arguments.length;x--;)_[x]=arguments[x];_=Rg(_,"rgb");var b=_[0],P=_[1],F=_[2],k=Cg(b,P,F),N=Lg(b,P,F),X=N-k,Y,ae,he;return he=N/255,N===0?(Y=Number.NaN,ae=0):(ae=X/N,b===N&&(Y=(P-F)/X),P===N&&(Y=2+(F-b)/X),F===N&&(Y=4+(b-P)/X),Y*=60,Y<0&&(Y+=360)),[Y,ae,he]},Dg=Pg,Ig=g.unpack,Ug=Math.floor,Ng=function(){for(var _,x,b,P,F,k,N=[],X=arguments.length;X--;)N[X]=arguments[X];N=Ig(N,"hsv");var Y=N[0],ae=N[1],he=N[2],Se,de,Le;if(he*=255,ae===0)Se=de=Le=he;else{Y===360&&(Y=0),Y>360&&(Y-=360),Y<0&&(Y+=360),Y/=60;var we=Ug(Y),nt=Y-we,lt=he*(1-ae),dt=he*(1-ae*nt),_t=he*(1-ae*(1-nt));switch(we){case 0:_=[he,_t,lt],Se=_[0],de=_[1],Le=_[2];break;case 1:x=[dt,he,lt],Se=x[0],de=x[1],Le=x[2];break;case 2:b=[lt,he,_t],Se=b[0],de=b[1],Le=b[2];break;case 3:P=[lt,dt,he],Se=P[0],de=P[1],Le=P[2];break;case 4:F=[_t,lt,he],Se=F[0],de=F[1],Le=F[2];break;case 5:k=[he,lt,dt],Se=k[0],de=k[1],Le=k[2];break}}return[Se,de,Le,N.length>3?N[3]:1]},Og=Ng,Fg=g.unpack,kg=g.type,Bg=L,ah=A,oh=m,zg=Dg;ah.prototype.hsv=function(){return zg(this._rgb)},Bg.hsv=function(){for(var _=[],x=arguments.length;x--;)_[x]=arguments[x];return new(Function.prototype.bind.apply(ah,[null].concat(_,["hsv"])))},oh.format.hsv=Og,oh.autodetect.push({p:2,test:function(){for(var _=[],x=arguments.length;x--;)_[x]=arguments[x];if(_=Fg(_,"hsv"),kg(_)==="array"&&_.length===3)return"hsv"}});var _o={Kn:18,Xn:.95047,Yn:1,Zn:1.08883,t0:.137931034,t1:.206896552,t2:.12841855,t3:.008856452},ls=_o,Hg=g.unpack,lh=Math.pow,Gg=function(){for(var _=[],x=arguments.length;x--;)_[x]=arguments[x];var b=Hg(_,"rgb"),P=b[0],F=b[1],k=b[2],N=Vg(P,F,k),X=N[0],Y=N[1],ae=N[2],he=116*Y-16;return[he<0?0:he,500*(X-Y),200*(Y-ae)]},Rl=function(_){return(_/=255)<=.04045?_/12.92:lh((_+.055)/1.055,2.4)},Cl=function(_){return _>ls.t3?lh(_,1/3):_/ls.t2+ls.t0},Vg=function(_,x,b){_=Rl(_),x=Rl(x),b=Rl(b);var P=Cl((.4124564*_+.3575761*x+.1804375*b)/ls.Xn),F=Cl((.2126729*_+.7151522*x+.072175*b)/ls.Yn),k=Cl((.0193339*_+.119192*x+.9503041*b)/ls.Zn);return[P,F,k]},ch=Gg,cs=_o,Wg=g.unpack,Xg=Math.pow,qg=function(){for(var _=[],x=arguments.length;x--;)_[x]=arguments[x];_=Wg(_,"lab");var b=_[0],P=_[1],F=_[2],k,N,X,Y,ae,he;return N=(b+16)/116,k=isNaN(P)?N:N+P/500,X=isNaN(F)?N:N-F/200,N=cs.Yn*Pl(N),k=cs.Xn*Pl(k),X=cs.Zn*Pl(X),Y=Ll(3.2404542*k-1.5371385*N-.4985314*X),ae=Ll(-.969266*k+1.8760108*N+.041556*X),he=Ll(.0556434*k-.2040259*N+1.0572252*X),[Y,ae,he,_.length>3?_[3]:1]},Ll=function(_){return 255*(_<=.00304?12.92*_:1.055*Xg(_,1/2.4)-.055)},Pl=function(_){return _>cs.t1?_*_*_:cs.t2*(_-cs.t0)},uh=qg,Yg=g.unpack,jg=g.type,$g=L,hh=A,fh=m,Kg=ch;hh.prototype.lab=function(){return Kg(this._rgb)},$g.lab=function(){for(var _=[],x=arguments.length;x--;)_[x]=arguments[x];return new(Function.prototype.bind.apply(hh,[null].concat(_,["lab"])))},fh.format.lab=uh,fh.autodetect.push({p:2,test:function(){for(var _=[],x=arguments.length;x--;)_[x]=arguments[x];if(_=Yg(_,"lab"),jg(_)==="array"&&_.length===3)return"lab"}});var Zg=g.unpack,Jg=g.RAD2DEG,Qg=Math.sqrt,e_=Math.atan2,t_=Math.round,n_=function(){for(var _=[],x=arguments.length;x--;)_[x]=arguments[x];var b=Zg(_,"lab"),P=b[0],F=b[1],k=b[2],N=Qg(F*F+k*k),X=(e_(k,F)*Jg+360)%360;return t_(N*1e4)===0&&(X=Number.NaN),[P,N,X]},dh=n_,i_=g.unpack,r_=ch,s_=dh,a_=function(){for(var _=[],x=arguments.length;x--;)_[x]=arguments[x];var b=i_(_,"rgb"),P=b[0],F=b[1],k=b[2],N=r_(P,F,k),X=N[0],Y=N[1],ae=N[2];return s_(X,Y,ae)},o_=a_,l_=g.unpack,c_=g.DEG2RAD,u_=Math.sin,h_=Math.cos,f_=function(){for(var _=[],x=arguments.length;x--;)_[x]=arguments[x];var b=l_(_,"lch"),P=b[0],F=b[1],k=b[2];return isNaN(k)&&(k=0),k=k*c_,[P,h_(k)*F,u_(k)*F]},ph=f_,d_=g.unpack,p_=ph,m_=uh,g_=function(){for(var _=[],x=arguments.length;x--;)_[x]=arguments[x];_=d_(_,"lch");var b=_[0],P=_[1],F=_[2],k=p_(b,P,F),N=k[0],X=k[1],Y=k[2],ae=m_(N,X,Y),he=ae[0],Se=ae[1],de=ae[2];return[he,Se,de,_.length>3?_[3]:1]},mh=g_,__=g.unpack,v_=mh,x_=function(){for(var _=[],x=arguments.length;x--;)_[x]=arguments[x];var b=__(_,"hcl").reverse();return v_.apply(void 0,b)},y_=x_,M_=g.unpack,b_=g.type,gh=L,vo=A,Dl=m,_h=o_;vo.prototype.lch=function(){return _h(this._rgb)},vo.prototype.hcl=function(){return _h(this._rgb).reverse()},gh.lch=function(){for(var _=[],x=arguments.length;x--;)_[x]=arguments[x];return new(Function.prototype.bind.apply(vo,[null].concat(_,["lch"])))},gh.hcl=function(){for(var _=[],x=arguments.length;x--;)_[x]=arguments[x];return new(Function.prototype.bind.apply(vo,[null].concat(_,["hcl"])))},Dl.format.lch=mh,Dl.format.hcl=y_,["lch","hcl"].forEach(function(_){return Dl.autodetect.push({p:2,test:function(){for(var x=[],b=arguments.length;b--;)x[b]=arguments[b];if(x=M_(x,_),b_(x)==="array"&&x.length===3)return _}})});var S_={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflower:"#6495ed",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",gold:"#ffd700",goldenrod:"#daa520",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",laserlemon:"#ffff54",lavender:"#e6e6fa",lavenderblush:"#fff0f5",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrod:"#fafad2",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",maroon2:"#7f0000",maroon3:"#b03060",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",purple2:"#7f007f",purple3:"#a020f0",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"},vh=S_,E_=A,xh=m,T_=g.type,xa=vh,A_=re,w_=po;E_.prototype.name=function(){for(var _=w_(this._rgb,"rgb"),x=0,b=Object.keys(xa);x<b.length;x+=1){var P=b[x];if(xa[P]===_)return P.toLowerCase()}return _},xh.format.named=function(_){if(_=_.toLowerCase(),xa[_])return A_(xa[_]);throw new Error("unknown color name: "+_)},xh.autodetect.push({p:5,test:function(_){for(var x=[],b=arguments.length-1;b-- >0;)x[b]=arguments[b+1];if(!x.length&&T_(_)==="string"&&xa[_.toLowerCase()])return"named"}});var R_=g.unpack,C_=function(){for(var _=[],x=arguments.length;x--;)_[x]=arguments[x];var b=R_(_,"rgb"),P=b[0],F=b[1],k=b[2];return(P<<16)+(F<<8)+k},L_=C_,P_=g.type,D_=function(_){if(P_(_)=="number"&&_>=0&&_<=16777215){var x=_>>16,b=_>>8&255,P=_&255;return[x,b,P,1]}throw new Error("unknown num color: "+_)},I_=D_,U_=L,yh=A,Mh=m,N_=g.type,O_=L_;yh.prototype.num=function(){return O_(this._rgb)},U_.num=function(){for(var _=[],x=arguments.length;x--;)_[x]=arguments[x];return new(Function.prototype.bind.apply(yh,[null].concat(_,["num"])))},Mh.format.num=I_,Mh.autodetect.push({p:5,test:function(){for(var _=[],x=arguments.length;x--;)_[x]=arguments[x];if(_.length===1&&N_(_[0])==="number"&&_[0]>=0&&_[0]<=16777215)return"num"}});var F_=L,Il=A,bh=m,Sh=g.unpack,Eh=g.type,Th=Math.round;Il.prototype.rgb=function(_){return _===void 0&&(_=!0),_===!1?this._rgb.slice(0,3):this._rgb.slice(0,3).map(Th)},Il.prototype.rgba=function(_){return _===void 0&&(_=!0),this._rgb.slice(0,4).map(function(x,b){return b<3?_===!1?x:Th(x):x})},F_.rgb=function(){for(var _=[],x=arguments.length;x--;)_[x]=arguments[x];return new(Function.prototype.bind.apply(Il,[null].concat(_,["rgb"])))},bh.format.rgb=function(){for(var _=[],x=arguments.length;x--;)_[x]=arguments[x];var b=Sh(_,"rgba");return b[3]===void 0&&(b[3]=1),b},bh.autodetect.push({p:3,test:function(){for(var _=[],x=arguments.length;x--;)_[x]=arguments[x];if(_=Sh(_,"rgba"),Eh(_)==="array"&&(_.length===3||_.length===4&&Eh(_[3])=="number"&&_[3]>=0&&_[3]<=1))return"rgb"}});var xo=Math.log,k_=function(_){var x=_/100,b,P,F;return x<66?(b=255,P=x<6?0:-155.25485562709179-.44596950469579133*(P=x-2)+104.49216199393888*xo(P),F=x<20?0:-254.76935184120902+.8274096064007395*(F=x-10)+115.67994401066147*xo(F)):(b=351.97690566805693+.114206453784165*(b=x-55)-40.25366309332127*xo(b),P=325.4494125711974+.07943456536662342*(P=x-50)-28.0852963507957*xo(P),F=255),[b,P,F,1]},Ah=k_,B_=Ah,z_=g.unpack,H_=Math.round,G_=function(){for(var _=[],x=arguments.length;x--;)_[x]=arguments[x];for(var b=z_(_,"rgb"),P=b[0],F=b[2],k=1e3,N=4e4,X=.4,Y;N-k>X;){Y=(N+k)*.5;var ae=B_(Y);ae[2]/ae[0]>=F/P?N=Y:k=Y}return H_(Y)},V_=G_,Ul=L,yo=A,Nl=m,W_=V_;yo.prototype.temp=yo.prototype.kelvin=yo.prototype.temperature=function(){return W_(this._rgb)},Ul.temp=Ul.kelvin=Ul.temperature=function(){for(var _=[],x=arguments.length;x--;)_[x]=arguments[x];return new(Function.prototype.bind.apply(yo,[null].concat(_,["temp"])))},Nl.format.temp=Nl.format.kelvin=Nl.format.temperature=Ah;var X_=g.unpack,Ol=Math.cbrt,q_=Math.pow,Y_=Math.sign,j_=function(){for(var _=[],x=arguments.length;x--;)_[x]=arguments[x];var b=X_(_,"rgb"),P=b[0],F=b[1],k=b[2],N=[Fl(P/255),Fl(F/255),Fl(k/255)],X=N[0],Y=N[1],ae=N[2],he=Ol(.4122214708*X+.5363325363*Y+.0514459929*ae),Se=Ol(.2119034982*X+.6806995451*Y+.1073969566*ae),de=Ol(.0883024619*X+.2817188376*Y+.6299787005*ae);return[.2104542553*he+.793617785*Se-.0040720468*de,1.9779984951*he-2.428592205*Se+.4505937099*de,.0259040371*he+.7827717662*Se-.808675766*de]},wh=j_;function Fl(_){var x=Math.abs(_);return x<.04045?_/12.92:(Y_(_)||1)*q_((x+.055)/1.055,2.4)}var $_=g.unpack,Mo=Math.pow,K_=Math.sign,Z_=function(){for(var _=[],x=arguments.length;x--;)_[x]=arguments[x];_=$_(_,"lab");var b=_[0],P=_[1],F=_[2],k=Mo(b+.3963377774*P+.2158037573*F,3),N=Mo(b-.1055613458*P-.0638541728*F,3),X=Mo(b-.0894841775*P-1.291485548*F,3);return[255*kl(4.0767416621*k-3.3077115913*N+.2309699292*X),255*kl(-1.2684380046*k+2.6097574011*N-.3413193965*X),255*kl(-.0041960863*k-.7034186147*N+1.707614701*X),_.length>3?_[3]:1]},Rh=Z_;function kl(_){var x=Math.abs(_);return x>.0031308?(K_(_)||1)*(1.055*Mo(x,1/2.4)-.055):_*12.92}var J_=g.unpack,Q_=g.type,e0=L,Ch=A,Lh=m,t0=wh;Ch.prototype.oklab=function(){return t0(this._rgb)},e0.oklab=function(){for(var _=[],x=arguments.length;x--;)_[x]=arguments[x];return new(Function.prototype.bind.apply(Ch,[null].concat(_,["oklab"])))},Lh.format.oklab=Rh,Lh.autodetect.push({p:3,test:function(){for(var _=[],x=arguments.length;x--;)_[x]=arguments[x];if(_=J_(_,"oklab"),Q_(_)==="array"&&_.length===3)return"oklab"}});var n0=g.unpack,i0=wh,r0=dh,s0=function(){for(var _=[],x=arguments.length;x--;)_[x]=arguments[x];var b=n0(_,"rgb"),P=b[0],F=b[1],k=b[2],N=i0(P,F,k),X=N[0],Y=N[1],ae=N[2];return r0(X,Y,ae)},a0=s0,o0=g.unpack,l0=ph,c0=Rh,u0=function(){for(var _=[],x=arguments.length;x--;)_[x]=arguments[x];_=o0(_,"lch");var b=_[0],P=_[1],F=_[2],k=l0(b,P,F),N=k[0],X=k[1],Y=k[2],ae=c0(N,X,Y),he=ae[0],Se=ae[1],de=ae[2];return[he,Se,de,_.length>3?_[3]:1]},h0=u0,f0=g.unpack,d0=g.type,p0=L,Ph=A,Dh=m,m0=a0;Ph.prototype.oklch=function(){return m0(this._rgb)},p0.oklch=function(){for(var _=[],x=arguments.length;x--;)_[x]=arguments[x];return new(Function.prototype.bind.apply(Ph,[null].concat(_,["oklch"])))},Dh.format.oklch=h0,Dh.autodetect.push({p:3,test:function(){for(var _=[],x=arguments.length;x--;)_[x]=arguments[x];if(_=f0(_,"oklch"),d0(_)==="array"&&_.length===3)return"oklch"}});var Ih=A,g0=g.type;Ih.prototype.alpha=function(_,x){return x===void 0&&(x=!1),_!==void 0&&g0(_)==="number"?x?(this._rgb[3]=_,this):new Ih([this._rgb[0],this._rgb[1],this._rgb[2],_],"rgb"):this._rgb[3]};var _0=A;_0.prototype.clipped=function(){return this._rgb._clipped||!1};var Cr=A,v0=_o;Cr.prototype.darken=function(_){_===void 0&&(_=1);var x=this,b=x.lab();return b[0]-=v0.Kn*_,new Cr(b,"lab").alpha(x.alpha(),!0)},Cr.prototype.brighten=function(_){return _===void 0&&(_=1),this.darken(-_)},Cr.prototype.darker=Cr.prototype.darken,Cr.prototype.brighter=Cr.prototype.brighten;var x0=A;x0.prototype.get=function(_){var x=_.split("."),b=x[0],P=x[1],F=this[b]();if(P){var k=b.indexOf(P)-(b.substr(0,2)==="ok"?2:0);if(k>-1)return F[k];throw new Error("unknown channel "+P+" in mode "+b)}else return F};var us=A,y0=g.type,M0=Math.pow,b0=1e-7,S0=20;us.prototype.luminance=function(_){if(_!==void 0&&y0(_)==="number"){if(_===0)return new us([0,0,0,this._rgb[3]],"rgb");if(_===1)return new us([255,255,255,this._rgb[3]],"rgb");var x=this.luminance(),b="rgb",P=S0,F=function(N,X){var Y=N.interpolate(X,.5,b),ae=Y.luminance();return Math.abs(_-ae)<b0||!P--?Y:ae>_?F(N,Y):F(Y,X)},k=(x>_?F(new us([0,0,0]),this):F(this,new us([255,255,255]))).rgb();return new us(k.concat([this._rgb[3]]))}return E0.apply(void 0,this._rgb.slice(0,3))};var E0=function(_,x,b){return _=Bl(_),x=Bl(x),b=Bl(b),.2126*_+.7152*x+.0722*b},Bl=function(_){return _/=255,_<=.03928?_/12.92:M0((_+.055)/1.055,2.4)},zn={},Uh=A,Nh=g.type,bo=zn,Oh=function(_,x,b){b===void 0&&(b=.5);for(var P=[],F=arguments.length-3;F-- >0;)P[F]=arguments[F+3];var k=P[0]||"lrgb";if(!bo[k]&&!P.length&&(k=Object.keys(bo)[0]),!bo[k])throw new Error("interpolation mode "+k+" is not defined");return Nh(_)!=="object"&&(_=new Uh(_)),Nh(x)!=="object"&&(x=new Uh(x)),bo[k](_,x,b).alpha(_.alpha()+b*(x.alpha()-_.alpha()))},Fh=A,T0=Oh;Fh.prototype.mix=Fh.prototype.interpolate=function(_,x){x===void 0&&(x=.5);for(var b=[],P=arguments.length-2;P-- >0;)b[P]=arguments[P+2];return T0.apply(void 0,[this,_,x].concat(b))};var kh=A;kh.prototype.premultiply=function(_){_===void 0&&(_=!1);var x=this._rgb,b=x[3];return _?(this._rgb=[x[0]*b,x[1]*b,x[2]*b,b],this):new kh([x[0]*b,x[1]*b,x[2]*b,b],"rgb")};var zl=A,A0=_o;zl.prototype.saturate=function(_){_===void 0&&(_=1);var x=this,b=x.lch();return b[1]+=A0.Kn*_,b[1]<0&&(b[1]=0),new zl(b,"lch").alpha(x.alpha(),!0)},zl.prototype.desaturate=function(_){return _===void 0&&(_=1),this.saturate(-_)};var Bh=A,zh=g.type;Bh.prototype.set=function(_,x,b){b===void 0&&(b=!1);var P=_.split("."),F=P[0],k=P[1],N=this[F]();if(k){var X=F.indexOf(k)-(F.substr(0,2)==="ok"?2:0);if(X>-1){if(zh(x)=="string")switch(x.charAt(0)){case"+":N[X]+=+x;break;case"-":N[X]+=+x;break;case"*":N[X]*=+x.substr(1);break;case"/":N[X]/=+x.substr(1);break;default:N[X]=+x}else if(zh(x)==="number")N[X]=x;else throw new Error("unsupported value for Color.set");var Y=new Bh(N,F);return b?(this._rgb=Y._rgb,this):Y}throw new Error("unknown channel "+k+" in mode "+F)}else return N};var w0=A,R0=function(_,x,b){var P=_._rgb,F=x._rgb;return new w0(P[0]+b*(F[0]-P[0]),P[1]+b*(F[1]-P[1]),P[2]+b*(F[2]-P[2]),"rgb")};zn.rgb=R0;var C0=A,Hl=Math.sqrt,hs=Math.pow,L0=function(_,x,b){var P=_._rgb,F=P[0],k=P[1],N=P[2],X=x._rgb,Y=X[0],ae=X[1],he=X[2];return new C0(Hl(hs(F,2)*(1-b)+hs(Y,2)*b),Hl(hs(k,2)*(1-b)+hs(ae,2)*b),Hl(hs(N,2)*(1-b)+hs(he,2)*b),"rgb")};zn.lrgb=L0;var P0=A,D0=function(_,x,b){var P=_.lab(),F=x.lab();return new P0(P[0]+b*(F[0]-P[0]),P[1]+b*(F[1]-P[1]),P[2]+b*(F[2]-P[2]),"lab")};zn.lab=D0;var Hh=A,fs=function(_,x,b,P){var F,k,N,X;P==="hsl"?(N=_.hsl(),X=x.hsl()):P==="hsv"?(N=_.hsv(),X=x.hsv()):P==="hcg"?(N=_.hcg(),X=x.hcg()):P==="hsi"?(N=_.hsi(),X=x.hsi()):P==="lch"||P==="hcl"?(P="hcl",N=_.hcl(),X=x.hcl()):P==="oklch"&&(N=_.oklch().reverse(),X=x.oklch().reverse());var Y,ae,he,Se,de,Le;(P.substr(0,1)==="h"||P==="oklch")&&(F=N,Y=F[0],he=F[1],de=F[2],k=X,ae=k[0],Se=k[1],Le=k[2]);var we,nt,lt,dt;return!isNaN(Y)&&!isNaN(ae)?(ae>Y&&ae-Y>180?dt=ae-(Y+360):ae<Y&&Y-ae>180?dt=ae+360-Y:dt=ae-Y,nt=Y+b*dt):isNaN(Y)?isNaN(ae)?nt=Number.NaN:(nt=ae,(de==1||de==0)&&P!="hsv"&&(we=Se)):(nt=Y,(Le==1||Le==0)&&P!="hsv"&&(we=he)),we===void 0&&(we=he+b*(Se-he)),lt=de+b*(Le-de),P==="oklch"?new Hh([lt,we,nt],P):new Hh([nt,we,lt],P)},I0=fs,Gh=function(_,x,b){return I0(_,x,b,"lch")};zn.lch=Gh,zn.hcl=Gh;var U0=A,N0=function(_,x,b){var P=_.num(),F=x.num();return new U0(P+b*(F-P),"num")};zn.num=N0;var O0=fs,F0=function(_,x,b){return O0(_,x,b,"hcg")};zn.hcg=F0;var k0=fs,B0=function(_,x,b){return k0(_,x,b,"hsi")};zn.hsi=B0;var z0=fs,H0=function(_,x,b){return z0(_,x,b,"hsl")};zn.hsl=H0;var G0=fs,V0=function(_,x,b){return G0(_,x,b,"hsv")};zn.hsv=V0;var W0=A,X0=function(_,x,b){var P=_.oklab(),F=x.oklab();return new W0(P[0]+b*(F[0]-P[0]),P[1]+b*(F[1]-P[1]),P[2]+b*(F[2]-P[2]),"oklab")};zn.oklab=X0;var q0=fs,Y0=function(_,x,b){return q0(_,x,b,"oklch")};zn.oklch=Y0;var Gl=A,j0=g.clip_rgb,Vl=Math.pow,Wl=Math.sqrt,Xl=Math.PI,Vh=Math.cos,Wh=Math.sin,$0=Math.atan2,K0=function(_,x,b){x===void 0&&(x="lrgb"),b===void 0&&(b=null);var P=_.length;b||(b=Array.from(new Array(P)).map(function(){return 1}));var F=P/b.reduce(function(nt,lt){return nt+lt});if(b.forEach(function(nt,lt){b[lt]*=F}),_=_.map(function(nt){return new Gl(nt)}),x==="lrgb")return Z0(_,b);for(var k=_.shift(),N=k.get(x),X=[],Y=0,ae=0,he=0;he<N.length;he++)if(N[he]=(N[he]||0)*b[0],X.push(isNaN(N[he])?0:b[0]),x.charAt(he)==="h"&&!isNaN(N[he])){var Se=N[he]/180*Xl;Y+=Vh(Se)*b[0],ae+=Wh(Se)*b[0]}var de=k.alpha()*b[0];_.forEach(function(nt,lt){var dt=nt.get(x);de+=nt.alpha()*b[lt+1];for(var _t=0;_t<N.length;_t++)if(!isNaN(dt[_t]))if(X[_t]+=b[lt+1],x.charAt(_t)==="h"){var pn=dt[_t]/180*Xl;Y+=Vh(pn)*b[lt+1],ae+=Wh(pn)*b[lt+1]}else N[_t]+=dt[_t]*b[lt+1]});for(var Le=0;Le<N.length;Le++)if(x.charAt(Le)==="h"){for(var we=$0(ae/X[Le],Y/X[Le])/Xl*180;we<0;)we+=360;for(;we>=360;)we-=360;N[Le]=we}else N[Le]=N[Le]/X[Le];return de/=P,new Gl(N,x).alpha(de>.99999?1:de,!0)},Z0=function(_,x){for(var b=_.length,P=[0,0,0,0],F=0;F<_.length;F++){var k=_[F],N=x[F]/b,X=k._rgb;P[0]+=Vl(X[0],2)*N,P[1]+=Vl(X[1],2)*N,P[2]+=Vl(X[2],2)*N,P[3]+=X[3]*N}return P[0]=Wl(P[0]),P[1]=Wl(P[1]),P[2]=Wl(P[2]),P[3]>.9999999&&(P[3]=1),new Gl(j0(P))},oi=L,ds=g.type,J0=Math.pow,ql=function(_){var x="rgb",b=oi("#ccc"),P=0,F=[0,1],k=[],N=[0,0],X=!1,Y=[],ae=!1,he=0,Se=1,de=!1,Le={},we=!0,nt=1,lt=function(pe){if(pe=pe||["#fff","#000"],pe&&ds(pe)==="string"&&oi.brewer&&oi.brewer[pe.toLowerCase()]&&(pe=oi.brewer[pe.toLowerCase()]),ds(pe)==="array"){pe.length===1&&(pe=[pe[0],pe[0]]),pe=pe.slice(0);for(var ke=0;ke<pe.length;ke++)pe[ke]=oi(pe[ke]);k.length=0;for(var st=0;st<pe.length;st++)k.push(st/(pe.length-1))}return Pn(),Y=pe},dt=function(pe){if(X!=null){for(var ke=X.length-1,st=0;st<ke&&pe>=X[st];)st++;return st-1}return 0},_t=function(pe){return pe},pn=function(pe){return pe},ln=function(pe,ke){var st,it;if(ke==null&&(ke=!1),isNaN(pe)||pe===null)return b;if(ke)it=pe;else if(X&&X.length>2){var mn=dt(pe);it=mn/(X.length-2)}else Se!==he?it=(pe-he)/(Se-he):it=1;it=pn(it),ke||(it=_t(it)),nt!==1&&(it=J0(it,nt)),it=N[0]+it*(1-N[0]-N[1]),it=Math.min(1,Math.max(0,it));var Pt=Math.floor(it*1e4);if(we&&Le[Pt])st=Le[Pt];else{if(ds(Y)==="array")for(var pt=0;pt<k.length;pt++){var vt=k[pt];if(it<=vt){st=Y[pt];break}if(it>=vt&&pt===k.length-1){st=Y[pt];break}if(it>vt&&it<k[pt+1]){it=(it-vt)/(k[pt+1]-vt),st=oi.interpolate(Y[pt],Y[pt+1],it,x);break}}else ds(Y)==="function"&&(st=Y(it));we&&(Le[Pt]=st)}return st},Pn=function(){return Le={}};lt(_);var ct=function(pe){var ke=oi(ln(pe));return ae&&ke[ae]?ke[ae]():ke};return ct.classes=function(pe){if(pe!=null){if(ds(pe)==="array")X=pe,F=[pe[0],pe[pe.length-1]];else{var ke=oi.analyze(F);pe===0?X=[ke.min,ke.max]:X=oi.limits(ke,"e",pe)}return ct}return X},ct.domain=function(pe){if(!arguments.length)return F;he=pe[0],Se=pe[pe.length-1],k=[];var ke=Y.length;if(pe.length===ke&&he!==Se)for(var st=0,it=Array.from(pe);st<it.length;st+=1){var mn=it[st];k.push((mn-he)/(Se-he))}else{for(var Pt=0;Pt<ke;Pt++)k.push(Pt/(ke-1));if(pe.length>2){var pt=pe.map(function(xt,bt){return bt/(pe.length-1)}),vt=pe.map(function(xt){return(xt-he)/(Se-he)});vt.every(function(xt,bt){return pt[bt]===xt})||(pn=function(xt){if(xt<=0||xt>=1)return xt;for(var bt=0;xt>=vt[bt+1];)bt++;var ci=(xt-vt[bt])/(vt[bt+1]-vt[bt]),sr=pt[bt]+ci*(pt[bt+1]-pt[bt]);return sr})}}return F=[he,Se],ct},ct.mode=function(pe){return arguments.length?(x=pe,Pn(),ct):x},ct.range=function(pe,ke){return lt(pe),ct},ct.out=function(pe){return ae=pe,ct},ct.spread=function(pe){return arguments.length?(P=pe,ct):P},ct.correctLightness=function(pe){return pe==null&&(pe=!0),de=pe,Pn(),de?_t=function(ke){for(var st=ln(0,!0).lab()[0],it=ln(1,!0).lab()[0],mn=st>it,Pt=ln(ke,!0).lab()[0],pt=st+(it-st)*ke,vt=Pt-pt,xt=0,bt=1,ci=20;Math.abs(vt)>.01&&ci-- >0;)(function(){return mn&&(vt*=-1),vt<0?(xt=ke,ke+=(bt-ke)*.5):(bt=ke,ke+=(xt-ke)*.5),Pt=ln(ke,!0).lab()[0],vt=Pt-pt})();return ke}:_t=function(ke){return ke},ct},ct.padding=function(pe){return pe!=null?(ds(pe)==="number"&&(pe=[pe,pe]),N=pe,ct):N},ct.colors=function(pe,ke){arguments.length<2&&(ke="hex");var st=[];if(arguments.length===0)st=Y.slice(0);else if(pe===1)st=[ct(.5)];else if(pe>1){var it=F[0],mn=F[1]-it;st=Q0(0,pe,!1).map(function(bt){return ct(it+bt/(pe-1)*mn)})}else{_=[];var Pt=[];if(X&&X.length>2)for(var pt=1,vt=X.length,xt=1<=vt;xt?pt<vt:pt>vt;xt?pt++:pt--)Pt.push((X[pt-1]+X[pt])*.5);else Pt=F;st=Pt.map(function(bt){return ct(bt)})}return oi[ke]&&(st=st.map(function(bt){return bt[ke]()})),st},ct.cache=function(pe){return pe!=null?(we=pe,ct):we},ct.gamma=function(pe){return pe!=null?(nt=pe,ct):nt},ct.nodata=function(pe){return pe!=null?(b=oi(pe),ct):b},ct};function Q0(_,x,b){for(var P=[],F=_<x,k=b?F?x+1:x-1:x,N=_;F?N<k:N>k;F?N++:N--)P.push(N);return P}var ya=A,ev=ql,tv=function(_){for(var x=[1,1],b=1;b<_;b++){for(var P=[1],F=1;F<=x.length;F++)P[F]=(x[F]||0)+x[F-1];x=P}return x},nv=function(_){var x,b,P,F,k,N,X;if(_=_.map(function(de){return new ya(de)}),_.length===2)x=_.map(function(de){return de.lab()}),k=x[0],N=x[1],F=function(de){var Le=[0,1,2].map(function(we){return k[we]+de*(N[we]-k[we])});return new ya(Le,"lab")};else if(_.length===3)b=_.map(function(de){return de.lab()}),k=b[0],N=b[1],X=b[2],F=function(de){var Le=[0,1,2].map(function(we){return(1-de)*(1-de)*k[we]+2*(1-de)*de*N[we]+de*de*X[we]});return new ya(Le,"lab")};else if(_.length===4){var Y;P=_.map(function(de){return de.lab()}),k=P[0],N=P[1],X=P[2],Y=P[3],F=function(de){var Le=[0,1,2].map(function(we){return(1-de)*(1-de)*(1-de)*k[we]+3*(1-de)*(1-de)*de*N[we]+3*(1-de)*de*de*X[we]+de*de*de*Y[we]});return new ya(Le,"lab")}}else if(_.length>=5){var ae,he,Se;ae=_.map(function(de){return de.lab()}),Se=_.length-1,he=tv(Se),F=function(de){var Le=1-de,we=[0,1,2].map(function(nt){return ae.reduce(function(lt,dt,_t){return lt+he[_t]*Math.pow(Le,Se-_t)*Math.pow(de,_t)*dt[nt]},0)});return new ya(we,"lab")}}else throw new RangeError("No point in running bezier with only one color.");return F},iv=function(_){var x=nv(_);return x.scale=function(){return ev(x)},x},Yl=L,li=function(_,x,b){if(!li[b])throw new Error("unknown blend mode "+b);return li[b](_,x)},ir=function(_){return function(x,b){var P=Yl(b).rgb(),F=Yl(x).rgb();return Yl.rgb(_(P,F))}},rr=function(_){return function(x,b){var P=[];return P[0]=_(x[0],b[0]),P[1]=_(x[1],b[1]),P[2]=_(x[2],b[2]),P}},rv=function(_){return _},sv=function(_,x){return _*x/255},av=function(_,x){return _>x?x:_},ov=function(_,x){return _>x?_:x},lv=function(_,x){return 255*(1-(1-_/255)*(1-x/255))},cv=function(_,x){return x<128?2*_*x/255:255*(1-2*(1-_/255)*(1-x/255))},uv=function(_,x){return 255*(1-(1-x/255)/(_/255))},hv=function(_,x){return _===255?255:(_=255*(x/255)/(1-_/255),_>255?255:_)};li.normal=ir(rr(rv)),li.multiply=ir(rr(sv)),li.screen=ir(rr(lv)),li.overlay=ir(rr(cv)),li.darken=ir(rr(av)),li.lighten=ir(rr(ov)),li.dodge=ir(rr(hv)),li.burn=ir(rr(uv));for(var fv=li,jl=g.type,dv=g.clip_rgb,pv=g.TWOPI,mv=Math.pow,gv=Math.sin,_v=Math.cos,Xh=L,vv=function(_,x,b,P,F){_===void 0&&(_=300),x===void 0&&(x=-1.5),b===void 0&&(b=1),P===void 0&&(P=1),F===void 0&&(F=[0,1]);var k=0,N;jl(F)==="array"?N=F[1]-F[0]:(N=0,F=[F,F]);var X=function(Y){var ae=pv*((_+120)/360+x*Y),he=mv(F[0]+N*Y,P),Se=k!==0?b[0]+Y*k:b,de=Se*he*(1-he)/2,Le=_v(ae),we=gv(ae),nt=he+de*(-.14861*Le+1.78277*we),lt=he+de*(-.29227*Le-.90649*we),dt=he+de*(1.97294*Le);return Xh(dv([nt*255,lt*255,dt*255,1]))};return X.start=function(Y){return Y==null?_:(_=Y,X)},X.rotations=function(Y){return Y==null?x:(x=Y,X)},X.gamma=function(Y){return Y==null?P:(P=Y,X)},X.hue=function(Y){return Y==null?b:(b=Y,jl(b)==="array"?(k=b[1]-b[0],k===0&&(b=b[1])):k=0,X)},X.lightness=function(Y){return Y==null?F:(jl(Y)==="array"?(F=Y,N=Y[1]-Y[0]):(F=[Y,Y],N=0),X)},X.scale=function(){return Xh.scale(X)},X.hue(b),X},xv=A,yv="0123456789abcdef",Mv=Math.floor,bv=Math.random,Sv=function(){for(var _="#",x=0;x<6;x++)_+=yv.charAt(Mv(bv()*16));return new xv(_,"hex")},$l=c,qh=Math.log,Ev=Math.pow,Tv=Math.floor,Av=Math.abs,Yh=function(_,x){x===void 0&&(x=null);var b={min:Number.MAX_VALUE,max:Number.MAX_VALUE*-1,sum:0,values:[],count:0};return $l(_)==="object"&&(_=Object.values(_)),_.forEach(function(P){x&&$l(P)==="object"&&(P=P[x]),P!=null&&!isNaN(P)&&(b.values.push(P),b.sum+=P,P<b.min&&(b.min=P),P>b.max&&(b.max=P),b.count+=1)}),b.domain=[b.min,b.max],b.limits=function(P,F){return jh(b,P,F)},b},jh=function(_,x,b){x===void 0&&(x="equal"),b===void 0&&(b=7),$l(_)=="array"&&(_=Yh(_));var P=_.min,F=_.max,k=_.values.sort(function(Zl,Jl){return Zl-Jl});if(b===1)return[P,F];var N=[];if(x.substr(0,1)==="c"&&(N.push(P),N.push(F)),x.substr(0,1)==="e"){N.push(P);for(var X=1;X<b;X++)N.push(P+X/b*(F-P));N.push(F)}else if(x.substr(0,1)==="l"){if(P<=0)throw new Error("Logarithmic scales are only possible for values > 0");var Y=Math.LOG10E*qh(P),ae=Math.LOG10E*qh(F);N.push(P);for(var he=1;he<b;he++)N.push(Ev(10,Y+he/b*(ae-Y)));N.push(F)}else if(x.substr(0,1)==="q"){N.push(P);for(var Se=1;Se<b;Se++){var de=(k.length-1)*Se/b,Le=Tv(de);if(Le===de)N.push(k[Le]);else{var we=de-Le;N.push(k[Le]*(1-we)+k[Le+1]*we)}}N.push(F)}else if(x.substr(0,1)==="k"){var nt,lt=k.length,dt=new Array(lt),_t=new Array(b),pn=!0,ln=0,Pn=null;Pn=[],Pn.push(P);for(var ct=1;ct<b;ct++)Pn.push(P+ct/b*(F-P));for(Pn.push(F);pn;){for(var pe=0;pe<b;pe++)_t[pe]=0;for(var ke=0;ke<lt;ke++)for(var st=k[ke],it=Number.MAX_VALUE,mn=void 0,Pt=0;Pt<b;Pt++){var pt=Av(Pn[Pt]-st);pt<it&&(it=pt,mn=Pt),_t[mn]++,dt[ke]=mn}for(var vt=new Array(b),xt=0;xt<b;xt++)vt[xt]=null;for(var bt=0;bt<lt;bt++)nt=dt[bt],vt[nt]===null?vt[nt]=k[bt]:vt[nt]+=k[bt];for(var ci=0;ci<b;ci++)vt[ci]*=1/_t[ci];pn=!1;for(var sr=0;sr<b;sr++)if(vt[sr]!==Pn[sr]){pn=!0;break}Pn=vt,ln++,ln>200&&(pn=!1)}for(var ar={},ps=0;ps<b;ps++)ar[ps]=[];for(var ms=0;ms<lt;ms++)nt=dt[ms],ar[nt].push(k[ms]);for(var Oi=[],Lr=0;Lr<b;Lr++)Oi.push(ar[Lr][0]),Oi.push(ar[Lr][ar[Lr].length-1]);Oi=Oi.sort(function(Zl,Jl){return Zl-Jl}),N.push(Oi[0]);for(var Ma=1;Ma<Oi.length;Ma+=2){var Pr=Oi[Ma];!isNaN(Pr)&&N.indexOf(Pr)===-1&&N.push(Pr)}}return N},$h={analyze:Yh,limits:jh},Kh=A,wv=function(_,x){_=new Kh(_),x=new Kh(x);var b=_.luminance(),P=x.luminance();return b>P?(b+.05)/(P+.05):(P+.05)/(b+.05)},Zh=A,Ni=Math.sqrt,en=Math.pow,Rv=Math.min,Cv=Math.max,Jh=Math.atan2,Qh=Math.abs,So=Math.cos,ef=Math.sin,Lv=Math.exp,tf=Math.PI,Pv=function(_,x,b,P,F){b===void 0&&(b=1),P===void 0&&(P=1),F===void 0&&(F=1);var k=function(Pr){return 360*Pr/(2*tf)},N=function(Pr){return 2*tf*Pr/360};_=new Zh(_),x=new Zh(x);var X=Array.from(_.lab()),Y=X[0],ae=X[1],he=X[2],Se=Array.from(x.lab()),de=Se[0],Le=Se[1],we=Se[2],nt=(Y+de)/2,lt=Ni(en(ae,2)+en(he,2)),dt=Ni(en(Le,2)+en(we,2)),_t=(lt+dt)/2,pn=.5*(1-Ni(en(_t,7)/(en(_t,7)+en(25,7)))),ln=ae*(1+pn),Pn=Le*(1+pn),ct=Ni(en(ln,2)+en(he,2)),pe=Ni(en(Pn,2)+en(we,2)),ke=(ct+pe)/2,st=k(Jh(he,ln)),it=k(Jh(we,Pn)),mn=st>=0?st:st+360,Pt=it>=0?it:it+360,pt=Qh(mn-Pt)>180?(mn+Pt+360)/2:(mn+Pt)/2,vt=1-.17*So(N(pt-30))+.24*So(N(2*pt))+.32*So(N(3*pt+6))-.2*So(N(4*pt-63)),xt=Pt-mn;xt=Qh(xt)<=180?xt:Pt<=mn?xt+360:xt-360,xt=2*Ni(ct*pe)*ef(N(xt)/2);var bt=de-Y,ci=pe-ct,sr=1+.015*en(nt-50,2)/Ni(20+en(nt-50,2)),ar=1+.045*ke,ps=1+.015*ke*vt,ms=30*Lv(-en((pt-275)/25,2)),Oi=2*Ni(en(ke,7)/(en(ke,7)+en(25,7))),Lr=-Oi*ef(2*N(ms)),Ma=Ni(en(bt/(b*sr),2)+en(ci/(P*ar),2)+en(xt/(F*ps),2)+Lr*(ci/(P*ar))*(xt/(F*ps)));return Cv(0,Rv(100,Ma))},nf=A,Dv=function(_,x,b){b===void 0&&(b="lab"),_=new nf(_),x=new nf(x);var P=_.get(b),F=x.get(b),k=0;for(var N in P){var X=(P[N]||0)-(F[N]||0);k+=X*X}return Math.sqrt(k)},Iv=A,Uv=function(){for(var _=[],x=arguments.length;x--;)_[x]=arguments[x];try{return new(Function.prototype.bind.apply(Iv,[null].concat(_))),!0}catch{return!1}},rf=L,sf=ql,Nv={cool:function(){return sf([rf.hsl(180,1,.9),rf.hsl(250,.7,.4)])},hot:function(){return sf(["#000","#f00","#ff0","#fff"]).mode("rgb")}},Eo={OrRd:["#fff7ec","#fee8c8","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#b30000","#7f0000"],PuBu:["#fff7fb","#ece7f2","#d0d1e6","#a6bddb","#74a9cf","#3690c0","#0570b0","#045a8d","#023858"],BuPu:["#f7fcfd","#e0ecf4","#bfd3e6","#9ebcda","#8c96c6","#8c6bb1","#88419d","#810f7c","#4d004b"],Oranges:["#fff5eb","#fee6ce","#fdd0a2","#fdae6b","#fd8d3c","#f16913","#d94801","#a63603","#7f2704"],BuGn:["#f7fcfd","#e5f5f9","#ccece6","#99d8c9","#66c2a4","#41ae76","#238b45","#006d2c","#00441b"],YlOrBr:["#ffffe5","#fff7bc","#fee391","#fec44f","#fe9929","#ec7014","#cc4c02","#993404","#662506"],YlGn:["#ffffe5","#f7fcb9","#d9f0a3","#addd8e","#78c679","#41ab5d","#238443","#006837","#004529"],Reds:["#fff5f0","#fee0d2","#fcbba1","#fc9272","#fb6a4a","#ef3b2c","#cb181d","#a50f15","#67000d"],RdPu:["#fff7f3","#fde0dd","#fcc5c0","#fa9fb5","#f768a1","#dd3497","#ae017e","#7a0177","#49006a"],Greens:["#f7fcf5","#e5f5e0","#c7e9c0","#a1d99b","#74c476","#41ab5d","#238b45","#006d2c","#00441b"],YlGnBu:["#ffffd9","#edf8b1","#c7e9b4","#7fcdbb","#41b6c4","#1d91c0","#225ea8","#253494","#081d58"],Purples:["#fcfbfd","#efedf5","#dadaeb","#bcbddc","#9e9ac8","#807dba","#6a51a3","#54278f","#3f007d"],GnBu:["#f7fcf0","#e0f3db","#ccebc5","#a8ddb5","#7bccc4","#4eb3d3","#2b8cbe","#0868ac","#084081"],Greys:["#ffffff","#f0f0f0","#d9d9d9","#bdbdbd","#969696","#737373","#525252","#252525","#000000"],YlOrRd:["#ffffcc","#ffeda0","#fed976","#feb24c","#fd8d3c","#fc4e2a","#e31a1c","#bd0026","#800026"],PuRd:["#f7f4f9","#e7e1ef","#d4b9da","#c994c7","#df65b0","#e7298a","#ce1256","#980043","#67001f"],Blues:["#f7fbff","#deebf7","#c6dbef","#9ecae1","#6baed6","#4292c6","#2171b5","#08519c","#08306b"],PuBuGn:["#fff7fb","#ece2f0","#d0d1e6","#a6bddb","#67a9cf","#3690c0","#02818a","#016c59","#014636"],Viridis:["#440154","#482777","#3f4a8a","#31678e","#26838f","#1f9d8a","#6cce5a","#b6de2b","#fee825"],Spectral:["#9e0142","#d53e4f","#f46d43","#fdae61","#fee08b","#ffffbf","#e6f598","#abdda4","#66c2a5","#3288bd","#5e4fa2"],RdYlGn:["#a50026","#d73027","#f46d43","#fdae61","#fee08b","#ffffbf","#d9ef8b","#a6d96a","#66bd63","#1a9850","#006837"],RdBu:["#67001f","#b2182b","#d6604d","#f4a582","#fddbc7","#f7f7f7","#d1e5f0","#92c5de","#4393c3","#2166ac","#053061"],PiYG:["#8e0152","#c51b7d","#de77ae","#f1b6da","#fde0ef","#f7f7f7","#e6f5d0","#b8e186","#7fbc41","#4d9221","#276419"],PRGn:["#40004b","#762a83","#9970ab","#c2a5cf","#e7d4e8","#f7f7f7","#d9f0d3","#a6dba0","#5aae61","#1b7837","#00441b"],RdYlBu:["#a50026","#d73027","#f46d43","#fdae61","#fee090","#ffffbf","#e0f3f8","#abd9e9","#74add1","#4575b4","#313695"],BrBG:["#543005","#8c510a","#bf812d","#dfc27d","#f6e8c3","#f5f5f5","#c7eae5","#80cdc1","#35978f","#01665e","#003c30"],RdGy:["#67001f","#b2182b","#d6604d","#f4a582","#fddbc7","#ffffff","#e0e0e0","#bababa","#878787","#4d4d4d","#1a1a1a"],PuOr:["#7f3b08","#b35806","#e08214","#fdb863","#fee0b6","#f7f7f7","#d8daeb","#b2abd2","#8073ac","#542788","#2d004b"],Set2:["#66c2a5","#fc8d62","#8da0cb","#e78ac3","#a6d854","#ffd92f","#e5c494","#b3b3b3"],Accent:["#7fc97f","#beaed4","#fdc086","#ffff99","#386cb0","#f0027f","#bf5b17","#666666"],Set1:["#e41a1c","#377eb8","#4daf4a","#984ea3","#ff7f00","#ffff33","#a65628","#f781bf","#999999"],Set3:["#8dd3c7","#ffffb3","#bebada","#fb8072","#80b1d3","#fdb462","#b3de69","#fccde5","#d9d9d9","#bc80bd","#ccebc5","#ffed6f"],Dark2:["#1b9e77","#d95f02","#7570b3","#e7298a","#66a61e","#e6ab02","#a6761d","#666666"],Paired:["#a6cee3","#1f78b4","#b2df8a","#33a02c","#fb9a99","#e31a1c","#fdbf6f","#ff7f00","#cab2d6","#6a3d9a","#ffff99","#b15928"],Pastel2:["#b3e2cd","#fdcdac","#cbd5e8","#f4cae4","#e6f5c9","#fff2ae","#f1e2cc","#cccccc"],Pastel1:["#fbb4ae","#b3cde3","#ccebc5","#decbe4","#fed9a6","#ffffcc","#e5d8bd","#fddaec","#f2f2f2"]},Kl=0,af=Object.keys(Eo);Kl<af.length;Kl+=1){var of=af[Kl];Eo[of.toLowerCase()]=Eo[of]}var Ov=Eo,on=L;on.average=K0,on.bezier=iv,on.blend=fv,on.cubehelix=vv,on.mix=on.interpolate=Oh,on.random=Sv,on.scale=ql,on.analyze=$h.analyze,on.contrast=wv,on.deltaE=Pv,on.distance=Dv,on.limits=$h.limits,on.valid=Uv,on.scales=Nv,on.colors=vh,on.brewer=Ov;var Fv=on;return Fv})})(Tm);var U1=Tm.exports;const Pa=I1(U1);function Xi(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function Am(s,e){s.prototype=Object.create(e.prototype),s.prototype.constructor=s,s.__proto__=e}/*!
 * GSAP 3.11.5
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Yn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},na={duration:.5,overwrite:!1,delay:0},Bu,Sn,nn,ni=1e8,Ct=1/ni,au=Math.PI*2,N1=au/4,O1=0,wm=Math.sqrt,F1=Math.cos,k1=Math.sin,hn=function(e){return typeof e=="string"},Yt=function(e){return typeof e=="function"},er=function(e){return typeof e=="number"},zu=function(e){return typeof e>"u"},Ci=function(e){return typeof e=="object"},Nn=function(e){return e!==!1},Hu=function(){return typeof window<"u"},Ko=function(e){return Yt(e)||hn(e)},Rm=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},En=Array.isArray,ou=/(?:-?\.?\d|\.)+/gi,Cm=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Bs=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Nc=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Lm=/[+-]=-?[.\d]+/,Pm=/[^,'"\[\]\s]+/gi,B1=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Gt,Qn,lu,Gu,jn={},ll={},Dm,Im=function(e){return(ll=ts(e,jn))&&kn},Vu=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},cl=function(e,t){return!t&&console.warn(e)},Um=function(e,t){return e&&(jn[e]=t)&&ll&&(ll[e]=t)||jn},Qa=function(){return 0},z1={suppressEvents:!0,isStart:!0,kill:!1},Qo={suppressEvents:!0,kill:!1},H1={suppressEvents:!0},Wu={},Mr=[],cu={},Nm,Vn={},Oc={},rp=30,el=[],Xu="",qu=function(e){var t=e[0],n,i;if(Ci(t)||Yt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=el.length;i--&&!el[i].targetTest(t););n=el[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new sg(e[i],n)))||e.splice(i,1);return e},jr=function(e){return e._gsap||qu(ii(e))[0]._gsap},Om=function(e,t,n){return(n=e[t])&&Yt(n)?e[t]():zu(n)&&e.getAttribute&&e.getAttribute(t)||n},On=function(e,t){return(e=e.split(",")).forEach(t)||e},Kt=function(e){return Math.round(e*1e5)/1e5||0},_n=function(e){return Math.round(e*1e7)/1e7||0},Ws=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},G1=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},ul=function(){var e=Mr.length,t=Mr.slice(0),n,i;for(cu={},Mr.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Fm=function(e,t,n,i){Mr.length&&!Sn&&ul(),e.render(t,n,i||Sn&&t<0&&(e._initted||e._startAt)),Mr.length&&!Sn&&ul()},km=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(Pm).length<2?t:hn(e)?e.trim():e},Bm=function(e){return e},si=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},V1=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},ts=function(e,t){for(var n in t)e[n]=t[n];return e},sp=function s(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=Ci(t[n])?s(e[n]||(e[n]={}),t[n]):t[n]);return e},hl=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},Xa=function(e){var t=e.parent||Gt,n=e.keyframes?V1(En(e.keyframes)):si;if(Nn(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},W1=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},zm=function(e,t,n,i,r){n===void 0&&(n="_first"),i===void 0&&(i="_last");var a=e[i],o;if(r)for(o=t[r];a&&a[r]>o;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=a,t.parent=t._dp=e,t},Ml=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var r=t._prev,a=t._next;r?r._next=a:e[n]===t&&(e[n]=a),a?a._prev=r:e[i]===t&&(e[i]=r),t._next=t._prev=t.parent=null},Sr=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove(e),e._act=0},$r=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},X1=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},uu=function(e,t,n,i){return e._startAt&&(Sn?e._startAt.revert(Qo):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},q1=function s(e){return!e||e._ts&&s(e.parent)},ap=function(e){return e._repeat?ia(e._tTime,e=e.duration()+e._rDelay)*e:0},ia=function(e,t){var n=Math.floor(e/=t);return e&&n===e?n-1:n},fl=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},bl=function(e){return e._end=_n(e._start+(e._tDur/Math.abs(e._ts||e._rts||Ct)||0))},Sl=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=_n(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),bl(e),n._dirty||$r(n,e)),e},Hm=function(e,t){var n;if((t._time||t._initted&&!t._dur)&&(n=fl(e.rawTime(),t),(!t._dur||co(0,t.totalDuration(),n)-t._tTime>Ct)&&t.render(n,!0)),$r(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-Ct}},Si=function(e,t,n,i){return t.parent&&Sr(t),t._start=_n((er(n)?n:n||e!==Gt?Zn(e,n,t):e._time)+t._delay),t._end=_n(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),zm(e,t,"_first","_last",e._sort?"_start":0),hu(t)||(e._recent=t),i||Hm(e,t),e._ts<0&&Sl(e,e._tTime),e},Gm=function(e,t){return(jn.ScrollTrigger||Vu("scrollTrigger",t))&&jn.ScrollTrigger.create(t,e)},Vm=function(e,t,n,i,r){if(ju(e,t,r),!e._initted)return 1;if(!n&&e._pt&&!Sn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Nm!==Wn.frame)return Mr.push(e),e._lazy=[r,i],1},Y1=function s(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||s(t))},hu=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},j1=function(e,t,n,i){var r=e.ratio,a=t<0||!t&&(!e._start&&Y1(e)&&!(!e._initted&&hu(e))||(e._ts<0||e._dp._ts<0)&&!hu(e))?0:1,o=e._rDelay,l=0,c,u,h;if(o&&e._repeat&&(l=co(0,e._tDur,t),u=ia(l,o),e._yoyo&&u&1&&(a=1-a),u!==ia(e._tTime,o)&&(r=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==r||Sn||i||e._zTime===Ct||!t&&e._zTime){if(!e._initted&&Vm(e,t,i,n,l))return;for(h=e._zTime,e._zTime=t||(n?Ct:0),n||(n=t&&!h),e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=l,c=e._pt;c;)c.r(a,c.d),c=c._next;t<0&&uu(e,t,n,!0),e._onUpdate&&!n&&ri(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&ri(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&Sr(e,1),!n&&!Sn&&(ri(e,a?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},$1=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},ra=function(e,t,n,i){var r=e._repeat,a=_n(t)||0,o=e._tTime/e._tDur;return o&&!i&&(e._time*=a/e._dur),e._dur=a,e._tDur=r?r<0?1e10:_n(a*(r+1)+e._rDelay*r):a,o>0&&!i&&Sl(e,e._tTime=e._tDur*o),e.parent&&bl(e),n||$r(e.parent,e),e},op=function(e){return e instanceof In?$r(e):ra(e,e._dur)},K1={_start:0,endTime:Qa,totalDuration:Qa},Zn=function s(e,t,n){var i=e.labels,r=e._recent||K1,a=e.duration()>=ni?r.endTime(!1):e._dur,o,l,c;return hn(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",o=t.indexOf("="),l==="<"||l===">"?(o>=0&&(t=t.replace(/=/,"")),(l==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(o<0?r:n).totalDuration()/100:1)):o<0?(t in i||(i[t]=a),i[t]):(l=parseFloat(t.charAt(o-1)+t.substr(o+1)),c&&n&&(l=l/100*(En(n)?n[0]:n).totalDuration()),o>1?s(e,t.substr(0,o-1),n)+l:a+l)):t==null?a:+t},qa=function(e,t,n){var i=er(t[1]),r=(i?2:1)+(e<2?0:1),a=t[r],o,l;if(i&&(a.duration=t[1]),a.parent=n,e){for(o=a,l=n;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=Nn(l.vars.inherit)&&l.parent;a.immediateRender=Nn(o.immediateRender),e<2?a.runBackwards=1:a.startAt=t[r-1]}return new rn(t[0],a,t[r+1])},Tr=function(e,t){return e||e===0?t(e):t},co=function(e,t,n){return n<e?e:n>t?t:n},bn=function(e,t){return!hn(e)||!(t=B1.exec(e))?"":t[1]},Z1=function(e,t,n){return Tr(n,function(i){return co(e,t,i)})},fu=[].slice,Wm=function(e,t){return e&&Ci(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Ci(e[0]))&&!e.nodeType&&e!==Qn},J1=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var r;return hn(i)&&!t||Wm(i,1)?(r=n).push.apply(r,ii(i)):n.push(i)})||n},ii=function(e,t,n){return nn&&!t&&nn.selector?nn.selector(e):hn(e)&&!n&&(lu||!sa())?fu.call((t||Gu).querySelectorAll(e),0):En(e)?J1(e,n):Wm(e)?fu.call(e,0):e?[e]:[]},du=function(e){return e=ii(e)[0]||cl("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return ii(t,n.querySelectorAll?n:n===e?cl("Invalid scope")||Gu.createElement("div"):e)}},Xm=function(e){return e.sort(function(){return .5-Math.random()})},qm=function(e){if(Yt(e))return e;var t=Ci(e)?e:{each:e},n=Kr(t.ease),i=t.from||0,r=parseFloat(t.base)||0,a={},o=i>0&&i<1,l=isNaN(i)||o,c=t.axis,u=i,h=i;return hn(i)?u=h={center:.5,edges:.5,end:1}[i]||0:!o&&l&&(u=i[0],h=i[1]),function(f,d,v){var g=(v||t).length,m=a[g],p,S,y,T,E,A,R,L,M;if(!m){if(M=t.grid==="auto"?0:(t.grid||[1,ni])[1],!M){for(R=-ni;R<(R=v[M++].getBoundingClientRect().left)&&M<g;);M--}for(m=a[g]=[],p=l?Math.min(M,g)*u-.5:i%M,S=M===ni?0:l?g*h/M-.5:i/M|0,R=0,L=ni,A=0;A<g;A++)y=A%M-p,T=S-(A/M|0),m[A]=E=c?Math.abs(c==="y"?T:y):wm(y*y+T*T),E>R&&(R=E),E<L&&(L=E);i==="random"&&Xm(m),m.max=R-L,m.min=L,m.v=g=(parseFloat(t.amount)||parseFloat(t.each)*(M>g?g-1:c?c==="y"?g/M:M:Math.max(M,g/M))||0)*(i==="edges"?-1:1),m.b=g<0?r-g:r,m.u=bn(t.amount||t.each)||0,n=n&&g<0?ng(n):n}return g=(m[f]-m.min)/m.max||0,_n(m.b+(n?n(g):g)*m.v)+m.u}},pu=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=_n(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(er(n)?0:bn(n))}},Ym=function(e,t){var n=En(e),i,r;return!n&&Ci(e)&&(i=n=e.radius||ni,e.values?(e=ii(e.values),(r=!er(e[0]))&&(i*=i)):e=pu(e.increment)),Tr(t,n?Yt(e)?function(a){return r=e(a),Math.abs(r-a)<=i?r:a}:function(a){for(var o=parseFloat(r?a.x:a),l=parseFloat(r?a.y:0),c=ni,u=0,h=e.length,f,d;h--;)r?(f=e[h].x-o,d=e[h].y-l,f=f*f+d*d):f=Math.abs(e[h]-o),f<c&&(c=f,u=h);return u=!i||c<=i?e[u]:a,r||u===a||er(a)?u:u+bn(a)}:pu(e))},jm=function(e,t,n,i){return Tr(En(e)?!t:n===!0?!!(n=0):!i,function(){return En(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},Q1=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(r,a){return a(r)},i)}},eA=function(e,t){return function(n){return e(parseFloat(n))+(t||bn(n))}},tA=function(e,t,n){return Km(e,t,0,1,n)},$m=function(e,t,n){return Tr(n,function(i){return e[~~t(i)]})},nA=function s(e,t,n){var i=t-e;return En(e)?$m(e,s(0,e.length),t):Tr(n,function(r){return(i+(r-e)%i)%i+e})},iA=function s(e,t,n){var i=t-e,r=i*2;return En(e)?$m(e,s(0,e.length-1),t):Tr(n,function(a){return a=(r+(a-e)%r)%r||0,e+(a>i?r-a:a)})},eo=function(e){for(var t=0,n="",i,r,a,o;~(i=e.indexOf("random(",t));)a=e.indexOf(")",i),o=e.charAt(i+7)==="[",r=e.substr(i+7,a-i-7).match(o?Pm:ou),n+=e.substr(t,i-t)+jm(o?r:+r[0],o?0:+r[1],+r[2]||1e-5),t=a+1;return n+e.substr(t,e.length-t)},Km=function(e,t,n,i,r){var a=t-e,o=i-n;return Tr(r,function(l){return n+((l-e)/a*o||0)})},rA=function s(e,t,n,i){var r=isNaN(e+t)?0:function(d){return(1-d)*e+d*t};if(!r){var a=hn(e),o={},l,c,u,h,f;if(n===!0&&(i=1)&&(n=null),a)e={p:e},t={p:t};else if(En(e)&&!En(t)){for(u=[],h=e.length,f=h-2,c=1;c<h;c++)u.push(s(e[c-1],e[c]));h--,r=function(v){v*=h;var g=Math.min(f,~~v);return u[g](v-g)},n=t}else i||(e=ts(En(e)?[]:{},e));if(!u){for(l in t)Yu.call(o,e,l,"get",t[l]);r=function(v){return Zu(v,o)||(a?e.p:e)}}}return Tr(n,r)},lp=function(e,t,n){var i=e.labels,r=ni,a,o,l;for(a in i)o=i[a]-t,o<0==!!n&&o&&r>(o=Math.abs(o))&&(l=a,r=o);return l},ri=function(e,t,n){var i=e.vars,r=i[t],a=nn,o=e._ctx,l,c,u;if(r)return l=i[t+"Params"],c=i.callbackScope||e,n&&Mr.length&&ul(),o&&(nn=o),u=l?r.apply(c,l):r.call(c),nn=a,u},Na=function(e){return Sr(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Sn),e.progress()<1&&ri(e,"onInterrupt"),e},zs,Zm=[],Jm=function(e){if(!Hu()){Zm.push(e);return}e=!e.name&&e.default||e;var t=e.name,n=Yt(e),i=t&&!n&&e.init?function(){this._props=[]}:e,r={init:Qa,render:Zu,add:Yu,kill:yA,modifier:xA,rawVars:0},a={targetTest:0,get:0,getSetter:Ku,aliases:{},register:0};if(sa(),e!==i){if(Vn[t])return;si(i,si(hl(e,r),a)),ts(i.prototype,ts(r,hl(e,a))),Vn[i.prop=t]=i,e.targetTest&&(el.push(i),Wu[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Um(t,i),e.register&&e.register(kn,i,Fn)},wt=255,Oa={aqua:[0,wt,wt],lime:[0,wt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,wt],navy:[0,0,128],white:[wt,wt,wt],olive:[128,128,0],yellow:[wt,wt,0],orange:[wt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[wt,0,0],pink:[wt,192,203],cyan:[0,wt,wt],transparent:[wt,wt,wt,0]},Fc=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*wt+.5|0},Qm=function(e,t,n){var i=e?er(e)?[e>>16,e>>8&wt,e&wt]:0:Oa.black,r,a,o,l,c,u,h,f,d,v;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Oa[e])i=Oa[e];else if(e.charAt(0)==="#"){if(e.length<6&&(r=e.charAt(1),a=e.charAt(2),o=e.charAt(3),e="#"+r+r+a+a+o+o+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&wt,i&wt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&wt,e&wt]}else if(e.substr(0,3)==="hsl"){if(i=v=e.match(ou),!t)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,a=u<=.5?u*(c+1):u+c-u*c,r=u*2-a,i.length>3&&(i[3]*=1),i[0]=Fc(l+1/3,r,a),i[1]=Fc(l,r,a),i[2]=Fc(l-1/3,r,a);else if(~e.indexOf("="))return i=e.match(Cm),n&&i.length<4&&(i[3]=1),i}else i=e.match(ou)||Oa.transparent;i=i.map(Number)}return t&&!v&&(r=i[0]/wt,a=i[1]/wt,o=i[2]/wt,h=Math.max(r,a,o),f=Math.min(r,a,o),u=(h+f)/2,h===f?l=c=0:(d=h-f,c=u>.5?d/(2-h-f):d/(h+f),l=h===r?(a-o)/d+(a<o?6:0):h===a?(o-r)/d+2:(r-a)/d+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},eg=function(e){var t=[],n=[],i=-1;return e.split(br).forEach(function(r){var a=r.match(Bs)||[];t.push.apply(t,a),n.push(i+=a.length+1)}),t.c=n,t},cp=function(e,t,n){var i="",r=(e+i).match(br),a=t?"hsla(":"rgba(",o=0,l,c,u,h;if(!r)return e;if(r=r.map(function(f){return(f=Qm(f,t,1))&&a+(t?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(u=eg(e),l=n.c,l.join(i)!==u.c.join(i)))for(c=e.replace(br,"1").split(Bs),h=c.length-1;o<h;o++)i+=c[o]+(~l.indexOf(o)?r.shift()||a+"0,0,0,0)":(u.length?u:r.length?r:n).shift());if(!c)for(c=e.split(br),h=c.length-1;o<h;o++)i+=c[o]+r[o];return i+c[h]},br=function(){var s="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Oa)s+="|"+e+"\\b";return new RegExp(s+")","gi")}(),sA=/hsl[a]?\(/,tg=function(e){var t=e.join(" "),n;if(br.lastIndex=0,br.test(t))return n=sA.test(t),e[1]=cp(e[1],n),e[0]=cp(e[0],n,eg(e[1])),!0},to,Wn=function(){var s=Date.now,e=500,t=33,n=s(),i=n,r=1e3/240,a=r,o=[],l,c,u,h,f,d,v=function g(m){var p=s()-i,S=m===!0,y,T,E,A;if(p>e&&(n+=p-t),i+=p,E=i-n,y=E-a,(y>0||S)&&(A=++h.frame,f=E-h.time*1e3,h.time=E=E/1e3,a+=y+(y>=r?4:r-y),T=1),S||(l=c(g)),T)for(d=0;d<o.length;d++)o[d](E,f,A,m)};return h={time:0,frame:0,tick:function(){v(!0)},deltaRatio:function(m){return f/(1e3/(m||60))},wake:function(){Dm&&(!lu&&Hu()&&(Qn=lu=window,Gu=Qn.document||{},jn.gsap=kn,(Qn.gsapVersions||(Qn.gsapVersions=[])).push(kn.version),Im(ll||Qn.GreenSockGlobals||!Qn.gsap&&Qn||{}),u=Qn.requestAnimationFrame,Zm.forEach(Jm)),l&&h.sleep(),c=u||function(m){return setTimeout(m,a-h.time*1e3+1|0)},to=1,v(2))},sleep:function(){(u?Qn.cancelAnimationFrame:clearTimeout)(l),to=0,c=Qa},lagSmoothing:function(m,p){e=m||1/0,t=Math.min(p||33,e)},fps:function(m){r=1e3/(m||240),a=h.time*1e3+r},add:function(m,p,S){var y=p?function(T,E,A,R){m(T,E,A,R),h.remove(y)}:m;return h.remove(m),o[S?"unshift":"push"](y),sa(),y},remove:function(m,p){~(p=o.indexOf(m))&&o.splice(p,1)&&d>=p&&d--},_listeners:o},h}(),sa=function(){return!to&&Wn.wake()},ut={},aA=/^[\d.\-M][\d.\-,\s]/,oA=/["']/g,lA=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],r=1,a=n.length,o,l,c;r<a;r++)l=n[r],o=r!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),t[i]=isNaN(c)?c.replace(oA,"").trim():+c,i=l.substr(o+1).trim();return t},cA=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},uA=function(e){var t=(e+"").split("("),n=ut[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[lA(t[1])]:cA(e).split(",").map(km)):ut._CE&&aA.test(e)?ut._CE("",e):n},ng=function(e){return function(t){return 1-e(1-t)}},ig=function s(e,t){for(var n=e._first,i;n;)n instanceof In?s(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?s(n.timeline,t):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=t)),n=n._next},Kr=function(e,t){return e&&(Yt(e)?e:ut[e]||uA(e))||t},rs=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var r={easeIn:t,easeOut:n,easeInOut:i},a;return On(e,function(o){ut[o]=jn[o]=r,ut[a=o.toLowerCase()]=n;for(var l in r)ut[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=ut[o+"."+l]=r[l]}),r},rg=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},kc=function s(e,t,n){var i=t>=1?t:1,r=(n||(e?.3:.45))/(t<1?t:1),a=r/au*(Math.asin(1/i)||0),o=function(u){return u===1?1:i*Math.pow(2,-10*u)*k1((u-a)*r)+1},l=e==="out"?o:e==="in"?function(c){return 1-o(1-c)}:rg(o);return r=au/r,l.config=function(c,u){return s(e,c,u)},l},Bc=function s(e,t){t===void 0&&(t=1.70158);var n=function(a){return a?--a*a*((t+1)*a+t)+1:0},i=e==="out"?n:e==="in"?function(r){return 1-n(1-r)}:rg(n);return i.config=function(r){return s(e,r)},i};On("Linear,Quad,Cubic,Quart,Quint,Strong",function(s,e){var t=e<5?e+1:e;rs(s+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});ut.Linear.easeNone=ut.none=ut.Linear.easeIn;rs("Elastic",kc("in"),kc("out"),kc());(function(s,e){var t=1/e,n=2*t,i=2.5*t,r=function(o){return o<t?s*o*o:o<n?s*Math.pow(o-1.5/e,2)+.75:o<i?s*(o-=2.25/e)*o+.9375:s*Math.pow(o-2.625/e,2)+.984375};rs("Bounce",function(a){return 1-r(1-a)},r)})(7.5625,2.75);rs("Expo",function(s){return s?Math.pow(2,10*(s-1)):0});rs("Circ",function(s){return-(wm(1-s*s)-1)});rs("Sine",function(s){return s===1?1:-F1(s*N1)+1});rs("Back",Bc("in"),Bc("out"),Bc());ut.SteppedEase=ut.steps=jn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),r=t?1:0,a=1-Ct;return function(o){return((i*co(0,a,o)|0)+r)*n}}};na.ease=ut["quad.out"];On("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(s){return Xu+=s+","+s+"Params,"});var sg=function(e,t){this.id=O1++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Om,this.set=t?t.getSetter:Ku},aa=function(){function s(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,ra(this,+t.duration,1,1),this.data=t.data,nn&&(this._ctx=nn,nn.data.push(this)),to||Wn.wake()}var e=s.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,ra(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(sa(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(Sl(this,n),!r._dp||r.parent||Hm(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Si(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===Ct||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Fm(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+ap(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.ratio},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+ap(this),i):this.duration()?Math.min(1,this._time/this._dur):this.ratio},e.iteration=function(n,i){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*r,i):this._repeat?ia(this._tTime,r)+1:1},e.timeScale=function(n){if(!arguments.length)return this._rts===-Ct?0:this._rts;if(this._rts===n)return this;var i=this.parent&&this._ts?fl(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Ct?0:this._rts,this.totalTime(co(-Math.abs(this._delay),this._tDur,i),!0),bl(this),X1(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(sa(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Ct&&(this._tTime-=Ct)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Si(i,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(Nn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?fl(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=H1);var i=Sn;return Sn=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Sn=i,this},e.globalTime=function(n){for(var i=this,r=arguments.length?n:i.rawTime();i;)r=i._start+r/(i._ts||1),i=i._dp;return!this.parent&&this._sat?this._sat.vars.immediateRender?-1:this._sat.globalTime(n):r},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,op(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,op(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(Zn(this,n),Nn(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Nn(i))},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Ct:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-Ct,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,r;return!!(!n||this._ts&&this._initted&&n.isActive()&&(r=n.rawTime(!0))>=i&&r<this.endTime(!0)-Ct)},e.eventCallback=function(n,i,r){var a=this.vars;return arguments.length>1?(i?(a[n]=i,r&&(a[n+"Params"]=r),n==="onUpdate"&&(this._onUpdate=i)):delete a[n],this):a[n]},e.then=function(n){var i=this;return new Promise(function(r){var a=Yt(n)?n:Bm,o=function(){var c=i.then;i.then=null,Yt(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=c),r(a),i.then=c};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?o():i._prom=o})},e.kill=function(){Na(this)},s}();si(aa.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Ct,_prom:0,_ps:!1,_rts:1});var In=function(s){Am(e,s);function e(n,i){var r;return n===void 0&&(n={}),r=s.call(this,n)||this,r.labels={},r.smoothChildTiming=!!n.smoothChildTiming,r.autoRemoveChildren=!!n.autoRemoveChildren,r._sort=Nn(n.sortChildren),Gt&&Si(n.parent||Gt,Xi(r),i),n.reversed&&r.reverse(),n.paused&&r.paused(!0),n.scrollTrigger&&Gm(Xi(r),n.scrollTrigger),r}var t=e.prototype;return t.to=function(i,r,a){return qa(0,arguments,this),this},t.from=function(i,r,a){return qa(1,arguments,this),this},t.fromTo=function(i,r,a,o){return qa(2,arguments,this),this},t.set=function(i,r,a){return r.duration=0,r.parent=this,Xa(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new rn(i,r,Zn(this,a),1),this},t.call=function(i,r,a){return Si(this,rn.delayedCall(0,i,r),a)},t.staggerTo=function(i,r,a,o,l,c,u){return a.duration=r,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=u,a.parent=this,new rn(i,a,Zn(this,l)),this},t.staggerFrom=function(i,r,a,o,l,c,u){return a.runBackwards=1,Xa(a).immediateRender=Nn(a.immediateRender),this.staggerTo(i,r,a,o,l,c,u)},t.staggerFromTo=function(i,r,a,o,l,c,u,h){return o.startAt=a,Xa(o).immediateRender=Nn(o.immediateRender),this.staggerTo(i,r,o,l,c,u,h)},t.render=function(i,r,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:_n(i),h=this._zTime<0!=i<0&&(this._initted||!c),f,d,v,g,m,p,S,y,T,E,A,R;if(this!==Gt&&u>l&&i>=0&&(u=l),u!==this._tTime||a||h){if(o!==this._time&&c&&(u+=this._time-o,i+=this._time-o),f=u,T=this._start,y=this._ts,p=!y,h&&(c||(o=this._zTime),(i||!r)&&(this._zTime=i)),this._repeat){if(A=this._yoyo,m=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,r,a);if(f=_n(u%m),u===l?(g=this._repeat,f=c):(g=~~(u/m),g&&g===u/m&&(f=c,g--),f>c&&(f=c)),E=ia(this._tTime,m),!o&&this._tTime&&E!==g&&this._tTime-E*m-this._dur<=0&&(E=g),A&&g&1&&(f=c-f,R=1),g!==E&&!this._lock){var L=A&&E&1,M=L===(A&&g&1);if(g<E&&(L=!L),o=L?0:c,this._lock=1,this.render(o||(R?0:_n(g*m)),r,!c)._lock=0,this._tTime=u,!r&&this.parent&&ri(this,"onRepeat"),this.vars.repeatRefresh&&!R&&(this.invalidate()._lock=1),o&&o!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,M&&(this._lock=2,o=L?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!R&&this.invalidate()),this._lock=0,!this._ts&&!p)return this;ig(this,R)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(S=$1(this,_n(o),_n(f)),S&&(u-=f-(f=S._start))),this._tTime=u,this._time=f,this._act=!y,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,o=0),!o&&f&&!r&&!g&&(ri(this,"onStart"),this._tTime!==u))return this;if(f>=o&&i>=0)for(d=this._first;d;){if(v=d._next,(d._act||f>=d._start)&&d._ts&&S!==d){if(d.parent!==this)return this.render(i,r,a);if(d.render(d._ts>0?(f-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(f-d._start)*d._ts,r,a),f!==this._time||!this._ts&&!p){S=0,v&&(u+=this._zTime=-Ct);break}}d=v}else{d=this._last;for(var D=i<0?i:f;d;){if(v=d._prev,(d._act||D<=d._end)&&d._ts&&S!==d){if(d.parent!==this)return this.render(i,r,a);if(d.render(d._ts>0?(D-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(D-d._start)*d._ts,r,a||Sn&&(d._initted||d._startAt)),f!==this._time||!this._ts&&!p){S=0,v&&(u+=this._zTime=D?-Ct:Ct);break}}d=v}}if(S&&!r&&(this.pause(),S.render(f>=o?0:-Ct)._zTime=f>=o?1:-1,this._ts))return this._start=T,bl(this),this.render(i,r,a);this._onUpdate&&!r&&ri(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&o)&&(T===this._start||Math.abs(y)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&Sr(this,1),!r&&!(i<0&&!o)&&(u||o||!l)&&(ri(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,r){var a=this;if(er(r)||(r=Zn(this,r,i)),!(i instanceof aa)){if(En(i))return i.forEach(function(o){return a.add(o,r)}),this;if(hn(i))return this.addLabel(i,r);if(Yt(i))i=rn.delayedCall(0,i);else return this}return this!==i?Si(this,i,r):this},t.getChildren=function(i,r,a,o){i===void 0&&(i=!0),r===void 0&&(r=!0),a===void 0&&(a=!0),o===void 0&&(o=-ni);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof rn?r&&l.push(c):(a&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,r,a)))),c=c._next;return l},t.getById=function(i){for(var r=this.getChildren(1,1,1),a=r.length;a--;)if(r[a].vars.id===i)return r[a]},t.remove=function(i){return hn(i)?this.removeLabel(i):Yt(i)?this.killTweensOf(i):(Ml(this,i),i===this._recent&&(this._recent=this._last),$r(this))},t.totalTime=function(i,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=_n(Wn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),s.prototype.totalTime.call(this,i,r),this._forcing=0,this):this._tTime},t.addLabel=function(i,r){return this.labels[i]=Zn(this,r),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,r,a){var o=rn.delayedCall(0,r||Qa,a);return o.data="isPause",this._hasPause=1,Si(this,o,Zn(this,i))},t.removePause=function(i){var r=this._first;for(i=Zn(this,i);r;)r._start===i&&r.data==="isPause"&&Sr(r),r=r._next},t.killTweensOf=function(i,r,a){for(var o=this.getTweensOf(i,a),l=o.length;l--;)gr!==o[l]&&o[l].kill(i,r);return this},t.getTweensOf=function(i,r){for(var a=[],o=ii(i),l=this._first,c=er(r),u;l;)l instanceof rn?G1(l._targets,o)&&(c?(!gr||l._initted&&l._ts)&&l.globalTime(0)<=r&&l.globalTime(l.totalDuration())>r:!r||l.isActive())&&a.push(l):(u=l.getTweensOf(o,r)).length&&a.push.apply(a,u),l=l._next;return a},t.tweenTo=function(i,r){r=r||{};var a=this,o=Zn(a,i),l=r,c=l.startAt,u=l.onStart,h=l.onStartParams,f=l.immediateRender,d,v=rn.to(a,si({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:r.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||Ct,onStart:function(){if(a.pause(),!d){var m=r.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());v._dur!==m&&ra(v,m,0,1).render(v._time,!0,!0),d=1}u&&u.apply(v,h||[])}},r));return f?v.render(0):v},t.tweenFromTo=function(i,r,a){return this.tweenTo(r,si({startAt:{time:Zn(this,i)}},a))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),lp(this,Zn(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),lp(this,Zn(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+Ct)},t.shiftChildren=function(i,r,a){a===void 0&&(a=0);for(var o=this._first,l=this.labels,c;o;)o._start>=a&&(o._start+=i,o._end+=i),o=o._next;if(r)for(c in l)l[c]>=a&&(l[c]+=i);return $r(this)},t.invalidate=function(i){var r=this._first;for(this._lock=0;r;)r.invalidate(i),r=r._next;return s.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var r=this._first,a;r;)a=r._next,this.remove(r),r=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),$r(this)},t.totalDuration=function(i){var r=0,a=this,o=a._last,l=ni,c,u,h;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(h=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),u=o._start,u>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,Si(a,o,u-o._delay,1)._lock=0):l=u,u<0&&o._ts&&(r-=u,(!h&&!a._dp||h&&h.smoothChildTiming)&&(a._start+=u/a._ts,a._time-=u,a._tTime-=u),a.shiftChildren(-u,!1,-1/0),l=0),o._end>r&&o._ts&&(r=o._end),o=c;ra(a,a===Gt&&a._time>r?a._time:r,1,1),a._dirty=0}return a._tDur},e.updateRoot=function(i){if(Gt._ts&&(Fm(Gt,fl(i,Gt)),Nm=Wn.frame),Wn.frame>=rp){rp+=Yn.autoSleep||120;var r=Gt._first;if((!r||!r._ts)&&Yn.autoSleep&&Wn._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||Wn.sleep()}}},e}(aa);si(In.prototype,{_lock:0,_hasPause:0,_forcing:0});var hA=function(e,t,n,i,r,a,o){var l=new Fn(this._pt,e,t,0,1,hg,null,r),c=0,u=0,h,f,d,v,g,m,p,S;for(l.b=n,l.e=i,n+="",i+="",(p=~i.indexOf("random("))&&(i=eo(i)),a&&(S=[n,i],a(S,e,t),n=S[0],i=S[1]),f=n.match(Nc)||[];h=Nc.exec(i);)v=h[0],g=i.substring(c,h.index),d?d=(d+1)%5:g.substr(-5)==="rgba("&&(d=1),v!==f[u++]&&(m=parseFloat(f[u-1])||0,l._pt={_next:l._pt,p:g||u===1?g:",",s:m,c:v.charAt(1)==="="?Ws(m,v)-m:parseFloat(v)-m,m:d&&d<4?Math.round:0},c=Nc.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=o,(Lm.test(i)||p)&&(l.e=0),this._pt=l,l},Yu=function(e,t,n,i,r,a,o,l,c,u){Yt(i)&&(i=i(r||0,e,a));var h=e[t],f=n!=="get"?n:Yt(h)?c?e[t.indexOf("set")||!Yt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():h,d=Yt(h)?c?gA:cg:$u,v;if(hn(i)&&(~i.indexOf("random(")&&(i=eo(i)),i.charAt(1)==="="&&(v=Ws(f,i)+(bn(f)||0),(v||v===0)&&(i=v))),!u||f!==i||mu)return!isNaN(f*i)&&i!==""?(v=new Fn(this._pt,e,t,+f||0,i-(f||0),typeof h=="boolean"?vA:ug,0,d),c&&(v.fp=c),o&&v.modifier(o,this,e),this._pt=v):(!h&&!(t in e)&&Vu(t,i),hA.call(this,e,t,f,i,d,l||Yn.stringFilter,c))},fA=function(e,t,n,i,r){if(Yt(e)&&(e=Ya(e,r,t,n,i)),!Ci(e)||e.style&&e.nodeType||En(e)||Rm(e))return hn(e)?Ya(e,r,t,n,i):e;var a={},o;for(o in e)a[o]=Ya(e[o],r,t,n,i);return a},ag=function(e,t,n,i,r,a){var o,l,c,u;if(Vn[e]&&(o=new Vn[e]).init(r,o.rawVars?t[e]:fA(t[e],i,r,a,n),n,i,a)!==!1&&(n._pt=l=new Fn(n._pt,r,e,0,1,o.render,o,0,o.priority),n!==zs))for(c=n._ptLookup[n._targets.indexOf(r)],u=o._props.length;u--;)c[o._props[u]]=l;return o},gr,mu,ju=function s(e,t,n){var i=e.vars,r=i.ease,a=i.startAt,o=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.onUpdateParams,h=i.callbackScope,f=i.runBackwards,d=i.yoyoEase,v=i.keyframes,g=i.autoRevert,m=e._dur,p=e._startAt,S=e._targets,y=e.parent,T=y&&y.data==="nested"?y.vars.targets:S,E=e._overwrite==="auto"&&!Bu,A=e.timeline,R,L,M,D,W,ne,B,O,H,te,$,J,oe;if(A&&(!v||!r)&&(r="none"),e._ease=Kr(r,na.ease),e._yEase=d?ng(Kr(d===!0?r:d,na.ease)):0,d&&e._yoyo&&!e._repeat&&(d=e._yEase,e._yEase=e._ease,e._ease=d),e._from=!A&&!!i.runBackwards,!A||v&&!i.stagger){if(O=S[0]?jr(S[0]).harness:0,J=O&&i[O.prop],R=hl(i,Wu),p&&(p._zTime<0&&p.progress(1),t<0&&f&&o&&!g?p.render(-1,!0):p.revert(f&&m?Qo:z1),p._lazy=0),a){if(Sr(e._startAt=rn.set(S,si({data:"isStart",overwrite:!1,parent:y,immediateRender:!0,lazy:!p&&Nn(l),startAt:null,delay:0,onUpdate:c,onUpdateParams:u,callbackScope:h,stagger:0},a))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Sn||!o&&!g)&&e._startAt.revert(Qo),o&&m&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(f&&m&&!p){if(t&&(o=!1),M=si({overwrite:!1,data:"isFromStart",lazy:o&&!p&&Nn(l),immediateRender:o,stagger:0,parent:y},R),J&&(M[O.prop]=J),Sr(e._startAt=rn.set(S,M)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Sn?e._startAt.revert(Qo):e._startAt.render(-1,!0)),e._zTime=t,!o)s(e._startAt,Ct,Ct);else if(!t)return}for(e._pt=e._ptCache=0,l=m&&Nn(l)||l&&!m,L=0;L<S.length;L++){if(W=S[L],B=W._gsap||qu(S)[L]._gsap,e._ptLookup[L]=te={},cu[B.id]&&Mr.length&&ul(),$=T===S?L:T.indexOf(W),O&&(H=new O).init(W,J||R,e,$,T)!==!1&&(e._pt=D=new Fn(e._pt,W,H.name,0,1,H.render,H,0,H.priority),H._props.forEach(function(ue){te[ue]=D}),H.priority&&(ne=1)),!O||J)for(M in R)Vn[M]&&(H=ag(M,R,e,$,W,T))?H.priority&&(ne=1):te[M]=D=Yu.call(e,W,M,"get",R[M],$,T,0,i.stringFilter);e._op&&e._op[L]&&e.kill(W,e._op[L]),E&&e._pt&&(gr=e,Gt.killTweensOf(W,te,e.globalTime(t)),oe=!e.parent,gr=0),e._pt&&l&&(cu[B.id]=1)}ne&&fg(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!oe,v&&t<=0&&A.render(ni,!0,!0)},dA=function(e,t,n,i,r,a,o){var l=(e._pt&&e._ptCache||(e._ptCache={}))[t],c,u,h,f;if(!l)for(l=e._ptCache[t]=[],h=e._ptLookup,f=e._targets.length;f--;){if(c=h[f][t],c&&c.d&&c.d._pt)for(c=c.d._pt;c&&c.p!==t&&c.fp!==t;)c=c._next;if(!c)return mu=1,e.vars[t]="+=0",ju(e,o),mu=0,1;l.push(c)}for(f=l.length;f--;)u=l[f],c=u._pt||u,c.s=(i||i===0)&&!r?i:c.s+(i||0)+a*c.c,c.c=n-c.s,u.e&&(u.e=Kt(n)+bn(u.e)),u.b&&(u.b=c.s+bn(u.b))},pA=function(e,t){var n=e[0]?jr(e[0]).harness:0,i=n&&n.aliases,r,a,o,l;if(!i)return t;r=ts({},t);for(a in i)if(a in r)for(l=i[a].split(","),o=l.length;o--;)r[l[o]]=r[a];return r},mA=function(e,t,n,i){var r=t.ease||i||"power1.inOut",a,o;if(En(t))o=n[e]||(n[e]=[]),t.forEach(function(l,c){return o.push({t:c/(t.length-1)*100,v:l,e:r})});else for(a in t)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(e),v:t[a],e:r})},Ya=function(e,t,n,i,r){return Yt(e)?e.call(t,n,i,r):hn(e)&&~e.indexOf("random(")?eo(e):e},og=Xu+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",lg={};On(og+",id,stagger,delay,duration,paused,scrollTrigger",function(s){return lg[s]=1});var rn=function(s){Am(e,s);function e(n,i,r,a){var o;typeof i=="number"&&(r.duration=i,i=r,r=null),o=s.call(this,a?i:Xa(i))||this;var l=o.vars,c=l.duration,u=l.delay,h=l.immediateRender,f=l.stagger,d=l.overwrite,v=l.keyframes,g=l.defaults,m=l.scrollTrigger,p=l.yoyoEase,S=i.parent||Gt,y=(En(n)||Rm(n)?er(n[0]):"length"in i)?[n]:ii(n),T,E,A,R,L,M,D,W;if(o._targets=y.length?qu(y):cl("GSAP target "+n+" not found. https://greensock.com",!Yn.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=d,v||f||Ko(c)||Ko(u)){if(i=o.vars,T=o.timeline=new In({data:"nested",defaults:g||{},targets:S&&S.data==="nested"?S.vars.targets:y}),T.kill(),T.parent=T._dp=Xi(o),T._start=0,f||Ko(c)||Ko(u)){if(R=y.length,D=f&&qm(f),Ci(f))for(L in f)~og.indexOf(L)&&(W||(W={}),W[L]=f[L]);for(E=0;E<R;E++)A=hl(i,lg),A.stagger=0,p&&(A.yoyoEase=p),W&&ts(A,W),M=y[E],A.duration=+Ya(c,Xi(o),E,M,y),A.delay=(+Ya(u,Xi(o),E,M,y)||0)-o._delay,!f&&R===1&&A.delay&&(o._delay=u=A.delay,o._start+=u,A.delay=0),T.to(M,A,D?D(E,M,y):0),T._ease=ut.none;T.duration()?c=u=0:o.timeline=0}else if(v){Xa(si(T.vars.defaults,{ease:"none"})),T._ease=Kr(v.ease||i.ease||"none");var ne=0,B,O,H;if(En(v))v.forEach(function(te){return T.to(y,te,">")}),T.duration();else{A={};for(L in v)L==="ease"||L==="easeEach"||mA(L,v[L],A,v.easeEach);for(L in A)for(B=A[L].sort(function(te,$){return te.t-$.t}),ne=0,E=0;E<B.length;E++)O=B[E],H={ease:O.e,duration:(O.t-(E?B[E-1].t:0))/100*c},H[L]=O.v,T.to(y,H,ne),ne+=H.duration;T.duration()<c&&T.to({},{duration:c-T.duration()})}}c||o.duration(c=T.duration())}else o.timeline=0;return d===!0&&!Bu&&(gr=Xi(o),Gt.killTweensOf(y),gr=0),Si(S,Xi(o),r),i.reversed&&o.reverse(),i.paused&&o.paused(!0),(h||!c&&!v&&o._start===_n(S._time)&&Nn(h)&&q1(Xi(o))&&S.data!=="nested")&&(o._tTime=-Ct,o.render(Math.max(0,-u)||0)),m&&Gm(Xi(o),m),o}var t=e.prototype;return t.render=function(i,r,a){var o=this._time,l=this._tDur,c=this._dur,u=i<0,h=i>l-Ct&&!u?l:i<Ct?0:i,f,d,v,g,m,p,S,y,T;if(!c)j1(this,i,r,a);else if(h!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u){if(f=h,y=this.timeline,this._repeat){if(g=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(g*100+i,r,a);if(f=_n(h%g),h===l?(v=this._repeat,f=c):(v=~~(h/g),v&&v===h/g&&(f=c,v--),f>c&&(f=c)),p=this._yoyo&&v&1,p&&(T=this._yEase,f=c-f),m=ia(this._tTime,g),f===o&&!a&&this._initted)return this._tTime=h,this;v!==m&&(y&&this._yEase&&ig(y,p),this.vars.repeatRefresh&&!p&&!this._lock&&(this._lock=a=1,this.render(_n(g*v),!0).invalidate()._lock=0))}if(!this._initted){if(Vm(this,u?i:f,a,r,h))return this._tTime=0,this;if(o!==this._time)return this;if(c!==this._dur)return this.render(i,r,a)}if(this._tTime=h,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=S=(T||this._ease)(f/c),this._from&&(this.ratio=S=1-S),f&&!o&&!r&&!v&&(ri(this,"onStart"),this._tTime!==h))return this;for(d=this._pt;d;)d.r(S,d.d),d=d._next;y&&y.render(i<0?i:!f&&p?-Ct:y._dur*y._ease(f/this._dur),r,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!r&&(u&&uu(this,i,r,a),ri(this,"onUpdate")),this._repeat&&v!==m&&this.vars.onRepeat&&!r&&this.parent&&ri(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&uu(this,i,!0,!0),(i||!c)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&Sr(this,1),!r&&!(u&&!o)&&(h||o||p)&&(ri(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),s.prototype.invalidate.call(this,i)},t.resetTo=function(i,r,a,o){to||Wn.wake(),this._ts||this.play();var l=Math.min(this._dur,(this._dp._time-this._start)*this._ts),c;return this._initted||ju(this,l),c=this._ease(l/this._dur),dA(this,i,r,a,o,c,l)?this.resetTo(i,r,a,o):(Sl(this,0),this.parent||zm(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,r){if(r===void 0&&(r="all"),!i&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?Na(this):this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,r,gr&&gr.vars.overwrite!==!0)._first||Na(this),this.parent&&a!==this.timeline.totalDuration()&&ra(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=i?ii(i):o,c=this._ptLookup,u=this._pt,h,f,d,v,g,m,p;if((!r||r==="all")&&W1(o,l))return r==="all"&&(this._pt=0),Na(this);for(h=this._op=this._op||[],r!=="all"&&(hn(r)&&(g={},On(r,function(S){return g[S]=1}),r=g),r=pA(o,r)),p=o.length;p--;)if(~l.indexOf(o[p])){f=c[p],r==="all"?(h[p]=r,v=f,d={}):(d=h[p]=h[p]||{},v=r);for(g in v)m=f&&f[g],m&&((!("kill"in m.d)||m.d.kill(g)===!0)&&Ml(this,m,"_pt"),delete f[g]),d!=="all"&&(d[g]=1)}return this._initted&&!this._pt&&u&&Na(this),this},e.to=function(i,r){return new e(i,r,arguments[2])},e.from=function(i,r){return qa(1,arguments)},e.delayedCall=function(i,r,a,o){return new e(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:r,onReverseComplete:r,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},e.fromTo=function(i,r,a){return qa(2,arguments)},e.set=function(i,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new e(i,r)},e.killTweensOf=function(i,r,a){return Gt.killTweensOf(i,r,a)},e}(aa);si(rn.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});On("staggerTo,staggerFrom,staggerFromTo",function(s){rn[s]=function(){var e=new In,t=fu.call(arguments,0);return t.splice(s==="staggerFromTo"?5:4,0,0),e[s].apply(e,t)}});var $u=function(e,t,n){return e[t]=n},cg=function(e,t,n){return e[t](n)},gA=function(e,t,n,i){return e[t](i.fp,n)},_A=function(e,t,n){return e.setAttribute(t,n)},Ku=function(e,t){return Yt(e[t])?cg:zu(e[t])&&e.setAttribute?_A:$u},ug=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},vA=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},hg=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},Zu=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},xA=function(e,t,n,i){for(var r=this._pt,a;r;)a=r._next,r.p===i&&r.modifier(e,t,n),r=a},yA=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?Ml(this,t,"_pt"):t.dep||(n=1),t=i;return!n},MA=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},fg=function(e){for(var t=e._pt,n,i,r,a;t;){for(n=t._next,i=r;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:a)?t._prev._next=t:r=t,(t._next=i)?i._prev=t:a=t,t=n}e._pt=r},Fn=function(){function s(t,n,i,r,a,o,l,c,u){this.t=n,this.s=r,this.c=a,this.p=i,this.r=o||ug,this.d=l||this,this.set=c||$u,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=s.prototype;return e.modifier=function(n,i,r){this.mSet=this.mSet||this.set,this.set=MA,this.m=n,this.mt=r,this.tween=i},s}();On(Xu+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(s){return Wu[s]=1});jn.TweenMax=jn.TweenLite=rn;jn.TimelineLite=jn.TimelineMax=In;Gt=new In({sortChildren:!1,defaults:na,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Yn.stringFilter=tg;var oa=[],tl={},bA=[],up=0,zc=function(e){return(tl[e]||bA).map(function(t){return t()})},gu=function(){var e=Date.now(),t=[];e-up>2&&(zc("matchMediaInit"),oa.forEach(function(n){var i=n.queries,r=n.conditions,a,o,l,c;for(o in i)a=Qn.matchMedia(i[o]).matches,a&&(l=1),a!==r[o]&&(r[o]=a,c=1);c&&(n.revert(),l&&t.push(n))}),zc("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n)}),up=e,zc("matchMedia"))},dg=function(){function s(t,n){this.selector=n&&du(n),this.data=[],this._r=[],this.isReverted=!1,t&&this.add(t)}var e=s.prototype;return e.add=function(n,i,r){Yt(n)&&(r=i,i=n,n=Yt);var a=this,o=function(){var c=nn,u=a.selector,h;return c&&c!==a&&c.data.push(a),r&&(a.selector=du(r)),nn=a,h=i.apply(a,arguments),Yt(h)&&a._r.push(h),nn=c,a.selector=u,a.isReverted=!1,h};return a.last=o,n===Yt?o(a):n?a[n]=o:o},e.ignore=function(n){var i=nn;nn=null,n(this),nn=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof s?n.push.apply(n,i.getTweens()):i instanceof rn&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var r=this;if(n){var a=this.getTweens();this.data.forEach(function(l){l.data==="isFlip"&&(l.revert(),l.getChildren(!0,!0,!1).forEach(function(c){return a.splice(a.indexOf(c),1)}))}),a.map(function(l){return{g:l.globalTime(0),t:l}}).sort(function(l,c){return c.g-l.g||-1}).forEach(function(l){return l.t.revert(n)}),this.data.forEach(function(l){return!(l instanceof aa)&&l.revert&&l.revert(n)}),this._r.forEach(function(l){return l(n,r)}),this.isReverted=!0}else this.data.forEach(function(l){return l.kill&&l.kill()});if(this.clear(),i){var o=oa.indexOf(this);~o&&oa.splice(o,1)}},e.revert=function(n){this.kill(n||{})},s}(),SA=function(){function s(t){this.contexts=[],this.scope=t}var e=s.prototype;return e.add=function(n,i,r){Ci(n)||(n={matches:n});var a=new dg(0,r||this.scope),o=a.conditions={},l,c,u;this.contexts.push(a),i=a.add("onMatch",i),a.queries=n;for(c in n)c==="all"?u=1:(l=Qn.matchMedia(n[c]),l&&(oa.indexOf(a)<0&&oa.push(a),(o[c]=l.matches)&&(u=1),l.addListener?l.addListener(gu):l.addEventListener("change",gu)));return u&&i(a),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},s}(),dl={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return Jm(i)})},timeline:function(e){return new In(e)},getTweensOf:function(e,t){return Gt.getTweensOf(e,t)},getProperty:function(e,t,n,i){hn(e)&&(e=ii(e)[0]);var r=jr(e||{}).get,a=n?Bm:km;return n==="native"&&(n=""),e&&(t?a((Vn[t]&&Vn[t].get||r)(e,t,n,i)):function(o,l,c){return a((Vn[o]&&Vn[o].get||r)(e,o,l,c))})},quickSetter:function(e,t,n){if(e=ii(e),e.length>1){var i=e.map(function(u){return kn.quickSetter(u,t,n)}),r=i.length;return function(u){for(var h=r;h--;)i[h](u)}}e=e[0]||{};var a=Vn[t],o=jr(e),l=o.harness&&(o.harness.aliases||{})[t]||t,c=a?function(u){var h=new a;zs._pt=0,h.init(e,n?u+n:u,zs,0,[e]),h.render(1,h),zs._pt&&Zu(1,zs)}:o.set(e,l);return a?c:function(u){return c(e,l,n?u+n:u,o,1)}},quickTo:function(e,t,n){var i,r=kn.to(e,ts((i={},i[t]="+=0.1",i.paused=!0,i),n||{})),a=function(l,c,u){return r.resetTo(t,l,c,u)};return a.tween=r,a},isTweening:function(e){return Gt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Kr(e.ease,na.ease)),sp(na,e||{})},config:function(e){return sp(Yn,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,r=e.defaults,a=e.extendTimeline;(i||"").split(",").forEach(function(o){return o&&!Vn[o]&&!jn[o]&&cl(t+" effect requires "+o+" plugin.")}),Oc[t]=function(o,l,c){return n(ii(o),si(l||{},r),c)},a&&(In.prototype[t]=function(o,l,c){return this.add(Oc[t](o,Ci(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){ut[e]=Kr(t)},parseEase:function(e,t){return arguments.length?Kr(e,t):ut},getById:function(e){return Gt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new In(e),i,r;for(n.smoothChildTiming=Nn(e.smoothChildTiming),Gt.remove(n),n._dp=0,n._time=n._tTime=Gt._time,i=Gt._first;i;)r=i._next,(t||!(!i._dur&&i instanceof rn&&i.vars.onComplete===i._targets[0]))&&Si(n,i,i._start-i._delay),i=r;return Si(Gt,n,0),n},context:function(e,t){return e?new dg(e,t):nn},matchMedia:function(e){return new SA(e)},matchMediaRefresh:function(){return oa.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||gu()},addEventListener:function(e,t){var n=tl[e]||(tl[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=tl[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:nA,wrapYoyo:iA,distribute:qm,random:jm,snap:Ym,normalize:tA,getUnit:bn,clamp:Z1,splitColor:Qm,toArray:ii,selector:du,mapRange:Km,pipe:Q1,unitize:eA,interpolate:rA,shuffle:Xm},install:Im,effects:Oc,ticker:Wn,updateRoot:In.updateRoot,plugins:Vn,globalTimeline:Gt,core:{PropTween:Fn,globals:Um,Tween:rn,Timeline:In,Animation:aa,getCache:jr,_removeLinkedListItem:Ml,reverting:function(){return Sn},context:function(e){return e&&nn&&(nn.data.push(e),e._ctx=nn),nn},suppressOverwrites:function(e){return Bu=e}}};On("to,from,fromTo,delayedCall,set,killTweensOf",function(s){return dl[s]=rn[s]});Wn.add(In.updateRoot);zs=dl.to({},{duration:0});var EA=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},TA=function(e,t){var n=e._targets,i,r,a;for(i in t)for(r=n.length;r--;)a=e._ptLookup[r][i],a&&(a=a.d)&&(a._pt&&(a=EA(a,i)),a&&a.modifier&&a.modifier(t[i],e,n[r],i))},Hc=function(e,t){return{name:e,rawVars:1,init:function(i,r,a){a._onInit=function(o){var l,c;if(hn(r)&&(l={},On(r,function(u){return l[u]=1}),r=l),t){l={};for(c in r)l[c]=t(r[c]);r=l}TA(o,r)}}}},kn=dl.registerPlugin({name:"attr",init:function(e,t,n,i,r){var a,o,l;this.tween=n;for(a in t)l=e.getAttribute(a)||"",o=this.add(e,"setAttribute",(l||0)+"",t[a],i,r,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(e,t){for(var n=t._pt;n;)Sn?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},Hc("roundProps",pu),Hc("modifiers"),Hc("snap",Ym))||dl;rn.version=In.version=kn.version="3.11.5";Dm=1;Hu()&&sa();ut.Power0;ut.Power1;ut.Power2;ut.Power3;ut.Power4;ut.Linear;ut.Quad;ut.Cubic;ut.Quart;ut.Quint;ut.Strong;ut.Elastic;var AA=ut.Back;ut.SteppedEase;ut.Bounce;ut.Sine;ut.Expo;ut.Circ;/*!
 * CSSPlugin 3.11.5
 * https://greensock.com
 *
 * Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var hp,_r,Xs,Ju,Vr,fp,Qu,wA=function(){return typeof window<"u"},tr={},zr=180/Math.PI,qs=Math.PI/180,Os=Math.atan2,dp=1e8,eh=/([A-Z])/g,RA=/(left|right|width|margin|padding|x)/i,CA=/[\s,\(]\S/,Ti={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},_u=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},LA=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},PA=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},DA=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},pg=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},mg=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},IA=function(e,t,n){return e.style[t]=n},UA=function(e,t,n){return e.style.setProperty(t,n)},NA=function(e,t,n){return e._gsap[t]=n},OA=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},FA=function(e,t,n,i,r){var a=e._gsap;a.scaleX=a.scaleY=n,a.renderTransform(r,a)},kA=function(e,t,n,i,r){var a=e._gsap;a[t]=n,a.renderTransform(r,a)},Vt="transform",xi=Vt+"Origin",BA=function s(e,t){var n=this,i=this.target,r=i.style;if(e in tr){if(this.tfm=this.tfm||{},e!=="transform")e=Ti[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return n.tfm[a]=qi(i,a)}):this.tfm[e]=i._gsap.x?i._gsap[e]:qi(i,e);else return Ti.transform.split(",").forEach(function(a){return s.call(n,a,t)});if(this.props.indexOf(Vt)>=0)return;i._gsap.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(xi,t,"")),e=Vt}(r||t)&&this.props.push(e,t,r[e])},gg=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},zA=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,r,a;for(r=0;r<e.length;r+=3)e[r+1]?t[e[r]]=e[r+2]:e[r+2]?n[e[r]]=e[r+2]:n.removeProperty(e[r].substr(0,2)==="--"?e[r]:e[r].replace(eh,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)i[a]=this.tfm[a];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),r=Qu(),(!r||!r.isStart)&&!n[Vt]&&(gg(n),i.uncache=1)}},_g=function(e,t){var n={target:e,props:[],revert:zA,save:BA};return e._gsap||kn.core.getCache(e),t&&t.split(",").forEach(function(i){return n.save(i)}),n},vg,vu=function(e,t){var n=_r.createElementNS?_r.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):_r.createElement(e);return n.style?n:_r.createElement(e)},Ai=function s(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(eh,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&s(e,la(t)||t,1)||""},pp="O,Moz,ms,Ms,Webkit".split(","),la=function(e,t,n){var i=t||Vr,r=i.style,a=5;if(e in r&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);a--&&!(pp[a]+e in r););return a<0?null:(a===3?"ms":a>=0?pp[a]:"")+e},xu=function(){wA()&&window.document&&(hp=window,_r=hp.document,Xs=_r.documentElement,Vr=vu("div")||{style:{}},vu("div"),Vt=la(Vt),xi=Vt+"Origin",Vr.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",vg=!!la("perspective"),Qu=kn.core.reverting,Ju=1)},Gc=function s(e){var t=vu("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,i=this.nextSibling,r=this.style.cssText,a;if(Xs.appendChild(t),t.appendChild(this),this.style.display="block",e)try{a=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=s}catch{}else this._gsapBBox&&(a=this._gsapBBox());return n&&(i?n.insertBefore(this,i):n.appendChild(this)),Xs.removeChild(t),this.style.cssText=r,a},mp=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},xg=function(e){var t;try{t=e.getBBox()}catch{t=Gc.call(e,!0)}return t&&(t.width||t.height)||e.getBBox===Gc||(t=Gc.call(e,!0)),t&&!t.width&&!t.x&&!t.y?{x:+mp(e,["x","cx","x1"])||0,y:+mp(e,["y","cy","y1"])||0,width:0,height:0}:t},yg=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&xg(e))},no=function(e,t){if(t){var n=e.style;t in tr&&t!==xi&&(t=Vt),n.removeProperty?((t.substr(0,2)==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(t.replace(eh,"-$1").toLowerCase())):n.removeAttribute(t)}},vr=function(e,t,n,i,r,a){var o=new Fn(e._pt,t,n,0,1,a?mg:pg);return e._pt=o,o.b=i,o.e=r,e._props.push(n),o},gp={deg:1,rad:1,turn:1},HA={grid:1,flex:1},Er=function s(e,t,n,i){var r=parseFloat(n)||0,a=(n+"").trim().substr((r+"").length)||"px",o=Vr.style,l=RA.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),h=100,f=i==="px",d=i==="%",v,g,m,p;return i===a||!r||gp[i]||gp[a]?r:(a!=="px"&&!f&&(r=s(e,t,n,"px")),p=e.getCTM&&yg(e),(d||a==="%")&&(tr[t]||~t.indexOf("adius"))?(v=p?e.getBBox()[l?"width":"height"]:e[u],Kt(d?r/v*h:r/100*v)):(o[l?"width":"height"]=h+(f?a:i),g=~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,p&&(g=(e.ownerSVGElement||{}).parentNode),(!g||g===_r||!g.appendChild)&&(g=_r.body),m=g._gsap,m&&d&&m.width&&l&&m.time===Wn.time&&!m.uncache?Kt(r/m.width*h):((d||a==="%")&&!HA[Ai(g,"display")]&&(o.position=Ai(e,"position")),g===e&&(o.position="static"),g.appendChild(Vr),v=Vr[u],g.removeChild(Vr),o.position="absolute",l&&d&&(m=jr(g),m.time=Wn.time,m.width=g[u]),Kt(f?v*r/h:v&&r?h/v*r:0))))},qi=function(e,t,n,i){var r;return Ju||xu(),t in Ti&&t!=="transform"&&(t=Ti[t],~t.indexOf(",")&&(t=t.split(",")[0])),tr[t]&&t!=="transform"?(r=ro(e,i),r=t!=="transformOrigin"?r[t]:r.svg?r.origin:ml(Ai(e,xi))+" "+r.zOrigin+"px"):(r=e.style[t],(!r||r==="auto"||i||~(r+"").indexOf("calc("))&&(r=pl[t]&&pl[t](e,t,n)||Ai(e,t)||Om(e,t)||(t==="opacity"?1:0))),n&&!~(r+"").trim().indexOf(" ")?Er(e,t,r,n)+n:r},GA=function(e,t,n,i){if(!n||n==="none"){var r=la(t,e,1),a=r&&Ai(e,r,1);a&&a!==n?(t=r,n=a):t==="borderColor"&&(n=Ai(e,"borderTopColor"))}var o=new Fn(this._pt,e.style,t,0,1,hg),l=0,c=0,u,h,f,d,v,g,m,p,S,y,T,E;if(o.b=n,o.e=i,n+="",i+="",i==="auto"&&(e.style[t]=i,i=Ai(e,t)||i,e.style[t]=n),u=[n,i],tg(u),n=u[0],i=u[1],f=n.match(Bs)||[],E=i.match(Bs)||[],E.length){for(;h=Bs.exec(i);)m=h[0],S=i.substring(l,h.index),v?v=(v+1)%5:(S.substr(-5)==="rgba("||S.substr(-5)==="hsla(")&&(v=1),m!==(g=f[c++]||"")&&(d=parseFloat(g)||0,T=g.substr((d+"").length),m.charAt(1)==="="&&(m=Ws(d,m)+T),p=parseFloat(m),y=m.substr((p+"").length),l=Bs.lastIndex-y.length,y||(y=y||Yn.units[t]||T,l===i.length&&(i+=y,o.e+=y)),T!==y&&(d=Er(e,t,g,y)||0),o._pt={_next:o._pt,p:S||c===1?S:",",s:d,c:p-d,m:v&&v<4||t==="zIndex"?Math.round:0});o.c=l<i.length?i.substring(l,i.length):""}else o.r=t==="display"&&i==="none"?mg:pg;return Lm.test(i)&&(o.e=0),this._pt=o,o},_p={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},VA=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=_p[n]||n,t[1]=_p[i]||i,t.join(" ")},WA=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,r=t.u,a=n._gsap,o,l,c;if(r==="all"||r===!0)i.cssText="",l=1;else for(r=r.split(","),c=r.length;--c>-1;)o=r[c],tr[o]&&(l=1,o=o==="transformOrigin"?xi:Vt),no(n,o);l&&(no(n,Vt),a&&(a.svg&&n.removeAttribute("transform"),ro(n,1),a.uncache=1,gg(i)))}},pl={clearProps:function(e,t,n,i,r){if(r.data!=="isFromStart"){var a=e._pt=new Fn(e._pt,t,n,0,0,WA);return a.u=i,a.pr=-10,a.tween=r,e._props.push(n),1}}},io=[1,0,0,1,0,0],Mg={},bg=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},vp=function(e){var t=Ai(e,Vt);return bg(t)?io:t.substr(7).match(Cm).map(Kt)},th=function(e,t){var n=e._gsap||jr(e),i=e.style,r=vp(e),a,o,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,r=[l.a,l.b,l.c,l.d,l.e,l.f],r.join(",")==="1,0,0,1,0,0"?io:r):(r===io&&!e.offsetParent&&e!==Xs&&!n.svg&&(l=i.display,i.display="block",a=e.parentNode,(!a||!e.offsetParent)&&(c=1,o=e.nextElementSibling,Xs.appendChild(e)),r=vp(e),l?i.display=l:no(e,"display"),c&&(o?a.insertBefore(e,o):a?a.appendChild(e):Xs.removeChild(e))),t&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},yu=function(e,t,n,i,r,a){var o=e._gsap,l=r||th(e,!0),c=o.xOrigin||0,u=o.yOrigin||0,h=o.xOffset||0,f=o.yOffset||0,d=l[0],v=l[1],g=l[2],m=l[3],p=l[4],S=l[5],y=t.split(" "),T=parseFloat(y[0])||0,E=parseFloat(y[1])||0,A,R,L,M;n?l!==io&&(R=d*m-v*g)&&(L=T*(m/R)+E*(-g/R)+(g*S-m*p)/R,M=T*(-v/R)+E*(d/R)-(d*S-v*p)/R,T=L,E=M):(A=xg(e),T=A.x+(~y[0].indexOf("%")?T/100*A.width:T),E=A.y+(~(y[1]||y[0]).indexOf("%")?E/100*A.height:E)),i||i!==!1&&o.smooth?(p=T-c,S=E-u,o.xOffset=h+(p*d+S*g)-p,o.yOffset=f+(p*v+S*m)-S):o.xOffset=o.yOffset=0,o.xOrigin=T,o.yOrigin=E,o.smooth=!!i,o.origin=t,o.originIsAbsolute=!!n,e.style[xi]="0px 0px",a&&(vr(a,o,"xOrigin",c,T),vr(a,o,"yOrigin",u,E),vr(a,o,"xOffset",h,o.xOffset),vr(a,o,"yOffset",f,o.yOffset)),e.setAttribute("data-svg-origin",T+" "+E)},ro=function(e,t){var n=e._gsap||new sg(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,r=n.scaleX<0,a="px",o="deg",l=getComputedStyle(e),c=Ai(e,xi)||"0",u,h,f,d,v,g,m,p,S,y,T,E,A,R,L,M,D,W,ne,B,O,H,te,$,J,oe,ue,Te,Z,fe,le,ye;return u=h=f=g=m=p=S=y=T=0,d=v=1,n.svg=!!(e.getCTM&&yg(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Vt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Vt]!=="none"?l[Vt]:"")),i.scale=i.rotate=i.translate="none"),R=th(e,n.svg),n.svg&&(n.uncache?(J=e.getBBox(),c=n.xOrigin-J.x+"px "+(n.yOrigin-J.y)+"px",$=""):$=!t&&e.getAttribute("data-svg-origin"),yu(e,$||c,!!$||n.originIsAbsolute,n.smooth!==!1,R)),E=n.xOrigin||0,A=n.yOrigin||0,R!==io&&(W=R[0],ne=R[1],B=R[2],O=R[3],u=H=R[4],h=te=R[5],R.length===6?(d=Math.sqrt(W*W+ne*ne),v=Math.sqrt(O*O+B*B),g=W||ne?Os(ne,W)*zr:0,S=B||O?Os(B,O)*zr+g:0,S&&(v*=Math.abs(Math.cos(S*qs))),n.svg&&(u-=E-(E*W+A*B),h-=A-(E*ne+A*O))):(ye=R[6],fe=R[7],ue=R[8],Te=R[9],Z=R[10],le=R[11],u=R[12],h=R[13],f=R[14],L=Os(ye,Z),m=L*zr,L&&(M=Math.cos(-L),D=Math.sin(-L),$=H*M+ue*D,J=te*M+Te*D,oe=ye*M+Z*D,ue=H*-D+ue*M,Te=te*-D+Te*M,Z=ye*-D+Z*M,le=fe*-D+le*M,H=$,te=J,ye=oe),L=Os(-B,Z),p=L*zr,L&&(M=Math.cos(-L),D=Math.sin(-L),$=W*M-ue*D,J=ne*M-Te*D,oe=B*M-Z*D,le=O*D+le*M,W=$,ne=J,B=oe),L=Os(ne,W),g=L*zr,L&&(M=Math.cos(L),D=Math.sin(L),$=W*M+ne*D,J=H*M+te*D,ne=ne*M-W*D,te=te*M-H*D,W=$,H=J),m&&Math.abs(m)+Math.abs(g)>359.9&&(m=g=0,p=180-p),d=Kt(Math.sqrt(W*W+ne*ne+B*B)),v=Kt(Math.sqrt(te*te+ye*ye)),L=Os(H,te),S=Math.abs(L)>2e-4?L*zr:0,T=le?1/(le<0?-le:le):0),n.svg&&($=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!bg(Ai(e,Vt)),$&&e.setAttribute("transform",$))),Math.abs(S)>90&&Math.abs(S)<270&&(r?(d*=-1,S+=g<=0?180:-180,g+=g<=0?180:-180):(v*=-1,S+=S<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+a,n.y=h-((n.yPercent=h&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-h)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+a,n.z=f+a,n.scaleX=Kt(d),n.scaleY=Kt(v),n.rotation=Kt(g)+o,n.rotationX=Kt(m)+o,n.rotationY=Kt(p)+o,n.skewX=S+o,n.skewY=y+o,n.transformPerspective=T+a,(n.zOrigin=parseFloat(c.split(" ")[2])||0)&&(i[xi]=ml(c)),n.xOffset=n.yOffset=0,n.force3D=Yn.force3D,n.renderTransform=n.svg?qA:vg?Sg:XA,n.uncache=0,n},ml=function(e){return(e=e.split(" "))[0]+" "+e[1]},Vc=function(e,t,n){var i=bn(t);return Kt(parseFloat(t)+parseFloat(Er(e,"x",n+"px",i)))+i},XA=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,Sg(e,t)},Or="0deg",Da="0px",Fr=") ",Sg=function(e,t){var n=t||this,i=n.xPercent,r=n.yPercent,a=n.x,o=n.y,l=n.z,c=n.rotation,u=n.rotationY,h=n.rotationX,f=n.skewX,d=n.skewY,v=n.scaleX,g=n.scaleY,m=n.transformPerspective,p=n.force3D,S=n.target,y=n.zOrigin,T="",E=p==="auto"&&e&&e!==1||p===!0;if(y&&(h!==Or||u!==Or)){var A=parseFloat(u)*qs,R=Math.sin(A),L=Math.cos(A),M;A=parseFloat(h)*qs,M=Math.cos(A),a=Vc(S,a,R*M*-y),o=Vc(S,o,-Math.sin(A)*-y),l=Vc(S,l,L*M*-y+y)}m!==Da&&(T+="perspective("+m+Fr),(i||r)&&(T+="translate("+i+"%, "+r+"%) "),(E||a!==Da||o!==Da||l!==Da)&&(T+=l!==Da||E?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+Fr),c!==Or&&(T+="rotate("+c+Fr),u!==Or&&(T+="rotateY("+u+Fr),h!==Or&&(T+="rotateX("+h+Fr),(f!==Or||d!==Or)&&(T+="skew("+f+", "+d+Fr),(v!==1||g!==1)&&(T+="scale("+v+", "+g+Fr),S.style[Vt]=T||"translate(0, 0)"},qA=function(e,t){var n=t||this,i=n.xPercent,r=n.yPercent,a=n.x,o=n.y,l=n.rotation,c=n.skewX,u=n.skewY,h=n.scaleX,f=n.scaleY,d=n.target,v=n.xOrigin,g=n.yOrigin,m=n.xOffset,p=n.yOffset,S=n.forceCSS,y=parseFloat(a),T=parseFloat(o),E,A,R,L,M;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=qs,c*=qs,E=Math.cos(l)*h,A=Math.sin(l)*h,R=Math.sin(l-c)*-f,L=Math.cos(l-c)*f,c&&(u*=qs,M=Math.tan(c-u),M=Math.sqrt(1+M*M),R*=M,L*=M,u&&(M=Math.tan(u),M=Math.sqrt(1+M*M),E*=M,A*=M)),E=Kt(E),A=Kt(A),R=Kt(R),L=Kt(L)):(E=h,L=f,A=R=0),(y&&!~(a+"").indexOf("px")||T&&!~(o+"").indexOf("px"))&&(y=Er(d,"x",a,"px"),T=Er(d,"y",o,"px")),(v||g||m||p)&&(y=Kt(y+v-(v*E+g*R)+m),T=Kt(T+g-(v*A+g*L)+p)),(i||r)&&(M=d.getBBox(),y=Kt(y+i/100*M.width),T=Kt(T+r/100*M.height)),M="matrix("+E+","+A+","+R+","+L+","+y+","+T+")",d.setAttribute("transform",M),S&&(d.style[Vt]=M)},YA=function(e,t,n,i,r){var a=360,o=hn(r),l=parseFloat(r)*(o&&~r.indexOf("rad")?zr:1),c=l-i,u=i+c+"deg",h,f;return o&&(h=r.split("_")[1],h==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),h==="cw"&&c<0?c=(c+a*dp)%a-~~(c/a)*a:h==="ccw"&&c>0&&(c=(c-a*dp)%a-~~(c/a)*a)),e._pt=f=new Fn(e._pt,t,n,i,c,LA),f.e=u,f.u="deg",e._props.push(n),f},xp=function(e,t){for(var n in t)e[n]=t[n];return e},jA=function(e,t,n){var i=xp({},n._gsap),r="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,l,c,u,h,f,d,v;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),a[Vt]=t,o=ro(n,1),no(n,Vt),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Vt],a[Vt]=t,o=ro(n,1),a[Vt]=c);for(l in tr)c=i[l],u=o[l],c!==u&&r.indexOf(l)<0&&(d=bn(c),v=bn(u),h=d!==v?Er(n,l,c,v):parseFloat(c),f=parseFloat(u),e._pt=new Fn(e._pt,o,l,h,f-h,_u),e._pt.u=v||0,e._props.push(l));xp(o,i)};On("padding,margin,Width,Radius",function(s,e){var t="Top",n="Right",i="Bottom",r="Left",a=(e<3?[t,n,i,r]:[t+r,t+n,i+n,i+r]).map(function(o){return e<2?s+o:"border"+o+s});pl[e>1?"border"+s:s]=function(o,l,c,u,h){var f,d;if(arguments.length<4)return f=a.map(function(v){return qi(o,v,c)}),d=f.join(" "),d.split(f[0]).length===5?f[0]:d;f=(u+"").split(" "),d={},a.forEach(function(v,g){return d[v]=f[g]=f[g]||f[(g-1)/2|0]}),o.init(l,d,h)}});var Eg={name:"css",register:xu,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,r){var a=this._props,o=e.style,l=n.vars.startAt,c,u,h,f,d,v,g,m,p,S,y,T,E,A,R,L;Ju||xu(),this.styles=this.styles||_g(e),L=this.styles.props,this.tween=n;for(g in t)if(g!=="autoRound"&&(u=t[g],!(Vn[g]&&ag(g,t,n,i,e,r)))){if(d=typeof u,v=pl[g],d==="function"&&(u=u.call(n,i,e,r),d=typeof u),d==="string"&&~u.indexOf("random(")&&(u=eo(u)),v)v(this,e,g,u,n)&&(R=1);else if(g.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(g)+"").trim(),u+="",br.lastIndex=0,br.test(c)||(m=bn(c),p=bn(u)),p?m!==p&&(c=Er(e,g,c,p)+p):m&&(u+=m),this.add(o,"setProperty",c,u,i,r,0,0,g),a.push(g),L.push(g,0,o[g]);else if(d!=="undefined"){if(l&&g in l?(c=typeof l[g]=="function"?l[g].call(n,i,e,r):l[g],hn(c)&&~c.indexOf("random(")&&(c=eo(c)),bn(c+"")||(c+=Yn.units[g]||bn(qi(e,g))||""),(c+"").charAt(1)==="="&&(c=qi(e,g))):c=qi(e,g),f=parseFloat(c),S=d==="string"&&u.charAt(1)==="="&&u.substr(0,2),S&&(u=u.substr(2)),h=parseFloat(u),g in Ti&&(g==="autoAlpha"&&(f===1&&qi(e,"visibility")==="hidden"&&h&&(f=0),L.push("visibility",0,o.visibility),vr(this,o,"visibility",f?"inherit":"hidden",h?"inherit":"hidden",!h)),g!=="scale"&&g!=="transform"&&(g=Ti[g],~g.indexOf(",")&&(g=g.split(",")[0]))),y=g in tr,y){if(this.styles.save(g),T||(E=e._gsap,E.renderTransform&&!t.parseTransform||ro(e,t.parseTransform),A=t.smoothOrigin!==!1&&E.smooth,T=this._pt=new Fn(this._pt,o,Vt,0,1,E.renderTransform,E,0,-1),T.dep=1),g==="scale")this._pt=new Fn(this._pt,E,"scaleY",E.scaleY,(S?Ws(E.scaleY,S+h):h)-E.scaleY||0,_u),this._pt.u=0,a.push("scaleY",g),g+="X";else if(g==="transformOrigin"){L.push(xi,0,o[xi]),u=VA(u),E.svg?yu(e,u,0,A,0,this):(p=parseFloat(u.split(" ")[2])||0,p!==E.zOrigin&&vr(this,E,"zOrigin",E.zOrigin,p),vr(this,o,g,ml(c),ml(u)));continue}else if(g==="svgOrigin"){yu(e,u,1,A,0,this);continue}else if(g in Mg){YA(this,E,g,f,S?Ws(f,S+u):u);continue}else if(g==="smoothOrigin"){vr(this,E,"smooth",E.smooth,u);continue}else if(g==="force3D"){E[g]=u;continue}else if(g==="transform"){jA(this,u,e);continue}}else g in o||(g=la(g)||g);if(y||(h||h===0)&&(f||f===0)&&!CA.test(u)&&g in o)m=(c+"").substr((f+"").length),h||(h=0),p=bn(u)||(g in Yn.units?Yn.units[g]:m),m!==p&&(f=Er(e,g,c,p)),this._pt=new Fn(this._pt,y?E:o,g,f,(S?Ws(f,S+h):h)-f,!y&&(p==="px"||g==="zIndex")&&t.autoRound!==!1?DA:_u),this._pt.u=p||0,m!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=PA);else if(g in o)GA.call(this,e,g,c,S?S+u:u);else if(g in e)this.add(e,g,c||e[g],S?S+u:u,i,r);else if(g!=="parseTransform"){Vu(g,u);continue}y||(g in o?L.push(g,0,o[g]):L.push(g,1,c||e[g])),a.push(g)}}R&&fg(this)},render:function(e,t){if(t.tween._time||!Qu())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:qi,aliases:Ti,getSetter:function(e,t,n){var i=Ti[t];return i&&i.indexOf(",")<0&&(t=i),t in tr&&t!==xi&&(e._gsap.x||qi(e,"x"))?n&&fp===n?t==="scale"?OA:NA:(fp=n||{})&&(t==="scale"?FA:kA):e.style&&!zu(e.style[t])?IA:~t.indexOf("-")?UA:Ku(e,t)},core:{_removeProperty:no,_getMatrix:th}};kn.utils.checkPrefix=la;kn.core.getStyleSaver=_g;(function(s,e,t,n){var i=On(s+","+e+","+t,function(r){tr[r]=1});On(e,function(r){Yn.units[r]="deg",Mg[r]=1}),Ti[i[13]]=s+","+e,On(n,function(r){var a=r.split(":");Ti[a[1]]=i[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");On("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(s){Yn.units[s]="px"});kn.registerPlugin(Eg);var Tg=kn.registerPlugin(Eg)||kn;Tg.core.Tween;const Ot=class{constructor(){V(this,"stats",{frames:0,delta:1/60,fps:60,load:0});V(this,"looper",0);V(this,"callbacks",[]);V(this,"EventBus",Ua.getInstance());V(this,"isRunning",!1);V(this,"onResize",e=>{this.EventBus.register("resize",t=>{e(t)})});V(this,"update",()=>{this.stats.frames+=1,this.EventBus.dispatch("update",this.stats)});V(this,"ts",performance.now());V(this,"te",performance.now());V(this,"tf",performance.now());V(this,"nf",0);V(this,"loop",()=>{if(this.nf+=1,this.looper=requestAnimationFrame(this.loop),this.te=performance.now(),this.stats.delta=(this.te-this.ts)/1e3,this.ts=this.te,!document.hidden){this.te-this.tf>=100&&(this.stats.fps=1e3*this.nf/(this.te-this.tf),this.nf=0,this.tf=this.te,this.EventBus.dispatch("engine-stats",this.stats));const e=window.performance.now();this.update(),this.callbacks.map(t=>t(this.stats)),this.stats.load=window.performance.now()-e,this.stats.heap=R1.getHeapInfo()}});V(this,"addCallback",e=>{this.callbacks.indexOf(e)===-1&&this.callbacks.push(e)});V(this,"removeCallback",e=>{this.callbacks=this.callbacks.filter(t=>t!==e)});V(this,"onFrame",e=>{this.addCallback(e)});V(this,"start",()=>{console.log("%c start() is called.","background: #882"),cancelAnimationFrame(this.looper),this.loop()});V(this,"stop",()=>{cancelAnimationFrame(this.looper)});V(this,"getHeapLimit",()=>this.stats.heap?this.stats.heap.limitSize:NaN);V(this,"getHeapSize",()=>this.stats.heap?this.stats.heap.totalSize:NaN);V(this,"getHeapUsed",()=>this.stats.heap?this.stats.heap.usedSize:NaN);V(this,"getHeapAllocated",()=>this.stats.heap?this.stats.heap.allocated:NaN);V(this,"getHeapConsumed",()=>this.stats.heap?this.stats.heap.consumed:NaN);V(this,"updateDOMRect",()=>Ot.updateDOMRect());V(this,"getOverlayContainers",()=>Ot.getOverlayContainers());V(this,"getOverlayCanvases",()=>Ot.getOverlayCanvases());V(this,"getResources",()=>Rn.resources);V(this,"downloadResources",async e=>await Rn.downloadResources(e));V(this,"createGraphics",e=>new P1(Ot.getInstance(),e));V(this,"createTween",e=>{const t=e,n={value:t.firstValue};return Tg.to(n,{ease:t.ease?t.ease:AA.easeInOut,value:t.lastValue,duration:t.duration?t.duration:1,repeat:t.repeat===void 0||t.repeat==0?0:t.repeat,yoyo:t.yoyo===!0?t.yoyo:!1,onUpdate:()=>t.onUpdate(n.value),onComplete:()=>{var i;return(i=t.onComplete)==null?void 0:i.call(t)}})});window.addEventListener("resize",()=>{this.EventBus.dispatch("resize",{width:window.innerWidth,height:window.innerHeight})})}};let Ft=Ot;V(Ft,"instance"),V(Ft,"getInstance",()=>(Ot.instance===void 0&&(Ot.instance=new Ot,console.log("%c New instance is created.","background: #882")),Ot.instance)),V(Ft,"generateUUID",(e,t)=>{const n="0123456789abcdefghijklmnopqrstuvwxyz";let i="";for(let r=0;r<7;r++){const a=Math.floor(Math.random()*n.length);if(a<0||a>n.length)throw new Error("The index %{idx} is out of range!!");i+=n[a]}return i=e?`${e}-${i}`:i,i=t?`${i}-${t}`:i,i}),V(Ft,"getElementById",e=>document.getElementById(e)),V(Ft,"getCanvasById",e=>document.getElementById(e)),V(Ft,"createCanvas",e=>{const t=document.createElement("canvas");return t.id=Ot.generateUUID(e||"canvas"),t}),V(Ft,"createOverlayContainer",(e,t)=>{const n=document.createElement("div");return n.id=Ot.generateUUID(e||"overlay-div-container"),n.style.position="absolute",n.style.top="0",n.style.left="0",n.style.bottom="0",n.style.right="0",console.log(`%cOverlay Container "${n.id}" is created`,"color:#a5f"),n.style.backgroundColor=t||"rgba(0, 0, 0, 0.0)",n}),V(Ft,"createBackContainer",(e,t)=>{const n=document.createElement("div");return n.id=Ot.generateUUID(e||"overlay-div-container"),n.style.position="absolute",n.style.top="0",n.style.left="0",n.style.bottom="0",n.style.right="0",console.log(`%cBack Container "${n.id}" is created`,"color:#a5f"),n.style.backgroundColor=t||"rgba(0, 0, 0, 0.0)",n}),V(Ft,"init",(e,t,n)=>new Promise(i=>{const r=so,a=Mu;r(async()=>{var c,u;const o=performance.now();console.log("%cEngine downloading resources...","color: #6fa"),(c=e==null?void 0:e.onMount)==null||c.call(e,Ot.getInstance()),Ot.updateDOMRect();const l=await Rn.downloadResources("Engine.init",t,n);Ot.updateDOMRect(),console.log(`%cEngine takes ${((performance.now()-o)/1e3).toFixed(3)} seconds to consume resources.`,"color: #6fa"),i(Ot.getInstance()),console.log("%cEngine running...","color: #6fa"),Ot.getInstance().start(),(u=e==null?void 0:e.onLoaded)==null||u.call(e,Ot.getInstance(),l)}),a(async()=>{var o;Ot.instance&&((o=e==null?void 0:e.onDestroy)==null||o.call(e,Ot.getInstance()),Ot.instance.stop())})})),V(Ft,"updateDOMRect",()=>{const e=[];return new Promise((t,n)=>{window.requestAnimationFrame(()=>{document.querySelectorAll("canvas").forEach(i=>{const r=i.getBoundingClientRect();e.push({id:i.id,rect:r})}),document.querySelectorAll("div").forEach(i=>{const r=i.getBoundingClientRect();e.push({id:i.id,rect:r})}),t(e)})})}),V(Ft,"getOverlayContainers",async()=>{const e=[];return await Ot.updateDOMRect(),document.querySelectorAll("div").forEach(t=>{t.getBoundingClientRect(),t.id.includes("overlay-container")&&e.push(t)}),e}),V(Ft,"getOverlayCanvases",async()=>{const e=[];return await Ot.updateDOMRect(),document.querySelectorAll("canvas").forEach(t=>{t.getBoundingClientRect(),t.id.includes("overlay-canvas")&&e.push(t)}),e});const $A={message:"Missing Toast Message",autohide:!0,timeout:5e3};function KA(){const s=Math.random();return Number(s).toString(32)}function ZA(s){if(s.autohide===!0)return setTimeout(()=>{nl.close(s.id)},s.timeout)}function JA(){const{subscribe:s,set:e,update:t}=bu([]);return{subscribe:s,trigger:n=>t(i=>{const r=KA();n&&n.callback&&n.callback({id:r,status:"queued"});const a={...$A,...n,id:r};return a.timeoutId=ZA(a),i.push(a),i}),close:n=>t(i=>{if(i.length>0){const r=i.findIndex(o=>o.id===n),a=i[r];a&&(a.callback&&a.callback({id:n,status:"closed"}),a.timeoutId&&clearTimeout(a.timeoutId),i.splice(r,1))}return i}),clear:()=>e([])}}const nl=JA(),Wc={};function yp(s){return s==="local"?localStorage:sessionStorage}function nh(s,e,t){const n=(t==null?void 0:t.serializer)??JSON,i=(t==null?void 0:t.storage)??"local";function r(a,o){yp(i).setItem(a,n.stringify(o))}if(!Wc[s]){const a=bu(e,c=>{const u=yp(i).getItem(s);u&&c(n.parse(u));{const h=f=>{f.key===s&&c(f.newValue?n.parse(f.newValue):null)};return window.addEventListener("storage",h),()=>window.removeEventListener("storage",h)}}),{subscribe:o,set:l}=a;Wc[s]={set(c){r(s,c),l(c)},update(c){const u=c(zv(a));r(s,u),l(u)},subscribe:o}}return Wc[s]}nh("modeOsPrefers",!1);nh("modeUserPrefers",void 0);nh("modeCurrent",!1);function QA(s){return s<.5?4*s*s*s:.5*Math.pow(2*s-2,3)+1}function Ag(s){const e=s-1;return e*e*e+1}function ew(s,e){var t={};for(var n in s)Object.prototype.hasOwnProperty.call(s,n)&&e.indexOf(n)<0&&(t[n]=s[n]);if(s!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,n=Object.getOwnPropertySymbols(s);i<n.length;i++)e.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(s,n[i])&&(t[n[i]]=s[n[i]]);return t}function tw(s){var{fallback:e}=s,t=ew(s,["fallback"]);const n=new Map,i=new Map;function r(o,l,c){const{delay:u=0,duration:h=R=>Math.sqrt(R)*30,easing:f=Ag}=il(il({},t),c),d=o.getBoundingClientRect(),v=l.getBoundingClientRect(),g=d.left-v.left,m=d.top-v.top,p=d.width/v.width,S=d.height/v.height,y=Math.sqrt(g*g+m*m),T=getComputedStyle(l),E=T.transform==="none"?"":T.transform,A=+T.opacity;return{delay:u,duration:Ap(h)?h(y):h,easing:f,css:(R,L)=>`
				opacity: ${R*A};
				transform-origin: top left;
				transform: ${E} translate(${L*g}px,${L*m}px) scale(${R+(1-R)*p}, ${R+(1-R)*S});
			`}}function a(o,l,c){return(u,h)=>(o.set(h.key,u),()=>{if(l.has(h.key)){const f=l.get(h.key);return l.delete(h.key),r(f,u,h)}return o.delete(h.key),e&&e(u,h,c)})}return[a(i,n,!1),a(n,i,!0)]}function nw(s,{from:e,to:t},n={}){const i=getComputedStyle(s),r=i.transform==="none"?"":i.transform,[a,o]=i.transformOrigin.split(" ").map(parseFloat),l=e.left+e.width*a/t.width-(t.left+a),c=e.top+e.height*o/t.height-(t.top+o),{delay:u=0,duration:h=d=>Math.sqrt(d)*120,easing:f=Ag}=n;return{delay:u,duration:Ap(h)?h(Math.sqrt(l*l+c*c)):h,easing:f,css:(d,v)=>{const g=v*l,m=v*c,p=d+v*e.width/t.width,S=d+v*e.height/t.height;return`transform: ${r} translate(${g}px, ${m}px) scale(${p}, ${S});`}}}function Mp(s,e,t){const n=s.slice();return n[28]=e[t],n[30]=t,n}function bp(s){let e,t,n=[],i=new Map,r,a,o,l=s[6];const c=u=>u[28];for(let u=0;u<l.length;u+=1){let h=Mp(s,l,u),f=c(h);i.set(f,n[u]=Ep(f,h))}return{c(){e=Zt("div"),t=Zt("div");for(let u=0;u<n.length;u+=1)n[u].c();this.h()},l(u){e=Jt(u,"DIV",{class:!0,"data-testid":!0});var h=Qt(e);t=Jt(h,"DIV",{class:!0});var f=Qt(t);for(let d=0;d<n.length;d+=1)n[d].l(f);f.forEach(gt),h.forEach(gt),this.h()},h(){Et(t,"class",r="snackbar "+s[8]),Et(e,"class",a="snackbar-wrapper "+s[9]),Et(e,"data-testid","snackbar-wrapper")},m(u,h){mi(u,e,h),Ge(e,t);for(let f=0;f<n.length;f+=1)n[f]&&n[f].m(t,null);o=!0},p(u,h){if(h&1246){l=u[6],wp();for(let f=0;f<n.length;f+=1)n[f].r();n=Gv(n,h,c,1,u,l,i,t,$v,Ep,null,Mp);for(let f=0;f<n.length;f+=1)n[f].a();Rp()}(!o||h&256&&r!==(r="snackbar "+u[8]))&&Et(t,"class",r),(!o||h&512&&a!==(a="snackbar-wrapper "+u[9]))&&Et(e,"class",a)},i(u){if(!o){for(let h=0;h<l.length;h+=1)gi(n[h]);o=!0}},o(u){for(let h=0;h<n.length;h+=1)Ei(n[h]);o=!1},d(u){u&&gt(e);for(let h=0;h<n.length;h+=1)n[h].d()}}}function Sp(s){let e,t=s[28].action.label+"",n,i;function r(){return s[24](s[30])}return{c(){e=Zt("button"),this.h()},l(a){e=Jt(a,"BUTTON",{class:!0});var o=Qt(e);o.forEach(gt),this.h()},h(){Et(e,"class",s[2])},m(a,o){mi(a,e,o),e.innerHTML=t,n||(i=Cp(e,"click",r),n=!0)},p(a,o){s=a,o&64&&t!==(t=s[28].action.label+"")&&(e.innerHTML=t),o&4&&Et(e,"class",s[2])},d(a){a&&gt(e),n=!1,i()}}}function Ep(s,e){let t,n,i,r=e[28].message+"",a,o,l,c,u,h,f,d,v,g,m=Ys,p,S,y,T=e[28].action&&Sp(e);function E(){return e[25](e[28])}return{key:s,first:null,c(){t=Zt("div"),n=Zt("div"),i=Zt("div"),a=Xn(),o=Zt("div"),T&&T.c(),l=Xn(),c=Zt("button"),u=zt(e[4]),f=Xn(),this.h()},l(A){t=Jt(A,"DIV",{});var R=Qt(t);n=Jt(R,"DIV",{class:!0,role:!0,"aria-live":!0,"data-testid":!0});var L=Qt(n);i=Jt(L,"DIV",{class:!0});var M=Qt(i);M.forEach(gt),a=qn(L),o=Jt(L,"DIV",{class:!0});var D=Qt(o);T&&T.l(D),l=qn(D),c=Jt(D,"BUTTON",{class:!0});var W=Qt(c);u=Ht(W,e[4]),W.forEach(gt),D.forEach(gt),L.forEach(gt),f=qn(R),R.forEach(gt),this.h()},h(){Et(i,"class","text-base"),Et(c,"class",e[3]),Et(o,"class","toast-actions "+ow),Et(n,"class",h="toast "+e[7]+" "+(e[28].background??e[1])+" "+(e[28].classes??"")),Et(n,"role","alert"),Et(n,"aria-live","polite"),Et(n,"data-testid","toast"),this.first=t},m(A,R){mi(A,t,R),Ge(t,n),Ge(n,i),i.innerHTML=r,Ge(n,a),Ge(n,o),T&&T.m(o,null),Ge(o,l),Ge(o,c),Ge(c,u),Ge(t,f),p=!0,S||(y=Cp(c,"click",E),S=!0)},p(A,R){e=A,(!p||R&64)&&r!==(r=e[28].message+"")&&(i.innerHTML=r),e[28].action?T?T.p(e,R):(T=Sp(e),T.c(),T.m(o,l)):T&&(T.d(1),T=null),(!p||R&16)&&Yi(u,e[4]),(!p||R&8)&&Et(c,"class",e[3]),(!p||R&194&&h!==(h="toast "+e[7]+" "+(e[28].background??e[1])+" "+(e[28].classes??"")))&&Et(n,"class",h)},r(){g=t.getBoundingClientRect()},f(){Vv(t),m(),Wv(t,g)},a(){m(),m=Xv(t,g,nw,{duration:e[0]})},i(A){p||(qv(()=>{p&&(v&&v.end(1),d=Yv(t,e[12],{key:e[28].id}),d.start())}),p=!0)},o(A){d&&d.invalidate(),v=jv(t,e[11],{key:e[28].id}),p=!1},d(A){A&&gt(t),T&&T.d(),A&&v&&v.end(),S=!1,y()}}}function iw(s){let e,t,n=s[5].length&&bp(s);return{c(){n&&n.c(),e=lf()},l(i){n&&n.l(i),e=lf()},m(i,r){n&&n.m(i,r),mi(i,e,r),t=!0},p(i,[r]){i[5].length?n?(n.p(i,r),r&32&&gi(n,1)):(n=bp(i),n.c(),gi(n,1),n.m(e.parentNode,e)):n&&(wp(),Ei(n,1,1,()=>{n=null}),Rp())},i(i){t||(gi(n),t=!0)},o(i){Ei(n),t=!1},d(i){n&&n.d(i),i&&gt(e)}}}const rw="flex fixed top-0 left-0 right-0 bottom-0 pointer-events-none",sw="flex flex-col space-y-2",aw="flex justify-between items-center pointer-events-auto",ow="flex items-center space-x-2";function lw(s,e,t){let n,i,r,a,o;Hv(s,nl,O=>t(5,o=O));let{position:l="b"}=e,{max:c=3}=e,{duration:u=250}=e,{background:h="variant-filled-secondary"}=e,{width:f="max-w-[640px]"}=e,{color:d=""}=e,{padding:v="p-4"}=e,{spacing:g="space-x-4"}=e,{rounded:m="rounded-container-token"}=e,{shadow:p="shadow-lg"}=e,{zIndex:S="z-[888]"}=e,{buttonAction:y="btn variant-filled"}=e,{buttonDismiss:T="btn-icon btn-icon-sm variant-filled"}=e,{buttonDismissLabel:E="✕"}=e,A,R,L={x:0,y:0};switch(l){case"t":A="justify-center items-start",R="items-center",L={x:0,y:-100};break;case"b":A="justify-center items-end",R="items-center",L={x:0,y:100};break;case"l":A="justify-start items-center",R="items-start",L={x:-100,y:0};break;case"r":A="justify-end items-center",R="items-end",L={x:100,y:0};break;case"tl":A="justify-start items-start",R="items-start",L={x:-100,y:0};break;case"tr":A="justify-end items-start",R="items-end",L={x:100,y:0};break;case"bl":A="justify-start items-end",R="items-start",L={x:-100,y:0};break;case"br":A="justify-end items-end",R="items-end",L={x:100,y:0};break}function M(O){var H,te;(te=(H=o[O])==null?void 0:H.action)==null||te.response(),nl.close(o[O].id)}const[D,W]=tw({duration:O=>Math.sqrt(O*u),fallback(O){const H=getComputedStyle(O),te=H.transform==="none"?"":H.transform;return{duration:u,easing:QA,css:($,J)=>`
					transform: ${te} scale(${$}) translate(${J*L.x}%, ${J*L.y}%);
					opacity: ${$}
				`}}}),ne=O=>M(O),B=O=>nl.close(O.id);return s.$$set=O=>{t(27,e=il(il({},e),cf(O))),"position"in O&&t(13,l=O.position),"max"in O&&t(14,c=O.max),"duration"in O&&t(0,u=O.duration),"background"in O&&t(1,h=O.background),"width"in O&&t(15,f=O.width),"color"in O&&t(16,d=O.color),"padding"in O&&t(17,v=O.padding),"spacing"in O&&t(18,g=O.spacing),"rounded"in O&&t(19,m=O.rounded),"shadow"in O&&t(20,p=O.shadow),"zIndex"in O&&t(21,S=O.zIndex),"buttonAction"in O&&t(2,y=O.buttonAction),"buttonDismiss"in O&&t(3,T=O.buttonDismiss),"buttonDismissLabel"in O&&t(4,E=O.buttonDismissLabel)},s.$$.update=()=>{t(9,n=`${rw} ${A} ${S} ${e.class||""}`),s.$$.dirty&8519680&&t(8,i=`${sw} ${R} ${v}`),s.$$.dirty&2064384&&t(7,r=`${aw} ${f} ${d} ${v} ${g} ${m} ${p}`),s.$$.dirty&16416&&t(6,a=Array.from(o).slice(0,c))},e=cf(e),[u,h,y,T,E,o,a,r,i,n,M,D,W,l,c,f,d,v,g,m,p,S,A,R,ne,B]}class cw extends ca{constructor(e){super(),ua(this,e,lw,iw,ha,{position:13,max:14,duration:0,background:1,width:15,color:16,padding:17,spacing:18,rounded:19,shadow:20,zIndex:21,buttonAction:2,buttonDismiss:3,buttonDismissLabel:4})}}const El=bu();function uw(s){var R,L,M,D;let e,t,n,i=((R=s[0])==null?void 0:R.fps.toFixed(2))+"",r,a,o,l,c=(((L=s[0])==null?void 0:L.delta)*1e3).toFixed(2)+"",u,h,f,d,v,g=((M=s[0])==null?void 0:M.load.toFixed(2))+"",m,p,S,y,T,E=((D=s[0])==null?void 0:D.frames)+"",A;return{c(){e=Zt("div"),t=Zt("span"),n=zt("fps: "),r=zt(i),a=Xn(),o=Zt("span"),l=zt("delta: "),u=zt(c),h=zt("ms"),f=Xn(),d=Zt("span"),v=zt("load: "),m=zt(g),p=zt("%"),S=Xn(),y=Zt("span"),T=zt("frames: "),A=zt(E),this.h()},l(W){e=Jt(W,"DIV",{class:!0});var ne=Qt(e);t=Jt(ne,"SPAN",{class:!0});var B=Qt(t);n=Ht(B,"fps: "),r=Ht(B,i),B.forEach(gt),a=qn(ne),o=Jt(ne,"SPAN",{class:!0});var O=Qt(o);l=Ht(O,"delta: "),u=Ht(O,c),h=Ht(O,"ms"),O.forEach(gt),f=qn(ne),d=Jt(ne,"SPAN",{class:!0});var H=Qt(d);v=Ht(H,"load: "),m=Ht(H,g),p=Ht(H,"%"),H.forEach(gt),S=qn(ne),y=Jt(ne,"SPAN",{class:!0});var te=Qt(y);T=Ht(te,"frames: "),A=Ht(te,E),te.forEach(gt),ne.forEach(gt),this.h()},h(){Et(t,"class","stats text-yellow-400 svelte-6v38lz"),Et(o,"class","stats text-green-400 svelte-6v38lz"),Et(d,"class","stats text-blue-400 svelte-6v38lz"),Et(y,"class","stats text-pink-400 svelte-6v38lz"),Et(e,"class","container svelte-6v38lz")},m(W,ne){mi(W,e,ne),Ge(e,t),Ge(t,n),Ge(t,r),Ge(e,a),Ge(e,o),Ge(o,l),Ge(o,u),Ge(o,h),Ge(e,f),Ge(e,d),Ge(d,v),Ge(d,m),Ge(d,p),Ge(e,S),Ge(e,y),Ge(y,T),Ge(y,A)},p(W,[ne]){var B,O,H,te;ne&1&&i!==(i=((B=W[0])==null?void 0:B.fps.toFixed(2))+"")&&Yi(r,i),ne&1&&c!==(c=(((O=W[0])==null?void 0:O.delta)*1e3).toFixed(2)+"")&&Yi(u,c),ne&1&&g!==(g=((H=W[0])==null?void 0:H.load.toFixed(2))+"")&&Yi(m,g),ne&1&&E!==(E=((te=W[0])==null?void 0:te.frames)+"")&&Yi(A,E)},i:Ys,o:Ys,d(W){W&&gt(e)}}}function hw(s,e,t){let n;const i=a=>{a.onFrame(o=>t(0,n=o))};let r;return so(async()=>{r=El.subscribe(a=>{a&&(i(a),r==null||r())})}),Mu(()=>r==null?void 0:r()),[n]}class fw extends ca{constructor(e){super(),ua(this,e,hw,uw,ha,{})}}function dw(s){var M,D,W,ne;let e,t,n,i=((M=s[0])==null?void 0:M.used.toFixed(2))+"",r,a,o,l,c,u=((D=s[0])==null?void 0:D.alloc.toFixed(2))+"",h,f,d,v,g,m=(((W=s[0])==null?void 0:W.size)/1e6).toFixed(2)+"",p,S,y,T,E,A=(((ne=s[0])==null?void 0:ne.limit)/1e9).toFixed(2)+"",R,L;return{c(){e=Zt("div"),t=Zt("span"),n=zt("used: "),r=zt(i),a=zt("%"),o=Xn(),l=Zt("span"),c=zt("alloc: "),h=zt(u),f=zt("%"),d=Xn(),v=Zt("span"),g=zt("size: "),p=zt(m),S=zt("MB"),y=Xn(),T=Zt("span"),E=zt("limit: "),R=zt(A),L=zt("GB"),this.h()},l(B){e=Jt(B,"DIV",{class:!0});var O=Qt(e);t=Jt(O,"SPAN",{class:!0});var H=Qt(t);n=Ht(H,"used: "),r=Ht(H,i),a=Ht(H,"%"),H.forEach(gt),o=qn(O),l=Jt(O,"SPAN",{class:!0});var te=Qt(l);c=Ht(te,"alloc: "),h=Ht(te,u),f=Ht(te,"%"),te.forEach(gt),d=qn(O),v=Jt(O,"SPAN",{class:!0});var $=Qt(v);g=Ht($,"size: "),p=Ht($,m),S=Ht($,"MB"),$.forEach(gt),y=qn(O),T=Jt(O,"SPAN",{class:!0});var J=Qt(T);E=Ht(J,"limit: "),R=Ht(J,A),L=Ht(J,"GB"),J.forEach(gt),O.forEach(gt),this.h()},h(){Et(t,"class","stats text-yellow-400 svelte-5ytgcu"),Et(l,"class","stats text-green-400 svelte-5ytgcu"),Et(v,"class","stats text-blue-400 svelte-5ytgcu"),Et(T,"class","stats text-pink-400 svelte-5ytgcu"),Et(e,"class","container svelte-5ytgcu")},m(B,O){mi(B,e,O),Ge(e,t),Ge(t,n),Ge(t,r),Ge(t,a),Ge(e,o),Ge(e,l),Ge(l,c),Ge(l,h),Ge(l,f),Ge(e,d),Ge(e,v),Ge(v,g),Ge(v,p),Ge(v,S),Ge(e,y),Ge(e,T),Ge(T,E),Ge(T,R),Ge(T,L)},p(B,[O]){var H,te,$,J;O&1&&i!==(i=((H=B[0])==null?void 0:H.used.toFixed(2))+"")&&Yi(r,i),O&1&&u!==(u=((te=B[0])==null?void 0:te.alloc.toFixed(2))+"")&&Yi(h,u),O&1&&m!==(m=((($=B[0])==null?void 0:$.size)/1e6).toFixed(2)+"")&&Yi(p,m),O&1&&A!==(A=(((J=B[0])==null?void 0:J.limit)/1e9).toFixed(2)+"")&&Yi(R,A)},i:Ys,o:Ys,d(B){B&&gt(e)}}}function pw(s,e,t){let n;const i=a=>{a.onFrame(o=>{var l,c,u,h;t(0,n={limit:(l=o.heap)==null?void 0:l.limitSize,size:(c=o==null?void 0:o.heap)==null?void 0:c.totalSize,alloc:(u=o.heap)==null?void 0:u.allocated,used:(h=o.heap)==null?void 0:h.consumed})})};let r;return so(async()=>{r=El.subscribe(a=>{a&&(i(a),r==null||r())})}),Mu(()=>r==null?void 0:r()),[n]}class mw extends ca{constructor(e){super(),ua(this,e,pw,dw,ha,{})}}function gw(s){let e,t,n,i,r,a,o,l;e=new fw({}),n=new mw({});const c=s[1].default,u=Lp(c,s,s[0],null);return o=new cw({}),{c(){Fa(e.$$.fragment),t=Xn(),Fa(n.$$.fragment),i=Xn(),r=Zt("div"),u&&u.c(),a=Xn(),Fa(o.$$.fragment),this.h()},l(h){ka(e.$$.fragment,h),t=qn(h),ka(n.$$.fragment,h),i=qn(h),r=Jt(h,"DIV",{class:!0});var f=Qt(r);u&&u.l(f),f.forEach(gt),a=qn(h),ka(o.$$.fragment,h),this.h()},h(){Et(r,"class","border-t mt-1 border-gray-500 p-0 m-0")},m(h,f){Ba(e,h,f),mi(h,t,f),Ba(n,h,f),mi(h,i,f),mi(h,r,f),u&&u.m(r,null),mi(h,a,f),Ba(o,h,f),l=!0},p(h,[f]){u&&u.p&&(!l||f&1)&&Pp(u,c,h,h[0],l?Ip(c,h[0],f,null):Dp(h[0]),null)},i(h){l||(gi(e.$$.fragment,h),gi(n.$$.fragment,h),gi(u,h),gi(o.$$.fragment,h),l=!0)},o(h){Ei(e.$$.fragment,h),Ei(n.$$.fragment,h),Ei(u,h),Ei(o.$$.fragment,h),l=!1},d(h){za(e,h),h&&gt(t),za(n,h),h&&gt(i),h&&gt(r),u&&u.d(h),h&&gt(a),za(o,h)}}}function _w(s,e,t){let{$$slots:n={},$$scope:i}=e,r,a;return Ft.init({onMount:()=>{console.log("%c EngineComponent.svelte loaded","background: #228")},onLoaded:(o,l)=>{r=o,El.set(r),r.onFrame(c=>{var u,h,f,d;a=c,(u=a.heap)==null||u.limitSize,(h=a==null?void 0:a.heap)==null||h.totalSize,(f=a.heap)==null||f.allocated,(d=a.heap)==null||d.consumed})},onDestroy:()=>{Ft.getInstance().stop()}},{onProgress(o,l,c,u){}}),s.$$set=o=>{"$$scope"in o&&t(0,i=o.$$scope)},[i,n]}class vw extends ca{constructor(e){super(),ua(this,e,_w,gw,ha,{})}}class xw{constructor(e){V(this,"context");V(this,"isGridEnabled",!0);V(this,"clear",()=>{this.canvas.width=0+this.canvas.width});V(this,"ngV",6);V(this,"ngH",6);V(this,"drawGrids",e=>{if(this.isGridEnabled===!1)return;this.ngV=(e==null?void 0:e.ngV)===void 0?this.ngV:e==null?void 0:e.ngV,this.ngH=(e==null?void 0:e.ngH)===void 0?this.ngH:e==null?void 0:e.ngH;const t=this.canvas,n=this.context;n.save();const i=t.width/this.ngV,r=t.height/this.ngH;n.strokeStyle=Pa("cyan").alpha(.8).hex(),n.lineWidth=.65,n.setLineDash([5,5]),n.beginPath();for(let o=1;o<=this.ngH;o++){const l=Math.round(o*r);n.moveTo(0,l),n.lineTo(t.width,l)}for(let o=0;o<this.ngV;o++){const l=Math.round(o*i);n.moveTo(l,0),n.lineTo(l,t.height)}n.stroke(),n.strokeStyle=Pa("red").alpha(.65).hex(),n.lineWidth=1.8,n.setLineDash([]),n.beginPath(),n.translate(this.cX(),this.cY()),n.rotate(0);const a=7;n.moveTo(-a,0),n.lineTo(a,0),n.moveTo(0,-a),n.lineTo(0,a),n.stroke(),n.restore()});V(this,"gX",()=>Math.round(this.canvas.width/this.ngV));V(this,"gY",()=>Math.round(this.canvas.height/this.ngH));V(this,"cX",()=>Math.round(this.canvas.width/2));V(this,"cY",()=>Math.round(this.canvas.height/2));V(this,"getCanvas",()=>this.canvas);V(this,"getContext",()=>this.context);V(this,"getWidth",()=>this.canvas.width);V(this,"getHeight",()=>this.canvas.height);V(this,"fillBackground",(e,t)=>{this.canvas.width=0+this.canvas.width;const n=this.context;n.fillStyle=Pa(e===void 0?"black":e).alpha(t===void 0?1:t).hex(),n.fillRect(0,0,this.canvas.width,this.canvas.height)});V(this,"setSize",(e,t)=>{this.canvas.width=e,this.canvas.height=t});V(this,"getSize",()=>({width:this.canvas.width,height:this.canvas.height}));V(this,"enableGrids",e=>{this.isGridEnabled=e});V(this,"showGrids",()=>{this.isGridEnabled=!0});V(this,"hideGrids",()=>{this.isGridEnabled=!1});V(this,"drawText",(e,t,n)=>{const i=this.context;i.save(),i.translate(t,n),i.beginPath(),i.font="22px mono",i.textBaseline="top",i.strokeStyle=Pa("red").alpha(.7).hex(),i.fillStyle=Pa("red").alpha(.9).hex(),i.fillText(e,t,n),i.stroke(),i.fill(),i.restore()});V(this,"createLinearGradient",(e,t,n,i)=>{let r;return i==="y"?r=this.context.createLinearGradient(0,this.canvas.height,0,0):i==="x"?r=this.context.createLinearGradient(0,0,this.canvas.width,0):r=this.context.createLinearGradient(0,this.canvas.height,this.canvas.width,0),r.addColorStop(0,e),r.addColorStop(.5,t),r.addColorStop(1,n),r});if(this.canvas=e,this.context=e.getContext("2d"),this.context===null)throw new Error(`Cannot can 2d context of the canvas "${e.id}".`)}}class Tp extends xw{constructor(t){super(t);V(this,"samples");V(this,"buffer",[]);V(this,"max",1);V(this,"min",-1);V(this,"isAutoRange",!0);V(this,"gainFactor",1);V(this,"_counter",0);V(this,"add",(t,n)=>{this.buffer.push(t),this.buffer.length>this.samples&&this.buffer.shift(),this.isAutoRange&&(t>this.max||t<this.min?(this._counter=0,this.autoMinMax()):++this._counter>=this.canvas.width&&(this._counter=0,this.autoMinMax())),n!==!0&&this.redraw()});V(this,"redraw",()=>{this.fillBackground("black",0),this.drawGrids();const t=this.canvas.height/(this.max-this.min),n=this.canvas.height/2,i=this.context;i.beginPath(),i.strokeStyle=this.createLinearGradient("cyan","yellow","red","y"),i.lineWidth=2.5,i.translate(0,0);const r=this.getSize().width/this.samples;for(let a=1;a<this.buffer.length;a++){const l=this.buffer[a]*(-t*this.gainFactor)+n,c=a*r;i.lineTo(c,l)}i.stroke()});V(this,"setMinMax",(t,n)=>{this.min=t,this.max=n});V(this,"autoMinMax",()=>{let t=this.buffer[0],n=t;for(let i=1;i<this.buffer.length;i++){const r=this.buffer[i];t=r<t?r:t,n=r>n?r:n}this.min=t,this.max=n});V(this,"enableAutoRange",t=>{this.isAutoRange=t});V(this,"setGainFactor",t=>{this.gainFactor=t});this.samples=250}}function yw(s){let e,t,n,i;const r=s[3].default,a=Lp(r,s,s[2],null);return{c(){e=Zt("div"),t=Zt("div"),n=Xn(),a&&a.c(),this.h()},l(o){e=Jt(o,"DIV",{class:!0});var l=Qt(e);t=Jt(l,"DIV",{id:!0}),Qt(t).forEach(gt),n=qn(l),a&&a.l(l),l.forEach(gt),this.h()},h(){Et(t,"id",s[0]),Et(e,"class","border border-blue-500 p-0 m-0")},m(o,l){mi(o,e,l),Ge(e,t),Ge(e,n),a&&a.m(e,null),i=!0},p(o,[l]){a&&a.p&&(!i||l&4)&&Pp(a,r,o,o[2],i?Ip(r,o[2],l,null):Dp(o[2]),null)},i(o){i||(gi(a,o),i=!0)},o(o){Ei(a,o),i=!1},d(o){o&&gt(e),a&&a.d(o)}}}function Mw(s,e,t){let{$$slots:n={},$$scope:i}=e,r=Ft.generateUUID("main-container"),a,{modelId:o=2}=e,l=!1;return so(async()=>{console.log("%c GraphicsComponent.svelte loaded","background: #228"),console.log(`%c Container ID: ${r}`,"background: #833");const c=()=>{const u=a.createGraphics(r);u.setSize169(),u.nextEnvironment(),u.setBackground(null);const h=a.getResources().glTFs[0],f=u.useScene(h,o);f.position.set(0,-1,0);const d=u.getBackCanvas(),v=new Tp(d);v.setGainFactor(.8),v.hideGrids(),a.createTween({firstValue:-1,lastValue:1,ease:"elastic.inOut(1, 0.5)",yoyo:!0,repeat:-1,duration:3+Math.random()*2,onUpdate:S=>{f.rotation.y=S*Math.PI+Math.PI,v.add(S),v.drawText(`id: ${r}`,140,135)}});const g=u.getOverlayCanvas(),m=new Tp(g);m.setGainFactor(.5),m.hideGrids(),a.createTween({firstValue:-1,lastValue:1,ease:"elastic.inOut(2, 0.2)",yoyo:!0,repeat:-1,duration:3+Math.random()*2,onUpdate:S=>{m.add(S)}}),u.onResize(()=>{u.setSize169()}),u.createRaySensor().sense("Ball",{mouseDown:S=>{u.previousEnvironment()},mouseDrag:S=>{console.dir(S.object.name)}})};El.subscribe(u=>{a=u,a&&l===!1&&(c(),l=!0)})}),s.$$set=c=>{"modelId"in c&&t(1,o=c.modelId),"$$scope"in c&&t(2,i=c.$$scope)},[r,o,i,n]}class bw extends ca{constructor(e){super(),ua(this,e,Mw,yw,ha,{modelId:1})}}function Sw(s){let e,t;return e=new bw({props:{modelId:2}}),{c(){Fa(e.$$.fragment)},l(n){ka(e.$$.fragment,n)},m(n,i){Ba(e,n,i),t=!0},p:Ys,i(n){t||(gi(e.$$.fragment,n),t=!0)},o(n){Ei(e.$$.fragment,n),t=!1},d(n){za(e,n)}}}function Ew(s){let e,t;return e=new vw({props:{$$slots:{default:[Sw]},$$scope:{ctx:s}}}),{c(){Fa(e.$$.fragment)},l(n){ka(e.$$.fragment,n)},m(n,i){Ba(e,n,i),t=!0},p(n,[i]){const r={};i&1&&(r.$$scope={dirty:i,ctx:n}),e.$set(r)},i(n){t||(gi(e.$$.fragment,n),t=!0)},o(n){Ei(e.$$.fragment,n),t=!1},d(n){za(e,n)}}}function Tw(s){return so(()=>console.log("%c page.svelte loaded","background: #228")),[]}class Cw extends ca{constructor(e){super(),ua(this,e,Tw,Ew,ha,{})}}export{Cw as component};
