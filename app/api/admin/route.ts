import { NextRequest, NextResponse } from "next/server";
import { adminData } from "@/data/admin";


export async function GET() {
  try {
    const admins = await adminData.findAll();
    return NextResponse.json(admins, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }
}


export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const newAdmin = await adminData.create(body);
    return NextResponse.json(newAdmin, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }
}

