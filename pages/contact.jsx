import Head from "next/head";
import { MainLayout } from "@layouts";
import { Contact } from "@pages";

const Page = () => {
  return (
    <>
      <Head>
        <title>Pink Agency | Contacts</title>
        <meta name="description" content="description" />
      </Head>
      <Contact />
    </>
  );
};

Page.getLayout = (page) => <MainLayout overflow={false}>{page}</MainLayout>;

export default Page;
