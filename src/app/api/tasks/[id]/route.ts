import { NextResponse } from "next/server";
import { main } from "../route";
import  prisma  from '@/lib/prisma';

//this function component is to explictly retrieve post from the db
export const GET = async (req: Request, res: NextResponse) => {
  try {
    const id = req.url.split("")[1];
    await main();
    const task = await prisma.tasks.findFirst({ where: { id } });
    if (!task)
      return NextResponse.json({ message: "Not Found" }, { status: 404 });
      return NextResponse.json({ message: "Success", task }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  } 
  finally {
    await prisma.$disconnect();
  }
};

export const PUT = async (req: Request, res: NextResponse) => {
  try {
    const id = req.url.split("")[1];
    const { title, description, deadline , status } = await req.json();
    await main();
    const task = await prisma.tasks.update({
      data: { title, description , deadline , status},
      where: { id },
    });
    return NextResponse.json({ message: "Success", task }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
};

export const DELETE = async (req: Request, res: NextResponse) => {
  try {
    const id = req.url.split("")[1];
    await main();
    const task = await prisma.tasks.delete({ where: { id } });
    return NextResponse.json({ message: "Success", task }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
};