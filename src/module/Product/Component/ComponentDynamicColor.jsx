import ComponentColor from '../../../components/ComponentColor'
import React from 'react'

export default function ComponentDynamicColor() {
    const color = ['red', 'yellow', 'orange', 'green']
  return (
    <ComponentColor color={color} initialColor={'blue'}/>
  )
}
