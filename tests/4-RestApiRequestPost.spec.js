import { test, expect, request } from "@playwright/test";

test("Customize product and add to the basket", async ({ request }) => {
  const restApiUrl = "https://qa7-restapi.solutions4delivery.com";
  const existedEmailPayload = {
    emailAddress: "qa+TA_qa7no_saved_address@solutions4delivery.com",
  };
  const notExistedEmailPayload = {
    emailAddress: "qa+TA_qa17no_saved_address@solutions4delivery.com",
  };
  const existedEmailStatus = await request.post(
    restApiUrl + "/api/v1/email-exists",
    {
      data: existedEmailPayload,
      headers: {
        apiKey: "7c6580a2-43d3-4e37-882f-34b28f20e9fd",
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }
  );
  expect(existedEmailStatus.ok).toBeTruthy();
  expect(existedEmailStatus.status()).toBe(200);
  const responseBody = await existedEmailStatus.json();
  console.log(responseBody);
  expect(responseBody.data.exists).toBe(true);
  expect(responseBody.data).toHaveProperty("exists", true);

  const notExistedEmailStatus = await request.post(
    restApiUrl + "/api/v1/email-exists",
    {
      data: notExistedEmailPayload,
      headers: {
        apiKey: "7c6580a2-43d3-4e37-882f-34b28f20e9fd",
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }
  );
  expect(notExistedEmailStatus.ok).toBeTruthy();
  expect(notExistedEmailStatus.status()).toBe(200);
  const responseBody2 = await notExistedEmailStatus.json();
  console.log(responseBody2);
  expect(responseBody2.data.exists).toBe(false);
  expect(responseBody2.data).toHaveProperty("exists", false);
});
