import React, { FC, MouseEvent, useEffect, useState } from 'react';
import { DomTreeListProps } from './types';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';


const DomTreeList: FC<DomTreeListProps> = ({ widgetRef, domTree }) => {
  const [selectedNode, setSelectedNode] = useState<HTMLElement | null>(null);

  useEffect(() => {
    return () => selectedNode?.removeAttribute('data-embed-widget-highlight');
  }, [selectedNode])

  const handleNodeClick = (event: MouseEvent<HTMLElement>, node: HTMLElement) => {
    event.stopPropagation();

    if (selectedNode) {
      selectedNode.removeAttribute('data-embed-widget-highlight');
    }

    node.setAttribute('data-embed-widget-highlight', 'true');
    node.scrollIntoView({ behavior: 'smooth', block: 'center' });
    
    setSelectedNode(node);
  };

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
            className='btn btn-link btn-sm'
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
