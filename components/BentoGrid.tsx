import { ReactNode } from "react";

export default function BentoGrid({ children }: { children: ReactNode[] }) {
  return (
    <div className="grid grid-cols-1 gap-6 px-6 py-12 md:grid-cols-3">
      {children.map((child, index) => (
        <div key={index} className={index === 0 ? "md:col-span-2 md:row-span-2" : ""}>
          {child}
        </div>
      ))}
    </div>
  );
}
