import { Flex, Text, VStack } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';
import berter from '../Barter/barter.module.css';

const Bridges = () => (
  <VStack className={berter.bridgesInnerTab}>
    <VStack className={berter.bridgesInnerTabContainer}>
      {/* <Flex className={berter.bridgesInnerTabContainer}> */}
        <Text className={berter.bridgesTextTo}>TO</Text>
        <Image src="/berter/mins.png" alt="Mina Logo" width={30} height={30} />
      {/* </Flex> */}
    </VStack>
  </VStack>
);

export default Bridges;
