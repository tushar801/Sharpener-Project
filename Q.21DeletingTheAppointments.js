let arr;
    const object = {
        name: event.target.name.value,
        email: event.target.email.value,
        phone: event.target.phone.value,
        name : event.target.name.value,
        email : event.target.email.value,
        phone : event.target.phone.value,
        //   age :  event.target.age.value
    }
    axios.post("https://crudcrud.com/api/83a088dfbd2b479dbfa6403f2e3c3384/appointmentData", object)
window.addEventListener("DOMContentLoaded", () => {
        })
})
function showUserOnScreen(object) {

    const parentEle = document.getElementById('listItems')
    const childEle = document.createElement('li')

    document.getElementById('userTag').value = object.name
        document.getElementById('phoneTag').value = object.phone
        document.getElementById('emailTag').value = object.email


    childEle.textContent = object.name + '-' + object.phone + '-' + object.email
    const delBtn = document.createElement('input')
    delBtn.type = 'button'
 function showUserOnScreen(object) {
        // localStorage.removeItem(object.email)

        parentEle.removeChild(childEle)
        axios.delete(`https://crudcrud.com/api/83a088dfbd2b479dbfa6403f2e3c3384/appointmentData/${object._id}`)
            .then((response) => {
                // If the deletion is successful, remove the element from the UI
                parentEle.removeChild(childEle);
            })
            .catch((error) => {
                console.log(error);
            });
    }
    const editBtn = document.createElement('input')
    editBtn.type = 'button'
    editBtn.value = 'edit'
    editBtn.onclick = () => {
        localStorage.removeItem(object.email)
        // localStorage.removeItem(object.email)
        parentEle.removeChild(childEle)


        document.getElementById('userTag').value = object.name
        document.getElementById('phoneTag').value = object.phone
        document.getElementById('emailTag').value = object.email
        // document.getElementById('userTag').value = object.name
        // document.getElementById('phoneTag').value = object.phone
        // document.getElementById('emailTag').value = object.email
        // document.getElementsByTagName('ageTag').value = object.age

    }
    childEle.appendChild(editBtn)
    childEle.appendChild(delBtn)