import React from "react"
import { Meta, Story } from "@storybook/react"

import CardTest, { CardProps } from "./Card"

const cardsMeta: Meta = {
  title: "CardTest",
  component: CardTest
}

const Template: Story<CardProps> = (args) => <CardTest {...args} />

const Unselected = Template.bind({})
Unselected.args = { varient: "unselected" }

const Hover = Template.bind({})
Hover.args = { varient: "hover" }

const Selected = Template.bind({})
Selected.args = { varient: "selected", isChecked: true }

export default cardsMeta
export { Unselected, Hover, Selected }
