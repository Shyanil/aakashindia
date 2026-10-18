"use client";

import Image from "next/image";
import { useState } from "react";
import { site } from "@/lib/content";
import { Search as SearchIcon } from "./icons";
import { listings, matchesQuery, searchFilters, type SearchKey, type SearchQuery } from "@/lib/rental-resale";

const keys = Object.keys(searchFilters) as SearchKey[];
const inr = new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 });

export default function PropertySearch() {
  const [query, setQuery] = useState<SearchQuery | null>(null);
  const results = query ? listings.filter((l) => matchesQuery(l, query)) : [];

  return (
    <>
      <form
        className="search-box"
        role="search"
        aria-label="Property search"
        onSubmit={(e) => {
          e.preventDefault();
          const data = new FormData(e.currentTarget);
          setQuery(Object.fromEntries(keys.map((k) => [k, String(data.get(k) ?? "")]).filter(([, v]) => v)));
        }}
      >
        {keys.map((k) => {
          const f = searchFilters[k];
          return (
            <div key={k} className="search-field">
              <label className="search-label" htmlFor={`search-${k}`}>
                {f.label}
              </label>
              <select id={`search-${k}`} name={k} defaultValue="">
                <option value="">Any</option>
                {f.options.map((o) => (
                  <option key={o.value} value={o.value}>
                    {o.label}
                  </option>
                ))}
              </select>
            </div>
          );
        })}
        <button type="submit" className="btn btn-gold search-submit">
          <SearchIcon /> Search
        </button>
      </form>

      <div className="search-results" role="status" aria-live="polite">
        {query &&
          (results.length ? (
            <>
              <p className="search-count">
                {results.length} {results.length === 1 ? "property" : "properties"} found
              </p>
              <ul className="listing-grid">
                {results.map((l) => (
                  <li key={l.title} className="listing-card">
                    {l.image && <Image {...l.image} alt={l.image.alt} sizes="(max-width: 767px) 100vw, 360px" />}
                    <h3>{l.href ? <a href={l.href}>{l.title}</a> : l.title}</h3>
                    <p>
                      {l.saleType} · {l.type} · {l.location}
                      {l.city !== l.location ? `, ${l.city}` : ""}
                    </p>
                    <p className="listing-price">
                      {inr.format(l.price)}
                      {l.saleType === "Rental" ? " / month" : ""}
                    </p>
                  </li>
                ))}
              </ul>
            </>
          ) : (
            <div className="search-empty">
              <p>
                <strong>{listings.length ? "No properties match these filters." : "No rental or resale properties are listed online right now."}</strong>
              </p>
              <p>
                {listings.length ? "Try widening your search, or tell" : "Tell"} us what you’re looking for with the{" "}
                <a href="#inquiry">inquiry form</a> below, or call{" "}
                <a href={site.phoneHref}>{site.phone}</a>.
              </p>
            </div>
          ))}
      </div>
    </>
  );
}
