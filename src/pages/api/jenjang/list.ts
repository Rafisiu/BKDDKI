// pages/api/menu/list.ts
import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === "GET") {
    try {
      // Dapatkan `parent_id` dari query
      const { parent } = req.query;

      // Tentukan endpoint berdasarkan ada tidaknya `parent_id`
      const endpoint = parent
        ? `${process.env.BASE_URL_BACKEND}/jenjang/find/${parent}`
        : `${process.env.BASE_URL_BACKEND}/jenjang/find`;

      // Lakukan permintaan ke endpoint yang sesuai
      const response = await axios.get(endpoint, {
        headers: {
          Authorization: `Bearer ${req.cookies.token}`,
          "Content-Type": "application/json",
        },
      });

      // Kirimkan data dari respons API ke client
      res.status(200).json(response.data);
    } catch (error) {
      console.error("Error fetching menu data:", error);
      res.status(500).json({ message: "Failed to fetch menu data" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
