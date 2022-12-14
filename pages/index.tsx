import type { NextPage } from 'next';
import Head from 'next/head';
import PasswordCard from '../components/PasswordCard';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>
          Password generator app | Frontend challenge by frontendmentor.io
          developed by Dominik Rubröder
        </title>
        <meta
          name="Password generator app"
          content="Password generator app | Frontend challenge by frontendmentor.io developed by Dominik Rubröder"
        />
        <link rel="icon" href="/images/favicon-32x32.png" type="image/png" />
      </Head>

      <main className="flex items-center justify-center min-h-screen flex-col p-4 sm:p-0">
        <h1 className="text-app-gray-500 mb-8">Password generator</h1>
        <section className="max-w-[33.75rem] w-full">
          <PasswordCard />

          <p className="my-8 text-xs text-app-neutral-blue-grayish px-4 w-full text-center text-white opacity-20">
            Frontend challenge by{' '}
            <a
              href="https://www.frontendmentor.io/challenges/password-generator-app-Mr8CLycqjh"
              target="_blank"
              rel="noreferrer"
            >
              frontendmentor.io
            </a>
            , developed by Dominik Rubröder
          </p>
        </section>
      </main>
    </div>
  );
};

export default Home;
