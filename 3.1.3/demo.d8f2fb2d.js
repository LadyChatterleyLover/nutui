import{c as e}from"./mobile.624baa27.js";import{m as l,r as n,o as s,e as a,j as r,k as t,g as u}from"./vendor.e1f99099.js";import"./index.84d39d93.js";const{createDemo:d}=e("price");var o=d({setup(){const e=l(0);return setInterval((()=>{e.value=1e7*Math.random()}),1e3),{price:e}}});const i={class:"demo"},c=u("h2",null,"基本用法",-1),m=u("h2",null,"有人民币符号，无千位分隔",-1),p=u("h2",null,"带人民币符号，有千位分隔，保留小数点后三位",-1),f=u("h2",null,"异步随机变更",-1);o.render=function(e,l,u,d,o,h){const b=n("nut-price"),v=n("nut-cell");return s(),a("div",i,[c,r(v,null,{default:t((()=>[r(b,{price:0,"need-symbol":!1,thousands:!0})])),_:1}),m,r(v,null,{default:t((()=>[r(b,{price:10010.01,"need-symbol":!0,thousands:!1},null,8,["price"])])),_:1}),p,r(v,null,{default:t((()=>[r(b,{price:15213.1221,"decimal-digits":3,"need-symbol":!0,thousands:!0},null,8,["price"])])),_:1}),f,r(v,null,{default:t((()=>[r(b,{price:e.price,"decimal-digits":3,"need-symbol":!0,thousands:!0},null,8,["price"])])),_:1})])};export{o as default};