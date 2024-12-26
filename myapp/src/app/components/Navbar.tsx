"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "../utils/cn";
import Link from "next/link";

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <Link href={"/"}>
          {" "}
          <MenuItem
            setActive={setActive}
            active={active}
            item="Home"
          ></MenuItem>
        </Link>
        <Link href={"/Projects"}>
          <MenuItem setActive={setActive} active={active} item="Projects">
            <div className="text-sm flex flex-col space-y-4">
              <HoveredLink href="/courses">Project 1</HoveredLink>
              <HoveredLink href="/courses">Project 2</HoveredLink>
              <HoveredLink href="/courses">Project 3</HoveredLink>
              
            </div>
          </MenuItem>
        </Link>
        <Link href={"/Contact"}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Contact Me"
          ></MenuItem>
        </Link>
      </Menu>
    </div>
  );
}

export default Navbar;
