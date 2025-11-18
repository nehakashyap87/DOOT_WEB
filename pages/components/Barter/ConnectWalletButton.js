import { Box, Button } from "@chakra-ui/react";
import styles from "./barter.module.css";

export default function ConnectWalletButton({ variant = "standalone",btnText="Connect" }) {  
  const wrapperClass =
    variant === "card"
      ? styles.connectWalletCardWrapper
      : styles.connectWalletStandaloneWrapper;

  return (
    <Box className={wrapperClass}>
      <Button variant={""} className={styles.connectWallet}>
        {btnText}
      </Button>
    </Box>
  );
}
