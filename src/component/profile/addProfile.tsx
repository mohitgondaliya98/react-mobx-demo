import React from 'react'
import { Button, Box, Tabs, Tab, TextField, Chip, IconButton, Menu, MenuItem } from '@material-ui/core';
import { Autocomplete, ToggleButton, ToggleButtonGroup } from '@material-ui/lab';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import AddIcon from '@material-ui/icons/Add';

interface TabPanelProps {
    children?: React.ReactNode;
    index: any;
    value: any;
}

interface ChipData {
    key: number;
    label: string;
}

export default function AddProfile() {

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


    return (
        <>
            {/* wrapper start */}
            <div className="wrapper homepage">

                {/* header start */}
                <header>
                    <div className="px-0">
                        <div className="row">
                            <div className="col">
                                <a href="/" className="nav-brand" title="Hubura">
                                    <img src={require('../../assets/images/logo.svg').default} alt="" />
                                </a>
                            </div>
                            <div className="col-auto">
                                <div className="right-handle">
                                    <Button variant="outlined" color="primary">back to home</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                {/* header end */}

                <div className="main-content">
                    <div className="add-profile-stepper-wrapper">
                        <Tabs
                            orientation="vertical"
                            variant="scrollable"
                            className="add-profile-stepper"
                            value={value}
                            onChange={handleChange}
                            aria-label="Vertical tabs example"
                        >
                            <Tab label={
                                <div className="tab-step">
                                    <i>
                                        <img className="default" src={require('../../assets/images/basic-info-grey.svg').default} alt="" />
                                        <img className="active" src={require('../../assets/images/basic-info-primary.svg').default} alt="" />
                                    </i>
                                    <p>Basic Information
                                        <span>About Yourself</span>
                                    </p>
                                </div>
                            } {...a11yProps(0)} />
                            <Tab label={
                                <div className="tab-step">
                                    <i>
                                        <img className="default" src={require('../../assets/images/qualification-grey.svg').default} alt="" />
                                        <img className="active" src={require('../../assets/images/qualification-primary.svg').default} alt="" />
                                    </i>
                                    <p>Qualification
                                        <span>Education &amp; Degree</span>
                                    </p>
                                </div>
                            } {...a11yProps(1)} />
                            <Tab label={
                                <div className="tab-step">
                                    <i>
                                        <img className="default" src={require('../../assets/images/skills-certifications-grey.svg').default} alt="" />
                                        <img className="active" src={require('../../assets/images/skills-certifications-primary.svg').default} alt="" />
                                    </i>
                                    <p>Skills &amp; Certifications
                                        <span>Professional Skills</span>
                                    </p>
                                </div>
                            } {...a11yProps(2)} />
                            <Tab label={
                                <div className="tab-step">
                                    <i>
                                        <img className="default" src={require('../../assets/images/experience-grey.svg').default} alt="" />
                                        <img className="active" src={require('../../assets/images/experience-primary.svg').default} alt="" />
                                    </i>
                                    <p>Experience
                                        <span>Internship &amp; Jobs</span>
                                    </p>
                                </div>
                            } {...a11yProps(3)} />
                            <Tab label={
                                <div className="tab-step">
                                    <i>
                                        <img className="default" src={require('../../assets/images/preferred-jobs-grey.svg').default} alt="" />
                                        <img className="active" src={require('../../assets/images/preferred-jobs-primary.svg').default} alt="" />
                                    </i>
                                    <p>Preferred Jobs
                                        <span>Job location,Timings etc</span>
                                    </p>
                                </div>
                            } {...a11yProps(4)} />
                            <Tab label={
                                <div className="tab-step">
                                    <i>
                                        <img className="default" src={require('../../assets/images/additional-info-grey.svg').default} alt="" />
                                        <img className="active" src={require('../../assets/images/additional-info-primary.svg').default} alt="" />
                                    </i>
                                    <p>Additional Info
                                        <span>General Details</span>
                                    </p>
                                </div>
                            } {...a11yProps(5)} />
                        </Tabs>


                        <TabPanel value={value} index={0}>
                            <div className="add-profile-tab-content">
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
                            </div>
                        </TabPanel>
                        <TabPanel value={value} index={1}>
                            <div className="add-profile-tab-content">
                                <div className="tab-title">
                                    <p>Qualification</p>
                                    <span>Education &amp; Degree</span>
                                </div>
                                <div className="tab-main-content">

                                </div>
                            </div>
                        </TabPanel>
                        <TabPanel value={value} index={2}>
                            <div className="add-profile-tab-content">
                                <div className="tab-title">
                                    <p>Skills &amp; Certifications</p>
                                    <span>Professional Skills</span>
                                </div>
                                <div className="tab-main-content">
                                    <Autocomplete
                                        className="form-control"
                                        freeSolo
                                        options={skills.map((option) => option.title)}
                                        renderInput={(params) => (
                                            <TextField {...params} label="Enter your skills" variant="outlined" helperText="Add upto 50 skills" />
                                        )}
                                    />
                                    <ul className="added-skills">
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
                                                        keepMounted
                                                        open={Boolean(moreMenu)}
                                                        onClose={moreMenuhandleClose}
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

                                    <Button className="btn btn-iconic-text d-block mb-3" variant="outlined" color="primary" startIcon={<AddIcon />}><span>Add more</span></Button>

                                    <Button className="btn btn-iconic-text d-block btn-lg" variant="contained" color="primary"><span>Next</span><img className="ms-xs-2 ms-1" src={require('../../assets/images/arrow-pointing-to-right.svg').default} alt="" /></Button>

                                </div>
                            </div>
                        </TabPanel>
                        <TabPanel value={value} index={3}>
                            <div className="add-profile-tab-content">
                                <div className="tab-title">
                                    <p>Experience</p>
                                    <span>Internship &amp; Jobs</span>
                                </div>
                                <div className="tab-main-content">

                                </div>
                            </div>
                        </TabPanel>
                        <TabPanel value={value} index={4}>
                            <div className="add-profile-tab-content">
                                <div className="tab-title">
                                    <p>Preferred Jobs</p>
                                    <span>Job location,Timings etc</span>
                                </div>
                                <div className="tab-main-content">

                                </div>
                            </div>
                        </TabPanel>
                        <TabPanel value={value} index={5}>
                            <div className="add-profile-tab-content">
                                <div className="tab-title">
                                    <p>Additional Info</p>
                                    <span>General Details</span>
                                </div>
                                <div className="tab-main-content">

                                </div>
                            </div>
                        </TabPanel>
                    </div>
                </div>
            </div>
            {/* wrapper end */}

            {/* Footer start */}
            <footer>
                <div className="primary-footer">
                    <div className="container-xl">
                        <div className="row">
                            <div className="col-sm-auto">
                                <a href="/" className="nav-brand" title="Hubura">
                                    <img src={require('../../assets/images/logo.svg').default} alt="" />
                                </a>
                            </div>
                            <div className="col-sm d-flex justify-content-sm-end align-items-center">
                                <ul className="footer-links">
                                    <li>
                                        <a href="/privacy-policy" title="Privacy Policy">Privacy Policy</a>
                                    </li>
                                    <li>
                                        <a href="/term-and-condition" title="Terms and Conditions">Terms and Conditions</a>
                                    </li>
                                    <li>
                                        <a href="#" title="Cookie Policy">Cookie Policy</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="secondary-footer">
                    <div className="container-xl">
                        <div className="row">
                            <div className="col-auto">
                                <p>&copy; Hubura. All Rights Reserved</p>
                            </div>
                            <div className="col">
                                <ul className="social-links">
                                    <li>
                                        <a href="#" title="Facebook">
                                            <img src={require('../../assets/images/facebook.svg').default} alt="facebook" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" title="Linkedin">
                                            <img src={require('../../assets/images/linkedin.svg').default} alt="linkedin" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            {/* Footer end */}
        </>
    )

}


function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    {children}
                </Box>
            )}
        </div>
    );
}

function a11yProps(index: any) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
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