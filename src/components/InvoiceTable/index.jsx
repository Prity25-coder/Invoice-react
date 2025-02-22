import { Button } from "@mui/material";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { useState } from "react";

function InvoiceTable() {
  const [invoices, setInvoices] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <>
      <div>
        <Button
          className=""
          variant="contained"
          color="primary"
        >
          Add New Invoice
        </Button>

        <Paper sx={{ width: "100%", overflow: "hidden" }}>
          <TableContainer sx={{ maxHeight: 440 }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  <TableCell>Qty</TableCell>
                  <TableCell>Price</TableCell>
                  <TableCell>Discount %</TableCell>
                  <TableCell>Discount</TableCell>
                  <TableCell>Tax %</TableCell>
                  <TableCell>Tax</TableCell>
                  <TableCell>Total</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {invoices
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((inv, index) => {
                    return (
                      <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                        <TableCell>{inv.qty}</TableCell>
                        <TableCell>{inv.price}</TableCell>
                        <TableCell>{inv.discountPercent}</TableCell>
                        <TableCell>{inv.discount.toFixed(2)}</TableCell>
                        <TableCell>{inv.taxPercent}</TableCell>
                        <TableCell>{inv.tax.toFixed(2)}</TableCell>
                        <TableCell>{inv.total.toFixed(2)}</TableCell>
                        <TableCell>
                          <Button
                            variant="contained"
                            color="secondary"
                            aria-label="edit"
                          >
                            Edit
                          </Button>
                        </TableCell>
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={invoices.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      </div>
    </>
  );
}

export default InvoiceTable;
