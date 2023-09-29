import { NextApiRequest, NextApiResponse } from "next";
import { propias, propias2 } from "../../../utils/data";

import { makeCookie } from "@/utils/cookieMaker";
import axios from "axios";
import { NextRequest } from "next/server";
const handler = async (req: NextRequest, res: NextApiResponse) => {
  if (req.method == "POST") {
    const resp = req.cookies?.messageId;
    let dataTransaccion = req.body;

    const messageId = resp == undefined ? "default" : resp;
    dataTransaccion.messageId = messageId;

    const resAxios = await axios
      .post(
        "http://192.168.10.226:8793/transfers/ownaccounts",
        dataTransaccion,
        { timeout: 1000 }
      )
      .catch(function (error) {
        if (error.response) {
          // La respuesta fue hecha y el servidor respondió con un código de estado
          // que esta fuera del rango de 2xx
          console.log("que esta fuera del rango de 2xx");
          console.log(error.response.data);
          console.log(error.response.data.hasOwnProperty("errorLvl"));

          /*{
    "errorLvl": "ERROR",
    "messageId": "US55dHV0c3RLRU5JLmNqYWEuUlBSU1BZUlggUVdRV1BZLlRWOGlmUDVSUzBjV1ZUMThRZVRt",
    "responseCode": "E2F2302",
    "responseDesc": "Account authorization not found",
    "responseBody": null
}

{
    "timestamp": "2023-09-28T22:32:17.175+00:00",
    "status": 401,
    "error": "Unauthorized",
    "message": "Invalid Access",
    "path": "/transfers/ownaccounts"
}

 

*/

          return res
            .status(error.response.data.status)
            .json(error.response.data);
        } else if (error.request) {
          // La petición fue hecha pero no se recibió respuesta
          // `error.request` es una instancia de XMLHttpRequest en el navegador y una instancia de
          // http.ClientRequest en node.js
          console.log("La petición fue hecha pero no se recibió respuesta");
          console.log(error.request);
          return res.status(408).json({
            errorLvl: "ERROR",
            responseCode: "E2F2302",
            responseDesc: "Tiempo de espera en solicitud",
            responseBody: null,
          });
        } else {
          // Algo paso al preparar la petición que lanzo un Error
          console.log("Algo paso al preparar la petición que lanzo un Error");
          console.log("Error", error);
          return res.status(400).json({
            errorLvl: "ERROR",
            responseCode: "E2F2302",
            responseDesc: "Algo paso al preparar la petición",
            responseBody: null,
          });
        }
        console.log(error.config);
        res.status(400).json({ error: "El metodo no existe" });
      });

    const message = resAxios.data.messageId;

    // const message = propias2.messageId;
    const messageCookie = makeCookie(message);
    res.setHeader("set-cookie", messageCookie);
    /* return res.status(200).json(propias2);*/
    return res.status(200).json(resAxios.data);
  }

  return res.status(400).json({ error: "El metodo no existe" });
};

export default handler;
