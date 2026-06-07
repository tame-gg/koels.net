import { StaticHtmlPage } from '@/components/StaticHtmlPage';
import { indexDocument } from '@/content/static-pages/index';

export default function Page() {
  return <StaticHtmlPage document={indexDocument} />;
}
