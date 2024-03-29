//
// Copyright 2019 by Trinkler Software AG (Switzerland).
// This file is part of Katal.
//
// Katal is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version <http://www.gnu.org/licenses/>.
//
// Katal is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//

use super::*;

/// Year Fraction Convention: given two input time *s* and *t*, with *s<t*, and the desired day count
/// convention it calculates the fraction of a year between the two times and returns it as a Real.
/// See section 4.6 of the ACTUS paper for details.
pub fn year_fraction(s: Time, t: Time, day_cont_convention: DayCountConvention) -> Real {
    if s == Time(None) || t == Time(None) || s > t {
        return Real(None);
    }
    match day_cont_convention {
        DayCountConvention::_AAISDA => {
            let mut year_1 = s.0.unwrap().year;
            let mut month_1 = s.0.unwrap().month;
            let day_1 = s.0.unwrap().day;
            let year_2 = t.0.unwrap().year;
            let mut month_2 = t.0.unwrap().month;
            let day_2 = t.0.unwrap().day;

            let mut diff_leap: i64 = 0;
            let mut diff_normal: i64 = 0;

            let flag_1 = Time::is_leap_year(year_1);
            let flag_2 = Time::is_leap_year(year_2);

            if flag_1 {
                diff_leap -= day_1 as i64;
            } else {
                diff_normal -= day_1 as i64;
            }
            if flag_2 {
                diff_leap += day_2 as i64;
            } else {
                diff_normal += day_2 as i64;
            }

            let mut x: i64 = 0;
            while month_1 != 0 {
                x += Time::days_in_month(year_1, month_1) as i64;
                month_1 -= 1;
            }
            if flag_1 {
                diff_leap -= x;
            } else {
                diff_normal -= x;
            }
            x = 0;
            while month_2 != 0 {
                x += Time::days_in_month(year_2, month_2) as i64;
                month_2 -= 1;
            }
            if flag_2 {
                diff_leap += x;
            } else {
                diff_normal += x;
            }

            while year_1 < year_2 {
                if Time::is_leap_year(year_1) {
                    diff_leap += 366;
                } else {
                    diff_normal += 365;
                }
                year_1 += 1;
            }

            Real::from(diff_normal) / Real::from(365) + Real::from(diff_leap) / Real::from(366)
        }
        DayCountConvention::_A360 => {
            let mut year_1 = s.0.unwrap().year;
            let mut month_1 = s.0.unwrap().month;
            let day_1 = s.0.unwrap().day;
            let year_2 = t.0.unwrap().year;
            let mut month_2 = t.0.unwrap().month;
            let day_2 = t.0.unwrap().day;

            let mut diff: i64 = 0;

            diff += (day_2 - day_1) as i64;

            while month_1 != 0 {
                diff -= Time::days_in_month(year_1, month_1) as i64;
                month_1 -= 1;
            }
            while month_2 != 0 {
                diff += Time::days_in_month(year_2, month_2) as i64;
                month_2 -= 1;
            }

            while year_1 < year_2 {
                diff += 365 + (Time::is_leap_year(year_1) as i64);
                year_1 += 1;
            }

            Real::from(diff) / Real::from(360)
        }
        DayCountConvention::_A365 => {
            let mut year_1 = s.0.unwrap().year;
            let mut month_1 = s.0.unwrap().month;
            let day_1 = s.0.unwrap().day;
            let year_2 = t.0.unwrap().year;
            let mut month_2 = t.0.unwrap().month;
            let day_2 = t.0.unwrap().day;

            let mut diff: i64 = 0;

            diff += (day_2 - day_1) as i64;

            while month_1 != 0 {
                diff -= Time::days_in_month(year_1, month_1) as i64;
                month_1 -= 1;
            }
            while month_2 != 0 {
                diff += Time::days_in_month(year_2, month_2) as i64;
                month_2 -= 1;
            }

            while year_1 < year_2 {
                diff += 365 + (Time::is_leap_year(year_1) as i64);
                year_1 += 1;
            }

            Real::from(diff) / Real::from(365)
        }
        DayCountConvention::_30E360 => {
            let year_1 = Real::from(s.0.unwrap().year as i64);
            let month_1 = Real::from(s.0.unwrap().month as i64);
            let mut day_1 = Real::from(s.0.unwrap().day as i64);
            let year_2 = Real::from(t.0.unwrap().year as i64);
            let month_2 = Real::from(t.0.unwrap().month as i64);
            let mut day_2 = Real::from(t.0.unwrap().day as i64);

            if day_1 == Real::from(31) {
                day_1 = Real::from(30);
            }
            if day_2 == Real::from(31) {
                day_2 = Real::from(30);
            }

            (Real::from(360) * (year_2 - year_1)
                + Real::from(30) * (month_2 - month_1)
                + (day_2 - day_1))
                / Real::from(360)
        }
        DayCountConvention::_30360 => {
            let year_1 = Real::from(s.0.unwrap().year as i64);
            let month_1 = Real::from(s.0.unwrap().month as i64);
            let day_1 = Real::from(s.0.unwrap().day as i64);
            let year_2 = Real::from(t.0.unwrap().year as i64);
            let month_2 = Real::from(t.0.unwrap().month as i64);
            let day_2 = Real::from(t.0.unwrap().day as i64);

            (Real::from(360) * (year_2 - year_1)
                + Real::from(30) * (month_2 - month_1)
                + (day_2 - day_1))
                / Real::from(360)
        }
        // DayCountConvention::_30E360ISDA => (),
        // DayCountConvention::_BUS252 => (),
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn year_fraction_works() {
        let s = Time::from_values(2012, 2, 10, 00, 00, 00);
        let t = Time::from_values(2017, 4, 9, 16, 20, 00);

        assert_eq!(
            year_fraction(Time(None), t, DayCountConvention::_AAISDA),
            Real(None)
        );
        assert_eq!(
            year_fraction(s, Time(None), DayCountConvention::_AAISDA),
            Real(None)
        );
        assert_eq!(year_fraction(t, s, DayCountConvention::_AAISDA), Real(None));

        // Test values are needed for the day count conventions!
    }

}
