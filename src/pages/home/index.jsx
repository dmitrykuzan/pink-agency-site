import { ServicesList } from "@components/sections";
import { Approach, Form, Hero } from "./sections";

export const Home = () => {
  return (
    <>
      <Hero />
      <ServicesList className="home-services" />
      <Approach />
      <Form />
    </>
  );
};
