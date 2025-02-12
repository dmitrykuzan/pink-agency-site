import Head from "next/head";
import { MainLayout } from "@layouts";
import { Home } from "@pages/home";

const Page = () => {
  return (
    <>
      <Head>
        <title>Pink Agency</title>
        <meta name="description" content="description" />
      </Head>
      <Home />
    </>
  );
};

Page.getLayout = (page) => <MainLayout overflow={false}>{page}</MainLayout>;

export default Page;
