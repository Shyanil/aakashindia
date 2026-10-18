import type { Metadata } from "next";
import { ArchiveShell, archiveMetadata } from "../../../archive";
import { extraPages, pageNumber } from "../../../paging";
import { STATUS_SLUGS } from "@/lib/portfolio";

// /portfolio/completed/page/2/
export function generateStaticParams() {
  return STATUS_SLUGS.flatMap((status) => extraPages(status).map((page) => ({ status, page })));
}

export async function generateMetadata(props: PageProps<"/portfolio/[status]/page/[page]">): Promise<Metadata> {
  const { status, page } = await props.params;
  return archiveMetadata(status, Number(page));
}

export default async function PortfolioStatusPaged(props: PageProps<"/portfolio/[status]/page/[page]">) {
  const [{ status }, page] = await Promise.all([props.params, pageNumber(props.params)]);
  return <ArchiveShell searchParams={props.searchParams} page={page} status={status} />;
}
