
//Getting Views
let list = document.getElementById("unordered")
var input = document.getElementById("add-input");

//Sending Request
const Http = new XMLHttpRequest();
const url = 'https://jsonplaceholder.typicode.com/todos';
Http.open("GET", url);
Http.send();
var dataArr
let li
Http.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {

        localStorage.setItem('data', JSON.stringify(this.responseText));

        var Localdata = localStorage.getItem('data');

        dataArr = JSON.parse(Localdata)

        for (var i = 0; i <= 10; i++) {

            li = document.createElement("li")
            li.style.marginBottom = "15px"
            li.style.width = "70vh"

            li.innerHTML =JSON.parse(dataArr)[i].title 

            var flag = JSON.parse(dataArr)[i].completed

            list.appendChild(li)

            if (i % 2 === 0) {

                li.style.backgroundColor = "#F3F5F5";
                li.style.padding = "10px"

            }
            else {

                li.style.backgroundColor = "#E9EEED";
                li.style.padding = "10px"
            }
            if (flag) {

                li.style.textDecoration = "none"
            }
            else {

                li.style.textDecoration = "line-through"
                li.style.background = "#00A9A9"
                li.style.color = "#F0F1F1"
            }
          

        }
        input.addEventListener("keypress", function (event) {
            if (event.key === "Enter") {
                event.preventDefault();
                if (input.value == "") {
                    alert('Please Enter Todo Item...')
                }
                else {
                    var a = JSON.parse(dataArr)
                    a.push({ "UserId": "2", "id": "23", "title": input.value, "completed": true })
                    localStorage.setItem('data', JSON.stringify(a))
                    console.log(a)
                    li = document.createElement("li")
                    li.innerHTML = input.value
                    list.appendChild(li)
                    li.style.marginBottom = "15px"
                    li.style.width = "50vh"
                   // li.innerHTML += '<li>' + "New Node" + ' <button onclick="removeNode('+i+');" style = "display:block;float:right;border-radius:5px;border:none;cursor:pointer;color:#FF0000;padding:4px">Delete</button> </li>'
                    li.style.backgroundColor = "#F3F5F5";
                    li.style.padding = "10px"

                }
            }
        });

    

    }
}
// function removeNode(index) {
    
//     list.removeChild(list.childNodes[index])
//     console.log(JSON.parse(dataArr))
//     JSON.parse(dataArr).splice(index,1)
//     localStorage.setItem('data',JSON.stringify(a))
   
// }
