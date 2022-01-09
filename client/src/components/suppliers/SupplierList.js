import React, { useState, useEffect } from 'react';
import { SupplierUtils } from '../../utils/suppliers';
import SupplierModal from './SupplierModal';
import '../../styles/App.css';

const suppliers = new SupplierUtils();

function SupplierList() {

    const [list, setList] = useState(null);
    const [supplier, setSupplier] = useState(null);

    useEffect(() => {
        suppliers.apiGetQuery(suppliers.list())
        .then(res => setList(res))
        .catch(e => console.error(e));
    }, [])

    return (
        
        <div> 
            <h3>Suppliers</h3>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Supplier</th>
                        <th scope="col">Contact</th>
                        <th scope="col">Avalible</th>
                    </tr>
                </thead>
                <tbody>
                { list?.map( l => {
                    return (
                        <tr data-bs-toggle="modal" data-bs-target="#supplierModal" 
                            key={l.ID}
                            onClick={()=> setSupplier({
                                id: l.supplier_id,
                                stockList: l.stock_list,
                                reviewsList: l.reviews_list,
                                supplierEmail: l.contact_email
                            }
                        )}>
                        <td>{l.supplier_name}</td>
                        <td>{l.contact_name}</td>
                        <td>{suppliers.avalabilityCheck(l.avalible_for_order)}</td>
                    </tr>
                    )
                })}
                </tbody>
            </table>
            <SupplierModal info={supplier} />
        </div>
    
    );

}

export default SupplierList;