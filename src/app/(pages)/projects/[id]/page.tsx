"use client"
import { useEffect, useState } from "react"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { Separator } from "@radix-ui/react-separator"
async function getProject(id: string) {
  // Simulated API call to fetch project details
  const projects = [
    { id: "1", name: "My Blog", url: "https://myblog.com", activeVisitors: 5 },
    { id: "2", name: "E-commerce Site", url: "https://myshop.com", activeVisitors: 12 },
  ]
  return projects.find((p) => p.id === id) || null
}

export default function ProjectPage({ params }: { params: { id: string } }) {
  const [project, setProject] = useState<{ id: string, name: string, url: string, activeVisitors: number } | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchProject() {
      const data = await getProject(params.id)
      if (!data) {
        notFound()
        return
      }
      setProject(data)
      setLoading(false)
    }

    fetchProject()
  }, [params.id])

  if (loading) {
    return <div>Loading...</div>
  }

  if (!project) {
    return null // If notFound is triggered, it should not render further
  }

  const pixelCode = `<script>
  (function(p,r,o,o,f){
    p.ProofTrack=p.ProofTrack||function(){(p.ProofTrack.q=p.ProofTrack.q||[]).push(arguments)};
    var s=r.createElement('script');s.type='text/javascript';s.async=true;
    s.src='https://prooftrack.com/pixel.js';var x=r.getElementsByTagName('script')[0];
    x.parentNode.insertBefore(s,x);
  })(window,document,'ProofTrack','${project.id}');
</script>`

  return (
    <div className="flex flex-col min-h-screen">
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
        <div className=""></div>
      </header>
      <main className="flex-1 py-6 px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl font-bold mb-6">{project.name}</h1>
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Project Details</CardTitle>
              <CardDescription>{project.url}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">{project.activeVisitors}</p>
              <p className="text-sm text-gray-500">Active Visitors</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Integration Code</CardTitle>
              <CardDescription>Copy and paste this code into your website &lt;head&gt; tag.</CardDescription>
            </CardHeader>
            <CardContent>
              <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
                <code>{pixelCode}</code>
              </pre>
              <Button
                onClick={() => navigator.clipboard.writeText(pixelCode)}
                className="mt-4"
                >
                Copy to Clipboard
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
                </div>
  )
}
