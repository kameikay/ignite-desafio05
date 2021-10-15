import Link from "next/link";
import { useRouter } from "next/router";
import { Box, Image } from "@chakra-ui/react";
import { ChevronLeftIcon } from "@chakra-ui/icons";

export default function Header() {
  const router = useRouter();
  const isSlug = router.asPath;

  return (
    <Box w="100%">
      <Box
        position="relative"
        as="header"
        display="flex"
        alignItems="center"
        justifyContent="center"
        h={100}
      >
        {router.asPath !== "/" && (
          <Link href="/" passHref>
            <ChevronLeftIcon
              w={8}
              h={8}
              position="absolute"
              left="5%"
              cursor="pointer"
            />
          </Link>
        )}
        <Image src="/logo.svg" alt="Logo" />
      </Box>
    </Box>
  );
}
