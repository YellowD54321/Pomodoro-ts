import { WEBSITE_NAME } from "./config";

export const ACCOUNT_MESSAGE = {
  LOGIN_FAIL: "Login failed. Please refesh the page and try agian.",
  GOOGLE_ACCOUNT_NOT_REGISTERED_TITLE: `This Google account didn't register on ${WEBSITE_NAME}.`,
  GOOGLE_ACCOUNT_NOT_REGISTERED_CONTENT:
    "Would you like to register an account with this Google Account?",
};

export const DURATION_MESSAGE = {
  POST_FAIL: (durationType: "work" | "rest") =>
    `Duration post failed on ${durationType}`,
  POST_TEST_DATA_FAIL: "Duration post failed.",
  POST_TEST_DATA_SUCCESS: "Duration post successful",
};
