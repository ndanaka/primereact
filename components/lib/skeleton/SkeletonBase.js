import { ComponentBase } from '../componentbase/ComponentBase';
import { classNames } from '../utils/Utils';

const classes = {
    root: ({ props }) =>
        classNames('p-skeleton p-component', {
            'p-skeleton-circle': props.shape === 'circle',
            'p-skeleton-none': props.animation === 'none'
        })
};

const styles = `
@layer primereact.core {
    .p-skeleton {
        position: relative;
        overflow: hidden;
    }
    
    .p-skeleton::after {
        content: "";
        animation: p-skeleton-animation 1.2s infinite;
        height: 100%;
        left: 0;
        position: absolute;
        right: 0;
        top: 0;
        transform: translateX(-100%);
        z-index: 1;
    }
    
    .p-skeleton-circle {
        border-radius: 50%;
    }
    
    .p-skeleton-none::after {
        animation: none;
    }
}

@keyframes p-skeleton-animation {
    from {
        transform: translateX(-100%);
    }
    to {
        transform: translateX(100%);
    }
}
`;

const inlineStyles = {
    root: { position: 'relative' }
};

export const SkeletonBase = ComponentBase.extend({
    defaultProps: {
        __TYPE: 'Skeleton',
        shape: 'rectangle',
        size: null,
        width: '100%',
        height: '1rem',
        borderRadius: null,
        animation: 'wave',
        style: null,
        className: null
    },
    css: {
        classes,
        inlineStyles,
        styles
    }
});
