import { StaticHtmlPage } from '@/components/StaticHtmlPage';
import { connerDocument } from '@/content/static-pages/conner';

export default function Page() {
  return <StaticHtmlPage document={connerDocument} />;
}
