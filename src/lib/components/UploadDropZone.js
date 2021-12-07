import React, {useCallback, useMemo, useState} from 'react'
import {useDropzone} from 'react-dropzone'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { dropzoneBaseStyle, dropzoneActiveStyle, dropzoneAcceptStyle, dropzoneRejectStyle} from './styles'


// Renders the UploadDropzone section of the portal.
// customers - array, optional, defaults to [], represents "customers" state of parent component
// setCustomers - function, required, a function that updates the "customers" state in parent component
// setCustomersLoading - function, required, a function that updates the "customersLoading" state in parent component
// parseCustomerData - function, required, a function that parses the customer data after it's been read by the FileReader

export default function UploadDropzone({
                                           customers=[],
                                           setCustomers,
                                           setCustomersLoading,
                                           parseCustomerData,
                                       }) {
    // set default state for dropzone
    const defaultMessage = "Drag and drop a file to upload some happy campers!"
    const [message, setMessage] = useState(defaultMessage)

    // define a function that will get called when files are dropped into the dropzone
    const onDrop = useCallback((files) => {
        const newCustomers = []

        files.forEach((file) => {
            const reader = new FileReader()

            // set loading state to true when the upload begins
            reader.onloadstart = () => {
                setCustomersLoading(true)
            }

            // set message if upload is aborted
            reader.onabort = () => {
                setMessage("Upload Aborted")
            }

            // set message if upload errors out
            reader.onerror = () => {
                setMessage("Upload Failed")
            }

            // when data is loaded, parse it and add it to the newCustomers array
            // set the message back to default
            reader.onload = () => {
                const data = reader.result
                const parsedData = parseCustomerData({data})
                newCustomers.push(...parsedData)
                setMessage(defaultMessage)
            }

            // when the load has ended (either in success or failure),
            // create a new list of customers by combining the existing customers already uploaded (if any),
            // and the list of freshly parsed customer data from the file(s) you just uploaded.
            // Set the new list in state!
            reader.onloadend = () => {
                const updatedData = customers.concat(newCustomers)
                setCustomers(updatedData)
                setCustomersLoading(false)
            }

            // Instructs the FileReader to read the data as text.
            reader.readAsText(file)
        })

    }, [setCustomers, setCustomersLoading, parseCustomerData, customers])

    // invoke the useDropzone hook and set some configuration
    const {
        getRootProps,
        getInputProps,
        isDragActive,
        isDragAccept,
        isDragReject
    } = useDropzone({onDrop, accept: 'text/plain', maxSize: 1000000}) // 1000000 bytes = 1 megabyte


    // Logic for styling the dropzone depending on the current state
    const style = useMemo(() => ({
        ...dropzoneBaseStyle,
        ...(isDragActive ? dropzoneActiveStyle : {}),
        ...(isDragAccept ? dropzoneAcceptStyle : {}),
        ...(isDragReject ? dropzoneRejectStyle : {})
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
