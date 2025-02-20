import { NextRequest, NextResponse } from "next/server";
import { studentApplicationData } from "@/data/student-application";

export async function GET() {
  try {
    const applications = await studentApplicationData.findAll();
    return NextResponse.json(applications, { status: 200 });
  } catch (error: unknown) {
    return NextResponse.json({ error: error instanceof Error ? error.message : "Unknown error" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const application = await studentApplicationData.create(body);
    return NextResponse.json(application, { status: 201 });
  } catch (error: unknown) {
    return NextResponse.json({ error: error instanceof Error ? error.message : "Unknown error" }, { status: 500 });
  }
}
