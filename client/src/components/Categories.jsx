import {
  Button,
  makeStyles,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@material-ui/core";

import { categories } from "../constants/data";

const useStyles = makeStyles({
  create: {
    margin: 20,
    background: "#6495ed",
    color: "#fff",
    width: "86%",
  },
  table: {
    border: "1px solid rgba(224,224,224,1)",
  },
});

const Categories = () => {
  const classes = useStyles();
  return (
    <>
      <Button variant="contained" className={classes.create}>
        CREATE A BLOG
      </Button>

      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>All Categories</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {categories.map((category) => (
            <TableRow>
              <TableCell>{category}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};

export default Categories;
