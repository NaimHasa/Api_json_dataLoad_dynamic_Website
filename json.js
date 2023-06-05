1// Object file convert to Json.jtringify
2//stringify convert to Json.parse


const user = { id: 1, name: 'Naim Hasan', job: 'Programmer' };
// console.log(user);

const shop = {
    owner: 'Naim Hasan',
    address: {
        street: 'Banani Boot ar Goli',
        city: 'Dhaka',
        country: 'BD'
    },
    product: ['laptp', 'mic', 'monitor', 'keyboard'],
    revenue: 45000,
    isOpen: true,
    isNew: false

};
// console.log(shop);
const shopJson = JSON.stringify(shop);
console.log(shopJson);
const shopObj = JSON.parse(shopJson);
console.log(shopObj);
