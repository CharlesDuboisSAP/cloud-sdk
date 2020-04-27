/* Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved. */
/* eslint-disable no-console */
interface DateTime {
  year: number;
  month: number;
  day: number;
  hours: number;
  minutes: number;
  seconds: number;
  milliseconds: number;
  offset: string;
}

const iso8601DateMatcher = /(?<year>\d{4})-?(?<month>\d{2})-?(?<day>\d{2})T?(?<hours>\d{2})?:?(?<minutes>\d{2})?:?(?<seconds>\d{2})?\.?(?<milliseconds>\d+)?(?<isUtc>Z)?(?<offset>[+-](?<offsethours>\d{2}):?(?<offsetminutes>\d{2})?)?/;

const createDateTime = (dateString: string): DateTime => {
  const matches = dateString.match(iso8601DateMatcher);
  if (!matches || !matches.groups) {
    throw Error('Cannot parse date string. Format does not match ISO 8601.');
  }

  const {
    year,
    month,
    day,
    hours,
    minutes,
    seconds,
    milliseconds,
    offset
  } = matches.groups;

  return {
    year: parseNumber(year),
    month: parseMonth(month),
    day: parseNumber(day),
    hours: parseNumber(hours),
    minutes: parseNumber(minutes),
    seconds: parseNumber(seconds),
    milliseconds: parseNumber(milliseconds),
    offset: parseOffset(offset)
  };
};

export const toEdmDate = (dateString: string): string => {
  const dateTime = createDateTime(dateString);
  const date = new Date(
    Date.UTC(
      dateTime.year,
      dateTime.month,
      dateTime.day,
      dateTime.hours,
      dateTime.minutes,
      dateTime.seconds,
      dateTime.milliseconds
    )
  );
  return `/Date(${date.getTime()}${dateTime.offset})/`;
};

const parseNumber = (val: string): number => parseInt(val) || 0;
const parseMonth = (val: string): number => parseInt(val) - 1;
const parseOffset = (val: string): string =>
  val ? val.replace(':', '').padEnd(5, '0') : '';

function t() {
  const testDates = [
    '200704051430Z',
    '20070405T1430Z',
    '2007-04-05T14:30Z',
    '2007-04-05T14:30',
    '2007-04-05T12:30-02',
    '2007-04-05T12:30-02:00',
    '2007-04-05T12:30:00-02:00',
    '2007-04-05T12:30:00.0000-02:00',
    '2007-04-05T12:30-0200',
    '2007-04-05T16:30+02:00',
    '2007-04-05T16:30+0200'
  ];

  console.log(testDates.map(d => toEdmDate(d)));
}

t();
