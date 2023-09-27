import { NextApiRequest, NextApiResponse } from "next";
import { propias, propias2 } from "../../../utils/data";

import { makeCookie } from "@/utils/cookieMaker";
import axios from "axios";
import { NextRequest } from "next/server";
const handler = async (req: NextRequest, res: NextApiResponse) => {
  if (req.method == "POST") {
    const resp = req.cookies?.messageId;
    let dataTransaccion = req.body;

    const messageId = resp == undefined ? "prueba" : resp;
    dataTransaccion.messageId = messageId;

    /*const resAxios = await axios.post(
      "http://192.168.10.226:8793/transfers/ownaccounts",
      dataTransaccion
    );

    const message = resAxios.data.messageId;*/

    const message = propias2.messageId;
    const messageCookie = makeCookie(message);
    res.setHeader("set-cookie", messageCookie);
    return res.status(200).json(propias2);
    //return res.status(200).json(resAxios.data);
  }

  return res.status(400).json({ error: "El metodo no existe" });
};

export default handler;
