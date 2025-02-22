function InvoiceForm() {
  return (
    <>
      <div>
        <form action="">
          <div>
            <label htmlFor="qty">Qty</label>
            <input type="text" id="qty" />
          </div>
          <div>
            <label htmlFor="price">Price</label>
            <input type="text" id="price" />
          </div>
          <div>
            <label htmlFor="dis">Discount %</label>
            <input type="text" id="dis" />
          </div>
          <div>
            <label htmlFor="disc">Discount </label>
            <input type="text" id="disc" />
          </div>
          <div>
            <label htmlFor="ta">Tax % </label>
            <input type="text" id="ta" />
          </div>
          <div>
            <label htmlFor="tax">Tax </label>
            <input type="text" id="tax" />
          </div>
          <div>
            <label htmlFor="total">Total Price </label>
            <input type="text" id="total" />
          </div>
          <div>
            <button>Add invoice/ Update invoice</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default InvoiceForm;
