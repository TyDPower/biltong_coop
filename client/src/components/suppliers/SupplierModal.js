import React, { useState, useEffect } from 'react';
import SupplierProfile from './SupplierProfile';
import SupplierReviewsList from './SupplierReviewsList';
import SupplierStockList from './SupplierStockList';
import ContactForm from '../Misc/ContactForm';

function SupplierModal(props) {

    const [info, setInfo] = useState(null);
    const [content, setContent] = useState(null);

    useEffect(()=> {
        setInfo(props.info)
    }, [props]);

    function modalView() {
        if (content === 'contact') {
            return <ContactForm supplierEmail={info?.supplierEmail}/>
        } else if (content === 'stock') {
            return <SupplierStockList listID={info?.stockList} />
        } else if (content === 'reviews') {
            return <SupplierReviewsList reviewsID={info?.reviewsList} />
        } else {
            return <SupplierProfile id={info?.id} />
        };
    };

    return (
        <>
            <div className="modal fade" id="supplierModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <div class="nav nav-pills">
                                <button type="button" class="btn btn-light" onClick={ ()=> setContent('supplier') }>Supplier</button>
                                <button type="button" class="btn btn-light" onClick={ ()=> setContent('stock') }>Stock</button>
                                <button type="button" class="btn btn-light" onClick={ ()=> setContent('reviews') }>Reviews</button>
                                <button type="button" class="btn btn-light" onClick={ ()=> setContent('contact') }>Contact</button>
                            </div>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                    <div className="modal-body">
                        { modalView() }
                    </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SupplierModal;