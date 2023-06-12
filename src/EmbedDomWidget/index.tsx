import React, { useRef, useState } from 'react';
import { Toast } from 'bootstrap';
import { EmbedWidgetProps } from './types';
import DomTreeList from './DomTreeList';
import DomTreeToast from './DomTreeToast';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';


const EmbedWidget: React.FC<EmbedWidgetProps> = ({ isVisible }) => {
  const widgetRef = useRef<HTMLDivElement>(null);
  const toastRef = useRef<HTMLDivElement>(null);
  const [isWidgetVisible, setIsWidgetVisible] = useState(isVisible);
  const [domTree, setDomTree] = useState<HTMLElement | null>(null);

  const toggleToast = () => {
    if (toastRef?.current) {
      const toastInstance = Toast.getOrCreateInstance(toastRef.current);

      isWidgetVisible
        ? toastInstance.hide()
        : toastInstance.show()
    }

    setIsWidgetVisible(!isWidgetVisible);
  };

  const toggleParsedDOM = () => {
    const root = document.documentElement;

    setDomTree(domTree ? null : root);
  };

  return (
    <div ref={widgetRef} className={`embed-widget`}>
      {!isWidgetVisible && (
        <button
          type='button'
          className='btn btn-light embed-widget-button'
          onClick={toggleToast}
        >
          🛠 Show DOM tree navigation widget
        </button>
      )}

      <DomTreeToast toastRef={toastRef} toggleToast={toggleToast}>
        <button
          onClick={toggleParsedDOM}
          className={`btn btn-${domTree ? 'warning' : 'primary'} mb-2`}
        >
          {domTree ? 'Clear' : 'Parse DOM'}
        </button>
        {domTree && widgetRef && isWidgetVisible && (
          <DomTreeList widgetRef={widgetRef} domTree={domTree} />
        )}
      </DomTreeToast>
    </div>
  );
};

export default EmbedWidget;
