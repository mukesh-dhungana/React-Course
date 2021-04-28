import { Grid, Typography, Button } from '@material-ui/core'
import React from 'react'
import { useParams } from 'react-router'
import HOC from '../Components/HOC'
import ShopForm from '../Components/Shop/ShopForm'
import { getFileUrl } from '../firebase/fireStorage'

const defaultData = {
    shops: [{ shop_name: "", shop_description: "", images: [] }]
}

function ShopOnly({ malls, editMode, updateMallData }) {

    const { id } = useParams()
    const [data, setData] = React.useState(defaultData)
    const [loading, setLoading] = React.useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        const specificMall = malls.find(mall => mall.id === id)


        if (editMode) {

        } else {

            const shopData = await Promise.all(data.shops.map(async shop => {
                const images = await getFileUrl(shop.images)
                return { ...shop, images }
            }))
            const finalData = {
                ...specificMall,
                shops: [...specificMall.shops, ...shopData]
            }
            delete finalData.id
            updateMallData(id, finalData)
            setData(defaultData)
            setLoading(false)

        }
    }

    return (
        <Grid container spacing={2}>
            <Grid item sm={12}>
                <Typography variant="h5" component="h5" color="secondary" style={{ textAlign: "center" }}>
                    {editMode ? "Edit" : "Add"} Shop
                </Typography>
            </Grid>
            <Grid item sm={12}>
                <form onSubmit={handleSubmit}>
                    <Grid container spacing={2} style={{ margin: "auto", width: "40%" }}>
                        <Grid item sm={12}>
                            <ShopForm setData={setData} data={data.shops[0]} />
                            <Button
                                disabled={loading}
                                variant="contained"
                                color="secondary"
                                type="submit">Submit{loading && "ting"}</Button>
                        </Grid>
                    </Grid>
                </form>
            </Grid>
        </Grid>
    )
}

export default HOC(ShopOnly)
