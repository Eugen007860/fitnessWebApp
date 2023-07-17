"use client";

import Link from "next/link";
import "./globals.css";
import { useEffect } from "react";

export default function RootLayout({ children }) {
  useEffect(() => {
    var links = document.querySelectorAll("a");
    console.log(links.length);
    links.forEach((item) => {
      item.addEventListener("click", (event) => {
        event.target.style.borderBottom = "solid";
        event.target.style.borderBottomColor = "rgba(242, 228, 37, 0.9)";
        document.querySelectorAll("a").forEach((item) => {
          if (item.name != event.target.name) item.style.borderBottom = "none";
        });
      });
    });
  }, []);

  return (
    <html lang="en">
      <body className="bg-[#003c46]">
        <nav >
          <ul className="flex bg-[#003c46] sticky text-white font-bold h-16 justify-start gap-10 items-center w-full">
            <li className="flex hover:bg-slate-600 p-2 rounded-md ml-2">
              <Link name="home" href="/">
                Home
              </Link>
            </li>
            <li className="flex hover:bg-slate-600 p-2 rounded-md">
              <Link name="ruine" href="/rutine">
                Rutinas
              </Link>
            </li>
            <li className="flex hover:bg-slate-600 p-2 rounded-md">
              <Link name="exercises" href="/exercises">
                Ejercicios
              </Link>
            </li>
            <li className="flex hover:bg-slate-600 p-2 rounded-md">
              <Link name="muscles" href="/muscles">
                Musculos
              </Link>
            </li>
          </ul>
        </nav>
        {children}
      </body>
    </html>
  );
}
