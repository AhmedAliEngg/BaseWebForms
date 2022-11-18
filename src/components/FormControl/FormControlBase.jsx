import React from 'react'
import { FormControl } from "baseui/form-control";
import { Block } from "baseui/block";
import { Input } from "baseui/input";
import { validate as validateEmail } from 'email-validator';
import { useStyletron } from 'baseui';
import { Alert } from 'baseui/icon';

function Negative() {
    const [css, theme] = useStyletron();
    return (
        <div
            className={css({
                display: 'flex',
                alignItems: 'center',
                paddingRight: theme.sizing.scale500,
                color: theme.colors.negative400,
            })}
        >
            <Alert size="18px" />
        </div>
    );
}
export const FormControlBase = (props) => {
    const validPassword = new RegExp('^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$')
    const [value, setValue] = React.useState();
    const [isValid, setIsValid] = React.useState(false);
    const [isVisited, setIsVisited] = React.useState(false);
    const shouldShowError = !isValid && isVisited;
    const onChange = ({ target: { value } }) => {
        setIsValid(validateEmail(value));
        setValue(value);
        setIsValid(validPassword(value))
    }


    return (
        <>
            <Block>
                <form onSubmit={(e) => e.preventDefault()}>
                    <FormControl
                        label={props.label}
                        error={
                            shouldShowError
                                ? props.error
                                : null
                        }
                    >

                        <Input
                            id="email-input-id"
                            value={value}
                            onChange={onChange}
                            onBlur={() => setIsVisited(true)}
                            error={shouldShowError}
                            overrides={shouldShowError ? { After: Negative } : {}}
                            type={props.type}
                            required
                            placeholder={props.placeholder}
                            pattern={'^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$'}
                        />

                    </FormControl>

                </form>

            </Block>

        </>
    )
}
