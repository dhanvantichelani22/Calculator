import React, { useState } from 'react';

const ArithOperator = (event) => {
  let [num1,setNum1] = useState(0);
  let [num2,setNum2] = useState(0);
  // let [error, setError] = useState({Num1:"",Num2:""}); 
  // let [success, setSuccess] = useState("");
  let[addTotal,setaddTotal] = useState(num1+num2);
  let[substractTotal,setsubstractTotal] = useState(num1-num2);
  let[multipleTotal,setmultipleTotal] = useState(num1*num2);
  let[divideTotal,setdivideTotal] = useState(num1/num2);

  function addNum(event){
    event.preventDefault()
    // if(Num1 === "" || Num2 === ""){
    //   event.preventDefault()
    //   console.log("Error");
    // }
    setaddTotal(num1+num2);
  }
  function substractNum(){
    setsubstractTotal(num1-num2);
  }
  function multipleNum(){
    setmultipleTotal(num1*num2);
  }
  function divideNum(){
    setdivideTotal(num1/num2);
  }
  return (
    <div className='container'>
      <h2>React Calculator</h2>
      <input type="text" placeholder='Num 1' value={num1} onChange={e=>setNum1(+e.target.value)}/><br/>
      <input type="text" placeholder='Num 2' value={num2} onChange={e=>setNum2(+e.target.value)}/>
    <div className='OperateBtn'>
        <button  onClick={addNum} >+</button>
        <button onClick={substractNum}>-</button>
        <button onClick={multipleNum}>*</button>
        <button onClick={divideNum}>/</button>
        <h3>{addTotal}{substractTotal}{multipleTotal}{divideTotal}</h3>
        
    </div>
    </div>
  )
}

export default ArithOperator;