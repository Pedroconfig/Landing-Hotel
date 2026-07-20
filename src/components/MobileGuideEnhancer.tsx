"use client";

import { useEffect } from "react";

export function MobileGuideEnhancer() {
  useEffect(() => {
    const mobileQuery = window.matchMedia("(max-width: 1023px)");

    function openGuide(id: string) {
      if (!mobileQuery.matches) return;

      const guides = Array.from(
        document.querySelectorAll<HTMLDetailsElement>("details[data-guide-id]"),
      );
      const selectedGuide = guides.find((guide) => guide.dataset.guideId === id);

      if (!selectedGuide) return;

      selectedGuide.open = true;
    }

    function getHashId(hash: string) {
      try {
        return decodeURIComponent(hash.replace(/^#/, ""));
      } catch {
        return hash.replace(/^#/, "");
      }
    }

    function handleClick(event: MouseEvent) {
      const link = (event.target as HTMLElement).closest<HTMLAnchorElement>(
        'a[href^="#"]',
      );
      if (!link) return;
      openGuide(getHashId(link.hash));
    }

    function handleHashChange() {
      openGuide(getHashId(window.location.hash));
    }

    document.addEventListener("click", handleClick);
    window.addEventListener("hashchange", handleHashChange);
    handleHashChange();

    return () => {
      document.removeEventListener("click", handleClick);
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return null;
}
