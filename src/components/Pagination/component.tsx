import React, { useMemo } from "react";

interface PaginationType {
  total: number;
  page: number;
  pageSize: number;
  className?: string;
  // eslint-disable-next-line no-unused-vars
  onChangePage?: ({ page, pageSize }: { page: number; pageSize: number }) => void;
  style?: Object;
}

export const Pagination = ({
  total,
  page = 1,
  pageSize = 20,
  className,
  onChangePage = () => {},
  style,
}: PaginationType) => {
  const totalPage = Math.ceil(total / pageSize);

  const handleChange = (p: number) => {
    onChangePage({ page: p, pageSize });
  };

  const pages = Array.from(Array(totalPage).keys());

  const pagination = useMemo(() => {
    let startAt = 0;
    let endAt = 5;

    if (page >= totalPage - 5) {
      startAt = totalPage - 10;
      endAt = totalPage - 5;
    } else if (page > 5) {
      startAt = page - 5;
      endAt = page;
    }

    return { startAt, endAt };
  }, [page, totalPage]);

  return total ? (
    <div className={className} style={style}>
      <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
        <button
          className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
          onClick={() => {
            if (page > 1) {
              handleChange(page - 1);
            }
          }}
          disabled={page === 1}
        >
          <span className="sr-only">Previous</span>
          <svg
            className="h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        {/* {page -> 6, 1, 2, 3, 4, 5} */}
        {totalPage > 10 ? (
          <div>
            {pages.slice(pagination.startAt, pagination.endAt).map((i) => {
              const p = i + 1;

              return (
                <button
                  key={p}
                  aria-current="page"
                  className={`${
                    page === p
                      ? "z-10 bg-indigo-50 border-indigo-500 text-indigo-600"
                      : "bg-white border-gray-300 text-gray-500 hover:bg-gray-50 "
                  } relative inline-flex items-center px-4 py-2 border text-sm font-medium`}
                  onClick={() => handleChange(p)}
                >
                  {p}
                </button>
              );
            })}
            <span className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700">
              ...
            </span>
            {pages.slice(totalPage - 5, totalPage).map((i) => {
              const p = i + 1;

              return (
                <button
                  key={p}
                  aria-current="page"
                  className={`${
                    page === p
                      ? "z-10 bg-indigo-50 border-indigo-500 text-indigo-600"
                      : "bg-white border-gray-300 text-gray-500 hover:bg-gray-50 "
                  } relative inline-flex items-center px-4 py-2 border text-sm font-medium`}
                  onClick={() => handleChange(p)}
                >
                  {p}
                </button>
              );
            })}
          </div>
        ) : (
          pages.map((i) => {
            const p = i + 1;
            return (
              <button
                key={p}
                aria-current="page"
                className={`${
                  page === p
                    ? "z-10 bg-indigo-50 border-indigo-500 text-indigo-600"
                    : "bg-white border-gray-300 text-gray-500 hover:bg-gray-50 "
                } relative inline-flex items-center px-4 py-2 border text-sm font-medium`}
                onClick={() => handleChange(p)}
              >
                {p}
              </button>
            );
          })
        )}

        <button
          className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
          onClick={() => {
            if (page < totalPage) {
              handleChange(page + 1);
            }
          }}
          disabled={page === totalPage}
        >
          <span className="sr-only">Next</span>
          <svg
            className="h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </nav>
    </div>
  ) : (
    <div></div>
  );
};
