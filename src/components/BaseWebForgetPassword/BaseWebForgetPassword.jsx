import React from 'react'
import { Block } from "baseui/block";
import { Card } from "baseui/card";
import { Heading, HeadingLevel } from 'baseui/heading';
import { FormControlBase } from '../FormControl/FormControlBase';
import { HeaderCard } from '../HeaderCard/HeaderCard';
import { CheckBoxWeb } from '../CheckBoxWeb/CheckBoxWeb';
import { MemberDealHeading } from '../MemberDealHeading/MemberDealHeading';
import { ButtonBaseWeb } from '../ButtonBaseWeb/ButtonBaseWeb';
import { FormControlForgetP } from '../FormControlForget/FormControlForgetP';
import { ForgetEmailPassword } from '../ForgetEmail/ForgetEmailPassword';
import { ButtonForgetPassword } from '../ButtonForget/ButtonForgetPassword';

export const BaseWebForgetPassword = () => {
  return (
    <Block display="flex" justifyContent="center">
            <Card
                overrides={{ Root: { style: { width: '328px' } } }}
            >
                <Block>
                    {/* <HeaderCard styleLevel="Login in"/> */}
                    <HeaderCard styleLevel="Forget Password?"/>
                </Block>
                <Block>
                    <ForgetEmailPassword/>
                </Block>
                <Block>
                    <FormControlForgetP label="Email *" type="email"  error="Please input a valid email address"/>
                    
                </Block>
                <Block>
                    <Block>
                        <ButtonForgetPassword/>
                    </Block>
                </Block>
            </Card>
        </Block>
  )
}
