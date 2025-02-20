import { NextRequest, NextResponse } from "next/server";
import { admissionData } from "@/data/admission";

export async function GET() {
  try {
    const admissions = await admissionData.findAll();
    return NextResponse.json(admissions, { status: 200 });
  } catch (error: unknown) {
    return NextResponse.json({ error: error instanceof Error ? error.message : "Unknown error" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const admission = await admissionData.create(body);
    return NextResponse.json(admission, { status: 201 });
  } catch (error: unknown) {
    return NextResponse.json({ error: error instanceof Error ? error.message : "Unknown error" }, { status: 500 });
  }
}
