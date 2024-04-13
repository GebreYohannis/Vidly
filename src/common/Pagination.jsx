import React from "react";
import PropTypes from "prop-types";

const Pagination = (props) => {
  const { itemsCount, pageSize, currentPage, onPageChange } = props;
  const pages = [];
  const pagesCount = Math.ceil(itemsCount / pageSize);
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  if (pages.length === 1) return null;
  return (
    <nav className="nav">
      <ul className="nav__content">
        {pages.map((page) => (
          <li
            key={page}
            className={currentPage === page ? "nav__item active" : "nav__item"}
            onClick={() => onPageChange(page)}
          >
            {page}
          </li>
        ))}
      </ul>
    </nav>
  );
};

Pagination.propTypes = {
  itemsCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default Pagination;
