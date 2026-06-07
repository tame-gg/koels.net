import { StaticHtmlPage } from '@/components/StaticHtmlPage';
import { linksDocument } from '@/content/static-pages/links';

export default function Page() {
  return <StaticHtmlPage document={linksDocument} />;
}
