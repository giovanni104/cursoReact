import { NextApiRequest, NextApiResponse } from "next";
import { responseTransaccion } from "../../../utils/data";
import { makeCookie } from "@/utils/cookieMaker";
import axios from "axios";

import { getCookies, getCookie, setCookie, deleteCookie } from "cookies-next";
import { NextRequest } from "next/server";
const handler = async (req: NextRequest, res: NextApiResponse) => {
  let responseJson: any;
  let messageIdError: any;

  //const cookies = new Cookies(req, res);

  //const messageId = cookies.get("messageId");
  const messageId = getCookie("messageId", { req });

  console.log("prueba cookie" + JSON.stringify(req));

  if (req.method == "POST") {
    let dataTransaccion: any = req.body;
    dataTransaccion.messageId = messageId == undefined ? "default" : messageId;

    const resAxios = await axios
      .post(
        process.env.BACK_PUBLIC_API_URL + "transfers/maketransfer",
        dataTransaccion,
        {
          timeout: 6000,
        }
      )
      .then((response) => {
        // console.log(response);

        const message = response.data.messageId;
        const messageCookie = makeCookie(message);
        res.setHeader("set-cookie", messageCookie);
        return res.status(200).json(response.data);
      })

      .catch(function (error) {
        if (error.response) {
          // La respuesta fue hecha y el servidor respondió con un código de estado
          // que esta fuera del rango de 2xx
          console.log("que esta fuera del rango de 2xx");

          if (error.response.data.hasOwnProperty("errorLvl")) {
            messageIdError = error.response.data.messageId;

            responseJson = {
              errorLvl: error.response.data.errorLvl.toLowerCase(),
              responseCode: error.response.status,
              responseDesc: error.response.data.responseDesc,
              responseBody: null,
            };
          } else {
            responseJson = {
              errorLvl: "ERROR",
              responseCode: error.response.status,
              responseDesc: "Servicio no disponible, intenta luego",
              responseBody: null,
            };
          }
        } else if (error.request) {
          // La petición fue hecha pero no se recibió respuesta
          // `error.request` es una instancia de XMLHttpRequest en el navegador y una instancia de
          // http.ClientRequest en node.js
          console.log("La petición fue hecha pero no se recibió respuesta");
          //console.log(error.request);
          responseJson = {
            errorLvl: "ERROR",
            responseCode: "408",
            responseDesc: "Servicio no disponible, intenta luego",
            responseBody: null,
          };
        } else {
          // Algo paso al preparar la petición que lanzo un Error
          console.log("Algo paso al preparar la petición que lanzo un Error");
          responseJson = {
            errorLvl: "ERROR",
            responseCode: "400",
            responseDesc: "Error interno, intente de nuevo",
            responseBody: null,
          };
        }

        const messageCookie = makeCookie(messageIdError);
        res.setHeader("set-cookie", messageCookie);
        return res.status(responseJson.responseCode).json(responseJson);
      });
  } else {
    return res.status(400).json({ error: "El metodo no existe" });
  }
};

export default handler;