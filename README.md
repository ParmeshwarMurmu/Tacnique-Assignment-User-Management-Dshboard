# User Management Dashboard

## Introduction
It is a dynamic and visually engaging web application designed for users where users can view, add, edit, and delete user details from a mock backend API.

## Deployed App

Frontend:- https://tacnique-assignment-user-management-dshboard.vercel.app/

backend:- https://userdashbord.onrender.com


## Table of Contents

- [Installation & Getting Started](#installation--getting-started)
- [Usage](#usage)
- [Responsive](#responsive)
- [API Endpoints](#api-endpoints)
- [Technology Used](#technology-used)

## Directory Structure

- **Tacnique-Assignment-User-Management-Dshboard/**
   -**user-management-dashboard/**  
   - **public/**
   - **src/**
      - **Components/**
      - **Constants/**
      - **CSS/**
      - **Redux/**
      - **Routes/**
      - **Routes/**
      - index.js
      - App.js

## Features

- ✅ Add Users
- ✅ Edit User Details
- ✅ Delete User
- ✅ Validation
- ✅ Responsive
- ✅ Pagination


## Installation & Getting Started
Detailed instructions on how to install, configure, and get the project running.


Step 1. Clone this Repository using Command
```bash
git clone Repository Url
```

Step 2. Install all the necessary dependencies


```bash
cd user-management-dashboard
npm install
```
this will install all the necessary dependencies on your Project.

Step 3. Start your Application. Open the terminal and write the below commands
```bash
cd user-management-dashboard
npm start

```
this will start your application.


## Usage
Below are some instructions and examples on how to use this project.

## Dashboard Section

As Soon you will start your project You will see the dashboard section where user can see all the users details and at the left corner there is a section where you can add a user by filling up all the credentials.

![Dshboard Seaction](https://github.com/ParmeshwarMurmu/Tacnique-Assignment-User-Management-Dshboard/assets/121368970/26854bd3-fc72-448c-b9f7-c1ca9366a77e)

## Add User

To add a user you need to fill in all the credentials that are there in the form.

***NOTE** Initially the button to add a user is disabled because all the input fields are validated. So to add a user you are required to fill all the fields in the form.

![Add User](https://github.com/ParmeshwarMurmu/Tacnique-Assignment-User-Management-Dshboard/assets/121368970/9204a0ce-11ba-425d-80d0-20030b165156)

After filling in all the credentials the Add User button will be enabled and clicking user credentials will be saved and the user will see a successful alert notification with a message that the user added successfully. 

And the user will see  the details of that user in the dashboard section with all the credentials.

![User Added Successfully](https://github.com/ParmeshwarMurmu/Tacnique-Assignment-User-Management-Dshboard/assets/121368970/19a8a500-0be2-47ff-bf82-550b459b70e7)

## Editing Details Of a User

Users can also edit their existing details except for the ID. To edit the existing details user can see an Edit button on the user Profile.

NOTE*** All the fields will be disabled by default. To edit any field user needs to click on the edit icon button.

On clicking the edit button an edit modal will open where the user sees all the details filled by default and to edit any field user will see an edit icon on clicking user will be able to edit that field.
Clicking on the save details button user will able to see the edited details on the dashboard section.

Note*** Before saving user needs to click on the check icon to save any edited form fields

![Edit Details](https://github.com/ParmeshwarMurmu/Tacnique-Assignment-User-Management-Dshboard/assets/121368970/9cdc365c-d7fd-4ab7-90fb-7d3929d11a85)


After a Successful edit user will see the edited data on the dashboard section.


![Edit Last Name](https://github.com/ParmeshwarMurmu/Tacnique-Assignment-User-Management-Dshboard/assets/121368970/893ff0eb-8f46-4099-b2e2-2e9eeb02fc40)

## Delete User Details

To delete any particular detail user can see a delete button on the profile section. On clicking delete modal will open with a Confirmation message and if user want to delete can proceed and after successfull deletion user will see a alert with successfully deletion message.

![Delete Confirmation](https://github.com/ParmeshwarMurmu/Tacnique-Assignment-User-Management-Dshboard/assets/121368970/b7d701a8-65d6-4246-82a8-77f8bf7f8d5c)

![Delete Confirmation Message](https://github.com/ParmeshwarMurmu/Tacnique-Assignment-User-Management-Dshboard/assets/121368970/645db52c-fb54-45cb-acf5-2086293203da)

## Responsive

1. Small Screen Sizes

![Small Screen Devices](https://github.com/ParmeshwarMurmu/Tacnique-Assignment-User-Management-Dshboard/assets/121368970/7466fca3-ff84-4e19-83a8-ddd5b2c40c79)

2. Medium Screen Sizes

![Medium Screen Sizes](https://github.com/ParmeshwarMurmu/Tacnique-Assignment-User-Management-Dshboard/assets/121368970/03bd1b99-69c2-4547-9c79-ec471e8d6876)

3. Large Screen Sizes

![Large Screen Sizes](https://github.com/ParmeshwarMurmu/Tacnique-Assignment-User-Management-Dshboard/assets/121368970/a3fa7651-60b1-404d-97f5-09772b598de6)




## API Endpoints

List of your API endpoints, methods, brief descriptions, and examples of request/response.

- POST /users - To Add a User

Example :- 

Request

```bash
axios.post(`${APP_URL}/users`, userData)
    .then((res)=>{
       console.log(res);
    })
    .catch((err)=>{
      console.log(err);
    })

```

Response
```bash
{ 
   "message": "User Added Successfull." 
}

```

- GET /users - To Get All Data Of Users Details

Example :- 

Request

```bash
 axios.get(`${APP_URL}/users`)
    .then((res)=>{
        console.log(res.data);
    })
    .catch((err)=>{
        console.log(err);
      
    })

```

Response
```bash
{ 
   data: [
     {
      id: 1,
      firstName: "John",
      lastName:"Doe",
      email: "john@gmail.com",
      department: "HR Department"
    },
    {
      id: 2,
      firstName: "Marco",
      lastName:"Arom",
      email: "aron@gmail.com",
      department: "Finance Department"
    },
    {
      id: 3,
      firstName: "Adelina",
      lastName:"Ethan",
      email: "adelinaEthan@gmail.com",
      department: "Sales Department"
    }
    ]
}

```

- PATCH /users/${id} - To Edit User Details

Example :- 

Request

```bash
axios.patch(`${APP_URL}/users/${id}`, updateInfo)
    .then((res)=>{
      console.log(res);
    })
    .catch((err)=>{
      console.log(err);
    })

```

Response
```bash
{ 
   "message": "Edited Successfully." 
}

```

- DELETE /users/${id} - To Delete User Details

Example :- 

Request

```bash
axios.delete(`${APP_URL}/users/${id}`)
    .then((res)=>{
      console.log(res);
    })
    .catch((err)=>{
      console.log(err);
    })

```

Response
```bash
{ 
   "message": "Deleted Successfull." 
}

```





## Technology Used

List and overview of the technologies used in the project.

**frontend**
- React
- Redux
- Chakra UI

**backend**
- Json Server




