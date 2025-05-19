'use client'
import {
  Sidebar,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

import Image from "next/image";
import logo from "@/public/logo.png";

import { Calendar, Home, Inbox, Search, Settings } from "lucide-react"
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { SignUpButton } from "@clerk/nextjs";

const items = [
  {
    title: "Home",
    url: "/",
    icon: Home,
  },
  {
    title: "Discover",
    url: "/discover",
    icon: Inbox,
  },
  {
    title: "Library",
    url: "/library",
    icon: Calendar,
  },
  {
    title: "Sign In",
    url: "#",
    icon: Search,
  }
]

export function AppSidebar() {
  const path =usePathname();
  
  return (
      <Sidebar>
      <SidebarHeader className='bg-accent flex items-center justify-center p-4'>
       <Image src={logo} alt="Perpex AI logo" width={120} height={90}/>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className='font-bold text-base py-4'>Menu</SidebarGroupLabel>
          <SidebarGroupContent >
            <SidebarMenu >
              {items.map((item) => (
                <SidebarMenuItem key={item.title} className={`py-1 hover:font-medium ${path === item.url ? "font-bold" : ""}`}>
                  <SidebarMenuButton asChild >
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
            <SignUpButton mode="modal">
             <Button className='mt-8'> Sign Up</Button>
            </SignUpButton>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
 