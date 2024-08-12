const inputBox = document.getElementById('inputBox');
const listContainer = document.getElementById('list');
const dateInput = document.getElementById('dateInp')
const btn = document.querySelector('#btnR');
btn.addEventListener('click', addTask);


function addTask() {
    if (inputBox.value == '') {
        alert('Write a task!');
    } else {
        let li = document.createElement('li');
        let delImg = document.createElement('img');
        delImg.src = ".//images/deleteImg.png";
        delImg.classList.add('deleteImg');
        let task = document.createElement('span');
        const days = timeDiffer();
        task.textContent = inputBox.value;
        li.appendChild(task);
        li.appendChild(delImg);
        if (days > 0) {
            let daysSpan = document.createElement('span');
            daysSpan.textContent = ` ${days} days left`;
            daysSpan.style.color = 'gray';
            daysSpan.style.float = 'right';
            daysSpan.style.verticalAlign = 'middle';
            li.appendChild(daysSpan);
        }
        listContainer.appendChild(li);
    }

    inputBox.value = '';
    saveData();
}

listContainer.addEventListener("click", function (e) {
    if (e.target.tagName == 'LI') {
        e.target.classList.toggle("checked");
        console.log('check');
        saveData()
    } else if (e.target.nodeName == 'SPAN') {
        e.target.parentElement.classList.toggle("checked");
    } else if (e.target.tagName == 'IMG') {
        e.target.parentElement.remove()
        console.log('remove');
        saveData()
    }
}, false)

function saveData() {
    localStorage.setItem('data', listContainer.innerHTML)
}
function showData() {
    listContainer.innerHTML = localStorage.getItem('data');
}
showData();

function timeDiffer() {
    console.log(dateInput.value);
    let date = new Date();
    let date2 = new Date(dateInput.value);
    let days = Math.ceil(-1 * ((date - date2) / (24 * 3600 * 1000)));
    return days;
}