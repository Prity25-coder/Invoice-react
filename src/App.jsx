import "./App.css";
import InvoiceForm from "./components/InvoiceForm";
import InvoiceTable from "./components/InvoiceTable";

function App() {
  return (
    <>
      <div>
        <h1 className="text-3xl font-bold underline"> Invoice</h1>
        <InvoiceTable />
        <InvoiceForm />
      </div>
    </>
  );
}

export default App;
