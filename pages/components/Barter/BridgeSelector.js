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

const CHEVRON_COUNT = 3;

export default function BridgeSelector({fromToken,toToken,onToggle,isForward}) {
  return (
      <Flex className={styles.bridges}>
        <Flex className={styles.bridgesInner}>
          <BridgeDirection label="From" symbol={fromToken} />
          <Box
            as="button"
            type="button"
            className={styles.routeArrow}
            data-forward={isForward ? "true" : "false"}
            aria-label={`Swap ${fromToken} to ${toToken}`}
            onClick={onToggle}
          >
            {Array.from({ length: CHEVRON_COUNT }).map((_, index) => (
              <Box
                key={index}
                as="span"
                className={styles.routeArrowChevron}
                aria-hidden="true"
              />
            ))}
          </Box>
          <BridgeDirection label="To" symbol={toToken} />
        </Flex>
      </Flex>
  );
}
