import Head from 'next/head';
import Hero from '../components/Hero';
import Header from '../components/Header';

export default function Home() {
  return (
    <div className="mx-auto container m-0 p-4 flex flex-col items-center h-screen lg:flex-row-reverse lg:justify-evenly">
      <Head>
        <title>Envited</title>
        <meta name="description" content="Envited to Landing Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Hero />
    </div>
  );
}
