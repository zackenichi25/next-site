import Navigation from '@components/navigation';
import Image from 'next/image';
import Head from 'next/head';

const Hello = () => {
  return (
    <>
      <Head>
        <title>Hello world</title>
        <meta property="og:title" content="Hello world" />
      </Head>
      <article>
        <Navigation />
        <h1>Hello world</h1>
        <Image
          src="/post/hello-world/myimage.jpeg"
          width={640}
          height={427}
          alt="hello-world"
        />
      </article>
    </>
  );
};

export default Hello;
