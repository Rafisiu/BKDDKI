import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse,
) {
    if (req.method === "POST") {
        try {
            const response = await axios.post(
                `${process.env.NEXT_PUBLIC_BASE_URL_BACKEND}/usermenus/assign`,
                req.body,
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
                    error.response.data?.message || "An error occurred during creation.";
                res.status(500).json({ message: errorMessage });
            } else {
                res
                    .status(500)
                    .json({ message: "An error occurred. Please try again later." });
            }
        }
    } else {
        res.status(405).json({ message: "Method not allowed" });
    }
}
