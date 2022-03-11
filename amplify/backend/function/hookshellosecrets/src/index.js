/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
export async function handler(event) {
  console.log(`EVENT: ${JSON.stringify(event)}`)
  return {
    statusCode: 200,
    body: JSON.stringify(`Hello ${process.env.HELLO_NAME}`),
  }
}
