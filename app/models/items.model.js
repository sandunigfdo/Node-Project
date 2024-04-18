const db = require("./db");

// TODO: complete the code as per the instructions given README.md

// Define the constructor function for the item model
const Item = function(item) {
    this.itemname = item.itemname;
    this.category = item.category;
    this.price = item.price;
    this.quantity = item.quantity;
};

// Create items
Item.create = (newItem, result) => {
    db.query ("INSERT INTO items SET ?", newItem, (err, res) => {
        if (err) {
            console.error("error: ", err);
            result(err, null);
            return;
        }

        console.log("created item: ", { id: res.insertId, ...newItem });
        result(null, { id: res.insertId, ...newItem });
    });
};

// Retrieve All items
Item.getAll = result => {
    db.query("SELECT * FROM items", (err, res) => {
        if (err) {
            console.error("error: ", err);
            result(null, err);
            return;
        }

        console.log("items: ", res);
        result(null, res);
    });
};

// Retrieve items by ID
Item.findById = (itemId, result) => {
    db.query(`SELECT * FROM items WHERE id = ${itemId}`, (err, res) => {
        if (err) {
            console.error("error: ", err);
            result(err, null);
            return;
        }

        if (res.length) {
            console.log("found item: ", res[0]);
            result(null, res[0]);
            return;
        }

        // Item with the specified id not found
        result({ kind: "not_found" }, null);
    });
};

// Retrieve items by itemname
Item.findByItemName = (itemName, result) => {
    db.query(`SELECT * FROM items WHERE itemname = ${itemName}`, (err, res) => {
        if (err) {
            console.error("error: ", err);
            result(err, null);
            return;
        }

        if (res.length) {
            console.log("found item: ", res[0]);
            result(null, res[0]);
            return;
        }

        // Item with the specified id not found
        result({ kind: "not_found" }, null);
    });
};

// Update items by ID
Item.updateById = (id, item, result) => {
    db.query(
        `UPDATE items SET itemname = ?, category = ?, price = ?, quantity = ? WHERE id = ?`,
        [item.itemname, item.category, item.price, item.quantity, id],
        (err, res) => {
            if (err) {
                console.error("error: ", err);
                result(null, err);
                return;
            }

            if (res.affectedRows == 0) {
                // Item with the specified id not found
                result({ kind: "not_found" }, null);
                return;
            }

            console.log("updated item: ", { id: id, ...item });
            result(null, { id: id, ...item });
        }
    );
};

// Delete items by ID
Item.delete = (id, result) => {
    db.query(`DELETE FROM items WHERE id = ?`, id, (err, res) => {
        if (err){
            console.error("error: ", err);
            result(null, err);
            return;
        }
        if (res.affectedRows == 0) {
            // Item with the specified id is not found
            result({ kind: "not_found" }, null);
            return;
        }
        console.log("deleted item: ", id);
        result(null, res);
    });
};

// Delete all items
Item.deleteAll = (result) => {
    db.query(`DELETE FROM items`, (err, res) => {
        if (err){
            console.error("error: ", err);
            result(null, err);
            return;
        }
        console.log(`Deleted ${res.affectedRows} items `);
        result(null, res);
    });
};


module.exports = Item;