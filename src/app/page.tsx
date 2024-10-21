"use client";
import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart2, Globe, Menu, Users } from "lucide-react";
import HomeSidebar from "@/components/global/home-sidebar";

function FeaturesSection() {
  return (
    <section className="w-full py-12 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-6">Features</h2>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col items-center p-4 border rounded-lg shadow-lg bg-white dark:bg-gray-700">
            <Users className="h-10 w-10 mb-2" />
            <h3 className="text-xl font-semibold">
              Real-Time Visitor Tracking
            </h3>
            <p className="text-center text-gray-500 dark:text-gray-400">
              Monitor your visitors as they navigate your site in real time.
            </p>
          </div>
          <div className="flex flex-col items-center p-4 border rounded-lg shadow-lg bg-white dark:bg-gray-700">
            <BarChart2 className="h-10 w-10 mb-2" />
            <h3 className="text-xl font-semibold">Comprehensive Analytics</h3>
            <p className="text-center text-gray-500 dark:text-gray-400">
              Gain insights into visitor behavior and demographics.
            </p>
          </div>
          <div className="flex flex-col items-center p-4 border rounded-lg shadow-lg bg-white dark:bg-gray-700">
            <ArrowRight className="h-10 w-10 mb-2" />
            <h3 className="text-xl font-semibold">Easy Integration</h3>
            <p className="text-center text-gray-500 dark:text-gray-400">
              Simple setup with a small pixel code for instant results.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function PricingSection() {
  return (
    <section className="w-full py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-6">Pricing Plans</h2>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <div className="border rounded-lg shadow-lg bg-white dark:bg-gray-700">
            <div className="p-6 text-center">
              <h3 className="text-xl font-semibold">Basic Plan</h3>
              <p className="text-2xl font-bold">$10/month</p>
              <ul className="mt-4 text-gray-500 dark:text-gray-400">
                <li>Real-time tracking</li>
                <li>Basic analytics</li>
                <li>Email support</li>
              </ul>
              <Button asChild>
                <Link href="/signup">Choose Plan</Link>
              </Button>
            </div>
          </div>
          <div className="border rounded-lg shadow-lg bg-white dark:bg-gray-700">
            <div className="p-6 text-center">
              <h3 className="text-xl font-semibold">Pro Plan</h3>
              <p className="text-2xl font-bold">$25/month</p>
              <ul className="mt-4 text-gray-500 dark:text-gray-400">
                <li>All Basic features</li>
                <li>Advanced analytics</li>
                <li>Priority support</li>
              </ul>
              <Button asChild>
                <Link href="/signup">Choose Plan</Link>
              </Button>
            </div>
          </div>
          <div className="border rounded-lg shadow-lg bg-white dark:bg-gray-700">
            <div className="p-6 text-center">
              <h3 className="text-xl font-semibold">Enterprise Plan</h3>
              <p className="text-2xl font-bold">Contact Us</p>
              <ul className="mt-4 text-gray-500 dark:text-gray-400">
                <li>Custom solutions</li>
                <li>Dedicated support</li>
                <li>Integration assistance</li>
              </ul>
              <Button asChild>
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section className="w-full py-12 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-6">About Us</h2>
        <p className="text-lg text-gray-500 dark:text-gray-400 text-center max-w-3xl mx-auto">
          ProofTrack is dedicated to providing you with the best tools to
          understand your audience better. Our mission is to empower businesses
          with real-time insights to enhance user engagement and improve overall
          performance.
        </p>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  return (
    <section className="w-full py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-6">
          What Our Users Say
        </h2>
        <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <div className="border rounded-lg p-6 shadow-lg bg-white dark:bg-gray-700">
            <p className="italic">
              “ProofTrack has completely changed the way I see my website
              traffic. The insights are invaluable!”
            </p>
            <h4 className="mt-4 font-semibold">- Alex Johnson</h4>
          </div>
          <div className="border rounded-lg p-6 shadow-lg bg-white dark:bg-gray-700">
            <p className="italic">
              “I love how easy it is to integrate. The analytics dashboard is
              super user-friendly.”
            </p>
            <h4 className="mt-4 font-semibold">- Sarah Smith</h4>
          </div>
          <div className="border rounded-lg p-6 shadow-lg bg-white dark:bg-gray-700">
            <p className="italic">
              “The customer support is fantastic! They helped me set everything
              up in no time.”
            </p>
            <h4 className="mt-4 font-semibold">- Michael Lee</h4>
          </div>
        </div>
      </div>
    </section>
  );
}
export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-900">
      {/* Sidebar */}
      <HomeSidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="flex items-center justify-between px-4 lg:px-6 h-14 border-b bg-white dark:bg-gray-800">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setSidebarOpen(true)}
            className="sm:hidden"
          >
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle sidebar</span>
          </Button>
          <div className="hidden sm:block">
            <Link className="flex items-center" href="#">
              <Globe className="h-6 w-6 mr-2" />
              <span className="font-bold text-lg">ProofTrack</span>
            </Link>
          </div>
          <nav className="hidden sm:flex items-center space-x-4">
            <Link
              className="text-sm font-medium hover:underline underline-offset-4"
              href="#"
            >
              Features
            </Link>
            <Link
              className="text-sm font-medium hover:underline underline-offset-4"
              href="#"
            >
              Pricing
            </Link>
            <Link
              className="text-sm font-medium hover:underline underline-offset-4"
              href="#"
            >
              About
            </Link>
          </nav>
          <Button asChild>
            <Link href="/dashboard">Dashboard</Link>
          </Button>
        </header>

        <main className="flex-1 overflow-auto">
          <section className="w-full py-8 sm:py-12 md:py-20 lg:py-24 xl:py-32">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col items-center space-y-6 text-center">
                <div className="space-y-4">
                  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight leading-tight sm:leading-none">
                    Track Your Website Visitors in Real-Time
                  </h1>
                  <p className="mx-auto max-w-xl text-gray-600 sm:text-lg md:text-xl lg:text-2xl dark:text-gray-400">
                    ProofTrack helps you understand your audience better. Get
                    instant insights on who is visiting your website right now.
                  </p>
                </div>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button asChild>
                    <Link href="/dashboard">Get Started</Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="#">Learn More</Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>
          <FeaturesSection />

          {/* Pricing Section */}
          <PricingSection />

          {/* Testimonials Section */}
          <TestimonialsSection />

          {/* About Section */}
          <AboutSection />
        </main>

        <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
          <p className="text-xs text-gray-500 dark:text-gray-400">
            © 2024 ProofTrack. All rights reserved.
          </p>
          <nav className="sm:ml-auto flex gap-4 sm:gap-6">
            <Link
              className="text-xs hover:underline underline-offset-4"
              href="#"
            >
              Terms of Service
            </Link>
            <Link
              className="text-xs hover:underline underline-offset-4"
              href="#"
            >
              Privacy
            </Link>
          </nav>
        </footer>
      </div>
    </div>
  );
}
