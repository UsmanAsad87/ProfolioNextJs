const items = [
  "Flutter",
  "FastAPI",
  ".NET",
  "Next.js",
  "Python",
  "TypeScript",
  "PostgreSQL",
  "Redis",
  "RabbitMQ",
  "Firebase",
  "Kubernetes",
  "AWS",
  "Azure",
  "Anthropic",
  "OpenAI",
  "llama.cpp",
  "Keycloak",
  "Celery",
]

export default function Ticker() {
  const row = [...items, ...items]
  return (
    <div className="rule-t overflow-hidden border-b border-line py-5" aria-hidden>
      <div className="ticker items-center gap-10">
        {row.map((t, i) => (
          <span key={i} className="flex items-center gap-10 whitespace-nowrap">
            <span className="font-grotesk text-sm font-medium uppercase tracking-[0.18em] text-sub">{t}</span>
            <span className="h-1.5 w-1.5 rounded-full bg-[rgba(203,172,249,.5)]" />
          </span>
        ))}
      </div>
    </div>
  )
}
