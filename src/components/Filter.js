import React from "react";
import MobileFilter from "./MobileFilter";

const Filter = ({ setFilter }) => {
  const [isMobile, setIsMobile] = React.useState(window.innerWidth < 768);

  React.useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);

    // Cleanup listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {isMobile ? (
        <MobileFilter setFilter={setFilter} />
      ) : (
        <aside className="sidebar">
          <h2>Task Master</h2>
          <ul>
            <li className="filter-btn" onClick={() => setFilter("all")}>
              All Tasks
            </li>
            <li className="filter-btn" onClick={() => setFilter("completed")}>
              Completed
            </li>
            <li className="filter-btn" onClick={() => setFilter("incomplete")}>
              Incomplete
            </li>
          </ul>
        </aside>
      )}
    </>
  );
};

export default Filter;
