var e=Object.defineProperty,a=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,l=(a,t,s)=>t in a?e(a,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):a[t]=s;import{p as n,a as i,o as c,c as u,r,b as o,d,e as v,f as y,n as h,g as p,h as x,u as m,t as f,i as g,F as w,j as k,k as b,l as V,m as $,w as j,q as M,s as F,v as C,x as O,y as E,z as _}from"./vendor.9af56e81.js";n("data-v-d415dcd8"),i();const A={expose:[],setup:e=>(e,a)=>{const t=r("router-view");return c(),u(t)}};n("data-v-c3262ec2");const D={class:"graph-wrapper"},S={class:"price"},L={key:0,class:"current-price"},P=V('<div class="axis-x" data-v-c3262ec2><div class="x-item" data-v-c3262ec2>Янв</div><div class="x-item" data-v-c3262ec2>Фев</div><div class="x-item" data-v-c3262ec2>Март</div><div class="x-item" data-v-c3262ec2>Апр</div><div class="x-item" data-v-c3262ec2>Май</div><div class="x-item" data-v-c3262ec2>Июн</div><div class="x-item" data-v-c3262ec2>Июл</div><div class="x-item" data-v-c3262ec2>Авг</div><div class="x-item" data-v-c3262ec2>Сен</div><div class="x-item" data-v-c3262ec2>Окт</div><div class="x-item" data-v-c3262ec2>Ноя</div><div class="x-item" data-v-c3262ec2>Дек</div></div>',1),B={class:"footer"},I={class:"container"},T={key:0,class:"price"};i();const z={expose:[],props:{points:Array,duration:Number,id:String,currency:String},setup(e){const n=e,{points:i,duration:r}=n;o(400),o(400),o(0),o(0);const V=o(0),$=d({width:1e3,height:400,x:-30,y:0}),j=v((()=>r/i.length));let M=d({isMount:!1,saved:null,selled:null,values:v((()=>[...i].map((e=>e[1])))),maxValue:v((()=>[...i].reduce(((e,a)=>null===e||+a[1]>e?+a[1]:e),null))),minValue:v((()=>[...i].reduce(((e,a)=>null===e||e>a[1]?a[1]:e),null))),steps:v((()=>[...i].length))}),F=v((()=>[{x:0,value:M.minValue,y:M.minValue&&M.maxValue?J(0,M.minValue).y:0},{x:0,value:M.maxValue,y:M.minValue&&M.maxValue?J(0,M.maxValue).y:0},{x:0,value:M.minValue&&M.maxValue?M.minValue+(M.maxValue-M.minValue)/2:0,y:M.minValue&&M.maxValue?J(0,M.minValue+(M.maxValue-M.minValue)/2).y:0}]));const C=v((()=>i.reduce(((e,a)=>(e.push(J(a[0],a[1])),e)),[]))),O=v((()=>C.value.reduce(((e,a,t,s)=>{if(t){const l=s[t-1],n=a;e.push(`M${l.x} ${l.y}, ${n.x} ${n.y}`)}return e}),[]))),E=v((()=>C.value.reduce(((e,a,t,s)=>{if(t&&t<=V.value){const l=s[t-1],n=a;e+=`${l.x} ${l.y}, ${n.x} ${n.y} `}return e}),"")));v((()=>[...O.value].filter(((e,a)=>a<V.value))));const _=v((()=>[...i].filter(((e,a)=>e===M.saved||e===M.selled)).map((e=>((e,n)=>{for(var i in n||(n={}))t.call(n,i)&&l(e,i,n[i]);if(a)for(var i of a(n))s.call(n,i)&&l(e,i,n[i]);return e})({value:e[1]},J(e[0],e[1])))))),A=v((()=>i[V.value]));v((()=>+(V.value>0?i[V.value][1]-i[V.value-1][1]:0).toFixed(2)));const z=o(!1),R=v((()=>M.saved&&M.selled?{value:M.selled[1]-M.saved[1],perc:100*(M.selled[1]-M.saved[1])/M.saved[1]}:null));function U(e){e+1<M.steps?V.value=e+1:(z.value=!1,null==M.selled&&(M.selled=i[M.steps-1]))}const Y=o(null);function q(){z.value=!0,N()}function N(){U(V.value),z.value&&setTimeout((()=>{N()}),1e3*j.value)}function G(){M.saved=i[V.value]}function H(){M.selled=i[V.value]}function J(e,a){const t=($.width-35-0)/M.steps,s=($.height-80-20)/(M.maxValue-M.minValue);return{x:0+e*t,y:$.height-40-a*s+M.minValue*s}}function K(){const{width:e,height:a}=Y.value.getBoundingClientRect();$.width=Math.round(e),$.height=Math.round(a)}return y((()=>{const{width:e,height:a}=Y.value.getBoundingClientRect();V.value=0,$.width=Math.round(e),$.height=Math.round(a),window.addEventListener("resize",K),h((()=>{q()}))})),p((()=>{window.removeEventListener("resize",K)})),(e,a)=>(c(),u(w,null,[x("div",D,[x("div",S,[m(A)||m(M).selled?(c(),u("div",L,f(m(M).selled?+m(M).selled[1].toFixed(2)+(n.currency?" "+n.currency:" ₽"):m(A)[1].toLocaleString()+(n.currency?" "+n.currency:" ₽")),1)):g("",!0)]),x("div",{ref:Y,class:"graph-container"},[P,(c(),u("svg",{class:"graph",width:m($).width+10,height:m($).height,viewBox:`${m($).x} ${m($).y} ${m($).width+10} ${m($).height}`,fill:"none",xmlns:"http://www.w3.org/2000/svg"},[x("path",{class:"axis",d:`M0 ${m($).height}, ${m($).width} ${m($).height}`},null,8,["d"]),(c(!0),u(w,null,k(m(F),(e=>(c(),u(w,{key:e.value},[x("path",{class:"y-line",d:`M0 ${e.y}, ${m($).width} ${e.y}`},null,8,["d"]),x("text",{x:"-25",y:e.y+4,class:"y-text"},f(Math.round(e.value)),9,["y"])],64)))),128)),x("path",{class:"axis",d:`M0 ${m($).height}, 0 0`},null,8,["d"]),(c(!0),u(w,null,k(m(_),((e,a)=>(c(),u(w,{key:a},[x("circle",{cx:e.x,cy:e.y,r:"5",fill:"red",class:"point-circle"},null,8,["cx","cy"]),x("line",{x1:e.x,y1:e.y-30,x2:e.x,y2:m($).height,stroke:"black"},null,8,["x1","y1","x2","y2"]),x("line",{x1:e.x-5,y1:e.y-30,x2:e.x+5,y2:e.y-30,stroke:"black"},null,8,["x1","y1","x2","y2"]),x("text",{"text-anchor":"end",x:e.x+8,y:e.y-40,class:"point-text"},f(e.value),9,["x","y"])],64)))),128)),x("polyline",{class:"line-path","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",points:m(E)},null,8,["points"])],8,["width","height","viewBox"]))],512)]),x("div",B,[x("div",I,[m(R)?(c(),u("div",T,[m(R)?(c(),u("div",{key:0,class:["current-diff",{up:m(R).value>0,down:m(R).value<0}]},[0!==m(R).value?(c(),u("div",{key:0,class:["arrow",{up:m(R).value>0,down:m(R).value<0}]},null,2)):g("",!0),b(" "+f(+Math.abs(m(R).value).toFixed(2))+" "+f(n.currency?" "+n.currency:" ₽")+" ("+f(+Math.abs(m(R).perc).toFixed(2))+"%) ",1)],2)):g("",!0)])):g("",!0),z.value||m(M).steps-1===V.value?g("",!0):(c(),u("button",{key:1,class:"button",onClick:q}," Начать ")),z.value&&!m(M).saved?(c(),u("button",{key:2,class:"button",onClick:G}," Купить ")):g("",!0),z.value&&m(M).saved&&!m(R)?(c(),u("button",{key:3,class:"button",style:{background:"#151D2A"},onClick:H}," Продать ")):g("",!0)])])],64))},__scopeId:"data-v-c3262ec2"};n("data-v-6575a526");const R={class:"app-container"},U={class:"container"},Y={key:0,class:"title-container"},q={class:"subtitle"},N={class:"container"};i();const G={expose:[],setup(e){const a=M(),t=d({points:[],duration:40,currency:"$"});let s=[[0,10],[10,30],[20,20],[30,50],[40,20]];s=new Array(365),s.fill([0,0]);let l=o(null);async function n(e){const a=await fetch(`data/${e}.json`).then((e=>e.json())),l=a.reduce(((e,a)=>{var t;return e[(t=new Date(a["<DATE>"]),(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate())-Date.UTC(t.getFullYear(),0,0))/24/60/60/1e3)-1]=a["<CLOSE>"],e}),{});let n=a[0]["<CLOSE>"];t.points.push(...s.map(((e,a,t)=>{const s=null!=l[a]?l[a]:n;return n=s,[a,s]})))}async function i(){try{const e=await async function(){try{return await fetch("data/settings.json").then((e=>e.json()))}catch(e){}}();if(t.duration=e.time||40,!Array.isArray(e.sources))return Promise.reject();if(l.value=e.sources.find((e=>e.file===a.params.id)),!l.value)return Promise.reject();t.currency=l.value.currency,await n(l.value.file)}catch(e){}}return $((()=>{i()})),j((()=>a.params.id),(e=>{t.points=[],h((()=>{i()}))})),(e,s)=>{const n=r("router-link");return c(),u("div",R,[x("header",{class:"header",style:{background:m(l)?m(l).color:void 0}},[x("div",U,[x(n,{class:"back-btn",to:"/"}),m(l)?(c(),u("div",Y,[x("div",null,f(m(l).title),1),x("div",q,f(m(l).short)+" "+f(m(l).year),1)])):g("",!0)])],4),x("div",N,[m(t).points&&m(t).points.length?(c(),u(z,{points:m(t).points,duration:m(t).duration,id:m(a).params.id,key:m(a).params.id,currency:m(t).currency},null,8,["points","duration","id","currency"])):g("",!0)])])}},__scopeId:"data-v-6575a526"};const H=C();n("data-v-e3a7462e");const J={class:"container"},K=x("h1",{class:"h1"},"Выберите компанию",-1),Q={key:0,class:"items"};i();const W={expose:[],setup(e){const a=d({items:[],isFullscreen:!1});function t(){F.isEnabled&&(a.isFullscreen=!F.isFullscreen,F.toggle())}return $((async()=>{const e=await async function(){try{return await fetch("data/settings.json").then((e=>e.json()))}catch(e){}}();a.items=e.sources})),(e,s)=>{const l=r("router-link");return c(),u("div",J,[x("button",{class:["fullscreen-icon",{off:m(a).isFullscreen}],onClick:t},null,2),K,m(a).items?(c(),u("div",Q,[(c(!0),u(w,null,k(m(a).items,(e=>(c(),u("div",{class:"item",style:{background:e.color},key:e.file},[x(l,{to:`/${e.file}`},{default:H((()=>[b(f(e.title)+" "+f(e.year),1)])),_:2},1032,["to"])],4)))),128))])):g("",!0)])}},__scopeId:"data-v-e3a7462e"},X=O({routes:[{path:"",component:W},{path:"/:id",component:G}],history:E()}),Z=_(A);Z.use(X),Z.mount("#app");
