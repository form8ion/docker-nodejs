import {fileExists} from '@form8ion/core';

import {Then} from '@cucumber/cucumber';
import assert from 'node:assert';

Then('the Dockerfile is created', async function () {
  assert.equal(await fileExists(`${this.projectRoot}/Dockerfile`), true);
});
