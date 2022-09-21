
//Getting Views
let list = document.getElementById("unordered")
var input = document.getElementById("add-input");
var btn = document.getElementById("btn")

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

        for (var i = 0; i <= 7; i++) {

            li = document.createElement("li")
            li.style.marginBottom = "15px"
            li.style.width = "100%"

            li.innerHTML += '<input type="checkbox" /> ' + JSON.parse(dataArr)[i].title + ''


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


                    li.innerHTML = '<input type="checkbox" class = select/> ' + input.value + ''
                    li.style.backgroundColor = "#F3F5F5";
                    li.style.padding = "10px"
                    input.value = ""
                }
            }
        });

        // list.addEventListener('click', function(e) {
        //     this.removeChild(e.target);
        //   })

    }

}
function clearData() {
    localStorage.clear()
    list.innerHTML = ""

}

function rem() {
    // if (document.getElementsByClass('select').options.length == 0) {
    //     alert('The selectbox contains 0 items');
    //     return
    // }
    var list = document.getElementById('unordered'),
        items = Array.prototype.slice.call(list.childNodes),
        item;
    while (item = items.pop()) {
        if (item.firstChild && item.firstChild.checked) {
            list.removeChild(item);
            //  console.log()
        }
    }
}
