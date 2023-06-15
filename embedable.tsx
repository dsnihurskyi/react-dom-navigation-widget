import React from 'react';
import ReactDOM from 'react-dom';
import EmbedWidget from './src/EmbedDomWidget';

export const init = ({ isDefaultVisible }: { isDefaultVisible: boolean}) => {
  const root = document.createElement('div');
  root.id = 'embed-widget-root';
  document.body.appendChild(root);

  ReactDOM.render(
    <React.StrictMode>
      <EmbedWidget isDefaultVisible={isDefaultVisible} />
    </React.StrictMode>,
    document.getElementById('embed-widget-root')
  );
}
