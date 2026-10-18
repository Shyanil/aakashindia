"use client";

import { useRouter } from "next/navigation";
import { useId, useTransition } from "react";
import { Search } from "./icons";
import { archiveHref, FILTER_KEYS, filterOptions, type Filters } from "@/lib/portfolio";

/**
 * Archive filters. A plain GET form (works without JavaScript: proxy.ts turns ?status=… into the
 * clean /portfolio/<status>/ path), upgraded to navigate client-side on change or submit, dropping
 * "Any" values and always returning to page 1. The URL is the only state.
 */
export default function PortfolioFilters({ filters }: { filters: Filters }) {
  const router = useRouter();
  const [pending, startTransition] = useTransition();
  const uid = useId(); // unique even while Next keeps a previous archive page mounted (hidden)

  const apply = (form: HTMLFormElement) => {
    const data = new FormData(form);
    const next: Filters = {};
    for (const k of FILTER_KEYS) {
      const v = String(data.get(k) ?? "");
      if (v) next[k] = v;
    }
    startTransition(() => router.push(archiveHref(1, next), { scroll: false }));
  };

  return (
    <form
      className="pf-filters"
      action="/portfolio/"
      method="get"
      role="search"
      aria-label="Filter projects"
      aria-busy={pending}
      onSubmit={(e) => {
        e.preventDefault();
        apply(e.currentTarget);
      }}
      onChange={(e) => apply(e.currentTarget)}
    >
      {FILTER_KEYS.map((k) => (
        <div key={k} className="pf-field">
          <label className="search-label" htmlFor={`${uid}-${k}`}>
            {filterOptions[k].label}
          </label>
          <select id={`${uid}-${k}`} name={k} defaultValue={filters[k] ?? ""}>
            <option value="">Any</option>
            {filterOptions[k].options.map((o) => (
              <option key={o.slug} value={o.slug}>
                {o.label}
              </option>
            ))}
          </select>
        </div>
      ))}
      <button type="submit" className="btn btn-gold pf-submit">
        <Search /> Search
      </button>
    </form>
  );
}
