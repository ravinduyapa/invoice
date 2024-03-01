import React, { useState } from 'react'
import { useEffect, useCallback } from 'react'
import { v4 as uuidv4 } from 'uuid';


const TableForm = ({productName,setProductName,unitPrice,setUnitPrice ,quantity,setQuantity,total,setTotal,list,setList,totalAmount,setTotalAmount}) => {
    
    // Edit Product Function
    const[isedit,setIsEdit]=useState(false);
    const editRow=(id)=>{
        const editingRow=list.find((row)=>row.id===id)
        setList(list.filter((row)=>row.id !==id))
        setIsEdit(true)
        setProductName(editingRow.productName)
        setQuantity(editingRow.quantity)
        setUnitPrice(editingRow.unitPrice)

    }
    

    
    //Form Submit function 
    const handleSubmit=(e)=>{
        e.preventDefault()

        const newItems={
            id:uuidv4(),
            productName,
            quantity,
            unitPrice,
            total
        }
        setProductName("")
        setQuantity("")
        setUnitPrice("")
        setTotal("")
        setList([...list,newItems])
        setIsEdit(false)
    }

   

    // Delete Product function
    const deleteRow=(id)=>setList(list.filter((row)=>row.id !==id));

    
    
    //Calculate Total function 
    const calculateTotal = useCallback(() => {
        setTotal(quantity * unitPrice);
    }, [quantity, unitPrice, setTotal]);
    
    useEffect(() => {
        calculateTotal();
    }, [calculateTotal]);


    //Calculate total amount of product function
    const calculateTotalTable = useCallback(() => {
        let sum = 0;
        list.forEach(item => {
            sum += item.total;
        });
        setTotalAmount(sum);
    }, [list, setTotalAmount]);

    useEffect(() => {
        calculateTotalTable();
    }, [list, calculateTotalTable]);

    

  return (
    <>
    <form onSubmit={handleSubmit}>
        
    {/* input field in submit form product name,unit price,quantity & total start */}
    <div className='flex flex-col mt-10'>
        <label htmlFor="productName" className="font-bold">Product Name</label>
        <input 
        type="text"
        name='productName'
        id='productName'
        placeholder='Product Name'
        value={productName}
        onChange={(e)=>setProductName(e.target.value)} />
    </div>    

    <div className='md:grid grid-cols-3 gap-10 mb-10'>
        <div className='flex flex-col'>
            <label htmlFor="unitPrice" className="font-bold">Unit Price</label>
            <input 
            type="text"
            name='unitPrice'
            id='unitPrice'
            placeholder='Unit Price'
            value={unitPrice}
            onChange={(e)=>setUnitPrice(e.target.value)} />
        </div>    

        <div className='flex flex-col'>
            <label htmlFor="quantity" className="font-bold">Quantity</label>
            <input 
            type="text"
            name='quantity'
            id='quantity'
            placeholder='Quantity'
            value={quantity}
            onChange={(e)=>setQuantity(e.target.value)} />
        </div>

        <div className='flex flex-col'>
            <label htmlFor="total" className="font-bold">Total</label>
            <p>{total}</p>
        </div>
    </div>
    {/* input field in submit form product name,unit price,quantity & total end */}


     {/* submit button start */}
    <button
    type='submit' 
    className="mb-10 bg-blue-500 text-white font-bold py-2 px-8 rounded shadow border-2
                       border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all-duration-300">
                        {isedit ? "Edit Product" : "Add Product"}</button>
     {/* submit button end*/}

    </form>


    {/* Table Items start*/}
    <table width="100%" className='mb-10'>

       <thead>
            <tr className='bg-gray-100 mt-5'>
                <td className='font-bold'>Product Name</td>
                <td className='font-bold'>Unit Price</td>
                <td className='font-bold'>Quantity</td>
                <td className='font-bold' >Total</td>
            </tr>
        </thead>

    {list.map(({id,productName,quantity,unitPrice,total}) => {
        return (

            <React.Fragment key={id}>

        <tbody>
            <tr>
                <td>{productName}</td>
                <td>{unitPrice}</td>
                <td>{quantity}</td>
                <td >{total}</td>
                <td><button className='danger-button' onClick={()=>deleteRow(id)}>Delete</button></td>
                <td><button className='primary-button' onClick={()=>editRow(id)}>Edit</button></td>
            </tr>
        </tbody>
            </React.Fragment>
          );
      })}
   </table>
   {/* Table Item End */}

   
   {/* Total amount of product start */}
   <div>
    <h2 className='mb-5 text-gray-800 text-4xl font-bold'>Rs. {totalAmount.toLocaleString()}</h2>
   </div>
   {/* Total amount of product end */}

    </>
  )
}

export default TableForm