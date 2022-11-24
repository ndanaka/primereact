import React, { useRef } from 'react';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';
import { Captcha } from '../../lib/captcha/Captcha';
import { Toast } from '../../lib/toast/Toast';

export function CaptchaDoc(props) {
    const toast = useRef(null);

    const showResponse = () => {
        toast.current.show({ severity: 'info', summary: 'Success', detail: 'User Responded' });
    };

    const code = {
        basic: `
<Toast ref={toast}></Toast>
<Captcha siteKey="YOUR_SITE_KEY" onResponse={showResponse} />
        `,
        javascript: `
import React, { useRef } from 'react';
import { Ripple } from 'primereact/ripple';

export const CaptchaDoc = () => {
    const toast = useRef(null);

    const showResponse = () => {
        toast.current.show({ severity: 'info', summary: 'Success', detail: 'User Responded' });
    };

    return (
        <div className="card">
            <Toast ref={toast}></Toast>
            <Captcha siteKey="YOUR_SITE_KEY" onResponse={showResponse} />  
        </div>
    );
}
        `,
        typescript: `
import React, { useRef } from 'react';
import { Ripple } from 'primereact/ripple';

export const CaptchaDoc = () => {
    const toast = useRef(null);

    const showResponse = () => {
        toast.current.show({ severity: 'info', summary: 'Success', detail: 'User Responded' });
    };

    return (
        <div className="card">
            <Toast ref={toast}></Toast>
            <Captcha siteKey="YOUR_SITE_KEY" onResponse={showResponse} />  
        </div>
    );
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>Styling Demo Content.</p>
            </DocSectionText>
            <div className="card">
                <Toast ref={toast}></Toast>
                <Captcha siteKey="YOUR_SITE_KEY" onResponse={showResponse} />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
