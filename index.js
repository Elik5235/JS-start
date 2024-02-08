// array.concat - використовується для об'єднання двох або більше масивів у новий масив (немутуючий)
// array.fill - використовується для заповнення всіх елементів масиву якимсь одним значенням (мутуючий)
// array.includes - використовується для перевірки наявності певного значення у масиві (немутуючий)
// array.indexOf - використовується для отримання першого входження певного значення у масиві (немутуючий)
// array.join - використовується для створення рядка, об'єднуючи всі елементи масиву (немутуючий)
// array.push - використовується для додавання одного або кількох елементів у кінець (мутуючий)
// array.pop - використовується для видалення останнього елементу (мутуючий)
// array.shift - використовується для видалення першого елементу з початку масиву (мутуючий)
// array.unshift - використовується для додавання одного або декількох елементів на початок масиву (мутуючий)
// array.reverse - використовується для зміни порядку елементів у масиві на протилежний (мутуючий)
// array.slice - використовується для створення нового масиву, який складається тільки з якоїсь певної частини вихідного масиву (немутуючий)
// array.splice - використовується для зміни вмісту масиву шляхом видалення, заміни або додавання нових елементів (мутуючий)
// array.forEach - використовується для перебору (ітерації) кожного елемента масиву і виконання певної дії для кожного елемента
// array.map - працює як forEach, тільки map буде повертати новий масив (не мутуючий)
// array.sort - використовується для сортування елементів в масиві (мутуючий)
// array.filter - використовується для створення нового масиву, який місти лише ті елементи, які задовільняють певній умові (не мутуючий)
// array.reduce - використовується для обчислення якого ОДНОГО значення на основі всіх елементів масиву (не мутуючий)

function MyArray() {
  this.length = 0;

  this.push = function () {
    for (let i = 0; i < arguments.length; i++) {
      this[this.length] = arguments[i];
      this.length++;
    }
    return this.length;
  };

  this.pop = function () {
    if (this.length > 0) {
      // 1. Зберегти останній елемент
      const lastItem = this[this.length - 1];
      // 2. Видалити останній елемент з масиву
      delete this[this.length - 1];
      // 3. Зменшити довжину масиву на 1
      this.length--;
      // 4. Повернути останній елемент
      return lastItem;
    } else {
      return undefined;
    }
  };

  this.forEach = function (callback) {
    for (let i = 0; i < this.length; i++) {
      callback(this[i], i, this);
    }
  };
}

const arr = new MyArray();
arr.push(1);
arr.push(2);
arr.push(3, 2, 5);

// Відконсольлогувати квадрати кожного числа в масиві arr

arr.forEach((item) => {
  console.log(item ** 2);
});
