import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';

export default function Achievements() {

    const hackathons = [
        {
            position: '1st Runner Up',
            name: 'Dotslash',
            prize: 'Winner of Agora Prize for building a live Video System and storing it on drive'
        },
        {
            position: 'Winner',
            name: 'HackVerse',
            prize: 'Winner of Matic Prize at HackVerse for building a Decentralized Storage system'
        },
        {
            position: 'Winner',
            name: 'ETHIndia',
            prize: 'Winner of Matic Prize at ETHIndia - one of biggest Blockchain hackathons in the world'
        },
        {
            position: 'Winner',
            name: 'Ami Hacks',
            prize: 'Winner of AmiHacks Matic Prize for building decentralized survey system'
        },
        {
            position: 'Top 50 Ideas',
            name: 'Hackerramp - Myntra Hack',
            prize: 'Top 50 Ideas in India for Myntra Hackathon'
        }
    ]

    return (
        <div>
            <div className="herotitle">Achievements...</div>
            <Timeline style={{marginTop: 30}} position="alternate">
                {
                    hackathons.map((item, key) => (
                        <TimelineItem key={key}>
                            <TimelineOppositeContent
                                sx={{ m: 'auto 0' }}
                                variant="body2"
                                color="text.secondary"
                                >
                                {item.position}
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                            <TimelineConnector />
                            <TimelineDot>
                            </TimelineDot>
                            <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent sx={{ py: '12px', px: 2 }}>
                            <Typography variant="h6" component="span">
                                {item.name}
                            </Typography>
                            <Typography>{item.prize}</Typography>
                            </TimelineContent>
                        </TimelineItem>
                    ))
                }
            </Timeline>
        </div>
        
    );
}
