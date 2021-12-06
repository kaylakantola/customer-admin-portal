import React, {useCallback, useMemo, useState} from 'react'
import {useDropzone} from 'react-dropzone'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const baseStyle = {
    textAlign: 'center',
    padding: '20px',
    borderWidth: 2,
    borderRadius: 2,
    borderColor: '#eeeeee',
    borderStyle: 'dashed',
    backgroundColor: '#fafafa',
    color: '#bdbdbd',
    outline: 'none',
    transition: 'border .24s ease-in-out'
};

const activeStyle = {
    borderColor: '#005825',
    color: '#005825'
};

const acceptStyle = {
    borderColor: '#005825',
    color: '#005825'
};

const rejectStyle = {
    borderColor: '#ff1744',
    color: '#ff1744'
};

export default function UploadDropzone({setCustomers, setCustomersLoading, parseCustomerData}) {

    const [message, setMessage] = useState("Click here, or, drag and drop your happy camper list to start upload (.txt format only) ")


    const onDrop = useCallback((acceptedFiles) => {
        acceptedFiles.forEach((file) => {
            const reader = new FileReader()

            reader.onloadstart = () => {
                setMessage("Upload Started")
                setCustomersLoading(true)
                setCustomers([])
            }

            reader.onabort = () => {
                setMessage("Upload Aborted")
            }

            reader.onerror = () => {
                setMessage("Upload Failed")
            }

            reader.onload = () => {
                const data = reader.result
                const parsedData = parseCustomerData({data})
                setMessage("Upload Success!")
                setCustomers(parsedData)
            }

            reader.onloadend = () => {
                setCustomersLoading(false)
            }

            reader.readAsText(file)
        })

    }, [setCustomers, setCustomersLoading, parseCustomerData])


    const {
        getRootProps,
        getInputProps,
        isDragActive,
        isDragAccept,
        isDragReject
    } = useDropzone({onDrop, accept: 'text/plain'})

    const style = useMemo(() => ({
        ...baseStyle,
        ...(isDragActive ? activeStyle : {}),
        ...(isDragAccept ? acceptStyle : {}),
        ...(isDragReject ? rejectStyle : {})
    }), [
        isDragActive,
        isDragReject,
        isDragAccept
    ]);


    return (
        <Box style={style}>
            <div {...getRootProps()}>
                <input {...getInputProps()} />
                <Typography variant="h5" component="div">
                    {message}
                </Typography>
            </div>
        </Box>
    )
}
