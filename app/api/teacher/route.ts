import { NextRequest, NextResponse } from "next/server";
import { teacherData } from "@/data/teacher";

export async function GET() {
  try {
    return NextResponse.json(await teacherData.findAll(), { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const newTeacher = await teacherData.create(body);
    return NextResponse.json(newTeacher, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }
}
