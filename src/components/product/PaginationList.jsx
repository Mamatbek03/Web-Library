import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { PaginationItem } from "@mui/material";

export default function BasicPagination({
  getPagesCount,
  currentPage,
  setCurrentPage,
}) {
  return (
    <Stack spacing={2}>
      <Pagination count={10} color="primary">
        <PaginationItem.previous
          onClick={() => setCurrentPage(currentPage - 1)}
        />
        {getPagesCount().map((item) =>
          item == currentPage ? (
            <Pagination.Item
              onClick={() => setCurrentPage(item)}
              key={item}
              active
            >
              {item}
            </Pagination.Item>
          ) : (
            <Pagination.Item onClick={() => setCurrentPage(item)} key={item}>
              {item}
            </Pagination.Item>
          )
        )}

        <PaginationItem.next onClick={() => setCurrentPage(currentPage + 1)} />
      </Pagination>
    </Stack>
  );
}
