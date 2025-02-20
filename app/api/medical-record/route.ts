import { NextRequest, NextResponse } from "next/server";
import { medicalRecordData } from "@/data/medical-record";

export async function GET() {
  try {
    const records = await medicalRecordData.findAll();
    return NextResponse.json(records, { status: 200 });
  } catch (error: unknown) {
    return NextResponse.json({ error: error instanceof Error ? error.message : "Unknown error" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const record = await medicalRecordData.create(body);
    return NextResponse.json(record, { status: 201 });
  } catch (error: unknown) {
    return NextResponse.json({ error: error instanceof Error ? error.message : "Unknown error" }, { status: 500 });
  }
}
