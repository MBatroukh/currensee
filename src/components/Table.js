import React from 'react'
// import Item from './Item'

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const MaterialTable = props => {
    const { items, handleModalOpen } = props
    return (
        <Paper>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Year</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Country</TableCell>
                        <TableCell>Denomination</TableCell>
                        <TableCell></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {/* {console.log(items)} */}
                    {items.map((item, i) => (
                        <TableRow key={i}>
                            {/* <Item year={item.year} name={item.name} country={item.country} denomination={item.denomination} handleModalOpen={handleModalOpen} /> */}
                            <td>{item.year}</td>
                            <td>{item.name}</td>
                            <td>{item.country}</td>
                            <td>{item.denomination}</td>
                            <td><button onClick={() => handleModalOpen(item.year, item.name, item.country, item.denomination, item.measurement, item.weight, item.note)}>View</button></td>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Paper>
    )
}

export default MaterialTable