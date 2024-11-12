import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

// Menangani pencarian berdasarkan query string "keyword"
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === "GET") {
    const { keyword } = req.query; // Mendapatkan parameter keyword dari URL query

    if (!keyword) {
      return res.status(400).json({ message: "Keyword is required" });
    }

    try {
      // Mengirimkan request ke backend dengan query keyword
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_URL_BACKEND}/usermenus/search?keyword=${keyword}`,
        {
          headers: {
            Authorization: `Bearer ${req.cookies.token}`, // Mendapatkan token dari cookies untuk autentikasi
            "Content-Type": "application/json",
          },
        },
      );

      // Mengirimkan response hasil dari API ke frontend
      res.status(200).json(response.data);
    } catch (error) {
      console.error("Error fetching menu data:", error);
      res.status(500).json({ message: "Failed to fetch menu data" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
