"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[745],{2745:function(e,t,r){r.r(t);var n=r(5861),a=r(4942),s=r(5671),o=r(3144),i=r(136),l=r(7277),d=r(4687),u=r.n(d),h=r(2791),p=r(8687),c=r(8724),m=r(6151),w=r(9668),f=r(3466),x=r(3400),g=r(9569),y=r(3710),v=r(5206),b=(r(5462),r(3329)),j={form:{width:320},label:{display:"flex",flexDirection:"column",marginBottom:15}},Z=function(e){(0,i.Z)(r,e);var t=(0,l.Z)(r);function r(){var e;(0,s.Z)(this,r);for(var o=arguments.length,i=new Array(o),l=0;l<o;l++)i[l]=arguments[l];return(e=t.call.apply(t,[this].concat(i))).state={email:"",password:"",showPassword:!0},e.handleChange=function(t){var r=t.target,n=r.name,s=r.value;e.setState((0,a.Z)({},n,s))},e.togglePasswordVisibility=function(){e.setState((function(e){return{showPassword:!e.showPassword}}))},e.handleSubmit=function(){var t=(0,n.Z)(u().mark((function t(r){var n,a,s;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r.preventDefault(),n=e.state,a=n.email,s=n.password,a&&s){t.next=5;break}return v.Am.error("\u0411\u0443\u0434\u044c \u043b\u0430\u0441\u043a\u0430 \u043d\u0430\u043f\u0438\u0448\u0456\u0442\u044c \u0432\u0432\u0430\u0448 \u0435\u043c\u0435\u0439\u043b \u0456 \u043f\u0430\u0440\u043e\u043b\u044c"),t.abrupt("return");case 5:return t.prev=5,t.next=8,e.props.onLogin({email:a,password:s});case 8:v.Am.error("\u041d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u0438\u0439 \u0435\u043c\u0435\u0439\u043b \u0430\u0431\u043e \u043f\u0430\u0440\u043e\u043b\u044c, \u0431\u0443\u0434\u044c \u043b\u0430\u0441\u043a\u0430 \u0441\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0449\u0435 \u0440\u0430\u0437"),e.setState({email:"",password:""}),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(5),v.Am.error("Nothing");case 15:case"end":return t.stop()}}),t,null,[[5,12]])})));return function(e){return t.apply(this,arguments)}}(),e}return(0,o.Z)(r,[{key:"render",value:function(){var e=this.state,t=e.email,r=e.password,n=e.showPassword;return(0,b.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:(0,b.jsxs)("div",{style:{marginTop:"35px"},children:[(0,b.jsx)("h1",{style:{marginBottom:"35px"},children:"Login"}),(0,b.jsx)(v.Ix,{}),(0,b.jsxs)("form",{onSubmit:this.handleSubmit,style:j.form,autoComplete:"off",children:[(0,b.jsx)(w.Z,{style:{marginBottom:"15px",width:300},label:"E-mail:",type:"email",name:"email",value:t,onChange:this.handleChange}),(0,b.jsx)(w.Z,{style:{width:300},label:"Password:",type:n?"password":"text",name:"password",value:r,onChange:this.handleChange,InputProps:{endAdornment:(0,b.jsx)(f.Z,{position:"end",children:(0,b.jsx)(x.Z,{"aria-label":"toggle password visibility",onClick:this.togglePasswordVisibility,edge:"end",children:n?(0,b.jsx)(g.Z,{}):(0,b.jsx)(y.Z,{})})})}}),(0,b.jsx)("br",{}),(0,b.jsx)(m.Z,{style:{marginTop:25},type:"submit",variant:"contained",color:"primary",children:"SIGN IN \u2705"})]})]})})}}]),r}(h.Component),k={onLogin:c.Z.logIn};t.default=(0,p.$j)(null,k)(Z)}}]);
//# sourceMappingURL=745.ce661a55.chunk.js.map