const template = (bundle) => `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="shortcut icon" type="image/svg" href="./favicon.svg" />
    <title>Es React Starter</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="text/javascript" src="${bundle}"></script>
  </body>
</html>
`;

module.exports = template;
