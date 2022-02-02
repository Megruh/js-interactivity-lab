const message = document.querySelector("#message")

const addMovie = (event) => {
    event.preventDefault()
    const inputField = document.querySelector("input")
    const movie = document.createElement('li')
    const movieTitle = document.createElement('span')
    movieTitle.textContent = inputField.value
    movie.appendChild(movieTitle)

    movieTitle.addEventListener('click', crossOffMovie)

    const deleteBtn = document.createElement("button")
    const x = deleteBtn.textContent

    deleteBtn.addEventListener('click', deleteMovie)

    movie.appendChild(deleteBtn)

    const select = document.querySelector('ul')
    select.appendChild(movie)

    inputField.value = ''
}

document.querySelector('form').addEventListener("submit", addMovie)

const revealMessage = () => {
    message.classList.remove('hide')

    setTimeout(() => {
        message.classList.add('hide')
    }, 1000)
}

const deleteMovie = (event) => {
    event.target.parentNode.remove()
    message.textContent = `${event.target.parentNode.firstChild.textContent} deleted!`
    revealMessage()
}


const crossOffMovie = (event) => {
    event.target.classList.toggle('checked')
    if (event.target.classList.contains("checked")){
        message.textContent = `${event.target.textContent} watched!`
    } else {
        message.textContent = `${event.target.textContent} added back!`
    }
    revealMessage()
}

