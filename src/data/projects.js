// EDIT THIS FILE: replace these templates with your REAL projects.
// Add github / demo URLs. Empty links are hidden automatically.
export const projects = [
  {
    title: 'RAG Knowledge Assistant',
    tagline: 'Chat with your documents, with cited answers.',
    stack: ['Node.js', 'LangChain', 'PostgreSQL', 'pgvector'],
    problem: 'Teams lose time searching long PDFs and wikis, and plain LLM answers hallucinate.',
    built: 'Ingestion pipeline (chunking, embeddings) into pgvector, hybrid retrieval, and an answer chain that returns sources for every claim.',
    highlights: ['Chunking + metadata filters', 'Source citations in every answer', 'Simple eval set to track answer quality'],
    github: '', demo: '',
  },
  {
    title: 'Sandboxed Code Agent',
    tagline: 'An agent that writes and runs code safely.',
    stack: ['Node.js', 'LangChain', 'Sandbox runtime', 'Postgres'],
    problem: 'Letting an LLM execute code is risky without isolation, limits and an audit trail.',
    built: 'Tool-calling agent that runs generated code inside an isolated sandbox with time and resource limits, and stores every run in Postgres.',
    highlights: ['Isolated execution per task', 'Timeouts and resource limits', 'Full run logs for debugging'],
    github: '', demo: '',
  },
  {
    title: 'Semantic Search API',
    tagline: 'Meaning-based search over your own data.',
    stack: ['Node.js', 'Vector DB', 'Embeddings', 'REST'],
    problem: 'Keyword search misses results when users phrase things differently.',
    built: 'REST API that embeds content, stores vectors, and serves ranked results with filters, ready to plug into any frontend.',
    highlights: ['Batch + incremental indexing', 'Metadata filtering', 'Clean, documented endpoints'],
    github: '', demo: '',
  },
  {
    title: 'Multi-Tool Agent Backend',
    tagline: 'One agent, many tools, persistent memory.',
    stack: ['Node.js', 'LangChain', 'PostgreSQL', 'Streaming'],
    problem: 'Real assistants need tools, memory and streaming, not just a single prompt.',
    built: 'Agent service with tool routing (search, database, APIs), conversation memory in Postgres, and streamed responses.',
    highlights: ['Tool routing and error handling', 'Conversation memory', 'Streaming responses'],
    github: '', demo: '',
  },
]
