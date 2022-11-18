import React from 'react'
import { Block } from "baseui/block";
import { Heading, HeadingLevel } from 'baseui/heading';
import { Table, DIVIDER } from "baseui/table-semantic";
export const MemberDealHeading = () => {
    return (
        <>
            <Block>
                <HeadingLevel>
                    <Heading style={{ fontSize: "14px", fontWeight: "400", lineHeight: "normal", marginTop: "opx" }} >
                        Become a member -- you'll enjoy exculsive deals, offers, invites and rewards
                    </Heading>
                </HeadingLevel>
            </Block>
            <Block>
                <Table divider={DIVIDER.horizontal} />
            </Block>
        </>
    )
}
