import React from 'react'
import { Button, SIZE, SHAPE } from "baseui/button"
import { Block } from "baseui/block";
export const ButtonForgetPassword = () => {
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
                Submit
            </Button>
        </Block>
    </Block>
</>
  )
}
