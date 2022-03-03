import axios from "axios";
import { useEffect, useState } from "react";
import "./photos.scss";
import Loader from "../Loader/Loader";
import { formatNumberWithCommas } from "../../utils/stringHelpers";
import { ReactComponent as PhotoTitleIcon } from './photo-title-icon.svg';
import { PhotoItem } from "./Photos.models";
// import { useTransition, animated, config } from 'react-spring';

interface PhotoProps {
    fetchUrl?: string
}

function Photos({ fetchUrl = "http://jsonplaceholder.typicode.com/photos" }: PhotoProps) {
    /*
    * useState() > type 'never': a value that will never occur
    *   - type 'void' can have values undefined or null
    */
    const [photos, setPhotos] = useState<PhotoItem[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    // const transitions = useTransition(photos, {
    //     from: { opacity: 0 },
    //     enter: { opacity: 1 },
    //     leave: { opacity: 0 },
    //     delay: 200,
    //     config: config.gentle,
    //     onRest: () => setPhotos([]),
    // })

    useEffect(() => {
        axios.get<PhotoItem[]>(`${fetchUrl}`)
            .then((response) => {
                setPhotos(response.data);
                setTimeout(() => {
                    setIsLoading(false);
                }, 2000);
            });
    }, []);

    return isLoading ?
        (
            <Loader />
        )
        :
        (
            <div className="photo-gallery">
                <div className="photo-gallery__heading">
                    <PhotoTitleIcon />
                    <h2>{formatNumberWithCommas(photos.length)} Photos</h2>
                </div>
                <ul className="photo-gallery__container">
                    {photos.map((photo) => (
                        <li className="photo-card" key={photo.id}>
                            <img src={photo.thumbnailUrl} alt="" className="photo-card__image" />
                            <section className="photo-card__content">
                                <h3>Title: {photo.title}</h3>
                                <p>Album Id: {photo.albumId}</p>
                            </section>
                        </li>
                    ))}
                    {/* {transitions(({opacity}, item) => (
                        <animated.li
                            style={{
                            opacity: opacity.to(item.op),
                            transform: opacity
                                .to(item.trans)
                                .to(y => `translate3d(0,${y}px,0)`),
                            }}>
                            <img src={item.thumbnailUrl} alt="" className="photo-card__image" />
                            <section className="photo-card__content">
                                <h3>Title: {item.title}</h3>
                                <p>Album Id: {item.albumId}</p>
                            </section>
                        </animated.li>
                    ))} */}
                </ul>
            </div>
        );
}

export default Photos;