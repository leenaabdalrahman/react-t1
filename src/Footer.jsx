export default function Footer(){
  return <>
  <footer class="bg-dark text-white py-4">
  <div class="container">
    <div class="row">
      <div class="col-md-4 col-sm-4">
        <h5>About Us</h5>
        <p>
          We are a leading pizza delivery service, offering a wide variety of
          delicious pizzas to satisfy your cravings.
        </p>
      </div>
      <div class="col-md-4 col-sm-4">
        <h5>Quick Links</h5>
        <ul class="list-unstyled">
          <li><a href="#" class="text-white">Home</a></li>
          <li><a href="#" class="text-white">Menu</a></li>
          <li><a href="#" class="text-white">Contact Us</a></li>
        </ul>
      </div>
      <div class="col-md-4 col-sm-4">
        <h5>Contact Us</h5>
        <p>
          <i class="fas fa-map-marker-alt"></i> Ramallah birzeit
        </p>
        <p><i class="fas fa-phone"></i> 0595846225 </p>
        <p><i class="fas fa-envelope"></i> leenabdalrahman@gmail.com</p>
      </div>
    </div>
    <div class="text-center mt-3">
      <p>&copy; 2024 Pizza Shop. All rights reserved.</p>
    </div>
  </div>
</footer>

  </>
}