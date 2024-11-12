import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === "DELETE") {
    try {
      // Mengambil 'id' dari query string
      const { id } = req.query;

      if (!id) {
        return res.status(400).json({ message: "ID is required" });
      }

      // Melakukan permintaan delete ke backend
      const response = await axios.delete(
        `${process.env.NEXT_PUBLIC_BASE_URL_BACKEND}/menus/delete/${id}`,
        {
          headers: {
            Authorization: `Bearer ${req.cookies.token}`,
            "Content-Type": "application/json",
          },
        },
      );
      res.status(200).json(response.data);
    } catch (error) {
      console.error("Error deleting menu data:", error);
      res.status(500).json({ message: "Failed to delete menu data" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
