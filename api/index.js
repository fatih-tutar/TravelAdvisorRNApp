import axios from 'axios';

export const getPlacesData = async (bl_lat, bl_lng, tr_lat, tr_lng, type) => {
    try {
        const {
            data : { data },
        } = await axios.get(
            `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,
            {
                params: {
                    bl_latitude: bl_lat ? bl_lat : '40.81140395097502',
                    tr_latitude: tr_lat ? tr_lat : '41.19923904591783',
                    bl_longitude: bl_lng ? bl_lng : '28.59555403926175',
                    tr_longitude: tr_lng ? tr_lng : '29.42880493071649',
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