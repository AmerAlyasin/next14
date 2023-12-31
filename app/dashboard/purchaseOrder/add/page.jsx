"use client";
import React from 'react';
import { FaPlus, FaTrash } from 'react-icons/fa';
import styles from '@/app/ui/dashboard/quotations/addQuotation/addQuotation.module.css';
import {addPurchaseOrder} from '@/app/lib/actions';

const AddPurchaseOrder = () => {
  const [rows, setRows] = React.useState([{ number: 1 }]); 

  const addRow = () => {
    const newRow = { number: rows.length + 1 };
    setRows([...rows, newRow]);
  };

  const deleteRow = (index) => {
    const updatedRows = rows.filter((_, i) => i !== index);
    const updatedRowsWithNumbers = updatedRows.map((row, i) => ({ ...row, number: i + 1 }));
    setRows(updatedRowsWithNumbers);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = {
      supplierName: event.target.supplierName.value,
      quotationNumber: event.target.quotationNumber.value,
      quotationDate: event.target.quotationDate.value,
      products: rows.map((row, index) => ({
        number: index + 1,
        productCode: event.target[`productCode${index}`].value,
        unitPrice: event.target[`unitPrice${index}`].value,
        unit: event.target[`unit${index}`].value,
        qty: event.target[`qty${index}`].value,
        description: event.target[`description${index}`].value,
})),
      paymentTerm: event.target.paymentTerm.value,
      paymentDelivery: event.target.paymentDelivery.value,
      location: event.target.location.value,
      note: event.target.note.value,
    };

    await addPurchaseOrder(formData);
    // Handle response or redirect as needed
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className={styles.container}>
          <div className={styles.form1}>
            <input type='text' name='supplierName' className={styles.input} placeholder='supplierName' />
            <input type='number' name='quotationNumber' className={styles.input} placeholder='quotationNumber' />
            <input type='text' name='quotationDate' className={styles.input} placeholder='quotationDate' />
          </div>
        </div>

        <div className={styles.container}>
          <div className={styles.form2}>
            <p className={styles.title}>Products</p>
            <table className={styles.table}>
              <thead>
                <tr>
                  <td>Number</td>
                  <td>Product Code</td>
                  <td>Unit Price</td>
                  <td>Unit</td>
                  <td>Qty</td>
                  <td>Description</td>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, index) => (
                  <tr key={index} className={styles.row}>
                    <td>
                      <input
                        className={`${styles.input} ${styles.numberInput}`}
                        type="text"
                        value={row.number}
                        readOnly
                      />
                    </td>
                    <td><input type='text' name={`productCode${index}`} className={styles.input1} /></td>
                    <td><input type='number' name={`unitPrice${index}`} className={styles.input1} /></td>
                    <td><input type='number' name={`unit${index}`} className={styles.input1} /></td>
                    <td><input type='number' name={`qty${index}`} className={styles.input1} /></td>
                    <td><textarea name={`description${index}`} className={`${styles.input1} ${styles.textarea}`}></textarea></td>
                    <td>
                      {index === rows.length - 1 ? (
                        <button
                          type="button"
                          className={`${styles.iconButton} ${styles.addButton}`}
                          onClick={addRow}
                        >
                          <FaPlus />
                        </button>
                      ) : (
                        <button
                          type="button"
                          className={`${styles.iconButton} ${styles.deleteButton}`}
                          onClick={() => deleteRow(index)}
                        >
                          <FaTrash />
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className={styles.container}>
          <div className={styles.form1}>
            <input type='text' name='paymentTerm' className={styles.input} placeholder='Payment Term' />
            <input type='text' name='paymentDelivery' className={styles.input} placeholder='Payment Delivery' />
            <input type='text' name='location' className={styles.input} placeholder='Location' />
            <input type='text' name='note' className={styles.input} placeholder='Note' />
            <button type="submit">Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddPurchaseOrder;
