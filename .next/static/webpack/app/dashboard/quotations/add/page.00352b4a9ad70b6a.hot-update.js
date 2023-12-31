"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/dashboard/quotations/add/page",{

/***/ "(app-pages-browser)/./app/lib/actions.js":
/*!****************************!*\
  !*** ./app/lib/actions.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addClient: function() { return /* binding */ addClient; },
/* harmony export */   addPurchaseOrder: function() { return /* binding */ addPurchaseOrder; },
/* harmony export */   addQuotation: function() { return /* binding */ addQuotation; },
/* harmony export */   addSupplier: function() { return /* binding */ addSupplier; },
/* harmony export */   addUser: function() { return /* binding */ addUser; },
/* harmony export */   deleteClient: function() { return /* binding */ deleteClient; },
/* harmony export */   deletePurchseOrder: function() { return /* binding */ deletePurchseOrder; },
/* harmony export */   deleteQuotation: function() { return /* binding */ deleteQuotation; },
/* harmony export */   deleteSupplier: function() { return /* binding */ deleteSupplier; },
/* harmony export */   deleteUser: function() { return /* binding */ deleteUser; },
/* harmony export */   updateClient: function() { return /* binding */ updateClient; },
/* harmony export */   updatePurchseOrder: function() { return /* binding */ updatePurchseOrder; },
/* harmony export */   updateQuotation: function() { return /* binding */ updateQuotation; },
/* harmony export */   updateSupplier: function() { return /* binding */ updateSupplier; },
/* harmony export */   updateUser: function() { return /* binding */ updateUser; }
/* harmony export */ });
/* harmony import */ var next_dist_client_app_call_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/client/app-call-server */ "(app-pages-browser)/./node_modules/next/dist/client/app-call-server.js");
/* harmony import */ var next_dist_client_app_call_server__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_app_call_server__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var private_next_rsc_action_proxy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! private-next-rsc-action-proxy */ "(app-pages-browser)/./node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-proxy.js");
/* harmony import */ var private_next_rsc_action_client_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! private-next-rsc-action-client-wrapper */ "(app-pages-browser)/./node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js");



function __build_action__(action, args) {
  return (0,next_dist_client_app_call_server__WEBPACK_IMPORTED_MODULE_0__.callServer)(action.$$id, args)
}

/* __next_internal_action_entry_do_not_use__ {"39515fd4b51a2a452c95d16b70e37df7fb9b202a":"updateClient","fbd7f1d740a0ee643bd362d9069f8ee18c782845":"updateQuotation","8862db218ff30a947e90a94e200e473c8bf39ccc":"deleteQuotation","28121d01f492f8364ebd3895c41f3c9a071b7e57":"deleteClient","d566dff3e34e820575d6c55de13e57e98727545e":"addSupplier","2766589edc962ae374255812b6b65486d6ed1e44":"updateUser","71f0f84c5a668cfa090dfc7201bae25cccfd3538":"deleteUser","428f4f856ffa926f513bc01aeea75dc86e1bbe70":"addClient","e576162fc037a8d078b25b9f619cec09c1fcecf8":"addPurchaseOrder","89d7542656d31e8f7a06b1e3218efa9e7f8dcbc8":"updatePurchseOrder","26105cde9af7e353c1bd4d13a370fa12584daa22":"deleteSupplier","c5a1dec8b2a0a6a52732dac71112ed1269f30151":"addQuotation","eb177e523d1845c36d5b7038d49c3a7fe34dbce9":"deletePurchseOrder","93315f75eda7005380578ca51fedb6eff85670bf":"addUser","76e07bc7e03bd9028c9549856931359930303db9":"updateSupplier"} */ 

var addUser = (0,private_next_rsc_action_client_wrapper__WEBPACK_IMPORTED_MODULE_2__.createServerReference)("93315f75eda7005380578ca51fedb6eff85670bf");
var updateUser = (0,private_next_rsc_action_client_wrapper__WEBPACK_IMPORTED_MODULE_2__.createServerReference)("2766589edc962ae374255812b6b65486d6ed1e44");
var deleteUser = (0,private_next_rsc_action_client_wrapper__WEBPACK_IMPORTED_MODULE_2__.createServerReference)("71f0f84c5a668cfa090dfc7201bae25cccfd3538");
var addClient = (0,private_next_rsc_action_client_wrapper__WEBPACK_IMPORTED_MODULE_2__.createServerReference)("428f4f856ffa926f513bc01aeea75dc86e1bbe70");
var updateClient = (0,private_next_rsc_action_client_wrapper__WEBPACK_IMPORTED_MODULE_2__.createServerReference)("39515fd4b51a2a452c95d16b70e37df7fb9b202a");
var deleteClient = (0,private_next_rsc_action_client_wrapper__WEBPACK_IMPORTED_MODULE_2__.createServerReference)("28121d01f492f8364ebd3895c41f3c9a071b7e57");
var addSupplier = (0,private_next_rsc_action_client_wrapper__WEBPACK_IMPORTED_MODULE_2__.createServerReference)("d566dff3e34e820575d6c55de13e57e98727545e");
var deleteSupplier = (0,private_next_rsc_action_client_wrapper__WEBPACK_IMPORTED_MODULE_2__.createServerReference)("26105cde9af7e353c1bd4d13a370fa12584daa22");
var updateSupplier = (0,private_next_rsc_action_client_wrapper__WEBPACK_IMPORTED_MODULE_2__.createServerReference)("76e07bc7e03bd9028c9549856931359930303db9");
var addQuotation = (0,private_next_rsc_action_client_wrapper__WEBPACK_IMPORTED_MODULE_2__.createServerReference)("c5a1dec8b2a0a6a52732dac71112ed1269f30151");
var updateQuotation = (0,private_next_rsc_action_client_wrapper__WEBPACK_IMPORTED_MODULE_2__.createServerReference)("fbd7f1d740a0ee643bd362d9069f8ee18c782845");
var deleteQuotation = (0,private_next_rsc_action_client_wrapper__WEBPACK_IMPORTED_MODULE_2__.createServerReference)("8862db218ff30a947e90a94e200e473c8bf39ccc");
var addPurchaseOrder = (0,private_next_rsc_action_client_wrapper__WEBPACK_IMPORTED_MODULE_2__.createServerReference)("e576162fc037a8d078b25b9f619cec09c1fcecf8");
var updatePurchseOrder = (0,private_next_rsc_action_client_wrapper__WEBPACK_IMPORTED_MODULE_2__.createServerReference)("89d7542656d31e8f7a06b1e3218efa9e7f8dcbc8");
var deletePurchseOrder = (0,private_next_rsc_action_client_wrapper__WEBPACK_IMPORTED_MODULE_2__.createServerReference)("eb177e523d1845c36d5b7038d49c3a7fe34dbce9");



;
    // Wrapped in an IIFE to avoid polluting the global scope
    ;
    (function () {
        var _a, _b;
        // Legacy CSS implementations will `eval` browser code in a Node.js context
        // to extract CSS. For backwards compatibility, we need to check we're in a
        // browser context before continuing.
        if (typeof self !== 'undefined' &&
            // AMP / No-JS mode does not inject these helpers:
            '$RefreshHelpers$' in self) {
            // @ts-ignore __webpack_module__ is global
            var currentExports = module.exports;
            // @ts-ignore __webpack_module__ is global
            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;
            // This cannot happen in MainTemplate because the exports mismatch between
            // templating and execution.
            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
            // A module can be accepted automatically based on its exports, e.g. when
            // it is a Refresh Boundary.
            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
                // Save the previous exports signature on update so we can compare the boundary
                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)
                module.hot.dispose(function (data) {
                    data.prevSignature =
                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);
                });
                // Unconditionally accept an update to this module, we'll check if it's
                // still a Refresh Boundary later.
                // @ts-ignore importMeta is replaced in the loader
                module.hot.accept();
                // This field is set when the previous version of this module was a
                // Refresh Boundary, letting us know we need to check for invalidation or
                // enqueue an update.
                if (prevSignature !== null) {
                    // A boundary can become ineligible if its exports are incompatible
                    // with the previous exports.
                    //
                    // For example, if you add/remove/change exports, we'll want to
                    // re-execute the importing modules, and force those components to
                    // re-render. Similarly, if you convert a class component to a
                    // function, we want to invalidate the boundary.
                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {
                        module.hot.invalidate();
                    }
                    else {
                        self.$RefreshHelpers$.scheduleUpdate();
                    }
                }
            }
            else {
                // Since we just executed the code for the module, it's possible that the
                // new exports made it ineligible for being a boundary.
                // We only care about the case when we were _previously_ a boundary,
                // because we already accepted this update (accidental side effect).
                var isNoLongerABoundary = prevSignature !== null;
                if (isNoLongerABoundary) {
                    module.hot.invalidate();
                }
            }
        }
    })();


/***/ })

});