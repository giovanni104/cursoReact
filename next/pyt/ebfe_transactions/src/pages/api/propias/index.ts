import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method == "POST") {
    await fetch("http://localhost:3002/propias", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: req.body,
    });
    return res.status(201).json({ response: "proceso exitoso" });
  }

  if (req.method == "GET") {
    const response = await fetch("http://localhost:3002/propias", {
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    return res.status(201).json(data);
  }

  return res.status(400).json({ error: "El metodo no existe" });
};

export default handler;
