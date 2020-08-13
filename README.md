# Highly Available Network Stack Using AWS CDK + TypeScript

- [Highly Available Network Stack Using AWS CDK + TypeScript](#highly-available-network-stack-using-aws-cdk--typescript)
  - [Accessing Container](#accessing-container)
  - [Initializing the Project](#initializing-the-project)
  - [Useful commands](#useful-commands)
  - [Installing additional dependencies:](#installing-additional-dependencies)
  - [Creating VPC using AWS-CDK](#creating-vpc-using-aws-cdk)

## Accessing Container
```
docker-compose run node bash
```

## Initializing the Project
```
cdk init app --language=typescript
```

## Useful commands

The `cdk.json` file tells the CDK Toolkit how to execute your app.

 * `npm run build`   compile typescript to js
 * `npm run watch`   watch for changes and compile
 * `npm run test`    perform the jest unit tests
 * `cdk deploy`      deploy this stack to your default AWS account/region
 * `cdk diff`        compare deployed stack with current state
 * `cdk synth`       emits the synthesized CloudFormation template

## Installing additional dependencies:
```
npm i @aws-cdk/aws-ec2
```

## Creating VPC using AWS-CDK
Click here to see the code: [lib/app-stack.ts](./lib/app-stack.ts)