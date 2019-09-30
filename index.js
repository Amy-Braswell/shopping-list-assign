 
//To let user enter their item in the input box and make 'Add Item' button work
$(function() {
    $('#js-shopping-list-form').submit(event => {
      // this stops the default form submission behavior
      event.preventDefault();
      const userTextElement = $(event.currentTarget).find('#shopping-list-entry');
      $(".js-display-user-text").text(`user text is:  ${userTextElement.val()}`);
      userTextElement.val("");
    }); 
    
  });
    
    //To remove the line item when user clicks the Delete button
    $('.shopping-item-delete').on('click', removeListItem);
    
    function removeListItem() {
         // function targets that list item
         $( event.target ).closest( "li" );
         // removes that li 
         $('li').click(function(event) {
             this.remove();
           });
    }