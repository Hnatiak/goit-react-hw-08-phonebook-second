"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[203],{2203:function(t,e,n){n.r(e),n.d(e,{default:function(){return B}});var r=n(5671),a=n(3144),o=n(136),c=n(7277),u=n(2791),i=n(4942),s={form:"ContactForm_form__dhl+T",label:"ContactForm_label__-cVXI",title:"ContactForm_title__jZguf",input:"ContactForm_input__Bl93P",button:"ContactForm_button__eSwX9",button_seccond:"ContactForm_button_seccond__Akv4A"},l=n(6151),f=n(1427),p=n(3329),d=function(t){(0,o.Z)(n,t);var e=(0,c.Z)(n);function n(){var t;(0,r.Z)(this,n);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(t=e.call.apply(e,[this].concat(o))).state={name:"",number:""},t.handleChange=function(e){var n=e.currentTarget,r=n.name,a=n.value;t.setState((0,i.Z)({},r,a))},t.handleSubmit=function(e){e.preventDefault();var n={name:t.state.name,number:t.state.number};t.props.onSubmitData(n),t.reset()},t.reset=function(){t.setState({name:"",number:""})},t}return(0,a.Z)(n,[{key:"render",value:function(){return(0,p.jsxs)("div",{className:s.form,children:[(0,p.jsx)("h1",{style:{marginBottom:25},children:"Add contact"}),(0,p.jsxs)("form",{type:"submit",onSubmit:this.handleSubmit,children:[(0,p.jsx)(f.Z,{label:"Name:",type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,onChange:this.handleChange,value:this.state.name,style:{marginRight:25}}),(0,p.jsx)(f.Z,{label:"Number:",type:"tel",name:"number",pattern:"(\\+?( |-|\\.)?\\d{1,2}( |-|\\.)?)?(\\(?\\d{3}\\)?|\\d{3})( |-|\\.)?(\\d{3}( |-|\\.)?\\d{4})",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,onChange:this.handleChange,value:this.state.number}),(0,p.jsx)("br",{}),(0,p.jsx)(l.Z,{className:s.button_second,type:"submit",variant:"contained",color:"primary",style:{marginTop:25},children:"Add contact"})]})]})}}]),n}(u.Component),h=d,m="ContactList_button_second__SaNPw",v="ContactList_contacts_list__jhchV",y=function(t){(0,o.Z)(n,t);var e=(0,c.Z)(n);function n(){var t;(0,r.Z)(this,n);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(t=e.call.apply(e,[this].concat(o))).deleteId=function(e){t.props.del(e)},t.createList=function(){return t.props.contacts.map((function(e){return(0,p.jsxs)("li",{id:e.id,className:v,children:[(0,p.jsx)(l.Z,{className:m,"data-id":e.id,variant:"contained",color:"primary",onClick:function(){return t.deleteId(e.id)},children:"Delete"}),"".concat(e.name,": ").concat(e.number)]},e.id)}))},t}return(0,a.Z)(n,[{key:"render",value:function(){return(0,p.jsx)("ul",{children:this.createList()})}}]),n}(u.Component);y.defaultProps={contacts:[]};var g=y,C=function(t){(0,o.Z)(n,t);var e=(0,c.Z)(n);function n(){var t;(0,r.Z)(this,n);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(t=e.call.apply(e,[this].concat(o))).setFilterValue=function(e){var n=e.currentTarget.value.toUpperCase();t.props.setFilterToState(n)},t}return(0,a.Z)(n,[{key:"render",value:function(){return(0,p.jsx)("div",{children:(0,p.jsx)(f.Z,{label:"Filter",onChange:this.setFilterValue,style:{marginBottom:25,width:475}})})}}]),n}(u.Component),b=C,Z=n(9498),_=n(5861),x=n(4687),j=n.n(x),k=n(1243),w={fetchContacts:function(){return function(){var t=(0,_.Z)(j().mark((function t(e){var n,r;return j().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(Z.Z.fetchContactRequest()),t.prev=1,t.next=4,k.Z.get("/contacts");case 4:n=t.sent,r=n.data,e(Z.Z.fetchContactSuccess(r)),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),e(Z.Z.deleteContactError(t.t0.message));case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()},addContact:function(t){return function(){var e=(0,_.Z)(j().mark((function e(n){var r,a,o;return j().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(Z.Z.addContactRequest()),e.prev=1,e.next=4,k.Z.get("/contacts");case 4:if(r=e.sent,a=r.data,!a.find((function(e){return e.number===t.number}))){e.next=10;break}return n(Z.Z.addContactError("A contact with this phone number already exists!")),e.abrupt("return");case 10:return e.next=12,k.Z.post("/contacts",t);case 12:o=e.sent,n(Z.Z.addContactSuccess(o.data)),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(1),n(Z.Z.addContactError(e.t0.message));case 19:case"end":return e.stop()}}),e,null,[[1,16]])})));return function(t){return e.apply(this,arguments)}}()},deleteContact:function(t){return function(e){e(Z.Z.deleteContactRequest()),k.Z.delete("/contacts/".concat(t)).then((function(){return e(Z.Z.deleteContactSuccess(t))})).catch((function(t){return e(Z.Z.deleteContactError(t.message))}))}}},A=w,S=n(8687),F=n(3433),N="NOT_FOUND";var E=function(t,e){return t===e};function L(t,e){var n="object"===typeof e?e:{equalityCheck:e},r=n.equalityCheck,a=void 0===r?E:r,o=n.maxSize,c=void 0===o?1:o,u=n.resultEqualityCheck,i=function(t){return function(e,n){if(null===e||null===n||e.length!==n.length)return!1;for(var r=e.length,a=0;a<r;a++)if(!t(e[a],n[a]))return!1;return!0}}(a),s=1===c?function(t){var e;return{get:function(n){return e&&t(e.key,n)?e.value:N},put:function(t,n){e={key:t,value:n}},getEntries:function(){return e?[e]:[]},clear:function(){e=void 0}}}(i):function(t,e){var n=[];function r(t){var r=n.findIndex((function(n){return e(t,n.key)}));if(r>-1){var a=n[r];return r>0&&(n.splice(r,1),n.unshift(a)),a.value}return N}return{get:r,put:function(e,a){r(e)===N&&(n.unshift({key:e,value:a}),n.length>t&&n.pop())},getEntries:function(){return n},clear:function(){n=[]}}}(c,i);function l(){var e=s.get(arguments);if(e===N){if(e=t.apply(null,arguments),u){var n=s.getEntries(),r=n.find((function(t){return u(t.value,e)}));r&&(e=r.value)}s.put(arguments,e)}return e}return l.clearCache=function(){return s.clear()},l}function q(t){var e=Array.isArray(t[0])?t[0]:t;if(!e.every((function(t){return"function"===typeof t}))){var n=e.map((function(t){return"function"===typeof t?"function "+(t.name||"unnamed")+"()":typeof t})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+n+"]")}return e}function z(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var a=function(){for(var e=arguments.length,r=new Array(e),a=0;a<e;a++)r[a]=arguments[a];var o,c=0,u={memoizeOptions:void 0},i=r.pop();if("object"===typeof i&&(u=i,i=r.pop()),"function"!==typeof i)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof i+"]");var s=u,l=s.memoizeOptions,f=void 0===l?n:l,p=Array.isArray(f)?f:[f],d=q(r),h=t.apply(void 0,[function(){return c++,i.apply(null,arguments)}].concat(p)),m=t((function(){for(var t=[],e=d.length,n=0;n<e;n++)t.push(d[n].apply(null,arguments));return o=h.apply(null,t)}));return Object.assign(m,{resultFunc:i,memoizedResultFunc:h,dependencies:d,lastResult:function(){return o},recomputations:function(){return c},resetRecomputations:function(){return c=0}}),m};return a}var D=z(L),T=function(t){return t.app.filters},R=function(t){return t.app.contacts},I={getIsLoading:function(t){return t.app.loading},getFilter:T,getContacts:R,getVisibleFilterArray:D([R,T],(function(t,e){var n=t.filter((function(t){return t.name.toUpperCase().includes(e)}));return(0,F.Z)(n)}))},V=function(t){(0,o.Z)(n,t);var e=(0,c.Z)(n);function n(){return(0,r.Z)(this,n),e.apply(this,arguments)}return(0,a.Z)(n,[{key:"componentDidMount",value:function(){this.props.fetchContacts()}},{key:"render",value:function(){return(0,p.jsxs)("div",{className:"contacts",style:{marginTop:65},children:[this.props.isLoadingContacts&&(0,p.jsx)("h2",{children:"Loading ..."}),(0,p.jsx)(h,{onSubmitData:this.props.formSubmitHandler}),(0,p.jsx)("h1",{style:{marginBottom:25},children:"Contacts"}),(0,p.jsx)(b,{setFilterToState:this.props.filterSet}),(0,p.jsx)(g,{contacts:this.props.visibleArray,del:this.props.contactDelete})]})}}]),n}(u.Component),B=(0,S.$j)((function(t){return{isLoadingContacts:I.getIsLoading(t),contacts:I.getContacts(t),filter:I.getFilter(t),visibleArray:I.getVisibleFilterArray(t)}}),(function(t){return{fetchContacts:function(){return t(A.fetchContacts())},formSubmitHandler:function(e){return t(A.addContact(e))},contactDelete:function(e){return t(A.deleteContact(e))},filterSet:function(e){return t(Z.Z.filterSet(e))}}}))(V)}}]);
//# sourceMappingURL=203.5b9b70cc.chunk.js.map