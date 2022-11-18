import React from 'react'
import { Checkbox, LABEL_PLACEMENT } from "baseui/checkbox";
import { Block } from "baseui/block";
export const CheckBoxSignUp = () => {
    const [checked, setChecked] = React.useState(false);
  return (
    <Block >
    <Checkbox
        checked={checked}
        onChange={e => setChecked(e.target.checked)}
        labelPlacement={LABEL_PLACEMENT.right}
        >
        Subcribe to newsletter
    </Checkbox>
</Block>
  )
}
