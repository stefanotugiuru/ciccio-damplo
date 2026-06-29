"use client";

import { ReactNode } from "react";
import { Link } from "@/i18n/navigation";

export default function Card({
  children,
  href,
  className = "",
}: {
  children: ReactNode;
  href?: string;
  className?: string;
}) {
  const shell = `group block rounded-bezel border border-white/10 bg-white/5 p-1.5 transition-colors duration-500 hover:border-gold/40 ${className}`;
  const core = (
    <div className="rounded-[calc(2rem-0.375rem)] bg-black/40 p-6 shadow-[inset_0_1px_1px_rgba(255,255,255,0.08)] backdrop-blur-xl">
      {children}
    </div>
  );

  if (href) {
    return (
      <Link href={href} className={shell}>
        {core}
      </Link>
    );
  }

  return <div className={shell}>{core}</div>;
}
