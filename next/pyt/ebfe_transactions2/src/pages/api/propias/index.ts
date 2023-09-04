import { NextApiRequest, NextApiResponse } from "next";

const propias = [
  { value: "0123***3245", label: "Gastos personales 0123***3245" },
  { value: "0123***4087", label: "Ahorros varios 0123***4087" },
  { value: "0123***3580", label: "Cuenta familiar 0123***3580" },
];

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method == "POST") {
    /* await fetch("http://localhost:3002/propias", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: req.body,
    });*/
    return res.status(201).json(propias);
  }

  if (req.method == "GET") {
    /* const response = await fetch("http://localhost:3002/propias", {
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();*/

    return res.status(201).json(propias);
  }

  return res.status(400).json({ error: "El metodo no existe" });
};

export default handler;
