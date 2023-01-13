import { DocSectionText } from '../common/docsectiontext';
import { DevelopmentSection } from '../common/developmentsection';
import { CodeHighlight } from '../common/codehighlight';

export function AccessibilityDoc() {
    return (
        <DevelopmentSection>
            <DocSectionText id="accessibility" label="Accessibility">
                <h3>Screen Reader</h3>
                <p>
                    RadioButton component uses a hidden native radio button element internally that is only visible to screen readers. Value to describe the component can either be provided via <i>label</i> tag combined with <i>inputId</i> prop or
                    using <i>aria-labelledby</i>, <i>aria-label</i> props.
                </p>
                <CodeHighlight>
                    {`
<label htmlFor="rb1">One</label>
<RadioButton inputId="rb1" />

<span id="rb2">Two</span>
<RadioButton aria-labelledby="rb2" />

<RadioButton aria-label="Three" />
`}
                </CodeHighlight>

                <h3>Keyboard Support</h3>
                <div className="doc-tablewrapper">
                    <table className="doc-table">
                        <thead>
                            <tr>
                                <th>Key</th>
                                <th>Function</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <i>tab</i>
                                </td>
                                <td>Moves focus to the checked radio button, if there is none within the group then first radio button receives the focus.</td>
                            </tr>
                            <tr>
                                <td>
                                    <span className="inline-flex flex-column">
                                        <i className="mb-1">left arrow</i>
                                        <i>up arrow</i>
                                    </span>
                                </td>
                                <td>Moves focus to the previous radio button, if there is none then last radio button receives the focus.</td>
                            </tr>
                            <tr>
                                <td>
                                    <span className="inline-flex flex-column">
                                        <i className="mb-1">right arrow</i>
                                        <i>down arrow</i>
                                    </span>
                                </td>
                                <td>Moves focus to the next radio button, if there is none then first radio button receives the focus.</td>
                            </tr>
                            <tr>
                                <td>
                                    <i>space</i>
                                </td>
                                <td>If the focused radio button is unchecked, changes the state to checked.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </DocSectionText>
        </DevelopmentSection>
    );
}
