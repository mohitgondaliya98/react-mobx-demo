import React from 'react'
import { Button, TextField, Chip, FormControl, InputLabel, Select, MenuItem, FormControlLabel, Checkbox } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';

interface preferredJob {
    key: number;
    label: string;
}

interface preferredJobchipsLocation {
    key: number;
    label: string;
}

interface jobTypechips {
    key: number;
    label: string;
}


export default function PreferredJob() {

    const [preferredJob, setChipData] = React.useState<preferredJob[]>([
        { key: 0, label: 'Graphic Designing' },
        { key: 1, label: 'Marketing' }
    ]);

    const [preferredJobchipsLocation, setLocationChipData] = React.useState<preferredJobchipsLocation[]>([
        { key: 0, label: 'Banglore' },
        { key: 1, label: 'Mumbai' }
    ]);

    const [jobTypechips, setJobTypeChipData] = React.useState<jobTypechips[]>([
        { key: 0, label: 'Full-Time' },
        { key: 1, label: 'Part-Time' }
    ]);

    const handleDelete = (chipToDelete: preferredJob) => () => {
        setChipData((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
    };

    const locationhandleDelete = (chipToDelete: preferredJobchipsLocation) => () => {
        setLocationChipData((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
    };

    const jobTypehandleDelete = (chipToDelete: preferredJobchipsLocation) => () => {
        setJobTypeChipData((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
    };




    const [state, setState] = React.useState({
        Freelancer: true,
        Foreign: true
    });

    const checkboxhandleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };



    return (
        <>
            <div className="tab-title">
                <p>Preferred Jobs</p>
                <span>Job location,Timings etc</span>
            </div>
            <div className="tab-main-content">

                <Autocomplete
                    className="form-control autocomplete-control completed"
                    freeSolo
                    options={preferredJobs.map((option) => option.title)}
                    renderInput={(params) => (
                        <TextField {...params} label="Preferred Jobs" variant="outlined" />
                    )}
                />
                <ul className="chips-group">
                    {preferredJob.map((data) => {
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

                <Autocomplete
                    className="form-control autocomplete-control completed"
                    freeSolo
                    options={preferredJobLocation.map((option) => option.title)}
                    renderInput={(params) => (
                        <TextField {...params} label="Location" variant="outlined" />
                    )}
                />
                <ul className="chips-group">
                    {preferredJobchipsLocation.map((data) => {
                        return (
                            <li key={data.key}>
                                <Chip
                                    label={data.label}
                                    onDelete={data.label === 'React' ? undefined : locationhandleDelete(data)}
                                    className="primary-chips removable"
                                />
                            </li>
                        );
                    })}
                </ul>

                <JobTypeSelect></JobTypeSelect>
                <ul className="chips-group">
                    {jobTypechips.map((data) => {
                        return (
                            <li key={data.key}>
                                <Chip
                                    label={data.label}
                                    onDelete={data.label === 'React' ? undefined : jobTypehandleDelete(data)}
                                    className="primary-chips removable"
                                />
                            </li>
                        );
                    })}
                </ul>

                <div className="primary-checkbox form-control">
                    <input type="checkbox" className="primary-checkbox-input" id="freeLancer" />
                    <label className="primary-checkbox-label" htmlFor="freeLancer">Available as freelancer</label>
                </div>

                <RatePerHour></RatePerHour>

                <div className="primary-checkbox form-control">
                    <input type="checkbox" className="primary-checkbox-input" id="foreignVisa" />
                    <label className="primary-checkbox-label" htmlFor="foreignVisa">I have foreign country visa</label>
                </div>

                <div className="form-control-group">
                    <label className="form-control-group-label" htmlFor="country-group">Add Countries</label>
                    <div className="row">
                        <div className="col-sm-6">
                            <Country></Country>
                        </div>
                        <div className="col-sm-6">
                            <VisaType></VisaType>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-6">
                            <Country></Country>
                        </div>
                        <div className="col-sm-6">
                            <VisaType></VisaType>
                        </div>
                    </div>
                </div>

                <Button className="btn btn-iconic-text d-block btn-lg" variant="contained" color="primary"><span>Next</span><img className="ms-xs-2 ms-1" src={require('../../assets/images/arrow-pointing-to-right.svg').default} alt="" /></Button>

            </div>
        </>
    )

}

const preferredJobs = [
    { title: 'Marketing Coordinator' },
    { title: 'Medical Assistant' },
    { title: 'Web Designer' },
    { title: 'Graphic Designer' },
    { title: 'Project Manager' },
    { title: 'Librarian' }
];


const preferredJobLocation = [
    { title: 'Mumbai' },
    { title: 'Chennai' },
    { title: 'Ahmedabad' },
    { title: 'Banglore' },
    { title: 'Delhi' },
    { title: 'Hydrabad' }
];

function JobTypeSelect() {
    const [option, setOption] = React.useState('');

    const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setOption(event.target.value as string);
    };
    return (
        <FormControl variant="outlined" className="form-control">
            <InputLabel>Job Type</InputLabel>
            <Select
                value={option}
                onChange={handleChange}
                MenuProps={{
                    disableScrollLock: true,
                }}
                label="Job Type"
            >
                <MenuItem value="" disabled>Select</MenuItem>
                <MenuItem value={"Remote"}>Remote</MenuItem>
                <MenuItem value={"FullTime"}>Full-Time</MenuItem>
                <MenuItem value={"PartTime"}>Part-Time</MenuItem>
            </Select>
        </FormControl>
    );
}


function RatePerHour() {
    const [option, setOption] = React.useState('');

    const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setOption(event.target.value as string);
    };
    return (
        <FormControl variant="outlined" className="form-control">
            <InputLabel>Rate Per Hour</InputLabel>
            <Select
                value={option}
                onChange={handleChange}
                MenuProps={{
                    disableScrollLock: true,
                }}
                label="Rate Per Hour"
            >
                <MenuItem value="" disabled>Select</MenuItem>
                <MenuItem value={"500"}>500</MenuItem>
                <MenuItem value={"1000"}>1000</MenuItem>
                <MenuItem value={"2000"}>2000</MenuItem>
            </Select>
        </FormControl>
    );
}

function Country() {
    const [option, setOption] = React.useState('');

    const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setOption(event.target.value as string);
    };
    return (
        <FormControl variant="outlined" className="form-control">
            <InputLabel>Country</InputLabel>
            <Select
                value={option}
                onChange={handleChange}
                MenuProps={{
                    disableScrollLock: true,
                }}
                label="Country"
            >
                <MenuItem value="" disabled>Select</MenuItem>
                <MenuItem value={"USA"}>USA</MenuItem>
                <MenuItem value={"India"}>India</MenuItem>
                <MenuItem value={"South-Africa"}>South-Africa</MenuItem>
            </Select>
        </FormControl>
    );
}

function VisaType() {
    const [option, setOption] = React.useState('');

    const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setOption(event.target.value as string);
    };
    return (
        <FormControl variant="outlined" className="form-control">
            <InputLabel>Visa Type</InputLabel>
            <Select
                value={option}
                onChange={handleChange}
                MenuProps={{
                    disableScrollLock: true,
                }}
                label="Visa Type"
            >
                <MenuItem value="" disabled>Select</MenuItem>
                <MenuItem value={"B1 B2"}>B1 B2</MenuItem>
                <MenuItem value={"W1"}>W1</MenuItem>
                <MenuItem value={"H1"}>H1</MenuItem>
            </Select>
        </FormControl>
    );
}
