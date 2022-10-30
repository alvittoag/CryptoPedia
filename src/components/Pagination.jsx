export const Pagination = ({ handlePage, countPage }) => {
  return (
    <div className="border rounded-lg">
      <button
        onClick={() => handlePage(1)}
        className={
          countPage === 1
            ? "bg-activepagination px-5 py-2 border-r text-primary rounded-l-lg md:hover:bg-hoverpagination md:hover:text-textpagination "
            : "bg-pagination px-5 py-2 border-r text-primary md:hover:bg-hoverpagination md:hover:text-textpagination rounded-l-lg"
        }
      >
        1
      </button>
      <button
        onClick={() => handlePage(2)}
        className={
          countPage === 2
            ? "bg-activepagination px-5 py-2 border-r text-primary md:hover:bg-hoverpagination md:hover:text-textpagination "
            : "bg-pagination px-5 py-2 border-r text-primary md:hover:bg-hoverpagination md:hover:text-textpagination "
        }
      >
        2
      </button>
      <button
        onClick={() => handlePage(3)}
        className={
          countPage === 3
            ? "bg-activepagination px-5 py-2 border-r text-primary md:hover:bg-hoverpagination md:hover:text-textpagination "
            : "bg-pagination px-5 py-2 border-r text-primary md:hover:bg-hoverpagination md:hover:text-textpagination "
        }
      >
        3
      </button>
      <button
        onClick={() => handlePage(4)}
        className={
          countPage === 4
            ? "bg-activepagination px-5 py-2  text-primary md:hover:bg-hoverpagination md:hover:text-textpagination "
            : "bg-pagination px-5 py-2 text-primary md:hover:bg-hoverpagination md:hover:text-textpagination "
        }
      >
        4
      </button>
      <button
        onClick={() => handlePage(5)}
        className={
          countPage === 5
            ? "bg-activepagination px-5 py-2 border-l text-primary md:hover:bg-hoverpagination md:hover:text-textpagination  rounded-r-lg"
            : "bg-pagination px-5 py-2 border-l text-primary md:hover:bg-hoverpagination md:hover:text-textpagination  rounded-r-lg"
        }
      >
        5
      </button>
    </div>
  );
};
