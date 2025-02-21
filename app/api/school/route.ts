import { NextRequest, NextResponse } from "next/server";
import { schoolData } from "@/data/school";

export async function GET() {
  try {
    const schools = await schoolData.findAll();
    return NextResponse.json(schools, { status: 200 });
  } catch (error: unknown) {
    return NextResponse.json({ error: error instanceof Error ? error.message : "Unknown error" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const school = await schoolData.create(body);
    return NextResponse.json(school, { status: 201 });
  } catch (error: unknown) {
    return NextResponse.json({ error: error instanceof Error ? error.message : "Unknown error" }, { status: 500 });
  }
}
