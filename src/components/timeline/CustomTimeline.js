import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineSeparator
} from "@material-ui/lab"
import { Typography } from "@mui/material"
import React from "react"
import "./timeline.css"
import PersonIcon from "@mui/icons-material/Person"
import LaptopMacIcon from "@mui/icons-material/LaptopMac"
import HotelIcon from "@mui/icons-material/Hotel"
import RepeatIcon from "@mui/icons-material/Repeat"
import NoteAltIcon from "@mui/icons-material/NoteAlt"
import LightbulbIcon from "@mui/icons-material/Lightbulb"

const CustomTimeline = () => {
  return (
    <div className="timeline">
      <Timeline position="">
        <TimelineItem>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="danger">
              <PersonIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h6" component="span">
              Date of Birth
            </Typography>
            <Typography>25 June, 2000</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot>
              <NoteAltIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h6" component="span">
              Chemistry
            </Typography>
            <Typography>Bsc 3rd Year.</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="primary">
              <LaptopMacIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h6" component="span">
              Code
            </Typography>
            <Typography>Because it&apos;s awesome!</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="danger">
              <LightbulbIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h6" component="span">
              Learn New Things.
            </Typography>
            <Typography>Because it&apos;s inetresting!</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="primary" variant="outlined">
              <HotelIcon />
            </TimelineDot>
            <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h6" component="span">
              Sleep
            </Typography>
            <Typography>Because , need rest</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
            <TimelineDot color="secondary">
              <RepeatIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h6" component="span">
              Repeat
            </Typography>
            <Typography>Because this is the life I love!</Typography>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </div>

    // tried to make the design //
    // <Timeline className={"timeline"}>
    //   {/* header */}
    //   <TimelineItem className={"timeline_firstItem"}>
    //     <TimelineSeparator>
    //       <TimelineDot className={"timeline_dot_header"} />
    //       <TimelineDot>{icon}</TimelineDot>
    //       <TimelineConnector />
    //     </TimelineSeparator>
    //     <TimelineContent>
    //       <Typography variant="h6" className={"timeline_header"}>
    //         {"title"}
    //       </Typography>
    //     </TimelineContent>
    //   </TimelineItem>

    //   {children}
    //   {/* remaining items */}
    //   <TimelineItem>
    //     <CustomTimelineSeparator></CustomTimelineSeparator>
    //     <TimelineContent>Code</TimelineContent>
    //   </TimelineItem>
    // </Timeline>
  )
}

// export const CustomTimelineSeparator = () => {
//   return (
//     <TimelineSeparator className={"saparator_padding"}>
//       <TimelineDot variant={"outlined"} className={"timeline_dot"} />
//     </TimelineSeparator>
//   )
// }

export default CustomTimeline
