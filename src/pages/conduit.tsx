import { StaticHtmlPage } from '@/components/StaticHtmlPage';
import { conduitDocument } from '@/content/static-pages/conduit';

export default function Page() {
  return <StaticHtmlPage document={conduitDocument} />;
}
