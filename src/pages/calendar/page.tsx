import {
  Box,
  colors,
  List,
  ListItem,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import { tokens } from "../../theme";
import { useState } from "react";
import Header from "../../components/header";
import { formatDate } from "@fullcalendar/core";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";

interface EventType {
  id: string;
  title: string;
  start?: Date | null;
  end?: Date | null;
  allDay?: boolean;
}

const Calendar = () => {
  const theme = useTheme();
  const color = tokens(theme.palette.mode);
  const [currentEvents, setCurrentEvents] = useState<EventType[]>([]);

  const handleDataClick = (selected: any) => {
    const title = prompt("Please enter a new title for your event");
    const calendarApi = selected.view.calendar;
    calendarApi.unselect();

    if (title) {
      calendarApi.addEvent({
        id: `${selected.dateStr}-${title}`,
        title,
        start: selected.start,
        end: selected.endStr,
        allDay: selected.allDay,
      });
    }
  };

  const handleClickEvent = (selected: any) => {
    if (
      window.confirm(
        `Apakah kamu ingin menghapus event ini '${selected.event.title}'?`
      )
    ) {
      selected.event.remove();
    }
  };
  const bg_color =
    theme.palette.mode === "dark" ? color.primary[400] : colors.grey[500];

  return (
    <Box m="20px">
      <Header
        title="CALENDAR"
        subtitle="Kalender "
      />
      <Box
        display="flex"
        justifyContent="space-between">
        <Box
          flex="1 1 20%"
          bgcolor={bg_color}
          p="15px"
          borderRadius="4px">
          <Typography
            variant="h5"
            className="text-white"
            fontWeight={"bold"}>
            Events
          </Typography>
          <List>
            {currentEvents.map((event) => (
              <ListItem
                key={event.id}
                sx={{
                  backgroundColor: color.greenAccent[500],
                  margin: "10px 0",
                  borderRadius: "2px",
                }}>
                <ListItemText
                  primary={event.title}
                  secondary={
                    <Typography>
                      {event.start
                        ? formatDate(event.start, {
                            year: "numeric",
                            month: "short",
                            day: "numeric",
                          })
                        : "No date available"}
                    </Typography>
                  }
                />
              </ListItem>
            ))}
          </List>
        </Box>
        <Box
          flex="1 1 100%"
          ml="15px">
          <FullCalendar
            height="75vh"
            plugins={[
              dayGridPlugin,
              timeGridPlugin,
              interactionPlugin,
              listPlugin,
            ]}
            headerToolbar={{
              left: "prev,next today",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
            }}
            initialView="dayGridMonth"
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            select={handleDataClick}
            eventClick={handleClickEvent}
            eventsSet={(events) => setCurrentEvents(events)}
            initialEvents={[
              { id: "1234", title: "Now Day", date: "2025-03-01" },
            ]}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Calendar;
