import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
import { ApiGateway } from "./ApiGateway";
import { Lambda } from "./Lambda";

export class TodoAppStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const api = new ApiGateway(this);

    const healthLambda = new Lambda(this, "health");
    const inspirationLambda = new Lambda(this, "inspiration");

    api.addIntegration("GET", "/health", healthLambda);
    api.addIntegration("GET", "/inspiration", inspirationLambda);
  }
}
