import { Swiper, SwiperSlide } from "swiper/react";
import { Image, Text, Box, Flex } from "@chakra-ui/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import SwiperCore, {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
} from "swiper";

SwiperCore.use([Navigation, Pagination, Mousewheel, Keyboard]);

const swiperMocks = [
  {
    url: "/europe.jpg",
    continent: "Europa",
    subtitle: "O continente mais clássico.",
  },
  {
    url: "/asia.jpg",
    continent: "Ásia",
    subtitle: "O continente mais tradicional.",
  },
  {
    url: "/africa.jpg",
    continent: "África",
    subtitle: "O continente mais antigo.",
  },
  {
    url: "/america.jpg",
    continent: "América",
    subtitle: "O continente mais capitalista.",
  },
  {
    url: "/oceania.jpg",
    continent: "Oceania",
    subtitle: "O continente mais isolado.",
  },
];

export default function SwiperComponent() {
  return (
    <>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        height={450}
      >
        {swiperMocks.map((swiper, key) => (
          <SwiperSlide key={key}>
            <Flex
              background={`url(${swiper.url}) no-repeat center center rgba(0, 0,0,0.35)`}
              w={1240}
              h={450}
              align="center"
              justify="center"
              direction="column"
              backgroundBlendMode="multiply"
            >
              <Text
                color="light.headingsAndText"
                fontSize={46}
                fontWeight="700"
              >
                {swiper.continent}
              </Text>
              <Text color="light.info" fontSize={24} fontWeight="700">
                {swiper.subtitle}
              </Text>
            </Flex>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}