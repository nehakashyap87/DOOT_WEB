import Image from "next/image";
import { Icon } from "@chakra-ui/react";
import { FaEthereum } from "react-icons/fa";
import { SiUsdcoin, SiTether } from "react-icons/si";
import styles from "./barter.module.css";

const join = (...classes) => classes.filter(Boolean).join(" ");

export function TokenIcon({ symbol }) {
  if (symbol === "ETH") {
    return (
      <span
        className={join(styles.tokenBadgeIcon, styles.tokenBadgeIconEth)}
        aria-hidden="true"
      >
        <Icon as={FaEthereum} color="#12100E" fontSize="16px" />
      </span>
    );
  }

  if (symbol === "MINA") {
    return (
      <span 
        className={join(styles.tokenBadgeIcon, styles.tokenBadgeIconImage)}
        aria-hidden="true"
      >
        <Image
          src="/barter.mins.png"
          alt="MINA"
          width={26}
          height={26}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </span>
    );
  }

  if (symbol === "USDC") {
    return (
      <span
        className={join(styles.tokenBadgeIcon, styles.tokenBadgeIconUsdc)}
        aria-hidden="true"
      >
        <Icon as={SiUsdcoin} color="#1A73E8" fontSize="18px" />
      </span>
    );
  }

  if (symbol === "USDT") {
    return (
      <span
        className={join(styles.tokenBadgeIcon, styles.tokenBadgeIconUsdt)}
        aria-hidden="true"
      >
        <Icon as={SiTether} color="#25A17E" fontSize="18px" />
      </span>
    );
  }

  return (
    <span
      className={join(styles.tokenBadgeIcon, styles.tokenBadgeIconDefault)}
      aria-hidden="true"
    >
      {symbol.slice(0, 1)}
    </span>
  );
}

export default function TokenBadge({ symbol }) {
  return (
    <span className={styles.tokenBadge} >
      <TokenIcon symbol={symbol} />
      <span className={styles.tokenBadgeText}>{symbol}</span>
    </span>
  );
}
