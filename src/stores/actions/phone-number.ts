import { UnknownAction } from "@reduxjs/toolkit";

export default (data: string): UnknownAction => ({
  type: "LOGINPHONENUMBER",
  data,
});
