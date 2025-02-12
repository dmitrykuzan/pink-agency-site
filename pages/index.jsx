import Head from "next/head";
import { MainLayout } from "@layouts";
import { Home } from "@pages/home";

const Page = () => {
  return (
    <>
      <Head>
        <title>Pink Agency</title>
        <meta name="description" content="description" />
        <meta property="og:title" content="" />
        <meta property="og:description" content="" />
        <meta property="og:image" content="" />

        <meta property="og:url" content="" />
        <link rel="icon" href="img/ui/favicon.svg" />
      </Head>
      <Home />
    </>
  );
};

Page.getLayout = (page) => <MainLayout overflow={false}>{page}</MainLayout>;

export default Page;
