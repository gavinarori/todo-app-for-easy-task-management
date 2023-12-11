import  prisma  from '@/lib/prisma';
import { NextResponse } from "next/server";

//this function component is to the db
export async function main() {
  try {
    await prisma.$connect();
  } catch (err) {
    return Error("Database Connection failed");
  }
}

//this function component is to read tasks from the db
export const GET = async (req: Request, res: NextResponse) => {
  try {
    await main();
    const tasks = await prisma.post.findMany();
    return NextResponse.json({ message: "Success", tasks }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
};

//this function component is to write the tasks to the db
export const POST = async (req: Request, res: NextResponse) => {
  try {
    const { title, description,deadline,status } = await req.json();
    await main();
    const post = await prisma.post.create({ data: { description, title ,deadline , status } });
    return NextResponse.json({ message: "Success", post }, { status: 201 });
  } catch (err) {
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
};