/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Box, Container, Grid, GridItem, Image } from "@chakra-ui/react";
import { useSelector} from "react-redux";
import ProductImage from "../images/image-product-1.png";
import { PaystackButton } from "react-paystack";
import { v4 as uuidv4 } from "uuid";


function Checkout1() {
  const publicKey = "pk_test_50b9ebff7b5710088d6d022b59dc8cde591366f4";
  // const publicKey = process.env.REACT_PAYSTACKAPI_KEY
  
  
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  //const [price, setPrice] = useState("");
  const [phone, setPhone] = useState("");
  

  const paystackButtonKey = uuidv4();

  const cart = useSelector((state) => state.carts);
  //console.log("Current count in Checkout:", cart.count);

  const subTotal = cart.price * 100 * cart.count;

  
  const amount = cart.price * 100;
  const currency = "GHS";

  const componentProps = {
    email,
    amount,
    currency,
    metadata: {
      name,
      phone,
    },
    publicKey,
    text: "Pay Now",
    onSuccess: () =>
      alert("Thanks for doing business with us! Come back soon!!"),
    onClose: () =>
      alert("Wait! You need this item, stick around a bit longer!!!!"),
  };

  return (
    <>
   
      <Container style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "20px",
          marginTop:"5rem"
        }}
        >
           <p className="fw-bold text-grey-50 " >Payment details</p>
           <span className="m-2">
              GHS{cart.price} x {cart.count} =
              <span className="text-black-90 fw-bold">
                {" "}
                GHS{subTotal / 100}.00
              </span>
            </span>
        <Grid 
          templateColumns={{ base: "1fr", md: "50% 45%" }}
          gap={10}
          bgColor={"white"}
          boxShadow={"lg"}
          maxW={1080}
          overflow={"hidden"}
          p={{ base: 5, lg: 10 }}
        >
          <GridItem>
            
            
            
               <div>
              <label style={{ marginBottom: "10px" }}>Name</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={{
                  margin: "0 0 10px 0",
                  padding: "8px",
                  border: "1px solid #ccc",
                  borderRadius: "5px",
                }}
              />
            </div>
            <div>
              <label style={{ marginBottom: "10px" }}>Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{
                  margin: "0 0 10px 0",
                  padding: "8px",
                  border: "1px solid #ccc",
                  borderRadius: "5px",
                }}
              />
            </div>
            <div >
              <label style={{ marginBottom: "10px" }}>Phone</label>
              <input
                value={phone}
                type="text"
                id="phone"
                onChange={(e) => setPhone(e.target.value)}
                style={{
                  margin: "0 0 10px 0",
                  padding: "8px",
                  border: "1px solid #ccc",
                  borderRadius: "5px",
                }}
              />
            </div>
            

           
          </GridItem>
          <GridItem order={"-1"}>
            <Image src={ProductImage} alt="/" rounded={"lg"}  maxWidth="100%"
              maxHeight="400px"/>
            
          </GridItem>
          <PaystackButton key={paystackButtonKey} {...componentProps} />
        </Grid>
      </Container>
    </>
  );
}

export default Checkout1;