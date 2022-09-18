(function(){"use strict";var Le={exports:{}};(function(Te){(De=>{var ve=Object.defineProperty,Ue=Object.defineProperties,xe=Object.getOwnPropertyDescriptor,Ce=Object.getOwnPropertyDescriptors,ze=Object.getOwnPropertyNames,ye=Object.getOwnPropertySymbols,he=Object.prototype.hasOwnProperty,Je=Object.prototype.propertyIsEnumerable,Pe=(e,t,r)=>t in e?ve(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,Re=(e,t)=>{for(var r in t||(t={}))he.call(t,r)&&Pe(e,r,t[r]);if(ye)for(var r of ye(t))Je.call(t,r)&&Pe(e,r,t[r]);return e},Ae=(e,t)=>Ue(e,Ce(t)),ut=(e,t)=>{for(var r in t)ve(e,r,{get:t[r],enumerable:!0})},ft=(e,t,r,o)=>{if(t&&typeof t=="object"||typeof t=="function")for(let p of ze(t))!he.call(e,p)&&p!==r&&ve(e,p,{get:()=>t[p],enumerable:!(o=xe(t,p))||o.enumerable});return e},dt=e=>ft(ve({},"__esModule",{value:!0}),e),ke=(e,t,r)=>new Promise((o,p)=>{var y=i=>{try{w(r.next(i))}catch($){p($)}},s=i=>{try{w(r.throw(i))}catch($){p($)}},w=i=>i.done?o(i.value):Promise.resolve(i.value).then(y,s);w((r=r.apply(e,t)).next())}),Ie={};ut(Ie,{analyzeMetafile:()=>Tt,analyzeMetafileSync:()=>Ut,build:()=>St,buildSync:()=>Pt,default:()=>It,formatMessages:()=>$t,formatMessagesSync:()=>Dt,initialize:()=>Ct,serve:()=>jt,transform:()=>Ot,transformSync:()=>Rt,version:()=>Et}),De.exports=dt(Ie);function Qe(e){let t=o=>{if(o===null)r.write8(0);else if(typeof o=="boolean")r.write8(1),r.write8(+o);else if(typeof o=="number")r.write8(2),r.write32(o|0);else if(typeof o=="string")r.write8(3),r.write(ge(o));else if(o instanceof Uint8Array)r.write8(4),r.write(o);else if(o instanceof Array){r.write8(5),r.write32(o.length);for(let p of o)t(p)}else{let p=Object.keys(o);r.write8(6),r.write32(p.length);for(let y of p)r.write(ge(y)),t(o[y])}},r=new Xe;return r.write32(0),r.write32(e.id<<1|+!e.isRequest),t(e.value),Ge(r.buf,r.len-4,0),r.buf.subarray(0,r.len)}function ht(e){let t=()=>{switch(r.read8()){case 0:return null;case 1:return!!r.read8();case 2:return r.read32();case 3:return Ee(r.read());case 4:return r.read();case 5:{let s=r.read32(),w=[];for(let i=0;i<s;i++)w.push(t());return w}case 6:{let s=r.read32(),w={};for(let i=0;i<s;i++)w[Ee(r.read())]=t();return w}default:throw new Error("Invalid packet")}},r=new Xe(e),o=r.read32(),p=(o&1)===0;o>>>=1;let y=t();if(r.ptr!==e.length)throw new Error("Invalid packet");return{id:o,isRequest:p,value:y}}var Xe=class{constructor(e=new Uint8Array(1024)){this.buf=e,this.len=0,this.ptr=0}_write(e){if(this.len+e>this.buf.length){let t=new Uint8Array((this.len+e)*2);t.set(this.buf),this.buf=t}return this.len+=e,this.len-e}write8(e){let t=this._write(1);this.buf[t]=e}write32(e){let t=this._write(4);Ge(this.buf,e,t)}write(e){let t=this._write(4+e.length);Ge(this.buf,e.length,t),this.buf.set(e,t+4)}_read(e){if(this.ptr+e>this.buf.length)throw new Error("Invalid packet");return this.ptr+=e,this.ptr-e}read8(){return this.buf[this._read(1)]}read32(){return qe(this.buf,this._read(4))}read(){let e=this.read32(),t=new Uint8Array(e),r=this._read(t.length);return t.set(this.buf.subarray(r,r+e)),t}},ge,Ee;if(typeof TextEncoder<"u"&&typeof TextDecoder<"u"){let e=new TextEncoder,t=new TextDecoder;ge=r=>e.encode(r),Ee=r=>t.decode(r)}else if(typeof Buffer<"u")ge=e=>{let t=Buffer.from(e);return t instanceof Uint8Array||(t=new Uint8Array(t)),t},Ee=e=>{let{buffer:t,byteOffset:r,byteLength:o}=e;return Buffer.from(t,r,o).toString()};else throw new Error("No UTF-8 codec found");function qe(e,t){return e[t++]|e[t++]<<8|e[t++]<<16|e[t++]<<24}function Ge(e,t,r){e[r++]=t,e[r++]=t>>8,e[r++]=t>>16,e[r++]=t>>24}function Ze(e){if(e+="",e.indexOf(",")>=0)throw new Error(`Invalid target: ${e}`);return e}var Ne=()=>null,Q=e=>typeof e=="boolean"?null:"a boolean",mt=e=>typeof e=="boolean"||typeof e=="object"&&!Array.isArray(e)?null:"a boolean or an object",x=e=>typeof e=="string"?null:"a string",Me=e=>e instanceof RegExp?null:"a RegExp object",Se=e=>typeof e=="number"&&e===(e|0)?null:"an integer",Ye=e=>typeof e=="function"?null:"a function",re=e=>Array.isArray(e)?null:"an array",pe=e=>typeof e=="object"&&e!==null&&!Array.isArray(e)?null:"an object",gt=e=>e instanceof WebAssembly.Module?null:"a WebAssembly.Module",pt=e=>typeof e=="object"&&e!==null?null:"an array or an object",et=e=>typeof e=="object"&&!Array.isArray(e)?null:"an object or null",tt=e=>typeof e=="string"||typeof e=="boolean"?null:"a string or a boolean",yt=e=>typeof e=="string"||typeof e=="object"&&e!==null&&!Array.isArray(e)?null:"a string or an object",wt=e=>typeof e=="string"||Array.isArray(e)?null:"a string or an array",nt=e=>typeof e=="string"||e instanceof Uint8Array?null:"a string or a Uint8Array";function l(e,t,r,o){let p=e[r];if(t[r+""]=!0,p===void 0)return;let y=o(p);if(y!==null)throw new Error(`"${r}" must be ${y}`);return p}function se(e,t,r){for(let o in e)if(!(o in t))throw new Error(`Invalid option ${r}: "${o}"`)}function bt(e){let t=Object.create(null),r=l(e,t,"wasmURL",x),o=l(e,t,"wasmModule",gt),p=l(e,t,"worker",Q);return se(e,t,"in initialize() call"),{wasmURL:r,wasmModule:o,worker:p}}function rt(e){let t;if(e!==void 0){t=Object.create(null);for(let r of Object.keys(e)){let o=e[r];if(typeof o=="string"||o===!1)t[r]=o;else throw new Error(`Expected ${JSON.stringify(r)} in mangle cache to map to either a string or false`)}}return t}function Fe(e,t,r,o,p){let y=l(t,r,"color",Q),s=l(t,r,"logLevel",x),w=l(t,r,"logLimit",Se);y!==void 0?e.push(`--color=${y}`):o&&e.push("--color=true"),e.push(`--log-level=${s||p}`),e.push(`--log-limit=${w||0}`)}function lt(e,t,r){let o=l(t,r,"legalComments",x),p=l(t,r,"sourceRoot",x),y=l(t,r,"sourcesContent",Q),s=l(t,r,"target",wt),w=l(t,r,"format",x),i=l(t,r,"globalName",x),$=l(t,r,"mangleProps",Me),B=l(t,r,"reserveProps",Me),j=l(t,r,"mangleQuoted",Q),m=l(t,r,"minify",Q),L=l(t,r,"minifySyntax",Q),H=l(t,r,"minifyWhitespace",Q),U=l(t,r,"minifyIdentifiers",Q),g=l(t,r,"drop",re),h=l(t,r,"charset",x),v=l(t,r,"treeShaking",Q),T=l(t,r,"ignoreAnnotations",Q),D=l(t,r,"jsx",x),C=l(t,r,"jsxFactory",x),q=l(t,r,"jsxFragment",x),n=l(t,r,"jsxImportSource",x),d=l(t,r,"jsxDev",Q),R=l(t,r,"define",pe),c=l(t,r,"logOverride",pe),u=l(t,r,"supported",pe),f=l(t,r,"pure",re),b=l(t,r,"keepNames",Q),W=l(t,r,"platform",x);if(o&&e.push(`--legal-comments=${o}`),p!==void 0&&e.push(`--source-root=${p}`),y!==void 0&&e.push(`--sources-content=${y}`),s&&(Array.isArray(s)?e.push(`--target=${Array.from(s).map(Ze).join(",")}`):e.push(`--target=${Ze(s)}`)),w&&e.push(`--format=${w}`),i&&e.push(`--global-name=${i}`),W&&e.push(`--platform=${W}`),m&&e.push("--minify"),L&&e.push("--minify-syntax"),H&&e.push("--minify-whitespace"),U&&e.push("--minify-identifiers"),h&&e.push(`--charset=${h}`),v!==void 0&&e.push(`--tree-shaking=${v}`),T&&e.push("--ignore-annotations"),g)for(let O of g)e.push(`--drop:${O}`);if($&&e.push(`--mangle-props=${$.source}`),B&&e.push(`--reserve-props=${B.source}`),j!==void 0&&e.push(`--mangle-quoted=${j}`),D&&e.push(`--jsx=${D}`),C&&e.push(`--jsx-factory=${C}`),q&&e.push(`--jsx-fragment=${q}`),n&&e.push(`--jsx-import-source=${n}`),d&&e.push("--jsx-dev"),R)for(let O in R){if(O.indexOf("=")>=0)throw new Error(`Invalid define: ${O}`);e.push(`--define:${O}=${R[O]}`)}if(c)for(let O in c){if(O.indexOf("=")>=0)throw new Error(`Invalid log override: ${O}`);e.push(`--log-override:${O}=${c[O]}`)}if(u)for(let O in u){if(O.indexOf("=")>=0)throw new Error(`Invalid supported: ${O}`);e.push(`--supported:${O}=${u[O]}`)}if(f)for(let O of f)e.push(`--pure:${O}`);b&&e.push("--keep-names")}function vt(e,t,r,o,p){var y;let s=[],w=[],i=Object.create(null),$=null,B=null,j=null;Fe(s,t,i,r,o),lt(s,t,i);let m=l(t,i,"sourcemap",tt),L=l(t,i,"bundle",Q),H=l(t,i,"watch",mt),U=l(t,i,"splitting",Q),g=l(t,i,"preserveSymlinks",Q),h=l(t,i,"metafile",Q),v=l(t,i,"outfile",x),T=l(t,i,"outdir",x),D=l(t,i,"outbase",x),C=l(t,i,"tsconfig",x),q=l(t,i,"resolveExtensions",re),n=l(t,i,"nodePaths",re),d=l(t,i,"mainFields",re),R=l(t,i,"conditions",re),c=l(t,i,"external",re),u=l(t,i,"loader",pe),f=l(t,i,"outExtension",pe),b=l(t,i,"publicPath",x),W=l(t,i,"entryNames",x),O=l(t,i,"chunkNames",x),F=l(t,i,"assetNames",x),I=l(t,i,"inject",re),z=l(t,i,"banner",pe),V=l(t,i,"footer",pe),P=l(t,i,"entryPoints",pt),K=l(t,i,"absWorkingDir",x),A=l(t,i,"stdin",pe),J=(y=l(t,i,"write",Q))!=null?y:p,Z=l(t,i,"allowOverwrite",Q),de=l(t,i,"incremental",Q)===!0,N=l(t,i,"mangleCache",pe);if(i.plugins=!0,se(t,i,`in ${e}() call`),m&&s.push(`--sourcemap${m===!0?"":`=${m}`}`),L&&s.push("--bundle"),Z&&s.push("--allow-overwrite"),H)if(s.push("--watch"),typeof H=="boolean")j={};else{let a=Object.create(null),_=l(H,a,"onRebuild",Ye);se(H,a,`on "watch" in ${e}() call`),j={onRebuild:_}}if(U&&s.push("--splitting"),g&&s.push("--preserve-symlinks"),h&&s.push("--metafile"),v&&s.push(`--outfile=${v}`),T&&s.push(`--outdir=${T}`),D&&s.push(`--outbase=${D}`),C&&s.push(`--tsconfig=${C}`),q){let a=[];for(let _ of q){if(_+="",_.indexOf(",")>=0)throw new Error(`Invalid resolve extension: ${_}`);a.push(_)}s.push(`--resolve-extensions=${a.join(",")}`)}if(b&&s.push(`--public-path=${b}`),W&&s.push(`--entry-names=${W}`),O&&s.push(`--chunk-names=${O}`),F&&s.push(`--asset-names=${F}`),d){let a=[];for(let _ of d){if(_+="",_.indexOf(",")>=0)throw new Error(`Invalid main field: ${_}`);a.push(_)}s.push(`--main-fields=${a.join(",")}`)}if(R){let a=[];for(let _ of R){if(_+="",_.indexOf(",")>=0)throw new Error(`Invalid condition: ${_}`);a.push(_)}s.push(`--conditions=${a.join(",")}`)}if(c)for(let a of c)s.push(`--external:${a}`);if(z)for(let a in z){if(a.indexOf("=")>=0)throw new Error(`Invalid banner file type: ${a}`);s.push(`--banner:${a}=${z[a]}`)}if(V)for(let a in V){if(a.indexOf("=")>=0)throw new Error(`Invalid footer file type: ${a}`);s.push(`--footer:${a}=${V[a]}`)}if(I)for(let a of I)s.push(`--inject:${a}`);if(u)for(let a in u){if(a.indexOf("=")>=0)throw new Error(`Invalid loader extension: ${a}`);s.push(`--loader:${a}=${u[a]}`)}if(f)for(let a in f){if(a.indexOf("=")>=0)throw new Error(`Invalid out extension: ${a}`);s.push(`--out-extension:${a}=${f[a]}`)}if(P)if(Array.isArray(P))for(let a of P)w.push(["",a+""]);else for(let[a,_]of Object.entries(P))w.push([a+"",_+""]);if(A){let a=Object.create(null),_=l(A,a,"contents",nt),X=l(A,a,"resolveDir",x),te=l(A,a,"sourcefile",x),E=l(A,a,"loader",x);se(A,a,'in "stdin" object'),te&&s.push(`--sourcefile=${te}`),E&&s.push(`--loader=${E}`),X&&(B=X+""),typeof _=="string"?$=ge(_):_ instanceof Uint8Array&&($=_)}let S=[];if(n)for(let a of n)a+="",S.push(a);return{entries:w,flags:s,write:J,stdinContents:$,stdinResolveDir:B,absWorkingDir:K,incremental:de,nodePaths:S,watch:j,mangleCache:rt(N)}}function xt(e,t,r,o){let p=[],y=Object.create(null);Fe(p,t,y,r,o),lt(p,t,y);let s=l(t,y,"sourcemap",tt),w=l(t,y,"tsconfigRaw",yt),i=l(t,y,"sourcefile",x),$=l(t,y,"loader",x),B=l(t,y,"banner",x),j=l(t,y,"footer",x),m=l(t,y,"mangleCache",pe);return se(t,y,`in ${e}() call`),s&&p.push(`--sourcemap=${s===!0?"external":s}`),w&&p.push(`--tsconfig-raw=${typeof w=="string"?w:JSON.stringify(w)}`),i&&p.push(`--sourcefile=${i}`),$&&p.push(`--loader=${$}`),B&&p.push(`--banner=${B}`),j&&p.push(`--footer=${j}`),{flags:p,mangleCache:rt(m)}}function _t(e){let t=new Map,r=new Map,o=new Map,p=new Map,y=null,s=0,w=0,i=new Uint8Array(16*1024),$=0,B=c=>{let u=$+c.length;if(u>i.length){let b=new Uint8Array(u*2);b.set(i),i=b}i.set(c,$),$+=c.length;let f=0;for(;f+4<=$;){let b=qe(i,f);if(f+4+b>$)break;f+=4,g(i.subarray(f,f+b)),f+=b}f>0&&(i.copyWithin(0,f,$),$-=f)},j=c=>{y={reason:c?": "+(c.message||c):""};const u="The service was stopped"+y.reason;for(let f of t.values())f(u,null);t.clear();for(let f of p.values())f.onWait(u);p.clear();for(let f of o.values())try{f(new Error(u),null)}catch(b){console.error(b)}o.clear()},m=(c,u,f)=>{if(y)return f("The service is no longer running"+y.reason,null);let b=s++;t.set(b,(W,O)=>{try{f(W,O)}finally{c&&c.unref()}}),c&&c.ref(),e.writeToStdin(Qe({id:b,isRequest:!0,value:u}))},L=(c,u)=>{if(y)throw new Error("The service is no longer running"+y.reason);e.writeToStdin(Qe({id:c,isRequest:!1,value:u}))},H=(c,u)=>ke(this,null,function*(){try{switch(u.command){case"ping":{L(c,{});break}case"on-start":{let f=r.get(u.key);f?L(c,yield f(u)):L(c,{});break}case"on-resolve":{let f=r.get(u.key);f?L(c,yield f(u)):L(c,{});break}case"on-load":{let f=r.get(u.key);f?L(c,yield f(u)):L(c,{});break}case"serve-request":{let f=p.get(u.key);f&&f.onRequest&&f.onRequest(u.args),L(c,{});break}case"serve-wait":{let f=p.get(u.key);f&&f.onWait(u.error),L(c,{});break}case"watch-rebuild":{let f=o.get(u.key);try{f&&f(null,u.args)}catch(b){console.error(b)}L(c,{});break}default:throw new Error("Invalid command: "+u.command)}}catch(f){L(c,{errors:[je(f,e,null,void 0,"")]})}}),U=!0,g=c=>{if(U){U=!1;let f=String.fromCharCode(...c);if(f!=="0.15.7")throw new Error(`Cannot start service: Host version "0.15.7" does not match binary version ${JSON.stringify(f)}`);return}let u=ht(c);if(u.isRequest)H(u.id,u.value);else{let f=t.get(u.id);t.delete(u.id),u.value.error?f(u.value.error,{}):f(null,u.value)}},h=(c,u,f,b,W)=>ke(this,null,function*(){let O=[],F=[],I={},z={},V=0,P=0,K=[],A=!1;u=[...u];for(let N of u){let S={};if(typeof N!="object")throw new Error(`Plugin at index ${P} must be an object`);const a=l(N,S,"name",x);if(typeof a!="string"||a==="")throw new Error(`Plugin at index ${P} is missing a name`);try{let _=l(N,S,"setup",Ye);if(typeof _!="function")throw new Error("Plugin is missing a setup function");se(N,S,`on plugin ${JSON.stringify(a)}`);let X={name:a,onResolve:[],onLoad:[]};P++;let E=_({initialOptions:c,resolve:(k,G={})=>{if(!A)throw new Error('Cannot call "resolve" before plugin setup has completed');if(typeof k!="string")throw new Error("The path to resolve must be a string");let M=Object.create(null),ae=l(G,M,"pluginName",x),ee=l(G,M,"importer",x),le=l(G,M,"namespace",x),ue=l(G,M,"resolveDir",x),oe=l(G,M,"kind",x),Y=l(G,M,"pluginData",Ne);return se(G,M,"in resolve() call"),new Promise((ie,ce)=>{const ne={command:"resolve",path:k,key:f,pluginName:a};ae!=null&&(ne.pluginName=ae),ee!=null&&(ne.importer=ee),le!=null&&(ne.namespace=le),ue!=null&&(ne.resolveDir=ue),oe!=null&&(ne.kind=oe),Y!=null&&(ne.pluginData=b.store(Y)),m(W,ne,(we,fe)=>{we!==null?ce(new Error(we)):ie({errors:be(fe.errors,b),warnings:be(fe.warnings,b),path:fe.path,external:fe.external,sideEffects:fe.sideEffects,namespace:fe.namespace,suffix:fe.suffix,pluginData:b.load(fe.pluginData)})})})},onStart(k){let G='This error came from the "onStart" callback registered here:',M=Ve(new Error(G),e,"onStart");O.push({name:a,callback:k,note:M})},onEnd(k){let G='This error came from the "onEnd" callback registered here:',M=Ve(new Error(G),e,"onEnd");F.push({name:a,callback:k,note:M})},onResolve(k,G){let M='This error came from the "onResolve" callback registered here:',ae=Ve(new Error(M),e,"onResolve"),ee={},le=l(k,ee,"filter",Me),ue=l(k,ee,"namespace",x);if(se(k,ee,`in onResolve() call for plugin ${JSON.stringify(a)}`),le==null)throw new Error("onResolve() call is missing a filter");let oe=V++;I[oe]={name:a,callback:G,note:ae},X.onResolve.push({id:oe,filter:le.source,namespace:ue||""})},onLoad(k,G){let M='This error came from the "onLoad" callback registered here:',ae=Ve(new Error(M),e,"onLoad"),ee={},le=l(k,ee,"filter",Me),ue=l(k,ee,"namespace",x);if(se(k,ee,`in onLoad() call for plugin ${JSON.stringify(a)}`),le==null)throw new Error("onLoad() call is missing a filter");let oe=V++;z[oe]={name:a,callback:G,note:ae},X.onLoad.push({id:oe,filter:le.source,namespace:ue||""})},esbuild:e.esbuild});E&&(yield E),K.push(X)}catch(_){return{ok:!1,error:_,pluginName:a}}}const J=N=>ke(this,null,function*(){switch(N.command){case"on-start":{let S={errors:[],warnings:[]};return yield Promise.all(O.map(a=>ke(this,[a],function*({name:_,callback:X,note:te}){try{let E=yield X();if(E!=null){if(typeof E!="object")throw new Error(`Expected onStart() callback in plugin ${JSON.stringify(_)} to return an object`);let k={},G=l(E,k,"errors",re),M=l(E,k,"warnings",re);se(E,k,`from onStart() callback in plugin ${JSON.stringify(_)}`),G!=null&&S.errors.push(..._e(G,"errors",b,_)),M!=null&&S.warnings.push(..._e(M,"warnings",b,_))}}catch(E){S.errors.push(je(E,e,b,te&&te(),_))}}))),S}case"on-resolve":{let S={},a="",_,X;for(let te of N.ids)try{({name:a,callback:_,note:X}=I[te]);let E=yield _({path:N.path,importer:N.importer,namespace:N.namespace,resolveDir:N.resolveDir,kind:N.kind,pluginData:b.load(N.pluginData)});if(E!=null){if(typeof E!="object")throw new Error(`Expected onResolve() callback in plugin ${JSON.stringify(a)} to return an object`);let k={},G=l(E,k,"pluginName",x),M=l(E,k,"path",x),ae=l(E,k,"namespace",x),ee=l(E,k,"suffix",x),le=l(E,k,"external",Q),ue=l(E,k,"sideEffects",Q),oe=l(E,k,"pluginData",Ne),Y=l(E,k,"errors",re),ie=l(E,k,"warnings",re),ce=l(E,k,"watchFiles",re),ne=l(E,k,"watchDirs",re);se(E,k,`from onResolve() callback in plugin ${JSON.stringify(a)}`),S.id=te,G!=null&&(S.pluginName=G),M!=null&&(S.path=M),ae!=null&&(S.namespace=ae),ee!=null&&(S.suffix=ee),le!=null&&(S.external=le),ue!=null&&(S.sideEffects=ue),oe!=null&&(S.pluginData=b.store(oe)),Y!=null&&(S.errors=_e(Y,"errors",b,a)),ie!=null&&(S.warnings=_e(ie,"warnings",b,a)),ce!=null&&(S.watchFiles=Be(ce,"watchFiles")),ne!=null&&(S.watchDirs=Be(ne,"watchDirs"));break}}catch(E){return{id:te,errors:[je(E,e,b,X&&X(),a)]}}return S}case"on-load":{let S={},a="",_,X;for(let te of N.ids)try{({name:a,callback:_,note:X}=z[te]);let E=yield _({path:N.path,namespace:N.namespace,suffix:N.suffix,pluginData:b.load(N.pluginData)});if(E!=null){if(typeof E!="object")throw new Error(`Expected onLoad() callback in plugin ${JSON.stringify(a)} to return an object`);let k={},G=l(E,k,"pluginName",x),M=l(E,k,"contents",nt),ae=l(E,k,"resolveDir",x),ee=l(E,k,"pluginData",Ne),le=l(E,k,"loader",x),ue=l(E,k,"errors",re),oe=l(E,k,"warnings",re),Y=l(E,k,"watchFiles",re),ie=l(E,k,"watchDirs",re);se(E,k,`from onLoad() callback in plugin ${JSON.stringify(a)}`),S.id=te,G!=null&&(S.pluginName=G),M instanceof Uint8Array?S.contents=M:M!=null&&(S.contents=ge(M)),ae!=null&&(S.resolveDir=ae),ee!=null&&(S.pluginData=b.store(ee)),le!=null&&(S.loader=le),ue!=null&&(S.errors=_e(ue,"errors",b,a)),oe!=null&&(S.warnings=_e(oe,"warnings",b,a)),Y!=null&&(S.watchFiles=Be(Y,"watchFiles")),ie!=null&&(S.watchDirs=Be(ie,"watchDirs"));break}}catch(E){return{id:te,errors:[je(E,e,b,X&&X(),a)]}}return S}default:throw new Error("Invalid command: "+N.command)}});let Z=(N,S,a)=>a();F.length>0&&(Z=(N,S,a)=>{(()=>ke(this,null,function*(){for(const{name:_,callback:X,note:te}of F)try{yield X(N)}catch(E){N.errors.push(yield new Promise(k=>S(E,_,te&&te(),k)))}}))().then(a)}),A=!0;let de=0;return{ok:!0,requestPlugins:K,runOnEndCallbacks:Z,pluginRefs:{ref(){++de===1&&r.set(f,J)},unref(){--de===0&&r.delete(f)}}}}),v=(c,u,f,b)=>{let W={},O=l(u,W,"port",Se),F=l(u,W,"host",x),I=l(u,W,"servedir",x),z=l(u,W,"onRequest",Ye),V,P=new Promise((K,A)=>{V=J=>{p.delete(b),J!==null?A(new Error(J)):K()}});return f.serve={},se(u,W,"in serve() call"),O!==void 0&&(f.serve.port=O),F!==void 0&&(f.serve.host=F),I!==void 0&&(f.serve.servedir=I),p.set(b,{onRequest:z,onWait:V}),{wait:P,stop(){m(c,{command:"serve-stop",key:b},()=>{})}}};const T="warning",D="silent";let C=c=>{let u=w++;const f=st();let b,{refs:W,options:O,isTTY:F,callback:I}=c;if(typeof O=="object"){let P=O.plugins;if(P!==void 0){if(!Array.isArray(P))throw new Error('"plugins" must be an array');b=P}}let z=(P,K,A,J)=>{let Z=[];try{Fe(Z,O,{},F,T)}catch{}const de=je(P,e,f,A,K);m(W,{command:"error",flags:Z,error:de},()=>{de.detail=f.load(de.detail),J(de)})},V=(P,K)=>{z(P,K,void 0,A=>{I(Oe("Build failed",[A],[]),null)})};if(b&&b.length>0){if(e.isSync)return V(new Error("Cannot use plugins in synchronous API calls"),"");h(O,b,u,f,W).then(P=>{if(!P.ok)V(P.error,P.pluginName);else try{q(Ae(Re({},c),{key:u,details:f,logPluginError:z,requestPlugins:P.requestPlugins,runOnEndCallbacks:P.runOnEndCallbacks,pluginRefs:P.pluginRefs}))}catch(K){V(K,"")}},P=>V(P,""))}else try{q(Ae(Re({},c),{key:u,details:f,logPluginError:z,requestPlugins:null,runOnEndCallbacks:(P,K,A)=>A(),pluginRefs:null}))}catch(P){V(P,"")}},q=({callName:c,refs:u,serveOptions:f,options:b,isTTY:W,defaultWD:O,callback:F,key:I,details:z,logPluginError:V,requestPlugins:P,runOnEndCallbacks:K,pluginRefs:A})=>{const J={ref(){A&&A.ref(),u&&u.ref()},unref(){A&&A.unref(),u&&u.unref()}};let Z=!e.isWriteUnavailable,{entries:de,flags:N,write:S,stdinContents:a,stdinResolveDir:_,absWorkingDir:X,incremental:te,nodePaths:E,watch:k,mangleCache:G}=vt(c,b,W,T,Z),M={command:"build",key:I,entries:de,flags:N,write:S,stdinContents:a,stdinResolveDir:_,absWorkingDir:X||O,incremental:te,nodePaths:E};P&&(M.plugins=P),G&&(M.mangleCache=G);let ae=f&&v(J,f,M,I),ee,le,ue=(Y,ie)=>{Y.outputFiles&&(ie.outputFiles=Y.outputFiles.map(kt)),Y.metafile&&(ie.metafile=JSON.parse(Y.metafile)),Y.mangleCache&&(ie.mangleCache=Y.mangleCache),Y.writeToStdout!==void 0&&console.log(Ee(Y.writeToStdout).replace(/\n$/,""))},oe=(Y,ie)=>{let ce={errors:be(Y.errors,z),warnings:be(Y.warnings,z)};ue(Y,ce),K(ce,V,()=>{if(ce.errors.length>0)return ie(Oe("Build failed",ce.errors,ce.warnings),null);if(Y.rebuild){if(!ee){let ne=!1;ee=()=>new Promise((we,fe)=>{if(ne||y)throw new Error("Cannot rebuild");m(J,{command:"rebuild",key:I},(me,Nt)=>{if(me)return ie(Oe("Build failed",[{id:"",pluginName:"",text:me,location:null,notes:[],detail:void 0}],[]),null);oe(Nt,(Ke,Mt)=>{Ke?fe(Ke):we(Mt)})})}),J.ref(),ee.dispose=()=>{ne||(ne=!0,m(J,{command:"rebuild-dispose",key:I},()=>{}),J.unref())}}ce.rebuild=ee}if(Y.watch){if(!le){let ne=!1;J.ref(),le=()=>{ne||(ne=!0,o.delete(I),m(J,{command:"watch-stop",key:I},()=>{}),J.unref())},k&&o.set(I,(we,fe)=>{if(we){k.onRebuild&&k.onRebuild(we,null);return}let me={errors:be(fe.errors,z),warnings:be(fe.warnings,z)};ue(fe,me),K(me,V,()=>{if(me.errors.length>0){k.onRebuild&&k.onRebuild(Oe("Build failed",me.errors,me.warnings),null);return}fe.rebuildID!==void 0&&(me.rebuild=ee),me.stop=le,k.onRebuild&&k.onRebuild(null,me)})})}ce.stop=le}ie(null,ce)})};if(S&&e.isWriteUnavailable)throw new Error('The "write" option is unavailable in this environment');if(te&&e.isSync)throw new Error('Cannot use "incremental" with a synchronous build');if(k&&e.isSync)throw new Error('Cannot use "watch" with a synchronous build');m(J,M,(Y,ie)=>{if(Y)return F(new Error(Y),null);if(ae){let ce=ie,ne=!1;J.ref();let we={port:ce.port,host:ce.host,wait:ae.wait,stop(){ne||(ne=!0,ae.stop(),J.unref())}};return J.ref(),ae.wait.then(J.unref,J.unref),F(null,we)}return oe(ie,F)})};return{readFromStdout:B,afterClose:j,service:{buildOrServe:C,transform:({callName:c,refs:u,input:f,options:b,isTTY:W,fs:O,callback:F})=>{const I=st();let z=V=>{try{if(typeof f!="string"&&!(f instanceof Uint8Array))throw new Error('The input to "transform" must be a string or a Uint8Array');let{flags:P,mangleCache:K}=xt(c,b,W,D),A={command:"transform",flags:P,inputFS:V!==null,input:V!==null?ge(V):typeof f=="string"?ge(f):f};K&&(A.mangleCache=K),m(u,A,(J,Z)=>{if(J)return F(new Error(J),null);let de=be(Z.errors,I),N=be(Z.warnings,I),S=1,a=()=>{if(--S===0){let _={warnings:N,code:Z.code,map:Z.map};Z.mangleCache&&(_.mangleCache=Z==null?void 0:Z.mangleCache),F(null,_)}};if(de.length>0)return F(Oe("Transform failed",de,N),null);Z.codeFS&&(S++,O.readFile(Z.code,(_,X)=>{_!==null?F(_,null):(Z.code=X,a())})),Z.mapFS&&(S++,O.readFile(Z.map,(_,X)=>{_!==null?F(_,null):(Z.map=X,a())})),a()})}catch(P){let K=[];try{Fe(K,b,{},W,D)}catch{}const A=je(P,e,I,void 0,"");m(u,{command:"error",flags:K,error:A},()=>{A.detail=I.load(A.detail),F(Oe("Transform failed",[A],[]),null)})}};if((typeof f=="string"||f instanceof Uint8Array)&&f.length>1024*1024){let V=z;z=()=>O.writeFile(f,V)}z(null)},formatMessages:({callName:c,refs:u,messages:f,options:b,callback:W})=>{let O=_e(f,"messages",null,"");if(!b)throw new Error(`Missing second argument in ${c}() call`);let F={},I=l(b,F,"kind",x),z=l(b,F,"color",Q),V=l(b,F,"terminalWidth",Se);if(se(b,F,`in ${c}() call`),I===void 0)throw new Error(`Missing "kind" in ${c}() call`);if(I!=="error"&&I!=="warning")throw new Error(`Expected "kind" to be "error" or "warning" in ${c}() call`);let P={command:"format-msgs",messages:O,isWarning:I==="warning"};z!==void 0&&(P.color=z),V!==void 0&&(P.terminalWidth=V),m(u,P,(K,A)=>{if(K)return W(new Error(K),null);W(null,A.messages)})},analyzeMetafile:({callName:c,refs:u,metafile:f,options:b,callback:W})=>{b===void 0&&(b={});let O={},F=l(b,O,"color",Q),I=l(b,O,"verbose",Q);se(b,O,`in ${c}() call`);let z={command:"analyze-metafile",metafile:f};F!==void 0&&(z.color=F),I!==void 0&&(z.verbose=I),m(u,z,(V,P)=>{if(V)return W(new Error(V),null);W(null,P.result)})}}}}function st(){const e=new Map;let t=0;return{load(r){return e.get(r)},store(r){if(r===void 0)return-1;const o=t++;return e.set(o,r),o}}}function Ve(e,t,r){let o,p=!1;return()=>{if(p)return o;p=!0;try{let y=(e.stack+"").split(`
`);y.splice(1,1);let s=it(t,y,r);if(s)return o={text:e.message,location:s},o}catch{}}}function je(e,t,r,o,p){let y="Internal error",s=null;try{y=(e&&e.message||e)+""}catch{}try{s=it(t,(e.stack+"").split(`
`),"")}catch{}return{id:"",pluginName:p,text:y,location:s,notes:o?[o]:[],detail:r?r.store(e):-1}}function it(e,t,r){let o="    at ";if(e.readFileSync&&!t[0].startsWith(o)&&t[1].startsWith(o))for(let p=1;p<t.length;p++){let y=t[p];if(!!y.startsWith(o))for(y=y.slice(o.length);;){let s=/^(?:new |async )?\S+ \((.*)\)$/.exec(y);if(s){y=s[1];continue}if(s=/^eval at \S+ \((.*)\)(?:, \S+:\d+:\d+)?$/.exec(y),s){y=s[1];continue}if(s=/^(\S+):(\d+):(\d+)$/.exec(y),s){let w;try{w=e.readFileSync(s[1],"utf8")}catch{break}let i=w.split(/\r\n|\r|\n|\u2028|\u2029/)[+s[2]-1]||"",$=+s[3]-1,B=i.slice($,$+r.length)===r?r.length:0;return{file:s[1],namespace:"file",line:+s[2],column:ge(i.slice(0,$)).length,length:ge(i.slice($,$+B)).length,lineText:i+`
`+t.slice(1).join(`
`),suggestion:""}}break}}return null}function Oe(e,t,r){let o=5,p=t.length<1?"":` with ${t.length} error${t.length<2?"":"s"}:`+t.slice(0,o+1).map((s,w)=>{if(w===o)return`
...`;if(!s.location)return`
error: ${s.text}`;let{file:i,line:$,column:B}=s.location,j=s.pluginName?`[plugin: ${s.pluginName}] `:"";return`
${i}:${$}:${B}: ERROR: ${j}${s.text}`}).join(""),y=new Error(`${e}${p}`);return y.errors=t,y.warnings=r,y}function be(e,t){for(const r of e)r.detail=t.load(r.detail);return e}function at(e,t){if(e==null)return null;let r={},o=l(e,r,"file",x),p=l(e,r,"namespace",x),y=l(e,r,"line",Se),s=l(e,r,"column",Se),w=l(e,r,"length",Se),i=l(e,r,"lineText",x),$=l(e,r,"suggestion",x);return se(e,r,t),{file:o||"",namespace:p||"",line:y||0,column:s||0,length:w||0,lineText:i||"",suggestion:$||""}}function _e(e,t,r,o){let p=[],y=0;for(const s of e){let w={},i=l(s,w,"id",x),$=l(s,w,"pluginName",x),B=l(s,w,"text",x),j=l(s,w,"location",et),m=l(s,w,"notes",re),L=l(s,w,"detail",Ne),H=`in element ${y} of "${t}"`;se(s,w,H);let U=[];if(m)for(const g of m){let h={},v=l(g,h,"text",x),T=l(g,h,"location",et);se(g,h,H),U.push({text:v||"",location:at(T,H)})}p.push({id:i||"",pluginName:$||o,text:B||"",location:at(j,H),notes:U,detail:r?r.store(L):-1}),y++}return p}function Be(e,t){const r=[];for(const o of e){if(typeof o!="string")throw new Error(`${JSON.stringify(t)} must be an array of strings`);r.push(o)}return r}function kt({path:e,contents:t}){let r=null;return{path:e,contents:t,get text(){const o=this.contents;return(r===null||o!==t)&&(t=o,r=Ee(o)),r}}}var Et="0.15.7",St=e=>We().build(e),jt=()=>{throw new Error('The "serve" API only works in node')},Ot=(e,t)=>We().transform(e,t),$t=(e,t)=>We().formatMessages(e,t),Tt=(e,t)=>We().analyzeMetafile(e,t),Pt=()=>{throw new Error('The "buildSync" API only works in node')},Rt=()=>{throw new Error('The "transformSync" API only works in node')},Dt=()=>{throw new Error('The "formatMessagesSync" API only works in node')},Ut=()=>{throw new Error('The "analyzeMetafileSync" API only works in node')},$e,He,We=()=>{if(He)return He;throw $e?new Error('You need to wait for the promise returned from "initialize" to be resolved before calling this'):new Error('You need to call "initialize" before calling this')},Ct=e=>{e=bt(e||{});let t=e.wasmURL,r=e.wasmModule,o=e.worker!==!1;if(!t&&!r)throw new Error('Must provide either the "wasmURL" option or the "wasmModule" option');if($e)throw new Error('Cannot call "initialize" more than once');return $e=At(t||"",r,o),$e.catch(()=>{$e=void 0}),$e},At=(e,t,r)=>ke(void 0,null,function*(){let o;if(t)o=t;else{let w=yield fetch(e);if(!w.ok)throw new Error(`Failed to download ${JSON.stringify(e)}`);o=yield w.arrayBuffer()}let p;if(r){let w=new Blob([`onmessage=((postMessage) => {
      // Copyright 2018 The Go Authors. All rights reserved.
      // Use of this source code is governed by a BSD-style
      // license that can be found in the LICENSE file.
      var __async = (__this, __arguments, generator) => {
        return new Promise((resolve, reject) => {
          var fulfilled = (value) => {
            try {
              step(generator.next(value));
            } catch (e) {
              reject(e);
            }
          };
          var rejected = (value) => {
            try {
              step(generator.throw(value));
            } catch (e) {
              reject(e);
            }
          };
          var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
          step((generator = generator.apply(__this, __arguments)).next());
        });
      };
      let onmessage;
      let globalThis = {};
      for (let o = self; o; o = Object.getPrototypeOf(o))
        for (let k of Object.getOwnPropertyNames(o))
          if (!(k in globalThis))
            Object.defineProperty(globalThis, k, { get: () => self[k] });
      "use strict";
      (() => {
        const enosys = () => {
          const err = new Error("not implemented");
          err.code = "ENOSYS";
          return err;
        };
        if (!globalThis.fs) {
          let outputBuf = "";
          globalThis.fs = {
            constants: { O_WRONLY: -1, O_RDWR: -1, O_CREAT: -1, O_TRUNC: -1, O_APPEND: -1, O_EXCL: -1 },
            writeSync(fd, buf) {
              outputBuf += decoder.decode(buf);
              const nl = outputBuf.lastIndexOf("\\n");
              if (nl != -1) {
                console.log(outputBuf.substr(0, nl));
                outputBuf = outputBuf.substr(nl + 1);
              }
              return buf.length;
            },
            write(fd, buf, offset, length, position, callback) {
              if (offset !== 0 || length !== buf.length || position !== null) {
                callback(enosys());
                return;
              }
              const n = this.writeSync(fd, buf);
              callback(null, n);
            },
            chmod(path, mode, callback) {
              callback(enosys());
            },
            chown(path, uid, gid, callback) {
              callback(enosys());
            },
            close(fd, callback) {
              callback(enosys());
            },
            fchmod(fd, mode, callback) {
              callback(enosys());
            },
            fchown(fd, uid, gid, callback) {
              callback(enosys());
            },
            fstat(fd, callback) {
              callback(enosys());
            },
            fsync(fd, callback) {
              callback(null);
            },
            ftruncate(fd, length, callback) {
              callback(enosys());
            },
            lchown(path, uid, gid, callback) {
              callback(enosys());
            },
            link(path, link, callback) {
              callback(enosys());
            },
            lstat(path, callback) {
              callback(enosys());
            },
            mkdir(path, perm, callback) {
              callback(enosys());
            },
            open(path, flags, mode, callback) {
              callback(enosys());
            },
            read(fd, buffer, offset, length, position, callback) {
              callback(enosys());
            },
            readdir(path, callback) {
              callback(enosys());
            },
            readlink(path, callback) {
              callback(enosys());
            },
            rename(from, to, callback) {
              callback(enosys());
            },
            rmdir(path, callback) {
              callback(enosys());
            },
            stat(path, callback) {
              callback(enosys());
            },
            symlink(path, link, callback) {
              callback(enosys());
            },
            truncate(path, length, callback) {
              callback(enosys());
            },
            unlink(path, callback) {
              callback(enosys());
            },
            utimes(path, atime, mtime, callback) {
              callback(enosys());
            }
          };
        }
        if (!globalThis.process) {
          globalThis.process = {
            getuid() {
              return -1;
            },
            getgid() {
              return -1;
            },
            geteuid() {
              return -1;
            },
            getegid() {
              return -1;
            },
            getgroups() {
              throw enosys();
            },
            pid: -1,
            ppid: -1,
            umask() {
              throw enosys();
            },
            cwd() {
              throw enosys();
            },
            chdir() {
              throw enosys();
            }
          };
        }
        if (!globalThis.crypto) {
          throw new Error("globalThis.crypto is not available, polyfill required (crypto.getRandomValues only)");
        }
        if (!globalThis.performance) {
          throw new Error("globalThis.performance is not available, polyfill required (performance.now only)");
        }
        if (!globalThis.TextEncoder) {
          throw new Error("globalThis.TextEncoder is not available, polyfill required");
        }
        if (!globalThis.TextDecoder) {
          throw new Error("globalThis.TextDecoder is not available, polyfill required");
        }
        const encoder = new TextEncoder("utf-8");
        const decoder = new TextDecoder("utf-8");
        globalThis.Go = class {
          constructor() {
            this.argv = ["js"];
            this.env = {};
            this.exit = (code) => {
              if (code !== 0) {
                console.warn("exit code:", code);
              }
            };
            this._exitPromise = new Promise((resolve) => {
              this._resolveExitPromise = resolve;
            });
            this._pendingEvent = null;
            this._scheduledTimeouts = /* @__PURE__ */ new Map();
            this._nextCallbackTimeoutID = 1;
            const setInt64 = (addr, v) => {
              this.mem.setUint32(addr + 0, v, true);
              this.mem.setUint32(addr + 4, Math.floor(v / 4294967296), true);
            };
            const getInt64 = (addr) => {
              const low = this.mem.getUint32(addr + 0, true);
              const high = this.mem.getInt32(addr + 4, true);
              return low + high * 4294967296;
            };
            const loadValue = (addr) => {
              const f = this.mem.getFloat64(addr, true);
              if (f === 0) {
                return void 0;
              }
              if (!isNaN(f)) {
                return f;
              }
              const id = this.mem.getUint32(addr, true);
              return this._values[id];
            };
            const storeValue = (addr, v) => {
              const nanHead = 2146959360;
              if (typeof v === "number" && v !== 0) {
                if (isNaN(v)) {
                  this.mem.setUint32(addr + 4, nanHead, true);
                  this.mem.setUint32(addr, 0, true);
                  return;
                }
                this.mem.setFloat64(addr, v, true);
                return;
              }
              if (v === void 0) {
                this.mem.setFloat64(addr, 0, true);
                return;
              }
              let id = this._ids.get(v);
              if (id === void 0) {
                id = this._idPool.pop();
                if (id === void 0) {
                  id = this._values.length;
                }
                this._values[id] = v;
                this._goRefCounts[id] = 0;
                this._ids.set(v, id);
              }
              this._goRefCounts[id]++;
              let typeFlag = 0;
              switch (typeof v) {
                case "object":
                  if (v !== null) {
                    typeFlag = 1;
                  }
                  break;
                case "string":
                  typeFlag = 2;
                  break;
                case "symbol":
                  typeFlag = 3;
                  break;
                case "function":
                  typeFlag = 4;
                  break;
              }
              this.mem.setUint32(addr + 4, nanHead | typeFlag, true);
              this.mem.setUint32(addr, id, true);
            };
            const loadSlice = (addr) => {
              const array = getInt64(addr + 0);
              const len = getInt64(addr + 8);
              return new Uint8Array(this._inst.exports.mem.buffer, array, len);
            };
            const loadSliceOfValues = (addr) => {
              const array = getInt64(addr + 0);
              const len = getInt64(addr + 8);
              const a = new Array(len);
              for (let i = 0; i < len; i++) {
                a[i] = loadValue(array + i * 8);
              }
              return a;
            };
            const loadString = (addr) => {
              const saddr = getInt64(addr + 0);
              const len = getInt64(addr + 8);
              return decoder.decode(new DataView(this._inst.exports.mem.buffer, saddr, len));
            };
            const timeOrigin = Date.now() - performance.now();
            this.importObject = {
              go: {
                "runtime.wasmExit": (sp) => {
                  sp >>>= 0;
                  const code = this.mem.getInt32(sp + 8, true);
                  this.exited = true;
                  delete this._inst;
                  delete this._values;
                  delete this._goRefCounts;
                  delete this._ids;
                  delete this._idPool;
                  this.exit(code);
                },
                "runtime.wasmWrite": (sp) => {
                  sp >>>= 0;
                  const fd = getInt64(sp + 8);
                  const p = getInt64(sp + 16);
                  const n = this.mem.getInt32(sp + 24, true);
                  globalThis.fs.writeSync(fd, new Uint8Array(this._inst.exports.mem.buffer, p, n));
                },
                "runtime.resetMemoryDataView": (sp) => {
                  sp >>>= 0;
                  this.mem = new DataView(this._inst.exports.mem.buffer);
                },
                "runtime.nanotime1": (sp) => {
                  sp >>>= 0;
                  setInt64(sp + 8, (timeOrigin + performance.now()) * 1e6);
                },
                "runtime.walltime": (sp) => {
                  sp >>>= 0;
                  const msec = new Date().getTime();
                  setInt64(sp + 8, msec / 1e3);
                  this.mem.setInt32(sp + 16, msec % 1e3 * 1e6, true);
                },
                "runtime.scheduleTimeoutEvent": (sp) => {
                  sp >>>= 0;
                  const id = this._nextCallbackTimeoutID;
                  this._nextCallbackTimeoutID++;
                  this._scheduledTimeouts.set(id, setTimeout(
                    () => {
                      this._resume();
                      while (this._scheduledTimeouts.has(id)) {
                        console.warn("scheduleTimeoutEvent: missed timeout event");
                        this._resume();
                      }
                    },
                    getInt64(sp + 8) + 1
                  ));
                  this.mem.setInt32(sp + 16, id, true);
                },
                "runtime.clearTimeoutEvent": (sp) => {
                  sp >>>= 0;
                  const id = this.mem.getInt32(sp + 8, true);
                  clearTimeout(this._scheduledTimeouts.get(id));
                  this._scheduledTimeouts.delete(id);
                },
                "runtime.getRandomData": (sp) => {
                  sp >>>= 0;
                  crypto.getRandomValues(loadSlice(sp + 8));
                },
                "syscall/js.finalizeRef": (sp) => {
                  sp >>>= 0;
                  const id = this.mem.getUint32(sp + 8, true);
                  this._goRefCounts[id]--;
                  if (this._goRefCounts[id] === 0) {
                    const v = this._values[id];
                    this._values[id] = null;
                    this._ids.delete(v);
                    this._idPool.push(id);
                  }
                },
                "syscall/js.stringVal": (sp) => {
                  sp >>>= 0;
                  storeValue(sp + 24, loadString(sp + 8));
                },
                "syscall/js.valueGet": (sp) => {
                  sp >>>= 0;
                  const result = Reflect.get(loadValue(sp + 8), loadString(sp + 16));
                  sp = this._inst.exports.getsp() >>> 0;
                  storeValue(sp + 32, result);
                },
                "syscall/js.valueSet": (sp) => {
                  sp >>>= 0;
                  Reflect.set(loadValue(sp + 8), loadString(sp + 16), loadValue(sp + 32));
                },
                "syscall/js.valueDelete": (sp) => {
                  sp >>>= 0;
                  Reflect.deleteProperty(loadValue(sp + 8), loadString(sp + 16));
                },
                "syscall/js.valueIndex": (sp) => {
                  sp >>>= 0;
                  storeValue(sp + 24, Reflect.get(loadValue(sp + 8), getInt64(sp + 16)));
                },
                "syscall/js.valueSetIndex": (sp) => {
                  sp >>>= 0;
                  Reflect.set(loadValue(sp + 8), getInt64(sp + 16), loadValue(sp + 24));
                },
                "syscall/js.valueCall": (sp) => {
                  sp >>>= 0;
                  try {
                    const v = loadValue(sp + 8);
                    const m = Reflect.get(v, loadString(sp + 16));
                    const args = loadSliceOfValues(sp + 32);
                    const result = Reflect.apply(m, v, args);
                    sp = this._inst.exports.getsp() >>> 0;
                    storeValue(sp + 56, result);
                    this.mem.setUint8(sp + 64, 1);
                  } catch (err) {
                    sp = this._inst.exports.getsp() >>> 0;
                    storeValue(sp + 56, err);
                    this.mem.setUint8(sp + 64, 0);
                  }
                },
                "syscall/js.valueInvoke": (sp) => {
                  sp >>>= 0;
                  try {
                    const v = loadValue(sp + 8);
                    const args = loadSliceOfValues(sp + 16);
                    const result = Reflect.apply(v, void 0, args);
                    sp = this._inst.exports.getsp() >>> 0;
                    storeValue(sp + 40, result);
                    this.mem.setUint8(sp + 48, 1);
                  } catch (err) {
                    sp = this._inst.exports.getsp() >>> 0;
                    storeValue(sp + 40, err);
                    this.mem.setUint8(sp + 48, 0);
                  }
                },
                "syscall/js.valueNew": (sp) => {
                  sp >>>= 0;
                  try {
                    const v = loadValue(sp + 8);
                    const args = loadSliceOfValues(sp + 16);
                    const result = Reflect.construct(v, args);
                    sp = this._inst.exports.getsp() >>> 0;
                    storeValue(sp + 40, result);
                    this.mem.setUint8(sp + 48, 1);
                  } catch (err) {
                    sp = this._inst.exports.getsp() >>> 0;
                    storeValue(sp + 40, err);
                    this.mem.setUint8(sp + 48, 0);
                  }
                },
                "syscall/js.valueLength": (sp) => {
                  sp >>>= 0;
                  setInt64(sp + 16, parseInt(loadValue(sp + 8).length));
                },
                "syscall/js.valuePrepareString": (sp) => {
                  sp >>>= 0;
                  const str = encoder.encode(String(loadValue(sp + 8)));
                  storeValue(sp + 16, str);
                  setInt64(sp + 24, str.length);
                },
                "syscall/js.valueLoadString": (sp) => {
                  sp >>>= 0;
                  const str = loadValue(sp + 8);
                  loadSlice(sp + 16).set(str);
                },
                "syscall/js.valueInstanceOf": (sp) => {
                  sp >>>= 0;
                  this.mem.setUint8(sp + 24, loadValue(sp + 8) instanceof loadValue(sp + 16) ? 1 : 0);
                },
                "syscall/js.copyBytesToGo": (sp) => {
                  sp >>>= 0;
                  const dst = loadSlice(sp + 8);
                  const src = loadValue(sp + 32);
                  if (!(src instanceof Uint8Array || src instanceof Uint8ClampedArray)) {
                    this.mem.setUint8(sp + 48, 0);
                    return;
                  }
                  const toCopy = src.subarray(0, dst.length);
                  dst.set(toCopy);
                  setInt64(sp + 40, toCopy.length);
                  this.mem.setUint8(sp + 48, 1);
                },
                "syscall/js.copyBytesToJS": (sp) => {
                  sp >>>= 0;
                  const dst = loadValue(sp + 8);
                  const src = loadSlice(sp + 16);
                  if (!(dst instanceof Uint8Array || dst instanceof Uint8ClampedArray)) {
                    this.mem.setUint8(sp + 48, 0);
                    return;
                  }
                  const toCopy = src.subarray(0, dst.length);
                  dst.set(toCopy);
                  setInt64(sp + 40, toCopy.length);
                  this.mem.setUint8(sp + 48, 1);
                },
                "debug": (value) => {
                  console.log(value);
                }
              }
            };
          }
          run(instance) {
            return __async(this, null, function* () {
              if (!(instance instanceof WebAssembly.Instance)) {
                throw new Error("Go.run: WebAssembly.Instance expected");
              }
              this._inst = instance;
              this.mem = new DataView(this._inst.exports.mem.buffer);
              this._values = [
                NaN,
                0,
                null,
                true,
                false,
                globalThis,
                this
              ];
              this._goRefCounts = new Array(this._values.length).fill(Infinity);
              this._ids = /* @__PURE__ */ new Map([
                [0, 1],
                [null, 2],
                [true, 3],
                [false, 4],
                [globalThis, 5],
                [this, 6]
              ]);
              this._idPool = [];
              this.exited = false;
              let offset = 4096;
              const strPtr = (str) => {
                const ptr = offset;
                const bytes = encoder.encode(str + "\\0");
                new Uint8Array(this.mem.buffer, offset, bytes.length).set(bytes);
                offset += bytes.length;
                if (offset % 8 !== 0) {
                  offset += 8 - offset % 8;
                }
                return ptr;
              };
              const argc = this.argv.length;
              const argvPtrs = [];
              this.argv.forEach((arg) => {
                argvPtrs.push(strPtr(arg));
              });
              argvPtrs.push(0);
              const keys = Object.keys(this.env).sort();
              keys.forEach((key) => {
                argvPtrs.push(strPtr(\`\${key}=\${this.env[key]}\`));
              });
              argvPtrs.push(0);
              const argv = offset;
              argvPtrs.forEach((ptr) => {
                this.mem.setUint32(offset, ptr, true);
                this.mem.setUint32(offset + 4, 0, true);
                offset += 8;
              });
              const wasmMinDataAddr = 4096 + 8192;
              if (offset >= wasmMinDataAddr) {
                throw new Error("total length of command line and environment variables exceeds limit");
              }
              this._inst.exports.run(argc, argv);
              if (this.exited) {
                this._resolveExitPromise();
              }
              yield this._exitPromise;
            });
          }
          _resume() {
            if (this.exited) {
              throw new Error("Go program has already exited");
            }
            this._inst.exports.resume();
            if (this.exited) {
              this._resolveExitPromise();
            }
          }
          _makeFuncWrapper(id) {
            const go = this;
            return function() {
              const event = { id, this: this, args: arguments };
              go._pendingEvent = event;
              go._resume();
              return event.result;
            };
          }
        };
      })();
      onmessage = ({ data: wasm }) => {
        let decoder = new TextDecoder();
        let fs = globalThis.fs;
        let stderr = "";
        fs.writeSync = (fd, buffer) => {
          if (fd === 1) {
            postMessage(buffer);
          } else if (fd === 2) {
            stderr += decoder.decode(buffer);
            let parts = stderr.split("\\n");
            if (parts.length > 1)
              console.log(parts.slice(0, -1).join("\\n"));
            stderr = parts[parts.length - 1];
          } else {
            throw new Error("Bad write");
          }
          return buffer.length;
        };
        let stdin = [];
        let resumeStdin;
        let stdinPos = 0;
        onmessage = ({ data }) => {
          if (data.length > 0) {
            stdin.push(data);
            if (resumeStdin)
              resumeStdin();
          }
        };
        fs.read = (fd, buffer, offset, length, position, callback) => {
          if (fd !== 0 || offset !== 0 || length !== buffer.length || position !== null) {
            throw new Error("Bad read");
          }
          if (stdin.length === 0) {
            resumeStdin = () => fs.read(fd, buffer, offset, length, position, callback);
            return;
          }
          let first = stdin[0];
          let count = Math.max(0, Math.min(length, first.length - stdinPos));
          buffer.set(first.subarray(stdinPos, stdinPos + count), offset);
          stdinPos += count;
          if (stdinPos === first.length) {
            stdin.shift();
            stdinPos = 0;
          }
          callback(null, count);
        };
        let go = new globalThis.Go();
        go.argv = ["", \`--service=\${"0.15.7"}\`];
        if (wasm instanceof WebAssembly.Module) {
          WebAssembly.instantiate(wasm, go.importObject).then((instance) => go.run(instance));
        } else {
          WebAssembly.instantiate(wasm, go.importObject).then(({ instance }) => go.run(instance));
        }
      };
      return (m) => onmessage(m);
    })(postMessage)`],{type:"text/javascript"});p=new Worker(URL.createObjectURL(w))}else{let w=(i=>{var $=(m,L,H)=>new Promise((U,g)=>{var h=D=>{try{T(H.next(D))}catch(C){g(C)}},v=D=>{try{T(H.throw(D))}catch(C){g(C)}},T=D=>D.done?U(D.value):Promise.resolve(D.value).then(h,v);T((H=H.apply(m,L)).next())});let B,j={};for(let m=self;m;m=Object.getPrototypeOf(m))for(let L of Object.getOwnPropertyNames(m))L in j||Object.defineProperty(j,L,{get:()=>self[L]});return(()=>{const m=()=>{const U=new Error("not implemented");return U.code="ENOSYS",U};if(!j.fs){let U="";j.fs={constants:{O_WRONLY:-1,O_RDWR:-1,O_CREAT:-1,O_TRUNC:-1,O_APPEND:-1,O_EXCL:-1},writeSync(g,h){U+=H.decode(h);const v=U.lastIndexOf(`
`);return v!=-1&&(console.log(U.substr(0,v)),U=U.substr(v+1)),h.length},write(g,h,v,T,D,C){if(v!==0||T!==h.length||D!==null){C(m());return}const q=this.writeSync(g,h);C(null,q)},chmod(g,h,v){v(m())},chown(g,h,v,T){T(m())},close(g,h){h(m())},fchmod(g,h,v){v(m())},fchown(g,h,v,T){T(m())},fstat(g,h){h(m())},fsync(g,h){h(null)},ftruncate(g,h,v){v(m())},lchown(g,h,v,T){T(m())},link(g,h,v){v(m())},lstat(g,h){h(m())},mkdir(g,h,v){v(m())},open(g,h,v,T){T(m())},read(g,h,v,T,D,C){C(m())},readdir(g,h){h(m())},readlink(g,h){h(m())},rename(g,h,v){v(m())},rmdir(g,h){h(m())},stat(g,h){h(m())},symlink(g,h,v){v(m())},truncate(g,h,v){v(m())},unlink(g,h){h(m())},utimes(g,h,v,T){T(m())}}}if(j.process||(j.process={getuid(){return-1},getgid(){return-1},geteuid(){return-1},getegid(){return-1},getgroups(){throw m()},pid:-1,ppid:-1,umask(){throw m()},cwd(){throw m()},chdir(){throw m()}}),!j.crypto)throw new Error("globalThis.crypto is not available, polyfill required (crypto.getRandomValues only)");if(!j.performance)throw new Error("globalThis.performance is not available, polyfill required (performance.now only)");if(!j.TextEncoder)throw new Error("globalThis.TextEncoder is not available, polyfill required");if(!j.TextDecoder)throw new Error("globalThis.TextDecoder is not available, polyfill required");const L=new TextEncoder("utf-8"),H=new TextDecoder("utf-8");j.Go=class{constructor(){this.argv=["js"],this.env={},this.exit=n=>{n!==0&&console.warn("exit code:",n)},this._exitPromise=new Promise(n=>{this._resolveExitPromise=n}),this._pendingEvent=null,this._scheduledTimeouts=new Map,this._nextCallbackTimeoutID=1;const U=(n,d)=>{this.mem.setUint32(n+0,d,!0),this.mem.setUint32(n+4,Math.floor(d/4294967296),!0)},g=n=>{const d=this.mem.getUint32(n+0,!0),R=this.mem.getInt32(n+4,!0);return d+R*4294967296},h=n=>{const d=this.mem.getFloat64(n,!0);if(d===0)return;if(!isNaN(d))return d;const R=this.mem.getUint32(n,!0);return this._values[R]},v=(n,d)=>{if(typeof d=="number"&&d!==0){if(isNaN(d)){this.mem.setUint32(n+4,2146959360,!0),this.mem.setUint32(n,0,!0);return}this.mem.setFloat64(n,d,!0);return}if(d===void 0){this.mem.setFloat64(n,0,!0);return}let c=this._ids.get(d);c===void 0&&(c=this._idPool.pop(),c===void 0&&(c=this._values.length),this._values[c]=d,this._goRefCounts[c]=0,this._ids.set(d,c)),this._goRefCounts[c]++;let u=0;switch(typeof d){case"object":d!==null&&(u=1);break;case"string":u=2;break;case"symbol":u=3;break;case"function":u=4;break}this.mem.setUint32(n+4,2146959360|u,!0),this.mem.setUint32(n,c,!0)},T=n=>{const d=g(n+0),R=g(n+8);return new Uint8Array(this._inst.exports.mem.buffer,d,R)},D=n=>{const d=g(n+0),R=g(n+8),c=new Array(R);for(let u=0;u<R;u++)c[u]=h(d+u*8);return c},C=n=>{const d=g(n+0),R=g(n+8);return H.decode(new DataView(this._inst.exports.mem.buffer,d,R))},q=Date.now()-performance.now();this.importObject={go:{"runtime.wasmExit":n=>{n>>>=0;const d=this.mem.getInt32(n+8,!0);this.exited=!0,delete this._inst,delete this._values,delete this._goRefCounts,delete this._ids,delete this._idPool,this.exit(d)},"runtime.wasmWrite":n=>{n>>>=0;const d=g(n+8),R=g(n+16),c=this.mem.getInt32(n+24,!0);j.fs.writeSync(d,new Uint8Array(this._inst.exports.mem.buffer,R,c))},"runtime.resetMemoryDataView":n=>{this.mem=new DataView(this._inst.exports.mem.buffer)},"runtime.nanotime1":n=>{n>>>=0,U(n+8,(q+performance.now())*1e6)},"runtime.walltime":n=>{n>>>=0;const d=new Date().getTime();U(n+8,d/1e3),this.mem.setInt32(n+16,d%1e3*1e6,!0)},"runtime.scheduleTimeoutEvent":n=>{n>>>=0;const d=this._nextCallbackTimeoutID;this._nextCallbackTimeoutID++,this._scheduledTimeouts.set(d,setTimeout(()=>{for(this._resume();this._scheduledTimeouts.has(d);)console.warn("scheduleTimeoutEvent: missed timeout event"),this._resume()},g(n+8)+1)),this.mem.setInt32(n+16,d,!0)},"runtime.clearTimeoutEvent":n=>{n>>>=0;const d=this.mem.getInt32(n+8,!0);clearTimeout(this._scheduledTimeouts.get(d)),this._scheduledTimeouts.delete(d)},"runtime.getRandomData":n=>{n>>>=0,crypto.getRandomValues(T(n+8))},"syscall/js.finalizeRef":n=>{n>>>=0;const d=this.mem.getUint32(n+8,!0);if(this._goRefCounts[d]--,this._goRefCounts[d]===0){const R=this._values[d];this._values[d]=null,this._ids.delete(R),this._idPool.push(d)}},"syscall/js.stringVal":n=>{n>>>=0,v(n+24,C(n+8))},"syscall/js.valueGet":n=>{n>>>=0;const d=Reflect.get(h(n+8),C(n+16));n=this._inst.exports.getsp()>>>0,v(n+32,d)},"syscall/js.valueSet":n=>{n>>>=0,Reflect.set(h(n+8),C(n+16),h(n+32))},"syscall/js.valueDelete":n=>{n>>>=0,Reflect.deleteProperty(h(n+8),C(n+16))},"syscall/js.valueIndex":n=>{n>>>=0,v(n+24,Reflect.get(h(n+8),g(n+16)))},"syscall/js.valueSetIndex":n=>{n>>>=0,Reflect.set(h(n+8),g(n+16),h(n+24))},"syscall/js.valueCall":n=>{n>>>=0;try{const d=h(n+8),R=Reflect.get(d,C(n+16)),c=D(n+32),u=Reflect.apply(R,d,c);n=this._inst.exports.getsp()>>>0,v(n+56,u),this.mem.setUint8(n+64,1)}catch(d){n=this._inst.exports.getsp()>>>0,v(n+56,d),this.mem.setUint8(n+64,0)}},"syscall/js.valueInvoke":n=>{n>>>=0;try{const d=h(n+8),R=D(n+16),c=Reflect.apply(d,void 0,R);n=this._inst.exports.getsp()>>>0,v(n+40,c),this.mem.setUint8(n+48,1)}catch(d){n=this._inst.exports.getsp()>>>0,v(n+40,d),this.mem.setUint8(n+48,0)}},"syscall/js.valueNew":n=>{n>>>=0;try{const d=h(n+8),R=D(n+16),c=Reflect.construct(d,R);n=this._inst.exports.getsp()>>>0,v(n+40,c),this.mem.setUint8(n+48,1)}catch(d){n=this._inst.exports.getsp()>>>0,v(n+40,d),this.mem.setUint8(n+48,0)}},"syscall/js.valueLength":n=>{n>>>=0,U(n+16,parseInt(h(n+8).length))},"syscall/js.valuePrepareString":n=>{n>>>=0;const d=L.encode(String(h(n+8)));v(n+16,d),U(n+24,d.length)},"syscall/js.valueLoadString":n=>{n>>>=0;const d=h(n+8);T(n+16).set(d)},"syscall/js.valueInstanceOf":n=>{n>>>=0,this.mem.setUint8(n+24,h(n+8)instanceof h(n+16)?1:0)},"syscall/js.copyBytesToGo":n=>{n>>>=0;const d=T(n+8),R=h(n+32);if(!(R instanceof Uint8Array||R instanceof Uint8ClampedArray)){this.mem.setUint8(n+48,0);return}const c=R.subarray(0,d.length);d.set(c),U(n+40,c.length),this.mem.setUint8(n+48,1)},"syscall/js.copyBytesToJS":n=>{n>>>=0;const d=h(n+8),R=T(n+16);if(!(d instanceof Uint8Array||d instanceof Uint8ClampedArray)){this.mem.setUint8(n+48,0);return}const c=R.subarray(0,d.length);d.set(c),U(n+40,c.length),this.mem.setUint8(n+48,1)},debug:n=>{console.log(n)}}}}run(U){return $(this,null,function*(){if(!(U instanceof WebAssembly.Instance))throw new Error("Go.run: WebAssembly.Instance expected");this._inst=U,this.mem=new DataView(this._inst.exports.mem.buffer),this._values=[NaN,0,null,!0,!1,j,this],this._goRefCounts=new Array(this._values.length).fill(1/0),this._ids=new Map([[0,1],[null,2],[!0,3],[!1,4],[j,5],[this,6]]),this._idPool=[],this.exited=!1;let g=4096;const h=n=>{const d=g,R=L.encode(n+"\0");return new Uint8Array(this.mem.buffer,g,R.length).set(R),g+=R.length,g%8!==0&&(g+=8-g%8),d},v=this.argv.length,T=[];this.argv.forEach(n=>{T.push(h(n))}),T.push(0),Object.keys(this.env).sort().forEach(n=>{T.push(h(`${n}=${this.env[n]}`))}),T.push(0);const C=g;T.forEach(n=>{this.mem.setUint32(g,n,!0),this.mem.setUint32(g+4,0,!0),g+=8});const q=4096+8192;if(g>=q)throw new Error("total length of command line and environment variables exceeds limit");this._inst.exports.run(v,C),this.exited&&this._resolveExitPromise(),yield this._exitPromise})}_resume(){if(this.exited)throw new Error("Go program has already exited");this._inst.exports.resume(),this.exited&&this._resolveExitPromise()}_makeFuncWrapper(U){const g=this;return function(){const h={id:U,this:this,args:arguments};return g._pendingEvent=h,g._resume(),h.result}}}})(),B=({data:m})=>{let L=new TextDecoder,H=j.fs,U="";H.writeSync=(D,C)=>{if(D===1)i(C);else if(D===2){U+=L.decode(C);let q=U.split(`
`);q.length>1&&console.log(q.slice(0,-1).join(`
`)),U=q[q.length-1]}else throw new Error("Bad write");return C.length};let g=[],h,v=0;B=({data:D})=>{D.length>0&&(g.push(D),h&&h())},H.read=(D,C,q,n,d,R)=>{if(D!==0||q!==0||n!==C.length||d!==null)throw new Error("Bad read");if(g.length===0){h=()=>H.read(D,C,q,n,d,R);return}let c=g[0],u=Math.max(0,Math.min(n,c.length-v));C.set(c.subarray(v,v+u),q),v+=u,v===c.length&&(g.shift(),v=0),R(null,u)};let T=new j.Go;T.argv=["","--service=0.15.7"],m instanceof WebAssembly.Module?WebAssembly.instantiate(m,T.importObject).then(D=>T.run(D)):WebAssembly.instantiate(m,T.importObject).then(({instance:D})=>T.run(D))},m=>B(m)})(i=>p.onmessage({data:i}));p={onmessage:null,postMessage:i=>setTimeout(()=>w({data:i})),terminate(){}}}p.postMessage(o),p.onmessage=({data:w})=>y(w);let{readFromStdout:y,service:s}=_t({writeToStdin(w){p.postMessage(w)},isSync:!1,isWriteUnavailable:!0,esbuild:Ie});He={build:w=>new Promise((i,$)=>s.buildOrServe({callName:"build",refs:null,serveOptions:null,options:w,isTTY:!1,defaultWD:"/",callback:(B,j)=>B?$(B):i(j)})),transform:(w,i)=>new Promise(($,B)=>s.transform({callName:"transform",refs:null,input:w,options:i||{},isTTY:!1,fs:{readFile(j,m){m(new Error("Internal error"),null)},writeFile(j,m){m(null)}},callback:(j,m)=>j?B(j):$(m)})),formatMessages:(w,i)=>new Promise(($,B)=>s.formatMessages({callName:"formatMessages",refs:null,messages:w,options:i,callback:(j,m)=>j?B(j):$(m)})),analyzeMetafile:(w,i)=>new Promise(($,B)=>s.analyzeMetafile({callName:"analyzeMetafile",refs:null,metafile:typeof w=="string"?w:JSON.stringify(w),options:i,callback:(j,m)=>j?B(j):$(m)}))}}),It=Ie})(Te)})(Le);var ot="/assets/esbuild.fe9b1bd3.wasm";const ct=Le.exports.initialize({wasmURL:ot});self.addEventListener("message",async({data:Te})=>{var De,ve,Ue;Te[0].value=`import * as React from "voby";
`+Te[0].value;try{await ct;const xe=await Le.exports.build({entryPoints:["index.tsx"],outdir:"/",bundle:!0,format:"esm",external:["voby"],plugins:[{name:"virtual-files",setup(ye){ye.onResolve({filter:/.*/},he=>{if(he.kind==="entry-point")return{path:`/${he.path}`};if(he.kind==="import-statement"&&he.path.startsWith("./"))return/\.css$|\.ts$|\.tsx$|\.js$|\.jsx$/.test(he.path)?{path:he.path.slice(1)}:{path:`${he.path.slice(1)}.tsx`}}),ye.onLoad({filter:/.*/},he=>{var Re;const Je=/\.css$/.test(he.path)?"css":"tsx",Pe=(Re=Te.find(Ae=>Ae.file===he.path.slice(1)))==null?void 0:Re.value;if(Pe)return{contents:Pe,loader:Je}})}}]});if(!((De=xe.outputFiles)!=null&&De.length))return;const Ce=(ve=xe.outputFiles.find(ye=>ye.path==="/index.js"))==null?void 0:ve.text,ze=(Ue=xe.outputFiles.find(ye=>ye.path==="/index.css"))==null?void 0:Ue.text;Ce&&self.postMessage({js:Ce,css:ze})}catch(xe){console.log(xe)}})})();
