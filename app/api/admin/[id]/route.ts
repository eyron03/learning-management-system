import { NextRequest, NextResponse } from "next/server";
import { adminData } from "@/data/admin";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const id = params.id;

    if (!id) {
      return NextResponse.json({ error: "Admin ID is required" }, { status: 400 });
    }

    const admin = await adminData.findById(id);
    if (!admin) {
      return NextResponse.json({ error: "Admin not found" }, { status: 404 });
    }

    return NextResponse.json(admin, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: `Error fetching admin: ${(error as Error).message}` }, { status: 500 });
  }
}

export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const id = params.id;

    if (!id) {
      return NextResponse.json({ error: "Admin ID is required" }, { status: 400 });
    }

    const body = await req.json();
    const updatedAdmin = await adminData.update(id, body);
    return NextResponse.json(updatedAdmin, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: `Error updating admin: ${(error as Error).message}` }, { status: 500 });
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const id = params.id;

    if (!id) {
      return NextResponse.json({ error: "Admin ID is required" }, { status: 400 });
    }

    await adminData.delete(id);
    return NextResponse.json({ message: "Admin deleted successfully" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: `Error deleting admin: ${(error as Error).message}` }, { status: 500 });
  }
}
