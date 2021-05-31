import React from 'react'
import Block from './Block'

export default {
    title: "Block",
    component: Block,
    argTypes: {
        background: { control: "color" }, height: { control: "range" }, text: { control: "text" }
    }
}

const Template = (args) => <Block {...args} />

export const Primary = Template.bind({})
Primary.args = {
    background: "red",
    height:200,
    text:'Primary'
}

export const Secondary = Template.bind({})
Secondary.args = {
    background: "green",
    height:200,
    text:'Secondary',
}

