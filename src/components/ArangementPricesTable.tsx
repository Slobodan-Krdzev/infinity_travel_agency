import DefaultTheme from "@/styles/DefaultTheme";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

type ArangementPricesTableProps = {
  dates: string[];
  nights: number;
  prices: {
    prices: Array<number>;
    lastMinutePrices: Array<number>;
  };
};

const ArangementPricesTable = ({
  dates,
  nights,
  prices,
}: ArangementPricesTableProps) => {
  const price: any = prices.prices;
  const rows: any = [];

  for (let i = 0; i < dates.length; i++) {
    const rowElement = {
      date: dates[i],
      nights,
      price: price[i],
    };

    rows.push(rowElement);
  }

  return (
    <>
      <TableContainer
        component={Paper}
        sx={{
          marginBottom: "2rem",
        }}
      >
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead
            sx={{
              backgroundColor: DefaultTheme.palette.info.main,
            }}
          >
            <TableRow>
              <TableCell
                sx={{
                  fontSize: "0.8rem",
                  color: "white",
                }}
              >
                Слободни Дати
              </TableCell>
              <TableCell
                sx={{
                  fontSize: "0.8rem",
                  color: "white",
                }}
                align="right"
              >
                Цена за една ноќ
              </TableCell>
              <TableCell
                sx={{
                  fontSize: "0.8rem",
                  color: "white",
                }}
                align="right"
              >
                Времетраење на аранжман(ноќи)
              </TableCell>
              <TableCell
                sx={{
                  fontSize: "0.8rem",
                  color: "white",
                }}
                align="right"
              >
                Вкупна цена за цел аранжман
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row: any) => (
              <TableRow
                key={row.date}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell className="table-cell" component="th" scope="row">
                  {row.date}
                </TableCell>
                <TableCell className="table-cell" align="right">
                  {Math.floor(row.price / row.nights)} €
                </TableCell>
                <TableCell className="table-cell" align="right">
                  {row.nights}
                </TableCell>
                <TableCell className="table-cell" align="right">
                  {row.price} €
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default ArangementPricesTable;
