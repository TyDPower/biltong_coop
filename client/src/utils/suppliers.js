import ParentMethods from "./parentMethods";

class _SupplierUtils extends ParentMethods {

    constructor() {
        super();
        this.queryStr = 'http://localhost:5000/api/suppliers'
    };

    list() {
        return `${this.queryStr}/list`;
    };

    profile(id) {
        return `${this.queryStr}/${id}`;
    };

    stock(id) {
        return `${this.queryStr}/stock/${id}`;
    };

    reviews(id) {
        return `${this.queryStr}/reviews/${id}`;
    };

    avalabilityCheck(bool) {
        if (bool) {
            return "Avalible"
        }

        return "Not avalible"
    };

};

export { _SupplierUtils as SupplierUtils };