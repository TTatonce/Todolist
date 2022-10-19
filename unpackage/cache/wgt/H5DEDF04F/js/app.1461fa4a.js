(function(){"use strict";var t={3366:function(t,o,e){var n=e(6369),i=function(){var t=this,o=t._self._c;return o("div",{attrs:{id:"app"}},[o("div",{staticClass:"todo-container"},[o("h1",{staticClass:"hh1"},[t._v("ToDoList")]),o("div",{staticClass:"todo-wrap"},[o("MyTop",{on:{addTodo:t.addTodo}}),o("MyList",{attrs:{todos:t.todos}}),o("MyEnd",{attrs:{todos:t.todos},on:{checkAllTodo:t.checkAllTodo,clearAllTodo:t.clearAllTodo}})],1),t._m(0),o("h3",{staticClass:"hh3"},[t._v("2022.10.19 by zhy")])])])},s=[function(){var t=this,o=t._self._c;return o("div",{attrs:{id:"pic"}},[o("img",{staticClass:"img1",attrs:{src:e(2443),alt:"纳西妲"}})])}],r=(e(541),function(){var t=this,o=t._self._c;return o("div",{staticClass:"todo-header"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],attrs:{type:"text",placeholder:"请输入你的任务名称，按回车键确认"},domProps:{value:t.title},on:{keyup:function(o){return!o.type.indexOf("key")&&t._k(o.keyCode,"enter",13,o.key,"Enter")?null:t.add.apply(null,arguments)},input:function(o){o.target.composing||(t.title=o.target.value)}}})])}),l=[],a=e(691),d={name:"MyTop",data(){return{title:""}},methods:{add(){if(!this.title.trim())return alert("输入不能为空");const t={id:(0,a.x0)(),title:this.title,done:!1};this.$emit("addTodo",t),this.title=""}}},c=d,u=e(1001),h=(0,u.Z)(c,r,l,!1,null,"14cc4fc7",null),f=h.exports,p=function(){var t=this,o=t._self._c;return o("ul",{staticClass:"todo-main"},t._l(t.todos,(function(t){return o("MyItem",{key:t.id,attrs:{todo:t}})})),1)},v=[],m=function(){var t=this,o=t._self._c;return o("div",{staticClass:"todo-header"},[o("li",[o("label",[o("input",{attrs:{type:"checkbox"},domProps:{checked:t.todo.done},on:{change:function(o){return t.handleCheck(t.todo.id)}}}),o("span",[t._v(t._s(t.todo.title))])]),o("button",{staticClass:"btn btn-danger",on:{click:function(o){return t.handleDelete(t.todo.id)}}},[t._v(" 删除 ")])])])},y=[],b={name:"MyItem",props:["todo"],methods:{handleCheck(t){this.$bus.$emit("checkTodo",t)},handleDelete(t){confirm("确定删除吗?")&&this.$bus.$emit("deleteTodo",t)}}},k=b,T=(0,u.Z)(k,m,y,!1,null,"3c7b6236",null),_=T.exports,g={name:"MyList",components:{MyItem:_},props:["todos"]},A=g,x=(0,u.Z)(A,p,v,!1,null,"0691829f",null),C=x.exports,$=function(){var t=this,o=t._self._c;return t.total?o("div",{staticClass:"todo-footer"},[o("label",[o("input",{directives:[{name:"model",rawName:"v-model",value:t.isAll,expression:"isAll"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.isAll)?t._i(t.isAll,null)>-1:t.isAll},on:{change:function(o){var e=t.isAll,n=o.target,i=!!n.checked;if(Array.isArray(e)){var s=null,r=t._i(e,s);n.checked?r<0&&(t.isAll=e.concat([s])):r>-1&&(t.isAll=e.slice(0,r).concat(e.slice(r+1)))}else t.isAll=i}}})]),o("span",[o("span",[t._v("已完成"+t._s(t.doneTotal)+" ")]),t._v(" / 全部"+t._s(t.total)+" ")]),o("button",{staticClass:"btn btn-danger",on:{click:t.clearAll}},[t._v("清除已完成任务")])]):t._e()},O=[],w={name:"MyEnd",props:["todos"],computed:{total(){return this.todos.length},doneTotal(){return this.todos.reduce(((t,o)=>t+(o.done?1:0)),0)},isAll:{get(){return this.doneTotal===this.total&&this.total>0},set(t){this.$emit("checkAllTodo",t)}}},methods:{checkAll(t){this.checkAllTodo(t.target.checked)},clearAll(){this.$emit("clearAllTodo")}}},M=w,P=(0,u.Z)(M,$,O,!1,null,"a5ff0e14",null),Z=P.exports,E={name:"App",components:{MyEnd:Z,MyTop:f,MyList:C},data(){return{todos:JSON.parse(localStorage.getItem("todos"))||[]}},methods:{addTodo(t){this.todos.unshift(t)},checkTodo(t){this.todos.forEach((o=>{o.id===t&&(o.done=!o.done)}))},deleteTodo(t){this.todos=this.todos.filter((o=>o.id!==t))},checkAllTodo(t){this.todos.forEach((o=>{o.done=t}))},clearAllTodo(){this.todos=this.todos.filter((t=>!t.done))}},watch:{todos:{deep:!0,handler(t){localStorage.setItem("todos",JSON.stringify(t))}}},mounted(){this.$bus.$on("checkTodo",this.checkTodo),this.$bus.$on("deleteTodo",this.deleteTodo)},beforeDestroy(){this.$bus.$off("checkTodo"),this.$bus.$off("deleteTodo")}},j=E,I=(0,u.Z)(j,i,s,!1,null,null,null),D=I.exports;n.ZP.config.productionTip=!1,new n.ZP({render:t=>t(D),beforeCreate(){n.ZP.prototype.$bus=this}}).$mount("#app")},2443:function(t,o,e){t.exports=e.p+"img/naxida.9be0a32a.png"}},o={};function e(n){var i=o[n];if(void 0!==i)return i.exports;var s=o[n]={exports:{}};return t[n](s,s.exports,e),s.exports}e.m=t,function(){var t=[];e.O=function(o,n,i,s){if(!n){var r=1/0;for(c=0;c<t.length;c++){n=t[c][0],i=t[c][1],s=t[c][2];for(var l=!0,a=0;a<n.length;a++)(!1&s||r>=s)&&Object.keys(e.O).every((function(t){return e.O[t](n[a])}))?n.splice(a--,1):(l=!1,s<r&&(r=s));if(l){t.splice(c--,1);var d=i();void 0!==d&&(o=d)}}return o}s=s||0;for(var c=t.length;c>0&&t[c-1][2]>s;c--)t[c]=t[c-1];t[c]=[n,i,s]}}(),function(){e.n=function(t){var o=t&&t.__esModule?function(){return t["default"]}:function(){return t};return e.d(o,{a:o}),o}}(),function(){e.d=function(t,o){for(var n in o)e.o(o,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:o[n]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){e.o=function(t,o){return Object.prototype.hasOwnProperty.call(t,o)}}(),function(){e.p=""}(),function(){var t={143:0};e.O.j=function(o){return 0===t[o]};var o=function(o,n){var i,s,r=n[0],l=n[1],a=n[2],d=0;if(r.some((function(o){return 0!==t[o]}))){for(i in l)e.o(l,i)&&(e.m[i]=l[i]);if(a)var c=a(e)}for(o&&o(n);d<r.length;d++)s=r[d],e.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return e.O(c)},n=self["webpackChunktodolist"]=self["webpackChunktodolist"]||[];n.forEach(o.bind(null,0)),n.push=o.bind(null,n.push.bind(n))}();var n=e.O(void 0,[998],(function(){return e(3366)}));n=e.O(n)})();
//# sourceMappingURL=app.1461fa4a.js.map