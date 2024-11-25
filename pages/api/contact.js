import { uuid } from "@sanity/uuid";
import axios from "axios";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, phone, createdAt, message } = req.body;
    try {
      const projectId = process.env.SANITY_PROJECT_ID || "ze2kt9tq";
      const dataset = process.env.SANITY_DATASET || "production";
      const apiVersion = process.env.SANITY_API_VERSION || "2024-08-14";
      const tokenWithWriteAccess = process.env.SANITY_AUTH_TOKEN || "";
      const createMutations = [
        {
          create: {
            _id: `contact-${uuid()}`,
            _type: "contact",
            name,
            email,
            phone,
            createdAt,
            message,
          },
        },
      ];
      await axios.post(
        `https://${projectId}.api.sanity.io/${apiVersion}/data/mutate/${dataset}`,
        {
          mutations: createMutations,
        },
        {
          headers: {
            "Content-type": "application/json",
            Authorization: `Bearer ${tokenWithWriteAccess}`,
          },
        }
      );
      res.status(200).json({ message: "Data sent to Sanity successfully" });
    } catch (error) {
      res.status(500).json({ message: "Failed to send data to Sanity" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
