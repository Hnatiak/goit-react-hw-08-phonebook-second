"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[745],{2745:function(e,t,a){a.r(t);var r=a(5861),n=a(4942),s=a(5671),o=a(3144),i=a(136),l=a(7277),d=a(4687),p=a.n(d),u=a(2791),h=a(8687),m=a(8724),c=a(6151),w=a(1427),f=a(9009),g=a(3400),x=a(9569),v=a(3710),y=a(5206),b=(a(5462),a(3329)),Z={form:{width:320},label:{display:"flex",flexDirection:"column",marginBottom:15}},j=function(e){(0,i.Z)(a,e);var t=(0,l.Z)(a);function a(){var e;(0,s.Z)(this,a);for(var o=arguments.length,i=new Array(o),l=0;l<o;l++)i[l]=arguments[l];return(e=t.call.apply(t,[this].concat(i))).state={email:"",password:"",showPassword:!0},e.handleChange=function(t){var a=t.target,r=a.name,s=a.value;e.setState((0,n.Z)({},r,s))},e.togglePasswordVisibility=function(){e.setState((function(e){return{showPassword:!e.showPassword}}))},e.handleSubmit=function(){var t=(0,r.Z)(p().mark((function t(a){var r,n,s;return p().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a.preventDefault(),r=e.state,n=r.email,s=r.password,n&&s){t.next=5;break}return y.Am.error("Please enter email and password"),t.abrupt("return");case 5:return t.prev=5,t.next=8,e.props.onLogin({email:n,password:s});case 8:y.Am.error("Invalid email or password"),e.setState({email:"",password:""}),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(5),y.Am.error("Nothing");case 15:case"end":return t.stop()}}),t,null,[[5,12]])})));return function(e){return t.apply(this,arguments)}}(),e}return(0,o.Z)(a,[{key:"render",value:function(){var e=this.state,t=e.email,a=e.password,r=e.showPassword;return(0,b.jsxs)("div",{style:{marginTop:"35px"},children:[(0,b.jsx)("h1",{style:{marginBottom:"35px"},children:"Login"}),(0,b.jsx)(y.Ix,{}),(0,b.jsxs)("form",{onSubmit:this.handleSubmit,style:Z.form,autoComplete:"off",children:[(0,b.jsx)(w.Z,{style:{marginBottom:"15px",width:300},label:"E-mail:",type:"email",name:"email",value:t,onChange:this.handleChange}),(0,b.jsx)(w.Z,{style:{width:300},label:"Password:",type:r?"password":"text",name:"password",value:a,onChange:this.handleChange,InputProps:{endAdornment:(0,b.jsx)(f.Z,{position:"end",children:(0,b.jsx)(g.Z,{"aria-label":"toggle password visibility",onClick:this.togglePasswordVisibility,edge:"end",children:r?(0,b.jsx)(x.Z,{}):(0,b.jsx)(v.Z,{})})})}}),(0,b.jsx)("br",{}),(0,b.jsx)(c.Z,{style:{marginTop:25},type:"submit",variant:"contained",color:"primary",children:"SIGN IN \u2705"})]})]})}}]),a}(u.Component),k={onLogin:m.Z.logIn};t.default=(0,h.$j)(null,k)(j)}}]);
//# sourceMappingURL=745.7f21c7da.chunk.js.map