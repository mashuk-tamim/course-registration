

# Online Course Registration Website


## Features

- Course Enrollment
- Live previews
- Responsive Design

## State Management

In the `App` component named `App.jsx`, state is managed using the `useState` hook from React. State management is a crucial aspect of React applications, allowing you to store and manage data that can change over time and trigger re-renders of your components when the state is updated.

Here's how state management works in this code:

1. Import `useState` from 'react' at the beginning of the file.

2. Declare state variables and their initial values using the `useState` hook:

- `selectedCourses`: This state variable holds an array of selected course objects. It's initialized as an empty array.

- `creditTotal`: This state variable holds the total number of credit hours for the selected courses. It's initialized with a value of 0.

- `priceTotal`: This state variable holds the total price for the selected courses. It's also initialized with a value of 0.

3. Inside the `handleSelect` function, state updates occur:

- When a course is selected, the code checks if it's already in the `selectedCourses` array.
- If it's not already selected (`isCourseSelected` is false), it calculates the new state values:
    - `newSelectedCourses`: A new array that includes the selected course is created.
    - `newCreditTotal`: The credit total is updated by adding the selected course's credit value.
    - `newPriceTotal`: The price total is updated by adding the selected course's price.
4. The code checks if the `newCreditTotal` is within a limit (20 credit hours). If it is, the state variables are updated with the new values using the `setSelectedCourses`, `setCreditTotal`, and `setPriceTotal` functions provided by `useState`.

5. If the credit limit is exceeded, a toast message is displayed to inform the user.

In summary, the `useState` hook is used to manage and update the state of the `selectedCourses`, `creditTotal`, and `priceTotal` variables in response to user actions, such as selecting courses. When the state is updated, React re-renders the component to reflect the updated data in the UI.



## Authors

- [@mashuk_tamim](https://github.com/mashuk-tamim)


## Live Link

[Surge](http://courseregistrationbymashuk.surge.sh/):
http://courseregistrationbymashuk.surge.sh/


## Tech Stack

React, TailwindCSS, HTML


## Screenshots

![App Screenshot 1](https://i.ibb.co/gMM8kR9/Screenshot-122.png)
![App Screenshot 2](https://i.ibb.co/znZMQ2b/Screenshot-124.png)


## Acknowledgements
-  [Vite](https://vitejs.dev/)
-  [React Documentation](https://react.dev/)
-  [React-toastify](https://www.npmjs.com/package/react-toastify)
-  [readme.so](https://readme.so/editor/)
-  [ChatGPT](https://chat.openai.com/)


