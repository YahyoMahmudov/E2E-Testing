import {promises as fs} from 'fs';

const deleteAllureResults = async () => {
  try {
    await fs.rm('allure-results', {recursive: true});
  } catch (error) {
    /* empty */
  }
};

deleteAllureResults();
