import * as cdk from '@aws-cdk/core';
import { Peer, Port, SecurityGroup, SubnetType, Vpc } from '@aws-cdk/aws-ec2'


export class AppStack extends cdk.Stack {


  params = {
    'cidr': '10.10.0.0/16'
  }

  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const vpc = new Vpc(this, 'HAVpc', {
      cidr: this.params.cidr,
      maxAzs: 3,
      subnetConfiguration: [{
        cidrMask: 26,
        name: 'isolatedSubnet',
        subnetType: SubnetType.ISOLATED
      }]
    })
  }
}
