document.addEventListener('DOMContentLoaded', () => {

    let addButton = document.querySelector("#add");
    let addInput = document.querySelector("#task");

    let removeSVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 84V56c0-13.3 10.7-24 24-24h112l9.4-18.7c4-8.2 12.3-13.3 21.4-13.3h114.3c9.1 0 17.4 5.1 21.5 13.3L312 32h112c13.3 0 24 10.7 24 24v28c0 6.6-5.4 12-12 12H12C5.4 96 0 90.6 0 84zm416 56v324c0 26.5-21.5 48-48 48H80c-26.5 0-48-21.5-48-48V140c0-6.6 5.4-12 12-12h360c6.6 0 12 5.4 12 12zm-272 68c0-8.8-7.2-16-16-16s-16 7.2-16 16v224c0 8.8 7.2 16 16 16s16-7.2 16-16V208zm96 0c0-8.8-7.2-16-16-16s-16 7.2-16 16v224c0 8.8 7.2 16 16 16s16-7.2 16-16V208zm96 0c0-8.8-7.2-16-16-16s-16 7.2-16 16v224c0 8.8 7.2 16 16 16s16-7.2 16-16V208z"/></svg>`;

    let completedSVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"/></svg>`;

    addButton.addEventListener("click", function () {

        let newTask = document.getElementById("task").value;

        if (newTask) {

            addNewTask(newTask);

            document.getElementById("task").value = "";
        }
    });

    addInput.addEventListener("keypress", function (e) {

        if (13 === e.keyCode) {

            let newTask = document.getElementById("task").value;

            if (newTask) {
                addNewTask(newTask);

                document.getElementById("task").value = "";
            }
        }

    });

    function addNewTask(text) {
        // grab the `ul`
        let list = document.getElementById("new-task");
        // create an `li`
        let task = document.createElement('li');
        task.classList.add('check-task')

        task.innerText = text;

        //create container for our buttons remove and completed

        let buttons = document.createElement('div');
        buttons.classList.add("buttons-task");

        //create the two buttons

        let remove = document.createElement('button');
        remove.classList.add('remove');

        //add the SVG icon to the button

        remove.innerHTML = removeSVG;
        // add event listener for remove
        // this fuction will be definedd later

        remove.addEventListener("click", removeTask);


        // completed button

        let completed = document.createElement('button');

        completed.classList.add('completed-task');

        completed.innerHTML = completedSVG;

        completed.addEventListener("click", completedTask);

        buttons.appendChild(remove);
        buttons.appendChild(completed);

        task.appendChild(buttons);

        list.insertBefore(task, list.childNodes[0]);
    }

    function completedTask() {

        let task = this.parentNode.parentNode;

        let parent = task.parentNode;

        let id = parent.id;

        let target = (id === "new-task") ? document.getElementById("completed") : document.getElementById("new-task");

        parent.removeChild(task);

        target.insertBefore(task, target.childNodes[0]);
    }

    function removeTask() {

        let task = this.parentNode.parentNode;

        let parent = task.parentNode;

        parent.removeChild(task);
    }





});
