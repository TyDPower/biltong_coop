import React, { useState, useEffect } from 'react';
import { SupplierUtils } from '../../utils/suppliers'

const supplier = new SupplierUtils();

function SupplierStockList(props) {

    const [stockList, setStockList] = useState(null);

    useEffect(()=> {
        supplier.apiGetQuery(supplier.stock(props.listID))
        .then(res => setStockList(res))
        .catch(e => console.error(e));
    }, [props]);

    return (
        <>
            {
                stockList?.map( l => {
                    return (
                        <>
                            <p>{l.stock_name}</p>
                            <p>{l.stock_type}</p>
                            <p>{l.stock_description}</p>
                            <p>{supplier.avalabilityCheck(l.stock_avalible)}</p>
                            <p>{l.cost_per_kg} per kg</p>
                            <hr />
                        </>
                    )
                })
            }
        </>
    );
};

export default SupplierStockList;