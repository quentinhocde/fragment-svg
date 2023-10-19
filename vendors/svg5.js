const svg5={html:"",_defs:[],_attributes:"",_attrRegex:e=>new RegExp(`\\s${e}\\=\\"[^"]*\\"`,"g"),_styles:[],_fillColor:"white",_strokeColor:"black",_strokeWidth:1,_strokeCap:"butt",_strokeJoin:"miter",_strokeDashArray:[],_opacity:1,_transform:[[]],_path:[],CLOSE:!0,_initAlea:(e=Date.now())=>{function s(){let e=4022871197;return s=>{s=s.toString();for(let r=0;r<s.length;r++){e+=s.charCodeAt(r);let t=.02519603282416938*e;e=t>>>0,t-=e,t*=e,e=t>>>0,t-=e,e+=4294967296*t}return 2.3283064365386963e-10*(e>>>0)}}return new function(){return function(e){let r=0,t=0,o=0,n=1;0==e.length&&(e=[+new Date]);let g=s();r=g(" "),t=g(" "),o=g(" ");for(let s=0;s<e.length;s++)r-=g(e[s]),0>r&&(r+=1),t-=g(e[s]),0>t&&(t+=1),o-=g(e[s]),0>o&&(o+=1);g=null;const v=()=>{const e=2091639*r+2.3283064365386963e-10*n;return r=t,t=o,o=e-(n=0|e)};return v.uint32=()=>4294967296*v(),v.fract53=()=>v()+11102230246251565e-32*(0|2097152*v()),v.args=e,v}(Array.prototype.slice.call(arguments))}(e)},_initSimplexNoise:e=>{const s=.5*(Math.sqrt(3)-1),r=(3-Math.sqrt(3))/6,t=1/6,o=(Math.sqrt(5)-1)/4,n=(5-Math.sqrt(5))/20;function g(e){const s=svg5._initAlea(e);this.p=v(s),this.perm=new Uint8Array(512),this.permMod12=new Uint8Array(512);for(let e=0;512>e;e++)this.perm[e]=this.p[255&e],this.permMod12[e]=this.perm[e]%12}function v(e){var s,r=new Uint8Array(256);for(s=0;256>s;s++)r[s]=s;for(s=0;255>s;s++){var t=s+~~(e()*(256-s)),o=r[s];r[s]=r[t],r[t]=o}return r}return g.prototype={grad3:new Float32Array([1,1,0,-1,1,0,1,-1,0,-1,-1,0,1,0,1,-1,0,1,1,0,-1,-1,0,-1,0,1,1,0,-1,1,0,1,-1,0,-1,-1]),grad4:new Float32Array([0,1,1,1,0,1,1,-1,0,1,-1,1,0,1,-1,-1,0,-1,1,1,0,-1,1,-1,0,-1,-1,1,0,-1,-1,-1,1,0,1,1,1,0,1,-1,1,0,-1,1,1,0,-1,-1,-1,0,1,1,-1,0,1,-1,-1,0,-1,1,-1,0,-1,-1,1,1,0,1,1,1,0,-1,1,-1,0,1,1,-1,0,-1,-1,1,0,1,-1,1,0,-1,-1,-1,0,1,-1,-1,0,-1,1,1,1,0,1,1,-1,0,1,-1,1,0,1,-1,-1,0,-1,1,1,0,-1,1,-1,0,-1,-1,1,0,-1,-1,-1,0]),noise2D:function(e,t){var o,n,g=this.permMod12,v=this.perm,a=this.grad3,i=0,l=0,d=0,_=(e+t)*s,h=Math.floor(e+_),p=Math.floor(t+_),u=(h+p)*r,c=e-(h-u),$=t-(p-u);c>$?(o=1,n=0):(o=0,n=1);var m=c-o+r,f=$-n+r,y=c-1+2*r,k=$-1+2*r,x=255&h,b=255&p,M=.5-c*c-$*$;if(0<=M){var D=3*g[x+v[b]];i=(M*=M)*M*(a[D]*c+a[D+1]*$)}var S=.5-m*m-f*f;if(0<=S){var w=3*g[x+o+v[b+n]];l=(S*=S)*S*(a[w]*m+a[w+1]*f)}var A=.5-y*y-k*k;if(0<=A){var C=3*g[x+1+v[b+1]];d=(A*=A)*A*(a[C]*y+a[C+1]*k)}return 70*(i+l+d)},noise3D:function(e,s,r){var o,n,g,v,a,i,l,d,_,h,p=this.permMod12,u=this.perm,c=this.grad3,$=.3333333333333333*(e+s+r),m=Math.floor(e+$),f=Math.floor(s+$),y=Math.floor(r+$),k=(m+f+y)*t,x=e-(m-k),b=s-(f-k),M=r-(y-k);x>=b?b>=M?(a=1,i=0,l=0,d=1,_=1,h=0):x>=M?(a=1,i=0,l=0,d=1,_=0,h=1):(a=0,i=0,l=1,d=1,_=0,h=1):b<M?(a=0,i=0,l=1,d=0,_=1,h=1):x<M?(a=0,i=1,l=0,d=0,_=1,h=1):(a=0,i=1,l=0,d=1,_=1,h=0);var D=x-a+t,S=b-i+t,w=M-l+t,A=x-d+2*t,C=b-_+2*t,T=M-h+2*t,q=x-1+.5,E=b-1+.5,L=M-1+.5,V=255&m,G=255&f,W=255&y,j=.6-x*x-b*b-M*M;if(0>j)o=0;else{var F=3*p[V+u[G+u[W]]];o=(j*=j)*j*(c[F]*x+c[F+1]*b+c[F+2]*M)}var J=.6-D*D-S*S-w*w;if(0>J)n=0;else{var P=3*p[V+a+u[G+i+u[W+l]]];n=(J*=J)*J*(c[P]*D+c[P+1]*S+c[P+2]*w)}var R=.6-A*A-C*C-T*T;if(0>R)g=0;else{var H=3*p[V+d+u[G+_+u[W+h]]];g=(R*=R)*R*(c[H]*A+c[H+1]*C+c[H+2]*T)}var I=.6-q*q-E*E-L*L;if(0>I)v=0;else{var B=3*p[V+1+u[G+1+u[W+1]]];v=(I*=I)*I*(c[B]*q+c[B+1]*E+c[B+2]*L)}return 32*(o+n+g+v)},noise4D:function(e,s,r,t){var g,v,a,i,l,d,_,h,p,u,c,$,m,f,y,k,x,b=this.perm,M=this.grad4,D=(e+s+r+t)*o,S=Math.floor(e+D),w=Math.floor(s+D),A=Math.floor(r+D),C=Math.floor(t+D),T=(S+w+A+C)*n,q=e-(S-T),E=s-(w-T),L=r-(A-T),V=t-(C-T),G=0,W=0,j=0,F=0;q>E?G++:W++,q>L?G++:j++,q>V?G++:F++,E>L?W++:j++,E>V?W++:F++,L>V?j++:F++;var J=q-(d=3<=G?1:0)+n,P=E-(_=3<=W?1:0)+n,R=L-(h=3<=j?1:0)+n,H=V-(p=3<=F?1:0)+n,I=q-(u=2<=G?1:0)+2*n,B=E-(c=2<=W?1:0)+2*n,U=L-($=2<=j?1:0)+2*n,z=V-(m=2<=F?1:0)+2*n,N=q-(f=1<=G?1:0)+3*n,O=E-(y=1<=W?1:0)+3*n,Q=L-(k=1<=j?1:0)+3*n,Z=V-(x=1<=F?1:0)+3*n,K=q-1+4*n,X=E-1+4*n,Y=L-1+4*n,ee=V-1+4*n,se=255&S,re=255&w,te=255&A,oe=255&C,ne=.6-q*q-E*E-L*L-V*V;if(0>ne)g=0;else{var ge=b[se+b[re+b[te+b[oe]]]]%32*4;g=(ne*=ne)*ne*(M[ge]*q+M[ge+1]*E+M[ge+2]*L+M[ge+3]*V)}var ve=.6-J*J-P*P-R*R-H*H;if(0>ve)v=0;else{var ae=b[se+d+b[re+_+b[te+h+b[oe+p]]]]%32*4;v=(ve*=ve)*ve*(M[ae]*J+M[ae+1]*P+M[ae+2]*R+M[ae+3]*H)}var ie=.6-I*I-B*B-U*U-z*z;if(0>ie)a=0;else{var le=b[se+u+b[re+c+b[te+$+b[oe+m]]]]%32*4;a=(ie*=ie)*ie*(M[le]*I+M[le+1]*B+M[le+2]*U+M[le+3]*z)}var de=.6-N*N-O*O-Q*Q-Z*Z;if(0>de)i=0;else{var _e=b[se+f+b[re+y+b[te+k+b[oe+x]]]]%32*4;i=(de*=de)*de*(M[_e]*N+M[_e+1]*O+M[_e+2]*Q+M[_e+3]*Z)}var he=.6-K*K-X*X-Y*Y-ee*ee;if(0>he)l=0;else{var pe=b[se+1+b[re+1+b[te+1+b[oe+1]]]]%32*4;l=(he*=he)*he*(M[pe]*K+M[pe+1]*X+M[pe+2]*Y+M[pe+3]*ee)}return 27*(g+v+a+i+l)}},g._buildPermutationTable=v,new g(e)},_addElement:(e,s)=>{svg5.html+=`<${e} stroke="${svg5._strokeColor}" stroke-width="${svg5._strokeWidth}" stroke-linecap="${svg5._strokeCap}" stroke-linejoin="${svg5._strokeJoin}"${svg5._strokeDashArray.length?` stroke-dasharray="${svg5._strokeDashArray.join(" ")}"`:""} fill="${svg5._fillColor}" ${s}${svg5._getTransform()}${1!==svg5._opacity?` opacity="${svg5._opacity}"`:""}${svg5._attributes} />`},_addTransform:e=>svg5._transform[svg5._transform.length-1].push(e),_getTransform:()=>svg5._transform[svg5._transform.length-1].length?` transform="${svg5._transform[svg5._transform.length-1].join(" ")}"`:"",_round:e=>void 0===svg5._precision?e:e.toFixed(svg5._precision),_parseColor:function(e,s,r,t){return"string"==typeof arguments[0]?arguments[0]:1===arguments.length?`rgb(${svg5._round(e)}, ${svg5._round(e)}, ${svg5._round(e)})`:2===arguments.length?`rgba(${svg5._round(e)}, ${svg5._round(e)}, ${svg5._round(e)}, ${(s/255).toFixed(3)})`:3===arguments.length?`rgb(${svg5._round(e)}, ${svg5._round(s)}, ${svg5._round(r)})`:4===arguments.length?`rgba(${svg5._round(e)}, ${svg5._round(s)}, ${svg5._round(r)}, ${(t/255).toFixed(3)})`:"black"}};let width,height;svg5._prng=svg5._initAlea(),svg5._simplex=svg5._initSimplexNoise(svg5._prng);const CLOSE=!0,createSVG=(e,s)=>{svg5._id=`svg5_${Date.now()}`,width=svg5.width=e,height=svg5.height=s,svg5.html="",svg5._fillColor="white",svg5._strokeColor="black",svg5._strokeWidth=1,svg5._strokeCap="butt",svg5._strokeJoin="miter",svg5._strokeDashArray=[],svg5._opacity=1,svg5._transform=[[]],svg5._path=[]},getHTML=()=>`<svg id="${svg5._id}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${svg5._round(svg5.width)} ${svg5._round(svg5.height)}" width="${svg5._round(svg5.width)}" height="${svg5._round(svg5.height)}">${svg5._styles.length?`<style>${svg5._styles.join(" ")}</style>`:""}${svg5._defs.length?`<defs>${svg5._defs.join(" ")}</defs>`:""}${svg5.html}</svg>`,render=(e="body")=>{document.querySelector(e).innerHTML+=getHTML(),svg5._svg=document.querySelector(`#${svg5._id}`),svg5._svg.addEventListener("contextmenu",(e=>{e.preventDefault(),save()}),!1)},precision=e=>svg5._precision=Math.max(0,~~e),addStyle=e=>svg5._styles.push("string"==typeof e?e:e.toString()),addDef=e=>svg5._defs.push("string"==typeof e?e:e.toString()),clear=()=>svg5.html="",background=(...e)=>svg5.html+=`<rect stroke="none" fill="${svg5._parseColor(...e)}" x="0" y="0" width="${svg5._round(svg5.width)}" height="${svg5._round(svg5.height)}" />`,opacity=e=>svg5._opacity=e,fill=(...e)=>svg5._fillColor=svg5._parseColor(...e),noFill=()=>svg5._fillColor="none",stroke=(...e)=>svg5._strokeColor=svg5._parseColor(...e),strokeWidth=e=>svg5._strokeWidth=e,strokeWeight=strokeWidth,strokeCap=e=>svg5._strokeCap=e,strokeJoin=e=>svg5._strokeJoin=e,strokeDashArray=(...e)=>svg5._strokeDashArray=e,noStroke=()=>svg5._strokeColor="none",setAttribute=(e,s)=>svg5._attributes.match(svg5._attrRegex(e))?svg5._attributes=svg5._attributes.replace(svg5._attrRegex(e),` ${e}="${s}"`):svg5._attributes+=` ${e}="${s}"`,removeAttribute=e=>svg5._attributes=svg5._attributes.replace(svg5._attrRegex(e),""),clearAttributes=()=>svg5._attributes="",circle=(e,s,r)=>svg5._addElement("circle",`cx="${svg5._round(e)}" cy="${svg5._round(s)}" r="${svg5._round(r/2)}"`),ellipse=(e,s,r,t)=>svg5._addElement("ellipse",`cx="${svg5._round(e)}" cy="${svg5._round(s)}" rx="${svg5._round(r/2)}" ry="${svg5._round(t/2)}"`),rect=(e,s,r,t)=>svg5._addElement("rect",`x="${svg5._round(e)}" y="${svg5._round(s)}" width="${svg5._round(r)}" height="${svg5._round(t)}"`),square=(e,s,r)=>rect(e,s,r,r),point=(e,s)=>rect(e,s,1,1),polyline=(...e)=>svg5._addElement("polyline",`points="${e.map(svg5._round).join(" ")}"`),line=(e,s,r,t)=>polyline(e,s,r,t),polygon=(...e)=>svg5._addElement("polygon",`points="${e.map(svg5._round).join(" ")}"`),triangle=(e,s,r,t,o,n)=>polygon(e,s,r,t,o,n),quad=(e,s,r,t,o,n,g,v)=>polygon(e,s,r,t,o,n,g,v),regularPolygon=(e,s,r,t,o=0)=>{const n=new Array(r).fill(0).map(((n,g)=>{const v=g/r*Math.PI*2+radians(o);return`${e+Math.cos(v)*t},${s+Math.sin(v)*t}`}));polygon(...n)},arc=(e,s,r,t,o,n)=>{if(Math.abs(o-n)>=360)return ellipse(e,s,o,n);const g=radians(o),v=radians(n),a=svg5._round(r/2),i=svg5._round(t/2),l=svg5._round(e+Math.cos(g)*a),d=svg5._round(s+Math.sin(g)*i),_=svg5._round(e+Math.cos(v)*a),h=svg5._round(s+Math.sin(v)*i);svg5._addElement("path",`d="M ${l} ${d} A ${a} ${i} 0 ${Math.abs(n-o)>180?1:0} ${n<o?0:1} ${_} ${h}"`)},spline=(...e)=>{let s=1,r=!1;e.length%2==1?s=e.pop():"boolean"==typeof e[e.length-1]&&(r=e.pop(),s=e.pop()),e=e.reduce(((e,s,r)=>(e[r/2|0]||(e[r/2|0]={}),e[r/2|0][["x","y"][r%2]]=s,e)),[]);const t=[];for(let s=0;s<e.length-(r?0:1);s++){const{x:r,y:o}=e[s%e.length],{x:n,y:g}=e[(s+1)%e.length];t[s%e.length]={x:(r+n)/2,y:(o+g)/2}}const o=r?[]:[[e[0],e[0]]];for(let n=r?0:1;n<t.length;n++){const r=e[n],g=t[(t.length+n-1)%t.length],v=t[n],a=(g.x-v.x)/2,i=(g.y-v.y)/2;o[n]=[{x:r.x+s*a,y:r.y+s*i},{x:r.x-s*a,y:r.y-s*i}]}r||o.push([e[e.length-1],e[e.length-1]]),svg5._addElement("path",`d="M ${e[0].x},${e[0].y} ${t.map(((s,r)=>`C ${o[r][1].x}, ${o[r][1].y} ${o[(r+1)%e.length][0].x}, ${o[(r+1)%e.length][0].y} ${e[(r+1)%e.length].x}, ${e[(r+1)%e.length].y}`)).join(" ")}"`)},beginShape=()=>svg5._path=[],lineTo=(e,s)=>svg5._path.push(`L${svg5._round(e)},${svg5._round(s)}`),moveTo=(e,s)=>svg5._path.push(`M${svg5._round(e)},${svg5._round(s)}`),vertex=(e,s)=>0==svg5._path.length?moveTo(e,s):lineTo(e,s),bezierVertex=(e,s,r,t,o,n)=>svg5._path.push(`C ${svg5._round(e)} ${svg5._round(s)}, ${svg5._round(r)} ${svg5._round(t)}, ${svg5._round(o)} ${svg5._round(n)}`),cubicVertex=(e,s,r,t)=>svg5._path.push(`S ${svg5._round(e)} ${svg5._round(s)}, ${svg5._round(r)} ${svg5._round(t)}`),quadraticVertex=(e,s,r,t)=>svg5._path.push(`Q ${svg5._round(e)} ${svg5._round(s)}, ${svg5._round(r)} ${svg5._round(t)}`),endShape=e=>svg5._addElement("path",`d="${svg5._path.join(" ")}${e?" Z":""}"`),lerp=(e,s,r)=>e*(1-r)+s*r,map=(e,s,r,t,o)=>lerp(t,o,(e-s)/(r-s)),constrain=(e,s,r)=>e<s?s:e>r?r:e,radians=e=>e/360*(2*Math.PI),degrees=e=>e/(2*Math.PI)*360,randomSeed=e=>svg5._prng=svg5._initAlea(e),random=(e,s)=>void 0===e?svg5._prng():e.length?e[svg5._prng()*e.length|0]:s||0===s?e+svg5._prng()*(s-e):svg5._prng()*e,randInt=(e,s)=>0|random(e,s),randBool=(e=.5)=>random()<e,noiseSeed=e=>svg5._simplex=svg5._initSimplexNoise(e),noise1D=e=>svg5._simplex.noise2D(e,0),noise2D=(e,s)=>svg5._simplex.noise2D(e,s),noise3D=(e,s,r)=>svg5._simplex.noise3D(e,s,r),noise4D=(e,s,r,t)=>svg5._simplex.noise4D(e,s,r,t),noise=function(){return svg5._simplex[`noise${constrain(arguments.length,1,4)}D`](...arguments)},beginGroup=()=>{svg5.html+=`<g${svg5._getTransform()}>`,svg5._transform.push([])},endGroup=()=>{svg5._transform.pop(),svg5.html+="</g>"},translate=(e,s)=>svg5._addTransform(`translate(${svg5._round(e)}, ${svg5._round(s)})`),rotate=e=>svg5._addTransform(`rotate(${svg5._round(e)})`),scale=(e,s)=>svg5._addTransform(s?`scale(${svg5._round(e)}, ${svg5._round(s)})`:`scale(${svg5._round(e)})`),push=beginGroup,pop=endGroup,save=()=>{const e=new Blob([getHTML()],{type:"image/svg+xml;charset=utf-8"}),s=URL.createObjectURL(e),r=document.createElement("a");r.href=s,r.download=`${svg5._id}.svg`,document.body.appendChild(r),r.click(),document.body.removeChild(r)};"undefined"!=typeof module&&(svg5.createSVG=createSVG,svg5.getHTML=getHTML,svg5.render=render,svg5.precision=precision,svg5.addStyle=addStyle,svg5.addDef=addDef,svg5.clear=clear,svg5.background=background,svg5.opacity=opacity,svg5.fill=fill,svg5.noFill=noFill,svg5.stroke=stroke,svg5.strokeWidth=strokeWidth,svg5.strokeWeight=strokeWeight,svg5.strokeCap=strokeCap,svg5.strokeJoin=strokeJoin,svg5.strokeDashArray=strokeDashArray,svg5.noStroke=noStroke,svg5.setAttribute=setAttribute,svg5.removeAttribute=removeAttribute,svg5.clearAttributes=clearAttributes,svg5.circle=circle,svg5.ellipse=ellipse,svg5.rect=rect,svg5.square=square,svg5.point=point,svg5.polyline=polyline,svg5.line=line,svg5.polygon=polygon,svg5.triangle=triangle,svg5.quad=quad,svg5.regularPolygon=regularPolygon,svg5.arc=arc,svg5.spline=spline,svg5.beginShape=beginShape,svg5.moveTo=moveTo,svg5.lineTo=lineTo,svg5.vertex=vertex,svg5.bezierVertex=bezierVertex,svg5.cubicVertex=cubicVertex,svg5.quadraticVertex=quadraticVertex,svg5.endShape=endShape,svg5.beginGroup=beginGroup,svg5.endGroup=endGroup,svg5.lerp=lerp,svg5.map=map,svg5.constrain=constrain,svg5.radians=radians,svg5.degrees=degrees,svg5.randomSeed=randomSeed,svg5.random=random,svg5.randInt=randInt,svg5.randBool=randBool,svg5.noiseSeed=noiseSeed,svg5.noise1D=noise1D,svg5.noise2D=noise2D,svg5.noise3D=noise3D,svg5.noise4D=noise4D,svg5.noise=noise,svg5.translate=translate,svg5.rotate=rotate,svg5.scale=scale,svg5.push=push,svg5.pop=pop,svg5.save=save,module.exports=svg5);