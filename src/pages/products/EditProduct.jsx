import React from "react";
import { useState, useEffect } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { Typography, Box } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import InputAdornment from "@mui/material/InputAdornment";
import { collection, updateDoc, getDocs, doc, get } from "firebase/firestore";
import { db } from "../../firebase-config";
import Swal from "sweetalert2";
import { useAppStore } from "../../appStore";

export default function EditProduct({ fid, closeEvent }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [category, setCategory] = useState("");
  const setRows = useAppStore((state) => state.setRows);
  const empCollectionRef = collection(db, "products");

  useEffect(() => {
    console.log("FID:" + fid.id);
    setName(fid.name);
    setPrice(fid.price);
    setCategory(fid.category);
  }, []);
  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };
  const createUser = async () => {
    const userDoc = doc(db, "products", fid.id);
    const newFields = {
      name: name,
      price: Number(price),
      category: category,
      date: String(new Date()),
    };
    await updateDoc(userDoc, newFields);
    getUsers();
    closeEvent();
    Swal.fire("Submitted!", "Your file has been updated.", "success");
  };

  const getUsers = async () => {
    const data = await getDocs(empCollectionRef);
    setRows(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  const currencies = [
    {
      value: "Mobile",
      label: "Mobile",
    },
    {
      value: "Laptop",
      label: "Laptop",
    },
    {
      value: "Electronics",
      label: "Electronics",
    },
    {
      value: "Food",
      label: "Food",
    },
  ];
  return (
    <>
      <Box />
      <Typography variant="h5" align="left">
        Edit this product
      </Typography>
      <IconButton
        style={{ position: "absolute", top: "0", right: "0" }}
        onClick={closeEvent}
      >
        <CloseIcon />
      </IconButton>
      <Box height={20} />
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            id="outlined-basic"
            label="Name"
            variant="outlined"
            size="small"
            onChange={handleNameChange}
            value={name}
            sx={{ minWidth: "100%" }}
          />
        </Grid>

        <Grid item xs={6}>
          <TextField
            id="outlined-basic"
            label="Price"
            variant="outlined"
            type="number"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <CurrencyRupeeIcon />
                </InputAdornment>
              ),
            }}
            size="small"
            onChange={handlePriceChange}
            value={price}
            sx={{ minWidth: "100%" }}
          />
        </Grid>

        <Grid item xs={6}>
          <TextField
            id="outlined-basic"
            label="Category"
            select
            variant="outlined"
            size="small"
            onChange={handleCategoryChange}
            value={category}
            sx={{ minWidth: "100%" }}
          >
            {currencies.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>

        <Grid item xs={12}>
          <Typography variant="h5" align="right">
            <Button
              variant="contained"
              onClick={createUser}
              sx={{ marginRight: "10px" }}
            >
              Edit
            </Button>
            <Button
              variant="contained"
              onClick={closeEvent}
              sx={{
                backgroundColor: "#616161",
                ":hover": {
                  backgroundColor: "#616161",
                  color: "white", // Changer la couleur de fond lors du survol
                },
              }}
            >
              Cancel
            </Button>
          </Typography>
        </Grid>
      </Grid>
    </>
  );
}
