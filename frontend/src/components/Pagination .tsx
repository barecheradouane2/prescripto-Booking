import { useNavigate, useLocation } from "react-router-dom";
import { ITEM_PER_PAGE } from "../lib/data";

interface PaginationProps {
  page: number;
  count: number;
}

const Pagination = ({ page, count }: PaginationProps) => {
  const navigate = useNavigate();
  const location = useLocation();

  const hasPrev = ITEM_PER_PAGE * (page - 1) > 0;
  const hasNext = ITEM_PER_PAGE * (page - 1) + ITEM_PER_PAGE < count;

  const changePage = (newPage: number) => {
    const params = new URLSearchParams(location.search);
    params.set("page", newPage.toString());

    navigate(`${location.pathname}?${params.toString()}`);
  };

  return (
    <div className="p-4 flex items-center justify-center gap-4  text-gray-500">
      <button
        disabled={!hasPrev}
        className="py-2 px-4 rounded-md bg-slate-200 text-xs font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
        onClick={() => changePage(page - 1)}
      >
        Prev
      </button>

      <div className="flex items-center   gap-4 text-sm">
        {Array.from(
          { length: Math.ceil(count / ITEM_PER_PAGE) },
          (_, index) => {
            const pageIndex = index + 1;

            return (
              <button
                key={pageIndex}
                className={`py-1  w-[35px] h-[35px] cursor-pointer px-2 rounded-sm ${
                  page === pageIndex ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"
                }`}
                onClick={() => changePage(pageIndex)}
              >
                {pageIndex}
              </button>
            );
          }
        )}
      </div>

      <button
        disabled={!hasNext}
        className="py-2 px-4 rounded-md bg-slate-200 text-xs font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
        onClick={() => changePage(page + 1)}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;