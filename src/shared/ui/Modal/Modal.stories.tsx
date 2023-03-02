import React from 'react'
import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import { Modal } from './Modal'

export default {
  title: 'shared/Modal',
  component: Modal,

  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof Modal>

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />

export const Primary = Template.bind({})
Primary.args = {
  children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae blanditiis cupiditate distinctio dolores, ea et eveniet excepturi exercitationem explicabo',
  isOpen: true
}
