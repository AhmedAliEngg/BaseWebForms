import React from 'react'
import { Button, SIZE, SHAPE } from "baseui/button"
import { Table, DIVIDER } from "baseui/table-semantic"
import { Block } from "baseui/block";
export const ButtonBaseWeb = () => {
    return (
        <>
            <Block>
                <Block>
                    <Button
                        size={SIZE.large}
                        shape={SHAPE.square}
                        style={{ backgroundColor: "blue", width: "100%" }}
                        type="submit"
                        
                    >
                        Log in
                    </Button>
                </Block>
                <Block style={{ marginTop: "10px" }}>
                    <Table divider={DIVIDER.horizontal} />
                </Block>
            </Block>
        </>
    )
}
