"use client";
import React from 'react';
import { FaPlus, FaTrash } from 'react-icons/fa';
import styles from '@/app/ui/dashboard/quotations/addQuotation/addQuotation.module.css';
import { addQuotation } from '@/app/lib/actions';

const AddQuotationPage = () => {
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
      clientName: event.target.clientName.value,
      projectName: event.target.projectName.value,
      projectLA: event.target.projectLA.value,
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
      note: event.target.note.value,
      excluding: event.target.excluding.value,
    };

    await addQuotation(formData);
    // Handle response or redirect as needed
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className={styles.container}>
          <div className={styles.form1}>
            <input type='text' name='clientName' className={styles.input} placeholder='Client Name' />
            <input type='text' name='projectName' className={styles.input} placeholder='Project Name' />
            <input type='text' name='projectLA' className={styles.input} placeholder='Project Location Address' />
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
            <textarea type='text' name='paymentTerm' className={styles.input} placeholder='Payment Term' />
            <textarea type='text' name='paymentDelivery' className={styles.input} placeholder='Payment Delivery' />
            <textarea type='text' name='note' className={styles.input} placeholder='Note' />
            <textarea type='text' name='excluding' className={styles.input} placeholder='Excluding' />
            <button type="submit">Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddQuotationPage;
