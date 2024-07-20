import { sequelize, Transaction } from "./models.js";

const express = require("express");
const cors = require("cors");

const app = express();
//app.use(bodyParser.json());
app.use(cors());

const PORT = process.env.PORT || 3000;
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/transactions", async (req, res) => {
  try {
    const transactions = await Transaction.findAll();
    res.json(transactions);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve transactions" });
  }
});
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Endpoint do pobierania wszystkich transakcji
//app.get("/api/transactions", async (req, res) => {
//  try {
//    const transactions = await Transaction.findAll();
//    res.json(transactions);
//  } catch (error) {
//    res.status(500).json({ error: error.message });
//  }
//});
//
//// Endpoint do tworzenia nowej transakcji
//app.post("/api/transactions", async (req, res) => {
//  try {
//    const { description, amount } = req.body;
//    const transaction = await Transaction.create({ description, amount });
//    res.json(transaction);
//  } catch (error) {
//    res.status(500).json({ error: error.message });
//  }
//});
//
//// Endpoint do aktualizacji transakcji
//app.put("/api/transactions/:id", async (req, res) => {
//  try {
//    const { id } = req.params;
//    const { description, amount } = req.body;
//    await Transaction.update({ description, amount }, { where: { id } });
//    const updatedTransaction = await Transaction.findByPk(id);
//    res.json(updatedTransaction);
//  } catch (error) {
//    res.status(500).json({ error: error.message });
//  }
//});
//
//// Endpoint do usuwania transakcji
//app.delete("/api/transactions/:id", async (req, res) => {
//  try {
//    const { id } = req.params;
//    await Transaction.destroy({ where: { id } });
//    res.json({ message: "Transaction deleted" });
//  } catch (error) {
//    res.status(500).json({ error: error.message });
//  }
//});
//
//// Serwowanie statycznych plików frontendu, w react niepotrzebne
//app.use(express.static("public"));
//
//// Uruchomienie serwera
//const PORT = process.env.PORT || 3000;
//app.listen(PORT, () => {
//  console.log(`Server is running on port ${PORT}`);
//});
