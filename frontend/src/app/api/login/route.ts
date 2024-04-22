import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST(req: NextRequest) {
    try {
        const data = await req.json();
        console.log(data.data)
        const response = await fetch("http://localhost:8080/users/login", {
            method: "POST",
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(data.data)
        })
      
        const res = await response.json();
        console.log("acess tokennnnnn",res)
        cookies().set("accessToken", res.token, {
            httpOnly: true,
            maxAge: 24 * 60 * 60,
            sameSite: "strict"
          });
        console.log('res: ', res);
        // console.log('res: ', res);
        return Response.json(res, {
            status: response.status,
        });
    }
    catch (e) {
        console.log('e: ', e);
        return NextResponse.json(e, { status: 400 })
    }
}
