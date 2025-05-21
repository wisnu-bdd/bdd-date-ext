type Locales = string | string[];
export declare class DateX extends Date {
    adjustTimezoneOffset(): this;
    getDatestring(locales?: Locales): string;
    getDeltaTimeCopyText(previous: Date | number | null): string;
    getTimestring(locales?: Locales): string;
    shift(value: number, unit: 'ms' | 'second' | 'minute' | 'hour' | 'day' | 'month' | 'year'): this;
    toYMD(): string;
    static isValidDateString(arg: string): boolean;
}
export {};
