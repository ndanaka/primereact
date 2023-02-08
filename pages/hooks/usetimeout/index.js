import { DocComponent } from '../../../components/doc/common/doccomponent';
import { BasicDoc } from '../../../components/doc/hooks/usetimeout/basicdoc';
import { ImportDoc } from '../../../components/doc/hooks/usetimeout/importdoc';

const CounterDemo = () => {
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
        }
    ];

    return <DocComponent title="React useTimeout Hook" header="useTimeout" description="" componentDocs={docs} apiDocs={[{ name: 'useTimeout', pathname: '/functions/hooks.useTimeout.html' }]} />;
};

export default CounterDemo;
