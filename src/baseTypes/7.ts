/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/
enum Week {
  Monday = 'Monday',
  Tuesday = 'Tuesday',
  Wednesday = 'Wednesday',
  Thursday = 'Thursday',
  Friday = 'Friday',
  Saturday = 'Saturday',
  Sunday = 'Sunday',
}
function isWeekend(day: Week): boolean {
  return day === Week.Saturday || day === Week.Sunday
}
//!!! НЕ ДУЖЕ ЗРОЗУМІЛО ФОРМУЛЮВАННЯ ЗАПИТАННЯ, ТРУ ПИСАТИ КОЛИ РОБОЧИЙ ДЕНЬ ТИЖНЯ, ЧИ КОЛИ ВИХІДНИЙ?