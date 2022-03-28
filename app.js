const imagearr = [
  {name: "Bread",
   img: "Images/Bread.jpg",
  },
  {
    name: "Melon",
    img: "Images/Melon.jpg",
  },
  {
    name: "Pizza",
    img: "Images/Pizza.jpg",
  },
  {
    name: "Rice",
    img: "Images/Rice.jpg",
  },
  {
    name: "Prestored",
    img: "Images/Prestored.jpg",
  },
  {
    name: "Veggies",
    img: "Images/Veggies.jpg",
  },
  {name: "Bread",
  img: "Images/Bread.jpg",
 },
 {
   name: "Melon",
   img: "Images/Melon.jpg",
 },
 {
   name: "Pizza",
   img: "Images/Pizza.jpg",
 },
 {
   name: "Rice",
   img: "Images/Rice.jpg",
 },
 {
   name: "Prestored",
   img: "Images/Prestored.jpg",
 },
 {
   name: "Veggies",
   img: "Images/Veggies.jpg",
 }
]

imagearr.sort(()=> 0.5-Math.random())

let choosenone = []
let cardIdarr = []
let a = 0;
let c = 0;
let b = 0;
const result = document.getElementById("Score")

const griddisplay = document.querySelector("#Grid")

const CG = document.getElementById("CG")
const IG = document.getElementById("IG")

function create(){
  for(let i = 0; i<12; i++){
  const card = document.createElement('img')
  card.setAttribute('src', 'Images/Dark.jpg')
  card.setAttribute('data-id', i)
  card.addEventListener('click', flip)
  griddisplay.appendChild(card)
  }
}

create()

function flip(){
  const CardId = this.getAttribute('data-id')
  this.setAttribute('src', imagearr[CardId].img)
  cardIdarr.push(CardId)
  choosenone.push(imagearr[CardId].name)
  if(choosenone.length === 2){
    setTimeout(checkmatch, 500)
  }
}

function checkmatch(){
  const cards = document.querySelectorAll('#Grid img')
  if(choosenone[0]===choosenone[1]){
    alert("You found a match")
    cards[cardIdarr[0]].setAttribute('src', 'Images/White.jpg')
    cards[cardIdarr[1]].setAttribute('src', 'Images/White.jpg')
    cards[cardIdarr[0]].removeEventListener('click', flip)
    cards[cardIdarr[1]].removeEventListener('click', flip)
    a += 1
    b += 1
    CG.innerHTML = b
  }
  else{
    alert("Try again")
    cards[cardIdarr[0]].setAttribute('src', 'Images/Dark.jpg')
    cards[cardIdarr[1]].setAttribute('src', 'Images/Dark.jpg')
    c += 1
    IG.innerHTML = c
  }
  cardIdarr = []
  choosenone = []
  if(a == (imagearr.length)/2){
    result.innerHTML = "Congratulation You Found All The Matches"
  }
}
