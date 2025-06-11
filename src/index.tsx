import { Html, Body, Head, Link } from "@wroud/vite-plugin-ssg/react/components";
import indexStyles from "./index.css?url";
import App from "./App";

export default function Index() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <title>Grid</title>
        <Link rel="stylesheet" href={indexStyles} />
      </Head>
      <Body>
        <App />
      </Body>
    </Html>
  );
}