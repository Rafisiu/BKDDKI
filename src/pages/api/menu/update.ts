import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
    const { id } = req.query;

    if (req.method === "PATCH") {
        try {
        if (!id) {
            return res.status(400).json({ message: "ID is required" });
        }

        // Mengambil data dari body request
        const updatedData = req.body;

        // Melakukan permintaan ke backend dengan method PATCH
        const response = await axios.patch(
            `${process.env.NEXT_PUBLIC_BASE_URL_BACKEND}/menus/update/${id}`,
            updatedData,
            {
            headers: {
                Authorization: `Bearer ${req.cookies.token}`,
                "Content-Type": "application/json",
            },
            },
        );

        res.status(200).json(response.data);
        } catch (error: any) {
        if (error.response) {
            const errorMessage =
            error.response.data?.message || "Error updating menu data.";
            res.status(500).json({ message: errorMessage });
        } else {
            res.status(500).json({ message: "Failed to update menu data." });
        }
        }
    } else {
        res.status(405).json({ message: "Method not allowed" });
    }
}
