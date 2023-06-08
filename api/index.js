import axios from 'axios';

export const getPlacesData = async () => {
    try {
        const {
            data : { data },
        } = await axios.get(
            `https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary`,
            {
                params: {
                    bl_latitude: '40.81140395097502',
                    tr_latitude: '41.19923904591783',
                    bl_longitude: '28.59555403926175',
                    tr_longitude: '29.42880493071649',
                    restaurant_tagcategory_standalone: '10591',
                    restaurant_tagcategory: '10591',
                    limit: '30',
                    currency: 'USD',
                    open_now: 'false',
                    lunit: 'km',
                    lang: 'en_US'
                },
                headers: {
                    'X-RapidAPI-Key': '64f245b6ccmshb8add6d1db4f484p1a4885jsn392cf8b0c283',
                    'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
                }
            }
        );
        return data;
    } catch (error) {
        return null;
    }
}