

Meteor.startup(function () {

   $('#myModal').modal('hide');


   $( "#mapCanvas" ).gmap3({

      map:{
         options:{
            center:[46.578498,2.457275],
            zoom: 5
         },

         events:{
            click:
               function(map, event){
                  $('#myModal').modal('show');
                  updateCreateForm(event.latLng);

               }
         }

      },

   });

   // Position de #mapCanvas en bas du header
   $( "#mapCanvas" ).position({
      my: "center top",
      at: "center bottom",
      of: ".navbar"
   });





   //$("#draggable").draggable();


    //if close button is clicked
    $('.window .close').click(function (e) {
        //Cancel the link behavior
        e.preventDefault();
        $('#mask, .window').hide();
    });

    //if mask is clicked
    $('#mask').click(function () {
        $(this).hide();
        $('.window').hide();
    });



var openCreateDialog = function () {
  Session.set("showCreateDialog", true);
}


});


function(latLng){
   $("crtGeaddLat").val(latLng.lat());
   $("crtGeaddLng").val(latLng.lng());
   $("crtGeaddGZoom").val(latLng.lat());

}

Template.createDialog.events({


  'click .cancel': function () {
    Session.set("showCreateDialog", false);

  }
});
