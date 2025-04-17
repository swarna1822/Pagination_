import React from "react";
const Pagination = ({ noOfPages, currentPage, setPage }) => {
  const handleselectedPage = (page) => {
    setPage(page);
  };
  const handlePrevPage = () => {
    setPage((prev) => prev - 1);
  };
  const handleNextPage = () => {
    setPage((prev) => prev + 1);
  };
  return (
    <div className="pagination-container">
      {currentPage > 1 && <button onClick={handlePrevPage}>⏮️</button>}
      {[...Array(noOfPages)].map((_, i) => {
        return (
          <div className="pagination">
            <button
              className={currentPage === i + 1 ? "active" : ""}
              onClick={() => handleselectedPage(i + 1)}
            >
              {i + 1}
            </button>
          </div>
        );
      })}
      {currentPage < noOfPages && <button onClick={handleNextPage}>⏭️</button>}
    </div>
  );
};

export default Pagination;
