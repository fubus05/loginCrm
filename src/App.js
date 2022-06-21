import { ThemeProvider, createTheme } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import Login from "./screens/Login";

const App = () => {
  const theme = createTheme({
    typography: {
      h3:{fontFamily: 'IBM Plex Sans', fontSize: '32px'},
      p:{fontFamily: 'IBM Plex Sans', color: '#8D98AF', fontSize: '14px'},
      a: {fontFamily: 'IBM Plex Sans', color: '#1E86FF', fontSize: '14px'},
      sep: {fontFamily: 'IBM Plex Sans', color: '#8D98AF', fontSize: '14px'},
      primary: {fontFamily: 'IBM Plex Sans', color: '#081131', fontSize: '14px'},
      secondary: {fontFamily: 'IBM Plex Sans', color: '#1E86FF', fontSize: '14px'}
    },
    InputLabel: {
      label: {fontFamily: 'IBM Plex Sans', color: '#121F3E'}
    }
  })
  return (
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/" element={<Login />}/>
        </Routes>
      </ThemeProvider>
  );
}

export default App;
