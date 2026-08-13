import { Box, Grid, Stack, Typography, ButtonBase } from "@mui/material";
import GroupAddOutlinedIcon from "@mui/icons-material/GroupAddOutlined";
import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import CloudUploadOutlinedIcon from "@mui/icons-material/CloudUploadOutlined";
import EditNoteOutlinedIcon from "@mui/icons-material/EditNoteOutlined";
import AssessmentOutlinedIcon from "@mui/icons-material/AssessmentOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import CampaignOutlinedIcon from "@mui/icons-material/CampaignOutlined";

// Mock data — wire each action's onClick up to real handlers/routes later.
const actions = [
  {
    id: "attendance",
    label: "Take Attendance",
    sub: "Mark class attendance",
    icon: GroupAddOutlinedIcon,
    color: "#0d9488",
    bg: "#ccfbf1",
  },
  {
    id: "assignment",
    label: "Create Assignment",
    sub: "Assign new task",
    icon: AssignmentOutlinedIcon,
    color: "#7c3aed",
    bg: "#ede9fe",
  },
  {
    id: "quiz",
    label: "Create Quiz",
    sub: "Build a new quiz",
    icon: HelpOutlineOutlinedIcon,
    color: "#ea580c",
    bg: "#ffedd5",
  },
  {
    id: "upload",
    label: "Upload Resource",
    sub: "Share learning materials",
    icon: CloudUploadOutlinedIcon,
    color: "#2563eb",
    bg: "#dbeafe",
  },
  {
    id: "scores",
    label: "Enter Scores",
    sub: "Input test or exam scores",
    icon: EditNoteOutlinedIcon,
    color: "#e11d48",
    bg: "#ffe4e6",
  },
  {
    id: "reports",
    label: "Class Reports",
    sub: "Generate class report",
    icon: AssessmentOutlinedIcon,
    color: "#0f766e",
    bg: "#e2e8f0",
  },
  {
    id: "timetable",
    label: "View Timetable",
    sub: "See full timetable",
    icon: CalendarMonthOutlinedIcon,
    color: "#334155",
    bg: "#e2e8f0",
  },
  {
    id: "announcement",
    label: "Send Announcement",
    sub: "Notify students",
    icon: CampaignOutlinedIcon,
    color: "#7c3aed",
    bg: "#ede9fe",
  },
];

export default function QuickActions() {
  return (
    <Box
      sx={{
        bgcolor: "#fff",
        border: "1px solid",
        borderColor: "grey.200",
        borderRadius: 3,
        p: 2.5,
      }}
    >
      <Typography sx={{ fontWeight: 800, fontSize: 16, mb: 2, letterSpacing: -0.2 }}>Quick Actions</Typography>

      <Grid container spacing={0.9} columns={8}>
        {actions.map((action) => {
          const Icon = action.icon;
          return (
            <Grid key={action.id} size={{ xs: 6, sm: 4, md: 1, lg: 1 }}>
              <ButtonBase
                onClick={() => {
                  // TODO: hook up navigation / handler for `${action.id}`
                }}
                sx={{
                  width: "100%",
                  height: "100%",
                  minHeight: 88,
                  p: 1,
                  borderRadius: 2,
                  border: "1.5px solid",
                  borderColor: action.color,
                  bgcolor: `${action.color}14`,
                  textAlign: "center",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  transition: "background-color 120ms ease, border-color 120ms ease",
                  "&:hover": { bgcolor: `${action.color}1a`, borderColor: action.color },
                }}
              >
                <Stack spacing={1} alignItems="center" sx={{ width: "100%" }}>
                  <Box
                    sx={{
                      width: 35,
                      height: 35,
                      borderRadius: 1.75,
                      bgcolor: action.bg,
                      color: action.color,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Icon sx={{ fontSize: 20 }} />
                  </Box>
                  <Box sx={{ width: "100%" }}>
                    <Typography sx={{ fontSize: 11.5, fontWeight: 700, lineHeight: 1.25 }}>
                      {action.label}
                    </Typography>
                    <Typography sx={{ fontSize: 10.5, color: "text.secondary", lineHeight: 1.25, mt: 0.2 }}>
                      {action.sub}
                    </Typography>
                  </Box>
                </Stack>
              </ButtonBase>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}
