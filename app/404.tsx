import Head from 'next/head';
import Link from 'next/link';

export default function NotFound() {
  return (
    <>
      <Head>
        <title>404 - Page Not Found</title>
        <meta name="description" content="The page you are looking for does not exist. Return to the homepage." />
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-6xl font-bold text-gray-800">404</h1>
        <p className="mt-4 text-xl text-gray-600">Page Not Found</p>
        <Link href="/">
          <a className="mt-6 px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700">Go Back Home</a>
        </Link>
      </div>
    </>
  );
}