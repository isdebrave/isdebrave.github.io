"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[133],{6706:function(t,e,n){var r=n(4316),a=n(4160),l=n(917);const o=(0,r.Z)("ul",{target:"e9pzd2b1"})("margin:10px 0;display:flex;justify-content:",(t=>{let{linkTag:e}=t;return e?"center":null}),";gap:10px;"),i=(0,r.Z)("li",{target:"e9pzd2b0"})("background-color:black;color:white;padding:",(t=>{let{linkTag:e}=t;return e?null:"2px 5px"}),";border-radius:5px;&>a{display:block;padding:2px 5px;}");e.Z=t=>{const{list:e,linkTag:n=!1}=t;return(0,l.tZ)(o,{linkTag:n},e.map((t=>(0,l.tZ)(i,{key:t,linkTag:n},n?(0,l.tZ)(a.rU,{to:"/category?tag="+t},t):t))))}},1941:function(t,e,n){n.r(e),n.d(e,{default:function(){return y}});var r=n(7294),a=n(917);var l=()=>{const t=(0,r.useRef)(null);return(0,r.useEffect)((()=>{if(null===t.current)return;const e=document.createElement("script"),n={src:"https://utteranc.es/client.js",repo:"isdebrave/isdebrave.github.io","issue-term":"pathname",label:"Comment",theme:"github-light",crossorigin:"anonymous",async:"true"};Object.entries(n).forEach((t=>{let[n,r]=t;e.setAttribute(n,r)})),t.current.appendChild(e)}),[]),(0,a.tZ)("div",{ref:t})},o=n(4316),i=n(4160);const s=(0,o.Z)("aside",{target:"e117foos1"})({name:"1fjvyd0",styles:"position:fixed;right:50px;top:50px;margin:100px 0 0 70px;width:200px;&>hr{margin:10px 0;border:none;border-top:1px solid rgba(0, 0, 0, 0.2);}@media (max-width: 1400px){display:none;}"}),d=(0,o.Z)("li",{target:"e117foos0"})({name:"1kp1rfr",styles:"overflow:hidden;white-space:nowrap;text-overflow:ellipsis;margin:10px 0"});var c=()=>{const{0:t,1:e}=(0,r.useState)([]);return(0,r.useEffect)((()=>{const t=document.getElementById("post-content"),n=Array.from(t.querySelectorAll("h1, h2, h3"));n.forEach((t=>{t.id=t.textContent})),e(n)}),[]),(0,a.tZ)(s,null,(0,a.tZ)("h3",null,"목차"),(0,a.tZ)("hr",null),(0,a.tZ)("ul",{id:"toc-list"},t.map((t=>(0,a.tZ)(d,{key:t.textContent},(0,a.tZ)(i.rU,{to:"#"+t.textContent},t.textContent))))))},p=n(1795);const u=(0,o.Z)("div",{target:"emd4wsx1"})({name:"1qr6l8q",styles:"text-align:center;max-width:768px;margin:0 auto;background-color:#eeebe0;color:black;color-scheme:light;.markdown-body{box-sizing:border-box;min-width:200px;max-width:768px;margin:0 auto;padding:45px;}@media (max-width: 768px){.markdown-body{padding:15px;}}"}),g=(0,o.Z)("div",{target:"emd4wsx0"})({name:"1xlla2r",styles:"h1,h2,h3{scroll-margin-top:80px;}"});var m=t=>{const{id:e,html:n}=t;return(0,a.tZ)(u,{id:e,className:"markdown-body"},(0,a.tZ)(g,{dangerouslySetInnerHTML:{__html:n}}))},h=n(8032);const x=(0,o.Z)("div",{target:"e18ybjk50"})({name:"nz6054",styles:"max-height:400px;text-align:center;.gatsby-image-wrapper{max-width:768px;height:100%;border-radius:7px;overflow:hidden;object-fit:cover;}"});var b=t=>{const{image:e}=t;return(0,a.tZ)(x,null,(0,a.tZ)(h.G,{image:e,alt:"postBackground"}))},Z=n(6706);var f=t=>{const{title:e,date:n,categories:r}=t;return(0,a.tZ)("div",{style:{textAlign:"center"}},(0,a.tZ)("h1",null,e),(0,a.tZ)("span",null,n),(0,a.tZ)(Z.Z,{list:r,linkTag:!0}))};var y=t=>{const{frontmatter:e,html:n}=t.data.allMarkdownRemark.edges[0].node,{gatsbyImageData:r}=e.thumbnail.childImageSharp;return(0,a.tZ)(p.Z,null,(0,a.tZ)(f,{title:e.title,date:e.date,categories:e.categories}),(0,a.tZ)(b,{image:r}),(0,a.tZ)(m,{id:"post-content",html:n}),(0,a.tZ)(l,null),(0,a.tZ)(c,null))}}}]);
//# sourceMappingURL=component---src-templates-post-template-tsx-4a66afc16e3cf64e4023.js.map