import React, { useState, useEffect } from "react";
import "./Table.css";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { TextField } from "@mui/material";
import CircularIndeterminate from "./Loader";

export const Table = ({
  columns,
  data,
  searchble = false,
  width = "100%",
  height = "400px",
  sortable = false,
  noDataMsg,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const [searchType, setSearchType] = useState({});
  const [searchValues, setSearchValues] = useState({});
  const [filterData, setFilterData] = useState(data);
  const [duplicateFilterData, setDuplicateFilterData] = useState(data);
  const [sortConfig, setSortConfig] = useState(
    columns.map((col) => ({
      key: col.id,
      direction: "none",
    }))
  );

  const [originalData, setOriginalData] = useState(data);

  const [filters, setFilters] = useState({
    location: "",
    industry: "",
  });

  const uniqueLocations = [...new Set(data.map((item) => item.location))];
  const uniqueIndustries = [...new Set(data.map((item) => item.industry))];

  useEffect(() => {
    setFilterData(data);
    setOriginalData(data);
    setDuplicateFilterData(data);

    let ids = columns.map((e) => e.id);

    let searchObj = ids.reduce((acc, key) => {
      acc[key] = false;
      return acc;
    }, {});
    setSearchType(searchObj);

    let initValues = ids.reduce((acc, key) => {
      acc[key] = "";
      return acc;
    }, {});
    setSearchValues(initValues);
  }, [data, columns]);

  useEffect(() => {
    let filtered = data
      .filter((row) =>
        Object.keys(searchValues).every((key) => {
          const val = searchValues[key]?.toLowerCase();
          if (!val || val.length < 3) return true;
          return String(row[key]).toLowerCase().includes(val);
        })
      )
      .filter((row) => {
        if (filters.location && row.location !== filters.location) return false;
        if (filters.industry && row.industry !== filters.industry) return false;
        return true;
      });

    setFilterData(filtered);
    setCurrentPage(1);
  }, [searchValues, filters, data]);

  const totalPages = Math.ceil(filterData.length / rowsPerPage);
  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = Math.min(startIndex + rowsPerPage, filterData.length);
  const paginatedData = filterData.slice(startIndex, endIndex);

  const handleRowsPerPageChange = (e) => {
    setRowsPerPage(Number(e.target.value));
    setCurrentPage(1);
  };

  const handlePrevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  const handleInput = (name) => {
    setSearchType((prev) => ({
      ...prev,
      [name]: true,
    }));
  };

  const handleSorting = (e, id) => {
    const value = e.target.value;
    setSearchValues((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleBlur = (id, e) => {
    const val = e.target.value.trim();
    if (!val) {
      setSearchType((prev) => ({
        ...prev,
        [id]: false,
      }));
    }
  };

  const handleSortings = (colId) => {
    setSortConfig((prev) =>
      prev.map((col) => {
        if (col.key === colId) {
          let newDirection = "asc";
          if (col.direction === "asc") newDirection = "desc";
          else if (col.direction === "desc") newDirection = "none";
          return { ...col, direction: newDirection };
        }
        return { ...col, direction: "none" };
      })
    );

    const currentCol = sortConfig.find((c) => c.key === colId);
    const direction =
      currentCol?.direction === "asc"
        ? "desc"
        : currentCol?.direction === "desc"
          ? "none"
          : "asc";

    if (direction === "none") {
      setFilterData([...originalData]);
    } else {
      const sorted = [...filterData].sort((a, b) => {
        if (a[colId] < b[colId]) return direction === "asc" ? -1 : 1;
        if (a[colId] > b[colId]) return direction === "desc" ? -1 : 1;
        return 0;
      });
      setFilterData(sorted);
      setDuplicateFilterData(sorted);
    }
  };

  return (
    <>
      <div
        style={{
          width: width,
          display: "flex",
          justifyContent: "flex-end",
          gap: "12px",
          marginBottom: "10px",
        }}
      >
        <select
          style={{ padding: "6px" }}
          value={filters.location}
          onChange={(e) =>
            setFilters((prev) => ({ ...prev, location: e.target.value }))
          }
        >
          <option value="">All Locations</option>
          {uniqueLocations.map((loc) => (
            <option key={loc} value={loc}>
              {loc}
            </option>
          ))}
        </select>

        <select
          style={{ padding: "6px" }}
          value={filters.industry}
          onChange={(e) =>
            setFilters((prev) => ({ ...prev, industry: e.target.value }))
          }
        >
          <option value="">All Industries</option>
          {uniqueIndustries.map((ind) => (
            <option key={ind} value={ind}>
              {ind}
            </option>
          ))}
        </select>
      </div>

      <div
        className="table-container"
        style={{
          width: width,
          height: height,
          overflowY: "auto",
          overflowX: "auto",
          whiteSpace: "nowrap",
        }}
      >
        <table className="table" style={{ minWidth: width }}>
          <thead
            style={{
              position: "sticky",
              top: 0,
              background: "#fff",
              zIndex: 2,
            }}
          >
            <tr>
              {columns.map((col) => (
                <th key={col.id}>
                  <span className="header-cell">
                    {searchble && searchType[col.id] ? (
                      <TextField
                        onBlur={(e) => handleBlur(col.id, e)}
                        onChange={(e) => handleSorting(e, col.id)}
                        value={searchValues[col.id]}
                        autoFocus
                        variant="outlined"
                        placeholder={`search by ${col.id}`}
                      />
                    ) : (
                      <span>
                        {col.label}
                        {sortable && (
                          <Button onClick={() => handleSortings(col.id)}>
                            <ArrowDownwardIcon />
                          </Button>
                        )}
                      </span>
                    )}

                    {searchble && !searchType[col.id] && (
                      <span
                        className="search-icon"
                        onClick={() => handleInput(col.id)}
                      >
                        <SearchIcon />
                      </span>
                    )}
                  </span>
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {!data.length &&
              <tr>
                <td colSpan={columns.length}>
                  <div
                    style={{
                      height: height,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <CircularIndeterminate />
                  </div>
                </td>
              </tr>
            }
            {paginatedData.length > 0 ? (
              paginatedData.map((row, idx) => (
                <tr key={startIndex + idx}>
                  {columns.map((col) => (
                    <td key={col.id} data-label={col.label}>
                      {col.renderer
                        ? col.renderer(row, startIndex + idx)
                        : row[col.id]}
                    </td>
                  ))}
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={columns.length}>
                  <div
                    style={{
                      height: height,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <span>{noDataMsg?.name}</span>
                    {noDataMsg?.Icon}
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {filterData.length > 0 && (
        <div
          style={{
            width: width,
            display: "flex",
            justifyContent: "space-between",
            marginTop: "10px",
          }}
        >
          <select value={rowsPerPage} onChange={handleRowsPerPageChange}>
            {[10, 20, 30, 40].map((n) => (
              <option key={n} value={n}>
                {n}
              </option>
            ))}
          </select>

          <div>
            {startIndex + 1} - {endIndex} of {filterData.length}{" "}
            <button onClick={handlePrevPage} disabled={currentPage === 1}>
              {"<"}
            </button>
            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
            >
              {">"}
            </button>
          </div>
        </div>
      )}
    </>
  );
};
