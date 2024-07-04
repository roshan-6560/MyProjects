import React, { Fragment, useState } from "react";
import CartItem from "./CartItem";
import { Box, Button, Divider, Grid, Modal, TextField } from "@mui/material";
import AddressCard from "./AddressCard";
import { AddLocationAlt } from "@mui/icons-material";
import { Card } from "@mui/material";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

const carItems = [1, 1, 1];
const address = [1, 1, 1];
const Cart = () => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    width: 400,
    outline: "none",
    bgcolor: "background-paper",
    boxShadow: 24,
    p: 4,
  };
  const initialValues = {
    streetAddress: "",
    state: "",
    pincode: "",
    city: "",
  };
  const validationSchema = Yup.object().shape({
    streetAddress: Yup.string().required("Street Address is required"),
    state: Yup.string().required("State is required"),
    pincode: Yup.string().required("Pin"),
    city: Yup.number().required("City is required"),
  });
  const [OpenAddressModal, setOpenAddressModal] = useState();

  const createOrderUsingSelectedAddress = () => {
    console.log("create order");
  };

  const handleOpenAddressModal = () => {
    setOpenAddressModal(true);
  };
  const handleSubmit = (values) => {
    console.log("handle submit - ",values);
  };
  const handleCloseAddressModal = () => {
    setOpenAddressModal(false);
  };
  return (
    <Fragment>
      <main className="lg:flex justify-between">
        <section className="lg:w-[30%] space-y-6 min-h-screen pt-10">
          <div className="space-y-6">
            {carItems.map((item) => (
              <CartItem />
            ))}
          </div>
          <Divider />
          <div className="billDetails px-5 text-sm">
            <p className="font-extralight py-4">Bill Details</p>
            <div className="sp&::first-letter ">
              <div className="flex justify-between text-gray-400 py-2">
                <p>Item Total</p>
                <p>₹921</p>
              </div>
              <div className="flex justify-between text-gray-400  py-2">
                <p>Delivery Fee</p>
                <p>₹40</p>
              </div>
              <div className="flex justify-between text-gray-400  py-2">
                <p>Platform Fee</p>
                <p>₹921</p>
              </div>
              <div className="flex justify-between text-gray-400  py-2">
                <p>Item Total</p>
                <p>₹921</p>
              </div>
              <div className="flex justify-between text-gray-400  py-2">
                <p>GST and Restaurant</p>
                <p>₹25</p>
              </div>
              <Divider />
              <div className="flex justify-between text-gray-400  py-2">
                <p>Total Pay</p>
                <p>₹1000</p>
              </div>
            </div>
          </div>
        </section>
        <Divider orientation="vertical" flexItem />
        <section className="lg:w-[70%] px-5">
          <h1 className="text-center font-semibold text-2xl py-10">
            Choose Details
          </h1>
          <div className="flex flex-wrap justify-between">
            {address.map((item) => (
              <AddressCard
                item={item}
                handleSelectAddress={createOrderUsingSelectedAddress}
                showButton={true}
              />
            ))}
            <Card className="flex space-x-5 lg:w-64 m-5 p-7 ">
              <AddLocationAlt />
              <div className="space-y-3 text-gray-500">
                <h1 className="font-semibold text-lg text-white">Home</h1>
                <p className="text-white">Add New Address</p>
                <Button
                  onClick={handleOpenAddressModal}
                  sx={{ padding: ".75rem" }}
                  fullWidth
                  variant="contained"
                >
                  Add
                </Button>
              </div>
            </Card>
          </div>
        </section>
      </main>
      <Modal open={OpenAddressModal} onClose={handleCloseAddressModal}>
        <Box sx={style}>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <Form>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Field
                    label="Street Address"
                    fullWidth
                    variant="outlined"
                    error={!ErrorMessage("street address")}
                    name="street Address"
                    as={TextField}
                    helperText={
                      <ErrorMessage name="streetAddress">
                        {(msg) => <span className="text-red-500">{msg}</span>}
                      </ErrorMessage>
                    }
                  />
                </Grid>
                <Grid item xs={6}>
                  <Field
                    label="State"
                    fullWidth
                    variant="outlined"
                    error={!ErrorMessage("state")}
                    name="state"
                    as={TextField}
                    helperText={
                      <ErrorMessage name="state">
                        {(msg) => <span className="text-red-500">{msg}</span>}
                      </ErrorMessage>
                    }
                  />
                </Grid>
                <Grid item xs={6}>
                  <Field
                    label="PinCode"
                    fullWidth
                    variant="outlined"
                    error={!ErrorMessage("pincode")}
                    name="pincode"
                    as={TextField}
                    helperText={
                      <ErrorMessage name="pincode">
                        {(msg) => <span className="text-red-500">{msg}</span>}
                      </ErrorMessage>
                    }
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field
                    label="City"
                    fullWidth
                    variant="outlined"
                    error={!ErrorMessage("city")}
                    name="city"
                    as={TextField}
                    helperText={
                      <ErrorMessage name="city">
                        {(msg) => <span className="text-red-500">{msg}</span>}
                      </ErrorMessage>
                    }
                  />
                </Grid>
                <Grid item xs={6}>
                <Button
                    sx={{
                      padding: ".85rem",
                    }}
                    fullWidth
                    type="Submit"
                    variant="contained"
                  >
                    Deliver Here
                  </Button>
                </Grid>
              </Grid>
            </Form>
          </Formik>
        </Box>
      </Modal>
    </Fragment>
  );
};

export default Cart;
