import React, { useState, useEffect } from 'react';
import { SupplierUtils } from '../../utils/suppliers'

const supplier = new SupplierUtils();

function SupplierProfile(props) {

    const [profile, setProfile] = useState(0)

    useEffect(()=> {
        supplier.apiGetQuery(supplier.profile(props.id))
        .then(res => setProfile(res[0]))
        .catch(e => console.error(e));
    }, [props])

    return (
        <>
            <h1>{ profile?.supplier_name }</h1>
            <h3>{ profile?.contact_name }</h3>
            <h4>{ profile?.contact_number }</h4>
            <h4>{ profile?.contact_email }</h4>
            <h5>'HARD CODE' Avalible for orders...</h5>
            <h5>'HARD CODE' Supplier area...</h5>
            <h5>'HARD CODE' Order turn around time...</h5>
        </>
    );

};

export default SupplierProfile;