# Reproducing the issue

1. Install the [Netlify CLI](https://www.netlify.com/products/dev/):

```sh
npm i -g netlify-cli
```

Run the development server

```sh
npm run dev
```

Open up [http://localhost:3000](http://localhost:3000), and click on the "Test" button.

You should see the `TypeError: Could not parse content as FormData.` message.