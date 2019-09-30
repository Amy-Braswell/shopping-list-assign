 
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
  

   //To strikethough the list item text when user clicks the 'Check' button 
   //???? How do I target JUST this grocery item ???? Can't figure out how to make
   // .closest work here...
   $('.shopping-item-toggle').on('click', strikeListItem);
   function strikeListItem() {
     
     $( this ).toggleClass('shopping-item__checked'); // strikes button

     $('span.shopping-item').toggleClass('shopping-item__checked');  // strikes all li's
   };



  //To remove the list item when user clicks the 'Delete' button
  //????? Once a user clicks a 'Delete' button then ANY other button clicked will remove 
  //the list item, whether the button is a 'Check' or 'Delete' button ????
  $('.shopping-item-delete').on('click', removeListItem);
    function removeListItem() {
         // function targets that list item
         $( event.target ).closest( "li" );
         // removes that li 
         $('li').click(function(event) {
             this.remove();
        });
    };






  