document.getElementById('title');

// selects the title element

document.getElementById('title').id;

// o/p 'title'

document.getElementById('title').class

// undefined cause we there is no function like that 

document.getElementById('title').className

// 'heading'


document.getElementById('title').getAttribute

// error showing that getAttribute is a function 

document.getElementById('title').getAttribute()

// error showing at least 1 parameter is needed in the getAttribute() function 


document.getElementById('title').getAttribute('id')

// o/p 'title'

document.getElementById('title').getAttribute('class')

// o/p class name ie 'heading'

// so in case of getAttribute() we need to give the key to the function as a parameter 
// and then it will return the value of the key , here the keys are class and id 

document.getElementById('title').setAttribute('class' , 'test');

// this will override the original class attribute and set it to test 

// this is a mistake normally done by all and you will also fall pray to it so dont worry 

document.getElementById('title').setAttribute('class' , 'test heading');

// this will additionally add a heading to the class attribute 
//  ie the class attribute will have test as a class name 




// from the console 

document.getElementById("title");


//  <h1 id=​"title" class=​"heading">​Dom Learning on chai aur code​</h1>​ 


const title =  document.getElementById("title");

// undefined

title.style.backgroundColor = "red";

// 'red'

title.style.padding = "10px";

// '10px'

title.style.borderRadius = "15px";

// '15px'

// Difference Between document.innerHTML , innerText , textContent

title.textContent

// 'Dom Learning on chai aur code test code '

title.innerText

// 'Dom Learning on chai aur code'

title.innerHTML;

// 'Dom Learning on chai aur code <span style="display: none;">test code </span>'


document.getElementsByClassName("heading")

// HTMLCollection [h1#title.heading, title: h1#title.heading]

const test =  document.querySelector("h2")
undefined
test.innerHTML
'Lorem ipsum dolor sit.'
test.innerHTML = "NIGGA"
'NIGGA'
test.innerText = "WiGGA"
'WiGGA'
test.textContent = "WiGGAChan"
'WiGGAChan'


document.querySelector(".heading")

//  <h1 id=​"title" class=​"heading">​…​</h1>​


document.querySelector("#title") 

// <h1 id=​"title" class=​"heading">​…​</h1>​


document.querySelector('input[type="password"]')

/* <input type=​"password" name id>​ */

// all  CSS selectors can be used in it

document.querySelector('ul')

{/* <ul>​…​</ul> */}
​
const myul =  document.querySelector('ul')

// undefined

myul.querySelector('li')

{/* <li>​…​</li>​ */}

// as it is the first element 
// undefined

const turnGreen =  myul.querySelector('li')

// undefined

turnGreen.style.backgroundColor = "blue";
'blue'
turnGreen.style.width = "blue";
'blue'
turnGreen.style.width = "50%";
'50%'
turnGreen.style.padding = "15px";
'15px'
turnGreen.innerText = "Five" 
'Five'

document.querySelectorAll('li');

// NodeList(3) [li, li, li]

const tempLiList = document.querySelectorAll('li');

// undefined

tempLiList
// NodeList(3) [li, li, li]

const arr = [1,2,3,4];
// undefined

tempLiList.style.background="blue";
// error 

tempLiList[0].style.background="blue";
'blue'

const myh1 = document.querySelectorAll("h1");
// undefined

myh1

// NodeList [h1#title.heading]


myh1[0].style.background = "green";
// 'green'

const tempLiList = document.querySelectorAll('li');
// undefined

tempLiList

// NodeList(3) [li, li, li]0: li1: li2: lilength: 3[[Prototype]]: NodeListentries: ƒ entries()forEach: ƒ forEach()item: ƒ item()keys: ƒ keys()length: (...)values: ƒ values()constructor: ƒ NodeList()Symbol(Symbol.iterator): ƒ values()Symbol(Symbol.toStringTag): "NodeList"get length: ƒ length()[[Prototype]]: Object

tempLiList.forEach(function (l) {
    l.style.color="green";
})

// undefined

tempLiList.forEach(function nigga(li) {
    li.style.color="blue";
    li.style.backgroundColor="Green"
})

// undefined

document.getElementsByClassName("list-item")

// HTMLCollection(4) [li.list-item, li.list-item, li.list-item, li.list-item]

const tempClassList = document.getElementsByClassName("list-item")
// undefined

tempClassList.forEach(function (li) {
    console.log(li);
})

// VM370:1 Uncaught TypeError: tempClassList.forEach is not a function
//     at <anonymous>:1:15
// (anonymous) @ VM370:1

tempClassList

// HTMLCollection(4) [li.list-item, li.list-item, li.list-item, li.list-item]

Array.from(tempClassList);

// (4) [li.list-item, li.list-item, li.list-item, li.list-item]0: li.list-item1: li.list-item2: li.list-item3: li.list-itemlength: 4[[Prototype]]: Array(0)at: ƒ at()concat: ƒ concat()constructor: ƒ Array()copyWithin: ƒ copyWithin()entries: ƒ entries()every: ƒ every()fill: ƒ fill()filter: ƒ filter()find: ƒ find()findIndex: ƒ findIndex()findLast: ƒ findLast()findLastIndex: ƒ findLastIndex()flat: ƒ flat()flatMap: ƒ flatMap()forEach: ƒ forEach()includes: ƒ includes()indexOf: ƒ indexOf()join: ƒ join()keys: ƒ keys()lastIndexOf: ƒ lastIndexOf()length: 0map: ƒ map()pop: ƒ pop()push: ƒ push()reduce: ƒ reduce()reduceRight: ƒ reduceRight()reverse: ƒ reverse()shift: ƒ shift()slice: ƒ slice()some: ƒ some()sort: ƒ sort()splice: ƒ splice()toLocaleString: ƒ toLocaleString()toReversed: ƒ toReversed()toSorted: ƒ toSorted()toSpliced: ƒ toSpliced()toString: ƒ toString()unshift: ƒ unshift()values: ƒ values()with: ƒ with()Symbol(Symbol.iterator): ƒ values()Symbol(Symbol.unscopables): {at: true, copyWithin: true, entries: true, fill: true, find: true, …}[[Prototype]]: Object

const myConvertedArray = Array.from(tempClassList);
// undefined

// HOW tO CONVERT html collection into an array 
// uisng Array.from(tempClassList);


myConvertedArray.forEach(function listyle(li) {
  li.style.color="orange";
})
// it will work now 

document.querySelectorAll("h2")

// NodeList(15) [h2.vector-pinnable-header-label, h2, h2, h2, h2, h2, h2, h2, h2, h2, h2, h2, h2, h2, h2]

const allH2 = document.querySelectorAll("h2")
//  undefined 

allH2[2].innerText;
// 'Trademark'


allH2.forEach(function (h) {
  h.style.color="red";
  h.style.backgroundColor="green";
  h.style.padding="10px";
  h.innerText = "NIGGA";
})
// undefined