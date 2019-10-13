import { Injectable } from "@angular/core";

@Injectable()
export class FinancialDataService {

    public getData(): any[] {
        return [
            { time: new Date(2013, 1, 1), open: 268.93, high: 268.93, low: 262.80, close: 265.00, volume: 6118146 },
            { time: new Date(2013, 1, 4), open: 262.78, high: 264.68, low: 259.07, close: 259.98, volume: 3723793 },
            { time: new Date(2013, 1, 5), open: 262.00, high: 268.03, low: 261.46, close: 266.89, volume: 4013780 },
            { time: new Date(2013, 1, 6), open: 265.16, high: 266.89, low: 261.11, close: 262.22, volume: 2772204 },
            { time: new Date(2013, 1, 7), open: 264.10, high: 264.10, low: 255.11, close: 260.23, volume: 3977065 },
            { time: new Date(2013, 1, 8), open: 261.40, high: 265.25, low: 260.56, close: 261.95, volume: 3879628 },
            { time: new Date(2013, 1, 11), open: 263.20, high: 263.25, low: 256.60, close: 257.21, volume: 3407457 },
            { time: new Date(2013, 1, 12), open: 259.19, high: 260.16, low: 257.00, close: 258.70, volume: 2944730 },
            { time: new Date(2013, 1, 13), open: 261.53, high: 269.96, low: 260.30, close: 269.47, volume: 5295786 },
            { time: new Date(2013, 1, 14), open: 267.37, high: 270.65, low: 265.40, close: 269.24, volume: 3464080 },
            { time: new Date(2013, 1, 15), open: 267.63, high: 268.92, low: 263.11, close: 265.09, volume: 3981233 }
        ];
    }
    public getMulti(): any[] {
        return [this.getTsla() ];
    }
    public getThree(): any[] {
        return [this.getTsla() ];
    }

    public getTsla(): any {
        const result: any = [
    { time: new Date(2013, 1, 1), open: 38.17, high: 38.50, low: 37.62, close: 38.30, volume: 1100590 },
    { time: new Date(2013, 1, 4), open: 38.40, high: 38.42, low: 37.59, close: 37.74, volume: 1127989 },
    { time: new Date(2013, 1, 5), open: 38.00, high: 38.65, low: 37.68, close: 38.13, volume: 1310192 },
    { time: new Date(2016, 9, 26), open: 201.00, high: 203.19, low: 200.10, close: 202.24, volume: 5632841 },
    { time: new Date(2016, 9, 27), open: 211.34, high: 213.70, low: 201.65, close: 204.01, volume: 13093744 },
    { time: new Date(2016, 9, 28), open: 204.00, high: 205.32, low: 199.83, close: 199.97, volume: 4280141 },
    { time: new Date(2016, 9, 31), open: 202.49, high: 202.49, low: 195.81, close: 197.73, volume: 4692273 },
    { time: new Date(2016, 10, 1), open: 198.04, high: 198.50, low: 188.10, close: 190.79, volume: 7060036 },
    { time: new Date(2016, 10, 2), open: 190.05, high: 192.70, low: 187.50, close: 188.02, volume: 4253382 },
    { time: new Date(2016, 10, 3), open: 189.00, high: 191.47, low: 187.04, close: 187.42, volume: 2653023 },
    { time: new Date(2016, 10, 4), open: 189.00, high: 193.46, low: 185.96, close: 190.56, volume: 5146043 },
    { time: new Date(2016, 10, 7), open: 193.59, high: 194.29, low: 190.05, close: 193.21, volume: 3870112 },
    { time: new Date(2016, 10, 8), open: 193.79, high: 197.49, low: 191.26, close: 194.94, volume: 3267580 },
    { time: new Date(2016, 10, 9), open: 186.88, high: 192.00, low: 183.95, close: 190.06, volume: 8173065 },
    { time: new Date(2016, 10, 10), open: 191.05, high: 191.61, low: 180.42, close: 185.35, volume: 6750341 },
    { time: new Date(2016, 10, 11), open: 184.24, high: 188.88, low: 183.00, close: 188.56, volume: 3988504 },
    { time: new Date(2016, 10, 14), open: 188.00, high: 188.25, low: 178.19, close: 181.45, volume: 6552205 },
    { time: new Date(2016, 10, 15), open: 182.78, high: 186.43, low: 182.05, close: 183.77, volume: 3902018 },
    { time: new Date(2016, 10, 16), open: 182.65, high: 184.73, low: 181.21, close: 183.93, volume: 3434437 },
    { time: new Date(2016, 10, 17), open: 183.49, high: 189.49, low: 182.11, close: 188.66, volume: 4887067 },
    { time: new Date(2016, 10, 18), open: 190.65, high: 193.00, low: 185.00, close: 185.02, volume: 5210347 },
    { time: new Date(2016, 10, 21), open: 185.04, high: 188.89, low: 184.41, close: 184.52, volume: 4361043 },
    { time: new Date(2016, 10, 22), open: 185.84, high: 191.47, low: 183.71, close: 191.17, volume: 5603361 },
    { time: new Date(2016, 10, 23), open: 190.61, high: 195.64, low: 189.00, close: 193.14, volume: 4891893 },
    { time: new Date(2016, 10, 25), open: 193.64, high: 197.24, low: 193.64, close: 196.65, volume: 2366098 },
    { time: new Date(2016, 10, 28), open: 195.48, high: 199.35, low: 194.55, close: 196.12, volume: 4529182 },
    { time: new Date(2016, 10, 29), open: 195.56, high: 196.73, low: 189.50, close: 189.57, volume: 4439256 },
    { time: new Date(2016, 10, 30), open: 191.00, high: 191.89, low: 187.50, close: 189.40, volume: 3547104 },
    { time: new Date(2016, 11, 1), open: 188.25, high: 188.53, low: 181.00, close: 181.88, volume: 5126401 },
    { time: new Date(2016, 11, 2), open: 182.88, high: 184.88, low: 180.00, close: 181.47, volume: 4042324 },
    { time: new Date(2016, 11, 5), open: 182.51, high: 188.89, low: 182.51, close: 186.80, volume: 4072239 },
    { time: new Date(2016, 11, 6), open: 185.52, high: 186.58, low: 182.68, close: 185.85, volume: 3391622 },
    { time: new Date(2016, 11, 7), open: 186.15, high: 193.40, low: 185.00, close: 193.15, volume: 5461851 },
    { time: new Date(2016, 11, 8), open: 192.05, high: 192.50, low: 189.54, close: 192.29, volume: 3194148 },
    { time: new Date(2016, 11, 9), open: 190.87, high: 193.84, low: 190.81, close: 192.18, volume: 2722505 }];
        result.title = "TESLA";
        // setting data intent for Series Title
        result.__dataIntents = {
            open: ["SeriesTitle/TESLA"]
        };
        return result;
    }
}
