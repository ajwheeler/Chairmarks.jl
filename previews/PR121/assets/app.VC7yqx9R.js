import{R as p}from"./chunks/theme.BCJYtcOq.js";import{R as o,a6 as u,a7 as c,a8 as l,d as f,u as d,v as m,s as h,a9 as g,aa as A,ab as v,a4 as P,ac as R,ad as w,ae as y,af as C,ag as b,ah as E,ai as S}from"./chunks/framework.ByuELAKZ.js";function i(e){if(e.extends){const a=i(e.extends);return{...a,...e,async enhanceApp(t){a.enhanceApp&&await a.enhanceApp(t),e.enhanceApp&&await e.enhanceApp(t)}}}return e}const s=i(p),T=f({name:"VitePressApp",setup(){const{site:e,lang:a,dir:t}=d();return m(()=>{h(()=>{document.documentElement.lang=a.value,document.documentElement.dir=t.value})}),e.value.router.prefetchLinks&&g(),A(),v(),s.setup&&s.setup(),()=>P(s.Layout)}});async function D(){globalThis.__VITEPRESS__=!0;const e=j(),a=_();a.provide(R,e);const t=w(e.route);return a.provide(y,t),a.component("Content",C),a.component("ClientOnly",b),Object.defineProperties(a.config.globalProperties,{$frontmatter:{get(){return t.frontmatter.value}},$params:{get(){return t.page.value.params}}}),s.enhanceApp&&await s.enhanceApp({app:a,router:e,siteData:E}),{app:a,router:e,data:t}}function _(){return l(T)}function j(){let e=o,a;return u(t=>{let n=c(t),r=null;return n&&(e&&(a=n),(e||a===n)&&(n=n.replace(/\.js$/,".lean.js")),r=import(n)),o&&(e=!1),r},s.NotFound)}o&&D().then(({app:e,router:a,data:t})=>{a.go().then(()=>{S(a.route,t.site),e.mount("#app")})});export{D as createApp};
