import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs';

export const useFetchGif = (category) => {
    const [state, setstate] = useState({
        data: [],
        loading:true
    });

    useEffect( () => {
        getGifs(category).then( imgs => {
                       
            setstate({
                data: imgs,
                loading:false
            });
        })
    }, [category])



    // setTimeout(() => {
    //     setstate({
    //         data: [1,2,3,4,5],
    //         loading:false
    //     })
    // }, 3000);

    return state;

}