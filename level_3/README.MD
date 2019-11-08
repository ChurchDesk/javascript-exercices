# Filtering and sorting

**So as to facilitate the solution of the following exercises, the `Bluebird`, `lodash` and `moment` libraries has been added as dependencies of this project. Feel free to add any other dependencies you deem necessary.**

**For each exercise, use the corresponding `.js` file in this folder (e.g.: the exercise's 1 solution should be placed in the `level_3/exercise_3_1.js` file).**

## Exercises

1. Create a function that prints the given list of students (see below), sorted by `name` BUT you are not allowed to change the original list.

2. From the list students provided below, create a function that receives a parameter that will be used to filter the students by `hometown`. Then, sort the filtered list by `age` (you'll have to calculate it) and print it. Note that you are not allowed to change the original list.

3. Create a function that allows to filter and sort the following list of students, taking into account:

* The function must receives 4 parameters, 2 for filtering and 2 for sorting. This is; `filteringProperty`, `filteringValue`, `sortingProperty`, `sortingValue`.
* Depending on the values of the provided parameters, it should allow to only filter, only sort, or both.
* The only properties it can sort by are `name`, `age` (can be calculated), and `average`.
* The only properties it can filter by are `hometown` and `gender`.
* Bear in mind that it is NOT allowed to mutate the given list. This means, you cannot change the contents of the array or any of its elements.
* You can use Google to look up any topics you deem necessary in order to complete the exercise.

```javascript
const students = [
  { name: 'Matthew', hometown: 'Aarhus', dateOfBirth: '2000-04-18', gender: 'M', average: 8.5 },
  { name: 'Christian', hometown: 'Roskilde', dateOfBirth: '1998-10-03', gender: 'M', average: 8.19 },
  { name: 'Jonathan', hometown: 'Odense', dateOfBirth: '1992-02-11', gender: 'M', average: 7.73 },
  { name: 'Betty', hometown: 'Roskilde', dateOfBirth: '1997-07-09', gender: 'F', average: 9.23 },
  { name: 'Charles', hometown: 'Esbjerg', dateOfBirth: '2001-05-22', gender: 'M', average: 6.38 },
  { name: 'Marie', hometown: 'Aarhus', dateOfBirth: '1995-08-26', gender: 'F', average: 7.53 },
  { name: 'Louise', hometown: 'Aarhus', dateOfBirth: '1997-09-17', gender: 'F', average: 9.84 },
  { name: 'Anne', hometown: 'Odense', dateOfBirth: '1999-03-12', gender: 'F', average: 8.62 }
];
```