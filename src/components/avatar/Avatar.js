import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { classNames } from '../utils/ClassNames';
import ObjectUtils from '../utils/ObjectUtils';

export class Avatar extends Component {

    static defaultProps = {
        label: null,
        icon: null,
        image: null,
        size: 'normal',
        shape: 'square',
        style: null,
        className: null,
        template: null
    }

    static propTypes = {
        label: PropTypes.string,
        icon: PropTypes.string,
        image: PropTypes.string,
        size: PropTypes.string,
        shape: PropTypes.string,
        style: PropTypes.object,
        className: PropTypes.string,
        template: PropTypes.any
    };

    renderContent() {
        if (this.props.label) {
            return <span className="p-avatar-text">{this.props.label}</span>;
        }
        else if (this.props.icon) {
            const iconClassName = classNames('p-avatar-icon', this.props.icon);
            return <span className={iconClassName}></span>;
        }
        else if (this.props.image) {
            return <img src={this.props.image} alt="avatar"></img>
        }

        return null;
    }

    render() {
        const containerClassName = classNames('p-avatar p-component', {
            'p-avatar-image': this.props.image != null,
            'p-avatar-circle': this.props.shape === 'circle',
            'p-avatar-lg': this.props.size === 'large',
            'p-avatar-xl': this.props.size === 'xlarge'
        }, this.props.className);

        const content = this.props.template ? ObjectUtils.getJSXElement(this.props.template, this.props) : this.renderContent();

        return (
            <div className={containerClassName} style={this.props.style}>
                {content}
                {this.props.children}
            </div>
        );
    }
}
