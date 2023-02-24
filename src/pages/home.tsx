import { useList } from '@pankod/refine-core';
import { Box, Typography, Stack } from '@pankod/refine-mui';

import { 
  PieChart,
  PropertyReferrals,
  TotalRevenue,
  PropertyCard,
  TopAgent
} from 'components';

const home = () => {
  return (
    <Box>
      <Typography fontSize={25} fontWeight={700} color="#11142D">
        Dashboard
      </Typography>
      {/* Small Charts */}
      <Box mt="20px" display="flex" flexWrap="wrap" gap={4}>
        <PieChart 
          title="Properties for Sale"
          value={500}
          series={[75, 25]}
          colors={['#275be8', '#c4e8ef']}
        />
        <PieChart 
          title="Properties for Rent"
          value={309}
          series={[60, 40]}
          colors={['#275be8', '#c4e8ef']}
        />
        <PieChart 
          title="Total Customers"
          value={3950}
          series={[75, 25]}
          colors={['#275be8', '#c4e8ef']}
        />
        <PieChart 
          title="Properties for Cities"
          value={450}
          series={[75, 30]}
          colors={['#275be8', '#c4e8ef']}
        />
      </Box>
      
      {/* Revenue and Referrals Charts */}
      <Stack mt="25px" width="100%" direction={{ xs: 'column', lg: 'row' }} gap={4}>
        <TotalRevenue />
        <PropertyReferrals />
      </Stack>
    </Box>
  )
}

export default home