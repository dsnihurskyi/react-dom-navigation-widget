# react-dom-navigator

This library is a React Typescript module that provides a visual dom tree nodes widget in a window over the page.


## How to install:
npm install react-dom-navigator

## How to include
### Step1: Import JavaScript modules
```javascript
import { EmbedDomWidget } from 'react-dom-navigator';
```
## To use
Simply add widget component inside your app
 
Example:
```javascript
    <App>
      {/* Your main app content */}
      <h1>Welcome to My Website</h1>
      <p style={{ width: 'max-content'}}>This is a sample paragraph.</p>
      {/* ...other content... */}
      
      <EmbedDomWidget />
    </App>
```  
You can use EmbedDomWidget with **isDefaultVisible** prop if you want to control it's initial appearing state

Example:
```javascript
    <App>
      {/* Your main app content */}
      
      <EmbedDomWidget isDefaultVisible />
    </App>
```  
