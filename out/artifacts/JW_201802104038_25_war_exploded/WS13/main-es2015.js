(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- 登录 -->\n<div class=\"container\">\n  <router-outlet></router-outlet>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/college/add-college.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/college/add-college.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2>添加新学院</h2>\n<div class=\"in\">\n  <span>请输入以下信息： </span><br>\n  <label>学院编号:</label> <input #collegeNo />*<br>\n  <label>学院名称:</label> <input #collegeName />*<br>\n  <label class=\"remark\">备注:</label> <textarea #collegeRemarks></textarea>\n</div>\n<button (click)=\"goBack()\">返回</button>\n<button (click)=\"save(collegeName.value,collegeNo.value,collegeRemarks.value)\">保存</button>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/college/college.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/college/college.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<a routerLink=\"/index/addCollege\"><button > 添加学院</button></a>\n<table class=\"tablelist\">\n  <tr><th>序号</th><th>编号</th><th>学院名称</th><th>备注</th><th>操作</th></tr>\n  <tr *ngFor=\"let college of colleges\" class=\"badge\">\n    <td>{{college.id}}</td>\n    <td>{{college.no}}</td>\n    <td>{{college.description}}</td>\n    <td>{{college.remarks}}</td>\n    <td> <a routerLink=\"/index/updateCollege/{{college.id}}\"><button>修改</button></a>\n      <button (click)=\"delete(college)\">删除</button></td>\n  </tr>\n</table>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/college/update-college.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/college/update-college.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"college\" class=\"in\">\r\n  <h2>学院信息修改</h2><br>\r\n  <div>\r\n    <label>学院编号: </label> <input [(ngModel)]=\"college.no\" /><br>\r\n    <label>学院名称: </label> <input [(ngModel)]=\"college.description\"/><br>\r\n    <label>备 注: </label> <textarea [(ngModel)]=\"college.remarks\" ></textarea>\r\n  </div>\r\n  <button (click)=\"goBack()\">返回</button>\r\n  <button (click)=\"save()\">保存</button>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/department/add-dep.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/department/add-dep.component.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"in\">\n  <h2>添加新专业</h2>\n  <label>专业编号:</label> <input #depNo />*<br>\n  <label>专业名称:</label> <input #depName />*<br>\n  <label>所属学院:</label>\n  <select [(ngModel)]=\"school\"><!--ngValue支持对象，value仅支持字符串-->\n    <option *ngFor=\"let school of colleges\" [ngValue]=\"school\">{{school.description}}</option>\n  </select>*<br>\n  <label class=\"remark\">备注:</label> <textarea #depRemarks></textarea>\n</div>\n<button (click)=\"goBack()\">返回</button>\n<button (click)=\"save(depName.value,depNo.value,depRemarks.value)\">保存</button>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/department/department.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/department/department.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<a routerLink=\"/index/addDep\"><button > 添加专业</button></a>\n<table class=\"tablelist\">\n  <tr><th>序号</th><th>编号</th><th>专业名称</th><th>所属学院</th><th>备注</th><th>操作</th></tr>\n  <tr *ngFor=\"let department of dataShow; let i=index;\" class=\"badge\">\n    <td>{{i+1+(currentPag-1)*pagNums}}</td>\n    <td>{{department.no}}</td>\n    <td>{{department.description}}</td>\n    <td><label *ngIf=\"department.school\"> {{department.school.description}}</label></td>\n    <td>{{department.remarks}}</td>\n    <td> <a routerLink=\"/index/updateDep/{{department.id}}\"><button>修改</button></a><button (click)=\"delete(department)\">删除</button></td>\n  </tr><!-- [leng]=\"leng\"用于往子组件传递变量数据，可以是对象。-->\n  <tr><td colspan=\"6\"> <app-page  [leng]=\"leng\" (currentPag)=\"currentPagHandel($event)\" (pagNums)=\"pagNumsHandel($event)\"> </app-page></td></tr>\n</table>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/department/update-dep.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/department/update-dep.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"department\" class=\"in\">\n  <h2>修改专业</h2>\n  <label>专业编号:</label> <input  [(ngModel)]=\"department.no\" /><br>\n  <label>专业名称:</label> <input [(ngModel)]=\"department.description\" /><br>\n  <label>所属学院:</label>  <!--   ngModel用于将文本框与变量进行双向绑定。ngValue支持对象，value仅支持字符串-->\n  <select [(ngModel)]=\"department.school\" [compareWith]=\"compareFn\">\n    <option *ngFor=\"let school of colleges\" [ngValue]=\"school\">{{school.description}}</option>\n  </select><br>\n  <label class=\"remark\">备 注:</label> <textarea [(ngModel)]=\"department.remarks\" ></textarea>\n</div>\n<button (click)=\"goBack()\">返回</button>\n<button (click)=\"save()\">保存</button>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/index/index.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/index/index.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<header>\n  <h1>毕业设计管理系统demo版</h1>\n</header>\n<nav>\n  <a routerLink='/index/college' >院系管理</a>\n  <a routerLink='/index/department' >专业管理</a>\n  <a routerLink='/index/teacher'>学位管理</a>\n  <a routerLink='/index/teacher'>教师管理</a>\n  <a routerLink='/index/proftitle'>职称管理</a>\n</nav>\n<section><router-outlet></router-outlet></section>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/Login.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/Login.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"bg\">\n  <div class=\"wel\">毕业设计管理系统</div>\n  <div class=\"user\">\n    <div class=\"inuser\">用户名</div>\n    <input type=\"text\" name=\"用户\" value=\"admin\" #uName>\n  </div>\n  <div class=\"password\">\n    <div class=\"inuser\">密&nbsp;&nbsp;&nbsp;码</div>\n    <input class=\"\" type=\"password\" name=\"密码\" value=\"123456\" #uPassword>\n  </div>\n  <div class=\"rem\">\n    <input type=\"checkbox\" name=\"\" id=\"\" value=\"\">\n    <div class=\"reb\">\n      记住密码\n    </div>\n  </div>\n  <div class=\"fg\">\n    <div >\n      <a href=\"\">忘记密码？</a>\n    </div>\n  </div>\n  <button (click)=\"login(uName.value, uPassword.value)\">登录</button>\n</div>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/page/page.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/page.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"box-footer clearfix\" style=\"width: 100%\">\n  <ul id=\"paging\" >\n    <li><a (click)=\"previous()\">&laquo;</a></li>\n    <ul *ngFor=\"let pag of pags\" id=\"pags\">\n      <li><a (click)=\"gitPag(pag)\" [class.active]=\"pag == pagCurren\">{{pag}}</a></li>\n    </ul>\n    <li><a (click)=\"next()\">&raquo;</a></li>  每页最大行数：\n    <select [(ngModel)]=\"pagNum\" (click)=\"gitPagNum()\">\n      <option>5</option>\n      <option>10</option>\n      <option>20</option>\n    </select> 数据总行数：{{leng}}\n  </ul>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/proftitle/add-proftitle.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/proftitle/add-proftitle.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2>添加新职称</h2>\r\n<div class=\"in\">\r\n  <span>请输入以下信息： </span><br>\r\n  <label>职称编号:</label> <input #proftltleNo />*<br>\r\n  <label>职称名称:</label> <input #proftltleName />*<br>\r\n  <label class=\"remark\">备注:</label> <textarea #proftitleRemarks></textarea>\r\n</div>\r\n<button (click)=\"goBack()\">返回</button>\r\n<button (click)=\"save(proftltleName.value,proftltleNo.value,proftitleRemarks.value)\">保存</button>\r\n\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/proftitle/proftitle.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/proftitle/proftitle.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<a routerLink=\"/index/addTitle\"><button > 添加职称</button></a>\n<table class=\"tablelist\">\n  <tr><th>序号</th><th>编号</th><th>职称名称</th><th>备注</th><th>操作</th></tr>\n  <tr *ngFor=\"let proftitle of proftitles\" class=\"badge\">\n    <td>{{proftitle.id}}</td>\n    <td>{{proftitle.no}}</td>\n    <td>{{proftitle.description}}</td>\n    <td>{{proftitle.remarks}}</td>\n    <td> <a routerLink=\"/index/updateTitle/{{proftitle.id}}\"><button>修改</button></a>\n      <button (click)=\"delete(proftitle)\">删除</button></td>\n  </tr>\n</table>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/proftitle/update-proftitle.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/proftitle/update-proftitle.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"proftitle\" class=\"in\">\r\n  <h2>学院信息修改</h2><br>\r\n  <div>\r\n    <label>学院编号: </label> <input [(ngModel)]=\"proftitle.no\" /><br>\r\n    <label>学院名称: </label> <input [(ngModel)]=\"proftitle.description\"/><br>\r\n    <label>备 注: </label> <textarea [(ngModel)]=\"proftitle.remarks\" ></textarea>\r\n  </div>\r\n  <button (click)=\"goBack()\">返回</button>\r\n  <button (click)=\"save()\">保存</button>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/teacher/add-teacher.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/teacher/add-teacher.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"in\">\n  <h2>添加新教师</h2>\n  <label>教师编号:</label> <input #teacherNo />*<br>\n  <label>教师姓名:</label> <input #teacherName />*<br>\n  <label>当前职称:</label>\n  <select [(ngModel)]=\"title\"><!--ngValue支持对象，value仅支持字符串-->\n    <option *ngFor=\"let title of titles\" [ngValue]=\"title\">{{title.description}}</option>\n  </select><br>\n  <label>最高学位:</label>\n  <select [(ngModel)]=\"degree\"><!--ngValue支持对象，value仅支持字符串-->\n    <option *ngFor=\"let degree of degrees\" [ngValue]=\"degree\">{{degree.description}}</option>\n  </select><br>\n  <label>所属学院:</label>\n  <select [(ngModel)]=\"school\" (change)=\" getDepSch(school.id)\" ><!--ngValue支持对象，value仅支持字符串-->\n    <option *ngFor=\"let school of schools\" [ngValue]=\"school\">{{school.description}}</option>\n  </select><br>\n  <label>所属专业:</label>\n  <select [(ngModel)]=\"department\"><!--ngValue支持对象，value仅支持字符串-->\n    <option *ngFor=\"let department of departments\" [ngValue]=\"department\">{{department.description}}</option>\n  </select><br>\n</div>\n<button (click)=\"goBack()\">返回</button>\n<button (click)=\"save(teacherName.value,teacherNo.value)\">保存</button>\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/teacher/teacher.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/teacher/teacher.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<a routerLink=\"/index/addTeacher\"><button > 添加老师</button></a>\n<table class=\"tablelist\">\n  <tr><th>序号</th><th>编号</th><th>教师姓名</th><th>职称</th><th>最高学位</th><th>所在专业</th><th>操作</th></tr>\n  <tr *ngFor=\"let teacher of teachers\" class=\"badge\">\n    <td>{{teacher.id}}</td>\n    <td>{{teacher.no}}</td>\n    <td>{{teacher.name}}</td>\n    <td><label *ngIf=\"teacher.title\"> {{teacher.title.description}}</label></td>\n    <td><label *ngIf=\"teacher.degree\"> {{teacher.degree.description}}</label></td>\n    <td><label *ngIf=\"teacher.department\"> {{teacher.department.description}}</label></td>\n    <td> <a routerLink=\"/index/updateTeacher/{{teacher.id}}\"><button>修改</button></a><button (click)=\"delete(teacher)\">删除</button></td>\n  </tr>\n</table>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/teacher/update-teacher.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/teacher/update-teacher.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"teacher\" class=\"in\">\n  <h2>修改教师</h2>\n  <label>教师编号:</label> <input [(ngModel)]=teacher.no /><br>\n  <label>教师姓名:</label> <input [(ngModel)]=teacher.name /><br>\n  <label>当前职称:</label>\n  <select [(ngModel)]=\"teacher.title\" [compareWith]=\"compareFn\"><!--ngValue支持对象，value仅支持字符串-->\n    <option *ngFor=\"let title of titles\" [ngValue]=\"title\">{{title.description}}</option>\n  </select><br>\n  <label>最高学位:</label>\n  <select [(ngModel)]=\"teacher.degree\" [compareWith]=\"compareFn\">\n    <option *ngFor=\"let degree of degrees\" [ngValue]=\"degree\">{{degree.description}}</option>\n  </select><br>\n  <label>所属学院:</label>\n  <select [(ngModel)]=\"teacher.department.school\" [compareWith]=\"compareFn\" (change)=\"getDepSch(teacher.department.school.id)\">\n    <option *ngFor=\"let school of schools\" [ngValue]=\"school\">{{school.description}}</option>\n  </select>\n  <label>所属专业:</label>\n  <select [(ngModel)]=\"teacher.department\" [compareWith]=\"compareFn\">\n    <option *ngFor=\"let department of departments\" [ngValue]=\"department\">{{department.description}}</option>\n  </select>\n</div>\n<button (click)=\"goBack()\">返回</button>\n<button (click)=\"save()\">保存</button>\n\n\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _college_add_college_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./college/add-college.component */ "./src/app/college/add-college.component.ts");
/* harmony import */ var _college_update_college_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./college/update-college.component */ "./src/app/college/update-college.component.ts");
/* harmony import */ var _college_college_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./college/college.component */ "./src/app/college/college.component.ts");
/* harmony import */ var _teacher_teacher_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./teacher/teacher.component */ "./src/app/teacher/teacher.component.ts");
/* harmony import */ var _department_department_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./department/department.component */ "./src/app/department/department.component.ts");
/* harmony import */ var _department_add_dep_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./department/add-dep.component */ "./src/app/department/add-dep.component.ts");
/* harmony import */ var _department_update_dep_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./department/update-dep.component */ "./src/app/department/update-dep.component.ts");
/* harmony import */ var _teacher_add_teacher_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./teacher/add-teacher.component */ "./src/app/teacher/add-teacher.component.ts");
/* harmony import */ var _teacher_update_teacher_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./teacher/update-teacher.component */ "./src/app/teacher/update-teacher.component.ts");
/* harmony import */ var _proftitle_proftitle_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./proftitle/proftitle.component */ "./src/app/proftitle/proftitle.component.ts");
/* harmony import */ var _proftitle_add_proftitle_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./proftitle/add-proftitle.component */ "./src/app/proftitle/add-proftitle.component.ts");
/* harmony import */ var _proftitle_update_proftitle_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./proftitle/update-proftitle.component */ "./src/app/proftitle/update-proftitle.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _index_index_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./index/index.component */ "./src/app/index/index.component.ts");

















const routes = [
    { path: '', component: _login_login_component__WEBPACK_IMPORTED_MODULE_15__["LoginComponent"], pathMatch: 'full' },
    { path: 'index', component: _index_index_component__WEBPACK_IMPORTED_MODULE_16__["IndexComponent"], children: [
            { path: '', redirectTo: '/college', pathMatch: 'full' },
            { path: 'college', component: _college_college_component__WEBPACK_IMPORTED_MODULE_5__["CollegeComponent"] },
            { path: 'department', component: _department_department_component__WEBPACK_IMPORTED_MODULE_7__["DepartmentComponent"] },
            { path: 'teacher', component: _teacher_teacher_component__WEBPACK_IMPORTED_MODULE_6__["TeacherComponent"] },
            { path: 'addCollege', component: _college_add_college_component__WEBPACK_IMPORTED_MODULE_3__["AddCollegeComponent"] },
            { path: 'updateCollege/:id', component: _college_update_college_component__WEBPACK_IMPORTED_MODULE_4__["UpdateCollegeComponent"] },
            { path: 'addDep', component: _department_add_dep_component__WEBPACK_IMPORTED_MODULE_8__["AddDepComponent"] },
            { path: 'updateDep/:id', component: _department_update_dep_component__WEBPACK_IMPORTED_MODULE_9__["UpdateDepComponent"] },
            { path: 'addTeacher', component: _teacher_add_teacher_component__WEBPACK_IMPORTED_MODULE_10__["AddTeacherComponent"] },
            { path: 'updateTeacher/:id', component: _teacher_update_teacher_component__WEBPACK_IMPORTED_MODULE_11__["UpdateTeacherComponent"] },
            { path: 'proftitle', component: _proftitle_proftitle_component__WEBPACK_IMPORTED_MODULE_12__["ProftitleComponent"] },
            { path: 'addTitle', component: _proftitle_add_proftitle_component__WEBPACK_IMPORTED_MODULE_13__["AddTitleComponent"] },
            { path: 'updateTitle/:id', component: _proftitle_update_proftitle_component__WEBPACK_IMPORTED_MODULE_14__["UpdateProftitleComponent"] }
        ] },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* AppComponent's private CSS styles */\r\nh1 {\r\n  font-size: 1.2em;\r\n  margin-bottom: 0;\r\n}\r\nh2 {\r\n  font-size: 2em;\r\n  margin-top: 0;\r\n  padding-top: 0;\r\n}\r\nheader{\r\n  position: fixed;\r\n  border-bottom:solid 3px #eeeeff;\r\n  text-align:center;\r\n  background-color:#fefeff;\r\n  height:100px;\r\n}\r\nnav{\r\n  position: fixed;\r\n  width:200px; height:500px;\r\n  border-right:solid 3px #eeeeff;\r\n  float:left; }\r\nsection{\r\n  position: absolute;\r\n  top: 70px;\r\n  left: 200px;\r\n  padding-left:20px;\r\n  padding-top:10px;}\r\nnav a {\r\n  padding: 5px 10px;\r\n  text-decoration: none;\r\n  margin: 10px;\r\n  display: block;\r\n  background-color: #eee;\r\n  border-radius: 4px;\r\n}\r\nnav a:visited, a:link {\r\n  color: #334953;\r\n}\r\nnav a:hover {\r\n  color: #039be5;\r\n  background-color: #CFD8DC;\r\n}\r\nnav a.active {\r\n  color: #039be5;\r\n}\r\na,input{ margin-right:10px;}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsc0NBQXNDO0FBQ3RDO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsY0FBYztFQUNkLGFBQWE7RUFDYixjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsK0JBQStCO0VBQy9CLGlCQUFpQjtFQUNqQix3QkFBd0I7RUFDeEIsWUFBWTtBQUNkO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsV0FBVyxFQUFFLFlBQVk7RUFDekIsOEJBQThCO0VBQzlCLFVBQVUsRUFBRTtBQUNkO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLGdCQUFnQixDQUFDO0FBQ25CO0VBQ0UsaUJBQWlCO0VBQ2pCLHFCQUFxQjtFQUNyQixZQUFZO0VBQ1osY0FBYztFQUNkLHNCQUFzQjtFQUN0QixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGNBQWM7QUFDaEI7QUFDQTtFQUNFLGNBQWM7RUFDZCx5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLGNBQWM7QUFDaEI7QUFDQSxTQUFTLGlCQUFpQixDQUFDIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBBcHBDb21wb25lbnQncyBwcml2YXRlIENTUyBzdHlsZXMgKi9cclxuaDEge1xyXG4gIGZvbnQtc2l6ZTogMS4yZW07XHJcbiAgbWFyZ2luLWJvdHRvbTogMDtcclxufVxyXG5oMiB7XHJcbiAgZm9udC1zaXplOiAyZW07XHJcbiAgbWFyZ2luLXRvcDogMDtcclxuICBwYWRkaW5nLXRvcDogMDtcclxufVxyXG5oZWFkZXJ7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGJvcmRlci1ib3R0b206c29saWQgM3B4ICNlZWVlZmY7XHJcbiAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjojZmVmZWZmO1xyXG4gIGhlaWdodDoxMDBweDtcclxufVxyXG5uYXZ7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHdpZHRoOjIwMHB4OyBoZWlnaHQ6NTAwcHg7XHJcbiAgYm9yZGVyLXJpZ2h0OnNvbGlkIDNweCAjZWVlZWZmO1xyXG4gIGZsb2F0OmxlZnQ7IH1cclxuc2VjdGlvbntcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA3MHB4O1xyXG4gIGxlZnQ6IDIwMHB4O1xyXG4gIHBhZGRpbmctbGVmdDoyMHB4O1xyXG4gIHBhZGRpbmctdG9wOjEwcHg7fVxyXG5uYXYgYSB7XHJcbiAgcGFkZGluZzogNXB4IDEwcHg7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIG1hcmdpbjogMTBweDtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxufVxyXG5uYXYgYTp2aXNpdGVkLCBhOmxpbmsge1xyXG4gIGNvbG9yOiAjMzM0OTUzO1xyXG59XHJcbm5hdiBhOmhvdmVyIHtcclxuICBjb2xvcjogIzAzOWJlNTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQ0ZEOERDO1xyXG59XHJcbm5hdiBhLmFjdGl2ZSB7XHJcbiAgY29sb3I6ICMwMzliZTU7XHJcbn1cclxuYSxpbnB1dHsgbWFyZ2luLXJpZ2h0OjEwcHg7fVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _index_index_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./index/index.component */ "./src/app/index/index.component.ts");
/* harmony import */ var _college_college_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./college/college.component */ "./src/app/college/college.component.ts");
/* harmony import */ var _teacher_teacher_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./teacher/teacher.component */ "./src/app/teacher/teacher.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _college_add_college_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./college/add-college.component */ "./src/app/college/add-college.component.ts");
/* harmony import */ var _college_update_college_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./college/update-college.component */ "./src/app/college/update-college.component.ts");
/* harmony import */ var _department_department_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./department/department.component */ "./src/app/department/department.component.ts");
/* harmony import */ var _department_add_dep_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./department/add-dep.component */ "./src/app/department/add-dep.component.ts");
/* harmony import */ var _department_update_dep_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./department/update-dep.component */ "./src/app/department/update-dep.component.ts");
/* harmony import */ var _teacher_add_teacher_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./teacher/add-teacher.component */ "./src/app/teacher/add-teacher.component.ts");
/* harmony import */ var _teacher_update_teacher_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./teacher/update-teacher.component */ "./src/app/teacher/update-teacher.component.ts");
/* harmony import */ var _page_page_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./page/page.component */ "./src/app/page/page.component.ts");
/* harmony import */ var _proftitle_proftitle_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./proftitle/proftitle.component */ "./src/app/proftitle/proftitle.component.ts");
/* harmony import */ var _proftitle_add_proftitle_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./proftitle/add-proftitle.component */ "./src/app/proftitle/add-proftitle.component.ts");
/* harmony import */ var _proftitle_update_proftitle_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./proftitle/update-proftitle.component */ "./src/app/proftitle/update-proftitle.component.ts");























let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
            _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
            _index_index_component__WEBPACK_IMPORTED_MODULE_8__["IndexComponent"],
            _college_college_component__WEBPACK_IMPORTED_MODULE_9__["CollegeComponent"],
            _teacher_teacher_component__WEBPACK_IMPORTED_MODULE_10__["TeacherComponent"],
            _college_add_college_component__WEBPACK_IMPORTED_MODULE_12__["AddCollegeComponent"],
            _college_update_college_component__WEBPACK_IMPORTED_MODULE_13__["UpdateCollegeComponent"],
            _department_department_component__WEBPACK_IMPORTED_MODULE_14__["DepartmentComponent"],
            _department_add_dep_component__WEBPACK_IMPORTED_MODULE_15__["AddDepComponent"],
            _department_update_dep_component__WEBPACK_IMPORTED_MODULE_16__["UpdateDepComponent"],
            _teacher_add_teacher_component__WEBPACK_IMPORTED_MODULE_17__["AddTeacherComponent"],
            _teacher_update_teacher_component__WEBPACK_IMPORTED_MODULE_18__["UpdateTeacherComponent"],
            _page_page_component__WEBPACK_IMPORTED_MODULE_19__["PageComponent"],
            _proftitle_proftitle_component__WEBPACK_IMPORTED_MODULE_20__["ProftitleComponent"],
            _proftitle_add_proftitle_component__WEBPACK_IMPORTED_MODULE_21__["AddTitleComponent"],
            _proftitle_update_proftitle_component__WEBPACK_IMPORTED_MODULE_22__["UpdateProftitleComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_11__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]
        ],
        providers: [{ provide: _angular_common__WEBPACK_IMPORTED_MODULE_3__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_3__["HashLocationStrategy"], }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/college/add-college.component.css":
/*!***************************************************!*\
  !*** ./src/app/college/add-college.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("input,textarea{\r\n  width:100px; line-height: 25px; border-radius: 3px; background-color: #eeeeff; margin-bottom: 10px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29sbGVnZS9hZGQtY29sbGVnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVyxFQUFFLGlCQUFpQixFQUFFLGtCQUFrQixFQUFFLHlCQUF5QixFQUFFLG1CQUFtQjtBQUNwRyIsImZpbGUiOiJzcmMvYXBwL2NvbGxlZ2UvYWRkLWNvbGxlZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImlucHV0LHRleHRhcmVhe1xyXG4gIHdpZHRoOjEwMHB4OyBsaW5lLWhlaWdodDogMjVweDsgYm9yZGVyLXJhZGl1czogM3B4OyBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlZWZmOyBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/college/add-college.component.ts":
/*!**************************************************!*\
  !*** ./src/app/college/add-college.component.ts ***!
  \**************************************************/
/*! exports provided: AddCollegeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCollegeComponent", function() { return AddCollegeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _university_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../university.service */ "./src/app/university.service.ts");





let AddCollegeComponent = class AddCollegeComponent {
    constructor(route, schoolService, location) {
        this.route = route;
        this.schoolService = schoolService;
        this.location = location;
    }
    ngOnInit() {
    }
    save(description, no, remarks) {
        this.college = { id: null, no: no.trim(), description: description.trim(), remarks: remarks.trim() };
        if (!description) {
            return;
        }
        this.schoolService.addCollege(this.college)
            .subscribe(() => this.goBack());
    }
    goBack() {
        this.location.back();
    }
};
AddCollegeComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _university_service__WEBPACK_IMPORTED_MODULE_4__["UniversityService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], AddCollegeComponent.prototype, "college", void 0);
AddCollegeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-college',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./add-college.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/college/add-college.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./add-college.component.css */ "./src/app/college/add-college.component.css")).default]
    })
], AddCollegeComponent);



/***/ }),

/***/ "./src/app/college/college.component.css":
/*!***********************************************!*\
  !*** ./src/app/college/college.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbGxlZ2UvY29sbGVnZS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/college/college.component.ts":
/*!**********************************************!*\
  !*** ./src/app/college/college.component.ts ***!
  \**********************************************/
/*! exports provided: CollegeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollegeComponent", function() { return CollegeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _university_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../university.service */ "./src/app/university.service.ts");



let CollegeComponent = class CollegeComponent {
    constructor(schoolService) {
        this.schoolService = schoolService;
    }
    ngOnInit() {
        this.getColleges();
    }
    getColleges() {
        this.schoolService.getColleges()
            .subscribe(res => this.colleges = res);
    }
    delete(college) {
        this.colleges = this.colleges.filter(h => h !== college);
        this.schoolService.deleteCollege(college).subscribe(res => alert(res.message));
    }
};
CollegeComponent.ctorParameters = () => [
    { type: _university_service__WEBPACK_IMPORTED_MODULE_2__["UniversityService"] }
];
CollegeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-college',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./college.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/college/college.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./college.component.css */ "./src/app/college/college.component.css")).default]
    })
], CollegeComponent);



/***/ }),

/***/ "./src/app/college/update-college.component.css":
/*!******************************************************!*\
  !*** ./src/app/college/update-college.component.css ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("input,textarea{\r\n  width:100px; line-height: 25px; border-radius: 3px; background-color: #eeeeff; margin-bottom: 10px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29sbGVnZS91cGRhdGUtY29sbGVnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVyxFQUFFLGlCQUFpQixFQUFFLGtCQUFrQixFQUFFLHlCQUF5QixFQUFFLG1CQUFtQjtBQUNwRyIsImZpbGUiOiJzcmMvYXBwL2NvbGxlZ2UvdXBkYXRlLWNvbGxlZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImlucHV0LHRleHRhcmVhe1xyXG4gIHdpZHRoOjEwMHB4OyBsaW5lLWhlaWdodDogMjVweDsgYm9yZGVyLXJhZGl1czogM3B4OyBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlZWZmOyBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/college/update-college.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/college/update-college.component.ts ***!
  \*****************************************************/
/*! exports provided: UpdateCollegeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateCollegeComponent", function() { return UpdateCollegeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _university_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../university.service */ "./src/app/university.service.ts");





let UpdateCollegeComponent = class UpdateCollegeComponent {
    constructor(route, schoolService, location) {
        this.route = route;
        this.schoolService = schoolService;
        this.location = location;
    }
    ngOnInit() {
        const id = this.route.snapshot.params.id;
        this.schoolService.getCollege(id)
            .subscribe(res => this.college = res);
    }
    goBack() {
        this.location.back();
    }
    save() {
        this.schoolService.updateCollege(this.college)
            .subscribe((res) => { alert(res.message); this.goBack(); });
    }
};
UpdateCollegeComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _university_service__WEBPACK_IMPORTED_MODULE_4__["UniversityService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], UpdateCollegeComponent.prototype, "college", void 0);
UpdateCollegeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-update-college',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./update-college.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/college/update-college.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./update-college.component.css */ "./src/app/college/update-college.component.css")).default]
    })
], UpdateCollegeComponent);



/***/ }),

/***/ "./src/app/department/add-dep.component.ts":
/*!*************************************************!*\
  !*** ./src/app/department/add-dep.component.ts ***!
  \*************************************************/
/*! exports provided: AddDepComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddDepComponent", function() { return AddDepComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _university_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../university.service */ "./src/app/university.service.ts");





let AddDepComponent = class AddDepComponent {
    constructor(route, departmentService, location) {
        this.route = route;
        this.departmentService = departmentService;
        this.location = location;
    }
    ngOnInit() {
        this.getColleges();
    }
    getColleges() {
        this.departmentService.getColleges()
            .subscribe(res => this.colleges = res);
    }
    save(description, no, remarks) {
        this.department = { id: null, no: no.trim(), description: description.trim(), school: this.school, remarks: remarks.trim() };
        if (!description) {
            return;
        }
        this.departmentService.addDepartment(this.department)
            .subscribe(() => this.goBack());
    }
    goBack() {
        this.location.back();
    }
};
AddDepComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _university_service__WEBPACK_IMPORTED_MODULE_4__["UniversityService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], AddDepComponent.prototype, "colleges", void 0);
AddDepComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-dep',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./add-dep.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/department/add-dep.component.html")).default
    })
], AddDepComponent);



/***/ }),

/***/ "./src/app/department/department.component.css":
/*!*****************************************************!*\
  !*** ./src/app/department/department.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlcGFydG1lbnQvZGVwYXJ0bWVudC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/department/department.component.ts":
/*!****************************************************!*\
  !*** ./src/app/department/department.component.ts ***!
  \****************************************************/
/*! exports provided: DepartmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DepartmentComponent", function() { return DepartmentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _university_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../university.service */ "./src/app/university.service.ts");



let DepartmentComponent = class DepartmentComponent {
    constructor(departmentService) {
        this.departmentService = departmentService;
    }
    ngOnInit() {
        this.getDepantments();
        // this.leng = this.departments.length;
    }
    // DoCheck 触发变更检测机制就是调用DoCheck钩子，目的是保证组件属性和浏览器的显示同步
    ngDoCheck() {
        if (this.currentPag !== this.oldCurrentPag || this.pagNums !== this.oldPagNums) {
            this.dataShow = [];
            const curren = this.currentPag - 1;
            const pagNum = this.pagNums;
            let startNum = curren * pagNum;
            for (let i = 0; i < pagNum; i++, startNum++) {
                if (this.departments[startNum] !== null) {
                    this.dataShow.push(this.departments[startNum]);
                }
            }
            this.oldCurrentPag = this.currentPag;
            this.oldPagNums = this.pagNums;
        }
    }
    // 捕获当前显示页码函数
    currentPagHandel(pag) {
        this.currentPag = pag;
    }
    // 捕获每页显示数量行数
    pagNumsHandel(pagNum) {
        this.pagNums = pagNum;
    }
    // 获取所有Department数据
    getDepantments() {
        this.departmentService.getDepartments()
            .subscribe(res => { this.departments = res; this.leng = res.length; });
    }
    delete(department) {
        this.departments = this.departments.filter(h => h !== department);
        this.departmentService.deleteDepartment(department).subscribe(res => alert(res.message));
    }
};
DepartmentComponent.ctorParameters = () => [
    { type: _university_service__WEBPACK_IMPORTED_MODULE_2__["UniversityService"] }
];
DepartmentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./department.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/department/department.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./department.component.css */ "./src/app/department/department.component.css")).default]
    })
], DepartmentComponent);



/***/ }),

/***/ "./src/app/department/update-dep.component.ts":
/*!****************************************************!*\
  !*** ./src/app/department/update-dep.component.ts ***!
  \****************************************************/
/*! exports provided: UpdateDepComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateDepComponent", function() { return UpdateDepComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _university_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../university.service */ "./src/app/university.service.ts");





let UpdateDepComponent = class UpdateDepComponent {
    constructor(route, departmentService, location) {
        this.route = route;
        this.departmentService = departmentService;
        this.location = location;
    }
    ngOnInit() {
        this.getColleges(); // 下拉菜单赋值
        const id = this.route.snapshot.params.id; // 要修改专业的id
        this.departmentService.getDep(id)
            .subscribe(res => {
            this.department = res;
        });
    }
    compareFn(o1, o2) {
        return o1 && o2 ? o1.id === o2.id : o1 === o2;
    }
    getColleges() {
        this.departmentService.getColleges()
            .subscribe(res => this.colleges = res);
    }
    save() {
        console.log(this.department);
        this.departmentService.updateDep(this.department)
            .subscribe((res) => {
            alert(res.message);
            this.goBack();
        });
    }
    goBack() {
        this.location.back();
    }
};
UpdateDepComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _university_service__WEBPACK_IMPORTED_MODULE_4__["UniversityService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], UpdateDepComponent.prototype, "colleges", void 0);
UpdateDepComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-update-dep',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./update-dep.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/department/update-dep.component.html")).default,
    })
], UpdateDepComponent);



/***/ }),

/***/ "./src/app/index/index.component.css":
/*!*******************************************!*\
  !*** ./src/app/index/index.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* AppComponent's private CSS styles */\nh1 {\n  font-size: 1.2em;\n  margin-bottom: 0;\n  color: #2d456b;\n}\nheader{\n  position: fixed;\n  top:0; left:0;\n  border-bottom:solid 3px #eeeeff;\n  text-align:center;\n  background: linear-gradient(to bottom,  #e7f0fd 0%, #accbee 15%, #e7f0fd 85%,#fff 100%);\n  height:60px;\n  width: 100%;\n  padding-top:5px;\n}\nnav{\n  position: fixed;\n  top: 68px;left:0;\n  width:200px; height:100%;\n  border-right:solid 3px #eeeeff;\n  }\nsection{\n  position: absolute;\n  top: 68px;\n  left: 200px;\n  width: 80%;\n  padding-left:20px;\n  padding-top:10px;\n}\nnav a {\n  padding: 5px 10px;\n  text-decoration: none;\n  margin: 10px;\n  display: block;\n  background-color: #eee;\n  border-radius: 4px;\n}\nnav a:visited, a:link {\n  color: #334953;\n}\nnav a:hover {\n  color: #039be5;\n  background-color: #CFD8DC;\n}\nnav a.active {\n  color: #039be5;\n}\nnav a,input{ margin-right:10px;}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5kZXgvaW5kZXguY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxzQ0FBc0M7QUFDdEM7RUFDRSxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGNBQWM7QUFDaEI7QUFDQTtFQUNFLGVBQWU7RUFDZixLQUFLLEVBQUUsTUFBTTtFQUNiLCtCQUErQjtFQUMvQixpQkFBaUI7RUFDakIsdUZBQXVGO0VBQ3ZGLFdBQVc7RUFDWCxXQUFXO0VBQ1gsZUFBZTtBQUNqQjtBQUVBO0VBQ0UsZUFBZTtFQUNmLFNBQVMsQ0FBQyxNQUFNO0VBQ2hCLFdBQVcsRUFBRSxXQUFXO0VBQ3hCLDhCQUE4QjtFQUM5QjtBQUNGO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxXQUFXO0VBQ1gsVUFBVTtFQUNWLGlCQUFpQjtFQUNqQixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixxQkFBcUI7RUFDckIsWUFBWTtFQUNaLGNBQWM7RUFDZCxzQkFBc0I7RUFDdEIsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxjQUFjO0VBQ2QseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSxjQUFjO0FBQ2hCO0FBQ0EsYUFBYSxpQkFBaUIsQ0FBQyIsImZpbGUiOiJzcmMvYXBwL2luZGV4L2luZGV4LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBBcHBDb21wb25lbnQncyBwcml2YXRlIENTUyBzdHlsZXMgKi9cbmgxIHtcbiAgZm9udC1zaXplOiAxLjJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgY29sb3I6ICMyZDQ1NmI7XG59XG5oZWFkZXJ7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOjA7IGxlZnQ6MDtcbiAgYm9yZGVyLWJvdHRvbTpzb2xpZCAzcHggI2VlZWVmZjtcbiAgdGV4dC1hbGlnbjpjZW50ZXI7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICAjZTdmMGZkIDAlLCAjYWNjYmVlIDE1JSwgI2U3ZjBmZCA4NSUsI2ZmZiAxMDAlKTtcbiAgaGVpZ2h0OjYwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nLXRvcDo1cHg7XG59XG5cbm5hdntcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDY4cHg7bGVmdDowO1xuICB3aWR0aDoyMDBweDsgaGVpZ2h0OjEwMCU7XG4gIGJvcmRlci1yaWdodDpzb2xpZCAzcHggI2VlZWVmZjtcbiAgfVxuc2VjdGlvbntcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDY4cHg7XG4gIGxlZnQ6IDIwMHB4O1xuICB3aWR0aDogODAlO1xuICBwYWRkaW5nLWxlZnQ6MjBweDtcbiAgcGFkZGluZy10b3A6MTBweDtcbn1cbm5hdiBhIHtcbiAgcGFkZGluZzogNXB4IDEwcHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgbWFyZ2luOiAxMHB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxubmF2IGE6dmlzaXRlZCwgYTpsaW5rIHtcbiAgY29sb3I6ICMzMzQ5NTM7XG59XG5uYXYgYTpob3ZlciB7XG4gIGNvbG9yOiAjMDM5YmU1O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQ0ZEOERDO1xufVxubmF2IGEuYWN0aXZlIHtcbiAgY29sb3I6ICMwMzliZTU7XG59XG5uYXYgYSxpbnB1dHsgbWFyZ2luLXJpZ2h0OjEwcHg7fVxuIl19 */");

/***/ }),

/***/ "./src/app/index/index.component.ts":
/*!******************************************!*\
  !*** ./src/app/index/index.component.ts ***!
  \******************************************/
/*! exports provided: IndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexComponent", function() { return IndexComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let IndexComponent = class IndexComponent {
    constructor() { }
    ngOnInit() {
    }
};
IndexComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-index',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./index.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/index/index.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./index.component.css */ "./src/app/index/index.component.css")).default]
    })
], IndexComponent);



/***/ }),

/***/ "./src/app/login/Login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/Login.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n*{\n  font-family: \"微软雅黑\", serif;\n  font-size: 16px;\n  border: 0;\n  color: #666;\n  box-sizing:border-box;\n  -moz-box-sizing:border-box;\n  -webkit-box-sizing:border-box;\n}\n.bg{\n  width: 415px;\n  height: 337px;\n  background: #eef;\n  position:absolute;\n  left:0;\n  top:0;\n  right:0;\n  bottom:0;\n  margin:auto;\n  z-index: 1;\n  box-shadow:0 0 30px rgba(0, 0, 0, 0.4);\n  border-radius: 15px;\n}\n.password{\n  position: absolute;\n  top: 9.5rem;\n  right: 3.5rem;\n  display: flex;\n}\nbutton{\n  position: absolute;\n  top: 16rem;\n  right: 3.5rem;\n  border: none;\n  color: #fff;\n  width: 18.825rem;\n  text-align: center;\n  background-color: #2D456B;\n  line-height: 40px;\n}\n.img{\n  width: 100%;\n  position: absolute;\n  left: 0;\n  right: 0;\n  margin: 0 auto;\n  z-index: -1;\n}\n.wel{\n  width: 415px;\n  height: 35px;\n  color: #2d456b;\n  font-size: 1.5rem;\n  position: absolute;\n  top: 2rem;\n  text-align: center;\n}\ninput{\n  border-bottom:0.0625rem solid #2D456B;\n  height: 2.5625rem;\n  width: 15.8125rem;\n  text-indent: 3.125rem;\n  outline:none;\n  background-color: #eef;\n}\n.user{\n  position: absolute;\n  top: 6rem;\n  right: 3.5rem;\n  display: flex;\n\n}\n.rem{\n  position: absolute;\n  top: 12.5rem;\n  right: 18.2rem;\n  border: none;\n  color: #323333;\n}\n.rem input{\n  width: 0.8125rem;\n}\n.fg{\n  position: absolute;\n  top: 12.5rem;\n  right: 3.5rem;\n  border: none;\n  color: #323333;\n}\n.inuser{\n  border-bottom:1px solid #2D456B;\n  height: 41px;\n  line-height: 41px;\n}\n.reb{\n  margin-top: -33px;\n  margin-left: 20px;\n  font-size: 11px;\n}\n@media (min-width:800px) and (max-width:1200px)\n\n{\n  .bg{\n    width: 355px;\n    height: 300px;\n  }\n  .wel{\n    width: 355px;\n  }\n  .user{\n    top: 5rem;\n    right: 3.5rem;\n  }\n  .password{\n    top: 8rem;\n    right: 3.5rem;\n  }\n  input{\n\n    width: 12rem;\n  }\n  .rem{\n    top: 11rem;\n    right: 14.3rem;\n  }\n  .fg{\n    top: 11rem;\n    right: 3.5rem;\n  }\n  button{\n    top: 14rem;\n    width: 15rem;\n  }\n\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vTG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7RUFDRSwwQkFBMEI7RUFDMUIsZUFBZTtFQUNmLFNBQVM7RUFDVCxXQUFXO0VBQ1gscUJBQXFCO0VBQ3JCLDBCQUEwQjtFQUMxQiw2QkFBNkI7QUFDL0I7QUFDQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixNQUFNO0VBQ04sS0FBSztFQUNMLE9BQU87RUFDUCxRQUFRO0VBQ1IsV0FBVztFQUNYLFVBQVU7RUFDVixzQ0FBc0M7RUFDdEMsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGFBQWE7RUFDYixhQUFhO0FBQ2Y7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsYUFBYTtFQUNiLFlBQVk7RUFDWixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLE9BQU87RUFDUCxRQUFRO0VBQ1IsY0FBYztFQUNkLFdBQVc7QUFDYjtBQUNBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWixjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1Qsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxxQ0FBcUM7RUFDckMsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixxQkFBcUI7RUFDckIsWUFBWTtFQUNaLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxhQUFhO0VBQ2IsYUFBYTs7QUFFZjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixjQUFjO0VBQ2QsWUFBWTtFQUNaLGNBQWM7QUFDaEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixhQUFhO0VBQ2IsWUFBWTtFQUNaLGNBQWM7QUFDaEI7QUFDQTtFQUNFLCtCQUErQjtFQUMvQixZQUFZO0VBQ1osaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLGVBQWU7QUFDakI7QUFHQTs7O0VBR0U7SUFDRSxZQUFZO0lBQ1osYUFBYTtFQUNmO0VBQ0E7SUFDRSxZQUFZO0VBQ2Q7RUFDQTtJQUNFLFNBQVM7SUFDVCxhQUFhO0VBQ2Y7RUFDQTtJQUNFLFNBQVM7SUFDVCxhQUFhO0VBQ2Y7RUFDQTs7SUFFRSxZQUFZO0VBQ2Q7RUFDQTtJQUNFLFVBQVU7SUFDVixjQUFjO0VBQ2hCO0VBQ0E7SUFDRSxVQUFVO0lBQ1YsYUFBYTtFQUNmO0VBQ0E7SUFDRSxVQUFVO0lBQ1YsWUFBWTtFQUNkOztBQUVGIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vTG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuKntcbiAgZm9udC1mYW1pbHk6IFwi5b6u6L2v6ZuF6buRXCIsIHNlcmlmO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGJvcmRlcjogMDtcbiAgY29sb3I6ICM2NjY7XG4gIGJveC1zaXppbmc6Ym9yZGVyLWJveDtcbiAgLW1vei1ib3gtc2l6aW5nOmJvcmRlci1ib3g7XG4gIC13ZWJraXQtYm94LXNpemluZzpib3JkZXItYm94O1xufVxuLmJne1xuICB3aWR0aDogNDE1cHg7XG4gIGhlaWdodDogMzM3cHg7XG4gIGJhY2tncm91bmQ6ICNlZWY7XG4gIHBvc2l0aW9uOmFic29sdXRlO1xuICBsZWZ0OjA7XG4gIHRvcDowO1xuICByaWdodDowO1xuICBib3R0b206MDtcbiAgbWFyZ2luOmF1dG87XG4gIHotaW5kZXg6IDE7XG4gIGJveC1zaGFkb3c6MCAwIDMwcHggcmdiYSgwLCAwLCAwLCAwLjQpO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xufVxuLnBhc3N3b3Jke1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogOS41cmVtO1xuICByaWdodDogMy41cmVtO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuYnV0dG9ue1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTZyZW07XG4gIHJpZ2h0OiAzLjVyZW07XG4gIGJvcmRlcjogbm9uZTtcbiAgY29sb3I6ICNmZmY7XG4gIHdpZHRoOiAxOC44MjVyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJENDU2QjtcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XG59XG4uaW1ne1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHotaW5kZXg6IC0xO1xufVxuLndlbHtcbiAgd2lkdGg6IDQxNXB4O1xuICBoZWlnaHQ6IDM1cHg7XG4gIGNvbG9yOiAjMmQ0NTZiO1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDJyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbmlucHV0e1xuICBib3JkZXItYm90dG9tOjAuMDYyNXJlbSBzb2xpZCAjMkQ0NTZCO1xuICBoZWlnaHQ6IDIuNTYyNXJlbTtcbiAgd2lkdGg6IDE1LjgxMjVyZW07XG4gIHRleHQtaW5kZW50OiAzLjEyNXJlbTtcbiAgb3V0bGluZTpub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVmO1xufVxuLnVzZXJ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA2cmVtO1xuICByaWdodDogMy41cmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuXG59XG4ucmVte1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTIuNXJlbTtcbiAgcmlnaHQ6IDE4LjJyZW07XG4gIGJvcmRlcjogbm9uZTtcbiAgY29sb3I6ICMzMjMzMzM7XG59XG4ucmVtIGlucHV0e1xuICB3aWR0aDogMC44MTI1cmVtO1xufVxuLmZne1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTIuNXJlbTtcbiAgcmlnaHQ6IDMuNXJlbTtcbiAgYm9yZGVyOiBub25lO1xuICBjb2xvcjogIzMyMzMzMztcbn1cbi5pbnVzZXJ7XG4gIGJvcmRlci1ib3R0b206MXB4IHNvbGlkICMyRDQ1NkI7XG4gIGhlaWdodDogNDFweDtcbiAgbGluZS1oZWlnaHQ6IDQxcHg7XG59XG4ucmVie1xuICBtYXJnaW4tdG9wOiAtMzNweDtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIGZvbnQtc2l6ZTogMTFweDtcbn1cblxuXG5AbWVkaWEgKG1pbi13aWR0aDo4MDBweCkgYW5kIChtYXgtd2lkdGg6MTIwMHB4KVxuXG57XG4gIC5iZ3tcbiAgICB3aWR0aDogMzU1cHg7XG4gICAgaGVpZ2h0OiAzMDBweDtcbiAgfVxuICAud2Vse1xuICAgIHdpZHRoOiAzNTVweDtcbiAgfVxuICAudXNlcntcbiAgICB0b3A6IDVyZW07XG4gICAgcmlnaHQ6IDMuNXJlbTtcbiAgfVxuICAucGFzc3dvcmR7XG4gICAgdG9wOiA4cmVtO1xuICAgIHJpZ2h0OiAzLjVyZW07XG4gIH1cbiAgaW5wdXR7XG5cbiAgICB3aWR0aDogMTJyZW07XG4gIH1cbiAgLnJlbXtcbiAgICB0b3A6IDExcmVtO1xuICAgIHJpZ2h0OiAxNC4zcmVtO1xuICB9XG4gIC5mZ3tcbiAgICB0b3A6IDExcmVtO1xuICAgIHJpZ2h0OiAzLjVyZW07XG4gIH1cbiAgYnV0dG9ue1xuICAgIHRvcDogMTRyZW07XG4gICAgd2lkdGg6IDE1cmVtO1xuICB9XG5cbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let LoginComponent = class LoginComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    login(un, up) {
        this.uname = un;
        this.password = up;
        if (this.uname === 'admin' && this.password === '123456') {
            this.router.navigateByUrl('/index/college');
        }
        else {
            alert('用户名或密码错误');
        }
    }
};
LoginComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-Login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./Login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/Login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./Login.component.css */ "./src/app/login/Login.component.css")).default]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/page/page.component.css":
/*!*****************************************!*\
  !*** ./src/app/page/page.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#pags li,\r\n#paging li{\r\n  float: left;\r\n  display: inline-block;\r\n  border: 1px solid #DDDDDD;\r\n  cursor: pointer;\r\n  padding: 4px 0;\r\n}\r\n#paging li a,\r\n#pags li a{\r\n  padding: 4px 13px;\r\n}\r\n#paging{\r\n}\r\nselect{\r\n  height: 30px;\r\n  border: 1px solid #DDDDDD;\r\n  cursor:pointer;\r\n}\r\n.active{\r\n  background-color: #EEEEEE;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZS9wYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUUsV0FBVztFQUNYLHFCQUFxQjtFQUNyQix5QkFBeUI7RUFDekIsZUFBZTtFQUNmLGNBQWM7QUFDaEI7QUFDQTs7RUFFRSxpQkFBaUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7RUFDRSxZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLGNBQWM7QUFDaEI7QUFDQTtFQUNFLHlCQUF5QjtBQUMzQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2UvcGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3BhZ3MgbGksXHJcbiNwYWdpbmcgbGl7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNEREREREQ7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHBhZGRpbmc6IDRweCAwO1xyXG59XHJcbiNwYWdpbmcgbGkgYSxcclxuI3BhZ3MgbGkgYXtcclxuICBwYWRkaW5nOiA0cHggMTNweDtcclxufVxyXG4jcGFnaW5ne1xyXG59XHJcbnNlbGVjdHtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI0RERERERDtcclxuICBjdXJzb3I6cG9pbnRlcjtcclxufVxyXG4uYWN0aXZle1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNFRUVFRUU7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/page/page.component.ts":
/*!****************************************!*\
  !*** ./src/app/page/page.component.ts ***!
  \****************************************/
/*! exports provided: PageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageComponent", function() { return PageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PageComponent = class PageComponent {
    constructor() {
        this.currentPag = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"](); // 点击按钮 子组件传递事件给父级组件
        this.pagNums = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.pagNum = 5; // 每页显示数据数量
        this.pagCurren = 1; // 当前页码
        this.oldPagNum = 5;
    }
    // 默认当前显示页是1，每页显示数量5
    ngOnInit() {
        this.currentPag.emit(this.pagCurren);
        this.pagNums.emit(this.pagNum);
        console.log('init,, ' + this.leng + ',,' + this.pags.length);
    }
    // 初始化调用
    ngOnChanges(changes) {
        this.pags = []; // 这里必须初始化pags数组
        this.numPag = (+this.leng) % (+this.pagNum) === 0 ? (+this.leng) / (+this.pagNum) : Math.floor((+this.leng) / (+this.pagNum)) + 1;
        for (let i = 1; i <= this.numPag; i++) {
            this.pags.push(i);
        }
        console.log('change,, ' + this.leng + ',,' + this.pags.length);
    }
    // 当分页组件中的下拉数据数量发生变化，需要重新改变页码，调用
    ngDoCheck() {
        if (this.pagNum !== this.oldPagNum) {
            this.pagCurren = 1;
            this.currentPag.emit(this.pagCurren);
            this.pagNums.emit(this.pagNum);
            this.oldPagNum = this.pagNum;
            console.log('check,, ' + this.leng + ',,' + this.pags.length);
        }
    }
    // 获取每页显示数量函数,下拉菜单用
    gitPagNum() {
        this.pags = []; // 这里必须初始化pags数组
        this.numPag = (+this.leng) % (+this.pagNum) === 0 ? (+this.leng) / (+this.pagNum) : Math.floor((+this.leng) / (+this.pagNum)) + 1;
        for (let i = 1; i <= this.numPag; i++) {
            this.pags.push(i);
        }
    }
    // 获取当前显示页函数，特殊显示
    gitPag(pag) {
        this.pagCurren = pag;
        this.currentPag.emit(this.pagCurren);
        this.pagNums.emit(this.pagNum);
    }
    // 显示下一页函数
    next() {
        if (this.pagCurren !== this.pags[this.pags.length - 1]) {
            this.pagCurren = this.pagCurren + 1;
        }
        else {
            this.pagCurren = this.pags[this.pags.length - 1];
        }
        this.currentPag.emit(this.pagCurren);
        this.pagNums.emit(this.pagNum);
    }
    // 显示上一页函数
    previous() {
        if (this.pagCurren !== 1) {
            this.pagCurren = this.pagCurren - 1;
        }
        else {
            this.pagCurren = 1;
        }
        this.currentPag.emit(this.pagCurren);
        this.pagNums.emit(this.pagNum);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PageComponent.prototype, "leng", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], PageComponent.prototype, "currentPag", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], PageComponent.prototype, "pagNums", void 0);
PageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-page',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/page/page.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./page.component.css */ "./src/app/page/page.component.css")).default]
    })
], PageComponent);



/***/ }),

/***/ "./src/app/proftitle/add-proftitle.component.css":
/*!*******************************************************!*\
  !*** ./src/app/proftitle/add-proftitle.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("input,textarea{\r\n  width:100px; line-height: 25px; border-radius: 3px; background-color: #eeeeff; margin-bottom: 10px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZnRpdGxlL2FkZC1wcm9mdGl0bGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVcsRUFBRSxpQkFBaUIsRUFBRSxrQkFBa0IsRUFBRSx5QkFBeUIsRUFBRSxtQkFBbUI7QUFDcEciLCJmaWxlIjoic3JjL2FwcC9wcm9mdGl0bGUvYWRkLXByb2Z0aXRsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW5wdXQsdGV4dGFyZWF7XHJcbiAgd2lkdGg6MTAwcHg7IGxpbmUtaGVpZ2h0OiAyNXB4OyBib3JkZXItcmFkaXVzOiAzcHg7IGJhY2tncm91bmQtY29sb3I6ICNlZWVlZmY7IG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/proftitle/add-proftitle.component.ts":
/*!******************************************************!*\
  !*** ./src/app/proftitle/add-proftitle.component.ts ***!
  \******************************************************/
/*! exports provided: AddTitleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddTitleComponent", function() { return AddTitleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _university_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../university.service */ "./src/app/university.service.ts");





let AddTitleComponent = class AddTitleComponent {
    constructor(route, tltleService, location) {
        this.route = route;
        this.tltleService = tltleService;
        this.location = location;
    }
    ngOnInit() {
    }
    save(description, no, remarks) {
        this.proftitle = { id: null, no: no.trim(), description: description.trim(), remarks: remarks.trim() };
        if (!description) {
            return;
        }
        this.tltleService.addCollege(this.proftitle)
            .subscribe(() => this.goBack());
    }
    goBack() {
        this.location.back();
    }
};
AddTitleComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _university_service__WEBPACK_IMPORTED_MODULE_4__["UniversityService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], AddTitleComponent.prototype, "proftitle", void 0);
AddTitleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-proftitle',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./add-proftitle.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/proftitle/add-proftitle.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./add-proftitle.component.css */ "./src/app/proftitle/add-proftitle.component.css")).default]
    })
], AddTitleComponent);



/***/ }),

/***/ "./src/app/proftitle/proftitle.component.css":
/*!***************************************************!*\
  !*** ./src/app/proftitle/proftitle.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2Z0aXRsZS9wcm9mdGl0bGUuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/proftitle/proftitle.component.ts":
/*!**************************************************!*\
  !*** ./src/app/proftitle/proftitle.component.ts ***!
  \**************************************************/
/*! exports provided: ProftitleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProftitleComponent", function() { return ProftitleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _university_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../university.service */ "./src/app/university.service.ts");



let ProftitleComponent = class ProftitleComponent {
    constructor(proftitleService) {
        this.proftitleService = proftitleService;
    }
    ngOnInit() {
        this.getTitles();
    }
    getTitles() {
        this.proftitleService.getTitles()
            .subscribe(res => this.proftitles = res);
    }
    delete(proftitle) {
        this.proftitles = this.proftitles.filter(h => h !== proftitle);
        this.proftitleService.deleteTitle(proftitle).subscribe(res => alert(res.message));
    }
};
ProftitleComponent.ctorParameters = () => [
    { type: _university_service__WEBPACK_IMPORTED_MODULE_2__["UniversityService"] }
];
ProftitleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-college',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./proftitle.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/proftitle/proftitle.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./proftitle.component.css */ "./src/app/proftitle/proftitle.component.css")).default]
    })
], ProftitleComponent);



/***/ }),

/***/ "./src/app/proftitle/update-proftitle.component.css":
/*!**********************************************************!*\
  !*** ./src/app/proftitle/update-proftitle.component.css ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("input,textarea{\r\n  width:100px; line-height: 25px; border-radius: 3px; background-color: #eeeeff; margin-bottom: 10px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZnRpdGxlL3VwZGF0ZS1wcm9mdGl0bGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVcsRUFBRSxpQkFBaUIsRUFBRSxrQkFBa0IsRUFBRSx5QkFBeUIsRUFBRSxtQkFBbUI7QUFDcEciLCJmaWxlIjoic3JjL2FwcC9wcm9mdGl0bGUvdXBkYXRlLXByb2Z0aXRsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW5wdXQsdGV4dGFyZWF7XHJcbiAgd2lkdGg6MTAwcHg7IGxpbmUtaGVpZ2h0OiAyNXB4OyBib3JkZXItcmFkaXVzOiAzcHg7IGJhY2tncm91bmQtY29sb3I6ICNlZWVlZmY7IG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/proftitle/update-proftitle.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/proftitle/update-proftitle.component.ts ***!
  \*********************************************************/
/*! exports provided: UpdateProftitleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateProftitleComponent", function() { return UpdateProftitleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _university_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../university.service */ "./src/app/university.service.ts");





let UpdateProftitleComponent = class UpdateProftitleComponent {
    constructor(route, proftitleService, location) {
        this.route = route;
        this.proftitleService = proftitleService;
        this.location = location;
    }
    ngOnInit() {
        const id = this.route.snapshot.params.id;
        this.proftitleService.getTitle(id)
            .subscribe(res => this.proftitle = res);
    }
    goBack() {
        this.location.back();
    }
    save() {
        this.proftitleService.updateCollege(this.proftitle)
            .subscribe((res) => { alert(res.message); this.goBack(); });
    }
};
UpdateProftitleComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _university_service__WEBPACK_IMPORTED_MODULE_4__["UniversityService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], UpdateProftitleComponent.prototype, "proftitle", void 0);
UpdateProftitleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-update-proftitle',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./update-proftitle.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/proftitle/update-proftitle.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./update-proftitle.component.css */ "./src/app/proftitle/update-proftitle.component.css")).default]
    })
], UpdateProftitleComponent);



/***/ }),

/***/ "./src/app/teacher/add-teacher.component.ts":
/*!**************************************************!*\
  !*** ./src/app/teacher/add-teacher.component.ts ***!
  \**************************************************/
/*! exports provided: AddTeacherComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddTeacherComponent", function() { return AddTeacherComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _university_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../university.service */ "./src/app/university.service.ts");





let AddTeacherComponent = class AddTeacherComponent {
    constructor(route, teacherService, location) {
        this.route = route;
        this.teacherService = teacherService;
        this.location = location;
    }
    ngOnInit() {
        this.getColleges();
        this.getDegrees();
        this.getTitles();
        this.getDepartments();
    }
    getColleges() {
        this.teacherService.getColleges()
            .subscribe(res => this.schools = res);
    }
    getDegrees() {
        this.teacherService.getDegrees()
            .subscribe(res => this.degrees = res);
    }
    getTitles() {
        this.teacherService.getTitles()
            .subscribe(res => this.titles = res);
    }
    getDepartments() {
        this.teacherService.getDepartments()
            .subscribe(res => this.departments = res);
    }
    getDepSch(id) {
        this.teacherService.getDepSch(id)
            .subscribe(res => this.departments = res);
    }
    save(name, no) {
        this.teacher = { id: null, name: name.trim(), no: no.trim(),
            title: this.title, degree: this.degree, department: this.department };
        if (!name) {
            return;
        }
        this.teacherService.addTeacher(this.teacher)
            .subscribe(() => this.goBack());
    }
    goBack() {
        this.location.back();
    }
};
AddTeacherComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _university_service__WEBPACK_IMPORTED_MODULE_4__["UniversityService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], AddTeacherComponent.prototype, "schools", void 0);
AddTeacherComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-teacher',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./add-teacher.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/teacher/add-teacher.component.html")).default,
    })
], AddTeacherComponent);



/***/ }),

/***/ "./src/app/teacher/teacher.component.ts":
/*!**********************************************!*\
  !*** ./src/app/teacher/teacher.component.ts ***!
  \**********************************************/
/*! exports provided: TeacherComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeacherComponent", function() { return TeacherComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _university_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../university.service */ "./src/app/university.service.ts");



let TeacherComponent = class TeacherComponent {
    constructor(teacherService) {
        this.teacherService = teacherService;
    }
    ngOnInit() {
        this.getTeachers();
    }
    getTeachers() {
        this.teacherService.getTeachers()
            .subscribe(res => this.teachers = res);
    }
    delete(teacher) {
        this.teachers = this.teachers.filter(h => h !== teacher);
        this.teacherService.deleteTeacher(teacher).subscribe(res => alert(res.message));
    }
};
TeacherComponent.ctorParameters = () => [
    { type: _university_service__WEBPACK_IMPORTED_MODULE_2__["UniversityService"] }
];
TeacherComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-teacher',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./teacher.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/teacher/teacher.component.html")).default,
    })
], TeacherComponent);



/***/ }),

/***/ "./src/app/teacher/update-teacher.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/teacher/update-teacher.component.ts ***!
  \*****************************************************/
/*! exports provided: UpdateTeacherComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateTeacherComponent", function() { return UpdateTeacherComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _university_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../university.service */ "./src/app/university.service.ts");





let UpdateTeacherComponent = class UpdateTeacherComponent {
    // department: Department;
    constructor(route, teacherService, location) {
        this.route = route;
        this.teacherService = teacherService;
        this.location = location;
    }
    ngOnInit() {
        this.getColleges();
        this.getDegrees();
        this.getTitles();
        this.getDepartments();
        const id = this.route.snapshot.params.id; // 要修改专业的id
        this.teacherService.getTeacher(id)
            .subscribe(res => {
            this.teacher = res;
        });
    }
    getColleges() {
        this.teacherService.getColleges()
            .subscribe(res => this.schools = res);
    }
    getDegrees() {
        this.teacherService.getDegrees()
            .subscribe(res => this.degrees = res);
    }
    getTitles() {
        this.teacherService.getTitles()
            .subscribe(res => this.titles = res);
    }
    getDepartments() {
        this.teacherService.getDepartments()
            .subscribe(res => this.departments = res);
    }
    getDepSch(id) {
        this.teacherService.getDepSch(id)
            .subscribe(res => this.departments = res);
    }
    save() {
        this.teacherService.updateTeacher(this.teacher)
            .subscribe((res) => {
            alert(res.message);
            this.goBack();
        });
    }
    goBack() {
        this.location.back();
    }
    compareFn(o1, o2) {
        return o1 && o2 ? o1.id === o2.id : o1 === o2;
    }
};
UpdateTeacherComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _university_service__WEBPACK_IMPORTED_MODULE_4__["UniversityService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], UpdateTeacherComponent.prototype, "schools", void 0);
UpdateTeacherComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-update-teacher',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./update-teacher.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/teacher/update-teacher.component.html")).default,
    })
], UpdateTeacherComponent);



/***/ }),

/***/ "./src/app/university.service.ts":
/*!***************************************!*\
  !*** ./src/app/university.service.ts ***!
  \***************************************/
/*! exports provided: UniversityService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UniversityService", function() { return UniversityService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





const httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
let UniversityService = class UniversityService {
    constructor(http) {
        this.http = http;
        this.collegeUrl = '../school.ctl'; // 自己机器上的servlet
        this.depUrl = '../department.ctl';
        this.teacherUrl = '../teacher.ctl';
        this.degreeUrl = '../degree.ctl';
        this.titleUrl = '../profTitle.ctl';
    }
    /** GET heroes from the server */
    getColleges() {
        return this.http.get(this.collegeUrl)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getColleges', [])));
    }
    getDepartments() {
        return this.http.get(this.depUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getDepartments', [])));
    }
    getTeachers() {
        return this.http.get(this.teacherUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getTeachers', [])));
    }
    getDegrees() {
        return this.http.get(this.degreeUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getDegrees', [])));
    }
    getTitles() {
        return this.http.get(this.titleUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getTitles', [])));
    }
    deleteCollege(college) {
        const id = typeof college === 'number' ? college : college.id;
        return this.http.delete(this.collegeUrl + '?id=' + id, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('deleteCollege')));
    }
    deleteDepartment(department) {
        const id = typeof department === 'number' ? department : department.id;
        return this.http.delete(this.depUrl + '?id=' + id, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('deleteDepartment')));
    }
    deleteTeacher(teacher) {
        const id = typeof teacher === 'number' ? teacher : teacher.id;
        return this.http.delete(this.teacherUrl + '?id=' + id, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('deleteTeacher')));
    }
    deleteTitle(title) {
        const id = typeof title === 'number' ? title : title.id;
        return this.http.delete(this.titleUrl + '?id=' + id, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('deleteTitle')));
    }
    /** POST: add a new college to the server */
    addCollege(college) {
        return this.http.post(this.collegeUrl, college, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('addCollege')));
    }
    addDepartment(department) {
        return this.http.post(this.depUrl, department, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('addDepartment')));
    }
    addTeacher(teacher) {
        return this.http.post(this.teacherUrl, teacher, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('addTeacher')));
    }
    addTitle(title) {
        return this.http.post(this.titleUrl, title, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('addTitle')));
    }
    /** GET college by id. Will 404 if id not found */
    getCollege(id) {
        const url = this.collegeUrl + '?id=' + id;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError(`getCollege id=${id}`)));
    }
    getTitle(id) {
        const url = this.titleUrl + '?id=' + id;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError(`getTitle id=${id}`)));
    }
    getDep(id) {
        const url = this.depUrl + '?id=' + id;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError(`getDep id=${id}`)));
    }
    getTeacher(id) {
        const url = this.teacherUrl + '?id=' + id;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError(`getTeacher id=${id}`)));
    }
    getDepSch(id) {
        const url = this.depUrl + '?paraType=school&id=' + id;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError(`getDepSch schoolid=${id}`)));
    }
    updateCollege(college) {
        return this.http.put(this.collegeUrl, college, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('updateCollege')));
    }
    updateDep(department) {
        return this.http.put(this.depUrl, department, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('updateDep')));
    }
    updateTeacher(teacher) {
        return this.http.put(this.teacherUrl, teacher, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('updateTeacher')));
    }
    /**
     * Handle Http operation that failed.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    handleError(operation = 'operation', result) {
        return (error) => {
            console.error(error); // log to console instead
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(result);
        };
    }
};
UniversityService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
UniversityService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], UniversityService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: true
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\WS\WS13\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map