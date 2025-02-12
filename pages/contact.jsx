import Head from "next/head";
import { MainLayout } from "@layouts";
import { Contact } from "@pages";

const Page = () => {
  return (
    <>
      <Head>
        <title>Pink Agency | Contacts</title>
        <meta name="description" content="description" />
        <meta name="description" content="description" />
        <meta property="og:title" content="" />
        <meta property="og:description" content="" />
        <meta property="og:image" content="" />

        <meta property="og:url" content="" />
        <link rel="icon" href="img/ui/favicon.svg" />
      </Head>
      <Contact />
    </>
  );
};

Page.getLayout = (page) => <MainLayout overflow={false}>{page}</MainLayout>;

export default Page;
