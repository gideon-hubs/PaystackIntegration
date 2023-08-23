import {useState} from 'react'
import { PaystackButton } from 'react-paystack'
import {Center} from "@chakra-ui/react"
import { useSelector } from 'react-redux/es/hooks/useSelector'


const PaystackImplementation = () => {
  const publicKey = "pk_test_50b9ebff7b5710088d6d022b59dc8cde591366f4";
  //  const publicKey = process.env.REACT_PAYSTACKAPI_KEY;
  
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const  amount = useSelector((state) => state.price*state.count);

  const buttonProps = {
    email,
    amount:(amount*100),
    currency:"GHS",
    metadata: {
      name,
      phone,
    },
    publicKey,
    text: "Pay Now",
    onSuccess: () =>
      alert("Thanks for doing business with us! Come back soon!!"),
    onClose: () => alert("Wait!, don't go!!!!"),
  }

  return (
	<Center minH="100vh">
<div >
  <div >
    <p>GHS {amount}</p>
    <label>Name</label>
    <input
      type="text"
      id="name"
      value={name}
      onChange={(e) => setName(e.target.value)}
    />
  </div>
  <div >
    <label>Email</label>
    <input
      type="text"
      id="email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
    />
  </div>
  <div >
    <label>Phone</label>
    <input
    value={phone}
      type="text"
      id="phone"
      onChange={(e) => setPhone(e.target.value)}
    />
  </div>

  <PaystackButton key="paystack-button"  {...buttonProps} />
</div>
</Center>

  )
}

export default PaystackImplementation