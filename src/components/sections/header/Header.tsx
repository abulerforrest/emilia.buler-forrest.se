"use client";
/**
 * Header
 */

import Menu from "@/components/partials/Menu/Menu";

export default function Header() {
  return (
    <header
      className={`z-50 fixed w-full flex transition-all duration-500 backdrop-blur-md bg-white/30 bg-opacity-40`}
    >
      <Menu />
    </header>
  );
}
