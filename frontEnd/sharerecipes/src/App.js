import './App.css';
import {React,useState,useEffect} from'react';
import {Routes,Route,useNavigate} from 'react-router-dom'
import Cuisines from './components/Cuisines/Cuisines';
import Home from './components/Home/Home';
import ShareRecipes from './components/ShareRecipes';
import Authors from './components/Authors/Authors';
import Signup from './components/Signup';
import Login from './components/Login';
import Header from './components/Header';
import Footer from './components/Footer';
import Aboutus from './components/Aboutus';
import Myrecipes from './components/Myrecipes/Myrecipes';
import MyrecipeHead from './components/Myrecipes/MyrecipeHead';
import Favourites from './components/Favourites';
import RecipePage from './components/Home/RecipePage';
import ShowVarities from './components/Cuisines/ShowVarities';
import EditRecipe from './components/Myrecipes/EditRecipe';
import UserContribution from './components/Authors/UserContribution';


function App() {

  let navigate = useNavigate()



  const [homeDisplay,sethomeDisplay] = useState([{
    recipeId:1,
    recipeName:'Slow Cooker Butter Chicken',
    reciperating: 4.7,
    recipeIngredients: ['2 tablespoons butter','4 large skinless, boneless chicken thighs, cut into bite-sized pieces','1 onion, diced','3 cloves garlic, minced','1 (6 ounce) can tomato paste','1 tablespoon curry paste','2 teaspoons curry powder','2 teaspoons tandoori masala','1 teaspoon garam masala','15 green cardamom pods','1 (14 ounce) can coconut milk','1 cup low-fat plain yogurt','salt to taste'],
    recipeInstruction: ['Heat butter and vegetable oil in a large skillet over medium heat. Stir in chicken, onion, and garlic. Cook and stir until onion has softened and turned translucent, about 10 minutes.', 'Stir in tomato paste, curry paste, curry powder, tandoori masala, and garam masala until no lumps of tomato paste remain.', 'Pour mixture into a slow cooker; stir in cardamom pods, coconut milk, and yogurt. Season with salt.', 'Cook on High for 4 to 6 hours or Low for 6 to 8 hours, or until chicken is tender and sauce has reduced to the desired consistency. Remove and discard cardamom pods before serving.'],
    recipeAuthor: 'Vignesh',
    recipeCuisine: [{cName:'Indian'},{cVariety:'Chicken'}],
    recipeTemplate: 'https://sharerecipes.s3.us-east-1.amazonaws.com/temporaryfiles/slow-cooker-butter-chickend.webp',
    recipeDiet: 'non-veg',
    recipeComments:[{vignesh:'I tried it, good'},{karthik:'tasty recipe'}]
  }, 
  {
    recipeId: 2,
    recipeName: 'Golden Butter Rice',
    recipeIngredients: ['1/2 cup unsalted butter, 1 tablespoon finely grated fresh ginger, 1 1/4 teaspoons ground turmeric, 1/4 teaspoon cayenne pepper, 1 tablespoon brown sugar, 1 teaspoon fine salt, 2 cups basmati rice or other long grain white rice, 3 cups water, 1/3 cup chopped walnuts (optional), 1/3 cup sliced green onions (optional)'],
    recipeInstruction: ['Melt butter in a pan or pot with a tight-fitting lid over medium heat. As soon as butter starts to bubble, add in ginger, turmeric, cayenne, brown sugar, and salt. Cook, whisking, for 1 minute. Add rice, and stir until every grain is coated with butter. Stir in water, and bring to a boil over high heat. As soon as it begins to boil, gently shake and swirl the pan to settle rice into an even layer, then reduce heat to medium-low. Cover tightly and simmer for 15 minutes. Turn off heat, and let rest, covered, for 10 minutes. DO NOT lift the lid or try to stir yet. Now, remove the lid and use a fork to fluff and separate rice grains. Season to taste, and serve immediately, garnished with walnuts and green onions.'],
    recipeAuthor: 'Vignesh',
    recipeCuisine: [{cName:'Indian'},{cVariety:'Rice'}],
    recipeTemplate: 'https://sharerecipes.s3.us-east-1.amazonaws.com/temporaryfiles/8599188_Golden-Butter-Rice.webp',
    recipeDiet: 'veg',
    reciperating: 4,
    recipeComments:[]
  },
  {
    recipeId: 3,
    recipeName: 'Grilled Salmon with Chimichurri',
    recipeIngredients: ['2 cloves garlic, 1 shallot, 1 bunch curly parsley, 1 bunch fresh cilantro, 4 sprigs fresh dill, or more to taste, 2 tablespoons lime juice, 3 tablespoons vinegar, 1/2 cup olive oil, 1/2 lime, zested, salt and freshly ground black pepper to taste, 1 teaspoon red pepper flakes (optional), 8 (3 ounce) salmon filets, 2 teaspoons granulated garlic, 1 teaspoon Italian seasoning, salt and freshly ground black pepper to taste'],
    recipeInstruction: ['For chimichurri, add garlic and shallot to the bowl of a food processor and pulse 2 or 3 times. Add herbs, lime juice, and vinegar. Blend until finely chopped. With the food processor still running, slowly drizzle in olive oil to emulsify. Add lime zest, salt, and pepper to taste and blend until smooth. Stir in red pepper flakes. Refrigerate until ready to use. Prepare an outdoor grill for direct cooking over high heat, 450 to 550 degrees F (230 to 290 degrees C). Generously coat the flesh side of the salmon fillets with oil and season evenly with granulated garlic, Italian seasoning, salt, and pepper. Grill the salmon, skin side down, over direct high heat for 6 to 8 minutes. Turn the salmon over, close the lid, and cook until fish flakes easily with a fork, 4 to 6 minutes longer. Transfer to a platter to rest for 1 to 2 minutes. Slide the salmon skin from the fillets and serve with chimichurri.'],
    recipeAuthor: 'Vignesh',
    recipeTemplate: 'https://sharerecipes.s3.us-east-1.amazonaws.com/temporaryfiles/8699671_Grilled-Salmon-with-Chimichurri_e.webp',
    recipeDiet: 'non-veg',
    recipeCuisine: [{cName:'Argentinian'},{cVariety:'Sea food'}],
    reciperating: 4.5,
    recipeComments:[]
  },
  {
    recipeId: 4,
    recipeName: 'Chicken Chalupas',
    recipeIngredients: ['3 cups all-purpose flour, 4 teaspoons baking powder, 1 teaspoon kosher salt, 1 1/4 cups whole milk, 2 tablespoons melted butter, 2 cups chopped iceberg lettuce, 1 cup chopped tomatoes, 1 cup shredded Cheddar cheese, or to taste, Optional toppings, such as pico de gallo, sour cream, or sliced avocados, to taste, 1 cup refried beans, 1 1/2 cups shredded cooked chicken, 2 tablespoons taco seasoning, oil for frying'],
    recipeInstruction: ['To make the chalupa shells, combine flour, baking powder, and salt in a medium mixing bowl. Stir well to combine the dry ingredients. Gradually pour in milk, while stirring, until you need to use your hand to knead. Add in the melted butter, and knead well. Shape dough into 6 equal balls. Sprinkle flour over a work surface and flour the rolling pin. Roll each dough ball into about a 7-inch circle, moving the dough a quarter turn after a couple of passes with the rolling pin. Add more flour to the work surface and rolling pin if dough sticks. Keep rolled dough circles under a clean, damp kitchen towel until ready to fry. Set up stations of chopped lettuce, chopped tomatoes, shredded cheese, and any optional toppings you plan to use, and place in a convenient array for assembling the chalupas. Microwave refried beans on medium setting until soft and spreadable, about 1 minute, and add as the first station to your other ingredients. Warm shredded chicken briefly in the microwave or in a skillet, and toss with taco seasoning mix, and add as the second station to the other ingredients. To fry chalupa shells, add cooking oil to a depth of about 1/4-inch to a large, nonstick skillet. Heat oil over medium heat, and when the oil is hot, fry one side of one dough circle until lightly brown, about 1 minute. Using tongs, lift the partially cooked shell from the skillet and place only half of the uncooked side into the oil. Carefully hold half of the shell away from the oil, until the first half is browned, about 1 minute, then brown the other half. Repeat until all the shells are done. To keep the bent shape, place fried chalupa shells into a taco holder until ready to fill. To serve, spread each chalupa shell with about 2 tablespoons refried beans, and fill with 2 or 3 tablespoons seasoned shredded chicken. Fill with lettuce, tomatoes, and cheese. Garnish with optional toppings, such as pico de gallo, sour cream, and sliced avocados, if desired. Serve immediately.'],  
    recipeAuthor: 'Vignesh',
    recipeCuisine: [{cName:'Mexican'},{cVariety:'Chicken'}],
    recipeTemplate: 'https://sharerecipes.s3.us-east-1.amazonaws.com/temporaryfiles/8681727_Chicken-Chalupas.webp',
    recipeDiet: 'non-veg',
    reciperating: 4.900000095367432,
    recipeComments:[]
  },
  {
    recipeId: 5,
    recipeName: 'Baked Sweet And Sour Chicken',
    recipeIngredients: ['1/4 cup olive oil, divided, 4 (6-ounce) boneless skinless chicken thighs, cut into 1 inch cubes, 1/4 teaspoon freshly ground black pepper, 1 3/4 teaspoons kosher salt, 2 large eggs, 1 cup all purpose flour, 2 large multicolored bell peppers, sliced, 1/2 cup ketchup, 1/4 cup pineapple juice, 1/4 cup honey, 3 tablespoons soy sauce, 1 tablespoon rice vinegar, 3 cups cooked white rice'],
    recipeInstruction: ['Gather all ingredients. Preheat oven to 475 degrees F (245 degrees C) with racks in upper and lower third positions. Grease each of 2 baking sheets with 1 tablespoon of the oil along 1 of the short sides; set aside. Sprinkle chicken evenly with pepper and 1 1/2 teaspoons of the salt, and place in a bowl. Add eggs, and stir to coat. Place flour in a shallow bowl or baking dish. Working in batches, dredge chicken in flour, and shake off excess. Divide chicken between the prepared baking sheets, spreading in an even layer along short edges. Divide bell peppers among baking sheets, spreading evenly along other short edges. Drizzle bell peppers evenly with remaining 2 tablespoons oil, and toss gently to coat. Bake in the preheated oven, rotating baking sheets halfway through, until chicken is browned in spots, about 15 minutes. Remove chicken and bell peppers from the oven; use a spatula to carefully flip chicken only. Return to the oven, and continue baking at 475 degrees F (245 degrees C) until chicken is crispy and a thermometer inserted into thickest portion of chicken registers 165 degrees F (73 degrees C), about 5 minutes. While chicken is baking, whisk together ketchup, pineapple juice, honey, soy sauce, rice vinegar, and remaining 1/4 teaspoon salt in a small saucepan. Bring to a boil over medium, whisking occasionally. Reduce to a simmer over medium-low, and cook, stirring often, until mixture is reduced to 3/4 cup and coats back of spoon, about 5 minutes. Remove from heat. Pour 1/4 cup of the prepared sauce over chicken on the baking sheets; toss to coat evenly. Divide rice, chicken, and bell peppers evenly among bowls. Drizzle evenly with remaining 1/2 cup sauce. Serve immediately.'],
    recipeAuthor: 'Vignesh',
    recipeCuisine: [{cName:'Chinese'},{cVariety:'Chicken'}],
    recipeTemplate: 'https://sharerecipes.s3.us-east-1.amazonaws.com/temporaryfiles/baked-sweet-sour-chicken.webp',
    recipeDiet: 'non-veg',
    reciperating: 3,
    recipeComments:[]
  },
  {
    recipeId: 6,
    recipeName: 'German Apple Cake',
    recipeIngredients: ['1 cup vegetable oil', '2 large eggs', '2 cups white sugar', '1 teaspoon vanilla extract', '2 cups all-purpose flour', '2 teaspoons ground cinnamon', '1 teaspoon baking soda', '½ teaspoon salt', '4 cups apples - peeled', 'cored and diced'],
    recipeInstruction: ['Preheat the oven to 350 degrees F (175 degrees C).', 'Grease and flour a 9x13-inch cake pan. Beat oil and eggs in a mixing bowl with an electric mixer until creamy.', 'Add sugar and vanilla; beat well. Stir together flour, cinnamon, baking soda, and salt in a bowl.', 'Slowly add flour mixture to egg mixture; mix until combined. The batter will be very thick.', 'Fold in apples by hand using a wooden spoon. Spread batter into the prepared pan.', 'Bake cake in the preheated oven until a toothpick inserted into the center comes out clean, about 45 minutes. Cool cake on a wire rack.'],
    recipeAuthor: 'Vignesh',
    recipeTemplate: 'https://sharerecipes.s3.us-east-1.amazonaws.com/temporaryfiles/2327614applecake00.webp',
    recipeCuisine: [{cName:'German'},{cVariety:'Cake'}],
    recipeDiet: 'veg',
    reciperating: 3,
    recipeComments:[{karthik:'great thanks'}]
  },
  {
    recipeId: 7,
    recipeName: 'Chicken Teriyaki',
    recipeIngredients: ['1 cup low sodium soy sauce, 1/4 cup sake, 3 tablespoons rice vinegar, 1/3 cup brown sugar, or more to taste, 1 tablespoon white sesame seeds, 1/4 teaspoon crushed red pepper, 2 teaspoons canola or peanut oil, 1 teaspoon toasted sesame oil, 1 teaspoon kosher salt, 1/2 teaspoon freshly ground black pepper, 2 pounds boneless skinless chicken thighs, cut into 1 1/2 inch pieces, 2 teaspoons grated fresh ginger, 1 teaspoon finely minced garlic, 1 bunch green onions, thinly sliced, divided, 1 1/2 cups cooked rice'],
    recipeInstruction: ['Combine soy sauce, sake, rice vinegar, and brown sugar in a bowl and whisk well until sugar is dissolved. Stir in sesame seeds and crushed red pepper and set aside. Heat oils in a large skillet over high heat. Sprinkle salt and pepper evenly over chicken. Add chicken in a single layer to the skillet and cook, undisturbed until chicken is browned and releases easily from the pan, 4 to 6 minutes. Flip chicken pieces, cook 1 more minute and remove from pan; set aside. Reduce heat to medium and add ginger and garlic. Cook, stirring constantly, until fragrant, about 1 minute. Reserve 2 tablespoon of the green onions for garnish and add remaining green onions to the skillet. Cook for 1 minute. Add 1 cup reserved soy sauce mixture to the skillet and stir with a wooden spoon, scraping up any browned bits from the bottom of the skillet. Bring mixture to a boil and cook until sauce has reduced by about a third or until slightly thickened and glossy. Return chicken to the skillet and cook, stirring occasionally, until sauce is thickened slightly and chicken is coated in the sauce and cooked through. Serve over rice and sprinkled with reserved green onions.'],
    recipeAuthor: 'Vignesh',
    recipeCuisine: [{cName:'Japanese'},{cVariety:'Chicken'}],
    recipeTemplate: 'https://sharerecipes.s3.us-east-1.amazonaws.com/temporaryfiles/ChickenTeriyaki5.webp',
    recipeDiet: 'non-veg',
    reciperating: 3,
    recipeComments:[{vignesh:'nice'}]
  }
])
  const [searchRecipe,setSearchRecipe] = useState('');
  const [cuisines,setCuisines] = useState([{
    cuisineId:1,
    cuisineName: 'Indian',
    cuisineVarities: [{cName:'Chicken',cCount:1,recipeId:[1]},{cName:'Rice',cCount:1,recipeId:[2]}],
    cuisineImg:'https://sharerecipes.s3.us-east-1.amazonaws.com/cuisinetemp.jpg'
  },
  {
    cuisineId:2,
    cuisineName: 'Argentinian',
    cuisineVarities: [{cName:'Sea food',cCount:1,recipeId:[3]}],
    cuisineImg:'https://sharerecipes.s3.us-east-1.amazonaws.com/cuisinetemp.jpg'
  },
  {
    cuisineId:3,
    cuisineName: 'Mexican',
    cuisineVarities: [{cName:'Chicken',cCount:1,recipeId:[4]}],
    cuisineImg:'https://sharerecipes.s3.us-east-1.amazonaws.com/cuisinetemp.jpg'
  },
  {
    cuisineId:4,
    cuisineName: 'Chinese',
    cuisineVarities: [{cName:'Chicken',cCount:1,recipeId:[5]}],
    cuisineImg:'https://sharerecipes.s3.us-east-1.amazonaws.com/cuisinetemp.jpg'
  },
  {
    cuisineId:5,
    cuisineName: 'German',
    cuisineVarities: [{cName:'Cakes',cCount:1,recipeId:[6]}],
    cuisineImg:'https://sharerecipes.s3.us-east-1.amazonaws.com/cuisinetemp.jpg'
  },
  {
    cuisineId:6,
    cuisineName: 'Japanese',
    cuisineVarities: [{cName:'Chicken',cCount:1,recipeId:[7]}],
    cuisineImg:'https://sharerecipes.s3.us-east-1.amazonaws.com/cuisinetemp.jpg'
  }])

  const [searchCuisine,setSearchCuisine] = useState('')
  const [users,setUsers] = useState([/* {userId:13,userName:'vignesh',userEmail: 'vignvick3035@gmail.com',totalRecipeRating:3.9,recipeContributed:6,followedBy:0} */])

  const [searchUsers,setSearchUsers] = useState('')

  const [myRecipes,setMyRecipes] = useState([1,3,7,2,4,5,6])

  const [favorite,setFavorite] = useState([3,6])
 

  const [signinName,setSigninName] = useState('')
  const [signinEmail,setSigninEmail] = useState('')
  const [signinPasswrd,setSigninPasswrd] = useState('')
  const [successSigninMsg,setSuccessSigninMsg]  = useState('')

  const [loginEmail,setLoginEmail] = useState('');
  const [loginPasswrd,setLoginPasswrd] = useState('');
  const [loginSuccessMsg,setLoginSuccessMsg] = useState('')
  const [loginErrorMsg,setLoginErrorMsg] = useState('')

  const [newRecipeFormData,setnewRecipeFormData] = useState({
       newRecName: '',
       newRecIng : '',
       newRecIns: '',
       newRecCuis: '',
       newRecVariety:'',
       newRecDiet:''
  });
  const [editRecipeFormData,setEditRecipeFormData] = useState({
    editRecName: '',
    editRecIng : '',
    editRecIns: '',
    editRecCuis: '',
    editRecVariety:'',
    editRecDiet:''
});
  const [showVaritiesInForm,setShowVaritiesInForm] = useState('')
  const [showEditVInForm,setShowEditVInForm] = useState('')

  const[manageFollows,setManageFollows] = useState([{followedBy:[],following:['vignesh','selvam','senthil','karthik']}])

  async function handleSignin(e){
    
    e.preventDefault();
    let userId = users.length ? users[users.length-1].userId + 1 : 1;
    let newUserObj = {userId,userName:signinName,userEmail:signinEmail,totalRecipeRating:0,recipeContributed:0,followedBy:0}
    console.log(newUserObj)
    setUsers([...users,newUserObj]);
    
    let sendUserToDB = await fetch('http://localhost:5000/signup',{
      method:'post',
      headers: {
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify({userId,signinName,signinEmail,signinPasswrd})
    })
    let responseDb = await sendUserToDB.json();
    
    console.log(responseDb);

    setSigninEmail('');
    setSigninName('');
    setSuccessSigninMsg('Sign in successfull!  redirecting to login page...')
    setTimeout(()=>{
      navigate('/login')
      setSuccessSigninMsg('')
    },2000)

   
  }

  async function handleRecipeSubmit(e){
    e.preventDefault();
    let recIngArr = newRecipeFormData.newRecIng.split(/\d+\.\s*|\n/).filter(item => item.trim() !== '');
    let recInsArr = newRecipeFormData.newRecIns.split(/\d+\.\s*|\n/).filter(item => item.trim() !== '');
    let recId = homeDisplay.length ? homeDisplay[homeDisplay.length-1].recipeId + 1 : 1;
          let newRecipeObj = {
             recipeId: recId,
             recipeName: newRecipeFormData.newRecName,
             reciperating: 0,
             recipeIngredients: recIngArr,
             recipeInstruction: recInsArr,
             recipeAuthor : 'vignesh',
             recipeCuisine: [{cName: newRecipeFormData.newRecCuis},{cVariety:newRecipeFormData.newRecVariety}],
             recipeTemplate: 'https://sharerecipes.s3.us-east-1.amazonaws.com/templaterecipe.jpg',
             recipeDiet: newRecipeFormData.newRecDiet,
             recipeComments:[]

          }

       let sendRecipeToBackend = await fetch('http://localhost:5000/addrecipe',{
         method: 'post',
         headers :{
          'Authorization': localStorage.getItem('recipeuser').toString(),
          'Content-Type' : 'application/json'
         },
         body: JSON.stringify({recIngArr,recInsArr,newRecipeObj})
       })

       let parseResponseDb = await sendRecipeToBackend.json()
       console.log(parseResponseDb.msg)

         let finalRecipeObj = [...homeDisplay,newRecipeObj]
          sethomeDisplay(finalRecipeObj)
          setnewRecipeFormData({
            newRecName: '',
            newRecIng : '',
            newRecIns: '',
            newRecCuis: '',
            newRecVariety:'',
            newRecDiet:''
       })

       navigate('/')

  }

  function handleEditRecipeSubmit(ev,id){

    ev.preventDefault();
    let editRecIngArr = editRecipeFormData.editRecIng.split(/\d+\.\s*|\n/).filter(item => item.trim() !== '');
    let editRecInsArr = editRecipeFormData.editRecIns.split(/\d+\.\s*|\n/).filter(item => item.trim() !== '');
    const updatedHomeDisplay = homeDisplay.map(recipe => 

    (recipe.recipeId === Number(id) ? {
          
           
              ...recipe,
              recipeName: editRecipeFormData.editRecName,
              recipeIngredients: editRecIngArr,
              recipeInstruction: editRecInsArr,
              recipeCuisine: [
                  { cName: editRecipeFormData.editRecCuis },
                  { cVariety: editRecipeFormData.editRecVariety }
              ],
              recipeDiet: editRecipeFormData.editRecDiet
          
      } : recipe
    
  ));

 
  sethomeDisplay(updatedHomeDisplay);

  setEditRecipeFormData({
    editRecName: '',
    editRecIng : '',
    editRecIns: '',
    editRecCuis: '',
    editRecVariety:'',
    editRecDiet:''
})
  console.log(homeDisplay)
   
  }

  async function handleLogin(ev){
    ev.preventDefault();

    let sendUserToDB = await fetch('http://localhost:5000/login',{
      method:'post',
      headers: {
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify({loginEmail,loginPasswrd})
    })
    let responseDb = await sendUserToDB.json();
    console.log(responseDb)

    if(responseDb.msg === 'User login successfull'){

      setLoginEmail('');
      setLoginPasswrd('');

      setLoginSuccessMsg('User login successfull!  Please wait...')

      setTimeout(()=>{
        setLoginSuccessMsg('')
        console.log(responseDb)
        localStorage.setItem('recipeuser',responseDb.userAuth)

        navigate('/')
    },2000)

    }

    if(responseDb.msg === 'User Email not found!'){

      setLoginErrorMsg('User not found')

      setTimeout(()=>{

        setLoginErrorMsg('')

    },2000)

    }

    if(responseDb.msg === 'password incorrect'){

      setLoginErrorMsg('Enter password is incorrect')

      setTimeout(()=>{

        setLoginErrorMsg('')

    },2000)
        
    }
  }


  useEffect(() => {

   
    async function getDataFromdb(){

      
    let fetchRecipesFromDb = await fetch('http://localhost:5000/getdata');

    let parseData = await fetchRecipesFromDb.json()
  
     console.log(parseData);
     setUsers(parseData.reciUsers);

    }

   (async()=> await getDataFromdb())()


  }, []);
 

  

  return (
    <div className="App">
   
        <Header />
        <Routes>
           
           <Route path='/' element={<Home homeDisplay = {homeDisplay.filter(recipe => recipe.recipeName.toLocaleLowerCase().includes(searchRecipe.toLocaleLowerCase()))} searchRecipe={searchRecipe} setSearchRecipe={setSearchRecipe} />} />
           <Route path='/home/:id' element={ <RecipePage homeDisplay={homeDisplay} sethomeDisplay={sethomeDisplay} favorite={favorite} setFavorite={setFavorite}/> } />
           <Route path='/cuisines' element={<Cuisines cuisines={cuisines.filter(cuisine => {
                  let cuisineNm='';
                  cuisine.cuisineVarities.forEach(variety => cuisineNm+= variety.cName)
                  if(cuisine.cuisineName.toLocaleLowerCase().includes(searchCuisine.toLocaleLowerCase())){
                    return cuisine
                  }else if(cuisineNm.includes(searchCuisine.toLocaleLowerCase())){
                    return cuisine
                  }
                  return null
           })} setCuisines={setCuisines} searchCuisine={searchCuisine} setSearchCuisine={setSearchCuisine} />} />

         <Route path='/cuisines/:id' element={<ShowVarities homeDisplay={homeDisplay} cuisines={cuisines} />} />

         
           <Route path='/sharerecipes' element={<ShareRecipes handleRecipeSubmit={handleRecipeSubmit} newRecipeFormData={newRecipeFormData} setnewRecipeFormData={setnewRecipeFormData} setShowVaritiesInForm={setShowVaritiesInForm} cuisineV={showVaritiesInForm ? cuisines.filter(cuisine => cuisine.cuisineName === showVaritiesInForm) : ''} />}/>
           <Route path='/authors' element={<Authors users={users} setUsers={setUsers} searchUsers={searchUsers} setSearchUsers={setSearchUsers} manageFollows={manageFollows} setManageFollows={setManageFollows} />}/>
           <Route path='/signup' element={<Signup users={users} setUsers={setUsers} signinName={signinName} signinEmail={signinEmail} setSigninName={setSigninName} setSigninEmail={setSigninEmail} handleSignin={handleSignin} signinPasswrd={signinPasswrd} setSigninPasswrd={setSigninPasswrd} successSigninMsg={successSigninMsg}/>}/>
           <Route path='/login' element={<Login handleLogin={handleLogin} loginEmail={loginEmail} setLoginEmail={setLoginEmail} loginPasswrd={loginPasswrd} setLoginPasswrd={setLoginPasswrd} loginErrorMsg={loginErrorMsg} loginSuccessMsg={loginSuccessMsg} />}/>  
           <Route path='/aboutus' element ={ <Aboutus /> }/>
           <Route path='/myrecipes' element ={ <MyrecipeHead />}>
            <Route index element={<Myrecipes myRecipes={myRecipes} setMyRecipes={setMyRecipes} homeDisplay={homeDisplay} />} />
            <Route path='favourites' element={<Favourites favorite={favorite} setFavorite={setFavorite} homeDisplay={homeDisplay} /> } />
           
           </Route>
           <Route path='/editrecipe/:id' element={ <EditRecipe editRecipeFormData={editRecipeFormData} setEditRecipeFormData={setEditRecipeFormData} handleEditRecipeSubmit={handleEditRecipeSubmit} setShowEditVInForm={setShowEditVInForm} cuisineEditV={showEditVInForm ? cuisines.filter(cuisine => cuisine.cuisineName === showEditVInForm) : ''} homeDisplay={homeDisplay} /> } />
            <Route path='/usercontribution/:name' element={ <UserContribution homeDisplay={homeDisplay} /> } />
        
        </Routes>

        <Footer />

    </div>
  );
}

export default App;
