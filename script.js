function addTask() {
    var input = document.getElementById("taskInput");
    var task = input.value.trim();
    var dateTime = document.getElementById("taskDateTime").value;
  
    if (task !== "") {
      var ul = document.getElementById("taskList");
      var li = document.createElement("li");
      var taskItem = document.createElement("div");
      taskItem.classList.add("task");
  
      taskItem.innerHTML = `
        <span>${task}</span>
        <span>${formatDateTime(dateTime)}</span>
        <button class="delete-btn" onclick="deleteTask(this)">❌</button>
      `;
  
      li.appendChild(taskItem);
      ul.appendChild(li);
  
      input.value = "";
      document.getElementById("taskDateTime").value = "";
    }
  }
  
  function deleteTask(element) {
    var li = element.parentNode.parentNode;
    var ul = li.parentNode;
    ul.removeChild(li);
  }
  
  function formatDateTime(dateTime) {
    var date = new Date(dateTime);
    var options = { year: "numeric", month: "short", day: "numeric", hour: "numeric", minute: "numeric" };
    return date.toLocaleDateString("en-US", options);
  }

  