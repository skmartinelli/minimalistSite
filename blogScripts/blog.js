function renderList(items) {
    list.innerHTML = '';
    items.forEach((item, index) => {
      
      let title = item[0];
      let date = item[1];
      let summary = item[2];
      
      const li = document.createElement('li');
      const name = document.createElement('span');
      name.textContent = title + " - " + date + " - " + summary;
      const edit = document.createElement('button');
      edit.textContent = 'Edit';
      edit.dataset.index = index;
      edit.classList.add('edit');
      const del = document.createElement('button');
      del.textContent = 'Delete';
      del.dataset.index = index;
      del.classList.add('delete');
      li.appendChild(name);
      li.appendChild(edit);
      li.appendChild(del);
      list.appendChild(li);
    });


    localStorage.setItem('SamsblogPosts', JSON.stringify(items));

}



function setupHTML5Form(items){
    
    // HTML element containing list
    const list = document.getElementById('list');

    // HTML5 dialog Operations
    const showPrompt = document.getElementById('showPrompt');
    const prompt =  document.getElementById('prompt');
    const titleBox = document.getElementById('titleBox');
    const dateBox = document.getElementById('dateBox');
    const summaryBox = document.getElementById('summaryBox');

    
    var editing = 0; // state saying whether the modal closing represents an append(0) or edit(1)
    var editingIndex = 0; // tracker for which item being edited
    let title = 'title';
    let date = 'date';
    let summary = 'summary';

    // Open the HTML5 form
    showPrompt.addEventListener('click', () => {
        editing = 0;
        prompt.showModal();
    });

    // HTML5 Form values
    titleBox.addEventListener('change', () => {
        title = titleBox.value;
    });
    dateBox.addEventListener('change', () => {
        date = dateBox.value;
    });
    summaryBox.addEventListener('change', () => {
        summary = summaryBox.value;
    });

    // On close, either append or edit the list
    prompt.addEventListener('close', () => {
    
        prompt.returnValue = [title, date, summary];
        console.log(prompt.returnValue);
        //  Case for modal closing and adding an item
        if (!editing){
            items.push([title, date, summary]);
            console.log(items);
        }
        // Case for modal closing and editing an item
        else{
            items.splice(editingIndex, 1, [title, date, summary]);
        }

        // render, then set editing back to 0, assuming next is an Append
        renderList(items);
        editing = 0;
       });


    // Delete item from list
    list.addEventListener('click', (event) => {
        if (event.target.classList.contains('delete')) {
          const index = event.target.dataset.index;
          console.log(index);
          items.splice(index, 1);
          renderList(items);
        }
      });

    // Edit item in list
    list.addEventListener('click', (event) => {
        editing = 1;
        
        if (event.target.classList.contains('edit')) {
          editingIndex = event.target.dataset.index;
          prompt.showModal();
          
        }
      });
}




// --------- MAIN -----------

let items = [
    ['I turned in the homework late', 'March 3', 'I procrastinated and did not feel like working. There is not a good reason for this'],
    ['How to reverse a linked list', 'March 1', 'I describe how to reverse a linked list.'],
    ['I spent the whole day playing Destiny', 'February 28', 'I spent an entire day playing the new Destiny 2 expansion and here\'s what I learned. (Not a thing)']
];

if( localStorage.getItem('SamsblogPosts')){
    
    items = JSON.parse(localStorage.getItem("SamsblogPosts"));
    console.log(items);
}




renderList(items);
setupHTML5Form(items);





  