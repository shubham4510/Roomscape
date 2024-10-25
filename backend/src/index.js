var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import express from 'express';
import cors from 'cors';
import 'dotenv/config';
const app = express();
const PORT = process.env.PORT || 4000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.get("/api/test", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.json({
        message: "hello from express endpoint!"
    });
}));
// Error Handling Middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Something went wrong!' });
});
app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
});
