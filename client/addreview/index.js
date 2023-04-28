const submitBtn = document.querySelector('.submit');
const form = document.querySelector(".form");

form.addEventListener("submit", (e)=>{

    e.preventDefault();
    const nameInput = document.querySelector('#name-input');
    const name = nameInput.value;

    const commentInput = document.querySelector('#comment-input');
    const review = commentInput.value;

    const reviewerInput = document.querySelector('#reviewer-input');
    const reviewer = reviewerInput.value;

    const statisfaction_level = document.querySelector("#statisfaction_level");
    const statisfaction = statisfaction_level.value;

    const starInput= document.querySelector("#star");
    const star = starInput.value;

    const purchasedInput = document.querySelector("#purchased_in");
    const purchased_in = purchasedInput.value;

    const amountInput = document.querySelector("#amount");
    const amount = amountInput.value;

    const recommendInput = document.querySelector("#recommend");
    const recommend = recommendInput.value;

    const phoneInput = document.querySelector("#reviewer--phone-input");
    const phone = phoneInput.value;

    const emailInput = document.querySelector("#reviewer-email-input");
    const email = emailInput.value;

    form.reset();


    fetch('http://localhost:5000/insert', {
        headers: {
            'Content-type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify({ 
            name : name, 
            review : review, 
            reviewer : reviewer,
            statisfaction: statisfaction,
            star: star,
            purchased_in : purchased_in,
            amount : amount,
            recommend : recommend,
            phone : phone,
            email : email

        })
    })
    .then(response => response.json())
    .then(data => console.log(data));    
})

// submitBtn.onclick = function () {
//     const nameInput = document.querySelector('#name-input');
//     const name = nameInput.value;
//     nameInput.value = "";

//     const commentInput = document.querySelector('#comment-input');
//     const review = commentInput.value;
//     commentInput.value = "";

//     const reviewerInput = document.querySelector('#reviewer-input');
//     const reviewer = reviewerInput.value;
//     reviewerInput.value = "";

//     const statisfaction_level = document.querySelector("#statisfaction_level");
//     const statisfaction = statisfaction_level.value;
//     statisfaction_level.value = "";

//     const starInput= document.querySelector("#star");
//     const star = starInput.value;
//     starInput.value = "";

//     const purchasedInput = document.querySelector("#purchased_in");
//     const purchased_in = purchasedInput.value;
//     purchasedInput.value = "";

//     const amountInput = document.querySelector("#amount");
//     const amount = amountInput.value;
//     amountInput.value = "";

//     const recommendInput = document.querySelector("#recommend");
//     const recommend = recommendInput.value;
//     recommendInput.value = "";

//     const phoneInput = document.querySelector("#reviewer--phone-input");
//     const phone = phoneInput.value;
//     phoneInput.value = "";

//     const emailInput = document.querySelector("#reviewer-email-input");
//     const email = emailInput.value;
//     emailInput.value = "";


//     fetch('http://localhost:5000/insert', {
//         headers: {
//             'Content-type': 'application/json'
//         },
//         method: 'POST',
//         body: JSON.stringify({ 
//             name : name, 
//             review : review, 
//             reviewer : reviewer,
//             statisfaction: statisfaction,
//             star: star,
//             purchased_in : purchased_in,
//             amount : amount,
//             recommend : recommend,
//             phone : phone,
//             email : email

//         })
//     })
//     .then(response => response.json())
//     .then(data => console.log(data));
// }


// function insertnewproduct(data){
//     const loaddiv = document.querySelector(".all");

//     const isData = loaddiv.querySelector('.no-data');

//     let inserthtml = `<ul class=${data.id}>`;

//     for (var key in data) {
//         if (data.hasOwnProperty(key)) {
//             if (key === 'dateAdded') {
//                 data[key] = new Date(data[key]).toLocaleString();
//             }
//             inserthtml += `<li>${data[key]}</li>`;
//         }
//     }

//     inserthtml += `<button class="delete-btn" data-id=${data.id}>Delete</button>`;
//     inserthtml += `<button class="edit-btn" data-id=${data.id}>Edit</button>`;
//     inserthtml += `</ul>`

//     if (isData) {
//         loaddiv.innerHTML = inserthtml;
//     }

// }
