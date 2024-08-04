import {promises as fs} from 'node:fs';

import any from '@travi/any';
import {describe, expect, it, vi} from 'vitest';

import scaffold from './scaffolder.js';

vi.mock('node:fs');

describe('scaffolder', () => {
  it('should define the docker details', async () => {
    const projectRoot = any.string();
    const buildDirectory = any.string();

    await scaffold({projectRoot, buildDirectory});

    expect(fs.writeFile).toHaveBeenCalledWith(`${projectRoot}/Dockerfile`, `ARG NODE_VERSION
FROM node:\${NODE_VERSION}-alpine

USER node

CMD ["node", "${buildDirectory}/index.js"]
`);
  });
});
