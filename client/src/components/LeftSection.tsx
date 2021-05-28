import React from 'react'
import { Card, Typography, CardContent, CardHeader, CardActions, Grid, Link } from "@material-ui/core";

const questions = [
    {
        "question": "what is ur age 10 years back, plz tell me",
        "questionId": "1",
        "Date": "12/05/21",
        "name": "prateek"
    },
    {
        "question": "Is mental health really required?",
        "questionId": "2",
        "Date": "20/05/21",
        "name": "Sanjay"
    },
    {
        "question": "what is the necesity of having religion?",
        "questionId": "3",
        "Date": "28/05/21",
        "name": "Abhishek"
    },
    {
        "question": "what is ur age 10 years back, plz tell me",
        "questionId": "1",
        "Date": "12/05/21",
        "name": "prateek"
    },
    {
        "question": "Is mental health really required?",
        "questionId": "2",
        "Date": "20/05/21",
        "name": "Sanjay"
    },
    {
        "question": "what is the necesity of having religion?",
        "questionId": "3",
        "Date": "28/05/21",
        "name": "Abhishek"
    }
]

const answers = [{
    "answerId": '1',
    'body': 'This is answer for every question, Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec qu.'

}]

const LeftSection = () => {
    return (
        <div>
            {questions.map((value, index) => {
                return <Card elevation={2} style={{ marginBottom: 20 }}>
                    <CardContent>
                        <Typography style={{ textAlign: "left" }} variant='h5'>
                            {questions[index]['question']}
                        </Typography>
                        <Grid container style={{ marginTop: 5 }}>
                            <Grid xs={6}><Typography style={{ color: 'grey', textAlign: 'left' }} >By {questions[index]['name']}</Typography></Grid>

                            <Grid xs={6}><Typography style={{ color: 'grey', textAlign: 'right' }}>{questions[index]['Date']}</Typography></Grid>
                        </Grid>
                        <Typography style={{textAlign: 'left'}}>
                            <Link href="#">
                                View Answer
                            </Link>
                        </Typography>
                        <Typography style={{ fontSize: 15, textAlign: 'left' }}>{answers[0]['body']}</Typography>
                    </CardContent>
                </Card>
            })}
        </div>
    )
}

export default LeftSection


