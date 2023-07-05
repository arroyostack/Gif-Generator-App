import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {

    const [ images, setImages ] = useState([]);
    const [ isLoading, setLoading ] = useState(true);

    const getImages = async () => {
        const newImages = await getGifs(category);
        setImages(newImages);
        setLoading(false);
    };

    useEffect(() => {
        getImages(category);
    }, []);
    // If dependencies array is empty, it will only execute once the first time that the component is armed
    return {
        images,
        isLoading
    };
};
