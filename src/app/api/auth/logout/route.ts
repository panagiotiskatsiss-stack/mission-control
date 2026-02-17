import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const response = NextResponse.json(
    { success: true },
    { status: 200 }
  );

  response.cookies.set('mission-control-auth', '', {
    httpOnly: true,
    expires: new Date(0),
    path: '/',
  });

  return response;
}
