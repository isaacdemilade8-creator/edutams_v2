import { Box, Grid, Stack, Typography } from "@mui/material";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";
import QuizOutlinedIcon from "@mui/icons-material/QuizOutlined";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import TrendingUpOutlinedIcon from "@mui/icons-material/TrendingUpOutlined";
import EmojiEventsOutlinedIcon from "@mui/icons-material/EmojiEventsOutlined";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

// Mock data — replace with real aggregate stats once the API is wired up.
const stats = [
  {
    id: "students",
    value: "128",
    label: "Total Students",
    sub: "Across all classes",
    icon: PeopleAltOutlinedIcon,
    color: "#2563eb",
    bg: "#dbeafe",
  },
  {
    id: "assignments",
    value: "12",
    label: "Assignments",
    sub: "Pending grading",
    icon: AssignmentOutlinedIcon,
    color: "#7c3aed",
    bg: "#ede9fe",
  },
  {
    id: "quizzes",
    value: "5",
    label: "Quizzes",
    sub: "Scheduled",
    icon: QuizOutlinedIcon,
    color: "#2563eb",
    bg: "#dbeafe",
  },
  {
    id: "attendance",
    value: "92%",
    label: "Overall Attendance",
    sub: "This Term",
    icon: CheckCircleOutlinedIcon,
    color: "#16a34a",
    bg: "#dcfce7",
    trend: { direction: "up", value: "5.2%" },
  },
  {
    id: "score",
    value: "74%",
    label: "Average Score",
    sub: "This Term",
    icon: TrendingUpOutlinedIcon,
    color: "#e11d48",
    bg: "#ffe4e6",
    trend: { direction: "up", value: "6.4%" },
  },
  {
    id: "underperforming",
    value: "7",
    label: "Underperforming",
    sub: "Students",
    icon: EmojiEventsOutlinedIcon,
    color: "#0d9488",
    bg: "#ccfbf1",
    trend: { direction: "down", value: "1" },
  },
];

export default function StatCards() {
  return (
    <Grid container spacing={2}>
      {stats.map((stat) => {
        const Icon = stat.icon;
        const TrendIcon = stat.trend?.direction === "up" ? ArrowUpwardIcon : ArrowDownwardIcon;
        const trendColor = stat.trend?.direction === "up" ? "success.main" : "error.main";

        return (
          <Grid key={stat.id} size={{ xs: 6, sm: 4, md: 2 }}>
            <Box
              sx={{
                bgcolor: "#fff",
                border: "1px solid",
                borderColor: "grey.200",
                borderRadius: 3,
                p: 2,
                height: "100%",
              }}
            >
              <Stack direction="row" spacing={1.5} alignItems="center">
                <Box
                  sx={{
                    width: 40,
                    height: 40,
                    borderRadius: 2,
                    bgcolor: stat.bg,
                    color: stat.color,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <Icon sx={{ fontSize: 21 }} />
                </Box>
                <Box sx={{ minWidth: 0 }}>
                  <Stack direction="row" spacing={0.5} alignItems="baseline">
                    <Typography sx={{ fontWeight: 800, fontSize: 18, lineHeight: 1.2 }}>{stat.value}</Typography>
                    {stat.trend && (
                      <Stack
                        direction="row"
                        alignItems="center"
                        sx={{ color: trendColor, fontSize: 11 }}
                      >
                        <TrendIcon sx={{ fontSize: 12 }} />
                        <Typography sx={{ fontSize: 11, fontWeight: 700, color: "inherit" }}>
                          {stat.trend.value}
                        </Typography>
                      </Stack>
                    )}
                  </Stack>
                  <Typography sx={{ fontSize: 12.5, fontWeight: 600, lineHeight: 1.25 }}>
                    {stat.label}
                  </Typography>
                  <Typography sx={{ fontSize: 11, color: "text.secondary" }}>
                    {stat.sub}
                  </Typography>
                </Box>
              </Stack>
            </Box>
          </Grid>
        );
      })}
    </Grid>
  );
}
