const user = { name: 'arif', id: 7, course: 'programming hero web design and development' };
const stringified = JSON.stringify(user);
console.log(stringified);
const converted = parse

const shop = {
    name: 'alia store',
    address: 'ranbir road',
    profit: 15000,
    proudcts: ['laptop', 'mobile', 'pepsi'],
    owner: {
        name: 'Alia Bhat',
        profession: 'actor'
    },
    isExpensive: false,
};
const shopStringified = JSON.stringify(shop);
const converted = JSON.parse(shopStringified);
console.log(shopStringified);
// console.log(converted);

const user = { id: 11, name: 'gorib amir', job: 'actor' };
console.log(user);
const stringified = JSON.stringify(user);
console.log(stringified);
const converted = JSON.parse(stringified);
console.log(converted);