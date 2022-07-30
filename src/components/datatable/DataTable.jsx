import { DataGrid } from "@mui/x-data-grid";
import { userColumn, userRows } from "../../datatablesource";
import { Link } from "react-router-dom";
import "./datatable.scss";
import { useEffect, useState } from "react";
import useContent from "../../hooks/use-content";

const DataTable = ({ mechanic }) => {
  const [data, setData] = useState([]);

  const { users } = useContent("users");
  // console.log(users);
  useEffect(() => {
    setData(users.slice(0, 20));
  }, [users]);
  // console.log(data);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        // console.log(params);
        return (
          <div className="cellAction">
            <Link
              to={`/customers/${params.row.uid}`}
              style={{ textDecoration: "none" }}
            >
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
      {console.log(data)}
      <DataGrid
        className="datagrid"
        rows={
          mechanic
            ? data.filter((item) => item?.mechanic !== "true")
            : data.filter((item) => item?.mechanic !== "false")
        }
        getRowId={(row) => row.uid}
        columns={userColumn.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};
export default DataTable;
