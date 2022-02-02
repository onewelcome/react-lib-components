# Contributing to the Engineering guide

:+1::tada: First off, thanks for taking the time to contribute! :tada::+1:

## How to contribute

When contributing to this repository, please follow the process described below.

For updating this project we have defined a process that ensures the contents of this project (e.g. the guidelines) are supported by all OneWelcome engineers.

There are a few steps involved in proposing a change:
1. Informally proposing the requested change on Slack
2. Formally proposing the change (via a Pull request in this repository)
3. Accepting the change
4. Releasing the change

All steps are further detailed below.

### Informally proposing a change

Everyone is allowed to extend or implment new component. However it's good to check with members of the Frontend team if there isn't any plan to do it or to disscus the problem. In the end Fronend team is reponsibile for code meged into master branch of repository.

In order to informally discuss your idea please use the [#frontend-team](https://onewelcome.slack.com/app_redirect?channel=C02U7C0JBKJ) Slack channel for this purpose.

### Formally proposing a change

Once you have informally discussed the change on Slack you might be asked to create a Pull Request in this project. Please do so with care. Below are a few tips that might help you create the pull request:

- Use TypeScript to add component
- Always add interactive stories to the Storybook showing the potential of the added / changed component
  - Write introduction to new component or edit existing one adding new feature desscription if needed
- Write unit test which covers as many different usage of component as you added
- Align with all principales which are already in other components
- Code style & linter is configured to automatically format code & show problems with your changes

### Accepting the change

If you have submitted a pull request you're done......

![Work done](https://media.giphy.com/media/26u4lOMA8JKSnL9Uk/giphy.gif)

..... Unless of course there are review remarks :wink:.


The process will however not stop: the owners will vote (& place comments) in order to express their opinion on the pull request. Votes should be casted within 2 working days (not counting public holidays) after the pull request is created. *When at least 2 owners have voted and more than 66% of votes are positive the PR must be merged.*

### Releasing the change

Frontend team is responsible for releasing `react-lib-components`. However if there is a need to do release quicker then planned you can do it. Please inform about it upfront on [#frontend-team](https://onewelcome.slack.com/app_redirect?channel=C02U7C0JBKJ) Slack channel.
Releasing process is defined in [#README.md](README.md#release)

## Preparing the repository for development

See the [README.md](README.md) for further instructions how to work on the Markdown files in this repository.