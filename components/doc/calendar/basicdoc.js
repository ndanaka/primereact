import { useState } from 'react';
import { Calendar } from '../../lib/calendar/Calendar';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function BasicDoc(props) {
    const [date, setDate] = useState(null);

    const code = {
        basic: `
<Calendar id="basic" value={date} onChange={(e) => setDate(e.value)} />
        `,
        javascript: `
import { useState } from "react";
import { Calendar } from 'primereact/calendar';

export default function BasicDemo() {
    const [date, setDate] = useState(null);

    return (
        <Calendar id="basic" value={date} onChange={(e) => setDate(e.value)} />
    )
}
        `,
        typescript: `
import { useState } from "react";
import { Calendar, CalendarChangeParams } from 'primereact/calendar';

export default function BasicDemo() {
    const [date, setDate] = useState<Date | null>(null);

    return (
        <Calendar id="basic" value={date} onChange={(e : CalendarChangeParams) => setDate(e.value)} />
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                Calendar is used a controlled input component with <i>value</i> and <i>onChange</i> properties.
            </DocSectionText>
            <div className="card flex justify-content-center">
                <Calendar id="basic" value={date} onChange={(e) => setDate(e.value)} />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
