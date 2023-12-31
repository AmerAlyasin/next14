const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  productCode: String,
  unitPrice: Number,
  unit: String,
  qty: Number,
  description: String,
});

const QuotationSchema = new mongoose.Schema({
  clientName: String,
  projectName: String,
  projectLA: String,
  paymentTerm: String,
  paymentDelivery: String,
  note: String,
  excluding: String,
  products: [ProductSchema],
});

module.exports = mongoose.model('Quotation', QuotationSchema);
