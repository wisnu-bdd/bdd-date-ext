# date-ext

A lightweight TypeScript utility that extends JavaScript’s native `Date` object with additional methods for common date formatting, manipulation, and comparison tasks.

## 📦 Installation

```bash
npm install date-ext
# or
pnpm add date-ext
# or
yarn add date-ext
```

## 🔧 Usage

```ts
import { DateX } from 'date-ext';

const date = new DateX();

// Adjust timezone to local
date.adjustTimezoneOffset();

// Get a localized date string (e.g., "21 May 2025")
const dateStr = date.getDatestring();

// Get a localized time string (e.g., "10:45 AM")
const timeStr = date.getTimestring();

// Format as YYYY-MM-DD
const ymd = date.toYMD();

// Shift the date 3 days forward
date.shift(3, 'day');

// Show "x minutes ago" compared to previous time
const relative = date.getDeltaTimeCopyText(Date.now() - 10 * 60 * 1000); // "10 minutes ago"
```

## 📚 API Reference
```ts
new DateX(input?)
```
Creates a new DateX instance. Accepts the same parameters as the native Date constructor.

### Instance Methods

| Method | Description |
|:-|:-|
| `adjustTimezoneOffset()` | Adjusts the time by the local timezone offset. |
| `getDatestring(locales?: string \| string[])` | Returns a localized date string (e.g. `21 May 2025`). Defaults to Indonesian locale. |
| `getTimestring(locales?: string \| string[])` | Returns a localized time string ("10:45 AM"). Defaults to English locale. |
| `getDeltaTimeCopyText(previous: Date \| number \| null)` | Returns a human-readable difference string (e.g. `2 days ago`). |
| `shift(value: number, unit: 'ms' \| 'second' \| 'minute' \| 'hour' \| 'day' \| 'month' \| 'year')` | Mutates the date by shifting it forward/backward in time.|
| `toYMD()` | Returns the date in YYYY-MM-DD ISO format. |

### Static Methods

| Method | Description |
|:-|:-|
| `DateX.isValidDateString(input: string)` | Returns true if the input string can be parsed into a valid date. |

## ✅ Why use `DateX`?

- Works exactly like native `Date`
- Adds helpful utilities for common formatting and manipulation tasks
- Fully typed for TypeScript projects
- No dependencies
