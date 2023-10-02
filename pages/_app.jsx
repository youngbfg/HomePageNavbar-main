
import Layout from "../layout/Layout";
import "../styles/globals.css";
function MyApp({ Component, pageProps: {  ...pageProps } }) {
  return (
        <Layout>
          <div className="pt-[88px]">
            <Component {...pageProps} />
          </div>
        </Layout>
  );
}

export default MyApp;
