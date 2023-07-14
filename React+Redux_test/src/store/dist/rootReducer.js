"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var usersReducer_1 = require("./users/usersReducer");
var initialState = {
    users: {
        page: 1,
        data: [],
        total_pages: 0,
        error: '',
        loading: false,
        dataLike: []
    }
};
var EActions;
(function (EActions) {
    EActions["USERS_REQUEST"] = "USERS_REQUEST";
    EActions["USERS_REQUEST_SUCCESS"] = "USERS_REQUEST_SUCCESS";
    EActions["USERS_REQUEST_ERROR"] = "USERS_REQUEST_ERROR";
    EActions["SET_CURRENT_PAGE"] = "SET_CURRENT_PAGE";
    EActions["CHANGE_LIKE_USER"] = "CHANGE_LIKE_USER";
})(EActions = exports.EActions || (exports.EActions = {}));
exports.rootReduce = function (state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case EActions.USERS_REQUEST:
        case EActions.USERS_REQUEST_SUCCESS:
        case EActions.USERS_REQUEST_ERROR:
        case EActions.SET_CURRENT_PAGE:
            return __assign(__assign({}, state), { users: usersReducer_1.usersReducer(state.users, action) });
        default:
            return state;
    }
};

//# sourceMappingURL=rootReducer.js.map
