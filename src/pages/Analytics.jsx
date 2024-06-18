import React from "react";
import Sidenav from "../components/Sidenav";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Navbar from "../components/Navbar";
import Stack from "@mui/material/Stack";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import StorefrontIcon from "@mui/icons-material/Storefront";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import BarChart from "../charts/BarChart";
import AccordionDash from "../components/AccordionDash";
import GeoChart from "../charts/GeoChart";
import Piechart from "../charts/Piechart";
import Hbarchart from "../charts/Hbarchart";
import CountUp from "react-countup";

export default function Analytics() {
  return (
    <>
      <div className="bgcolor">
        <Navbar />
        <Box height={70} />
        <Box sx={{ display: "flex" }}>
          <Sidenav />
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={5}>
                <Stack spacing={2} direction="row">
                  <Box sx={{ width: "50%" }}>
                    <Card
                      sx={{ height: 19 + "vh", backgroundColor: "#7c4dff" }}
                      className=""
                    >
                      <CardContent>
                        <Typography
                          gutterBottom
                          variant="body2"
                          component="div"
                          sx={{ color: "white" }}
                        >
                          Visitors
                        </Typography>
                        <Typography
                          gutterBottom
                          variant="h5"
                          component="div"
                          sx={{ color: "white" }}
                        >
                          <CountUp delay={0.2} end={164} duration={0.3} />
                        </Typography>
                        <Typography
                          gutterBottom
                          variant="body2"
                          component="div"
                          sx={{ color: "white" }}
                        >
                          Since last day
                        </Typography>
                      </CardContent>
                    </Card>

                    <Card
                      sx={{
                        height: 19 + "vh",
                        marginTop: "16px",
                        backgroundColor: "#7c4dff",
                      }}
                      className=""
                    >
                      <CardContent>
                        <Typography
                          gutterBottom
                          variant="body2"
                          component="div"
                          sx={{ color: "white" }}
                        >
                          Visitors
                        </Typography>
                        <Typography
                          gutterBottom
                          variant="h5"
                          component="div"
                          sx={{ color: "white" }}
                        >
                          <CountUp delay={0.4} end={2382} duration={0.6} />
                        </Typography>
                        <Typography
                          gutterBottom
                          variant="body2"
                          component="div"
                          sx={{ color: "white" }}
                        >
                          Since last month
                        </Typography>
                      </CardContent>
                    </Card>
                  </Box>
                  <Box sx={{ width: "50%", height: "50%" }}>
                    <Card
                      sx={{ height: 19 + "vh", backgroundColor: "#ec407a" }}
                      className=""
                    >
                      <CardContent>
                        <Typography
                          gutterBottom
                          variant="body2"
                          component="div"
                          sx={{ color: "white" }}
                        >
                          Visitors
                        </Typography>
                        <Typography
                          gutterBottom
                          variant="h5"
                          component="div"
                          sx={{ color: "white" }}
                        >
                          <CountUp delay={0.4} end={580} duration={0.6} />
                        </Typography>
                        <Typography
                          gutterBottom
                          variant="body2"
                          component="div"
                          sx={{ color: "white" }}
                        >
                          Since last week
                        </Typography>
                      </CardContent>
                    </Card>

                    <Card
                      sx={{
                        height: 19 + "vh",
                        marginTop: "16px",
                        backgroundColor: "#ec407a",
                      }}
                      className=""
                    >
                      <CardContent>
                        <Typography
                          gutterBottom
                          variant="body2"
                          component="div"
                          sx={{ color: "white" }}
                        >
                          Visitors
                        </Typography>
                        <Typography
                          gutterBottom
                          variant="h5"
                          component="div"
                          sx={{ color: "white" }}
                        >
                          <CountUp delay={0.4} end={285840} duration={0.6} />
                        </Typography>
                        <Typography
                          gutterBottom
                          variant="body2"
                          component="div"
                          sx={{ color: "white" }}
                        >
                          Since last year
                        </Typography>
                      </CardContent>
                    </Card>
                  </Box>
                </Stack>
              </Grid>

              <Grid item xs={7}>
                <Card sx={{ height: 40 + "vh" }}>
                  <CardContent>
                    <Hbarchart />
                  </CardContent>
                </Card>
              </Grid>

              <Box height={16} />
              <Grid container spacing={2}>
                <Grid item xs={8}>
                  <Card sx={{ height: 40 + "vh" }}>
                    <CardContent>
                      <GeoChart />
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={4}>
                  <Card sx={{ height: 40 + "vh" }}>
                    <CardContent>
                      <Piechart />
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </div>
    </>
  );
}
