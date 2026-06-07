import { StaticHtmlPage } from '@/components/StaticHtmlPage';
import { calculatorDocument } from '@/content/static-pages/calculator';

export default function Page() {
  return <StaticHtmlPage document={calculatorDocument} />;
}
