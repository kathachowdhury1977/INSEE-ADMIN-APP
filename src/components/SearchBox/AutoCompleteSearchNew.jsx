// import fetch from "cross-fetch";
import React, { useEffect } from "react";
import PropTypes from 'prop-types';
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { debounce } from "lodash";
// import "./searchStyle.scss"

export const AutoCompleteSearchNew = ({ OPTIONS_TO_OBJECT, forcePopupIcon, INITIAL_VALUE, resetCount, setSelectedValue, inputLabel, variant, autoSelectFn, name, callSmartApiFn, isSmartSearch,error }) => {
    const [open, setOpen] = React.useState(false);
    const [inputValue, setInputValue] = React.useState(INITIAL_VALUE);

    const onChangeHandle = debounce(async value => {
        console.log("Typing : ", value)
        if (isSmartSearch) {
            callSmartApiFn(value)
        }
    }, 500);

    useEffect(() => {
        // 👇️ don't run on initial render
        if (resetCount !== 0) {
            setInputValue("")
        }
    }, [resetCount]);

    for (let obj of OPTIONS_TO_OBJECT) {
        obj["name"] = name
    }

    return (
        <>
            <Autocomplete
                size="small"
                className="autoComplete"
                id="asynchronous-demo"
                inputValue={inputValue}
                forcePopupIcon={forcePopupIcon}
                open={open}
                onOpen={() => {
                    setOpen(true);
                }}
                onClose={() => {
                    setOpen(false);
                }}
                autoComplete={false}
                disableClearable={false}
                getOptionSelected={(option, value) => option.label === value.label}
                getOptionLabel={option => option.label}

                options={OPTIONS_TO_OBJECT}

                onChange={(e, value) => {

                    autoSelectFn(value, name)
                    if (value && value.label) {
                        setInputValue(value.label)
                    } else {
                        setInputValue("")
                    }
                    setSelectedValue(value)
                }
                }
                renderInput={params => (
                    <TextField
                        {...params}
                        size="small"
                        label={inputLabel}
                        variant={variant ? variant : "standard"}
                        onChange={(ev) => {
                            if (ev.target.value !== "" || ev.target.value !== null) {
                                setInputValue(ev.target.value)
                                onChangeHandle(ev.target.value)
                            }
                        }
                        }
                        InputLabelProps={{
                            style: { paddingLeft: '10px', fontSize: "15px" },
                        }}
                        error={error}
                        helperText={error}
                    />
                )}
            />
        </>
    )
}


AutoCompleteSearchNew.propTypes = {
    inputLabel: PropTypes.number,
    variant: PropTypes.object,
    autoSelectFn: PropTypes.func
};