"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[786],{3786:function(t,e,n){n.r(e),n.d(e,{default:function(){return A}});var a=n(2791),r=n(8687),o=n(4942),i=n(1413),c=n(9439),s=n(9668),l=n(6151),u={form:"ContactForm_form__dhl+T",label:"ContactForm_label__-cVXI",title:"ContactForm_title__jZguf",input:"ContactForm_input__Bl93P",button:"ContactForm_button__eSwX9",button_seccond:"ContactForm_button_seccond__Akv4A"},m=n(1664),d=n(3329),f=function(t){var e=t.onSubmitData,n=(0,a.useState)({name:"",number:""}),r=(0,c.Z)(n,2),f=r[0],h=r[1],p=function(){h({name:"",number:""})};return(0,d.jsxs)("div",{className:u.form,children:[(0,d.jsx)("h1",{style:{marginBottom:25},children:"Add contact"}),(0,d.jsxs)("form",{type:"submit",onSubmit:function(t){t.preventDefault();var n=f.name,a=f.number;e({name:n,number:a}),p()},children:[(0,d.jsx)(s.Z,{label:"Name:",type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f])$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,onChange:function(t){var e=t.currentTarget,n=e.name,a=e.value;h((function(t){return(0,i.Z)((0,i.Z)({},t),{},(0,o.Z)({},n,a))}))},value:f.name,style:{marginRight:25}}),(0,d.jsx)(s.Z,{label:"Number:",type:"tel",name:"number",inputMode:"numeric",title:"Phone number must start with + and contain only digits, spaces, dashes, and parentheses",required:!0,onChange:function(t){var e=t.currentTarget.value;e&&!e.startsWith("+")&&(e="+"+e);var n=(0,m.S)(e),a=n?n.formatInternational():e;h((function(t){return(0,i.Z)((0,i.Z)({},t),{},{number:a})}))},value:f.number,inputProps:{minLength:7}}),(0,d.jsx)("br",{}),(0,d.jsx)(l.Z,{className:u.button_second,type:"submit",variant:"contained",color:"primary",style:{marginTop:25},children:"Add contact"})]})]})},h="ContactList_button_second__SaNPw",p="ContactList_contacts_list__jhchV";function b(t){var e=t.contacts,n=t.del;return(0,d.jsx)("ul",{children:e.map((function(t){return(0,d.jsxs)("li",{id:t.id,className:p,children:[(0,d.jsx)(l.Z,{className:h,"data-id":t.id,variant:"contained",color:"primary",onClick:function(){return e=t.id,void n(e);var e},children:"Delete"}),"".concat(t.name,": ").concat(t.number)]},t.id)}))})}b.defaultProps={contacts:[]};var _=b;var v=function(t){return(0,d.jsx)("div",{children:(0,d.jsx)(s.Z,{label:"Filter",onChange:function(e){var n=e.currentTarget.value.toUpperCase();t.setFilterToState(n)},style:{marginBottom:25,width:475}})})},g=n(9498),C=n(4701),j=n(3433),x=function(t){return t.app.filters},y=function(t){return t.app.contacts},Z={getIsLoading:function(t){return t.app.loading},getFilter:x,getContacts:y,getVisibleFilterArray:(0,n(6916).P1)([y,x],(function(t,e){var n=t.filter((function(t){return t.name.toUpperCase().includes(e)}));return(0,j.Z)(n)}))},F=n(5206),S=(n(5462),"ContactsView_container__-19yt");var A=(0,r.$j)((function(t){return{isLoadingContacts:Z.getIsLoading(t),contacts:Z.getContacts(t),filter:Z.getFilter(t),visibleArray:Z.getVisibleFilterArray(t)}}),(function(t){return{fetchContacts:function(){return t(C.Z.fetchContacts())},formSubmitHandler:function(e){return t(C.Z.addContact(e))},contactDelete:function(e){return t(C.Z.deleteContact(e))},filterSet:function(e){return t(g.Z.filterSet(e))}}}))((function(t){var e=t.isLoadingContacts,n=(t.contacts,t.filter,t.visibleArray),r=t.fetchContacts,o=t.formSubmitHandler,i=t.contactDelete,c=t.filterSet;return(0,a.useEffect)((function(){r()}),[r]),(0,d.jsx)("div",{className:S,children:(0,d.jsx)("div",{className:"row justify-content-center",children:(0,d.jsx)("div",{className:"col-md-6",children:(0,d.jsxs)("div",{className:"contacts",style:{marginTop:65},children:[e&&(0,d.jsx)("h2",{children:"Loading ..."}),(0,d.jsx)(f,{onSubmitData:o}),(0,d.jsx)("h1",{style:{marginBottom:25},children:"Contacts"}),(0,d.jsx)(v,{setFilterToState:c}),(0,d.jsx)(F.Ix,{}),(0,d.jsx)(_,{contacts:n,del:i})]})})})})}))}}]);
//# sourceMappingURL=786.4def5b5a.chunk.js.map