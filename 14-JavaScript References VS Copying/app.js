const appModel = (function () {
  return {
  }
})();

const appView = (function () {
  return {
  }
})();

const appController = (function () {
  return {
    init() {
      // start with strings, numbers and booleans
      let age = 100;
      let age2 = age;
      console.log(age, age2);
      age = 200;
      console.log(age, age2);

      let name = 'wes';
      let name2 = name;
      console.log(name, name2);
      name = 'bos';
      console.log(name, name2);

      // Let's say we have an array
      const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];

      // and we want to make a copy of it.
      // let team = players;
      // console.log(players, team);

      // You might think we can just do something like this:
      // team[3] = 'Lux';

      // however what happens when we update that array?
      // console.log(players, team);

      // now here is the problem!

      // oh no - we have edited the original array too!

      // Why? It's because that is an array reference, not an array copy. They both point to the same array!

      // So, how do we fix this? We take a copy instead!
      // let team2 = Object.assign([], players);
      let team2 = [...players];
      team2[3] = 'Lux';
      console.log(players, team2);

      // one way

      // or create a new array and concat the old one in

      // or use the new ES6 Spread

      // now when we update it, the original one isn't changed

      // The same thing goes for objects, let's say we have a person object

      // with Objects
      const person = {
        name: 'Wes Bos',
        age: 80
      };

      // and think we make a copy:

      // how do we take a copy instead?

      // We will hopefully soon see the object ...spread

      // Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.
      let person2 = {...person};
      person2.age = 10;
      console.log(person, person2);
    },
  }
})();

document.addEventListener('DOMContentLoaded', () => {
  appController.init();
});
