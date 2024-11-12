import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === "POST") {
    try {
      const { username, password } = req.body;

      const response = await axios.post(
        `${process.env.BASE_URL_BACKEND}/auth/signin`,
        { username, password },
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
      );

      // Send the user data back to the client
      res.status(200).json(response.data);
    } catch (error: any) {
      // Check if the error has a response object (i.e., it comes from the API)
      if (error.response) {
        // Extract the error message from the API response
        const errorMessage =
          error.response.data?.message || "An error occurred during login.";
        res.status(500).json({ message: errorMessage });
      } else {
        // If no response object, it's a network error or other issue
        res
          .status(500)
          .json({ message: "An error occurred. Please try again later." });
      }
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
