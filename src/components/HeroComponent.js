
import React, { useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import ImageProduct1 from "../images/image-product-1-thumbnail.jpeg";
import {
  ShoppingCartOutlined,
  PlusOutlined,
  MinusOutlined,
  CloseCircleOutlined,
} from "@ant-design/icons";
import { Button, Modal, Space } from "antd";
import CartModal from "./CartModal";
import { increaseCart, decreaseCart, removeFromCart, clearCartItems } from "../slices/cartSlice";
//import { Link } from "react-router-dom";
//import MobileScreenSlide from "./MobileScreenSlide";
import LargeScreenSlide from "./LargeScreenSlide";
import { PaystackButton } from "react-paystack";
import { v4 as uuidv4 } from 'uuid';


const HeroSection = () => {
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const state = useSelector((state) => {
    return state.carts;
  });

 

  const iconStyle = {
    borderColor: "transparent",
    color: "orange",
    backgroundColor: "hsl(223, 64%, 98%)",
    _hover: {
      backgroundColor: "hsl(223, 64%, 98%)",
      color: "hsl(26, 100%, 55%)",
      width: "calc(100%/3)",
    },
  };

  const checkoutStyle = {
    backgroundColor: "hsl(26, 100%, 55%)",
    color: "hsl(0, 0%, 100%)",
    _hover: {
      backgroundColor: "hsl(26, 100%, 55%)",
      boxShadow: "lg",
    },
  };

  const countStyle = {
    borderInline: 0,
    backgroundColor: "hsl(223, 64%, 98%)",
    _hover: {
      backgroundColor: "hsl(223, 64%, 98%)",
      width: "calc(100%/4)",
    },
  };

  const showModal = () => {
    setOpen(true);
  };

  const handleOk = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 2000);
  };

  const handleCancel = () => {
    console.log("Clicked cancel button");
    setOpen(false);
  };

  const dispatch = useDispatch();

  const handleDecrease = () => {
    dispatch(decreaseCart());
  };

  const handleIncrease = () => {
    dispatch(increaseCart());
  };

  const handleAddtoCart = () => {
    if (state.count > 0) {
      showModal();
    }
  };

  const handleRemoveFromCart =() => {
    dispatch(removeFromCart())
  };

  const handleClearCartItems =() => {
    dispatch(clearCartItems())  
};

const handleCheckout = () => {
    // Navigate to the checkout page
    window.location.href = "/checkout";
   
  };

 

  

  const total =state.price*state.count;

  //const checkoutPath = "/checkout";

  const componentProps = {
    email: "user@example.com", // Replace with the customer's email address
    amount: total * 100, // Paystack expects the amount in kobo, so multiply by 100
    currency: "GHS", // Replace with your desired currency code
    metadata: {
      name: "John Doe", // Replace with the customer's name
      phone: "1234567890", // Replace with the customer's phone number
    },
    publicKey: "pk_test_50b9ebff7b5710088d6d022b59dc8cde591366f4", // Replace with your actual Paystack public key
    text: "Pay Now",
    onSuccess: () => {
      // Handle successful payment here, e.g., update order status, show success message, etc.
    },
    onClose: () => {
      // Handle when the Paystack modal is closed, e.g., redirect to a different page, show a message, etc.
    },
    onError: (error) => {
      // Handle payment error here, e.g., show error message, log errors, etc.
    },
  };


  return (
    <>
    
      <Container className="mt-5 pt-5 " style={{ maxWidth: 1080 }}>
      <Modal
        open={open}
        onCancel={handleCancel}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        title={`${state.count} item(s) added to Cart`}
        footer={[
        
            <Button
            key="proceed"
            backgroundColor={"hsl(26, 100%, 55%)"}
            colorScheme="whiteAlpha"
            _hover={{ backgroundColor: "hsl(26, 100%, 55%)" }}
           onClick={() => handleCheckout()}
          >
            Check out
          
           {/*<PaystackButton key="paystack-button"{...componentProps}/> */} 
        </Button>,
         
        ]}
      ><Button> <CloseCircleOutlined  onClick={()=>handleClearCartItems}/></Button>
       
        <hr />
        <CartModal productImage={ImageProduct1} />
      </Modal>
        <Row>
          <Col lg={6}>
            <LargeScreenSlide />
            {/*<MobileScreenSlide />*/}
          </Col>

          <Col lg={6} className="p-5">
            <small className="fs-5 fw-bold" style={{ color: "orange" }}>
              E-Ticket Center
            </small>
            <p className="fs-1 fw-bold">
              Detty December  Tickets
            </p>
            <p className="text-grey-50" style={{ width: "85%" }}>
              <small>
                Get your afrochella tickets here.
              </small>
            </p>
            <br />
            <div className="my-3 d-flex justify-content-between d-lg-block">
              <div className="d-flex flex-wrap gap-2">
                <span className="fw-bold fs-5">GHS 125.00</span>
                <small className="fw-bold rounded-2 px-2 align-self-center text-orange bg-orange-50">
                  50%
                </small>
              </div>
              <small className="d-block align-self-center text-decoration-line-through fw-semibold text-grey-30">
                Ghs 250.00
              </small>
            </div>
            <Space direction="vertical" className="d-md-flex gap-3">
              <Space
                wrap
                size="md"
                variant="outline"
                my={5}
                w={{ base: "full", lg: "45%" }}
              >
                <Button
                  aria-label="Decrease cart"
                  icon={<MinusOutlined style={iconStyle} />}
                  onClick={handleDecrease}
                />
                <Button style={countStyle}> {state.count}</Button>
                <Button
                  aria-label="Increase cart"
                  icon={<PlusOutlined style={iconStyle} />}
                  onClick={handleIncrease}
                />
              </Space>

              <Space wrap>
                <Button
                  style={checkoutStyle}
                  className="align-self-center"
                  px={10}
                  size={"md"}
                  w={{ base: "full", lg: "45%" }}
                  onClick={handleAddtoCart}
                >
                  {<ShoppingCartOutlined />}
                  <small className="ms-3">Add to Cart</small>
                </Button>
              </Space>
            </Space>
          </Col>
        </Row>
      </Container>

      
    </>
  );
};

export default HeroSection;