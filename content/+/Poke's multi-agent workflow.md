![agent-diagram](https://www.shloked.com/images/blog/poke/openpoke_architecture.jpg)

So basically the Poke multi-agent workflow is very simple. It has a centralized agent that orchestrates different requests to specialized execution agents. It has only simple tools:

1. Route requests to specific execution agents
2. Reply to the user
3. Draft up responses to the user

Each execution agent is specialized at certain tasks and they hold the memory of what they have done. Therefore, there's no centralized state that's held by interaction agent. Interaction agent only has memory of which agents are doing what, not exactly what the response graph is. Each execution agent has memory of the response graph.