var zv=Object.defineProperty;var Hv=(s,e,t)=>e in s?zv(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var H=(s,e,t)=>(Hv(s,typeof e!="symbol"?e+"":e,t),t);import{o as ro,J as bu,K as Gv,L as il,M as Rp,S as rs,i as ss,s as as,e as cf,b as xi,g as Qt,v as Cp,d as on,f as Lp,h as St,I as Vv,N as uf,k as mn,l as gn,m as _n,n as Dt,G as bt,O as Wv,a as Sn,q as Ua,c as En,r as Na,P as Pp,u as Ko,Q as Xv,R as qv,T as $v,U as Yv,V as jv,W as Kv,X as Zv,H as rl,Y as hf,Z as Jv,y as $n,z as Yn,A as jn,B as Kn,C as Dp,D as Ip,E as Up,F as Np}from"../chunks/index.abe60b76.js";import{w as Su}from"../chunks/index.b61f274d.js";/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Eu="153",Ms={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},bs={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Qv=0,ff=1,ex=2,Op=1,tx=2,qi=3,er=0,On=1,Ti=2,Mr=0,qs=1,df=2,pf=3,mf=4,nx=5,Gs=100,ix=101,rx=102,gf=103,_f=104,sx=200,ax=201,ox=202,lx=203,Fp=204,kp=205,cx=206,ux=207,hx=208,fx=209,dx=210,px=0,mx=1,gx=2,qc=3,_x=4,vx=5,xx=6,yx=7,Bp=0,Mx=1,bx=2,Ji=0,Sx=1,Ex=2,Tx=3,wx=4,Ax=5,zp=300,Js=301,Qs=302,$c=303,Yc=304,vl=306,ea=1e3,ri=1001,sl=1002,an=1003,jc=1004,Zo=1005,Un=1006,Hp=1007,Qr=1008,br=1009,Rx=1010,Cx=1011,Tu=1012,Gp=1013,mr=1014,ji=1015,$a=1016,Vp=1017,Wp=1018,qr=1020,Lx=1021,si=1023,Px=1024,Dx=1025,$r=1026,ta=1027,Ix=1028,Xp=1029,Ux=1030,qp=1031,$p=1033,ec=33776,tc=33777,nc=33778,ic=33779,vf=35840,xf=35841,yf=35842,Mf=35843,Nx=36196,bf=37492,Sf=37496,Ef=37808,Tf=37809,wf=37810,Af=37811,Rf=37812,Cf=37813,Lf=37814,Pf=37815,Df=37816,If=37817,Uf=37818,Nf=37819,Of=37820,Ff=37821,rc=36492,Ox=36283,kf=36284,Bf=36285,zf=36286,Ya=2300,na=2301,sc=2302,Hf=2400,Gf=2401,Vf=2402,Fx=2500,kx=0,Yp=1,Kc=2,jp=3e3,Yr=3001,Bx=3200,zx=3201,Kp=0,Hx=1,jr="",Ve="srgb",Ci="srgb-linear",Zp="display-p3",ac=7680,Gx=519,Vx=512,Wx=513,Xx=514,qx=515,$x=516,Yx=517,jx=518,Kx=519,Zc=35044,Wf="300 es",Jc=1035,Ki=2e3,al=2001;class os{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,e);e.target=null}}}const yn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Xf=1234567;const za=Math.PI/180,ia=180/Math.PI;function yi(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(yn[s&255]+yn[s>>8&255]+yn[s>>16&255]+yn[s>>24&255]+"-"+yn[e&255]+yn[e>>8&255]+"-"+yn[e>>16&15|64]+yn[e>>24&255]+"-"+yn[t&63|128]+yn[t>>8&255]+"-"+yn[t>>16&255]+yn[t>>24&255]+yn[n&255]+yn[n>>8&255]+yn[n>>16&255]+yn[n>>24&255]).toLowerCase()}function dn(s,e,t){return Math.max(e,Math.min(t,s))}function wu(s,e){return(s%e+e)%e}function Zx(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function Jx(s,e,t){return s!==e?(t-s)/(e-s):0}function Ha(s,e,t){return(1-t)*s+t*e}function Qx(s,e,t,n){return Ha(s,e,1-Math.exp(-t*n))}function ey(s,e=1){return e-Math.abs(wu(s,e*2)-e)}function ty(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function ny(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function iy(s,e){return s+Math.floor(Math.random()*(e-s+1))}function ry(s,e){return s+Math.random()*(e-s)}function sy(s){return s*(.5-Math.random())}function ay(s){s!==void 0&&(Xf=s);let e=Xf+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function oy(s){return s*za}function ly(s){return s*ia}function Qc(s){return(s&s-1)===0&&s!==0}function Jp(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function ol(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function cy(s,e,t,n,i){const r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),u=a((e+n)/2),h=r((e-n)/2),f=a((e-n)/2),d=r((n-e)/2),v=a((n-e)/2);switch(i){case"XYX":s.set(o*u,l*h,l*f,o*c);break;case"YZY":s.set(l*f,o*u,l*h,o*c);break;case"ZXZ":s.set(l*h,l*f,o*u,o*c);break;case"XZX":s.set(o*u,l*v,l*d,o*c);break;case"YXY":s.set(l*d,o*u,l*v,o*c);break;case"ZYZ":s.set(l*v,l*d,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Zi(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function At(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const uy={DEG2RAD:za,RAD2DEG:ia,generateUUID:yi,clamp:dn,euclideanModulo:wu,mapLinear:Zx,inverseLerp:Jx,lerp:Ha,damp:Qx,pingpong:ey,smoothstep:ty,smootherstep:ny,randInt:iy,randFloat:ry,randFloatSpread:sy,seededRandom:ay,degToRad:oy,radToDeg:ly,isPowerOfTwo:Qc,ceilPowerOfTwo:Jp,floorPowerOfTwo:ol,setQuaternionFromProperEuler:cy,normalize:At,denormalize:Zi};class We{constructor(e=0,t=0){We.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(dn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*i+e.x,this.y=r*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class st{constructor(e,t,n,i,r,a,o,l,c){st.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,l,c)}set(e,t,n,i,r,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=o,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],d=n[5],v=n[8],p=i[0],g=i[3],m=i[6],S=i[1],y=i[4],T=i[7],E=i[2],w=i[5],R=i[8];return r[0]=a*p+o*S+l*E,r[3]=a*g+o*y+l*w,r[6]=a*m+o*T+l*R,r[1]=c*p+u*S+h*E,r[4]=c*g+u*y+h*w,r[7]=c*m+u*T+h*R,r[2]=f*p+d*S+v*E,r[5]=f*g+d*y+v*w,r[8]=f*m+d*T+v*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*r*u+n*o*l+i*r*c-i*a*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=u*a-o*c,f=o*l-u*r,d=c*r-a*l,v=t*h+n*f+i*d;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const p=1/v;return e[0]=h*p,e[1]=(i*c-u*n)*p,e[2]=(o*n-i*a)*p,e[3]=f*p,e[4]=(u*t-i*l)*p,e[5]=(i*r-o*t)*p,e[6]=d*p,e[7]=(n*l-c*t)*p,e[8]=(a*t-n*r)*p,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(oc.makeScale(e,t)),this}rotate(e){return this.premultiply(oc.makeRotation(-e)),this}translate(e,t){return this.premultiply(oc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const oc=new st;function Qp(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function ja(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}const qf={};function Ga(s){s in qf||(qf[s]=!0,console.warn(s))}function $s(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function lc(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const hy=new st().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),fy=new st().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function dy(s){return s.convertSRGBToLinear().applyMatrix3(fy)}function py(s){return s.applyMatrix3(hy).convertLinearToSRGB()}const my={[Ci]:s=>s,[Ve]:s=>s.convertSRGBToLinear(),[Zp]:dy},gy={[Ci]:s=>s,[Ve]:s=>s.convertLinearToSRGB(),[Zp]:py},pi={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(s){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!s},get workingColorSpace(){return Ci},set workingColorSpace(s){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(s,e,t){if(this.enabled===!1||e===t||!e||!t)return s;const n=my[e],i=gy[t];if(n===void 0||i===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return i(n(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this.workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this.workingColorSpace)}};let Ss;class em{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ss===void 0&&(Ss=ja("canvas")),Ss.width=e.width,Ss.height=e.height;const n=Ss.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Ss}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ja("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=$s(r[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor($s(t[n]/255)*255):t[n]=$s(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let _y=0;class tm{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:_y++}),this.uuid=yi(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(cc(i[a].image)):r.push(cc(i[a]))}else r=cc(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function cc(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?em.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let vy=0;class xn extends os{constructor(e=xn.DEFAULT_IMAGE,t=xn.DEFAULT_MAPPING,n=ri,i=ri,r=Un,a=Qr,o=si,l=br,c=xn.DEFAULT_ANISOTROPY,u=jr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:vy++}),this.uuid=yi(),this.name="",this.source=new tm(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new We(0,0),this.repeat=new We(1,1),this.center=new We(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new st,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(Ga("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===Yr?Ve:jr),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==zp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ea:e.x=e.x-Math.floor(e.x);break;case ri:e.x=e.x<0?0:1;break;case sl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ea:e.y=e.y-Math.floor(e.y);break;case ri:e.y=e.y<0?0:1;break;case sl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Ga("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Ve?Yr:jp}set encoding(e){Ga("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Yr?Ve:jr}}xn.DEFAULT_IMAGE=null;xn.DEFAULT_MAPPING=zp;xn.DEFAULT_ANISOTROPY=1;class Ct{constructor(e=0,t=0,n=0,i=1){Ct.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],v=l[9],p=l[2],g=l[6],m=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-p)<.01&&Math.abs(v-g)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+p)<.1&&Math.abs(v+g)<.1&&Math.abs(c+d+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(c+1)/2,T=(d+1)/2,E=(m+1)/2,w=(u+f)/4,R=(h+p)/4,P=(v+g)/4;return y>T&&y>E?y<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(y),i=w/n,r=R/n):T>E?T<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(T),n=w/i,r=P/i):E<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(E),n=R/r,i=P/r),this.set(n,i,r,t),this}let S=Math.sqrt((g-v)*(g-v)+(h-p)*(h-p)+(f-u)*(f-u));return Math.abs(S)<.001&&(S=1),this.x=(g-v)/S,this.y=(h-p)/S,this.z=(f-u)/S,this.w=Math.acos((c+d+m-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class es extends os{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ct(0,0,e,t),this.scissorTest=!1,this.viewport=new Ct(0,0,e,t);const i={width:e,height:t,depth:1};n.encoding!==void 0&&(Ga("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Yr?Ve:jr),this.texture=new xn(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Un,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new tm(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class nm extends xn{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=an,this.minFilter=an,this.wrapR=ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class xy extends xn{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=an,this.minFilter=an,this.wrapR=ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Li{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,a,o){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3];const f=r[a+0],d=r[a+1],v=r[a+2],p=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(o===1){e[t+0]=f,e[t+1]=d,e[t+2]=v,e[t+3]=p;return}if(h!==p||l!==f||c!==d||u!==v){let g=1-o;const m=l*f+c*d+u*v+h*p,S=m>=0?1:-1,y=1-m*m;if(y>Number.EPSILON){const E=Math.sqrt(y),w=Math.atan2(E,m*S);g=Math.sin(g*w)/E,o=Math.sin(o*w)/E}const T=o*S;if(l=l*g+f*T,c=c*g+d*T,u=u*g+v*T,h=h*g+p*T,g===1-o){const E=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=E,c*=E,u*=E,h*=E}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,r,a){const o=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=r[a],f=r[a+1],d=r[a+2],v=r[a+3];return e[t]=o*v+u*h+l*d-c*f,e[t+1]=l*v+u*f+c*h-o*d,e[t+2]=c*v+u*d+o*f-l*h,e[t+3]=u*v-o*h-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,i=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(i/2),h=o(r/2),f=l(n/2),d=l(i/2),v=l(r/2);switch(a){case"XYZ":this._x=f*u*h+c*d*v,this._y=c*d*h-f*u*v,this._z=c*u*v+f*d*h,this._w=c*u*h-f*d*v;break;case"YXZ":this._x=f*u*h+c*d*v,this._y=c*d*h-f*u*v,this._z=c*u*v-f*d*h,this._w=c*u*h+f*d*v;break;case"ZXY":this._x=f*u*h-c*d*v,this._y=c*d*h+f*u*v,this._z=c*u*v+f*d*h,this._w=c*u*h-f*d*v;break;case"ZYX":this._x=f*u*h-c*d*v,this._y=c*d*h+f*u*v,this._z=c*u*v-f*d*h,this._w=c*u*h+f*d*v;break;case"YZX":this._x=f*u*h+c*d*v,this._y=c*d*h+f*u*v,this._z=c*u*v-f*d*h,this._w=c*u*h-f*d*v;break;case"XZY":this._x=f*u*h-c*d*v,this._y=c*d*h-f*u*v,this._z=c*u*v+f*d*h,this._w=c*u*h+f*d*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=n+o+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(r-c)*d,this._z=(a-i)*d}else if(n>o&&n>h){const d=2*Math.sqrt(1+n-o-h);this._w=(u-l)/d,this._x=.25*d,this._y=(i+a)/d,this._z=(r+c)/d}else if(o>h){const d=2*Math.sqrt(1+o-n-h);this._w=(r-c)/d,this._x=(i+a)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+h-n-o);this._w=(a-i)/d,this._x=(r+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(dn(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+i*c-r*l,this._y=i*u+a*l+r*o-n*c,this._z=r*u+a*c+n*l-i*o,this._w=a*u-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,a=this._w;let o=a*e._w+n*e._x+i*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const d=1-t;return this._w=d*a+t*this._w,this._x=d*n+t*this._x,this._y=d*i+t*this._y,this._z=d*r+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),h=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=a*h+this._w*f,this._x=n*h+this._x*f,this._y=i*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(r),n*Math.cos(r),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class z{constructor(e=0,t=0,n=0){z.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion($f.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion($f.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=l*t+a*i-o*n,u=l*n+o*t-r*i,h=l*i+r*n-a*t,f=-r*t-a*n-o*i;return this.x=c*l+f*-r+u*-o-h*-a,this.y=u*l+f*-a+h*-r-c*-o,this.z=h*l+f*-o+c*-a-u*-r,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-r*o,this.y=r*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return uc.copy(this).projectOnVector(e),this.sub(uc)}reflect(e){return this.sub(uc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(dn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const uc=new z,$f=new Li;class ir{constructor(e=new z(1/0,1/0,1/0),t=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(zi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(zi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=zi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),Es.copy(e.boundingBox),Es.applyMatrix4(e.matrixWorld),this.union(Es);else{const i=e.geometry;if(i!==void 0)if(t&&i.attributes!==void 0&&i.attributes.position!==void 0){const r=i.attributes.position;for(let a=0,o=r.count;a<o;a++)zi.fromBufferAttribute(r,a).applyMatrix4(e.matrixWorld),this.expandByPoint(zi)}else i.boundingBox===null&&i.computeBoundingBox(),Es.copy(i.boundingBox),Es.applyMatrix4(e.matrixWorld),this.union(Es)}const n=e.children;for(let i=0,r=n.length;i<r;i++)this.expandByObject(n[i],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,zi),zi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Sa),Eo.subVectors(this.max,Sa),Ts.subVectors(e.a,Sa),ws.subVectors(e.b,Sa),As.subVectors(e.c,Sa),lr.subVectors(ws,Ts),cr.subVectors(As,ws),Ur.subVectors(Ts,As);let t=[0,-lr.z,lr.y,0,-cr.z,cr.y,0,-Ur.z,Ur.y,lr.z,0,-lr.x,cr.z,0,-cr.x,Ur.z,0,-Ur.x,-lr.y,lr.x,0,-cr.y,cr.x,0,-Ur.y,Ur.x,0];return!hc(t,Ts,ws,As,Eo)||(t=[1,0,0,0,1,0,0,0,1],!hc(t,Ts,ws,As,Eo))?!1:(To.crossVectors(lr,cr),t=[To.x,To.y,To.z],hc(t,Ts,ws,As,Eo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,zi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(zi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Bi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Bi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Bi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Bi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Bi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Bi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Bi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Bi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Bi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Bi=[new z,new z,new z,new z,new z,new z,new z,new z],zi=new z,Es=new ir,Ts=new z,ws=new z,As=new z,lr=new z,cr=new z,Ur=new z,Sa=new z,Eo=new z,To=new z,Nr=new z;function hc(s,e,t,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){Nr.fromArray(s,r);const o=i.x*Math.abs(Nr.x)+i.y*Math.abs(Nr.y)+i.z*Math.abs(Nr.z),l=e.dot(Nr),c=t.dot(Nr),u=n.dot(Nr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const yy=new ir,Ea=new z,fc=new z;class Di{constructor(e=new z,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):yy.setFromPoints(e).getCenter(n);let i=0;for(let r=0,a=e.length;r<a;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ea.subVectors(e,this.center);const t=Ea.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Ea,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(fc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ea.copy(e.center).add(fc)),this.expandByPoint(Ea.copy(e.center).sub(fc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Hi=new z,dc=new z,wo=new z,ur=new z,pc=new z,Ao=new z,mc=new z;class so{constructor(e=new z,t=new z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Hi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Hi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Hi.copy(this.origin).addScaledVector(this.direction,t),Hi.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){dc.copy(e).add(t).multiplyScalar(.5),wo.copy(t).sub(e).normalize(),ur.copy(this.origin).sub(dc);const r=e.distanceTo(t)*.5,a=-this.direction.dot(wo),o=ur.dot(this.direction),l=-ur.dot(wo),c=ur.lengthSq(),u=Math.abs(1-a*a);let h,f,d,v;if(u>0)if(h=a*l-o,f=a*o-l,v=r*u,h>=0)if(f>=-v)if(f<=v){const p=1/u;h*=p,f*=p,d=h*(h+a*f+2*o)+f*(a*h+f+2*l)+c}else f=r,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*l)+c;else f=-r,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*l)+c;else f<=-v?(h=Math.max(0,-(-a*r+o)),f=h>0?-r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c):f<=v?(h=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(h=Math.max(0,-(a*r+o)),f=h>0?r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c);else f=a>0?-r:r,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(dc).addScaledVector(wo,f),d}intersectSphere(e,t){Hi.subVectors(e.center,this.origin);const n=Hi.dot(this.direction),i=Hi.dot(Hi)-n*n,r=e.radius*e.radius;if(i>r)return null;const a=Math.sqrt(r-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,i=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,i=(e.min.x-f.x)*c),u>=0?(r=(e.min.y-f.y)*u,a=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,a=(e.min.y-f.y)*u),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),h>=0?(o=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(o=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Hi)!==null}intersectTriangle(e,t,n,i,r){pc.subVectors(t,e),Ao.subVectors(n,e),mc.crossVectors(pc,Ao);let a=this.direction.dot(mc),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;ur.subVectors(this.origin,e);const l=o*this.direction.dot(Ao.crossVectors(ur,Ao));if(l<0)return null;const c=o*this.direction.dot(pc.cross(ur));if(c<0||l+c>a)return null;const u=-o*ur.dot(mc);return u<0?null:this.at(u/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class at{constructor(e,t,n,i,r,a,o,l,c,u,h,f,d,v,p,g){at.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,l,c,u,h,f,d,v,p,g)}set(e,t,n,i,r,a,o,l,c,u,h,f,d,v,p,g){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=i,m[1]=r,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=u,m[10]=h,m[14]=f,m[3]=d,m[7]=v,m[11]=p,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new at().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Rs.setFromMatrixColumn(e,0).length(),r=1/Rs.setFromMatrixColumn(e,1).length(),a=1/Rs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const f=a*u,d=a*h,v=o*u,p=o*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=d+v*c,t[5]=f-p*c,t[9]=-o*l,t[2]=p-f*c,t[6]=v+d*c,t[10]=a*l}else if(e.order==="YXZ"){const f=l*u,d=l*h,v=c*u,p=c*h;t[0]=f+p*o,t[4]=v*o-d,t[8]=a*c,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=d*o-v,t[6]=p+f*o,t[10]=a*l}else if(e.order==="ZXY"){const f=l*u,d=l*h,v=c*u,p=c*h;t[0]=f-p*o,t[4]=-a*h,t[8]=v+d*o,t[1]=d+v*o,t[5]=a*u,t[9]=p-f*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const f=a*u,d=a*h,v=o*u,p=o*h;t[0]=l*u,t[4]=v*c-d,t[8]=f*c+p,t[1]=l*h,t[5]=p*c+f,t[9]=d*c-v,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const f=a*l,d=a*c,v=o*l,p=o*c;t[0]=l*u,t[4]=p-f*h,t[8]=v*h+d,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=d*h+v,t[10]=f-p*h}else if(e.order==="XZY"){const f=a*l,d=a*c,v=o*l,p=o*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+p,t[5]=a*u,t[9]=d*h-v,t[2]=v*h-d,t[6]=o*u,t[10]=p*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(My,e,by)}lookAt(e,t,n){const i=this.elements;return Vn.subVectors(e,t),Vn.lengthSq()===0&&(Vn.z=1),Vn.normalize(),hr.crossVectors(n,Vn),hr.lengthSq()===0&&(Math.abs(n.z)===1?Vn.x+=1e-4:Vn.z+=1e-4,Vn.normalize(),hr.crossVectors(n,Vn)),hr.normalize(),Ro.crossVectors(Vn,hr),i[0]=hr.x,i[4]=Ro.x,i[8]=Vn.x,i[1]=hr.y,i[5]=Ro.y,i[9]=Vn.y,i[2]=hr.z,i[6]=Ro.z,i[10]=Vn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],d=n[13],v=n[2],p=n[6],g=n[10],m=n[14],S=n[3],y=n[7],T=n[11],E=n[15],w=i[0],R=i[4],P=i[8],b=i[12],D=i[1],$=i[5],ae=i[9],G=i[13],F=i[2],V=i[6],re=i[10],K=i[14],ee=i[3],oe=i[7],ue=i[11],Te=i[15];return r[0]=a*w+o*D+l*F+c*ee,r[4]=a*R+o*$+l*V+c*oe,r[8]=a*P+o*ae+l*re+c*ue,r[12]=a*b+o*G+l*K+c*Te,r[1]=u*w+h*D+f*F+d*ee,r[5]=u*R+h*$+f*V+d*oe,r[9]=u*P+h*ae+f*re+d*ue,r[13]=u*b+h*G+f*K+d*Te,r[2]=v*w+p*D+g*F+m*ee,r[6]=v*R+p*$+g*V+m*oe,r[10]=v*P+p*ae+g*re+m*ue,r[14]=v*b+p*G+g*K+m*Te,r[3]=S*w+y*D+T*F+E*ee,r[7]=S*R+y*$+T*V+E*oe,r[11]=S*P+y*ae+T*re+E*ue,r[15]=S*b+y*G+T*K+E*Te,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],d=e[14],v=e[3],p=e[7],g=e[11],m=e[15];return v*(+r*l*h-i*c*h-r*o*f+n*c*f+i*o*d-n*l*d)+p*(+t*l*d-t*c*f+r*a*f-i*a*d+i*c*u-r*l*u)+g*(+t*c*h-t*o*d-r*a*h+n*a*d+r*o*u-n*c*u)+m*(-i*o*u-t*l*h+t*o*f+i*a*h-n*a*f+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],d=e[11],v=e[12],p=e[13],g=e[14],m=e[15],S=h*g*c-p*f*c+p*l*d-o*g*d-h*l*m+o*f*m,y=v*f*c-u*g*c-v*l*d+a*g*d+u*l*m-a*f*m,T=u*p*c-v*h*c+v*o*d-a*p*d-u*o*m+a*h*m,E=v*h*l-u*p*l-v*o*f+a*p*f+u*o*g-a*h*g,w=t*S+n*y+i*T+r*E;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/w;return e[0]=S*R,e[1]=(p*f*r-h*g*r-p*i*d+n*g*d+h*i*m-n*f*m)*R,e[2]=(o*g*r-p*l*r+p*i*c-n*g*c-o*i*m+n*l*m)*R,e[3]=(h*l*r-o*f*r-h*i*c+n*f*c+o*i*d-n*l*d)*R,e[4]=y*R,e[5]=(u*g*r-v*f*r+v*i*d-t*g*d-u*i*m+t*f*m)*R,e[6]=(v*l*r-a*g*r-v*i*c+t*g*c+a*i*m-t*l*m)*R,e[7]=(a*f*r-u*l*r+u*i*c-t*f*c-a*i*d+t*l*d)*R,e[8]=T*R,e[9]=(v*h*r-u*p*r-v*n*d+t*p*d+u*n*m-t*h*m)*R,e[10]=(a*p*r-v*o*r+v*n*c-t*p*c-a*n*m+t*o*m)*R,e[11]=(u*o*r-a*h*r-u*n*c+t*h*c+a*n*d-t*o*d)*R,e[12]=E*R,e[13]=(u*p*i-v*h*i+v*n*f-t*p*f-u*n*g+t*h*g)*R,e[14]=(v*o*i-a*p*i-v*n*l+t*p*l+a*n*g-t*o*g)*R,e[15]=(a*h*i-u*o*i+u*n*l-t*h*l-a*n*f+t*o*f)*R,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,u=r*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,u*o+n,u*l-i*a,0,c*l-i*o,u*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,a){return this.set(1,n,r,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,u=a+a,h=o+o,f=r*c,d=r*u,v=r*h,p=a*u,g=a*h,m=o*h,S=l*c,y=l*u,T=l*h,E=n.x,w=n.y,R=n.z;return i[0]=(1-(p+m))*E,i[1]=(d+T)*E,i[2]=(v-y)*E,i[3]=0,i[4]=(d-T)*w,i[5]=(1-(f+m))*w,i[6]=(g+S)*w,i[7]=0,i[8]=(v+y)*R,i[9]=(g-S)*R,i[10]=(1-(f+p))*R,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=Rs.set(i[0],i[1],i[2]).length();const a=Rs.set(i[4],i[5],i[6]).length(),o=Rs.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],mi.copy(this);const c=1/r,u=1/a,h=1/o;return mi.elements[0]*=c,mi.elements[1]*=c,mi.elements[2]*=c,mi.elements[4]*=u,mi.elements[5]*=u,mi.elements[6]*=u,mi.elements[8]*=h,mi.elements[9]*=h,mi.elements[10]*=h,t.setFromRotationMatrix(mi),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,i,r,a,o=Ki){const l=this.elements,c=2*r/(t-e),u=2*r/(n-i),h=(t+e)/(t-e),f=(n+i)/(n-i);let d,v;if(o===Ki)d=-(a+r)/(a-r),v=-2*a*r/(a-r);else if(o===al)d=-a/(a-r),v=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,r,a,o=Ki){const l=this.elements,c=1/(t-e),u=1/(n-i),h=1/(a-r),f=(t+e)*c,d=(n+i)*u;let v,p;if(o===Ki)v=(a+r)*h,p=-2*h;else if(o===al)v=r*h,p=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=p,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Rs=new z,mi=new at,My=new z(0,0,0),by=new z(1,1,1),hr=new z,Ro=new z,Vn=new z,Yf=new at,jf=new Li;class xl{constructor(e=0,t=0,n=0,i=xl.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],a=i[4],o=i[8],l=i[1],c=i[5],u=i[9],h=i[2],f=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(dn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-dn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(dn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-dn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(dn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-dn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Yf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Yf,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return jf.setFromEuler(this),this.setFromQuaternion(jf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}xl.DEFAULT_ORDER="XYZ";class Au{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Sy=0;const Kf=new z,Cs=new Li,Gi=new at,Co=new z,Ta=new z,Ey=new z,Ty=new Li,Zf=new z(1,0,0),Jf=new z(0,1,0),Qf=new z(0,0,1),wy={type:"added"},ed={type:"removed"};class Gt extends os{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Sy++}),this.uuid=yi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Gt.DEFAULT_UP.clone();const e=new z,t=new xl,n=new Li,i=new z(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new at},normalMatrix:{value:new st}}),this.matrix=new at,this.matrixWorld=new at,this.matrixAutoUpdate=Gt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Au,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Cs.setFromAxisAngle(e,t),this.quaternion.multiply(Cs),this}rotateOnWorldAxis(e,t){return Cs.setFromAxisAngle(e,t),this.quaternion.premultiply(Cs),this}rotateX(e){return this.rotateOnAxis(Zf,e)}rotateY(e){return this.rotateOnAxis(Jf,e)}rotateZ(e){return this.rotateOnAxis(Qf,e)}translateOnAxis(e,t){return Kf.copy(e).applyQuaternion(this.quaternion),this.position.add(Kf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Zf,e)}translateY(e){return this.translateOnAxis(Jf,e)}translateZ(e){return this.translateOnAxis(Qf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Gi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Co.copy(e):Co.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Ta.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Gi.lookAt(Ta,Co,this.up):Gi.lookAt(Co,Ta,this.up),this.quaternion.setFromRotationMatrix(Gi),i&&(Gi.extractRotation(i.matrixWorld),Cs.setFromRotationMatrix(Gi),this.quaternion.premultiply(Cs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(wy)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ed)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(ed)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Gi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Gi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Gi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectsByProperty(e,t);a.length>0&&(n=n.concat(a))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ta,e,Ey),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ta,Ty,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let r=0,a=i.length;r<a;r++){const o=i[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));i.material=o}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),h=a(e.shapes),f=a(e.skeletons),d=a(e.animations),v=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),v.length>0&&(n.nodes=v)}return n.object=i,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Gt.DEFAULT_UP=new z(0,1,0);Gt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const gi=new z,Vi=new z,gc=new z,Wi=new z,Ls=new z,Ps=new z,td=new z,_c=new z,vc=new z,xc=new z;let Lo=!1;class vi{constructor(e=new z,t=new z,n=new z){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),gi.subVectors(e,t),i.cross(gi);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){gi.subVectors(i,t),Vi.subVectors(n,t),gc.subVectors(e,t);const a=gi.dot(gi),o=gi.dot(Vi),l=gi.dot(gc),c=Vi.dot(Vi),u=Vi.dot(gc),h=a*c-o*o;if(h===0)return r.set(-2,-1,-1);const f=1/h,d=(c*l-o*u)*f,v=(a*u-o*l)*f;return r.set(1-d-v,v,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Wi),Wi.x>=0&&Wi.y>=0&&Wi.x+Wi.y<=1}static getUV(e,t,n,i,r,a,o,l){return Lo===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Lo=!0),this.getInterpolation(e,t,n,i,r,a,o,l)}static getInterpolation(e,t,n,i,r,a,o,l){return this.getBarycoord(e,t,n,i,Wi),l.setScalar(0),l.addScaledVector(r,Wi.x),l.addScaledVector(a,Wi.y),l.addScaledVector(o,Wi.z),l}static isFrontFacing(e,t,n,i){return gi.subVectors(n,t),Vi.subVectors(e,t),gi.cross(Vi).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return gi.subVectors(this.c,this.b),Vi.subVectors(this.a,this.b),gi.cross(Vi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return vi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return vi.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,r){return Lo===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Lo=!0),vi.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}getInterpolation(e,t,n,i,r){return vi.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return vi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return vi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let a,o;Ls.subVectors(i,n),Ps.subVectors(r,n),_c.subVectors(e,n);const l=Ls.dot(_c),c=Ps.dot(_c);if(l<=0&&c<=0)return t.copy(n);vc.subVectors(e,i);const u=Ls.dot(vc),h=Ps.dot(vc);if(u>=0&&h<=u)return t.copy(i);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(Ls,a);xc.subVectors(e,r);const d=Ls.dot(xc),v=Ps.dot(xc);if(v>=0&&d<=v)return t.copy(r);const p=d*c-l*v;if(p<=0&&c>=0&&v<=0)return o=c/(c-v),t.copy(n).addScaledVector(Ps,o);const g=u*v-d*h;if(g<=0&&h-u>=0&&d-v>=0)return td.subVectors(r,i),o=(h-u)/(h-u+(d-v)),t.copy(i).addScaledVector(td,o);const m=1/(g+p+f);return a=p*m,o=f*m,t.copy(n).addScaledVector(Ls,a).addScaledVector(Ps,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Ay=0;class Mi extends os{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ay++}),this.uuid=yi(),this.name="",this.type="Material",this.blending=qs,this.side=er,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Fp,this.blendDst=kp,this.blendEquation=Gs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=qc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Gx,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ac,this.stencilZFail=ac,this.stencilZPass=ac,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==qs&&(n.blending=this.blending),this.side!==er&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=i(e.textures),a=i(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const im={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},_i={h:0,s:0,l:0},Po={h:0,s:0,l:0};function yc(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Qe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ve){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,pi.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=pi.workingColorSpace){return this.r=e,this.g=t,this.b=n,pi.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=pi.workingColorSpace){if(e=wu(e,1),t=dn(t,0,1),n=dn(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=yc(a,r,e+1/3),this.g=yc(a,r,e),this.b=yc(a,r,e-1/3)}return pi.toWorkingColorSpace(this,i),this}setStyle(e,t=Ve){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ve){const n=im[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=$s(e.r),this.g=$s(e.g),this.b=$s(e.b),this}copyLinearToSRGB(e){return this.r=lc(e.r),this.g=lc(e.g),this.b=lc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ve){return pi.fromWorkingColorSpace(Mn.copy(this),e),Math.round(dn(Mn.r*255,0,255))*65536+Math.round(dn(Mn.g*255,0,255))*256+Math.round(dn(Mn.b*255,0,255))}getHexString(e=Ve){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=pi.workingColorSpace){pi.fromWorkingColorSpace(Mn.copy(this),t);const n=Mn.r,i=Mn.g,r=Mn.b,a=Math.max(n,i,r),o=Math.min(n,i,r);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case n:l=(i-r)/h+(i<r?6:0);break;case i:l=(r-n)/h+2;break;case r:l=(n-i)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=pi.workingColorSpace){return pi.fromWorkingColorSpace(Mn.copy(this),t),e.r=Mn.r,e.g=Mn.g,e.b=Mn.b,e}getStyle(e=Ve){pi.fromWorkingColorSpace(Mn.copy(this),e);const t=Mn.r,n=Mn.g,i=Mn.b;return e!==Ve?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(_i),_i.h+=e,_i.s+=t,_i.l+=n,this.setHSL(_i.h,_i.s,_i.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(_i),e.getHSL(Po);const n=Ha(_i.h,Po.h,t),i=Ha(_i.s,Po.s,t),r=Ha(_i.l,Po.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Mn=new Qe;Qe.NAMES=im;class Wr extends Mi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Bp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Kt=new z,Do=new We;class Dn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Zc,this.updateRange={offset:0,count:-1},this.gpuType=ji,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Do.fromBufferAttribute(this,t),Do.applyMatrix3(e),this.setXY(t,Do.x,Do.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Kt.fromBufferAttribute(this,t),Kt.applyMatrix3(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Kt.fromBufferAttribute(this,t),Kt.applyMatrix4(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Kt.fromBufferAttribute(this,t),Kt.applyNormalMatrix(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Kt.fromBufferAttribute(this,t),Kt.transformDirection(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Zi(t,this.array)),t}setX(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Zi(t,this.array)),t}setY(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Zi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Zi(t,this.array)),t}setW(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=At(t,this.array),n=At(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=At(t,this.array),n=At(n,this.array),i=At(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=At(t,this.array),n=At(n,this.array),i=At(i,this.array),r=At(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Zc&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class rm extends Dn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class sm extends Dn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Qi extends Dn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Ry=0;const ei=new at,Mc=new Gt,Ds=new z,Wn=new ir,wa=new ir,sn=new z;class Ii extends os{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ry++}),this.uuid=yi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Qp(e)?sm:rm)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new st().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ei.makeRotationFromQuaternion(e),this.applyMatrix4(ei),this}rotateX(e){return ei.makeRotationX(e),this.applyMatrix4(ei),this}rotateY(e){return ei.makeRotationY(e),this.applyMatrix4(ei),this}rotateZ(e){return ei.makeRotationZ(e),this.applyMatrix4(ei),this}translate(e,t,n){return ei.makeTranslation(e,t,n),this.applyMatrix4(ei),this}scale(e,t,n){return ei.makeScale(e,t,n),this.applyMatrix4(ei),this}lookAt(e){return Mc.lookAt(e),Mc.updateMatrix(),this.applyMatrix4(Mc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ds).negate(),this.translate(Ds.x,Ds.y,Ds.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Qi(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ir);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];Wn.setFromBufferAttribute(r),this.morphTargetsRelative?(sn.addVectors(this.boundingBox.min,Wn.min),this.boundingBox.expandByPoint(sn),sn.addVectors(this.boundingBox.max,Wn.max),this.boundingBox.expandByPoint(sn)):(this.boundingBox.expandByPoint(Wn.min),this.boundingBox.expandByPoint(Wn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Di);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new z,1/0);return}if(e){const n=this.boundingSphere.center;if(Wn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];wa.setFromBufferAttribute(o),this.morphTargetsRelative?(sn.addVectors(Wn.min,wa.min),Wn.expandByPoint(sn),sn.addVectors(Wn.max,wa.max),Wn.expandByPoint(sn)):(Wn.expandByPoint(wa.min),Wn.expandByPoint(wa.max))}Wn.getCenter(n);let i=0;for(let r=0,a=e.count;r<a;r++)sn.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(sn));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)sn.fromBufferAttribute(o,c),l&&(Ds.fromBufferAttribute(e,c),sn.add(Ds)),i=Math.max(i,n.distanceToSquared(sn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,r=t.normal.array,a=t.uv.array,o=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Dn(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let D=0;D<o;D++)c[D]=new z,u[D]=new z;const h=new z,f=new z,d=new z,v=new We,p=new We,g=new We,m=new z,S=new z;function y(D,$,ae){h.fromArray(i,D*3),f.fromArray(i,$*3),d.fromArray(i,ae*3),v.fromArray(a,D*2),p.fromArray(a,$*2),g.fromArray(a,ae*2),f.sub(h),d.sub(h),p.sub(v),g.sub(v);const G=1/(p.x*g.y-g.x*p.y);isFinite(G)&&(m.copy(f).multiplyScalar(g.y).addScaledVector(d,-p.y).multiplyScalar(G),S.copy(d).multiplyScalar(p.x).addScaledVector(f,-g.x).multiplyScalar(G),c[D].add(m),c[$].add(m),c[ae].add(m),u[D].add(S),u[$].add(S),u[ae].add(S))}let T=this.groups;T.length===0&&(T=[{start:0,count:n.length}]);for(let D=0,$=T.length;D<$;++D){const ae=T[D],G=ae.start,F=ae.count;for(let V=G,re=G+F;V<re;V+=3)y(n[V+0],n[V+1],n[V+2])}const E=new z,w=new z,R=new z,P=new z;function b(D){R.fromArray(r,D*3),P.copy(R);const $=c[D];E.copy($),E.sub(R.multiplyScalar(R.dot($))).normalize(),w.crossVectors(P,$);const G=w.dot(u[D])<0?-1:1;l[D*4]=E.x,l[D*4+1]=E.y,l[D*4+2]=E.z,l[D*4+3]=G}for(let D=0,$=T.length;D<$;++D){const ae=T[D],G=ae.start,F=ae.count;for(let V=G,re=G+F;V<re;V+=3)b(n[V+0]),b(n[V+1]),b(n[V+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Dn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const i=new z,r=new z,a=new z,o=new z,l=new z,c=new z,u=new z,h=new z;if(e)for(let f=0,d=e.count;f<d;f+=3){const v=e.getX(f+0),p=e.getX(f+1),g=e.getX(f+2);i.fromBufferAttribute(t,v),r.fromBufferAttribute(t,p),a.fromBufferAttribute(t,g),u.subVectors(a,r),h.subVectors(i,r),u.cross(h),o.fromBufferAttribute(n,v),l.fromBufferAttribute(n,p),c.fromBufferAttribute(n,g),o.add(u),l.add(u),c.add(u),n.setXYZ(v,o.x,o.y,o.z),n.setXYZ(p,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)i.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),u.subVectors(a,r),h.subVectors(i,r),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)sn.fromBufferAttribute(e,t),sn.normalize(),e.setXYZ(t,sn.x,sn.y,sn.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,h=o.normalized,f=new c.constructor(l.length*u);let d=0,v=0;for(let p=0,g=l.length;p<g;p++){o.isInterleavedBufferAttribute?d=l[p]*o.data.stride+o.offset:d=l[p]*u;for(let m=0;m<u;m++)f[v++]=c[d++]}return new Dn(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ii,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=e(l,n);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let u=0,h=c.length;u<h;u++){const f=c[u],d=e(f,n);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const d=c[h];u.push(d.toJSON(e.data))}u.length>0&&(i[l]=u,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],h=r[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const nd=new at,Or=new so,Io=new Di,id=new z,Is=new z,Us=new z,Ns=new z,bc=new z,Uo=new z,No=new We,Oo=new We,Fo=new We,rd=new z,sd=new z,ad=new z,ko=new z,Bo=new z;class vn extends Gt{constructor(e=new Ii,t=new Wr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(r&&o){Uo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=o[l],h=r[l];u!==0&&(bc.fromBufferAttribute(h,e),a?Uo.addScaledVector(bc,u):Uo.addScaledVector(bc.sub(t),u))}t.add(Uo)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Io.copy(n.boundingSphere),Io.applyMatrix4(r),Or.copy(e.ray).recast(e.near),!(Io.containsPoint(Or.origin)===!1&&(Or.intersectSphere(Io,id)===null||Or.origin.distanceToSquared(id)>(e.far-e.near)**2))&&(nd.copy(r).invert(),Or.copy(e.ray).applyMatrix4(nd),!(n.boundingBox!==null&&Or.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Or)))}_computeIntersections(e,t,n){let i;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let v=0,p=f.length;v<p;v++){const g=f[v],m=a[g.materialIndex],S=Math.max(g.start,d.start),y=Math.min(o.count,Math.min(g.start+g.count,d.start+d.count));for(let T=S,E=y;T<E;T+=3){const w=o.getX(T),R=o.getX(T+1),P=o.getX(T+2);i=zo(this,m,e,n,c,u,h,w,R,P),i&&(i.faceIndex=Math.floor(T/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{const v=Math.max(0,d.start),p=Math.min(o.count,d.start+d.count);for(let g=v,m=p;g<m;g+=3){const S=o.getX(g),y=o.getX(g+1),T=o.getX(g+2);i=zo(this,a,e,n,c,u,h,S,y,T),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let v=0,p=f.length;v<p;v++){const g=f[v],m=a[g.materialIndex],S=Math.max(g.start,d.start),y=Math.min(l.count,Math.min(g.start+g.count,d.start+d.count));for(let T=S,E=y;T<E;T+=3){const w=T,R=T+1,P=T+2;i=zo(this,m,e,n,c,u,h,w,R,P),i&&(i.faceIndex=Math.floor(T/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{const v=Math.max(0,d.start),p=Math.min(l.count,d.start+d.count);for(let g=v,m=p;g<m;g+=3){const S=g,y=g+1,T=g+2;i=zo(this,a,e,n,c,u,h,S,y,T),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}}}function Cy(s,e,t,n,i,r,a,o){let l;if(e.side===On?l=n.intersectTriangle(a,r,i,!0,o):l=n.intersectTriangle(i,r,a,e.side===er,o),l===null)return null;Bo.copy(o),Bo.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(Bo);return c<t.near||c>t.far?null:{distance:c,point:Bo.clone(),object:s}}function zo(s,e,t,n,i,r,a,o,l,c){s.getVertexPosition(o,Is),s.getVertexPosition(l,Us),s.getVertexPosition(c,Ns);const u=Cy(s,e,t,n,Is,Us,Ns,ko);if(u){i&&(No.fromBufferAttribute(i,o),Oo.fromBufferAttribute(i,l),Fo.fromBufferAttribute(i,c),u.uv=vi.getInterpolation(ko,Is,Us,Ns,No,Oo,Fo,new We)),r&&(No.fromBufferAttribute(r,o),Oo.fromBufferAttribute(r,l),Fo.fromBufferAttribute(r,c),u.uv1=vi.getInterpolation(ko,Is,Us,Ns,No,Oo,Fo,new We),u.uv2=u.uv1),a&&(rd.fromBufferAttribute(a,o),sd.fromBufferAttribute(a,l),ad.fromBufferAttribute(a,c),u.normal=vi.getInterpolation(ko,Is,Us,Ns,rd,sd,ad,new z),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new z,materialIndex:0};vi.getNormal(Is,Us,Ns,h.normal),u.face=h}return u}class ao extends Ii{constructor(e=1,t=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],u=[],h=[];let f=0,d=0;v("z","y","x",-1,-1,n,t,e,a,r,0),v("z","y","x",1,-1,n,t,-e,a,r,1),v("x","z","y",1,1,e,n,t,i,a,2),v("x","z","y",1,-1,e,n,-t,i,a,3),v("x","y","z",1,-1,e,t,n,i,r,4),v("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new Qi(c,3)),this.setAttribute("normal",new Qi(u,3)),this.setAttribute("uv",new Qi(h,2));function v(p,g,m,S,y,T,E,w,R,P,b){const D=T/R,$=E/P,ae=T/2,G=E/2,F=w/2,V=R+1,re=P+1;let K=0,ee=0;const oe=new z;for(let ue=0;ue<re;ue++){const Te=ue*$-G;for(let Z=0;Z<V;Z++){const fe=Z*D-ae;oe[p]=fe*S,oe[g]=Te*y,oe[m]=F,c.push(oe.x,oe.y,oe.z),oe[p]=0,oe[g]=0,oe[m]=w>0?1:-1,u.push(oe.x,oe.y,oe.z),h.push(Z/R),h.push(1-ue/P),K+=1}}for(let ue=0;ue<P;ue++)for(let Te=0;Te<R;Te++){const Z=f+Te+V*ue,fe=f+Te+V*(ue+1),le=f+(Te+1)+V*(ue+1),ye=f+(Te+1)+V*ue;l.push(Z,fe,ye),l.push(fe,le,ye),ee+=6}o.addGroup(d,ee,b),d+=ee,f+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ao(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ra(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Cn(s){const e={};for(let t=0;t<s.length;t++){const n=ra(s[t]);for(const i in n)e[i]=n[i]}return e}function Ly(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function am(s){return s.getRenderTarget()===null?s.outputColorSpace:Ci}const Py={clone:ra,merge:Cn};var Dy=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Iy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ts extends Mi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Dy,this.fragmentShader=Iy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ra(e.uniforms),this.uniformsGroups=Ly(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class om extends Gt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new at,this.projectionMatrix=new at,this.projectionMatrixInverse=new at,this.coordinateSystem=Ki}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Pn extends om{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ia*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(za*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ia*2*Math.atan(Math.tan(za*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(za*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Os=-90,Fs=1;class Uy extends Gt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null;const i=new Pn(Os,Fs,e,t);i.layers=this.layers,this.add(i);const r=new Pn(Os,Fs,e,t);r.layers=this.layers,this.add(r);const a=new Pn(Os,Fs,e,t);a.layers=this.layers,this.add(a);const o=new Pn(Os,Fs,e,t);o.layers=this.layers,this.add(o);const l=new Pn(Os,Fs,e,t);l.layers=this.layers,this.add(l);const c=new Pn(Os,Fs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===Ki)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===al)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[i,r,a,o,l,c]=this.children,u=e.getRenderTarget(),h=e.toneMapping,f=e.xr.enabled;e.toneMapping=Ji,e.xr.enabled=!1;const d=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,r),e.setRenderTarget(n,2),e.render(t,a),e.setRenderTarget(n,3),e.render(t,o),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=d,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(u),e.toneMapping=h,e.xr.enabled=f,n.texture.needsPMREMUpdate=!0}}class Ru extends xn{constructor(e,t,n,i,r,a,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Js,super(e,t,n,i,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ny extends es{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];t.encoding!==void 0&&(Ga("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Yr?Ve:jr),this.texture=new Ru(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Un}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new ao(5,5,5),r=new ts({name:"CubemapFromEquirect",uniforms:ra(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:On,blending:Mr});r.uniforms.tEquirect.value=t;const a=new vn(i,r),o=t.minFilter;return t.minFilter===Qr&&(t.minFilter=Un),new Uy(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(r)}}const Sc=new z,Oy=new z,Fy=new st;class zr{constructor(e=new z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Sc.subVectors(n,t).cross(Oy.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Sc),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Fy.getNormalMatrix(e),i=this.coplanarPoint(Sc).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Fr=new Di,Ho=new z;class Cu{constructor(e=new zr,t=new zr,n=new zr,i=new zr,r=new zr,a=new zr){this.planes=[e,t,n,i,r,a]}set(e,t,n,i,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Ki){const n=this.planes,i=e.elements,r=i[0],a=i[1],o=i[2],l=i[3],c=i[4],u=i[5],h=i[6],f=i[7],d=i[8],v=i[9],p=i[10],g=i[11],m=i[12],S=i[13],y=i[14],T=i[15];if(n[0].setComponents(l-r,f-c,g-d,T-m).normalize(),n[1].setComponents(l+r,f+c,g+d,T+m).normalize(),n[2].setComponents(l+a,f+u,g+v,T+S).normalize(),n[3].setComponents(l-a,f-u,g-v,T-S).normalize(),n[4].setComponents(l-o,f-h,g-p,T-y).normalize(),t===Ki)n[5].setComponents(l+o,f+h,g+p,T+y).normalize();else if(t===al)n[5].setComponents(o,h,p,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Fr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Fr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Fr)}intersectsSprite(e){return Fr.center.set(0,0,0),Fr.radius=.7071067811865476,Fr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Fr)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Ho.x=i.normal.x>0?e.max.x:e.min.x,Ho.y=i.normal.y>0?e.max.y:e.min.y,Ho.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Ho)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function lm(){let s=null,e=!1,t=null,n=null;function i(r,a){t(r,a),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function ky(s,e){const t=e.isWebGL2,n=new WeakMap;function i(c,u){const h=c.array,f=c.usage,d=s.createBuffer();s.bindBuffer(u,d),s.bufferData(u,h,f),c.onUploadCallback();let v;if(h instanceof Float32Array)v=s.FLOAT;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)v=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else v=s.UNSIGNED_SHORT;else if(h instanceof Int16Array)v=s.SHORT;else if(h instanceof Uint32Array)v=s.UNSIGNED_INT;else if(h instanceof Int32Array)v=s.INT;else if(h instanceof Int8Array)v=s.BYTE;else if(h instanceof Uint8Array)v=s.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)v=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:d,type:v,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version}}function r(c,u,h){const f=u.array,d=u.updateRange;s.bindBuffer(h,c),d.count===-1?s.bufferSubData(h,0,f):(t?s.bufferSubData(h,d.offset*f.BYTES_PER_ELEMENT,f,d.offset,d.count):s.bufferSubData(h,d.offset*f.BYTES_PER_ELEMENT,f.subarray(d.offset,d.offset+d.count)),d.count=-1),u.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(s.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const f=n.get(c);(!f||f.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h===void 0?n.set(c,i(c,u)):h.version<c.version&&(r(h.buffer,c,u),h.version=c.version)}return{get:a,remove:o,update:l}}class Lu extends Ii{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,u=l+1,h=e/o,f=t/l,d=[],v=[],p=[],g=[];for(let m=0;m<u;m++){const S=m*f-a;for(let y=0;y<c;y++){const T=y*h-r;v.push(T,-S,0),p.push(0,0,1),g.push(y/o),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let S=0;S<o;S++){const y=S+c*m,T=S+c*(m+1),E=S+1+c*(m+1),w=S+1+c*m;d.push(y,T,w),d.push(T,E,w)}this.setIndex(d),this.setAttribute("position",new Qi(v,3)),this.setAttribute("normal",new Qi(p,3)),this.setAttribute("uv",new Qi(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Lu(e.width,e.height,e.widthSegments,e.heightSegments)}}var By=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,zy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Hy=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Gy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Vy=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Wy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Xy="vec3 transformed = vec3( position );",qy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,$y=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Yy=`#ifdef USE_IRIDESCENCE
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
#endif`,jy=`#ifdef USE_BUMPMAP
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
#endif`,Ky=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Zy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Jy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Qy=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,eM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,tM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,nM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,iM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,rM=`#define PI 3.141592653589793
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
} // validated`,sM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,aM=`vec3 transformedNormal = objectNormal;
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
#endif`,oM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,lM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,cM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,uM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,hM="gl_FragColor = linearToOutputTexel( gl_FragColor );",fM=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,dM=`#ifdef USE_ENVMAP
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
#endif`,pM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,mM=`#ifdef USE_ENVMAP
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
#endif`,gM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,_M=`#ifdef USE_ENVMAP
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
#endif`,vM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,xM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,yM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,MM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,bM=`#ifdef USE_GRADIENTMAP
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
}`,SM=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,EM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,TM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,wM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,AM=`uniform bool receiveShadow;
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
#endif`,RM=`#ifdef USE_ENVMAP
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
#endif`,CM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,LM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,PM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,DM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,IM=`PhysicalMaterial material;
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
#endif`,UM=`struct PhysicalMaterial {
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
}`,NM=`
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
#endif`,OM=`#if defined( RE_IndirectDiffuse )
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
#endif`,FM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,kM=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,BM=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zM=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,HM=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,GM=`#ifdef USE_MAP
	diffuseColor *= texture2D( map, vMapUv );
#endif`,VM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,WM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,XM=`#if defined( USE_POINTS_UV )
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
#endif`,qM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,$M=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,YM=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,jM=`#ifdef USE_MORPHNORMALS
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
#endif`,KM=`#ifdef USE_MORPHTARGETS
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
#endif`,ZM=`#ifdef USE_MORPHTARGETS
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
#endif`,JM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,QM=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,eb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,nb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ib=`#ifdef USE_NORMALMAP
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
#endif`,rb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,sb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ab=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ob=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,lb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,cb=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,ub=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,hb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,fb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,db=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,pb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,mb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,gb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,_b=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,vb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,xb=`float getShadowMask() {
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
}`,yb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Mb=`#ifdef USE_SKINNING
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
#endif`,bb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Sb=`#ifdef USE_SKINNING
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
#endif`,Eb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Tb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,wb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ab=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Rb=`#ifdef USE_TRANSMISSION
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
#endif`,Cb=`#ifdef USE_TRANSMISSION
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
#endif`,Lb=`#ifdef USE_UV
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
#endif`,Pb=`#ifdef USE_UV
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
#endif`,Db=`#ifdef USE_UV
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
#endif`,Ib=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ub=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Nb=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Ob=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Fb=`#ifdef ENVMAP_TYPE_CUBE
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
}`,kb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Bb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,zb=`#include <common>
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
}`,Hb=`#if DEPTH_PACKING == 3200
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
}`,Gb=`#define DISTANCE
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
}`,Vb=`#define DISTANCE
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
}`,Wb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Xb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,qb=`uniform float scale;
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
}`,$b=`uniform vec3 diffuse;
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
}`,Yb=`#include <common>
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
}`,jb=`uniform vec3 diffuse;
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
}`,Kb=`#define LAMBERT
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
}`,Zb=`#define LAMBERT
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
}`,Jb=`#define MATCAP
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
}`,Qb=`#define MATCAP
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
}`,eS=`#define NORMAL
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
}`,tS=`#define NORMAL
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
}`,nS=`#define PHONG
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
}`,iS=`#define PHONG
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
}`,rS=`#define STANDARD
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
}`,sS=`#define STANDARD
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
}`,aS=`#define TOON
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
}`,oS=`#define TOON
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
}`,lS=`uniform float size;
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
}`,cS=`uniform vec3 diffuse;
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
}`,uS=`#include <common>
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
}`,hS=`uniform vec3 color;
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
}`,fS=`uniform float rotation;
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
}`,dS=`uniform vec3 diffuse;
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
}`,it={alphamap_fragment:By,alphamap_pars_fragment:zy,alphatest_fragment:Hy,alphatest_pars_fragment:Gy,aomap_fragment:Vy,aomap_pars_fragment:Wy,begin_vertex:Xy,beginnormal_vertex:qy,bsdfs:$y,iridescence_fragment:Yy,bumpmap_pars_fragment:jy,clipping_planes_fragment:Ky,clipping_planes_pars_fragment:Zy,clipping_planes_pars_vertex:Jy,clipping_planes_vertex:Qy,color_fragment:eM,color_pars_fragment:tM,color_pars_vertex:nM,color_vertex:iM,common:rM,cube_uv_reflection_fragment:sM,defaultnormal_vertex:aM,displacementmap_pars_vertex:oM,displacementmap_vertex:lM,emissivemap_fragment:cM,emissivemap_pars_fragment:uM,encodings_fragment:hM,encodings_pars_fragment:fM,envmap_fragment:dM,envmap_common_pars_fragment:pM,envmap_pars_fragment:mM,envmap_pars_vertex:gM,envmap_physical_pars_fragment:RM,envmap_vertex:_M,fog_vertex:vM,fog_pars_vertex:xM,fog_fragment:yM,fog_pars_fragment:MM,gradientmap_pars_fragment:bM,lightmap_fragment:SM,lightmap_pars_fragment:EM,lights_lambert_fragment:TM,lights_lambert_pars_fragment:wM,lights_pars_begin:AM,lights_toon_fragment:CM,lights_toon_pars_fragment:LM,lights_phong_fragment:PM,lights_phong_pars_fragment:DM,lights_physical_fragment:IM,lights_physical_pars_fragment:UM,lights_fragment_begin:NM,lights_fragment_maps:OM,lights_fragment_end:FM,logdepthbuf_fragment:kM,logdepthbuf_pars_fragment:BM,logdepthbuf_pars_vertex:zM,logdepthbuf_vertex:HM,map_fragment:GM,map_pars_fragment:VM,map_particle_fragment:WM,map_particle_pars_fragment:XM,metalnessmap_fragment:qM,metalnessmap_pars_fragment:$M,morphcolor_vertex:YM,morphnormal_vertex:jM,morphtarget_pars_vertex:KM,morphtarget_vertex:ZM,normal_fragment_begin:JM,normal_fragment_maps:QM,normal_pars_fragment:eb,normal_pars_vertex:tb,normal_vertex:nb,normalmap_pars_fragment:ib,clearcoat_normal_fragment_begin:rb,clearcoat_normal_fragment_maps:sb,clearcoat_pars_fragment:ab,iridescence_pars_fragment:ob,output_fragment:lb,packing:cb,premultiplied_alpha_fragment:ub,project_vertex:hb,dithering_fragment:fb,dithering_pars_fragment:db,roughnessmap_fragment:pb,roughnessmap_pars_fragment:mb,shadowmap_pars_fragment:gb,shadowmap_pars_vertex:_b,shadowmap_vertex:vb,shadowmask_pars_fragment:xb,skinbase_vertex:yb,skinning_pars_vertex:Mb,skinning_vertex:bb,skinnormal_vertex:Sb,specularmap_fragment:Eb,specularmap_pars_fragment:Tb,tonemapping_fragment:wb,tonemapping_pars_fragment:Ab,transmission_fragment:Rb,transmission_pars_fragment:Cb,uv_pars_fragment:Lb,uv_pars_vertex:Pb,uv_vertex:Db,worldpos_vertex:Ib,background_vert:Ub,background_frag:Nb,backgroundCube_vert:Ob,backgroundCube_frag:Fb,cube_vert:kb,cube_frag:Bb,depth_vert:zb,depth_frag:Hb,distanceRGBA_vert:Gb,distanceRGBA_frag:Vb,equirect_vert:Wb,equirect_frag:Xb,linedashed_vert:qb,linedashed_frag:$b,meshbasic_vert:Yb,meshbasic_frag:jb,meshlambert_vert:Kb,meshlambert_frag:Zb,meshmatcap_vert:Jb,meshmatcap_frag:Qb,meshnormal_vert:eS,meshnormal_frag:tS,meshphong_vert:nS,meshphong_frag:iS,meshphysical_vert:rS,meshphysical_frag:sS,meshtoon_vert:aS,meshtoon_frag:oS,points_vert:lS,points_frag:cS,shadow_vert:uS,shadow_frag:hS,sprite_vert:fS,sprite_frag:dS},xe={common:{diffuse:{value:new Qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new st}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new st}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new st}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new st},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new st},normalScale:{value:new We(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new st},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new st}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new st}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new st}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0},uvTransform:{value:new st}},sprite:{diffuse:{value:new Qe(16777215)},opacity:{value:1},center:{value:new We(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}}},Ei={basic:{uniforms:Cn([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.fog]),vertexShader:it.meshbasic_vert,fragmentShader:it.meshbasic_frag},lambert:{uniforms:Cn([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new Qe(0)}}]),vertexShader:it.meshlambert_vert,fragmentShader:it.meshlambert_frag},phong:{uniforms:Cn([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new Qe(0)},specular:{value:new Qe(1118481)},shininess:{value:30}}]),vertexShader:it.meshphong_vert,fragmentShader:it.meshphong_frag},standard:{uniforms:Cn([xe.common,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.roughnessmap,xe.metalnessmap,xe.fog,xe.lights,{emissive:{value:new Qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:it.meshphysical_vert,fragmentShader:it.meshphysical_frag},toon:{uniforms:Cn([xe.common,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.gradientmap,xe.fog,xe.lights,{emissive:{value:new Qe(0)}}]),vertexShader:it.meshtoon_vert,fragmentShader:it.meshtoon_frag},matcap:{uniforms:Cn([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,{matcap:{value:null}}]),vertexShader:it.meshmatcap_vert,fragmentShader:it.meshmatcap_frag},points:{uniforms:Cn([xe.points,xe.fog]),vertexShader:it.points_vert,fragmentShader:it.points_frag},dashed:{uniforms:Cn([xe.common,xe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:it.linedashed_vert,fragmentShader:it.linedashed_frag},depth:{uniforms:Cn([xe.common,xe.displacementmap]),vertexShader:it.depth_vert,fragmentShader:it.depth_frag},normal:{uniforms:Cn([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,{opacity:{value:1}}]),vertexShader:it.meshnormal_vert,fragmentShader:it.meshnormal_frag},sprite:{uniforms:Cn([xe.sprite,xe.fog]),vertexShader:it.sprite_vert,fragmentShader:it.sprite_frag},background:{uniforms:{uvTransform:{value:new st},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:it.background_vert,fragmentShader:it.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:it.backgroundCube_vert,fragmentShader:it.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:it.cube_vert,fragmentShader:it.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:it.equirect_vert,fragmentShader:it.equirect_frag},distanceRGBA:{uniforms:Cn([xe.common,xe.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:it.distanceRGBA_vert,fragmentShader:it.distanceRGBA_frag},shadow:{uniforms:Cn([xe.lights,xe.fog,{color:{value:new Qe(0)},opacity:{value:1}}]),vertexShader:it.shadow_vert,fragmentShader:it.shadow_frag}};Ei.physical={uniforms:Cn([Ei.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new st},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new st},clearcoatNormalScale:{value:new We(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new st},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new st},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new st},sheen:{value:0},sheenColor:{value:new Qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new st},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new st},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new st},transmissionSamplerSize:{value:new We},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new st},attenuationDistance:{value:0},attenuationColor:{value:new Qe(0)},specularColor:{value:new Qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new st},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new st},anisotropyVector:{value:new We},anisotropyMap:{value:null},anisotropyMapTransform:{value:new st}}]),vertexShader:it.meshphysical_vert,fragmentShader:it.meshphysical_frag};const Go={r:0,b:0,g:0};function pS(s,e,t,n,i,r,a){const o=new Qe(0);let l=r===!0?0:1,c,u,h=null,f=0,d=null;function v(g,m){let S=!1,y=m.isScene===!0?m.background:null;switch(y&&y.isTexture&&(y=(m.backgroundBlurriness>0?t:e).get(y)),y===null?p(o,l):y&&y.isColor&&(p(y,1),S=!0),s.xr.getEnvironmentBlendMode()){case"opaque":S=!0;break;case"additive":n.buffers.color.setClear(0,0,0,1,a),S=!0;break;case"alpha-blend":n.buffers.color.setClear(0,0,0,0,a),S=!0;break}(s.autoClear||S)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),y&&(y.isCubeTexture||y.mapping===vl)?(u===void 0&&(u=new vn(new ao(1,1,1),new ts({name:"BackgroundCubeMaterial",uniforms:ra(Ei.backgroundCube.uniforms),vertexShader:Ei.backgroundCube.vertexShader,fragmentShader:Ei.backgroundCube.fragmentShader,side:On,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(w,R,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=y,u.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=m.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,u.material.toneMapped=y.colorSpace!==Ve,(h!==y||f!==y.version||d!==s.toneMapping)&&(u.material.needsUpdate=!0,h=y,f=y.version,d=s.toneMapping),u.layers.enableAll(),g.unshift(u,u.geometry,u.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new vn(new Lu(2,2),new ts({name:"BackgroundMaterial",uniforms:ra(Ei.background.uniforms),vertexShader:Ei.background.vertexShader,fragmentShader:Ei.background.fragmentShader,side:er,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,c.material.toneMapped=y.colorSpace!==Ve,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||f!==y.version||d!==s.toneMapping)&&(c.material.needsUpdate=!0,h=y,f=y.version,d=s.toneMapping),c.layers.enableAll(),g.unshift(c,c.geometry,c.material,0,0,null))}function p(g,m){g.getRGB(Go,am(s)),n.buffers.color.setClear(Go.r,Go.g,Go.b,m,a)}return{getClearColor:function(){return o},setClearColor:function(g,m=1){o.set(g),l=m,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(g){l=g,p(o,l)},render:v}}function mS(s,e,t,n){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,o={},l=g(null);let c=l,u=!1;function h(F,V,re,K,ee){let oe=!1;if(a){const ue=p(K,re,V);c!==ue&&(c=ue,d(c.object)),oe=m(F,K,re,ee),oe&&S(F,K,re,ee)}else{const ue=V.wireframe===!0;(c.geometry!==K.id||c.program!==re.id||c.wireframe!==ue)&&(c.geometry=K.id,c.program=re.id,c.wireframe=ue,oe=!0)}ee!==null&&t.update(ee,s.ELEMENT_ARRAY_BUFFER),(oe||u)&&(u=!1,P(F,V,re,K),ee!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(ee).buffer))}function f(){return n.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function d(F){return n.isWebGL2?s.bindVertexArray(F):r.bindVertexArrayOES(F)}function v(F){return n.isWebGL2?s.deleteVertexArray(F):r.deleteVertexArrayOES(F)}function p(F,V,re){const K=re.wireframe===!0;let ee=o[F.id];ee===void 0&&(ee={},o[F.id]=ee);let oe=ee[V.id];oe===void 0&&(oe={},ee[V.id]=oe);let ue=oe[K];return ue===void 0&&(ue=g(f()),oe[K]=ue),ue}function g(F){const V=[],re=[],K=[];for(let ee=0;ee<i;ee++)V[ee]=0,re[ee]=0,K[ee]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:re,attributeDivisors:K,object:F,attributes:{},index:null}}function m(F,V,re,K){const ee=c.attributes,oe=V.attributes;let ue=0;const Te=re.getAttributes();for(const Z in Te)if(Te[Z].location>=0){const le=ee[Z];let ye=oe[Z];if(ye===void 0&&(Z==="instanceMatrix"&&F.instanceMatrix&&(ye=F.instanceMatrix),Z==="instanceColor"&&F.instanceColor&&(ye=F.instanceColor)),le===void 0||le.attribute!==ye||ye&&le.data!==ye.data)return!0;ue++}return c.attributesNum!==ue||c.index!==K}function S(F,V,re,K){const ee={},oe=V.attributes;let ue=0;const Te=re.getAttributes();for(const Z in Te)if(Te[Z].location>=0){let le=oe[Z];le===void 0&&(Z==="instanceMatrix"&&F.instanceMatrix&&(le=F.instanceMatrix),Z==="instanceColor"&&F.instanceColor&&(le=F.instanceColor));const ye={};ye.attribute=le,le&&le.data&&(ye.data=le.data),ee[Z]=ye,ue++}c.attributes=ee,c.attributesNum=ue,c.index=K}function y(){const F=c.newAttributes;for(let V=0,re=F.length;V<re;V++)F[V]=0}function T(F){E(F,0)}function E(F,V){const re=c.newAttributes,K=c.enabledAttributes,ee=c.attributeDivisors;re[F]=1,K[F]===0&&(s.enableVertexAttribArray(F),K[F]=1),ee[F]!==V&&((n.isWebGL2?s:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](F,V),ee[F]=V)}function w(){const F=c.newAttributes,V=c.enabledAttributes;for(let re=0,K=V.length;re<K;re++)V[re]!==F[re]&&(s.disableVertexAttribArray(re),V[re]=0)}function R(F,V,re,K,ee,oe,ue){ue===!0?s.vertexAttribIPointer(F,V,re,ee,oe):s.vertexAttribPointer(F,V,re,K,ee,oe)}function P(F,V,re,K){if(n.isWebGL2===!1&&(F.isInstancedMesh||K.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;y();const ee=K.attributes,oe=re.getAttributes(),ue=V.defaultAttributeValues;for(const Te in oe){const Z=oe[Te];if(Z.location>=0){let fe=ee[Te];if(fe===void 0&&(Te==="instanceMatrix"&&F.instanceMatrix&&(fe=F.instanceMatrix),Te==="instanceColor"&&F.instanceColor&&(fe=F.instanceColor)),fe!==void 0){const le=fe.normalized,ye=fe.itemSize,we=t.get(fe);if(we===void 0)continue;const Ne=we.buffer,Ke=we.type,Be=we.bytesPerElement,kt=n.isWebGL2===!0&&(Ke===s.INT||Ke===s.UNSIGNED_INT||fe.gpuType===Gp);if(fe.isInterleavedBufferAttribute){const et=fe.data,Y=et.stride,qt=fe.offset;if(et.isInstancedInterleavedBuffer){for(let Ue=0;Ue<Z.locationSize;Ue++)E(Z.location+Ue,et.meshPerAttribute);F.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let Ue=0;Ue<Z.locationSize;Ue++)T(Z.location+Ue);s.bindBuffer(s.ARRAY_BUFFER,Ne);for(let Ue=0;Ue<Z.locationSize;Ue++)R(Z.location+Ue,ye/Z.locationSize,Ke,le,Y*Be,(qt+ye/Z.locationSize*Ue)*Be,kt)}else{if(fe.isInstancedBufferAttribute){for(let et=0;et<Z.locationSize;et++)E(Z.location+et,fe.meshPerAttribute);F.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let et=0;et<Z.locationSize;et++)T(Z.location+et);s.bindBuffer(s.ARRAY_BUFFER,Ne);for(let et=0;et<Z.locationSize;et++)R(Z.location+et,ye/Z.locationSize,Ke,le,ye*Be,ye/Z.locationSize*et*Be,kt)}}else if(ue!==void 0){const le=ue[Te];if(le!==void 0)switch(le.length){case 2:s.vertexAttrib2fv(Z.location,le);break;case 3:s.vertexAttrib3fv(Z.location,le);break;case 4:s.vertexAttrib4fv(Z.location,le);break;default:s.vertexAttrib1fv(Z.location,le)}}}}w()}function b(){ae();for(const F in o){const V=o[F];for(const re in V){const K=V[re];for(const ee in K)v(K[ee].object),delete K[ee];delete V[re]}delete o[F]}}function D(F){if(o[F.id]===void 0)return;const V=o[F.id];for(const re in V){const K=V[re];for(const ee in K)v(K[ee].object),delete K[ee];delete V[re]}delete o[F.id]}function $(F){for(const V in o){const re=o[V];if(re[F.id]===void 0)continue;const K=re[F.id];for(const ee in K)v(K[ee].object),delete K[ee];delete re[F.id]}}function ae(){G(),u=!0,c!==l&&(c=l,d(c.object))}function G(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:ae,resetDefaultState:G,dispose:b,releaseStatesOfGeometry:D,releaseStatesOfProgram:$,initAttributes:y,enableAttribute:T,disableUnusedAttributes:w}}function gS(s,e,t,n){const i=n.isWebGL2;let r;function a(c){r=c}function o(c,u){s.drawArrays(r,c,u),t.update(u,r,1)}function l(c,u,h){if(h===0)return;let f,d;if(i)f=s,d="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),d="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[d](r,c,u,h),t.update(u,r,h)}this.setMode=a,this.render=o,this.renderInstances=l}function _S(s,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");n=s.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(R){if(R==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&s.constructor.name==="WebGL2RenderingContext";let o=t.precision!==void 0?t.precision:"highp";const l=r(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),f=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),d=s.getParameter(s.MAX_TEXTURE_SIZE),v=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),g=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),m=s.getParameter(s.MAX_VARYING_VECTORS),S=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),y=f>0,T=a||e.has("OES_texture_float"),E=y&&T,w=a?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:f,maxTextureSize:d,maxCubemapSize:v,maxAttributes:p,maxVertexUniforms:g,maxVaryings:m,maxFragmentUniforms:S,vertexTextures:y,floatFragmentTextures:T,floatVertexTextures:E,maxSamples:w}}function vS(s){const e=this;let t=null,n=0,i=!1,r=!1;const a=new zr,o=new st,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const d=h.length!==0||f||n!==0||i;return i=f,n=h.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,d){const v=h.clippingPlanes,p=h.clipIntersection,g=h.clipShadows,m=s.get(h);if(!i||v===null||v.length===0||r&&!g)r?u(null):c();else{const S=r?0:n,y=S*4;let T=m.clippingState||null;l.value=T,T=u(v,f,y,d);for(let E=0;E!==y;++E)T[E]=t[E];m.clippingState=T,this.numIntersection=p?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,d,v){const p=h!==null?h.length:0;let g=null;if(p!==0){if(g=l.value,v!==!0||g===null){const m=d+p*4,S=f.matrixWorldInverse;o.getNormalMatrix(S),(g===null||g.length<m)&&(g=new Float32Array(m));for(let y=0,T=d;y!==p;++y,T+=4)a.copy(h[y]).applyMatrix4(S,o),a.normal.toArray(g,T),g[T+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=p,e.numIntersection=0,g}}function xS(s){let e=new WeakMap;function t(a,o){return o===$c?a.mapping=Js:o===Yc&&(a.mapping=Qs),a}function n(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const o=a.mapping;if(o===$c||o===Yc)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Ny(l.height/2);return c.fromEquirectangularTexture(s,a),e.set(a,c),a.addEventListener("dispose",i),t(c.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class Pu extends om{constructor(e=-1,t=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Vs=4,od=[.125,.215,.35,.446,.526,.582],Vr=20,Ec=new Pu,ld=new Qe;let Tc=null;const Hr=(1+Math.sqrt(5))/2,ks=1/Hr,cd=[new z(1,1,1),new z(-1,1,1),new z(1,1,-1),new z(-1,1,-1),new z(0,Hr,ks),new z(0,Hr,-ks),new z(ks,0,Hr),new z(-ks,0,Hr),new z(Hr,ks,0),new z(-Hr,ks,0)];class ud{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Tc=this._renderer.getRenderTarget(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=dd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=fd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Tc),e.scissorTest=!1,Vo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Js||e.mapping===Qs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Tc=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Un,minFilter:Un,generateMipmaps:!1,type:$a,format:si,colorSpace:Ci,depthBuffer:!1},i=hd(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=hd(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=yS(r)),this._blurMaterial=MS(r,e,t)}return i}_compileMaterial(e){const t=new vn(this._lodPlanes[0],e);this._renderer.compile(t,Ec)}_sceneToCubeUV(e,t,n,i){const o=new Pn(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(ld),u.toneMapping=Ji,u.autoClear=!1;const d=new Wr({name:"PMREM.Background",side:On,depthWrite:!1,depthTest:!1}),v=new vn(new ao,d);let p=!1;const g=e.background;g?g.isColor&&(d.color.copy(g),e.background=null,p=!0):(d.color.copy(ld),p=!0);for(let m=0;m<6;m++){const S=m%3;S===0?(o.up.set(0,l[m],0),o.lookAt(c[m],0,0)):S===1?(o.up.set(0,0,l[m]),o.lookAt(0,c[m],0)):(o.up.set(0,l[m],0),o.lookAt(0,0,c[m]));const y=this._cubeSize;Vo(i,S*y,m>2?y:0,y,y),u.setRenderTarget(i),p&&u.render(v,o),u.render(e,o)}v.geometry.dispose(),v.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=g}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Js||e.mapping===Qs;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=dd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=fd());const r=i?this._cubemapMaterial:this._equirectMaterial,a=new vn(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;Vo(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Ec)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),a=cd[(i-1)%cd.length];this._blur(e,i-1,i,r,a)}t.autoClear=n}_blur(e,t,n,i,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",r),this._halfBlur(a,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new vn(this._lodPlanes[i],c),f=c.uniforms,d=this._sizeLods[n]-1,v=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Vr-1),p=r/v,g=isFinite(r)?1+Math.floor(u*p):Vr;g>Vr&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Vr}`);const m=[];let S=0;for(let R=0;R<Vr;++R){const P=R/p,b=Math.exp(-P*P/2);m.push(b),R===0?S+=b:R<g&&(S+=2*b)}for(let R=0;R<m.length;R++)m[R]=m[R]/S;f.envMap.value=e.texture,f.samples.value=g,f.weights.value=m,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:y}=this;f.dTheta.value=v,f.mipInt.value=y-n;const T=this._sizeLods[i],E=3*T*(i>y-Vs?i-y+Vs:0),w=4*(this._cubeSize-T);Vo(t,E,w,3*T,2*T),l.setRenderTarget(t),l.render(h,Ec)}}function yS(s){const e=[],t=[],n=[];let i=s;const r=s-Vs+1+od.length;for(let a=0;a<r;a++){const o=Math.pow(2,i);t.push(o);let l=1/o;a>s-Vs?l=od[a-s+Vs-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,v=6,p=3,g=2,m=1,S=new Float32Array(p*v*d),y=new Float32Array(g*v*d),T=new Float32Array(m*v*d);for(let w=0;w<d;w++){const R=w%3*2/3-1,P=w>2?0:-1,b=[R,P,0,R+2/3,P,0,R+2/3,P+1,0,R,P,0,R+2/3,P+1,0,R,P+1,0];S.set(b,p*v*w),y.set(f,g*v*w);const D=[w,w,w,w,w,w];T.set(D,m*v*w)}const E=new Ii;E.setAttribute("position",new Dn(S,p)),E.setAttribute("uv",new Dn(y,g)),E.setAttribute("faceIndex",new Dn(T,m)),e.push(E),i>Vs&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function hd(s,e,t){const n=new es(s,e,t);return n.texture.mapping=vl,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Vo(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function MS(s,e,t){const n=new Float32Array(Vr),i=new z(0,1,0);return new ts({name:"SphericalGaussianBlur",defines:{n:Vr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Du(),fragmentShader:`

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
		`,blending:Mr,depthTest:!1,depthWrite:!1})}function fd(){return new ts({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Du(),fragmentShader:`

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
		`,blending:Mr,depthTest:!1,depthWrite:!1})}function dd(){return new ts({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Du(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Mr,depthTest:!1,depthWrite:!1})}function Du(){return`

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
	`}function bS(s){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===$c||l===Yc,u=l===Js||l===Qs;if(c||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let h=e.get(o);return t===null&&(t=new ud(s)),h=c?t.fromEquirectangular(o,h):t.fromCubemap(o,h),e.set(o,h),h.texture}else{if(e.has(o))return e.get(o).texture;{const h=o.image;if(c&&h&&h.height>0||u&&h&&i(h)){t===null&&(t=new ud(s));const f=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,f),o.addEventListener("dispose",r),f.texture}else return null}}}return o}function i(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function SS(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function ES(s,e,t,n){const i={},r=new WeakMap;function a(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const v in f.attributes)e.remove(f.attributes[v]);for(const v in f.morphAttributes){const p=f.morphAttributes[v];for(let g=0,m=p.length;g<m;g++)e.remove(p[g])}f.removeEventListener("dispose",a),delete i[f.id];const d=r.get(f);d&&(e.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(h,f){return i[f.id]===!0||(f.addEventListener("dispose",a),i[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const v in f)e.update(f[v],s.ARRAY_BUFFER);const d=h.morphAttributes;for(const v in d){const p=d[v];for(let g=0,m=p.length;g<m;g++)e.update(p[g],s.ARRAY_BUFFER)}}function c(h){const f=[],d=h.index,v=h.attributes.position;let p=0;if(d!==null){const S=d.array;p=d.version;for(let y=0,T=S.length;y<T;y+=3){const E=S[y+0],w=S[y+1],R=S[y+2];f.push(E,w,w,R,R,E)}}else{const S=v.array;p=v.version;for(let y=0,T=S.length/3-1;y<T;y+=3){const E=y+0,w=y+1,R=y+2;f.push(E,w,w,R,R,E)}}const g=new(Qp(f)?sm:rm)(f,1);g.version=p;const m=r.get(h);m&&e.remove(m),r.set(h,g)}function u(h){const f=r.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&c(h)}else c(h);return r.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function TS(s,e,t,n){const i=n.isWebGL2;let r;function a(f){r=f}let o,l;function c(f){o=f.type,l=f.bytesPerElement}function u(f,d){s.drawElements(r,d,o,f*l),t.update(d,r,1)}function h(f,d,v){if(v===0)return;let p,g;if(i)p=s,g="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),g="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[g](r,d,o,f*l,v),t.update(d,r,v)}this.setMode=a,this.setIndex=c,this.render=u,this.renderInstances=h}function wS(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case s.TRIANGLES:t.triangles+=o*(r/3);break;case s.LINES:t.lines+=o*(r/2);break;case s.LINE_STRIP:t.lines+=o*(r-1);break;case s.LINE_LOOP:t.lines+=o*r;break;case s.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function AS(s,e){return s[0]-e[0]}function RS(s,e){return Math.abs(e[1])-Math.abs(s[1])}function CS(s,e,t){const n={},i=new Float32Array(8),r=new WeakMap,a=new Ct,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,u,h){const f=c.morphTargetInfluences;if(e.isWebGL2===!0){const d=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,v=d!==void 0?d.length:0;let p=r.get(u);if(p===void 0||p.count!==v){let F=function(){ae.dispose(),r.delete(u),u.removeEventListener("dispose",F)};p!==void 0&&p.texture.dispose();const S=u.morphAttributes.position!==void 0,y=u.morphAttributes.normal!==void 0,T=u.morphAttributes.color!==void 0,E=u.morphAttributes.position||[],w=u.morphAttributes.normal||[],R=u.morphAttributes.color||[];let P=0;S===!0&&(P=1),y===!0&&(P=2),T===!0&&(P=3);let b=u.attributes.position.count*P,D=1;b>e.maxTextureSize&&(D=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const $=new Float32Array(b*D*4*v),ae=new nm($,b,D,v);ae.type=ji,ae.needsUpdate=!0;const G=P*4;for(let V=0;V<v;V++){const re=E[V],K=w[V],ee=R[V],oe=b*D*4*V;for(let ue=0;ue<re.count;ue++){const Te=ue*G;S===!0&&(a.fromBufferAttribute(re,ue),$[oe+Te+0]=a.x,$[oe+Te+1]=a.y,$[oe+Te+2]=a.z,$[oe+Te+3]=0),y===!0&&(a.fromBufferAttribute(K,ue),$[oe+Te+4]=a.x,$[oe+Te+5]=a.y,$[oe+Te+6]=a.z,$[oe+Te+7]=0),T===!0&&(a.fromBufferAttribute(ee,ue),$[oe+Te+8]=a.x,$[oe+Te+9]=a.y,$[oe+Te+10]=a.z,$[oe+Te+11]=ee.itemSize===4?a.w:1)}}p={count:v,texture:ae,size:new We(b,D)},r.set(u,p),u.addEventListener("dispose",F)}let g=0;for(let S=0;S<f.length;S++)g+=f[S];const m=u.morphTargetsRelative?1:1-g;h.getUniforms().setValue(s,"morphTargetBaseInfluence",m),h.getUniforms().setValue(s,"morphTargetInfluences",f),h.getUniforms().setValue(s,"morphTargetsTexture",p.texture,t),h.getUniforms().setValue(s,"morphTargetsTextureSize",p.size)}else{const d=f===void 0?0:f.length;let v=n[u.id];if(v===void 0||v.length!==d){v=[];for(let y=0;y<d;y++)v[y]=[y,0];n[u.id]=v}for(let y=0;y<d;y++){const T=v[y];T[0]=y,T[1]=f[y]}v.sort(RS);for(let y=0;y<8;y++)y<d&&v[y][1]?(o[y][0]=v[y][0],o[y][1]=v[y][1]):(o[y][0]=Number.MAX_SAFE_INTEGER,o[y][1]=0);o.sort(AS);const p=u.morphAttributes.position,g=u.morphAttributes.normal;let m=0;for(let y=0;y<8;y++){const T=o[y],E=T[0],w=T[1];E!==Number.MAX_SAFE_INTEGER&&w?(p&&u.getAttribute("morphTarget"+y)!==p[E]&&u.setAttribute("morphTarget"+y,p[E]),g&&u.getAttribute("morphNormal"+y)!==g[E]&&u.setAttribute("morphNormal"+y,g[E]),i[y]=w,m+=w):(p&&u.hasAttribute("morphTarget"+y)===!0&&u.deleteAttribute("morphTarget"+y),g&&u.hasAttribute("morphNormal"+y)===!0&&u.deleteAttribute("morphNormal"+y),i[y]=0)}const S=u.morphTargetsRelative?1:1-m;h.getUniforms().setValue(s,"morphTargetBaseInfluence",S),h.getUniforms().setValue(s,"morphTargetInfluences",i)}}return{update:l}}function LS(s,e,t,n){let i=new WeakMap;function r(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);return i.get(h)!==c&&(e.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER)),h}function a(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}const cm=new xn,um=new nm,hm=new xy,fm=new Ru,pd=[],md=[],gd=new Float32Array(16),_d=new Float32Array(9),vd=new Float32Array(4);function da(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=pd[i];if(r===void 0&&(r=new Float32Array(i),pd[i]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(r,o)}return r}function en(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function tn(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function yl(s,e){let t=md[e];t===void 0&&(t=new Int32Array(e),md[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function PS(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function DS(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;s.uniform2fv(this.addr,e),tn(t,e)}}function IS(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(en(t,e))return;s.uniform3fv(this.addr,e),tn(t,e)}}function US(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;s.uniform4fv(this.addr,e),tn(t,e)}}function NS(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(en(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),tn(t,e)}else{if(en(t,n))return;vd.set(n),s.uniformMatrix2fv(this.addr,!1,vd),tn(t,n)}}function OS(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(en(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),tn(t,e)}else{if(en(t,n))return;_d.set(n),s.uniformMatrix3fv(this.addr,!1,_d),tn(t,n)}}function FS(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(en(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),tn(t,e)}else{if(en(t,n))return;gd.set(n),s.uniformMatrix4fv(this.addr,!1,gd),tn(t,n)}}function kS(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function BS(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;s.uniform2iv(this.addr,e),tn(t,e)}}function zS(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(en(t,e))return;s.uniform3iv(this.addr,e),tn(t,e)}}function HS(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;s.uniform4iv(this.addr,e),tn(t,e)}}function GS(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function VS(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;s.uniform2uiv(this.addr,e),tn(t,e)}}function WS(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(en(t,e))return;s.uniform3uiv(this.addr,e),tn(t,e)}}function XS(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;s.uniform4uiv(this.addr,e),tn(t,e)}}function qS(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||cm,i)}function $S(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||hm,i)}function YS(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||fm,i)}function jS(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||um,i)}function KS(s){switch(s){case 5126:return PS;case 35664:return DS;case 35665:return IS;case 35666:return US;case 35674:return NS;case 35675:return OS;case 35676:return FS;case 5124:case 35670:return kS;case 35667:case 35671:return BS;case 35668:case 35672:return zS;case 35669:case 35673:return HS;case 5125:return GS;case 36294:return VS;case 36295:return WS;case 36296:return XS;case 35678:case 36198:case 36298:case 36306:case 35682:return qS;case 35679:case 36299:case 36307:return $S;case 35680:case 36300:case 36308:case 36293:return YS;case 36289:case 36303:case 36311:case 36292:return jS}}function ZS(s,e){s.uniform1fv(this.addr,e)}function JS(s,e){const t=da(e,this.size,2);s.uniform2fv(this.addr,t)}function QS(s,e){const t=da(e,this.size,3);s.uniform3fv(this.addr,t)}function eE(s,e){const t=da(e,this.size,4);s.uniform4fv(this.addr,t)}function tE(s,e){const t=da(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function nE(s,e){const t=da(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function iE(s,e){const t=da(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function rE(s,e){s.uniform1iv(this.addr,e)}function sE(s,e){s.uniform2iv(this.addr,e)}function aE(s,e){s.uniform3iv(this.addr,e)}function oE(s,e){s.uniform4iv(this.addr,e)}function lE(s,e){s.uniform1uiv(this.addr,e)}function cE(s,e){s.uniform2uiv(this.addr,e)}function uE(s,e){s.uniform3uiv(this.addr,e)}function hE(s,e){s.uniform4uiv(this.addr,e)}function fE(s,e,t){const n=this.cache,i=e.length,r=yl(t,i);en(n,r)||(s.uniform1iv(this.addr,r),tn(n,r));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||cm,r[a])}function dE(s,e,t){const n=this.cache,i=e.length,r=yl(t,i);en(n,r)||(s.uniform1iv(this.addr,r),tn(n,r));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||hm,r[a])}function pE(s,e,t){const n=this.cache,i=e.length,r=yl(t,i);en(n,r)||(s.uniform1iv(this.addr,r),tn(n,r));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||fm,r[a])}function mE(s,e,t){const n=this.cache,i=e.length,r=yl(t,i);en(n,r)||(s.uniform1iv(this.addr,r),tn(n,r));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||um,r[a])}function gE(s){switch(s){case 5126:return ZS;case 35664:return JS;case 35665:return QS;case 35666:return eE;case 35674:return tE;case 35675:return nE;case 35676:return iE;case 5124:case 35670:return rE;case 35667:case 35671:return sE;case 35668:case 35672:return aE;case 35669:case 35673:return oE;case 5125:return lE;case 36294:return cE;case 36295:return uE;case 36296:return hE;case 35678:case 36198:case 36298:case 36306:case 35682:return fE;case 35679:case 36299:case 36307:return dE;case 35680:case 36300:case 36308:case 36293:return pE;case 36289:case 36303:case 36311:case 36292:return mE}}class _E{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=KS(t.type)}}class vE{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=gE(t.type)}}class xE{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const o=i[r];o.setValue(e,t[o.id],n)}}}const wc=/(\w+)(\])?(\[|\.)?/g;function xd(s,e){s.seq.push(e),s.map[e.id]=e}function yE(s,e,t){const n=s.name,i=n.length;for(wc.lastIndex=0;;){const r=wc.exec(n),a=wc.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){xd(t,c===void 0?new _E(o,s,e):new vE(o,s,e));break}else{let h=t.map[o];h===void 0&&(h=new xE(o),xd(t,h)),t=h}}}class Jo{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),a=e.getUniformLocation(t,r.name);yE(r,a,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function yd(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}let ME=0;function bE(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=i;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function SE(s){switch(s){case Ci:return["Linear","( value )"];case Ve:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),["Linear","( value )"]}}function Md(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const a=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+bE(s.getShaderSource(e),a)}else return i}function EE(s,e){const t=SE(e);return"vec4 "+s+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function TE(s,e){let t;switch(e){case Sx:t="Linear";break;case Ex:t="Reinhard";break;case Tx:t="OptimizedCineon";break;case wx:t="ACESFilmic";break;case Ax:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function wE(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Oa).join(`
`)}function AE(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function RE(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),a=r.name;let o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:s.getAttribLocation(e,a),locationSize:o}}return t}function Oa(s){return s!==""}function bd(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Sd(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const CE=/^[ \t]*#include +<([\w\d./]+)>/gm;function eu(s){return s.replace(CE,LE)}function LE(s,e){const t=it[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return eu(t)}const PE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ed(s){return s.replace(PE,DE)}function DE(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Td(s){let e="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function IE(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Op?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===tx?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===qi&&(e="SHADOWMAP_TYPE_VSM"),e}function UE(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Js:case Qs:e="ENVMAP_TYPE_CUBE";break;case vl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function NE(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Qs:e="ENVMAP_MODE_REFRACTION";break}return e}function OE(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Bp:e="ENVMAP_BLENDING_MULTIPLY";break;case Mx:e="ENVMAP_BLENDING_MIX";break;case bx:e="ENVMAP_BLENDING_ADD";break}return e}function FE(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function kE(s,e,t,n){const i=s.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=IE(t),c=UE(t),u=NE(t),h=OE(t),f=FE(t),d=t.isWebGL2?"":wE(t),v=AE(r),p=i.createProgram();let g,m,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Oa).join(`
`),g.length>0&&(g+=`
`),m=[d,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Oa).join(`
`),m.length>0&&(m+=`
`)):(g=[Td(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Oa).join(`
`),m=[d,Td(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ji?"#define TONE_MAPPING":"",t.toneMapping!==Ji?it.tonemapping_pars_fragment:"",t.toneMapping!==Ji?TE("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",it.encodings_pars_fragment,EE("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Oa).join(`
`)),a=eu(a),a=bd(a,t),a=Sd(a,t),o=eu(o),o=bd(o,t),o=Sd(o,t),a=Ed(a),o=Ed(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,g=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",t.glslVersion===Wf?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Wf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const y=S+g+a,T=S+m+o,E=yd(i,i.VERTEX_SHADER,y),w=yd(i,i.FRAGMENT_SHADER,T);if(i.attachShader(p,E),i.attachShader(p,w),t.index0AttributeName!==void 0?i.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(p,0,"position"),i.linkProgram(p),s.debug.checkShaderErrors){const b=i.getProgramInfoLog(p).trim(),D=i.getShaderInfoLog(E).trim(),$=i.getShaderInfoLog(w).trim();let ae=!0,G=!0;if(i.getProgramParameter(p,i.LINK_STATUS)===!1)if(ae=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,p,E,w);else{const F=Md(i,E,"vertex"),V=Md(i,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(p,i.VALIDATE_STATUS)+`

Program Info Log: `+b+`
`+F+`
`+V)}else b!==""?console.warn("THREE.WebGLProgram: Program Info Log:",b):(D===""||$==="")&&(G=!1);G&&(this.diagnostics={runnable:ae,programLog:b,vertexShader:{log:D,prefix:g},fragmentShader:{log:$,prefix:m}})}i.deleteShader(E),i.deleteShader(w);let R;this.getUniforms=function(){return R===void 0&&(R=new Jo(i,p)),R};let P;return this.getAttributes=function(){return P===void 0&&(P=RE(i,p)),P},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=ME++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=E,this.fragmentShader=w,this}let BE=0;class zE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new HE(e),t.set(e,n)),n}}class HE{constructor(e){this.id=BE++,this.code=e,this.usedTimes=0}}function GE(s,e,t,n,i,r,a){const o=new Au,l=new zE,c=[],u=i.isWebGL2,h=i.logarithmicDepthBuffer,f=i.vertexTextures;let d=i.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(b){return b===0?"uv":`uv${b}`}function g(b,D,$,ae,G){const F=ae.fog,V=G.geometry,re=b.isMeshStandardMaterial?ae.environment:null,K=(b.isMeshStandardMaterial?t:e).get(b.envMap||re),ee=K&&K.mapping===vl?K.image.height:null,oe=v[b.type];b.precision!==null&&(d=i.getMaxPrecision(b.precision),d!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",d,"instead."));const ue=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Te=ue!==void 0?ue.length:0;let Z=0;V.morphAttributes.position!==void 0&&(Z=1),V.morphAttributes.normal!==void 0&&(Z=2),V.morphAttributes.color!==void 0&&(Z=3);let fe,le,ye,we;if(oe){const Wt=Ei[oe];fe=Wt.vertexShader,le=Wt.fragmentShader}else fe=b.vertexShader,le=b.fragmentShader,l.update(b),ye=l.getVertexShaderID(b),we=l.getFragmentShaderID(b);const Ne=s.getRenderTarget(),Ke=G.isInstancedMesh===!0,Be=!!b.map,kt=!!b.matcap,et=!!K,Y=!!b.aoMap,qt=!!b.lightMap,Ue=!!b.bumpMap,$e=!!b.normalMap,Fe=!!b.displacementMap,vt=!!b.emissiveMap,Ye=!!b.metalnessMap,Xe=!!b.roughnessMap,ut=b.anisotropy>0,Vt=b.clearcoat>0,$t=b.iridescence>0,I=b.sheen>0,A=b.transmission>0,te=ut&&!!b.anisotropyMap,_e=Vt&&!!b.clearcoatMap,ge=Vt&&!!b.clearcoatNormalMap,U=Vt&&!!b.clearcoatRoughnessMap,ce=$t&&!!b.iridescenceMap,me=$t&&!!b.iridescenceThicknessMap,Q=I&&!!b.sheenColorMap,Pe=I&&!!b.sheenRoughnessMap,De=!!b.specularMap,Ie=!!b.specularColorMap,Re=!!b.specularIntensityMap,Ee=A&&!!b.transmissionMap,ze=A&&!!b.thicknessMap,xt=!!b.gradientMap,B=!!b.alphaMap,Me=b.alphaTest>0,J=!!b.extensions,ve=!!V.attributes.uv1,be=!!V.attributes.uv2,ht=!!V.attributes.uv3;return{isWebGL2:u,shaderID:oe,shaderType:b.type,shaderName:b.name,vertexShader:fe,fragmentShader:le,defines:b.defines,customVertexShaderID:ye,customFragmentShaderID:we,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:d,instancing:Ke,instancingColor:Ke&&G.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:Ne===null?s.outputColorSpace:Ne.isXRRenderTarget===!0?Ne.texture.colorSpace:Ci,map:Be,matcap:kt,envMap:et,envMapMode:et&&K.mapping,envMapCubeUVHeight:ee,aoMap:Y,lightMap:qt,bumpMap:Ue,normalMap:$e,displacementMap:f&&Fe,emissiveMap:vt,normalMapObjectSpace:$e&&b.normalMapType===Hx,normalMapTangentSpace:$e&&b.normalMapType===Kp,metalnessMap:Ye,roughnessMap:Xe,anisotropy:ut,anisotropyMap:te,clearcoat:Vt,clearcoatMap:_e,clearcoatNormalMap:ge,clearcoatRoughnessMap:U,iridescence:$t,iridescenceMap:ce,iridescenceThicknessMap:me,sheen:I,sheenColorMap:Q,sheenRoughnessMap:Pe,specularMap:De,specularColorMap:Ie,specularIntensityMap:Re,transmission:A,transmissionMap:Ee,thicknessMap:ze,gradientMap:xt,opaque:b.transparent===!1&&b.blending===qs,alphaMap:B,alphaTest:Me,combine:b.combine,mapUv:Be&&p(b.map.channel),aoMapUv:Y&&p(b.aoMap.channel),lightMapUv:qt&&p(b.lightMap.channel),bumpMapUv:Ue&&p(b.bumpMap.channel),normalMapUv:$e&&p(b.normalMap.channel),displacementMapUv:Fe&&p(b.displacementMap.channel),emissiveMapUv:vt&&p(b.emissiveMap.channel),metalnessMapUv:Ye&&p(b.metalnessMap.channel),roughnessMapUv:Xe&&p(b.roughnessMap.channel),anisotropyMapUv:te&&p(b.anisotropyMap.channel),clearcoatMapUv:_e&&p(b.clearcoatMap.channel),clearcoatNormalMapUv:ge&&p(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:U&&p(b.clearcoatRoughnessMap.channel),iridescenceMapUv:ce&&p(b.iridescenceMap.channel),iridescenceThicknessMapUv:me&&p(b.iridescenceThicknessMap.channel),sheenColorMapUv:Q&&p(b.sheenColorMap.channel),sheenRoughnessMapUv:Pe&&p(b.sheenRoughnessMap.channel),specularMapUv:De&&p(b.specularMap.channel),specularColorMapUv:Ie&&p(b.specularColorMap.channel),specularIntensityMapUv:Re&&p(b.specularIntensityMap.channel),transmissionMapUv:Ee&&p(b.transmissionMap.channel),thicknessMapUv:ze&&p(b.thicknessMap.channel),alphaMapUv:B&&p(b.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&($e||ut),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,vertexUv1s:ve,vertexUv2s:be,vertexUv3s:ht,pointsUvs:G.isPoints===!0&&!!V.attributes.uv&&(Be||B),fog:!!F,useFog:b.fog===!0,fogExp2:F&&F.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:G.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:Te,morphTextureStride:Z,numDirLights:D.directional.length,numPointLights:D.point.length,numSpotLights:D.spot.length,numSpotLightMaps:D.spotLightMap.length,numRectAreaLights:D.rectArea.length,numHemiLights:D.hemi.length,numDirLightShadows:D.directionalShadowMap.length,numPointLightShadows:D.pointShadowMap.length,numSpotLightShadows:D.spotShadowMap.length,numSpotLightShadowsWithMaps:D.numSpotLightShadowsWithMaps,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:b.dithering,shadowMapEnabled:s.shadowMap.enabled&&$.length>0,shadowMapType:s.shadowMap.type,toneMapping:b.toneMapped?s.toneMapping:Ji,useLegacyLights:s.useLegacyLights,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Ti,flipSided:b.side===On,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionDerivatives:J&&b.extensions.derivatives===!0,extensionFragDepth:J&&b.extensions.fragDepth===!0,extensionDrawBuffers:J&&b.extensions.drawBuffers===!0,extensionShaderTextureLOD:J&&b.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:b.customProgramCacheKey()}}function m(b){const D=[];if(b.shaderID?D.push(b.shaderID):(D.push(b.customVertexShaderID),D.push(b.customFragmentShaderID)),b.defines!==void 0)for(const $ in b.defines)D.push($),D.push(b.defines[$]);return b.isRawShaderMaterial===!1&&(S(D,b),y(D,b),D.push(s.outputColorSpace)),D.push(b.customProgramCacheKey),D.join()}function S(b,D){b.push(D.precision),b.push(D.outputColorSpace),b.push(D.envMapMode),b.push(D.envMapCubeUVHeight),b.push(D.mapUv),b.push(D.alphaMapUv),b.push(D.lightMapUv),b.push(D.aoMapUv),b.push(D.bumpMapUv),b.push(D.normalMapUv),b.push(D.displacementMapUv),b.push(D.emissiveMapUv),b.push(D.metalnessMapUv),b.push(D.roughnessMapUv),b.push(D.anisotropyMapUv),b.push(D.clearcoatMapUv),b.push(D.clearcoatNormalMapUv),b.push(D.clearcoatRoughnessMapUv),b.push(D.iridescenceMapUv),b.push(D.iridescenceThicknessMapUv),b.push(D.sheenColorMapUv),b.push(D.sheenRoughnessMapUv),b.push(D.specularMapUv),b.push(D.specularColorMapUv),b.push(D.specularIntensityMapUv),b.push(D.transmissionMapUv),b.push(D.thicknessMapUv),b.push(D.combine),b.push(D.fogExp2),b.push(D.sizeAttenuation),b.push(D.morphTargetsCount),b.push(D.morphAttributeCount),b.push(D.numDirLights),b.push(D.numPointLights),b.push(D.numSpotLights),b.push(D.numSpotLightMaps),b.push(D.numHemiLights),b.push(D.numRectAreaLights),b.push(D.numDirLightShadows),b.push(D.numPointLightShadows),b.push(D.numSpotLightShadows),b.push(D.numSpotLightShadowsWithMaps),b.push(D.shadowMapType),b.push(D.toneMapping),b.push(D.numClippingPlanes),b.push(D.numClipIntersection),b.push(D.depthPacking)}function y(b,D){o.disableAll(),D.isWebGL2&&o.enable(0),D.supportsVertexTextures&&o.enable(1),D.instancing&&o.enable(2),D.instancingColor&&o.enable(3),D.matcap&&o.enable(4),D.envMap&&o.enable(5),D.normalMapObjectSpace&&o.enable(6),D.normalMapTangentSpace&&o.enable(7),D.clearcoat&&o.enable(8),D.iridescence&&o.enable(9),D.alphaTest&&o.enable(10),D.vertexColors&&o.enable(11),D.vertexAlphas&&o.enable(12),D.vertexUv1s&&o.enable(13),D.vertexUv2s&&o.enable(14),D.vertexUv3s&&o.enable(15),D.vertexTangents&&o.enable(16),D.anisotropy&&o.enable(17),b.push(o.mask),o.disableAll(),D.fog&&o.enable(0),D.useFog&&o.enable(1),D.flatShading&&o.enable(2),D.logarithmicDepthBuffer&&o.enable(3),D.skinning&&o.enable(4),D.morphTargets&&o.enable(5),D.morphNormals&&o.enable(6),D.morphColors&&o.enable(7),D.premultipliedAlpha&&o.enable(8),D.shadowMapEnabled&&o.enable(9),D.useLegacyLights&&o.enable(10),D.doubleSided&&o.enable(11),D.flipSided&&o.enable(12),D.useDepthPacking&&o.enable(13),D.dithering&&o.enable(14),D.transmission&&o.enable(15),D.sheen&&o.enable(16),D.opaque&&o.enable(17),D.pointsUvs&&o.enable(18),b.push(o.mask)}function T(b){const D=v[b.type];let $;if(D){const ae=Ei[D];$=Py.clone(ae.uniforms)}else $=b.uniforms;return $}function E(b,D){let $;for(let ae=0,G=c.length;ae<G;ae++){const F=c[ae];if(F.cacheKey===D){$=F,++$.usedTimes;break}}return $===void 0&&($=new kE(s,D,b,r),c.push($)),$}function w(b){if(--b.usedTimes===0){const D=c.indexOf(b);c[D]=c[c.length-1],c.pop(),b.destroy()}}function R(b){l.remove(b)}function P(){l.dispose()}return{getParameters:g,getProgramCacheKey:m,getUniforms:T,acquireProgram:E,releaseProgram:w,releaseShaderCache:R,programs:c,dispose:P}}function VE(){let s=new WeakMap;function e(r){let a=s.get(r);return a===void 0&&(a={},s.set(r,a)),a}function t(r){s.delete(r)}function n(r,a,o){s.get(r)[a]=o}function i(){s=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function WE(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function wd(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Ad(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function a(h,f,d,v,p,g){let m=s[e];return m===void 0?(m={id:h.id,object:h,geometry:f,material:d,groupOrder:v,renderOrder:h.renderOrder,z:p,group:g},s[e]=m):(m.id=h.id,m.object=h,m.geometry=f,m.material=d,m.groupOrder=v,m.renderOrder=h.renderOrder,m.z=p,m.group=g),e++,m}function o(h,f,d,v,p,g){const m=a(h,f,d,v,p,g);d.transmission>0?n.push(m):d.transparent===!0?i.push(m):t.push(m)}function l(h,f,d,v,p,g){const m=a(h,f,d,v,p,g);d.transmission>0?n.unshift(m):d.transparent===!0?i.unshift(m):t.unshift(m)}function c(h,f){t.length>1&&t.sort(h||WE),n.length>1&&n.sort(f||wd),i.length>1&&i.sort(f||wd)}function u(){for(let h=e,f=s.length;h<f;h++){const d=s[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:o,unshift:l,finish:u,sort:c}}function XE(){let s=new WeakMap;function e(n,i){const r=s.get(n);let a;return r===void 0?(a=new Ad,s.set(n,[a])):i>=r.length?(a=new Ad,r.push(a)):a=r[i],a}function t(){s=new WeakMap}return{get:e,dispose:t}}function qE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new z,color:new Qe};break;case"SpotLight":t={position:new z,direction:new z,color:new Qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new z,color:new Qe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new z,skyColor:new Qe,groundColor:new Qe};break;case"RectAreaLight":t={color:new Qe,position:new z,halfWidth:new z,halfHeight:new z};break}return s[e.id]=t,t}}}function $E(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let YE=0;function jE(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function KE(s,e){const t=new qE,n=$E(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)i.probe.push(new z);const r=new z,a=new at,o=new at;function l(u,h){let f=0,d=0,v=0;for(let $=0;$<9;$++)i.probe[$].set(0,0,0);let p=0,g=0,m=0,S=0,y=0,T=0,E=0,w=0,R=0,P=0;u.sort(jE);const b=h===!0?Math.PI:1;for(let $=0,ae=u.length;$<ae;$++){const G=u[$],F=G.color,V=G.intensity,re=G.distance,K=G.shadow&&G.shadow.map?G.shadow.map.texture:null;if(G.isAmbientLight)f+=F.r*V*b,d+=F.g*V*b,v+=F.b*V*b;else if(G.isLightProbe)for(let ee=0;ee<9;ee++)i.probe[ee].addScaledVector(G.sh.coefficients[ee],V);else if(G.isDirectionalLight){const ee=t.get(G);if(ee.color.copy(G.color).multiplyScalar(G.intensity*b),G.castShadow){const oe=G.shadow,ue=n.get(G);ue.shadowBias=oe.bias,ue.shadowNormalBias=oe.normalBias,ue.shadowRadius=oe.radius,ue.shadowMapSize=oe.mapSize,i.directionalShadow[p]=ue,i.directionalShadowMap[p]=K,i.directionalShadowMatrix[p]=G.shadow.matrix,T++}i.directional[p]=ee,p++}else if(G.isSpotLight){const ee=t.get(G);ee.position.setFromMatrixPosition(G.matrixWorld),ee.color.copy(F).multiplyScalar(V*b),ee.distance=re,ee.coneCos=Math.cos(G.angle),ee.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),ee.decay=G.decay,i.spot[m]=ee;const oe=G.shadow;if(G.map&&(i.spotLightMap[R]=G.map,R++,oe.updateMatrices(G),G.castShadow&&P++),i.spotLightMatrix[m]=oe.matrix,G.castShadow){const ue=n.get(G);ue.shadowBias=oe.bias,ue.shadowNormalBias=oe.normalBias,ue.shadowRadius=oe.radius,ue.shadowMapSize=oe.mapSize,i.spotShadow[m]=ue,i.spotShadowMap[m]=K,w++}m++}else if(G.isRectAreaLight){const ee=t.get(G);ee.color.copy(F).multiplyScalar(V),ee.halfWidth.set(G.width*.5,0,0),ee.halfHeight.set(0,G.height*.5,0),i.rectArea[S]=ee,S++}else if(G.isPointLight){const ee=t.get(G);if(ee.color.copy(G.color).multiplyScalar(G.intensity*b),ee.distance=G.distance,ee.decay=G.decay,G.castShadow){const oe=G.shadow,ue=n.get(G);ue.shadowBias=oe.bias,ue.shadowNormalBias=oe.normalBias,ue.shadowRadius=oe.radius,ue.shadowMapSize=oe.mapSize,ue.shadowCameraNear=oe.camera.near,ue.shadowCameraFar=oe.camera.far,i.pointShadow[g]=ue,i.pointShadowMap[g]=K,i.pointShadowMatrix[g]=G.shadow.matrix,E++}i.point[g]=ee,g++}else if(G.isHemisphereLight){const ee=t.get(G);ee.skyColor.copy(G.color).multiplyScalar(V*b),ee.groundColor.copy(G.groundColor).multiplyScalar(V*b),i.hemi[y]=ee,y++}}S>0&&(e.isWebGL2||s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=xe.LTC_FLOAT_1,i.rectAreaLTC2=xe.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=xe.LTC_HALF_1,i.rectAreaLTC2=xe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=f,i.ambient[1]=d,i.ambient[2]=v;const D=i.hash;(D.directionalLength!==p||D.pointLength!==g||D.spotLength!==m||D.rectAreaLength!==S||D.hemiLength!==y||D.numDirectionalShadows!==T||D.numPointShadows!==E||D.numSpotShadows!==w||D.numSpotMaps!==R)&&(i.directional.length=p,i.spot.length=m,i.rectArea.length=S,i.point.length=g,i.hemi.length=y,i.directionalShadow.length=T,i.directionalShadowMap.length=T,i.pointShadow.length=E,i.pointShadowMap.length=E,i.spotShadow.length=w,i.spotShadowMap.length=w,i.directionalShadowMatrix.length=T,i.pointShadowMatrix.length=E,i.spotLightMatrix.length=w+R-P,i.spotLightMap.length=R,i.numSpotLightShadowsWithMaps=P,D.directionalLength=p,D.pointLength=g,D.spotLength=m,D.rectAreaLength=S,D.hemiLength=y,D.numDirectionalShadows=T,D.numPointShadows=E,D.numSpotShadows=w,D.numSpotMaps=R,i.version=YE++)}function c(u,h){let f=0,d=0,v=0,p=0,g=0;const m=h.matrixWorldInverse;for(let S=0,y=u.length;S<y;S++){const T=u[S];if(T.isDirectionalLight){const E=i.directional[f];E.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(m),f++}else if(T.isSpotLight){const E=i.spot[v];E.position.setFromMatrixPosition(T.matrixWorld),E.position.applyMatrix4(m),E.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(m),v++}else if(T.isRectAreaLight){const E=i.rectArea[p];E.position.setFromMatrixPosition(T.matrixWorld),E.position.applyMatrix4(m),o.identity(),a.copy(T.matrixWorld),a.premultiply(m),o.extractRotation(a),E.halfWidth.set(T.width*.5,0,0),E.halfHeight.set(0,T.height*.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),p++}else if(T.isPointLight){const E=i.point[d];E.position.setFromMatrixPosition(T.matrixWorld),E.position.applyMatrix4(m),d++}else if(T.isHemisphereLight){const E=i.hemi[g];E.direction.setFromMatrixPosition(T.matrixWorld),E.direction.transformDirection(m),g++}}}return{setup:l,setupView:c,state:i}}function Rd(s,e){const t=new KE(s,e),n=[],i=[];function r(){n.length=0,i.length=0}function a(h){n.push(h)}function o(h){i.push(h)}function l(h){t.setup(n,h)}function c(h){t.setupView(n,h)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function ZE(s,e){let t=new WeakMap;function n(r,a=0){const o=t.get(r);let l;return o===void 0?(l=new Rd(s,e),t.set(r,[l])):a>=o.length?(l=new Rd(s,e),o.push(l)):l=o[a],l}function i(){t=new WeakMap}return{get:n,dispose:i}}class JE extends Mi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Bx,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class QE extends Mi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const eT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,tT=`uniform sampler2D shadow_pass;
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
}`;function nT(s,e,t){let n=new Cu;const i=new We,r=new We,a=new Ct,o=new JE({depthPacking:zx}),l=new QE,c={},u=t.maxTextureSize,h={[er]:On,[On]:er,[Ti]:Ti},f=new ts({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new We},radius:{value:4}},vertexShader:eT,fragmentShader:tT}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const v=new Ii;v.setAttribute("position",new Dn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const p=new vn(v,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Op;let m=this.type;this.render=function(E,w,R){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||E.length===0)return;const P=s.getRenderTarget(),b=s.getActiveCubeFace(),D=s.getActiveMipmapLevel(),$=s.state;$.setBlending(Mr),$.buffers.color.setClear(1,1,1,1),$.buffers.depth.setTest(!0),$.setScissorTest(!1);const ae=m!==qi&&this.type===qi,G=m===qi&&this.type!==qi;for(let F=0,V=E.length;F<V;F++){const re=E[F],K=re.shadow;if(K===void 0){console.warn("THREE.WebGLShadowMap:",re,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;i.copy(K.mapSize);const ee=K.getFrameExtents();if(i.multiply(ee),r.copy(K.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/ee.x),i.x=r.x*ee.x,K.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/ee.y),i.y=r.y*ee.y,K.mapSize.y=r.y)),K.map===null||ae===!0||G===!0){const ue=this.type!==qi?{minFilter:an,magFilter:an}:{};K.map!==null&&K.map.dispose(),K.map=new es(i.x,i.y,ue),K.map.texture.name=re.name+".shadowMap",K.camera.updateProjectionMatrix()}s.setRenderTarget(K.map),s.clear();const oe=K.getViewportCount();for(let ue=0;ue<oe;ue++){const Te=K.getViewport(ue);a.set(r.x*Te.x,r.y*Te.y,r.x*Te.z,r.y*Te.w),$.viewport(a),K.updateMatrices(re,ue),n=K.getFrustum(),T(w,R,K.camera,re,this.type)}K.isPointLightShadow!==!0&&this.type===qi&&S(K,R),K.needsUpdate=!1}m=this.type,g.needsUpdate=!1,s.setRenderTarget(P,b,D)};function S(E,w){const R=e.update(p);f.defines.VSM_SAMPLES!==E.blurSamples&&(f.defines.VSM_SAMPLES=E.blurSamples,d.defines.VSM_SAMPLES=E.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new es(i.x,i.y)),f.uniforms.shadow_pass.value=E.map.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,s.setRenderTarget(E.mapPass),s.clear(),s.renderBufferDirect(w,null,R,f,p,null),d.uniforms.shadow_pass.value=E.mapPass.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,s.setRenderTarget(E.map),s.clear(),s.renderBufferDirect(w,null,R,d,p,null)}function y(E,w,R,P){let b=null;const D=R.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(D!==void 0)b=D;else if(b=R.isPointLight===!0?l:o,s.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const $=b.uuid,ae=w.uuid;let G=c[$];G===void 0&&(G={},c[$]=G);let F=G[ae];F===void 0&&(F=b.clone(),G[ae]=F),b=F}if(b.visible=w.visible,b.wireframe=w.wireframe,P===qi?b.side=w.shadowSide!==null?w.shadowSide:w.side:b.side=w.shadowSide!==null?w.shadowSide:h[w.side],b.alphaMap=w.alphaMap,b.alphaTest=w.alphaTest,b.map=w.map,b.clipShadows=w.clipShadows,b.clippingPlanes=w.clippingPlanes,b.clipIntersection=w.clipIntersection,b.displacementMap=w.displacementMap,b.displacementScale=w.displacementScale,b.displacementBias=w.displacementBias,b.wireframeLinewidth=w.wireframeLinewidth,b.linewidth=w.linewidth,R.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const $=s.properties.get(b);$.light=R}return b}function T(E,w,R,P,b){if(E.visible===!1)return;if(E.layers.test(w.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&b===qi)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,E.matrixWorld);const ae=e.update(E),G=E.material;if(Array.isArray(G)){const F=ae.groups;for(let V=0,re=F.length;V<re;V++){const K=F[V],ee=G[K.materialIndex];if(ee&&ee.visible){const oe=y(E,ee,P,b);s.renderBufferDirect(R,null,ae,oe,E,K)}}}else if(G.visible){const F=y(E,G,P,b);s.renderBufferDirect(R,null,ae,F,E,null)}}const $=E.children;for(let ae=0,G=$.length;ae<G;ae++)T($[ae],w,R,P,b)}}function iT(s,e,t){const n=t.isWebGL2;function i(){let B=!1;const Me=new Ct;let J=null;const ve=new Ct(0,0,0,0);return{setMask:function(be){J!==be&&!B&&(s.colorMask(be,be,be,be),J=be)},setLocked:function(be){B=be},setClear:function(be,ht,It,Wt,Ni){Ni===!0&&(be*=Wt,ht*=Wt,It*=Wt),Me.set(be,ht,It,Wt),ve.equals(Me)===!1&&(s.clearColor(be,ht,It,Wt),ve.copy(Me))},reset:function(){B=!1,J=null,ve.set(-1,0,0,0)}}}function r(){let B=!1,Me=null,J=null,ve=null;return{setTest:function(be){be?Ne(s.DEPTH_TEST):Ke(s.DEPTH_TEST)},setMask:function(be){Me!==be&&!B&&(s.depthMask(be),Me=be)},setFunc:function(be){if(J!==be){switch(be){case px:s.depthFunc(s.NEVER);break;case mx:s.depthFunc(s.ALWAYS);break;case gx:s.depthFunc(s.LESS);break;case qc:s.depthFunc(s.LEQUAL);break;case _x:s.depthFunc(s.EQUAL);break;case vx:s.depthFunc(s.GEQUAL);break;case xx:s.depthFunc(s.GREATER);break;case yx:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}J=be}},setLocked:function(be){B=be},setClear:function(be){ve!==be&&(s.clearDepth(be),ve=be)},reset:function(){B=!1,Me=null,J=null,ve=null}}}function a(){let B=!1,Me=null,J=null,ve=null,be=null,ht=null,It=null,Wt=null,Ni=null;return{setTest:function(Ut){B||(Ut?Ne(s.STENCIL_TEST):Ke(s.STENCIL_TEST))},setMask:function(Ut){Me!==Ut&&!B&&(s.stencilMask(Ut),Me=Ut)},setFunc:function(Ut,Qn,cn){(J!==Ut||ve!==Qn||be!==cn)&&(s.stencilFunc(Ut,Qn,cn),J=Ut,ve=Qn,be=cn)},setOp:function(Ut,Qn,cn){(ht!==Ut||It!==Qn||Wt!==cn)&&(s.stencilOp(Ut,Qn,cn),ht=Ut,It=Qn,Wt=cn)},setLocked:function(Ut){B=Ut},setClear:function(Ut){Ni!==Ut&&(s.clearStencil(Ut),Ni=Ut)},reset:function(){B=!1,Me=null,J=null,ve=null,be=null,ht=null,It=null,Wt=null,Ni=null}}}const o=new i,l=new r,c=new a,u=new WeakMap,h=new WeakMap;let f={},d={},v=new WeakMap,p=[],g=null,m=!1,S=null,y=null,T=null,E=null,w=null,R=null,P=null,b=!1,D=null,$=null,ae=null,G=null,F=null;const V=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let re=!1,K=0;const ee=s.getParameter(s.VERSION);ee.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(ee)[1]),re=K>=1):ee.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(ee)[1]),re=K>=2);let oe=null,ue={};const Te=s.getParameter(s.SCISSOR_BOX),Z=s.getParameter(s.VIEWPORT),fe=new Ct().fromArray(Te),le=new Ct().fromArray(Z);function ye(B,Me,J,ve){const be=new Uint8Array(4),ht=s.createTexture();s.bindTexture(B,ht),s.texParameteri(B,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(B,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let It=0;It<J;It++)n&&(B===s.TEXTURE_3D||B===s.TEXTURE_2D_ARRAY)?s.texImage3D(Me,0,s.RGBA,1,1,ve,0,s.RGBA,s.UNSIGNED_BYTE,be):s.texImage2D(Me+It,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,be);return ht}const we={};we[s.TEXTURE_2D]=ye(s.TEXTURE_2D,s.TEXTURE_2D,1),we[s.TEXTURE_CUBE_MAP]=ye(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(we[s.TEXTURE_2D_ARRAY]=ye(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),we[s.TEXTURE_3D]=ye(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Ne(s.DEPTH_TEST),l.setFunc(qc),Fe(!1),vt(ff),Ne(s.CULL_FACE),Ue(Mr);function Ne(B){f[B]!==!0&&(s.enable(B),f[B]=!0)}function Ke(B){f[B]!==!1&&(s.disable(B),f[B]=!1)}function Be(B,Me){return d[B]!==Me?(s.bindFramebuffer(B,Me),d[B]=Me,n&&(B===s.DRAW_FRAMEBUFFER&&(d[s.FRAMEBUFFER]=Me),B===s.FRAMEBUFFER&&(d[s.DRAW_FRAMEBUFFER]=Me)),!0):!1}function kt(B,Me){let J=p,ve=!1;if(B)if(J=v.get(Me),J===void 0&&(J=[],v.set(Me,J)),B.isWebGLMultipleRenderTargets){const be=B.texture;if(J.length!==be.length||J[0]!==s.COLOR_ATTACHMENT0){for(let ht=0,It=be.length;ht<It;ht++)J[ht]=s.COLOR_ATTACHMENT0+ht;J.length=be.length,ve=!0}}else J[0]!==s.COLOR_ATTACHMENT0&&(J[0]=s.COLOR_ATTACHMENT0,ve=!0);else J[0]!==s.BACK&&(J[0]=s.BACK,ve=!0);ve&&(t.isWebGL2?s.drawBuffers(J):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(J))}function et(B){return g!==B?(s.useProgram(B),g=B,!0):!1}const Y={[Gs]:s.FUNC_ADD,[ix]:s.FUNC_SUBTRACT,[rx]:s.FUNC_REVERSE_SUBTRACT};if(n)Y[gf]=s.MIN,Y[_f]=s.MAX;else{const B=e.get("EXT_blend_minmax");B!==null&&(Y[gf]=B.MIN_EXT,Y[_f]=B.MAX_EXT)}const qt={[sx]:s.ZERO,[ax]:s.ONE,[ox]:s.SRC_COLOR,[Fp]:s.SRC_ALPHA,[dx]:s.SRC_ALPHA_SATURATE,[hx]:s.DST_COLOR,[cx]:s.DST_ALPHA,[lx]:s.ONE_MINUS_SRC_COLOR,[kp]:s.ONE_MINUS_SRC_ALPHA,[fx]:s.ONE_MINUS_DST_COLOR,[ux]:s.ONE_MINUS_DST_ALPHA};function Ue(B,Me,J,ve,be,ht,It,Wt){if(B===Mr){m===!0&&(Ke(s.BLEND),m=!1);return}if(m===!1&&(Ne(s.BLEND),m=!0),B!==nx){if(B!==S||Wt!==b){if((y!==Gs||w!==Gs)&&(s.blendEquation(s.FUNC_ADD),y=Gs,w=Gs),Wt)switch(B){case qs:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case df:s.blendFunc(s.ONE,s.ONE);break;case pf:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case mf:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case qs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case df:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case pf:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case mf:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}T=null,E=null,R=null,P=null,S=B,b=Wt}return}be=be||Me,ht=ht||J,It=It||ve,(Me!==y||be!==w)&&(s.blendEquationSeparate(Y[Me],Y[be]),y=Me,w=be),(J!==T||ve!==E||ht!==R||It!==P)&&(s.blendFuncSeparate(qt[J],qt[ve],qt[ht],qt[It]),T=J,E=ve,R=ht,P=It),S=B,b=!1}function $e(B,Me){B.side===Ti?Ke(s.CULL_FACE):Ne(s.CULL_FACE);let J=B.side===On;Me&&(J=!J),Fe(J),B.blending===qs&&B.transparent===!1?Ue(Mr):Ue(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.premultipliedAlpha),l.setFunc(B.depthFunc),l.setTest(B.depthTest),l.setMask(B.depthWrite),o.setMask(B.colorWrite);const ve=B.stencilWrite;c.setTest(ve),ve&&(c.setMask(B.stencilWriteMask),c.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),c.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),Xe(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?Ne(s.SAMPLE_ALPHA_TO_COVERAGE):Ke(s.SAMPLE_ALPHA_TO_COVERAGE)}function Fe(B){D!==B&&(B?s.frontFace(s.CW):s.frontFace(s.CCW),D=B)}function vt(B){B!==Qv?(Ne(s.CULL_FACE),B!==$&&(B===ff?s.cullFace(s.BACK):B===ex?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ke(s.CULL_FACE),$=B}function Ye(B){B!==ae&&(re&&s.lineWidth(B),ae=B)}function Xe(B,Me,J){B?(Ne(s.POLYGON_OFFSET_FILL),(G!==Me||F!==J)&&(s.polygonOffset(Me,J),G=Me,F=J)):Ke(s.POLYGON_OFFSET_FILL)}function ut(B){B?Ne(s.SCISSOR_TEST):Ke(s.SCISSOR_TEST)}function Vt(B){B===void 0&&(B=s.TEXTURE0+V-1),oe!==B&&(s.activeTexture(B),oe=B)}function $t(B,Me,J){J===void 0&&(oe===null?J=s.TEXTURE0+V-1:J=oe);let ve=ue[J];ve===void 0&&(ve={type:void 0,texture:void 0},ue[J]=ve),(ve.type!==B||ve.texture!==Me)&&(oe!==J&&(s.activeTexture(J),oe=J),s.bindTexture(B,Me||we[B]),ve.type=B,ve.texture=Me)}function I(){const B=ue[oe];B!==void 0&&B.type!==void 0&&(s.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function A(){try{s.compressedTexImage2D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function te(){try{s.compressedTexImage3D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function _e(){try{s.texSubImage2D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ge(){try{s.texSubImage3D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function U(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ce(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function me(){try{s.texStorage2D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Q(){try{s.texStorage3D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Pe(){try{s.texImage2D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function De(){try{s.texImage3D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ie(B){fe.equals(B)===!1&&(s.scissor(B.x,B.y,B.z,B.w),fe.copy(B))}function Re(B){le.equals(B)===!1&&(s.viewport(B.x,B.y,B.z,B.w),le.copy(B))}function Ee(B,Me){let J=h.get(Me);J===void 0&&(J=new WeakMap,h.set(Me,J));let ve=J.get(B);ve===void 0&&(ve=s.getUniformBlockIndex(Me,B.name),J.set(B,ve))}function ze(B,Me){const ve=h.get(Me).get(B);u.get(Me)!==ve&&(s.uniformBlockBinding(Me,ve,B.__bindingPointIndex),u.set(Me,ve))}function xt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),n===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),f={},oe=null,ue={},d={},v=new WeakMap,p=[],g=null,m=!1,S=null,y=null,T=null,E=null,w=null,R=null,P=null,b=!1,D=null,$=null,ae=null,G=null,F=null,fe.set(0,0,s.canvas.width,s.canvas.height),le.set(0,0,s.canvas.width,s.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:Ne,disable:Ke,bindFramebuffer:Be,drawBuffers:kt,useProgram:et,setBlending:Ue,setMaterial:$e,setFlipSided:Fe,setCullFace:vt,setLineWidth:Ye,setPolygonOffset:Xe,setScissorTest:ut,activeTexture:Vt,bindTexture:$t,unbindTexture:I,compressedTexImage2D:A,compressedTexImage3D:te,texImage2D:Pe,texImage3D:De,updateUBOMapping:Ee,uniformBlockBinding:ze,texStorage2D:me,texStorage3D:Q,texSubImage2D:_e,texSubImage3D:ge,compressedTexSubImage2D:U,compressedTexSubImage3D:ce,scissor:Ie,viewport:Re,reset:xt}}function rT(s,e,t,n,i,r,a){const o=i.isWebGL2,l=i.maxTextures,c=i.maxCubemapSize,u=i.maxTextureSize,h=i.maxSamples,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),v=new WeakMap;let p;const g=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(I,A){return m?new OffscreenCanvas(I,A):ja("canvas")}function y(I,A,te,_e){let ge=1;if((I.width>_e||I.height>_e)&&(ge=_e/Math.max(I.width,I.height)),ge<1||A===!0)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap){const U=A?ol:Math.floor,ce=U(ge*I.width),me=U(ge*I.height);p===void 0&&(p=S(ce,me));const Q=te?S(ce,me):p;return Q.width=ce,Q.height=me,Q.getContext("2d").drawImage(I,0,0,ce,me),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+I.width+"x"+I.height+") to ("+ce+"x"+me+")."),Q}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+I.width+"x"+I.height+")."),I;return I}function T(I){return Qc(I.width)&&Qc(I.height)}function E(I){return o?!1:I.wrapS!==ri||I.wrapT!==ri||I.minFilter!==an&&I.minFilter!==Un}function w(I,A){return I.generateMipmaps&&A&&I.minFilter!==an&&I.minFilter!==Un}function R(I){s.generateMipmap(I)}function P(I,A,te,_e,ge=!1){if(o===!1)return A;if(I!==null){if(s[I]!==void 0)return s[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let U=A;return A===s.RED&&(te===s.FLOAT&&(U=s.R32F),te===s.HALF_FLOAT&&(U=s.R16F),te===s.UNSIGNED_BYTE&&(U=s.R8)),A===s.RG&&(te===s.FLOAT&&(U=s.RG32F),te===s.HALF_FLOAT&&(U=s.RG16F),te===s.UNSIGNED_BYTE&&(U=s.RG8)),A===s.RGBA&&(te===s.FLOAT&&(U=s.RGBA32F),te===s.HALF_FLOAT&&(U=s.RGBA16F),te===s.UNSIGNED_BYTE&&(U=_e===Ve&&ge===!1?s.SRGB8_ALPHA8:s.RGBA8),te===s.UNSIGNED_SHORT_4_4_4_4&&(U=s.RGBA4),te===s.UNSIGNED_SHORT_5_5_5_1&&(U=s.RGB5_A1)),(U===s.R16F||U===s.R32F||U===s.RG16F||U===s.RG32F||U===s.RGBA16F||U===s.RGBA32F)&&e.get("EXT_color_buffer_float"),U}function b(I,A,te){return w(I,te)===!0||I.isFramebufferTexture&&I.minFilter!==an&&I.minFilter!==Un?Math.log2(Math.max(A.width,A.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?A.mipmaps.length:1}function D(I){return I===an||I===jc||I===Zo?s.NEAREST:s.LINEAR}function $(I){const A=I.target;A.removeEventListener("dispose",$),G(A),A.isVideoTexture&&v.delete(A)}function ae(I){const A=I.target;A.removeEventListener("dispose",ae),V(A)}function G(I){const A=n.get(I);if(A.__webglInit===void 0)return;const te=I.source,_e=g.get(te);if(_e){const ge=_e[A.__cacheKey];ge.usedTimes--,ge.usedTimes===0&&F(I),Object.keys(_e).length===0&&g.delete(te)}n.remove(I)}function F(I){const A=n.get(I);s.deleteTexture(A.__webglTexture);const te=I.source,_e=g.get(te);delete _e[A.__cacheKey],a.memory.textures--}function V(I){const A=I.texture,te=n.get(I),_e=n.get(A);if(_e.__webglTexture!==void 0&&(s.deleteTexture(_e.__webglTexture),a.memory.textures--),I.depthTexture&&I.depthTexture.dispose(),I.isWebGLCubeRenderTarget)for(let ge=0;ge<6;ge++)s.deleteFramebuffer(te.__webglFramebuffer[ge]),te.__webglDepthbuffer&&s.deleteRenderbuffer(te.__webglDepthbuffer[ge]);else{if(s.deleteFramebuffer(te.__webglFramebuffer),te.__webglDepthbuffer&&s.deleteRenderbuffer(te.__webglDepthbuffer),te.__webglMultisampledFramebuffer&&s.deleteFramebuffer(te.__webglMultisampledFramebuffer),te.__webglColorRenderbuffer)for(let ge=0;ge<te.__webglColorRenderbuffer.length;ge++)te.__webglColorRenderbuffer[ge]&&s.deleteRenderbuffer(te.__webglColorRenderbuffer[ge]);te.__webglDepthRenderbuffer&&s.deleteRenderbuffer(te.__webglDepthRenderbuffer)}if(I.isWebGLMultipleRenderTargets)for(let ge=0,U=A.length;ge<U;ge++){const ce=n.get(A[ge]);ce.__webglTexture&&(s.deleteTexture(ce.__webglTexture),a.memory.textures--),n.remove(A[ge])}n.remove(A),n.remove(I)}let re=0;function K(){re=0}function ee(){const I=re;return I>=l&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+l),re+=1,I}function oe(I){const A=[];return A.push(I.wrapS),A.push(I.wrapT),A.push(I.wrapR||0),A.push(I.magFilter),A.push(I.minFilter),A.push(I.anisotropy),A.push(I.internalFormat),A.push(I.format),A.push(I.type),A.push(I.generateMipmaps),A.push(I.premultiplyAlpha),A.push(I.flipY),A.push(I.unpackAlignment),A.push(I.colorSpace),A.join()}function ue(I,A){const te=n.get(I);if(I.isVideoTexture&&Vt(I),I.isRenderTargetTexture===!1&&I.version>0&&te.__version!==I.version){const _e=I.image;if(_e===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(_e.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Be(te,I,A);return}}t.bindTexture(s.TEXTURE_2D,te.__webglTexture,s.TEXTURE0+A)}function Te(I,A){const te=n.get(I);if(I.version>0&&te.__version!==I.version){Be(te,I,A);return}t.bindTexture(s.TEXTURE_2D_ARRAY,te.__webglTexture,s.TEXTURE0+A)}function Z(I,A){const te=n.get(I);if(I.version>0&&te.__version!==I.version){Be(te,I,A);return}t.bindTexture(s.TEXTURE_3D,te.__webglTexture,s.TEXTURE0+A)}function fe(I,A){const te=n.get(I);if(I.version>0&&te.__version!==I.version){kt(te,I,A);return}t.bindTexture(s.TEXTURE_CUBE_MAP,te.__webglTexture,s.TEXTURE0+A)}const le={[ea]:s.REPEAT,[ri]:s.CLAMP_TO_EDGE,[sl]:s.MIRRORED_REPEAT},ye={[an]:s.NEAREST,[jc]:s.NEAREST_MIPMAP_NEAREST,[Zo]:s.NEAREST_MIPMAP_LINEAR,[Un]:s.LINEAR,[Hp]:s.LINEAR_MIPMAP_NEAREST,[Qr]:s.LINEAR_MIPMAP_LINEAR},we={[Vx]:s.NEVER,[Kx]:s.ALWAYS,[Wx]:s.LESS,[qx]:s.LEQUAL,[Xx]:s.EQUAL,[jx]:s.GEQUAL,[$x]:s.GREATER,[Yx]:s.NOTEQUAL};function Ne(I,A,te){if(te?(s.texParameteri(I,s.TEXTURE_WRAP_S,le[A.wrapS]),s.texParameteri(I,s.TEXTURE_WRAP_T,le[A.wrapT]),(I===s.TEXTURE_3D||I===s.TEXTURE_2D_ARRAY)&&s.texParameteri(I,s.TEXTURE_WRAP_R,le[A.wrapR]),s.texParameteri(I,s.TEXTURE_MAG_FILTER,ye[A.magFilter]),s.texParameteri(I,s.TEXTURE_MIN_FILTER,ye[A.minFilter])):(s.texParameteri(I,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(I,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(I===s.TEXTURE_3D||I===s.TEXTURE_2D_ARRAY)&&s.texParameteri(I,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(A.wrapS!==ri||A.wrapT!==ri)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(I,s.TEXTURE_MAG_FILTER,D(A.magFilter)),s.texParameteri(I,s.TEXTURE_MIN_FILTER,D(A.minFilter)),A.minFilter!==an&&A.minFilter!==Un&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),A.compareFunction&&(s.texParameteri(I,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(I,s.TEXTURE_COMPARE_FUNC,we[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const _e=e.get("EXT_texture_filter_anisotropic");if(A.magFilter===an||A.minFilter!==Zo&&A.minFilter!==Qr||A.type===ji&&e.has("OES_texture_float_linear")===!1||o===!1&&A.type===$a&&e.has("OES_texture_half_float_linear")===!1)return;(A.anisotropy>1||n.get(A).__currentAnisotropy)&&(s.texParameterf(I,_e.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,i.getMaxAnisotropy())),n.get(A).__currentAnisotropy=A.anisotropy)}}function Ke(I,A){let te=!1;I.__webglInit===void 0&&(I.__webglInit=!0,A.addEventListener("dispose",$));const _e=A.source;let ge=g.get(_e);ge===void 0&&(ge={},g.set(_e,ge));const U=oe(A);if(U!==I.__cacheKey){ge[U]===void 0&&(ge[U]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,te=!0),ge[U].usedTimes++;const ce=ge[I.__cacheKey];ce!==void 0&&(ge[I.__cacheKey].usedTimes--,ce.usedTimes===0&&F(A)),I.__cacheKey=U,I.__webglTexture=ge[U].texture}return te}function Be(I,A,te){let _e=s.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(_e=s.TEXTURE_2D_ARRAY),A.isData3DTexture&&(_e=s.TEXTURE_3D);const ge=Ke(I,A),U=A.source;t.bindTexture(_e,I.__webglTexture,s.TEXTURE0+te);const ce=n.get(U);if(U.version!==ce.__version||ge===!0){t.activeTexture(s.TEXTURE0+te),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,A.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,A.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.NONE);const me=E(A)&&T(A.image)===!1;let Q=y(A.image,me,!1,u);Q=$t(A,Q);const Pe=T(Q)||o,De=r.convert(A.format,A.colorSpace);let Ie=r.convert(A.type),Re=P(A.internalFormat,De,Ie,A.colorSpace);Ne(_e,A,Pe);let Ee;const ze=A.mipmaps,xt=o&&A.isVideoTexture!==!0,B=ce.__version===void 0||ge===!0,Me=b(A,Q,Pe);if(A.isDepthTexture)Re=s.DEPTH_COMPONENT,o?A.type===ji?Re=s.DEPTH_COMPONENT32F:A.type===mr?Re=s.DEPTH_COMPONENT24:A.type===qr?Re=s.DEPTH24_STENCIL8:Re=s.DEPTH_COMPONENT16:A.type===ji&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),A.format===$r&&Re===s.DEPTH_COMPONENT&&A.type!==Tu&&A.type!==mr&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),A.type=mr,Ie=r.convert(A.type)),A.format===ta&&Re===s.DEPTH_COMPONENT&&(Re=s.DEPTH_STENCIL,A.type!==qr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),A.type=qr,Ie=r.convert(A.type))),B&&(xt?t.texStorage2D(s.TEXTURE_2D,1,Re,Q.width,Q.height):t.texImage2D(s.TEXTURE_2D,0,Re,Q.width,Q.height,0,De,Ie,null));else if(A.isDataTexture)if(ze.length>0&&Pe){xt&&B&&t.texStorage2D(s.TEXTURE_2D,Me,Re,ze[0].width,ze[0].height);for(let J=0,ve=ze.length;J<ve;J++)Ee=ze[J],xt?t.texSubImage2D(s.TEXTURE_2D,J,0,0,Ee.width,Ee.height,De,Ie,Ee.data):t.texImage2D(s.TEXTURE_2D,J,Re,Ee.width,Ee.height,0,De,Ie,Ee.data);A.generateMipmaps=!1}else xt?(B&&t.texStorage2D(s.TEXTURE_2D,Me,Re,Q.width,Q.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,Q.width,Q.height,De,Ie,Q.data)):t.texImage2D(s.TEXTURE_2D,0,Re,Q.width,Q.height,0,De,Ie,Q.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){xt&&B&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Me,Re,ze[0].width,ze[0].height,Q.depth);for(let J=0,ve=ze.length;J<ve;J++)Ee=ze[J],A.format!==si?De!==null?xt?t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,J,0,0,0,Ee.width,Ee.height,Q.depth,De,Ee.data,0,0):t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,J,Re,Ee.width,Ee.height,Q.depth,0,Ee.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):xt?t.texSubImage3D(s.TEXTURE_2D_ARRAY,J,0,0,0,Ee.width,Ee.height,Q.depth,De,Ie,Ee.data):t.texImage3D(s.TEXTURE_2D_ARRAY,J,Re,Ee.width,Ee.height,Q.depth,0,De,Ie,Ee.data)}else{xt&&B&&t.texStorage2D(s.TEXTURE_2D,Me,Re,ze[0].width,ze[0].height);for(let J=0,ve=ze.length;J<ve;J++)Ee=ze[J],A.format!==si?De!==null?xt?t.compressedTexSubImage2D(s.TEXTURE_2D,J,0,0,Ee.width,Ee.height,De,Ee.data):t.compressedTexImage2D(s.TEXTURE_2D,J,Re,Ee.width,Ee.height,0,Ee.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):xt?t.texSubImage2D(s.TEXTURE_2D,J,0,0,Ee.width,Ee.height,De,Ie,Ee.data):t.texImage2D(s.TEXTURE_2D,J,Re,Ee.width,Ee.height,0,De,Ie,Ee.data)}else if(A.isDataArrayTexture)xt?(B&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Me,Re,Q.width,Q.height,Q.depth),t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,De,Ie,Q.data)):t.texImage3D(s.TEXTURE_2D_ARRAY,0,Re,Q.width,Q.height,Q.depth,0,De,Ie,Q.data);else if(A.isData3DTexture)xt?(B&&t.texStorage3D(s.TEXTURE_3D,Me,Re,Q.width,Q.height,Q.depth),t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,De,Ie,Q.data)):t.texImage3D(s.TEXTURE_3D,0,Re,Q.width,Q.height,Q.depth,0,De,Ie,Q.data);else if(A.isFramebufferTexture){if(B)if(xt)t.texStorage2D(s.TEXTURE_2D,Me,Re,Q.width,Q.height);else{let J=Q.width,ve=Q.height;for(let be=0;be<Me;be++)t.texImage2D(s.TEXTURE_2D,be,Re,J,ve,0,De,Ie,null),J>>=1,ve>>=1}}else if(ze.length>0&&Pe){xt&&B&&t.texStorage2D(s.TEXTURE_2D,Me,Re,ze[0].width,ze[0].height);for(let J=0,ve=ze.length;J<ve;J++)Ee=ze[J],xt?t.texSubImage2D(s.TEXTURE_2D,J,0,0,De,Ie,Ee):t.texImage2D(s.TEXTURE_2D,J,Re,De,Ie,Ee);A.generateMipmaps=!1}else xt?(B&&t.texStorage2D(s.TEXTURE_2D,Me,Re,Q.width,Q.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,De,Ie,Q)):t.texImage2D(s.TEXTURE_2D,0,Re,De,Ie,Q);w(A,Pe)&&R(_e),ce.__version=U.version,A.onUpdate&&A.onUpdate(A)}I.__version=A.version}function kt(I,A,te){if(A.image.length!==6)return;const _e=Ke(I,A),ge=A.source;t.bindTexture(s.TEXTURE_CUBE_MAP,I.__webglTexture,s.TEXTURE0+te);const U=n.get(ge);if(ge.version!==U.__version||_e===!0){t.activeTexture(s.TEXTURE0+te),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,A.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,A.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.NONE);const ce=A.isCompressedTexture||A.image[0].isCompressedTexture,me=A.image[0]&&A.image[0].isDataTexture,Q=[];for(let J=0;J<6;J++)!ce&&!me?Q[J]=y(A.image[J],!1,!0,c):Q[J]=me?A.image[J].image:A.image[J],Q[J]=$t(A,Q[J]);const Pe=Q[0],De=T(Pe)||o,Ie=r.convert(A.format,A.colorSpace),Re=r.convert(A.type),Ee=P(A.internalFormat,Ie,Re,A.colorSpace),ze=o&&A.isVideoTexture!==!0,xt=U.__version===void 0||_e===!0;let B=b(A,Pe,De);Ne(s.TEXTURE_CUBE_MAP,A,De);let Me;if(ce){ze&&xt&&t.texStorage2D(s.TEXTURE_CUBE_MAP,B,Ee,Pe.width,Pe.height);for(let J=0;J<6;J++){Me=Q[J].mipmaps;for(let ve=0;ve<Me.length;ve++){const be=Me[ve];A.format!==si?Ie!==null?ze?t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,ve,0,0,be.width,be.height,Ie,be.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,ve,Ee,be.width,be.height,0,be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ze?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,ve,0,0,be.width,be.height,Ie,Re,be.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,ve,Ee,be.width,be.height,0,Ie,Re,be.data)}}}else{Me=A.mipmaps,ze&&xt&&(Me.length>0&&B++,t.texStorage2D(s.TEXTURE_CUBE_MAP,B,Ee,Q[0].width,Q[0].height));for(let J=0;J<6;J++)if(me){ze?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Q[J].width,Q[J].height,Ie,Re,Q[J].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Ee,Q[J].width,Q[J].height,0,Ie,Re,Q[J].data);for(let ve=0;ve<Me.length;ve++){const ht=Me[ve].image[J].image;ze?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,ve+1,0,0,ht.width,ht.height,Ie,Re,ht.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,ve+1,Ee,ht.width,ht.height,0,Ie,Re,ht.data)}}else{ze?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Ie,Re,Q[J]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Ee,Ie,Re,Q[J]);for(let ve=0;ve<Me.length;ve++){const be=Me[ve];ze?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,ve+1,0,0,Ie,Re,be.image[J]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,ve+1,Ee,Ie,Re,be.image[J])}}}w(A,De)&&R(s.TEXTURE_CUBE_MAP),U.__version=ge.version,A.onUpdate&&A.onUpdate(A)}I.__version=A.version}function et(I,A,te,_e,ge){const U=r.convert(te.format,te.colorSpace),ce=r.convert(te.type),me=P(te.internalFormat,U,ce,te.colorSpace);n.get(A).__hasExternalTextures||(ge===s.TEXTURE_3D||ge===s.TEXTURE_2D_ARRAY?t.texImage3D(ge,0,me,A.width,A.height,A.depth,0,U,ce,null):t.texImage2D(ge,0,me,A.width,A.height,0,U,ce,null)),t.bindFramebuffer(s.FRAMEBUFFER,I),ut(A)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,_e,ge,n.get(te).__webglTexture,0,Xe(A)):(ge===s.TEXTURE_2D||ge>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ge<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,_e,ge,n.get(te).__webglTexture,0),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Y(I,A,te){if(s.bindRenderbuffer(s.RENDERBUFFER,I),A.depthBuffer&&!A.stencilBuffer){let _e=s.DEPTH_COMPONENT16;if(te||ut(A)){const ge=A.depthTexture;ge&&ge.isDepthTexture&&(ge.type===ji?_e=s.DEPTH_COMPONENT32F:ge.type===mr&&(_e=s.DEPTH_COMPONENT24));const U=Xe(A);ut(A)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,U,_e,A.width,A.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,U,_e,A.width,A.height)}else s.renderbufferStorage(s.RENDERBUFFER,_e,A.width,A.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,I)}else if(A.depthBuffer&&A.stencilBuffer){const _e=Xe(A);te&&ut(A)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,_e,s.DEPTH24_STENCIL8,A.width,A.height):ut(A)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,_e,s.DEPTH24_STENCIL8,A.width,A.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,A.width,A.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,I)}else{const _e=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let ge=0;ge<_e.length;ge++){const U=_e[ge],ce=r.convert(U.format,U.colorSpace),me=r.convert(U.type),Q=P(U.internalFormat,ce,me,U.colorSpace),Pe=Xe(A);te&&ut(A)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Pe,Q,A.width,A.height):ut(A)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Pe,Q,A.width,A.height):s.renderbufferStorage(s.RENDERBUFFER,Q,A.width,A.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function qt(I,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,I),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(A.depthTexture).__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),ue(A.depthTexture,0);const _e=n.get(A.depthTexture).__webglTexture,ge=Xe(A);if(A.depthTexture.format===$r)ut(A)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,_e,0,ge):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,_e,0);else if(A.depthTexture.format===ta)ut(A)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,_e,0,ge):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,_e,0);else throw new Error("Unknown depthTexture format")}function Ue(I){const A=n.get(I),te=I.isWebGLCubeRenderTarget===!0;if(I.depthTexture&&!A.__autoAllocateDepthBuffer){if(te)throw new Error("target.depthTexture not supported in Cube render targets");qt(A.__webglFramebuffer,I)}else if(te){A.__webglDepthbuffer=[];for(let _e=0;_e<6;_e++)t.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer[_e]),A.__webglDepthbuffer[_e]=s.createRenderbuffer(),Y(A.__webglDepthbuffer[_e],I,!1)}else t.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer=s.createRenderbuffer(),Y(A.__webglDepthbuffer,I,!1);t.bindFramebuffer(s.FRAMEBUFFER,null)}function $e(I,A,te){const _e=n.get(I);A!==void 0&&et(_e.__webglFramebuffer,I,I.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D),te!==void 0&&Ue(I)}function Fe(I){const A=I.texture,te=n.get(I),_e=n.get(A);I.addEventListener("dispose",ae),I.isWebGLMultipleRenderTargets!==!0&&(_e.__webglTexture===void 0&&(_e.__webglTexture=s.createTexture()),_e.__version=A.version,a.memory.textures++);const ge=I.isWebGLCubeRenderTarget===!0,U=I.isWebGLMultipleRenderTargets===!0,ce=T(I)||o;if(ge){te.__webglFramebuffer=[];for(let me=0;me<6;me++)te.__webglFramebuffer[me]=s.createFramebuffer()}else{if(te.__webglFramebuffer=s.createFramebuffer(),U)if(i.drawBuffers){const me=I.texture;for(let Q=0,Pe=me.length;Q<Pe;Q++){const De=n.get(me[Q]);De.__webglTexture===void 0&&(De.__webglTexture=s.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&I.samples>0&&ut(I)===!1){const me=U?A:[A];te.__webglMultisampledFramebuffer=s.createFramebuffer(),te.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,te.__webglMultisampledFramebuffer);for(let Q=0;Q<me.length;Q++){const Pe=me[Q];te.__webglColorRenderbuffer[Q]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,te.__webglColorRenderbuffer[Q]);const De=r.convert(Pe.format,Pe.colorSpace),Ie=r.convert(Pe.type),Re=P(Pe.internalFormat,De,Ie,Pe.colorSpace,I.isXRRenderTarget===!0),Ee=Xe(I);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ee,Re,I.width,I.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Q,s.RENDERBUFFER,te.__webglColorRenderbuffer[Q])}s.bindRenderbuffer(s.RENDERBUFFER,null),I.depthBuffer&&(te.__webglDepthRenderbuffer=s.createRenderbuffer(),Y(te.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ge){t.bindTexture(s.TEXTURE_CUBE_MAP,_e.__webglTexture),Ne(s.TEXTURE_CUBE_MAP,A,ce);for(let me=0;me<6;me++)et(te.__webglFramebuffer[me],I,A,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+me);w(A,ce)&&R(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(U){const me=I.texture;for(let Q=0,Pe=me.length;Q<Pe;Q++){const De=me[Q],Ie=n.get(De);t.bindTexture(s.TEXTURE_2D,Ie.__webglTexture),Ne(s.TEXTURE_2D,De,ce),et(te.__webglFramebuffer,I,De,s.COLOR_ATTACHMENT0+Q,s.TEXTURE_2D),w(De,ce)&&R(s.TEXTURE_2D)}t.unbindTexture()}else{let me=s.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(o?me=I.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(me,_e.__webglTexture),Ne(me,A,ce),et(te.__webglFramebuffer,I,A,s.COLOR_ATTACHMENT0,me),w(A,ce)&&R(me),t.unbindTexture()}I.depthBuffer&&Ue(I)}function vt(I){const A=T(I)||o,te=I.isWebGLMultipleRenderTargets===!0?I.texture:[I.texture];for(let _e=0,ge=te.length;_e<ge;_e++){const U=te[_e];if(w(U,A)){const ce=I.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,me=n.get(U).__webglTexture;t.bindTexture(ce,me),R(ce),t.unbindTexture()}}}function Ye(I){if(o&&I.samples>0&&ut(I)===!1){const A=I.isWebGLMultipleRenderTargets?I.texture:[I.texture],te=I.width,_e=I.height;let ge=s.COLOR_BUFFER_BIT;const U=[],ce=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,me=n.get(I),Q=I.isWebGLMultipleRenderTargets===!0;if(Q)for(let Pe=0;Pe<A.length;Pe++)t.bindFramebuffer(s.FRAMEBUFFER,me.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Pe,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,me.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Pe,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,me.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,me.__webglFramebuffer);for(let Pe=0;Pe<A.length;Pe++){U.push(s.COLOR_ATTACHMENT0+Pe),I.depthBuffer&&U.push(ce);const De=me.__ignoreDepthValues!==void 0?me.__ignoreDepthValues:!1;if(De===!1&&(I.depthBuffer&&(ge|=s.DEPTH_BUFFER_BIT),I.stencilBuffer&&(ge|=s.STENCIL_BUFFER_BIT)),Q&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,me.__webglColorRenderbuffer[Pe]),De===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[ce]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[ce])),Q){const Ie=n.get(A[Pe]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Ie,0)}s.blitFramebuffer(0,0,te,_e,0,0,te,_e,ge,s.NEAREST),d&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,U)}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Q)for(let Pe=0;Pe<A.length;Pe++){t.bindFramebuffer(s.FRAMEBUFFER,me.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Pe,s.RENDERBUFFER,me.__webglColorRenderbuffer[Pe]);const De=n.get(A[Pe]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,me.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Pe,s.TEXTURE_2D,De,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,me.__webglMultisampledFramebuffer)}}function Xe(I){return Math.min(h,I.samples)}function ut(I){const A=n.get(I);return o&&I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function Vt(I){const A=a.render.frame;v.get(I)!==A&&(v.set(I,A),I.update())}function $t(I,A){const te=I.colorSpace,_e=I.format,ge=I.type;return I.isCompressedTexture===!0||I.format===Jc||te!==Ci&&te!==jr&&(te===Ve?o===!1?e.has("EXT_sRGB")===!0&&_e===si?(I.format=Jc,I.minFilter=Un,I.generateMipmaps=!1):A=em.sRGBToLinear(A):(_e!==si||ge!==br)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",te)),A}this.allocateTextureUnit=ee,this.resetTextureUnits=K,this.setTexture2D=ue,this.setTexture2DArray=Te,this.setTexture3D=Z,this.setTextureCube=fe,this.rebindTextures=$e,this.setupRenderTarget=Fe,this.updateRenderTargetMipmap=vt,this.updateMultisampleRenderTarget=Ye,this.setupDepthRenderbuffer=Ue,this.setupFrameBufferTexture=et,this.useMultisampledRTT=ut}function sT(s,e,t){const n=t.isWebGL2;function i(r,a=jr){let o;if(r===br)return s.UNSIGNED_BYTE;if(r===Vp)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Wp)return s.UNSIGNED_SHORT_5_5_5_1;if(r===Rx)return s.BYTE;if(r===Cx)return s.SHORT;if(r===Tu)return s.UNSIGNED_SHORT;if(r===Gp)return s.INT;if(r===mr)return s.UNSIGNED_INT;if(r===ji)return s.FLOAT;if(r===$a)return n?s.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===Lx)return s.ALPHA;if(r===si)return s.RGBA;if(r===Px)return s.LUMINANCE;if(r===Dx)return s.LUMINANCE_ALPHA;if(r===$r)return s.DEPTH_COMPONENT;if(r===ta)return s.DEPTH_STENCIL;if(r===Jc)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===Ix)return s.RED;if(r===Xp)return s.RED_INTEGER;if(r===Ux)return s.RG;if(r===qp)return s.RG_INTEGER;if(r===$p)return s.RGBA_INTEGER;if(r===ec||r===tc||r===nc||r===ic)if(a===Ve)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===ec)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===tc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===nc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===ic)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===ec)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===tc)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===nc)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===ic)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===vf||r===xf||r===yf||r===Mf)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===vf)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===xf)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===yf)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Mf)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Nx)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===bf||r===Sf)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(r===bf)return a===Ve?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===Sf)return a===Ve?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Ef||r===Tf||r===wf||r===Af||r===Rf||r===Cf||r===Lf||r===Pf||r===Df||r===If||r===Uf||r===Nf||r===Of||r===Ff)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(r===Ef)return a===Ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Tf)return a===Ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===wf)return a===Ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Af)return a===Ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Rf)return a===Ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Cf)return a===Ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Lf)return a===Ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Pf)return a===Ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Df)return a===Ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===If)return a===Ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Uf)return a===Ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Nf)return a===Ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Of)return a===Ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Ff)return a===Ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===rc)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(r===rc)return a===Ve?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(r===Ox||r===kf||r===Bf||r===zf)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(r===rc)return o.COMPRESSED_RED_RGTC1_EXT;if(r===kf)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Bf)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===zf)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===qr?n?s.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):s[r]!==void 0?s[r]:null}return{convert:i}}class aT extends Pn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class gr extends Gt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const oT={type:"move"};class Ac{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new gr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new gr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new gr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const p of e.hand.values()){const g=t.getJointPose(p,n),m=this._getHandJoint(c,p);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,v=.005;c.inputState.pinching&&f>d+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(oT)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new gr;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class lT extends xn{constructor(e,t,n,i,r,a,o,l,c,u){if(u=u!==void 0?u:$r,u!==$r&&u!==ta)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===$r&&(n=mr),n===void 0&&u===ta&&(n=qr),super(null,i,r,a,o,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:an,this.minFilter=l!==void 0?l:an,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class cT extends os{constructor(e,t){super();const n=this;let i=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,f=null,d=null,v=null;const p=t.getContextAttributes();let g=null,m=null;const S=[],y=[];let T=null;const E=new Pn;E.layers.enable(1),E.viewport=new Ct;const w=new Pn;w.layers.enable(2),w.viewport=new Ct;const R=[E,w],P=new aT;P.layers.enable(1),P.layers.enable(2);let b=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getCamera=function(){},this.setUserCamera=function(Z){T=Z},this.getController=function(Z){let fe=S[Z];return fe===void 0&&(fe=new Ac,S[Z]=fe),fe.getTargetRaySpace()},this.getControllerGrip=function(Z){let fe=S[Z];return fe===void 0&&(fe=new Ac,S[Z]=fe),fe.getGripSpace()},this.getHand=function(Z){let fe=S[Z];return fe===void 0&&(fe=new Ac,S[Z]=fe),fe.getHandSpace()};function $(Z){const fe=y.indexOf(Z.inputSource);if(fe===-1)return;const le=S[fe];le!==void 0&&(le.update(Z.inputSource,Z.frame,c||a),le.dispatchEvent({type:Z.type,data:Z.inputSource}))}function ae(){i.removeEventListener("select",$),i.removeEventListener("selectstart",$),i.removeEventListener("selectend",$),i.removeEventListener("squeeze",$),i.removeEventListener("squeezestart",$),i.removeEventListener("squeezeend",$),i.removeEventListener("end",ae),i.removeEventListener("inputsourceschange",G);for(let Z=0;Z<S.length;Z++){const fe=y[Z];fe!==null&&(y[Z]=null,S[Z].disconnect(fe))}b=null,D=null,e.setRenderTarget(g),d=null,f=null,h=null,i=null,m=null,Te.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h},this.getFrame=function(){return v},this.getSession=function(){return i},this.setSession=async function(Z){if(i=Z,i!==null){if(g=e.getRenderTarget(),i.addEventListener("select",$),i.addEventListener("selectstart",$),i.addEventListener("selectend",$),i.addEventListener("squeeze",$),i.addEventListener("squeezestart",$),i.addEventListener("squeezeend",$),i.addEventListener("end",ae),i.addEventListener("inputsourceschange",G),p.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const fe={antialias:i.renderState.layers===void 0?p.antialias:!0,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(i,t,fe),i.updateRenderState({baseLayer:d}),m=new es(d.framebufferWidth,d.framebufferHeight,{format:si,type:br,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let fe=null,le=null,ye=null;p.depth&&(ye=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,fe=p.stencil?ta:$r,le=p.stencil?qr:mr);const we={colorFormat:t.RGBA8,depthFormat:ye,scaleFactor:r};h=new XRWebGLBinding(i,t),f=h.createProjectionLayer(we),i.updateRenderState({layers:[f]}),m=new es(f.textureWidth,f.textureHeight,{format:si,type:br,depthTexture:new lT(f.textureWidth,f.textureHeight,le,void 0,void 0,void 0,void 0,void 0,void 0,fe),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0});const Ne=e.properties.get(m);Ne.__ignoreDepthValues=f.ignoreDepthValues}m.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),Te.setContext(i),Te.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function G(Z){for(let fe=0;fe<Z.removed.length;fe++){const le=Z.removed[fe],ye=y.indexOf(le);ye>=0&&(y[ye]=null,S[ye].disconnect(le))}for(let fe=0;fe<Z.added.length;fe++){const le=Z.added[fe];let ye=y.indexOf(le);if(ye===-1){for(let Ne=0;Ne<S.length;Ne++)if(Ne>=y.length){y.push(le),ye=Ne;break}else if(y[Ne]===null){y[Ne]=le,ye=Ne;break}if(ye===-1)break}const we=S[ye];we&&we.connect(le)}}const F=new z,V=new z;function re(Z,fe,le){F.setFromMatrixPosition(fe.matrixWorld),V.setFromMatrixPosition(le.matrixWorld);const ye=F.distanceTo(V),we=fe.projectionMatrix.elements,Ne=le.projectionMatrix.elements,Ke=we[14]/(we[10]-1),Be=we[14]/(we[10]+1),kt=(we[9]+1)/we[5],et=(we[9]-1)/we[5],Y=(we[8]-1)/we[0],qt=(Ne[8]+1)/Ne[0],Ue=Ke*Y,$e=Ke*qt,Fe=ye/(-Y+qt),vt=Fe*-Y;fe.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(vt),Z.translateZ(Fe),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert();const Ye=Ke+Fe,Xe=Be+Fe,ut=Ue-vt,Vt=$e+(ye-vt),$t=kt*Be/Xe*Ye,I=et*Be/Xe*Ye;Z.projectionMatrix.makePerspective(ut,Vt,$t,I,Ye,Xe),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}function K(Z,fe){fe===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(fe.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCameraXR=function(Z){if(i===null)return Z;T&&(Z=T),P.near=w.near=E.near=Z.near,P.far=w.far=E.far=Z.far,(b!==P.near||D!==P.far)&&(i.updateRenderState({depthNear:P.near,depthFar:P.far}),b=P.near,D=P.far);const fe=Z.parent,le=P.cameras;K(P,fe);for(let ye=0;ye<le.length;ye++)K(le[ye],fe);return le.length===2?re(P,E,w):P.projectionMatrix.copy(E.projectionMatrix),T&&ee(P,fe),P};function ee(Z,fe){const le=T;fe===null?le.matrix.copy(Z.matrixWorld):(le.matrix.copy(fe.matrixWorld),le.matrix.invert(),le.matrix.multiply(Z.matrixWorld)),le.matrix.decompose(le.position,le.quaternion,le.scale),le.updateMatrixWorld(!0);const ye=le.children;for(let we=0,Ne=ye.length;we<Ne;we++)ye[we].updateMatrixWorld(!0);le.projectionMatrix.copy(Z.projectionMatrix),le.projectionMatrixInverse.copy(Z.projectionMatrixInverse),le.isPerspectiveCamera&&(le.fov=ia*2*Math.atan(1/le.projectionMatrix.elements[5]),le.zoom=1)}this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(Z){l=Z,f!==null&&(f.fixedFoveation=Z),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Z)};let oe=null;function ue(Z,fe){if(u=fe.getViewerPose(c||a),v=fe,u!==null){const le=u.views;d!==null&&(e.setRenderTargetFramebuffer(m,d.framebuffer),e.setRenderTarget(m));let ye=!1;le.length!==P.cameras.length&&(P.cameras.length=0,ye=!0);for(let we=0;we<le.length;we++){const Ne=le[we];let Ke=null;if(d!==null)Ke=d.getViewport(Ne);else{const kt=h.getViewSubImage(f,Ne);Ke=kt.viewport,we===0&&(e.setRenderTargetTextures(m,kt.colorTexture,f.ignoreDepthValues?void 0:kt.depthStencilTexture),e.setRenderTarget(m))}let Be=R[we];Be===void 0&&(Be=new Pn,Be.layers.enable(we),Be.viewport=new Ct,R[we]=Be),Be.matrix.fromArray(Ne.transform.matrix),Be.matrix.decompose(Be.position,Be.quaternion,Be.scale),Be.projectionMatrix.fromArray(Ne.projectionMatrix),Be.projectionMatrixInverse.copy(Be.projectionMatrix).invert(),Be.viewport.set(Ke.x,Ke.y,Ke.width,Ke.height),we===0&&(P.matrix.copy(Be.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale)),ye===!0&&P.cameras.push(Be)}}for(let le=0;le<S.length;le++){const ye=y[le],we=S[le];ye!==null&&we!==void 0&&we.update(ye,fe,c||a)}oe&&oe(Z,fe),fe.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:fe}),v=null}const Te=new lm;Te.setAnimationLoop(ue),this.setAnimationLoop=function(Z){oe=Z},this.dispose=function(){}}}function uT(s,e){function t(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,am(s)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function i(g,m,S,y,T){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(g,m):m.isMeshToonMaterial?(r(g,m),h(g,m)):m.isMeshPhongMaterial?(r(g,m),u(g,m)):m.isMeshStandardMaterial?(r(g,m),f(g,m),m.isMeshPhysicalMaterial&&d(g,m,T)):m.isMeshMatcapMaterial?(r(g,m),v(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),p(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(a(g,m),m.isLineDashedMaterial&&o(g,m)):m.isPointsMaterial?l(g,m,S,y):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,t(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===On&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,t(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===On&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,t(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,t(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);const S=e.get(m).envMap;if(S&&(g.envMap.value=S,g.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap){g.lightMap.value=m.lightMap;const y=s.useLegacyLights===!0?Math.PI:1;g.lightMapIntensity.value=m.lightMapIntensity*y,t(m.lightMap,g.lightMapTransform)}m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,g.aoMapTransform))}function a(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform))}function o(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,S,y){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*S,g.scale.value=y*.5,m.map&&(g.map.value=m.map,t(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function u(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function h(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function f(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,g.roughnessMapTransform)),e.get(m).envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function d(g,m,S){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===On&&g.clearcoatNormalScale.value.negate())),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=S.texture,g.transmissionSamplerSize.value.set(S.width,S.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,g.specularIntensityMapTransform))}function v(g,m){m.matcap&&(g.matcap.value=m.matcap)}function p(g,m){const S=e.get(m).light;g.referencePosition.value.setFromMatrixPosition(S.matrixWorld),g.nearDistance.value=S.shadow.camera.near,g.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function hT(s,e,t,n){let i={},r={},a=[];const o=t.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(S,y){const T=y.program;n.uniformBlockBinding(S,T)}function c(S,y){let T=i[S.id];T===void 0&&(v(S),T=u(S),i[S.id]=T,S.addEventListener("dispose",g));const E=y.program;n.updateUBOMapping(S,E);const w=e.render.frame;r[S.id]!==w&&(f(S),r[S.id]=w)}function u(S){const y=h();S.__bindingPointIndex=y;const T=s.createBuffer(),E=S.__size,w=S.usage;return s.bindBuffer(s.UNIFORM_BUFFER,T),s.bufferData(s.UNIFORM_BUFFER,E,w),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,y,T),T}function h(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(S){const y=i[S.id],T=S.uniforms,E=S.__cache;s.bindBuffer(s.UNIFORM_BUFFER,y);for(let w=0,R=T.length;w<R;w++){const P=T[w];if(d(P,w,E)===!0){const b=P.__offset,D=Array.isArray(P.value)?P.value:[P.value];let $=0;for(let ae=0;ae<D.length;ae++){const G=D[ae],F=p(G);typeof G=="number"?(P.__data[0]=G,s.bufferSubData(s.UNIFORM_BUFFER,b+$,P.__data)):G.isMatrix3?(P.__data[0]=G.elements[0],P.__data[1]=G.elements[1],P.__data[2]=G.elements[2],P.__data[3]=G.elements[0],P.__data[4]=G.elements[3],P.__data[5]=G.elements[4],P.__data[6]=G.elements[5],P.__data[7]=G.elements[0],P.__data[8]=G.elements[6],P.__data[9]=G.elements[7],P.__data[10]=G.elements[8],P.__data[11]=G.elements[0]):(G.toArray(P.__data,$),$+=F.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,b,P.__data)}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function d(S,y,T){const E=S.value;if(T[y]===void 0){if(typeof E=="number")T[y]=E;else{const w=Array.isArray(E)?E:[E],R=[];for(let P=0;P<w.length;P++)R.push(w[P].clone());T[y]=R}return!0}else if(typeof E=="number"){if(T[y]!==E)return T[y]=E,!0}else{const w=Array.isArray(T[y])?T[y]:[T[y]],R=Array.isArray(E)?E:[E];for(let P=0;P<w.length;P++){const b=w[P];if(b.equals(R[P])===!1)return b.copy(R[P]),!0}}return!1}function v(S){const y=S.uniforms;let T=0;const E=16;let w=0;for(let R=0,P=y.length;R<P;R++){const b=y[R],D={boundary:0,storage:0},$=Array.isArray(b.value)?b.value:[b.value];for(let ae=0,G=$.length;ae<G;ae++){const F=$[ae],V=p(F);D.boundary+=V.boundary,D.storage+=V.storage}if(b.__data=new Float32Array(D.storage/Float32Array.BYTES_PER_ELEMENT),b.__offset=T,R>0){w=T%E;const ae=E-w;w!==0&&ae-D.boundary<0&&(T+=E-w,b.__offset=T)}T+=D.storage}return w=T%E,w>0&&(T+=E-w),S.__size=T,S.__cache={},this}function p(S){const y={boundary:0,storage:0};return typeof S=="number"?(y.boundary=4,y.storage=4):S.isVector2?(y.boundary=8,y.storage=8):S.isVector3||S.isColor?(y.boundary=16,y.storage=12):S.isVector4?(y.boundary=16,y.storage=16):S.isMatrix3?(y.boundary=48,y.storage=48):S.isMatrix4?(y.boundary=64,y.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),y}function g(S){const y=S.target;y.removeEventListener("dispose",g);const T=a.indexOf(y.__bindingPointIndex);a.splice(T,1),s.deleteBuffer(i[y.id]),delete i[y.id],delete r[y.id]}function m(){for(const S in i)s.deleteBuffer(i[S]);a=[],i={},r={}}return{bind:l,update:c,dispose:m}}function fT(){const s=ja("canvas");return s.style.display="block",s}class tu{constructor(e={}){const{canvas:t=fT(),context:n=null,depth:i=!0,stencil:r=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let f;n!==null?f=n.getContextAttributes().alpha:f=a;const d=new Uint32Array(4),v=new Int32Array(4);let p=null,g=null;const m=[],S=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=Ve,this.useLegacyLights=!0,this.toneMapping=Ji,this.toneMappingExposure=1;const y=this;let T=!1,E=0,w=0,R=null,P=-1,b=null;const D=new Ct,$=new Ct;let ae=null;const G=new Qe(0);let F=0,V=t.width,re=t.height,K=1,ee=null,oe=null;const ue=new Ct(0,0,V,re),Te=new Ct(0,0,V,re);let Z=!1;const fe=new Cu;let le=!1,ye=!1,we=null;const Ne=new at,Ke=new We,Be=new z,kt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function et(){return R===null?K:1}let Y=n;function qt(C,j){for(let ne=0;ne<C.length;ne++){const X=C[ne],ie=t.getContext(X,j);if(ie!==null)return ie}return null}try{const C={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Eu}`),t.addEventListener("webglcontextlost",Me,!1),t.addEventListener("webglcontextrestored",J,!1),t.addEventListener("webglcontextcreationerror",ve,!1),Y===null){const j=["webgl2","webgl","experimental-webgl"];if(y.isWebGL1Renderer===!0&&j.shift(),Y=qt(j,C),Y===null)throw qt(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}Y instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),Y.getShaderPrecisionFormat===void 0&&(Y.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let Ue,$e,Fe,vt,Ye,Xe,ut,Vt,$t,I,A,te,_e,ge,U,ce,me,Q,Pe,De,Ie,Re,Ee,ze;function xt(){Ue=new SS(Y),$e=new _S(Y,Ue,e),Ue.init($e),Re=new sT(Y,Ue,$e),Fe=new iT(Y,Ue,$e),vt=new wS(Y),Ye=new VE,Xe=new rT(Y,Ue,Fe,Ye,$e,Re,vt),ut=new xS(y),Vt=new bS(y),$t=new ky(Y,$e),Ee=new mS(Y,Ue,$t,$e),I=new ES(Y,$t,vt,Ee),A=new LS(Y,I,$t,vt),Pe=new CS(Y,$e,Xe),ce=new vS(Ye),te=new GE(y,ut,Vt,Ue,$e,Ee,ce),_e=new uT(y,Ye),ge=new XE,U=new ZE(Ue,$e),Q=new pS(y,ut,Vt,Fe,A,f,l),me=new nT(y,A,$e),ze=new hT(Y,vt,$e,Fe),De=new gS(Y,Ue,vt,$e),Ie=new TS(Y,Ue,vt,$e),vt.programs=te.programs,y.capabilities=$e,y.extensions=Ue,y.properties=Ye,y.renderLists=ge,y.shadowMap=me,y.state=Fe,y.info=vt}xt();const B=new cT(y,Y);this.xr=B,this.getContext=function(){return Y},this.getContextAttributes=function(){return Y.getContextAttributes()},this.forceContextLoss=function(){const C=Ue.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=Ue.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(C){C!==void 0&&(K=C,this.setSize(V,re,!1))},this.getSize=function(C){return C.set(V,re)},this.setSize=function(C,j,ne=!0){if(B.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=C,re=j,t.width=Math.floor(C*K),t.height=Math.floor(j*K),ne===!0&&(t.style.width=C+"px",t.style.height=j+"px"),this.setViewport(0,0,C,j)},this.getDrawingBufferSize=function(C){return C.set(V*K,re*K).floor()},this.setDrawingBufferSize=function(C,j,ne){V=C,re=j,K=ne,t.width=Math.floor(C*ne),t.height=Math.floor(j*ne),this.setViewport(0,0,C,j)},this.getCurrentViewport=function(C){return C.copy(D)},this.getViewport=function(C){return C.copy(ue)},this.setViewport=function(C,j,ne,X){C.isVector4?ue.set(C.x,C.y,C.z,C.w):ue.set(C,j,ne,X),Fe.viewport(D.copy(ue).multiplyScalar(K).floor())},this.getScissor=function(C){return C.copy(Te)},this.setScissor=function(C,j,ne,X){C.isVector4?Te.set(C.x,C.y,C.z,C.w):Te.set(C,j,ne,X),Fe.scissor($.copy(Te).multiplyScalar(K).floor())},this.getScissorTest=function(){return Z},this.setScissorTest=function(C){Fe.setScissorTest(Z=C)},this.setOpaqueSort=function(C){ee=C},this.setTransparentSort=function(C){oe=C},this.getClearColor=function(C){return C.copy(Q.getClearColor())},this.setClearColor=function(){Q.setClearColor.apply(Q,arguments)},this.getClearAlpha=function(){return Q.getClearAlpha()},this.setClearAlpha=function(){Q.setClearAlpha.apply(Q,arguments)},this.clear=function(C=!0,j=!0,ne=!0){let X=0;if(C){let ie=!1;if(R!==null){const Ce=R.texture.format;ie=Ce===$p||Ce===qp||Ce===Xp}if(ie){const Ce=R.texture.type,Oe=Ce===br||Ce===mr||Ce===Tu||Ce===qr||Ce===Vp||Ce===Wp,He=Q.getClearColor(),Ge=Q.getClearAlpha(),Je=He.r,qe=He.g,je=He.b,Et=Ye.get(R).__webglFramebuffer;Oe?(d[0]=Je,d[1]=qe,d[2]=je,d[3]=Ge,Y.clearBufferuiv(Y.COLOR,Et,d)):(v[0]=Je,v[1]=qe,v[2]=je,v[3]=Ge,Y.clearBufferiv(Y.COLOR,Et,v))}else X|=Y.COLOR_BUFFER_BIT}j&&(X|=Y.DEPTH_BUFFER_BIT),ne&&(X|=Y.STENCIL_BUFFER_BIT),Y.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Me,!1),t.removeEventListener("webglcontextrestored",J,!1),t.removeEventListener("webglcontextcreationerror",ve,!1),ge.dispose(),U.dispose(),Ye.dispose(),ut.dispose(),Vt.dispose(),A.dispose(),Ee.dispose(),ze.dispose(),te.dispose(),B.dispose(),B.removeEventListener("sessionstart",Ut),B.removeEventListener("sessionend",Qn),we&&(we.dispose(),we=null),cn.stop()};function Me(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function J(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const C=vt.autoReset,j=me.enabled,ne=me.autoUpdate,X=me.needsUpdate,ie=me.type;xt(),vt.autoReset=C,me.enabled=j,me.autoUpdate=ne,me.needsUpdate=X,me.type=ie}function ve(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function be(C){const j=C.target;j.removeEventListener("dispose",be),ht(j)}function ht(C){It(C),Ye.remove(C)}function It(C){const j=Ye.get(C).programs;j!==void 0&&(j.forEach(function(ne){te.releaseProgram(ne)}),C.isShaderMaterial&&te.releaseShaderCache(C))}this.renderBufferDirect=function(C,j,ne,X,ie,Ce){j===null&&(j=kt);const Oe=ie.isMesh&&ie.matrixWorld.determinant()<0,He=wl(C,j,ne,X,ie);Fe.setMaterial(X,Oe);let Ge=ne.index,Je=1;X.wireframe===!0&&(Ge=I.getWireframeAttribute(ne),Je=2);const qe=ne.drawRange,je=ne.attributes.position;let Et=qe.start*Je,Bt=(qe.start+qe.count)*Je;Ce!==null&&(Et=Math.max(Et,Ce.start*Je),Bt=Math.min(Bt,(Ce.start+Ce.count)*Je)),Ge!==null?(Et=Math.max(Et,0),Bt=Math.min(Bt,Ge.count)):je!=null&&(Et=Math.max(Et,0),Bt=Math.min(Bt,je.count));const Hn=Bt-Et;if(Hn<0||Hn===1/0)return;Ee.setup(ie,X,He,ne,Ge);let ui,Nt=De;if(Ge!==null&&(ui=$t.get(Ge),Nt=Ie,Nt.setIndex(ui)),ie.isMesh)X.wireframe===!0?(Fe.setLineWidth(X.wireframeLinewidth*et()),Nt.setMode(Y.LINES)):Nt.setMode(Y.TRIANGLES);else if(ie.isLine){let Ze=X.linewidth;Ze===void 0&&(Ze=1),Fe.setLineWidth(Ze*et()),ie.isLineSegments?Nt.setMode(Y.LINES):ie.isLineLoop?Nt.setMode(Y.LINE_LOOP):Nt.setMode(Y.LINE_STRIP)}else ie.isPoints?Nt.setMode(Y.POINTS):ie.isSprite&&Nt.setMode(Y.TRIANGLES);if(ie.isInstancedMesh)Nt.renderInstances(Et,Hn,ie.count);else if(ne.isInstancedBufferGeometry){const Ze=ne._maxInstanceCount!==void 0?ne._maxInstanceCount:1/0,Cr=Math.min(ne.instanceCount,Ze);Nt.renderInstances(Et,Hn,Cr)}else Nt.render(Et,Hn)},this.compile=function(C,j){function ne(X,ie,Ce){X.transparent===!0&&X.side===Ti&&X.forceSinglePass===!1?(X.side=On,X.needsUpdate=!0,hs(X,ie,Ce),X.side=er,X.needsUpdate=!0,hs(X,ie,Ce),X.side=Ti):hs(X,ie,Ce)}g=U.get(C),g.init(),S.push(g),C.traverseVisible(function(X){X.isLight&&X.layers.test(j.layers)&&(g.pushLight(X),X.castShadow&&g.pushShadow(X))}),g.setupLights(y.useLegacyLights),C.traverse(function(X){const ie=X.material;if(ie)if(Array.isArray(ie))for(let Ce=0;Ce<ie.length;Ce++){const Oe=ie[Ce];ne(Oe,C,X)}else ne(ie,C,X)}),S.pop(),g=null};let Wt=null;function Ni(C){Wt&&Wt(C)}function Ut(){cn.stop()}function Qn(){cn.start()}const cn=new lm;cn.setAnimationLoop(Ni),typeof self<"u"&&cn.setContext(self),this.setAnimationLoop=function(C){Wt=C,B.setAnimationLoop(C),C===null?cn.stop():cn.start()},B.addEventListener("sessionstart",Ut),B.addEventListener("sessionend",Qn),this.render=function(C,j){if(j!==void 0&&j.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),B.enabled===!0&&B.isPresenting===!0&&(j=B.updateCameraXR(j)),C.isScene===!0&&C.onBeforeRender(y,C,j,R),g=U.get(C,S.length),g.init(),S.push(g),Ne.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),fe.setFromProjectionMatrix(Ne),ye=this.localClippingEnabled,le=ce.init(this.clippingPlanes,ye),p=ge.get(C,m.length),p.init(),m.push(p),co(C,j,0,y.sortObjects),p.finish(),y.sortObjects===!0&&p.sort(ee,oe),le===!0&&ce.beginShadows();const ne=g.state.shadowsArray;if(me.render(ne,C,j),le===!0&&ce.endShadows(),this.info.autoReset===!0&&this.info.reset(),this.info.render.frame++,Q.render(p,C),g.setupLights(y.useLegacyLights),j.isArrayCamera){const X=j.cameras;for(let ie=0,Ce=X.length;ie<Ce;ie++){const Oe=X[ie];_a(p,C,Oe,Oe.viewport)}}else _a(p,C,j);R!==null&&(Xe.updateMultisampleRenderTarget(R),Xe.updateRenderTargetMipmap(R)),C.isScene===!0&&C.onAfterRender(y,C,j),Ee.resetDefaultState(),P=-1,b=null,S.pop(),S.length>0?g=S[S.length-1]:g=null,m.pop(),m.length>0?p=m[m.length-1]:p=null};function co(C,j,ne,X){if(C.visible===!1)return;if(C.layers.test(j.layers)){if(C.isGroup)ne=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(j);else if(C.isLight)g.pushLight(C),C.castShadow&&g.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||fe.intersectsSprite(C)){X&&Be.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Ne);const Oe=A.update(C),He=C.material;He.visible&&p.push(C,Oe,He,ne,Be.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||fe.intersectsObject(C))){C.isSkinnedMesh&&C.skeleton.frame!==vt.render.frame&&(C.skeleton.update(),C.skeleton.frame=vt.render.frame);const Oe=A.update(C),He=C.material;if(X&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Be.copy(C.boundingSphere.center)):(Oe.boundingSphere===null&&Oe.computeBoundingSphere(),Be.copy(Oe.boundingSphere.center)),Be.applyMatrix4(C.matrixWorld).applyMatrix4(Ne)),Array.isArray(He)){const Ge=Oe.groups;for(let Je=0,qe=Ge.length;Je<qe;Je++){const je=Ge[Je],Et=He[je.materialIndex];Et&&Et.visible&&p.push(C,Oe,Et,ne,Be.z,je)}}else He.visible&&p.push(C,Oe,He,ne,Be.z,null)}}const Ce=C.children;for(let Oe=0,He=Ce.length;Oe<He;Oe++)co(Ce[Oe],j,ne,X)}function _a(C,j,ne,X){const ie=C.opaque,Ce=C.transmissive,Oe=C.transparent;g.setupLightsView(ne),le===!0&&ce.setGlobalState(y.clippingPlanes,ne),Ce.length>0&&uo(ie,Ce,j,ne),X&&Fe.viewport(D.copy(X)),ie.length>0&&us(ie,j,ne),Ce.length>0&&us(Ce,j,ne),Oe.length>0&&us(Oe,j,ne),Fe.buffers.depth.setTest(!0),Fe.buffers.depth.setMask(!0),Fe.buffers.color.setMask(!0),Fe.setPolygonOffset(!1)}function uo(C,j,ne,X){const ie=$e.isWebGL2;we===null&&(we=new es(1,1,{generateMipmaps:!0,type:Ue.has("EXT_color_buffer_half_float")?$a:br,minFilter:Qr,samples:ie&&o===!0?4:0})),y.getDrawingBufferSize(Ke),ie?we.setSize(Ke.x,Ke.y):we.setSize(ol(Ke.x),ol(Ke.y));const Ce=y.getRenderTarget();y.setRenderTarget(we),y.getClearColor(G),F=y.getClearAlpha(),F<1&&y.setClearColor(16777215,.5),y.clear();const Oe=y.toneMapping;y.toneMapping=Ji,us(C,ne,X),Xe.updateMultisampleRenderTarget(we),Xe.updateRenderTargetMipmap(we);let He=!1;for(let Ge=0,Je=j.length;Ge<Je;Ge++){const qe=j[Ge],je=qe.object,Et=qe.geometry,Bt=qe.material,Hn=qe.group;if(Bt.side===Ti&&je.layers.test(X.layers)){const ui=Bt.side;Bt.side=On,Bt.needsUpdate=!0,ho(je,ne,X,Et,Bt,Hn),Bt.side=ui,Bt.needsUpdate=!0,He=!0}}He===!0&&(Xe.updateMultisampleRenderTarget(we),Xe.updateRenderTargetMipmap(we)),y.setRenderTarget(Ce),y.setClearColor(G,F),y.toneMapping=Oe}function us(C,j,ne){const X=j.isScene===!0?j.overrideMaterial:null;for(let ie=0,Ce=C.length;ie<Ce;ie++){const Oe=C[ie],He=Oe.object,Ge=Oe.geometry,Je=X===null?Oe.material:X,qe=Oe.group;He.layers.test(ne.layers)&&ho(He,j,ne,Ge,Je,qe)}}function ho(C,j,ne,X,ie,Ce){C.onBeforeRender(y,j,ne,X,ie,Ce),C.modelViewMatrix.multiplyMatrices(ne.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),ie.onBeforeRender(y,j,ne,X,C,Ce),ie.transparent===!0&&ie.side===Ti&&ie.forceSinglePass===!1?(ie.side=On,ie.needsUpdate=!0,y.renderBufferDirect(ne,j,X,ie,C,Ce),ie.side=er,ie.needsUpdate=!0,y.renderBufferDirect(ne,j,X,ie,C,Ce),ie.side=Ti):y.renderBufferDirect(ne,j,X,ie,C,Ce),C.onAfterRender(y,j,ne,X,ie,Ce)}function hs(C,j,ne){j.isScene!==!0&&(j=kt);const X=Ye.get(C),ie=g.state.lights,Ce=g.state.shadowsArray,Oe=ie.state.version,He=te.getParameters(C,ie.state,Ce,j,ne),Ge=te.getProgramCacheKey(He);let Je=X.programs;X.environment=C.isMeshStandardMaterial?j.environment:null,X.fog=j.fog,X.envMap=(C.isMeshStandardMaterial?Vt:ut).get(C.envMap||X.environment),Je===void 0&&(C.addEventListener("dispose",be),Je=new Map,X.programs=Je);let qe=Je.get(Ge);if(qe!==void 0){if(X.currentProgram===qe&&X.lightsStateVersion===Oe)return Rr(C,He),qe}else He.uniforms=te.getUniforms(C),C.onBuild(ne,He,y),C.onBeforeCompile(He,y),qe=te.acquireProgram(He,Ge),Je.set(Ge,qe),X.uniforms=He.uniforms;const je=X.uniforms;(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(je.clippingPlanes=ce.uniform),Rr(C,He),X.needsLights=Al(C),X.lightsStateVersion=Oe,X.needsLights&&(je.ambientLightColor.value=ie.state.ambient,je.lightProbe.value=ie.state.probe,je.directionalLights.value=ie.state.directional,je.directionalLightShadows.value=ie.state.directionalShadow,je.spotLights.value=ie.state.spot,je.spotLightShadows.value=ie.state.spotShadow,je.rectAreaLights.value=ie.state.rectArea,je.ltc_1.value=ie.state.rectAreaLTC1,je.ltc_2.value=ie.state.rectAreaLTC2,je.pointLights.value=ie.state.point,je.pointLightShadows.value=ie.state.pointShadow,je.hemisphereLights.value=ie.state.hemi,je.directionalShadowMap.value=ie.state.directionalShadowMap,je.directionalShadowMatrix.value=ie.state.directionalShadowMatrix,je.spotShadowMap.value=ie.state.spotShadowMap,je.spotLightMatrix.value=ie.state.spotLightMatrix,je.spotLightMap.value=ie.state.spotLightMap,je.pointShadowMap.value=ie.state.pointShadowMap,je.pointShadowMatrix.value=ie.state.pointShadowMatrix);const Et=qe.getUniforms(),Bt=Jo.seqWithValue(Et.seq,je);return X.currentProgram=qe,X.uniformsList=Bt,qe}function Rr(C,j){const ne=Ye.get(C);ne.outputColorSpace=j.outputColorSpace,ne.instancing=j.instancing,ne.skinning=j.skinning,ne.morphTargets=j.morphTargets,ne.morphNormals=j.morphNormals,ne.morphColors=j.morphColors,ne.morphTargetsCount=j.morphTargetsCount,ne.numClippingPlanes=j.numClippingPlanes,ne.numIntersection=j.numClipIntersection,ne.vertexAlphas=j.vertexAlphas,ne.vertexTangents=j.vertexTangents,ne.toneMapping=j.toneMapping}function wl(C,j,ne,X,ie){j.isScene!==!0&&(j=kt),Xe.resetTextureUnits();const Ce=j.fog,Oe=X.isMeshStandardMaterial?j.environment:null,He=R===null?y.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Ci,Ge=(X.isMeshStandardMaterial?Vt:ut).get(X.envMap||Oe),Je=X.vertexColors===!0&&!!ne.attributes.color&&ne.attributes.color.itemSize===4,qe=!!ne.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),je=!!ne.morphAttributes.position,Et=!!ne.morphAttributes.normal,Bt=!!ne.morphAttributes.color,Hn=X.toneMapped?y.toneMapping:Ji,ui=ne.morphAttributes.position||ne.morphAttributes.normal||ne.morphAttributes.color,Nt=ui!==void 0?ui.length:0,Ze=Ye.get(X),Cr=g.state.lights;if(le===!0&&(ye===!0||C!==b)){const An=C===b&&X.id===P;ce.setState(X,C,An)}let Pt=!1;X.version===Ze.__version?(Ze.needsLights&&Ze.lightsStateVersion!==Cr.state.version||Ze.outputColorSpace!==He||ie.isInstancedMesh&&Ze.instancing===!1||!ie.isInstancedMesh&&Ze.instancing===!0||ie.isSkinnedMesh&&Ze.skinning===!1||!ie.isSkinnedMesh&&Ze.skinning===!0||Ze.envMap!==Ge||X.fog===!0&&Ze.fog!==Ce||Ze.numClippingPlanes!==void 0&&(Ze.numClippingPlanes!==ce.numPlanes||Ze.numIntersection!==ce.numIntersection)||Ze.vertexAlphas!==Je||Ze.vertexTangents!==qe||Ze.morphTargets!==je||Ze.morphNormals!==Et||Ze.morphColors!==Bt||Ze.toneMapping!==Hn||$e.isWebGL2===!0&&Ze.morphTargetsCount!==Nt)&&(Pt=!0):(Pt=!0,Ze.__version=X.version);let Oi=Ze.currentProgram;Pt===!0&&(Oi=hs(X,j,ie));let po=!1,Lr=!1,va=!1;const un=Oi.getUniforms(),Si=Ze.uniforms;if(Fe.useProgram(Oi.program)&&(po=!0,Lr=!0,va=!0),X.id!==P&&(P=X.id,Lr=!0),po||b!==C){if(un.setValue(Y,"projectionMatrix",C.projectionMatrix),$e.logarithmicDepthBuffer&&un.setValue(Y,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),b!==C&&(b=C,Lr=!0,va=!0),X.isShaderMaterial||X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshStandardMaterial||X.envMap){const An=un.map.cameraPosition;An!==void 0&&An.setValue(Y,Be.setFromMatrixPosition(C.matrixWorld))}(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&un.setValue(Y,"isOrthographic",C.isOrthographicCamera===!0),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial||X.isShadowMaterial||ie.isSkinnedMesh)&&un.setValue(Y,"viewMatrix",C.matrixWorldInverse)}if(ie.isSkinnedMesh){un.setOptional(Y,ie,"bindMatrix"),un.setOptional(Y,ie,"bindMatrixInverse");const An=ie.skeleton;An&&($e.floatVertexTextures?(An.boneTexture===null&&An.computeBoneTexture(),un.setValue(Y,"boneTexture",An.boneTexture,Xe),un.setValue(Y,"boneTextureSize",An.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const fs=ne.morphAttributes;if((fs.position!==void 0||fs.normal!==void 0||fs.color!==void 0&&$e.isWebGL2===!0)&&Pe.update(ie,ne,Oi),(Lr||Ze.receiveShadow!==ie.receiveShadow)&&(Ze.receiveShadow=ie.receiveShadow,un.setValue(Y,"receiveShadow",ie.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(Si.envMap.value=Ge,Si.flipEnvMap.value=Ge.isCubeTexture&&Ge.isRenderTargetTexture===!1?-1:1),Lr&&(un.setValue(Y,"toneMappingExposure",y.toneMappingExposure),Ze.needsLights&&fo(Si,va),Ce&&X.fog===!0&&_e.refreshFogUniforms(Si,Ce),_e.refreshMaterialUniforms(Si,X,K,re,we),Jo.upload(Y,Ze.uniformsList,Si,Xe)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(Jo.upload(Y,Ze.uniformsList,Si,Xe),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&un.setValue(Y,"center",ie.center),un.setValue(Y,"modelViewMatrix",ie.modelViewMatrix),un.setValue(Y,"normalMatrix",ie.normalMatrix),un.setValue(Y,"modelMatrix",ie.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const An=X.uniformsGroups;for(let xa=0,Rl=An.length;xa<Rl;xa++)if($e.isWebGL2){const mo=An[xa];ze.update(mo,Oi),ze.bind(mo,Oi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Oi}function fo(C,j){C.ambientLightColor.needsUpdate=j,C.lightProbe.needsUpdate=j,C.directionalLights.needsUpdate=j,C.directionalLightShadows.needsUpdate=j,C.pointLights.needsUpdate=j,C.pointLightShadows.needsUpdate=j,C.spotLights.needsUpdate=j,C.spotLightShadows.needsUpdate=j,C.rectAreaLights.needsUpdate=j,C.hemisphereLights.needsUpdate=j}function Al(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(C,j,ne){Ye.get(C.texture).__webglTexture=j,Ye.get(C.depthTexture).__webglTexture=ne;const X=Ye.get(C);X.__hasExternalTextures=!0,X.__hasExternalTextures&&(X.__autoAllocateDepthBuffer=ne===void 0,X.__autoAllocateDepthBuffer||Ue.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(C,j){const ne=Ye.get(C);ne.__webglFramebuffer=j,ne.__useDefaultFramebuffer=j===void 0},this.setRenderTarget=function(C,j=0,ne=0){R=C,E=j,w=ne;let X=!0,ie=null,Ce=!1,Oe=!1;if(C){const Ge=Ye.get(C);Ge.__useDefaultFramebuffer!==void 0?(Fe.bindFramebuffer(Y.FRAMEBUFFER,null),X=!1):Ge.__webglFramebuffer===void 0?Xe.setupRenderTarget(C):Ge.__hasExternalTextures&&Xe.rebindTextures(C,Ye.get(C.texture).__webglTexture,Ye.get(C.depthTexture).__webglTexture);const Je=C.texture;(Je.isData3DTexture||Je.isDataArrayTexture||Je.isCompressedArrayTexture)&&(Oe=!0);const qe=Ye.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(ie=qe[j],Ce=!0):$e.isWebGL2&&C.samples>0&&Xe.useMultisampledRTT(C)===!1?ie=Ye.get(C).__webglMultisampledFramebuffer:ie=qe,D.copy(C.viewport),$.copy(C.scissor),ae=C.scissorTest}else D.copy(ue).multiplyScalar(K).floor(),$.copy(Te).multiplyScalar(K).floor(),ae=Z;if(Fe.bindFramebuffer(Y.FRAMEBUFFER,ie)&&$e.drawBuffers&&X&&Fe.drawBuffers(C,ie),Fe.viewport(D),Fe.scissor($),Fe.setScissorTest(ae),Ce){const Ge=Ye.get(C.texture);Y.framebufferTexture2D(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_CUBE_MAP_POSITIVE_X+j,Ge.__webglTexture,ne)}else if(Oe){const Ge=Ye.get(C.texture),Je=j||0;Y.framebufferTextureLayer(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Ge.__webglTexture,ne||0,Je)}P=-1},this.readRenderTargetPixels=function(C,j,ne,X,ie,Ce,Oe){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let He=Ye.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Oe!==void 0&&(He=He[Oe]),He){Fe.bindFramebuffer(Y.FRAMEBUFFER,He);try{const Ge=C.texture,Je=Ge.format,qe=Ge.type;if(Je!==si&&Re.convert(Je)!==Y.getParameter(Y.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const je=qe===$a&&(Ue.has("EXT_color_buffer_half_float")||$e.isWebGL2&&Ue.has("EXT_color_buffer_float"));if(qe!==br&&Re.convert(qe)!==Y.getParameter(Y.IMPLEMENTATION_COLOR_READ_TYPE)&&!(qe===ji&&($e.isWebGL2||Ue.has("OES_texture_float")||Ue.has("WEBGL_color_buffer_float")))&&!je){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=C.width-X&&ne>=0&&ne<=C.height-ie&&Y.readPixels(j,ne,X,ie,Re.convert(Je),Re.convert(qe),Ce)}finally{const Ge=R!==null?Ye.get(R).__webglFramebuffer:null;Fe.bindFramebuffer(Y.FRAMEBUFFER,Ge)}}},this.copyFramebufferToTexture=function(C,j,ne=0){const X=Math.pow(2,-ne),ie=Math.floor(j.image.width*X),Ce=Math.floor(j.image.height*X);Xe.setTexture2D(j,0),Y.copyTexSubImage2D(Y.TEXTURE_2D,ne,0,0,C.x,C.y,ie,Ce),Fe.unbindTexture()},this.copyTextureToTexture=function(C,j,ne,X=0){const ie=j.image.width,Ce=j.image.height,Oe=Re.convert(ne.format),He=Re.convert(ne.type);Xe.setTexture2D(ne,0),Y.pixelStorei(Y.UNPACK_FLIP_Y_WEBGL,ne.flipY),Y.pixelStorei(Y.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ne.premultiplyAlpha),Y.pixelStorei(Y.UNPACK_ALIGNMENT,ne.unpackAlignment),j.isDataTexture?Y.texSubImage2D(Y.TEXTURE_2D,X,C.x,C.y,ie,Ce,Oe,He,j.image.data):j.isCompressedTexture?Y.compressedTexSubImage2D(Y.TEXTURE_2D,X,C.x,C.y,j.mipmaps[0].width,j.mipmaps[0].height,Oe,j.mipmaps[0].data):Y.texSubImage2D(Y.TEXTURE_2D,X,C.x,C.y,Oe,He,j.image),X===0&&ne.generateMipmaps&&Y.generateMipmap(Y.TEXTURE_2D),Fe.unbindTexture()},this.copyTextureToTexture3D=function(C,j,ne,X,ie=0){if(y.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Ce=C.max.x-C.min.x+1,Oe=C.max.y-C.min.y+1,He=C.max.z-C.min.z+1,Ge=Re.convert(X.format),Je=Re.convert(X.type);let qe;if(X.isData3DTexture)Xe.setTexture3D(X,0),qe=Y.TEXTURE_3D;else if(X.isDataArrayTexture)Xe.setTexture2DArray(X,0),qe=Y.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}Y.pixelStorei(Y.UNPACK_FLIP_Y_WEBGL,X.flipY),Y.pixelStorei(Y.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),Y.pixelStorei(Y.UNPACK_ALIGNMENT,X.unpackAlignment);const je=Y.getParameter(Y.UNPACK_ROW_LENGTH),Et=Y.getParameter(Y.UNPACK_IMAGE_HEIGHT),Bt=Y.getParameter(Y.UNPACK_SKIP_PIXELS),Hn=Y.getParameter(Y.UNPACK_SKIP_ROWS),ui=Y.getParameter(Y.UNPACK_SKIP_IMAGES),Nt=ne.isCompressedTexture?ne.mipmaps[0]:ne.image;Y.pixelStorei(Y.UNPACK_ROW_LENGTH,Nt.width),Y.pixelStorei(Y.UNPACK_IMAGE_HEIGHT,Nt.height),Y.pixelStorei(Y.UNPACK_SKIP_PIXELS,C.min.x),Y.pixelStorei(Y.UNPACK_SKIP_ROWS,C.min.y),Y.pixelStorei(Y.UNPACK_SKIP_IMAGES,C.min.z),ne.isDataTexture||ne.isData3DTexture?Y.texSubImage3D(qe,ie,j.x,j.y,j.z,Ce,Oe,He,Ge,Je,Nt.data):ne.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),Y.compressedTexSubImage3D(qe,ie,j.x,j.y,j.z,Ce,Oe,He,Ge,Nt.data)):Y.texSubImage3D(qe,ie,j.x,j.y,j.z,Ce,Oe,He,Ge,Je,Nt),Y.pixelStorei(Y.UNPACK_ROW_LENGTH,je),Y.pixelStorei(Y.UNPACK_IMAGE_HEIGHT,Et),Y.pixelStorei(Y.UNPACK_SKIP_PIXELS,Bt),Y.pixelStorei(Y.UNPACK_SKIP_ROWS,Hn),Y.pixelStorei(Y.UNPACK_SKIP_IMAGES,ui),ie===0&&X.generateMipmaps&&Y.generateMipmap(qe),Fe.unbindTexture()},this.initTexture=function(C){C.isCubeTexture?Xe.setTextureCube(C,0):C.isData3DTexture?Xe.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?Xe.setTexture2DArray(C,0):Xe.setTexture2D(C,0),Fe.unbindTexture()},this.resetState=function(){E=0,w=0,R=null,Fe.reset(),Ee.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ki}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Ve?Yr:jp}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Yr?Ve:Ci}}class dT extends tu{}dT.prototype.isWebGL1Renderer=!0;class Cd extends Gt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class pT{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Zc,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=yi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=yi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=yi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Rn=new z;class Iu{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Rn.fromBufferAttribute(this,t),Rn.applyMatrix4(e),this.setXYZ(t,Rn.x,Rn.y,Rn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Rn.fromBufferAttribute(this,t),Rn.applyNormalMatrix(e),this.setXYZ(t,Rn.x,Rn.y,Rn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Rn.fromBufferAttribute(this,t),Rn.transformDirection(e),this.setXYZ(t,Rn.x,Rn.y,Rn.z);return this}setX(e,t){return this.normalized&&(t=At(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=At(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=At(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=At(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Zi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Zi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Zi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Zi(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=At(t,this.array),n=At(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=At(t,this.array),n=At(n,this.array),i=At(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=At(t,this.array),n=At(n,this.array),i=At(i,this.array),r=At(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new Dn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Iu(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Ld=new z,Pd=new Ct,Dd=new Ct,mT=new z,Id=new at,Bs=new z,Rc=new Di,Ud=new at,Cc=new so;class gT extends vn{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new at,this.bindMatrixInverse=new at,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new ir),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)Bs.fromBufferAttribute(t,n),this.applyBoneTransform(n,Bs),this.boundingBox.expandByPoint(Bs)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Di),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)Bs.fromBufferAttribute(t,n),this.applyBoneTransform(n,Bs),this.boundingSphere.expandByPoint(Bs)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Rc.copy(this.boundingSphere),Rc.applyMatrix4(i),e.ray.intersectsSphere(Rc)!==!1&&(Ud.copy(i).invert(),Cc.copy(e.ray).applyMatrix4(Ud),!(this.boundingBox!==null&&Cc.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Cc)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Ct,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;Pd.fromBufferAttribute(i.attributes.skinIndex,e),Dd.fromBufferAttribute(i.attributes.skinWeight,e),Ld.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const a=Dd.getComponent(r);if(a!==0){const o=Pd.getComponent(r);Id.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(mT.copy(Ld).applyMatrix4(Id),a)}}return t.applyMatrix4(this.bindMatrixInverse)}boneTransform(e,t){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(e,t)}}class dm extends Gt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class _T extends xn{constructor(e=null,t=1,n=1,i,r,a,o,l,c=an,u=an,h,f){super(null,a,o,l,c,u,i,r,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Nd=new at,vT=new at;class Uu{constructor(e=[],t=[]){this.uuid=yi(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.frame=-1,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new at)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new at;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,a=e.length;r<a;r++){const o=e[r]?e[r].matrixWorld:vT;Nd.multiplyMatrices(o,t[r]),Nd.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new Uu(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Jp(e),e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new _T(t,e,e,si,ji);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this.boneTextureSize=e,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let a=t[r];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),a=new dm),this.bones.push(a),this.boneInverses.push(new at().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const a=t[i];e.bones.push(a.uuid);const o=n[i];e.boneInverses.push(o.toArray())}return e}}class Od extends Dn{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const zs=new at,Fd=new at,Wo=[],kd=new ir,xT=new at,Aa=new vn,Ra=new Di;class yT extends vn{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Od(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,xT)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ir),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,zs),kd.copy(e.boundingBox).applyMatrix4(zs),this.boundingBox.union(kd)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Di),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,zs),Ra.copy(e.boundingSphere).applyMatrix4(zs),this.boundingSphere.union(Ra)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const n=this.matrixWorld,i=this.count;if(Aa.geometry=this.geometry,Aa.material=this.material,Aa.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ra.copy(this.boundingSphere),Ra.applyMatrix4(n),e.ray.intersectsSphere(Ra)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,zs),Fd.multiplyMatrices(n,zs),Aa.matrixWorld=Fd,Aa.raycast(e,Wo);for(let a=0,o=Wo.length;a<o;a++){const l=Wo[a];l.instanceId=r,l.object=this,t.push(l)}Wo.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Od(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class pm extends Mi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Qe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Bd=new z,zd=new z,Hd=new at,Lc=new so,Xo=new Di;class Nu extends Gt{constructor(e=new Ii,t=new pm){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)Bd.fromBufferAttribute(t,i-1),zd.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Bd.distanceTo(zd);e.setAttribute("lineDistance",new Qi(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Xo.copy(n.boundingSphere),Xo.applyMatrix4(i),Xo.radius+=r,e.ray.intersectsSphere(Xo)===!1)return;Hd.copy(i).invert(),Lc.copy(e.ray).applyMatrix4(Hd);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new z,u=new z,h=new z,f=new z,d=this.isLineSegments?2:1,v=n.index,g=n.attributes.position;if(v!==null){const m=Math.max(0,a.start),S=Math.min(v.count,a.start+a.count);for(let y=m,T=S-1;y<T;y+=d){const E=v.getX(y),w=v.getX(y+1);if(c.fromBufferAttribute(g,E),u.fromBufferAttribute(g,w),Lc.distanceSqToSegment(c,u,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const P=e.ray.origin.distanceTo(f);P<e.near||P>e.far||t.push({distance:P,point:h.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}else{const m=Math.max(0,a.start),S=Math.min(g.count,a.start+a.count);for(let y=m,T=S-1;y<T;y+=d){if(c.fromBufferAttribute(g,y),u.fromBufferAttribute(g,y+1),Lc.distanceSqToSegment(c,u,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const w=e.ray.origin.distanceTo(f);w<e.near||w>e.far||t.push({distance:w,point:h.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}const Gd=new z,Vd=new z;class MT extends Nu{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)Gd.fromBufferAttribute(t,i),Vd.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Gd.distanceTo(Vd);e.setAttribute("lineDistance",new Qi(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class bT extends Nu{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class mm extends Mi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Qe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Wd=new at,nu=new so,qo=new Di,$o=new z;class ST extends Gt{constructor(e=new Ii,t=new mm){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),qo.copy(n.boundingSphere),qo.applyMatrix4(i),qo.radius+=r,e.ray.intersectsSphere(qo)===!1)return;Wd.copy(i).invert(),nu.copy(e.ray).applyMatrix4(Wd);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,h=n.attributes.position;if(c!==null){const f=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);for(let v=f,p=d;v<p;v++){const g=c.getX(v);$o.fromBufferAttribute(h,g),Xd($o,g,l,i,e,t,this)}}else{const f=Math.max(0,a.start),d=Math.min(h.count,a.start+a.count);for(let v=f,p=d;v<p;v++)$o.fromBufferAttribute(h,v),Xd($o,v,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Xd(s,e,t,n,i,r,a){const o=nu.distanceSqToPoint(s);if(o<t){const l=new z;nu.closestPointToPoint(s,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,object:a})}}class Ou extends Mi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Qe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Kp,this.normalScale=new We(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ls extends Ou{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new We(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return dn(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Qe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Qe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Qe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function fr(s,e,t){return gm(s)?new s.constructor(s.subarray(e,t!==void 0?t:s.length)):s.slice(e,t)}function Yo(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function gm(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function ET(s){function e(i,r){return s[i]-s[r]}const t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function qd(s,e,t){const n=s.length,i=new s.constructor(n);for(let r=0,a=0;a!==n;++r){const o=t[r]*e;for(let l=0;l!==e;++l)i[a++]=s[o+l]}return i}function _m(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push.apply(t,a)),r=s[i++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=s[i++];while(r!==void 0)}class oo{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=t[++n],e<i)break e}a=t.length;break t}if(!(e>=r)){const o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){const o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let a=0;a!==i;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class TT extends oo{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Hf,endingEnd:Hf}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,a=e+1,o=i[r],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case Gf:r=e,o=2*t-n;break;case Vf:r=i.length-2,o=t+i[r]-i[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Gf:a=e,l=2*n-t;break;case Vf:a=1,l=n+i[1]-i[0];break;default:a=e-1,l=t}const c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,d=this._weightNext,v=(n-t)/(i-t),p=v*v,g=p*v,m=-f*g+2*f*p-f*v,S=(1+f)*g+(-1.5-2*f)*p+(-.5+f)*v+1,y=(-1-d)*g+(1.5+d)*p+.5*v,T=d*g-d*p;for(let E=0;E!==o;++E)r[E]=m*a[u+E]+S*a[c+E]+y*a[l+E]+T*a[h+E];return r}}class wT extends oo{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=(n-t)/(i-t),h=1-u;for(let f=0;f!==o;++f)r[f]=a[c+f]*h+a[l+f]*u;return r}}class AT extends oo{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Ui{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Yo(t,this.TimeBufferType),this.values=Yo(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Yo(e.times,Array),values:Yo(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new AT(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new wT(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new TT(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Ya:t=this.InterpolantFactoryMethodDiscrete;break;case na:t=this.InterpolantFactoryMethodLinear;break;case sc:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ya;case this.InterpolantFactoryMethodLinear:return na;case this.InterpolantFactoryMethodSmooth:return sc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let r=0,a=i-1;for(;r!==i&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);const o=this.getValueSize();this.times=fr(n,r,a),this.values=fr(this.values,r*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){const l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(i!==void 0&&gm(i))for(let o=0,l=i.length;o!==l;++o){const c=i[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){const e=fr(this.times),t=fr(this.values),n=this.getValueSize(),i=this.getInterpolation()===sc,r=e.length-1;let a=1;for(let o=1;o<r;++o){let l=!1;const c=e[o],u=e[o+1];if(c!==u&&(o!==1||c!==e[0]))if(i)l=!0;else{const h=o*n,f=h-n,d=h+n;for(let v=0;v!==n;++v){const p=t[h+v];if(p!==t[f+v]||p!==t[d+v]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];const h=o*n,f=a*n;for(let d=0;d!==n;++d)t[f+d]=t[h+d]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=fr(e,0,a),this.values=fr(t,0,a*n)):(this.times=e,this.values=t),this}clone(){const e=fr(this.times,0),t=fr(this.values,0),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}Ui.prototype.TimeBufferType=Float32Array;Ui.prototype.ValueBufferType=Float32Array;Ui.prototype.DefaultInterpolation=na;class pa extends Ui{}pa.prototype.ValueTypeName="bool";pa.prototype.ValueBufferType=Array;pa.prototype.DefaultInterpolation=Ya;pa.prototype.InterpolantFactoryMethodLinear=void 0;pa.prototype.InterpolantFactoryMethodSmooth=void 0;class vm extends Ui{}vm.prototype.ValueTypeName="color";class Ka extends Ui{}Ka.prototype.ValueTypeName="number";class RT extends oo{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(i-t);let c=e*o;for(let u=c+o;c!==u;c+=4)Li.slerpFlat(r,0,a,c-o,a,c,l);return r}}class ns extends Ui{InterpolantFactoryMethodLinear(e){return new RT(this.times,this.values,this.getValueSize(),e)}}ns.prototype.ValueTypeName="quaternion";ns.prototype.DefaultInterpolation=na;ns.prototype.InterpolantFactoryMethodSmooth=void 0;class ma extends Ui{}ma.prototype.ValueTypeName="string";ma.prototype.ValueBufferType=Array;ma.prototype.DefaultInterpolation=Ya;ma.prototype.InterpolantFactoryMethodLinear=void 0;ma.prototype.InterpolantFactoryMethodSmooth=void 0;class Za extends Ui{}Za.prototype.ValueTypeName="vector";class CT{constructor(e,t=-1,n,i=Fx){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=yi(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(PT(n[a]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,a=n.length;r!==a;++r)t.push(Ui.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,a=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);const u=ET(l);l=qd(l,1,u),c=qd(c,1,u),!i&&l[0]===0&&(l.push(r),c.push(c[0])),a.push(new Ka(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){const c=e[o],u=c.name.match(r);if(u&&u.length>1){const h=u[1];let f=i[h];f||(i[h]=f=[]),f.push(c)}}const a=[];for(const o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,f,d,v,p){if(d.length!==0){const g=[],m=[];_m(d,g,m,v),g.length!==0&&p.push(new h(f,g,m))}},i=[],r=e.name||"default",a=e.fps||30,o=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let h=0;h<c.length;h++){const f=c[h].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const d={};let v;for(v=0;v<f.length;v++)if(f[v].morphTargets)for(let p=0;p<f[v].morphTargets.length;p++)d[f[v].morphTargets[p]]=-1;for(const p in d){const g=[],m=[];for(let S=0;S!==f[v].morphTargets.length;++S){const y=f[v];g.push(y.time),m.push(y.morphTarget===p?1:0)}i.push(new Ka(".morphTargetInfluence["+p+"]",g,m))}l=d.length*a}else{const d=".bones["+t[h].name+"]";n(Za,d+".position",f,"pos",i),n(ns,d+".quaternion",f,"rot",i),n(Za,d+".scale",f,"scl",i)}}return i.length===0?null:new this(r,l,i,o)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function LT(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ka;case"vector":case"vector2":case"vector3":case"vector4":return Za;case"color":return vm;case"quaternion":return ns;case"bool":case"boolean":return pa;case"string":return ma}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function PT(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=LT(s.type);if(s.times===void 0){const t=[],n=[];_m(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}const sa={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class xm{constructor(e,t,n){const i=this;let r=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){o++,r===!1&&i.onStart!==void 0&&i.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,i.onProgress!==void 0&&i.onProgress(u,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){const d=c[h],v=c[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return v}return null}}}const DT=new xm;class ga{constructor(e){this.manager=e!==void 0?e:DT,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}const Xi={};class IT extends Error{constructor(e,t){super(e),this.response=t}}class ym extends ga{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=sa.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Xi[e]!==void 0){Xi[e].push({onLoad:t,onProgress:n,onError:i});return}Xi[e]=[],Xi[e].push({onLoad:t,onProgress:n,onError:i});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Xi[e],h=c.body.getReader(),f=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),d=f?parseInt(f):0,v=d!==0;let p=0;const g=new ReadableStream({start(m){S();function S(){h.read().then(({done:y,value:T})=>{if(y)m.close();else{p+=T.byteLength;const E=new ProgressEvent("progress",{lengthComputable:v,loaded:p,total:d});for(let w=0,R=u.length;w<R;w++){const P=u[w];P.onProgress&&P.onProgress(E)}m.enqueue(T),S()}})}}});return new Response(g)}else throw new IT(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return c.json();default:if(o===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(o),f=h&&h[1]?h[1].toLowerCase():void 0,d=new TextDecoder(f);return c.arrayBuffer().then(v=>d.decode(v))}}}).then(c=>{sa.add(e,c);const u=Xi[e];delete Xi[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onLoad&&d.onLoad(c)}}).catch(c=>{const u=Xi[e];if(u===void 0)throw this.manager.itemError(e),c;delete Xi[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Mm extends ga{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=sa.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;const o=ja("img");function l(){u(),sa.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(h){u(),i&&i(h),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(e),o.src=e,o}}class UT extends ga{constructor(e){super(e)}load(e,t,n,i){const r=new Ru;r.colorSpace=Ve;const a=new Mm(this.manager);a.setCrossOrigin(this.crossOrigin),a.setPath(this.path);let o=0;function l(c){a.load(e[c],function(u){r.images[c]=u,o++,o===6&&(r.needsUpdate=!0,t&&t(r))},void 0,i)}for(let c=0;c<e.length;++c)l(c);return r}}class bm extends ga{constructor(e){super(e)}load(e,t,n,i){const r=new xn,a=new Mm(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class Ml extends Gt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Qe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Pc=new at,$d=new z,Yd=new z;class Fu{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new We(512,512),this.map=null,this.mapPass=null,this.matrix=new at,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Cu,this._frameExtents=new We(1,1),this._viewportCount=1,this._viewports=[new Ct(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;$d.setFromMatrixPosition(e.matrixWorld),t.position.copy($d),Yd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Yd),t.updateMatrixWorld(),Pc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Pc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Pc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class NT extends Fu{constructor(){super(new Pn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=ia*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class OT extends Ml{constructor(e,t,n=0,i=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Gt.DEFAULT_UP),this.updateMatrix(),this.target=new Gt,this.distance=n,this.angle=i,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new NT}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const jd=new at,Ca=new z,Dc=new z;class FT extends Fu{constructor(){super(new Pn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new We(4,2),this._viewportCount=6,this._viewports=[new Ct(2,1,1,1),new Ct(0,1,1,1),new Ct(3,1,1,1),new Ct(1,1,1,1),new Ct(3,0,1,1),new Ct(1,0,1,1)],this._cubeDirections=[new z(1,0,0),new z(-1,0,0),new z(0,0,1),new z(0,0,-1),new z(0,1,0),new z(0,-1,0)],this._cubeUps=[new z(0,1,0),new z(0,1,0),new z(0,1,0),new z(0,1,0),new z(0,0,1),new z(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Ca.setFromMatrixPosition(e.matrixWorld),n.position.copy(Ca),Dc.copy(n.position),Dc.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Dc),n.updateMatrixWorld(),i.makeTranslation(-Ca.x,-Ca.y,-Ca.z),jd.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(jd)}}class kT extends Ml{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new FT}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class BT extends Fu{constructor(){super(new Pu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Sm extends Ml{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Gt.DEFAULT_UP),this.updateMatrix(),this.target=new Gt,this.shadow=new BT}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class zT extends Ml{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class iu{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class HT extends ga{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=sa.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){sa.add(e,l),t&&t(l),r.manager.itemEnd(e)}).catch(function(l){i&&i(l),r.manager.itemError(e),r.manager.itemEnd(e)}),r.manager.itemStart(e)}}const ku="\\[\\]\\.:\\/",GT=new RegExp("["+ku+"]","g"),Bu="[^"+ku+"]",VT="[^"+ku.replace("\\.","")+"]",WT=/((?:WC+[\/:])*)/.source.replace("WC",Bu),XT=/(WCOD+)?/.source.replace("WCOD",VT),qT=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Bu),$T=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Bu),YT=new RegExp("^"+WT+XT+qT+$T+"$"),jT=["material","materials","bones","map"];class KT{constructor(e,t,n){const i=n||Mt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class Mt{constructor(e,t,n){this.path=t,this.parsedPath=n||Mt.parseTrackName(t),this.node=Mt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Mt.Composite(e,t,n):new Mt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(GT,"")}static parseTrackName(e){const t=YT.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);jT.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let a=0;a<r.length;a++){const o=r[a];if(o.name===t||o.uuid===t)return o;const l=n(o.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=Mt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const a=e[i];if(a===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Mt.Composite=KT;Mt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Mt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Mt.prototype.GetterByBindingType=[Mt.prototype._getValue_direct,Mt.prototype._getValue_array,Mt.prototype._getValue_arrayElement,Mt.prototype._getValue_toArray];Mt.prototype.SetterByBindingTypeAndVersioning=[[Mt.prototype._setValue_direct,Mt.prototype._setValue_direct_setNeedsUpdate,Mt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Mt.prototype._setValue_array,Mt.prototype._setValue_array_setNeedsUpdate,Mt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Mt.prototype._setValue_arrayElement,Mt.prototype._setValue_arrayElement_setNeedsUpdate,Mt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Mt.prototype._setValue_fromArray,Mt.prototype._setValue_fromArray_setNeedsUpdate,Mt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class ZT{constructor(e,t,n=0,i=1/0){this.ray=new so(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new Au,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return ru(e,this,n,t),n.sort(Kd),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)ru(e[i],this,n,t);return n.sort(Kd),n}}function Kd(s,e){return s.distance-e.distance}function ru(s,e,t,n){if(s.layers.test(e.layers)&&s.raycast(e,t),n===!0){const i=s.children;for(let r=0,a=i.length;r<a;r++)ru(i[r],e,t,!0)}}class Zd{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(dn(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Eu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Eu);function Jd(s,e){if(e===kx)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===Kc||e===Yp){let t=s.getIndex();if(t===null){const a=[],o=s.getAttribute("position");if(o!==void 0){for(let l=0;l<o.count;l++)a.push(l);s.setIndex(a),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const n=t.count-2,i=[];if(e===Kc)for(let a=1;a<=n;a++)i.push(t.getX(0)),i.push(t.getX(a)),i.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(i.push(t.getX(a)),i.push(t.getX(a+1)),i.push(t.getX(a+2))):(i.push(t.getX(a+2)),i.push(t.getX(a+1)),i.push(t.getX(a)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}class JT extends ga{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new i1(t)}),this.register(function(t){return new u1(t)}),this.register(function(t){return new h1(t)}),this.register(function(t){return new f1(t)}),this.register(function(t){return new s1(t)}),this.register(function(t){return new a1(t)}),this.register(function(t){return new o1(t)}),this.register(function(t){return new l1(t)}),this.register(function(t){return new n1(t)}),this.register(function(t){return new c1(t)}),this.register(function(t){return new r1(t)}),this.register(function(t){return new e1(t)}),this.register(function(t){return new d1(t)}),this.register(function(t){return new p1(t)})}load(e,t,n,i){const r=this;let a;this.resourcePath!==""?a=this.resourcePath:this.path!==""?a=this.path:a=iu.extractUrlBase(e),this.manager.itemStart(e);const o=function(c){i?i(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new ym(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,a,function(u){t(u),r.manager.itemEnd(e)},o)}catch(u){o(u)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r;const a={},o={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Em){try{a[pt.KHR_BINARY_GLTF]=new m1(e)}catch(h){i&&i(h);return}r=JSON.parse(a[pt.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new R1(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const h=this.pluginCallbacks[u](c);o[h.name]=h,a[h.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){const h=r.extensionsUsed[u],f=r.extensionsRequired||[];switch(h){case pt.KHR_MATERIALS_UNLIT:a[h]=new t1;break;case pt.KHR_DRACO_MESH_COMPRESSION:a[h]=new g1(r,this.dracoLoader);break;case pt.KHR_TEXTURE_TRANSFORM:a[h]=new _1;break;case pt.KHR_MESH_QUANTIZATION:a[h]=new v1;break;default:f.indexOf(h)>=0&&o[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}}function QT(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}const pt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class e1{constructor(e){this.parser=e,this.name=pt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let c;const u=new Qe(16777215);l.color!==void 0&&u.fromArray(l.color);const h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Sm(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new kT(u),c.distance=h;break;case"spot":c=new OT(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,pr(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return n._getNodeRef(t.cache,o,l)})}}class t1{constructor(){this.name=pt.KHR_MATERIALS_UNLIT}getMaterialType(){return Wr}extendParams(e,t,n){const i=[];e.color=new Qe(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const a=r.baseColorFactor;e.color.fromArray(a),e.opacity=a[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,Ve))}return Promise.all(i)}}class n1{constructor(e){this.parser=e,this.name=pt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class i1{constructor(e){this.parser=e,this.name=pt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ls}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){const o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new We(o,o)}return Promise.all(r)}}class r1{constructor(e){this.parser=e,this.name=pt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ls}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(r)}}class s1{constructor(e){this.parser=e,this.name=pt.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ls}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new Qe(0,0,0),t.sheenRoughness=0,t.sheen=1;const a=i.extensions[this.name];return a.sheenColorFactor!==void 0&&t.sheenColor.fromArray(a.sheenColorFactor),a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",a.sheenColorTexture,Ve)),a.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(r)}}class a1{constructor(e){this.parser=e,this.name=pt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ls}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(r)}}class o1{constructor(e){this.parser=e,this.name=pt.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ls}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;const o=a.attenuationColor||[1,1,1];return t.attenuationColor=new Qe(o[0],o[1],o[2]),Promise.all(r)}}class l1{constructor(e){this.parser=e,this.name=pt.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ls}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class c1{constructor(e){this.parser=e,this.name=pt.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ls}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",a.specularTexture));const o=a.specularColorFactor||[1,1,1];return t.specularColor=new Qe(o[0],o[1],o[2]),a.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",a.specularColorTexture,Ve)),Promise.all(r)}}class u1{constructor(e){this.parser=e,this.name=pt.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const r=i.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}}class h1{constructor(e){this.parser=e,this.name=pt.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=i.images[a.source];let l=n.textureLoader;if(o.uri){const c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,a.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class f1{constructor(e){this.parser=e,this.name=pt.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=i.images[a.source];let l=n.textureLoader;if(o.uri){const c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,a.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class d1{constructor(e){this.name=pt.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){const l=i.byteOffset||0,c=i.byteLength||0,u=i.count,h=i.byteStride,f=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(u,h,f,i.mode,i.filter).then(function(d){return d.buffer}):a.ready.then(function(){const d=new ArrayBuffer(u*h);return a.decodeGltfBuffer(new Uint8Array(d),u,h,f,i.mode,i.filter),d})})}else return null}}class p1{constructor(e){this.name=pt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const c of i.primitives)if(c.mode!==ni.TRIANGLES&&c.mode!==ni.TRIANGLE_STRIP&&c.mode!==ni.TRIANGLE_FAN&&c.mode!==void 0)return null;const a=n.extensions[this.name].attributes,o=[],l={};for(const c in a)o.push(this.parser.getDependency("accessor",a[c]).then(u=>(l[c]=u,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{const u=c.pop(),h=u.isGroup?u.children:[u],f=c[0].count,d=[];for(const v of h){const p=new at,g=new z,m=new Li,S=new z(1,1,1),y=new yT(v.geometry,v.material,f);for(let T=0;T<f;T++)l.TRANSLATION&&g.fromBufferAttribute(l.TRANSLATION,T),l.ROTATION&&m.fromBufferAttribute(l.ROTATION,T),l.SCALE&&S.fromBufferAttribute(l.SCALE,T),y.setMatrixAt(T,p.compose(g,m,S));for(const T in l)T!=="TRANSLATION"&&T!=="ROTATION"&&T!=="SCALE"&&v.geometry.setAttribute(T,l[T]);Gt.prototype.copy.call(y,v),this.parser.assignFinalMaterial(y),d.push(y)}return u.isGroup?(u.clear(),u.add(...d),u):d[0]}))}}const Em="glTF",La=12,Qd={JSON:1313821514,BIN:5130562};class m1{constructor(e){this.name=pt.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,La),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Em)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-La,r=new DataView(e,La);let a=0;for(;a<i;){const o=r.getUint32(a,!0);a+=4;const l=r.getUint32(a,!0);if(a+=4,l===Qd.JSON){const c=new Uint8Array(e,La+a,o);this.content=n.decode(c)}else if(l===Qd.BIN){const c=La+a;this.body=e.slice(c,c+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class g1{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=pt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},c={};for(const u in a){const h=su[u]||u.toLowerCase();o[h]=a[u]}for(const u in e.attributes){const h=su[u]||u.toLowerCase();if(a[u]!==void 0){const f=n.accessors[e.attributes[u]],d=Ys[f.componentType];c[h]=d.name,l[h]=f.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h){i.decodeDracoFile(u,function(f){for(const d in f.attributes){const v=f.attributes[d],p=l[d];p!==void 0&&(v.normalized=p)}h(f)},o,c)})})}}class _1{constructor(){this.name=pt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class v1{constructor(){this.name=pt.KHR_MESH_QUANTIZATION}}class Tm extends oo{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let a=0;a!==i;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,u=i-t,h=(n-t)/u,f=h*h,d=f*h,v=e*c,p=v-c,g=-2*d+3*f,m=d-f,S=1-g,y=m-f+h;for(let T=0;T!==o;T++){const E=a[p+T+o],w=a[p+T+l]*u,R=a[v+T+o],P=a[v+T]*u;r[T]=S*E+y*w+g*R+m*P}return r}}const x1=new Li;class y1 extends Tm{interpolate_(e,t,n,i){const r=super.interpolate_(e,t,n,i);return x1.fromArray(r).normalize().toArray(r),r}}const ni={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Ys={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},ep={9728:an,9729:Un,9984:jc,9985:Hp,9986:Zo,9987:Qr},tp={33071:ri,33648:sl,10497:ea},Ic={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},su={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},dr={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},M1={CUBICSPLINE:void 0,LINEAR:na,STEP:Ya},Uc={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function b1(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new Ou({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:er})),s.DefaultMaterial}function Pa(s,e,t){for(const n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function pr(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function S1(s,e,t){let n=!1,i=!1,r=!1;for(let c=0,u=e.length;c<u;c++){const h=e[c];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(i=!0),h.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);const a=[],o=[],l=[];for(let c=0,u=e.length;c<u;c++){const h=e[c];if(n){const f=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):s.attributes.position;a.push(f)}if(i){const f=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):s.attributes.normal;o.push(f)}if(r){const f=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):s.attributes.color;l.push(f)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){const u=c[0],h=c[1],f=c[2];return n&&(s.morphAttributes.position=u),i&&(s.morphAttributes.normal=h),r&&(s.morphAttributes.color=f),s.morphTargetsRelative=!0,s})}function E1(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function T1(s){const e=s.extensions&&s.extensions[pt.KHR_DRACO_MESH_COMPRESSION];let t;return e?t="draco:"+e.bufferView+":"+e.indices+":"+np(e.attributes):t=s.indices+":"+np(s.attributes)+":"+s.mode,t}function np(s){let e="";const t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function au(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function w1(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const A1=new at;class R1{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new QT,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=!1,r=-1;typeof navigator<"u"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,i=navigator.userAgent.indexOf("Firefox")>-1,r=i?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||n||i&&r<98?this.textureLoader=new bm(this.options.manager):this.textureLoader=new HT(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new ym(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){const o={scene:a[0][i.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:i.asset,parser:n,userData:{}};Pa(r,o,i),pr(o,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){const a=t[i].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let i=0,r=e.length;i<r;i++){const a=e[i];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),r=(a,o)=>{const l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(const[c,u]of a.children.entries())r(u,o.children[c])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[pt.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(r,a){n.load(iu.resolveURL(t.uri,i.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const a=Ic[i.type],o=Ys[i.componentType],l=i.normalized===!0,c=new o(i.count*a);return Promise.resolve(new Dn(c,a,l))}const r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(a){const o=a[0],l=Ic[i.type],c=Ys[i.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,f=i.byteOffset||0,d=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,v=i.normalized===!0;let p,g;if(d&&d!==h){const m=Math.floor(f/d),S="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+m+":"+i.count;let y=t.cache.get(S);y||(p=new c(o,m*d,i.count*d/u),y=new pT(p,d/u),t.cache.add(S,y)),g=new Iu(y,l,f%d/u,v)}else o===null?p=new c(i.count*l):p=new c(o,f,i.count*l),g=new Dn(p,l,v);if(i.sparse!==void 0){const m=Ic.SCALAR,S=Ys[i.sparse.indices.componentType],y=i.sparse.indices.byteOffset||0,T=i.sparse.values.byteOffset||0,E=new S(a[1],y,i.sparse.count*m),w=new c(a[2],T,i.sparse.count*l);o!==null&&(g=new Dn(g.array.slice(),g.itemSize,g.normalized));for(let R=0,P=E.length;R<P;R++){const b=E[R];if(g.setX(b,w[R*l]),l>=2&&g.setY(b,w[R*l+1]),l>=3&&g.setZ(b,w[R*l+2]),l>=4&&g.setW(b,w[R*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return g})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r];let o=this.textureLoader;if(a.uri){const l=n.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){const i=this,r=this.json,a=r.textures[e],o=r.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=a.name||o.name||"",u.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(u.name=o.uri);const f=(r.samplers||{})[a.sampler]||{};return u.magFilter=ep[f.magFilter]||Un,u.minFilter=ep[f.minFilter]||Qr,u.wrapS=tp[f.wrapS]||ea,u.wrapT=tp[f.wrapT]||ea,i.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const a=i.images[e],o=self.URL||self.webkitURL;let l=a.uri||"",c=!1;if(a.bufferView!==void 0)l=n.getDependency("bufferView",a.bufferView).then(function(h){c=!0;const f=new Blob([h],{type:a.mimeType});return l=o.createObjectURL(f),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(h){return new Promise(function(f,d){let v=f;t.isImageBitmapLoader===!0&&(v=function(p){const g=new xn(p);g.needsUpdate=!0,f(g)}),t.load(iu.resolveURL(h,r.path),v,void 0,d)})}).then(function(h){return c===!0&&o.revokeObjectURL(l),h.userData.mimeType=a.mimeType||w1(a.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,i){const r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[pt.KHR_TEXTURE_TRANSFORM]){const o=n.extensions!==void 0?n.extensions[pt.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const l=r.associations.get(a);a=r.extensions[pt.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,l)}}return i!==void 0&&(a.colorSpace=i),e[t]=a,a})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new mm,Mi.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(o,l)),n=l}else if(e.isLine){const o="LineBasicMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new pm,Mi.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(o,l)),n=l}if(i||r||a){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=n.clone(),r&&(l.vertexColors=!0),a&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return Ou}loadMaterial(e){const t=this,n=this.json,i=this.extensions,r=n.materials[e];let a;const o={},l=r.extensions||{},c=[];if(l[pt.KHR_MATERIALS_UNLIT]){const h=i[pt.KHR_MATERIALS_UNLIT];a=h.getMaterialType(),c.push(h.extendParams(o,r,t))}else{const h=r.pbrMetallicRoughness||{};if(o.color=new Qe(1,1,1),o.opacity=1,Array.isArray(h.baseColorFactor)){const f=h.baseColorFactor;o.color.fromArray(f),o.opacity=f[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",h.baseColorTexture,Ve)),o.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,o.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",h.metallicRoughnessTexture))),a=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=Ti);const u=r.alphaMode||Uc.OPAQUE;if(u===Uc.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,u===Uc.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==Wr&&(c.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new We(1,1),r.normalTexture.scale!==void 0)){const h=r.normalTexture.scale;o.normalScale.set(h,h)}return r.occlusionTexture!==void 0&&a!==Wr&&(c.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==Wr&&(o.emissive=new Qe().fromArray(r.emissiveFactor)),r.emissiveTexture!==void 0&&a!==Wr&&c.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,Ve)),Promise.all(c).then(function(){const h=new a(o);return r.name&&(h.name=r.name),pr(h,r),t.associations.set(h,{materials:e}),r.extensions&&Pa(i,h,r),h})}createUniqueName(e){const t=Mt.sanitizeNodeName(e||"");let n=t;for(let i=1;this.nodeNamesUsed[n];++i)n=t+"_"+i;return this.nodeNamesUsed[n]=!0,n}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function r(o){return n[pt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return ip(l,o,t)})}const a=[];for(let o=0,l=e.length;o<l;o++){const c=e[o],u=T1(c),h=i[u];if(h)a.push(h.promise);else{let f;c.extensions&&c.extensions[pt.KHR_DRACO_MESH_COMPRESSION]?f=r(c):f=ip(new Ii,c,t),i[u]={primitive:c,promise:f},a.push(f)}}return Promise.all(a)}loadMesh(e){const t=this,n=this.json,i=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let l=0,c=a.length;l<c;l++){const u=a[l].material===void 0?b1(this.cache):this.getDependency("material",a[l].material);o.push(u)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let d=0,v=u.length;d<v;d++){const p=u[d],g=a[d];let m;const S=c[d];if(g.mode===ni.TRIANGLES||g.mode===ni.TRIANGLE_STRIP||g.mode===ni.TRIANGLE_FAN||g.mode===void 0)m=r.isSkinnedMesh===!0?new gT(p,S):new vn(p,S),m.isSkinnedMesh===!0&&m.normalizeSkinWeights(),g.mode===ni.TRIANGLE_STRIP?m.geometry=Jd(m.geometry,Yp):g.mode===ni.TRIANGLE_FAN&&(m.geometry=Jd(m.geometry,Kc));else if(g.mode===ni.LINES)m=new MT(p,S);else if(g.mode===ni.LINE_STRIP)m=new Nu(p,S);else if(g.mode===ni.LINE_LOOP)m=new bT(p,S);else if(g.mode===ni.POINTS)m=new ST(p,S);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(m.geometry.morphAttributes).length>0&&E1(m,r),m.name=t.createUniqueName(r.name||"mesh_"+e),pr(m,r),g.extensions&&Pa(i,m,g),t.assignFinalMaterial(m),h.push(m)}for(let d=0,v=h.length;d<v;d++)t.associations.set(h[d],{meshes:e,primitives:d});if(h.length===1)return h[0];const f=new gr;t.associations.set(f,{meshes:e});for(let d=0,v=h.length;d<v;d++)f.add(h[d]);return f})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Pn(uy.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new Pu(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),pr(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const r=i.pop(),a=i,o=[],l=[];for(let c=0,u=a.length;c<u;c++){const h=a[c];if(h){o.push(h);const f=new at;r!==null&&f.fromArray(r.array,c*16),l.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Uu(o,l)})}loadAnimation(e){const n=this.json.animations[e],i=n.name?n.name:"animation_"+e,r=[],a=[],o=[],l=[],c=[];for(let u=0,h=n.channels.length;u<h;u++){const f=n.channels[u],d=n.samplers[f.sampler],v=f.target,p=v.node,g=n.parameters!==void 0?n.parameters[d.input]:d.input,m=n.parameters!==void 0?n.parameters[d.output]:d.output;v.node!==void 0&&(r.push(this.getDependency("node",p)),a.push(this.getDependency("accessor",g)),o.push(this.getDependency("accessor",m)),l.push(d),c.push(v))}return Promise.all([Promise.all(r),Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(c)]).then(function(u){const h=u[0],f=u[1],d=u[2],v=u[3],p=u[4],g=[];for(let m=0,S=h.length;m<S;m++){const y=h[m],T=f[m],E=d[m],w=v[m],R=p[m];if(y===void 0)continue;y.updateMatrix();let P;switch(dr[R.path]){case dr.weights:P=Ka;break;case dr.rotation:P=ns;break;case dr.position:case dr.scale:default:P=Za;break}const b=y.name?y.name:y.uuid,D=w.interpolation!==void 0?M1[w.interpolation]:na,$=[];dr[R.path]===dr.weights?y.traverse(function(G){G.morphTargetInfluences&&$.push(G.name?G.name:G.uuid)}):$.push(b);let ae=E.array;if(E.normalized){const G=au(ae.constructor),F=new Float32Array(ae.length);for(let V=0,re=ae.length;V<re;V++)F[V]=ae[V]*G;ae=F}for(let G=0,F=$.length;G<F;G++){const V=new P($[G]+"."+dr[R.path],T.array,ae,D);w.interpolation==="CUBICSPLINE"&&(V.createInterpolant=function(K){const ee=this instanceof ns?y1:Tm;return new ee(this.times,this.values,this.getValueSize()/3,K)},V.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0),g.push(V)}}return new CT(i,void 0,g)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){const a=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,c=i.weights.length;l<c;l++)o.morphTargetInfluences[l]=i.weights[l]}),a})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=i.children||[];for(let c=0,u=o.length;c<u;c++)a.push(n.getDependency("node",o[c]));const l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(a),l]).then(function(c){const u=c[0],h=c[1],f=c[2];f!==null&&u.traverse(function(d){d.isSkinnedMesh&&d.bind(f,A1)});for(let d=0,v=h.length;d<v;d++)u.add(h[d]);return u})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],a=r.name?i.createUniqueName(r.name):"",o=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),r.camera!==void 0&&o.push(i.getDependency("camera",r.camera).then(function(c){return i._getNodeRef(i.cameraCache,r.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let u;if(r.isBone===!0?u=new dm:c.length>1?u=new gr:c.length===1?u=c[0]:u=new Gt,u!==c[0])for(let h=0,f=c.length;h<f;h++)u.add(c[h]);if(r.name&&(u.userData.name=r.name,u.name=a),pr(u,r),r.extensions&&Pa(n,u,r),r.matrix!==void 0){const h=new at;h.fromArray(r.matrix),u.applyMatrix4(h)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);return i.associations.has(u)||i.associations.set(u,{}),i.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,r=new gr;n.name&&(r.name=i.createUniqueName(n.name)),pr(r,n),n.extensions&&Pa(t,r,n);const a=n.nodes||[],o=[];for(let l=0,c=a.length;l<c;l++)o.push(i.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let u=0,h=l.length;u<h;u++)r.add(l[u]);const c=u=>{const h=new Map;for(const[f,d]of i.associations)(f instanceof Mi||f instanceof xn)&&h.set(f,d);return u.traverse(f=>{const d=i.associations.get(f);d!=null&&h.set(f,d)}),h};return i.associations=c(r),r})}}function C1(s,e,t){const n=e.attributes,i=new ir;if(n.POSITION!==void 0){const o=t.json.accessors[n.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(i.set(new z(l[0],l[1],l[2]),new z(c[0],c[1],c[2])),o.normalized){const u=au(Ys[o.componentType]);i.min.multiplyScalar(u),i.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const o=new z,l=new z;for(let c=0,u=r.length;c<u;c++){const h=r[c];if(h.POSITION!==void 0){const f=t.json.accessors[h.POSITION],d=f.min,v=f.max;if(d!==void 0&&v!==void 0){if(l.setX(Math.max(Math.abs(d[0]),Math.abs(v[0]))),l.setY(Math.max(Math.abs(d[1]),Math.abs(v[1]))),l.setZ(Math.max(Math.abs(d[2]),Math.abs(v[2]))),f.normalized){const p=au(Ys[f.componentType]);l.multiplyScalar(p)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}s.boundingBox=i;const a=new Di;i.getCenter(a.center),a.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=a}function ip(s,e,t){const n=e.attributes,i=[];function r(a,o){return t.getDependency("accessor",a).then(function(l){s.setAttribute(o,l)})}for(const a in n){const o=su[a]||a.toLowerCase();o in s.attributes||i.push(r(n[a],o))}if(e.indices!==void 0&&!s.index){const a=t.getDependency("accessor",e.indices).then(function(o){s.setIndex(o)});i.push(a)}return pr(s,e),C1(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?S1(s,e.targets,t):s})}const rp={type:"change"},Nc={type:"start"},sp={type:"end"};class L1 extends os{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new z,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ms.ROTATE,MIDDLE:Ms.DOLLY,RIGHT:Ms.PAN},this.touches={ONE:bs.ROTATE,TWO:bs.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(U){U.addEventListener("keydown",ut),this._domElementKeyEvents=U},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",ut),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(rp),n.update(),r=i.NONE},this.update=function(){const U=new z,ce=new Li().setFromUnitVectors(e.up,new z(0,1,0)),me=ce.clone().invert(),Q=new z,Pe=new Li,De=2*Math.PI;return function(){const Re=n.object.position;U.copy(Re).sub(n.target),U.applyQuaternion(ce),o.setFromVector3(U),n.autoRotate&&r===i.NONE&&b(R()),n.enableDamping?(o.theta+=l.theta*n.dampingFactor,o.phi+=l.phi*n.dampingFactor):(o.theta+=l.theta,o.phi+=l.phi);let Ee=n.minAzimuthAngle,ze=n.maxAzimuthAngle;return isFinite(Ee)&&isFinite(ze)&&(Ee<-Math.PI?Ee+=De:Ee>Math.PI&&(Ee-=De),ze<-Math.PI?ze+=De:ze>Math.PI&&(ze-=De),Ee<=ze?o.theta=Math.max(Ee,Math.min(ze,o.theta)):o.theta=o.theta>(Ee+ze)/2?Math.max(Ee,o.theta):Math.min(ze,o.theta)),o.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,o.phi)),o.makeSafe(),o.radius*=c,o.radius=Math.max(n.minDistance,Math.min(n.maxDistance,o.radius)),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),U.setFromSpherical(o),U.applyQuaternion(me),Re.copy(n.target).add(U),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),u.set(0,0,0)),c=1,h||Q.distanceToSquared(n.object.position)>a||8*(1-Pe.dot(n.object.quaternion))>a?(n.dispatchEvent(rp),Q.copy(n.object.position),Pe.copy(n.object.quaternion),h=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",I),n.domElement.removeEventListener("pointerdown",Ue),n.domElement.removeEventListener("pointercancel",Fe),n.domElement.removeEventListener("wheel",Xe),n.domElement.removeEventListener("pointermove",$e),n.domElement.removeEventListener("pointerup",Fe),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",ut),n._domElementKeyEvents=null)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let r=i.NONE;const a=1e-6,o=new Zd,l=new Zd;let c=1;const u=new z;let h=!1;const f=new We,d=new We,v=new We,p=new We,g=new We,m=new We,S=new We,y=new We,T=new We,E=[],w={};function R(){return 2*Math.PI/60/60*n.autoRotateSpeed}function P(){return Math.pow(.95,n.zoomSpeed)}function b(U){l.theta-=U}function D(U){l.phi-=U}const $=function(){const U=new z;return function(me,Q){U.setFromMatrixColumn(Q,0),U.multiplyScalar(-me),u.add(U)}}(),ae=function(){const U=new z;return function(me,Q){n.screenSpacePanning===!0?U.setFromMatrixColumn(Q,1):(U.setFromMatrixColumn(Q,0),U.crossVectors(n.object.up,U)),U.multiplyScalar(me),u.add(U)}}(),G=function(){const U=new z;return function(me,Q){const Pe=n.domElement;if(n.object.isPerspectiveCamera){const De=n.object.position;U.copy(De).sub(n.target);let Ie=U.length();Ie*=Math.tan(n.object.fov/2*Math.PI/180),$(2*me*Ie/Pe.clientHeight,n.object.matrix),ae(2*Q*Ie/Pe.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?($(me*(n.object.right-n.object.left)/n.object.zoom/Pe.clientWidth,n.object.matrix),ae(Q*(n.object.top-n.object.bottom)/n.object.zoom/Pe.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function F(U){n.object.isPerspectiveCamera?c/=U:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*U)),n.object.updateProjectionMatrix(),h=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function V(U){n.object.isPerspectiveCamera?c*=U:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/U)),n.object.updateProjectionMatrix(),h=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function re(U){f.set(U.clientX,U.clientY)}function K(U){S.set(U.clientX,U.clientY)}function ee(U){p.set(U.clientX,U.clientY)}function oe(U){d.set(U.clientX,U.clientY),v.subVectors(d,f).multiplyScalar(n.rotateSpeed);const ce=n.domElement;b(2*Math.PI*v.x/ce.clientHeight),D(2*Math.PI*v.y/ce.clientHeight),f.copy(d),n.update()}function ue(U){y.set(U.clientX,U.clientY),T.subVectors(y,S),T.y>0?F(P()):T.y<0&&V(P()),S.copy(y),n.update()}function Te(U){g.set(U.clientX,U.clientY),m.subVectors(g,p).multiplyScalar(n.panSpeed),G(m.x,m.y),p.copy(g),n.update()}function Z(U){U.deltaY<0?V(P()):U.deltaY>0&&F(P()),n.update()}function fe(U){let ce=!1;switch(U.code){case n.keys.UP:U.ctrlKey||U.metaKey||U.shiftKey?D(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):G(0,n.keyPanSpeed),ce=!0;break;case n.keys.BOTTOM:U.ctrlKey||U.metaKey||U.shiftKey?D(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):G(0,-n.keyPanSpeed),ce=!0;break;case n.keys.LEFT:U.ctrlKey||U.metaKey||U.shiftKey?b(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):G(n.keyPanSpeed,0),ce=!0;break;case n.keys.RIGHT:U.ctrlKey||U.metaKey||U.shiftKey?b(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):G(-n.keyPanSpeed,0),ce=!0;break}ce&&(U.preventDefault(),n.update())}function le(){if(E.length===1)f.set(E[0].pageX,E[0].pageY);else{const U=.5*(E[0].pageX+E[1].pageX),ce=.5*(E[0].pageY+E[1].pageY);f.set(U,ce)}}function ye(){if(E.length===1)p.set(E[0].pageX,E[0].pageY);else{const U=.5*(E[0].pageX+E[1].pageX),ce=.5*(E[0].pageY+E[1].pageY);p.set(U,ce)}}function we(){const U=E[0].pageX-E[1].pageX,ce=E[0].pageY-E[1].pageY,me=Math.sqrt(U*U+ce*ce);S.set(0,me)}function Ne(){n.enableZoom&&we(),n.enablePan&&ye()}function Ke(){n.enableZoom&&we(),n.enableRotate&&le()}function Be(U){if(E.length==1)d.set(U.pageX,U.pageY);else{const me=ge(U),Q=.5*(U.pageX+me.x),Pe=.5*(U.pageY+me.y);d.set(Q,Pe)}v.subVectors(d,f).multiplyScalar(n.rotateSpeed);const ce=n.domElement;b(2*Math.PI*v.x/ce.clientHeight),D(2*Math.PI*v.y/ce.clientHeight),f.copy(d)}function kt(U){if(E.length===1)g.set(U.pageX,U.pageY);else{const ce=ge(U),me=.5*(U.pageX+ce.x),Q=.5*(U.pageY+ce.y);g.set(me,Q)}m.subVectors(g,p).multiplyScalar(n.panSpeed),G(m.x,m.y),p.copy(g)}function et(U){const ce=ge(U),me=U.pageX-ce.x,Q=U.pageY-ce.y,Pe=Math.sqrt(me*me+Q*Q);y.set(0,Pe),T.set(0,Math.pow(y.y/S.y,n.zoomSpeed)),F(T.y),S.copy(y)}function Y(U){n.enableZoom&&et(U),n.enablePan&&kt(U)}function qt(U){n.enableZoom&&et(U),n.enableRotate&&Be(U)}function Ue(U){n.enabled!==!1&&(E.length===0&&(n.domElement.setPointerCapture(U.pointerId),n.domElement.addEventListener("pointermove",$e),n.domElement.addEventListener("pointerup",Fe)),A(U),U.pointerType==="touch"?Vt(U):vt(U))}function $e(U){n.enabled!==!1&&(U.pointerType==="touch"?$t(U):Ye(U))}function Fe(U){te(U),E.length===0&&(n.domElement.releasePointerCapture(U.pointerId),n.domElement.removeEventListener("pointermove",$e),n.domElement.removeEventListener("pointerup",Fe)),n.dispatchEvent(sp),r=i.NONE}function vt(U){let ce;switch(U.button){case 0:ce=n.mouseButtons.LEFT;break;case 1:ce=n.mouseButtons.MIDDLE;break;case 2:ce=n.mouseButtons.RIGHT;break;default:ce=-1}switch(ce){case Ms.DOLLY:if(n.enableZoom===!1)return;K(U),r=i.DOLLY;break;case Ms.ROTATE:if(U.ctrlKey||U.metaKey||U.shiftKey){if(n.enablePan===!1)return;ee(U),r=i.PAN}else{if(n.enableRotate===!1)return;re(U),r=i.ROTATE}break;case Ms.PAN:if(U.ctrlKey||U.metaKey||U.shiftKey){if(n.enableRotate===!1)return;re(U),r=i.ROTATE}else{if(n.enablePan===!1)return;ee(U),r=i.PAN}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(Nc)}function Ye(U){switch(r){case i.ROTATE:if(n.enableRotate===!1)return;oe(U);break;case i.DOLLY:if(n.enableZoom===!1)return;ue(U);break;case i.PAN:if(n.enablePan===!1)return;Te(U);break}}function Xe(U){n.enabled===!1||n.enableZoom===!1||r!==i.NONE||(U.preventDefault(),n.dispatchEvent(Nc),Z(U),n.dispatchEvent(sp))}function ut(U){n.enabled===!1||n.enablePan===!1||fe(U)}function Vt(U){switch(_e(U),E.length){case 1:switch(n.touches.ONE){case bs.ROTATE:if(n.enableRotate===!1)return;le(),r=i.TOUCH_ROTATE;break;case bs.PAN:if(n.enablePan===!1)return;ye(),r=i.TOUCH_PAN;break;default:r=i.NONE}break;case 2:switch(n.touches.TWO){case bs.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Ne(),r=i.TOUCH_DOLLY_PAN;break;case bs.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Ke(),r=i.TOUCH_DOLLY_ROTATE;break;default:r=i.NONE}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(Nc)}function $t(U){switch(_e(U),r){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;Be(U),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;kt(U),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Y(U),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;qt(U),n.update();break;default:r=i.NONE}}function I(U){n.enabled!==!1&&U.preventDefault()}function A(U){E.push(U)}function te(U){delete w[U.pointerId];for(let ce=0;ce<E.length;ce++)if(E[ce].pointerId==U.pointerId){E.splice(ce,1);return}}function _e(U){let ce=w[U.pointerId];ce===void 0&&(ce=new We,w[U.pointerId]=ce),ce.set(U.pageX,U.pageY)}function ge(U){const ce=U.pointerId===E[0].pointerId?E[1]:E[0];return w[ce.pointerId]}n.domElement.addEventListener("contextmenu",I),n.domElement.addEventListener("pointerdown",Ue),n.domElement.addEventListener("pointercancel",Fe),n.domElement.addEventListener("wheel",Xe,{passive:!1}),this.update()}}const _l=class{constructor(){H(this,"subscribers");this.subscribers={}}static getInstance(){return this.instance===void 0&&(this.instance=new _l),this.instance}dispatch(e,t){const n=this.subscribers[e];n!==void 0&&Object.keys(n).forEach(i=>n[i](t))}register(e,t){const n=this.getNextId();return this.subscribers[e]||(this.subscribers[e]={}),this.subscribers[e][n]=t,{unregister:()=>{delete this.subscribers[e][n],Object.keys(this.subscribers[e]).length===0&&delete this.subscribers[e]}}}getNextId(){return _l.nextId++}};let Fa=_l;H(Fa,"nextId",0),H(Fa,"instance");const P1={isChrome:()=>/Chrome/.test(navigator.userAgent)&&/Google Inc/.test(navigator.userAgent),getHeapInfo:()=>{const s=window.performance,e={totalSize:0,usedSize:0,limitSize:0,allocated:0,consumed:0};return s&&s.memory&&(e.limitSize=s.memory.jsHeapSizeLimit,e.totalSize=s.memory.totalJSHeapSize,e.usedSize=s.memory.usedJSHeapSize,e.allocated=100*e.totalSize/e.limitSize,e.consumed=100*e.usedSize/e.limitSize),e}},rh=class{constructor(){H(this,"subscribers");this.subscribers={}}dispatch(e,t){const n=this.subscribers[e];n!==void 0&&Object.keys(n).forEach(i=>n[i](t))}register(e,t){const n=this.getNextId();return this.subscribers[e]||(this.subscribers[e]={}),this.subscribers[e][n]=t,{unregister:()=>{delete this.subscribers[e][n],Object.keys(this.subscribers[e]).length===0&&delete this.subscribers[e]}}}on(e,t){return this.register(e,t)}getNextId(){return rh.nextId++}};let Va=rh;H(Va,"nextId",0);class ll{static async loadCubeEnvTexture(e,t,n){const i=r=>r.includes("park")?"park":r.includes("bridge")?"bridge":r.includes("snow")?"snow":"unknown";return new Promise((r,a)=>{new UT(new xm(()=>{var o;(o=n==null?void 0:n.onStart)==null||o.call(n,`start downloading ${t.length} files from "${e}"`)},(o,l,c)=>{var h;const u=i(o);(h=n==null?void 0:n.onProgress)==null||h.call(n,o,l,c,u)},o=>{var c;const l=`Error loading ${o}`;console.error(l),a(l),(c=n==null?void 0:n.onError)==null||c.call(n,l,o)})).setPath(e).load(t,o=>{var l;r(o),(l=n==null?void 0:n.onDownloaded)==null||l.call(n,o),o.dispose()},o=>{console.log(o.loaded)})})}static async loadDefaultCubeEnvTexture(e,t){const n=["posx.jpg","negx.jpg","posy.jpg","negy.jpg","posz.jpg","negz.jpg"];return this.loadCubeEnvTexture(`textures/cube/${e}/`,n,t)}static async loadTexture(e){//! TODO: Add download manager and callbacks to track downloading states and progress.
return new Promise((t,n)=>{new bm().load(e,i=>{t(i)})})}}H(ll,"loadGLTF",(e,t)=>new Promise((n,i)=>{let r=0;new JT().load(e,a=>{var u;a.scene.traverse(h=>{h instanceof vn&&(h.castShadow=!0,h.receiveShadow=!0)});const o=[];a.scenes.forEach(h=>{o.push(h.name)});const c={glTF:a,info:{path:e,size:r,sceneNames:o}};(u=t==null?void 0:t.loaded)==null||u.call(t,c),n(c)},a=>{var l;r=a.total;const o={path:e,percent:a.loaded/a.total*100,loaded:a.loaded,total:a.total};(l=t==null?void 0:t.loading)==null||l.call(t,o)},a=>{var l;const o=`Error loading GLTF model - ${a}`;(l=t==null?void 0:t.error)==null||l.call(t,o),i(o),console.error()})}));class wm extends Va{constructor(t,n){var i;super();H(this,"_renderingContainer");H(this,"_renderingCanvas");H(this,"_overlayContainer");H(this,"_overlayCanvas");H(this,"_backContainer");H(this,"_backCanvas");H(this,"_mousePosition",new We);H(this,"_isMouseDown",!1);H(this,"getRenderingCanvas",()=>this._renderingCanvas);H(this,"getContainer",()=>{if(this._renderingCanvas.parentElement===null)throw new Error(`The canvas "${this._renderingCanvas.id}" has no parent element`);return this._renderingCanvas.parentElement});H(this,"getCanvas",()=>this._renderingCanvas);H(this,"updateClientRects",()=>new Promise(t=>{requestAnimationFrame(()=>{this._renderingContainer.getBoundingClientRect(),this._overlayContainer.getBoundingClientRect(),this._backContainer.getBoundingClientRect(),t(this)})}));H(this,"getOverlayContainer",()=>this._overlayContainer);H(this,"getOverlayCanvas",()=>this._overlayCanvas);H(this,"getBackContainer",()=>this._backContainer);H(this,"getBackCanvas",()=>this._backCanvas);H(this,"getMousePosition",()=>this._mousePosition);H(this,"addOverlayContainer",t=>{const n=this.getContainer();if(n===null)throw new Error(`The canvas "${this._renderingCanvas.id}" has no parent element`);n.style.position!=="relative"&&(console.warn(`The display property of parent element "${n}" is changed to "relative"`),n.style.position="relative"),n.appendChild(t)});H(this,"createOverlayContainer",(t,n)=>Ft.createOverlayContainer(t||"overlay-container",n));H(this,"createOverlayCanvas",t=>Ft.createCanvas(t||"overlay-canvas"));H(this,"createBackContainer",(t,n)=>Ft.createBackContainer(t||"back-container",n));H(this,"createBackCanvas",t=>Ft.createCanvas(t||"back-canvas"));H(this,"initialCanvas2D",()=>new Promise(t=>{window.requestAnimationFrame(()=>{this._overlayContainer.getBoundingClientRect(),this._renderingContainer.getBoundingClientRect(),this._backContainer.getBoundingClientRect(),t(this._overlayCanvas)})}));H(this,"computeNormalizedMousePosition",(t,n)=>{const i=this._renderingCanvas.getBoundingClientRect(),r=t-i.left,a=n-i.top,o=+(r/i.width)*2-1,l=-(a/i.height)*2+1;return new We(o,l)});H(this,"getNormalizedMousePosition",()=>this.computeNormalizedMousePosition(this._mousePosition.x,this._mousePosition.y));H(this,"addEvents",()=>{const t=this._overlayContainer;t.addEventListener("mousedown",this.handleCanvasMouseDown),t.addEventListener("mouseup",this.handleCanvasMouseUp),t.addEventListener("mouseenter",this.handleCanvasMouseEnter),t.addEventListener("mousemove",this.handleCanvasMouseMove),t.addEventListener("mouseleave",this.handleCanvasMouseLeave),t.addEventListener("click",this.handleCanvasMouseClick),t.addEventListener("dblclick",this.handleCanvasMouseDblClick),t.addEventListener("keydown",this.handleCanvasKeyDown),t.addEventListener("keyup",this.handleCanvasKeyUp)});H(this,"removeEvents",()=>{const t=this._overlayContainer;t.removeEventListener("mousedown",this.handleCanvasMouseDown),t.removeEventListener("mouseup",this.handleCanvasMouseUp),t.removeEventListener("mouseenter",this.handleCanvasMouseEnter),t.removeEventListener("mousemove",this.handleCanvasMouseMove),t.removeEventListener("mouseleave",this.handleCanvasMouseLeave),t.removeEventListener("click",this.handleCanvasMouseClick),t.removeEventListener("dblclick",this.handleCanvasMouseDblClick),t.removeEventListener("keydown",this.handleCanvasKeyDown),t.removeEventListener("keyup",this.handleCanvasKeyUp)});H(this,"handleCanvasMouseDown",t=>{this._isMouseDown=!0,this.dispatch("mousedown",t)});H(this,"handleCanvasMouseUp",t=>{this._isMouseDown=!1,this.dispatch("mouseup",t)});H(this,"handleCanvasMouseEnter",t=>{this.dispatch("mouseenter",t)});H(this,"handleCanvasMouseMove",t=>{this._mousePosition.x=t.clientX,this._mousePosition.y=t.clientY,this.dispatch("mousemove",t),this._isMouseDown&&this.dispatch("mousedrag",t)});H(this,"handleCanvasMouseLeave",t=>{this.dispatch("mouseleave",t)});H(this,"handleCanvasMouseClick",t=>{this.dispatch("click",t)});H(this,"handleCanvasMouseDblClick",t=>{this.dispatch("dblclick",t)});H(this,"handleCanvasKeyDown",t=>{this.dispatch("keydown",t)});H(this,"handleCanvasKeyUp",t=>{this.dispatch("keyup",t)});H(this,"onMouseDown",t=>{this.on("mousedown",t)});H(this,"onMouseUp",t=>{this.on("mouseup",t)});H(this,"onMouseEnter",t=>{this.on("mouseenter",t)});H(this,"onMouseMove",t=>{this.on("mousemove",t)});H(this,"onMouseLeave",t=>{this.on("mouseleave",t)});H(this,"onMouseClick",t=>{this.on("click",t)});H(this,"onMouseDblClick",t=>{this.on("dblclick",t)});H(this,"onKeyDown",t=>{this.on("keydown",t)});H(this,"onKeyUp",t=>{this.on("keyup",t)});this.graphics=t,this._renderingContainer=Ft.getElementById(n),this._renderingCanvas=Ft.createCanvas(Ft.generateUUID("canvas3d")),this._renderingCanvas.setAttribute("copyright","@drsant"),this._renderingCanvas.style.zIndex="0",(i=this._renderingContainer)==null||i.appendChild(this._renderingCanvas),(this._renderingContainer===void 0||this._renderingContainer===null)&&console.error(`Cannot find the div container with id "${n}".`),this._renderingContainer.style.position="relative",this._overlayContainer=this.createOverlayContainer("overlay-container"),this._overlayCanvas=this.createOverlayCanvas("overlay-canvas"),this._renderingCanvas.setAttribute("copyright","@drsant"),this._backContainer=this.createBackContainer("back-container"),this._backCanvas=this.createBackCanvas("back-canvas"),this._renderingContainer.appendChild(this._overlayContainer),this._renderingContainer.appendChild(this._backContainer),this._overlayContainer.appendChild(this._overlayCanvas),this._backContainer.appendChild(this._backCanvas),this._overlayContainer.style.zIndex=this._overlayCanvas.style.zIndex="999",this._renderingContainer.style.zIndex=this._renderingCanvas.style.zIndex="0",this._backContainer.style.zIndex=this._backCanvas.style.zIndex="-999",this.updateClientRects(),this.addEvents()}dispose(){var t;this.removeEvents(),(t=this.getRenderingCanvas().parentElement)==null||t.removeChild(this.getRenderingCanvas()),this._overlayContainer.removeChild(this._overlayCanvas)}}H(wm,"version","v1.0.0");class D1{constructor(e){H(this,"_disMouseEnter",!1);H(this,"_disMouseLeave",!1);H(this,"_target");H(this,"_callbackOptions");H(this,"_raycaster",new ZT);H(this,"sense",(e,t)=>{if(e==null){const n=this.graphics.getMeshes();this._target=n[0],console.log(`%cThe target is ${e}, take the first mesh as target.`,"color: yellow")}else typeof e=="string"&&(this._target=this.graphics.getObjectByName(e),console.log(`%cThe target name is ${e}, take it from the main scene.`,"color: yellow"));this._callbackOptions=t});H(this,"getIntersects",e=>{const t=this.graphics,i=t.getGraphicsCanvas().getNormalizedMousePosition();this._raycaster.setFromCamera(i,t.camera);const r=this._raycaster.intersectObjects(t.scene.children,!0);if(r.length>0&&r[0].object.name===(e==null?void 0:e.name))return r});this.graphics=e;let t=!1,n=0,i;const r=this.graphics.getGraphicsCanvas();r.on("mousemove",a=>{var c,u,h,f,d,v,p;const o=r.getNormalizedMousePosition();this._raycaster.setFromCamera(o,this.graphics.camera);const l=this._raycaster.intersectObjects(this.graphics.scene.children,!0);t=l.length>0&&l[0].object.name===((c=this._target)==null?void 0:c.name),t&&(i=l[0],(h=(u=this._callbackOptions)==null?void 0:u.mouseMove)==null||h.call(u,i),r.dispatch("ray-move",i)),t&&this._disMouseEnter===!1?(this._disMouseEnter=!0,this._disMouseLeave=!1,n+=1,(d=(f=this._callbackOptions)==null?void 0:f.mouseEnter)==null||d.call(f,i),r.dispatch("ray-enter",i)):t===!1&&n>0&&this._disMouseLeave===!1&&(this._disMouseEnter=!1,this._disMouseLeave=!0,(p=(v=this._callbackOptions)==null?void 0:v.mouseLeave)==null||p.call(v,i),r.dispatch("ray-leave",this._target))}),r.on("mousedown",a=>{var l,c;const o=this.getIntersects(this._target);o&&((c=(l=this._callbackOptions)==null?void 0:l.mouseDown)==null||c.call(l,o[0]),r.dispatch("ray-mousedown",this._target))}),r.on("mouseup",a=>{var l,c;const o=this.getIntersects(this._target);o&&((c=(l=this._callbackOptions)==null?void 0:l.mouseUp)==null||c.call(l,o[0]),r.dispatch("ray-mouseup",this._target))}),r.on("click",a=>{var l,c;const o=this.getIntersects(this._target);o&&((c=(l=this._callbackOptions)==null?void 0:l.mouseClick)==null||c.call(l,o[0]),r.dispatch("ray-click",this._target))}),r.on("dblclick",a=>{var l,c;const o=this.getIntersects(this._target);o&&((c=(l=this._callbackOptions)==null?void 0:l.mouseDblClick)==null||c.call(l,o[0]),r.dispatch("ray-dblclick",this._target))}),r.on("mousedrag",a=>{var l,c;const o=this.getIntersects(this._target);o&&((c=(l=this._callbackOptions)==null?void 0:l.mouseDrag)==null||c.call(l,o[0]),r.dispatch("ray-drag",this._target))})}}const I1=[{type:"env",name:"park"},{type:"env",name:"bridge"},{type:"env",name:"snow"},{type:"gltf",name:"cube1.glb"}],Tt=class{};let Ln=Tt;H(Ln,"envMaps",[]),H(Ln,"glTFs",[]),H(Ln,"resources"),H(Ln,"resourceList",I1),H(Ln,"inprogress",!1),H(Ln,"dispose",()=>{Tt.resources&&(Tt.resources.loaded=!1,Tt.inprogress=!1,Tt.resources.envMaps.forEach(e=>{e.dispose()}),Tt.resources.glTFs.forEach(e=>{e.scenes.forEach(t=>{t.traverse(n=>{n instanceof vn&&n.geometry.dispose(),n instanceof Mi&&(n.dispose(),console.log(`dispose material ${n.uuid}`))})})}),Tt.resources.envMaps=[],Tt.resources.glTFs=[])}),H(Ln,"waitResource",async e=>new Promise(t=>{let n=0;const i=setInterval(()=>{console.log(`${e} waiting...${++n}`),Tt.resources.loaded===!0&&(clearInterval(i),console.log(`%c${e} resolving...`,"color: lime"),t())},100)})),H(Ln,"downloadResources",async(e,t,n)=>(Tt.resources={envMaps:Tt.envMaps,glTFs:Tt.glTFs,loaded:!1},console.log(`%c${e} is try to download`,"color: cyan"),Tt.inprogress===!0&&(console.log("%creject, the previous caller is in progress...","color: yellow"),await Tt.waitResource(e)),Tt.resources.loaded===!0?new Promise(i=>{i(Tt.resources)}):(Tt.inprogress=!0,new Promise((i,r)=>{let a=0;const o=()=>{a+=1,a>=Tt.resourceList.length&&(Tt.resources.envMaps=Tt.envMaps,Tt.resources.loaded=!0,Tt.inprogress=!1,i(Tt.resources))};Tt.resourceList.forEach(async l=>{l.type==="env"?ll.loadDefaultCubeEnvTexture(l.name,t).then(c=>{Tt.envMaps.push(c),o()}).catch(()=>r(`error downloading ${l.type}.${l.name}`)):l.type==="gltf"&&ll.loadGLTF(l.name,n).then(c=>{const u=c.glTF;Tt.glTFs.push(u),console.log(`%c${l.name} contains ${u.scenes.length} scenes:`,"color: lime"),u.scenes.forEach(h=>{console.log(`%c  + ${h.name}`,"color: cyan")}),o()}).catch(()=>r(`error downloading ${l.type}.${l.name}`))})}))));class U1 extends Va{constructor(t,n){super();H(this,"scene",new Cd);H(this,"camera",new Pn);H(this,"renderer",new tu);H(this,"controls");H(this,"isRunning",!0);H(this,"frameCnt",0);H(this,"graphicsCanvas");H(this,"loadGLTF",async(t,n)=>await ll.loadGLTF(t,n));H(this,"useScene",(t,n)=>{n=n||0,n=n>=t.scenes.length?t.scenes.length-1:n,n=n<0?t.scenes.length-1:n;const i=t.scenes[n].clone();return t.scenes[n].traverse(r=>{i.add(r.clone())}),this.scene.add(i),i});H(this,"clearScene",()=>{this.scene.traverse(t=>{var n,i,r,a,o,l,c;this.scene.remove(t),t instanceof vn&&(t.geometry.dispose(),(n=t.material.map)==null||n.dispose(),(i=t.material.aoMap)==null||i.dispose(),(r=t.material.alphaMap)==null||r.dispose(),(a=t.material.envMap)==null||a.dispose(),(o=t.material.lightMap)==null||o.dispose(),(l=t.material.specularMap)==null||l.dispose(),(c=t.material.normalMap)==null||c.dispose(),t.material.dispose())})});H(this,"update",t=>{var n;this.isRunning===!1&&this.frameCnt>0||(this.frameCnt+=1,(n=this.controls)==null||n.update(),this.renderer.render(this.scene,this.camera))});H(this,"initElements",async t=>{var i,r;if((i=this.graphicsCanvas)==null||i.dispose(),this.graphicsCanvas=new wm(this,t),this.graphicsCanvas===null||this.graphicsCanvas===void 0)throw new Error("Cannot create the GraphicsCanvas!");const n=this.graphicsCanvas.getRenderingCanvas();this.renderer.dispose(),this.renderer=new tu({canvas:n,antialias:!0}),this.renderer.setClearAlpha(0),this.renderer.setClearColor(0,0),this.renderer.setSize(n.width,n.height),this.renderer.setPixelRatio(n.width/n.height),this.camera.aspect=n.width/n.height,this.camera.updateProjectionMatrix(),(r=this.controls)==null||r.dispose(),this.controls=new L1(this.camera,this.graphicsCanvas.getOverlayContainer()),window.addEventListener("resize",()=>{const a={width:window.innerWidth,height:window.innerHeight};this.dispatch("resize",a),console.log({width:window.innerWidth,height:window.innerHeight})})});H(this,"onResize",t=>{this.on("resize",t)});H(this,"setSize",async(t,n)=>{const i=this.getGraphicsCanvas().getRenderingCanvas();i.width=t,i.height=n;const r=await this.getGraphicsCanvas().getOverlayCanvas();r.width=t,r.height=n;const a=await this.getGraphicsCanvas().getBackCanvas();a.width=t,a.height=n,this.renderer.setSize(i.width,i.height),this.renderer.setPixelRatio(i.width/i.height),this.camera.aspect=i.width/i.height,this.camera.updateProjectionMatrix()});H(this,"setSize169",()=>{this.setSize(window.innerWidth,window.innerWidth*9/16)});H(this,"getObjectByName",(t,n)=>{const i=n||this.scene;let r;return i.traverse(a=>{a.name==t&&(a instanceof vn||a instanceof gr||a instanceof Cd)&&(r=a)}),r});H(this,"getMeshes",t=>{const n=[];return t=t||this.scene,t.traverse(i=>{i instanceof vn&&n.push(i)}),n});H(this,"getCamera",()=>this.camera);H(this,"getRenderer",()=>this.renderer);H(this,"getScene",()=>this.scene);H(this,"getRenderingCanvas",()=>this.renderer.domElement);H(this,"getGraphicsCanvas",()=>this.graphicsCanvas);H(this,"createRaySensor",()=>new D1(this));H(this,"setBackground",t=>{this.scene.background=t});H(this,"clearBackground",()=>{this.scene.background=null});H(this,"setBackgroundBlurriness",t=>{this.scene.backgroundBlurriness=t});H(this,"setBackgroundIntensity",t=>{this.scene.backgroundIntensity=t});H(this,"setEnvironment",t=>{this.scene.environment=t});H(this,"clearEnvironment",()=>{this.scene.environment=null});H(this,"getOverlayContainer",()=>{var t;return(t=this.graphicsCanvas)==null?void 0:t.getOverlayContainer()});H(this,"getOverlayCanvas",()=>{var t;return(t=this.graphicsCanvas)==null?void 0:t.getOverlayCanvas()});H(this,"getBackContainer",()=>{var t;return(t=this.graphicsCanvas)==null?void 0:t.getBackContainer()});H(this,"getBackCanvas",()=>{var t;return(t=this.graphicsCanvas)==null?void 0:t.getBackCanvas()});H(this,"nextEnvironment",(t=!0)=>{const n=Ln.resources.envMaps,i=r=>{this.scene.environment=r,t===!0&&(this.scene.background=r)};if(this.scene.environment==null)i(n[0]);else{const r=n.filter(o=>o==this.scene.environment)[0];let a=n.indexOf(r);a=(a+1)%n.length,i(n[a])}});H(this,"previousEnvironment",(t=!0)=>{const n=Ln.resources.envMaps,i=r=>{this.scene.environment=r,t===!0&&(this.scene.background=r)};if(this.scene.environment==null)i(n[n.length-1]);else{const r=n.filter(o=>o==this.scene.environment)[0];let a=n.indexOf(r);a=a-1<0?n.length-1:a-1,i(n[a])}});this.engine=t,this.initElements(n),this.engine.addCallback(this.update),this.camera.position.set(0,0,5),this.camera.lookAt(new z(0));const i=new Sm(16777215,2);i.position.set(2,5,2),this.scene.add(i),this.scene.add(new zT(16777215,1))}start(){this.isRunning=!0}stop(){this.isRunning=!1}}var N1=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function O1(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Am={exports:{}};/**
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
 */(function(s,e){(function(t,n){s.exports=n()})(N1,function(){for(var t=function(_,x,M){return x===void 0&&(x=0),M===void 0&&(M=1),_<x?x:_>M?M:_},n=t,i=function(_){_._clipped=!1,_._unclipped=_.slice(0);for(var x=0;x<=3;x++)x<3?((_[x]<0||_[x]>255)&&(_._clipped=!0),_[x]=n(_[x],0,255)):x===3&&(_[x]=n(_[x],0,1));return _},r={},a=0,o=["Boolean","Number","String","Function","Array","Date","RegExp","Undefined","Null"];a<o.length;a+=1){var l=o[a];r["[object "+l+"]"]=l.toLowerCase()}var c=function(_){return r[Object.prototype.toString.call(_)]||"object"},u=c,h=function(_,x){return x===void 0&&(x=null),_.length>=3?Array.prototype.slice.call(_):u(_[0])=="object"&&x?x.split("").filter(function(M){return _[0][M]!==void 0}).map(function(M){return _[0][M]}):_[0]},f=c,d=function(_){if(_.length<2)return null;var x=_.length-1;return f(_[x])=="string"?_[x].toLowerCase():null},v=Math.PI,p={clip_rgb:i,limit:t,type:c,unpack:h,last:d,PI:v,TWOPI:v*2,PITHIRD:v/3,DEG2RAD:v/180,RAD2DEG:180/v},g={format:{},autodetect:[]},m=p.last,S=p.clip_rgb,y=p.type,T=g,E=function(){for(var x=[],M=arguments.length;M--;)x[M]=arguments[M];var L=this;if(y(x[0])==="object"&&x[0].constructor&&x[0].constructor===this.constructor)return x[0];var O=m(x),k=!1;if(!O){k=!0,T.sorted||(T.autodetect=T.autodetect.sort(function(he,Se){return Se.p-he.p}),T.sorted=!0);for(var N=0,W=T.autodetect;N<W.length;N+=1){var q=W[N];if(O=q.test.apply(q,x),O)break}}if(T.format[O]){var se=T.format[O].apply(null,k?x:x.slice(0,-1));L._rgb=S(se)}else throw new Error("unknown format: "+x);L._rgb.length===3&&L._rgb.push(1)};E.prototype.toString=function(){return y(this.hex)=="function"?this.hex():"["+this._rgb.join(",")+"]"};var w=E,R=function(){for(var _=[],x=arguments.length;x--;)_[x]=arguments[x];return new(Function.prototype.bind.apply(R.Color,[null].concat(_)))};R.Color=w,R.version="2.4.2";var P=R,b=p.unpack,D=Math.max,$=function(){for(var _=[],x=arguments.length;x--;)_[x]=arguments[x];var M=b(_,"rgb"),L=M[0],O=M[1],k=M[2];L=L/255,O=O/255,k=k/255;var N=1-D(L,D(O,k)),W=N<1?1/(1-N):0,q=(1-L-N)*W,se=(1-O-N)*W,he=(1-k-N)*W;return[q,se,he,N]},ae=$,G=p.unpack,F=function(){for(var _=[],x=arguments.length;x--;)_[x]=arguments[x];_=G(_,"cmyk");var M=_[0],L=_[1],O=_[2],k=_[3],N=_.length>4?_[4]:1;return k===1?[0,0,0,N]:[M>=1?0:255*(1-M)*(1-k),L>=1?0:255*(1-L)*(1-k),O>=1?0:255*(1-O)*(1-k),N]},V=F,re=P,K=w,ee=g,oe=p.unpack,ue=p.type,Te=ae;K.prototype.cmyk=function(){return Te(this._rgb)},re.cmyk=function(){for(var _=[],x=arguments.length;x--;)_[x]=arguments[x];return new(Function.prototype.bind.apply(K,[null].concat(_,["cmyk"])))},ee.format.cmyk=V,ee.autodetect.push({p:2,test:function(){for(var _=[],x=arguments.length;x--;)_[x]=arguments[x];if(_=oe(_,"cmyk"),ue(_)==="array"&&_.length===4)return"cmyk"}});var Z=p.unpack,fe=p.last,le=function(_){return Math.round(_*100)/100},ye=function(){for(var _=[],x=arguments.length;x--;)_[x]=arguments[x];var M=Z(_,"hsla"),L=fe(_)||"lsa";return M[0]=le(M[0]||0),M[1]=le(M[1]*100)+"%",M[2]=le(M[2]*100)+"%",L==="hsla"||M.length>3&&M[3]<1?(M[3]=M.length>3?M[3]:1,L="hsla"):M.length=3,L+"("+M.join(",")+")"},we=ye,Ne=p.unpack,Ke=function(){for(var _=[],x=arguments.length;x--;)_[x]=arguments[x];_=Ne(_,"rgba");var M=_[0],L=_[1],O=_[2];M/=255,L/=255,O/=255;var k=Math.min(M,L,O),N=Math.max(M,L,O),W=(N+k)/2,q,se;return N===k?(q=0,se=Number.NaN):q=W<.5?(N-k)/(N+k):(N-k)/(2-N-k),M==N?se=(L-O)/(N-k):L==N?se=2+(O-M)/(N-k):O==N&&(se=4+(M-L)/(N-k)),se*=60,se<0&&(se+=360),_.length>3&&_[3]!==void 0?[se,q,W,_[3]]:[se,q,W]},Be=Ke,kt=p.unpack,et=p.last,Y=we,qt=Be,Ue=Math.round,$e=function(){for(var _=[],x=arguments.length;x--;)_[x]=arguments[x];var M=kt(_,"rgba"),L=et(_)||"rgb";return L.substr(0,3)=="hsl"?Y(qt(M),L):(M[0]=Ue(M[0]),M[1]=Ue(M[1]),M[2]=Ue(M[2]),(L==="rgba"||M.length>3&&M[3]<1)&&(M[3]=M.length>3?M[3]:1,L="rgba"),L+"("+M.slice(0,L==="rgb"?3:4).join(",")+")")},Fe=$e,vt=p.unpack,Ye=Math.round,Xe=function(){for(var _,x=[],M=arguments.length;M--;)x[M]=arguments[M];x=vt(x,"hsl");var L=x[0],O=x[1],k=x[2],N,W,q;if(O===0)N=W=q=k*255;else{var se=[0,0,0],he=[0,0,0],Se=k<.5?k*(1+O):k+O-k*O,de=2*k-Se,Le=L/360;se[0]=Le+1/3,se[1]=Le,se[2]=Le-1/3;for(var Ae=0;Ae<3;Ae++)se[Ae]<0&&(se[Ae]+=1),se[Ae]>1&&(se[Ae]-=1),6*se[Ae]<1?he[Ae]=de+(Se-de)*6*se[Ae]:2*se[Ae]<1?he[Ae]=Se:3*se[Ae]<2?he[Ae]=de+(Se-de)*(2/3-se[Ae])*6:he[Ae]=de;_=[Ye(he[0]*255),Ye(he[1]*255),Ye(he[2]*255)],N=_[0],W=_[1],q=_[2]}return x.length>3?[N,W,q,x[3]]:[N,W,q,1]},ut=Xe,Vt=ut,$t=g,I=/^rgb\(\s*(-?\d+),\s*(-?\d+)\s*,\s*(-?\d+)\s*\)$/,A=/^rgba\(\s*(-?\d+),\s*(-?\d+)\s*,\s*(-?\d+)\s*,\s*([01]|[01]?\.\d+)\)$/,te=/^rgb\(\s*(-?\d+(?:\.\d+)?)%,\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*\)$/,_e=/^rgba\(\s*(-?\d+(?:\.\d+)?)%,\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/,ge=/^hsl\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*\)$/,U=/^hsla\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/,ce=Math.round,me=function(_){_=_.toLowerCase().trim();var x;if($t.format.named)try{return $t.format.named(_)}catch{}if(x=_.match(I)){for(var M=x.slice(1,4),L=0;L<3;L++)M[L]=+M[L];return M[3]=1,M}if(x=_.match(A)){for(var O=x.slice(1,5),k=0;k<4;k++)O[k]=+O[k];return O}if(x=_.match(te)){for(var N=x.slice(1,4),W=0;W<3;W++)N[W]=ce(N[W]*2.55);return N[3]=1,N}if(x=_.match(_e)){for(var q=x.slice(1,5),se=0;se<3;se++)q[se]=ce(q[se]*2.55);return q[3]=+q[3],q}if(x=_.match(ge)){var he=x.slice(1,4);he[1]*=.01,he[2]*=.01;var Se=Vt(he);return Se[3]=1,Se}if(x=_.match(U)){var de=x.slice(1,4);de[1]*=.01,de[2]*=.01;var Le=Vt(de);return Le[3]=+x[4],Le}};me.test=function(_){return I.test(_)||A.test(_)||te.test(_)||_e.test(_)||ge.test(_)||U.test(_)};var Q=me,Pe=P,De=w,Ie=g,Re=p.type,Ee=Fe,ze=Q;De.prototype.css=function(_){return Ee(this._rgb,_)},Pe.css=function(){for(var _=[],x=arguments.length;x--;)_[x]=arguments[x];return new(Function.prototype.bind.apply(De,[null].concat(_,["css"])))},Ie.format.css=ze,Ie.autodetect.push({p:5,test:function(_){for(var x=[],M=arguments.length-1;M-- >0;)x[M]=arguments[M+1];if(!x.length&&Re(_)==="string"&&ze.test(_))return"css"}});var xt=w,B=P,Me=g,J=p.unpack;Me.format.gl=function(){for(var _=[],x=arguments.length;x--;)_[x]=arguments[x];var M=J(_,"rgba");return M[0]*=255,M[1]*=255,M[2]*=255,M},B.gl=function(){for(var _=[],x=arguments.length;x--;)_[x]=arguments[x];return new(Function.prototype.bind.apply(xt,[null].concat(_,["gl"])))},xt.prototype.gl=function(){var _=this._rgb;return[_[0]/255,_[1]/255,_[2]/255,_[3]]};var ve=p.unpack,be=function(){for(var _=[],x=arguments.length;x--;)_[x]=arguments[x];var M=ve(_,"rgb"),L=M[0],O=M[1],k=M[2],N=Math.min(L,O,k),W=Math.max(L,O,k),q=W-N,se=q*100/255,he=N/(255-q)*100,Se;return q===0?Se=Number.NaN:(L===W&&(Se=(O-k)/q),O===W&&(Se=2+(k-L)/q),k===W&&(Se=4+(L-O)/q),Se*=60,Se<0&&(Se+=360)),[Se,se,he]},ht=be,It=p.unpack,Wt=Math.floor,Ni=function(){for(var _,x,M,L,O,k,N=[],W=arguments.length;W--;)N[W]=arguments[W];N=It(N,"hcg");var q=N[0],se=N[1],he=N[2],Se,de,Le;he=he*255;var Ae=se*255;if(se===0)Se=de=Le=he;else{q===360&&(q=0),q>360&&(q-=360),q<0&&(q+=360),q/=60;var tt=Wt(q),ot=q-tt,ft=he*(1-se),mt=ft+Ae*(1-ot),hn=ft+Ae*ot,rn=ft+Ae;switch(tt){case 0:_=[rn,hn,ft],Se=_[0],de=_[1],Le=_[2];break;case 1:x=[mt,rn,ft],Se=x[0],de=x[1],Le=x[2];break;case 2:M=[ft,rn,hn],Se=M[0],de=M[1],Le=M[2];break;case 3:L=[ft,mt,rn],Se=L[0],de=L[1],Le=L[2];break;case 4:O=[hn,ft,rn],Se=O[0],de=O[1],Le=O[2];break;case 5:k=[rn,ft,mt],Se=k[0],de=k[1],Le=k[2];break}}return[Se,de,Le,N.length>3?N[3]:1]},Ut=Ni,Qn=p.unpack,cn=p.type,co=P,_a=w,uo=g,us=ht;_a.prototype.hcg=function(){return us(this._rgb)},co.hcg=function(){for(var _=[],x=arguments.length;x--;)_[x]=arguments[x];return new(Function.prototype.bind.apply(_a,[null].concat(_,["hcg"])))},uo.format.hcg=Ut,uo.autodetect.push({p:1,test:function(){for(var _=[],x=arguments.length;x--;)_[x]=arguments[x];if(_=Qn(_,"hcg"),cn(_)==="array"&&_.length===3)return"hcg"}});var ho=p.unpack,hs=p.last,Rr=Math.round,wl=function(){for(var _=[],x=arguments.length;x--;)_[x]=arguments[x];var M=ho(_,"rgba"),L=M[0],O=M[1],k=M[2],N=M[3],W=hs(_)||"auto";N===void 0&&(N=1),W==="auto"&&(W=N<1?"rgba":"rgb"),L=Rr(L),O=Rr(O),k=Rr(k);var q=L<<16|O<<8|k,se="000000"+q.toString(16);se=se.substr(se.length-6);var he="0"+Rr(N*255).toString(16);switch(he=he.substr(he.length-2),W.toLowerCase()){case"rgba":return"#"+se+he;case"argb":return"#"+he+se;default:return"#"+se}},fo=wl,Al=/^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/,C=/^#?([A-Fa-f0-9]{8}|[A-Fa-f0-9]{4})$/,j=function(_){if(_.match(Al)){(_.length===4||_.length===7)&&(_=_.substr(1)),_.length===3&&(_=_.split(""),_=_[0]+_[0]+_[1]+_[1]+_[2]+_[2]);var x=parseInt(_,16),M=x>>16,L=x>>8&255,O=x&255;return[M,L,O,1]}if(_.match(C)){(_.length===5||_.length===9)&&(_=_.substr(1)),_.length===4&&(_=_.split(""),_=_[0]+_[0]+_[1]+_[1]+_[2]+_[2]+_[3]+_[3]);var k=parseInt(_,16),N=k>>24&255,W=k>>16&255,q=k>>8&255,se=Math.round((k&255)/255*100)/100;return[N,W,q,se]}throw new Error("unknown hex color: "+_)},ne=j,X=P,ie=w,Ce=p.type,Oe=g,He=fo;ie.prototype.hex=function(_){return He(this._rgb,_)},X.hex=function(){for(var _=[],x=arguments.length;x--;)_[x]=arguments[x];return new(Function.prototype.bind.apply(ie,[null].concat(_,["hex"])))},Oe.format.hex=ne,Oe.autodetect.push({p:4,test:function(_){for(var x=[],M=arguments.length-1;M-- >0;)x[M]=arguments[M+1];if(!x.length&&Ce(_)==="string"&&[3,4,5,6,7,8,9].indexOf(_.length)>=0)return"hex"}});var Ge=p.unpack,Je=p.TWOPI,qe=Math.min,je=Math.sqrt,Et=Math.acos,Bt=function(){for(var _=[],x=arguments.length;x--;)_[x]=arguments[x];var M=Ge(_,"rgb"),L=M[0],O=M[1],k=M[2];L/=255,O/=255,k/=255;var N,W=qe(L,O,k),q=(L+O+k)/3,se=q>0?1-W/q:0;return se===0?N=NaN:(N=(L-O+(L-k))/2,N/=je((L-O)*(L-O)+(L-k)*(O-k)),N=Et(N),k>O&&(N=Je-N),N/=Je),[N*360,se,q]},Hn=Bt,ui=p.unpack,Nt=p.limit,Ze=p.TWOPI,Cr=p.PITHIRD,Pt=Math.cos,Oi=function(){for(var _=[],x=arguments.length;x--;)_[x]=arguments[x];_=ui(_,"hsi");var M=_[0],L=_[1],O=_[2],k,N,W;return isNaN(M)&&(M=0),isNaN(L)&&(L=0),M>360&&(M-=360),M<0&&(M+=360),M/=360,M<1/3?(W=(1-L)/3,k=(1+L*Pt(Ze*M)/Pt(Cr-Ze*M))/3,N=1-(W+k)):M<2/3?(M-=1/3,k=(1-L)/3,N=(1+L*Pt(Ze*M)/Pt(Cr-Ze*M))/3,W=1-(k+N)):(M-=2/3,N=(1-L)/3,W=(1+L*Pt(Ze*M)/Pt(Cr-Ze*M))/3,k=1-(N+W)),k=Nt(O*k*3),N=Nt(O*N*3),W=Nt(O*W*3),[k*255,N*255,W*255,_.length>3?_[3]:1]},po=Oi,Lr=p.unpack,va=p.type,un=P,Si=w,fs=g,An=Hn;Si.prototype.hsi=function(){return An(this._rgb)},un.hsi=function(){for(var _=[],x=arguments.length;x--;)_[x]=arguments[x];return new(Function.prototype.bind.apply(Si,[null].concat(_,["hsi"])))},fs.format.hsi=po,fs.autodetect.push({p:2,test:function(){for(var _=[],x=arguments.length;x--;)_[x]=arguments[x];if(_=Lr(_,"hsi"),va(_)==="array"&&_.length===3)return"hsi"}});var xa=p.unpack,Rl=p.type,mo=P,sh=w,ah=g,Cg=Be;sh.prototype.hsl=function(){return Cg(this._rgb)},mo.hsl=function(){for(var _=[],x=arguments.length;x--;)_[x]=arguments[x];return new(Function.prototype.bind.apply(sh,[null].concat(_,["hsl"])))},ah.format.hsl=ut,ah.autodetect.push({p:2,test:function(){for(var _=[],x=arguments.length;x--;)_[x]=arguments[x];if(_=xa(_,"hsl"),Rl(_)==="array"&&_.length===3)return"hsl"}});var Lg=p.unpack,Pg=Math.min,Dg=Math.max,Ig=function(){for(var _=[],x=arguments.length;x--;)_[x]=arguments[x];_=Lg(_,"rgb");var M=_[0],L=_[1],O=_[2],k=Pg(M,L,O),N=Dg(M,L,O),W=N-k,q,se,he;return he=N/255,N===0?(q=Number.NaN,se=0):(se=W/N,M===N&&(q=(L-O)/W),L===N&&(q=2+(O-M)/W),O===N&&(q=4+(M-L)/W),q*=60,q<0&&(q+=360)),[q,se,he]},Ug=Ig,Ng=p.unpack,Og=Math.floor,Fg=function(){for(var _,x,M,L,O,k,N=[],W=arguments.length;W--;)N[W]=arguments[W];N=Ng(N,"hsv");var q=N[0],se=N[1],he=N[2],Se,de,Le;if(he*=255,se===0)Se=de=Le=he;else{q===360&&(q=0),q>360&&(q-=360),q<0&&(q+=360),q/=60;var Ae=Og(q),tt=q-Ae,ot=he*(1-se),ft=he*(1-se*tt),mt=he*(1-se*(1-tt));switch(Ae){case 0:_=[he,mt,ot],Se=_[0],de=_[1],Le=_[2];break;case 1:x=[ft,he,ot],Se=x[0],de=x[1],Le=x[2];break;case 2:M=[ot,he,mt],Se=M[0],de=M[1],Le=M[2];break;case 3:L=[ot,ft,he],Se=L[0],de=L[1],Le=L[2];break;case 4:O=[mt,ot,he],Se=O[0],de=O[1],Le=O[2];break;case 5:k=[he,ot,ft],Se=k[0],de=k[1],Le=k[2];break}}return[Se,de,Le,N.length>3?N[3]:1]},kg=Fg,Bg=p.unpack,zg=p.type,Hg=P,oh=w,lh=g,Gg=Ug;oh.prototype.hsv=function(){return Gg(this._rgb)},Hg.hsv=function(){for(var _=[],x=arguments.length;x--;)_[x]=arguments[x];return new(Function.prototype.bind.apply(oh,[null].concat(_,["hsv"])))},lh.format.hsv=kg,lh.autodetect.push({p:2,test:function(){for(var _=[],x=arguments.length;x--;)_[x]=arguments[x];if(_=Bg(_,"hsv"),zg(_)==="array"&&_.length===3)return"hsv"}});var go={Kn:18,Xn:.95047,Yn:1,Zn:1.08883,t0:.137931034,t1:.206896552,t2:.12841855,t3:.008856452},ds=go,Vg=p.unpack,ch=Math.pow,Wg=function(){for(var _=[],x=arguments.length;x--;)_[x]=arguments[x];var M=Vg(_,"rgb"),L=M[0],O=M[1],k=M[2],N=Xg(L,O,k),W=N[0],q=N[1],se=N[2],he=116*q-16;return[he<0?0:he,500*(W-q),200*(q-se)]},Cl=function(_){return(_/=255)<=.04045?_/12.92:ch((_+.055)/1.055,2.4)},Ll=function(_){return _>ds.t3?ch(_,1/3):_/ds.t2+ds.t0},Xg=function(_,x,M){_=Cl(_),x=Cl(x),M=Cl(M);var L=Ll((.4124564*_+.3575761*x+.1804375*M)/ds.Xn),O=Ll((.2126729*_+.7151522*x+.072175*M)/ds.Yn),k=Ll((.0193339*_+.119192*x+.9503041*M)/ds.Zn);return[L,O,k]},uh=Wg,ps=go,qg=p.unpack,$g=Math.pow,Yg=function(){for(var _=[],x=arguments.length;x--;)_[x]=arguments[x];_=qg(_,"lab");var M=_[0],L=_[1],O=_[2],k,N,W,q,se,he;return N=(M+16)/116,k=isNaN(L)?N:N+L/500,W=isNaN(O)?N:N-O/200,N=ps.Yn*Dl(N),k=ps.Xn*Dl(k),W=ps.Zn*Dl(W),q=Pl(3.2404542*k-1.5371385*N-.4985314*W),se=Pl(-.969266*k+1.8760108*N+.041556*W),he=Pl(.0556434*k-.2040259*N+1.0572252*W),[q,se,he,_.length>3?_[3]:1]},Pl=function(_){return 255*(_<=.00304?12.92*_:1.055*$g(_,1/2.4)-.055)},Dl=function(_){return _>ps.t1?_*_*_:ps.t2*(_-ps.t0)},hh=Yg,jg=p.unpack,Kg=p.type,Zg=P,fh=w,dh=g,Jg=uh;fh.prototype.lab=function(){return Jg(this._rgb)},Zg.lab=function(){for(var _=[],x=arguments.length;x--;)_[x]=arguments[x];return new(Function.prototype.bind.apply(fh,[null].concat(_,["lab"])))},dh.format.lab=hh,dh.autodetect.push({p:2,test:function(){for(var _=[],x=arguments.length;x--;)_[x]=arguments[x];if(_=jg(_,"lab"),Kg(_)==="array"&&_.length===3)return"lab"}});var Qg=p.unpack,e_=p.RAD2DEG,t_=Math.sqrt,n_=Math.atan2,i_=Math.round,r_=function(){for(var _=[],x=arguments.length;x--;)_[x]=arguments[x];var M=Qg(_,"lab"),L=M[0],O=M[1],k=M[2],N=t_(O*O+k*k),W=(n_(k,O)*e_+360)%360;return i_(N*1e4)===0&&(W=Number.NaN),[L,N,W]},ph=r_,s_=p.unpack,a_=uh,o_=ph,l_=function(){for(var _=[],x=arguments.length;x--;)_[x]=arguments[x];var M=s_(_,"rgb"),L=M[0],O=M[1],k=M[2],N=a_(L,O,k),W=N[0],q=N[1],se=N[2];return o_(W,q,se)},c_=l_,u_=p.unpack,h_=p.DEG2RAD,f_=Math.sin,d_=Math.cos,p_=function(){for(var _=[],x=arguments.length;x--;)_[x]=arguments[x];var M=u_(_,"lch"),L=M[0],O=M[1],k=M[2];return isNaN(k)&&(k=0),k=k*h_,[L,d_(k)*O,f_(k)*O]},mh=p_,m_=p.unpack,g_=mh,__=hh,v_=function(){for(var _=[],x=arguments.length;x--;)_[x]=arguments[x];_=m_(_,"lch");var M=_[0],L=_[1],O=_[2],k=g_(M,L,O),N=k[0],W=k[1],q=k[2],se=__(N,W,q),he=se[0],Se=se[1],de=se[2];return[he,Se,de,_.length>3?_[3]:1]},gh=v_,x_=p.unpack,y_=gh,M_=function(){for(var _=[],x=arguments.length;x--;)_[x]=arguments[x];var M=x_(_,"hcl").reverse();return y_.apply(void 0,M)},b_=M_,S_=p.unpack,E_=p.type,_h=P,_o=w,Il=g,vh=c_;_o.prototype.lch=function(){return vh(this._rgb)},_o.prototype.hcl=function(){return vh(this._rgb).reverse()},_h.lch=function(){for(var _=[],x=arguments.length;x--;)_[x]=arguments[x];return new(Function.prototype.bind.apply(_o,[null].concat(_,["lch"])))},_h.hcl=function(){for(var _=[],x=arguments.length;x--;)_[x]=arguments[x];return new(Function.prototype.bind.apply(_o,[null].concat(_,["hcl"])))},Il.format.lch=gh,Il.format.hcl=b_,["lch","hcl"].forEach(function(_){return Il.autodetect.push({p:2,test:function(){for(var x=[],M=arguments.length;M--;)x[M]=arguments[M];if(x=S_(x,_),E_(x)==="array"&&x.length===3)return _}})});var T_={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflower:"#6495ed",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",gold:"#ffd700",goldenrod:"#daa520",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",laserlemon:"#ffff54",lavender:"#e6e6fa",lavenderblush:"#fff0f5",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrod:"#fafad2",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",maroon2:"#7f0000",maroon3:"#b03060",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",purple2:"#7f007f",purple3:"#a020f0",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"},xh=T_,w_=w,yh=g,A_=p.type,ya=xh,R_=ne,C_=fo;w_.prototype.name=function(){for(var _=C_(this._rgb,"rgb"),x=0,M=Object.keys(ya);x<M.length;x+=1){var L=M[x];if(ya[L]===_)return L.toLowerCase()}return _},yh.format.named=function(_){if(_=_.toLowerCase(),ya[_])return R_(ya[_]);throw new Error("unknown color name: "+_)},yh.autodetect.push({p:5,test:function(_){for(var x=[],M=arguments.length-1;M-- >0;)x[M]=arguments[M+1];if(!x.length&&A_(_)==="string"&&ya[_.toLowerCase()])return"named"}});var L_=p.unpack,P_=function(){for(var _=[],x=arguments.length;x--;)_[x]=arguments[x];var M=L_(_,"rgb"),L=M[0],O=M[1],k=M[2];return(L<<16)+(O<<8)+k},D_=P_,I_=p.type,U_=function(_){if(I_(_)=="number"&&_>=0&&_<=16777215){var x=_>>16,M=_>>8&255,L=_&255;return[x,M,L,1]}throw new Error("unknown num color: "+_)},N_=U_,O_=P,Mh=w,bh=g,F_=p.type,k_=D_;Mh.prototype.num=function(){return k_(this._rgb)},O_.num=function(){for(var _=[],x=arguments.length;x--;)_[x]=arguments[x];return new(Function.prototype.bind.apply(Mh,[null].concat(_,["num"])))},bh.format.num=N_,bh.autodetect.push({p:5,test:function(){for(var _=[],x=arguments.length;x--;)_[x]=arguments[x];if(_.length===1&&F_(_[0])==="number"&&_[0]>=0&&_[0]<=16777215)return"num"}});var B_=P,Ul=w,Sh=g,Eh=p.unpack,Th=p.type,wh=Math.round;Ul.prototype.rgb=function(_){return _===void 0&&(_=!0),_===!1?this._rgb.slice(0,3):this._rgb.slice(0,3).map(wh)},Ul.prototype.rgba=function(_){return _===void 0&&(_=!0),this._rgb.slice(0,4).map(function(x,M){return M<3?_===!1?x:wh(x):x})},B_.rgb=function(){for(var _=[],x=arguments.length;x--;)_[x]=arguments[x];return new(Function.prototype.bind.apply(Ul,[null].concat(_,["rgb"])))},Sh.format.rgb=function(){for(var _=[],x=arguments.length;x--;)_[x]=arguments[x];var M=Eh(_,"rgba");return M[3]===void 0&&(M[3]=1),M},Sh.autodetect.push({p:3,test:function(){for(var _=[],x=arguments.length;x--;)_[x]=arguments[x];if(_=Eh(_,"rgba"),Th(_)==="array"&&(_.length===3||_.length===4&&Th(_[3])=="number"&&_[3]>=0&&_[3]<=1))return"rgb"}});var vo=Math.log,z_=function(_){var x=_/100,M,L,O;return x<66?(M=255,L=x<6?0:-155.25485562709179-.44596950469579133*(L=x-2)+104.49216199393888*vo(L),O=x<20?0:-254.76935184120902+.8274096064007395*(O=x-10)+115.67994401066147*vo(O)):(M=351.97690566805693+.114206453784165*(M=x-55)-40.25366309332127*vo(M),L=325.4494125711974+.07943456536662342*(L=x-50)-28.0852963507957*vo(L),O=255),[M,L,O,1]},Ah=z_,H_=Ah,G_=p.unpack,V_=Math.round,W_=function(){for(var _=[],x=arguments.length;x--;)_[x]=arguments[x];for(var M=G_(_,"rgb"),L=M[0],O=M[2],k=1e3,N=4e4,W=.4,q;N-k>W;){q=(N+k)*.5;var se=H_(q);se[2]/se[0]>=O/L?N=q:k=q}return V_(q)},X_=W_,Nl=P,xo=w,Ol=g,q_=X_;xo.prototype.temp=xo.prototype.kelvin=xo.prototype.temperature=function(){return q_(this._rgb)},Nl.temp=Nl.kelvin=Nl.temperature=function(){for(var _=[],x=arguments.length;x--;)_[x]=arguments[x];return new(Function.prototype.bind.apply(xo,[null].concat(_,["temp"])))},Ol.format.temp=Ol.format.kelvin=Ol.format.temperature=Ah;var $_=p.unpack,Fl=Math.cbrt,Y_=Math.pow,j_=Math.sign,K_=function(){for(var _=[],x=arguments.length;x--;)_[x]=arguments[x];var M=$_(_,"rgb"),L=M[0],O=M[1],k=M[2],N=[kl(L/255),kl(O/255),kl(k/255)],W=N[0],q=N[1],se=N[2],he=Fl(.4122214708*W+.5363325363*q+.0514459929*se),Se=Fl(.2119034982*W+.6806995451*q+.1073969566*se),de=Fl(.0883024619*W+.2817188376*q+.6299787005*se);return[.2104542553*he+.793617785*Se-.0040720468*de,1.9779984951*he-2.428592205*Se+.4505937099*de,.0259040371*he+.7827717662*Se-.808675766*de]},Rh=K_;function kl(_){var x=Math.abs(_);return x<.04045?_/12.92:(j_(_)||1)*Y_((x+.055)/1.055,2.4)}var Z_=p.unpack,yo=Math.pow,J_=Math.sign,Q_=function(){for(var _=[],x=arguments.length;x--;)_[x]=arguments[x];_=Z_(_,"lab");var M=_[0],L=_[1],O=_[2],k=yo(M+.3963377774*L+.2158037573*O,3),N=yo(M-.1055613458*L-.0638541728*O,3),W=yo(M-.0894841775*L-1.291485548*O,3);return[255*Bl(4.0767416621*k-3.3077115913*N+.2309699292*W),255*Bl(-1.2684380046*k+2.6097574011*N-.3413193965*W),255*Bl(-.0041960863*k-.7034186147*N+1.707614701*W),_.length>3?_[3]:1]},Ch=Q_;function Bl(_){var x=Math.abs(_);return x>.0031308?(J_(_)||1)*(1.055*yo(x,1/2.4)-.055):_*12.92}var e0=p.unpack,t0=p.type,n0=P,Lh=w,Ph=g,i0=Rh;Lh.prototype.oklab=function(){return i0(this._rgb)},n0.oklab=function(){for(var _=[],x=arguments.length;x--;)_[x]=arguments[x];return new(Function.prototype.bind.apply(Lh,[null].concat(_,["oklab"])))},Ph.format.oklab=Ch,Ph.autodetect.push({p:3,test:function(){for(var _=[],x=arguments.length;x--;)_[x]=arguments[x];if(_=e0(_,"oklab"),t0(_)==="array"&&_.length===3)return"oklab"}});var r0=p.unpack,s0=Rh,a0=ph,o0=function(){for(var _=[],x=arguments.length;x--;)_[x]=arguments[x];var M=r0(_,"rgb"),L=M[0],O=M[1],k=M[2],N=s0(L,O,k),W=N[0],q=N[1],se=N[2];return a0(W,q,se)},l0=o0,c0=p.unpack,u0=mh,h0=Ch,f0=function(){for(var _=[],x=arguments.length;x--;)_[x]=arguments[x];_=c0(_,"lch");var M=_[0],L=_[1],O=_[2],k=u0(M,L,O),N=k[0],W=k[1],q=k[2],se=h0(N,W,q),he=se[0],Se=se[1],de=se[2];return[he,Se,de,_.length>3?_[3]:1]},d0=f0,p0=p.unpack,m0=p.type,g0=P,Dh=w,Ih=g,_0=l0;Dh.prototype.oklch=function(){return _0(this._rgb)},g0.oklch=function(){for(var _=[],x=arguments.length;x--;)_[x]=arguments[x];return new(Function.prototype.bind.apply(Dh,[null].concat(_,["oklch"])))},Ih.format.oklch=d0,Ih.autodetect.push({p:3,test:function(){for(var _=[],x=arguments.length;x--;)_[x]=arguments[x];if(_=p0(_,"oklch"),m0(_)==="array"&&_.length===3)return"oklch"}});var Uh=w,v0=p.type;Uh.prototype.alpha=function(_,x){return x===void 0&&(x=!1),_!==void 0&&v0(_)==="number"?x?(this._rgb[3]=_,this):new Uh([this._rgb[0],this._rgb[1],this._rgb[2],_],"rgb"):this._rgb[3]};var x0=w;x0.prototype.clipped=function(){return this._rgb._clipped||!1};var Pr=w,y0=go;Pr.prototype.darken=function(_){_===void 0&&(_=1);var x=this,M=x.lab();return M[0]-=y0.Kn*_,new Pr(M,"lab").alpha(x.alpha(),!0)},Pr.prototype.brighten=function(_){return _===void 0&&(_=1),this.darken(-_)},Pr.prototype.darker=Pr.prototype.darken,Pr.prototype.brighter=Pr.prototype.brighten;var M0=w;M0.prototype.get=function(_){var x=_.split("."),M=x[0],L=x[1],O=this[M]();if(L){var k=M.indexOf(L)-(M.substr(0,2)==="ok"?2:0);if(k>-1)return O[k];throw new Error("unknown channel "+L+" in mode "+M)}else return O};var ms=w,b0=p.type,S0=Math.pow,E0=1e-7,T0=20;ms.prototype.luminance=function(_){if(_!==void 0&&b0(_)==="number"){if(_===0)return new ms([0,0,0,this._rgb[3]],"rgb");if(_===1)return new ms([255,255,255,this._rgb[3]],"rgb");var x=this.luminance(),M="rgb",L=T0,O=function(N,W){var q=N.interpolate(W,.5,M),se=q.luminance();return Math.abs(_-se)<E0||!L--?q:se>_?O(N,q):O(q,W)},k=(x>_?O(new ms([0,0,0]),this):O(this,new ms([255,255,255]))).rgb();return new ms(k.concat([this._rgb[3]]))}return w0.apply(void 0,this._rgb.slice(0,3))};var w0=function(_,x,M){return _=zl(_),x=zl(x),M=zl(M),.2126*_+.7152*x+.0722*M},zl=function(_){return _/=255,_<=.03928?_/12.92:S0((_+.055)/1.055,2.4)},Gn={},Nh=w,Oh=p.type,Mo=Gn,Fh=function(_,x,M){M===void 0&&(M=.5);for(var L=[],O=arguments.length-3;O-- >0;)L[O]=arguments[O+3];var k=L[0]||"lrgb";if(!Mo[k]&&!L.length&&(k=Object.keys(Mo)[0]),!Mo[k])throw new Error("interpolation mode "+k+" is not defined");return Oh(_)!=="object"&&(_=new Nh(_)),Oh(x)!=="object"&&(x=new Nh(x)),Mo[k](_,x,M).alpha(_.alpha()+M*(x.alpha()-_.alpha()))},kh=w,A0=Fh;kh.prototype.mix=kh.prototype.interpolate=function(_,x){x===void 0&&(x=.5);for(var M=[],L=arguments.length-2;L-- >0;)M[L]=arguments[L+2];return A0.apply(void 0,[this,_,x].concat(M))};var Bh=w;Bh.prototype.premultiply=function(_){_===void 0&&(_=!1);var x=this._rgb,M=x[3];return _?(this._rgb=[x[0]*M,x[1]*M,x[2]*M,M],this):new Bh([x[0]*M,x[1]*M,x[2]*M,M],"rgb")};var Hl=w,R0=go;Hl.prototype.saturate=function(_){_===void 0&&(_=1);var x=this,M=x.lch();return M[1]+=R0.Kn*_,M[1]<0&&(M[1]=0),new Hl(M,"lch").alpha(x.alpha(),!0)},Hl.prototype.desaturate=function(_){return _===void 0&&(_=1),this.saturate(-_)};var zh=w,Hh=p.type;zh.prototype.set=function(_,x,M){M===void 0&&(M=!1);var L=_.split("."),O=L[0],k=L[1],N=this[O]();if(k){var W=O.indexOf(k)-(O.substr(0,2)==="ok"?2:0);if(W>-1){if(Hh(x)=="string")switch(x.charAt(0)){case"+":N[W]+=+x;break;case"-":N[W]+=+x;break;case"*":N[W]*=+x.substr(1);break;case"/":N[W]/=+x.substr(1);break;default:N[W]=+x}else if(Hh(x)==="number")N[W]=x;else throw new Error("unsupported value for Color.set");var q=new zh(N,O);return M?(this._rgb=q._rgb,this):q}throw new Error("unknown channel "+k+" in mode "+O)}else return N};var C0=w,L0=function(_,x,M){var L=_._rgb,O=x._rgb;return new C0(L[0]+M*(O[0]-L[0]),L[1]+M*(O[1]-L[1]),L[2]+M*(O[2]-L[2]),"rgb")};Gn.rgb=L0;var P0=w,Gl=Math.sqrt,gs=Math.pow,D0=function(_,x,M){var L=_._rgb,O=L[0],k=L[1],N=L[2],W=x._rgb,q=W[0],se=W[1],he=W[2];return new P0(Gl(gs(O,2)*(1-M)+gs(q,2)*M),Gl(gs(k,2)*(1-M)+gs(se,2)*M),Gl(gs(N,2)*(1-M)+gs(he,2)*M),"rgb")};Gn.lrgb=D0;var I0=w,U0=function(_,x,M){var L=_.lab(),O=x.lab();return new I0(L[0]+M*(O[0]-L[0]),L[1]+M*(O[1]-L[1]),L[2]+M*(O[2]-L[2]),"lab")};Gn.lab=U0;var Gh=w,_s=function(_,x,M,L){var O,k,N,W;L==="hsl"?(N=_.hsl(),W=x.hsl()):L==="hsv"?(N=_.hsv(),W=x.hsv()):L==="hcg"?(N=_.hcg(),W=x.hcg()):L==="hsi"?(N=_.hsi(),W=x.hsi()):L==="lch"||L==="hcl"?(L="hcl",N=_.hcl(),W=x.hcl()):L==="oklch"&&(N=_.oklch().reverse(),W=x.oklch().reverse());var q,se,he,Se,de,Le;(L.substr(0,1)==="h"||L==="oklch")&&(O=N,q=O[0],he=O[1],de=O[2],k=W,se=k[0],Se=k[1],Le=k[2]);var Ae,tt,ot,ft;return!isNaN(q)&&!isNaN(se)?(se>q&&se-q>180?ft=se-(q+360):se<q&&q-se>180?ft=se+360-q:ft=se-q,tt=q+M*ft):isNaN(q)?isNaN(se)?tt=Number.NaN:(tt=se,(de==1||de==0)&&L!="hsv"&&(Ae=Se)):(tt=q,(Le==1||Le==0)&&L!="hsv"&&(Ae=he)),Ae===void 0&&(Ae=he+M*(Se-he)),ot=de+M*(Le-de),L==="oklch"?new Gh([ot,Ae,tt],L):new Gh([tt,Ae,ot],L)},N0=_s,Vh=function(_,x,M){return N0(_,x,M,"lch")};Gn.lch=Vh,Gn.hcl=Vh;var O0=w,F0=function(_,x,M){var L=_.num(),O=x.num();return new O0(L+M*(O-L),"num")};Gn.num=F0;var k0=_s,B0=function(_,x,M){return k0(_,x,M,"hcg")};Gn.hcg=B0;var z0=_s,H0=function(_,x,M){return z0(_,x,M,"hsi")};Gn.hsi=H0;var G0=_s,V0=function(_,x,M){return G0(_,x,M,"hsl")};Gn.hsl=V0;var W0=_s,X0=function(_,x,M){return W0(_,x,M,"hsv")};Gn.hsv=X0;var q0=w,$0=function(_,x,M){var L=_.oklab(),O=x.oklab();return new q0(L[0]+M*(O[0]-L[0]),L[1]+M*(O[1]-L[1]),L[2]+M*(O[2]-L[2]),"oklab")};Gn.oklab=$0;var Y0=_s,j0=function(_,x,M){return Y0(_,x,M,"oklch")};Gn.oklch=j0;var Vl=w,K0=p.clip_rgb,Wl=Math.pow,Xl=Math.sqrt,ql=Math.PI,Wh=Math.cos,Xh=Math.sin,Z0=Math.atan2,J0=function(_,x,M){x===void 0&&(x="lrgb"),M===void 0&&(M=null);var L=_.length;M||(M=Array.from(new Array(L)).map(function(){return 1}));var O=L/M.reduce(function(tt,ot){return tt+ot});if(M.forEach(function(tt,ot){M[ot]*=O}),_=_.map(function(tt){return new Vl(tt)}),x==="lrgb")return Q0(_,M);for(var k=_.shift(),N=k.get(x),W=[],q=0,se=0,he=0;he<N.length;he++)if(N[he]=(N[he]||0)*M[0],W.push(isNaN(N[he])?0:M[0]),x.charAt(he)==="h"&&!isNaN(N[he])){var Se=N[he]/180*ql;q+=Wh(Se)*M[0],se+=Xh(Se)*M[0]}var de=k.alpha()*M[0];_.forEach(function(tt,ot){var ft=tt.get(x);de+=tt.alpha()*M[ot+1];for(var mt=0;mt<N.length;mt++)if(!isNaN(ft[mt]))if(W[mt]+=M[ot+1],x.charAt(mt)==="h"){var hn=ft[mt]/180*ql;q+=Wh(hn)*M[ot+1],se+=Xh(hn)*M[ot+1]}else N[mt]+=ft[mt]*M[ot+1]});for(var Le=0;Le<N.length;Le++)if(x.charAt(Le)==="h"){for(var Ae=Z0(se/W[Le],q/W[Le])/ql*180;Ae<0;)Ae+=360;for(;Ae>=360;)Ae-=360;N[Le]=Ae}else N[Le]=N[Le]/W[Le];return de/=L,new Vl(N,x).alpha(de>.99999?1:de,!0)},Q0=function(_,x){for(var M=_.length,L=[0,0,0,0],O=0;O<_.length;O++){var k=_[O],N=x[O]/M,W=k._rgb;L[0]+=Wl(W[0],2)*N,L[1]+=Wl(W[1],2)*N,L[2]+=Wl(W[2],2)*N,L[3]+=W[3]*N}return L[0]=Xl(L[0]),L[1]=Xl(L[1]),L[2]=Xl(L[2]),L[3]>.9999999&&(L[3]=1),new Vl(K0(L))},hi=P,vs=p.type,ev=Math.pow,$l=function(_){var x="rgb",M=hi("#ccc"),L=0,O=[0,1],k=[],N=[0,0],W=!1,q=[],se=!1,he=0,Se=1,de=!1,Le={},Ae=!0,tt=1,ot=function(pe){if(pe=pe||["#fff","#000"],pe&&vs(pe)==="string"&&hi.brewer&&hi.brewer[pe.toLowerCase()]&&(pe=hi.brewer[pe.toLowerCase()]),vs(pe)==="array"){pe.length===1&&(pe=[pe[0],pe[0]]),pe=pe.slice(0);for(var ke=0;ke<pe.length;ke++)pe[ke]=hi(pe[ke]);k.length=0;for(var rt=0;rt<pe.length;rt++)k.push(rt/(pe.length-1))}return In(),q=pe},ft=function(pe){if(W!=null){for(var ke=W.length-1,rt=0;rt<ke&&pe>=W[rt];)rt++;return rt-1}return 0},mt=function(pe){return pe},hn=function(pe){return pe},rn=function(pe,ke){var rt,nt;if(ke==null&&(ke=!1),isNaN(pe)||pe===null)return M;if(ke)nt=pe;else if(W&&W.length>2){var fn=ft(pe);nt=fn/(W.length-2)}else Se!==he?nt=(pe-he)/(Se-he):nt=1;nt=hn(nt),ke||(nt=mt(nt)),tt!==1&&(nt=ev(nt,tt)),nt=N[0]+nt*(1-N[0]-N[1]),nt=Math.min(1,Math.max(0,nt));var Lt=Math.floor(nt*1e4);if(Ae&&Le[Lt])rt=Le[Lt];else{if(vs(q)==="array")for(var dt=0;dt<k.length;dt++){var gt=k[dt];if(nt<=gt){rt=q[dt];break}if(nt>=gt&&dt===k.length-1){rt=q[dt];break}if(nt>gt&&nt<k[dt+1]){nt=(nt-gt)/(k[dt+1]-gt),rt=hi.interpolate(q[dt],q[dt+1],nt,x);break}}else vs(q)==="function"&&(rt=q(nt));Ae&&(Le[Lt]=rt)}return rt},In=function(){return Le={}};ot(_);var lt=function(pe){var ke=hi(rn(pe));return se&&ke[se]?ke[se]():ke};return lt.classes=function(pe){if(pe!=null){if(vs(pe)==="array")W=pe,O=[pe[0],pe[pe.length-1]];else{var ke=hi.analyze(O);pe===0?W=[ke.min,ke.max]:W=hi.limits(ke,"e",pe)}return lt}return W},lt.domain=function(pe){if(!arguments.length)return O;he=pe[0],Se=pe[pe.length-1],k=[];var ke=q.length;if(pe.length===ke&&he!==Se)for(var rt=0,nt=Array.from(pe);rt<nt.length;rt+=1){var fn=nt[rt];k.push((fn-he)/(Se-he))}else{for(var Lt=0;Lt<ke;Lt++)k.push(Lt/(ke-1));if(pe.length>2){var dt=pe.map(function(_t,yt){return yt/(pe.length-1)}),gt=pe.map(function(_t){return(_t-he)/(Se-he)});gt.every(function(_t,yt){return dt[yt]===_t})||(hn=function(_t){if(_t<=0||_t>=1)return _t;for(var yt=0;_t>=gt[yt+1];)yt++;var di=(_t-gt[yt])/(gt[yt+1]-gt[yt]),ar=dt[yt]+di*(dt[yt+1]-dt[yt]);return ar})}}return O=[he,Se],lt},lt.mode=function(pe){return arguments.length?(x=pe,In(),lt):x},lt.range=function(pe,ke){return ot(pe),lt},lt.out=function(pe){return se=pe,lt},lt.spread=function(pe){return arguments.length?(L=pe,lt):L},lt.correctLightness=function(pe){return pe==null&&(pe=!0),de=pe,In(),de?mt=function(ke){for(var rt=rn(0,!0).lab()[0],nt=rn(1,!0).lab()[0],fn=rt>nt,Lt=rn(ke,!0).lab()[0],dt=rt+(nt-rt)*ke,gt=Lt-dt,_t=0,yt=1,di=20;Math.abs(gt)>.01&&di-- >0;)(function(){return fn&&(gt*=-1),gt<0?(_t=ke,ke+=(yt-ke)*.5):(yt=ke,ke+=(_t-ke)*.5),Lt=rn(ke,!0).lab()[0],gt=Lt-dt})();return ke}:mt=function(ke){return ke},lt},lt.padding=function(pe){return pe!=null?(vs(pe)==="number"&&(pe=[pe,pe]),N=pe,lt):N},lt.colors=function(pe,ke){arguments.length<2&&(ke="hex");var rt=[];if(arguments.length===0)rt=q.slice(0);else if(pe===1)rt=[lt(.5)];else if(pe>1){var nt=O[0],fn=O[1]-nt;rt=tv(0,pe,!1).map(function(yt){return lt(nt+yt/(pe-1)*fn)})}else{_=[];var Lt=[];if(W&&W.length>2)for(var dt=1,gt=W.length,_t=1<=gt;_t?dt<gt:dt>gt;_t?dt++:dt--)Lt.push((W[dt-1]+W[dt])*.5);else Lt=O;rt=Lt.map(function(yt){return lt(yt)})}return hi[ke]&&(rt=rt.map(function(yt){return yt[ke]()})),rt},lt.cache=function(pe){return pe!=null?(Ae=pe,lt):Ae},lt.gamma=function(pe){return pe!=null?(tt=pe,lt):tt},lt.nodata=function(pe){return pe!=null?(M=hi(pe),lt):M},lt};function tv(_,x,M){for(var L=[],O=_<x,k=M?O?x+1:x-1:x,N=_;O?N<k:N>k;O?N++:N--)L.push(N);return L}var Ma=w,nv=$l,iv=function(_){for(var x=[1,1],M=1;M<_;M++){for(var L=[1],O=1;O<=x.length;O++)L[O]=(x[O]||0)+x[O-1];x=L}return x},rv=function(_){var x,M,L,O,k,N,W;if(_=_.map(function(de){return new Ma(de)}),_.length===2)x=_.map(function(de){return de.lab()}),k=x[0],N=x[1],O=function(de){var Le=[0,1,2].map(function(Ae){return k[Ae]+de*(N[Ae]-k[Ae])});return new Ma(Le,"lab")};else if(_.length===3)M=_.map(function(de){return de.lab()}),k=M[0],N=M[1],W=M[2],O=function(de){var Le=[0,1,2].map(function(Ae){return(1-de)*(1-de)*k[Ae]+2*(1-de)*de*N[Ae]+de*de*W[Ae]});return new Ma(Le,"lab")};else if(_.length===4){var q;L=_.map(function(de){return de.lab()}),k=L[0],N=L[1],W=L[2],q=L[3],O=function(de){var Le=[0,1,2].map(function(Ae){return(1-de)*(1-de)*(1-de)*k[Ae]+3*(1-de)*(1-de)*de*N[Ae]+3*(1-de)*de*de*W[Ae]+de*de*de*q[Ae]});return new Ma(Le,"lab")}}else if(_.length>=5){var se,he,Se;se=_.map(function(de){return de.lab()}),Se=_.length-1,he=iv(Se),O=function(de){var Le=1-de,Ae=[0,1,2].map(function(tt){return se.reduce(function(ot,ft,mt){return ot+he[mt]*Math.pow(Le,Se-mt)*Math.pow(de,mt)*ft[tt]},0)});return new Ma(Ae,"lab")}}else throw new RangeError("No point in running bezier with only one color.");return O},sv=function(_){var x=rv(_);return x.scale=function(){return nv(x)},x},Yl=P,fi=function(_,x,M){if(!fi[M])throw new Error("unknown blend mode "+M);return fi[M](_,x)},rr=function(_){return function(x,M){var L=Yl(M).rgb(),O=Yl(x).rgb();return Yl.rgb(_(L,O))}},sr=function(_){return function(x,M){var L=[];return L[0]=_(x[0],M[0]),L[1]=_(x[1],M[1]),L[2]=_(x[2],M[2]),L}},av=function(_){return _},ov=function(_,x){return _*x/255},lv=function(_,x){return _>x?x:_},cv=function(_,x){return _>x?_:x},uv=function(_,x){return 255*(1-(1-_/255)*(1-x/255))},hv=function(_,x){return x<128?2*_*x/255:255*(1-2*(1-_/255)*(1-x/255))},fv=function(_,x){return 255*(1-(1-x/255)/(_/255))},dv=function(_,x){return _===255?255:(_=255*(x/255)/(1-_/255),_>255?255:_)};fi.normal=rr(sr(av)),fi.multiply=rr(sr(ov)),fi.screen=rr(sr(uv)),fi.overlay=rr(sr(hv)),fi.darken=rr(sr(lv)),fi.lighten=rr(sr(cv)),fi.dodge=rr(sr(dv)),fi.burn=rr(sr(fv));for(var pv=fi,jl=p.type,mv=p.clip_rgb,gv=p.TWOPI,_v=Math.pow,vv=Math.sin,xv=Math.cos,qh=P,yv=function(_,x,M,L,O){_===void 0&&(_=300),x===void 0&&(x=-1.5),M===void 0&&(M=1),L===void 0&&(L=1),O===void 0&&(O=[0,1]);var k=0,N;jl(O)==="array"?N=O[1]-O[0]:(N=0,O=[O,O]);var W=function(q){var se=gv*((_+120)/360+x*q),he=_v(O[0]+N*q,L),Se=k!==0?M[0]+q*k:M,de=Se*he*(1-he)/2,Le=xv(se),Ae=vv(se),tt=he+de*(-.14861*Le+1.78277*Ae),ot=he+de*(-.29227*Le-.90649*Ae),ft=he+de*(1.97294*Le);return qh(mv([tt*255,ot*255,ft*255,1]))};return W.start=function(q){return q==null?_:(_=q,W)},W.rotations=function(q){return q==null?x:(x=q,W)},W.gamma=function(q){return q==null?L:(L=q,W)},W.hue=function(q){return q==null?M:(M=q,jl(M)==="array"?(k=M[1]-M[0],k===0&&(M=M[1])):k=0,W)},W.lightness=function(q){return q==null?O:(jl(q)==="array"?(O=q,N=q[1]-q[0]):(O=[q,q],N=0),W)},W.scale=function(){return qh.scale(W)},W.hue(M),W},Mv=w,bv="0123456789abcdef",Sv=Math.floor,Ev=Math.random,Tv=function(){for(var _="#",x=0;x<6;x++)_+=bv.charAt(Sv(Ev()*16));return new Mv(_,"hex")},Kl=c,$h=Math.log,wv=Math.pow,Av=Math.floor,Rv=Math.abs,Yh=function(_,x){x===void 0&&(x=null);var M={min:Number.MAX_VALUE,max:Number.MAX_VALUE*-1,sum:0,values:[],count:0};return Kl(_)==="object"&&(_=Object.values(_)),_.forEach(function(L){x&&Kl(L)==="object"&&(L=L[x]),L!=null&&!isNaN(L)&&(M.values.push(L),M.sum+=L,L<M.min&&(M.min=L),L>M.max&&(M.max=L),M.count+=1)}),M.domain=[M.min,M.max],M.limits=function(L,O){return jh(M,L,O)},M},jh=function(_,x,M){x===void 0&&(x="equal"),M===void 0&&(M=7),Kl(_)=="array"&&(_=Yh(_));var L=_.min,O=_.max,k=_.values.sort(function(Jl,Ql){return Jl-Ql});if(M===1)return[L,O];var N=[];if(x.substr(0,1)==="c"&&(N.push(L),N.push(O)),x.substr(0,1)==="e"){N.push(L);for(var W=1;W<M;W++)N.push(L+W/M*(O-L));N.push(O)}else if(x.substr(0,1)==="l"){if(L<=0)throw new Error("Logarithmic scales are only possible for values > 0");var q=Math.LOG10E*$h(L),se=Math.LOG10E*$h(O);N.push(L);for(var he=1;he<M;he++)N.push(wv(10,q+he/M*(se-q)));N.push(O)}else if(x.substr(0,1)==="q"){N.push(L);for(var Se=1;Se<M;Se++){var de=(k.length-1)*Se/M,Le=Av(de);if(Le===de)N.push(k[Le]);else{var Ae=de-Le;N.push(k[Le]*(1-Ae)+k[Le+1]*Ae)}}N.push(O)}else if(x.substr(0,1)==="k"){var tt,ot=k.length,ft=new Array(ot),mt=new Array(M),hn=!0,rn=0,In=null;In=[],In.push(L);for(var lt=1;lt<M;lt++)In.push(L+lt/M*(O-L));for(In.push(O);hn;){for(var pe=0;pe<M;pe++)mt[pe]=0;for(var ke=0;ke<ot;ke++)for(var rt=k[ke],nt=Number.MAX_VALUE,fn=void 0,Lt=0;Lt<M;Lt++){var dt=Rv(In[Lt]-rt);dt<nt&&(nt=dt,fn=Lt),mt[fn]++,ft[ke]=fn}for(var gt=new Array(M),_t=0;_t<M;_t++)gt[_t]=null;for(var yt=0;yt<ot;yt++)tt=ft[yt],gt[tt]===null?gt[tt]=k[yt]:gt[tt]+=k[yt];for(var di=0;di<M;di++)gt[di]*=1/mt[di];hn=!1;for(var ar=0;ar<M;ar++)if(gt[ar]!==In[ar]){hn=!0;break}In=gt,rn++,rn>200&&(hn=!1)}for(var or={},xs=0;xs<M;xs++)or[xs]=[];for(var ys=0;ys<ot;ys++)tt=ft[ys],or[tt].push(k[ys]);for(var ki=[],Dr=0;Dr<M;Dr++)ki.push(or[Dr][0]),ki.push(or[Dr][or[Dr].length-1]);ki=ki.sort(function(Jl,Ql){return Jl-Ql}),N.push(ki[0]);for(var ba=1;ba<ki.length;ba+=2){var Ir=ki[ba];!isNaN(Ir)&&N.indexOf(Ir)===-1&&N.push(Ir)}}return N},Kh={analyze:Yh,limits:jh},Zh=w,Cv=function(_,x){_=new Zh(_),x=new Zh(x);var M=_.luminance(),L=x.luminance();return M>L?(M+.05)/(L+.05):(L+.05)/(M+.05)},Jh=w,Fi=Math.sqrt,jt=Math.pow,Lv=Math.min,Pv=Math.max,Qh=Math.atan2,ef=Math.abs,bo=Math.cos,tf=Math.sin,Dv=Math.exp,nf=Math.PI,Iv=function(_,x,M,L,O){M===void 0&&(M=1),L===void 0&&(L=1),O===void 0&&(O=1);var k=function(Ir){return 360*Ir/(2*nf)},N=function(Ir){return 2*nf*Ir/360};_=new Jh(_),x=new Jh(x);var W=Array.from(_.lab()),q=W[0],se=W[1],he=W[2],Se=Array.from(x.lab()),de=Se[0],Le=Se[1],Ae=Se[2],tt=(q+de)/2,ot=Fi(jt(se,2)+jt(he,2)),ft=Fi(jt(Le,2)+jt(Ae,2)),mt=(ot+ft)/2,hn=.5*(1-Fi(jt(mt,7)/(jt(mt,7)+jt(25,7)))),rn=se*(1+hn),In=Le*(1+hn),lt=Fi(jt(rn,2)+jt(he,2)),pe=Fi(jt(In,2)+jt(Ae,2)),ke=(lt+pe)/2,rt=k(Qh(he,rn)),nt=k(Qh(Ae,In)),fn=rt>=0?rt:rt+360,Lt=nt>=0?nt:nt+360,dt=ef(fn-Lt)>180?(fn+Lt+360)/2:(fn+Lt)/2,gt=1-.17*bo(N(dt-30))+.24*bo(N(2*dt))+.32*bo(N(3*dt+6))-.2*bo(N(4*dt-63)),_t=Lt-fn;_t=ef(_t)<=180?_t:Lt<=fn?_t+360:_t-360,_t=2*Fi(lt*pe)*tf(N(_t)/2);var yt=de-q,di=pe-lt,ar=1+.015*jt(tt-50,2)/Fi(20+jt(tt-50,2)),or=1+.045*ke,xs=1+.015*ke*gt,ys=30*Dv(-jt((dt-275)/25,2)),ki=2*Fi(jt(ke,7)/(jt(ke,7)+jt(25,7))),Dr=-ki*tf(2*N(ys)),ba=Fi(jt(yt/(M*ar),2)+jt(di/(L*or),2)+jt(_t/(O*xs),2)+Dr*(di/(L*or))*(_t/(O*xs)));return Pv(0,Lv(100,ba))},rf=w,Uv=function(_,x,M){M===void 0&&(M="lab"),_=new rf(_),x=new rf(x);var L=_.get(M),O=x.get(M),k=0;for(var N in L){var W=(L[N]||0)-(O[N]||0);k+=W*W}return Math.sqrt(k)},Nv=w,Ov=function(){for(var _=[],x=arguments.length;x--;)_[x]=arguments[x];try{return new(Function.prototype.bind.apply(Nv,[null].concat(_))),!0}catch{return!1}},sf=P,af=$l,Fv={cool:function(){return af([sf.hsl(180,1,.9),sf.hsl(250,.7,.4)])},hot:function(){return af(["#000","#f00","#ff0","#fff"]).mode("rgb")}},So={OrRd:["#fff7ec","#fee8c8","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#b30000","#7f0000"],PuBu:["#fff7fb","#ece7f2","#d0d1e6","#a6bddb","#74a9cf","#3690c0","#0570b0","#045a8d","#023858"],BuPu:["#f7fcfd","#e0ecf4","#bfd3e6","#9ebcda","#8c96c6","#8c6bb1","#88419d","#810f7c","#4d004b"],Oranges:["#fff5eb","#fee6ce","#fdd0a2","#fdae6b","#fd8d3c","#f16913","#d94801","#a63603","#7f2704"],BuGn:["#f7fcfd","#e5f5f9","#ccece6","#99d8c9","#66c2a4","#41ae76","#238b45","#006d2c","#00441b"],YlOrBr:["#ffffe5","#fff7bc","#fee391","#fec44f","#fe9929","#ec7014","#cc4c02","#993404","#662506"],YlGn:["#ffffe5","#f7fcb9","#d9f0a3","#addd8e","#78c679","#41ab5d","#238443","#006837","#004529"],Reds:["#fff5f0","#fee0d2","#fcbba1","#fc9272","#fb6a4a","#ef3b2c","#cb181d","#a50f15","#67000d"],RdPu:["#fff7f3","#fde0dd","#fcc5c0","#fa9fb5","#f768a1","#dd3497","#ae017e","#7a0177","#49006a"],Greens:["#f7fcf5","#e5f5e0","#c7e9c0","#a1d99b","#74c476","#41ab5d","#238b45","#006d2c","#00441b"],YlGnBu:["#ffffd9","#edf8b1","#c7e9b4","#7fcdbb","#41b6c4","#1d91c0","#225ea8","#253494","#081d58"],Purples:["#fcfbfd","#efedf5","#dadaeb","#bcbddc","#9e9ac8","#807dba","#6a51a3","#54278f","#3f007d"],GnBu:["#f7fcf0","#e0f3db","#ccebc5","#a8ddb5","#7bccc4","#4eb3d3","#2b8cbe","#0868ac","#084081"],Greys:["#ffffff","#f0f0f0","#d9d9d9","#bdbdbd","#969696","#737373","#525252","#252525","#000000"],YlOrRd:["#ffffcc","#ffeda0","#fed976","#feb24c","#fd8d3c","#fc4e2a","#e31a1c","#bd0026","#800026"],PuRd:["#f7f4f9","#e7e1ef","#d4b9da","#c994c7","#df65b0","#e7298a","#ce1256","#980043","#67001f"],Blues:["#f7fbff","#deebf7","#c6dbef","#9ecae1","#6baed6","#4292c6","#2171b5","#08519c","#08306b"],PuBuGn:["#fff7fb","#ece2f0","#d0d1e6","#a6bddb","#67a9cf","#3690c0","#02818a","#016c59","#014636"],Viridis:["#440154","#482777","#3f4a8a","#31678e","#26838f","#1f9d8a","#6cce5a","#b6de2b","#fee825"],Spectral:["#9e0142","#d53e4f","#f46d43","#fdae61","#fee08b","#ffffbf","#e6f598","#abdda4","#66c2a5","#3288bd","#5e4fa2"],RdYlGn:["#a50026","#d73027","#f46d43","#fdae61","#fee08b","#ffffbf","#d9ef8b","#a6d96a","#66bd63","#1a9850","#006837"],RdBu:["#67001f","#b2182b","#d6604d","#f4a582","#fddbc7","#f7f7f7","#d1e5f0","#92c5de","#4393c3","#2166ac","#053061"],PiYG:["#8e0152","#c51b7d","#de77ae","#f1b6da","#fde0ef","#f7f7f7","#e6f5d0","#b8e186","#7fbc41","#4d9221","#276419"],PRGn:["#40004b","#762a83","#9970ab","#c2a5cf","#e7d4e8","#f7f7f7","#d9f0d3","#a6dba0","#5aae61","#1b7837","#00441b"],RdYlBu:["#a50026","#d73027","#f46d43","#fdae61","#fee090","#ffffbf","#e0f3f8","#abd9e9","#74add1","#4575b4","#313695"],BrBG:["#543005","#8c510a","#bf812d","#dfc27d","#f6e8c3","#f5f5f5","#c7eae5","#80cdc1","#35978f","#01665e","#003c30"],RdGy:["#67001f","#b2182b","#d6604d","#f4a582","#fddbc7","#ffffff","#e0e0e0","#bababa","#878787","#4d4d4d","#1a1a1a"],PuOr:["#7f3b08","#b35806","#e08214","#fdb863","#fee0b6","#f7f7f7","#d8daeb","#b2abd2","#8073ac","#542788","#2d004b"],Set2:["#66c2a5","#fc8d62","#8da0cb","#e78ac3","#a6d854","#ffd92f","#e5c494","#b3b3b3"],Accent:["#7fc97f","#beaed4","#fdc086","#ffff99","#386cb0","#f0027f","#bf5b17","#666666"],Set1:["#e41a1c","#377eb8","#4daf4a","#984ea3","#ff7f00","#ffff33","#a65628","#f781bf","#999999"],Set3:["#8dd3c7","#ffffb3","#bebada","#fb8072","#80b1d3","#fdb462","#b3de69","#fccde5","#d9d9d9","#bc80bd","#ccebc5","#ffed6f"],Dark2:["#1b9e77","#d95f02","#7570b3","#e7298a","#66a61e","#e6ab02","#a6761d","#666666"],Paired:["#a6cee3","#1f78b4","#b2df8a","#33a02c","#fb9a99","#e31a1c","#fdbf6f","#ff7f00","#cab2d6","#6a3d9a","#ffff99","#b15928"],Pastel2:["#b3e2cd","#fdcdac","#cbd5e8","#f4cae4","#e6f5c9","#fff2ae","#f1e2cc","#cccccc"],Pastel1:["#fbb4ae","#b3cde3","#ccebc5","#decbe4","#fed9a6","#ffffcc","#e5d8bd","#fddaec","#f2f2f2"]},Zl=0,of=Object.keys(So);Zl<of.length;Zl+=1){var lf=of[Zl];So[lf.toLowerCase()]=So[lf]}var kv=So,nn=P;nn.average=J0,nn.bezier=sv,nn.blend=pv,nn.cubehelix=yv,nn.mix=nn.interpolate=Fh,nn.random=Tv,nn.scale=$l,nn.analyze=Kh.analyze,nn.contrast=Cv,nn.deltaE=Iv,nn.distance=Uv,nn.limits=Kh.limits,nn.valid=Ov,nn.scales=Fv,nn.colors=xh,nn.brewer=kv;var Bv=nn;return Bv})})(Am);var F1=Am.exports;const Da=O1(F1);function $i(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function Rm(s,e){s.prototype=Object.create(e.prototype),s.prototype.constructor=s,s.__proto__=e}/*!
 * GSAP 3.11.5
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Zn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},aa={duration:.5,overwrite:!1,delay:0},zu,Tn,Zt,ai=1e8,Rt=1/ai,ou=Math.PI*2,k1=ou/4,B1=0,Cm=Math.sqrt,z1=Math.cos,H1=Math.sin,ln=function(e){return typeof e=="string"},Xt=function(e){return typeof e=="function"},tr=function(e){return typeof e=="number"},Hu=function(e){return typeof e>"u"},Pi=function(e){return typeof e=="object"},Fn=function(e){return e!==!1},Gu=function(){return typeof window<"u"},jo=function(e){return Xt(e)||ln(e)},Lm=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},wn=Array.isArray,lu=/(?:-?\.?\d|\.)+/gi,Pm=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Ws=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Oc=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Dm=/[+-]=-?[.\d]+/,Im=/[^,'"\[\]\s]+/gi,G1=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,zt,ii,cu,Vu,Jn={},cl={},Um,Nm=function(e){return(cl=is(e,Jn))&&zn},Wu=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},ul=function(e,t){return!t&&console.warn(e)},Om=function(e,t){return e&&(Jn[e]=t)&&cl&&(cl[e]=t)||Jn},Ja=function(){return 0},V1={suppressEvents:!0,isStart:!0,kill:!1},Qo={suppressEvents:!0,kill:!1},W1={suppressEvents:!0},Xu={},Sr=[],uu={},Fm,Xn={},Fc={},ap=30,el=[],qu="",$u=function(e){var t=e[0],n,i;if(Pi(t)||Xt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=el.length;i--&&!el[i].targetTest(t););n=el[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new og(e[i],n)))||e.splice(i,1);return e},Kr=function(e){return e._gsap||$u(oi(e))[0]._gsap},km=function(e,t,n){return(n=e[t])&&Xt(n)?e[t]():Hu(n)&&e.getAttribute&&e.getAttribute(t)||n},kn=function(e,t){return(e=e.split(",")).forEach(t)||e},Yt=function(e){return Math.round(e*1e5)/1e5||0},pn=function(e){return Math.round(e*1e7)/1e7||0},js=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},X1=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},hl=function(){var e=Sr.length,t=Sr.slice(0),n,i;for(uu={},Sr.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Bm=function(e,t,n,i){Sr.length&&!Tn&&hl(),e.render(t,n,i||Tn&&t<0&&(e._initted||e._startAt)),Sr.length&&!Tn&&hl()},zm=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(Im).length<2?t:ln(e)?e.trim():e},Hm=function(e){return e},ci=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},q1=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},is=function(e,t){for(var n in t)e[n]=t[n];return e},op=function s(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=Pi(t[n])?s(e[n]||(e[n]={}),t[n]):t[n]);return e},fl=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},Wa=function(e){var t=e.parent||zt,n=e.keyframes?q1(wn(e.keyframes)):ci;if(Fn(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},$1=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},Gm=function(e,t,n,i,r){n===void 0&&(n="_first"),i===void 0&&(i="_last");var a=e[i],o;if(r)for(o=t[r];a&&a[r]>o;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=a,t.parent=t._dp=e,t},bl=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var r=t._prev,a=t._next;r?r._next=a:e[n]===t&&(e[n]=a),a?a._prev=r:e[i]===t&&(e[i]=r),t._next=t._prev=t.parent=null},Tr=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove(e),e._act=0},Zr=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},Y1=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},hu=function(e,t,n,i){return e._startAt&&(Tn?e._startAt.revert(Qo):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},j1=function s(e){return!e||e._ts&&s(e.parent)},lp=function(e){return e._repeat?oa(e._tTime,e=e.duration()+e._rDelay)*e:0},oa=function(e,t){var n=Math.floor(e/=t);return e&&n===e?n-1:n},dl=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Sl=function(e){return e._end=pn(e._start+(e._tDur/Math.abs(e._ts||e._rts||Rt)||0))},El=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=pn(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Sl(e),n._dirty||Zr(n,e)),e},Vm=function(e,t){var n;if((t._time||t._initted&&!t._dur)&&(n=dl(e.rawTime(),t),(!t._dur||lo(0,t.totalDuration(),n)-t._tTime>Rt)&&t.render(n,!0)),Zr(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-Rt}},wi=function(e,t,n,i){return t.parent&&Tr(t),t._start=pn((tr(n)?n:n||e!==zt?ti(e,n,t):e._time)+t._delay),t._end=pn(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Gm(e,t,"_first","_last",e._sort?"_start":0),fu(t)||(e._recent=t),i||Vm(e,t),e._ts<0&&El(e,e._tTime),e},Wm=function(e,t){return(Jn.ScrollTrigger||Wu("scrollTrigger",t))&&Jn.ScrollTrigger.create(t,e)},Xm=function(e,t,n,i,r){if(ju(e,t,r),!e._initted)return 1;if(!n&&e._pt&&!Tn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Fm!==qn.frame)return Sr.push(e),e._lazy=[r,i],1},K1=function s(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||s(t))},fu=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},Z1=function(e,t,n,i){var r=e.ratio,a=t<0||!t&&(!e._start&&K1(e)&&!(!e._initted&&fu(e))||(e._ts<0||e._dp._ts<0)&&!fu(e))?0:1,o=e._rDelay,l=0,c,u,h;if(o&&e._repeat&&(l=lo(0,e._tDur,t),u=oa(l,o),e._yoyo&&u&1&&(a=1-a),u!==oa(e._tTime,o)&&(r=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==r||Tn||i||e._zTime===Rt||!t&&e._zTime){if(!e._initted&&Xm(e,t,i,n,l))return;for(h=e._zTime,e._zTime=t||(n?Rt:0),n||(n=t&&!h),e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=l,c=e._pt;c;)c.r(a,c.d),c=c._next;t<0&&hu(e,t,n,!0),e._onUpdate&&!n&&li(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&li(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&Tr(e,1),!n&&!Tn&&(li(e,a?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},J1=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},la=function(e,t,n,i){var r=e._repeat,a=pn(t)||0,o=e._tTime/e._tDur;return o&&!i&&(e._time*=a/e._dur),e._dur=a,e._tDur=r?r<0?1e10:pn(a*(r+1)+e._rDelay*r):a,o>0&&!i&&El(e,e._tTime=e._tDur*o),e.parent&&Sl(e),n||Zr(e.parent,e),e},cp=function(e){return e instanceof Nn?Zr(e):la(e,e._dur)},Q1={_start:0,endTime:Ja,totalDuration:Ja},ti=function s(e,t,n){var i=e.labels,r=e._recent||Q1,a=e.duration()>=ai?r.endTime(!1):e._dur,o,l,c;return ln(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",o=t.indexOf("="),l==="<"||l===">"?(o>=0&&(t=t.replace(/=/,"")),(l==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(o<0?r:n).totalDuration()/100:1)):o<0?(t in i||(i[t]=a),i[t]):(l=parseFloat(t.charAt(o-1)+t.substr(o+1)),c&&n&&(l=l/100*(wn(n)?n[0]:n).totalDuration()),o>1?s(e,t.substr(0,o-1),n)+l:a+l)):t==null?a:+t},Xa=function(e,t,n){var i=tr(t[1]),r=(i?2:1)+(e<2?0:1),a=t[r],o,l;if(i&&(a.duration=t[1]),a.parent=n,e){for(o=a,l=n;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=Fn(l.vars.inherit)&&l.parent;a.immediateRender=Fn(o.immediateRender),e<2?a.runBackwards=1:a.startAt=t[r-1]}return new Jt(t[0],a,t[r+1])},Ar=function(e,t){return e||e===0?t(e):t},lo=function(e,t,n){return n<e?e:n>t?t:n},bn=function(e,t){return!ln(e)||!(t=G1.exec(e))?"":t[1]},ew=function(e,t,n){return Ar(n,function(i){return lo(e,t,i)})},du=[].slice,qm=function(e,t){return e&&Pi(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Pi(e[0]))&&!e.nodeType&&e!==ii},tw=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var r;return ln(i)&&!t||qm(i,1)?(r=n).push.apply(r,oi(i)):n.push(i)})||n},oi=function(e,t,n){return Zt&&!t&&Zt.selector?Zt.selector(e):ln(e)&&!n&&(cu||!ca())?du.call((t||Vu).querySelectorAll(e),0):wn(e)?tw(e,n):qm(e)?du.call(e,0):e?[e]:[]},pu=function(e){return e=oi(e)[0]||ul("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return oi(t,n.querySelectorAll?n:n===e?ul("Invalid scope")||Vu.createElement("div"):e)}},$m=function(e){return e.sort(function(){return .5-Math.random()})},Ym=function(e){if(Xt(e))return e;var t=Pi(e)?e:{each:e},n=Jr(t.ease),i=t.from||0,r=parseFloat(t.base)||0,a={},o=i>0&&i<1,l=isNaN(i)||o,c=t.axis,u=i,h=i;return ln(i)?u=h={center:.5,edges:.5,end:1}[i]||0:!o&&l&&(u=i[0],h=i[1]),function(f,d,v){var p=(v||t).length,g=a[p],m,S,y,T,E,w,R,P,b;if(!g){if(b=t.grid==="auto"?0:(t.grid||[1,ai])[1],!b){for(R=-ai;R<(R=v[b++].getBoundingClientRect().left)&&b<p;);b--}for(g=a[p]=[],m=l?Math.min(b,p)*u-.5:i%b,S=b===ai?0:l?p*h/b-.5:i/b|0,R=0,P=ai,w=0;w<p;w++)y=w%b-m,T=S-(w/b|0),g[w]=E=c?Math.abs(c==="y"?T:y):Cm(y*y+T*T),E>R&&(R=E),E<P&&(P=E);i==="random"&&$m(g),g.max=R-P,g.min=P,g.v=p=(parseFloat(t.amount)||parseFloat(t.each)*(b>p?p-1:c?c==="y"?p/b:b:Math.max(b,p/b))||0)*(i==="edges"?-1:1),g.b=p<0?r-p:r,g.u=bn(t.amount||t.each)||0,n=n&&p<0?rg(n):n}return p=(g[f]-g.min)/g.max||0,pn(g.b+(n?n(p):p)*g.v)+g.u}},mu=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=pn(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(tr(n)?0:bn(n))}},jm=function(e,t){var n=wn(e),i,r;return!n&&Pi(e)&&(i=n=e.radius||ai,e.values?(e=oi(e.values),(r=!tr(e[0]))&&(i*=i)):e=mu(e.increment)),Ar(t,n?Xt(e)?function(a){return r=e(a),Math.abs(r-a)<=i?r:a}:function(a){for(var o=parseFloat(r?a.x:a),l=parseFloat(r?a.y:0),c=ai,u=0,h=e.length,f,d;h--;)r?(f=e[h].x-o,d=e[h].y-l,f=f*f+d*d):f=Math.abs(e[h]-o),f<c&&(c=f,u=h);return u=!i||c<=i?e[u]:a,r||u===a||tr(a)?u:u+bn(a)}:mu(e))},Km=function(e,t,n,i){return Ar(wn(e)?!t:n===!0?!!(n=0):!i,function(){return wn(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},nw=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(r,a){return a(r)},i)}},iw=function(e,t){return function(n){return e(parseFloat(n))+(t||bn(n))}},rw=function(e,t,n){return Jm(e,t,0,1,n)},Zm=function(e,t,n){return Ar(n,function(i){return e[~~t(i)]})},sw=function s(e,t,n){var i=t-e;return wn(e)?Zm(e,s(0,e.length),t):Ar(n,function(r){return(i+(r-e)%i)%i+e})},aw=function s(e,t,n){var i=t-e,r=i*2;return wn(e)?Zm(e,s(0,e.length-1),t):Ar(n,function(a){return a=(r+(a-e)%r)%r||0,e+(a>i?r-a:a)})},Qa=function(e){for(var t=0,n="",i,r,a,o;~(i=e.indexOf("random(",t));)a=e.indexOf(")",i),o=e.charAt(i+7)==="[",r=e.substr(i+7,a-i-7).match(o?Im:lu),n+=e.substr(t,i-t)+Km(o?r:+r[0],o?0:+r[1],+r[2]||1e-5),t=a+1;return n+e.substr(t,e.length-t)},Jm=function(e,t,n,i,r){var a=t-e,o=i-n;return Ar(r,function(l){return n+((l-e)/a*o||0)})},ow=function s(e,t,n,i){var r=isNaN(e+t)?0:function(d){return(1-d)*e+d*t};if(!r){var a=ln(e),o={},l,c,u,h,f;if(n===!0&&(i=1)&&(n=null),a)e={p:e},t={p:t};else if(wn(e)&&!wn(t)){for(u=[],h=e.length,f=h-2,c=1;c<h;c++)u.push(s(e[c-1],e[c]));h--,r=function(v){v*=h;var p=Math.min(f,~~v);return u[p](v-p)},n=t}else i||(e=is(wn(e)?[]:{},e));if(!u){for(l in t)Yu.call(o,e,l,"get",t[l]);r=function(v){return Ju(v,o)||(a?e.p:e)}}}return Ar(n,r)},up=function(e,t,n){var i=e.labels,r=ai,a,o,l;for(a in i)o=i[a]-t,o<0==!!n&&o&&r>(o=Math.abs(o))&&(l=a,r=o);return l},li=function(e,t,n){var i=e.vars,r=i[t],a=Zt,o=e._ctx,l,c,u;if(r)return l=i[t+"Params"],c=i.callbackScope||e,n&&Sr.length&&hl(),o&&(Zt=o),u=l?r.apply(c,l):r.call(c),Zt=a,u},ka=function(e){return Tr(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Tn),e.progress()<1&&li(e,"onInterrupt"),e},Xs,Qm=[],eg=function(e){if(!Gu()){Qm.push(e);return}e=!e.name&&e.default||e;var t=e.name,n=Xt(e),i=t&&!n&&e.init?function(){this._props=[]}:e,r={init:Ja,render:Ju,add:Yu,kill:Sw,modifier:bw,rawVars:0},a={targetTest:0,get:0,getSetter:Zu,aliases:{},register:0};if(ca(),e!==i){if(Xn[t])return;ci(i,ci(fl(e,r),a)),is(i.prototype,is(r,fl(e,a))),Xn[i.prop=t]=i,e.targetTest&&(el.push(i),Xu[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Om(t,i),e.register&&e.register(zn,i,Bn)},wt=255,Ba={aqua:[0,wt,wt],lime:[0,wt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,wt],navy:[0,0,128],white:[wt,wt,wt],olive:[128,128,0],yellow:[wt,wt,0],orange:[wt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[wt,0,0],pink:[wt,192,203],cyan:[0,wt,wt],transparent:[wt,wt,wt,0]},kc=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*wt+.5|0},tg=function(e,t,n){var i=e?tr(e)?[e>>16,e>>8&wt,e&wt]:0:Ba.black,r,a,o,l,c,u,h,f,d,v;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Ba[e])i=Ba[e];else if(e.charAt(0)==="#"){if(e.length<6&&(r=e.charAt(1),a=e.charAt(2),o=e.charAt(3),e="#"+r+r+a+a+o+o+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&wt,i&wt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&wt,e&wt]}else if(e.substr(0,3)==="hsl"){if(i=v=e.match(lu),!t)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,a=u<=.5?u*(c+1):u+c-u*c,r=u*2-a,i.length>3&&(i[3]*=1),i[0]=kc(l+1/3,r,a),i[1]=kc(l,r,a),i[2]=kc(l-1/3,r,a);else if(~e.indexOf("="))return i=e.match(Pm),n&&i.length<4&&(i[3]=1),i}else i=e.match(lu)||Ba.transparent;i=i.map(Number)}return t&&!v&&(r=i[0]/wt,a=i[1]/wt,o=i[2]/wt,h=Math.max(r,a,o),f=Math.min(r,a,o),u=(h+f)/2,h===f?l=c=0:(d=h-f,c=u>.5?d/(2-h-f):d/(h+f),l=h===r?(a-o)/d+(a<o?6:0):h===a?(o-r)/d+2:(r-a)/d+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},ng=function(e){var t=[],n=[],i=-1;return e.split(Er).forEach(function(r){var a=r.match(Ws)||[];t.push.apply(t,a),n.push(i+=a.length+1)}),t.c=n,t},hp=function(e,t,n){var i="",r=(e+i).match(Er),a=t?"hsla(":"rgba(",o=0,l,c,u,h;if(!r)return e;if(r=r.map(function(f){return(f=tg(f,t,1))&&a+(t?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(u=ng(e),l=n.c,l.join(i)!==u.c.join(i)))for(c=e.replace(Er,"1").split(Ws),h=c.length-1;o<h;o++)i+=c[o]+(~l.indexOf(o)?r.shift()||a+"0,0,0,0)":(u.length?u:r.length?r:n).shift());if(!c)for(c=e.split(Er),h=c.length-1;o<h;o++)i+=c[o]+r[o];return i+c[h]},Er=function(){var s="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Ba)s+="|"+e+"\\b";return new RegExp(s+")","gi")}(),lw=/hsl[a]?\(/,ig=function(e){var t=e.join(" "),n;if(Er.lastIndex=0,Er.test(t))return n=lw.test(t),e[1]=hp(e[1],n),e[0]=hp(e[0],n,ng(e[1])),!0},eo,qn=function(){var s=Date.now,e=500,t=33,n=s(),i=n,r=1e3/240,a=r,o=[],l,c,u,h,f,d,v=function p(g){var m=s()-i,S=g===!0,y,T,E,w;if(m>e&&(n+=m-t),i+=m,E=i-n,y=E-a,(y>0||S)&&(w=++h.frame,f=E-h.time*1e3,h.time=E=E/1e3,a+=y+(y>=r?4:r-y),T=1),S||(l=c(p)),T)for(d=0;d<o.length;d++)o[d](E,f,w,g)};return h={time:0,frame:0,tick:function(){v(!0)},deltaRatio:function(g){return f/(1e3/(g||60))},wake:function(){Um&&(!cu&&Gu()&&(ii=cu=window,Vu=ii.document||{},Jn.gsap=zn,(ii.gsapVersions||(ii.gsapVersions=[])).push(zn.version),Nm(cl||ii.GreenSockGlobals||!ii.gsap&&ii||{}),u=ii.requestAnimationFrame,Qm.forEach(eg)),l&&h.sleep(),c=u||function(g){return setTimeout(g,a-h.time*1e3+1|0)},eo=1,v(2))},sleep:function(){(u?ii.cancelAnimationFrame:clearTimeout)(l),eo=0,c=Ja},lagSmoothing:function(g,m){e=g||1/0,t=Math.min(m||33,e)},fps:function(g){r=1e3/(g||240),a=h.time*1e3+r},add:function(g,m,S){var y=m?function(T,E,w,R){g(T,E,w,R),h.remove(y)}:g;return h.remove(g),o[S?"unshift":"push"](y),ca(),y},remove:function(g,m){~(m=o.indexOf(g))&&o.splice(m,1)&&d>=m&&d--},_listeners:o},h}(),ca=function(){return!eo&&qn.wake()},ct={},cw=/^[\d.\-M][\d.\-,\s]/,uw=/["']/g,hw=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],r=1,a=n.length,o,l,c;r<a;r++)l=n[r],o=r!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),t[i]=isNaN(c)?c.replace(uw,"").trim():+c,i=l.substr(o+1).trim();return t},fw=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},dw=function(e){var t=(e+"").split("("),n=ct[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[hw(t[1])]:fw(e).split(",").map(zm)):ct._CE&&cw.test(e)?ct._CE("",e):n},rg=function(e){return function(t){return 1-e(1-t)}},sg=function s(e,t){for(var n=e._first,i;n;)n instanceof Nn?s(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?s(n.timeline,t):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=t)),n=n._next},Jr=function(e,t){return e&&(Xt(e)?e:ct[e]||dw(e))||t},cs=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var r={easeIn:t,easeOut:n,easeInOut:i},a;return kn(e,function(o){ct[o]=Jn[o]=r,ct[a=o.toLowerCase()]=n;for(var l in r)ct[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=ct[o+"."+l]=r[l]}),r},ag=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Bc=function s(e,t,n){var i=t>=1?t:1,r=(n||(e?.3:.45))/(t<1?t:1),a=r/ou*(Math.asin(1/i)||0),o=function(u){return u===1?1:i*Math.pow(2,-10*u)*H1((u-a)*r)+1},l=e==="out"?o:e==="in"?function(c){return 1-o(1-c)}:ag(o);return r=ou/r,l.config=function(c,u){return s(e,c,u)},l},zc=function s(e,t){t===void 0&&(t=1.70158);var n=function(a){return a?--a*a*((t+1)*a+t)+1:0},i=e==="out"?n:e==="in"?function(r){return 1-n(1-r)}:ag(n);return i.config=function(r){return s(e,r)},i};kn("Linear,Quad,Cubic,Quart,Quint,Strong",function(s,e){var t=e<5?e+1:e;cs(s+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});ct.Linear.easeNone=ct.none=ct.Linear.easeIn;cs("Elastic",Bc("in"),Bc("out"),Bc());(function(s,e){var t=1/e,n=2*t,i=2.5*t,r=function(o){return o<t?s*o*o:o<n?s*Math.pow(o-1.5/e,2)+.75:o<i?s*(o-=2.25/e)*o+.9375:s*Math.pow(o-2.625/e,2)+.984375};cs("Bounce",function(a){return 1-r(1-a)},r)})(7.5625,2.75);cs("Expo",function(s){return s?Math.pow(2,10*(s-1)):0});cs("Circ",function(s){return-(Cm(1-s*s)-1)});cs("Sine",function(s){return s===1?1:-z1(s*k1)+1});cs("Back",zc("in"),zc("out"),zc());ct.SteppedEase=ct.steps=Jn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),r=t?1:0,a=1-Rt;return function(o){return((i*lo(0,a,o)|0)+r)*n}}};aa.ease=ct["quad.out"];kn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(s){return qu+=s+","+s+"Params,"});var og=function(e,t){this.id=B1++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:km,this.set=t?t.getSetter:Zu},ua=function(){function s(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,la(this,+t.duration,1,1),this.data=t.data,Zt&&(this._ctx=Zt,Zt.data.push(this)),eo||qn.wake()}var e=s.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,la(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(ca(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(El(this,n),!r._dp||r.parent||Vm(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&wi(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===Rt||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Bm(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+lp(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.ratio},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+lp(this),i):this.duration()?Math.min(1,this._time/this._dur):this.ratio},e.iteration=function(n,i){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*r,i):this._repeat?oa(this._tTime,r)+1:1},e.timeScale=function(n){if(!arguments.length)return this._rts===-Rt?0:this._rts;if(this._rts===n)return this;var i=this.parent&&this._ts?dl(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Rt?0:this._rts,this.totalTime(lo(-Math.abs(this._delay),this._tDur,i),!0),Sl(this),Y1(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(ca(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Rt&&(this._tTime-=Rt)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&wi(i,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(Fn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?dl(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=W1);var i=Tn;return Tn=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Tn=i,this},e.globalTime=function(n){for(var i=this,r=arguments.length?n:i.rawTime();i;)r=i._start+r/(i._ts||1),i=i._dp;return!this.parent&&this._sat?this._sat.vars.immediateRender?-1:this._sat.globalTime(n):r},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,cp(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,cp(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(ti(this,n),Fn(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Fn(i))},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Rt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-Rt,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,r;return!!(!n||this._ts&&this._initted&&n.isActive()&&(r=n.rawTime(!0))>=i&&r<this.endTime(!0)-Rt)},e.eventCallback=function(n,i,r){var a=this.vars;return arguments.length>1?(i?(a[n]=i,r&&(a[n+"Params"]=r),n==="onUpdate"&&(this._onUpdate=i)):delete a[n],this):a[n]},e.then=function(n){var i=this;return new Promise(function(r){var a=Xt(n)?n:Hm,o=function(){var c=i.then;i.then=null,Xt(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=c),r(a),i.then=c};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?o():i._prom=o})},e.kill=function(){ka(this)},s}();ci(ua.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Rt,_prom:0,_ps:!1,_rts:1});var Nn=function(s){Rm(e,s);function e(n,i){var r;return n===void 0&&(n={}),r=s.call(this,n)||this,r.labels={},r.smoothChildTiming=!!n.smoothChildTiming,r.autoRemoveChildren=!!n.autoRemoveChildren,r._sort=Fn(n.sortChildren),zt&&wi(n.parent||zt,$i(r),i),n.reversed&&r.reverse(),n.paused&&r.paused(!0),n.scrollTrigger&&Wm($i(r),n.scrollTrigger),r}var t=e.prototype;return t.to=function(i,r,a){return Xa(0,arguments,this),this},t.from=function(i,r,a){return Xa(1,arguments,this),this},t.fromTo=function(i,r,a,o){return Xa(2,arguments,this),this},t.set=function(i,r,a){return r.duration=0,r.parent=this,Wa(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new Jt(i,r,ti(this,a),1),this},t.call=function(i,r,a){return wi(this,Jt.delayedCall(0,i,r),a)},t.staggerTo=function(i,r,a,o,l,c,u){return a.duration=r,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=u,a.parent=this,new Jt(i,a,ti(this,l)),this},t.staggerFrom=function(i,r,a,o,l,c,u){return a.runBackwards=1,Wa(a).immediateRender=Fn(a.immediateRender),this.staggerTo(i,r,a,o,l,c,u)},t.staggerFromTo=function(i,r,a,o,l,c,u,h){return o.startAt=a,Wa(o).immediateRender=Fn(o.immediateRender),this.staggerTo(i,r,o,l,c,u,h)},t.render=function(i,r,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:pn(i),h=this._zTime<0!=i<0&&(this._initted||!c),f,d,v,p,g,m,S,y,T,E,w,R;if(this!==zt&&u>l&&i>=0&&(u=l),u!==this._tTime||a||h){if(o!==this._time&&c&&(u+=this._time-o,i+=this._time-o),f=u,T=this._start,y=this._ts,m=!y,h&&(c||(o=this._zTime),(i||!r)&&(this._zTime=i)),this._repeat){if(w=this._yoyo,g=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(g*100+i,r,a);if(f=pn(u%g),u===l?(p=this._repeat,f=c):(p=~~(u/g),p&&p===u/g&&(f=c,p--),f>c&&(f=c)),E=oa(this._tTime,g),!o&&this._tTime&&E!==p&&this._tTime-E*g-this._dur<=0&&(E=p),w&&p&1&&(f=c-f,R=1),p!==E&&!this._lock){var P=w&&E&1,b=P===(w&&p&1);if(p<E&&(P=!P),o=P?0:c,this._lock=1,this.render(o||(R?0:pn(p*g)),r,!c)._lock=0,this._tTime=u,!r&&this.parent&&li(this,"onRepeat"),this.vars.repeatRefresh&&!R&&(this.invalidate()._lock=1),o&&o!==this._time||m!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,b&&(this._lock=2,o=P?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!R&&this.invalidate()),this._lock=0,!this._ts&&!m)return this;sg(this,R)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(S=J1(this,pn(o),pn(f)),S&&(u-=f-(f=S._start))),this._tTime=u,this._time=f,this._act=!y,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,o=0),!o&&f&&!r&&!p&&(li(this,"onStart"),this._tTime!==u))return this;if(f>=o&&i>=0)for(d=this._first;d;){if(v=d._next,(d._act||f>=d._start)&&d._ts&&S!==d){if(d.parent!==this)return this.render(i,r,a);if(d.render(d._ts>0?(f-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(f-d._start)*d._ts,r,a),f!==this._time||!this._ts&&!m){S=0,v&&(u+=this._zTime=-Rt);break}}d=v}else{d=this._last;for(var D=i<0?i:f;d;){if(v=d._prev,(d._act||D<=d._end)&&d._ts&&S!==d){if(d.parent!==this)return this.render(i,r,a);if(d.render(d._ts>0?(D-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(D-d._start)*d._ts,r,a||Tn&&(d._initted||d._startAt)),f!==this._time||!this._ts&&!m){S=0,v&&(u+=this._zTime=D?-Rt:Rt);break}}d=v}}if(S&&!r&&(this.pause(),S.render(f>=o?0:-Rt)._zTime=f>=o?1:-1,this._ts))return this._start=T,Sl(this),this.render(i,r,a);this._onUpdate&&!r&&li(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&o)&&(T===this._start||Math.abs(y)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&Tr(this,1),!r&&!(i<0&&!o)&&(u||o||!l)&&(li(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,r){var a=this;if(tr(r)||(r=ti(this,r,i)),!(i instanceof ua)){if(wn(i))return i.forEach(function(o){return a.add(o,r)}),this;if(ln(i))return this.addLabel(i,r);if(Xt(i))i=Jt.delayedCall(0,i);else return this}return this!==i?wi(this,i,r):this},t.getChildren=function(i,r,a,o){i===void 0&&(i=!0),r===void 0&&(r=!0),a===void 0&&(a=!0),o===void 0&&(o=-ai);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof Jt?r&&l.push(c):(a&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,r,a)))),c=c._next;return l},t.getById=function(i){for(var r=this.getChildren(1,1,1),a=r.length;a--;)if(r[a].vars.id===i)return r[a]},t.remove=function(i){return ln(i)?this.removeLabel(i):Xt(i)?this.killTweensOf(i):(bl(this,i),i===this._recent&&(this._recent=this._last),Zr(this))},t.totalTime=function(i,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=pn(qn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),s.prototype.totalTime.call(this,i,r),this._forcing=0,this):this._tTime},t.addLabel=function(i,r){return this.labels[i]=ti(this,r),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,r,a){var o=Jt.delayedCall(0,r||Ja,a);return o.data="isPause",this._hasPause=1,wi(this,o,ti(this,i))},t.removePause=function(i){var r=this._first;for(i=ti(this,i);r;)r._start===i&&r.data==="isPause"&&Tr(r),r=r._next},t.killTweensOf=function(i,r,a){for(var o=this.getTweensOf(i,a),l=o.length;l--;)_r!==o[l]&&o[l].kill(i,r);return this},t.getTweensOf=function(i,r){for(var a=[],o=oi(i),l=this._first,c=tr(r),u;l;)l instanceof Jt?X1(l._targets,o)&&(c?(!_r||l._initted&&l._ts)&&l.globalTime(0)<=r&&l.globalTime(l.totalDuration())>r:!r||l.isActive())&&a.push(l):(u=l.getTweensOf(o,r)).length&&a.push.apply(a,u),l=l._next;return a},t.tweenTo=function(i,r){r=r||{};var a=this,o=ti(a,i),l=r,c=l.startAt,u=l.onStart,h=l.onStartParams,f=l.immediateRender,d,v=Jt.to(a,ci({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:r.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||Rt,onStart:function(){if(a.pause(),!d){var g=r.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());v._dur!==g&&la(v,g,0,1).render(v._time,!0,!0),d=1}u&&u.apply(v,h||[])}},r));return f?v.render(0):v},t.tweenFromTo=function(i,r,a){return this.tweenTo(r,ci({startAt:{time:ti(this,i)}},a))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),up(this,ti(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),up(this,ti(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+Rt)},t.shiftChildren=function(i,r,a){a===void 0&&(a=0);for(var o=this._first,l=this.labels,c;o;)o._start>=a&&(o._start+=i,o._end+=i),o=o._next;if(r)for(c in l)l[c]>=a&&(l[c]+=i);return Zr(this)},t.invalidate=function(i){var r=this._first;for(this._lock=0;r;)r.invalidate(i),r=r._next;return s.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var r=this._first,a;r;)a=r._next,this.remove(r),r=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Zr(this)},t.totalDuration=function(i){var r=0,a=this,o=a._last,l=ai,c,u,h;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(h=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),u=o._start,u>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,wi(a,o,u-o._delay,1)._lock=0):l=u,u<0&&o._ts&&(r-=u,(!h&&!a._dp||h&&h.smoothChildTiming)&&(a._start+=u/a._ts,a._time-=u,a._tTime-=u),a.shiftChildren(-u,!1,-1/0),l=0),o._end>r&&o._ts&&(r=o._end),o=c;la(a,a===zt&&a._time>r?a._time:r,1,1),a._dirty=0}return a._tDur},e.updateRoot=function(i){if(zt._ts&&(Bm(zt,dl(i,zt)),Fm=qn.frame),qn.frame>=ap){ap+=Zn.autoSleep||120;var r=zt._first;if((!r||!r._ts)&&Zn.autoSleep&&qn._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||qn.sleep()}}},e}(ua);ci(Nn.prototype,{_lock:0,_hasPause:0,_forcing:0});var pw=function(e,t,n,i,r,a,o){var l=new Bn(this._pt,e,t,0,1,dg,null,r),c=0,u=0,h,f,d,v,p,g,m,S;for(l.b=n,l.e=i,n+="",i+="",(m=~i.indexOf("random("))&&(i=Qa(i)),a&&(S=[n,i],a(S,e,t),n=S[0],i=S[1]),f=n.match(Oc)||[];h=Oc.exec(i);)v=h[0],p=i.substring(c,h.index),d?d=(d+1)%5:p.substr(-5)==="rgba("&&(d=1),v!==f[u++]&&(g=parseFloat(f[u-1])||0,l._pt={_next:l._pt,p:p||u===1?p:",",s:g,c:v.charAt(1)==="="?js(g,v)-g:parseFloat(v)-g,m:d&&d<4?Math.round:0},c=Oc.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=o,(Dm.test(i)||m)&&(l.e=0),this._pt=l,l},Yu=function(e,t,n,i,r,a,o,l,c,u){Xt(i)&&(i=i(r||0,e,a));var h=e[t],f=n!=="get"?n:Xt(h)?c?e[t.indexOf("set")||!Xt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():h,d=Xt(h)?c?xw:hg:Ku,v;if(ln(i)&&(~i.indexOf("random(")&&(i=Qa(i)),i.charAt(1)==="="&&(v=js(f,i)+(bn(f)||0),(v||v===0)&&(i=v))),!u||f!==i||gu)return!isNaN(f*i)&&i!==""?(v=new Bn(this._pt,e,t,+f||0,i-(f||0),typeof h=="boolean"?Mw:fg,0,d),c&&(v.fp=c),o&&v.modifier(o,this,e),this._pt=v):(!h&&!(t in e)&&Wu(t,i),pw.call(this,e,t,f,i,d,l||Zn.stringFilter,c))},mw=function(e,t,n,i,r){if(Xt(e)&&(e=qa(e,r,t,n,i)),!Pi(e)||e.style&&e.nodeType||wn(e)||Lm(e))return ln(e)?qa(e,r,t,n,i):e;var a={},o;for(o in e)a[o]=qa(e[o],r,t,n,i);return a},lg=function(e,t,n,i,r,a){var o,l,c,u;if(Xn[e]&&(o=new Xn[e]).init(r,o.rawVars?t[e]:mw(t[e],i,r,a,n),n,i,a)!==!1&&(n._pt=l=new Bn(n._pt,r,e,0,1,o.render,o,0,o.priority),n!==Xs))for(c=n._ptLookup[n._targets.indexOf(r)],u=o._props.length;u--;)c[o._props[u]]=l;return o},_r,gu,ju=function s(e,t,n){var i=e.vars,r=i.ease,a=i.startAt,o=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.onUpdateParams,h=i.callbackScope,f=i.runBackwards,d=i.yoyoEase,v=i.keyframes,p=i.autoRevert,g=e._dur,m=e._startAt,S=e._targets,y=e.parent,T=y&&y.data==="nested"?y.vars.targets:S,E=e._overwrite==="auto"&&!zu,w=e.timeline,R,P,b,D,$,ae,G,F,V,re,K,ee,oe;if(w&&(!v||!r)&&(r="none"),e._ease=Jr(r,aa.ease),e._yEase=d?rg(Jr(d===!0?r:d,aa.ease)):0,d&&e._yoyo&&!e._repeat&&(d=e._yEase,e._yEase=e._ease,e._ease=d),e._from=!w&&!!i.runBackwards,!w||v&&!i.stagger){if(F=S[0]?Kr(S[0]).harness:0,ee=F&&i[F.prop],R=fl(i,Xu),m&&(m._zTime<0&&m.progress(1),t<0&&f&&o&&!p?m.render(-1,!0):m.revert(f&&g?Qo:V1),m._lazy=0),a){if(Tr(e._startAt=Jt.set(S,ci({data:"isStart",overwrite:!1,parent:y,immediateRender:!0,lazy:!m&&Fn(l),startAt:null,delay:0,onUpdate:c,onUpdateParams:u,callbackScope:h,stagger:0},a))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Tn||!o&&!p)&&e._startAt.revert(Qo),o&&g&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(f&&g&&!m){if(t&&(o=!1),b=ci({overwrite:!1,data:"isFromStart",lazy:o&&!m&&Fn(l),immediateRender:o,stagger:0,parent:y},R),ee&&(b[F.prop]=ee),Tr(e._startAt=Jt.set(S,b)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Tn?e._startAt.revert(Qo):e._startAt.render(-1,!0)),e._zTime=t,!o)s(e._startAt,Rt,Rt);else if(!t)return}for(e._pt=e._ptCache=0,l=g&&Fn(l)||l&&!g,P=0;P<S.length;P++){if($=S[P],G=$._gsap||$u(S)[P]._gsap,e._ptLookup[P]=re={},uu[G.id]&&Sr.length&&hl(),K=T===S?P:T.indexOf($),F&&(V=new F).init($,ee||R,e,K,T)!==!1&&(e._pt=D=new Bn(e._pt,$,V.name,0,1,V.render,V,0,V.priority),V._props.forEach(function(ue){re[ue]=D}),V.priority&&(ae=1)),!F||ee)for(b in R)Xn[b]&&(V=lg(b,R,e,K,$,T))?V.priority&&(ae=1):re[b]=D=Yu.call(e,$,b,"get",R[b],K,T,0,i.stringFilter);e._op&&e._op[P]&&e.kill($,e._op[P]),E&&e._pt&&(_r=e,zt.killTweensOf($,re,e.globalTime(t)),oe=!e.parent,_r=0),e._pt&&l&&(uu[G.id]=1)}ae&&pg(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!oe,v&&t<=0&&w.render(ai,!0,!0)},gw=function(e,t,n,i,r,a,o){var l=(e._pt&&e._ptCache||(e._ptCache={}))[t],c,u,h,f;if(!l)for(l=e._ptCache[t]=[],h=e._ptLookup,f=e._targets.length;f--;){if(c=h[f][t],c&&c.d&&c.d._pt)for(c=c.d._pt;c&&c.p!==t&&c.fp!==t;)c=c._next;if(!c)return gu=1,e.vars[t]="+=0",ju(e,o),gu=0,1;l.push(c)}for(f=l.length;f--;)u=l[f],c=u._pt||u,c.s=(i||i===0)&&!r?i:c.s+(i||0)+a*c.c,c.c=n-c.s,u.e&&(u.e=Yt(n)+bn(u.e)),u.b&&(u.b=c.s+bn(u.b))},_w=function(e,t){var n=e[0]?Kr(e[0]).harness:0,i=n&&n.aliases,r,a,o,l;if(!i)return t;r=is({},t);for(a in i)if(a in r)for(l=i[a].split(","),o=l.length;o--;)r[l[o]]=r[a];return r},vw=function(e,t,n,i){var r=t.ease||i||"power1.inOut",a,o;if(wn(t))o=n[e]||(n[e]=[]),t.forEach(function(l,c){return o.push({t:c/(t.length-1)*100,v:l,e:r})});else for(a in t)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(e),v:t[a],e:r})},qa=function(e,t,n,i,r){return Xt(e)?e.call(t,n,i,r):ln(e)&&~e.indexOf("random(")?Qa(e):e},cg=qu+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",ug={};kn(cg+",id,stagger,delay,duration,paused,scrollTrigger",function(s){return ug[s]=1});var Jt=function(s){Rm(e,s);function e(n,i,r,a){var o;typeof i=="number"&&(r.duration=i,i=r,r=null),o=s.call(this,a?i:Wa(i))||this;var l=o.vars,c=l.duration,u=l.delay,h=l.immediateRender,f=l.stagger,d=l.overwrite,v=l.keyframes,p=l.defaults,g=l.scrollTrigger,m=l.yoyoEase,S=i.parent||zt,y=(wn(n)||Lm(n)?tr(n[0]):"length"in i)?[n]:oi(n),T,E,w,R,P,b,D,$;if(o._targets=y.length?$u(y):ul("GSAP target "+n+" not found. https://greensock.com",!Zn.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=d,v||f||jo(c)||jo(u)){if(i=o.vars,T=o.timeline=new Nn({data:"nested",defaults:p||{},targets:S&&S.data==="nested"?S.vars.targets:y}),T.kill(),T.parent=T._dp=$i(o),T._start=0,f||jo(c)||jo(u)){if(R=y.length,D=f&&Ym(f),Pi(f))for(P in f)~cg.indexOf(P)&&($||($={}),$[P]=f[P]);for(E=0;E<R;E++)w=fl(i,ug),w.stagger=0,m&&(w.yoyoEase=m),$&&is(w,$),b=y[E],w.duration=+qa(c,$i(o),E,b,y),w.delay=(+qa(u,$i(o),E,b,y)||0)-o._delay,!f&&R===1&&w.delay&&(o._delay=u=w.delay,o._start+=u,w.delay=0),T.to(b,w,D?D(E,b,y):0),T._ease=ct.none;T.duration()?c=u=0:o.timeline=0}else if(v){Wa(ci(T.vars.defaults,{ease:"none"})),T._ease=Jr(v.ease||i.ease||"none");var ae=0,G,F,V;if(wn(v))v.forEach(function(re){return T.to(y,re,">")}),T.duration();else{w={};for(P in v)P==="ease"||P==="easeEach"||vw(P,v[P],w,v.easeEach);for(P in w)for(G=w[P].sort(function(re,K){return re.t-K.t}),ae=0,E=0;E<G.length;E++)F=G[E],V={ease:F.e,duration:(F.t-(E?G[E-1].t:0))/100*c},V[P]=F.v,T.to(y,V,ae),ae+=V.duration;T.duration()<c&&T.to({},{duration:c-T.duration()})}}c||o.duration(c=T.duration())}else o.timeline=0;return d===!0&&!zu&&(_r=$i(o),zt.killTweensOf(y),_r=0),wi(S,$i(o),r),i.reversed&&o.reverse(),i.paused&&o.paused(!0),(h||!c&&!v&&o._start===pn(S._time)&&Fn(h)&&j1($i(o))&&S.data!=="nested")&&(o._tTime=-Rt,o.render(Math.max(0,-u)||0)),g&&Wm($i(o),g),o}var t=e.prototype;return t.render=function(i,r,a){var o=this._time,l=this._tDur,c=this._dur,u=i<0,h=i>l-Rt&&!u?l:i<Rt?0:i,f,d,v,p,g,m,S,y,T;if(!c)Z1(this,i,r,a);else if(h!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u){if(f=h,y=this.timeline,this._repeat){if(p=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(p*100+i,r,a);if(f=pn(h%p),h===l?(v=this._repeat,f=c):(v=~~(h/p),v&&v===h/p&&(f=c,v--),f>c&&(f=c)),m=this._yoyo&&v&1,m&&(T=this._yEase,f=c-f),g=oa(this._tTime,p),f===o&&!a&&this._initted)return this._tTime=h,this;v!==g&&(y&&this._yEase&&sg(y,m),this.vars.repeatRefresh&&!m&&!this._lock&&(this._lock=a=1,this.render(pn(p*v),!0).invalidate()._lock=0))}if(!this._initted){if(Xm(this,u?i:f,a,r,h))return this._tTime=0,this;if(o!==this._time)return this;if(c!==this._dur)return this.render(i,r,a)}if(this._tTime=h,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=S=(T||this._ease)(f/c),this._from&&(this.ratio=S=1-S),f&&!o&&!r&&!v&&(li(this,"onStart"),this._tTime!==h))return this;for(d=this._pt;d;)d.r(S,d.d),d=d._next;y&&y.render(i<0?i:!f&&m?-Rt:y._dur*y._ease(f/this._dur),r,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!r&&(u&&hu(this,i,r,a),li(this,"onUpdate")),this._repeat&&v!==g&&this.vars.onRepeat&&!r&&this.parent&&li(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&hu(this,i,!0,!0),(i||!c)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&Tr(this,1),!r&&!(u&&!o)&&(h||o||m)&&(li(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),s.prototype.invalidate.call(this,i)},t.resetTo=function(i,r,a,o){eo||qn.wake(),this._ts||this.play();var l=Math.min(this._dur,(this._dp._time-this._start)*this._ts),c;return this._initted||ju(this,l),c=this._ease(l/this._dur),gw(this,i,r,a,o,c,l)?this.resetTo(i,r,a,o):(El(this,0),this.parent||Gm(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,r){if(r===void 0&&(r="all"),!i&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?ka(this):this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,r,_r&&_r.vars.overwrite!==!0)._first||ka(this),this.parent&&a!==this.timeline.totalDuration()&&la(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=i?oi(i):o,c=this._ptLookup,u=this._pt,h,f,d,v,p,g,m;if((!r||r==="all")&&$1(o,l))return r==="all"&&(this._pt=0),ka(this);for(h=this._op=this._op||[],r!=="all"&&(ln(r)&&(p={},kn(r,function(S){return p[S]=1}),r=p),r=_w(o,r)),m=o.length;m--;)if(~l.indexOf(o[m])){f=c[m],r==="all"?(h[m]=r,v=f,d={}):(d=h[m]=h[m]||{},v=r);for(p in v)g=f&&f[p],g&&((!("kill"in g.d)||g.d.kill(p)===!0)&&bl(this,g,"_pt"),delete f[p]),d!=="all"&&(d[p]=1)}return this._initted&&!this._pt&&u&&ka(this),this},e.to=function(i,r){return new e(i,r,arguments[2])},e.from=function(i,r){return Xa(1,arguments)},e.delayedCall=function(i,r,a,o){return new e(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:r,onReverseComplete:r,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},e.fromTo=function(i,r,a){return Xa(2,arguments)},e.set=function(i,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new e(i,r)},e.killTweensOf=function(i,r,a){return zt.killTweensOf(i,r,a)},e}(ua);ci(Jt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});kn("staggerTo,staggerFrom,staggerFromTo",function(s){Jt[s]=function(){var e=new Nn,t=du.call(arguments,0);return t.splice(s==="staggerFromTo"?5:4,0,0),e[s].apply(e,t)}});var Ku=function(e,t,n){return e[t]=n},hg=function(e,t,n){return e[t](n)},xw=function(e,t,n,i){return e[t](i.fp,n)},yw=function(e,t,n){return e.setAttribute(t,n)},Zu=function(e,t){return Xt(e[t])?hg:Hu(e[t])&&e.setAttribute?yw:Ku},fg=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},Mw=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},dg=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},Ju=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},bw=function(e,t,n,i){for(var r=this._pt,a;r;)a=r._next,r.p===i&&r.modifier(e,t,n),r=a},Sw=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?bl(this,t,"_pt"):t.dep||(n=1),t=i;return!n},Ew=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},pg=function(e){for(var t=e._pt,n,i,r,a;t;){for(n=t._next,i=r;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:a)?t._prev._next=t:r=t,(t._next=i)?i._prev=t:a=t,t=n}e._pt=r},Bn=function(){function s(t,n,i,r,a,o,l,c,u){this.t=n,this.s=r,this.c=a,this.p=i,this.r=o||fg,this.d=l||this,this.set=c||Ku,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=s.prototype;return e.modifier=function(n,i,r){this.mSet=this.mSet||this.set,this.set=Ew,this.m=n,this.mt=r,this.tween=i},s}();kn(qu+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(s){return Xu[s]=1});Jn.TweenMax=Jn.TweenLite=Jt;Jn.TimelineLite=Jn.TimelineMax=Nn;zt=new Nn({sortChildren:!1,defaults:aa,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Zn.stringFilter=ig;var ha=[],tl={},Tw=[],fp=0,Hc=function(e){return(tl[e]||Tw).map(function(t){return t()})},_u=function(){var e=Date.now(),t=[];e-fp>2&&(Hc("matchMediaInit"),ha.forEach(function(n){var i=n.queries,r=n.conditions,a,o,l,c;for(o in i)a=ii.matchMedia(i[o]).matches,a&&(l=1),a!==r[o]&&(r[o]=a,c=1);c&&(n.revert(),l&&t.push(n))}),Hc("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n)}),fp=e,Hc("matchMedia"))},mg=function(){function s(t,n){this.selector=n&&pu(n),this.data=[],this._r=[],this.isReverted=!1,t&&this.add(t)}var e=s.prototype;return e.add=function(n,i,r){Xt(n)&&(r=i,i=n,n=Xt);var a=this,o=function(){var c=Zt,u=a.selector,h;return c&&c!==a&&c.data.push(a),r&&(a.selector=pu(r)),Zt=a,h=i.apply(a,arguments),Xt(h)&&a._r.push(h),Zt=c,a.selector=u,a.isReverted=!1,h};return a.last=o,n===Xt?o(a):n?a[n]=o:o},e.ignore=function(n){var i=Zt;Zt=null,n(this),Zt=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof s?n.push.apply(n,i.getTweens()):i instanceof Jt&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var r=this;if(n){var a=this.getTweens();this.data.forEach(function(l){l.data==="isFlip"&&(l.revert(),l.getChildren(!0,!0,!1).forEach(function(c){return a.splice(a.indexOf(c),1)}))}),a.map(function(l){return{g:l.globalTime(0),t:l}}).sort(function(l,c){return c.g-l.g||-1}).forEach(function(l){return l.t.revert(n)}),this.data.forEach(function(l){return!(l instanceof ua)&&l.revert&&l.revert(n)}),this._r.forEach(function(l){return l(n,r)}),this.isReverted=!0}else this.data.forEach(function(l){return l.kill&&l.kill()});if(this.clear(),i){var o=ha.indexOf(this);~o&&ha.splice(o,1)}},e.revert=function(n){this.kill(n||{})},s}(),ww=function(){function s(t){this.contexts=[],this.scope=t}var e=s.prototype;return e.add=function(n,i,r){Pi(n)||(n={matches:n});var a=new mg(0,r||this.scope),o=a.conditions={},l,c,u;this.contexts.push(a),i=a.add("onMatch",i),a.queries=n;for(c in n)c==="all"?u=1:(l=ii.matchMedia(n[c]),l&&(ha.indexOf(a)<0&&ha.push(a),(o[c]=l.matches)&&(u=1),l.addListener?l.addListener(_u):l.addEventListener("change",_u)));return u&&i(a),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},s}(),pl={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return eg(i)})},timeline:function(e){return new Nn(e)},getTweensOf:function(e,t){return zt.getTweensOf(e,t)},getProperty:function(e,t,n,i){ln(e)&&(e=oi(e)[0]);var r=Kr(e||{}).get,a=n?Hm:zm;return n==="native"&&(n=""),e&&(t?a((Xn[t]&&Xn[t].get||r)(e,t,n,i)):function(o,l,c){return a((Xn[o]&&Xn[o].get||r)(e,o,l,c))})},quickSetter:function(e,t,n){if(e=oi(e),e.length>1){var i=e.map(function(u){return zn.quickSetter(u,t,n)}),r=i.length;return function(u){for(var h=r;h--;)i[h](u)}}e=e[0]||{};var a=Xn[t],o=Kr(e),l=o.harness&&(o.harness.aliases||{})[t]||t,c=a?function(u){var h=new a;Xs._pt=0,h.init(e,n?u+n:u,Xs,0,[e]),h.render(1,h),Xs._pt&&Ju(1,Xs)}:o.set(e,l);return a?c:function(u){return c(e,l,n?u+n:u,o,1)}},quickTo:function(e,t,n){var i,r=zn.to(e,is((i={},i[t]="+=0.1",i.paused=!0,i),n||{})),a=function(l,c,u){return r.resetTo(t,l,c,u)};return a.tween=r,a},isTweening:function(e){return zt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Jr(e.ease,aa.ease)),op(aa,e||{})},config:function(e){return op(Zn,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,r=e.defaults,a=e.extendTimeline;(i||"").split(",").forEach(function(o){return o&&!Xn[o]&&!Jn[o]&&ul(t+" effect requires "+o+" plugin.")}),Fc[t]=function(o,l,c){return n(oi(o),ci(l||{},r),c)},a&&(Nn.prototype[t]=function(o,l,c){return this.add(Fc[t](o,Pi(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){ct[e]=Jr(t)},parseEase:function(e,t){return arguments.length?Jr(e,t):ct},getById:function(e){return zt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new Nn(e),i,r;for(n.smoothChildTiming=Fn(e.smoothChildTiming),zt.remove(n),n._dp=0,n._time=n._tTime=zt._time,i=zt._first;i;)r=i._next,(t||!(!i._dur&&i instanceof Jt&&i.vars.onComplete===i._targets[0]))&&wi(n,i,i._start-i._delay),i=r;return wi(zt,n,0),n},context:function(e,t){return e?new mg(e,t):Zt},matchMedia:function(e){return new ww(e)},matchMediaRefresh:function(){return ha.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||_u()},addEventListener:function(e,t){var n=tl[e]||(tl[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=tl[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:sw,wrapYoyo:aw,distribute:Ym,random:Km,snap:jm,normalize:rw,getUnit:bn,clamp:ew,splitColor:tg,toArray:oi,selector:pu,mapRange:Jm,pipe:nw,unitize:iw,interpolate:ow,shuffle:$m},install:Nm,effects:Fc,ticker:qn,updateRoot:Nn.updateRoot,plugins:Xn,globalTimeline:zt,core:{PropTween:Bn,globals:Om,Tween:Jt,Timeline:Nn,Animation:ua,getCache:Kr,_removeLinkedListItem:bl,reverting:function(){return Tn},context:function(e){return e&&Zt&&(Zt.data.push(e),e._ctx=Zt),Zt},suppressOverwrites:function(e){return zu=e}}};kn("to,from,fromTo,delayedCall,set,killTweensOf",function(s){return pl[s]=Jt[s]});qn.add(Nn.updateRoot);Xs=pl.to({},{duration:0});var Aw=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},Rw=function(e,t){var n=e._targets,i,r,a;for(i in t)for(r=n.length;r--;)a=e._ptLookup[r][i],a&&(a=a.d)&&(a._pt&&(a=Aw(a,i)),a&&a.modifier&&a.modifier(t[i],e,n[r],i))},Gc=function(e,t){return{name:e,rawVars:1,init:function(i,r,a){a._onInit=function(o){var l,c;if(ln(r)&&(l={},kn(r,function(u){return l[u]=1}),r=l),t){l={};for(c in r)l[c]=t(r[c]);r=l}Rw(o,r)}}}},zn=pl.registerPlugin({name:"attr",init:function(e,t,n,i,r){var a,o,l;this.tween=n;for(a in t)l=e.getAttribute(a)||"",o=this.add(e,"setAttribute",(l||0)+"",t[a],i,r,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(e,t){for(var n=t._pt;n;)Tn?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},Gc("roundProps",mu),Gc("modifiers"),Gc("snap",jm))||pl;Jt.version=Nn.version=zn.version="3.11.5";Um=1;Gu()&&ca();ct.Power0;ct.Power1;ct.Power2;ct.Power3;ct.Power4;ct.Linear;ct.Quad;ct.Cubic;ct.Quart;ct.Quint;ct.Strong;ct.Elastic;var Cw=ct.Back;ct.SteppedEase;ct.Bounce;ct.Sine;ct.Expo;ct.Circ;/*!
 * CSSPlugin 3.11.5
 * https://greensock.com
 *
 * Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var dp,vr,Ks,Qu,Xr,pp,eh,Lw=function(){return typeof window<"u"},nr={},Gr=180/Math.PI,Zs=Math.PI/180,Hs=Math.atan2,mp=1e8,th=/([A-Z])/g,Pw=/(left|right|width|margin|padding|x)/i,Dw=/[\s,\(]\S/,Ai={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},vu=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Iw=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Uw=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},Nw=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},gg=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},_g=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},Ow=function(e,t,n){return e.style[t]=n},Fw=function(e,t,n){return e.style.setProperty(t,n)},kw=function(e,t,n){return e._gsap[t]=n},Bw=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},zw=function(e,t,n,i,r){var a=e._gsap;a.scaleX=a.scaleY=n,a.renderTransform(r,a)},Hw=function(e,t,n,i,r){var a=e._gsap;a[t]=n,a.renderTransform(r,a)},Ht="transform",bi=Ht+"Origin",Gw=function s(e,t){var n=this,i=this.target,r=i.style;if(e in nr){if(this.tfm=this.tfm||{},e!=="transform")e=Ai[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return n.tfm[a]=Yi(i,a)}):this.tfm[e]=i._gsap.x?i._gsap[e]:Yi(i,e);else return Ai.transform.split(",").forEach(function(a){return s.call(n,a,t)});if(this.props.indexOf(Ht)>=0)return;i._gsap.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(bi,t,"")),e=Ht}(r||t)&&this.props.push(e,t,r[e])},vg=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},Vw=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,r,a;for(r=0;r<e.length;r+=3)e[r+1]?t[e[r]]=e[r+2]:e[r+2]?n[e[r]]=e[r+2]:n.removeProperty(e[r].substr(0,2)==="--"?e[r]:e[r].replace(th,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)i[a]=this.tfm[a];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),r=eh(),(!r||!r.isStart)&&!n[Ht]&&(vg(n),i.uncache=1)}},xg=function(e,t){var n={target:e,props:[],revert:Vw,save:Gw};return e._gsap||zn.core.getCache(e),t&&t.split(",").forEach(function(i){return n.save(i)}),n},yg,xu=function(e,t){var n=vr.createElementNS?vr.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):vr.createElement(e);return n.style?n:vr.createElement(e)},Ri=function s(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(th,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&s(e,fa(t)||t,1)||""},gp="O,Moz,ms,Ms,Webkit".split(","),fa=function(e,t,n){var i=t||Xr,r=i.style,a=5;if(e in r&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);a--&&!(gp[a]+e in r););return a<0?null:(a===3?"ms":a>=0?gp[a]:"")+e},yu=function(){Lw()&&window.document&&(dp=window,vr=dp.document,Ks=vr.documentElement,Xr=xu("div")||{style:{}},xu("div"),Ht=fa(Ht),bi=Ht+"Origin",Xr.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",yg=!!fa("perspective"),eh=zn.core.reverting,Qu=1)},Vc=function s(e){var t=xu("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,i=this.nextSibling,r=this.style.cssText,a;if(Ks.appendChild(t),t.appendChild(this),this.style.display="block",e)try{a=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=s}catch{}else this._gsapBBox&&(a=this._gsapBBox());return n&&(i?n.insertBefore(this,i):n.appendChild(this)),Ks.removeChild(t),this.style.cssText=r,a},_p=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},Mg=function(e){var t;try{t=e.getBBox()}catch{t=Vc.call(e,!0)}return t&&(t.width||t.height)||e.getBBox===Vc||(t=Vc.call(e,!0)),t&&!t.width&&!t.x&&!t.y?{x:+_p(e,["x","cx","x1"])||0,y:+_p(e,["y","cy","y1"])||0,width:0,height:0}:t},bg=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Mg(e))},to=function(e,t){if(t){var n=e.style;t in nr&&t!==bi&&(t=Ht),n.removeProperty?((t.substr(0,2)==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(t.replace(th,"-$1").toLowerCase())):n.removeAttribute(t)}},xr=function(e,t,n,i,r,a){var o=new Bn(e._pt,t,n,0,1,a?_g:gg);return e._pt=o,o.b=i,o.e=r,e._props.push(n),o},vp={deg:1,rad:1,turn:1},Ww={grid:1,flex:1},wr=function s(e,t,n,i){var r=parseFloat(n)||0,a=(n+"").trim().substr((r+"").length)||"px",o=Xr.style,l=Pw.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),h=100,f=i==="px",d=i==="%",v,p,g,m;return i===a||!r||vp[i]||vp[a]?r:(a!=="px"&&!f&&(r=s(e,t,n,"px")),m=e.getCTM&&bg(e),(d||a==="%")&&(nr[t]||~t.indexOf("adius"))?(v=m?e.getBBox()[l?"width":"height"]:e[u],Yt(d?r/v*h:r/100*v)):(o[l?"width":"height"]=h+(f?a:i),p=~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,m&&(p=(e.ownerSVGElement||{}).parentNode),(!p||p===vr||!p.appendChild)&&(p=vr.body),g=p._gsap,g&&d&&g.width&&l&&g.time===qn.time&&!g.uncache?Yt(r/g.width*h):((d||a==="%")&&!Ww[Ri(p,"display")]&&(o.position=Ri(e,"position")),p===e&&(o.position="static"),p.appendChild(Xr),v=Xr[u],p.removeChild(Xr),o.position="absolute",l&&d&&(g=Kr(p),g.time=qn.time,g.width=p[u]),Yt(f?v*r/h:v&&r?h/v*r:0))))},Yi=function(e,t,n,i){var r;return Qu||yu(),t in Ai&&t!=="transform"&&(t=Ai[t],~t.indexOf(",")&&(t=t.split(",")[0])),nr[t]&&t!=="transform"?(r=io(e,i),r=t!=="transformOrigin"?r[t]:r.svg?r.origin:gl(Ri(e,bi))+" "+r.zOrigin+"px"):(r=e.style[t],(!r||r==="auto"||i||~(r+"").indexOf("calc("))&&(r=ml[t]&&ml[t](e,t,n)||Ri(e,t)||km(e,t)||(t==="opacity"?1:0))),n&&!~(r+"").trim().indexOf(" ")?wr(e,t,r,n)+n:r},Xw=function(e,t,n,i){if(!n||n==="none"){var r=fa(t,e,1),a=r&&Ri(e,r,1);a&&a!==n?(t=r,n=a):t==="borderColor"&&(n=Ri(e,"borderTopColor"))}var o=new Bn(this._pt,e.style,t,0,1,dg),l=0,c=0,u,h,f,d,v,p,g,m,S,y,T,E;if(o.b=n,o.e=i,n+="",i+="",i==="auto"&&(e.style[t]=i,i=Ri(e,t)||i,e.style[t]=n),u=[n,i],ig(u),n=u[0],i=u[1],f=n.match(Ws)||[],E=i.match(Ws)||[],E.length){for(;h=Ws.exec(i);)g=h[0],S=i.substring(l,h.index),v?v=(v+1)%5:(S.substr(-5)==="rgba("||S.substr(-5)==="hsla(")&&(v=1),g!==(p=f[c++]||"")&&(d=parseFloat(p)||0,T=p.substr((d+"").length),g.charAt(1)==="="&&(g=js(d,g)+T),m=parseFloat(g),y=g.substr((m+"").length),l=Ws.lastIndex-y.length,y||(y=y||Zn.units[t]||T,l===i.length&&(i+=y,o.e+=y)),T!==y&&(d=wr(e,t,p,y)||0),o._pt={_next:o._pt,p:S||c===1?S:",",s:d,c:m-d,m:v&&v<4||t==="zIndex"?Math.round:0});o.c=l<i.length?i.substring(l,i.length):""}else o.r=t==="display"&&i==="none"?_g:gg;return Dm.test(i)&&(o.e=0),this._pt=o,o},xp={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},qw=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=xp[n]||n,t[1]=xp[i]||i,t.join(" ")},$w=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,r=t.u,a=n._gsap,o,l,c;if(r==="all"||r===!0)i.cssText="",l=1;else for(r=r.split(","),c=r.length;--c>-1;)o=r[c],nr[o]&&(l=1,o=o==="transformOrigin"?bi:Ht),to(n,o);l&&(to(n,Ht),a&&(a.svg&&n.removeAttribute("transform"),io(n,1),a.uncache=1,vg(i)))}},ml={clearProps:function(e,t,n,i,r){if(r.data!=="isFromStart"){var a=e._pt=new Bn(e._pt,t,n,0,0,$w);return a.u=i,a.pr=-10,a.tween=r,e._props.push(n),1}}},no=[1,0,0,1,0,0],Sg={},Eg=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},yp=function(e){var t=Ri(e,Ht);return Eg(t)?no:t.substr(7).match(Pm).map(Yt)},nh=function(e,t){var n=e._gsap||Kr(e),i=e.style,r=yp(e),a,o,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,r=[l.a,l.b,l.c,l.d,l.e,l.f],r.join(",")==="1,0,0,1,0,0"?no:r):(r===no&&!e.offsetParent&&e!==Ks&&!n.svg&&(l=i.display,i.display="block",a=e.parentNode,(!a||!e.offsetParent)&&(c=1,o=e.nextElementSibling,Ks.appendChild(e)),r=yp(e),l?i.display=l:to(e,"display"),c&&(o?a.insertBefore(e,o):a?a.appendChild(e):Ks.removeChild(e))),t&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},Mu=function(e,t,n,i,r,a){var o=e._gsap,l=r||nh(e,!0),c=o.xOrigin||0,u=o.yOrigin||0,h=o.xOffset||0,f=o.yOffset||0,d=l[0],v=l[1],p=l[2],g=l[3],m=l[4],S=l[5],y=t.split(" "),T=parseFloat(y[0])||0,E=parseFloat(y[1])||0,w,R,P,b;n?l!==no&&(R=d*g-v*p)&&(P=T*(g/R)+E*(-p/R)+(p*S-g*m)/R,b=T*(-v/R)+E*(d/R)-(d*S-v*m)/R,T=P,E=b):(w=Mg(e),T=w.x+(~y[0].indexOf("%")?T/100*w.width:T),E=w.y+(~(y[1]||y[0]).indexOf("%")?E/100*w.height:E)),i||i!==!1&&o.smooth?(m=T-c,S=E-u,o.xOffset=h+(m*d+S*p)-m,o.yOffset=f+(m*v+S*g)-S):o.xOffset=o.yOffset=0,o.xOrigin=T,o.yOrigin=E,o.smooth=!!i,o.origin=t,o.originIsAbsolute=!!n,e.style[bi]="0px 0px",a&&(xr(a,o,"xOrigin",c,T),xr(a,o,"yOrigin",u,E),xr(a,o,"xOffset",h,o.xOffset),xr(a,o,"yOffset",f,o.yOffset)),e.setAttribute("data-svg-origin",T+" "+E)},io=function(e,t){var n=e._gsap||new og(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,r=n.scaleX<0,a="px",o="deg",l=getComputedStyle(e),c=Ri(e,bi)||"0",u,h,f,d,v,p,g,m,S,y,T,E,w,R,P,b,D,$,ae,G,F,V,re,K,ee,oe,ue,Te,Z,fe,le,ye;return u=h=f=p=g=m=S=y=T=0,d=v=1,n.svg=!!(e.getCTM&&bg(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Ht]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Ht]!=="none"?l[Ht]:"")),i.scale=i.rotate=i.translate="none"),R=nh(e,n.svg),n.svg&&(n.uncache?(ee=e.getBBox(),c=n.xOrigin-ee.x+"px "+(n.yOrigin-ee.y)+"px",K=""):K=!t&&e.getAttribute("data-svg-origin"),Mu(e,K||c,!!K||n.originIsAbsolute,n.smooth!==!1,R)),E=n.xOrigin||0,w=n.yOrigin||0,R!==no&&($=R[0],ae=R[1],G=R[2],F=R[3],u=V=R[4],h=re=R[5],R.length===6?(d=Math.sqrt($*$+ae*ae),v=Math.sqrt(F*F+G*G),p=$||ae?Hs(ae,$)*Gr:0,S=G||F?Hs(G,F)*Gr+p:0,S&&(v*=Math.abs(Math.cos(S*Zs))),n.svg&&(u-=E-(E*$+w*G),h-=w-(E*ae+w*F))):(ye=R[6],fe=R[7],ue=R[8],Te=R[9],Z=R[10],le=R[11],u=R[12],h=R[13],f=R[14],P=Hs(ye,Z),g=P*Gr,P&&(b=Math.cos(-P),D=Math.sin(-P),K=V*b+ue*D,ee=re*b+Te*D,oe=ye*b+Z*D,ue=V*-D+ue*b,Te=re*-D+Te*b,Z=ye*-D+Z*b,le=fe*-D+le*b,V=K,re=ee,ye=oe),P=Hs(-G,Z),m=P*Gr,P&&(b=Math.cos(-P),D=Math.sin(-P),K=$*b-ue*D,ee=ae*b-Te*D,oe=G*b-Z*D,le=F*D+le*b,$=K,ae=ee,G=oe),P=Hs(ae,$),p=P*Gr,P&&(b=Math.cos(P),D=Math.sin(P),K=$*b+ae*D,ee=V*b+re*D,ae=ae*b-$*D,re=re*b-V*D,$=K,V=ee),g&&Math.abs(g)+Math.abs(p)>359.9&&(g=p=0,m=180-m),d=Yt(Math.sqrt($*$+ae*ae+G*G)),v=Yt(Math.sqrt(re*re+ye*ye)),P=Hs(V,re),S=Math.abs(P)>2e-4?P*Gr:0,T=le?1/(le<0?-le:le):0),n.svg&&(K=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!Eg(Ri(e,Ht)),K&&e.setAttribute("transform",K))),Math.abs(S)>90&&Math.abs(S)<270&&(r?(d*=-1,S+=p<=0?180:-180,p+=p<=0?180:-180):(v*=-1,S+=S<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+a,n.y=h-((n.yPercent=h&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-h)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+a,n.z=f+a,n.scaleX=Yt(d),n.scaleY=Yt(v),n.rotation=Yt(p)+o,n.rotationX=Yt(g)+o,n.rotationY=Yt(m)+o,n.skewX=S+o,n.skewY=y+o,n.transformPerspective=T+a,(n.zOrigin=parseFloat(c.split(" ")[2])||0)&&(i[bi]=gl(c)),n.xOffset=n.yOffset=0,n.force3D=Zn.force3D,n.renderTransform=n.svg?jw:yg?Tg:Yw,n.uncache=0,n},gl=function(e){return(e=e.split(" "))[0]+" "+e[1]},Wc=function(e,t,n){var i=bn(t);return Yt(parseFloat(t)+parseFloat(wr(e,"x",n+"px",i)))+i},Yw=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,Tg(e,t)},kr="0deg",Ia="0px",Br=") ",Tg=function(e,t){var n=t||this,i=n.xPercent,r=n.yPercent,a=n.x,o=n.y,l=n.z,c=n.rotation,u=n.rotationY,h=n.rotationX,f=n.skewX,d=n.skewY,v=n.scaleX,p=n.scaleY,g=n.transformPerspective,m=n.force3D,S=n.target,y=n.zOrigin,T="",E=m==="auto"&&e&&e!==1||m===!0;if(y&&(h!==kr||u!==kr)){var w=parseFloat(u)*Zs,R=Math.sin(w),P=Math.cos(w),b;w=parseFloat(h)*Zs,b=Math.cos(w),a=Wc(S,a,R*b*-y),o=Wc(S,o,-Math.sin(w)*-y),l=Wc(S,l,P*b*-y+y)}g!==Ia&&(T+="perspective("+g+Br),(i||r)&&(T+="translate("+i+"%, "+r+"%) "),(E||a!==Ia||o!==Ia||l!==Ia)&&(T+=l!==Ia||E?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+Br),c!==kr&&(T+="rotate("+c+Br),u!==kr&&(T+="rotateY("+u+Br),h!==kr&&(T+="rotateX("+h+Br),(f!==kr||d!==kr)&&(T+="skew("+f+", "+d+Br),(v!==1||p!==1)&&(T+="scale("+v+", "+p+Br),S.style[Ht]=T||"translate(0, 0)"},jw=function(e,t){var n=t||this,i=n.xPercent,r=n.yPercent,a=n.x,o=n.y,l=n.rotation,c=n.skewX,u=n.skewY,h=n.scaleX,f=n.scaleY,d=n.target,v=n.xOrigin,p=n.yOrigin,g=n.xOffset,m=n.yOffset,S=n.forceCSS,y=parseFloat(a),T=parseFloat(o),E,w,R,P,b;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=Zs,c*=Zs,E=Math.cos(l)*h,w=Math.sin(l)*h,R=Math.sin(l-c)*-f,P=Math.cos(l-c)*f,c&&(u*=Zs,b=Math.tan(c-u),b=Math.sqrt(1+b*b),R*=b,P*=b,u&&(b=Math.tan(u),b=Math.sqrt(1+b*b),E*=b,w*=b)),E=Yt(E),w=Yt(w),R=Yt(R),P=Yt(P)):(E=h,P=f,w=R=0),(y&&!~(a+"").indexOf("px")||T&&!~(o+"").indexOf("px"))&&(y=wr(d,"x",a,"px"),T=wr(d,"y",o,"px")),(v||p||g||m)&&(y=Yt(y+v-(v*E+p*R)+g),T=Yt(T+p-(v*w+p*P)+m)),(i||r)&&(b=d.getBBox(),y=Yt(y+i/100*b.width),T=Yt(T+r/100*b.height)),b="matrix("+E+","+w+","+R+","+P+","+y+","+T+")",d.setAttribute("transform",b),S&&(d.style[Ht]=b)},Kw=function(e,t,n,i,r){var a=360,o=ln(r),l=parseFloat(r)*(o&&~r.indexOf("rad")?Gr:1),c=l-i,u=i+c+"deg",h,f;return o&&(h=r.split("_")[1],h==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),h==="cw"&&c<0?c=(c+a*mp)%a-~~(c/a)*a:h==="ccw"&&c>0&&(c=(c-a*mp)%a-~~(c/a)*a)),e._pt=f=new Bn(e._pt,t,n,i,c,Iw),f.e=u,f.u="deg",e._props.push(n),f},Mp=function(e,t){for(var n in t)e[n]=t[n];return e},Zw=function(e,t,n){var i=Mp({},n._gsap),r="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,l,c,u,h,f,d,v;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),a[Ht]=t,o=io(n,1),to(n,Ht),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Ht],a[Ht]=t,o=io(n,1),a[Ht]=c);for(l in nr)c=i[l],u=o[l],c!==u&&r.indexOf(l)<0&&(d=bn(c),v=bn(u),h=d!==v?wr(n,l,c,v):parseFloat(c),f=parseFloat(u),e._pt=new Bn(e._pt,o,l,h,f-h,vu),e._pt.u=v||0,e._props.push(l));Mp(o,i)};kn("padding,margin,Width,Radius",function(s,e){var t="Top",n="Right",i="Bottom",r="Left",a=(e<3?[t,n,i,r]:[t+r,t+n,i+n,i+r]).map(function(o){return e<2?s+o:"border"+o+s});ml[e>1?"border"+s:s]=function(o,l,c,u,h){var f,d;if(arguments.length<4)return f=a.map(function(v){return Yi(o,v,c)}),d=f.join(" "),d.split(f[0]).length===5?f[0]:d;f=(u+"").split(" "),d={},a.forEach(function(v,p){return d[v]=f[p]=f[p]||f[(p-1)/2|0]}),o.init(l,d,h)}});var wg={name:"css",register:yu,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,r){var a=this._props,o=e.style,l=n.vars.startAt,c,u,h,f,d,v,p,g,m,S,y,T,E,w,R,P;Qu||yu(),this.styles=this.styles||xg(e),P=this.styles.props,this.tween=n;for(p in t)if(p!=="autoRound"&&(u=t[p],!(Xn[p]&&lg(p,t,n,i,e,r)))){if(d=typeof u,v=ml[p],d==="function"&&(u=u.call(n,i,e,r),d=typeof u),d==="string"&&~u.indexOf("random(")&&(u=Qa(u)),v)v(this,e,p,u,n)&&(R=1);else if(p.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(p)+"").trim(),u+="",Er.lastIndex=0,Er.test(c)||(g=bn(c),m=bn(u)),m?g!==m&&(c=wr(e,p,c,m)+m):g&&(u+=g),this.add(o,"setProperty",c,u,i,r,0,0,p),a.push(p),P.push(p,0,o[p]);else if(d!=="undefined"){if(l&&p in l?(c=typeof l[p]=="function"?l[p].call(n,i,e,r):l[p],ln(c)&&~c.indexOf("random(")&&(c=Qa(c)),bn(c+"")||(c+=Zn.units[p]||bn(Yi(e,p))||""),(c+"").charAt(1)==="="&&(c=Yi(e,p))):c=Yi(e,p),f=parseFloat(c),S=d==="string"&&u.charAt(1)==="="&&u.substr(0,2),S&&(u=u.substr(2)),h=parseFloat(u),p in Ai&&(p==="autoAlpha"&&(f===1&&Yi(e,"visibility")==="hidden"&&h&&(f=0),P.push("visibility",0,o.visibility),xr(this,o,"visibility",f?"inherit":"hidden",h?"inherit":"hidden",!h)),p!=="scale"&&p!=="transform"&&(p=Ai[p],~p.indexOf(",")&&(p=p.split(",")[0]))),y=p in nr,y){if(this.styles.save(p),T||(E=e._gsap,E.renderTransform&&!t.parseTransform||io(e,t.parseTransform),w=t.smoothOrigin!==!1&&E.smooth,T=this._pt=new Bn(this._pt,o,Ht,0,1,E.renderTransform,E,0,-1),T.dep=1),p==="scale")this._pt=new Bn(this._pt,E,"scaleY",E.scaleY,(S?js(E.scaleY,S+h):h)-E.scaleY||0,vu),this._pt.u=0,a.push("scaleY",p),p+="X";else if(p==="transformOrigin"){P.push(bi,0,o[bi]),u=qw(u),E.svg?Mu(e,u,0,w,0,this):(m=parseFloat(u.split(" ")[2])||0,m!==E.zOrigin&&xr(this,E,"zOrigin",E.zOrigin,m),xr(this,o,p,gl(c),gl(u)));continue}else if(p==="svgOrigin"){Mu(e,u,1,w,0,this);continue}else if(p in Sg){Kw(this,E,p,f,S?js(f,S+u):u);continue}else if(p==="smoothOrigin"){xr(this,E,"smooth",E.smooth,u);continue}else if(p==="force3D"){E[p]=u;continue}else if(p==="transform"){Zw(this,u,e);continue}}else p in o||(p=fa(p)||p);if(y||(h||h===0)&&(f||f===0)&&!Dw.test(u)&&p in o)g=(c+"").substr((f+"").length),h||(h=0),m=bn(u)||(p in Zn.units?Zn.units[p]:g),g!==m&&(f=wr(e,p,c,m)),this._pt=new Bn(this._pt,y?E:o,p,f,(S?js(f,S+h):h)-f,!y&&(m==="px"||p==="zIndex")&&t.autoRound!==!1?Nw:vu),this._pt.u=m||0,g!==m&&m!=="%"&&(this._pt.b=c,this._pt.r=Uw);else if(p in o)Xw.call(this,e,p,c,S?S+u:u);else if(p in e)this.add(e,p,c||e[p],S?S+u:u,i,r);else if(p!=="parseTransform"){Wu(p,u);continue}y||(p in o?P.push(p,0,o[p]):P.push(p,1,c||e[p])),a.push(p)}}R&&pg(this)},render:function(e,t){if(t.tween._time||!eh())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:Yi,aliases:Ai,getSetter:function(e,t,n){var i=Ai[t];return i&&i.indexOf(",")<0&&(t=i),t in nr&&t!==bi&&(e._gsap.x||Yi(e,"x"))?n&&pp===n?t==="scale"?Bw:kw:(pp=n||{})&&(t==="scale"?zw:Hw):e.style&&!Hu(e.style[t])?Ow:~t.indexOf("-")?Fw:Zu(e,t)},core:{_removeProperty:to,_getMatrix:nh}};zn.utils.checkPrefix=fa;zn.core.getStyleSaver=xg;(function(s,e,t,n){var i=kn(s+","+e+","+t,function(r){nr[r]=1});kn(e,function(r){Zn.units[r]="deg",Sg[r]=1}),Ai[i[13]]=s+","+e,kn(n,function(r){var a=r.split(":");Ai[a[1]]=i[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");kn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(s){Zn.units[s]="px"});zn.registerPlugin(wg);var Ag=zn.registerPlugin(wg)||zn;Ag.core.Tween;const Ot=class{constructor(){H(this,"stats",{frames:0,delta:1/60,fps:60,load:0});H(this,"looper",0);H(this,"callbacks",[]);H(this,"EventBus",Fa.getInstance());H(this,"isRunning",!1);H(this,"onResize",e=>{this.EventBus.register("resize",t=>{e(t)})});H(this,"update",()=>{this.stats.frames+=1,this.EventBus.dispatch("update",this.stats)});H(this,"ts",performance.now());H(this,"te",performance.now());H(this,"tf",performance.now());H(this,"nf",0);H(this,"loop",()=>{if(this.nf+=1,this.looper=requestAnimationFrame(this.loop),this.te=performance.now(),this.stats.delta=(this.te-this.ts)/1e3,this.ts=this.te,!document.hidden){this.te-this.tf>=100&&(this.stats.fps=1e3*this.nf/(this.te-this.tf),this.nf=0,this.tf=this.te,this.EventBus.dispatch("engine-stats",this.stats));const e=window.performance.now();this.update(),this.callbacks.map(t=>t(this.stats)),this.stats.load=window.performance.now()-e,this.stats.heap=P1.getHeapInfo()}});H(this,"addCallback",e=>{this.callbacks.indexOf(e)===-1&&this.callbacks.push(e)});H(this,"removeCallback",e=>{this.callbacks=this.callbacks.filter(t=>t!==e)});H(this,"onFrame",e=>{this.addCallback(e)});H(this,"start",()=>{console.log("%c start() is called.","background: #882"),cancelAnimationFrame(this.looper),this.loop()});H(this,"stop",()=>{cancelAnimationFrame(this.looper)});H(this,"getHeapLimit",()=>this.stats.heap?this.stats.heap.limitSize:NaN);H(this,"getHeapSize",()=>this.stats.heap?this.stats.heap.totalSize:NaN);H(this,"getHeapUsed",()=>this.stats.heap?this.stats.heap.usedSize:NaN);H(this,"getHeapAllocated",()=>this.stats.heap?this.stats.heap.allocated:NaN);H(this,"getHeapConsumed",()=>this.stats.heap?this.stats.heap.consumed:NaN);H(this,"updateDOMRect",()=>Ot.updateDOMRect());H(this,"getOverlayContainers",()=>Ot.getOverlayContainers());H(this,"getOverlayCanvases",()=>Ot.getOverlayCanvases());H(this,"getResources",()=>Ln.resources);H(this,"downloadResources",async e=>await Ln.downloadResources(e));H(this,"createGraphics",e=>new U1(Ot.getInstance(),e));H(this,"createTween",e=>{const t=e,n={value:t.firstValue};return Ag.to(n,{ease:t.ease?t.ease:Cw.easeInOut,value:t.lastValue,duration:t.duration?t.duration:1,repeat:t.repeat===void 0||t.repeat==0?0:t.repeat,yoyo:t.yoyo===!0?t.yoyo:!1,onUpdate:()=>t.onUpdate(n.value),onComplete:()=>{var i;return(i=t.onComplete)==null?void 0:i.call(t)}})});window.addEventListener("resize",()=>{this.EventBus.dispatch("resize",{width:window.innerWidth,height:window.innerHeight})})}};let Ft=Ot;H(Ft,"instance"),H(Ft,"getInstance",()=>(Ot.instance===void 0&&(Ot.instance=new Ot,console.log("%c New instance is created.","background: #882")),Ot.instance)),H(Ft,"generateUUID",(e,t)=>{const n="0123456789abcdefghijklmnopqrstuvwxyz";let i="";for(let r=0;r<7;r++){const a=Math.floor(Math.random()*n.length);if(a<0||a>n.length)throw new Error("The index %{idx} is out of range!!");i+=n[a]}return i=e?`${e}-${i}`:i,i=t?`${i}-${t}`:i,i}),H(Ft,"getElementById",e=>document.getElementById(e)),H(Ft,"getCanvasById",e=>document.getElementById(e)),H(Ft,"createCanvas",e=>{const t=document.createElement("canvas");return t.id=Ot.generateUUID(e||"canvas"),t}),H(Ft,"createOverlayContainer",(e,t)=>{const n=document.createElement("div");return n.id=Ot.generateUUID(e||"overlay-div-container"),n.style.position="absolute",n.style.top="0",n.style.left="0",n.style.bottom="0",n.style.right="0",console.log(`%cOverlay Container "${n.id}" is created`,"color:#a5f"),n.style.backgroundColor=t||"rgba(0, 0, 0, 0.0)",n}),H(Ft,"createBackContainer",(e,t)=>{const n=document.createElement("div");return n.id=Ot.generateUUID(e||"overlay-div-container"),n.style.position="absolute",n.style.top="0",n.style.left="0",n.style.bottom="0",n.style.right="0",console.log(`%cBack Container "${n.id}" is created`,"color:#a5f"),n.style.backgroundColor=t||"rgba(0, 0, 0, 0.0)",n}),H(Ft,"init",(e,t,n)=>new Promise(i=>{const r=ro,a=bu;r(async()=>{var c,u;const o=performance.now();console.log("%cEngine downloading resources...","color: #6fa"),(c=e==null?void 0:e.onMount)==null||c.call(e,Ot.getInstance()),Ot.updateDOMRect();const l=await Ln.downloadResources("Engine.init",t,n);Ot.updateDOMRect(),console.log(`%cEngine takes ${((performance.now()-o)/1e3).toFixed(3)} seconds to consume resources.`,"color: #6fa"),i(Ot.getInstance()),console.log("%cEngine running...","color: #6fa"),Ot.getInstance().start(),(u=e==null?void 0:e.onLoaded)==null||u.call(e,Ot.getInstance(),l)}),a(async()=>{var o;Ot.instance&&((o=e==null?void 0:e.onDestroy)==null||o.call(e,Ot.getInstance()),Ot.instance.stop())})})),H(Ft,"updateDOMRect",()=>{const e=[];return new Promise((t,n)=>{window.requestAnimationFrame(()=>{document.querySelectorAll("canvas").forEach(i=>{const r=i.getBoundingClientRect();e.push({id:i.id,rect:r})}),document.querySelectorAll("div").forEach(i=>{const r=i.getBoundingClientRect();e.push({id:i.id,rect:r})}),t(e)})})}),H(Ft,"getOverlayContainers",async()=>{const e=[];return await Ot.updateDOMRect(),document.querySelectorAll("div").forEach(t=>{t.getBoundingClientRect(),t.id.includes("overlay-container")&&e.push(t)}),e}),H(Ft,"getOverlayCanvases",async()=>{const e=[];return await Ot.updateDOMRect(),document.querySelectorAll("canvas").forEach(t=>{t.getBoundingClientRect(),t.id.includes("overlay-canvas")&&e.push(t)}),e});const Jw={message:"Missing Toast Message",autohide:!0,timeout:5e3};function Qw(){const s=Math.random();return Number(s).toString(32)}function eA(s){if(s.autohide===!0)return setTimeout(()=>{nl.close(s.id)},s.timeout)}function tA(){const{subscribe:s,set:e,update:t}=Su([]);return{subscribe:s,trigger:n=>t(i=>{const r=Qw();n&&n.callback&&n.callback({id:r,status:"queued"});const a={...Jw,...n,id:r};return a.timeoutId=eA(a),i.push(a),i}),close:n=>t(i=>{if(i.length>0){const r=i.findIndex(o=>o.id===n),a=i[r];a&&(a.callback&&a.callback({id:n,status:"closed"}),a.timeoutId&&clearTimeout(a.timeoutId),i.splice(r,1))}return i}),clear:()=>e([])}}const nl=tA(),Xc={};function bp(s){return s==="local"?localStorage:sessionStorage}function ih(s,e,t){const n=(t==null?void 0:t.serializer)??JSON,i=(t==null?void 0:t.storage)??"local";function r(a,o){bp(i).setItem(a,n.stringify(o))}if(!Xc[s]){const a=Su(e,c=>{const u=bp(i).getItem(s);u&&c(n.parse(u));{const h=f=>{f.key===s&&c(f.newValue?n.parse(f.newValue):null)};return window.addEventListener("storage",h),()=>window.removeEventListener("storage",h)}}),{subscribe:o,set:l}=a;Xc[s]={set(c){r(s,c),l(c)},update(c){const u=c(Gv(a));r(s,u),l(u)},subscribe:o}}return Xc[s]}ih("modeOsPrefers",!1);ih("modeUserPrefers",void 0);ih("modeCurrent",!1);function nA(s){return s<.5?4*s*s*s:.5*Math.pow(2*s-2,3)+1}function Rg(s){const e=s-1;return e*e*e+1}function iA(s,e){var t={};for(var n in s)Object.prototype.hasOwnProperty.call(s,n)&&e.indexOf(n)<0&&(t[n]=s[n]);if(s!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,n=Object.getOwnPropertySymbols(s);i<n.length;i++)e.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(s,n[i])&&(t[n[i]]=s[n[i]]);return t}function rA(s){var{fallback:e}=s,t=iA(s,["fallback"]);const n=new Map,i=new Map;function r(o,l,c){const{delay:u=0,duration:h=R=>Math.sqrt(R)*30,easing:f=Rg}=il(il({},t),c),d=o.getBoundingClientRect(),v=l.getBoundingClientRect(),p=d.left-v.left,g=d.top-v.top,m=d.width/v.width,S=d.height/v.height,y=Math.sqrt(p*p+g*g),T=getComputedStyle(l),E=T.transform==="none"?"":T.transform,w=+T.opacity;return{delay:u,duration:Rp(h)?h(y):h,easing:f,css:(R,P)=>`
				opacity: ${R*w};
				transform-origin: top left;
				transform: ${E} translate(${P*p}px,${P*g}px) scale(${R+(1-R)*m}, ${R+(1-R)*S});
			`}}function a(o,l,c){return(u,h)=>(o.set(h.key,u),()=>{if(l.has(h.key)){const f=l.get(h.key);return l.delete(h.key),r(f,u,h)}return o.delete(h.key),e&&e(u,h,c)})}return[a(i,n,!1),a(n,i,!0)]}function sA(s,{from:e,to:t},n={}){const i=getComputedStyle(s),r=i.transform==="none"?"":i.transform,[a,o]=i.transformOrigin.split(" ").map(parseFloat),l=e.left+e.width*a/t.width-(t.left+a),c=e.top+e.height*o/t.height-(t.top+o),{delay:u=0,duration:h=d=>Math.sqrt(d)*120,easing:f=Rg}=n;return{delay:u,duration:Rp(h)?h(Math.sqrt(l*l+c*c)):h,easing:f,css:(d,v)=>{const p=v*l,g=v*c,m=d+v*e.width/t.width,S=d+v*e.height/t.height;return`transform: ${r} translate(${p}px, ${g}px) scale(${m}, ${S});`}}}function Sp(s,e,t){const n=s.slice();return n[28]=e[t],n[30]=t,n}function Ep(s){let e,t,n=[],i=new Map,r,a,o,l=s[6];const c=u=>u[28];for(let u=0;u<l.length;u+=1){let h=Sp(s,l,u),f=c(h);i.set(f,n[u]=wp(f,h))}return{c(){e=mn("div"),t=mn("div");for(let u=0;u<n.length;u+=1)n[u].c();this.h()},l(u){e=gn(u,"DIV",{class:!0,"data-testid":!0});var h=_n(e);t=gn(h,"DIV",{class:!0});var f=_n(t);for(let d=0;d<n.length;d+=1)n[d].l(f);f.forEach(St),h.forEach(St),this.h()},h(){Dt(t,"class",r="snackbar "+s[8]),Dt(e,"class",a="snackbar-wrapper "+s[9]),Dt(e,"data-testid","snackbar-wrapper")},m(u,h){xi(u,e,h),bt(e,t);for(let f=0;f<n.length;f+=1)n[f]&&n[f].m(t,null);o=!0},p(u,h){if(h&1246){l=u[6],Cp();for(let f=0;f<n.length;f+=1)n[f].r();n=Wv(n,h,c,1,u,l,i,t,Zv,wp,null,Sp);for(let f=0;f<n.length;f+=1)n[f].a();Lp()}(!o||h&256&&r!==(r="snackbar "+u[8]))&&Dt(t,"class",r),(!o||h&512&&a!==(a="snackbar-wrapper "+u[9]))&&Dt(e,"class",a)},i(u){if(!o){for(let h=0;h<l.length;h+=1)Qt(n[h]);o=!0}},o(u){for(let h=0;h<n.length;h+=1)on(n[h]);o=!1},d(u){u&&St(e);for(let h=0;h<n.length;h+=1)n[h].d()}}}function Tp(s){let e,t=s[28].action.label+"",n,i;function r(){return s[24](s[30])}return{c(){e=mn("button"),this.h()},l(a){e=gn(a,"BUTTON",{class:!0});var o=_n(e);o.forEach(St),this.h()},h(){Dt(e,"class",s[2])},m(a,o){xi(a,e,o),e.innerHTML=t,n||(i=Pp(e,"click",r),n=!0)},p(a,o){s=a,o&64&&t!==(t=s[28].action.label+"")&&(e.innerHTML=t),o&4&&Dt(e,"class",s[2])},d(a){a&&St(e),n=!1,i()}}}function wp(s,e){let t,n,i,r=e[28].message+"",a,o,l,c,u,h,f,d,v,p,g=rl,m,S,y,T=e[28].action&&Tp(e);function E(){return e[25](e[28])}return{key:s,first:null,c(){t=mn("div"),n=mn("div"),i=mn("div"),a=Sn(),o=mn("div"),T&&T.c(),l=Sn(),c=mn("button"),u=Ua(e[4]),f=Sn(),this.h()},l(w){t=gn(w,"DIV",{});var R=_n(t);n=gn(R,"DIV",{class:!0,role:!0,"aria-live":!0,"data-testid":!0});var P=_n(n);i=gn(P,"DIV",{class:!0});var b=_n(i);b.forEach(St),a=En(P),o=gn(P,"DIV",{class:!0});var D=_n(o);T&&T.l(D),l=En(D),c=gn(D,"BUTTON",{class:!0});var $=_n(c);u=Na($,e[4]),$.forEach(St),D.forEach(St),P.forEach(St),f=En(R),R.forEach(St),this.h()},h(){Dt(i,"class","text-base"),Dt(c,"class",e[3]),Dt(o,"class","toast-actions "+uA),Dt(n,"class",h="toast "+e[7]+" "+(e[28].background??e[1])+" "+(e[28].classes??"")),Dt(n,"role","alert"),Dt(n,"aria-live","polite"),Dt(n,"data-testid","toast"),this.first=t},m(w,R){xi(w,t,R),bt(t,n),bt(n,i),i.innerHTML=r,bt(n,a),bt(n,o),T&&T.m(o,null),bt(o,l),bt(o,c),bt(c,u),bt(t,f),m=!0,S||(y=Pp(c,"click",E),S=!0)},p(w,R){e=w,(!m||R&64)&&r!==(r=e[28].message+"")&&(i.innerHTML=r),e[28].action?T?T.p(e,R):(T=Tp(e),T.c(),T.m(o,l)):T&&(T.d(1),T=null),(!m||R&16)&&Ko(u,e[4]),(!m||R&8)&&Dt(c,"class",e[3]),(!m||R&194&&h!==(h="toast "+e[7]+" "+(e[28].background??e[1])+" "+(e[28].classes??"")))&&Dt(n,"class",h)},r(){p=t.getBoundingClientRect()},f(){Xv(t),g(),qv(t,p)},a(){g(),g=$v(t,p,sA,{duration:e[0]})},i(w){m||(Yv(()=>{m&&(v&&v.end(1),d=jv(t,e[12],{key:e[28].id}),d.start())}),m=!0)},o(w){d&&d.invalidate(),v=Kv(t,e[11],{key:e[28].id}),m=!1},d(w){w&&St(t),T&&T.d(),w&&v&&v.end(),S=!1,y()}}}function aA(s){let e,t,n=s[5].length&&Ep(s);return{c(){n&&n.c(),e=cf()},l(i){n&&n.l(i),e=cf()},m(i,r){n&&n.m(i,r),xi(i,e,r),t=!0},p(i,[r]){i[5].length?n?(n.p(i,r),r&32&&Qt(n,1)):(n=Ep(i),n.c(),Qt(n,1),n.m(e.parentNode,e)):n&&(Cp(),on(n,1,1,()=>{n=null}),Lp())},i(i){t||(Qt(n),t=!0)},o(i){on(n),t=!1},d(i){n&&n.d(i),i&&St(e)}}}const oA="flex fixed top-0 left-0 right-0 bottom-0 pointer-events-none",lA="flex flex-col space-y-2",cA="flex justify-between items-center pointer-events-auto",uA="flex items-center space-x-2";function hA(s,e,t){let n,i,r,a,o;Vv(s,nl,F=>t(5,o=F));let{position:l="b"}=e,{max:c=3}=e,{duration:u=250}=e,{background:h="variant-filled-secondary"}=e,{width:f="max-w-[640px]"}=e,{color:d=""}=e,{padding:v="p-4"}=e,{spacing:p="space-x-4"}=e,{rounded:g="rounded-container-token"}=e,{shadow:m="shadow-lg"}=e,{zIndex:S="z-[888]"}=e,{buttonAction:y="btn variant-filled"}=e,{buttonDismiss:T="btn-icon btn-icon-sm variant-filled"}=e,{buttonDismissLabel:E="✕"}=e,w,R,P={x:0,y:0};switch(l){case"t":w="justify-center items-start",R="items-center",P={x:0,y:-100};break;case"b":w="justify-center items-end",R="items-center",P={x:0,y:100};break;case"l":w="justify-start items-center",R="items-start",P={x:-100,y:0};break;case"r":w="justify-end items-center",R="items-end",P={x:100,y:0};break;case"tl":w="justify-start items-start",R="items-start",P={x:-100,y:0};break;case"tr":w="justify-end items-start",R="items-end",P={x:100,y:0};break;case"bl":w="justify-start items-end",R="items-start",P={x:-100,y:0};break;case"br":w="justify-end items-end",R="items-end",P={x:100,y:0};break}function b(F){var V,re;(re=(V=o[F])==null?void 0:V.action)==null||re.response(),nl.close(o[F].id)}const[D,$]=rA({duration:F=>Math.sqrt(F*u),fallback(F){const V=getComputedStyle(F),re=V.transform==="none"?"":V.transform;return{duration:u,easing:nA,css:(K,ee)=>`
					transform: ${re} scale(${K}) translate(${ee*P.x}%, ${ee*P.y}%);
					opacity: ${K}
				`}}}),ae=F=>b(F),G=F=>nl.close(F.id);return s.$$set=F=>{t(27,e=il(il({},e),uf(F))),"position"in F&&t(13,l=F.position),"max"in F&&t(14,c=F.max),"duration"in F&&t(0,u=F.duration),"background"in F&&t(1,h=F.background),"width"in F&&t(15,f=F.width),"color"in F&&t(16,d=F.color),"padding"in F&&t(17,v=F.padding),"spacing"in F&&t(18,p=F.spacing),"rounded"in F&&t(19,g=F.rounded),"shadow"in F&&t(20,m=F.shadow),"zIndex"in F&&t(21,S=F.zIndex),"buttonAction"in F&&t(2,y=F.buttonAction),"buttonDismiss"in F&&t(3,T=F.buttonDismiss),"buttonDismissLabel"in F&&t(4,E=F.buttonDismissLabel)},s.$$.update=()=>{t(9,n=`${oA} ${w} ${S} ${e.class||""}`),s.$$.dirty&8519680&&t(8,i=`${lA} ${R} ${v}`),s.$$.dirty&2064384&&t(7,r=`${cA} ${f} ${d} ${v} ${p} ${g} ${m}`),s.$$.dirty&16416&&t(6,a=Array.from(o).slice(0,c))},e=uf(e),[u,h,y,T,E,o,a,r,i,n,b,D,$,l,c,f,d,v,p,g,m,S,w,R,ae,G]}class fA extends rs{constructor(e){super(),ss(this,e,hA,aA,as,{position:13,max:14,duration:0,background:1,width:15,color:16,padding:17,spacing:18,rounded:19,shadow:20,zIndex:21,buttonAction:2,buttonDismiss:3,buttonDismissLabel:4})}}const Tl=Su();function dA(s){let e,t,n,i,r,a,o,l,c=(typeof s[1]=="number"?s[1].toFixed(2):s[1])+"",u,h,f,d,v,p;return{c(){e=mn("div"),t=mn("span"),n=Ua(s[0]),i=Sn(),r=mn("span"),a=Ua(":"),o=Sn(),l=mn("span"),u=Ua(c),h=Sn(),f=mn("span"),d=Ua(s[2]),this.h()},l(g){e=gn(g,"DIV",{class:!0});var m=_n(e);t=gn(m,"SPAN",{class:!0});var S=_n(t);n=Na(S,s[0]),S.forEach(St),i=En(m),r=gn(m,"SPAN",{class:!0});var y=_n(r);a=Na(y,":"),y.forEach(St),o=En(m),l=gn(m,"SPAN",{class:!0});var T=_n(l);u=Na(T,c),T.forEach(St),h=En(m),f=gn(m,"SPAN",{class:!0});var E=_n(f);d=Na(E,s[2]),E.forEach(St),m.forEach(St),this.h()},h(){Dt(t,"class","kv svelte-1m4r25a"),Dt(r,"class","kv symbol pr-1 svelte-1m4r25a"),Dt(l,"class","kv svelte-1m4r25a"),Dt(f,"class","kv symbol px-1 svelte-1m4r25a"),Dt(e,"class","kv-container svelte-1m4r25a")},m(g,m){xi(g,e,m),bt(e,t),bt(t,n),bt(e,i),bt(e,r),bt(r,a),bt(e,o),bt(e,l),bt(l,u),bt(e,h),bt(e,f),bt(f,d),v||(p=[hf(s[3].call(null,t,"key")),hf(s[3].call(null,l,"val"))],v=!0)},p(g,[m]){m&1&&Ko(n,g[0]),m&2&&c!==(c=(typeof g[1]=="number"?g[1].toFixed(2):g[1])+"")&&Ko(u,c),m&4&&Ko(d,g[2])},i:rl,o:rl,d(g){g&&St(e),v=!1,Jv(p)}}}function pA(s,e,t){let{key:n="key"}=e,{val:i="value"}=e,{suffix:r=""}=e,{keyColor:a="#8f8"}=e,{valColor:o="#f88"}=e;const l=(c,u)=>{c.style.color=u==="key"?a:o};return s.$$set=c=>{"key"in c&&t(0,n=c.key),"val"in c&&t(1,i=c.val),"suffix"in c&&t(2,r=c.suffix),"keyColor"in c&&t(4,a=c.keyColor),"valColor"in c&&t(5,o=c.valColor)},[n,i,r,l,a,o]}class yr extends rs{constructor(e){super(),ss(this,e,pA,dA,as,{key:0,val:1,suffix:2,keyColor:4,valColor:5})}}function mA(s){var u,h,f,d;let e,t,n,i,r,a,o,l,c;return t=new yr({props:{key:"fps",val:(u=s[0])==null?void 0:u.fps}}),i=new yr({props:{key:"delta",val:((h=s[0])==null?void 0:h.delta)*1e3,suffix:"ms"}}),a=new yr({props:{key:"load",val:(f=s[0])==null?void 0:f.load,suffix:"%"}}),l=new yr({props:{key:"frames",val:(d=s[0])==null?void 0:d.frames.toFixed(0)}}),{c(){e=mn("div"),$n(t.$$.fragment),n=Sn(),$n(i.$$.fragment),r=Sn(),$n(a.$$.fragment),o=Sn(),$n(l.$$.fragment),this.h()},l(v){e=gn(v,"DIV",{class:!0});var p=_n(e);Yn(t.$$.fragment,p),n=En(p),Yn(i.$$.fragment,p),r=En(p),Yn(a.$$.fragment,p),o=En(p),Yn(l.$$.fragment,p),p.forEach(St),this.h()},h(){Dt(e,"class","stats-wrapper svelte-6r4c01")},m(v,p){xi(v,e,p),jn(t,e,null),bt(e,n),jn(i,e,null),bt(e,r),jn(a,e,null),bt(e,o),jn(l,e,null),c=!0},p(v,[p]){var T,E,w,R;const g={};p&1&&(g.val=(T=v[0])==null?void 0:T.fps),t.$set(g);const m={};p&1&&(m.val=((E=v[0])==null?void 0:E.delta)*1e3),i.$set(m);const S={};p&1&&(S.val=(w=v[0])==null?void 0:w.load),a.$set(S);const y={};p&1&&(y.val=(R=v[0])==null?void 0:R.frames.toFixed(0)),l.$set(y)},i(v){c||(Qt(t.$$.fragment,v),Qt(i.$$.fragment,v),Qt(a.$$.fragment,v),Qt(l.$$.fragment,v),c=!0)},o(v){on(t.$$.fragment,v),on(i.$$.fragment,v),on(a.$$.fragment,v),on(l.$$.fragment,v),c=!1},d(v){v&&St(e),Kn(t),Kn(i),Kn(a),Kn(l)}}}function gA(s,e,t){let n;const i=a=>{a.onFrame(o=>t(0,n=o))};let r;return ro(async()=>{r=Tl.subscribe(a=>{a&&(i(a),r==null||r())})}),bu(()=>r==null?void 0:r()),[n]}class _A extends rs{constructor(e){super(),ss(this,e,gA,mA,as,{})}}function vA(s){var u,h,f,d;let e,t,n,i,r,a,o,l,c;return t=new yr({props:{key:"used",val:(u=s[0])==null?void 0:u.used,suffix:"%"}}),i=new yr({props:{key:"alloc",val:(h=s[0])==null?void 0:h.alloc,suffix:"%"}}),a=new yr({props:{key:"size",val:((f=s[0])==null?void 0:f.size)/1e6,suffix:"MB"}}),l=new yr({props:{key:"limit",val:((d=s[0])==null?void 0:d.limit)/1e9,suffix:"GB"}}),{c(){e=mn("div"),$n(t.$$.fragment),n=Sn(),$n(i.$$.fragment),r=Sn(),$n(a.$$.fragment),o=Sn(),$n(l.$$.fragment),this.h()},l(v){e=gn(v,"DIV",{class:!0});var p=_n(e);Yn(t.$$.fragment,p),n=En(p),Yn(i.$$.fragment,p),r=En(p),Yn(a.$$.fragment,p),o=En(p),Yn(l.$$.fragment,p),p.forEach(St),this.h()},h(){Dt(e,"class","stats-wrapper svelte-6r4c01")},m(v,p){xi(v,e,p),jn(t,e,null),bt(e,n),jn(i,e,null),bt(e,r),jn(a,e,null),bt(e,o),jn(l,e,null),c=!0},p(v,[p]){var T,E,w,R;const g={};p&1&&(g.val=(T=v[0])==null?void 0:T.used),t.$set(g);const m={};p&1&&(m.val=(E=v[0])==null?void 0:E.alloc),i.$set(m);const S={};p&1&&(S.val=((w=v[0])==null?void 0:w.size)/1e6),a.$set(S);const y={};p&1&&(y.val=((R=v[0])==null?void 0:R.limit)/1e9),l.$set(y)},i(v){c||(Qt(t.$$.fragment,v),Qt(i.$$.fragment,v),Qt(a.$$.fragment,v),Qt(l.$$.fragment,v),c=!0)},o(v){on(t.$$.fragment,v),on(i.$$.fragment,v),on(a.$$.fragment,v),on(l.$$.fragment,v),c=!1},d(v){v&&St(e),Kn(t),Kn(i),Kn(a),Kn(l)}}}function xA(s,e,t){let n;const i=a=>{a.onFrame(o=>{var l,c,u,h;t(0,n={limit:(l=o.heap)==null?void 0:l.limitSize,size:(c=o==null?void 0:o.heap)==null?void 0:c.totalSize,alloc:(u=o.heap)==null?void 0:u.allocated,used:(h=o.heap)==null?void 0:h.consumed})})};let r;return ro(async()=>{r=Tl.subscribe(a=>{a&&(i(a),r==null||r())})}),bu(()=>r==null?void 0:r()),[n]}class yA extends rs{constructor(e){super(),ss(this,e,xA,vA,as,{})}}function MA(s){let e,t,n,i,r,a,o;e=new _A({});const l=s[1].default,c=Dp(l,s,s[0],null);return i=new yA({}),a=new fA({}),{c(){$n(e.$$.fragment),t=Sn(),c&&c.c(),n=Sn(),$n(i.$$.fragment),r=Sn(),$n(a.$$.fragment)},l(u){Yn(e.$$.fragment,u),t=En(u),c&&c.l(u),n=En(u),Yn(i.$$.fragment,u),r=En(u),Yn(a.$$.fragment,u)},m(u,h){jn(e,u,h),xi(u,t,h),c&&c.m(u,h),xi(u,n,h),jn(i,u,h),xi(u,r,h),jn(a,u,h),o=!0},p(u,[h]){c&&c.p&&(!o||h&1)&&Ip(c,l,u,u[0],o?Np(l,u[0],h,null):Up(u[0]),null)},i(u){o||(Qt(e.$$.fragment,u),Qt(c,u),Qt(i.$$.fragment,u),Qt(a.$$.fragment,u),o=!0)},o(u){on(e.$$.fragment,u),on(c,u),on(i.$$.fragment,u),on(a.$$.fragment,u),o=!1},d(u){Kn(e,u),u&&St(t),c&&c.d(u),u&&St(n),Kn(i,u),u&&St(r),Kn(a,u)}}}function bA(s,e,t){let{$$slots:n={},$$scope:i}=e,r,a;return Ft.init({onMount:()=>{console.log("%c EngineComponent.svelte loaded","background: #228")},onLoaded:(o,l)=>{r=o,Tl.set(r),r.onFrame(c=>{var u,h,f,d;a=c,(u=a.heap)==null||u.limitSize,(h=a==null?void 0:a.heap)==null||h.totalSize,(f=a.heap)==null||f.allocated,(d=a.heap)==null||d.consumed})},onDestroy:()=>{Ft.getInstance().stop()}},{onProgress(o,l,c,u){}}),s.$$set=o=>{"$$scope"in o&&t(0,i=o.$$scope)},[i,n]}class SA extends rs{constructor(e){super(),ss(this,e,bA,MA,as,{})}}class EA{constructor(e){H(this,"context");H(this,"isGridEnabled",!0);H(this,"clear",()=>{this.canvas.width=0+this.canvas.width});H(this,"ngV",6);H(this,"ngH",6);H(this,"drawGrids",e=>{if(this.isGridEnabled===!1)return;this.ngV=(e==null?void 0:e.ngV)===void 0?this.ngV:e==null?void 0:e.ngV,this.ngH=(e==null?void 0:e.ngH)===void 0?this.ngH:e==null?void 0:e.ngH;const t=this.canvas,n=this.context;n.save();const i=t.width/this.ngV,r=t.height/this.ngH;n.strokeStyle=Da("cyan").alpha(.8).hex(),n.lineWidth=.65,n.setLineDash([5,5]),n.beginPath();for(let o=1;o<=this.ngH;o++){const l=Math.round(o*r);n.moveTo(0,l),n.lineTo(t.width,l)}for(let o=0;o<this.ngV;o++){const l=Math.round(o*i);n.moveTo(l,0),n.lineTo(l,t.height)}n.stroke(),n.strokeStyle=Da("red").alpha(.65).hex(),n.lineWidth=1.8,n.setLineDash([]),n.beginPath(),n.translate(this.cX(),this.cY()),n.rotate(0);const a=7;n.moveTo(-a,0),n.lineTo(a,0),n.moveTo(0,-a),n.lineTo(0,a),n.stroke(),n.restore()});H(this,"gX",()=>Math.round(this.canvas.width/this.ngV));H(this,"gY",()=>Math.round(this.canvas.height/this.ngH));H(this,"cX",()=>Math.round(this.canvas.width/2));H(this,"cY",()=>Math.round(this.canvas.height/2));H(this,"getCanvas",()=>this.canvas);H(this,"getContext",()=>this.context);H(this,"getWidth",()=>this.canvas.width);H(this,"getHeight",()=>this.canvas.height);H(this,"fillBackground",(e,t)=>{this.canvas.width=0+this.canvas.width;const n=this.context;n.fillStyle=Da(e===void 0?"black":e).alpha(t===void 0?1:t).hex(),n.fillRect(0,0,this.canvas.width,this.canvas.height)});H(this,"setSize",(e,t)=>{this.canvas.width=e,this.canvas.height=t});H(this,"getSize",()=>({width:this.canvas.width,height:this.canvas.height}));H(this,"enableGrids",e=>{this.isGridEnabled=e});H(this,"showGrids",()=>{this.isGridEnabled=!0});H(this,"hideGrids",()=>{this.isGridEnabled=!1});H(this,"drawText",(e,t,n)=>{const i=this.context;i.save(),i.translate(t,n),i.beginPath(),i.lineWidth=1,i.font="22px mono",i.textBaseline="top",i.strokeStyle=Da("#000").alpha(.7).hex(),i.fillStyle=Da("#cf7").alpha(.9).hex(),i.strokeText(e,t+2,n+2),i.fillText(e,t,n),i.fill(),i.restore()});H(this,"createLinearGradient",(e,t,n,i)=>{let r;return i==="y"?r=this.context.createLinearGradient(0,this.canvas.height,0,0):i==="x"?r=this.context.createLinearGradient(0,0,this.canvas.width,0):r=this.context.createLinearGradient(0,this.canvas.height,this.canvas.width,0),r.addColorStop(0,e),r.addColorStop(.5,t),r.addColorStop(1,n),r});if(this.canvas=e,this.context=e.getContext("2d"),this.context===null)throw new Error(`Cannot can 2d context of the canvas "${e.id}".`)}}class Ap extends EA{constructor(t){super(t);H(this,"samples");H(this,"buffer",[]);H(this,"max",1);H(this,"min",-1);H(this,"isAutoRange",!0);H(this,"gainFactor",1);H(this,"_counter",0);H(this,"add",(t,n)=>{this.buffer.push(t),this.buffer.length>this.samples&&this.buffer.shift(),this.isAutoRange&&(t>this.max||t<this.min?(this._counter=0,this.autoMinMax()):++this._counter>=this.canvas.width&&(this._counter=0,this.autoMinMax())),n!==!0&&this.redraw()});H(this,"redraw",()=>{this.fillBackground("black",0),this.drawGrids();const t=this.canvas.height/(this.max-this.min),n=this.canvas.height/2,i=this.context;i.beginPath(),i.strokeStyle=this.createLinearGradient("cyan","yellow","red","y"),i.lineWidth=2.5,i.translate(0,0);const r=this.getSize().width/this.samples;for(let a=1;a<this.buffer.length;a++){const l=this.buffer[a]*(-t*this.gainFactor)+n,c=a*r;i.lineTo(c,l)}i.stroke()});H(this,"setMinMax",(t,n)=>{this.min=t,this.max=n});H(this,"autoMinMax",()=>{let t=this.buffer[0],n=t;for(let i=1;i<this.buffer.length;i++){const r=this.buffer[i];t=r<t?r:t,n=r>n?r:n}this.min=t,this.max=n});H(this,"enableAutoRange",t=>{this.isAutoRange=t});H(this,"setGainFactor",t=>{this.gainFactor=t});this.samples=250}}function TA(s){let e,t,n,i;const r=s[3].default,a=Dp(r,s,s[2],null);return{c(){e=mn("div"),t=mn("div"),n=Sn(),a&&a.c(),this.h()},l(o){e=gn(o,"DIV",{class:!0});var l=_n(e);t=gn(l,"DIV",{id:!0}),_n(t).forEach(St),n=En(l),a&&a.l(l),l.forEach(St),this.h()},h(){Dt(t,"id",s[0]),Dt(e,"class","border border-blue-500 p-0 m-0")},m(o,l){xi(o,e,l),bt(e,t),bt(e,n),a&&a.m(e,null),i=!0},p(o,[l]){a&&a.p&&(!i||l&4)&&Ip(a,r,o,o[2],i?Np(r,o[2],l,null):Up(o[2]),null)},i(o){i||(Qt(a,o),i=!0)},o(o){on(a,o),i=!1},d(o){o&&St(e),a&&a.d(o)}}}function wA(s,e,t){let{$$slots:n={},$$scope:i}=e,r=Ft.generateUUID("main-container"),a,{modelId:o=2}=e,l=!1;return ro(async()=>{console.log("%c GraphicsComponent.svelte loaded","background: #228"),console.log(`%c Container ID: ${r}`,"background: #833");const c=()=>{const u=a.createGraphics(r);u.setSize169(),u.nextEnvironment(),u.setBackground(null);const h=a.getResources().glTFs[0],f=u.useScene(h,o);f.position.set(0,-1,0);const d=u.getBackCanvas(),v=new Ap(d);v.setGainFactor(.8),v.hideGrids(),a.createTween({firstValue:-1,lastValue:1,ease:"elastic.inOut(1, 0.5)",yoyo:!0,repeat:-1,duration:3+Math.random()*2,onUpdate:S=>{f.rotation.y=S*Math.PI+Math.PI,v.add(S),v.drawText(`id: ${r}`,5,5)}});const p=u.getOverlayCanvas(),g=new Ap(p);g.setGainFactor(.5),g.hideGrids(),a.createTween({firstValue:-1,lastValue:1,ease:"elastic.inOut(2, 0.2)",yoyo:!0,repeat:-1,duration:3+Math.random()*2,onUpdate:S=>{g.add(S)}}),u.onResize(()=>{u.setSize169()}),u.createRaySensor().sense("Ball",{mouseDown:S=>{u.previousEnvironment()},mouseDrag:S=>{console.dir(S.object.name)}})};Tl.subscribe(u=>{a=u,a&&l===!1&&(c(),l=!0)})}),s.$$set=c=>{"modelId"in c&&t(1,o=c.modelId),"$$scope"in c&&t(2,i=c.$$scope)},[r,o,i,n]}class AA extends rs{constructor(e){super(),ss(this,e,wA,TA,as,{modelId:1})}}function RA(s){let e,t;return e=new AA({props:{modelId:2}}),{c(){$n(e.$$.fragment)},l(n){Yn(e.$$.fragment,n)},m(n,i){jn(e,n,i),t=!0},p:rl,i(n){t||(Qt(e.$$.fragment,n),t=!0)},o(n){on(e.$$.fragment,n),t=!1},d(n){Kn(e,n)}}}function CA(s){let e,t;return e=new SA({props:{$$slots:{default:[RA]},$$scope:{ctx:s}}}),{c(){$n(e.$$.fragment)},l(n){Yn(e.$$.fragment,n)},m(n,i){jn(e,n,i),t=!0},p(n,[i]){const r={};i&1&&(r.$$scope={dirty:i,ctx:n}),e.$set(r)},i(n){t||(Qt(e.$$.fragment,n),t=!0)},o(n){on(e.$$.fragment,n),t=!1},d(n){Kn(e,n)}}}function LA(s){return ro(()=>console.log("%c page.svelte loaded","background: #228")),[]}class UA extends rs{constructor(e){super(),ss(this,e,LA,CA,as,{})}}export{UA as component};
