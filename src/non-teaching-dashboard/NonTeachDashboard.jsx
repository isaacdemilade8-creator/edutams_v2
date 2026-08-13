import React from "react";
import {
    Box,
    Container,
    Grid,
    Typography,
} from "@mui/material";

import TaskAltOutlinedIcon from "@mui/icons-material/TaskAltOutlined";
import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";
import FolderOutlinedIcon from "@mui/icons-material/FolderOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import BusinessOutlinedIcon from "@mui/icons-material/BusinessOutlined";

// Dashboard Components
import StatsCard from "./components/stats-card";
import MyProfile from "./components/my-profile";
import SchoolCalendar from "./components/School-calendar";
import ActivityLog from "./components/Activity-log";
import QuickAccess from "./components/Quick-access";


const NonTeachDashboard = () => {

    /*
    |--------------------------------------------------------------------------
    | Dashboard Statistics
    |--------------------------------------------------------------------------
    |
    | These are temporary frontend values.
    |
    | Later, these values will come from your Laravel backend/API.
    |
    */

    const statistics = [
        {
            value: "12",
            title: "Tasks Completed",
            subtitle: "This Week",
            progress: 85,
            progressLabel: "85% of assigned tasks",
            icon: <TaskAltOutlinedIcon />,
            iconColor: "#159a72",
            iconBackground: "#e8f8f3",
            progressColor: "#159a72",
        },

        {
            value: "8",
            title: "Requests Resolved",
            subtitle: "This Week",
            progress: 80,
            progressLabel: "80% resolution rate",
            icon: <AssignmentOutlinedIcon />,
            iconColor: "#7446c8",
            iconBackground: "#f2ebff",
            progressColor: "#8b5cf6",
        },

        {
            value: "15",
            title: "Documents Uploaded",
            subtitle: "This Week",
            progress: 60,
            progressLabel: "3 new uploads",
            icon: <FolderOutlinedIcon />,
            iconColor: "#2563eb",
            iconBackground: "#eaf2ff",
            progressColor: "#5797e6",
        },

        {
            value: "68",
            title: "Days in School",
            subtitle: "This Term",
            progress: 68,
            progressLabel: "68% of school days",
            icon: <CalendarMonthOutlinedIcon />,
            iconColor: "#e58b16",
            iconBackground: "#fff5e7",
            progressColor: "#e9a33b",
        },

        {
            value: "6",
            title: "Departments",
            subtitle: "In the school",
            progress: 100,
            progressLabel: "Across all levels",
            icon: <BusinessOutlinedIcon />,
            iconColor: "#159a9a",
            iconBackground: "#e7f8f8",
            progressColor: "#52b6b2",
        },
    ];


    /*
    |--------------------------------------------------------------------------
    | Dashboard
    |--------------------------------------------------------------------------
    */

    return (
        <Box
            sx={{
                minHeight: "100vh",
                width: "100%",
                backgroundColor: "#f8fafb",
            }}
        >

            {/* ================================================================
                MAIN CONTAINER
            ================================================================ */}

            <Container
                maxWidth={false}
                sx={{
                    width: "100%",
                    maxWidth: "1440px",
                    mx: "auto",

                    px: {
                        xs: 1.5,
                        sm: 2.5,
                        md: 3,
                        lg: 4,
                        xl: 5,
                    },

                    py: {
                        xs: 2,
                        sm: 2.5,
                        md: 3,
                        lg: 4,
                    },
                }}
            >

                {/* ============================================================
                    DASHBOARD HEADER
                ============================================================ */}

                <Box
                    sx={{
                        mb: {
                            xs: 2.5,
                            sm: 3,
                            md: 3.5,
                        },
                    }}
                >
                    <Typography
                        component="h1"
                        sx={{
                            fontSize: {
                                xs: "20px",
                                sm: "23px",
                                md: "26px",
                                lg: "28px",
                            },

                            fontWeight: 700,

                            color: "#101828",

                            lineHeight: 1.25,

                            letterSpacing: "-0.4px",
                        }}
                    >
                        Good morning, Mr. Tunde. 👋
                    </Typography>

                    <Typography
                        sx={{
                            mt: 0.7,

                            fontSize: {
                                xs: "11px",
                                sm: "12px",
                                md: "13px",
                                lg: "14px",
                            },

                            color: "#667085",

                            lineHeight: 1.5,
                        }}
                    >
                        Here's an overview of your activities and updates.
                    </Typography>
                </Box>


                {/* ============================================================
                    STATISTICS CARDS
                ============================================================ */}

                <Grid
                    container
                    spacing={{
                        xs: 1.5,
                        sm: 2,
                        md: 2,
                    }}
                    sx={{
                        mb: {
                            xs: 2,
                            sm: 2.5,
                            md: 3,
                        },
                    }}
                >

                    {statistics.map((stat, index) => (
                        <Grid
                            key={index}
                            size={{
                                xs: 12,
                                sm: 6,
                                md: 4,
                                lg: 2.4,
                            }}
                        >
                            <StatsCard
                                value={stat.value}
                                title={stat.title}
                                subtitle={stat.subtitle}
                                progress={stat.progress}
                                progressLabel={stat.progressLabel}
                                icon={stat.icon}
                                iconColor={stat.iconColor}
                                iconBackground={stat.iconBackground}
                                progressColor={stat.progressColor}
                            />
                        </Grid>
                    ))}

                </Grid>


                {/* ============================================================
                    MAIN CONTENT
                ============================================================ */}

                <Grid
                    container
                    spacing={{
                        xs: 1.5,
                        sm: 2,
                        md: 2.5,
                        lg: 3,
                    }}
                >

                    {/* ========================================================
                        MY PROFILE
                    ======================================================== */}

                    <Grid
                        size={{
                            xs: 12,
                            lg: 4,
                        }}
                    >
                        <MyProfile />
                    </Grid>


                    {/* ========================================================
                        SCHOOL CALENDAR
                    ======================================================== */}

                    <Grid
                        size={{
                            xs: 12,
                            lg: 4,
                        }}
                    >
                        <SchoolCalendar />
                    </Grid>


                    {/* ========================================================
                        ACTIVITY LOG
                    ======================================================== */}

                    <Grid
                        size={{
                            xs: 12,
                            lg: 4,
                        }}
                    >
                        <ActivityLog />
                    </Grid>

                </Grid>


                {/* ============================================================
                    QUICK ACCESS
                ============================================================ */}

                <Box
                    sx={{
                        mt: {
                            xs: 1.5,
                            sm: 2,
                            md: 2.5,
                            lg: 3,
                        },
                    }}
                >
                    <QuickAccess />
                </Box>

            </Container>
        </Box>
    );
};


export default NonTeachDashboard;