import { notFound, redirect } from "next/navigation";
import { archiveHref, isStatusSlug, pageCount } from "@/lib/portfolio";

/** Page numbers 2..n for a status (or the whole archive), for generateStaticParams. */
export const extraPages = (status?: string) => Array.from({ length: pageCount(status) - 1 }, (_, i) => String(i + 2));

/**
 * Validates a /page/<n>/ segment before anything streams, so bad URLs get a real 404 status:
 * page 1 redirects to the bare URL, pages past the end (unfiltered) and junk 404.
 */
export async function pageNumber(params: Promise<{ page: string; status?: string }>): Promise<number> {
  const { page, status } = await params;
  if (status !== undefined && !isStatusSlug(status)) notFound();
  if (!/^[1-9]\d*$/.test(page)) notFound();
  if (page === "1") redirect(archiveHref(1, { status }));
  const n = Number(page);
  if (n > pageCount(status)) notFound();
  return n;
}
