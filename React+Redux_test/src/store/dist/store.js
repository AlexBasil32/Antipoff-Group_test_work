"use strict";
exports.__esModule = true;
var redux_1 = require("redux");
var redux_devtools_extension_1 = require("redux-devtools-extension");
var redux_thunk_1 = require("redux-thunk");
var rootReducer_1 = require("./rootReducer");
exports.store = redux_1.createStore(rootReducer_1.rootReduce, redux_devtools_extension_1.composeWithDevTools(redux_1.applyMiddleware(redux_thunk_1["default"])));

//# sourceMappingURL=store.js.map
