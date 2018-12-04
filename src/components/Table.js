import React from 'react'
import Item from './Item'

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const MaterialTable = props => {
    const { items } = props
    return (
        <Paper>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Year</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Country</TableCell>
                        <TableCell>Denomination</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {console.log(items)}
                    {items.map((item, i) => (
                        <TableRow key={i}>
                            <Item year={item.year} name={item.name} country={item.country} denomination={item.denomination} />
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Paper>
    )
}

export default MaterialTable