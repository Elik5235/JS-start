function greetingUser(user){
 return ` hey ${user.name} ${user.surname} ${user.age + 1 }`}

const user = {
  name: 'john',
  surname: 'Doe',
  age: 19
}
greetingUser(user) 