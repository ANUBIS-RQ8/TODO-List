let taskData = [
    {
    task: 'Завтрак',
    discription: 'Приготовить омлет',
    importance: 'Важно',
    status: 'Активно'
},
    {
    task: 'Тренировка',
    discription: '30 приседаний',
    importance: 'Важно',
    status: 'Активно'
}
        ];
tableDraw(taskData);

function tableDraw(mass){
let table = document.querySelector('.table');
table.innerHTML = '';
for(let el of mass) {
    table.innerHTML += `<tr>
        <td>${el.task}</td>
        <td>${el.discription}</td>
        <td>${el.importance}</td>
        <td><select><option>${el.status}</option></select></td>
        </tr>`;
}
}

// Кнопка ОК/добавление задачи в список задач

const ok = document.querySelector('.ok');
ok.addEventListener('click', function(foo){
    let inputs = document.querySelector('.popap-form input');
    let selects = document.querySelectorAll('.popap-form select');
    let newTask = {};
    for(let input of inputs){
        newTask[input.name] = input.value
    }
/*    for(let select of selects){
        newTask[select.name] = select.value
    }
 */
    data.push(newTask);
    tableDraw(data);
})
