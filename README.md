# simple projects with html, css, js
 

## Project 1 - Silly Monkey

A monkey can't see bananas. When you click the monkey, the monkey open its eyes, but the bananas are gone.
Used JS event listener

To control the background imange, used the code below.
```
const sheet = window.document.styleSheets[0];
sheet.insertRule(
      "body {background-image: url('https://media.giphy.com/media/3o6EhQuCjYJj4t1fWM/giphy-downsized-large.gif'); }",
      sheet.cssRules.length
    );
```

## Project 2 - How Old?

Names and ages cards that turn their colors when you hover your mouse. 

map method example
```
let data = [
  {
    name: 'Young',
    age: '35',
  },
  {
    name: 'Park',
    age: '25',
  },
  {
    name: 'Pipa',
    age: '24',
  },
  {
    name: 'Ana',
    age: '36',
  },
  {
    name: 'Mendes',
    age: '55',
  },
];

const info = document.querySelector('#info');

let details = data.map(function (item) {
  return (
    '<div id="turnColor">' + item.name + ' is ' + item.age + ' y.o.' + '</div>'
  );
});

info.innerHTML = details.join('\n');
```

## Project 3 - Hover

Two circles that get bigger when you hover your mouse.

With addEventListener, it adds .hover class in the class list of #circle1 and #circle2
In style.css, it has the code below to control the circles.
```
.hover {
  transform: scale(2);
}
```

