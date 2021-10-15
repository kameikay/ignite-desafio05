import { Image, Box, Text, Flex, Icon } from "@chakra-ui/react";
import { InfoIcon } from "@chakra-ui/icons";
import React from "react";
import Header from "../components/Header";

export default function Slug() {
  return (
    <Flex align="center" direction="column">
      <Header />

      <Flex
        w="100%"
        h={500}
        bg="url('/europe.jpg') center center no-repeat rgba(28,20,1,0.35)"
        backgroundBlendMode="multiply"
        align="flex-end"
        p="0 0 3.75rem 8.75rem"
      >
        <Text fontSize="5xl" color="light.white" fontWeight="500">
          Europa
        </Text>
      </Flex>

      <Flex
        align="center"
        my="80px"
        px="140px"
        justify="space-between"
        w="100%"
      >
        <Box flex="1">
          <Text textAlign="justify" fontSize="24px">
            A Europa é, por convenção, um dos seis continentes do mundo.
            Compreendendo a península ocidental da Eurásia, a Europa geralmente
            divide-se da Ásia a leste pela divisória de águas dos montes Urais,
            o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
          </Text>
        </Box>

        <Flex w={490} align="center" justify="space-between" ml="70px">
          <Box>
            <Text color="yellow.highlight" fontSize="5xl" fontWeight="500">
              50
            </Text>
            <Text color="dark.headingsAndText" fontWeight="500" fontSize="2xl">
              países
            </Text>
          </Box>
          <Box>
            <Text color="yellow.highlight" fontSize="5xl" fontWeight="500">
              60
            </Text>
            <Text color="dark.headingsAndText" fontWeight="500" fontSize="2xl">
              línguas
            </Text>
          </Box>
          <Box>
            <Text color="yellow.highlight" fontSize="5xl" fontWeight="500">
              27
            </Text>
            <Text color="dark.headingsAndText" fontWeight="500" fontSize="2xl">
              cidades +100 <Icon as={InfoIcon} />
            </Text>
          </Box>
        </Flex>
      </Flex>

      <Box w="100%" px="140px" mb="2.5rem">
        <Text
          color="dark.headingsAndText"
          fontWeight="500"
          fontSize="4xl"
          mb="40px"
        >
          Cidades +100
        </Text>

        <Flex w="100%" h="100%">
          <Box w="16rem" h="279px">
            <Image
              src="/london.jpg"
              alt="Londres"
              w="100%"
              h="173px"
              borderRadius="4px 4px 0 0"
            />
            <Flex
              align="center"
              justify="space-between"
              p="24px"
              border="1px solid"
              borderTop="none"
              borderColor="yellow.opacityHighlight"
              borderRadius="0 0 4px 4px"
            >
              <Flex
                direction="column"
                align="flex-start"
                justify="space-between"
              >
                <Text fontWeight="600" fontSize={20}>
                  Londres
                </Text>
                <Text color="dark.info" fontSize={16}>
                  Reino Unido
                </Text>
              </Flex>

              <Image
                src="/united-kingdom-flag.png"
                alt="UK Flag"
                w={30}
                h={30}
                borderRadius="50%"
              />
            </Flex>
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
}
