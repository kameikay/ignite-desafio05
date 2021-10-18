import { Text, Box, Flex, Image } from "@chakra-ui/react";

import { citiesMock } from "../../data/mock";

export function Cities() {
  return (
    <Box w="100%" px="140px" mb="2.5rem" maxWidth={1440}>
      <Text
        color="dark.headingsAndText"
        fontWeight="500"
        fontSize="4xl"
        mb="40px"
      >
        Cidades +100
      </Text>

      <Flex maxWidth="1160px" h="100%">
        <Flex flexWrap="wrap">
          {citiesMock.map((city, key) => (
            <Box
              w="16rem"
              h="279px"
              key={key}
              marginEnd="3rem"
              marginY="1.5rem"
            >
              <Image
                src={city.urlImage}
                alt={city.city}
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
                    {city.city}
                  </Text>
                  <Text color="dark.info" fontSize={16}>
                    {city.country}
                  </Text>
                </Flex>

                <Image
                  src={city.urlFlag}
                  alt="UK Flag"
                  w={30}
                  h={30}
                  borderRadius="50%"
                />
              </Flex>
            </Box>
          ))}
        </Flex>
      </Flex>
    </Box>
  );
}
