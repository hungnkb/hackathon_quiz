import Category from '../../schemas/Category.js';
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

class CategoryApiController {
    create = async (req, res) => {
        let { name, question, idUser } = req.body;
        try {
            let newCategory = await prisma.category.create({
                data: {
                    name,
                    user_id: idUser,
                }
            });
            if (newCategory) {
                res.status(200).json({ message: 'Create category success' });
            } else {
                res.status(400).json({ message: 'Create category fail' });
            }
        } catch (error) {
            console.log('Error at Category.api.controller.js (create) ' + error);
        }
    }

    read = async (req, res) => {
        let category_id = req.params.category_id;
        let category = await prisma.category.findUnique({
            where: {
                id: category_id
            },
            include: {
                question: true,
            }
        })
        res.status(200).json({ message: 'Success', data: category })
    }

    readAll = async (req, res) => {
        try {
            let categories = await prisma.category.findMany({
                include: {
                    question: true,
                }
            });
            if (categories) {
                res.status(200).json({ message: 'oke', data: categories })
            } else {
                res.status(500).json({ message: 'something goes wrong' })
            }
        } catch (error) {
            console.log('error at category.api.controoler (readAll)')
        }
    }
}

export default new CategoryApiController();
