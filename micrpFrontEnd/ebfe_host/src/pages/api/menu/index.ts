import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import { IMenuResponse } from "../../../interfaces/IMenu";
const menuApi = axios.create({
  baseURL: "http://172.41.0.31:30095/",
});
type Data = { message: string } | IMenuResponse[]
export default function handlerRequest(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  switch (req.method) {
    case "GET":
      return getValidationUser(req, res);
    default:
      return res.status(400);
  }
}

const getValidationUser = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
    console.log('hola mundo');
    
  const { data } = await menuApi.get<IMenuResponse[]>("menu");
// const data: IMenuResponse[]= []
  return res.status(200).json(data);
};
