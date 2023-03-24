import { PrismaClient } from '@prisma/client'
import token from '../../controllers/auth.controller'
const prisma = new PrismaClient()

class ScoreApiController {
    create = (req, res) => {
        let idUser = token.getIdUser;
        let score = req.body.score;

        let newScore = prisma.score.create({
            data: {
                
            }
        })
    }
}
