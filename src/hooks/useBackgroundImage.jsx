import React, { useState, useEffect } from 'react';
import axios from 'axios';

const useBackgroundImage = () => {
    const bgInitialStage = "bgCategories" in localStorage ?
    JSON.parse(localStorage.getItem('bgCategories')) : ['nature'];
    // const randomBgCategory = bgCategories[Math.floor(Math.random()*bgCategories.length)]

    const [bgURL, setBgURL] = useState(null);
    const [bgCategories, setBgCategories] = useState(bgInitialStage.length === 0 ? ['nature'] : bgInitialStage)
    const randomBgCategory = bgCategories[Math.floor(Math.random()*bgCategories.length)]

    const defaultBgImg = 'https://pixabay.com/get/g84bf429349ce17fe9912c4749be4aa1efcd486e832d16d073ac786cd3419acf5de226c55c46f22743938f6e79e22ec88c8af92e378887a0cf645787a46be7217_1280.jpg'

    const ACCESS_KEY = '37249249-3a46b21402f8a73bc7792c704'
    const endpointLoaction = `https://pixabay.com/api/?key=${ACCESS_KEY}&q=landscape&image_type=photo&orientation=horizontal&category=${randomBgCategory}&per_page=50&order=popular`

    const fetchBgImage = async() => {
        try{
            const res = await axios.get(endpointLoaction);
            setBgURL(res.data.hits[Math.floor(Math.random()*res.data.hits.length)].largeImageURL)
        }catch(error) {
            console.log(error.message);
            setBgURL(defaultBgImg)
        }
    }

    useEffect(() => {
        fetchBgImage();
    }, [])

  return (
    {bgURL, bgCategories, setBgCategories}
  )
}

export {useBackgroundImage}

// 37249249-3a46b21402f8a73bc7792c704 - key
// https://pixabay.com/get/g84bf429349ce17fe9912c4749be4aa1efcd486e832d16d073ac786cd3419acf5de226c55c46f22743938f6e79e22ec88c8af92e378887a0cf645787a46be7217_1280.jpg