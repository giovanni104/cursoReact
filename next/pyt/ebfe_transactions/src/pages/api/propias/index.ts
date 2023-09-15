import { NextApiRequest, NextApiResponse } from "next";
import { propias, propias2 } from "../../../utils/data";
import { makeCookie } from "@/utils/cookieMaker";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method == "POST") {
    /* await fetch("http://localhost:3002/propias", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: req.body,
    });*/
    return res.status(201).json(propias2.responseBody);
  }

  if (req.method == "GET") {
    /* const response = await fetch("http://localhost:3002/propias", {
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();*/

    const message = "respuesta.data.messageID";

    const messageCookie = makeCookie(message);

    res.setHeader("set-cookie", messageCookie);

    return res.status(201).json(propias2.responseBody);
  }

  return res.status(400).json({ error: "El metodo no existe" });
};

export default handler;
