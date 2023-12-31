 import { connectToDB } from "./utils";

 import { User, Client, Supplier, PurchaseOrder, Quotation } from "@/app/lib/models";


export const fetchUsers = async (q, page) => {

    const regex = new RegExp(q, "i");
    const ITEM_PER_PAGE = 5;
    try {
          connectToDB()
        const count = await User.find({ username: { $regex: regex } }).count();
        const users = await User.find({ username: { $regex: regex } }).limit(ITEM_PER_PAGE).skip(ITEM_PER_PAGE * (page - 1));
        return { count, users };
    } catch (err) {
        console.log(err);
        throw new Error('Failed to fetch Users!')
    }
  
  };
  
  export const fetchUser = async (id) => {
    try {
            connectToDB()
        const user = await User.findById(id)
        return user
  
    } catch (err) {
        console.log(err);
        throw new Error('Failed to fetch User!')
    }
  
  };
  
  
  export const fetchClients = async (q, page) => {
    const regex = new RegExp(q, "i");
    const ITEM_PER_PAGE = 5;
  
    try {
             connectToDB()
        const count = await Client.find({ name: { $regex: regex } }).count();
        const clients = await Client.find({ name: { $regex: regex } }).limit(ITEM_PER_PAGE).skip(ITEM_PER_PAGE * (page - 1));
        return { count, clients };
    } catch (err) {
        console.log(err);
        throw new Error('Failed to fetch Clients!')
    }
  };
  
  export const fetchClient = async (id) => {
    try {
           connectToDB()
        const client = await Client.findById(id)
        return client
    } catch (err) {
        console.log(err);
        throw new Error('Failed to fetch Client!')
    }
  
  };
  
  export const fetchQuotations = async (q, page) => {
    const regex = new RegExp(q, "i");
    const ITEM_PER_PAGE = 5;
  
    try {
        connectToDB()
        const count = await Quotation.find({ clientName: { $regex: regex } }).count();
        const quotations = await Quotation.find({ clientName: { $regex: regex } }).limit(ITEM_PER_PAGE).skip(ITEM_PER_PAGE * (page - 1));
        return { count, quotations };
    } catch (err) {
        console.log(err);
        throw new Error(err)
    }
  };
  
  export const fetchQuotation = async (id) => {
    try {
           connectToDB();
        const quotation = await Quotation.findById(id);
  
        if (!quotation) {
            // Handle the case where the quotation is not found
            throw new Error('Quotation not found');
        }
        return quotation;
    } catch (err) {
        console.error(err);
        throw new Error('Failed to fetch Quotation!');
    }
  };
  
  
  export const fetchSuppliers = async (q, page) => {
    const regex = new RegExp(q, "i");
    const ITEM_PER_PAGE = 5;
  
    try {
        connectToDB()
        const count = await Supplier.find({ name: { $regex: regex } }).count();
        const suppliers = await Supplier.find({ name: { $regex: regex } }).limit(ITEM_PER_PAGE).skip(ITEM_PER_PAGE * (page - 1));
        return { count, suppliers };
    } catch (err) {
        console.log(err);
        throw new Error('Failed to fetch Suppliers!')
    }
  };
  
  export const fetchSupplier = async (id) => {
    try {
       connectToDB()
        const supplier = await Supplier.findById(id)
        return supplier
    } catch (err) {
        console.log(err);
        throw new Error('Failed to fetch Supplier!')
    }
  
  };
  
  export const fetchPurchaseOrders = async (q, page) => {
    const regex = new RegExp(q, "i");
    const ITEM_PER_PAGE = 5;
  
    try {
         connectToDB()
        const count = await PurchaseOrder.find({ supplierName: { $regex: regex } }).count();
        const purchaseOrders = await PurchaseOrder.find({ supplierName: { $regex: regex } }).limit(ITEM_PER_PAGE).skip(ITEM_PER_PAGE * (page - 1));
        console.log("purchase:", purchaseOrders)
        return { count, purchaseOrders };
    } catch (err) {
        console.log(err);
        throw new Error('Failed to fetch PO!')
    }
  };
  
  export const fetchPurchaseOrder = async (id) => {
    try {
         connectToDB()
        const purchaseOrder = await PurchaseOrder.findById(id)
        return purchaseOrder
    } catch (err) {
        console.log(err);
        throw new Error('Failed to fetch Purchase!')
    }
  
  };
