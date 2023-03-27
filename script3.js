let inputElement= document.querySelector('input');
let formElement= document.querySelector('form');
let listElement= document.querySelector('ul');
let totalTasksElement= document.querySelector('#total-tasks');

let tasklist=[
    'study plan'
];

function deleteItem(e){
    let task= e.target.parentElement.previousElementSibling.innerHTML;
    let index= tasklist.indexOf(task);
    if(index !== -1){
        tasklist.splice(index,1);
    }
    populateList();
}
function populateList(){
    listElement.innerHTML='';
    tasklist.forEach(function(item){
        let newItem=document.createElement('li');

        //add new spanfor text
        let span=document.createElement('span');
        span.innerHTML=item;
        newItem.appendChild(span);

        //add delete button
        let anchorElement=document.createElement('a');
        anchorElement.classList.add('delete');
        anchorElement.innerHTML='<i class="fas fa-trash-alt"></i>';
        newItem.appendChild(anchorElement);

        anchorElement.addEventListener('click', (e)=> deleteItem(e));

        //add li to ul
        listElement.appendChild(newItem);

    });

    totalTasksElement.innerHTML=tasklist.length;
    inputElement.value='';
}
populateList();

function doesNotHaveWhiteSpace(s){
    let stringWithoutSpace= s.trim();
    return stringWithoutSpace.length > 0;
}

function addTask(){
    if(inputElement.value && doesNotHaveWhiteSpace(inputElement.value) && !tasklist.includes(inputElement.value)){
        tasklist.push(inputElement.value);
        populateList();
    }


}
formElement.addEventListener('submit',function(a){
    a.preventDefault();
    addTask();
})