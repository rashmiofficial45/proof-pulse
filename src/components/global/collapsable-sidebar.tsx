"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"
import { BarChart2, Home, Menu, Users, X } from "lucide-react"

const navItems = [
  { name: "Home", href: "/", icon: Home },
  { name: "Dashboard", href: "/dashboard", icon: BarChart2 },
  { name: "Projects", href: "/projects", icon: Users },
]

export function CollapsibleSidebar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const SidebarContent = () => (
    <div className="flex flex-col h-full">
      <div className="flex items-center justify-between p-4 border-b">
        <Link className="flex items-center justify-center" href="/">
          <span className="font-bold text-lg">ProofTrack</span>
        </Link>
        <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} className="lg:hidden">
          <X className="h-6 w-6" />
        </Button>
      </div>
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className={cn(
                  "flex items-center p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700",
                  pathname === item.href && "bg-gray-100 dark:bg-gray-700"
                )}
                onClick={() => setIsOpen(false)}
              >
                <item.icon className="h-5 w-5 mr-2" />
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )

  return (
    <>
      {/* Sidebar for large screens */}
      <aside className="hidden lg:flex lg:flex-col lg:w-64 border-r bg-white dark:bg-gray-800">
        <SidebarContent />
      </aside>

      {/* Collapsible sidebar for small screens */}
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="lg:hidden fixed top-4 left-4 z-40">
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle sidebar</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="p-0 w-64">
          <SidebarContent />
        </SheetContent>
      </Sheet>
    </>
  )
}