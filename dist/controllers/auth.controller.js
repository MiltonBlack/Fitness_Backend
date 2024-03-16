"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Login = exports.Signup = void 0;
const crypto_js_1 = __importDefault(require("crypto-js"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const auth_model_1 = require("../models/auth.model");
const secret = process.env.SECRET_KEY;
const Signup = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const User = yield new auth_model_1.Auth({
        fullName: req.body.fullName,
        email: req.body.email,
        password: crypto_js_1.default.AES.encrypt(req.body.password, secret).toString(),
    });
    try {
        const user = yield User.save();
        return res.status(201).json(user);
    }
    catch (err) {
        return res.status(500).json(err);
    }
});
exports.Signup = Signup;
const Login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield auth_model_1.Auth.findOne({ email: req.body.email });
    try {
        if (!user) {
            return res.status(401).json({
                success: false,
                message: "Passwords do not match",
                errors: {},
            });
        }
        else {
            console.log(user);
            const bytes = yield crypto_js_1.default.AES.decrypt(user.password, process.env.SECRET_KEY);
            const realPassword = yield bytes.toString(crypto_js_1.default.enc.Utf8);
            if (realPassword !== req.body.password) {
                return res.status(401).json({
                    success: false,
                    message: "Passwords do not match",
                    errors: {},
                });
            }
            const token = yield jsonwebtoken_1.default.sign({
                id: user._id, email: user.email
            }, process.env.SECRET_KEY, { expiresIn: "7d" });
            const _a = user._doc, { password } = _a, info = __rest(_a, ["password"]);
            return res.status(200).json(Object.assign(Object.assign({}, info), { token }));
        }
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: "Internal Server Error",
            errors: { err },
        });
    }
});
exports.Login = Login;
