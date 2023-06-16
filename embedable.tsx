import React from 'react';
import ReactDOM from 'react-dom';
import EmbedWidget from './src/EmbedDomWidget';

export const init = (
  { isDefaultVisible }: { isDefaultVisible?: boolean },
): void => {
  ReactDOM.render(
    <React.StrictMode>
      <EmbedWidget isDefaultVisible={Boolean(isDefaultVisible)} />
    </React.StrictMode>,
    document.body,
  );
};
