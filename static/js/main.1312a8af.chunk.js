(this["webpackJsonpfirebase-auth"]=this["webpackJsonpfirebase-auth"]||[]).push([[0],{46:function(e,c,t){},48:function(e,c,t){},50:function(e,c,t){},58:function(e,c,t){},59:function(e,c,t){"use strict";t.r(c);var a=t(7),s=t.n(a),n=t(38),i=t.n(n),l=(t(46),t(11)),r=t(35),o=t(28),j=t(10),d=t(22),b=(t(48),t(3)),h=function(e){var c=e.history;Object(a.useEffect)((function(){localStorage.getItem("token")||c.push("/")}),[]);var t=Object(d.c)(),s=t.currentUser;return Object(b.jsxs)("div",{className:" grid-container ",children:[Object(b.jsxs)("aside",{className:"sidenav",children:[Object(b.jsx)("h1",{children:"dashboard"}),Object(b.jsxs)("nav",{children:[Object(b.jsxs)("a",{class:"links selected",href:"#",children:[Object(b.jsx)("i",{class:"fa fa-fw fa-home"})," Home"]}),Object(b.jsxs)("a",{class:"links",href:"#",children:[" ",Object(b.jsx)("i",{class:"fa fa-fw fa-user"})," Notes"," "]}),Object(b.jsxs)("a",{class:"links",href:"#",children:[Object(b.jsx)("i",{class:"fa fa-user-circle-o","aria-hidden":"true"})," Calender"]}),Object(b.jsxs)("a",{class:"links",href:"#",children:[Object(b.jsx)("i",{class:"fa fa-fw fa-envelope"})," Weather"]}),Object(b.jsxs)("a",{class:"links",href:"#",children:[Object(b.jsx)("i",{class:"fa fa-info-circle","aria-hidden":"true"})," Food"]}),Object(b.jsxs)("a",{class:"links",href:"#",children:[Object(b.jsx)("i",{class:"fa fa-info-circle","aria-hidden":"true"})," More Info"]})]})]}),Object(b.jsxs)("header",{className:"header",children:[Object(b.jsx)("p",{children:s&&s.displayName}),Object(b.jsx)("button",{onClick:function(){Object(d.g)(t).then((function(){localStorage.removeItem("token"),c.push("/")})).catch((function(e){return alert(e.message)}))},className:"btn-color",children:"Logout"})]}),Object(b.jsx)("main",{class:"main"})]})},u=t(19),O=(t(50),t.p+"static/media/img.526ea072.jpg"),m=function(e){var c=e.history,t=Object(a.useState)(""),s=Object(l.a)(t,2),n=s[0],i=s[1],r=Object(a.useState)(""),j=Object(l.a)(r,2),d=j[0],h=j[1];Object(a.useEffect)((function(){localStorage.getItem("token")&&c.push("/dashboard")}),[]);var m=new u.a;return Object(b.jsxs)("div",{className:"login-flex-container",children:[Object(b.jsx)("div",{class:"login-flex-child",children:Object(b.jsx)("div",{class:"img-holder",children:Object(b.jsx)("img",{class:"login-img",src:O,alt:"image"})})}),Object(b.jsx)("div",{className:"login-flex-child",children:Object(b.jsxs)("form",{action:"",children:[Object(b.jsx)("div",{className:"heading",children:Object(b.jsx)("h1",{children:"Login"})}),Object(b.jsx)("div",{className:"signup-link",children:Object(b.jsxs)("p",{children:["Don't have an account? ",Object(b.jsx)(o.b,{to:"/signup",children:"Signup"})]})}),Object(b.jsx)("div",{className:"social-login",children:Object(b.jsx)("button",{className:"facebook-login-btn",type:"button",onClick:function(){var e=Object(u.c)();Object(u.e)(e,m).then((function(e){localStorage.setItem("token",e._tokenResponse.idToken),c.push("/dashboard")})).catch((function(e){e.message;alert(e.message)}))},children:Object(b.jsxs)("span",{children:[Object(b.jsx)("i",{className:"fab fa-facebook-f"})," Login via facebook"]})})}),Object(b.jsxs)("div",{className:"credentials",children:[Object(b.jsx)("label",{className:"block",children:"Email"}),Object(b.jsx)("input",{value:n,onChange:function(e){return i(e.target.value)},name:"email",type:"email",id:"inputEmail",className:"cred-box",placeholder:"Email Address",required:!0})]}),Object(b.jsxs)("div",{className:"credentials",children:[Object(b.jsx)("label",{className:"block",children:"Password"}),Object(b.jsx)("input",{value:d,onChange:function(e){return h(e.target.value)},name:"password",type:"password",id:"inputPassword",className:"cred-box",placeholder:"Password",required:!0})]}),Object(b.jsx)("div",{className:"login-btn",children:Object(b.jsx)("button",{className:"login-btn-btn",type:"button",onClick:function(){var e=Object(u.c)();Object(u.d)(e,n,d).then((function(e){localStorage.setItem("token",e._tokenResponse.idToken),c.push("/dashboard")})).catch((function(e){return alert(e.message)}))},children:Object(b.jsx)("span",{children:"Login our community"})})}),Object(b.jsx)("div",{className:"other-links",children:Object(b.jsxs)("p",{children:["By joining you agree to the ",Object(b.jsx)("a",{href:"",children:"Terms "})," and",Object(b.jsx)("a",{href:"",children:" Policy"})]})})]})})]})},f=t(31),x=(t(58),function(e){var c=e.history,t=Object(a.useState)(""),s=Object(l.a)(t,2),n=s[0],i=(s[1],Object(a.useState)("")),r=Object(l.a)(i,2),j=r[0],d=r[1],h=Object(a.useState)(""),m=Object(l.a)(h,2),x=m[0],p=m[1],g=Object(a.useState)({firstName:"",lastName:""}),v=Object(l.a)(g,2),N=v[0],k=v[1];Object(a.useEffect)((function(){localStorage.getItem("token")&&c.push("/dashboard")}),[]);var y=new u.a,S=Object(u.c)();return Object(b.jsxs)("div",{className:"flex-container",children:[Object(b.jsx)("div",{className:"flex-child",children:Object(b.jsx)("div",{class:"img-holder",children:Object(b.jsx)("img",{class:"img",src:O,alt:"image"})})}),Object(b.jsx)("div",{className:"flex-child",children:Object(b.jsxs)("form",{action:"",children:[Object(b.jsx)("div",{className:"heading",children:Object(b.jsx)("h1",{children:"Sign-up"})}),Object(b.jsx)("div",{className:"login-link",children:Object(b.jsxs)("p",{children:["Already have an account? ",Object(b.jsx)(o.b,{to:"/",children:"Login"})]})}),Object(b.jsx)("div",{className:"social-login",children:Object(b.jsx)("button",{className:"facebook-signup-btn",type:"button",onClick:function(){Object(u.e)(S,y).then((function(e){localStorage.setItem("token",e._tokenResponse.idToken),c.push("/dashboard")})).catch((function(e){alert(e.message)}))},children:Object(b.jsx)("span",{children:"Join via facebook"})})}),Object(b.jsxs)("div",{class:"name",children:[Object(b.jsxs)("div",{class:"name-input",children:[Object(b.jsx)("label",{for:"",children:"First Name"}),Object(b.jsx)("br",{}),Object(b.jsx)("input",{type:"text",className:"name-control",placeholder:"First Name",name:"name",value:N.firstName,onChange:function(e){e.persist(),k((function(c){return Object(f.a)(Object(f.a)({},c),{},{firstName:e.target.value})}))},required:!0})]}),Object(b.jsxs)("div",{class:"name-input",children:[Object(b.jsx)("label",{for:"",children:"Last Name"}),Object(b.jsx)("input",{type:"text",className:"name-control",placeholder:"Last Name",name:"name",value:N.lastName,onChange:function(e){e.persist(),k((function(c){return Object(f.a)(Object(f.a)({},c),{},{lastName:e.target.value})}))},required:!0})]})]}),Object(b.jsxs)("div",{className:"credentials",children:[Object(b.jsx)("label",{className:"block",children:"Email"}),Object(b.jsx)("input",{value:j,onChange:function(e){return d(e.target.value)},name:"email",type:"email",id:"inputEmail",className:"cred-box",placeholder:"Email Address",required:!0})]}),Object(b.jsxs)("div",{className:"credentials",children:[Object(b.jsx)("label",{className:"block",children:"Password"}),Object(b.jsx)("input",{value:x,onChange:function(e){return p(e.target.value)},name:"password",type:"password",id:"inputPassword",className:"cred-box",placeholder:"Password",required:!0})]}),Object(b.jsx)("div",{className:"signup-btn",children:Object(b.jsx)("button",{className:"signup-btn-btn",type:"button",onClick:function(){var e=Object(u.c)();Object(u.b)(e,j,x).then((function(){Object(u.f)(e.currentUser,{displayName:n}).then((function(){return c.push("/")})).catch((function(e){return alert(e.message)}))})).catch((function(e){return alert(e.message)}))},children:Object(b.jsx)("span",{children:"Join our community"})})}),Object(b.jsx)("div",{className:"other-links",children:Object(b.jsxs)("p",{children:["By joining you agree to the ",Object(b.jsx)("a",{href:"",children:"Terms "})," and",Object(b.jsx)("a",{href:"",children:" Policy"})]})})]})})]})});Object(r.a)({apiKey:"AIzaSyAcgq_tYiMDjPzgp63yyI97sY75Cn2Lwdg",authDomain:"authentication-developme-1d622.firebaseapp.com",projectId:"authentication-developme-1d622",storageBucket:"authentication-developme-1d622.appspot.com",messagingSenderId:"1068667680525",appId:"1:1068667680525:web:4346899811eb252d462244"});var p=function(){var e=Object(a.useState)(null),c=Object(l.a)(e,2),t=(c[0],c[1]);return Object(a.useEffect)((function(){var e=Object(d.c)();Object(d.d)(e,(function(e){t(e)}))}),[]),Object(b.jsx)("div",{className:"App",children:Object(b.jsx)(o.a,{children:Object(b.jsxs)(j.c,{children:[Object(b.jsx)(j.a,{exact:!0,path:"/",component:m}),Object(b.jsx)(j.a,{path:"/signup",component:x}),Object(b.jsx)(j.a,{path:"/dashboard",component:h})]})})})},g=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,60)).then((function(c){var t=c.getCLS,a=c.getFID,s=c.getFCP,n=c.getLCP,i=c.getTTFB;t(e),a(e),s(e),n(e),i(e)}))};i.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(p,{})}),document.getElementById("root")),g()}},[[59,1,2]]]);
//# sourceMappingURL=main.1312a8af.chunk.js.map