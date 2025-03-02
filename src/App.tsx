import SideBar from "./components/sidebar";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TopBar from "./components/topbar";
import Dashboard from "./pages/dashboard/page";
import Team from "./pages/team/page";
import Calendar from "./pages/calendar/page";
import BarChartPage from "./pages/chart/barPage";
import PieChartPage from "./pages/chart/piePage";
import LineChartPage from "./pages/chart/linePage";
import Contact from "./pages/contact/page";
import LoginPage from "./pages/auth/login";

function App() {
  const { theme, colorMode } = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <div className="app">
            <SideBar />
            <main className="content">
              <TopBar />
              <Routes>
                <Route
                  path="/"
                  element={<Dashboard />}
                />
                <Route
                  path="/team"
                  element={<Team />}
                />
                <Route
                  path="/contact"
                  element={<Contact />}
                />
                <Route
                  path="/login"
                  element={<LoginPage />}
                />
                <Route
                  path="/calendar"
                  element={<Calendar />}
                />

                <Route
                  path="/bar_chart"
                  element={<BarChartPage />}
                />
                <Route
                  path="/line_chart"
                  element={<LineChartPage />}
                />
                <Route
                  path="/pie_chart"
                  element={<PieChartPage />}
                />
              </Routes>
            </main>
          </div>
        </Router>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
