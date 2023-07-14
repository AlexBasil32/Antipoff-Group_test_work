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
var rootReducer_1 = require("../rootReducer");
exports.usersReducer = function (state, action) {
    switch (action.type) {
        case rootReducer_1.EActions.USERS_REQUEST:
            return __assign(__assign({}, state), { loading: true });
        case rootReducer_1.EActions.USERS_REQUEST_SUCCESS:
            return __assign(__assign({}, state), { page: action.usersData.page, data: action.usersData.data, total_pages: action.usersData.total_pages, loading: false });
        case rootReducer_1.EActions.USERS_REQUEST_ERROR:
            return __assign(__assign({}, state), { error: action.error, loading: false });
        case rootReducer_1.EActions.SET_CURRENT_PAGE:
            return __assign(__assign({}, state), { page: action.payload });
        case rootReducer_1.EActions.CHANGE_LIKE_USER:
            return __assign(__assign({}, state), { dataLike: [action.payload] });
        default:
            return state;
    }
};

//# sourceMappingURL=usersReducer.js.map
