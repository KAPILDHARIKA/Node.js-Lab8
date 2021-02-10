const axios = require('axios')

const exportedMethods = {

    async Data() {
        const { data } = await axios.get('https://gist.githubusercontent.com/robherley/5112d73f5c69a632ef3ae9b7b3073f78/raw/24a7e1453e65a26a8aa12cd0fb266ed9679816aa/people.json')
        return data;

    },

    async getPersonById(id) {
        if (Number.isNaN(id)) throw 'id is not a number'
        if (!id) throw 'Please provide a proper id'
        let a = 0;
        const { data } = await axios.get('https://gist.githubusercontent.com/robherley/5112d73f5c69a632ef3ae9b7b3073f78/raw/24a7e1453e65a26a8aa12cd0fb266ed9679816aa/people.json')
        data.forEach(element => {
            if ((element.id == id)) {
                a = element;
            }
        });

        return a;
    }

}

module.exports = exportedMethods;