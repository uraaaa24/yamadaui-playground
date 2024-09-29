import React, { ReactNode } from 'react'
import { Box, Heading, VStack, Text } from '@yamada-ui/react'

interface DisplayAreaProps {
  label: string
  description?: string
  children: ReactNode
}

const DisplayArea = ({ label, description, children }: DisplayAreaProps) => {
  return (
    <VStack>
      <Box>
        <Heading as="h2" size="xl">
          {label}
        </Heading>
        {description && <Text>{description}</Text>}
      </Box>
      <Box>{children}</Box>
    </VStack>
  )
}

export default DisplayArea
