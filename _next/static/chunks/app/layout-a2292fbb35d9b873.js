(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[177],{1362:(e,t,r)=>{"use strict";r.d(t,{D:()=>i,ThemeProvider:()=>c});var n=r(2115),s=(e,t,r,n,s,a,o,l)=>{let m=document.documentElement,i=["light","dark"];function c(t){var r;(Array.isArray(e)?e:[e]).forEach(e=>{let r="class"===e,n=r&&a?s.map(e=>a[e]||e):s;r?(m.classList.remove(...n),m.classList.add(a&&a[t]?a[t]:t)):m.setAttribute(e,t)}),r=t,l&&i.includes(r)&&(m.style.colorScheme=r)}if(n)c(n);else try{let e=localStorage.getItem(t)||r,n=o&&"system"===e?window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light":e;c(n)}catch(e){}},a=["light","dark"],o="(prefers-color-scheme: dark)",l=n.createContext(void 0),m={setTheme:e=>{},themes:[]},i=()=>{var e;return null!=(e=n.useContext(l))?e:m},c=e=>n.useContext(l)?n.createElement(n.Fragment,null,e.children):n.createElement(u,{...e}),d=["light","dark"],u=e=>{let{forcedTheme:t,disableTransitionOnChange:r=!1,enableSystem:s=!0,enableColorScheme:m=!0,storageKey:i="theme",themes:c=d,defaultTheme:u=s?"system":"light",attribute:b="data-theme",value:v,children:g,nonce:E,scriptProps:w}=e,[S,k]=n.useState(()=>y(i,u)),[C,T]=n.useState(()=>"system"===S?p():S),L=v?Object.values(v):c,A=n.useCallback(e=>{let t=e;if(!t)return;"system"===e&&s&&(t=p());let n=v?v[t]:t,o=r?f(E):null,l=document.documentElement,i=e=>{"class"===e?(l.classList.remove(...L),n&&l.classList.add(n)):e.startsWith("data-")&&(n?l.setAttribute(e,n):l.removeAttribute(e))};if(Array.isArray(b)?b.forEach(i):i(b),m){let e=a.includes(u)?u:null,r=a.includes(t)?t:e;l.style.colorScheme=r}null==o||o()},[E]),_=n.useCallback(e=>{let t="function"==typeof e?e(S):e;k(t);try{localStorage.setItem(i,t)}catch(e){}},[S]),P=n.useCallback(e=>{T(p(e)),"system"===S&&s&&!t&&A("system")},[S,t]);n.useEffect(()=>{let e=window.matchMedia(o);return e.addListener(P),P(e),()=>e.removeListener(P)},[P]),n.useEffect(()=>{let e=e=>{e.key===i&&(e.newValue?k(e.newValue):_(u))};return window.addEventListener("storage",e),()=>window.removeEventListener("storage",e)},[_]),n.useEffect(()=>{A(null!=t?t:S)},[t,S]);let M=n.useMemo(()=>({theme:S,setTheme:_,forcedTheme:t,resolvedTheme:"system"===S?C:S,themes:s?[...c,"system"]:c,systemTheme:s?C:void 0}),[S,_,t,C,s,c]);return n.createElement(l.Provider,{value:M},n.createElement(h,{forcedTheme:t,storageKey:i,attribute:b,enableSystem:s,enableColorScheme:m,defaultTheme:u,value:v,themes:c,nonce:E,scriptProps:w}),g)},h=n.memo(e=>{let{forcedTheme:t,storageKey:r,attribute:a,enableSystem:o,enableColorScheme:l,defaultTheme:m,value:i,themes:c,nonce:d,scriptProps:u}=e,h=JSON.stringify([a,r,m,t,c,i,o,l]).slice(1,-1);return n.createElement("script",{...u,suppressHydrationWarning:!0,nonce:"",dangerouslySetInnerHTML:{__html:"(".concat(s.toString(),")(").concat(h,")")}})}),y=(e,t)=>{let r;try{r=localStorage.getItem(e)||void 0}catch(e){}return r||t},f=e=>{let t=document.createElement("style");return e&&t.setAttribute("nonce",e),t.appendChild(document.createTextNode("*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(t),()=>{window.getComputedStyle(document.body),setTimeout(()=>{document.head.removeChild(t)},1)}},p=e=>(e||(e=window.matchMedia(o)),e.matches?"dark":"light")},3520:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,9324,23)),Promise.resolve().then(r.bind(r,1362))},9324:()=>{}},e=>{var t=t=>e(e.s=t);e.O(0,[533,441,684,358],()=>t(3520)),_N_E=e.O()}]);