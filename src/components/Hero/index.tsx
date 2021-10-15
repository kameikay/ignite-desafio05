import { Box, Flex, Text, Image } from "@chakra-ui/react";

export default function Hero() {
  return (
    <Flex
      px={140}
      py="80px"
      align="center"
      justifyContent="space-between"
      w="100%"
      background="url('/sky.jpg') no-repeat center center"
      height="21rem"
    >
      <Box color="light.headingsAndText">
        <Box fontSize={36} fontWeight="500">
          <Text>5 Continentes,</Text>
          <Text>infinitas possibilidades.</Text>
        </Box>

        <Box color="light.info" w={524} fontSize={20} fontWeight="300">
          <Text mt="4">
            Chegou a hora de tirar do papel a viagem que você sempre sonhou.
          </Text>
        </Box>
      </Box>
      <Box>
        <Image
          src="/airplane.svg"
          alt="Avião"
          style={{ transform: "rotate(3deg) translateY(4rem)" }}
        />
      </Box>
    </Flex>
  );
}
