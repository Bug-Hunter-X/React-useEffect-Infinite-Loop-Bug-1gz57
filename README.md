# React useEffect Infinite Loop Bug

This repository demonstrates a common error in React applications where an infinite loop is created within a `useEffect` hook.  The problem arises from updating the state variable within the effect's callback function, causing the effect to run continuously without pausing.

## Bug Description
The `bug.js` file contains a React component that uses `useEffect` to increment a counter state variable.  Because the state update occurs within the `useEffect` callback (and no dependencies are listed), the effect is triggered repeatedly, leading to an infinite loop.

## Solution
The `bugSolution.js` file presents the corrected component. The issue is resolved by ensuring the `useEffect` function updates the state correctly based on external factors that change. The updated code only sets the state during the first render. The `useRef` hook avoids infinite loops by using a variable that doesn't trigger re-rendering when it changes.

## How to Reproduce
1. Clone this repository.
2. Navigate to the directory.
3. Run `npm install` to install the necessary dependencies.
4. Run `npm start` to run the application.
5. Observe the console logs and application behavior to see the effect of the bug.
