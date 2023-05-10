import { NextApiRequest, NextApiResponse } from "next";
import { TypeAccounts } from './../../../../components/login/SelAccountForm';

type Data = { message: string } | TypeAccounts

export default function handlerRequest(req: NextApiRequest, res: NextApiResponse<Data>) {

    switch (req.method) {
        case 'GET':
            return getAccounts(req, res);
        default:
            return res.status(400).json({
                message: 'Bad request'
            })
    }
}

const getAccounts = (req: NextApiRequest, res: NextApiResponse<Data>) => {

    const accountssimulated = {
        personas: [
            {
                id: 1,
                name: 'Graciela Carolina David',
                numberaccount: '12345678'
            },
        ],
        empresas: [
            {
                id: 1,
                name: 'Heladerías Marvin se brinda C.A.',
                numberaccount: 'J405123092'
            },
            {
                id: 2,
                name: 'Cervecería Polar C.A.',
                numberaccount: 'J000033971'
            },
            {
                id: 3,
                name: 'Banco de Venezuela S.A.',
                numberaccount: 'G000044282'
            },
        ],
    }
    setTimeout(() => {

        return res.status(200).json(accountssimulated);
    }, 500)
    // return res.status(200).json(userStatus);

}