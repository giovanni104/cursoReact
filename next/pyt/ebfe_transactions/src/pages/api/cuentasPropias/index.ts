import { NextApiRequest, NextApiResponse } from "next";
import { propias, propias2 } from "../../../utils/data";

import { makeCookie } from "@/utils/cookieMaker";
import axios from "axios";
import { NextRequest } from "next/server";
const handler = async (req: NextRequest, res: NextApiResponse) => {
  let responseJson;
  let messageIdError;

  if (req.method == "POST") {
    const resp = req.cookies?.messageId;
    let dataTransaccion = req.body;

    const messageId = resp == undefined ? "default" : resp;
    dataTransaccion.messageId = messageId;

    const resAxios = await axios
      .post("http://192.168.10.226:8793/accounts/own", dataTransaccion, {
        timeout: 1000,
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
              responseDesc: "Error interno, intente de nuevo",
              responseBody: null,
            };
          }
        } else if (error.request) {
          // La petición fue hecha pero no se recibió respuesta
          // `error.request` es una instancia de XMLHttpRequest en el navegador y una instancia de
          // http.ClientRequest en node.js
          console.log("La petición fue hecha pero no se recibió respuesta");
          console.log(error.request);
          responseJson = {
            errorLvl: "ERROR",
            responseCode: "408",
            responseDesc: "Tiempo de espera en solicitud",
            responseBody: null,
          };
        } else {
          // Algo paso al preparar la petición que lanzo un Error
          console.log("Algo paso al preparar la petición que lanzo un Error");
          responseJson = {
            errorLvl: "ERROR",
            responseCode: "400",
            responseDesc: "Algo paso al preparar la petición",
            responseBody: null,
          };
        }
      });

    if (resAxios != undefined) {
      const message = resAxios.data.messageId;
      const messageCookie = makeCookie(message);
      res.setHeader("set-cookie", messageCookie);
      /* return res.status(200).json(propias2);*/
      return res.status(200).json(resAxios.data);
    } else {
      if (messageIdError != undefined) {
        const messageCookie = makeCookie(messageIdError);
        res.setHeader("set-cookie", messageCookie);
      }
      return res.status(responseJson.responseCode).json(responseJson);
    }
  }

  return res.status(400).json({
    errorLvl: "ERROR",
    responseCode: "400",
    responseDesc: "Algo paso al preparar la petición",
    responseBody: null,
  });
};

export default handler;
