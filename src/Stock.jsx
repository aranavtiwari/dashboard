import React from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { AiOutlineSearch,AiOutlineCloudDownload } from "react-icons/ai";
const Stock = () => {
    function createData(
        name: string,
        received: string,
        fat: number,
        name_u: string,
        currency: string,
        amount: number,
        status: string
      ) {
        return { name, received, fat, name_u, currency, amount, status };
      }
      
      const rows = [
        createData('Frozen yoghurt', '02/08/2005', 6.0, 'Stive', 'USD', 400000, 'completed'),
        createData('Ice cream sandwich', '02/08/2005',3, 'March', 'USD',400000, 'completed'),
        createData('Eclair', '02/08/2005', 16.0, 'Lusi','EU', 400000, 'completed'),
        createData('Cupcake', '02/08/2005', 3.7,  'Sam','EU', 400000, 'completed'),
        createData('Gingerbread', '02/08/2005', 16.0, 'Dave','EU', 400000, 'completed'),
        createData('Cupcake','02/08/2005', 3.7, "karl", 'SGD', 400000, 'completed'),
        createData('Gingerbread','02/08/2005', 16.0, 'Yasu', 'SGD', 400000, 'completed'),
        createData('Cupcake','02/08/2005', 3.7, "Tesh", 'USD',400000, 'completed'),
        createData('Gingerbread','02/08/2005', 16.0, 'Uss', 'USD', 400000, 'completed'),

      ];
    return (
        <div className="stock">
            <h3>All Deposit Statement</h3>
            <div className="stock-search">
                <div className="search">
                <div class="search">
                    <input type="text" class="searchTerm" placeholder="What are you looking for?"/>
                    <button type="submit" class="searchButton">
                    <AiOutlineSearch/>
                     </button>
                </div>

                </div>
                <div className="filter"><AiOutlineCloudDownload/> Download</div>
            </div>
            <div>
            <TableContainer component={Paper}>
      <Table className="table-info-1" sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead className="table-info">
          <TableRow className="table-info">
            <TableCell className="table-info">Merchant Name</TableCell>
            <TableCell className="table-info" align="right">Received on</TableCell>
            <TableCell className="table-info" align="right">Refernce&nbsp;(ID)</TableCell>
            <TableCell className="table-info" align="right">Sender Name</TableCell>
            <TableCell className="table-info" align="right">Currency</TableCell>
            <TableCell className="table-info" align="right">Amount Received</TableCell>
            <TableCell className="table-info" align="right">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell  align="right">{row.received}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.name_u}</TableCell>
              <TableCell align="right">{row.currency}</TableCell>
              <TableCell align="right">{row.amount}</TableCell>
              <TableCell  align="right">
                  <div className="stat">
                  {row.status}
                      </div></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
        </div>
    )
}


export default Stock;