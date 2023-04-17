import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useCart } from "../../contexts/CartContexProvider";
import { Button } from "@mui/material";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

export default function Cart() {
  const { getCart, cart, changeProductCount, deleteCartProduct } = useCart();

  React.useEffect(() => {
    getCart();
  }, []);

  const cartCleaner = () => {
    localStorage.removeItem("cart");
    getCart();
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Picture</TableCell>
            <TableCell align="right">Title</TableCell>
            <TableCell align="right">Category</TableCell>
            <TableCell align="right">Owner</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Count</TableCell>
            <TableCell align="right">SubPrice</TableCell>
            <TableCell align="right">-</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cart?.products.map((row) => (
            <TableRow
              key={row.item.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <img src={row.item.images} width="100" height="100" alt="" />
              </TableCell>
              <TableCell align="right">{row.item.title}</TableCell>
              <TableCell align="right">{row.item.category_name}</TableCell>
              <TableCell align="right">{row.item.owner_username}</TableCell>
              <TableCell align="right">{row.item.price}</TableCell>
              <TableCell align="right">
                <input
                  type="number"
                  min={1}
                  max={100}
                  onChange={(e) =>
                    changeProductCount(e.target.value, row.item.id)
                  }
                  value={row.count}
                />
              </TableCell>
              <TableCell align="right">{row.subPrice}</TableCell>
              <TableCell align="right">
                <Button onClick={() => deleteCartProduct(row.item.id)}>
                  DELETE
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Button onClick={cartCleaner}>BUY NOW FOR {cart?.totalPrice} $</Button>
    </TableContainer>
  );
}
