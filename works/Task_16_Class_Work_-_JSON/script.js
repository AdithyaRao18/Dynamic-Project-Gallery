const works = {
    "task1": { "title": "Project 1", "url": "works/task1/index.html" },
    "task2": { "title": "Project 2", "url": "works/task2/index.html" },
    "task3": { "title": "Project 3", "url": "works/task3/index.html" }
    
};

function loadTask(taskKey) {
    const frame = document.getElementById("content-frame");
    if (works[taskKey]) {
        frame.src = works[taskKey].url;
    }
}
