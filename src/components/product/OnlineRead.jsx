import React, { useEffect, useState } from "react";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import { Button } from "@mui/material";
import { useProducts } from "../../contexts/ProductContextProvider";
import { useParams } from "react-router-dom";
const ProductsPage = () => {
  const { getCategories, getOneProduct, oneProduct } = useProducts();

  const { id } = useParams();
  useEffect(() => {
    getCategories();
    getOneProduct(id);
  }, []);

  const [totalPages, setTotalPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  function onDocumentLoadSuccess({ numPages }) {
    setTotalPages(numPages);
  }
  function removeTextLayerOffset() {
    const textLayers = document.querySelectorAll(
      ".react-pdf__Page__textContent textLayer"
    );
    const textLayers2 = document.querySelectorAll(
      ".react-pdf__Page__annotations annotationLayer"
    );
    const textLayers3 = document.querySelector(".react-pdf__Page");
    textLayers3.style.height = "1200px";
    textLayers.forEach((layer) => {
      const { style } = layer;
      style.display = "none";
    });
    textLayers2.forEach((layer) => {
      const { style } = layer;
      style.display = "none";
      style.top = "0";
      style.left = "0";
    });
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
      <center style={{ overflow: "hidden" }} className="small">
        <Document
          className="doc"
          file={oneProduct?.pdf}
          onLoadSuccess={onDocumentLoadSuccess}
        >
          <Page
            className="page"
            height="1200"
            onLoadSuccess={removeTextLayerOffset}
            pageNumber={pageNumber}
          />
        </Document>
      </center>
      <center>
        <p style={{ marginTop: "0" }}>
          Page {pageNumber} of {totalPages}
        </p>
        {pageNumber > 1 && <Button onClick={prevPage}>Previous Page</Button>}
        {pageNumber < totalPages && (
          <Button onClick={nextPage}>Next Page</Button>
        )}
      </center>
    </div>
  );
};

export default ProductsPage;
