import { StaticHtmlPage } from '@/components/StaticHtmlPage';
import { silkmcDocument } from '@/content/static-pages/silkmc';

export default function Page() {
  return <StaticHtmlPage document={silkmcDocument} />;
}
