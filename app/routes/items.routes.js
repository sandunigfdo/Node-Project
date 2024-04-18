module.exports = app => {
  const items = require("../controllers/items.controller"); 

  //   Create a new Item
  app.post("/items", items.create);

  //  Retrieve all Items
  app.get("/items", items.findAll);

  //  Retrieve a single Item by itemId
  app.get("/items/:itemId", items.findByID);

  //  Retrieve a single Item by itemName
  app.get("/items/byname/:itemName", items.findByItemName);

  //   Update an Item by itemId
  app.put("/items/:itemId", items.update);

  // Delete an Item by itemId
  app.delete("/items/:itemId", items.delete);

 //  Delete all Items
 app.delete("/items", items.deleteAll);

};
