import { useEffect, useState } from "react";
import { Table } from "./Table";
import CancelIcon from "@mui/icons-material/Cancel";
const CurrentTask = () => {
    const columns = [
        { id: "name", label: "Name" },
        { id: "location", label: "Location" },
        { id: "industry", label: "Industry" },
        { id: "foundedYear", label: "FoundedYear" },
        { id: "employees", label: "Employees" },
        // { id: "revenue", label: "Revenue" },
    ];

    const [data, setData] = useState([])
    useEffect(() => {
        fetch("https://companies-directory-frontend-development.onrender.com/companies").then((res) => res.json()).then((data) => setData(data?.data))
    }, []);

    return (
        <>
            <div
                style={{
                    width: "1100px",
                    margin: "20px auto",

                }}
            >
                <h2>Frontend Developer Assessment–_ Frontlines Media
                </h2>
                <Table
                    columns={columns}
                    data={data}
                    searchble
                    sortable
                    noDataMsg={{
                        name: "No Data Found",
                        Icon: <CancelIcon />,
                    }}
                />

            </div>
        </>
    );
};
export default CurrentTask;
