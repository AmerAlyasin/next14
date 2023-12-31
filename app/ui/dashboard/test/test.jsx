'use client'
import React, { useEffect } from 'react'

async function Test({ data}) {
    // const Quotation = await fetchQuotation(id);
    // const { id } = params;
    //  const supplier = await fetchQuotation(id);
    // const router = useRouter();
    // const { id } = router.query || params.id;
    // const [quotation, setQuotation] = useState(null);

    // useEffect(() => {
    //   const fetchData = async () => {
    //     try {
    //       const fetchedQuotation = await fetchQuotation(id);
    //       console.log('Fetched Quotation:', fetchedQuotation);
    //       setQuotation(fetchedQuotation);
    //     } catch (error) {
    //       console.error('Error fetching quotation:', error);
    //     }
    //   };

    //   fetchData();
    // }, [id]);

    // const [formData, setFormData] = useState({
    //   clientName: '',
    //   projectName: '',
    //   projectLA: '',
    //   products: [],
    //   paymentTerm: '',
    //   paymentDelivery: '',
    //   note: '',
    //   excluding: '',
    //   // ... add other fields as needed
    // });

    // useEffect(() => {
    //   if (quotation) {
    //     setFormData({
    //       clientName: quotation.clientName,
    //       projectName: quotation.projectName,
    //       projectLA: quotation.projectLA,
    //       products: quotation.products || [],
    //       paymentTerm: quotation.paymentTerm,
    //       paymentDelivery: quotation.paymentDelivery,
    //       note: quotation.note,
    //       excluding: quotation.excluding,
    //       // ... add other fields as needed
    //     });
    //   }
    // }, [quotation]);
    // const [rows, setRows] = useState([{ id: 1, number: 1 }]);

    // const setformData = (quotation) => {
    //   {
    //     setFormData({
    //       clientName: quotation.clientName,
    //       projectName: quotation.projectName,
    //       projectLA: quotation.projectLA,
    //       products: quotation.products || [],
    //       paymentTerm: quotation.paymentTerm,
    //       paymentDelivery: quotation.paymentDelivery,
    //       note: quotation.note,
    //       excluding: quotation.excluding,
    //       // ... add other fields as needed
    //     });
    //   }
    // }
    //   const setrow = (row) => {
    //     setRows(row)
    //   }

    //   const addRow = () => {
    //     const newRow = { id: rows.length + 1, number: rows.length + 1 };
    //     setRows([...rows, newRow]);
    //   };

    //   const deleteRow = (index) => {
    //     const updatedRows = rows.filter((_, i) => i !== index);
    //     const updatedRowsWithNumbers = updatedRows.map((row, i) => ({ ...row, number: i + 1 }));
    //     setRows(updatedRowsWithNumbers);
    //   };

    //   const handleRowInputChange = (index, fieldName, value) => {
    //     const updatedRows = rows.map((row, i) => {
    //       if (i === index) {
    //         return { ...row, [fieldName]: value };
    //       }
    //       return row;
    //     });
    //     setRows(updatedRows);
    //   };


    //   const handleInputChange = (fieldName, value) => {
    //     setFormData({
    //       ...formData,
    //       [fieldName]: value,
    //     });
    //   };

    // if (!quotation) {
    //   // Loading state or handle error if needed
    //   return <div>Loading...</div>;
    // }\
    useEffect(()=>{},[])
    console.log('first',data)
    return (
        <h1>hello</h1>
        // <form onSubmit={handleSubmit}>
        //     <div className={styles.container}>
        //         <div className={styles.form}>
        //             <input
        //                 className={styles.input}
        //                 placeholder={quotation.clientName}
        //                 value={formData.clientName}
        //                 onChange={(e) => handleInputChange('clientName', e.target.value)}
        //             />
        //             <input
        //                 className={styles.input}
        //                 placeholder={quotation.projectName}
        //                 value={formData.projectName}
        //                 onChange={(e) => handleInputChange('projectName', e.target.value)}
        //             />
        //             <input
        //                 className={styles.input}
        //                 placeholder={quotation.projectLA}
        //                 value={formData.projectLA}
        //                 onChange={(e) => handleInputChange('projectLA', e.target.value)}
        //             />
        //         </div>
        //     </div>
        //     <div className={styles.container}>
        //         <div className={styles.form}>
        //             <p className={styles.title}>Products</p>
        //             <table className={styles.table}>
        //                 <thead>
        //                     <tr>
        //                         <td>Number</td>
        //                         <td>Product Code</td>
        //                         <td>Unit Price</td>
        //                         <td>Unit</td>
        //                         <td>Qty</td>
        //                         <td>Description</td>
        //                     </tr>
        //                 </thead>
        //                 <tbody>
        //                     {rows.map((row, index) => (
        //                         <tr key={row.id} className={styles.row}>
        //                             <td>
        //                                 <input
        //                                     className={`${styles.input} ${styles.numberInput}`}
        //                                     type="text"
        //                                     value={row.number}
        //                                     readOnly
        //                                 />
        //                             </td>
        //                             <td>
        //                                 <input
        //                                     className={styles.input1}
        //                                     placeholder={quotation.productCode}
        //                                     value={row.productCode}
        //                                     onChange={(e) => handleRowInputChange(index, 'productCode', e.target.value)}
        //                                 />
        //                             </td>
        //                             <td>
        //                                 <input
        //                                     className={styles.input1}
        //                                     placeholder={quotation.unitPrice}
        //                                     value={row.unitPrice}
        //                                     onChange={(e) => handleRowInputChange(index, 'unitPrice', e.target.value)}
        //                                 />
        //                             </td>
        //                             <td>
        //                                 <input
        //                                     className={styles.input1}
        //                                     placeholder={quotation.unit}
        //                                     value={row.unit}
        //                                     onChange={(e) => handleRowInputChange(index, 'unit', e.target.value)}
        //                                 />
        //                             </td>
        //                             <td>
        //                                 <input
        //                                     className={styles.input1}
        //                                     placeholder={quotation.qty}
        //                                     value={row.qty}
        //                                     onChange={(e) => handleRowInputChange(index, 'qty', e.target.value)}
        //                                 />
        //                             </td>
        //                             <td>
        //                                 <textarea
        //                                     className={`${styles.input1} ${styles.textarea}`}
        //                                     placeholder="Description"
        //                                     value={row.description}
        //                                     onChange={(e) => handleRowInputChange(index, 'description', e.target.value)}
        //                                 ></textarea>
        //                             </td>
        //                             <td>
        //                                 {index === rows.length - 1 ? (
        //                                     <button
        //                                         type="button"
        //                                         className={`${styles.iconButton} ${styles.addButton}`}
        //                                         onClick={addRow}
        //                                     >
        //                                         <FaPlus />
        //                                     </button>
        //                                 ) : (
        //                                     <button
        //                                         type="button"
        //                                         className={`${styles.iconButton} ${styles.deleteButton}`}
        //                                         onClick={() => deleteRow(index)}
        //                                     >
        //                                         <FaTrash />
        //                                     </button>
        //                                 )}
        //                             </td>
        //                         </tr>
        //                     ))}
        //                 </tbody>
        //             </table>
        //         </div>
        //     </div>
        //     < div className={styles.container}>
        //         <div className={styles.form}>
        //             <input
        //                 className={styles.input}
        //                 placeholder={quotation.paymentTerm}
        //                 value={formData.paymentTerm}
        //                 onChange={(e) => handleInputChange('paymentTerm', e.target.value)}
        //             />
        //             <input
        //                 className={styles.input}
        //                 placeholder={quotation.paymentDelivery}
        //                 value={formData.paymentDelivery}
        //                 onChange={(e) => handleInputChange('paymentDelivery', e.target.value)}
        //             />
        //             <input
        //                 className={styles.input}
        //                 placeholder={quotation.note}
        //                 value={formData.note}
        //                 onChange={(e) => handleInputChange('note', e.target.value)}
        //             />
        //             <input
        //                 className={styles.input}
        //                 placeholder={quotation.excluding}
        //                 value={formData.excluding}
        //                 onChange={(e) => handleInputChange('excluding', e.target.value)}
        //             />
        //         </div>
        //         <button type="submit">Submit</button>
        //     </div>

        // </form>
    )
}

export default Test