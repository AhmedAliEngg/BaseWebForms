import React from 'react'
import { Checkbox, LABEL_PLACEMENT } from "baseui/checkbox";
import { Block } from "baseui/block";
import { Link} from "react-router-dom";
export const CheckBoxWeb = () => {
    const [checked, setChecked] = React.useState(false);
  return (
    <>
     <Block display="flex" justifyContent="space-between">
                        <Block>
                            <Checkbox
                                checked={checked}
                                onChange={e => setChecked(e.target.checked)}
                                labelPlacement={LABEL_PLACEMENT.right}>
                                Remember me
                            </Checkbox>
                        </Block>
                        <Link to="forgetpassword">
                        <Block>
                            Forget password?
                        </Block>
                        </Link>
                    </Block>
    </>
  )
}
