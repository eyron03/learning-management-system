"use client"

import Link from "next/link"
import { Menu } from "lucide-react"
import type React from "react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 flex justify-center">
      <div className="container flex h-14 items-center">
        <div className="flex flex-1 items-center justify-start">
          <Link href="/" className="flex items-center space-x-2">
            <span className="h-6 w-6 rounded-full bg-primary" />
            <span className="font-bold">YourSystem</span>
          </Link>
        </div>
      
  <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
    <Link href="/">Home</Link>
    <Link href="/about">About</Link>
    <Link href="/contact">Contact</Link>
  </nav>

        <div className="flex flex-1 items-center justify-end">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="pr-0">
              <MobileLink href="/" className="flex items-center" onOpenChange={() => {}}>
                <span className="h-6 w-6 rounded-full bg-primary" />
                <span className="font-bold">YourSystem</span>
              </MobileLink>
              <div className="my-4 h-[calc(100vh-8rem)] pb-10 pl-6">
                <div className="flex flex-col space-y-3">
                  <MobileLink href="/" onOpenChange={() => {}}>
                    Home
                  </MobileLink>
                  <MobileLink href="/about" onOpenChange={() => {}}>
                    About
                  </MobileLink>
                  <MobileLink href="/contact" onOpenChange={() => {}}>
                    Contact
                  </MobileLink>
                </div>
              </div>
            </SheetContent>
          </Sheet>
          <nav className="flex items-center space-x-2">
            <Button variant="ghost" asChild className="hidden md:inline-flex">
              <Link href="/signin">Sign In</Link>
            </Button>
            <Button asChild className="hidden md:inline-flex">
              <Link href="/signup">Sign Up</Link>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  )
}asasa

interface MobileLinkProps extends React.ComponentPropsWithoutRef<"a"> {
  onOpenChange?: (open: boolean) => void
  children: React.ReactNode
  href: string
}

function MobileLink({ href, onOpenChange, className, children, ...props }: MobileLinkProps) {
  return (
    <Link
      href={href}
      onClick={() => {
        onOpenChange?.(false)
      }}
      className={className}
      {...props}
    >
      {children}
    </Link>
  )
}
