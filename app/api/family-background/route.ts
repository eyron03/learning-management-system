import { NextRequest, NextResponse } from "next/server";
import { familyBackgroundData } from "@/data/family-background";


export async function GET() {
  try {
    const families = await familyBackgroundData.findAll();
    return NextResponse.json(families, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }
}


export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const newFamily = await familyBackgroundData.create(body);
    return NextResponse.json(newFamily, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }//
}

