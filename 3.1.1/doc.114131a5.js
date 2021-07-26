var e=Object.defineProperty,t=Object.defineProperties,s=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,r=(t,s,a)=>s in t?e(t,s,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[s]=a,n=(e,t)=>{for(var s in t||(t={}))c.call(t,s)&&r(e,s,t[s]);if(a)for(var s of a(t))o.call(t,s)&&r(e,s,t[s]);return e},i=(e,a)=>t(e,s(a));import{n as d,h as l,v as m,d as u,_,i as p}from"./index.684b6a5f.js";import{d as h,r as v,c as g,o as f,a as E,b as k,w as b,e as A,v as I,f as V,g as j,F as w,h as D,i as L,j as U,t as O,k as P,l as y,m as T,T as R,n as C,p as x,u as S,q as N,s as B,x as H,y as F,z as Y,A as W,B as X,S as G,C as K,D as J,E as M,G as z,H as Q}from"./vendor.7295d1e3.js";var q=h({name:"app"});q.render=function(e,t,s,a,c,o){const r=v("router-view");return f(),g(r)};const Z=h({name:"search",setup(){const e=E({nav:d,navList:[],searchIndex:0,searchList:[],searchVal:"",searchCName:""});k((()=>{d.forEach((t=>{t.packages.forEach((t=>{e.navList.push(t)}))}))})),b((()=>e.searchVal),(t=>{t?e.searchList=e.navList.filter((e=>{if(!1===e.show)return!1;return new RegExp(t,"gi").test(e.name+" "+e.cName+e.desc)})):(e.searchCName="",e.searchIndex=0,e.searchList=[])}));return{data:e,onfocus:e=>{},choseList:t=>{let s=e.searchIndex;40==t.keyCode&&s++,38==t.keyCode&&s--,s<0&&(s=0);const a=e.searchList;if(a.length>0){const c=a[s]&&a[s].name;c&&(e.searchCurName=c,e.searchIndex=s,13==t.keyCode&&(e.$router.push({path:"/"+a[s].name}),e.searchCurName="",e.searchIndex=0,e.searchVal=""))}},onblur:t=>{setTimeout((()=>{e.searchList=[],e.searchVal=""}),200)},checklist:()=>{e.searchVal="",e.searchCurName="",e.searchIndex=0}}}}),$={class:"search-box"},ee={class:"search-list"};Z.render=function(e,t,s,a,c,o){const r=v("router-link");return f(),g("div",$,[A(V("input",{type:"text",class:"search-input",placeholder:"在 NutUI 中搜索","onUpdate:modelValue":t[1]||(t[1]=t=>e.data.searchVal=t),onFocus:t[2]||(t[2]=(...t)=>e.onfocus&&e.onfocus(...t)),onBlur:t[3]||(t[3]=(...t)=>e.onblur&&e.onblur(...t)),onKeyup:t[4]||(t[4]=(...t)=>e.choseList&&e.choseList(...t))},null,544),[[I,e.data.searchVal]]),A(V("ul",ee,[(f(!0),g(w,null,D(e.data.searchList,((t,s)=>(f(),g("li",{class:e.data.searchCurName==t.name?"cur":"",onClick:s=>e.checklist(t),key:s},[V(r,{to:t.name.toLowerCase()},{default:L((()=>[U(O(t.name)+" ",1),V("span",null,O(t.cName),1)])),_:2},1032,["to"])],10,["onClick"])))),128))],512),[[j,e.data.searchList.length>0]])])};class te{constructor(){this.currentRoute=P("/"),this._themeColor=P("black")}static getInstance(){if(null==this.instance){this.instance=new te;let e=localStorage.getItem("nutui-theme-color");e&&(this.instance.themeColor.value=e)}return this.instance}get themeColor(){return this._themeColor}set themeColor(e){this._themeColor=e}}var se=h({name:"doc-header",components:{Search:Z},setup(){let e=[];d.forEach((t=>{e.push(...t.packages)}));const t=E({theme:"black",verson:"3.x",navIndex:0,activeIndex:0,isShowSelect:!1}),s=y((()=>{let t=te.getInstance().currentRoute.value;return function(s){const a=s.toLowerCase();return"component"===a?(t.indexOf("-taro")>-1&&(t=t.split("-taro")[0]),e.findIndex((e=>e.name.toLowerCase()===t))>-1):t===a||a.includes(t)}})),a=y((()=>function(){return`doc-header-${te.getInstance().themeColor.value}`}));return{header:l,versions:m,version:"3.1.1",data:t,toHome:()=>{te.getInstance().currentRoute.value="/"},isActive:s,checkTheme:(e,s)=>{t.isShowSelect=!1,t.activeIndex=s,t.verson=e.name,window.location.href=e.link},themeName:a,handleFocus:()=>{console.log(1)},handleFocusOut:()=>{t.isShowSelect=!1}}}});const ae={class:"header-logo"},ce=V("span",{class:"logo-border"},null,-1),oe={class:"version"},re={class:"header-nav"},ne={class:"nav-box"},ie={class:"nav-list"},de={href:"demo.html#/"},le={class:"nav-item"},me={class:"header-select-hd"},ue=V("i",{class:""},null,-1),_e={class:"header-select-bd"},pe=V("li",{class:"nav-item"},[V("a",{class:"user-link",target:"_blank",href:"https://github.com/jdf2e/nutui"}),V("a",{class:"gitee",target:"_blank",href:"https://gitee.com/jd-platform-opensource/nutui"},[V("img",{src:"https://storage.360buyimg.com/imgtools/158748bd85-17a80c60-e547-11eb-995a-377f565026ba.png",alt:"Fork me on Gitee"})])],-1);se.render=function(e,t,s,a,c,o){const r=v("Search"),n=v("router-link");return f(),g("div",{class:["doc-header",e.themeName()]},[V("div",ae,[V("a",{class:"logo-link",href:"#",onClick:t[1]||(t[1]=(...t)=>e.toHome&&e.toHome(...t))}),ce,V("span",oe,"v"+O(e.version),1)]),V("div",re,[V(r),V("div",ne,[V("ul",ie,[V("li",{class:["nav-item",{active:e.isActive(e.header[0].name)}]},[V(n,{to:e.header[0].path},{default:L((()=>[U(O(e.header[0].cName),1)])),_:1},8,["to"])],2),V("li",{class:["nav-item",{active:e.isActive(e.header[1].name)}]},[V(n,{to:e.header[1].path},{default:L((()=>[U(O(e.header[1].cName),1)])),_:1},8,["to"])],2),V("li",{class:["nav-item",{active:e.isActive(e.header[2].name)}]},[V("a",de,O(e.header[2].cName),1)],2),V("li",{class:["nav-item",{active:e.isActive(e.header[3].name)}]},[V(n,{to:e.header[3].name},{default:L((()=>[U(O(e.header[3].cName),1)])),_:1},8,["to"])],2),V("li",le,[V("div",{onFocus:t[2]||(t[2]=(...t)=>e.handleFocus&&e.handleFocus(...t)),onFocusout:t[3]||(t[3]=(...t)=>e.handleFocusOut&&e.handleFocusOut(...t)),tabindex:"0",class:["header-select-box",[1==e.data.isShowSelect?"select-up":"select-down"]],onClick:t[4]||(t[4]=T((t=>e.data.isShowSelect=!e.data.isShowSelect),["stop"]))},[V("div",me,[U(O(e.data.verson),1),ue]),V(R,{name:"fade"},{default:L((()=>[A(V("div",_e,[(f(!0),g(w,null,D(e.versions,((t,s)=>(f(),g("div",{class:["header-select-item",{active:e.data.activeIndex===s}],key:s,onClick:T((s=>e.checkTheme(t)),["stop"])},O(t.name),11,["onClick"])))),128))],512),[[j,e.data.isShowSelect]])])),_:1})],34)]),pe])])])],2)};var he=h({name:"doc-nav",setup:()=>({isActive:y((()=>function(e){const t=te.getInstance().currentRoute.value;return(t.indexOf("-taro")>-1?t.split("-taro")[0]:t)==e.toLowerCase()})),nav:E(d),docs:E(u),currentRoute:te.getInstance().currentRoute})});const ve={class:"doc-nav"},ge={key:0};he.render=function(e,t,s,a,c,o){const r=v("router-link");return f(),g("div",ve,[V("ol",null,[V("li",null,O(e.docs.name),1),V("ul",null,[(f(!0),g(w,null,D(e.docs.packages,(t=>A((f(),g("li",{class:{active:e.isActive(t.name)},key:t},[t.isLink?(f(),g("a",{key:1,href:t.name,target:"_blank"},O(t.cName),9,["href"])):(f(),g(r,{key:0,to:t.name.toLowerCase()},{default:L((()=>[U(O(t.cName),1)])),_:2},1032,["to"]))],2)),[[j,t.show]]))),128))])]),(f(!0),g(w,null,D(e.nav,(t=>(f(),g("ol",{key:t},[V("li",null,O(t.name),1),V("ul",null,[(f(!0),g(w,null,D(t.packages,(t=>(f(),g(w,{key:t},[t.show?(f(),g("li",ge,[V(r,{to:t.name.toLowerCase(),class:{active:e.isActive(t.name)}},{default:L((()=>[U(O(t.name)+"  ",1),V("b",null,O(t.cName),1)])),_:2},1032,["to","class"])])):C("",!0)],64)))),128))])])))),128))])};var fe=h({name:"doc-footer",setup(){const e=E({themeList:[{name:"热情红",color:"red"},{name:"暗黑风",color:"black"},{name:"纯净白",color:"white"}],activeIndex:0,isShowSelect:!1});e.activeIndex=e.themeList.findIndex((e=>e.color==te.getInstance().themeColor.value));return{themeColor:te.getInstance().themeColor,data:e,clickOut:()=>{document.addEventListener("click",(e=>{console.log("e.target",e.target)}),!1)},checkTheme:(t,s)=>{e.isShowSelect=!1,e.activeIndex=s,te.getInstance().themeColor.value=t,localStorage.setItem("nutui-theme-color",t)}}}});const Ee={class:"doc-footer-content"},ke=V("div",{class:"doc-footer-list"},[V("img",{class:"doc-footer-logo",src:"data:image/png;base64,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"})],-1),be={class:"doc-footer-list"},Ae=V("h4",{class:"doc-footer-title"},"相关资源",-1),Ie={class:"doc-footer-item"},Ve={class:"sub-link",target:"_blank",href:"https://vuejs.org"},je=U("Vue"),we={class:"doc-footer-item"},De={class:"sub-link",target:"_blank",href:"https://vitejs.dev"},Le=U("Vite"),Ue={class:"doc-footer-item"},Oe={class:"sub-link",target:"_blank",href:"https://relay.jd.com"},Pe=U("Relay"),ye={class:"doc-footer-item"},Te={class:"sub-link",target:"_blank",href:"https://taro.jd.com"},Re=U("Taro"),Ce={class:"doc-footer-item"},xe={class:"sub-link",target:"_blank",href:"https://ling.jd.com/jdw"},Se=U("羚珑"),Ne={class:"doc-footer-list"},Be=V("h4",{class:"doc-footer-title"},"社区",-1),He={class:"doc-footer-item"},Fe={class:"sub-link",target:"_blank",href:"https://github.com/jdf2e/nutui"},Ye=U("GitHub"),We={class:"doc-footer-item"},Xe={class:"sub-link",target:"_blank",href:"https://www.zhihu.com/column/c_1263837684834889728"},Ge=U("知乎专栏"),Ke={class:"doc-footer-item vx-item"},Je=U("微信"),Me=V("i",{class:"icon-vx"},null,-1),ze=V("div",{class:"vx-box"},[V("p",{class:"vx-desc"},"微信交流群"),V("p",{class:"vx-desc"},"扫码添加好友"),V("img",{class:"img-code",src:"/nutui/3.1.1/vx-code.7e4891d1.png"}),V("p",{class:"vx-desc"},[U("回复"),V("span",{class:"vx-red"},"NutUI"),U("即刻进群")])],-1),Qe={class:"doc-footer-list"},qe=V("h4",{class:"doc-footer-title"},"关于我们",-1),Ze={class:"doc-footer-item"},$e={class:"sub-link",href:"#/joinus"},et=U("加入我们"),tt={class:"doc-footer-item"},st={class:"sub-link",href:"mailto:nutui@jd.com"},at=U("联系我们"),ct={class:"doc-footer-item"},ot={class:"sub-link",target:"_blank",href:"https://github.com/jdf2e/nutui/issues"},rt=U("意见反馈"),nt={class:"doc-footer-item"},it={class:"sub-link",target:"_blank",href:"https://fe.jd.com"},dt=U("京东前端"),lt=V("div",{class:"doc-footer-select-hd"},[V("i",{class:"icon-color"}),U("主题换肤")],-1),mt={class:"doc-footer-select-bd"},ut=V("p",{class:"doc-footer-desc"},"2021 京东零售 - 基础业务体验部. All Rights Reserved.",-1);fe.render=function(e,t,s,a,c,o){const r=x("hover");return f(),g("div",{class:["doc-footer",`doc-footer-${e.themeColor}`]},[V("div",Ee,[ke,V("div",be,[Ae,V("div",Ie,[A(V("a",Ve,[je],512),[[r]])]),V("div",we,[A(V("a",De,[Le],512),[[r]])]),V("div",Ue,[A(V("a",Oe,[Pe],512),[[r]])]),V("div",ye,[A(V("a",Te,[Re],512),[[r]])]),V("div",Ce,[A(V("a",xe,[Se],512),[[r]])])]),V("div",Ne,[Be,V("div",He,[A(V("a",Fe,[Ye],512),[[r]])]),V("div",We,[A(V("a",Xe,[Ge],512),[[r]])]),V("div",Ke,[A(V("span",null,[Je],512),[[r]]),Me,ze])]),V("div",Qe,[qe,V("div",Ze,[A(V("a",$e,[et],512),[[r]])]),V("div",tt,[A(V("a",st,[at],512),[[r]])]),V("div",ct,[A(V("a",ot,[rt],512),[[r]])]),V("div",nt,[A(V("a",it,[dt],512),[[r]])])]),V("div",{class:"doc-footer-list",onClick:t[1]||(t[1]=T((t=>e.data.isShowSelect=!e.data.isShowSelect),["stop"]))},[lt,A(V("div",mt,[(f(!0),g(w,null,D(e.data.themeList,((t,s)=>(f(),g("div",{class:["doc-footer-select-item",{active:e.data.activeIndex===s}],key:s,onClick:T((a=>e.checkTheme(t.color,s)),["stop"])},[V("i",{class:`circle-${t.color}`},null,2),U(O(t.name),1)],10,["onClick"])))),128))],512),[[j,e.data.isShowSelect]])])]),ut],2)};var _t=h({name:"doc-demo-preview",props:{url:String}});const pt={class:"doc-demo-preview"};_t.render=function(e,t,s,a,c,o){return f(),g("div",pt,[V("iframe",{src:e.url,frameborder:"0"},null,8,["src"])])};var ht=h({name:"doc",components:{[se.name]:se,[he.name]:he,[fe.name]:fe,[_t.name]:_t},setup(){const e=S(),t=N(),s=["/intro","/start","/theme","/joinus","/starttaro"],a=E({demoUrl:"demo.html",curKey:"vue",tabs:[{key:"vue",text:"vue"},{key:"taro",text:"taro"}]}),c=y((()=>{let e=[];return d.map((t=>{t.packages.forEach((t=>{let{tarodoc:s,name:a}=t;s&&(e.push(a.toLowerCase()),e.push(`${a.toLowerCase()}-taro`))}))})),e})),o=e=>e.path.indexOf("taro")>-1,r=y((()=>c.value.findIndex((t=>t===e.path.substr(1)))>-1)),l=e=>{const{origin:t,pathname:s}=window.location;te.getInstance().currentRoute.value=e.name,a.demoUrl=`${t}${s.replace("index.html","")}demo.html#${e.path}`};return k((()=>{l(e),a.curKey=o(e)?"taro":"vue"})),B((e=>{l(e),a.curKey=o(e)?"taro":"vue"})),i(n({},H(a)),{handleTabs:s=>{a.curKey=s,(()=>{const s=e.path;t.replace(o(e)?s.substr(0,s.length-5):`${s}-taro`)})()},isShow:()=>!s.includes(e.path),isShowTaroDoc:r})}});const vt=W("data-v-5416d0a4");F("data-v-5416d0a4");const gt={class:"doc-content"},ft={class:"doc-content-document"},Et={key:0,class:"doc-content-tabs"},kt={key:1,class:"doc-content-tabs"},bt=V("div",{class:"tab-item cur"},"vue/taro",-1);Y();const At=vt(((e,t,s,a,c,o)=>{const r=v("doc-header"),n=v("doc-nav"),i=v("router-view"),d=v("doc-demo-preview");return f(),g("div",null,[V(r),V(n),V("div",gt,[V("div",ft,[e.isShow()&&e.isShowTaroDoc?(f(),g("div",Et,[(f(!0),g(w,null,D(e.tabs,(t=>(f(),g("div",{class:["tab-item",{cur:e.curKey===t.key}],key:t.key,onClick:s=>e.handleTabs(t.key)},O(t.text),11,["onClick"])))),128))])):C("",!0),e.isShow()&&!e.isShowTaroDoc?(f(),g("div",kt,[bt])):C("",!0),V(i)]),V(d,{url:e.demoUrl},null,8,["url"])])])}));ht.render=At,ht.__scopeId="data-v-5416d0a4";const It={baseUrl:"",isPrd:!0};It.isPrd=!0,It.baseUrl="https://nutui.jd.com";class Vt{checkStatus(e){const t={state:0,value:{},message:""};return!e||200!==e.status&&304!==e.status&&400!==e.status||(t.value=e.data),t}request(e,t,s){return a=this,c=null,o=function*(){const a=Object.assign({"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"},s.header);try{const c={method:t,url:It.baseUrl+e,data:s,params:s,timeout:3e4,crossDomain:!0,headers:a},o=yield X(c);return this.checkStatus(o)}catch(c){return console.error(c),null}},new Promise(((e,t)=>{var s=e=>{try{n(o.next(e))}catch(s){t(s)}},r=e=>{try{n(o.throw(e))}catch(s){t(s)}},n=t=>t.done?e(t.value):Promise.resolve(t.value).then(s,r);n((o=o.apply(a,c)).next())}));var a,c,o}}class jt{constructor(){this.httpClient=new Vt}getArticle(){return this.httpClient.request("/openapi/article?pageIndex=1&pageSize=100","get",{})}getCases(){return this.httpClient.request("/openapi/cases?pageIndex=1&pageSize=100","get",{})}}var wt=h({name:"doc",components:{[se.name]:se,[fe.name]:fe},setup(){const e=E({articleList:[],communityArticleList:[],tabData:[{title:"全部文章"}],activeIndex:0,showNutuiCat:!1}),t=e=>{te.getInstance().currentRoute.value=e.name};k((()=>{const s=S();t(s);const a=new jt;X("https://relayapi.jd.com/").then((t=>{t&&(e.showNutuiCat=!0)})),a.getArticle().then((t=>{0==(null==t?void 0:t.state)&&t.value.data.arrays.forEach((t=>{1==t.type?e.articleList.push(t):e.communityArticleList.push(t)}))}))})),B((e=>{t(e)}));return i(n({},H(e)),{clickTab:t=>{e.activeIndex=t},toLink:e=>{window.open("//jelly.jd.com/article/"+e)}})}});const Dt=W("data-v-0623f22a");F("data-v-0623f22a");const Lt=V("div",{class:"resource-main"},[V("div",{class:"resource-main-content"},[V("h3",{class:"sub-title"},"资源"),V("p",{class:"sub-desc"},"这里汇总了 NutUI 相关的所有的资源")])],-1),Ut={class:"resource-content"},Ot={key:0,class:"resource-block"},Pt=V("h4",{class:"sub-title"},"模板资源",-1),yt=V("p",{class:"sub-desc"},[U(" 目前已提供京东大促模板工程 "),V("a",{target:"_blank",href:"https://coding.jd.com/jdc-activity/Nutui-Cat"},"NutUI-Cat"),U("，含有开发京东大促项目过程中使用到的通用模块、组件、模板，可以在未来的大促项目中复用，达到提效降本的效果。 ")],-1),Tt={key:1,class:"resource-block"},Rt=V("h4",{class:"sub-title"},"设计资源",-1),Ct=V("p",{class:"sub-desc"},[U("这里提供 NUTUI 相关设计资源和设计工具的下载，更多设计资源正在整理和完善中。你可以在这个"),V("span",{class:"sub-red"},"地址"),U("中反馈对新版本 Sketch Symbols 组件的意见。")],-1),xt=V("div",{class:"no-data"},[V("img",{class:"nodata-img-joy",src:"/nutui/3.1.1/img-joy.6d8227fe.png"}),V("p",{class:"nodata-desc"},"敬请期待")],-1),St={key:2,class:"resource-block"},Nt=V("h4",{class:"sub-title"},"设计资源",-1),Bt=V("p",{class:"sub-desc"},"想要了解 NutUI 设计体系背后的故事？如何才能更好的应用？你可以查阅下述我们为你精挑细选的文章。也欢迎关注 NutUI 官方专栏，这里常有关于 NutUI 设计体系下相关话题内容的最新分享和讨论。",-1),Ht={class:"tab-box"},Ft={class:"tab-hd"},Yt={class:"tab-bd"},Wt={class:"design-title"},Xt={class:"resource-block"},Gt=V("h4",{class:"sub-title"},"社区文章",-1),Kt=V("p",{class:"sub-desc"},null,-1),Jt={class:"article-box"};Y();const Mt=Dt(((e,t,s,a,c,o)=>{const r=v("doc-header"),n=v("doc-footer"),i=x("hover");return f(),g(w,null,[V(r),Lt,V("div",Ut,[e.showNutuiCat?(f(),g("div",Ot,[Pt,yt])):C("",!0),0===e.articleList.length?(f(),g("div",Tt,[Rt,Ct,xt])):(f(),g("div",St,[Nt,Bt,V("div",Ht,[V("div",Ft,[(f(!0),g(w,null,D(e.tabData,((t,s)=>(f(),g("div",{class:["tab-hd-item",{active:e.activeIndex===s}],key:s,onClick:t=>e.clickTab(s)},O(t.title),11,["onClick"])))),128))]),A(V("div",Yt,[(f(!0),g(w,null,D(e.articleList,(t=>(f(),g("div",{class:"design-item",key:t.id,onClick:s=>e.toLink(t.id)},[V("img",{class:"img-design",src:t.cover_image},null,8,["src"]),A(V("p",Wt,[U(O(t.title),1)],512),[[i]])],8,["onClick"])))),128))],512),[[j,0===e.activeIndex]])])])),V("div",Xt,[Gt,Kt,V("ul",Jt,[(f(!0),g(w,null,D(e.communityArticleList,(e=>(f(),g("li",{class:"article-item",key:e.id},[V("a",{class:"article-link",target:"_blank",href:e.link},O(e.title)+" - "+O(e.user_name),9,["href"])])))),128))])])]),V(n)],64)}));wt.render=Mt,wt.__scopeId="data-v-0623f22a";var zt=h({name:"main",components:{[se.name]:se,[fe.name]:fe},setup(){const e=E({articleList:new Array,casesImages:new Array,currentCaseItem:{},currentCaseIndex:0,localTheme:localStorage.getItem("nutui-theme-color")});let t=null;k((()=>{const s=new jt;s.getArticle().then((t=>{0==(null==t?void 0:t.state)&&(e.articleList=t.value.data.arrays.map((e=>{if(1==e.type)return e})).filter((e=>e)))})),s.getCases().then((s=>{var a;0==(null==s?void 0:s.state)&&(e.casesImages=s.value.data.arrays.map((e=>{var t;return(null==(t=e.cover_image)?void 0:t.length)&&(e.cover_image=e.cover_image.split(",")[0]),e})),(null==(a=e.casesImages)?void 0:a.length)&&(e.currentCaseItem=e.casesImages[e.currentCaseIndex]),setTimeout((()=>{t=new G(".doc-content-cases-content__list",{direction:"horizontal",slidesPerView:"auto",initialSlide:1,loop:!0,on:{slideChange:function(){let t=this.realIndex;e.currentCaseIndex=0===t?e.casesImages.length-1:t-1,setTimeout((()=>{e.currentCaseItem=e.casesImages[e.currentCaseIndex]}),230)}}})}),500))}))}));const s=y((()=>function(){return`doc-content-${te.getInstance().themeColor.value}`})),a=y((()=>function(){return te.getInstance().themeColor.value}));return i(n({toIntro:function(){js.push({path:"/intro"})}},H(e)),{themeName:s,themeNameValue:a,toLink:e=>{window.open("//jelly.jd.com/article/"+e)},onLeft:()=>{t.slidePrev()},onRight:()=>{t.slideNext()}})}});const Qt=W("data-v-6f01a373");F("data-v-6f01a373");const qt={class:"doc-content-index"},Zt={class:"content-left"},$t=V("div",{class:"content-title"}," NutUI ",-1),es=V("div",{class:"content-smile"},null,-1),ts=V("div",{class:"content-subTitle"},"京东风格的轻量级移动端 Vue 组件库",-1),ss={class:"content-button"},as=V("div",{class:"leftButtonText"},"开始使用",-1),cs=K('<div class="rightButton" data-v-6f01a373><div class="rightButtonText" data-v-6f01a373>扫码体验</div><div class="qrcodepart" data-v-6f01a373><div class="qrcode-text" data-v-6f01a373> 请使用手机扫码体验 </div><div class="qrcode" data-v-6f01a373></div></div></div>',1),os=V("iframe",{style:{"margin-left":"20px"},src:"https://ghbtns.com/github-btn.html?user=jdf2e&repo=nutui&type=star&count=true&size=large",frameborder:"0",scrolling:"0",width:"170",height:"30",title:"GitHub"},null,-1),rs=V("div",{class:"doc-content-features"},[V("div",{class:"doc-content-hd"},[V("h4",{class:"doc-content-title"},"平台特色")]),V("ul",{class:"features-list"},[V("li",{class:"features-item"},[V("img",{src:"/nutui/3.1.1/img-home-features1.2ef25c62.png"}),V("p",{class:"features-title"},"京东风格"),V("p",{class:"features-desc"},"遵循京东 App 10.0 设计规范")]),V("li",{class:"features-item"},[V("img",{src:"/nutui/3.1.1/img-home-features5.54142c5e.png"}),V("p",{class:"features-title"},"适配多端"),V("p",{class:"features-desc a-l"},"基于 Taro 轻松开发多端小程序")]),V("li",{class:"features-item"},[V("img",{src:"/nutui/3.1.1/img-home-features2.37cc104b.png"}),V("p",{class:"features-title"},"组件丰富"),V("p",{class:"features-desc a-l"},"提供 70+ 组件，覆盖绝大多数业务场景")]),V("li",{class:"features-item"},[V("img",{src:"/nutui/3.1.1/img-home-features3.7207ff14.png"}),V("p",{class:"features-title"},"前沿技术"),V("p",{class:"features-desc"},"vue3 vite2.x typescript")]),V("li",{class:"features-item"},[V("img",{src:"/nutui/3.1.1/img-home-features4.e29dd764.png"}),V("p",{class:"features-title"},"贴心通道"),V("p",{class:"features-desc"},[U("社区维护 高效服务"),V("br"),U("技术支持 经验沉淀")])])])],-1),ns=V("div",{class:"doc-content-taro"},[V("div",{class:"doc-content-hd"},[V("h4",{class:"doc-content-title"},"一处代码 多端运行")]),V("div",{class:"taro-content"},[V("div",{class:"taro-left"}),V("div",{class:"taro-right"},[V("div",{class:"right-img"}),V("p",{class:"taro-desc"},[U(" 基于 Taro 对 NutUI 每一个组件进行深度适配"),V("br"),U(" 支持开发多端小程序 ")])])])],-1),is={key:0,class:"doc-content-cases"},ds=V("div",{class:"doc-content-hd"},[V("h4",{class:"doc-content-title"},"赋能案例")],-1),ls={class:"doc-content-cases-content"},ms={class:"doc-content-cases-content__main"},us={class:"doc-content-cases-content__main-iconinfo"},_s=V("img",{src:"/nutui/3.1.1/iphone-cases.9e49d331.png",alt:"",srcset:""},null,-1),ps={class:"doc-content-cases-content__list"},hs={key:1,class:"doc-content-more"},vs=V("div",{class:"doc-content-hd"},[V("h4",{class:"doc-content-title"}),V("a",{class:"sub-more",href:"#/resource"},"More")],-1),gs={class:"more-list"},fs={class:"more-title"};Y();const Es=Qt(((e,t,s,a,c,o)=>{const r=v("doc-header"),n=v("doc-footer"),i=x("hover");return f(),g(w,null,[V(r),V("div",{class:["doc-content",e.themeName()]},[V("div",qt,[V("div",Zt,[$t,es,ts,V("div",ss,[V("div",{class:"leftButton",onClick:t[1]||(t[1]=(...t)=>e.toIntro&&e.toIntro(...t))},[as]),cs,os])])]),rs,ns,e.casesImages.length?(f(),g("div",is,[ds,V("div",ls,[V("div",ms,[V("div",{class:"doc-content-cases-content__main-lefticon",onClick:t[2]||(t[2]=(...t)=>e.onLeft&&e.onLeft(...t))}),V("div",us,[V("h4",null,O(e.currentCaseItem.product_name),1),V("p",null,O(e.currentCaseItem.product_info),1),V("img",{src:e.currentCaseItem.logo},null,8,["src"])]),V("div",{class:"doc-content-cases-content__main-iphone",style:{backgroundImage:"url("+e.currentCaseItem.cover_image+")"}},[_s],4),V("div",{class:"doc-content-cases-content__main-righticon",onClick:t[3]||(t[3]=(...t)=>e.onRight&&e.onRight(...t))})]),V("div",ps,[V("div",{class:["swiper-wrapper",["black"==e.themeNameValue()?"noShadow":""]]},[(f(!0),g(w,null,D(e.casesImages,((e,t)=>(f(),g("div",{class:"swiper-slide",key:t},[V("img",{src:e.cover_image},null,8,["src"])])))),128))],2)])])])):C("",!0),e.articleList.length?(f(),g("div",hs,[vs,V("ul",gs,[(f(!0),g(w,null,D(e.articleList.slice(0,4),(t=>(f(),g("li",{class:"more-item",key:t.id,onClick:s=>e.toLink(t.id)},[V("img",{src:t.cover_image},null,8,["src"]),A(V("p",fs,[U(O(t.title),1)],512),[[i]])],8,["onClick"])))),128))])])):C("",!0)],2),V(n)],64)}));zt.render=Es,zt.__scopeId="data-v-6f01a373";const ks=[],bs={"/src/packages/__VUE/actionsheet/doc.md":()=>_((()=>__import__("./doc.b820e927.js")),["3.1.1/doc.b820e927.js","3.1.1/vendor.7295d1e3.js"]),"/src/packages/__VUE/address/doc.md":()=>_((()=>__import__("./doc.0cf9a160.js")),["3.1.1/doc.0cf9a160.js","3.1.1/vendor.7295d1e3.js"]),"/src/packages/__VUE/avatar/doc.md":()=>_((()=>__import__("./doc.5bda831e.js")),["3.1.1/doc.5bda831e.js","3.1.1/vendor.7295d1e3.js"]),"/src/packages/__VUE/backtop/doc.md":()=>_((()=>__import__("./doc.68ed9933.js")),["3.1.1/doc.68ed9933.js","3.1.1/vendor.7295d1e3.js"]),"/src/packages/__VUE/button/doc.md":()=>_((()=>__import__("./doc.5c81dcd4.js")),["3.1.1/doc.5c81dcd4.js","3.1.1/vendor.7295d1e3.js"]),"/src/packages/__VUE/calendar/doc.md":()=>_((()=>__import__("./doc.020c68be.js")),["3.1.1/doc.020c68be.js","3.1.1/vendor.7295d1e3.js"]),"/src/packages/__VUE/cell/doc.md":()=>_((()=>__import__("./doc.390e1c93.js")),["3.1.1/doc.390e1c93.js","3.1.1/vendor.7295d1e3.js"]),"/src/packages/__VUE/checkbox/doc.md":()=>_((()=>__import__("./doc.29fbf7fa.js")),["3.1.1/doc.29fbf7fa.js","3.1.1/vendor.7295d1e3.js"]),"/src/packages/__VUE/collapse/doc.md":()=>_((()=>__import__("./doc.d9443ade.js")),["3.1.1/doc.d9443ade.js","3.1.1/vendor.7295d1e3.js"]),"/src/packages/__VUE/countup/doc.md":()=>_((()=>__import__("./doc.e3285ba8.js")),["3.1.1/doc.e3285ba8.js","3.1.1/vendor.7295d1e3.js"]),"/src/packages/__VUE/datepicker/doc.md":()=>_((()=>__import__("./doc.7c37d8ae.js")),["3.1.1/doc.7c37d8ae.js","3.1.1/vendor.7295d1e3.js"]),"/src/packages/__VUE/dialog/doc.md":()=>_((()=>__import__("./doc.31eab3be.js")),["3.1.1/doc.31eab3be.js","3.1.1/vendor.7295d1e3.js"]),"/src/packages/__VUE/drag/doc.md":()=>_((()=>__import__("./doc.30731829.js")),["3.1.1/doc.30731829.js","3.1.1/vendor.7295d1e3.js"]),"/src/packages/__VUE/icon/doc.md":()=>_((()=>__import__("./doc.4ba44ffb.js")),["3.1.1/doc.4ba44ffb.js","3.1.1/vendor.7295d1e3.js"]),"/src/packages/__VUE/infiniteloading/doc.md":()=>_((()=>__import__("./doc.b08c34a8.js")),["3.1.1/doc.b08c34a8.js","3.1.1/vendor.7295d1e3.js"]),"/src/packages/__VUE/input/doc.md":()=>_((()=>__import__("./doc.84b61f8c.js")),["3.1.1/doc.84b61f8c.js","3.1.1/vendor.7295d1e3.js"]),"/src/packages/__VUE/inputnumber/doc.md":()=>_((()=>__import__("./doc.69714bd1.js")),["3.1.1/doc.69714bd1.js","3.1.1/vendor.7295d1e3.js"]),"/src/packages/__VUE/layout/doc.md":()=>_((()=>__import__("./doc.1631a579.js")),["3.1.1/doc.1631a579.js","3.1.1/vendor.7295d1e3.js"]),"/src/packages/__VUE/menu/doc.md":()=>_((()=>__import__("./doc.1ec87107.js")),["3.1.1/doc.1ec87107.js","3.1.1/vendor.7295d1e3.js"]),"/src/packages/__VUE/navbar/doc.md":()=>_((()=>__import__("./doc.db759562.js")),["3.1.1/doc.db759562.js","3.1.1/vendor.7295d1e3.js"]),"/src/packages/__VUE/notify/doc.md":()=>_((()=>__import__("./doc.5d0049d0.js")),["3.1.1/doc.5d0049d0.js","3.1.1/vendor.7295d1e3.js"]),"/src/packages/__VUE/overlay/doc.md":()=>_((()=>__import__("./doc.6373ef86.js")),["3.1.1/doc.6373ef86.js","3.1.1/vendor.7295d1e3.js"]),"/src/packages/__VUE/picker/doc.md":()=>_((()=>__import__("./doc.cb8b01cb.js")),["3.1.1/doc.cb8b01cb.js","3.1.1/vendor.7295d1e3.js"]),"/src/packages/__VUE/popup/doc.md":()=>_((()=>__import__("./doc.66c88190.js")),["3.1.1/doc.66c88190.js","3.1.1/vendor.7295d1e3.js"]),"/src/packages/__VUE/price/doc.md":()=>_((()=>__import__("./doc.b82c4141.js")),["3.1.1/doc.b82c4141.js","3.1.1/vendor.7295d1e3.js"]),"/src/packages/__VUE/pullrefresh/doc.md":()=>_((()=>__import__("./doc.24088be7.js")),["3.1.1/doc.24088be7.js","3.1.1/vendor.7295d1e3.js"]),"/src/packages/__VUE/radio/doc.md":()=>_((()=>__import__("./doc.a8705adf.js")),["3.1.1/doc.a8705adf.js","3.1.1/vendor.7295d1e3.js"]),"/src/packages/__VUE/radiogroup/doc.md":()=>_((()=>__import__("./doc.503e771f.js")),["3.1.1/doc.503e771f.js","3.1.1/vendor.7295d1e3.js"]),"/src/packages/__VUE/range/doc.md":()=>_((()=>__import__("./doc.c4c102dd.js")),["3.1.1/doc.c4c102dd.js","3.1.1/vendor.7295d1e3.js"]),"/src/packages/__VUE/rate/doc.md":()=>_((()=>__import__("./doc.7100900b.js")),["3.1.1/doc.7100900b.js","3.1.1/vendor.7295d1e3.js"]),"/src/packages/__VUE/shortpassword/doc.md":()=>_((()=>__import__("./doc.1da54bd5.js")),["3.1.1/doc.1da54bd5.js","3.1.1/vendor.7295d1e3.js"]),"/src/packages/__VUE/steps/doc.md":()=>_((()=>__import__("./doc.2891e4d4.js")),["3.1.1/doc.2891e4d4.js","3.1.1/vendor.7295d1e3.js"]),"/src/packages/__VUE/swipe/doc.md":()=>_((()=>__import__("./doc.5613b841.js")),["3.1.1/doc.5613b841.js","3.1.1/vendor.7295d1e3.js"]),"/src/packages/__VUE/swiper/doc.md":()=>_((()=>__import__("./doc.5b2c76ca.js")),["3.1.1/doc.5b2c76ca.js","3.1.1/vendor.7295d1e3.js"]),"/src/packages/__VUE/swiperitem/doc.md":()=>_((()=>__import__("./doc.126d1ec9.js")),["3.1.1/doc.126d1ec9.js","3.1.1/vendor.7295d1e3.js"]),"/src/packages/__VUE/switch/doc.md":()=>_((()=>__import__("./doc.b1a94cdf.js")),["3.1.1/doc.b1a94cdf.js","3.1.1/vendor.7295d1e3.js"]),"/src/packages/__VUE/tab/doc.md":()=>_((()=>__import__("./doc.a70f324d.js")),["3.1.1/doc.a70f324d.js","3.1.1/vendor.7295d1e3.js"]),"/src/packages/__VUE/tabbar/doc.md":()=>_((()=>__import__("./doc.b7cd3a17.js")),["3.1.1/doc.b7cd3a17.js","3.1.1/vendor.7295d1e3.js"]),"/src/packages/__VUE/temp/doc.md":()=>_((()=>__import__("./doc.1d5bfcb4.js")),["3.1.1/doc.1d5bfcb4.js","3.1.1/vendor.7295d1e3.js"]),"/src/packages/__VUE/textarea/doc.md":()=>_((()=>__import__("./doc.a420e084.js")),["3.1.1/doc.a420e084.js","3.1.1/vendor.7295d1e3.js"]),"/src/packages/__VUE/toast/doc.md":()=>_((()=>__import__("./doc.91d19e93.js")),["3.1.1/doc.91d19e93.js","3.1.1/vendor.7295d1e3.js"]),"/src/packages/__VUE/uploader/doc.md":()=>_((()=>__import__("./doc.1e464b1b.js")),["3.1.1/doc.1e464b1b.js","3.1.1/vendor.7295d1e3.js"]),"/src/packages/__VUE/video/doc.md":()=>_((()=>__import__("./doc.e29853b3.js")),["3.1.1/doc.e29853b3.js","3.1.1/vendor.7295d1e3.js"])};for(const Ps in bs){let e=/packages\/__VUE\/(.*)\/doc.md/.exec(Ps)[1];ks.push({path:"/"+e,component:bs[Ps],name:e})}const As={"/src/packages/__VUE/backtop/doc.taro.md":()=>_((()=>__import__("./doc.taro.7b66152a.js")),["3.1.1/doc.taro.7b66152a.js","3.1.1/vendor.7295d1e3.js"]),"/src/packages/__VUE/datepicker/doc.taro.md":()=>_((()=>__import__("./doc.taro.8e181fc5.js")),["3.1.1/doc.taro.8e181fc5.js","3.1.1/vendor.7295d1e3.js"]),"/src/packages/__VUE/dialog/doc.taro.md":()=>_((()=>__import__("./doc.taro.31ce03c2.js")),["3.1.1/doc.taro.31ce03c2.js","3.1.1/vendor.7295d1e3.js"]),"/src/packages/__VUE/drag/doc.taro.md":()=>_((()=>__import__("./doc.taro.9f5b0e4c.js")),["3.1.1/doc.taro.9f5b0e4c.js","3.1.1/vendor.7295d1e3.js"]),"/src/packages/__VUE/infiniteloading/doc.taro.md":()=>_((()=>__import__("./doc.taro.733a9673.js")),["3.1.1/doc.taro.733a9673.js","3.1.1/vendor.7295d1e3.js"]),"/src/packages/__VUE/notify/doc.taro.md":()=>_((()=>__import__("./doc.taro.1436c5de.js")),["3.1.1/doc.taro.1436c5de.js","3.1.1/vendor.7295d1e3.js"]),"/src/packages/__VUE/picker/doc.taro.md":()=>_((()=>__import__("./doc.taro.2da5d738.js")),["3.1.1/doc.taro.2da5d738.js","3.1.1/vendor.7295d1e3.js"]),"/src/packages/__VUE/swiper/doc.taro.md":()=>_((()=>__import__("./doc.taro.a97c00bf.js")),["3.1.1/doc.taro.a97c00bf.js","3.1.1/vendor.7295d1e3.js"]),"/src/packages/__VUE/toast/doc.taro.md":()=>_((()=>__import__("./doc.taro.dfad4d9a.js")),["3.1.1/doc.taro.dfad4d9a.js","3.1.1/vendor.7295d1e3.js"]),"/src/packages/__VUE/uploader/doc.taro.md":()=>_((()=>__import__("./doc.taro.774a7a41.js")),["3.1.1/doc.taro.774a7a41.js","3.1.1/vendor.7295d1e3.js"])};for(const Ps in As){let e=/packages\/__VUE\/(.*)\/doc.taro.md/.exec(Ps)[1];ks.push({path:`/${e}-taro`,component:As[Ps],name:`${e}-taro`})}const Is={"/src/docs/international.md":()=>_((()=>__import__("./international.14c022b8.js")),["3.1.1/international.14c022b8.js","3.1.1/vendor.7295d1e3.js"]),"/src/docs/intro.md":()=>_((()=>__import__("./intro.31c2a923.js")),["3.1.1/intro.31c2a923.js","3.1.1/vendor.7295d1e3.js"]),"/src/docs/joinus.md":()=>_((()=>__import__("./joinus.6cac16af.js")),["3.1.1/joinus.6cac16af.js","3.1.1/vendor.7295d1e3.js"]),"/src/docs/start.md":()=>_((()=>__import__("./start.4472887f.js")),["3.1.1/start.4472887f.js","3.1.1/vendor.7295d1e3.js"]),"/src/docs/starttaro.md":()=>_((()=>__import__("./starttaro.409242fb.js")),["3.1.1/starttaro.409242fb.js","3.1.1/vendor.7295d1e3.js"]),"/src/docs/theme.md":()=>_((()=>__import__("./theme.9bd0cda9.js")),["3.1.1/theme.9bd0cda9.js","3.1.1/vendor.7295d1e3.js"])};for(const Ps in Is){let e=/docs\/(.*).md/.exec(Ps)[1];ks.push({path:"/"+e,component:Is[Ps],name:e})}const Vs=[{path:"/",name:"/",component:zt},{path:"/index",name:"index",component:ht,children:ks},{path:"/resource",name:"resource",component:wt}];Vs.push({name:"notFound",path:"/:path(.*)+",redirect:{name:"/"}});const js=J({history:M(),routes:Vs,scrollBehavior(e){if(e.hash){const t=e.hash.split("#")[1],s=document.getElementById(t);setTimeout((()=>{s&&s.scrollIntoView(!0)}))}}});js.afterEach(((e,t)=>{window.scrollTo(0,0);try{setTimeout((()=>{(new Image).src=`${It.baseUrl}/openapi/point?p=${encodeURIComponent(JSON.stringify(location))}`}),500)}catch(s){}}));const ws={setup:()=>({onlineFun:function(){alert("hello")}})},Ds=W("data-v-c6543ac2");F("data-v-c6543ac2");const Ls=V("p",{class:"online-part"},[V("a",{href:"//gitpod.io/#https://github.com/jdf2e/nutui.git",target:"_blank",class:"online-btn"},"在线运行")],-1);Y();const Us=Ds(((e,t,s,a,c,o)=>(f(),g("div",null,[z(e.$slots,"highlight",{},void 0,!0),z(e.$slots,"default",{},void 0,!0),Ls]))));ws.render=Us,ws.__scopeId="data-v-c6543ac2";const Os={mounted(e){e.addEventListener("mouseover",(()=>{e.style.color="#fa2c19"})),e.addEventListener("mouseleave",(()=>{e.style.color=""}))}};p&&location.replace("demo.html"+location.hash),Q(q).directive("hover",Os).component("demo-block",ws).use(js).mount("#doc");