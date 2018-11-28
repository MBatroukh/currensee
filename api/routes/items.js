// const items = [{
//     year: "Test",
//     name: "Tester",
//     country: "Testing",
//     denomination: "Testing alot"
// },
// {
//     year: "Test",
//     name: "Tester",
//     country: "Testing",
//     denomination: "Testing alot"
// },];

// const express = require("express");
// const router = express.Router();

// // GET /items
// router.route("/").get((req, res) => {
//     // 1. Respond with the array of items
//     // THree different ways to check if call works
//     // browser, insomnia, or even make a call
//     res.status(200).send({
//         data: items
//     });
// });

// router.route("/").post((req, res) => {
//     // 1. Grab the new item from the request body
//     const item = req.body.item;
//     // 2. Push it into our item array
//     items.push(item);
//     // 3. Respond with the updated items array
//     res.status(201).send({
//         data: [item]
//     });
// });

// // DELETE /items/2
// router.route("/:index").delete((req, res) => {
//     // 1. Grab the item index from the query params.
//     // this is th sma as writing index = req.params.index
//     const { index } = req.params;

//     // 2. Splice the old item out of the items array
//     const deleteditem = items.splice(index, 1);

//     // 3. Respond with the updated list of items
//     res.status(202).send({
//         data: deleteditem
//     });
// });

// exports.router = router;
