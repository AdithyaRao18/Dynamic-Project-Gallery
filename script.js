document.addEventListener("DOMContentLoaded", function () {
    const taskList = document.getElementById("task-list");
    const taskFrame = document.getElementById("task-frame");
    const taskTitle = document.getElementById("task-title"); 

    fetch("tasks.json")
        .then(response => response.json())
        .then(tasks => {
            tasks.forEach(task => {
                const li = document.createElement("li");
                li.textContent = task.name;

                li.addEventListener("click", () => {
                    document.querySelectorAll(".sidebar ul li").forEach(item => item.classList.remove("active"));
                    li.classList.add("active");

                    
                    taskTitle.innerText = task.name;

                    
                    fetch(task.path)
                        .then(response => {
                            if (response.ok) {
                                taskFrame.src = task.path;
                            } else {
                                console.error(`Error: ${task.path} not found!`);
                                alert("Task page not found!");
                            }
                        })
                        .catch(error => {
                            console.error("Error loading task page:", error);
                            alert("Error loading task page!");
                        });
                });

                taskList.appendChild(li);
            });
        })
        .catch(error => console.error("Error loading tasks.json:", error));
});
