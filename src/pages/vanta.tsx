import { StaticHtmlPage } from '@/components/StaticHtmlPage';
import { vantaDocument } from '@/content/static-pages/vanta';

export default function Page() {
  return <StaticHtmlPage document={vantaDocument} />;
}
