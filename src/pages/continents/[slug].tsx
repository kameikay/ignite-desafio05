import { Flex } from "@chakra-ui/react";
import { useRouter } from "next/router";
import Header from "../../components/Header";
import { Cities } from "./Cities";
import { Descriptions } from "./Descriptions";
import { Hero } from "./Hero";

export default function Slug() {
  const route = useRouter();

  return (
    <Flex align="center" direction="column">
      <Header />

      <Hero />

      <Descriptions />

      <Cities />
    </Flex>
  );
}
