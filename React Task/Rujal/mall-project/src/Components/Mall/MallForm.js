import React, { useState } from 'react'
import { Fab, Grid, TextField, Typography, Button, Avatar } from '@material-ui/core'
import { Add } from '@material-ui/icons';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import ShopForm from '../Shop/ShopForm';
import { firebaseFile } from '../../firebase/config';
import { addMallData, getMallData } from '../../redux/actions/mall';
import UploadFile from '../UploadFile';
import { deleteFile } from '../../firebase/fireStorage';
import { useParams } from 'react-router';
import { EDIT_MALL } from '../../redux/actionType'

const defaultData = {
    mall_name: "",
    mall_address: "",
    mall_image: null,
    shops: [{ shop_name: "", shop_description: "", images: [] }]
}


function MallForm() {

    const dispatch = useDispatch()
    const { editMode, malls } = useSelector(state => state.mallReducer, shallowEqual)
    const { id } = useParams()
    const [data, setData] = useState(defaultData)
    const [mallImage, setMallImage] = useState(0)

    const handleData = (e) => setData(th => ({ ...th, ...{ [e.target.name]: e.target.value } }))

    React.useEffect(() => {
        if (id) {
            dispatch({ type: EDIT_MALL })
            const mall = malls.find(x => x.id === id)
            mall && setData(mall)
        }
    }, [id, dispatch, malls])

    React.useEffect(() => {
        dispatch(getMallData())
    }, [dispatch])

    const handleImage = async (e) => {
        data.mall_image && await deleteFile(data.mall_image.name)
        const file = e.target.files[0]
        const uniqueName = Math.random() + file.name + Math.random()
        const storageRef = firebaseFile.ref(uniqueName)
        storageRef.put(file).on("state_changed", snapshot => {
            var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            setMallImage(progress)
        }, error => {

        }, async () => {
            const url = await storageRef.getDownloadURL()
            setData(th => ({ ...th, mall_image: { url, name: uniqueName } }))
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (editMode) {

        } else {
            dispatch(addMallData(data))
            setData(defaultData)
            setMallImage(0)
        }

    }
    return (
        <Grid container spacing={2}>
            <Grid item sm={12}>
                <Typography variant="h5" component="h5" color="secondary" style={{ textAlign: "center" }}>
                    {editMode ? "Edit" : "Add"} Mall
                </Typography>
            </Grid>
            <form onSubmit={handleSubmit}>
                <Grid container
                    spacing={2}
                    style={{ width: "40%", margin: "auto" }}
                >
                    <Grid item sm={6}>
                        <TextField
                            name="mall_name"
                            variant="filled"
                            label="Enter Name"
                            fullWidth
                            onChange={handleData}
                            value={data.mall_name}
                        />
                    </Grid>
                    <Grid item sm={6}>
                        <TextField
                            name="mall_address"
                            variant="filled"
                            label="Enter Address"
                            fullWidth
                            onChange={handleData}
                            value={data.mall_address}

                        />
                    </Grid>
                    <Grid item sm={12}>

                        <UploadFile
                            name="mall_image"
                            onChange={handleImage}
                            label="Mall Image"
                        />
                        {data.mall_image ? <Avatar src={data.mall_image.url} style={{ height: "122px", width: "122px", marginTop: "8px" }} />
                            :
                            <div style={{ height: '8px', background: 'red', width: mallImage + "%" }}></div>
                        }

                    </Grid>
                    <Grid item sm={12}>
                        {
                            data.shops.map((f, i) => (
                                <div key={i}>
                                    {i === 0 && <h1>Shops</h1>}
                                    <ShopForm setData={setData} index={i} data={f} />
                                </div>
                            ))
                        }
                        <Typography variant="h5" color="secondary">
                            <Fab
                                color="secondary"
                                style={{ height: 44, width: 44, margin: 12 }}>
                                <Add
                                    onClick={() => setData({ ...data, shops: [...data.shops, defaultData.shops[0]] })}
                                />
                            </Fab>
                        </Typography>
                    </Grid>
                    <Grid item sm={12}>
                        <Button type="submit" variant="contained" color="primary">Submit</Button>
                    </Grid>
                </Grid>
            </form>

        </Grid>
    )
}

export default MallForm
