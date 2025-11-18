import { useEffect, useState } from "react";
import { Table } from "./Table";
import CancelIcon from "@mui/icons-material/Cancel";

const CurrentTask = () => {
    const columns = [
        { id: "name", label: "Name", width: "300px" },
        { id: "location", label: "Location", width: "300px" },
        { id: "industry", label: "Industry", width: "300px" },
        { id: "foundedYear", label: "FoundedYear", width: "300px" },
        { id: "employees", label: "Employees", width: "300px" },
    ];


    const [data, setData] = useState([]);

    useEffect(() => {
        let ignore = false;

        fetch("https://companies-directory-frontend-development.onrender.com/companies")
            .then((res) => res.json())
            .then((data) => {
                if (!ignore) setData(data);
            });

        return () => (ignore = true);
    }, []);

    return (
        <div
            style={{
                margin: "20px auto",
                padding: "10px",
                maxWidth: "100%",
            }}
        >
            <h2>Frontend Developer Assessment – Frontlines Media</h2>

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
    );
};

export default CurrentTask;
