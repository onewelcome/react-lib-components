import React, { Fragment } from 'react';
import { Meta, Story } from '@storybook/react';
import { Icon as IconComponent, Props, Icons } from '../../src/Icon/Icon';

const meta: Meta = {
  title: 'Stories/UI/Icon',
  component: IconComponent,
  argTypes: {
    color: {
      control: 'color',
    },
  },
  excludeStories: ['IconsTemplate'],
};

export default meta;

/**
 * Click the icon name to copy the React JSX code <Icon icon="icon_name" />
 *
 */
export const IconsTemplate: Story<Props> = (args) => {
  const copyIconHandler = (icon) => {
    const toCopy = `<Icon icon={Icons.${icon}} />`;

    navigator.clipboard.writeText(toCopy);
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
      }}
    >
      {Object.keys(Icons).map((icon, index) => (
        <article
          key={index}
          style={{
            flexBasis: '20%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginBottom: '20px',
          }}
        >
          <IconComponent {...args} icon={Icons[icon]} />
          <button
            onClick={copyIconHandler.bind(null, icon)}
            title="Click here to copy React Component"
            style={{ padding: '5px', cursor: 'copy', marginTop: '5px' }}
          >
            <pre style={{ margin: '0' }}>
              <code>{Icons[icon]}</code>
            </pre>
          </button>
        </article>
      ))}
    </div>
  );
};

const Template: Story<Props> = (args) => <IconComponent {...args} />;

export const Icon = Template.bind({});

Icon.args = {
  icon: Icons.Calendar,
  size: '6rem',
};
