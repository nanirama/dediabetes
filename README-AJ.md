Tailwind

# Use of custom fonts

1. Go to google fonts, select fonts
2. Right side, embed options -> copy @import option (do not include <style> tags)
3. Copy #2 in index.css
4. Edit tailwind.config.js
   fontFamily: {
   body: ['Raleway'],
   headings: ['Playfair Display'],
   },
5. save and cancel gatsby develop
6. Navigate to where tailwind css is located: src/css folder
7. Run npx tailwindcss build index.css -o output.css (index.css is the name of your file in gatsby, if different, change)

# convert Convert an array of objects to array of the objects' values

50

As order of values in array returned by Object.values() isn't guaranteed, you should consider use of .map() with some Object Destructuring. You can then extract object properties in separate variables and return them in desired order explicitly.

const data = [
{ amount: '100', user: 'admin', date: 'March 6, 2019' },
{ amount: '120', user: 'admin', date: 'March 6, 2019' },
{ amount: '80', user: 'admin', date: 'March 7, 2019' },
{ amount: '200', user: 'admin', date: 'March 7, 2019' }
];

const result = data.map(({ amount, user, date }) => [amount, user, date]);

The above returns:
orders = [
['100', 'admin', 'March 6, 2019'],
['120', 'admin', 'March 6, 2019'],
['80', 'admin', 'March 7, 2019'],
['200', 'admin', 'March 7, 2019'],
];

console.log(result);
