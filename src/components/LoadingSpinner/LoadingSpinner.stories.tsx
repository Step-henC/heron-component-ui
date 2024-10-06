import { StoryFn, Meta } from "@storybook/react";
import LoadingSpinner from "./LoadingSpinner";

export default {
  title: "PredictionComponentLibrary/LoadingSpinner",
  component: LoadingSpinner,
} as Meta<typeof LoadingSpinner>;

const Template: StoryFn<typeof LoadingSpinner> = (args) => <LoadingSpinner {...args} />;

export const LoadingSpinnerTest = Template.bind({})

LoadingSpinnerTest.args = {
  isLoading: true,
  prompt: "please wait"
}