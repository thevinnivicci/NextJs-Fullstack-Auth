import { connect } from "@/dbConfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";

connect();

export default async function POST(request: NextRequest) {
  try {
    const response = NextResponse.json({ message: "Logout Successfully" });
    response.cookies.set("token", "", {
      httpOnly: true,
      expires: new Date(0),
    });
    return response;
  } catch (error: any) {
    return NextResponse.json({ error: error.messsage }, { status: 500 });
  }
}
