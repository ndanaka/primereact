import { ObjectUtils } from '../utils/Utils';

export const CalendarBase = {
    defaultProps: {
        __TYPE: 'Calendar',
        appendTo: null,
        ariaLabelledBy: null,
        autoZIndex: true,
        baseZIndex: 0,
        className: null,
        clearButtonClassName: 'p-button-secondary',
        dateFormat: null,
        dateTemplate: null,
        decadeTemplate: null,
        decrementIcon: null,
        disabled: false,
        disabledDates: null,
        disabledDays: null,
        footerTemplate: null,
        formatDateTime: null,
        headerTemplate: null,
        hideOnDateTimeSelect: false,
        hourFormat: '24',
        icon: null,
        iconPos: 'right',
        id: null,
        incrementIcon: null,
        inline: false,
        inputClassName: null,
        inputId: null,
        inputMode: 'none',
        inputRef: null,
        inputStyle: null,
        keepInvalid: false,
        locale: null,
        mask: null,
        maxDate: null,
        maxDateCount: null,
        minDate: null,
        monthNavigator: false,
        monthNavigatorTemplate: null,
        name: null,
        nextIcon: null,
        numberOfMonths: 1,
        onBlur: null,
        onChange: null,
        onClearButtonClick: null,
        onFocus: null,
        onHide: null,
        onInput: null,
        onMonthChange: null,
        onSelect: null,
        onShow: null,
        onTodayButtonClick: null,
        onViewDateChange: null,
        onVisibleChange: null,
        panelClassName: null,
        panelStyle: null,
        parseDateTime: null,
        placeholder: null,
        prevIcon: null,
        readOnlyInput: false,
        required: false,
        selectOtherMonths: false,
        selectionMode: 'single',
        shortYearCutoff: '+10',
        showButtonBar: false,
        showIcon: false,
        showMillisec: false,
        showMinMaxRange: false,
        showOnFocus: true,
        showOtherMonths: true,
        showSeconds: false,
        showTime: false,
        showWeek: false,
        stepHour: 1,
        stepMillisec: 1,
        stepMinute: 1,
        stepSecond: 1,
        style: null,
        tabIndex: null,
        timeOnly: false,
        todayButtonClassName: 'p-button-secondary',
        tooltip: null,
        tooltipOptions: null,
        touchUI: false,
        transitionOptions: null,
        value: null,
        view: 'date',
        viewDate: null,
        visible: false,
        yearNavigator: false,
        yearNavigatorTemplate: null,
        yearRange: null,
        children: undefined
    },
    getProps: (props) => ObjectUtils.getMergedProps(props, CalendarBase.defaultProps),
    getOtherProps: (props) => ObjectUtils.getDiffProps(props, CalendarBase.defaultProps)
};
