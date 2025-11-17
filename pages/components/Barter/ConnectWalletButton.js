import { Box, Button } from "@chakra-ui/react";
import styles from "./barter.module.css";

export default function ConnectWalletButton({ variant = "standalone" }) {
  const wrapperClass =
    variant === "card"
      ? styles.connectWalletCardWrapper
      : styles.connectWalletStandaloneWrapper;

  return (
    <Box className={wrapperClass}>
      <Button variant="unstyled" className={styles.connectWallet}>
        Connect Wallet
      </Button>
    </Box>
  );
}
