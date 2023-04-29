document.addEventListener('DOMContentLoaded', function () {
    fetch('http://localhost:5000/getAll')
    .then(response => response.json())
    .then(data => loadallproduct(data['data']));
});

document.querySelector('.sample').addEventListener('click', function(event) {
    if (event.target.className === "delete-btn") {
        deleteRowById(event.target.dataset.id);
    }
    if (event.target.className === "edit-btn") {
        handleEditRow(event.target.dataset.id);
    }
});

const updateBtn = document.querySelector('#update-row-btn');
const searchBtn = document.querySelector('#search-btn');

searchBtn.onclick = function() {
    const searchValue = document.querySelector('#search-input').value;
    

    fetch('http://localhost:5000/search/' + searchValue)
    .then(response => response.json())
    .then(data => loadallproduct(data['data']));
}




function deleteRowById(id) {
    fetch('http://localhost:5000/delete/' + id, {
        method: 'DELETE'
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            location.reload();
        }
    });
}

function handleEditRow(id) {
    const updateSection = document.querySelector('#update-row');
    updateSection.hidden = false;
    document.querySelector('#update-name-input').dataset.id = id;
}

updateBtn.onclick = function() {
    const updateNameInput = document.querySelector('#update-name-input');


    console.log(updateNameInput);

    fetch('http://localhost:5000/update', {
        method: 'PATCH',
        headers: {
            'Content-type' : 'application/json'
        },
        body: JSON.stringify({
            id: updateNameInput.dataset.id,
            name: updateNameInput.value
        })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            location.reload();
        }
    })
}


// const submitBtn = document.querySelector('.submit');

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
//             recommend : recommend

//         })
//     })
//     .then(response => response.json())
//     .then(data => insertnewproduct(data['data']));
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


// function loadallproduct(data) {
//     const loaddiv = document.querySelector(".all");
//     console.log(data);

//     if (data.length === 0) {
//         loaddiv.innerHTML = `<li class="no-data">No data found</li>`;
//         return;
//     }

//     let prodli = "";

//     data.forEach(function ({id, name, date,review, reviewer, statisfaction_level, star, purchased_in, amount, recommend, phone, email}) {

//         prodli += 
//         `
//             <ul data-id=${id}>
//                 <li class="id-out">id: ${id}</li>
//                 <li class="name-out">name: ${name}</li>
//                 <li class="com-out">review: ${review}</li>
//                 <li class="date-out">date: ${date}</li>
//                 <li class="com-out">reviewer: ${reviewer}</li>
//                 <li class="stat-out">statisfaction: ${statisfaction_level}</li>
//                 <li class="star-out">star: ${star}</li>
//                 <li class="pur-out">Purchased In: ${purchased_in}</li>
//                 <li class="amount-out">Amount: ${amount}</li>
//                 <li class="rec-out">Recommend: ${recommend}</li>
//                 <li class="email-out">Email: ${email}</li>
//                 <li class="phone-out">Phone: ${phone}</li>

                
//                 <button class="delete-btn" data-id=${id}>Delete</td>
//                 <button class="edit-btn" data-id=${id}>Edit</td>
//             </ul>
//         `;

//     });

//     loaddiv.innerHTML = prodli;


// }

function loadallproduct(data) {
    const loaddiv = document.querySelector(".sample");
    console.log(data);

    if (data.length === 0) {
        loaddiv.innerHTML = `<div class="no-data">No data found</div>`;
        return;
    }

    let prodli = "";

    data.forEach(function ({id, name, date,review, reviewer, statisfaction_level, star, purchased_in, amount, recommend, phone, email}) {

        prodli += 
        `
            <div class="sample-design" data-id=${id}>
                <div class="user-full">
                    <div class="user-1">
                        <div class="user-icon">
                            <img src="../../user.png" alt="user icon">
                        </div>
                        <div class="user-details-1">
                            <h3 class="user-name">${reviewer}</h3>
                            <p>${date}</p>
                        </div>
                    </div>
                    <div class="user-2">
                        <h3>User details:</h3>
                        <div class="user-details-2">
                            <p>Phone: ${phone}</p>
                            <p>Email: ${email}</p>
                        </div>
                    </div>
                </div>
                <div class="product-full">
                    <div class="product">
                        <p class="pro-name">Product Name: <b>${name}</b> Purchased from <b>${purchased_in}</b></p>
                        <p class="pro-amount">Amount: <b>${amount}</b></p>
                    </div>
                    <div class="product-review">
                        <h3>Review:</h3>
                        <p>${review}</p>
                    </div>
                    <div class="s-flex">
                        <div class="s-inner-1">
                            <div class="star">
                                <p>${star} star</p>
                            </div>
                            <div class="statisfaction">
                                <p>statisfaction: ${statisfaction_level}</p>
                            </div>
                        </div>
                        <div class="s-inner-2">
                            <div class="delete">
                                <button class="delete-btn" data-id=${id}>Delete</button>
                            </div>
                            <div class="delete">
                                <button class="edit-btn" data-id=${id}>Edit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;

    });

    loaddiv.innerHTML = prodli;


}