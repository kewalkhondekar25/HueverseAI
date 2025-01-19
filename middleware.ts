import { useAuth } from "@clerk/nextjs";
import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const isPublicRoute = createRouteMatcher([
  "/",
  "/login",
  "/signup",
  "/otp",
  "/api/webhook/register"
]);

export default clerkMiddleware(async (auth, req) => {

  const { userId }: any = await auth();
  
  const currentUrl = new URL(req.url);
  const isAccessingDashboard = currentUrl.pathname === "/dashboard";

  if(userId && isPublicRoute(req) && !isAccessingDashboard){
    return NextResponse.redirect(new URL("/dashboard", req.url));
  };

  if(!userId){
    if(!isPublicRoute(req)){
      return NextResponse.redirect(new URL("/login", req.url));
    };
  };

  return NextResponse.next();

});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
}