import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArchiveShell, archiveMetadata } from "../archive";
import { isStatusSlug, STATUS_SLUGS } from "@/lib/portfolio";

// /portfolio/completed/, /portfolio/ongoing/, /portfolio/upcoming/ (anything else 404s below)

export function generateStaticParams() {
  return STATUS_SLUGS.map((status) => ({ status }));
}

export async function generateMetadata(props: PageProps<"/portfolio/[status]">): Promise<Metadata> {
  return archiveMetadata((await props.params).status, 1);
}

export default async function PortfolioStatus(props: PageProps<"/portfolio/[status]">) {
  const { status } = await props.params;
  if (!isStatusSlug(status)) notFound();
  return <ArchiveShell searchParams={props.searchParams} page={1} status={status} />;
}
