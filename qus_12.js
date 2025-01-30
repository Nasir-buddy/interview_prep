const user1 = {
    name: "nasir",
    age: "23",
    address: {
        city: 'Greater Noida',
        state: 'Gautam Buddha Nagar'
    },
}

const user2 = {...user1}
user2.name = 'Ali';
user2.address.city = 'New Delhi';         
// user1.age = 30;
console.log(user1);
console.log(user2);
