import * as React from 'react';
import Box from '@mui/material/Box';
import { BarChart } from '@mui/x-charts/BarChart';
import '../CSS/BarAnimation.css'

export default function BarAnimation() {
  const [seriesNb, setSeriesNb] = React.useState(2);
  const [itemNb, setItemNb] = React.useState(11);
  const [skipAnimation, setSkipAnimation] = React.useState(false);
  const barColors = ['#B142F5'];

  return (
    <Box sx={{ width: '100%' }}>
      <BarChart
        options={
          {
            scales: {
              xAxes: [
                {
                  barPercentage: 0.8
                }
              ]
            }
          }
        }
        xAxis={[
          {
            categoryGapRatio: 0.7,
            scaleType: 'band',
            data: ['Sh', 'Sa', 'Fu', 'Ck', 'Me', 'Se', 'Ha', 'Iu', 'Ph', 'Fh', 'Pb'],
          },
        ]}
        height={300}
        series={series
          .slice(0, seriesNb)
          .map((s, index) => ({ ...s, data: s.data.slice(0, itemNb), color: barColors[index] }))}
      />
    </Box>
  );
}

const highlightScope = {
  highlighted: 'series',
  faded: 'global',
};

const series = [
  {
    label: 'SOUND SUCCESS RATE',
    data: [
      1, 5, 6, 4, 5, 3, 4, 2, 6, 1, 6
    ],
  },
].map((s) => ({ ...s, highlightScope }));
