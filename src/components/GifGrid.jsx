import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";
import { GifGridItem } from "./GifGridItem";
import { useFetchGifs } from "../hooks/useFetchGifs";



export const GifGrid = ({ category }) => {
    const { images, isLoading } = useFetchGifs(category);
    console.log(images, isLoading);



    return (
        <>
            {
                isLoading && (<h2>Cargando</h2>)
            }
            <div className="d-flex justify-content-center p-3 text-warning">
                <h2>{ category.toUpperCase() }</h2>
            </div>


            <div className="d-flex flex-wrap justify-content-center">
                { images.map((image) => (
                    <GifGridItem
                        { ...image }
                    />
                )) }
            </div>
        </>
    );
};
