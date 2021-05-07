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

I first started by creating a component for the main page, which would render an index of all the media material available for the user to read/watch. This meant creating axious requests for all three media types and mapping around the useState within the JSX section.

A seperate card component was created to format each of the articles, videos and recipes in the index view and then passed into the main page. Bootstrap dropdown filter options were implemented and I added functionality to them by using filter methods to each array for the axios request in the main component.

<img width="1437" alt="Screenshot 2021-05-07 at 14 27 19" src="https://user-images.githubusercontent.com/77445688/117456691-614aec80-af40-11eb-8264-b33147ebb489.png">


