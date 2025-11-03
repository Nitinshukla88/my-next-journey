// All the backend code related with user will be written here.
// For example: user registration, login, profile management, etc.
// Since Next.js is an opinionated framework, this is a generally enforced opinion by Next.js to keep the code organized and maintainable.

import { NextRequest, NextResponse } from "next/server";
// After migrating the database to Prisma, we can use Prisma client to interact with the database.
// import { PrismaClient } from "@prisma/client";
// const prisma = new PrismaClient();

export async function POST(req: NextRequest){ // for headers and parameters we can use Request object as function parameter.
    // This method can be of any type like GET, POST, DELETE, PUT, PATCH etc. For that we'll replace above GET with POST, DELETE, PUT, PATCH etc.

    // make the database call and check if user is present and if yes then log the user and send the message.

    // For headers - const headers  req.headers.get("authorization");
    const headers = req.headers.get("authorization");
    // For query parameters - const name = req.nextUrl.searchParams.get("name");
    const name = req.nextUrl.searchParams.get("name");
    console.log("Headers :", headers);
    console.log("Query Params :", name);
    const body = await req.json();
    // await prisma.user.create({
    //     data : {
    //         username : body.email,
    //         password : "hashed_password" // In real application, password should be hashed before storing in database.
    //     }
    // });
    console.log(body);
    return NextResponse.json({
        message : "you are logged in"
    })
}

// The above route is same written below in express.

// app.get('/api/user', (req, res) => {
//     res.json({
//         email : "nitin@gmail.com",
//         username : "Nitin"
// })