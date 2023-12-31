"use strict";
exports.__esModule = true;
require("../../scss/style.scss");
var react_router_dom_1 = require("react-router-dom");
var NotFound_1 = require("../../pages/NotFound");
var SignUp_1 = require("../../pages/SignUp");
var CardPartner_1 = require("../../pages/CardPartner");
var Main_1 = require("../../pages/Main/Main");
function App() {
    return (React.createElement(react_router_dom_1.Routes, null,
        React.createElement(react_router_dom_1.Route, { path: "/", element: React.createElement(Main_1.Main, null) }),
        React.createElement(react_router_dom_1.Route, { path: "/signup", element: React.createElement(SignUp_1.SignUp, null) }),
        React.createElement(react_router_dom_1.Route, { path: "/antipoff-group", element: React.createElement(Main_1.Main, null) }),
        React.createElement(react_router_dom_1.Route, { path: "/users/user:id", element: React.createElement(CardPartner_1.CardPartner, null) }),
        React.createElement(react_router_dom_1.Route, { path: "*", element: React.createElement(NotFound_1.NotFound, null) })));
}
exports["default"] = App;

//# sourceMappingURL=App.js.map
