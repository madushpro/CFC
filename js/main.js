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
    
    $(window).on("load resize", function() {
        if (this.matchMedia("(min-width: 992px)").matches) {
            $dropdown.hover(
            function() {
                const $this = $(this);
                $this.addClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "true");
                $this.find($dropdownMenu).addClass(showClass);
            },
            function() {
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
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
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
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
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
            0:{
                items:2
            },
            576:{
                items:4
            },
            768:{
                items:6
            },
            992:{
                items:8
            }
        }
    });
    
})(jQuery);

document.getElementById('outletBtn').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default action of anchor tag

    // Fetch the text file
    fetch('area.txt')
        .then(response => response.text())
        .then(data => {
            // Parse and format the data into HTML
            const outletData = formatOutletData(data);

            // Display the formatted data in the popup
            document.getElementById('outletData').innerHTML = outletData;

            // Show the popup
            document.getElementById('popup').style.display = 'block';
        })
        .catch(error => console.error('Error fetching the file:', error));
});

// Function to format the text data into HTML structure
function formatOutletData(data) {
    const outlets = data.split('\n'); // Split the data by newline for each outlet
    let formattedData = '';

    outlets.forEach(outlet => {
        const [name, address, phone] = outlet.split('~'); // Split each outlet line by '~'
        if (name && address && phone) { // Check if the data is valid
            formattedData += `
                <div class="outlet">
                    <h3>${name}</h3> <!-- Outlet Name -->
                    <p><strong>Address:</strong> ${address}</p>
                    <p><strong>Phone Number:</strong> ${phone}</p>
                    <hr>
                </div>`;
        }
    });

    return formattedData;
}

// Event listener to close the popup when 'X' is clicked
document.getElementById('closePopup').addEventListener('click', function() {
    document.getElementById('popup').style.display = 'none'; // Hide the popup
});

// Event listener to close the popup if clicking outside the content
window.addEventListener('click', function(event) {
    const popup = document.getElementById('popup');
    if (event.target == popup) {
        popup.style.display = 'none'; // Hide the popup
    }
});


function openImageModal() {
    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");

    // Image source and caption
    modalImg.src = "gallery/pic12.jpg";
    captionText.innerHTML = "Snow";

    // Display the modal
    modal.style.display = "block";

    // Close the modal when user clicks on the "x" button
    var span = document.getElementsByClassName("close")[0];
    span.onclick = function() {
        modal.style.display = "none";
    }

    // Close the modal when clicking outside of the image
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}

