import {Injectable} from "@angular/core";

export enum Month {
  Year = 'All months',
  Jan = 'January',
  Feb = 'February',
  Mar = 'March',
  Apr = 'April',
  May = 'May',
  Jun = 'June',
  Jul = 'July',
  Aug = 'August',
  Sep = 'September',
  Oct = 'October',
  Nov = 'November',
  Dec = 'December'
}

export enum Year {
  y2022 = '2022',
  y2021 = '2021',
  y2020 = '2020',
  y2019 = '2019',
  y2018 = '2018',
  y2017 = '2017',
  y2016 = '2016',
  y2015 = '2015'
}

@Injectable({
  providedIn: 'root',
})
export class EnumService {

  getPreviousMonth(month: Month, year: Year): string | undefined {
    switch (month) {
      case Month.Jan:
        if (year === Year.y2015) {
          return undefined;
        }
        return Month.Dec + ' ' + (Number.parseInt(year.toString()) - 1);
      case Month.Feb:
        return Month.Jan + ' ' + year;
      case Month.Mar:
        return Month.Feb + ' ' + year;
      case Month.Apr:
        return Month.Mar + ' ' + year;
      case Month.May:
        return Month.Apr + ' ' + year;
      case Month.Jun:
        return Month.May + ' ' + year;
      case Month.Jul:
        return Month.Jun + ' ' + year;
      case Month.Aug:
        return Month.Jul + ' ' + year;
      case Month.Sep:
        return Month.Aug + ' ' + year;
      case Month.Oct:
        return Month.Sep + ' ' + year;
      case Month.Nov:
        return Month.Oct + ' ' + year;
      case Month.Dec:
        return Month.Nov + ' ' + year;
      default:
        return undefined;
    }
  }

  getNextMonth(month: Month, year: Year): string | undefined {
    switch (month) {
      case Month.Jan:
        return Month.Feb + ' ' + year;
      case Month.Feb:
        return Month.Mar + ' ' + year;
      case Month.Mar:
        return Month.Apr + ' ' + year;
      case Month.Apr:
        return Month.May + ' ' + year;
      case Month.May:
        return Month.Jun + ' ' + year;
      case Month.Jun:
        return Month.Jul + ' ' + year;
      case Month.Jul:
        return Month.Aug + ' ' + year;
      case Month.Aug:
        return Month.Sep + ' ' + year;
      case Month.Sep:
        if (year === Year.y2022) {
          return undefined;
        }
        return Month.Oct + ' ' + year;
      case Month.Oct:
        return Month.Nov + ' ' + year;
      case Month.Nov:
        return Month.Dec + ' ' + year;
      case Month.Dec:
        if (year === Year.y2022) {
          return undefined;
        }
        return Month.Jan + ' ' + (Number.parseInt(year.toString()) + 1);
      default:
        return undefined;
    }
  }

  getPreviousYear(year: Year): string | undefined {
    if (year === Year.y2015) {
      return undefined;
    }
    return 'Year ' + (Number.parseInt(year.toString()) - 1);
  }

  getNextYear(year: Year): string | undefined {
    if (year === Year.y2022) {
      return undefined;
    }
    return 'Year ' + (Number.parseInt(year.toString()) + 1);
  }

  enumToFileName(month: Month, year: Year): string {
    if (month === Month.Year) {
      return 'assets/year' + year + '.csv';
    }
    return 'assets/' + month.substring(0, 3).toLowerCase() + year + '.csv';
  }
}

