import { Box, Flex, HStack, Text } from "@chakra-ui/react";
import TokenBadge from "./TokenBadge";
import styles from "./barter.module.css";

export function BridgeDirection({ label, symbol }) {
  return (
    <HStack spacing={3} className={styles.bridgesGroup}>
      <Text className={styles.bridgesLabel}>{label}</Text>
      <TokenBadge symbol={symbol} />
    </HStack>
  );
}

export default function BridgeSelector({fromToken,toToken,onToggle,isForward}) {
  return (
      <Flex className={styles.bridges}>
        <Flex className={styles.bridgesInner}>
          <BridgeDirection label="From" symbol={fromToken} />
          <Box
            as="button"
            type="button"
            className={styles.routeArrow}
            px={3}
            aria-label={`Swap ${fromToken} to ${toToken}`}
            onClick={onToggle}
          >
            <Box
              as="span"
              className={`${styles.routeArrowIcon} ${
                !isForward ? styles.routeArrowIconReverse : ""
              }`}
              aria-hidden="true"
            />
          </Box>
          <BridgeDirection label="To" symbol={toToken} />
        </Flex>
      </Flex>
  );
}
