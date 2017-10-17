import React = require("react");

interface DialogProps {
    id?: string;
    header?: any;
    footer?: any;
    visible?: boolean;
    width?: string;
    height?: string;
    modal?: boolean;
    onHide(): void
    onShow?(): void;
    draggable?: boolean;
    resizable?: boolean;
    minWidth?: number;
    minHeight?: number;
    contentStyle?: object;
    closeOnEscape?: boolean;
    dismissableMask?: boolean;
    rtl?: boolean;
    closable?: boolean;
    responsive?: boolean;
    breakpoint?: number;
    style?: string;
    className?: string;
    showHeader?: boolean;
    positionLeft?: number;
    positionTop?: number;
}

export class Dialog extends React.Component<DialogProps,any> {}