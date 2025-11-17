import { useState } from "react";
import { Box, Stack } from "@chakra-ui/react";
import BridgeSelector from "./BridgeSelector";
import BarterCardBox from "./BarterCardBox";
import PrimaryActionButton from "./PrimaryActionButton";
import styles from "./barter.module.css";

export default function BarterNotConnected() {
  const [isEthToMina, setIsEthToMina] = useState(true);
  const [ethAsset, setEthAsset] = useState("ETH");
  const fromToken = isEthToMina ? "ETH" : "MINA";
  const toToken = isEthToMina ? "MINA" : "ETH";

  return (
    <Box className={styles.page}>
      <div className={styles.backgroundLines} aria-hidden="true" />
      <Box className={styles.hero}>
        <Box className={styles.heroContent}>
          <Stack
            spacing={{ base: 10, md: 14 }}
            align="center"
            justify="center"
            w="full"
          >
            <BridgeSelector
              fromToken={fromToken}
              toToken={toToken}
              isForward={isEthToMina}
              onToggle={() => setIsEthToMina((prev) => !prev)}
            />
            <BarterCardBox
              isEthToMina={isEthToMina}
              toToken={toToken}
              ethAsset={ethAsset}
              onAssetChange={setEthAsset}
            />
            <PrimaryActionButton />
          </Stack>
        </Box>
      </Box>
    </Box>
  );
}
