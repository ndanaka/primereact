import { DocComponent } from '../../components/doc/common/doccomponent';
import { AccessibilityDoc } from '../../components/doc/slidemenu/accessibilitydoc';
import { BasicDoc } from '../../components/doc/slidemenu/basicdoc';
import { ImportDoc } from '../../components/doc/slidemenu/importdoc';
import { PopupDoc } from '../../components/doc/slidemenu/popupdoc';
import { StyleDoc } from '../../components/doc/slidemenu/styledoc';

const SlideMenuDemo = () => {
    const docs = [
        {
            id: 'import',
            label: 'Import',
            component: ImportDoc
        },
        {
            id: 'basic',
            label: 'Basic',
            component: BasicDoc
        },
        {
            id: 'popup',
            label: 'Popup',
            component: PopupDoc
        },
        {
            id: 'style',
            label: 'Style',
            component: StyleDoc
        },
        {
            id: 'accessibility',
            label: 'Accessibility',
            component: AccessibilityDoc
        }
    ];

    return <DocComponent title="React SlideMenu Component" header="SlideMenu" description="SlideMenu displays submenus with a slide animation." componentDocs={docs} apiDocs={[{ name: 'Slide Menu', pathname: '/modules/slidemenu.html' }]} />;
};

export default SlideMenuDemo;
