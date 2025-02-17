import { NextRequest, NextResponse } from "next/server";
import { createSubject, findAllSubjects } from "@/data/subject";


export async function GET() {
  try {
    const subjects = await findAllSubjects(); 
    return NextResponse.json(subjects, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }
}


export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, teacherId } = body;

    if (!name || !teacherId) {
      return NextResponse.json({ message: "Name and teacherId are required" }, { status: 400 });
    }

    const newSubject = await createSubject({
      name,
      teacherId,
    });

    return NextResponse.json(newSubject, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }
}
