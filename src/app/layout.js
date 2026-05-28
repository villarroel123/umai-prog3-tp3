import { Unbounded, Lexend, Rubik } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";

const unbounded = Unbounded({
  variable: "--font-unbounded",
  subsets: ["latin"],
});

const lexend = Lexend({
  variable: "--font-lexend",
  subsets: ["latin"],
});

const rubik= Rubik({
  variable:"--font-rubik",
  subsets: ["latin"],
})

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased">
        <head>
        {/* Link de FontAwesome*/}
        <link 
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" 
          integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" 
          crossOrigin="anonymous" 
          referrerPolicy="no-referrer" 
        />
      </head>
      <body className={`${unbounded.variable} ${lexend.variable} ${rubik.variable} min-h-full flex flex-col`}>
        <NavBar/>
        {children}
      </body>
    </html>
  );
}
