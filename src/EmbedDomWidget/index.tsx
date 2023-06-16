import React, { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import { Toast } from 'bootstrap';
import { type EmbedWidgetProps } from './types';
import DomTreeList from './DomTreeList';
import DomTreeToast from './DomTreeToast';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

const EmbedWidget: React.FC<EmbedWidgetProps> = ({ isDefaultVisible }) => {
  const widgetRef = useRef<HTMLDivElement>(null);
  const toastRef = useRef<HTMLDivElement>(null);
  const [isWidgetVisible, setIsWidgetVisible] = useState<boolean>(
    Boolean(isDefaultVisible),
  );
  const [domTree, setDomTree] = useState<HTMLElement | null>(null);

  const handleSetToastVisibility = (visibilityValue: boolean): void => {
    if ((toastRef?.current) !== null) {
      const toastInstance = Toast.getOrCreateInstance(toastRef.current);

      visibilityValue
        ? toastInstance.show()
        : toastInstance.hide();
      setIsWidgetVisible(visibilityValue);
    }
  };

  useEffect(() => {
    handleSetToastVisibility(Boolean(isDefaultVisible));
  }, [isDefaultVisible]);

  const toggleToast = (): void => {
    handleSetToastVisibility(!isWidgetVisible);
  };

  const toggleParsedDOM = (): void => {
    const root = document.documentElement;

    setDomTree((domTree !== null) ? null : root);
  };

  return ReactDOM.createPortal(
    (
      <div ref={widgetRef} className={'embed-widget'}>
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
            className={`btn btn-${(domTree !== null) ? 'warning' : 'primary'} mb-2`}
          >
            {(domTree !== null) ? 'Clear' : 'Parse DOM'}
          </button>
          {(domTree != null) && Boolean(widgetRef) && isWidgetVisible && (
            <DomTreeList widgetRef={widgetRef} domTree={domTree} />
          )}
        </DomTreeToast>
      </div>
    ),
    document.body,
  );
};

export default EmbedWidget;
