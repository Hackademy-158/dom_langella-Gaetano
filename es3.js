let contacts = [
    { 'id': 1, 'name': 'Nicola'},
    { 'id': 2, 'name': 'Fabio'},
    { 'id': 3, 'name': 'Luca'},
    { 'id': 4, 'name': 'Giulia'}
] 

function displayContacts(contactsArray) {
    let ul = document.getElementById("contacts-list");
    ul.innerHTML = '';
    contactsArray.forEach(contact => {
        let li = document.createElement("li");
        li.textContent = `${contact.name} (ID: ${contact.id})`;
        ul.appendChild(li);
    });
}

function sortByIdAscending() {
    let sortedContacts = [...contacts].sort((a, b) => a.id - b.id);
    displayContacts(sortedContacts);
}

function sortByIdDescending() {
    let sortedContacts = [...contacts].sort((a, b) => b.id - a.id);
    displayContacts(sortedContacts);
}

function sortByNameAscending() {
    let sortedContacts = [...contacts].sort((a, b) => a.name.localeCompare(b.name));
    displayContacts(sortedContacts);
}

function sortByNameDescending() {
    let sortedContacts = [...contacts].sort((a, b) => b.name.localeCompare(a.name));
    displayContacts(sortedContacts);
}

displayContacts(contacts);