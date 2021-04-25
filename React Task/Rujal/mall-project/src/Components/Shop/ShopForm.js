import React from 'react'
import { CircularProgress, Grid, TextField } from '@material-ui/core'
import CancelIcon from '@material-ui/icons/Cancel';
import { deleteFile, getFileUrl } from '../../firebase/fireStorage';
import UploadFile from '../UploadFile';

function ShopForm({ data, setData, index = 0 }) {

    const [loading, setLoading] = React.useState(false)

    const removeFile = async (id) => {
        await deleteFile(id)
        const fileList = data.images.filter(file => file.id !== id)
        setData(th => ({
            ...th,
            shops: th.shops.map((shop, i) => i === index ? { ...shop, images: fileList } : shop)
        }))
    }

    const getShopData = (e) => setData(th => ({
        ...th,
        shops: th.shops.map((shop, i) => i === index ? { ...shop, ...{ [e.target.name]: e.target.value } } : shop)
    }))

    const handleShopImage = async (e) => {
        setLoading(true)
        const url = await getFileUrl(e);
        setData(th => ({
            ...th,
            shops: th.shops.map((x, i) => (index === i ? { ...x, images: [...x.images, ...url] } : x))
        }))
        e.target.value = null
        setLoading(false)
    }


    return (
        <Grid container spacing={2}>
            <Grid item sm={6}>
                <TextField
                    name="shop_name"
                    label="Shop Name"
                    variant="filled"
                    onChange={getShopData}
                    value={data.shop_name}
                />
            </Grid>
            <Grid item sm={6}>
                <TextField
                    name="shop_description"
                    label="Shop Description"
                    variant="filled"
                    onChange={getShopData}
                    value={data.shop_description}
                />
            </Grid>
            <Grid item sm={12}>
                <Grid item sm={12}>
                    <UploadFile
                        name="shop_images"
                        disabled={loading}
                        multiple
                        onChange={handleShopImage}

                        label="Shop Images"
                    />
                    {loading && <CircularProgress style={{ height: 22, width: 22, marginLeft: 10 }} />}

                    <p>First Image will be Thumbline</p>
                    {data.images.map((image) => (
                        <div key={image.id}>
                            <CancelIcon onClick={() => removeFile(image.id)} /> {image.image_name}
                        </div>
                    ))}

                </Grid>
            </Grid>
        </Grid>
    )
}

export default ShopForm
