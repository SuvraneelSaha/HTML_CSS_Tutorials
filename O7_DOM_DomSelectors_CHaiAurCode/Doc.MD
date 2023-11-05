~~~

Shortcut  for clearing the console in browser is cntr + L 

~~~
~~~
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

~~~

~~~
Shortcut for html 

ul>li*3 
will make an ul and inside of which there will be 3 li items 


~~~