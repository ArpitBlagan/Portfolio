import { Container,Grid } from "@mui/material";
import {Header} from './Component/Header';
import {SideBar} from "./Component/SideBar";
import {Footer}  from "./Component/Footer";
import {Resume} from './Component/Resume';
import {Portfolio} from './Component/Portfolio';
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import "./App.css";
import {Cp} from './Component/Cp';
function App(){
    return <Container className="val">
        <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={3} lg={4} >
                <SideBar/>
            </Grid>
            <Grid item xs>
                <Router><Header/>
                    <Routes>
                        <Route path="/" element={<Resume/>}/>
                        <Route path="/portfolio" element={<Portfolio/>}/>
                        <Route path="/cp" element={<Cp/>}/>
                    </Routes>
                </Router>
                <Footer/>
            </Grid>
        </Grid>
    </Container>
}
export default App;