import Header from "../components/Header";
import Hero from "../components/Hero";
import TravelTypes from "../components/TravelTypes";

import { Flex } from "@chakra-ui/react";
import Slider from "../components/Slider";

export default function Home() {
  return (
    <Flex direction="column" align="center">
      <Header />
      <Hero />
      <TravelTypes />
      <Slider />
    </Flex>
  );
}
