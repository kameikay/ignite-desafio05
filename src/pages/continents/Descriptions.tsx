import {
  Box,
  Text,
  Flex,
  Icon,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
} from "@chakra-ui/react";
import { ImInfo } from "react-icons/im";

export function Descriptions({ selectedContinent }) {
  return (
    <Flex align="center" my="80px" px="140px" justify="space-between" w="100%" maxWidth={1440}>
      <Box flex="1">
        <Text textAlign="justify" fontSize="24px">
          {selectedContinent.body.description}
        </Text>
      </Box>

      <Flex w={490} align="center" justify="space-between" ml="70px">
        <Flex direction="column" align="center">
          <Text color="yellow.highlight" fontSize="5xl" fontWeight="500">
            {selectedContinent.body.contriesNumber}
          </Text>
          <Text color="dark.headingsAndText" fontWeight="500" fontSize="2xl">
            países
          </Text>
        </Flex>
        <Flex direction="column" align="center">
          <Text color="yellow.highlight" fontSize="5xl" fontWeight="500">
            {selectedContinent.body.languagesNumber}
          </Text>
          <Text color="dark.headingsAndText" fontWeight="500" fontSize="2xl">
            línguas
          </Text>
        </Flex>
        <Flex direction="column" align="center">
          <Text color="yellow.highlight" fontSize="5xl" fontWeight="500">
            {selectedContinent.body.citiesNumber}
          </Text>
          <Flex
            color="dark.headingsAndText"
            fontWeight="500"
            fontSize="2xl"
            align="center"
          >
            <Text position="relative">
              cidades +100
              <Popover>
                <PopoverTrigger>
                  <Icon
                    as={ImInfo}
                    w="16px"
                    h="16px"
                    color="light.info"
                    position="absolute"
                    top="25%"
                    left="105%"
                    cursor="pointer"
                  />
                </PopoverTrigger>
                <PopoverContent fontSize="1rem">
                  <PopoverArrow />
                  <PopoverCloseButton />
                  <PopoverHeader>Mais info!</PopoverHeader>
                  <PopoverBody>
                    Mais de 100 cidades presentes neste continente
                  </PopoverBody>
                </PopoverContent>
              </Popover>
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
