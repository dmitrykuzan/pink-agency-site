import Head from "next/head";
import { MainLayout } from "@layouts";
import { Services } from "@pages";

const Page = () => {
  return (
    <>
      <Head>
        <title>Pink Agency Services</title>
        <meta name="description" content="description" />
      </Head>
      <Services />
    </>
  );
};

Page.getLayout = (page) => <MainLayout overflow={false}>{page}</MainLayout>;

export default Page;
