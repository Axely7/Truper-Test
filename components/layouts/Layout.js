import { Box } from '@mui/material'
import Head from 'next/head'
import React from 'react'
import { Navbar } from '../ui'

export const Layout = ({ children }) => {
  return (
      <Box sx={{ flexFlow: 1 }}>
          <Head>
              <title>Home Page</title>
          </Head>

          <Navbar />

          <Box sx={{ padding: '10px 20px' }}>
              {children}
          </Box>
      </Box>
  )
}
