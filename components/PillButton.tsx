"use client";

import { ReactNode } from "react";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { Link } from "@/i18n/navigation";

export default function PillButton({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <Link
      href={href}
      className="group inline-flex items-center gap-3 rounded-full bg-gold/10 px-6 py-3 text-sm text-cream transition-transform duration-300 active:scale-[0.98]"
    >
      <span>{children}</span>
      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-px">
        <ArrowUpRight size={16} weight="thin" />
      </span>
    </Link>
  );
}
