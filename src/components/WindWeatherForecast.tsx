'use client';

import React, { useState, useEffect } from 'react';
import { Box, Text, Select, Image } from '@chakra-ui/react';

const areas = {
  tokyo: '東京',
  osaka: '大阪',
  fukuoka: '福岡',
  sapporo: '札幌',
};

export const WindSpeedForecast = () => {
  const [windSpeed, setWindSpeed] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [selectedArea, setSelectedArea] = useState('tokyo');

  useEffect(() => {
    const fetchWindSpeed = async () => {
      setIsLoading(true);
      setHasError(false);
      try {
        const response = await fetch(`/api/wind-speed/${selectedArea}`);
        if (!response.ok) {
          throw new Error('Failed to fetch wind speed data');
        }
        const data = await response.json();
        setWindSpeed(data.windSpeed);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching wind speed:', error);
        setHasError(true);
        setIsLoading(false);
      }
    };

    fetchWindSpeed();
  }, [selectedArea]);

  if (isLoading) {
    return <Text>データを読み込み中...</Text>;
  }

  if (hasError) {
    return <Text>データの取得に失敗しました。</Text>;
  }

  return (
    <Box>
      <Select value={selectedArea} onChange={(e) => setSelectedArea(e.target.value)} mb={4}>
        {Object.entries(areas).map(([key, value]) => (
          <option key={key} value={key}>{value}</option>
        ))}
      </Select>
      <Text fontSize="24px" fontWeight="bold">
        現在の風速: {windSpeed} m/s
      </Text>
      <Image
        src="/photos/wind-speed.png"
        alt="Wind Speed"
        height="300px"
        width="auto"
        mt={4}
      />
    </Box>
  );
};