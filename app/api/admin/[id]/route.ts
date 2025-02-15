import { NextRequest, NextResponse } from "next/server";
import { adminData } from "@/data/admin";

export async function GET(req: NextRequest, context: { params: { id: string } }) {
  try {
    const admin = await adminData.findById(context.params.id);
    if (!admin) {
      return NextResponse.json({ error: "Admin not found" }, { status: 404 });
    }

    return NextResponse.json(admin, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }
}

export async function PUT(req: NextRequest, context: { params: { id: string } }) {
  try {
    const body = await req.json();
    const admin = await adminData.findById(context.params.id);
    if (!admin) {
      return NextResponse.json({ error: "Admin not found" }, { status: 404 });
    }

    const updatedAdmin = await adminData.update(context.params.id, body);
    return NextResponse.json(updatedAdmin, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest, context: { params: { id: string } }) {
  try {
    const admin = await adminData.findById(context.params.id);
    if (!admin) {
      return NextResponse.json({ error: "Admin not found" }, { status: 404 });
    }

    await adminData.delete(context.params.id);
    return NextResponse.json({ message: "Admin deleted successfully" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }
}
