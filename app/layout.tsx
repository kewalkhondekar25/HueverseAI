import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider, SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@/components/mode-toggle";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "HueverseAI ",
  description: "HueverseAI is your ultimate destination for transforming imagination into reality",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html suppressHydrationWarning={true} lang="en">
        <body suppressHydrationWarning={true} className={inter.variable}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange>
              <div className="fixed top-3 right-3 z-50">
                <ModeToggle/>
              </div>
              <main>{children}</main>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider >
  );
}
