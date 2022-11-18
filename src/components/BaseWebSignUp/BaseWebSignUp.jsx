import React from 'react'
import { Block } from "baseui/block";
import { Card } from "baseui/card";
import { Heading, HeadingLevel } from 'baseui/heading';
import { HeaderCard } from '../HeaderCard/HeaderCard';
import { MemberDealHeading } from '../MemberDealHeading/MemberDealHeading';
import { CheckBoxSignUp } from '../CheckBoxSignUp/CheckBoxSignUp';
import { FormControlSignUp } from '../FormControlSignUp/FormControlSignUp';
import { ButtonBaseSignUp } from '../ButtonBaseSignUp/ButtonBaseSignUp';
import { Table, DIVIDER } from "baseui/table-semantic";
export const BaseWebSignUp = () => {
  return (
    <Block display="flex" justifyContent="center">
    <Card
        overrides={{ Root: { style: { width: '328px' } } }}
    >
        <Block>
            <HeaderCard styleLevel="Sign up"/>

        </Block>
        <Block>
            <MemberDealHeading />
        </Block>
        <Block>
            <FormControlSignUp label="Email *" type="email" placeholder="example@mail.com"  error="Please input a valid email address"/>
            <FormControlSignUp label="Create a password *" placeholder="at least 8 characters" type="password" error="Please input a valid password" />
            <FormControlSignUp label="Date of birth *" placeholder="DD/MM/YYYY" type="text"  />
        </Block>
        <Block>
            
            <HeadingLevel >
                <Heading style={{ fontSize: "12px", fontWeight: "400", lineHeight: "normal", textAlign: "center" }} >
                    We want to give you a special treat on your birthday
                </Heading>
            </HeadingLevel>
            
        </Block>
        <Block>
            <Block>
                <CheckBoxSignUp/>
            </Block> 
            <Block style={{marginTop:"12px"}}>
                <ButtonBaseSignUp/>
            </Block>
            <Block style={{marginTop:"12px"}}>
                <Table divider={DIVIDER.horizontal} />
            </Block>
           
        </Block>
    </Card>
</Block>
  )
}
