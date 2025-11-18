import {
  Box,
  Flex,
  Text,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td
} from "@chakra-ui/react";
import styles from "./barter.module.css";
import { BarterOptionSelector } from "./BarterCardBox";

export default function TableCard({
  title,
  description,
  columns = [],
  rows = [],
  filterLabel,
  filterOptions = [],
  selectedFilter,
  onFilterChange,
  hideHeader = false
}) {
  const showFilter =
    filterOptions.length > 0 && typeof onFilterChange === "function";

  return (
    <Box className={styles.tableCard}>
      <Flex className={styles.tableCardHeader}>
        <Box>
          {title && <Text className={styles.tableCardTitle}>{title}</Text>}
          {description && (
            <Text className={styles.tableCardDescription}>{description}</Text>
          )}
        </Box>
        {showFilter && (
          <div className={styles.tableCardFilter}>
            {filterLabel && <span>{filterLabel}</span>}
            <div className={styles.tableCardSelectWrapper}>
              <BarterOptionSelector
                selectedAsset={selectedFilter}
                onAssetChange={onFilterChange}
                options={filterOptions}
                ariaLabel={filterLabel || "Filter table"}
              />
            </div>
          </div>
        )}
      </Flex>
      <Table 
      className={styles.tableCardTable} 
      variant="unstyled">
        {!hideHeader && (
          <Thead>
            <Tr>
              {columns.map((column) => (
                <Th key={column.key} 
                className={styles.tableCardHeadCell}
                >
                  {column.label}
                </Th>
              ))}
            </Tr>
          </Thead>
        )}
        <Tbody>
          {rows.map((row, rowIndex) => (
            <Tr key={row.id ?? row.label ?? rowIndex} 
            className={styles.tableCardRow}
            >
              {columns.map((column) => (
                <Td
                  key={`${column.key}-${rowIndex}`}
                  className={`${styles.tableCardCell} ${
                    column.align === "right" ? styles.tableCardCellRight : ""
                  }`}
                >
                  {typeof column.render === "function"
                    ? column.render(row[column.key], row)
                    : row[column.key]}
                </Td>
              ))}
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
}
