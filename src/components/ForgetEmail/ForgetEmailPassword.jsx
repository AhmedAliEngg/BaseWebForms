import React from 'react'
import { Block } from "baseui/block";
import { Heading, HeadingLevel } from 'baseui/heading';
import { Table, DIVIDER } from "baseui/table-semantic";
export const ForgetEmailPassword = () => {
  return (
    <>
    <Block>
        <HeadingLevel>
            <Heading style={{ fontSize: "14px", fontWeight: "400", lineHeight: "normal", marginTop: "opx" }} >
                Please enter the email address you used to create account, and we'll send you a link to
                reset your password.
            </Heading>
        </HeadingLevel>
    </Block>
    <Block>
        <Table divider={DIVIDER.horizontal} />
    </Block>
</>
  )
}
