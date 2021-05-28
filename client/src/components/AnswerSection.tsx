import React from 'react'
import { Card, CardContent, Typography, Grid, Button, TextField } from "@material-ui/core";

const answers =[
    {
        name: "prateek",
        body: " This is answer for every question, Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec qu."
    },
    {
        name: "Sanjay",
        body: " This is answer for every question, Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec qu."
    },
    {
        name: "Abhishek",
        body: " This is answer for every question, Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec qu."
    }
]

const AnswerSection = () => {
    return (
        <div>
            {/* <Card>
                <CardContent> */}
            <Typography variant="h5" style={{ textAlign: 'left' }}>
                Is mental health really required?
                        </Typography>
            <hr />
            {/* </CardContent>
            </Card> */}
                <Button style={{float: 'right'}}>Answer</Button>
                
                <TextField placeholder="Enter Your Answer Here"/>
                <div style={{paddingTop: 30}}>
                {answers.map((value, index)=>{
                    
                return <>
                <Typography style={{ textAlign: 'left', paddingTop: 10 }}> Answered by: {answers[index].name}</Typography>
                <Typography style={{paddingTop: 10, textAlign: 'left', paddingBottom: 10}}>
                    {answers[index].body}
                </Typography>
                <hr style={{width: "75%"}} />
                </>
                
                })}
                </div>
        </div>
    )
}

export default AnswerSection
