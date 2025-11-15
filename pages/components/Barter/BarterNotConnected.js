"use client";

import {
  Box,
  Flex,
  Text,
  Button,
  Input,
  Icon,
  Divider,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaEthereum } from "react-icons/fa";
import { TbClock } from "react-icons/tb";
import { Image } from '@chakra-ui/react'
export default function BarterNotConnected() {
  return (
    <Flex
      direction="column"
      align="center"
      justify="flex-start"
      w="100%"
      pt="120px"
      bg="#050408"
      minH="100vh"
      position="relative"
      overflow="hidden"
    >
      {/* Background Glow */}
      <Box
        position="absolute"
        top="-150px"
        w="900px"
        h="900px"
        bg="radial-gradient(circle, rgba(33,0,95,0.45), rgba(0,0,0,0))"
        filter="blur(120px)"
        zIndex={0}
      />

      {/* Token Switch Section */}
      <Flex
        align="center"
        justify="center"
        gap="10px"
        zIndex={2}
        mb="30px"
      >
        <Flex
          px="16px"
          py="8px"
          border="1px solid rgba(255,255,255,0.18)"
          rounded="full"
          backdropFilter="blur(10px)"
          cursor="pointer"
        >
          <Text color="white" fontSize="14px">From</Text>
          <Flex ml="10px" align="center" color="cyan.300" fontWeight="bold">
            <Icon as={FaEthereum} mr="5px" />
            ETH
          </Flex>
        </Flex>

        <Flex
          px="16px"
          py="8px"
          border="1px solid rgba(255,255,255,0.18)"
          rounded="full"
          backdropFilter="blur(10px)"
          cursor="pointer"
        >
          <Text color="white" fontSize="14px">To</Text>
          <Flex ml="10px" align="center" color="cyan.300" fontWeight="bold">
            <Image
              borderRadius='1px'
              boxSize='20px'
              src='/berter/mins.png'
              alt='Dan Abramov'
            />            MINA
          </Flex>
        </Flex>
      </Flex>

      {/* Card */}
      <Box
        w="420px"
        p="28px"
        border="1px solid rgba(255,255,255,0.08)"
        rounded="md"
        backdropFilter="blur(20px)"
        bg="rgba(14,14,27,0.45)"
        boxShadow="0px 0px 40px rgba(0,0,0,0.5)"
        zIndex={2}
      >
        <Text color="white" fontSize="20px" fontWeight="bold" mb="20px">
          Barter
        </Text>

        {/* Input Card */}
        <Box
          bg="rgba(15,15,22,0.65)"
          border="1px solid rgba(255,255,255,0.08)"
          rounded="md"
          p="18px"
        >
          <Flex align="center" justify="space-between">
            <Input
              placeholder="0"
              variant="unstyled"
              fontSize="32px"
              color="white"
              fontWeight="semibold"
              width="70%"
            />

            <Flex align="center" color="white" fontSize="14px">
              <Icon as={FaEthereum} mr="6px" />
              20.0 available
            </Flex>
          </Flex>
        </Box>

        {/* Bottom Info */}
        <Box mt="14px">
          <Text color="gray.400" fontSize="13px">
            Receive on: MINA
          </Text>

          <Flex align="center" gap="6px" color="gray.400" fontSize="13px" mt="3px">
            <Icon as={TbClock} />
            Transfer Time: —
          </Flex>
        </Box>

        {/* Divider */}
        <Divider borderColor="rgba(255,255,255,0.1)" my="20px" />

        {/* Connect Button */}
        <Button
          w="100%"
          bg="linear-gradient(90deg, #7b2ff7, #f107a3)"
          color="white"
          h="48px"
          fontSize="15px"
          fontWeight="bold"
          rounded="full"
          _hover={{
            opacity: 0.9,
          }}
        >
          Connect Wallet
        </Button>
      </Box>
    </Flex>
  );
}
