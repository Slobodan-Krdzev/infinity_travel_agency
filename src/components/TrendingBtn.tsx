import DefaultTheme from "@/styles/DefaultTheme";
import { Button } from "@mui/material";

type BtnProps = {
  text: string;
  filter: string;
  filterHandler: (filter: string) => void;
  activeFilter: string;
};

const TrendingBtn = ({ text, filter, filterHandler,activeFilter }: BtnProps) => {
 
  return (
    <Button
      variant={activeFilter === filter ? 'contained' : 'outlined'}
      color="info"
      sx={{
        color:(activeFilter === filter ? 'white' : DefaultTheme.palette.common.black) ,
        borderSize: 2,
        "@media (max-width:1000px)": {
          fontSize: "20px",
          lineHeight: "25px",
          marginBottom: "10px",
          
        },
      }}
      onClick={() => {
        filterHandler(filter)
      }}
    >
      {text}
    </Button>
  );
};

export default TrendingBtn;
