// // // // // // import React, { useState } from "react";
// // // // // // import { Document, Page } from "react-pdf";
// // // // // // import "react-pdf/dist/esm/Page/AnnotationLayer.css";

// // // // // // const PDFViewer = () => {
// // // // // //   const [numPages, setNumPages] = useState(null);
// // // // // //   const [pageNumber, setPageNumber] = useState(1);
// // // // // //   const [selectedPdf, setSelectedPdf] = useState(null);

// // // // // //   const onDocumentLoadSuccess = ({ numPages }) => {
// // // // // //     setNumPages(numPages);
// // // // // //   };

// // // // // //   const goToPrevPage = () =>
// // // // // //     setPageNumber(pageNumber - 1 <= 1 ? 1 : pageNumber - 1);

// // // // // //   const goToNextPage = () =>
// // // // // //     setPageNumber(pageNumber + 1 >= numPages ? numPages : pageNumber + 1);

// // // // // //   const handleFileChange = (event) => {
// // // // // //     const file = event.target.files[0];
// // // // // //     setSelectedPdf(file);
// // // // // //     setPageNumber(1); // Reset page number when selecting a new PDF
// // // // // //   };

// // // // // //   return (
// // // // // //     <div className="pdf-viewer">
// // // // // //       <label htmlFor="fileInput">Select a PDF:</label>
// // // // // //       <input
// // // // // //         type="file"
// // // // // //         id="fileInput"
// // // // // //         accept=".pdf"
// // // // // //         onChange={handleFileChange}
// // // // // //       />
// // // // // //       {selectedPdf && (
// // // // // //         <div className="pdf-container">
// // // // // //           <nav>
// // // // // //             <button onClick={goToPrevPage} className="previous">
// // // // // //               Prev
// // // // // //             </button>
// // // // // //             <button onClick={goToNextPage} className="next">
// // // // // //               Next
// // // // // //             </button>
// // // // // //             <p>
// // // // // //               Page {pageNumber} of {numPages}
// // // // // //             </p>
// // // // // //           </nav>
// // // // // //           <div className="pdf-content">
// // // // // //             <Document file={selectedPdf} onLoadSuccess={onDocumentLoadSuccess}>
// // // // // //               <Page pageNumber={pageNumber} />
// // // // // //             </Document>
// // // // // //           </div>
// // // // // //         </div>
// // // // // //       )}
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default PDFViewer;
// // // // // import React, { useState } from "react";
// // // // // import { Document, Page, pdfjs } from "react-pdf/dist/esm/entry.webpack";
// // // // // import "react-pdf/dist/esm/Page/AnnotationLayer.css";

// // // // // // Set workerSrc globally
// // // // // pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

// // // // // const PDFViewer = () => {
// // // // //   const [numPages, setNumPages] = useState(null);
// // // // //   const [pageNumber, setPageNumber] = useState(1);
// // // // //   const [selectedPdf, setSelectedPdf] = useState(null);

// // // // //   const onDocumentLoadSuccess = ({ numPages }) => {
// // // // //     setNumPages(numPages);
// // // // //   };

// // // // //   const goToPrevPage = () =>
// // // // //     setPageNumber(pageNumber - 1 <= 1 ? 1 : pageNumber - 1);

// // // // //   const goToNextPage = () =>
// // // // //     setPageNumber(pageNumber + 1 >= numPages ? numPages : pageNumber + 1);

// // // // //   const handleFileChange = (event) => {
// // // // //     const file = event.target.files[0];
// // // // //     setSelectedPdf(file);
// // // // //     setPageNumber(1); // Reset page number when selecting a new PDF
// // // // //   };

// // // // //   return (
// // // // //     <div className="pdf-viewer">
// // // // //       <label htmlFor="fileInput">Select a PDF:</label>
// // // // //       <input
// // // // //         type="file"
// // // // //         id="fileInput"
// // // // //         accept=".pdf"
// // // // //         onChange={handleFileChange}
// // // // //       />
// // // // //       {selectedPdf && (
// // // // //         <div className="pdf-container">
// // // // //           <nav>
// // // // //             <button onClick={goToPrevPage} className="previous">
// // // // //               Prev
// // // // //             </button>
// // // // //             <button onClick={goToNextPage} className="next">
// // // // //               Next
// // // // //             </button>
// // // // //             <p>
// // // // //               Page {pageNumber} of {numPages}
// // // // //             </p>
// // // // //           </nav>
// // // // //           <div className="pdf-content">
// // // // //             <Document file={selectedPdf} onLoadSuccess={onDocumentLoadSuccess}>
// // // // //               <Page pageNumber={pageNumber} />
// // // // //             </Document>
// // // // //           </div>
// // // // //         </div>
// // // // //       )}
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default PDFViewer;

// // // // import React, { useState, useEffect } from "react";
// // // // import { Document, Page, pdfjs } from "react-pdf";
// // // // import "react-pdf/dist/esm/Page/AnnotationLayer.css";
// // // // import jsPDF from 'jspdf';

// // // // const PDFViewer = () => {
// // // //   const [numPages, setNumPages] = useState(null);
// // // //   const [pageNumber, setPageNumber] = useState(1);
// // // //   const [selectedPdf, setSelectedPdf] = useState(null);

// // // //   useEffect(() => {
// // // //     // Dynamically load workerSrc for pdfjs
// // // //     pdfjs
// // // //       .getDocument({ url: 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.10.377/web/compressed.tracemonkey-pldi-09.pdf' }) // Replace URL with your PDF file
// // // //       .promise.then(() => {
// // // //         const workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.10.377/pdf.worker.min.js';
// // // //         pdfjs.GlobalWorkerOptions.workerSrc = workerSrc;
// // // //       })
// // // //       .catch((error) => {
// // // //         console.error('Error loading pdfjs worker:', error);
// // // //       });
// // // //   }, []);

// // // //   const onDocumentLoadSuccess = ({ numPages }) => {
// // // //     setNumPages(numPages);
// // // //   };

// // // //   const goToPrevPage = () =>
// // // //     setPageNumber(pageNumber - 1 <= 1 ? 1 : pageNumber - 1);

// // // //   const goToNextPage = () =>
// // // //     setPageNumber(pageNumber + 1 >= numPages ? numPages : pageNumber + 1);

// // // //   const handleFileChange = (event) => {
// // // //     const file = event.target.files[0];
// // // //     setSelectedPdf(file);
// // // //     setPageNumber(1); // Reset page number when selecting a new PDF
// // // //   };

// // // //   const exportAsPDF = () => {
// // // //     if (!selectedPdf) return;

// // // //     const pdf = new jsPDF();
// // // //     for (let page = 1; page <= numPages; page++) {
// // // //       pdf.addPage();
// // // //       pdf.setPage(page);
// // // //       const canvas = document.getElementById(`pdf-page-${page}`);
// // // //       const imageData = canvas.toDataURL('image/png');
// // // //       pdf.addImage(imageData, 'PNG', 0, 0);
// // // //     }
// // // //     pdf.save('document.pdf');
// // // //   };

// // // //   return (
// // // //     <div className="pdf-viewer">
// // // //       <label htmlFor="fileInput">Select a PDF:</label>
// // // //       <input
// // // //         type="file"
// // // //         id="fileInput"
// // // //         accept=".pdf"
// // // //         onChange={handleFileChange}
// // // //       />
// // // //       {selectedPdf && (
// // // //         <div className="pdf-container">
// // // //           <nav>
// // // //             <button onClick={goToPrevPage} className="previous">
// // // //               Prev
// // // //             </button>
// // // //             <button onClick={goToNextPage} className="next">
// // // //               Next
// // // //             </button>
// // // //             <button onClick={exportAsPDF} className="export">
// // // //               Export as PDF
// // // //             </button>
// // // //             <p>
// // // //               Page {pageNumber} of {numPages}
// // // //             </p>
// // // //           </nav>
// // // //           <div className="pdf-content">
// // // //             <Document file={selectedPdf} onLoadSuccess={onDocumentLoadSuccess}>
// // // //               <Page pageNumber={pageNumber} id={`pdf-page-${pageNumber}`} />
// // // //             </Document>
// // // //           </div>
// // // //         </div>
// // // //       )}
// // // //     </div>
// // // //   );
// // // // };



// // // // export default PDFViewer;
// // // import { useState } from "react";
// // // import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
// // // import "react-pdf/dist/esm/Page/AnnotationLayer.css";


// // // const PDFViewer = () => {
// // //   const [numPages, setNumPages] = useState(null);
// // //   const [pageNumber, setPageNumber] = useState(1);

// // //   const onDocumentLoadSuccess = ({ numPages }) => {
// // //     setNumPages(numPages);
// // //   };

// // //   const goToPrevPage = () =>
// // //     setPageNumber(pageNumber - 1 <= 1 ? 1 : pageNumber - 1);

// // //   const goToNextPage = () =>
// // //     setPageNumber(pageNumber + 1 >= numPages ? numPages : pageNumber + 1);

// // //   return (
// // //     <div className="page">
// // //       <nav>
// // //         <button onClick={goToPrevPage} className="previous">
// // //           Prev
// // //         </button>
// // //         <button onClick={goToNextPage} className="next">
// // //           Next
// // //         </button>
// // //         <p>
// // //           Page {pageNumber} of {numPages}
// // //         </p>
// // //       </nav>

// // //       <Document file="document.pdf" onLoadSuccess={onDocumentLoadSuccess}>
// // //         <Page pageNumber={pageNumber} />
// // //       </Document>
// // //     </div>
// // //   );
// // // };

// // // export default PDFViewer;

// // import React, { useState } from "react";
// // import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
// // import "react-pdf/dist/esm/Page/AnnotationLayer.css";


// // const PDFViewer = () => {
// //   const [numPages, setNumPages] = useState(null);
// //   const [pageNumber, setPageNumber] = useState(1);
// //   const [selectedPdf, setSelectedPdf] = useState(null);

// //   const onDocumentLoadSuccess = ({ numPages }) => {
// //     setNumPages(numPages);
// //   };

// //   const goToPrevPage = () =>
// //     setPageNumber(pageNumber - 1 <= 1 ? 1 : pageNumber - 1);

// //   const goToNextPage = () =>
// //     setPageNumber(pageNumber + 1 >= numPages ? numPages : pageNumber + 1);

// //   const handleFileChange = (event) => {
// //     const file = event.target.files[0];
// //     setSelectedPdf(file);
// //     setPageNumber(1); // Reset page number when selecting a new PDF
// //   };

// //   return (
// //     <div className="pdf-viewer">
// //       <label htmlFor="fileInput">Select a PDF:</label>
// //       <input
// //         type="file"
// //         id="fileInput"
// //         accept=".pdf"
// //         onChange={handleFileChange}
// //       />
// //       {selectedPdf && (
// //         <div className="pdf-container">
// //           <nav>
// //             <button onClick={goToPrevPage} className="previous">
// //               Prev
// //             </button>
// //             <button onClick={goToNextPage} className="next">
// //               Next
// //             </button>
// //             <p>
// //               Page {pageNumber} of {numPages}
// //             </p>
// //           </nav>
// //           <div className="pdf-content">
// //             <Document file={selectedPdf} onLoadSuccess={onDocumentLoadSuccess}>
// //               <Page pageNumber={pageNumber} />
// //             </Document>
// //           </div>
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default PDFViewer;

// import React, { useState } from "react";
// import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
// import "react-pdf/dist/esm/Page/AnnotationLayer.css";
// import "./PDFViewer.css";  // Import the CSS file

// const PDFViewer = () => {
//   const [numPages, setNumPages] = useState(null);
//   const [pageNumber, setPageNumber] = useState(1);
//   const [selectedPdf, setSelectedPdf] = useState(null);

//   const onDocumentLoadSuccess = ({ numPages }) => {
//     setNumPages(numPages);
//   };

//   const goToPrevPage = () =>
//     setPageNumber(pageNumber - 1 <= 1 ? 1 : pageNumber - 1);

//   const goToNextPage = () =>
//     setPageNumber(pageNumber + 1 >= numPages ? numPages : pageNumber + 1);

//   const handleFileChange = (event) => {
//     const file = event.target.files[0];
//     setSelectedPdf(file);
//     setPageNumber(1); // Reset page number when selecting a new PDF
//   };

//   return (
//     <div className="pdf-viewer">
//       <label htmlFor="fileInput">Select a PDF:</label>
//       <input
//         type="file"
//         id="fileInput"
//         accept=".pdf"
//         onChange={handleFileChange}
//       />
//       {selectedPdf && (
//         <div className="pdf-container">
//           <nav>
//             <button onClick={goToPrevPage} className="previous">
//               Prev
//             </button>
//             <button onClick={goToNextPage} className="next">
//               Next
//             </button>
//             <p>
//               Page {pageNumber} of {numPages}
//             </p>
//           </nav>
//           <div className="pdf-content">
//             <Document file={selectedPdf} onLoadSuccess={onDocumentLoadSuccess}>
//               <Page pageNumber={pageNumber} />
//             </Document>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default PDFViewer;

import React, { useState, useEffect, useRef } from "react";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "./PDFViewer.css";  // Import the CSS file

const PDFViewer = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [selectedPdf, setSelectedPdf] = useState(null);
  const pdfContentRef = useRef(null);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedPdf(file);
    setPageNumber(1); // Reset page number when selecting a new PDF
  };

  const handleScroll = () => {
    if (pdfContentRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = pdfContentRef.current;
      if (scrollTop + clientHeight >= scrollHeight) {
        setPageNumber(prevPageNumber => Math.min(prevPageNumber + 1, numPages));
      }
      if (scrollTop === 0) {
        setPageNumber(prevPageNumber => Math.max(prevPageNumber - 1, 1));
      }
    }
  };

  useEffect(() => {
    const pdfContent = pdfContentRef.current;
    if (pdfContent) {
      pdfContent.addEventListener('scroll', handleScroll);
    }
    return () => {
      if (pdfContent) {
        pdfContent.removeEventListener('scroll', handleScroll);
      }
    };
  }, [numPages]);

  return (
    <div className="pdf-viewer">
      <label htmlFor="fileInput">Select a PDF:</label>
      <input
        type="file"
        id="fileInput"
        accept=".pdf"
        onChange={handleFileChange}
      />
      {selectedPdf && (
        <div className="pdf-container">
          <div className="pdf-content" ref={pdfContentRef}>
            <Document file={selectedPdf} onLoadSuccess={onDocumentLoadSuccess}>
              <Page pageNumber={pageNumber} />
            </Document>
          </div>
          <nav>
            <p>
              Page {pageNumber} of {numPages}
            </p>
          </nav>
        </div>
      )}
    </div>
  );
};

export default PDFViewer;
