export type AmplifyDependentResourcesAttributes = {
    "storage": {
        "ppool2024db": {
            "Name": "string",
            "Arn": "string",
            "StreamArn": "string",
            "PartitionKeyName": "string",
            "PartitionKeyType": "string",
            "Region": "string"
        }
    },
    "function": {
        "ppool2024lambda": {
            "Name": "string",
            "Arn": "string",
            "Region": "string",
            "LambdaExecutionRole": "string"
        }
    },
    "api": {
        "ppool2024api": {
            "RootUrl": "string",
            "ApiName": "string",
            "ApiId": "string"
        }
    }
}