import React from 'react';
import { Box, Flex, Heading, Text, Image } from '@chakra-ui/react';
import Link from 'next/link';


const WeatherContent = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <Box
    width="370px"
    height="500px"
    bg="rgba(213, 238, 255, 0.8)"
    borderRadius="15px"
    boxShadow="0 4px 6px rgba(0, 0, 0, 0.1)"
    m={4}
    overflow="hidden"
  >
    <Text
      color="#1b435d"
      width="100%"
      p={4}
      fontSize="20px"
      fontWeight="bold"
      borderBottom="2px solid #1b435d"
    >
      {title}
    </Text>
    <Flex direction="row" justify="center" wrap="wrap" p={2}>
      {children}
    </Flex>
  </Box>
);
const WindSpeedForecast = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleLoad = () => {
    setIsLoading(false);
    setHasError(false);
  };

  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  const handleRetry = () => {
    setIsLoading(true);
    setHasError(false);
    // iframeをリロード
    const iframe = document.querySelector('iframe');
    if (iframe) {
      iframe.src = iframe.src;
    }
  };
}

const Weather = () => {
  return (
    <Box
      m="5%"
      bg="rgba(213, 238, 255, 0.5)"
      borderRadius="20px"
      boxShadow="0 10px 20px rgba(0, 0, 0, 0.15)"
      overflow="hidden"
    >
      <Heading
        p="30px 5% 15px"
        color="#1b435d"
        fontSize="32px"
        fontWeight="bold"
        textAlign="center"
      >
        天候情報
      </Heading>
      <Flex
        direction="row"
        justify="center"
        wrap="wrap"
        p="5%"
        pt="15px"
      >
        
        
        <WeatherContent title="警報・注意報">
        <Box
            position="relative"
            width="350px"
            height="450px"
            overflow="hidden"
          >
        <iframe
              src="https://www.jma.go.jp/jp/warn/f_2520400.html"
              width="700px"
              height="1200px"
              
              style={{
                transform: "scale(0.5)",
                transformOrigin: "0 0",
                position: "absolute",
                top: "0",
                left: "0",
              }}
            />
            </Box>
        </WeatherContent>
        <WeatherContent title="気圧配置">
        <Box
            position="relative"
            width="350px"
            height="450px"
            overflow="hidden"
          >
            <iframe
              src="https://www.jma.go.jp/jp/g3/"
              width="700px"
              height="1200px"
              
              style={{
                transform: "scale(0.5)",
                transformOrigin: "0 0",
                position: "absolute",
                top: "0",
                left: "0",
              }}
            />
          </Box>
        </WeatherContent>
        <WeatherContent title="風向風速予想">
          <Link href="http://weather-gpv.info/">
          GPV
          </Link>
        </WeatherContent>
      </Flex>
    </Box>
  );
};

export default Weather;