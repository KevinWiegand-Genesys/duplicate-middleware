import newrelic from 'newrelic';
import { DescribeTableCommand, DescribeTableCommandOutput, DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocumentClient } from '@aws-sdk/lib-dynamodb';

const TABLE_NAME = 'duplicate-middleware';
const dynamoDBClient = new DynamoDBClient({ region: 'us-east-1', endpoint: 'http://localhost:8000' });
const dynamoDBDocumentClient = DynamoDBDocumentClient.from(dynamoDBClient);

function describeViaDynamoClient(): Promise<DescribeTableCommandOutput> {
    return dynamoDBClient.send(new DescribeTableCommand({ TableName: TABLE_NAME }));
}

function describeViaDynamoDocumentClient(): Promise<DescribeTableCommandOutput> {
    return dynamoDBDocumentClient.send(new DescribeTableCommand({ TableName: TABLE_NAME }));
}

try {
    describeViaDynamoClient();
} catch (err) {
    const error = err as Error;
    newrelic.noticeError(error);
    console.log(`Dynamo Client Error: ${error.message}`);
}

try {
    describeViaDynamoDocumentClient();
} catch (err) {
    const error = err as Error;
    newrelic.noticeError(error);
    console.log(`Dynamo Document Client Error: ${error.message}`);
}