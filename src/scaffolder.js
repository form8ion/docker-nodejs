import {promises as fs} from 'node:fs';

export default async function ({projectRoot, buildDirectory}) {
  await fs.writeFile(`${projectRoot}/Dockerfile`, `ARG NODE_VERSION
FROM node:\${NODE_VERSION}-alpine

USER node

COPY ${buildDirectory}/index.js

CMD ["node", "${buildDirectory}/index.js"]
`);
}
