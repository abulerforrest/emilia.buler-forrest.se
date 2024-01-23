"use client";
import { portfolioStore } from "@/store/store";
/**
 * Header
 */

import Logo from "@/components/partials/Logo";
import Menu from "@/components/partials/Menu/Menu";
import useOutsideClick from "@/hooks/useClickOutside";
import { useCloseMenuOnEsc } from "@/hooks/useCloseMenuOnEsc";
import useScrollPosition from "@/hooks/useScrollPostion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CgClose } from "react-icons/cg";
import { RxHamburgerMenu } from "react-icons/rx";
import { useStore } from "zustand";

export default function Header() {
  return (
    <header
      className={`fixed w-full flex transition-all duration-500 backdrop-blur-md bg-white/30 bg-opacity-40`}
    >
      <Menu />
    </header>
  );
}
