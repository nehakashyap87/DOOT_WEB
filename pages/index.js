import { Box, Center, Text } from "@chakra-ui/react";
import Link from "next/link";
export default function Home() {
  return (
    <Box as="main" w="100%">
      <Center  alignItems={"Center"} p={12}><Link href="/barter">Welcome to Doot WEB-APPLICATION</Link></Center>
    
    </Box>
  );
}
