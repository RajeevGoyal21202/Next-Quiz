import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const userToken = request.cookies.get('accessToken')?.value;
  console.log("ssssssssssssss",userToken)
  console.log("urllllllllllll",request.url)
  console.log('nextUrl', request.nextUrl)
  const { pathname } = request.nextUrl;

  if(!userToken && pathname !== '/login') {  
     return NextResponse.redirect(new URL('/login',request.url))
  }
else if(userToken && pathname === "/login"){
    return NextResponse.redirect(new URL('/addExam',request.url))
 }
}
export const config = {
     matcher: ['/login','/addExam',"/addQuestion"],
  }   