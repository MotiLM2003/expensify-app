// // const person = {
// //   name: 'Moti',
// //   age: 42,
// //   location: {
// //     city: 'bat-yam',
// //     temp: 92,
// //   },
// // };

// // const { name, age } = person;
// // const { city, temp } = person.location;
// // console.log(`${name} is ${age} from ${city}`);

// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan',
//   publisher: {
//     name: 'Penguin',
//   },
// };

// const { title, author } = book;
// const { name: publisherName = 'Self-Published' } = book.publisher;
// console.log(publisherName);

const address = ['1299 S Juniper Street', 'Chicago', 'Los Angels', '19157'];

const [street, city, state, zip] = address;

// const [, city, state, zip] = address;

// console.log(`You are in ${city} ${state}`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '2.75'];
const [coffee, , price] = item;

console.log(`A medium ${coffee} costs ${price}`);
