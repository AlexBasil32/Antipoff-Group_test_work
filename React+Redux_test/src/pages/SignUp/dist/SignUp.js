"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var Text_1 = require("../../components/Text");
var signup_module_scss_1 = require("./signup.module.scss");
function SignUp() {
    // const [valueName, setName] = useState('')
    // const [valueNameError, setValueError] = useState('')
    var _a = react_1.useState(false), touched = _a[0], setTouched = _a[1];
    var _b = react_1.useState(''), valueEmail = _b[0], setEmail = _b[1];
    var _c = react_1.useState(''), valueEmailError = _c[0], setEmailError = _c[1];
    var _d = react_1.useState(''), valuePass = _d[0], setPass = _d[1];
    var _e = react_1.useState(''), valuePassError = _e[0], setPassError = _e[1];
    var _f = react_1.useState(''), valueConfirmPass = _f[0], setConfirmPass = _f[1];
    var _g = react_1.useState(''), valueConfirmPassError = _g[0], setConfirmPassError = _g[1];
    var navigate = react_router_dom_1.useNavigate();
    var goMain = function () { return navigate('/antipoff-group'); };
    var handleSubmit = function (event) {
        event.preventDefault();
        setTouched(true);
        // setValueError(validateValueName())
        setEmailError(validateValueEmail());
        setPassError(validateValuePass());
        setConfirmPassError(validateValueConfirmPass());
        var isFormValid = !validateValueEmail() && !validateValuePass() && !validateValueConfirmPass();
        // const isFormValid = !validateValueName()
        if (!isFormValid) {
            return null;
        }
        sessionStorage.setItem('token', 'true');
        goMain();
    };
    // const handleChangeName = (event: ChangeEvent<HTMLInputElement>) => setName(event.target.value)
    var handleChangeEmail = function (event) { return setEmail(event.target.value); };
    var handleChangePass = function (event) { return setPass(event.target.value); };
    var handleChangeConfirmPass = function (event) { return setConfirmPass(event.target.value); };
    // const validateValueName = () => {
    //   if (valueName.length <= 1) {
    //     return 'Введите больше 2-x символов'
    //   }
    //   return ''
    // }
    var validateValueEmail = function () {
        if (valueEmail.length <= 1) {
            return 'Неверный Email';
        }
        return '';
    };
    var validateValuePass = function () {
        if (valuePass === '') {
            return 'Пароли должны быть одинаковы';
        }
        if (valuePass !== valueConfirmPass) {
            return 'Пароли должны быть одинаковы';
        }
        return '';
    };
    var validateValueConfirmPass = function () {
        if (valueConfirmPass === '') {
            return 'Пароли должны быть одинаковы';
        }
        if (valuePass !== valueConfirmPass) {
            return 'Пароли должны быть одинаковы';
        }
        return '';
    };
    return (React.createElement("section", { className: signup_module_scss_1["default"].wrapper },
        React.createElement("form", { className: signup_module_scss_1["default"].form, onSubmit: handleSubmit },
            React.createElement(Text_1.Text, { As: "h1", size: 20, bold: true }, "\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F"),
            React.createElement(Text_1.Text, { As: "span", size: 16, bold: true }, "\u042D\u0442\u043E \u0442\u0435\u0441\u0442\u043E\u0432\u043E\u0435 \u0437\u0430\u0434\u0430\u043D\u0438\u0435, \u0434\u043E\u0441\u0442\u0430\u0442\u043E\u0447\u043D\u043E \u043F\u0440\u043E\u0439\u0442\u0438 \u0432\u0430\u043B\u0438\u0434\u0430\u0446\u0438\u044E \u0444\u043E\u0440\u043C\u044B \u0434\u043B\u044F \u0437\u0430\u043F\u0443\u0441\u043A\u0430 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F \u0438 \u0437\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u044C \u043F\u043E\u043B\u044F \u0441\u043E \u0437\u0432\u0435\u0437\u0434\u043E\u0447\u043A\u043E\u0439"),
            React.createElement("label", { className: signup_module_scss_1["default"].label, htmlFor: "name" }, "\u0418\u043C\u044F"),
            React.createElement("input", { className: signup_module_scss_1["default"].input, 
                // value={valueName}
                // onChange={handleChangeName}
                // aria-invalid={valueNameError ? 'true' : undefined}
                type: "text", id: "name", name: "name", placeholder: "\u0418\u043C\u044F" }),
            React.createElement("label", { className: signup_module_scss_1["default"].label, htmlFor: "email" }, "\u042D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u0430\u044F \u043F\u043E\u0447\u0442\u0430*"),
            React.createElement("input", { className: signup_module_scss_1["default"].input, value: valueEmail, onChange: handleChangeEmail, "aria-invalid": valueEmailError ? 'true' : undefined, type: "email", id: "email", name: "email", placeholder: "example@mail.ru" }),
            touched && valueEmailError && React.createElement("div", { style: { color: 'red', fontSize: '10px' } }, valueEmailError),
            React.createElement("label", { className: signup_module_scss_1["default"].label, htmlFor: "password" }, "\u041F\u0430\u0440\u043E\u043B\u044C*"),
            React.createElement("input", { className: signup_module_scss_1["default"].input, value: valuePass, onChange: handleChangePass, "aria-invalid": valuePassError ? 'true' : undefined, type: "password", id: "password", name: "password", placeholder: "****" }),
            touched && valuePassError && React.createElement("div", { style: { color: 'red', fontSize: '10px' } }, valuePassError),
            React.createElement("label", { className: signup_module_scss_1["default"].label, htmlFor: "confirm-password" }, "\u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u0435 \u043F\u0430\u0440\u043E\u043B\u044C*"),
            React.createElement("input", { className: signup_module_scss_1["default"].input, value: valueConfirmPass, onChange: handleChangeConfirmPass, "aria-invalid": valueConfirmPassError ? 'true' : undefined, type: "password", id: "confirm-password", name: "confirm-password", placeholder: "****" }),
            touched && valueConfirmPassError && (React.createElement("div", { style: { color: 'red', fontSize: '10px' } }, valueConfirmPassError)),
            React.createElement("button", { className: signup_module_scss_1["default"].buttonForm, type: "submit" }, "\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u044C\u0441\u044F"))));
}
exports.SignUp = SignUp;

//# sourceMappingURL=SignUp.js.map
