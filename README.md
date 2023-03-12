# SportSee 

Projet 12 - Développez un tableau de bord d'analytics avec React

## How to install ? 

### Installing and lauching Back-End files 

Clone the repository of SportSee Back-End:
```bash
git clone 
``` 
When opening the back-end repository :
```bash
npm install
```
Launch back-end on port 3000 :
```bash
npm run start
```
## Available Endpoints

This project contains four endpoints available for you to use.

- http://localhost:3000/user/${userId} - fetches all informations about a user : user id, user information (first name, last name and age), day's score (todayScore) and key data (calorie, macronutrient, etc.).
- http://localhost:3000/user/${userId}/activity - fetches a user's activity day by day with kilograms and calories.
- http://localhost:3000/user/${userId}/average-sessions - fetches the average sessions of a user per day : day 1 : Monday. 
- http://localhost:3000/user/${userId}/performance - fetches a user's performance (energy, endurance, etc.).

For the moment, only users 18 and 12 are mocked. 

Examples of queries that are available to use with these two id numbers : 

- http://localhost:3000/user/12/performance - Retrieves the performance of the user with id 12
- http://localhost:3000/user/18 - Retrieves user 18's main information.
