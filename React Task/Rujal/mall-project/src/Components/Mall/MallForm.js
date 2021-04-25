import React, { useState } from 'react'
import { Fab, Grid, TextField, Typography, Button, Avatar } from '@material-ui/core'
import { Add } from '@material-ui/icons';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import ShopForm from '../Shop/ShopForm';
import { addMallData, getMallData, updateMallData } from '../../redux/actions/mall';
import UploadFile from '../UploadFile';
import { deleteFile, getFileUrl } from '../../firebase/fireStorage';
import { useParams } from 'react-router';
import { EDIT_MALL, LOCATION_CHANGE } from '../../redux/actionType'

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

    const handleData = (e) => setData(th => ({ ...th, ...{ [e.target.name]: e.target.value } }))

    React.useEffect(() => {
        if (id) {
            dispatch({ type: EDIT_MALL })
            const mall = malls.find(x => x.id === id)
            if (mall) {
                delete mall.id
                setData(mall)
            }
        }
    }, [id, dispatch, malls])

    React.useEffect(() => {
        dispatch(getMallData())
        return () => dispatch({ type: LOCATION_CHANGE })
    }, [dispatch])

    const handleImage = async (e) => {
        data.mall_image && await deleteFile(data.mall_image.id)
        const response = await getFileUrl(e)
        if (response) {
            setData(th => ({ ...th, mall_image: { ...response[0] } }))
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (editMode) {
            dispatch(updateMallData(id, data))
        } else {
            dispatch(addMallData(data))
            setData(defaultData)
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
                        {data.mall_image &&
                            <Avatar
                                src={data.mall_image.url}
                                style={{ height: "122px", width: "122px", marginTop: "8px" }}
                            />}

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
