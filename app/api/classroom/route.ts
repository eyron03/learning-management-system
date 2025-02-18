import { NextRequest, NextResponse } from "next/server";
import { classroomData } from "@/data/classroom";

export async function GET() {
  try {
    const classrooms = await classroomData.findAll();
    return NextResponse.json(classrooms, { status: 200 });
  } catch (error: unknown) {
    return NextResponse.json({ error: error instanceof Error ? error.message : "Unknown error" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const classroom = await classroomData.create(body);
    return NextResponse.json(classroom, { status: 201 });
  } catch (error: unknown) {
    return NextResponse.json({ error: error instanceof Error ? error.message : "Unknown error" }, { status: 500 });
  }
}
//
