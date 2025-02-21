import { NextRequest, NextResponse } from "next/server";
import { homeAddressData } from "@/data/home-address";


export async function GET() {
  try {
    const homeAddress = await homeAddressData.findAll();
    return NextResponse.json(homeAddress, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }
}


export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const newhomeAddress = await homeAddressData.create(body);
    return NextResponse.json(newhomeAddress, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }
}

