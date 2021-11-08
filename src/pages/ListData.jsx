import { makeStyles } from "@material-ui/core";
import { DataGrid } from "@material-ui/data-grid";
import React from "react";
import { useState, useEffect } from "react";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import {Link} from "react-router-dom"
import Alert from '@mui/material/Alert';


const useStyle = makeStyles((theme) => {
  return {
    root: {
      height: 520,
      width: "98%",
      backgroundColor: "white",
      padding: theme.spacing(2),
      paddingTop: theme.spacing(6),
    },
  };
});

export default function ListData() {
  const classes = useStyle();

  const [rows, setRows] = useState([]);
  const[alert, setAlert] = useState(false)

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    { field: "userName", headerName: "Username", width: 150 },
    { field: "email", headerName: "email", width: 150 },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      width: 120,
    },
    { field: "status", headerName: "status", width: 150 },
    { field: "transaction", headerName: "transaction Volume", width: 150 },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <Stack direction="row" spacing={2}>
            <Link style={{ textDecoration: 'none' }} to={"/user/"+ params.row.id}>
              <Button size="small" variant="contained">
                Edit
              </Button>
            </Link>
            <DeleteOutlineIcon style={{marginTop: 13, cursor: 'pointer' }} onClick={() => handleDelete(params.row.id)}/>
          </Stack>
        );
      },
    },
  ];

  const handleDelete = (id) => {
      setTimeout(function(){ setAlert(false) }, 3000);
       const newRows = rows.filter(row => row.id !== id)
       setRows(newRows)
       fetch('http://localhost:8000/list/'+ id,{
           method: 'DELETE',
       })
       .then(res =>res.json())
       .then(res => setAlert(true))
  }

  useEffect(() => {
    fetch("http://localhost:8000/list")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setRows(data);
      });
  }, []);
  return (
    <div className={classes.root}>
      {alert ? <Alert severity="success">Data berhasil dihapus</Alert> : null}
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
      />
      
    </div>
  );
}
