// pages/api/menu/root.ts
import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === "GET") {
    try {
      const response = await axios.get(
        `${process.env.BASE_URL_BACKEND}/jenjang/kelompok`,
        {
          headers: {
            Authorization: `Bearer ${req.cookies.token}`,
            "Content-Type": "application/json",
          },
        },
      );
      res.status(200).json(response.data);
    } catch (error) {
      console.error("Error fetching menu data:", error);
      res.status(500).json({ message: "Failed to fetch menu data" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
