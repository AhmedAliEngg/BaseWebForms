import React from 'react'
import { Block } from "baseui/block";
import { Card } from "baseui/card";
import { Heading, HeadingLevel } from 'baseui/heading';
import { FormControlBase } from '../FormControl/FormControlBase';
import { HeaderCard } from '../HeaderCard/HeaderCard';
import { CheckBoxWeb } from '../CheckBoxWeb/CheckBoxWeb';
import { MemberDealHeading } from '../MemberDealHeading/MemberDealHeading';
import { ButtonBaseWeb } from '../ButtonBaseWeb/ButtonBaseWeb';
import { Link } from "react-router-dom";
// import { FieldLabelComponent } from '../FieldLabelComponent/FieldLabelComponent';
export const BaseWebBasic = () => {
    const [number, setNumber] = React.useState("")
    return (
        <Block display="flex" justifyContent="center">
            <Card
                overrides={{ Root: { style: { width: '328px' } } }}
            >
                <Block>
                    <HeaderCard styleLevel="Login in"/>
                </Block>
                <Block>
                    <MemberDealHeading />
                </Block>
                <Block>
                    <FormControlBase label="Email *" type="email" placeholder="Enter your Email" error="Please input a valid email address"/>
                    <FormControlBase label="Password *" type="password" placeholder="Enter your password" error="Please input a valid password" />
                    {/* <FieldLabelComponent/> */}
                </Block>
                <Block>
                    <Block>
                        <CheckBoxWeb />
                    </Block>
                    <Block style={{marginTop:"12px"}}>
                        <ButtonBaseWeb />
                    </Block>
                    
                    <Block>
                        
                        <HeadingLevel >
                            <Heading style={{ fontSize: "12px", fontWeight: "400", lineHeight: "normal", textAlign: "center" }} >
                            <Link to="signup">  Don't have account? Sign up</Link>
                            </Heading>
                        </HeadingLevel>
                        
                    </Block>
                    
                </Block>
            </Card>
        </Block>
    )
}
