import { StoryFn, Meta } from "@storybook/react";
import HeaderTabs from "./HeaderTabs";
import React from "react";
import MockComponent from "./MockComponent";

export default {
  title: "PredictionComponentLibrary/HeaderTabs",
  component: HeaderTabs,
} as Meta<typeof HeaderTabs>;

 const Template: StoryFn<typeof HeaderTabs> = (args) => <HeaderTabs {...args} />;

 export const HeaderTabsTest = Template.bind({})

HeaderTabsTest.args = {
  items: [{title: "New Your", component: <div>Hello I am a mock</div>}, {title: 'Another', component: <div>hello I am another mock</div>} ]
}





