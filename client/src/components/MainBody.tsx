import React from 'react'
import {Grid} from "@material-ui/core"
import RightSection from './RightSection'
import  LeftSection from "./LeftSection";
import AnswerSection from "./AnswerSection";

const MainBody = () => {
    return (
        <div>
            <Grid container style={{marginTop: 80}} spacing={2}>
                <Grid item xs={9} style={{paddingLeft: 20}}>
                    {/* <LeftSection /> */}
                    <AnswerSection />
                </Grid>
                <Grid item xs={3} >
                    <RightSection/>
                </Grid>
            </Grid>
            
        </div>
    )
}

export default MainBody
