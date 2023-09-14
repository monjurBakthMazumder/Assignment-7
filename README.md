Project features
- Here the user can select his preferred course and after selecting the preferred course, he will be able to see his remaining credit and total credit, which will help him to select the next course. Here's his total credit is 20. So, he cannot select Course more than 20 credit and cannot select a course more than once.
- The user, however, after selecting each course, can see his total cost, how much news will be available to do his selected courses. So he will be able to select the courses of his choice according to his budget.
- Here are some very nice reaction toasts that will give him different successful and error messages with every click. For example, when the user selects a course, he will be shown a "successfully added" success toast. But when he tries to select a course more than once or more than once, it will be given an error toast of an "Already added" and if he goes to select an additional course of 20 credit, it will give him an error toast of "your credit remaining 0hr".



How I handled the state in my assignment project....
I use useState to manage data in React applications. In this assignment I use the useState five times in the file "App.jsx" and once in "Courses.jsx". It helps me store data and also use and update it as needed.
Courses.jsx: I used useState once in these components. 
using useEffect, I first fetch and store the data in useState, then map and get my all data from ustState. It helps me load data from the API and show it in display.
App.jsx: I use useState in this component five times. In the meantime, SelectCourse useState helps me store selected courses data and use this later. Credit useState helps me calculate total credit and use it later. Total useState helps me calculate the total amount and use it later. The remaining useState helps me calculate the total remaining and use it later. 
So useState helps me make my job easier.