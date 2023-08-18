document.addEventListener('DOMContentLoaded', function () {

    // Configure the Event and Properties of the Actions Events
    const actions = [
        {
            title: "Action 1",
            image: "action-1.avif",
            description: "Description for Action 1",
            properties: [
                { name: "Property 1", value: "Value 1" },
                { name: "Property 2", value: "Value 2" }
            ]
        },
        {
            title: "Action 2",
            image: "action-2.avif",
            description: "Description for Action 2",
            properties: [
                { name: "Property 1", value: "Value 1" },
                { name: "Property 2", value: "Value 2" },
                { name: "Property 3", value: true }
            ]
        },
        {
            title: "Action 3",
            image: "action-3.avif",
            description: "Description for Action 3",
            properties: [
                { name: "Property 1", value: "Value 1" }
            ]
        },
        {
            title: "Action 4",
            image: "action-4.avif",
            description: "Description for Action 4",
            properties: [
                { name: "Property 1", value: "Value 1" },
                { name: "Property 2", value: "Option 1" }
            ]
        },
        {
            title: "Action 5",
            image: "action-5.avif",
            description: "Description for Action 5",
            properties: []
        },
        {
            title: "Action 6",
            image: "action-6.avif",
            description: "Description for Action 6",
            properties: [
                { name: "Property 1", value: "Value 1" },
                { name: "Property 2", value: "Value 2" },
                { name: "Property 3", value: "Value 3" }
            ]
        }
    ];
    
    
    const modalForm = document.querySelector('#actionModal .action-content');

    
    function getActionInfo(actionId) {
        return actions.find(action => actionId === parseInt(action.id));
    }

    //Create Action Cards on the main page
    function generateActionCard(action, index) {
        const actionCard = document.createElement('div');
        actionCard.classList.add('col-md-4');
    
        actionCard.innerHTML = `
            <div class="card mb-4">
                <div class="card-body text-center">
                    <h2>${action.title}</h2>
                    <p>${action.description}</p>
                    <a href="#" class="btn btn-primary btn-learn-more" data-action-id="${index}"
                        data-bs-toggle="modal" data-bs-target="#actionModal">Learn More</a>
                </div>
            </div>
        `;
    
        return actionCard;
    }    
    
    function generateActionCards() {
        const actionRow = document.getElementById('actionRow');
        actions.forEach((action, index) => { // Pass index here
            const actionCard = generateActionCard(action, index); // Pass both action and index
            actionRow.appendChild(actionCard);
        });
    }
    
    generateActionCards();


    // ACTION -LEARN MORE- MODAL FUNCTIONALITY
    const modalTriggerButtons = document.querySelectorAll('.btn-learn-more');
    const modalTitle = document.getElementById('actionModalLabel');
    const modalImage = document.querySelector('.modal-body .modal-image');
    const modalDescription = document.querySelector('.modal-body .modal-description');
    const actionUsModal = new bootstrap.Modal(document.getElementById('actionModal'));

    modalTriggerButtons.forEach(button => {
        button.addEventListener('click', function () {
            const actionIndex = parseInt(button.getAttribute('data-action-id')); // Get the index
            const actionInfo = actions[actionIndex]; // Use the index to retrieve the action
    
            generateActionModalContent(actionInfo);
    
            // Open the action modal
            actionUsModal.show();
        });
    });
    

    // Action MODAL Functionality
    function generateActionModalContent(action) {
        modalTitle.textContent = action.title;
        modalImage.src = action.image;
        modalImage.alt = action.title;
        modalDescription.textContent = action.description;
    
        const modalForm = document.querySelector('#actionModal .action-content');
    
        modalForm.innerHTML = ''; // Clear previous fields
    
        if (action.properties.length > 0) {
            const propertiesContainer = document.createElement('div');
            propertiesContainer.classList.add('mt-4'); // Add margin-top for separation
    
            action.properties.forEach(property => {
                const propertyRow = document.createElement('div');
                propertyRow.classList.add('row', 'mb-3', 'align-items-center'); // Add align-items-center and adjust margin
            
                const propertyNameCol = document.createElement('div');
                propertyNameCol.classList.add('col-md-4', 'fw-bold', 'text-end'); // Left-justify the label
            
                const propertyName = document.createElement('span');
                propertyName.textContent = property.name;
            
                propertyNameCol.appendChild(propertyName);
            
                const propertyValueCol = document.createElement('div');
                propertyValueCol.classList.add('col-md-8'); // Use the rest of the space
            
                const propertyValueInput = document.createElement('input');
                propertyValueInput.type = property.type;
                propertyValueInput.id = property.id;
                propertyValueInput.value = property.value;
                propertyValueInput.classList.add('form-control'); // Apply Bootstrap styling
            
                propertyValueCol.appendChild(propertyValueInput);
            
                propertyRow.appendChild(propertyNameCol);
                propertyRow.appendChild(propertyValueCol);
            
                propertiesContainer.appendChild(propertyRow);
            });            
    
            modalForm.appendChild(propertiesContainer);
        } else {
            const noPropertiesMessage = document.createElement('p');
            noPropertiesMessage.textContent = 'No properties available.';
            modalForm.appendChild(noPropertiesMessage);
        }
    }
    
    // CONTACT US Submit Button functionality
    const contactForm = document.getElementById('contactForm');
    const contactUsModal = new bootstrap.Modal(document.getElementById('contactUsModal'));


    contactForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const name = document.getElementById('contactName').value;
        const email = document.getElementById('contactEmail').value;
        const companyName = document.getElementById('contactCompanyName').value;
        const companySize = document.getElementById('contactCompanySize').value;
        const role = document.getElementById('contactRole').value;

        // Here, you can send the form data to your server or perform any other necessary actions

        // Track the form submission event
        analytics.track('Contact Form Submitted', {
            name: name,
            email: email,
            companyName: companyName,
            companySize: companySize,
            role: role
        });

        analytics.identify(email, {
            name: name,
            email: email
        });

        // Close the modal using the Bootstrap modal method
        console.log("Before hiding modal");
        this.submit();
        console.log("After hiding modal");
    });

        
});
