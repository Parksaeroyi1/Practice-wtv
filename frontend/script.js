const list = document.querySelector("ul")
const form = document.querySelector("form")
const submit = document.querySelector("input[type=submit]")
const inputTitle = document.querySelector("input[name=title")
const inputDescription = document.querySelector("input[name=description")

async function saveData() {
    const url = "http://localhost:8000/notes";
    try {
        const rawResponse = await fetch(url, {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({title: inputTitle.value, description: inputDescription.value})
          });

          list.innerHTML = "";
          getData();
      
    } catch (error) {
      console.error(error.message);
    }
}


async function getData() {
    const url = "http://localhost:8000/notes";
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
  
      const json = await response.json();
      json.forEach( note => {
        list.innerHTML += `<li>${note.title} <br> ${note.description}</li>`
      });
    } catch (error) {
      console.error(error.message);
    }
  }


  getData();

  submit.addEventListener("click", (e) => {
    e.preventDefault();
    saveData();
  }) 