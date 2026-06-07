import { StaticHtmlPage } from '@/components/StaticHtmlPage';
import { radarDocument } from '@/content/static-pages/radar';

export default function Page() {
  return <StaticHtmlPage document={radarDocument} />;
}
