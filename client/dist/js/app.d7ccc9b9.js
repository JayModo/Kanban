(function(t){function e(e){for(var a,i,n=e[0],l=e[1],c=e[2],u=0,m=[];u<n.length;u++)i=n[u],o[i]&&m.push(o[i][0]),o[i]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);d&&d(e);while(m.length)m.shift()();return r.push.apply(r,c||[]),s()}function s(){for(var t,e=0;e<r.length;e++){for(var s=r[e],a=!0,n=1;n<s.length;n++){var l=s[n];0!==o[l]&&(a=!1)}a&&(r.splice(e--,1),t=i(i.s=s[0]))}return t}var a={},o={app:0},r=[];function i(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,i),s.l=!0,s.exports}i.m=t,i.c=a,i.d=function(t,e,s){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(s,a,function(e){return t[e]}.bind(null,a));return s},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],l=n.push.bind(n);n.push=e,n=n.slice();for(var c=0;c<n.length;c++)e(n[c]);var d=l;r.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"034f":function(t,e,s){"use strict";var a=s("64a9"),o=s.n(a);o.a},"0b01":function(t,e,s){"use strict";var a=s("3dea"),o=s.n(a);o.a},"17af":function(t,e,s){"use strict";var a=s("502b"),o=s.n(a);o.a},2373:function(t,e,s){"use strict";var a=s("6330"),o=s.n(a);o.a},2681:function(t,e,s){"use strict";var a=s("3878"),o=s.n(a);o.a},3878:function(t,e,s){},"3afa":function(t,e,s){},"3dea":function(t,e,s){},"42b0":function(t,e,s){},"4a2e":function(t,e,s){"use strict";var a=s("ef82"),o=s.n(a);o.a},"502b":function(t,e,s){},"56d7":function(t,e,s){"use strict";s.r(e);var a=s("2b0e"),o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container-fluid page-img",style:t.backgroundImg},[s("div",{attrs:{id:"app"}},[s("link",{attrs:{rel:"stylesheet",href:"https://use.fontawesome.com/releases/v5.2.0/css/all.css",integrity:"sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ",crossorigin:"anonymous"}}),s("nav",{staticClass:"navbar shadow p-3 mb-2 rounded navbar-light bg-light justify-content-between",attrs:{id:"navColor"}},[t._m(0),s("form",{staticClass:"form"},[s("div",{staticClass:"button-container"},[s("button",{directives:[{name:"show",rawName:"v-show",value:t.isBoardPage,expression:"isBoardPage"}],staticClass:"btn btn-primary",on:{click:t.createList}},[s("i",{staticClass:"fas fa-clipboard-list"}),t._v(" New List\n          ")]),s("button",{staticClass:"btn btn-primary",on:{click:function(e){t.showModalForm(t.MODAL_USAGE.USER)}}},[t._v("Edit User")]),s("button",{directives:[{name:"show",rawName:"v-show",value:t.isBoardPage,expression:"isBoardPage"}],staticClass:"btn btn-primary",on:{click:function(e){t.showModalForm(t.MODAL_USAGE.COLLABORATORS)}}},[t._v("Edit\n            Collaborators")])])]),s("form",{staticClass:"form"},[s("router-link",{directives:[{name:"show",rawName:"v-show",value:!t.isLogin,expression:"!isLogin"}],attrs:{id:"log-out",to:"/login"}},[t._v(" logout "),s("i",{staticClass:"fas fa-sign-out-alt"})])],1)]),s("router-view")],1),s("my-modal",{attrs:{closeCallBack:t.modalCloseCallBack,showModal:t.showModal}},[t.modalUsage===t.MODAL_USAGE.USER?s("user"):t._e(),t.modalUsage===t.MODAL_USAGE.COLLABORATORS?s("collaborators",{attrs:{cancelCallBack:t.modalCloseCallBack}}):t._e()],1)],1)},r=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("a",{staticClass:"navbar-brand"},[s("i",{staticClass:"fab fa-kickstarter-k",attrs:{id:"theK"}}),t._v("anban\n        "),s("i",{staticClass:"fab fa-kickstarter-k",attrs:{id:"theK"}}),t._v("abana "),s("i",{staticClass:"fas fa-umbrella-beach",attrs:{id:"umbrella"}})])}],i=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},n=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("form",{staticClass:"user-form"},[s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"user-name"}},[t._v("Name")]),s("input",{staticClass:"form-control",attrs:{type:"text",id:"user-name",placeholder:"Enter Your Name"}})]),s("div",{staticClass:"input-group mb-3"},[s("div",{staticClass:"input-group-prepend"},[s("span",{staticClass:"input-group-text"}),t._v("Picture")]),s("div",{staticClass:"custom-file"},[s("input",{staticClass:"custom-file-input",attrs:{type:"file",id:"file-place-hoder"}}),s("label",{staticClass:"custom-file-label",attrs:{for:"file-place-hoder"}},[t._v("Choose file")])])]),s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"color-picker"}},[t._v("Color")]),s("input",{staticStyle:{width:"85%"},attrs:{type:"color",id:"color-picker",onchange:"pickColor($event)",value:"#ff0000"}})]),s("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[t._v("Submit")])])}],l={name:"user",props:{user:{type:Object}},components:{},data(){return{}},computed:{},methods:{pickColor(t){}}},c=l,d=s("2877"),u=Object(d["a"])(c,i,n,!1,null,null,null),m=u.exports;const p={NONE:0,USER:1,COLLABORATORS:2};var h={name:"App",components:{User:m},data(){return{editingUser:!1,showModal:!1,MODAL_USAGE:p,modalUsage:p.NONE}},computed:{backgroundImg(){let t="",e=this.$route.name;switch(e){case"boards":t="./Images/Boards.jpg";break;case"board":t="./Images/board.jpg";break;default:t="./Images/login.jpg"}let s={backgroundImage:`url('${t}')`};return s},isBoardPage(){let t="board"==this.$route.name;return t},isLogin(){let t="login"==this.$route.name;return t}},methods:{createList(){this.$store.dispatch("createList",this.getList())},getList(){let t={title:"",user:this.userId,board:this.$route.params.boardId};return t},showModalForm(t){this.modalUsage=t,this.showModal=!0},modalCloseCallBack(){this.modalUsage=p.NONE,this.showModal=!1}}},b=h,g=(s("034f"),Object(d["a"])(b,o,r,!1,null,null,null)),v=g.exports,f=s("8c4f"),w=s("2f62"),y=s("bc3a"),C=s.n(y);let k=location.host.includes("localhost")?"//localhost:3000/":"/",_=C.a.create({baseURL:k+"account/",timeout:3e3,withCredentials:!0});class ${static async Login(t){try{let s=await _.post("login",t);return s.data}catch(e){throw new Error(`[login failed] : ${e.response?e.response.data.error:"No response from server"}`)}}static async Register(t){try{let s=await _.post("register",t);return s.data}catch(e){throw new Error(`[registration failed] : ${e.response?e.response.data.error:"No response from server"}`)}}static async Logout(){try{await _.delete("logout");return!0}catch(t){throw new Error(`[logout failed] : ${t.response?t.response.data.error:"No response from server"}`)}}static async Authenticate(){try{let e=await _.get("authenticate");return e.data}catch(t){console.warn(`[Authentication failed] : ${t.response?t.response.data.error:"No response from server"}`)}}}const B="account";let L=window.location.host.includes("localhost:8080")?"//localhost:3000/":"/",T=C.a.create({baseURL:L+B,timeout:3e3,withCredentials:!0});var I={state:{user:{},users:[]},mutations:{setUser(t,e){t.user=e},setUsers(t,e){t.users=e},resetState(t){t.user={}}},actions:{async register({commit:t,dispatch:e},s){try{let o=await $.Register(s);t("setUser",o),e("getUsers"),Ft.push({name:"boards"})}catch(a){console.warn(a.message)}},async login({commit:t,dispatch:e},s){try{let o=await $.Login(s);t("setUser",o),e("getUsers"),Ft.push({name:"boards"})}catch(a){console.warn(a.message)}},async logout({commit:t,dispatch:e}){try{await $.Logout();t("resetState"),Ft.push({name:"login"})}catch(s){console.warn(s.message)}},async getUsers({commit:t}){try{let s="users",a=await T.get(s),o=a.data;t("setUsers",o)}catch(e){console.error("store-modules > actions > getUsers()")}}}};const x="server.use(...) in server -> main.js";let U=window.location.host.includes("localhost:8080")?"//localhost:3000/":"/";C.a.create({baseURL:U+x,timeout:3e3,withCredentials:!0});const j="api/boards";let E=window.location.host.includes("localhost:8080")?"//localhost:3000/":"/",O=C.a.create({baseURL:E+j,timeout:3e3,withCredentials:!0});var A={state:{boards:[],activeBoard:{}},mutations:{setActiveBoard(t,e){t.activeBoard=e},setBoards(t,e){t.boards=e},deleteBoard(t,e){t.boards=e}},actions:{async deleteBoard({commit:t,dispatch:e},s){try{let t=s,o=`${t}`;await O.delete(o),e("getBoards")}catch(a){alert("store-module boards.js actions deleteBoard() ")}},async deleteList({commit:t,dispatch:e},s){try{let t=`${s._id}`,o=`${t}`;await O.delete(o),e("getBoards",t)}catch(a){console.error("store-modules > lists.js > actions > deleteList()")}},async getBoards({commit:t,dispatch:e}){try{let e=await O.get(""),a=e.data;t("setBoards",a)}catch(s){}},async getBoardById({dispatch:t,commit:e},s){try{let t=`${s}`,o=await O.get(t,s),r=o.data;e("setActiveBoard",r)}catch(a){Ft.push("/")}},async addBoard({commit:t,dispatch:e},s){try{let t=await O.post("",s);t&&e("getBoards")}catch(a){}},async editBoard({commit:t,dispatch:e},s){try{let o=`${s._id}`,r=await O.put(o,s),i=r.data;t("setActiveBoard",i),e("getBoards")}catch(a){console.error("store-modules > boards.js > actions: editBoard()")}},async loadBoard({dispatch:t},e){try{this.$store.dispatch("getBoardById",this.$route.params.boardId),this.$store.dispatch("getLists",this.$route.params.boardId),this.$store.state.List.lists.forEach(t=>{let e=t._id;this.$store.dispatch("getTasksByListId",e)})}catch(s){console.error("store-modules > boards.js > actions: loadBoard()")}}}};const N="api/boards";let S=window.location.host.includes("localhost:8080")?"//localhost:3000/":"/",R=C.a.create({baseURL:S+N,timeout:3e3,withCredentials:!0});var P={state:{collaborators:{}},mutations:{setCollaborators(t,e){a["a"].set(t.collaborators,e.boardId,e.collaborators)}},actions:{async getCollaborators({commit:t},e){try{let a=`${e}/collaborators`,o=await R.get(a),r=o.data,i={boardId:e,collaborators:r};t("setCollaborators",i)}catch(s){console.error("store-modules > template.js > actions: setCollaborators()")}},async addCollaborator({dispatch:t},e){try{let a=e.board,o=e.user,r=`${a}/collaborators/${o}`;await R.post(r,e),t("getCollaborators",a)}catch(s){console.error("store-modules > template.js > actions: createCollaborators()")}},async removeCollaborator({dispatch:t},e){try{let a=e.board,o=e._id,r=`${a}/collaborators/${o}`;await R.delete(r),t("getCollaborators",a)}catch(s){console.error("store-modules > template.js > actions: deleteCollaborators()")}},async editCollaborator({dispatch:t},e){try{let a=e.board,o=e.collaboratorId,r=e.collaborator,i=`${a}/collaborators/${o}`;await R.put(i,r),t("getCollaborators",a)}catch(s){console.error("store-modules > template.js > actions: editCollaborators()")}}}};const D="api/tasks";let V=window.location.host.includes("localhost:8080")?"//localhost:3000/":"/",M=C.a.create({baseURL:V+D,timeout:3e3,withCredentials:!0});var z={state:{comments:{}},mutations:{setCommentsByTaskId(t,e){a["a"].set(t.comments,e.taskId,e.comments)}},actions:{async createComment({dispatch:t},e){try{let a=e.task,o=`${a}/comments`,r=await M.post(o,e);r&&t("getCommentsByTaskId",a)}catch(s){console.error("store-modules/comments.js actions: createComment()")}},async getCommentsByTaskId({commit:t},e){try{let a=`${e}/get-comments`,o=await M.post(a,{}),r=o.data,i={comments:r,taskId:e};t("setCommentsByTaskId",i)}catch(s){console.error("store-modules/comments.js actions: getCommentsByTaskId()")}},async deleteComment({dispatch:t},e){try{let a=e._id,o=e.task,r=`${o}/comments/${a}`;await M.delete(r),t("getCommentsByTaskId",o)}catch(s){console.error("store-modules/comments.js actions: deleteComment()")}},async editComment({dispatch:t},e){try{let a=e._id,o=e.task,r=`${o}/comments/${a}`;await M.put(r,e),t("getCommentsByTaskId",o)}catch(s){console.error("store-modules/comments.js actions: editComment()")}}}};const F="api/lists";let K=window.location.host.includes("localhost:8080")?"//localhost:3000/":"/",G=C.a.create({baseURL:K+F,timeout:3e3,withCredentials:!0});var q={state:{lists:[]},mutations:{setLists(t,e){a["a"].set(t,"lists",e)}},actions:{async createList({dispatch:t},e){try{let a=await G.post("",e);a&&t("getLists",e.board)}catch(s){console.error("store-modules > lists.js > actions > createList()")}},async getLists({commit:t,dispatch:e,state:s},a){let o=`boards/${a}`;try{let a=await G.get(o),i=a.data;t("setLists",i),s.lists.forEach(t=>{let s=t._id;e("getTasksByListId",s)})}catch(r){console.error("store-modules > lists.js > actions > getLists()")}},async deleteListById({dispatch:t},e){try{let t=`${e}`;await G.delete(t)}catch(s){console.error("store-modules > lists.js > actions > deleteListById()")}},async deleteList({commit:t,dispatch:e},s){try{let t=s._id,o=s.board,r=`${t}`;await G.delete(r),e("getLists",o)}catch(a){console.error("store-modules > lists.js > actions > deleteList()")}},async editList({dispatch:t,commit:e},s){try{let e=`${s._id}`;await G.put(e,s),t("getLists",s.board)}catch(a){console.error("store-modules > lists.js > actions > editList()")}}}};const H="api/lists";let J=window.location.host.includes("localhost:8080")?"//localhost:3000/":"/",W=C.a.create({baseURL:J+H,timeout:3e3,withCredentials:!0});var X={state:{tasks:{}},mutations:{setTasksByListId(t,e){a["a"].set(t.tasks,e.listId,e.tasks)}},actions:{async createNewTask({commit:t,dispatch:e},s){try{let t=`${s.list}/tasks`,o=await W.post(t,s);o&&e("getTasksByListId",s.list)}catch(a){console.error("store-modules > tasks.js > actions > createNewTask()")}},async getTasksByListId({commit:t,dispatch:e},s){try{let e=`${s}/tasks`,o=await W.get(e),r=o.data,i={tasks:r,listId:s};t("setTasksByListId",i)}catch(a){console.error("store-modules > tasks.js > actions > getTasksByListId()")}},async editTask({dispatch:t},e){try{let a=`${e.list}/tasks/${e._id}`;await W.put(a,e),t("getTasksByListId",e.list)}catch(s){console.error("store-modules > tasks.js > actions > editTask()")}},async moveTask({commit:t,dispatch:e},s){try{let t=`${s.list}/tasks/${s._id}`;await W.put(t,s)}catch(a){console.error("store-modules > tasks.js > actions > moveTask()")}},async deleteTask({dispatch:t},e){let s=e._id,a=e.list,o=`${a}/tasks/${s}`;try{await W.delete(o),t("getTasksByListId",a)}catch(r){console.error("store-modules > tasks.js > actions > deleteTask()")}}}};a["a"].use(w["a"]);var Q=new w["a"].Store({modules:{Auth:I,Boards:A,Collaborators:P,Comments:z,Lists:q,Tasks:X}}),Y=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container-fluid"},[s("div",{staticClass:"boards"},[s("h4",[t._v(" Welcome to your personal Kabana")]),s("form",{on:{submit:function(e){return e.preventDefault(),t.addBoard(e)}}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.newBoard.title,expression:"newBoard.title"}],attrs:{type:"text",placeholder:"title",required:""},domProps:{value:t.newBoard.title},on:{input:function(e){e.target.composing||t.$set(t.newBoard,"title",e.target.value)}}}),s("input",{directives:[{name:"model",rawName:"v-model",value:t.newBoard.description,expression:"newBoard.description"}],attrs:{type:"text",placeholder:"description"},domProps:{value:t.newBoard.description},on:{input:function(e){e.target.composing||t.$set(t.newBoard,"description",e.target.value)}}}),s("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[t._v("Create Board")])]),t._l(t.boards,function(e){return s("div",{key:e._id,attrs:{boards:e}},[s("button",{staticClass:"btn btn-danger",on:{click:function(s){t.deleteBoard(e._id)}}},[s("i",{staticClass:"far fa-trash-alt"})]),s("router-link",{attrs:{id:"boardTitles",to:{name:"board",params:{boardId:e._id}}}},[s("h2",[t._v(" "+t._s(e.title)+" ")])])],1)})],2)])},Z=[],tt={name:"boards",mounted(){console.log("Boards.vue mounted(): Try using promises so this can run in the background"),this.$store.dispatch("getBoards"),this.$store.state.Boards.boards.forEach(t=>{let e=t._id;this.$store.dispatch("getCollaborators",e)})},data(){return{newBoard:{title:"",description:""}}},computed:{boards(){return this.$store.state.Boards.boards}},methods:{deleteBoard(t){this.$store.dispatch("deleteBoard",t)},addBoard(){this.$store.dispatch("addBoard",this.newBoard),this.newBoard={title:"",description:""}}}},et=tt,st=(s("ebe8"),Object(d["a"])(et,Y,Z,!1,null,"18534f3b",null)),at=st.exports,ot=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container-fluid test"},[s("div",{staticClass:"row"},[t.board.title?s("click-edit",{staticClass:"board-title",attrs:{initialValue:t.board.title,placeHolder:"Board Title...",enterKeyPress:t.changeBoardTitle}}):t._e()],1),s("div",{staticClass:"scrolling-wrapper",attrs:{id:"board-lists-continer"}},t._l(t.lists,function(e){return t.lists?s("list",{staticClass:"list",attrs:{boardList:e}}):t._e()}))])},rt=[],it=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-3 list mr-3"},[s("div",{staticClass:"input-group mb-3"},[s("click-edit",{staticClass:"list-title",attrs:{initialValue:t.boardList.title,placeHolder:"List Title",enterKeyPress:t.titleChange}}),s("div",{staticClass:"input-group-append"},[s("div",{staticClass:"dropdown"},[t._m(0),s("div",{staticClass:"dropdown-menu"},[s("a",{directives:[{name:"show",rawName:"v-show",value:t.isAllowed(t.boardList.user),expression:"isAllowed(boardList.user)"}],staticClass:"dropdown-item",on:{click:t.deleteList}},[t._v("Remove List")]),s("a",{staticClass:"dropdown-item"},[t._v("Another action")]),s("a",{staticClass:"dropdown-item"},[t._v("Something else here")])])])])],1),s("draggable",{staticClass:"list-group",attrs:{group:"myGroup",move:t.checkMove},on:{start:t.startDrag,add:t.onDrop},model:{value:t.myList,callback:function(e){t.myList=e},expression:"myList"}},[s("transition-group",{attrs:{type:"transition",name:"flip-list"}},t._l(t.myList,function(e){return s("task",{key:e._id,staticClass:"list-group-item",attrs:{"data-list":t.boardList._id,task:e}},[t._v("\n        "+t._s(e.description)+"\n      ")])}))],1),s("p",{staticClass:"new-task",on:{click:t.createNewTask}},[s("i",{staticClass:"fas fa-tasks"}),t._v(" New Task\n  ")])],1)},nt=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"button","data-toggle":"dropdown"}},[s("i",{staticClass:"fas fa-caret-down"})])}],lt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"task"},[s("div",{staticClass:"input-group"},[s("click-edit",{staticClass:"task-edit",attrs:{initialValue:t.task.description,placeHolder:"Task...",enterKeyPress:t.clickEdit}}),s("div",{staticClass:"input-group-append"},[s("div",{staticClass:"dropdown"},[t._m(0),s("div",{staticClass:"dropdown-menu"},[s("a",{directives:[{name:"show",rawName:"v-show",value:t.isAllowed(t.task.user),expression:"isAllowed(task.user)"}],staticClass:"dropdown-item",on:{click:t.deleteTask}},[s("i",{staticClass:"far fa-trash-alt"}),t._v("\n            Remove Task")]),s("a",{staticClass:"dropdown-item",on:{click:t.addComment}},[s("i",{staticClass:"far fa-plus-square"}),t._v(" Add comment")])])])])],1),s("div",{staticClass:"container"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col"},t._l(t.comments,function(t){return s("comment",{key:t._id,attrs:{comment:t}})}))])])])},ct=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"button","data-toggle":"dropdown"}},[s("i",{staticClass:"fas fa-caret-down"})])}],dt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.comment?s("div",{staticClass:"comment"},[s("user-icon",{staticClass:"u-icon",attrs:{user:t.comment.user}}),s("click-edit",{staticClass:"comment-edit",attrs:{initialValue:t.comment.description,placeHolder:"Comment...",enterKeyPress:t.submitEdit}}),t.canDelete?s("div",{staticClass:"delete",on:{click:t.deleteComment}},[t._v("\n    X\n  ")]):t._e()],1):t._e()},ut=[],mt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.editValue,expression:"editValue"}],staticClass:"click-edit",class:[t.editing?"editing":"dormant","input-group-prepend","form-control","my-class"],attrs:{rows:"1",type:"text",placeholder:t.placeHolder,readonly:!t.editing},domProps:{value:t.editValue},on:{change:function(e){return e.preventDefault(),t.resize(e)},cut:t.delayedResize,paste:t.delayedResize,click:function(e){e.preventDefault(),t.click(e)},keydown:function(e){t.keyDown(e)},focusout:function(e){t.focusOut(e)},resize:t.resize,input:function(e){e.target.composing||(t.editValue=e.target.value)}}})},pt=[],ht={name:"click-edit",props:{initialValue:{type:String},placeHolder:{type:String},enterKeyPress:{type:Function,required:!0}},components:{},data(){return{initialValueToUse:"",editValue:"",editing:!1}},computed:{},mounted(){this.editValue="",this.initialValueToUse=this.initialValue,setTimeout(()=>{this.$el.onresize=this.resize(),this.editValue=this.initialValue,this.resize()},100)},methods:{delayedResize(){window.setTimeout(this.resize(),0)},resize(t){window.setTimeout(()=>{let t=this.$el;this.$el.onresize=void 0,t.style.height="auto",t.style.height=t.scrollHeight+"px",this.$el.onresize=this.resize()},1)},cancel(t){window.getSelection().removeAllRanges(),this.editing=!1,this.editValue=this.initialValue,t.target.blur()},click(t){if(t.preventDefault(),this.editing)return;this.editing=!0;let e=t.target.value.length,s=t.target;if(s.setSelectionRange)s.focus(),s.setSelectionRange(0,e);else if(s.createTextRange){var a=s.createTextRange();a.collapse(!0),a.moveEnd("character",e),a.moveStart("character",0),a.select()}},keyDown(t){switch(t.key){case"Enter":let e=this.editValue;this.enterKeyPress(this.editValue),this.editing=!1,t.target.blur(),this.initialValueToUse=e,this.editValue=e;break;case"Escape":this.cancel(t);break;default:}},focusOut(t){this.cancel(t)}}},bt=ht,gt=(s("2373"),Object(d["a"])(bt,mt,pt,!1,null,"3f43ac1f",null)),vt=gt.exports,ft={name:"comment",props:{comment:{type:Object}},computed:{canDelete(){let t=this.isAllowed(this.comment.user._id);return t}},components:{ClickEdit:vt},methods:{authorInitial(){let t=this.comment.user.name.charAt(0).toUpperCase();return t},submitEdit(t){let e=this.comment;e.description=t,this.$store.dispatch("editComment",e)},deleteComment(){this.$store.dispatch("deleteComment",this.comment)}}},wt=ft,yt=(s("17af"),Object(d["a"])(wt,dt,ut,!1,null,"2961ce7a",null)),Ct=yt.exports,kt={name:"task",components:{ClickEdit:vt,Comment:Ct},props:{task:{type:Object}},data(){return{}},computed:{comments(){let t=this.$store.state.Comments.comments[this.task._id]||[];return t}},methods:{deleteTask(){this.$store.dispatch("deleteTask",this.task)},addComment(){let t={user:this.userId(),task:this.task._id,board:this.task.board,list:this.task.list};this.$store.dispatch("createComment",t)},clickEdit(t){let e={_id:this.task._id,description:t,list:this.task.list};this.$store.dispatch("editTask",e)}},mounted(){this.$store.dispatch("getCommentsByTaskId",this.task._id)}},_t=kt,$t=(s("a10c"),Object(d["a"])(_t,lt,ct,!1,null,"04c3a9fa",null)),Bt=$t.exports,Lt=s("310e"),Tt=s.n(Lt),It={name:"list",props:{boardList:{type:Object,required:!0}},components:{draggable:Tt.a,ClickEdit:vt,Task:Bt},data(){return{editable:!0,isDragging:!1,delayedDragging:!1}},methods:{createTaskIfNew(){""===this.boardList.title&&(this.createNewTask(),setTimeout(()=>{this.$el.scrollIntoView()},50))},checkMove(t,e){},endDrag(t){},startDrag(t){},onDrop(t){t.item.dataset.list;let e=this.boardList._id,s=t.newDraggableIndex,a=this.$store.state.Tasks.tasks[e][s];a.list=e,this.$store.dispatch("moveTask",a)},createNewTask(){let t={list:this.boardList._id,user:this.userId(),board:this.boardList.board};this.$store.dispatch("createNewTask",t)},titleChange(t){let e=this.boardList;e.title=t,this.$store.dispatch("editList",e)},deleteList(){let t=this.boardList;this.$store.dispatch("deleteList",t)},orderList(){this.list=this.list.sort((t,e)=>{return t.order-e.order})},onMove({relatedContext:t,draggedContext:e}){const s=t.element;e.element;return!s}},computed:{dragOptions(){return{animation:0,group:"description",disabled:!this.editable,ghostClass:"ghost"}},myList:{get(){let t=this.$store.state.Tasks.tasks[this.boardList._id]||[];return t},set(t){let e=this.boardList._id,s={listId:e,tasks:t};this.$store.commit("setTasksByListId",s)}}},watch:{isDragging(t){t?this.delayedDragging=!0:this.$nextTick(()=>{this.delayedDragging=!1})}},mounted(){let t=this.boardList._id;this.$store.dispatch("getTasksByListId",t),this.createTaskIfNew()}},xt=It,Ut=(s("f245"),Object(d["a"])(xt,it,nt,!1,null,"42760562",null)),jt=Ut.exports,Et={name:"board",components:{List:jt,ClickEdit:vt},computed:{lists(){return this.$store.state.Lists.lists},tasks(){return this.$store.state.Tasks.tasks},board(){return this.$store.state.Boards.activeBoard}},mounted(){console.log("Board.vue mounted(): try using store-modules/boards.js actions: loadBoard()"),this.$store.dispatch("getBoardById",this.$route.params.boardId),this.$store.dispatch("getLists",this.$route.params.boardId),this.$store.state.Lists.lists.forEach(t=>{let e=t._id;this.$store.dispatch("getTasksByListId",e)})},methods:{getTasksByListId(t){let e=this.$store.state.Tasks.tasks[t];return e},changeBoardTitle(t){let e={_id:this.board._id,title:t};this.$store.dispatch("editBoard",e)}}},Ot=Et,At=(s("2681"),Object(d["a"])(Ot,ot,rt,!1,null,"bf4b1b5c",null)),Nt=At.exports,St=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container-fluid"},[s("div",{staticClass:"login"},[t.loginForm?s("form",{on:{submit:function(e){return e.preventDefault(),t.loginUser(e)}}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.creds.email,expression:"creds.email"}],attrs:{type:"email",placeholder:"email"},domProps:{value:t.creds.email},on:{input:function(e){e.target.composing||t.$set(t.creds,"email",e.target.value)}}}),s("input",{directives:[{name:"model",rawName:"v-model",value:t.creds.password,expression:"creds.password"}],attrs:{type:"password",placeholder:"password"},domProps:{value:t.creds.password},on:{input:function(e){e.target.composing||t.$set(t.creds,"password",e.target.value)}}}),s("button",{staticClass:"btn btn-success",attrs:{type:"submit"}},[t._v("Login")])]):s("form",{on:{submit:function(e){return e.preventDefault(),t.register(e)}}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.newUser.name,expression:"newUser.name"}],attrs:{type:"text",placeholder:"name"},domProps:{value:t.newUser.name},on:{input:function(e){e.target.composing||t.$set(t.newUser,"name",e.target.value)}}}),s("input",{directives:[{name:"model",rawName:"v-model",value:t.newUser.email,expression:"newUser.email"}],attrs:{type:"email",placeholder:"email"},domProps:{value:t.newUser.email},on:{input:function(e){e.target.composing||t.$set(t.newUser,"email",e.target.value)}}}),s("input",{directives:[{name:"model",rawName:"v-model",value:t.newUser.password,expression:"newUser.password"}],attrs:{type:"password",placeholder:"password"},domProps:{value:t.newUser.password},on:{input:function(e){e.target.composing||t.$set(t.newUser,"password",e.target.value)}}}),s("button",{staticClass:"btn btn-warning",attrs:{type:"submit"}},[t._v("Create Account")])]),s("div",{staticClass:"action",on:{click:function(e){t.loginForm=!t.loginForm}}},[t.loginForm?s("p",[t._v("No account? Click here to Register")]):s("p",[t._v("Already have an account? Click here to Login")])])])])},Rt=[],Pt={name:"login",data(){return{loginForm:!0,creds:{email:"",password:""},newUser:{email:"",password:"",name:""}}},beforeCreate(){this.$store.state.Auth.user._id&&this.$router.push({name:"boards"})},methods:{register(){this.$store.dispatch("register",this.newUser)},loginUser(){this.$store.dispatch("login",this.creds)}}},Dt=Pt,Vt=(s("d6db"),Object(d["a"])(Dt,St,Rt,!1,null,null,null)),Mt=Vt.exports;a["a"].use(f["a"],Q);let zt=new f["a"]({routes:[{path:"/",name:"boards",component:at},{path:"/board/:boardId",name:"board",props:!0,component:Nt,beforeEnter(t,e,s){Q.commit("setActiveBoard",{}),s()}},{path:"/login",name:"login",component:Mt,beforeEnter(t,e,s){let a=Q;return"login"!=e.name&&a.dispatch("logout"),s()}},{path:"*",redirect:"/"}]});var Ft=zt,Kt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.showModal?s("div",{staticClass:"my-modal",on:{click:function(e){return e.target!==e.currentTarget?null:t.cancel(e)}}},[s("div",{staticClass:"my-modal-body"},[t._t("default")],2)]):t._e()},Gt=[],qt={name:"my-modal",props:{showModal:{type:Boolean,required:!0},closeCallBack:{type:Function,required:!0}},computed:{},methods:{cancel(){this.closeCallBack()}},mounted(){this.isVisible=this.showModal}},Ht=qt,Jt=(s("4a2e"),Object(d["a"])(Ht,Kt,Gt,!1,null,"1c271606",null)),Wt=Jt.exports,Xt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("form",{staticClass:"collaborator-form"},[s("div",{staticClass:"input-group mb-3"},[t._m(0),s("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form-control",attrs:{type:"text",placeholder:"e-Mail"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),s("div",{staticClass:"input-group-append"},[s("button",{directives:[{name:"show",rawName:"v-show",value:t.isEmail,expression:"isEmail"}],staticClass:"btn btn-outline-secondary",attrs:{type:"button"},on:{click:t.addCollaborator}},[t._v("Add")])])]),s("div",{staticClass:"collaborators"},t._l(t.collaborators,function(t){return s("collaborator",{key:t._id,attrs:{collaborator:t}})})),s("div",{staticClass:"button-container"},[s("button",{staticClass:"btn btn-primary",on:{click:t.close}},[t._v("Ok")])])])},Qt=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"input-group-prepend"},[s("span",{staticClass:"input-group-text"},[t._v("Collaborator Email")])])}],Yt={name:"collaborators",props:{cancelCallBack:{type:Function}},computed:{collaborators(){return this.$store.state.Collaborators.collaborators[this.$route.params.boardId]},users(){let t=this.$store.state.Auth.users;return t},emails(){let t=this.users,e=t.map(t=>{return t.email}),s=new Set(e);return s},isEmail(){let t=this.emails.has(this.email);return t},user(){let t=this.users,e=t.find(t=>t.email===this.email)||{};return e}},data(){return{email:""}},methods:{close(){this.cancelCallBack()},addCollaborator(){let t={board:this.$route.params.boardId,creator:this.userId(),user:this.user._id};this.$store.dispatch("addCollaborator",t)}},mounted(){this.$store.dispatch("getCollaborators",this.$route.params.boardId)}},Zt=Yt,te=(s("84ed"),Object(d["a"])(Zt,Xt,Qt,!1,null,"4643cc5d",null)),ee=te.exports,se=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"collaborator"},[s("span",[t._v(t._s(t.collaborator.user.name))]),t.isAllowed(t.collaborator.creator)?s("div",{staticClass:"close-button",on:{click:t.removeCollaborator}},[t._v("X")]):t._e()])},ae=[],oe={name:"collaborator",props:{collaborator:{type:Object}},data(){return{}},computed:{},methods:{removeCollaborator(){let t={_id:this.collaborator._id,board:this.collaborator.board};this.$store.dispatch("removeCollaborator",t)}}},re=oe,ie=(s("0b01"),Object(d["a"])(re,se,ae,!1,null,"f880fa64",null)),ne=ie.exports,le=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"user-icon",style:t.style},[t.hasImage?t._e():s("svg",{staticClass:"user-svg",attrs:{viewBox:"0 0 10 10"}},[s("circle",{attrs:{cx:"50%",cy:"50%",r:"5",fill:t.user.color}}),s("text",{staticClass:"heavy",attrs:{x:"0",y:"6",dx:"10%",dy:"18%",textLength:"8",lengthAdjust:"spacingAndGlyphs"}},[t._v(t._s(t.authorInitial))])])])},ce=[],de={name:"user-icon",props:{user:{type:Object}},computed:{hasImage(){return""!==this.user.imgUrl},style(){let t="";t=""===this.user.imgUrl?"'transparent'":`url('${this.user.imgUrl}')`;let e={backgroundImage:t};return e},authorInitial(){let t=this.user.name.charAt(0).toUpperCase();return t}}},ue=de,me=(s("7546"),Object(d["a"])(ue,le,ce,!1,null,"09424b2a",null)),pe=me.exports;async function he(){let t=await $.Authenticate();t?(Q.dispatch("getUsers"),Q.commit("setUser",t)):Ft.push({name:"login"}),new a["a"]({router:Ft,store:Q,render:t=>t(v)}).$mount("#app")}a["a"].component("my-modal",Wt),a["a"].component("collaborators",ee),a["a"].component("collaborator",ne),a["a"].component("user-icon",pe),a["a"].mixin({methods:{userId(){return this.$store.state.Auth.user._id},isAllowed(t){let e=this.$store.state.Auth.user._id,s=this.$store.state.Boards.activeBoard._id,a=this.$store.state.Collaborators.collaborators[s]||[],o=new Set(a.map(t=>{return t._id})),r=e===t||o.has(e);return r}}}),he()},6330:function(t,e,s){},"64a9":function(t,e,s){},"6d1b":function(t,e,s){},7546:function(t,e,s){"use strict";var a=s("42b0"),o=s.n(a);o.a},8265:function(t,e,s){},"84ed":function(t,e,s){"use strict";var a=s("3afa"),o=s.n(a);o.a},a10c:function(t,e,s){"use strict";var a=s("e920"),o=s.n(a);o.a},a9e7:function(t,e,s){},d6db:function(t,e,s){"use strict";var a=s("a9e7"),o=s.n(a);o.a},e920:function(t,e,s){},ebe8:function(t,e,s){"use strict";var a=s("8265"),o=s.n(a);o.a},ef82:function(t,e,s){},f245:function(t,e,s){"use strict";var a=s("6d1b"),o=s.n(a);o.a}});
//# sourceMappingURL=app.d7ccc9b9.js.map