const form = document.querySelector('form')

const addTodo = function (event) {
    event.preventDefault()

    const input = document.querySelector('input')
    const content = input.value

    const pTag = document.createElement('p')
    const inputTag = document.createElement('input')
    inputTag.setAttribute('type', 'checkbox')
    pTag.appendChild(inputTag)

    const getCheckboxValue = function (event) {
        let result = '';
        if (event.target.checked) {
            result = event.target.value;
        }
        else {
            result = '';
        }
        document.alert(result)
    }

    inputTag.addEventListener('checked', getCheckboxValue)

    const inputTag2 = document.createElement('input')
    inputTag2.setAttribute('type', 'text')
    inputTag2.setAttribute('placeholder', 'empty')
    inputTag2.setAttribute('value', content)
    pTag.appendChild(inputTag2)

    //inputTag2.style.textDecorationLine = "line-through"

    const XTag = document.createElement('button')
    XTag.append('X')
    pTag.appendChild(XTag)

    // 리스트 삭제하기
    const removeParentNode = function (event) {
        var target = event.target;
        target.removeEventListener("click", removeParentNode);
        target.parentNode.remove();
    }

    XTag.addEventListener('click', removeParentNode)

    const divTag = document.querySelector('div')
    divTag.appendChild(pTag)

    event.target.reset()
}

form.addEventListener('submit', addTodo)