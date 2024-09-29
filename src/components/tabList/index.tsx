import { Tag, Wrap } from '@yamada-ui/react'
import React from 'react'
import DisplayArea from '../displayArea'

/**
 * TabList component
 */
const TabList = () => {
  return (
    <DisplayArea label="Tag">
      <Wrap gap="md" alignItems="flex-start">
        <Tag colorScheme="primary" rounded="full">
          Primary
        </Tag>
        <Tag
          colorScheme="secondary"
          rounded="full"
          onClose={() => {
            alert('click close')
          }}
        >
          Secondary
        </Tag>
      </Wrap>
    </DisplayArea>
  )
}

export default TabList
