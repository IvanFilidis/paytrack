const cron = require('node-cron');
const { fetchData } = require('./api');
const { upsertData } = require('./database');

function startScheduler() {
  cron.schedule('*/15 * * * *', async () => {
    try {
      const data = await fetchData();
      await upsertData(data);
      generateReport(data);
    } catch (error) {
      console.error(error);
    }
  });
}