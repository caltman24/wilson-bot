"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const fetchRandomQuote = async () => {
    const res = (0, axios_1.default)({
        method: "get",
        url: "https://owen-wilson-wow-api.onrender.com/wows/random",
    });
    const { data } = await res;
    return data[0];
};
exports.default = fetchRandomQuote;
