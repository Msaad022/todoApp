var re=Object.defineProperty;var ae=(t,o,r)=>o in t?re(t,o,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[o]=r;var F=(t,o,r)=>(ae(t,typeof o!="symbol"?o+"":o,r),r);import{j as P,r as b,a as ne,R as le}from"./vendor.451d3188.js";const se=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))a(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function r(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerpolicy&&(s.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?s.credentials="include":n.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(n){if(n.ep)return;n.ep=!0;const s=r(n);fetch(n.href,s)}};se();const de="_ComponentApp_ko11b_1";var ie={ComponentApp:de};const j=t=>(t.length!=0?t[t.length-1].id:0)+1,ce=(t,o)=>{const r=new Date;let a={id:o,story:[],storyBool:!1,created:"Time : "+r.toDateString()+" "+r.toLocaleTimeString(),update:"No Update Yet ^_^",text:t.current.value,items:[]};return t.current.value=null,a},ue=(t,o)=>{let r=t.todoData,a,n=[];for(a in o)r=r.filter(s=>(s.storyBool==!0&&s.id==o[a]&&n.push([s.story[0],s.story[1]]),s.id!=o[a]));return[r,n]},me=(t,o,r,a)=>{let n=t.todoData;const s=new Date;for(let l=0;l<n.length;l++)if(n[l].id==o){let{dataItems:u}=a;n[l].text=r.current.value,n[l].update="Last Updateing : "+s.toDateString()+" "+s.toLocaleTimeString(),n[l].items=u}return r.current.value=null,n},fe=(t,o)=>{o=o.split(",");let r=t.todoData,a;for(a in r)if(r[a].id==o[0]){let n=r[a].items[o[1]].isCompleted;r[a].items[o[1]].isCompleted=!n}return r},he="_Content_1wldd_1",pe="_AddTodo_1wldd_27",ye="_TodoMine_1wldd_35",ge="_Actions_1wldd_63",Te="_TodoValue_1wldd_83",ve="_navbar_1wldd_105";var N={Content:he,AddTodo:pe,TodoMine:ye,Actions:ge,TodoValue:Te,navbar:ve};const be="_ItemList_1cfey_1",xe="_rainbow_1cfey_17",_e="_item_1cfey_61",Ce="_isCompleted_1cfey_131";var V={ItemList:be,rainbow:xe,item:_e,isCompleted:Ce};let Se=["#ff0000","#ff3600","#ff6d00","#ffa300","#ffda00","#ecff00","#b6ff00","#7fff00","#48ff00","#12ff00","#00ff24","#00ff5b","#00ff91","#00ffc8","#00ffff","#00c8ff","#0091ff","#005bff","#0024ff","#1200ff","#4800ff","#7f00ff","#b600ff","#ec00ff","#ff00da","#ff00a3","#ff006d","#ff0036"];var ke="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";const X=()=>[r=>Se[r%28],r=>ke[r%52]],e=P.exports.jsx,f=P.exports.jsxs,A=P.exports.Fragment;let w="";const He=t=>{const{dataItems:o}=t.dataitems,[r,a]=X(),n=b.exports.useRef(),s=l=>{n.current.value=l.target.getAttribute("data-text"),w=l.target.getAttribute("data-index")};return f(A,{children:[e("div",{className:V.rainbow,children:o.map((l,u)=>{let d=r(u);return e("div",{className:V.item,children:e("span",{className:l.isCompleted?V.isCompleted:null,"data-index":u,style:{backgroundColor:d,border:"0px solid "+d},"data-text":l.text,onClick:c=>s(c),children:a(u)})},l.key)})}),e(Ie,{textarea:n,updateing:t.updateitems,removed:t.removeitems})]})};function Ie(t){const o=t.updateing,r=t.removed,a=t.textarea,n=()=>{w=r(w),a.current.value=null};return f("div",{className:V.ItemList,children:[e("textarea",{ref:a,placeholder:"Type Your Item",type:"text",defaultValue:t.textitem,onChange:()=>w!=""?o(w,a):null}),e("button",{className:"btn btn-danger",onClick:()=>w!=""?n():null,children:"remove"})]})}let Q;const Ne=t=>{const o=t.items,[r,a]=b.exports.useState({dataItems:o}),n=()=>{let u=j(r.dataItems);a({dataItems:[...r.dataItems,{id:u,text:"default",isCompleted:!1,key:Math.random()+u}]})},s=(u,d)=>{let c=r.dataItems;c[u].text=d.current.value,a({dataItems:c})},l=u=>{let d=r.dataItems;return d=d.filter((c,i)=>i!=u),a({dataItems:d}),[]};return Q=r,f("div",{className:N.Actions,children:[e("div",{className:N.TodoAddItem,children:e("button",{className:"btn btn-primary",onClick:()=>n(),children:"Todo Item"})}),e("div",{className:"displayitems",children:e(He,{updateitems:s,dataitems:r,removeitems:l})})]})},Ae=()=>Q;class De{isfound(o,r){return localStorage.getItem(o)||this.setlocalstorge(o,r),this.showlocal(o)}setlocalstorge(o,r){localStorage.setItem(o,JSON.stringify(r))}deletelocal(o){localStorage.removeItem(o)}showlocal(o){return JSON.parse(localStorage.getItem(o))}}var R=new De;function W(t,o){let r;for(r in o)for(let a in t)if(o[r][1]==t[a].id){let n=t[a].todos;t[a].todos=n.filter(s=>s!=o[r][0])}return t}const J=ne.createContext(0);J.displayName="Todo Context";let Y="";const Be=t=>{let o=[{id:1,story:[1,1],storyBool:!0,created:"Tue Feb 01 2022 2:08:52 PM",update:"No Update Yet ^_^",text:"\u063A\u0633\u0644 \u0627\u0644\u0641\u0636\u0627\u0621 \u0645\u0646 \u0627\u0644\u0627\u062A\u0631\u0628\u0647",items:[{id:1,text:"\u0627\u0633\u062A\u0626\u062C\u0627\u0631 \u0645\u0631\u0643\u0628\u0647 \u0641\u0636\u0627\u0626\u064A\u0647",isCompleted:!0,key:1+64},{id:1,text:"\u0627\u0644\u0635\u0639\u0648\u062F \u0644\u0644\u0641\u0636\u0627\u0621",isCompleted:!1,key:1+65}]}],r=R.isfound("todoData",o);const[a,n]=b.exports.useState({todoData:r}),s={textTodoButton:"Todo",valueTextarea:"",valueItems:""},[l,u]=b.exports.useState({valuesUpdateing:s}),d=R.isfound("stories",[{id:1,title:"\u0645\u0647\u0645\u0627\u062A \u0627\u0644\u0641\u0636\u0627\u0621 \u0627\u0644\u062E\u0627\u0631\u062C\u0649",todos:["1"]}]),[c,i]=b.exports.useState({stories:d}),k=h=>{let p,m=a.todoData;for(p in h)for(let x in m)h[p]==m[x].id&&(m[x].story=[],m[x].storyBool=!1);return m},oe={data:{todosCnt:a,handlerDataTodo:{setTodoHandler:h=>{if(l.valuesUpdateing.textTodoButton=="update"){let m=Ae();n({todoData:me(a,Y,h,m)}),u({valuesUpdateing:s})}else{let m=j(a.todoData);n({todoData:[...a.todoData,ce(h,m)]})}},deletTodoHandler:h=>{let[p,m]=ue(a,h);return n({todoData:p}),m!=""&&i({stories:W(c.stories,m)}),[]},updateTodoHandler:h=>{let p=a.todoData,m="",x;Y=h[0];for(let S=0;S<p.length;S++)p[S].id==Y&&(x=p[S].items,m=p[S].text);return u({valuesUpdateing:{textTodoButton:"update",valueTextarea:m,valueItems:x}}),[]},isCompletedItem:h=>{n({todoData:fe(a,h)})},getTitleStory:h=>{let p=c.stories;for(let m in p)if(h==p[m].id)return p[m].title},removeTitleStory:h=>{i({stories:W(c.stories,[h])}),n({todoData:k([h[0]])})}},storiesHandler:{creatStoryHandler:()=>{let h=j(c.stories);i({stories:[...c.stories,{id:h,title:"Change title",todos:[]}]})},changeTitleHandler:h=>{let p=prompt("Hellow , Change Story Title ^_^ "),m=h.target.getAttribute("data-index"),x=c.stories;p!=null&&p!=""&&(x[m].title=p,i({stories:x}))},removeStoriesHandler:h=>{let p=h.target,m=c.stories;p.checked&&setTimeout(()=>{confirm("Are you sure you want to delete this story")?(n({todoData:k(m[p.id].todos)}),m=m.filter((S,q)=>q!=p.id),i({stories:m})):p.checked=!1},50)},addTodoStory:(h,p)=>{let m=a.todoData,x=c.stories;for(let S in x)p==x[S].id&&x[S].todos.push(...h);for(let S in h)for(let q in m)m[q].id==h[S]&&(m[q].storyBool=!0);i({stories:x}),n({todoData:m})},valState:c},updateValue:l}};return b.exports.useEffect(()=>{R.setlocalstorge("todoData",a.todoData)},[a]),b.exports.useEffect(()=>{R.setlocalstorge("stories",c.stories)},[c]),e(J.Provider,{value:oe,children:t.children})},z=()=>{const{data:t}=b.exports.useContext(J);return[t.handlerDataTodo,t.todosCnt,t.updateValue,t.storiesHandler]},we=()=>{const[{setTodoHandler:t},{},{valuesUpdateing:o}]=z(),r=b.exports.useRef(),a=o.valueTextarea,n=l=>r.current.value=l.target.value;b.exports.useEffect(()=>{r.current.value=a});const s=l=>l.preventDefault();return f("form",{action:"#",onSubmit:l=>s(l),id:"formSubmit",children:[e("div",{className:N.TodoValue,children:e("textarea",{required:!0,onChange:l=>{n(l)},name:"todovalue",ref:r,placeholder:"Type Your Todo "})}),e("div",{className:N.AddTodo,children:e("button",{className:"btn1 btn btn-primary",type:"submit",id:"buttonSubmit",onClick:()=>r.current.value!=""?t(r):null,children:o.textTodoButton})})]})},Ee=t=>{const[{},{},{valuesUpdateing:o}]=z(),r=o.valueItems;return e(A,{children:f("div",{className:N.TodoMine,children:[e("header",{children:o.textTodoButton=="update"?e(Ne,{items:r}):null}),e("section",{children:e(we,{})})]})})},Le="_TableTodo_n22z2_1",Me="_firstTr_n22z2_71",Ue="_titleStory_n22z2_89",qe="_removeTitle_n22z2_109",Ve="_tableItems_n22z2_141";var E={TableTodo:Le,firstTr:Me,titleStory:Ue,removeTitle:qe,tableItems:Ve};let Z,O=!1,$,D;const Re=t=>{const o=t.delettodo,r=t.falsecheckbox,a=t.updatetodo;return D=t.iddel,Z=()=>{let n=o(D());D(n)},$=n=>{let s=a(n);D(s),r()},e("thead",{children:e(ze,{})})},ze=t=>{const o=n=>{document.getElementsByName("removeTodo").forEach(l=>{n!=l.checked&&l.click()})},r=()=>document.getElementById("formSubmit").querySelector("#buttonSubmit").textContent=="Todo",a=()=>{O=!1,document.getElementById("removeAll").checked=!1};return f("tr",{children:[e("th",{children:f("label",{className:"btn btn-danger",htmlFor:"removeAll",children:["removeAll",e("input",{onChange:n=>{o(n.target.checked),O=!O},defaultChecked:O,type:"checkbox",id:"removeAll"})]})}),e("th",{children:e("button",{className:"btn btn-success",onClick:()=>{D().length==1&&r()&&$(D()),a()},children:"edit"})}),e("th",{children:e("button",{className:"btn btn-danger",onClick:()=>{D().length>=1&&r()&&Z(),a()},children:"remove"})})]})},Oe=t=>{const o=t.ischeckedone,r=t.tododata,a=t.iscompleted,n=t.gettitlestory,s=t.removetitlestory,l=d=>{let c=d.target.getAttribute("data-index");a(c)};function u(d,c){d.target.id=="titleStory"?d.target.children[0].style.opacity=c:d.target.style.opacity=c}return e(A,{children:e("tbody",{style:{minHeight:"250px",wordBreak:"break-word"},children:r.map((d,c)=>f("tr",{className:E.firstTr,children:[f("td",{children:[f("div",{style:{textAlign:"left",display:"flex",alignItems:"center"},children:[e("input",{type:"checkbox",id:d.id,"data-count":c,onChange:i=>o(i),name:"removeTodo"}),e("span",{onClick:i=>alert(d.created+" , "+d.update),children:"info"}),d.storyBool&&f("span",{className:E.titleStory,id:"titleStory",onMouseEnter:i=>u(i,1),onMouseLeave:i=>u(i,0),children:[e("span",{className:E.removeTitle,onClick:()=>s(d.story),children:" X "}),n(d.story[1]),console.log(d.story[1])]})]}),e("p",{children:d.text})]}),e("td",{children:e("table",{className:E.tableItems,children:e("tbody",{children:d.items.map((i,k)=>f("tr",{children:[e("td",{children:e("input",{type:"checkbox","data-index":[d.id,k],defaultChecked:i.isCompleted,onChange:H=>l(H)})}),e("td",{style:i.isCompleted?{textDecoration:"line-through"}:null,children:i.text})]},i.key))})})})]},d.id))})})},Fe="_pagination_12pk9_7",Pe="_frame_12pk9_13",je="_slider_12pk9_23",Je="_square_12pk9_49";var B={pagination:Fe,frame:Pe,slider:je,square:Je};const ee=(t,o,r=!1)=>{const a=t,n=Math.ceil(a.length/o);let s=r?-1:0;const[l,u]=b.exports.useState(s),d=b.exports.useRef(),c=y=>{let _=d.current.scrollLeft;y-Math.round(_/35)>=3?d.current.scrollLeft+=35:d.current.scrollLeft-=35},i=(y,_=!1,v=null)=>{y!=l&&y>=-1&&a!=""&&(u(y),_?d.current.scrollLeft=v:c(y+1))},k=y=>{let _=[];for(let v=0;v<y;v++)_[v]=e(Ye,{count:v+1,onclick:()=>i(v)},v);return _};return[(()=>{if(l>=0){let y=[],_=l*o;for(let v=_;v<a.length;v++)v<_+o&&y.push(a[v]);return y}return[]})(),l,e("section",{style:{width:"100%",margin:"15px 0"},children:e("div",{className:B.pagination,children:f("div",{className:B.frame,children:[e("div",{className:B.square,onClick:()=>i(0,!0,0),children:"First"}),r?e(Ge,{onclick:()=>i(-1)}):null,e("div",{className:B.slider,ref:d,children:k(n)}),e("div",{className:B.square,onClick:()=>i(n-1,!0,(n-1)*35),children:"Last"})]})})})]},Ye=t=>e("div",{className:B.square,onClick:t.onclick,children:t.count}),Ge=t=>e("div",{className:B.square,style:{borderRight:"none"},onClick:t.onclick,children:"Add Todo"});let I=[];function Ke(){const[{deletTodoHandler:t,updateTodoHandler:o,isCompletedItem:r,getTitleStory:a,removeTitleStory:n},{todoData:s}]=z(),[l,u,d]=ee(s,3),c=H=>{let y=H.target;return y.checked?I[I.length]=y.id:I=I.filter(_=>_!==y.id),I},i=(H=I)=>(I=H,I),k=()=>{document.getElementsByName("removeTodo").forEach(y=>{y.checked&&(y.checked=!1)})};return b.exports.useEffect(()=>{I=[]},[u]),f("div",{className:E.ParentTable,children:[f("table",{className:E.TableTodo,children:[e(Re,{falsecheckbox:k,updatetodo:o,delettodo:t,iddel:i}),e(Oe,{gettitlestory:a,removetitlestory:n,tododata:l,iscompleted:r,ischeckedone:c})]}),d]})}const Xe="_perentStories_1e057_7",Qe="_framStories_1e057_27",We="_story_1e057_79",Ze="_title_1e057_141",$e="_addTodo_1e057_159",et="_addStories_1e057_161";var L={perentStories:Xe,framStories:Qe,story:We,title:Ze,addTodo:$e,addStories:et};const tt="_opacity_bz3xt_1",ot="_tableStory_bz3xt_23",rt="_addstoryTodo_bz3xt_61",at="_storiesHome_bz3xt_67",nt="_stories_bz3xt_67",lt="_showingTodo_bz3xt_187";var M={opacity:tt,tableStory:ot,addstoryTodo:rt,storiesHome:at,stories:nt,showingTodo:lt},st="/todo-app/assets/imgTodo.70c612a0.svg";class dt extends b.exports.Component{constructor(){super(...arguments);F(this,"state",{toggleEle:!0});F(this,"toggleHandler",()=>{this.setState({toggleEle:!this.state.toggleEle})})}render(){return e("div",{className:M.addstoryTodo,children:e("div",{className:M.storiesHome,children:this.state.toggleEle?e(it,{click:this.toggleHandler}):e(ct,{addtodostory:this.props.addtodostory,data:this.props.data,click:this.toggleHandler})})})}}const it=({click:t})=>{const o=r=>r.target.style.opacity="1";return f(A,{children:[e("img",{src:st,alt:"imgTodo",loading:"lazy",onLoad:r=>o(r),onClick:()=>t()}),e("p",{children:"Add Todo to Story"})]})},ct=({addtodostory:t,data:o,click:r})=>{const a=o(),n=t,s=()=>{if(a!=""){let l=[],u;document.getElementById("showingTodo").querySelectorAll("input").forEach(i=>{i.checked&&(l.push(i.id),u=i.getAttribute("data-index"))}),l!=""&&n(l,u)}r()};return f("div",{className:M.showingTodo,id:"showingTodo",children:[f("ul",{children:[a==""?e("p",{children:" Add Some To Do "}):null,a.map(l=>f("li",{children:[e("input",{onChange:()=>"",id:l.story[0],"data-index":l.story[1],type:"checkbox"}),l.text]},l.id))]}),e("button",{onClick:()=>s(),children:"done"})]})},ut=t=>{const o=t.datatable,r=t.fadeout,[a,n,s]=ee(o,1,!0);return e("div",{className:M.opacity,id:"opacity",onClick:l=>r(l),children:f("div",{className:M.tableStory,children:[n==-1&&e(dt,{addtodostory:t.addtodostory,data:t.alltodos}),a.map(l=>e("div",{className:M.stories,children:f("ul",{children:[e("li",{children:e("p",{children:l.text})}),e("li",{children:e("ul",{children:l.items.map(u=>e("li",{children:e("p",{style:u.isCompleted?{textDecorationLine:"line-through"}:null,children:u.text})},u.key))})})]})},l.id)),s]})})};let te=[],G=[],K;function mt(){let t=!0;const[o,r]=b.exports.useState(!1),[{},{todoData:a},{},{creatStoryHandler:n,changeTitleHandler:s,removeStoriesHandler:l,addTodoStory:u,valState:d}]=z(),c=()=>r(!o),i=()=>{if(t==!0){let g=a,T=[];for(let C=0;C<g.length;C++)g[C].storyBool==!1&&(g[C].story=[g[C].id,K],T.push(g[C]));te=T,t=!1}return te},k=g=>{for(let T=0;T<g.length;T++)for(let C in a)a[C].id==g[T]&&(G[T]=a[C]);return G},H=(g,T)=>{K=T,c()},y=g=>{let T=g.target;T.id=="opacity"&&(T.style.opacity=0,G=[],setTimeout(()=>{c()},501))};b.exports.useEffect(()=>{o==!0&&(setTimeout(()=>{document.getElementById("opacity").style.opacity=1},2),t=!0)},[o]);const _=()=>{let g=d.stories;for(let T in g)if(K==g[T].id)return k(g[T].todos)},[v]=X();return f(A,{children:[o&&e(ut,{alltodos:i,addtodostory:u,datatable:_(),fadeout:y}),f("div",{className:L.perentStories,children:[e("div",{className:L.addStories,children:e("div",{children:e("button",{onClick:()=>n(),children:"Create Story"})})}),e("div",{className:L.framStories,children:d.stories.map((g,T)=>{let C=v(T+3);return f("div",{style:{backgroundColor:C},className:L.story,children:[e("div",{children:e("input",{type:"checkbox",id:T,onChange:U=>l(U)})}),f("div",{children:[e("span",{"data-index":T,className:L.title,onClick:U=>s(U),children:g.title}),e("div",{className:L.addTodo,onClick:()=>H(g.title,g.id),children:"+"})]})]},g.id)})})]})]})}function ft(){const[t,o]=b.exports.useState(!1);return f(A,{children:[e(ht,{onclick:o}),e(Be,{children:t?e(mt,{}):f("div",{className:N.Content,children:[e(Ee,{}),e(Ke,{})]})})]})}const ht=t=>{const o=t.onclick,r=(a,n)=>{history.pushState({},"",n),o(a)};return f("div",{className:N.navbar,children:[e("div",{children:"\u0628\u0633\u0645 \u0627\u0644\u0644\u0647 \u0627\u0644\u0631\u062D\u0645\u0646 \u0627\u0644\u0631\u062D\u064A\u0645"}),f("div",{children:[e("div",{onClick:()=>r(!1,"todo"),children:"Todo"}),e("div",{onClick:()=>r(!0,"stories"),children:"Stories"})]})]})};function pt(){return e("div",{className:ie.ComponentApp,children:e(A,{children:e(ft,{})})})}le.render(e(pt,{}),document.getElementById("root"));
