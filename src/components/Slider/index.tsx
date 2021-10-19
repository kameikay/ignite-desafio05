import { Box, Flex, Text } from "@chakra-ui/react";
import SwiperComponent from "./SwiperComponent";

export default function Slider() {
  return (
    <Flex direction="column" align="center" mb="40px">
      <Box
        fontSize="36px"
        fontWeight="500"
        textAlign="center"
        mt="8.25rem"
        _before={{
          content: '""',
          display: "block",
          width: "90px",
          height: "2px",
          mx: "auto",
          mb: "3.25rem",
          bg: "dark.headingsAndText",
        }}
      >
        <Text>Vamos nessa?</Text>
        <Text>Então escolha seu continente</Text>
      </Box>

      <Box maxWidth={1240} w="100%" mt="3.25rem">
        <SwiperComponent />
      </Box>
    </Flex>
  );
}
