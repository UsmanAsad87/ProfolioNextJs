// Required to allow dynamic rendering
export const dynamic = 'force-dynamic';

import { SitemapStream, streamToPromise } from 'sitemap';
import { Readable } from 'stream';
import { NextResponse } from 'next/server';

type Link = {
  url: string;
  changefreq: 'daily' | 'weekly' | 'monthly';
  priority: number;
  lastmod?: string;
};

export async function GET() {
  try {
    const hostname = 'https://usmanasad.vercel.app';

    const staticLinks: Link[] = [
      { url: '/projects/activtips', changefreq: 'monthly', priority: 0.7, lastmod: '2025-04-01' },
      { url: '/projects/nanoga', changefreq: 'monthly', priority: 0.7, lastmod: '2025-03-15' },
    ];

    const baseLinks: Link[] = [
      { url: '/', changefreq: 'daily', priority: 1.0 },
      { url: '/about', changefreq: 'weekly', priority: 0.8 },
      { url: '/projects', changefreq: 'weekly', priority: 0.8 },
    ];

    const links: Link[] = [...baseLinks, ...staticLinks];

    const formattedLinks = links.map((link) => ({
      url: link.url,
      changefreq: link.changefreq,
      priority: link.priority,
      ...(link.lastmod ? { lastmod: link.lastmod } : {}),
    }));

    const stream = new SitemapStream({ hostname });

    const xml = await streamToPromise(Readable.from(formattedLinks).pipe(stream)).then((data) =>
      data.toString()
    );

    return new NextResponse(xml, {
      status: 200,
      headers: {
        'Content-Type': 'application/xml',
        'Cache-Control': 'public, max-age=86400', // 1 day
      },
    });
  } catch (error) {
    console.error('❌ Error generating sitemap:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}