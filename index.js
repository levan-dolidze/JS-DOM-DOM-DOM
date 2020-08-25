const welcome =document.getElementById('test');

const welcome1=document.querySelector('.test1');
console.log(welcome1)

const welcome2=document.querySelector('#test')
console.log(welcome2)

// welcome.style.color='red';

// const result=prompt("enter your color");
// const param=document.getElementById('task2');
// param.style.color=result


// const last=prompt("sheikavne ra");
// const last1=document.getElementById('task3');
// last1.style.color=last


// const kitxva=prompt("shekavi aaa");
// const gadmomaqvs=document.getElementById('task4')
// gadmomaqvs.style.color=kitxva


// welcome.classList.add('green')

// const isRed=true;
// const isNot=false
// if(isRed){
//     welcome.classList.add('red')
// }
// else if(isNot){
//     welcome.classList.add("green")
// }

// const input=document.getElementById('headerName')

// const body=document.querySelector('body')

// const button=document.getElementById('button');

// button.addEventListener('click',function(e){
// //   welcome.classList.add('green')
//   welcome.classList.toggle('green');
//   const newHeader=document.createElement('h2')
// newHeader.textContent=input.value
// body.appendChild(newHeader)
    
// })

// const body = document.querySelector('body')
// const name=document.getElementById('name');
// const surName=document.getElementById('surName');
// const age=document.getElementById('age');
// const button = document.getElementById('button');

// button.addEventListener('click',function(){
// const userInfo=document.createElement('p');
// userInfo.textContent=`${name.value} ${surName.value} ${age.value}`;
// body.appendChild(userInfo);

// });
const ageSelect=document.getElementById('list')



const adAge=()=>{
    for (let index = 1;index <=100; index++) {
     addOption(ageSelect,index)
}
};

const addOption=(selectElement,optionText)=>{
    const newOption=document.createElement('option');
    newOption.textContent=optionText;
    selectElement.appendChild(newOption);
};

adAge()