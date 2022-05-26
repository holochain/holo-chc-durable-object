
// In order for the workers runtime to find the class that implements
// our Durable Object namespace, we must export it from the root module.
export { SourceChain } from './source_chain.mjs'

export default {
  async fetch(request, env) {
    try {
      return await handleRequest(request, env)
    } catch (e) {
      return new Response(e.message)
    }
  },
}

async function handleRequest(request, env) {
  let id = env.SOURCE_CHAIN.idFromName('A')
  let obj = env.SOURCE_CHAIN.get(id)
  let resp = await obj.fetch(request.url)
  return new Response(resp)
}
