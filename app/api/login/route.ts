import { connectToDatabase } from "@/helpers/server-helpers";
import prisma from "@/prisma";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
  try {
    const { username, password } = await req.json();
    if (!username || !password)
      return NextResponse.json({ message: "Invalid data" }, { status: 422 });

    await connectToDatabase();

    const user = await prisma.user.create({
      data: { 
        username,
        password 
      },
    });

    return NextResponse.json({ user }, { status: 201 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
};