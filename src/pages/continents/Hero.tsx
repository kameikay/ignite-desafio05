import { Flex, Text } from '@chakra-ui/react'

export function Hero({ selectedContinent }) {

  return (
    <Flex
      w="100%"
      h={500}
      bg="url('/europe.jpg') center center no-repeat rgba(28,20,1,0.35)"
      backgroundBlendMode="multiply"
      align="flex-end"
      p="0 0 3.75rem 8.75rem"
    >
      <Text fontSize="5xl" color="light.white" fontWeight="500">
        {selectedContinent.continent}
      </Text>
    </Flex>
  );
}
