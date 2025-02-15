import { NextRequest, NextResponse } from "next/server";
import { adminData } from "@/data/admin";

export async function GET(req: NextRequest, context: { params: { id: string } }) {
  try {
    const { id } = context.params;
    
    if (!id) {
      return NextResponse.json({ error: "Missing admin ID" }, { status: 400 });
    }

    const admin = await adminData.findById(id);
    
    if (!admin) {
      return NextResponse.json({ error: "Admin not found" }, { status: 404 });
    }

    return NextResponse.json(admin, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }
}
