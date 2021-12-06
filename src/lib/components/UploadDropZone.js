import React, {useCallback, useEffect, useMemo, useState} from 'react'
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

export default function UploadDropzone({
                                           customers,
                                           setCustomers,
                                           setCustomersLoading,
                                           parseCustomerData,
                                           acceptedCustomerFiles,
                                           setAcceptedCustomerFiles,
                                           rejectedCustomerFiles,
                                           setRejectedCustomerFiles
                                       }) {
    const defaultMessage = "Click here, or, drag and drop your happy camper list to start upload (.txt format only) "
    const [message, setMessage] = useState(defaultMessage)


    const onDrop = useCallback((files) => {
        const newCustomers = []

        files.forEach((file) => {
            const reader = new FileReader()

            reader.onloadstart = () => {
                setCustomersLoading(true)
            }

            reader.onabort = (e) => {
                console.log('onabort', {e})
                setMessage("Upload Aborted")
            }

            reader.onerror = (e) => {
                console.log('onerror', {e})
                setMessage("Upload Failed")
            }

            reader.onload = () => {
                const data = reader.result
                const parsedData = parseCustomerData({data})
                newCustomers.push(...parsedData)
                setMessage(defaultMessage)
            }

            reader.onloadend = () => {
                const updatedData = customers.concat(newCustomers)
                setCustomers(updatedData)
                setCustomersLoading(false)
            }

            reader.readAsText(file)
        })

    }, [setCustomers, setCustomersLoading, parseCustomerData, customers])


    const {
        acceptedFiles,
        fileRejections,
        getRootProps,
        getInputProps,
        isDragActive,
        isDragAccept,
        isDragReject
    } = useDropzone({onDrop, accept: 'text/plain', maxSize: 5000000})

    useEffect(() => {
        const allAcceptedFiles = acceptedCustomerFiles.concat(acceptedFiles)
        setAcceptedCustomerFiles(allAcceptedFiles)
        const allRejectedFiles = rejectedCustomerFiles.concat(fileRejections)
        setRejectedCustomerFiles(allRejectedFiles)
    }, [
        acceptedFiles,
        fileRejections,
    ])

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
