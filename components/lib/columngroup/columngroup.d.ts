/**
 *
 * Columns can be grouped at header and footer sections by defining a ColumnGroup component.
 * It is a helper component for DataTable.
 *
 * [Live Demo](https://www.primefaces.org/primereact/datatable/)
 *
 * @module columngroup
 *
 */
import * as React from 'react';

/**
 * Defines valid properties in ColumnGroup component.
 * @group Properties
 */
// tslint:disable-next-line:no-empty-interface
export interface ColumnGroupProps {
    /**
     * Used to get the child elements of the component.
     * @readonly
     */
    children?: React.ReactNode | undefined;
}

/**
 * @group Component
 */
export declare class ColumnGroup extends React.Component<ColumnGroupProps, any> {}
