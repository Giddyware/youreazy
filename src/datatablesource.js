//temporary data

export const userColumn = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "user",
    headerName: "User",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img
            fetchpriority="high"
            src={params.row.imageUrl}
            alt="avatar"
            // className="cellImg"
            style={{
              width: "50px",
              height: "50px",
              borderRadius: "50%",
            }}
          />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 230,
  },
  {
    field: "emailVerified",
    headerName: "Email Verified",
    width: 100,
  },
  {
    field: "status",
    headerName: "Status",
    width: 160,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
];

export const userRows = [
  {
    id: 1,
    username: "Snow",
    img: "",
    status: "active",
    email: "snow@gmail.com",
    age: 35,
  },
  {
    id: 2,
    username: "Snow",
    img: "",
    status: "pending",
    email: "1snow@gmail.com",
    age: 35,
  },

  {
    id: 3,
    username: "Snow",
    img: "",
    status: "active",
    email: "1snow@gmail.com",
    age: 35,
  },
  {
    id: 4,
    username: "Snow",
    img: "",
    status: "passive",
    email: "1snow@gmail.com",
    age: 35,
  },
  {
    id: 5,
    username: "Snow",
    img: "",
    status: "active",
    email: "1snow@gmail.com",
    age: 35,
  },
  {
    id: 6,
    username: "Snow",
    img: "",
    status: "active",
    email: "1snow@gmail.com",
    age: 35,
  },
  {
    id: 7,
    username: "Snow",
    img: "",
    status: "pending",
    email: "1snow@gmail.com",
    age: 35,
  },
  {
    id: 8,
    username: "Snow",
    img: "",
    status: "active",
    email: "1snow@gmail.com",
    age: 35,
  },
  {
    id: 9,
    username: "Snow",
    img: "",
    status: "active",
    email: "1snow@gmail.com",
    age: 35,
  },
  {
    id: 10,
    username: "Snow",
    img: "",
    status: "passive",
    email: "1snow@gmail.com",
    age: 35,
  },
];
