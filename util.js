let util = {
    remove: (arr, value) => {

        return arr.filter((ele) => {
            return ele != value;
        });
    }
};
export default util;