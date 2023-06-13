import React, { FC, MouseEvent, useEffect, useState } from 'react';
import { DomTreeListProps } from './types';

import 'bootstrap/dist/css/bootstrap.css';
import './index.css';


const DomTreeList: FC<DomTreeListProps> = ({ widgetRef, domTree }) => {
  const [selectedNode, setSelectedNode] = useState<HTMLElement | null>(null);

  const handleNodeClick = (event: MouseEvent<HTMLElement>, node: HTMLElement) => {
    event.stopPropagation();
    node.scrollIntoView({ behavior: 'smooth', block: 'center' });

    setSelectedNode(node);
  };

  useEffect(() => {
    const resizeListener = () => setSelectedNode(null);

    window.addEventListener('resize', resizeListener);

    return () => {
      window.removeEventListener('resize', resizeListener);
    }
  }, [])

  useEffect(() => {
    if (!selectedNode) return;

    const { top, left, width, height } = selectedNode.getBoundingClientRect();

    const newOverlayElement = document.createElement('div');
    newOverlayElement.setAttribute('data-embed-widget-highlight', 'true');
    newOverlayElement.style.top = `${top + window.scrollY}px`;
    newOverlayElement.style.left = `${left + window.scrollX}px`;
    newOverlayElement.style.width = `${width}px`;
    newOverlayElement.style.height = `${height}px`;
    
    document.body.appendChild(newOverlayElement);

    return () => {
      if (newOverlayElement) {
        document.body.removeChild(newOverlayElement);
      }
    };
  }, [selectedNode]);

  const renderTree = (
    node: HTMLElement,
    onClick: (event: MouseEvent<HTMLElement>, node: HTMLElement) => void
  ) => {
    if (node === widgetRef.current) {
      return null;
    }

    const isNonInteractiveNode = (
      node.tagName.toLowerCase() === 'head'
      || node.tagName.toLowerCase() === 'meta'
      || node.tagName.toLowerCase() === 'title'
      || node.tagName.toLowerCase() === 'link'
      || node.tagName.toLowerCase() === 'style'
      || node.tagName.toLowerCase() === 'script'
      || node.tagName.toLowerCase() === 'noscript'
    );

    return (
      <ul className='dom-tree-list'>
        <li className='dom-tree-list__item'>
          <button
            onClick={(event) => onClick(event, node)}
            className={`btn btn-${selectedNode === node ? 'primary' : 'link'} btn-sm`}
            disabled={isNonInteractiveNode}
          >
            {node.tagName.toUpperCase()}
          </button>

          {(node.children.length > 0 && !isNonInteractiveNode) && (
            Array.from(node.children).map((child, idx) => (
                <React.Fragment key={idx}>
                  {renderTree(child as HTMLElement, onClick)}
                </React.Fragment>
              ))
          )}
        </li>
      </ul>
    );
  };

  return (
    <div className='dom-tree-list-wrapper'>
      {renderTree(domTree, handleNodeClick)}
    </div>
  );
};

export default DomTreeList;
