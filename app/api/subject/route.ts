import { NextRequest, NextResponse } from "next/server";
import { subjectData } from "@/data/subject";

export async function GET() {
  try {
    const subjects = await subjectData.findAll();
    return NextResponse.json(subjects, { status: 200 });
  } catch (error: unknown) {
    return NextResponse.json({ error: error instanceof Error ? error.message : "Unknown error" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const subject = await subjectData.create(body);
    return NextResponse.json(subject, { status: 201 });
  } catch (error: unknown) {
    return NextResponse.json({ error: error instanceof Error ? error.message : "Unknown error" }, { status: 500 });
  }
}
