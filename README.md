# FitBox : SEI Project Four

## Contents

- Project Overview
- Project Brief
- Technologies Used
- Project Timeline - 9 days
- Bugs
- Wins and Challenges
- Future Improvements
- Key Learnings

## Project Overview

For my final project, I decided I wanted to work in a pair. I wanted the balance of gaining more experience in coding alongside someone else, but also have more autonomy and responsibility to create a working app vs working in a group. Based on mine and my coding partner's interest in health and fitness, we decided to create a Full stack app that was based around all things related to these topics. We would have articles, workout videos and food recipes that all centered around health and well-being. This app was created using python, django and postgreSQL in the backend.

**Functionality:**
- Users are able to register and login.
- Users are able to filter articles based on category, read the articles, like them and save them to their profile.
- Users are able to filter videos based on the category, watch the videos and like them.
- Users are able to filter recipes based on the category, read the recipes and like them.
- User can follow other users and also have thier own profile page to see the content they have saved.

Please see full deployed version **[here](https://fitbox1.herokuapp.com)**. Login details are required to access the full version, feel free to use the below:

- email: 
- password: 

https://user-images.githubusercontent.com/77445688/117290512-cbdb2a00-ae65-11eb-9d74-e04c3dce7afc.mov

## Project Brief 
- **Build a full-stack application** by making your own backend and your own front-end
- **Use a Python Django API** using Django REST Framework to serve your data from a Postgres database
- **Consume your API with a separate front-end** built with React
- **Be a complete product** which most likely means multiple relationships and CRUD functionality for at least a couple of models

## Technologies Used

Back-end:

- Python
- Django
- Django REST Framework
- PostgreSQL
- TablePlus
- PYjwt


Frontend:

- React
- Axios
- Bootstrap
- SCSS

Development tools:

- Insomnia
- GitHub
- Heroku (deployment)
- Trello Board (planning and timeline)
- Excalidraw (wireframing)
- drawSQL (ERD)

## Project Timeline - 9 Days

### Day One - Planning

As per all the other projects, the first day was spent writing pseudo code, creating a plan for MVP and post MVP features. We also spent this day wireframing, then splitting out tasks on a trello board and finally creating an entity relationship diagram for the database.

**Wireframe:**

![Screenshot 2021-05-06 at 14 58 46](https://user-images.githubusercontent.com/77445688/117310883-9e00e000-ae7b-11eb-8988-8cc76243707d.png)

**Trello:**

![Screenshot 2021-05-06 at 15 00 06](https://user-images.githubusercontent.com/77445688/117311081-cb4d8e00-ae7b-11eb-809c-ac091f4f73ee.png)

**Entity Relationship Diagram:**

![drawSQL-export-2021-05-06_12_02](https://user-images.githubusercontent.com/77445688/117311552-3008e880-ae7c-11eb-9f7f-39792a35e316.png)

### Day Two and Three - Backend

**Getting Started:**

- Create a new repo in GitHub
- Open up the repo in Terminal
- Install ```pipenv install django``` inside the repo folder
- Open up the file in VS code and ```pipenv shell``` inside the project terminal
- Run ```django-admin startproject project .```
- Install ```pipenv install pylint```
- Run ```touch .pylintrc```
- Add the correct config to the above file
- Update settings inside project folder the name of the database and to refer to postgreSQL instead of the default of SQL
- Install ```pipenv install psycopg2-binary```

The next two days were spent creating our models and serializers in the back end. As the User Model was going to be the one that everything was based around, we created the jwt_auth app first. We added in the model, followed by the authentication file that would act like a piece of middleware to check to see if the user has a token to access parts of the site. In our views.py file we then added the function for register and login, as well as password confirmation functionality as part of the common.py serializer.

**User Model:**

    class User(AbstractUser):
        email = models.CharField(max_length=50, unique=True)
        first_name = models.CharField(max_length=50, blank=True)
        last_name = models.CharField(max_length=50, blank=True)
        profile_image = models.CharField(max_length=300, blank=True)
        slug = AutoSlugField(populate_from='username')
        bio = models.CharField(max_length=255, blank=True)
        friends = models.ManyToManyField('jwt_auth.User', related_name="jwt_auth", blank=True)
        article = models.ManyToManyField('articles.Article', related_name="articles", blank=True)
        videos = models.ManyToManyField('videos.Video', related_name="videos", blank=True)
        recipes = models.ManyToManyField('recipes.Recipe', related_name="recipes", blank=True)
        
**Recipe Model:**

    from django.db import models


    class Recipe(models.Model):
        HIGH_PROTEIN = 'High Protein'
        LOW_CARBS = 'Low Carbs'
        VEGAN = 'Vegan'
        VEGETARIAN = 'Vegetarian'
        BREAKFAST = 'Breakfast'
        LUNCH = 'Lunch'
        SNACKS = 'Snacks'
        DINNER = 'Dinner'
        DESSERTS = 'Desserts'
        CATEGORY_CHOICES = [
            (HIGH_PROTEIN, 'High Protein'),
            (LOW_CARBS, 'Low Carbs'),
            (VEGAN, 'Vegan'),
            (VEGETARIAN, 'Vegetarian'),
            (BREAKFAST, 'Breakfast'),
            (LUNCH, 'Lunch'),
            (SNACKS, 'Snacks'),
            (DINNER, 'Dinner'),
            (DESSERTS, 'Desserts')
        ]
        LESS_THAN_20_MINS = 'Less than 20 mins'
        LESS_THAN_40_MINS = 'Less than 40 mins'
        UP_TO_AN_HOUR = 'Up to an hour'
        TIME_CHOICES = [
          (LESS_THAN_20_MINS, 'Less than 20 mins'),
          (LESS_THAN_40_MINS, 'Less than 40 mins'),
          (UP_TO_AN_HOUR, 'Up to an hour')
        ]


        name = models.CharField(max_length=100)
        text = models.TextField(max_length=10000)
        ingredients = models.TextField(max_length=1000)
        image = models.CharField(max_length=500)
        category = models.CharField(max_length=50, choices=CATEGORY_CHOICES, default=VEGAN)
        time = models.CharField(max_length=50, choices=TIME_CHOICES, default=LESS_THAN_20_MINS)
        created_at = models.DateTimeField(auto_now_add=True)
        owner = models.ForeignKey(
          "jwt_auth.User",
          related_name ='recipe',
          on_delete= models.CASCADE
        )
        like = models.ManyToManyField('jwt_auth.User', related_name="liked_recipe", blank=True)

        def __str__(self):
            return f"{self.name}, {self.category}, {self.time}"
            
We tested these routes in Insomnia by registering and then logging in the users. Once we knew these routes were working, we moved onto creating the models, serializers and CRUD requests for the articles, videos, recipes and comments.

![Screenshot 2021-05-06 at 16 59 01](https://user-images.githubusercontent.com/77445688/117329329-736b5300-ae8c-11eb-9df5-7b433e0cc648.png)

We managed to create all the basics of our backend and seed some data within two days, this allowed us to create the front end together and ensure that the API requests were rendering in the components.

We created the front end by running ```npx create-react-app client --template cra-template-ga-ldn-projects``` in the terminal as well as adding ```yarn add http-proxy-middleware``` for the middleware. Once we could see that the axios requests were working on the front end, we divided the front end components to complete individually. I took the main page and the artcile page.

### Day Four and Five - Frontend

I first started by creating a component for the main page, which would render an index of all the media material available for the user to read/watch. This meant creating axios requests for all three media types and mapping around the useState within the JSX section.

A seperate card component was created to format each of the articles, videos and recipes in the index view and then passed into the main page. Bootstrap dropdown filter options were implemented and I added functionality to them by using filter methods to each array for the axios request in the main component.

<img width="1437" alt="Screenshot 2021-05-07 at 14 27 19" src="https://user-images.githubusercontent.com/77445688/117456691-614aec80-af40-11eb-8264-b33147ebb489.png">


    const Main = () => {

      const [article, setArticle] = useState(null)

      const [value, setValue] = useState('')

        useEffect(() => {
        const getData = async () => {
          const response = await axios.get('/api/articles/')
          const health = response.data.filter(item => {
            return (item.category === 'Health')
          })
          const fitness = response.data.filter(item => {
            return (item.category === 'Fitness')
          })
          const food = response.data.filter(item => {
            return (item.category === 'Food')
          })
          if (value === 'Health') {
            setArticle(health) 
          } else if (value === 'Fitness') {
            setArticle(fitness)
          } else if (value === 'Food') {
            setArticle(food)
          } else {
            setArticle(response.data)
          }

The card component also had a link to each article/video/recipe. So when you click anywhere on the card, you will be taken to a seperate page where you can see a pull page view of the full content.

I then started on the Article Show page. I used the Bootstrap 'Jumbotron' component to render each section of the article. I soon realised that based on the way I had created the article model, the format on the front end was not user friendly as all of the text was rendered in one field. If I had subsections to my article they were not displaying in a structured way as intended. I then had to modify my article model to look like the below:


        name = models.CharField(max_length=300)
        image = models.JSONField(max_length=2500)
        text = models.TextField(max_length=8000)
        author = models.CharField(max_length=50)
        created_at = models.DateTimeField(auto_now_add=True)
        owner = models.ForeignKey(
          "jwt_auth.User",
          related_name ='articles',
          on_delete= models.CASCADE
        )
        like = models.ManyToManyField('jwt_auth.User', related_name="liked_article", blank=True)
        text_two = models.TextField(max_length=8000, null=True, blank=True)
        text_three = models.TextField(max_length=8000, null=True, blank=True)
        text_four = models.TextField(max_length=8000, null=True, blank=True)
        text_five = models.TextField(max_length=8000, null=True, blank=True)
        text_six = models.TextField(max_length=8000, null=True, blank=True)
        category = models.CharField(max_length=50, choices=CATEGORY_CHOICES, default=HEALTH)

By adding five additional text fields, I was able to split my main article into chunks where I could then render the relevant images alongside.

https://user-images.githubusercontent.com/77445688/117464718-d8847e80-af48-11eb-904c-8daa19e21d30.mov


### Day Six and Seven - Adding remainig MVP Functionality

The next two days were spent merging mine and my coding partners work from the weekend and then moving onto two key features which was to allow the user to like a post, the second was to create the user profile page so that the user can save a post to their profile.

I started out by creating the User Profile component, which required an axios get request for the user id. At the time in the User app within the views.py file we only had a post request for register and login defined, in order for the profile page to render any information about that user we would need to add a function for a GET request by user id. 

Before we could request a get request we needed a component that would hold the users token from local storage and split the token so we could access the sub section which relates to the users id. 

    export const getTokenFromLocalStorage = () => {
      return window.localStorage.getItem('token')
    }


    export const getPayLoadFromToken = () => {
      const token = getTokenFromLocalStorage()
      if ( !token ) return false 
      const parts = token.split('.')
      if ( parts.length < 3 ) return false 
      return JSON.parse(atob(parts[1]))
    }

    export const userIsOwner = userId => {
      const payload = getPayLoadFromToken()
      if ( !payload ) return false
      return userId === payload.sub
    }

    export const userIsAuthenticated = () => {
      const payload = getPayLoadFromToken()
      if ( !payload ) return false
      const now = Math.round(Date.now() / 1000)
      return now < payload.exp
    }
    
Now that we had all the functionality needed, we imported ```import { getPayLoadFromToken } from './helpers/Auth'``` and assigned the sub section of the token to the const userId which we passed into the axios GET request. The styling for the main page was used for the profile page, with the user's info displayed on the menu bar on the left of the page, and the empty cards on the right ready for the user to save their posts.

<img width="1439" alt="Screenshot 2021-05-09 at 17 48 22" src="https://user-images.githubusercontent.com/77445688/117580204-c6444500-b0ee-11eb-963d-0cd38f07c414.png">

The next stage was to add the functionality for the user to save their posts. This required us to add more functionality to the user model, currently all we had was a post request for login, register, get request for user id. We needed to add a put request in the backend under views.py for the User model. I started coding this request, not really knowing as much around put requests. My instinct was that it was too long, I did search the internet for solutions but couldn;t come to one, so I worked with the Teaching assistants to refactor the code: 

**Before:**

    def put(self, request, pk):
            user_to_edit = self.get_user(pk=request.user.id)
            article_to_add = Article.objects.get(pk=pk)
            updated_article = PopulatedArticleSerializer(article_to_add, data=request.data)   # here I am trying to add the data body to the request
            user_to_edit.article.add(updated_article)
            user_to_edit.save()
            serializer_user = PopulatedUserSerializer(user_to_edit)
            return Response(serializer_user.data, status=status.HTTP_200_OK)
            
**After:**

    def put(self, request, pk):
        user = self.get_user(pk=request.user.id)
        article_to_add = Article.objects.get(pk=pk)
        user.article.add(article_to_add)
        user.save()
        serializer_user = PopulatedUserSerializer(user)
        return Response(serializer_user.data, status=status.HTTP_200_OK)
        
We then went on to define the URL for this path and test the URL in Insomnia. The request worked however only the article id was being passed into the array not the entire Article. We later learned that naming conventions mean everything as our populated user serializer was showing the below: 

    class PopulatedUserSerializer(UserSerializer):
        articles = PopulatedArticleSerializer(many=True)
        
When the field in the model was defined as below:  

    class User(AbstractUser):
        article = models.ManyToManyField('articles.Article', related_name="articles", blank=True)
        
So the ```PopulatedUserSerializer``` was updated to article not articles. This then meant that the whole content of the article was pushed into the array instead of just the id.

On the front end we then went to the ArticleShow page and created an axios PUT request to the user url, but passed in the id of the article that was being clicked, as well the token of the user. The console.log for the 'click' shows the id of the article, and the last console.log shows that the article has been added to the article array under the User model.

      const handleClick = async (event) => {
        console.log('click>>>>',event.target.value)
        setSaved('Saved to Profile')
        console.log(event)
        const token = window.localStorage.getItem('token')
        console.log('token>>>>>', token)
        await axios.put(`/api/auth/${article.id}/savedplaces/`, null, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        console.log('Article Saved!!')
      }
      
https://media.giphy.com/media/H3gknfG9zhIvSXgnjV/giphy.gif

### Day Eight and Nine

The final few days were spent smartening up the styling of the site, and attempting a few last features. Our intention was for this app to have a social feed, however due to time constraints it was looking very unlikely. The feature we settled on as a workaround was to created the a page where all the users in the database are shown. The user can then click to the follow them and when you go back to your profile, it will show how many people you are following. 

By doing this, we at least have the foundation to create the feed in the future as we have the like and friends fields that we can render. The only issue was that the user id was being passed into the friends array rather than the user content, which was why we had to settle for only displaying the amount of people rather than the actual users which is what we would have preferred. 


https://user-images.githubusercontent.com/77445688/117583535-876abb00-b0ff-11eb-93ee-d157d0cd5d5c.mov


## Bugs
- The save to profile feature for video and recipes are not pushing the id of that post to the correct array. I thought this might be down to the naming convention, so I changes the name of the model field as well as in the PopulatedUserSerialzier, however this did not fix the bug.  This means that user can click on the button however it will not save thier profile.
- Currently you can only show one saved article based on the conditional render that has been coded.
- The search for a user function allows an input but does not render the name of the search, there is more refining to do on the code. 
- The image upload on the registration page takes the upload but the functionality for the saving it to the profile is yet to be added.

## Challenges

The save to user profile feauture was the biggest challenge, it took me and coding partner a whole day and a half to crack, and in the end we had to ask for help as we had exhausted all the recources we could find. I the win from this was that my code initially and my logic was not far off the solution which gave me confidence that I was on the right track.
