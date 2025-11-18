import { Box, Flex, HStack, Text, Tooltip, VStack } from "@chakra-ui/react";
import TokenBadge, { TokenIcon } from "./TokenBadge";
import ConnectWalletButton from "./ConnectWalletButton";
import styles from "./barter.module.css";
import Image from "next/image";
import { BridgeDirection } from "./BridgeSelector";

const ETH_ASSET_OPTIONS = ["ETH", "USDC", "USDT"];
export function InfoRow({ row }) {
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

export function BarterOptionSelector({
  selectedAsset,
  onAssetChange,
  options = ETH_ASSET_OPTIONS,
  ariaLabel = "Select asset"
}) {
  return (
    <div className={styles.tokenSelectWrapper} role="group" aria-label={ariaLabel}>
      <TokenIcon symbol={selectedAsset} />
      <select
        className={styles.tokenSelect}
        value={selectedAsset}
        onChange={(event) => onAssetChange(event.target.value)}
        aria-label={ariaLabel}
      >
        {options.map((asset) => (
          <option key={asset} value={asset}>
            {asset}
          </option>
        ))}
      </select>
      <span className={styles.arrowDown} aria-hidden="true" />
    </div>
  );
}
export default function BarterCardBox({
  isEthToMina,
  toToken,
  ethAsset,
  onAssetChange,
  walletStatus,
  connectionError,
  onWalletConnect
}) {
  const infoRows = [
    {
      label: `Receive on ${toToken}`,
      value: "... (approx.)",
      tooltip: "approx"
    },
    {
      label: "Transfer Time",
      value: "... (approx.)",
      tooltip: "Estimated completion depends on bridge congestion."
    }
  ];


  const selectedToken = isEthToMina ? ethAsset : "MINA";
  const isWalletConnected = walletStatus === "connected";

  return (
    <Box className={styles.barterBox}>
      <HStack>
        <Text className={styles.cardTitle}>Barter</Text>
        <VStack as="span" alignItems="end">
          <Image
            src="/berter/Doot.svg"
            alt="Arrow Right"
            width={33}
            height={33}
          />
        </VStack>
      </HStack>

      <Flex className={styles.tokenEntry}>
        <HStack className={styles.tokenFrame680}>
          <VStack className={styles.tokenFrame673}>
            <Text className={styles.amountValue}>0</Text>
            <Text className={styles.amountCurrency}>$ 0</Text>
          </VStack>

          <VStack className={styles.tokenFrame671}>
            <VStack className={styles.tokenFrame669}>
              {isEthToMina ? (
                <BarterOptionSelector
                  selectedAsset={ethAsset}
                  onAssetChange={onAssetChange}
                />
              ) : (
              <> <BridgeDirection label="" symbol={"MINA"} /></>
              )}
              <Text className={styles.balanceInfo}>
                20 {selectedToken} available
              </Text>
            </VStack>
          </VStack>
        </HStack>
      </Flex>

      <div className={styles.metaPanel}>
        <div className={styles.metaSection}>
          {infoRows.map((row) => (
            <InfoRow key={row.label} row={row} />
          ))}
        </div>
      </div>

      <ConnectWalletButton
        variant="card"
        btnText={isWalletConnected ? "Wallet Connected" : "Connect Wallet"}
        onClick={onWalletConnect}
        isDisabled={isWalletConnected}
      />
      {connectionError && (
        <Text role="alert" className={styles.walletError}>
          {connectionError}
        </Text>
      )}
    </Box>
  );
}
