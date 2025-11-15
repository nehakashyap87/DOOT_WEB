import { useState } from "react";
import { Box, Button, HStack, VStack } from "@chakra-ui/react";
import  BarterNotConnected  from "../pages/components/Barter/BarterNotConnected";

const BarterDemo =() => {
  const [isConnected, setIsConnected] = useState(false  );

  return (
    <VStack >
      <Box w="full">
      <BarterNotConnected />
      </Box>
    </VStack>
  );
}
export default BarterDemo;