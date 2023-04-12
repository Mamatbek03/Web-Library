import React, { useState } from "react";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import book from "./fistBook.pdf";

const ProductsPage = () => {
  const [totalPages, setTotalPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  function onDocumentLoadSuccess({ numPages }) {
    setTotalPages(numPages);
  }
  function changePage(offSet) {
    setPageNumber((prevPageNumber) => prevPageNumber + offSet);
  }
  function prevPage() {
    changePage(-1);
  }
  function nextPage() {
    changePage(+1);
  }
  return (
    <div className="big">
      <center className="small">
        <Document file={book} onLoadSuccess={onDocumentLoadSuccess}>
          <Page height="1200" pageNumber={pageNumber} />
        </Document>
        <p style={{ marginTop: "0" }}>
          Page {pageNumber} of {totalPages}
        </p>
        {pageNumber > 1 && <button onClick={prevPage}>Previous Page</button>}
        {pageNumber < totalPages && (
          <button onClick={nextPage}>Next Page</button>
        )}
      </center>
      {/* <Document file={book} onLoadSuccess={onDocumentLoadSuccess}>
        {Array.from(new Array(totalPages), (el, next) => (
          <Page key={index + 1} pageNumber={index + 1} />
        ))}
      </Document> */}
    </div>
  );
};

export default ProductsPage;
