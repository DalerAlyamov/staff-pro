const auth = Object.freeze(
  Object.seal({
    template: "/template",
  })
);

const app = Object.freeze(
  Object.seal({
    home: "/",
  })
);

const routes = Object.freeze(
  Object.seal({
    auth,
    app,
  })
);

export default routes;
