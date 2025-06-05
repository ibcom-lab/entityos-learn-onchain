# entityOS API | On-Chain


## Learn

- https://learn.entityos.cloud
- https://learn.entityos.cloud/learn-quick-start-on-chain
- https://cardano.build

## Notes

- index.js for autmation processes
- index-api.js for the API
- node_modules/onchainfactory

## Tech

https://learn.entityos.cloud/learn-function-automation

Works with the AWS API Gateway.

Data format from API Gateway:

{
	"body":
	{
		"apikey": "[user-id]",
		"authkey": "[user-password]",
		"method": "[your domain specific method name]"
	},
	"queryStringParameters": {},
	"headers": {}
}

POST | https://onchain.api.entityos.cloud
{
    "_context": "lab",
    "apikey": "",
    "authkey": "",
    "method": "verify-signed-data",
    "data": {
        "verify": {
            "key": "",
            "signature": "",
            "datatoverify": "1234",
            "stakeaddress": "stake1u9ehkflqclys20wylg8hxe90atr7hn8jmnzlj3f27hdm3hqwfw72q",
            "policy": "f0ff48bbb7bbe9d59a40f1ce90e9e9d0ff5002ec48f232b49ca0fb9"
        }
    }
}


