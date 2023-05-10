import { NextApiRequest, NextApiResponse } from "next";

type Data = { message: string } | { authcredentials: boolean }

export default function handlerRequest(req: NextApiRequest, res: NextApiResponse<Data>) {

    switch (req.method) {
        case 'POST':
            return getValidationUser(req, res);
        default:
            return res.status(400).json({
                message: 'Bad request'
            })
    }
}

const getValidationUser = (req: NextApiRequest, res: NextApiResponse<Data>) => {


    setTimeout(() => {
        const userStatus = { authcredentials: true };
        return res.status(200).json(userStatus);
    }, 500)
    // return res.status(200).json(userStatus);

}