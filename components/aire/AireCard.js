import { Card, Grid, Typography } from '@mui/material'
import React from 'react'

export const AireCard = (aire) => {

  return (
    <Grid xs={ 6 } sm={ 3 } md={ 2 } xl={ 1 } >
        <Card>
            <Card>
                <Typography variant='h6'>Info</Typography>
                <Card>
                    <Typography variant='h6'>Pie</Typography>
                </Card>
            </Card>
        </Card>
    </Grid>
  )
}
