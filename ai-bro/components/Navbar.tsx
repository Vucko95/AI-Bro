"use clinet";
import { Menu } from "lucide-react";
import Link from "next/link";
import { ModeToggle } from "@/components/mode-toggle"
import { Button } from "./ui/button";
export const Navbar = () => {
    return (
        <div className="fixed w-full  z-50 flex justify-between items-center bg-secondary py-2 px-4 border-b-2">
            <Link href="/">
            <h1 className=" hidden md:block text-2xl ">AI BRO</h1>
            </Link>
            <div className="flex items-center">
                <Menu className="block md:hidden" />
            </div>
            <ModeToggle/>
        </div>
    )
}