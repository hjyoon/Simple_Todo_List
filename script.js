const add_btn = document.querySelector('#add_btn')
const todolist = document.querySelector('#todolist')

// 리스트 삭제하기
const removeParentNode = (event) => {
    const target = event.target;
    target.removeEventListener("click", removeParentNode);
    target.parentNode.remove();
}

// 체크박스 체크시 취소선 긋기
const getCheckboxValue = (event) => {
    //const parentNode = event.target.parentNode
    //const nodes = parentNode.childNodes
    // if (event.target.checked) {
    //     nodes[1].classList.add('done')
    // }
    // else {
    //     nodes[1].classList.remove('done')
    // }
    //nodes[1].classList.toggle('done')
    event.target.nextSibling.classList.toggle('done')
}

const makeItem = () => {
    const item = document.createElement('div')
    item.setAttribute('class', 'todo_item')

    const chkbox = document.createElement('input')
    chkbox.setAttribute('type', 'checkbox')
    chkbox.addEventListener('click', getCheckboxValue)
    item.appendChild(chkbox)

    const inputTag = document.createElement('input')
    inputTag.setAttribute('type', 'text')
    inputTag.setAttribute('class', 'todo_item_form')
    item.appendChild(inputTag)

    const del_btn = document.createElement('button')
    del_btn.setAttribute('class', 'del_btn')
    del_btn.append('X')
    item.appendChild(del_btn)

    //del_btn.addEventListener('click', removeParentNode)
    del_btn.addEventListener('click', (event) => {
        item.remove()
    })

    return item
}

const addTodo = (event) => {
    // event.preventDefault()
    const item = makeItem()
    // console.log(item)
    todolist.appendChild(item)
}

add_btn.addEventListener('click', addTodo)