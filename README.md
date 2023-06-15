# react-dom-navigator

This library is a React Typescript module that provides a visual dom tree nodes widget in a window over the page.


## How to use:
### If you're using React application
```javascript
npm install react-dom-navigator
```
Example:
```javascript
import { EmbedDomWidget } from 'react-dom-navigator';

 <App>
   {/* Your main app content */}
   
   <EmbedDomWidget isDefaultVisible />
 </App>
```  
### Or embed the widget by adding the following scripts to your HTML
```javascript
<script src="https://react-dom-navigator.vercel.app/react-dom-navigator.js"></script>
<script>
  ReactDomNavigator.init({ isDefaultVisible: true });
</script>
```
