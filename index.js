require('dotenv').config();

console.log('Имя:', process.env.FIRST_NAME);
console.log('Фамилия:', process.env.LAST_NAME);
console.log('Номер группы:', process.env.GROUP_NUMBER);
console.log('Номер по списку:', process.env.LIST_NUMBER);
console.log('Режим:', process.env.MODE);

