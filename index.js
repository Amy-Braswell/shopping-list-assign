 
//Takes user input and creates new list item on shopping list
$(function() {
  $('#js-shopping-list-form').submit(event => {
    // this stops the default form submission behavior
    event.preventDefault();
    // stores user input in a variable
    const userTextElement = $(event.currentTarget).find('#shopping-list-entry');

//places variable storing user input in a string literal that is prepended to the ul
  $("ul.shopping-list").prepend(`<li>
      <span class="shopping-item">${userTextElement.val()}</span>
      <div class="shopping-item-controls">
        <button class="shopping-item-toggle">
          <span class="button-label">check</span>
        </button>
        <button class="shopping-item-delete">
          <span class="button-label">delete</span>
        </button>
      </div>
    </li>`)
    //empties input box after user input is added to shopping list
    userTextElement.val("");
    }); 
});

//To strikethough the list item text when user clicks the 'Check' button 
//Attaches event listener to <ul> because <li's> will be added by user after page loads
// Line 31 is "$('ul').on('click', '.shopping-item-toggle', strikeListItem);" INSTEAD OF
// "$('.shopping-item-toggle').on('click', strikeListItem);"  because Line 30 (here) doesn't use event delegation
$('ul').on('click', '.shopping-item-toggle', strikeListItem);
  function strikeListItem() {
  //creates variable to find the <li> that contains the delete button which was clicked.
  const closestParentLI = $(this).closest("li");
  //finds the span with the class "shopping-item" within the SAME <li> and toggles the class
  closestParentLI.find("span.shopping-item").toggleClass('shopping-item__checked');
  };

//To remove the list item when user clicks the 'Delete' button
$('ul').on('click','.shopping-item-delete', removeListItem);
  function removeListItem() {
  // function targets that list item and ONLY that list item
  $(this).closest("li").remove();
  };






  