import { useState } from "react";
import { Box, Stack, Button, Flex } from "@chakra-ui/react";
import BridgeSelector from "./components/Barter/BridgeSelector";
import BarterCardBox from "./components/Barter/BarterCardBox";
import PrimaryActionButton from "./components/Barter/PrimaryActionButton";
import TableCard from "./components/Barter/TableCard";
import styles from "./components/Barter/barter.module.css";

const BACKGROUND_LAYERS = Array.from({ length: 12 });
const ORDER_DATA = {
  ETH: [
    { amount: "0.005 ETH", network: "Ethereum" },
    { amount: "0.005 ETH", network: "Ethereum" },
    { amount: "0.03 ETH", network: "Ethereum" },
    { amount: "0.01 ETH", network: "Ethereum" },
    { amount: "0.1 ETH", network: "Ethereum" },
    { amount: "0.012 ETH", network: "Ethereum" },
    { amount: "0.024 ETH", network: "Ethereum" }
  ],
  USDC: [
    { amount: "0.005 USDC", network: "USDC" },
    { amount: "0.005 USDC", network: "USDC" },
    { amount: "0.03 USDC", network: "USDC" },
    { amount: "0.01 USDC", network: "USDC" },
    { amount: "0.1 USDC", network: "USDC" },
    { amount: "0.012 USDC", network: "USDC" },
    { amount: "0.024 USDC", network: "USDC" }
  ],
  USDT: [
    { amount: "0.005 USDT", network: "USDT" },
    { amount: "0.005 USDT", network: "USDT" },
    { amount: "0.03 USDT", network: "USDT" },
    { amount: "0.01 USDT", network: "USDT" },
    { amount: "0.1 USDT", network: "USDT" },
    { amount: "0.012 USDT", network: "USDT" },
    { amount: "0.024 USDT", network: "USDT" }
  ]
};
const ORDER_FILTERS = Object.keys(ORDER_DATA);
const ORDER_TABLE_COLUMNS = [
  { key: "index", label: "#" },
  { key: "amount", label: "Amount" },
  { key: "network", label: "Network" },
  {
    key: "action",
    label: "",
    align: "right",
    render: (value, row) => row.action
  }
];

export default function BarterNotConnected() {
  const [isEthToMina, setIsEthToMina] = useState(true);
  const [ethAsset, setEthAsset] = useState("ETH");
  const [walletStatus, setWalletStatus] = useState("idle");
  const [connectionError, setConnectionError] = useState("");
  const [openOrdersAsset, setOpenOrdersAsset] = useState(ORDER_FILTERS[0]);
  const fromToken = isEthToMina ? "ETH" : "MINA";
  const toToken = isEthToMina ? "MINA" : "ETH";
  const isWalletConnected = walletStatus === "connected";

  const orderRows = ORDER_DATA[openOrdersAsset].map((entry, index) => ({
    id: `${openOrdersAsset}-${index}`,
    index: index + 1,
    amount: entry.amount,
    network: entry.network,
    action: (
      <Button
        variant="unstyled"
        className={styles.tableCardActionButton}
      >
        + BUY
      </Button>
    )
  }));

  const handleWalletConnect = () => {
    if (walletStatus === "connected") {
      return;
    }
    setConnectionError("");
    const hasWalletProvider =
      typeof window !== "undefined" && window.ethereum !== undefined;
      console.log("hasWalletProvider",hasWalletProvider);
      
    if (hasWalletProvider) {
    // if (!hasWalletProvider) {
      setWalletStatus("error");
      setConnectionError(
        "Connection error: Wallet provider not detected. Install Auro/MetaMask and try again."
      );
      return;
    }

    setWalletStatus("connected");
  };

  return (
    <Box className={styles.page}>
      <section className={styles["barter-background"]}>
        <div className={styles["bg-wave"]} />
        <div className={styles.backgroundLines} aria-hidden="true">
          {BACKGROUND_LAYERS.map((_, index) => (
            <span key={index} className={styles.backgroundLine} />
          ))}
        </div>

        <Box className={styles.hero}>
          <Box className={styles.heroContent}>
            <Stack spacing={{ base: 8, md: 10 }} align="center">
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
                walletStatus={walletStatus}
                connectionError={connectionError}
                onWalletConnect={handleWalletConnect}
              />
            </Stack>
          </Box>
        </Box>

        <Flex className={styles.outsideHeroSection} direction="column" gap={8}>
          <PrimaryActionButton />
          {isWalletConnected && (
            <Box width="100%">
              <TableCard
                title="Open Sell Orders"
                description="Browse matched offers per bridge asset."
                columns={ORDER_TABLE_COLUMNS}
                rows={orderRows}
                filterLabel="Asset"
                filterOptions={ORDER_FILTERS}
                selectedFilter={openOrdersAsset}
                onFilterChange={setOpenOrdersAsset}
              />
            </Box>
          )}
        </Flex>
      </section>
    </Box>
  );
}
