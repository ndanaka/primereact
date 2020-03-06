import ObjectUtils from './ObjectUtils';

export default class FilterUtils {

    static startsWith(value, filter) {
        if (filter === undefined || filter === null || filter.trim() === '') {
            return true;
        }

        if (value === undefined || value === null) {
            return false;
        }

        let filterValue = ObjectUtils.removeAccents(filter.toString()).toLowerCase();
        let stringValue = ObjectUtils.removeAccents(value.toString()).toLowerCase();

        return stringValue.slice(0, filterValue.length) === filterValue;
    }

    static contains(value, filter) {
        if (filter === undefined || filter === null || (typeof filter === 'string' && filter.trim() === '')) {
            return true;
        }

        if (value === undefined || value === null) {
            return false;
        }

        let filterValue = ObjectUtils.removeAccents(filter.toString()).toLowerCase();
        let stringValue = ObjectUtils.removeAccents(value.toString()).toLowerCase();

        return stringValue.indexOf(filterValue) !== -1;
    }

    static endsWith(value, filter) {
        if (filter === undefined || filter === null || filter.trim() === '') {
            return true;
        }

        if (value === undefined || value === null) {
            return false;
        }

        let filterValue = ObjectUtils.removeAccents(filter.toString()).toLowerCase();
        let stringValue = ObjectUtils.removeAccents(value.toString()).toLowerCase();

        return stringValue.indexOf(filterValue, stringValue.length - filterValue.length) !== -1;
    }

    static equals(value, filter) {
        if (filter === undefined || filter === null || (typeof filter === 'string' && filter.trim() === '')) {
            return true;
        }

        if (value === undefined || value === null) {
            return false;
        }

        if (value.getTime && filter.getTime)
            return value.getTime() === filter.getTime();
        else
            return ObjectUtils.removeAccents(value.toString()).toLowerCase() === ObjectUtils.removeAccents(filter.toString()).toLowerCase();
    }

    static notEquals(value, filter) {
        if (filter === undefined || filter === null || (typeof filter === 'string' && filter.trim() === '')) {
            return false;
        }

        if (value === undefined || value === null) {
            return true;
        }

        if (value.getTime && filter.getTime)
            return value.getTime() !== filter.getTime();
        else
            return ObjectUtils.removeAccents(value.toString()).toLowerCase() !== ObjectUtils.removeAccents(filter.toString()).toLowerCase();
    }

    static in(value, filter) {
        if (filter === undefined || filter === null || filter.length === 0) {
            return true;
        }

        if (value === undefined || value === null) {
            return false;
        }

        for (let i = 0; i < filter.length; i++) {
            if (ObjectUtils.equals(value, filter[i])) {
                return true;
            }
        }

        return false;
    }

    static lt(value, filter) {
        if (filter === undefined || filter === null || (filter.trim && filter.trim().length === 0)) {
            return true;
        }

        if (value === undefined || value === null) {
            return false;
        }

        if (value.getTime && filter.getTime)
            return value.getTime() < filter.getTime();
        else
            return value < parseFloat(filter);
    }

    static lte(value, filter) {
        if (filter === undefined || filter === null || (filter.trim && filter.trim().length === 0)) {
            return true;
        }

        if (value === undefined || value === null) {
            return false;
        }

        if (value.getTime && filter.getTime)
            return value.getTime() <= filter.getTime();
        else
            return value <= parseFloat(filter);
    }

    static gt(value, filter) {
        if (filter === undefined || filter === null || (filter.trim && filter.trim().length === 0)) {
            return true;
        }

        if (value === undefined || value === null) {
            return false;
        }

        if (value.getTime && filter.getTime)
            return value.getTime() > filter.getTime();
        else
            return value > parseFloat(filter);
    }

    static gte(value, filter) {
        if (filter === undefined || filter === null || (filter.trim && filter.trim().length === 0)) {
            return true;
        }

        if (value === undefined || value === null) {
            return false;
        }

        if (value.getTime && filter.getTime)
            return value.getTime() >= filter.getTime();
        else
            return value >= parseFloat(filter);
    }

}