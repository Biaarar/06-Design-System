import { CaretLeft, CaretRight } from "phosphor-react";
import {
  Button,
  CalendarContainer,
  CalendarDays,
  CalendarHeader,
  CalendarWeekdays,
  Days,
  Empty,
  TooltipStyle,
  WeekDays
} from "./Styles";
import { ComponentProps, useEffect, useMemo, useState } from "react";

type DayCalendar = {
  day: number
  data: Date
  empity?: boolean
}

const today = new Date();

const day_month_formatter = new Intl.DateTimeFormat('pt-BR', {
  month: 'long',
  year: 'numeric',
});

const weekDaysLabel = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb']


export interface CalendarProps extends ComponentProps<typeof CalendarContainer> { }

export function Calendar(props: CalendarProps) {
  const [showTooltip, setShowTooltip] = useState(false);
  const [hoveredDayIndex, setHoveredDayIndex] = useState<number | null>(null);
  const [selectedDayIndex, setSelectedDayIndex] = useState<number | null>(null);
  const [unavailableDays, setUnavailableDays] = useState<Date[]>([]);

  const [selectedMonth, setSelectMonth] = useState<Date>(today);

  const [monthDays, setMonthDays] = useState<(Date | null)[]>([]);

  const hasSelectedDay = (day: Date) => {
    const comparableDay = new Date(day);
    comparableDay.setHours(0, 0, 0, 0);

    return unavailableDays.findIndex((d) => {
      const comparableD = new Date(d);
      comparableD.setHours(0, 0, 0, 0);
      return comparableD.getTime() === comparableDay.getTime();
    });
  }


  const toggleSelectedDay = (day: Date) => {
    const comparableDay = new Date(day);
    comparableDay.setHours(0, 0, 0, 0);

    const dayIndex = hasSelectedDay(comparableDay);

    if (dayIndex === -1) {
      setUnavailableDays((prev) => [...prev, comparableDay]);
    } else {
      setUnavailableDays((prev) => prev.filter((d) => d !== comparableDay));
    }
  }


  function getMonthsDay(month: Date): (Date | null)[] {
    const year = month.getFullYear();
    const monthIndex = month.getMonth();

    const firstDay = new Date(year, monthIndex, 1);
    const lastDay = new Date(year, monthIndex + 1, 0);

    const emptyDays = Array.from({ length: firstDay.getDay() }, () => null);

    const monthDays = Array.from({ length: lastDay.getDate() }, (_, i) => {
      return new Date(year, monthIndex, i + 1);
    });

    return [...emptyDays, ...monthDays];
  }


  const generateCalendar = () => {
    const days = getMonthsDay(selectedMonth);
    setMonthDays(days);
  }

  useEffect(() => {
    generateCalendar();
  }, [selectedMonth]);

  const selectedMonthLabel = useMemo(() => {
    return day_month_formatter.format(selectedMonth);
  }, [selectedMonth])

  const renderDays = (day: Date | null, i: number) => {



    if (!day) {
      return (
        <div
          key={`empty-${i}`}
          style={{ position: "relative" }}
          onMouseEnter={() => setHoveredDayIndex(i)}
          onMouseLeave={() => setHoveredDayIndex(null)} >
          <Empty className="day empty" />
        </div>
      )
    }

    const daySelected = hasSelectedDay(day as Date) !== -1;


    return (
      <Days
        key={`day-${day.getDay()}`}
        className={daySelected ? "indisponivel" : ""}
        style={{ position: "relative" }}
        onMouseEnter={() => setHoveredDayIndex(i)}
        onMouseLeave={() => setHoveredDayIndex(null)}
        onClick={() => toggleSelectedDay(day)}
      >
        {day.getDate()}
        {hoveredDayIndex === i &&
          <TooltipStyle>
            {daySelected
              ? `${day.getDate()} de ${new Intl.DateTimeFormat('pt-BR', { month: 'long' }).format(day)} indisponível`
              : `${day.getDate()} de ${new Intl.DateTimeFormat('pt-BR', { month: 'long' }).format(day)} disponível`}
          </TooltipStyle>
        }
      </Days>
    )
  }

  const renderWeekDays = (weekDay: string) => (
    <WeekDays className="day semana" key={weekDay}>{weekDay}</WeekDays>
  )

  console.log(monthDays);

  return (
    <CalendarContainer>
      <CalendarHeader>
        <h2>{selectedMonthLabel}</h2>
        <div>
          <Button onClick={() => {
            setMonthDays([]);
            const newDate = new Date(selectedMonth);
            newDate.setMonth(selectedMonth.getMonth() - 1);
            setSelectMonth(newDate);
          }}>
            <CaretLeft size={32} />
          </Button>
          <Button onClick={() => {
            setMonthDays([]);
            const newDate = new Date(selectedMonth);
            newDate.setMonth(selectedMonth.getMonth() + 1);
            setSelectMonth(newDate);
          }}>
            <CaretRight size={32} />
          </Button>
        </div>
      </CalendarHeader>

      <CalendarWeekdays>
        {weekDaysLabel.map(renderWeekDays)}
      </CalendarWeekdays>

      <CalendarDays>
        {monthDays.map(renderDays)}
      </CalendarDays>
    </CalendarContainer>
  );
}

