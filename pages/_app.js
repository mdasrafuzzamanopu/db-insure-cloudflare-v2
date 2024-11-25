import "../styles/globals.css";

// import layout
import Layout from "../components/Layout";
// import { VercelToolbar } from "@vercel/toolbar/next";

// import next js router
import { useRouter } from "next/router";

// import framer motion
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Loading from "../components/Loading";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStart = (url) => url !== router.asPath && setLoading(true);
    const handleComplete = (url) => url === router.asPath && setLoading(false);

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  });

  if (router.pathname.startsWith("/admin")) {
    return <Component {...pageProps} />;
  }

  return (
    <Layout>
      <AnimatePresence>
        <div className="h-full ">
          {/* <Transition /> */}
          {loading ? <Loading /> : <Component {...pageProps} />}
          {/* <VercelToolbar /> */}
        </div>
      </AnimatePresence>
    </Layout>
  );
}

export default MyApp;
