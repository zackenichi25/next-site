import { InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import Header from '@components/header';
import Navigation from '@components/navigation';
import { getPostList } from '@shared/util';
import Link from 'next/link';

type PostList = string[];

function Home({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>
      <main>
        <Navigation />
        <Header />
        {posts.length > 0 && (
          <ul>
            {posts.map((slug: string) => (
              <li key={slug}>
                <Link href={`post/${slug}`} legacyBehavior>
                  <a>{slug.replace(/-/g, ' ')}</a>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </main>
    </>
  );
}

export const getStaticProps = async () => {
  const posts: PostList = getPostList();

  return {
    props: {
      posts,
    },
  };
};

export default Home;
