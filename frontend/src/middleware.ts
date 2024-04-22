import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const userToken = request.cookies.get('accessToken')?.value;
  console.log("ssssssssssssss",userToken)
  console.log("urllllllllllll",request.url)

  if(!userToken) {  
     return NextResponse.redirect(new URL('/login',request.url))
  }
else if(userToken && request.url === "http://localhost:3000/login"){
    return NextResponse.redirect("http://localhost:3000/addExam")
 }
 

}
export const config = {
     matcher: ['/addExam',"/addQuestion"],
  }   