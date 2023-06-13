import React from 'react';
export interface EmbedWidgetProps {
    isDefaultVisible?: boolean;
}
export interface DomTreeToastProps {
    toastRef: React.RefObject<HTMLDivElement>;
    toggleToast: () => void;
    children: React.ReactNode[];
}
export interface DomTreeListProps {
    widgetRef: React.RefObject<HTMLDivElement>;
    domTree: HTMLElement;
}
