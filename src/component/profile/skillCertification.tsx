import React from 'react'
import { Button, Box, TextField, Chip, IconButton, Menu, MenuItem, Dialog, DialogTitle, DialogContent, DialogActions, FormControl, InputLabel, Select, InputAdornment, FilledInput, OutlinedInput } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import AddIcon from '@material-ui/icons/Add';
import CloseIcon from '@material-ui/icons/Close';

interface ChipData {
    key: number;
    label: string;
}

export default function SkillCertification() {

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


    const [chipData, setChipData] = React.useState<ChipData[]>([
        { key: 0, label: 'Graphic Designing' },
        { key: 1, label: 'Marketing' },
    ]);
    const handleDelete = (chipToDelete: ChipData) => () => {
        setChipData((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
    };

    const [moreMenu, setmoreMenuAnchorEl] = React.useState<null | HTMLElement>(null);
    const moreMenuhandleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setmoreMenuAnchorEl(event.currentTarget);
    };
    const moreMenuhandleClose = () => {
        setmoreMenuAnchorEl(null);
    };

    const [addSkillModalopen, setOpen] = React.useState(false);
    const addSkillModalhandleClickOpen = () => {
        setOpen(true);
    };
    const addSkillModalhandleClose = () => {
        setOpen(false);
    };


    return (
        <>
            <div className="tab-title">
                <p>Skills &amp; Certifications</p>
                <span>Professional Skills</span>
            </div>
            <div className="tab-main-content">
                <Autocomplete
                    className="form-control autocomplete-control completed"
                    freeSolo
                    options={skills.map((option) => option.title)}
                    renderInput={(params) => (
                        <TextField {...params} label="Enter your skills" variant="outlined" helperText="Add upto 50 skills" />
                    )}
                />
                <ul className="chips-group">
                    {chipData.map((data) => {
                        return (
                            <li key={data.key}>
                                <Chip
                                    label={data.label}
                                    onDelete={data.label === 'React' ? undefined : handleDelete(data)}
                                    className="primary-chips removable"
                                />
                            </li>
                        );
                    })}
                </ul>

                <ul className="certification-wrapper">
                    <li>
                        <div className="certification-card">
                            <p className="certification-card-header">
                                <span>11 Jun 2019</span>
                                <IconButton aria-controls="more-menu" aria-haspopup="true" onClick={moreMenuhandleClick} aria-label="more" className="btn-iconic" size="small">
                                    <MoreHorizIcon />
                                </IconButton>
                                <Menu
                                    id="more-menu"
                                    anchorEl={moreMenu}
                                    open={Boolean(moreMenu)}
                                    onClose={moreMenuhandleClose}
                                    className="primary-menu"
                                >
                                    <MenuItem onClick={moreMenuhandleClose}>Edit</MenuItem>
                                    <MenuItem onClick={moreMenuhandleClose}>Delete</MenuItem>
                                </Menu>
                            </p>
                            <h6 className="certification-title">Fundamentals of Graphic Design</h6>
                            <span className="certification-from">Coursera</span>
                        </div>
                    </li>
                </ul>

                <Button className="btn btn-iconic-text d-block mb-3" onClick={addSkillModalhandleClickOpen} variant="outlined" color="primary" startIcon={<AddIcon />}><span>Add more</span></Button>

                <Button className="btn btn-iconic-text d-block btn-lg" variant="contained" color="primary"><span>Next</span><img className="ms-xs-2 ms-1" src={require('../../assets/images/arrow-pointing-to-right.svg').default} alt="" /></Button>

                <Dialog open={addSkillModalopen} onClose={addSkillModalhandleClose} fullWidth={true} className="primary-modal" aria-labelledby="Add-Certification-Modal" maxWidth="sm">
                    <DialogTitle>
                        <h6>Add Certification</h6>
                        <IconButton aria-label="close" onClick={addSkillModalhandleClose}>
                            <CloseIcon />
                        </IconButton>
                    </DialogTitle>
                    <DialogContent>
                        <TextField className="form-control" label="Course" variant="outlined" />

                        <TextField className="form-control" label="Organization" variant="outlined" />

                        <TextField className="form-control native-datepicker" label="Date" defaultValue="" type="date" variant="outlined" InputLabelProps={{ shrink: true, }} />

                        <FormControl className="form-control have-suffix" variant="outlined">
                            <InputLabel htmlFor="outlined-adornment-password">Upload Certificate</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-password"
                                labelWidth={130}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <label htmlFor="chooseProfilePic" className="upload-outline-btn">
                                            <input accept="image/*" id="chooseProfilePic" multiple type="file" />
                                            <Button variant="outlined" color="primary" className="btn-sm">Upload</Button>
                                        </label>
                                    </InputAdornment>
                                }
                            />
                        </FormControl>
                    </DialogContent>
                    <DialogActions>
                        <Button className="btn btn-lg" variant="outlined" color="primary" onClick={addSkillModalhandleClose}>Cancel</Button>
                        <Button className="btn btn-lg" onClick={addSkillModalhandleClose} variant="contained" color="primary">Add</Button>
                    </DialogActions>
                </Dialog>
            </div>
        </>
    )

}

const skills = [
    { title: 'Algorithms' },
    { title: 'Analytical Skills' },
    { title: 'Big Data' },
    { title: 'Calculating' },
    { title: 'Compiling Statistics' },
    { title: 'Data Analytics' },
    { title: 'Data Mining' },
    { title: 'Database Design' },
    { title: 'Database Management' },
    { title: 'Documentation' },
    { title: 'Modeling' },
    { title: 'Modification' },
    { title: 'Needs Analysis' },
    { title: 'Quantitative Research' },
    { title: 'Quantitative Reports' },
    { title: 'Statistical Analysis' },
    { title: 'Applications' },
    { title: 'Certifications' },
    { title: 'Coding' },
    { title: 'Computing' },
    { title: 'Configuration' },
    { title: 'Customer Support' },
    { title: 'Debugging' },
    { title: 'Design' },
    { title: 'Development' },
    { title: 'Hardware' },
    { title: 'Implementation' },
    { title: 'Information Technology' },
    { title: 'Infrastructure' },
    { title: 'Languages' },
    { title: 'Maintenance' },
    { title: 'Network Architecture' },
    { title: 'Network Security' },
    { title: 'Networking' },
    { title: 'New Technologies' },
    { title: 'Operating Systems' },
    { title: 'Programming' },
    { title: 'Restoration' },
    { title: 'Security' },
    { title: 'Servers' },
    { title: 'Software' },
    { title: 'Solution Delivery' },
    { title: 'Storage' },
    { title: 'Structures' },
    { title: 'Systems Analysis' },
    { title: 'Technical Support' },
    { title: 'Technology' },
    { title: 'Testing' },
    { title: 'Tools' },
    { title: 'Training' },
    { title: 'Troubleshooting' },
    { title: 'Usability' },
    { title: 'Benchmarking' },
    { title: 'Budget Planning' },
    { title: 'Engineering' },
    { title: 'Fabrication' },
    { title: 'Following Specifications' },
    { title: 'Operations' },
    { title: 'Performance Review' },
    { title: 'Project Planning' },
    { title: 'Quality Assurance' },
    { title: 'Quality Control' },
    { title: 'Scheduling' },
    { title: 'Task Delegation' },
    { title: 'Task Management' },
    { title: 'Blogging' },
    { title: 'Digital Photography' },
    { title: 'Digital Media' },
    { title: 'Facebook' },
    { title: 'Instagram' },
    { title: 'Networking' },
    { title: 'Pinterest' },
    { title: 'SEO' },
    { title: 'Social Media Platforms' },
    { title: 'Twitter' },
    { title: 'Web Analytics' },
    { title: 'Client Relations' },
    { title: 'Email' },
    { title: 'Requirements Gathering' },
    { title: 'Research' },
    { title: 'Subject Matter Experts (SMEs)' },
    { title: 'Technical Documentation' }
];
