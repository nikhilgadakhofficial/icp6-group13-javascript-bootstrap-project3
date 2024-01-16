

function confirmBooking() {
   const isConfirmed = confirm("Are you sure you want to confirm the booking?");

   if (isConfirmed) {
       const fullName = document.getElementById("fullName").value;
       const delAddress = document.getElementById("delAddress").value;
       const gEmail = document.getElementById("gEmail").value;

       alert(`Booking Confirmed!\nName: ${fullName}  \nDelivery Address: ${delAddress} \nEmail: ${gEmail}.`);
   }
}

document.getElementById("confirmBooking").addEventListener("click", function(event) {
   event.preventDefault();
   confirmBooking();
});
