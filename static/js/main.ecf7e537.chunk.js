(this["webpackJsonptodo-list"]=this["webpackJsonptodo-list"]||[]).push([[0],{23:function(t,e,n){},24:function(t,e,n){},30:function(t,e,n){},31:function(t,e,n){},32:function(t,e,n){},33:function(t,e,n){},34:function(t,e,n){"use strict";n.r(e);var c=n(0),i=n(2),a=n.n(i),o=n(17),r=n.n(o),l=(n(23),n(3)),s=n(4),u=n(6),h=n(5),j=(n(24),n(8)),d=n(7),m=n(16);j.b.add(d.a,d.g,d.f,d.c,d.d,d.e,d.b,m.b,m.a,d.h);var v=n(13),b=n(9),f=n(11),C=n(12),O=(n(30),n(10)),k=n.n(O),p=function(t){Object(u.a)(n,t);var e=Object(h.a)(n);function n(){var t;return Object(l.a)(this,n),(t=e.call(this)).state={newitem:""},t}return Object(s.a)(n,[{key:"render",value:function(){var t=this,e=this.props,n=e.onAdd,i=e.onClick,a=e.checkAll,o=this.state.newitem;return Object(c.jsxs)("div",{className:"AddItem",children:[Object(c.jsx)("div",{className:k()("iconcheckAll",{checkAllactive:a}),children:Object(c.jsx)(C.a,{className:"icon-checkAll",icon:"chevron-down",onClick:i})}),Object(c.jsx)("input",{className:"item-add",type:"text",placeholder:"Add new item",value:o,onChange:function(e){return function(e){t.setState({newitem:e})}(e.target.value)},onKeyPress:function(e){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},c=t.state.newitem;"Enter"===e.key&&c&&(n({item:c,active:!1}),t.setState({newitem:""}))}(e)}})]})}}]),n}(i.Component),x=(n(31),function(t){Object(u.a)(n,t);var e=Object(h.a)(n);function n(){return Object(l.a)(this,n),e.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){var t=this.props,e=t.item,n=t.onClick,i=t.onDel;return Object(c.jsxs)("div",{className:"ListItem",children:[Object(c.jsxs)("div",{children:[!e.active&&Object(c.jsx)(C.a,{className:"icon-check",icon:["far","circle"],onClick:n}),e.active&&Object(c.jsx)(C.a,{className:"icon-checked",icon:["far","check-circle"],onClick:n}),Object(c.jsx)("div",{className:k()("item",{active:e.active}),children:e.item})]}),Object(c.jsx)(C.a,{className:"icon-del",icon:"times",onClick:i})]})}}]),n}(i.Component)),D=(n(32),function(t){Object(u.a)(n,t);var e=Object(h.a)(n);function n(){var t;return Object(l.a)(this,n),(t=e.call(this)).Current=["All","Active","Complated"],t}return Object(s.a)(n,[{key:"render",value:function(){var t=this.props,e=t.itemLeft,n=t.allItem,i=t.currentFilter,a=t.onClick,o=t.onDelComplated;return Object(c.jsxs)("div",{className:"CurrentItem",children:[Object(c.jsxs)("div",{className:"item-left",children:[Object(c.jsx)("span",{children:e})," item left"]}),this.Current.map((function(t,e){return Object(c.jsx)(g,{currentFilter:i,text:t,onClick:a},e)})),e<n&&Object(c.jsx)("div",{className:"bnt-clear-complated",onClick:o,children:"clear complated"})]})}}]),n}(i.Component)),g=function(t){Object(u.a)(n,t);var e=Object(h.a)(n);function n(){return Object(l.a)(this,n),e.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){var t=this.props,e=t.text,n=t.currentFilter,i=t.onClick;return Object(c.jsx)("div",{className:"current-state",children:Object(c.jsx)("div",{className:k()("bnt-all",{active:e===n}),onClick:function(){i(e)},children:e})})}}]),n}(i.Component),A=D,I=(n(33),function(t){Object(u.a)(n,t);var e=Object(h.a)(n);function n(){var t;return Object(l.a)(this,n),(t=e.call(this)).onAdd=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.state.toDoItem;t.setState({toDoItem:[].concat(Object(b.a)(n),[Object(v.a)({},e)])},(function(){return t.onChangeCheck()}))},t.onCurrentFilter=function(e){("All"===e||"Active"===e||"Complated"===e)&&t.setState({currentFilter:e})},t.filterCheck=function(e){var n=t.state.toDoItem;return"All"===e?n:"Active"===e?n.filter((function(t){return!t.active})):"Complated"===e?n.filter((function(t){return t.active})):void 0},t.state={currentFilter:"All",toDoItem:[{item:"an",active:!1},{item:"choi",active:!1},{item:"ngu",active:!1}],checkall:!1,itemLeft:3},t.onAllClick=t.onAllClick.bind(Object(f.a)(t)),t.onChangeCheck=t.onChangeCheck.bind(Object(f.a)(t)),t.onDelComplated=t.onDelComplated.bind(Object(f.a)(t)),t}return Object(s.a)(n,[{key:"onItemClick",value:function(t,e){var n=this;return function(c){var i=n.state.toDoItem,a=t.active;n.setState({toDoItem:[].concat(Object(b.a)(i.slice(0,e)),[Object(v.a)(Object(v.a)({},t),{},{active:!a})],Object(b.a)(i.slice(e+1)))},(function(){return n.onChangeCheck()}))}}},{key:"onChangeCheck",value:function(){var t=this.state.toDoItem.map((function(t){return t.active})),e=this.state.toDoItem.filter((function(t){return!t.active}));this.setState({itemLeft:e.length}),t.includes(!1)?this.setState({checkall:!1}):this.setState({checkall:!0})}},{key:"onDelClick",value:function(t,e){var n=this;return function(t){var c=n.state.toDoItem;n.setState({toDoItem:[].concat(Object(b.a)(c.slice(0,e)),Object(b.a)(c.slice(e+1)))},(function(){return n.onChangeCheck()}))}}},{key:"onAllClick",value:function(){this.state.toDoItem.map((function(t){return t.active=!0})),this.onChangeCheck()}},{key:"onDelComplated",value:function(){var t=this.state.toDoItem.filter((function(t){return!t.active}));this.setState({toDoItem:Object(b.a)(t)})}},{key:"render",value:function(){var t=this,e=this.state,n=e.checkall,i=e.itemLeft,a=e.currentFilter,o=this.filterCheck(a),r=this.state.toDoItem.length;return Object(c.jsxs)("div",{className:"Todolist",children:[Object(c.jsx)("div",{className:"title",children:"Todos"}),Object(c.jsxs)("div",{className:"TodoTable",children:[Object(c.jsx)(p,{onAdd:this.onAdd,onClick:this.onAllClick,checkAll:n}),o.map((function(e,n){return Object(c.jsx)(x,{item:e,onClick:t.onItemClick(e,n),onChange:t.onChangeCheck,onDel:t.onDelClick(e,n)},n)})),Object(c.jsx)(A,{itemLeft:i,allItem:r,currentFilter:a,onClick:this.onCurrentFilter,onDelComplated:this.onDelComplated})]})]})}}]),n}(i.Component)),y=function(t){Object(u.a)(n,t);var e=Object(h.a)(n);function n(){return Object(l.a)(this,n),e.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return Object(c.jsx)("div",{className:"App",children:Object(c.jsx)(I,{})})}}]),n}(i.Component),N=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,35)).then((function(e){var n=e.getCLS,c=e.getFID,i=e.getFCP,a=e.getLCP,o=e.getTTFB;n(t),c(t),i(t),a(t),o(t)}))};r.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(y,{})}),document.getElementById("root")),N()}},[[34,1,2]]]);
//# sourceMappingURL=main.ecf7e537.chunk.js.map