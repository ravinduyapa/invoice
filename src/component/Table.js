import React from 'react'

const Table = ({list,totalAmount}) => {
  return (
    <>
    {/* table of invoice form start */}
    <table width="100%" className='mb-10'>

       <thead>
            <tr className='bg-gray-100 mt-5'>
                <td className='font-bold'>Product Name</td>
                <td className='font-bold'>Unit Price</td>
                <td className='font-bold'>Quantity</td>
                <td className='font-bold'>Total</td>
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
                <td>{total}</td>
            </tr>
        </tbody>
            </React.Fragment>
          );
      })}
   </table>
   {/* table of invoice form end */}
   

   {/* Total amount of product in invoice page start */}
   <div>
    <h2 className='flex items-end justify-end mb-5 text-gray-800 text-4xl font-bold'>Rs. {totalAmount.toLocaleString()}</h2>
   </div>
   {/* Total amount of product in invoice page end */}
   </>
  )
}

export default Table