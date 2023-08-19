forForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const inText = forForm.glob.value.trim();
  tenTodos(inText);
  mycompleted(inText);
  backUserID(inText);
  backID(inText);
  forForm.reset();
});

const tenTodos = (item) => {
    one.innerHTML = "";
  getData().then((data) => {
    data.map((i) => {
      if (i.id >= (item - 1) * 10 && i.id <= (item - 1) * 10 + 10) {
        one.innerHTML += `
      <p>userId: ${i.userId}, id: ${i.id}, completed: ${i.completed}, title: ${i.title}</p>
      `;
      }
    });
  });
};

const mycompleted = (item) => {
    two.innerHTML = "";
    three.innerHTML = "";
    getData().then((data) => {
    data.map((i) => {
        if (item === 'true' && i.completed == true) {
            two.innerHTML += `
          <p>userId: ${i.userId}, id: ${i.id}, completed: ${i.completed}, title: ${i.title}</p>
          `;
        } else if (item === 'false' && i.completed == false)  {
            three.innerHTML += `
          <p>userId: ${i.userId}, id: ${i.id}, completed: ${i.completed}, title: ${i.title}</p>
          `;
        }
    });
    });
  };

  const backUserID = (item) => {
    four.innerHTML = "";
    getData().then((data) => {
    data.map((i) => {
        if (i.userId == item) {
            four.innerHTML += `
          <p>userId: ${i.userId}, id: ${i.id}, completed: ${i.completed}, title: ${i.title}</p>
          `;
        } 
    });
    });
  };

  const backID = (item) => {
    five.innerHTML = "";
    getData().then((data) => {
    data.map((i) => {
        if (i.id == item) {
            five.innerHTML += `
          <p>userId: ${i.userId}, id: ${i.id}, completed: ${i.completed}, title: ${i.title}</p>
          `;
        } 
    });
    });
  };