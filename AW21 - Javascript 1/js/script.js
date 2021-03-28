
// Question 1

const cat = {
    complain: function () {
        console.log("Meow!");
    }
}

cat.complain();


// Question 2

document.querySelector("h3");
const heading = document.querySelector("h3");
heading.innerHTML = "Updated heading";

// Question 3

heading.style.fontSize = "2em";


// Question 4

heading.className = "heading";

console.log(heading.className);


// Question 5

document.querySelectorAll("p");
const paragraphs = document.querySelectorAll("p");

for (let i = 0; i < paragraphs.length; i++) {
    console.dir(paragraphs[i])

    paragraphs[i].style.color = "red";
}


// Question 6

document.querySelector(".results");
const resultsContainer = document.querySelector(".results");

resultsContainer.innerHTML = "<p> New paragraph </p>";
resultsContainer.style.backgroundColor = "yellow";
console.dir(resultsContainer);










// Question 7



const catName = ["Blob", "Harold", "Blurt"];

function myFunction(list) {
    for (let i = 0; i < list.length; i++) {


        console.log(list[i]);
    }
}

myFunction(catName);



// Question 8 

const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];

function createCats(cats) {

    let html = "";

    for (let i = 0; i < cats.length; i++) {


        let ageOfCat = "Age unknown";

        let nameOfCat = cats[i].name;



        if (cats[i].age) {
            ageOfCat = cats[i].age;
        }

        html +=
            `<div><h5>${nameOfCat}</h5>
                <p>${ageOfCat}</p></div>`;

    }
    return html;


}


const newHTML = createCats(cats);

const catContainer = document.querySelector(".cat-container");
catContainer.innerHTML = newHTML;