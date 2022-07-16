export const convertDbDateToCommonDate = (date: string, separator = '-'): string => {
  const re = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/
  const groups = re.exec(date)?.groups
  return `${groups?.day}${separator}${groups?.month}${separator}${groups?.year}`
}