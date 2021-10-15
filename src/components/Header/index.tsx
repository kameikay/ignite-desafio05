import {Box} from '@chakra-ui/react'

export default function Header() {
  return (
    <Box as="header" display="flex" alignItems="center" justifyContent="center" h={100} w="100%">
      <img src="/logo.svg" alt="Logo" />
    </Box>
  )
}
