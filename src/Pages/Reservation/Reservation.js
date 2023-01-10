import React,{useState,useEffect} from 'react';
import axios from "axios";
import { useParams } from 'react-router';
import "./Reservation.css";
const Reservation = () => {
  const{id}=useParams();
  const [Ticket,setTicket]=useState([id]);
  const [category,setcategory]=useState(0);
  const [category_syntax,setcategory_syntax]=useState('');
  const [cvc,setcvc]=useState('');
  const [email,setemail]=useState('');
  const [number,setnumber]=useState('');
  const [expirationMonth,setexpirationMonth]=useState(0);
  const [expirationYear,setexpirationYear]=useState(0);
  const [matchNumber,setmatchNumber]=useState(0);
  const [price,setprice]=useState(0);
  const quantity=1;
 



const fetchTicket = async () => {
  const data = await axios.get(
    `http://localhost:5000/api/tickets/${id}`);

  console.log(data.data);
  setmatchNumber(data.data.match.matchNumber);
  setTicket(data.data);
}

useEffect(() => {
  window.scroll(0, 0);
  fetchTicket();
}, []);


const handleSubmit = async (e) =>{
  e.preventDefault();
  const card ={number,expirationMonth,expirationYear,cvc};
  const tickets={category,quantity,price};
  
  const finalticket={email,matchNumber,tickets,card};
  console.log(console.log());
    const { data } = await axios.post(
      "http://localhost:3001/api/reservation",finalticket
    );
  
  console.log(data);

}
const handleChange = selectedoption => {
  if (selectedoption.target.value === 'First Category') {
    setcategory(1);
    setprice(75);
  } else if (selectedoption.target.value === 'Secondary Category') {
    setcategory(2);
    setprice(125);
  } else {
    setcategory(3);
    setprice(195);

  }

}



  return (
<div className='create'>
  <h2>Kindly Fill the below data to pay for this match Ticket</h2>
  <form onSubmit={handleSubmit}>
    <label>Email:  </label>
    <input
    type='text'
    required
    value={email}
    onChange={(e) => setemail(e.target.value)}
    />
    <label> CARD NUMBER:  </label>
    <input
    type='text'
    required
    value={number}
    onChange={(e) => setnumber(e.target.value)}
    />
    <label> Expiration Month :  </label>
    <input
    type='number'
    required
    value={expirationMonth}
    onChange={(e) => setexpirationMonth(Number(e.target.value))}
    />
    <label> Expiration Year :  </label>
    <input
    type='number'
    required
    value={expirationYear}
    onChange={(e) => setexpirationYear(Number(e.target.value))}
    />
    <label> CVC :  </label>
    <input
    type='text'
    required
    value={cvc}
    onChange={(e) => setcvc(e.target.value)}
    />
    <label >Category  </label>
    <select onChange={handleChange}>
      <option value='First Category'>First Category</option>
      <option value='Secondary Category'>Secondary Category</option>
      <option value='Third Category'>Third Category</option>
    </select>
   <button onClick={handleSubmit}> submit </button>
  </form>
  
  </div>

  );
}

export default Reservation