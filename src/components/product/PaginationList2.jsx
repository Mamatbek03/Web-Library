import React from "react";

const PaginationList2 = ({ currentPage, setCurrentPage, getPagesCount }) => {
  return (
    <center>
      <button
        className="prev"
        style={{
          border: "1px solid gray ",
          padding: "3px 7px",
          borderRadius: "7px 0 0 7px",
        }}
        color={currentPage == 1 ? "gray" : "white"}
        onClick={() =>
          setCurrentPage(currentPage == 1 ? currentPage : currentPage - 1)
        }
      >
        Prev
      </button>
      {getPagesCount().map((item) => {
        if (item == currentPage) {
          return (
            <button
              style={{
                backgroundColor: "blue",
                color: "white",
                border: "1px solid blue",
                padding: "3px 7px",
              }}
              onClick={() => setCurrentPage(item)}
            >
              {item}
            </button>
          );
        } else {
          return (
            <button
              style={{ border: "1px solid gray ", padding: "3px 7px" }}
              onClick={() => setCurrentPage(item)}
            >
              {item}
            </button>
          );
        }
      })}
      <button
        style={{
          border: "1px solid gray ",
          padding: "3px 7px",
          borderRadius: "0 7px 7px 0",
        }}
        color={
          currentPage == getPagesCount().sort((a, b) => b - a)[0]
            ? "gray"
            : "white"
        }
        onClick={() =>
          setCurrentPage(
            currentPage == getPagesCount().sort((a, b) => b - a)[0]
              ? currentPage
              : currentPage + 1
          )
        }
        className="next"
      >
        Next
      </button>
    </center>
  );
};

export default PaginationList2;
