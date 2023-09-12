import DefaultTheme from "@/styles/DefaultTheme";
import { DateCalendar, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

const Calendar = () => {
  return (
    <div
      style={{
        borderBottom: `2px solid ${DefaultTheme.palette.info.main}`,
        paddingBottom: "1.5rem",
      }}
    >
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateCalendar
          sx={{
            backgroundColor: DefaultTheme.palette.info.main,
            width: "100%",
            color: "white",
            borderRadius: "0.3rem",
          }}
        />
      </LocalizationProvider>
    </div>
  );
};

export default Calendar;
