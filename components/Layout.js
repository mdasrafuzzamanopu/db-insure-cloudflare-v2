import Head from "next/head";
import { useRouter } from "next/router";
import Header from "../components/Header";
import Nav from "../components/Nav";
import { getPageTitleByPath } from "../utils/utils";
import { sora } from "../styles/fonts";

const Layout = ({ children }) => {
  const router = useRouter();
  const pathname = router.pathname;
  const pathsWithoutNav = ['/builders-risk','/commercial-property','/liquor-liability']
  const shouldHideNav = pathsWithoutNav.includes(pathname)

  return (
    <div
      className={`${sora.className} relative overflow-y-auto text-white bg-black bg-no-repeat bg-cover page scrollbar-thumb-red-700 scrollbar-track-black scrollbar-thin`}
    >
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="
		We are a team of professionals who are passionate about creating beautiful, functional websites that help businesses grow. We specialize in web design, web development, and digital marketing services."
        />
        <meta
          name="keywords"
          content="web design, web development, digital marketing, website design, website development, web design company, web development company, digital marketing company"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/layout/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/layout/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/layout/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/layout/favicon/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/layout/favicon/safari-pinned-tab.svg"
          color="#5bbad5"
        />

        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <title>{getPageTitleByPath(pathname)}</title>
      </Head>
      {!shouldHideNav && <Nav />}
      <Header />
      {children}
    </div>
  );
};

export default Layout;
