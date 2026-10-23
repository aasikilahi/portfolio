import { HomePage } from "@/components/home-page";
import { resumePdfHref } from "@/lib/resume-file";

export default function Page() {
  return <HomePage pdfHref={resumePdfHref()} />;
}
