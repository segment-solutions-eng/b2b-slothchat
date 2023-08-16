document.addEventListener('DOMContentLoaded', function () {

    //Load Product or Event Data
    const products = [
        { id: 1, name: "Rolex Submariner", image: "rolex-submariner.avif", description: "The Rolex Submariner is a legendary dive watch known for its durability and precision. It features a ceramic bezel, self-winding movement, and water resistance up to 300 meters. A true classic." },
        { id: 2, name: "Rolex Datejust", image: "rolex-datejust.avif", description: "The Rolex Datejust is a classic timepiece known for its elegant design and timeless style. It features a date window, automatic movement, and a variety of dial and bracelet options." },
        { id: 3, name: "Rolex GMT-Master II", image: "rolex-gmt-master-ii.avif", description: "The Rolex GMT-Master II is a travel-friendly watch with a dual time zone function. It's a favorite among frequent travelers and features a distinctive ceramic bezel." },
        { id: 4, name: "Rolex Day-Date", image: "rolex-day-date.avif", description: "The Rolex Day-Date, also known as the \"President\" watch, is a symbol of prestige and luxury. It features both the day and date displays, along with an automatic movement and exquisite design." },
        { id: 5, name: "Rolex Daytona", image: "rolex-daytona.avif", description: "The Rolex Daytona is a legendary chronograph watch known for its association with motorsports. It features a tachymeter bezel and precise movement, making it a favorite among racing enthusiasts." },
        { id: 6, name: "Rolex 1908", image: "rolex-1908.avif", description: "The Rolex 1908 is a classic timepiece that pays homage to the brand's rich history. With its elegant design and refined details, this watch captures the essence of timeless luxury." }
    ];

    function getProductInfo(productId) {
        return products.find(product => product.id === parseInt(productId));
    }

    //Create the product cards based off of the data provided
    function generateProductCard(product) {
        const productCard = document.createElement('div');
        productCard.classList.add('col-md-4');

        productCard.innerHTML = `
            <div class="card mb-4">
                <div class="card-body text-center">
                    <h2>${product.name}</h2>
                    <p>${product.description}</p>
                    <a href="#" class="btn btn-primary btn-learn-more" data-product-id="${product.id}"
                        data-bs-toggle="modal" data-bs-target="#productModal">Learn More</a>
                </div>
            </div>
        `;

        return productCard;
    }

    function generateProductCards() {
        const productRow = document.getElementById('productRow');
        products.forEach(product => {
            const productCard = generateProductCard(product);
            productRow.appendChild(productCard);
        });
    }

    generateProductCards();

    //MODAL FUNCTIONALITY
    const modalTriggerButtons = document.querySelectorAll('.btn-learn-more');
    const modalTitle = document.getElementById('productModalLabel');
    const modalImage = document.querySelector('.modal-body img');
    const modalDescription = document.querySelector('.modal-body p');

    modalTriggerButtons.forEach(button => {
        button.addEventListener('click', function () {
            const productId = button.getAttribute('data-product-id');
            const productInfo = getProductInfo(productId);

            modalTitle.textContent = productInfo.name;
            modalImage.src = productInfo.image;
            modalImage.alt = productInfo.name;
            modalDescription.textContent = productInfo.description;

            //Segment Track Event for viewing Modals
            analytics.track('Product Viewed', {
                product: productInfo.name,
                description: productInfo.description
            });
        });
    });
    

});
