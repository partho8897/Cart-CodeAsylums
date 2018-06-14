import React, { Component } from 'react';


export default class App extends Component {
  render() {
    return (
      <div class="container">
      <div class="btn-group">
      <button type="button" class="btn btn-danger">Baby Food</button>
      <button type="button" class="btn btn-danger dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <span class="sr-only">Toggle Dropdown</span>
      </button>
      <div class="dropdown-menu">
        <a class="dropdown-item" href="http://101.53.137.41/api/?cat=Food-Nutrition_BabyFood_BabyCereals&count=100&offset=0">Baby Cereals</a>
        <a class="dropdown-item" href="http://101.53.137.41/api/?cat=Food-Nutrition_BabyFood_BabySnackPuffs&count=100&offset=0">Baby Snack Puffs</a>
        <a class="dropdown-item" href="http://101.53.137.41/api/?cat=Food-Nutrition_BabyFood_InfantFormula&count=100&offset=0">Infant Formula</a>
        <a class="dropdown-item" href="http://101.53.137.41/api/?cat=Food-Nutrition_BabyFood_Vitamins-Supplements&count=100&offset=0">Vitamins Supplements</a>
        </div>
      </div>
      <div class="btn-group">
      <button type="button" class="btn btn-danger">Bakery</button>
      <button type="button" class="btn btn-danger dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <span class="sr-only">Toggle Dropdown</span>
      </button>
      <div class="dropdown-menu">
        <a class="dropdown-item" href="http://101.53.137.41/api/?cat=Food-Nutrition_Bakery-BakingEssentials_BakingIngredients-Decora&count=100&offset=0">Baking Ingredients</a>
        <a class="dropdown-item" href="http://101.53.137.41/api/?cat=Food-Nutrition_Bakery-BakingEssentials_Cakes-Pastries_Cakes&count=100&offset=0">Cakes and Pastries</a>
        <a class="dropdown-item" href="http://101.53.137.41/api/?cat=Food-Nutrition_Bakery-BakingEssentials_FoodAdditives_FoodColors&count=100&offset=0">Food Colour</a>
        <a class="dropdown-item" href="http://101.53.137.41/api/?cat=Food-Nutrition_Bakery-BakingEssentials_FoodAdditives_FoodEssenc&count=100&offset=0">Food Essenc</a>
        <a class="dropdown-item" href="http://101.53.137.41/api/?cat=Food-Nutrition_Bakery-BakingEssentials_Rusks&count=100&offset=0">Rusks</a>

      </div>      
    </div>
    <div class="btn-group">
      <button type="button" class="btn btn-danger">Beverages</button>
      <button type="button" class="btn btn-danger dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <span class="sr-only">Toggle Dropdown</span>
      </button>
      <div class="dropdown-menu">
        <a class="dropdown-item" href="http://101.53.137.41/api/?cat=Food-Nutrition_Beverages_AeratedDrinks&count=100&offset=0">Aerated Drinks</a>
        <a class="dropdown-item" href="http://101.53.137.41/api/?cat=Food-Nutrition_Beverages_Coffee&count=100&offset=0">Coffee</a>
        <a class="dropdown-item" href="http://101.53.137.41/api/?cat=Food-Nutrition_Beverages_Concentrates&count=100&offset=0">Concenterates</a>
        <a class="dropdown-item" href="http://101.53.137.41/api/?cat=Food-Nutrition_Beverages_Concentrates_Powder&count=100&offset=0">Powder</a>
        <a class="dropdown-item" href="http://101.53.137.41/api/?cat=Food-Nutrition_Beverages_Concentrates_Squashes-Crushes&count=100&offset=0">Squashes-Crushes</a>
        <a class="dropdown-item" href="http://101.53.137.41/api/?cat=Food-Nutrition_Beverages_Concentrates_Syrups&count=100&offset=0">Syrups</a>
        <a class="dropdown-item" href="http://101.53.137.41/api/?cat=Food-Nutrition_Beverages_FruitDrinks_Juices&count=100&offset=0"> Fruit Drinks and Juices</a>
        <a class="dropdown-item" href="http://101.53.137.41/api/?cat=Food-Nutrition_Beverages_HealthDrinkMixes&count=100&offset=0">Health Drink Mixes</a>
        <a class="dropdown-item" href="http://101.53.137.41/api/?cat=Food-Nutrition_Beverages_Milk-MilkPowder_MilkPowder&count=100&offset=0">Milk Powder</a>
        <a class="dropdown-item" href="http://101.53.137.41/api/?cat=Food-Nutrition_Beverages_Tea&count=100&offset=0;">Tea</a>
        


      </div>      
    </div>
    <div class="btn-group">
      <button type="button" class="btn btn-danger">Breakfast Mixes</button>
      <button type="button" class="btn btn-danger dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <span class="sr-only">Toggle Dropdown</span>
      </button>
      <div class="dropdown-menu">
        <a class="dropdown-item" href="http://101.53.137.41/api/?cat=Food-Nutrition_BreakfastMixes-Cereals&count=100&offset=0">Cereals</a>
        <a class="dropdown-item" href="http://101.53.137.41/api/?cat=Food-Nutrition_BreakfastMixes-Cereals_Muesli&count=100&offset=0">Cereals Muesli</a>
        <a class="dropdown-item" href="http://101.53.137.41/api/?cat=Food-Nutrition_BreakfastMixes-Cereals_Oats&count=100&offset=0">Cereals Oats</a>
        <a class="dropdown-item" href="http://101.53.137.41/api/?cat=Food-Nutrition_BreakfastMixes-Cereals_OtherBreakfastMixes-Cerea&count=100&offset=0">Other Breakfast Mixes</a>
        <a class="dropdown-item" href="http://101.53.137.41/api/?cat=Food-Nutrition_BreakfastMixes-Cereals_ReadyMixes&count=100&offset=0">Ready Mixes</a>
        
        </div>
      </div>

      <div class="btn-group">
      <button type="button" class="btn btn-danger">Confectionary Sweets</button>
      <button type="button" class="btn btn-danger dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <span class="sr-only">Toggle Dropdown</span>
      </button>
      <div class="dropdown-menu">
        <a class="dropdown-item" href="http://101.53.137.41/api/?cat=Food-Nutrition_Confectioneries-Sweets_Candies-MouthFresheners&count=100&offset=0">Mouth Fresheners</a>
        <a class="dropdown-item" href="http://101.53.137.41/api/?cat=Food-Nutrition_Confectioneries-Sweets_ChewingGums&count=100&offset=0">Chewing Gums</a>
        <a class="dropdown-item" href="http://101.53.137.41/api/?cat=Food-Nutrition_Confectioneries-Sweets_Chocolates&count=100&offset=0">Chocolates</a>
        <a class="dropdown-item" href="http://101.53.137.41/api/?cat=Food-Nutrition_Confectioneries-Sweets_Sweets-Mithai_IndianSweet&count=100&offset=0">Indian Sweets</a>
        </div>
      </div>

      <div class="btn-group">
      <button type="button" class="btn btn-danger">Dairy Products</button>
      <button type="button" class="btn btn-danger dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <span class="sr-only">Toggle Dropdown</span>
      </button>
      <div class="dropdown-menu">
        <a class="dropdown-item" href="http://101.53.137.41/api/?cat=Food-Nutrition_DairyProducts_Cheese&count=100&offset=0">Cheese</a>
        <a class="dropdown-item" href="http://101.53.137.41/api/?cat=Food-Nutrition_DairyProducts_Milk&count=100&offset=0">Milk</a>
        <a class="dropdown-item" href="http://101.53.137.41/api/?cat=Food-Nutrition_EdibleOils-Ghee_EdibleOils&count=100&offset=0">Edible Oils</a>
        <a class="dropdown-item" href="http://101.53.137.41/api/?cat=Food-Nutrition_EdibleOils-Ghee_Ghee&count=100&offset=0">Edible Ghee</a>
        
        </div>
      </div>

      <div class="btn-group">
      <button type="button" class="btn btn-danger">Health Nutrition</button>
      <button type="button" class="btn btn-danger dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <span class="sr-only">Toggle Dropdown</span>
      </button>
      <div class="dropdown-menu">
        <a class="dropdown-item" href="http://101.53.137.41/api/?cat=Food-Nutrition_Health-Nutrition_Chyawanprash&count=100&offset=0">Chyawanprash</a>
        <a class="dropdown-item" href="http://101.53.137.41/api/?cat=Food-Nutrition_Health-Nutrition_Digestives-Probiotics&count=100&offset=0">Digestive Probiotics</a>
        <a class="dropdown-item" href="http://101.53.137.41/api/?cat=Food-Nutrition_Health-Nutrition_Health-EnergyDrinks&count=100&offset=0">Energy Drinks</a>
        <a class="dropdown-item" href="http://101.53.137.41/api/?cat=Food-Nutrition_Health-Nutrition_HealthFood-Snacks&count=100&offset=0">Health Food Snacks</a>
        <a class="dropdown-item" href="http://101.53.137.41/api/?cat=Food-Nutrition_Health-Nutrition_ProteinSupplements&count=100&offset=0">Protein Supplements</a>
        <a class="dropdown-item" href="http://101.53.137.41/api/?cat=Food-Nutrition_Health-Nutrition_Vitamins-Supplements&count=100&offset=0">Vitamin Supplements</a>
        
        </div>
      </div>
      <div class="btn-group">
      <button type="button" class="btn btn-danger">Noodles, Pasta and Jams</button>
      <button type="button" class="btn btn-danger dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <span class="sr-only">Toggle Dropdown</span>
      </button>
      <div class="dropdown-menu">
        <a class="dropdown-item" href="http://101.53.137.41/api/?cat=Food-Nutrition_Noodles-Pasta_Noodles&count=100&offset=0">Noodles</a>
        <a class="dropdown-item" href="http://101.53.137.41/api/?cat=Food-Nutrition_Noodles-Pasta_Pasta&count=100&offset=0">Pasta</a>
        <a class="dropdown-item" href="http://101.53.137.41/api/?cat=Food-Nutrition_Noodles-Pasta_Vermicelli&count=100&offset=0">Vermicelli</a>
        <a class="dropdown-item" href="http://101.53.137.41/api/?cat=Food-Nutrition_Jams,Spreads-Honey_Jams-Spreads&count=100&offset=0">Jams</a>
        
        </div>
      </div>  
      
      <div class="btn-group">
      <button type="button" class="btn btn-danger">Ready to Cook</button>
      <button type="button" class="btn btn-danger dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <span class="sr-only">Toggle Dropdown</span>
      </button>
      <div class="dropdown-menu">
        <a class="dropdown-item" href="http://101.53.137.41/api/?cat=Food-Nutrition_ReadytoCook-Eat_ReadyMeals&count=100&offset=0">Meals</a>
        <a class="dropdown-item" href="http://101.53.137.41/api/?cat=Food-Nutrition_ReadytoCook-Eat_ReadyMixes&count=100&offset=0">Mixes</a>
        <a class="dropdown-item" href="http://101.53.137.41/api/?cat=Food-Nutrition_ReadytoCook-Eat_ReadytoCookSnacks&count=100&offset=0">Snacks</a>
        <a class="dropdown-item" href="http://101.53.137.41/api/?cat=Food-Nutrition_ReadytoCook-Eat_Soup&count=100&offset=0">Soups</a>        
        </div>
      </div>

      <div class="btn-group">
      <button type="button" class="btn btn-danger">Snacks</button>
      <button type="button" class="btn btn-danger dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <span class="sr-only">Toggle Dropdown</span>
      </button>
      <div class="dropdown-menu">
        <a class="dropdown-item" href="http://101.53.137.41/api/?cat=Food-Nutrition_Snacks-Nibbles_Chips&count=100&offset=0;">Nibble-Chips</a>
        <a class="dropdown-item" href="http://101.53.137.41/api/?cat=Food-Nutrition_Snacks-Nibbles_Cookies-Biscuits&count=100&offset=0">Biscuits</a>
        <a class="dropdown-item" href="http://101.53.137.41/api/?cat=Food-Nutrition_Snacks-Nibbles_Fryums-Papads&count=100&offset=0">Papads</a>
        <a class="dropdown-item" href="http://101.53.137.41/api/?cat=Food-Nutrition_Snacks-Nibbles_Popcorn&count=100&offset=0">Popcorns</a>
        <a class="dropdown-item" href="http://101.53.137.41/api/?cat=Food-Nutrition_Snacks-Nibbles_Wafers-Waffles&count=100&offset=0">Wafers</a>
        <a class="dropdown-item" href="">Vitamin Supplements</a>
        </div>
        </div>
        <div class="btn-group">
     <button type="button" class="btn btn-danger">Spices</button>
     <button type="button" class="btn btn-danger dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
       <span class="sr-only">Toggle Dropdown</span>
     </button>
     <div class="dropdown-menu">
       <a class="dropdown-item" href="http://101.53.137.41/api/?cat=Food-Nutrition_Spices,Condiments-Sauces_Condiments&count=100&offset=0;">Condiments</a>
       <a class="dropdown-item" href="http://101.53.137.41/api/?cat=Food-Nutrition_Spices,Condiments-Sauces_Dips,Sauces-Pastes_Dres&count=100&offset=0;">Dres</a>
       <a class="dropdown-item" href="http://101.53.137.41/api/?cat=Food-Nutrition_Spices,Condiments-Sauces_Dips,Sauces-Pastes_Mari&count=100&offset=0;">Mari</a>
       <a class="dropdown-item" href="http://101.53.137.41/api/?cat=Food-Nutrition_Spices,Condiments-Sauces_Dips,Sauces-Pastes_Past&count=100&offset=0;">Past</a>
       <a class="dropdown-item" href="http://101.53.137.41/api/?cat=Food-Nutrition_Spices,Condiments-Sauces_Dips,Sauces-Pastes_Vine&count=100&offset=0;">Vine</a>
       <a class="dropdown-item" href="http://101.53.137.41/api/?cat=Food-Nutrition_Spices,Condiments-Sauces_EdibleSeeds&count=100&offset=0;">EdibleSeeds</a>
       <a class="dropdown-item" href="http://101.53.137.41/api/?cat=Food-Nutrition_Spices,Condiments-Sauces_Pickles-Chutneys_Pickle&count=100&offset=0;">Pickle</a>
       <a class="dropdown-item" href="http://101.53.137.41/api/?cat=Food-Nutrition_Spices,Condiments-Sauces_Salt&count=100&offset=0;">Salt</a>
       <a class="dropdown-item" href="http://101.53.137.41/api/?cat=Food-Nutrition_Spices,Condiments-Sauces_Spices-Masala&count=100&offset=0;">Masala</a>
     </div>
     </div>
      </div>
    
    );
  }
}

