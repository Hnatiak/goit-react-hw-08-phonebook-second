"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[884],{7884:function(t,e,n){n.r(e),n.d(e,{default:function(){return T}});var r=n(5671),a=n(3144),o=n(136),i=n(7277),u=n(2791),c=n(4942),s={form:"ContactForm_form__dhl+T",label:"ContactForm_label__-cVXI",title:"ContactForm_title__jZguf",input:"ContactForm_input__Bl93P",button:"ContactForm_button__eSwX9",button_seccond:"ContactForm_button_seccond__Akv4A"},l=n(142),f=n(528),p=n(3329),d=function(t){(0,o.Z)(n,t);var e=(0,i.Z)(n);function n(){var t;(0,r.Z)(this,n);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(t=e.call.apply(e,[this].concat(o))).state={name:"",number:""},t.handleChange=function(e){var n=e.currentTarget,r=n.name,a=n.value;t.setState((0,c.Z)({},r,a))},t.handleSubmit=function(e){e.preventDefault();var n={name:t.state.name,number:t.state.number};t.props.onSubmitData(n),t.reset()},t.reset=function(){t.setState({name:"",number:""})},t}return(0,a.Z)(n,[{key:"render",value:function(){return(0,p.jsxs)("div",{className:s.form,children:[(0,p.jsx)("h1",{style:{marginBottom:25},children:"Add contact"}),(0,p.jsxs)("form",{type:"submit",onSubmit:this.handleSubmit,children:[(0,p.jsx)(f.Z,{label:"Name:",type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,onChange:this.handleChange,value:this.state.name,style:{marginRight:25}}),(0,p.jsx)(f.Z,{label:"Number:",type:"tel",name:"number",pattern:"(\\+?( |-|\\.)?\\d{1,2}( |-|\\.)?)?(\\(?\\d{3}\\)?|\\d{3})( |-|\\.)?(\\d{3}( |-|\\.)?\\d{4})",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,onChange:this.handleChange,value:this.state.number}),(0,p.jsx)("br",{}),(0,p.jsx)(l.Z,{className:s.button_second,type:"submit",variant:"contained",color:"primary",style:{marginTop:25},children:"Add contact"})]})]})}}]),n}(u.Component),h=d,m="ContactList_button_second__SaNPw",v=function(t){(0,o.Z)(n,t);var e=(0,i.Z)(n);function n(){var t;(0,r.Z)(this,n);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(t=e.call.apply(e,[this].concat(o))).deleteId=function(e){t.props.del(e)},t.createList=function(){return t.props.contacts.map((function(e){return(0,p.jsxs)("li",{id:e.id,children:[(0,p.jsx)(l.Z,{className:m,"data-id":e.id,variant:"contained",color:"primary",onClick:function(){return t.deleteId(e.id)},children:"Delete"}),"".concat(e.name,": ").concat(e.number)]},e.id)}))},t}return(0,a.Z)(n,[{key:"render",value:function(){return(0,p.jsx)("ul",{children:this.createList()})}}]),n}(u.Component);v.defaultProps={contacts:[]};var y=v,g=function(t){(0,o.Z)(n,t);var e=(0,i.Z)(n);function n(){var t;(0,r.Z)(this,n);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(t=e.call.apply(e,[this].concat(o))).setFilterValue=function(e){var n=e.currentTarget.value.toUpperCase();t.props.setFilterToState(n)},t}return(0,a.Z)(n,[{key:"render",value:function(){return(0,p.jsx)("div",{children:(0,p.jsx)(f.Z,{label:"Filter",onChange:this.setFilterValue,style:{marginBottom:25}})})}}]),n}(u.Component),b=g,C=n(9498),Z=n(4701),_=n(8687),j=n(3433),x="NOT_FOUND";var A=function(t,e){return t===e};function k(t,e){var n="object"===typeof e?e:{equalityCheck:e},r=n.equalityCheck,a=void 0===r?A:r,o=n.maxSize,i=void 0===o?1:o,u=n.resultEqualityCheck,c=function(t){return function(e,n){if(null===e||null===n||e.length!==n.length)return!1;for(var r=e.length,a=0;a<r;a++)if(!t(e[a],n[a]))return!1;return!0}}(a),s=1===i?function(t){var e;return{get:function(n){return e&&t(e.key,n)?e.value:x},put:function(t,n){e={key:t,value:n}},getEntries:function(){return e?[e]:[]},clear:function(){e=void 0}}}(c):function(t,e){var n=[];function r(t){var r=n.findIndex((function(n){return e(t,n.key)}));if(r>-1){var a=n[r];return r>0&&(n.splice(r,1),n.unshift(a)),a.value}return x}return{get:r,put:function(e,a){r(e)===x&&(n.unshift({key:e,value:a}),n.length>t&&n.pop())},getEntries:function(){return n},clear:function(){n=[]}}}(i,c);function l(){var e=s.get(arguments);if(e===x){if(e=t.apply(null,arguments),u){var n=s.getEntries(),r=n.find((function(t){return u(t.value,e)}));r&&(e=r.value)}s.put(arguments,e)}return e}return l.clearCache=function(){return s.clear()},l}function F(t){var e=Array.isArray(t[0])?t[0]:t;if(!e.every((function(t){return"function"===typeof t}))){var n=e.map((function(t){return"function"===typeof t?"function "+(t.name||"unnamed")+"()":typeof t})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+n+"]")}return e}function S(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var a=function(){for(var e=arguments.length,r=new Array(e),a=0;a<e;a++)r[a]=arguments[a];var o,i=0,u={memoizeOptions:void 0},c=r.pop();if("object"===typeof c&&(u=c,c=r.pop()),"function"!==typeof c)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof c+"]");var s=u,l=s.memoizeOptions,f=void 0===l?n:l,p=Array.isArray(f)?f:[f],d=F(r),h=t.apply(void 0,[function(){return i++,c.apply(null,arguments)}].concat(p)),m=t((function(){for(var t=[],e=d.length,n=0;n<e;n++)t.push(d[n].apply(null,arguments));return o=h.apply(null,t)}));return Object.assign(m,{resultFunc:c,memoizedResultFunc:h,dependencies:d,lastResult:function(){return o},recomputations:function(){return i},resetRecomputations:function(){return i=0}}),m};return a}var w=S(k),N=function(t){return t.app.filters},z=function(t){return t.app.contacts},D={getIsLoading:function(t){return t.app.loading},getFilter:N,getContacts:z,getVisibleFilterArray:w([z,N],(function(t,e){var n=t.filter((function(t){return t.name.toUpperCase().includes(e)}));return(0,j.Z)(n)}))},L=function(t){(0,o.Z)(n,t);var e=(0,i.Z)(n);function n(){return(0,r.Z)(this,n),e.apply(this,arguments)}return(0,a.Z)(n,[{key:"componentDidMount",value:function(){this.props.fetchContacts()}},{key:"render",value:function(){return(0,p.jsxs)("div",{className:"contacts",style:{marginTop:65},children:[this.props.isLoadingContacts&&(0,p.jsx)("h2",{children:"Loading ..."}),(0,p.jsx)(h,{onSubmitData:this.props.formSubmitHandler}),(0,p.jsx)("h1",{style:{marginBottom:25},children:"Contacts"}),(0,p.jsx)(b,{setFilterToState:this.props.filterSet}),(0,p.jsx)(y,{contacts:this.props.visibleArray,del:this.props.contactDelete})]})}}]),n}(u.Component),T=(0,_.$j)((function(t){return{isLoadingContacts:D.getIsLoading(t),contacts:D.getContacts(t),filter:D.getFilter(t),visibleArray:D.getVisibleFilterArray(t)}}),(function(t){return{fetchContacts:function(){return t(Z.Z.fetchContacts())},formSubmitHandler:function(e){return t(Z.Z.addContact(e))},contactDelete:function(e){return t(Z.Z.deleteContact(e))},filterSet:function(e){return t(C.Z.filterSet(e))}}}))(L)}}]);
//# sourceMappingURL=884.3f570378.chunk.js.map