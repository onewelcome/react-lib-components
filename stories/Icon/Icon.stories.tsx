import React, { Fragment } from 'react';
import { Meta, Story } from '@storybook/react';
import { Icon as IconComponent, Props, Icons } from '../../src/Icon/Icon';

const meta: Meta = {
  title: 'Icon',
  component: IconComponent,
};

export default meta;

/**
 * Click the icon name to copy the React JSX code <Icon icon="icon_name" />
 *
 */
const Template: Story<Props> = (args) => {
  const copyIconHandler = (icon) => {
    const toCopy = `<Icon icon={Icons.${icon}} />`;

    navigator.clipboard.writeText(toCopy);
  };

  //@TODO: change h1 to <Typography /> component in UCL-5
  return (
    <Fragment>
      <h1 style={{ textAlign: 'center' }}>
        Click on the icon name to copy the JSX React Component (
        <code>&lt;Icon icon="Icon.icon_name" /&gt;</code>)
      </h1>
      <span style={{ textAlign: 'center', display: 'block', fontSize: '25px' }}>
        Make sure to import the <code>Icons</code> enum from the <code>@onewelcome/components</code>
        library`
      </span>
      <br />
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
    </Fragment>
  );
};

export const Icon = Template.bind({});
