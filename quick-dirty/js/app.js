
let juiceProducts = [
  {
    img: "./images/juice/apple-juice.jpg",
    name: "apple juice"
  },
  {
    img: "./images/juice/carrot-juice.jpg",
    name: "carrot juice"
  },
  {
    img: "./images/juice/grape-juice.jpeg",
    name: "grape juice"
  },
  {
    img: "./images/juice/Orange-juice.jpg",
    name: "orange juice"
  },
  {
    img: "./images/juice/tomato-juice.jpg",
    name: "tomato juice"
  }
];

let cerealProducts = [
  {
    img: "./images/cereal/cheerios.jpg",
    name: "Ccheerios"
  },
  {
    img: "./images/cereal/crunch.jpg",
    name: "crunch"
  },
  {
    img: "./images/cereal/fruit-loops.jpg",
    name: "fruit loops"
  },
  {
    img: "./images/cereal/puffs.jpg",
    name: " cereal puffs"
  },
  {
    img: "./images/cereal/raisin-bran.jpg",
    name: "raisin bran"
  }
];

let candyProducts = [
  {
    img: "./images/candy/kit-kat.jpg",
    name: "kit kat"
  },
  {
    img: "./images/candy/m&ms.jpg",
    name: "eminem's"
  },
  {
    img: "./images/candy/skittles.jpg",
    name: "skittles"
  },
  {
    img: "./images/candy/snickers.jpg",
    name: "knickers"
  },
  {
    img: "./images/candy/twix.jpg",
    name: "twix"
  }
];

let shoppingCart = [];

function clearProducts() {
  $("#products").empty();
}

function showProducts(cat) {
  // first, clear out all items I am currently showing
  clearProducts();

  var myItems;
  switch (cat) {
    case "cereal":
      myItems = cerealProducts;
      break;
    case "juice":
      myItems = juiceProducts;
      break;
    case "candy":
      myItems = candyProducts;
      break;
    default:
  }


  function shoppingCart(item) {
    
  }



  var newList = $("<ul>");
  for (var i = 0; i < myItems.length; i++) {
    var currentItem = myItems[i];

    newList.append(
      `<li class="shopping-item">
				<img src="${currentItem.img}">
				<p>${currentItem.name}</p>
			</li>`
    );
  }

  $("#products").append(newList);
}




$("#candy").on('click', ()=>showProducts("candy"));
$("#juice").on('click', ()=>showProducts('juice'));
$("#cereal").on('click',()=> showProducts('cereal'));


// Add item to shopping cart
function addItemToShoppingCart(item) {
	$('#shopping-cart ul').append(`
		<li>
			${item}
		</li>
	`);
}