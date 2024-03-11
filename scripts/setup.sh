aws dynamodb create-table \
    --table-name duplicate-middleware \
    --attribute-definitions AttributeName=id,AttributeType=S AttributeName=name,AttributeType=S \
    --key-schema AttributeName=id,KeyType=HASH AttributeName=name,KeyType=RANGE \
    --provisioned-throughput ReadCapacityUnits=5,WriteCapacityUnits=5 \
    --endpoint=http://localhost:8000