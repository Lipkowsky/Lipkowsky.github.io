(function(e){function t(t){for(var n,i,o=t[0],c=t[1],u=t[2],l=0,f=[];l<o.length;l++)i=o[l],Object.prototype.hasOwnProperty.call(s,i)&&s[i]&&f.push(s[i][0]),s[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);d&&d(t);while(f.length)f.shift()();return r.push.apply(r,u||[]),a()}function a(){for(var e,t=0;t<r.length;t++){for(var a=r[t],n=!0,o=1;o<a.length;o++){var c=a[o];0!==s[c]&&(n=!1)}n&&(r.splice(t--,1),e=i(i.s=a[0]))}return e}var n={},s={app:0},r=[];function i(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=e,i.c=n,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(a,n,function(t){return e[t]}.bind(null,n));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var u=0;u<o.length;u++)t(o[u]);var d=c;r.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"034f":function(e,t,a){"use strict";var n=a("85ec"),s=a.n(n);s.a},"0461":function(e,t,a){},"1eac":function(e,t,a){},"2a00":function(e,t,a){"use strict";var n=a("1eac"),s=a.n(n);s.a},"2cfe":function(e,t,a){"use strict";var n=a("f397"),s=a.n(n);s.a},4678:function(e,t,a){var n={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function s(e){var t=r(e);return a(t)}function r(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}s.keys=function(){return Object.keys(n)},s.resolve=r,e.exports=s,s.id="4678"},"56d7":function(e,t,a){"use strict";a.r(t),a.d(t,"db",(function(){return ve}));a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("div",{staticClass:"navbar-wrapper"},[a("Navbar")],1),a("div",{staticClass:"router-wrapper"},[a("router-view")],1)])},r=[],i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"main-container"},[a("div",{staticClass:"nav-wrapper"},[a("div",{staticClass:"logo"},[e._v("Runnter")]),a("ul",{attrs:{id:"navigation"}},[e.user?e._e():a("li",[a("a",[a("router-link",{attrs:{to:"/login"}},[e._v("LOGIN")])],1)]),e.user?e._e():a("li",[a("a",[a("router-link",{attrs:{to:"/signup"}},[e._v("SIGNUP")])],1)]),e.user?a("li",[a("a",[a("router-link",{attrs:{to:"/runs"}},[e._v("MY RUNS")])],1)]):e._e(),e.user?a("li",[a("a",{attrs:{href:"#"},on:{click:e.logout}},[e._v("LOGOUT")])]):e._e()])])])},o=[],c=(a("ac1f"),a("5319"),a("8aa5")),u=a.n(c),d={name:"Navbar",data:function(){return{user:null}},created:function(){var e=this;u.a.auth().onAuthStateChanged((function(t){e.user=t||null}))},methods:{logout:function(){var e=this;u.a.auth().signOut().then((function(){e.$router.replace("login")}))}}},l=d,f=(a("8c4c"),a("2877")),m=Object(f["a"])(l,i,o,!1,null,"b532c5b8",null),p=m.exports,v={components:{Navbar:p}},h=v,b=(a("034f"),Object(f["a"])(h,s,r,!1,null,null,null)),j=b.exports,g=(a("45fc"),a("8c4f")),_=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},w=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("img",{attrs:{alt:"Vue logo",src:a("cf05")}}),n("p",[e._v("Hello from Home")])])}],y={name:"Home"},C=y,k=Object(f["a"])(C,_,w,!1,null,null,null),x=k.exports,R=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"main-container"},[a("div",{staticClass:"login-wrapper"},[a("div",{staticClass:"login"},[e._m(0),a("div",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],attrs:{type:"text",placeholder:"email"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}}),a("br"),a("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"password",placeholder:"password"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}}),a("br")]),a("div",[a("button",{staticStyle:{"margin-right":"10px"},on:{click:e.login}},[e._v("Login")]),a("button",{staticClass:"google-button",on:{click:e.googleLogin}},[a("font-awesome-icon",{attrs:{icon:["fab","google-plus"]}}),e._v(" Login ")],1),a("p",[a("router-link",{attrs:{to:"/signup"}},[e._v("You dont have an account ? You can create one")])],1)])])])])},O=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h3",[e._v("Sign In")])])}],z={name:"login",data:function(){return{email:"",password:""}},methods:{login:function(){u.a.auth().signInWithEmailAndPassword(this.email,this.password).then((function(){alert("Well done ! You are connected"),this.$router.replace("runs")}),(function(e){alert("Oops. "+e.message)}))},googleLogin:function(){var e=this,t=new u.a.auth.GoogleAuthProvider;u.a.auth().signInWithPopup(t).then((function(t){if(t.additionalUserInfo.isNewUser){var a={uid:t.user.uid,email:t.user.email,photoURL:t.user.photoURL};ve.collection("users").doc(t.user.uid).set(a).then().catch((function(e){return console.log(e)}))}e.$router.replace("runs")})).catch((function(e){alert("OOps"+e.message)}))}}},U=z,N=(a("2a00"),Object(f["a"])(U,R,O,!1,null,"72057286",null)),P=N.exports,S=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"sign-up"},[a("p",[e._v("Let's create a new account !")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],attrs:{type:"text",placeholder:"Email"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}}),a("br"),a("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"password",placeholder:"Password"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}}),a("br"),a("button",{on:{click:e.signUp}},[e._v("Sign Up")]),a("span",[e._v("or go back to "),a("router-link",{attrs:{to:"/login"}},[e._v("login")]),e._v(".")],1)])},Y=[],E={name:"signUp",data:function(){return{email:"",password:""}},methods:{signUp:function(){var e=this;u.a.auth().createUserWithEmailAndPassword(this.email,this.password).then((function(t){if(alert("Your accont has been created !"),t.additionalUserInfo.isNewUser){var a={uid:t.user.uid,email:t.user.email,photoURL:t.user.photoURL};ve.collection("users").doc(t.user.uid).set(a).then().catch((function(e){return console.log(e)}))}e.$router.replace("runs")}),(function(e){alert("Oopis"+e.message)}))}}},$=E,D=Object(f["a"])($,S,Y,!1,null,null,null),T=D.exports,A=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"main-container"},[a("div",{staticClass:"runs-wrapper"},[a("div",{staticClass:"addRun-wrapper"},[a("AddRun")],1),0!=e.runs.length?a("div",{staticClass:"list-wrapper"},e._l(e.runs,(function(e){return a("ShowRun",{key:e.id,attrs:{run:e}})})),1):a("div",[a("p",{staticClass:"runs-info"},[e._v("You don't have any run here")])])])])},L=[],I=(a("4160"),a("159b"),a("5530")),M=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"main-container"},[a("div",{staticClass:"addRun-wrapper"},[a("form",{staticClass:"addRun-form"},[a("div",[a("label",[e._v("Name :")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],staticClass:"input-field",attrs:{type:"text",name:"name"},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}})]),a("div",[a("label",[e._v("Location :")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.where,expression:"where"}],staticClass:"input-field",attrs:{type:"text",name:"location"},domProps:{value:e.where},on:{input:function(t){t.target.composing||(e.where=t.target.value)}}})]),a("div",[a("label",[e._v("Date :")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.date,expression:"date"}],staticClass:"input-field",attrs:{type:"date",name:"date",required:""},domProps:{value:e.date},on:{input:function(t){t.target.composing||(e.date=t.target.value)}}})]),a("div",[a("label",[e._v("Time :")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.time,expression:"time"}],attrs:{type:"time",required:""},domProps:{value:e.time},on:{input:function(t){t.target.composing||(e.time=t.target.value)}}})]),a("div",[a("label",[e._v("Distance :")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.distance,expression:"distance"}],staticClass:"input-field",staticStyle:{"max-width":"80px","margin-right":"5px"},attrs:{type:"number",name:"distance",min:"1"},domProps:{value:e.distance},on:{input:function(t){t.target.composing||(e.distance=t.target.value)}}}),e._v(" km ")])]),a("div",[a("button",{on:{click:e.addNewRun}},[e._v("Add Run")])])]),a("div",{staticClass:"error-message"},[e._v(e._s(e.error))])])},H=[],G=(a("99af"),a("b0c0"),a("1276"),{name:"AddRun",data:function(){return{name:"",where:"",date:"",time:"",distance:"",error:""}},methods:{addNewRun:function(){var e=this,t=this.date.split("-"),a=t[0],n=t[1],s=t[2];if(this.name&&this.where&&this.date&&this.time&&this.distance){var r={name:this.name,where:this.where,endDateOfRun:"".concat(s,"/").concat(n,"/").concat(a," ").concat(this.time),distance:this.distance},i=u.a.auth().currentUser.uid;ve.collection("runs").doc(i).collection("myruns").add(r).then((function(){console.log("New run have been created"),e.$parent.fetchRuns(),e.error=""})).catch((function(e){return console.log(e)}))}else this.error="Please complete the form"}}}),q=G,W=(a("2cfe"),Object(f["a"])(q,M,H,!1,null,"59816adc",null)),B=W.exports,J=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"main-container"},[a("div",{staticClass:"showrun-wrapper"},[a("div",{staticClass:"column-left"},[a("font-awesome-icon",{staticClass:"icon-trash",attrs:{icon:"trash"},on:{click:function(t){return e.deleteRun(e.run)}}}),a("div",{staticClass:"inner-wrapper"},[a("div",{staticClass:"inner-up"},[a("div",{staticClass:"run-name"},[a("h1",[e._v(e._s(e.run.name))])])]),a("div",{staticClass:"inner-down"},[a("div",{staticClass:"run-distance"},[a("p",[a("font-awesome-icon",{staticClass:"icon",attrs:{icon:"road"}}),e._v(e._s(e.run.distance)+" km ")],1)]),a("div",{staticClass:"run-where"},[a("p",[a("font-awesome-icon",{staticClass:"icon",attrs:{icon:"map-marker-alt"}}),e._v(e._s(e.run.where)+" ")],1)]),a("div",{staticClass:"run-date"},[a("font-awesome-icon",{staticClass:"icon",attrs:{icon:"calendar-alt"}}),e._v(e._s(e.run.endDateOfRun)+" ")],1)])])],1),a("div",{staticClass:"column-right"},[a("div",{staticClass:"counter"},[e.date?a("div",[a("font-awesome-icon",{staticClass:"icon-stopwatch",attrs:{icon:"stopwatch"}})],1):e._e(),e.timeToRun?a("div",[a("font-awesome-icon",{staticClass:"icon-stopwatch",attrs:{icon:"running"}})],1):e._e(),e.timeToRun?a("div",{staticClass:"counter-item-timeToRun"},[a("div",{staticClass:"counter-text"},[e._v(" "+e._s(e.timeToRun)+" ")])]):e._e(),e.date.years?a("div",{staticClass:"counter-item"},[a("div",{staticClass:"counter-item-date"},[e._v(" "+e._s(e.date.years)+" ")]),a("div",{staticClass:"counter-text"},[e._v(" Year ")])]):e._e(),e.date.months?a("div",{staticClass:"counter-item"},[a("div",{staticClass:"counter-item-date"},[e._v(" "+e._s(e.date.months)+" ")]),a("div",{staticClass:"counter-text"},[e._v(" Months ")])]):e._e(),e.date.days?a("div",{staticClass:"counter-item"},[a("div",{staticClass:"counter-item-date"},[e._v(" "+e._s(e.date.days)+" ")]),a("div",{staticClass:"counter-text"},[e._v(" Day ")])]):e._e(),e.date.hours?a("div",{staticClass:"counter-item"},[a("div",{staticClass:"counter-item-date"},[e._v(" "+e._s(e.date.hours)+" ")]),a("div",{staticClass:"counter-text"},[e._v(" Hour ")])]):e._e(),e.date.minutes?a("div",{staticClass:"counter-item"},[a("div",{staticClass:"counter-item-date"},[e._v(" "+e._s(e.date.minutes)+" ")]),a("div",{staticClass:"counter-text"},[e._v(" Min ")])]):e._e(),e.date.seconds?a("div",{staticClass:"counter-item"},[a("div",{staticClass:"counter-item-date"},[e._v(" "+e._s(e.date.seconds)+" ")]),a("div",{staticClass:"counter-text"},[e._v(" Sec ")])]):e._e()])])])])},X=[],K=a("c1df"),Q=a.n(K),F={name:"ShowRun",props:["run"],data:function(){return{date:"",timeToRun:""}},mounted:function(){this.$nextTick((function(){var e=this;window.setInterval((function(){e.createTimer(e.run.endDateOfRun)}),1e3)}))},methods:{createTimer:function(e){var t=Q()().format("DD/MM/YYYY HH:mm:ss"),a=e,n=Q()(a,"DD/MM/YYYY HH:mm:ss").diff(Q()(t,"DD/MM/YYYY HH:mm:ss")),s=Q.a.duration(n);if(s<0)this.timeToRun="Time to run, good luck !";else{var r={years:s.years(),months:s.months(),days:s.days(),hours:s.hours(),minutes:s.minutes(),seconds:s.seconds()};this.date=r}},deleteRun:function(e){var t=u.a.auth().currentUser.uid,a=this;ve.collection("runs").doc(t).collection("myruns").doc(e.id).delete().then((function(){a.$parent.fetchRuns()})).catch((function(e){console.error("Error removing document: ",e)}))}}},V=F,Z=(a("fb60"),Object(f["a"])(V,J,X,!1,null,"c336dc36",null)),ee=Z.exports,te={name:"Runs",components:{AddRun:B,ShowRun:ee},data:function(){return{runs:[]}},mounted:function(){this.fetchRuns()},methods:{fetchRuns:function(){var e=u.a.auth().currentUser.uid,t=[];ve.collection("runs").doc(e).collection("myruns").orderBy("endDateOfRun","asc").get().then((function(e){e.forEach((function(e){var a=Object(I["a"])({id:e.id},e.data());t.push(a)}))})),this.runs=t}}},ae=te,ne=(a("7e91"),Object(f["a"])(ae,A,L,!1,null,"68a7a0f8",null)),se=ne.exports;n["a"].use(g["a"]);var re=new g["a"]({routes:[{path:"*",redirect:"/login"},{path:"/",redirect:"/login"},{path:"/navbar",redirect:"/navbar",component:p},{path:"/login",name:"Login",component:P},{path:"/signup",name:"SignUp",component:T},{path:"/home",name:"Home",component:x,meta:{requiresAuth:!0}},{path:"/runs",name:"Runs",component:se,meta:{requiresAuth:!0}}]});re.beforeEach((function(e,t,a){var n=u.a.auth().currentUser,s=e.matched.some((function(e){return e.meta.requiresAuth}));s&&!n?a("login"):!s&&n?a("home"):a()}));var ie=re,oe=a("73c3"),ce=a.n(oe),ue=a("ecee"),de=a("c074"),le=a("ad3d"),fe=a("f2d1");ue["c"].add(de["c"],de["b"],de["a"],de["e"],de["d"],de["f"]),n["a"].component("font-awesome-icon",le["a"]),ue["c"].add(fe["a"],fe["b"]),a("e71f"),n["a"].use(ce.a),n["a"].use(a("2ead")),n["a"].config.productionTip=!1;var me="",pe={apiKey:"AIzaSyAReYhXaGjexCrnX6WfRNTKUx624xIB-1k",authDomain:"runnter-b4f22.firebaseapp.com",databaseURL:"https://runnter-b4f22.firebaseio.com",projectId:"runnter-b4f22",storageBucket:"runnter-b4f22.appspot.com",messagingSenderId:"570233156064",appId:"1:570233156064:web:ecec920d10a3ff65a17b85",measurementId:"G-PDJ5QGRQGX"};u.a.initializeApp(pe),u.a.analytics();var ve=u.a.firestore();u.a.auth().onAuthStateChanged((function(){me||(me=new n["a"]({router:ie,render:function(e){return e(j)}}).$mount("#app"))}))},"707e":function(e,t,a){},"7e91":function(e,t,a){"use strict";var n=a("707e"),s=a.n(n);s.a},"85ec":function(e,t,a){},"8c4c":function(e,t,a){"use strict";var n=a("0461"),s=a.n(n);s.a},c2da:function(e,t,a){},cf05:function(e,t,a){e.exports=a.p+"img/logo.82b9c7a5.png"},f397:function(e,t,a){},fb60:function(e,t,a){"use strict";var n=a("c2da"),s=a.n(n);s.a}});
//# sourceMappingURL=app.40e907fc.js.map