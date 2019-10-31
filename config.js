import { addParameters, configure } from '@storybook/react';

addParameters({
  options: {
    isFullscreen: true,
    showNav: true,
    showPanel: true,
    panelPosition: 'bottom',
    hierarchySeparator: /\/|\./,
    hierarchyRootSeparator: /\|/,
    sidebarAnimations: true,
    enableShortcuts: true,
    isToolshown: true,
    theme: undefined,
    storySort: undefined,
  },
});
