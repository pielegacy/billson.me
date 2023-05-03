import { asset, Head } from "$fresh/runtime.ts";
import { AppProps } from "$fresh/src/server/types.ts";
import NavBar from "../components/NavBar.tsx";

export default function App({ Component }: AppProps) {
  return (
    <html data-custom="data">
      <Head>
        <link rel="stylesheet" href={asset("/main.css")} />
      </Head>
      <body class="container">
        <header>
          <NavBar />
        </header>
        <main>
          <Component />
        </main>
        {/* <footer>
          &copy; Alex Billson, {new Date().getFullYear()}
        </footer> */}
      </body>
    </html>
  );
}
