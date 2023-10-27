import dotenv from "dotenv";

dotenv.config();
export const PORT = 3001;
export const mongoDBURL = `mongodb+srv://javakhishvilielene3:${process.env.MONGO_DB_PASSWORD}@eshop.lfstvtw.mongodb.net/eShop`;
