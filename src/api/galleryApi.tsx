"use client"
import axios from "axios";
import React, { useEffect, useState } from "react";



interface Gallery {
  id: number;
  photo: string;
}
const galleryApi = () => {
  const [galleryPhotos, setgalleryPhotos] = useState<Gallery[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/schedule/")
      .then((res) => {
        setgalleryPhotos(res.data);
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  }, []);

  return galleryPhotos;
};

export default galleryApi;
