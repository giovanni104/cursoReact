import { NextApiRequest, NextApiResponse } from "next";
import { propias, propias2 } from "../../../utils/data";
import { makeCookie } from "@/utils/cookieMaker";
import axios from "axios";
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method == "POST") {
    const resAxios = await axios.post(
      "http://192.168.10.226:8793/transfers/maketransfer",
      req.body
    );

    console.log(resAxios.data.responseBody);

    const message = resAxios.data.messageId;

    const messageCookie = makeCookie(message);

    res.setHeader("set-cookie", messageCookie);

    return res.status(200).json(resAxios.data);
  }

  return res.status(400).json({ error: "El metodo no existe" });
};

export default handler;
