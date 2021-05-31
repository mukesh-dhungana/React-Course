import React from 'react'
import Block from './Block'

export default {
    title: 'Block',
    component: Block,
    argTypes: { background: { control: "color" }, height: { control: "range" }, text: { control: "text" } }
}

const Template = args => <Block {...args} />

export const First = Template.bind({})

First.args = {
    background: 'green',
    height: 100,
    text: 'sdfjlksdjflsdjflsdfjlsdf'}

export const Second = Template.bind({})
Second.args = {
    background: 'blue',
    height: 100,
    text: 'sdfjlksdjflsdjflsdfjlsdf'}

export const Third = Template.bind({})
Third.args = {
    background: 'red',
    height: 100,
    text: 'sdfjlksdjflsdjflsdfjlsdf'
}

export const Fourth = Template.bind({})
Fourth.args = {
    background: 'yellow',
    height: 100,
    text: 'sdfjlksdjflsdjflsdfjlsdf'}