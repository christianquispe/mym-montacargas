"use client";

import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";
import type { NavItem } from "@/types";

interface NavbarProps {
  items: readonly NavItem[];
  orientation?: "horizontal" | "vertical";
  onNavigate?: () => void;
  className?: string;
}

export function Navbar({
  items,
  orientation = "horizontal",
  onNavigate,
  className,
}: NavbarProps) {
  const [activeHref, setActiveHref] = useState<string>(items[0]?.href ?? "");

  useEffect(() => {
    const sections = items
      .map((item) => document.getElementById(item.href.replace("#", "")))
      .filter((section): section is HTMLElement => section !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible) {
          setActiveHref(`#${visible.target.id}`);
        }
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: [0, 0.25, 0.5, 1] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [items]);

  return (
    <nav
      aria-label="Navegación principal"
      className={cn(
        orientation === "horizontal"
          ? "hidden items-center gap-1 lg:flex"
          : "flex flex-col gap-1",
        className,
      )}
    >
      {items.map((item) => {
        const isActive = activeHref === item.href;

        return (
          <a
            key={item.href}
            href={item.href}
            onClick={onNavigate}
            aria-current={isActive ? "page" : undefined}
            className={cn(
              "rounded-lg px-3.5 py-2 text-sm font-semibold transition-colors",
              orientation === "vertical" && "px-4 py-3 text-base",
              isActive
                ? "text-primary"
                : "text-muted-foreground hover:bg-muted hover:text-foreground",
            )}
          >
            {item.label}
          </a>
        );
      })}
    </nav>
  );
}
