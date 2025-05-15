const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list'); // reference to the unordered list element



button.addEventListener('click', () => {
    if (input.value.trim() !== '') { 
        const listItems = document.createElement("li");
        const deleteButton = document.createElement("button");

        listItems.textContent = input.value;
        deleteButton.textContent = "❌";
        listItems.append(deleteButton);
        list.appendChild(listItems);

        // Delete functionality for this specific item
        deleteButton.addEventListener('click', function () {
            list.removeChild(listItems);
            input.value = '';
            input.focus();
        });

        input.value = '';
        input.focus();
    }
});

