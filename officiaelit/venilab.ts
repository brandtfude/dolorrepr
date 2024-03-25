
const {EthosClient} = require('@google-cloud/ethos');

const client = new EthosClient();

async function callExecuteTransactionBlock() {
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  // const projectId = 'YOUR_PROJECT_ID';
  // const location = 'YOUR_PROJECT_LOCATION';
  // const deploymentId = 'YOUR_DEPLOYMENT_ID';
  // const transactionBlock = {}
  // const options = {}
  const [response] = await client.executeTransactionBlock({
    projectId,
    location,
    deploymentId,
    transactionBlock,
    options,
  });
  console.log(response);
}

callExecuteTransactionBlock();


