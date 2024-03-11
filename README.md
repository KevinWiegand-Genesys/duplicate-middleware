## How to run

Start your local dynamodb instance, the download can be found [here](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/DynamoDBLocal.DownloadingAndRunning.html#DynamoDBLocal.DownloadingAndRunning.title). Substitute the path with where yours is.

`java -jar ~/Desktop/dynamodb_local_latest/DynamoDBLocal.jar -sharedDb`

Run the `./scripts/setup.sh` script to create the table (may need to change the endpoint). Alternatively, create the table manually.

Install packages with `npm install`.

Build the application with `npm run build`.

Run the application with `npm run start`.