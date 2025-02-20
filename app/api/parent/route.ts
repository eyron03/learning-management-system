import { NextRequest, NextResponse } from "next/server";
import { parentData } from "@/data/parent";

export async function GET() {
  try {
    const parents = await parentData.findAll();
    return NextResponse.json(parents, { status: 200 });
  } catch (error: unknown) {
    return NextResponse.json({ error: error instanceof Error ? error.message : "Unknown error" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const parent = await parentData.create(body);
    return NextResponse.json(parent, { status: 201 });
  } catch (error: unknown) {
    return NextResponse.json({ error: error instanceof Error ? error.message : "Unknown error" }, { status: 500 });
  }
}
