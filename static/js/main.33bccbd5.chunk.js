(this["webpackJsonpcalculator-react"]=this["webpackJsonpcalculator-react"]||[]).push([[0],[,,,,function(module,__webpack_exports__,__webpack_require__){"use strict";var C_Users_Malik_ak_Desktop_Projects_React_Projects_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(5),C_Users_Malik_ak_Desktop_Projects_React_Projects_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(6),C_Users_Malik_ak_Desktop_Projects_React_Projects_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(13),C_Users_Malik_ak_Desktop_Projects_React_Projects_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(12),react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(1),react__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__),_min_jpg__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(7),_max_jpg__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(8),_close_jpg__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(9),_result_result_js__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(10),_calcbody_calcbody_js__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(11),_App_css__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(22),_App_css__WEBPACK_IMPORTED_MODULE_10___default=__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_10__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__(0),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11___default=__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__),App=function(_React$Component){Object(C_Users_Malik_ak_Desktop_Projects_React_Projects_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__.a)(App,_React$Component);var _super=Object(C_Users_Malik_ak_Desktop_Projects_React_Projects_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__.a)(App);function App(){var _this;return Object(C_Users_Malik_ak_Desktop_Projects_React_Projects_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.a)(this,App),_this=_super.call(this),_this.ok=function(){document.addEventListener("keydown",(function(e){switch(console.log(e.keyCode),e.keyCode){case 96:_this.setState({result:_this.state.result+0});break;case 97:_this.setState({result:_this.state.result+1});break;case 98:_this.setState({result:_this.state.result+2});break;case 99:_this.setState({result:_this.state.result+3});break;case 100:_this.setState({result:_this.state.result+4});break;case 101:_this.setState({result:_this.state.result+5});break;case 102:_this.setState({result:_this.state.result+6});break;case 103:_this.setState({result:_this.state.result+7});break;case 104:_this.setState({result:_this.state.result+8});break;case 105:_this.setState({result:_this.state.result+9});break;case 109:_this.setState({result:_this.state.result+"-"});break;case 107:_this.setState({result:_this.state.result+"+"});break;case 106:_this.setState({result:_this.state.result+"*"});break;case 111:_this.setState({result:_this.state.result+"/"});break;case 190:_this.setState({result:_this.state.result+"."});break;case 188:_this.setState({result:_this.state.result+","});break;case 13:_this.calculate();break;case 8:_this.setState({result:_this.state.result.slice(0,-1)});break;case 46:_this.setState({result:""})}}))},_this.calculate=function(){try{_this.setState({result:(eval(_this.state.result)||"")+""})}catch(e){_this.setState({result:"error"})}},_this.getValue=function(e){switch(e){case"C":case"CE":_this.setState({result:""});break;case"dummy":console.log("disabled");break;case"back":_this.setState({result:_this.state.result.slice(0,-1)});break;case"=":_this.calculate();break;default:_this.setState({result:_this.state.result+e})}},_this.state={result:""},_this}return Object(C_Users_Malik_ak_Desktop_Projects_React_Projects_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.a)(App,[{key:"componentDidMount",value:function(){this.ok(),console.log(this.props.result)}},{key:"render",value:function(){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div",{className:"calculator",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div",{className:"title",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("p",{children:" Calculator "}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div",{className:"titleimg",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("img",{src:_min_jpg__WEBPACK_IMPORTED_MODULE_5__.a,alt:"min"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("img",{src:_max_jpg__WEBPACK_IMPORTED_MODULE_6__.a,alt:"min"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("img",{src:_close_jpg__WEBPACK_IMPORTED_MODULE_7__.a,alt:"min"})]})]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div",{children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("h4",{children:" Created By Afraz Malik"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("a",{href:"https://www.google.com",children:"Source Code"})]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_result_result_js__WEBPACK_IMPORTED_MODULE_8__.a,{result:this.state.result}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_calcbody_calcbody_js__WEBPACK_IMPORTED_MODULE_9__.a,{getValue:this.getValue})]})}}]),App}(react__WEBPACK_IMPORTED_MODULE_4___default.a.Component);__webpack_exports__.a=App},,,function(e,t,_){"use strict";t.a="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wAARCAAcACIDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD9U6KKw9c8Y2Hh+7S2urfVZZGQSBrHSLu7TBJGC8MTKDweCc9DjkUAblFYeh+MbDxBdvbWtvqsUioZC19pF3aJgEDAeaJVJ5HAOepxwa3KACiiigAooooAKKKKACiiigD/2Q=="},function(e,t,_){"use strict";t.a="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wAARCAAcACIDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD9U6KK43xU2p6h420LR7LXLzRLafTr67mexit3eR4pbREBM0UgAAmfoB29KAOyorgryz1nwz4m8KK3ivVdWttQ1GS0uLW+gswjILO5lBBit0YEPEn8XrXe0AFFFFABXMeJfDWrah4g0vWNH1Sz065s7W5tGS+sHukkSZ4HJAWaMqQYB3P3jXT0UAcavhXxJqGu6He6xrulXNtpd092sFjpMtu8jtbzQgF2uZAABMT93sOldlRRQAUUUUAf/9k="},function(e,t,_){"use strict";t.a="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wAARCAAcACIDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD9U6KK4z4gX934RVfFFrdvJFbIsF1pMjkpeIW+UQr2uNzYXH+syEb+FkAOzorjPh/f3fi5W8UXV28cVyjQWukxuQlmgb5hMve43Lhs/wCrwUX+Jn7OgAooooAKyLrwzaX3iG11e6aW4ls4ytrbyMDDA5zulVcf6wqdu4k4UELjc27XooAyLXwzaWPiG61e1aW3lvIwt1bxsBDO4xtlZcf6wKNu4EZUgNnau3XoooAKKKKAP//Z"},function(e,t,_){"use strict";_(1),_(19);var a=_(0);t.a=function(e){var t=e.result;return Object(a.jsx)("div",{className:"resultbox ",children:Object(a.jsxs)("p",{children:[" ",t," "]})})}},function(e,t,_){"use strict";_(1),_(21);var a=_(0);t.a=function(e){var t=e.getValue;return Object(a.jsxs)("div",{className:"calcBody",id:"demo",children:[Object(a.jsx)("button",{className:"top",name:"dummy",onClick:function(e){return t(e.target.name)},children:"%"}),Object(a.jsx)("button",{className:"top",name:"dummy",onClick:function(e){return t(e.target.name)},children:"x/2"}),Object(a.jsx)("button",{className:"top",name:"dummy",onClick:function(e){return t(e.target.name)},children:"x^2"}),Object(a.jsx)("button",{className:"top",name:"dummy",onClick:function(e){return t(e.target.name)},children:"1/x"}),Object(a.jsx)("button",{name:"CE",onClick:function(e){return t(e.target.name)},children:"CE"}),Object(a.jsx)("button",{name:"C",onClick:function(e){return t(e.target.name)},children:"C"}),Object(a.jsx)("button",{className:"",name:"back",onClick:function(e){return t(e.target.name)},children:"back"}),Object(a.jsx)("button",{className:"o",name:"/",onClick:function(e){return t(e.target.name)},children:"/"}),Object(a.jsx)("button",{className:"n",name:"7",onClick:function(e){return t(e.target.name)},children:"7"}),Object(a.jsx)("button",{className:"n",name:"8",onClick:function(e){return t(e.target.name)},children:"8"}),Object(a.jsx)("button",{className:"n",name:"9",onClick:function(e){return t(e.target.name)},children:"9"}),Object(a.jsx)("button",{className:"o",name:"*",onClick:function(e){return t(e.target.name)},children:"x"}),Object(a.jsx)("button",{className:"n",name:"4",onClick:function(e){return t(e.target.name)},children:"4"}),Object(a.jsx)("button",{className:"n",name:"5",onClick:function(e){return t(e.target.name)},children:"5"}),Object(a.jsx)("button",{className:"n",name:"6",onClick:function(e){return t(e.target.name)},children:"6"}),Object(a.jsx)("button",{className:"o",name:"-",onClick:function(e){return t(e.target.name)},children:"-"}),Object(a.jsx)("button",{className:"n",name:"1",onClick:function(e){return t(e.target.name)},children:"1"}),Object(a.jsx)("button",{className:"n",name:"2",onClick:function(e){return t(e.target.name)},children:"2"}),Object(a.jsx)("button",{className:"n",name:"3",onClick:function(e){return t(e.target.name)},children:"3"}),Object(a.jsx)("button",{className:"o",name:"+",onClick:function(e){return t(e.target.name)},children:"+"}),Object(a.jsx)("button",{className:"n",name:".",onClick:function(e){return t(e.target.name)},children:"."}),Object(a.jsx)("button",{className:"n",name:"0",onClick:function(e){return t(e.target.name)},children:"0"}),Object(a.jsx)("button",{className:"n",name:".",onClick:function(e){return t(e.target.name)},children:"."}),Object(a.jsx)("button",{className:"o",name:"=",onClick:function(e){return t(e.target.name)},children:" ="})]})}},,,,,,,function(e,t,_){},function(e,t,_){},,function(e,t,_){},function(e,t,_){},function(e,t,_){"use strict";_.r(t);var a=_(1),s=_.n(a),r=_(3),c=_.n(r),n=(_(18),_(4)),A=function(e){e&&e instanceof Function&&_.e(3).then(_.bind(null,24)).then((function(t){var _=t.getCLS,a=t.getFID,s=t.getFCP,r=t.getLCP,c=t.getTTFB;_(e),a(e),s(e),r(e),c(e)}))},l=_(0);c.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(n.a,{})}),document.getElementById("root")),A()}],[[23,1,2]]]);
//# sourceMappingURL=main.33bccbd5.chunk.js.map