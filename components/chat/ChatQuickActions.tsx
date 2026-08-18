import { AlertTriangle, CalendarClock, Gauge, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ChatQuickActionsProps {
  componentName: string | null;
  disabled: boolean;
  onSend: (message: string) => void;
}

export function ChatQuickActions({
  componentName,
  disabled,
  onSend,
}: ChatQuickActionsProps) {
  const actions = componentName
    ? [
        {
          label: "¿Cómo está este componente?",
          prompt: `¿Cómo está el componente ${componentName}?`,
          icon: Gauge,
        },
        {
          label: "¿Cuándo es su próximo mantenimiento?",
          prompt: `¿Cuándo es el próximo mantenimiento de ${componentName}?`,
          icon: Wrench,
        },
        {
          label: "Estado del puente grúa",
          prompt:
            "Dame un resumen ejecutivo del estado actual del puente grúa.",
          icon: AlertTriangle,
        },
      ]
    : [
        {
          label: "Estado del puente grúa",
          prompt:
            "Dame un resumen ejecutivo del estado actual del puente grúa.",
          icon: Gauge,
        },
        {
          label: "Próximos mantenimientos",
          prompt:
            "¿Cuáles son los próximos mantenimientos programados del puente grúa?",
          icon: CalendarClock,
        },
        {
          label: "¿Qué requiere atención?",
          prompt: "¿Qué requiere atención en el puente grúa en este momento?",
          icon: AlertTriangle,
        },
      ];

  return (
    <div className="grid gap-2" aria-label="Consultas sugeridas">
      {actions.map(({ label, prompt, icon: Icon }) => (
        <Button
          key={label}
          type="button"
          variant="outline"
          disabled={disabled}
          onClick={() => onSend(prompt)}
          className="h-auto min-h-10 justify-start whitespace-normal rounded-sm border-white/[0.09] bg-white/[0.025] px-3 py-2.5 text-left text-xs font-normal leading-4 text-slate-300 hover:border-sky-400/30 hover:bg-sky-400/[0.07] hover:text-sky-200"
        >
          <Icon
            size={14}
            className="shrink-0 text-sky-400"
            aria-hidden="true"
          />
          <span>{label}</span>
        </Button>
      ))}
    </div>
  );
}
