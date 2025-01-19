import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
  return NextResponse.json({
    message: "Health Check Passed"
  }, { status: 200});
};