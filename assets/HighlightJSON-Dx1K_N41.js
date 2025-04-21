import{j as n}from"./index-D_y0Tgoa.js";function s(e){return typeof e!="string"&&(e=JSON.stringify(e,null,2)),e=e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"),e.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g,function(l){let o="number";return/^"/.test(l)?/:$/.test(l)?o="key":o="string":/true|false/.test(l)?o="boolean":/null/.test(l)&&(o="null"),`<span class="json-${o}">${l}</span>`})}const r={fontFamily:"Menlo, Monaco, Consolas, monospace",fontSize:14,background:"#272822",color:"#f8f8f2",padding:"14px 16px",borderRadius:8,margin:"8px 0",overflowX:"auto"},t=`
.json-key { color: #66d9ef; }
.json-string { color: #e6db74; }
.json-number { color: #fd971f; }
.json-boolean { color: #fd5ff1; }
.json-null { color: #f92672; }
`,f=({json:e})=>n.jsxs("div",{style:r,children:[n.jsx("style",{children:t}),n.jsx("code",{dangerouslySetInnerHTML:{__html:s(e)}})]});export{f as H};
