import { NextApiRequest, NextApiResponse } from "next";
import { adminData } from "@/data/admin";

export async function GET(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { id } = req.query;

    if (!id || typeof id !== "string") {
      return res.status(400).json({ error: "Admin ID is required" });
    }

    const admin = await adminData.findById(id);
    if (!admin) {
      return res.status(404).json({ error: "Admin not found" });
    }

    return res.status(200).json(admin);
  } catch (error) {
    return res.status(500).json({ error: `Error fetching admin: ${(error as Error).message}` });
  }
}

export async function PUT(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { id } = req.query;

    if (!id || typeof id !== "string") {
      return res.status(400).json({ error: "Admin ID is required" });
    }

    const body = req.body;
    const updatedAdmin = await adminData.update(id, body);
    return res.status(200).json(updatedAdmin);
  } catch (error) {
    return res.status(500).json({ error: `Error updating admin: ${(error as Error).message}` });
  }
}

export async function DELETE(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { id } = req.query;

    if (!id || typeof id !== "string") {
      return res.status(400).json({ error: "Admin ID is required" });
    }

    await adminData.delete(id);
    return res.status(200).json({ message: "Admin deleted successfully" });
  } catch (error) {
    return res.status(500).json({ error: `Error deleting admin: ${(error as Error).message}` });
  }
}
