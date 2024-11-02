import './App.css';
import {React,useState,useEffect} from'react';
import {Routes,Route} from 'react-router-dom'
import Cuisines from './components/Cuisines/Cuisines';
import Home from './components/Home/Home';
import ShareRecipes from './components/ShareRecipes';
import Authors from './components/Authors';
import Signup from './components/Signup';
import Login from './components/Login';
import Header from './components/Header';
import Footer from './components/Footer';
import Aboutus from './components/Aboutus';
import Myrecipes from './components/Myrecipes';

function App() {

  const [homeDisplay,sethomeDisplay] = useState([{
    recipeId:1,
    recipeName:'Chicken briyani',
    reciperating: 4.5,
    recipeInstruction: 'Traditionally, whole bone-in chicken pieces are used to make biryani. Here in the US, it can be tough to find a whole chicken thats properly cut for biryani. As a handy shortcut, I like to use a mix of bone-in drumsticks and boneless chicken thighs. This way, you still get those authentic flavors and tender, juicy meat!',
    recipeAuthor: 'Vignesh',
    recipeTemplate: 'https://sharerecipes.s3.us-east-1.amazonaws.com/templaterecipe.jpg'
  },{
    recipeId:2,
    recipeName:'Chicken fry',
    reciperating: 4,
    recipeInstruction: 'Traditionally, whole bone-in chicken pieces are used to make biryani. Here in the US, it can be tough to find a whole chicken thats properly cut for biryani. As a handy shortcut, I like to use a mix of bone-in drumsticks and boneless chicken thighs. This way, you still get those authentic flavors and tender, juicy meat!',
    recipeAuthor: 'Vignesh',
    recipeTemplate: 'https://sharerecipes.s3.us-east-1.amazonaws.com/templaterecipe.jpg'
  },{
    recipeId:3,
    recipeName:'Chicken tandoori',
    reciperating: 4.5,
    recipeInstruction: 'Traditionally, whole bone-in chicken pieces are used to make biryani. Here in the US, it can be tough to find a whole chicken thats properly cut for biryani. As a handy shortcut, I like to use a mix of bone-in drumsticks and boneless chicken thighs. This way, you still get those authentic flavors and tender, juicy meat!',
    recipeAuthor: 'Vignesh',
    recipeTemplate: 'https://sharerecipes.s3.us-east-1.amazonaws.com/templaterecipe.jpg'
  },{
    recipeId:4,
    recipeName:'pepper chicken',
    reciperating: 4,
    recipeInstruction: 'Traditionally, whole bone-in chicken pieces are used to make biryani. Here in the US, it can be tough to find a whole chicken thats properly cut for biryani. As a handy shortcut, I like to use a mix of bone-in drumsticks and boneless chicken thighs. This way, you still get those authentic flavors and tender, juicy meat!',
    recipeAuthor: 'Vignesh',
    recipeTemplate: 'https://sharerecipes.s3.us-east-1.amazonaws.com/templaterecipe.jpg'
  },{
    recipeId:5,
    recipeName:'Mushroom tikka',
    reciperating: 4.5,
    recipeInstruction: 'Traditionally, whole bone-in chicken pieces are used to make biryani. Here in the US, it can be tough to find a whole chicken thats properly cut for biryani. As a handy shortcut, I like to use a mix of bone-in drumsticks and boneless chicken thighs. This way, you still get those authentic flavors and tender, juicy meat!',
    recipeAuthor: 'Vignesh',
    recipeTemplate: 'https://sharerecipes.s3.us-east-1.amazonaws.com/templaterecipe.jpg'
  },{
    recipeId:6,
    recipeName:'panneer tikka',
    reciperating: 3,
    recipeInstruction: 'Traditionally, whole bone-in chicken pieces are used to make biryani. Here in the US, it can be tough to find a whole chicken thats properly cut for biryani. As a handy shortcut, I like to use a mix of bone-in drumsticks and boneless chicken thighs. This way, you still get those authentic flavors and tender, juicy meat!',
    recipeAuthor: 'Vignesh',
    recipeTemplate: 'https://sharerecipes.s3.us-east-1.amazonaws.com/templaterecipe.jpg'
  }])
  const [searchRecipe,setSearchRecipe] = useState('');
  const [cuisines,setCuisines] = useState([{
    cuisineId:1,
    cuisineName: 'American',
    cuisineVarities: [{cName:'pizzas',cCount:18},{cName:'burger',cCount:18},{cName:'lassagna',cCount:5},{cName:'shawarma',cCount:9},{cName:'kfc fried chicken',cCount:40}],
    cuisineImg:'https://sharerecipes.s3.us-east-1.amazonaws.com/cuisinetemp.jpg'
  },
  {
    cuisineId:2,
    cuisineName: 'African',
    cuisineVarities: [{cName:'pizzas',cCount:18},{cName:'burger',cCount:18},{cName:'lassagna',cCount:5},{cName:'shawarma',cCount:9},{cName:'kfc fried chicken',cCount:40}],
    cuisineImg:'https://sharerecipes.s3.us-east-1.amazonaws.com/cuisinetemp.jpg'
  },
  {
    cuisineId:3,
    cuisineName: 'Indian',
    cuisineVarities: [{cName:'pizzas',cCount:18},{cName:'burger',cCount:18},{cName:'lassagna',cCount:5},{cName:'shawarma',cCount:9},{cName:'kfc fried chicken',cCount:40}],
    cuisineImg:'https://sharerecipes.s3.us-east-1.amazonaws.com/cuisinetemp.jpg'
  },
  {
    cuisineId:4,
    cuisineName: 'European',
    cuisineVarities: [{cName:'pizzas',cCount:18},{cName:'burger',cCount:18},{cName:'lassagna',cCount:5},{cName:'shawarma',cCount:9},{cName:'kfc fried chicken',cCount:40}],
    cuisineImg:'https://sharerecipes.s3.us-east-1.amazonaws.com/cuisinetemp.jpg'
  },
  {
    cuisineId:5,
    cuisineName: 'South Asian',
    cuisineVarities: [{cName:'pizzas',cCount:18},{cName:'burger',cCount:18},{cName:'lassagna',cCount:5},{cName:'shawarma',cCount:9},{cName:'kfc fried chicken',cCount:40}],
    cuisineImg:'https://sharerecipes.s3.us-east-1.amazonaws.com/cuisinetemp.jpg'
  },
  {
    cuisineId:6,
    cuisineName: 'Chinese',
    cuisineVarities: [{cName:'pizzas',cCount:18},{cName:'burger',cCount:18},{cName:'lassagna',cCount:5},{cName:'shawarma',cCount:9},{cName:'kfc fried  chicken',cCount:40},{cName:'pongal',cCount:1},{cName:'pongal',cCount:1},{cName:'pongal',cCount:1}],
    cuisineImg:'https://sharerecipes.s3.us-east-1.amazonaws.com/cuisinetemp.jpg'
  }])

  const [searchCuisine,setSearchCuisine] = useState('')

  return (
    <div className="App">
   
        <Header />
        <Routes>
           
           <Route path='/' element={<Home homeDisplay = {homeDisplay.filter(recipe => recipe.recipeName.toLocaleLowerCase().includes(searchRecipe.toLocaleLowerCase()))} searchRecipe={searchRecipe} setSearchRecipe={setSearchRecipe} />}/>
           <Route path='/cuisines' element={<Cuisines cuisines={cuisines.filter(cuisine => {
                  let cuisineNm='';
                  cuisine.cuisineVarities.forEach(variety => cuisineNm+= variety.cName)
                  if(cuisine.cuisineName.toLocaleLowerCase().includes(searchCuisine.toLocaleLowerCase())){
                    return cuisine
                  }else if(cuisineNm.includes(searchCuisine.toLocaleLowerCase())){
                    return cuisine
                  }
                  return null
           })} setCuisines={setCuisines} searchCuisine={searchCuisine} setSearchCuisine={setSearchCuisine} />}/>
           <Route path='/sharerecipes' element={<ShareRecipes />}/>
           <Route path='/authors' element={<Authors />}/>
           <Route path='/signup' element={<Signup />}/>
           <Route path='/login' element={<Login />}/>
           <Route path='/aboutus' element ={ <Aboutus /> }/>
           <Route path='/myrecipes' element ={ <Myrecipes /> }/>
       
        </Routes>

        <Footer />

    </div>
  );
}

export default App;
