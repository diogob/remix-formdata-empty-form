import { Form } from "@remix-run/react";
import type { Request } from "@remix-run/web-fetch";

export const action = async ({request} : {request:Request}) => {
  console.log("YO", await request.formData())
  return null
}


export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <Form method="post">
        <button type="submit">Test</button>
      </Form>
    </div>
  );
}
