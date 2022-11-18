import React from 'react'
import { KeySquare } from 'iconsax-react';
import DeleteAlt from 'baseui/icon/delete-alt'
import { Block } from "baseui/block";
import { Heading, HeadingLevel } from 'baseui/heading';
export const HeaderCard = (props) => {
    return (
        <>
            <Block >
                <Block display="flex" justifyContent="space-between" alignItems="center">
                    <Block display="flex" justifyContent="left" alignItems="center">
                        <Block>
                            <KeySquare
                                size="15"
                                color="#FF8A65"
                            />
                        </Block>
                        <Block>
                            <HeadingLevel >
                                <Heading  style={{ fontSize: "15px", fontWeight: "600", lineHeight: "normal" }} >
                                    {props.styleLevel}
                                </Heading>
                            </HeadingLevel>
                        </Block>
                    </Block>
                    <Block>
                        <DeleteAlt />
                    </Block>
                </Block>
            </Block>
        </>
    )
}
