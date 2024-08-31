// "use client";

// import {
//   Box,
//   Image,
//   IconButton,
//   keyframes,
//   useBreakpointValue,
// } from "@chakra-ui/react";
// import React, { useEffect, useState } from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
// import axios from "axios";
// import Announcement from "@/components/Announce";
// import Notice from "@/components/Announce";
// import LatestEventWithFiles from "@/components/Announce";
// import LatestEventAnnouncement from "@/components/Announce";

// const PrevArrow = (props: any) => {
//   const { onClick } = props;
//   return (
//     <IconButton
//       aria-label="previous slide"
//       icon={<ChevronLeftIcon />}
//       onClick={onClick}
//       position="absolute"
//       left="8px"
//       top="50%"
//       transform="translateY(-50%)"
//       zIndex={2}
//     />
//   );
// };
// const waveAnimation = keyframes`
//   0% { transform: translateX(0) translateZ(0) scaleY(1); }
//   50% { transform: translateX(-25%) translateZ(0) scaleY(0.55); }
//   100% { transform: translateX(-50%) translateZ(0) scaleY(1); }
// `;
// const NextArrow = (props: any) => {
//   const { onClick } = props;
//   return (
//     <IconButton
//       aria-label="next slide"
//       icon={<ChevronRightIcon />}
//       onClick={onClick}
//       position="absolute"
//       right="8px"
//       top="50%"
//       transform="translateY(-50%)"
//       zIndex={2}
//     />
//   );
// };

// const Page = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     prevArrow: <PrevArrow />,
//     nextArrow: <NextArrow />,
//     autoplaySpeed: 3000,
//   };
//   const headingSize = useBreakpointValue({ base: "3xl", md: "4xl", lg: "5xl" });
//   const textSize = useBreakpointValue({ base: "3xl", md: "4xl", lg: "5xl" });

//   const [photos, setPhotos] = useState<
//     {
//       name: string;
//       id: number;
//       photo: string;
//       sail_number: string;
//       introduction: string;
//     }[]
//   >([]);
//   useEffect(() => {
//     axios
//       .get("http://127.0.0.1:8000/api/homephotos/")
//       .then((res) => {
//         setPhotos(res.data);
//       })
//       .catch((error) => {
//         console.error("There was an error!", error);
//       });
//   }, []);

//   return (
//     <>
//       {/* <HomeTitle /> */}
//       <Box w="100%" marginBottom={10}>
//         <Box mx="auto" position="relative">
//           <Slider {...settings}>
//             {photos.map((src, index) => (
//               <Box key={index} w="100%">
//                 <Image
//                   src={src.photo}
//                   alt={`Slide ${index + 1}`}
//                   objectFit="cover"
//                   w="100%"
//                   h="100%"
//                 />
//               </Box>
//             ))}
//           </Slider>
//         </Box>
//       </Box>

//       <Announcement 
//       title="春季大会の結果が更新されました"
//       date="2024年5月1日"
//       link="/results/spring-2024"/>
//     </>
//   );
// };

// export default Page;
"use client";

import {
  Box,
  Image,
  IconButton,
  keyframes,
  useBreakpointValue,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import axios from "axios";
import Announcement from "@/components/Announce";

interface Event {
  id: number;
  files: { id: number; file_url: string; name: string; uploaded_at: string }[];
  event_name: string;
  start: string;
  end: string;
  result: string;
  created_at: string;
}

interface Photo {
  name: string;
  id: number;
  photo: string;
  sail_number: string;
  introduction: string;
}

const PrevArrow = (props: any) => {
  const { onClick } = props;
  return (
    <IconButton
      aria-label="previous slide"
      icon={<ChevronLeftIcon />}
      onClick={onClick}
      position="absolute"
      left="8px"
      top="50%"
      transform="translateY(-50%)"
      zIndex={2}
    />
  );
};

const waveAnimation = keyframes`
  0% { transform: translateX(0) translateZ(0) scaleY(1); }
  50% { transform: translateX(-25%) translateZ(0) scaleY(0.55); }
  100% { transform: translateX(-50%) translateZ(0) scaleY(1); }
`;

const NextArrow = (props: any) => {
  const { onClick } = props;
  return (
    <IconButton
      aria-label="next slide"
      icon={<ChevronRightIcon />}
      onClick={onClick}
      position="absolute"
      right="8px"
      top="50%"
      transform="translateY(-50%)"
      zIndex={2}
    />
  );
};

const Page = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    autoplaySpeed: 3000,
  };

  const headingSize = useBreakpointValue({ base: "3xl", md: "4xl", lg: "5xl" });
  const textSize = useBreakpointValue({ base: "3xl", md: "4xl", lg: "5xl" });

  const [photos, setPhotos] = useState<Photo[]>([]);
  const [latestEvent, setLatestEvent] = useState<Event | null>(null);

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/homephotos/`)
      .then((res) => {
        setPhotos(res.data);
      })
      .catch((error) => {
        console.error("There was an error fetching photos!", error);
      });

    axios
      .get<Event[]>(`${process.env.NEXT_PUBLIC_API_URL}/schedule/`)
      .then((res) => {
        const eventsWithFiles = res.data.filter(event => event.files.length > 0);
        const sortedEvents = eventsWithFiles.sort((a, b) => 
          new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
        );
        if (sortedEvents.length > 0) {
          setLatestEvent(sortedEvents[0]);
        }
      })
      .catch((error) => {
        console.error("There was an error fetching events!", error);
      });
  }, []);

  return (
    <>
      <Box w="100%" marginBottom={10}>
        <Box mx="auto" position="relative">
          <Slider {...settings}>
            {photos.map((src, index) => (
              <Box key={index} w="100%">
                <Image
                  src={src.photo}
                  alt={`Slide ${index + 1}`}
                  objectFit="cover"
                  w="100%"
                  h="100%"
                />
              </Box>
            ))}
          </Slider>
        </Box>
      </Box>

      {latestEvent && (
        <Announcement
          title={`${latestEvent.event_name}のリザルトが更新されました`}
          date={new Date(latestEvent.created_at).toLocaleDateString('ja-JP')}
          link={`/race/${latestEvent.start.substring(0, 4)}`}
        />
      )}
    </>
  );
};

export default Page;