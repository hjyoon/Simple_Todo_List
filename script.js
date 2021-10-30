const addBtn = document.querySelector('#add')
const divTag = document.querySelector('#todolist')

const addTodo = (event) => {
    event.preventDefault()

    const pTag = document.createElement('p')
    const chkboxTag = document.createElement('input')
    chkboxTag.setAttribute('type', 'checkbox')
    pTag.appendChild(chkboxTag)

    const getCheckboxValue = (event) => {
        const parentNode = event.target.parentNode
        const nodes = parentNode.childNodes
        if (event.target.checked) {
            nodes[1].classList.add('done')
        }
        else {
            nodes[1].classList.remove('done')
        }
    }

    chkboxTag.addEventListener('click', getCheckboxValue)

    const inputTag = document.createElement('input')
    inputTag.setAttribute('type', 'text')
    inputTag.setAttribute('class', 'todo_item')
    pTag.appendChild(inputTag)

    const XTag = document.createElement('button')
    XTag.append('X')
    pTag.appendChild(XTag)

    // 리스트 삭제하기
    const removeParentNode = (event) => {
        const target = event.target;
        target.removeEventListener("click", removeParentNode);
        target.parentNode.remove();
    }

    XTag.addEventListener('click', removeParentNode)

    divTag.appendChild(pTag)
}

addBtn.addEventListener('click', addTodo)