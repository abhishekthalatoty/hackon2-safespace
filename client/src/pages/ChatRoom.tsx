import React from 'react'
import { TextField, Grid } from '@material-ui/core'
import ChatBubble from './ChatBubble'
import { CardContent } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { Card } from '@material-ui/core';
import { CardActions } from '@material-ui/core';

const uId = "2";

var list = [
    {
        userName: "Prateek",
        userId: "1",
        messageId: "1",
        body: "hey what are you doing man!"
    },
    {
        userName: "Prateek",
        userId: "1",
        messageId: "1",
        body: "hey what are you doing man!"
    },
    {
        userName: "Prateek",
        userId: "1",
        messageId: "1",
        body: "hey what are you doing man!"
    },
    {
        userName: "Prateek",
        userId: "1",
        messageId: "1",
        body: "hey what are you doing man!"
    },
    {
        userName: "Prateek",
        userId: "1",
        messageId: "1",
        body: "hey what are you doing man!"
    },
    {
        userName: "Prateek",
        userId: "1",
        messageId: "1",
        body: "hey what are you doing man!"
    },
    {
        userName: "Prateek",
        userId: "1",
        messageId: "1",
        body: "hey what are you doing man!"
    },
    {
        userName: "Prateek",
        userId: "1",
        messageId: "1",
        body: "hey what are you doing man!"
    },
    {
        userName: "Prateek",
        userId: "1",
        messageId: "1",
        body: "hey what are you doing man!"
    },
    {
        userName: "Prateek",
        userId: "1",
        messageId: "1",
        body: "hey what are you doing man!"
    },
    {
        userName: "Prateek",
        userId: "1",
        messageId: "1",
        body: "hey what are you doing man!"
    },
    {
        userName: "Prateek",
        userId: "1",
        messageId: "1",
        body: "hey what are you doing man!"
    },
    {
        userName: "Sesha",
        userId: "2",
        messageId: "2",
        body: "hey what are you doing man second time!"
    },
    {
        userName: "Sesha",
        userId: "3",
        messageId: "3",
        body: "hey what are you doing man third time!"
    },
    {
        userName: "Sesha",
        userId: "2",
        messageId: "2",
        body: "hey what are you doing man second time!"
    },
    {
        userName: "Sesha",
        userId: "3",
        messageId: "3",
        body: "hey what are you doing man third time!"
    }
]

const ChatRoom = () => {
    return (
        <div style={{ margin: "0px", paddingBottom: 53 }}>

            {
                list.map((value, index) => {
                    if (uId == list[index].userId) {
                        return <>
                            <Grid container justify="flex-end">
                                <Card elevation={3} style={{ backgroundColor: "#ddfada", borderRadius: "17px", padding: 7, float: 'right', width: 400, marginTop: "15px" }} >
                                    <Typography style={{ color: 'grey', textAlign: 'right', marginRight: 10 }}>You</Typography>
                                    <CardContent style={{ padding: 0 }}>
                                        <Typography>Hi this is prateek! how r u?</Typography>
                                    </CardContent>
                                    <CardActions style={{ padding: 0 }}>
                                        <Typography style={{ color: 'grey' }}>12:02pm</Typography>
                                    </CardActions>
                                </Card>
                            </Grid>

                        </>
                    } else {
                        return <>
                            <Grid>
                                <Card elevation={3} style={{ backgroundColor: "#ddfada", borderRadius: "17px", padding: 7, width: 400, marginTop: "15px", paddingRight: "10px" }} >
                                    <Typography style={{ color: 'grey' }}>Prateek Singamsetty</Typography>
                                    <CardContent style={{ padding: 0 }}>
                                        <Typography>Hi this is prateek! how r u?</Typography>
                                    </CardContent>
                                    <CardActions style={{ padding: 0 }}>
                                        <Typography style={{ color: 'grey', marginLeft: 330 }}>12:02pm</Typography>
                                    </CardActions>
                                </Card>
                            </Grid>

                        </>
                    }
                })
            }
            <TextField style={{ position: 'fixed', bottom: "0px", width: '90vw', backgroundColor: 'white' }} id="outlined-basic" placeholder="Enter message" variant="outlined" />
        </div>
    )
}

export default ChatRoom