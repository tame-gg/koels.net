import { StaticHtmlPage } from '@/components/StaticHtmlPage';
import { statusDocument } from '@/content/static-pages/status';

export default function Page() {
  return <StaticHtmlPage document={statusDocument} />;
}
