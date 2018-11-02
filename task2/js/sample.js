'use strict';

//sample task1:
const firstElement=document.querySelector('#test');
firstElement.innerHTML='I added <strong> this </strong> text with JS';
firstElement.setAttribute('style','color:red');

//event:
firstElement.addEventListener('click',(evt) => {    //anonoumus array function evt
  console.log(evt.currentTarget); // or evt.target  get to know who is clicked
  evt.currentTarget.setAttribute('style','background:purple');// change the background color when clicked
});

const changeColor=(evt)=>{ //name the function evt
  console.log(evt.currentTarget);
  evt.currentTarget.setAttribute('style','background:yellow');
}

//sample task2:
const exampleElements = document.querySelectorAll('.example');
console.log(exampleElements);

//change something:
for(let i=0;i<exampleElements.length;i++){
  console.log(exampleElements[i]);
  exampleElements[i].setAttribute('style','color:green');
  exampleElements[i].addEventListener('click',changeColor);// run changeColor function to change the color when clicked
}

//change the text
for (const element of exampleElements){
  element.innerHTML = 'Modified';
}
      // the other way :
exampleElements.forEach(element =>{
  element.innerHTML = 'Modified again';
})
