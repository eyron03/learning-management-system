import { NextRequest, NextResponse } from "next/server";
import { guardianData } from "@/data/guardian";

export async function GET() {
  try {
    const guardians = await guardianData.findAll();
    return NextResponse.json(guardians, { status: 200 });
  } catch (error: unknown) {
    return NextResponse.json({ error: error instanceof Error ? error.message : "Unknown error" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const guardian = await guardianData.create(body);
    return NextResponse.json(guardian, { status: 201 });
  } catch (error: unknown) {
    return NextResponse.json({ error: error instanceof Error ? error.message : "Unknown error" }, { status: 500 });
  }
}
