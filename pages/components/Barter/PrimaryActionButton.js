import { Box, Button, Center, Icon, Text } from "@chakra-ui/react";
import styles from "./barter.module.css";
import { FaArrowRight, FaChevronRight } from "react-icons/fa";

export default function PrimaryActionButton() {
  return (
    <Box className={styles.primaryButtonWrapper}>
      <Box className={styles.primaryButtonContainer}>
        <Box h={10}  aria-hidden="true">
          <Center as="span" py={2} className={styles.simplerouteArrow}>         
           Activity <Icon as={FaChevronRight} ml={2} boxSize={5}>
            </Icon>
          </Center>
        </Box>
      </Box>
    </Box>
  );
}
