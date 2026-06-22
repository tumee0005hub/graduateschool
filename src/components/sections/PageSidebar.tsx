"use client";

import { useEffect, useState, useCallback } from "react";
import { cn } from "@/lib/utils";

interface Section {
  id: string;
  label: string;
  disabled?: boolean;
}

interface PageSidebarProps {
  sections: Section[];
  onThisPageLabel: string;
}

export default function PageSidebar({
  sections,
  onThisPageLabel,
}: PageSidebarProps) {
  // Start from the first section so server and client render identically;
  // the URL hash is applied after mount to avoid a hydration mismatch.
  const [activeSection, setActiveSection] = useState(sections[0]?.id || "");

  useEffect(() => {
    // Apply the URL hash (active state + scroll) once mounted on the client.
    // Deferred so it doesn't run synchronously in the effect body.
    if (window.location.hash) {
      const hash = window.location.hash.slice(1);
      if (sections.some((s) => s.id === hash)) {
        const el = document.getElementById(hash);
        setTimeout(() => {
          setActiveSection(hash);
          el?.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -70% 0px" },
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sections]);

  const scrollToSection = useCallback((id: string, isFirst: boolean) => {
    if (isFirst) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
    setActiveSection(id);
    window.history.replaceState(null, "", `#${id}`);
  }, []);

  return (
    <aside className="hidden lg:block">
      <div className="sticky top-24">
        <p className="text-sm font-semibold text-foreground mb-4">
          {onThisPageLabel}
        </p>
        <nav className="space-y-1">
          {sections.map(({ id, label, disabled }, index) => (
            <button
              key={id}
              onClick={() => !disabled && scrollToSection(id, index === 0)}
              disabled={disabled}
              className={cn(
                "block w-full text-left px-3 py-2 text-sm rounded-lg transition-colors",
                disabled
                  ? "text-foreground/25 cursor-not-allowed"
                  : activeSection === id
                    ? "bg-primary/10 text-primary font-medium cursor-pointer"
                    : "text-foreground/60 hover:text-primary/80 hover:bg-primary/10 cursor-pointer",
              )}
            >
              {label}
            </button>
          ))}
        </nav>
      </div>
    </aside>
  );
}
