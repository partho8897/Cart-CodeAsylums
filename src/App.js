import React, { Component } from 'react';
import "./App.css";

export default class App extends Component {
  state = {
    totalPrice : 0,
    totalItems : 0,
    adressUser : '',
    nameUser : '',
    clickedData : []
  };

  getData = link => {
    fetch(link)
    .then(a => a.json())
      .then(result => {
        console.log(result)
        this.setState({
          clickedData : result
        });
      })
  };
  
  addToCart = mrp => {
    this.setState({
      totalItems: this.state.totalItems+1,
      totalPrice: this.state.totalPrice+mrp
    });
  }
  
  render() {

    return (
      <div className = 'container'>
      <div className="container-btn">
      <div className="btn-group">
      <button type="button" className="btn btn-danger">Baby Food</button>
      <button type="button" className="btn btn-danger dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <span className="sr-only">Toggle Dropdown</span>
      </button>
      <div className="dropdown-menu">
      <a className="dropdown-item"  onClick = {() => this.getData('http://101.53.137.41/api/?cat=Food-Nutrition_BabyFood_BabyCereals&count=100&offset=0')}>Baby Cereals</a>
        <a className="dropdown-item"  onClick = {() => this.getData('http://101.53.137.41/api/?cat=Food-Nutrition_BabyFood_BabySnackPuffs&count=100&offset=0')}>Baby Snack Puffs</a>
        <a className="dropdown-item"  onClick = {() => this.getData('http://101.53.137.41/api/?cat=Food-Nutrition_BabyFood_InfantFormula&count=100&offset=0')}>Infant Formula</a>
        <a className="dropdown-item"  onClick = {() => this.getData('http://101.53.137.41/api/?cat=Food-Nutrition_BabyFood_Vitamins-Supplements&count=100&offset=0')}>Vitamins Supplements</a>
        </div>
      </div>
      <div className="btn-group">
      <button type="button" className="btn btn-danger">Bakery</button>
      <button type="button" className="btn btn-danger dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <span className="sr-only">Toggle Dropdown</span>
      </button>
      <div className="dropdown-menu">
        <a className="dropdown-item" onClick = {() => this.getData('http://101.53.137.41/api/?cat=Food-Nutrition_Bakery-BakingEssentials_BakingIngredients-Decora&count=100&offset=0')}>Baking Ingredients</a>
        <a className="dropdown-item" onClick = {() => this.getData('http://101.53.137.41/api/?cat=Food-Nutrition_Bakery-BakingEssentials_Cakes-Pastries_Cakes&count=100&offset=0')}>Cakes and Pastries</a>
        <a className="dropdown-item" onClick = {() => this.getData('http://101.53.137.41/api/?cat=Food-Nutrition_Bakery-BakingEssentials_FoodAdditives_FoodColors&count=100&offset=0')}>Food Colour</a>
        <a className="dropdown-item" onClick = {() => this.getData('http://101.53.137.41/api/?cat=Food-Nutrition_Bakery-BakingEssentials_FoodAdditives_FoodEssenc&count=100&offset=0')}>Food Essenc</a>
        <a className="dropdown-item" onClick = {() => this.getData('http://101.53.137.41/api/?cat=Food-Nutrition_Bakery-BakingEssentials_Rusks&count=100&offset=0')}>Rusks</a>
      </div>      
    </div>
    <div className="btn-group">
      <button type="button" className="btn btn-danger">Beverages</button>
      <button type="button" className="btn btn-danger dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <span className="sr-only">Toggle Dropdown</span>
      </button>
      <div className="dropdown-menu">
        <a className="dropdown-item" onClick = {() => this.getData('http://101.53.137.41/api/?cat=Food-Nutrition_Beverages_AeratedDrinks&count=100&offset=0')}>Aerated Drinks</a>
        <a className="dropdown-item" onClick = {() => this.getData('http://101.53.137.41/api/?cat=Food-Nutrition_Beverages_Coffee&count=100&offset=0')}>Coffee</a>
        <a className="dropdown-item" onClick = {() => this.getData('http://101.53.137.41/api/?cat=Food-Nutrition_Beverages_Concentrates&count=100&offset=0')}>Concenterates</a>
        <a className="dropdown-item" onClick = {() => this.getData('http://101.53.137.41/api/?cat=Food-Nutrition_Beverages_Concentrates_Powder&count=100&offset=0')}>Powder</a>
        <a className="dropdown-item" onClick = {() => this.getData('http://101.53.137.41/api/?cat=Food-Nutrition_Beverages_Concentrates_Squashes-Crushes&count=100&offset=0')}>Squashes-Crushes</a>
        <a className="dropdown-item" onClick = {() => this.getData('http://101.53.137.41/api/?cat=Food-Nutrition_Beverages_Concentrates_Syrups&count=100&offset=0')}>Syrups</a>
        <a className="dropdown-item" onClick = {() => this.getData('http://101.53.137.41/api/?cat=Food-Nutrition_Beverages_FruitDrinks_Juices&count=100&offset=0')}> Fruit Drinks and Juices</a>
        <a className="dropdown-item" onClick = {() => this.getData('http://101.53.137.41/api/?cat=Food-Nutrition_Beverages_HealthDrinkMixes&count=100&offset=0')}>Health Drink Mixes</a>
        <a className="dropdown-item" onClick = {() => this.getData('http://101.53.137.41/api/?cat=Food-Nutrition_Beverages_Milk-MilkPowder_MilkPowder&count=100&offset=0')}>Milk Powder</a>
        <a className="dropdown-item" onClick = {() => this.getData('http://101.53.137.41/api/?cat=Food-Nutrition_Beverages_Tea&count=100&offset=0')}>Tea</a>
      </div>      
    </div>
    <div className="btn-group">
      <button type="button" className="btn btn-danger">Breakfast Mixes</button>
      <button type="button" className="btn btn-danger dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <span className="sr-only">Toggle Dropdown</span>
      </button>
      <div className="dropdown-menu">
        <a className="dropdown-item" onClick = {() => this.getData('http://101.53.137.41/api/?cat=Food-Nutrition_BreakfastMixes-Cereals&count=100&offset=0')}>Cereals</a>
        <a className="dropdown-item" onClick = {() => this.getData('http://101.53.137.41/api/?cat=Food-Nutrition_BreakfastMixes-Cereals_Muesli&count=100&offset=0')}>Cereals Muesli</a>
        <a className="dropdown-item" onClick = {() => this.getData('http://101.53.137.41/api/?cat=Food-Nutrition_BreakfastMixes-Cereals_Oats&count=100&offset=0')}>Cereals Oats</a>
        <a className="dropdown-item" onClick = {() => this.getData('http://101.53.137.41/api/?cat=Food-Nutrition_BreakfastMixes-Cereals_OtherBreakfastMixes-Cerea&count=100&offset=0')}>Other Breakfast Mixes</a>
        <a className="dropdown-item" onClick = {() => this.getData('http://101.53.137.41/api/?cat=Food-Nutrition_BreakfastMixes-Cereals_ReadyMixes&count=100&offset=0')}>Ready Mixes</a>
        
        </div>
      </div>
      <div className="btn-group">
      <button type="button" className="btn btn-danger">Confectionary Sweets</button>
      <button type="button" className="btn btn-danger dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <span className="sr-only">Toggle Dropdown</span>
      </button>
      <div className="dropdown-menu">
        <a className="dropdown-item" onClick = {() => this.getData('http://101.53.137.41/api/?cat=Food-Nutrition_Confectioneries-Sweets_Candies-MouthFresheners&count=100&offset=0')}>Mouth Fresheners</a>
        <a className="dropdown-item" onClick = {() => this.getData('http://101.53.137.41/api/?cat=Food-Nutrition_Confectioneries-Sweets_ChewingGums&count=100&offset=0')}>Chewing Gums</a>
        <a className="dropdown-item" onClick = {() => this.getData('http://101.53.137.41/api/?cat=Food-Nutrition_Confectioneries-Sweets_Chocolates&count=100&offset=0')}>Chocolates</a>
        <a className="dropdown-item" onClick = {() => this.getData('http://101.53.137.41/api/?cat=Food-Nutrition_Confectioneries-Sweets_Sweets-Mithai_IndianSweet&count=100&offset=0')}>Indian Sweets</a>
        </div>
      </div>
      <div className="btn-group">
      <button type="button" className="btn btn-danger">Dairy Products</button>
      <button type="button" className="btn btn-danger dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <span className="sr-only">Toggle Dropdown</span>
      </button>
      <div className="dropdown-menu">
        <a className="dropdown-item" onClick = {() => this.getData('http://101.53.137.41/api/?cat=Food-Nutrition_DairyProducts_Cheese&count=100&offset=0')}>Cheese</a>
        <a className="dropdown-item" onClick = {() => this.getData('http://101.53.137.41/api/?cat=Food-Nutrition_DairyProducts_Milk&count=100&offset=0')}>Milk</a>
        <a className="dropdown-item" onClick = {() => this.getData('http://101.53.137.41/api/?cat=Food-Nutrition_EdibleOils-Ghee_EdibleOils&count=100&offset=0')}>Edible Oils</a>
        <a className="dropdown-item" onClick = {() => this.getData('http://101.53.137.41/api/?cat=Food-Nutrition_EdibleOils-Ghee_Ghee&count=100&offset=0')}>Edible Ghee</a>
        </div>
      </div>
      <div className="btn-group">
      <button type="button" className="btn btn-danger">Health Nutrition</button>
      <button type="button" className="btn btn-danger dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <span className="sr-only">Toggle Dropdown</span>
      </button>
      <div className="dropdown-menu">
        <a className="dropdown-item" onClick = {() => this.getData('http://101.53.137.41/api/?cat=Food-Nutrition_Health-Nutrition_Chyawanprash&count=100&offset=0')}>Chyawanprash</a>
        <a className="dropdown-item" onClick = {() => this.getData('http://101.53.137.41/api/?cat=Food-Nutrition_Health-Nutrition_Digestives-Probiotics&count=100&offset=0')}>Digestive Probiotics</a>
        <a className="dropdown-item" onClick = {() => this.getData('http://101.53.137.41/api/?cat=Food-Nutrition_Health-Nutrition_Health-EnergyDrinks&count=100&offset=0')}>Energy Drinks</a>
        <a className="dropdown-item" onClick = {() => this.getData('http://101.53.137.41/api/?cat=Food-Nutrition_Health-Nutrition_HealthFood-Snacks&count=100&offset=0')}>Health Food Snacks</a>
        <a className="dropdown-item" onClick = {() => this.getData('http://101.53.137.41/api/?cat=Food-Nutrition_Health-Nutrition_ProteinSupplements&count=100&offset=0')}>Protein Supplements</a>
        <a className="dropdown-item" onClick = {() => this.getData('http://101.53.137.41/api/?cat=Food-Nutrition_Health-Nutrition_Vitamins-Supplements&count=100&offset=0')}>Vitamin Supplements</a>
        </div>
      </div>
      <div className="btn-group">
      <button type="button" className="btn btn-danger">Noodles, Pasta and Jams</button>
      <button type="button" className="btn btn-danger dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <span className="sr-only">Toggle Dropdown</span>
      </button>
      <div className="dropdown-menu">
        <a className="dropdown-item" onClick = {() => this.getData('http://101.53.137.41/api/?cat=Food-Nutrition_Noodles-Pasta_Noodles&count=100&offset=0')}>Noodles</a>
        <a className="dropdown-item" onClick = {() => this.getData('http://101.53.137.41/api/?cat=Food-Nutrition_Noodles-Pasta_Pasta&count=100&offset=0')}>Pasta</a>
        <a className="dropdown-item" onClick = {() => this.getData('http://101.53.137.41/api/?cat=Food-Nutrition_Noodles-Pasta_Vermicelli&count=100&offset=0')}>Vermicelli</a>
        <a className="dropdown-item" onClick = {() => this.getData('http://101.53.137.41/api/?cat=Food-Nutrition_Jams,Spreads-Honey_Jams-Spreads&count=100&offset=0')}>Jams</a>
        </div>
      </div>  
      <div className="btn-group">
      <button type="button" className="btn btn-danger">Ready to Cook</button>
      <button type="button" className="btn btn-danger dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <span className="sr-only">Toggle Dropdown</span>
      </button>
      <div className="dropdown-menu">
        <a className="dropdown-item" onClick = {() => this.getData('http://101.53.137.41/api/?cat=Food-Nutrition_ReadytoCook-Eat_ReadyMeals&count=100&offset=0')}>Meals</a>
        <a className="dropdown-item" onClick = {() => this.getData('http://101.53.137.41/api/?cat=Food-Nutrition_ReadytoCook-Eat_ReadyMixes&count=100&offset=0')}>Mixes</a>
        <a className="dropdown-item" onClick = {() => this.getData('http://101.53.137.41/api/?cat=Food-Nutrition_ReadytoCook-Eat_ReadytoCookSnacks&count=100&offset=0')}>Snacks</a>
        <a className="dropdown-item" onClick = {() => this.getData('http://101.53.137.41/api/?cat=Food-Nutrition_ReadytoCook-Eat_Soup&count=100&offset=0')}>Soups</a>        
        </div>
      </div>
      <div className="btn-group">
      <button type="button" className="btn btn-danger">Snacks</button>
      <button type="button" className="btn btn-danger dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <span className="sr-only">Toggle Dropdown</span>
      </button>
      <div className="dropdown-menu">
        <a className="dropdown-item" onClick = {() => this.getData('http://101.53.137.41/api/?cat=Food-Nutrition_Snacks-Nibbles_Chips&count=100&offset=0;')}>Nibble-Chips</a>
        <a className="dropdown-item" onClick = {() => this.getData('http://101.53.137.41/api/?cat=Food-Nutrition_Snacks-Nibbles_Cookies-Biscuits&count=100&offset=0')}>Biscuits</a>
        <a className="dropdown-item" onClick = {() => this.getData('http://101.53.137.41/api/?cat=Food-Nutrition_Snacks-Nibbles_Fryums-Papads&count=100&offset=0')}>Papads</a>
        <a className="dropdown-item" onClick = {() => this.getData('http://101.53.137.41/api/?cat=Food-Nutrition_Snacks-Nibbles_Popcorn&count=100&offset=0')}>Popcorns</a>
        <a className="dropdown-item" onClick = {() => this.getData('http://101.53.137.41/api/?cat=Food-Nutrition_Snacks-Nibbles_Wafers-Waffles&count=100&offset=0')}>Wafers</a>
        </div>
        <div className="btn-group">
     <button type="button" className="btn btn-danger">Spices</button>
     <button type="button" className="btn btn-danger dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
       <span className="sr-only">Toggle Dropdown</span>
     </button>
     <div className="dropdown-menu">
       <a className="dropdown-item" onClick = {() => this.getData('http://101.53.137.41/api/?cat=Food-Nutrition_Spices,Condiments-Sauces_Condiments&count=100&offset=0')}>Condiments</a>
       <a className="dropdown-item" onClick = {() => this.getData('http://101.53.137.41/api/?cat=Food-Nutrition_Spices,Condiments-Sauces_Dips,Sauces-Pastes_Dres&count=100&offset=0')}>Dres</a>
       <a className="dropdown-item" onClick = {() => this.getData('http://101.53.137.41/api/?cat=Food-Nutrition_Spices,Condiments-Sauces_Dips,Sauces-Pastes_Mari&count=100&offset=0')}>Mari</a>
       <a className="dropdown-item" onClick = {() => this.getData('http://101.53.137.41/api/?cat=Food-Nutrition_Spices,Condiments-Sauces_Dips,Sauces-Pastes_Past&count=100&offset=0')}>Pastes</a>
       <a className="dropdown-item" onClick = {() => this.getData('http://101.53.137.41/api/?cat=Food-Nutrition_Spices,Condiments-Sauces_Dips,Sauces-Pastes_Vine&count=100&offset=0')}>Vine</a>
       <a className="dropdown-item" onClick = {() => this.getData('http://101.53.137.41/api/?cat=Food-Nutrition_Spices,Condiments-Sauces_EdibleSeeds&count=100&offset=0')}>EdibleSeeds</a>
       <a className="dropdown-item" onClick = {() => this.getData('http://101.53.137.41/api/?cat=Food-Nutrition_Spices,Condiments-Sauces_Pickles-Chutneys_Pickle&count=100&offset=0')}>Pickle</a>
       <a className="dropdown-item" onClick = {() => this.getData('http://101.53.137.41/api/?cat=Food-Nutrition_Spices,Condiments-Sauces_Salt&count=100&offset=0')}>Salt</a>
       <a className="dropdown-item" onClick = {() => this.getData('http://101.53.137.41/api/?cat=Food-Nutrition_Spices,Condiments-Sauces_Spices-Masala&count=100&offset=0')}>Masala</a>

     </div>
     </div>
      </div>
    <div className="products-container" >
    {

        Object.keys(this.state.clickedData).map(index => {
        const data = this.state.clickedData[index]
        var image = data.imageUrlStr.split(';')
        return( 
          <span>
           <div> <img src={image[0]} alt={data.title} /></div>
           <div> {data.title} </div>
           <div> MRP: {data.mrp}</div>
           <div> Product Ratings: {data.sellerAverageRating}</div>
           <button onClick={(e) => this.addToCart(data.mrp)} type="button">Add To Cart</button>
          </span>
       
        );
        })
      }
     Total Cost = {this.state.totalPrice}
     Total Items = {this.state.totalItems}
    
    </div>
    </div>
    </div>

    
    );
  }
}

