import { Typography } from '@mui/material';
import React from 'react';
import './SideBar.css';
import { timelineItemClasses,Timeline,TimelineSeparator,TimelineDot,TimelineItem,TimelineConnector,TimelineContent } from '@mui/lab'
export const SideBar = () => {
  return (
    <div className="profile container_shadow">
        <div className="profile_name">
            <Typography className="name"><h5>Arpit Blagan</h5></Typography>
            <Typography className="title">Software Developer</Typography>
        </div>
        <figure className="profile_image">
            <img src="data:image/jpeg;base64,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" 
            alt="" />
        </figure>
        <div >
            <Timeline sx={{
        [`& .${timelineItemClasses.root}:before`]: {
          flex: 0,
          padding: 0,
        },
      }} >
                <TimelineItem>
                    <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent><h6>Birth Date:</h6> 27-08-2001</TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent><h6>Email:</h6> arpitblagan27@gmail.com</TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent><h6>Github:</h6> <a href="https://github.com/ArpitBlagan">ArpitBlagan</a></TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent><h6>LinkedIn:</h6> <a href="https://www.linkedin.com/in/arpit-blagan-79081b193/" target="_blank">ArpitBlagan</a></TimelineContent>
                </TimelineItem>
            </Timeline>
        </div>
    </div>
  )
}
