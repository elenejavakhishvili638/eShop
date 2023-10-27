import { Router, Request, Response } from "express"
import { IUser, UserModel } from "../models/user"
import { UserErrors } from "../errors"
import bcrypt from "bcrypt";

const router = Router()

router.post("/register", async (req: Request, res: Response) => {
    const { username, password } = req.body
    try {
        const user = await UserModel.findOne({ username });
        if (user) {
            return res.status(400).json({ type: UserErrors.USERNAME_ALREADY_EXISTS })
        }

        const hashedPassword = await bcrypt.hash(password, 10)
        const newUser = new UserModel({ username, password: hashedPassword })

        await newUser.save()
        res.json({ message: "User registered succesfully" })
    } catch (error) {
        res.status(500).json({ type: error })
    }

})



export { router as userRouter }