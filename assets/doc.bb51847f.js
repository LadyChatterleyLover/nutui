import{c as t,f as n,t as e,C as d,o as r}from"./vendor.00965e04.js";const o={class:"markdown-body"},l=n("h1",null,"Pullrefresh组件",-1),s=n("h3",null,"介绍",-1),a=n("p",null,"纵向可支持下拉刷新和上拉加载，横向可支持左滑更新、右滑加载更多",-1),i=n("h3",null,"安装",-1),h=n("pre",null,[n("code",{class:"language-javascript"},"import { createApp } from 'vue';\nimport { PullRefresh } from '@nutui/nutui';\n\nconst app = createApp();\napp.use(PullRefresh);\n")],-1),u=n("h2",null,"代码演示",-1),c=n("h3",null,"纵向",-1),f={class:"language-html"},p=n("pre",null,[n("code",{class:"language-javascript"},"setup() {\n    const refresh = done => {\n      console.log('上拉加载')\n      setTimeout(() => {\n        done();\n      }, 1000);\n    };\n\n    const downRefresh = done => {\n      console.log('下拉刷新')\n      setTimeout(() => {\n        done();\n      }, 1000);\n    }\n    return { refresh, downRefresh };\n}\n")],-1),v=n("h3",null,"横向",-1),g={class:"language-html"},m=d('<pre><code class="language-javascript">setup() {\n    const refresh = done =&gt; {\n      console.log(&#39;上拉加载&#39;)\n      setTimeout(() =&gt; {\n        done();\n      }, 1000);\n    };\n\n    const downRefresh = done =&gt; {\n      console.log(&#39;下拉刷新&#39;)\n      setTimeout(() =&gt; {\n        done();\n      }, 1000);\n    }\n    return { refresh, downRefresh };\n}\n</code></pre><h2>API</h2><h3>Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>useWindow</td><td>将滚动侦听器添加到 window 否则侦听组件的父节点</td><td>Boolean</td><td>true</td></tr><tr><td>containerId</td><td>在 useWindow 属性为 false 的时候，自定义设置节点ID</td><td>String</td><td>‘’</td></tr><tr><td>disabled</td><td>组件是否激活</td><td>Boolean</td><td>true</td></tr><tr><td>direction</td><td>滚动的方向，‘vertical’ 纵向、‘horizontal’ 横向</td><td>String</td><td>‘vertical’</td></tr><tr><td>pullingText</td><td>&#39;下拉’文案</td><td>Object</td><td>{top: ‘下拉刷新’, bottom: ‘上拉加载’,left: ‘左滑刷新’, right: ‘右滑加载’}</td></tr><tr><td>loosingText</td><td>&#39;释放’文案</td><td>Object</td><td>{top: ’松手释放刷新’, bottom: ‘松手释放刷新’,left: ‘释放刷新’, right: ‘加载更多’}</td></tr><tr><td>loadingText</td><td>&#39;加载中’文案</td><td>Object</td><td>{top: ‘加载中…’, bottom: ‘加载中…’,left: ‘加载中…’, right: ‘加载中…’}</td></tr></tbody></table><h3>Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>refresh</td><td>纵向-上拉加载、横向-右滑加载更多时触发</td><td>done() 函数，在数据更新完成以后，需要调用 done() 函数将组件状态初始化</td></tr><tr><td>downRefresh</td><td>纵向-下拉刷新、横向-左滑刷新时触发</td><td>done() 函数，在数据更新完成以后，需要调用 done() 函数将组件状态初始化</td></tr></tbody></table>',6),b={setup:d=>(d,b)=>(r(),t("div",o,[l,s,a,i,h,u,c,n("pre",null,[n("code",f,'<div class="vertical">\n    <nut-pullrefresh\n        @refresh="refresh"\n        @down-refresh="downRefresh"\n        :useWindow="false"\n        containerId="pull"\n    >\n        <div class="content" id="pull">\n            <div class="main">\n                <div\n                    class="text-data"\n                    v-for="item in [1, 2, 3, 4, 5, 6, 7, 8, 9]"\n                    :key="item"\n                    >我是测试数据 '+e(d.item)+"</div>\n            </div>\n        </div>\n    </nut-pullrefresh>\n</div>\n",1)]),p,v,n("pre",null,[n("code",g,'<div class="horizontal">\n    <nut-pullrefresh\n        @refresh="refresh"\n        @down-refresh="downRefresh"\n        :useWindow="false"\n        containerId="pullH"\n        direction="horizontal"\n    >\n        <div class="contentH" id="pullH">\n        <div class="mainH">\n            <div\n            class="text-data"\n            v-for="item in [1, 2, 3, 4, 5, 6, 7, 8, 9]"\n            :key="item"\n            >我是测试数据 '+e(d.item)+"</div\n            >\n        </div>\n        </div>\n    </nut-pullrefresh>\n</div>\n",1)]),m]))};export default b;