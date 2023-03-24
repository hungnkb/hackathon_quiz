import bcrypt from 'bcrypt';
import User from '../../schemas/User.js';
import jwt from 'jsonwebtoken';
import qs from 'qs';
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

class authApiController {
    register = async (req, res) => {
        try {
            let { username, password } = req.body;
            let user = await prisma.user.findUnique({
                where: {
                    username: username,
                }
            });
            if (user) {
                return res.status(400).json({ message: 'User already exists' });
            }
            let salt = bcrypt.genSaltSync(10);
            password = bcrypt.hashSync(password, salt);
            let newUser = await prisma.user.create({
                data: {
                    username: req.body.username,
                    password,
                }
            })
            if (newUser) {
                res.status(200).json({
                    message: 'User created successfully'
                });
            } else {
                res.status(400).json({
                    message: 'User created fail'
                });
            }

        } catch (error) {
            console.log('Error at auth.api.controller.js (register): ' + error);
        }
    };

    login = async (req, res) => {
        try {
            let { username, password } = req.body;
            let user = await prisma.user.findUnique({ where: { username } });
            if (user) {
                bcrypt.compare(password, user.password, (err, result) => {
                    if (result) {
                        console.log(user);;
                        let token = jwt.sign({
                            iss: "Quizz",
                            sub: user.id,
                            iat: new Date().getTime(),
                        },
                            process.env.USER_CODE_SECRET,
                            { expiresIn: 604800000 },
                        );
                        res.cookie('authorization', 'Bearer ' + token, { signed: true });
                        res.status(200).json({ message: 'Login success', user, token });
                    } else {
                        res.status(401).json({ message: 'Wrong password, please try again' });
                    }
                })
            } else {
                res.status(404).json({ message: 'User does not exist, please try again' });
            }
        } catch (error) {
            console.log('Error at auth.api.controller.js (login): ' + error);
        }
    };

    // logout = async (req, res) => {
    //     let cookieObj = qs.parse(req.headers.cookie);
    //     let name = Object.keys(cookieObj)[0];
    //     res.clearCookie(name).status(200).json({ message: 'Logout success' });
    // };

    getUser = async (req, res) => {
        try {
            let token = req.body.token;
            if (token) {
                jwt.verify(token, process.env.USER_CODE_SECRET, async (err, decoded) => {
                    if (err) {
                        console.log(err);
                    } else {
                        let userData = decoded.sub;
                        console.log(userData);
                        let user = await prisma.user.findUnique({where: {id: userData}});
                        res.status(200).json(user)
                    }
                })
                // let user = await prisma.user.findUnique(req.body.token)
             
            } else {
                res.status(400).json({ message: 'Invalid token' })
            }

        } catch (error) {
            console.log(error);
        }

    }
}

export default new authApiController();
