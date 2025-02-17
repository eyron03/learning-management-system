import { NextRequest, NextResponse } from "next/server";
import { adminData } from "@/data/admin";

// Asynchronous function to handle GET request
export async function GET(
  req: NextRequest,
  context: { params: { id: string } }
) {
  try {
    const params = await context.params;

    if (!params.id) {
      return NextResponse.json({ error: "Admin ID is required" }, { status: 400 });
    }

    const admin = await adminData.findById(params.id);
    if (!admin) {
      return NextResponse.json({ error: "Admin not found" }, { status: 404 });
    }

    return NextResponse.json(admin, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: `Error fetching admin: ${(error as Error).message}` }, { status: 500 });
  }
}

// Asynchronous function to handle PUT request
export async function PUT(
  req: NextRequest,
  context: { params: { id: string } }
) {
  try {
    const params = await context.params;

    if (!params.id) {
      return NextResponse.json({ error: "Admin ID is required" }, { status: 400 });
    }

    const body = await req.json();
    const updatedAdmin = await adminData.update(params.id, body);
    return NextResponse.json(updatedAdmin, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: `Error updating admin: ${(error as Error).message}` }, { status: 500 });
  }
}

// Asynchronous function to handle DELETE request
export async function DELETE(
  req: NextRequest,
  context: { params: { id: string } }
) {
  try {
    const params = await context.params;

    if (!params.id) {
      return NextResponse.json({ error: "Admin ID is required" }, { status: 400 });
    }

    await adminData.delete(params.id);
    return NextResponse.json({ message: "Admin deleted successfully" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: `Error deleting admin: ${(error as Error).message}` }, { status: 500 });
  }
}
