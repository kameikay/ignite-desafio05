import { Flex } from "@chakra-ui/react";
import { GetStaticPaths, GetStaticProps } from "next";
import Header from "../../components/Header";
import { Cities } from "./Cities";
import { Descriptions } from "./Descriptions";
import { Hero } from "./Hero";
import { continentsMock } from "../../data/mock";

interface ISelectedContinentProps {
  body: {
    citiesNumber: number;
    contriesNumber: number;
    description: string;
    languagesNumber: number;
  };
  continent: string;
  slug: string;
}

export default function Slug({ selectedContinent }) {
  return (
    <Flex align="center" direction="column">
      <Header />

      <Hero selectedContinent={selectedContinent as ISelectedContinentProps} />

      <Descriptions selectedContinent={selectedContinent as ISelectedContinentProps} />

      <Cities />
    </Flex>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async (props) => {
  const data = continentsMock;
  const { slug } = props.params;
  const selectedContinent = data.filter(
    (continent) => continent.slug === slug
  )[0];

  return {
    props: {
      selectedContinent,
    },
    revalidate: 60 * 60 * 24, // 24 hours
  };
};
