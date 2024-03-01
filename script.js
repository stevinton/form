'use strict';

const submit = document.getElementById('submit');

submit.addEventListener('click', function(event){
    event.preventDefault(); 
    var form = document.querySelector('form');
    var formData = {}

    for(let i = 0; i < form.elements.length; i++){
        var input = form.elements[i];
        if(input.tagName === 'INPUT'){
            if(input.type == 'radio' && !input.checked){
                continue;
            }
            formData[input.name] = input.value
        }
    }
    push(formData);
    display();
});

const push = (formData) => {
    var existingData = JSON.parse(localStorage.getItem('formData')) || [];
    existingData.push(formData);
    localStorage.setItem("formData", JSON.stringify(existingData));
}


const display = () =>{
    var sData = JSON.parse(localStorage.getItem("formData"))
    console.log(sData);
}




