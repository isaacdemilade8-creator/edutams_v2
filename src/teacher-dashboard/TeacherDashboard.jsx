import { Box, Grid, Stack, Typography, Avatar } from "@mui/material";
import FormatQuoteRoundedIcon from "@mui/icons-material/FormatQuoteRounded";
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";

import ClassesOverview from "./components/ClassesOverview";
import QuickActions from "./components/QuickActions";
import Analytics from "./components/Analytics";
import RecentClassActivity from "./components/RecentClassActivity";
import StatCards from "./components/StatCards";

// Mock data — replace with the signed-in teacher's real name/stats once the API is ready.
const teacher = {
  name: "Mr. John",
  classesToday: 4,
  assignmentsPending: 12,
};

const quote = {
  text: "A good teacher can inspire hope, ignite the imagination, and instill a love of learning.",
  author: "Brad Henry",
};

function DashboardHeader() {
  return (
    <Grid container spacing={2.5} alignItems="stretch">
      <Grid size={{ xs: 12, md: 7 }}>
        <Box
          sx={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            py: 0.5,
          }}
        >
          <Typography sx={{ fontSize: { xs: 26, md: 29 }, fontWeight: 700, letterSpacing: -0.6, fontFamily: "Open Sans" }}>
            Good morning, {teacher.name}! 👋
          </Typography>
          <Typography sx={{ fontSize: 13.5, color: "text.primary", mt: 0.5, fontFamily: "Open Sans" }}>
            You have {teacher.classesToday} classes today and {teacher.assignmentsPending}{" "}
            assignments pending.
          </Typography>
        </Box>
      </Grid>

      <Grid size={{ xs: 12, md: 5 }}>
        <Box
          sx={{
            bgcolor: "#f8fafc",
            border: "1px solid",
            borderColor: "grey.200",
            borderRadius: 3,
            p: 2,
            height: "100%",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Stack direction="row" spacing={2} alignItems="center" sx={{ width: "100%" }}>
            <FormatQuoteRoundedIcon sx={{ color: "primary.main", fontSize: 24, flexShrink: 0 }} />
            <Box sx={{ flex: 1, minWidth: 0 }}>
              <Typography sx={{ fontSize: 13, fontStyle: "italic", lineHeight: 1.45, color: "text.primary", fontFamily: "Open Sans" }}>
                {quote.text}
              </Typography>
              <Typography sx={{ fontSize: 12, color: "text.secondary", mt: 0.5, fontFamily: "Open Sans"  }}>
                — {quote.author}
              </Typography>
            </Box>
            <Avatar
              variant="rounded"
              sx={{
                width: 56,
                height: 56,
                bgcolor: "#e0f2fe",
                color: "#1d4ed8",
                borderRadius: 2,
                flexShrink: 0,
              }}
            >
              <SchoolRoundedIcon />
            </Avatar>
          </Stack>
        </Box>
      </Grid>
    </Grid>
  );
}

export default function TeacherDashboard() {
  return (
    <Box sx={{ bgcolor: "#f3f6fb", minHeight: "100vh", p: { xs: 2, md: 2.5 }, display: "flex", justifyContent: "center" }}>
      <Box sx={{ width: "100%", maxWidth: 1460 }}>
        <Stack spacing={2.25} sx={{ '@media (max-width: 600px)': { spacing: 1.75 } }}>
          <DashboardHeader />

          <ClassesOverview />

          <QuickActions />

          <Grid container spacing={2.5} alignItems="stretch">
            <Grid size={{ xs: 12, lg: 8 }}>
              <Analytics />
            </Grid>
            <Grid size={{ xs: 12, lg: 4 }}>
              <RecentClassActivity />
            </Grid>
          </Grid>

          <StatCards />
        </Stack>
      </Box>
    </Box>
  );
}
