import sys
locations = sys.path
for location in locations:
    print(location)

import calendar

leapdays = calendar.leapdays(2000, 2050)
print(leapdays)

isItLeap = calendar.isleap(2036)
print(isItLeap)