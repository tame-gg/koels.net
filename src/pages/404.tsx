import { StaticHtmlPage } from '@/components/StaticHtmlPage';
import { notFoundDocument } from '@/content/static-pages/404';

export default function NotFoundPage() {
  return <StaticHtmlPage document={notFoundDocument} />;
}
