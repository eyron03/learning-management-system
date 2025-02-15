import { NextRequest, NextResponse } from "next/server";
import { studentData } from "@/data/student";

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const student = await studentData.findById(params.id);
    if (!student) {
      return NextResponse.json({ error: "Student not found" }, { status: 404 });
    }
    return NextResponse.json(student, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }
}

export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const body = await req.json();
    const student = await studentData.update(params.id, body);
    return NextResponse.json(student, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const student = await studentData.findById(params.id);
    if (!student) {
      return NextResponse.json({ error: "Student not found" }, { status: 404 });
    }

    await studentData.delete(params.id);
    return NextResponse.json({ message: "Student deleted successfully" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }
}
