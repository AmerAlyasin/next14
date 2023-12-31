"use client";
import React, { useState, useEffect } from 'react';
import { FaPlus, FaTrash } from 'react-icons/fa';
import styles from '@/app/ui/dashboard/quotations/addQuotation/addQuotation.module.css';
 import { fetchPurchaseOrder } from '@/app/lib/data';
import { updatePurchseOrder } from '@/app/lib/actions';

const SinglePurchaseOrder = async ({ params }) => {
  const router = useRouter();
  const { id } = router.query || params.id;
  const [purchaseOrder, setPurchaseOrder] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedPurchaseOrder = await fetchPurchaseOrder(id);
        console.log('Fetched Quotation:', fetchedPurchaseOrder);
        setPurchaseOrder(fetchedPurchaseOrder);
      } catch (error) {
        console.error('Error fetching quotation:', error);
      }
    };

    fetchData();
  }, [id]);

  const [formData, setFormData] = useState({
    supplierName: '',
    quotationNumber: '',
    quotationDate: '',
    products: [],
    paymentTerm: '',
    paymentDelivery: '',
    location: '',
    note: '',
    // ... add other fields as needed
  });

  useEffect(() => {
    if (purchaseOrder) {
      setFormData({
        supplierName: purchaseOrder.supplierName,
        quotationNumber: purchaseOrder.quotationNumber,
        quotationDate: purchaseOrder.quotationDate,
        products: purchaseOrder.products || [],
        paymentTerm: purchaseOrder.paymentTerm,
        paymentDelivery: purchaseOrder.paymentDelivery,
        location: purchaseOrder.location,
        note: purchaseOrder.note,
        // ... add other fields as needed
      });
    }
  }, [purchaseOrder]);
  const [rows, setRows] = useState([{ id: 1, number: 1 }]);

  const addRow = () => {
    const newRow = { id: rows.length + 1, number: rows.length + 1 };
    setRows([...rows, newRow]);
  };

  const deleteRow = (index) => {
    const updatedRows = rows.filter((_, i) => i !== index);
    const updatedRowsWithNumbers = updatedRows.map((row, i) => ({ ...row, number: i + 1 }));
    setRows(updatedRowsWithNumbers);
  };

  const handleRowInputChange = (index, fieldName, value) => {
    const updatedRows = rows.map((row, i) => {
      if (i === index) {
        return { ...row, [fieldName]: value };
      }
      return row;
    });
    setRows(updatedRows);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const rowInputs = rows.map((row) => ({
      productCode: row.productCode,
      unitPrice: row.unitPrice,
      unit: row.unit,
      qty: row.qty,
      description: row.description,
    }));

    // Assuming updateQuotation takes formData and rowInputs as arguments
    await updateQuotation({
      id,
      ...formData,
      products: rowInputs,
    });
  };

  const handleInputChange = (fieldName, value) => {
    setFormData({
      ...formData,
      [fieldName]: value,
    });
  };

  if (!purchaseOrder) {
    // Loading state or handle error if needed
    return <div>Loading...</div>;
  }


  
    return (
        <div>
          <form onSubmit={handleSubmit}>
        <div className={styles.container}>
          <div className={styles.form}>
            <input
              className={styles.input}
              placeholder={purchaseOrder.supplierName}
              value={formData.supplierName}
              onChange={(e) => handleInputChange('supplierName', e.target.value)}
            />
            <input
              className={styles.input}
              placeholder={purchaseOrder.quotationNumber}
              value={formData.quotationNumber}
              onChange={(e) => handleInputChange('quotationNumber', e.target.value)}
            />
            <input
              className={styles.input}
              placeholder={purchaseOrder.quotationDate}
              value={formData.quotationDate}
              onChange={(e) => handleInputChange('quotationDate', e.target.value)}
            />
          </div>
        </div>
        <div className={styles.container}>
          <div className={styles.form}>
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
            <tr key={row.id} className={styles.row}>
              <td>
                <input
                  className={`${styles.input} ${styles.numberInput}`}
                  type="text"
                  value={row.number}
                  readOnly
                />
              </td>
              <td>
                <input
                  className={styles.input1}
                  placeholder={purchaseOrder.productCode}
                  value={row.productCode}
                  onChange={(e) => handleRowInputChange(index, 'productCode', e.target.value)}
                />
              </td>
              <td>
                <input
                  className={styles.input1}
                  placeholder={purchaseOrder.unitPrice}
                  value={row.unitPrice}
                  onChange={(e) => handleRowInputChange(index, 'unitPrice', e.target.value)}
                />
              </td>
              <td>
                <input
                  className={styles.input1}
                  placeholder={purchaseOrder.unit}
                  value={row.unit}
                  onChange={(e) => handleRowInputChange(index, 'unit', e.target.value)}
                />
              </td>
              <td>
                <input
                  className={styles.input1}
                  placeholder={purchaseOrder.qty}
                  value={row.qty}
                  onChange={(e) => handleRowInputChange(index, 'qty', e.target.value)}
                />
              </td>
              <td>
                <textarea
                  className={`${styles.input1} ${styles.textarea}`}
                  placeholder={purchaseOrder.description}
                  value={row.description}
                  onChange={(e) => handleRowInputChange(index, 'description', e.target.value)}
                ></textarea>
              </td>
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
                         < div className={styles.container}>
                            <div className={styles.form}>
                              <input
                                className={styles.input}
                                placeholder={purchaseOrder.paymentTerm}
                                value={formData.paymentTerm}
                                onChange={(e) => handleInputChange('paymentTerm', e.target.value)}
                              />
                              <input
                                className={styles.input}
                                placeholder={purchaseOrder.paymentDelivery}
                                value={formData.paymentDelivery}
                                onChange={(e) => handleInputChange('paymentDelivery', e.target.value)}
                              />
                              <input
                                className={styles.input}
                                placeholder={purchaseOrder.location}
                                value={formData.note}
                                onChange={(e) => handleInputChange('location', e.target.value)}
                             />
                               <input
                                className={styles.input}
                                placeholder={purchaseOrder.note}
                                value={formData.note}
                                onChange={(e) => handleInputChange('note', e.target.value)}
                             />
                          </div>
                          <button type="submit">Submit</button>
                        </div>

                 </form>
             </div>
  );
};

export default SinglePurchaseOrder



