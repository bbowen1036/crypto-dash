## Tech used in app
- React
- CSS grid
- HighCharts
- CryptoCompare API
- Async/Await
- Fuzzy Search
- Lodash
- Webkit Inspector
- Local Storage
- Google Fonts


## Why styled-components
- regular CSS files have not been a great pattern
- the css styles are not closely tied to react components, so they become hard to reference
- * styled components with tagged template literal.
- styled components generate unique class names
- tied to that React Component only
- Dynamic made simple





Hey students,

In the next section, we use localStorage to set and retrieve our favorite coins.

If you run into this error in the following section: TypeError: Cannot read property 'map' of undefined it is because you've tried navigating to the dashboard without any favorites yet. 

Please check out Lecture 36 where we implement a fix by hiding the dashboard link on the firstVisit so that you can't go to the dashboard and experience this bug.