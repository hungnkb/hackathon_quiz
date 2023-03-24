import Category from '../schemas/Category.js';
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()



class CategoryController {
    create = async (name, idUser) => {
        try {
            let newCategory = await prisma.category.create({
                data: {
                    name,
                    user_id: idUser,
                }
            });
            if (newCategory) {
                return newCategory;
            } else {
                console.log('Error at Category.controller.js (create)')
            }
        } catch (error) {
            console.log('Error at Category.controller.js (create) ' + error);
        }
    }
}

export default new CategoryController();
