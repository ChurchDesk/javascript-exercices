# Asynchronous code

**So as to facilitate the solution of the following exercises, the `Bluebird`, `lodash` and `moment` libraries has been added as dependencies of this project. Feel free to add any other dependencies you deem necessary.**

**For each exercise, use the corresponding `.js` file in this folder (e.g.: the exercise's 1 solution should be placed in the `level_4/exercise_4_1.js` file).**

**The listed exercises require retrieving data from a database. Dummy data and repository (data access) functions have been provided in the `utils/repository.js` file. The data access functions return promises, but can also be provided a callback function as a parameter.**

## Exercises

1. Write a function that queries all the existing characters in the database, and then get their respective races. Finally, print out the character's name and race, one character per line. It is ONLY allowed to use `callback functions` to retrieve the data from the database.

2. Write a function that queries all the existing characters in the database and then for each one of them, get their respective weapons (some might have only one, some many and some none). Finally, print out the character's name and weapons, one character per line. It is ONLY allowed to use `promises` to fetch the data from the database.

3. Create a function that, given a list of character IDs passed on as a parameter, returns the list of the respective character objects from the database. It is ONLY allowed to use `promises` to obtain the data from the database. It's highly recommended to check out the `Bluebird` library ;)

4. Write a function that, for a given character ID, retrieves their race and weapons and prints them out. For performance reasons, and whenever it's possible, multiple asynchronous calls MUST be executed in parallel. You must use `promises` to resolve this exercise.
