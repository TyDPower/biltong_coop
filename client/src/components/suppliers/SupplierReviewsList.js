import React, { useState, useEffect } from 'react';
import { SupplierUtils } from '../../utils/suppliers'

const supplier = new SupplierUtils();

function SupplierReviewsList(props) {

    const [reviewsList, setReviewsList] = useState(null);

    useEffect(()=> {
        supplier.apiGetQuery(supplier.reviews(props.reviewsID))
        .then(res => setReviewsList(res))
        .catch(e => console.error(e));
    }, [props]);

    return (
        <>
            {
                reviewsList?.map( l => {
                    return (
                        <>
                            <p>{l.customer_name}</p>
                            <p>{l.customer_comment}</p>
                            <p>{l.comment_date}</p>
                            <p>{l.num_stars} Stars!</p>
                            <hr />
                        </>
                    )
                })
            }
        </>
    );
};

export default SupplierReviewsList;