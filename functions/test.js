export async function onRequest(context) {
  const { env } = context;

  return new Response(
    "D1是否连接: " + (env.DB ? "成功" : "失败")
  );
}
