import React from 'react'
import { Button, TextField } from '@material-ui/core';
import { ToggleButton, ToggleButtonGroup } from '@material-ui/lab';


export default function BasicInformation() {

    const [value, setValue] = React.useState(0);
    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        setValue(newValue);
    };

    const [alignment, setAlignment] = React.useState('');
    const handleAlignment = (event: React.MouseEvent<HTMLElement>, newAlignment: string | null) => {
        if (newAlignment !== null) {
            setAlignment(newAlignment);
        }
    };

    return (
        <>
            <div className="tab-title">
                <p>Basic Information</p>
                <span>About Yourself</span>
            </div>
            <div className="tab-main-content">
                <div className="choose-profile-pic">
                    <i>
                        <img src={require('../../assets/images/user-grey.svg').default} className="default" alt="" />
                        <img src={require('../../assets/images/user-grey.svg').default} className="uploaded-img d-none" alt="" />
                    </i>
                    <div>
                        <label htmlFor="chooseProfilePic" className="upload-outline-btn">
                            <input accept="image/*" id="chooseProfilePic" multiple type="file" />
                            <Button variant="outlined" color="primary">Choose File</Button>
                        </label>
                        <span>jpg or png. Max file size 500 KB</span>
                    </div>
                </div>
                <TextField className="form-control" label="Name" variant="outlined" />
                <TextField className="form-control" label="Current Designation" variant="outlined" />
                <TextField className="form-control" label="Company" variant="outlined" />
                <TextField className="form-control" label="Email ID" variant="outlined" />

                <div className="radio-group">
                    <label>Gender</label>
                    <ToggleButtonGroup
                        value={alignment}
                        exclusive
                        onChange={handleAlignment}
                        aria-label="text alignment"
                        className="gender-toggle"
                    >
                        <ToggleButton value="left" aria-label="left aligned" title="Male">
                            <img src={require('../../assets/images/male-black.svg').default} className="default" alt="" />
                            <img src={require('../../assets/images/male-primary.svg').default} className="active" alt="" />
                        </ToggleButton>
                        <ToggleButton value="center" aria-label="centered aligned" title="Female">
                            <img src={require('../../assets/images/female-black.svg').default} className="default" alt="" />
                            <img src={require('../../assets/images/female-primary.svg').default} className="active" alt="" />
                        </ToggleButton>
                        <ToggleButton value="right" aria-label="right aligned" title="Other">
                            <img src={require('../../assets/images/unisex-black.svg').default} className="default" alt="" />
                            <img src={require('../../assets/images/unisex-primary.svg').default} className="active" alt="" />
                        </ToggleButton>
                    </ToggleButtonGroup>
                </div>

                <TextField className="form-control" label="Address" variant="outlined" />

                <TextField label="Profile Summary" className="form-control" multiline rows={3} variant="outlined" />

                <Button className="btn btn-iconic-text btn-lg" variant="contained" color="primary"><span>Next</span><img className="ms-xs-2 ms-1" src={require('../../assets/images/arrow-pointing-to-right.svg').default} alt="" /></Button>
            </div>
        </>
    )

}

