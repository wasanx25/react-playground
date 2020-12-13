export class YearAndMonth {
  readonly year: string
  readonly month: string

  private constructor(year: string, month: string) {
    this.year = year
    this.month = month
  }

  static fromString(yearAndMonth: string): YearAndMonth {
    const [year, month] = yearAndMonth.split('-')
    return new YearAndMonth(year, month)
  }

  static now(): YearAndMonth {
    const date = new Date()
    const year = date.getFullYear()
    const month = date.getMonth() + 1

    return new YearAndMonth(year.toString(), month.toString())
  }

  format(): string {
    return `${this.year}-${this.month}`
  }
}
