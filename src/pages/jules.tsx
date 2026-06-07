import { StaticHtmlPage } from '@/components/StaticHtmlPage';
import { julesDocument } from '@/content/static-pages/jules';

export default function Page() {
  return <StaticHtmlPage document={julesDocument} />;
}
