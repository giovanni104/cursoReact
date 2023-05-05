import type { NextApiRequest, NextApiResponse } from 'next'
import { IItem } from '../../../interfaces/'

type Data = 
| { message: string }
| IItem[]

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {

    switch( req.method ) {
        case 'GET':
            console.log('llamado al servicio de menuItemlist')
            return getItemMenuList( req, res )

        default:
            return res.status(400).json({
                message: 'Bad request'
            })
    }
}

const getItemMenuList = async(req: NextApiRequest, res: NextApiResponse<Data>) => {
    
    //const { gender = 'all' } = req.query;
    
    const pages = ["Index", "TransferReact", "DemoApp2","Carts"];  
    const listItem: IItem[] = [
        {_id:"0", item:pages[0]},
        {_id:"1", item:pages[1]},
        {_id:"2", item:pages[2]},
        {_id:"3", item:pages[3]},
    ]

    console.log('getItemMenuList =>',listItem);

    return res.status(200).json( listItem );

}