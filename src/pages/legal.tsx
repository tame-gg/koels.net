import { StaticHtmlPage } from '@/components/StaticHtmlPage';
import { legalDocument } from '@/content/static-pages/legal';

export default function Page() {
  return <StaticHtmlPage document={legalDocument} />;
}
