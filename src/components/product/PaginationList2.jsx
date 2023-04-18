import { Button } from "@mui/material";
import React from "react";

const PaginationList2 = ({ currentPage, setCurrentPage, getPagesCount }) => {
  return (
    <div>
      <Button onClick={() => setCurrentPage(currentPage + 1)}>next</Button>
      {getPagesCount().map((item) => {
        if (item == currentPage) {
          <Button onClick={() => setCurrentPage(item)}>{item}</Button>;
        } else {
          <Button onClick={() => setCurrentPage(item)}>{item}</Button>;
        }
      })}
      <Button onClick={() => setCurrentPage(currentPage - 1)}>Prev</Button>
    </div>
  );
};

export default PaginationList2;
