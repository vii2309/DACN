import { createTheme } from '@mui/material';
import { blue, grey, indigo } from '@mui/material/colors';

export default createTheme({
    palette: {
        primary: {
            light: grey[500],
            main: grey[900],
            contrastText: "#ffffff",
        },
        info: {
            main: blue[600],
            light: blue[500],
            contrastText: "#ffffff",
        },
        secondary: {
            main: "#1a237e",
            light: "#1a237e",
            contrastText:"#ffffff"
        }
    },
    typography: {
        fontFamily: [
            '"Google Sans"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
            '"Noto Color Emoji"'
        ].join(','),
    },
    components: {
        MuiLink: {
            styleOverrides: {
                root: {
                    textDecoration: 'none !important',
                }
            }
        },
        MuiButtonGroup: {
            styleOverrides: {
                root: {
                    '& .MuiButtonGroup-grouped': {
                        '&:hover': {
                            border: 'none'
                        }
                    }
                }
            }
        },
        MuiCheckbox: {
            styleOverrides: {
                root: {
                    color: '#000',
                    '&.Mui-checked': {
                        color: '#43a047'
                    },
                    '&.MuiCheckbox-indeterminate': {
                        color: '#039be5'
                    }
                },
            }
        },
        MuiRadio: {
            styleOverrides: {
                root: {
                    color: '#bfbfbf',
                    '&.Mui-checked': {
                        color: '#ef5350'
                    }
                },
                colorPrimary: {
                    '&$checked': {
                        color: '#ef5350',
                    },
                },
                
            }
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: "capitalize",
                    padding: 12,
                    minHeight: 42,
                    backgroundColor: "#000001F",
                    color: "#FFFFFF",
                    "&.MuiButton-outlined": {
                        color: "#00001F",
                        backgroundColor: "#FFFFFF"
                    },
                    '&.MuiButton-containedPrimary': {
                        ".MuiButton-startIcon": {
                            color: "#FFFFFF",
                            ".MuiSvgIcon-root": {
                                color: "#FFFFFF",
                            }
                        }
                    },
                    "&.MuiButton-sizeSmall": {
                        height: 42,
                        minWidth: 150
                    },
                    "&.MuiButton-containedError": {
                        backgroundColor: "#ef5350",
                        color: "#FFFFFF",
                        ".MuiButton-startIcon": {
                            color: "#FFFFFF",
                            ".MuiSvgIcon-root": {
                                color: "#FFFFFF",
                            }
                        }
                    },
                    "&.Mui-disabled": {
                        backgroundColor: "#77768099",
                        pointerEvent: "none"
                    },
                    ".MuiButton-startIcon": {
                        ".MuiCircularProgress-root": {
                            color:"#777680"
                        }
                    }
                }
            }
        },
        MuiAppBar: {
            styleOverrides: {
                root: {
                    backgroundColor: '#ffffff',
                    boxShadow: 'unset',
                    color: grey[800]
                }
            }
        },
        MuiMenu: {
            styleOverrides: {
                root: {
                    '&#menu': {
                        '&-page_type, &-page_id, &-domain': {
                            '& .MuiMenuItem-root': {
                                fontSize: 13
                            }
                        }
                    }
                }
            }
        },
        MuiListItemButton: {
            styleOverrides: {
                root: {
                    '&.active': {
                        backgroundColor: grey[200]
                    }
                }
            }
        },
        MuiSelect: {
            styleOverrides: {
                select: {
                    '&.MuiInputBase-inputSizeSmall': {
                        minHeight: 'unset'
                    }
                }
            }
        },
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    '&.MuiInputBase-sizeSmall': {
                        fontSize: 13
                    }
                }
            }
        },
        MuiSkeleton: {
            styleOverrides: {
                root: {
                    "&.MuiSkeleton-rectangular": {
                        borderRadius: "7px"
                    }
                }
            }
        },
        MuiList: {
            styleOverrides: {
                root: {
                    "a": {
                        textDecoration: "none"
                    },
                    ".MuiMenuItem-dense": {
                        height: 32,
                        ".MuiTypography-root": {
                            fontSize: 14,
                            color: "#777680",
                            "&:hover": {
                                color: "#00001F"
                            }
                        }
                    }
                }
            }
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    "a": {
                        textDecoration: "none"
                    }
                }
            }
        },
        MuiTypography: {
            styleOverrides: {
                root: {
                    textDecoration: "none",
                    "&.MuiFormControlLabel-label": {
                        fontSize: 14,
                        margin: "auto 0"
                    }
                }
            }
        },
        MuiGrid: {
            styleOverrides: {
                root: {
                    ".MuiBox-root &.CardOne": {
                        height: '100%',
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'center',
                        bgcolor: '#FFF',
                        borderRadius: '7px'
                    },
                    ".fr-wrapper": {
                        "a[style='padding: 10px 25px;color:#FFF;text-decoration:none;background:#EF5350;display:block;font-size:14px;font-family:sans-serif;']": {
                            display: "none"
                        }
                    },
                    ".fr-view": {
                        "p[style='text-align: center; font-size: 14px; margin-top: 30px; opacity: 0.65; font-family: sans-serif;']": {
                            display: "none"
                        }
                        // display: "none !important"
                    }
                }
            }
        },
        MuiInputBase: {
            styleOverrides: {
                root: {
                    "&.MuiInputBase-sizeSmall": {
                        height: 42,
                        fontSize: 14
                    },
                    "&.MuiOutlinedInput-root": {
                        borderColor: indigo[900]
                    }
                }
            }
        },
        MuiFormHelperText: {
            styleOverrides: {
                root: {
                    "&.Mui-error": {
                        fontSize: 12,
                        marginLeft: 14,
                        color: "#ef5350"
                    }
                }
            }
        },
        MuiPopper: {
            styleOverrides: {
                root: {
                    ".MuiPickersPopper-paper .MuiPickersLayout-root .MuiPickersLayout-contentWrapper .MuiDateRangeCalendar-root": {
                        "div[style='position: absolute; pointer-events: none; color: rgba(130, 130, 130, 0.62); z-index: 100000; width: 100%; text-align: center; bottom: 50%; right: 0px; letter-spacing: 5px; font-size: 24px;']": {
                            display: "none"
                        }
                    }
                }
            }
        },
        MuiSvgIcon: {
            styleOverrides: {
                root: {
                    "&.MuiSvgIcon-fontSizeSmall": {
                        color: "rgba(0, 0, 0, 0.38)",
                        width: 16,
                        height: 16,
                        margin: 'auto'
                    },
                    "&.MuiSvgIcon-colorError": {
                        "&:hover": {
                            color: "#ef5350"
                        }
                    },
                    "&.MuiSvgIcon-colorPrimary": {
                        "&:hover": {
                            color: blue[600]
                        }
                    }
                }
            }
        },
        MuiDialogActions: {
            styleOverrides: {
                root: {
                    padding: "0 24px 24px 24px",
                }
            }
        },
        MuiFormControlLabel: {
            styleOverrides: {
                root: {
                    "[color='info']": {
                        "&.MuiTypography-root": {
                            color: "#ef5350 !important"
                        }
                    }
                }
            }
        },
        MuiFormControl: {
            styleOverrides: {
                root: {
                    ".MuiOutlinedInput-root": {
                        backgroundColor: "#FFFFFF"
                    }
                }
            }
        },
        MuiIconButton: {
            styleOverrides: {
                root: {
                    "&.MuiIconButton-sizeSmall": {
                        height: 28,
                        width: 28
                    }
                }
            }
        },
        MuiTabs: {
            styleOverrides: {
                root: {
                    ".MuiTabs-indicator": {
                        color: "#1a237e"
                    }
                }
            }
        },
        MuiAvatar: {
            styleOverrides: {
                root: {
                    height: 38,
                    width: 38,
                    fontSize: 14
                }
            }
        },
    }
});
