import CryptoJS from 'crypto-js';
import jwt from 'jsonwebtoken';
import { Auth } from '../models/auth.model';
import { Response, Request } from 'express'

const secret = process.env.SECRET_KEY;

export const Signup = async (req: Request, res: Response) => {
    const User = await new Auth({
        fullName: req.body.fullName,
        email: req.body.email,
        password: CryptoJS.AES.encrypt(req.body.password, secret as string).toString(),
    });
    try {
        const user = await User.save();
        return res.status(201).json(user);
    } catch (err) {
        return res.status(500).json(err);
    }
}

export const Login = async (req: Request, res: Response) => {
    const user:any = await Auth.findOne({ email: req.body.email });
    try {
        if (!user) {
            return res.status(401).json({
                success: false,
                message: "Passwords do not match",
                errors: {},
              });
        } else {
            console.log(user);
            const bytes = await CryptoJS.AES.decrypt(user.password, process.env.SECRET_KEY as string);
            const realPassword = await bytes.toString(CryptoJS.enc.Utf8);

            if (realPassword !== req.body.password) {
                return res.status(401).json({
                    success: false,
                    message: "Passwords do not match",
                    errors: {},
                  });
            }
            const token = await jwt.sign({
                id: user._id, email: user.email
            },
                process.env.SECRET_KEY as string, { expiresIn: "7d" }
            );
            const { password, ...info } = user._doc;
            return res.status(200).json({ ...info , token});
        }
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Internal Server Error",
            errors: {err},
          })
    }
}