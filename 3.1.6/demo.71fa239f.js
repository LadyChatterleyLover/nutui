var t=Object.defineProperty,e=Object.defineProperties,r=Object.getOwnPropertyDescriptors,n=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable,s=(e,r,n)=>r in e?t(e,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[r]=n;import{c}from"./mobile.b0d170d6.js";import{_ as p}from"./index.ccbbeb9f.js";import{a as o,A as i,r as u,e as d,g as f,j as _,k as b,o as v,l as g}from"./vendor.9cc7b6f2.js";const{createDemo:h}=c("steps"),m=h({props:{},setup(){const t=o({current1:1,current2:1,current3:1,current4:1,current5:1});return c=((t,e)=>{for(var r in e||(e={}))l.call(e,r)&&s(t,r,e[r]);if(n)for(var r of n(e))a.call(e,r)&&s(t,r,e[r]);return t})({},i(t)),e(c,r({handleStep:e=>{t[e]>=3?t[e]=1:t[e]+=1}}));var c}}),y={class:"demo padding"},j=f("h2",null,"基本用法",-1),w={class:"steps-wrapper"},x=g("1"),O=g("2"),P=g("3"),S={class:"steps-button"},k=g("下一步"),C=f("h2",null,"标题和描述信息",-1),D={class:"steps-wrapper"},A=g("1"),E={class:"steps-button",style:{"margin-top":"10px"}},I=g("下一步"),q=f("h2",null,"自定义图标",-1),z={class:"steps-wrapper"},B=g("1"),F=g("2"),G=g("3"),H=f("h2",null,"竖向步骤条",-1),J={class:"steps-wrapper",style:{height:"300px",padding:"15px 30px"}},K=g("1"),L=g("2"),M=g("3"),N=f("h2",null,"竖向步骤条",-1),Q={class:"steps-wrapper",style:{height:"300px",padding:"15px 40px"}},R=g("1"),T=g("2"),U=g("3");var V=p(m,[["render",function(t,e,r,n,l,a){const s=u("nut-step"),c=u("nut-steps"),p=u("nut-button");return v(),d("div",y,[j,f("div",w,[_(c,{current:t.current1},{default:b((()=>[_(s,{title:"步骤一"},{default:b((()=>[x])),_:1}),_(s,{title:"步骤二"},{default:b((()=>[O])),_:1}),_(s,{title:"步骤三"},{default:b((()=>[P])),_:1})])),_:1},8,["current"]),f("div",S,[_(p,{type:"danger",onClick:e[0]||(e[0]=e=>t.handleStep("current1"))},{default:b((()=>[k])),_:1})])]),C,f("div",D,[_(c,{current:t.current2},{default:b((()=>[_(s,{title:"步骤一",content:"步骤描述"},{default:b((()=>[A])),_:1}),_(s,{title:"步骤二",content:"步骤描述"}),_(s,{title:"步骤三",content:"步骤描述"})])),_:1},8,["current"]),f("div",E,[_(p,{type:"danger",onClick:e[1]||(e[1]=e=>t.handleStep("current2"))},{default:b((()=>[I])),_:1})])]),q,f("div",z,[_(c,{current:"1"},{default:b((()=>[_(s,{title:"已完成",icon:"service"},{default:b((()=>[B])),_:1}),_(s,{title:"进行中",icon:"people"},{default:b((()=>[F])),_:1}),_(s,{title:"未开始",icon:"location2"},{default:b((()=>[G])),_:1})])),_:1})]),H,f("div",J,[_(c,{direction:"vertical",current:"2"},{default:b((()=>[_(s,{title:"已完成",content:"您的订单已经打包完成，商品已发出"},{default:b((()=>[K])),_:1}),_(s,{title:"进行中",content:"您的订单正在配送途中"},{default:b((()=>[L])),_:1}),_(s,{title:"未开始",content:"收货地址为：北京市经济技术开发区科创十一街18号院京东大厦"},{default:b((()=>[M])),_:1})])),_:1})]),N,f("div",Q,[_(c,{direction:"vertical","progress-dot":"",current:"2"},{default:b((()=>[_(s,{title:"已完成",content:"您的订单已经打包完成，商品已发出"},{default:b((()=>[R])),_:1}),_(s,{title:"进行中",content:"您的订单正在配送途中"},{default:b((()=>[T])),_:1}),_(s,{title:"未开始",content:"<p>收货地址为：</p><p>北京市经济技术开发区科创十一街18号院京东大厦</p>"},{default:b((()=>[U])),_:1})])),_:1})])])}]]);export{V as default};