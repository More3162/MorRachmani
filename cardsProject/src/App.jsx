import CustomThemeProvider from "./providers/CustomThemeProvider";
import { BrowserRouter } from "react-router-dom";
import Router from "./routes/Router";
import Layout from "./layout/Layout";
import UserProvider from "./users/providers/UserProvider";
import SnackbarProvider from "./providers/SnackBarProvider";



function App() {

  return (
    <>
      <BrowserRouter>
        <CustomThemeProvider> {/* נותן אפשרות להחליף ערכת נושא */}
          <SnackbarProvider> {/* נותן אפשרות להציג הודעות */}
            <UserProvider> {/* נותן גישה למידע בכל הפרוייקט */}
              <Layout> {/* נותן את העיצוב לכל האתר */}
                <Router />
              </Layout>
            </UserProvider>
          </SnackbarProvider>
        </CustomThemeProvider>
      </BrowserRouter>

    </>
  )
}

export default App
