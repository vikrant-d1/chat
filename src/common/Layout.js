import { Outlet } from "react-router-dom";
import ThemeProvider from 'react-bootstrap/ThemeProvider';
import Footer from "./Footer";
import Header from "./Header";


function Layout() {
    return (
<ThemeProvider
  breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
  minBreakpoint="xxs"
>
    <div className="container-fluid">
        <div className="row">
            <div className="col-md-12">
             <Header />
             <Outlet />
             <Footer />
            </div>
        </div>
    </div>
  
</ThemeProvider>

    );
  }

export default Layout