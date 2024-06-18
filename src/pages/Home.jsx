import React from "react";
import Sidenav from "../components/Sidenav";
import Navbar from "../components/Navbar";
import AccordionDash from "../components/AccordionDash";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Stack from "@mui/material/Stack";
import "../Dash.css";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import BarChart from "../charts/BarChart";
import CountUp from "react-countup";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import GroupIcon from "@mui/icons-material/Group";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
export default function Home() {
  return (
    <>
      <div className="bgcolor">
        <Navbar />
        <Box height={70} />
        <Box sx={{ display: "flex" }}>
          <Sidenav />
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={8}>
                <Stack spacing={2} direction="row">
                  <Card
                    sx={{
                      width: "100%",
                      height: 150,
                      backgroundColor: "#7c4dff",
                    }}
                    className="earnings"
                  >
                    <CardContent>
                      <div className="iconstyle">
                        <CurrencyExchangeIcon />
                      </div>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        sx={{ color: "#ffffff" }}
                      >
                        $ <CountUp delay={0.2} end={85} duration={0.3} /> k
                      </Typography>
                      <Typography
                        gutterBottom
                        variant="body2"
                        component="div"
                        sx={{ color: "#ccd1d1" }}
                      >
                        Today's Money
                      </Typography>
                    </CardContent>
                  </Card>
                  <Card
                    sx={{
                      width: "100%",
                      height: 150,
                      backgroundColor: "#ec407a",
                    }}
                    className="orders"
                  >
                    <CardContent>
                      <div className="iconstyle">
                        <ShoppingCartIcon />
                      </div>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        sx={{ color: "#ffffff" }}
                      >
                        ${" "}
                        <CountUp delay={0.2} end={(110, 846)} duration={0.3} />
                      </Typography>
                      <Typography
                        gutterBottom
                        variant="body2"
                        component="div"
                        sx={{ color: "#ccd1d1" }}
                      >
                        Sales
                      </Typography>
                    </CardContent>
                  </Card>
                </Stack>
              </Grid>
              <Grid item xs={12} md={4}>
                <Stack spacing={2}>
                  <Card
                    className="totalincome"
                    sx={{ backgroundColor: "#ff9800" }}
                  >
                    <Stack spacing={2} direction="row">
                      <div className="iconstyle">
                        <PeopleAltIcon />
                      </div>
                      <div className="paddingall">
                        <span className="pricetitle" sx={{ color: "white" }}>
                          2644
                        </span>
                        <br />
                        <span className="pricesubtitle" sx={{ color: "white" }}>
                          TODAY'S USERS
                        </span>
                      </div>
                    </Stack>
                  </Card>
                  <Card>
                    <Stack spacing={2} direction="row">
                      <div className="iconstyleblack">
                        <GroupIcon />
                      </div>
                      <div className="paddingalltotalincome">
                        <span className="pricetitle">+5,273</span>
                        <br />
                        <span className="pricesubtitle">NEW CLIENTS</span>
                      </div>
                    </Stack>
                  </Card>
                </Stack>
              </Grid>
            </Grid>

            <Box height={20} />

            <Grid container spacing={2}>
              <Grid item xs={12} md={8}>
                <Card sx={{ height: "60vh" }}>
                  <CardContent>
                    <BarChart />
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} md={4}>
                <Card sx={{ height: "60vh" }}>
                  <CardContent>
                    <div className="paddingall">
                      <span className="pricetitle">Popular Products</span>
                    </div>
                    <AccordionDash />
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </div>
    </>
  );
}
