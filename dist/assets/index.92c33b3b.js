var ne=Object.defineProperty;var le=(t,r,o)=>r in t?ne(t,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[r]=o;var F=(t,r,o)=>(le(t,typeof r!="symbol"?r+"":r,o),o);import{j as z,r as x,a as se,B as de,R as ie,b as X,L as Q,c as ce}from"./vendor.7441d5f3.js";const ue=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))a(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function o(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerpolicy&&(s.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?s.credentials="include":n.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(n){if(n.ep)return;n.ep=!0;const s=o(n);fetch(n.href,s)}};ue();const me="_ComponentApp_ko11b_1";var fe={ComponentApp:me};const P=t=>(t.length!=0?t[t.length-1].id:0)+1,he=(t,r)=>{const o=new Date;let a={id:r,story:[],storyBool:!1,created:"Time : "+o.toDateString()+" "+o.toLocaleTimeString(),update:"No Update Yet ^_^",text:t.current.value,items:[]};return t.current.value=null,a},pe=(t,r)=>{let o=t.todoData,a,n=[];for(a in r)o=o.filter(s=>(s.storyBool==!0&&s.id==r[a]&&n.push([s.story[0],s.story[1]]),s.id!=r[a]));return[o,n]},ye=(t,r,o,a)=>{let n=t.todoData;const s=new Date;for(let l=0;l<n.length;l++)if(n[l].id==r){let{dataItems:u}=a;n[l].text=o.current.value,n[l].update="Last Updateing : "+s.toDateString()+" "+s.toLocaleTimeString(),n[l].items=u}return o.current.value=null,n},ge=(t,r)=>{r=r.split(",");let o=t.todoData,a;for(a in o)if(o[a].id==r[0]){let n=o[a].items[r[1]].isCompleted;o[a].items[r[1]].isCompleted=!n}return o},Te="_Content_1jnh8_1",ve="_AddTodo_1jnh8_27",xe="_TodoMine_1jnh8_35",be="_Actions_1jnh8_63",_e="_TodoValue_1jnh8_83",Ce="_navbar_1jnh8_105";var N={Content:Te,AddTodo:ve,TodoMine:xe,Actions:be,TodoValue:_e,navbar:Ce};const Se="_ItemList_1cfey_1",ke="_rainbow_1cfey_17",Ie="_item_1cfey_61",He="_isCompleted_1cfey_131";var U={ItemList:Se,rainbow:ke,item:Ie,isCompleted:He};let Ne=["#ff0000","#ff3600","#ff6d00","#ffa300","#ffda00","#ecff00","#b6ff00","#7fff00","#48ff00","#12ff00","#00ff24","#00ff5b","#00ff91","#00ffc8","#00ffff","#00c8ff","#0091ff","#005bff","#0024ff","#1200ff","#4800ff","#7f00ff","#b600ff","#ec00ff","#ff00da","#ff00a3","#ff006d","#ff0036"];var De="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";const W=()=>[o=>Ne[o%28],o=>De[o%52]],e=z.exports.jsx,f=z.exports.jsxs,D=z.exports.Fragment;let E="";const Ae=t=>{const{dataItems:r}=t.dataitems,[o,a]=W(),n=x.exports.useRef(),s=l=>{n.current.value=l.target.getAttribute("data-text"),E=l.target.getAttribute("data-index")};return f(D,{children:[e("div",{className:U.rainbow,children:r.map((l,u)=>{let d=o(u);return e("div",{className:U.item,children:e("span",{className:l.isCompleted?U.isCompleted:null,"data-index":u,style:{backgroundColor:d,border:"0px solid "+d},"data-text":l.text,onClick:c=>s(c),children:a(u)})},l.key)})}),e(Be,{textarea:n,updateing:t.updateitems,removed:t.removeitems})]})};function Be(t){const r=t.updateing,o=t.removed,a=t.textarea,n=()=>{E=o(E),a.current.value=null};return f("div",{className:U.ItemList,children:[e("textarea",{ref:a,placeholder:"Type Your Item",type:"text",defaultValue:t.textitem,onChange:()=>E!=""?r(E,a):null}),e("button",{className:"btn btn-danger",onClick:()=>E!=""?n():null,children:"remove"})]})}let Z;const Le=t=>{const r=t.items,[o,a]=x.exports.useState({dataItems:r}),n=()=>{let u=P(o.dataItems);a({dataItems:[...o.dataItems,{id:u,text:"default",isCompleted:!1,key:Math.random()+u}]})},s=(u,d)=>{let c=o.dataItems;c[u].text=d.current.value,a({dataItems:c})},l=u=>{let d=o.dataItems;return d=d.filter((c,i)=>i!=u),a({dataItems:d}),[]};return Z=o,f("div",{className:N.Actions,children:[e("div",{className:N.TodoAddItem,children:e("button",{className:"btn btn-primary",onClick:()=>n(),children:"Todo Item"})}),e("div",{className:"displayitems",children:e(Ae,{updateitems:s,dataitems:o,removeitems:l})})]})},Ee=()=>Z;class we{isfound(r,o){return localStorage.getItem(r)||this.setlocalstorge(r,o),this.showlocal(r)}setlocalstorge(r,o){localStorage.setItem(r,JSON.stringify(o))}deletelocal(r){localStorage.removeItem(r)}showlocal(r){return JSON.parse(localStorage.getItem(r))}}var V=new we;function $(t,r){let o;for(o in r)for(let a in t)if(r[o][1]==t[a].id){let n=t[a].todos;t[a].todos=n.filter(s=>s!=r[o][0])}return t}const J=se.createContext(0);J.displayName="Todo Context";let Y="";const Me=t=>{let r=[],o=V.isfound("todoData",r);const[a,n]=x.exports.useState({todoData:o}),s={textTodoButton:"Todo",valueTextarea:"",valueItems:""},[l,u]=x.exports.useState({valuesUpdateing:s}),d=V.isfound("stories",[{id:1,title:"Change title",todos:["1"]}]),[c,i]=x.exports.useState({stories:d}),k=h=>{let p,m=a.todoData;for(p in h)for(let b in m)h[p]==m[b].id&&(m[b].story=[],m[b].storyBool=!1);return m},ae={data:{todosCnt:a,handlerDataTodo:{setTodoHandler:h=>{if(l.valuesUpdateing.textTodoButton=="update"){let m=Ee();n({todoData:ye(a,Y,h,m)}),u({valuesUpdateing:s})}else{let m=P(a.todoData);n({todoData:[...a.todoData,he(h,m)]})}},deletTodoHandler:h=>{let[p,m]=pe(a,h);return n({todoData:p}),m!=""&&i({stories:$(c.stories,m)}),[]},updateTodoHandler:h=>{let p=a.todoData,m="",b;Y=h[0];for(let S=0;S<p.length;S++)p[S].id==Y&&(b=p[S].items,m=p[S].text);return u({valuesUpdateing:{textTodoButton:"update",valueTextarea:m,valueItems:b}}),[]},isCompletedItem:h=>{n({todoData:ge(a,h)})},getTitleStory:h=>{let p=c.stories;for(let m in p)if(h==p[m].id)return p[m].title},removeTitleStory:h=>{i({stories:$(c.stories,[h])}),n({todoData:k([h[0]])})}},storiesHandler:{creatStoryHandler:()=>{let h=P(c.stories);i({stories:[...c.stories,{id:h,title:"Change title",todos:[]}]})},changeTitleHandler:h=>{let p=prompt("Hellow , Change Story Title ^_^ "),m=h.target.getAttribute("data-index"),b=c.stories;p!=null&&p!=""&&(b[m].title=p,i({stories:b}))},removeStoriesHandler:h=>{let p=h.target,m=c.stories;p.checked&&setTimeout(()=>{confirm("Are you sure you want to delete this story")?(n({todoData:k(m[p.id].todos)}),m=m.filter((S,q)=>q!=p.id),i({stories:m})):p.checked=!1},50)},addTodoStory:(h,p)=>{let m=a.todoData,b=c.stories;for(let S in b)p==b[S].id&&b[S].todos.push(...h);for(let S in h)for(let q in m)m[q].id==h[S]&&(m[q].storyBool=!0);i({stories:b}),n({todoData:m})},valState:c},updateValue:l}};return x.exports.useEffect(()=>{V.setlocalstorge("todoData",a.todoData)},[a]),x.exports.useEffect(()=>{V.setlocalstorge("stories",c.stories)},[c]),e(J.Provider,{value:ae,children:t.children})},j=()=>{const{data:t}=x.exports.useContext(J);return[t.handlerDataTodo,t.todosCnt,t.updateValue,t.storiesHandler]},Re=()=>{const[{setTodoHandler:t},{},{valuesUpdateing:r}]=j(),o=x.exports.useRef(),a=r.valueTextarea,n=l=>o.current.value=l.target.value;x.exports.useEffect(()=>{o.current.value=a});const s=l=>l.preventDefault();return f("form",{action:"#",onSubmit:l=>s(l),id:"formSubmit",children:[e("div",{className:N.TodoValue,children:e("textarea",{required:!0,onChange:l=>{n(l)},name:"todovalue",ref:o,placeholder:"Type Your Todo "})}),e("div",{className:N.AddTodo,children:e("button",{className:"btn1 btn btn-primary",type:"submit",id:"buttonSubmit",onClick:()=>o.current.value!=""?t(o):null,children:r.textTodoButton})})]})},qe=t=>{const[{},{},{valuesUpdateing:r}]=j(),o=r.valueItems;return e(D,{children:f("div",{className:N.TodoMine,children:[e("header",{children:r.textTodoButton=="update"?e(Le,{items:o}):null}),e("section",{children:e(Re,{})})]})})},Ue="_TableTodo_1fus5_1",Ve="_firstTr_1fus5_71",je="_titleStory_1fus5_97",Oe="_removeTitle_1fus5_117",Fe="_tableItems_1fus5_149",ze="_defaultText_1fus5_169";var A={TableTodo:Ue,firstTr:Ve,titleStory:je,removeTitle:Oe,tableItems:Fe,defaultText:ze};let ee,O=!1,te,B;const Pe=t=>{const r=t.delettodo,o=t.falsecheckbox,a=t.updatetodo;return B=t.iddel,ee=()=>{let n=r(B());B(n)},te=n=>{let s=a(n);B(s),o()},e("thead",{children:e(Je,{})})},Je=t=>{const r=n=>{document.getElementsByName("removeTodo").forEach(l=>{n!=l.checked&&l.click()})},o=()=>document.getElementById("formSubmit").querySelector("#buttonSubmit").textContent=="Todo",a=()=>{O=!1,document.getElementById("removeAll").checked=!1};return f("tr",{children:[e("th",{children:f("label",{className:"btn btn-danger",htmlFor:"removeAll",children:["removeAll",e("input",{onChange:n=>{r(n.target.checked),O=!O},defaultChecked:O,type:"checkbox",id:"removeAll"})]})}),e("th",{children:e("button",{className:"btn btn-success",onClick:()=>{B().length==1&&o()&&te(B()),a()},children:"edit"})}),e("th",{children:e("button",{className:"btn btn-danger",onClick:()=>{B().length>=1&&o()&&ee(),a()},children:"remove"})})]})},Ye=t=>{const r=t.ischeckedone,o=t.tododata,a=t.iscompleted,n=t.gettitlestory,s=t.removetitlestory,l=d=>{let c=d.target.getAttribute("data-index");a(c)};function u(d,c){d.target.id=="titleStory"?d.target.children[0].style.opacity=c:d.target.style.opacity=c}return e(D,{children:e("tbody",{style:{minHeight:"250px",wordBreak:"break-word"},children:o==""?e(Ge,{}):o.map((d,c)=>f("tr",{className:A.firstTr,children:[f("td",{children:[f("div",{style:{textAlign:"left",display:"flex",alignItems:"center"},children:[e("input",{type:"checkbox",id:d.id,"data-count":c,onChange:i=>r(i),name:"removeTodo"}),e("span",{onClick:i=>alert(d.created+" , "+d.update),children:"Todo info"}),d.storyBool&&f("span",{className:A.titleStory,id:"titleStory",onMouseEnter:i=>u(i,1),onMouseLeave:i=>u(i,0),children:[e("span",{className:A.removeTitle,onClick:()=>s(d.story),children:" X "}),n(d.story[1])]})]}),e("p",{children:d.text})]}),e("td",{children:e("table",{className:A.tableItems,children:e("tbody",{children:d.items.map((i,k)=>f("tr",{children:[e("td",{children:e("input",{type:"checkbox","data-index":[d.id,k],defaultChecked:i.isCompleted,onChange:I=>l(I)})}),e("td",{style:i.isCompleted?{textDecoration:"line-through"}:null,children:i.text})]},i.key))})})})]},d.id))})})},Ge=()=>e("tr",{children:e("td",{children:e("div",{className:A.defaultText,children:" ... \u062F\u0639\u0646\u0627 \u0646\u0636\u064A\u0641 \u0628\u0639\u0636 \u0627\u0644\u0645\u0647\u0627\u0645 "})})}),Ke="_pagination_12pk9_7",Xe="_frame_12pk9_13",Qe="_slider_12pk9_23",We="_square_12pk9_49";var L={pagination:Ke,frame:Xe,slider:Qe,square:We};const oe=(t,r,o=!1)=>{const a=t,n=Math.ceil(a.length/r);let s=o?-1:0;const[l,u]=x.exports.useState(s),d=x.exports.useRef(),c=y=>{let _=d.current.scrollLeft;y-Math.round(_/35)>=3?d.current.scrollLeft+=35:d.current.scrollLeft-=35},i=(y,_=!1,v=null)=>{y!=l&&y>=-1&&a!=""&&(u(y),_?d.current.scrollLeft=v:c(y+1))},k=y=>{let _=[];for(let v=0;v<y;v++)_[v]=e(Ze,{count:v+1,onclick:()=>i(v)},v);return _};return[(()=>{if(l>=0){let y=[],_=l*r;for(let v=_;v<a.length;v++)v<_+r&&y.push(a[v]);return y}return[]})(),l,e("section",{style:{width:"100%",margin:"15px 0"},children:e("div",{className:L.pagination,children:f("div",{className:L.frame,children:[e("div",{className:L.square,onClick:()=>i(0,!0,0),children:"First"}),o?e($e,{onclick:()=>i(-1)}):null,e("div",{className:L.slider,ref:d,children:k(n)}),e("div",{className:L.square,onClick:()=>i(n-1,!0,(n-1)*35),children:"Last"})]})})})]},Ze=t=>e("div",{className:L.square,onClick:t.onclick,children:t.count}),$e=t=>e("div",{className:L.square,style:{borderRight:"none"},onClick:t.onclick,children:"Add Todo"});let H=[];function et(){const[{deletTodoHandler:t,updateTodoHandler:r,isCompletedItem:o,getTitleStory:a,removeTitleStory:n},{todoData:s}]=j(),[l,u,d]=oe(s,3),c=I=>{let y=I.target;return y.checked?H[H.length]=y.id:H=H.filter(_=>_!==y.id),H},i=(I=H)=>(H=I,H),k=()=>{document.getElementsByName("removeTodo").forEach(y=>{y.checked&&(y.checked=!1)})};return x.exports.useEffect(()=>{H=[]},[u]),f("div",{className:A.ParentTable,children:[f("table",{className:A.TableTodo,children:[e(Pe,{falsecheckbox:k,updatetodo:r,delettodo:t,iddel:i}),e(Ye,{gettitlestory:a,removetitlestory:n,tododata:l,iscompleted:o,ischeckedone:c})]}),s!=""&&d]})}const tt="_perentStories_1e057_7",ot="_framStories_1e057_27",rt="_story_1e057_79",at="_title_1e057_141",nt="_addTodo_1e057_159",lt="_addStories_1e057_161";var w={perentStories:tt,framStories:ot,story:rt,title:at,addTodo:nt,addStories:lt};const st="_opacity_bz3xt_1",dt="_tableStory_bz3xt_23",it="_addstoryTodo_bz3xt_61",ct="_storiesHome_bz3xt_67",ut="_stories_bz3xt_67",mt="_showingTodo_bz3xt_187";var M={opacity:st,tableStory:dt,addstoryTodo:it,storiesHome:ct,stories:ut,showingTodo:mt},ft="/todo-app/assets/imgTodo.70c612a0.svg";class ht extends x.exports.Component{constructor(){super(...arguments);F(this,"state",{toggleEle:!0});F(this,"toggleHandler",()=>{this.setState({toggleEle:!this.state.toggleEle})})}render(){return e("div",{className:M.addstoryTodo,children:e("div",{className:M.storiesHome,children:this.state.toggleEle?e(pt,{click:this.toggleHandler}):e(yt,{addtodostory:this.props.addtodostory,data:this.props.data,click:this.toggleHandler})})})}}const pt=({click:t})=>{const r=o=>o.target.style.opacity="1";return f(D,{children:[e("img",{src:ft,alt:"imgTodo",loading:"lazy",onLoad:o=>r(o),onClick:()=>t()}),e("p",{children:"Add Todo to Story"})]})},yt=({addtodostory:t,data:r,click:o})=>{const a=r(),n=t,s=()=>{if(a!=""){let l=[],u;document.getElementById("showingTodo").querySelectorAll("input").forEach(i=>{i.checked&&(l.push(i.id),u=i.getAttribute("data-index"))}),l!=""&&n(l,u)}o()};return f("div",{className:M.showingTodo,id:"showingTodo",children:[f("ul",{children:[a==""?e("p",{children:" Add Some To Do "}):null,a.map(l=>f("li",{children:[e("input",{onChange:()=>"",id:l.story[0],"data-index":l.story[1],type:"checkbox"}),l.text]},l.id))]}),e("button",{onClick:()=>s(),children:"done"})]})},gt=t=>{const r=t.datatable,o=t.fadeout,[a,n,s]=oe(r,1,!0);return e("div",{className:M.opacity,id:"opacity",onClick:l=>o(l),children:f("div",{className:M.tableStory,children:[n==-1&&e(ht,{addtodostory:t.addtodostory,data:t.alltodos}),a.map(l=>e("div",{className:M.stories,children:f("ul",{children:[e("li",{children:e("p",{children:l.text})}),e("li",{children:e("ul",{children:l.items.map(u=>e("li",{children:e("p",{style:u.isCompleted?{textDecorationLine:"line-through"}:null,children:u.text})},u.key))})})]})},l.id)),s]})})};let re=[],G=[],K;function Tt(){let t=!0;const[r,o]=x.exports.useState(!1),[{},{todoData:a},{},{creatStoryHandler:n,changeTitleHandler:s,removeStoriesHandler:l,addTodoStory:u,valState:d}]=j(),c=()=>o(!r),i=()=>{if(t==!0){let g=a,T=[];for(let C=0;C<g.length;C++)g[C].storyBool==!1&&(g[C].story=[g[C].id,K],T.push(g[C]));re=T,t=!1}return re},k=g=>{for(let T=0;T<g.length;T++)for(let C in a)a[C].id==g[T]&&(G[T]=a[C]);return G},I=(g,T)=>{K=T,c()},y=g=>{let T=g.target;T.id=="opacity"&&(T.style.opacity=0,G=[],setTimeout(()=>{c()},501))};x.exports.useEffect(()=>{r==!0&&(setTimeout(()=>{document.getElementById("opacity").style.opacity=1},2),t=!0)},[r]);const _=()=>{let g=d.stories;for(let T in g)if(K==g[T].id)return k(g[T].todos)},[v]=W();return f(D,{children:[r&&e(gt,{alltodos:i,addtodostory:u,datatable:_(),fadeout:y}),f("div",{className:w.perentStories,children:[e("div",{className:w.addStories,children:e("div",{children:e("button",{onClick:()=>n(),children:"Create Story"})})}),e("div",{className:w.framStories,children:d.stories.map((g,T)=>{let C=v(T+3);return f("div",{style:{backgroundColor:C},className:w.story,children:[e("div",{children:e("input",{type:"checkbox",id:T,onChange:R=>l(R)})}),f("div",{children:[e("span",{"data-index":T,className:w.title,onClick:R=>s(R),children:g.title}),e("div",{className:w.addTodo,onClick:()=>I(g.title,g.id),children:"+"})]})]},g.id)})})]})]})}function vt(){return e(D,{children:f(de,{children:[e(bt,{}),e(Me,{children:f(ie,{children:[e(X,{path:"/todo-app/stories",element:e(Tt,{})}),e(X,{path:"/todo-app/*",element:e(xt,{})})]})})]})})}const xt=()=>f("div",{className:N.Content,children:[e(qe,{}),e(et,{})]}),bt=t=>f("div",{className:N.navbar,children:[e("div",{children:"\u0628\u0633\u0645 \u0627\u0644\u0644\u0647 \u0627\u0644\u0631\u062D\u0645\u0646 \u0627\u0644\u0631\u062D\u064A\u0645"}),f("div",{children:[e(Q,{to:"/todo-app/todo",children:"Todo"}),e(Q,{to:"/todo-app/stories",children:"Stories"})]})]});function _t(){return e("div",{className:fe.ComponentApp,children:e(D,{children:e(vt,{})})})}ce.render(e(_t,{}),document.getElementById("root"));
