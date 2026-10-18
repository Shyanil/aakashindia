import type { Metadata } from "next";
import { ArchiveShell, archiveMetadata } from "../../archive";
import { extraPages, pageNumber } from "../../paging";

// /portfolio/page/2/
export function generateStaticParams() {
  return extraPages().map((page) => ({ page }));
}

export async function generateMetadata(props: PageProps<"/portfolio/page/[page]">): Promise<Metadata> {
  return archiveMetadata(undefined, Number((await props.params).page));
}

export default async function PortfolioPaged(props: PageProps<"/portfolio/page/[page]">) {
  const page = await pageNumber(props.params);
  return <ArchiveShell searchParams={props.searchParams} page={page} />;
}
