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

// Add #turnColor property's attributes
const sheet = window.document.styleSheets[0];
sheet.insertRule(
  '#turnColor:hover{background-color: darkgreen; }',
  sheet.cssRules.length
);
