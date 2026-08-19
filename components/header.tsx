import Link from "next/link";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { LucideMenu } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between border-b bg-background px-4 py-2 shadow-sm">
      <div className="flex items-center gap-4">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="lg:hidden">
              <LucideMenu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-64">
            <nav className="flex flex-col gap-4 p-4">
              <Link href="/" className="text-lg font-semibold">Home</Link>
              <Link href="/lessons" className="text-lg font-semibold">Lessons</Link>
              <Link href="/products" className="text-lg font-semibold">Products</Link>
              <Link href="/about" className="text-lg font-semibold">About</Link>
              <Link href="/blog" className="text-lg font-semibold">Blog</Link>
            </nav>
          </SheetContent>
        </Sheet>
        <Link href="/" className="text-xl font-bold tracking-tight lg:text-2xl">
          TradieDocs
        </Link>
      </div>
      <nav className="hidden items-center gap-4 lg:flex">
        <Link href="/lessons" className="text-sm font-medium hover:text-primary">Lessons</Link>
        <Link href="/products" className="text-sm font-medium hover:text-primary">Products</Link>
        <Link href="/about" className="text-sm font-medium hover:text-primary">About</Link>
        <Link href="/blog" className="text-sm font-medium hover:text-primary">Blog</Link>
      </nav>
      <div className="flex items-center gap-2">
        <Button asChild variant="ghost" size="sm">
          <Link href="/sign-in">Sign In</Link>
        </Button>
        <Button asChild size="sm">
          <Link href="/sign-up">Sign Up</Link>
        </Button>
      </div>
    </header>
  );
}
