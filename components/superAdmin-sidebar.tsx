import { LayoutDashboard, UserCog, Users, GraduationCap, BookOpen, School } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

const items = [
  {
    title: "Dashboard",
    url: "/super-admin/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Admin",
    url: "/super-admin/admin",
    icon: UserCog,
  },
  {
    title: "Teachers",
    url: "/super-admin/teachers",
    icon: Users,
  },
  {
    title: "Students",
    url: "/super-admin/students",
    icon: GraduationCap,
  },
  {
    title: "Subjects",
    url: "/super-admin/subjects",
    icon: BookOpen,
  },
  {
    title: "Classroom",
    url: "/super-admin/classroom",
    icon: School,
  },
]

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>School Name</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}

