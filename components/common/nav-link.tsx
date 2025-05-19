"use client";
import { cn } from "@/utils/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export default function NavLink({ href, children, className }: NavLinkProps) {
  const pathname = usePathname();
  const isActive =
    pathname === href || (href !== "/" && pathname.startsWith(href));

  return (
    <Link
      href={href}
      className={cn(
        "trasition-colors text-xl font-semibold text-gray-600 duration-200 hover:text-blue-500",
        isActive ? "text-blue-500" : "text-gray-700",
        className,
      )}
    >
      {children}
    </Link>
  );
}
