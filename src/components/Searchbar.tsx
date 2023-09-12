import DefaultTheme from "@/styles/DefaultTheme";
import SearchIcon from "@mui/icons-material/Search";
import { IconButton, TextField } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import { useRef } from "react";

type SearchbarProps = {
  action: (query: string) => void;
  placeholder? : string
};

const Searchbar = ({action, placeholder}: SearchbarProps) => {
  const inputValue = useRef<HTMLInputElement>(null);

  return (
    <form onSubmit={e => {
      e.preventDefault()
      action(inputValue.current?.value as string)

      e.currentTarget.reset()
    }}>
      <TextField
        inputRef={inputValue}
        type="text"
        placeholder={placeholder ? placeholder : 'Search...'}
        InputProps={{
          style: {
            backgroundColor: "white",
            padding: "0 1rem",
            fontSize: "1.2rem",
          },
          endAdornment: (
            <InputAdornment
              position="end"
              sx={{
                color: DefaultTheme.palette.info.main,
              }}
            >
              <IconButton
                type="submit"
                edge="end"
                color="primary"
                sx={{
                  backgroundColor: DefaultTheme.palette.info.main,
                }}
              >
                <SearchIcon fontSize="large" />
              </IconButton>
            </InputAdornment>
          ),
        }}
        variant="outlined"
      />
    </form>
  );
};

export default Searchbar;
