// src/handler.ts

import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { addNumbers } from './service';

export const handler = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  const query = event.queryStringParameters || {};

  const a = parseFloat(query.a || '');
  const b = parseFloat(query.b || '');

  if (isNaN(a) || isNaN(b)) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: 'Invalid or missing parameters: a, b' }),
    };
  }

  const result = addNumbers(a, b);

  return {
    statusCode: 200,
    body: JSON.stringify({ result }),
  };
};