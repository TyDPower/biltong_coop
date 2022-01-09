class ParentMethods {
    
    async apiGetQuery(api) {
        try {
            const data = await fetch(api);
            const res = await data.json();
            return res;
        } catch (e) {
            return e;
        }
    }
}

module.exports = ParentMethods