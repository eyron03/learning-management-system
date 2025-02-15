import { NextRequest, NextResponse } from "next/server";
import { studentData } from "@/data/student";

export async function GET() {
  try {
    const students = await studentData.findAll();
    return NextResponse.json(students, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const newStudent = await studentData.create(body);
    return NextResponse.json(newStudent, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }
}
