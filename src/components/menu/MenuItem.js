import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export class MenuItem extends Component{
    static defaultProps = {
        index:null,
        items:null,
        menu:null,
        parentMenu:null,
        root:false,
    };

    static propTypes = {
        index:PropTypes.number,
        items:PropTypes.any,
        menu:PropTypes.any,
        parentMenu:PropTypes.string,
        root:PropTypes.bool
    };

    constructor(props) {
        super(props);
        this.state = {};
        this.item=this.props.items;
        this.menu=this.props.menu
    }

    render() {
        var styleClass=classNames('ui-menuitem-link ui-corner-all',{'ui-state-disabled':this.item.disabled});
        var iconClass=classNames('ui-menuitem-icon fa fa-fw',this.item.icon?this.item.icon:null);
        var rootClass=classNames('ui-submenu-icon fa fa-fw',{' fa-caret-down':this.props.root},{' fa-caret-right':!this.props.root})
        if(this.item.url){
            return (
                <a href={this.item.url || '#'} className={styleClass} target={this.item.target} onClick={event=>this.menu.itemClick(event,this.item)}>
                    {this.item.items && (this.props.parentMenu==='TieredMenu' || this.props.parentMenu==='ContextMenu') && <span className="ui-submenu-icon fa fa-fw fa-caret-right"></span>}
                    {this.item.icon && <span className={iconClass}></span>}
                    <span className="ui-menuitem-text">{this.item.label}</span>
                    {this.item.items && this.props.parentMenu==='Menubar' && <span className={rootClass}></span>}
                </a>
            );
        }
        else{
            return (
                <a className={styleClass} href="#" target={this.item.target} onClick={event=>this.menu.itemClick(event,this.item)}>
                    {this.item.items && (this.props.parentMenu==='TieredMenu' || this.props.parentMenu==='ContextMenu') && <span className="ui-submenu-icon fa fa-fw fa-caret-right"></span>}
                    {this.item.icon && <span className={iconClass}></span>}
                    <span className="ui-menuitem-text">{this.item.label}</span>
                    {this.item.items && this.props.parentMenu==='Menubar' && <span className={rootClass}></span>}
                </a>
            );
        }
    }
}
