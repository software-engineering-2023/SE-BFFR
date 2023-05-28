(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();


    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 45) {
            $('.navbar').addClass('sticky-top shadow-sm');
        } else {
            $('.navbar').removeClass('sticky-top shadow-sm');
        }
    });

    // Dropdown on mouse hover
    const $dropdown = $(".dropdown");
    const $dropdownToggle = $(".dropdown-toggle");
    const $dropdownMenu = $(".dropdown-menu");
    const showClass = "show";

    $(window).on("load resize", function () {
        if (this.matchMedia("(min-width: 992px)").matches) {
            $dropdown.hover(
                function () {
                    const $this = $(this);
                    $this.addClass(showClass);
                    $this.find($dropdownToggle).attr("aria-expanded", "true");
                    $this.find($dropdownMenu).addClass(showClass);
                },
                function () {
                    const $this = $(this);
                    $this.removeClass(showClass);
                    $this.find($dropdownToggle).attr("aria-expanded", "false");
                    $this.find($dropdownMenu).removeClass(showClass);
                }
            );
        } else {
            $dropdown.off("mouseenter mouseleave");
        }
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
        return false;
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        dots: true,
        loop: true,
        center: true,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            }
        }
    });


    // Vendor carousel
    $('.vendor-carousel').owlCarousel({
        loop: true,
        margin: 45,
        dots: false,
        loop: true,
        autoplay: true,
        smartSpeed: 1000,
        responsive: {
            0: {
                items: 2
            },
            576: {
                items: 4
            },
            768: {
                items: 6
            },
            992: {
                items: 8
            }
        }
    });

})(jQuery);

/*<form id="myForm">
  <div class="col-xl-12">
    <input type="text" id="FirstName" class="form-control bg-light border-0" placeholder="First Name" style="height: 55px;" required>
  </div>
  <br>
  <div class="col-12">
    <input type="text" id="MiddleName" class="form-control bg-light border-0" placeholder="Middle Name" style="height: 55px;" required>
  </div>
  </br>
  <div class="col-12">
    <input type="text" id="LastName" class="form-control bg-light border-0" placeholder="Last Name" style="height: 55px;" required>
  </div>
  <br>
  <div class="col-xl-12">
    <input type="date" id="DateofBirth" class="form-control bg-light border-0" placeholder="Date of birth" style="height: 55px;" required>
  </div>
  </br>
  <div class="col-12">
    <input type="text" id="Address" class="form-control bg-light border-0" placeholder="Address" style="height: 55px;" required>
    </div>
  <br>
  <div class="col-12">
    <input type="email" id="Email" class="form-control bg-light border-0" placeholder="Email" style="height: 55px;" required>
        </div>
   </br>
  <div class="col-xl-12">
    <input type="text" id="PhoneNumber" class="form-control bg-light border-0" placeholder="Phone number" style="height: 55px;" required>
  </div>
  <br>
  <div class="col-12">
    <input type="text" id="Nationality" class="form-control bg-light border-0" placeholder="Nationality" style="height: 55px;" required>
  </div>
  </br>
  <div class="col-12">
    <input type="text" id="Nationalid/Passport" class="form-control bg-light border-0" placeholder="National id/ Passport" style="height: 55px;" required>
    </div>
    <br>
    <div class="col-12">
     <input type="text" id="Job" class="form-control bg-light border-0" placeholder="Job" style="height: 55px;" required>
    </div>
    </br>
    <div class="col-12">
        <select id="accountType" class="form-select bg-light border-0" style="height: 55px;" required>
            <option selected>Select Account type</option>
            <option value="1">Savings Account</option>
            <option value="2">Checking Account</option>
            <option value="3">Business Account</option>
        </select>
    </div>
    <br>
        <div class="col-12">
            <input type="text" id="Username" class="form-control bg-light border-0" placeholder="Username" style="height: 55px;" required>
        </div>
    </br>
    <div class="col-12">
        <input type="text" id="CreatePasswrod" class="form-control bg-light border-0" placeholder="Create Password" style="height: 55px;" required>
    </div>
    <br>
        <div class="col-12">
            <input type="text" id="ConfirmPassword" class="form-control bg-light border-0" placeholder="Confirm Password" style="height: 55px;" required>
        </div>
    </br>
  <!-- Rest of the form fields -->

  <div class="col-12">
    <button class="btn btn-dark w-100 py-3" type="submit">Submit</button>
  </div>
</form>


const form = document.getElementById('myForm');
form.addEventListener('submit', function(event) {
    const FirstName = document.getElementById('FirstName');
    const MiddleName = document.getElementById('MiddleName');
    const LastName = document.getElementById('LastName');
    const Dateofbirth = document.getElementById('Dateofbirth');
    const Address = document.getElementById('Address');
    const Email = document.getElementById('Email');
    const PhoneNumber = document.getElementById('PhoneNumber');
    const Nationality = document.getElementById('Nationality');
    const Nationalid/Passport = document.getElementById('Nationalid/Passport');
    const Job = document.getElementById('Job');
    const AccountType = document.getElementById('AccountType');
    const Username = document.getElementById('username');
    const CreatePassword = document.getElementById('createPassword');
    const ConfirmPassword = document.getElementById('confirmPassword');
      if (!FirstName.value || !MiddleName.value || !LastName.value || !Dateofbirth.value || !Address.value || !Email.value
          !PhoneNumber.value || !Nationality.value || !Nationalid.value || !Job.value || !AccountType.value ||
          !Username.value || ! CreatePassword.value || !ConfirmPassword.value ) {

            event.preventDefault(); // Prevent form submission
            alert('Please fill in all required fields.'); // Display alert message
    }
  }); */

const form = document.getElementById('myForm');

form.addEventListener('submit', function (event) {
    const requiredFields = form.querySelectorAll('[required]');

    let isFormValid = true;

    requiredFields.forEach(function (field) {
        if (!field.value) {
            isFormValid = false;
            field.classList.add('is-invalid');
        } else {
            field.classList.remove('is-invalid');
        }
    });

    if (!isFormValid) {
        event.preventDefault();
        alert('Please fill in all the required fields.');
    }
});


function showPaymentForm() {
    document.getElementById('paymentForm').style.display = 'block'; // Show the payment form
}

function decreaseCreditCardPayments() {
    var totalDue = 500; // Total amount due, you can change this value
    var paymentInput = document.getElementById('paymentInput');
    var paymentAmount = parseFloat(paymentInput.value);

    if (isNaN(paymentAmount) || paymentAmount <= 0) {
        // Show an error message if the entered payment amount is invalid
        document.getElementById('paymentMessage').textContent = 'Please enter a valid payment amount.';
    } else if (paymentAmount > totalDue) {
        // Show an error message if the entered payment amount exceeds the total due
        document.getElementById('paymentMessage').textContent = 'Payment amount cannot exceed the total due amount.';
    } else {
        // Process the payment and show a success message
        var remainingDue = totalDue - paymentAmount;
        document.getElementById('paymentMessage').textContent = 'Payment of $' + paymentAmount.toFixed(2) + ' successfully processed. Remaining due: $' + remainingDue.toFixed(2);
    }
}
function removeCreditCardPayments() {
    var paymentsLabel = document.getElementById('paymentsLabel');
    var currentPayments = parseInt(paymentsLabel.textContent);
    var updatedPayments = currentPayments - currentPayments;

    // Update the points label with the updated value
    paymentsLabel.textContent = updatedPayments.toString();
}

function decreaseCreditCardPayments() {
    var paymentsLabel = document.getElementById('paymentsLabel');
    var currentPayments = parseInt(paymentsLabel.textContent);
    var updatedPayments = currentPayments - 5000;

    // Update the points label with the updated value
    paymentsLabel.textContent = updatedPayments.toString();
}

function decreasePoints() {
    var pointsLabel = document.getElementById('pointsLabel');
    var currentPoints = parseInt(pointsLabel.textContent);
    var updatedPoints = currentPoints - 10;

    // Update the points label with the updated value
    pointsLabel.textContent = updatedPoints.toString();
}
let users = {
    client: { username: "shahd", password: "1234" },
    banker: { username: "maya", password: "1234" },
    admin: { username: "sara", password: "1234" }
};

function login() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (users.client.username === username && users.client.password === password) {
        window.location.href = "clientView.html";
    } else if (users.banker.username === username && users.banker.password === password) {
        window.location.href = "bankerView.html";
    } else if (users.admin.username === username && users.admin.password === password) {
        window.location.href = "adminView.html";
    } else {
        alert("Invalid username or password");
    }
}