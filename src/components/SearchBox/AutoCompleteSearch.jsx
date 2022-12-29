// import fetch from "cross-fetch";
import React, { useEffect } from "react";
import PropTypes from 'prop-types';
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import CircularProgress from "@material-ui/core/CircularProgress";
import { debounce } from "lodash";


export const AutoCompleteSearch = ({ API_URL, resetCount, setSelectedValue, inputLabel, variant, autoSelectFn }) => {
   
    const [open, setOpen] = React.useState(false);
    const [options, setOptions] = React.useState([]);
    const [inputValue, setInputValue] = React.useState('');
    const loading = open && options.length === 0;
    const onChangeHandle = debounce(async value => {
        // use the changed value to make request and then use the result. Which
        console.log(value);
        const response = await fetch(API_URL);
        const data = await response.json();
        const opd = data.map((item) => {
            return ({ label: item.name, value: item.name, inputLabel: inputLabel })
        })
        setOptions(opd);
    }, 500);

    React.useEffect(() => {
        if (!open) {
            setOptions([]);
        }
    }, [open]);



    useEffect(() => {
        // 👇️ don't run on initial render
        if (resetCount !== 0) {
            setInputValue("")
        }
    }, [resetCount]);



    return (
        <>
            <Autocomplete
                id="asynchronous-demo"
                inputValue={inputValue}
                forcePopupIcon={false}
                open={open}
                onOpen={() => {
                    setOpen(true);
                }}
                onClose={() => {
                    setOpen(false);
                }}
                getOptionSelected={(option, value) => option.label === value.label}
                getOptionLabel={option => option.label}

                options={options}
                loading={loading}

                onChange={(e, value) => {
                    autoSelectFn(value)
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
                        label={inputLabel}
                        // variant={variant ? variant : "outlined"}
                        size="small"
                        onChange={(ev) => {
                            if (ev.target.value !== "" || ev.target.value !== null) {
                                setInputValue(ev.target.value)
                                onChangeHandle(ev.target.value)
                            }
                        }
                        }
                        InputProps={{
                            ...params.InputProps,
                            endAdornment: (
                                <React.Fragment>
                                    {loading ? (
                                        <CircularProgress color="inherit" size={18} />
                                    ) : null}
                                    {params.InputProps.endAdornment}
                                </React.Fragment>
                            )
                        }}
                        InputLabelProps={{
                            style: { paddingLeft: '10px', fontSize:"14px" }, 
                         }}
                    />
                )}
            />
        </>
    )
}


AutoCompleteSearch.propTypes = {
    API_URL: PropTypes.string,
    inputLabel: PropTypes.number,
    variant: PropTypes.object,
    autoSelectFn: PropTypes.func
};