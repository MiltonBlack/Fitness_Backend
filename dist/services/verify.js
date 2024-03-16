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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verify = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
function verify(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const authHeader = yield req.headers['authorization'];
        if (authHeader) {
            const token = authHeader.split(" ")[1];
            jsonwebtoken_1.default.verify(token, process.env.SECRET_KEY, (err, user) => {
                if (err)
                    return res.status(403).json("Token cannot be verified!!!");
                next();
            });
        }
        else {
            return res.status(401).json("You are not Authenticated");
        }
    });
}
exports.verify = verify;
