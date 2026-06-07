import { StaticHtmlPage } from '@/components/StaticHtmlPage';
import { globeDocument } from '@/content/static-pages/globe';

export default function Page() {
  return <StaticHtmlPage document={globeDocument} />;
}
