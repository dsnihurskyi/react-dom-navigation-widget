import React from 'react';
import ReactDOM from 'react-dom';
import EmbedWidget from './src/EmbedDomWidget';

export const init = ({ isDefaultVisible }: { isDefaultVisible?: boolean}) => {
  ReactDOM.render(
    <React.StrictMode>
      <EmbedWidget isDefaultVisible={Boolean(isDefaultVisible)} />
    </React.StrictMode>,
    document.body
  );
}
