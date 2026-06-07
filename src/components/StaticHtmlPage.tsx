import Head from 'next/head';
import parse from 'html-react-parser';
import type { ReactNode } from 'react';

export interface StaticHtmlDocument {
  readonly head: string;
  readonly body: string;
}

interface StaticHtmlPageProps {
  readonly document: StaticHtmlDocument;
}

function splitHead(head: string) {
  let bodyPrefix = '';
  const safeHead = head
    .replace(/<link\b(?=[^>]*\brel=["']stylesheet["'])[^>]*>/gi, (match) => {
      bodyPrefix += match;
      return '';
    })
    .replace(/<script\b[\s\S]*?<\/script>/gi, (match) => {
      bodyPrefix += match;
      return '';
    });

  return { safeHead, bodyPrefix };
}

export function StaticHtmlPage({ document }: StaticHtmlPageProps) {
  const { safeHead, bodyPrefix } = splitHead(document.head);

  return (
    <>
      <Head>{parse(safeHead) as ReactNode}</Head>
      <div
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: bodyPrefix + document.body }}
      />
    </>
  );
}
