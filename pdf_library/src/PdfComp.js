// import { useState } from "react";
// import { Document, Page } from "react-pdf";
// import pdf from "./1.pdf";

// function PdfComp(props) {
//   const [numPages, setNumPages] = useState();
//   const [pageNumber, setPageNumber] = useState(1);

//   function onDocumentLoadSuccess({ numPages }) {
//     setNumPages(numPages);
//   }

//   return (
//     <div className="pdf-div">
//            <p>
//         Page {pageNumber} of {numPages}
//       </p>
//       <Document file={props.pdfFile} onLoadSuccess={onDocumentLoadSuccess}>
//         {Array.apply(null, Array(numPages))
//           .map((x, i) => i + 1)
//           .map((page) => {
//             return (
//               <Page
//                 pageNumber={page}
//                 renderTextLayer={false}
//                 renderAnnotationLayer={false}
//               />
//             );
//           })}
//       </Document>
   
//     </div>
//   );
// }
// export default PdfComp;



//final check
import { useState } from "react";
import { Document, Page } from "react-pdf";
import "./PdfComp.css"; // Import the CSS file

function PdfComp({ pdfFile }) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [scale, setScale] = useState(1.5); // Adjust the scale here

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  function goToPrevPage() {
    setPageNumber((prevPage) => Math.max(prevPage - 1, 1));
  }

  function goToNextPage() {
    setPageNumber((prevPage) => Math.min(prevPage + 1, numPages));
  }

  return (
    <div className="pdf-div">
      <div className="navigation">
        <button
          className="btn btn-secondary"
          onClick={goToPrevPage}
          disabled={pageNumber <= 1}
        >
          Previous Page
        </button>
        <span>
          Page {pageNumber} of {numPages}
        </span>
        <button
          className="btn btn-secondary"
          onClick={goToNextPage}
          disabled={pageNumber >= numPages}
        >
          Next Page
        </button>
      </div>
      <Document file={pdfFile} onLoadSuccess={onDocumentLoadSuccess}>
        <Page
          pageNumber={pageNumber}
          renderTextLayer={false}
          renderAnnotationLayer={false}
          scale={scale} // Set the scale for better quality
        />
      </Document>
    </div>
  );
}

export default PdfComp;
