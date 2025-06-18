// src/handler.ts
import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { paths } from "./types";

type UserRequest = paths["/users"]["post"]["requestBody"]["content"]["application/json"];
type UserResponse = paths["/users"]["post"]["responses"]["200"]["content"]["application/json"];

export const handler = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  try {
    const body: UserRequest = JSON.parse(event.body || "{}");

    // バリデーション例（必要に応じてライブラリを使ってもOK）
    if (!body.name || !body.email) {
      return {
        statusCode: 400,
        body: JSON.stringify({ message: "Missing required fields" }),
      };
    }

    // モック処理（本来はDB登録など）
    const response: UserResponse = {
      id: "user_" + Date.now(),
      name: body.name,
      email: body.email,
    };

    return {
      statusCode: 200,
      body: JSON.stringify(response),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Internal Server Error" }),
    };
  }
};
