const Item = require("../models/items.model");
 
// TODO: complete the code as per the instructions given README.md
exports.create = (req, res) => {
    // Validate request
    // Bad request
    if (!req.body.itemname || !req.body.category || !req.body.price || !req.body.quantity) {
        res.status(400).send({ message: "Request Body can not be empty!" });
        return;
    }

    // Create an Item object
    const item = new Item({
        itemname: req.body.itemname,
        category: req.body.category,
        price: req.body.price,
        quantity: req.body.quantity
    });

    // Save Item in the database
    Item.create(item, (err, data) => {
        if (err)
            // Internal Server Error
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Item."
            });
        else res.status(201).send(data); // 201 Created status
    });
};

// Retrieve all Items from the database.
exports.findAll = (req, res) => {
    // Make the call to Model
    Item.getAll((err, data) => {
        // Process the results
        if (err)
            // Internal Server Error
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving items."
            });
        else res.status(200).send(data);
    });
};

// Find an item with an ID
exports.findByID = (req, res) => {
    Item.findById(req.params.itemId, (err, data) => {
        if (err){
            if (err.kind === "not_found"){
                res.status(404).send({
                    message: `Not found Item with id ${req.params.itemId}.`
                });
            } else {
                // Internal Server Error
                res.status(500).send({
                    message: "Error retrieving Item with id " + req.params.itemId
                });
            }
        } else res.status(200).send(data);

    }) ;
};

// Find an item with a name
exports.findByItemName = (req, res) => {
    Item.findByItemName(req.params.itemName, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found Item with itemname ${req.params.itemName}.`
                });
            } else {
                // Internal Server Error
                res.status(500).send({
                    message: "Error retrieving Item with itemname " + req.params.itemName
                });
            }
        } else res.status(200).send(data);
    });
};

// Update an Item by id in the request
exports.update = (req, res) => {
    // Validate Request
    if (!req.body) {
        // Bad Request
        res.status(400).send({
            message: "Request Body can not be empty!"
        });
        return;
    }

    Item.updateById(
        req.params.itemId,
        new Item(req.body),
        (err, data) => {
            if (err) {
                if (err.kind === "not_found") {
                    res.status(404).send({
                        message: `Not found Item with id ${req.params.itemId}.`
                    });
                } else {
                    // Internal Server Error
                    res.status(500).send({
                        message: "Error updating Item with id " + req.params.itemId
                    });
                }
            } else res.status(200).send(data);
        }
    );
};

// Delete an Item by id in the request
exports.delete = (req, res) => {
    Item.delete(req.params.itemId, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found Item with id ${req.params.itemId}.`
                });
            } else {
                // Internal Server Error
                res.status(500).send({
                    message: "Can not delete Item with id " + req.params.itemId
                });
            }
        } else res.status(204).send({ message: `Item was deleted successfully!` }); // No content status
    })
};

// Delete all Items
exports.deleteAll = (req, res) => {
    Item.deleteAll((err, data) => {
        if (err){
            res.status(500).send({
                message: err.message || "Some error occurred while deleting all items."
            });
        } else res.status(204).send({ message: `All Items have been deleted successfully!` }); // No content status
    });
};