import { useState, useRef } from "react";
import ReactToPrint from "react-to-print";
import ClientDetails from "./component/ClientDetails";
import Dates from "./component/Dates";
import Footer from "./component/Footer";
import Header from "./component/Header";
import MainDetails from "./component/MainDetails";
import Table from "./component/Table";
import TableForm from "./component/TableForm";

function App() {
  const [showInvoice, setShowInvoice] = useState(false);
  const [invoiceNumber, setInvoiceNumber] = useState("");
  const [invoiceDate, setInvoiceDate] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [clientName, setClientName] = useState("");
  const [clientAddress, setClientAddress] = useState("");
  const [productName, setProductName] = useState("");
  const [unitPrice, setUnitPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [total, setTotal] = useState("");
  const [list, setList] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  const componentRef = useRef(); //Print Function



  return (
    <>
      <main className="m-5 p-5 xl:max-w-4xl xl:mx-auto bg-white rounded shadow">
        {showInvoice && (
          <ReactToPrint
            trigger={() => (
              <button className="bg-blue-500 mb-5 text-white font-bold py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all-duration-300">
                Print/Download
              </button>
            )}
            content={() => componentRef.current}
          />
        )}

        {showInvoice ? (
          <div ref={componentRef} className="p-5">
            <Header />
            <MainDetails />
            <ClientDetails
              clientName={clientName}
              clientAddress={clientAddress}
              invoiceDate={invoiceDate}
            />
            <Dates
              invoiceNumber={invoiceNumber}
              invoiceDate={invoiceDate}
              dueDate={dueDate}
            />
            <br />
            <br />
            <Table
              productName={productName}
              unitPrice={unitPrice}
              quantity={quantity}
              total={total}
              list={list}
              totalAmount={totalAmount}
              setTotalAmount={setTotalAmount}
            />
            <Footer />
          </div>
        ) : (
          <div className="flex flex-col justify-center">
            <label htmlFor="clientName" className="font-bold">
              Enter Client's Name:
            </label>
            <input
              type="text"
              name="clientName"
              id="clientName"
              value={clientName}
              placeholder="Enter Client's Name"
              autoComplete="off"
              required
              onChange={(e) => setClientName(e.target.value)}
            />

            <label htmlFor="clientAddress" className="font-bold">
              Enter Client's Address:
            </label>
            <input
              type="text"
              name="clientAddress"
              id="clientAddress"
              value={clientAddress}
              placeholder="Enter Client's Address"
              autoComplete="off"
              required
              onChange={(e) => setClientAddress(e.target.value)}
            />

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "150px auto",
                columnGap: "10px",
                marginTop: "30px",
                marginBottom: "30px",
              }}
            >
              <label htmlFor="invoiceNumber" className="font-bold">
                Invoice Number:
              </label>
              <input
                type="text"
                name="invoiceNumber"
                id="invoiceNumber"
                value={invoiceNumber}
                placeholder="Enter Invoice Number"
                autoComplete="off"
                required
                onChange={(e) => setInvoiceNumber(e.target.value)}
              />

              <label htmlFor="invoiceDate" className="font-bold">
                Invoice Date:
              </label>
              <input
                type="date"
                name="invoiceDate"
                id="invoiceDate"
                value={invoiceDate}
                placeholder="Enter Invoice Date"
                autoComplete="off"
                required
                onChange={(e) => setInvoiceDate(e.target.value)}
              />

              <label htmlFor="dueDate" className="font-bold">
                Due Date:
              </label>
              <input
                type="date"
                name="dueDate"
                id="dueDate"
                value={dueDate}
                placeholder="Enter Due Date"
                autoComplete="off"
                required
                onChange={(e) => setDueDate(e.target.value)}
              />
            </div>

            <article>
              <TableForm
                productName={productName}
                setProductName={setProductName}
                unitPrice={unitPrice}
                setUnitPrice={setUnitPrice}
                quantity={quantity}
                setQuantity={setQuantity}
                total={total}
                setTotal={setTotal}
                list={list}
                setList={setList}
                totalAmount={totalAmount}
                setTotalAmount={setTotalAmount}
              />
            </article>

            <button
              onClick={() => setShowInvoice(true)}
              className="bg-blue-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all-duration-300"
            >
              Preview Invoice
            </button>
          </div>
        )}

        {/* Conditionally render Edit Invoice button */}
        {showInvoice && (
          <button
            onClick={() => setShowInvoice(false)}
            className="mt-5 bg-blue-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all-duration-300"
          >
            Edit Invoice
          </button>
        )}
      </main>
    </>
  );
}

export default App;
