/**
 * @import global css (tailwindcss/fonts/customs)
 */
import "../styles/globals.css";
/**
 * @import layout component
 */
import Layout from "../components/global/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
