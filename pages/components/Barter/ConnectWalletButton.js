import { Box, Button } from "@chakra-ui/react";
import styles from "./barter.module.css";

export default function ConnectWalletButton({
  variant = "standalone",
  btnText = "Connect",
  onClick = () => {},
  isLoading = false,
  isDisabled = false
}) {
  const wrapperClass =
    variant === "card"
      ? styles.connectWalletCardWrapper
      : styles.connectWalletStandaloneWrapper;

  return (
    <Box className={wrapperClass}>
      <Button
        variant=""
        className={styles.connectWallet}
        onClick={onClick}
        isLoading={isLoading}
        loadingText="Connecting..."
        isDisabled={isDisabled || isLoading}
        type="button"
      >
        {btnText}
      </Button>
    </Box>
  );
}
