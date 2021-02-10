const axios = require('axios')

const exportedMethods = {

    async Data() {
        const { data } = await axios.get('https://gist.githubusercontent.com/robherley/5112d73f5c69a632ef3ae9b7b3073f78/raw/24a7e1453e65a26a8aa12cd0fb266ed9679816aa/people.json')

        return data;

    },

    async searchPersonByName(str) {
        let searchData = [];
        let d = {}
        d["array"] = [];
        let j = 0;
        const { data } = await axios.get('https://gist.githubusercontent.com/robherley/5112d73f5c69a632ef3ae9b7b3073f78/raw/24a7e1453e65a26a8aa12cd0fb266ed9679816aa/people.json');
        let i = 0;
        data.forEach(element => {
            //console.log(element.firstName)
            if (i < 20) {
                if ((element.firstName.includes(str)) || (element.lastName.includes(str))) {
                    searchData[i] = element
                    i++;
                }
            }
        });


        // searchData.forEach(element => {
        //     if (j < 20) {
        //         d.array[j] = element;
        //         j++;
        //     }

        // });

        return searchData;
    }
}

module.exports = { exportedMethods };

// async function main() {
//     console.log(await Search('p'))

// }
// main()