import { DataGrid } from "@mui/x-data-grid";
import { userColumn, userRows } from "../../datatablesource";
import { Link } from "react-router-dom";
import "./datatable.scss";
import { useEffect, useState } from "react";
import useContent from "../../hooks/use-content";

const DataTable = () => {
  const [data, setData] = useState([]);

  const { users } = useContent("users");
  console.log(users);
  useEffect(() => {
    setData(users.slice(0, 10));
  }, [users]);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        console.log(params);
        return (
          <div className="cellAction">
            <Link to="/users/test" style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];

  return (
    <div className="datatable">
      <div className="datatableTitle">
        Add New User
        <Link to="/users/new" className="link">
          Add New
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={userColumn.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};
export default DataTable;
