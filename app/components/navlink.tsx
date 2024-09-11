"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface Link {
  name: string;
  href: string;
}

interface NavLinkProps {
  links: Link[];
}

export default function NavLink({ links }: NavLinkProps) {
  const pathname = usePathname();

  return (
    <nav className="flex items-center mt-2 mb-4">
      {links.map((link, index) => {
        return (
          <Link
            key={link.name}
            href={link.href}
            className={`flex grow items-center justify-center gap-2 ${
              index === 0 ? "rounded-l" : "rounded-r"
            } bg-[#F4F4F5] p-1 text-sm text-[#71717A] font-medium md:flex-none md:justify-start md:p-2 md:px-3}`}
          >
            <p
              className={`p-1 rounded-md cursor-pointer ${
                pathname === link.href
                  ? "bg-white text-black w-full text-center shadow-sm"
                  : ""
              }
          `}
            >
              {link.name}
            </p>
          </Link>
        );
      })}
    </nav>
  );
}
