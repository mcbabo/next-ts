"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/guilds/[id]";
exports.ids = ["pages/api/guilds/[id]"];
exports.modules = {

/***/ "sqlite":
/*!*************************!*\
  !*** external "sqlite" ***!
  \*************************/
/***/ ((module) => {

module.exports = import("sqlite");;

/***/ }),

/***/ "(api)/./pages/api/guilds/[id].ts":
/*!**********************************!*\
  !*** ./pages/api/guilds/[id].ts ***!
  \**********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getData)\n/* harmony export */ });\n/* harmony import */ var sqlite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sqlite */ \"sqlite\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([sqlite__WEBPACK_IMPORTED_MODULE_0__]);\nsqlite__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nasync function getData({ id  }) {\n    const db = await sqlite__WEBPACK_IMPORTED_MODULE_0__[\"default\"].open(\"../guild_data.db\");\n    const data = await db.all(`SELECT * FROM _${id} WHERE`).json();\n    return {\n        data\n    };\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZ3VpbGRzL1tpZF0udHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBNEI7QUFFYixlQUFlQyxPQUFPLENBQUMsRUFBQ0MsRUFBRSxHQUFDLEVBQUM7SUFDdkMsTUFBTUMsRUFBRSxHQUFHLE1BQU1ILG1EQUFXLENBQUMsa0JBQWtCLENBQUM7SUFDaEQsTUFBTUssSUFBSSxHQUFHLE1BQU1GLEVBQUUsQ0FBQ0csR0FBRyxDQUFDLENBQUMsZUFBZSxFQUFFSixFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQ0ssSUFBSSxFQUFFO0lBQzlELE9BQU87UUFDSEYsSUFBSTtLQUNQLENBQUM7Q0FDTCIsInNvdXJjZXMiOlsid2VicGFjazovL25leHQtdHMvLi9wYWdlcy9hcGkvZ3VpbGRzL1tpZF0udHM/YzExMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3FsaXRlIGZyb20gJ3NxbGl0ZSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBnZXREYXRhKHtpZH0pe1xyXG4gICAgY29uc3QgZGIgPSBhd2FpdCBzcWxpdGUub3BlbignLi4vZ3VpbGRfZGF0YS5kYicpO1xyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IGRiLmFsbChgU0VMRUNUICogRlJPTSBfJHtpZH0gV0hFUkVgKS5qc29uKCk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGRhdGFcclxuICAgIH07XHJcbn0iXSwibmFtZXMiOlsic3FsaXRlIiwiZ2V0RGF0YSIsImlkIiwiZGIiLCJvcGVuIiwiZGF0YSIsImFsbCIsImpzb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/guilds/[id].ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/guilds/[id].ts"));
module.exports = __webpack_exports__;

})();