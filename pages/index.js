import Head from 'next/head';

export default function Home() {
  return (
    <div className="mx-auto container m-0 p-0">
      <Head>
        <title>Envited</title>
        <meta name="description" content="Envited to Landing Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="text-center text-2xl font-semibold">
        Envited Landing Page
      </h1>
    </div>
  );
}
