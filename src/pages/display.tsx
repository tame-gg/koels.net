import { StaticHtmlPage } from '@/components/StaticHtmlPage';
import { displayDocument } from '@/content/static-pages/display';

export default function Page() {
  return <StaticHtmlPage document={displayDocument} />;
}
