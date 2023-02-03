import React from 'react';
import { DocSectionText } from '../../common/docsectiontext';
import { DocSectionCode } from '../../common/docsectioncode';
import { useMove } from '../../../../components/lib/hooks/Hooks';

export function VerticalDoc(props) {
    const { ref, y } = useMove({ initialValue: { y: 0.2 }, mode: 'vertical' });

    const code = {
        basic: `
const { ref, y } = useMove({ initialValue: { y: 0.2 } });
        `,
        javascript: `
import React from 'react'; 
import {useMove } from 'primereact/hooks';

export default function VerticalDemo() {
    const { ref, y } = useMove({ initialValue: { y: 0.2 } });

    return (
        <div className="card flex flex-column justify-content-center align-items-center gap-2">
            <div ref={ref} className="flex align-items-center justify-content-center relative surface-ground h-14rem z-1" style={{ width: '8px' }}>
                <div
                    className="absolute bg-primary-500 z-2"
                    style={{
                        bottom: 0,
                        width: '8px',
                        height: \`\${y * 100}%\`
                    }}
                ></div>
                <div
                    className='absolute block border-circle border-solid border-2 border-primary -mb-2 bg-white z-3'
                    style={{
                        width: '18px',
                        height: '18px',
                        bottom: \`calc(\${y * 100}%)\`,
                        cursor: 'grab'
                    }}
                ></div>
            </div>
            <span>Value {Math.round(y * 100)}</span>
        </div>
    )
}
        `,
        typescript: `
import React from 'react'; 
import {useMove } from 'primereact/hooks';

export default function VerticalDemo() {
    const { ref, y } = useMove({ initialValue: { y: 0.2 } });

    return (
        <div className="card flex flex-column justify-content-center align-items-center gap-2">
            <div ref={ref} className="flex align-items-center justify-content-center relative surface-ground h-14rem z-1" style={{ width: '8px' }}>
                <div
                    className="absolute bg-primary-500 z-2"
                    style={{
                        bottom: 0,
                        width: '8px',
                        height: \`\${y * 100}%\`
                    }}
                ></div>
                <div
                    className='absolute block border-circle border-solid border-2 border-primary -mb-2 bg-white z-3'
                    style={{
                        width: '18px',
                        height: '18px',
                        bottom: \`calc(\${y * 100}%)\`,
                        cursor: 'grab'
                    }}
                ></div>
            </div>
            <span>Value {Math.round(y * 100)}</span>
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                {/**
                 * @todo Add a description
                 */}
            </DocSectionText>
            <div className="card flex flex-column justify-content-center align-items-center gap-2">
                <div ref={ref} className="flex align-items-center justify-content-center relative surface-ground h-14rem z-1" style={{ width: '8px' }}>
                    <div
                        className="absolute bg-primary-500 z-2"
                        style={{
                            bottom: 0,
                            width: '8px',
                            height: `${y * 100}%`
                        }}
                    ></div>
                    <div
                        className="absolute block border-circle border-solid border-2 border-primary -mb-2 bg-white z-3"
                        style={{
                            width: '18px',
                            height: '18px',
                            bottom: `calc(${y * 100}%)`,
                            cursor: 'grab'
                        }}
                    ></div>
                </div>
                <span>Value {Math.round(y * 100)}</span>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
