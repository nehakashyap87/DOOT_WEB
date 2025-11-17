import { Box, Button, Center, Text } from "@chakra-ui/react";
import styles from "./barter.module.css";

export default function PrimaryActionButton() {
  return (
    <Box className={styles.primaryButtonWrapper}>
      <Box className={styles.primaryButtonContainer}>
        <Box  h={10} className={styles.routeArrow} aria-hidden="true">
                 <Text className={styles.fontAction}>Activity</Text> 

          <Center  as="span" className={styles.routeArrowIcon} alignContent={"center"}></Center>
        </Box>
      {/* <div className={styles.primaryButtonGlow} aria-hidden="true" /> */}
      </Box>
    </Box>
  );
}
