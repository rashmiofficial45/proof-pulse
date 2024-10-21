import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CreateProjectDialog } from "./create-project-dialog"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
  SidebarTrigger,
} from "@/components/ui/sidebar"
async function getProjects() {
  // This would be replaced with an actual API call or database query
  return [
    { id: 1, name: "My Blog", url: "https://myblog.com", activeVisitors: 5 },
    { id: 2, name: "E-commerce Site", url: "https://myshop.com", activeVisitors: 12 },
  ]
}
export default async function DashboardPage() {
  const projects = await getProjects();

  return (
    <div className="sidebar-inset">
      <header className="flex h-16 items-center gap-2 px-4 justify-between">
        <div className="flex items-center">
        <SidebarTrigger className="-ml-1" />
        <Separator orientation="vertical" className="mr-2 h-4" />
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem className="hidden md:block">
              <BreadcrumbLink href="#">
                Building Your Application
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="hidden md:block" />
            <BreadcrumbItem>
              <BreadcrumbPage>Data Fetching</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        </div>
        <div className=""><CreateProjectDialog /></div>
      </header>
      <main className="px-4">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {projects.map((project) => (
          <Card key={project.id}>
            <CardHeader>
              <CardTitle>{project.name}</CardTitle>
              <CardDescription>{project.url}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">{project.activeVisitors}</p>
              <p className="text-sm text-gray-500">Active Visitors</p>
              <Button asChild className="mt-4 w-full">
                <Link href={`/projects/${project.id}`}>View Details</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
      </main>
        </div>
  );
}
