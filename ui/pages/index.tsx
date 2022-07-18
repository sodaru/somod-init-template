import Head from "next/head";
import getConfig from "next/config";
import { NextConfig } from "next";

const config = getConfig() as NextConfig;

const themeStr = config?.publicRuntimeConfig?.defaultThemeOptions || "{}";

const theme = JSON.parse(themeStr) as {
  palette: { primary: string; secondary: string };
};

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Somod Module</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
          Welcome to <a href="https://somod.sodaru.com">SOMOD!</a>
        </h1>

        <p className="description">
          Get started by editing <code>pages/index.tsx</code>
        </p>

        <div className="grid">
          <a href="https://somod.sodaru.com" className="card">
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about SOMOD features and API.</p>
          </a>

          <a href="https://somod.sodaru.com/tutorial" className="card">
            <h3>Learn &rarr;</h3>
            <p>Learn SOMOD framework in an Interactive Tutorial!</p>
          </a>

          <a href="https://github.com/sodaru/somod-examples" className="card">
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example SOMOD projects.</p>
          </a>
        </div>
      </main>

      <footer>
        <a
          href="https://somod.sodaru.com?utm_source=somod-init&utm_medium=default-template&utm_campaign=somod-cli"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <svg
            width="24"
            height="24"
            viewBox="0 0 100 100"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <polygon
              fill="#ffb476"
              points="0,0 100,0 100,20 40,20 40,50 0,50"
            ></polygon>
            <polygon
              fill="#004b89"
              points="0,80 60,80 60,50 100,50 100,100 0,100"
            ></polygon>
          </svg>
        </a>
      </footer>

      <style>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer svg {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: ${theme.palette.primary};
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: ${theme.palette.primary};
          border-color: ${theme.palette.primary};
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
