import { NextRequest, NextResponse } from "next/server";
import { teacherData } from "@/data/teacher";

export async function GET(req: NextRequest, context: { params: { id: string } }) {
  try {
    const teacher = await teacherData.findById(context.params.id);
    if (!teacher) {
      return NextResponse.json({ error: "Teacher not found" }, { status: 404 });
    }

    return NextResponse.json(teacher, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }
}

export async function PUT(req: NextRequest, context: { params: { id: string } }) {
  try {
    const body = await req.json();
    const updatedTeacher = await teacherData.update(context.params.id, body);
    return NextResponse.json(updatedTeacher, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest, context: { params: { id: string } }) {
  try {
    await teacherData.delete(context.params.id);
    return NextResponse.json({ message: "Teacher deleted successfully" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }
}
