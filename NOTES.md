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

```
Quick Reference for Styles.js in Following Lecture
const theme = 'dark';
//const theme = 'light';
export const lightTheme = theme === 'light';

export const color = lightTheme ? 'white' : '#061a44';
export const color2 = lightTheme ? 'white' : '#010e2c';
export const color3 = lightTheme ? '#09f010' : '#42ff3a';

if (lightTheme) {
  document.body.style.background = '#e1eaee';
  document.body.style.color = '#061a44';
}

export const lightBlueBackground = `background-color: ${color}`;
export const backgroundColor2 = `background-color: ${color2};`;
export const greenBackgroundColor = `background-color: ${color3};`;

export const fontColorGreen = `color: #03A9F4`;
export const fontColorWhite = `color: white`;
export const subtleBoxShadow = `box-shadow: 0px 0px 5px 1px ${lightTheme ? '#a9b6ff' : '#121d5b'}`;
export const greenBoxShadow = `box-shadow: 0px 0px 4px 2px #5fff17`;
export const redBoxShadow = `box-shadow: 0px 0px 2px 2px #e41111`;

export const fontSizeBig = 'font-size: 2em';
export const fontSize1 = 'font-size: 1.5em;';
export const fontSize2 = 'font-size: 1.0em';
export const fontSize3 = 'font-size: .75em';

export const textAlignCenter = 'text-align: center;';

```