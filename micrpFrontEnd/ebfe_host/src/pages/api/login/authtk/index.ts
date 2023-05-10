import { NextApiRequest, NextApiResponse } from "next";

type Data = { message: string } | { authtk: boolean }

export default function handlerRequest(req: NextApiRequest, res: NextApiResponse<Data>) {

    switch (req.method) {
        case 'POST':
            return getValidationTK(req, res);
        default:
            return res.status(400).json({
                message: 'Bad request'
            })
    }
}

const getValidationTK = (req: NextApiRequest, res: NextApiResponse<Data>) => {


    setTimeout(() => {
        const tkStatus = { authtk: true };
        return res.status(200).json(tkStatus);
    }, 500)
    // return res.status(200).json(userStatus);

}