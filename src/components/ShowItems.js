// import React from 'react'
// import Item from './Item'

// // import { withStyles } from '@material-ui/core/styles';
// import Table from '@material-ui/core/Table';
// import TableBody from '@material-ui/core/TableBody';
// import TableCell from '@material-ui/core/TableCell';
// import TableHead from '@material-ui/core/TableHead';
// import TableRow from '@material-ui/core/TableRow';
// import Paper from '@material-ui/core/Paper';

// const ShowItems = props => {
//     const { items/* , removeTodo */ } = props
//     return (
//         <Paper>
//             <Table>
//                 <TableHead>
//                     <TableRow>
//                         <TableCell>Year</TableCell>
//                         <TableCell>Name</TableCell>
//                         <TableCell>Country</TableCell>
//                         <TableCell>Denomination</TableCell>
//                     </TableRow>
//                 </TableHead>
//                 <TableBody>
//                     {items.map((item, i) => (
//                         <TableRow index={i} key={i}>
//                             <Item index={i} key={i} year={item.year} name={item.name} country={item.country} denomination={item.denomination} />
//                         </TableRow>
//                     ))}
//                 </TableBody>
//             </Table>
//         </Paper>
//         /* <Item removeTodo={removeTodo} description={todo} index={i} key={i} /> */
//     )
// }

// export default ShowItems