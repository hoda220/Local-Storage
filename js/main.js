 // Select Elements

 let allSpans = document.querySelectorAll(".buttons span");
 let results = document.querySelector(".results > span");
 let input = document.querySelector("input");

 allSpans.forEach(span => {

    span.addEventListener("click", (e) => {

        if(e.target.classList.contains("check-item")) {
            checkItem();
        }
        if(e.target.classList.contains("add-item")) {
            addItem();
        }
        if(e.target.classList.contains("delete-item")) {
            deleteItem();
        }
        if(e.target.classList.contains("show-item")) {
            showItem();
            
        }
    })


 });

 function checkInput() {

        results.innerHTML = `Input Can be Empty`
     
 }
 function checkItem() {

        if(input.value !== ``) {
            if(localStorage.getItem(input.value)) {
                results.innerHTML = `Found Local item called <span>${input.value}</span>`
            }
            else {
                results.innerHTML = `Not Found Local item called <span>${input.value}</span>`
            }
        }
        else {
            checkInput()
        }
     
 }
 function addItem() {
    if(input.value !== ``) {
 
            localStorage.setItem(input.value,"test");

            results.innerHTML = ` Local item called <span>${input.value}</span> Added`
            input.value = ``;
    }

    else {
        checkInput()
    }
     
}
function deleteItem() {
    if(input.value !== ``) {
        if(localStorage.getItem(input.value)) {
            localStorage.removeItem(input.value);
            results.innerHTML = ` Local item called <span>${input.value}</span> Removed`
        }
        else {
            results.innerHTML = `Not Found Local item called <span>${input.value}</span>`
        }
 }
else {
    checkInput()
}
}
function showItem() {
     if(localStorage.length) {
         results.innerHTML = ``;
         for(let [key,value] of Object.entries(localStorage)) {
             results.innerHTML += `<span>${key} </span>`
         }
     }
     else {
         results.innerHTML = `Local Storage Is Empty`
     }
}