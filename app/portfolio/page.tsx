import type { Metadata } from "next";
import { ArchiveShell, archiveMetadata } from "./archive";

// /portfolio/ — every project. Status views live at /portfolio/<status>/ (see [status]/).
export const metadata: Metadata = archiveMetadata(undefined, 1);

export default function PortfolioPage(props: PageProps<"/portfolio">) {
  return <ArchiveShell searchParams={props.searchParams} page={1} />;
}
