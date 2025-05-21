type Locales = string | string[];
type TimeUnit = 'ms' | 'second' | 'minute' | 'hour' | 'day' | 'month' | 'year';

export class DateX extends Date {
  // constructor() {
  //   super();
  // }
  public adjustTimezoneOffset() {
    this.setMinutes(this.getMinutes() - this.getTimezoneOffset());
    return this;
  }

  public getDatestring(locales?: Locales) {
    return this.toLocaleDateString(locales || "id", { day: "2-digit", month: "short", year: "numeric" });
  }

  public getDeltaTimeCopyText(previous: Date | number | null) {
    if (!previous) return "-";
    const ds = (this.getTime() - (typeof previous === 'number' ? previous : previous.getTime())) / 1000; // delta seconds
    if (ds < 60) return "just now";
    if (ds >= 60 && ds < 60*60) return `${Math.floor(ds/60)} minute${Math.floor(ds/60) === 1 ? '' : 's'} ago`;
    if (ds >= 60*60 && ds < 24*60*60) return `${Math.floor(ds/(60*60))} hour${Math.floor(ds/(60*60)) === 1 ? '' : 's'} ago`;
    /* if (ds >= 24*60*60 && ds < 7*24*60*60) */ return `${Math.floor(ds/(24*60*60))} day${Math.floor(ds/(24*60*60)) === 1 ? '' : 's'} ago`;
  }

  public getTimestring(locales?: Locales) {
    return this.toLocaleTimeString(locales || "en", { hour: "2-digit", minute: "2-digit" });
  }

  public shift(value: number, unit: TimeUnit) {
    switch (unit) {
      case "ms": this.setMilliseconds(this.getMilliseconds() + value); break;
      case "second": this.setSeconds(this.getSeconds() + value); break;
      case "minute": this.setMinutes(this.getMinutes() + value); break;
      case "hour": this.setHours(this.getHours() + value); break;
      case "day": this.setDate(this.getDate() + value); break;
      case "month": this.setMonth(this.getMonth() + value); break;
      case "year": this.setFullYear(this.getFullYear() + value); break;
      default:
    }
    return this;
  }

  public toYMD() {
    return this.toISOString().split("T")[0];
  }

  static isValidDateString(arg: string) {
    return !isNaN(Date.parse(arg));
  } 
}