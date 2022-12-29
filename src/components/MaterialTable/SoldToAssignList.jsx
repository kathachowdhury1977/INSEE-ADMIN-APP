import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';

const columns = [
    { id: 'name', numeric: false, disablePadding: true, label: 'Account Name (EN)' },
    { id: 'accountname', numeric: true, disablePadding: false, label: 'Account Name (TH)' },
    { id: 'soldtonumber', numeric: true, disablePadding: false, label: 'Sold To Number' },
    { id: 'division', numeric: true, disablePadding: false, label: 'Division' },
    { id: 'accountgroup', numeric: true, disablePadding: false, label: 'Account Group' },
    { id: 'distributionchannel', numeric: true, disablePadding: false, label: 'Distribution Channel' },
    { id: 'addressnumber', numeric: true, disablePadding: false, label: 'Address Number' },
    { id: 'salesdistrictvalue', numeric: true, disablePadding: false, label: 'Sales District : Value' },
    { id: 'provincevalue', numeric: true, disablePadding: false, label: 'Province : Value' },
    { id: 'district', numeric: true, disablePadding: false, label: 'District : Value' },
    { id: 'soldtocontactnumber', numeric: true, disablePadding: false, label: 'Sold To Contact Number' },
    { id: 'soldtoemail', numeric: true, disablePadding: false, label: 'Sold To Email' },
    { id: 'accountnamelocal', numeric: true, disablePadding: false, label: 'Account Name Local' },
    { id: 'soldtocountrycode', numeric: true, disablePadding: false, label: 'Sold To Country Code' },
    { id: 'customerlatitude', numeric: true, disablePadding: false, label: 'Customer Latitude' },
    { id: 'customerlognitude', numeric: true, disablePadding: false, label: 'Customer Longnitude' },
    { id: 'customerimage', numeric: true, disablePadding: false, label: 'Customer Image' },
    { id: 'customerlogo', numeric: true, disablePadding: false, label: 'Customer Logo' },
    { id: 'customerterstatus', numeric: true, disablePadding: false, label: 'Customer Tier Status' },
    { id: 'creditlimit', numeric: true, disablePadding: false, label: 'Credit Limit' },
    { id: 'paymentterm', numeric: true, disablePadding: false, label: 'Payment Terms' },
    { id: 'creditcontrol', numeric: true, disablePadding: false, label: 'Credit Control Area Number' },
    { id: 'loyality', numeric: true, disablePadding: false, label: 'Loyality' },
    { id: 'customergroup', numeric: true, disablePadding: false, label: 'Customer Group' },
    { id: 'customergroupcode', numeric: true, disablePadding: false, label: 'Customer Group Code' },
    { id: 'legalfarm', numeric: true, disablePadding: false, label: 'Legal Farm Name' },
    { id: 'taxnumber', numeric: true, disablePadding: false, label: 'Tax Number' },
    { id: 'transporationzone', numeric: true, disablePadding: false, label: 'Transportation Zone' },
    { id: 'transporationzonecode', numeric: true, disablePadding: false, label: 'Transportation Zone Code' },
    { id: 'shipoingcondition', numeric: true, disablePadding: false, label: 'Shipping Condition' },
    { id: 'shippingconditioncode', numeric: true, disablePadding: false, label: 'Shipping Condition Code' },
    { id: 'salesemployeename', numeric: true, disablePadding: false, label: 'Sales Employee Name' },
    { id: 'codeofEmployee', numeric: true, disablePadding: false, label: 'Code of Employee' },
    { id: 'salesemployeeemail', numeric: true, disablePadding: false, label: 'Sales Employee Email' },
    { id: 'phonenumber', numeric: true, disablePadding: false, label: 'Phone Number' },
    { id: 'salesorganization', numeric: true, disablePadding: false, label: 'Sales Organization' },
    { id: 'beats', numeric: true, disablePadding: false, label: 'Beats' },
    { id: 'customercategory', numeric: true, disablePadding: false, label: 'Customer Category' },
    { id: 'salesgroup', numeric: true, disablePadding: false, label: 'Sales Group' },
    { id: 'salesoffice', numeric: true, disablePadding: false, label: 'Sales Office' },
    { id: 'postalcodevalue', numeric: true, disablePadding: false, label: 'Postal Code Value' },
    { id: 'soldtoprovince', numeric: true, disablePadding: false, label: 'Sold To province' },
    { id: 'salesarealist', numeric: true, disablePadding: false, label: 'Sales Area List' },
    { id: 'companylist', numeric: true, disablePadding: false, label: 'Company List' },
];

function createData(name, code, population, size) {
  const density = population / size;
  return { name, code, population, size, density };
}

const rows = [
  createData('India', 'IN', 'divison', 'skuid', 'category', 'subcategory',''),
  createData('China', 'CN', 'divison', 'skuid', 'category', 'subcategory',''),
  createData('Italy', 'IT', 'divison', 'skuid','category','subcategory',''),
  createData('United States', 'divison', 'skuid','category','subcategory',''),
  createData('Canada', 'divison', 'skuid', 'category', 'subcategory',''),
];

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 440,
  },
});

export default function SoldToAssignList() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {column.format && typeof value === 'number' ? column.format(value) : value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
