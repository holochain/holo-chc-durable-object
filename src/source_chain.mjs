import { Router } from 'itty-router'


export class SourceChain {
  constructor(state, env) {
    this.state = state;
    // this.state.storage.put("latest", 0)

    this.router = Router()
    this.router.get(
      "/latest",
      async () => new Response(await this.fetchLatest()))
    this.router.get(
      "/transactions/:id",
      async ({ params }) => new Response(await this.fetchTransactions(params.id)))
    this.router.get(
      "/addSample/:id",
      async ({ params }) => new Response(await this.addSampleTransaction(params.id)))
    this.router.all('*', () => new Response('Not Found.', { status: 404 }))

  }

  // Handle HTTP requests from clients.
  async fetch(request) {
    return this.router.handle(request)
  }

  async fetchLatest() {
    const latest = await this.state.storage.get("latest");
    console.log(latest)
    return latest;
  }

  async fetchTransactions(txnId) {
    const latest = await this.fetchLatest();
    const txns = [];
    if (latest !== null) {
      for (let i = txnId || 0; i < latest; i++) {
        txns.push(await this.state.storage.get(i));
      }
    }
    return txns;
  }

  async addTransaction(txnId, headers) {
    if (await this.state.storage.get(txnId) === undefined) {
      await this.state.storage.put(txnId, headers);
      return new Response("ok")
    } else {
      return new Response(await this.fetchTransactions(txnId), { status: 400 })
    }
  }

  async addSampleTransaction(txnId) {

  }

}
