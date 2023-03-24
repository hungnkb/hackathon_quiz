import jwt from 'jsonwebtoken';

class token {
    getIdUser = (req, res) => {
        try {
            let token = req.signedCookies.authorization.split(" ")[1];
            let user = jwt.verify(token, process.env.JWT_SECRET);
            let id = user.sub;
            return id;
        } catch (error) {
            console.log(error);
        }
    };
}

export default new token();
