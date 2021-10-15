import { Box, Flex, Text, Image } from "@chakra-ui/react";

export default function TravelTypes() {
  return (
    <Flex
      maxWidth={1160}
      w="100%"
      mx={140}
      align="center"
      justify="space-between"
      mt={114}
    >
      <Flex direction="column" align="center">
        <Image src="/cocktail.svg" alt="" />
        <Text mt="6" fontWeight="500" fontSize={24}>
          vida noturna
        </Text>
      </Flex>
      <Flex direction="column" align="center">
        <Image src="/surf.svg" alt="" />
        <Text mt="6" fontWeight="500" fontSize={24}>
          praia
        </Text>
      </Flex>
      <Flex direction="column" align="center">
        <Image src="/building.svg" alt="" />
        <Text mt="6" fontWeight="500" fontSize={24}>
          moderno
        </Text>
      </Flex>
      <Flex direction="column" align="center">
        <Image src="/museum.svg" alt="" />
        <Text mt="6" fontWeight="500" fontSize={24}>
          clássico
        </Text>
      </Flex>
      <Flex direction="column" align="center">
        <Image src="/earth.svg" alt="" />
        <Text mt="6" fontWeight="500" fontSize={24}>
          e mais...
        </Text>
      </Flex>
    </Flex>
  );
}
