import { ServicesList } from "@components/sections";
import { Form, Hero } from "./sections";

export const Home = () => {
  return (
    <>
      {/* <Form />
      <Form /> */}
      <Hero />
      <ServicesList className="home-services" />
      <Form />
    </>
  );
};
