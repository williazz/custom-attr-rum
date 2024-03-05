import { AwsRum, AwsRumConfig } from "aws-rum-web";
export let awsRum: AwsRum | null;

try {
  const config: AwsRumConfig = {
    // ...
    sessionEventLimit: 0,
  };

  const APPLICATION_ID: string = "xxx";
  const APPLICATION_VERSION: string = "xxx";
  const APPLICATION_REGION: string = "xxx";

  awsRum = new AwsRum(
    APPLICATION_ID,
    APPLICATION_VERSION,
    APPLICATION_REGION,
    config
  );
  awsRum.addSessionAttributes({ count: -1 });
} catch (error) {
  // Ignore errors thrown during CloudWatch RUM web client initialization
  console.log("Rum load error", error);
}
