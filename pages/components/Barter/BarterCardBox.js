import {
  Box,
  Button,
  Flex,
  HStack,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  Text,
  Tooltip,
  VStack
} from "@chakra-ui/react";
import TokenBadge, { TokenIcon } from "./TokenBadge";
import ConnectWalletButton from "./ConnectWalletButton";
import styles from "./barter.module.css";
import Image from "next/image";

const ETH_ASSET_OPTIONS = ["ETH", "USDC", "USDT"];

function InfoRow({ row }) {
  return (
    <Flex align="center" justify="space-between">
      <HStack spacing={2} className={styles.metaLabelGroup}>
        <Text fontSize="sm">{row.label}</Text>
        {row.tooltip && (
          <Tooltip
            label={row.tooltip}
            hasArrow
            bg="#2a2a3b"
            color="#ffffff"
            fontSize="xs"
          >
            <Box as="span" className={styles.tooltipIcon}>
              i
            </Box>
          </Tooltip>
        )}
      </HStack>
      <Text className={styles.metaValue}>{row.value}</Text>
    </Flex>
  );
}

export default function BarterCardBox({
  isEthToMina,
  toToken,
  ethAsset,
  onAssetChange
}) {
  const infoRows = [
    {
      label: `Receive on ${toToken}`,
      value: "... (approx.)",
      tooltip: null
    },
    {
      label: "Transfer Time",
      value: "... (approx.)",
      tooltip: "Estimated completion depends on bridge congestion."
    }
  ];

  const selectedToken = isEthToMina ? ethAsset : "MINA";

  return (
    <Box className={styles.barterBox}>
      {/* <Stack className={styles.barterBoxShine} > */}
        <HStack >
          <Text className={styles.cardTitle}>Barter</Text>
          <VStack as="span" alignItems={"end"}>
            <Image
              src="/berter/Doot.svg"
              alt="Arrow Right"
              width={33}
              height={33}
            />
          </VStack >
        </HStack>

        <Flex className={styles.tokenEntry}>
          <HStack className={styles.tokenFrame680}>
            <VStack className={styles.tokenFrame673}>
              <Text className={styles.amountValue}>0</Text>
              <Text className={styles.amountCurrency}>$ 0</Text>
            </VStack>

            <VStack className={styles.tokenFrame671}>
              <VStack className={styles.tokenFrame669} >
                {isEthToMina ? (
                  <Menu autoSelect={false}>
                    <MenuButton
                      as={Button}
                      variant="unstyled"
                      className={styles.tokenButton}
                    >
                      <TokenIcon symbol={selectedToken} />
                      <span className={styles.tokenButtonLabel}>
                        {selectedToken}
                      </span>
                      <span className={styles.arrowDown} aria-hidden="true" />
                    </MenuButton>
                    <MenuList className={styles.tokenMenuList}>
                      {ETH_ASSET_OPTIONS.map((asset) => (
                        <MenuItem
                          key={asset}
                          className={styles.tokenMenuItem}
                          onClick={() => onAssetChange(asset)}
                        >
                          {asset}
                        </MenuItem>
                      ))}
                    </MenuList>
                  </Menu>
                ) : (
                  <Box className={styles.tokenButtonDisabled } >
                    <TokenBadge symbol={selectedToken} />
                  </Box>
                )}
                <Text className={styles.balanceInfo}>
                  20 {selectedToken} available
                </Text>
              </VStack>
            </VStack>
          </HStack>
        </Flex>
      {/* </Stack> */}
      <div className={styles.metaPanel}>
        <div className={styles.metaSection}>
          {infoRows.map((row) => (
            <InfoRow key={row.label} row={row} />
          ))}
        </div>
      </div>

      <ConnectWalletButton variant="card" />
    </Box>
  );
}
