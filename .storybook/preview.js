export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const render = (args, context) => {
  const { id, component: Component } = context;
  if (!Component) {
    throw new Error(
        `Unable to render story ${id} as the component annotation is missing from the default export`
    );
  }

  return <div style={{ border: '3px solid' }}><Component {...args} /></div>;
};