import Head from "next/head";
import { MainLayout } from "@layouts";
import { About } from "@pages";

const Page = () => {
  return (
    <>
      <Head>
        <title>Pink Agency | About Us</title>
        <meta name="description" content="description" />
      </Head>
      <About />
    </>
  );
};

Page.getLayout = (page) => <MainLayout overflow={false}>{page}</MainLayout>;

export default Page;
